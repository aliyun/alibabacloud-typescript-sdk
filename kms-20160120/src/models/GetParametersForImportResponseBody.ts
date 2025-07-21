// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParametersForImportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used to import key material.
   * 
   * The token is valid for 24 hours. The value of this parameter is required when you call the [ImportKeyMaterial](https://help.aliyun.com/document_detail/68622.html) operation.
   * 
   * @example
   * Base64String
   */
  importToken?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * The value of this parameter is required when you call the [ImportKeyMaterial](https://help.aliyun.com/document_detail/68622.html) operation.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The public key that is used to encrypt key material.
   * 
   * The public key is Base64-encoded.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlls4uIBxD0GG84C+lGBO6Dhpf1J3XimC6cPmPNaKKJMOzoX4tD+C+r7aZv8lZ3vnPfxuxvy/YwG+whUxTEEFUdqJTOIzhPfYucupqKM92crVHIuG+xtMVeHKjyTr+UrtKCsQikqHT+19yDRN/RMoo2HUx0gmEnRyXd8t3JyUXun9FdoxKA08GrsV7nodb9ZsoBLhnev7tTLcXvLyKW6XG1ZQCQm6dPnbnwLeDXR7uK0Lqn9PM28mBIdaiQUQxj2XbM1CoJA+JiyVX3Ptdb+4rqukb4Rb05B80Bs9xV/cf7FIku08l7xGhrGiQFq+DFXwQWtwihXHZxz3LhldU+4ZPwID****
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8cdf51fd-bcd6-d79a-0ef4-e52c9b5466dc
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the token expires.
   * 
   * @example
   * 2018-01-25T00:01:02Z
   */
  tokenExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      importToken: 'ImportToken',
      keyId: 'KeyId',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
      tokenExpireTime: 'TokenExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importToken: 'string',
      keyId: 'string',
      publicKey: 'string',
      requestId: 'string',
      tokenExpireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

