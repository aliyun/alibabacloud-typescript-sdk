// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityValueRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the workspace. If this parameter is not specified, the default workspace is accessed. You can obtain the key value on the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The entity value or regular expression.
   * 
   * This parameter is required.
   * 
   * @example
   * BookType
   */
  content?: string;
  /**
   * @remarks
   * The entity ID. This parameter can be left empty when you modify an entity member.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  entityId?: number;
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
   * The synonym list.
   */
  synonyms?: string[];
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      entityId: 'EntityId',
      instanceId: 'InstanceId',
      synonyms: 'Synonyms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      entityId: 'number',
      instanceId: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.synonyms)) {
      $dara.Model.validateArray(this.synonyms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

