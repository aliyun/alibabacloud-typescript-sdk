// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenServiceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 接入时领取的业务 Access Key ID，用于识别调用方。阿里云调用凭证按 SDK 的要求单独配置。
   * 
   * This parameter is required.
   * 
   * @example
   * example-ak-87019a070b49c9fc
   */
  xGWAccess?: string;
  /**
   * @remarks
   * 每次发送时重新生成的随机串，例如 UUID。重试时也要重新生成 nonce、时间戳和签名。
   * 
   * This parameter is required.
   * 
   * @example
   * b46a9f08-fe98-4dd3-8885-405c4d032eff
   */
  xGWNonce?: string;
  /**
   * @remarks
   * 使用接入时领取的业务签名密钥（SK）对六段内容计算 HMAC-SHA256。依次为 HTTP 方法（大写）、请求路径、规范化查询串、实际发送正文的 SHA-256 小写十六进制、X-GW-Timestamp、X-GW-Nonce。以换行连接，末尾不加换行；无查询参数时第三段保留为空。查询串按 & 拆分并去除空项，按原始参数项字典序排序后以 & 拼接，不解码。签名传 64 个小写十六进制字符。正文用 UTF-8 序列化一次，用同一份字节签名和发送，SK 仅用于本地计算。
   * 
   * This parameter is required.
   * 
   * @example
   * fe3241f17796f523d9df27138f9a22abaead6cc9d1b82bae4b45eedc0e1858d7
   */
  xGWSignature?: string;
  /**
   * @remarks
   * 发送请求时的 Unix 毫秒时间戳，使用十进制字符串。签名和请求头使用同一个值。
   * 
   * This parameter is required.
   * 
   * @example
   * 1794996000000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * 每次业务调用生成一个新的请求 ID，用于关联请求和响应。允许 1 至 128 个字母、数字或 . _ : - 字符。
   * 
   * This parameter is required.
   * 
   * @example
   * med-req-001
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

