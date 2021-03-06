import React from 'react';
import { Text, View } from 'react-native';

import { Copyright } from '../Copyright';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Option } from '../Option';

import { styles } from './styles';
import { FeedbackType } from '../Widget';

interface OptionsProps {
  onFeedbackTypeChange: (feedbackType: FeedbackType) => void;
}

export function Options({ onFeedbackTypeChange }: OptionsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChange(key as FeedbackType)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
}
