// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Filtering is supported only for the `Table` type. For example: `{"RecallManagementTableId":"1"}`
   * 
   * @example
   * {"RecallManagementTableId":"1"}
   */
  condition?: { [key: string]: any };
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * This parameter is not used.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order. Valid values: `ASC` (ascending) and `DESC` (descending).
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting basis. Valid values: `GmtCreateTime` (creation time) and `GmtModifiedTime` (update time).
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The task type.
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

