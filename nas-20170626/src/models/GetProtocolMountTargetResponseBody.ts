// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtocolMountTargetResponseBodyProtocolMountTarget extends $dara.Model {
  /**
   * @remarks
   * The permission group name.
   * 
   * Default permission group: DEFAULT_VPC_GROUP_NAME.
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The creation time.
   * Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-12-22 17:49:25
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the protocol service export.
   * 
   * @example
   * Description of this protocol service export
   */
  description?: string;
  /**
   * @remarks
   * The export directory ID.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * Fileset ID。
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
   * - The path is 1 to 1,024 characters in length.
   * - The path is encoded in UTF-8.
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
   * - NFS: NFS protocol
   * - SMB: SMB protocol
   * - cpfs: the protocol type supported by CPFS file systems
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the protocol service export directory. Valid values:
   * - CREATING: Being created.
   * - AVAILABLE: Available.
   * - MODIFYING: Being modified.
   * - DELETING: Being deleted.
   * - STOPPING: Being stopped.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID of the protocol service export.
   * 
   * @example
   * vsw-8vb2qjnxs6hiobzve****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of vSwitch IDs of the protocol service export.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the protocol service export.
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
   * If the response is truncated, you can use NextToken to send a subsequent request to retrieve the content after the current truncation point.
   * 
   * @example
   * M18xMA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The export directory information of the protocol service.
   */
  protocolMountTarget?: GetProtocolMountTargetResponseBodyProtocolMountTarget;
  /**
   * @remarks
   * The request ID.
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

