// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Identity } from "./Identity";


export class BaseFileUserPermissionResponse extends $dara.Model {
  canAccess?: boolean;
  createdAt?: number;
  creator?: string;
  disinheritSubGroup?: boolean;
  /**
   * @example
   * bj23
   */
  domainId?: string;
  driveId?: string;
  expireTime?: number;
  fileFullPath?: string;
  fileId?: string;
  identity?: Identity;
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      canAccess: 'can_access',
      createdAt: 'created_at',
      creator: 'creator',
      disinheritSubGroup: 'disinherit_sub_group',
      domainId: 'domain_id',
      driveId: 'drive_id',
      expireTime: 'expire_time',
      fileFullPath: 'file_full_path',
      fileId: 'file_id',
      identity: 'identity',
      roleId: 'role_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAccess: 'boolean',
      createdAt: 'number',
      creator: 'string',
      disinheritSubGroup: 'boolean',
      domainId: 'string',
      driveId: 'string',
      expireTime: 'number',
      fileFullPath: 'string',
      fileId: 'string',
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

