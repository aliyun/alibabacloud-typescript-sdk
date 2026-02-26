// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundReason extends $dara.Model {
  /**
   * @example
   * true
   */
  proofRequired?: boolean;
  /**
   * @example
   * 47683
   */
  reasonTextId?: string;
  reasonTips?: string;
  /**
   * @example
   * true
   */
  refundDescRequired?: boolean;
  static names(): { [key: string]: string } {
    return {
      proofRequired: 'proofRequired',
      reasonTextId: 'reasonTextId',
      reasonTips: 'reasonTips',
      refundDescRequired: 'refundDescRequired',
    };
  }

  static types(): { [key: string]: any } {
    return {
      proofRequired: 'boolean',
      reasonTextId: 'string',
      reasonTips: 'string',
      refundDescRequired: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

