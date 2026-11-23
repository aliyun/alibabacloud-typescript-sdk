// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceResponseBodyError extends $dara.Model {
  /**
   * @remarks
   * 错误码列表见接口说明。请求校验、鉴权、授权、配额及开通处理错误都使用此位置。
   * 
   * This parameter is required.
   * 
   * @example
   * INVALID_REQUEST
   */
  code?: string;
  /**
   * @remarks
   * 对应错误的可读说明，不应依赖固定文案判断。开通处理错误可能返回 service activation failed。
   * 
   * This parameter is required.
   * 
   * @example
   * invalid request
   */
  message?: string;
  /**
   * @remarks
   * 用于排查错误；通常对应 X-Request-Id。客户关联号缺失或非法时可返回服务端诊断号，不是订单号。
   * 
   * This parameter is required.
   * 
   * @example
   * open-service-001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 网关拒绝或处理失败时返回。成功响应没有此对象；平台在抵达业务网关前产生的错误遵循 OpenAPI 公共错误结构。
   */
  error?: OpenServiceResponseBodyError;
  /**
   * @remarks
   * OPENING 或 ACTIVE 时返回的订单号；其他状态省略，无默认值。
   * 
   * @example
   * order-example-001
   */
  orderId?: string;
  /**
   * @remarks
   * ACTIVE 时返回的 SP 实例 ID；其他状态省略，无默认值。
   * 
   * @example
   * sp-example-001
   */
  spInstanceId?: string;
  /**
   * @remarks
   * 正常响应必填。TEST_OK：接口验证通过，未发起实际开通；OPENING：已取得订单号，开通仍在处理中；ACTIVE：服务已开通，并返回订单号和实例 ID；ORDER_UNKNOWN：本次开通结果暂不能确认，不表示必定失败；REJECTED：本次因可用额度不足明确拒绝且未返回订单。HTTP 200 不等于已开通。
   * 
   * @example
   * TEST_OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      orderId: 'orderId',
      spInstanceId: 'spInstanceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: OpenServiceResponseBodyError,
      orderId: 'string',
      spInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.error && typeof (this.error as any).validate === 'function') {
      (this.error as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

