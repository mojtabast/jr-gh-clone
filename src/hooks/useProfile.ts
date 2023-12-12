import { useEffect, useReducer, useState } from "react";
import { getUser, User } from "../api/user";

const username = "madler";

interface Action {
  type: string;
  payload: any;
}

interface State {
  user: User;
  loading: boolean;
  error: boolean;
}

function reducer(state: State, action: Action) {
  if (action.type === "update_loading") {
    const nextLoading = action.payload.loading;
    return {
      ...state,
      loading: nextLoading,
    };
  }

  if (action.type === "update_error") {
    const nextError = action.payload.error;
    return {
      ...state,
      error: nextError,
      loading: false,
    };
  }

  if (action.type === "update_user") {
    const nextUser = action.payload.user;
    return {
      ...state,
      user: nextUser,
      loading: false,
    };
  }

  return state;
}

function useProfile() {
  // const [user, setUser] = useState<User>();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  const initState = {
    user: undefined,
    loading: true,
    error: false,
  };
  const [data, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    dispatch({
      type: "update_loading",
      payload: {
        loading: true,
      },
    });
    dispatch({
      type: "update_error",
      payload: {
        error: false,
      },
    });
    // setLoading(true);
    // setError(false);
    getUser(username)
      .then((data) => {
        // setUser(data);

        dispatch({
          type: "update_user",
          payload: {
            user: data,
          },
        });
      })
      .catch((e) => {
        dispatch({
          type: "update_error",
          payload: {
            error: true,
          },
        });
        // setError(true);
      });
    // .finally(() => {
    //   // setLoading(false);

    //   dispatch({
    //     type: "update_loading",
    //     payload: {
    //       loading: false,
    //     },
    //   });
    // });
  }, []);

  return {
    user: data.user,
    loading: data.loading,
    error: data.error,
  };
}

export { useProfile };
