// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user.
   * 
   * This parameter is required.
   * 
   * @example
   * user01
   */
  id?: string;
  /**
   * @remarks
   * The user type.
   * 
   * Set the value to TENANT_ADMIN.
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

export class AddFilePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The user of the cloud disk.
   * 
   * This parameter is required.
   */
  cdsIdentity?: AddFilePermissionRequestMemberListCdsIdentity;
  /**
   * @remarks
   * Specifies whether the users of the child group can inherit the folder permissions.
   * 
   * @example
   * false
   */
  disinheritSubGroup?: boolean;
  /**
   * @remarks
   * The time when the authorization expires. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. The value never expires. You can specify a value that is predefined by the system for this parameter. Example: 4775500800000.
   * 
   * @example
   * 4775500800000
   */
  expireTime?: number;
  /**
   * @remarks
   * You can set permissions by specifying roles or by customizing operation permissions. This field is used to set permissions by specifying roles. This field is mutually exclusive with `ActionList`.
   * 
   * Valid values:
   * 
   * *   SystemFileEditorWithoutShareLink: The role that can edit but cannot share files.
   * *   SystemFileUploaderAndDownloaderWithShareLink: The role that can upload, download, and share files.
   * *   SystemFileDownloader: The role that can download files.
   * *   SystemFileEditorWithoutDelete: The role that can edit but cannot edit files.
   * *   SystemFileOwner: The role that can collaborate with others on files.
   * *   SystemFileDownloaderWithShareLink: The role that can download and share files.
   * *   SystemFileUploaderAndViewer: The role that can preview and upload files.
   * *   SystemFileViewer: The role that can preview files.
   * *   SystemFileEditor: The role that can edit files.
   * *   SystemFileUploaderWithShareLink: The role that can upload and share files.
   * *   SystemFileUploader: The role that can upload files.
   * *   SystemFileUploaderAndDownloader: The role that can upload and download files.
   * *   SystemFileMetaViewer: The role that can view file list.
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
      disinheritSubGroup: 'DisinheritSubGroup',
      expireTime: 'ExpireTime',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: AddFilePermissionRequestMemberListCdsIdentity,
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
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

export class AddFilePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the user who uses the network disk.
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
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The users that you want to authorize to use the cloud disk.
   * 
   * This parameter is required.
   */
  memberList?: AddFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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
      memberList: { 'type': 'array', 'itemType': AddFilePermissionRequestMemberList },
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

