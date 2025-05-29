// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5b504f84b69b9a73d3a21a2cff05e190
   */
  deviceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a64edd96296880f55aa61987b
   */
  nonce?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1748413148546
   */
  requestTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5/Smm8gnDSgZY2Blftq9eGYpVnpYCztoLJaJfhlH7id0lNlQxydRLtjUkGPr1qdbQq+oUn6Y1h0KJUdk0rf4am3MzdNr/Uhc47c8bbXnV8SlIC0agGo5skEQZNObzUD+sFxt8uN35/FYf7YRC8R61xY7+NPN2NLJrA/DPhewtVRRgAbb8RjergTcIG6oN1XTzLyC+76Az/3o2dPCxTfMXG3AFQc=
   */
  signature?: string;
  /**
   * @example
   * sk-4asv136677d2411b876e536bc8xxxxx
   */
  tokenKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  tokenType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'deviceName',
      nonce: 'nonce',
      productKey: 'productKey',
      requestTime: 'requestTime',
      signature: 'signature',
      tokenKey: 'tokenKey',
      tokenType: 'tokenType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      nonce: 'string',
      productKey: 'string',
      requestTime: 'string',
      signature: 'string',
      tokenKey: 'string',
      tokenType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

