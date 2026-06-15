// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnblockSendingRequest extends $dara.Model {
  /**
   * @remarks
   * The blacklisted recipient address.
   * 
   * This parameter is required.
   * 
   * @example
   * recipient@yyy.com
   */
  blockEmail?: string;
  /**
   * @remarks
   * The blacklist type.
   * 
   * - UNSUB: Unsubscribe
   * 
   * - REPORT: Complaint
   * 
   * This parameter is required.
   * 
   * @example
   * UNSUB
   */
  blockType?: string;
  /**
   * @remarks
   * The sender address.
   * 
   * This parameter is required.
   * 
   * @example
   * sender@xxx.com
   */
  senderEmail?: string;
  static names(): { [key: string]: string } {
    return {
      blockEmail: 'BlockEmail',
      blockType: 'BlockType',
      senderEmail: 'SenderEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockEmail: 'string',
      blockType: 'string',
      senderEmail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

