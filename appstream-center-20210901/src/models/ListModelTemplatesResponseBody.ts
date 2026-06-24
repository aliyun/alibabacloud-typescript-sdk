// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the Agent provider.
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
   * 测试模型分组
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether models have been configured in the group.
   * 
   * @example
   * true
   */
  hasModel?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      agentProvider: 'AgentProvider',
      config: 'Config',
      description: 'Description',
      hasModel: 'HasModel',
      modelTemplateId: 'ModelTemplateId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProvider: 'string',
      config: 'string',
      description: 'string',
      hasModel: 'boolean',
      modelTemplateId: 'string',
      name: 'string',
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
   * The page number of the current query result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in the query result.
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
   * The total number of entries in the query result.
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

