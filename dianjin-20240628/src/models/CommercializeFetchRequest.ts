// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommercializeFetchRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  channelId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  data?: string;
  /**
   * @example
   * AES
   */
  encryptType?: string;
  env?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  productId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  secretKey?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sign?: string;
  /**
   * @example
   * RSA
   */
  signType?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'channelId',
      data: 'data',
      encryptType: 'encryptType',
      env: 'env',
      productId: 'productId',
      requestId: 'requestId',
      secretKey: 'secretKey',
      sign: 'sign',
      signType: 'signType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      data: 'string',
      encryptType: 'string',
      env: 'string',
      productId: 'string',
      requestId: 'string',
      secretKey: 'string',
      sign: 'string',
      signType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

