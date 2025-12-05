// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Kms";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("kms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
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
  async asymmetricDecryptWithOptions(request: $_model.AsymmetricDecryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsymmetricDecryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.AsymmetricDecryptResponse>(await this.callApi(params, req, runtime), new $_model.AsymmetricDecryptResponse({}));
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
  async asymmetricDecrypt(request: $_model.AsymmetricDecryptRequest): Promise<$_model.AsymmetricDecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async asymmetricEncryptWithOptions(request: $_model.AsymmetricEncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsymmetricEncryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.AsymmetricEncryptResponse>(await this.callApi(params, req, runtime), new $_model.AsymmetricEncryptResponse({}));
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
  async asymmetricEncrypt(request: $_model.AsymmetricEncryptRequest): Promise<$_model.AsymmetricEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async asymmetricSignWithOptions(request: $_model.AsymmetricSignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsymmetricSignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.AsymmetricSignResponse>(await this.callApi(params, req, runtime), new $_model.AsymmetricSignResponse({}));
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
  async asymmetricSign(request: $_model.AsymmetricSignRequest): Promise<$_model.AsymmetricSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async asymmetricVerifyWithOptions(request: $_model.AsymmetricVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AsymmetricVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.AsymmetricVerifyResponse>(await this.callApi(params, req, runtime), new $_model.AsymmetricVerifyResponse({}));
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
  async asymmetricVerify(request: $_model.AsymmetricVerifyRequest): Promise<$_model.AsymmetricVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async cancelKeyDeletionWithOptions(request: $_model.CancelKeyDeletionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelKeyDeletionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CancelKeyDeletionResponse>(await this.callApi(params, req, runtime), new $_model.CancelKeyDeletionResponse({}));
  }

  /**
   * @remarks
   * If the deletion task of a CMK is canceled, the CMK returns to the Enabled state.
   * 
   * @param request - CancelKeyDeletionRequest
   * @returns CancelKeyDeletionResponse
   */
  async cancelKeyDeletion(request: $_model.CancelKeyDeletionRequest): Promise<$_model.CancelKeyDeletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async certificatePrivateKeyDecryptWithOptions(request: $_model.CertificatePrivateKeyDecryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertificatePrivateKeyDecryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CertificatePrivateKeyDecryptResponse>(await this.callApi(params, req, runtime), new $_model.CertificatePrivateKeyDecryptResponse({}));
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
  async certificatePrivateKeyDecrypt(request: $_model.CertificatePrivateKeyDecryptRequest): Promise<$_model.CertificatePrivateKeyDecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async certificatePrivateKeySignWithOptions(request: $_model.CertificatePrivateKeySignRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertificatePrivateKeySignResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CertificatePrivateKeySignResponse>(await this.callApi(params, req, runtime), new $_model.CertificatePrivateKeySignResponse({}));
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
  async certificatePrivateKeySign(request: $_model.CertificatePrivateKeySignRequest): Promise<$_model.CertificatePrivateKeySignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async certificatePublicKeyEncryptWithOptions(request: $_model.CertificatePublicKeyEncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertificatePublicKeyEncryptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CertificatePublicKeyEncryptResponse>(await this.callApi(params, req, runtime), new $_model.CertificatePublicKeyEncryptResponse({}));
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
  async certificatePublicKeyEncrypt(request: $_model.CertificatePublicKeyEncryptRequest): Promise<$_model.CertificatePublicKeyEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async certificatePublicKeyVerifyWithOptions(request: $_model.CertificatePublicKeyVerifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CertificatePublicKeyVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.algorithm)) {
      query["Algorithm"] = request.algorithm;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.messageType)) {
      query["MessageType"] = request.messageType;
    }

    if (!$dara.isNull(request.signatureValue)) {
      query["SignatureValue"] = request.signatureValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CertificatePublicKeyVerifyResponse>(await this.callApi(params, req, runtime), new $_model.CertificatePublicKeyVerifyResponse({}));
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
  async certificatePublicKeyVerify(request: $_model.CertificatePublicKeyVerifyRequest): Promise<$_model.CertificatePublicKeyVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async connectKmsInstanceWithOptions(request: $_model.ConnectKmsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConnectKmsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.KMProvider)) {
      query["KMProvider"] = request.KMProvider;
    }

    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneIds)) {
      query["ZoneIds"] = request.zoneIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ConnectKmsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ConnectKmsInstanceResponse({}));
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
  async connectKmsInstance(request: $_model.ConnectKmsInstanceRequest): Promise<$_model.ConnectKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createAliasWithOptions(request: $_model.CreateAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateAliasResponse>(await this.callApi(params, req, runtime), new $_model.CreateAliasResponse({}));
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
  async createAlias(request: $_model.CreateAliasRequest): Promise<$_model.CreateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createApplicationAccessPointWithOptions(request: $_model.CreateApplicationAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authenticationMethod)) {
      query["AuthenticationMethod"] = request.authenticationMethod;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationAccessPointResponse({}));
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
  async createApplicationAccessPoint(request: $_model.CreateApplicationAccessPointRequest): Promise<$_model.CreateApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationAccessPointWithOptions(request, runtime);
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
  async createClientKeyWithOptions(request: $_model.CreateClientKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aapName)) {
      query["AapName"] = request.aapName;
    }

    if (!$dara.isNull(request.notAfter)) {
      query["NotAfter"] = request.notAfter;
    }

    if (!$dara.isNull(request.notBefore)) {
      query["NotBefore"] = request.notBefore;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateClientKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientKeyResponse({}));
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
  async createClientKey(request: $_model.CreateClientKeyRequest): Promise<$_model.CreateClientKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createKeyWithOptions(request: $_model.CreateKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!$dara.isNull(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!$dara.isNull(request.keyStorageMechanism)) {
      query["KeyStorageMechanism"] = request.keyStorageMechanism;
    }

    if (!$dara.isNull(request.keyUsage)) {
      query["KeyUsage"] = request.keyUsage;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!$dara.isNull(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateKeyResponse>(await this.callApi(params, req, runtime), new $_model.CreateKeyResponse({}));
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
  async createKey(request: $_model.CreateKeyRequest): Promise<$_model.CreateKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createKeyVersionWithOptions(request: $_model.CreateKeyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKeyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateKeyVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateKeyVersionResponse({}));
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
  async createKeyVersion(request: $_model.CreateKeyVersionRequest): Promise<$_model.CreateKeyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createNetworkRuleWithOptions(request: $_model.CreateNetworkRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateNetworkRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkRuleResponse({}));
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
  async createNetworkRule(request: $_model.CreateNetworkRuleRequest): Promise<$_model.CreateNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createPolicyWithOptions(request: $_model.CreatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.kmsInstance)) {
      query["KmsInstance"] = request.kmsInstance;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreatePolicyResponse({}));
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
  async createPolicy(request: $_model.CreatePolicyRequest): Promise<$_model.CreatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createSecretWithOptions(tmpReq: $_model.CreateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.extendedConfig)) {
      request.extendedConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendedConfig, "ExtendedConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!$dara.isNull(request.encryptionKeyId)) {
      query["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!$dara.isNull(request.extendedConfigShrink)) {
      query["ExtendedConfig"] = request.extendedConfigShrink;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!$dara.isNull(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!$dara.isNull(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.CreateSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretResponse({}));
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
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  /**
   * 调用Decrypt接口解密CiphertextBlob中的密文。
   * 
   * @param tmpReq - DecryptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecryptResponse
   */
  async decryptWithOptions(tmpReq: $_model.DecryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DecryptResponse> {
    tmpReq.validate();
    let request = new $_model.DecryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DecryptResponse>(await this.callApi(params, req, runtime), new $_model.DecryptResponse({}));
  }

  /**
   * 调用Decrypt接口解密CiphertextBlob中的密文。
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: $_model.DecryptRequest): Promise<$_model.DecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(request: $_model.DeleteAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteAliasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAliasResponse({}));
  }

  /**
   * @param request - DeleteAliasRequest
   * @returns DeleteAliasResponse
   */
  async deleteAlias(request: $_model.DeleteAliasRequest): Promise<$_model.DeleteAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteApplicationAccessPointWithOptions(request: $_model.DeleteApplicationAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationAccessPointResponse({}));
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
  async deleteApplicationAccessPoint(request: $_model.DeleteApplicationAccessPointRequest): Promise<$_model.DeleteApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteCertificateWithOptions(request: $_model.DeleteCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCertificateResponse({}));
  }

  /**
   * @remarks
   * After the certificate and its private key and certificate chain are deleted, they cannot be restored. Proceed with caution.
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` and its private key and certificate chain are deleted.
   * 
   * @param request - DeleteCertificateRequest
   * @returns DeleteCertificateResponse
   */
  async deleteCertificate(request: $_model.DeleteCertificateRequest): Promise<$_model.DeleteCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteClientKeyWithOptions(request: $_model.DeleteClientKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientKeyId)) {
      query["ClientKeyId"] = request.clientKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteClientKeyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientKeyResponse({}));
  }

  /**
   * @remarks
   * Before you delete a client key, make sure that the client key is no longer in use. If you delete a client key that is in use, applications that use the client key cannot access Key Management Service (KMS). Exercise caution when you delete a client key.
   * 
   * @param request - DeleteClientKeyRequest
   * @returns DeleteClientKeyResponse
   */
  async deleteClientKey(request: $_model.DeleteClientKeyRequest): Promise<$_model.DeleteClientKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteKeyMaterialWithOptions(request: $_model.DeleteKeyMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeyMaterialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteKeyMaterialResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeyMaterialResponse({}));
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
  async deleteKeyMaterial(request: $_model.DeleteKeyMaterialRequest): Promise<$_model.DeleteKeyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteNetworkRuleWithOptions(request: $_model.DeleteNetworkRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteNetworkRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkRuleResponse({}));
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
  async deleteNetworkRule(request: $_model.DeleteNetworkRuleRequest): Promise<$_model.DeleteNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deletePolicyWithOptions(request: $_model.DeletePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeletePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyResponse({}));
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
  async deletePolicy(request: $_model.DeletePolicyRequest): Promise<$_model.DeletePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteSecretWithOptions(request: $_model.DeleteSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDeleteWithoutRecovery)) {
      query["ForceDeleteWithoutRecovery"] = request.forceDeleteWithoutRecovery;
    }

    if (!$dara.isNull(request.recoveryWindowInDays)) {
      query["RecoveryWindowInDays"] = request.recoveryWindowInDays;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DeleteSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretResponse({}));
  }

  /**
   * @remarks
   * If you call this operation without specifying a recovery period, the deleted secret can be recovered within 30 days.
   * If you specify a recovery period, the deleted secret can be recovered within the recovery period. You can also forcibly delete a secret. A forcibly deleted secret cannot be recovered.
   * 
   * @param request - DeleteSecretRequest
   * @returns DeleteSecretResponse
   */
  async deleteSecret(request: $_model.DeleteSecretRequest): Promise<$_model.DeleteSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAccountKmsStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountKmsStatusResponse
   */
  async describeAccountKmsStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountKmsStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeAccountKmsStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountKmsStatusResponse({}));
  }

  /**
   * @returns DescribeAccountKmsStatusResponse
   */
  async describeAccountKmsStatus(): Promise<$_model.DescribeAccountKmsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

  /**
   * Queries the details of an application access point (AAP).
   * 
   * @param request - DescribeApplicationAccessPointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationAccessPointResponse
   */
  async describeApplicationAccessPointWithOptions(request: $_model.DescribeApplicationAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationAccessPointResponse({}));
  }

  /**
   * Queries the details of an application access point (AAP).
   * 
   * @param request - DescribeApplicationAccessPointRequest
   * @returns DescribeApplicationAccessPointResponse
   */
  async describeApplicationAccessPoint(request: $_model.DescribeApplicationAccessPointRequest): Promise<$_model.DescribeApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeCertificateWithOptions(request: $_model.DescribeCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCertificateResponse({}));
  }

  /**
   * @remarks
   * In this example, the information about the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate information includes the certificate ID, creation time, certificate issuer, validity period, serial number, and signature algorithm.
   * 
   * @param request - DescribeCertificateRequest
   * @returns DescribeCertificateResponse
   */
  async describeCertificate(request: $_model.DescribeCertificateRequest): Promise<$_model.DescribeCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeKeyWithOptions(request: $_model.DescribeKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKeyResponse({}));
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
  async describeKey(request: $_model.DescribeKeyRequest): Promise<$_model.DescribeKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeKeyVersionWithOptions(request: $_model.DescribeKeyVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKeyVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeKeyVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKeyVersionResponse({}));
  }

  /**
   * @remarks
   * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
   * 
   * @param request - DescribeKeyVersionRequest
   * @returns DescribeKeyVersionResponse
   */
  async describeKeyVersion(request: $_model.DescribeKeyVersionRequest): Promise<$_model.DescribeKeyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

  /**
   * Queries the details of an access control rule.
   * 
   * @param request - DescribeNetworkRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetworkRuleResponse
   */
  async describeNetworkRuleWithOptions(request: $_model.DescribeNetworkRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetworkRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeNetworkRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetworkRuleResponse({}));
  }

  /**
   * Queries the details of an access control rule.
   * 
   * @param request - DescribeNetworkRuleRequest
   * @returns DescribeNetworkRuleResponse
   */
  async describeNetworkRule(request: $_model.DescribeNetworkRuleRequest): Promise<$_model.DescribeNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of a permission policy.
   * 
   * @param request - DescribePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyResponse
   */
  async describePolicyWithOptions(request: $_model.DescribePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyResponse({}));
  }

  /**
   * Queries the details of a permission policy.
   * 
   * @param request - DescribePolicyRequest
   * @returns DescribePolicyResponse
   */
  async describePolicy(request: $_model.DescribePolicyRequest): Promise<$_model.DescribePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeRegionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms\\&api=DescribeRegions\\&type=RPC\\&version=2016-01-20)
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async describeSecretWithOptions(request: $_model.DescribeSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DescribeSecretResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecretResponse({}));
  }

  /**
   * @remarks
   * This operation returns the metadata of a secret. This operation does not return the secret value.
   * In this example, the metadata of the secret named `secret001` is queried.
   * 
   * @param request - DescribeSecretRequest
   * @returns DescribeSecretResponse
   */
  async describeSecret(request: $_model.DescribeSecretRequest): Promise<$_model.DescribeSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async disableKeyWithOptions(request: $_model.DisableKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.DisableKeyResponse>(await this.callApi(params, req, runtime), new $_model.DisableKeyResponse({}));
  }

  /**
   * @remarks
   * If a customer master key (CMK) is disabled, the ciphertext encrypted by using this CMK cannot be decrypted until you re-enable it. You can call the [EnableKey](https://help.aliyun.com/document_detail/35150.html) operation to enable the CMK.
   * In this example, the CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****` is disabled.
   * 
   * @param request - DisableKeyRequest
   * @returns DisableKeyResponse
   */
  async disableKey(request: $_model.DisableKeyRequest): Promise<$_model.DisableKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableKeyWithOptions(request, runtime);
  }

  /**
   * @param request - EnableKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableKeyResponse
   */
  async enableKeyWithOptions(request: $_model.EnableKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.EnableKeyResponse>(await this.callApi(params, req, runtime), new $_model.EnableKeyResponse({}));
  }

  /**
   * @param request - EnableKeyRequest
   * @returns EnableKeyResponse
   */
  async enableKey(request: $_model.EnableKeyRequest): Promise<$_model.EnableKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async encryptWithOptions(tmpReq: $_model.EncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EncryptResponse> {
    tmpReq.validate();
    let request = new $_model.EncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.plaintext)) {
      query["Plaintext"] = request.plaintext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.EncryptResponse>(await this.callApi(params, req, runtime), new $_model.EncryptResponse({}));
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
  async encrypt(request: $_model.EncryptRequest): Promise<$_model.EncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async exportDataKeyWithOptions(tmpReq: $_model.ExportDataKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportDataKeyResponse> {
    tmpReq.validate();
    let request = new $_model.ExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!$dara.isNull(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!$dara.isNull(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!$dara.isNull(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ExportDataKeyResponse>(await this.callApi(params, req, runtime), new $_model.ExportDataKeyResponse({}));
  }

  /**
   * @remarks
   * You can call the [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation to generate a data key, which is encrypted by a CMK. If you want to distribute the data key to other regions or cryptographic modules, you can call the ExportDataKey operation to use a public key to encrypt the data key.
   * Then, you can import the ciphertext of the data key to the cryptographic module where the private key is stored. This way, the data key is securely distributed from KMS to the cryptographic module. After the data key is imported to the cryptographic module, you can use it to encrypt or decrypt data.
   * 
   * @param request - ExportDataKeyRequest
   * @returns ExportDataKeyResponse
   */
  async exportDataKey(request: $_model.ExportDataKeyRequest): Promise<$_model.ExportDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async generateAndExportDataKeyWithOptions(tmpReq: $_model.GenerateAndExportDataKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateAndExportDataKeyResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateAndExportDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!$dara.isNull(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    if (!$dara.isNull(request.publicKeyBlob)) {
      query["PublicKeyBlob"] = request.publicKeyBlob;
    }

    if (!$dara.isNull(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!$dara.isNull(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GenerateAndExportDataKeyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateAndExportDataKeyResponse({}));
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
  async generateAndExportDataKey(request: $_model.GenerateAndExportDataKeyRequest): Promise<$_model.GenerateAndExportDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async generateDataKeyWithOptions(tmpReq: $_model.GenerateDataKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDataKeyResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateDataKeyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!$dara.isNull(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GenerateDataKeyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDataKeyResponse({}));
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
  async generateDataKey(request: $_model.GenerateDataKeyRequest): Promise<$_model.GenerateDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async generateDataKeyWithoutPlaintextWithOptions(tmpReq: $_model.GenerateDataKeyWithoutPlaintextRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDataKeyWithoutPlaintextResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateDataKeyWithoutPlaintextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.encryptionContext)) {
      request.encryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.encryptionContext, "EncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.encryptionContextShrink)) {
      query["EncryptionContext"] = request.encryptionContextShrink;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keySpec)) {
      query["KeySpec"] = request.keySpec;
    }

    if (!$dara.isNull(request.numberOfBytes)) {
      query["NumberOfBytes"] = request.numberOfBytes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GenerateDataKeyWithoutPlaintextResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDataKeyWithoutPlaintextResponse({}));
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
  async generateDataKeyWithoutPlaintext(request: $_model.GenerateDataKeyWithoutPlaintextRequest): Promise<$_model.GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getCertificateWithOptions(request: $_model.GetCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetCertificateResponse({}));
  }

  /**
   * @remarks
   * In this example, the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is queried. The certificate, certificate chain, certificate ID, and certificate signing request (CSR) are returned.
   * 
   * @param request - GetCertificateRequest
   * @returns GetCertificateResponse
   */
  async getCertificate(request: $_model.GetCertificateRequest): Promise<$_model.GetCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the information about a client key.
   * 
   * @param request - GetClientKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientKeyResponse
   */
  async getClientKeyWithOptions(request: $_model.GetClientKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientKeyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetClientKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetClientKeyResponse({}));
  }

  /**
   * Queries the information about a client key.
   * 
   * @param request - GetClientKeyRequest
   * @returns GetClientKeyResponse
   */
  async getClientKey(request: $_model.GetClientKeyRequest): Promise<$_model.GetClientKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientKeyWithOptions(request, runtime);
  }

  /**
   * 获取默认KMS实例
   * 
   * @param request - GetDefaultKmsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultKmsInstanceResponse
   */
  async getDefaultKmsInstanceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultKmsInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultKmsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetDefaultKmsInstanceResponse({}));
  }

  /**
   * 获取默认KMS实例
   * @returns GetDefaultKmsInstanceResponse
   */
  async getDefaultKmsInstance(): Promise<$_model.GetDefaultKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultKmsInstanceWithOptions(runtime);
  }

  /**
   * 仅可查询名称为 default 的 Key Policy，否则提示 Not Found。
   * 
   * @param request - GetKeyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeyPolicyResponse
   */
  async getKeyPolicyWithOptions(request: $_model.GetKeyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKeyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetKeyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetKeyPolicyResponse({}));
  }

  /**
   * 仅可查询名称为 default 的 Key Policy，否则提示 Not Found。
   * 
   * @param request - GetKeyPolicyRequest
   * @returns GetKeyPolicyResponse
   */
  async getKeyPolicy(request: $_model.GetKeyPolicyRequest): Promise<$_model.GetKeyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeyPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Key Management Service (KMS) instance.
   * 
   * @param request - GetKmsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKmsInstanceResponse
   */
  async getKmsInstanceWithOptions(request: $_model.GetKmsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKmsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetKmsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetKmsInstanceResponse({}));
  }

  /**
   * Queries the details of a Key Management Service (KMS) instance.
   * 
   * @param request - GetKmsInstanceRequest
   * @returns GetKmsInstanceResponse
   */
  async getKmsInstance(request: $_model.GetKmsInstanceRequest): Promise<$_model.GetKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKmsInstanceWithOptions(request, runtime);
  }

  /**
   * 获取实例配额信息
   * 
   * @param request - GetKmsInstanceQuotaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKmsInstanceQuotaInfosResponse
   */
  async getKmsInstanceQuotaInfosWithOptions(request: $_model.GetKmsInstanceQuotaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKmsInstanceQuotaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKmsInstanceQuotaInfos",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKmsInstanceQuotaInfosResponse>(await this.callApi(params, req, runtime), new $_model.GetKmsInstanceQuotaInfosResponse({}));
  }

  /**
   * 获取实例配额信息
   * 
   * @param request - GetKmsInstanceQuotaInfosRequest
   * @returns GetKmsInstanceQuotaInfosResponse
   */
  async getKmsInstanceQuotaInfos(request: $_model.GetKmsInstanceQuotaInfosRequest): Promise<$_model.GetKmsInstanceQuotaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKmsInstanceQuotaInfosWithOptions(request, runtime);
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
  async getParametersForImportWithOptions(request: $_model.GetParametersForImportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetParametersForImportResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.wrappingAlgorithm)) {
      query["WrappingAlgorithm"] = request.wrappingAlgorithm;
    }

    if (!$dara.isNull(request.wrappingKeySpec)) {
      query["WrappingKeySpec"] = request.wrappingKeySpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetParametersForImportResponse>(await this.callApi(params, req, runtime), new $_model.GetParametersForImportResponse({}));
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
  async getParametersForImport(request: $_model.GetParametersForImportRequest): Promise<$_model.GetParametersForImportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getParametersForImportWithOptions(request, runtime);
  }

  /**
   * @param request - GetPublicKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPublicKeyResponse
   */
  async getPublicKeyWithOptions(request: $_model.GetPublicKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPublicKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyVersionId)) {
      query["KeyVersionId"] = request.keyVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetPublicKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetPublicKeyResponse({}));
  }

  /**
   * @param request - GetPublicKeyRequest
   * @returns GetPublicKeyResponse
   */
  async getPublicKey(request: $_model.GetPublicKeyRequest): Promise<$_model.GetPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  /**
   * @param request - GetRandomPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRandomPasswordResponse
   */
  async getRandomPasswordWithOptions(request: $_model.GetRandomPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRandomPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.excludeCharacters)) {
      query["ExcludeCharacters"] = request.excludeCharacters;
    }

    if (!$dara.isNull(request.excludeLowercase)) {
      query["ExcludeLowercase"] = request.excludeLowercase;
    }

    if (!$dara.isNull(request.excludeNumbers)) {
      query["ExcludeNumbers"] = request.excludeNumbers;
    }

    if (!$dara.isNull(request.excludePunctuation)) {
      query["ExcludePunctuation"] = request.excludePunctuation;
    }

    if (!$dara.isNull(request.excludeUppercase)) {
      query["ExcludeUppercase"] = request.excludeUppercase;
    }

    if (!$dara.isNull(request.passwordLength)) {
      query["PasswordLength"] = request.passwordLength;
    }

    if (!$dara.isNull(request.requireEachIncludedType)) {
      query["RequireEachIncludedType"] = request.requireEachIncludedType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetRandomPasswordResponse>(await this.callApi(params, req, runtime), new $_model.GetRandomPasswordResponse({}));
  }

  /**
   * @param request - GetRandomPasswordRequest
   * @returns GetRandomPasswordResponse
   */
  async getRandomPassword(request: $_model.GetRandomPasswordRequest): Promise<$_model.GetRandomPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

  /**
   * 仅可查询名称为 default 的 Secret Policy，否则提示 Not Found。
   * 
   * @param request - GetSecretPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretPolicyResponse
   */
  async getSecretPolicyWithOptions(request: $_model.GetSecretPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetSecretPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretPolicyResponse({}));
  }

  /**
   * 仅可查询名称为 default 的 Secret Policy，否则提示 Not Found。
   * 
   * @param request - GetSecretPolicyRequest
   * @returns GetSecretPolicyResponse
   */
  async getSecretPolicy(request: $_model.GetSecretPolicyRequest): Promise<$_model.GetSecretPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getSecretValueWithOptions(request: $_model.GetSecretValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.fetchExtendedConfig)) {
      query["FetchExtendedConfig"] = request.fetchExtendedConfig;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!$dara.isNull(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetSecretValueResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretValueResponse({}));
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
  async getSecretValue(request: $_model.GetSecretValueRequest): Promise<$_model.GetSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async importKeyMaterialWithOptions(request: $_model.ImportKeyMaterialRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportKeyMaterialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptedKeyMaterial)) {
      query["EncryptedKeyMaterial"] = request.encryptedKeyMaterial;
    }

    if (!$dara.isNull(request.importToken)) {
      query["ImportToken"] = request.importToken;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.keyMaterialExpireUnix)) {
      query["KeyMaterialExpireUnix"] = request.keyMaterialExpireUnix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ImportKeyMaterialResponse>(await this.callApi(params, req, runtime), new $_model.ImportKeyMaterialResponse({}));
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
  async importKeyMaterial(request: $_model.ImportKeyMaterialRequest): Promise<$_model.ImportKeyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importKeyMaterialWithOptions(request, runtime);
  }

  /**
   * Queries all aliases in the current region for the current account.
   * 
   * @param request - ListAliasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(request: $_model.ListAliasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAliasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListAliasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAliasesResponse({}));
  }

  /**
   * Queries all aliases in the current region for the current account.
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(request: $_model.ListAliasesRequest): Promise<$_model.ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAliasesWithOptions(request, runtime);
  }

  /**
   * @param request - ListAliasesByKeyIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesByKeyIdResponse
   */
  async listAliasesByKeyIdWithOptions(request: $_model.ListAliasesByKeyIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAliasesByKeyIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListAliasesByKeyIdResponse>(await this.callApi(params, req, runtime), new $_model.ListAliasesByKeyIdResponse({}));
  }

  /**
   * @param request - ListAliasesByKeyIdRequest
   * @returns ListAliasesByKeyIdResponse
   */
  async listAliasesByKeyId(request: $_model.ListAliasesByKeyIdRequest): Promise<$_model.ListAliasesByKeyIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
  }

  /**
   * Queries a list of application access points (AAPs).
   * 
   * @param request - ListApplicationAccessPointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationAccessPointsResponse
   */
  async listApplicationAccessPointsWithOptions(request: $_model.ListApplicationAccessPointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationAccessPointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListApplicationAccessPointsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationAccessPointsResponse({}));
  }

  /**
   * Queries a list of application access points (AAPs).
   * 
   * @param request - ListApplicationAccessPointsRequest
   * @returns ListApplicationAccessPointsResponse
   */
  async listApplicationAccessPoints(request: $_model.ListApplicationAccessPointsRequest): Promise<$_model.ListApplicationAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationAccessPointsWithOptions(request, runtime);
  }

  /**
   * @param request - ListClientKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientKeysResponse
   */
  async listClientKeysWithOptions(request: $_model.ListClientKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientKeysResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListClientKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListClientKeysResponse({}));
  }

  /**
   * @param request - ListClientKeysRequest
   * @returns ListClientKeysResponse
   */
  async listClientKeys(request: $_model.ListClientKeysRequest): Promise<$_model.ListClientKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientKeysWithOptions(request, runtime);
  }

  /**
   * Queries all versions of a specified CMK.
   * 
   * @param request - ListKeyVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeyVersionsResponse
   */
  async listKeyVersionsWithOptions(request: $_model.ListKeyVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKeyVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListKeyVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListKeyVersionsResponse({}));
  }

  /**
   * Queries all versions of a specified CMK.
   * 
   * @param request - ListKeyVersionsRequest
   * @returns ListKeyVersionsResponse
   */
  async listKeyVersions(request: $_model.ListKeyVersionsRequest): Promise<$_model.ListKeyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeyVersionsWithOptions(request, runtime);
  }

  /**
   * Queries all customer master keys (CMKs) of the current Alibaba Cloud account in the current region.
   * 
   * @param request - ListKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeysResponse
   */
  async listKeysWithOptions(request: $_model.ListKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListKeysResponse({}));
  }

  /**
   * Queries all customer master keys (CMKs) of the current Alibaba Cloud account in the current region.
   * 
   * @param request - ListKeysRequest
   * @returns ListKeysResponse
   */
  async listKeys(request: $_model.ListKeysRequest): Promise<$_model.ListKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

  /**
   * Queries a list of Key Management Service (KMS) instances.
   * 
   * @param request - ListKmsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKmsInstancesResponse
   */
  async listKmsInstancesWithOptions(request: $_model.ListKmsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKmsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListKmsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListKmsInstancesResponse({}));
  }

  /**
   * Queries a list of Key Management Service (KMS) instances.
   * 
   * @param request - ListKmsInstancesRequest
   * @returns ListKmsInstancesResponse
   */
  async listKmsInstances(request: $_model.ListKmsInstancesRequest): Promise<$_model.ListKmsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKmsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of access control rules.
   * 
   * @param request - ListNetworkRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkRulesResponse
   */
  async listNetworkRulesWithOptions(request: $_model.ListNetworkRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListNetworkRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkRulesResponse({}));
  }

  /**
   * Queries a list of access control rules.
   * 
   * @param request - ListNetworkRulesRequest
   * @returns ListNetworkRulesResponse
   */
  async listNetworkRules(request: $_model.ListNetworkRulesRequest): Promise<$_model.ListNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPoliciesResponse
   */
  async listPoliciesWithOptions(request: $_model.ListPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListPoliciesResponse({}));
  }

  /**
   * Queries a list of permission policies.
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listResourceTagsWithOptions(request: $_model.ListResourceTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListResourceTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTagsResponse({}));
  }

  /**
   * @remarks
   * Request format: KeyId="string"
   * 
   * @param request - ListResourceTagsRequest
   * @returns ListResourceTagsResponse
   */
  async listResourceTags(request: $_model.ListResourceTagsRequest): Promise<$_model.ListResourceTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSecretVersionIdsWithOptions(request: $_model.ListSecretVersionIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretVersionIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeDeprecated)) {
      query["IncludeDeprecated"] = request.includeDeprecated;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSecretVersionIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretVersionIdsResponse({}));
  }

  /**
   * @remarks
   * The secret value is not included in the returned version information. By default, deprecated secret versions are not returned.
   * 
   * @param request - ListSecretVersionIdsRequest
   * @returns ListSecretVersionIdsResponse
   */
  async listSecretVersionIds(request: $_model.ListSecretVersionIdsRequest): Promise<$_model.ListSecretVersionIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listSecretsWithOptions(request: $_model.ListSecretsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fetchTags)) {
      query["FetchTags"] = request.fetchTags;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretsResponse({}));
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
  async listSecrets(request: $_model.ListSecretsRequest): Promise<$_model.ListSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a key or a secret.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags of a key or a secret.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async openKmsServiceWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.OpenKmsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.OpenKmsServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenKmsServiceResponse({}));
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
  async openKmsService(): Promise<$_model.OpenKmsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async putSecretValueWithOptions(request: $_model.PutSecretValueRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutSecretValueResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secretData)) {
      query["SecretData"] = request.secretData;
    }

    if (!$dara.isNull(request.secretDataType)) {
      query["SecretDataType"] = request.secretDataType;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    if (!$dara.isNull(request.versionStages)) {
      query["VersionStages"] = request.versionStages;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.PutSecretValueResponse>(await this.callApi(params, req, runtime), new $_model.PutSecretValueResponse({}));
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
  async putSecretValue(request: $_model.PutSecretValueRequest): Promise<$_model.PutSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async reEncryptWithOptions(tmpReq: $_model.ReEncryptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReEncryptResponse> {
    tmpReq.validate();
    let request = new $_model.ReEncryptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationEncryptionContext)) {
      request.destinationEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationEncryptionContext, "DestinationEncryptionContext", "json");
    }

    if (!$dara.isNull(tmpReq.sourceEncryptionContext)) {
      request.sourceEncryptionContextShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceEncryptionContext, "SourceEncryptionContext", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ciphertextBlob)) {
      query["CiphertextBlob"] = request.ciphertextBlob;
    }

    if (!$dara.isNull(request.destinationEncryptionContextShrink)) {
      query["DestinationEncryptionContext"] = request.destinationEncryptionContextShrink;
    }

    if (!$dara.isNull(request.destinationKeyId)) {
      query["DestinationKeyId"] = request.destinationKeyId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.sourceEncryptionAlgorithm)) {
      query["SourceEncryptionAlgorithm"] = request.sourceEncryptionAlgorithm;
    }

    if (!$dara.isNull(request.sourceEncryptionContextShrink)) {
      query["SourceEncryptionContext"] = request.sourceEncryptionContextShrink;
    }

    if (!$dara.isNull(request.sourceKeyId)) {
      query["SourceKeyId"] = request.sourceKeyId;
    }

    if (!$dara.isNull(request.sourceKeyVersionId)) {
      query["SourceKeyVersionId"] = request.sourceKeyVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ReEncryptResponse>(await this.callApi(params, req, runtime), new $_model.ReEncryptResponse({}));
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
  async reEncrypt(request: $_model.ReEncryptRequest): Promise<$_model.ReEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

  /**
   * 仅后付费实例支持释放，预付费实例需要从用户中心-退订管理释放。
   * 
   * @param request - ReleaseKmsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseKmsInstanceResponse
   */
  async releaseKmsInstanceWithOptions(request: $_model.ReleaseKmsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseKmsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.forceDeleteWithoutBackup)) {
      query["ForceDeleteWithoutBackup"] = request.forceDeleteWithoutBackup;
    }

    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseKmsInstance",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseKmsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseKmsInstanceResponse({}));
  }

  /**
   * 仅后付费实例支持释放，预付费实例需要从用户中心-退订管理释放。
   * 
   * @param request - ReleaseKmsInstanceRequest
   * @returns ReleaseKmsInstanceResponse
   */
  async releaseKmsInstance(request: $_model.ReleaseKmsInstanceRequest): Promise<$_model.ReleaseKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseKmsInstanceWithOptions(request, runtime);
  }

  /**
   * @remarks
   * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
   * 
   * @param request - RestoreSecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreSecretResponse
   */
  async restoreSecretWithOptions(request: $_model.RestoreSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.RestoreSecretResponse>(await this.callApi(params, req, runtime), new $_model.RestoreSecretResponse({}));
  }

  /**
   * @remarks
   * You can only use this operation to restore a deleted secret that is within its recovery period. If you set **ForceDeleteWithoutRecovery** to **true** when you delete the secret, you cannot restore it.
   * 
   * @param request - RestoreSecretRequest
   * @returns RestoreSecretResponse
   */
  async restoreSecret(request: $_model.RestoreSecretRequest): Promise<$_model.RestoreSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async rotateSecretWithOptions(request: $_model.RotateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RotateSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.RotateSecretResponse>(await this.callApi(params, req, runtime), new $_model.RotateSecretResponse({}));
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
  async rotateSecret(request: $_model.RotateSecretRequest): Promise<$_model.RotateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async scheduleKeyDeletionWithOptions(request: $_model.ScheduleKeyDeletionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScheduleKeyDeletionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.pendingWindowInDays)) {
      query["PendingWindowInDays"] = request.pendingWindowInDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ScheduleKeyDeletionResponse>(await this.callApi(params, req, runtime), new $_model.ScheduleKeyDeletionResponse({}));
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
  async scheduleKeyDeletion(request: $_model.ScheduleKeyDeletionRequest): Promise<$_model.ScheduleKeyDeletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async setDeletionProtectionWithOptions(request: $_model.SetDeletionProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDeletionProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletionProtectionDescription)) {
      query["DeletionProtectionDescription"] = request.deletionProtectionDescription;
    }

    if (!$dara.isNull(request.enableDeletionProtection)) {
      query["EnableDeletionProtection"] = request.enableDeletionProtection;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.protectedResourceArn)) {
      query["ProtectedResourceArn"] = request.protectedResourceArn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SetDeletionProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetDeletionProtectionResponse({}));
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
  async setDeletionProtection(request: $_model.SetDeletionProtectionRequest): Promise<$_model.SetDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * 可以设置一条 Key Policy，且名称必须为 default。
   * 
   * @param request - SetKeyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetKeyPolicyResponse
   */
  async setKeyPolicyWithOptions(request: $_model.SetKeyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetKeyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SetKeyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.SetKeyPolicyResponse({}));
  }

  /**
   * 可以设置一条 Key Policy，且名称必须为 default。
   * 
   * @param request - SetKeyPolicyRequest
   * @returns SetKeyPolicyResponse
   */
  async setKeyPolicy(request: $_model.SetKeyPolicyRequest): Promise<$_model.SetKeyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setKeyPolicyWithOptions(request, runtime);
  }

  /**
   * 可以设置一条 Secret Policy，且名称必须为 default。
   * 
   * @param request - SetSecretPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSecretPolicyResponse
   */
  async setSecretPolicyWithOptions(request: $_model.SetSecretPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSecretPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policy)) {
      query["Policy"] = request.policy;
    }

    if (!$dara.isNull(request.policyName)) {
      query["PolicyName"] = request.policyName;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.SetSecretPolicyResponse>(await this.callApi(params, req, runtime), new $_model.SetSecretPolicyResponse({}));
  }

  /**
   * 可以设置一条 Secret Policy，且名称必须为 default。
   * 
   * @param request - SetSecretPolicyRequest
   * @returns SetSecretPolicyResponse
   */
  async setSecretPolicy(request: $_model.SetSecretPolicyRequest): Promise<$_model.SetSecretPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async tagResourceWithOptions(request: $_model.TagResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.TagResourceResponse>(await this.callApi(params, req, runtime), new $_model.TagResourceResponse({}));
  }

  /**
   * @remarks
   * You can add up to 10 tags to a CMK, secret, or certificate.
   * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
   * 
   * @param request - TagResourceRequest
   * @returns TagResourceResponse
   */
  async tagResource(request: $_model.TagResourceRequest): Promise<$_model.TagResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
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
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async untagResourceWithOptions(request: $_model.UntagResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UntagResourceResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourceResponse({}));
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
  async untagResource(request: $_model.UntagResourceRequest): Promise<$_model.UntagResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
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
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAliasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(request: $_model.UpdateAliasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAliasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliasName)) {
      query["AliasName"] = request.aliasName;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateAliasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAliasResponse({}));
  }

  /**
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(request: $_model.UpdateAliasRequest): Promise<$_model.UpdateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateApplicationAccessPointWithOptions(request: $_model.UpdateApplicationAccessPointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationAccessPointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.policies)) {
      query["Policies"] = request.policies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateApplicationAccessPointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationAccessPointResponse({}));
  }

  /**
   * @remarks
   * The update takes effect immediately after an AAP information is updated. Exercise caution when you perform this operation. You can update the description of an AAP and the permission policies that are associated with the AAP. You cannot update the name of the AAP.
   * 
   * @param request - UpdateApplicationAccessPointRequest
   * @returns UpdateApplicationAccessPointResponse
   */
  async updateApplicationAccessPoint(request: $_model.UpdateApplicationAccessPointRequest): Promise<$_model.UpdateApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateCertificateStatusWithOptions(request: $_model.UpdateCertificateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCertificateStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateCertificateStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCertificateStatusResponse({}));
  }

  /**
   * @remarks
   * In this example, the status of the certificate whose ID is `9a28de48-8d8b-484d-a766-dec4****` is updated to INACTIVE.
   * 
   * @param request - UpdateCertificateStatusRequest
   * @returns UpdateCertificateStatusResponse
   */
  async updateCertificateStatus(request: $_model.UpdateCertificateStatusRequest): Promise<$_model.UpdateCertificateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateKeyDescriptionWithOptions(request: $_model.UpdateKeyDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKeyDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateKeyDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKeyDescriptionResponse({}));
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
  async updateKeyDescription(request: $_model.UpdateKeyDescriptionRequest): Promise<$_model.UpdateKeyDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateKmsInstanceBindVpcWithOptions(request: $_model.UpdateKmsInstanceBindVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKmsInstanceBindVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindVpcs)) {
      query["BindVpcs"] = request.bindVpcs;
    }

    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKmsInstanceBindVpc",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKmsInstanceBindVpcResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKmsInstanceBindVpcResponse({}));
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
  async updateKmsInstanceBindVpc(request: $_model.UpdateKmsInstanceBindVpcRequest): Promise<$_model.UpdateKmsInstanceBindVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateNetworkRuleWithOptions(request: $_model.UpdateNetworkRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.sourcePrivateIp)) {
      query["SourcePrivateIp"] = request.sourcePrivateIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateNetworkRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkRuleResponse({}));
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
  async updateNetworkRule(request: $_model.UpdateNetworkRuleRequest): Promise<$_model.UpdateNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updatePolicyWithOptions(request: $_model.UpdatePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessControlRules)) {
      query["AccessControlRules"] = request.accessControlRules;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.permissions)) {
      query["Permissions"] = request.permissions;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdatePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePolicyResponse({}));
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
  async updatePolicy(request: $_model.UpdatePolicyRequest): Promise<$_model.UpdatePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateRotationPolicyWithOptions(request: $_model.UpdateRotationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRotationPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateRotationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRotationPolicyResponse({}));
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
  async updateRotationPolicy(request: $_model.UpdateRotationPolicyRequest): Promise<$_model.UpdateRotationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateSecretWithOptions(request: $_model.UpdateSecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.extendedConfig)) {
      query["ExtendedConfig"] = request.extendedConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSecretResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretResponse({}));
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
  async updateSecret(request: $_model.UpdateSecretRequest): Promise<$_model.UpdateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateSecretRotationPolicyWithOptions(request: $_model.UpdateSecretRotationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretRotationPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!$dara.isNull(request.rotationInterval)) {
      query["RotationInterval"] = request.rotationInterval;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSecretRotationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretRotationPolicyResponse({}));
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
  async updateSecretRotationPolicy(request: $_model.UpdateSecretRotationPolicyRequest): Promise<$_model.UpdateSecretRotationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateSecretVersionStageWithOptions(request: $_model.UpdateSecretVersionStageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretVersionStageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.moveToVersion)) {
      query["MoveToVersion"] = request.moveToVersion;
    }

    if (!$dara.isNull(request.removeFromVersion)) {
      query["RemoveFromVersion"] = request.removeFromVersion;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.versionStage)) {
      query["VersionStage"] = request.versionStage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UpdateSecretVersionStageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretVersionStageResponse({}));
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
  async updateSecretVersionStage(request: $_model.UpdateSecretVersionStageRequest): Promise<$_model.UpdateSecretVersionStageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async uploadCertificateWithOptions(request: $_model.UploadCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificate)) {
      query["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.certificateChain)) {
      query["CertificateChain"] = request.certificateChain;
    }

    if (!$dara.isNull(request.certificateId)) {
      query["CertificateId"] = request.certificateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.UploadCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadCertificateResponse({}));
  }

  /**
   * @remarks
   * In this example, a certificate issued by a CA is imported into Certificates Manager. The ID of the certificate in Certificates Manager is `12345678-1234-1234-1234-12345678****`.
   * 
   * @param request - UploadCertificateRequest
   * @returns UploadCertificateResponse
   */
  async uploadCertificate(request: $_model.UploadCertificateRequest): Promise<$_model.UploadCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadCertificateWithOptions(request, runtime);
  }

}
