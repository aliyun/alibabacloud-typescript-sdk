// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementServicesRequest extends $dara.Model {
  /**
   * @remarks
   * **The ID of the instance.**
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not yet available.
   * 
   * @example
   * ""
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is not yet available.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * **The sort order.** Valid values:
   * 
   * - ASC: ascending order.
   * 
   * - DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * **The number of the page to return.**
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * **The number of entries to return on each page.**
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * **The field to sort by.** Valid values:
   * 
   * - GmtCreateTime: Sort by creation time.
   * 
   * - GmtModifiedTime: Sort by modification time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
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

