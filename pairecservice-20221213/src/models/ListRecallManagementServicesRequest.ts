// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not currently in effect.
   * 
   * @example
   * ""
   */
  maxResults?: number;
  /**
   * @remarks
   * Filters results by name.
   * 
   * @example
   * service-1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is not currently in effect.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:  
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting field. Valid values:  
   * - GmtCreateTime: creation time.
   * - GmtModifiedTime: update time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

