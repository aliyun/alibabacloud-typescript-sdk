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
    this._endpoint = this.getEndpoint("farui", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTextFileResponse
   */
  async createTextFileWithOptions(WorkspaceId: string, request: $_model.CreateTextFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTextFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.createTime)) {
      body["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.textFileName)) {
      body["TextFileName"] = request.textFileName;
    }

    if (!$dara.isNull(request.textFileUrl)) {
      body["TextFileUrl"] = request.textFileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTextFile",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(WorkspaceId)}/data/textFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTextFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateTextFileResponse({}));
  }

  /**
   * 上传合同文件
   * 
   * @param request - CreateTextFileRequest
   * @returns CreateTextFileResponse
   */
  async createTextFile(WorkspaceId: string, request: $_model.CreateTextFileRequest): Promise<$_model.CreateTextFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTextFileWithOptions(WorkspaceId, request, headers, runtime);
  }

  async createTextFileAdvance(WorkspaceId: string, request: $_model.CreateTextFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTextFileResponse> {
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
      product: "FaRui",
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
    let createTextFileReq = new $_model.CreateTextFileRequest({ });
    OpenApiUtil.convert(request, createTextFileReq);
    if (!$dara.isNull(request.textFileUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.textFileUrlObject,
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
      createTextFileReq.textFileUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createTextFileResp = await this.createTextFileWithOptions(WorkspaceId, createTextFileReq, headers, runtime);
    return createTextFileResp;
  }

  /**
   * 生成合同审查结果
   * 
   * @param tmpReq - RunContractResultGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGenerationWithOptions(workspaceId: string, tmpReq: $_model.RunContractResultGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunContractResultGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunContractResultGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractResultGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/result/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunContractResultGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunContractResultGenerationResponse({}));
  }

  /**
   * 生成合同审查结果
   * 
   * @param request - RunContractResultGenerationRequest
   * @returns RunContractResultGenerationResponse
   */
  async runContractResultGeneration(workspaceId: string, request: $_model.RunContractResultGenerationRequest): Promise<$_model.RunContractResultGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractResultGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 生成合同审查规则
   * 
   * @param tmpReq - RunContractRuleGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGenerationWithOptions(workspaceId: string, tmpReq: $_model.RunContractRuleGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunContractRuleGenerationResponse> {
    tmpReq.validate();
    let request = new $_model.RunContractRuleGenerationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunContractRuleGeneration",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/contract/rule/genarate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunContractRuleGenerationResponse>(await this.callApi(params, req, runtime), new $_model.RunContractRuleGenerationResponse({}));
  }

  /**
   * 生成合同审查规则
   * 
   * @param request - RunContractRuleGenerationRequest
   * @returns RunContractRuleGenerationResponse
   */
  async runContractRuleGeneration(workspaceId: string, request: $_model.RunContractRuleGenerationRequest): Promise<$_model.RunContractRuleGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runContractRuleGenerationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 法律咨询
   * 
   * @param tmpReq - RunLegalAdviceConsultationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultationWithOptions(workspaceId: string, tmpReq: $_model.RunLegalAdviceConsultationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunLegalAdviceConsultationResponse> {
    tmpReq.validate();
    let request = new $_model.RunLegalAdviceConsultationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.assistant)) {
      request.assistantShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.assistant, "assistant", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.assistantShrink)) {
      body["assistant"] = request.assistantShrink;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunLegalAdviceConsultation",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/legalAdvice/consult`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunLegalAdviceConsultationResponse>(await this.callApi(params, req, runtime), new $_model.RunLegalAdviceConsultationResponse({}));
  }

  /**
   * 法律咨询
   * 
   * @param request - RunLegalAdviceConsultationRequest
   * @returns RunLegalAdviceConsultationResponse
   */
  async runLegalAdviceConsultation(workspaceId: string, request: $_model.RunLegalAdviceConsultationRequest): Promise<$_model.RunLegalAdviceConsultationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runLegalAdviceConsultationWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 案例检索
   * 
   * @param tmpReq - RunSearchCaseFullTextRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchCaseFullTextResponse
   */
  async runSearchCaseFullTextWithOptions(workspaceId: string, tmpReq: $_model.RunSearchCaseFullTextRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchCaseFullTextResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchCaseFullTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "filterCondition", "json");
    }

    if (!$dara.isNull(tmpReq.pageParam)) {
      request.pageParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageParam, "pageParam", "json");
    }

    if (!$dara.isNull(tmpReq.queryKeywords)) {
      request.queryKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryKeywords, "queryKeywords", "json");
    }

    if (!$dara.isNull(tmpReq.sortKeyAndDirection)) {
      request.sortKeyAndDirectionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortKeyAndDirection, "sortKeyAndDirection", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["filterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.pageParamShrink)) {
      body["pageParam"] = request.pageParamShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryKeywordsShrink)) {
      body["queryKeywords"] = request.queryKeywordsShrink;
    }

    if (!$dara.isNull(request.referLevel)) {
      body["referLevel"] = request.referLevel;
    }

    if (!$dara.isNull(request.sortKeyAndDirectionShrink)) {
      body["sortKeyAndDirection"] = request.sortKeyAndDirectionShrink;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchCaseFullText",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/search/case/fulltext`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchCaseFullTextResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchCaseFullTextResponse({}));
  }

  /**
   * 案例检索
   * 
   * @param request - RunSearchCaseFullTextRequest
   * @returns RunSearchCaseFullTextResponse
   */
  async runSearchCaseFullText(workspaceId: string, request: $_model.RunSearchCaseFullTextRequest): Promise<$_model.RunSearchCaseFullTextResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSearchCaseFullTextWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 法规搜索
   * 
   * @param tmpReq - RunSearchLawQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSearchLawQueryResponse
   */
  async runSearchLawQueryWithOptions(workspaceId: string, tmpReq: $_model.RunSearchLawQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunSearchLawQueryResponse> {
    tmpReq.validate();
    let request = new $_model.RunSearchLawQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterCondition)) {
      request.filterConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterCondition, "filterCondition", "json");
    }

    if (!$dara.isNull(tmpReq.pageParam)) {
      request.pageParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pageParam, "pageParam", "json");
    }

    if (!$dara.isNull(tmpReq.queryKeywords)) {
      request.queryKeywordsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryKeywords, "queryKeywords", "json");
    }

    if (!$dara.isNull(tmpReq.thread)) {
      request.threadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thread, "thread", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.filterConditionShrink)) {
      body["filterCondition"] = request.filterConditionShrink;
    }

    if (!$dara.isNull(request.pageParamShrink)) {
      body["pageParam"] = request.pageParamShrink;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryKeywordsShrink)) {
      body["queryKeywords"] = request.queryKeywordsShrink;
    }

    if (!$dara.isNull(request.threadShrink)) {
      body["thread"] = request.threadShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSearchLawQuery",
      version: "2024-06-28",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/farui/search/law/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSearchLawQueryResponse>(await this.callApi(params, req, runtime), new $_model.RunSearchLawQueryResponse({}));
  }

  /**
   * 法规搜索
   * 
   * @param request - RunSearchLawQueryRequest
   * @returns RunSearchLawQueryResponse
   */
  async runSearchLawQuery(workspaceId: string, request: $_model.RunSearchLawQueryRequest): Promise<$_model.RunSearchLawQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runSearchLawQueryWithOptions(workspaceId, request, headers, runtime);
  }

}
