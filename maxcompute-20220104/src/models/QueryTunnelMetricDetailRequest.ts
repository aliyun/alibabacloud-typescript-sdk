// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the results in ascending order.
   * 
   * @example
   * false
   */
  ascOrder?: boolean;
  /**
   * @remarks
   * The list of grouping bases.
   */
  groupList?: string[];
  /**
   * @remarks
   * The maximum number of entries to return. The default value is 10. The maximum value is 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The list of operation types.
   */
  operationList?: string[];
  /**
   * @remarks
   * The column to sort by.
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
   * The nickname of the level-2 quota for the tunnel.
   * 
   * The nickname of the shared quota is default.
   * 
   * The nickname of the exclusive quota is in the quotaNickname#subQuotaNickname format.
   * 
   * @example
   * quota_A
   */
  quotaNickname?: string;
  /**
   * @remarks
   * The list of table names.
   * 
   * The tables belong to a project. Therefore, if tableList is not empty, project cannot be empty.
   */
  tableList?: string[];
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the time range to query.
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

