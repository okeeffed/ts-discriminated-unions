type AddOneAction = {
  type: "ADD_ONE";
  payload: number;
};

type AddTwoAction = {
  type: "ADD_TWO";
  payload: number;
};

type IndexUser = {
  name: string;
  age: number;
};

type ReturnUserNameAction = {
  type: "RETURN_USER_NAME";
  payload: IndexUser;
};

type Action = AddOneAction | AddTwoAction | ReturnUserNameAction;

function take(action: Action) {
  switch (action.type) {
    case "ADD_ONE":
      return 1 + action.payload;
    case "ADD_TWO":
      return 2 + action.payload;
    case "RETURN_USER_NAME":
      return action.payload.name;
  }
}

take({ type: "ADD_ONE", payload: 1 });
take({ type: "ADD_TWO", payload: 2 });
take({
  type: "RETURN_USER_NAME",
  payload: {
    name: "Dennis",
    age: 30,
  },
});
