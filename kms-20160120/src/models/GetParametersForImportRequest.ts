// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParametersForImportRequest extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  You can import key material only for CMKs whose Origin parameter is set to EXTERNAL.
   * 
   * This parameter is required.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The algorithm that is used to encrypt key material.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_PKCS1_V1_5
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The type of the public key that is used to encrypt key material.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

