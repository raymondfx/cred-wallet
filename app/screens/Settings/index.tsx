import React, { useCallback } from 'react';
import { SectionList, View, Text, Image, TouchableOpacity } from 'react-native';

import { SettingsScreenProps } from './settings.props';
import { styles } from './settings.styles';
import { SettingsHeader } from '../../components';
import { MENU_ITEMS, IMenuOption } from './settings.data';
import { useKeyExtractor } from '../../utils/hooks';
import { IMAGES } from '../../assets';

export const SettingsScreen: React.FC<SettingsScreenProps> = ({
  navigation,
}) => {
  // const dispatch = useDispatch();

  const renderSectionHeader = useCallback(
    ({ section: { title } }) => (
      <Text style={styles.sectionTitle}>{title}</Text>
    ),
    [],
  );

  const renderSectionItem = useCallback(
    ({ item }: { item: IMenuOption }) => (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.navigateTo)}
        style={styles.itemContainer}
      >
        <Image source={item.iconSource} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Image
          source={IMAGES.CHEVRON_RIGHT_PURPLE}
          style={styles.itemChevron}
        />
      </TouchableOpacity>
    ),
    [],
  );

  const keyExtractor = useKeyExtractor<IMenuOption>('menu-option');

  return (
    <View style={styles.container}>
      <SettingsHeader title="Settings" />

      <View style={styles.contentContainer}>
        <SectionList
          sections={MENU_ITEMS}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderSectionItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};
