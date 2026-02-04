// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "companyreg.aliyuncs.com",
      'ap-northeast-2-pop': "companyreg.aliyuncs.com",
      'ap-south-1': "companyreg.aliyuncs.com",
      'ap-southeast-1': "companyreg.aliyuncs.com",
      'ap-southeast-2': "companyreg.aliyuncs.com",
      'ap-southeast-3': "companyreg.aliyuncs.com",
      'ap-southeast-5': "companyreg.aliyuncs.com",
      'cn-beijing': "companyreg.aliyuncs.com",
      'cn-beijing-finance-1': "companyreg.aliyuncs.com",
      'cn-beijing-finance-pop': "companyreg.aliyuncs.com",
      'cn-beijing-gov-1': "companyreg.aliyuncs.com",
      'cn-beijing-nu16-b01': "companyreg.aliyuncs.com",
      'cn-chengdu': "companyreg.aliyuncs.com",
      'cn-edge-1': "companyreg.aliyuncs.com",
      'cn-fujian': "companyreg.aliyuncs.com",
      'cn-haidian-cm12-c01': "companyreg.aliyuncs.com",
      'cn-hangzhou-bj-b01': "companyreg.aliyuncs.com",
      'cn-hangzhou-finance': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "companyreg.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "companyreg.aliyuncs.com",
      'cn-hangzhou-test-306': "companyreg.aliyuncs.com",
      'cn-hongkong': "companyreg.aliyuncs.com",
      'cn-hongkong-finance-pop': "companyreg.aliyuncs.com",
      'cn-huhehaote': "companyreg.aliyuncs.com",
      'cn-huhehaote-nebula-1': "companyreg.aliyuncs.com",
      'cn-north-2-gov-1': "companyreg.aliyuncs.com",
      'cn-qingdao': "companyreg.aliyuncs.com",
      'cn-qingdao-nebula': "companyreg.aliyuncs.com",
      'cn-shanghai': "companyreg.aliyuncs.com",
      'cn-shanghai-et15-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-et2-b01': "companyreg.aliyuncs.com",
      'cn-shanghai-finance-1': "companyreg.aliyuncs.com",
      'cn-shanghai-inner': "companyreg.aliyuncs.com",
      'cn-shanghai-internal-test-1': "companyreg.aliyuncs.com",
      'cn-shenzhen': "companyreg.aliyuncs.com",
      'cn-shenzhen-finance-1': "companyreg.aliyuncs.com",
      'cn-shenzhen-inner': "companyreg.aliyuncs.com",
      'cn-shenzhen-st4-d01': "companyreg.aliyuncs.com",
      'cn-shenzhen-su18-b01': "companyreg.aliyuncs.com",
      'cn-wuhan': "companyreg.aliyuncs.com",
      'cn-wulanchabu': "companyreg.aliyuncs.com",
      'cn-yushanfang': "companyreg.aliyuncs.com",
      'cn-zhangbei': "companyreg.aliyuncs.com",
      'cn-zhangbei-na61-b01': "companyreg.aliyuncs.com",
      'cn-zhangjiakou': "companyreg.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "companyreg.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "companyreg.aliyuncs.com",
      'eu-central-1': "companyreg.aliyuncs.com",
      'eu-west-1': "companyreg.aliyuncs.com",
      'eu-west-1-oxs': "companyreg.aliyuncs.com",
      'me-east-1': "companyreg.aliyuncs.com",
      'rus-west-1-pop': "companyreg.aliyuncs.com",
      'us-east-1': "companyreg.aliyuncs.com",
      'us-west-1': "companyreg.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("companyreg", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 服务单授权
   * 
   * @param request - BindProduceAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindProduceAuthorizationResponse
   */
  async bindProduceAuthorizationWithOptions(request: $_model.BindProduceAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindProduceAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizedUserIds)) {
      body["AuthorizedUserIds"] = request.authorizedUserIds;
    }

    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.BindProduceAuthorizationResponse({}));
  }

  /**
   * 服务单授权
   * 
   * @param request - BindProduceAuthorizationRequest
   * @returns BindProduceAuthorizationResponse
   */
  async bindProduceAuthorization(request: $_model.BindProduceAuthorizationRequest): Promise<$_model.BindProduceAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindProduceAuthorizationWithOptions(request, runtime);
  }

  /**
   * @param request - CloseIntentionForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseIntentionForPartnerResponse
   */
  async closeIntentionForPartnerWithOptions(request: $_model.CloseIntentionForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseIntentionForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseIntentionForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseIntentionForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.CloseIntentionForPartnerResponse({}));
  }

  /**
   * @param request - CloseIntentionForPartnerRequest
   * @returns CloseIntentionForPartnerResponse
   */
  async closeIntentionForPartner(request: $_model.CloseIntentionForPartnerRequest): Promise<$_model.CloseIntentionForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeIntentionForPartnerWithOptions(request, runtime);
  }

  /**
   * @param request - CloseUserIntentionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseUserIntentionResponse
   */
  async closeUserIntentionWithOptions(request: $_model.CloseUserIntentionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseUserIntentionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseUserIntention",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseUserIntentionResponse>(await this.callApi(params, req, runtime), new $_model.CloseUserIntentionResponse({}));
  }

  /**
   * @param request - CloseUserIntentionRequest
   * @returns CloseUserIntentionResponse
   */
  async closeUserIntention(request: $_model.CloseUserIntentionRequest): Promise<$_model.CloseUserIntentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeUserIntentionWithOptions(request, runtime);
  }

  /**
   * CreateBusinessOpportunity
   * 
   * @param request - CreateBusinessOpportunityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBusinessOpportunityResponse
   */
  async createBusinessOpportunityWithOptions(request: $_model.CreateBusinessOpportunityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBusinessOpportunityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.VCode)) {
      query["VCode"] = request.VCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBusinessOpportunity",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBusinessOpportunityResponse>(await this.callApi(params, req, runtime), new $_model.CreateBusinessOpportunityResponse({}));
  }

  /**
   * CreateBusinessOpportunity
   * 
   * @param request - CreateBusinessOpportunityRequest
   * @returns CreateBusinessOpportunityResponse
   */
  async createBusinessOpportunity(request: $_model.CreateBusinessOpportunityRequest): Promise<$_model.CreateBusinessOpportunityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBusinessOpportunityWithOptions(request, runtime);
  }

  /**
   * @param request - CreateProduceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProduceForPartnerResponse
   */
  async createProduceForPartnerWithOptions(request: $_model.CreateProduceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProduceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProduceForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProduceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.CreateProduceForPartnerResponse({}));
  }

  /**
   * @param request - CreateProduceForPartnerRequest
   * @returns CreateProduceForPartnerResponse
   */
  async createProduceForPartner(request: $_model.CreateProduceForPartnerRequest): Promise<$_model.CreateProduceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProduceForPartnerWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePartnerConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePartnerConfigResponse
   */
  async describePartnerConfigWithOptions(request: $_model.DescribePartnerConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePartnerConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.partnerCode)) {
      query["PartnerCode"] = request.partnerCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePartnerConfig",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePartnerConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribePartnerConfigResponse({}));
  }

  /**
   * @param request - DescribePartnerConfigRequest
   * @returns DescribePartnerConfigResponse
   */
  async describePartnerConfig(request: $_model.DescribePartnerConfigRequest): Promise<$_model.DescribePartnerConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePartnerConfigWithOptions(request, runtime);
  }

  /**
   * GenerateUploadFilePolicy
   * 
   * @param request - GenerateUploadFilePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateUploadFilePolicyResponse
   */
  async generateUploadFilePolicyWithOptions(request: $_model.GenerateUploadFilePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateUploadFilePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateUploadFilePolicy",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateUploadFilePolicyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateUploadFilePolicyResponse({}));
  }

  /**
   * GenerateUploadFilePolicy
   * 
   * @param request - GenerateUploadFilePolicyRequest
   * @returns GenerateUploadFilePolicyResponse
   */
  async generateUploadFilePolicy(request: $_model.GenerateUploadFilePolicyRequest): Promise<$_model.GenerateUploadFilePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateUploadFilePolicyWithOptions(request, runtime);
  }

  /**
   * @param request - GetAlipayUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlipayUrlResponse
   */
  async getAlipayUrlWithOptions(request: $_model.GetAlipayUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlipayUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlipayUrl",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlipayUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAlipayUrlResponse({}));
  }

  /**
   * @param request - GetAlipayUrlRequest
   * @returns GetAlipayUrlResponse
   */
  async getAlipayUrl(request: $_model.GetAlipayUrlRequest): Promise<$_model.GetAlipayUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlipayUrlWithOptions(request, runtime);
  }

  /**
   * @param request - ListIntentionNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntentionNoteResponse
   */
  async listIntentionNoteWithOptions(request: $_model.ListIntentionNoteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntentionNoteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginTime)) {
      query["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
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
      action: "ListIntentionNote",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntentionNoteResponse>(await this.callApi(params, req, runtime), new $_model.ListIntentionNoteResponse({}));
  }

  /**
   * @param request - ListIntentionNoteRequest
   * @returns ListIntentionNoteResponse
   */
  async listIntentionNote(request: $_model.ListIntentionNoteRequest): Promise<$_model.ListIntentionNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntentionNoteWithOptions(request, runtime);
  }

  /**
   * @param request - ListProduceAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProduceAuthorizationResponse
   */
  async listProduceAuthorizationWithOptions(request: $_model.ListProduceAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProduceAuthorizationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ListProduceAuthorizationResponse({}));
  }

  /**
   * @param request - ListProduceAuthorizationRequest
   * @returns ListProduceAuthorizationResponse
   */
  async listProduceAuthorization(request: $_model.ListProduceAuthorizationRequest): Promise<$_model.ListProduceAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProduceAuthorizationWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserDetailSolutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDetailSolutionsResponse
   */
  async listUserDetailSolutionsWithOptions(request: $_model.ListUserDetailSolutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDetailSolutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDetailSolutions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDetailSolutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDetailSolutionsResponse({}));
  }

  /**
   * @param request - ListUserDetailSolutionsRequest
   * @returns ListUserDetailSolutionsResponse
   */
  async listUserDetailSolutions(request: $_model.ListUserDetailSolutionsRequest): Promise<$_model.ListUserDetailSolutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserDetailSolutionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserIntentionNotesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserIntentionNotesResponse
   */
  async listUserIntentionNotesWithOptions(request: $_model.ListUserIntentionNotesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserIntentionNotesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserIntentionNotes",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserIntentionNotesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserIntentionNotesResponse({}));
  }

  /**
   * @param request - ListUserIntentionNotesRequest
   * @returns ListUserIntentionNotesResponse
   */
  async listUserIntentionNotes(request: $_model.ListUserIntentionNotesRequest): Promise<$_model.ListUserIntentionNotesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserIntentionNotesWithOptions(request, runtime);
  }

  /**
   * 用户控制天需求列表查询
   * 
   * @param request - ListUserIntentionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserIntentionsResponse
   */
  async listUserIntentionsWithOptions(request: $_model.ListUserIntentionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserIntentionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.bizTypes)) {
      query["BizTypes"] = request.bizTypes;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortFiled)) {
      query["SortFiled"] = request.sortFiled;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.withExtInfo)) {
      query["WithExtInfo"] = request.withExtInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserIntentions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserIntentionsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserIntentionsResponse({}));
  }

  /**
   * 用户控制天需求列表查询
   * 
   * @param request - ListUserIntentionsRequest
   * @returns ListUserIntentionsResponse
   */
  async listUserIntentions(request: $_model.ListUserIntentionsRequest): Promise<$_model.ListUserIntentionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserIntentionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListUserProduceOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserProduceOperateLogsResponse
   */
  async listUserProduceOperateLogsWithOptions(request: $_model.ListUserProduceOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserProduceOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserProduceOperateLogs",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserProduceOperateLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserProduceOperateLogsResponse({}));
  }

  /**
   * @param request - ListUserProduceOperateLogsRequest
   * @returns ListUserProduceOperateLogsResponse
   */
  async listUserProduceOperateLogs(request: $_model.ListUserProduceOperateLogsRequest): Promise<$_model.ListUserProduceOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserProduceOperateLogsWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ListUserSolutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserSolutionsResponse
   */
  async listUserSolutionsWithOptions(tmpReq: $_model.ListUserSolutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserSolutionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListUserSolutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.existStatus)) {
      request.existStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.existStatus, "ExistStatus", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.existStatusShrink)) {
      query["ExistStatus"] = request.existStatusShrink;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserSolutions",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserSolutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserSolutionsResponse({}));
  }

  /**
   * @param request - ListUserSolutionsRequest
   * @returns ListUserSolutionsResponse
   */
  async listUserSolutions(request: $_model.ListUserSolutionsRequest): Promise<$_model.ListUserSolutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserSolutionsWithOptions(request, runtime);
  }

  /**
   * 玄坛发起智能外呼
   * 
   * @param request - LlmSmartCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmSmartCallResponse
   */
  async llmSmartCallWithOptions(request: $_model.LlmSmartCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmSmartCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callerNumber)) {
      query["CallerNumber"] = request.callerNumber;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.promptParam)) {
      query["PromptParam"] = request.promptParam;
    }

    if (!$dara.isNull(request.scenesCode)) {
      query["ScenesCode"] = request.scenesCode;
    }

    if (!$dara.isNull(request.skillType)) {
      query["SkillType"] = request.skillType;
    }

    if (!$dara.isNull(request.startWordParam)) {
      query["StartWordParam"] = request.startWordParam;
    }

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmSmartCall",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmSmartCallResponse>(await this.callApi(params, req, runtime), new $_model.LlmSmartCallResponse({}));
  }

  /**
   * 玄坛发起智能外呼
   * 
   * @param request - LlmSmartCallRequest
   * @returns LlmSmartCallResponse
   */
  async llmSmartCall(request: $_model.LlmSmartCallRequest): Promise<$_model.LlmSmartCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmSmartCallWithOptions(request, runtime);
  }

  /**
   * 服务商玄坛呼叫中心操作
   * 
   * @param request - OperateCallCenterForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateCallCenterForPartnerResponse
   */
  async operateCallCenterForPartnerWithOptions(request: $_model.OperateCallCenterForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateCallCenterForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callAction)) {
      query["CallAction"] = request.callAction;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.request)) {
      query["Request"] = request.request;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateCallCenterForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateCallCenterForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateCallCenterForPartnerResponse({}));
  }

  /**
   * 服务商玄坛呼叫中心操作
   * 
   * @param request - OperateCallCenterForPartnerRequest
   * @returns OperateCallCenterForPartnerResponse
   */
  async operateCallCenterForPartner(request: $_model.OperateCallCenterForPartnerRequest): Promise<$_model.OperateCallCenterForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateCallCenterForPartnerWithOptions(request, runtime);
  }

  /**
   * @param request - OperateProduceForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateProduceForPartnerResponse
   */
  async operateProduceForPartnerWithOptions(request: $_model.OperateProduceForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateProduceForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateProduceForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateProduceForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.OperateProduceForPartnerResponse({}));
  }

  /**
   * @param request - OperateProduceForPartnerRequest
   * @returns OperateProduceForPartnerResponse
   */
  async operateProduceForPartner(request: $_model.OperateProduceForPartnerRequest): Promise<$_model.OperateProduceForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateProduceForPartnerWithOptions(request, runtime);
  }

  /**
   * @param request - PutMeasureDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMeasureDataResponse
   */
  async putMeasureDataWithOptions(request: $_model.PutMeasureDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMeasureDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMeasureData",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMeasureDataResponse>(await this.callApi(params, req, runtime), new $_model.PutMeasureDataResponse({}));
  }

  /**
   * @param request - PutMeasureDataRequest
   * @returns PutMeasureDataResponse
   */
  async putMeasureData(request: $_model.PutMeasureDataRequest): Promise<$_model.PutMeasureDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMeasureDataWithOptions(request, runtime);
  }

  /**
   * @param request - PutMeasureReadyFlagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMeasureReadyFlagResponse
   */
  async putMeasureReadyFlagWithOptions(request: $_model.PutMeasureReadyFlagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMeasureReadyFlagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.dataType)) {
      query["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.readyFlag)) {
      query["ReadyFlag"] = request.readyFlag;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMeasureReadyFlag",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMeasureReadyFlagResponse>(await this.callApi(params, req, runtime), new $_model.PutMeasureReadyFlagResponse({}));
  }

  /**
   * @param request - PutMeasureReadyFlagRequest
   * @returns PutMeasureReadyFlagResponse
   */
  async putMeasureReadyFlag(request: $_model.PutMeasureReadyFlagRequest): Promise<$_model.PutMeasureReadyFlagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMeasureReadyFlagWithOptions(request, runtime);
  }

  /**
   * 获取玄坛合作伙伴双呼时可用外呼号码
   * 
   * @param request - QueryAvailableNumbersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableNumbersResponse
   */
  async queryAvailableNumbersWithOptions(request: $_model.QueryAvailableNumbersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvailableNumbersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvailableNumbers",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvailableNumbersResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvailableNumbersResponse({}));
  }

  /**
   * 获取玄坛合作伙伴双呼时可用外呼号码
   * 
   * @param request - QueryAvailableNumbersRequest
   * @returns QueryAvailableNumbersResponse
   */
  async queryAvailableNumbers(request: $_model.QueryAvailableNumbersRequest): Promise<$_model.QueryAvailableNumbersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAvailableNumbersWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBagRemainingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBagRemainingResponse
   */
  async queryBagRemainingWithOptions(request: $_model.QueryBagRemainingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBagRemainingResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBagRemaining",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBagRemainingResponse>(await this.callApi(params, req, runtime), new $_model.QueryBagRemainingResponse({}));
  }

  /**
   * @param request - QueryBagRemainingRequest
   * @returns QueryBagRemainingResponse
   */
  async queryBagRemaining(request: $_model.QueryBagRemainingRequest): Promise<$_model.QueryBagRemainingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBagRemainingWithOptions(request, runtime);
  }

  /**
   * 查询玄坛外呼语音文件
   * 
   * @param request - QueryCallRecordListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallRecordListResponse
   */
  async queryCallRecordListWithOptions(request: $_model.QueryCallRecordListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallRecordListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.skillType)) {
      query["SkillType"] = request.skillType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallRecordList",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallRecordListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallRecordListResponse({}));
  }

  /**
   * 查询玄坛外呼语音文件
   * 
   * @param request - QueryCallRecordListRequest
   * @returns QueryCallRecordListResponse
   */
  async queryCallRecordList(request: $_model.QueryCallRecordListRequest): Promise<$_model.QueryCallRecordListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallRecordListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceResponse
   */
  async queryInstanceWithOptions(request: $_model.QueryInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstance",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceResponse({}));
  }

  /**
   * @param request - QueryInstanceRequest
   * @returns QueryInstanceResponse
   */
  async queryInstance(request: $_model.QueryInstanceRequest): Promise<$_model.QueryInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceWithOptions(request, runtime);
  }

  /**
   * QueryPartnerIntentionList
   * 
   * @param request - QueryPartnerIntentionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPartnerIntentionListResponse
   */
  async queryPartnerIntentionListWithOptions(request: $_model.QueryPartnerIntentionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPartnerIntentionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPartnerIntentionList",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPartnerIntentionListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPartnerIntentionListResponse({}));
  }

  /**
   * QueryPartnerIntentionList
   * 
   * @param request - QueryPartnerIntentionListRequest
   * @returns QueryPartnerIntentionListResponse
   */
  async queryPartnerIntentionList(request: $_model.QueryPartnerIntentionListRequest): Promise<$_model.QueryPartnerIntentionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPartnerIntentionListWithOptions(request, runtime);
  }

  /**
   * QueryPartnerProduceList
   * 
   * @param request - QueryPartnerProduceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPartnerProduceListResponse
   */
  async queryPartnerProduceListWithOptions(request: $_model.QueryPartnerProduceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPartnerProduceListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPartnerProduceList",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPartnerProduceListResponse>(await this.callApi(params, req, runtime), new $_model.QueryPartnerProduceListResponse({}));
  }

  /**
   * QueryPartnerProduceList
   * 
   * @param request - QueryPartnerProduceListRequest
   * @returns QueryPartnerProduceListResponse
   */
  async queryPartnerProduceList(request: $_model.QueryPartnerProduceListRequest): Promise<$_model.QueryPartnerProduceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPartnerProduceListWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUserNeedAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUserNeedAuthResponse
   */
  async queryUserNeedAuthWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryUserNeedAuthResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryUserNeedAuth",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUserNeedAuthResponse>(await this.callApi(params, req, runtime), new $_model.QueryUserNeedAuthResponse({}));
  }

  /**
   * @returns QueryUserNeedAuthResponse
   */
  async queryUserNeedAuth(): Promise<$_model.QueryUserNeedAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUserNeedAuthWithOptions(runtime);
  }

  /**
   * 服务商玄坛外呼呼叫中心事件回传
   * 
   * @param request - RecordCallCenterEventForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordCallCenterEventForPartnerResponse
   */
  async recordCallCenterEventForPartnerWithOptions(request: $_model.RecordCallCenterEventForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordCallCenterEventForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callAction)) {
      query["CallAction"] = request.callAction;
    }

    if (!$dara.isNull(request.callee)) {
      query["Callee"] = request.callee;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.connId)) {
      query["ConnId"] = request.connId;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.relatedId)) {
      query["RelatedId"] = request.relatedId;
    }

    if (!$dara.isNull(request.secretMobile)) {
      query["SecretMobile"] = request.secretMobile;
    }

    if (!$dara.isNull(request.skillType)) {
      query["SkillType"] = request.skillType;
    }

    if (!$dara.isNull(request.tenantId)) {
      query["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordCallCenterEventForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordCallCenterEventForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.RecordCallCenterEventForPartnerResponse({}));
  }

  /**
   * 服务商玄坛外呼呼叫中心事件回传
   * 
   * @param request - RecordCallCenterEventForPartnerRequest
   * @returns RecordCallCenterEventForPartnerResponse
   */
  async recordCallCenterEventForPartner(request: $_model.RecordCallCenterEventForPartnerRequest): Promise<$_model.RecordCallCenterEventForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordCallCenterEventForPartnerWithOptions(request, runtime);
  }

  /**
   * RecordPostBack
   * 
   * @param request - RecordPostBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordPostBackResponse
   */
  async recordPostBackWithOptions(request: $_model.RecordPostBackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordPostBackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["bizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["bizType"] = request.bizType;
    }

    if (!$dara.isNull(request.contactor)) {
      query["contactor"] = request.contactor;
    }

    if (!$dara.isNull(request.content)) {
      query["content"] = request.content;
    }

    if (!$dara.isNull(request.entityKey)) {
      query["entityKey"] = request.entityKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordPostBack",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordPostBackResponse>(await this.callApi(params, req, runtime), new $_model.RecordPostBackResponse({}));
  }

  /**
   * RecordPostBack
   * 
   * @param request - RecordPostBackRequest
   * @returns RecordPostBackResponse
   */
  async recordPostBack(request: $_model.RecordPostBackRequest): Promise<$_model.RecordPostBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordPostBackWithOptions(request, runtime);
  }

  /**
   * @param request - RejectSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectSolutionResponse
   */
  async rejectSolutionWithOptions(request: $_model.RejectSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.solutionBizId)) {
      query["SolutionBizId"] = request.solutionBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectSolutionResponse>(await this.callApi(params, req, runtime), new $_model.RejectSolutionResponse({}));
  }

  /**
   * @param request - RejectSolutionRequest
   * @returns RejectSolutionResponse
   */
  async rejectSolution(request: $_model.RejectSolutionRequest): Promise<$_model.RejectSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectSolutionWithOptions(request, runtime);
  }

  /**
   * @param request - RejectUserSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RejectUserSolutionResponse
   */
  async rejectUserSolutionWithOptions(request: $_model.RejectUserSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RejectUserSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    if (!$dara.isNull(request.solutionBizId)) {
      query["SolutionBizId"] = request.solutionBizId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RejectUserSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RejectUserSolutionResponse>(await this.callApi(params, req, runtime), new $_model.RejectUserSolutionResponse({}));
  }

  /**
   * @param request - RejectUserSolutionRequest
   * @returns RejectUserSolutionResponse
   */
  async rejectUserSolution(request: $_model.RejectUserSolutionRequest): Promise<$_model.RejectUserSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rejectUserSolutionWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseProduceAuthorizationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseProduceAuthorizationResponse
   */
  async releaseProduceAuthorizationWithOptions(request: $_model.ReleaseProduceAuthorizationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseProduceAuthorizationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authorizedUserId)) {
      body["AuthorizedUserId"] = request.authorizedUserId;
    }

    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseProduceAuthorization",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseProduceAuthorizationResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseProduceAuthorizationResponse({}));
  }

  /**
   * @param request - ReleaseProduceAuthorizationRequest
   * @returns ReleaseProduceAuthorizationResponse
   */
  async releaseProduceAuthorization(request: $_model.ReleaseProduceAuthorizationRequest): Promise<$_model.ReleaseProduceAuthorizationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseProduceAuthorizationWithOptions(request, runtime);
  }

  /**
   * 玄坛双呼外呼发起
   * 
   * @param request - StartBackToBackCallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBackToBackCallResponse
   */
  async startBackToBackCallWithOptions(request: $_model.StartBackToBackCallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartBackToBackCallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callCenterNumber)) {
      query["CallCenterNumber"] = request.callCenterNumber;
    }

    if (!$dara.isNull(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!$dara.isNull(request.mobileKey)) {
      query["MobileKey"] = request.mobileKey;
    }

    if (!$dara.isNull(request.skillType)) {
      query["SkillType"] = request.skillType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBackToBackCall",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartBackToBackCallResponse>(await this.callApi(params, req, runtime), new $_model.StartBackToBackCallResponse({}));
  }

  /**
   * 玄坛双呼外呼发起
   * 
   * @param request - StartBackToBackCallRequest
   * @returns StartBackToBackCallResponse
   */
  async startBackToBackCall(request: $_model.StartBackToBackCallRequest): Promise<$_model.StartBackToBackCallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startBackToBackCallWithOptions(request, runtime);
  }

  /**
   * 合作伙伴提交需求单
   * 
   * @param request - SubmitIntentionForPartnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIntentionForPartnerResponse
   */
  async submitIntentionForPartnerWithOptions(request: $_model.SubmitIntentionForPartnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIntentionForPartnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.area)) {
      query["Area"] = request.area;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.commodityType)) {
      query["CommodityType"] = request.commodityType;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.extInfo)) {
      query["ExtInfo"] = request.extInfo;
    }

    if (!$dara.isNull(request.grade)) {
      query["Grade"] = request.grade;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIntentionForPartner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIntentionForPartnerResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIntentionForPartnerResponse({}));
  }

  /**
   * 合作伙伴提交需求单
   * 
   * @param request - SubmitIntentionForPartnerRequest
   * @returns SubmitIntentionForPartnerResponse
   */
  async submitIntentionForPartner(request: $_model.SubmitIntentionForPartnerRequest): Promise<$_model.SubmitIntentionForPartnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIntentionForPartnerWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitIntentionNoteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitIntentionNoteResponse
   */
  async submitIntentionNoteWithOptions(request: $_model.SubmitIntentionNoteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitIntentionNoteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.note)) {
      query["Note"] = request.note;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitIntentionNote",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitIntentionNoteResponse>(await this.callApi(params, req, runtime), new $_model.SubmitIntentionNoteResponse({}));
  }

  /**
   * @param request - SubmitIntentionNoteRequest
   * @returns SubmitIntentionNoteResponse
   */
  async submitIntentionNote(request: $_model.SubmitIntentionNoteRequest): Promise<$_model.SubmitIntentionNoteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitIntentionNoteWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSolutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSolutionResponse
   */
  async submitSolutionWithOptions(request: $_model.SubmitSolutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSolutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.intentionBizId)) {
      query["IntentionBizId"] = request.intentionBizId;
    }

    if (!$dara.isNull(request.operateType)) {
      query["OperateType"] = request.operateType;
    }

    if (!$dara.isNull(request.solution)) {
      query["Solution"] = request.solution;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSolution",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSolutionResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSolutionResponse({}));
  }

  /**
   * @param request - SubmitSolutionRequest
   * @returns SubmitSolutionResponse
   */
  async submitSolution(request: $_model.SubmitSolutionRequest): Promise<$_model.SubmitSolutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSolutionWithOptions(request, runtime);
  }

  /**
   * 玄坛需求单转派小二
   * 
   * @param request - TransferIntentionOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferIntentionOwnerResponse
   */
  async transferIntentionOwnerWithOptions(request: $_model.TransferIntentionOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferIntentionOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferIntentionOwner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferIntentionOwnerResponse>(await this.callApi(params, req, runtime), new $_model.TransferIntentionOwnerResponse({}));
  }

  /**
   * 玄坛需求单转派小二
   * 
   * @param request - TransferIntentionOwnerRequest
   * @returns TransferIntentionOwnerResponse
   */
  async transferIntentionOwner(request: $_model.TransferIntentionOwnerRequest): Promise<$_model.TransferIntentionOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferIntentionOwnerWithOptions(request, runtime);
  }

  /**
   * 玄坛服务单转派小二
   * 
   * @param request - TransferProduceOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferProduceOwnerResponse
   */
  async transferProduceOwnerWithOptions(request: $_model.TransferProduceOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransferProduceOwnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.employeeCode)) {
      query["EmployeeCode"] = request.employeeCode;
    }

    if (!$dara.isNull(request.personId)) {
      query["PersonId"] = request.personId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferProduceOwner",
      version: "2020-03-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferProduceOwnerResponse>(await this.callApi(params, req, runtime), new $_model.TransferProduceOwnerResponse({}));
  }

  /**
   * 玄坛服务单转派小二
   * 
   * @param request - TransferProduceOwnerRequest
   * @returns TransferProduceOwnerResponse
   */
  async transferProduceOwner(request: $_model.TransferProduceOwnerRequest): Promise<$_model.TransferProduceOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transferProduceOwnerWithOptions(request, runtime);
  }

}
