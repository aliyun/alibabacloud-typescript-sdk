// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yundun-dbaudit", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 配置实例网络
   * 
   * @param request - ConfigInstanceNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigInstanceNetworkResponse
   */
  async configInstanceNetworkWithOptions(request: $_model.ConfigInstanceNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigInstanceNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.privateWhiteList)) {
      query["PrivateWhiteList"] = request.privateWhiteList;
    }

    if (!$dara.isNull(request.publicAccessControl)) {
      query["PublicAccessControl"] = request.publicAccessControl;
    }

    if (!$dara.isNull(request.publicWhiteList)) {
      query["PublicWhiteList"] = request.publicWhiteList;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfigInstanceNetwork",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigInstanceNetworkResponse>(await this.callApi(params, req, runtime), new $_model.ConfigInstanceNetworkResponse({}));
  }

  /**
   * 配置实例网络
   * 
   * @param request - ConfigInstanceNetworkRequest
   * @returns ConfigInstanceNetworkResponse
   */
  async configInstanceNetwork(request: $_model.ConfigInstanceNetworkRequest): Promise<$_model.ConfigInstanceNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configInstanceNetworkWithOptions(request, runtime);
  }

  /**
   * 获取实例属性
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttributeWithOptions(request: $_model.DescribeInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAttribute",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAttributeResponse({}));
  }

  /**
   * 获取实例属性
   * 
   * @param request - DescribeInstanceAttributeRequest
   * @returns DescribeInstanceAttributeResponse
   */
  async describeInstanceAttribute(request: $_model.DescribeInstanceAttributeRequest): Promise<$_model.DescribeInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: $_model.DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstancesResponse({}));
  }

  /**
   * 获取实例列表
   * 
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: $_model.DescribeInstancesRequest): Promise<$_model.DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * 获取登录凭据
   * 
   * @param request - DescribeLoginTicketRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoginTicketResponse
   */
  async describeLoginTicketWithOptions(request: $_model.DescribeLoginTicketRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoginTicketResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoginTicket",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoginTicketResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoginTicketResponse({}));
  }

  /**
   * 获取登录凭据
   * 
   * @param request - DescribeLoginTicketRequest
   * @returns DescribeLoginTicketResponse
   */
  async describeLoginTicket(request: $_model.DescribeLoginTicketRequest): Promise<$_model.DescribeLoginTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoginTicketWithOptions(request, runtime);
  }

  /**
   * 获取同步信息
   * 
   * @param request - DescribeSyncInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncInfoResponse
   */
  async describeSyncInfoWithOptions(request: $_model.DescribeSyncInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncInfo",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncInfoResponse({}));
  }

  /**
   * 获取同步信息
   * 
   * @param request - DescribeSyncInfoRequest
   * @returns DescribeSyncInfoResponse
   */
  async describeSyncInfo(request: $_model.DescribeSyncInfoRequest): Promise<$_model.DescribeSyncInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncInfoWithOptions(request, runtime);
  }

  /**
   * 获取Agent列表
   * 
   * @param request - GetAgentListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentListResponse
   */
  async getAgentListWithOptions(request: $_model.GetAgentListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentIp)) {
      query["AgentIp"] = request.agentIp;
    }

    if (!$dara.isNull(request.agentOs)) {
      query["AgentOs"] = request.agentOs;
    }

    if (!$dara.isNull(request.agentStatus)) {
      query["AgentStatus"] = request.agentStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentList",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentListResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentListResponse({}));
  }

  /**
   * 获取Agent列表
   * 
   * @param request - GetAgentListRequest
   * @returns GetAgentListResponse
   */
  async getAgentList(request: $_model.GetAgentListRequest): Promise<$_model.GetAgentListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentListWithOptions(request, runtime);
  }

  /**
   * 查询审计统计数
   * 
   * @param request - GetAuditCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditCountResponse
   */
  async getAuditCountWithOptions(request: $_model.GetAuditCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditCount",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditCountResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditCountResponse({}));
  }

  /**
   * 查询审计统计数
   * 
   * @param request - GetAuditCountRequest
   * @returns GetAuditCountResponse
   */
  async getAuditCount(request: $_model.GetAuditCountRequest): Promise<$_model.GetAuditCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditCountWithOptions(request, runtime);
  }

  /**
   * 按时间分布查询审计统计数
   * 
   * @param request - GetAuditCountDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuditCountDistributionResponse
   */
  async getAuditCountDistributionWithOptions(request: $_model.GetAuditCountDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuditCountDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuditCountDistribution",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuditCountDistributionResponse>(await this.callApi(params, req, runtime), new $_model.GetAuditCountDistributionResponse({}));
  }

  /**
   * 按时间分布查询审计统计数
   * 
   * @param request - GetAuditCountDistributionRequest
   * @returns GetAuditCountDistributionResponse
   */
  async getAuditCountDistribution(request: $_model.GetAuditCountDistributionRequest): Promise<$_model.GetAuditCountDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuditCountDistributionWithOptions(request, runtime);
  }

  /**
   * 按数据源分组查询审计统计数
   * 
   * @param request - GetDBAuditCountListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDBAuditCountListResponse
   */
  async getDBAuditCountListWithOptions(request: $_model.GetDBAuditCountListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDBAuditCountListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDBAuditCountList",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDBAuditCountListResponse>(await this.callApi(params, req, runtime), new $_model.GetDBAuditCountListResponse({}));
  }

  /**
   * 按数据源分组查询审计统计数
   * 
   * @param request - GetDBAuditCountListRequest
   * @returns GetDBAuditCountListResponse
   */
  async getDBAuditCountList(request: $_model.GetDBAuditCountListRequest): Promise<$_model.GetDBAuditCountListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDBAuditCountListWithOptions(request, runtime);
  }

  /**
   * 获取单条语句详细信息
   * 
   * @param request - GetLogDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogDetailResponse
   */
  async getLogDetailWithOptions(request: $_model.GetLogDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogDetail",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetLogDetailResponse({}));
  }

  /**
   * 获取单条语句详细信息
   * 
   * @param request - GetLogDetailRequest
   * @returns GetLogDetailResponse
   */
  async getLogDetail(request: $_model.GetLogDetailRequest): Promise<$_model.GetLogDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogDetailWithOptions(request, runtime);
  }

  /**
   * 获取语句详情列表
   * 
   * @param request - GetLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogListResponse
   */
  async getLogListWithOptions(request: $_model.GetLogListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.clientIpList)) {
      query["ClientIpList"] = request.clientIpList;
    }

    if (!$dara.isNull(request.clientProgramList)) {
      query["ClientProgramList"] = request.clientProgramList;
    }

    if (!$dara.isNull(request.dbHostList)) {
      query["DbHostList"] = request.dbHostList;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbUserList)) {
      query["DbUserList"] = request.dbUserList;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.isSuccess)) {
      query["IsSuccess"] = request.isSuccess;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxAffectRows)) {
      query["MaxAffectRows"] = request.maxAffectRows;
    }

    if (!$dara.isNull(request.maxExecCostUS)) {
      query["MaxExecCostUS"] = request.maxExecCostUS;
    }

    if (!$dara.isNull(request.minAffectRows)) {
      query["MinAffectRows"] = request.minAffectRows;
    }

    if (!$dara.isNull(request.minExecCostUS)) {
      query["MinExecCostUS"] = request.minExecCostUS;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.riskLevelList)) {
      query["RiskLevelList"] = request.riskLevelList;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleTypeList)) {
      query["RuleTypeList"] = request.ruleTypeList;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sqlId)) {
      query["SqlId"] = request.sqlId;
    }

    if (!$dara.isNull(request.sqlKey)) {
      query["SqlKey"] = request.sqlKey;
    }

    if (!$dara.isNull(request.sqlTypeList)) {
      query["SqlTypeList"] = request.sqlTypeList;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogList",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogListResponse>(await this.callApi(params, req, runtime), new $_model.GetLogListResponse({}));
  }

  /**
   * 获取语句详情列表
   * 
   * @param request - GetLogListRequest
   * @returns GetLogListResponse
   */
  async getLogList(request: $_model.GetLogListRequest): Promise<$_model.GetLogListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogListWithOptions(request, runtime);
  }

  /**
   * 获取语句类型分布信息
   * 
   * @param request - GetLogTypeDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogTypeDistributionResponse
   */
  async getLogTypeDistributionWithOptions(request: $_model.GetLogTypeDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogTypeDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogTypeDistribution",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogTypeDistributionResponse>(await this.callApi(params, req, runtime), new $_model.GetLogTypeDistributionResponse({}));
  }

  /**
   * 获取语句类型分布信息
   * 
   * @param request - GetLogTypeDistributionRequest
   * @returns GetLogTypeDistributionResponse
   */
  async getLogTypeDistribution(request: $_model.GetLogTypeDistributionRequest): Promise<$_model.GetLogTypeDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogTypeDistributionWithOptions(request, runtime);
  }

  /**
   * 获取风险级别分布情况
   * 
   * @param request - GetRiskLevelDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRiskLevelDistributionResponse
   */
  async getRiskLevelDistributionWithOptions(request: $_model.GetRiskLevelDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRiskLevelDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRiskLevelDistribution",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRiskLevelDistributionResponse>(await this.callApi(params, req, runtime), new $_model.GetRiskLevelDistributionResponse({}));
  }

  /**
   * 获取风险级别分布情况
   * 
   * @param request - GetRiskLevelDistributionRequest
   * @returns GetRiskLevelDistributionResponse
   */
  async getRiskLevelDistribution(request: $_model.GetRiskLevelDistributionRequest): Promise<$_model.GetRiskLevelDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRiskLevelDistributionWithOptions(request, runtime);
  }

  /**
   * 获取会话分布情况
   * 
   * @param request - GetSessionDistributionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionDistributionResponse
   */
  async getSessionDistributionWithOptions(request: $_model.GetSessionDistributionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionDistributionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSessionDistribution",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionDistributionResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionDistributionResponse({}));
  }

  /**
   * 获取会话分布情况
   * 
   * @param request - GetSessionDistributionRequest
   * @returns GetSessionDistributionResponse
   */
  async getSessionDistribution(request: $_model.GetSessionDistributionRequest): Promise<$_model.GetSessionDistributionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSessionDistributionWithOptions(request, runtime);
  }

  /**
   * 获取指定日期会话列表
   * 
   * @param request - GetSessionListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionListResponse
   */
  async getSessionListWithOptions(request: $_model.GetSessionListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionList)) {
      query["ActionList"] = request.actionList;
    }

    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.clientIpList)) {
      query["ClientIpList"] = request.clientIpList;
    }

    if (!$dara.isNull(request.clientProgramList)) {
      query["ClientProgramList"] = request.clientProgramList;
    }

    if (!$dara.isNull(request.dbHostList)) {
      query["DbHostList"] = request.dbHostList;
    }

    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.dbUserList)) {
      query["DbUserList"] = request.dbUserList;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSessionList",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionListResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionListResponse({}));
  }

  /**
   * 获取指定日期会话列表
   * 
   * @param request - GetSessionListRequest
   * @returns GetSessionListResponse
   */
  async getSessionList(request: $_model.GetSessionListRequest): Promise<$_model.GetSessionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSessionListWithOptions(request, runtime);
  }

  /**
   * 获取数据源审计属性
   * 
   * @param request - ListDataSourceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceAttributeResponse
   */
  async listDataSourceAttributeWithOptions(request: $_model.ListDataSourceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbIds)) {
      query["DbIds"] = request.dbIds;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceAttribute",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceAttributeResponse({}));
  }

  /**
   * 获取数据源审计属性
   * 
   * @param request - ListDataSourceAttributeRequest
   * @returns ListDataSourceAttributeResponse
   */
  async listDataSourceAttribute(request: $_model.ListDataSourceAttributeRequest): Promise<$_model.ListDataSourceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询数据源列表
   * 
   * @param request - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(request: $_model.ListDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbId)) {
      query["DbId"] = request.dbId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * 查询数据源列表
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * 查询系统告警
   * 
   * @param request - ListSystemAlarmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemAlarmsResponse
   */
  async listSystemAlarmsWithOptions(request: $_model.ListSystemAlarmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemAlarmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmType)) {
      query["AlarmType"] = request.alarmType;
    }

    if (!$dara.isNull(request.beginDate)) {
      query["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemAlarms",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemAlarmsResponse({}));
  }

  /**
   * 查询系统告警
   * 
   * @param request - ListSystemAlarmsRequest
   * @returns ListSystemAlarmsResponse
   */
  async listSystemAlarms(request: $_model.ListSystemAlarmsRequest): Promise<$_model.ListSystemAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemAlarmsWithOptions(request, runtime);
  }

  /**
   * 修改指定实例的信息
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttributeWithOptions(request: $_model.ModifyInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceAttribute",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceAttributeResponse({}));
  }

  /**
   * 修改指定实例的信息
   * 
   * @param request - ModifyInstanceAttributeRequest
   * @returns ModifyInstanceAttributeResponse
   */
  async modifyInstanceAttribute(request: $_model.ModifyInstanceAttributeRequest): Promise<$_model.ModifyInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 启动审计实例
   * 
   * @param request - StartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(request: $_model.StartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2018-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * 启动审计实例
   * 
   * @param request - StartInstanceRequest
   * @returns StartInstanceResponse
   */
  async startInstance(request: $_model.StartInstanceRequest): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startInstanceWithOptions(request, runtime);
  }

}
