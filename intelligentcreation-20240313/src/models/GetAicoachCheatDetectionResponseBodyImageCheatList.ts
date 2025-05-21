// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICoachCheatDetectionResponseBodyImageCheatList extends $dara.Model {
  /**
   * @example
   * 2025-03-22 10:05:07
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

