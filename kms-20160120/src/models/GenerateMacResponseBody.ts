// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateMacResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm that is used to generate the message authentication code. Valid values vary based on the key specification:  
   * 
   * - HMAC_SM3
   * 
   * - HMAC_SHA_224
   * 
   * - HMAC_SHA_256
   * 
   * - HMAC_SHA_384
   * 
   * - HMAC_SHA_512
   * 
   * @example
   * HMAC_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The globally unique identifier of the customer master key (CMK).
   * 
   * > If the KeyId parameter in the request uses a CMK alias, the response returns the CMK identifier that corresponds to the alias.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * The Base64-encoded message authenticate code.
   * 
   * @example
   * vz1Snp+jGJbgydCFRWVWxAwIMdyfKCSp+jnMWQ==
   */
  mac?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 4c8ae23f-3a42-6791-a4ba-1faa77831c28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      keyId: 'KeyId',
      mac: 'Mac',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      keyId: 'string',
      mac: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

