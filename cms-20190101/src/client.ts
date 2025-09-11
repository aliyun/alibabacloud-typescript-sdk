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
   * Adds tags to an application group.
   * 
   * @remarks
   * This topic provides an example on how to add a tag to an application group whose ID is `7301****`. In this example, the key of the tag is `key1` and the value of the tag is `value1`.
   * 
   * @param request - AddTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagsResponse
   */
  async addTagsWithOptions(request: $_model.AddTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTagsResponse>(await this.callApi(params, req, runtime), new $_model.AddTagsResponse({}));
  }

  /**
   * Adds tags to an application group.
   * 
   * @remarks
   * This topic provides an example on how to add a tag to an application group whose ID is `7301****`. In this example, the key of the tag is `key1` and the value of the tag is `value1`.
   * 
   * @param request - AddTagsRequest
   * @returns AddTagsResponse
   */
  async addTags(request: $_model.AddTagsRequest): Promise<$_model.AddTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTagsWithOptions(request, runtime);
  }

  /**
   * Applies an alert template to an application group to generate an alert rule.
   * 
   * @remarks
   * In this example, the `700****` alert template is applied to the `123456` application group. For the generated alert rule, the ID is `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`, and the name is `test123`.
   * 
   * @param request - ApplyMetricRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyMetricRuleTemplateResponse
   */
  async applyMetricRuleTemplateWithOptions(request: $_model.ApplyMetricRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyMetricRuleTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appendMode)) {
      query["AppendMode"] = request.appendMode;
    }

    if (!$dara.isNull(request.applyMode)) {
      query["ApplyMode"] = request.applyMode;
    }

    if (!$dara.isNull(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!$dara.isNull(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.notifyLevel)) {
      query["NotifyLevel"] = request.notifyLevel;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.webhook)) {
      query["Webhook"] = request.webhook;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ApplyMetricRuleTemplateResponse({}));
  }

  /**
   * Applies an alert template to an application group to generate an alert rule.
   * 
   * @remarks
   * In this example, the `700****` alert template is applied to the `123456` application group. For the generated alert rule, the ID is `applyTemplate8ab74c6b-9f27-47ab-8841-de01dc08****`, and the name is `test123`.
   * 
   * @param request - ApplyMetricRuleTemplateRequest
   * @returns ApplyMetricRuleTemplateResponse
   */
  async applyMetricRuleTemplate(request: $_model.ApplyMetricRuleTemplateRequest): Promise<$_model.ApplyMetricRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyMetricRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Creates site monitoring tasks.
   * 
   * @remarks
   * This topic provides an example on how to create a site monitoring task named `HangZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTP`. The returned result shows that the site monitoring task is created. The name of the site monitoring task is `HangZhou_ECS1` and the task ID is `679fbe4f-b80b-4706-91b2-5427b43e****`.
   * 
   * @param request - BatchCreateInstantSiteMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateInstantSiteMonitorResponse
   */
  async batchCreateInstantSiteMonitorWithOptions(request: $_model.BatchCreateInstantSiteMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateInstantSiteMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskList)) {
      query["TaskList"] = request.taskList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateInstantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateInstantSiteMonitorResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateInstantSiteMonitorResponse({}));
  }

  /**
   * Creates site monitoring tasks.
   * 
   * @remarks
   * This topic provides an example on how to create a site monitoring task named `HangZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTP`. The returned result shows that the site monitoring task is created. The name of the site monitoring task is `HangZhou_ECS1` and the task ID is `679fbe4f-b80b-4706-91b2-5427b43e****`.
   * 
   * @param request - BatchCreateInstantSiteMonitorRequest
   * @returns BatchCreateInstantSiteMonitorResponse
   */
  async batchCreateInstantSiteMonitor(request: $_model.BatchCreateInstantSiteMonitorRequest): Promise<$_model.BatchCreateInstantSiteMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateInstantSiteMonitorWithOptions(request, runtime);
  }

  /**
   * Exports the monitoring data that is defined in the Cursor operation.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The `Cursor` information is returned by calling the [Cursor](https://help.aliyun.com/document_detail/2330730.html) operation.
   * ### [](#)Description
   * This topic provides an example on how to export the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The `Cursor` information is specified. A maximum of 1,000 data entries can be returned in each response.
   * 
   * @param tmpReq - BatchExportRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchExportResponse
   */
  async batchExportWithOptions(tmpReq: $_model.BatchExportRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchExportResponse> {
    tmpReq.validate();
    let request = new $_model.BatchExportShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.measurements)) {
      request.measurementsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.measurements, "Measurements", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      body["Cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.length)) {
      body["Length"] = request.length;
    }

    if (!$dara.isNull(request.measurementsShrink)) {
      body["Measurements"] = request.measurementsShrink;
    }

    if (!$dara.isNull(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchExport",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchExportResponse>(await this.callApi(params, req, runtime), new $_model.BatchExportResponse({}));
  }

  /**
   * Exports the monitoring data that is defined in the Cursor operation.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * The `Cursor` information is returned by calling the [Cursor](https://help.aliyun.com/document_detail/2330730.html) operation.
   * ### [](#)Description
   * This topic provides an example on how to export the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The `Cursor` information is specified. A maximum of 1,000 data entries can be returned in each response.
   * 
   * @param request - BatchExportRequest
   * @returns BatchExportResponse
   */
  async batchExport(request: $_model.BatchExportRequest): Promise<$_model.BatchExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchExportWithOptions(request, runtime);
  }

  /**
   * Creates an application group based on the tags of cloud resources.
   * 
   * @remarks
   * This operation is available for Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB).
   * This topic provides an example to show how to create an application group for resources whose tag key is `ecs_instance`. In this example, the alert contact group of the application group is `ECS_Group`.
   * 
   * @param request - CreateDynamicTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDynamicTagGroupResponse
   */
  async createDynamicTagGroupWithOptions(request: $_model.CreateDynamicTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDynamicTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!$dara.isNull(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!$dara.isNull(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!$dara.isNull(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!$dara.isNull(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!$dara.isNull(request.templateIdList)) {
      query["TemplateIdList"] = request.templateIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDynamicTagGroupResponse({}));
  }

  /**
   * Creates an application group based on the tags of cloud resources.
   * 
   * @remarks
   * This operation is available for Elastic Compute Service (ECS), ApsaraDB RDS, and Server Load Balancer (SLB).
   * This topic provides an example to show how to create an application group for resources whose tag key is `ecs_instance`. In this example, the alert contact group of the application group is `ECS_Group`.
   * 
   * @param request - CreateDynamicTagGroupRequest
   * @returns CreateDynamicTagGroupResponse
   */
  async createDynamicTagGroup(request: $_model.CreateDynamicTagGroupRequest): Promise<$_model.CreateDynamicTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDynamicTagGroupWithOptions(request, runtime);
  }

  /**
   * Creates one or more alert rules for a specified application group.
   * 
   * @remarks
   * This topic provides an example to show how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `123456` application group. The ID of the alert rule is `456789`. The name of the alert rule is `ECS_Rule1`. The alert level is `Critical`. The statistical method is `Average`. The comparison operator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The response shows that the alert rule named `ECS_Rule1` is created.
   * 
   * @param request - CreateGroupMetricRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupMetricRulesResponse
   */
  async createGroupMetricRulesWithOptions(request: $_model.CreateGroupMetricRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupMetricRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupMetricRules)) {
      query["GroupMetricRules"] = request.groupMetricRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroupMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupMetricRulesResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupMetricRulesResponse({}));
  }

  /**
   * Creates one or more alert rules for a specified application group.
   * 
   * @remarks
   * This topic provides an example to show how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `123456` application group. The ID of the alert rule is `456789`. The name of the alert rule is `ECS_Rule1`. The alert level is `Critical`. The statistical method is `Average`. The comparison operator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The response shows that the alert rule named `ECS_Rule1` is created.
   * 
   * @param request - CreateGroupMetricRulesRequest
   * @returns CreateGroupMetricRulesResponse
   */
  async createGroupMetricRules(request: $_model.CreateGroupMetricRulesRequest): Promise<$_model.CreateGroupMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupMetricRulesWithOptions(request, runtime);
  }

  /**
   * Creates a process monitoring task for an application group.
   * 
   * @param request - CreateGroupMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupMonitoringAgentProcessResponse
   */
  async createGroupMonitoringAgentProcessWithOptions(request: $_model.CreateGroupMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.matchExpress)) {
      query["MatchExpress"] = request.matchExpress;
    }

    if (!$dara.isNull(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    if (!$dara.isNull(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupMonitoringAgentProcessResponse({}));
  }

  /**
   * Creates a process monitoring task for an application group.
   * 
   * @param request - CreateGroupMonitoringAgentProcessRequest
   * @returns CreateGroupMonitoringAgentProcessResponse
   */
  async createGroupMonitoringAgentProcess(request: $_model.CreateGroupMonitoringAgentProcessRequest): Promise<$_model.CreateGroupMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Creates an availability monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to create an availability monitoring task named `task1` in an application group named `123456`. The TaskType parameter of the task is set to `HTTP`. After you start the task, the system sends alerts by using the specified email address and DingTalk chatbot.
   * 
   * @param request - CreateHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHostAvailabilityResponse
   */
  async createHostAvailabilityWithOptions(request: $_model.CreateHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!$dara.isNull(request.alertConfigTargetList)) {
      query["AlertConfigTargetList"] = request.alertConfigTargetList;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.taskOption)) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.CreateHostAvailabilityResponse({}));
  }

  /**
   * Creates an availability monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to create an availability monitoring task named `task1` in an application group named `123456`. The TaskType parameter of the task is set to `HTTP`. After you start the task, the system sends alerts by using the specified email address and DingTalk chatbot.
   * 
   * @param request - CreateHostAvailabilityRequest
   * @returns CreateHostAvailabilityResponse
   */
  async createHostAvailability(request: $_model.CreateHostAvailabilityRequest): Promise<$_model.CreateHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * Creates a namespace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Operation description
   * This topic provides an example on how to create a namespace named `aliyun`. In this example, the data retention period of the namespace is set to `cms.s1.3xlarge`. The returned result indicates that the namespace is created.
   * 
   * @param request - CreateHybridMonitorNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridMonitorNamespaceResponse
   */
  async createHybridMonitorNamespaceWithOptions(request: $_model.CreateHybridMonitorNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridMonitorNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.namespaceRegion)) {
      query["NamespaceRegion"] = request.namespaceRegion;
    }

    if (!$dara.isNull(request.namespaceType)) {
      query["NamespaceType"] = request.namespaceType;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridMonitorNamespaceResponse({}));
  }

  /**
   * Creates a namespace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Operation description
   * This topic provides an example on how to create a namespace named `aliyun`. In this example, the data retention period of the namespace is set to `cms.s1.3xlarge`. The returned result indicates that the namespace is created.
   * 
   * @param request - CreateHybridMonitorNamespaceRequest
   * @returns CreateHybridMonitorNamespaceResponse
   */
  async createHybridMonitorNamespace(request: $_model.CreateHybridMonitorNamespaceRequest): Promise<$_model.CreateHybridMonitorNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a Logstore group of Hybrid Cloud Monitoring.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Simple Log Service is activated. A project and a Logstore are created in Simple Log Service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/54604.html).
   * ### [](#)Operation description
   * This topic provides an example on how to create a Logstore group named `Logstore_test`. The region ID is `cn-hangzhou`. The project is `aliyun-project`. The Logstore is `Logstore-ECS`. The response shows that the Logstore group is created.
   * 
   * @param request - CreateHybridMonitorSLSGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridMonitorSLSGroupResponse
   */
  async createHybridMonitorSLSGroupWithOptions(request: $_model.CreateHybridMonitorSLSGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridMonitorSLSGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SLSGroupConfig)) {
      query["SLSGroupConfig"] = request.SLSGroupConfig;
    }

    if (!$dara.isNull(request.SLSGroupDescription)) {
      query["SLSGroupDescription"] = request.SLSGroupDescription;
    }

    if (!$dara.isNull(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridMonitorSLSGroupResponse({}));
  }

  /**
   * Creates a Logstore group of Hybrid Cloud Monitoring.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Simple Log Service is activated. A project and a Logstore are created in Simple Log Service. For more information, see [Getting Started](https://help.aliyun.com/document_detail/54604.html).
   * ### [](#)Operation description
   * This topic provides an example on how to create a Logstore group named `Logstore_test`. The region ID is `cn-hangzhou`. The project is `aliyun-project`. The Logstore is `Logstore-ECS`. The response shows that the Logstore group is created.
   * 
   * @param request - CreateHybridMonitorSLSGroupRequest
   * @returns CreateHybridMonitorSLSGroupResponse
   */
  async createHybridMonitorSLSGroup(request: $_model.CreateHybridMonitorSLSGroupRequest): Promise<$_model.CreateHybridMonitorSLSGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
   * Creates a metric import task for an Alibaba Cloud service or creates a metric for logs imported from Simple Log Service.
   * 
   * @remarks
   * # [](#)Prerequisites
   * *   Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * *   If you want to create a metric for logs imported from Simple Log Service, make sure that you have activated Simple Log Service and created a project and a Logstore. For more information, see [Getting Started](https://help.aliyun.com/document_detail/54604.html).
   * # [](#)Description
   * This topic provides an example on how to create a metric import task named `aliyun_task` for Elastic Compute Service (ECS). The task imports the `cpu_total` metric to the `aliyun` namespace. The response shows that the metric import task is created.
   * 
   * @param request - CreateHybridMonitorTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHybridMonitorTaskResponse
   */
  async createHybridMonitorTaskWithOptions(request: $_model.CreateHybridMonitorTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHybridMonitorTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attachLabels)) {
      query["AttachLabels"] = request.attachLabels;
    }

    if (!$dara.isNull(request.cloudAccessId)) {
      query["CloudAccessId"] = request.cloudAccessId;
    }

    if (!$dara.isNull(request.collectInterval)) {
      query["CollectInterval"] = request.collectInterval;
    }

    if (!$dara.isNull(request.collectTargetType)) {
      query["CollectTargetType"] = request.collectTargetType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.SLSProcessConfig)) {
      query["SLSProcessConfig"] = request.SLSProcessConfig;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!$dara.isNull(request.targetUserIdList)) {
      query["TargetUserIdList"] = request.targetUserIdList;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.YARMConfig)) {
      query["YARMConfig"] = request.YARMConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateHybridMonitorTaskResponse({}));
  }

  /**
   * Creates a metric import task for an Alibaba Cloud service or creates a metric for logs imported from Simple Log Service.
   * 
   * @remarks
   * # [](#)Prerequisites
   * *   Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * *   If you want to create a metric for logs imported from Simple Log Service, make sure that you have activated Simple Log Service and created a project and a Logstore. For more information, see [Getting Started](https://help.aliyun.com/document_detail/54604.html).
   * # [](#)Description
   * This topic provides an example on how to create a metric import task named `aliyun_task` for Elastic Compute Service (ECS). The task imports the `cpu_total` metric to the `aliyun` namespace. The response shows that the metric import task is created.
   * 
   * @param request - CreateHybridMonitorTaskRequest
   * @returns CreateHybridMonitorTaskResponse
   */
  async createHybridMonitorTask(request: $_model.CreateHybridMonitorTaskRequest): Promise<$_model.CreateHybridMonitorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createHybridMonitorTaskWithOptions(request, runtime);
  }

  /**
   * Creates an instant test task.
   * 
   * @remarks
   * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring. 
   * This topic provides an example to show how to create an instant test task. The name of the task is `task1`. The tested address is `http://www.aliyun.com`. The test type is `HTTP`. The number of detection points is `1`.
   * 
   * @param request - CreateInstantSiteMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstantSiteMonitorResponse
   */
  async createInstantSiteMonitorWithOptions(request: $_model.CreateInstantSiteMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstantSiteMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.agentGroup)) {
      query["AgentGroup"] = request.agentGroup;
    }

    if (!$dara.isNull(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!$dara.isNull(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!$dara.isNull(request.randomIspCity)) {
      query["RandomIspCity"] = request.randomIspCity;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstantSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstantSiteMonitorResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstantSiteMonitorResponse({}));
  }

  /**
   * Creates an instant test task.
   * 
   * @remarks
   * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring. 
   * This topic provides an example to show how to create an instant test task. The name of the task is `task1`. The tested address is `http://www.aliyun.com`. The test type is `HTTP`. The number of detection points is `1`.
   * 
   * @param request - CreateInstantSiteMonitorRequest
   * @returns CreateInstantSiteMonitorResponse
   */
  async createInstantSiteMonitor(request: $_model.CreateInstantSiteMonitorRequest): Promise<$_model.CreateInstantSiteMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstantSiteMonitorWithOptions(request, runtime);
  }

  /**
   * Creates a blacklist policy.
   * 
   * @remarks
   * ### Background information
   * *   CloudMonitor blocks alert notifications based on the blacklist policies that take effect. To block alert notifications when the value of a metric that belongs to a cloud service reaches the threshold that you specified, add the metric to a blacklist policy.
   * *   CloudMonitor allows you to create blacklist policies only based on threshold metrics. You cannot create blacklist policies based on system events. For more information about the cloud services and the thresholds of the metrics that are supported by CloudMonitor, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @param request - CreateMetricRuleBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetricRuleBlackListResponse
   */
  async createMetricRuleBlackListWithOptions(request: $_model.CreateMetricRuleBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetricRuleBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!$dara.isNull(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetricRuleBlackListResponse({}));
  }

  /**
   * Creates a blacklist policy.
   * 
   * @remarks
   * ### Background information
   * *   CloudMonitor blocks alert notifications based on the blacklist policies that take effect. To block alert notifications when the value of a metric that belongs to a cloud service reaches the threshold that you specified, add the metric to a blacklist policy.
   * *   CloudMonitor allows you to create blacklist policies only based on threshold metrics. You cannot create blacklist policies based on system events. For more information about the cloud services and the thresholds of the metrics that are supported by CloudMonitor, see [Appendix 1: Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @param request - CreateMetricRuleBlackListRequest
   * @returns CreateMetricRuleBlackListResponse
   */
  async createMetricRuleBlackList(request: $_model.CreateMetricRuleBlackListRequest): Promise<$_model.CreateMetricRuleBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
   * Associates resources with an alert rule.
   * 
   * @param request - CreateMetricRuleResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetricRuleResourcesResponse
   */
  async createMetricRuleResourcesWithOptions(request: $_model.CreateMetricRuleResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetricRuleResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetricRuleResourcesResponse({}));
  }

  /**
   * Associates resources with an alert rule.
   * 
   * @param request - CreateMetricRuleResourcesRequest
   * @returns CreateMetricRuleResourcesResponse
   */
  async createMetricRuleResources(request: $_model.CreateMetricRuleResourcesRequest): Promise<$_model.CreateMetricRuleResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetricRuleResourcesWithOptions(request, runtime);
  }

  /**
   * Creates an alert template.
   * 
   * @param request - CreateMetricRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetricRuleTemplateResponse
   */
  async createMetricRuleTemplateWithOptions(request: $_model.CreateMetricRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetricRuleTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetricRuleTemplateResponse({}));
  }

  /**
   * Creates an alert template.
   * 
   * @param request - CreateMetricRuleTemplateRequest
   * @returns CreateMetricRuleTemplateResponse
   */
  async createMetricRuleTemplate(request: $_model.CreateMetricRuleTemplateRequest): Promise<$_model.CreateMetricRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetricRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a task to monitor a process.
   * 
   * @param request - CreateMonitorAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorAgentProcessResponse
   */
  async createMonitorAgentProcessWithOptions(request: $_model.CreateMonitorAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateMonitorAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorAgentProcessResponse({}));
  }

  /**
   * Creates a task to monitor a process.
   * 
   * @param request - CreateMonitorAgentProcessRequest
   * @returns CreateMonitorAgentProcessResponse
   */
  async createMonitorAgentProcess(request: $_model.CreateMonitorAgentProcessRequest): Promise<$_model.CreateMonitorAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorAgentProcessWithOptions(request, runtime);
  }

  /**
   * Creates an application group.
   * 
   * @remarks
   * In this example, an application group named `ECS_Group` is created.
   * 
   * @param request - CreateMonitorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupResponse
   */
  async createMonitorGroupWithOptions(request: $_model.CreateMonitorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupResponse({}));
  }

  /**
   * Creates an application group.
   * 
   * @remarks
   * In this example, an application group named `ECS_Group` is created.
   * 
   * @param request - CreateMonitorGroupRequest
   * @returns CreateMonitorGroupResponse
   */
  async createMonitorGroup(request: $_model.CreateMonitorGroupRequest): Promise<$_model.CreateMonitorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorGroupWithOptions(request, runtime);
  }

  /**
   * Creates an application group by using a resource group.
   * 
   * @remarks
   * This topic provides an example on how to create an application group by using the resource group `CloudMonitor` and the alert contact group `ECS_Group`. The region ID of the resource group is `cn-hangzhou`.
   * 
   * @param request - CreateMonitorGroupByResourceGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupByResourceGroupIdResponse
   */
  async createMonitorGroupByResourceGroupIdWithOptions(request: $_model.CreateMonitorGroupByResourceGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupByResourceGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupList)) {
      query["ContactGroupList"] = request.contactGroupList;
    }

    if (!$dara.isNull(request.enableInstallAgent)) {
      query["EnableInstallAgent"] = request.enableInstallAgent;
    }

    if (!$dara.isNull(request.enableSubscribeEvent)) {
      query["EnableSubscribeEvent"] = request.enableSubscribeEvent;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorGroupByResourceGroupId",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorGroupByResourceGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupByResourceGroupIdResponse({}));
  }

  /**
   * Creates an application group by using a resource group.
   * 
   * @remarks
   * This topic provides an example on how to create an application group by using the resource group `CloudMonitor` and the alert contact group `ECS_Group`. The region ID of the resource group is `cn-hangzhou`.
   * 
   * @param request - CreateMonitorGroupByResourceGroupIdRequest
   * @returns CreateMonitorGroupByResourceGroupIdResponse
   */
  async createMonitorGroupByResourceGroupId(request: $_model.CreateMonitorGroupByResourceGroupIdRequest): Promise<$_model.CreateMonitorGroupByResourceGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorGroupByResourceGroupIdWithOptions(request, runtime);
  }

  /**
   * Adds resources to an application group.
   * 
   * @remarks
   * You can add a maximum of 1,000 instances to an application group at a time. You can add a maximum of 3,000 instances of an Alibaba Cloud service to an application group. The total number of instances that you can add to an application group is unlimited.
   * In this example, an Elastic Compute Service (ECS) instance in the `China (Hangzhou)` region is added to the `3607****` application group. The instance ID is `i-2ze26xj5wwy12****` and the instance name is `test-instance-ecs`.
   * 
   * @param request - CreateMonitorGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupInstancesResponse
   */
  async createMonitorGroupInstancesWithOptions(request: $_model.CreateMonitorGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupInstancesResponse> {
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
      action: "CreateMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupInstancesResponse({}));
  }

  /**
   * Adds resources to an application group.
   * 
   * @remarks
   * You can add a maximum of 1,000 instances to an application group at a time. You can add a maximum of 3,000 instances of an Alibaba Cloud service to an application group. The total number of instances that you can add to an application group is unlimited.
   * In this example, an Elastic Compute Service (ECS) instance in the `China (Hangzhou)` region is added to the `3607****` application group. The instance ID is `i-2ze26xj5wwy12****` and the instance name is `test-instance-ecs`.
   * 
   * @param request - CreateMonitorGroupInstancesRequest
   * @returns CreateMonitorGroupInstancesResponse
   */
  async createMonitorGroupInstances(request: $_model.CreateMonitorGroupInstancesRequest): Promise<$_model.CreateMonitorGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
   * Creates a policy to pause alert notifications for an application group.
   * 
   * @remarks
   * If the policy is valid, no alert notifications are sent for the application group.
   * This topic describes how to create a `PauseNotify` policy to pause alert notifications for the `7301****` application group. The StartTime parameter is set to `1622949300000` and the EndTime parameter is set to `1623208500000`. This indicates that the policy is valid from `2021-06-06 11:15:00 UTC+8` to `2021-06-09 11:15:00 UTC+8`.
   * 
   * @param request - CreateMonitorGroupNotifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitorGroupNotifyPolicyResponse
   */
  async createMonitorGroupNotifyPolicyWithOptions(request: $_model.CreateMonitorGroupNotifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitorGroupNotifyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitorGroupNotifyPolicyResponse({}));
  }

  /**
   * Creates a policy to pause alert notifications for an application group.
   * 
   * @remarks
   * If the policy is valid, no alert notifications are sent for the application group.
   * This topic describes how to create a `PauseNotify` policy to pause alert notifications for the `7301****` application group. The StartTime parameter is set to `1622949300000` and the EndTime parameter is set to `1623208500000`. This indicates that the policy is valid from `2021-06-06 11:15:00 UTC+8` to `2021-06-09 11:15:00 UTC+8`.
   * 
   * @param request - CreateMonitorGroupNotifyPolicyRequest
   * @returns CreateMonitorGroupNotifyPolicyResponse
   */
  async createMonitorGroupNotifyPolicy(request: $_model.CreateMonitorGroupNotifyPolicyRequest): Promise<$_model.CreateMonitorGroupNotifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a task to monitor a process.
   * 
   * @param request - CreateMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMonitoringAgentProcessResponse
   */
  async createMonitoringAgentProcessWithOptions(request: $_model.CreateMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
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
      action: "CreateMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.CreateMonitoringAgentProcessResponse({}));
  }

  /**
   * Creates a task to monitor a process.
   * 
   * @param request - CreateMonitoringAgentProcessRequest
   * @returns CreateMonitoringAgentProcessResponse
   */
  async createMonitoringAgentProcess(request: $_model.CreateMonitoringAgentProcessRequest): Promise<$_model.CreateMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Creates a site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to create a site monitoring task named `HanZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTPS`.
   * 
   * @param request - CreateSiteMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSiteMonitorResponse
   */
  async createSiteMonitorWithOptions(request: $_model.CreateSiteMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSiteMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.agentGroup)) {
      query["AgentGroup"] = request.agentGroup;
    }

    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.customSchedule)) {
      query["CustomSchedule"] = request.customSchedule;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!$dara.isNull(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.vpcConfig)) {
      query["VpcConfig"] = request.vpcConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSiteMonitorResponse>(await this.callApi(params, req, runtime), new $_model.CreateSiteMonitorResponse({}));
  }

  /**
   * Creates a site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to create a site monitoring task named `HanZhou_ECS1`. The URL that is monitored by the task is `https://www.aliyun.com` and the type of the task is `HTTPS`.
   * 
   * @param request - CreateSiteMonitorRequest
   * @returns CreateSiteMonitorResponse
   */
  async createSiteMonitor(request: $_model.CreateSiteMonitorRequest): Promise<$_model.CreateSiteMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSiteMonitorWithOptions(request, runtime);
  }

  /**
   * Defines the range of monitoring data that you want to export. The Cursor information is returned. When you call the BatchExport operation for the first time, you must specify the Cursor information.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ### [](#)Background information
   * You can call this operation to obtain the Cursor information and then call the [BatchExport](https://help.aliyun.com/document_detail/2329847.html) operation to export the monitoring data.
   * ### [](#)Description
   * This topic provides an example on how to define the monitoring data of a specified metric for a specified cloud service. In this example, the namespace of the cloud service is set to `acs_ecs_dashboard`, the metric is set to `cpu_idle`, the start time is set to `1641627000000`, and the end time is set to `1641645000000`. The number of idle CPU cores on your Elastic Compute Service (ECS) instances is measured every 60 seconds from 15:30:00, January 8, 2022 to 20:30:00, January 8, 2022. The `Cursor` information is returned.
   * 
   * @param tmpReq - CursorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CursorResponse
   */
  async cursorWithOptions(tmpReq: $_model.CursorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CursorResponse> {
    tmpReq.validate();
    let request = new $_model.CursorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.matchers)) {
      request.matchersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.matchers, "Matchers", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.matchersShrink)) {
      body["Matchers"] = request.matchersShrink;
    }

    if (!$dara.isNull(request.metric)) {
      body["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Cursor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CursorResponse>(await this.callApi(params, req, runtime), new $_model.CursorResponse({}));
  }

  /**
   * Defines the range of monitoring data that you want to export. The Cursor information is returned. When you call the BatchExport operation for the first time, you must specify the Cursor information.
   * 
   * @remarks
   * ### [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ### [](#)Background information
   * You can call this operation to obtain the Cursor information and then call the [BatchExport](https://help.aliyun.com/document_detail/2329847.html) operation to export the monitoring data.
   * ### [](#)Description
   * This topic provides an example on how to define the monitoring data of a specified metric for a specified cloud service. In this example, the namespace of the cloud service is set to `acs_ecs_dashboard`, the metric is set to `cpu_idle`, the start time is set to `1641627000000`, and the end time is set to `1641645000000`. The number of idle CPU cores on your Elastic Compute Service (ECS) instances is measured every 60 seconds from 15:30:00, January 8, 2022 to 20:30:00, January 8, 2022. The `Cursor` information is returned.
   * 
   * @param request - CursorRequest
   * @returns CursorResponse
   */
  async cursor(request: $_model.CursorRequest): Promise<$_model.CursorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cursorWithOptions(request, runtime);
  }

  /**
   * Deletes an alert contact.
   * 
   * @param request - DeleteContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactResponse
   */
  async deleteContactWithOptions(request: $_model.DeleteContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContact",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactResponse({}));
  }

  /**
   * Deletes an alert contact.
   * 
   * @param request - DeleteContactRequest
   * @returns DeleteContactResponse
   */
  async deleteContact(request: $_model.DeleteContactRequest): Promise<$_model.DeleteContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  /**
   * Deletes an alert contact group.
   * 
   * @param request - DeleteContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactGroupResponse
   */
  async deleteContactGroupWithOptions(request: $_model.DeleteContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactGroupResponse({}));
  }

  /**
   * Deletes an alert contact group.
   * 
   * @param request - DeleteContactGroupRequest
   * @returns DeleteContactGroupResponse
   */
  async deleteContactGroup(request: $_model.DeleteContactGroupRequest): Promise<$_model.DeleteContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the reported monitoring data of a metric.
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
      version: "2019-01-01",
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
   * Deletes the reported monitoring data of a metric.
   * 
   * @param request - DeleteCustomMetricRequest
   * @returns DeleteCustomMetricResponse
   */
  async deleteCustomMetric(request: $_model.DeleteCustomMetricRequest): Promise<$_model.DeleteCustomMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomMetricWithOptions(request, runtime);
  }

  /**
   * Deletes a tag rule.
   * 
   * @param request - DeleteDynamicTagGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDynamicTagGroupResponse
   */
  async deleteDynamicTagGroupWithOptions(request: $_model.DeleteDynamicTagGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDynamicTagGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDynamicTagGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDynamicTagGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDynamicTagGroupResponse({}));
  }

  /**
   * Deletes a tag rule.
   * 
   * @param request - DeleteDynamicTagGroupRequest
   * @returns DeleteDynamicTagGroupResponse
   */
  async deleteDynamicTagGroup(request: $_model.DeleteDynamicTagGroupRequest): Promise<$_model.DeleteDynamicTagGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDynamicTagGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the push channels of an event-triggered alert rule.
   * 
   * @param request - DeleteEventRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventRuleTargetsResponse
   */
  async deleteEventRuleTargetsWithOptions(request: $_model.DeleteEventRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventRuleTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventRuleTargetsResponse({}));
  }

  /**
   * Deletes the push channels of an event-triggered alert rule.
   * 
   * @param request - DeleteEventRuleTargetsRequest
   * @returns DeleteEventRuleTargetsResponse
   */
  async deleteEventRuleTargets(request: $_model.DeleteEventRuleTargetsRequest): Promise<$_model.DeleteEventRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventRuleTargetsWithOptions(request, runtime);
  }

  /**
   * Deletes event-triggered alert rules.
   * 
   * @param request - DeleteEventRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventRulesResponse
   */
  async deleteEventRulesWithOptions(request: $_model.DeleteEventRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventRulesResponse({}));
  }

  /**
   * Deletes event-triggered alert rules.
   * 
   * @param request - DeleteEventRulesRequest
   * @returns DeleteEventRulesResponse
   */
  async deleteEventRules(request: $_model.DeleteEventRulesRequest): Promise<$_model.DeleteEventRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a configuration set that is used to export monitoring data.
   * 
   * @param request - DeleteExporterOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExporterOutputResponse
   */
  async deleteExporterOutputWithOptions(request: $_model.DeleteExporterOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExporterOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destName)) {
      query["DestName"] = request.destName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExporterOutputResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExporterOutputResponse({}));
  }

  /**
   * Deletes a configuration set that is used to export monitoring data.
   * 
   * @param request - DeleteExporterOutputRequest
   * @returns DeleteExporterOutputResponse
   */
  async deleteExporterOutput(request: $_model.DeleteExporterOutputRequest): Promise<$_model.DeleteExporterOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExporterOutputWithOptions(request, runtime);
  }

  /**
   * Deletes a data export rule.
   * 
   * @param request - DeleteExporterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExporterRuleResponse
   */
  async deleteExporterRuleWithOptions(request: $_model.DeleteExporterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExporterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExporterRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExporterRuleResponse({}));
  }

  /**
   * Deletes a data export rule.
   * 
   * @param request - DeleteExporterRuleRequest
   * @returns DeleteExporterRuleResponse
   */
  async deleteExporterRule(request: $_model.DeleteExporterRuleRequest): Promise<$_model.DeleteExporterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExporterRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a process monitoring task for an application group.
   * 
   * @param request - DeleteGroupMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupMonitoringAgentProcessResponse
   */
  async deleteGroupMonitoringAgentProcessWithOptions(request: $_model.DeleteGroupMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupMonitoringAgentProcessResponse({}));
  }

  /**
   * Deletes a process monitoring task for an application group.
   * 
   * @param request - DeleteGroupMonitoringAgentProcessRequest
   * @returns DeleteGroupMonitoringAgentProcessResponse
   */
  async deleteGroupMonitoringAgentProcess(request: $_model.DeleteGroupMonitoringAgentProcessRequest): Promise<$_model.DeleteGroupMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Deletes availability monitoring tasks.
   * 
   * @param request - DeleteHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHostAvailabilityResponse
   */
  async deleteHostAvailabilityWithOptions(request: $_model.DeleteHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHostAvailabilityResponse({}));
  }

  /**
   * Deletes availability monitoring tasks.
   * 
   * @param request - DeleteHostAvailabilityRequest
   * @returns DeleteHostAvailabilityResponse
   */
  async deleteHostAvailability(request: $_model.DeleteHostAvailabilityRequest): Promise<$_model.DeleteHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > If a metric import task is created for metrics in a namespace, you cannot delete the namespace unless you delete the task first.
   * This topic provides an example on how to delete a namespace named `aliyun`. The response shows that the namespace is deleted.
   * 
   * @param request - DeleteHybridMonitorNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridMonitorNamespaceResponse
   */
  async deleteHybridMonitorNamespaceWithOptions(request: $_model.DeleteHybridMonitorNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridMonitorNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridMonitorNamespaceResponse({}));
  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > If a metric import task is created for metrics in a namespace, you cannot delete the namespace unless you delete the task first.
   * This topic provides an example on how to delete a namespace named `aliyun`. The response shows that the namespace is deleted.
   * 
   * @param request - DeleteHybridMonitorNamespaceRequest
   * @returns DeleteHybridMonitorNamespaceResponse
   */
  async deleteHybridMonitorNamespace(request: $_model.DeleteHybridMonitorNamespaceRequest): Promise<$_model.DeleteHybridMonitorNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a Logstore group.
   * 
   * @remarks
   * This topic provides an example on how to delete a Logstore group named `Logstore_test`. The response shows that the Logstore group is deleted.
   * 
   * @param request - DeleteHybridMonitorSLSGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridMonitorSLSGroupResponse
   */
  async deleteHybridMonitorSLSGroupWithOptions(request: $_model.DeleteHybridMonitorSLSGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridMonitorSLSGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridMonitorSLSGroupResponse({}));
  }

  /**
   * Deletes a Logstore group.
   * 
   * @remarks
   * This topic provides an example on how to delete a Logstore group named `Logstore_test`. The response shows that the Logstore group is deleted.
   * 
   * @param request - DeleteHybridMonitorSLSGroupRequest
   * @returns DeleteHybridMonitorSLSGroupResponse
   */
  async deleteHybridMonitorSLSGroup(request: $_model.DeleteHybridMonitorSLSGroupRequest): Promise<$_model.DeleteHybridMonitorSLSGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a metric import task for Alibaba Cloud services or a metric for the logs that are imported from Log Service.
   * 
   * @remarks
   * This topic provides an example on how to delete a metric import task whose ID is `36****`. The returned result indicates that the metric import task is deleted.
   * 
   * @param request - DeleteHybridMonitorTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHybridMonitorTaskResponse
   */
  async deleteHybridMonitorTaskWithOptions(request: $_model.DeleteHybridMonitorTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHybridMonitorTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHybridMonitorTaskResponse({}));
  }

  /**
   * Deletes a metric import task for Alibaba Cloud services or a metric for the logs that are imported from Log Service.
   * 
   * @remarks
   * This topic provides an example on how to delete a metric import task whose ID is `36****`. The returned result indicates that the metric import task is deleted.
   * 
   * @param request - DeleteHybridMonitorTaskRequest
   * @returns DeleteHybridMonitorTaskResponse
   */
  async deleteHybridMonitorTask(request: $_model.DeleteHybridMonitorTaskRequest): Promise<$_model.DeleteHybridMonitorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHybridMonitorTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a log monitoring metric.
   * 
   * @param request - DeleteLogMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogMonitorResponse
   */
  async deleteLogMonitorWithOptions(request: $_model.DeleteLogMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logId)) {
      query["LogId"] = request.logId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogMonitorResponse({}));
  }

  /**
   * Deletes a log monitoring metric.
   * 
   * @param request - DeleteLogMonitorRequest
   * @returns DeleteLogMonitorResponse
   */
  async deleteLogMonitor(request: $_model.DeleteLogMonitorRequest): Promise<$_model.DeleteLogMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLogMonitorWithOptions(request, runtime);
  }

  /**
   * Deletes multiple blacklist policies at a time.
   * 
   * @param request - DeleteMetricRuleBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricRuleBlackListResponse
   */
  async deleteMetricRuleBlackListWithOptions(request: $_model.DeleteMetricRuleBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricRuleBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetricRuleBlackListResponse({}));
  }

  /**
   * Deletes multiple blacklist policies at a time.
   * 
   * @param request - DeleteMetricRuleBlackListRequest
   * @returns DeleteMetricRuleBlackListResponse
   */
  async deleteMetricRuleBlackList(request: $_model.DeleteMetricRuleBlackListRequest): Promise<$_model.DeleteMetricRuleBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
   * Disassociates resources from an alert rule.
   * 
   * @param request - DeleteMetricRuleResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricRuleResourcesResponse
   */
  async deleteMetricRuleResourcesWithOptions(request: $_model.DeleteMetricRuleResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricRuleResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetricRuleResourcesResponse({}));
  }

  /**
   * Disassociates resources from an alert rule.
   * 
   * @param request - DeleteMetricRuleResourcesRequest
   * @returns DeleteMetricRuleResourcesResponse
   */
  async deleteMetricRuleResources(request: $_model.DeleteMetricRuleResourcesRequest): Promise<$_model.DeleteMetricRuleResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRuleResourcesWithOptions(request, runtime);
  }

  /**
   * Delete the push channels of an alert rule.
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
      version: "2019-01-01",
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
   * Delete the push channels of an alert rule.
   * 
   * @param request - DeleteMetricRuleTargetsRequest
   * @returns DeleteMetricRuleTargetsResponse
   */
  async deleteMetricRuleTargets(request: $_model.DeleteMetricRuleTargetsRequest): Promise<$_model.DeleteMetricRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
   * Deletes an alert template.
   * 
   * @param request - DeleteMetricRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricRuleTemplateResponse
   */
  async deleteMetricRuleTemplateWithOptions(request: $_model.DeleteMetricRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricRuleTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetricRuleTemplateResponse({}));
  }

  /**
   * Deletes an alert template.
   * 
   * @param request - DeleteMetricRuleTemplateRequest
   * @returns DeleteMetricRuleTemplateResponse
   */
  async deleteMetricRuleTemplate(request: $_model.DeleteMetricRuleTemplateRequest): Promise<$_model.DeleteMetricRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes one or more alert rules.
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
      version: "2019-01-01",
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
   * Deletes one or more alert rules.
   * 
   * @param request - DeleteMetricRulesRequest
   * @returns DeleteMetricRulesResponse
   */
  async deleteMetricRules(request: $_model.DeleteMetricRulesRequest): Promise<$_model.DeleteMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetricRulesWithOptions(request, runtime);
  }

  /**
   * Deletes an application group.
   * 
   * @param request - DeleteMonitorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupResponse
   */
  async deleteMonitorGroupWithOptions(request: $_model.DeleteMonitorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitorGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupResponse({}));
  }

  /**
   * Deletes an application group.
   * 
   * @param request - DeleteMonitorGroupRequest
   * @returns DeleteMonitorGroupResponse
   */
  async deleteMonitorGroup(request: $_model.DeleteMonitorGroupRequest): Promise<$_model.DeleteMonitorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitorGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a rule that is used to dynamically add the instances of a service to an application group.
   * 
   * @param request - DeleteMonitorGroupDynamicRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupDynamicRuleResponse
   */
  async deleteMonitorGroupDynamicRuleWithOptions(request: $_model.DeleteMonitorGroupDynamicRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupDynamicRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupDynamicRuleResponse({}));
  }

  /**
   * Deletes a rule that is used to dynamically add the instances of a service to an application group.
   * 
   * @param request - DeleteMonitorGroupDynamicRuleRequest
   * @returns DeleteMonitorGroupDynamicRuleResponse
   */
  async deleteMonitorGroupDynamicRule(request: $_model.DeleteMonitorGroupDynamicRuleRequest): Promise<$_model.DeleteMonitorGroupDynamicRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  /**
   * Removes instances from an application group.
   * 
   * @param request - DeleteMonitorGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupInstancesResponse
   */
  async deleteMonitorGroupInstancesWithOptions(request: $_model.DeleteMonitorGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupInstancesResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupInstancesResponse({}));
  }

  /**
   * Removes instances from an application group.
   * 
   * @param request - DeleteMonitorGroupInstancesRequest
   * @returns DeleteMonitorGroupInstancesResponse
   */
  async deleteMonitorGroupInstances(request: $_model.DeleteMonitorGroupInstancesRequest): Promise<$_model.DeleteMonitorGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a policy that is used to pause alert notifications for an application group.
   * 
   * @param request - DeleteMonitorGroupNotifyPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitorGroupNotifyPolicyResponse
   */
  async deleteMonitorGroupNotifyPolicyWithOptions(request: $_model.DeleteMonitorGroupNotifyPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitorGroupNotifyPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.policyType)) {
      query["PolicyType"] = request.policyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitorGroupNotifyPolicy",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitorGroupNotifyPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitorGroupNotifyPolicyResponse({}));
  }

  /**
   * Deletes a policy that is used to pause alert notifications for an application group.
   * 
   * @param request - DeleteMonitorGroupNotifyPolicyRequest
   * @returns DeleteMonitorGroupNotifyPolicyResponse
   */
  async deleteMonitorGroupNotifyPolicy(request: $_model.DeleteMonitorGroupNotifyPolicyRequest): Promise<$_model.DeleteMonitorGroupNotifyPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitorGroupNotifyPolicyWithOptions(request, runtime);
  }

  /**
   * Disables monitoring on a process.
   * 
   * @param request - DeleteMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMonitoringAgentProcessResponse
   */
  async deleteMonitoringAgentProcessWithOptions(request: $_model.DeleteMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMonitoringAgentProcessResponse({}));
  }

  /**
   * Disables monitoring on a process.
   * 
   * @param request - DeleteMonitoringAgentProcessRequest
   * @returns DeleteMonitoringAgentProcessResponse
   */
  async deleteMonitoringAgentProcess(request: $_model.DeleteMonitoringAgentProcessRequest): Promise<$_model.DeleteMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Deletes one or more site monitoring tasks.
   * 
   * @param request - DeleteSiteMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSiteMonitorsResponse
   */
  async deleteSiteMonitorsWithOptions(request: $_model.DeleteSiteMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSiteMonitorsResponse> {
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
      action: "DeleteSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSiteMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSiteMonitorsResponse({}));
  }

  /**
   * Deletes one or more site monitoring tasks.
   * 
   * @param request - DeleteSiteMonitorsRequest
   * @returns DeleteSiteMonitorsResponse
   */
  async deleteSiteMonitors(request: $_model.DeleteSiteMonitorsRequest): Promise<$_model.DeleteSiteMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSiteMonitorsWithOptions(request, runtime);
  }

  /**
   * Queries the details of initiative alert rules.
   * 
   * @param request - DescribeActiveMetricRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveMetricRuleListResponse
   */
  async describeActiveMetricRuleListWithOptions(request: $_model.DescribeActiveMetricRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveMetricRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveMetricRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveMetricRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveMetricRuleListResponse({}));
  }

  /**
   * Queries the details of initiative alert rules.
   * 
   * @param request - DescribeActiveMetricRuleListRequest
   * @returns DescribeActiveMetricRuleListResponse
   */
  async describeActiveMetricRuleList(request: $_model.DescribeActiveMetricRuleListRequest): Promise<$_model.DescribeActiveMetricRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveMetricRuleListWithOptions(request, runtime);
  }

  /**
   * Queries historical alerts.
   * 
   * @remarks
   * This API operation is no longer maintained. We recommend that you call the [DescribeAlertLogList](https://help.aliyun.com/document_detail/201087.html) operation.
   * 
   * @deprecated OpenAPI DescribeAlertHistoryList is deprecated, please use Cms::2019-01-01::DescribeAlertLogList instead.
   * 
   * @param request - DescribeAlertHistoryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertHistoryListResponse
   */
  async describeAlertHistoryListWithOptions(request: $_model.DescribeAlertHistoryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertHistoryListResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
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
      version: "2019-01-01",
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
   * Queries historical alerts.
   * 
   * @remarks
   * This API operation is no longer maintained. We recommend that you call the [DescribeAlertLogList](https://help.aliyun.com/document_detail/201087.html) operation.
   * 
   * @deprecated OpenAPI DescribeAlertHistoryList is deprecated, please use Cms::2019-01-01::DescribeAlertLogList instead.
   * 
   * @param request - DescribeAlertHistoryListRequest
   * @returns DescribeAlertHistoryListResponse
   */
  // Deprecated
  async describeAlertHistoryList(request: $_model.DescribeAlertHistoryListRequest): Promise<$_model.DescribeAlertHistoryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertHistoryListWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of alert logs.
   * 
   * @remarks
   * Queries the statistics of alert logs.
   * This topic provides an example on how to query the statistics of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertLogCountResponse
   */
  async describeAlertLogCountWithOptions(request: $_model.DescribeAlertLogCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertLogCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertLogCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertLogCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertLogCountResponse({}));
  }

  /**
   * Queries the statistics of alert logs.
   * 
   * @remarks
   * Queries the statistics of alert logs.
   * This topic provides an example on how to query the statistics of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogCountRequest
   * @returns DescribeAlertLogCountResponse
   */
  async describeAlertLogCount(request: $_model.DescribeAlertLogCountRequest): Promise<$_model.DescribeAlertLogCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertLogCountWithOptions(request, runtime);
  }

  /**
   * Queries the number of alert logs that are generated during each interval within a period of time.
   * 
   * @remarks
   * This topic provides an example on how to query the number of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertLogHistogramResponse
   */
  async describeAlertLogHistogramWithOptions(request: $_model.DescribeAlertLogHistogramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertLogHistogramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertLogHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertLogHistogramResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertLogHistogramResponse({}));
  }

  /**
   * Queries the number of alert logs that are generated during each interval within a period of time.
   * 
   * @remarks
   * This topic provides an example on how to query the number of alert logs for Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogHistogramRequest
   * @returns DescribeAlertLogHistogramResponse
   */
  async describeAlertLogHistogram(request: $_model.DescribeAlertLogHistogramRequest): Promise<$_model.DescribeAlertLogHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertLogHistogramWithOptions(request, runtime);
  }

  /**
   * Queries alert logs.
   * 
   * @remarks
   * You can call the operation to query only the alert logs within the last year.
   * This topic provides an example to show how to query the alert logs of Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertLogListResponse
   */
  async describeAlertLogListWithOptions(request: $_model.DescribeAlertLogListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertLogListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroup)) {
      query["ContactGroup"] = request.contactGroup;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.lastMin)) {
      query["LastMin"] = request.lastMin;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.sendStatus)) {
      query["SendStatus"] = request.sendStatus;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertLogList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertLogListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertLogListResponse({}));
  }

  /**
   * Queries alert logs.
   * 
   * @remarks
   * You can call the operation to query only the alert logs within the last year.
   * This topic provides an example to show how to query the alert logs of Elastic Compute Service (ECS) based on the `product` dimension.
   * 
   * @param request - DescribeAlertLogListRequest
   * @returns DescribeAlertLogListResponse
   */
  async describeAlertLogList(request: $_model.DescribeAlertLogListRequest): Promise<$_model.DescribeAlertLogListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertLogListWithOptions(request, runtime);
  }

  /**
   * Queries the resources for which active alerts are triggered based on an alert rule.
   * 
   * @param request - DescribeAlertingMetricRuleResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertingMetricRuleResourcesResponse
   */
  async describeAlertingMetricRuleResourcesWithOptions(request: $_model.DescribeAlertingMetricRuleResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertingMetricRuleResourcesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertingMetricRuleResources",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertingMetricRuleResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertingMetricRuleResourcesResponse({}));
  }

  /**
   * Queries the resources for which active alerts are triggered based on an alert rule.
   * 
   * @param request - DescribeAlertingMetricRuleResourcesRequest
   * @returns DescribeAlertingMetricRuleResourcesResponse
   */
  async describeAlertingMetricRuleResources(request: $_model.DescribeAlertingMetricRuleResourcesRequest): Promise<$_model.DescribeAlertingMetricRuleResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertingMetricRuleResourcesWithOptions(request, runtime);
  }

  /**
   * Queries alert groups.
   * 
   * @param request - DescribeContactGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactGroupListResponse
   */
  async describeContactGroupListWithOptions(request: $_model.DescribeContactGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactGroupListResponse> {
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
      action: "DescribeContactGroupList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactGroupListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactGroupListResponse({}));
  }

  /**
   * Queries alert groups.
   * 
   * @param request - DescribeContactGroupListRequest
   * @returns DescribeContactGroupListResponse
   */
  async describeContactGroupList(request: $_model.DescribeContactGroupListRequest): Promise<$_model.DescribeContactGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactGroupListWithOptions(request, runtime);
  }

  /**
   * Queries alert contacts.
   * 
   * @param request - DescribeContactListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactListResponse
   */
  async describeContactListWithOptions(request: $_model.DescribeContactListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chanelType)) {
      query["ChanelType"] = request.chanelType;
    }

    if (!$dara.isNull(request.chanelValue)) {
      query["ChanelValue"] = request.chanelValue;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
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
      action: "DescribeContactList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactListResponse({}));
  }

  /**
   * Queries alert contacts.
   * 
   * @param request - DescribeContactListRequest
   * @returns DescribeContactListResponse
   */
  async describeContactList(request: $_model.DescribeContactListRequest): Promise<$_model.DescribeContactListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactListWithOptions(request, runtime);
  }

  /**
   * Queries the alert contacts in an alert contact group.
   * 
   * @param request - DescribeContactListByContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactListByContactGroupResponse
   */
  async describeContactListByContactGroupWithOptions(request: $_model.DescribeContactListByContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactListByContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContactListByContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactListByContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactListByContactGroupResponse({}));
  }

  /**
   * Queries the alert contacts in an alert contact group.
   * 
   * @param request - DescribeContactListByContactGroupRequest
   * @returns DescribeContactListByContactGroupResponse
   */
  async describeContactListByContactGroup(request: $_model.DescribeContactListByContactGroupRequest): Promise<$_model.DescribeContactListByContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactListByContactGroupWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom event.
   * 
   * @param request - DescribeCustomEventAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomEventAttributeResponse
   */
  async describeCustomEventAttributeWithOptions(request: $_model.DescribeCustomEventAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomEventAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomEventAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomEventAttributeResponse({}));
  }

  /**
   * Queries the details of a custom event.
   * 
   * @param request - DescribeCustomEventAttributeRequest
   * @returns DescribeCustomEventAttributeResponse
   */
  async describeCustomEventAttribute(request: $_model.DescribeCustomEventAttributeRequest): Promise<$_model.DescribeCustomEventAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomEventAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the number of times that a custom event occurred within a period of time.
   * 
   * @remarks
   * >  This operation queries the number of times that a custom event occurred for each service.
   * 
   * @param request - DescribeCustomEventCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomEventCountResponse
   */
  async describeCustomEventCountWithOptions(request: $_model.DescribeCustomEventCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomEventCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomEventCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomEventCountResponse({}));
  }

  /**
   * Queries the number of times that a custom event occurred within a period of time.
   * 
   * @remarks
   * >  This operation queries the number of times that a custom event occurred for each service.
   * 
   * @param request - DescribeCustomEventCountRequest
   * @returns DescribeCustomEventCountResponse
   */
  async describeCustomEventCount(request: $_model.DescribeCustomEventCountRequest): Promise<$_model.DescribeCustomEventCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomEventCountWithOptions(request, runtime);
  }

  /**
   * Queries the number of times that a custom event occurred during each interval within a period of time.
   * 
   * @param request - DescribeCustomEventHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomEventHistogramResponse
   */
  async describeCustomEventHistogramWithOptions(request: $_model.DescribeCustomEventHistogramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomEventHistogramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomEventHistogramResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomEventHistogramResponse({}));
  }

  /**
   * Queries the number of times that a custom event occurred during each interval within a period of time.
   * 
   * @param request - DescribeCustomEventHistogramRequest
   * @returns DescribeCustomEventHistogramResponse
   */
  async describeCustomEventHistogram(request: $_model.DescribeCustomEventHistogramRequest): Promise<$_model.DescribeCustomEventHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomEventHistogramWithOptions(request, runtime);
  }

  /**
   * Queries the reported monitoring data.
   * 
   * @remarks
   * >  You can call the DescribeMetricList operation to query the metrics of cloud services. For more information, see [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html).
   * 
   * @param request - DescribeCustomMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomMetricListResponse
   */
  async describeCustomMetricListWithOptions(request: $_model.DescribeCustomMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomMetricListResponse> {
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
      action: "DescribeCustomMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomMetricListResponse({}));
  }

  /**
   * Queries the reported monitoring data.
   * 
   * @remarks
   * >  You can call the DescribeMetricList operation to query the metrics of cloud services. For more information, see [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html).
   * 
   * @param request - DescribeCustomMetricListRequest
   * @returns DescribeCustomMetricListResponse
   */
  async describeCustomMetricList(request: $_model.DescribeCustomMetricListRequest): Promise<$_model.DescribeCustomMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomMetricListWithOptions(request, runtime);
  }

  /**
   * Queries tag rules.
   * 
   * @remarks
   * This topic provides an example to show how to query tag rules that are related to `tagkey1`. The sample responses indicate that two tag rules are found. The rule IDs are `1536df65-a719-429d-8813-73cc40d7****` and `56e8cebb-b3d7-4a91-9880-78a8c84f****`.
   * 
   * @param request - DescribeDynamicTagRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDynamicTagRuleListResponse
   */
  async describeDynamicTagRuleListWithOptions(request: $_model.DescribeDynamicTagRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDynamicTagRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagRegionId)) {
      query["TagRegionId"] = request.tagRegionId;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDynamicTagRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDynamicTagRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDynamicTagRuleListResponse({}));
  }

  /**
   * Queries tag rules.
   * 
   * @remarks
   * This topic provides an example to show how to query tag rules that are related to `tagkey1`. The sample responses indicate that two tag rules are found. The rule IDs are `1536df65-a719-429d-8813-73cc40d7****` and `56e8cebb-b3d7-4a91-9880-78a8c84f****`.
   * 
   * @param request - DescribeDynamicTagRuleListRequest
   * @returns DescribeDynamicTagRuleListResponse
   */
  async describeDynamicTagRuleList(request: $_model.DescribeDynamicTagRuleListRequest): Promise<$_model.DescribeDynamicTagRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDynamicTagRuleListWithOptions(request, runtime);
  }

  /**
   * Queries the details of an event-triggered alert rule.
   * 
   * @remarks
   * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
   * 
   * @param request - DescribeEventRuleAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventRuleAttributeResponse
   */
  async describeEventRuleAttributeWithOptions(request: $_model.DescribeEventRuleAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventRuleAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventRuleAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventRuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventRuleAttributeResponse({}));
  }

  /**
   * Queries the details of an event-triggered alert rule.
   * 
   * @remarks
   * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
   * 
   * @param request - DescribeEventRuleAttributeRequest
   * @returns DescribeEventRuleAttributeResponse
   */
  async describeEventRuleAttribute(request: $_model.DescribeEventRuleAttributeRequest): Promise<$_model.DescribeEventRuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventRuleAttributeWithOptions(request, runtime);
  }

  /**
   * Queries event-triggered alert rules.
   * 
   * @param request - DescribeEventRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventRuleListResponse
   */
  async describeEventRuleListWithOptions(request: $_model.DescribeEventRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventRuleListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    if (!$dara.isNull(request.namePrefix)) {
      query["NamePrefix"] = request.namePrefix;
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
      action: "DescribeEventRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventRuleListResponse({}));
  }

  /**
   * Queries event-triggered alert rules.
   * 
   * @param request - DescribeEventRuleListRequest
   * @returns DescribeEventRuleListResponse
   */
  async describeEventRuleList(request: $_model.DescribeEventRuleListRequest): Promise<$_model.DescribeEventRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventRuleListWithOptions(request, runtime);
  }

  /**
   * Queries event-triggered alert rules.
   * 
   * @remarks
   * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
   * 
   * @param request - DescribeEventRuleTargetListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventRuleTargetListResponse
   */
  async describeEventRuleTargetListWithOptions(request: $_model.DescribeEventRuleTargetListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventRuleTargetListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventRuleTargetList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventRuleTargetListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventRuleTargetListResponse({}));
  }

  /**
   * Queries event-triggered alert rules.
   * 
   * @remarks
   * This topic provides an example to show how to query the details of an event-triggered alert rule named `testRule`.
   * 
   * @param request - DescribeEventRuleTargetListRequest
   * @returns DescribeEventRuleTargetListResponse
   */
  async describeEventRuleTargetList(request: $_model.DescribeEventRuleTargetListRequest): Promise<$_model.DescribeEventRuleTargetListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventRuleTargetListWithOptions(request, runtime);
  }

  /**
   * Queries configuration sets that are used to export monitoring data.
   * 
   * @param request - DescribeExporterOutputListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExporterOutputListResponse
   */
  async describeExporterOutputListWithOptions(request: $_model.DescribeExporterOutputListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExporterOutputListResponse> {
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
      action: "DescribeExporterOutputList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExporterOutputListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExporterOutputListResponse({}));
  }

  /**
   * Queries configuration sets that are used to export monitoring data.
   * 
   * @param request - DescribeExporterOutputListRequest
   * @returns DescribeExporterOutputListResponse
   */
  async describeExporterOutputList(request: $_model.DescribeExporterOutputListRequest): Promise<$_model.DescribeExporterOutputListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExporterOutputListWithOptions(request, runtime);
  }

  /**
   * Queries data export rules.
   * 
   * @param request - DescribeExporterRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExporterRuleListResponse
   */
  async describeExporterRuleListWithOptions(request: $_model.DescribeExporterRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExporterRuleListResponse> {
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
      action: "DescribeExporterRuleList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExporterRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExporterRuleListResponse({}));
  }

  /**
   * Queries data export rules.
   * 
   * @param request - DescribeExporterRuleListRequest
   * @returns DescribeExporterRuleListResponse
   */
  async describeExporterRuleList(request: $_model.DescribeExporterRuleListRequest): Promise<$_model.DescribeExporterRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExporterRuleListWithOptions(request, runtime);
  }

  /**
   * Queries the process monitoring tasks for an application group.
   * 
   * @remarks
   * You can create a process monitoring task to monitor all or the specified Elastic Compute Service (ECS) instances in an application group and configure alert rules for the process monitoring task.
   * 
   * @param request - DescribeGroupMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupMonitoringAgentProcessResponse
   */
  async describeGroupMonitoringAgentProcessWithOptions(request: $_model.DescribeGroupMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processName)) {
      query["ProcessName"] = request.processName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupMonitoringAgentProcessResponse({}));
  }

  /**
   * Queries the process monitoring tasks for an application group.
   * 
   * @remarks
   * You can create a process monitoring task to monitor all or the specified Elastic Compute Service (ECS) instances in an application group and configure alert rules for the process monitoring task.
   * 
   * @param request - DescribeGroupMonitoringAgentProcessRequest
   * @returns DescribeGroupMonitoringAgentProcessResponse
   */
  async describeGroupMonitoringAgentProcess(request: $_model.DescribeGroupMonitoringAgentProcessRequest): Promise<$_model.DescribeGroupMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Queries availability monitoring tasks.
   * 
   * @remarks
   * This topic provides an example to show how to query all the availability monitoring tasks of your Alibaba Cloud account. The sample responses indicate that the account has one availability monitoring task named `ecs_instance`.
   * 
   * @param request - DescribeHostAvailabilityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHostAvailabilityListResponse
   */
  async describeHostAvailabilityListWithOptions(request: $_model.DescribeHostAvailabilityListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHostAvailabilityListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
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
      action: "DescribeHostAvailabilityList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHostAvailabilityListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHostAvailabilityListResponse({}));
  }

  /**
   * Queries availability monitoring tasks.
   * 
   * @remarks
   * This topic provides an example to show how to query all the availability monitoring tasks of your Alibaba Cloud account. The sample responses indicate that the account has one availability monitoring task named `ecs_instance`.
   * 
   * @param request - DescribeHostAvailabilityListRequest
   * @returns DescribeHostAvailabilityListResponse
   */
  async describeHostAvailabilityList(request: $_model.DescribeHostAvailabilityListRequest): Promise<$_model.DescribeHostAvailabilityListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHostAvailabilityListWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data in a namespace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Limits
   * The size of monitoring data that is returned in each call cannot exceed 1.5 MB. If the returned data reaches the upper limit, the query fails. You must reset the query conditions.
   * ## [](#)Operation description
   * This topic provides an example to show how to query the monitoring data of the `AliyunEcs_cpu_total` metric in the `default-aliyun` namespace from `1653804865` (14:14:25 on May 29, 2022) to `1653805225` (14:20:25 on May 29, 2022).
   * 
   * @param request - DescribeHybridMonitorDataListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridMonitorDataListResponse
   */
  async describeHybridMonitorDataListWithOptions(request: $_model.DescribeHybridMonitorDataListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridMonitorDataListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.end)) {
      query["End"] = request.end;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.promSQL)) {
      query["PromSQL"] = request.promSQL;
    }

    if (!$dara.isNull(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridMonitorDataList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridMonitorDataListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridMonitorDataListResponse({}));
  }

  /**
   * Queries the monitoring data in a namespace.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Limits
   * The size of monitoring data that is returned in each call cannot exceed 1.5 MB. If the returned data reaches the upper limit, the query fails. You must reset the query conditions.
   * ## [](#)Operation description
   * This topic provides an example to show how to query the monitoring data of the `AliyunEcs_cpu_total` metric in the `default-aliyun` namespace from `1653804865` (14:14:25 on May 29, 2022) to `1653805225` (14:20:25 on May 29, 2022).
   * 
   * @param request - DescribeHybridMonitorDataListRequest
   * @returns DescribeHybridMonitorDataListResponse
   */
  async describeHybridMonitorDataList(request: $_model.DescribeHybridMonitorDataListRequest): Promise<$_model.DescribeHybridMonitorDataListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridMonitorDataListWithOptions(request, runtime);
  }

  /**
   * Queries namespaces and the details of the related metric import tasks.
   * 
   * @remarks
   * In this example, all namespaces within the current account are queried. The response shows that the current account has only one namespace named `aliyun-test`.
   * 
   * @param request - DescribeHybridMonitorNamespaceListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridMonitorNamespaceListResponse
   */
  async describeHybridMonitorNamespaceListWithOptions(request: $_model.DescribeHybridMonitorNamespaceListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridMonitorNamespaceListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.showTaskStatistic)) {
      query["ShowTaskStatistic"] = request.showTaskStatistic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridMonitorNamespaceList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridMonitorNamespaceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridMonitorNamespaceListResponse({}));
  }

  /**
   * Queries namespaces and the details of the related metric import tasks.
   * 
   * @remarks
   * In this example, all namespaces within the current account are queried. The response shows that the current account has only one namespace named `aliyun-test`.
   * 
   * @param request - DescribeHybridMonitorNamespaceListRequest
   * @returns DescribeHybridMonitorNamespaceListResponse
   */
  async describeHybridMonitorNamespaceList(request: $_model.DescribeHybridMonitorNamespaceListRequest): Promise<$_model.DescribeHybridMonitorNamespaceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridMonitorNamespaceListWithOptions(request, runtime);
  }

  /**
   * Queries Logstore groups.
   * 
   * @remarks
   * In this example, all Logstore groups within the current account are queried. The response shows that the current account has two Logstore groups: `Logstore_test` and `Logstore_aliyun`.
   * 
   * @param request - DescribeHybridMonitorSLSGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridMonitorSLSGroupResponse
   */
  async describeHybridMonitorSLSGroupWithOptions(request: $_model.DescribeHybridMonitorSLSGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridMonitorSLSGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridMonitorSLSGroupResponse({}));
  }

  /**
   * Queries Logstore groups.
   * 
   * @remarks
   * In this example, all Logstore groups within the current account are queried. The response shows that the current account has two Logstore groups: `Logstore_test` and `Logstore_aliyun`.
   * 
   * @param request - DescribeHybridMonitorSLSGroupRequest
   * @returns DescribeHybridMonitorSLSGroupResponse
   */
  async describeHybridMonitorSLSGroup(request: $_model.DescribeHybridMonitorSLSGroupRequest): Promise<$_model.DescribeHybridMonitorSLSGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
   * Queries metric import tasks.
   * 
   * @remarks
   * This topic provides an example on how to query all metric import tasks that belong to the current Alibaba Cloud account. The returned result indicates that the current account has only one metric import task. The metric import task is named `aliyun_task`.
   * 
   * @param request - DescribeHybridMonitorTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHybridMonitorTaskListResponse
   */
  async describeHybridMonitorTaskListWithOptions(request: $_model.DescribeHybridMonitorTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHybridMonitorTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.includeAliyunTask)) {
      query["IncludeAliyunTask"] = request.includeAliyunTask;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
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

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
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
      action: "DescribeHybridMonitorTaskList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHybridMonitorTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHybridMonitorTaskListResponse({}));
  }

  /**
   * Queries metric import tasks.
   * 
   * @remarks
   * This topic provides an example on how to query all metric import tasks that belong to the current Alibaba Cloud account. The returned result indicates that the current account has only one metric import task. The metric import task is named `aliyun_task`.
   * 
   * @param request - DescribeHybridMonitorTaskListRequest
   * @returns DescribeHybridMonitorTaskListResponse
   */
  async describeHybridMonitorTaskList(request: $_model.DescribeHybridMonitorTaskListRequest): Promise<$_model.DescribeHybridMonitorTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHybridMonitorTaskListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a log monitoring metric.
   * 
   * @param request - DescribeLogMonitorAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogMonitorAttributeResponse
   */
  async describeLogMonitorAttributeWithOptions(request: $_model.DescribeLogMonitorAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogMonitorAttributeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogMonitorAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogMonitorAttributeResponse({}));
  }

  /**
   * Queries the details of a log monitoring metric.
   * 
   * @param request - DescribeLogMonitorAttributeRequest
   * @returns DescribeLogMonitorAttributeResponse
   */
  async describeLogMonitorAttribute(request: $_model.DescribeLogMonitorAttributeRequest): Promise<$_model.DescribeLogMonitorAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogMonitorAttributeWithOptions(request, runtime);
  }

  /**
   * Queries log monitoring metrics.
   * 
   * @param request - DescribeLogMonitorListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogMonitorListResponse
   */
  async describeLogMonitorListWithOptions(request: $_model.DescribeLogMonitorListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogMonitorListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchValue)) {
      query["SearchValue"] = request.searchValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogMonitorListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogMonitorListResponse({}));
  }

  /**
   * Queries log monitoring metrics.
   * 
   * @param request - DescribeLogMonitorListRequest
   * @returns DescribeLogMonitorListResponse
   */
  async describeLogMonitorList(request: $_model.DescribeLogMonitorListRequest): Promise<$_model.DescribeLogMonitorListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogMonitorListWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of a metric for a cloud service.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. If the free quota is used up, you are automatically charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * ### [](#)Description
   * >  Different from [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html), the DescribeMetricData operation provides statistical features. You can set the Dimension parameter to `{"instanceId": "i-abcdefgh12****"}` to aggregate all data of your Alibaba Cloud account.
   * This topic provides an example on how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`.
   * 
   * @param request - DescribeMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricDataResponse
   */
  async describeMetricDataWithOptions(request: $_model.DescribeMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricDataResponse> {
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

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricDataResponse({}));
  }

  /**
   * Queries the monitoring data of a metric for a cloud service.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. If the free quota is used up, you are automatically charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * ### [](#)Description
   * >  Different from [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html), the DescribeMetricData operation provides statistical features. You can set the Dimension parameter to `{"instanceId": "i-abcdefgh12****"}` to aggregate all data of your Alibaba Cloud account.
   * This topic provides an example on how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`.
   * 
   * @param request - DescribeMetricDataRequest
   * @returns DescribeMetricDataResponse
   */
  async describeMetricData(request: $_model.DescribeMetricDataRequest): Promise<$_model.DescribeMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricDataWithOptions(request, runtime);
  }

  /**
   * Queries the latest monitoring data of a metric.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * >  If `Throttling.User` or `Request was denied due to user flow control` is returned when you call an API operation, the API operation is throttled. For more information about how to handle the issue, see [How do I handle the throttling of a query API?](https://help.aliyun.com/document_detail/2615031.html)
   * ### [](#)Precautions
   * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
   * *   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
   * *   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
   * *   The storage duration is 91 days if the value of the `Period` parameter is greater than or equal to 300 seconds.
   * ### [](#)Operation description
   * This topic provides an example on how to query the latest monitoring data of the `CPUUtilization` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `123456789876****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
   * 
   * @param request - DescribeMetricLastRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricLastResponse
   */
  async describeMetricLastWithOptions(request: $_model.DescribeMetricLastRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricLastResponse> {
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

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricLast",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricLastResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricLastResponse({}));
  }

  /**
   * Queries the latest monitoring data of a metric.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * >  If `Throttling.User` or `Request was denied due to user flow control` is returned when you call an API operation, the API operation is throttled. For more information about how to handle the issue, see [How do I handle the throttling of a query API?](https://help.aliyun.com/document_detail/2615031.html)
   * ### [](#)Precautions
   * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
   * *   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
   * *   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
   * *   The storage duration is 91 days if the value of the `Period` parameter is greater than or equal to 300 seconds.
   * ### [](#)Operation description
   * This topic provides an example on how to query the latest monitoring data of the `CPUUtilization` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `123456789876****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
   * 
   * @param request - DescribeMetricLastRequest
   * @returns DescribeMetricLastResponse
   */
  async describeMetricLast(request: $_model.DescribeMetricLastRequest): Promise<$_model.DescribeMetricLastResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricLastWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring data of a metric for a specified cloud service.
   * 
   * @remarks
   * ## Limits
   * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
   * >This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `120886317861****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
   * 
   * @param request - DescribeMetricListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricListResponse
   */
  async describeMetricListWithOptions(request: $_model.DescribeMetricListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricListResponse> {
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

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricListResponse({}));
  }

  /**
   * Queries the monitoring data of a metric for a specified cloud service.
   * 
   * @remarks
   * ## Limits
   * Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the RAM users within the account share the quota. 
   * >This topic provides an example to show how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `120886317861****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.
   * 
   * @param request - DescribeMetricListRequest
   * @returns DescribeMetricListResponse
   */
  async describeMetricList(request: $_model.DescribeMetricListRequest): Promise<$_model.DescribeMetricListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricListWithOptions(request, runtime);
  }

  /**
   * Queries the details of metrics that are supported in CloudMonitor.
   * 
   * @remarks
   * This operation is used together with DescribeMetricList and DescribeMetricLast. For more information, see [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html) and [DescribeMetricLast](https://help.aliyun.com/document_detail/51939.html).
   * 
   * @param request - DescribeMetricMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricMetaListResponse
   */
  async describeMetricMetaListWithOptions(request: $_model.DescribeMetricMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricMetaList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricMetaListResponse({}));
  }

  /**
   * Queries the details of metrics that are supported in CloudMonitor.
   * 
   * @remarks
   * This operation is used together with DescribeMetricList and DescribeMetricLast. For more information, see [DescribeMetricList](https://help.aliyun.com/document_detail/51936.html) and [DescribeMetricLast](https://help.aliyun.com/document_detail/51939.html).
   * 
   * @param request - DescribeMetricMetaListRequest
   * @returns DescribeMetricMetaListResponse
   */
  async describeMetricMetaList(request: $_model.DescribeMetricMetaListRequest): Promise<$_model.DescribeMetricMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricMetaListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeMetricRuleBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleBlackListResponse
   */
  async describeMetricRuleBlackListWithOptions(request: $_model.DescribeMetricRuleBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
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

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleBlackListResponse({}));
  }

  /**
   * @param request - DescribeMetricRuleBlackListRequest
   * @returns DescribeMetricRuleBlackListResponse
   */
  async describeMetricRuleBlackList(request: $_model.DescribeMetricRuleBlackListRequest): Promise<$_model.DescribeMetricRuleBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
   * Queries the number of alert rules in each state.
   * 
   * @param request - DescribeMetricRuleCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleCountResponse
   */
  async describeMetricRuleCountWithOptions(request: $_model.DescribeMetricRuleCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleCountResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleCountResponse({}));
  }

  /**
   * Queries the number of alert rules in each state.
   * 
   * @param request - DescribeMetricRuleCountRequest
   * @returns DescribeMetricRuleCountResponse
   */
  async describeMetricRuleCount(request: $_model.DescribeMetricRuleCountRequest): Promise<$_model.DescribeMetricRuleCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleCountWithOptions(request, runtime);
  }

  /**
   * Queries alert rules.
   * 
   * @remarks
   * This topic provides an example on how to query all alert rules within your Alibaba Cloud account. The returned result shows that only one alert rule is found. The name of the alert rule is `Rule_01` and the ID is `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`.
   * 
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
      version: "2019-01-01",
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
   * Queries alert rules.
   * 
   * @remarks
   * This topic provides an example on how to query all alert rules within your Alibaba Cloud account. The returned result shows that only one alert rule is found. The name of the alert rule is `Rule_01` and the ID is `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`.
   * 
   * @param request - DescribeMetricRuleListRequest
   * @returns DescribeMetricRuleListResponse
   */
  async describeMetricRuleList(request: $_model.DescribeMetricRuleListRequest): Promise<$_model.DescribeMetricRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleListWithOptions(request, runtime);
  }

  /**
   * Queries the resources that are associated with a specified alert rule.
   * 
   * @remarks
   * ## Limit
   * This operation supports only Message Service (MNS) resources. 
   * >This topic provides an example on how to query the resources that are associated with an alert rule whose ID is `ae06917_75a8c43178ab66****`.
   * 
   * @param request - DescribeMetricRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleTargetsResponse
   */
  async describeMetricRuleTargetsWithOptions(request: $_model.DescribeMetricRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleTargetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleTargetsResponse({}));
  }

  /**
   * Queries the resources that are associated with a specified alert rule.
   * 
   * @remarks
   * ## Limit
   * This operation supports only Message Service (MNS) resources. 
   * >This topic provides an example on how to query the resources that are associated with an alert rule whose ID is `ae06917_75a8c43178ab66****`.
   * 
   * @param request - DescribeMetricRuleTargetsRequest
   * @returns DescribeMetricRuleTargetsResponse
   */
  async describeMetricRuleTargets(request: $_model.DescribeMetricRuleTargetsRequest): Promise<$_model.DescribeMetricRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an alert template.
   * 
   * @remarks
   * This topic provides an example on how to query the details of an alert template whose ID is `70****`.
   * 
   * @param request - DescribeMetricRuleTemplateAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleTemplateAttributeResponse
   */
  async describeMetricRuleTemplateAttributeWithOptions(request: $_model.DescribeMetricRuleTemplateAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleTemplateAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleTemplateAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleTemplateAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleTemplateAttributeResponse({}));
  }

  /**
   * Queries the details of an alert template.
   * 
   * @remarks
   * This topic provides an example on how to query the details of an alert template whose ID is `70****`.
   * 
   * @param request - DescribeMetricRuleTemplateAttributeRequest
   * @returns DescribeMetricRuleTemplateAttributeResponse
   */
  async describeMetricRuleTemplateAttribute(request: $_model.DescribeMetricRuleTemplateAttributeRequest): Promise<$_model.DescribeMetricRuleTemplateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateAttributeWithOptions(request, runtime);
  }

  /**
   * Queries alert templates.
   * 
   * @remarks
   * This topic provides an example on how to query alert templates. In this example, the following alert templates are returned in the response: `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - DescribeMetricRuleTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricRuleTemplateListResponse
   */
  async describeMetricRuleTemplateListWithOptions(request: $_model.DescribeMetricRuleTemplateListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricRuleTemplateListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.history)) {
      query["History"] = request.history;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricRuleTemplateList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricRuleTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricRuleTemplateListResponse({}));
  }

  /**
   * Queries alert templates.
   * 
   * @remarks
   * This topic provides an example on how to query alert templates. In this example, the following alert templates are returned in the response: `ECS_Template1` and `ECS_Template2`.
   * 
   * @param request - DescribeMetricRuleTemplateListRequest
   * @returns DescribeMetricRuleTemplateListResponse
   */
  async describeMetricRuleTemplateList(request: $_model.DescribeMetricRuleTemplateListRequest): Promise<$_model.DescribeMetricRuleTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricRuleTemplateListWithOptions(request, runtime);
  }

  /**
   * Queries the latest monitoring data of a metric for a cloud service. The data can be sorted by a specified order.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * ### [](#)Precautions
   * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
   * *   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
   * *   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
   * *   The storage duration is 91 days if the value of the `Period` is greater than or equal to 300 seconds.
   * ### [](#)Operation description
   * This topic provides an example on how to query the monitoring data of the `cpu_idle` metric in the last 60 seconds for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The monitoring data is sorted in descending order based on the `Average` field.
   * 
   * @param request - DescribeMetricTopRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetricTopResponse
   */
  async describeMetricTopWithOptions(request: $_model.DescribeMetricTopRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetricTopResponse> {
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

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetricTop",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetricTopResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetricTopResponse({}));
  }

  /**
   * Queries the latest monitoring data of a metric for a cloud service. The data can be sorted by a specified order.
   * 
   * @remarks
   * ### [](#)Limits
   * *   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy.aliyun.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG\\&commodityCode=cms_basic_public_cn\\&from_biz_channel=help_bill).
   * *   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
   * ### [](#)Precautions
   * The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:
   * *   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
   * *   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
   * *   The storage duration is 91 days if the value of the `Period` is greater than or equal to 300 seconds.
   * ### [](#)Operation description
   * This topic provides an example on how to query the monitoring data of the `cpu_idle` metric in the last 60 seconds for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The monitoring data is sorted in descending order based on the `Average` field.
   * 
   * @param request - DescribeMetricTopRequest
   * @returns DescribeMetricTopResponse
   */
  async describeMetricTop(request: $_model.DescribeMetricTopRequest): Promise<$_model.DescribeMetricTopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetricTopWithOptions(request, runtime);
  }

  /**
   * Queries the cloud services to which the resources in an application group belong and the number of resources that belong to each cloud service in the application group.
   * 
   * @param request - DescribeMonitorGroupCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupCategoriesResponse
   */
  async describeMonitorGroupCategoriesWithOptions(request: $_model.DescribeMonitorGroupCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupCategoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorGroupCategories",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupCategoriesResponse({}));
  }

  /**
   * Queries the cloud services to which the resources in an application group belong and the number of resources that belong to each cloud service in the application group.
   * 
   * @param request - DescribeMonitorGroupCategoriesRequest
   * @returns DescribeMonitorGroupCategoriesResponse
   */
  async describeMonitorGroupCategories(request: $_model.DescribeMonitorGroupCategoriesRequest): Promise<$_model.DescribeMonitorGroupCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupCategoriesWithOptions(request, runtime);
  }

  /**
   * Queries the dynamic rules of an application group.
   * 
   * @param request - DescribeMonitorGroupDynamicRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupDynamicRulesResponse
   */
  async describeMonitorGroupDynamicRulesWithOptions(request: $_model.DescribeMonitorGroupDynamicRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupDynamicRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorGroupDynamicRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupDynamicRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupDynamicRulesResponse({}));
  }

  /**
   * Queries the dynamic rules of an application group.
   * 
   * @param request - DescribeMonitorGroupDynamicRulesRequest
   * @returns DescribeMonitorGroupDynamicRulesResponse
   */
  async describeMonitorGroupDynamicRules(request: $_model.DescribeMonitorGroupDynamicRulesRequest): Promise<$_model.DescribeMonitorGroupDynamicRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupDynamicRulesWithOptions(request, runtime);
  }

  /**
   * Queries the details of the resources in an application group.
   * 
   * @param request - DescribeMonitorGroupInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupInstanceAttributeResponse
   */
  async describeMonitorGroupInstanceAttributeWithOptions(request: $_model.DescribeMonitorGroupInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupInstanceAttributeResponse> {
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
      action: "DescribeMonitorGroupInstanceAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupInstanceAttributeResponse({}));
  }

  /**
   * Queries the details of the resources in an application group.
   * 
   * @param request - DescribeMonitorGroupInstanceAttributeRequest
   * @returns DescribeMonitorGroupInstanceAttributeResponse
   */
  async describeMonitorGroupInstanceAttribute(request: $_model.DescribeMonitorGroupInstanceAttributeRequest): Promise<$_model.DescribeMonitorGroupInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the resources in an application group.
   * 
   * @param request - DescribeMonitorGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupInstancesResponse
   */
  async describeMonitorGroupInstancesWithOptions(request: $_model.DescribeMonitorGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupInstancesResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupInstancesResponse({}));
  }

  /**
   * Queries the resources in an application group.
   * 
   * @param request - DescribeMonitorGroupInstancesRequest
   * @returns DescribeMonitorGroupInstancesResponse
   */
  async describeMonitorGroupInstances(request: $_model.DescribeMonitorGroupInstancesRequest): Promise<$_model.DescribeMonitorGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the policies that are used to pause alert notifications for an application group.
   * 
   * @param request - DescribeMonitorGroupNotifyPolicyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupNotifyPolicyListResponse
   */
  async describeMonitorGroupNotifyPolicyListWithOptions(request: $_model.DescribeMonitorGroupNotifyPolicyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupNotifyPolicyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
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
      action: "DescribeMonitorGroupNotifyPolicyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupNotifyPolicyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupNotifyPolicyListResponse({}));
  }

  /**
   * Queries the policies that are used to pause alert notifications for an application group.
   * 
   * @param request - DescribeMonitorGroupNotifyPolicyListRequest
   * @returns DescribeMonitorGroupNotifyPolicyListResponse
   */
  async describeMonitorGroupNotifyPolicyList(request: $_model.DescribeMonitorGroupNotifyPolicyListRequest): Promise<$_model.DescribeMonitorGroupNotifyPolicyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupNotifyPolicyListWithOptions(request, runtime);
  }

  /**
   * Queries application groups.
   * 
   * @remarks
   * This topic provides an example of how to query the application groups of the current account. The response shows that the current account has two application groups: `testGroup124` and `test123`.
   * 
   * @param request - DescribeMonitorGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorGroupsResponse
   */
  async describeMonitorGroupsWithOptions(request: $_model.DescribeMonitorGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dynamicTagRuleId)) {
      query["DynamicTagRuleId"] = request.dynamicTagRuleId;
    }

    if (!$dara.isNull(request.groupFounderTagKey)) {
      query["GroupFounderTagKey"] = request.groupFounderTagKey;
    }

    if (!$dara.isNull(request.groupFounderTagValue)) {
      query["GroupFounderTagValue"] = request.groupFounderTagValue;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.includeTemplateHistory)) {
      query["IncludeTemplateHistory"] = request.includeTemplateHistory;
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

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorGroups",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorGroupsResponse({}));
  }

  /**
   * Queries application groups.
   * 
   * @remarks
   * This topic provides an example of how to query the application groups of the current account. The response shows that the current account has two application groups: `testGroup124` and `test123`.
   * 
   * @param request - DescribeMonitorGroupsRequest
   * @returns DescribeMonitorGroupsResponse
   */
  async describeMonitorGroups(request: $_model.DescribeMonitorGroupsRequest): Promise<$_model.DescribeMonitorGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the resource quotas of CloudMonitor.
   * 
   * @param request - DescribeMonitorResourceQuotaAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitorResourceQuotaAttributeResponse
   */
  async describeMonitorResourceQuotaAttributeWithOptions(request: $_model.DescribeMonitorResourceQuotaAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitorResourceQuotaAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.showUsed)) {
      query["ShowUsed"] = request.showUsed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitorResourceQuotaAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitorResourceQuotaAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitorResourceQuotaAttributeResponse({}));
  }

  /**
   * Queries the resource quotas of CloudMonitor.
   * 
   * @param request - DescribeMonitorResourceQuotaAttributeRequest
   * @returns DescribeMonitorResourceQuotaAttributeResponse
   */
  async describeMonitorResourceQuotaAttribute(request: $_model.DescribeMonitorResourceQuotaAttributeRequest): Promise<$_model.DescribeMonitorResourceQuotaAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitorResourceQuotaAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the AccessKey ID and AccessKey secret that are required to install the CloudMonitor agent on a third-party host.
   * 
   * @param request - DescribeMonitoringAgentAccessKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringAgentAccessKeyResponse
   */
  async describeMonitoringAgentAccessKeyWithOptions(request: $_model.DescribeMonitoringAgentAccessKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringAgentAccessKeyResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringAgentAccessKey",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringAgentAccessKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringAgentAccessKeyResponse({}));
  }

  /**
   * Queries the AccessKey ID and AccessKey secret that are required to install the CloudMonitor agent on a third-party host.
   * 
   * @param request - DescribeMonitoringAgentAccessKeyRequest
   * @returns DescribeMonitoringAgentAccessKeyResponse
   */
  async describeMonitoringAgentAccessKey(request: $_model.DescribeMonitoringAgentAccessKeyRequest): Promise<$_model.DescribeMonitoringAgentAccessKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringAgentAccessKeyWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the CloudMonitor agent.
   * 
   * @param request - DescribeMonitoringAgentConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringAgentConfigResponse
   */
  async describeMonitoringAgentConfigWithOptions(request: $_model.DescribeMonitoringAgentConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringAgentConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringAgentConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringAgentConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringAgentConfigResponse({}));
  }

  /**
   * Queries the configurations of the CloudMonitor agent.
   * 
   * @param request - DescribeMonitoringAgentConfigRequest
   * @returns DescribeMonitoringAgentConfigResponse
   */
  async describeMonitoringAgentConfig(request: $_model.DescribeMonitoringAgentConfigRequest): Promise<$_model.DescribeMonitoringAgentConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringAgentConfigWithOptions(request, runtime);
  }

  /**
   * Queries all hosts within the current Alibaba Cloud account, including hosts on which the CloudMonitor agent is installed and uninstalled.
   * 
   * @param request - DescribeMonitoringAgentHostsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringAgentHostsResponse
   */
  async describeMonitoringAgentHostsWithOptions(request: $_model.DescribeMonitoringAgentHostsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringAgentHostsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunHost)) {
      query["AliyunHost"] = request.aliyunHost;
    }

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

    if (!$dara.isNull(request.sysomStatus)) {
      query["SysomStatus"] = request.sysomStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringAgentHosts",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringAgentHostsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringAgentHostsResponse({}));
  }

  /**
   * Queries all hosts within the current Alibaba Cloud account, including hosts on which the CloudMonitor agent is installed and uninstalled.
   * 
   * @param request - DescribeMonitoringAgentHostsRequest
   * @returns DescribeMonitoringAgentHostsResponse
   */
  async describeMonitoringAgentHosts(request: $_model.DescribeMonitoringAgentHostsRequest): Promise<$_model.DescribeMonitoringAgentHostsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringAgentHostsWithOptions(request, runtime);
  }

  /**
   * 查询指定资源的进程数列表
   * 
   * @remarks
   * >  Before you call this operation, call the CreateMonitoringAgentProcess operation to create processes. For more information, see [CreateMonitoringAgentProcess](https://help.aliyun.com/document_detail/114951.html~).
   * This topic provides an example of how to query the processes of the `i-hp3hl3cx1pbahzy8****` instance. The response indicates the details of the `NGINX` and `HTTP` processes.
   * 
   * @param request - DescribeMonitoringAgentProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringAgentProcessesResponse
   */
  async describeMonitoringAgentProcessesWithOptions(request: $_model.DescribeMonitoringAgentProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringAgentProcessesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringAgentProcesses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringAgentProcessesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringAgentProcessesResponse({}));
  }

  /**
   * 查询指定资源的进程数列表
   * 
   * @remarks
   * >  Before you call this operation, call the CreateMonitoringAgentProcess operation to create processes. For more information, see [CreateMonitoringAgentProcess](https://help.aliyun.com/document_detail/114951.html~).
   * This topic provides an example of how to query the processes of the `i-hp3hl3cx1pbahzy8****` instance. The response indicates the details of the `NGINX` and `HTTP` processes.
   * 
   * @param request - DescribeMonitoringAgentProcessesRequest
   * @returns DescribeMonitoringAgentProcessesResponse
   */
  async describeMonitoringAgentProcesses(request: $_model.DescribeMonitoringAgentProcessesRequest): Promise<$_model.DescribeMonitoringAgentProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringAgentProcessesWithOptions(request, runtime);
  }

  /**
   * Queries the status of the CloudMonitor agent.
   * 
   * @remarks
   * This topic describes how to query the status of the CloudMonitor agent that is installed on the `i-hp3dunahluwajv6f****` instance. The result indicates that the CloudMonitor agent is in the `running` state.
   * 
   * @param request - DescribeMonitoringAgentStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringAgentStatusesResponse
   */
  async describeMonitoringAgentStatusesWithOptions(request: $_model.DescribeMonitoringAgentStatusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringAgentStatusesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostAvailabilityTaskId)) {
      query["HostAvailabilityTaskId"] = request.hostAvailabilityTaskId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringAgentStatuses",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringAgentStatusesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringAgentStatusesResponse({}));
  }

  /**
   * Queries the status of the CloudMonitor agent.
   * 
   * @remarks
   * This topic describes how to query the status of the CloudMonitor agent that is installed on the `i-hp3dunahluwajv6f****` instance. The result indicates that the CloudMonitor agent is in the `running` state.
   * 
   * @param request - DescribeMonitoringAgentStatusesRequest
   * @returns DescribeMonitoringAgentStatusesResponse
   */
  async describeMonitoringAgentStatuses(request: $_model.DescribeMonitoringAgentStatusesRequest): Promise<$_model.DescribeMonitoringAgentStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringAgentStatusesWithOptions(request, runtime);
  }

  /**
   * Queries the global configurations of the CloudMonitor agent.
   * 
   * @param request - DescribeMonitoringConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMonitoringConfigResponse
   */
  async describeMonitoringConfigWithOptions(request: $_model.DescribeMonitoringConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMonitoringConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMonitoringConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMonitoringConfigResponse({}));
  }

  /**
   * Queries the global configurations of the CloudMonitor agent.
   * 
   * @param request - DescribeMonitoringConfigRequest
   * @returns DescribeMonitoringConfigResponse
   */
  async describeMonitoringConfig(request: $_model.DescribeMonitoringConfigRequest): Promise<$_model.DescribeMonitoringConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMonitoringConfigWithOptions(request, runtime);
  }

  /**
   * Queries the keys of all tags that are attached to cloud resources in a region.
   * 
   * @remarks
   * >  If a tag is attached to multiple cloud resources in the region, the key of the tag is returned only once.
   * 
   * @param request - DescribeProductResourceTagKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductResourceTagKeyListResponse
   */
  async describeProductResourceTagKeyListWithOptions(request: $_model.DescribeProductResourceTagKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductResourceTagKeyListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductResourceTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductResourceTagKeyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductResourceTagKeyListResponse({}));
  }

  /**
   * Queries the keys of all tags that are attached to cloud resources in a region.
   * 
   * @remarks
   * >  If a tag is attached to multiple cloud resources in the region, the key of the tag is returned only once.
   * 
   * @param request - DescribeProductResourceTagKeyListRequest
   * @returns DescribeProductResourceTagKeyListResponse
   */
  async describeProductResourceTagKeyList(request: $_model.DescribeProductResourceTagKeyListRequest): Promise<$_model.DescribeProductResourceTagKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductResourceTagKeyListWithOptions(request, runtime);
  }

  /**
   * Queries the cloud services for which the initiative alert feature is enabled.
   * 
   * @param request - DescribeProductsOfActiveMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductsOfActiveMetricRuleResponse
   */
  async describeProductsOfActiveMetricRuleWithOptions(request: $_model.DescribeProductsOfActiveMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProductsOfActiveMetricRuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProductsOfActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProductsOfActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProductsOfActiveMetricRuleResponse({}));
  }

  /**
   * Queries the cloud services for which the initiative alert feature is enabled.
   * 
   * @param request - DescribeProductsOfActiveMetricRuleRequest
   * @returns DescribeProductsOfActiveMetricRuleResponse
   */
  async describeProductsOfActiveMetricRule(request: $_model.DescribeProductsOfActiveMetricRuleRequest): Promise<$_model.DescribeProductsOfActiveMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductsOfActiveMetricRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about monitored services in CloudMonitor.
   * 
   * @remarks
   * The information obtained by this operation includes the service description, namespace, and tags.
   * 
   * @param request - DescribeProjectMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectMetaResponse
   */
  async describeProjectMetaWithOptions(request: $_model.DescribeProjectMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectMetaResponse> {
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
      action: "DescribeProjectMeta",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectMetaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectMetaResponse({}));
  }

  /**
   * Queries the information about monitored services in CloudMonitor.
   * 
   * @remarks
   * The information obtained by this operation includes the service description, namespace, and tags.
   * 
   * @param request - DescribeProjectMetaRequest
   * @returns DescribeProjectMetaResponse
   */
  async describeProjectMeta(request: $_model.DescribeProjectMetaRequest): Promise<$_model.DescribeProjectMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectMetaWithOptions(request, runtime);
  }

  /**
   * Queries the details of a site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a site monitoring task whose ID is `cc641dff-c19d-45f3-ad0a-818a0c4f****`. The returned result indicates that the task name is `test123`, the URL that is monitored by the task is `https://aliyun.com`, and the name of the carrier is `Alibaba`.
   * 
   * @param request - DescribeSiteMonitorAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorAttributeResponse
   */
  async describeSiteMonitorAttributeWithOptions(request: $_model.DescribeSiteMonitorAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.includeAlert)) {
      query["IncludeAlert"] = request.includeAlert;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorAttributeResponse({}));
  }

  /**
   * Queries the details of a site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to query the details of a site monitoring task whose ID is `cc641dff-c19d-45f3-ad0a-818a0c4f****`. The returned result indicates that the task name is `test123`, the URL that is monitored by the task is `https://aliyun.com`, and the name of the carrier is `Alibaba`.
   * 
   * @param request - DescribeSiteMonitorAttributeRequest
   * @returns DescribeSiteMonitorAttributeResponse
   */
  async describeSiteMonitorAttribute(request: $_model.DescribeSiteMonitorAttributeRequest): Promise<$_model.DescribeSiteMonitorAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the fine-grained monitoring data of a site monitoring task.
   * 
   * @param request - DescribeSiteMonitorDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorDataResponse
   */
  async describeSiteMonitorDataWithOptions(request: $_model.DescribeSiteMonitorDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorDataResponse({}));
  }

  /**
   * Queries the fine-grained monitoring data of a site monitoring task.
   * 
   * @param request - DescribeSiteMonitorDataRequest
   * @returns DescribeSiteMonitorDataResponse
   */
  async describeSiteMonitorData(request: $_model.DescribeSiteMonitorDataRequest): Promise<$_model.DescribeSiteMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorDataWithOptions(request, runtime);
  }

  /**
   * Queries the detection points that are provided by carriers.
   * 
   * @remarks
   * This topic provides an example on how to query the detection points that are provided by China Unicom in Guiyang.
   * 
   * @param request - DescribeSiteMonitorISPCityListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorISPCityListResponse
   */
  async describeSiteMonitorISPCityListWithOptions(request: $_model.DescribeSiteMonitorISPCityListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorISPCityListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.IPV4)) {
      query["IPV4"] = request.IPV4;
    }

    if (!$dara.isNull(request.IPV6)) {
      query["IPV6"] = request.IPV6;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.viewAll)) {
      query["ViewAll"] = request.viewAll;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorISPCityList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorISPCityListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorISPCityListResponse({}));
  }

  /**
   * Queries the detection points that are provided by carriers.
   * 
   * @remarks
   * This topic provides an example on how to query the detection points that are provided by China Unicom in Guiyang.
   * 
   * @param request - DescribeSiteMonitorISPCityListRequest
   * @returns DescribeSiteMonitorISPCityListResponse
   */
  async describeSiteMonitorISPCityList(request: $_model.DescribeSiteMonitorISPCityListRequest): Promise<$_model.DescribeSiteMonitorISPCityListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorISPCityListWithOptions(request, runtime);
  }

  /**
   * Queries site monitoring tasks.
   * 
   * @remarks
   * This topic provides an example on how to query all the site monitoring tasks of your Alibaba Cloud account. In this example, the returned result indicates that the Alibaba Cloud account has one site monitoring task named `HanZhou_ECS2`.
   * 
   * @param request - DescribeSiteMonitorListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorListResponse
   */
  async describeSiteMonitorListWithOptions(request: $_model.DescribeSiteMonitorListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentGroup)) {
      query["AgentGroup"] = request.agentGroup;
    }

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

    if (!$dara.isNull(request.taskState)) {
      query["TaskState"] = request.taskState;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorListResponse({}));
  }

  /**
   * Queries site monitoring tasks.
   * 
   * @remarks
   * This topic provides an example on how to query all the site monitoring tasks of your Alibaba Cloud account. In this example, the returned result indicates that the Alibaba Cloud account has one site monitoring task named `HanZhou_ECS2`.
   * 
   * @param request - DescribeSiteMonitorListRequest
   * @returns DescribeSiteMonitorListResponse
   */
  async describeSiteMonitorList(request: $_model.DescribeSiteMonitorListRequest): Promise<$_model.DescribeSiteMonitorListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorListWithOptions(request, runtime);
  }

  /**
   * Queries the logs of one or more instant test tasks.
   * 
   * @remarks
   * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring.
   * This topic provides an example to show how to query the logs of an instant test task whose ID is `afa5c3ce-f944-4363-9edb-ce919a29****`.
   * 
   * @param request - DescribeSiteMonitorLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorLogResponse
   */
  async describeSiteMonitorLogWithOptions(request: $_model.DescribeSiteMonitorLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.browser)) {
      query["Browser"] = request.browser;
    }

    if (!$dara.isNull(request.browserInfo)) {
      query["BrowserInfo"] = request.browserInfo;
    }

    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.device)) {
      query["Device"] = request.device;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorLog",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorLogResponse({}));
  }

  /**
   * Queries the logs of one or more instant test tasks.
   * 
   * @remarks
   * You can create an instant test task only by using the Alibaba Cloud account that you used to enable Network Analysis and Monitoring.
   * This topic provides an example to show how to query the logs of an instant test task whose ID is `afa5c3ce-f944-4363-9edb-ce919a29****`.
   * 
   * @param request - DescribeSiteMonitorLogRequest
   * @returns DescribeSiteMonitorLogResponse
   */
  async describeSiteMonitorLog(request: $_model.DescribeSiteMonitorLogRequest): Promise<$_model.DescribeSiteMonitorLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorLogWithOptions(request, runtime);
  }

  /**
   * Queries the quotas and version of site monitoring.
   * 
   * @param request - DescribeSiteMonitorQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorQuotaResponse
   */
  async describeSiteMonitorQuotaWithOptions(request: $_model.DescribeSiteMonitorQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorQuotaResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSiteMonitorQuota",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorQuotaResponse({}));
  }

  /**
   * Queries the quotas and version of site monitoring.
   * 
   * @param request - DescribeSiteMonitorQuotaRequest
   * @returns DescribeSiteMonitorQuotaResponse
   */
  async describeSiteMonitorQuota(request: $_model.DescribeSiteMonitorQuotaRequest): Promise<$_model.DescribeSiteMonitorQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a specified metric for a specified site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of the `Availability` metric for a site monitoring task whose ID is `ef4cdc8b-9dc7-43e7-810e-f950e56c****`. The result indicates that the availability rate of the site is `100%`.
   * 
   * @param request - DescribeSiteMonitorStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSiteMonitorStatisticsResponse
   */
  async describeSiteMonitorStatisticsWithOptions(request: $_model.DescribeSiteMonitorStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSiteMonitorStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

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
      action: "DescribeSiteMonitorStatistics",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSiteMonitorStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSiteMonitorStatisticsResponse({}));
  }

  /**
   * Queries the statistics of a specified metric for a specified site monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to query the statistics of the `Availability` metric for a site monitoring task whose ID is `ef4cdc8b-9dc7-43e7-810e-f950e56c****`. The result indicates that the availability rate of the site is `100%`.
   * 
   * @param request - DescribeSiteMonitorStatisticsRequest
   * @returns DescribeSiteMonitorStatisticsResponse
   */
  async describeSiteMonitorStatistics(request: $_model.DescribeSiteMonitorStatisticsRequest): Promise<$_model.DescribeSiteMonitorStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSiteMonitorStatisticsWithOptions(request, runtime);
  }

  /**
   * 查询拨测探测节点列表
   * 
   * @param request - DescribeSyntheticProbeListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyntheticProbeListResponse
   */
  async describeSyntheticProbeListWithOptions(request: $_model.DescribeSyntheticProbeListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyntheticProbeListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.city)) {
      query["City"] = request.city;
    }

    if (!$dara.isNull(request.idcProbe)) {
      query["IdcProbe"] = request.idcProbe;
    }

    if (!$dara.isNull(request.ipv4)) {
      query["Ipv4"] = request.ipv4;
    }

    if (!$dara.isNull(request.ipv6)) {
      query["Ipv6"] = request.ipv6;
    }

    if (!$dara.isNull(request.isp)) {
      query["Isp"] = request.isp;
    }

    if (!$dara.isNull(request.lmProbe)) {
      query["LmProbe"] = request.lmProbe;
    }

    if (!$dara.isNull(request.mbProbe)) {
      query["MbProbe"] = request.mbProbe;
    }

    if (!$dara.isNull(request.viewAll)) {
      query["ViewAll"] = request.viewAll;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyntheticProbeList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyntheticProbeListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyntheticProbeListResponse({}));
  }

  /**
   * 查询拨测探测节点列表
   * 
   * @param request - DescribeSyntheticProbeListRequest
   * @returns DescribeSyntheticProbeListResponse
   */
  async describeSyntheticProbeList(request: $_model.DescribeSyntheticProbeListRequest): Promise<$_model.DescribeSyntheticProbeListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyntheticProbeListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a system event.
   * 
   * @param request - DescribeSystemEventAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemEventAttributeResponse
   */
  async describeSystemEventAttributeWithOptions(request: $_model.DescribeSystemEventAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemEventAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemEventAttribute",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemEventAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemEventAttributeResponse({}));
  }

  /**
   * Queries the details of a system event.
   * 
   * @param request - DescribeSystemEventAttributeRequest
   * @returns DescribeSystemEventAttributeResponse
   */
  async describeSystemEventAttribute(request: $_model.DescribeSystemEventAttributeRequest): Promise<$_model.DescribeSystemEventAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemEventAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the number of times that a system event of a cloud service has occurred.
   * 
   * @remarks
   * ### [](#)Background information
   * You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the cloud services supported by CloudMonitor and their system events.
   * ### [](#)Description
   * This topic provides an example on how to query the number of times that a system event of `Elastic Compute Service (ECS)` has occurred. The returned result shows that the specified system event has occurred three times.
   * 
   * @param request - DescribeSystemEventCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemEventCountResponse
   */
  async describeSystemEventCountWithOptions(request: $_model.DescribeSystemEventCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemEventCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemEventCount",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemEventCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemEventCountResponse({}));
  }

  /**
   * Queries the number of times that a system event of a cloud service has occurred.
   * 
   * @remarks
   * ### [](#)Background information
   * You can call the [DescribeSystemEventMetaList](https://help.aliyun.com/document_detail/114972.html) operation to query the cloud services supported by CloudMonitor and their system events.
   * ### [](#)Description
   * This topic provides an example on how to query the number of times that a system event of `Elastic Compute Service (ECS)` has occurred. The returned result shows that the specified system event has occurred three times.
   * 
   * @param request - DescribeSystemEventCountRequest
   * @returns DescribeSystemEventCountResponse
   */
  async describeSystemEventCount(request: $_model.DescribeSystemEventCountRequest): Promise<$_model.DescribeSystemEventCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemEventCountWithOptions(request, runtime);
  }

  /**
   * Queries the number of times a system event occurred during each interval within a period of time.
   * 
   * @param request - DescribeSystemEventHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemEventHistogramResponse
   */
  async describeSystemEventHistogramWithOptions(request: $_model.DescribeSystemEventHistogramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemEventHistogramResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.searchKeywords)) {
      query["SearchKeywords"] = request.searchKeywords;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemEventHistogram",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemEventHistogramResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemEventHistogramResponse({}));
  }

  /**
   * Queries the number of times a system event occurred during each interval within a period of time.
   * 
   * @param request - DescribeSystemEventHistogramRequest
   * @returns DescribeSystemEventHistogramResponse
   */
  async describeSystemEventHistogram(request: $_model.DescribeSystemEventHistogramRequest): Promise<$_model.DescribeSystemEventHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemEventHistogramWithOptions(request, runtime);
  }

  /**
   * Queries the meta information about system events.
   * 
   * @param request - DescribeSystemEventMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSystemEventMetaListResponse
   */
  async describeSystemEventMetaListWithOptions(request: $_model.DescribeSystemEventMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSystemEventMetaListResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSystemEventMetaList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSystemEventMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSystemEventMetaListResponse({}));
  }

  /**
   * Queries the meta information about system events.
   * 
   * @param request - DescribeSystemEventMetaListRequest
   * @returns DescribeSystemEventMetaListResponse
   */
  async describeSystemEventMetaList(request: $_model.DescribeSystemEventMetaListRequest): Promise<$_model.DescribeSystemEventMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSystemEventMetaListWithOptions(request, runtime);
  }

  /**
   * Queries tag keys.
   * 
   * @param request - DescribeTagKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagKeyListResponse
   */
  async describeTagKeyListWithOptions(request: $_model.DescribeTagKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagKeyListResponse> {
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
      action: "DescribeTagKeyList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagKeyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagKeyListResponse({}));
  }

  /**
   * Queries tag keys.
   * 
   * @param request - DescribeTagKeyListRequest
   * @returns DescribeTagKeyListResponse
   */
  async describeTagKeyList(request: $_model.DescribeTagKeyListRequest): Promise<$_model.DescribeTagKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagKeyListWithOptions(request, runtime);
  }

  /**
   * Queries the tag values corresponding to a specified tag key.
   * 
   * @remarks
   * This topic provides an example of how to query the tag values corresponding to `tagKey1`. The return results are `tagValue1` and `tagValue2`.
   * 
   * @param request - DescribeTagValueListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagValueListResponse
   */
  async describeTagValueListWithOptions(request: $_model.DescribeTagValueListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagValueListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTagValueList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagValueListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagValueListResponse({}));
  }

  /**
   * Queries the tag values corresponding to a specified tag key.
   * 
   * @remarks
   * This topic provides an example of how to query the tag values corresponding to `tagKey1`. The return results are `tagValue1` and `tagValue2`.
   * 
   * @param request - DescribeTagValueListRequest
   * @returns DescribeTagValueListResponse
   */
  async describeTagValueList(request: $_model.DescribeTagValueListRequest): Promise<$_model.DescribeTagValueListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTagValueListWithOptions(request, runtime);
  }

  /**
   * Queries unhealthy instances detected by availability monitoring tasks.
   * 
   * @param request - DescribeUnhealthyHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUnhealthyHostAvailabilityResponse
   */
  async describeUnhealthyHostAvailabilityWithOptions(request: $_model.DescribeUnhealthyHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUnhealthyHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUnhealthyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUnhealthyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUnhealthyHostAvailabilityResponse({}));
  }

  /**
   * Queries unhealthy instances detected by availability monitoring tasks.
   * 
   * @param request - DescribeUnhealthyHostAvailabilityRequest
   * @returns DescribeUnhealthyHostAvailabilityResponse
   */
  async describeUnhealthyHostAvailability(request: $_model.DescribeUnhealthyHostAvailabilityRequest): Promise<$_model.DescribeUnhealthyHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUnhealthyHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * Disables the initiative alert feature for a cloud service.
   * 
   * @param request - DisableActiveMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableActiveMetricRuleResponse
   */
  async disableActiveMetricRuleWithOptions(request: $_model.DisableActiveMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableActiveMetricRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableActiveMetricRuleResponse({}));
  }

  /**
   * Disables the initiative alert feature for a cloud service.
   * 
   * @param request - DisableActiveMetricRuleRequest
   * @returns DisableActiveMetricRuleResponse
   */
  async disableActiveMetricRule(request: $_model.DisableActiveMetricRuleRequest): Promise<$_model.DisableActiveMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableActiveMetricRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DisableEventRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableEventRulesResponse
   */
  async disableEventRulesWithOptions(request: $_model.DisableEventRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableEventRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableEventRulesResponse>(await this.callApi(params, req, runtime), new $_model.DisableEventRulesResponse({}));
  }

  /**
   * @param request - DisableEventRulesRequest
   * @returns DisableEventRulesResponse
   */
  async disableEventRules(request: $_model.DisableEventRulesRequest): Promise<$_model.DisableEventRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableEventRulesWithOptions(request, runtime);
  }

  /**
   * Disables availability monitoring tasks.
   * 
   * @param request - DisableHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableHostAvailabilityResponse
   */
  async disableHostAvailabilityWithOptions(request: $_model.DisableHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.DisableHostAvailabilityResponse({}));
  }

  /**
   * Disables availability monitoring tasks.
   * 
   * @param request - DisableHostAvailabilityRequest
   * @returns DisableHostAvailabilityResponse
   */
  async disableHostAvailability(request: $_model.DisableHostAvailabilityRequest): Promise<$_model.DisableHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * Disables alert rules.
   * 
   * @param request - DisableMetricRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableMetricRulesResponse
   */
  async disableMetricRulesWithOptions(request: $_model.DisableMetricRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableMetricRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableMetricRulesResponse>(await this.callApi(params, req, runtime), new $_model.DisableMetricRulesResponse({}));
  }

  /**
   * Disables alert rules.
   * 
   * @param request - DisableMetricRulesRequest
   * @returns DisableMetricRulesResponse
   */
  async disableMetricRules(request: $_model.DisableMetricRulesRequest): Promise<$_model.DisableMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableMetricRulesWithOptions(request, runtime);
  }

  /**
   * Disables site monitoring tasks.
   * 
   * @param request - DisableSiteMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSiteMonitorsResponse
   */
  async disableSiteMonitorsWithOptions(request: $_model.DisableSiteMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSiteMonitorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.DisableSiteMonitorsResponse({}));
  }

  /**
   * Disables site monitoring tasks.
   * 
   * @param request - DisableSiteMonitorsRequest
   * @returns DisableSiteMonitorsResponse
   */
  async disableSiteMonitors(request: $_model.DisableSiteMonitorsRequest): Promise<$_model.DisableSiteMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSiteMonitorsWithOptions(request, runtime);
  }

  /**
   * Enables the initiative alert feature for a cloud service.
   * 
   * @param request - EnableActiveMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableActiveMetricRuleResponse
   */
  async enableActiveMetricRuleWithOptions(request: $_model.EnableActiveMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableActiveMetricRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableActiveMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableActiveMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableActiveMetricRuleResponse({}));
  }

  /**
   * Enables the initiative alert feature for a cloud service.
   * 
   * @param request - EnableActiveMetricRuleRequest
   * @returns EnableActiveMetricRuleResponse
   */
  async enableActiveMetricRule(request: $_model.EnableActiveMetricRuleRequest): Promise<$_model.EnableActiveMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableActiveMetricRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EnableEventRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableEventRulesResponse
   */
  async enableEventRulesWithOptions(request: $_model.EnableEventRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableEventRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleNames)) {
      query["RuleNames"] = request.ruleNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableEventRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableEventRulesResponse>(await this.callApi(params, req, runtime), new $_model.EnableEventRulesResponse({}));
  }

  /**
   * @param request - EnableEventRulesRequest
   * @returns EnableEventRulesResponse
   */
  async enableEventRules(request: $_model.EnableEventRulesRequest): Promise<$_model.EnableEventRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableEventRulesWithOptions(request, runtime);
  }

  /**
   * Enables availability monitoring tasks.
   * 
   * @param request - EnableHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHostAvailabilityResponse
   */
  async enableHostAvailabilityWithOptions(request: $_model.EnableHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.EnableHostAvailabilityResponse({}));
  }

  /**
   * Enables availability monitoring tasks.
   * 
   * @param request - EnableHostAvailabilityRequest
   * @returns EnableHostAvailabilityResponse
   */
  async enableHostAvailability(request: $_model.EnableHostAvailabilityRequest): Promise<$_model.EnableHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * Enables or disables multiple blacklist policies at a time.
   * 
   * @param request - EnableMetricRuleBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMetricRuleBlackListResponse
   */
  async enableMetricRuleBlackListWithOptions(request: $_model.EnableMetricRuleBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableMetricRuleBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.isEnable)) {
      query["IsEnable"] = request.isEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new $_model.EnableMetricRuleBlackListResponse({}));
  }

  /**
   * Enables or disables multiple blacklist policies at a time.
   * 
   * @param request - EnableMetricRuleBlackListRequest
   * @returns EnableMetricRuleBlackListResponse
   */
  async enableMetricRuleBlackList(request: $_model.EnableMetricRuleBlackListRequest): Promise<$_model.EnableMetricRuleBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
   * Enables alert rules.
   * 
   * @param request - EnableMetricRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMetricRulesResponse
   */
  async enableMetricRulesWithOptions(request: $_model.EnableMetricRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableMetricRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableMetricRulesResponse>(await this.callApi(params, req, runtime), new $_model.EnableMetricRulesResponse({}));
  }

  /**
   * Enables alert rules.
   * 
   * @param request - EnableMetricRulesRequest
   * @returns EnableMetricRulesResponse
   */
  async enableMetricRules(request: $_model.EnableMetricRulesRequest): Promise<$_model.EnableMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableMetricRulesWithOptions(request, runtime);
  }

  /**
   * Enables site monitoring tasks.
   * 
   * @param request - EnableSiteMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSiteMonitorsResponse
   */
  async enableSiteMonitorsWithOptions(request: $_model.EnableSiteMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSiteMonitorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSiteMonitors",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSiteMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.EnableSiteMonitorsResponse({}));
  }

  /**
   * Enables site monitoring tasks.
   * 
   * @param request - EnableSiteMonitorsRequest
   * @returns EnableSiteMonitorsResponse
   */
  async enableSiteMonitors(request: $_model.EnableSiteMonitorsRequest): Promise<$_model.EnableSiteMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSiteMonitorsWithOptions(request, runtime);
  }

  /**
   * InstallMonitoringAgent
   * 
   * @remarks
   * ## Prerequisites
   * The Cloud Assistant client is installed on an ECS instance. For more information about how to install the Cloud Assistant client, see [Overview](https://help.aliyun.com/document_detail/64601.html).
   * 
   * @param request - InstallMonitoringAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallMonitoringAgentResponse
   */
  async installMonitoringAgentWithOptions(request: $_model.InstallMonitoringAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallMonitoringAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.installCommand)) {
      query["InstallCommand"] = request.installCommand;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new $_model.InstallMonitoringAgentResponse({}));
  }

  /**
   * InstallMonitoringAgent
   * 
   * @remarks
   * ## Prerequisites
   * The Cloud Assistant client is installed on an ECS instance. For more information about how to install the Cloud Assistant client, see [Overview](https://help.aliyun.com/document_detail/64601.html).
   * 
   * @param request - InstallMonitoringAgentRequest
   * @returns InstallMonitoringAgentResponse
   */
  async installMonitoringAgent(request: $_model.InstallMonitoringAgentRequest): Promise<$_model.InstallMonitoringAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installMonitoringAgentWithOptions(request, runtime);
  }

  /**
   * 修改应用分组内的进程监控
   * 
   * @param request - ModifyGroupMonitoringAgentProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGroupMonitoringAgentProcessResponse
   */
  async modifyGroupMonitoringAgentProcessWithOptions(request: $_model.ModifyGroupMonitoringAgentProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGroupMonitoringAgentProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.matchExpressFilterRelation)) {
      query["MatchExpressFilterRelation"] = request.matchExpressFilterRelation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGroupMonitoringAgentProcess",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGroupMonitoringAgentProcessResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGroupMonitoringAgentProcessResponse({}));
  }

  /**
   * 修改应用分组内的进程监控
   * 
   * @param request - ModifyGroupMonitoringAgentProcessRequest
   * @returns ModifyGroupMonitoringAgentProcessResponse
   */
  async modifyGroupMonitoringAgentProcess(request: $_model.ModifyGroupMonitoringAgentProcessRequest): Promise<$_model.ModifyGroupMonitoringAgentProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGroupMonitoringAgentProcessWithOptions(request, runtime);
  }

  /**
   * Modifies an availability monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to change the name of an availability monitoring task named `12345` in an application group named `123456` to `task2`.
   * 
   * @param request - ModifyHostAvailabilityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostAvailabilityResponse
   */
  async modifyHostAvailabilityWithOptions(request: $_model.ModifyHostAvailabilityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostAvailabilityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertConfigEscalationList)) {
      query["AlertConfigEscalationList"] = request.alertConfigEscalationList;
    }

    if (!$dara.isNull(request.alertConfigTargetList)) {
      query["AlertConfigTargetList"] = request.alertConfigTargetList;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskScope)) {
      query["TaskScope"] = request.taskScope;
    }

    if (!$dara.isNull(request.alertConfig)) {
      query["AlertConfig"] = request.alertConfig;
    }

    if (!$dara.isNull(request.taskOption)) {
      query["TaskOption"] = request.taskOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostAvailability",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostAvailabilityResponse({}));
  }

  /**
   * Modifies an availability monitoring task.
   * 
   * @remarks
   * This topic provides an example on how to change the name of an availability monitoring task named `12345` in an application group named `123456` to `task2`.
   * 
   * @param request - ModifyHostAvailabilityRequest
   * @returns ModifyHostAvailabilityResponse
   */
  async modifyHostAvailability(request: $_model.ModifyHostAvailabilityRequest): Promise<$_model.ModifyHostAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostAvailabilityWithOptions(request, runtime);
  }

  /**
   * 修改非阿里云的主机显示信息
   * 
   * @remarks
   * ***
   * 
   * @param request - ModifyHostInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHostInfoResponse
   */
  async modifyHostInfoWithOptions(request: $_model.ModifyHostInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHostInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostName)) {
      query["HostName"] = request.hostName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHostInfo",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHostInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHostInfoResponse({}));
  }

  /**
   * 修改非阿里云的主机显示信息
   * 
   * @remarks
   * ***
   * 
   * @param request - ModifyHostInfoRequest
   * @returns ModifyHostInfoResponse
   */
  async modifyHostInfo(request: $_model.ModifyHostInfoRequest): Promise<$_model.ModifyHostInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHostInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a namespace.
   * 
   * @remarks
   * This topic provides an example on how to change the data retention period of the `aliyun` namespace to `cms.s1.2xlarge`. The response shows that the namespace is modified.
   * 
   * @param request - ModifyHybridMonitorNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridMonitorNamespaceResponse
   */
  async modifyHybridMonitorNamespaceWithOptions(request: $_model.ModifyHybridMonitorNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridMonitorNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.spec)) {
      query["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridMonitorNamespace",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridMonitorNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridMonitorNamespaceResponse({}));
  }

  /**
   * Modifies a namespace.
   * 
   * @remarks
   * This topic provides an example on how to change the data retention period of the `aliyun` namespace to `cms.s1.2xlarge`. The response shows that the namespace is modified.
   * 
   * @param request - ModifyHybridMonitorNamespaceRequest
   * @returns ModifyHybridMonitorNamespaceResponse
   */
  async modifyHybridMonitorNamespace(request: $_model.ModifyHybridMonitorNamespaceRequest): Promise<$_model.ModifyHybridMonitorNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridMonitorNamespaceWithOptions(request, runtime);
  }

  /**
   * Modifies a Logstore group.
   * 
   * @remarks
   * In this example, a Logstore group named `Logstore_test` is modified. The Logstore of the `aliyun-project` project in the `cn-hangzhou` region is changed to `Logstore-aliyun-all`. The response shows that the Logstore group is modified.
   * 
   * @param request - ModifyHybridMonitorSLSGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridMonitorSLSGroupResponse
   */
  async modifyHybridMonitorSLSGroupWithOptions(request: $_model.ModifyHybridMonitorSLSGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridMonitorSLSGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.SLSGroupConfig)) {
      query["SLSGroupConfig"] = request.SLSGroupConfig;
    }

    if (!$dara.isNull(request.SLSGroupDescription)) {
      query["SLSGroupDescription"] = request.SLSGroupDescription;
    }

    if (!$dara.isNull(request.SLSGroupName)) {
      query["SLSGroupName"] = request.SLSGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridMonitorSLSGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridMonitorSLSGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridMonitorSLSGroupResponse({}));
  }

  /**
   * Modifies a Logstore group.
   * 
   * @remarks
   * In this example, a Logstore group named `Logstore_test` is modified. The Logstore of the `aliyun-project` project in the `cn-hangzhou` region is changed to `Logstore-aliyun-all`. The response shows that the Logstore group is modified.
   * 
   * @param request - ModifyHybridMonitorSLSGroupRequest
   * @returns ModifyHybridMonitorSLSGroupResponse
   */
  async modifyHybridMonitorSLSGroup(request: $_model.ModifyHybridMonitorSLSGroupRequest): Promise<$_model.ModifyHybridMonitorSLSGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridMonitorSLSGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a metric for the logs that are imported from Log Service.
   * 
   * @remarks
   * This topic provides an example on how to change the collection period of a metric import task whose ID is `36****` to `15` seconds. The task is used to monitor the logs that are imported from Log Service. The returned result indicates that the metric is modified.
   * 
   * @param request - ModifyHybridMonitorTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyHybridMonitorTaskResponse
   */
  async modifyHybridMonitorTaskWithOptions(request: $_model.ModifyHybridMonitorTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyHybridMonitorTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.attachLabels)) {
      query["AttachLabels"] = request.attachLabels;
    }

    if (!$dara.isNull(request.collectInterval)) {
      query["CollectInterval"] = request.collectInterval;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.SLSProcessConfig)) {
      query["SLSProcessConfig"] = request.SLSProcessConfig;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyHybridMonitorTask",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyHybridMonitorTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyHybridMonitorTaskResponse({}));
  }

  /**
   * Modifies a metric for the logs that are imported from Log Service.
   * 
   * @remarks
   * This topic provides an example on how to change the collection period of a metric import task whose ID is `36****` to `15` seconds. The task is used to monitor the logs that are imported from Log Service. The returned result indicates that the metric is modified.
   * 
   * @param request - ModifyHybridMonitorTaskRequest
   * @returns ModifyHybridMonitorTaskResponse
   */
  async modifyHybridMonitorTask(request: $_model.ModifyHybridMonitorTaskRequest): Promise<$_model.ModifyHybridMonitorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyHybridMonitorTaskWithOptions(request, runtime);
  }

  /**
   * Modifies a blacklist policy.
   * 
   * @param request - ModifyMetricRuleBlackListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMetricRuleBlackListResponse
   */
  async modifyMetricRuleBlackListWithOptions(request: $_model.ModifyMetricRuleBlackListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMetricRuleBlackListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.effectiveTime)) {
      query["EffectiveTime"] = request.effectiveTime;
    }

    if (!$dara.isNull(request.enableEndTime)) {
      query["EnableEndTime"] = request.enableEndTime;
    }

    if (!$dara.isNull(request.enableStartTime)) {
      query["EnableStartTime"] = request.enableStartTime;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.instances)) {
      query["Instances"] = request.instances;
    }

    if (!$dara.isNull(request.metrics)) {
      query["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    if (!$dara.isNull(request.scopeValue)) {
      query["ScopeValue"] = request.scopeValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMetricRuleBlackList",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMetricRuleBlackListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMetricRuleBlackListResponse({}));
  }

  /**
   * Modifies a blacklist policy.
   * 
   * @param request - ModifyMetricRuleBlackListRequest
   * @returns ModifyMetricRuleBlackListResponse
   */
  async modifyMetricRuleBlackList(request: $_model.ModifyMetricRuleBlackListRequest): Promise<$_model.ModifyMetricRuleBlackListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMetricRuleBlackListWithOptions(request, runtime);
  }

  /**
   * Modifies an alert template.
   * 
   * @remarks
   * This topic provides an example on how to modify an alert template whose version is `1` and ID is `123456`. The alert level is changed to `Critical`. The statistical method is changed to `Average`. The alert threshold comparator is changed to `GreaterThanOrEqualToThreshold`. The alert threshold is changed to `90`. The number of alert retries is changed to `3`. The response shows that the alert template is modified.
   * 
   * @param request - ModifyMetricRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMetricRuleTemplateResponse
   */
  async modifyMetricRuleTemplateWithOptions(request: $_model.ModifyMetricRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMetricRuleTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertTemplates)) {
      query["AlertTemplates"] = request.alertTemplates;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.restVersion)) {
      query["RestVersion"] = request.restVersion;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMetricRuleTemplate",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMetricRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMetricRuleTemplateResponse({}));
  }

  /**
   * Modifies an alert template.
   * 
   * @remarks
   * This topic provides an example on how to modify an alert template whose version is `1` and ID is `123456`. The alert level is changed to `Critical`. The statistical method is changed to `Average`. The alert threshold comparator is changed to `GreaterThanOrEqualToThreshold`. The alert threshold is changed to `90`. The number of alert retries is changed to `3`. The response shows that the alert template is modified.
   * 
   * @param request - ModifyMetricRuleTemplateRequest
   * @returns ModifyMetricRuleTemplateResponse
   */
  async modifyMetricRuleTemplate(request: $_model.ModifyMetricRuleTemplateRequest): Promise<$_model.ModifyMetricRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMetricRuleTemplateWithOptions(request, runtime);
  }

  /**
   * 修改应用分组
   * 
   * @param request - ModifyMonitorGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMonitorGroupResponse
   */
  async modifyMonitorGroupWithOptions(request: $_model.ModifyMonitorGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMonitorGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMonitorGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMonitorGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMonitorGroupResponse({}));
  }

  /**
   * 修改应用分组
   * 
   * @param request - ModifyMonitorGroupRequest
   * @returns ModifyMonitorGroupResponse
   */
  async modifyMonitorGroup(request: $_model.ModifyMonitorGroupRequest): Promise<$_model.ModifyMonitorGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMonitorGroupWithOptions(request, runtime);
  }

  /**
   * 修改应用分组中的资源
   * 
   * @param request - ModifyMonitorGroupInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMonitorGroupInstancesResponse
   */
  async modifyMonitorGroupInstancesWithOptions(request: $_model.ModifyMonitorGroupInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMonitorGroupInstancesResponse> {
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
      action: "ModifyMonitorGroupInstances",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMonitorGroupInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMonitorGroupInstancesResponse({}));
  }

  /**
   * 修改应用分组中的资源
   * 
   * @param request - ModifyMonitorGroupInstancesRequest
   * @returns ModifyMonitorGroupInstancesResponse
   */
  async modifyMonitorGroupInstances(request: $_model.ModifyMonitorGroupInstancesRequest): Promise<$_model.ModifyMonitorGroupInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMonitorGroupInstancesWithOptions(request, runtime);
  }

  /**
   * Modifies a site monitoring task.
   * 
   * @remarks
   * The number of site monitoring tasks.
   * 
   * @param request - ModifySiteMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySiteMonitorResponse
   */
  async modifySiteMonitorWithOptions(request: $_model.ModifySiteMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySiteMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.customSchedule)) {
      query["CustomSchedule"] = request.customSchedule;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.intervalUnit)) {
      query["IntervalUnit"] = request.intervalUnit;
    }

    if (!$dara.isNull(request.ispCities)) {
      query["IspCities"] = request.ispCities;
    }

    if (!$dara.isNull(request.optionsJson)) {
      query["OptionsJson"] = request.optionsJson;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySiteMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySiteMonitorResponse>(await this.callApi(params, req, runtime), new $_model.ModifySiteMonitorResponse({}));
  }

  /**
   * Modifies a site monitoring task.
   * 
   * @remarks
   * The number of site monitoring tasks.
   * 
   * @param request - ModifySiteMonitorRequest
   * @returns ModifySiteMonitorResponse
   */
  async modifySiteMonitor(request: $_model.ModifySiteMonitorRequest): Promise<$_model.ModifySiteMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySiteMonitorWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert contact.
   * 
   * @param request - PutContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutContactResponse
   */
  async putContactWithOptions(request: $_model.PutContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.channels)) {
      query["Channels"] = request.channels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutContact",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutContactResponse>(await this.callApi(params, req, runtime), new $_model.PutContactResponse({}));
  }

  /**
   * Creates or modifies an alert contact.
   * 
   * @param request - PutContactRequest
   * @returns PutContactResponse
   */
  async putContact(request: $_model.PutContactRequest): Promise<$_model.PutContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putContactWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert contact group.
   * 
   * @remarks
   * This topic provides an example on how to create an alert contact group named `ECS_Group`.
   * 
   * @param request - PutContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutContactGroupResponse
   */
  async putContactGroupWithOptions(request: $_model.PutContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactNames)) {
      query["ContactNames"] = request.contactNames;
    }

    if (!$dara.isNull(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!$dara.isNull(request.enableSubscribed)) {
      query["EnableSubscribed"] = request.enableSubscribed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutContactGroup",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.PutContactGroupResponse({}));
  }

  /**
   * Creates or modifies an alert contact group.
   * 
   * @remarks
   * This topic provides an example on how to create an alert contact group named `ECS_Group`.
   * 
   * @param request - PutContactGroupRequest
   * @returns PutContactGroupResponse
   */
  async putContactGroup(request: $_model.PutContactGroupRequest): Promise<$_model.PutContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putContactGroupWithOptions(request, runtime);
  }

  /**
   * Reports custom events.
   * 
   * @param request - PutCustomEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutCustomEventResponse
   */
  async putCustomEventWithOptions(request: $_model.PutCustomEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutCustomEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventInfo)) {
      query["EventInfo"] = request.eventInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutCustomEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutCustomEventResponse>(await this.callApi(params, req, runtime), new $_model.PutCustomEventResponse({}));
  }

  /**
   * Reports custom events.
   * 
   * @param request - PutCustomEventRequest
   * @returns PutCustomEventResponse
   */
  async putCustomEvent(request: $_model.PutCustomEventRequest): Promise<$_model.PutCustomEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCustomEventWithOptions(request, runtime);
  }

  /**
   * @remarks
   * Before you call this operation, call the PutCustomEvent operation to report the monitoring data of the custom event. For more information, see [PutCustomEvent](https://help.aliyun.com/document_detail/115012.html).
   * 
   * @param request - PutCustomEventRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutCustomEventRuleResponse
   */
  async putCustomEventRuleWithOptions(request: $_model.PutCustomEventRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutCustomEventRuleResponse> {
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

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
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
      action: "PutCustomEventRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutCustomEventRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutCustomEventRuleResponse({}));
  }

  /**
   * @remarks
   * Before you call this operation, call the PutCustomEvent operation to report the monitoring data of the custom event. For more information, see [PutCustomEvent](https://help.aliyun.com/document_detail/115012.html).
   * 
   * @param request - PutCustomEventRuleRequest
   * @returns PutCustomEventRuleResponse
   */
  async putCustomEventRule(request: $_model.PutCustomEventRuleRequest): Promise<$_model.PutCustomEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCustomEventRuleWithOptions(request, runtime);
  }

  /**
   * Reports monitoring data.
   * 
   * @remarks
   * >  We recommend that you call the [PutHybridMonitorMetricData](https://help.aliyun.com/document_detail/383455.html) operation of Hybrid Cloud Monitoring to report monitoring data.
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
      version: "2019-01-01",
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
   * Reports monitoring data.
   * 
   * @remarks
   * >  We recommend that you call the [PutHybridMonitorMetricData](https://help.aliyun.com/document_detail/383455.html) operation of Hybrid Cloud Monitoring to report monitoring data.
   * 
   * @param request - PutCustomMetricRequest
   * @returns PutCustomMetricResponse
   */
  async putCustomMetric(request: $_model.PutCustomMetricRequest): Promise<$_model.PutCustomMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCustomMetricWithOptions(request, runtime);
  }

  /**
   * Creates a custom alert rule.
   * 
   * @remarks
   * Before you call this operation, call the PutCustomMetric operation to report custom monitoring data. For more information, see [PutCustomMetric](https://help.aliyun.com/document_detail/115004.html).
   * 
   * @param request - PutCustomMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutCustomMetricRuleResponse
   */
  async putCustomMetricRuleWithOptions(request: $_model.PutCustomMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutCustomMetricRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comparisonOperator)) {
      query["ComparisonOperator"] = request.comparisonOperator;
    }

    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!$dara.isNull(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!$dara.isNull(request.evaluationCount)) {
      query["EvaluationCount"] = request.evaluationCount;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
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
      action: "PutCustomMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutCustomMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutCustomMetricRuleResponse({}));
  }

  /**
   * Creates a custom alert rule.
   * 
   * @remarks
   * Before you call this operation, call the PutCustomMetric operation to report custom monitoring data. For more information, see [PutCustomMetric](https://help.aliyun.com/document_detail/115004.html).
   * 
   * @param request - PutCustomMetricRuleRequest
   * @returns PutCustomMetricRuleResponse
   */
  async putCustomMetricRule(request: $_model.PutCustomMetricRuleRequest): Promise<$_model.PutCustomMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putCustomMetricRuleWithOptions(request, runtime);
  }

  /**
   * 创建或者修改事件监控
   * 
   * @remarks
   * If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.
   * In this example, the `myRuleName` alert rule is created for the `ecs` cloud service.
   * 
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

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.silenceTime)) {
      query["SilenceTime"] = request.silenceTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutEventRule",
      version: "2019-01-01",
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
   * 创建或者修改事件监控
   * 
   * @remarks
   * If the specified rule name does not exist, an event-triggered alert rule is created. If the specified rule name exists, the specified event-triggered alert rule is modified.
   * In this example, the `myRuleName` alert rule is created for the `ecs` cloud service.
   * 
   * @param request - PutEventRuleRequest
   * @returns PutEventRuleResponse
   */
  async putEventRule(request: $_model.PutEventRuleRequest): Promise<$_model.PutEventRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEventRuleWithOptions(request, runtime);
  }

  /**
   * Adds or modifies the push channels of an event-triggered alert rule.
   * 
   * @param request - PutEventRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutEventRuleTargetsResponse
   */
  async putEventRuleTargetsWithOptions(request: $_model.PutEventRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutEventRuleTargetsResponse> {
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

    if (!$dara.isNull(request.openApiParameters)) {
      query["OpenApiParameters"] = request.openApiParameters;
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
      action: "PutEventRuleTargets",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutEventRuleTargetsResponse>(await this.callApi(params, req, runtime), new $_model.PutEventRuleTargetsResponse({}));
  }

  /**
   * Adds or modifies the push channels of an event-triggered alert rule.
   * 
   * @param request - PutEventRuleTargetsRequest
   * @returns PutEventRuleTargetsResponse
   */
  async putEventRuleTargets(request: $_model.PutEventRuleTargetsRequest): Promise<$_model.PutEventRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putEventRuleTargetsWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a configuration set for exporting monitoring data.
   * 
   * @remarks
   * > The monitoring data can be exported only to Log Service. More services will be supported in the future.
   * 
   * @param request - PutExporterOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutExporterOutputResponse
   */
  async putExporterOutputWithOptions(request: $_model.PutExporterOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutExporterOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.configJson)) {
      query["ConfigJson"] = request.configJson;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.destName)) {
      query["DestName"] = request.destName;
    }

    if (!$dara.isNull(request.destType)) {
      query["DestType"] = request.destType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutExporterOutput",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutExporterOutputResponse>(await this.callApi(params, req, runtime), new $_model.PutExporterOutputResponse({}));
  }

  /**
   * Creates or modifies a configuration set for exporting monitoring data.
   * 
   * @remarks
   * > The monitoring data can be exported only to Log Service. More services will be supported in the future.
   * 
   * @param request - PutExporterOutputRequest
   * @returns PutExporterOutputResponse
   */
  async putExporterOutput(request: $_model.PutExporterOutputRequest): Promise<$_model.PutExporterOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putExporterOutputWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a data export rule.
   * 
   * @param request - PutExporterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutExporterRuleResponse
   */
  async putExporterRuleWithOptions(request: $_model.PutExporterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutExporterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.describe)) {
      query["Describe"] = request.describe;
    }

    if (!$dara.isNull(request.dstNames)) {
      query["DstNames"] = request.dstNames;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.targetWindows)) {
      query["TargetWindows"] = request.targetWindows;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutExporterRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutExporterRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutExporterRuleResponse({}));
  }

  /**
   * Creates or modifies a data export rule.
   * 
   * @param request - PutExporterRuleRequest
   * @returns PutExporterRuleResponse
   */
  async putExporterRule(request: $_model.PutExporterRuleRequest): Promise<$_model.PutExporterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putExporterRuleWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert rule for an application group.
   * 
   * @remarks
   * This topic provides an example on how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `17285****` application group. The ID of the alert rule is `123456`. The name of the alert rule is `Rule_test`. The alert level is `Critical`. The statistical method is `Average`. The alert threshold comparator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The returned result shows that the alert rule is created and the alert rule ID is `123456`.
   * 
   * @param request - PutGroupMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutGroupMetricRuleResponse
   */
  async putGroupMetricRuleWithOptions(request: $_model.PutGroupMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutGroupMetricRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.contactGroups)) {
      query["ContactGroups"] = request.contactGroups;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.effectiveInterval)) {
      query["EffectiveInterval"] = request.effectiveInterval;
    }

    if (!$dara.isNull(request.emailSubject)) {
      query["EmailSubject"] = request.emailSubject;
    }

    if (!$dara.isNull(request.extraDimensionJson)) {
      query["ExtraDimensionJson"] = request.extraDimensionJson;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!$dara.isNull(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
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
      action: "PutGroupMetricRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutGroupMetricRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutGroupMetricRuleResponse({}));
  }

  /**
   * Creates or modifies an alert rule for an application group.
   * 
   * @remarks
   * This topic provides an example on how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the `17285****` application group. The ID of the alert rule is `123456`. The name of the alert rule is `Rule_test`. The alert level is `Critical`. The statistical method is `Average`. The alert threshold comparator is `GreaterThanOrEqualToThreshold`. The alert threshold is `90`. The number of alert retries is `3`. The returned result shows that the alert rule is created and the alert rule ID is `123456`.
   * 
   * @param request - PutGroupMetricRuleRequest
   * @returns PutGroupMetricRuleResponse
   */
  async putGroupMetricRule(request: $_model.PutGroupMetricRuleRequest): Promise<$_model.PutGroupMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putGroupMetricRuleWithOptions(request, runtime);
  }

  /**
   * Imports the monitoring data of a metric to a namespace of Hybrid Cloud Monitoring.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Limits
   * The size of the monitoring data that you import at a time must be less than or equal to 1 MB.
   * ## [](#)Operation description
   * This topic provides an example on how to import the monitoring data of the `CPU_Usage` metric to the `default-aliyun` namespace of Hybrid Cloud Monitoring.
   * 
   * @param request - PutHybridMonitorMetricDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutHybridMonitorMetricDataResponse
   */
  async putHybridMonitorMetricDataWithOptions(request: $_model.PutHybridMonitorMetricDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutHybridMonitorMetricDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metricList)) {
      query["MetricList"] = request.metricList;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutHybridMonitorMetricData",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutHybridMonitorMetricDataResponse>(await this.callApi(params, req, runtime), new $_model.PutHybridMonitorMetricDataResponse({}));
  }

  /**
   * Imports the monitoring data of a metric to a namespace of Hybrid Cloud Monitoring.
   * 
   * @remarks
   * ## [](#)Prerequisites
   * Hybrid Cloud Monitoring is activated. For more information, see [Activate Hybrid Cloud Monitoring](https://help.aliyun.com/document_detail/250773.html).
   * ## [](#)Limits
   * The size of the monitoring data that you import at a time must be less than or equal to 1 MB.
   * ## [](#)Operation description
   * This topic provides an example on how to import the monitoring data of the `CPU_Usage` metric to the `default-aliyun` namespace of Hybrid Cloud Monitoring.
   * 
   * @param request - PutHybridMonitorMetricDataRequest
   * @returns PutHybridMonitorMetricDataResponse
   */
  async putHybridMonitorMetricData(request: $_model.PutHybridMonitorMetricDataRequest): Promise<$_model.PutHybridMonitorMetricDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putHybridMonitorMetricDataWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a log monitoring metric.
   * 
   * @remarks
   * In the example of this topic, the `cpu_total` log monitoring metric is created. The response shows that the log monitoring metric is created and the metric ID is `16****`.
   * 
   * @param request - PutLogMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutLogMonitorResponse
   */
  async putLogMonitorWithOptions(request: $_model.PutLogMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutLogMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregates)) {
      query["Aggregates"] = request.aggregates;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupbys)) {
      query["Groupbys"] = request.groupbys;
    }

    if (!$dara.isNull(request.logId)) {
      query["LogId"] = request.logId;
    }

    if (!$dara.isNull(request.metricExpress)) {
      query["MetricExpress"] = request.metricExpress;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.slsLogstore)) {
      query["SlsLogstore"] = request.slsLogstore;
    }

    if (!$dara.isNull(request.slsProject)) {
      query["SlsProject"] = request.slsProject;
    }

    if (!$dara.isNull(request.slsRegionId)) {
      query["SlsRegionId"] = request.slsRegionId;
    }

    if (!$dara.isNull(request.tumblingwindows)) {
      query["Tumblingwindows"] = request.tumblingwindows;
    }

    if (!$dara.isNull(request.unit)) {
      query["Unit"] = request.unit;
    }

    if (!$dara.isNull(request.valueFilter)) {
      query["ValueFilter"] = request.valueFilter;
    }

    if (!$dara.isNull(request.valueFilterRelation)) {
      query["ValueFilterRelation"] = request.valueFilterRelation;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutLogMonitor",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutLogMonitorResponse>(await this.callApi(params, req, runtime), new $_model.PutLogMonitorResponse({}));
  }

  /**
   * Creates or modifies a log monitoring metric.
   * 
   * @remarks
   * In the example of this topic, the `cpu_total` log monitoring metric is created. The response shows that the log monitoring metric is created and the metric ID is `16****`.
   * 
   * @param request - PutLogMonitorRequest
   * @returns PutLogMonitorResponse
   */
  async putLogMonitor(request: $_model.PutLogMonitorRequest): Promise<$_model.PutLogMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putLogMonitorWithOptions(request, runtime);
  }

  /**
   * Adds or modifies the push channels of an alert rule.
   * 
   * @remarks
   * # [](#)
   * This topic provides an example on how to associate an alert rule with a resource. In this example, the alert rule is `ae06917_75a8c43178ab66****`, the resource is `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`, and the ID of the resource for which alerts are triggered is `1`. The response indicates that the resource is associated with the specified alert rule.
   * 
   * @param request - PutMetricRuleTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargetsWithOptions(request: $_model.PutMetricRuleTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMetricRuleTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMetricRuleTargets",
      version: "2019-01-01",
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
   * Adds or modifies the push channels of an alert rule.
   * 
   * @remarks
   * # [](#)
   * This topic provides an example on how to associate an alert rule with a resource. In this example, the alert rule is `ae06917_75a8c43178ab66****`, the resource is `acs:mns:cn-hangzhou:120886317861****:/queues/test/message`, and the ID of the resource for which alerts are triggered is `1`. The response indicates that the resource is associated with the specified alert rule.
   * 
   * @param request - PutMetricRuleTargetsRequest
   * @returns PutMetricRuleTargetsResponse
   */
  async putMetricRuleTargets(request: $_model.PutMetricRuleTargetsRequest): Promise<$_model.PutMetricRuleTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMetricRuleTargetsWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert rule to dynamically add instances that meet the rule to an application group.
   * 
   * @param request - PutMonitorGroupDynamicRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMonitorGroupDynamicRuleResponse
   */
  async putMonitorGroupDynamicRuleWithOptions(request: $_model.PutMonitorGroupDynamicRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMonitorGroupDynamicRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupRules)) {
      query["GroupRules"] = request.groupRules;
    }

    if (!$dara.isNull(request.isAsync)) {
      query["IsAsync"] = request.isAsync;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMonitorGroupDynamicRule",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMonitorGroupDynamicRuleResponse>(await this.callApi(params, req, runtime), new $_model.PutMonitorGroupDynamicRuleResponse({}));
  }

  /**
   * Creates or modifies an alert rule to dynamically add instances that meet the rule to an application group.
   * 
   * @param request - PutMonitorGroupDynamicRuleRequest
   * @returns PutMonitorGroupDynamicRuleResponse
   */
  async putMonitorGroupDynamicRule(request: $_model.PutMonitorGroupDynamicRuleRequest): Promise<$_model.PutMonitorGroupDynamicRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMonitorGroupDynamicRuleWithOptions(request, runtime);
  }

  /**
   * Configures global settings for the CloudMonitor agent.
   * 
   * @param request - PutMonitoringConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutMonitoringConfigResponse
   */
  async putMonitoringConfigWithOptions(request: $_model.PutMonitoringConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutMonitoringConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoInstall)) {
      query["AutoInstall"] = request.autoInstall;
    }

    if (!$dara.isNull(request.enableInstallAgentNewECS)) {
      query["EnableInstallAgentNewECS"] = request.enableInstallAgentNewECS;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutMonitoringConfig",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutMonitoringConfigResponse>(await this.callApi(params, req, runtime), new $_model.PutMonitoringConfigResponse({}));
  }

  /**
   * Configures global settings for the CloudMonitor agent.
   * 
   * @param request - PutMonitoringConfigRequest
   * @returns PutMonitoringConfigResponse
   */
  async putMonitoringConfig(request: $_model.PutMonitoringConfigRequest): Promise<$_model.PutMonitoringConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putMonitoringConfigWithOptions(request, runtime);
  }

  /**
   * Configures an alert rule.
   * 
   * @remarks
   * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
   * >  Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).
   * 
   * @param tmpReq - PutResourceMetricRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutResourceMetricRuleResponse
   */
  async putResourceMetricRuleWithOptions(tmpReq: $_model.PutResourceMetricRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutResourceMetricRuleResponse> {
    tmpReq.validate();
    let request = new $_model.PutResourceMetricRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.compositeExpression)) {
      request.compositeExpressionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.compositeExpression, "CompositeExpression", "json");
    }

    if (!$dara.isNull(tmpReq.prometheus)) {
      request.prometheusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.prometheus, "Prometheus", "json");
    }

    let query = { };
    if (!$dara.isNull(request.compositeExpressionShrink)) {
      query["CompositeExpression"] = request.compositeExpressionShrink;
    }

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

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.noDataPolicy)) {
      query["NoDataPolicy"] = request.noDataPolicy;
    }

    if (!$dara.isNull(request.noEffectiveInterval)) {
      query["NoEffectiveInterval"] = request.noEffectiveInterval;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.prometheusShrink)) {
      query["Prometheus"] = request.prometheusShrink;
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
      version: "2019-01-01",
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
   * Configures an alert rule.
   * 
   * @remarks
   * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
   * >  Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).
   * 
   * @param request - PutResourceMetricRuleRequest
   * @returns PutResourceMetricRuleResponse
   */
  async putResourceMetricRule(request: $_model.PutResourceMetricRuleRequest): Promise<$_model.PutResourceMetricRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putResourceMetricRuleWithOptions(request, runtime);
  }

  /**
   * Creates multiple alert rules for the specified metric of a specified resource.
   * 
   * @remarks
   * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
   * >  Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).
   * 
   * @param request - PutResourceMetricRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutResourceMetricRulesResponse
   */
  async putResourceMetricRulesWithOptions(request: $_model.PutResourceMetricRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutResourceMetricRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.rules)) {
      query["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutResourceMetricRules",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutResourceMetricRulesResponse>(await this.callApi(params, req, runtime), new $_model.PutResourceMetricRulesResponse({}));
  }

  /**
   * Creates multiple alert rules for the specified metric of a specified resource.
   * 
   * @remarks
   * This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.
   * >  Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).
   * 
   * @param request - PutResourceMetricRulesRequest
   * @returns PutResourceMetricRulesResponse
   */
  async putResourceMetricRules(request: $_model.PutResourceMetricRulesRequest): Promise<$_model.PutResourceMetricRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putResourceMetricRulesWithOptions(request, runtime);
  }

  /**
   * Deletes tags.
   * 
   * @param request - RemoveTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTagsResponse
   */
  async removeTagsWithOptions(request: $_model.RemoveTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTagsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTags",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTagsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTagsResponse({}));
  }

  /**
   * Deletes tags.
   * 
   * @param request - RemoveTagsRequest
   * @returns RemoveTagsResponse
   */
  async removeTags(request: $_model.RemoveTagsRequest): Promise<$_model.RemoveTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTagsWithOptions(request, runtime);
  }

  /**
   * Debugs a system event of an Alibaba Cloud service.
   * 
   * @remarks
   * This operation is used to test whether a system event can be triggered as expected. You can call this operation to simulate a system event and check whether an expected response is returned after the system event triggers an alert.
   * 
   * @param request - SendDryRunSystemEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendDryRunSystemEventResponse
   */
  async sendDryRunSystemEventWithOptions(request: $_model.SendDryRunSystemEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendDryRunSystemEventResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.eventContent)) {
      query["EventContent"] = request.eventContent;
    }

    if (!$dara.isNull(request.eventName)) {
      query["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendDryRunSystemEvent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendDryRunSystemEventResponse>(await this.callApi(params, req, runtime), new $_model.SendDryRunSystemEventResponse({}));
  }

  /**
   * Debugs a system event of an Alibaba Cloud service.
   * 
   * @remarks
   * This operation is used to test whether a system event can be triggered as expected. You can call this operation to simulate a system event and check whether an expected response is returned after the system event triggers an alert.
   * 
   * @param request - SendDryRunSystemEventRequest
   * @returns SendDryRunSystemEventResponse
   */
  async sendDryRunSystemEvent(request: $_model.SendDryRunSystemEventRequest): Promise<$_model.SendDryRunSystemEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendDryRunSystemEventWithOptions(request, runtime);
  }

  /**
   * Uninstalls the CloudMonitor agent from a third-party host.
   * 
   * @remarks
   * >  This API operation is not applicable to Elastic Compute Service (ECS) instances. To uninstall the agent from an ECS instance, see [Install and uninstall the CloudMonitor agent](https://help.aliyun.com/document_detail/183482.html).
   * 
   * @param request - UninstallMonitoringAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallMonitoringAgentResponse
   */
  async uninstallMonitoringAgentWithOptions(request: $_model.UninstallMonitoringAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallMonitoringAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallMonitoringAgent",
      version: "2019-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallMonitoringAgentResponse>(await this.callApi(params, req, runtime), new $_model.UninstallMonitoringAgentResponse({}));
  }

  /**
   * Uninstalls the CloudMonitor agent from a third-party host.
   * 
   * @remarks
   * >  This API operation is not applicable to Elastic Compute Service (ECS) instances. To uninstall the agent from an ECS instance, see [Install and uninstall the CloudMonitor agent](https://help.aliyun.com/document_detail/183482.html).
   * 
   * @param request - UninstallMonitoringAgentRequest
   * @returns UninstallMonitoringAgentResponse
   */
  async uninstallMonitoringAgent(request: $_model.UninstallMonitoringAgentRequest): Promise<$_model.UninstallMonitoringAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallMonitoringAgentWithOptions(request, runtime);
  }

}
