// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLgfRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The chatbot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23242342
   */
  intentId?: number;
  /**
   * @remarks
   * lgf Id
   * 
   * This parameter is required.
   * 
   * @example
   * 2342424
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentId: 'number',
      lgfId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

