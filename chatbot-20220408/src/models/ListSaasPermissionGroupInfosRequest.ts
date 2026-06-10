// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSaasPermissionGroupInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If unspecified, the default business space is used. You can find this key on the Business Management page of your main account.
   * 
   * This parameter is required.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

