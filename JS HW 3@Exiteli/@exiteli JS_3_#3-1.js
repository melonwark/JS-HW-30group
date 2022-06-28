const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]
let text = `${enterprises[0].name} (${(enterprises[0].departments[0].employees_count+enterprises[0].departments[1].employees_count+enterprises[0].departments[2].employees_count)} сотрудников)\n-${enterprises[0].departments[0].name}(${enterprises[0].departments[0].employees_count} сотрудников)\n-${enterprises[0].departments[1].name}(${enterprises[0].departments[1].employees_count} сотрудников)\n-${enterprises[0].departments[2].name}(${enterprises[0].departments[2].employees_count} сотрудников)\n
${enterprises[1].name} (${(enterprises[1].departments[0].employees_count+enterprises[1].departments[1].employees_count+enterprises[1].departments[2].employees_count)} сотрудников)\n-${enterprises[1].departments[0].name}(${enterprises[1].departments[0].employees_count} сотрудников)\n-${enterprises[1].departments[1].name}(${enterprises[1].departments[1].employees_count} сотрудников)\n-${enterprises[1].departments[2].name}(${enterprises[1].departments[2].employees_count} сотрудников)\n
${enterprises[2].name} (нет сотрудников)\n-${enterprises[2].departments[0].name} (нет сотрудников)`
 

console.log(text)