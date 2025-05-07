// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncQualityCheckResponseBodyDataRulesHitPhrase extends $dara.Model {
  /**
   * @example
   * 1230
   */
  begin?: number;
  /**
   * @example
   * 6
   */
  emotionValue?: number;
  /**
   * @example
   * 3440
   */
  end?: number;
  /**
   * @example
   * xxx
   */
  identity?: string;
  role?: string;
  /**
   * @example
   * 123
   */
  silenceDuration?: number;
  /**
   * @example
   * 233
   */
  speechRate?: number;
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
      silenceDuration: 'SilenceDuration',
      speechRate: 'SpeechRate',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      identity: 'string',
      role: 'string',
      silenceDuration: 'number',
      speechRate: 'number',
      words: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

