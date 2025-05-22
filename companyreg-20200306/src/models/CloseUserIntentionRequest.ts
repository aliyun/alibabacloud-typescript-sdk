// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseUserIntentionRequest extends $dara.Model {
  /**
   * @example
   * esp.bookkeeping
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * I20201027162033000001
   */
  intentionBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      intentionBizId: 'IntentionBizId',
      note: 'Note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      intentionBizId: 'string',
      note: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

