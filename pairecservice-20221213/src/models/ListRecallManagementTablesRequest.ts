// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecallManagementTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is reserved for future use.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table-1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is reserved for future use.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order for the results. Valid values: `ASC` (ascending) and `DESC` (descending).
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort the results by. Valid values: `GmtCreateTime` (creation time) and `GmtModifiedTime` (update time).
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The table type. Valid values: `X2I` (U2I recall or I2I recall), `Vector` (vector recall), and `Random` (random recall).
   * 
   * @example
   * X2I
   */
  type?: string;
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
      type: 'Type',
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
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

