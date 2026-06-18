// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterHyperNodesResponseBodyHyperNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The commodity code.
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2025-07-07T17:38:35.391
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the machine.
   * 
   * @example
   * 2025-04-19T02:32:48Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether file storage mounting is supported.
   * 
   * @example
   * False
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * alywlcb-lingjun-gpu-0025
   */
  hostname?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * B1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * efg2.NH2cn
   */
  machineType?: string;
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * i123229811742436895560
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * g1
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The status of the hyper node.
   * 
   * @example
   * Using
   */
  operatingState?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Extending
   * 
   * @deprecated
   */
  status?: string;
  /**
   * @remarks
   * The tag information.
   */
  tags?: ListClusterHyperNodesResponseBodyHyperNodesTags[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * i153907661745288876128
   */
  taskId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1u4ej4ap8c4yiqfi87c
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-0jl8gs7qmx89739e210dn
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
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
  /**
   * @remarks
   * The list of nodes.
   */
  hyperNodes?: ListClusterHyperNodesResponseBodyHyperNodes[];
  /**
   * @remarks
   * The query token returned from this call.
   * 
   * @example
   * 563d42ae0b17572449ec8c97f7f66069
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
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

