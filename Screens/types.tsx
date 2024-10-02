import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  TelaDois: undefined;
  TelaTres: undefined;
  TelaQuatro: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type TelaDoisNavigationProp = StackNavigationProp<RootStackParamList, 'TelaDois'>;
export type TelaTresNavigationProp = StackNavigationProp<RootStackParamList, 'TelaTres'>;

