// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitIMConnectRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. Omit this parameter to use the default business space. You can get the key from the business management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The identifier for the connection source. You can obtain this value from the channel console.
   * 
   * This parameter is required.
   */
  from?: string;
  /**
   * @remarks
   * The access token for user authentication.
   */
  userAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      from: 'From',
      userAccessToken: 'UserAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      from: 'string',
      userAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

