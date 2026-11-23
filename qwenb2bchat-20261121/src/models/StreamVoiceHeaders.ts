// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamVoiceHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 握手必填的业务网关 AK，用于识别租户和凭据；与阿里云 API AK 用途不同。业务网关 SK 仅在客户端用于计算签名，不发送。
   * 
   * This parameter is required.
   * 
   * @example
   * example-gateway-access
   */
  xGWAccess?: string;
  /**
   * @remarks
   * 握手必填，一次性随机串，原值参与业务签名；每次重新连接重新生成，不能重放原握手签名。
   * 
   * This parameter is required.
   * 
   * @example
   * c093adf9-287a-4684-982a-1aea5a248c2e
   */
  xGWNonce?: string;
  /**
   * @remarks
   * 可选，当前公开小驼峰字段协议应传 aliyun-roa；省略时采用兼容旧协议，其字段命名不同。握手时选择后作用于本连接，不能在后续帧中切换。本头不参与 X-GW 签名。
   * 
   * @example
   * aliyun-roa
   */
  xGWProtocol?: string;
  /**
   * @remarks
   * 握手必填，64 位小写十六进制 HMAC-SHA256。签名原文为 GET、实际路径、规范化实际 query、空请求体的 SHA-256 小写摘要、时间戳和 nonce，以换行符连接。对原文 UTF-8 字节使用业务网关 SK 签名；阿里云 API 签名另行生成。
   * 
   * This parameter is required.
   * 
   * @example
   * 0000000000000000000000000000000000000000000000000000000000000000
   */
  xGWSignature?: string;
  /**
   * @remarks
   * 握手必填，当前 Unix 毫秒时间戳的数字字符串，原值参与业务签名；每次重新连接更新后重新签名。
   * 
   * This parameter is required.
   * 
   * @example
   * 1794787200000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * 可选连接级关联号。省略时生成服务端诊断号。显式提供时只允许一个 1–128 位的 [A-Za-z0-9._:-] 字符串，gw-ingress- 前缀保留给服务。格式非法或提供多个值时返回 HTTP 400。每轮业务请求号使用 run-task.communication.requestId。
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

