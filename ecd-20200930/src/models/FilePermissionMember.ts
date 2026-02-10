// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class FilePermissionMemberCdsIdentity extends $dara.Model {
  /**
   * @remarks
   * The user ID or a team ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 16435bdf934248b788b7b3771ee9****
   */
  id?: string;
  /**
   * @remarks
   * The object type.
   * 
   * Valid values:
   * 
   * *   IT_Group: team
   * *   IT_User: user
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

export class FilePermissionMember extends $dara.Model {
  /**
   * @remarks
   * The object that you want to grant permissions. The object can be a user or a group.
   * 
   * This parameter is required.
   */
  cdsIdentity?: FilePermissionMemberCdsIdentity;
  /**
   * @remarks
   * Indicates whether to disable the permission from users in the subgroup.
   * 
   * @example
   * true
   */
  disinheritSubGroup?: boolean;
  /**
   * @remarks
   * The expiration time. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC
   * 
   * @example
   * 1633598866642
   */
  expireTime?: number;
  /**
   * @remarks
   * The role.
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
   * SystemFileEditor
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
      cdsIdentity: FilePermissionMemberCdsIdentity,
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

