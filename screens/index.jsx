import { React, Navigator, Screen, useHome } from "./utils";

export function useNavigator() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={useHome} />
    </Navigator>
  );
}
