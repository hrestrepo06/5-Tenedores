import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

import RestaurantsStacks from "./RestaurantsStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStacks from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStacks}
          option={{ title: "RESTAURANT.." }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoritesStack}
          option={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStacks}
          option={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchStack}
          option={{ title: "Busqueda" }}
        />
        <Tab.Screen
          name="account"
          component={AccountStack}
          option={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let icoName;

  switch (route.name) {
    case "restaurants":
      icoName = "compass-outline";
      break;
    case "favorites":
      icoName = "heart-outline";
      break;
    case "top-restaurants":
      icoName = "star-outline";
      break;
    case "search":
      icoName = "magnify";
      break;
    case "account":
      icoName = "home-outline";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={icoName} size={22} color={color} />
  );
}
