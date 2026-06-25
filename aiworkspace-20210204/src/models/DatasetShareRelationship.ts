// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetShareRelationship extends $dara.Model {
  /**
   * @remarks
   * The allowed permissions for the shared dataset. When a user accesses the shared dataset, their permissions are limited to this list. The default value is \\`["RO"]\\`.
   * 
   * - RO: Read-only permission. The recipient can only read the dataset.
   * 
   * - RW: Read and write permission. The recipient can read and modify the dataset.
   */
  allowedMountAccessLevels?: string[];
  /**
   * @remarks
   * The expiration time. The time is in ISO 8601 format.
   * 
   * > If you do not specify this parameter, the sharing relationship never expires.
   * 
   * @example
   * 2026-08-27T12:23:58Z
   */
  expiresAt?: string;
  /**
   * @remarks
   * Additional configurations for the sharing relationship. This parameter is a JSON string.
   * 
   * - AllowExportModel: Specifies whether to allow the export of trained models.
   * 
   * - AllowAccessDLCWebTerminal: Specifies whether to allow users to log on to the container in a DLC task.
   * 
   * - AllowAccessDLCFullLog: Specifies whether to allow access to the full task logs.
   * 
   * @example
   * {"AllowExportModel":false,"AllowAccessDLCWebTerminal":false,"AllowAccessDLCFullLog":false}
   */
  extra?: string;
  /**
   * @remarks
   * Specifies whether to enable security protection for the shared dataset.
   * 
   * @example
   * true
   */
  isSecureMode?: boolean;
  /**
   * @remarks
   * The time when the dataset was shared. The time is in ISO 8601 format.
   * 
   * @example
   * 2025-08-27T12:23:58Z
   */
  sharedAt?: string;
  /**
   * @remarks
   * The ID of the tenant that owns the source dataset. The user who shares the dataset must be a workspace administrator or the root account.
   * 
   * @example
   * 148***************115
   */
  sourceTenantId?: string;
  /**
   * @remarks
   * The ID of the workspace that contains the source dataset.
   * 
   * @example
   * 33**19
   */
  sourceWorkspaceId?: string;
  /**
   * @remarks
   * The status of the sharing relationship.
   * 
   * - ACTIVE: The sharing relationship is active. Complete dataset information is displayed only in this state.
   * 
   * - EXPIRED: The sharing relationship has expired.
   * 
   * - REVOKED: The sharing relationship was revoked by the sharer.
   * 
   * - INVALID: The sharing relationship is invalid. This can happen if the source dataset is deleted.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the target tenant. This must be a root account ID.
   * 
   * > This parameter is required when you set a sharing relationship.
   * 
   * @example
   * 153***************249
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target workspace. This ID must be different from the source workspace ID.
   * 
   * > This parameter is required when you set a sharing relationship.
   * 
   * @example
   * 42**2
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      allowedMountAccessLevels: 'AllowedMountAccessLevels',
      expiresAt: 'ExpiresAt',
      extra: 'Extra',
      isSecureMode: 'IsSecureMode',
      sharedAt: 'SharedAt',
      sourceTenantId: 'SourceTenantId',
      sourceWorkspaceId: 'SourceWorkspaceId',
      status: 'Status',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedMountAccessLevels: { 'type': 'array', 'itemType': 'string' },
      expiresAt: 'string',
      extra: 'string',
      isSecureMode: 'boolean',
      sharedAt: 'string',
      sourceTenantId: 'string',
      sourceWorkspaceId: 'string',
      status: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedMountAccessLevels)) {
      $dara.Model.validateArray(this.allowedMountAccessLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

