// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order. If you set this parameter to `true`, the results are sorted in ascending order. If you set this to `false` or leave it unspecified, the results are sorted in descending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * A list of error codes to filter the results.
   */
  codeList?: number[];
  /**
   * @remarks
   * The list of grouping dimensions.
   */
  groupList?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * A list of operation types.
   */
  operationList?: string[];
  /**
   * @remarks
   * The sort column.
   * 
   * @example
   * maxValue
   */
  orderColumn?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * project_a
   */
  project?: string;
  /**
   * @remarks
   * The nickname of the level-2 tunnel quota.
   * 
   * The nickname for a shared quota is `default`.
   * 
   * For an exclusive quota, the nickname is in the `quotaNickname#subQuotaNickname` format.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * A list of table names.
   * 
   * The `project` parameter is required if you specify a list of tables. All tables must belong to the specified project.
   */
  tableList?: string[];
  /**
   * @remarks
   * The end of the query time range. This is a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the query time range. This is a Unix timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      ascOrder: 'ascOrder',
      codeList: 'codeList',
      groupList: 'groupList',
      limit: 'limit',
      operationList: 'operationList',
      orderColumn: 'orderColumn',
      project: 'project',
      quotaNickname: 'quotaNickname',
      tableList: 'tableList',
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ascOrder: 'boolean',
      codeList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      operationList: { 'type': 'array', 'itemType': 'string' },
      orderColumn: 'string',
      project: 'string',
      quotaNickname: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.codeList)) {
      $dara.Model.validateArray(this.codeList);
    }
    if(Array.isArray(this.groupList)) {
      $dara.Model.validateArray(this.groupList);
    }
    if(Array.isArray(this.operationList)) {
      $dara.Model.validateArray(this.operationList);
    }
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

