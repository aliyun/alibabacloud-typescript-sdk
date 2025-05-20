// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IDPermission } from "./Idpermission";


export class BaseDriveResponse extends $dara.Model {
  actionList?: string[];
  category?: string;
  createdAt?: string;
  /**
   * @example
   * ccp
   */
  creator?: string;
  deltaEnabled?: boolean;
  /**
   * @example
   * ccp team drive
   */
  description?: string;
  /**
   * @example
   * hz999
   */
  domainId?: string;
  /**
   * @example
   * 123
   */
  driveId?: string;
  /**
   * @example
   * ccpdrive
   */
  driveName?: string;
  /**
   * @example
   * normal
   */
  driveType?: string;
  encryptDataAccess?: boolean;
  encryptMode?: string;
  isHandover?: boolean;
  /**
   * @example
   * ccp
   */
  owner?: string;
  /**
   * @example
   * user
   */
  ownerType?: string;
  pathStatus?: string;
  permission?: { [key: string]: IDPermission };
  relativePath?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * 123
   */
  storeId?: string;
  /**
   * @example
   * 102400
   */
  totalSize?: number;
  updatedAt?: string;
  /**
   * @example
   * 1024
   */
  usedSize?: number;
  static names(): { [key: string]: string } {
    return {
      actionList: 'action_list',
      category: 'category',
      createdAt: 'created_at',
      creator: 'creator',
      deltaEnabled: 'delta_enabled',
      description: 'description',
      domainId: 'domain_id',
      driveId: 'drive_id',
      driveName: 'drive_name',
      driveType: 'drive_type',
      encryptDataAccess: 'encrypt_data_access',
      encryptMode: 'encrypt_mode',
      isHandover: 'is_handover',
      owner: 'owner',
      ownerType: 'owner_type',
      pathStatus: 'path_status',
      permission: 'permission',
      relativePath: 'relative_path',
      status: 'status',
      storeId: 'store_id',
      totalSize: 'total_size',
      updatedAt: 'updated_at',
      usedSize: 'used_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      createdAt: 'string',
      creator: 'string',
      deltaEnabled: 'boolean',
      description: 'string',
      domainId: 'string',
      driveId: 'string',
      driveName: 'string',
      driveType: 'string',
      encryptDataAccess: 'boolean',
      encryptMode: 'string',
      isHandover: 'boolean',
      owner: 'string',
      ownerType: 'string',
      pathStatus: 'string',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      relativePath: 'string',
      status: 'string',
      storeId: 'string',
      totalSize: 'number',
      updatedAt: 'string',
      usedSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionList)) {
      $dara.Model.validateArray(this.actionList);
    }
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

