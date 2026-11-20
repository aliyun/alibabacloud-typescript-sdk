// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MedicalModelInferenceHeaders extends $dara.Model {
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
   * The random string for the current request.
   * 
   * This parameter is required.
   * 
   * @example
   * b46a9f08-fe98-4dd3-8885-405c4d032e02
   */
  xGWNonce?: string;
  /**
   * @remarks
   * The format of the request and response fields.
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
   * 234ad5ad03406bc34b605b3d59746563420d58cb4cdcd2979b677790551a7278
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

