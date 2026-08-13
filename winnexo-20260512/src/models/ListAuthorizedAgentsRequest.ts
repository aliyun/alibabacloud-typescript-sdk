// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * 权限类型：USE=使用权限, MANAGE=管理权限，默认 USE
   * 
   * @example
   * USE
   */
  permission?: string;
  /**
   * @remarks
   * 目标用户 ID，管理员代查指定用户可用的数字员工时传入（需 APPLICATION_AGENT_VIEW 权限）；不传则查询调用方自身
   * 
   * @example
   * 1
   */
  targetUserId?: number;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      permission: 'permission',
      targetUserId: 'targetUserId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permission: 'string',
      targetUserId: 'number',
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

