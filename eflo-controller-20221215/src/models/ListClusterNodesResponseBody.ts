// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterNodesResponseBodyNodesNetworks extends $dara.Model {
  /**
   * @remarks
   * The name of the network interface on the machine.
   * 
   * @example
   * bond0
   */
  bondName?: string;
  /**
   * @remarks
   * The IP address of the machine in the virtual private cloud (VPC).
   * 
   * @example
   * 192.168.22.2
   */
  ip?: string;
  /**
   * @remarks
   * The subnet ID of the VPC.
   * 
   * @example
   * subnet-fwekrvg9
   */
  subnetId?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The commodity code, which is a unique identifier for a specific cloud product or service.
   * 
   * @example
   * bccluster_eflocomputing_public_cn (Lingjun China site subscription), bccluster_eflocomputing_public_intl (Lingjun international site subscription)
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time. The time is in ISO 8601 format.
   * 
   * @example
   * 2026-02-02T11:27:07
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the machine. The time is in ISO 8601 format.
   * 
   * @example
   * 2026-03-03T00:00:00
   */
  expiredTime?: string;
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
   * 72432f80-273e-11ed-b57a-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * The cluster number.
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
   * The system image ID.
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
   * The network information.
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
   * The node specifications.
   * 
   * @example
   * standard
   */
  nodeType?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * Extending
   */
  operatingState?: string;
  /**
   * @remarks
   * The serial number (SN) of the machine.
   * 
   * @example
   * sn_tOuUk
   */
  sn?: string;
  /**
   * @remarks
   * The tag information.
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
   * The VPC ID.
   * 
   * @example
   * vpc-f8zcet5mwerafyqlrhyoi
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The query token returned by this call.
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

