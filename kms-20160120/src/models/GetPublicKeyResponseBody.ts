// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to the alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version of the CMK that is used to encrypt the plaintext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The public key returned in the PEM format.
   * 
   * @example
   * -----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs5Yu9AEgATN2/e3nUz1K\\nEy6ng8MSPutcse2/VECG/NUF9C6D4IsJ64ShzY3dcn34WYzTOe916eMJFxyrNrSw\\nHtc4UOR5AvaoRrfpgu2uq+i70/ZXrWL+pGb1hgZV8cWheIHMxwrR3IiQlM5qN7EF\\n9BdyWtyBfUGsp0Bn1VqlPc5G0x0a9xU2z9YtP994yDenNVIoIQ6Cov1lIEuwXAb2\\n7boC41ePXwD0JWt41sP+rgCmpjBx00puIG+IlnoReEgI1ZGYmK98GgA/XzmNjZiD\\nyvXJZAcM33Ue85+PkR5iHTtSEbi4QAoqpJabprUzz3Fin2j1dRrcacxGb7p31A9c\\nJQIDAQAB\\n-----END PUBLIC KEY-----\\n
   */
  publicKey?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      publicKey: 'PublicKey',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      publicKey: 'string',
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

