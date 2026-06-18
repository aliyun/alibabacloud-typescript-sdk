// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes extends $dara.Model {
  /**
   * @remarks
   * The zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  AZone?: string;
  /**
   * @remarks
   * The disk size. Unit: MB.
   * 
   * @example
   * 204800
   */
  disk?: number;
  /**
   * @remarks
   * The instance specifications.
   * 
   * @example
   * polarx.x4.large.2e.cdc
   */
  nodeClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * ***
   */
  nodeId?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * pxc-c-***
   */
  nodeName?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * @example
   * polarx-cdc-kernel-***
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      AZone: 'AZone',
      disk: 'Disk',
      nodeClass: 'NodeClass',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AZone: 'string',
      disk: 'number',
      nodeClass: 'string',
      nodeId: 'string',
      nodeName: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdcInfoResponseBodyDataInstanceTopologyList extends $dara.Model {
  /**
   * @remarks
   * The cluster type.
   * 
   * @example
   * BINLOG_X
   */
  clusterType?: string;
  /**
   * @remarks
   * The remarks on the instance type.
   * 
   * @example
   * ***
   */
  comment?: string;
  /**
   * @remarks
   * The name of the multi-stream group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The split level.
   * 
   * @example
   * RECORD
   */
  hashLevel?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * pxc-***
   */
  instanceName?: string;
  /**
   * @remarks
   * The array of nodes.
   */
  physicalNodes?: DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes[];
  /**
   * @remarks
   * The number of splits.
   * 
   * @example
   * 2
   */
  streamNum?: number;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      comment: 'Comment',
      groupName: 'GroupName',
      hashLevel: 'HashLevel',
      instanceName: 'InstanceName',
      physicalNodes: 'PhysicalNodes',
      streamNum: 'StreamNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      comment: 'string',
      groupName: 'string',
      hashLevel: 'string',
      instanceName: 'string',
      physicalNodes: { 'type': 'array', 'itemType': DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes },
      streamNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.physicalNodes)) {
      $dara.Model.validateArray(this.physicalNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdcInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of days that binlogs are retained.
   * 
   * @example
   * 15
   */
  binlogPersistTime?: number;
  /**
   * @remarks
   * The size of the binlog.
   * 
   * This parameter is required.
   * 
   * @example
   * 524288000
   */
  binlogSize?: number;
  /**
   * @remarks
   * The latest CDC version.
   * 
   * This parameter is required.
   * 
   * @example
   * polarx-cdc-kernel-***
   */
  cdcNewVersion?: string;
  /**
   * @remarks
   * The checksum switch status.
   * 
   * @example
   * ON
   */
  checkSumSwitch?: string;
  /**
   * @remarks
   * Indicates whether bidirectional replication is supported.
   * 
   * @example
   * true
   */
  enableCyclicReplication?: boolean;
  /**
   * @remarks
   * The list of instances.
   */
  instanceTopologyList?: DescribeCdcInfoResponseBodyDataInstanceTopologyList[];
  /**
   * @remarks
   * server id
   * 
   * This parameter is required.
   * 
   * @example
   * 3014767486
   */
  serverId?: number;
  /**
   * @remarks
   * Indicates whether multi-stream CDC is supported.
   * 
   * @example
   * true
   */
  versionSupportMultiCdc?: boolean;
  static names(): { [key: string]: string } {
    return {
      binlogPersistTime: 'BinlogPersistTime',
      binlogSize: 'BinlogSize',
      cdcNewVersion: 'CdcNewVersion',
      checkSumSwitch: 'CheckSumSwitch',
      enableCyclicReplication: 'EnableCyclicReplication',
      instanceTopologyList: 'InstanceTopologyList',
      serverId: 'ServerId',
      versionSupportMultiCdc: 'VersionSupportMultiCdc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binlogPersistTime: 'number',
      binlogSize: 'number',
      cdcNewVersion: 'string',
      checkSumSwitch: 'string',
      enableCyclicReplication: 'boolean',
      instanceTopologyList: { 'type': 'array', 'itemType': DescribeCdcInfoResponseBodyDataInstanceTopologyList },
      serverId: 'number',
      versionSupportMultiCdc: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTopologyList)) {
      $dara.Model.validateArray(this.instanceTopologyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdcInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance data.
   */
  data?: DescribeCdcInfoResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9B2F3840-5C98-475C-B269-2D5C3A31797C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeCdcInfoResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

