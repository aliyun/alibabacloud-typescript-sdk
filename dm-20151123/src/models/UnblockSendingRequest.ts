// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnblockSendingRequest extends $dara.Model {
  /**
   * @remarks
   * Blacklisted recipient\\"s email address
   * 
   * This parameter is required.
   * 
   * @example
   * recipient@example.com
   */
  blockEmail?: string;
  /**
   * @remarks
   * Blacklist type
   * - UNSUB: Unsubscribe
   * - REPORT: Report
   * 
   * This parameter is required.
   * 
   * @example
   * UNSUB
   */
  blockType?: string;
  /**
   * @remarks
   * Sender\\"s email address
   * 
   * This parameter is required.
   * 
   * @example
   * sender@example.com
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

