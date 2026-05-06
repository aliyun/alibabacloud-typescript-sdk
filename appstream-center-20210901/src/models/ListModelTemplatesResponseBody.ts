// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplatesResponseBodyData extends $dara.Model {
  /**
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
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
  description?: string;
  /**
   * @example
   * true
   */
  hasModel?: boolean;
  /**
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  /**
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
  data?: ListModelTemplatesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
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

