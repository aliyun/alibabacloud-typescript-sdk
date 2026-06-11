// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4CopilotRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user account.
   * >Notice: Note: Specify either UserId or AccountName. If you leave both parameters empty, the ticket is bound to the API caller by default. Access is then granted based on the caller\\"s identity.
   * 
   * @example
   * 测试用户
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the user account:
   * 
   * - 1: Alibaba Cloud account
   * 
   * - 3: Quick BI user
   * 
   * - 4: DingTalk
   * 
   * - 5: RAM user
   * 
   * - 6: Third-party account (an account integrated using protocols such as SAML or OAuth)
   * 
   * - 9: WeCom
   * 
   * - 10: Lark
   * 
   * >Notice: 
   * 
   * Note: This parameter is required if you specify AccountName.
   * 
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * The ID of the embedded Copilot module.
   * 
   * This parameter is required.
   * 
   * @example
   * ccd3428c-dd23-460c-a608-26bae29dffee
   */
  copilotId?: string;
  /**
   * @remarks
   * The expiration time of the ticket.
   * 
   * - Unit: minutes. The maximum validity period is 240 minutes (4 hours).
   * 
   * - Default: 240 minutes.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * The number of times the ticket can be used. The value can range from 1 to 99,999.
   * 
   * - Default: 1.
   * 
   * - Recommended: 1.
   * 
   * - Maximum: 99,999.
   * 
   * Each access decrements the ticket\\"s usage count by one.
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @remarks
   * The ID of the Quick BI user. This is not your Alibaba Cloud account ID. Call the QueryUserInfoByAccount operation to obtain the user ID. Example: `fe67f61a35a94b7da1a34ba174a7****`.
   * 
   * >Notice: 
   * 
   * Note: Specify either UserId or AccountName. If you leave both parameters empty, the ticket is bound to the API caller by default. Access is then granted based on the caller\\"s identity.
   * 
   * @example
   * 9c-asdawf-casxcasd-asdasd
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      copilotId: 'CopilotId',
      expireTime: 'ExpireTime',
      ticketNum: 'TicketNum',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      copilotId: 'string',
      expireTime: 'number',
      ticketNum: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

