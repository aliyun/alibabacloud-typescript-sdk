// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlLogRecordsRequestFilters extends $dara.Model {
  /**
   * @remarks
   * The filter key.
   * 
   * > For details on supported filter keys and their values, see **Additional information about request parameters**.
   * 
   * @example
   * keyWords
   */
  key?: string;
  /**
   * @remarks
   * The filter value.
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
   * The end of the time range to query. This is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1608888296000
   */
  endTime?: number;
  /**
   * @remarks
   * A list of filter conditions.
   */
  filters?: DescribeSqlLogRecordsRequestFilters[];
  /**
   * @remarks
   * The ID of the database instance.
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
   * - This parameter is applicable only to ApsaraDB RDS for MySQL and PolarDB for MySQL cluster instances. If this parameter is omitted, the log details of the primary node are returned by default.
   * 
   * - For PolarDB-X 2.0, set this parameter to **polarx_cn** (compute node) or **polarx_dn** (data node).
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
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The role of the node in the PolarDB-X 2.0 database instance.
   * 
   * - **polarx_cn**: compute node.
   * 
   * - **polarx_dn**: data node.
   * 
   * @example
   * polarx_cn
   */
  role?: string;
  /**
   * @remarks
   * The beginning of the time range to query. This is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
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

