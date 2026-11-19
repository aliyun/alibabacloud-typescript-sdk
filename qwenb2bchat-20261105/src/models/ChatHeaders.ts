// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The response media types accepted by the client.
   * 
   * @example
   * application/json
   */
  accept?: string;
  /**
   * @remarks
   * The compatible SSE selector header.
   * 
   * @example
   * enable
   */
  xDashScopeSSE?: string;
  /**
   * @remarks
   * The AccessKey ID for the business gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * example-gateway-access
   */
  xGWAccess?: string;
  /**
   * @remarks
   * The random string used for each call.
   * 
   * This parameter is required.
   * 
   * @example
   * c093adf9-287a-4684-982a-1aea5a248c2e
   */
  xGWNonce?: string;
  /**
   * @remarks
   * The field naming protocol. Set to aliyun-roa to use lower camel case fields, or omit to use the legacy protocol. This header does not participate in HMAC signing.
   * 
   * @example
   * aliyun-roa
   */
  xGWProtocol?: string;
  /**
   * @remarks
   * The lowercase hexadecimal HMAC-SHA256 signature calculated based on the actual request bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 0000000000000000000000000000000000000000000000000000000000000000
   */
  xGWSignature?: string;
  /**
   * @remarks
   * The current Unix millisecond timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1794787200000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * The business request ID, which must be exactly the same as communication.requestId.
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

