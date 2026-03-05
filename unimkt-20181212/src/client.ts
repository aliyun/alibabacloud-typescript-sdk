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
      'cn-hangzhou': "cloudcode.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "cloudcode.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("unimkt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * CreateProxyBrandUser
   * 
   * @param request - CreateProxyBrandUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProxyBrandUserResponse
   */
  async createProxyBrandUserWithOptions(request: $_model.CreateProxyBrandUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProxyBrandUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandUserNick)) {
      query["BrandUserNick"] = request.brandUserNick;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.company)) {
      query["Company"] = request.company;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.contactPhone)) {
      query["ContactPhone"] = request.contactPhone;
    }

    if (!$dara.isNull(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProxyBrandUser",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProxyBrandUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateProxyBrandUserResponse({}));
  }

  /**
   * CreateProxyBrandUser
   * 
   * @param request - CreateProxyBrandUserRequest
   * @returns CreateProxyBrandUserResponse
   */
  async createProxyBrandUser(request: $_model.CreateProxyBrandUserRequest): Promise<$_model.CreateProxyBrandUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProxyBrandUserWithOptions(request, runtime);
  }

  /**
   * CreateUnionTask
   * 
   * @param tmpReq - CreateUnionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUnionTaskResponse
   */
  async createUnionTaskWithOptions(tmpReq: $_model.CreateUnionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUnionTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateUnionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.mediaIdBlackList)) {
      request.mediaIdBlackListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mediaIdBlackList, "MediaIdBlackList", "json");
    }

    if (!$dara.isNull(tmpReq.mediaIdWhiteList)) {
      request.mediaIdWhiteListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mediaIdWhiteList, "MediaIdWhiteList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.anchorId)) {
      query["AnchorId"] = request.anchorId;
    }

    if (!$dara.isNull(request.brandUserId)) {
      query["BrandUserId"] = request.brandUserId;
    }

    if (!$dara.isNull(request.brandUserNick)) {
      query["BrandUserNick"] = request.brandUserNick;
    }

    if (!$dara.isNull(request.channel)) {
      query["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.chargePloy)) {
      query["ChargePloy"] = request.chargePloy;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.contentId)) {
      query["ContentId"] = request.contentId;
    }

    if (!$dara.isNull(request.contentUrl)) {
      query["ContentUrl"] = request.contentUrl;
    }

    if (!$dara.isNull(request.customCreativeType)) {
      query["CustomCreativeType"] = request.customCreativeType;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.industryLabelBagId)) {
      query["IndustryLabelBagId"] = request.industryLabelBagId;
    }

    if (!$dara.isNull(request.mediaIdBlackListShrink)) {
      query["MediaIdBlackList"] = request.mediaIdBlackListShrink;
    }

    if (!$dara.isNull(request.mediaIdWhiteListShrink)) {
      query["MediaIdWhiteList"] = request.mediaIdWhiteListShrink;
    }

    if (!$dara.isNull(request.mediaIndustry)) {
      query["MediaIndustry"] = request.mediaIndustry;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.optimizationSwitch)) {
      query["OptimizationSwitch"] = request.optimizationSwitch;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    if (!$dara.isNull(request.quotaDay)) {
      query["QuotaDay"] = request.quotaDay;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskBizType)) {
      query["TaskBizType"] = request.taskBizType;
    }

    if (!$dara.isNull(request.taskRuleType)) {
      query["TaskRuleType"] = request.taskRuleType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUnionTask",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUnionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateUnionTaskResponse({}));
  }

  /**
   * CreateUnionTask
   * 
   * @param request - CreateUnionTaskRequest
   * @returns CreateUnionTaskResponse
   */
  async createUnionTask(request: $_model.CreateUnionTaskRequest): Promise<$_model.CreateUnionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUnionTaskWithOptions(request, runtime);
  }

  /**
   * 删除聚合拉新品牌
   * 
   * @param request - DeleteUnionBrandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUnionBrandResponse
   */
  async deleteUnionBrandWithOptions(request: $_model.DeleteUnionBrandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUnionBrandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandMainId)) {
      query["BrandMainId"] = request.brandMainId;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUnionBrand",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUnionBrandResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUnionBrandResponse({}));
  }

  /**
   * 删除聚合拉新品牌
   * 
   * @param request - DeleteUnionBrandRequest
   * @returns DeleteUnionBrandResponse
   */
  async deleteUnionBrand(request: $_model.DeleteUnionBrandRequest): Promise<$_model.DeleteUnionBrandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUnionBrandWithOptions(request, runtime);
  }

  /**
   * EndUnionTask
   * 
   * @param request - EndUnionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EndUnionTaskResponse
   */
  async endUnionTaskWithOptions(request: $_model.EndUnionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EndUnionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EndUnionTask",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EndUnionTaskResponse>(await this.callApi(params, req, runtime), new $_model.EndUnionTaskResponse({}));
  }

  /**
   * EndUnionTask
   * 
   * @param request - EndUnionTaskRequest
   * @returns EndUnionTaskResponse
   */
  async endUnionTask(request: $_model.EndUnionTaskRequest): Promise<$_model.EndUnionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.endUnionTaskWithOptions(request, runtime);
  }

  /**
   * 聚合拉新开放接口查询媒体行业
   * 
   * @param request - ListUnionMediaIndustryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUnionMediaIndustryResponse
   */
  async listUnionMediaIndustryWithOptions(request: $_model.ListUnionMediaIndustryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUnionMediaIndustryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUnionMediaIndustry",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUnionMediaIndustryResponse>(await this.callApi(params, req, runtime), new $_model.ListUnionMediaIndustryResponse({}));
  }

  /**
   * 聚合拉新开放接口查询媒体行业
   * 
   * @param request - ListUnionMediaIndustryRequest
   * @returns ListUnionMediaIndustryResponse
   */
  async listUnionMediaIndustry(request: $_model.ListUnionMediaIndustryRequest): Promise<$_model.ListUnionMediaIndustryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUnionMediaIndustryWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAvailableBalanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailableBalanceResponse
   */
  async queryAvailableBalanceWithOptions(request: $_model.QueryAvailableBalanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvailableBalanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAvailableBalance",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvailableBalanceResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvailableBalanceResponse({}));
  }

  /**
   * @param request - QueryAvailableBalanceRequest
   * @returns QueryAvailableBalanceResponse
   */
  async queryAvailableBalance(request: $_model.QueryAvailableBalanceRequest): Promise<$_model.QueryAvailableBalanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAvailableBalanceWithOptions(request, runtime);
  }

  /**
   * QueryContentList
   * 
   * @param request - QueryContentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryContentListResponse
   */
  async queryContentListWithOptions(request: $_model.QueryContentListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryContentListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandUserId)) {
      query["BrandUserId"] = request.brandUserId;
    }

    if (!$dara.isNull(request.brandUserNick)) {
      query["BrandUserNick"] = request.brandUserNick;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.taskBizType)) {
      query["TaskBizType"] = request.taskBizType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryContentList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryContentListResponse>(await this.callApi(params, req, runtime), new $_model.QueryContentListResponse({}));
  }

  /**
   * QueryContentList
   * 
   * @param request - QueryContentListRequest
   * @returns QueryContentListResponse
   */
  async queryContentList(request: $_model.QueryContentListRequest): Promise<$_model.QueryContentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryContentListWithOptions(request, runtime);
  }

  /**
   * 获取行业标签包
   * 
   * @param request - QueryIndustryLabelBagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryIndustryLabelBagResponse
   */
  async queryIndustryLabelBagWithOptions(request: $_model.QueryIndustryLabelBagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryIndustryLabelBagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryIndustryLabelBag",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryIndustryLabelBagResponse>(await this.callApi(params, req, runtime), new $_model.QueryIndustryLabelBagResponse({}));
  }

  /**
   * 获取行业标签包
   * 
   * @param request - QueryIndustryLabelBagRequest
   * @returns QueryIndustryLabelBagResponse
   */
  async queryIndustryLabelBag(request: $_model.QueryIndustryLabelBagRequest): Promise<$_model.QueryIndustryLabelBagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryIndustryLabelBagWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskBizTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskBizTypeResponse
   */
  async queryTaskBizTypeWithOptions(request: $_model.QueryTaskBizTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskBizTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskBizType",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskBizTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskBizTypeResponse({}));
  }

  /**
   * @param request - QueryTaskBizTypeRequest
   * @returns QueryTaskBizTypeResponse
   */
  async queryTaskBizType(request: $_model.QueryTaskBizTypeRequest): Promise<$_model.QueryTaskBizTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskBizTypeWithOptions(request, runtime);
  }

  /**
   * QueryTaskRuleLimit
   * 
   * @param request - QueryTaskRuleLimitRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskRuleLimitResponse
   */
  async queryTaskRuleLimitWithOptions(request: $_model.QueryTaskRuleLimitRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskRuleLimitResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskRuleLimit",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskRuleLimitResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskRuleLimitResponse({}));
  }

  /**
   * QueryTaskRuleLimit
   * 
   * @param request - QueryTaskRuleLimitRequest
   * @returns QueryTaskRuleLimitResponse
   */
  async queryTaskRuleLimit(request: $_model.QueryTaskRuleLimitRequest): Promise<$_model.QueryTaskRuleLimitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskRuleLimitWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUnionChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUnionChannelResponse
   */
  async queryUnionChannelWithOptions(request: $_model.QueryUnionChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUnionChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUnionChannel",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUnionChannelResponse>(await this.callApi(params, req, runtime), new $_model.QueryUnionChannelResponse({}));
  }

  /**
   * @param request - QueryUnionChannelRequest
   * @returns QueryUnionChannelResponse
   */
  async queryUnionChannel(request: $_model.QueryUnionChannelRequest): Promise<$_model.QueryUnionChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUnionChannelWithOptions(request, runtime);
  }

  /**
   * QueryUnionContentInfo
   * 
   * @param request - QueryUnionContentInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUnionContentInfoResponse
   */
  async queryUnionContentInfoWithOptions(request: $_model.QueryUnionContentInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUnionContentInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.contentId)) {
      query["ContentId"] = request.contentId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUnionContentInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUnionContentInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryUnionContentInfoResponse({}));
  }

  /**
   * QueryUnionContentInfo
   * 
   * @param request - QueryUnionContentInfoRequest
   * @returns QueryUnionContentInfoResponse
   */
  async queryUnionContentInfo(request: $_model.QueryUnionContentInfoRequest): Promise<$_model.QueryUnionContentInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUnionContentInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUnionTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUnionTaskInfoResponse
   */
  async queryUnionTaskInfoWithOptions(request: $_model.QueryUnionTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUnionTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUnionTaskInfo",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUnionTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryUnionTaskInfoResponse({}));
  }

  /**
   * @param request - QueryUnionTaskInfoRequest
   * @returns QueryUnionTaskInfoResponse
   */
  async queryUnionTaskInfo(request: $_model.QueryUnionTaskInfoRequest): Promise<$_model.QueryUnionTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUnionTaskInfoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryUnionTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryUnionTaskListResponse
   */
  async queryUnionTaskListWithOptions(request: $_model.QueryUnionTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryUnionTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.brandUserId)) {
      query["BrandUserId"] = request.brandUserId;
    }

    if (!$dara.isNull(request.brandUserNick)) {
      query["BrandUserNick"] = request.brandUserNick;
    }

    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryUnionTaskList",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryUnionTaskListResponse>(await this.callApi(params, req, runtime), new $_model.QueryUnionTaskListResponse({}));
  }

  /**
   * @param request - QueryUnionTaskListRequest
   * @returns QueryUnionTaskListResponse
   */
  async queryUnionTaskList(request: $_model.QueryUnionTaskListRequest): Promise<$_model.QueryUnionTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryUnionTaskListWithOptions(request, runtime);
  }

  /**
   * 开启聚合拉新计划
   * 
   * @param request - StartUnionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartUnionTaskResponse
   */
  async startUnionTaskWithOptions(request: $_model.StartUnionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartUnionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartUnionTask",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartUnionTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartUnionTaskResponse({}));
  }

  /**
   * 开启聚合拉新计划
   * 
   * @param request - StartUnionTaskRequest
   * @returns StartUnionTaskResponse
   */
  async startUnionTask(request: $_model.StartUnionTaskRequest): Promise<$_model.StartUnionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startUnionTaskWithOptions(request, runtime);
  }

  /**
   * 暂停聚合拉新计划
   * 
   * @param request - StopUnionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopUnionTaskResponse
   */
  async stopUnionTaskWithOptions(request: $_model.StopUnionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopUnionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopUnionTask",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopUnionTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopUnionTaskResponse({}));
  }

  /**
   * 暂停聚合拉新计划
   * 
   * @param request - StopUnionTaskRequest
   * @returns StopUnionTaskResponse
   */
  async stopUnionTask(request: $_model.StopUnionTaskRequest): Promise<$_model.StopUnionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopUnionTaskWithOptions(request, runtime);
  }

  /**
   * 聚合拉新对外接口更新计划
   * 
   * @param request - UpdateUnionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUnionTaskResponse
   */
  async updateUnionTaskWithOptions(request: $_model.UpdateUnionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUnionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.channelId)) {
      query["ChannelId"] = request.channelId;
    }

    if (!$dara.isNull(request.chargePloy)) {
      query["ChargePloy"] = request.chargePloy;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.optimizationSwitch)) {
      query["OptimizationSwitch"] = request.optimizationSwitch;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.quota)) {
      query["Quota"] = request.quota;
    }

    if (!$dara.isNull(request.quotaDay)) {
      query["QuotaDay"] = request.quotaDay;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUnionTask",
      version: "2018-12-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUnionTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUnionTaskResponse({}));
  }

  /**
   * 聚合拉新对外接口更新计划
   * 
   * @param request - UpdateUnionTaskRequest
   * @returns UpdateUnionTaskResponse
   */
  async updateUnionTask(request: $_model.UpdateUnionTaskRequest): Promise<$_model.UpdateUnionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUnionTaskWithOptions(request, runtime);
  }

}
