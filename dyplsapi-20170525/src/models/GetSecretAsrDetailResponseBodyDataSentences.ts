// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecretAsrDetailResponseBodyDataSentences extends $dara.Model {
  /**
   * @remarks
   * The start time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1020
   */
  beginTime?: number;
  /**
   * @remarks
   * The ID of the audio track to which the sentence belongs.
   * 
   * @example
   * 0
   */
  channelId?: number;
  /**
   * @remarks
   * The emotion value. Value range: 1 to 10. The higher the value, the stronger the emotion.
   * 
   * @example
   * 5.7
   */
  emotionValue?: string;
  /**
   * @remarks
   * The end time offset of the sentence. Unit: milliseconds.
   * 
   * @example
   * 1770
   */
  endTime?: number;
  /**
   * @remarks
   * The silence duration between the current sentence and the previous sentence. Unit: seconds.
   * 
   * @example
   * 0
   */
  silenceDuration?: number;
  /**
   * @remarks
   * The average speech rate of the sentence. Unit: number of words per minute.
   * 
   * @example
   * 80
   */
  speechRate?: number;
  /**
   * @remarks
   * The recognition result of the sentence.
   * 
   * @example
   * Hello
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      channelId: 'ChannelId',
      emotionValue: 'EmotionValue',
      endTime: 'EndTime',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      channelId: 'number',
      emotionValue: 'string',
      endTime: 'number',
      silenceDuration: 'number',
      speechRate: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

