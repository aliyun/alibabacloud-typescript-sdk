// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublishTaskStateRequest extends $dara.Model {
  /**
   * @remarks
   * The key that identifies the business space. If omitted, the default business space is used. You can get the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The publish task ID.
   * 
   * @example
   * 8521
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

