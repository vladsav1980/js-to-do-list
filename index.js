class Todo {
  static #list = []
  static #count = 0
  static #NAME = 'todo'
  static #categories = {
    'Напої безалкогольні': [
      'напі',
      'сік',
      'вода',
      'кола',
      'сок',
      'лимонад',
      'коктейл',
      'енергет',
      'сироп',
      'тонік',
      'оранжад',
    ],
    'Кондитерські вироби': [
      'печив',
      'цукерки',
      'шоколад',
      'мармелад',
      'браун',
      'вафл',
      'пончик',
      'желе',
      'попкорн',
      'кекс',
      'зефір',
      'цукер',
      'суфле',
      'нутел',
    ],
    'Хлібобулочні вироби': [
      'хліб',
      'булк',
      'булочк',
      'багет',
      'пончик',
      'круасан',
      'батон',
      'бухан',
      'пряник',
      'бубл',
      'лаваш',
    ],
    'Дитяче харчування': ['пюре', 'суміш', 'каша'],
    Бакалія: [
      'сіль',
      'цукор',
      'рис',
      'макарон',
      'гречка',
      'олія',
      'чай',
      'кав',
      'овес',
      'бульйон',
      'борошн',
      'горіх',
      'сухофрукт',
      'сухарі',
      'гірчиц',
      'куркум',
      'перц',
      'кетчуп',
      'томатна паста',
      'оцет',
      'кориц',
      'чорний перець',
      'цукр',
      'майо',
    ],
    'Овочі та фрукти': [
      'яблук',
      'банан',
      'картопл',
      'помідор',
      'персик',
      'брокколі',
      'морк',
      'капуст',
      'петрушк',
      'буряк',
      'гарбуз',
      'кабач',
      'перець',
      'цибул',
      'часник',
      'салат',
      'селер',
      'баклажан',
      'груш',
      'апельсин',
      'мандарин',
      'лимон',
      'грейпфрут',
      'киві',
      'ананас',
      'виноград',
      'абрикос',
      'слив',
      'черешн',
      'вишн',
      'ківі',
      'папайя',
      'манго',
      'гуава',
      'фрукт',
      'овоч',
      'огір',
      'гриб',
    ],
    Алкоголь: [
      'вино',
      'пиво',
      'горіл',
      'віскі',
      'джин',
      'коньяк',
      'ром',
      'віскі',
      'вермут',
      'ликер',
      'шампан',
      'текіл',
      'бурбон',
      'самбук',
      'віскі',
      'мартіні',
      'сідер',
      'лікер',
    ],
    'Торти і тістечка': [
      'торт',
      'кекс',
      'пиріг',
      'еклер',
      'медовик',
      'чизкейк',
    ],
    'Молочні продукти': [
      'моло',
      'йогурт',
      'сир',
      'творо',
      'кисломол',
      'кефір',
      'сметан',
      'масл',
      'вершк',
      'ряжанк',
      'бринз',
      'моцарел',
    ],
    'Заморожені продукти': [
      'морозив',
      'шпинат',
      'пельмен',
      'заморожен',
      'вареник',
    ],
    "Ковбаса і м'ясні делікатеси": [
      'ковбас',
      'шинк',
      'салямі',
      'сосис',
      'грудинк',
      'бекон',
      'грудинка',
      'паштет',
      'консерв',
    ],
    "М'ясо та яйця": [
      'кур',
      'свин',
      'яйц',
      'ялов',
      "м'яс",
      'баран',
      'крол',
      'інди',
      'фарш',
      'гус',
      'сало',
      'теля',
      'філе',
      'печін',
    ],
    'Риба і морепродукти': [
      'лосос',
      'кревет',
      'тунець',
      'лосось',
      'міді',
      'кальмар',
      'сьомг',
      'тріск',
      'кревет',
      'оселед',
      'карас',
      'анчоус',
      'пангасіус',
      'окун',
      'омар',
      'краб',
      'ікр',
    ],
    'Гігієна і косметика': [
      'мил',
      'шампун',
      'зубн',
      'зубна паста',
      'памперс',
      'дезодорант',
      'гель',
      'крем',
      'дезодорант',
      'волосся',
      'лосьйон',
      'бритв',
      'стан',
      'пін',
      'парфум',
      'туалет',
      'ватн',
      'помад',
      'тіні',
      'туш',
      'бальзам',
      'сервет',
    ],
    'Побутова хімія': [
      'порош',
      'миюч',
      'чищен',
      'фейр',
      'прал',
      'повітря',
      'плям',
      'мускул',
      'миття',
      'відбілювач',
      'підлоги',
      'чищен',
      'меблів',
      'засіб',
      'губк',
    ],
    'Товари для дому': [
      'сковорідк',
      'посуд',
      'ковдр',
      'світильник',
      'праска',
      'соковитискач',
      'кастрюл',
      'ложка',
      'видел',
      'нож',
      'салатник',
      'тарілк',
      'склян',
      'горщик',
      'чайник',
      'дошка',
      'блендер',
      'тостер',
      'кавоварка',
      'подушка',
      'ковдра',
      'стілець',
      'шафа',
      'комод',
      'полиця',
      'коврик',
      'віша',
      'люстра',
      'світильник',
      'столик',
      'диван',
      'тумба',
      'штори',
    ],
    'Канцелярські товари': [
      'ручк',
      'папір',
      'фломастер',
      'олів',
      'флом',
      'кни',
      'файл',
      'гумк',
      'маркер',
      'блокнот',
      'калькулятор',
      'клей',
      'папка',
      'конверт',
      'скріпк',
      'газет',
      'журн',
      'документ',
      'циркуль',
      'лист',
      'зошит',
    ],
    'Товари для тварин': ['корм', 'наповнювач'],
    Інше: [],
    'Non-alcoholic drinks': [
      'drink',
      'juice',
      'water',
      'cola',
      'juice',
      'lemonade',
      'cocktail',
      'energy',
      'syrup',
      'tonic',
      'orange',
    ],
    Confectionery: [
      'cookie',
      'sweets',
      'chocolate',
      'marmalade',
      'brown',
      'waffle',
      'jelly',
      'popcorn',
      'marshmallow',
      'souffle',
      'nutella',
    ],
    'Baked goods': [
      'bread',
      'roll',
      'bun',
      'baguette',
      'donut',
      'croissant',
      'baton',
      'gingerbread',
      'pita',
    ],
    'Baby food': ['puree', 'mixture', 'porridge'],
    Groceries: [
      'salt',
      'sugar',
      'rice',
      'pasta',
      'buckwheat',
      'oil',
      'tea',
      'coffee',
      'oats',
      'bouillon',
      'flour',
      'nut',
      'dried fruit',
      'crackers',
      'mustard',
      'turmeric',
      'pepper',
      'ketchup',
      'tomato paste',
      'vinegar',
      'black pepper',
      'mayonnaise',
    ],
    'Vegetables and fruits': [
      'apple',
      'banana',
      'potato',
      'tomato',
      'peach',
      'broccoli',
      'carrot',
      'cabbages',
      'parsley',
      'beet',
      'pumpkin',
      'courgette',
      'pepper',
      'onion',
      'garlic',
      'salad',
      'eggplant',
      'pear',
      'orange',
      'tangerine',
      'lemon',
      'grapefruit',
      'kiwi',
      'pineapple',
      'grape',
      'apricot',
      'cherry',
      'papaya',
      'mango',
      'guava',
      'fruit',
      'vegetable',
      'cucumber',
      'mushroom',
    ],
    Alcohol: [
      'wine',
      'beer',
      'gorilla',
      'whisky',
      'gin',
      'cognac',
      'rum',
      'whisky',
      'vermouth',
      'liqueur',
      'champagne',
      'bourbon',
      'Sambuk',
      'whisky',
      'Martini',
      'liqueur',
    ],
    'Cakes and pastries': [
      'pie',
      'cake',
      'eclair',
      'honeybee',
      'cheesecake',
    ],
    'Dairy products': [
      'milk',
      'yogurt',
      'cheese',
      'kefir',
      'cream',
      'mozzarella',
    ],
    'Frozen foods': [
      'ice cream',
      'spinach',
      'dumplings',
      'frozen',
    ],
    'Sausage and meat delicacies': [
      'sausage',
      'salami',
      'breast',
      'bacon',
      'brisket',
      'pate',
      'can',
    ],
    'Meat and Eggs': [
      'meat',
      'pig',
      'egg',
      'beef',
      'meat',
      'turkey',
      'goose',
      'fat',
      'calf',
      'fillet',
      'liver',
    ],
    'Fish and seafood': [
      'salmon',
      'bed',
      'tuna',
      'squid',
      'herring',
      'anchovy',
      'pangasius',
      'lobster',
      'crab',
      'caviar',
    ],
    'Hygiene and cosmetics': [
      'soap',
      'shampoo',
      'tooth',
      'diaper',
      'deodorant',
      'gel',
      'cream',
      'hair',
      'lotion',
      'razors',
      'perfume',
      'toilet',
      'cotton wool',
      'lipstick',
      'shadows',
      'balm',
      'napkin',
    ],
    'Household chemicals': [
      'powder',
      'clean',
      'fair',
      'laundry',
      'air',
      'stain',
      'muscle',
      'washing',
      'bleach',
      'floors',
      'clean',
      'furniture',
      'sponge',
    ],
    'Home Goods': [
      'pan',
      'dishes',
      'blanket',
      'lamp',
      'peach',
      'juicer',
      'pan',
      'spoon',
      'saw',
      'knife',
      'salad bowl',
      'plate',
      'glass',
      'pot',
      'kettle',
      'board',
      'blender',
      'toaster',
      'coffee maker',
      'pillow',
      'blanket',
      'chair',
      'wardrobe',
      'commode',
      'shelf',
      'rug',
      'hanger',
      'chandelier',
      'lamp',
      'table',
      'sofa',
      'mound',
      'curtains',
    ],
    Stationery: [
      'pen',
      'paper',
      'book',
      'file',
      'rubber',
      'marker',
      'notebook',
      'calculator',
      'glue',
      'folder',
      'envelope',
      'clip',
      'newspaper',
      'magazine',
      'document',
      'copybook',
    ],
    'Animal products': ['feed', 'filler'],
    Other: [],
  }

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

  static #render = () => {
    this.#block.innerHTML = ''

    if (this.#list.length === 0) {
      this.#block.innerText = 'The list is empty'
    } else {
      const categories = Object.keys(this.#categories)
      let englishOtherCategoryExists = false
      let cyrillicOtherCategoryExists = false

      categories.forEach((category) => {
        const productsInCategory = this.#list.filter(
          (item) =>
            this.#categories[category].some((keyword) =>
              item.text
                .toLowerCase()
                .includes(keyword.toLowerCase()),
            ),
        )

        if (productsInCategory.length > 0) {
          const categoryItem = document.createElement('div')
          categoryItem.classList.add('category')
          categoryItem.innerText = category
          this.#block.appendChild(categoryItem)

          productsInCategory.forEach((taskData) => {
            const el = this.#createTaskElem(taskData)
            this.#block.append(el)
          })
        }
      })

      this.#list.forEach((item) => {
        const inAnyCategory = categories.some((category) =>
          this.#categories[category].some((keyword) =>
            item.text
              .toLowerCase()
              .includes(keyword.toLowerCase()),
          ),
        )

        if (!inAnyCategory) {
          const isEnglish = /^[A-Za-z0-9]+$/.test(item.text)

          if (isEnglish) {
            if (!englishOtherCategoryExists) {
              const categoryItem =
                document.createElement('div')
              categoryItem.classList.add('category')
              categoryItem.innerText = 'Other'
              this.#block.appendChild(categoryItem)
              englishOtherCategoryExists = true
            }

            const el = this.#createTaskElem(item)
            this.#block.append(el)
          } else {
            if (!cyrillicOtherCategoryExists) {
              const categoryItem =
                document.createElement('div')
              categoryItem.classList.add('category')
              categoryItem.innerText = 'Інше'
              this.#block.appendChild(categoryItem)
              cyrillicOtherCategoryExists = true
            }

            const el = this.#createTaskElem(item)
            this.#block.append(el)
          }
        }
      })
    }
  }
}

Todo.init()

window.todo = Todo
