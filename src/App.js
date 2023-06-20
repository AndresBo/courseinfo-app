
// create a section HTML component for each course and using map, send each part to Content component
const Header = ({courseName, courseContent}) => {
  console.log(courseContent)
  return (
  <section>
    <h2>{courseName}</h2>
    {courseContent.map(part => <Content key={part.id} part={part.name} exercises={part.exercises}/>)}
    <TotalExercises parts={courseContent}/>
  </section>
  )
}


// creates a <p> element for each part 
const Content = ({part, exercises}) => <p>{part} {exercises}</p>

// As an exercise, added the number of exercises in each course using a for loop or a reducer

// get sum of exercises in a course - use FOR LOOP:
// const TotalExercises = ({parts}) => {
//   let total = 0
//   for (var i = 0; i < parts.length; i++) {
//     total += parts[i].exercises
//   }
  
//   return (
//     <p><b>total of {total} exercises</b></p>
//   )
// }

// get sum of exercises in a course - use REDUCER:
const TotalExercises = ({parts}) => {
  const sumWith = parts.reduce(
    (accumulator, parts) => accumulator + parts.exercises, 0)
  return <p>Total number of exercises: {sumWith}</p>
}


// Get courses array and using map, passes each course name and parts to Header component:
const Courses = ({courses}) => {
    return (
      <div>
        <h1>Web Dev Courses</h1>
        {courses.map(course => <Header key={course.id} courseName={course.name} courseContent={course.parts}/>)}
      </div>
    )
}

// root component with courses array of data, passes all courses array to Courses component:
const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Courses courses={courses} />
  )
}


export default App;
