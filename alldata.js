function AllData(){
	const ctx = React.useContext(UserContext);
	const userData = ctx.users.map((user, index) =>{
		return <li key={index}> {user.name}, {user.email}, {user.password}, {user.balance} </li>
	});

	return(
		<Card
		bgcolor="primary"
		 header="User Data"
		body=<ul>{userData}</ul>
		/>
	); 
}