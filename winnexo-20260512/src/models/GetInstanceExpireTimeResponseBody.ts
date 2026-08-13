// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceExpireTimeResponseBody extends $dara.Model {
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
   * 是否找到标准包实例
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * 实例过期时间（ISO格式）
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  instanceExpireTime?: string;
  /**
   * @remarks
   * 实例ID
   * 
   * @example
   * exampleInstanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * 实例状态
   * 
   * @example
   * string_value
   */
  instanceStatus?: string;
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
  /**
   * @remarks
   * 系统租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      found: 'found',
      instanceExpireTime: 'instanceExpireTime',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
      message: 'message',
      requestId: 'requestId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      found: 'boolean',
      instanceExpireTime: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      message: 'string',
      requestId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

