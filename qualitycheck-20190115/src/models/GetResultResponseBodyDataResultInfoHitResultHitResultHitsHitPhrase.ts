// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResultResponseBodyDataResultInfoHitResultHitResultHitsHitPhrase extends $dara.Model {
  /**
   * @example
   * 300
   */
  begin?: number;
  /**
   * @example
   * 0
   */
  emotionValue?: number;
  /**
   * @example
   * 300
   */
  end?: number;
  role?: string;
  /**
   * @example
   * xxx
   */
  words?: string;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      emotionValue: 'EmotionValue',
      end: 'End',
      role: 'Role',
      words: 'Words',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      emotionValue: 'number',
      end: 'number',
      role: 'string',
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

