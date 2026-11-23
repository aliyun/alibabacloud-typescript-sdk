// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * 可选。完整 JSON 可传 application/json，SSE 可传 text/event-stream。客户端必须在正文中以布尔值 params.responseStreaming 指定响应格式。
   * 
   * @example
   * application/json
   */
  accept?: string;
  /**
   * @remarks
   * 可选。enable 表示 SSE。每次请求须在正文中显式填写布尔参数 params.responseStreaming。本头不替代 X-GW-Protocol 或 X-GW 签名。
   * 
   * @example
   * enable
   */
  xDashScopeSSE?: string;
  /**
   * @remarks
   * 必填，服务方发放的业务网关 AK，用于识别租户和业务凭据，不是用于 POP 鉴权的阿里云 AK。每次只传一个非空值；业务 SK 只在客户端用于计算签名，不随请求发送。
   * 
   * This parameter is required.
   * 
   * @example
   * example-gateway-access
   */
  xGWAccess?: string;
  /**
   * @remarks
   * 必填，每次尝试唯一且非空的随机串，例如 UUID；不可重放旧签名。重试重新生成 nonce、时间戳及签名。
   * 
   * This parameter is required.
   * 
   * @example
   * c093adf9-287a-4684-982a-1aea5a248c2e
   */
  xGWNonce?: string;
  /**
   * @remarks
   * 本文小驼峰请求与响应必须显式传 aliyun-roa，且只传一次。省略选择旧协议，不能直接照搬小驼峰正文。此头不参与业务 HMAC，不代替 POP 鉴权或 X-GW-* 业务签名。
   * 
   * @example
   * aliyun-roa
   */
  xGWProtocol?: string;
  /**
   * @remarks
   * 必填，使用业务网关 SK 计算的 64 位小写十六进制 HMAC-SHA256。六段按 LF 连接且无末尾换行：METHOD、PATH、CANONICAL_QUERY、BODY_SHA256_HEX、TIMESTAMP、NONCE。原始 query 按 & 分项去空、字典序排序，不 decode/re-encode；正文按实际发送的 UTF-8 字节摘要。具体双签名示例见接口说明。
   * 
   * This parameter is required.
   * 
   * @example
   * 0000000000000000000000000000000000000000000000000000000000000000
   */
  xGWSignature?: string;
  /**
   * @remarks
   * 必填，当前 Unix 毫秒时间戳的数字字符串；有效时间窗按凭据配置。签名规范串与本头使用完全相同的字符串。每次重试重新生成时间戳、nonce 和签名。
   * 
   * This parameter is required.
   * 
   * @example
   * 1794787200000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * 必填，恰好一个，须与 communication.requestId 完全一致。格式 [A-Za-z0-9._:-]{1,128}，不得用保留前缀 gw-ingress-。例如 chat-20261118-001；这是业务关联号，不保证重复请求只执行一次。
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
      accept: 'Accept',
      xDashScopeSSE: 'X-DashScope-SSE',
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
      accept: 'string',
      xDashScopeSSE: 'string',
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

