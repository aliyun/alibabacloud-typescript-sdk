// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes extends $dara.Model {
  /**
   * @example
   * cn-hangzhou-h
   */
  AZone?: string;
  /**
   * @example
   * 204800
   */
  disk?: number;
  /**
   * @example
   * polarx.x4.large.2e.cdc
   */
  nodeClass?: string;
  /**
   * @example
   * ***
   */
  nodeId?: string;
  /**
   * @example
   * pxc-c-***
   */
  nodeName?: string;
  /**
   * @example
   * ACTIVATION
   */
  status?: string;
  /**
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
   * @example
   * BINLOG_X
   */
  clusterType?: string;
  /**
   * @example
   * ***
   */
  comment?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * RECORD
   */
  hashLevel?: string;
  /**
   * @example
   * pxc-***
   */
  instanceName?: string;
  physicalNodes?: DescribeCdcInfoResponseBodyDataInstanceTopologyListPhysicalNodes[];
  /**
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
   * @example
   * 15
   */
  binlogPersistTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 524288000
   */
  binlogSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polarx-cdc-kernel-***
   */
  cdcNewVersion?: string;
  /**
   * @example
   * ON
   */
  checkSumSwitch?: string;
  /**
   * @example
   * true
   */
  enableCyclicReplication?: boolean;
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
  data?: DescribeCdcInfoResponseBodyData;
  /**
   * @remarks
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

