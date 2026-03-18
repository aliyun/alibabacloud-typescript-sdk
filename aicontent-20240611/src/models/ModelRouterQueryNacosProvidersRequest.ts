// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelRouterQueryNacosProvidersRequest extends $dara.Model {
  /**
   * @example
   * resourceId
   */
  groupBy?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      groupBy: 'groupBy',
      maxResults: 'maxResults',
      needTotalCount: 'needTotalCount',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupBy: 'string',
      maxResults: 'number',
      needTotalCount: 'boolean',
      nextToken: 'string',
      orderBy: 'string',
      orderDirection: 'string',
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

