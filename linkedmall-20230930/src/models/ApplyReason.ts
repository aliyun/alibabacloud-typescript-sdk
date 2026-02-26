// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyReason extends $dara.Model {
  /**
   * @example
   * 403769
   */
  reasonTextId?: number;
  reasonTips?: string;
  static names(): { [key: string]: string } {
    return {
      reasonTextId: 'reasonTextId',
      reasonTips: 'reasonTips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonTextId: 'number',
      reasonTips: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

