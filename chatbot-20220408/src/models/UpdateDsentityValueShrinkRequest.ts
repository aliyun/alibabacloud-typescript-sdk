// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDSEntityValueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If you omit this parameter, the default business space is used. You can find this key on the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The new content for the entity value. For an entity type of `synonyms`, this is the normalized value. For an entity type of `regex`, this is the regular expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 书本类型
   */
  content?: string;
  /**
   * @remarks
   * The entity ID. You can leave this parameter empty when modifying an entity value.
   * 
   * This parameter is required.
   * 
   * @example
   * 223423423
   */
  entityId?: number;
  /**
   * @remarks
   * The ID of the entity value to update.
   * 
   * This parameter is required.
   * 
   * @example
   * 2342377423
   */
  entityValueId?: number;
  /**
   * @remarks
   * The bot ID.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  /**
   * @remarks
   * The synonym list for the normalized value.
   */
  synonymsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      entityValueId: 'EntityValueId',
      instanceId: 'InstanceId',
      synonymsShrink: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      entityValueId: 'number',
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

