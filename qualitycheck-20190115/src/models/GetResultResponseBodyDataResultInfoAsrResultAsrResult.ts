// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoAsrResultAsrResult extends $dara.Model {
  /**
   * @example
   * 10000
   */
  begin?: number;
  /**
   * @example
   * 1
   */
  emotionValue?: number;
  /**
   * @example
   * 0
   */
  end?: number;
  identity?: string;
  role?: string;
  /**
   * @example
   * 50
   */
  speechRate?: number;
  /**
   * @example
   * xx
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      identity: 'Identity',
      role: 'Role',
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

