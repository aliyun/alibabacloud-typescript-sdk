// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Agent platform (such as ENTERPRISE or ENTERPRISE_JVS).
   * 
   * @example
   * ENTERPRISE_AGENTIC_COMPUTER
   */
  agentPlatform?: string;
  /**
   * @remarks
   * The Agent provider name.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * The model group configuration JSON object.
   * 
   * @example
   * {
   * 	"defaults": {
   * 		"model": {
   * 			"primary": "bailian/qwen3.5-plus"
   * 		}
   * 	}
   * }
   */
  config?: string;
  /**
   * @remarks
   * The template group description.
   * 
   * @example
   * Test model group
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether models are configured in the group.
   * 
   * @example
   * true
   */
  hasModel?: boolean;
  /**
   * @remarks
   * The number of models in the model group, including referenced system provider models.
   * 
   * @example
   * 8
   */
  modelCount?: number;
  /**
   * @remarks
   * The model group ID.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The template group name.
   * 
   * @example
   * model-template-001
   */
  name?: string;
  /**
   * @remarks
   * The group authorization scope. Valid values: ALL_USER (all users) and USER_MIXED (a mix of user groups and users, only for Common groups).
   * 
   * @example
   * ALL_USER
   */
  refScope?: string;
  /**
   * @remarks
   * The number of authorized users in the group. This value is returned only when ListModelTemplates is called and refScope is USER_MIXED. Otherwise, the value is null.
   * 
   * @example
   * 1
   */
  userCount?: number;
  /**
   * @remarks
   * The number of authorized user groups in the group. This value is returned only when ListModelTemplates is called and refScope is USER_MIXED. Otherwise, the value is null.
   * 
   * @example
   * 2
   */
  userGroupCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      config: 'Config',
      description: 'Description',
      hasModel: 'HasModel',
      modelCount: 'ModelCount',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
      refScope: 'RefScope',
      userCount: 'UserCount',
      userGroupCount: 'UserGroupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      config: 'string',
      description: 'string',
      hasModel: 'boolean',
      modelCount: 'number',
      modelTemplateId: 'string',
      name: 'string',
      refScope: 'string',
      userCount: 'number',
      userGroupCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of returned data objects.
   */
  data?: ListModelTemplatesResponseBodyData[];
  /**
   * @remarks
   * The page number of the current query results.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of query results per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListModelTemplatesResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

