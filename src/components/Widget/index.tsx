import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { theme } from '../../theme';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottonSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottonSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          weight='bold'
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottonSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form feedbackType='BUG' />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
