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
   * Specifies whether to sort the results in ascending order. The default value is false.
   * 
   * @example
   * true
   */
  asc?: boolean;
  /**
   * @remarks
   * The end time of the query. This value is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
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
   * - For RDS for MySQL and PolarDB for MySQL, this parameter applies only to cluster instances. If you do not specify this parameter, the slow query logs of the primary node are queried by default.
   * 
   * - For PolarDB-X 2.0, specify **polarx_cn** for compute nodes or **polarx_dn** for data nodes.
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
   * The page number. The value must be a positive integer. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query. This value is a UNIX timestamp in UTC. Unit: milliseconds.
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
   * For SQL engines:
   * 
   * **SlowLogRequestOrigin**: Aggregates logs by source IP address.
   * 
   * **SlowLogRequestUser**: Aggregates logs by source user.
   * 
   * **SQL**: Aggregates logs by SQL ID.
   * 
   * For ApsaraDB for MongoDB engines:
   * 
   * **SlowLogRequestOrigin**: Aggregates logs by source IP address.
   * 
   * **SlowLogRequestUser**: Aggregates logs by source user.
   * 
   * **SQL**: Aggregates logs by query ID.
   * 
   * **SlowLogRequestOpType**: Aggregates logs by operation type.
   * 
   * **SlowLogRequestNamespace**: Aggregates logs by namespace.
   * 
   * For Redis engines:
   * 
   * **SlowLogRequestNodeId**: Aggregates logs by node ID.
   * 
   * **SlowLogRequestHostInsId**: Aggregates logs by host instance ID.
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

