// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the `business space`. If you omit this parameter, the default `business space` is used. You can get the key from the Business Management page of your `main account`.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The `entity name`. The name can contain Chinese characters, uppercase and lowercase letters, digits, and underscores (_).
   * 
   * This parameter is required.
   * 
   * @example
   * 实体名称
   */
  entityName?: string;
  /**
   * @remarks
   * The `entity type`. Valid values: `synonyms` and `regex`.
   * 
   * @example
   * synonyms
   */
  entityType?: string;
  /**
   * @remarks
   * The `instance ID`.
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
      entityName: 'EntityName',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
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

