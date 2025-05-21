// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import * as $OSSUtil from '@alicloud/oss-util';
import * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("esa", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Activates the client based on the certificate ID.
   * 
   * @param request - ActivateClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateClientCertificateResponse
   */
  async activateClientCertificateWithOptions(request: $_model.ActivateClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ActivateClientCertificateResponse({}));
  }

  /**
   * Activates the client based on the certificate ID.
   * 
   * @param request - ActivateClientCertificateRequest
   * @returns ActivateClientCertificateResponse
   */
  async activateClientCertificate(request: $_model.ActivateClientCertificateRequest): Promise<$_model.ActivateClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateClientCertificateWithOptions(request, runtime);
  }

  /**
   * Enable Version Management
   * 
   * @param request - ActivateVersionManagementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateVersionManagementResponse
   */
  async activateVersionManagementWithOptions(request: $_model.ActivateVersionManagementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateVersionManagementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateVersionManagement",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateVersionManagementResponse>(await this.callApi(params, req, runtime), new $_model.ActivateVersionManagementResponse({}));
  }

  /**
   * Enable Version Management
   * 
   * @param request - ActivateVersionManagementRequest
   * @returns ActivateVersionManagementResponse
   */
  async activateVersionManagement(request: $_model.ActivateVersionManagementRequest): Promise<$_model.ActivateVersionManagementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateVersionManagementWithOptions(request, runtime);
  }

  /**
   * Applies for a free SSL certificate.
   * 
   * @param request - ApplyCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyCertificateResponse
   */
  async applyCertificateWithOptions(request: $_model.ApplyCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ApplyCertificateResponse({}));
  }

  /**
   * Applies for a free SSL certificate.
   * 
   * @param request - ApplyCertificateRequest
   * @returns ApplyCertificateResponse
   */
  async applyCertificate(request: $_model.ApplyCertificateRequest): Promise<$_model.ApplyCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyCertificateWithOptions(request, runtime);
  }

  /**
   * Adds DNS records of different record types at a time..
   * 
   * @remarks
   * This operation allows you to create or update multiple DNS records at a time. It is suitable for managing a large number of DNS configurations. Supported record types include but are not limited to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI. The operation allows you to configure the priority, flag, tag, and weight for DNS records. In addition, for specific types of records, such as CERT, SSHFP, SMIMEA, and TLSA, advanced settings such as certificate information and encryption algorithms are also supported.
   * Successful and failed records along with error messages are listed in the response.
   * 
   * @param tmpReq - BatchCreateRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateRecordsResponse
   */
  async batchCreateRecordsWithOptions(tmpReq: $_model.BatchCreateRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateRecordsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.recordList)) {
      request.recordListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.recordList, "RecordList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.recordListShrink)) {
      query["RecordList"] = request.recordListShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateRecordsResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateRecordsResponse({}));
  }

  /**
   * Adds DNS records of different record types at a time..
   * 
   * @remarks
   * This operation allows you to create or update multiple DNS records at a time. It is suitable for managing a large number of DNS configurations. Supported record types include but are not limited to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI. The operation allows you to configure the priority, flag, tag, and weight for DNS records. In addition, for specific types of records, such as CERT, SSHFP, SMIMEA, and TLSA, advanced settings such as certificate information and encryption algorithms are also supported.
   * Successful and failed records along with error messages are listed in the response.
   * 
   * @param request - BatchCreateRecordsRequest
   * @returns BatchCreateRecordsResponse
   */
  async batchCreateRecords(request: $_model.BatchCreateRecordsRequest): Promise<$_model.BatchCreateRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateRecordsWithOptions(request, runtime);
  }

  /**
   * Batch Create WAF Rules
   * 
   * @param tmpReq - BatchCreateWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateWafRulesResponse
   */
  async batchCreateWafRulesWithOptions(tmpReq: $_model.BatchCreateWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateWafRulesResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    if (!$dara.isNull(tmpReq.shared)) {
      request.sharedShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shared, "Shared", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!$dara.isNull(request.phase)) {
      body["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.rulesetId)) {
      body["RulesetId"] = request.rulesetId;
    }

    if (!$dara.isNull(request.sharedShrink)) {
      body["Shared"] = request.sharedShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateWafRulesResponse({}));
  }

  /**
   * Batch Create WAF Rules
   * 
   * @param request - BatchCreateWafRulesRequest
   * @returns BatchCreateWafRulesResponse
   */
  async batchCreateWafRules(request: $_model.BatchCreateWafRulesRequest): Promise<$_model.BatchCreateWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateWafRulesWithOptions(request, runtime);
  }

  /**
   * Deletes key-value pairs from a namespace at a time based on keys.
   * 
   * @param tmpReq - BatchDeleteKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteKvResponse
   */
  async batchDeleteKvWithOptions(tmpReq: $_model.BatchDeleteKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteKvResponse> {
    tmpReq.validate();
    let request = new $_model.BatchDeleteKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keysShrink)) {
      body["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteKvResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteKvResponse({}));
  }

  /**
   * Deletes key-value pairs from a namespace at a time based on keys.
   * 
   * @param request - BatchDeleteKvRequest
   * @returns BatchDeleteKvResponse
   */
  async batchDeleteKv(request: $_model.BatchDeleteKvRequest): Promise<$_model.BatchDeleteKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteKvWithOptions(request, runtime);
  }

  /**
   * Deletes multiple key-value pairs from a namespace at a time based on specified keys. The request body can be up to 100 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [BatchDeleteKv](https://help.aliyun.com/document_detail/2850204.html). For small request bodies, we recommend that you use [BatchDeleteKv](https://help.aliyun.com/document_detail/2850204.html) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and BatchDeleteKvWithHighCapacityAdvance to call the operation.
   *     func TestBatchDeleteWithHighCapacity() error {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for deleting key-value pairs at a time.
   *     	namespace := "test_batch_put"
   *     	rawReq := BatchDeleteKvRequest{
   *     		Namespace: &namespace,
   *     	}
   *     	for i := 0; i < 10000; i++ {
   *     		key := fmt.Sprintf("test_key_%d", i)
   *     		rawReq.Keys = append(rawReq.Keys, &key)
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the BatchDeleteKvWithHighCapacity operation for deletion.
   *     	reqHighCapacity := BatchDeleteKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		UrlObject: bytes.NewReader(payload),
   *     	}
   *     	resp, err := cli.BatchDeleteKvWithHighCapacityAdvance(&reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - BatchDeleteKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteKvWithHighCapacityResponse
   */
  async batchDeleteKvWithHighCapacityWithOptions(request: $_model.BatchDeleteKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteKvWithHighCapacityResponse({}));
  }

  /**
   * Deletes multiple key-value pairs from a namespace at a time based on specified keys. The request body can be up to 100 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [BatchDeleteKv](https://help.aliyun.com/document_detail/2850204.html). For small request bodies, we recommend that you use [BatchDeleteKv](https://help.aliyun.com/document_detail/2850204.html) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and BatchDeleteKvWithHighCapacityAdvance to call the operation.
   *     func TestBatchDeleteWithHighCapacity() error {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for deleting key-value pairs at a time.
   *     	namespace := "test_batch_put"
   *     	rawReq := BatchDeleteKvRequest{
   *     		Namespace: &namespace,
   *     	}
   *     	for i := 0; i < 10000; i++ {
   *     		key := fmt.Sprintf("test_key_%d", i)
   *     		rawReq.Keys = append(rawReq.Keys, &key)
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the BatchDeleteKvWithHighCapacity operation for deletion.
   *     	reqHighCapacity := BatchDeleteKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		UrlObject: bytes.NewReader(payload),
   *     	}
   *     	resp, err := cli.BatchDeleteKvWithHighCapacityAdvance(&reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - BatchDeleteKvWithHighCapacityRequest
   * @returns BatchDeleteKvWithHighCapacityResponse
   */
  async batchDeleteKvWithHighCapacity(request: $_model.BatchDeleteKvWithHighCapacityRequest): Promise<$_model.BatchDeleteKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchDeleteKvWithHighCapacityAdvance(request: $_model.BatchDeleteKvWithHighCapacityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let batchDeleteKvWithHighCapacityReq = new $_model.BatchDeleteKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchDeleteKvWithHighCapacityReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      batchDeleteKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let batchDeleteKvWithHighCapacityResp = await this.batchDeleteKvWithHighCapacityWithOptions(batchDeleteKvWithHighCapacityReq, runtime);
    return batchDeleteKvWithHighCapacityResp;
  }

  /**
   * Batch Get Expression Matches
   * 
   * @param tmpReq - BatchGetExpressionFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetExpressionFieldsResponse
   */
  async batchGetExpressionFieldsWithOptions(tmpReq: $_model.BatchGetExpressionFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetExpressionFieldsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetExpressionFieldsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.expressions)) {
      request.expressionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.expressions, "Expressions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expressionsShrink)) {
      body["Expressions"] = request.expressionsShrink;
    }

    if (!$dara.isNull(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetExpressionFields",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetExpressionFieldsResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetExpressionFieldsResponse({}));
  }

  /**
   * Batch Get Expression Matches
   * 
   * @param request - BatchGetExpressionFieldsRequest
   * @returns BatchGetExpressionFieldsResponse
   */
  async batchGetExpressionFields(request: $_model.BatchGetExpressionFieldsRequest): Promise<$_model.BatchGetExpressionFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetExpressionFieldsWithOptions(request, runtime);
  }

  /**
   * Configures key-value pairs for a namespace at a time based on specified keys.
   * 
   * @param tmpReq - BatchPutKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutKvResponse
   */
  async batchPutKvWithOptions(tmpReq: $_model.BatchPutKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutKvResponse> {
    tmpReq.validate();
    let request = new $_model.BatchPutKvShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.kvList)) {
      request.kvListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kvList, "KvList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.kvListShrink)) {
      body["KvList"] = request.kvListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchPutKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchPutKvResponse>(await this.callApi(params, req, runtime), new $_model.BatchPutKvResponse({}));
  }

  /**
   * Configures key-value pairs for a namespace at a time based on specified keys.
   * 
   * @param request - BatchPutKvRequest
   * @returns BatchPutKvResponse
   */
  async batchPutKv(request: $_model.BatchPutKvRequest): Promise<$_model.BatchPutKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchPutKvWithOptions(request, runtime);
  }

  /**
   * Configures key-value pairs for a namespace at a time based on specified keys. The request body can be up to 100 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [BatchPutKv](https://help.aliyun.com/document_detail/2850203.html). For small request bodies, we recommend that you use [BatchPutKv](https://help.aliyun.com/document_detail/2850203.html) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and BatchPutKvWithHighCapacityAdvance to call the operation.
   *     func TestBatchPutKvWithHighCapacity() error {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for uploading key-value pairs at a time.
   *     	namespace := "test_batch_put"
   *     	numKv := 10000
   *     	kvList := make([]*BatchPutKvRequestKvList, numKv)
   *     	test_value := strings.Repeat("a", 10*1024)
   *     	for i := 0; i < numKv; i++ {
   *     		key := fmt.Sprintf("test_key_%d", i)
   *     		value := test_value
   *     		kvList[i] = &BatchPutKvRequestKvList{
   *     			Key:   &key,
   *     			Value: &value,
   *     		}
   *     	}
   *     	rawReq := BatchPutKvRequest{
   *     		Namespace: &namespace,
   *     		KvList:    kvList,
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the BatchPutKvWithHighCapacity operation for upload.
   *     	reqHighCapacity := BatchPutKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		UrlObject: bytes.NewReader(payload),
   *     	}
   *     	resp, err := cli.BatchPutKvWithHighCapacityAdvance(&reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - BatchPutKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchPutKvWithHighCapacityResponse
   */
  async batchPutKvWithHighCapacityWithOptions(request: $_model.BatchPutKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchPutKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchPutKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.BatchPutKvWithHighCapacityResponse({}));
  }

  /**
   * Configures key-value pairs for a namespace at a time based on specified keys. The request body can be up to 100 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [BatchPutKv](https://help.aliyun.com/document_detail/2850203.html). For small request bodies, we recommend that you use [BatchPutKv](https://help.aliyun.com/document_detail/2850203.html) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and BatchPutKvWithHighCapacityAdvance to call the operation.
   *     func TestBatchPutKvWithHighCapacity() error {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for uploading key-value pairs at a time.
   *     	namespace := "test_batch_put"
   *     	numKv := 10000
   *     	kvList := make([]*BatchPutKvRequestKvList, numKv)
   *     	test_value := strings.Repeat("a", 10*1024)
   *     	for i := 0; i < numKv; i++ {
   *     		key := fmt.Sprintf("test_key_%d", i)
   *     		value := test_value
   *     		kvList[i] = &BatchPutKvRequestKvList{
   *     			Key:   &key,
   *     			Value: &value,
   *     		}
   *     	}
   *     	rawReq := BatchPutKvRequest{
   *     		Namespace: &namespace,
   *     		KvList:    kvList,
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the BatchPutKvWithHighCapacity operation for upload.
   *     	reqHighCapacity := BatchPutKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		UrlObject: bytes.NewReader(payload),
   *     	}
   *     	resp, err := cli.BatchPutKvWithHighCapacityAdvance(&reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - BatchPutKvWithHighCapacityRequest
   * @returns BatchPutKvWithHighCapacityResponse
   */
  async batchPutKvWithHighCapacity(request: $_model.BatchPutKvWithHighCapacityRequest): Promise<$_model.BatchPutKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchPutKvWithHighCapacityWithOptions(request, runtime);
  }

  async batchPutKvWithHighCapacityAdvance(request: $_model.BatchPutKvWithHighCapacityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchPutKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let batchPutKvWithHighCapacityReq = new $_model.BatchPutKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, batchPutKvWithHighCapacityReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      batchPutKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let batchPutKvWithHighCapacityResp = await this.batchPutKvWithHighCapacityWithOptions(batchPutKvWithHighCapacityReq, runtime);
    return batchPutKvWithHighCapacityResp;
  }

  /**
   * Modifies multiple rules in a specific Web Application Firewall (WAF) ruleset at a time.
   * 
   * @param tmpReq - BatchUpdateWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateWafRulesResponse
   */
  async batchUpdateWafRulesWithOptions(tmpReq: $_model.BatchUpdateWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateWafRulesResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configs)) {
      request.configsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configs, "Configs", "json");
    }

    if (!$dara.isNull(tmpReq.shared)) {
      request.sharedShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.shared, "Shared", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configsShrink)) {
      body["Configs"] = request.configsShrink;
    }

    if (!$dara.isNull(request.phase)) {
      body["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.rulesetId)) {
      body["RulesetId"] = request.rulesetId;
    }

    if (!$dara.isNull(request.sharedShrink)) {
      body["Shared"] = request.sharedShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateWafRulesResponse({}));
  }

  /**
   * Modifies multiple rules in a specific Web Application Firewall (WAF) ruleset at a time.
   * 
   * @param request - BatchUpdateWafRulesRequest
   * @returns BatchUpdateWafRulesResponse
   */
  async batchUpdateWafRules(request: $_model.BatchUpdateWafRulesRequest): Promise<$_model.BatchUpdateWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateWafRulesWithOptions(request, runtime);
  }

  /**
   * Blocks URLs.
   * 
   * @param tmpReq - BlockObjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlockObjectResponse
   */
  async blockObjectWithOptions(tmpReq: $_model.BlockObjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlockObjectResponse> {
    tmpReq.validate();
    let request = new $_model.BlockObjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.extension)) {
      query["Extension"] = request.extension;
    }

    if (!$dara.isNull(request.maxage)) {
      query["Maxage"] = request.maxage;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BlockObject",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BlockObjectResponse>(await this.callApi(params, req, runtime), new $_model.BlockObjectResponse({}));
  }

  /**
   * Blocks URLs.
   * 
   * @param request - BlockObjectRequest
   * @returns BlockObjectResponse
   */
  async blockObject(request: $_model.BlockObjectRequest): Promise<$_model.BlockObjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.blockObjectWithOptions(request, runtime);
  }

  /**
   * 检查实时日志slr角色是否已创建
   * 
   * @param request - CheckAssumeSlrRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAssumeSlrRoleResponse
   */
  async checkAssumeSlrRoleWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CheckAssumeSlrRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CheckAssumeSlrRole",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAssumeSlrRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckAssumeSlrRoleResponse({}));
  }

  /**
   * 检查实时日志slr角色是否已创建
   * @returns CheckAssumeSlrRoleResponse
   */
  async checkAssumeSlrRole(): Promise<$_model.CheckAssumeSlrRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAssumeSlrRoleWithOptions(runtime);
  }

  /**
   * Checks whether a specified website name is available.
   * 
   * @param request - CheckSiteNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSiteNameResponse
   */
  async checkSiteNameWithOptions(request: $_model.CheckSiteNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSiteNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteName)) {
      query["SiteName"] = request.siteName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSiteName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSiteNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckSiteNameResponse({}));
  }

  /**
   * Checks whether a specified website name is available.
   * 
   * @param request - CheckSiteNameRequest
   * @returns CheckSiteNameResponse
   */
  async checkSiteName(request: $_model.CheckSiteNameRequest): Promise<$_model.CheckSiteNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSiteNameWithOptions(request, runtime);
  }

  /**
   * Checks the name of a real-time log delivery task.
   * 
   * @param request - CheckSiteProjectNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSiteProjectNameResponse
   */
  async checkSiteProjectNameWithOptions(request: $_model.CheckSiteProjectNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSiteProjectNameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSiteProjectName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSiteProjectNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckSiteProjectNameResponse({}));
  }

  /**
   * Checks the name of a real-time log delivery task.
   * 
   * @param request - CheckSiteProjectNameRequest
   * @returns CheckSiteProjectNameResponse
   */
  async checkSiteProjectName(request: $_model.CheckSiteProjectNameRequest): Promise<$_model.CheckSiteProjectNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSiteProjectNameWithOptions(request, runtime);
  }

  /**
   * Checks the name of a real-time log delivery task by account.
   * 
   * @param request - CheckUserProjectNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckUserProjectNameResponse
   */
  async checkUserProjectNameWithOptions(request: $_model.CheckUserProjectNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckUserProjectNameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckUserProjectName",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckUserProjectNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckUserProjectNameResponse({}));
  }

  /**
   * Checks the name of a real-time log delivery task by account.
   * 
   * @param request - CheckUserProjectNameRequest
   * @returns CheckUserProjectNameResponse
   */
  async checkUserProjectName(request: $_model.CheckUserProjectNameRequest): Promise<$_model.CheckUserProjectNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkUserProjectNameWithOptions(request, runtime);
  }

  /**
   * Commits the unstable code in the staging environment to generate an official code version.
   * 
   * @param request - CommitRoutineStagingCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitRoutineStagingCodeResponse
   */
  async commitRoutineStagingCodeWithOptions(request: $_model.CommitRoutineStagingCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CommitRoutineStagingCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitRoutineStagingCode",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitRoutineStagingCodeResponse>(await this.callApi(params, req, runtime), new $_model.CommitRoutineStagingCodeResponse({}));
  }

  /**
   * Commits the unstable code in the staging environment to generate an official code version.
   * 
   * @param request - CommitRoutineStagingCodeRequest
   * @returns CommitRoutineStagingCodeResponse
   */
  async commitRoutineStagingCode(request: $_model.CommitRoutineStagingCodeRequest): Promise<$_model.CommitRoutineStagingCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.commitRoutineStagingCodeWithOptions(request, runtime);
  }

  /**
   * Create a new site cache configuration
   * 
   * @param request - CreateCacheRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCacheRuleResponse
   */
  async createCacheRuleWithOptions(request: $_model.CreateCacheRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCacheRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalCacheablePorts)) {
      query["AdditionalCacheablePorts"] = request.additionalCacheablePorts;
    }

    if (!$dara.isNull(request.browserCacheMode)) {
      query["BrowserCacheMode"] = request.browserCacheMode;
    }

    if (!$dara.isNull(request.browserCacheTtl)) {
      query["BrowserCacheTtl"] = request.browserCacheTtl;
    }

    if (!$dara.isNull(request.bypassCache)) {
      query["BypassCache"] = request.bypassCache;
    }

    if (!$dara.isNull(request.cacheDeceptionArmor)) {
      query["CacheDeceptionArmor"] = request.cacheDeceptionArmor;
    }

    if (!$dara.isNull(request.cacheReserveEligibility)) {
      query["CacheReserveEligibility"] = request.cacheReserveEligibility;
    }

    if (!$dara.isNull(request.checkPresenceCookie)) {
      query["CheckPresenceCookie"] = request.checkPresenceCookie;
    }

    if (!$dara.isNull(request.checkPresenceHeader)) {
      query["CheckPresenceHeader"] = request.checkPresenceHeader;
    }

    if (!$dara.isNull(request.edgeCacheMode)) {
      query["EdgeCacheMode"] = request.edgeCacheMode;
    }

    if (!$dara.isNull(request.edgeCacheTtl)) {
      query["EdgeCacheTtl"] = request.edgeCacheTtl;
    }

    if (!$dara.isNull(request.edgeStatusCodeCacheTtl)) {
      query["EdgeStatusCodeCacheTtl"] = request.edgeStatusCodeCacheTtl;
    }

    if (!$dara.isNull(request.includeCookie)) {
      query["IncludeCookie"] = request.includeCookie;
    }

    if (!$dara.isNull(request.includeHeader)) {
      query["IncludeHeader"] = request.includeHeader;
    }

    if (!$dara.isNull(request.queryString)) {
      query["QueryString"] = request.queryString;
    }

    if (!$dara.isNull(request.queryStringMode)) {
      query["QueryStringMode"] = request.queryStringMode;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.serveStale)) {
      query["ServeStale"] = request.serveStale;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.sortQueryStringForCache)) {
      query["SortQueryStringForCache"] = request.sortQueryStringForCache;
    }

    if (!$dara.isNull(request.userDeviceType)) {
      query["UserDeviceType"] = request.userDeviceType;
    }

    if (!$dara.isNull(request.userGeo)) {
      query["UserGeo"] = request.userGeo;
    }

    if (!$dara.isNull(request.userLanguage)) {
      query["UserLanguage"] = request.userLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCacheRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCacheRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCacheRuleResponse({}));
  }

  /**
   * Create a new site cache configuration
   * 
   * @param request - CreateCacheRuleRequest
   * @returns CreateCacheRuleResponse
   */
  async createCacheRule(request: $_model.CreateCacheRuleRequest): Promise<$_model.CreateCacheRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCacheRuleWithOptions(request, runtime);
  }

  /**
   * Uses the ESA-managed certificate authority (CA) to issue client certificates.
   * 
   * @param request - CreateClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificateWithOptions(request: $_model.CreateClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.CSR)) {
      body["CSR"] = request.CSR;
    }

    if (!$dara.isNull(request.pkeyType)) {
      body["PkeyType"] = request.pkeyType;
    }

    if (!$dara.isNull(request.validityDays)) {
      body["ValidityDays"] = request.validityDays;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientCertificateResponse({}));
  }

  /**
   * Uses the ESA-managed certificate authority (CA) to issue client certificates.
   * 
   * @param request - CreateClientCertificateRequest
   * @returns CreateClientCertificateResponse
   */
  async createClientCertificate(request: $_model.CreateClientCertificateRequest): Promise<$_model.CreateClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientCertificateWithOptions(request, runtime);
  }

  /**
   * Add a compression rule
   * 
   * @param request - CreateCompressionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCompressionRuleResponse
   */
  async createCompressionRuleWithOptions(request: $_model.CreateCompressionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCompressionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brotli)) {
      query["Brotli"] = request.brotli;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.zstd)) {
      query["Zstd"] = request.zstd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCompressionRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCompressionRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateCompressionRuleResponse({}));
  }

  /**
   * Add a compression rule
   * 
   * @param request - CreateCompressionRuleRequest
   * @returns CreateCompressionRuleResponse
   */
  async createCompressionRule(request: $_model.CreateCompressionRuleRequest): Promise<$_model.CreateCompressionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCompressionRuleWithOptions(request, runtime);
  }

  /**
   * Creates an account-level custom scenario policy. You can execute a policy after you associate the policy with a website.
   * 
   * @param request - CreateCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomScenePolicyResponse
   */
  async createCustomScenePolicyWithOptions(request: $_model.CreateCustomScenePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomScenePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomScenePolicyResponse({}));
  }

  /**
   * Creates an account-level custom scenario policy. You can execute a policy after you associate the policy with a website.
   * 
   * @param request - CreateCustomScenePolicyRequest
   * @returns CreateCustomScenePolicyResponse
   */
  async createCustomScenePolicy(request: $_model.CreateCustomScenePolicyRequest): Promise<$_model.CreateCustomScenePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * Creates a containerized application. You can deploy and release a version of the application across points of presence (POPs).
   * 
   * @param request - CreateEdgeContainerAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEdgeContainerAppResponse
   */
  async createEdgeContainerAppWithOptions(request: $_model.CreateEdgeContainerAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEdgeContainerAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.healthCheckFailTimes)) {
      body["HealthCheckFailTimes"] = request.healthCheckFailTimes;
    }

    if (!$dara.isNull(request.healthCheckHost)) {
      body["HealthCheckHost"] = request.healthCheckHost;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      body["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckInterval)) {
      body["HealthCheckInterval"] = request.healthCheckInterval;
    }

    if (!$dara.isNull(request.healthCheckMethod)) {
      body["HealthCheckMethod"] = request.healthCheckMethod;
    }

    if (!$dara.isNull(request.healthCheckPort)) {
      body["HealthCheckPort"] = request.healthCheckPort;
    }

    if (!$dara.isNull(request.healthCheckSuccTimes)) {
      body["HealthCheckSuccTimes"] = request.healthCheckSuccTimes;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      body["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      body["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      body["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.servicePort)) {
      body["ServicePort"] = request.servicePort;
    }

    if (!$dara.isNull(request.targetPort)) {
      body["TargetPort"] = request.targetPort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEdgeContainerApp",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEdgeContainerAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateEdgeContainerAppResponse({}));
  }

  /**
   * Creates a containerized application. You can deploy and release a version of the application across points of presence (POPs).
   * 
   * @param request - CreateEdgeContainerAppRequest
   * @returns CreateEdgeContainerAppResponse
   */
  async createEdgeContainerApp(request: $_model.CreateEdgeContainerAppRequest): Promise<$_model.CreateEdgeContainerAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEdgeContainerAppWithOptions(request, runtime);
  }

  /**
   * Associates a domain name with a containerized application. This way, requests destined for the associated domain name are forwarded to the application.
   * 
   * @param request - CreateEdgeContainerAppRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEdgeContainerAppRecordResponse
   */
  async createEdgeContainerAppRecordWithOptions(request: $_model.CreateEdgeContainerAppRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEdgeContainerAppRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.recordName)) {
      body["RecordName"] = request.recordName;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEdgeContainerAppRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEdgeContainerAppRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateEdgeContainerAppRecordResponse({}));
  }

  /**
   * Associates a domain name with a containerized application. This way, requests destined for the associated domain name are forwarded to the application.
   * 
   * @param request - CreateEdgeContainerAppRecordRequest
   * @returns CreateEdgeContainerAppRecordResponse
   */
  async createEdgeContainerAppRecord(request: $_model.CreateEdgeContainerAppRecordRequest): Promise<$_model.CreateEdgeContainerAppRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEdgeContainerAppRecordWithOptions(request, runtime);
  }

  /**
   * Creates a version for a containerized application. You can iterate the application based on the version.
   * 
   * @param tmpReq - CreateEdgeContainerAppVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEdgeContainerAppVersionResponse
   */
  async createEdgeContainerAppVersionWithOptions(tmpReq: $_model.CreateEdgeContainerAppVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEdgeContainerAppVersionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEdgeContainerAppVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.containers)) {
      request.containersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.containers, "Containers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.containersShrink)) {
      body["Containers"] = request.containersShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEdgeContainerAppVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEdgeContainerAppVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateEdgeContainerAppVersionResponse({}));
  }

  /**
   * Creates a version for a containerized application. You can iterate the application based on the version.
   * 
   * @param request - CreateEdgeContainerAppVersionRequest
   * @returns CreateEdgeContainerAppVersionResponse
   */
  async createEdgeContainerAppVersion(request: $_model.CreateEdgeContainerAppVersionRequest): Promise<$_model.CreateEdgeContainerAppVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEdgeContainerAppVersionWithOptions(request, runtime);
  }

  /**
   * Add HTTP Request Header Rule
   * 
   * @param tmpReq - CreateHttpRequestHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpRequestHeaderModificationRuleResponse
   */
  async createHttpRequestHeaderModificationRuleWithOptions(tmpReq: $_model.CreateHttpRequestHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpRequestHeaderModificationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateHttpRequestHeaderModificationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.requestHeaderModification)) {
      request.requestHeaderModificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaderModification, "RequestHeaderModification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.requestHeaderModificationShrink)) {
      query["RequestHeaderModification"] = request.requestHeaderModificationShrink;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpRequestHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpRequestHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpRequestHeaderModificationRuleResponse({}));
  }

  /**
   * Add HTTP Request Header Rule
   * 
   * @param request - CreateHttpRequestHeaderModificationRuleRequest
   * @returns CreateHttpRequestHeaderModificationRuleResponse
   */
  async createHttpRequestHeaderModificationRule(request: $_model.CreateHttpRequestHeaderModificationRuleRequest): Promise<$_model.CreateHttpRequestHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHttpRequestHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Add HTTP Response Header Rule
   * 
   * @param tmpReq - CreateHttpResponseHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpResponseHeaderModificationRuleResponse
   */
  async createHttpResponseHeaderModificationRuleWithOptions(tmpReq: $_model.CreateHttpResponseHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpResponseHeaderModificationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateHttpResponseHeaderModificationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.responseHeaderModification)) {
      request.responseHeaderModificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaderModification, "ResponseHeaderModification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.responseHeaderModificationShrink)) {
      query["ResponseHeaderModification"] = request.responseHeaderModificationShrink;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpResponseHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpResponseHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpResponseHeaderModificationRuleResponse({}));
  }

  /**
   * Add HTTP Response Header Rule
   * 
   * @param request - CreateHttpResponseHeaderModificationRuleRequest
   * @returns CreateHttpResponseHeaderModificationRuleResponse
   */
  async createHttpResponseHeaderModificationRule(request: $_model.CreateHttpResponseHeaderModificationRuleRequest): Promise<$_model.CreateHttpResponseHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHttpResponseHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Create a new site HTTPS application configuration
   * 
   * @param request - CreateHttpsApplicationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpsApplicationConfigurationResponse
   */
  async createHttpsApplicationConfigurationWithOptions(request: $_model.CreateHttpsApplicationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpsApplicationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.altSvc)) {
      query["AltSvc"] = request.altSvc;
    }

    if (!$dara.isNull(request.altSvcClear)) {
      query["AltSvcClear"] = request.altSvcClear;
    }

    if (!$dara.isNull(request.altSvcMa)) {
      query["AltSvcMa"] = request.altSvcMa;
    }

    if (!$dara.isNull(request.altSvcPersist)) {
      query["AltSvcPersist"] = request.altSvcPersist;
    }

    if (!$dara.isNull(request.hsts)) {
      query["Hsts"] = request.hsts;
    }

    if (!$dara.isNull(request.hstsIncludeSubdomains)) {
      query["HstsIncludeSubdomains"] = request.hstsIncludeSubdomains;
    }

    if (!$dara.isNull(request.hstsMaxAge)) {
      query["HstsMaxAge"] = request.hstsMaxAge;
    }

    if (!$dara.isNull(request.hstsPreload)) {
      query["HstsPreload"] = request.hstsPreload;
    }

    if (!$dara.isNull(request.httpsForce)) {
      query["HttpsForce"] = request.httpsForce;
    }

    if (!$dara.isNull(request.httpsForceCode)) {
      query["HttpsForceCode"] = request.httpsForceCode;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpsApplicationConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpsApplicationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpsApplicationConfigurationResponse({}));
  }

  /**
   * Create a new site HTTPS application configuration
   * 
   * @param request - CreateHttpsApplicationConfigurationRequest
   * @returns CreateHttpsApplicationConfigurationResponse
   */
  async createHttpsApplicationConfiguration(request: $_model.CreateHttpsApplicationConfigurationRequest): Promise<$_model.CreateHttpsApplicationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHttpsApplicationConfigurationWithOptions(request, runtime);
  }

  /**
   * Create a new site HTTPS basic configuration
   * 
   * @param request - CreateHttpsBasicConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHttpsBasicConfigurationResponse
   */
  async createHttpsBasicConfigurationWithOptions(request: $_model.CreateHttpsBasicConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHttpsBasicConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphersuite)) {
      query["Ciphersuite"] = request.ciphersuite;
    }

    if (!$dara.isNull(request.ciphersuiteGroup)) {
      query["CiphersuiteGroup"] = request.ciphersuiteGroup;
    }

    if (!$dara.isNull(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!$dara.isNull(request.http3)) {
      query["Http3"] = request.http3;
    }

    if (!$dara.isNull(request.https)) {
      query["Https"] = request.https;
    }

    if (!$dara.isNull(request.ocspStapling)) {
      query["OcspStapling"] = request.ocspStapling;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.tls10)) {
      query["Tls10"] = request.tls10;
    }

    if (!$dara.isNull(request.tls11)) {
      query["Tls11"] = request.tls11;
    }

    if (!$dara.isNull(request.tls12)) {
      query["Tls12"] = request.tls12;
    }

    if (!$dara.isNull(request.tls13)) {
      query["Tls13"] = request.tls13;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHttpsBasicConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHttpsBasicConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateHttpsBasicConfigurationResponse({}));
  }

  /**
   * Create a new site HTTPS basic configuration
   * 
   * @param request - CreateHttpsBasicConfigurationRequest
   * @returns CreateHttpsBasicConfigurationResponse
   */
  async createHttpsBasicConfiguration(request: $_model.CreateHttpsBasicConfigurationRequest): Promise<$_model.CreateHttpsBasicConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHttpsBasicConfigurationWithOptions(request, runtime);
  }

  /**
   * Add Site Image Transformation Configuration
   * 
   * @param request - CreateImageTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageTransformResponse
   */
  async createImageTransformWithOptions(request: $_model.CreateImageTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageTransformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageTransformResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageTransformResponse({}));
  }

  /**
   * Add Site Image Transformation Configuration
   * 
   * @param request - CreateImageTransformRequest
   * @returns CreateImageTransformResponse
   */
  async createImageTransform(request: $_model.CreateImageTransformRequest): Promise<$_model.CreateImageTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageTransformWithOptions(request, runtime);
  }

  /**
   * Create a namespace in your Alibaba Cloud account.
   * 
   * @param request - CreateKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKvNamespaceResponse
   */
  async createKvNamespaceWithOptions(request: $_model.CreateKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKvNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateKvNamespaceResponse({}));
  }

  /**
   * Create a namespace in your Alibaba Cloud account.
   * 
   * @param request - CreateKvNamespaceRequest
   * @returns CreateKvNamespaceResponse
   */
  async createKvNamespace(request: $_model.CreateKvNamespaceRequest): Promise<$_model.CreateKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createKvNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a list. Lists are used for the referencing of values in the rules engine to implement complex logic and control in security policies.
   * 
   * @param tmpReq - CreateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListResponse
   */
  async createListWithOptions(tmpReq: $_model.CreateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateListResponse> {
    tmpReq.validate();
    let request = new $_model.CreateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.itemsShrink)) {
      body["Items"] = request.itemsShrink;
    }

    if (!$dara.isNull(request.kind)) {
      body["Kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateListResponse>(await this.callApi(params, req, runtime), new $_model.CreateListResponse({}));
  }

  /**
   * Creates a list. Lists are used for the referencing of values in the rules engine to implement complex logic and control in security policies.
   * 
   * @param request - CreateListRequest
   * @returns CreateListResponse
   */
  async createList(request: $_model.CreateListRequest): Promise<$_model.CreateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createListWithOptions(request, runtime);
  }

  /**
   * Add a New Load Balancer
   * 
   * @remarks
   * Through this API, users can configure load balancing services according to their business needs, including but not limited to adaptive routing, weighted round-robin, rule matching, health checks, and other settings, to achieve effective traffic management and optimization.
   * 
   * @param tmpReq - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(tmpReq: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLoadBalancerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.adaptiveRouting)) {
      request.adaptiveRoutingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.adaptiveRouting, "AdaptiveRouting", "json");
    }

    if (!$dara.isNull(tmpReq.defaultPools)) {
      request.defaultPoolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultPools, "DefaultPools", "json");
    }

    if (!$dara.isNull(tmpReq.monitor)) {
      request.monitorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitor, "Monitor", "json");
    }

    if (!$dara.isNull(tmpReq.randomSteering)) {
      request.randomSteeringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.randomSteering, "RandomSteering", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adaptiveRoutingShrink)) {
      query["AdaptiveRouting"] = request.adaptiveRoutingShrink;
    }

    if (!$dara.isNull(request.defaultPoolsShrink)) {
      query["DefaultPools"] = request.defaultPoolsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.fallbackPool)) {
      query["FallbackPool"] = request.fallbackPool;
    }

    if (!$dara.isNull(request.monitorShrink)) {
      query["Monitor"] = request.monitorShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.randomSteeringShrink)) {
      query["RandomSteering"] = request.randomSteeringShrink;
    }

    if (!$dara.isNull(request.regionPools)) {
      query["RegionPools"] = request.regionPools;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    if (!$dara.isNull(request.sessionAffinity)) {
      query["SessionAffinity"] = request.sessionAffinity;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.steeringPolicy)) {
      query["SteeringPolicy"] = request.steeringPolicy;
    }

    if (!$dara.isNull(request.subRegionPools)) {
      query["SubRegionPools"] = request.subRegionPools;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerResponse({}));
  }

  /**
   * Add a New Load Balancer
   * 
   * @remarks
   * Through this API, users can configure load balancing services according to their business needs, including but not limited to adaptive routing, weighted round-robin, rule matching, health checks, and other settings, to achieve effective traffic management and optimization.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Create a new site network optimization configuration
   * 
   * @param request - CreateNetworkOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkOptimizationResponse
   */
  async createNetworkOptimizationWithOptions(request: $_model.CreateNetworkOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.grpc)) {
      query["Grpc"] = request.grpc;
    }

    if (!$dara.isNull(request.http2Origin)) {
      query["Http2Origin"] = request.http2Origin;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.smartRouting)) {
      query["SmartRouting"] = request.smartRouting;
    }

    if (!$dara.isNull(request.uploadMaxFilesize)) {
      query["UploadMaxFilesize"] = request.uploadMaxFilesize;
    }

    if (!$dara.isNull(request.websocket)) {
      query["Websocket"] = request.websocket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetworkOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkOptimizationResponse({}));
  }

  /**
   * Create a new site network optimization configuration
   * 
   * @param request - CreateNetworkOptimizationRequest
   * @returns CreateNetworkOptimizationResponse
   */
  async createNetworkOptimization(request: $_model.CreateNetworkOptimizationRequest): Promise<$_model.CreateNetworkOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkOptimizationWithOptions(request, runtime);
  }

  /**
   * Add a new origin address pool
   * 
   * @remarks
   * Multiple origins can be added under the origin address, supporting domain names, IPs, OSS, S3, and other types of origins. It supports authentication for OSS and S3 type origins.
   * 
   * @param tmpReq - CreateOriginPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOriginPoolResponse
   */
  async createOriginPoolWithOptions(tmpReq: $_model.CreateOriginPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOriginPoolResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOriginPoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.origins)) {
      request.originsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.origins, "Origins", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.originsShrink)) {
      query["Origins"] = request.originsShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOriginPool",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOriginPoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateOriginPoolResponse({}));
  }

  /**
   * Add a new origin address pool
   * 
   * @remarks
   * Multiple origins can be added under the origin address, supporting domain names, IPs, OSS, S3, and other types of origins. It supports authentication for OSS and S3 type origins.
   * 
   * @param request - CreateOriginPoolRequest
   * @returns CreateOriginPoolResponse
   */
  async createOriginPool(request: $_model.CreateOriginPoolRequest): Promise<$_model.CreateOriginPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOriginPoolWithOptions(request, runtime);
  }

  /**
   * Enables origin protection.
   * 
   * @param request - CreateOriginProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOriginProtectionResponse
   */
  async createOriginProtectionWithOptions(request: $_model.CreateOriginProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOriginProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOriginProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOriginProtectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateOriginProtectionResponse({}));
  }

  /**
   * Enables origin protection.
   * 
   * @param request - CreateOriginProtectionRequest
   * @returns CreateOriginProtectionResponse
   */
  async createOriginProtection(request: $_model.CreateOriginProtectionRequest): Promise<$_model.CreateOriginProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOriginProtectionWithOptions(request, runtime);
  }

  /**
   * Create a new origin rule configuration for the site
   * 
   * @param request - CreateOriginRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOriginRuleResponse
   */
  async createOriginRuleWithOptions(request: $_model.CreateOriginRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOriginRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnsRecord)) {
      query["DnsRecord"] = request.dnsRecord;
    }

    if (!$dara.isNull(request.follow302Enable)) {
      query["Follow302Enable"] = request.follow302Enable;
    }

    if (!$dara.isNull(request.follow302MaxTries)) {
      query["Follow302MaxTries"] = request.follow302MaxTries;
    }

    if (!$dara.isNull(request.follow302RetainArgs)) {
      query["Follow302RetainArgs"] = request.follow302RetainArgs;
    }

    if (!$dara.isNull(request.follow302RetainHeader)) {
      query["Follow302RetainHeader"] = request.follow302RetainHeader;
    }

    if (!$dara.isNull(request.follow302TargetHost)) {
      query["Follow302TargetHost"] = request.follow302TargetHost;
    }

    if (!$dara.isNull(request.originHost)) {
      query["OriginHost"] = request.originHost;
    }

    if (!$dara.isNull(request.originHttpPort)) {
      query["OriginHttpPort"] = request.originHttpPort;
    }

    if (!$dara.isNull(request.originHttpsPort)) {
      query["OriginHttpsPort"] = request.originHttpsPort;
    }

    if (!$dara.isNull(request.originMtls)) {
      query["OriginMtls"] = request.originMtls;
    }

    if (!$dara.isNull(request.originReadTimeout)) {
      query["OriginReadTimeout"] = request.originReadTimeout;
    }

    if (!$dara.isNull(request.originScheme)) {
      query["OriginScheme"] = request.originScheme;
    }

    if (!$dara.isNull(request.originSni)) {
      query["OriginSni"] = request.originSni;
    }

    if (!$dara.isNull(request.originVerify)) {
      query["OriginVerify"] = request.originVerify;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.rangeChunkSize)) {
      query["RangeChunkSize"] = request.rangeChunkSize;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOriginRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOriginRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateOriginRuleResponse({}));
  }

  /**
   * Create a new origin rule configuration for the site
   * 
   * @param request - CreateOriginRuleRequest
   * @returns CreateOriginRuleResponse
   */
  async createOriginRule(request: $_model.CreateOriginRuleRequest): Promise<$_model.CreateOriginRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOriginRuleWithOptions(request, runtime);
  }

  /**
   * Creates a custom error page, which is displayed when a request is blocked by Web Application Firewall (WAF). You can configure the HTML content, page type, and description, and submit the Base64-encoded page content.
   * 
   * @param request - CreatePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePageResponse
   */
  async createPageWithOptions(request: $_model.CreatePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePageResponse>(await this.callApi(params, req, runtime), new $_model.CreatePageResponse({}));
  }

  /**
   * Creates a custom error page, which is displayed when a request is blocked by Web Application Firewall (WAF). You can configure the HTML content, page type, and description, and submit the Base64-encoded page content.
   * 
   * @param request - CreatePageRequest
   * @returns CreatePageResponse
   */
  async createPage(request: $_model.CreatePageRequest): Promise<$_model.CreatePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPageWithOptions(request, runtime);
  }

  /**
   * Creates a DNS record for a specific website.
   * 
   * @param tmpReq - CreateRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRecordResponse
   */
  async createRecordWithOptions(tmpReq: $_model.CreateRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRecordResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConf)) {
      request.authConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConf, "AuthConf", "json");
    }

    if (!$dara.isNull(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authConfShrink)) {
      query["AuthConf"] = request.authConfShrink;
    }

    if (!$dara.isNull(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!$dara.isNull(request.hostPolicy)) {
      query["HostPolicy"] = request.hostPolicy;
    }

    if (!$dara.isNull(request.proxied)) {
      query["Proxied"] = request.proxied;
    }

    if (!$dara.isNull(request.recordName)) {
      query["RecordName"] = request.recordName;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateRecordResponse({}));
  }

  /**
   * Creates a DNS record for a specific website.
   * 
   * @param request - CreateRecordRequest
   * @returns CreateRecordResponse
   */
  async createRecord(request: $_model.CreateRecordRequest): Promise<$_model.CreateRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRecordWithOptions(request, runtime);
  }

  /**
   * Add a Redirect Rule
   * 
   * @param request - CreateRedirectRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRedirectRuleResponse
   */
  async createRedirectRuleWithOptions(request: $_model.CreateRedirectRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRedirectRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reserveQueryString)) {
      query["ReserveQueryString"] = request.reserveQueryString;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!$dara.isNull(request.targetUrl)) {
      query["TargetUrl"] = request.targetUrl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRedirectRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRedirectRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRedirectRuleResponse({}));
  }

  /**
   * Add a Redirect Rule
   * 
   * @param request - CreateRedirectRuleRequest
   * @returns CreateRedirectRuleResponse
   */
  async createRedirectRule(request: $_model.CreateRedirectRuleRequest): Promise<$_model.CreateRedirectRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRedirectRuleWithOptions(request, runtime);
  }

  /**
   * Add Rewrite URL Rule
   * 
   * @param request - CreateRewriteUrlRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRewriteUrlRuleResponse
   */
  async createRewriteUrlRuleWithOptions(request: $_model.CreateRewriteUrlRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRewriteUrlRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryString)) {
      query["QueryString"] = request.queryString;
    }

    if (!$dara.isNull(request.rewriteQueryStringType)) {
      query["RewriteQueryStringType"] = request.rewriteQueryStringType;
    }

    if (!$dara.isNull(request.rewriteUriType)) {
      query["RewriteUriType"] = request.rewriteUriType;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRewriteUrlRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRewriteUrlRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRewriteUrlRuleResponse({}));
  }

  /**
   * Add Rewrite URL Rule
   * 
   * @param request - CreateRewriteUrlRuleRequest
   * @returns CreateRewriteUrlRuleResponse
   */
  async createRewriteUrlRule(request: $_model.CreateRewriteUrlRuleRequest): Promise<$_model.CreateRewriteUrlRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRewriteUrlRuleWithOptions(request, runtime);
  }

  /**
   * Creates a routine.
   * 
   * @param request - CreateRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoutineResponse
   */
  async createRoutineWithOptions(request: $_model.CreateRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoutineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoutine",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoutineResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoutineResponse({}));
  }

  /**
   * Creates a routine.
   * 
   * @param request - CreateRoutineRequest
   * @returns CreateRoutineResponse
   */
  async createRoutine(request: $_model.CreateRoutineRequest): Promise<$_model.CreateRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoutineWithOptions(request, runtime);
  }

  /**
   * Adds a record to map a domain that is associated with a routine. This record is used to trigger the associated routine code.
   * 
   * @param request - CreateRoutineRelatedRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoutineRelatedRecordResponse
   */
  async createRoutineRelatedRecordWithOptions(request: $_model.CreateRoutineRelatedRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoutineRelatedRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recordName)) {
      body["RecordName"] = request.recordName;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoutineRelatedRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoutineRelatedRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoutineRelatedRecordResponse({}));
  }

  /**
   * Adds a record to map a domain that is associated with a routine. This record is used to trigger the associated routine code.
   * 
   * @param request - CreateRoutineRelatedRecordRequest
   * @returns CreateRoutineRelatedRecordResponse
   */
  async createRoutineRelatedRecord(request: $_model.CreateRoutineRelatedRecordRequest): Promise<$_model.CreateRoutineRelatedRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoutineRelatedRecordWithOptions(request, runtime);
  }

  /**
   * 新增边缘函数路由配置
   * 
   * @param request - CreateRoutineRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoutineRouteResponse
   */
  async createRoutineRouteWithOptions(request: $_model.CreateRoutineRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoutineRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bypass)) {
      query["Bypass"] = request.bypass;
    }

    if (!$dara.isNull(request.routeEnable)) {
      query["RouteEnable"] = request.routeEnable;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.routineName)) {
      query["RoutineName"] = request.routineName;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoutineRoute",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRoutineRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoutineRouteResponse({}));
  }

  /**
   * 新增边缘函数路由配置
   * 
   * @param request - CreateRoutineRouteRequest
   * @returns CreateRoutineRouteResponse
   */
  async createRoutineRoute(request: $_model.CreateRoutineRouteRequest): Promise<$_model.CreateRoutineRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRoutineRouteWithOptions(request, runtime);
  }

  /**
   * Creates scheduled prefetch plans.
   * 
   * @param tmpReq - CreateScheduledPreloadExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPreloadExecutionsResponse
   */
  async createScheduledPreloadExecutionsWithOptions(tmpReq: $_model.CreateScheduledPreloadExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledPreloadExecutionsResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScheduledPreloadExecutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.executions)) {
      request.executionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.executions, "Executions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.executionsShrink)) {
      body["Executions"] = request.executionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledPreloadExecutions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledPreloadExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledPreloadExecutionsResponse({}));
  }

  /**
   * Creates scheduled prefetch plans.
   * 
   * @param request - CreateScheduledPreloadExecutionsRequest
   * @returns CreateScheduledPreloadExecutionsResponse
   */
  async createScheduledPreloadExecutions(request: $_model.CreateScheduledPreloadExecutionsRequest): Promise<$_model.CreateScheduledPreloadExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledPreloadExecutionsWithOptions(request, runtime);
  }

  /**
   * Adds a scheduled prefetch task.
   * 
   * @param request - CreateScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPreloadJobResponse
   */
  async createScheduledPreloadJobWithOptions(request: $_model.CreateScheduledPreloadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledPreloadJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.insertWay)) {
      body["InsertWay"] = request.insertWay;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.urlList)) {
      body["UrlList"] = request.urlList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledPreloadJobResponse({}));
  }

  /**
   * Adds a scheduled prefetch task.
   * 
   * @param request - CreateScheduledPreloadJobRequest
   * @returns CreateScheduledPreloadJobResponse
   */
  async createScheduledPreloadJob(request: $_model.CreateScheduledPreloadJobRequest): Promise<$_model.CreateScheduledPreloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * Adds a website.
   * 
   * @remarks
   *   Make sure that you have an available plan before you add a website.
   * *   Make sure that your website domain name has an ICP filing if the location you want to specify covers the Chinese mainland.
   * 
   * @param request - CreateSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteResponse
   */
  async createSiteWithOptions(request: $_model.CreateSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.siteName)) {
      query["SiteName"] = request.siteName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSiteResponse>(await this.callApi(params, req, runtime), new $_model.CreateSiteResponse({}));
  }

  /**
   * Adds a website.
   * 
   * @remarks
   *   Make sure that you have an available plan before you add a website.
   * *   Make sure that your website domain name has an ICP filing if the location you want to specify covers the Chinese mainland.
   * 
   * @param request - CreateSiteRequest
   * @returns CreateSiteResponse
   */
  async createSite(request: $_model.CreateSiteRequest): Promise<$_model.CreateSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSiteWithOptions(request, runtime);
  }

  /**
   * Adds the configuration of custom request header, response header, and cookie fields that are used to capture logs of a website.
   * 
   * @remarks
   *   **Custom field limits**: The key name of a custom field can contain only letters, digits, underscores (_), and spaces. The key name cannot contain other characters. Otherwise, errors may occur.
   * *   **Parameter passing**: Submit `SiteId`, `RequestHeaders`, `ResponseHeaders`, and `Cookies` by using `formData`. Each array element matches a custom field name.
   * *   **(Required) SiteId**: Although `SiteId` is not marked as required in the Required column, you must specify a website ID by using this parameter when you can call this API operation.
   * 
   * @param tmpReq - CreateSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteCustomLogResponse
   */
  async createSiteCustomLogWithOptions(tmpReq: $_model.CreateSiteCustomLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSiteCustomLogResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSiteCustomLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cookies)) {
      request.cookiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cookies, "Cookies", "json");
    }

    if (!$dara.isNull(tmpReq.requestHeaders)) {
      request.requestHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaders, "RequestHeaders", "json");
    }

    if (!$dara.isNull(tmpReq.responseHeaders)) {
      request.responseHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaders, "ResponseHeaders", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cookiesShrink)) {
      body["Cookies"] = request.cookiesShrink;
    }

    if (!$dara.isNull(request.requestHeadersShrink)) {
      body["RequestHeaders"] = request.requestHeadersShrink;
    }

    if (!$dara.isNull(request.responseHeadersShrink)) {
      body["ResponseHeaders"] = request.responseHeadersShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSiteCustomLogResponse>(await this.callApi(params, req, runtime), new $_model.CreateSiteCustomLogResponse({}));
  }

  /**
   * Adds the configuration of custom request header, response header, and cookie fields that are used to capture logs of a website.
   * 
   * @remarks
   *   **Custom field limits**: The key name of a custom field can contain only letters, digits, underscores (_), and spaces. The key name cannot contain other characters. Otherwise, errors may occur.
   * *   **Parameter passing**: Submit `SiteId`, `RequestHeaders`, `ResponseHeaders`, and `Cookies` by using `formData`. Each array element matches a custom field name.
   * *   **(Required) SiteId**: Although `SiteId` is not marked as required in the Required column, you must specify a website ID by using this parameter when you can call this API operation.
   * 
   * @param request - CreateSiteCustomLogRequest
   * @returns CreateSiteCustomLogResponse
   */
  async createSiteCustomLog(request: $_model.CreateSiteCustomLogRequest): Promise<$_model.CreateSiteCustomLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * Creates a real-time log delivery task.
   * 
   * @param tmpReq - CreateSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteDeliveryTaskResponse
   */
  async createSiteDeliveryTaskWithOptions(tmpReq: $_model.CreateSiteDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSiteDeliveryTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSiteDeliveryTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.httpDelivery)) {
      request.httpDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpDelivery, "HttpDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.kafkaDelivery)) {
      request.kafkaDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaDelivery, "KafkaDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.ossDelivery)) {
      request.ossDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ossDelivery, "OssDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.s3Delivery)) {
      request.s3DeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.s3Delivery, "S3Delivery", "json");
    }

    if (!$dara.isNull(tmpReq.slsDelivery)) {
      request.slsDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsDelivery, "SlsDelivery", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!$dara.isNull(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.httpDeliveryShrink)) {
      body["HttpDelivery"] = request.httpDeliveryShrink;
    }

    if (!$dara.isNull(request.kafkaDeliveryShrink)) {
      body["KafkaDelivery"] = request.kafkaDeliveryShrink;
    }

    if (!$dara.isNull(request.ossDeliveryShrink)) {
      body["OssDelivery"] = request.ossDeliveryShrink;
    }

    if (!$dara.isNull(request.s3DeliveryShrink)) {
      body["S3Delivery"] = request.s3DeliveryShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.slsDeliveryShrink)) {
      body["SlsDelivery"] = request.slsDeliveryShrink;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSiteDeliveryTaskResponse({}));
  }

  /**
   * Creates a real-time log delivery task.
   * 
   * @param request - CreateSiteDeliveryTaskRequest
   * @returns CreateSiteDeliveryTaskResponse
   */
  async createSiteDeliveryTask(request: $_model.CreateSiteDeliveryTaskRequest): Promise<$_model.CreateSiteDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 创建一个实时日志slr角色
   * 
   * @param request - CreateSlrRoleForRealtimeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSlrRoleForRealtimeLogResponse
   */
  async createSlrRoleForRealtimeLogWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.CreateSlrRoleForRealtimeLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CreateSlrRoleForRealtimeLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSlrRoleForRealtimeLogResponse>(await this.callApi(params, req, runtime), new $_model.CreateSlrRoleForRealtimeLogResponse({}));
  }

  /**
   * 创建一个实时日志slr角色
   * @returns CreateSlrRoleForRealtimeLogResponse
   */
  async createSlrRoleForRealtimeLog(): Promise<$_model.CreateSlrRoleForRealtimeLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSlrRoleForRealtimeLogWithOptions(runtime);
  }

  /**
   * Creates a log delivery task to ship logs to the specified destination.
   * 
   * @remarks
   * This API operation allows you to deliver logs to destinations such as Simple Log Service (SLS), HTTP servers, Object Storage Service (OSS), Amazon Simple Storage Service (S3), and Kafka. You can specify the task name, log fields to deliver, data center, discard rate, delivery type, and delivery details.
   * *   **Field filtering**: Use the `FieldName` parameter to specify log fields to deliver.
   * *   **Filtering rules**: Use the `FilterRules` parameter to pre-process and filter log data.
   * *   **Diverse delivery destinations**: Logs can be delivered to different destinations. Configuration parameters vary with delivery destinations.
   * ## [](#)Precautions
   * *   Make sure that you have sufficient permissions to perform delivery tasks.
   * *   If you enable encryption or authentication, properly configure corresponding parameters.
   * *   Verify the syntax of `FilterRules` to make sure that filtering logic works as expected.
   * *   Specify advanced settings such as the number of retries and timeout period based on your needs to have optimal delivery efficiency and stability.
   * 
   * @param tmpReq - CreateUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserDeliveryTaskResponse
   */
  async createUserDeliveryTaskWithOptions(tmpReq: $_model.CreateUserDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserDeliveryTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUserDeliveryTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.httpDelivery)) {
      request.httpDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.httpDelivery, "HttpDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.kafkaDelivery)) {
      request.kafkaDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaDelivery, "KafkaDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.ossDelivery)) {
      request.ossDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ossDelivery, "OssDelivery", "json");
    }

    if (!$dara.isNull(tmpReq.s3Delivery)) {
      request.s3DeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.s3Delivery, "S3Delivery", "json");
    }

    if (!$dara.isNull(tmpReq.slsDelivery)) {
      request.slsDeliveryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsDelivery, "SlsDelivery", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.dataCenter)) {
      body["DataCenter"] = request.dataCenter;
    }

    if (!$dara.isNull(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!$dara.isNull(request.details)) {
      body["Details"] = request.details;
    }

    if (!$dara.isNull(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!$dara.isNull(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.httpDeliveryShrink)) {
      body["HttpDelivery"] = request.httpDeliveryShrink;
    }

    if (!$dara.isNull(request.kafkaDeliveryShrink)) {
      body["KafkaDelivery"] = request.kafkaDeliveryShrink;
    }

    if (!$dara.isNull(request.ossDeliveryShrink)) {
      body["OssDelivery"] = request.ossDeliveryShrink;
    }

    if (!$dara.isNull(request.s3DeliveryShrink)) {
      body["S3Delivery"] = request.s3DeliveryShrink;
    }

    if (!$dara.isNull(request.slsDeliveryShrink)) {
      body["SlsDelivery"] = request.slsDeliveryShrink;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserDeliveryTaskResponse({}));
  }

  /**
   * Creates a log delivery task to ship logs to the specified destination.
   * 
   * @remarks
   * This API operation allows you to deliver logs to destinations such as Simple Log Service (SLS), HTTP servers, Object Storage Service (OSS), Amazon Simple Storage Service (S3), and Kafka. You can specify the task name, log fields to deliver, data center, discard rate, delivery type, and delivery details.
   * *   **Field filtering**: Use the `FieldName` parameter to specify log fields to deliver.
   * *   **Filtering rules**: Use the `FilterRules` parameter to pre-process and filter log data.
   * *   **Diverse delivery destinations**: Logs can be delivered to different destinations. Configuration parameters vary with delivery destinations.
   * ## [](#)Precautions
   * *   Make sure that you have sufficient permissions to perform delivery tasks.
   * *   If you enable encryption or authentication, properly configure corresponding parameters.
   * *   Verify the syntax of `FilterRules` to make sure that filtering logic works as expected.
   * *   Specify advanced settings such as the number of retries and timeout period based on your needs to have optimal delivery efficiency and stability.
   * 
   * @param request - CreateUserDeliveryTaskRequest
   * @returns CreateUserDeliveryTaskResponse
   */
  async createUserDeliveryTask(request: $_model.CreateUserDeliveryTaskRequest): Promise<$_model.CreateUserDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Create WAF Rule
   * 
   * @param tmpReq - CreateWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWafRuleResponse
   */
  async createWafRuleWithOptions(tmpReq: $_model.CreateWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWafRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWafRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.phase)) {
      body["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.rulesetId)) {
      body["RulesetId"] = request.rulesetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWafRuleResponse({}));
  }

  /**
   * Create WAF Rule
   * 
   * @param request - CreateWafRuleRequest
   * @returns CreateWafRuleResponse
   */
  async createWafRule(request: $_model.CreateWafRuleRequest): Promise<$_model.CreateWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWafRuleWithOptions(request, runtime);
  }

  /**
   * Create WAF Ruleset
   * 
   * @param request - CreateWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWafRulesetResponse
   */
  async createWafRulesetWithOptions(request: $_model.CreateWafRulesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWafRulesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.phase)) {
      body["Phase"] = request.phase;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWafRulesetResponse>(await this.callApi(params, req, runtime), new $_model.CreateWafRulesetResponse({}));
  }

  /**
   * Create WAF Ruleset
   * 
   * @param request - CreateWafRulesetRequest
   * @returns CreateWafRulesetResponse
   */
  async createWafRuleset(request: $_model.CreateWafRulesetRequest): Promise<$_model.CreateWafRulesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWafRulesetWithOptions(request, runtime);
  }

  /**
   * Creates a waiting room for a website.
   * 
   * @param tmpReq - CreateWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomResponse
   */
  async createWaitingRoomWithOptions(tmpReq: $_model.CreateWaitingRoomRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWaitingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWaitingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostNameAndPath)) {
      request.hostNameAndPathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostNameAndPath, "HostNameAndPath", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cookieName)) {
      query["CookieName"] = request.cookieName;
    }

    if (!$dara.isNull(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.hostNameAndPathShrink)) {
      query["HostNameAndPath"] = request.hostNameAndPathShrink;
    }

    if (!$dara.isNull(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!$dara.isNull(request.queueAllEnable)) {
      query["QueueAllEnable"] = request.queueAllEnable;
    }

    if (!$dara.isNull(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!$dara.isNull(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!$dara.isNull(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!$dara.isNull(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWaitingRoomResponse>(await this.callApi(params, req, runtime), new $_model.CreateWaitingRoomResponse({}));
  }

  /**
   * Creates a waiting room for a website.
   * 
   * @param request - CreateWaitingRoomRequest
   * @returns CreateWaitingRoomResponse
   */
  async createWaitingRoom(request: $_model.CreateWaitingRoomRequest): Promise<$_model.CreateWaitingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWaitingRoomWithOptions(request, runtime);
  }

  /**
   * Creates a waiting room event.
   * 
   * @param request - CreateWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomEventResponse
   */
  async createWaitingRoomEventWithOptions(request: $_model.CreateWaitingRoomEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWaitingRoomEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!$dara.isNull(request.preQueueEnable)) {
      query["PreQueueEnable"] = request.preQueueEnable;
    }

    if (!$dara.isNull(request.preQueueStartTime)) {
      query["PreQueueStartTime"] = request.preQueueStartTime;
    }

    if (!$dara.isNull(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!$dara.isNull(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!$dara.isNull(request.randomPreQueueEnable)) {
      query["RandomPreQueueEnable"] = request.randomPreQueueEnable;
    }

    if (!$dara.isNull(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!$dara.isNull(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    if (!$dara.isNull(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new $_model.CreateWaitingRoomEventResponse({}));
  }

  /**
   * Creates a waiting room event.
   * 
   * @param request - CreateWaitingRoomEventRequest
   * @returns CreateWaitingRoomEventResponse
   */
  async createWaitingRoomEvent(request: $_model.CreateWaitingRoomEventRequest): Promise<$_model.CreateWaitingRoomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * Create Waiting Room Rule
   * 
   * @param request - CreateWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaitingRoomRuleResponse
   */
  async createWaitingRoomRuleWithOptions(request: $_model.CreateWaitingRoomRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWaitingRoomRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWaitingRoomRuleResponse({}));
  }

  /**
   * Create Waiting Room Rule
   * 
   * @param request - CreateWaitingRoomRuleRequest
   * @returns CreateWaitingRoomRuleResponse
   */
  async createWaitingRoomRule(request: $_model.CreateWaitingRoomRuleRequest): Promise<$_model.CreateWaitingRoomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * Disables version management for a website.
   * 
   * @remarks
   * You can disable version management only when the default environment and version 0 exist.
   * 
   * @param request - DeactivateVersionManagementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactivateVersionManagementResponse
   */
  async deactivateVersionManagementWithOptions(request: $_model.DeactivateVersionManagementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeactivateVersionManagementResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactivateVersionManagement",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactivateVersionManagementResponse>(await this.callApi(params, req, runtime), new $_model.DeactivateVersionManagementResponse({}));
  }

  /**
   * Disables version management for a website.
   * 
   * @remarks
   * You can disable version management only when the default environment and version 0 exist.
   * 
   * @param request - DeactivateVersionManagementRequest
   * @returns DeactivateVersionManagementResponse
   */
  async deactivateVersionManagement(request: $_model.DeactivateVersionManagementRequest): Promise<$_model.DeactivateVersionManagementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deactivateVersionManagementWithOptions(request, runtime);
  }

  /**
   * Delete Cache Configuration
   * 
   * @param request - DeleteCacheRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCacheRuleResponse
   */
  async deleteCacheRuleWithOptions(request: $_model.DeleteCacheRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCacheRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCacheRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCacheRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCacheRuleResponse({}));
  }

  /**
   * Delete Cache Configuration
   * 
   * @param request - DeleteCacheRuleRequest
   * @returns DeleteCacheRuleResponse
   */
  async deleteCacheRule(request: $_model.DeleteCacheRuleRequest): Promise<$_model.DeleteCacheRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCacheRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate for a website.
   * 
   * @param request - DeleteCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCertificateResponse
   */
  async deleteCertificateWithOptions(request: $_model.DeleteCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCertificateResponse({}));
  }

  /**
   * Deletes a certificate for a website.
   * 
   * @param request - DeleteCertificateRequest
   * @returns DeleteCertificateResponse
   */
  async deleteCertificate(request: $_model.DeleteCertificateRequest): Promise<$_model.DeleteCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a client CA certificate.
   * 
   * @param request - DeleteClientCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientCaCertificateResponse
   */
  async deleteClientCaCertificateWithOptions(request: $_model.DeleteClientCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientCaCertificateResponse({}));
  }

  /**
   * Deletes a client CA certificate.
   * 
   * @param request - DeleteClientCaCertificateRequest
   * @returns DeleteClientCaCertificateResponse
   */
  async deleteClientCaCertificate(request: $_model.DeleteClientCaCertificateRequest): Promise<$_model.DeleteClientCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientCaCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a revoked client certificate.
   * 
   * @param request - DeleteClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificateWithOptions(request: $_model.DeleteClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientCertificateResponse({}));
  }

  /**
   * Deletes a revoked client certificate.
   * 
   * @param request - DeleteClientCertificateRequest
   * @returns DeleteClientCertificateResponse
   */
  async deleteClientCertificate(request: $_model.DeleteClientCertificateRequest): Promise<$_model.DeleteClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientCertificateWithOptions(request, runtime);
  }

  /**
   * Delete compression rule
   * 
   * @param request - DeleteCompressionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCompressionRuleResponse
   */
  async deleteCompressionRuleWithOptions(request: $_model.DeleteCompressionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCompressionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCompressionRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCompressionRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCompressionRuleResponse({}));
  }

  /**
   * Delete compression rule
   * 
   * @param request - DeleteCompressionRuleRequest
   * @returns DeleteCompressionRuleResponse
   */
  async deleteCompressionRule(request: $_model.DeleteCompressionRuleRequest): Promise<$_model.DeleteCompressionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCompressionRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a scenario-specific custom policy.
   * 
   * @param request - DeleteCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomScenePolicyResponse
   */
  async deleteCustomScenePolicyWithOptions(request: $_model.DeleteCustomScenePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomScenePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomScenePolicyResponse({}));
  }

  /**
   * Deletes a scenario-specific custom policy.
   * 
   * @param request - DeleteCustomScenePolicyRequest
   * @returns DeleteCustomScenePolicyResponse
   */
  async deleteCustomScenePolicy(request: $_model.DeleteCustomScenePolicyRequest): Promise<$_model.DeleteCustomScenePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes a containerized application.
   * 
   * @param request - DeleteEdgeContainerAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEdgeContainerAppResponse
   */
  async deleteEdgeContainerAppWithOptions(request: $_model.DeleteEdgeContainerAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEdgeContainerAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEdgeContainerApp",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEdgeContainerAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEdgeContainerAppResponse({}));
  }

  /**
   * Deletes a containerized application.
   * 
   * @param request - DeleteEdgeContainerAppRequest
   * @returns DeleteEdgeContainerAppResponse
   */
  async deleteEdgeContainerApp(request: $_model.DeleteEdgeContainerAppRequest): Promise<$_model.DeleteEdgeContainerAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEdgeContainerAppWithOptions(request, runtime);
  }

  /**
   * Disassociates a domain name from a containerized application. After the dissociation, you can no longer use the domain name to access the containerized application.
   * 
   * @param request - DeleteEdgeContainerAppRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEdgeContainerAppRecordResponse
   */
  async deleteEdgeContainerAppRecordWithOptions(request: $_model.DeleteEdgeContainerAppRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEdgeContainerAppRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.recordName)) {
      body["RecordName"] = request.recordName;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEdgeContainerAppRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEdgeContainerAppRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEdgeContainerAppRecordResponse({}));
  }

  /**
   * Disassociates a domain name from a containerized application. After the dissociation, you can no longer use the domain name to access the containerized application.
   * 
   * @param request - DeleteEdgeContainerAppRecordRequest
   * @returns DeleteEdgeContainerAppRecordResponse
   */
  async deleteEdgeContainerAppRecord(request: $_model.DeleteEdgeContainerAppRecordRequest): Promise<$_model.DeleteEdgeContainerAppRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEdgeContainerAppRecordWithOptions(request, runtime);
  }

  /**
   * Deletes a version of a containerized application.
   * 
   * @param request - DeleteEdgeContainerAppVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEdgeContainerAppVersionResponse
   */
  async deleteEdgeContainerAppVersionWithOptions(request: $_model.DeleteEdgeContainerAppVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEdgeContainerAppVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEdgeContainerAppVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEdgeContainerAppVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEdgeContainerAppVersionResponse({}));
  }

  /**
   * Deletes a version of a containerized application.
   * 
   * @param request - DeleteEdgeContainerAppVersionRequest
   * @returns DeleteEdgeContainerAppVersionResponse
   */
  async deleteEdgeContainerAppVersion(request: $_model.DeleteEdgeContainerAppVersionRequest): Promise<$_model.DeleteEdgeContainerAppVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEdgeContainerAppVersionWithOptions(request, runtime);
  }

  /**
   * Deletes the configuration of modifying HTTP request headers for a website.
   * 
   * @param request - DeleteHttpRequestHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpRequestHeaderModificationRuleResponse
   */
  async deleteHttpRequestHeaderModificationRuleWithOptions(request: $_model.DeleteHttpRequestHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpRequestHeaderModificationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpRequestHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpRequestHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpRequestHeaderModificationRuleResponse({}));
  }

  /**
   * Deletes the configuration of modifying HTTP request headers for a website.
   * 
   * @param request - DeleteHttpRequestHeaderModificationRuleRequest
   * @returns DeleteHttpRequestHeaderModificationRuleResponse
   */
  async deleteHttpRequestHeaderModificationRule(request: $_model.DeleteHttpRequestHeaderModificationRuleRequest): Promise<$_model.DeleteHttpRequestHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHttpRequestHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Deletes the configuration of modifying HTTP response headers for a website.
   * 
   * @param request - DeleteHttpResponseHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpResponseHeaderModificationRuleResponse
   */
  async deleteHttpResponseHeaderModificationRuleWithOptions(request: $_model.DeleteHttpResponseHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpResponseHeaderModificationRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpResponseHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpResponseHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpResponseHeaderModificationRuleResponse({}));
  }

  /**
   * Deletes the configuration of modifying HTTP response headers for a website.
   * 
   * @param request - DeleteHttpResponseHeaderModificationRuleRequest
   * @returns DeleteHttpResponseHeaderModificationRuleResponse
   */
  async deleteHttpResponseHeaderModificationRule(request: $_model.DeleteHttpResponseHeaderModificationRuleRequest): Promise<$_model.DeleteHttpResponseHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHttpResponseHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Delete HTTPS Application Configuration
   * 
   * @param request - DeleteHttpsApplicationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpsApplicationConfigurationResponse
   */
  async deleteHttpsApplicationConfigurationWithOptions(request: $_model.DeleteHttpsApplicationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpsApplicationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpsApplicationConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpsApplicationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpsApplicationConfigurationResponse({}));
  }

  /**
   * Delete HTTPS Application Configuration
   * 
   * @param request - DeleteHttpsApplicationConfigurationRequest
   * @returns DeleteHttpsApplicationConfigurationResponse
   */
  async deleteHttpsApplicationConfiguration(request: $_model.DeleteHttpsApplicationConfigurationRequest): Promise<$_model.DeleteHttpsApplicationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHttpsApplicationConfigurationWithOptions(request, runtime);
  }

  /**
   * Delete HTTPS Basic Configuration
   * 
   * @param request - DeleteHttpsBasicConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHttpsBasicConfigurationResponse
   */
  async deleteHttpsBasicConfigurationWithOptions(request: $_model.DeleteHttpsBasicConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHttpsBasicConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHttpsBasicConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHttpsBasicConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHttpsBasicConfigurationResponse({}));
  }

  /**
   * Delete HTTPS Basic Configuration
   * 
   * @param request - DeleteHttpsBasicConfigurationRequest
   * @returns DeleteHttpsBasicConfigurationResponse
   */
  async deleteHttpsBasicConfiguration(request: $_model.DeleteHttpsBasicConfigurationRequest): Promise<$_model.DeleteHttpsBasicConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHttpsBasicConfigurationWithOptions(request, runtime);
  }

  /**
   * Delete Site Image Transformation Configuration
   * 
   * @param request - DeleteImageTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImageTransformResponse
   */
  async deleteImageTransformWithOptions(request: $_model.DeleteImageTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImageTransformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImageTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImageTransformResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImageTransformResponse({}));
  }

  /**
   * Delete Site Image Transformation Configuration
   * 
   * @param request - DeleteImageTransformRequest
   * @returns DeleteImageTransformResponse
   */
  async deleteImageTransform(request: $_model.DeleteImageTransformRequest): Promise<$_model.DeleteImageTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImageTransformWithOptions(request, runtime);
  }

  /**
   * Deletes a key-value pair from a namespace.
   * 
   * @param request - DeleteKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKvResponse
   */
  async deleteKvWithOptions(request: $_model.DeleteKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKvResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKvResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKvResponse({}));
  }

  /**
   * Deletes a key-value pair from a namespace.
   * 
   * @param request - DeleteKvRequest
   * @returns DeleteKvResponse
   */
  async deleteKv(request: $_model.DeleteKvRequest): Promise<$_model.DeleteKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKvWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace from an Alibaba Cloud account.
   * 
   * @param request - DeleteKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKvNamespaceResponse
   */
  async deleteKvNamespaceWithOptions(request: $_model.DeleteKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKvNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKvNamespaceResponse({}));
  }

  /**
   * Deletes a namespace from an Alibaba Cloud account.
   * 
   * @param request - DeleteKvNamespaceRequest
   * @returns DeleteKvNamespaceResponse
   */
  async deleteKvNamespace(request: $_model.DeleteKvNamespaceRequest): Promise<$_model.DeleteKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKvNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a custom list that is no longer needed.
   * 
   * @param request - DeleteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListResponse
   */
  async deleteListWithOptions(request: $_model.DeleteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteListResponse({}));
  }

  /**
   * Deletes a custom list that is no longer needed.
   * 
   * @param request - DeleteListRequest
   * @returns DeleteListResponse
   */
  async deleteList(request: $_model.DeleteListRequest): Promise<$_model.DeleteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteListWithOptions(request, runtime);
  }

  /**
   * Delete Load Balancer
   * 
   * @remarks
   * Delete a load balancer by its ID, only one can be deleted at a time.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: $_model.DeleteLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancer",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoadBalancerResponse({}));
  }

  /**
   * Delete Load Balancer
   * 
   * @remarks
   * Delete a load balancer by its ID, only one can be deleted at a time.
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: $_model.DeleteLoadBalancerRequest): Promise<$_model.DeleteLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Delete Network Optimization Configuration
   * 
   * @param request - DeleteNetworkOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkOptimizationResponse
   */
  async deleteNetworkOptimizationWithOptions(request: $_model.DeleteNetworkOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetworkOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkOptimizationResponse({}));
  }

  /**
   * Delete Network Optimization Configuration
   * 
   * @param request - DeleteNetworkOptimizationRequest
   * @returns DeleteNetworkOptimizationResponse
   */
  async deleteNetworkOptimization(request: $_model.DeleteNetworkOptimizationRequest): Promise<$_model.DeleteNetworkOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkOptimizationWithOptions(request, runtime);
  }

  /**
   * 删除源服务器CA证书
   * 
   * @param request - DeleteOriginCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOriginCaCertificateResponse
   */
  async deleteOriginCaCertificateWithOptions(request: $_model.DeleteOriginCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOriginCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOriginCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOriginCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOriginCaCertificateResponse({}));
  }

  /**
   * 删除源服务器CA证书
   * 
   * @param request - DeleteOriginCaCertificateRequest
   * @returns DeleteOriginCaCertificateResponse
   */
  async deleteOriginCaCertificate(request: $_model.DeleteOriginCaCertificateRequest): Promise<$_model.DeleteOriginCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOriginCaCertificateWithOptions(request, runtime);
  }

  /**
   * 删除域名回源客户端证书
   * 
   * @param request - DeleteOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOriginClientCertificateResponse
   */
  async deleteOriginClientCertificateWithOptions(request: $_model.DeleteOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOriginClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOriginClientCertificateResponse({}));
  }

  /**
   * 删除域名回源客户端证书
   * 
   * @param request - DeleteOriginClientCertificateRequest
   * @returns DeleteOriginClientCertificateResponse
   */
  async deleteOriginClientCertificate(request: $_model.DeleteOriginClientCertificateRequest): Promise<$_model.DeleteOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * Delete Origin Address Pool
   * 
   * @param request - DeleteOriginPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOriginPoolResponse
   */
  async deleteOriginPoolWithOptions(request: $_model.DeleteOriginPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOriginPoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOriginPool",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOriginPoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOriginPoolResponse({}));
  }

  /**
   * Delete Origin Address Pool
   * 
   * @param request - DeleteOriginPoolRequest
   * @returns DeleteOriginPoolResponse
   */
  async deleteOriginPool(request: $_model.DeleteOriginPoolRequest): Promise<$_model.DeleteOriginPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOriginPoolWithOptions(request, runtime);
  }

  /**
   * Disables origin protection.
   * 
   * @param request - DeleteOriginProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOriginProtectionResponse
   */
  async deleteOriginProtectionWithOptions(request: $_model.DeleteOriginProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOriginProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOriginProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOriginProtectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOriginProtectionResponse({}));
  }

  /**
   * Disables origin protection.
   * 
   * @param request - DeleteOriginProtectionRequest
   * @returns DeleteOriginProtectionResponse
   */
  async deleteOriginProtection(request: $_model.DeleteOriginProtectionRequest): Promise<$_model.DeleteOriginProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOriginProtectionWithOptions(request, runtime);
  }

  /**
   * Delete Origin Rule Configuration
   * 
   * @param request - DeleteOriginRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOriginRuleResponse
   */
  async deleteOriginRuleWithOptions(request: $_model.DeleteOriginRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOriginRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOriginRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOriginRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOriginRuleResponse({}));
  }

  /**
   * Delete Origin Rule Configuration
   * 
   * @param request - DeleteOriginRuleRequest
   * @returns DeleteOriginRuleResponse
   */
  async deleteOriginRule(request: $_model.DeleteOriginRuleRequest): Promise<$_model.DeleteOriginRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOriginRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a custom error page that is no longer needed.
   * 
   * @param request - DeletePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePageResponse
   */
  async deletePageWithOptions(request: $_model.DeletePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePageResponse>(await this.callApi(params, req, runtime), new $_model.DeletePageResponse({}));
  }

  /**
   * Deletes a custom error page that is no longer needed.
   * 
   * @param request - DeletePageRequest
   * @returns DeletePageResponse
   */
  async deletePage(request: $_model.DeletePageRequest): Promise<$_model.DeletePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePageWithOptions(request, runtime);
  }

  /**
   * Deletes a DNS record of a website based on the specified RecordId.
   * 
   * @param request - DeleteRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecordResponse
   */
  async deleteRecordWithOptions(request: $_model.DeleteRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecordResponse({}));
  }

  /**
   * Deletes a DNS record of a website based on the specified RecordId.
   * 
   * @param request - DeleteRecordRequest
   * @returns DeleteRecordResponse
   */
  async deleteRecord(request: $_model.DeleteRecordRequest): Promise<$_model.DeleteRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecordWithOptions(request, runtime);
  }

  /**
   * Deletes a URL redirect rule for a website.
   * 
   * @param request - DeleteRedirectRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRedirectRuleResponse
   */
  async deleteRedirectRuleWithOptions(request: $_model.DeleteRedirectRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRedirectRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRedirectRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRedirectRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRedirectRuleResponse({}));
  }

  /**
   * Deletes a URL redirect rule for a website.
   * 
   * @param request - DeleteRedirectRuleRequest
   * @returns DeleteRedirectRuleResponse
   */
  async deleteRedirectRule(request: $_model.DeleteRedirectRuleRequest): Promise<$_model.DeleteRedirectRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRedirectRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a URL rewrite rule for a website.
   * 
   * @param request - DeleteRewriteUrlRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRewriteUrlRuleResponse
   */
  async deleteRewriteUrlRuleWithOptions(request: $_model.DeleteRewriteUrlRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRewriteUrlRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRewriteUrlRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRewriteUrlRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRewriteUrlRuleResponse({}));
  }

  /**
   * Deletes a URL rewrite rule for a website.
   * 
   * @param request - DeleteRewriteUrlRuleRequest
   * @returns DeleteRewriteUrlRuleResponse
   */
  async deleteRewriteUrlRule(request: $_model.DeleteRewriteUrlRuleRequest): Promise<$_model.DeleteRewriteUrlRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRewriteUrlRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a routine in Edge Routine.
   * 
   * @param request - DeleteRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineResponse
   */
  async deleteRoutineWithOptions(request: $_model.DeleteRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutine",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineResponse({}));
  }

  /**
   * Deletes a routine in Edge Routine.
   * 
   * @param request - DeleteRoutineRequest
   * @returns DeleteRoutineResponse
   */
  async deleteRoutine(request: $_model.DeleteRoutineRequest): Promise<$_model.DeleteRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineWithOptions(request, runtime);
  }

  /**
   * Deletes a code version of a routine.
   * 
   * @param request - DeleteRoutineCodeVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineCodeVersionResponse
   */
  async deleteRoutineCodeVersionWithOptions(request: $_model.DeleteRoutineCodeVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineCodeVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeVersion)) {
      body["CodeVersion"] = request.codeVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutineCodeVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineCodeVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineCodeVersionResponse({}));
  }

  /**
   * Deletes a code version of a routine.
   * 
   * @param request - DeleteRoutineCodeVersionRequest
   * @returns DeleteRoutineCodeVersionResponse
   */
  async deleteRoutineCodeVersion(request: $_model.DeleteRoutineCodeVersionRequest): Promise<$_model.DeleteRoutineCodeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineCodeVersionWithOptions(request, runtime);
  }

  /**
   * Deletes a record that is associated with a routine.
   * 
   * @param request - DeleteRoutineRelatedRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineRelatedRecordResponse
   */
  async deleteRoutineRelatedRecordWithOptions(request: $_model.DeleteRoutineRelatedRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineRelatedRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.recordId)) {
      body["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.recordName)) {
      body["RecordName"] = request.recordName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutineRelatedRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineRelatedRecordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineRelatedRecordResponse({}));
  }

  /**
   * Deletes a record that is associated with a routine.
   * 
   * @param request - DeleteRoutineRelatedRecordRequest
   * @returns DeleteRoutineRelatedRecordResponse
   */
  async deleteRoutineRelatedRecord(request: $_model.DeleteRoutineRelatedRecordRequest): Promise<$_model.DeleteRoutineRelatedRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineRelatedRecordWithOptions(request, runtime);
  }

  /**
   * 删除边缘函数路由配置
   * 
   * @param request - DeleteRoutineRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoutineRouteResponse
   */
  async deleteRoutineRouteWithOptions(request: $_model.DeleteRoutineRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoutineRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoutineRoute",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoutineRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoutineRouteResponse({}));
  }

  /**
   * 删除边缘函数路由配置
   * 
   * @param request - DeleteRoutineRouteRequest
   * @returns DeleteRoutineRouteResponse
   */
  async deleteRoutineRoute(request: $_model.DeleteRoutineRouteRequest): Promise<$_model.DeleteRoutineRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRoutineRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - DeleteScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPreloadExecutionResponse
   */
  async deleteScheduledPreloadExecutionWithOptions(request: $_model.DeleteScheduledPreloadExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledPreloadExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledPreloadExecutionResponse({}));
  }

  /**
   * Deletes a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - DeleteScheduledPreloadExecutionRequest
   * @returns DeleteScheduledPreloadExecutionResponse
   */
  async deleteScheduledPreloadExecution(request: $_model.DeleteScheduledPreloadExecutionRequest): Promise<$_model.DeleteScheduledPreloadExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * Deletes a specified scheduled prefetch task based on the task ID.
   * 
   * @param request - DeleteScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPreloadJobResponse
   */
  async deleteScheduledPreloadJobWithOptions(request: $_model.DeleteScheduledPreloadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledPreloadJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledPreloadJobResponse({}));
  }

  /**
   * Deletes a specified scheduled prefetch task based on the task ID.
   * 
   * @param request - DeleteScheduledPreloadJobRequest
   * @returns DeleteScheduledPreloadJobResponse
   */
  async deleteScheduledPreloadJob(request: $_model.DeleteScheduledPreloadJobRequest): Promise<$_model.DeleteScheduledPreloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * Deletes a website based on the specified website ID.
   * 
   * @param request - DeleteSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteResponse
   */
  async deleteSiteWithOptions(request: $_model.DeleteSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSiteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSiteResponse({}));
  }

  /**
   * Deletes a website based on the specified website ID.
   * 
   * @param request - DeleteSiteRequest
   * @returns DeleteSiteResponse
   */
  async deleteSite(request: $_model.DeleteSiteRequest): Promise<$_model.DeleteSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSiteWithOptions(request, runtime);
  }

  /**
   * Deletes a real-time log delivery task.
   * 
   * @param request - DeleteSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteDeliveryTaskResponse
   */
  async deleteSiteDeliveryTaskWithOptions(request: $_model.DeleteSiteDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSiteDeliveryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSiteDeliveryTaskResponse({}));
  }

  /**
   * Deletes a real-time log delivery task.
   * 
   * @param request - DeleteSiteDeliveryTaskRequest
   * @returns DeleteSiteDeliveryTaskResponse
   */
  async deleteSiteDeliveryTask(request: $_model.DeleteSiteDeliveryTaskRequest): Promise<$_model.DeleteSiteDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * 删除站点回源客户端证书
   * 
   * @param request - DeleteSiteOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteOriginClientCertificateResponse
   */
  async deleteSiteOriginClientCertificateWithOptions(request: $_model.DeleteSiteOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSiteOriginClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSiteOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSiteOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSiteOriginClientCertificateResponse({}));
  }

  /**
   * 删除站点回源客户端证书
   * 
   * @param request - DeleteSiteOriginClientCertificateRequest
   * @returns DeleteSiteOriginClientCertificateResponse
   */
  async deleteSiteOriginClientCertificate(request: $_model.DeleteSiteOriginClientCertificateRequest): Promise<$_model.DeleteSiteOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSiteOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes a log delivery task from your Alibaba Cloud account.
   * 
   * @remarks
   * *****> 
   * *   Deleted tasks cannot be restored. Proceed with caution.
   * *   To call this operation, you must have an account that has the required permissions.
   * *   The returned `RequestId` value can be used to track the request processing progress and troubleshoot issues.
   * 
   * @param request - DeleteUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDeliveryTaskResponse
   */
  async deleteUserDeliveryTaskWithOptions(request: $_model.DeleteUserDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserDeliveryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserDeliveryTaskResponse({}));
  }

  /**
   * Deletes a log delivery task from your Alibaba Cloud account.
   * 
   * @remarks
   * *****> 
   * *   Deleted tasks cannot be restored. Proceed with caution.
   * *   To call this operation, you must have an account that has the required permissions.
   * *   The returned `RequestId` value can be used to track the request processing progress and troubleshoot issues.
   * 
   * @param request - DeleteUserDeliveryTaskRequest
   * @returns DeleteUserDeliveryTaskResponse
   */
  async deleteUserDeliveryTask(request: $_model.DeleteUserDeliveryTaskRequest): Promise<$_model.DeleteUserDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Delete WAF Rule
   * 
   * @param request - DeleteWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWafRuleResponse
   */
  async deleteWafRuleWithOptions(request: $_model.DeleteWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWafRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWafRuleResponse({}));
  }

  /**
   * Delete WAF Rule
   * 
   * @param request - DeleteWafRuleRequest
   * @returns DeleteWafRuleResponse
   */
  async deleteWafRule(request: $_model.DeleteWafRuleRequest): Promise<$_model.DeleteWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWafRuleWithOptions(request, runtime);
  }

  /**
   * Delete WAF Ruleset
   * 
   * @param request - DeleteWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWafRulesetResponse
   */
  async deleteWafRulesetWithOptions(request: $_model.DeleteWafRulesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWafRulesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWafRulesetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWafRulesetResponse({}));
  }

  /**
   * Delete WAF Ruleset
   * 
   * @param request - DeleteWafRulesetRequest
   * @returns DeleteWafRulesetResponse
   */
  async deleteWafRuleset(request: $_model.DeleteWafRulesetRequest): Promise<$_model.DeleteWafRulesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWafRulesetWithOptions(request, runtime);
  }

  /**
   * Deletes a waiting room.
   * 
   * @param request - DeleteWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomResponse
   */
  async deleteWaitingRoomWithOptions(request: $_model.DeleteWaitingRoomRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWaitingRoomResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWaitingRoomResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWaitingRoomResponse({}));
  }

  /**
   * Deletes a waiting room.
   * 
   * @param request - DeleteWaitingRoomRequest
   * @returns DeleteWaitingRoomResponse
   */
  async deleteWaitingRoom(request: $_model.DeleteWaitingRoomRequest): Promise<$_model.DeleteWaitingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWaitingRoomWithOptions(request, runtime);
  }

  /**
   * Deletes a waiting room event.
   * 
   * @param request - DeleteWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomEventResponse
   */
  async deleteWaitingRoomEventWithOptions(request: $_model.DeleteWaitingRoomEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWaitingRoomEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.waitingRoomEventId)) {
      query["WaitingRoomEventId"] = request.waitingRoomEventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWaitingRoomEventResponse({}));
  }

  /**
   * Deletes a waiting room event.
   * 
   * @param request - DeleteWaitingRoomEventRequest
   * @returns DeleteWaitingRoomEventResponse
   */
  async deleteWaitingRoomEvent(request: $_model.DeleteWaitingRoomEventRequest): Promise<$_model.DeleteWaitingRoomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * Deletes a waiting room bypass rule.
   * 
   * @param request - DeleteWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaitingRoomRuleResponse
   */
  async deleteWaitingRoomRuleWithOptions(request: $_model.DeleteWaitingRoomRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWaitingRoomRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.waitingRoomRuleId)) {
      query["WaitingRoomRuleId"] = request.waitingRoomRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWaitingRoomRuleResponse({}));
  }

  /**
   * Deletes a waiting room bypass rule.
   * 
   * @param request - DeleteWaitingRoomRuleRequest
   * @returns DeleteWaitingRoomRuleResponse
   */
  async deleteWaitingRoomRule(request: $_model.DeleteWaitingRoomRuleRequest): Promise<$_model.DeleteWaitingRoomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a scenario-specific policy.
   * 
   * @param request - DescribeCustomScenePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomScenePoliciesResponse
   */
  async describeCustomScenePoliciesWithOptions(request: $_model.DescribeCustomScenePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomScenePoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomScenePolicies",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomScenePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomScenePoliciesResponse({}));
  }

  /**
   * Queries the configurations of a scenario-specific policy.
   * 
   * @param request - DescribeCustomScenePoliciesRequest
   * @returns DescribeCustomScenePoliciesResponse
   */
  async describeCustomScenePolicies(request: $_model.DescribeCustomScenePoliciesRequest): Promise<$_model.DescribeCustomScenePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomScenePoliciesWithOptions(request, runtime);
  }

  /**
   * Queries DDoS attack events.
   * 
   * @param request - DescribeDDoSAllEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSAllEventListResponse
   */
  async describeDDoSAllEventListWithOptions(request: $_model.DescribeDDoSAllEventListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSAllEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSAllEventList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSAllEventListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSAllEventListResponse({}));
  }

  /**
   * Queries DDoS attack events.
   * 
   * @param request - DescribeDDoSAllEventListRequest
   * @returns DescribeDDoSAllEventListResponse
   */
  async describeDDoSAllEventList(request: $_model.DescribeDDoSAllEventListRequest): Promise<$_model.DescribeDDoSAllEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSAllEventListWithOptions(request, runtime);
  }

  /**
   * Query DCDN DDoS user bps and pps data
   * 
   * @param request - DescribeDDoSBpsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSBpsListResponse
   */
  async describeDDoSBpsListWithOptions(request: $_model.DescribeDDoSBpsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSBpsListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSBpsList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSBpsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSBpsListResponse({}));
  }

  /**
   * Query DCDN DDoS user bps and pps data
   * 
   * @param request - DescribeDDoSBpsListRequest
   * @returns DescribeDDoSBpsListResponse
   */
  async describeDDoSBpsList(request: $_model.DescribeDDoSBpsListRequest): Promise<$_model.DescribeDDoSBpsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSBpsListWithOptions(request, runtime);
  }

  /**
   * DDoS Analysis Layer 7 QPS Trend Chart API
   * 
   * @param request - DescribeDDoSL7QpsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDDoSL7QpsListResponse
   */
  async describeDDoSL7QpsListWithOptions(request: $_model.DescribeDDoSL7QpsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDDoSL7QpsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDDoSL7QpsList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDDoSL7QpsListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDDoSL7QpsListResponse({}));
  }

  /**
   * DDoS Analysis Layer 7 QPS Trend Chart API
   * 
   * @param request - DescribeDDoSL7QpsListRequest
   * @returns DescribeDDoSL7QpsListResponse
   */
  async describeDDoSL7QpsList(request: $_model.DescribeDDoSL7QpsListRequest): Promise<$_model.DescribeDDoSL7QpsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDDoSL7QpsListWithOptions(request, runtime);
  }

  /**
   * 将天眼提供给XCDN边缘容器的监控OpenAPI适配成青蓝的OpenAPI
   * 
   * @param request - DescribeEdgeContainerAppStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeContainerAppStatsResponse
   */
  async describeEdgeContainerAppStatsWithOptions(request: $_model.DescribeEdgeContainerAppStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeContainerAppStatsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeContainerAppStats",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeContainerAppStatsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeContainerAppStatsResponse({}));
  }

  /**
   * 将天眼提供给XCDN边缘容器的监控OpenAPI适配成青蓝的OpenAPI
   * 
   * @param request - DescribeEdgeContainerAppStatsRequest
   * @returns DescribeEdgeContainerAppStatsResponse
   */
  async describeEdgeContainerAppStats(request: $_model.DescribeEdgeContainerAppStatsRequest): Promise<$_model.DescribeEdgeContainerAppStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEdgeContainerAppStatsWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of smart HTTP DDoS protection for a website.
   * 
   * @param request - DescribeHttpDDoSAttackIntelligentProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHttpDDoSAttackIntelligentProtectionResponse
   */
  async describeHttpDDoSAttackIntelligentProtectionWithOptions(request: $_model.DescribeHttpDDoSAttackIntelligentProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHttpDDoSAttackIntelligentProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHttpDDoSAttackIntelligentProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHttpDDoSAttackIntelligentProtectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHttpDDoSAttackIntelligentProtectionResponse({}));
  }

  /**
   * Queries the configuration of smart HTTP DDoS protection for a website.
   * 
   * @param request - DescribeHttpDDoSAttackIntelligentProtectionRequest
   * @returns DescribeHttpDDoSAttackIntelligentProtectionResponse
   */
  async describeHttpDDoSAttackIntelligentProtection(request: $_model.DescribeHttpDDoSAttackIntelligentProtectionRequest): Promise<$_model.DescribeHttpDDoSAttackIntelligentProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHttpDDoSAttackIntelligentProtectionWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of HTTP DDoS attack protection.
   * 
   * @param request - DescribeHttpDDoSAttackProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHttpDDoSAttackProtectionResponse
   */
  async describeHttpDDoSAttackProtectionWithOptions(request: $_model.DescribeHttpDDoSAttackProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHttpDDoSAttackProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHttpDDoSAttackProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHttpDDoSAttackProtectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHttpDDoSAttackProtectionResponse({}));
  }

  /**
   * Queries the configurations of HTTP DDoS attack protection.
   * 
   * @param request - DescribeHttpDDoSAttackProtectionRequest
   * @returns DescribeHttpDDoSAttackProtectionResponse
   */
  async describeHttpDDoSAttackProtection(request: $_model.DescribeHttpDDoSAttackProtectionRequest): Promise<$_model.DescribeHttpDDoSAttackProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHttpDDoSAttackProtectionWithOptions(request, runtime);
  }

  /**
   * Queries whether Edge KV is activated in your Alibaba Cloud account.
   * 
   * @param request - DescribeKvAccountStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKvAccountStatusResponse
   */
  async describeKvAccountStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKvAccountStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKvAccountStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKvAccountStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKvAccountStatusResponse({}));
  }

  /**
   * Queries whether Edge KV is activated in your Alibaba Cloud account.
   * @returns DescribeKvAccountStatusResponse
   */
  async describeKvAccountStatus(): Promise<$_model.DescribeKvAccountStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKvAccountStatusWithOptions(runtime);
  }

  /**
   * Queries the details of prefetch tasks by time, task status, or prefetch URL.
   * 
   * @param request - DescribePreloadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreloadTasksResponse
   */
  async describePreloadTasksWithOptions(request: $_model.DescribePreloadTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreloadTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePreloadTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreloadTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreloadTasksResponse({}));
  }

  /**
   * Queries the details of prefetch tasks by time, task status, or prefetch URL.
   * 
   * @param request - DescribePreloadTasksRequest
   * @returns DescribePreloadTasksResponse
   */
  async describePreloadTasks(request: $_model.DescribePreloadTasksRequest): Promise<$_model.DescribePreloadTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreloadTasksWithOptions(request, runtime);
  }

  /**
   * Queries the details of purge tasks.
   * 
   * @param request - DescribePurgeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePurgeTasksResponse
   */
  async describePurgeTasksWithOptions(request: $_model.DescribePurgeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePurgeTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePurgeTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePurgeTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribePurgeTasksResponse({}));
  }

  /**
   * Queries the details of purge tasks.
   * 
   * @param request - DescribePurgeTasksRequest
   * @returns DescribePurgeTasksResponse
   */
  async describePurgeTasks(request: $_model.DescribePurgeTasksRequest): Promise<$_model.DescribePurgeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePurgeTasksWithOptions(request, runtime);
  }

  /**
   * Queries the status of an instance that uses a plan.
   * 
   * @remarks
   * You can query the status of an instance after you purchase a plan for the instance.
   * 
   * @param request - DescribeRatePlanInstanceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRatePlanInstanceStatusResponse
   */
  async describeRatePlanInstanceStatusWithOptions(request: $_model.DescribeRatePlanInstanceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRatePlanInstanceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRatePlanInstanceStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRatePlanInstanceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRatePlanInstanceStatusResponse({}));
  }

  /**
   * Queries the status of an instance that uses a plan.
   * 
   * @remarks
   * You can query the status of an instance after you purchase a plan for the instance.
   * 
   * @param request - DescribeRatePlanInstanceStatusRequest
   * @returns DescribeRatePlanInstanceStatusResponse
   */
  async describeRatePlanInstanceStatus(request: $_model.DescribeRatePlanInstanceStatusRequest): Promise<$_model.DescribeRatePlanInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRatePlanInstanceStatusWithOptions(request, runtime);
  }

  /**
   * 查询站点离线日志
   * 
   * @param request - DescribeSiteLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteLogsResponse
   */
  async describeSiteLogsWithOptions(request: $_model.DescribeSiteLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteLogs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteLogsResponse({}));
  }

  /**
   * 查询站点离线日志
   * 
   * @param request - DescribeSiteLogsRequest
   * @returns DescribeSiteLogsResponse
   */
  async describeSiteLogs(request: $_model.DescribeSiteLogsRequest): Promise<$_model.DescribeSiteLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteLogsWithOptions(request, runtime);
  }

  /**
   * 获取时序数据
   * 
   * @param tmpReq - DescribeSiteTimeSeriesDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteTimeSeriesDataResponse
   */
  async describeSiteTimeSeriesDataWithOptions(tmpReq: $_model.DescribeSiteTimeSeriesDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteTimeSeriesDataResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSiteTimeSeriesDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fields)) {
      request.fieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fields, "Fields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fieldsShrink)) {
      query["Fields"] = request.fieldsShrink;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteTimeSeriesData",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteTimeSeriesDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteTimeSeriesDataResponse({}));
  }

  /**
   * 获取时序数据
   * 
   * @param request - DescribeSiteTimeSeriesDataRequest
   * @returns DescribeSiteTimeSeriesDataResponse
   */
  async describeSiteTimeSeriesData(request: $_model.DescribeSiteTimeSeriesDataRequest): Promise<$_model.DescribeSiteTimeSeriesDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteTimeSeriesDataWithOptions(request, runtime);
  }

  /**
   * 获取Top数据
   * 
   * @param tmpReq - DescribeSiteTopDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteTopDataResponse
   */
  async describeSiteTopDataWithOptions(tmpReq: $_model.DescribeSiteTopDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteTopDataResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeSiteTopDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fields)) {
      request.fieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fields, "Fields", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.fieldsShrink)) {
      query["Fields"] = request.fieldsShrink;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteTopData",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteTopDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteTopDataResponse({}));
  }

  /**
   * 获取Top数据
   * 
   * @param request - DescribeSiteTopDataRequest
   * @returns DescribeSiteTopDataResponse
   */
  async describeSiteTopData(request: $_model.DescribeSiteTopDataRequest): Promise<$_model.DescribeSiteTopDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteTopDataWithOptions(request, runtime);
  }

  /**
   * Disables a scenario-specific policy.
   * 
   * @param request - DisableCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableCustomScenePolicyResponse
   */
  async disableCustomScenePolicyWithOptions(request: $_model.DisableCustomScenePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableCustomScenePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DisableCustomScenePolicyResponse({}));
  }

  /**
   * Disables a scenario-specific policy.
   * 
   * @param request - DisableCustomScenePolicyRequest
   * @returns DisableCustomScenePolicyResponse
   */
  async disableCustomScenePolicy(request: $_model.DisableCustomScenePolicyRequest): Promise<$_model.DisableCustomScenePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * Edit WAF Configuration for a Site
   * 
   * @param tmpReq - EditSiteWafSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditSiteWafSettingsResponse
   */
  async editSiteWafSettingsWithOptions(tmpReq: $_model.EditSiteWafSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditSiteWafSettingsResponse> {
    tmpReq.validate();
    let request = new $_model.EditSiteWafSettingsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.settingsShrink)) {
      body["Settings"] = request.settingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditSiteWafSettings",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditSiteWafSettingsResponse>(await this.callApi(params, req, runtime), new $_model.EditSiteWafSettingsResponse({}));
  }

  /**
   * Edit WAF Configuration for a Site
   * 
   * @param request - EditSiteWafSettingsRequest
   * @returns EditSiteWafSettingsResponse
   */
  async editSiteWafSettings(request: $_model.EditSiteWafSettingsRequest): Promise<$_model.EditSiteWafSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editSiteWafSettingsWithOptions(request, runtime);
  }

  /**
   * Enables a scenario-specific policy.
   * 
   * @param request - EnableCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableCustomScenePolicyResponse
   */
  async enableCustomScenePolicyWithOptions(request: $_model.EnableCustomScenePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableCustomScenePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new $_model.EnableCustomScenePolicyResponse({}));
  }

  /**
   * Enables a scenario-specific policy.
   * 
   * @param request - EnableCustomScenePolicyRequest
   * @returns EnableCustomScenePolicyResponse
   */
  async enableCustomScenePolicy(request: $_model.EnableCustomScenePolicyRequest): Promise<$_model.EnableCustomScenePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * Exports all DNS records of a website domain as a TXT file.
   * 
   * @param request - ExportRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportRecordsResponse
   */
  async exportRecordsWithOptions(request: $_model.ExportRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ExportRecordsResponse({}));
  }

  /**
   * Exports all DNS records of a website domain as a TXT file.
   * 
   * @param request - ExportRecordsRequest
   * @returns ExportRecordsResponse
   */
  async exportRecords(request: $_model.ExportRecordsRequest): Promise<$_model.ExportRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the available specifications of cache reserve instances.
   * 
   * @param request - GetCacheReserveSpecificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCacheReserveSpecificationResponse
   */
  async getCacheReserveSpecificationWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetCacheReserveSpecificationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetCacheReserveSpecification",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCacheReserveSpecificationResponse>(await this.callApi(params, req, runtime), new $_model.GetCacheReserveSpecificationResponse({}));
  }

  /**
   * Queries the available specifications of cache reserve instances.
   * @returns GetCacheReserveSpecificationResponse
   */
  async getCacheReserveSpecification(): Promise<$_model.GetCacheReserveSpecificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCacheReserveSpecificationWithOptions(runtime);
  }

  /**
   * Query a single cache configuration
   * 
   * @param request - GetCacheRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCacheRuleResponse
   */
  async getCacheRuleWithOptions(request: $_model.GetCacheRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCacheRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCacheRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCacheRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetCacheRuleResponse({}));
  }

  /**
   * Query a single cache configuration
   * 
   * @param request - GetCacheRuleRequest
   * @returns GetCacheRuleResponse
   */
  async getCacheRule(request: $_model.GetCacheRuleRequest): Promise<$_model.GetCacheRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCacheRuleWithOptions(request, runtime);
  }

  /**
   * Query Site Cache Tag Configuration
   * 
   * @param request - GetCacheTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCacheTagResponse
   */
  async getCacheTagWithOptions(request: $_model.GetCacheTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCacheTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCacheTag",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCacheTagResponse>(await this.callApi(params, req, runtime), new $_model.GetCacheTagResponse({}));
  }

  /**
   * Query Site Cache Tag Configuration
   * 
   * @param request - GetCacheTagRequest
   * @returns GetCacheTagResponse
   */
  async getCacheTag(request: $_model.GetCacheTagRequest): Promise<$_model.GetCacheTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCacheTagWithOptions(request, runtime);
  }

  /**
   * Retrieve the certificate, private key, and certificate information
   * 
   * @param request - GetCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertificateResponse
   */
  async getCertificateWithOptions(request: $_model.GetCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetCertificateResponse({}));
  }

  /**
   * Retrieve the certificate, private key, and certificate information
   * 
   * @param request - GetCertificateRequest
   * @returns GetCertificateResponse
   */
  async getCertificate(request: $_model.GetCertificateRequest): Promise<$_model.GetCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  /**
   * Query certificate quota and usage
   * 
   * @param request - GetCertificateQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertificateQuotaResponse
   */
  async getCertificateQuotaWithOptions(request: $_model.GetCertificateQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCertificateQuotaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCertificateQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCertificateQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetCertificateQuotaResponse({}));
  }

  /**
   * Query certificate quota and usage
   * 
   * @param request - GetCertificateQuotaRequest
   * @returns GetCertificateQuotaResponse
   */
  async getCertificateQuota(request: $_model.GetCertificateQuotaRequest): Promise<$_model.GetCertificateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertificateQuotaWithOptions(request, runtime);
  }

  /**
   * Queries a client CA certificate.
   * 
   * @param request - GetClientCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientCaCertificateResponse
   */
  async getClientCaCertificateWithOptions(request: $_model.GetClientCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetClientCaCertificateResponse({}));
  }

  /**
   * Queries a client CA certificate.
   * 
   * @param request - GetClientCaCertificateRequest
   * @returns GetClientCaCertificateResponse
   */
  async getClientCaCertificate(request: $_model.GetClientCaCertificateRequest): Promise<$_model.GetClientCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientCaCertificateWithOptions(request, runtime);
  }

  /**
   * Queries information about a client certificate.
   * 
   * @param request - GetClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientCertificateResponse
   */
  async getClientCertificateWithOptions(request: $_model.GetClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetClientCertificateResponse({}));
  }

  /**
   * Queries information about a client certificate.
   * 
   * @param request - GetClientCertificateRequest
   * @returns GetClientCertificateResponse
   */
  async getClientCertificate(request: $_model.GetClientCertificateRequest): Promise<$_model.GetClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries domain names associated with a client CA certificate. If no certificate is specified, domain names associated with an Edge Security Acceleration(ESA)-managed CA certificate are returned.
   * 
   * @param request - GetClientCertificateHostnamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientCertificateHostnamesResponse
   */
  async getClientCertificateHostnamesWithOptions(request: $_model.GetClientCertificateHostnamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientCertificateHostnamesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientCertificateHostnames",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientCertificateHostnamesResponse>(await this.callApi(params, req, runtime), new $_model.GetClientCertificateHostnamesResponse({}));
  }

  /**
   * Queries domain names associated with a client CA certificate. If no certificate is specified, domain names associated with an Edge Security Acceleration(ESA)-managed CA certificate are returned.
   * 
   * @param request - GetClientCertificateHostnamesRequest
   * @returns GetClientCertificateHostnamesResponse
   */
  async getClientCertificateHostnames(request: $_model.GetClientCertificateHostnamesRequest): Promise<$_model.GetClientCertificateHostnamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientCertificateHostnamesWithOptions(request, runtime);
  }

  /**
   * Queries the CNAME flattening configuration of a website
   * 
   * @param request - GetCnameFlatteningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCnameFlatteningResponse
   */
  async getCnameFlatteningWithOptions(request: $_model.GetCnameFlatteningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCnameFlatteningResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCnameFlattening",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCnameFlatteningResponse>(await this.callApi(params, req, runtime), new $_model.GetCnameFlatteningResponse({}));
  }

  /**
   * Queries the CNAME flattening configuration of a website
   * 
   * @param request - GetCnameFlatteningRequest
   * @returns GetCnameFlatteningResponse
   */
  async getCnameFlattening(request: $_model.GetCnameFlatteningRequest): Promise<$_model.GetCnameFlatteningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCnameFlatteningWithOptions(request, runtime);
  }

  /**
   * Query Compression Rule Details
   * 
   * @param request - GetCompressionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCompressionRuleResponse
   */
  async getCompressionRuleWithOptions(request: $_model.GetCompressionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCompressionRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCompressionRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCompressionRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetCompressionRuleResponse({}));
  }

  /**
   * Query Compression Rule Details
   * 
   * @param request - GetCompressionRuleRequest
   * @returns GetCompressionRuleResponse
   */
  async getCompressionRule(request: $_model.GetCompressionRuleRequest): Promise<$_model.GetCompressionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCompressionRuleWithOptions(request, runtime);
  }

  /**
   * 查询站点中国大陆网络接入优化配置
   * 
   * @param request - GetCrossBorderOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCrossBorderOptimizationResponse
   */
  async getCrossBorderOptimizationWithOptions(request: $_model.GetCrossBorderOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCrossBorderOptimizationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCrossBorderOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCrossBorderOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.GetCrossBorderOptimizationResponse({}));
  }

  /**
   * 查询站点中国大陆网络接入优化配置
   * 
   * @param request - GetCrossBorderOptimizationRequest
   * @returns GetCrossBorderOptimizationResponse
   */
  async getCrossBorderOptimization(request: $_model.GetCrossBorderOptimizationRequest): Promise<$_model.GetCrossBorderOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCrossBorderOptimizationWithOptions(request, runtime);
  }

  /**
   * Query Site Developer Mode Configuration
   * 
   * @param request - GetDevelopmentModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDevelopmentModeResponse
   */
  async getDevelopmentModeWithOptions(request: $_model.GetDevelopmentModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDevelopmentModeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDevelopmentMode",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDevelopmentModeResponse>(await this.callApi(params, req, runtime), new $_model.GetDevelopmentModeResponse({}));
  }

  /**
   * Query Site Developer Mode Configuration
   * 
   * @param request - GetDevelopmentModeRequest
   * @returns GetDevelopmentModeResponse
   */
  async getDevelopmentMode(request: $_model.GetDevelopmentModeRequest): Promise<$_model.GetDevelopmentModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDevelopmentModeWithOptions(request, runtime);
  }

  /**
   * Queries the information about a containerized application, including basic application configurations and health check configurations.
   * 
   * @param request - GetEdgeContainerAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppResponse
   */
  async getEdgeContainerAppWithOptions(request: $_model.GetEdgeContainerAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerApp",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppResponse({}));
  }

  /**
   * Queries the information about a containerized application, including basic application configurations and health check configurations.
   * 
   * @param request - GetEdgeContainerAppRequest
   * @returns GetEdgeContainerAppResponse
   */
  async getEdgeContainerApp(request: $_model.GetEdgeContainerAppRequest): Promise<$_model.GetEdgeContainerAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppWithOptions(request, runtime);
  }

  /**
   * Queries the log collection configuration of a containerized application.
   * 
   * @param request - GetEdgeContainerAppLogRiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppLogRiverResponse
   */
  async getEdgeContainerAppLogRiverWithOptions(request: $_model.GetEdgeContainerAppLogRiverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppLogRiverResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerAppLogRiver",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppLogRiverResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppLogRiverResponse({}));
  }

  /**
   * Queries the log collection configuration of a containerized application.
   * 
   * @param request - GetEdgeContainerAppLogRiverRequest
   * @returns GetEdgeContainerAppLogRiverResponse
   */
  async getEdgeContainerAppLogRiver(request: $_model.GetEdgeContainerAppLogRiverRequest): Promise<$_model.GetEdgeContainerAppLogRiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppLogRiverWithOptions(request, runtime);
  }

  /**
   * 获取边缘容器资源预留配置
   * 
   * @param request - GetEdgeContainerAppResourceReserveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppResourceReserveResponse
   */
  async getEdgeContainerAppResourceReserveWithOptions(request: $_model.GetEdgeContainerAppResourceReserveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppResourceReserveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerAppResourceReserve",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppResourceReserveResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppResourceReserveResponse({}));
  }

  /**
   * 获取边缘容器资源预留配置
   * 
   * @param request - GetEdgeContainerAppResourceReserveRequest
   * @returns GetEdgeContainerAppResourceReserveResponse
   */
  async getEdgeContainerAppResourceReserve(request: $_model.GetEdgeContainerAppResourceReserveRequest): Promise<$_model.GetEdgeContainerAppResourceReserveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppResourceReserveWithOptions(request, runtime);
  }

  /**
   * 获取边缘容器应用资源分布
   * 
   * @param request - GetEdgeContainerAppResourceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppResourceStatusResponse
   */
  async getEdgeContainerAppResourceStatusWithOptions(request: $_model.GetEdgeContainerAppResourceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppResourceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerAppResourceStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppResourceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppResourceStatusResponse({}));
  }

  /**
   * 获取边缘容器应用资源分布
   * 
   * @param request - GetEdgeContainerAppResourceStatusRequest
   * @returns GetEdgeContainerAppResourceStatusResponse
   */
  async getEdgeContainerAppResourceStatus(request: $_model.GetEdgeContainerAppResourceStatusRequest): Promise<$_model.GetEdgeContainerAppResourceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppResourceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status information about a containerized application, including the deployment, release, and rollback of the application.
   * 
   * @param request - GetEdgeContainerAppStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppStatusResponse
   */
  async getEdgeContainerAppStatusWithOptions(request: $_model.GetEdgeContainerAppStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.publishEnv)) {
      query["PublishEnv"] = request.publishEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerAppStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppStatusResponse({}));
  }

  /**
   * Queries the status information about a containerized application, including the deployment, release, and rollback of the application.
   * 
   * @param request - GetEdgeContainerAppStatusRequest
   * @returns GetEdgeContainerAppStatusResponse
   */
  async getEdgeContainerAppStatus(request: $_model.GetEdgeContainerAppStatusRequest): Promise<$_model.GetEdgeContainerAppStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a version of a containerized application. You can select an application version to release based on the version information.
   * 
   * @param request - GetEdgeContainerAppVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerAppVersionResponse
   */
  async getEdgeContainerAppVersionWithOptions(request: $_model.GetEdgeContainerAppVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerAppVersionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerAppVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerAppVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerAppVersionResponse({}));
  }

  /**
   * Queries the information about a version of a containerized application. You can select an application version to release based on the version information.
   * 
   * @param request - GetEdgeContainerAppVersionRequest
   * @returns GetEdgeContainerAppVersionResponse
   */
  async getEdgeContainerAppVersion(request: $_model.GetEdgeContainerAppVersionRequest): Promise<$_model.GetEdgeContainerAppVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerAppVersionWithOptions(request, runtime);
  }

  /**
   * Queries regions where a containerized application is deployed based on the application ID.
   * 
   * @param request - GetEdgeContainerDeployRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerDeployRegionsResponse
   */
  async getEdgeContainerDeployRegionsWithOptions(request: $_model.GetEdgeContainerDeployRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerDeployRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerDeployRegions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerDeployRegionsResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerDeployRegionsResponse({}));
  }

  /**
   * Queries regions where a containerized application is deployed based on the application ID.
   * 
   * @param request - GetEdgeContainerDeployRegionsRequest
   * @returns GetEdgeContainerDeployRegionsResponse
   */
  async getEdgeContainerDeployRegions(request: $_model.GetEdgeContainerDeployRegionsRequest): Promise<$_model.GetEdgeContainerDeployRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerDeployRegionsWithOptions(request, runtime);
  }

  /**
   * Queries Edge Container logs.
   * 
   * @param request - GetEdgeContainerLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerLogsResponse
   */
  async getEdgeContainerLogsWithOptions(request: $_model.GetEdgeContainerLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerLogs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerLogsResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerLogsResponse({}));
  }

  /**
   * Queries Edge Container logs.
   * 
   * @param request - GetEdgeContainerLogsRequest
   * @returns GetEdgeContainerLogsResponse
   */
  async getEdgeContainerLogs(request: $_model.GetEdgeContainerLogsRequest): Promise<$_model.GetEdgeContainerLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerLogsWithOptions(request, runtime);
  }

  /**
   * Queries the deployment status of an application in the staging environment by using the application ID.
   * 
   * @param request - GetEdgeContainerStagingDeployStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerStagingDeployStatusResponse
   */
  async getEdgeContainerStagingDeployStatusWithOptions(request: $_model.GetEdgeContainerStagingDeployStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerStagingDeployStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerStagingDeployStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerStagingDeployStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerStagingDeployStatusResponse({}));
  }

  /**
   * Queries the deployment status of an application in the staging environment by using the application ID.
   * 
   * @param request - GetEdgeContainerStagingDeployStatusRequest
   * @returns GetEdgeContainerStagingDeployStatusResponse
   */
  async getEdgeContainerStagingDeployStatus(request: $_model.GetEdgeContainerStagingDeployStatusRequest): Promise<$_model.GetEdgeContainerStagingDeployStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerStagingDeployStatusWithOptions(request, runtime);
  }

  /**
   * Queries the terminal information of a containerized application.
   * 
   * @param request - GetEdgeContainerTerminalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEdgeContainerTerminalResponse
   */
  async getEdgeContainerTerminalWithOptions(request: $_model.GetEdgeContainerTerminalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEdgeContainerTerminalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEdgeContainerTerminal",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEdgeContainerTerminalResponse>(await this.callApi(params, req, runtime), new $_model.GetEdgeContainerTerminalResponse({}));
  }

  /**
   * Queries the terminal information of a containerized application.
   * 
   * @param request - GetEdgeContainerTerminalRequest
   * @returns GetEdgeContainerTerminalResponse
   */
  async getEdgeContainerTerminal(request: $_model.GetEdgeContainerTerminalRequest): Promise<$_model.GetEdgeContainerTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEdgeContainerTerminalWithOptions(request, runtime);
  }

  /**
   * Checks the status of Edge Routine.
   * 
   * @param request - GetErServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErServiceResponse
   */
  async getErServiceWithOptions(request: $_model.GetErServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetErServiceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErService",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetErServiceResponse>(await this.callApi(params, req, runtime), new $_model.GetErServiceResponse({}));
  }

  /**
   * Checks the status of Edge Routine.
   * 
   * @param request - GetErServiceRequest
   * @returns GetErServiceResponse
   */
  async getErService(request: $_model.GetErServiceRequest): Promise<$_model.GetErServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErServiceWithOptions(request, runtime);
  }

  /**
   * Query HTTP Request Header Rule Details
   * 
   * @param request - GetHttpRequestHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpRequestHeaderModificationRuleResponse
   */
  async getHttpRequestHeaderModificationRuleWithOptions(request: $_model.GetHttpRequestHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpRequestHeaderModificationRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpRequestHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpRequestHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpRequestHeaderModificationRuleResponse({}));
  }

  /**
   * Query HTTP Request Header Rule Details
   * 
   * @param request - GetHttpRequestHeaderModificationRuleRequest
   * @returns GetHttpRequestHeaderModificationRuleResponse
   */
  async getHttpRequestHeaderModificationRule(request: $_model.GetHttpRequestHeaderModificationRuleRequest): Promise<$_model.GetHttpRequestHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHttpRequestHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Query HTTP Response Header Rules
   * 
   * @param request - GetHttpResponseHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpResponseHeaderModificationRuleResponse
   */
  async getHttpResponseHeaderModificationRuleWithOptions(request: $_model.GetHttpResponseHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpResponseHeaderModificationRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpResponseHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpResponseHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpResponseHeaderModificationRuleResponse({}));
  }

  /**
   * Query HTTP Response Header Rules
   * 
   * @param request - GetHttpResponseHeaderModificationRuleRequest
   * @returns GetHttpResponseHeaderModificationRuleResponse
   */
  async getHttpResponseHeaderModificationRule(request: $_model.GetHttpResponseHeaderModificationRuleRequest): Promise<$_model.GetHttpResponseHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHttpResponseHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Query a Single HTTPS Application Configuration
   * 
   * @param request - GetHttpsApplicationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpsApplicationConfigurationResponse
   */
  async getHttpsApplicationConfigurationWithOptions(request: $_model.GetHttpsApplicationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpsApplicationConfigurationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpsApplicationConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpsApplicationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpsApplicationConfigurationResponse({}));
  }

  /**
   * Query a Single HTTPS Application Configuration
   * 
   * @param request - GetHttpsApplicationConfigurationRequest
   * @returns GetHttpsApplicationConfigurationResponse
   */
  async getHttpsApplicationConfiguration(request: $_model.GetHttpsApplicationConfigurationRequest): Promise<$_model.GetHttpsApplicationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHttpsApplicationConfigurationWithOptions(request, runtime);
  }

  /**
   * Query a Single HTTPS Basic Configuration
   * 
   * @param request - GetHttpsBasicConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHttpsBasicConfigurationResponse
   */
  async getHttpsBasicConfigurationWithOptions(request: $_model.GetHttpsBasicConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetHttpsBasicConfigurationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHttpsBasicConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHttpsBasicConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetHttpsBasicConfigurationResponse({}));
  }

  /**
   * Query a Single HTTPS Basic Configuration
   * 
   * @param request - GetHttpsBasicConfigurationRequest
   * @returns GetHttpsBasicConfigurationResponse
   */
  async getHttpsBasicConfiguration(request: $_model.GetHttpsBasicConfigurationRequest): Promise<$_model.GetHttpsBasicConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getHttpsBasicConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the IPv6 configuration of a website.
   * 
   * @param request - GetIPv6Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIPv6Response
   */
  async getIPv6WithOptions(request: $_model.GetIPv6Request, runtime: $dara.RuntimeOptions): Promise<$_model.GetIPv6Response> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIPv6",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIPv6Response>(await this.callApi(params, req, runtime), new $_model.GetIPv6Response({}));
  }

  /**
   * Queries the IPv6 configuration of a website.
   * 
   * @param request - GetIPv6Request
   * @returns GetIPv6Response
   */
  async getIPv6(request: $_model.GetIPv6Request): Promise<$_model.GetIPv6Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIPv6WithOptions(request, runtime);
  }

  /**
   * Query Single Site Image Transformation Configuration
   * 
   * @param request - GetImageTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageTransformResponse
   */
  async getImageTransformWithOptions(request: $_model.GetImageTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageTransformResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageTransformResponse>(await this.callApi(params, req, runtime), new $_model.GetImageTransformResponse({}));
  }

  /**
   * Query Single Site Image Transformation Configuration
   * 
   * @param request - GetImageTransformRequest
   * @returns GetImageTransformResponse
   */
  async getImageTransform(request: $_model.GetImageTransformRequest): Promise<$_model.GetImageTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageTransformWithOptions(request, runtime);
  }

  /**
   * Queries the value of a key in a key-value pair.
   * 
   * @param request - GetKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvResponse
   */
  async getKvWithOptions(request: $_model.GetKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKvResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKvResponse>(await this.callApi(params, req, runtime), new $_model.GetKvResponse({}));
  }

  /**
   * Queries the value of a key in a key-value pair.
   * 
   * @param request - GetKvRequest
   * @returns GetKvResponse
   */
  async getKv(request: $_model.GetKvRequest): Promise<$_model.GetKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKvWithOptions(request, runtime);
  }

  /**
   * Queries the Edge KV usage in your Alibaba Cloud account, including the information about all namespaces.
   * 
   * @param request - GetKvAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvAccountResponse
   */
  async getKvAccountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetKvAccountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetKvAccount",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKvAccountResponse>(await this.callApi(params, req, runtime), new $_model.GetKvAccountResponse({}));
  }

  /**
   * Queries the Edge KV usage in your Alibaba Cloud account, including the information about all namespaces.
   * @returns GetKvAccountResponse
   */
  async getKvAccount(): Promise<$_model.GetKvAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKvAccountWithOptions(runtime);
  }

  /**
   * Queries the information about a namespace in your Alibaba Cloud account.
   * 
   * @param request - GetKvNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKvNamespaceResponse
   */
  async getKvNamespaceWithOptions(request: $_model.GetKvNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKvNamespaceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKvNamespace",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKvNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetKvNamespaceResponse({}));
  }

  /**
   * Queries the information about a namespace in your Alibaba Cloud account.
   * 
   * @param request - GetKvNamespaceRequest
   * @returns GetKvNamespaceResponse
   */
  async getKvNamespace(request: $_model.GetKvNamespaceRequest): Promise<$_model.GetKvNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKvNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom list, such as the name, description, type, and content.
   * 
   * @param request - GetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListResponse
   */
  async getListWithOptions(request: $_model.GetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetListResponse>(await this.callApi(params, req, runtime), new $_model.GetListResponse({}));
  }

  /**
   * Queries the details of a custom list, such as the name, description, type, and content.
   * 
   * @param request - GetListRequest
   * @returns GetListResponse
   */
  async getList(request: $_model.GetListRequest): Promise<$_model.GetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getListWithOptions(request, runtime);
  }

  /**
   * Query a Specific Load Balancer
   * 
   * @remarks
   * This API allows users to query the configuration details of a specific load balancer by providing necessary authentication information and resource identifiers, including but not limited to name, session persistence strategy, routing policy, etc.
   * 
   * @param request - GetLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoadBalancerResponse
   */
  async getLoadBalancerWithOptions(request: $_model.GetLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoadBalancerResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLoadBalancer",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.GetLoadBalancerResponse({}));
  }

  /**
   * Query a Specific Load Balancer
   * 
   * @remarks
   * This API allows users to query the configuration details of a specific load balancer by providing necessary authentication information and resource identifiers, including but not limited to name, session persistence strategy, routing policy, etc.
   * 
   * @param request - GetLoadBalancerRequest
   * @returns GetLoadBalancerResponse
   */
  async getLoadBalancer(request: $_model.GetLoadBalancerRequest): Promise<$_model.GetLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Query Managed Transform Configuration
   * 
   * @param request - GetManagedTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagedTransformResponse
   */
  async getManagedTransformWithOptions(request: $_model.GetManagedTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedTransformResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagedTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManagedTransformResponse>(await this.callApi(params, req, runtime), new $_model.GetManagedTransformResponse({}));
  }

  /**
   * Query Managed Transform Configuration
   * 
   * @param request - GetManagedTransformRequest
   * @returns GetManagedTransformResponse
   */
  async getManagedTransform(request: $_model.GetManagedTransformRequest): Promise<$_model.GetManagedTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagedTransformWithOptions(request, runtime);
  }

  /**
   * Query a single network optimization configuration
   * 
   * @param request - GetNetworkOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkOptimizationResponse
   */
  async getNetworkOptimizationWithOptions(request: $_model.GetNetworkOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkOptimizationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkOptimizationResponse({}));
  }

  /**
   * Query a single network optimization configuration
   * 
   * @param request - GetNetworkOptimizationRequest
   * @returns GetNetworkOptimizationResponse
   */
  async getNetworkOptimization(request: $_model.GetNetworkOptimizationRequest): Promise<$_model.GetNetworkOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkOptimizationWithOptions(request, runtime);
  }

  /**
   * 获取源服务器CA证书信息
   * 
   * @param request - GetOriginCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginCaCertificateResponse
   */
  async getOriginCaCertificateWithOptions(request: $_model.GetOriginCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginCaCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginCaCertificateResponse({}));
  }

  /**
   * 获取源服务器CA证书信息
   * 
   * @param request - GetOriginCaCertificateRequest
   * @returns GetOriginCaCertificateResponse
   */
  async getOriginCaCertificate(request: $_model.GetOriginCaCertificateRequest): Promise<$_model.GetOriginCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginCaCertificateWithOptions(request, runtime);
  }

  /**
   * 获取域名回源客户端证书信息
   * 
   * @param request - GetOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginClientCertificateResponse
   */
  async getOriginClientCertificateWithOptions(request: $_model.GetOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginClientCertificateResponse({}));
  }

  /**
   * 获取域名回源客户端证书信息
   * 
   * @param request - GetOriginClientCertificateRequest
   * @returns GetOriginClientCertificateResponse
   */
  async getOriginClientCertificate(request: $_model.GetOriginClientCertificateRequest): Promise<$_model.GetOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * 获取域名回源客户端证书绑定的域名列表
   * 
   * @param request - GetOriginClientCertificateHostnamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginClientCertificateHostnamesResponse
   */
  async getOriginClientCertificateHostnamesWithOptions(request: $_model.GetOriginClientCertificateHostnamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginClientCertificateHostnamesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginClientCertificateHostnames",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginClientCertificateHostnamesResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginClientCertificateHostnamesResponse({}));
  }

  /**
   * 获取域名回源客户端证书绑定的域名列表
   * 
   * @param request - GetOriginClientCertificateHostnamesRequest
   * @returns GetOriginClientCertificateHostnamesResponse
   */
  async getOriginClientCertificateHostnames(request: $_model.GetOriginClientCertificateHostnamesRequest): Promise<$_model.GetOriginClientCertificateHostnamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginClientCertificateHostnamesWithOptions(request, runtime);
  }

  /**
   * Query a specific origin pool
   * 
   * @param request - GetOriginPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginPoolResponse
   */
  async getOriginPoolWithOptions(request: $_model.GetOriginPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginPoolResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginPool",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginPoolResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginPoolResponse({}));
  }

  /**
   * Query a specific origin pool
   * 
   * @param request - GetOriginPoolRequest
   * @returns GetOriginPoolResponse
   */
  async getOriginPool(request: $_model.GetOriginPoolRequest): Promise<$_model.GetOriginPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginPoolWithOptions(request, runtime);
  }

  /**
   * Queries the origin protection configurations of a website, including the origin protection, IP convergence, and the status and details of the IP whitelist for origin protection. The details includes the IP whitelist used by the website, the latest IP whitelist, and the differences between them.
   * 
   * @param request - GetOriginProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginProtectionResponse
   */
  async getOriginProtectionWithOptions(request: $_model.GetOriginProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginProtectionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginProtectionResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginProtectionResponse({}));
  }

  /**
   * Queries the origin protection configurations of a website, including the origin protection, IP convergence, and the status and details of the IP whitelist for origin protection. The details includes the IP whitelist used by the website, the latest IP whitelist, and the differences between them.
   * 
   * @param request - GetOriginProtectionRequest
   * @returns GetOriginProtectionResponse
   */
  async getOriginProtection(request: $_model.GetOriginProtectionRequest): Promise<$_model.GetOriginProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginProtectionWithOptions(request, runtime);
  }

  /**
   * Query a Single Origin Rule Configuration
   * 
   * @param request - GetOriginRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOriginRuleResponse
   */
  async getOriginRuleWithOptions(request: $_model.GetOriginRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOriginRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOriginRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOriginRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetOriginRuleResponse({}));
  }

  /**
   * Query a Single Origin Rule Configuration
   * 
   * @param request - GetOriginRuleRequest
   * @returns GetOriginRuleResponse
   */
  async getOriginRule(request: $_model.GetOriginRuleRequest): Promise<$_model.GetOriginRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOriginRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom error page based on the error page ID.
   * 
   * @param request - GetPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPageResponse
   */
  async getPageWithOptions(request: $_model.GetPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPageResponse>(await this.callApi(params, req, runtime), new $_model.GetPageResponse({}));
  }

  /**
   * Queries the details of a custom error page based on the error page ID.
   * 
   * @param request - GetPageRequest
   * @returns GetPageResponse
   */
  async getPage(request: $_model.GetPageRequest): Promise<$_model.GetPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPageWithOptions(request, runtime);
  }

  /**
   * Queries the quotas and quota usage for different cache purge options.
   * 
   * @param request - GetPurgeQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurgeQuotaResponse
   */
  async getPurgeQuotaWithOptions(request: $_model.GetPurgeQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPurgeQuotaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurgeQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPurgeQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetPurgeQuotaResponse({}));
  }

  /**
   * Queries the quotas and quota usage for different cache purge options.
   * 
   * @param request - GetPurgeQuotaRequest
   * @returns GetPurgeQuotaResponse
   */
  async getPurgeQuota(request: $_model.GetPurgeQuotaRequest): Promise<$_model.GetPurgeQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPurgeQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the fields in real-time logs based on the log category.
   * 
   * @param request - GetRealtimeDeliveryFieldRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRealtimeDeliveryFieldResponse
   */
  async getRealtimeDeliveryFieldWithOptions(request: $_model.GetRealtimeDeliveryFieldRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRealtimeDeliveryFieldResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRealtimeDeliveryField",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRealtimeDeliveryFieldResponse>(await this.callApi(params, req, runtime), new $_model.GetRealtimeDeliveryFieldResponse({}));
  }

  /**
   * Queries the fields in real-time logs based on the log category.
   * 
   * @param request - GetRealtimeDeliveryFieldRequest
   * @returns GetRealtimeDeliveryFieldResponse
   */
  async getRealtimeDeliveryField(request: $_model.GetRealtimeDeliveryFieldRequest): Promise<$_model.GetRealtimeDeliveryFieldResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRealtimeDeliveryFieldWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of a single DNS record, such as the record value, priority, and origin authentication setting (exclusive to CNAME records).
   * 
   * @param request - GetRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordResponse
   */
  async getRecordWithOptions(request: $_model.GetRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordResponse({}));
  }

  /**
   * Queries the configuration of a single DNS record, such as the record value, priority, and origin authentication setting (exclusive to CNAME records).
   * 
   * @param request - GetRecordRequest
   * @returns GetRecordResponse
   */
  async getRecord(request: $_model.GetRecordRequest): Promise<$_model.GetRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordWithOptions(request, runtime);
  }

  /**
   * Query Redirect Rule Details
   * 
   * @param request - GetRedirectRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRedirectRuleResponse
   */
  async getRedirectRuleWithOptions(request: $_model.GetRedirectRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRedirectRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRedirectRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRedirectRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRedirectRuleResponse({}));
  }

  /**
   * Query Redirect Rule Details
   * 
   * @param request - GetRedirectRuleRequest
   * @returns GetRedirectRuleResponse
   */
  async getRedirectRule(request: $_model.GetRedirectRuleRequest): Promise<$_model.GetRedirectRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRedirectRuleWithOptions(request, runtime);
  }

  /**
   * Query details of the rewrite URL rule
   * 
   * @param request - GetRewriteUrlRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRewriteUrlRuleResponse
   */
  async getRewriteUrlRuleWithOptions(request: $_model.GetRewriteUrlRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRewriteUrlRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRewriteUrlRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRewriteUrlRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRewriteUrlRuleResponse({}));
  }

  /**
   * Query details of the rewrite URL rule
   * 
   * @param request - GetRewriteUrlRuleRequest
   * @returns GetRewriteUrlRuleResponse
   */
  async getRewriteUrlRule(request: $_model.GetRewriteUrlRuleRequest): Promise<$_model.GetRewriteUrlRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRewriteUrlRuleWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a routine, including the code versions and the configurations of the environments, associated domain names, and associated routes.
   * 
   * @param request - GetRoutineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoutineResponse
   */
  async getRoutineWithOptions(request: $_model.GetRoutineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoutineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoutine",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoutineResponse>(await this.callApi(params, req, runtime), new $_model.GetRoutineResponse({}));
  }

  /**
   * Queries the configurations of a routine, including the code versions and the configurations of the environments, associated domain names, and associated routes.
   * 
   * @param request - GetRoutineRequest
   * @returns GetRoutineResponse
   */
  async getRoutine(request: $_model.GetRoutineRequest): Promise<$_model.GetRoutineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoutineWithOptions(request, runtime);
  }

  /**
   * 查询单条边缘函数路由配置
   * 
   * @param request - GetRoutineRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoutineRouteResponse
   */
  async getRoutineRouteWithOptions(request: $_model.GetRoutineRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoutineRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoutineRoute",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoutineRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetRoutineRouteResponse({}));
  }

  /**
   * 查询单条边缘函数路由配置
   * 
   * @param request - GetRoutineRouteRequest
   * @returns GetRoutineRouteResponse
   */
  async getRoutineRoute(request: $_model.GetRoutineRouteRequest): Promise<$_model.GetRoutineRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoutineRouteWithOptions(request, runtime);
  }

  /**
   * Obtains the release information about the routine code that is released to the staging environment. This information can be used to upload the test code to Object Storage Service (OSS).
   * 
   * @remarks
   *   Every time the code of a routine is released to the staging environment, a version number is generated. Such code is for tests only.
   * *   A routine can retain a maximum of 10 code versions. If the number of versions reaches the limit, you must call the DeleteRoutineCodeRevision operation to delete unwanted versions.
   * 
   * @param request - GetRoutineStagingCodeUploadInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoutineStagingCodeUploadInfoResponse
   */
  async getRoutineStagingCodeUploadInfoWithOptions(request: $_model.GetRoutineStagingCodeUploadInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoutineStagingCodeUploadInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeDescription)) {
      body["CodeDescription"] = request.codeDescription;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoutineStagingCodeUploadInfo",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoutineStagingCodeUploadInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetRoutineStagingCodeUploadInfoResponse({}));
  }

  /**
   * Obtains the release information about the routine code that is released to the staging environment. This information can be used to upload the test code to Object Storage Service (OSS).
   * 
   * @remarks
   *   Every time the code of a routine is released to the staging environment, a version number is generated. Such code is for tests only.
   * *   A routine can retain a maximum of 10 code versions. If the number of versions reaches the limit, you must call the DeleteRoutineCodeRevision operation to delete unwanted versions.
   * 
   * @param request - GetRoutineStagingCodeUploadInfoRequest
   * @returns GetRoutineStagingCodeUploadInfoResponse
   */
  async getRoutineStagingCodeUploadInfo(request: $_model.GetRoutineStagingCodeUploadInfoRequest): Promise<$_model.GetRoutineStagingCodeUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoutineStagingCodeUploadInfoWithOptions(request, runtime);
  }

  /**
   * Queries the IP addresses of staging environments for Edge Routine.
   * 
   * @param request - GetRoutineStagingEnvIpRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoutineStagingEnvIpResponse
   */
  async getRoutineStagingEnvIpWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetRoutineStagingEnvIpResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetRoutineStagingEnvIp",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoutineStagingEnvIpResponse>(await this.callApi(params, req, runtime), new $_model.GetRoutineStagingEnvIpResponse({}));
  }

  /**
   * Queries the IP addresses of staging environments for Edge Routine.
   * @returns GetRoutineStagingEnvIpResponse
   */
  async getRoutineStagingEnvIp(): Promise<$_model.GetRoutineStagingEnvIpResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoutineStagingEnvIpWithOptions(runtime);
  }

  /**
   * Queries the Edge Routine information in your Alibaba Cloud account, including the associated subdomain and created routines.
   * 
   * @param request - GetRoutineUserInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoutineUserInfoResponse
   */
  async getRoutineUserInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetRoutineUserInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetRoutineUserInfo",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoutineUserInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetRoutineUserInfoResponse({}));
  }

  /**
   * Queries the Edge Routine information in your Alibaba Cloud account, including the associated subdomain and created routines.
   * @returns GetRoutineUserInfoResponse
   */
  async getRoutineUserInfo(): Promise<$_model.GetRoutineUserInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRoutineUserInfoWithOptions(runtime);
  }

  /**
   * Queries a specified scheduled prefetch task based on the task ID.
   * 
   * @param request - GetScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledPreloadJobResponse
   */
  async getScheduledPreloadJobWithOptions(request: $_model.GetScheduledPreloadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledPreloadJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledPreloadJobResponse({}));
  }

  /**
   * Queries a specified scheduled prefetch task based on the task ID.
   * 
   * @param request - GetScheduledPreloadJobRequest
   * @returns GetScheduledPreloadJobResponse
   */
  async getScheduledPreloadJob(request: $_model.GetScheduledPreloadJobRequest): Promise<$_model.GetScheduledPreloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * Queries the configuration for search engine crawler of a website.
   * 
   * @param request - GetSeoBypassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSeoBypassResponse
   */
  async getSeoBypassWithOptions(request: $_model.GetSeoBypassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSeoBypassResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSeoBypass",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSeoBypassResponse>(await this.callApi(params, req, runtime), new $_model.GetSeoBypassResponse({}));
  }

  /**
   * Queries the configuration for search engine crawler of a website.
   * 
   * @param request - GetSeoBypassRequest
   * @returns GetSeoBypassResponse
   */
  async getSeoBypass(request: $_model.GetSeoBypassRequest): Promise<$_model.GetSeoBypassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSeoBypassWithOptions(request, runtime);
  }

  /**
   * Queries information about a website based on the website ID.
   * 
   * @param request - GetSiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteResponse
   */
  async getSiteWithOptions(request: $_model.GetSiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteResponse({}));
  }

  /**
   * Queries information about a website based on the website ID.
   * 
   * @param request - GetSiteRequest
   * @returns GetSiteResponse
   */
  async getSite(request: $_model.GetSiteRequest): Promise<$_model.GetSiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteWithOptions(request, runtime);
  }

  /**
   * Queries the nameservers configured for a website.
   * 
   * @param request - GetSiteCurrentNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteCurrentNSResponse
   */
  async getSiteCurrentNSWithOptions(request: $_model.GetSiteCurrentNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteCurrentNSResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteCurrentNS",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteCurrentNSResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteCurrentNSResponse({}));
  }

  /**
   * Queries the nameservers configured for a website.
   * 
   * @param request - GetSiteCurrentNSRequest
   * @returns GetSiteCurrentNSResponse
   */
  async getSiteCurrentNS(request: $_model.GetSiteCurrentNSRequest): Promise<$_model.GetSiteCurrentNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteCurrentNSWithOptions(request, runtime);
  }

  /**
   * Queries the configuration of custom log fields for a website.
   * 
   * @remarks
   *   **Description**: You can call this operation to query the configuration of custom log fields for a website, including custom fields in request headers, response headers, and cookies.
   * *   **Scenarios**: You can call this operation in scenarios where you need to obtain specific HTTP headers or cookie information for log analysis.
   * *   ****
   * 
   * @param request - GetSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteCustomLogResponse
   */
  async getSiteCustomLogWithOptions(request: $_model.GetSiteCustomLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteCustomLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteCustomLogResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteCustomLogResponse({}));
  }

  /**
   * Queries the configuration of custom log fields for a website.
   * 
   * @remarks
   *   **Description**: You can call this operation to query the configuration of custom log fields for a website, including custom fields in request headers, response headers, and cookies.
   * *   **Scenarios**: You can call this operation in scenarios where you need to obtain specific HTTP headers or cookie information for log analysis.
   * *   ****
   * 
   * @param request - GetSiteCustomLogRequest
   * @returns GetSiteCustomLogResponse
   */
  async getSiteCustomLog(request: $_model.GetSiteCustomLogRequest): Promise<$_model.GetSiteCustomLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * Queries a real-time log delivery task.
   * 
   * @param request - GetSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteDeliveryTaskResponse
   */
  async getSiteDeliveryTaskWithOptions(request: $_model.GetSiteDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteDeliveryTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteDeliveryTaskResponse({}));
  }

  /**
   * Queries a real-time log delivery task.
   * 
   * @param request - GetSiteDeliveryTaskRequest
   * @returns GetSiteDeliveryTaskResponse
   */
  async getSiteDeliveryTask(request: $_model.GetSiteDeliveryTaskRequest): Promise<$_model.GetSiteDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Queries the remaining quota for delivering a specific category of real-time logs in a website.
   * 
   * @remarks
   * You can call this operation to query the remaining quota for delivering a specific category of real-time logs in a website within an Alibaba Cloud account. This is essential for monitoring and managing your log delivery capacity to ensure that logs can be delivered to the destination and prevent data loss or latency caused by insufficient quota.
   * **Take note of the following parameters:**
   * *   ``
   * *   `BusinessType` is required. You must specify a log category to obtain the corresponding quota information.
   * *   `SiteId` specifies the ID of a website, which must be a valid integer that corresponds to a website that you configured on Alibaba Cloud.
   * **Response:**
   * *   If a request is successful, the system returns the remaining log delivery quota (`FreeQuota`), request ID (`RequestId`), website ID (`SiteId`), and log category (`BusinessType`). You can confirm and record the returned data.
   * 
   * @param request - GetSiteLogDeliveryQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteLogDeliveryQuotaResponse
   */
  async getSiteLogDeliveryQuotaWithOptions(request: $_model.GetSiteLogDeliveryQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteLogDeliveryQuotaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteLogDeliveryQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteLogDeliveryQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteLogDeliveryQuotaResponse({}));
  }

  /**
   * Queries the remaining quota for delivering a specific category of real-time logs in a website.
   * 
   * @remarks
   * You can call this operation to query the remaining quota for delivering a specific category of real-time logs in a website within an Alibaba Cloud account. This is essential for monitoring and managing your log delivery capacity to ensure that logs can be delivered to the destination and prevent data loss or latency caused by insufficient quota.
   * **Take note of the following parameters:**
   * *   ``
   * *   `BusinessType` is required. You must specify a log category to obtain the corresponding quota information.
   * *   `SiteId` specifies the ID of a website, which must be a valid integer that corresponds to a website that you configured on Alibaba Cloud.
   * **Response:**
   * *   If a request is successful, the system returns the remaining log delivery quota (`FreeQuota`), request ID (`RequestId`), website ID (`SiteId`), and log category (`BusinessType`). You can confirm and record the returned data.
   * 
   * @param request - GetSiteLogDeliveryQuotaRequest
   * @returns GetSiteLogDeliveryQuotaResponse
   */
  async getSiteLogDeliveryQuota(request: $_model.GetSiteLogDeliveryQuotaRequest): Promise<$_model.GetSiteLogDeliveryQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteLogDeliveryQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the site hold configuration of a website. After you enable site hold, other accounts cannot add your website domain or its subdomains to ESA.
   * 
   * @param request - GetSiteNameExclusiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteNameExclusiveResponse
   */
  async getSiteNameExclusiveWithOptions(request: $_model.GetSiteNameExclusiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteNameExclusiveResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteNameExclusive",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteNameExclusiveResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteNameExclusiveResponse({}));
  }

  /**
   * Queries the site hold configuration of a website. After you enable site hold, other accounts cannot add your website domain or its subdomains to ESA.
   * 
   * @param request - GetSiteNameExclusiveRequest
   * @returns GetSiteNameExclusiveResponse
   */
  async getSiteNameExclusive(request: $_model.GetSiteNameExclusiveRequest): Promise<$_model.GetSiteNameExclusiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteNameExclusiveWithOptions(request, runtime);
  }

  /**
   * 获取站点回源客户端证书信息
   * 
   * @param request - GetSiteOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteOriginClientCertificateResponse
   */
  async getSiteOriginClientCertificateWithOptions(request: $_model.GetSiteOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteOriginClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteOriginClientCertificateResponse({}));
  }

  /**
   * 获取站点回源客户端证书信息
   * 
   * @param request - GetSiteOriginClientCertificateRequest
   * @returns GetSiteOriginClientCertificateResponse
   */
  async getSiteOriginClientCertificate(request: $_model.GetSiteOriginClientCertificateRequest): Promise<$_model.GetSiteOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * Queries the ESA proxy configuration of a website.
   * 
   * @param request - GetSitePauseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSitePauseResponse
   */
  async getSitePauseWithOptions(request: $_model.GetSitePauseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSitePauseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSitePause",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSitePauseResponse>(await this.callApi(params, req, runtime), new $_model.GetSitePauseResponse({}));
  }

  /**
   * Queries the ESA proxy configuration of a website.
   * 
   * @param request - GetSitePauseRequest
   * @returns GetSitePauseResponse
   */
  async getSitePause(request: $_model.GetSitePauseRequest): Promise<$_model.GetSitePauseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSitePauseWithOptions(request, runtime);
  }

  /**
   * Get WAF Configuration for a Site
   * 
   * @param request - GetSiteWafSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSiteWafSettingsResponse
   */
  async getSiteWafSettingsWithOptions(request: $_model.GetSiteWafSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSiteWafSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSiteWafSettings",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSiteWafSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetSiteWafSettingsResponse({}));
  }

  /**
   * Get WAF Configuration for a Site
   * 
   * @param request - GetSiteWafSettingsRequest
   * @returns GetSiteWafSettingsResponse
   */
  async getSiteWafSettings(request: $_model.GetSiteWafSettingsRequest): Promise<$_model.GetSiteWafSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSiteWafSettingsWithOptions(request, runtime);
  }

  /**
   * Query Multi-level Cache Configuration for Site
   * 
   * @param request - GetTieredCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTieredCacheResponse
   */
  async getTieredCacheWithOptions(request: $_model.GetTieredCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTieredCacheResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTieredCache",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTieredCacheResponse>(await this.callApi(params, req, runtime), new $_model.GetTieredCacheResponse({}));
  }

  /**
   * Query Multi-level Cache Configuration for Site
   * 
   * @param request - GetTieredCacheRequest
   * @returns GetTieredCacheResponse
   */
  async getTieredCache(request: $_model.GetTieredCacheRequest): Promise<$_model.GetTieredCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTieredCacheWithOptions(request, runtime);
  }

  /**
   * Queries the execution status and running information of a file upload task based on the task ID.
   * 
   * @param request - GetUploadTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadTaskResponse
   */
  async getUploadTaskWithOptions(request: $_model.GetUploadTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadTaskResponse({}));
  }

  /**
   * Queries the execution status and running information of a file upload task based on the task ID.
   * 
   * @param request - GetUploadTaskRequest
   * @returns GetUploadTaskResponse
   */
  async getUploadTask(request: $_model.GetUploadTaskRequest): Promise<$_model.GetUploadTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about a log delivery task by account.
   * 
   * @remarks
   *   This API operation queries the details of a delivery task, including the task name, discard rate, region, log category, status, delivery destination, configuration, and filtering rules.****
   * *   You can call this operation to query detailed information about a log delivery task to analyze log processing efficiency or troubleshoot delivery problems.****
   * *   ****````
   * 
   * @param request - GetUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserDeliveryTaskResponse
   */
  async getUserDeliveryTaskWithOptions(request: $_model.GetUserDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserDeliveryTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetUserDeliveryTaskResponse({}));
  }

  /**
   * Queries the information about a log delivery task by account.
   * 
   * @remarks
   *   This API operation queries the details of a delivery task, including the task name, discard rate, region, log category, status, delivery destination, configuration, and filtering rules.****
   * *   You can call this operation to query detailed information about a log delivery task to analyze log processing efficiency or troubleshoot delivery problems.****
   * *   ****````
   * 
   * @param request - GetUserDeliveryTaskRequest
   * @returns GetUserDeliveryTaskResponse
   */
  async getUserDeliveryTask(request: $_model.GetUserDeliveryTaskRequest): Promise<$_model.GetUserDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Queries the remaining log delivery quota of each log category in your account.
   * 
   * @remarks
   * This operation allows you to query the remaining real-time log delivery quota of each log category in your Alibaba Cloud account. You must provide your Alibaba Cloud account ID (aliUid) and log category (BusinessType). The system then returns the remaining quota of the log category to help you track the usage.
   * 
   * @param request - GetUserLogDeliveryQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserLogDeliveryQuotaResponse
   */
  async getUserLogDeliveryQuotaWithOptions(request: $_model.GetUserLogDeliveryQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserLogDeliveryQuotaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserLogDeliveryQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserLogDeliveryQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetUserLogDeliveryQuotaResponse({}));
  }

  /**
   * Queries the remaining log delivery quota of each log category in your account.
   * 
   * @remarks
   * This operation allows you to query the remaining real-time log delivery quota of each log category in your Alibaba Cloud account. You must provide your Alibaba Cloud account ID (aliUid) and log category (BusinessType). The system then returns the remaining quota of the log category to help you track the usage.
   * 
   * @param request - GetUserLogDeliveryQuotaRequest
   * @returns GetUserLogDeliveryQuotaResponse
   */
  async getUserLogDeliveryQuota(request: $_model.GetUserLogDeliveryQuotaRequest): Promise<$_model.GetUserLogDeliveryQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserLogDeliveryQuotaWithOptions(request, runtime);
  }

  /**
   * This interface is used to obtain the application key (AppKey) for the BOT behavior detection feature in the site\\"s Web Application Firewall (WAF). The key is typically used for authentication and data exchange with the WAF service.
   * 
   * @param request - GetWafBotAppKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafBotAppKeyResponse
   */
  async getWafBotAppKeyWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetWafBotAppKeyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetWafBotAppKey",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWafBotAppKeyResponse>(await this.callApi(params, req, runtime), new $_model.GetWafBotAppKeyResponse({}));
  }

  /**
   * This interface is used to obtain the application key (AppKey) for the BOT behavior detection feature in the site\\"s Web Application Firewall (WAF). The key is typically used for authentication and data exchange with the WAF service.
   * @returns GetWafBotAppKeyResponse
   */
  async getWafBotAppKey(): Promise<$_model.GetWafBotAppKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWafBotAppKeyWithOptions(runtime);
  }

  /**
   * Queries the conditions for matching incoming requests that are configured in a WAF rule category for a website. These conditions define how WAF detects and processes different types of requests.
   * 
   * @param request - GetWafFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafFilterResponse
   */
  async getWafFilterWithOptions(request: $_model.GetWafFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWafFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWafFilter",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWafFilterResponse>(await this.callApi(params, req, runtime), new $_model.GetWafFilterResponse({}));
  }

  /**
   * Queries the conditions for matching incoming requests that are configured in a WAF rule category for a website. These conditions define how WAF detects and processes different types of requests.
   * 
   * @param request - GetWafFilterRequest
   * @returns GetWafFilterResponse
   */
  async getWafFilter(request: $_model.GetWafFilterRequest): Promise<$_model.GetWafFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWafFilterWithOptions(request, runtime);
  }

  /**
   * Get WAF Quota Details
   * 
   * @param request - GetWafQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafQuotaResponse
   */
  async getWafQuotaWithOptions(request: $_model.GetWafQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWafQuotaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paths)) {
      query["Paths"] = request.paths;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWafQuota",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWafQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetWafQuotaResponse({}));
  }

  /**
   * Get WAF Quota Details
   * 
   * @param request - GetWafQuotaRequest
   * @returns GetWafQuotaResponse
   */
  async getWafQuota(request: $_model.GetWafQuotaRequest): Promise<$_model.GetWafQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWafQuotaWithOptions(request, runtime);
  }

  /**
   * Get Details of a Single WAF Rule
   * 
   * @param request - GetWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafRuleResponse
   */
  async getWafRuleWithOptions(request: $_model.GetWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWafRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetWafRuleResponse({}));
  }

  /**
   * Get Details of a Single WAF Rule
   * 
   * @param request - GetWafRuleRequest
   * @returns GetWafRuleResponse
   */
  async getWafRule(request: $_model.GetWafRuleRequest): Promise<$_model.GetWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWafRuleWithOptions(request, runtime);
  }

  /**
   * Get WAF Ruleset Details
   * 
   * @param request - GetWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWafRulesetResponse
   */
  async getWafRulesetWithOptions(request: $_model.GetWafRulesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWafRulesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWafRulesetResponse>(await this.callApi(params, req, runtime), new $_model.GetWafRulesetResponse({}));
  }

  /**
   * Get WAF Ruleset Details
   * 
   * @param request - GetWafRulesetRequest
   * @returns GetWafRulesetResponse
   */
  async getWafRuleset(request: $_model.GetWafRulesetRequest): Promise<$_model.GetWafRulesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWafRulesetWithOptions(request, runtime);
  }

  /**
   * Query Cache Reserve Instance List
   * 
   * @param request - ListCacheReserveInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCacheReserveInstancesResponse
   */
  async listCacheReserveInstancesWithOptions(request: $_model.ListCacheReserveInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCacheReserveInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCacheReserveInstances",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCacheReserveInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListCacheReserveInstancesResponse({}));
  }

  /**
   * Query Cache Reserve Instance List
   * 
   * @param request - ListCacheReserveInstancesRequest
   * @returns ListCacheReserveInstancesResponse
   */
  async listCacheReserveInstances(request: $_model.ListCacheReserveInstancesRequest): Promise<$_model.ListCacheReserveInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCacheReserveInstancesWithOptions(request, runtime);
  }

  /**
   * Query multiple cache configurations
   * 
   * @param request - ListCacheRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCacheRulesResponse
   */
  async listCacheRulesWithOptions(request: $_model.ListCacheRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCacheRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCacheRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCacheRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListCacheRulesResponse({}));
  }

  /**
   * Query multiple cache configurations
   * 
   * @param request - ListCacheRulesRequest
   * @returns ListCacheRulesResponse
   */
  async listCacheRules(request: $_model.ListCacheRulesRequest): Promise<$_model.ListCacheRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCacheRulesWithOptions(request, runtime);
  }

  /**
   * Lists certificates of a website.
   * 
   * @param request - ListCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertificatesResponse
   */
  async listCertificatesWithOptions(request: $_model.ListCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertificatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListCertificatesResponse({}));
  }

  /**
   * Lists certificates of a website.
   * 
   * @param request - ListCertificatesRequest
   * @returns ListCertificatesResponse
   */
  async listCertificates(request: $_model.ListCertificatesRequest): Promise<$_model.ListCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertificatesWithOptions(request, runtime);
  }

  /**
   * 查询匹配记录名的站点证书列表
   * 
   * @param request - ListCertificatesByRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCertificatesByRecordResponse
   */
  async listCertificatesByRecordWithOptions(request: $_model.ListCertificatesByRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCertificatesByRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCertificatesByRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCertificatesByRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListCertificatesByRecordResponse({}));
  }

  /**
   * 查询匹配记录名的站点证书列表
   * 
   * @param request - ListCertificatesByRecordRequest
   * @returns ListCertificatesByRecordResponse
   */
  async listCertificatesByRecord(request: $_model.ListCertificatesByRecordRequest): Promise<$_model.ListCertificatesByRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertificatesByRecordWithOptions(request, runtime);
  }

  /**
   * Query TLS Cipher Suite List
   * 
   * @param request - ListCiphersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCiphersResponse
   */
  async listCiphersWithOptions(request: $_model.ListCiphersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCiphersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCiphers",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCiphersResponse>(await this.callApi(params, req, runtime), new $_model.ListCiphersResponse({}));
  }

  /**
   * Query TLS Cipher Suite List
   * 
   * @param request - ListCiphersRequest
   * @returns ListCiphersResponse
   */
  async listCiphers(request: $_model.ListCiphersRequest): Promise<$_model.ListCiphersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCiphersWithOptions(request, runtime);
  }

  /**
   * Queries a list of client certificate authority (CA) certificates for a website.
   * 
   * @param request - ListClientCaCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientCaCertificatesResponse
   */
  async listClientCaCertificatesWithOptions(request: $_model.ListClientCaCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientCaCertificatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientCaCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientCaCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListClientCaCertificatesResponse({}));
  }

  /**
   * Queries a list of client certificate authority (CA) certificates for a website.
   * 
   * @param request - ListClientCaCertificatesRequest
   * @returns ListClientCaCertificatesResponse
   */
  async listClientCaCertificates(request: $_model.ListClientCaCertificatesRequest): Promise<$_model.ListClientCaCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientCaCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries client certificates configured for a website.
   * 
   * @param request - ListClientCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientCertificatesResponse
   */
  async listClientCertificatesWithOptions(request: $_model.ListClientCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientCertificatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListClientCertificatesResponse({}));
  }

  /**
   * Queries client certificates configured for a website.
   * 
   * @param request - ListClientCertificatesRequest
   * @returns ListClientCertificatesResponse
   */
  async listClientCertificates(request: $_model.ListClientCertificatesRequest): Promise<$_model.ListClientCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientCertificatesWithOptions(request, runtime);
  }

  /**
   * Query the list of compression rules
   * 
   * @param request - ListCompressionRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCompressionRulesResponse
   */
  async listCompressionRulesWithOptions(request: $_model.ListCompressionRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCompressionRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCompressionRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCompressionRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListCompressionRulesResponse({}));
  }

  /**
   * Query the list of compression rules
   * 
   * @param request - ListCompressionRulesRequest
   * @returns ListCompressionRulesResponse
   */
  async listCompressionRules(request: $_model.ListCompressionRulesRequest): Promise<$_model.ListCompressionRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCompressionRulesWithOptions(request, runtime);
  }

  /**
   * Lists domain names that are associated with a containerized application.
   * 
   * @param request - ListEdgeContainerAppRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerAppRecordsResponse
   */
  async listEdgeContainerAppRecordsWithOptions(request: $_model.ListEdgeContainerAppRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeContainerAppRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeContainerAppRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeContainerAppRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeContainerAppRecordsResponse({}));
  }

  /**
   * Lists domain names that are associated with a containerized application.
   * 
   * @param request - ListEdgeContainerAppRecordsRequest
   * @returns ListEdgeContainerAppRecordsResponse
   */
  async listEdgeContainerAppRecords(request: $_model.ListEdgeContainerAppRecordsRequest): Promise<$_model.ListEdgeContainerAppRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeContainerAppRecordsWithOptions(request, runtime);
  }

  /**
   * Lists versions of all containerized applications.
   * 
   * @param request - ListEdgeContainerAppVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerAppVersionsResponse
   */
  async listEdgeContainerAppVersionsWithOptions(request: $_model.ListEdgeContainerAppVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeContainerAppVersionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeContainerAppVersions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeContainerAppVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeContainerAppVersionsResponse({}));
  }

  /**
   * Lists versions of all containerized applications.
   * 
   * @param request - ListEdgeContainerAppVersionsRequest
   * @returns ListEdgeContainerAppVersionsResponse
   */
  async listEdgeContainerAppVersions(request: $_model.ListEdgeContainerAppVersionsRequest): Promise<$_model.ListEdgeContainerAppVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeContainerAppVersionsWithOptions(request, runtime);
  }

  /**
   * Queries all containerized applications in your Alibaba Cloud account.
   * 
   * @param request - ListEdgeContainerAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerAppsResponse
   */
  async listEdgeContainerAppsWithOptions(request: $_model.ListEdgeContainerAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeContainerAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderKey)) {
      query["OrderKey"] = request.orderKey;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.searchType)) {
      query["SearchType"] = request.searchType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeContainerApps",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeContainerAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeContainerAppsResponse({}));
  }

  /**
   * Queries all containerized applications in your Alibaba Cloud account.
   * 
   * @param request - ListEdgeContainerAppsRequest
   * @returns ListEdgeContainerAppsResponse
   */
  async listEdgeContainerApps(request: $_model.ListEdgeContainerAppsRequest): Promise<$_model.ListEdgeContainerAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeContainerAppsWithOptions(request, runtime);
  }

  /**
   * Queries the records that are associated with Edge Container for a website.
   * 
   * @param request - ListEdgeContainerRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeContainerRecordsResponse
   */
  async listEdgeContainerRecordsWithOptions(request: $_model.ListEdgeContainerRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeContainerRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeContainerRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeContainerRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeContainerRecordsResponse({}));
  }

  /**
   * Queries the records that are associated with Edge Container for a website.
   * 
   * @param request - ListEdgeContainerRecordsRequest
   * @returns ListEdgeContainerRecordsResponse
   */
  async listEdgeContainerRecords(request: $_model.ListEdgeContainerRecordsRequest): Promise<$_model.ListEdgeContainerRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeContainerRecordsWithOptions(request, runtime);
  }

  /**
   * Queries Edge Routine plans.
   * 
   * @param request - ListEdgeRoutinePlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeRoutinePlansResponse
   */
  async listEdgeRoutinePlansWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeRoutinePlansResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeRoutinePlans",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeRoutinePlansResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeRoutinePlansResponse({}));
  }

  /**
   * Queries Edge Routine plans.
   * @returns ListEdgeRoutinePlansResponse
   */
  async listEdgeRoutinePlans(): Promise<$_model.ListEdgeRoutinePlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeRoutinePlansWithOptions(runtime);
  }

  /**
   * Queries the records that are associated with Edge Routine routes for a website.
   * 
   * @remarks
   * >  You can call this operation 100 times per second.
   * 
   * @param request - ListEdgeRoutineRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEdgeRoutineRecordsResponse
   */
  async listEdgeRoutineRecordsWithOptions(request: $_model.ListEdgeRoutineRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEdgeRoutineRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEdgeRoutineRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEdgeRoutineRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListEdgeRoutineRecordsResponse({}));
  }

  /**
   * Queries the records that are associated with Edge Routine routes for a website.
   * 
   * @remarks
   * >  You can call this operation 100 times per second.
   * 
   * @param request - ListEdgeRoutineRecordsRequest
   * @returns ListEdgeRoutineRecordsResponse
   */
  async listEdgeRoutineRecords(request: $_model.ListEdgeRoutineRecordsRequest): Promise<$_model.ListEdgeRoutineRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEdgeRoutineRecordsWithOptions(request, runtime);
  }

  /**
   * List of HTTP Request Header Rules
   * 
   * @param request - ListHttpRequestHeaderModificationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpRequestHeaderModificationRulesResponse
   */
  async listHttpRequestHeaderModificationRulesWithOptions(request: $_model.ListHttpRequestHeaderModificationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpRequestHeaderModificationRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpRequestHeaderModificationRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpRequestHeaderModificationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpRequestHeaderModificationRulesResponse({}));
  }

  /**
   * List of HTTP Request Header Rules
   * 
   * @param request - ListHttpRequestHeaderModificationRulesRequest
   * @returns ListHttpRequestHeaderModificationRulesResponse
   */
  async listHttpRequestHeaderModificationRules(request: $_model.ListHttpRequestHeaderModificationRulesRequest): Promise<$_model.ListHttpRequestHeaderModificationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHttpRequestHeaderModificationRulesWithOptions(request, runtime);
  }

  /**
   * List of HTTP Response Header Rules
   * 
   * @param request - ListHttpResponseHeaderModificationRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpResponseHeaderModificationRulesResponse
   */
  async listHttpResponseHeaderModificationRulesWithOptions(request: $_model.ListHttpResponseHeaderModificationRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpResponseHeaderModificationRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpResponseHeaderModificationRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpResponseHeaderModificationRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpResponseHeaderModificationRulesResponse({}));
  }

  /**
   * List of HTTP Response Header Rules
   * 
   * @param request - ListHttpResponseHeaderModificationRulesRequest
   * @returns ListHttpResponseHeaderModificationRulesResponse
   */
  async listHttpResponseHeaderModificationRules(request: $_model.ListHttpResponseHeaderModificationRulesRequest): Promise<$_model.ListHttpResponseHeaderModificationRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHttpResponseHeaderModificationRulesWithOptions(request, runtime);
  }

  /**
   * Query multiple HTTPS application configurations
   * 
   * @param request - ListHttpsApplicationConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpsApplicationConfigurationsResponse
   */
  async listHttpsApplicationConfigurationsWithOptions(request: $_model.ListHttpsApplicationConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpsApplicationConfigurationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpsApplicationConfigurations",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpsApplicationConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpsApplicationConfigurationsResponse({}));
  }

  /**
   * Query multiple HTTPS application configurations
   * 
   * @param request - ListHttpsApplicationConfigurationsRequest
   * @returns ListHttpsApplicationConfigurationsResponse
   */
  async listHttpsApplicationConfigurations(request: $_model.ListHttpsApplicationConfigurationsRequest): Promise<$_model.ListHttpsApplicationConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHttpsApplicationConfigurationsWithOptions(request, runtime);
  }

  /**
   * Query multiple HTTPS basic configurations
   * 
   * @param request - ListHttpsBasicConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHttpsBasicConfigurationsResponse
   */
  async listHttpsBasicConfigurationsWithOptions(request: $_model.ListHttpsBasicConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHttpsBasicConfigurationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHttpsBasicConfigurations",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHttpsBasicConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListHttpsBasicConfigurationsResponse({}));
  }

  /**
   * Query multiple HTTPS basic configurations
   * 
   * @param request - ListHttpsBasicConfigurationsRequest
   * @returns ListHttpsBasicConfigurationsResponse
   */
  async listHttpsBasicConfigurations(request: $_model.ListHttpsBasicConfigurationsRequest): Promise<$_model.ListHttpsBasicConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHttpsBasicConfigurationsWithOptions(request, runtime);
  }

  /**
   * Query Multiple Site Image Transformation Configurations
   * 
   * @param request - ListImageTransformsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageTransformsResponse
   */
  async listImageTransformsWithOptions(request: $_model.ListImageTransformsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageTransformsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageTransforms",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImageTransformsResponse>(await this.callApi(params, req, runtime), new $_model.ListImageTransformsResponse({}));
  }

  /**
   * Query Multiple Site Image Transformation Configurations
   * 
   * @param request - ListImageTransformsRequest
   * @returns ListImageTransformsResponse
   */
  async listImageTransforms(request: $_model.ListImageTransformsRequest): Promise<$_model.ListImageTransformsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageTransformsWithOptions(request, runtime);
  }

  /**
   * Queries the quota details in a subscription plan.
   * 
   * @param request - ListInstanceQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceQuotasResponse
   */
  async listInstanceQuotasWithOptions(request: $_model.ListInstanceQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceQuotasResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceQuotas",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceQuotasResponse({}));
  }

  /**
   * Queries the quota details in a subscription plan.
   * 
   * @param request - ListInstanceQuotasRequest
   * @returns ListInstanceQuotasResponse
   */
  async listInstanceQuotas(request: $_model.ListInstanceQuotasRequest): Promise<$_model.ListInstanceQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceQuotasWithOptions(request, runtime);
  }

  /**
   * Queries quotas and the actual usage in a plan based on the website or plan ID.
   * 
   * @param request - ListInstanceQuotasWithUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceQuotasWithUsageResponse
   */
  async listInstanceQuotasWithUsageWithOptions(request: $_model.ListInstanceQuotasWithUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceQuotasWithUsageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceQuotasWithUsage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceQuotasWithUsageResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceQuotasWithUsageResponse({}));
  }

  /**
   * Queries quotas and the actual usage in a plan based on the website or plan ID.
   * 
   * @param request - ListInstanceQuotasWithUsageRequest
   * @returns ListInstanceQuotasWithUsageResponse
   */
  async listInstanceQuotasWithUsage(request: $_model.ListInstanceQuotasWithUsageRequest): Promise<$_model.ListInstanceQuotasWithUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceQuotasWithUsageWithOptions(request, runtime);
  }

  /**
   * Lists all key-value pairs in a namespace in your Alibaba Cloud account.
   * 
   * @param request - ListKvsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKvsResponse
   */
  async listKvsWithOptions(request: $_model.ListKvsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKvsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKvs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKvsResponse>(await this.callApi(params, req, runtime), new $_model.ListKvsResponse({}));
  }

  /**
   * Lists all key-value pairs in a namespace in your Alibaba Cloud account.
   * 
   * @param request - ListKvsRequest
   * @returns ListKvsResponse
   */
  async listKvs(request: $_model.ListKvsRequest): Promise<$_model.ListKvsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKvsWithOptions(request, runtime);
  }

  /**
   * Queries all custom lists and their details in an Alibaba Cloud account. You can specify query arguments to filter the results and display the returned lists by page.
   * 
   * @param tmpReq - ListListsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListsResponse
   */
  async listListsWithOptions(tmpReq: $_model.ListListsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListListsResponse> {
    tmpReq.validate();
    let request = new $_model.ListListsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLists",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListListsResponse>(await this.callApi(params, req, runtime), new $_model.ListListsResponse({}));
  }

  /**
   * Queries all custom lists and their details in an Alibaba Cloud account. You can specify query arguments to filter the results and display the returned lists by page.
   * 
   * @param request - ListListsRequest
   * @returns ListListsResponse
   */
  async listLists(request: $_model.ListListsRequest): Promise<$_model.ListListsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listListsWithOptions(request, runtime);
  }

  /**
   * Query the status of origins in load balancers
   * 
   * @remarks
   * Query the status of origins under load balancers. You can pass multiple load balancer IDs at once, separated by commas. This is for load balancers that have monitors configured. It will probe the origins in the source address pools used by the load balancers and record the current status of each origin.
   * - Healthy(healthy): The probe result is available.
   * - Unhealthy(unhealthy): The probe result is unavailable.
   * - Unknown(unknown): Unknown, the monitor has not yet probed.
   * - Undetected(undetected): The load balancer to which the origin belongs is not bound to a monitor.
   * 
   * @param request - ListLoadBalancerOriginStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancerOriginStatusResponse
   */
  async listLoadBalancerOriginStatusWithOptions(request: $_model.ListLoadBalancerOriginStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLoadBalancerOriginStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLoadBalancerOriginStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLoadBalancerOriginStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListLoadBalancerOriginStatusResponse({}));
  }

  /**
   * Query the status of origins in load balancers
   * 
   * @remarks
   * Query the status of origins under load balancers. You can pass multiple load balancer IDs at once, separated by commas. This is for load balancers that have monitors configured. It will probe the origins in the source address pools used by the load balancers and record the current status of each origin.
   * - Healthy(healthy): The probe result is available.
   * - Unhealthy(unhealthy): The probe result is unavailable.
   * - Unknown(unknown): Unknown, the monitor has not yet probed.
   * - Undetected(undetected): The load balancer to which the origin belongs is not bound to a monitor.
   * 
   * @param request - ListLoadBalancerOriginStatusRequest
   * @returns ListLoadBalancerOriginStatusResponse
   */
  async listLoadBalancerOriginStatus(request: $_model.ListLoadBalancerOriginStatusRequest): Promise<$_model.ListLoadBalancerOriginStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLoadBalancerOriginStatusWithOptions(request, runtime);
  }

  /**
   * Query Load Balancer Region List
   * 
   * @remarks
   * When creating a load balancer \\"based on country/region scheduling\\" strategy through OpenAPI, use the code of primary or secondary regions to represent traffic from this geographical area.
   * 
   * @param request - ListLoadBalancerRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancerRegionsResponse
   */
  async listLoadBalancerRegionsWithOptions(request: $_model.ListLoadBalancerRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLoadBalancerRegionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLoadBalancerRegions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLoadBalancerRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListLoadBalancerRegionsResponse({}));
  }

  /**
   * Query Load Balancer Region List
   * 
   * @remarks
   * When creating a load balancer \\"based on country/region scheduling\\" strategy through OpenAPI, use the code of primary or secondary regions to represent traffic from this geographical area.
   * 
   * @param request - ListLoadBalancerRegionsRequest
   * @returns ListLoadBalancerRegionsResponse
   */
  async listLoadBalancerRegions(request: $_model.ListLoadBalancerRegionsRequest): Promise<$_model.ListLoadBalancerRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLoadBalancerRegionsWithOptions(request, runtime);
  }

  /**
   * Query the list of load balancers
   * 
   * @param request - ListLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancersWithOptions(request: $_model.ListLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLoadBalancersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLoadBalancers",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.ListLoadBalancersResponse({}));
  }

  /**
   * Query the list of load balancers
   * 
   * @param request - ListLoadBalancersRequest
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancers(request: $_model.ListLoadBalancersRequest): Promise<$_model.ListLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  /**
   * List Custom Managed Rule Groups
   * 
   * @param request - ListManagedRulesGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManagedRulesGroupsResponse
   */
  async listManagedRulesGroupsWithOptions(request: $_model.ListManagedRulesGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListManagedRulesGroupsResponse> {
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
      action: "ListManagedRulesGroups",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListManagedRulesGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListManagedRulesGroupsResponse({}));
  }

  /**
   * List Custom Managed Rule Groups
   * 
   * @param request - ListManagedRulesGroupsRequest
   * @returns ListManagedRulesGroupsResponse
   */
  async listManagedRulesGroups(request: $_model.ListManagedRulesGroupsRequest): Promise<$_model.ListManagedRulesGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listManagedRulesGroupsWithOptions(request, runtime);
  }

  /**
   * Query multiple network optimization configurations
   * 
   * @param request - ListNetworkOptimizationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworkOptimizationsResponse
   */
  async listNetworkOptimizationsWithOptions(request: $_model.ListNetworkOptimizationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworkOptimizationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworkOptimizations",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworkOptimizationsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworkOptimizationsResponse({}));
  }

  /**
   * Query multiple network optimization configurations
   * 
   * @param request - ListNetworkOptimizationsRequest
   * @returns ListNetworkOptimizationsResponse
   */
  async listNetworkOptimizations(request: $_model.ListNetworkOptimizationsRequest): Promise<$_model.ListNetworkOptimizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworkOptimizationsWithOptions(request, runtime);
  }

  /**
   * 查询源服务器CA证书列表
   * 
   * @param request - ListOriginCaCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOriginCaCertificatesResponse
   */
  async listOriginCaCertificatesWithOptions(request: $_model.ListOriginCaCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOriginCaCertificatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOriginCaCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOriginCaCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListOriginCaCertificatesResponse({}));
  }

  /**
   * 查询源服务器CA证书列表
   * 
   * @param request - ListOriginCaCertificatesRequest
   * @returns ListOriginCaCertificatesResponse
   */
  async listOriginCaCertificates(request: $_model.ListOriginCaCertificatesRequest): Promise<$_model.ListOriginCaCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOriginCaCertificatesWithOptions(request, runtime);
  }

  /**
   * 查询域名回源客户端证书列表
   * 
   * @param request - ListOriginClientCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOriginClientCertificatesResponse
   */
  async listOriginClientCertificatesWithOptions(request: $_model.ListOriginClientCertificatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOriginClientCertificatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOriginClientCertificates",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOriginClientCertificatesResponse>(await this.callApi(params, req, runtime), new $_model.ListOriginClientCertificatesResponse({}));
  }

  /**
   * 查询域名回源客户端证书列表
   * 
   * @param request - ListOriginClientCertificatesRequest
   * @returns ListOriginClientCertificatesResponse
   */
  async listOriginClientCertificates(request: $_model.ListOriginClientCertificatesRequest): Promise<$_model.ListOriginClientCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOriginClientCertificatesWithOptions(request, runtime);
  }

  /**
   * List Origin Pools
   * 
   * @param request - ListOriginPoolsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOriginPoolsResponse
   */
  async listOriginPoolsWithOptions(request: $_model.ListOriginPoolsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOriginPoolsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOriginPools",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOriginPoolsResponse>(await this.callApi(params, req, runtime), new $_model.ListOriginPoolsResponse({}));
  }

  /**
   * List Origin Pools
   * 
   * @param request - ListOriginPoolsRequest
   * @returns ListOriginPoolsResponse
   */
  async listOriginPools(request: $_model.ListOriginPoolsRequest): Promise<$_model.ListOriginPoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOriginPoolsWithOptions(request, runtime);
  }

  /**
   * Query multiple origin rule configurations
   * 
   * @param request - ListOriginRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOriginRulesResponse
   */
  async listOriginRulesWithOptions(request: $_model.ListOriginRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOriginRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOriginRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOriginRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListOriginRulesResponse({}));
  }

  /**
   * Query multiple origin rule configurations
   * 
   * @param request - ListOriginRulesRequest
   * @returns ListOriginRulesResponse
   */
  async listOriginRules(request: $_model.ListOriginRulesRequest): Promise<$_model.ListOriginRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOriginRulesWithOptions(request, runtime);
  }

  /**
   * Lists all custom error pages that you created. You can define the page number and the number of entries per page to display the response.
   * 
   * @param tmpReq - ListPagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPagesResponse
   */
  async listPagesWithOptions(tmpReq: $_model.ListPagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPagesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPages",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPagesResponse>(await this.callApi(params, req, runtime), new $_model.ListPagesResponse({}));
  }

  /**
   * Lists all custom error pages that you created. You can define the page number and the number of entries per page to display the response.
   * 
   * @param request - ListPagesRequest
   * @returns ListPagesResponse
   */
  async listPages(request: $_model.ListPagesRequest): Promise<$_model.ListPagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of Domain Name System (DNS) records of a website, including the record value, priority, and authentication configurations. Supports filtering by specifying parameters such as RecordName and RecordMatchType.
   * 
   * @remarks
   * The DNS records related to Edge Container, Edge Routine, and TCP/UDP proxy are not returned in this operation.
   * 
   * @param request - ListRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecordsResponse
   */
  async listRecordsWithOptions(request: $_model.ListRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecordsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListRecordsResponse({}));
  }

  /**
   * Queries a list of Domain Name System (DNS) records of a website, including the record value, priority, and authentication configurations. Supports filtering by specifying parameters such as RecordName and RecordMatchType.
   * 
   * @remarks
   * The DNS records related to Edge Container, Edge Routine, and TCP/UDP proxy are not returned in this operation.
   * 
   * @param request - ListRecordsRequest
   * @returns ListRecordsResponse
   */
  async listRecords(request: $_model.ListRecordsRequest): Promise<$_model.ListRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRecordsWithOptions(request, runtime);
  }

  /**
   * Query Redirect Rule List
   * 
   * @param request - ListRedirectRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRedirectRulesResponse
   */
  async listRedirectRulesWithOptions(request: $_model.ListRedirectRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRedirectRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRedirectRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRedirectRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRedirectRulesResponse({}));
  }

  /**
   * Query Redirect Rule List
   * 
   * @param request - ListRedirectRulesRequest
   * @returns ListRedirectRulesResponse
   */
  async listRedirectRules(request: $_model.ListRedirectRulesRequest): Promise<$_model.ListRedirectRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRedirectRulesWithOptions(request, runtime);
  }

  /**
   * List of Rewrite URL Rules
   * 
   * @param request - ListRewriteUrlRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRewriteUrlRulesResponse
   */
  async listRewriteUrlRulesWithOptions(request: $_model.ListRewriteUrlRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRewriteUrlRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRewriteUrlRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRewriteUrlRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRewriteUrlRulesResponse({}));
  }

  /**
   * List of Rewrite URL Rules
   * 
   * @param request - ListRewriteUrlRulesRequest
   * @returns ListRewriteUrlRulesResponse
   */
  async listRewriteUrlRules(request: $_model.ListRewriteUrlRulesRequest): Promise<$_model.ListRewriteUrlRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRewriteUrlRulesWithOptions(request, runtime);
  }

  /**
   * Lists the regions to which Edge Routine code can be released for canary deployment.
   * 
   * @param request - ListRoutineCanaryAreasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutineCanaryAreasResponse
   */
  async listRoutineCanaryAreasWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListRoutineCanaryAreasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListRoutineCanaryAreas",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoutineCanaryAreasResponse>(await this.callApi(params, req, runtime), new $_model.ListRoutineCanaryAreasResponse({}));
  }

  /**
   * Lists the regions to which Edge Routine code can be released for canary deployment.
   * @returns ListRoutineCanaryAreasResponse
   */
  async listRoutineCanaryAreas(): Promise<$_model.ListRoutineCanaryAreasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoutineCanaryAreasWithOptions(runtime);
  }

  /**
   * 查询Routine的代码版本列表
   * 
   * @param request - ListRoutineCodeVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutineCodeVersionsResponse
   */
  async listRoutineCodeVersionsWithOptions(request: $_model.ListRoutineCodeVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoutineCodeVersionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoutineCodeVersions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoutineCodeVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRoutineCodeVersionsResponse({}));
  }

  /**
   * 查询Routine的代码版本列表
   * 
   * @param request - ListRoutineCodeVersionsRequest
   * @returns ListRoutineCodeVersionsResponse
   */
  async listRoutineCodeVersions(request: $_model.ListRoutineCodeVersionsRequest): Promise<$_model.ListRoutineCodeVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoutineCodeVersionsWithOptions(request, runtime);
  }

  /**
   * 查询函数关联域名列表
   * 
   * @param request - ListRoutineRelatedRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutineRelatedRecordsResponse
   */
  async listRoutineRelatedRecordsWithOptions(request: $_model.ListRoutineRelatedRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoutineRelatedRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      body["SearchKeyWord"] = request.searchKeyWord;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoutineRelatedRecords",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoutineRelatedRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListRoutineRelatedRecordsResponse({}));
  }

  /**
   * 查询函数关联域名列表
   * 
   * @param request - ListRoutineRelatedRecordsRequest
   * @returns ListRoutineRelatedRecordsResponse
   */
  async listRoutineRelatedRecords(request: $_model.ListRoutineRelatedRecordsRequest): Promise<$_model.ListRoutineRelatedRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoutineRelatedRecordsWithOptions(request, runtime);
  }

  /**
   * 查询边缘程序的函数路由列表
   * 
   * @param request - ListRoutineRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutineRoutesResponse
   */
  async listRoutineRoutesWithOptions(request: $_model.ListRoutineRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoutineRoutesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.routineName)) {
      query["RoutineName"] = request.routineName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoutineRoutes",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoutineRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListRoutineRoutesResponse({}));
  }

  /**
   * 查询边缘程序的函数路由列表
   * 
   * @param request - ListRoutineRoutesRequest
   * @returns ListRoutineRoutesResponse
   */
  async listRoutineRoutes(request: $_model.ListRoutineRoutesRequest): Promise<$_model.ListRoutineRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoutineRoutesWithOptions(request, runtime);
  }

  /**
   * Lists the plans in a scheduled prefetch task by task ID.
   * 
   * @param request - ListScheduledPreloadExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPreloadExecutionsResponse
   */
  async listScheduledPreloadExecutionsWithOptions(request: $_model.ListScheduledPreloadExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledPreloadExecutionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPreloadExecutions",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledPreloadExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledPreloadExecutionsResponse({}));
  }

  /**
   * Lists the plans in a scheduled prefetch task by task ID.
   * 
   * @param request - ListScheduledPreloadExecutionsRequest
   * @returns ListScheduledPreloadExecutionsResponse
   */
  async listScheduledPreloadExecutions(request: $_model.ListScheduledPreloadExecutionsRequest): Promise<$_model.ListScheduledPreloadExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduledPreloadExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries the scheduled prefetch tasks for a website.
   * 
   * @param request - ListScheduledPreloadJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPreloadJobsResponse
   */
  async listScheduledPreloadJobsWithOptions(request: $_model.ListScheduledPreloadJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledPreloadJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPreloadJobs",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledPreloadJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledPreloadJobsResponse({}));
  }

  /**
   * Queries the scheduled prefetch tasks for a website.
   * 
   * @param request - ListScheduledPreloadJobsRequest
   * @returns ListScheduledPreloadJobsResponse
   */
  async listScheduledPreloadJobs(request: $_model.ListScheduledPreloadJobsRequest): Promise<$_model.ListScheduledPreloadJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScheduledPreloadJobsWithOptions(request, runtime);
  }

  /**
   * Lists all log delivery tasks that are in progress.
   * 
   * @param request - ListSiteDeliveryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSiteDeliveryTasksResponse
   */
  async listSiteDeliveryTasksWithOptions(request: $_model.ListSiteDeliveryTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSiteDeliveryTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSiteDeliveryTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSiteDeliveryTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSiteDeliveryTasksResponse({}));
  }

  /**
   * Lists all log delivery tasks that are in progress.
   * 
   * @param request - ListSiteDeliveryTasksRequest
   * @returns ListSiteDeliveryTasksResponse
   */
  async listSiteDeliveryTasks(request: $_model.ListSiteDeliveryTasksRequest): Promise<$_model.ListSiteDeliveryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSiteDeliveryTasksWithOptions(request, runtime);
  }

  /**
   * 查询站点的函数路由列表
   * 
   * @param request - ListSiteRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSiteRoutesResponse
   */
  async listSiteRoutesWithOptions(request: $_model.ListSiteRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSiteRoutesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSiteRoutes",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSiteRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListSiteRoutesResponse({}));
  }

  /**
   * 查询站点的函数路由列表
   * 
   * @param request - ListSiteRoutesRequest
   * @returns ListSiteRoutesResponse
   */
  async listSiteRoutes(request: $_model.ListSiteRoutesRequest): Promise<$_model.ListSiteRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSiteRoutesWithOptions(request, runtime);
  }

  /**
   * Queries the information about websites in your account, such as the name, status, and configuration of each website.
   * 
   * @param tmpReq - ListSitesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSitesResponse
   */
  async listSitesWithOptions(tmpReq: $_model.ListSitesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSitesResponse> {
    tmpReq.validate();
    let request = new $_model.ListSitesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagFilter)) {
      request.tagFilterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagFilter, "TagFilter", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSites",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSitesResponse>(await this.callApi(params, req, runtime), new $_model.ListSitesResponse({}));
  }

  /**
   * Queries the information about websites in your account, such as the name, status, and configuration of each website.
   * 
   * @param request - ListSitesRequest
   * @returns ListSitesResponse
   */
  async listSites(request: $_model.ListSitesRequest): Promise<$_model.ListSitesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSitesWithOptions(request, runtime);
  }

  /**
   * Queries tags based on the region ID and resource type.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxItem)) {
      query["MaxItem"] = request.maxItem;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2024-09-10",
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
   * Queries tags based on the region ID and resource type.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the execution status and running information of file upload tasks based on the task time and type.
   * 
   * @param request - ListUploadTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUploadTasksResponse
   */
  async listUploadTasksWithOptions(request: $_model.ListUploadTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUploadTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUploadTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUploadTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListUploadTasksResponse({}));
  }

  /**
   * Queries the execution status and running information of file upload tasks based on the task time and type.
   * 
   * @param request - ListUploadTasksRequest
   * @returns ListUploadTasksResponse
   */
  async listUploadTasks(request: $_model.ListUploadTasksRequest): Promise<$_model.ListUploadTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUploadTasksWithOptions(request, runtime);
  }

  /**
   * Queries all delivery tasks in your Alibaba Cloud account by page. You can filter the delivery tasks by the category of the delivered real-time logs.
   * 
   * @param request - ListUserDeliveryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDeliveryTasksResponse
   */
  async listUserDeliveryTasksWithOptions(request: $_model.ListUserDeliveryTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDeliveryTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDeliveryTasks",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDeliveryTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDeliveryTasksResponse({}));
  }

  /**
   * Queries all delivery tasks in your Alibaba Cloud account by page. You can filter the delivery tasks by the category of the delivered real-time logs.
   * 
   * @param request - ListUserDeliveryTasksRequest
   * @returns ListUserDeliveryTasksResponse
   */
  async listUserDeliveryTasks(request: $_model.ListUserDeliveryTasksRequest): Promise<$_model.ListUserDeliveryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserDeliveryTasksWithOptions(request, runtime);
  }

  /**
   * Queries the plans that you purchased and the details of the plans.
   * 
   * @param request - ListUserRatePlanInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserRatePlanInstancesResponse
   */
  async listUserRatePlanInstancesWithOptions(request: $_model.ListUserRatePlanInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserRatePlanInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserRatePlanInstances",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserRatePlanInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserRatePlanInstancesResponse({}));
  }

  /**
   * Queries the plans that you purchased and the details of the plans.
   * 
   * @param request - ListUserRatePlanInstancesRequest
   * @returns ListUserRatePlanInstancesResponse
   */
  async listUserRatePlanInstances(request: $_model.ListUserRatePlanInstancesRequest): Promise<$_model.ListUserRatePlanInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserRatePlanInstancesWithOptions(request, runtime);
  }

  /**
   * 查询用户的Routine列表
   * 
   * @param request - ListUserRoutinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserRoutinesResponse
   */
  async listUserRoutinesWithOptions(request: $_model.ListUserRoutinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserRoutinesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeyWord)) {
      query["SearchKeyWord"] = request.searchKeyWord;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserRoutines",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserRoutinesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserRoutinesResponse({}));
  }

  /**
   * 查询用户的Routine列表
   * 
   * @param request - ListUserRoutinesRequest
   * @returns ListUserRoutinesResponse
   */
  async listUserRoutines(request: $_model.ListUserRoutinesRequest): Promise<$_model.ListUserRoutinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserRoutinesWithOptions(request, runtime);
  }

  /**
   * List WAF Managed Rules
   * 
   * @param tmpReq - ListWafManagedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafManagedRulesResponse
   */
  async listWafManagedRulesWithOptions(tmpReq: $_model.ListWafManagedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafManagedRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWafManagedRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.attackType)) {
      query["AttackType"] = request.attackType;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.protectionLevel)) {
      query["ProtectionLevel"] = request.protectionLevel;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafManagedRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafManagedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWafManagedRulesResponse({}));
  }

  /**
   * List WAF Managed Rules
   * 
   * @param request - ListWafManagedRulesRequest
   * @returns ListWafManagedRulesResponse
   */
  async listWafManagedRules(request: $_model.ListWafManagedRulesRequest): Promise<$_model.ListWafManagedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafManagedRulesWithOptions(request, runtime);
  }

  /**
   * List WAF Phases
   * 
   * @param request - ListWafPhasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafPhasesResponse
   */
  async listWafPhasesWithOptions(request: $_model.ListWafPhasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafPhasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafPhases",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafPhasesResponse>(await this.callApi(params, req, runtime), new $_model.ListWafPhasesResponse({}));
  }

  /**
   * List WAF Phases
   * 
   * @param request - ListWafPhasesRequest
   * @returns ListWafPhasesResponse
   */
  async listWafPhases(request: $_model.ListWafPhasesRequest): Promise<$_model.ListWafPhasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafPhasesWithOptions(request, runtime);
  }

  /**
   * List WAF Rules
   * 
   * @param tmpReq - ListWafRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafRulesResponse
   */
  async listWafRulesWithOptions(tmpReq: $_model.ListWafRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWafRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!$dara.isNull(request.rulesetId)) {
      query["RulesetId"] = request.rulesetId;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWafRulesResponse({}));
  }

  /**
   * List WAF Rules
   * 
   * @param request - ListWafRulesRequest
   * @returns ListWafRulesResponse
   */
  async listWafRules(request: $_model.ListWafRulesRequest): Promise<$_model.ListWafRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafRulesWithOptions(request, runtime);
  }

  /**
   * List WAF Rule Sets
   * 
   * @param tmpReq - ListWafRulesetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafRulesetsResponse
   */
  async listWafRulesetsWithOptions(tmpReq: $_model.ListWafRulesetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafRulesetsResponse> {
    tmpReq.validate();
    let request = new $_model.ListWafRulesetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafRulesets",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafRulesetsResponse>(await this.callApi(params, req, runtime), new $_model.ListWafRulesetsResponse({}));
  }

  /**
   * List WAF Rule Sets
   * 
   * @param request - ListWafRulesetsRequest
   * @returns ListWafRulesetsResponse
   */
  async listWafRulesets(request: $_model.ListWafRulesetsRequest): Promise<$_model.ListWafRulesetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafRulesetsWithOptions(request, runtime);
  }

  /**
   * List WAF Template Rules
   * 
   * @param tmpReq - ListWafTemplateRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafTemplateRulesResponse
   */
  async listWafTemplateRulesWithOptions(tmpReq: $_model.ListWafTemplateRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafTemplateRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWafTemplateRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryArgs)) {
      request.queryArgsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryArgs, "QueryArgs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.queryArgsShrink)) {
      query["QueryArgs"] = request.queryArgsShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafTemplateRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafTemplateRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWafTemplateRulesResponse({}));
  }

  /**
   * List WAF Template Rules
   * 
   * @param request - ListWafTemplateRulesRequest
   * @returns ListWafTemplateRulesResponse
   */
  async listWafTemplateRules(request: $_model.ListWafTemplateRulesRequest): Promise<$_model.ListWafTemplateRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafTemplateRulesWithOptions(request, runtime);
  }

  /**
   * List WAF Rule Usage
   * 
   * @param request - ListWafUsageOfRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWafUsageOfRulesResponse
   */
  async listWafUsageOfRulesWithOptions(request: $_model.ListWafUsageOfRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWafUsageOfRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.phase)) {
      query["Phase"] = request.phase;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWafUsageOfRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWafUsageOfRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWafUsageOfRulesResponse({}));
  }

  /**
   * List WAF Rule Usage
   * 
   * @param request - ListWafUsageOfRulesRequest
   * @returns ListWafUsageOfRulesResponse
   */
  async listWafUsageOfRules(request: $_model.ListWafUsageOfRulesRequest): Promise<$_model.ListWafUsageOfRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWafUsageOfRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about waiting room events for a waiting room.
   * 
   * @remarks
   * You can call this operation to query details of all waiting room events related to a waiting room in a website.
   * 
   * @param request - ListWaitingRoomEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomEventsResponse
   */
  async listWaitingRoomEventsWithOptions(request: $_model.ListWaitingRoomEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWaitingRoomEventsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWaitingRoomEvents",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWaitingRoomEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListWaitingRoomEventsResponse({}));
  }

  /**
   * Queries the information about waiting room events for a waiting room.
   * 
   * @remarks
   * You can call this operation to query details of all waiting room events related to a waiting room in a website.
   * 
   * @param request - ListWaitingRoomEventsRequest
   * @returns ListWaitingRoomEventsResponse
   */
  async listWaitingRoomEvents(request: $_model.ListWaitingRoomEventsRequest): Promise<$_model.ListWaitingRoomEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWaitingRoomEventsWithOptions(request, runtime);
  }

  /**
   * Query Waiting Room Bypass Rules
   * 
   * @remarks
   * This API allows users to query the list of waiting room bypass rules associated with a specific site.
   * 
   * @param request - ListWaitingRoomRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomRulesResponse
   */
  async listWaitingRoomRulesWithOptions(request: $_model.ListWaitingRoomRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWaitingRoomRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWaitingRoomRules",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWaitingRoomRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListWaitingRoomRulesResponse({}));
  }

  /**
   * Query Waiting Room Bypass Rules
   * 
   * @remarks
   * This API allows users to query the list of waiting room bypass rules associated with a specific site.
   * 
   * @param request - ListWaitingRoomRulesRequest
   * @returns ListWaitingRoomRulesResponse
   */
  async listWaitingRoomRules(request: $_model.ListWaitingRoomRulesRequest): Promise<$_model.ListWaitingRoomRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWaitingRoomRulesWithOptions(request, runtime);
  }

  /**
   * Queries the information about all waiting rooms in a website.
   * 
   * @remarks
   * You can call this operation to query detailed configurations about all waiting rooms in a website, including the status, name, and queuing rules of each waiting room.
   * 
   * @param request - ListWaitingRoomsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaitingRoomsResponse
   */
  async listWaitingRoomsWithOptions(request: $_model.ListWaitingRoomsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWaitingRoomsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWaitingRooms",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWaitingRoomsResponse>(await this.callApi(params, req, runtime), new $_model.ListWaitingRoomsResponse({}));
  }

  /**
   * Queries the information about all waiting rooms in a website.
   * 
   * @remarks
   * You can call this operation to query detailed configurations about all waiting rooms in a website, including the status, name, and queuing rules of each waiting room.
   * 
   * @param request - ListWaitingRoomsRequest
   * @returns ListWaitingRoomsResponse
   */
  async listWaitingRooms(request: $_model.ListWaitingRoomsRequest): Promise<$_model.ListWaitingRoomsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWaitingRoomsWithOptions(request, runtime);
  }

  /**
   * OpenErService
   * 
   * @param request - OpenErServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenErServiceResponse
   */
  async openErServiceWithOptions(request: $_model.OpenErServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenErServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenErService",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenErServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenErServiceResponse({}));
  }

  /**
   * OpenErService
   * 
   * @param request - OpenErServiceRequest
   * @returns OpenErServiceResponse
   */
  async openErService(request: $_model.OpenErServiceRequest): Promise<$_model.OpenErServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openErServiceWithOptions(request, runtime);
  }

  /**
   * Prefetches cache.
   * 
   * @param tmpReq - PreloadCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadCachesResponse
   */
  async preloadCachesWithOptions(tmpReq: $_model.PreloadCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadCachesResponse> {
    tmpReq.validate();
    let request = new $_model.PreloadCachesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    if (!$dara.isNull(tmpReq.headers)) {
      request.headersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.headers, "Headers", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.headersShrink)) {
      query["Headers"] = request.headersShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadCaches",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadCachesResponse>(await this.callApi(params, req, runtime), new $_model.PreloadCachesResponse({}));
  }

  /**
   * Prefetches cache.
   * 
   * @param request - PreloadCachesRequest
   * @returns PreloadCachesResponse
   */
  async preloadCaches(request: $_model.PreloadCachesRequest): Promise<$_model.PreloadCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadCachesWithOptions(request, runtime);
  }

  /**
   * Releases a specific version of a containerized application. You can call this operation to iterate an application.
   * 
   * @param tmpReq - PublishEdgeContainerAppVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishEdgeContainerAppVersionResponse
   */
  async publishEdgeContainerAppVersionWithOptions(tmpReq: $_model.PublishEdgeContainerAppVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishEdgeContainerAppVersionResponse> {
    tmpReq.validate();
    let request = new $_model.PublishEdgeContainerAppVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.regions)) {
      request.regionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.regions, "Regions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.fullRelease)) {
      query["FullRelease"] = request.fullRelease;
    }

    if (!$dara.isNull(request.publishType)) {
      query["PublishType"] = request.publishType;
    }

    if (!$dara.isNull(request.regionsShrink)) {
      query["Regions"] = request.regionsShrink;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.percentage)) {
      body["Percentage"] = request.percentage;
    }

    if (!$dara.isNull(request.publishEnv)) {
      body["PublishEnv"] = request.publishEnv;
    }

    if (!$dara.isNull(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishEdgeContainerAppVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishEdgeContainerAppVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishEdgeContainerAppVersionResponse({}));
  }

  /**
   * Releases a specific version of a containerized application. You can call this operation to iterate an application.
   * 
   * @param request - PublishEdgeContainerAppVersionRequest
   * @returns PublishEdgeContainerAppVersionResponse
   */
  async publishEdgeContainerAppVersion(request: $_model.PublishEdgeContainerAppVersionRequest): Promise<$_model.PublishEdgeContainerAppVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishEdgeContainerAppVersionWithOptions(request, runtime);
  }

  /**
   * Releases a code version of a routine to the staging, canary, or production environment. You can specify the regions where the canary environment is deployed to release your code.
   * 
   * @param request - PublishRoutineCodeVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRoutineCodeVersionResponse
   */
  async publishRoutineCodeVersionWithOptions(request: $_model.PublishRoutineCodeVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRoutineCodeVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeVersion)) {
      body["CodeVersion"] = request.codeVersion;
    }

    if (!$dara.isNull(request.env)) {
      body["Env"] = request.env;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRoutineCodeVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRoutineCodeVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishRoutineCodeVersionResponse({}));
  }

  /**
   * Releases a code version of a routine to the staging, canary, or production environment. You can specify the regions where the canary environment is deployed to release your code.
   * 
   * @param request - PublishRoutineCodeVersionRequest
   * @returns PublishRoutineCodeVersionResponse
   */
  async publishRoutineCodeVersion(request: $_model.PublishRoutineCodeVersionRequest): Promise<$_model.PublishRoutineCodeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishRoutineCodeVersionWithOptions(request, runtime);
  }

  /**
   * New Purchase of Cache Retention
   * 
   * @param request - PurchaseCacheReserveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurchaseCacheReserveResponse
   */
  async purchaseCacheReserveWithOptions(request: $_model.PurchaseCacheReserveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurchaseCacheReserveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.crRegion)) {
      query["CrRegion"] = request.crRegion;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.quotaGb)) {
      query["QuotaGb"] = request.quotaGb;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurchaseCacheReserve",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurchaseCacheReserveResponse>(await this.callApi(params, req, runtime), new $_model.PurchaseCacheReserveResponse({}));
  }

  /**
   * New Purchase of Cache Retention
   * 
   * @param request - PurchaseCacheReserveRequest
   * @returns PurchaseCacheReserveResponse
   */
  async purchaseCacheReserve(request: $_model.PurchaseCacheReserveRequest): Promise<$_model.PurchaseCacheReserveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purchaseCacheReserveWithOptions(request, runtime);
  }

  /**
   * Purchase New Package
   * 
   * @remarks
   * 1. The package name and code can be obtained from the DescribeRatePlanPrice interface.
   * 2. If the acceleration area is not overseas, the site must have successfully completed the filing process.
   * 
   * @param request - PurchaseRatePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurchaseRatePlanResponse
   */
  async purchaseRatePlanWithOptions(request: $_model.PurchaseRatePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurchaseRatePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.amount)) {
      query["Amount"] = request.amount;
    }

    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.planCode)) {
      query["PlanCode"] = request.planCode;
    }

    if (!$dara.isNull(request.planName)) {
      query["PlanName"] = request.planName;
    }

    if (!$dara.isNull(request.siteName)) {
      query["SiteName"] = request.siteName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurchaseRatePlan",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurchaseRatePlanResponse>(await this.callApi(params, req, runtime), new $_model.PurchaseRatePlanResponse({}));
  }

  /**
   * Purchase New Package
   * 
   * @remarks
   * 1. The package name and code can be obtained from the DescribeRatePlanPrice interface.
   * 2. If the acceleration area is not overseas, the site must have successfully completed the filing process.
   * 
   * @param request - PurchaseRatePlanRequest
   * @returns PurchaseRatePlanResponse
   */
  async purchaseRatePlan(request: $_model.PurchaseRatePlanRequest): Promise<$_model.PurchaseRatePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purchaseRatePlanWithOptions(request, runtime);
  }

  /**
   * Cache Refresh
   * 
   * @param tmpReq - PurgeCachesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurgeCachesResponse
   */
  async purgeCachesWithOptions(tmpReq: $_model.PurgeCachesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurgeCachesResponse> {
    tmpReq.validate();
    let request = new $_model.PurgeCachesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.content)) {
      request.contentShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.content, "Content", "json");
    }

    let query = { };
    if (!$dara.isNull(request.contentShrink)) {
      query["Content"] = request.contentShrink;
    }

    if (!$dara.isNull(request.edgeComputePurge)) {
      query["EdgeComputePurge"] = request.edgeComputePurge;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurgeCaches",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurgeCachesResponse>(await this.callApi(params, req, runtime), new $_model.PurgeCachesResponse({}));
  }

  /**
   * Cache Refresh
   * 
   * @param request - PurgeCachesRequest
   * @returns PurgeCachesResponse
   */
  async purgeCaches(request: $_model.PurgeCachesRequest): Promise<$_model.PurgeCachesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purgeCachesWithOptions(request, runtime);
  }

  /**
   * Configures a key-value pair for a namespace. The request body can be up to 2 MB.
   * 
   * @param request - PutKvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutKvResponse
   */
  async putKvWithOptions(request: $_model.PutKvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutKvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.base64)) {
      query["Base64"] = request.base64;
    }

    if (!$dara.isNull(request.expiration)) {
      query["Expiration"] = request.expiration;
    }

    if (!$dara.isNull(request.expirationTtl)) {
      query["ExpirationTtl"] = request.expirationTtl;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.value)) {
      body["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutKv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutKvResponse>(await this.callApi(params, req, runtime), new $_model.PutKvResponse({}));
  }

  /**
   * Configures a key-value pair for a namespace. The request body can be up to 2 MB.
   * 
   * @param request - PutKvRequest
   * @returns PutKvResponse
   */
  async putKv(request: $_model.PutKvRequest): Promise<$_model.PutKvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putKvWithOptions(request, runtime);
  }

  /**
   * Configures a large key-value pair for a namespace. The request body can be up to 25 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [PutKv](~~PutKv~~). For small request bodies, we recommend that you use [PutKv](~~PutKv~~) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and PutKvWithHighCapacityAdvance to call the operation.
   *     func TestPutKvWithHighCapacity() {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for uploading key-value pairs.
   *     	namespace := "test-put-kv"
   *     	key := "test_PutKvWithHighCapacity_0"
   *     	value := strings.Repeat("t", 10*1024*1024)
   *     	rawReq := &PutKvRequest{
   *     		Namespace: &namespace,
   *     		Key:       &key,
   *     		Value:     &value,
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the PutKvWithHighCapacity operation for upload.
   *     	reqHighCapacity := &PutKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		Key:       &key,
   *     		UrlObject: bytes.NewReader([]byte(payload)),
   *     	}
   *     	resp, err := cli.PutKvWithHighCapacityAdvance(reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - PutKvWithHighCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutKvWithHighCapacityResponse
   */
  async putKvWithHighCapacityWithOptions(request: $_model.PutKvWithHighCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutKvWithHighCapacityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutKvWithHighCapacity",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutKvWithHighCapacityResponse>(await this.callApi(params, req, runtime), new $_model.PutKvWithHighCapacityResponse({}));
  }

  /**
   * Configures a large key-value pair for a namespace. The request body can be up to 25 MB.
   * 
   * @remarks
   * This operation allows you to upload a larger request body than by using [PutKv](~~PutKv~~). For small request bodies, we recommend that you use [PutKv](~~PutKv~~) to minimize the server processing time. This operation must be called by using SDKs. The following sample code uses the Golang SDK and PutKvWithHighCapacityAdvance to call the operation.
   *     func TestPutKvWithHighCapacity() {
   *     	// Initialize the configurations.
   *     	cfg := new(openapi.Config)
   *     	cfg.SetAccessKeyId("xxxxxxxxx")
   *     	cfg.SetAccessKeySecret("xxxxxxxxxx")
   *     	cli, err := NewClient(cfg)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	runtime := &util.RuntimeOptions{}
   *     	// Construct a request for uploading key-value pairs.
   *     	namespace := "test-put-kv"
   *     	key := "test_PutKvWithHighCapacity_0"
   *     	value := strings.Repeat("t", 10*1024*1024)
   *     	rawReq := &PutKvRequest{
   *     		Namespace: &namespace,
   *     		Key:       &key,
   *     		Value:     &value,
   *     	}
   *     	payload, err := json.Marshal(rawReq)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	// If the payload is greater than 2 MB, call the PutKvWithHighCapacity operation for upload.
   *     	reqHighCapacity := &PutKvWithHighCapacityAdvanceRequest{
   *     		Namespace: &namespace,
   *     		Key:       &key,
   *     		UrlObject: bytes.NewReader([]byte(payload)),
   *     	}
   *     	resp, err := cli.PutKvWithHighCapacityAdvance(reqHighCapacity, runtime)
   *     	if err != nil {
   *     		return err
   *     	}
   *     	return nil
   *     }
   * 
   * @param request - PutKvWithHighCapacityRequest
   * @returns PutKvWithHighCapacityResponse
   */
  async putKvWithHighCapacity(request: $_model.PutKvWithHighCapacityRequest): Promise<$_model.PutKvWithHighCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putKvWithHighCapacityWithOptions(request, runtime);
  }

  async putKvWithHighCapacityAdvance(request: $_model.PutKvWithHighCapacityAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutKvWithHighCapacityResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let putKvWithHighCapacityReq = new $_model.PutKvWithHighCapacityRequest({ });
    OpenApiUtil.convert(request, putKvWithHighCapacityReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      putKvWithHighCapacityReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let putKvWithHighCapacityResp = await this.putKvWithHighCapacityWithOptions(putKvWithHighCapacityReq, runtime);
    return putKvWithHighCapacityResp;
  }

  /**
   * Rebuilds the staging environment for containerized applications.
   * 
   * @param request - RebuildEdgeContainerAppStagingEnvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebuildEdgeContainerAppStagingEnvResponse
   */
  async rebuildEdgeContainerAppStagingEnvWithOptions(request: $_model.RebuildEdgeContainerAppStagingEnvRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebuildEdgeContainerAppStagingEnvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebuildEdgeContainerAppStagingEnv",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebuildEdgeContainerAppStagingEnvResponse>(await this.callApi(params, req, runtime), new $_model.RebuildEdgeContainerAppStagingEnvResponse({}));
  }

  /**
   * Rebuilds the staging environment for containerized applications.
   * 
   * @param request - RebuildEdgeContainerAppStagingEnvRequest
   * @returns RebuildEdgeContainerAppStagingEnvResponse
   */
  async rebuildEdgeContainerAppStagingEnv(request: $_model.RebuildEdgeContainerAppStagingEnvRequest): Promise<$_model.RebuildEdgeContainerAppStagingEnvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebuildEdgeContainerAppStagingEnvWithOptions(request, runtime);
  }

  /**
   * Resets the progress of a scheduled prefetch task and starts the prefetch from the beginning.
   * 
   * @param request - ResetScheduledPreloadJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetScheduledPreloadJobResponse
   */
  async resetScheduledPreloadJobWithOptions(request: $_model.ResetScheduledPreloadJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetScheduledPreloadJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetScheduledPreloadJob",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetScheduledPreloadJobResponse>(await this.callApi(params, req, runtime), new $_model.ResetScheduledPreloadJobResponse({}));
  }

  /**
   * Resets the progress of a scheduled prefetch task and starts the prefetch from the beginning.
   * 
   * @param request - ResetScheduledPreloadJobRequest
   * @returns ResetScheduledPreloadJobResponse
   */
  async resetScheduledPreloadJob(request: $_model.ResetScheduledPreloadJobRequest): Promise<$_model.ResetScheduledPreloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetScheduledPreloadJobWithOptions(request, runtime);
  }

  /**
   * Revokes an activated client certificate.
   * 
   * @param request - RevokeClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeClientCertificateResponse
   */
  async revokeClientCertificateWithOptions(request: $_model.RevokeClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeClientCertificateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RevokeClientCertificateResponse({}));
  }

  /**
   * Revokes an activated client certificate.
   * 
   * @param request - RevokeClientCertificateRequest
   * @returns RevokeClientCertificateResponse
   */
  async revokeClientCertificate(request: $_model.RevokeClientCertificateRequest): Promise<$_model.RevokeClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeClientCertificateWithOptions(request, runtime);
  }

  /**
   * Rolls back a version of a containerized application.
   * 
   * @param request - RollbackEdgeContainerAppVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackEdgeContainerAppVersionResponse
   */
  async rollbackEdgeContainerAppVersionWithOptions(request: $_model.RollbackEdgeContainerAppVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackEdgeContainerAppVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.percentage)) {
      query["Percentage"] = request.percentage;
    }

    if (!$dara.isNull(request.usedPercent)) {
      query["UsedPercent"] = request.usedPercent;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.remarks)) {
      body["Remarks"] = request.remarks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackEdgeContainerAppVersion",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackEdgeContainerAppVersionResponse>(await this.callApi(params, req, runtime), new $_model.RollbackEdgeContainerAppVersionResponse({}));
  }

  /**
   * Rolls back a version of a containerized application.
   * 
   * @param request - RollbackEdgeContainerAppVersionRequest
   * @returns RollbackEdgeContainerAppVersionResponse
   */
  async rollbackEdgeContainerAppVersion(request: $_model.RollbackEdgeContainerAppVersionRequest): Promise<$_model.RollbackEdgeContainerAppVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackEdgeContainerAppVersionWithOptions(request, runtime);
  }

  /**
   * Configures whether to enable certificates and update certificate information for a website.
   * 
   * @param request - SetCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetCertificateResponse
   */
  async setCertificateWithOptions(request: $_model.SetCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.casId)) {
      body["CasId"] = request.casId;
    }

    if (!$dara.isNull(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetCertificateResponse>(await this.callApi(params, req, runtime), new $_model.SetCertificateResponse({}));
  }

  /**
   * Configures whether to enable certificates and update certificate information for a website.
   * 
   * @param request - SetCertificateRequest
   * @returns SetCertificateResponse
   */
  async setCertificate(request: $_model.SetCertificateRequest): Promise<$_model.SetCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setCertificateWithOptions(request, runtime);
  }

  /**
   * Associates domain names with a client CA certificate. If no certificate is specified, domain names are associated with an Edge Security Acceleration (ESA)-managed CA certificate.
   * 
   * @param tmpReq - SetClientCertificateHostnamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetClientCertificateHostnamesResponse
   */
  async setClientCertificateHostnamesWithOptions(tmpReq: $_model.SetClientCertificateHostnamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetClientCertificateHostnamesResponse> {
    tmpReq.validate();
    let request = new $_model.SetClientCertificateHostnamesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hostnamesShrink)) {
      body["Hostnames"] = request.hostnamesShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetClientCertificateHostnames",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetClientCertificateHostnamesResponse>(await this.callApi(params, req, runtime), new $_model.SetClientCertificateHostnamesResponse({}));
  }

  /**
   * Associates domain names with a client CA certificate. If no certificate is specified, domain names are associated with an Edge Security Acceleration (ESA)-managed CA certificate.
   * 
   * @param request - SetClientCertificateHostnamesRequest
   * @returns SetClientCertificateHostnamesResponse
   */
  async setClientCertificateHostnames(request: $_model.SetClientCertificateHostnamesRequest): Promise<$_model.SetClientCertificateHostnamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setClientCertificateHostnamesWithOptions(request, runtime);
  }

  /**
   * Configures smart HTTP DDoS protection.
   * 
   * @param request - SetHttpDDoSAttackIntelligentProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHttpDDoSAttackIntelligentProtectionResponse
   */
  async setHttpDDoSAttackIntelligentProtectionWithOptions(request: $_model.SetHttpDDoSAttackIntelligentProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetHttpDDoSAttackIntelligentProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aiMode)) {
      query["AiMode"] = request.aiMode;
    }

    if (!$dara.isNull(request.aiTemplate)) {
      query["AiTemplate"] = request.aiTemplate;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetHttpDDoSAttackIntelligentProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetHttpDDoSAttackIntelligentProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetHttpDDoSAttackIntelligentProtectionResponse({}));
  }

  /**
   * Configures smart HTTP DDoS protection.
   * 
   * @param request - SetHttpDDoSAttackIntelligentProtectionRequest
   * @returns SetHttpDDoSAttackIntelligentProtectionResponse
   */
  async setHttpDDoSAttackIntelligentProtection(request: $_model.SetHttpDDoSAttackIntelligentProtectionRequest): Promise<$_model.SetHttpDDoSAttackIntelligentProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setHttpDDoSAttackIntelligentProtectionWithOptions(request, runtime);
  }

  /**
   * Configures HTTP DDoS attack protection for a website.
   * 
   * @param request - SetHttpDDoSAttackProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHttpDDoSAttackProtectionResponse
   */
  async setHttpDDoSAttackProtectionWithOptions(request: $_model.SetHttpDDoSAttackProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetHttpDDoSAttackProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalMode)) {
      query["GlobalMode"] = request.globalMode;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetHttpDDoSAttackProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetHttpDDoSAttackProtectionResponse>(await this.callApi(params, req, runtime), new $_model.SetHttpDDoSAttackProtectionResponse({}));
  }

  /**
   * Configures HTTP DDoS attack protection for a website.
   * 
   * @param request - SetHttpDDoSAttackProtectionRequest
   * @returns SetHttpDDoSAttackProtectionResponse
   */
  async setHttpDDoSAttackProtection(request: $_model.SetHttpDDoSAttackProtectionRequest): Promise<$_model.SetHttpDDoSAttackProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setHttpDDoSAttackProtectionWithOptions(request, runtime);
  }

  /**
   * 为域名回源客户端证书绑定域名
   * 
   * @param tmpReq - SetOriginClientCertificateHostnamesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetOriginClientCertificateHostnamesResponse
   */
  async setOriginClientCertificateHostnamesWithOptions(tmpReq: $_model.SetOriginClientCertificateHostnamesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetOriginClientCertificateHostnamesResponse> {
    tmpReq.validate();
    let request = new $_model.SetOriginClientCertificateHostnamesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hostnamesShrink)) {
      body["Hostnames"] = request.hostnamesShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetOriginClientCertificateHostnames",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetOriginClientCertificateHostnamesResponse>(await this.callApi(params, req, runtime), new $_model.SetOriginClientCertificateHostnamesResponse({}));
  }

  /**
   * 为域名回源客户端证书绑定域名
   * 
   * @param request - SetOriginClientCertificateHostnamesRequest
   * @returns SetOriginClientCertificateHostnamesResponse
   */
  async setOriginClientCertificateHostnames(request: $_model.SetOriginClientCertificateHostnamesRequest): Promise<$_model.SetOriginClientCertificateHostnamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setOriginClientCertificateHostnamesWithOptions(request, runtime);
  }

  /**
   * Starts a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - StartScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartScheduledPreloadExecutionResponse
   */
  async startScheduledPreloadExecutionWithOptions(request: $_model.StartScheduledPreloadExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartScheduledPreloadExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartScheduledPreloadExecutionResponse({}));
  }

  /**
   * Starts a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - StartScheduledPreloadExecutionRequest
   * @returns StartScheduledPreloadExecutionResponse
   */
  async startScheduledPreloadExecution(request: $_model.StartScheduledPreloadExecutionRequest): Promise<$_model.StartScheduledPreloadExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * Stops a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - StopScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopScheduledPreloadExecutionResponse
   */
  async stopScheduledPreloadExecutionWithOptions(request: $_model.StopScheduledPreloadExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopScheduledPreloadExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StopScheduledPreloadExecutionResponse({}));
  }

  /**
   * Stops a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - StopScheduledPreloadExecutionRequest
   * @returns StopScheduledPreloadExecutionResponse
   */
  async stopScheduledPreloadExecution(request: $_model.StopScheduledPreloadExecutionRequest): Promise<$_model.StopScheduledPreloadExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * Deletes a resource tag based on a specified resource ID.
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

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2024-09-10",
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
   * Deletes a resource tag based on a specified resource ID.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * 缓存保持变配
   * 
   * @param request - UpdateCacheReserveSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCacheReserveSpecResponse
   */
  async updateCacheReserveSpecWithOptions(request: $_model.UpdateCacheReserveSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCacheReserveSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.targetQuotaGb)) {
      query["TargetQuotaGb"] = request.targetQuotaGb;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCacheReserveSpec",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCacheReserveSpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCacheReserveSpecResponse({}));
  }

  /**
   * 缓存保持变配
   * 
   * @param request - UpdateCacheReserveSpecRequest
   * @returns UpdateCacheReserveSpecResponse
   */
  async updateCacheReserveSpec(request: $_model.UpdateCacheReserveSpecRequest): Promise<$_model.UpdateCacheReserveSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCacheReserveSpecWithOptions(request, runtime);
  }

  /**
   * Modify cache configuration
   * 
   * @param request - UpdateCacheRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCacheRuleResponse
   */
  async updateCacheRuleWithOptions(request: $_model.UpdateCacheRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCacheRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.additionalCacheablePorts)) {
      query["AdditionalCacheablePorts"] = request.additionalCacheablePorts;
    }

    if (!$dara.isNull(request.browserCacheMode)) {
      query["BrowserCacheMode"] = request.browserCacheMode;
    }

    if (!$dara.isNull(request.browserCacheTtl)) {
      query["BrowserCacheTtl"] = request.browserCacheTtl;
    }

    if (!$dara.isNull(request.bypassCache)) {
      query["BypassCache"] = request.bypassCache;
    }

    if (!$dara.isNull(request.cacheDeceptionArmor)) {
      query["CacheDeceptionArmor"] = request.cacheDeceptionArmor;
    }

    if (!$dara.isNull(request.cacheReserveEligibility)) {
      query["CacheReserveEligibility"] = request.cacheReserveEligibility;
    }

    if (!$dara.isNull(request.checkPresenceCookie)) {
      query["CheckPresenceCookie"] = request.checkPresenceCookie;
    }

    if (!$dara.isNull(request.checkPresenceHeader)) {
      query["CheckPresenceHeader"] = request.checkPresenceHeader;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.edgeCacheMode)) {
      query["EdgeCacheMode"] = request.edgeCacheMode;
    }

    if (!$dara.isNull(request.edgeCacheTtl)) {
      query["EdgeCacheTtl"] = request.edgeCacheTtl;
    }

    if (!$dara.isNull(request.edgeStatusCodeCacheTtl)) {
      query["EdgeStatusCodeCacheTtl"] = request.edgeStatusCodeCacheTtl;
    }

    if (!$dara.isNull(request.includeCookie)) {
      query["IncludeCookie"] = request.includeCookie;
    }

    if (!$dara.isNull(request.includeHeader)) {
      query["IncludeHeader"] = request.includeHeader;
    }

    if (!$dara.isNull(request.queryString)) {
      query["QueryString"] = request.queryString;
    }

    if (!$dara.isNull(request.queryStringMode)) {
      query["QueryStringMode"] = request.queryStringMode;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.serveStale)) {
      query["ServeStale"] = request.serveStale;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.sortQueryStringForCache)) {
      query["SortQueryStringForCache"] = request.sortQueryStringForCache;
    }

    if (!$dara.isNull(request.userDeviceType)) {
      query["UserDeviceType"] = request.userDeviceType;
    }

    if (!$dara.isNull(request.userGeo)) {
      query["UserGeo"] = request.userGeo;
    }

    if (!$dara.isNull(request.userLanguage)) {
      query["UserLanguage"] = request.userLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCacheRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCacheRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCacheRuleResponse({}));
  }

  /**
   * Modify cache configuration
   * 
   * @param request - UpdateCacheRuleRequest
   * @returns UpdateCacheRuleResponse
   */
  async updateCacheRule(request: $_model.UpdateCacheRuleRequest): Promise<$_model.UpdateCacheRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCacheRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the cache tag configuration of your website. You can call this operation when you need to specify tags in the Cache-Tag response header to use the purge by cache tag feature.
   * 
   * @param request - UpdateCacheTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCacheTagResponse
   */
  async updateCacheTagWithOptions(request: $_model.UpdateCacheTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCacheTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caseInsensitive)) {
      query["CaseInsensitive"] = request.caseInsensitive;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    if (!$dara.isNull(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCacheTag",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCacheTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCacheTagResponse({}));
  }

  /**
   * Modifies the cache tag configuration of your website. You can call this operation when you need to specify tags in the Cache-Tag response header to use the purge by cache tag feature.
   * 
   * @param request - UpdateCacheTagRequest
   * @returns UpdateCacheTagResponse
   */
  async updateCacheTag(request: $_model.UpdateCacheTagRequest): Promise<$_model.UpdateCacheTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCacheTagWithOptions(request, runtime);
  }

  /**
   * Modify site CNAME flattening configuration
   * 
   * @param request - UpdateCnameFlatteningRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCnameFlatteningResponse
   */
  async updateCnameFlatteningWithOptions(request: $_model.UpdateCnameFlatteningRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCnameFlatteningResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flattenMode)) {
      query["FlattenMode"] = request.flattenMode;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCnameFlattening",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCnameFlatteningResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCnameFlatteningResponse({}));
  }

  /**
   * Modify site CNAME flattening configuration
   * 
   * @param request - UpdateCnameFlatteningRequest
   * @returns UpdateCnameFlatteningResponse
   */
  async updateCnameFlattening(request: $_model.UpdateCnameFlatteningRequest): Promise<$_model.UpdateCnameFlatteningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCnameFlatteningWithOptions(request, runtime);
  }

  /**
   * Modify compression rule
   * 
   * @param request - UpdateCompressionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCompressionRuleResponse
   */
  async updateCompressionRuleWithOptions(request: $_model.UpdateCompressionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCompressionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brotli)) {
      query["Brotli"] = request.brotli;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.gzip)) {
      query["Gzip"] = request.gzip;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.zstd)) {
      query["Zstd"] = request.zstd;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCompressionRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCompressionRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCompressionRuleResponse({}));
  }

  /**
   * Modify compression rule
   * 
   * @param request - UpdateCompressionRuleRequest
   * @returns UpdateCompressionRuleResponse
   */
  async updateCompressionRule(request: $_model.UpdateCompressionRuleRequest): Promise<$_model.UpdateCompressionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCompressionRuleWithOptions(request, runtime);
  }

  /**
   * 修改站点中国大陆网络接入优化配置
   * 
   * @param request - UpdateCrossBorderOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCrossBorderOptimizationResponse
   */
  async updateCrossBorderOptimizationWithOptions(request: $_model.UpdateCrossBorderOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCrossBorderOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCrossBorderOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCrossBorderOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCrossBorderOptimizationResponse({}));
  }

  /**
   * 修改站点中国大陆网络接入优化配置
   * 
   * @param request - UpdateCrossBorderOptimizationRequest
   * @returns UpdateCrossBorderOptimizationResponse
   */
  async updateCrossBorderOptimization(request: $_model.UpdateCrossBorderOptimizationRequest): Promise<$_model.UpdateCrossBorderOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCrossBorderOptimizationWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a custom scenario-specific policy.
   * 
   * @param request - UpdateCustomScenePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomScenePolicyResponse
   */
  async updateCustomScenePolicyWithOptions(request: $_model.UpdateCustomScenePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCustomScenePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.objects)) {
      query["Objects"] = request.objects;
    }

    if (!$dara.isNull(request.policyId)) {
      query["PolicyId"] = request.policyId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.template)) {
      query["Template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomScenePolicy",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCustomScenePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCustomScenePolicyResponse({}));
  }

  /**
   * Modifies the configurations of a custom scenario-specific policy.
   * 
   * @param request - UpdateCustomScenePolicyRequest
   * @returns UpdateCustomScenePolicyResponse
   */
  async updateCustomScenePolicy(request: $_model.UpdateCustomScenePolicyRequest): Promise<$_model.UpdateCustomScenePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateCustomScenePolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the development mode configuration of your website. If you enable Development Mode, all requests bypass caching components on POPs and are redirected to the origin server. This allows clients to retrieve the most recent resources on the origin server.
   * 
   * @param request - UpdateDevelopmentModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDevelopmentModeResponse
   */
  async updateDevelopmentModeWithOptions(request: $_model.UpdateDevelopmentModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDevelopmentModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDevelopmentMode",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDevelopmentModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDevelopmentModeResponse({}));
  }

  /**
   * Modifies the development mode configuration of your website. If you enable Development Mode, all requests bypass caching components on POPs and are redirected to the origin server. This allows clients to retrieve the most recent resources on the origin server.
   * 
   * @param request - UpdateDevelopmentModeRequest
   * @returns UpdateDevelopmentModeResponse
   */
  async updateDevelopmentMode(request: $_model.UpdateDevelopmentModeRequest): Promise<$_model.UpdateDevelopmentModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDevelopmentModeWithOptions(request, runtime);
  }

  /**
   * Updates the log collection configuration of a containerized application.
   * 
   * @param request - UpdateEdgeContainerAppLogRiverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEdgeContainerAppLogRiverResponse
   */
  async updateEdgeContainerAppLogRiverWithOptions(request: $_model.UpdateEdgeContainerAppLogRiverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEdgeContainerAppLogRiverResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.stdout)) {
      query["Stdout"] = request.stdout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEdgeContainerAppLogRiver",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEdgeContainerAppLogRiverResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEdgeContainerAppLogRiverResponse({}));
  }

  /**
   * Updates the log collection configuration of a containerized application.
   * 
   * @param request - UpdateEdgeContainerAppLogRiverRequest
   * @returns UpdateEdgeContainerAppLogRiverResponse
   */
  async updateEdgeContainerAppLogRiver(request: $_model.UpdateEdgeContainerAppLogRiverRequest): Promise<$_model.UpdateEdgeContainerAppLogRiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEdgeContainerAppLogRiverWithOptions(request, runtime);
  }

  /**
   * 更新边缘容器资源预留配置
   * 
   * @param tmpReq - UpdateEdgeContainerAppResourceReserveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEdgeContainerAppResourceReserveResponse
   */
  async updateEdgeContainerAppResourceReserveWithOptions(tmpReq: $_model.UpdateEdgeContainerAppResourceReserveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEdgeContainerAppResourceReserveResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEdgeContainerAppResourceReserveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.reserveSet)) {
      request.reserveSetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.reserveSet, "ReserveSet", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.durationTime)) {
      query["DurationTime"] = request.durationTime;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.forever)) {
      query["Forever"] = request.forever;
    }

    if (!$dara.isNull(request.reserveSetShrink)) {
      query["ReserveSet"] = request.reserveSetShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEdgeContainerAppResourceReserve",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEdgeContainerAppResourceReserveResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEdgeContainerAppResourceReserveResponse({}));
  }

  /**
   * 更新边缘容器资源预留配置
   * 
   * @param request - UpdateEdgeContainerAppResourceReserveRequest
   * @returns UpdateEdgeContainerAppResourceReserveResponse
   */
  async updateEdgeContainerAppResourceReserve(request: $_model.UpdateEdgeContainerAppResourceReserveRequest): Promise<$_model.UpdateEdgeContainerAppResourceReserveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEdgeContainerAppResourceReserveWithOptions(request, runtime);
  }

  /**
   * Modify HTTP Request Header Rules
   * 
   * @param tmpReq - UpdateHttpRequestHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpRequestHeaderModificationRuleResponse
   */
  async updateHttpRequestHeaderModificationRuleWithOptions(tmpReq: $_model.UpdateHttpRequestHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpRequestHeaderModificationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHttpRequestHeaderModificationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.requestHeaderModification)) {
      request.requestHeaderModificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaderModification, "RequestHeaderModification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.requestHeaderModificationShrink)) {
      query["RequestHeaderModification"] = request.requestHeaderModificationShrink;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpRequestHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpRequestHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpRequestHeaderModificationRuleResponse({}));
  }

  /**
   * Modify HTTP Request Header Rules
   * 
   * @param request - UpdateHttpRequestHeaderModificationRuleRequest
   * @returns UpdateHttpRequestHeaderModificationRuleResponse
   */
  async updateHttpRequestHeaderModificationRule(request: $_model.UpdateHttpRequestHeaderModificationRuleRequest): Promise<$_model.UpdateHttpRequestHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHttpRequestHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Modify HTTP response header rules
   * 
   * @param tmpReq - UpdateHttpResponseHeaderModificationRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpResponseHeaderModificationRuleResponse
   */
  async updateHttpResponseHeaderModificationRuleWithOptions(tmpReq: $_model.UpdateHttpResponseHeaderModificationRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpResponseHeaderModificationRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateHttpResponseHeaderModificationRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.responseHeaderModification)) {
      request.responseHeaderModificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaderModification, "ResponseHeaderModification", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.responseHeaderModificationShrink)) {
      query["ResponseHeaderModification"] = request.responseHeaderModificationShrink;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpResponseHeaderModificationRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpResponseHeaderModificationRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpResponseHeaderModificationRuleResponse({}));
  }

  /**
   * Modify HTTP response header rules
   * 
   * @param request - UpdateHttpResponseHeaderModificationRuleRequest
   * @returns UpdateHttpResponseHeaderModificationRuleResponse
   */
  async updateHttpResponseHeaderModificationRule(request: $_model.UpdateHttpResponseHeaderModificationRuleRequest): Promise<$_model.UpdateHttpResponseHeaderModificationRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHttpResponseHeaderModificationRuleWithOptions(request, runtime);
  }

  /**
   * Modify HTTPS Application Configuration
   * 
   * @param request - UpdateHttpsApplicationConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpsApplicationConfigurationResponse
   */
  async updateHttpsApplicationConfigurationWithOptions(request: $_model.UpdateHttpsApplicationConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpsApplicationConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.altSvc)) {
      query["AltSvc"] = request.altSvc;
    }

    if (!$dara.isNull(request.altSvcClear)) {
      query["AltSvcClear"] = request.altSvcClear;
    }

    if (!$dara.isNull(request.altSvcMa)) {
      query["AltSvcMa"] = request.altSvcMa;
    }

    if (!$dara.isNull(request.altSvcPersist)) {
      query["AltSvcPersist"] = request.altSvcPersist;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.hsts)) {
      query["Hsts"] = request.hsts;
    }

    if (!$dara.isNull(request.hstsIncludeSubdomains)) {
      query["HstsIncludeSubdomains"] = request.hstsIncludeSubdomains;
    }

    if (!$dara.isNull(request.hstsMaxAge)) {
      query["HstsMaxAge"] = request.hstsMaxAge;
    }

    if (!$dara.isNull(request.hstsPreload)) {
      query["HstsPreload"] = request.hstsPreload;
    }

    if (!$dara.isNull(request.httpsForce)) {
      query["HttpsForce"] = request.httpsForce;
    }

    if (!$dara.isNull(request.httpsForceCode)) {
      query["HttpsForceCode"] = request.httpsForceCode;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpsApplicationConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpsApplicationConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpsApplicationConfigurationResponse({}));
  }

  /**
   * Modify HTTPS Application Configuration
   * 
   * @param request - UpdateHttpsApplicationConfigurationRequest
   * @returns UpdateHttpsApplicationConfigurationResponse
   */
  async updateHttpsApplicationConfiguration(request: $_model.UpdateHttpsApplicationConfigurationRequest): Promise<$_model.UpdateHttpsApplicationConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHttpsApplicationConfigurationWithOptions(request, runtime);
  }

  /**
   * Modify HTTPS Basic Configuration
   * 
   * @param request - UpdateHttpsBasicConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHttpsBasicConfigurationResponse
   */
  async updateHttpsBasicConfigurationWithOptions(request: $_model.UpdateHttpsBasicConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHttpsBasicConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ciphersuite)) {
      query["Ciphersuite"] = request.ciphersuite;
    }

    if (!$dara.isNull(request.ciphersuiteGroup)) {
      query["CiphersuiteGroup"] = request.ciphersuiteGroup;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.http2)) {
      query["Http2"] = request.http2;
    }

    if (!$dara.isNull(request.http3)) {
      query["Http3"] = request.http3;
    }

    if (!$dara.isNull(request.https)) {
      query["Https"] = request.https;
    }

    if (!$dara.isNull(request.ocspStapling)) {
      query["OcspStapling"] = request.ocspStapling;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.tls10)) {
      query["Tls10"] = request.tls10;
    }

    if (!$dara.isNull(request.tls11)) {
      query["Tls11"] = request.tls11;
    }

    if (!$dara.isNull(request.tls12)) {
      query["Tls12"] = request.tls12;
    }

    if (!$dara.isNull(request.tls13)) {
      query["Tls13"] = request.tls13;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHttpsBasicConfiguration",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHttpsBasicConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHttpsBasicConfigurationResponse({}));
  }

  /**
   * Modify HTTPS Basic Configuration
   * 
   * @param request - UpdateHttpsBasicConfigurationRequest
   * @returns UpdateHttpsBasicConfigurationResponse
   */
  async updateHttpsBasicConfiguration(request: $_model.UpdateHttpsBasicConfigurationRequest): Promise<$_model.UpdateHttpsBasicConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateHttpsBasicConfigurationWithOptions(request, runtime);
  }

  /**
   * Modifies the IPv6 configuration of a website.
   * 
   * @param request - UpdateIPv6Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIPv6Response
   */
  async updateIPv6WithOptions(request: $_model.UpdateIPv6Request, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIPv6Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIPv6",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIPv6Response>(await this.callApi(params, req, runtime), new $_model.UpdateIPv6Response({}));
  }

  /**
   * Modifies the IPv6 configuration of a website.
   * 
   * @param request - UpdateIPv6Request
   * @returns UpdateIPv6Response
   */
  async updateIPv6(request: $_model.UpdateIPv6Request): Promise<$_model.UpdateIPv6Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIPv6WithOptions(request, runtime);
  }

  /**
   * Modify Site Image Transformation Configuration
   * 
   * @param request - UpdateImageTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageTransformResponse
   */
  async updateImageTransformWithOptions(request: $_model.UpdateImageTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageTransformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageTransformResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageTransformResponse({}));
  }

  /**
   * Modify Site Image Transformation Configuration
   * 
   * @param request - UpdateImageTransformRequest
   * @returns UpdateImageTransformResponse
   */
  async updateImageTransform(request: $_model.UpdateImageTransformRequest): Promise<$_model.UpdateImageTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageTransformWithOptions(request, runtime);
  }

  /**
   * Updates a custom list.
   * 
   * @param tmpReq - UpdateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListResponse
   */
  async updateListWithOptions(tmpReq: $_model.UpdateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateListResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.items)) {
      request.itemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.items, "Items", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.itemsShrink)) {
      body["Items"] = request.itemsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateListResponse({}));
  }

  /**
   * Updates a custom list.
   * 
   * @param request - UpdateListRequest
   * @returns UpdateListResponse
   */
  async updateList(request: $_model.UpdateListRequest): Promise<$_model.UpdateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateListWithOptions(request, runtime);
  }

  /**
   * Modify Load Balancer
   * 
   * @remarks
   * Through this interface, you can modify multiple configurations of the load balancer, including but not limited to the name of the load balancer, whether to enable acceleration, session persistence strategy, and various advanced settings related to traffic routing.>Notice: Changes to certain parameters may affect the stability of existing services, please operate with caution.
   * 
   * @param tmpReq - UpdateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerResponse
   */
  async updateLoadBalancerWithOptions(tmpReq: $_model.UpdateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoadBalancerResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLoadBalancerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.adaptiveRouting)) {
      request.adaptiveRoutingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.adaptiveRouting, "AdaptiveRouting", "json");
    }

    if (!$dara.isNull(tmpReq.defaultPools)) {
      request.defaultPoolsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultPools, "DefaultPools", "json");
    }

    if (!$dara.isNull(tmpReq.monitor)) {
      request.monitorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitor, "Monitor", "json");
    }

    if (!$dara.isNull(tmpReq.randomSteering)) {
      request.randomSteeringShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.randomSteering, "RandomSteering", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.adaptiveRoutingShrink)) {
      query["AdaptiveRouting"] = request.adaptiveRoutingShrink;
    }

    if (!$dara.isNull(request.defaultPoolsShrink)) {
      query["DefaultPools"] = request.defaultPoolsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.fallbackPool)) {
      query["FallbackPool"] = request.fallbackPool;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.monitorShrink)) {
      query["Monitor"] = request.monitorShrink;
    }

    if (!$dara.isNull(request.randomSteeringShrink)) {
      query["RandomSteering"] = request.randomSteeringShrink;
    }

    if (!$dara.isNull(request.regionPools)) {
      query["RegionPools"] = request.regionPools;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    if (!$dara.isNull(request.sessionAffinity)) {
      query["SessionAffinity"] = request.sessionAffinity;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.steeringPolicy)) {
      query["SteeringPolicy"] = request.steeringPolicy;
    }

    if (!$dara.isNull(request.subRegionPools)) {
      query["SubRegionPools"] = request.subRegionPools;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLoadBalancer",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLoadBalancerResponse({}));
  }

  /**
   * Modify Load Balancer
   * 
   * @remarks
   * Through this interface, you can modify multiple configurations of the load balancer, including but not limited to the name of the load balancer, whether to enable acceleration, session persistence strategy, and various advanced settings related to traffic routing.>Notice: Changes to certain parameters may affect the stability of existing services, please operate with caution.
   * 
   * @param request - UpdateLoadBalancerRequest
   * @returns UpdateLoadBalancerResponse
   */
  async updateLoadBalancer(request: $_model.UpdateLoadBalancerRequest): Promise<$_model.UpdateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of managed transforms for your website.
   * 
   * @param request - UpdateManagedTransformRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateManagedTransformResponse
   */
  async updateManagedTransformWithOptions(request: $_model.UpdateManagedTransformRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateManagedTransformResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addClientGeolocationHeader)) {
      query["AddClientGeolocationHeader"] = request.addClientGeolocationHeader;
    }

    if (!$dara.isNull(request.addRealClientIpHeader)) {
      query["AddRealClientIpHeader"] = request.addRealClientIpHeader;
    }

    if (!$dara.isNull(request.realClientIpHeaderName)) {
      query["RealClientIpHeaderName"] = request.realClientIpHeaderName;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateManagedTransform",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateManagedTransformResponse>(await this.callApi(params, req, runtime), new $_model.UpdateManagedTransformResponse({}));
  }

  /**
   * Modifies the configuration of managed transforms for your website.
   * 
   * @param request - UpdateManagedTransformRequest
   * @returns UpdateManagedTransformResponse
   */
  async updateManagedTransform(request: $_model.UpdateManagedTransformRequest): Promise<$_model.UpdateManagedTransformResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateManagedTransformWithOptions(request, runtime);
  }

  /**
   * Modify network optimization configuration
   * 
   * @param request - UpdateNetworkOptimizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkOptimizationResponse
   */
  async updateNetworkOptimizationWithOptions(request: $_model.UpdateNetworkOptimizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkOptimizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.grpc)) {
      query["Grpc"] = request.grpc;
    }

    if (!$dara.isNull(request.http2Origin)) {
      query["Http2Origin"] = request.http2Origin;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.smartRouting)) {
      query["SmartRouting"] = request.smartRouting;
    }

    if (!$dara.isNull(request.uploadMaxFilesize)) {
      query["UploadMaxFilesize"] = request.uploadMaxFilesize;
    }

    if (!$dara.isNull(request.websocket)) {
      query["Websocket"] = request.websocket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetworkOptimization",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkOptimizationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkOptimizationResponse({}));
  }

  /**
   * Modify network optimization configuration
   * 
   * @param request - UpdateNetworkOptimizationRequest
   * @returns UpdateNetworkOptimizationResponse
   */
  async updateNetworkOptimization(request: $_model.UpdateNetworkOptimizationRequest): Promise<$_model.UpdateNetworkOptimizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNetworkOptimizationWithOptions(request, runtime);
  }

  /**
   * Modify the Monitor
   * 
   * @param tmpReq - UpdateOriginPoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOriginPoolResponse
   */
  async updateOriginPoolWithOptions(tmpReq: $_model.UpdateOriginPoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOriginPoolResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateOriginPoolShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.origins)) {
      request.originsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.origins, "Origins", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.originsShrink)) {
      query["Origins"] = request.originsShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOriginPool",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOriginPoolResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOriginPoolResponse({}));
  }

  /**
   * Modify the Monitor
   * 
   * @param request - UpdateOriginPoolRequest
   * @returns UpdateOriginPoolResponse
   */
  async updateOriginPool(request: $_model.UpdateOriginPoolRequest): Promise<$_model.UpdateOriginPoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOriginPoolWithOptions(request, runtime);
  }

  /**
   * Enables or disables IP convergence.
   * 
   * @param request - UpdateOriginProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOriginProtectionResponse
   */
  async updateOriginProtectionWithOptions(request: $_model.UpdateOriginProtectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOriginProtectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.originConverge)) {
      query["OriginConverge"] = request.originConverge;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOriginProtection",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOriginProtectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOriginProtectionResponse({}));
  }

  /**
   * Enables or disables IP convergence.
   * 
   * @param request - UpdateOriginProtectionRequest
   * @returns UpdateOriginProtectionResponse
   */
  async updateOriginProtection(request: $_model.UpdateOriginProtectionRequest): Promise<$_model.UpdateOriginProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOriginProtectionWithOptions(request, runtime);
  }

  /**
   * Updates the IP whitelist for origin protection used by a website to the latest version.
   * 
   * @param request - UpdateOriginProtectionIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOriginProtectionIpWhiteListResponse
   */
  async updateOriginProtectionIpWhiteListWithOptions(request: $_model.UpdateOriginProtectionIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOriginProtectionIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOriginProtectionIpWhiteList",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOriginProtectionIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOriginProtectionIpWhiteListResponse({}));
  }

  /**
   * Updates the IP whitelist for origin protection used by a website to the latest version.
   * 
   * @param request - UpdateOriginProtectionIpWhiteListRequest
   * @returns UpdateOriginProtectionIpWhiteListResponse
   */
  async updateOriginProtectionIpWhiteList(request: $_model.UpdateOriginProtectionIpWhiteListRequest): Promise<$_model.UpdateOriginProtectionIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOriginProtectionIpWhiteListWithOptions(request, runtime);
  }

  /**
   * Modify Origin Rule Configuration for Site
   * 
   * @param request - UpdateOriginRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOriginRuleResponse
   */
  async updateOriginRuleWithOptions(request: $_model.UpdateOriginRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOriginRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.dnsRecord)) {
      query["DnsRecord"] = request.dnsRecord;
    }

    if (!$dara.isNull(request.follow302Enable)) {
      query["Follow302Enable"] = request.follow302Enable;
    }

    if (!$dara.isNull(request.follow302MaxTries)) {
      query["Follow302MaxTries"] = request.follow302MaxTries;
    }

    if (!$dara.isNull(request.follow302RetainArgs)) {
      query["Follow302RetainArgs"] = request.follow302RetainArgs;
    }

    if (!$dara.isNull(request.follow302RetainHeader)) {
      query["Follow302RetainHeader"] = request.follow302RetainHeader;
    }

    if (!$dara.isNull(request.follow302TargetHost)) {
      query["Follow302TargetHost"] = request.follow302TargetHost;
    }

    if (!$dara.isNull(request.originHost)) {
      query["OriginHost"] = request.originHost;
    }

    if (!$dara.isNull(request.originHttpPort)) {
      query["OriginHttpPort"] = request.originHttpPort;
    }

    if (!$dara.isNull(request.originHttpsPort)) {
      query["OriginHttpsPort"] = request.originHttpsPort;
    }

    if (!$dara.isNull(request.originMtls)) {
      query["OriginMtls"] = request.originMtls;
    }

    if (!$dara.isNull(request.originReadTimeout)) {
      query["OriginReadTimeout"] = request.originReadTimeout;
    }

    if (!$dara.isNull(request.originScheme)) {
      query["OriginScheme"] = request.originScheme;
    }

    if (!$dara.isNull(request.originSni)) {
      query["OriginSni"] = request.originSni;
    }

    if (!$dara.isNull(request.originVerify)) {
      query["OriginVerify"] = request.originVerify;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.rangeChunkSize)) {
      query["RangeChunkSize"] = request.rangeChunkSize;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOriginRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOriginRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOriginRuleResponse({}));
  }

  /**
   * Modify Origin Rule Configuration for Site
   * 
   * @param request - UpdateOriginRuleRequest
   * @returns UpdateOriginRuleResponse
   */
  async updateOriginRule(request: $_model.UpdateOriginRuleRequest): Promise<$_model.UpdateOriginRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOriginRuleWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a custom error page, such as the name, description, content type, and content of the page.
   * 
   * @param request - UpdatePageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePageResponse
   */
  async updatePageWithOptions(request: $_model.UpdatePageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePageResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePageResponse({}));
  }

  /**
   * Modifies the configurations of a custom error page, such as the name, description, content type, and content of the page.
   * 
   * @param request - UpdatePageRequest
   * @returns UpdatePageResponse
   */
  async updatePage(request: $_model.UpdatePageRequest): Promise<$_model.UpdatePageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePageWithOptions(request, runtime);
  }

  /**
   * 套餐变配
   * 
   * @param request - UpdateRatePlanSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRatePlanSpecResponse
   */
  async updateRatePlanSpecWithOptions(request: $_model.UpdateRatePlanSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRatePlanSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoPay)) {
      query["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.targetPlanCode)) {
      query["TargetPlanCode"] = request.targetPlanCode;
    }

    if (!$dara.isNull(request.targetPlanName)) {
      query["TargetPlanName"] = request.targetPlanName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRatePlanSpec",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRatePlanSpecResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRatePlanSpecResponse({}));
  }

  /**
   * 套餐变配
   * 
   * @param request - UpdateRatePlanSpecRequest
   * @returns UpdateRatePlanSpecResponse
   */
  async updateRatePlanSpec(request: $_model.UpdateRatePlanSpecRequest): Promise<$_model.UpdateRatePlanSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRatePlanSpecWithOptions(request, runtime);
  }

  /**
   * Updates multiple types of DNS records and origin authentication configurations.
   * 
   * @remarks
   * This operation allows you to update multiple types of DNS records, including but not limited to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI. You can modify the record content by providing the necessary fields such as Value, Priority, and Flag. For origins added in CNAME records such as OSS and S3, the API enables you to configure authentication details to ensure secure access.
   * ### [](#)Usage notes
   * *   The record value (Value) must match the record type. For example, the CNAME record should correspond to the target domain name.
   * *   You must specify a priority (Priority) for some record types, such as MX and SRV.
   * *   You must specify specific fields such as Flag and Tag for CAA records.
   * *   When you update security records such as CERT and SSHFP, you must accurately set fields such as Type and Algorithm.
   * *   If your origin type is OSS or S3, configure the authentication details in AuthConf based on the permissions.
   * 
   * @param tmpReq - UpdateRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRecordResponse
   */
  async updateRecordWithOptions(tmpReq: $_model.UpdateRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRecordResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.authConf)) {
      request.authConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.authConf, "AuthConf", "json");
    }

    if (!$dara.isNull(tmpReq.data)) {
      request.dataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.data, "Data", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authConfShrink)) {
      query["AuthConf"] = request.authConfShrink;
    }

    if (!$dara.isNull(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.dataShrink)) {
      query["Data"] = request.dataShrink;
    }

    if (!$dara.isNull(request.hostPolicy)) {
      query["HostPolicy"] = request.hostPolicy;
    }

    if (!$dara.isNull(request.proxied)) {
      query["Proxied"] = request.proxied;
    }

    if (!$dara.isNull(request.recordId)) {
      query["RecordId"] = request.recordId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.ttl)) {
      query["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRecord",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRecordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRecordResponse({}));
  }

  /**
   * Updates multiple types of DNS records and origin authentication configurations.
   * 
   * @remarks
   * This operation allows you to update multiple types of DNS records, including but not limited to A/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI. You can modify the record content by providing the necessary fields such as Value, Priority, and Flag. For origins added in CNAME records such as OSS and S3, the API enables you to configure authentication details to ensure secure access.
   * ### [](#)Usage notes
   * *   The record value (Value) must match the record type. For example, the CNAME record should correspond to the target domain name.
   * *   You must specify a priority (Priority) for some record types, such as MX and SRV.
   * *   You must specify specific fields such as Flag and Tag for CAA records.
   * *   When you update security records such as CERT and SSHFP, you must accurately set fields such as Type and Algorithm.
   * *   If your origin type is OSS or S3, configure the authentication details in AuthConf based on the permissions.
   * 
   * @param request - UpdateRecordRequest
   * @returns UpdateRecordResponse
   */
  async updateRecord(request: $_model.UpdateRecordRequest): Promise<$_model.UpdateRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRecordWithOptions(request, runtime);
  }

  /**
   * Update Redirect Rule
   * 
   * @param request - UpdateRedirectRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRedirectRuleResponse
   */
  async updateRedirectRuleWithOptions(request: $_model.UpdateRedirectRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRedirectRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.reserveQueryString)) {
      query["ReserveQueryString"] = request.reserveQueryString;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.statusCode)) {
      query["StatusCode"] = request.statusCode;
    }

    if (!$dara.isNull(request.targetUrl)) {
      query["TargetUrl"] = request.targetUrl;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRedirectRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRedirectRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRedirectRuleResponse({}));
  }

  /**
   * Update Redirect Rule
   * 
   * @param request - UpdateRedirectRuleRequest
   * @returns UpdateRedirectRuleResponse
   */
  async updateRedirectRule(request: $_model.UpdateRedirectRuleRequest): Promise<$_model.UpdateRedirectRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRedirectRuleWithOptions(request, runtime);
  }

  /**
   * Modify Rewrite URL Rule
   * 
   * @param request - UpdateRewriteUrlRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRewriteUrlRuleResponse
   */
  async updateRewriteUrlRuleWithOptions(request: $_model.UpdateRewriteUrlRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRewriteUrlRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.queryString)) {
      query["QueryString"] = request.queryString;
    }

    if (!$dara.isNull(request.rewriteQueryStringType)) {
      query["RewriteQueryStringType"] = request.rewriteQueryStringType;
    }

    if (!$dara.isNull(request.rewriteUriType)) {
      query["RewriteUriType"] = request.rewriteUriType;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.uri)) {
      query["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRewriteUrlRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRewriteUrlRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRewriteUrlRuleResponse({}));
  }

  /**
   * Modify Rewrite URL Rule
   * 
   * @param request - UpdateRewriteUrlRuleRequest
   * @returns UpdateRewriteUrlRuleResponse
   */
  async updateRewriteUrlRule(request: $_model.UpdateRewriteUrlRuleRequest): Promise<$_model.UpdateRewriteUrlRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRewriteUrlRuleWithOptions(request, runtime);
  }

  /**
   * 修改边缘函数路由配置
   * 
   * @param request - UpdateRoutineRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoutineRouteResponse
   */
  async updateRoutineRouteWithOptions(request: $_model.UpdateRoutineRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoutineRouteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bypass)) {
      query["Bypass"] = request.bypass;
    }

    if (!$dara.isNull(request.configId)) {
      query["ConfigId"] = request.configId;
    }

    if (!$dara.isNull(request.routeEnable)) {
      query["RouteEnable"] = request.routeEnable;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.routineName)) {
      query["RoutineName"] = request.routineName;
    }

    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRoutineRoute",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRoutineRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoutineRouteResponse({}));
  }

  /**
   * 修改边缘函数路由配置
   * 
   * @param request - UpdateRoutineRouteRequest
   * @returns UpdateRoutineRouteResponse
   */
  async updateRoutineRoute(request: $_model.UpdateRoutineRouteRequest): Promise<$_model.UpdateRoutineRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRoutineRouteWithOptions(request, runtime);
  }

  /**
   * Updates a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - UpdateScheduledPreloadExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledPreloadExecutionResponse
   */
  async updateScheduledPreloadExecutionWithOptions(request: $_model.UpdateScheduledPreloadExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduledPreloadExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      body["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.sliceLen)) {
      body["SliceLen"] = request.sliceLen;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledPreloadExecution",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduledPreloadExecutionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduledPreloadExecutionResponse({}));
  }

  /**
   * Updates a scheduled prefetch plan based on the plan ID.
   * 
   * @param request - UpdateScheduledPreloadExecutionRequest
   * @returns UpdateScheduledPreloadExecutionResponse
   */
  async updateScheduledPreloadExecution(request: $_model.UpdateScheduledPreloadExecutionRequest): Promise<$_model.UpdateScheduledPreloadExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScheduledPreloadExecutionWithOptions(request, runtime);
  }

  /**
   * 修改站点放行搜索引擎爬虫配置
   * 
   * @param request - UpdateSeoBypassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSeoBypassResponse
   */
  async updateSeoBypassWithOptions(request: $_model.UpdateSeoBypassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSeoBypassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSeoBypass",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSeoBypassResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSeoBypassResponse({}));
  }

  /**
   * 修改站点放行搜索引擎爬虫配置
   * 
   * @param request - UpdateSeoBypassRequest
   * @returns UpdateSeoBypassResponse
   */
  async updateSeoBypass(request: $_model.UpdateSeoBypassRequest): Promise<$_model.UpdateSeoBypassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSeoBypassWithOptions(request, runtime);
  }

  /**
   * Converts the DNS setup option of a website.
   * 
   * @remarks
   * When you change the DNS setup of a website from NS to CNAME, note the following prerequisites:
   * *   The website only has proxied A/AAAA and CNAME records.
   * *   The DNS passthrough mode and custom nameserver features are not enabled for the website.
   * 
   * @param request - UpdateSiteAccessTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteAccessTypeResponse
   */
  async updateSiteAccessTypeWithOptions(request: $_model.UpdateSiteAccessTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteAccessTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessType)) {
      query["AccessType"] = request.accessType;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteAccessType",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteAccessTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteAccessTypeResponse({}));
  }

  /**
   * Converts the DNS setup option of a website.
   * 
   * @remarks
   * When you change the DNS setup of a website from NS to CNAME, note the following prerequisites:
   * *   The website only has proxied A/AAAA and CNAME records.
   * *   The DNS passthrough mode and custom nameserver features are not enabled for the website.
   * 
   * @param request - UpdateSiteAccessTypeRequest
   * @returns UpdateSiteAccessTypeResponse
   */
  async updateSiteAccessType(request: $_model.UpdateSiteAccessTypeRequest): Promise<$_model.UpdateSiteAccessTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteAccessTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the service location for a single website. This updates the acceleration configuration of the website to adapt to changes in traffic distribution, and improve user experience in specific regions.
   * 
   * @param request - UpdateSiteCoverageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteCoverageResponse
   */
  async updateSiteCoverageWithOptions(request: $_model.UpdateSiteCoverageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteCoverageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.coverage)) {
      query["Coverage"] = request.coverage;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteCoverage",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteCoverageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteCoverageResponse({}));
  }

  /**
   * Modifies the service location for a single website. This updates the acceleration configuration of the website to adapt to changes in traffic distribution, and improve user experience in specific regions.
   * 
   * @param request - UpdateSiteCoverageRequest
   * @returns UpdateSiteCoverageResponse
   */
  async updateSiteCoverage(request: $_model.UpdateSiteCoverageRequest): Promise<$_model.UpdateSiteCoverageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteCoverageWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration of custom request header, response header, and cookie fields that are used to capture logs of a website.
   * 
   * @param tmpReq - UpdateSiteCustomLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteCustomLogResponse
   */
  async updateSiteCustomLogWithOptions(tmpReq: $_model.UpdateSiteCustomLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteCustomLogResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSiteCustomLogShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.cookies)) {
      request.cookiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cookies, "Cookies", "json");
    }

    if (!$dara.isNull(tmpReq.requestHeaders)) {
      request.requestHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.requestHeaders, "RequestHeaders", "json");
    }

    if (!$dara.isNull(tmpReq.responseHeaders)) {
      request.responseHeadersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.responseHeaders, "ResponseHeaders", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cookiesShrink)) {
      body["Cookies"] = request.cookiesShrink;
    }

    if (!$dara.isNull(request.requestHeadersShrink)) {
      body["RequestHeaders"] = request.requestHeadersShrink;
    }

    if (!$dara.isNull(request.responseHeadersShrink)) {
      body["ResponseHeaders"] = request.responseHeadersShrink;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteCustomLog",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteCustomLogResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteCustomLogResponse({}));
  }

  /**
   * Modifies the configuration of custom request header, response header, and cookie fields that are used to capture logs of a website.
   * 
   * @param request - UpdateSiteCustomLogRequest
   * @returns UpdateSiteCustomLogResponse
   */
  async updateSiteCustomLog(request: $_model.UpdateSiteCustomLogRequest): Promise<$_model.UpdateSiteCustomLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteCustomLogWithOptions(request, runtime);
  }

  /**
   * Modifies a real-time log delivery task.
   * 
   * @param request - UpdateSiteDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteDeliveryTaskResponse
   */
  async updateSiteDeliveryTaskWithOptions(request: $_model.UpdateSiteDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteDeliveryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!$dara.isNull(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteDeliveryTaskResponse({}));
  }

  /**
   * Modifies a real-time log delivery task.
   * 
   * @param request - UpdateSiteDeliveryTaskRequest
   * @returns UpdateSiteDeliveryTaskResponse
   */
  async updateSiteDeliveryTask(request: $_model.UpdateSiteDeliveryTaskRequest): Promise<$_model.UpdateSiteDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Changes the status of a real-time log delivery task.
   * 
   * @param request - UpdateSiteDeliveryTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteDeliveryTaskStatusResponse
   */
  async updateSiteDeliveryTaskStatusWithOptions(request: $_model.UpdateSiteDeliveryTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteDeliveryTaskStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteDeliveryTaskStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteDeliveryTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteDeliveryTaskStatusResponse({}));
  }

  /**
   * Changes the status of a real-time log delivery task.
   * 
   * @param request - UpdateSiteDeliveryTaskStatusRequest
   * @returns UpdateSiteDeliveryTaskStatusResponse
   */
  async updateSiteDeliveryTaskStatus(request: $_model.UpdateSiteDeliveryTaskStatusRequest): Promise<$_model.UpdateSiteDeliveryTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteDeliveryTaskStatusWithOptions(request, runtime);
  }

  /**
   * Modifies the site hold configuration of a website. After you enable site hold, other accounts cannot add your website domain or its subdomains to ESA.
   * 
   * @param request - UpdateSiteNameExclusiveRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteNameExclusiveResponse
   */
  async updateSiteNameExclusiveWithOptions(request: $_model.UpdateSiteNameExclusiveRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteNameExclusiveResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteNameExclusive",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteNameExclusiveResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteNameExclusiveResponse({}));
  }

  /**
   * Modifies the site hold configuration of a website. After you enable site hold, other accounts cannot add your website domain or its subdomains to ESA.
   * 
   * @param request - UpdateSiteNameExclusiveRequest
   * @returns UpdateSiteNameExclusiveResponse
   */
  async updateSiteNameExclusive(request: $_model.UpdateSiteNameExclusiveRequest): Promise<$_model.UpdateSiteNameExclusiveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteNameExclusiveWithOptions(request, runtime);
  }

  /**
   * Modifies the ESA proxy configuration of a website.
   * 
   * @param request - UpdateSitePauseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSitePauseResponse
   */
  async updateSitePauseWithOptions(request: $_model.UpdateSitePauseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSitePauseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paused)) {
      query["Paused"] = request.paused;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSitePause",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSitePauseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSitePauseResponse({}));
  }

  /**
   * Modifies the ESA proxy configuration of a website.
   * 
   * @param request - UpdateSitePauseRequest
   * @returns UpdateSitePauseResponse
   */
  async updateSitePause(request: $_model.UpdateSitePauseRequest): Promise<$_model.UpdateSitePauseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSitePauseWithOptions(request, runtime);
  }

  /**
   * Updates the custom nameserver names for a single website.
   * 
   * @param request - UpdateSiteVanityNSRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSiteVanityNSResponse
   */
  async updateSiteVanityNSWithOptions(request: $_model.UpdateSiteVanityNSRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSiteVanityNSResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.vanityNSList)) {
      query["VanityNSList"] = request.vanityNSList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSiteVanityNS",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSiteVanityNSResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSiteVanityNSResponse({}));
  }

  /**
   * Updates the custom nameserver names for a single website.
   * 
   * @param request - UpdateSiteVanityNSRequest
   * @returns UpdateSiteVanityNSResponse
   */
  async updateSiteVanityNS(request: $_model.UpdateSiteVanityNSRequest): Promise<$_model.UpdateSiteVanityNSResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSiteVanityNSWithOptions(request, runtime);
  }

  /**
   * Modifies the tiered cache configuration of your website.
   * 
   * @param request - UpdateTieredCacheRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTieredCacheResponse
   */
  async updateTieredCacheWithOptions(request: $_model.UpdateTieredCacheRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTieredCacheResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheArchitectureMode)) {
      query["CacheArchitectureMode"] = request.cacheArchitectureMode;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTieredCache",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTieredCacheResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTieredCacheResponse({}));
  }

  /**
   * Modifies the tiered cache configuration of your website.
   * 
   * @param request - UpdateTieredCacheRequest
   * @returns UpdateTieredCacheResponse
   */
  async updateTieredCache(request: $_model.UpdateTieredCacheRequest): Promise<$_model.UpdateTieredCacheResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTieredCacheWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a delivery task, including the task name, log field, log category, and discard rate.
   * 
   * @param request - UpdateUserDeliveryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDeliveryTaskResponse
   */
  async updateUserDeliveryTaskWithOptions(request: $_model.UpdateUserDeliveryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDeliveryTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["BusinessType"] = request.businessType;
    }

    if (!$dara.isNull(request.details)) {
      body["Details"] = request.details;
    }

    if (!$dara.isNull(request.discardRate)) {
      body["DiscardRate"] = request.discardRate;
    }

    if (!$dara.isNull(request.fieldName)) {
      body["FieldName"] = request.fieldName;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDeliveryTask",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDeliveryTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDeliveryTaskResponse({}));
  }

  /**
   * Modifies the configurations of a delivery task, including the task name, log field, log category, and discard rate.
   * 
   * @param request - UpdateUserDeliveryTaskRequest
   * @returns UpdateUserDeliveryTaskResponse
   */
  async updateUserDeliveryTask(request: $_model.UpdateUserDeliveryTaskRequest): Promise<$_model.UpdateUserDeliveryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDeliveryTaskWithOptions(request, runtime);
  }

  /**
   * Changes the status of a delivery task in your Alibaba Cloud account.
   * 
   * @remarks
   * ## [](#)
   * You can call this operation to enable or disable a delivery task by using TaskName and Method. The response includes the most recent status and operation result details of the task.
   * 
   * @param request - UpdateUserDeliveryTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserDeliveryTaskStatusResponse
   */
  async updateUserDeliveryTaskStatusWithOptions(request: $_model.UpdateUserDeliveryTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserDeliveryTaskStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserDeliveryTaskStatus",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserDeliveryTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserDeliveryTaskStatusResponse({}));
  }

  /**
   * Changes the status of a delivery task in your Alibaba Cloud account.
   * 
   * @remarks
   * ## [](#)
   * You can call this operation to enable or disable a delivery task by using TaskName and Method. The response includes the most recent status and operation result details of the task.
   * 
   * @param request - UpdateUserDeliveryTaskStatusRequest
   * @returns UpdateUserDeliveryTaskStatusResponse
   */
  async updateUserDeliveryTaskStatus(request: $_model.UpdateUserDeliveryTaskStatusRequest): Promise<$_model.UpdateUserDeliveryTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserDeliveryTaskStatusWithOptions(request, runtime);
  }

  /**
   * Update WAF Rule Page
   * 
   * @param tmpReq - UpdateWafRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWafRuleResponse
   */
  async updateWafRuleWithOptions(tmpReq: $_model.UpdateWafRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWafRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWafRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.position)) {
      body["Position"] = request.position;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWafRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWafRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWafRuleResponse({}));
  }

  /**
   * Update WAF Rule Page
   * 
   * @param request - UpdateWafRuleRequest
   * @returns UpdateWafRuleResponse
   */
  async updateWafRule(request: $_model.UpdateWafRuleRequest): Promise<$_model.UpdateWafRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWafRuleWithOptions(request, runtime);
  }

  /**
   * Update WAF Ruleset
   * 
   * @param request - UpdateWafRulesetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWafRulesetResponse
   */
  async updateWafRulesetWithOptions(request: $_model.UpdateWafRulesetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWafRulesetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.siteVersion)) {
      query["SiteVersion"] = request.siteVersion;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWafRuleset",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWafRulesetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWafRulesetResponse({}));
  }

  /**
   * Update WAF Ruleset
   * 
   * @param request - UpdateWafRulesetRequest
   * @returns UpdateWafRulesetResponse
   */
  async updateWafRuleset(request: $_model.UpdateWafRulesetRequest): Promise<$_model.UpdateWafRulesetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWafRulesetWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a waiting room.
   * 
   * @param tmpReq - UpdateWaitingRoomRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomResponse
   */
  async updateWaitingRoomWithOptions(tmpReq: $_model.UpdateWaitingRoomRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWaitingRoomResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWaitingRoomShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hostNameAndPath)) {
      request.hostNameAndPathShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostNameAndPath, "HostNameAndPath", "json");
    }

    let query = { };
    if (!$dara.isNull(request.cookieName)) {
      query["CookieName"] = request.cookieName;
    }

    if (!$dara.isNull(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.hostNameAndPathShrink)) {
      query["HostNameAndPath"] = request.hostNameAndPathShrink;
    }

    if (!$dara.isNull(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!$dara.isNull(request.queueAllEnable)) {
      query["QueueAllEnable"] = request.queueAllEnable;
    }

    if (!$dara.isNull(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!$dara.isNull(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!$dara.isNull(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!$dara.isNull(request.waitingRoomId)) {
      query["WaitingRoomId"] = request.waitingRoomId;
    }

    if (!$dara.isNull(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWaitingRoom",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWaitingRoomResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWaitingRoomResponse({}));
  }

  /**
   * Modifies the configurations of a waiting room.
   * 
   * @param request - UpdateWaitingRoomRequest
   * @returns UpdateWaitingRoomResponse
   */
  async updateWaitingRoom(request: $_model.UpdateWaitingRoomRequest): Promise<$_model.UpdateWaitingRoomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWaitingRoomWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a waiting room event.
   * 
   * @param request - UpdateWaitingRoomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomEventResponse
   */
  async updateWaitingRoomEventWithOptions(request: $_model.UpdateWaitingRoomEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWaitingRoomEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customPageHtml)) {
      query["CustomPageHtml"] = request.customPageHtml;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.disableSessionRenewalEnable)) {
      query["DisableSessionRenewalEnable"] = request.disableSessionRenewalEnable;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.jsonResponseEnable)) {
      query["JsonResponseEnable"] = request.jsonResponseEnable;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newUsersPerMinute)) {
      query["NewUsersPerMinute"] = request.newUsersPerMinute;
    }

    if (!$dara.isNull(request.preQueueEnable)) {
      query["PreQueueEnable"] = request.preQueueEnable;
    }

    if (!$dara.isNull(request.preQueueStartTime)) {
      query["PreQueueStartTime"] = request.preQueueStartTime;
    }

    if (!$dara.isNull(request.queuingMethod)) {
      query["QueuingMethod"] = request.queuingMethod;
    }

    if (!$dara.isNull(request.queuingStatusCode)) {
      query["QueuingStatusCode"] = request.queuingStatusCode;
    }

    if (!$dara.isNull(request.randomPreQueueEnable)) {
      query["RandomPreQueueEnable"] = request.randomPreQueueEnable;
    }

    if (!$dara.isNull(request.sessionDuration)) {
      query["SessionDuration"] = request.sessionDuration;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.totalActiveUsers)) {
      query["TotalActiveUsers"] = request.totalActiveUsers;
    }

    if (!$dara.isNull(request.waitingRoomEventId)) {
      query["WaitingRoomEventId"] = request.waitingRoomEventId;
    }

    if (!$dara.isNull(request.waitingRoomType)) {
      query["WaitingRoomType"] = request.waitingRoomType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWaitingRoomEvent",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWaitingRoomEventResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWaitingRoomEventResponse({}));
  }

  /**
   * Modifies the configurations of a waiting room event.
   * 
   * @param request - UpdateWaitingRoomEventRequest
   * @returns UpdateWaitingRoomEventResponse
   */
  async updateWaitingRoomEvent(request: $_model.UpdateWaitingRoomEventRequest): Promise<$_model.UpdateWaitingRoomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWaitingRoomEventWithOptions(request, runtime);
  }

  /**
   * Modify Waiting Room Rule
   * 
   * @remarks
   * This interface allows you to modify the rule settings of a specific waiting room in a site, including the rule name, enable status, and rule content, etc.
   * 
   * @param request - UpdateWaitingRoomRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaitingRoomRuleResponse
   */
  async updateWaitingRoomRuleWithOptions(request: $_model.UpdateWaitingRoomRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWaitingRoomRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.rule)) {
      query["Rule"] = request.rule;
    }

    if (!$dara.isNull(request.ruleEnable)) {
      query["RuleEnable"] = request.ruleEnable;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.waitingRoomRuleId)) {
      query["WaitingRoomRuleId"] = request.waitingRoomRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWaitingRoomRule",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWaitingRoomRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWaitingRoomRuleResponse({}));
  }

  /**
   * Modify Waiting Room Rule
   * 
   * @remarks
   * This interface allows you to modify the rule settings of a specific waiting room in a site, including the rule name, enable status, and rule content, etc.
   * 
   * @param request - UpdateWaitingRoomRuleRequest
   * @returns UpdateWaitingRoomRuleResponse
   */
  async updateWaitingRoomRule(request: $_model.UpdateWaitingRoomRuleRequest): Promise<$_model.UpdateWaitingRoomRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWaitingRoomRuleWithOptions(request, runtime);
  }

  /**
   * Uploads a client certificate authority (CA) certificate.
   * 
   * @param request - UploadClientCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadClientCaCertificateResponse
   */
  async uploadClientCaCertificateWithOptions(request: $_model.UploadClientCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadClientCaCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadClientCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadClientCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadClientCaCertificateResponse({}));
  }

  /**
   * Uploads a client certificate authority (CA) certificate.
   * 
   * @param request - UploadClientCaCertificateRequest
   * @returns UploadClientCaCertificateResponse
   */
  async uploadClientCaCertificate(request: $_model.UploadClientCaCertificateRequest): Promise<$_model.UploadClientCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadClientCaCertificateWithOptions(request, runtime);
  }

  /**
   * Uploads the file that contains resources to be purged or prefetched.
   * 
   * @remarks
   * > 
   * *   The file can be up to 10 MB in size.
   * 
   * @param request - UploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadFileResponse
   */
  async uploadFileWithOptions(request: $_model.UploadFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.uploadTaskName)) {
      query["UploadTaskName"] = request.uploadTaskName;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadFile",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadFileResponse>(await this.callApi(params, req, runtime), new $_model.UploadFileResponse({}));
  }

  /**
   * Uploads the file that contains resources to be purged or prefetched.
   * 
   * @remarks
   * > 
   * *   The file can be up to 10 MB in size.
   * 
   * @param request - UploadFileRequest
   * @returns UploadFileResponse
   */
  async uploadFile(request: $_model.UploadFileRequest): Promise<$_model.UploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadFileWithOptions(request, runtime);
  }

  async uploadFileAdvance(request: $_model.UploadFileAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadFileResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "ESA",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let uploadFileReq = new $_model.UploadFileRequest({ });
    OpenApiUtil.convert(request, uploadFileReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      uploadFileReq.url = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadFileResp = await this.uploadFileWithOptions(uploadFileReq, runtime);
    return uploadFileResp;
  }

  /**
   * 上传源服务器CA证书
   * 
   * @param request - UploadOriginCaCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadOriginCaCertificateResponse
   */
  async uploadOriginCaCertificateWithOptions(request: $_model.UploadOriginCaCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadOriginCaCertificateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.siteId)) {
      body["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadOriginCaCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadOriginCaCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadOriginCaCertificateResponse({}));
  }

  /**
   * 上传源服务器CA证书
   * 
   * @param request - UploadOriginCaCertificateRequest
   * @returns UploadOriginCaCertificateResponse
   */
  async uploadOriginCaCertificate(request: $_model.UploadOriginCaCertificateRequest): Promise<$_model.UploadOriginCaCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadOriginCaCertificateWithOptions(request, runtime);
  }

  /**
   * 上传域名回源客户端证书
   * 
   * @param request - UploadOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadOriginClientCertificateResponse
   */
  async uploadOriginClientCertificateWithOptions(request: $_model.UploadOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadOriginClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadOriginClientCertificateResponse({}));
  }

  /**
   * 上传域名回源客户端证书
   * 
   * @param request - UploadOriginClientCertificateRequest
   * @returns UploadOriginClientCertificateResponse
   */
  async uploadOriginClientCertificate(request: $_model.UploadOriginClientCertificateRequest): Promise<$_model.UploadOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * Upload site origin client certificate
   * 
   * @param request - UploadSiteOriginClientCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadSiteOriginClientCertificateResponse
   */
  async uploadSiteOriginClientCertificateWithOptions(request: $_model.UploadSiteOriginClientCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadSiteOriginClientCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certificate)) {
      body["Certificate"] = request.certificate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.privateKey)) {
      body["PrivateKey"] = request.privateKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadSiteOriginClientCertificate",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadSiteOriginClientCertificateResponse>(await this.callApi(params, req, runtime), new $_model.UploadSiteOriginClientCertificateResponse({}));
  }

  /**
   * Upload site origin client certificate
   * 
   * @param request - UploadSiteOriginClientCertificateRequest
   * @returns UploadSiteOriginClientCertificateResponse
   */
  async uploadSiteOriginClientCertificate(request: $_model.UploadSiteOriginClientCertificateRequest): Promise<$_model.UploadSiteOriginClientCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadSiteOriginClientCertificateWithOptions(request, runtime);
  }

  /**
   * Verifies the ownership of a website domain. Websites that pass the verification are automatically activated.
   * 
   * @remarks
   * 1.  For a website connected by using NS setup, this operation verifies whether the nameservers of the website are the nameservers assigned by Alibaba Cloud.
   * 2.  For a website connected by using CNAME setup, this operation verifies whether the website has a TXT record whose hostname is  _esaauth.[websiteDomainName] and record value is the value of VerifyCode to the DNS records of your domain. You can see the VerifyCode field in the site information.
   * 
   * @param request - VerifySiteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifySiteResponse
   */
  async verifySiteWithOptions(request: $_model.VerifySiteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VerifySiteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.siteId)) {
      query["SiteId"] = request.siteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VerifySite",
      version: "2024-09-10",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VerifySiteResponse>(await this.callApi(params, req, runtime), new $_model.VerifySiteResponse({}));
  }

  /**
   * Verifies the ownership of a website domain. Websites that pass the verification are automatically activated.
   * 
   * @remarks
   * 1.  For a website connected by using NS setup, this operation verifies whether the nameservers of the website are the nameservers assigned by Alibaba Cloud.
   * 2.  For a website connected by using CNAME setup, this operation verifies whether the website has a TXT record whose hostname is  _esaauth.[websiteDomainName] and record value is the value of VerifyCode to the DNS records of your domain. You can see the VerifyCode field in the site information.
   * 
   * @param request - VerifySiteRequest
   * @returns VerifySiteResponse
   */
  async verifySite(request: $_model.VerifySiteRequest): Promise<$_model.VerifySiteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifySiteWithOptions(request, runtime);
  }

}
