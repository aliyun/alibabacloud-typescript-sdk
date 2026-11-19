// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamVoiceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 业务网关 Access Key ID
   * 
   * This parameter is required.
   * 
   * @example
   * example-gateway-access
   */
  xGWAccess?: string;
  /**
   * @remarks
   * 每次调用使用的随机串
   * 
   * This parameter is required.
   * 
   * @example
   * c093adf9-287a-4684-982a-1aea5a248c2e
   */
  xGWNonce?: string;
  /**
   * @remarks
   * 小驼峰回源协议固定传 aliyun-roa，省略时为旧协议；不参与 HMAC 签名
   * 
   * @example
   * aliyun-roa
   */
  xGWProtocol?: string;
  /**
   * @remarks
   * 按实际请求字节计算的 HMAC-SHA256 小写十六进制签名
   * 
   * This parameter is required.
   * 
   * @example
   * 0000000000000000000000000000000000000000000000000000000000000000
   */
  xGWSignature?: string;
  /**
   * @remarks
   * 当前 Unix 毫秒时间戳
   * 
   * This parameter is required.
   * 
   * @example
   * 1794787200000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * 可选的 WebSocket 握手关联号，每轮业务 ID 使用 run-task 帧中的 communication.requestId
   * 
   * @example
   * ws-example-001
   */
  xRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xGWAccess: 'X-GW-Access',
      xGWNonce: 'X-GW-Nonce',
      xGWProtocol: 'X-GW-Protocol',
      xGWSignature: 'X-GW-Signature',
      xGWTimestamp: 'X-GW-Timestamp',
      xRequestId: 'X-Request-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xGWAccess: 'string',
      xGWNonce: 'string',
      xGWProtocol: 'string',
      xGWSignature: 'string',
      xGWTimestamp: 'string',
      xRequestId: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

