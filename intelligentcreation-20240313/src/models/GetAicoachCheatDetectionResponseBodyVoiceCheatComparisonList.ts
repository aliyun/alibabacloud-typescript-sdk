// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachCheatDetectionResponseBodyVoiceCheatComparisonList extends $dara.Model {
  /**
   * @example
   * 2024-12-11 10:07:23
   */
  time?: string;
  /**
   * @example
   * https://demo.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

