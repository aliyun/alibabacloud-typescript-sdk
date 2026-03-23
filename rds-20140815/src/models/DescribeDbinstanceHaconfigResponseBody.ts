// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceHAConfigResponseBodyHostInstanceInfosNodeInfo extends $dara.Model {
  dataSyncTime?: string;
  logSyncTime?: string;
  nodeId?: string;
  nodeType?: string;
  regionId?: string;
  syncStatus?: string;
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
  DBInstanceId?: string;
  HAMode?: string;
  hostInstanceInfos?: DescribeDBInstanceHAConfigResponseBodyHostInstanceInfos;
  requestId?: string;
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

