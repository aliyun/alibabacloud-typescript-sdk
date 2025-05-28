// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTicket4CopilotRequest extends $dara.Model {
  /**
   * @remarks
   * User\\"s account name.
   * <notice>Note: Only one of userId and accountName needs to be filled in. If neither is provided, it will default to the report owner, and the report will be accessed with that user\\"s identity.</notice>
   * 
   * @example
   * Test user
   */
  accountName?: string;
  /**
   * @remarks
   * User\\"s account type:
   * 
   * - 1: Alibaba Cloud Primary Account
   * 
   * - 3: QuickBI Self-built Account
   * 
   * - 4: DingTalk
   * 
   * - 5: Alibaba Cloud RAM Account
   * 
   * - 6: Third-party Account (SAML, OAuth, etc.)
   * 
   * - 9: WeCom
   * 
   * - 10: Feishu
   * 
   * <notice>Note: If accountName is not empty, then accountType must also be provided.</notice>
   * 
   * @example
   * 1
   */
  accountType?: number;
  /**
   * @remarks
   * ID of the Smart Q module to be embedded.
   * 
   * This parameter is required.
   * 
   * @example
   * ccd3*********ae29dffee
   */
  copilotId?: string;
  /**
   * @remarks
   * Expiration time.
   * 
   * - Unit: minutes, maximum 240 (4 hours).
   * 
   * - Default: 240.
   * 
   * @example
   * 200
   */
  expireTime?: number;
  /**
   * @remarks
   * Range of ticket quantity:
   * 
   * - Default value is 1.
   * 
   * - Recommended value is 1.
   * 
   * - Maximum value is 99999.
   * 
   * Each time a ticket is used, the ticket count decreases by 1.
   * 
   * @example
   * 1
   */
  ticketNum?: number;
  /**
   * @remarks
   * Quick BI\\"s UserId.
   * 
   * - You can obtain this by calling [3.1.7 Get User Details Based on Third-Party Account] or other relevant APIs.
   * 
   * <notice>Note: Only one of userId and accountName needs to be filled in. If neither is provided, it will default to the report owner, and the report will be accessed with that user\\"s identity.</notice>
   * 
   * @example
   * 9c-asd*****asd-asdasd
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

