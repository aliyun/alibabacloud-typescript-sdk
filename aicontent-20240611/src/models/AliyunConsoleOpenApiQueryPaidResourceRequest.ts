// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunConsoleOpenApiQueryPaidResourceRequest extends $dara.Model {
  /**
   * @remarks
   * groupBy
   * 
   * @example
   * resourceId
   */
  groupBy?: string;
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
   * needTotalCount
   * 
   * @example
   * true
   */
  needTotalCount?: boolean;
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
   * orderBy
   * 
   * @example
   * resourceId
   */
  orderBy?: string;
  /**
   * @remarks
   * orderDirection
   * 
   * @example
   * DESC
   */
  orderDirection?: string;
  /**
   * @remarks
   * pageIndex
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * pageSize
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * resourceType
   * 
   * @example
   * ALL
   */
  resourceType?: string;
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
      resourceType: 'resourceType',
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
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

