// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetShareRelationship extends $dara.Model {
  allowedMountAccessLevels?: string[];
  /**
   * @example
   * 2026-08-27T12:23:58Z
   */
  expiresAt?: string;
  extra?: string;
  /**
   * @example
   * true
   */
  isSecureMode?: boolean;
  /**
   * @example
   * 2025-08-26T12:23:58Z
   */
  sharedAt?: string;
  /**
   * @example
   * 148***************115
   */
  sourceTenantId?: string;
  /**
   * @example
   * 33**19
   */
  sourceWorkspaceId?: string;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @example
   * 153***************249
   */
  tenantId?: string;
  /**
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

