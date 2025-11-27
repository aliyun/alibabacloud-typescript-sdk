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

export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos extends $dara.Model {
  nodeInfo?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceHAConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The high availability mode of the instance. Valid values:
   * 
   * *   **RPO**: Data consistency is preferred. The instance ensures data reliability to minimize data losses. If you have high requirements on data consistency, select this mode.
   * *   **RTO**: Service availability is preferred. The instance restores the database service at the earliest opportunity to ensure service availability. If you have high requirements on instance availability, select this mode.
   * 
   * > This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * RPO
   */
  HAMode?: string;
  /**
   * @remarks
   * An array that consists of the information of the primary and secondary instances.
   */
  hostInstanceInfos?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The data replication mode of the instance. Valid values:
   * 
   * *   **Sync**: the synchronous mode
   * *   **Semi-sync**: the semi-synchronous replication mode
   * *   **Async**: the asynchronous mode
   * 
   * > This parameter is returned only for instances that run MySQL.
   * 
   * @example
   * Sync
   */
  syncMode?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      HAMode: 'HAMode',
      hostInstanceInfos: 'HostInstanceInfos',
      requestId: 'RequestId',
      syncMode: 'SyncMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      HAMode: 'string',
      hostInstanceInfos: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos,
      requestId: 'string',
      syncMode: 'string',
    };
  }

  validate() {
    if(this.hostInstanceInfos && typeof (this.hostInstanceInfos as any).validate === 'function') {
      (this.hostInstanceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

