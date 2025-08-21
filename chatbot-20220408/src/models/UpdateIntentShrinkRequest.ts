// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIntentShrinkRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  intentDefinitionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234234234534
   */
  intentId?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      instanceId: 'InstanceId',
      intentDefinitionShrink: 'IntentDefinition',
      intentId: 'IntentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      instanceId: 'string',
      intentDefinitionShrink: 'string',
      intentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

