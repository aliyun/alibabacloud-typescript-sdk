// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogRecordsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter parameter.
   * 
   * >  For more information about the supported filter parameters and their valid values, see the **Supported parameters and values for Key** section of this topic.
   * 
   * @example
   * keyWords
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

export class DescribeSqlLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * The filter conditions.
   */
  filters?: DescribeSqlLogRecordsRequestFilters[];
  /**
   * @remarks
   * The database instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * *   For ApsaraDB RDS for MySQL instances and PolarDB for MySQL clusters, this parameter is valid only for instances of the Cluster Edition. If you do not specify this parameter, the log details of the primary node is queried by default.
   * *   For PolarDB-X 2.0 instances, set this parameter to **polarx_cn** if the node is a compute node, or **polarx_dn** if the node is a data node.
   * 
   * @example
   * pi-uf6k5f6g3912i****
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The role of the node of the PolarDB-X 2.0 instance. Valid values:
   * 
   * *   \\*\\*polarx_cn\\*\\*: compute node
   * *   \\*\\*polarx_dn\\*\\*: data node
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This value is a UNIX timestamp. Unit: millisecond.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      role: 'Role',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSqlLogRecordsRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      role: 'string',
      startTime: 'number',
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

