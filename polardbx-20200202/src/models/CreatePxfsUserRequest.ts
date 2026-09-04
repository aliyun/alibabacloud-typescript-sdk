// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePxfsUserRequest extends $dara.Model {
  /**
   * @remarks
   * Agent文件服务关联的PolarDB-X实例ID。
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-xxxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Agent文件服务租户内的身份名称，不是阿里云账号UID。
   * 
   * This parameter is required.
   * 
   * @example
   * agent-runtime
   */
  identityName?: string;
  /**
   * @remarks
   * 客户端业务进程使用的POSIX GID。
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  posixGid?: number;
  /**
   * @remarks
   * 客户端业务进程使用的POSIX UID。
   * 
   * This parameter is required.
   * 
   * @example
   * 1000
   */
  posixUid?: number;
  /**
   * @remarks
   * Agent文件服务实例所属地域的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 租户身份角色，取值为ADMIN或MEMBER。
   * 
   * This parameter is required.
   * 
   * @example
   * MEMBER
   */
  role?: string;
  /**
   * @remarks
   * Agent文件服务的租户ID。
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

