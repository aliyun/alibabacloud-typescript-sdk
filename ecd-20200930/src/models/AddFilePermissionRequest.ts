// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFilePermissionRequestMemberListCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The ID of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * user01
   */
  id?: string;
  /**
   * @remarks
   * The type of the user.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     IT_Group
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     IT_User
   * 
   *     <!-- -->
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
   * The ID of the role to which you want to attach the folder permissions. To configure the folder permissions: you can specify a role or create custom operation permissions. You can use RoleId to specify a role. RoleId is mutually exclusive with ActionList. If you specify both of them, the value of RoleId takes precedence.
   * 
   * Valid values:
   * 
   * * SystemFileEditorWithoutShareLink
   * * SystemFileUploaderAndDownloaderWithShareLink
   * * SystemFileDownloader
   * * SystemFileEditorWithoutDelete
   * * SystemFileOwner
   * * SystemFileDownloaderWithShareLink
   * * SystemFileUploaderAndViewer
   * * SystemFileViewer
   * * SystemFileEditor
   * * SystemFileUploaderWithShareLink
   * * SystemFileUploader
   * * SystemFileUploaderAndDownloader
   * * SystemFileMetaViewer
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
   * The ID of the cloud disk whose folder you want to share.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+cds-352282****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the end user who uses the cloud disk.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * 6333e553a133ce21e6f747cf948bb9ef95d7****
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the team that uses cloud disks in Cloud Drive Service.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The members who are granted the folder permissions.
   * 
   * This parameter is required.
   */
  memberList?: AddFilePermissionRequestMemberList[];
  /**
   * @remarks
   * The region ID of the folder. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
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

