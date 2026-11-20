// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalAgentChatHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The business AccessKey ID.
   * 
   * This parameter is required.
   * 
   * @example
   * example-ak-87019a070b49c9fc
   */
  xGWAccess?: string;
  /**
   * @remarks
   * The random string for this request.
   * 
   * This parameter is required.
   * 
   * @example
   * b46a9f08-fe98-4dd3-8885-405c4d032e01
   */
  xGWNonce?: string;
  /**
   * @remarks
   * The format of request and response fields.
   * 
   * @example
   * aliyun-roa
   */
  xGWProtocol?: string;
  /**
   * @remarks
   * The business request signature.
   * 
   * This parameter is required.
   * 
   * @example
   * df9a3e428a1faa8fd4b0add7173e1a554cd76fb8044176407777bcbbc7b94ba4
   */
  xGWSignature?: string;
  /**
   * @remarks
   * The request timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1794996000000
   */
  xGWTimestamp?: string;
  /**
   * @remarks
   * The business request ID.
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

