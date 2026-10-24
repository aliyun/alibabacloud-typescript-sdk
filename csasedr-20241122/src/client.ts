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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("csasedr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a client rule policy.
   * 
   * @remarks
   * Creates a client rule policy. The policy type is specified by PolicyType.
   * 
   * @param tmpReq - CreateClientRuleStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClientRuleStrategyResponse
   */
  async createClientRuleStrategyWithOptions(tmpReq: $_model.CreateClientRuleStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClientRuleStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClientRuleStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeUserNameList)) {
      request.excludeUserNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeUserNameList, "ExcludeUserNameList", "json");
    }

    if (!$dara.isNull(tmpReq.includeGroupIdList)) {
      request.includeGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeGroupIdList, "IncludeGroupIdList", "json");
    }

    if (!$dara.isNull(tmpReq.portOnList)) {
      request.portOnListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.portOnList, "PortOnList", "json");
    }

    if (!$dara.isNull(tmpReq.softWareOnList)) {
      request.softWareOnListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.softWareOnList, "SoftWareOnList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.allGroup)) {
      query["AllGroup"] = request.allGroup;
    }

    if (!$dara.isNull(request.approvalId)) {
      query["ApprovalId"] = request.approvalId;
    }

    if (!$dara.isNull(request.cmdline)) {
      query["Cmdline"] = request.cmdline;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeUserNameListShrink)) {
      query["ExcludeUserNameList"] = request.excludeUserNameListShrink;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.inSwitch)) {
      query["InSwitch"] = request.inSwitch;
    }

    if (!$dara.isNull(request.includeGroupIdListShrink)) {
      query["IncludeGroupIdList"] = request.includeGroupIdListShrink;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mainButtonTextCh)) {
      query["MainButtonTextCh"] = request.mainButtonTextCh;
    }

    if (!$dara.isNull(request.mainButtonTextEn)) {
      query["MainButtonTextEn"] = request.mainButtonTextEn;
    }

    if (!$dara.isNull(request.matchMode)) {
      query["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.matchTargetIds)) {
      query["MatchTargetIds"] = request.matchTargetIds;
    }

    if (!$dara.isNull(request.md5List)) {
      query["Md5List"] = request.md5List;
    }

    if (!$dara.isNull(request.minorButtonTextCh)) {
      query["MinorButtonTextCh"] = request.minorButtonTextCh;
    }

    if (!$dara.isNull(request.minorButtonTextEn)) {
      query["MinorButtonTextEn"] = request.minorButtonTextEn;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newFilePath)) {
      query["NewFilePath"] = request.newFilePath;
    }

    if (!$dara.isNull(request.outSwitch)) {
      query["OutSwitch"] = request.outSwitch;
    }

    if (!$dara.isNull(request.parentCmdline)) {
      query["ParentCmdline"] = request.parentCmdline;
    }

    if (!$dara.isNull(request.parentProcPath)) {
      query["ParentProcPath"] = request.parentProcPath;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.portOnListShrink)) {
      query["PortOnList"] = request.portOnListShrink;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.procPath)) {
      query["ProcPath"] = request.procPath;
    }

    if (!$dara.isNull(request.registryContent)) {
      query["RegistryContent"] = request.registryContent;
    }

    if (!$dara.isNull(request.registryKey)) {
      query["RegistryKey"] = request.registryKey;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.selectionKey)) {
      query["SelectionKey"] = request.selectionKey;
    }

    if (!$dara.isNull(request.softWareOnListShrink)) {
      query["SoftWareOnList"] = request.softWareOnListShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.strategySourceType)) {
      query["StrategySourceType"] = request.strategySourceType;
    }

    if (!$dara.isNull(request.supportsApproval)) {
      query["SupportsApproval"] = request.supportsApproval;
    }

    if (!$dara.isNull(request.usContent)) {
      query["UsContent"] = request.usContent;
    }

    if (!$dara.isNull(request.usTitle)) {
      query["UsTitle"] = request.usTitle;
    }

    if (!$dara.isNull(request.zhContent)) {
      query["ZhContent"] = request.zhContent;
    }

    if (!$dara.isNull(request.zhTitle)) {
      query["ZhTitle"] = request.zhTitle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClientRuleStrategy",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClientRuleStrategyResponse>(await this.callApi(params, req, runtime), new $_model.CreateClientRuleStrategyResponse({}));
  }

  /**
   * Creates a client rule policy.
   * 
   * @remarks
   * Creates a client rule policy. The policy type is specified by PolicyType.
   * 
   * @param request - CreateClientRuleStrategyRequest
   * @returns CreateClientRuleStrategyResponse
   */
  async createClientRuleStrategy(request: $_model.CreateClientRuleStrategyRequest): Promise<$_model.CreateClientRuleStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClientRuleStrategyWithOptions(request, runtime);
  }

  /**
   * Creates a general asset selection configuration and generates a SelectionKey for use in What to do next.
   * 
   * @remarks
   * This operation is used for the initialization of a general asset selection configuration and generates a SelectionKey. The addition or selection of specific assets is completed in What to do next. When you invoke this operation, it only generates the configuration object and does not save the configuration record.
   * 
   * @param request - CreateSelectionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSelectionConfigResponse
   */
  async createSelectionConfigWithOptions(request: $_model.CreateSelectionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSelectionConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "CreateSelectionConfig",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSelectionConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateSelectionConfigResponse({}));
  }

  /**
   * Creates a general asset selection configuration and generates a SelectionKey for use in What to do next.
   * 
   * @remarks
   * This operation is used for the initialization of a general asset selection configuration and generates a SelectionKey. The addition or selection of specific assets is completed in What to do next. When you invoke this operation, it only generates the configuration object and does not save the configuration record.
   * 
   * @param request - CreateSelectionConfigRequest
   * @returns CreateSelectionConfigResponse
   */
  async createSelectionConfig(request: $_model.CreateSelectionConfigRequest): Promise<$_model.CreateSelectionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSelectionConfigWithOptions(request, runtime);
  }

  /**
   * Creates a node to query alerting events triggered by the same rule or Alarm Metric.
   * 
   * @param request - CreateSimilarSecurityEventsQueryTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSimilarSecurityEventsQueryTaskResponse
   */
  async createSimilarSecurityEventsQueryTaskWithOptions(request: $_model.CreateSimilarSecurityEventsQueryTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSimilarSecurityEventsQueryTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    if (!$dara.isNull(request.similarEventScenarioCode)) {
      query["SimilarEventScenarioCode"] = request.similarEventScenarioCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSimilarSecurityEventsQueryTask",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSimilarSecurityEventsQueryTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSimilarSecurityEventsQueryTaskResponse({}));
  }

  /**
   * Creates a node to query alerting events triggered by the same rule or Alarm Metric.
   * 
   * @param request - CreateSimilarSecurityEventsQueryTaskRequest
   * @returns CreateSimilarSecurityEventsQueryTaskResponse
   */
  async createSimilarSecurityEventsQueryTask(request: $_model.CreateSimilarSecurityEventsQueryTaskRequest): Promise<$_model.CreateSimilarSecurityEventsQueryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSimilarSecurityEventsQueryTaskWithOptions(request, runtime);
  }

  /**
   * Deletes client rule policies based on a list of policy IDs.
   * 
   * @param tmpReq - DeleteClientRuleStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClientRuleStrategyResponse
   */
  async deleteClientRuleStrategyWithOptions(tmpReq: $_model.DeleteClientRuleStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClientRuleStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteClientRuleStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.idList)) {
      request.idListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.idList, "IdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idListShrink)) {
      query["IdList"] = request.idListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClientRuleStrategy",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClientRuleStrategyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClientRuleStrategyResponse({}));
  }

  /**
   * Deletes client rule policies based on a list of policy IDs.
   * 
   * @param request - DeleteClientRuleStrategyRequest
   * @returns DeleteClientRuleStrategyResponse
   */
  async deleteClientRuleStrategy(request: $_model.DeleteClientRuleStrategyRequest): Promise<$_model.DeleteClientRuleStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClientRuleStrategyWithOptions(request, runtime);
  }

  /**
   * Deletes alert whitelist configurations in batches.
   * 
   * @param request - DeleteSecurityEventMarkMissListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityEventMarkMissListResponse
   */
  async deleteSecurityEventMarkMissListWithOptions(request: $_model.DeleteSecurityEventMarkMissListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecurityEventMarkMissListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecurityEventMarkMissList",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecurityEventMarkMissListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecurityEventMarkMissListResponse({}));
  }

  /**
   * Deletes alert whitelist configurations in batches.
   * 
   * @param request - DeleteSecurityEventMarkMissListRequest
   * @returns DeleteSecurityEventMarkMissListResponse
   */
  async deleteSecurityEventMarkMissList(request: $_model.DeleteSecurityEventMarkMissListRequest): Promise<$_model.DeleteSecurityEventMarkMissListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecurityEventMarkMissListWithOptions(request, runtime);
  }

  /**
   * Queries the effective scope mode, target list, and scope record information based on the asset scope ID.
   * 
   * @param request - DescribeAssetScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAssetScopeResponse
   */
  async describeAssetScopeWithOptions(request: $_model.DescribeAssetScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAssetScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAssetScope",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAssetScopeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAssetScopeResponse({}));
  }

  /**
   * Queries the effective scope mode, target list, and scope record information based on the asset scope ID.
   * 
   * @param request - DescribeAssetScopeRequest
   * @returns DescribeAssetScopeResponse
   */
  async describeAssetScope(request: $_model.DescribeAssetScopeRequest): Promise<$_model.DescribeAssetScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAssetScopeWithOptions(request, runtime);
  }

  /**
   * Queries security alert types.
   * 
   * @param request - DescribeNsasSuspEventTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNsasSuspEventTypeResponse
   */
  async describeNsasSuspEventTypeWithOptions(request: $_model.DescribeNsasSuspEventTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNsasSuspEventTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.containerFieldName)) {
      query["ContainerFieldName"] = request.containerFieldName;
    }

    if (!$dara.isNull(request.containerFieldValue)) {
      query["ContainerFieldValue"] = request.containerFieldValue;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNsasSuspEventType",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNsasSuspEventTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNsasSuspEventTypeResponse({}));
  }

  /**
   * Queries security alert types.
   * 
   * @param request - DescribeNsasSuspEventTypeRequest
   * @returns DescribeNsasSuspEventTypeResponse
   */
  async describeNsasSuspEventType(request: $_model.DescribeNsasSuspEventTypeRequest): Promise<$_model.DescribeNsasSuspEventTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNsasSuspEventTypeWithOptions(request, runtime);
  }

  /**
   * Queries the automatic whitelist rules for alerts.
   * 
   * @param request - DescribeSecurityEventMarkMissListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventMarkMissListResponse
   */
  async describeSecurityEventMarkMissListWithOptions(request: $_model.DescribeSecurityEventMarkMissListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventMarkMissListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.disposalWay)) {
      query["DisposalWay"] = request.disposalWay;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventMarkMissList",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventMarkMissListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventMarkMissListResponse({}));
  }

  /**
   * Queries the automatic whitelist rules for alerts.
   * 
   * @param request - DescribeSecurityEventMarkMissListRequest
   * @returns DescribeSecurityEventMarkMissListResponse
   */
  async describeSecurityEventMarkMissList(request: $_model.DescribeSecurityEventMarkMissListRequest): Promise<$_model.DescribeSecurityEventMarkMissListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventMarkMissListWithOptions(request, runtime);
  }

  /**
   * Queries the processing status of security alerts based on the task ID or alert event ID.
   * 
   * @param request - DescribeSecurityEventOperationStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventOperationStatusResponse
   */
  async describeSecurityEventOperationStatusWithOptions(request: $_model.DescribeSecurityEventOperationStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventOperationStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventOperationStatus",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventOperationStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventOperationStatusResponse({}));
  }

  /**
   * Queries the processing status of security alerts based on the task ID or alert event ID.
   * 
   * @param request - DescribeSecurityEventOperationStatusRequest
   * @returns DescribeSecurityEventOperationStatusResponse
   */
  async describeSecurityEventOperationStatus(request: $_model.DescribeSecurityEventOperationStatusRequest): Promise<$_model.DescribeSecurityEventOperationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventOperationStatusWithOptions(request, runtime);
  }

  /**
   * Queries the handling operations, operability, and whitelist rule configurations for a specified endpoint alert in its current state.
   * 
   * @remarks
   * This operation queries the handling operations that can be displayed for a specified endpoint alert. When initiating a subsequent response, you must select the operation items returned in this response where UserCanOperate is true, and submit parameters as required by the response operation. The query result does not guarantee that the subsequent response will succeed.
   * The actual returned results are affected by feature switches, canary releases, dynamic allowlists, alert templates, alert statuses, and filter conditions. The list may be empty. The examples are used to illustrate field formats or rule combinations and do not represent that a specific alert will definitely return these values. MappingMarkFields and its subfields are generic compatibility structures. The current query pipeline does not populate their elements, and you should not infer that this operation supports the corresponding capabilities based on them.
   * 
   * @param request - DescribeSecurityEventOperationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecurityEventOperationsResponse
   */
  async describeSecurityEventOperationsWithOptions(request: $_model.DescribeSecurityEventOperationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecurityEventOperationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecurityEventOperations",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecurityEventOperationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecurityEventOperationsResponse({}));
  }

  /**
   * Queries the handling operations, operability, and whitelist rule configurations for a specified endpoint alert in its current state.
   * 
   * @remarks
   * This operation queries the handling operations that can be displayed for a specified endpoint alert. When initiating a subsequent response, you must select the operation items returned in this response where UserCanOperate is true, and submit parameters as required by the response operation. The query result does not guarantee that the subsequent response will succeed.
   * The actual returned results are affected by feature switches, canary releases, dynamic allowlists, alert templates, alert statuses, and filter conditions. The list may be empty. The examples are used to illustrate field formats or rule combinations and do not represent that a specific alert will definitely return these values. MappingMarkFields and its subfields are generic compatibility structures. The current query pipeline does not populate their elements, and you should not infer that this operation supports the corresponding capabilities based on them.
   * 
   * @param request - DescribeSecurityEventOperationsRequest
   * @returns DescribeSecurityEventOperationsResponse
   */
  async describeSecurityEventOperations(request: $_model.DescribeSecurityEventOperationsRequest): Promise<$_model.DescribeSecurityEventOperationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSecurityEventOperationsWithOptions(request, runtime);
  }

  /**
   * Queries the handling scenarios for alerts triggered by the same rule or type.
   * 
   * @param request - DescribeSimilarEventScenariosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimilarEventScenariosResponse
   */
  async describeSimilarEventScenariosWithOptions(request: $_model.DescribeSimilarEventScenariosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimilarEventScenariosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.securityEventId)) {
      query["SecurityEventId"] = request.securityEventId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimilarEventScenarios",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimilarEventScenariosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimilarEventScenariosResponse({}));
  }

  /**
   * Queries the handling scenarios for alerts triggered by the same rule or type.
   * 
   * @param request - DescribeSimilarEventScenariosRequest
   * @returns DescribeSimilarEventScenariosResponse
   */
  async describeSimilarEventScenarios(request: $_model.DescribeSimilarEventScenariosRequest): Promise<$_model.DescribeSimilarEventScenariosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimilarEventScenariosWithOptions(request, runtime);
  }

  /**
   * Queries aggregated alerts triggered by the same rule or type.
   * 
   * @param request - DescribeSimilarSecurityEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSimilarSecurityEventsResponse
   */
  async describeSimilarSecurityEventsWithOptions(request: $_model.DescribeSimilarSecurityEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSimilarSecurityEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSimilarSecurityEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSimilarSecurityEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSimilarSecurityEventsResponse({}));
  }

  /**
   * Queries aggregated alerts triggered by the same rule or type.
   * 
   * @param request - DescribeSimilarSecurityEventsRequest
   * @returns DescribeSimilarSecurityEventsResponse
   */
  async describeSimilarSecurityEvents(request: $_model.DescribeSimilarSecurityEventsRequest): Promise<$_model.DescribeSimilarSecurityEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSimilarSecurityEventsWithOptions(request, runtime);
  }

  /**
   * Queries endpoint security alerts and supports filtering by alert, endpoint, and processing status.
   * 
   * @param request - DescribeSuspEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEventsWithOptions(request: $_model.DescribeSuspEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSuspEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmEventName)) {
      query["AlarmEventName"] = request.alarmEventName;
    }

    if (!$dara.isNull(request.alarmUniqueInfo)) {
      query["AlarmUniqueInfo"] = request.alarmUniqueInfo;
    }

    if (!$dara.isNull(request.assetsTypeList)) {
      query["AssetsTypeList"] = request.assetsTypeList;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.containerFieldName)) {
      query["ContainerFieldName"] = request.containerFieldName;
    }

    if (!$dara.isNull(request.containerFieldValue)) {
      query["ContainerFieldValue"] = request.containerFieldValue;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.department)) {
      query["Department"] = request.department;
    }

    if (!$dara.isNull(request.eventNames)) {
      query["EventNames"] = request.eventNames;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.innerIp)) {
      query["InnerIp"] = request.innerIp;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operateErrorCodeList)) {
      query["OperateErrorCodeList"] = request.operateErrorCodeList;
    }

    if (!$dara.isNull(request.operateTimeEnd)) {
      query["OperateTimeEnd"] = request.operateTimeEnd;
    }

    if (!$dara.isNull(request.operateTimeStart)) {
      query["OperateTimeStart"] = request.operateTimeStart;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentEventTypes)) {
      query["ParentEventTypes"] = request.parentEventTypes;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sortColumn)) {
      query["SortColumn"] = request.sortColumn;
    }

    if (!$dara.isNull(request.sortType)) {
      query["SortType"] = request.sortType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.srcIp)) {
      query["SrcIp"] = request.srcIp;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.strictMode)) {
      query["StrictMode"] = request.strictMode;
    }

    if (!$dara.isNull(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.timeEnd)) {
      query["TimeEnd"] = request.timeEnd;
    }

    if (!$dara.isNull(request.timeStart)) {
      query["TimeStart"] = request.timeStart;
    }

    if (!$dara.isNull(request.uniqueInfo)) {
      query["UniqueInfo"] = request.uniqueInfo;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.uuids)) {
      query["Uuids"] = request.uuids;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tacticId)) {
      body["TacticId"] = request.tacticId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSuspEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSuspEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSuspEventsResponse({}));
  }

  /**
   * Queries endpoint security alerts and supports filtering by alert, endpoint, and processing status.
   * 
   * @param request - DescribeSuspEventsRequest
   * @returns DescribeSuspEventsResponse
   */
  async describeSuspEvents(request: $_model.DescribeSuspEventsRequest): Promise<$_model.DescribeSuspEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSuspEventsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a client rule policy.
   * 
   * @remarks
   * Queries the detailed information of a client rule policy based on the policy ID.
   * 
   * @param request - GetClientRuleStrategyDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientRuleStrategyDetailResponse
   */
  async getClientRuleStrategyDetailWithOptions(request: $_model.GetClientRuleStrategyDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientRuleStrategyDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientRuleStrategyDetail",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientRuleStrategyDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetClientRuleStrategyDetailResponse({}));
  }

  /**
   * Queries the details of a client rule policy.
   * 
   * @remarks
   * Queries the detailed information of a client rule policy based on the policy ID.
   * 
   * @param request - GetClientRuleStrategyDetailRequest
   * @returns GetClientRuleStrategyDetailResponse
   */
  async getClientRuleStrategyDetail(request: $_model.GetClientRuleStrategyDetailRequest): Promise<$_model.GetClientRuleStrategyDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientRuleStrategyDetailWithOptions(request, runtime);
  }

  /**
   * Queries the number of system rules and custom rules in proactive defense policies.
   * 
   * @remarks
   * Counts the number of proactive defense policies (PolicyType=2) for the current account and returns the number of system rule policies and custom rule policies.
   * 
   * @param request - GetClientRuleStrategyStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClientRuleStrategyStatisticsResponse
   */
  async getClientRuleStrategyStatisticsWithOptions(request: $_model.GetClientRuleStrategyStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClientRuleStrategyStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClientRuleStrategyStatistics",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClientRuleStrategyStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetClientRuleStrategyStatisticsResponse({}));
  }

  /**
   * Queries the number of system rules and custom rules in proactive defense policies.
   * 
   * @remarks
   * Counts the number of proactive defense policies (PolicyType=2) for the current account and returns the number of system rule policies and custom rule policies.
   * 
   * @param request - GetClientRuleStrategyStatisticsRequest
   * @returns GetClientRuleStrategyStatisticsResponse
   */
  async getClientRuleStrategyStatistics(request: $_model.GetClientRuleStrategyStatisticsRequest): Promise<$_model.GetClientRuleStrategyStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClientRuleStrategyStatisticsWithOptions(request, runtime);
  }

  /**
   * Handles security alert events.
   * 
   * @param request - HandleSecurityEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleSecurityEventsResponse
   */
  async handleSecurityEventsWithOptions(request: $_model.HandleSecurityEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HandleSecurityEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.markBatch)) {
      query["MarkBatch"] = request.markBatch;
    }

    if (!$dara.isNull(request.markMissParam)) {
      query["MarkMissParam"] = request.markMissParam;
    }

    if (!$dara.isNull(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!$dara.isNull(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.securityEventIds)) {
      query["SecurityEventIds"] = request.securityEventIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleSecurityEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HandleSecurityEventsResponse>(await this.callApi(params, req, runtime), new $_model.HandleSecurityEventsResponse({}));
  }

  /**
   * Handles security alert events.
   * 
   * @param request - HandleSecurityEventsRequest
   * @returns HandleSecurityEventsResponse
   */
  async handleSecurityEvents(request: $_model.HandleSecurityEventsRequest): Promise<$_model.HandleSecurityEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleSecurityEventsWithOptions(request, runtime);
  }

  /**
   * Performs batch operations on similar security alerts filtered by a query task.
   * 
   * @remarks
   * First, call the CreateSimilarSecurityEventsQueryTask operation to create a similar alert query task. Wait until the data extraction for the task is complete and the task reaches the DataRetrieved state before you call this operation. The processing scope covers the security alerts filtered under the TaskId. This scope is determined by the similar scenario and alert configurations selected when the query task was created. The scope does not equal all alerts of the same type, nor is it fixed to alerts with the same IP address. After this operation is successfully called, the processing continues to run asynchronously in the background.
   * 
   * @param request - HandleSimilarSecurityEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HandleSimilarSecurityEventsResponse
   */
  async handleSimilarSecurityEventsWithOptions(request: $_model.HandleSimilarSecurityEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.HandleSimilarSecurityEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.markMissParam)) {
      query["MarkMissParam"] = request.markMissParam;
    }

    if (!$dara.isNull(request.operationCode)) {
      query["OperationCode"] = request.operationCode;
    }

    if (!$dara.isNull(request.operationParams)) {
      query["OperationParams"] = request.operationParams;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "HandleSimilarSecurityEvents",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HandleSimilarSecurityEventsResponse>(await this.callApi(params, req, runtime), new $_model.HandleSimilarSecurityEventsResponse({}));
  }

  /**
   * Performs batch operations on similar security alerts filtered by a query task.
   * 
   * @remarks
   * First, call the CreateSimilarSecurityEventsQueryTask operation to create a similar alert query task. Wait until the data extraction for the task is complete and the task reaches the DataRetrieved state before you call this operation. The processing scope covers the security alerts filtered under the TaskId. This scope is determined by the similar scenario and alert configurations selected when the query task was created. The scope does not equal all alerts of the same type, nor is it fixed to alerts with the same IP address. After this operation is successfully called, the processing continues to run asynchronously in the background.
   * 
   * @param request - HandleSimilarSecurityEventsRequest
   * @returns HandleSimilarSecurityEventsResponse
   */
  async handleSimilarSecurityEvents(request: $_model.HandleSimilarSecurityEventsRequest): Promise<$_model.HandleSimilarSecurityEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.handleSimilarSecurityEventsWithOptions(request, runtime);
  }

  /**
   * Queries the client rule policy list by using a paged query with paging.
   * 
   * @remarks
   * Performs a paged query to retrieve client rule policies based on the policy type (PolicyType) with paging. You can call GetClientRuleStrategyDetail to query the details.
   * 
   * @param request - ListClientRuleStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClientRuleStrategyResponse
   */
  async listClientRuleStrategyWithOptions(request: $_model.ListClientRuleStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClientRuleStrategyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClientRuleStrategy",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClientRuleStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ListClientRuleStrategyResponse({}));
  }

  /**
   * Queries the client rule policy list by using a paged query with paging.
   * 
   * @remarks
   * Performs a paged query to retrieve client rule policies based on the policy type (PolicyType) with paging. You can call GetClientRuleStrategyDetail to query the details.
   * 
   * @param request - ListClientRuleStrategyRequest
   * @returns ListClientRuleStrategyResponse
   */
  async listClientRuleStrategy(request: $_model.ListClientRuleStrategyRequest): Promise<$_model.ListClientRuleStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClientRuleStrategyWithOptions(request, runtime);
  }

  /**
   * Queries system defense rules and the switch status of rules under a specified SelectionKey by paging in a paged query.
   * 
   * @remarks
   * Queries the system rule catalog and the switch status of rules under a specified SelectionKey. You can use the returned SwitchId and the same SelectionKey to call the OperateTargetConfig operation to modify the switch status.
   * 
   * @param tmpReq - ListSystemConfigRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemConfigRulesResponse
   */
  async listSystemConfigRulesWithOptions(tmpReq: $_model.ListSystemConfigRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemConfigRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListSystemConfigRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aggregationIds)) {
      request.aggregationIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregationIds, "AggregationIds", "json");
    }

    if (!$dara.isNull(tmpReq.ruleTypes)) {
      request.ruleTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ruleTypes, "RuleTypes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aggregationIdsShrink)) {
      query["AggregationIds"] = request.aggregationIdsShrink;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleTypesShrink)) {
      query["RuleTypes"] = request.ruleTypesShrink;
    }

    if (!$dara.isNull(request.selectionKey)) {
      query["SelectionKey"] = request.selectionKey;
    }

    if (!$dara.isNull(request.systemType)) {
      query["SystemType"] = request.systemType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemConfigRules",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemConfigRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemConfigRulesResponse({}));
  }

  /**
   * Queries system defense rules and the switch status of rules under a specified SelectionKey by paging in a paged query.
   * 
   * @remarks
   * Queries the system rule catalog and the switch status of rules under a specified SelectionKey. You can use the returned SwitchId and the same SelectionKey to call the OperateTargetConfig operation to modify the switch status.
   * 
   * @param request - ListSystemConfigRulesRequest
   * @returns ListSystemConfigRulesResponse
   */
  async listSystemConfigRules(request: $_model.ListSystemConfigRulesRequest): Promise<$_model.ListSystemConfigRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSystemConfigRulesWithOptions(request, runtime);
  }

  /**
   * Updates the switch status of system rules in batches by SelectionKey.
   * 
   * @remarks
   * Updates the override configuration of rule switches for each SwitchId under the same SelectionKey. Obtain the rule SwitchId by calling ListSystemConfigRules first. Do not use this operation to replace UpdateClientRuleStrategy for updating the overall policy switch Status, and do not use software process names as system rule SwitchIds.
   * 
   * @param tmpReq - OperateTargetConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateTargetConfigResponse
   */
  async operateTargetConfigWithOptions(tmpReq: $_model.OperateTargetConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateTargetConfigResponse> {
    tmpReq.validate();
    let request = new $_model.OperateTargetConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.switchIdList)) {
      request.switchIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.switchIdList, "SwitchIdList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.selectionKey)) {
      query["SelectionKey"] = request.selectionKey;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.switchIdListShrink)) {
      query["SwitchIdList"] = request.switchIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateTargetConfig",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateTargetConfigResponse>(await this.callApi(params, req, runtime), new $_model.OperateTargetConfigResponse({}));
  }

  /**
   * Updates the switch status of system rules in batches by SelectionKey.
   * 
   * @remarks
   * Updates the override configuration of rule switches for each SwitchId under the same SelectionKey. Obtain the rule SwitchId by calling ListSystemConfigRules first. Do not use this operation to replace UpdateClientRuleStrategy for updating the overall policy switch Status, and do not use software process names as system rule SwitchIds.
   * 
   * @param request - OperateTargetConfigRequest
   * @returns OperateTargetConfigResponse
   */
  async operateTargetConfig(request: $_model.OperateTargetConfigRequest): Promise<$_model.OperateTargetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateTargetConfigWithOptions(request, runtime);
  }

  /**
   * Updates the effective scope mode and target list of a specified asset scope record.
   * 
   * @param request - UpdateAssetScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssetScopeResponse
   */
  async updateAssetScopeWithOptions(request: $_model.UpdateAssetScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAssetScopeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.matchMode)) {
      query["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.matchTargetIds)) {
      query["MatchTargetIds"] = request.matchTargetIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssetScope",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAssetScopeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAssetScopeResponse({}));
  }

  /**
   * Updates the effective scope mode and target list of a specified asset scope record.
   * 
   * @param request - UpdateAssetScopeRequest
   * @returns UpdateAssetScopeResponse
   */
  async updateAssetScope(request: $_model.UpdateAssetScopeRequest): Promise<$_model.UpdateAssetScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssetScopeWithOptions(request, runtime);
  }

  /**
   * Updates a client rule policy.
   * 
   * @remarks
   * Updates a client rule policy based on the policy ID.
   * 
   * @param tmpReq - UpdateClientRuleStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClientRuleStrategyResponse
   */
  async updateClientRuleStrategyWithOptions(tmpReq: $_model.UpdateClientRuleStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClientRuleStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateClientRuleStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeUserNameList)) {
      request.excludeUserNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeUserNameList, "ExcludeUserNameList", "json");
    }

    if (!$dara.isNull(tmpReq.includeGroupIdList)) {
      request.includeGroupIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.includeGroupIdList, "IncludeGroupIdList", "json");
    }

    if (!$dara.isNull(tmpReq.portOnList)) {
      request.portOnListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.portOnList, "PortOnList", "json");
    }

    if (!$dara.isNull(tmpReq.softWareOnList)) {
      request.softWareOnListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.softWareOnList, "SoftWareOnList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.allGroup)) {
      query["AllGroup"] = request.allGroup;
    }

    if (!$dara.isNull(request.approvalId)) {
      query["ApprovalId"] = request.approvalId;
    }

    if (!$dara.isNull(request.cmdline)) {
      query["Cmdline"] = request.cmdline;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.excludeUserNameListShrink)) {
      query["ExcludeUserNameList"] = request.excludeUserNameListShrink;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.inSwitch)) {
      query["InSwitch"] = request.inSwitch;
    }

    if (!$dara.isNull(request.includeGroupIdListShrink)) {
      query["IncludeGroupIdList"] = request.includeGroupIdListShrink;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mainButtonTextCh)) {
      query["MainButtonTextCh"] = request.mainButtonTextCh;
    }

    if (!$dara.isNull(request.mainButtonTextEn)) {
      query["MainButtonTextEn"] = request.mainButtonTextEn;
    }

    if (!$dara.isNull(request.matchMode)) {
      query["MatchMode"] = request.matchMode;
    }

    if (!$dara.isNull(request.matchTargetIds)) {
      query["MatchTargetIds"] = request.matchTargetIds;
    }

    if (!$dara.isNull(request.md5List)) {
      query["Md5List"] = request.md5List;
    }

    if (!$dara.isNull(request.minorButtonTextCh)) {
      query["MinorButtonTextCh"] = request.minorButtonTextCh;
    }

    if (!$dara.isNull(request.minorButtonTextEn)) {
      query["MinorButtonTextEn"] = request.minorButtonTextEn;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newFilePath)) {
      query["NewFilePath"] = request.newFilePath;
    }

    if (!$dara.isNull(request.outSwitch)) {
      query["OutSwitch"] = request.outSwitch;
    }

    if (!$dara.isNull(request.parentCmdline)) {
      query["ParentCmdline"] = request.parentCmdline;
    }

    if (!$dara.isNull(request.parentProcPath)) {
      query["ParentProcPath"] = request.parentProcPath;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.portOnListShrink)) {
      query["PortOnList"] = request.portOnListShrink;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.procPath)) {
      query["ProcPath"] = request.procPath;
    }

    if (!$dara.isNull(request.registryContent)) {
      query["RegistryContent"] = request.registryContent;
    }

    if (!$dara.isNull(request.registryKey)) {
      query["RegistryKey"] = request.registryKey;
    }

    if (!$dara.isNull(request.ruleType)) {
      query["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.softWareOnListShrink)) {
      query["SoftWareOnList"] = request.softWareOnListShrink;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.strategySourceType)) {
      query["StrategySourceType"] = request.strategySourceType;
    }

    if (!$dara.isNull(request.supportsApproval)) {
      query["SupportsApproval"] = request.supportsApproval;
    }

    if (!$dara.isNull(request.usContent)) {
      query["UsContent"] = request.usContent;
    }

    if (!$dara.isNull(request.usTitle)) {
      query["UsTitle"] = request.usTitle;
    }

    if (!$dara.isNull(request.zhContent)) {
      query["ZhContent"] = request.zhContent;
    }

    if (!$dara.isNull(request.zhTitle)) {
      query["ZhTitle"] = request.zhTitle;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClientRuleStrategy",
      version: "2024-11-22",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClientRuleStrategyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClientRuleStrategyResponse({}));
  }

  /**
   * Updates a client rule policy.
   * 
   * @remarks
   * Updates a client rule policy based on the policy ID.
   * 
   * @param request - UpdateClientRuleStrategyRequest
   * @returns UpdateClientRuleStrategyResponse
   */
  async updateClientRuleStrategy(request: $_model.UpdateClientRuleStrategyRequest): Promise<$_model.UpdateClientRuleStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClientRuleStrategyWithOptions(request, runtime);
  }

}
