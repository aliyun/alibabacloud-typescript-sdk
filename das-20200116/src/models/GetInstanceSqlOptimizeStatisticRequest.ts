// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceSqlOptimizeStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1662518540764
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to filter instances for which DAS Enterprise Edition is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  If you set this parameter to **true**, only database instances for which DAS Enterprise Edition is disabled are queried. If you set this parameter to **false**, all database instances are queried.
   * 
   * @example
   * false
   */
  filterEnable?: string;
  /**
   * @remarks
   * The database instance ID.
   * 
   * >  The database instance must be an ApsaraDB RDS for MySQL instance or a PolarDB for MySQL cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-wz90h9560rvdz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  For ApsaraDB RDS for MySQL Cluster Edition instances or PolarDB for MySQL clusters, you must specify the node ID.
   * 
   * @example
   * pi-bp12v7243x012****
   */
  nodeId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set this parameter to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1661308902060
   */
  startTime?: string;
  /**
   * @remarks
   * The duration threshold for automatic SQL optimization events. After this parameter is specified, the system collects statistics on automatic SQL optimization events whose duration does not exceed the specified threshold.
   * 
   * >  This parameter is a reserved parameter and does not take effect.
   * 
   * @example
   * None
   */
  threshold?: string;
  /**
   * @remarks
   * Specifies whether to merge automatic SQL optimization events. Valid values:
   * 
   * *   **true**: merges automatic SQL optimization events.
   * *   **false**: does not merge automatic SQL optimization events.
   * 
   * >  This parameter is a reserved parameter and does not take effect.
   * 
   * @example
   * true
   */
  useMerging?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filterEnable: 'FilterEnable',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      threshold: 'Threshold',
      useMerging: 'UseMerging',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      filterEnable: 'string',
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'string',
      threshold: 'string',
      useMerging: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

