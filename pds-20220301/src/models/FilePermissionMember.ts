// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class FilePermissionMember extends $dara.Model {
  /**
   * @remarks
   * The list of permissions to grant. You can grant permissions by assigning roles to identities, or you can customize the permissions. To grant permissions by assigning roles to identities, specify role_id. role_id and action_list are mutually exclusive. If both parameters are specified, the value of role_id prevails. When you specify action_list, the system automatically generates a temporary role_id. You can use this role_id to revoke the permissions.
   */
  actionList?: string[];
  /**
   * @remarks
   * Specifies whether the users of subgroups can inherit the permissions. For example, a user named user1 belongs to the group1 group, and a user named user2 belongs to the group2 group. group2 is the subgroup of group1. If you set disinherit_sub_group to true, only user1 is granted the permissions. user2 is not granted the permissions.
   * 
   * @example
   * false
   */
  disinheritSubGroup?: boolean;
  /**
   * @remarks
   * The time when the permissions expire. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC. A value of 4775500800000 indicates that the permissions never expire.
   * 
   * @example
   * 1633598085642
   */
  expireTime?: number;
  /**
   * @remarks
   * The identity to which the permissions are granted, which is a user or a group.
   */
  identity?: Identity;
  /**
   * @remarks
   * The role ID. You can grant permissions by assigning roles to identities, or you can customize the permissions. To grant permissions by assigning roles to identities, specify role_id. role_id and action_list are mutually exclusive. If both parameters are specified, the value of role_id prevails.
   * 
   * Valid values:
   * 
   * SystemFileOwner: collaborator
   * 
   * SystemFileDownloader: downloader
   * 
   * SystemFileEditor: editor
   * 
   * SystemFileEditorWithoutDelete: editor without permissions to delete the file
   * 
   * SystemFileEditorWithoutShareLink: editor without permissions to share the file
   * 
   * SystemFileMetaViewer: viewer of lists
   * 
   * SystemFileUploader: uploader. SystemFileUploaderAndDownloader: uploader and downloader
   * 
   * SystemFileDownloaderWithShareLink: downloader and sharer
   * 
   * SystemFileUploaderAndDownloaderWithShareLink: uploader, downloader, and sharer
   * 
   * SystemFileUploaderAndViewer: viewer and uploader
   * 
   * SystemFileUploaderWithShareLink: uploader and sharer
   * 
   * SystemFileViewer: viewer
   * 
   * @example
   * SystemFileDownloader
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      disinheritSubGroup: 'disinherit_sub_group',
      expireTime: 'expire_time',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      identity: Identity,
      roleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.identity && typeof (this.identity as any).validate === 'function') {
      (this.identity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

