// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogStatisticRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * @example
   * KeyWords
   */
  key?: string;
  /**
   * @remarks
   * The value of the filter parameter.
   * 
   * @example
   * select
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSlowLogStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort results in ascending order. This feature is disabled by default.
   * 
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * The end time of the query. Specify a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The list of query filter conditions.
   */
  filters?: DescribeSlowLogStatisticRequestFilters[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * - For ApsaraDB RDS for MySQL and PolarDB for MySQL, this parameter is applicable only to cluster instances. If you do not specify this parameter, the log details of the primary node are queried by default.
   * - For PolarDB-X 2.0, set this parameter to **polarx_cn** (compute node) or **polarx_dn** (data node).
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The sorting method. Valid values:
   * 
   * **Count**
   * 
   * **QueryTime**
   * 
   * **LockTime**
   * 
   * **RowsExamined**
   * 
   * **RowsSent**
   * 
   * @example
   * count
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. Specify a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1568269711000
   */
  startTime?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 04ea3310df40c3fa8a6b4854db49f79a
   */
  templateId?: string;
  /**
   * @remarks
   * The task type.
   * 
   * SQL engine-specific:
   * 
   * **SlowLogRequestOrigin**: aggregates logs by source IP address.
   * 
   * **SlowLogRequestUser**: aggregates logs by source user.
   * 
   * **SQL**: aggregates logs by SQL ID.
   * 
   * 
   * MongoDB engine-specific:
   * 
   * **SlowLogRequestOrigin**: aggregates logs by source IP address.
   * 
   * **SlowLogRequestUser**: aggregates logs by source user.
   * 
   * **SQL**: aggregates logs by Query ID.
   * 
   * **SlowLogRequestOpType**: aggregates logs by operation type.
   * 
   * **SlowLogRequestNamespace**: aggregates logs by namespace.
   * 
   * Redis engine-specific:
   * 
   * **SlowLogRequestNodeId**: aggregates logs by node ID.
   * 
   * **SlowLogRequestHostInsId**: aggregates logs by HostInsId.
   * 
   * @example
   * SQL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      templateId: 'TemplateId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSlowLogStatisticRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      templateId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

