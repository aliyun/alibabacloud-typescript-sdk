// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterNodesResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @remarks
   * The name of the network interface.
   * 
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The IP address of the node in the VPC.
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  /**
   * @remarks
   * The subnet ID.
   * 
   * @example
   * subnet-fwekrvg9
   */
  subnetId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the network interface belongs.
   * 
   * @example
   * vpd-eoiy88ju
   */
  vpdId?: string;
  static names(): { [key: string]: string } {
    return {
      bondName: 'BondName',
      ip: 'Ip',
      subnetId: 'SubnetId',
      vpdId: 'VpdId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bondName: 'string',
      ip: 'string',
      subnetId: 'string',
      vpdId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBodyNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * alarm_xdc
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * true
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

export class ListClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The unique code that identifies the cloud product or service.
   * 
   * @example
   * bccluster_eflocomputing_public_cn（表示灵骏中国站包年包月）、bccluster_eflocomputing_public_intl（表示灵骏国际站包年包月）
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-02-02T11:27:07
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the node.
   * 
   * @example
   * 2026-03-03T00:00:00
   */
  expiredTime?: string;
  /**
   * @remarks
   * Indicates whether the node supports mounting file storage.
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
   * 72432f80-273e-11ed-b57a-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * The ID of the HPN zone.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * The hyper node ID.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * Alinux3_x86_gu8xf_P_Host_D3_C7E3_550.127_Legacy_N_241230
   */
  imageName?: string;
  /**
   * @remarks
   * The machine type.
   * 
   * @example
   * cn-wulanchabu-b11
   */
  machineType?: string;
  /**
   * @remarks
   * Network details.
   */
  networks?: ListClusterNodesResponseBodyNodesNetworks[];
  /**
   * @remarks
   * The node group ID.
   * 
   * @example
   * ng-e9b74f4d450cf18d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * The node group name.
   * 
   * @example
   * emr_master
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  nodeId?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * standard
   */
  nodeType?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Extending
   */
  operatingState?: string;
  /**
   * @remarks
   * The serial number (SN) of the node.
   * 
   * @example
   * sn_tOuUk
   */
  sn?: string;
  /**
   * @remarks
   * The list of tags attached to the node.
   */
  tags?: ListClusterNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * i-skkdsdl83ksxxs3
   */
  taskId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0jlohur7nhbxd1ttyq8p8
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC where the node is located.
   * 
   * @example
   * vpc-f8zcet5mwerafyqlrhyoi
   */
  vpcId?: string;
  /**
   * @remarks
   * The availability zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      fileSystemMountEnabled: 'FileSystemMountEnabled',
      hostname: 'Hostname',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      operatingState: 'OperatingState',
      sn: 'Sn',
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
      expiredTime: 'string',
      fileSystemMountEnabled: 'boolean',
      hostname: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
      nodeType: 'string',
      operatingState: 'string',
      sn: 'string',
      tags: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesTags },
      taskId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networks)) {
      $dara.Model.validateArray(this.networks);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is empty, no more results are available.
   * 
   * @example
   * AAAAAXW/ZB9TBvH+0ZK0phtCibQgQmu1RbqplAI6Velo2OKR
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of nodes.
   */
  nodes?: ListClusterNodesResponseBodyNodes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2BA76272-6608-5AEC-BBA8-B6F0D3D14CDB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

