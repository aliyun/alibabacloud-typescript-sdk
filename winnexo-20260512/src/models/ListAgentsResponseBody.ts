// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * 使用权限授权模式：SPECIFIED_USERS=指定用户 / ALL_USERS=所有用户；未设置时为 null
   * 
   * @example
   * string_value
   */
  authMode?: string;
  /**
   * @remarks
   * 数字员工显示名称
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * 启用/停用状态
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * 数字员工名称（唯一标识）
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      authMode: 'authMode',
      displayName: 'displayName',
      isActive: 'isActive',
      operatingObjectName: 'operatingObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMode: 'string',
      displayName: 'string',
      isActive: 'boolean',
      operatingObjectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
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
   * 租户全量数字员工列表（含停用，按名称字母序）
   */
  items?: ListAgentsResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': ListAgentsResponseBodyItems },
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

