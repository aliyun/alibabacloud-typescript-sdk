// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryBillingRuleListRequest extends $dara.Model {
  /**
   * @remarks
   * Return only currently effective rules.
   * 
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
   * @remarks
   * Filter by model identifier.
   * 
   * @example
   * qwen-plus
   */
  modelCode?: string;
  /**
   * @remarks
   * Filter by model ID (required).
   * 
   * @example
   * 1
   */
  modelId?: number;
  /**
   * @remarks
   * Filter by model type.
   * 
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
   * @remarks
   * Page number. Default is 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * Page number (takes precedence).
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of items per page. Default is 20.
   * 
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

