// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json({
    projects: [
    {
      id: 1,
      uid: "https://github.com/raianegomes1805/Calculadora-HTML-CSS-/",
      name: "https://github.com/raianegomes1805/Calculadora-HTML-CSS-/",
      createdBy: "raianegomes1805",
      completedOn: "20 março 2020",
      categories: ["https://github.com/raianegomes1805/Calculadora-HTML-CSS-/"],
      link: "https://github.com/raianegomes1805/Calculadora-HTML-CSS-/",
      description: "uma calculadora,criado com html,css e java Script"
    },
    {
      id: 2,
      uid: "https://github.com/raianegomes1805/chat-dashboard",
      name: "https://github.com/raianegomes1805/chat-dashboard",
      createdBy: "Raiane Gomes dos Santos",
      completedOn: "25 feveireiro 2020",
      categories: ["https://github.com/raianegomes1805/chat-dashboard"],
      link: "https://github.com/raianegomes1805/chat-dashboard",
      description: "um trabalho da faculdade em fazer panel em HTML"
    }
  ]
  })
}