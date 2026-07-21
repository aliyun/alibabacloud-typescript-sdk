// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The user ID or group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 249dsfseee643h33g3dv****
   */
  id?: string;
  /**
   * @remarks
   * The object type.
   * 
   * Valid values:
   * 
   * *   IT_Group: group.
   * *   IT_User: user.
   * 
   * This parameter is required.
   * 
   * @example
   * IT_User
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The permission information.
   * 
   * This parameter is required.
   */
  cdsIdentity?: RemoveFilePermissionRequestMemberListCdsIdentity;
  /**
   * @remarks
   * You can set permissions by specifying roles or by customizing operation permissions. This field is used to set permissions by specifying roles. This field is mutually exclusive with `ActionList`.
   * 
   * Valid values:
   * 
   * *   SystemFileEditorWithoutShareLink: the role that has the permissions to edit files but cannot share files.
   * *   SystemFileUploaderAndDownloaderWithShareLink: the role that has the permissions to upload, download, and share files.
   * *   SystemFileDownloader: the role that has the permissions to download files.
   * *   SystemFileEditorWithoutDelete: the role that has the permissions to edit files but cannot delete files.
   * *   SystemFileOwner: the role that has the permissions to collaborate with others.
   * *   SystemFileDownloaderWithShareLink: the role that has the permissions to download and share files
   * *   SystemFileUploaderAndViewer: the role that has the permissions to preview or upload files.
   * *   SystemFileViewer: the role that has the permissions to preview files.
   * *   SystemFileEditor: the role that has the permissions to edit files
   * *   SystemFileUploaderWithShareLink: the role that has the permissions to upload or share files.
   * *   SystemFileUploader: the role that has the permission to upload files.
   * *   SystemFileUploaderAndDownloader: the role that has the permissions to upload or download files.
   * *   SystemFileMetaViewer: the role that has the permissions to view files
   * 
   * This parameter is required.
   * 
   * @example
   * SystemFileUploaderAndDownloader
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: RemoveFilePermissionRequestMemberListCdsIdentity,
      roleId: 'string',
    };
  }

  validate() {
    if(this.cdsIdentity && typeof (this.cdsIdentity as any).validate === 'function') {
      (this.cdsIdentity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-066224****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListCdsFiles](https://help.aliyun.com/document_detail/2247622.html) operation to query the ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the team space.
   * 
   * @example
   * cg-1fbmvrc7ug5m7****
   */
  groupId?: string;
  /**
   * @remarks
   * The users that you want to authorize to use the cloud disk.
   * 
   * This parameter is required.
   */
  memberList?: RemoveFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      endUserId: 'EndUserId',
      fileId: 'FileId',
      groupId: 'GroupId',
      memberList: 'MemberList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      endUserId: 'string',
      fileId: 'string',
      groupId: 'string',
      memberList: { 'type': 'array', 'itemType': RemoveFilePermissionRequestMemberList },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

