// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClientKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the application access point (AAP).
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  /**
   * @remarks
   * The ID of the client key.
   * 
   * @example
   * KAAP.66abf237-63f6-4625-b8cf-47e1086e****
   */
  clientKeyId?: string;
  /**
   * @remarks
   * The time when the client key was created.
   * 
   * @example
   * 2023-08-31T09:14:38Z
   */
  createTime?: string;
  /**
   * @remarks
   * The private key algorithm of the client key.
   * 
   * @example
   * RSA_2048
   */
  keyAlgorithm?: string;
  /**
   * @remarks
   * The provider of the client key.
   * 
   * Currently, only Key Management Service (KMS) is supported. The value is fixed as KMS_PROVIDED.
   * 
   * @example
   * KMS_PROVIDED
   */
  keyOrigin?: string;
  /**
   * @remarks
   * The end of the validity period of the client key.
   * 
   * @example
   * 2028-08-31T17:14:33Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The beginning of the validity period of the client key.
   * 
   * @example
   * 2023-08-31T17:14:33Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The content of the public key of the client key.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDcjCCAlqgAwIBAgIQT/sAVRxwYp54mrw****-----END CERTIFICATE-----
   */
  publicKeyData?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 63d849a6-045b-4a57-ad9f-c5f756cea9e9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      clientKeyId: 'ClientKeyId',
      createTime: 'CreateTime',
      keyAlgorithm: 'KeyAlgorithm',
      keyOrigin: 'KeyOrigin',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      publicKeyData: 'PublicKeyData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      clientKeyId: 'string',
      createTime: 'string',
      keyAlgorithm: 'string',
      keyOrigin: 'string',
      notAfter: 'string',
      notBefore: 'string',
      publicKeyData: 'string',
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

