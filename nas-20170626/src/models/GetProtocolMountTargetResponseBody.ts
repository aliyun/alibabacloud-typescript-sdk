// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtocolMountTargetResponseBodyProtocolMountTarget extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group.
   * 
   * Default permission group: DEFAULT\\\_VPC\\\_GROUP\\\_NAME
   * 
   * @example
   * DEFAULT_VPC_GROUP_NAME
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The time when the export directory was created. Return format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2025-12-22 17:49:25
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the export directory.
   * 
   * @example
   * The description of the export directory.
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
   * The path of the CPFS directory that was queried.
   * 
   * Format:
   * 
   * *   Must be 1 to 1,024 characters in length.
   * *   Must be encoded in UTF-8.
   * *   Must start and end with a forward slash (/). The root directory is `/`.
   * 
   * @example
   * /
   */
  path?: string;
  /**
   * @remarks
   * The domain name of the export directory for the protocol service.
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
   * *   NFS: Network File System (NFS)
   * *   SMB: Server Message Block (SMB)
   * *   cpfs: The protocol type supported by the CPFS file system.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * The status of the export directory. Valid values:
   * 
   * *   CREATING: The export directory is being created.
   * *   AVAILABLE : The export directory is available.
   * *   MODIFYING: The export directory is being modified.
   * *   DELETING: The export directory is being deleted.
   * *   STOPPING: The export directory is being stopped.
   * 
   * @example
   * AVAILABLE
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID of the export directory.
   * 
   * @example
   * vsw-8vb2qjnxs6hiobzve****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch ID list of the export directory.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID of the export directory.
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
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * M18xMA==
   */
  nextToken?: string;
  /**
   * @remarks
   * Information of the export directory for the protocol service
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

