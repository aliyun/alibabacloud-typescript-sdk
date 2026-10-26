// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementJobsRequest extends $dara.Model {
  /**
   * @remarks
   * **The filter conditions.** Currently, only filter conditions for the Table type are supported, such as `{"RecallManagementTableId":"1"}`.
   * 
   * @example
   * {"RecallManagementTableId":"1"}
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * **The instance ID.**
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter does not take effect.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * **The sorting order.** `ASC`: ascending order. `DESC`: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * **The page number.**
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * **The sorting criterion.** `GmtCreateTime`: creation time. `GmtModifiedTime`: update time.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * **The task type.**
   * 
   * @example
   * Table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.condition) {
      $dara.Model.validateMap(this.condition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

