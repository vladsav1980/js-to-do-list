class Todo {
  static #list = []
  static #count = 0
  static #NAME = 'todo'

  static #saveData = () => {
    localStorage.setItem(
      this.#NAME,
      JSON.stringify({
        list: this.#list,
        count: this.#count,
      }),
    )
  }

  static #loadData = () => {
    const data = localStorage.getItem(this.#NAME)

    if (data) {
      const { list, count } = JSON.parse(data)
      this.#list = list
      this.#count = count
    }
  }

  static #createTaskData = (text) => {
    this.#list.push({
      id: ++this.#count,
      text,
      done: false,
    })
  }
  static #block = null
  static #template = null
  static #input = null
  static #button = null
  static #clear = null

  static init = () => {
    this.#template =
      document.getElementById(
        'task',
      ).content.firstElementChild

    this.#block = document.querySelector('.task__list')
    this.#input = document.querySelector('.form__input')
    this.#button = document.querySelector('.form__button')
    this.#clear = document.querySelector(
      '.form__button--clear',
    )

    this.#button.onclick = this.#handleAdd
    this.#input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.#handleAdd()
      }
    })

    this.#clear.onclick = this.#handleClear
    this.#loadData()
    this.#render()
  }

  static #handleAdd = () => {
    const value = this.#input.value
    if (value.length > 1) {
      this.#createTaskData(value)
      this.#input.value = ''
      this.#render()
      this.#saveData()
    }
  }

  static #render = () => {
    this.#block.innerHTML = ''

    if (this.#list.length === 0) {
      this.#block.innerText = 'The list is empty'
    } else {
      this.#list.forEach((taskData) => {
        const el = this.#createTaskElem(taskData)
        this.#block.append(el)
      })
    }
  }

  static #createTaskElem = (data) => {
    const el = this.#template.cloneNode(true)

    const [id, text, btnDo, btnCancel] = el.children

    id.innerText = ''

    text.innerText = data.text

    text.onclick = () => this.#handleDo(data, btnDo, el)

    btnDo.onclick = () => this.#handleDo(data, btnDo, el)

    btnCancel.onclick = () => this.#handleCancel(data)

    if (data.done) {
      el.classList.add('task--done')
      btnDo.classList.add('task__button--done')
      btnDo.classList.remove('task__button--do')
    }
    return el
  }

  static #handleDo = (data, btn, el) => {
    const result = this.#toggleDone(data.id)
    if (result === true || result === false) {
      el.classList.toggle('task--done')
      btn.classList.toggle('task__button--done')
      btn.classList.toggle('task__button--do')
      this.#saveData()
    }
  }

  static #toggleDone = (id) => {
    const task = this.#list.find((item) => item.id === id)
    if (task) {
      task.done = !task.done
      return task.done
    } else {
      return null
    }
  }

  static #handleCancel = (data) => {
    const result = this.#deleteById(data.id)
    if (result) {
      this.#render()
      this.#saveData()
    }
  }

  static #deleteById = (id) => {
    this.#list = this.#list.filter((item) => item.id !== id)
    return true
  }

  static #handleClear = () => {
    this.#list = []
    this.#count = 0
    localStorage.removeItem(this.#NAME)
    this.#render()
  }
}

Todo.init()

window.todo = Todo
