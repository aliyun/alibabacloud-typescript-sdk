// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes } from "./DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes";
import { DescribeMountTargetsResponseBodyMountTargetsMountTargetTags } from "./DescribeMountTargetsResponseBodyMountTargetsMountTargetTags";


export class DescribeMountTargetsResponseBodyMountTargetsMountTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroup?: string;
  /**
   * @remarks
   * The information about client management nodes.
   */
  clientMasterNodes?: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * @example
   * 1ca404****-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The type of the mount target.
   * 
   * *   IPv4: an IPv4 mount target
   * *   DualStack: a dual-stack mount target
   * 
   * @example
   * IPv4
   */
  IPVersion?: string;
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
   * 
   * @example
   * 1ca404****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The network type. Valid value: **Vpc**.
   * 
   * @example
   * Vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * *   Pending: The mount target is being created or modified.
   * *   Deleting: The mount target is being deleted.
   * *   Hibernating: The mount target is being hibernated.
   * *   Hibernated: The mount target is hibernated.
   * 
   * > You can mount a file system only when the mount target of the file system is in the Active state.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * An array of tags. The array may contain up to 20 tags. If the array contains multiple tags, each tag key is unique.
   */
  tags?: DescribeMountTargetsResponseBodyMountTargetsMountTargetTags;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      clientMasterNodes: 'ClientMasterNodes',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      IPVersion: 'IPVersion',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      clientMasterNodes: DescribeMountTargetsResponseBodyMountTargetsMountTargetClientMasterNodes,
      dualStackMountTargetDomain: 'string',
      IPVersion: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      tags: DescribeMountTargetsResponseBodyMountTargetsMountTargetTags,
      vpcId: 'string',
      vswId: 'string',
    };
  }

  validate() {
    if(this.clientMasterNodes && typeof (this.clientMasterNodes as any).validate === 'function') {
      (this.clientMasterNodes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

