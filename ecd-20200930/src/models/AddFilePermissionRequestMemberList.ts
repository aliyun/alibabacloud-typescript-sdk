// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddFilePermissionRequestMemberListCdsIdentity } from "./AddFilePermissionRequestMemberListCdsIdentity";


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

