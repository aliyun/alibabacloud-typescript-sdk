// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * 关联本次开通申请的订单 ID，存在时返回。
   * 
   * @example
   * 2000000000000001
   */
  orderId?: string;
  /**
   * @remarks
   * 服务已开通时返回的实例标识。
   * 
   * @example
   * 1234567890123456
   */
  spInstanceId?: string;
  /**
   * @remarks
   * TEST_OK 表示仅验证调用成功。OPENING 表示开通处理中。ACTIVE 表示已开通。ORDER_UNKNOWN 表示暂时无法确认开通结果。REJECTED 表示开通请求未获通过。
   * 
   * This parameter is required.
   * 
   * @example
   * TEST_OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'orderId',
      spInstanceId: 'spInstanceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      spInstanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

