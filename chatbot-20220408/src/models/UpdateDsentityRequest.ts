// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDSEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If you do not specify this parameter, the system uses the default business space. You can get this key from the business management page of your Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  entityId?: number;
  /**
   * @remarks
   * The new name for the entity. The name can contain only Chinese characters, letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * 实体名称
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the entity. This parameter cannot be modified. Valid values: `synonyms` and `regex`.
   * 
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * chatbot-cn-yjzbyrEvqd
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityId: 'number',
      entityName: 'string',
      entityType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

