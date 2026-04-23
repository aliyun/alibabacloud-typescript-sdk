// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryCostModelDetailRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1700086400
   */
  endTime?: number;
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  modelId?: number;
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1700000000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientId: 'clientId',
      endTime: 'endTime',
      maxResults: 'maxResults',
      modelId: 'modelId',
      nextToken: 'nextToken',
      page: 'page',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'number',
      endTime: 'number',
      maxResults: 'number',
      modelId: 'number',
      nextToken: 'string',
      page: 'number',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

