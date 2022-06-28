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

  const moveEmployees = (id1, id2) =>{
    let index1;
    let index1_2;
    let index2;
    let index2_1;
    
    index1 =enterprises.findIndex(el => el.departments.find((elem, index) =>{
      index1_2 = index
      return elem.id === id1
    }))
    index2 =enterprises.findIndex(el => el.departments.find((elem, index) =>{
      index2_1 = index
      return elem.id === id2
    }))
    enterprises[index2].departments[index2_1].employees_count +=enterprises[index1].departments[index1_2].employees_count
      enterprises[index1].departments[index1_2].employees_count=0;
    }
    moveEmployees(2, 7)
    
    console.log(enterprises[0], enterprises[1])