// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AccessKeyGet
   * 
   * @param request - AccessKeyGetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccessKeyGetResponse
   */
  async accessKeyGetWithOptions(request: $_model.AccessKeyGetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AccessKeyGetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AccessKeyGet",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AccessKeyGetResponse>(await this.callApi(params, req, runtime), new $_model.AccessKeyGetResponse({}));
  }

  /**
   * AccessKeyGet
   * 
   * @param request - AccessKeyGetRequest
   * @returns AccessKeyGetResponse
   */
  async accessKeyGet(request: $_model.AccessKeyGetRequest): Promise<$_model.AccessKeyGetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.accessKeyGetWithOptions(request, runtime);
  }

  /**
   * @param request - AddMyGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMyGroupInstancesResponse
   */
  async addMyGroupInstancesWithOptions(request: $_model.AddMyGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMyGroupInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMyGroupInstances",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMyGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AddMyGroupInstancesResponse({}));
  }

  /**
   * @param request - AddMyGroupInstancesRequest
   * @returns AddMyGroupInstancesResponse
   */
  async addMyGroupInstances(request: $_model.AddMyGroupInstancesRequest): Promise<$_model.AddMyGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMyGroupInstancesWithOptions(request, runtime);
  }

  /**
   * CreateAlarm
   * 
   * @param request - CreateAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlarmResponse
   */
  async createAlarmWithOptions(request: $_model.CreateAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlarmResponse({}));
  }

  /**
   * CreateAlarm
   * 
   * @param request - CreateAlarmRequest
   * @returns CreateAlarmResponse
   */
  async createAlarm(request: $_model.CreateAlarmRequest): Promise<$_model.CreateAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlarmWithOptions(request, runtime);
  }

  /**
   * 创建双写配置
   * 
   * @param request - CreateHybridDoubleWriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridDoubleWriteResponse
   */
  async createHybridDoubleWriteWithOptions(request: $_model.CreateHybridDoubleWriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridDoubleWriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.sourceNamespace)) {
      query["SourceNamespace"] = request.sourceNamespace;
    }

    if (!$dara.isNull(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridDoubleWrite",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridDoubleWriteResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridDoubleWriteResponse({}));
  }

  /**
   * 创建双写配置
   * 
   * @param request - CreateHybridDoubleWriteRequest
   * @returns CreateHybridDoubleWriteResponse
   */
  async createHybridDoubleWrite(request: $_model.CreateHybridDoubleWriteRequest): Promise<$_model.CreateHybridDoubleWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridDoubleWriteWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMonitoringTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitoringTemplateResponse
   */
  async createMonitoringTemplateWithOptions(request: $_model.CreateMonitoringTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitoringTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertTemplatesJson)) {
      query["AlertTemplatesJson"] = request.alertTemplatesJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hostAvailabilityTemplate)) {
      query["HostAvailabilityTemplate"] = request.hostAvailabilityTemplate;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.processMonitorTemplates)) {
      query["ProcessMonitorTemplates"] = request.processMonitorTemplates;
    }

    if (!$dara.isNull(request.systemEventTemplates)) {
      query["SystemEventTemplates"] = request.systemEventTemplates;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitoringTemplate",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitoringTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitoringTemplateResponse({}));
  }

  /**
   * @param request - CreateMonitoringTemplateRequest
   * @returns CreateMonitoringTemplateResponse
   */
  async createMonitoringTemplate(request: $_model.CreateMonitoringTemplateRequest): Promise<$_model.CreateMonitoringTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitoringTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - CreateMyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMyGroupsResponse
   */
  async createMyGroupsWithOptions(request: $_model.CreateMyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindUrl)) {
      query["BindUrl"] = request.bindUrl;
    }

    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMyGroups",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.CreateMyGroupsResponse({}));
  }

  /**
   * @param request - CreateMyGroupsRequest
   * @returns CreateMyGroupsResponse
   */
  async createMyGroups(request: $_model.CreateMyGroupsRequest): Promise<$_model.CreateMyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMyGroupsWithOptions(request, runtime);
  }

  /**
   * CreateTask
   * 
   * @param request - CreateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.alertRule)) {
      query["AlertRule"] = request.alertRule;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.intervalUnit)) {
      query["IntervalUnit"] = request.intervalUnit;
    }

    if (!$dara.isNull(request.ispCity)) {
      query["IspCity"] = request.ispCity;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.caller)) {
      query["caller"] = request.caller;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * CreateTask
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTaskWithOptions(request, runtime);
  }

  /**
   * DeleteAlarm
   * 
   * @param request - DeleteAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlarmResponse
   */
  async deleteAlarmWithOptions(request: $_model.DeleteAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlarmResponse({}));
  }

  /**
   * DeleteAlarm
   * 
   * @param request - DeleteAlarmRequest
   * @returns DeleteAlarmResponse
   */
  async deleteAlarm(request: $_model.DeleteAlarmRequest): Promise<$_model.DeleteAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlarmWithOptions(request, runtime);
  }

  /**
   * DeleteCustomMetric
   * 
   * @param request - DeleteCustomMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomMetricResponse
   */
  async deleteCustomMetricWithOptions(request: $_model.DeleteCustomMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.UUID)) {
      query["UUID"] = request.UUID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomMetric",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomMetricResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomMetricResponse({}));
  }

  /**
   * DeleteCustomMetric
   * 
   * @param request - DeleteCustomMetricRequest
   * @returns DeleteCustomMetricResponse
   */
  async deleteCustomMetric(request: $_model.DeleteCustomMetricRequest): Promise<$_model.DeleteCustomMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomMetricWithOptions(request, runtime);
  }

  /**
   * 删除双写配置
   * 
   * @param request - DeleteHybridDoubleWriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridDoubleWriteResponse
   */
  async deleteHybridDoubleWriteWithOptions(request: $_model.DeleteHybridDoubleWriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridDoubleWriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceNamespace)) {
      query["SourceNamespace"] = request.sourceNamespace;
    }

    if (!$dara.isNull(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridDoubleWrite",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridDoubleWriteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridDoubleWriteResponse({}));
  }

  /**
   * 删除双写配置
   * 
   * @param request - DeleteHybridDoubleWriteRequest
   * @returns DeleteHybridDoubleWriteResponse
   */
  async deleteHybridDoubleWrite(request: $_model.DeleteHybridDoubleWriteRequest): Promise<$_model.DeleteHybridDoubleWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridDoubleWriteWithOptions(request, runtime);
  }

  /**
   * DeleteMetricRuleTargets
   * 
   * @param request - DeleteMetricRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricRuleTargetsResponse
   */
  async deleteMetricRuleTargetsWithOptions(request: $_model.DeleteMetricRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricRuleTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.targetIds)) {
      query["TargetIds"] = request.targetIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricRuleTargets",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetricRuleTargetsResponse({}));
  }

  /**
   * DeleteMetricRuleTargets
   * 
   * @param request - DeleteMetricRuleTargetsRequest
   * @returns DeleteMetricRuleTargetsResponse
   */
  async deleteMetricRuleTargets(request: $_model.DeleteMetricRuleTargetsRequest): Promise<$_model.DeleteMetricRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
   * DeleteMetricRules
   * 
   * @param request - DeleteMetricRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricRulesResponse
   */
  async deleteMetricRulesWithOptions(request: $_model.DeleteMetricRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricRules",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetricRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetricRulesResponse({}));
  }

  /**
   * DeleteMetricRules
   * 
   * @param request - DeleteMetricRulesRequest
   * @returns DeleteMetricRulesResponse
   */
  async deleteMetricRules(request: $_model.DeleteMetricRulesRequest): Promise<$_model.DeleteMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRulesWithOptions(request, runtime);
  }

  /**
   * deletemygroupinstances
   * 
   * @param request - DeleteMyGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMyGroupInstancesResponse
   */
  async deleteMyGroupInstancesWithOptions(request: $_model.DeleteMyGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMyGroupInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMyGroupInstances",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMyGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMyGroupInstancesResponse({}));
  }

  /**
   * deletemygroupinstances
   * 
   * @param request - DeleteMyGroupInstancesRequest
   * @returns DeleteMyGroupInstancesResponse
   */
  async deleteMyGroupInstances(request: $_model.DeleteMyGroupInstancesRequest): Promise<$_model.DeleteMyGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMyGroupInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteMyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMyGroupsResponse
   */
  async deleteMyGroupsWithOptions(request: $_model.DeleteMyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMyGroups",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMyGroupsResponse({}));
  }

  /**
   * @param request - DeleteMyGroupsRequest
   * @returns DeleteMyGroupsResponse
   */
  async deleteMyGroups(request: $_model.DeleteMyGroupsRequest): Promise<$_model.DeleteMyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMyGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTasksResponse
   */
  async deleteTasksWithOptions(request: $_model.DeleteTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isDeleteAlarms)) {
      query["IsDeleteAlarms"] = request.isDeleteAlarms;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTasks",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTasksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTasksResponse({}));
  }

  /**
   * @param request - DeleteTasksRequest
   * @returns DeleteTasksResponse
   */
  async deleteTasks(request: $_model.DeleteTasksRequest): Promise<$_model.DeleteTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTasksWithOptions(request, runtime);
  }

  /**
   * DescribeAlarmHistory
   * 
   * @param request - DescribeAlarmHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmHistoryResponse
   */
  async describeAlarmHistoryWithOptions(request: $_model.DescribeAlarmHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.ascending)) {
      query["Ascending"] = request.ascending;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.onlyCount)) {
      query["OnlyCount"] = request.onlyCount;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarmHistory",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmHistoryResponse({}));
  }

  /**
   * DescribeAlarmHistory
   * 
   * @param request - DescribeAlarmHistoryRequest
   * @returns DescribeAlarmHistoryResponse
   */
  async describeAlarmHistory(request: $_model.DescribeAlarmHistoryRequest): Promise<$_model.DescribeAlarmHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmHistoryWithOptions(request, runtime);
  }

  /**
   * DescribeAlarms
   * 
   * @param request - DescribeAlarmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmsResponse
   */
  async describeAlarmsWithOptions(request: $_model.DescribeAlarmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertState)) {
      query["AlertState"] = request.alertState;
    }

    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.enableState)) {
      query["EnableState"] = request.enableState;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nameKeyword)) {
      query["NameKeyword"] = request.nameKeyword;
    }

    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarms",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmsResponse({}));
  }

  /**
   * DescribeAlarms
   * 
   * @param request - DescribeAlarmsRequest
   * @returns DescribeAlarmsResponse
   */
  async describeAlarms(request: $_model.DescribeAlarmsRequest): Promise<$_model.DescribeAlarmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmsWithOptions(request, runtime);
  }

  /**
   * describealarmsforresources
   * 
   * @param request - DescribeAlarmsForResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlarmsForResourcesResponse
   */
  async describeAlarmsForResourcesWithOptions(request: $_model.DescribeAlarmsForResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlarmsForResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertState)) {
      query["AlertState"] = request.alertState;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.enableState)) {
      query["EnableState"] = request.enableState;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlarmsForResources",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlarmsForResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlarmsForResourcesResponse({}));
  }

  /**
   * describealarmsforresources
   * 
   * @param request - DescribeAlarmsForResourcesRequest
   * @returns DescribeAlarmsForResourcesResponse
   */
  async describeAlarmsForResources(request: $_model.DescribeAlarmsForResourcesRequest): Promise<$_model.DescribeAlarmsForResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlarmsForResourcesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeAlertHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertHistoryListResponse
   */
  async describeAlertHistoryListWithOptions(request: $_model.DescribeAlertHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertHistoryListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.ascending)) {
      query["Ascending"] = request.ascending;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.onlyCount)) {
      query["OnlyCount"] = request.onlyCount;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertHistoryList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertHistoryListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertHistoryListResponse({}));
  }

  /**
   * @param request - DescribeAlertHistoryListRequest
   * @returns DescribeAlertHistoryListResponse
   */
  async describeAlertHistoryList(request: $_model.DescribeAlertHistoryListRequest): Promise<$_model.DescribeAlertHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertHistoryListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactResponse
   */
  async describeContactWithOptions(request: $_model.DescribeContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContact",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactResponse({}));
  }

  /**
   * @param request - DescribeContactRequest
   * @returns DescribeContactResponse
   */
  async describeContact(request: $_model.DescribeContactRequest): Promise<$_model.DescribeContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactWithOptions(request, runtime);
  }

  /**
   * 查询本数据源被双写到哪里
   * 
   * @param request - DescribeHybridDoubleWriteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridDoubleWriteResponse
   */
  async describeHybridDoubleWriteWithOptions(request: $_model.DescribeHybridDoubleWriteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridDoubleWriteResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.sourceNamespace)) {
      query["SourceNamespace"] = request.sourceNamespace;
    }

    if (!$dara.isNull(request.sourceUserId)) {
      query["SourceUserId"] = request.sourceUserId;
    }

    if (!$dara.isNull(request.targetNamespace)) {
      query["TargetNamespace"] = request.targetNamespace;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridDoubleWrite",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridDoubleWriteResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridDoubleWriteResponse({}));
  }

  /**
   * 查询本数据源被双写到哪里
   * 
   * @param request - DescribeHybridDoubleWriteRequest
   * @returns DescribeHybridDoubleWriteResponse
   */
  async describeHybridDoubleWrite(request: $_model.DescribeHybridDoubleWriteRequest): Promise<$_model.DescribeHybridDoubleWriteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridDoubleWriteWithOptions(request, runtime);
  }

  /**
   * 获取探针列表
   * 
   * @param request - DescribeISPAreaCityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeISPAreaCityResponse
   */
  async describeISPAreaCityWithOptions(request: $_model.DescribeISPAreaCityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeISPAreaCityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeISPAreaCity",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeISPAreaCityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeISPAreaCityResponse({}));
  }

  /**
   * 获取探针列表
   * 
   * @param request - DescribeISPAreaCityRequest
   * @returns DescribeISPAreaCityResponse
   */
  async describeISPAreaCity(request: $_model.DescribeISPAreaCityRequest): Promise<$_model.DescribeISPAreaCityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeISPAreaCityWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMetricRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleListResponse
   */
  async describeMetricRuleListWithOptions(request: $_model.DescribeMetricRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertState)) {
      query["AlertState"] = request.alertState;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.enableState)) {
      query["EnableState"] = request.enableState;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleIds)) {
      query["RuleIds"] = request.ruleIds;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleListResponse({}));
  }

  /**
   * @param request - DescribeMetricRuleListRequest
   * @returns DescribeMetricRuleListResponse
   */
  async describeMetricRuleList(request: $_model.DescribeMetricRuleListRequest): Promise<$_model.DescribeMetricRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskDetailResponse
   */
  async describeTaskDetailWithOptions(request: $_model.DescribeTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskDetail",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskDetailResponse({}));
  }

  /**
   * @param request - DescribeTaskDetailRequest
   * @returns DescribeTaskDetailResponse
   */
  async describeTaskDetail(request: $_model.DescribeTaskDetailRequest): Promise<$_model.DescribeTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskDetailWithOptions(request, runtime);
  }

  /**
   * DescribeTasks
   * 
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTasksResponse({}));
  }

  /**
   * DescribeTasks
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * DisableAlarm
   * 
   * @param request - DisableAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAlarmResponse
   */
  async disableAlarmWithOptions(request: $_model.DisableAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAlarmResponse>(await this.callApi(params, req, runtime), new $_model.DisableAlarmResponse({}));
  }

  /**
   * DisableAlarm
   * 
   * @param request - DisableAlarmRequest
   * @returns DisableAlarmResponse
   */
  async disableAlarm(request: $_model.DisableAlarmRequest): Promise<$_model.DisableAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAlarmWithOptions(request, runtime);
  }

  /**
   * EnableAlarm
   * 
   * @param request - EnableAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAlarmResponse
   */
  async enableAlarmWithOptions(request: $_model.EnableAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAlarmResponse>(await this.callApi(params, req, runtime), new $_model.EnableAlarmResponse({}));
  }

  /**
   * EnableAlarm
   * 
   * @param request - EnableAlarmRequest
   * @returns EnableAlarmResponse
   */
  async enableAlarm(request: $_model.EnableAlarmRequest): Promise<$_model.EnableAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - GetContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContactsResponse
   */
  async getContactsWithOptions(request: $_model.GetContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContacts",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContactsResponse>(await this.callApi(params, req, runtime), new $_model.GetContactsResponse({}));
  }

  /**
   * @param request - GetContactsRequest
   * @returns GetContactsResponse
   */
  async getContacts(request: $_model.GetContactsRequest): Promise<$_model.GetContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getContactsWithOptions(request, runtime);
  }

  /**
   * 获取行切分结果
   * 
   * @param request - GetLineSplitResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLineSplitResultResponse
   */
  async getLineSplitResultWithOptions(request: $_model.GetLineSplitResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLineSplitResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.line)) {
      query["Line"] = request.line;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.regex)) {
      query["Regex"] = request.regex;
    }

    if (!$dara.isNull(request.selectContent)) {
      query["SelectContent"] = request.selectContent;
    }

    if (!$dara.isNull(request.splitType)) {
      query["SplitType"] = request.splitType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLineSplitResult",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLineSplitResultResponse>(await this.callApi(params, req, runtime), new $_model.GetLineSplitResultResponse({}));
  }

  /**
   * 获取行切分结果
   * 
   * @param request - GetLineSplitResultRequest
   * @returns GetLineSplitResultResponse
   */
  async getLineSplitResult(request: $_model.GetLineSplitResultRequest): Promise<$_model.GetLineSplitResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLineSplitResultWithOptions(request, runtime);
  }

  /**
   * 获取日期提取结果的翻译
   * 
   * @param request - GetLogColumnTranslateResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogColumnTranslateResultResponse
   */
  async getLogColumnTranslateResultWithOptions(request: $_model.GetLogColumnTranslateResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogColumnTranslateResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnValue)) {
      query["ColumnValue"] = request.columnValue;
    }

    if (!$dara.isNull(request.translateConfig)) {
      query["TranslateConfig"] = request.translateConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogColumnTranslateResult",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogColumnTranslateResultResponse>(await this.callApi(params, req, runtime), new $_model.GetLogColumnTranslateResultResponse({}));
  }

  /**
   * 获取日期提取结果的翻译
   * 
   * @param request - GetLogColumnTranslateResultRequest
   * @returns GetLogColumnTranslateResultResponse
   */
  async getLogColumnTranslateResult(request: $_model.GetLogColumnTranslateResultRequest): Promise<$_model.GetLogColumnTranslateResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLogColumnTranslateResultWithOptions(request, runtime);
  }

  /**
   * @param request - GetMonitoringTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitoringTemplateResponse
   */
  async getMonitoringTemplateWithOptions(request: $_model.GetMonitoringTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitoringTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitoringTemplate",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitoringTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitoringTemplateResponse({}));
  }

  /**
   * @param request - GetMonitoringTemplateRequest
   * @returns GetMonitoringTemplateResponse
   */
  async getMonitoringTemplate(request: $_model.GetMonitoringTemplateRequest): Promise<$_model.GetMonitoringTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMonitoringTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - GetMyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMyGroupsResponse
   */
  async getMyGroupsWithOptions(request: $_model.GetMyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindUrl)) {
      query["BindUrl"] = request.bindUrl;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.selectContactGroups)) {
      query["SelectContactGroups"] = request.selectContactGroups;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMyGroups",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.GetMyGroupsResponse({}));
  }

  /**
   * @param request - GetMyGroupsRequest
   * @returns GetMyGroupsResponse
   */
  async getMyGroups(request: $_model.GetMyGroupsRequest): Promise<$_model.GetMyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMyGroupsWithOptions(request, runtime);
  }

  /**
   * ListAlarm
   * 
   * @param request - ListAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmResponse
   */
  async listAlarmWithOptions(request: $_model.ListAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ListAlarmResponse({}));
  }

  /**
   * ListAlarm
   * 
   * @param request - ListAlarmRequest
   * @returns ListAlarmResponse
   */
  async listAlarm(request: $_model.ListAlarmRequest): Promise<$_model.ListAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmWithOptions(request, runtime);
  }

  /**
   * ListAlarmHistory
   * 
   * @param request - ListAlarmHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlarmHistoryResponse
   */
  async listAlarmHistoryWithOptions(request: $_model.ListAlarmHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlarmHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlarmHistory",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlarmHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListAlarmHistoryResponse({}));
  }

  /**
   * ListAlarmHistory
   * 
   * @param request - ListAlarmHistoryRequest
   * @returns ListAlarmHistoryResponse
   */
  async listAlarmHistory(request: $_model.ListAlarmHistoryRequest): Promise<$_model.ListAlarmHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlarmHistoryWithOptions(request, runtime);
  }

  /**
   * @param request - ListContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListContactGroupResponse
   */
  async listContactGroupWithOptions(request: $_model.ListContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListContactGroupResponse> {
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
      action: "ListContactGroup",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListContactGroupResponse({}));
  }

  /**
   * @param request - ListContactGroupRequest
   * @returns ListContactGroupResponse
   */
  async listContactGroup(request: $_model.ListContactGroupRequest): Promise<$_model.ListContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - ListEventRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventRulesResponse
   */
  async listEventRulesWithOptions(request: $_model.ListEventRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventRules",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListEventRulesResponse({}));
  }

  /**
   * @param request - ListEventRulesRequest
   * @returns ListEventRulesResponse
   */
  async listEventRules(request: $_model.ListEventRulesRequest): Promise<$_model.ListEventRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMyGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyGroupInstancesResponse
   */
  async listMyGroupInstancesWithOptions(request: $_model.ListMyGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyGroupInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.total)) {
      query["Total"] = request.total;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyGroupInstances",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListMyGroupInstancesResponse({}));
  }

  /**
   * @param request - ListMyGroupInstancesRequest
   * @returns ListMyGroupInstancesResponse
   */
  async listMyGroupInstances(request: $_model.ListMyGroupInstancesRequest): Promise<$_model.ListMyGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMyGroupInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - ListMyGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMyGroupsResponse
   */
  async listMyGroupsWithOptions(request: $_model.ListMyGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMyGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindUrls)) {
      query["BindUrls"] = request.bindUrls;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.selectContactGroups)) {
      query["SelectContactGroups"] = request.selectContactGroups;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMyGroups",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMyGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListMyGroupsResponse({}));
  }

  /**
   * @param request - ListMyGroupsRequest
   * @returns ListMyGroupsResponse
   */
  async listMyGroups(request: $_model.ListMyGroupsRequest): Promise<$_model.ListMyGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMyGroupsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTaskResponse
   */
  async modifyTaskWithOptions(request: $_model.ModifyTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.alertRule)) {
      query["AlertRule"] = request.alertRule;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.intervalUnit)) {
      query["IntervalUnit"] = request.intervalUnit;
    }

    if (!$dara.isNull(request.ispCity)) {
      query["IspCity"] = request.ispCity;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.caller)) {
      query["caller"] = request.caller;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTask",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTaskResponse({}));
  }

  /**
   * @param request - ModifyTaskRequest
   * @returns ModifyTaskResponse
   */
  async modifyTask(request: $_model.ModifyTaskRequest): Promise<$_model.ModifyTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyTaskWithOptions(request, runtime);
  }

  /**
   * NodeList
   * 
   * @param request - NodeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NodeListResponse
   */
  async nodeListWithOptions(request: $_model.NodeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NodeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.instanceRegionId)) {
      query["InstanceRegionId"] = request.instanceRegionId;
    }

    if (!$dara.isNull(request.keyWord)) {
      query["KeyWord"] = request.keyWord;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serialNumbers)) {
      query["SerialNumbers"] = request.serialNumbers;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NodeList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NodeListResponse>(await this.callApi(params, req, runtime), new $_model.NodeListResponse({}));
  }

  /**
   * NodeList
   * 
   * @param request - NodeListRequest
   * @returns NodeListResponse
   */
  async nodeList(request: $_model.NodeListRequest): Promise<$_model.NodeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nodeListWithOptions(request, runtime);
  }

  /**
   * NodeProcessCreate
   * 
   * @param request - NodeProcessCreateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NodeProcessCreateResponse
   */
  async nodeProcessCreateWithOptions(request: $_model.NodeProcessCreateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NodeProcessCreateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    if (!$dara.isNull(request.processUser)) {
      query["ProcessUser"] = request.processUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NodeProcessCreate",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NodeProcessCreateResponse>(await this.callApi(params, req, runtime), new $_model.NodeProcessCreateResponse({}));
  }

  /**
   * NodeProcessCreate
   * 
   * @param request - NodeProcessCreateRequest
   * @returns NodeProcessCreateResponse
   */
  async nodeProcessCreate(request: $_model.NodeProcessCreateRequest): Promise<$_model.NodeProcessCreateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nodeProcessCreateWithOptions(request, runtime);
  }

  /**
   * NodeProcesses
   * 
   * @param request - NodeProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NodeProcessesResponse
   */
  async nodeProcessesWithOptions(request: $_model.NodeProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NodeProcessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NodeProcesses",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NodeProcessesResponse>(await this.callApi(params, req, runtime), new $_model.NodeProcessesResponse({}));
  }

  /**
   * NodeProcesses
   * 
   * @param request - NodeProcessesRequest
   * @returns NodeProcessesResponse
   */
  async nodeProcesses(request: $_model.NodeProcessesRequest): Promise<$_model.NodeProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nodeProcessesWithOptions(request, runtime);
  }

  /**
   * NodeStatusList
   * 
   * @param request - NodeStatusListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NodeStatusListResponse
   */
  async nodeStatusListWithOptions(request: $_model.NodeStatusListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NodeStatusListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NodeStatusList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NodeStatusListResponse>(await this.callApi(params, req, runtime), new $_model.NodeStatusListResponse({}));
  }

  /**
   * NodeStatusList
   * 
   * @param request - NodeStatusListRequest
   * @returns NodeStatusListResponse
   */
  async nodeStatusList(request: $_model.NodeStatusListRequest): Promise<$_model.NodeStatusListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nodeStatusListWithOptions(request, runtime);
  }

  /**
   * NodeUninstall
   * 
   * @param request - NodeUninstallRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NodeUninstallResponse
   */
  async nodeUninstallWithOptions(request: $_model.NodeUninstallRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NodeUninstallResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NodeUninstall",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NodeUninstallResponse>(await this.callApi(params, req, runtime), new $_model.NodeUninstallResponse({}));
  }

  /**
   * NodeUninstall
   * 
   * @param request - NodeUninstallRequest
   * @returns NodeUninstallResponse
   */
  async nodeUninstall(request: $_model.NodeUninstallRequest): Promise<$_model.NodeUninstallResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.nodeUninstallWithOptions(request, runtime);
  }

  /**
   * PutCustomMetric
   * 
   * @param request - PutCustomMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutCustomMetricResponse
   */
  async putCustomMetricWithOptions(request: $_model.PutCustomMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutCustomMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutCustomMetric",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutCustomMetricResponse>(await this.callApi(params, req, runtime), new $_model.PutCustomMetricResponse({}));
  }

  /**
   * PutCustomMetric
   * 
   * @param request - PutCustomMetricRequest
   * @returns PutCustomMetricResponse
   */
  async putCustomMetric(request: $_model.PutCustomMetricRequest): Promise<$_model.PutCustomMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCustomMetricWithOptions(request, runtime);
  }

  /**
   * PutEvent
   * 
   * @param request - PutEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEventResponse
   */
  async putEventWithOptions(request: $_model.PutEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventInfo)) {
      query["EventInfo"] = request.eventInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEvent",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEventResponse>(await this.callApi(params, req, runtime), new $_model.PutEventResponse({}));
  }

  /**
   * PutEvent
   * 
   * @param request - PutEventRequest
   * @returns PutEventResponse
   */
  async putEvent(request: $_model.PutEventRequest): Promise<$_model.PutEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEventWithOptions(request, runtime);
  }

  /**
   * @param request - PutEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEventRuleResponse
   */
  async putEventRuleWithOptions(request: $_model.PutEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEventRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.eventPattern)) {
      query["EventPattern"] = request.eventPattern;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEventRule",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutEventRuleResponse({}));
  }

  /**
   * @param request - PutEventRuleRequest
   * @returns PutEventRuleResponse
   */
  async putEventRule(request: $_model.PutEventRuleRequest): Promise<$_model.PutEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEventRuleWithOptions(request, runtime);
  }

  /**
   * @param request - PutEventTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEventTargetsResponse
   */
  async putEventTargetsWithOptions(request: $_model.PutEventTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEventTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactParameters)) {
      query["ContactParameters"] = request.contactParameters;
    }

    if (!$dara.isNull(request.fcParameters)) {
      query["FcParameters"] = request.fcParameters;
    }

    if (!$dara.isNull(request.mnsParameters)) {
      query["MnsParameters"] = request.mnsParameters;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.slsParameters)) {
      query["SlsParameters"] = request.slsParameters;
    }

    if (!$dara.isNull(request.webhookParameters)) {
      query["WebhookParameters"] = request.webhookParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEventTargets",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEventTargetsResponse>(await this.callApi(params, req, runtime), new $_model.PutEventTargetsResponse({}));
  }

  /**
   * @param request - PutEventTargetsRequest
   * @returns PutEventTargetsResponse
   */
  async putEventTargets(request: $_model.PutEventTargetsRequest): Promise<$_model.PutEventTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEventTargetsWithOptions(request, runtime);
  }

  /**
   * PutMetricRuleTargets
   * 
   * @param request - PutMetricRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargetsWithOptions(request: $_model.PutMetricRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMetricRuleTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actions)) {
      body["Actions"] = request.actions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMetricRuleTargets",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new $_model.PutMetricRuleTargetsResponse({}));
  }

  /**
   * PutMetricRuleTargets
   * 
   * @param request - PutMetricRuleTargetsRequest
   * @returns PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargets(request: $_model.PutMetricRuleTargetsRequest): Promise<$_model.PutMetricRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
   * PutResourceMetricRule
   * 
   * @param request - PutResourceMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutResourceMetricRuleResponse
   */
  async putResourceMetricRuleWithOptions(request: $_model.PutResourceMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutResourceMetricRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!$dara.isNull(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    if (!$dara.isNull(request.escalations)) {
      query["Escalations"] = request.escalations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutResourceMetricRule",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutResourceMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutResourceMetricRuleResponse({}));
  }

  /**
   * PutResourceMetricRule
   * 
   * @param request - PutResourceMetricRuleRequest
   * @returns PutResourceMetricRuleResponse
   */
  async putResourceMetricRule(request: $_model.PutResourceMetricRuleRequest): Promise<$_model.PutResourceMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putResourceMetricRuleWithOptions(request, runtime);
  }

  /**
   * @param request - QueryCustomMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCustomMetricListResponse
   */
  async queryCustomMetricListWithOptions(request: $_model.QueryCustomMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCustomMetricListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimension)) {
      query["Dimension"] = request.dimension;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.md5)) {
      query["Md5"] = request.md5;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCustomMetricList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCustomMetricListResponse>(await this.callApi(params, req, runtime), new $_model.QueryCustomMetricListResponse({}));
  }

  /**
   * @param request - QueryCustomMetricListRequest
   * @returns QueryCustomMetricListResponse
   */
  async queryCustomMetricList(request: $_model.QueryCustomMetricListRequest): Promise<$_model.QueryCustomMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCustomMetricListWithOptions(request, runtime);
  }

  /**
   * QueryMetricData
   * 
   * @param request - QueryMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricDataResponse
   */
  async queryMetricDataWithOptions(request: $_model.QueryMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.express)) {
      query["Express"] = request.express;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricData",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricDataResponse({}));
  }

  /**
   * QueryMetricData
   * 
   * @param request - QueryMetricDataRequest
   * @returns QueryMetricDataResponse
   */
  async queryMetricData(request: $_model.QueryMetricDataRequest): Promise<$_model.QueryMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricDataWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMetricLastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricLastResponse
   */
  async queryMetricLastWithOptions(request: $_model.QueryMetricLastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricLastResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.express)) {
      query["Express"] = request.express;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricLast",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricLastResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricLastResponse({}));
  }

  /**
   * @param request - QueryMetricLastRequest
   * @returns QueryMetricLastResponse
   */
  async queryMetricLast(request: $_model.QueryMetricLastRequest): Promise<$_model.QueryMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricLastWithOptions(request, runtime);
  }

  /**
   * @param request - QueryMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricListResponse
   */
  async queryMetricListWithOptions(request: $_model.QueryMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.express)) {
      query["Express"] = request.express;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricListResponse({}));
  }

  /**
   * @param request - QueryMetricListRequest
   * @returns QueryMetricListResponse
   */
  async queryMetricList(request: $_model.QueryMetricListRequest): Promise<$_model.QueryMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricListWithOptions(request, runtime);
  }

  /**
   * 查询云监控开放的监控项详情
   * 
   * @param request - QueryMetricMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricMetaResponse
   */
  async queryMetricMetaWithOptions(request: $_model.QueryMetricMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricMeta",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricMetaResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricMetaResponse({}));
  }

  /**
   * 查询云监控开放的监控项详情
   * 
   * @param request - QueryMetricMetaRequest
   * @returns QueryMetricMetaResponse
   */
  async queryMetricMeta(request: $_model.QueryMetricMetaRequest): Promise<$_model.QueryMetricMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricMetaWithOptions(request, runtime);
  }

  /**
   * QueryMetricTop
   * 
   * @param request - QueryMetricTopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricTopResponse
   */
  async queryMetricTopWithOptions(request: $_model.QueryMetricTopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricTopResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.express)) {
      query["Express"] = request.express;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.orderDesc)) {
      query["OrderDesc"] = request.orderDesc;
    }

    if (!$dara.isNull(request.orderby)) {
      query["Orderby"] = request.orderby;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.project)) {
      query["Project"] = request.project;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricTop",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricTopResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricTopResponse({}));
  }

  /**
   * QueryMetricTop
   * 
   * @param request - QueryMetricTopRequest
   * @returns QueryMetricTopResponse
   */
  async queryMetricTop(request: $_model.QueryMetricTopRequest): Promise<$_model.QueryMetricTopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricTopWithOptions(request, runtime);
  }

  /**
   * 查询云监控支持的时序类监控项产品列表
   * 
   * @param request - QueryProjectMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryProjectMetaResponse
   */
  async queryProjectMetaWithOptions(request: $_model.QueryProjectMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryProjectMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
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
      action: "QueryProjectMeta",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryProjectMetaResponse>(await this.callApi(params, req, runtime), new $_model.QueryProjectMetaResponse({}));
  }

  /**
   * 查询云监控支持的时序类监控项产品列表
   * 
   * @param request - QueryProjectMetaRequest
   * @returns QueryProjectMetaResponse
   */
  async queryProjectMeta(request: $_model.QueryProjectMetaRequest): Promise<$_model.QueryProjectMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryProjectMetaWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStaticsAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStaticsAvailabilityResponse
   */
  async queryStaticsAvailabilityWithOptions(request: $_model.QueryStaticsAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStaticsAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStaticsAvailability",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStaticsAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.QueryStaticsAvailabilityResponse({}));
  }

  /**
   * @param request - QueryStaticsAvailabilityRequest
   * @returns QueryStaticsAvailabilityResponse
   */
  async queryStaticsAvailability(request: $_model.QueryStaticsAvailabilityRequest): Promise<$_model.QueryStaticsAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStaticsAvailabilityWithOptions(request, runtime);
  }

  /**
   * @param request - QueryStaticsResponseTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryStaticsResponseTimeResponse
   */
  async queryStaticsResponseTimeWithOptions(request: $_model.QueryStaticsResponseTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryStaticsResponseTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryStaticsResponseTime",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryStaticsResponseTimeResponse>(await this.callApi(params, req, runtime), new $_model.QueryStaticsResponseTimeResponse({}));
  }

  /**
   * @param request - QueryStaticsResponseTimeRequest
   * @returns QueryStaticsResponseTimeResponse
   */
  async queryStaticsResponseTime(request: $_model.QueryStaticsResponseTimeRequest): Promise<$_model.QueryStaticsResponseTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryStaticsResponseTimeWithOptions(request, runtime);
  }

  /**
   * QuerySystemEventCount
   * 
   * @param request - QuerySystemEventCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySystemEventCountResponse
   */
  async querySystemEventCountWithOptions(request: $_model.QuerySystemEventCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySystemEventCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryJson)) {
      query["QueryJson"] = request.queryJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySystemEventCount",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySystemEventCountResponse>(await this.callApi(params, req, runtime), new $_model.QuerySystemEventCountResponse({}));
  }

  /**
   * QuerySystemEventCount
   * 
   * @param request - QuerySystemEventCountRequest
   * @returns QuerySystemEventCountResponse
   */
  async querySystemEventCount(request: $_model.QuerySystemEventCountRequest): Promise<$_model.QuerySystemEventCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySystemEventCountWithOptions(request, runtime);
  }

  /**
   * @param request - QuerySystemEventDemoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySystemEventDemoResponse
   */
  async querySystemEventDemoWithOptions(request: $_model.QuerySystemEventDemoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySystemEventDemoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySystemEventDemo",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySystemEventDemoResponse>(await this.callApi(params, req, runtime), new $_model.QuerySystemEventDemoResponse({}));
  }

  /**
   * @param request - QuerySystemEventDemoRequest
   * @returns QuerySystemEventDemoResponse
   */
  async querySystemEventDemo(request: $_model.QuerySystemEventDemoRequest): Promise<$_model.QuerySystemEventDemoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySystemEventDemoWithOptions(request, runtime);
  }

  /**
   * @param request - QueryTaskConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskConfigResponse
   */
  async queryTaskConfigWithOptions(request: $_model.QueryTaskConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskConfig",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskConfigResponse({}));
  }

  /**
   * @param request - QueryTaskConfigRequest
   * @returns QueryTaskConfigResponse
   */
  async queryTaskConfig(request: $_model.QueryTaskConfigRequest): Promise<$_model.QueryTaskConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskConfigWithOptions(request, runtime);
  }

  /**
   * QueryTaskMonitorData
   * 
   * @param request - QueryTaskMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryTaskMonitorDataResponse
   */
  async queryTaskMonitorDataWithOptions(request: $_model.QueryTaskMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryTaskMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cursor)) {
      query["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.metricName)) {
      query["metricName"] = request.metricName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryTaskMonitorData",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryTaskMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.QueryTaskMonitorDataResponse({}));
  }

  /**
   * QueryTaskMonitorData
   * 
   * @param request - QueryTaskMonitorDataRequest
   * @returns QueryTaskMonitorDataResponse
   */
  async queryTaskMonitorData(request: $_model.QueryTaskMonitorDataRequest): Promise<$_model.QueryTaskMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryTaskMonitorDataWithOptions(request, runtime);
  }

  /**
   * @param request - TaskConfigListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TaskConfigListResponse
   */
  async taskConfigListWithOptions(request: $_model.TaskConfigListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TaskConfigListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TaskConfigList",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TaskConfigListResponse>(await this.callApi(params, req, runtime), new $_model.TaskConfigListResponse({}));
  }

  /**
   * @param request - TaskConfigListRequest
   * @returns TaskConfigListResponse
   */
  async taskConfigList(request: $_model.TaskConfigListRequest): Promise<$_model.TaskConfigListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.taskConfigListWithOptions(request, runtime);
  }

  /**
   * UpdateAlarm
   * 
   * @param request - UpdateAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlarmResponse
   */
  async updateAlarmWithOptions(request: $_model.UpdateAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statistics)) {
      query["Statistics"] = request.statistics;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlarm",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlarmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlarmResponse({}));
  }

  /**
   * UpdateAlarm
   * 
   * @param request - UpdateAlarmRequest
   * @returns UpdateAlarmResponse
   */
  async updateAlarm(request: $_model.UpdateAlarmRequest): Promise<$_model.UpdateAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlarmWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateMonitoringTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMonitoringTemplateResponse
   */
  async updateMonitoringTemplateWithOptions(request: $_model.UpdateMonitoringTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMonitoringTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertTemplatesJson)) {
      query["AlertTemplatesJson"] = request.alertTemplatesJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.hostAvailabilityTemplate)) {
      query["HostAvailabilityTemplate"] = request.hostAvailabilityTemplate;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.processMonitorTemplates)) {
      query["ProcessMonitorTemplates"] = request.processMonitorTemplates;
    }

    if (!$dara.isNull(request.restVersion)) {
      query["RestVersion"] = request.restVersion;
    }

    if (!$dara.isNull(request.systemEventTemplates)) {
      query["SystemEventTemplates"] = request.systemEventTemplates;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMonitoringTemplate",
      version: "2018-03-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMonitoringTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMonitoringTemplateResponse({}));
  }

  /**
   * @param request - UpdateMonitoringTemplateRequest
   * @returns UpdateMonitoringTemplateResponse
   */
  async updateMonitoringTemplate(request: $_model.UpdateMonitoringTemplateRequest): Promise<$_model.UpdateMonitoringTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMonitoringTemplateWithOptions(request, runtime);
  }

}
