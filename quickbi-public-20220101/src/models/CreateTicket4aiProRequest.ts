// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4AiProRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  accountName?: string;
  /**
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  aiProId?: string;
  /**
   * @example
   * test
   */
  customParam?: string;
  /**
   * @example
   * 22
   */
  expireTime?: number;
  /**
   * @example
   * test
   */
  quickBIUserId?: string;
  /**
   * @example
   * test
   */
  systemUid?: string;
  /**
   * @example
   * 1
   */
  ticketNum?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      aiProId: 'AiProId',
      customParam: 'CustomParam',
      expireTime: 'ExpireTime',
      quickBIUserId: 'QuickBIUserId',
      systemUid: 'SystemUid',
      ticketNum: 'TicketNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      aiProId: 'string',
      customParam: 'string',
      expireTime: 'number',
      quickBIUserId: 'string',
      systemUid: 'string',
      ticketNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

