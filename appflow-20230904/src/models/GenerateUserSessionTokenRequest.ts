// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserSessionTokenRequest extends $dara.Model {
  /**
   * @remarks
   * RDS Copilot ID
   * 
   * @example
   * cb-069d508f9ab341b1****
   */
  chatbotId?: string;
  /**
   * @remarks
   * Time-to-live (TTL) in seconds. Default is 24 hours.
   * 
   * @example
   * 6000
   */
  expireSecond?: number;
  extraInfo?: string;
  /**
   * @remarks
   * Integration ID
   * 
   * @example
   * cit-960f499au184m7****
   */
  integrateId?: string;
  /**
   * @remarks
   * Profile picture (URL)
   * 
   * @example
   * https://xxxx.com/xxx
   */
  userAvatar?: string;
  /**
   * @remarks
   * User ID
   * 
   * This parameter is required.
   * 
   * @example
   * 929293312213****
   */
  userId?: string;
  /**
   * @remarks
   * Nickname
   * 
   * @example
   * testxxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chatbotId: 'ChatbotId',
      expireSecond: 'ExpireSecond',
      extraInfo: 'ExtraInfo',
      integrateId: 'IntegrateId',
      userAvatar: 'UserAvatar',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatbotId: 'string',
      expireSecond: 'number',
      extraInfo: 'string',
      integrateId: 'string',
      userAvatar: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

