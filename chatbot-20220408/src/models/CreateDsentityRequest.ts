// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDSEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not set, the default business space is accessed. You can obtain the key value on the business management page of the main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The entity name. Only Chinese characters, uppercase and lowercase letters, digits, and underscores are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * EntityName
   */
  entityName?: string;
  /**
   * @remarks
   * The entity type. Valid values:
   * 
   * - synonyms: synonym.
   * - regex: regular expression.
   * 
   * @example
   * synonyms
   */
  entityType?: string;
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

