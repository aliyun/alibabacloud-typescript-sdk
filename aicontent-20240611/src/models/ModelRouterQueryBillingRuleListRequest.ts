// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingRuleListRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  activeOnly?: boolean;
  /**
   * @remarks
   * maxResults
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @example
   * chat
   */
  modelType?: string;
  /**
   * @remarks
   * nextToken
   * 
   * @example
   * xxxx-xxx-xxxxx
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      activeOnly: 'activeOnly',
      maxResults: 'maxResults',
      modelCode: 'modelCode',
      modelId: 'modelId',
      modelType: 'modelType',
      nextToken: 'nextToken',
      page: 'page',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeOnly: 'boolean',
      maxResults: 'number',
      modelCode: 'string',
      modelId: 'number',
      modelType: 'string',
      nextToken: 'string',
      page: 'number',
      pageIndex: 'number',
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

