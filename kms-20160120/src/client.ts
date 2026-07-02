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
    this._endpointMap = {
      'us-west-1': "kms.us-west-1.aliyuncs.com",
      'us-east-1': "kms.us-east-1.aliyuncs.com",
      'me-east-1': "kms.me-east-1.aliyuncs.com",
      'me-central-1': "kms.me-central-1.aliyuncs.com",
      'eu-west-1': "kms.eu-west-1.aliyuncs.com",
      'eu-central-1': "kms.eu-central-1.aliyuncs.com",
      'cn-zhengzhou-jva': "kms.cn-zhengzhou-jva.aliyuncs.com",
      'cn-zhangjiakou': "kms.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "kms.cn-wulanchabu.aliyuncs.com",
      'cn-wuhan-lr': "kms.cn-wuhan-lr.aliyuncs.com",
      'cn-shenzhen-finance-1': "kms.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen': "kms.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "kms.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "kms.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "kms.cn-qingdao.aliyuncs.com",
      'cn-huhehaote': "kms.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "kms.cn-hongkong.aliyuncs.com",
      'cn-heyuan': "kms.cn-heyuan.aliyuncs.com",
      'cn-hangzhou-finance': "kms.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou': "kms.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "kms.cn-guangzhou.aliyuncs.com",
      'cn-fuzhou': "kms.cn-fuzhou.aliyuncs.com",
      'cn-chengdu': "kms.cn-chengdu.aliyuncs.com",
      'cn-beijing-finance-1': "kms.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing': "kms.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "kms.ap-southeast-7.aliyuncs.com",
      'ap-southeast-6': "kms.ap-southeast-6.aliyuncs.com",
      'ap-southeast-5': "kms.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "kms.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "kms.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "kms.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "kms.ap-south-1.aliyuncs.com",
      'ap-northeast-2': "kms.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "kms.ap-northeast-1.aliyuncs.com",
    };
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
   * Decrypts data by using the private key of an asymmetric CMK.
   * 
   * @remarks
   * ### Usage notes
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway, the queries per second (QPS) limit for each Alibaba Cloud account is 200. If the QPS exceeds the limit, the API call is throttled. This can affect your business. We recommend that you plan your calls to avoid exceeding this limit.
   * - If you use a dedicated gateway, the QPS limit for each Alibaba Cloud account is subject to the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table describes the supported encryption algorithms.
   * | KeySpec   | Algorithm             | Description                                        | Ciphertext length (bytes) |
   * | --------- | --------------------- | -------------------------------------------------- | ------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 256                       |
   * | RSA_2048 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 256                       |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 384                       |
   * | RSA_3072 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 384                       |
   * | EC_SM2   | SM2PKE                | SM2 elliptic curve public key encryption algorithm | Maximum 6,144             |
   * This topic provides an example of how to use the asymmetric key whose ID is `key-hzz630494463ejqjx****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==` using the `RSAES_OAEP_SHA_1` decryption algorithm.
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
   * Decrypts data by using the private key of an asymmetric CMK.
   * 
   * @remarks
   * ### Usage notes
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway, the queries per second (QPS) limit for each Alibaba Cloud account is 200. If the QPS exceeds the limit, the API call is throttled. This can affect your business. We recommend that you plan your calls to avoid exceeding this limit.
   * - If you use a dedicated gateway, the QPS limit for each Alibaba Cloud account is subject to the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **ENCRYPT/DECRYPT**. The following table describes the supported encryption algorithms.
   * | KeySpec   | Algorithm             | Description                                        | Ciphertext length (bytes) |
   * | --------- | --------------------- | -------------------------------------------------- | ------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 256                       |
   * | RSA_2048 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 256                       |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 384                       |
   * | RSA_3072 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 384                       |
   * | EC_SM2   | SM2PKE                | SM2 elliptic curve public key encryption algorithm | Maximum 6,144             |
   * This topic provides an example of how to use the asymmetric key whose ID is `key-hzz630494463ejqjx****` and version ID is `2ab1a983-7072-4bbc-a582-584b5bd8****` to decrypt the ciphertext `BQKP+1zK6+ZEMxTP5qaVzcsgXtWplYBKm0NXdSnB5FzliFxE1bSiu4dnEIlca2JpeH7yz1/S6fed630H+hIH6DoM25fTLNcKj+mFB0Xnh9m2+HN59Mn4qyTfcUeadnfCXSWcGBouhXFwcdd2rJ3n337bzTf4jm659gZu3L0i6PLuxM9p7mqdwO0cKJPfGVfhnfMz+f4alMg79WB/NNyE2lyX7/qxvV49ObNrrJbKSFiz8Djocaf0IESNLMbfYI5bXjWkJlX92DQbKhibtQW8ZOJ//ZC6t0AWcUoKL6QDm/dg5koQalcleRinpB+QadFm894sLbVZ9+N4GVsv1W****==` using the `RSAES_OAEP_SHA_1` decryption algorithm.
   * 
   * @param request - AsymmetricDecryptRequest
   * @returns AsymmetricDecryptResponse
   */
  async asymmetricDecrypt(request: $_model.AsymmetricDecryptRequest): Promise<$_model.AsymmetricDecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asymmetricDecryptWithOptions(request, runtime);
  }

  /**
   * Encrypts data by using the public key of an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the permissions that are required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. To access KMS over the Internet, you must enable Internet access. For more information, see [Access a key in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway: The number of queries per second (QPS) for a single user is limited to 200. If the limit is exceeded, API calls are throttled. This may affect your business. We recommend that you plan your API calls to avoid exceeding this limit.
   * - If you use a dedicated gateway: The QPS limit for a single user depends on the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys that have the **Usage** parameter set to **ENCRYPT/DECRYPT**. The following table describes the supported encryption algorithms.
   * | KeySpec   | Algorithm             | Description                                        | Maximum number of bytes that can be encrypted |
   * | --------- | --------------------- | -------------------------------------------------- | --------------------------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 190                                           |
   * | RSA_2048 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 214                                           |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 318                                           |
   * | RSA_3072 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 342                                           |
   * | EC_SM2   | SM2PKE                | SM2 elliptic curve public key encryption algorithm | 6047                                          |
   * In this example, the plaintext `SGVsbG8gd29ybGQ=` is encrypted using an asymmetric key with the key ID `key-hzz630494463ejqjx****`, the key version ID `2ab1a983-7072-4bbc-a582-584b5bd8****`, and the `RSAES_OAEP_SHA_1` encryption algorithm.
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
   * Encrypts data by using the public key of an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the permissions that are required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. To access KMS over the Internet, you must enable Internet access. For more information, see [Access a key in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway: The number of queries per second (QPS) for a single user is limited to 200. If the limit is exceeded, API calls are throttled. This may affect your business. We recommend that you plan your API calls to avoid exceeding this limit.
   * - If you use a dedicated gateway: The QPS limit for a single user depends on the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys that have the **Usage** parameter set to **ENCRYPT/DECRYPT**. The following table describes the supported encryption algorithms.
   * | KeySpec   | Algorithm             | Description                                        | Maximum number of bytes that can be encrypted |
   * | --------- | --------------------- | -------------------------------------------------- | --------------------------------------------- |
   * | RSA_2048 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 190                                           |
   * | RSA_2048 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 214                                           |
   * | RSA_3072 | RSAES_OAEP_SHA_256 | RSAES-OAEP using SHA-256 and MGF1 with SHA-256     | 318                                           |
   * | RSA_3072 | RSAES_OAEP_SHA_1   | RSAES-OAEP using SHA1 and MGF1 with SHA1           | 342                                           |
   * | EC_SM2   | SM2PKE                | SM2 elliptic curve public key encryption algorithm | 6047                                          |
   * In this example, the plaintext `SGVsbG8gd29ybGQ=` is encrypted using an asymmetric key with the key ID `key-hzz630494463ejqjx****`, the key version ID `2ab1a983-7072-4bbc-a582-584b5bd8****`, and the `RSAES_OAEP_SHA_1` encryption algorithm.
   * 
   * @param request - AsymmetricEncryptRequest
   * @returns AsymmetricEncryptResponse
   */
  async asymmetricEncrypt(request: $_model.AsymmetricEncryptRequest): Promise<$_model.AsymmetricEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asymmetricEncryptWithOptions(request, runtime);
  }

  /**
   * Generates a digital signature by using an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policies that are required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. This method requires you to enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Shared gateway: This operation is limited to 200 queries per second (QPS) for each user. If the limit is exceeded, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * - Dedicated gateway: The QPS for each user is limited by the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms.
   * | KeySpec   | Algorithm            | Description                                                |
   * | --------- | -------------------- | ---------------------------------------------------------- |
   * | RSA_2048 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | RSA_3072 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | EC_P256  | ECDSA_SHA_256      | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest  |
   * | EC_P256K | ECDSA_SHA_256      | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2   | SM2DSA               | SM2 elliptic curve digital signature algorithm             |
   * > According to the GB/T 32918.2 standard "Information security technology - SM2 elliptic curve public key cryptography - Part 2: Digital signature algorithm", when you calculate an SM2 signature, the value of the **Digest** parameter is not the SM3 hash value of the original message. Instead, the value is the SM3 hash value of the result of concatenating Z(A) and M. M is the original message to be signed. Z(A) is the hash value of user A, as defined in GB/T 32918.2.
   * This topic provides an example of how to use an asymmetric key with the key ID `5c438b18-05be-40ad-b6c2-3be6752c****` and the key version ID `2ab1a983-7072-4bbc-a582-584b5bd8****` to sign the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=` using the `RSA_PSS_SHA_256` signature algorithm.
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
   * Generates a digital signature by using an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policies that are required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. This method requires you to enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Shared gateway: This operation is limited to 200 queries per second (QPS) for each user. If the limit is exceeded, API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * - Dedicated gateway: The QPS for each user is limited by the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table describes the supported signature algorithms.
   * | KeySpec   | Algorithm            | Description                                                |
   * | --------- | -------------------- | ---------------------------------------------------------- |
   * | RSA_2048 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | RSA_3072 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | EC_P256  | ECDSA_SHA_256      | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest  |
   * | EC_P256K | ECDSA_SHA_256      | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2   | SM2DSA               | SM2 elliptic curve digital signature algorithm             |
   * > According to the GB/T 32918.2 standard "Information security technology - SM2 elliptic curve public key cryptography - Part 2: Digital signature algorithm", when you calculate an SM2 signature, the value of the **Digest** parameter is not the SM3 hash value of the original message. Instead, the value is the SM3 hash value of the result of concatenating Z(A) and M. M is the original message to be signed. Z(A) is the hash value of user A, as defined in GB/T 32918.2.
   * This topic provides an example of how to use an asymmetric key with the key ID `5c438b18-05be-40ad-b6c2-3be6752c****` and the key version ID `2ab1a983-7072-4bbc-a582-584b5bd8****` to sign the digest `ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuy****=` using the `RSA_PSS_SHA_256` signature algorithm.
   * 
   * @param request - AsymmetricSignRequest
   * @returns AsymmetricSignResponse
   */
  async asymmetricSign(request: $_model.AsymmetricSignRequest): Promise<$_model.AsymmetricSignResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asymmetricSignWithOptions(request, runtime);
  }

  /**
   * Verifies a digital signature by using the public key of an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or through a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access KMS instances over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway, the queries per second (QPS) limit for this operation is 200 for a single user. If you exceed this limit, API calls are throttled, which may impact your business. We recommend that you manage your call frequency to stay within the QPS limit.
   * - If you use a dedicated gateway, the QPS limit for this operation for a single user is determined by the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table lists the supported signature algorithms.
   * | KeySpec   | Algorithm            | Description                                                |
   * | --------- | -------------------- | ---------------------------------------------------------- |
   * | RSA_2048 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | RSA_3072 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | EC_P256  | ECDSA_SHA_256      | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest  |
   * | EC_P256K | ECDSA_SHA_256      | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2   | SM2DSA               | SM2 elliptic curve digital signature algorithm             |
   * > In accordance with the GBT32918 standard, when an SM2 signature is calculated, the value of the **Digest** parameter is not the SM3 hash value of the original message. Instead, the value is the SM3 hash value of the result generated by concatenating Z(A) and M. In this formula, M is the original message to be signed, and Z(A) is the hash value of user A as defined in GBT32918.
   * This topic provides an example of how to use an asymmetric key with the key ID \\`5c438b18-05be-40ad-b6c2-3be6752c\\*\\*\\*\\*\\` and the key version ID \\`2ab1a983-7072-4bbc-a582-584b5bd8\\*\\*\\*\\*\\` to verify the signature \\`M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq\\*\\*\\*\\*==\\` for the digest \\`ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=\\` using the RSA_PSS_SHA_256 signature algorithm.
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
   * Verifies a digital signature by using the public key of an asymmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or through a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access KMS instances over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway, the queries per second (QPS) limit for this operation is 200 for a single user. If you exceed this limit, API calls are throttled, which may impact your business. We recommend that you manage your call frequency to stay within the QPS limit.
   * - If you use a dedicated gateway, the QPS limit for this operation for a single user is determined by the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation supports only asymmetric keys for which the **Usage** parameter is set to **SIGN/VERIFY**. The following table lists the supported signature algorithms.
   * | KeySpec   | Algorithm            | Description                                                |
   * | --------- | -------------------- | ---------------------------------------------------------- |
   * | RSA_2048 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_2048 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | RSA_3072 | RSA_PSS_SHA_256   | RSASSA-PSS using SHA-256 and MGF1 with SHA-256             |
   * | RSA_3072 | RSA_PKCS1_SHA_256 | RSASSA-PKCS1-v1_5 using SHA-256                           |
   * | EC_P256  | ECDSA_SHA_256      | ECDSA on the P-256 Curve(secp256r1) with a SHA-256 digest  |
   * | EC_P256K | ECDSA_SHA_256      | ECDSA on the P-256K Curve(secp256k1) with a SHA-256 digest |
   * | EC_SM2   | SM2DSA               | SM2 elliptic curve digital signature algorithm             |
   * > In accordance with the GBT32918 standard, when an SM2 signature is calculated, the value of the **Digest** parameter is not the SM3 hash value of the original message. Instead, the value is the SM3 hash value of the result generated by concatenating Z(A) and M. In this formula, M is the original message to be signed, and Z(A) is the hash value of user A as defined in GBT32918.
   * This topic provides an example of how to use an asymmetric key with the key ID \\`5c438b18-05be-40ad-b6c2-3be6752c\\*\\*\\*\\*\\` and the key version ID \\`2ab1a983-7072-4bbc-a582-584b5bd8\\*\\*\\*\\*\\` to verify the signature \\`M2CceNZH00ZgL9ED/ZHFp21YRAvYeZHknJUc207OCZ0N9wNn9As4z2bON3FF3je+1Nu+2+/8Zj50HpMTpzYpMp2R93cYmACCmhaYoKydxylbyGzJR8y9likZRCrkD38lRoS40aBBvv/6iRKzQuo9EGYVcel36cMNg00VmYNBy3pa1rwg3gA4l3cy6kjayZja1WGPkVhrVKsrJMdbpl0ApLjXKuD8rw1n1XLCwCUEL5eLPljTZaAveqdOFQOiZnZEGI27qIiZe7I1fN8tcz6anS/gTM7xRKE++5egEvRWlTQQTJeApnPSiUPA+8ZykNdelQsOQh5SrGoyI4A5pq\\*\\*\\*\\*==\\` for the digest \\`ZOyIygCyaOW6GjVnihtTFtIS9PNmskdyMlNKiuyjfzw=\\` using the RSA_PSS_SHA_256 signature algorithm.
   * 
   * @param request - AsymmetricVerifyRequest
   * @returns AsymmetricVerifyResponse
   */
  async asymmetricVerify(request: $_model.AsymmetricVerifyRequest): Promise<$_model.AsymmetricVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.asymmetricVerifyWithOptions(request, runtime);
  }

  /**
   * Cancels the deletion task of a CMK.
   * 
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
   * Cancels the deletion task of a CMK.
   * 
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
   * Creates an alias for a key.
   * 
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
   * Creates an alias for a key.
   * 
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
   * Creates a customer master key (CMK) for envelope encryption, digital signatures, or other cryptographic operations.
   * 
   * @remarks
   * - For information about the access policies required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Alibaba Cloud Key Management Service (KMS) supports common specifications for symmetric and asymmetric keys. For more information, see [Key management types and key specifications](https://help.aliyun.com/document_detail/480161.html).
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
   * Creates a customer master key (CMK) for envelope encryption, digital signatures, or other cryptographic operations.
   * 
   * @remarks
   * - For information about the access policies required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Alibaba Cloud Key Management Service (KMS) supports common specifications for symmetric and asymmetric keys. For more information, see [Key management types and key specifications](https://help.aliyun.com/document_detail/480161.html).
   * 
   * @param request - CreateKeyRequest
   * @returns CreateKeyResponse
   */
  async createKey(request: $_model.CreateKeyRequest): Promise<$_model.CreateKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyWithOptions(request, runtime);
  }

  /**
   * Creates a version for a customer master key (CMK).
   * 
   * @remarks
   * - You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation to create an asymmetric CMK and the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK. The status is specified by the KeyState parameter.
   * - The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
   * - If a CMK is in a private key store, you cannot create a version for the CMK.
   * - You can create a maximum of 50 versions for a CMK in the same region.
   * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Creates a version for a customer master key (CMK).
   * 
   * @remarks
   * - You can create a version only for an asymmetric CMK that is in the Enabled state. You can call the [CreateKey](https://help.aliyun.com/document_detail/28947.html) operation to create an asymmetric CMK and the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK. The status is specified by the KeyState parameter.
   * - The minimum interval for creating a version of the same CMK is seven days. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the time when the last version of a CMK was created. The time is specified by the LastRotationDate parameter.
   * - If a CMK is in a private key store, you cannot create a version for the CMK.
   * - You can create a maximum of 50 versions for a CMK in the same region.
   * You can create a version for the CMK whose ID is `0b30658a-ed1a-4922-b8f7-a673ca9c****` by using the parameter settings provided in this topic.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - CreateKeyVersionRequest
   * @returns CreateKeyVersionResponse
   */
  async createKeyVersion(request: $_model.CreateKeyVersionRequest): Promise<$_model.CreateKeyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKeyVersionWithOptions(request, runtime);
  }

  /**
   * Creates a network access rule to configure the private IP addresses or private CIDR blocks that are allowed to access a Key Management Service (KMS) instance.
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
   * Creates a network access rule to configure the private IP addresses or private CIDR blocks that are allowed to access a Key Management Service (KMS) instance.
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
   * Creates a secret and stores its initial version.
   * 
   * @remarks
   * - For information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Specify the secret name, the secret value for the initial version, and the version number. The initial version is marked with the ACSCurrent stage label.
   * - Key Management Service (KMS) uses the key that you specify to encrypt the secret value. The key and the secret must be in the same KMS instance. The key must be a symmetric key.
   *   > KMS encrypts the secret value of each version. Metadata such as the secret name, version number, and version stage labels are not encrypted.
   * - Before you encrypt the secret value, you must have the `kms:GenerateDataKey` permission on the key.
   * This topic provides an example of how to create an RDS secret. The secret is named `mydbconninfo`. The `VersionId` of the initial version is `v1`. The `SecretData` is `{"Accounts":[{"AccountName":"user1","AccountPassword":"****"}]}`.
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
   * Creates a secret and stores its initial version.
   * 
   * @remarks
   * - For information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Specify the secret name, the secret value for the initial version, and the version number. The initial version is marked with the ACSCurrent stage label.
   * - Key Management Service (KMS) uses the key that you specify to encrypt the secret value. The key and the secret must be in the same KMS instance. The key must be a symmetric key.
   *   > KMS encrypts the secret value of each version. Metadata such as the secret name, version number, and version stage labels are not encrypted.
   * - Before you encrypt the secret value, you must have the `kms:GenerateDataKey` permission on the key.
   * This topic provides an example of how to create an RDS secret. The secret is named `mydbconninfo`. The `VersionId` of the initial version is `v1`. The `SecretData` is `{"Accounts":[{"AccountName":"user1","AccountPassword":"****"}]}`.
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretWithOptions(request, runtime);
  }

  /**
   * Decrypts ciphertext that was encrypted by using a CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. To use a shared gateway, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Shared gateway: The queries per second (QPS) limit for a single user for this operation is 1,000. If this limit is exceeded, API calls are throttled, which may affect your business. We recommend that you plan your calls accordingly.
   * - Dedicated gateway: The QPS limit for a single user for this operation is subject to the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
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

    if (!$dara.isNull(request.recipient)) {
      query["Recipient"] = request.recipient;
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
   * Decrypts ciphertext that was encrypted by using a CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. To use a shared gateway, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Shared gateway: The queries per second (QPS) limit for a single user for this operation is 1,000. If this limit is exceeded, API calls are throttled, which may affect your business. We recommend that you plan your calls accordingly.
   * - Dedicated gateway: The QPS limit for a single user for this operation is subject to the performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * 
   * @param request - DecryptRequest
   * @returns DecryptResponse
   */
  async decrypt(request: $_model.DecryptRequest): Promise<$_model.DecryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decryptWithOptions(request, runtime);
  }

  /**
   * Deletes an alias.
   * 
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
   * Deletes an alias.
   * 
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
   * - For information about the access policy that a RAM user or RAM role requires to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before you delete an AAP, make sure that it is no longer in use. If you delete an AAP that is in use, related applications cannot access KMS. Proceed with caution.
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
   * - For information about the access policy that a RAM user or RAM role requires to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before you delete an AAP, make sure that it is no longer in use. If you delete an AAP that is in use, related applications cannot access KMS. Proceed with caution.
   * 
   * @param request - DeleteApplicationAccessPointRequest
   * @returns DeleteApplicationAccessPointResponse
   */
  async deleteApplicationAccessPoint(request: $_model.DeleteApplicationAccessPointRequest): Promise<$_model.DeleteApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * Deletes a client key.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before you delete a ClientKey, make sure that it is no longer in use. Deleting a ClientKey that is in use prevents related applications from accessing KMS. Proceed with caution.
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
   * Deletes a client key.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before you delete a ClientKey, make sure that it is no longer in use. Deleting a ClientKey that is in use prevents related applications from accessing KMS. Proceed with caution.
   * 
   * @param request - DeleteClientKeyRequest
   * @returns DeleteClientKeyResponse
   */
  async deleteClientKey(request: $_model.DeleteClientKeyRequest): Promise<$_model.DeleteClientKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientKeyWithOptions(request, runtime);
  }

  /**
   * Deletes the imported key material from a CMK. After deletion, the CMK enters the PendingImport state until you re-import key material.
   * 
   * @remarks
   * This operation does not delete the CMK that is created by using the key material.
   * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
   * After you delete the key material, you can upload only the same key material into the CMK.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Deletes the imported key material from a CMK. After deletion, the CMK enters the PendingImport state until you re-import key material.
   * 
   * @remarks
   * This operation does not delete the CMK that is created by using the key material.
   * If the CMK is in the PendingDeletion state, the state of the CMK and the scheduled deletion time do not change after you call this operation. If the CMK is not in the PendingDeletion state, the state of the CMK changes to PendingImport after you call this operation.
   * After you delete the key material, you can upload only the same key material into the CMK.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * - For information about the access policy that is required to call this OpenAPI as a Resource Access Management (RAM) user or RAM role, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before deleting the network control rule, ensure that it is not attached to any access policies. Otherwise, related applications cannot access KMS as expected.
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
   * - For information about the access policy that is required to call this OpenAPI as a Resource Access Management (RAM) user or RAM role, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Before deleting the network control rule, ensure that it is not attached to any access policies. Otherwise, related applications cannot access KMS as expected.
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
   * Deletes a secret.
   * 
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
   * Deletes a secret.
   * 
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
   * Queries the status of Key Management Service (KMS) within your Alibaba Cloud account.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
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
   * Queries the status of Key Management Service (KMS) within your Alibaba Cloud account.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * @returns DescribeAccountKmsStatusResponse
   */
  async describeAccountKmsStatus(): Promise<$_model.DescribeAccountKmsStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountKmsStatusWithOptions(runtime);
  }

  /**
   * Retrieves the details of an application access point (AAP).
   * 
   * @remarks
   * For information about the access policy that a Resource Access Management (RAM) user or RAM role must have to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Retrieves the details of an application access point (AAP).
   * 
   * @remarks
   * For information about the access policy that a Resource Access Management (RAM) user or RAM role must have to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - DescribeApplicationAccessPointRequest
   * @returns DescribeApplicationAccessPointResponse
   */
  async describeApplicationAccessPoint(request: $_model.DescribeApplicationAccessPointRequest): Promise<$_model.DescribeApplicationAccessPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApplicationAccessPointWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a CMK, such as the key state, usage, and rotation configuration.
   * 
   * @remarks
   * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries the metadata of a CMK, such as the key state, usage, and rotation configuration.
   * 
   * @remarks
   * You can query the information about the CMK `05754286-3ba2-4fa6-8d41-4323aca6****` by using parameter settings provided in this topic. The information includes the creator, creation time, status, and deletion protection status of the CMK.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - DescribeKeyRequest
   * @returns DescribeKeyResponse
   */
  async describeKey(request: $_model.DescribeKeyRequest): Promise<$_model.DescribeKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a specific CMK version.
   * 
   * @remarks
   * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries the metadata of a specific CMK version.
   * 
   * @remarks
   * This topic provides an example on how to query the information about a version of the CMK `1234abcd-12ab-34cd-56ef-12345678****`. The ID of the CMK version is `2ab1a983-7072-4bbc-a582-584b5bd8****`. The response shows that the creation time of the CMK version is `2016-03-25T10:42:40Z`.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - DescribeKeyVersionRequest
   * @returns DescribeKeyVersionResponse
   */
  async describeKeyVersion(request: $_model.DescribeKeyVersionRequest): Promise<$_model.DescribeKeyVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKeyVersionWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a network access rule.
   * 
   * @remarks
   * For information about the required access policy for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Retrieves the details of a network access rule.
   * 
   * @remarks
   * For information about the required access policy for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - DescribeNetworkRuleRequest
   * @returns DescribeNetworkRuleResponse
   */
  async describeNetworkRule(request: $_model.DescribeNetworkRuleRequest): Promise<$_model.DescribeNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a permission policy.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Retrieves the details of a permission policy.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - DescribePolicyRequest
   * @returns DescribePolicyResponse
   */
  async describePolicy(request: $_model.DescribePolicyRequest): Promise<$_model.DescribePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolicyWithOptions(request, runtime);
  }

  /**
   * Queries the regions where KMS is available.
   * 
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
   * Queries the regions where KMS is available.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(runtime);
  }

  /**
   * Queries the metadata of a secret.
   * 
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
   * Queries the metadata of a secret.
   * 
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
   * Disables a key.
   * 
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
   * Disables a key.
   * 
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
   * Enables a key to encrypt and decrypt data.
   * 
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
   * Enables a key to encrypt and decrypt data.
   * 
   * @param request - EnableKeyRequest
   * @returns EnableKeyResponse
   */
  async enableKey(request: $_model.EnableKeyRequest): Promise<$_model.EnableKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableKeyWithOptions(request, runtime);
  }

  /**
   * Encrypts plaintext by using a symmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required to allow a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To use this method, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - When accessed through a shared gateway, the queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, requests are throttled, which can affect your business. We recommend that you stay within this limit to avoid throttling.
   * - When accessed through a dedicated gateway, the QPS limit for a single user is subject to the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * - KMS encrypts the specified data using the primary version of a specified key.
   * - You can encrypt a maximum of 6 KB of data, such as an RSA key, a database password, or other sensitive information.
   * - If you migrate encrypted data from one region to another, you can call the Encrypt operation in the destination region to re-encrypt the plaintext data key from the source region. This generates a new encrypted data key. You can then call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt this new key in the destination region.
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
   * Encrypts plaintext by using a symmetric CMK.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required to allow a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To use this method, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - When accessed through a shared gateway, the queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, requests are throttled, which can affect your business. We recommend that you stay within this limit to avoid throttling.
   * - When accessed through a dedicated gateway, the QPS limit for a single user is subject to the computing performance specifications of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * - KMS encrypts the specified data using the primary version of a specified key.
   * - You can encrypt a maximum of 6 KB of data, such as an RSA key, a database password, or other sensitive information.
   * - If you migrate encrypted data from one region to another, you can call the Encrypt operation in the destination region to re-encrypt the plaintext data key from the source region. This generates a new encrypted data key. You can then call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt this new key in the destination region.
   * 
   * @param request - EncryptRequest
   * @returns EncryptResponse
   */
  async encrypt(request: $_model.EncryptRequest): Promise<$_model.EncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.encryptWithOptions(request, runtime);
  }

  /**
   * Exports a data key encrypted by a CMK. The data key is re-encrypted by a public key that you specify for secure transmission.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS using the public endpoint or a VPC endpoint. To use the public endpoint, you must first enable it. For more information, see [Access the key in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of the KMS instance: `<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`.
   * ### Description
   * After you call the [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation to obtain a data key encrypted by a master key (CMK), you can use the ExportDataKey operation to distribute the data key to other regions or cryptographic modules. The ExportDataKey operation returns the ciphertext of the data key, re-encrypted with the specified public key.
   * You can import the exported ciphertext into the cryptographic module that holds the corresponding private key. This process lets you securely distribute the data key from KMS to a cryptographic module. After the data key is imported into the cryptographic module, you can use it to encrypt or decrypt data.
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
   * Exports a data key encrypted by a CMK. The data key is re-encrypted by a public key that you specify for secure transmission.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy required for a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS using the public endpoint or a VPC endpoint. To use the public endpoint, you must first enable it. For more information, see [Access the key in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of the KMS instance: `<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`.
   * ### Description
   * After you call the [GenerateDataKeyWithoutPlaintext](https://help.aliyun.com/document_detail/134043.html) operation to obtain a data key encrypted by a master key (CMK), you can use the ExportDataKey operation to distribute the data key to other regions or cryptographic modules. The ExportDataKey operation returns the ciphertext of the data key, re-encrypted with the specified public key.
   * You can import the exported ciphertext into the cryptographic module that holds the corresponding private key. This process lets you securely distribute the data key from KMS to a cryptographic module. After the data key is imported into the cryptographic module, you can use it to encrypt or decrypt data.
   * 
   * @param request - ExportDataKeyRequest
   * @returns ExportDataKeyResponse
   */
  async exportDataKey(request: $_model.ExportDataKeyRequest): Promise<$_model.ExportDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportDataKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random data key, encrypts it by using a CMK and a public key that you specify, and returns both ciphertexts.
   * 
   * @remarks
   * ### Notes
   * - For more information about the access policy required for a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable Internet access. For more information, see [Access KMS instances over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### Description
   * We recommend that you import the data key to a cryptographic module for data encryption and data decryption as follows:
   * 1\\. Call the GenerateAndExportDataKey operation to obtain the data key encrypted by a KMS key and a specified public key.
   * 2\\. Save the ciphertext of the data key that is encrypted by the KMS key to KMS or a storage service, such as ApsaraDB, for key backup and recovery.
   * 3\\. Import the ciphertext of the data key that is encrypted by the public key to the cryptographic module that contains the corresponding private key. This process distributes the key from KMS to the cryptographic module. You can then use the data key to encrypt and decrypt data.
   * > The KMS key that you specify in the request is used only to encrypt the data key and is not used to generate the data key. KMS does not record or store the randomly generated data key. You are responsible for recording the data key or its ciphertext.
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
   * Generates a random data key, encrypts it by using a CMK and a public key that you specify, and returns both ciphertexts.
   * 
   * @remarks
   * ### Notes
   * - For more information about the access policy required for a RAM user or RAM role to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable Internet access. For more information, see [Access KMS instances over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### Description
   * We recommend that you import the data key to a cryptographic module for data encryption and data decryption as follows:
   * 1\\. Call the GenerateAndExportDataKey operation to obtain the data key encrypted by a KMS key and a specified public key.
   * 2\\. Save the ciphertext of the data key that is encrypted by the KMS key to KMS or a storage service, such as ApsaraDB, for key backup and recovery.
   * 3\\. Import the ciphertext of the data key that is encrypted by the public key to the cryptographic module that contains the corresponding private key. This process distributes the key from KMS to the cryptographic module. You can then use the data key to encrypt and decrypt data.
   * > The KMS key that you specify in the request is used only to encrypt the data key and is not used to generate the data key. KMS does not record or store the randomly generated data key. You are responsible for recording the data key or its ciphertext.
   * 
   * @param request - GenerateAndExportDataKeyRequest
   * @returns GenerateAndExportDataKeyResponse
   */
  async generateAndExportDataKey(request: $_model.GenerateAndExportDataKeyRequest): Promise<$_model.GenerateAndExportDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateAndExportDataKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random data key for envelope encryption. The data key is returned in both plaintext and ciphertext forms.
   * 
   * @remarks
   * - For information about the permissions that are required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called using a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway to call this operation, the queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, API calls are throttled. This may affect your business. We recommend that you call this operation at a reasonable rate.
   * - If you use a dedicated gateway to call this operation, the QPS limit for a single user is based on the computing performance of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation generates a random data key, encrypts the data key using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to encrypt data locally and outside of KMS. When you store the encrypted data, you must also store the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext field and the ciphertext of the data key from the CiphertextBlob field in the response.
   * The CMK that you specify in the request is used only to encrypt the data key. It is not involved in the generation of the data key. KMS does not record or store the randomly generated data key. You are responsible for the persistence of the ciphertext of the data key.
   * We recommend that you perform the following steps to encrypt data locally:
   * 1\\. Call the GenerateDataKey operation to obtain a data key for data encryption.
   * 2\\. Use the plaintext of the data key returned in the Plaintext field of the response to encrypt data locally. Then, clear the plaintext of the data key from memory.
   * 3\\. Store the ciphertext of the data key returned in the CiphertextBlob field of the response together with the encrypted data.
   * To decrypt data locally:
   * - Call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the stored ciphertext of the data key. This operation returns the plaintext of the data key.
   * - Use the plaintext of the data key to decrypt data locally. Then, clear the plaintext of the data key from memory.
   * This topic provides an example of how to generate a random data key for a key with the ID `key-hzz630494463ejqjx****`.
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

    if (!$dara.isNull(request.recipient)) {
      query["Recipient"] = request.recipient;
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
   * Generates a random data key for envelope encryption. The data key is returned in both plaintext and ciphertext forms.
   * 
   * @remarks
   * - For information about the permissions that are required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation can be called using a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or a VPC. To access KMS over the Internet, you must enable the public endpoint. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - If you use a shared gateway to call this operation, the queries per second (QPS) limit for a single user is 1,000. If the limit is exceeded, API calls are throttled. This may affect your business. We recommend that you call this operation at a reasonable rate.
   * - If you use a dedicated gateway to call this operation, the QPS limit for a single user is based on the computing performance of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Description
   * This operation generates a random data key, encrypts the data key using the specified customer master key (CMK), and returns the plaintext and ciphertext of the data key. You can use the plaintext of the data key to encrypt data locally and outside of KMS. When you store the encrypted data, you must also store the ciphertext of the data key. You can obtain the plaintext of the data key from the Plaintext field and the ciphertext of the data key from the CiphertextBlob field in the response.
   * The CMK that you specify in the request is used only to encrypt the data key. It is not involved in the generation of the data key. KMS does not record or store the randomly generated data key. You are responsible for the persistence of the ciphertext of the data key.
   * We recommend that you perform the following steps to encrypt data locally:
   * 1\\. Call the GenerateDataKey operation to obtain a data key for data encryption.
   * 2\\. Use the plaintext of the data key returned in the Plaintext field of the response to encrypt data locally. Then, clear the plaintext of the data key from memory.
   * 3\\. Store the ciphertext of the data key returned in the CiphertextBlob field of the response together with the encrypted data.
   * To decrypt data locally:
   * - Call the [Decrypt](https://help.aliyun.com/document_detail/28950.html) operation to decrypt the stored ciphertext of the data key. This operation returns the plaintext of the data key.
   * - Use the plaintext of the data key to decrypt data locally. Then, clear the plaintext of the data key from memory.
   * This topic provides an example of how to generate a random data key for a key with the ID `key-hzz630494463ejqjx****`.
   * 
   * @param request - GenerateDataKeyRequest
   * @returns GenerateDataKeyResponse
   */
  async generateDataKey(request: $_model.GenerateDataKeyRequest): Promise<$_model.GenerateDataKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDataKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random data key in only ciphertext form, without the plaintext copy.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy that a RAM user or RAM role needs to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: Access KMS over the Internet or through a VPC domain name. This method requires Internet access to be enabled. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: Access KMS through a KMS private endpoint (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Calls through a shared gateway: The queries per second (QPS) limit for a single user is 1,000. If you exceed this limit, requests are throttled, which may affect your business. We recommend that you stay within this limit.
   * - Calls through a dedicated gateway: The QPS limit for a single user depends on the computing performance of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Details
   * This operation generates a random data key, encrypts it with a specified symmetric customer master key (CMK), and returns the ciphertext of the data key. This operation provides the same features as [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html). The only difference is that this operation does not return the plaintext of the data key.
   * The CMK that you specify in the request is used only to encrypt the data key. It is not used to generate the data key. KMS does not record or store the randomly generated data key.
   * > - This operation is suitable for systems that do not need to immediately use the data key for data encryption. When encryption is required, the system calls the [Decrypt](https://help.aliyun.com/document_detail/28950.html) API to decrypt the ciphertext of the data key.
   * >
   * > - This operation is also suitable for distributed systems with different trust levels. For example, your system stores data in different partitions based on a defined policy. A module pre-creates these data partitions and generates a unique data key for each one. After this module initializes the control plane, it acts as a key distributor and does not produce or consume data. When data plane modules produce and consume data, they first retrieve the ciphertext of the data key for a partition. They then decrypt the ciphertext and use the plaintext data key to encrypt or decrypt data. Finally, they purge the plaintext data key from memory. In such a system, the key distributor does not need to access the plaintext of the data key. It only requires the \\`GenerateDataKeyWithoutPlaintext\\` permission for the relevant CMK. Data producers and consumers do not need to generate new data keys. They only require the \\`Decrypt\\` permission for the relevant CMK.
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
   * Generates a random data key in only ciphertext form, without the plaintext copy.
   * 
   * @remarks
   * ### Precautions
   * - For information about the access policy that a RAM user or RAM role needs to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible through a shared gateway or a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: Access KMS over the Internet or through a VPC domain name. This method requires Internet access to be enabled. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: Access KMS through a KMS private endpoint (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * ### QPS limits
   * - Calls through a shared gateway: The queries per second (QPS) limit for a single user is 1,000. If you exceed this limit, requests are throttled, which may affect your business. We recommend that you stay within this limit.
   * - Calls through a dedicated gateway: The QPS limit for a single user depends on the computing performance of your KMS instance. For more information, see [Performance metrics](https://help.aliyun.com/document_detail/480120.html).
   * ### Details
   * This operation generates a random data key, encrypts it with a specified symmetric customer master key (CMK), and returns the ciphertext of the data key. This operation provides the same features as [GenerateDataKey](https://help.aliyun.com/document_detail/28948.html). The only difference is that this operation does not return the plaintext of the data key.
   * The CMK that you specify in the request is used only to encrypt the data key. It is not used to generate the data key. KMS does not record or store the randomly generated data key.
   * > - This operation is suitable for systems that do not need to immediately use the data key for data encryption. When encryption is required, the system calls the [Decrypt](https://help.aliyun.com/document_detail/28950.html) API to decrypt the ciphertext of the data key.
   * >
   * > - This operation is also suitable for distributed systems with different trust levels. For example, your system stores data in different partitions based on a defined policy. A module pre-creates these data partitions and generates a unique data key for each one. After this module initializes the control plane, it acts as a key distributor and does not produce or consume data. When data plane modules produce and consume data, they first retrieve the ciphertext of the data key for a partition. They then decrypt the ciphertext and use the plaintext data key to encrypt or decrypt data. Finally, they purge the plaintext data key from memory. In such a system, the key distributor does not need to access the plaintext of the data key. It only requires the \\`GenerateDataKeyWithoutPlaintext\\` permission for the relevant CMK. Data producers and consumers do not need to generate new data keys. They only require the \\`Decrypt\\` permission for the relevant CMK.
   * 
   * @param request - GenerateDataKeyWithoutPlaintextRequest
   * @returns GenerateDataKeyWithoutPlaintextResponse
   */
  async generateDataKeyWithoutPlaintext(request: $_model.GenerateDataKeyWithoutPlaintextRequest): Promise<$_model.GenerateDataKeyWithoutPlaintextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDataKeyWithoutPlaintextWithOptions(request, runtime);
  }

  /**
   * Generates an HMAC message authentication code for a message by using a specified key.
   * 
   * @remarks
   * For details about the access policy required when a RAM user or RAM role invokes this operation, refer to access control.
   * This operation can be invoked through a shared gateway or a dedicated gateway. For more information, refer to Alibaba Cloud SDK.
   * - Shared gateway: Access KMS through a public or VPC endpoint. This method requires you to enable the public network access switch. For more information, refer to accessing keys in a KMS instance over the Internet.
   * - Dedicated gateway: Access KMS through a KMS private endpoint (<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com).
   * 
   * @param request - GenerateMacRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateMacResponse
   */
  async generateMacWithOptions(request: $_model.GenerateMacRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateMacResponse> {
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

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateMac",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateMacResponse>(await this.callApi(params, req, runtime), new $_model.GenerateMacResponse({}));
  }

  /**
   * Generates an HMAC message authentication code for a message by using a specified key.
   * 
   * @remarks
   * For details about the access policy required when a RAM user or RAM role invokes this operation, refer to access control.
   * This operation can be invoked through a shared gateway or a dedicated gateway. For more information, refer to Alibaba Cloud SDK.
   * - Shared gateway: Access KMS through a public or VPC endpoint. This method requires you to enable the public network access switch. For more information, refer to accessing keys in a KMS instance over the Internet.
   * - Dedicated gateway: Access KMS through a KMS private endpoint (<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com).
   * 
   * @param request - GenerateMacRequest
   * @returns GenerateMacResponse
   */
  async generateMac(request: $_model.GenerateMacRequest): Promise<$_model.GenerateMacResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateMacWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a client key.
   * 
   * @remarks
   * For information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Retrieves information about a client key.
   * 
   * @remarks
   * For information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - GetClientKeyRequest
   * @returns GetClientKeyResponse
   */
  async getClientKey(request: $_model.GetClientKeyRequest): Promise<$_model.GetClientKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientKeyWithOptions(request, runtime);
  }

  /**
   * Queries the default KMS instance in a specified region.
   * 
   * @remarks
   * - For information about the access policy that is required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This API is for users who migrate from KMS 1.0 to KMS 3.0. After the migration is complete, if you create an Asset without specifying a KMS instance, the Asset is created in the default KMS instance.
   * 
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
   * Queries the default KMS instance in a specified region.
   * 
   * @remarks
   * - For information about the access policy that is required to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This API is for users who migrate from KMS 1.0 to KMS 3.0. After the migration is complete, if you create an Asset without specifying a KMS instance, the Asset is created in the default KMS instance.
   * @returns GetDefaultKmsInstanceResponse
   */
  async getDefaultKmsInstance(): Promise<$_model.GetDefaultKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDefaultKmsInstanceWithOptions(runtime);
  }

  /**
   * Queries the key policy of a CMK in a KMS instance.
   * 
   * @remarks
   * - For more information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Because the key policy name can only be set to default, you must set the PolicyName parameter to default when you query the key policy. Otherwise, a `Not Found` error is returned.
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
   * Queries the key policy of a CMK in a KMS instance.
   * 
   * @remarks
   * - For more information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Because the key policy name can only be set to default, you must set the PolicyName parameter to default when you query the key policy. Otherwise, a `Not Found` error is returned.
   * 
   * @param request - GetKeyPolicyRequest
   * @returns GetKeyPolicyResponse
   */
  async getKeyPolicy(request: $_model.GetKeyPolicyRequest): Promise<$_model.GetKeyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeyPolicyWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of a KMS instance.
   * 
   * @remarks
   * Refer to [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html) for the access policy required to call this OpenAPI as a RAM user or RAM role.
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
   * Retrieves the details of a KMS instance.
   * 
   * @remarks
   * Refer to [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html) for the access policy required to call this OpenAPI as a RAM user or RAM role.
   * 
   * @param request - GetKmsInstanceRequest
   * @returns GetKmsInstanceResponse
   */
  async getKmsInstance(request: $_model.GetKmsInstanceRequest): Promise<$_model.GetKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKmsInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the quota usage and limits for a KMS instance.
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
   * Queries the quota usage and limits for a KMS instance.
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
   * Retrieves the public key of an asymmetric key. You can use the public key to encrypt data or verify a signature on your device.
   * 
   * @remarks
   * - For more information about the access policy required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports both shared gateways and dedicated gateways. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. If you access KMS over the Internet, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * 
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
   * Retrieves the public key of an asymmetric key. You can use the public key to encrypt data or verify a signature on your device.
   * 
   * @remarks
   * - For more information about the access policy required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports both shared gateways and dedicated gateways. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   - Shared gateway: You can access KMS over the Internet or using a VPC domain name. If you access KMS over the Internet, you must enable Internet access. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   *   - Dedicated gateway: You can access KMS using the private endpoint of KMS (`<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`).
   * 
   * @param request - GetPublicKeyRequest
   * @returns GetPublicKeyResponse
   */
  async getPublicKey(request: $_model.GetPublicKeyRequest): Promise<$_model.GetPublicKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPublicKeyWithOptions(request, runtime);
  }

  /**
   * Generates a random password string.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
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
   * Generates a random password string.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - GetRandomPasswordRequest
   * @returns GetRandomPasswordResponse
   */
  async getRandomPassword(request: $_model.GetRandomPasswordRequest): Promise<$_model.GetRandomPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRandomPasswordWithOptions(request, runtime);
  }

  /**
   * Queries the access policy of a specified secret in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - A credential policy name can be set only to default. Therefore, you must set the PolicyName parameter to default when you query the credential policy. Otherwise, a `Not Found` error is returned.
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
   * Queries the access policy of a specified secret in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - A credential policy name can be set only to default. Therefore, you must set the PolicyName parameter to default when you query the credential policy. Otherwise, a `Not Found` error is returned.
   * 
   * @param request - GetSecretPolicyRequest
   * @returns GetSecretPolicyResponse
   */
  async getSecretPolicy(request: $_model.GetSecretPolicyRequest): Promise<$_model.GetSecretPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretPolicyWithOptions(request, runtime);
  }

  /**
   * Retrieve the credential value.
   * 
   * @remarks
   * - For details about the access policy that must be granted to a Resource Access Management (RAM) user or RAM role to invoke this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - If you do not specify a version number or version status, Key Management Service (KMS) returns the credential value of the version marked as ACSCurrent by default.
   * - If a customer-managed key is used to protect the credential value, the caller must also have the `kms:Decrypt` permission on the corresponding master key.
   * This topic provides a sample request to retrieve the credential value of a credential named `secret001`. The returned result shows that the credential value `SecretData` is `testdata1`.
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
   * Retrieve the credential value.
   * 
   * @remarks
   * - For details about the access policy that must be granted to a Resource Access Management (RAM) user or RAM role to invoke this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - If you do not specify a version number or version status, Key Management Service (KMS) returns the credential value of the version marked as ACSCurrent by default.
   * - If a customer-managed key is used to protect the credential value, the caller must also have the `kms:Decrypt` permission on the corresponding master key.
   * This topic provides a sample request to retrieve the credential value of a credential named `secret001`. The returned result shows that the credential value `SecretData` is `testdata1`.
   * 
   * @param request - GetSecretValueRequest
   * @returns GetSecretValueResponse
   */
  async getSecretValue(request: $_model.GetSecretValueRequest): Promise<$_model.GetSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretValueWithOptions(request, runtime);
  }

  /**
   * Imports externally generated key material into a CMK whose origin is EXTERNAL.
   * 
   * @remarks
   * When you call [CreateKey](https://help.aliyun.com/document_detail/28947.html) to create a CMK, you can set **Origin** to **EXTERNAL** to specify that the key material comes from an external source. Use this operation to import the key material into such a CMK.
   * - To view the CMK **Origin**, see [DescribeKey](https://help.aliyun.com/document_detail/28952.html).
   * - Before importing key material, call [GetParametersForImport](https://help.aliyun.com/document_detail/68621.html) to obtain the parameters required for the import, including the public key and import token.
   * > * For a CMK of type **Aliyun_AES_256**, the key material must be 256 bits. For a CMK of type **Aliyun_SM4**, the key material must be 128 bits.
   * >
   * > * You can set the expiration time for the key material, or you can set it to never expire.
   * >
   * > * You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
   * >
   * > * After the imported key material expires or is deleted, the specified CMK becomes unavailable until the same key material is imported again.
   * >
   * > * The same key material can be imported into multiple CMKs, but data or data keys encrypted by one CMK cannot be decrypted by another CMK.
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Imports externally generated key material into a CMK whose origin is EXTERNAL.
   * 
   * @remarks
   * When you call [CreateKey](https://help.aliyun.com/document_detail/28947.html) to create a CMK, you can set **Origin** to **EXTERNAL** to specify that the key material comes from an external source. Use this operation to import the key material into such a CMK.
   * - To view the CMK **Origin**, see [DescribeKey](https://help.aliyun.com/document_detail/28952.html).
   * - Before importing key material, call [GetParametersForImport](https://help.aliyun.com/document_detail/68621.html) to obtain the parameters required for the import, including the public key and import token.
   * > * For a CMK of type **Aliyun_AES_256**, the key material must be 256 bits. For a CMK of type **Aliyun_SM4**, the key material must be 128 bits.
   * >
   * > * You can set the expiration time for the key material, or you can set it to never expire.
   * >
   * > * You can reimport the key material and reset the expiration time for the specified CMK at any time, but the same key material must be imported.
   * >
   * > * After the imported key material expires or is deleted, the specified CMK becomes unavailable until the same key material is imported again.
   * >
   * > * The same key material can be imported into multiple CMKs, but data or data keys encrypted by one CMK cannot be decrypted by another CMK.
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(request: $_model.ListAliasesRequest): Promise<$_model.ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAliasesWithOptions(request, runtime);
  }

  /**
   * Queries all aliases that are bound to a key.
   * 
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
   * Queries all aliases that are bound to a key.
   * 
   * @param request - ListAliasesByKeyIdRequest
   * @returns ListAliasesByKeyIdResponse
   */
  async listAliasesByKeyId(request: $_model.ListAliasesByKeyIdRequest): Promise<$_model.ListAliasesByKeyIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAliasesByKeyIdWithOptions(request, runtime);
  }

  /**
   * Queries all application access points (AAPs) in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries all application access points (AAPs) in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListApplicationAccessPointsRequest
   * @returns ListApplicationAccessPointsResponse
   */
  async listApplicationAccessPoints(request: $_model.ListApplicationAccessPointsRequest): Promise<$_model.ListApplicationAccessPointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationAccessPointsWithOptions(request, runtime);
  }

  /**
   * Queries all client keys within an AAP.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
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
   * Queries all client keys within an AAP.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
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
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListKeyVersionsRequest
   * @returns ListKeyVersionsResponse
   */
  async listKeyVersions(request: $_model.ListKeyVersionsRequest): Promise<$_model.ListKeyVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeyVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the IDs and ARNs of all CMKs in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries the IDs and ARNs of all CMKs in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListKeysRequest
   * @returns ListKeysResponse
   */
  async listKeys(request: $_model.ListKeysRequest): Promise<$_model.ListKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeysWithOptions(request, runtime);
  }

  /**
   * Queries all KMS instances in the current region.
   * 
   * @remarks
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries all KMS instances in the current region.
   * 
   * @remarks
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListKmsInstancesRequest
   * @returns ListKmsInstancesResponse
   */
  async listKmsInstances(request: $_model.ListKmsInstancesRequest): Promise<$_model.ListKmsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKmsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries all network access rules in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries all network access rules in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListNetworkRulesRequest
   * @returns ListNetworkRulesResponse
   */
  async listNetworkRules(request: $_model.ListNetworkRulesRequest): Promise<$_model.ListNetworkRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkRulesWithOptions(request, runtime);
  }

  /**
   * Queries all permission policies in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Queries all permission policies in the current region.
   * 
   * @remarks
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListPoliciesRequest
   * @returns ListPoliciesResponse
   */
  async listPolicies(request: $_model.ListPoliciesRequest): Promise<$_model.ListPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a customer master key (CMK).
   * 
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
   * Queries the tags of a customer master key (CMK).
   * 
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
   * Queries all version IDs and stage labels of a specified secret.
   * 
   * @remarks
   * - For more information about the access policy required for a RAM user or RAM role to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - The version information does not include the secret value. By default, this operation returns only the secret versions that are marked with a version stage.
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
   * Queries all version IDs and stage labels of a specified secret.
   * 
   * @remarks
   * - For more information about the access policy required for a RAM user or RAM role to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - The version information does not include the secret value. By default, this operation returns only the secret versions that are marked with a version stage.
   * 
   * @param request - ListSecretVersionIdsRequest
   * @returns ListSecretVersionIdsResponse
   */
  async listSecretVersionIds(request: $_model.ListSecretVersionIdsRequest): Promise<$_model.ListSecretVersionIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretVersionIdsWithOptions(request, runtime);
  }

  /**
   * Queries all secrets in the current region.
   * 
   * @remarks
   * - To call this operation, the RAM user or RAM role must be granted the required policy. For more information, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation returns only secret metadata, not the secret values.
   * This example shows how to query secrets created by the current user in the current region. `PageNumber` is set to `1` and `PageSize` is set to `2`, returning metadata for two secrets.
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
   * Queries all secrets in the current region.
   * 
   * @remarks
   * - To call this operation, the RAM user or RAM role must be granted the required policy. For more information, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation returns only secret metadata, not the secret values.
   * This example shows how to query secrets created by the current user in the current region. `PageNumber` is set to `1` and `PageSize` is set to `2`, returning metadata for two secrets.
   * 
   * @param request - ListSecretsRequest
   * @returns ListSecretsResponse
   */
  async listSecrets(request: $_model.ListSecretsRequest): Promise<$_model.ListSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretsWithOptions(request, runtime);
  }

  /**
   * Lists the tags that are bound to a key or a secret.
   * 
   * @remarks
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Lists the tags that are bound to a key or a secret.
   * 
   * @remarks
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Activates Key Management Service (KMS) for your Alibaba Cloud account.
   * 
   * @remarks
   * - For more information about the access policies that a RAM user or RAM role needs to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - KMS is a paid service. For more information about billing, see [Billing](https://help.aliyun.com/document_detail/52608.html).
   * - You can activate the service for an Alibaba Cloud account only once.
   * - Make sure that your Alibaba Cloud account has completed real-name verification.
   * 
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
   * Activates Key Management Service (KMS) for your Alibaba Cloud account.
   * 
   * @remarks
   * - For more information about the access policies that a RAM user or RAM role needs to call this OpenAPI, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - KMS is a paid service. For more information about billing, see [Billing](https://help.aliyun.com/document_detail/52608.html).
   * - You can activate the service for an Alibaba Cloud account only once.
   * - Make sure that your Alibaba Cloud account has completed real-name verification.
   * @returns OpenKmsServiceResponse
   */
  async openKmsService(): Promise<$_model.OpenKmsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openKmsServiceWithOptions(runtime);
  }

  /**
   * Stores a new version of a secret value for a generic secret.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports only generic secrets. Each generic secret can have a maximum of 10 versions. If the number of versions exceeds the limit, KMS deletes the earliest version.
   * - By default, the new secret value is marked with ACSCurrent, and the previous version that was marked with ACSCurrent is marked with ACSPrevious. You can specify the VersionStage parameter to overwrite this default behavior.
   * - This operation stores a new version of a secret value. You cannot use it to modify an existing version of a secret value. You must specify a version number when you store a new version. KMS processes requests based on the following rules:
   *   - If the version number does not exist in the secret, KMS creates a new version and stores the secret value.
   *   - If the version number already exists in the secret, KMS compares the secret value in the request with the stored value. If the values are the same, the request is ignored and a success message is returned. This makes the operation idempotent. If the values are different, the request is rejected.
   * This topic provides an example of how to store a new version of a secret value for the secret named `secret001`. The new version number (`VersionId`) is `v3` and the secret value (`SecretData`) is `importantdata`.
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
   * Stores a new version of a secret value for a generic secret.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports only generic secrets. Each generic secret can have a maximum of 10 versions. If the number of versions exceeds the limit, KMS deletes the earliest version.
   * - By default, the new secret value is marked with ACSCurrent, and the previous version that was marked with ACSCurrent is marked with ACSPrevious. You can specify the VersionStage parameter to overwrite this default behavior.
   * - This operation stores a new version of a secret value. You cannot use it to modify an existing version of a secret value. You must specify a version number when you store a new version. KMS processes requests based on the following rules:
   *   - If the version number does not exist in the secret, KMS creates a new version and stores the secret value.
   *   - If the version number already exists in the secret, KMS compares the secret value in the request with the stored value. If the values are the same, the request is ignored and a success message is returned. This makes the operation idempotent. If the values are different, the request is rejected.
   * This topic provides an example of how to store a new version of a secret value for the secret named `secret001`. The new version number (`VersionId`) is `v3` and the secret value (`SecretData`) is `importantdata`.
   * 
   * @param request - PutSecretValueRequest
   * @returns PutSecretValueResponse
   */
  async putSecretValue(request: $_model.PutSecretValueRequest): Promise<$_model.PutSecretValueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putSecretValueWithOptions(request, runtime);
  }

  /**
   * Re-encrypts ciphertext under a different CMK without exposing the plaintext.
   * 
   * @remarks
   * ### Notes
   * - For more information about the access policy required to grant a RAM user or RAM role the permission to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible only through a shared gateway, not a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   When using a shared gateway, you access KMS through an Internet or a VPC domain name. This method requires Internet access to be enabled. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   * ### QPS limits
   * This operation is accessible only through a shared gateway. The single-user queries per second (QPS) limit is 750. If this limit is exceeded, requests are throttled, which may affect your business. We recommend that you stay within the specified limit.
   * ### Details
   * You can use the ReEncrypt operation in the following scenarios:
   * - After a customer master key (CMK) is rotated, you can use the latest key version to re-encrypt data. For more information about automatic key rotation, see [Automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * - You can re-encrypt data by changing the encryption context without changing the master key.
   * - You can re-encrypt data or a data key that is encrypted by one master key with another master key in KMS.
   * The ReEncrypt operation requires the following permissions:
   * - The kms:ReEncryptFrom permission for the source master key.
   * - The kms:ReEncryptTo permission for the destination master key.
   * - You can use kms:ReEncrypt\\* to grant both permissions.
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
   * Re-encrypts ciphertext under a different CMK without exposing the plaintext.
   * 
   * @remarks
   * ### Notes
   * - For more information about the access policy required to grant a RAM user or RAM role the permission to use this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation is accessible only through a shared gateway, not a dedicated gateway. For more information, see [Alibaba Cloud SDK](https://help.aliyun.com/document_detail/601559.html).
   *   When using a shared gateway, you access KMS through an Internet or a VPC domain name. This method requires Internet access to be enabled. For more information, see [Access keys in a KMS instance over the Internet](https://help.aliyun.com/document_detail/2856718.html).
   * ### QPS limits
   * This operation is accessible only through a shared gateway. The single-user queries per second (QPS) limit is 750. If this limit is exceeded, requests are throttled, which may affect your business. We recommend that you stay within the specified limit.
   * ### Details
   * You can use the ReEncrypt operation in the following scenarios:
   * - After a customer master key (CMK) is rotated, you can use the latest key version to re-encrypt data. For more information about automatic key rotation, see [Automatic key rotation](https://help.aliyun.com/document_detail/134270.html).
   * - You can re-encrypt data by changing the encryption context without changing the master key.
   * - You can re-encrypt data or a data key that is encrypted by one master key with another master key in KMS.
   * The ReEncrypt operation requires the following permissions:
   * - The kms:ReEncryptFrom permission for the source master key.
   * - The kms:ReEncryptTo permission for the destination master key.
   * - You can use kms:ReEncrypt\\* to grant both permissions.
   * 
   * @param request - ReEncryptRequest
   * @returns ReEncryptResponse
   */
  async reEncrypt(request: $_model.ReEncryptRequest): Promise<$_model.ReEncryptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reEncryptWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go KMS instance.
   * 
   * @remarks
   * - For information about the access policy that is required to allow a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Subscription instances cannot be manually released. You can only unsubscribe from them under specific conditions. To unsubscribe, go to the Expenses and Costs page in the console and choose Unsubscribe. For more information, see [Unsubscription policy](https://help.aliyun.com/document_detail/600418.html).
   * - After you release an instance, all resources in the instance are also released. Resources that are encrypted using keys in the instance cannot be decrypted, and credentials cannot be retrieved. Before you release an instance, make sure that no data is encrypted by the keys in the instance and no services call the credentials. This prevents service interruptions.
   * - If your instance is a software key management instance, we recommend that you back up the resources of the instance before you release it. The backed-up resources can be recovered. For more information, see [Backup management](https://help.aliyun.com/document_detail/2357488.html).
   * - The billing epoch is daily. Therefore, after you release a pay-as-you-go instance, the bill for the previous day is pushed before 12:00 on the next day.
   * - Before you release a KMS instance, we recommend that you check whether deletion protection is enabled for the instance in the console. If deletion protection is enabled, disable it in the console before you release the instance. For more information, see [Manage a KMS instance](https://help.aliyun.com/document_detail/604735.html).
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
   * Releases a pay-as-you-go KMS instance.
   * 
   * @remarks
   * - For information about the access policy that is required to allow a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - Subscription instances cannot be manually released. You can only unsubscribe from them under specific conditions. To unsubscribe, go to the Expenses and Costs page in the console and choose Unsubscribe. For more information, see [Unsubscription policy](https://help.aliyun.com/document_detail/600418.html).
   * - After you release an instance, all resources in the instance are also released. Resources that are encrypted using keys in the instance cannot be decrypted, and credentials cannot be retrieved. Before you release an instance, make sure that no data is encrypted by the keys in the instance and no services call the credentials. This prevents service interruptions.
   * - If your instance is a software key management instance, we recommend that you back up the resources of the instance before you release it. The backed-up resources can be recovered. For more information, see [Backup management](https://help.aliyun.com/document_detail/2357488.html).
   * - The billing epoch is daily. Therefore, after you release a pay-as-you-go instance, the bill for the previous day is pushed before 12:00 on the next day.
   * - Before you release a KMS instance, we recommend that you check whether deletion protection is enabled for the instance in the console. If deletion protection is enabled, disable it in the console before you release the instance. For more information, see [Manage a KMS instance](https://help.aliyun.com/document_detail/604735.html).
   * 
   * @param request - ReleaseKmsInstanceRequest
   * @returns ReleaseKmsInstanceResponse
   */
  async releaseKmsInstance(request: $_model.ReleaseKmsInstanceRequest): Promise<$_model.ReleaseKmsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseKmsInstanceWithOptions(request, runtime);
  }

  /**
   * Restores a deleted secret.
   * 
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
   * Restores a deleted secret.
   * 
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
   * Immediately rotates a secret.
   * 
   * @remarks
   * Limits:
   * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
   * • The RotateSecret operation is unavailable for standard secrets.
   * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Immediately rotates a secret.
   * 
   * @remarks
   * Limits:
   * • A secret of each Alibaba Cloud account can be rotated for a maximum of 50 times per hour.
   * • The RotateSecret operation is unavailable for standard secrets.
   * In this example, the `RdsSecret/Mysql5.4/MyCred` secret is manually rotated, and the version number of the secret is set to `000000123` after the secret is rotated.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - RotateSecretRequest
   * @returns RotateSecretResponse
   */
  async rotateSecret(request: $_model.RotateSecretRequest): Promise<$_model.RotateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rotateSecretWithOptions(request, runtime);
  }

  /**
   * Deletes a specified customer master key (CMK).
   * 
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
   * Deletes a specified customer master key (CMK).
   * 
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
   * - For more information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - After you enable deletion protection for a CMK, you cannot delete it. To delete the CMK, you must first disable deletion protection.
   * - Before you call the SetDeletionProtection operation, ensure that the CMK is not in the PendingDeletion state. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK.
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

    if (!$dara.isNull(request.kmsInstanceId)) {
      query["KmsInstanceId"] = request.kmsInstanceId;
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
   * - For more information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - After you enable deletion protection for a CMK, you cannot delete it. To delete the CMK, you must first disable deletion protection.
   * - Before you call the SetDeletionProtection operation, ensure that the CMK is not in the PendingDeletion state. You can call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation to query the status of the CMK.
   * 
   * @param request - SetDeletionProtectionRequest
   * @returns SetDeletionProtectionResponse
   */
  async setDeletionProtection(request: $_model.SetDeletionProtectionRequest): Promise<$_model.SetDeletionProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDeletionProtectionWithOptions(request, runtime);
  }

  /**
   * Sets the key policy for a CMK in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - For more information about key policies, see [Key policy overview](https://help.aliyun.com/document_detail/2716468.html).
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
   * Sets the key policy for a CMK in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a RAM user or RAM role to call this API operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - For more information about key policies, see [Key policy overview](https://help.aliyun.com/document_detail/2716468.html).
   * 
   * @param request - SetKeyPolicyRequest
   * @returns SetKeyPolicyResponse
   */
  async setKeyPolicy(request: $_model.SetKeyPolicyRequest): Promise<$_model.SetKeyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setKeyPolicyWithOptions(request, runtime);
  }

  /**
   * Sets the access policy for a secret in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy that a RAM user or RAM role requires to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - For more information about secret policies, see [Secret policy overview](https://help.aliyun.com/document_detail/2716465.html).
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
   * Sets the access policy for a secret in a KMS instance.
   * 
   * @remarks
   * - For information about the access policy that a RAM user or RAM role requires to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - For more information about secret policies, see [Secret policy overview](https://help.aliyun.com/document_detail/2716465.html).
   * 
   * @param request - SetSecretPolicyRequest
   * @returns SetSecretPolicyResponse
   */
  async setSecretPolicy(request: $_model.SetSecretPolicyRequest): Promise<$_model.SetSecretPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSecretPolicyWithOptions(request, runtime);
  }

  /**
   * Adds tags to a CMK, secret, or certificate.
   * 
   * @remarks
   * You can add up to 10 tags to a CMK, secret, or certificate.
   * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Adds tags to a CMK, secret, or certificate.
   * 
   * @remarks
   * You can add up to 10 tags to a CMK, secret, or certificate.
   * In this example, the tags `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]` are added to the CMK whose ID is `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - TagResourceRequest
   * @returns TagResourceResponse
   */
  async tagResource(request: $_model.TagResourceRequest): Promise<$_model.TagResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourceWithOptions(request, runtime);
  }

  /**
   * Adds tags to one or more keys or secrets.
   * 
   * @remarks
   * You can add multiple tags to multiple keys or multiple secrets at a time.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Adds tags to one or more keys or secrets.
   * 
   * @remarks
   * You can add multiple tags to multiple keys or multiple secrets at a time.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from a CMK, secret, or certificate.
   * 
   * @remarks
   * For information about the access policy that is required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * This topic provides an example of how to detach tags with the tag keys tagkey1 and tagkey2 from the key with the ID `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
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
   * Removes tags from a CMK, secret, or certificate.
   * 
   * @remarks
   * For information about the access policy that is required for a RAM user or RAM role to call this OpenAPI operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * This topic provides an example of how to detach tags with the tag keys tagkey1 and tagkey2 from the key with the ID `08c33a6f-4e0a-4a1b-a3fa-7ddf****`.
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
   * Binds an existing alias to a different customer master key (CMK) ID.
   * 
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
   * Binds an existing alias to a different customer master key (CMK) ID.
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(request: $_model.UpdateAliasRequest): Promise<$_model.UpdateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAliasWithOptions(request, runtime);
  }

  /**
   * Updates the information about an application access point (AAP).
   * 
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
   * Updates the information about an application access point (AAP).
   * 
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
   * Updates the description of a CMK.
   * 
   * @remarks
   * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation. Use this operation to add, modify, or delete the description of a CMK.
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Updates the description of a CMK.
   * 
   * @remarks
   * This operation replaces the description of a customer master key (CMK) with the description that you specify. The original description of the CMK is specified by the Description parameter when you call the [DescribeKey](https://help.aliyun.com/document_detail/28952.html) operation. Use this operation to add, modify, or delete the description of a CMK.
   * For more information about the access policy required for a RAM user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * 
   * @param request - UpdateKeyDescriptionRequest
   * @returns UpdateKeyDescriptionResponse
   */
  async updateKeyDescription(request: $_model.UpdateKeyDescriptionRequest): Promise<$_model.UpdateKeyDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKeyDescriptionWithOptions(request, runtime);
  }

  /**
   * Updates the VPC bindings of a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - If your self-managed application is deployed in multiple VPCs in the same region, you can bind the KMS instance to additional VPCs. These VPCs are in addition to the one that you specified when you enabled the instance.
   *   These VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, self-managed applications in these VPCs can access the specified KMS instance.
   *   > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitch resources from those accounts with the Alibaba Cloud account that owns the KMS instance. For more information, see [Access a KMS instance from multiple VPCs in the same region](https://help.aliyun.com/document_detail/2393236.html).
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
   * Updates the VPC bindings of a KMS instance.
   * 
   * @remarks
   * - For information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - If your self-managed application is deployed in multiple VPCs in the same region, you can bind the KMS instance to additional VPCs. These VPCs are in addition to the one that you specified when you enabled the instance.
   *   These VPCs can belong to the same Alibaba Cloud account or different Alibaba Cloud accounts. After the configuration is complete, self-managed applications in these VPCs can access the specified KMS instance.
   *   > If the VPCs belong to different Alibaba Cloud accounts, you must first configure resource sharing to share the vSwitch resources from those accounts with the Alibaba Cloud account that owns the KMS instance. For more information, see [Access a KMS instance from multiple VPCs in the same region](https://help.aliyun.com/document_detail/2393236.html).
   * 
   * @param request - UpdateKmsInstanceBindVpcRequest
   * @returns UpdateKmsInstanceBindVpcResponse
   */
  async updateKmsInstanceBindVpc(request: $_model.UpdateKmsInstanceBindVpcRequest): Promise<$_model.UpdateKmsInstanceBindVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKmsInstanceBindVpcWithOptions(request, runtime);
  }

  /**
   * Updates a network access rule.
   * 
   * @remarks
   * - For more information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Access control](https://help.aliyun.com/document_detail/2767210.html).
   * - You can only modify the private IP addresses and description of a network control rule. The name and network type cannot be modified.
   * - When you update a network control rule, the access policies attached to it are also updated. Proceed with caution.
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
   * Updates a network access rule.
   * 
   * @remarks
   * - For more information about the access policy required for a Resource Access Management (RAM) user or RAM role to call this operation, see [Access control](https://help.aliyun.com/document_detail/2767210.html).
   * - You can only modify the private IP addresses and description of a network control rule. The name and network type cannot be modified.
   * - When you update a network control rule, the access policies attached to it are also updated. Proceed with caution.
   * 
   * @param request - UpdateNetworkRuleRequest
   * @returns UpdateNetworkRuleResponse
   */
  async updateNetworkRule(request: $_model.UpdateNetworkRuleRequest): Promise<$_model.UpdateNetworkRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkRuleWithOptions(request, runtime);
  }

  /**
   * Updates a permission policy.
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
   * Updates a permission policy.
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
   * Updates the automatic rotation policy of a CMK.
   * 
   * @remarks
   * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
   * An automatic key rotation policy cannot be configured for the following keys:
   * - Asymmetric key
   * - Service-managed key
   * - Bring your own key (BYOK) that is imported into KMS
   * - Key that is not in the **Enabled** state
   * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Updates the automatic rotation policy of a CMK.
   * 
   * @remarks
   * When automatic key rotation is enabled, KMS automatically creates a key version after the preset rotation period arrives. In addition, KMS sets the new key version as the primary key version.
   * An automatic key rotation policy cannot be configured for the following keys:
   * - Asymmetric key
   * - Service-managed key
   * - Bring your own key (BYOK) that is imported into KMS
   * - Key that is not in the **Enabled** state
   * In this example, automatic key rotation is enabled for a CMK whose ID is `1234abcd-12ab-34cd-56ef-12345678****`. The automatic rotation period is 30 days.
   * For more information about the access policy required by a RAM user or RAM role to call this API, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
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
   * Updates the rotation policy of a secret.
   * 
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
   * Updates the rotation policy of a secret.
   * 
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
   * Moves a version stage label to a different version of a secret.
   * 
   * @remarks
   * - For more information about the access policy that is required to call this operation as a Resource Access Management (RAM) user or RAM role, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports only generic secrets. You can perform the following operations:
   *   - Add a version stage to a specified secret version.
   *   - Remove a version stage from a specified secret version.
   *   - Remove a version stage from a specified secret version and attach it to another secret version.
   * - The total number of version stages for each generic secret cannot exceed 8.
   * This topic provides an example of how to update the version stage of the secret named `secret001`. In this example, the `ACSCurrent` stage is used to mark version `002`.
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
   * Moves a version stage label to a different version of a secret.
   * 
   * @remarks
   * - For more information about the access policy that is required to call this operation as a Resource Access Management (RAM) user or RAM role, see [Resource Access Management](https://help.aliyun.com/document_detail/2767210.html).
   * - This operation supports only generic secrets. You can perform the following operations:
   *   - Add a version stage to a specified secret version.
   *   - Remove a version stage from a specified secret version.
   *   - Remove a version stage from a specified secret version and attach it to another secret version.
   * - The total number of version stages for each generic secret cannot exceed 8.
   * This topic provides an example of how to update the version stage of the secret named `secret001`. In this example, the `ACSCurrent` stage is used to mark version `002`.
   * 
   * @param request - UpdateSecretVersionStageRequest
   * @returns UpdateSecretVersionStageResponse
   */
  async updateSecretVersionStage(request: $_model.UpdateSecretVersionStageRequest): Promise<$_model.UpdateSecretVersionStageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecretVersionStageWithOptions(request, runtime);
  }

  /**
   * Verifies the HMAC message authentication code of a specific message by using a specified key.
   * 
   * @remarks
   * For details about the access policy required when a RAM user or RAM role invokes this operation, refer to access control.
   * This operation can be invoked through a shared gateway or a dedicated gateway. For more information, refer to Alibaba Cloud SDK.
   * - Shared gateway: Access KMS through a public or VPC endpoint. This method requires you to enable the public network access switch. For more information, refer to accessing keys in a KMS instance over the Internet.
   * - Dedicated gateway: Access KMS through a KMS private endpoint (<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com).
   * 
   * @param request - VerifyMacRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyMacResponse
   */
  async verifyMacWithOptions(request: $_model.VerifyMacRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifyMacResponse> {
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

    if (!$dara.isNull(request.mac)) {
      query["Mac"] = request.mac;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifyMac",
      version: "2016-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifyMacResponse>(await this.callApi(params, req, runtime), new $_model.VerifyMacResponse({}));
  }

  /**
   * Verifies the HMAC message authentication code of a specific message by using a specified key.
   * 
   * @remarks
   * For details about the access policy required when a RAM user or RAM role invokes this operation, refer to access control.
   * This operation can be invoked through a shared gateway or a dedicated gateway. For more information, refer to Alibaba Cloud SDK.
   * - Shared gateway: Access KMS through a public or VPC endpoint. This method requires you to enable the public network access switch. For more information, refer to accessing keys in a KMS instance over the Internet.
   * - Dedicated gateway: Access KMS through a KMS private endpoint (<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com).
   * 
   * @param request - VerifyMacRequest
   * @returns VerifyMacResponse
   */
  async verifyMac(request: $_model.VerifyMacRequest): Promise<$_model.VerifyMacResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMacWithOptions(request, runtime);
  }

}
