// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AsymmetricDecryptRequest extends $tea.Model {
  /**
   * @remarks
   * The decryption algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_1
   */
  algorithm?: string;
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * > * The value is encoded in Base64.
   * > * You can call the [AsymmetricEncrypt](https://help.aliyun.com/document_detail/148131.html) operation to generate the ciphertext.
   * 
   * This parameter is required.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      ciphertextBlob: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK that is used to encrypt the plaintext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The Base64-encoded plaintext that is generated after decryption.
   * 
   * @example
   * SGVsbG8gd29ybGQ=
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricDecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptRequest extends $tea.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_1
   */
  algorithm?: string;
  dryRun?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * >  You can call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation to query the versions of a CMK. The ID of a version is specified by the KeyVersionId parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext that you want to encrypt. The plaintext must be Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29ybGQ=
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Base64-encoded ciphertext that was generated after encryption.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1Wbjwg==
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK that is used to encrypt the plaintext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignRequest extends $tea.Model {
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_PSS_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The signature algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiu****=
   */
  digest?: string;
  dryRun?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **AsymmetricSign**.
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponseBody extends $tea.Model {
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The digest that is generated for the original message by using a hash algorithm. The hash algorithm is specified by the Algorithm parameter.
   * 
   * > * The value is encoded in Base64.
   * > * For more information about how to calculate message digests, see the **Preprocess signature: compute a message digest** section of the [Generate and verify a signature by using an asymmetric CMK](https://help.aliyun.com/document_detail/148146.html) topic.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The calculated signature.
   * 
   * >  The value is encoded in Base64.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricSignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricSignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricSignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyRequest extends $tea.Model {
  /**
   * @remarks
   * The signature algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_PSS_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The digest that is generated for the original message by using a hash algorithm. The hash algorithm is specified by the **Algorithm** parameter.
   * 
   * >  The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=
   */
  digest?: string;
  dryRun?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  You can also set this parameter to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The signature value to be verified.
   * 
   * >  The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      digest: 'string',
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The version ID of the CMK that is used to encrypt the plaintext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 475f1620-b9d3-4d35-b5c6-3fbdd941423d
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the signature passed the verification.
   * 
   * @example
   * true
   */
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsymmetricVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsymmetricVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AsymmetricVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3da5b8cc-8107-40ac-a170-793cd181d7b7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelKeyDeletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptRequest extends $tea.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   RSAES_OAEP_SHA_1
   * 
   * *   RSAES_OAEP_SHA_256
   * 
   * *   SM2PKE
   * 
   * > The SM2PKE encryption algorithm is supported only in regions in mainland China. In these regions, managed hardware security modules (HSMs) are used. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The data that you want to decrypt.
   * 
   * The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      ciphertextBlob: 'CiphertextBlob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      ciphertextBlob: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The plaintext after data is decrypted.
   * 
   * The value is encoded in Base64.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeyDecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePrivateKeyDecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePrivateKeyDecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignRequest extends $tea.Model {
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   RSA_PKCS1_SHA_256
   * 
   * *   RSA_PSS_SHA_256
   * 
   * *   ECDSA_SHA_256
   * 
   * *   SM2DSA
   * 
   * >* The SM2DSA signature algorithm is supported only in regions where managed hardware security modules (HSMs) are used in mainland China. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECDSA_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The data to be signed.
   * 
   * The value is encoded in Base64. For example, if the hexadecimal data that you want to sign is `[0x31, 0x32, 0x33, 0x34]`, the Base64-encoded data is `MTIzNA==`.
   * 
   * If the MessageType parameter is set to RAW, the size of the data must be less than or equal to 4 KB.
   * 
   * If the size of the data is greater than 4 KB, you can set the MessageType parameter to DIGEST and set the Message parameter to the digest of the data. The digest is also called hash value. You can compute the digest of the data on an on-premises machine. Certificates Manager uses the digest that you compute in your own certificate application system. The message digest algorithm that you use must match the specified signature algorithm. Comply with the following mapping between signature algorithms and message digest algorithms:
   * 
   * *   If the signature algorithm is RSA_PKCS1_SHA_256, RSA_PSS_SHA_256, or ECDSA_SHA_256, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM2DSA, the message digest algorithm must be SM3.
   * 
   * >  If the key type of the certificate is EC_SM2 and the MessageType parameter is set to DIGEST, the value of the Message parameter is `e` that is described in GB/T 32918.2-2016 6.1.
   * 
   * This parameter is required.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
   */
  message?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   RAW: the raw data. This is the default value.
   * *   DIGEST: the message digest (hash value) of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      message: 'Message',
      messageType: 'MessageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      message: 'string',
      messageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  /**
   * @remarks
   * The signature value.
   * 
   * The value is encoded in Base64.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePrivateKeySignResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePrivateKeySignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePrivateKeySignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptRequest extends $tea.Model {
  /**
   * @remarks
   * The encryption algorithm. Valid values:
   * 
   * *   RSAES_OAEP_SHA_1
   * 
   * *   RSAES_OAEP_SHA_256
   * 
   * *   SM2PKE
   * 
   * >The SM2PKE encryption algorithm is supported only in regions in mainland China. In these regions, managed hardware security modules (HSMs) are used. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The data that you want to encrypt.
   * 
   * The value is encoded in Base64. For example, if the hexadecimal data that you want to encrypt is `[0x31, 0x32, 0x33, 0x34]`, the Base64-encoded data is `MTIzNA==`.
   * 
   * The size of data that can be encrypted varies based on the encryption algorithm that you use:
   * 
   * *   RSAES_OAEP_SHA_1: 214 bytes
   * *   RSAES_OAEP_SHA_256: 190 bytes
   * *   SM2PKE: 6,047 bytes
   * 
   * If the size of data that you want to encrypt exceeds the preceding limits, you can call the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html) operation to generate a data key to encrypt the data. Then, call the CertificatePublicKeyEncrypt operation to encrypt the data key.
   * 
   * This parameter is required.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ciphertext.
   * 
   * The value is encoded in Base64.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      ciphertextBlob: 'CiphertextBlob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      ciphertextBlob: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePublicKeyEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePublicKeyEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyRequest extends $tea.Model {
  /**
   * @remarks
   * The signature algorithm. Valid values:
   * 
   * *   RSA_PKCS1_SHA_256
   * 
   * *   RSA_PSS_SHA_256
   * 
   * *   ECDSA_SHA_256
   * 
   * *   SM2DSA
   * 
   * > The SM2DSA signature algorithm is supported only in regions where managed hardware security modules (HSMs) are used in the Chinese mainland. For more information, see [Managed HSM overview](https://help.aliyun.com/document_detail/125803.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ECDSA_SHA_256
   */
  algorithm?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The raw data that is signed.
   * 
   * The value is encoded in Base64. For example, if the raw data in the hexadecimal format is `[0x31, 0x32, 0x33, 0x34]`, set this parameter to the Base64-encoded value `MTIzNA==`.
   * 
   * If the MessageType parameter is set to RAW, the size of the data must be less than or equal to 4 KB.
   * 
   * If the size of the data is greater than 4 KB, you can set the MessageType parameter to DIGEST and set the Message parameter to the digest of the data. The digest is also called hash value. You can compute the digest of the data on an on-premises device. Certificates Manager uses the digest that you compute in your own certificate application system. The message digest algorithm that you use must match the specified signature algorithm. Comply with the following mapping between signature algorithms and message digest algorithms:
   * 
   * *   If the signature algorithm is RSA_PKCS1_SHA_256, RSA_PSS_SHA_256, or ECDSA_SHA_256, the message digest algorithm must be SHA-256.
   * *   If the signature algorithm is SM2DSA, the message digest algorithm must be SM3.
   * 
   * >  If the key type of the certificate is EC_SM2 and the MessageType parameter is set to DIGEST, the value of the Message parameter is `e` that is described in GB/T 32918.2-2016 6.1.
   * 
   * This parameter is required.
   * 
   * @example
   * VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=
   */
  message?: string;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   RAW: the raw data. This is the default value.
   * *   DIGEST: the message digest (hash value) of the raw data.
   * 
   * This parameter is required.
   * 
   * @example
   * RAW
   */
  messageType?: string;
  /**
   * @remarks
   * The signature value.
   * 
   * The value is encoded in Base64.
   * 
   * This parameter is required.
   * 
   * @example
   * ZOyIygCyaOW6Gj****MlNKiuyjfzw=
   */
  signatureValue?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      certificateId: 'CertificateId',
      message: 'Message',
      messageType: 'MessageType',
      signatureValue: 'SignatureValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      certificateId: 'string',
      message: 'string',
      messageType: 'string',
      signatureValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5979d897-d69f-4fc9-87dd-f3bb73c40b80
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   true: The signature is valid.
   * *   false: The signature is invalid.
   * 
   * @example
   * true
   */
  signatureValid?: boolean;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      requestId: 'RequestId',
      signatureValid: 'SignatureValid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      requestId: 'string',
      signatureValid: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertificatePublicKeyVerifyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CertificatePublicKeyVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CertificatePublicKeyVerifyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The provider of the KMS instance. Set the value to Aliyun.
   * 
   * This parameter is required.
   * 
   * @example
   * Aliyun
   */
  KMProvider?: string;
  /**
   * @remarks
   * The ID of the KMS instance that you want to enable.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-phzz64f722a1buamw0****
   */
  kmsInstanceId?: string;
  /**
   * @remarks
   * The vSwitch in the two zones. The vSwitch must have at least one available IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1i512amda6d10a0****
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that is associated with the KMS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp19z7cwmltad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The two zones for the KMS instance. Dual-zone deployment improves service availability and disaster recovery capabilities.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-k,cn-hangzhou-j
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      KMProvider: 'KMProvider',
      kmsInstanceId: 'KmsInstanceId',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KMProvider: 'string',
      kmsInstanceId: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d3eca5c8-a856-4347-8eb6-e1898c3fda2e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectKmsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConnectKmsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ConnectKmsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The alias of the CMK.
   * 
   * The alias must be 1 to 255 characters in length and must contain the prefix `alias/`. The alias cannot be prefixed with the reserved word `alias/acs`.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1d2baaf3-d357-46c2-832e-13560c2bd9cd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointRequest extends $tea.Model {
  /**
   * @remarks
   * The authentication method. Currently, only ClientKey is supported.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description of the AAP.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy.
   * 
   * > You can bind up to three permission policies to each AAP.
   * 
   * This parameter is required.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the AAP.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:applicationaccesspoint/aap_test
   */
  arn?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description of the AAP.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the private key of the certificate can be exported for use. Valid values:
   * 
   * *   true: The private key of the certificate can be exported for use. This is the default value.
   * *   false: The private key of the certificate cannot be exported for use. We recommend that you set this parameter to false to protect keys with a higher security level.
   * 
   * @example
   * true
   */
  exportablePrivateKey?: boolean;
  /**
   * @remarks
   * The type of the key. Valid values:
   * 
   * *   RSA_2048
   * *   EC_P256
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  keySpec?: string;
  /**
   * @remarks
   * The certificate subject, which is the owner of the certificate.
   * 
   * Specify the value in the distinguished name (DN) format, as defined in [RFC 2253](https://tools.ietf.org/html/rfc2253?spm=a2c4g.11186623.2.13.265f1a1cGFCn3Q). A DN is a sequence of relative distinguished names (RDNs).
   * 
   * RDNs are key-value pairs in the format of `attribute1=value1,attribute2=value2`. Separate multiple RDNs with commas (,).
   * 
   * The Subject parameter consists of the following fields:
   * 
   * *   CN: required. The name of the certificate subject.
   * *   C: required. The two-character country or region code in the [ISO 3166-1](https://www.iso.org/obp/ui/#search/code/) standard. For example, CN indicates China.
   * *   O: required. The legal name of the enterprise, company, organization, or institution.
   * *   OU: required. The name of the department.
   * *   ST: optional. The name of the province, municipality, autonomous region, or special administrative region.
   * *   L: optional. The name of the city.
   * 
   * This parameter is required.
   * 
   * @example
   * CN=userName,OU=kms,O=aliyun,C=CN
   */
  subject?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   * 
   * @example
   * ["test1.example.com","test2.example.com"]
   */
  subjectAlternativeNames?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      exportablePrivateKey: 'ExportablePrivateKey',
      keySpec: 'KeySpec',
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportablePrivateKey: 'boolean',
      keySpec: 'string',
      subject: 'string',
      subjectAlternativeNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether the private key of the certificate can be exported for use. Valid values:
   * 
   * *   true: The private key of the certificate can be exported for use. This is the default value.
   * *   false: The private key of the certificate cannot be exported for use. We recommend that you set this parameter to false to protect keys with a higher security level.
   * 
   * @example
   * true
   */
  exportablePrivateKey?: boolean;
  /**
   * @remarks
   * The type of the key. Valid values:
   * 
   * *   RSA_2048
   * *   EC_P256
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  keySpec?: string;
  /**
   * @remarks
   * The certificate subject, which is the owner of the certificate.
   * 
   * Specify the value in the distinguished name (DN) format, as defined in [RFC 2253](https://tools.ietf.org/html/rfc2253?spm=a2c4g.11186623.2.13.265f1a1cGFCn3Q). A DN is a sequence of relative distinguished names (RDNs).
   * 
   * RDNs are key-value pairs in the format of `attribute1=value1,attribute2=value2`. Separate multiple RDNs with commas (,).
   * 
   * The Subject parameter consists of the following fields:
   * 
   * *   CN: required. The name of the certificate subject.
   * *   C: required. The two-character country or region code in the [ISO 3166-1](https://www.iso.org/obp/ui/#search/code/) standard. For example, CN indicates China.
   * *   O: required. The legal name of the enterprise, company, organization, or institution.
   * *   OU: required. The name of the department.
   * *   ST: optional. The name of the province, municipality, autonomous region, or special administrative region.
   * *   L: optional. The name of the city.
   * 
   * This parameter is required.
   * 
   * @example
   * CN=userName,OU=kms,O=aliyun,C=CN
   */
  subject?: string;
  /**
   * @remarks
   * The subject alternative names.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   * 
   * @example
   * ["test1.example.com","test2.example.com"]
   */
  subjectAlternativeNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      exportablePrivateKey: 'ExportablePrivateKey',
      keySpec: 'KeySpec',
      subject: 'Subject',
      subjectAlternativeNamesShrink: 'SubjectAlternativeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportablePrivateKey: 'boolean',
      keySpec: 'string',
      subject: 'string',
      subjectAlternativeNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the certificate.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:certificate/98e85c94-52d0-40c9-b3b2-afda52f4****
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the certificate. It is the globally unique identifier (GUID) of the certificate in Certificates Manager.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The CSR in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----\\nMIIDADCCAegCAQAwgboxCzAJBgNVBAYTAkNOMREwDwYDVQQIEwhaaGVqaWFuZzER\\n****\\nmkj4rg==\\n-----END CERTIFICATE REQUEST-----\\n
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 15a735a1-8fe6-45cc-a64c-3c4ff839334e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      csr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **CreateClientKey**.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  /**
   * @remarks
   * The encryption password of the client key.
   * 
   * The password must be 8 to 64 characters in length and must contain at least two of the following types: digits, letters, and special characters. Special characters include `~ ! @ # $ % ^ & * ? _ -`.
   * 
   * @example
   * 2028-08-31T17:14:33Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The end of the validity period of the client key.
   * 
   * Specify the time in the ISO 8601 standard. The time must be in UTC. The time must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * > 
   * 
   * *   If you do not configure NotAfter, the default value is the time when the client key was created plus five years.
   * *   If you configure NotAfter, you must configure NotBefore.
   * 
   * @example
   * 2023-08-31T17:14:33Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * This parameter is required.
   * 
   * @example
   * bcfefe15-46f0****
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
      notAfter: 'string',
      notBefore: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * > You must specify this parameter if you need to create a key for a KMS instance. If you need to create a default key of the CMK type, you do not need to specify this parameter.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * The description can be 0 to 8,192 characters in length.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic key rotation. Valid values:
   * 
   * - true
   * - false (default)
   * 
   * This parameter is valid only when the key belongs to an instance type that supports automatic rotation. For more information, see [Key rotation](https://help.aliyun.com/document_detail/2358146.html).
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The key specification. The valid values vary based on the KMS instance type. For more information, see [Overview](https://help.aliyun.com/document_detail/480159.html).
   * 
   * > If you do not specify a value for this parameter, the default key specification is Aliyun_AES_256.
   * 
   * @example
   * Aliyun_AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The usage of the key. Valid values:
   * 
   * - ENCRYPT/DECRYPT
   * - SIGN/VERIFY
   * 
   * If the key supports signing and verification, the default value is SIGN/VERIFY. If the key does not support signing and verification, the default value is ENCRYPT/DECRYPT.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The key material origin. Valid values:
   * 
   * - Aliyun_KMS (default): KMS generates key material.
   * - EXTERNAL: You import key material.
   * 
   * 
   * > - The value of this parameter is case-sensitive.
   * > - Default keys of the customer master key (CMK) type support Aliyun_KMS and EXTERNAL. Keys in instances of the software key management type support only Aliyun_KMS. Keys in instances of the hardware key management type support Aliyun_KMS and EXTERNAL.
   * > - If you set Origin to EXTERNAL, you must import key material. For more information, see [Import key material into a symmetric key](https://help.aliyun.com/document_detail/607841.html) or [Import key material into an asymmetric key](https://help.aliyun.com/document_detail/608827.html).
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  policy?: string;
  /**
   * @remarks
   * You do not need to specify this parameter. KMS sets a protection level for your key.
   * 
   * The protection level of the key. Valid values:
   * 
   * - SOFTWARE
   * - HSM
   * 
   * 
   * > - If DKMSInstanceId is specified, this parameter does not take effect. If your instance is an instance of the software key management type, set the value to SOFTWARE. If your instance is an instance of the hardware key management type, set the value to HSM.
   * > - If you do not specify DKMSInstanceId, we recommend that you do not specify this parameter. KMS sets a protection level for your key. If managed hardware security modules (HSMs) exist in the region of your KMS instance, set the value to HSM. If managed HSMs do not exist in the region of your KMS instance, set the value to SOFTWARE. For more information, see Managed HSM overview.
   * 
   * @example
   * SOFTWARE
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The period of automatic key rotation. Format: integer[unit]. Unit: d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s represent a seven-day interval.
   * 
   * - For a default key, set the value to 365 days.
   * - For a software-protected key, set a value that ranges from 7 to 365 days.
   * - A hardware-protected key does not support automatic rotation.
   * 
   * > If EnableAutomaticRotation is set to true, this parameter is required.
   * 
   * @example
   * 365d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The tag that is added to the key. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the [{"TagKey":"key1","TagValue":"value1"},{"TagKey":"key2","TagValue":"value2"},..] format.
   * 
   * Each tag key or tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
   * 
   * > The tag key cannot start with aliyun or acs:.
   * 
   * @example
   * [{"TagKey":"disk-encryption","TagValue":"true"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keySpec: 'KeySpec',
      keyUsage: 'KeyUsage',
      origin: 'Origin',
      policy: 'Policy',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      keySpec: 'string',
      keyUsage: 'string',
      origin: 'string',
      policy: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The metadata of the key.
   */
  keyMetadata?: CreateKeyResponseBodyKeyMetadata;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyMetadata: 'KeyMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyMetadata: CreateKeyResponseBodyKeyMetadata,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  You can also set the value to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The metadata of the version.
   */
  keyVersion?: CreateKeyVersionResponseBodyKeyVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b96f250a-4b75-498c-91be-22c6928f85be
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: CreateKeyVersionResponseBodyKeyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * networkrule description
   */
  description?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The private IP address or private CIDR block. Separate multiple items with commas (,).
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Only private IP addresses are supported. Set the value to Private.
   * 
   * This parameter is required.
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ARN of the access control rule.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:network/networkrule_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * networkrule description
   */
  description?: string;
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2dd3
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address or private CIDR block.
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      description: 'Description',
      name: 'Name',
      requestId: 'RequestId',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      description: 'string',
      name: 'string',
      requestId: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * > For more information about how to query created access control rules, see [ListNetworkRules](https://help.aliyun.com/document_detail/2539433.html).
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * policy  description
   */
  description?: string;
  /**
   * @remarks
   * The scope of the permission policy. You need to specify the KMS instance that you want to access.
   * 
   * @example
   * kst-hzz634e67d126u9p9****
   */
  kmsInstance?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * The operations that can be performed. Valid values:
   * 
   * *   RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
   * *   RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
   * 
   * You can select both.
   * 
   * This parameter is required.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string;
  /**
   * @remarks
   * The key and secret that are allowed to access.
   * 
   * *   Key: Enter a key in the `key/${KeyId}` format. To allow access to all keys of a KMS instance, enter key/\\*.
   * *   Secret: Enter a secret in the `secret/${SecretName}` format. To allow access to all secrets of a KMS instance, enter secret/\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The ARN of the permission policy.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:policy/policy_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * policy  description
   */
  description?: string;
  /**
   * @remarks
   * The scope of the permission policy.
   * 
   * @example
   * kst-hzz634e67d126u9p9****
   */
  kmsInstance?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * The operations that can be performed.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f34-be0f-c4543fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The key and secret that are allowed to access.
   * 
   * *   `key/*` indicates that all keys of the KMS instance can be accessed.
   * *   `secret/*` indicates all secrets of the KMS instance can be accessed.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      arn: 'Arn',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      arn: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: 'string',
      requestId: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretRequest extends $tea.Model {
  /**
   * @remarks
   * The version number of the secret.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic rotation. Valid values:
   * 
   * *   true: specifies to enable automatic rotation.
   * *   false: specifies to disable automatic rotation. This is the default value.
   * 
   * >  This parameter is valid if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * mydbinfo
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * 00aa68af-2c02-4f68-95fe-3435d330****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * {"SecretSubType":"SingleUser", "DBInstanceId":"rm-bp1b3dd3a506e****" ,"CustomData":{}}
   */
  extendedConfig?: { [key: string]: any };
  policy?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The tags of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * The type of the secret. Valid values:
   * 
   * *   Generic: specifies a generic secret.
   * *   Rds: specifies a managed ApsaraDB RDS secret.
   * *   RAMCredentials: specifies a managed RAM secret.
   * *   ECS: specifies a managed ECS secret.
   */
  secretData?: string;
  /**
   * @remarks
   * The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type. The description can be up to 1,024 characters in length.
   * 
   * *   If you set the SecretType parameter to Generic, you do not need to configure this parameter.
   * 
   * *   If you set the SecretType parameter to Rds, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Valid values:
   * 
   *         *   SingleUser: Secrets Manager manages the ApsaraDB RDS secret in single-account mode. When the secret is rotated, the password of the specified account is reset to a new random password.
   *         *   DoubleUsers: Secrets Manager manages the ApsaraDB RDS secret in dual-account mode. One account is referenced by the ACSCurrent version, and the other account is referenced by the ACSPrevious version. When the secret is rotated, the password of the account referenced by the ACSPrevious version is reset to a new random password. Then, Secrets Manager switches the referenced accounts between the ACSCurrent and ACSPrevious versions.
   * 
   *     *   DBInstanceId: required. The ApsaraDB RDS instance to which the ApsaraDB RDS account belongs.
   * 
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The default value is a pair of empty braces (`{}`).
   * 
   * *   If you set the SecretType parameter to RAMCredentials, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Set the value to RamUserAccessKey.
   *     *   UserName: required. The name of the RAM user.
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). The default value is a pair of empty braces (`{}`).
   * 
   * *   If you set the SecretType parameter to ECS, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Valid values:
   * 
   *         *   Password: the password that is used to log on to the ECS instance.
   *         *   SSHKey: the SSH public key and private key that are used to log on to the ECS instance.
   * 
   *     *   RegionId: required. The ID of the region in which the ECS instance resides.
   * 
   *     *   InstanceId: required. The ID of the ECS instance.
   * 
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). The default value is a pair of empty braces (`{}`).
   * 
   * >  This parameter is required if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The value of the secret that you want to create. Secrets Manager encrypts the secret value and stores the encrypted value in the initial version.
   * 
   * *   If you set the SecretType parameter to Generic that indicates a generic secret, you can customize the secret value.
   * 
   * *   If you set the SecretType parameter to Rds that indicates a managed ApsaraDB RDS secret, the secret value must be in the format of `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the preceding format, `AccountName` indicates the username of the account that is used to connect to your ApsaraDB RDS instance, and `AccountPassword` specifies the password of the account.
   * 
   * *   If you set the SecretType parameter to RAMCredentials that indicates a managed RAM secret, the secret value must be in the format of `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":"",}]}`. In the preceding format, `AccessKeyId` indicates the AccessKey ID of the RAM user and `AccessKeySecret` specifies the AccessKey secret of the RAM user. You must specify all the AccessKey pairs of the RAM user.
   * 
   * *   If you set the SecretType parameter to ECS that indicates a managed ECS secret, the secret value must be in one of the following formats:
   * 
   *     *   `{"UserName":"","Password": ""}`: In the format, `UserName` specifies the username that is used to log on to the ECS instance, and `Password` specifies the password that is used to log on to the ECS instance.
   *     *   `{"UserName":"","PublicKey": "", "PrivateKey": ""}`: In the format, `PublicKey` indicates the SSH public key that is used to log on to the ECS instance, and `PrivateKey` specifies the SSH private key that is used to log on to the ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mydbconninfo
   */
  secretName?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
   * 
   * The value is in the `integer[unit]` format.
   * 
   * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
   * 
   * >  This parameter is required if you set the EnableAutomaticRotation parameter to true. This parameter is ignored if you set the EnableAutomaticRotation parameter to false or if the EnableAutomaticRotation parameter is not configured.
   * 
   * @example
   * [{\\"TagKey\\":\\"key1\\",\\"TagValue\\":\\"val1\\"},{\\"TagKey\\":\\"key2\\",\\"TagValue\\":\\"val2\\"}]
   */
  tags?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * *   text
   * *   binary
   * 
   * >  If you set the SecretType parameter to Rds, RAMCredentials, or ECS, the SecretDataType parameter must be set to text.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfig: 'ExtendedConfig',
      policy: 'Policy',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      encryptionKeyId: 'string',
      extendedConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      policy: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The version number of the secret.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic rotation. Valid values:
   * 
   * *   true: specifies to enable automatic rotation.
   * *   false: specifies to disable automatic rotation. This is the default value.
   * 
   * >  This parameter is valid if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * mydbinfo
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * 00aa68af-2c02-4f68-95fe-3435d330****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * {"SecretSubType":"SingleUser", "DBInstanceId":"rm-bp1b3dd3a506e****" ,"CustomData":{}}
   */
  extendedConfigShrink?: string;
  policy?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The tags of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * The type of the secret. Valid values:
   * 
   * *   Generic: specifies a generic secret.
   * *   Rds: specifies a managed ApsaraDB RDS secret.
   * *   RAMCredentials: specifies a managed RAM secret.
   * *   ECS: specifies a managed ECS secret.
   */
  secretData?: string;
  /**
   * @remarks
   * The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type. The description can be up to 1,024 characters in length.
   * 
   * *   If you set the SecretType parameter to Generic, you do not need to configure this parameter.
   * 
   * *   If you set the SecretType parameter to Rds, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Valid values:
   * 
   *         *   SingleUser: Secrets Manager manages the ApsaraDB RDS secret in single-account mode. When the secret is rotated, the password of the specified account is reset to a new random password.
   *         *   DoubleUsers: Secrets Manager manages the ApsaraDB RDS secret in dual-account mode. One account is referenced by the ACSCurrent version, and the other account is referenced by the ACSPrevious version. When the secret is rotated, the password of the account referenced by the ACSPrevious version is reset to a new random password. Then, Secrets Manager switches the referenced accounts between the ACSCurrent and ACSPrevious versions.
   * 
   *     *   DBInstanceId: required. The ApsaraDB RDS instance to which the ApsaraDB RDS account belongs.
   * 
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). Example: `{"Key1": "v1", "fds":"fdsf"}`. The default value is a pair of empty braces (`{}`).
   * 
   * *   If you set the SecretType parameter to RAMCredentials, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Set the value to RamUserAccessKey.
   *     *   UserName: required. The name of the RAM user.
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). The default value is a pair of empty braces (`{}`).
   * 
   * *   If you set the SecretType parameter to ECS, configure the following fields for the ExtendedConfig parameter:
   * 
   *     *   SecretSubType: required. The subtype of the secret. Valid values:
   * 
   *         *   Password: the password that is used to log on to the ECS instance.
   *         *   SSHKey: the SSH public key and private key that are used to log on to the ECS instance.
   * 
   *     *   RegionId: required. The ID of the region in which the ECS instance resides.
   * 
   *     *   InstanceId: required. The ID of the ECS instance.
   * 
   *     *   CustomData: optional. The custom data. The value is a collection of key-value pairs in the JSON format. Up to 10 key-value pairs can be specified. Separate multiple key-value pairs with commas (,). The default value is a pair of empty braces (`{}`).
   * 
   * >  This parameter is required if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The value of the secret that you want to create. Secrets Manager encrypts the secret value and stores the encrypted value in the initial version.
   * 
   * *   If you set the SecretType parameter to Generic that indicates a generic secret, you can customize the secret value.
   * 
   * *   If you set the SecretType parameter to Rds that indicates a managed ApsaraDB RDS secret, the secret value must be in the format of `{"Accounts":[{"AccountName":"","AccountPassword":""}]}`. In the preceding format, `AccountName` indicates the username of the account that is used to connect to your ApsaraDB RDS instance, and `AccountPassword` specifies the password of the account.
   * 
   * *   If you set the SecretType parameter to RAMCredentials that indicates a managed RAM secret, the secret value must be in the format of `{"AccessKeys":[{"AccessKeyId":"","AccessKeySecret":"",}]}`. In the preceding format, `AccessKeyId` indicates the AccessKey ID of the RAM user and `AccessKeySecret` specifies the AccessKey secret of the RAM user. You must specify all the AccessKey pairs of the RAM user.
   * 
   * *   If you set the SecretType parameter to ECS that indicates a managed ECS secret, the secret value must be in one of the following formats:
   * 
   *     *   `{"UserName":"","Password": ""}`: In the format, `UserName` specifies the username that is used to log on to the ECS instance, and `Password` specifies the password that is used to log on to the ECS instance.
   *     *   `{"UserName":"","PublicKey": "", "PrivateKey": ""}`: In the format, `PublicKey` indicates the SSH public key that is used to log on to the ECS instance, and `PrivateKey` specifies the SSH private key that is used to log on to the ECS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * mydbconninfo
   */
  secretName?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
   * 
   * The value is in the `integer[unit]` format.
   * 
   * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
   * 
   * >  This parameter is required if you set the EnableAutomaticRotation parameter to true. This parameter is ignored if you set the EnableAutomaticRotation parameter to false or if the EnableAutomaticRotation parameter is not configured.
   * 
   * @example
   * [{\\"TagKey\\":\\"key1\\",\\"TagValue\\":\\"val1\\"},{\\"TagKey\\":\\"key2\\",\\"TagValue\\":\\"val2\\"}]
   */
  tags?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * *   text
   * *   binary
   * 
   * >  If you set the SecretType parameter to Rds, RAMCredentials, or ECS, the SecretDataType parameter must be set to text.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      enableAutomaticRotation: 'EnableAutomaticRotation',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfigShrink: 'ExtendedConfig',
      policy: 'Policy',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DKMSInstanceId: 'string',
      description: 'string',
      enableAutomaticRotation: 'boolean',
      encryptionKeyId: 'string',
      extendedConfigShrink: 'string',
      policy: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponseBody extends $tea.Model {
  /**
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/mydbconninfo
   */
  arn?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * *   RAMCredentials: indicates a managed RAM secret.
   * *   ECS: indicates a managed ECS secret.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned if you set the SecretType parameter to Rds, RAMCredentials, or ECS.
   * 
   * @example
   * 2022-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2dd3
   */
  requestId?: string;
  /**
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. The value of the `unit` field is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * mydbconninfo
   */
  secretName?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * v1
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      DKMSInstanceId: 'DKMSInstanceId',
      extendedConfig: 'ExtendedConfig',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      DKMSInstanceId: 'string',
      extendedConfig: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * You can generate the ciphertext by calling the following operations:
   * 
   * *   [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html)
   * *   [Encrypt](https://help.aliyun.com/document_detail/28949.html)
   * *   [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html)
   * 
   * This parameter is required.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * >  If you specify the EncryptionContext parameter when you call the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [Encrypt](https://help.aliyun.com/document_detail/28949.html), or [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation, you must specify the same context when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext that you want to decrypt.
   * 
   * You can generate the ciphertext by calling the following operations:
   * 
   * *   [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html)
   * *   [Encrypt](https://help.aliyun.com/document_detail/28949.html)
   * *   [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html)
   * 
   * This parameter is required.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * >  If you specify the EncryptionContext parameter when you call the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [Encrypt](https://help.aliyun.com/document_detail/28949.html), or [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation, you must specify the same context when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContextShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the customer master key (CMK) that is used to decrypt the ciphertext.
   * 
   * It is the GUID of the CMK.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the ciphertext.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The plaintext that is generated after decryption.
   * 
   * @example
   * tRYXuCwgja12xxO1N/gZERDDCLw9doZEQiPDk/Bv****
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 207596a2-36d3-4840-b1bd-f87044699bd7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DecryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DecryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DecryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The alias that you want to delete.
   * 
   * The value must be 1 to 255 characters in length and must include the alias/ prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4c8ae23f-3a42-6791-a4ba-1faa77831c28
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the AAP that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate. It is the globally unique identifier (GUID) of the certificate in Alibaba Cloud Certificate Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * d97f6c33-ca26-4de2-a580-0e2fd1c5bfb0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the client key.
   * 
   * This parameter is required.
   * 
   * @example
   * KAAP.66abf237-63f6-4625-b8cf-47e1086e****
   */
  clientKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2312e45f-b2fa-4c34-ad94-3eca50932916
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteKeyMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteKeyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the network access rule that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2d4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the permission policy that you want to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00a26a33-d992-42f3-9012-5fd12764430f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered.
   * 
   * Valid values:
   * 
   * *   **true**
   * *   **false** (default value)
   * 
   * @example
   * false
   */
  forceDeleteWithoutRecovery?: string;
  /**
   * @remarks
   * Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30. Unit: Days.
   * 
   * @example
   * 10
   */
  recoveryWindowInDays?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      forceDeleteWithoutRecovery: 'ForceDeleteWithoutRecovery',
      recoveryWindowInDays: 'RecoveryWindowInDays',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceDeleteWithoutRecovery: 'string',
      recoveryWindowInDays: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponseBody extends $tea.Model {
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-09-15T07:02:14Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 38bbed2a-15e0-45ad-98d4-816ad2ccf4ea
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plannedDeleteTime: 'string',
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountKmsStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The status of KMS within your Alibaba cloud account. Valid values:
   * 
   * *   Enabled: KMS is enabled.
   * 
   * *   NotEnabled: KMS is disabled.
   * 
   * *   InDebt: Your account is overdue, and KMS stops providing services.
   * 
   * > If your Alibaba Cloud account is overdue, top up your account at the earliest opportunity to avoid impacts on your services.
   * 
   * *   Suspended: KMS is suspended.
   * 
   * @example
   * Enabled
   */
  accountStatus?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3ac84333-d64d-4784-a8bc-997834a7ac6c
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountKmsStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAccountKmsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAccountKmsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the AAP that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ARN of the AAP.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:applicationaccesspoint/aap_test
   */
  arn?: string;
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy that is bound to the AAP.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the certificate.
   * 
   * @example
   * acs:kms:cn-hangzhou:159498693826****:certificate/9a28de48-8d8b-484d-a766-dec4****"
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The time when the certificate was created.
   * 
   * @example
   * 2020-10-13T03:05:03Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether the private key of the certificate can be exported for use. Valid values:
   * 
   * *   true: The private key of the certificate can be exported for use. This is the default value.
   * *   false: The private key of the certificate cannot be exported for use.
   * 
   * @example
   * true
   */
  exportablePrivateKey?: boolean;
  /**
   * @remarks
   * The certificate issuer in the distinguished name (DN) format.
   * 
   * @example
   * CN=testCA,OU=kms,O=aliyun,C=CN
   */
  issuer?: string;
  /**
   * @remarks
   * The type of the key.
   * 
   * @example
   * RSA_2048
   */
  keySpec?: string;
  /**
   * @remarks
   * The end of the validity period of the certificate.
   * 
   * @example
   * 2022-10-13T03:09:00Z
   */
  notAfter?: string;
  /**
   * @remarks
   * The beginning of the validity period of the certificate.
   * 
   * @example
   * 2020-10-13T03:09:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * edb671a3-c5a1-4ebe-a1de-d748b640bdf2
   */
  requestId?: string;
  /**
   * @remarks
   * The serial number of the certificate.
   * 
   * @example
   * 12345678
   */
  serial?: string;
  /**
   * @remarks
   * The signature algorithm of the certificate. Valid values:
   * 
   * *   RSA2048-SHA256
   * *   ECDSA-SHA256
   * *   SM2-SM3
   * 
   * @example
   * ECDSA-SHA256
   */
  signatureAlgorithm?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   PENDING: The certificate is to be imported.
   * *   ACTIVE: The certificate is enabled.
   * *   INACTIVE: The certificate is disabled.
   * *   REVOKED: The certificate is revoked.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The subject of the certificate, which is in the DN format.
   * 
   * @example
   * CN=userName,OU=aliyun,O=aliyun,C=CN
   */
  subject?: string;
  /**
   * @remarks
   * The alias of the certificate subject.
   * 
   * A domain name list is supported. A maximum of 10 domain names are supported.
   */
  subjectAlternativeNames?: string[];
  /**
   * @remarks
   * The public key identifier of the certificate subject.
   * 
   * @example
   * 79 36 26 DE 9F F5 15 E3 56 DC ****
   */
  subjectKeyIdentifier?: string;
  /**
   * @remarks
   * The public key of the certificate.
   * 
   * @example
   * -----BEGIN PUBLIC KEY----- MIIBIjA -----END PUBLIC KEY-----
   */
  subjectPublicKey?: string;
  /**
   * @remarks
   * The tag of the certificate.
   * 
   * @example
   * [{\\"TagKey\\":\\"S1key1\\",\\"TagValue\\":\\"S1val1\\"},{\\"TagKey\\":\\"S1key2\\",\\"TagValue\\":\\"S2val2\\"}]
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The time when the certificate was updated.
   * 
   * @example
   * 2020-12-23T06:10:13Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      certificateId: 'CertificateId',
      createdAt: 'CreatedAt',
      exportablePrivateKey: 'ExportablePrivateKey',
      issuer: 'Issuer',
      keySpec: 'KeySpec',
      notAfter: 'NotAfter',
      notBefore: 'NotBefore',
      requestId: 'RequestId',
      serial: 'Serial',
      signatureAlgorithm: 'SignatureAlgorithm',
      status: 'Status',
      subject: 'Subject',
      subjectAlternativeNames: 'SubjectAlternativeNames',
      subjectKeyIdentifier: 'SubjectKeyIdentifier',
      subjectPublicKey: 'SubjectPublicKey',
      tags: 'Tags',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      certificateId: 'string',
      createdAt: 'string',
      exportablePrivateKey: 'boolean',
      issuer: 'string',
      keySpec: 'string',
      notAfter: 'string',
      notBefore: 'string',
      requestId: 'string',
      serial: 'string',
      signatureAlgorithm: 'string',
      status: 'string',
      subject: 'string',
      subjectAlternativeNames: { 'type': 'array', 'itemType': 'string' },
      subjectKeyIdentifier: 'string',
      subjectPublicKey: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Overview of aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 05754286-3ba2-4fa6-8d41-4323aca6****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The metadata of the CMK.
   */
  keyMetadata?: DescribeKeyResponseBodyKeyMetadata;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyMetadata: 'KeyMetadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyMetadata: DescribeKeyResponseBodyKeyMetadata,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * You can call the [ListKeyVersions](https://help.aliyun.com/document_detail/133966.html) operation to query the versions of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The metadata of the CMK version.
   */
  keyVersion?: DescribeKeyVersionResponseBodyKeyVersion;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: DescribeKeyVersionResponseBodyKeyVersion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeKeyVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeKeyVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the access control rule that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ARN of the access control rule.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:network/networkrule_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Creat by kst-hzz62ee817bvyyr5****
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f93-be0f-cc043fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The private IP address or private CIDR block.
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  /**
   * @remarks
   * The network type. Only private IP addresses are supported. The value is fixed as Private.
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      description: 'Description',
      requestId: 'RequestId',
      sourcePrivateIp: 'SourcePrivateIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      description: 'string',
      requestId: 'string',
      sourcePrivateIp: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the permission policy that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The network access rule that is associated with the permission policy.
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the permission policy.
   * 
   * @example
   * acs:kms:cn-hangzhou:119285303511****:policy/policy_test
   */
  arn?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * policy  description
   */
  description?: string;
  /**
   * @remarks
   * The scope of the permission policy.
   * 
   * @example
   * kst-hzz634e67d126u9p9****
   */
  kmsInstance?: string;
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * A list of operations that can be performed.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * f455324b-e229-4066-9f58-9c1cf3fe83a9
   */
  requestId?: string;
  /**
   * @remarks
   * A list of keys and secrets that are allowed to access.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      arn: 'Arn',
      description: 'Description',
      kmsInstance: 'KmsInstance',
      name: 'Name',
      permissions: 'Permissions',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      arn: 'string',
      description: 'string',
      kmsInstance: 'string',
      name: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The region.
   */
  regions?: DescribeRegionsResponseBodyRegions;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 815240e2-aa37-4c26-9cca-05d4df3e8fe6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: DescribeRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return the resource tags of the secret. Valid values:
   * 
   * *   true: The resource tags are returned.
   * *   false: The resource tags are not returned. This is the default value.
   * 
   * @example
   * true
   */
  fetchTags?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/secret001
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * 2022-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * userinfo
   */
  description?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) that is used to encrypt the secret value.
   * 
   * @example
   * 00aa68af-2c02-4f68-95fe-3435d330****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed Resource Access Management (RAM) secret, or a managed Elastic Compute Service (ECS) secret.
   * 
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The time when the last rotation was performed.
   * 
   * >  This parameter is returned if the secret was rotated.
   * 
   * @example
   * 2022-07-05T08:22:03Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned when automatic rotation is enabled.
   * 
   * @example
   * 2022-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-03-21T15:45:12Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 93348dfb-3627-4417-8d90-487a76a909c9
   */
  requestId?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. `integer` indicates the length of time. `unit`: indicates the time unit. The value of `unit` is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned when automatic rotation is enabled.
   * 
   * @example
   * 3153600s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * *   RAMCredentials: indicates a managed RAM secret.
   * *   ECS: indicates a managed ECS secret.
   * 
   * @example
   * Rds
   */
  secretType?: string;
  /**
   * @remarks
   * The resource tags of the secret.
   * 
   * This parameter is not returned if you set the FetchTags parameter to false or you do not specify the FetchTags parameter.
   */
  tags?: DescribeSecretResponseBodyTags;
  /**
   * @remarks
   * The time when the secret was updated.
   * 
   * @example
   * 2022-02-21T15:39:26Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      DKMSInstanceId: 'DKMSInstanceId',
      description: 'Description',
      encryptionKeyId: 'EncryptionKeyId',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      plannedDeleteTime: 'PlannedDeleteTime',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      createTime: 'string',
      DKMSInstanceId: 'string',
      description: 'string',
      encryptionKeyId: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      plannedDeleteTime: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: DescribeSecretResponseBodyTags,
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2fe70ce2-3303-4fd6-b3ac-472fb2705c62
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * efb1cbbd-a093-4278-bc03-639dd4fcc207
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, an equivalent value is required when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The plaintext to be encrypted. The plaintext must be Base64 encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29y****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptShrinkRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, an equivalent value is required when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The plaintext to be encrypted. The plaintext must be Base64 encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * SGVsbG8gd29y****
   */
  plaintext?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      plaintext: 'Plaintext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      plaintext: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data that is encrypted by using the primary CMK version.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. If you set the KeyId parameter to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version that is used to encrypt the plaintext. It is the primary version of the CMK.
   * 
   * @example
   * 86a9efd9-3d16-4894-bd4f-1fc43f3f****
   */
  keyVersionId?: string;
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
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data key encrypted by using a CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter when you use a CMK to encrypt the data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * A Base64-encoded public key.
   * 
   * This parameter is required.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********
   */
  publicKeyBlob?: string;
  /**
   * @remarks
   * The encryption algorithm based on which you want to use the public key specified by PublicKeyBlob to encrypt the data key. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The key type of the public key specified by PublicKeyBlob. For more information about key types, see [Introduction to asymmetric keys](https://help.aliyun.com/document_detail/148147.html).
   * 
   * Valid values:
   * 
   * *   RSA_2048
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data key encrypted by using a CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter when you use a CMK to encrypt the data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * A Base64-encoded public key.
   * 
   * This parameter is required.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********
   */
  publicKeyBlob?: string;
  /**
   * @remarks
   * The encryption algorithm based on which you want to use the public key specified by PublicKeyBlob to encrypt the data key. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The key type of the public key specified by PublicKeyBlob. For more information about key types, see [Introduction to asymmetric keys](https://help.aliyun.com/document_detail/148147.html).
   * 
   * Valid values:
   * 
   * *   RSA_2048
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      dryRun: 'string',
      encryptionContextShrink: 'string',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data key encrypted by using the public key and then exported.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVs*******
   */
  exportedDataKey?: string;
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the specified ciphertext of the data key.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the specified ciphertext of the data key.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4bd560a1-729e-45f1-a3d9-b2a33d61046b
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string of key-value pairs. If you specify this parameter here, an equivalent value is required when you decrypt or re-encrypt the data key. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both parameters are not specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate.
   * 
   * Valid values: 1 to 1024.
   * 
   * Unit: bytes.
   * 
   * @example
   * 32
   */
  numberOfBytes?: number;
  /**
   * @remarks
   * A Base64-encoded public key.
   * 
   * This parameter is required.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********
   */
  publicKeyBlob?: string;
  /**
   * @remarks
   * The encryption algorithm based on which you want to use the public key specified by PublicKeyBlob to encrypt the data key. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The key type of the public key specified by PublicKeyBlob. For more information about key types, see [Introduction to asymmetric keys](https://help.aliyun.com/document_detail/148147.html).
   * 
   * Valid values:
   * 
   * *   RSA_2048
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyShrinkRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string of key-value pairs. If you specify this parameter here, an equivalent value is required when you decrypt or re-encrypt the data key. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both parameters are not specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate.
   * 
   * Valid values: 1 to 1024.
   * 
   * Unit: bytes.
   * 
   * @example
   * 32
   */
  numberOfBytes?: number;
  /**
   * @remarks
   * A Base64-encoded public key.
   * 
   * This parameter is required.
   * 
   * @example
   * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAndKfC2ReLL2+y8a0+ZBBeAft/uBYo86GZiYJuflqgUzKxpyuvlo3uQkBv6b+nx+0tz8g8v7GhpPWMSW5L9mNHYsvYFsa7jTxsYdt17yj6GlUHPuMIs8hr5qbwl38IHU1iIa7nYWwE2fb3ePOvLDACRJVgGpU0yxioW80d2QD+9aU4jF5dlAahcfgsNzo2CXzCUc1+xbmNuq7Rp+H9VJB9dyYOwqnW3RhOLBo21FzpORapf0UiRlrHRpk1V6ez+aE1dofaYh/9bh0m6ioxj7j5hpZbWccuEZTMBKd+cbuBkRhJzc6Tti6qwZbDiu4fUwbZS0Tqpuo1UadiyxMW********
   */
  publicKeyBlob?: string;
  /**
   * @remarks
   * The encryption algorithm based on which you want to use the public key specified by PublicKeyBlob to encrypt the data key. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * This parameter is required.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  wrappingAlgorithm?: string;
  /**
   * @remarks
   * The key type of the public key specified by PublicKeyBlob. For more information about key types, see [Introduction to asymmetric keys](https://help.aliyun.com/document_detail/148147.html).
   * 
   * Valid values:
   * 
   * *   RSA_2048
   * *   EC_SM2
   * 
   * This parameter is required.
   * 
   * @example
   * RSA_2048
   */
  wrappingKeySpec?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
      publicKeyBlob: 'PublicKeyBlob',
      wrappingAlgorithm: 'WrappingAlgorithm',
      wrappingKeySpec: 'WrappingKeySpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
      publicKeyBlob: 'string',
      wrappingAlgorithm: 'string',
      wrappingKeySpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data key encrypted by using the primary CMK version.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The data key encrypted by using the public key and then exported.
   * 
   * @example
   * BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVs*******
   */
  exportedDataKey?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 599fa825-17de-417e-9554-bb032cc6****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to encrypt the plaintext. It is the primary version of the CMK.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      exportedDataKey: 'ExportedDataKey',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      exportedDataKey: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateAndExportDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateAndExportDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateAndExportDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * If you specify this parameter, an equivalent value is required when you call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If none of the parameters are specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Unit: bytes.
   * 
   * Valid values: 1 to 1024.
   * 
   * Default value:
   * 
   * *   If the KeySpec parameter is set to AES_256, set the value of the NumberOfBytes parameter to 32.
   * *   If the KeySpec parameter is set to AES_128, set the value of the NumberOfBytes parameter to 16.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyShrinkRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * The JSON string that consists of key-value pairs.
   * 
   * If you specify this parameter, an equivalent value is required when you call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * You can also set this parameter to an alias that is bound to the CMK. For more information, see [Alias overview](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: a 256-bit symmetric key
   * *   AES_128: a 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If none of the parameters are specified, KMS generates a 256-bit data key. If both parameters are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Unit: bytes.
   * 
   * Valid values: 1 to 1024.
   * 
   * Default value:
   * 
   * *   If the KeySpec parameter is set to AES_256, set the value of the NumberOfBytes parameter to 32.
   * *   If the KeySpec parameter is set to AES_128, set the value of the NumberOfBytes parameter to 16.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data key that is encrypted by using the primary version of the specified CMK.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * >  If you set the KeyId parameter in the request to an alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version. The ID must be globally unique.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The Base64 encoded plaintext of the data key.
   * 
   * @example
   * QmFzZTY0IGVuY29kZWQgcGxhaW50****
   */
  plaintext?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      plaintext: 'Plaintext',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      plaintext: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateDataKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateDataKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, an equivalent value is required when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see Use aliases.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: 256-bit symmetric key
   * *   AES_128: 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both of them are not specified, KMS generates a 256-bit data key. If both of them are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate.
   * 
   * Valid values: 1 to 1024.
   * 
   * Unit: bytes.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContext: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextShrinkRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify this parameter, an equivalent value is required when you call the Decrypt operation. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * @example
   * {"Example":"Example"}
   */
  encryptionContextShrink?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see Use aliases.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate. Valid values:
   * 
   * *   AES_256: 256-bit symmetric key
   * *   AES_128: 128-bit symmetric key
   * 
   * >  We recommend that you use the KeySpec or NumberOfBytes parameter to specify the length of a data key. If both of them are not specified, KMS generates a 256-bit data key. If both of them are specified, KMS ignores the KeySpec parameter.
   * 
   * @example
   * AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The length of the data key that you want to generate.
   * 
   * Valid values: 1 to 1024.
   * 
   * Unit: bytes.
   * 
   * @example
   * 256
   */
  numberOfBytes?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      encryptionContextShrink: 'EncryptionContext',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      numberOfBytes: 'NumberOfBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      encryptionContextShrink: 'string',
      keyId: 'string',
      keySpec: 'string',
      numberOfBytes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ciphertext of the data that is encrypted by using the primary CMK version.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901qOjop4bTS****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to an alias, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 599fa825-17de-417e-9554-bb032cc6****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the key version that is used to encrypt the plaintext. It is the primary version of the CMK.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7021b6ec-4be7-4d3c-8a68-1e85d4d515a0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateDataKeyWithoutPlaintextResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateDataKeyWithoutPlaintextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateDataKeyWithoutPlaintextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate. It is the globally unique identifier (GUID) of the certificate in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The certificate in the Privacy Enhanced Mail (PEM) format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The CSR in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----MIICxjCCAa4CAQAwPzELMAkGA1UEBhMCQ04xDzANBgNVBAoTBmFsaXl1bjEMMAoGA1UECxMDa21zMREwDwY****-----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * b3e104b4-0319-4a20-ab7f-9fef6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
      csr: 'Csr',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
      csr: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the client key.
   * 
   * This parameter is required.
   * 
   * @example
   * KAAP.66abf237-63f6-4625-b8cf-47e1086e****
   */
  clientKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeyId: 'ClientKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClientKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClientKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClientKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeyPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @example
   * default
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeyPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * {"Statement": [{"Action": ["kms:*"],"Effect": "Allow","Principal": {"RAM": ["acs:ram::190325303126****:*","acs:ram::119285303511****:*"]},"Resource": ["*"],"Sid": "kms default key policy"}],"Version": "1" }
   */
  policy?: string;
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3B84B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKeyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKeyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKeyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the KMS instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The details of the KMS instance.
   */
  kmsInstance?: GetKmsInstanceResponseBodyKmsInstance;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 46b4a94a-57d2-44b4-9810-1e87d31abb33
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: GetKmsInstanceResponseBodyKmsInstance,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetKmsInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetKmsInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportRequest extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParametersForImportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetParametersForImportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetParametersForImportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * This parameter is required.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyResponseBody extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicKeyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordRequest extends $tea.Model {
  /**
   * @remarks
   * The characters that are not included in the password to be generated.
   * 
   * Valid values:
   * 
   * ` Valid characters: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ! \\"#$%&\\"()*+,-. /:;<=>? @[\\] your_project_id} ~  `.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * ABCabc
   */
  excludeCharacters?: string;
  /**
   * @remarks
   * Specifies whether to exclude lowercase letters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeLowercase?: string;
  /**
   * @remarks
   * Specifies whether to exclude digits.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeNumbers?: string;
  /**
   * @remarks
   * Specifies whether to exclude special characters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludePunctuation?: string;
  /**
   * @remarks
   * Specifies whether to exclude uppercase letters.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  excludeUppercase?: string;
  /**
   * @remarks
   * The number of bytes that the password to be generated contains.
   * 
   * Valid values: 8 to 128.
   * 
   * Default value: 32
   * 
   * @example
   * 32
   */
  passwordLength?: string;
  /**
   * @remarks
   * Specifies whether to include all the preceding character types.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  requireEachIncludedType?: string;
  static names(): { [key: string]: string } {
    return {
      excludeCharacters: 'ExcludeCharacters',
      excludeLowercase: 'ExcludeLowercase',
      excludeNumbers: 'ExcludeNumbers',
      excludePunctuation: 'ExcludePunctuation',
      excludeUppercase: 'ExcludeUppercase',
      passwordLength: 'PasswordLength',
      requireEachIncludedType: 'RequireEachIncludedType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeCharacters: 'string',
      excludeLowercase: 'string',
      excludeNumbers: 'string',
      excludePunctuation: 'string',
      excludeUppercase: 'string',
      passwordLength: 'string',
      requireEachIncludedType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordResponseBody extends $tea.Model {
  /**
   * @remarks
   * The generated random password.
   * 
   * @example
   * IxGn>NMmNB(y?iZ<Yc,_H/{2GC\\"U****
   */
  randomPassword?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6b0cbe25-5e33-467e-972e-7a83c6c97604
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      randomPassword: 'RandomPassword',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      randomPassword: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRandomPasswordResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRandomPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetRandomPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretPolicyRequest extends $tea.Model {
  /**
   * @example
   * default
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * secret_test
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'PolicyName',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSecretPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueRequest extends $tea.Model {
  dryRun?: string;
  /**
   * @remarks
   * Specifies whether to obtain the extended configuration of the secret. Valid values:
   * 
   * *   true
   * *   false: This is the default value.
   * 
   * >  This parameter is ignored for a generic secret.
   * 
   * @example
   * true
   */
  fetchExtendedConfig?: boolean;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret value. If you specify this parameter, Secrets Manager returns the secret value of the specified version.
   * 
   * >  This parameter is ignored for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * 00000000000000000000000000000001
   */
  versionId?: string;
  /**
   * @remarks
   * The stage label that marks the secret version. If you specify this parameter, Secrets Manager returns the secret value of the version that is marked with the specified stage label.
   * 
   * Default value: ACSCurrent.
   * 
   * >  For a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret, Secrets Manager can return only the secret value of the version marked with ACSPrevious or ACSCurrent.
   * 
   * @example
   * ACSCurrent
   */
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      fetchExtendedConfig: 'FetchExtendedConfig',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'string',
      fetchExtendedConfig: 'boolean',
      secretName: 'string',
      versionId: 'string',
      versionStage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether automatic rotation is enabled. Valid values:
   * 
   * *   Enabled: indicates that automatic rotation is enabled.
   * *   Disabled: indicates that automatic rotation is disabled.
   * *   Invalid: indicates that the status of automatic rotation is abnormal. In this case, Secrets Manager cannot automatically rotate the secret.
   * 
   * >  This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * 2020-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The extended configuration of the secret.
   * 
   * >  This parameter is returned if you set the FetchExtendedConfig parameter to true. This parameter is returned only for a managed ApsaraDB RDS secret, a managed RAM secret, or a managed ECS secret.
   * 
   * @example
   * {\\"SecretSubType\\":\\"SingleUser\\", \\"DBInstanceId\\":\\"rm-uf667446pc955****\\",  \\"CustomData\\":{} }
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The time when the last rotation was performed.
   * 
   * >  This parameter is returned if the secret was rotated.
   * 
   * @example
   * 2020-07-05T08:22:03Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 2020-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6a3e9c36-1150-4881-84d3-eb8672fcafad
   */
  requestId?: string;
  /**
   * @remarks
   * The interval for automatic rotation.
   * 
   * The value is in the `integer[unit]` format. The `unit` field has a fixed value of s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned if automatic rotation is enabled.
   * 
   * @example
   * 604800s
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The secret value. Secrets Manager decrypts the ciphertext of the secret value and returns the plaintext of the secret value in this parameter.
   * 
   * *   For a generic secret, the secret value of the specified version is returned.
   * 
   * *   For a managed ApsaraDB RDS secret, the value is returned in the following format:`{"AccountName":"","AccountPassword":""}` .
   * 
   * *   For a managed RAM secret, the secret value is returned in the following format: `{"AccessKeyId":"Adfdsfd","AccessKeySecret":"fdsfdsf","GenerateTimestamp": "2016-03-25T10:42:40Z"}`.
   * 
   * *   For a managed ECS secret, the secret value is returned in one of the following formats:
   * 
   *     *   `{"UserName":"root","Password":"H5asdasdsads****"}`: The secret value is returned in this format if the ECS secret is a password.
   *     *   `{"UserName":"root","PublicKey":"ssh-rsa ****mKwnVix9YTFY9Rs= imported-openssh-key","PrivateKey": "d6bee1cb-2e14-4277-ba6b-73786b21****"}`: The secret value is returned in this format is the ECS secret is a pair of SSH keys. The private key is in the Privacy Enhanced Mail (PEM) format.
   * 
   * @example
   * testdata1
   */
  secretData?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * *   text
   * *   binary
   * 
   * @example
   * binary
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * *   RAMCredentials: indicates a managed RAM secret.
   * *   ECS: indicates a managed ECS secret.
   * 
   * @example
   * Generic
   */
  secretType?: string;
  /**
   * @remarks
   * The version number of the secret value.
   * 
   * @example
   * 00000000000000000000000000000001
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that mark the secret versions.
   */
  versionStages?: GetSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      automaticRotation: 'AutomaticRotation',
      createTime: 'CreateTime',
      extendedConfig: 'ExtendedConfig',
      lastRotationDate: 'LastRotationDate',
      nextRotationDate: 'NextRotationDate',
      requestId: 'RequestId',
      rotationInterval: 'RotationInterval',
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      secretType: 'SecretType',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      automaticRotation: 'string',
      createTime: 'string',
      extendedConfig: 'string',
      lastRotationDate: 'string',
      nextRotationDate: 'string',
      requestId: 'string',
      rotationInterval: 'string',
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      secretType: 'string',
      versionId: 'string',
      versionStages: GetSecretValueResponseBodyVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialRequest extends $tea.Model {
  /**
   * @remarks
   * Use **GetParametersForImport** the Returned public key and the base64-encoded key material.
   * 
   * This parameter is required.
   * 
   * @example
   * bCPZx7I6v6KXsqEpr2OXKxuj2CCRtKdwp75Bw+BGncYqBdfjFBYRtOE6HRlT0oeiRDWzwnw9OA54OL36smDJrq4Lo9x0CyYDiuKnRkcKtMtlzW0din7Pd7IlZWWRdVueiw2qpzl7PkUWQGTdsdbzpfJJQ+qj/cRIrk/E83UGyeyytSpgnb+lu0xEYcPajRyWNsbi98N3pqqQzHXNNHO2NJqHlnQgglqTiBEjkGeKFhfKmTc3vjulIdVa3EaVIN6lwWfgx+UUYSrvbA77WDYKlDsZ4SbK2/T7za9Tp1qU7Ynqba7OKGVVj7PMbiaO80AxWZnjUMYCgEp5w7V+seOXqw==
   */
  encryptedKeyMaterial?: string;
  /**
   * @remarks
   * By calling **GetParametersForImport** the import token.
   * 
   * This parameter is required.
   * 
   * @example
   * Base64String
   */
  importToken?: string;
  /**
   * @remarks
   * The ID of the CMK to be imported.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The time when the key material expires.
   * 
   * If this parameter is not specified or set this parameter to 0, the key material does not expire.
   * 
   * >  The value cannot be earlier than the time when the API is called (based on the server time).
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  keyMaterialExpireUnix?: number;
  static names(): { [key: string]: string } {
    return {
      encryptedKeyMaterial: 'EncryptedKeyMaterial',
      importToken: 'ImportToken',
      keyId: 'KeyId',
      keyMaterialExpireUnix: 'KeyMaterialExpireUnix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptedKeyMaterial: 'string',
      importToken: 'string',
      keyId: 'string',
      keyMaterialExpireUnix: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ec1017cf-ead4-f3ca-babc-c3b34f3dbecb
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportKeyMaterialResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ImportKeyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportKeyMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 0 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The alias of the user.
   */
  aliases?: ListAliasesResponseBodyAliases;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1b57992c-834b-4811-a889-f8bac1ba0353
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned aliases.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: ListAliasesResponseBodyAliases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Valid values: an integer that is greater than 0.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 0 to 101.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of aliases.
   */
  aliases?: ListAliasesByKeyIdResponseBodyAliases;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1b57992c-834b-4811-a889-f8bac1ba0353
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned CMKs.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: ListAliasesByKeyIdResponseBodyAliases,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesByKeyIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAliasesByKeyIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of AAPs.
   */
  applicationAccessPoints?: ListApplicationAccessPointsResponseBodyApplicationAccessPoints;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoints: 'ApplicationAccessPoints',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoints: ListApplicationAccessPointsResponseBodyApplicationAccessPoints,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListApplicationAccessPointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListApplicationAccessPointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the application access point (AAP).
   * 
   * @example
   * aap_test
   */
  aapName?: string;
  static names(): { [key: string]: string } {
    return {
      aapName: 'AapName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aapName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of client keys.
   */
  clientKeys?: ListClientKeysResponseBodyClientKeys[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2312e45f-b2fa-4c34-ad94-3eca50932916
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientKeys: 'ClientKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientKeys: { 'type': 'array', 'itemType': ListClientKeysResponseBodyClientKeys },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClientKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClientKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK. You can also set this parameter to an alias that is bound to the CMK. For more information, see [Use aliases](https://help.aliyun.com/document_detail/68522.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 0 to 101.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of key versions.
   */
  keyVersions?: ListKeyVersionsResponseBodyKeyVersions;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * f71204c4-53cd-4eea-b405-653ba2db7e86
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned key versions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyVersions: 'KeyVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersions: ListKeyVersionsResponseBodyKeyVersions,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeyVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeyVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysRequest extends $tea.Model {
  /**
   * @remarks
   * The CMK filter. The filter consists of one or more key-value pairs. You can specify a maximum of 10 key-value pairs.
   * 
   * *   Key
   * 
   *     *   Description: the property that you want to filter.
   * 
   *     *   Type: string.
   * 
   *     *   Valid values:
   * 
   *         *   KeyState: the status of the CMK.
   *         *   KeySpec: the type of the CMK.
   *         *   KeyUsage: the usage of the CMK.
   *         *   ProtectionLevel: the protection level.
   *         *   CreatorType: the type of the creator.
   * 
   * *   Values
   * 
   *     *   Description: the value to be included after filtering.
   * 
   *     *   Format: string array.
   * 
   *     *   Length: 0 to 10.
   * 
   *     *   Valid values:
   * 
   *         *   When Key is set to KeyState, the value can be Enabled, Disabled, PendingDeletion, or PendingImport.
   * 
   *         *   When Key is set to KeySpec, the value can be Aliyun_AES_256, Aliyun_SM4, RSA_2048, EC_P256, EC_P256K, or EC_SM2.
   * 
   *             Note: You can create CMKs of the EC_SM2 or Aliyun_SM4 type only in regions where State Cryptography Administration (SCA)-certified managed HSMs reside. For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/125803.html). If your region does not support EC_SM2 or Aliyun_SM4, the two values are ignored if they are specified.
   * 
   *         *   When Key is set to KeyUsage, the value can be ENCRYPT/DECRYPT or SIGN/VERIFY. ENCRYPT/DECRYPT indicates that the CMK is used to encrypt and decrypt data. SIGN/VERIFY indicates that the CMK is used to generate and verify digital signatures.
   * 
   *         *   When Key is set to ProtectionLevel, the value can be SOFTWARE (software) or HSM (hardware).
   * 
   *             You can set ProtectionLevel to HSM in only specific regions. For more information about the regions, see [Supported regions](https://help.aliyun.com/document_detail/125803.html). If your region does not support the value HSM, the value is ignored if the value is specified.
   * 
   *         *   If Key is set to CreatorType, the value can be User or Service. User indicates that CMKs created by the current account are queried. Service indicates that CMKs automatically created by other cloud services authorized by the current account are queried.
   * 
   * The logical relationship between different keys is AND, and the logical relationship between multiple items in the same key is OR. Example:
   * 
   * `[ {"Key":"KeyState", "Values":["Enabled","Disabled"]}, {"Key":"KeyState", "Values":["PendingDeletion"]}, {"Key":"KeySpec", "Values":["Aliyun_AES_256"]}]`. In this example, the semantics are:`(KeyState=Enabled OR KeyState=Disabled OR KeyState=PendingDeletion) AND (KeySpec=Aliyun_AES_ 256)`.
   * 
   * @example
   * [{"Key":"KeyState", "Values":["Enabled","Disabled"]}]
   */
  filters?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBody extends $tea.Model {
  /**
   * @remarks
   * An array that consists of the CMKs of the current Alibaba Cloud account in the current region.
   */
  keys?: ListKeysResponseBodyKeys;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8252db58-2036-408c-a3d5-56e656dc2551
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of CMKs.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: ListKeysResponseBodyKeys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKeysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKeysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of KMS instances.
   */
  kmsInstances?: ListKmsInstancesResponseBodyKmsInstances;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * d3eca5c8-a856-4347-8eb6-e1898c3fda2e
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of KMS instances.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      kmsInstances: 'KmsInstances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstances: ListKmsInstancesResponseBodyKmsInstances,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListKmsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListKmsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of access control rules.
   */
  networkRules?: ListNetworkRulesResponseBodyNetworkRules;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f34-be0f-cc043fda2d33
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networkRules: 'NetworkRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRules: ListNetworkRulesResponseBodyNetworkRules,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNetworkRulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNetworkRulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesRequest extends $tea.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of permission policies.
   */
  policies?: ListPoliciesResponseBodyPolicies;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * b66ad557-9c00-4064-9c8d-b621c3263308
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policies: 'Policies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      policies: ListPoliciesResponseBodyPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsRequest extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
   */
  requestId?: string;
  /**
   * @remarks
   * The tags of the CMK.
   */
  tags?: ListResourceTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: ListResourceTagsResponseBodyTags,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return deprecated secret versions.
   * 
   * Valid values:
   * 
   * *   false: no
   * *   true: yes
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  includeDeprecated?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      includeDeprecated: 'IncludeDeprecated',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeDeprecated: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of secret versions.
   */
  versionIds?: ListSecretVersionIdsResponseBodyVersionIds;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretName: 'SecretName',
      totalCount: 'TotalCount',
      versionIds: 'VersionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretName: 'string',
      totalCount: 'number',
      versionIds: ListSecretVersionIdsResponseBodyVersionIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretVersionIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecretVersionIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * false
   */
  fetchTags?: string;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * [{"Key":"SecretName", "Values":["Val1","Val2"]}]
   */
  filters?: string;
  /**
   * @remarks
   * The secret filter. The filter consists of one or more key-value pairs. You can specify one key-value pair or leave this parameter empty. If you use one tag key or tag value to filter resources, up to 4,000 resources can be queried. If you want to query more than 4,000 resources, call the [ListResourceTags](https://help.aliyun.com/document_detail/120090.html) operation.
   * 
   * *   Key
   * 
   *     *   Description: the property that you want to filter.
   * 
   *     *   Type: string.
   * 
   *     *   Valid values:
   * 
   *         *   SecretName: the secret name.
   *         *   Description: the description of the secret.
   *         *   TagKey: the tag key.
   *         *   TagValue: the tag value.
   * 
   * *   Values
   * 
   *     *   Description: the value to be included after filtering.
   * 
   *     *   Type: string.
   * 
   *     *   Length: 0 to 10.
   * 
   *     *   Valid values:
   * 
   *         *   If the Key field is set to SecretName, the value must be 1 to 192 characters in length and can contain letters, digits, and special characters `_ / + = . @ -`.
   *         *   If the Key field is set to Description, the value must be 1 to 256 characters in length.
   *         *   If the Key field is set to TagKey, the value must be 1 to 256 characters in length and can contain letters, digits, and special characters `/ _ - . + = @ :`.
   *         *   If the Key field is set to TagValue, the value must be 1 to 256 characters in length and can contain letters, numbers, and special characters `/ _ - . + = @ :`.
   * 
   * The logical relationship between values of the Values field in a key-value pair is OR. Example: `[ {"Key":"SecretName", "Values":["sec1","sec2"]}]`. In this example, the semantics are `SecretName=sec 1 OR SecretName=sec 2`.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fetchTags: 'FetchTags',
      filters: 'Filters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fetchTags: 'string',
      filters: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of returned secrets.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of secrets.
   * 
   * @example
   * 6a6287a0-ff34-4780-a790-fdfca900557f
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the secret was updated.
   */
  secretList?: ListSecretsResponseBodySecretList;
  /**
   * @remarks
   * The secret name.
   * 
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      secretList: 'SecretList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      secretList: ListSecretsResponseBodySecretList,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecretsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecretsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  If the call does not return all result entries, the value of the NextToken parameter is returned. By default, 200 rows are returned. You can call this operation again and set the value of the parameter to the value of the parameter that is returned in the last call to implement paged query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/601478.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of resource IDs for which you want to query tags. You can enter a maximum of 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId. 1","ResourceId. 2",...]` format.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of resource whose tags you want to query. Valid value:
   * 
   * *   key
   * *   secret
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags that you want to query. Valid values of N: 1 to 20.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * *   If NextToken is empty ("NextToken": ""), no next page exists.
   * *   If NextToken is not empty, the next query is required, and the value is the token used to start the next query.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 00827261-20B7-4562-83F2-4DF39876A45A
   */
  requestId?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenKmsServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3455b9b4-95c1-419d-b310-db6a53b09a39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenKmsServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenKmsServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OpenKmsServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueRequest extends $tea.Model {
  /**
   * @remarks
   * The secret value. The value is encrypted and then stored in the new version.
   * 
   * This parameter is required.
   * 
   * @example
   * importantdata
   */
  secretData?: string;
  /**
   * @remarks
   * The type of the secret value. Valid values:
   * 
   * *   text: This is the default value.
   * *   binary
   * 
   * @example
   * text
   */
  secretDataType?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The new version of the secret value. Version numbers must be unique in each secret.
   * 
   * This parameter is required.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that are used to mark the new version. If you do not specify this parameter, Secrets Manager marks the new version with ACSCurrent.
   * 
   * @example
   * ["ACSCurrent","ACSNext"]
   */
  versionStages?: string;
  static names(): { [key: string]: string } {
    return {
      secretData: 'SecretData',
      secretDataType: 'SecretDataType',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretData: 'string',
      secretDataType: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f94ec9d3-2d10-4922-9a5c-5dcd5ebcb5e8
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The new version of the secret value.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that are used to mark the new version.
   */
  versionStages?: PutSecretValueResponseBodyVersionStages;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
      versionStages: PutSecretValueResponseBodyVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PutSecretValueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PutSecretValueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext that you want to re-encrypt.
   * 
   * You can set this parameter to the ciphertext that is returned after a symmetric or asymmetric encryption operation.
   * 
   * *   Symmetric encryption: the ciphertext returned after you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation
   * *   Asymmetric encryption: the public key-encrypted ciphertext returned after you call the [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation, or the ciphertext encrypted by using the public key of an asymmetric key pair outside KMS
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. This parameter specifies the EncryptionContext that is used to re-encrypt the decrypted data or data key.
   * 
   * @example
   * {"Example":"Example"}
   */
  destinationEncryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the symmetric CMK that is used to re-encrypt the ciphertext after the ciphertext is decrypted.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  destinationKeyId?: string;
  dryRun?: string;
  /**
   * @remarks
   * The encryption algorithm based on which the public key is used to encrypt the ciphertext specified by CiphertextBlob. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  sourceEncryptionAlgorithm?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify EncryptionContext when you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation to encrypt the data or data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * >  If you set CiphertextBlob to the ciphertext that is returned after a symmetric encryption operation, specify this parameter.
   * 
   * @example
   * {"Example":"Example"}
   */
  sourceEncryptionContext?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the ciphertext.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  sourceKeyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the ciphertext.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  sourceKeyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      destinationEncryptionContext: 'DestinationEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      dryRun: 'DryRun',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContext: 'SourceEncryptionContext',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      destinationEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      destinationKeyId: 'string',
      dryRun: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The ciphertext that you want to re-encrypt.
   * 
   * You can set this parameter to the ciphertext that is returned after a symmetric or asymmetric encryption operation.
   * 
   * *   Symmetric encryption: the ciphertext returned after you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation
   * *   Asymmetric encryption: the public key-encrypted ciphertext returned after you call the [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation, or the ciphertext encrypted by using the public key of an asymmetric key pair outside KMS
   * 
   * This parameter is required.
   * 
   * @example
   * ODZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmS7FmDBBQ0BkKsQrtRnidtPwirmDcS0ZuJCU41xxAAWk4Z8qsADfbV0b+i6kQmlvj79dJdGOvtX69Uycs901q********
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. This parameter specifies the EncryptionContext that is used to re-encrypt the decrypted data or data key.
   * 
   * @example
   * {"Example":"Example"}
   */
  destinationEncryptionContextShrink?: string;
  /**
   * @remarks
   * The ID of the symmetric CMK that is used to re-encrypt the ciphertext after the ciphertext is decrypted.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  destinationKeyId?: string;
  dryRun?: string;
  /**
   * @remarks
   * The encryption algorithm based on which the public key is used to encrypt the ciphertext specified by CiphertextBlob. For more information about encryption algorithms, see [AsymmetricDecrypt](https://help.aliyun.com/document_detail/148130.html).
   * 
   * Valid values:
   * 
   * *   RSAES_OAEP_SHA_256
   * *   RSAES_OAEP_SHA_1
   * *   SM2PKE
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * RSAES_OAEP_SHA_256
   */
  sourceEncryptionAlgorithm?: string;
  /**
   * @remarks
   * A JSON string that consists of key-value pairs. If you specify EncryptionContext when you call the [Encrypt](https://help.aliyun.com/document_detail/28949.html), [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html), [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html), or [GenerateAndExportDataKey](https://help.aliyun.com/document_detail/176804.html) operation to encrypt the data or data key, an equivalent value is required here. For more information, see [EncryptionContext](https://help.aliyun.com/document_detail/42975.html).
   * 
   * >  If you set CiphertextBlob to the ciphertext that is returned after a symmetric encryption operation, specify this parameter.
   * 
   * @example
   * {"Example":"Example"}
   */
  sourceEncryptionContextShrink?: string;
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the ciphertext.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 5c438b18-05be-40ad-b6c2-3be6752c****
   */
  sourceKeyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the ciphertext.
   * 
   * >  If you set CiphertextBlob to the public key-encrypted ciphertext that is returned after an asymmetric encryption operation, specify this parameter.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  sourceKeyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      destinationEncryptionContextShrink: 'DestinationEncryptionContext',
      destinationKeyId: 'DestinationKeyId',
      dryRun: 'DryRun',
      sourceEncryptionAlgorithm: 'SourceEncryptionAlgorithm',
      sourceEncryptionContextShrink: 'SourceEncryptionContext',
      sourceKeyId: 'SourceKeyId',
      sourceKeyVersionId: 'SourceKeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      destinationEncryptionContextShrink: 'string',
      destinationKeyId: 'string',
      dryRun: 'string',
      sourceEncryptionAlgorithm: 'string',
      sourceEncryptionContextShrink: 'string',
      sourceKeyId: 'string',
      sourceKeyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ciphertext re-encrypted.
   * 
   * @example
   * DZhOWVmZDktM2QxNi00ODk0LWJkNGYtMWZjNDNmM2YyYWJmaaSl+TztSIMe43nbTH/Z1Wr4XfLftKhAciUmDQXuMRl4WTvKhxjMThjK****
   */
  ciphertextBlob?: string;
  /**
   * @remarks
   * The ID of the CMK that is used to decrypt the original ciphertext.
   * 
   * This parameter is the globally unique ID of the CMK.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the CMK version that is used to decrypt the original ciphertext.
   * 
   * @example
   * 202b9877-5a25-46e3-a763-e20791b5****
   */
  keyVersionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 207596a2-36d3-4840-b1bd-f87044699bd7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ciphertextBlob: 'CiphertextBlob',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphertextBlob: 'string',
      keyId: 'string',
      keyVersionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReEncryptResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReEncryptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReEncryptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the secret you want to restore.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * e4885adf-548f-4ca5-8075-f540bbd3a55f
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestoreSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestoreSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret after the secret is rotated.
   * 
   * >  The version number is used to ensure the idempotence of the request. Secrets Manager uses this version number to prevent your application from creating the same version of the secret when the application retries a request. If a version number already exists, Secrets Manager ignores the request for rotation and returns a success message.
   * 
   * This parameter is required.
   * 
   * @example
   * 000000123
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secretName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretResponseBody extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the secret.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:secret/RdsSecret/Mysql5.4/MyCred
   */
  arn?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10257c86-269d-43aa-aaf3-90ed4144bb7c
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  /**
   * @remarks
   * The version number of the secret after the secret is rotated.
   * 
   * @example
   * 000000123
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      requestId: 'RequestId',
      secretName: 'SecretName',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      requestId: 'string',
      secretName: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RotateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RotateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RotateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 7906979c-8e06-46a2-be2d-68e3ccbc****
   */
  keyId?: string;
  /**
   * @remarks
   * The scheduled period after which the CMK is deleted. During this period, the CMK is in the PendingDeletion state. After this period ends, you cannot cancel the key deletion task.
   * 
   * Valid values: 7 to 366.
   * 
   * Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  pendingWindowInDays?: number;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      pendingWindowInDays: 'PendingWindowInDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      pendingWindowInDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3da5b8cc-8107-40ac-a170-793cd181d7b7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduleKeyDeletionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScheduleKeyDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScheduleKeyDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of deletion protection.
   * 
   * >  This parameter takes effect only when you set the EnableDeletionProtection parameter to true.
   * 
   * @example
   * This key is being used by XXX service. You are protected from deletion.
   */
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   true: enables deletion protection.
   * *   false: disables deletion protection.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableDeletionProtection?: boolean;
  /**
   * @remarks
   * The ARN of the CMK for which you want to set deletion protection.
   * 
   * You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the CMK ARN.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****
   */
  protectedResourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      deletionProtectionDescription: 'DeletionProtectionDescription',
      enableDeletionProtection: 'EnableDeletionProtection',
      protectedResourceArn: 'ProtectedResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionProtectionDescription: 'string',
      enableDeletionProtection: 'boolean',
      protectedResourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3455b9b4-95c1-419d-b310-db6a53b09a39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetDeletionProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetDeletionProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetDeletionProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetKeyPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key-hzz630494463ejqjx****
   */
  keyId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Statement":[{"Action":["kms:*"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:*"]},"Resource":["*"],"Sid":"kms default key policy"},{"Action":["kms:List*","kms:Describe*","kms:Create*","kms:Enable*","kms:Disable*","kms:Get*","kms:Set*","kms:Update*","kms:Delete*","kms:Cancel*","kms:TagResource","kms:UntagResource","kms:ImportKeyMaterial","kms:ScheduleKeyDeletion"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:user/for_test_policy"]},"Resource":["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @example
   * default
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      policy: 'Policy',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      policy: 'string',
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetKeyPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetKeyPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetKeyPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetKeyPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecretPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Version":"1","Statement": [{"Sid":"kms default secret policy","Effect":"Allow","Principal":{"RAM": ["acs:ram::119285303511****:*"]},"Action":["kms:*"],"Resource": ["*"] }] }
   */
  policy?: string;
  /**
   * @example
   * default
   */
  policyName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * secret_test
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      policyName: 'PolicyName',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      policyName: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecretPolicyResponseBody extends $tea.Model {
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSecretPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetSecretPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetSecretPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 770dbe42-e146-43d1-a55a-1355db86****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddf****
   */
  keyId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * >  You can configure only one of the KeyId, SecretName, and CertificateId parameters.
   * 
   * @example
   * MyDbC****
   */
  secretName?: string;
  /**
   * @remarks
   * One or more tags that you want to add. The value is in the array format.
   * 
   * Tag attributes:
   * 
   * *   TagKey: the tag key.
   * *   TagValue: the tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      keyId: 'KeyId',
      secretName: 'SecretName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      keyId: 'string',
      secretName: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/601478.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources to which you want to add tags. You can enter a maximum of 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId. 1","ResourceId. 2",...]` format.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to which you want to add tags. Valid values:
   * 
   * *   key
   * *   secret
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags. You can enter up to 20 tags.
   * 
   * A tag consists of a key-value pair. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 598d0219-45cd-4477-84ad-85a52d9debcf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceRequest extends $tea.Model {
  /**
   * @example
   * 770dbe42-e146-43d1-a55a-1355db86****
   */
  certificateId?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddf****
   */
  keyId?: string;
  /**
   * @example
   * MyDbC****
   */
  secretName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["tagkey1","tagkey2"]
   */
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      keyId: 'KeyId',
      secretName: 'SecretName',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      keyId: 'string',
      secretName: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from resources. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * >  This parameter takes effect only when you specify an empty tag key.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/601478.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources from which you want to remove tags. You can enter up to 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId.1","ResourceId.2",...]` format.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags. Valid values:
   * 
   * *   key
   * *   secret
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags that you want to remove. You can enter up to 20 tag keys.
   * 
   * Enter multiple tag keys in the `["key.1","key.2",...]` format.
   * 
   * >  The tag key cannot start with aliyun or acs:.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * b1f210dc-e52c-4a86-b9dd-7492343d46c7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The alias that you want to bind.
   * 
   * The value must be 1 to 255 characters in length and must include the alias/ prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * alias/example
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1d2baaf3-d357-46c2-832e-13560c2bd9cd
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointRequest extends $tea.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy that you want to update.
   * > You can associate up to three permission policies with each AAP.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      policies: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * bcfefe15-46f0-44a3-bd96-3d422474b71a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAccessPointResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateApplicationAccessPointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateApplicationAccessPointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 9a28de48-8d8b-484d-a766-dec4****
   */
  certificateId?: string;
  /**
   * @remarks
   * The status of the certificate. Valid values:
   * 
   * *   INACTIVE: The certificate is disabled.
   * 
   * *   ACTIVE: The certificate is enabled.
   * 
   * *   REVOKED: The certificate is revoked.
   * 
   * > If the certificate is in the REVOKED state, you can use the certificate only to verify a signature, but not to generate a signature.
   * 
   * This parameter is required.
   * 
   * @example
   * INACTIVE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * e3f57fe0-9ded-40b0-9caf-a3815f2148c1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCertificateStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCertificateStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCertificateStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionRequest extends $tea.Model {
  /**
   * @remarks
   * The description of the CMK. This description includes the purpose of the CMK, such as the types of data that you want to protect and applications that can use the CMK.
   * 
   * This parameter is required.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3455b9b4-95c1-419d-b310-db6a53b09a39
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKeyDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKeyDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateKeyDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcRequest extends $tea.Model {
  /**
   * @remarks
   * The VPC configuration. The configuration of each VPC contains the following content:
   * 
   * *   VpcId: the ID of the VPC.
   * *   VSwitchId: the vSwitch in the VPC.
   * *   RegionID: the ID of the region to which the VPC belongs.
   * *   VpcOwnerId: the Alibaba Cloud account to which the VPC belongs.
   * 
   * Format: `[{"VpcId":"${VpcId}","VSwitchId":"${VSwitchId}","RegionId":"${RegionId}","VpcOwnerId":${VpcOwnerId}},..]`.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"VpcId":"vpc-bp1go9qvmj78j4f4c****","VSwitchId":"vsw-bp16c5pvvcf0fp5b9****","RegionId":"cn-hangzhou","VpcOwnerId":120708975881****},{"VpcId":"vpc-bp14c07ucxg6h1xjm****","VSwitchId":"vsw-bp1wujtnspi1l3gvu****","RegionId":"cn-hangzhou","VpcOwnerId":119285303511****}]
   */
  bindVpcs?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * This parameter is required.
   * 
   * @example
   * kst-phzz64f722a1buamw0****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: 'string',
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * d3eca5c8-a856-4347-8eb6-e1898c3fda2e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKmsInstanceBindVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateKmsInstanceBindVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateKmsInstanceBindVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleRequest extends $tea.Model {
  /**
   * @remarks
   * The description after the update.
   * 
   * @example
   * Creat by kst-hzz62ee817bvyyr5****
   */
  description?: string;
  /**
   * @remarks
   * The name of the access control rule that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The private IP address or CIDR block after the update. Separate multiple items with commas (,).
   * 
   * @example
   * ["192.10.XX.XX","192.168.XX.XX/24"]
   */
  sourcePrivateIp?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      sourcePrivateIp: 'SourcePrivateIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      sourcePrivateIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 3bf02f7a-015b-4f34-be0f-cc043fda2d85
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNetworkRuleResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNetworkRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNetworkRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The access control rule.
   * 
   * > For more information about how to query created access control rules, see [ListNetworkRules](https://help.aliyun.com/document_detail/2539433.html).
   * 
   * @example
   * {"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}
   */
  accessControlRules?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * policy  description
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission policy that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * policy_test
   */
  name?: string;
  /**
   * @remarks
   * The operations that are supported by the updated policy. Valid values:
   * 
   * *   RbacPermission/Template/CryptoServiceKeyUser: allows you to perform cryptographic operations.
   * *   RbacPermission/Template/CryptoServiceSecretUser: allows you to perform secret-related operations.
   * 
   * You can select both.
   * 
   * @example
   * ["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]
   */
  permissions?: string;
  /**
   * @remarks
   * The key and secret that are allowed to access after the update.
   * 
   * *   Key: Enter a key in the `key/${KeyId}` format. To allow access to all keys of a KMS instance, enter key/\\*.
   * *   Secret: Enter a secret in the `secret/${SecretName}` format. To allow access to all secrets of a KMS instance, enter secret/\\*.
   * 
   * @example
   * ["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]
   */
  resources?: string;
  static names(): { [key: string]: string } {
    return {
      accessControlRules: 'AccessControlRules',
      description: 'Description',
      name: 'Name',
      permissions: 'Permissions',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlRules: 'string',
      description: 'string',
      name: 'string',
      permissions: 'string',
      resources: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * f455324b-e229-4066-9f58-9c1cf3fe83a8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic key rotation. Valid values:
   * 
   * *   true: enables automatic key rotation.
   * *   false: disables automatic key rotation.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The ID of the customer master key (CMK). The ID must be globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The period of automatic key rotation. Specify the value in the integer[unit] format. The following units are supported: d (day), h (hour), m (minute), and s (second). For example, you can use either 7d or 604800s to specify a seven-day period. The period can range from 7 days to 730 days.
   * 
   * >  If you set the EnableAutomaticRotation parameter to true, you must also specify this parameter. If you set the EnableAutomaticRotation parameter to false, you can leave this parameter unspecified.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      keyId: 'KeyId',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      keyId: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * efb1cbbd-a093-4278-bc03-639dd4fcc207
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRotationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequest extends $tea.Model {
  extendedConfig?: UpdateSecretRequestExtendedConfig;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * datainfo
   */
  description?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      description: 'Description',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: UpdateSecretRequestExtendedConfig,
      description: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretShrinkRequest extends $tea.Model {
  extendedConfig?: UpdateSecretShrinkRequestExtendedConfig;
  /**
   * @remarks
   * The description of the secret.
   * 
   * @example
   * datainfo
   */
  description?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      description: 'Description',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: UpdateSecretShrinkRequestExtendedConfig,
      description: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic rotation. Valid values:
   * 
   * *   true: enables automatic rotation.
   * *   false: does not enable automatic rotation. This is the default value.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableAutomaticRotation?: boolean;
  /**
   * @remarks
   * The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
   * 
   * The value is in the `integer[unit]` format.````
   * 
   * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
   * 
   * >  This parameter is required if you set the EnableAutomaticRotation parameter to true. This parameter is ignored if you set the EnableAutomaticRotation parameter to false or does not specify the EnableAutomaticRotation parameter.
   * 
   * @example
   * 30d
   */
  rotationInterval?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      enableAutomaticRotation: 'EnableAutomaticRotation',
      rotationInterval: 'RotationInterval',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutomaticRotation: 'boolean',
      rotationInterval: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 2c124f6f-4210-499f-b88a-69f54004d2d8
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * RdsSecret/Mysql5.4/MyCred
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRotationPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretRotationPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretRotationPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageRequest extends $tea.Model {
  /**
   * @remarks
   * The version from which you want to remove the specified stage label.
   * 
   * >  You must specify at least one of the RemoveFromVersion and MoveToVersion parameters.
   * 
   * @example
   * 002
   */
  moveToVersion?: string;
  /**
   * @remarks
   * The specified stage label. Valid values:
   * 
   * *   ACSCurrent
   * *   ACSPrevious
   * *   Custom stage label
   * 
   * @example
   * 001
   */
  removeFromVersion?: string;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **UpdateSecretVersionStage**.
   * 
   * This parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The name of the secret.
   * 
   * This parameter is required.
   * 
   * @example
   * ACSCurrent
   */
  versionStage?: string;
  static names(): { [key: string]: string } {
    return {
      moveToVersion: 'MoveToVersion',
      removeFromVersion: 'RemoveFromVersion',
      secretName: 'SecretName',
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moveToVersion: 'string',
      removeFromVersion: 'string',
      secretName: 'string',
      versionStage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the secret.
   * 
   * @example
   * 8cad259f-4d77-40ec-bbd7-b9c47a423bb9
   */
  requestId?: string;
  /**
   * @remarks
   * The version to which you want to apply the specified stage label.
   * 
   * > * You must specify at least one of the RemoveFromVersion and MoveToVersion parameters.
   * > * If the VersionStage parameter is set to ACSCurrent or ACSPrevious, this parameter is required.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      secretName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretVersionStageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecretVersionStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecretVersionStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateRequest extends $tea.Model {
  /**
   * @remarks
   * The certificate issued by the CA, which is in the Privacy Enhanced Mail (PEM) format.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (X.509 Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificate?: string;
  /**
   * @remarks
   * The certificate chain issued by the CA, which is in the PEM format.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Sub CA Certificate PEM Content)  -----END CERTIFICATE-----  -----BEGIN CERTIFICATE-----  (Root CA Certificate PEM Content)  -----END CERTIFICATE-----
   */
  certificateChain?: string;
  /**
   * @remarks
   * The ID of the certificate. The ID must be globally unique in Certificates Manager.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      certificateChain: 'CertificateChain',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      certificateChain: 'string',
      certificateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 15a735a1-8fe6-45cc-a64c-3c4ff839334e
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadCertificateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadCertificateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadCertificateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyResponseBodyKeyMetadata extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the key.
   * 
   * @example
   * acs:kms:cn-qingdao:154035569884****:key/key-hzz62f1cb66fa42qo****
   */
  arn?: string;
  /**
   * @remarks
   * The status of automatic key rotation. Valid values:
   * 
   * - Enabled
   * - Disabled
   * - Suspended
   * 
   * @example
   * Enabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The date and time (UTC) when the key was created.
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The user who created the key.
   * 
   * @example
   * 154035569884****
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The time when the key is scheduled for deletion. For more information, see ScheduleKeyDeletion.
   * 
   * This parameter is returned only when the value of KeyState is PendingDeletion.
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The description of the key.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The globally unique ID of the key.
   * 
   * @example
   * key-hzz62f1cb66fa42qo****
   */
  keyId?: string;
  /**
   * @remarks
   * The specification of the key.
   * 
   * @example
   * Aliyun_AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The status of the key.
   * 
   * For more information, see [Impacts of key status on API operations](https://help.aliyun.com/document_detail/44211.html).
   * 
   * @example
   * Enabled
   */
  keyState?: string;
  /**
   * @remarks
   * The usage of the key.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time when the last rotation was performed. The time is displayed in UTC.
   * 
   * For a new key, this parameter value is the time when the initial version of the key was generated.
   * 
   * @example
   * 2023-03-25T10:00:00Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the key material expires. The time is displayed in UTC.
   * 
   * If this parameter value is empty, the key material does not expire.
   * 
   * @example
   * 2025-03-25T10:00:00Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time when the key is next rotated.
   * 
   * This value is returned only when the value of AutomaticRotation is Enabled or Suspended.
   * 
   * @example
   * 2024-03-25T10:00:00Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The key material origin.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The current primary version identifier of the key.
   * 
   * @example
   * 7ce1d081-06cb-42e6-aab6-5c5de030****
   */
  primaryKeyVersion?: string;
  /**
   * @remarks
   * The protection level of the key.
   * 
   * @example
   * SOFTWARE
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The interval for automatic key rotation. Unit: seconds. The format is an integer value followed by the character s. For example, if the rotation period is seven days, this parameter is set to 604800s.
   * 
   * This value is returned only when the value of AutomaticRotation is Enabled or Suspended.
   * 
   * @example
   * 31536000s
   */
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      creationDate: 'CreationDate',
      creator: 'Creator',
      DKMSInstanceId: 'DKMSInstanceId',
      deleteDate: 'DeleteDate',
      description: 'Description',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
      lastRotationDate: 'LastRotationDate',
      materialExpireTime: 'MaterialExpireTime',
      nextRotationDate: 'NextRotationDate',
      origin: 'Origin',
      primaryKeyVersion: 'PrimaryKeyVersion',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      creationDate: 'string',
      creator: 'string',
      DKMSInstanceId: 'string',
      deleteDate: 'string',
      description: 'string',
      keyId: 'string',
      keySpec: 'string',
      keyState: 'string',
      keyUsage: 'string',
      lastRotationDate: 'string',
      materialExpireTime: 'string',
      nextRotationDate: 'string',
      origin: 'string',
      primaryKeyVersion: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKeyVersionResponseBodyKeyVersion extends $tea.Model {
  /**
   * @remarks
   * The date and time when the version was created. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-02T10:38:27Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  /**
   * @remarks
   * The ID of the version.
   * 
   * @example
   * c0a3d5dc-0b47-4199-a050-b289349a****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyResponseBodyKeyMetadata extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the CMK.
   * 
   * @example
   * acs:kms:cn-hangzhou:154035569884****:key/05754286-3ba2-4fa6-8d41-4323aca6****
   */
  arn?: string;
  /**
   * @remarks
   * Indicates whether automatic key rotation is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * *   Suspended
   * 
   * For more information, see [Automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * 
   * >  Only symmetric CMKs support automatic key rotation.
   * 
   * @example
   * Disabled
   */
  automaticRotation?: string;
  /**
   * @remarks
   * The time when the CMK was created. The time is displayed in UTC.
   * 
   * @example
   * 2021-05-20T06:34:21Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The Alibaba Cloud account that is used to create the CMK.
   * 
   * @example
   * 154035569884****
   */
  creator?: string;
  /**
   * @remarks
   * The ID of the dedicated KMS instance.
   * 
   * @example
   * kst-bjj62d8f5e0sgtx8h****
   */
  DKMSInstanceId?: string;
  /**
   * @remarks
   * The time at which the CMK is scheduled for deletion. The time is displayed in UTC.
   * 
   * For more information, see [ScheduleKeyDeletion](https://help.aliyun.com/document_detail/44196.html).
   * 
   * >  This parameter is returned only when the value of the KeyState parameter is PendingDeletion.
   * 
   * @example
   * 2021-05-26T18:22:03Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   Enabled
   * *   Disabled
   * 
   * @example
   * Enabled
   */
  deletionProtection?: string;
  /**
   * @remarks
   * The description of deletion protection.
   * 
   * @example
   * The CMK is being used by XXX. Deletion protection is set.
   */
  deletionProtectionDescription?: string;
  /**
   * @remarks
   * The description of the CMK.
   * 
   * @example
   * key description example
   */
  description?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 05754286-3ba2-4fa6-8d41-4323aca6****
   */
  keyId?: string;
  /**
   * @remarks
   * The type of the CMK.
   * 
   * @example
   * Aliyun_AES_256
   */
  keySpec?: string;
  /**
   * @remarks
   * The status of the CMK.
   * 
   * For more information, see [Impact of CMK status on API operations](https://help.aliyun.com/document_detail/44211.html).
   * 
   * @example
   * Enabled
   */
  keyState?: string;
  /**
   * @remarks
   * The usage of the CMK.
   * 
   * @example
   * ENCRYPT/DECRYPT
   */
  keyUsage?: string;
  /**
   * @remarks
   * The time when the last rotation was performed. The time is displayed in UTC. For a new CMK, the value of this parameter is the time when the initial version of the CMK was generated.
   * 
   * @example
   * 2021-05-20T06:34:21Z
   */
  lastRotationDate?: string;
  /**
   * @remarks
   * The time when the key material expires. The time is displayed in UTC. If this parameter value is empty, the key material does not expire.
   * 
   * @example
   * 2021-07-06T18:22:03Z
   */
  materialExpireTime?: string;
  /**
   * @remarks
   * The time when the next rotation will be performed.
   * 
   * >  This parameter is returned only when the value of the AutomaticRotation parameter is Enabled or Suspended.
   * 
   * @example
   * 2021-07-06T18:22:03Z
   */
  nextRotationDate?: string;
  /**
   * @remarks
   * The source of the key material for the CMK.
   * 
   * @example
   * Aliyun_KMS
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the current primary key version for the symmetric CMK.
   * 
   * @example
   * 515e0b0a-624f-45ab-92b5-54f9b551****
   */
  primaryKeyVersion?: string;
  /**
   * @remarks
   * The protection level of the CMK.
   * 
   * @example
   * HSM
   */
  protectionLevel?: string;
  /**
   * @remarks
   * The interval for automatic key rotation.
   * 
   * Unit: seconds.
   * 
   * For example, if the value is 604800s, automatic key rotation is performed at a 7-day interval.
   * 
   * >  This parameter is returned only when the value of the AutomaticRotation parameter is Enabled or Suspended.
   * 
   * @example
   * 31536000s
   */
  rotationInterval?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      automaticRotation: 'AutomaticRotation',
      creationDate: 'CreationDate',
      creator: 'Creator',
      DKMSInstanceId: 'DKMSInstanceId',
      deleteDate: 'DeleteDate',
      deletionProtection: 'DeletionProtection',
      deletionProtectionDescription: 'DeletionProtectionDescription',
      description: 'Description',
      keyId: 'KeyId',
      keySpec: 'KeySpec',
      keyState: 'KeyState',
      keyUsage: 'KeyUsage',
      lastRotationDate: 'LastRotationDate',
      materialExpireTime: 'MaterialExpireTime',
      nextRotationDate: 'NextRotationDate',
      origin: 'Origin',
      primaryKeyVersion: 'PrimaryKeyVersion',
      protectionLevel: 'ProtectionLevel',
      rotationInterval: 'RotationInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      automaticRotation: 'string',
      creationDate: 'string',
      creator: 'string',
      DKMSInstanceId: 'string',
      deleteDate: 'string',
      deletionProtection: 'string',
      deletionProtectionDescription: 'string',
      description: 'string',
      keyId: 'string',
      keySpec: 'string',
      keyState: 'string',
      keyUsage: 'string',
      lastRotationDate: 'string',
      materialExpireTime: 'string',
      nextRotationDate: 'string',
      origin: 'string',
      primaryKeyVersion: 'string',
      protectionLevel: 'string',
      rotationInterval: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKeyVersionResponseBodyKeyVersion extends $tea.Model {
  /**
   * @remarks
   * The date and time when the CMK version was created. The time is displayed in UTC.
   * 
   * @example
   * 2016-03-25T10:42:40Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter in the request to an alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 1234abcd-12ab-34cd-56ef-12345678****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * @example
   * 2ab1a983-7072-4bbc-a582-584b5bd8****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegionsRegion extends $tea.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  region?: DescribeRegionsResponseBodyRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * val1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecretResponseBodyTags extends $tea.Model {
  tag?: DescribeSecretResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeSecretResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc extends $tea.Model {
  /**
   * @remarks
   * The region to which the VPC belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1i512amhdje10f1****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp19z7djuhtad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 190325303126****
   */
  vpcOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      vpcOwnerId: 'VpcOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstanceBindVpcs extends $tea.Model {
  bindVpc?: GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc[];
  static names(): { [key: string]: string } {
    return {
      bindVpc: 'BindVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpc: { 'type': 'array', 'itemType': GetKmsInstanceResponseBodyKmsInstanceBindVpcsBindVpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKmsInstanceResponseBodyKmsInstance extends $tea.Model {
  /**
   * @remarks
   * A list of associated VPCs.
   * 
   * >  If your self-managed applications are deployed in multiple VPCs in the same region, you can associate VPCs with the KMS instance beyond the VPC that you specify when you enable the KMS instance. The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, self-managed applications in the VPCs can access the specified KMS instance.
   */
  bindVpcs?: GetKmsInstanceResponseBodyKmsInstanceBindVpcs;
  /**
   * @remarks
   * The content of the certificate authority (CA) certificate of the KMS instance.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\r\\nMIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCSqGSIb3DQEBCwUAMHQxCzAJBgNV****-----END CERTIFICATE-----
   */
  caCertificateChainPem?: string;
  /**
   * @remarks
   * The time when the KMS instance is created.
   * 
   * @example
   * 2023-09-05T12:44:20Z
   */
  createTime?: string;
  /**
   * @remarks
   * The expiration time of the KMS instance.
   * 
   * @example
   * 2023-10-05T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the KMS instance.
   * 
   * @example
   * kst-bjj62f5ba3dnpb6v8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The number of keys that can be created for the KMS instance.
   * 
   * @example
   * 1000
   */
  keyNum?: number;
  /**
   * @remarks
   * The number of secrets that can be created for the KMS instance.
   * 
   * @example
   * 10
   */
  secretNum?: string;
  /**
   * @remarks
   * The computing performance of the KMS instance.
   * 
   * @example
   * 1000
   */
  spec?: number;
  /**
   * @remarks
   * The time when the KMS instance is enabled.
   * 
   * @example
   * 2023-09-05T12:44:19Z
   */
  startDate?: string;
  /**
   * @remarks
   * The status of the KMS instance. Valid values:
   * 
   * *   Uninitialized: The KMS instance is not enabled.
   * *   Connecting: The KMS instance is being connected.
   * *   Connected: The KMS instance is enabled.
   * *   Disconnected: The KMS instance is disconnected.
   * *   Error: The KMS instance is abnormal.
   * 
   * @example
   * Connected
   */
  status?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) with which the KMS instance is associated.
   * 
   * @example
   * vpc-bp19z7cwmltad5dff****
   */
  vpcId?: string;
  /**
   * @remarks
   * The access management quota for the KMS instance.
   * 
   * @example
   * 5
   */
  vpcNum?: number;
  /**
   * @remarks
   * The vSwitch in the VPC.
   * 
   * @example
   * vsw-bp1i512amda6d10a0****
   */
  vswitchIds?: string;
  /**
   * @remarks
   * The zone with which the KMS instance is associated.
   * 
   * @example
   * "cn-hangzhou-k",       "cn-hangzhou-j"
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      bindVpcs: 'BindVpcs',
      caCertificateChainPem: 'CaCertificateChainPem',
      createTime: 'CreateTime',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      keyNum: 'KeyNum',
      secretNum: 'SecretNum',
      spec: 'Spec',
      startDate: 'StartDate',
      status: 'Status',
      vpcId: 'VpcId',
      vpcNum: 'VpcNum',
      vswitchIds: 'VswitchIds',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindVpcs: GetKmsInstanceResponseBodyKmsInstanceBindVpcs,
      caCertificateChainPem: 'string',
      createTime: 'string',
      endDate: 'string',
      instanceId: 'string',
      instanceName: 'string',
      keyNum: 'number',
      secretNum: 'string',
      spec: 'number',
      startDate: 'string',
      status: 'string',
      vpcId: 'string',
      vpcNum: 'number',
      vswitchIds: 'string',
      zoneIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecretValueResponseBodyVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliasesAlias extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the alias.
   * 
   * @example
   * acs:kms:cn-hangzhou:123456:alias/ExampleAlias1
   */
  aliasArn?: string;
  /**
   * @remarks
   * The ID of the alias.
   * 
   * @example
   * alias/ExampleAlias1
   */
  aliasName?: string;
  /**
   * @remarks
   * The CMK to which the alias belongs.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliases extends $tea.Model {
  alias?: ListAliasesResponseBodyAliasesAlias[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': ListAliasesResponseBodyAliasesAlias },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBodyAliasesAlias extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the alias.
   * 
   * @example
   * acs:kms:cn-hangzhou:123456:alias/ExampleAlias1
   */
  aliasArn?: string;
  /**
   * @remarks
   * The ID of the alias.
   * 
   * @example
   * alias/ExampleAlias1
   */
  aliasName?: string;
  /**
   * @remarks
   * The CMK to which an alias is bound.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      aliasArn: 'AliasArn',
      aliasName: 'AliasName',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasArn: 'string',
      aliasName: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesByKeyIdResponseBodyAliases extends $tea.Model {
  alias?: ListAliasesByKeyIdResponseBodyAliasesAlias[];
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': ListAliasesByKeyIdResponseBodyAliasesAlias },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint extends $tea.Model {
  /**
   * @remarks
   * The authentication method.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * @example
   * aap_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationAccessPointsResponseBodyApplicationAccessPoints extends $tea.Model {
  applicationAccessPoint?: ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint[];
  static names(): { [key: string]: string } {
    return {
      applicationAccessPoint: 'ApplicationAccessPoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccessPoint: { 'type': 'array', 'itemType': ListApplicationAccessPointsResponseBodyApplicationAccessPointsApplicationAccessPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClientKeysResponseBodyClientKeys extends $tea.Model {
  /**
   * @remarks
   * The name of the AAP.
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
   * Currently, only KMS is supported. The value is fixed as KMS_PROVIDED.
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
   * The public key of the client key.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDcjCCAlqgAwIBAgIQT/sAVRxwYp54mrw****-----END CERTIFICATE-----
   */
  publicKeyData?: string;
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBodyKeyVersionsKeyVersion extends $tea.Model {
  /**
   * @remarks
   * The date and time when the CMK version was created. The time is displayed in UTC.
   * 
   * @example
   * 2016-03-25T10:42:40Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to the alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * @example
   * 1e3304fd-68ac-4d5b-8886-ae5f01a1****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBodyKeyVersions extends $tea.Model {
  keyVersion?: ListKeyVersionsResponseBodyKeyVersionsKeyVersion[];
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: { 'type': 'array', 'itemType': ListKeyVersionsResponseBodyKeyVersionsKeyVersion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBodyKeysKey extends $tea.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the CMK.
   * 
   * @example
   * acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81****
   */
  keyArn?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyArn: 'KeyArn',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyArn: 'string',
      keyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBodyKeys extends $tea.Model {
  key?: ListKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListKeysResponseBodyKeysKey },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBodyKmsInstancesKmsInstance extends $tea.Model {
  /**
   * @remarks
   * The ARN of the KMS instance.
   * 
   * @example
   * acs:kms:pre-hangzhou:120708975881****:keystore/kst-phzz64c9f84eo32dbs****
   */
  kmsInstanceArn?: string;
  /**
   * @remarks
   * The ID of the KMS instance.
   * 
   * @example
   * kst-phzz64c9f84eo32dbs****
   */
  kmsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsInstanceArn: 'KmsInstanceArn',
      kmsInstanceId: 'KmsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstanceArn: 'string',
      kmsInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKmsInstancesResponseBodyKmsInstances extends $tea.Model {
  kmsInstance?: ListKmsInstancesResponseBodyKmsInstancesKmsInstance[];
  static names(): { [key: string]: string } {
    return {
      kmsInstance: 'KmsInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsInstance: { 'type': 'array', 'itemType': ListKmsInstancesResponseBodyKmsInstancesKmsInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBodyNetworkRulesNetworkRule extends $tea.Model {
  /**
   * @remarks
   * The name of the access control rule.
   * 
   * @example
   * networkrule_test
   */
  name?: string;
  /**
   * @remarks
   * The network type. The value is fixed as Private. Self-managed applications can access KMS instances only over a private virtual private cloud (VPC).
   * 
   * @example
   * Private
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkRulesResponseBodyNetworkRules extends $tea.Model {
  networkRule?: ListNetworkRulesResponseBodyNetworkRulesNetworkRule[];
  static names(): { [key: string]: string } {
    return {
      networkRule: 'NetworkRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkRule: { 'type': 'array', 'itemType': ListNetworkRulesResponseBodyNetworkRulesNetworkRule },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPoliciesPolicy extends $tea.Model {
  /**
   * @remarks
   * The name of the permission policy.
   * 
   * @example
   * policy_test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPoliciesResponseBodyPolicies extends $tea.Model {
  policy?: ListPoliciesResponseBodyPoliciesPolicy[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: { 'type': 'array', 'itemType': ListPoliciesResponseBodyPoliciesPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyTagsTag extends $tea.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * @example
   * 33caea95-c3e5-4b3e-a9c6-cec76e4e****
   */
  keyId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Project
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyTags extends $tea.Model {
  tag?: ListResourceTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListResourceTagsResponseBodyTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIdsVersionId extends $tea.Model {
  /**
   * @remarks
   * The time when the secret version was created.
   * 
   * @example
   * 2020-02-21T15:39:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 00000000000000000000000000000000203
   */
  versionId?: string;
  /**
   * @remarks
   * The stage labels that mark the secret version.
   */
  versionStages?: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      versionId: 'VersionId',
      versionStages: 'VersionStages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      versionId: 'string',
      versionStages: ListSecretVersionIdsResponseBodyVersionIdsVersionIdVersionStages,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretVersionIdsResponseBodyVersionIds extends $tea.Model {
  versionId?: ListSecretVersionIdsResponseBodyVersionIdsVersionId[];
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: { 'type': 'array', 'itemType': ListSecretVersionIdsResponseBodyVersionIdsVersionId },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecretTagsTag extends $tea.Model {
  /**
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @example
   * val1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecretTags extends $tea.Model {
  tag?: ListSecretsResponseBodySecretListSecretTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecretTagsTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretListSecret extends $tea.Model {
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 2022-07-17T07:59:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * The resource tags of the secret.
   * 
   * This parameter is not returned if you set the FetchTags parameter to false or do not specify the FetchTags parameter.
   * 
   * @example
   * 2022-08-17T07:59:05Z
   */
  plannedDeleteTime?: string;
  /**
   * @remarks
   * The type of the secret. Valid values:
   * 
   * *   Generic: indicates a generic secret.
   * *   Rds: indicates a managed ApsaraDB RDS secret.
   * 
   * @example
   * secret001
   */
  secretName?: string;
  /**
   * @remarks
   * The time when the secret was created.
   * 
   * @example
   * Generic
   */
  secretType?: string;
  /**
   * @remarks
   * The tag key.
   */
  tags?: ListSecretsResponseBodySecretListSecretTags;
  /**
   * @remarks
   * The time when the secret is scheduled to be deleted.
   * 
   * @example
   * 2022-07-17T07:59:05Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      plannedDeleteTime: 'PlannedDeleteTime',
      secretName: 'SecretName',
      secretType: 'SecretType',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      plannedDeleteTime: 'string',
      secretName: 'string',
      secretType: 'string',
      tags: ListSecretsResponseBodySecretListSecretTags,
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecretsResponseBodySecretList extends $tea.Model {
  secret?: ListSecretsResponseBodySecretListSecret[];
  static names(): { [key: string]: string } {
    return {
      secret: 'Secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secret: { 'type': 'array', 'itemType': ListSecretsResponseBodySecretListSecret },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * >  The key cannot start with aliyun or acs:.
   * 
   * @example
   * disk-encryption
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * key-hzz62f1cb66fa42qo****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * disk-encryption
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * true
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutSecretValueResponseBodyVersionStages extends $tea.Model {
  versionStage?: string[];
  static names(): { [key: string]: string } {
    return {
      versionStage: 'VersionStage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionStage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * Each key can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
   * 
   * >  The key cannot start with aliyun or acs:.
   * 
   * @example
   * disk-encryption
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * Each value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretRequestExtendedConfig extends $tea.Model {
  /**
   * @remarks
   * The custom data in the extended configuration of the secret.
   * 
   * > *   If this parameter is specified, the existing extended configuration of the secret is updated.
   * > *   This parameter is unavailable for generic secrets.
   * 
   * @example
   * {"DBName":"app1","Port":"3306"}
   */
  customData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecretShrinkRequestExtendedConfig extends $tea.Model {
  /**
   * @remarks
   * The custom data in the extended configuration of the secret.
   * 
   * > *   If this parameter is specified, the existing extended configuration of the secret is updated.
   * > *   This parameter is unavailable for generic secrets.
   * 
   * @example
   * {"DBName":"app1","Port":"3306"}
   */
  customData?: string;
  static names(): { [key: string]: string } {
    return {
      customData: 'CustomData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._productId = "Kms";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("kms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Decrypts data by using an asymmetric key.
   * 
   * @remarks
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists supported encryption algorithms. 
   * | KeySpec | Algorithm | Description | Maximum length in bytes |
   * | ------- | --------- | ----------- | ----------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 256 |
   * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 256 |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 384 |
   * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 384 |
   * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6144 |
   * In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the decryption algorithm `RSAES_OAEP_SHA_1` are used to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`.
   * 
   * @param request - AsymmetricDecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsymmetricDecryptResponse
   */
  async asymmetricDecryptWithOptions(request: AsymmetricDecryptRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricDecryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricDecrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricDecryptResponse>(await this.callApi(params, req, runtime), new AsymmetricDecryptResponse({}));
    } else {
      return $tea.cast<AsymmetricDecryptResponse>(await this.execute(params, req, runtime), new AsymmetricDecryptResponse({}));
    }

  }

  /**
   * Decrypts data by using an asymmetric key.
   * 
   * @remarks
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists supported encryption algorithms. 
   * | KeySpec | Algorithm | Description | Maximum length in bytes |
   * | ------- | --------- | ----------- | ----------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 256 |
   * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 256 |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 384 |
   * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 384 |
   * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6144 |
   * In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the decryption algorithm `RSAES_OAEP_SHA_1` are used to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==`.
   * 
   * @param request - AsymmetricDecryptRequest
   * @returns AsymmetricDecryptResponse
   */
  async asymmetricDecrypt(request: AsymmetricDecryptRequest): Promise<AsymmetricDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricDecryptWithOptions(request, runtime);
  }

  /**
   * Encrypts data by using an asymmetric customer master key (CMK).
   * 
   * @remarks
   * This operation is supported only for asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists the supported encryption algorithms: 
   * | KeySpec | Algorithm | Description | Maximum number of bytes that can be encrypted |
   * | ------- | --------- | ----------- | --------------------------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 190 |
   * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 214 |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 318 |
   * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 342 |
   * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6047 |
   * You can use the asymmetric CMK whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the algorithm `RSAES_OAEP_SHA_1` to encrypt the plaintext `SGVsbG8gd29ybGQ=` based on the parameter settings provided in this topic.
   * 
   * @param request - AsymmetricEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsymmetricEncryptResponse
   */
  async asymmetricEncryptWithOptions(request: AsymmetricEncryptRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricEncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricEncryptResponse>(await this.callApi(params, req, runtime), new AsymmetricEncryptResponse({}));
    } else {
      return $tea.cast<AsymmetricEncryptResponse>(await this.execute(params, req, runtime), new AsymmetricEncryptResponse({}));
    }

  }

  /**
   * Encrypts data by using an asymmetric customer master key (CMK).
   * 
   * @remarks
   * This operation is supported only for asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table lists the supported encryption algorithms: 
   * | KeySpec | Algorithm | Description | Maximum number of bytes that can be encrypted |
   * | ------- | --------- | ----------- | --------------------------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 190 |
   * | RSA_2048 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 214 |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256 | 318 |
   * | RSA_3072 | RSAES_OAEP_SHA_1 | RSAES-OAEP using SHA1 and MGF1 with SHA1 | 342 |
   * | EC_SM2 | SM2PKE | SM2 public key encryption algorithm based on elliptic curves | 6047 |
   * You can use the asymmetric CMK whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the algorithm `RSAES_OAEP_SHA_1` to encrypt the plaintext `SGVsbG8gd29ybGQ=` based on the parameter settings provided in this topic.
   * 
   * @param request - AsymmetricEncryptRequest
   * @returns AsymmetricEncryptResponse
   */
  async asymmetricEncrypt(request: AsymmetricEncryptRequest): Promise<AsymmetricEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricEncryptWithOptions(request, runtime);
  }

  /**
   * AsymmetricSign
   * 
   * @remarks
   * Generates a signature by using an asymmetric key.
   * 
   * @param request - AsymmetricSignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsymmetricSignResponse
   */
  async asymmetricSignWithOptions(request: AsymmetricSignRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricSignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricSign",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricSignResponse>(await this.callApi(params, req, runtime), new AsymmetricSignResponse({}));
    } else {
      return $tea.cast<AsymmetricSignResponse>(await this.execute(params, req, runtime), new AsymmetricSignResponse({}));
    }

  }

  /**
   * AsymmetricSign
   * 
   * @remarks
   * Generates a signature by using an asymmetric key.
   * 
   * @param request - AsymmetricSignRequest
   * @returns AsymmetricSignResponse
   */
  async asymmetricSign(request: AsymmetricSignRequest): Promise<AsymmetricSignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricSignWithOptions(request, runtime);
  }

  /**
   * Verifies a signature by using an asymmetric key.
   * 
   * @remarks
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms. 
   * | KeySpec | Algorithm | Description |
   * | ------- | --------- | ----------- |
   * | RSA_2048 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
   * | RSA_3072 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
   * | EC_P256 | ECDSA_SHA_256 | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest |
   * | EC_P256K | ECDSA_SHA_256 | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2 | SM2DSA | SM2 elliptic curve public key encryption algorithm |
   * >  When you calculate the SM2 signature based on GB/T 32918, the **Digest** parameter is used to calculate the digest value of the combination of Z(A) and M, rather than the SM3 digest value. M indicates the original message to be signed. Z(A) indicates the hash value for User A. The hash value is defined in GB/T 32918.  In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the signature algorithm RSA_PSS_SHA_256 are used to verify the signature `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==` of the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=`.
   * 
   * @param request - AsymmetricVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AsymmetricVerifyResponse
   */
  async asymmetricVerifyWithOptions(request: AsymmetricVerifyRequest, runtime: $Util.RuntimeOptions): Promise<AsymmetricVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AsymmetricVerify",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<AsymmetricVerifyResponse>(await this.callApi(params, req, runtime), new AsymmetricVerifyResponse({}));
    } else {
      return $tea.cast<AsymmetricVerifyResponse>(await this.execute(params, req, runtime), new AsymmetricVerifyResponse({}));
    }

  }

  /**
   * Verifies a signature by using an asymmetric key.
   * 
   * @remarks
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms. 
   * | KeySpec | Algorithm | Description |
   * | ------- | --------- | ----------- |
   * | RSA_2048 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
   * | RSA_3072 | RSA_PSS_SHA_256 | RSASSA-PSS using SHA-256 and MGF1 with SHA-256 |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256 |
   * | EC_P256 | ECDSA_SHA_256 | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest |
   * | EC_P256K | ECDSA_SHA_256 | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2 | SM2DSA | SM2 elliptic curve public key encryption algorithm |
   * >  When you calculate the SM2 signature based on GB/T 32918, the **Digest** parameter is used to calculate the digest value of the combination of Z(A) and M, rather than the SM3 digest value. M indicates the original message to be signed. Z(A) indicates the hash value for User A. The hash value is defined in GB/T 32918.  In this example, the asymmetric key whose ID is `5c438b18-05be-40ad-b6c2-3be6752c****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` and the signature algorithm RSA_PSS_SHA_256 are used to verify the signature `M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq****==` of the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=`.
   * 
   * @param request - AsymmetricVerifyRequest
   * @returns AsymmetricVerifyResponse
   */
  async asymmetricVerify(request: AsymmetricVerifyRequest): Promise<AsymmetricVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.asymmetricVerifyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * If the deletion task of a CMK is canceled, the CMK returns to the Enabled state.
   * 
   * @param request - CancelKeyDeletionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelKeyDeletionResponse
   */
  async cancelKeyDeletionWithOptions(request: CancelKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<CancelKeyDeletionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelKeyDeletion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CancelKeyDeletionResponse>(await this.callApi(params, req, runtime), new CancelKeyDeletionResponse({}));
    } else {
      return $tea.cast<CancelKeyDeletionResponse>(await this.execute(params, req, runtime), new CancelKeyDeletionResponse({}));
    }

  }

  /**
   * @remarks
   * If the deletion task of a CMK is canceled, the CMK returns to the Enabled state.
   * 
   * @param request - CancelKeyDeletionRequest
   * @returns CancelKeyDeletionResponse
   */
  async cancelKeyDeletion(request: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelKeyDeletionWithOptions(request, runtime);
  }

  /**
   * Decrypts data by using a specific certificate.
   * 
   * @remarks
   * Limit: The encryption algorithm in the request parameters must match the key type. 
   * The following table describes the mapping between encryption algorithms and key types.
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSAES_OAEP_SHA_1 | RSA_2048 |
   * | RSAES_OAEP_SHA_256 | RSA_2048 |
   * | SM2PKE | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to decrypt the data `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`.
   * 
   * @param request - CertificatePrivateKeyDecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertificatePrivateKeyDecryptResponse
   */
  async certificatePrivateKeyDecryptWithOptions(request: CertificatePrivateKeyDecryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeyDecryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePrivateKeyDecrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeyDecryptResponse({}));
    } else {
      return $tea.cast<CertificatePrivateKeyDecryptResponse>(await this.execute(params, req, runtime), new CertificatePrivateKeyDecryptResponse({}));
    }

  }

  /**
   * Decrypts data by using a specific certificate.
   * 
   * @remarks
   * Limit: The encryption algorithm in the request parameters must match the key type. 
   * The following table describes the mapping between encryption algorithms and key types.
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSAES_OAEP_SHA_1 | RSA_2048 |
   * | RSAES_OAEP_SHA_256 | RSA_2048 |
   * | SM2PKE | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to decrypt the data `ZOyIygCyaOW6Gj****MlNKiuyjfzw=`.
   * 
   * @param request - CertificatePrivateKeyDecryptRequest
   * @returns CertificatePrivateKeyDecryptResponse
   */
  async certificatePrivateKeyDecrypt(request: CertificatePrivateKeyDecryptRequest): Promise<CertificatePrivateKeyDecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeyDecryptWithOptions(request, runtime);
  }

  /**
   * Generates a signature by using a specified certificate.
   * 
   * @remarks
   * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSA_PKCS1_SHA_256 | RSA_2048 |
   * | RSA_PSS_SHA_256 | RSA_2048 |
   * | ECDSA_SHA_256 | EC_P256 |
   * | SM2DSA | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to generate a signature for the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePrivateKeySignRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertificatePrivateKeySignResponse
   */
  async certificatePrivateKeySignWithOptions(request: CertificatePrivateKeySignRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePrivateKeySignResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePrivateKeySign",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePrivateKeySignResponse>(await this.callApi(params, req, runtime), new CertificatePrivateKeySignResponse({}));
    } else {
      return $tea.cast<CertificatePrivateKeySignResponse>(await this.execute(params, req, runtime), new CertificatePrivateKeySignResponse({}));
    }

  }

  /**
   * Generates a signature by using a specified certificate.
   * 
   * @remarks
   * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSA_PKCS1_SHA_256 | RSA_2048 |
   * | RSA_PSS_SHA_256 | RSA_2048 |
   * | ECDSA_SHA_256 | EC_P256 |
   * | SM2DSA | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to generate a signature for the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePrivateKeySignRequest
   * @returns CertificatePrivateKeySignResponse
   */
  async certificatePrivateKeySign(request: CertificatePrivateKeySignRequest): Promise<CertificatePrivateKeySignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePrivateKeySignWithOptions(request, runtime);
  }

  /**
   * Encrypts data by using a specific certificate.
   * 
   * @remarks
   * Limit: The encryption algorithm in the request parameters must match the key type. 
   * The following table describes the mapping between encryption algorithms and key types.
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSAES_OAEP_SHA_1 | RSA_2048 |
   * | RSAES_OAEP_SHA_256 | RSA_2048 |
   * | SM2PKE | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to encrypt the data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePublicKeyEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertificatePublicKeyEncryptResponse
   */
  async certificatePublicKeyEncryptWithOptions(request: CertificatePublicKeyEncryptRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyEncryptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePublicKeyEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyEncryptResponse({}));
    } else {
      return $tea.cast<CertificatePublicKeyEncryptResponse>(await this.execute(params, req, runtime), new CertificatePublicKeyEncryptResponse({}));
    }

  }

  /**
   * Encrypts data by using a specific certificate.
   * 
   * @remarks
   * Limit: The encryption algorithm in the request parameters must match the key type. 
   * The following table describes the mapping between encryption algorithms and key types.
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSAES_OAEP_SHA_1 | RSA_2048 |
   * | RSAES_OAEP_SHA_256 | RSA_2048 |
   * | SM2PKE | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the encryption algorithm `RSAES_OAEP_SHA_256` are used to encrypt the data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePublicKeyEncryptRequest
   * @returns CertificatePublicKeyEncryptResponse
   */
  async certificatePublicKeyEncrypt(request: CertificatePublicKeyEncryptRequest): Promise<CertificatePublicKeyEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyEncryptWithOptions(request, runtime);
  }

  /**
   * Verifies a digital signature by using a specified certificate.
   * 
   * @remarks
   * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSA_PKCS1_SHA_256 | RSA_2048 |
   * | RSA_PSS_SHA_256 | RSA_2048 |
   * | ECDSA_SHA_256 | EC_P256 |
   * | SM2DSA | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to verify the digital signature `ZOyIygCyaOW6Gj****MlNKiuyjfzw=` of the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePublicKeyVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CertificatePublicKeyVerifyResponse
   */
  async certificatePublicKeyVerifyWithOptions(request: CertificatePublicKeyVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CertificatePublicKeyVerifyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.message)) {
      query["Message"] = request.message;
    }

    if (!Util.isUnset(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!Util.isUnset(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CertificatePublicKeyVerify",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.callApi(params, req, runtime), new CertificatePublicKeyVerifyResponse({}));
    } else {
      return $tea.cast<CertificatePublicKeyVerifyResponse>(await this.execute(params, req, runtime), new CertificatePublicKeyVerifyResponse({}));
    }

  }

  /**
   * Verifies a digital signature by using a specified certificate.
   * 
   * @remarks
   * The signature algorithm in the request parameters must match the key type. The following table describes the mapping between signature algorithms and key types.  
   * | Algorithm | Key Spec |
   * | --------- | -------- |
   * | RSA_PKCS1_SHA_256 | RSA_2048 |
   * | RSA_PSS_SHA_256 | RSA_2048 |
   * | ECDSA_SHA_256 | EC_P256 |
   * | SM2DSA | EC_SM2 |
   * In this example, the certificate whose ID is `12345678-1234-1234-1234-12345678****` and the signature algorithm `ECDSA_SHA_256` are used to verify the digital signature `ZOyIygCyaOW6Gj****MlNKiuyjfzw=` of the raw data `VGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZy4=`.
   * 
   * @param request - CertificatePublicKeyVerifyRequest
   * @returns CertificatePublicKeyVerifyResponse
   */
  async certificatePublicKeyVerify(request: CertificatePublicKeyVerifyRequest): Promise<CertificatePublicKeyVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.certificatePublicKeyVerifyWithOptions(request, runtime);
  }

  /**
   * Enables a Key Management Service (KMS) instance.
   * 
   * @remarks
   * ### [](#)Limits
   * You can enable only instances of the software key management type. You cannot enable instances of the hardware key management type.
   * 
   * @param request - ConnectKmsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConnectKmsInstanceResponse
   */
  async connectKmsInstanceWithOptions(request: ConnectKmsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ConnectKmsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.KMProvider)) {
      query["KMProvider"] = request.KMProvider;
    }

    if (!Util.isUnset(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    if (!Util.isUnset(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneIds)) {
      query["ZoneIds"] = request.zoneIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ConnectKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ConnectKmsInstanceResponse>(await this.callApi(params, req, runtime), new ConnectKmsInstanceResponse({}));
    } else {
      return $tea.cast<ConnectKmsInstanceResponse>(await this.execute(params, req, runtime), new ConnectKmsInstanceResponse({}));
    }

  }

  /**
   * Enables a Key Management Service (KMS) instance.
   * 
   * @remarks
   * ### [](#)Limits
   * You can enable only instances of the software key management type. You cannot enable instances of the hardware key management type.
   * 
   * @param request - ConnectKmsInstanceRequest
   * @returns ConnectKmsInstanceResponse
   */
  async connectKmsInstance(request: ConnectKmsInstanceRequest): Promise<ConnectKmsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.connectKmsInstanceWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   Each alias can be bound to only one CMK at a time.
   * *   The aliases of CMKs in the same region must be unique.
   * In this topic, an alias named `alias/example` is created for a CMK named `7906979c-8e06-46a2-be2d-68e3ccbc****`.
   * 
   * @param request - CreateAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(request: CreateAliasRequest, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
    } else {
      return $tea.cast<CreateAliasResponse>(await this.execute(params, req, runtime), new CreateAliasResponse({}));
    }

  }

  /**
   * @remarks
   *   Each alias can be bound to only one CMK at a time.
   * *   The aliases of CMKs in the same region must be unique.
   * In this topic, an alias named `alias/example` is created for a CMK named `7906979c-8e06-46a2-be2d-68e3ccbc****`.
   * 
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAliasWithOptions(request, runtime);
  }

  /**
   * Creates an application access point (AAP)
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based AAP:
   * 1.Create a network access rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access KMS. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind network access rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. This topic describes how to create an AAP.
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreateApplicationAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationAccessPointResponse
   */
  async createApplicationAccessPointWithOptions(request: CreateApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<CreateApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authenticationMethod)) {
      query["AuthenticationMethod"] = request.authenticationMethod;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new CreateApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<CreateApplicationAccessPointResponse>(await this.execute(params, req, runtime), new CreateApplicationAccessPointResponse({}));
    }

  }

  /**
   * Creates an application access point (AAP)
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based AAP:
   * 1.Create a network access rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access KMS. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind network access rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. This topic describes how to create an AAP.
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreateApplicationAccessPointRequest
   * @returns CreateApplicationAccessPointResponse
   */
  async createApplicationAccessPoint(request: CreateApplicationAccessPointRequest): Promise<CreateApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * @remarks
   * To create a certificate, you must specify the type of the asymmetric key. Certificates Manager generates a private key and returns a certificate signing request (CSR). Submit the CSR in the Privacy Enhanced Mail (PEM) format to a certificate authority (CA) to obtain the formal certificate and certificate chain. Then, call the [UploadCertificate](https://help.aliyun.com/document_detail/212136.html) operation to import the certificate into Certificates Manager.
   * In this example, a certificate is created and the CSR is obtained.
   * 
   * @param tmpReq - CreateCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCertificateResponse
   */
  async createCertificateWithOptions(tmpReq: CreateCertificateRequest, runtime: $Util.RuntimeOptions): Promise<CreateCertificateResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCertificateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.subjectAlternativeNames)) {
      request.subjectAlternativeNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subjectAlternativeNames, "SubjectAlternativeNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.exportablePrivateKey)) {
      query["ExportablePrivateKey"] = request.exportablePrivateKey;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.subject)) {
      query["Subject"] = request.subject;
    }

    if (!Util.isUnset(request.subjectAlternativeNamesShrink)) {
      query["SubjectAlternativeNames"] = request.subjectAlternativeNamesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateCertificateResponse>(await this.callApi(params, req, runtime), new CreateCertificateResponse({}));
    } else {
      return $tea.cast<CreateCertificateResponse>(await this.execute(params, req, runtime), new CreateCertificateResponse({}));
    }

  }

  /**
   * @remarks
   * To create a certificate, you must specify the type of the asymmetric key. Certificates Manager generates a private key and returns a certificate signing request (CSR). Submit the CSR in the Privacy Enhanced Mail (PEM) format to a certificate authority (CA) to obtain the formal certificate and certificate chain. Then, call the [UploadCertificate](https://help.aliyun.com/document_detail/212136.html) operation to import the certificate into Certificates Manager.
   * In this example, a certificate is created and the CSR is obtained.
   * 
   * @param request - CreateCertificateRequest
   * @returns CreateCertificateResponse
   */
  async createCertificate(request: CreateCertificateRequest): Promise<CreateCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCertificateWithOptions(request, runtime);
  }

  /**
   * Creates a client key.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP.
   * ### Precautions
   * A client key has a validity period. After a client key expires, applications into which the client key is integrated cannot access the required KMS instance. You must replace the client key before the client key expires. We recommend that you delete the expired client key in KMS after the new client key is used.
   * 
   * @param request - CreateClientKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientKeyResponse
   */
  async createClientKeyWithOptions(request: CreateClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateClientKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aapName)) {
      query["AapName"] = request.aapName;
    }

    if (!Util.isUnset(request.notAfter)) {
      query["NotAfter"] = request.notAfter;
    }

    if (!Util.isUnset(request.notBefore)) {
      query["NotBefore"] = request.notBefore;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateClientKeyResponse>(await this.callApi(params, req, runtime), new CreateClientKeyResponse({}));
    } else {
      return $tea.cast<CreateClientKeyResponse>(await this.execute(params, req, runtime), new CreateClientKeyResponse({}));
    }

  }

  /**
   * Creates a client key.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP.
   * ### Precautions
   * A client key has a validity period. After a client key expires, applications into which the client key is integrated cannot access the required KMS instance. You must replace the client key before the client key expires. We recommend that you delete the expired client key in KMS after the new client key is used.
   * 
   * @param request - CreateClientKeyRequest
   * @returns CreateClientKeyResponse
   */
  async createClientKey(request: CreateClientKeyRequest): Promise<CreateClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClientKeyWithOptions(request, runtime);
  }

  /**
   * Creates a customer master key (CMK).
   * 
   * @remarks
   * KMS supports common symmetric keys and asymmetric keys. For more information, see [Key types and specifications](https://help.aliyun.com/document_detail/480161.html).
   * 
   * @param request - CreateKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyResponse
   */
  async createKeyWithOptions(request: CreateKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.keyUsage)) {
      query["KeyUsage"] = request.keyUsage;
    }

    if (!Util.isUnset(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateKeyResponse>(await this.callApi(params, req, runtime), new CreateKeyResponse({}));
    } else {
      return $tea.cast<CreateKeyResponse>(await this.execute(params, req, runtime), new CreateKeyResponse({}));
    }

  }

  /**
   * Creates a customer master key (CMK).
   * 
   * @remarks
   * KMS supports common symmetric keys and asymmetric keys. For more information, see [Key types and specifications](https://help.aliyun.com/document_detail/480161.html).
   * 
   * @param request - CreateKeyRequest
   * @returns CreateKeyResponse
   */
  async createKey(request: CreateKeyRequest): Promise<CreateKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyWithOptions(request, runtime);
  }

  /**
   * 为密钥创建新的密钥版本。
   * 
   * @remarks
   *   You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation to create an asymmetric CMK and the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK. The status is specified by the KeyState parameter.
   * *   The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
   * *   If a CMK is in a private key store, you cannot create a version for the CMK.
   * *   You can create a maximum of 50 versions for a CMK in the same region.
   * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
   * 
   * @param request - CreateKeyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKeyVersionResponse
   */
  async createKeyVersionWithOptions(request: CreateKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<CreateKeyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateKeyVersion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateKeyVersionResponse>(await this.callApi(params, req, runtime), new CreateKeyVersionResponse({}));
    } else {
      return $tea.cast<CreateKeyVersionResponse>(await this.execute(params, req, runtime), new CreateKeyVersionResponse({}));
    }

  }

  /**
   * 为密钥创建新的密钥版本。
   * 
   * @remarks
   *   You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation to create an asymmetric CMK and the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK. The status is specified by the KeyState parameter.
   * *   The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
   * *   If a CMK is in a private key store, you cannot create a version for the CMK.
   * *   You can create a maximum of 50 versions for a CMK in the same region.
   * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
   * 
   * @param request - CreateKeyVersionRequest
   * @returns CreateKeyVersionResponse
   */
  async createKeyVersion(request: CreateKeyVersionRequest): Promise<CreateKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createKeyVersionWithOptions(request, runtime);
  }

  /**
   * Creates an access control rule to configure the private IP addresses or CIDR blocks that are allowed to access a Key Management Service (KMS) instance.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a KMS instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance.
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreateNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkRuleResponse
   */
  async createNetworkRuleWithOptions(request: CreateNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<CreateNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateNetworkRuleResponse>(await this.callApi(params, req, runtime), new CreateNetworkRuleResponse({}));
    } else {
      return $tea.cast<CreateNetworkRuleResponse>(await this.execute(params, req, runtime), new CreateNetworkRuleResponse({}));
    }

  }

  /**
   * Creates an access control rule to configure the private IP addresses or CIDR blocks that are allowed to access a Key Management Service (KMS) instance.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a KMS instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance.
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets. For more information, see [CreatePolicy](https://help.aliyun.com/document_detail/2539454.html).
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreateNetworkRuleRequest
   * @returns CreateNetworkRuleResponse
   */
  async createNetworkRule(request: CreateNetworkRuleRequest): Promise<CreateNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Creates a permission policy to configure the keys and secrets that are allowed to access.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets.
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePolicyResponse
   */
  async createPolicyWithOptions(request: CreatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.kmsInstance)) {
      query["KmsInstance"] = request.kmsInstance;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreatePolicyResponse>(await this.callApi(params, req, runtime), new CreatePolicyResponse({}));
    } else {
      return $tea.cast<CreatePolicyResponse>(await this.execute(params, req, runtime), new CreatePolicyResponse({}));
    }

  }

  /**
   * Creates a permission policy to configure the keys and secrets that are allowed to access.
   * 
   * @remarks
   * To perform cryptographic operations and retrieve secret values, self-managed applications must use a client key to access a Key Management Service (KMS) instance. The following process shows how to create a client key-based application access point (AAP):
   * 1.Create an access control rule: You can configure the private IP addresses or private CIDR blocks that are allowed to access a KMS instance. For more information, see [CreateNetworkRule](https://help.aliyun.com/document_detail/2539407.html).
   * 2.Create a permission policy: You can configure the keys and secrets that are allowed to access and bind access control rules to the keys and secrets.
   * 3.Create an AAP: You can configure an authentication method and bind a permission policy to an AAP. For more information, see [CreateApplicationAccessPoint](https://help.aliyun.com/document_detail/2539467.html).
   * 4.Create a client key: You can configure the encryption password and validity period of a client key and bind the client key to an AAP. For more information, see [CreateClientKey](https://help.aliyun.com/document_detail/2539509.html).
   * 
   * @param request - CreatePolicyRequest
   * @returns CreatePolicyResponse
   */
  async createPolicy(request: CreatePolicyRequest): Promise<CreatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPolicyWithOptions(request, runtime);
  }

  /**
   * 创建凭据并存入凭据的初始版本。
   * 
   * @remarks
   * The name of the secret.
   * The value must be 1 to 64 characters in length and can contain letters, digits, underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The following list describes the name requirements for different types of secrets:
   * *   If the SecretType parameter is set to Generic or Rds, the name cannot start with `acs/`.
   * *   If the SecretType parameter is set to RAMCredentials, set the SecretName parameter to `$Auto`. In this case, KMS automatically generates a secret name that starts with `acs/ram/user/`. The name includes the display name of RAM user.
   * *   If the SecretType parameter is set to ECS, the name must start with `acs/ecs/`.
   * 
   * @param tmpReq - CreateSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretResponse
   */
  async createSecretWithOptions(tmpReq: CreateSecretRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecretResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendedConfig)) {
      request.extendedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendedConfig, "ExtendedConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.encryptionKeyId)) {
      query["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!Util.isUnset(request.extendedConfigShrink)) {
      query["ExtendedConfig"] = request.extendedConfigShrink;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!Util.isUnset(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<CreateSecretResponse>(await this.callApi(params, req, runtime), new CreateSecretResponse({}));
    } else {
      return $tea.cast<CreateSecretResponse>(await this.execute(params, req, runtime), new CreateSecretResponse({}));
    }

  }

  /**
   * 创建凭据并存入凭据的初始版本。
   * 
   * @remarks
   * The name of the secret.
   * The value must be 1 to 64 characters in length and can contain letters, digits, underscores (_), forward slashes (/), plus signs (+), equal signs (=), periods (.), hyphens (-), and at signs (@). The following list describes the name requirements for different types of secrets:
   * *   If the SecretType parameter is set to Generic or Rds, the name cannot start with `acs/`.
   * *   If the SecretType parameter is set to RAMCredentials, set the SecretName parameter to `$Auto`. In this case, KMS automatically generates a secret name that starts with `acs/ram/user/`. The name includes the display name of RAM user.
   * *   If the SecretType parameter is set to ECS, the name must start with `acs/ecs/`.
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: CreateSecretRequest): Promise<CreateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  /**
   * 调用Decrypt接口解密CiphertextBlob中的密文。
   * 
   * @param tmpReq - DecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecryptResponse
   */
  async decryptWithOptions(tmpReq: DecryptRequest, runtime: $Util.RuntimeOptions): Promise<DecryptResponse> {
    Util.validateModel(tmpReq);
    let request = new DecryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Decrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DecryptResponse>(await this.callApi(params, req, runtime), new DecryptResponse({}));
    } else {
      return $tea.cast<DecryptResponse>(await this.execute(params, req, runtime), new DecryptResponse({}));
    }

  }

  /**
   * 调用Decrypt接口解密CiphertextBlob中的密文。
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: DecryptRequest): Promise<DecryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(request: DeleteAliasRequest, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
    } else {
      return $tea.cast<DeleteAliasResponse>(await this.execute(params, req, runtime), new DeleteAliasResponse({}));
    }

  }

  /**
   * @param request - DeleteAliasRequest
   * @returns DeleteAliasResponse
   */
  async deleteAlias(request: DeleteAliasRequest): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAliasWithOptions(request, runtime);
  }

  /**
   * Deletes an application access point (AAP).
   * 
   * @remarks
   * Before you delete an AAP, make sure that the AAP is no longer in use. If you delete an AAP that is in use, applications that use the AAP cannot access Key Management Service (KMS). Exercise caution when you delete an AAP.
   * 
   * @param request - DeleteApplicationAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationAccessPointResponse
   */
  async deleteApplicationAccessPointWithOptions(request: DeleteApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<DeleteApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new DeleteApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<DeleteApplicationAccessPointResponse>(await this.execute(params, req, runtime), new DeleteApplicationAccessPointResponse({}));
    }

  }

  /**
   * Deletes an application access point (AAP).
   * 
   * @remarks
   * Before you delete an AAP, make sure that the AAP is no longer in use. If you delete an AAP that is in use, applications that use the AAP cannot access Key Management Service (KMS). Exercise caution when you delete an AAP.
   * 
   * @param request - DeleteApplicationAccessPointRequest
   * @returns DeleteApplicationAccessPointResponse
   */
  async deleteApplicationAccessPoint(request: DeleteApplicationAccessPointRequest): Promise<DeleteApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * @remarks
   * After the certificate and its private key and certificate chain are deleted, they cannot be restored. Proceed with caution.
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` and its private key and certificate chain are deleted.
   * 
   * @param request - DeleteCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCertificateResponse
   */
  async deleteCertificateWithOptions(request: DeleteCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteCertificateResponse>(await this.callApi(params, req, runtime), new DeleteCertificateResponse({}));
    } else {
      return $tea.cast<DeleteCertificateResponse>(await this.execute(params, req, runtime), new DeleteCertificateResponse({}));
    }

  }

  /**
   * @remarks
   * After the certificate and its private key and certificate chain are deleted, they cannot be restored. Proceed with caution.
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` and its private key and certificate chain are deleted.
   * 
   * @param request - DeleteCertificateRequest
   * @returns DeleteCertificateResponse
   */
  async deleteCertificate(request: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you delete a client key, make sure that the client key is no longer in use. If you delete a client key that is in use, applications that use the client key cannot access Key Management Service (KMS). Exercise caution when you delete a client key.
   * 
   * @param request - DeleteClientKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientKeyResponse
   */
  async deleteClientKeyWithOptions(request: DeleteClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClientKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientKeyId)) {
      query["ClientKeyId"] = request.clientKeyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteClientKeyResponse>(await this.callApi(params, req, runtime), new DeleteClientKeyResponse({}));
    } else {
      return $tea.cast<DeleteClientKeyResponse>(await this.execute(params, req, runtime), new DeleteClientKeyResponse({}));
    }

  }

  /**
   * @remarks
   * Before you delete a client key, make sure that the client key is no longer in use. If you delete a client key that is in use, applications that use the client key cannot access Key Management Service (KMS). Exercise caution when you delete a client key.
   * 
   * @param request - DeleteClientKeyRequest
   * @returns DeleteClientKeyResponse
   */
  async deleteClientKey(request: DeleteClientKeyRequest): Promise<DeleteClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClientKeyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This operation does not delete the CMK that is created by using the key material.
   * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
   * After you delete the key material, you can upload only the same key material into the CMK.
   * 
   * @param request - DeleteKeyMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeyMaterialResponse
   */
  async deleteKeyMaterialWithOptions(request: DeleteKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteKeyMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteKeyMaterial",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteKeyMaterialResponse>(await this.callApi(params, req, runtime), new DeleteKeyMaterialResponse({}));
    } else {
      return $tea.cast<DeleteKeyMaterialResponse>(await this.execute(params, req, runtime), new DeleteKeyMaterialResponse({}));
    }

  }

  /**
   * @remarks
   * This operation does not delete the CMK that is created by using the key material.
   * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
   * After you delete the key material, you can upload only the same key material into the CMK.
   * 
   * @param request - DeleteKeyMaterialRequest
   * @returns DeleteKeyMaterialResponse
   */
  async deleteKeyMaterial(request: DeleteKeyMaterialRequest): Promise<DeleteKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteKeyMaterialWithOptions(request, runtime);
  }

  /**
   * Deletes a network access rule.
   * 
   * @remarks
   * Before you delete a network access rule, make sure that the network access rule is not bound to permission policies. Otherwise, related applications cannot access Key Management Service (KMS).
   * 
   * @param request - DeleteNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkRuleResponse
   */
  async deleteNetworkRuleWithOptions(request: DeleteNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteNetworkRuleResponse>(await this.callApi(params, req, runtime), new DeleteNetworkRuleResponse({}));
    } else {
      return $tea.cast<DeleteNetworkRuleResponse>(await this.execute(params, req, runtime), new DeleteNetworkRuleResponse({}));
    }

  }

  /**
   * Deletes a network access rule.
   * 
   * @remarks
   * Before you delete a network access rule, make sure that the network access rule is not bound to permission policies. Otherwise, related applications cannot access Key Management Service (KMS).
   * 
   * @param request - DeleteNetworkRuleRequest
   * @returns DeleteNetworkRuleResponse
   */
  async deleteNetworkRule(request: DeleteNetworkRuleRequest): Promise<DeleteNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a permission policy.
   * 
   * @remarks
   * Before you delete a permission policy, make sure that the permission policy is not associated with application access points (AAPs). Otherwise, related applications cannot access Key Management Service (KMS).
   * 
   * @param request - DeletePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyResponse
   */
  async deletePolicyWithOptions(request: DeletePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeletePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeletePolicyResponse>(await this.callApi(params, req, runtime), new DeletePolicyResponse({}));
    } else {
      return $tea.cast<DeletePolicyResponse>(await this.execute(params, req, runtime), new DeletePolicyResponse({}));
    }

  }

  /**
   * Deletes a permission policy.
   * 
   * @remarks
   * Before you delete a permission policy, make sure that the permission policy is not associated with application access points (AAPs). Otherwise, related applications cannot access Key Management Service (KMS).
   * 
   * @param request - DeletePolicyRequest
   * @returns DeletePolicyResponse
   */
  async deletePolicy(request: DeletePolicyRequest): Promise<DeletePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * If you call this operation without specifying a recovery period, the deleted secret can be recovered within 30 days.
   * If you specify a recovery period, the deleted secret can be recovered within the recovery period. You can also forcibly delete a secret. A forcibly deleted secret cannot be recovered.
   * 
   * @param request - DeleteSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: DeleteSecretRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.forceDeleteWithoutRecovery)) {
      query["ForceDeleteWithoutRecovery"] = request.forceDeleteWithoutRecovery;
    }

    if (!Util.isUnset(request.recoveryWindowInDays)) {
      query["RecoveryWindowInDays"] = request.recoveryWindowInDays;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DeleteSecretResponse>(await this.callApi(params, req, runtime), new DeleteSecretResponse({}));
    } else {
      return $tea.cast<DeleteSecretResponse>(await this.execute(params, req, runtime), new DeleteSecretResponse({}));
    }

  }

  /**
   * @remarks
   * If you call this operation without specifying a recovery period, the deleted secret can be recovered within 30 days.
   * If you specify a recovery period, the deleted secret can be recovered within the recovery period. You can also forcibly delete a secret. A forcibly deleted secret cannot be recovered.
   * 
   * @param request - DeleteSecretRequest
   * @returns DeleteSecretResponse
   */
  async deleteSecret(request: DeleteSecretRequest): Promise<DeleteSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountKmsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountKmsStatusResponse
   */
  async describeAccountKmsStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeAccountKmsStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeAccountKmsStatus",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeAccountKmsStatusResponse>(await this.callApi(params, req, runtime), new DescribeAccountKmsStatusResponse({}));
    } else {
      return $tea.cast<DescribeAccountKmsStatusResponse>(await this.execute(params, req, runtime), new DescribeAccountKmsStatusResponse({}));
    }

  }

  /**
   * @returns DescribeAccountKmsStatusResponse
   */
  async describeAccountKmsStatus(): Promise<DescribeAccountKmsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

  /**
   * Queries the details of an application access point (AAP).
   * 
   * @param request - DescribeApplicationAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationAccessPointResponse
   */
  async describeApplicationAccessPointWithOptions(request: DescribeApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<DescribeApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new DescribeApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<DescribeApplicationAccessPointResponse>(await this.execute(params, req, runtime), new DescribeApplicationAccessPointResponse({}));
    }

  }

  /**
   * Queries the details of an application access point (AAP).
   * 
   * @param request - DescribeApplicationAccessPointRequest
   * @returns DescribeApplicationAccessPointResponse
   */
  async describeApplicationAccessPoint(request: DescribeApplicationAccessPointRequest): Promise<DescribeApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the information about the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate information includes the certificate ID, creation time, certificate issuer, validity period, serial number, and signature algorithm.
   * 
   * @param request - DescribeCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCertificateResponse
   */
  async describeCertificateWithOptions(request: DescribeCertificateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeCertificateResponse>(await this.callApi(params, req, runtime), new DescribeCertificateResponse({}));
    } else {
      return $tea.cast<DescribeCertificateResponse>(await this.execute(params, req, runtime), new DescribeCertificateResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the information about the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate information includes the certificate ID, creation time, certificate issuer, validity period, serial number, and signature algorithm.
   * 
   * @param request - DescribeCertificateRequest
   * @returns DescribeCertificateResponse
   */
  async describeCertificate(request: DescribeCertificateRequest): Promise<DescribeCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a customer master key (CMK).
   * 
   * @remarks
   * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
   * 
   * @param request - DescribeKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyResponse
   */
  async describeKeyWithOptions(request: DescribeKeyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeKeyResponse>(await this.callApi(params, req, runtime), new DescribeKeyResponse({}));
    } else {
      return $tea.cast<DescribeKeyResponse>(await this.execute(params, req, runtime), new DescribeKeyResponse({}));
    }

  }

  /**
   * Queries the information about a customer master key (CMK).
   * 
   * @remarks
   * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
   * 
   * @param request - DescribeKeyRequest
   * @returns DescribeKeyResponse
   */
  async describeKey(request: DescribeKeyRequest): Promise<DescribeKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
   * 
   * @param request - DescribeKeyVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKeyVersionResponse
   */
  async describeKeyVersionWithOptions(request: DescribeKeyVersionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeKeyVersionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeKeyVersion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeKeyVersionResponse>(await this.callApi(params, req, runtime), new DescribeKeyVersionResponse({}));
    } else {
      return $tea.cast<DescribeKeyVersionResponse>(await this.execute(params, req, runtime), new DescribeKeyVersionResponse({}));
    }

  }

  /**
   * @remarks
   * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
   * 
   * @param request - DescribeKeyVersionRequest
   * @returns DescribeKeyVersionResponse
   */
  async describeKeyVersion(request: DescribeKeyVersionRequest): Promise<DescribeKeyVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access control rule.
   * 
   * @param request - DescribeNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkRuleResponse
   */
  async describeNetworkRuleWithOptions(request: DescribeNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeNetworkRuleResponse>(await this.callApi(params, req, runtime), new DescribeNetworkRuleResponse({}));
    } else {
      return $tea.cast<DescribeNetworkRuleResponse>(await this.execute(params, req, runtime), new DescribeNetworkRuleResponse({}));
    }

  }

  /**
   * Queries the details of an access control rule.
   * 
   * @param request - DescribeNetworkRuleRequest
   * @returns DescribeNetworkRuleResponse
   */
  async describeNetworkRule(request: DescribeNetworkRuleRequest): Promise<DescribeNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of a permission policy.
   * 
   * @param request - DescribePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyResponse
   */
  async describePolicyWithOptions(request: DescribePolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribePolicyResponse>(await this.callApi(params, req, runtime), new DescribePolicyResponse({}));
    } else {
      return $tea.cast<DescribePolicyResponse>(await this.execute(params, req, runtime), new DescribePolicyResponse({}));
    }

  }

  /**
   * Queries the details of a permission policy.
   * 
   * @param request - DescribePolicyRequest
   * @returns DescribePolicyResponse
   */
  async describePolicy(request: DescribePolicyRequest): Promise<DescribePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePolicyWithOptions(request, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms\\&api=DescribeRegions\\&type=RPC\\&version=2016-01-20)
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $tea.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * Queries available regions.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms\\&api=DescribeRegions\\&type=RPC\\&version=2016-01-20)
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * @remarks
   * This operation returns the metadata of a secret. This operation does not return the secret value.
   * In this example, the metadata of the secret named `secret001` is queried.
   * 
   * @param request - DescribeSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecretResponse
   */
  async describeSecretWithOptions(request: DescribeSecretRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DescribeSecretResponse>(await this.callApi(params, req, runtime), new DescribeSecretResponse({}));
    } else {
      return $tea.cast<DescribeSecretResponse>(await this.execute(params, req, runtime), new DescribeSecretResponse({}));
    }

  }

  /**
   * @remarks
   * This operation returns the metadata of a secret. This operation does not return the secret value.
   * In this example, the metadata of the secret named `secret001` is queried.
   * 
   * @param request - DescribeSecretRequest
   * @returns DescribeSecretResponse
   */
  async describeSecret(request: DescribeSecretRequest): Promise<DescribeSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSecretWithOptions(request, runtime);
  }

  /**
   * @remarks
   * If a customer master key (CMK) is disabled, the ciphertext encrypted by using this CMK cannot be decrypted until you re-enable it. You can call the [EnableKey](https://help.aliyun.com/document_detail/35150.html) operation to enable the CMK.
   * In this example, the CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****` is disabled.
   * 
   * @param request - DisableKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableKeyResponse
   */
  async disableKeyWithOptions(request: DisableKeyRequest, runtime: $Util.RuntimeOptions): Promise<DisableKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DisableKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<DisableKeyResponse>(await this.callApi(params, req, runtime), new DisableKeyResponse({}));
    } else {
      return $tea.cast<DisableKeyResponse>(await this.execute(params, req, runtime), new DisableKeyResponse({}));
    }

  }

  /**
   * @remarks
   * If a customer master key (CMK) is disabled, the ciphertext encrypted by using this CMK cannot be decrypted until you re-enable it. You can call the [EnableKey](https://help.aliyun.com/document_detail/35150.html) operation to enable the CMK.
   * In this example, the CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****` is disabled.
   * 
   * @param request - DisableKeyRequest
   * @returns DisableKeyResponse
   */
  async disableKey(request: DisableKeyRequest): Promise<DisableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableKeyWithOptions(request, runtime);
  }

  /**
   * @param request - EnableKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableKeyResponse
   */
  async enableKeyWithOptions(request: EnableKeyRequest, runtime: $Util.RuntimeOptions): Promise<EnableKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EnableKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<EnableKeyResponse>(await this.callApi(params, req, runtime), new EnableKeyResponse({}));
    } else {
      return $tea.cast<EnableKeyResponse>(await this.execute(params, req, runtime), new EnableKeyResponse({}));
    }

  }

  /**
   * @param request - EnableKeyRequest
   * @returns EnableKeyResponse
   */
  async enableKey(request: EnableKeyRequest): Promise<EnableKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableKeyWithOptions(request, runtime);
  }

  /**
   * @remarks
   *   KMS uses the primary version of a specified CMK to encrypt data.
   * *   Only data of 6 KB or less can be encrypted. For example, you can call this operation to encrypt RSA keys, database access passwords, or other sensitive information.
   * *   When you migrate encrypted data across regions, you can call this operation in the destination region to encrypt the plaintext of the data key that is used to encrypt the migrated data in the source region. This way, the ciphertext of the data key is generated in the destination region. You can also call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the data key.
   * 
   * @param tmpReq - EncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EncryptResponse
   */
  async encryptWithOptions(tmpReq: EncryptRequest, runtime: $Util.RuntimeOptions): Promise<EncryptResponse> {
    Util.validateModel(tmpReq);
    let request = new EncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Encrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<EncryptResponse>(await this.callApi(params, req, runtime), new EncryptResponse({}));
    } else {
      return $tea.cast<EncryptResponse>(await this.execute(params, req, runtime), new EncryptResponse({}));
    }

  }

  /**
   * @remarks
   *   KMS uses the primary version of a specified CMK to encrypt data.
   * *   Only data of 6 KB or less can be encrypted. For example, you can call this operation to encrypt RSA keys, database access passwords, or other sensitive information.
   * *   When you migrate encrypted data across regions, you can call this operation in the destination region to encrypt the plaintext of the data key that is used to encrypt the migrated data in the source region. This way, the ciphertext of the data key is generated in the destination region. You can also call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the data key.
   * 
   * @param request - EncryptRequest
   * @returns EncryptResponse
   */
  async encrypt(request: EncryptRequest): Promise<EncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call the [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation to generate a data key, which is encrypted by a CMK. If you want to distribute the data key to other regions or cryptographic modules, you can call the ExportDataKey operation to use a public key to encrypt the data key.
   * Then, you can import the ciphertext of the data key to the cryptographic module where the private key is stored. This way, the data key is securely distributed from KMS to the cryptographic module. After the data key is imported to the cryptographic module, you can use it to encrypt or decrypt data.
   * 
   * @param tmpReq - ExportDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportDataKeyResponse
   */
  async exportDataKeyWithOptions(tmpReq: ExportDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<ExportDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new ExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ExportDataKeyResponse>(await this.callApi(params, req, runtime), new ExportDataKeyResponse({}));
    } else {
      return $tea.cast<ExportDataKeyResponse>(await this.execute(params, req, runtime), new ExportDataKeyResponse({}));
    }

  }

  /**
   * @remarks
   * You can call the [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation to generate a data key, which is encrypted by a CMK. If you want to distribute the data key to other regions or cryptographic modules, you can call the ExportDataKey operation to use a public key to encrypt the data key.
   * Then, you can import the ciphertext of the data key to the cryptographic module where the private key is stored. This way, the data key is securely distributed from KMS to the cryptographic module. After the data key is imported to the cryptographic module, you can use it to encrypt or decrypt data.
   * 
   * @param request - ExportDataKeyRequest
   * @returns ExportDataKeyResponse
   */
  async exportDataKey(request: ExportDataKeyRequest): Promise<ExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportDataKeyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * We recommend that you perform the following steps to import your data key to a cryptographic module:
   * *   Call the GenerateAndExportDataKey operation to generate a data key and obtain both the ciphertext of the data key encrypted by using the CMK and that encrypted by using the public key.
   * *   Store the ciphertext of the data key encrypted by using the CMK in KMS Secrets Manager or in a storage service such as ApsaraDB. This ciphertext is used for backup and restoration.
   * *   Import the ciphertext of the data key encrypted by using the public key to the cryptographic module where the private key is stored. Then, you can use the data key to encrypt or decrypt data.
   * >  The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the data keys randomly generated by calling this operation. You must take note of the data keys and the returned ciphertext.
   * 
   * @param tmpReq - GenerateAndExportDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateAndExportDataKeyResponse
   */
  async generateAndExportDataKeyWithOptions(tmpReq: GenerateAndExportDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateAndExportDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateAndExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    if (!Util.isUnset(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateAndExportDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateAndExportDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateAndExportDataKeyResponse({}));
    } else {
      return $tea.cast<GenerateAndExportDataKeyResponse>(await this.execute(params, req, runtime), new GenerateAndExportDataKeyResponse({}));
    }

  }

  /**
   * @remarks
   * We recommend that you perform the following steps to import your data key to a cryptographic module:
   * *   Call the GenerateAndExportDataKey operation to generate a data key and obtain both the ciphertext of the data key encrypted by using the CMK and that encrypted by using the public key.
   * *   Store the ciphertext of the data key encrypted by using the CMK in KMS Secrets Manager or in a storage service such as ApsaraDB. This ciphertext is used for backup and restoration.
   * *   Import the ciphertext of the data key encrypted by using the public key to the cryptographic module where the private key is stored. Then, you can use the data key to encrypt or decrypt data.
   * >  The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the data keys randomly generated by calling this operation. You must take note of the data keys and the returned ciphertext.
   * 
   * @param request - GenerateAndExportDataKeyRequest
   * @returns GenerateAndExportDataKeyResponse
   */
  async generateAndExportDataKey(request: GenerateAndExportDataKeyRequest): Promise<GenerateAndExportDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateAndExportDataKeyWithOptions(request, runtime);
  }

  /**
   * 生成一个数据密钥
   * 
   * @remarks
   * This operation creates a random data key, encrypts the data key by using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to locally encrypt your data without using KMS and store the encrypted data together with the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext parameter in the response and the ciphertext of the data key from the CiphertextBlob parameter in the response.
   * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key. Therefore, you need to store the ciphertext of the data key in persistent storage.
   * We recommend that you locally encrypt data by performing the following steps:
   * 1\\. Call the GenerateDataKey operation.
   * 2\\. Use the plaintext of the data key that you obtain to locally encrypt data without using KMS. Then, delete the plaintext of the data key from the memory.
   * 3\\. Store the encrypted data together with the ciphertext of the data key that you obtain.
   * We recommend that you locally decrypt data by performing the following steps:
   * *   Call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the locally stored ciphertext of the data key. The plaintext of data key is then returned.
   * *   Use the plaintext of the data key to locally decrypt data and then delete the plaintext of the data key from the memory.
   * In this example, a random data key is generated for the CMK whose ID is `7906979c-8e06-46a2-be2d-68e3ccbc****`.
   * 
   * @param tmpReq - GenerateDataKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDataKeyResponse
   */
  async generateDataKeyWithOptions(tmpReq: GenerateDataKeyRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDataKeyResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDataKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateDataKeyResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyResponse({}));
    } else {
      return $tea.cast<GenerateDataKeyResponse>(await this.execute(params, req, runtime), new GenerateDataKeyResponse({}));
    }

  }

  /**
   * 生成一个数据密钥
   * 
   * @remarks
   * This operation creates a random data key, encrypts the data key by using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to locally encrypt your data without using KMS and store the encrypted data together with the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext parameter in the response and the ciphertext of the data key from the CiphertextBlob parameter in the response.
   * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key. Therefore, you need to store the ciphertext of the data key in persistent storage.
   * We recommend that you locally encrypt data by performing the following steps:
   * 1\\. Call the GenerateDataKey operation.
   * 2\\. Use the plaintext of the data key that you obtain to locally encrypt data without using KMS. Then, delete the plaintext of the data key from the memory.
   * 3\\. Store the encrypted data together with the ciphertext of the data key that you obtain.
   * We recommend that you locally decrypt data by performing the following steps:
   * *   Call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the locally stored ciphertext of the data key. The plaintext of data key is then returned.
   * *   Use the plaintext of the data key to locally decrypt data and then delete the plaintext of the data key from the memory.
   * In this example, a random data key is generated for the CMK whose ID is `7906979c-8e06-46a2-be2d-68e3ccbc****`.
   * 
   * @param request - GenerateDataKeyRequest
   * @returns GenerateDataKeyResponse
   */
  async generateDataKey(request: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random data key, which can be used to encrypt local data.
   * 
   * @remarks
   * This operation creates a random data key, encrypts the data key by using a specific symmetric CMK, and returns the ciphertext of the data key. This operation serves the same purpose as the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html) operation. The only difference is that this operation does not return the plaintext of the data key.
   * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key.
   * > * This operation applies to the scenario when you do not need to use the data key to immediately encrypt data. Before you can use the data key to encrypt data, you must call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the ciphertext of the data key.
   * > * This operation is also suitable for a distributed system with different trust levels. For example, a system stores data in different partitions based on a preset trust policy. A module creates different partitions and generates different data keys for each partition in advance. This module is not involved in data production and consumption after it completes initialization of the control plane. This module is the key provider. When producing and consuming data, modules on the control plane obtain the ciphertext of the data key for a partition first. After decrypting the ciphertext of the data key, modules on the control plane use the plaintext of the data key to encrypt or decrypt data and then clear the plaintext of the data key from the memory. In such a system, the key provider does not need to obtain the plaintext of the data key. It only needs to have the permissions to call the GenerateDataKeyWithoutPlaintext operation. The data producers or consumers do not need to generate new data keys. They only need to have the permissions to call the Decrypt operation.
   * 
   * @param tmpReq - GenerateDataKeyWithoutPlaintextRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDataKeyWithoutPlaintextResponse
   */
  async generateDataKeyWithoutPlaintextWithOptions(tmpReq: GenerateDataKeyWithoutPlaintextRequest, runtime: $Util.RuntimeOptions): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateDataKeyWithoutPlaintextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!Util.isUnset(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateDataKeyWithoutPlaintext",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.callApi(params, req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
    } else {
      return $tea.cast<GenerateDataKeyWithoutPlaintextResponse>(await this.execute(params, req, runtime), new GenerateDataKeyWithoutPlaintextResponse({}));
    }

  }

  /**
   * Generates a random data key, which can be used to encrypt local data.
   * 
   * @remarks
   * This operation creates a random data key, encrypts the data key by using a specific symmetric CMK, and returns the ciphertext of the data key. This operation serves the same purpose as the [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html) operation. The only difference is that this operation does not return the plaintext of the data key.
   * The CMK that you specify in the request of this operation is only used to encrypt the data key and is not involved in the generation of the data key. KMS does not record or store the generated data key.
   * > * This operation applies to the scenario when you do not need to use the data key to immediately encrypt data. Before you can use the data key to encrypt data, you must call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the ciphertext of the data key.
   * > * This operation is also suitable for a distributed system with different trust levels. For example, a system stores data in different partitions based on a preset trust policy. A module creates different partitions and generates different data keys for each partition in advance. This module is not involved in data production and consumption after it completes initialization of the control plane. This module is the key provider. When producing and consuming data, modules on the control plane obtain the ciphertext of the data key for a partition first. After decrypting the ciphertext of the data key, modules on the control plane use the plaintext of the data key to encrypt or decrypt data and then clear the plaintext of the data key from the memory. In such a system, the key provider does not need to obtain the plaintext of the data key. It only needs to have the permissions to call the GenerateDataKeyWithoutPlaintext operation. The data producers or consumers do not need to generate new data keys. They only need to have the permissions to call the Decrypt operation.
   * 
   * @param request - GenerateDataKeyWithoutPlaintextRequest
   * @returns GenerateDataKeyWithoutPlaintextResponse
   */
  async generateDataKeyWithoutPlaintext(request: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateDataKeyWithoutPlaintextWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate, certificate chain, certificate ID, and certificate signing request (CSR) are returned.
   * 
   * @param request - GetCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertificateResponse
   */
  async getCertificateWithOptions(request: GetCertificateRequest, runtime: $Util.RuntimeOptions): Promise<GetCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetCertificateResponse>(await this.callApi(params, req, runtime), new GetCertificateResponse({}));
    } else {
      return $tea.cast<GetCertificateResponse>(await this.execute(params, req, runtime), new GetCertificateResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate, certificate chain, certificate ID, and certificate signing request (CSR) are returned.
   * 
   * @param request - GetCertificateRequest
   * @returns GetCertificateResponse
   */
  async getCertificate(request: GetCertificateRequest): Promise<GetCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a client key.
   * 
   * @param request - GetClientKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientKeyResponse
   */
  async getClientKeyWithOptions(request: GetClientKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetClientKeyResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClientKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetClientKeyResponse>(await this.callApi(params, req, runtime), new GetClientKeyResponse({}));
    } else {
      return $tea.cast<GetClientKeyResponse>(await this.execute(params, req, runtime), new GetClientKeyResponse({}));
    }

  }

  /**
   * Queries the information about a client key.
   * 
   * @param request - GetClientKeyRequest
   * @returns GetClientKeyResponse
   */
  async getClientKey(request: GetClientKeyRequest): Promise<GetClientKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClientKeyWithOptions(request, runtime);
  }

  /**
   * 仅可查询名称为 default 的 Key Policy，否则提示 Not Found。
   * 
   * @param request - GetKeyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeyPolicyResponse
   */
  async getKeyPolicyWithOptions(request: GetKeyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetKeyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKeyPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetKeyPolicyResponse>(await this.callApi(params, req, runtime), new GetKeyPolicyResponse({}));
    } else {
      return $tea.cast<GetKeyPolicyResponse>(await this.execute(params, req, runtime), new GetKeyPolicyResponse({}));
    }

  }

  /**
   * 仅可查询名称为 default 的 Key Policy，否则提示 Not Found。
   * 
   * @param request - GetKeyPolicyRequest
   * @returns GetKeyPolicyResponse
   */
  async getKeyPolicy(request: GetKeyPolicyRequest): Promise<GetKeyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKeyPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Key Management Service (KMS) instance.
   * 
   * @param request - GetKmsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKmsInstanceResponse
   */
  async getKmsInstanceWithOptions(request: GetKmsInstanceRequest, runtime: $Util.RuntimeOptions): Promise<GetKmsInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetKmsInstanceResponse>(await this.callApi(params, req, runtime), new GetKmsInstanceResponse({}));
    } else {
      return $tea.cast<GetKmsInstanceResponse>(await this.execute(params, req, runtime), new GetKmsInstanceResponse({}));
    }

  }

  /**
   * Queries the details of a Key Management Service (KMS) instance.
   * 
   * @param request - GetKmsInstanceRequest
   * @returns GetKmsInstanceResponse
   */
  async getKmsInstance(request: GetKmsInstanceRequest): Promise<GetKmsInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getKmsInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the parameters that are used to import key material for a customer master key (CMK).
   * 
   * @remarks
   * The returned parameters can be used to call the [ImportKeyMaterial](https://www.alibabacloud.com/help/en/key-management-service/latest/importkeymaterial) operation.
   * - You can import key material only for CMKs whose Origin parameter is set to EXTERNAL.
   * - The public key and token that are returned by the GetParametersForImport operation must be used together. The public key and token can be used to import key material only for the CMK that is specified when you call the operation.
   * - The public key and token that are returned vary each time you call the GetParametersForImport operation.
   * - You must specify the type of the public key and the encryption algorithm that are used to encrypt key material. The following table lists the types of public keys and the encryption algorithms allowed for each type.   
   * | Public key type | Encryption algorithm | Description |
   * | --------------- | -------------------- | ----------- |
   * | RSA_2048 | RSAES_PKCS1_V1_5 
   * RSAES_OAEP_SHA_1 
   * RSAES_OAEP_SHA_256 | CMKs of all regions and all protection levels are supported. 
   * Dedicated Key Management Service (KMS) does not support RSAES_OAEP_SHA_1. |
   * | EC_SM2 | SM2PKE | CMKs whose ProtectionLevel is set to HSM are supported. The SM2 algorithm is developed and approved by the State Cryptography Administration of China. The SM2 algorithm can be used only to import key material for a CMK whose ProtectionLevel is set to HSM. You can use the SM2 algorithm only when you enable the Managed HSM feature for KMS in the Chinese mainland. For more information, see [Overview of Managed HSM](https://www.alibabacloud.com/help/en/key-management-service/latest/managed-hsm-overview). |
   * For more information, see [Import key material](https://www.alibabacloud.com/help/en/key-management-service/latest/import-key-material). This topic provides an example on how to query the parameters that are used to import key material for a CMK. The ID of the CMK is `1234abcd-12ab-34cd-56ef-12345678****`, the encryption algorithm is `RSAES_PKCS1_V1_5`, and the public key is of the `RSA_2048` type. The parameters that are returned include the ID of the CMK, the public key that is used to encrypt the key material, the token that is used to import the key material, and the time when the token expires.
   * 
   * @param request - GetParametersForImportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParametersForImportResponse
   */
  async getParametersForImportWithOptions(request: GetParametersForImportRequest, runtime: $Util.RuntimeOptions): Promise<GetParametersForImportResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!Util.isUnset(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetParametersForImport",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetParametersForImportResponse>(await this.callApi(params, req, runtime), new GetParametersForImportResponse({}));
    } else {
      return $tea.cast<GetParametersForImportResponse>(await this.execute(params, req, runtime), new GetParametersForImportResponse({}));
    }

  }

  /**
   * Queries the parameters that are used to import key material for a customer master key (CMK).
   * 
   * @remarks
   * The returned parameters can be used to call the [ImportKeyMaterial](https://www.alibabacloud.com/help/en/key-management-service/latest/importkeymaterial) operation.
   * - You can import key material only for CMKs whose Origin parameter is set to EXTERNAL.
   * - The public key and token that are returned by the GetParametersForImport operation must be used together. The public key and token can be used to import key material only for the CMK that is specified when you call the operation.
   * - The public key and token that are returned vary each time you call the GetParametersForImport operation.
   * - You must specify the type of the public key and the encryption algorithm that are used to encrypt key material. The following table lists the types of public keys and the encryption algorithms allowed for each type.   
   * | Public key type | Encryption algorithm | Description |
   * | --------------- | -------------------- | ----------- |
   * | RSA_2048 | RSAES_PKCS1_V1_5 
   * RSAES_OAEP_SHA_1 
   * RSAES_OAEP_SHA_256 | CMKs of all regions and all protection levels are supported. 
   * Dedicated Key Management Service (KMS) does not support RSAES_OAEP_SHA_1. |
   * | EC_SM2 | SM2PKE | CMKs whose ProtectionLevel is set to HSM are supported. The SM2 algorithm is developed and approved by the State Cryptography Administration of China. The SM2 algorithm can be used only to import key material for a CMK whose ProtectionLevel is set to HSM. You can use the SM2 algorithm only when you enable the Managed HSM feature for KMS in the Chinese mainland. For more information, see [Overview of Managed HSM](https://www.alibabacloud.com/help/en/key-management-service/latest/managed-hsm-overview). |
   * For more information, see [Import key material](https://www.alibabacloud.com/help/en/key-management-service/latest/import-key-material). This topic provides an example on how to query the parameters that are used to import key material for a CMK. The ID of the CMK is `1234abcd-12ab-34cd-56ef-12345678****`, the encryption algorithm is `RSAES_PKCS1_V1_5`, and the public key is of the `RSA_2048` type. The parameters that are returned include the ID of the CMK, the public key that is used to encrypt the key material, the token that is used to import the key material, and the time when the token expires.
   * 
   * @param request - GetParametersForImportRequest
   * @returns GetParametersForImportResponse
   */
  async getParametersForImport(request: GetParametersForImportRequest): Promise<GetParametersForImportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getParametersForImportWithOptions(request, runtime);
  }

  /**
   * @param request - GetPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicKeyResponse
   */
  async getPublicKeyWithOptions(request: GetPublicKeyRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicKeyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicKey",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetPublicKeyResponse>(await this.callApi(params, req, runtime), new GetPublicKeyResponse({}));
    } else {
      return $tea.cast<GetPublicKeyResponse>(await this.execute(params, req, runtime), new GetPublicKeyResponse({}));
    }

  }

  /**
   * @param request - GetPublicKeyRequest
   * @returns GetPublicKeyResponse
   */
  async getPublicKey(request: GetPublicKeyRequest): Promise<GetPublicKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  /**
   * @param request - GetRandomPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRandomPasswordResponse
   */
  async getRandomPasswordWithOptions(request: GetRandomPasswordRequest, runtime: $Util.RuntimeOptions): Promise<GetRandomPasswordResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.excludeCharacters)) {
      query["ExcludeCharacters"] = request.excludeCharacters;
    }

    if (!Util.isUnset(request.excludeLowercase)) {
      query["ExcludeLowercase"] = request.excludeLowercase;
    }

    if (!Util.isUnset(request.excludeNumbers)) {
      query["ExcludeNumbers"] = request.excludeNumbers;
    }

    if (!Util.isUnset(request.excludePunctuation)) {
      query["ExcludePunctuation"] = request.excludePunctuation;
    }

    if (!Util.isUnset(request.excludeUppercase)) {
      query["ExcludeUppercase"] = request.excludeUppercase;
    }

    if (!Util.isUnset(request.passwordLength)) {
      query["PasswordLength"] = request.passwordLength;
    }

    if (!Util.isUnset(request.requireEachIncludedType)) {
      query["RequireEachIncludedType"] = request.requireEachIncludedType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRandomPassword",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetRandomPasswordResponse>(await this.callApi(params, req, runtime), new GetRandomPasswordResponse({}));
    } else {
      return $tea.cast<GetRandomPasswordResponse>(await this.execute(params, req, runtime), new GetRandomPasswordResponse({}));
    }

  }

  /**
   * @param request - GetRandomPasswordRequest
   * @returns GetRandomPasswordResponse
   */
  async getRandomPassword(request: GetRandomPasswordRequest): Promise<GetRandomPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

  /**
   * 仅可查询名称为 default 的 Secret Policy，否则提示 Not Found。
   * 
   * @param request - GetSecretPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretPolicyResponse
   */
  async getSecretPolicyWithOptions(request: GetSecretPolicyRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSecretPolicyResponse>(await this.callApi(params, req, runtime), new GetSecretPolicyResponse({}));
    } else {
      return $tea.cast<GetSecretPolicyResponse>(await this.execute(params, req, runtime), new GetSecretPolicyResponse({}));
    }

  }

  /**
   * 仅可查询名称为 default 的 Secret Policy，否则提示 Not Found。
   * 
   * @param request - GetSecretPolicyRequest
   * @returns GetSecretPolicyResponse
   */
  async getSecretPolicy(request: GetSecretPolicyRequest): Promise<GetSecretPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretPolicyWithOptions(request, runtime);
  }

  /**
   * 调用GetSecretValue接口获取凭据值。
   * 
   * @remarks
   * If you do not specify a version number or stage label, Secrets Manager returns the secret value of the version marked with ACSCurrent.
   * If a customer master key (CMK) is specified to encrypt the secret value, you must also have the `kms:Decrypt` permission on the CMK to call the GetSecretValue operation.
   * In this example, the value of the secret named `secret001` is obtained. The secret value is returned in the `SecretData` parameter. The secret value is `testdata1`.
   * 
   * @param request - GetSecretValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretValueResponse
   */
  async getSecretValueWithOptions(request: GetSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<GetSecretValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.fetchExtendedConfig)) {
      query["FetchExtendedConfig"] = request.fetchExtendedConfig;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSecretValue",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<GetSecretValueResponse>(await this.callApi(params, req, runtime), new GetSecretValueResponse({}));
    } else {
      return $tea.cast<GetSecretValueResponse>(await this.execute(params, req, runtime), new GetSecretValueResponse({}));
    }

  }

  /**
   * 调用GetSecretValue接口获取凭据值。
   * 
   * @remarks
   * If you do not specify a version number or stage label, Secrets Manager returns the secret value of the version marked with ACSCurrent.
   * If a customer master key (CMK) is specified to encrypt the secret value, you must also have the `kms:Decrypt` permission on the CMK to call the GetSecretValue operation.
   * In this example, the value of the secret named `secret001` is obtained. The secret value is returned in the `SecretData` parameter. The secret value is `testdata1`.
   * 
   * @param request - GetSecretValueRequest
   * @returns GetSecretValueResponse
   */
  async getSecretValue(request: GetSecretValueRequest): Promise<GetSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

  /**
   * Call the ImportKeyMaterial operation to import the key material.
   * 
   * @remarks
   * Call [CreateKey](https://help.aliyun.com/document_detail/28947.html) when creating a CMK, you can select its key material source as external. **Origin** set to **EXTERNAL**. This API is used to import the key material into the CMK.
   * *   To view the CMK **Origin**, see [DescribeKey](https://help.aliyun.com/document_detail/28952.html).
   * *   Before importing key material, you need to call the [GetParametersForImport](https://help.aliyun.com/document_detail/68621.html) obtain the parameters required to import the key material, including the public key and import token.
   * > *   The key type of the pair is **Aliyun_AES_256** the key material must be 256 bits. The key type must be **Aliyun_SM4** the CMK and key material must be 128 bits.
   * > *   You can set the expiration time for the key material, or you can set it to never expire.
   * > *   You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
   * > *   After the imported key material expires or is deleted, the specified CMK is unavailable until the same key material are imported again.
   * > *   A Key material can be imported to multiple cmks, but any Data or Data Key encrypted by one CMK cannot be decrypted by another CMK.
   * 
   * @param request - ImportKeyMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportKeyMaterialResponse
   */
  async importKeyMaterialWithOptions(request: ImportKeyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<ImportKeyMaterialResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.encryptedKeyMaterial)) {
      query["EncryptedKeyMaterial"] = request.encryptedKeyMaterial;
    }

    if (!Util.isUnset(request.importToken)) {
      query["ImportToken"] = request.importToken;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.keyMaterialExpireUnix)) {
      query["KeyMaterialExpireUnix"] = request.keyMaterialExpireUnix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportKeyMaterial",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ImportKeyMaterialResponse>(await this.callApi(params, req, runtime), new ImportKeyMaterialResponse({}));
    } else {
      return $tea.cast<ImportKeyMaterialResponse>(await this.execute(params, req, runtime), new ImportKeyMaterialResponse({}));
    }

  }

  /**
   * Call the ImportKeyMaterial operation to import the key material.
   * 
   * @remarks
   * Call [CreateKey](https://help.aliyun.com/document_detail/28947.html) when creating a CMK, you can select its key material source as external. **Origin** set to **EXTERNAL**. This API is used to import the key material into the CMK.
   * *   To view the CMK **Origin**, see [DescribeKey](https://help.aliyun.com/document_detail/28952.html).
   * *   Before importing key material, you need to call the [GetParametersForImport](https://help.aliyun.com/document_detail/68621.html) obtain the parameters required to import the key material, including the public key and import token.
   * > *   The key type of the pair is **Aliyun_AES_256** the key material must be 256 bits. The key type must be **Aliyun_SM4** the CMK and key material must be 128 bits.
   * > *   You can set the expiration time for the key material, or you can set it to never expire.
   * > *   You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
   * > *   After the imported key material expires or is deleted, the specified CMK is unavailable until the same key material are imported again.
   * > *   A Key material can be imported to multiple cmks, but any Data or Data Key encrypted by one CMK cannot be decrypted by another CMK.
   * 
   * @param request - ImportKeyMaterialRequest
   * @returns ImportKeyMaterialResponse
   */
  async importKeyMaterial(request: ImportKeyMaterialRequest): Promise<ImportKeyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importKeyMaterialWithOptions(request, runtime);
  }

  /**
   * Queries all aliases in the current region for the current account.
   * 
   * @param request - ListAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(request: ListAliasesRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliases",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
    } else {
      return $tea.cast<ListAliasesResponse>(await this.execute(params, req, runtime), new ListAliasesResponse({}));
    }

  }

  /**
   * Queries all aliases in the current region for the current account.
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesWithOptions(request, runtime);
  }

  /**
   * @param request - ListAliasesByKeyIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesByKeyIdResponse
   */
  async listAliasesByKeyIdWithOptions(request: ListAliasesByKeyIdRequest, runtime: $Util.RuntimeOptions): Promise<ListAliasesByKeyIdResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliasesByKeyId",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListAliasesByKeyIdResponse>(await this.callApi(params, req, runtime), new ListAliasesByKeyIdResponse({}));
    } else {
      return $tea.cast<ListAliasesByKeyIdResponse>(await this.execute(params, req, runtime), new ListAliasesByKeyIdResponse({}));
    }

  }

  /**
   * @param request - ListAliasesByKeyIdRequest
   * @returns ListAliasesByKeyIdResponse
   */
  async listAliasesByKeyId(request: ListAliasesByKeyIdRequest): Promise<ListAliasesByKeyIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
  }

  /**
   * Queries a list of application access points (AAPs).
   * 
   * @param request - ListApplicationAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationAccessPointsResponse
   */
  async listApplicationAccessPointsWithOptions(request: ListApplicationAccessPointsRequest, runtime: $Util.RuntimeOptions): Promise<ListApplicationAccessPointsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListApplicationAccessPoints",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListApplicationAccessPointsResponse>(await this.callApi(params, req, runtime), new ListApplicationAccessPointsResponse({}));
    } else {
      return $tea.cast<ListApplicationAccessPointsResponse>(await this.execute(params, req, runtime), new ListApplicationAccessPointsResponse({}));
    }

  }

  /**
   * Queries a list of application access points (AAPs).
   * 
   * @param request - ListApplicationAccessPointsRequest
   * @returns ListApplicationAccessPointsResponse
   */
  async listApplicationAccessPoints(request: ListApplicationAccessPointsRequest): Promise<ListApplicationAccessPointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listApplicationAccessPointsWithOptions(request, runtime);
  }

  /**
   * @param request - ListClientKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientKeysResponse
   */
  async listClientKeysWithOptions(request: ListClientKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListClientKeysResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClientKeys",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListClientKeysResponse>(await this.callApi(params, req, runtime), new ListClientKeysResponse({}));
    } else {
      return $tea.cast<ListClientKeysResponse>(await this.execute(params, req, runtime), new ListClientKeysResponse({}));
    }

  }

  /**
   * @param request - ListClientKeysRequest
   * @returns ListClientKeysResponse
   */
  async listClientKeys(request: ListClientKeysRequest): Promise<ListClientKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClientKeysWithOptions(request, runtime);
  }

  /**
   * Queries all versions of a specified CMK.
   * 
   * @param request - ListKeyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeyVersionsResponse
   */
  async listKeyVersionsWithOptions(request: ListKeyVersionsRequest, runtime: $Util.RuntimeOptions): Promise<ListKeyVersionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKeyVersions",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKeyVersionsResponse>(await this.callApi(params, req, runtime), new ListKeyVersionsResponse({}));
    } else {
      return $tea.cast<ListKeyVersionsResponse>(await this.execute(params, req, runtime), new ListKeyVersionsResponse({}));
    }

  }

  /**
   * Queries all versions of a specified CMK.
   * 
   * @param request - ListKeyVersionsRequest
   * @returns ListKeyVersionsResponse
   */
  async listKeyVersions(request: ListKeyVersionsRequest): Promise<ListKeyVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeyVersionsWithOptions(request, runtime);
  }

  /**
   * Queries all customer master keys (CMKs) of the current Alibaba Cloud account in the current region.
   * 
   * @param request - ListKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeysResponse
   */
  async listKeysWithOptions(request: ListKeysRequest, runtime: $Util.RuntimeOptions): Promise<ListKeysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKeys",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKeysResponse>(await this.callApi(params, req, runtime), new ListKeysResponse({}));
    } else {
      return $tea.cast<ListKeysResponse>(await this.execute(params, req, runtime), new ListKeysResponse({}));
    }

  }

  /**
   * Queries all customer master keys (CMKs) of the current Alibaba Cloud account in the current region.
   * 
   * @param request - ListKeysRequest
   * @returns ListKeysResponse
   */
  async listKeys(request: ListKeysRequest): Promise<ListKeysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

  /**
   * Queries a list of Key Management Service (KMS) instances.
   * 
   * @param request - ListKmsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKmsInstancesResponse
   */
  async listKmsInstancesWithOptions(request: ListKmsInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListKmsInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListKmsInstances",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListKmsInstancesResponse>(await this.callApi(params, req, runtime), new ListKmsInstancesResponse({}));
    } else {
      return $tea.cast<ListKmsInstancesResponse>(await this.execute(params, req, runtime), new ListKmsInstancesResponse({}));
    }

  }

  /**
   * Queries a list of Key Management Service (KMS) instances.
   * 
   * @param request - ListKmsInstancesRequest
   * @returns ListKmsInstancesResponse
   */
  async listKmsInstances(request: ListKmsInstancesRequest): Promise<ListKmsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listKmsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of access control rules.
   * 
   * @param request - ListNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkRulesResponse
   */
  async listNetworkRulesWithOptions(request: ListNetworkRulesRequest, runtime: $Util.RuntimeOptions): Promise<ListNetworkRulesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNetworkRules",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListNetworkRulesResponse>(await this.callApi(params, req, runtime), new ListNetworkRulesResponse({}));
    } else {
      return $tea.cast<ListNetworkRulesResponse>(await this.execute(params, req, runtime), new ListNetworkRulesResponse({}));
    }

  }

  /**
   * Queries a list of access control rules.
   * 
   * @param request - ListNetworkRulesRequest
   * @returns ListNetworkRulesResponse
   */
  async listNetworkRules(request: ListNetworkRulesRequest): Promise<ListNetworkRulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: ListPoliciesRequest, runtime: $Util.RuntimeOptions): Promise<ListPoliciesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPolicies",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListPoliciesResponse>(await this.callApi(params, req, runtime), new ListPoliciesResponse({}));
    } else {
      return $tea.cast<ListPoliciesResponse>(await this.execute(params, req, runtime), new ListPoliciesResponse({}));
    }

  }

  /**
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: ListPoliciesRequest): Promise<ListPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Request format: KeyId="string"
   * 
   * @param request - ListResourceTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTagsResponse
   */
  async listResourceTagsWithOptions(request: ListResourceTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTags",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListResourceTagsResponse>(await this.callApi(params, req, runtime), new ListResourceTagsResponse({}));
    } else {
      return $tea.cast<ListResourceTagsResponse>(await this.execute(params, req, runtime), new ListResourceTagsResponse({}));
    }

  }

  /**
   * @remarks
   * Request format: KeyId="string"
   * 
   * @param request - ListResourceTagsRequest
   * @returns ListResourceTagsResponse
   */
  async listResourceTags(request: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * The secret value is not included in the returned version information. By default, deprecated secret versions are not returned.
   * 
   * @param request - ListSecretVersionIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretVersionIdsResponse
   */
  async listSecretVersionIdsWithOptions(request: ListSecretVersionIdsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretVersionIdsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.includeDeprecated)) {
      query["IncludeDeprecated"] = request.includeDeprecated;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecretVersionIds",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListSecretVersionIdsResponse>(await this.callApi(params, req, runtime), new ListSecretVersionIdsResponse({}));
    } else {
      return $tea.cast<ListSecretVersionIdsResponse>(await this.execute(params, req, runtime), new ListSecretVersionIdsResponse({}));
    }

  }

  /**
   * @remarks
   * The secret value is not included in the returned version information. By default, deprecated secret versions are not returned.
   * 
   * @param request - ListSecretVersionIdsRequest
   * @returns ListSecretVersionIdsResponse
   */
  async listSecretVersionIds(request: ListSecretVersionIdsRequest): Promise<ListSecretVersionIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretVersionIdsWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Specifies whether to return the resource tags of the secret. Valid values:
   * *   true: returns the resource tags.
   * *   false: does not return the resource tags. This is the default value.
   * 
   * @param request - ListSecretsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretsResponse
   */
  async listSecretsWithOptions(request: ListSecretsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecretsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!Util.isUnset(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecrets",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListSecretsResponse>(await this.callApi(params, req, runtime), new ListSecretsResponse({}));
    } else {
      return $tea.cast<ListSecretsResponse>(await this.execute(params, req, runtime), new ListSecretsResponse({}));
    }

  }

  /**
   * @remarks
   * Specifies whether to return the resource tags of the secret. Valid values:
   * *   true: returns the resource tags.
   * *   false: does not return the resource tags. This is the default value.
   * 
   * @param request - ListSecretsRequest
   * @returns ListSecretsResponse
   */
  async listSecrets(request: ListSecretsRequest): Promise<ListSecretsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a key or a secret.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $tea.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Queries the tags of a key or a secret.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Activates Key Management Service (KMS) under your Alibaba cloud account.
   * 
   * @remarks
   * When you call this operation, note that:
   * - KMS is a paid service. For more information about the billing method, see [Billing description](https://www.alibabacloud.com/help/en/key-management-service/latest/billing-billing).
   * - An Alibaba Cloud account can activate KMS only once.
   * - Make sure that your Alibaba Cloud account has passed real-name authentication.
   * 
   * @param request - OpenKmsServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenKmsServiceResponse
   */
  async openKmsServiceWithOptions(runtime: $Util.RuntimeOptions): Promise<OpenKmsServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "OpenKmsService",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<OpenKmsServiceResponse>(await this.callApi(params, req, runtime), new OpenKmsServiceResponse({}));
    } else {
      return $tea.cast<OpenKmsServiceResponse>(await this.execute(params, req, runtime), new OpenKmsServiceResponse({}));
    }

  }

  /**
   * Activates Key Management Service (KMS) under your Alibaba cloud account.
   * 
   * @remarks
   * When you call this operation, note that:
   * - KMS is a paid service. For more information about the billing method, see [Billing description](https://www.alibabacloud.com/help/en/key-management-service/latest/billing-billing).
   * - An Alibaba Cloud account can activate KMS only once.
   * - Make sure that your Alibaba Cloud account has passed real-name authentication.
   * @returns OpenKmsServiceResponse
   */
  async openKmsService(): Promise<OpenKmsServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openKmsServiceWithOptions(runtime);
  }

  /**
   * @remarks
   * This operation is used to store the secret values of new versions. It cannot be used to modify the secret value of an existing version.
   * By default, the newly stored secret value is marked with ACSCurrent, and the mark for the previous version of the secret value is changed from ACSCurrent to ACSPrevious. If you specify the VersionStage parameter, the newly stored secret value is marked with the stage label that you specify.
   * You must specify a version number when you call the operation. Secrets Manager performs operations based on the following rules:
   * *   If the specified version number does not exist in the secret, Secrets Manager creates the version and stores the secret value.
   * *   If the specified version number already exists in the secret and the secret value of the existing version is the same as the secret value that you specify, Secrets Manager ignores the request and returns a success message. The request is idempotent.
   * *   If the specified version number already exists in the secret but the secret value of the existing version is different from the secret value that you specify, Secrets Manager rejects the request and returns a failure message.
   * Limits: This operation is available only for standard secrets.
   * In this example, the secret value of a new version is stored into the `secret001` secret. The `VersionId` parameter is set to `00000000000000000000000000000000203` as the new version, and the `SecretData` parameter is set to `importantdata`.
   * 
   * @param request - PutSecretValueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutSecretValueResponse
   */
  async putSecretValueWithOptions(request: PutSecretValueRequest, runtime: $Util.RuntimeOptions): Promise<PutSecretValueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!Util.isUnset(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!Util.isUnset(request.versionStages)) {
      query["VersionStages"] = request.versionStages;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutSecretValue",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<PutSecretValueResponse>(await this.callApi(params, req, runtime), new PutSecretValueResponse({}));
    } else {
      return $tea.cast<PutSecretValueResponse>(await this.execute(params, req, runtime), new PutSecretValueResponse({}));
    }

  }

  /**
   * @remarks
   * This operation is used to store the secret values of new versions. It cannot be used to modify the secret value of an existing version.
   * By default, the newly stored secret value is marked with ACSCurrent, and the mark for the previous version of the secret value is changed from ACSCurrent to ACSPrevious. If you specify the VersionStage parameter, the newly stored secret value is marked with the stage label that you specify.
   * You must specify a version number when you call the operation. Secrets Manager performs operations based on the following rules:
   * *   If the specified version number does not exist in the secret, Secrets Manager creates the version and stores the secret value.
   * *   If the specified version number already exists in the secret and the secret value of the existing version is the same as the secret value that you specify, Secrets Manager ignores the request and returns a success message. The request is idempotent.
   * *   If the specified version number already exists in the secret but the secret value of the existing version is different from the secret value that you specify, Secrets Manager rejects the request and returns a failure message.
   * Limits: This operation is available only for standard secrets.
   * In this example, the secret value of a new version is stored into the `secret001` secret. The `VersionId` parameter is set to `00000000000000000000000000000000203` as the new version, and the `SecretData` parameter is set to `importantdata`.
   * 
   * @param request - PutSecretValueRequest
   * @returns PutSecretValueResponse
   */
  async putSecretValue(request: PutSecretValueRequest): Promise<PutSecretValueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.putSecretValueWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can call this operation in the following scenarios:
   * *   After the CMK that was used to encrypt your data is rotated, you can call this operation to use the latest CMK version to re-encrypt the data. For more information about automatic key rotation, see [Configure automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * *   The CMK that was used to encrypt your data remains unchanged, but EncryptionContext is changed. In this scenario, you can call this operation to re-encrypt the data.
   * *   You can call this operation to use a CMK in KMS to re-encrypt data or a data key that was previously encrypted by a different CMK.
   * To use the ReEncrypt operation, you must have two permissions:
   * *   kms:ReEncryptFrom on the source CMK
   * *   kms:ReEncryptTo on the destination CMK
   * *   For simplicity, you can specify kms:ReEncrypt\\* to allow both of the preceding permissions.
   * 
   * @param tmpReq - ReEncryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReEncryptResponse
   */
  async reEncryptWithOptions(tmpReq: ReEncryptRequest, runtime: $Util.RuntimeOptions): Promise<ReEncryptResponse> {
    Util.validateModel(tmpReq);
    let request = new ReEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.destinationEncryptionContext)) {
      request.destinationEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationEncryptionContext, "DestinationEncryptionContext", "json");
    }

    if (!Util.isUnset(tmpReq.sourceEncryptionContext)) {
      request.sourceEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEncryptionContext, "SourceEncryptionContext", "json");
    }

    let query = { };
    if (!Util.isUnset(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!Util.isUnset(request.destinationEncryptionContextShrink)) {
      query["DestinationEncryptionContext"] = request.destinationEncryptionContextShrink;
    }

    if (!Util.isUnset(request.destinationKeyId)) {
      query["DestinationKeyId"] = request.destinationKeyId;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.sourceEncryptionAlgorithm)) {
      query["SourceEncryptionAlgorithm"] = request.sourceEncryptionAlgorithm;
    }

    if (!Util.isUnset(request.sourceEncryptionContextShrink)) {
      query["SourceEncryptionContext"] = request.sourceEncryptionContextShrink;
    }

    if (!Util.isUnset(request.sourceKeyId)) {
      query["SourceKeyId"] = request.sourceKeyId;
    }

    if (!Util.isUnset(request.sourceKeyVersionId)) {
      query["SourceKeyVersionId"] = request.sourceKeyVersionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ReEncrypt",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ReEncryptResponse>(await this.callApi(params, req, runtime), new ReEncryptResponse({}));
    } else {
      return $tea.cast<ReEncryptResponse>(await this.execute(params, req, runtime), new ReEncryptResponse({}));
    }

  }

  /**
   * @remarks
   * You can call this operation in the following scenarios:
   * *   After the CMK that was used to encrypt your data is rotated, you can call this operation to use the latest CMK version to re-encrypt the data. For more information about automatic key rotation, see [Configure automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * *   The CMK that was used to encrypt your data remains unchanged, but EncryptionContext is changed. In this scenario, you can call this operation to re-encrypt the data.
   * *   You can call this operation to use a CMK in KMS to re-encrypt data or a data key that was previously encrypted by a different CMK.
   * To use the ReEncrypt operation, you must have two permissions:
   * *   kms:ReEncryptFrom on the source CMK
   * *   kms:ReEncryptTo on the destination CMK
   * *   For simplicity, you can specify kms:ReEncrypt\\* to allow both of the preceding permissions.
   * 
   * @param request - ReEncryptRequest
   * @returns ReEncryptResponse
   */
  async reEncrypt(request: ReEncryptRequest): Promise<ReEncryptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
   * 
   * @param request - RestoreSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreSecretResponse
   */
  async restoreSecretWithOptions(request: RestoreSecretRequest, runtime: $Util.RuntimeOptions): Promise<RestoreSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RestoreSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<RestoreSecretResponse>(await this.callApi(params, req, runtime), new RestoreSecretResponse({}));
    } else {
      return $tea.cast<RestoreSecretResponse>(await this.execute(params, req, runtime), new RestoreSecretResponse({}));
    }

  }

  /**
   * @remarks
   * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
   * 
   * @param request - RestoreSecretRequest
   * @returns RestoreSecretResponse
   */
  async restoreSecret(request: RestoreSecretRequest): Promise<RestoreSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.restoreSecretWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Limits:
   * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
   * • The RotateSecret operation is unavailable for standard secrets.
   * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
   * 
   * @param request - RotateSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RotateSecretResponse
   */
  async rotateSecretWithOptions(request: RotateSecretRequest, runtime: $Util.RuntimeOptions): Promise<RotateSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RotateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<RotateSecretResponse>(await this.callApi(params, req, runtime), new RotateSecretResponse({}));
    } else {
      return $tea.cast<RotateSecretResponse>(await this.execute(params, req, runtime), new RotateSecretResponse({}));
    }

  }

  /**
   * @remarks
   * Limits:
   * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
   * • The RotateSecret operation is unavailable for standard secrets.
   * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
   * 
   * @param request - RotateSecretRequest
   * @returns RotateSecretResponse
   */
  async rotateSecret(request: RotateSecretRequest): Promise<RotateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rotateSecretWithOptions(request, runtime);
  }

  /**
   * @remarks
   * During the scheduled period, the CMK is in the PendingDeletion state and cannot be used to encrypt data, decrypt data, or generate data keys.
   * After a CMK is deleted, it cannot be recovered. Data that is encrypted and data keys that are generated by using the CMK cannot be decrypted. To prevent accidental deletion of CMKs, Key Management Service (KMS) allows you to only schedule key deletion tasks. You cannot directly delete CMKs. If you want to delete a CMK, call the [DisableKey](https://help.aliyun.com/document_detail/35151.html) operation to disable the CMK.
   * When you call this operation, you must specify a scheduled period between 7 days to 366 days. The scheduled period starts from the time when you submit the request. You can call the [CancelKeyDeletion](https://help.aliyun.com/document_detail/44197.html) operation to cancel the key deletion task before the scheduled period ends.
   * 
   * @param request - ScheduleKeyDeletionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScheduleKeyDeletionResponse
   */
  async scheduleKeyDeletionWithOptions(request: ScheduleKeyDeletionRequest, runtime: $Util.RuntimeOptions): Promise<ScheduleKeyDeletionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.pendingWindowInDays)) {
      query["PendingWindowInDays"] = request.pendingWindowInDays;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ScheduleKeyDeletion",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<ScheduleKeyDeletionResponse>(await this.callApi(params, req, runtime), new ScheduleKeyDeletionResponse({}));
    } else {
      return $tea.cast<ScheduleKeyDeletionResponse>(await this.execute(params, req, runtime), new ScheduleKeyDeletionResponse({}));
    }

  }

  /**
   * @remarks
   * During the scheduled period, the CMK is in the PendingDeletion state and cannot be used to encrypt data, decrypt data, or generate data keys.
   * After a CMK is deleted, it cannot be recovered. Data that is encrypted and data keys that are generated by using the CMK cannot be decrypted. To prevent accidental deletion of CMKs, Key Management Service (KMS) allows you to only schedule key deletion tasks. You cannot directly delete CMKs. If you want to delete a CMK, call the [DisableKey](https://help.aliyun.com/document_detail/35151.html) operation to disable the CMK.
   * When you call this operation, you must specify a scheduled period between 7 days to 366 days. The scheduled period starts from the time when you submit the request. You can call the [CancelKeyDeletion](https://help.aliyun.com/document_detail/44197.html) operation to cancel the key deletion task before the scheduled period ends.
   * 
   * @param request - ScheduleKeyDeletionRequest
   * @returns ScheduleKeyDeletionResponse
   */
  async scheduleKeyDeletion(request: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.scheduleKeyDeletionWithOptions(request, runtime);
  }

  /**
   * Enables or disables deletion protection for a customer master key (CMK).
   * 
   * @remarks
   *   After you enable deletion protection for a CMK, you cannot delete the CMK. If you want to delete the CMK, you must first disable deletion protection for the CMK.
   * *   Before you can call the SetDeletionProtection operation, make sure that the required CMK is not in the Pending Deletion state. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the CMK status, which is specified by the KeyState parameter.
   * You can enable deletion protection for the CMK whose Alibaba Cloud Resource Name (ARN) is `acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****` by using parameter settings provided in this topic. The CMK ARN is specified by the ProtectedResourceArn parameter.
   * 
   * @param request - SetDeletionProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtectionWithOptions(request: SetDeletionProtectionRequest, runtime: $Util.RuntimeOptions): Promise<SetDeletionProtectionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.deletionProtectionDescription)) {
      query["DeletionProtectionDescription"] = request.deletionProtectionDescription;
    }

    if (!Util.isUnset(request.enableDeletionProtection)) {
      query["EnableDeletionProtection"] = request.enableDeletionProtection;
    }

    if (!Util.isUnset(request.protectedResourceArn)) {
      query["ProtectedResourceArn"] = request.protectedResourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetDeletionProtection",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new SetDeletionProtectionResponse({}));
    } else {
      return $tea.cast<SetDeletionProtectionResponse>(await this.execute(params, req, runtime), new SetDeletionProtectionResponse({}));
    }

  }

  /**
   * Enables or disables deletion protection for a customer master key (CMK).
   * 
   * @remarks
   *   After you enable deletion protection for a CMK, you cannot delete the CMK. If you want to delete the CMK, you must first disable deletion protection for the CMK.
   * *   Before you can call the SetDeletionProtection operation, make sure that the required CMK is not in the Pending Deletion state. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the CMK status, which is specified by the KeyState parameter.
   * You can enable deletion protection for the CMK whose Alibaba Cloud Resource Name (ARN) is `acs:kms:cn-hangzhou:123213123****:key/0225f411-b21d-46d1-be5b-93931c82****` by using parameter settings provided in this topic. The CMK ARN is specified by the ProtectedResourceArn parameter.
   * 
   * @param request - SetDeletionProtectionRequest
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtection(request: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * 可以设置一条 Key Policy，且名称必须为 default。
   * 
   * @param request - SetKeyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetKeyPolicyResponse
   */
  async setKeyPolicyWithOptions(request: SetKeyPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetKeyPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetKeyPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SetKeyPolicyResponse>(await this.callApi(params, req, runtime), new SetKeyPolicyResponse({}));
    } else {
      return $tea.cast<SetKeyPolicyResponse>(await this.execute(params, req, runtime), new SetKeyPolicyResponse({}));
    }

  }

  /**
   * 可以设置一条 Key Policy，且名称必须为 default。
   * 
   * @param request - SetKeyPolicyRequest
   * @returns SetKeyPolicyResponse
   */
  async setKeyPolicy(request: SetKeyPolicyRequest): Promise<SetKeyPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setKeyPolicyWithOptions(request, runtime);
  }

  /**
   * 可以设置一条 Secret Policy，且名称必须为 default。
   * 
   * @param request - SetSecretPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecretPolicyResponse
   */
  async setSecretPolicyWithOptions(request: SetSecretPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetSecretPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!Util.isUnset(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSecretPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<SetSecretPolicyResponse>(await this.callApi(params, req, runtime), new SetSecretPolicyResponse({}));
    } else {
      return $tea.cast<SetSecretPolicyResponse>(await this.execute(params, req, runtime), new SetSecretPolicyResponse({}));
    }

  }

  /**
   * 可以设置一条 Secret Policy，且名称必须为 default。
   * 
   * @param request - SetSecretPolicyRequest
   * @returns SetSecretPolicyResponse
   */
  async setSecretPolicy(request: SetSecretPolicyRequest): Promise<SetSecretPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSecretPolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can add up to 10 tags to a CMK, secret, or certificate.
   * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
   * 
   * @param request - TagResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourceResponse
   */
  async tagResourceWithOptions(request: TagResourceRequest, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResource",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<TagResourceResponse>(await this.callApi(params, req, runtime), new TagResourceResponse({}));
    } else {
      return $tea.cast<TagResourceResponse>(await this.execute(params, req, runtime), new TagResourceResponse({}));
    }

  }

  /**
   * @remarks
   * You can add up to 10 tags to a CMK, secret, or certificate.
   * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
   * 
   * @param request - TagResourceRequest
   * @returns TagResourceResponse
   */
  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourceWithOptions(request, runtime);
  }

  /**
   * Adds tags to keys or secrets.
   * 
   * @remarks
   * You can add multiple tags to multiple keys or multiple secrets at a time.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $tea.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

  }

  /**
   * Adds tags to keys or secrets.
   * 
   * @remarks
   * You can add multiple tags to multiple keys or multiple secrets at a time.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * One or more tag keys. Separate multiple tag keys with commas (,).
   * You need to specify only the tag keys, not the tag values.
   * Each tag key must be 1 to 128 bytes in length.
   * 
   * @param request - UntagResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourceResponse
   */
  async untagResourceWithOptions(request: UntagResourceRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResource",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UntagResourceResponse>(await this.callApi(params, req, runtime), new UntagResourceResponse({}));
    } else {
      return $tea.cast<UntagResourceResponse>(await this.execute(params, req, runtime), new UntagResourceResponse({}));
    }

  }

  /**
   * @remarks
   * One or more tag keys. Separate multiple tag keys with commas (,).
   * You need to specify only the tag keys, not the tag values.
   * Each tag key must be 1 to 128 bytes in length.
   * 
   * @param request - UntagResourceRequest
   * @returns UntagResourceResponse
   */
  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourceWithOptions(request, runtime);
  }

  /**
   * Removes tags from keys or secrets.
   * 
   * @remarks
   * You can remove multiple tags from multiple keys or multiple secrets at a time. You cannot remove tags that start with aliyun or acs:.
   * If you enter multiple tag keys in the request parameters and only some of the tag keys are associated with resources, the operation can be called and the tags whose keys are associated with resources are removed from the resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $tea.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from keys or secrets.
   * 
   * @remarks
   * You can remove multiple tags from multiple keys or multiple secrets at a time. You cannot remove tags that start with aliyun or acs:.
   * If you enter multiple tag keys in the request parameters and only some of the tag keys are associated with resources, the operation can be called and the tags whose keys are associated with resources are removed from the resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(request: UpdateAliasRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlias",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
    } else {
      return $tea.cast<UpdateAliasResponse>(await this.execute(params, req, runtime), new UpdateAliasResponse({}));
    }

  }

  /**
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  /**
   * @remarks
   * The update takes effect immediately after an AAP information is updated. Exercise caution when you perform this operation. You can update the description of an AAP and the permission policies that are associated with the AAP. You cannot update the name of the AAP.
   * 
   * @param request - UpdateApplicationAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationAccessPointResponse
   */
  async updateApplicationAccessPointWithOptions(request: UpdateApplicationAccessPointRequest, runtime: $Util.RuntimeOptions): Promise<UpdateApplicationAccessPointResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateApplicationAccessPoint",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new UpdateApplicationAccessPointResponse({}));
    } else {
      return $tea.cast<UpdateApplicationAccessPointResponse>(await this.execute(params, req, runtime), new UpdateApplicationAccessPointResponse({}));
    }

  }

  /**
   * @remarks
   * The update takes effect immediately after an AAP information is updated. Exercise caution when you perform this operation. You can update the description of an AAP and the permission policies that are associated with the AAP. You cannot update the name of the AAP.
   * 
   * @param request - UpdateApplicationAccessPointRequest
   * @returns UpdateApplicationAccessPointResponse
   */
  async updateApplicationAccessPoint(request: UpdateApplicationAccessPointRequest): Promise<UpdateApplicationAccessPointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, the status of the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is updated to INACTIVE.
   * 
   * @param request - UpdateCertificateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCertificateStatusResponse
   */
  async updateCertificateStatusWithOptions(request: UpdateCertificateStatusRequest, runtime: $Util.RuntimeOptions): Promise<UpdateCertificateStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCertificateStatus",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateCertificateStatusResponse>(await this.callApi(params, req, runtime), new UpdateCertificateStatusResponse({}));
    } else {
      return $tea.cast<UpdateCertificateStatusResponse>(await this.execute(params, req, runtime), new UpdateCertificateStatusResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, the status of the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is updated to INACTIVE.
   * 
   * @param request - UpdateCertificateStatusRequest
   * @returns UpdateCertificateStatusResponse
   */
  async updateCertificateStatus(request: UpdateCertificateStatusRequest): Promise<UpdateCertificateStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateCertificateStatusWithOptions(request, runtime);
  }

  /**
   * 调用UpdateKeyDescription接口更新主密钥的描述信息。
   * 
   * @remarks
   * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation. You can call this operation to add, modify, or delete the description of a CMK.
   * 
   * @param request - UpdateKeyDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKeyDescriptionResponse
   */
  async updateKeyDescriptionWithOptions(request: UpdateKeyDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKeyDescriptionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKeyDescription",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateKeyDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateKeyDescriptionResponse({}));
    } else {
      return $tea.cast<UpdateKeyDescriptionResponse>(await this.execute(params, req, runtime), new UpdateKeyDescriptionResponse({}));
    }

  }

  /**
   * 调用UpdateKeyDescription接口更新主密钥的描述信息。
   * 
   * @remarks
   * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation. You can call this operation to add, modify, or delete the description of a CMK.
   * 
   * @param request - UpdateKeyDescriptionRequest
   * @returns UpdateKeyDescriptionResponse
   */
  async updateKeyDescription(request: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKeyDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the virtual private cloud (VPC) that is associated with a Key Management Service (KMS) instance.
   * 
   * @remarks
   * If your own applications are deployed in multiple VPCs in the same region, you can associate the VPCs except the VPC in which the KMS instance resides with the KMS instance. This topic describes how to configure the VPCs.
   * The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, the applications in these VPCs can access the KMS instance.
   * > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitches of other Alibaba Cloud accounts with the Alibaba Cloud account to which the KMS instance belongs. For more information, see [Access a KMS instance from multiple VPCs in the same region](https://help.aliyun.com/document_detail/2393236.html).
   * 
   * @param request - UpdateKmsInstanceBindVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKmsInstanceBindVpcResponse
   */
  async updateKmsInstanceBindVpcWithOptions(request: UpdateKmsInstanceBindVpcRequest, runtime: $Util.RuntimeOptions): Promise<UpdateKmsInstanceBindVpcResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateKmsInstanceBindVpc",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateKmsInstanceBindVpcResponse>(await this.callApi(params, req, runtime), new UpdateKmsInstanceBindVpcResponse({}));
    } else {
      return $tea.cast<UpdateKmsInstanceBindVpcResponse>(await this.execute(params, req, runtime), new UpdateKmsInstanceBindVpcResponse({}));
    }

  }

  /**
   * Updates the virtual private cloud (VPC) that is associated with a Key Management Service (KMS) instance.
   * 
   * @remarks
   * If your own applications are deployed in multiple VPCs in the same region, you can associate the VPCs except the VPC in which the KMS instance resides with the KMS instance. This topic describes how to configure the VPCs.
   * The VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, the applications in these VPCs can access the KMS instance.
   * > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitches of other Alibaba Cloud accounts with the Alibaba Cloud account to which the KMS instance belongs. For more information, see [Access a KMS instance from multiple VPCs in the same region](https://help.aliyun.com/document_detail/2393236.html).
   * 
   * @param request - UpdateKmsInstanceBindVpcRequest
   * @returns UpdateKmsInstanceBindVpcResponse
   */
  async updateKmsInstanceBindVpc(request: UpdateKmsInstanceBindVpcRequest): Promise<UpdateKmsInstanceBindVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateKmsInstanceBindVpcWithOptions(request, runtime);
  }

  /**
   * Updates an access control rule.
   * 
   * @remarks
   * - You can update only private IP addresses and description of an access control rule. You cannot update the name and network type of an access control rule.
   * - Updating an access control rule affects all permission policies that are bound to the access control rule. Exercise caution when you perform this operation.
   * 
   * @param request - UpdateNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkRuleResponse
   */
  async updateNetworkRuleWithOptions(request: UpdateNetworkRuleRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNetworkRuleResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNetworkRule",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateNetworkRuleResponse>(await this.callApi(params, req, runtime), new UpdateNetworkRuleResponse({}));
    } else {
      return $tea.cast<UpdateNetworkRuleResponse>(await this.execute(params, req, runtime), new UpdateNetworkRuleResponse({}));
    }

  }

  /**
   * Updates an access control rule.
   * 
   * @remarks
   * - You can update only private IP addresses and description of an access control rule. You cannot update the name and network type of an access control rule.
   * - Updating an access control rule affects all permission policies that are bound to the access control rule. Exercise caution when you perform this operation.
   * 
   * @param request - UpdateNetworkRuleRequest
   * @returns UpdateNetworkRuleResponse
   */
  async updateNetworkRule(request: UpdateNetworkRuleRequest): Promise<UpdateNetworkRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNetworkRuleWithOptions(request, runtime);
  }

  /**
   * 更新一个权限策略
   * 
   * @remarks
   * - You can update the role-based access control (RBAC) permissions, accessible resources, access control rules, and description of a permission policy. You cannot update the name or scope of a permission policy.
   * - Updating a permission policy affects all application access points (AAPs) that are bound to the permission policy. Exercise caution when you perform this operation.
   * 
   * @param request - UpdatePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePolicyResponse
   */
  async updatePolicyWithOptions(request: UpdatePolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdatePolicyResponse>(await this.callApi(params, req, runtime), new UpdatePolicyResponse({}));
    } else {
      return $tea.cast<UpdatePolicyResponse>(await this.execute(params, req, runtime), new UpdatePolicyResponse({}));
    }

  }

  /**
   * 更新一个权限策略
   * 
   * @remarks
   * - You can update the role-based access control (RBAC) permissions, accessible resources, access control rules, and description of a permission policy. You cannot update the name or scope of a permission policy.
   * - Updating a permission policy affects all application access points (AAPs) that are bound to the permission policy. Exercise caution when you perform this operation.
   * 
   * @param request - UpdatePolicyRequest
   * @returns UpdatePolicyResponse
   */
  async updatePolicy(request: UpdatePolicyRequest): Promise<UpdatePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePolicyWithOptions(request, runtime);
  }

  /**
   * @remarks
   * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
   * An automatic key rotation policy cannot be configured for the following keys:
   * *   Asymmetric key
   * *   Service-managed key
   * *   Bring your own key (BYOK) that is imported into KMS
   * *   Key that is not in the **Enabled** state
   * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
   * 
   * @param request - UpdateRotationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRotationPolicyResponse
   */
  async updateRotationPolicyWithOptions(request: UpdateRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateRotationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRotationPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateRotationPolicyResponse({}));
    } else {
      return $tea.cast<UpdateRotationPolicyResponse>(await this.execute(params, req, runtime), new UpdateRotationPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
   * An automatic key rotation policy cannot be configured for the following keys:
   * *   Asymmetric key
   * *   Service-managed key
   * *   Bring your own key (BYOK) that is imported into KMS
   * *   Key that is not in the **Enabled** state
   * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
   * 
   * @param request - UpdateRotationPolicyRequest
   * @returns UpdateRotationPolicyResponse
   */
  async updateRotationPolicy(request: UpdateRotationPolicyRequest): Promise<UpdateRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateRotationPolicyWithOptions(request, runtime);
  }

  /**
   * Updates the metadata of a secret.
   * 
   * @remarks
   * In this example, the metadata of the `secret001` secret is updated. The `Description` parameter is set to `datainfo`.
   * 
   * @param request - UpdateSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretResponse
   */
  async updateSecretWithOptions(request: UpdateSecretRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.extendedConfig)) {
      query["ExtendedConfig"] = request.extendedConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecret",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretResponse>(await this.callApi(params, req, runtime), new UpdateSecretResponse({}));
    } else {
      return $tea.cast<UpdateSecretResponse>(await this.execute(params, req, runtime), new UpdateSecretResponse({}));
    }

  }

  /**
   * Updates the metadata of a secret.
   * 
   * @remarks
   * In this example, the metadata of the `secret001` secret is updated. The `Description` parameter is set to `datainfo`.
   * 
   * @param request - UpdateSecretRequest
   * @returns UpdateSecretResponse
   */
  async updateSecret(request: UpdateSecretRequest): Promise<UpdateSecretResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretWithOptions(request, runtime);
  }

  /**
   * @remarks
   * After automatic rotation is enabled, Secrets Manager schedules the first automatic rotation by adding the preset rotation interval to the timestamp of the last rotation.
   * Limits: The UpdateSecretRotationPolicy operation cannot be used to update the rotation policy of generic secrets.
   * In this example, the rotation policy of the `RdsSecret/Mysql5.4/MyCred` secret is updated. The following settings are modified:
   * *   The `EnableAutomaticRotation` parameter is set to `true`, which indicates that automatic rotation is enabled.
   * *   The `RotationInterval` parameter is set to `30d`, which indicates that the interval for automatic rotation is 30 days.
   * 
   * @param request - UpdateSecretRotationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretRotationPolicyResponse
   */
  async updateSecretRotationPolicyWithOptions(request: UpdateSecretRotationPolicyRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretRotationPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!Util.isUnset(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretRotationPolicy",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.callApi(params, req, runtime), new UpdateSecretRotationPolicyResponse({}));
    } else {
      return $tea.cast<UpdateSecretRotationPolicyResponse>(await this.execute(params, req, runtime), new UpdateSecretRotationPolicyResponse({}));
    }

  }

  /**
   * @remarks
   * After automatic rotation is enabled, Secrets Manager schedules the first automatic rotation by adding the preset rotation interval to the timestamp of the last rotation.
   * Limits: The UpdateSecretRotationPolicy operation cannot be used to update the rotation policy of generic secrets.
   * In this example, the rotation policy of the `RdsSecret/Mysql5.4/MyCred` secret is updated. The following settings are modified:
   * *   The `EnableAutomaticRotation` parameter is set to `true`, which indicates that automatic rotation is enabled.
   * *   The `RotationInterval` parameter is set to `30d`, which indicates that the interval for automatic rotation is 30 days.
   * 
   * @param request - UpdateSecretRotationPolicyRequest
   * @returns UpdateSecretRotationPolicyResponse
   */
  async updateSecretRotationPolicy(request: UpdateSecretRotationPolicyRequest): Promise<UpdateSecretRotationPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretRotationPolicyWithOptions(request, runtime);
  }

  /**
   * UpdateSecretVersionStage
   * 
   * @remarks
   * Updates the stage label that marks a secret version.
   * 
   * @param request - UpdateSecretVersionStageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretVersionStageResponse
   */
  async updateSecretVersionStageWithOptions(request: UpdateSecretVersionStageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecretVersionStageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.moveToVersion)) {
      query["MoveToVersion"] = request.moveToVersion;
    }

    if (!Util.isUnset(request.removeFromVersion)) {
      query["RemoveFromVersion"] = request.removeFromVersion;
    }

    if (!Util.isUnset(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!Util.isUnset(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecretVersionStage",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UpdateSecretVersionStageResponse>(await this.callApi(params, req, runtime), new UpdateSecretVersionStageResponse({}));
    } else {
      return $tea.cast<UpdateSecretVersionStageResponse>(await this.execute(params, req, runtime), new UpdateSecretVersionStageResponse({}));
    }

  }

  /**
   * UpdateSecretVersionStage
   * 
   * @remarks
   * Updates the stage label that marks a secret version.
   * 
   * @param request - UpdateSecretVersionStageRequest
   * @returns UpdateSecretVersionStageResponse
   */
  async updateSecretVersionStage(request: UpdateSecretVersionStageRequest): Promise<UpdateSecretVersionStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecretVersionStageWithOptions(request, runtime);
  }

  /**
   * @remarks
   * In this example, a certificate issued by a CA is imported into Certificates Manager. The ID of the certificate in Certificates Manager is `12345678-1234-1234-1234-12345678****`.
   * 
   * @param request - UploadCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadCertificateResponse
   */
  async uploadCertificateWithOptions(request: UploadCertificateRequest, runtime: $Util.RuntimeOptions): Promise<UploadCertificateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!Util.isUnset(request.certificateChain)) {
      query["CertificateChain"] = request.certificateChain;
    }

    if (!Util.isUnset(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadCertificate",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if (Util.isUnset(this._signatureVersion) || !Util.equalString(this._signatureVersion, "v4")) {
      return $tea.cast<UploadCertificateResponse>(await this.callApi(params, req, runtime), new UploadCertificateResponse({}));
    } else {
      return $tea.cast<UploadCertificateResponse>(await this.execute(params, req, runtime), new UploadCertificateResponse({}));
    }

  }

  /**
   * @remarks
   * In this example, a certificate issued by a CA is imported into Certificates Manager. The ID of the certificate in Certificates Manager is `12345678-1234-1234-1234-12345678****`.
   * 
   * @param request - UploadCertificateRequest
   * @returns UploadCertificateResponse
   */
  async uploadCertificate(request: UploadCertificateRequest): Promise<UploadCertificateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadCertificateWithOptions(request, runtime);
  }

}
