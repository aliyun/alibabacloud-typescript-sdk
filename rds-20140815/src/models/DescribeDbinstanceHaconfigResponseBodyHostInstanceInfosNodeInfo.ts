// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the secondary instance completed the synchronization of data from the primary instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-05T15:15:00Z
   */
  dataSyncTime?: string;
  /**
   * @remarks
   * The time when the secondary instance received logs from the primary instance. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-05T15:15:00Z
   */
  logSyncTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 3397027
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **Master**: the primary node
   * *   **Slave**: the secondary node
   * 
   * @example
   * Master
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The synchronization status. Valid values:
   * 
   * *   **NotAvailable**: The synchronization fails. This means that faults occur.
   * *   **Syncing**: The synchronization is in process. In this case, a primary/secondary switchover may cause data losses.
   * *   **Synchronized**: The synchronization is completed.
   * *   **NotSupport**: The database engine or database engine version does not involve the synchronization between the primary and secondary instances.
   * 
   * @example
   * NotAvailable
   */
  syncStatus?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSyncTime: 'DataSyncTime',
      logSyncTime: 'LogSyncTime',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      regionId: 'RegionId',
      syncStatus: 'SyncStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSyncTime: 'string',
      logSyncTime: 'string',
      nodeId: 'string',
      nodeType: 'string',
      regionId: 'string',
      syncStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

