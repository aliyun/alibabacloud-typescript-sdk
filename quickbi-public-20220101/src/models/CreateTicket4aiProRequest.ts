// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4AiProRequest extends $dara.Model {
  /**
   * @remarks
   * The account of the access user to bind. Use this parameter together with AccountType when QuickBIUserId is not specified.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The account type of the user. Valid values:
   * - 1: Alibaba Cloud account.
   * - 3: Quick BI custom account.
   * - 4: DingTalk.
   * - 5: RAM user.
   * - 9: WeCom.
   * 
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * The ID of the AIPro embedding configuration. The configuration must exist, belong to the current organization, and have a status of 1.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  aiProId?: string;
  /**
   * @remarks
   * The custom pass-through parameter. If specified, it must be a valid JSON string.
   * 
   * @example
   * test
   */
  customParam?: string;
  /**
   * @remarks
   * The validity period of the ticket, in minutes. Default value: 240. The value must be greater than 0.
   * 
   * @example
   * 22
   */
  expireTime?: number;
  /**
   * @remarks
   * The QuickBI user ID of the access user to bind. Specify either this parameter or the combination of AccountName and AccountType.
   * 
   * @example
   * test
   */
  quickBIUserId?: string;
  /**
   * @remarks
   * The custom system identifier. The length must be less than 150 characters.
   * 
   * @example
   * test
   */
  systemUid?: string;
  /**
   * @remarks
   * The number of times the ticket can be used. Default value: 1. Valid values: 1 to 99999.
   * 
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

