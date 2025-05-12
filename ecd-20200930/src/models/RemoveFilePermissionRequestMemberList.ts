// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveFilePermissionRequestMemberListCdsIdentity } from "./RemoveFilePermissionRequestMemberListCdsIdentity";


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

