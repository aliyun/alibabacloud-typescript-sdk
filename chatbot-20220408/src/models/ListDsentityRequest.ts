// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDSEntityRequest extends $dara.Model {
  /**
   * @remarks
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * If left empty, all custom entities are returned (default).
   * 
   * @example
   * synonyms
   * regex
   * system
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
  /**
   * @remarks
   * The filter keyword. Uses contains matching. Scope: entity name (future expansion: entity members, synonyms).
   * 
   * @example
   * entity
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      entityType: 'EntityType',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      entityType: 'string',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

