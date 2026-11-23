// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 必填的业务网关 AK，由服务接入方签发，用于识别租户和凭据；与阿里云 API 鉴权凭据用途不同，不发送业务网关 SK。
   * 
   * This parameter is required.
   * 
   * @example
   * example-gateway-access
   */
  xGWAccess?: string;
  /**
   * @remarks
   * 必填的一次性随机串，原值参与业务网关签名；每次请求和重试重新生成，不能重放原签名。
   * 
   * This parameter is required.
   * 
   * @example
   * c093adf9-287a-4684-982a-1aea5a248c2e
   */
  xGWNonce?: string;
  /**
   * @remarks
   * 必填的业务网关 HMAC-SHA256 签名，64 位小写十六进制。签名原文为方法、路径、空查询串、实际请求体字节的 SHA-256 小写摘要、时间戳、nonce 六段，以换行符连接。签名后不得改变请求体字节；阿里云 API 签名另行生成。
   * 
   * This parameter is required.
   * 
   * @example
   * 0000000000000000000000000000000000000000000000000000000000000000
   */
  xGWSignature?: string;
  /**
   * @remarks
   * 必填的当前 Unix 毫秒时间戳，用数字字符串表示，原值参与业务网关签名；重试时更新并重新签名。
   * 
   * This parameter is required.
   * 
   * @example
   * 1794787200000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * 必填的客户请求关联号，恰好一个，匹配 [A-Za-z0-9._:-]{1,128}；不能使用 gw-ingress- 保留前缀。仅用于关联本次调用，不是订单号或幂等令牌。
   * 
   * This parameter is required.
   * 
   * @example
   * req-example-001
   */
  xRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xGWAccess: 'X-GW-Access',
      xGWNonce: 'X-GW-Nonce',
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

