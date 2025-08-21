// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasInfoRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * DS,FAQ
   */
  saasGroupCodes?: string;
  /**
   * @remarks
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

