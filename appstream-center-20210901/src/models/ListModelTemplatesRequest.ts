// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplatesRequest extends $dara.Model {
  /**
   * @example
   * ENTERPRISE
   */
  agentPlatform?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OpenClaw
   */
  agentProvider?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  bizType?: number;
  /**
   * @example
   * true
   */
  hasModel?: boolean;
  modelTemplateIdList?: string[];
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
  static names(): { [key: string]: string } {
    return {
      agentPlatform: 'AgentPlatform',
      agentProvider: 'AgentProvider',
      bizType: 'BizType',
      hasModel: 'HasModel',
      modelTemplateIdList: 'ModelTemplateIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentPlatform: 'string',
      agentProvider: 'string',
      bizType: 'number',
      hasModel: 'boolean',
      modelTemplateIdList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelTemplateIdList)) {
      $dara.Model.validateArray(this.modelTemplateIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

