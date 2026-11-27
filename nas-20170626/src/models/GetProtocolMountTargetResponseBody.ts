// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtocolMountTargetResponseBodyProtocolMountTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the export directory was created.
   * Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-12-22 17:49:25
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the protocol service export directory.
   * 
   * @example
   * The description of this protocol service export directory
   */
  description?: string;
  /**
   * @remarks
   * The ID of the export directory.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The fileset ID.
   * 
   * @example
   * fset-299b4ca04de8****
   */
  fsetId?: string;
  /**
   * @remarks
   * The path of the queried CPFS directory.
   * 
   * Format:
   * - The path must be 1 to 1,024 characters in length.
   * - The path must be encoded in UTF-8.
   * - The path must start and end with a forward slash (/). The root directory is `/`.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The domain name of the protocol service export directory.
   * 
   * @example
   * cpfs-0229cb80bcc0****-x******.cn-*****.cpfs.aliyuncs.com
   */
  protocolMountTargetDomain?: string;
  /**
   * @remarks
   * The protocol type of the file system.
   * 
   * Valid values:
   * 
   * - NFS: NFS file protocol.
   * - SMB: SMB file protocol.
   * - cpfs: The protocol type supported by CPFS file systems.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the protocol service export directory. Valid values:
   * - CREATING: The export directory is being created.
   * - AVAILABLE: The export directory is available.
   * - MODIFYING: The export directory is being modified.
   * - DELETING: The export directory is being deleted.
   * - STOPPING: The export directory is being stopped.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the protocol service export directory belongs.
   * 
   * @example
   * vsw-8vb2qjnxs6hiobzve****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The IDs of the vSwitches to which the protocol service export directory belongs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC to which the protocol service export directory belongs.
   * 
   * @example
   * vpc-bp1h5mxoqfuo3xurf****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      createTime: 'CreateTime',
      description: 'Description',
      exportId: 'ExportId',
      fsetId: 'FsetId',
      path: 'Path',
      protocolMountTargetDomain: 'ProtocolMountTargetDomain',
      protocolType: 'ProtocolType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      createTime: 'string',
      description: 'string',
      exportId: 'string',
      fsetId: 'string',
      path: 'string',
      protocolMountTargetDomain: 'string',
      protocolType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProtocolMountTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The next token. If the response is truncated, you can use NextToken to send another request to retrieve the remaining results.
   * 
   * @example
   * M18xMA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the protocol service export directory.
   */
  protocolMountTarget?: GetProtocolMountTargetResponseBodyProtocolMountTarget;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6299428C-3861-435D-AE54-9B330A00****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      protocolMountTarget: 'ProtocolMountTarget',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      protocolMountTarget: GetProtocolMountTargetResponseBodyProtocolMountTarget,
      requestId: 'string',
    };
  }

  validate() {
    if(this.protocolMountTarget && typeof (this.protocolMountTarget as any).validate === 'function') {
      (this.protocolMountTarget as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

