// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes extends $dara.Model {
  /**
   * @example
   * /tmp/CrowdStrike
   */
  mountPath?: string;
  /**
   * @example
   * jueming
   */
  name?: string;
  /**
   * @example
   * 8192
   */
  sizeGB?: string;
  /**
   * @example
   * PolarFs
   */
  storageCategory?: string;
  /**
   * @example
   * PL1
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      sizeGB: 'SizeGB',
      storageCategory: 'StorageCategory',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      sizeGB: 'string',
      storageCategory: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
  childVolumes?: DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes[];
  /**
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @example
   * polar.pg.g8.8xlarge.gu30
   */
  DBNodeClass?: string;
  /**
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @example
   * 2
   */
  GPU?: string;
  /**
   * @example
   * 10.*.*12
   */
  linkIP?: string;
  /**
   * @example
   * 8192
   */
  memorySize?: string;
  /**
   * @example
   * 101.101.101.101
   */
  publicIp?: string;
  /**
   * @example
   * vn-***************
   */
  VNodeId?: string;
  /**
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      childVolumes: 'ChildVolumes',
      cpuCores: 'CpuCores',
      DBNodeClass: 'DBNodeClass',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeStatus: 'DBNodeStatus',
      GPU: 'GPU',
      linkIP: 'LinkIP',
      memorySize: 'MemorySize',
      publicIp: 'PublicIp',
      VNodeId: 'VNodeId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childVolumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes },
      cpuCores: 'string',
      DBNodeClass: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeStatus: 'string',
      GPU: 'string',
      linkIP: 'string',
      memorySize: 'string',
      publicIp: 'string',
      VNodeId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childVolumes)) {
      $dara.Model.validateArray(this.childVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems extends $dara.Model {
  /**
   * @example
   * pc-**********.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * Public
   */
  netType?: string;
  /**
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyEndpointList extends $dara.Model {
  netInfoItems?: DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems[];
  static names(): { [key: string]: string } {
    return {
      netInfoItems: 'NetInfoItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItems: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoItems)) {
      $dara.Model.validateArray(this.netInfoItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyVolumes extends $dara.Model {
  /**
   * @example
   * /var/run/secrets/kubernetes.io/serviceaccount
   */
  mountPath?: string;
  /**
   * @example
   * jueming
   */
  name?: string;
  /**
   * @example
   * 8192
   */
  sizeGB?: string;
  /**
   * @example
   * PL1
   */
  storageCategory?: string;
  /**
   * @example
   * PolarFs
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      sizeGB: 'SizeGB',
      storageCategory: 'StorageCategory',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      sizeGB: 'string',
      storageCategory: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * vnode
   */
  aiNodeType?: string;
  /**
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  DBNodes?: DescribeAIDBClusterAttributeResponseBodyDBNodes[];
  /**
   * @example
   * 1.0
   */
  DBVersion?: string;
  endpointList?: DescribeAIDBClusterAttributeResponseBodyEndpointList[];
  /**
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @example
   * 10.*.*.72
   */
  internalIp?: string;
  /**
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxx
   */
  kubeClusterId?: string;
  /**
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @example
   * 20
   */
  maxQPM?: string;
  /**
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  publicIp?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @example
   * container
   */
  runType?: string;
  /**
   * @example
   * essdpl1
   */
  storageType?: string;
  /**
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  volumes?: DescribeAIDBClusterAttributeResponseBodyVolumes[];
  /**
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  /**
   * @example
   * cn-hangzhou-i,cn-hangzhou-g
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodeType: 'AiNodeType',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodes: 'DBNodes',
      DBVersion: 'DBVersion',
      endpointList: 'EndpointList',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      internalIp: 'InternalIp',
      kubeClusterId: 'KubeClusterId',
      lockMode: 'LockMode',
      maxQPM: 'MaxQPM',
      modelName: 'ModelName',
      payType: 'PayType',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      requestId: 'RequestId',
      runType: 'RunType',
      storageType: 'StorageType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      volumes: 'Volumes',
      zoneId: 'ZoneId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodeType: 'string',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodes },
      DBVersion: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointList },
      expireTime: 'string',
      expired: 'boolean',
      internalIp: 'string',
      kubeClusterId: 'string',
      lockMode: 'string',
      maxQPM: 'string',
      modelName: 'string',
      payType: 'string',
      publicIp: 'string',
      regionId: 'string',
      requestId: 'string',
      runType: 'string',
      storageType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      volumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVolumes },
      zoneId: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.endpointList)) {
      $dara.Model.validateArray(this.endpointList);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

