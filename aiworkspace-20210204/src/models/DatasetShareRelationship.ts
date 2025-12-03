// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatasetShareRelationship extends $dara.Model {
  allowedMountAccessLevels?: string[];
  expiresAt?: string;
  extra?: string;
  isSecureMode?: boolean;
  sharedAt?: string;
  sourceTenantId?: string;
  sourceWorkspaceId?: string;
  status?: string;
  tenantId?: string;
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

