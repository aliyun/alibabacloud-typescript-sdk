// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundReason extends $dara.Model {
  /**
   * @remarks
   * Is upload credential required
   * 
   * @example
   * true
   */
  proofRequired?: boolean;
  /**
   * @remarks
   * Reason text ID
   * 
   * @example
   * 47683
   */
  reasonTextId?: string;
  /**
   * @remarks
   * Reason text
   * 
   * @example
   * 不想要了
   */
  reasonTips?: string;
  /**
   * @remarks
   * Is a message required
   * 
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

