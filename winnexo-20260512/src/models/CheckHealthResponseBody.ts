// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHealthResponseBody extends $dara.Model {
  /**
   * @remarks
   * 认证来源: bearer / aliyun_gateway
   * 
   * @example
   * aliyun_gateway
   */
  authSource?: string;
  /**
   * @example
   * aliyun_main
   */
  callerType?: string;
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
   * 当前请求生效的数字员工名（运营对象）；未传且租户下无数字员工时为空
   * 
   * @example
   * string_value
   */
  digitalEmployeeName?: string;
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
   * 生效租户ID
   * 
   * @example
   * 21577
   */
  tenantId?: number;
  /**
   * @remarks
   * 平台用户ID
   * 
   * @example
   * 10001
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      authSource: 'authSource',
      callerType: 'callerType',
      code: 'code',
      digitalEmployeeName: 'digitalEmployeeName',
      message: 'message',
      requestId: 'requestId',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authSource: 'string',
      callerType: 'string',
      code: 'string',
      digitalEmployeeName: 'string',
      message: 'string',
      requestId: 'string',
      tenantId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

