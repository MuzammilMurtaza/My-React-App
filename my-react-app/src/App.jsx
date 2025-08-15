import Student from "./Student"
function App() {
return(
  <>
  <Student name="Muzammil Murtaza" age={23} isStudent={true}/>
  <Student name="Mohsin Murtaza" age={34} isStudent={false}/>
  <Student name="Danish" age={39} isStudent={false}/>
  <Student name="Mubashir" age={22} isStudent={true}/>
  <Student />
  </>
);
}

export default App
