// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The SaaS permission group codes owned by the user. Separate multiple codes with commas (,).
   * 
   * @example
   * DS,FAQ
   */
  saasGroupCodes?: string;
  /**
   * @remarks
   * The username of the business party.
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

