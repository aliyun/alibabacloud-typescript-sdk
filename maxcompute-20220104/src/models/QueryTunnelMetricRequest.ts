// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricRequest extends $dara.Model {
  /**
   * @remarks
   * A list of HTTP status codes for requests.
   */
  codeList?: number[];
  /**
   * @remarks
   * A list of grouping criteria.
   */
  groupList?: string[];
  /**
   * @remarks
   * A list of operation types.
   */
  operationList?: string[];
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
   * The nickname of the level-2 Tunnel quota.
   * 
   * The nickname of a shared quota is `default`.
   * 
   * The format of a dedicated quota nickname is `quotaNickname#subQuotaNickname`.
   * 
   * @example
   * default
   */
  quotaNickname?: string;
  /**
   * @remarks
   * A list of table names.
   * 
   * The tables belong to a project. Therefore, if `tableList` is not empty, `project` cannot be empty.
   */
  tableList?: string[];
  /**
   * @remarks
   * The maximum number of data entries to return.
   * 
   * This parameter takes effect when the grouping criterion includes `table` or `ip`.
   * 
   * The default value is 10. The maximum value is 100.
   * 
   * @example
   * 10
   */
  topN?: number;
  /**
   * @remarks
   * The end of the time range for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735536322
   */
  endTime?: number;
  /**
   * @remarks
   * The start of the time range for the query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1735534322
   */
  startTime?: number;
  /**
   * @remarks
   * The data aggregation policy. The default value is `max`.
   * 
   * Data is collected at a frequency of 1 minute. If you query data over a long time range, the automatic step size for data display may exceed 1 minute. In this case, metrics are aggregated. This parameter specifies the aggregation logic.
   * 
   * @example
   * max
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      codeList: 'codeList',
      groupList: 'groupList',
      operationList: 'operationList',
      project: 'project',
      quotaNickname: 'quotaNickname',
      tableList: 'tableList',
      topN: 'topN',
      endTime: 'endTime',
      startTime: 'startTime',
      strategy: 'strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeList: { 'type': 'array', 'itemType': 'number' },
      groupList: { 'type': 'array', 'itemType': 'string' },
      operationList: { 'type': 'array', 'itemType': 'string' },
      project: 'string',
      quotaNickname: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
      topN: 'number',
      endTime: 'number',
      startTime: 'number',
      strategy: 'string',
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

