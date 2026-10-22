// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDSEntityValueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not set, the default business space is accessed. Obtain the key value from the business management page of the main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * When the entity type is synonyms, this parameter specifies the normalized value of the entity. When the entity type is regex, this parameter specifies the regular expression text.
   * 
   * This parameter is required.
   * 
   * @example
   * Book type
   */
  content?: string;
  /**
   * @remarks
   * The entity ID. This parameter can be left empty when you modify an entity member.
   * 
   * This parameter is required.
   * 
   * @example
   * 223423423
   */
  entityId?: number;
  /**
   * @remarks
   * The entity member ID. This parameter is left empty when you create an entity member.
   * 
   * This parameter is required.
   * 
   * @example
   * 2342377423
   */
  entityValueId?: number;
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
   * The list of synonyms.
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

