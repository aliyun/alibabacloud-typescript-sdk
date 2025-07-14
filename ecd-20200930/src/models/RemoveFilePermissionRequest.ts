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
   * *   IT_Group
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     group
   * 
   *     <!-- -->
   * 
   * *   IT_User
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     user
   * 
   *     <!-- -->
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
   * The role ID. You can configure permissions on roles or actions. This parameter is used to specify the permissions on roles, which conflicts with the ActionList parameter. When you configure both the parameters, this parameter shall prevail.
   * 
   * Valid values:
   * 
   * *   SystemFileEditorWithoutShareLink
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to edit files but cannot share files
   * 
   *     <!-- -->
   * 
   * *   SystemFileUploaderAndDownloaderWithShareLink
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to upload, download, and share files
   * 
   *     <!-- -->
   * 
   * *   SystemFileDownloader
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to download files
   * 
   *     <!-- -->
   * 
   * *   SystemFileEditorWithoutDelete
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to edit files but cannot delete files
   * 
   *     <!-- -->
   * 
   * *   SystemFileOwner
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to collaborate with others
   * 
   *     <!-- -->
   * 
   * *   SystemFileDownloaderWithShareLink
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to download and share files
   * 
   *     <!-- -->
   * 
   * *   SystemFileUploaderAndViewer
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to preview or upload files
   * 
   *     <!-- -->
   * 
   * *   SystemFileViewer
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to preview files
   * 
   *     <!-- -->
   * 
   * *   SystemFileEditor
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to edit files
   * 
   *     <!-- -->
   * 
   * *   SystemFileUploaderWithShareLink
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to upload or share files
   * 
   *     <!-- -->
   * 
   * *   SystemFileUploader
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permission to upload files
   * 
   *     <!-- -->
   * 
   * *   SystemFileUploaderAndDownloader
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to upload or download files
   * 
   *     <!-- -->
   * 
   * *   SystemFileMetaViewer
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     the role that has the permissions to view files
   * 
   *     <!-- -->
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
   * The ID of the cloud disk in Cloud Drive Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-066224****
   */
  cdsId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The file ID. The ID is a unique identifier for the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The group ID.
   */
  groupId?: string;
  /**
   * @remarks
   * The users that you want to authorize.
   * 
   * This parameter is required.
   */
  memberList?: RemoveFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

