// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * ali-zeekr-ota-doris-prod-hz-selectdb
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

export class ListClusterHyperNodesResponseBodyHyperNodes extends $dara.Model {
  /**
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * 2025-07-07T17:38:35.391
   */
  createTime?: string;
  /**
   * @example
   * 2025-04-19T02:32:48Z
   */
  expireTime?: string;
  /**
   * @example
   * False
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @example
   * efg2.NH2cn
   */
  machineType?: string;
  /**
   * @example
   * i123229811742436895560
   */
  nodeGroupId?: string;
  /**
   * @example
   * g1
   */
  nodeGroupName?: string;
  /**
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @example
   * Extending
   * 
   * @deprecated
   */
  status?: string;
  tags?: ListClusterHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @example
   * i153907661745288876128
   */
  taskId?: string;
  /**
   * @example
   * vsw-bp1u4ej4ap8c4yiqfi87c
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-0jl8gs7qmx89739e210dn
   */
  vpcId?: string;
  /**
   * @example
   * cn-shanghai-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      operatingState: 'OperatingState',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expireTime: 'string',
      fileSystemMountEnabled: 'boolean',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      operatingState: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterHyperNodesResponseBodyHyperNodesTags },
      taskId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterHyperNodesResponseBody extends $dara.Model {
  hyperNodes?: ListClusterHyperNodesResponseBodyHyperNodes[];
  /**
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4FD06DF0-9167-5C6F-A145-F30CA4A15D54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      hyperNodes: 'HyperNodes',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperNodes: { 'type': 'array', 'itemType': ListClusterHyperNodesResponseBodyHyperNodes },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hyperNodes)) {
      $dara.Model.validateArray(this.hyperNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

