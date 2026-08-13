// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 角色说明（按请求 Accept-Language 国际化）
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * 角色标识码，用于 createUser/updateUser 的 roleCodes 参数
   * 
   * @example
   * string_value
   */
  roleCode?: string;
  /**
   * @remarks
   * 角色显示名称（按请求 Accept-Language 国际化）
   * 
   * @example
   * string_value
   */
  roleName?: string;
  /**
   * @remarks
   * 是否允许启用/停用操作（超级管理员和应用用户不可切换）
   * 
   * @example
   * true
   */
  toggleable?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      roleCode: 'roleCode',
      roleName: 'roleName',
      toggleable: 'toggleable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      roleCode: 'string',
      roleName: 'string',
      toggleable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * 系统内置角色列表（固定 7 个）
   */
  items?: ListRolesResponseBodyItems[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      items: 'items',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      items: { 'type': 'array', 'itemType': ListRolesResponseBodyItems },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

