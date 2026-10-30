// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsUserRequest extends $dara.Model {
  /**
   * @remarks
   * The PolarDB-X instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The name of the identity.
   * 
   * This parameter is required.
   * 
   * @example
   * agent-runtime
   */
  identityName?: string;
  /**
   * @remarks
   * POSIX GID
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  posixGid?: number;
  /**
   * @remarks
   * POSIX UID
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  posixUid?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The role of the identity.
   * 
   * This parameter is required.
   * 
   * @example
   * MEMBER
   */
  role?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * tenant-001
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      identityName: 'IdentityName',
      posixGid: 'PosixGid',
      posixUid: 'PosixUid',
      regionId: 'RegionId',
      role: 'Role',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      identityName: 'string',
      posixGid: 'number',
      posixUid: 'number',
      regionId: 'string',
      role: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

