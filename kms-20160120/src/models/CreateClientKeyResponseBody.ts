// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClientKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * KAAP.66abf237-63f6-4625-b8cf-47e1086e****
   */
  clientKeyId?: string;
  /**
   * @remarks
   * The ID of the client key.
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * The beginning of the validity period of the client key.
   * 
   * @example
   * 2028-08-31T17:14:33Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The private key of the client key.
   * 
   * @example
   * 2023-08-31T17:14:33Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The algorithm that is used to encrypt the private key of the client key. Currently, only RSA_2048 is supported.
   * 
   * @example
   * MIIJqwIBAzCCCXcGCSqGSIb3DQEHAaCCCWgEgglkMIIJYDCCBBcGCSqGSIb3DQEHBqCCBAgwgg******
   */
  privateKeyData?: string;
  /**
   * @remarks
   * The beginning of the validity period of the client key.
   * 
   * Specify the time in the ISO 8601 standard. The time must be in UTC. The time must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * > 
   * 
   * *   If you do not configure NotBefore, the default value is the time when the client key was created.
   * *   If you configure NotBefore, you must configure NotAfter.
   * 
   * @example
   * 2312e45f-b2fa-4c34-ad94-3eca50932916
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
      keyAlgorithm: 'KeyAlgorithm',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      privateKeyData: 'PrivateKeyData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
      keyAlgorithm: 'string',
      notAfter: 'string',
      notBefore: 'string',
      privateKeyData: 'string',
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

