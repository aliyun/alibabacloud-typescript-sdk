// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class FileRemovePermissionRequestMemberList extends $dara.Model {
  /**
   * @remarks
   * The identity to whom the permissions are granted, which is a user or a group.
   * 
   * This parameter is required.
   */
  identity?: Identity;
  /**
   * @remarks
   * The role ID. You can grant permissions by assigning roles to identities, or you can customize the permissions. To grant permissions by assigning roles to identities, specify role_id. role_id and action_list are mutually exclusive. If both parameters are specified, role_id has a higher priority.
   * 
   * Valid values:
   * 
   * SystemFileOwner: collaborator.
   * 
   * SystemFileDownloader: downloader.
   * 
   * SystemFileEditor: editor.
   * 
   * SystemFileEditorWithoutDelete: editor without permissions to delete the file.
   * 
   * SystemFileEditorWithoutShareLink: editor without permissions to share the file.
   * 
   * SystemFileMetaViewer: viewer of lists.
   * 
   * SystemFileUploader: uploader. SystemFileUploaderAndDownloader: uploader and downloader.
   * 
   * SystemFileDownloaderWithShareLink: downloader and sharer.
   * 
   * SystemFileUploaderAndDownloaderWithShareLink: uploader, downloader, and sharer.
   * 
   * SystemFileUploaderAndViewer: viewer and uploader.
   * 
   * SystemFileUploaderWithShareLink: uploader and sharer.
   * 
   * SystemFileViewer: viewer.
   * 
   * This parameter is required.
   * 
   * @example
   * SystemFileDownloader
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

