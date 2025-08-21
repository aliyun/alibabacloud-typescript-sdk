// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityValueShrinkRequest extends $dara.Model {
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
   * ada
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12
   */
  entityId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  synonymsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
      synonymsShrink: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      instanceId: 'string',
      synonymsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

