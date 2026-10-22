// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLgfShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If not specified, the default business space is accessed. You can obtain the key value from the business management page of the Alibaba Cloud account.
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
   * The LGF information.
   * 
   * This parameter is required.
   */
  lgfDefinitionShrink?: string;
  /**
   * @remarks
   * LGF ID
   * 
   * This parameter is required.
   * 
   * @example
   * 12121
   */
  lgfId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      lgfDefinitionShrink: 'LgfDefinition',
      lgfId: 'LgfId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      lgfDefinitionShrink: 'string',
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

