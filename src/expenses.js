import { v4 as uuidv4 } from "uuid"

const date = new Date()

export const expenses = [
  {
    id: uuidv4(),
    amount: 650000,
    title: "Título del gasto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, minima. Consequatur autem labore.",
    date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
  },
  {
    id: uuidv4(),
    amount: 67000,
    title: "Título del gasto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, minima. Consequatur autem labore.",
    date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
  },
  {
    id: uuidv4(),
    amount: 30000,
    title: "Título del gasto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, minima. Consequatur autem laborewefvewk;lf noen fewoiufbwebbweibfiuwbeiu fbiwe.",
    date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
  },
  {
    id: uuidv4(),
    amount: 3004600,
    title: "Título del gasto 4",
    description:
      "Lorem ipsum dolor sit amet, consectet ewfnuo fwenouwenownnow oio wienoweb  bo ubow  ur adipisicing elit. Facilis, minima. Consequatur autem laborewefvewk;lf noen fewoiufbwebbweibfiuwbeiu fbiwe.",
    date: `${date.getDate()}, ${date.getMonth() + 1}, ${date.getFullYear()}`,
  },
]
