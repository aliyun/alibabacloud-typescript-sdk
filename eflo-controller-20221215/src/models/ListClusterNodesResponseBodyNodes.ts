// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClusterNodesResponseBodyNodesNetworks } from "./ListClusterNodesResponseBodyNodesNetworks";
import { ListClusterNodesResponseBodyNodesTags } from "./ListClusterNodesResponseBodyNodesTags";


export class ListClusterNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * product code
   * 
   * @example
   * bcccluster
   */
  commodityCode?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1642472468000
   */
  createTime?: string;
  /**
   * @remarks
   * Machine expiration time
   * 
   * @example
   * 1762185600000
   */
  expiredTime?: string;
  /**
   * @remarks
   * whether or not support file system mount
   * 
   * @example
   * False
   */
  fileSystemMountEnabled?: boolean;
  /**
   * @remarks
   * Hostname
   * 
   * @example
   * 72432f80-273e-11ed-b57a-acde48001122
   */
  hostname?: string;
  /**
   * @remarks
   * Hpn Zone
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @remarks
   * System image ID
   * 
   * @example
   * i190297201669099844192
   */
  imageId?: string;
  /**
   * @remarks
   * image name
   * 
   * @example
   * Alinux3_x86_AMD_R_Host_D3_E3_24.13.00_UEFI_N_250121
   */
  imageName?: string;
  /**
   * @remarks
   * Machine type
   * 
   * @example
   * cn-wulanchabu-b11
   */
  machineType?: string;
  /**
   * @remarks
   * Network information
   */
  networks?: ListClusterNodesResponseBodyNodesNetworks[];
  /**
   * @remarks
   * Node group ID
   * 
   * @example
   * ng-e9b74f4d450cf18d
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * Node group name
   * 
   * @example
   * emr_master
   */
  nodeGroupName?: string;
  /**
   * @remarks
   * Node ID
   * 
   * @example
   * e01-cn-2r42tmj4z02
   */
  nodeId?: string;
  /**
   * @remarks
   * Node status
   * 
   * @example
   * Extending
   */
  operatingState?: string;
  /**
   * @remarks
   * Machine SN
   * 
   * @example
   * sn_tOuUk
   */
  sn?: string;
  /**
   * @remarks
   * tag information
   */
  tags?: ListClusterNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * task id
   * 
   * @example
   * i28ddkdkkdkdd
   */
  taskId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1mxqhw8o20tgv3xk47h
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-0jltf9vinjz3if3lltdy7
   */
  vpcId?: string;
  /**
   * @remarks
   * Zone ID
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
      imageId: 'ImageId',
      imageName: 'ImageName',
      machineType: 'MachineType',
      networks: 'Networks',
      nodeGroupId: 'NodeGroupId',
      nodeGroupName: 'NodeGroupName',
      nodeId: 'NodeId',
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
      imageId: 'string',
      imageName: 'string',
      machineType: 'string',
      networks: { 'type': 'array', 'itemType': ListClusterNodesResponseBodyNodesNetworks },
      nodeGroupId: 'string',
      nodeGroupName: 'string',
      nodeId: 'string',
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

