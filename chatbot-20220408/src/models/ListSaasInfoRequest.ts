// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If this parameter is omitted, the default business space is used. You can obtain the key from the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The codes of the user\\"s SaaS permission groups. Separate multiple codes with a comma.
   * 
   * @example
   * DS,FAQ
   */
  saasGroupCodes?: string;
  /**
   * @remarks
   * The username of the business user.
   * 
   * This parameter is required.
   * 
   * @example
   * userTest
   */
  saasName?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      saasGroupCodes: 'SaasGroupCodes',
      saasName: 'SaasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      saasGroupCodes: 'string',
      saasName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

