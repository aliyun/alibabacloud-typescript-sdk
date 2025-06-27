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
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Terminates the process for deploying or undeploying an entity. The process is not deleted and can still be queried by calling query operations.
   * 
   * @param request - AbolishPipelineRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishPipelineRunResponse
   */
  async abolishPipelineRunWithOptions(request: $_model.AbolishPipelineRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbolishPipelineRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbolishPipelineRun",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbolishPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.AbolishPipelineRunResponse({}));
  }

  /**
   * Terminates the process for deploying or undeploying an entity. The process is not deleted and can still be queried by calling query operations.
   * 
   * @param request - AbolishPipelineRunRequest
   * @returns AbolishPipelineRunResponse
   */
  async abolishPipelineRun(request: $_model.AbolishPipelineRunRequest): Promise<$_model.AbolishPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abolishPipelineRunWithOptions(request, runtime);
  }

  /**
   * 从集合中移除实体对象
   * 
   * @param request - AddEntityIntoMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddEntityIntoMetaCollectionResponse
   */
  async addEntityIntoMetaCollectionWithOptions(request: $_model.AddEntityIntoMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddEntityIntoMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.metaCollectionId)) {
      query["MetaCollectionId"] = request.metaCollectionId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddEntityIntoMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddEntityIntoMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.AddEntityIntoMetaCollectionResponse({}));
  }

  /**
   * 从集合中移除实体对象
   * 
   * @param request - AddEntityIntoMetaCollectionRequest
   * @returns AddEntityIntoMetaCollectionResponse
   */
  async addEntityIntoMetaCollection(request: $_model.AddEntityIntoMetaCollectionRequest): Promise<$_model.AddEntityIntoMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addEntityIntoMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Associates a resource group with a workspace.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  Your account must be assigned one of the following roles of the desired workspace:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - AssociateProjectToResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateProjectToResourceGroupResponse
   */
  async associateProjectToResourceGroupWithOptions(request: $_model.AssociateProjectToResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateProjectToResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateProjectToResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateProjectToResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AssociateProjectToResourceGroupResponse({}));
  }

  /**
   * Associates a resource group with a workspace.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  Your account must be assigned one of the following roles of the desired workspace:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - AssociateProjectToResourceGroupRequest
   * @returns AssociateProjectToResourceGroupResponse
   */
  async associateProjectToResourceGroup(request: $_model.AssociateProjectToResourceGroupRequest): Promise<$_model.AssociateProjectToResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateProjectToResourceGroupWithOptions(request, runtime);
  }

  /**
   * Associates monitoring rules with a data quality monitoring task.
   * 
   * @param tmpReq - AttachDataQualityRulesToEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachDataQualityRulesToEvaluationTaskResponse
   */
  async attachDataQualityRulesToEvaluationTaskWithOptions(tmpReq: $_model.AttachDataQualityRulesToEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachDataQualityRulesToEvaluationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.AttachDataQualityRulesToEvaluationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataQualityRuleIds)) {
      request.dataQualityRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataQualityRuleIds, "DataQualityRuleIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataQualityEvaluationTaskId)) {
      body["DataQualityEvaluationTaskId"] = request.dataQualityEvaluationTaskId;
    }

    if (!$dara.isNull(request.dataQualityRuleIdsShrink)) {
      body["DataQualityRuleIds"] = request.dataQualityRuleIdsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachDataQualityRulesToEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachDataQualityRulesToEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.AttachDataQualityRulesToEvaluationTaskResponse({}));
  }

  /**
   * Associates monitoring rules with a data quality monitoring task.
   * 
   * @param request - AttachDataQualityRulesToEvaluationTaskRequest
   * @returns AttachDataQualityRulesToEvaluationTaskResponse
   */
  async attachDataQualityRulesToEvaluationTask(request: $_model.AttachDataQualityRulesToEvaluationTaskRequest): Promise<$_model.AttachDataQualityRulesToEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachDataQualityRulesToEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Performs incremental updates on multiple tasks at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - BatchUpdateTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateTasksResponse
   */
  async batchUpdateTasksWithOptions(tmpReq: $_model.BatchUpdateTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateTasksResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.tasksShrink)) {
      body["Tasks"] = request.tasksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateTasksResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateTasksResponse({}));
  }

  /**
   * Performs incremental updates on multiple tasks at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - BatchUpdateTasksRequest
   * @returns BatchUpdateTasksResponse
   */
  async batchUpdateTasks(request: $_model.BatchUpdateTasksRequest): Promise<$_model.BatchUpdateTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateTasksWithOptions(request, runtime);
  }

  /**
   * Clones an existing data source.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - CloneDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneDataSourceResponse
   */
  async cloneDataSourceWithOptions(request: $_model.CloneDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloneDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cloneDataSourceName)) {
      query["CloneDataSourceName"] = request.cloneDataSourceName;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CloneDataSourceResponse({}));
  }

  /**
   * Clones an existing data source.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - CloneDataSourceRequest
   * @returns CloneDataSourceResponse
   */
  async cloneDataSource(request: $_model.CloneDataSourceRequest): Promise<$_model.CloneDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cloneDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates a custom monitoring alert rule.
   * 
   * @param tmpReq - CreateAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertRuleResponse
   */
  async createAlertRuleWithOptions(tmpReq: $_model.CreateAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAlertRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.triggerCondition)) {
      request.triggerConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerCondition, "TriggerCondition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.triggerConditionShrink)) {
      query["TriggerCondition"] = request.triggerConditionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertRuleResponse({}));
  }

  /**
   * Creates a custom monitoring alert rule.
   * 
   * @param request - CreateAlertRuleRequest
   * @returns CreateAlertRuleResponse
   */
  async createAlertRule(request: $_model.CreateAlertRuleRequest): Promise<$_model.CreateAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBusinessResponse
   */
  async createBusinessWithOptions(request: $_model.CreateBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBusinessResponse>(await this.callApi(params, req, runtime), new $_model.CreateBusinessResponse({}));
  }

  /**
   * @param request - CreateBusinessRequest
   * @returns CreateBusinessResponse
   */
  async createBusiness(request: $_model.CreateBusinessRequest): Promise<$_model.CreateBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBusinessWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule for a synchronization task.
   * 
   * @param tmpReq - CreateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRuleWithOptions(tmpReq: $_model.CreateDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDIAlarmRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDIAlarmRuleResponse({}));
  }

  /**
   * Creates an alert rule for a synchronization task.
   * 
   * @param request - CreateDIAlarmRuleRequest
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRule(request: $_model.CreateDIAlarmRuleRequest): Promise<$_model.CreateDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Creates a new-version synchronization task.
   * 
   * @remarks
   *   This API operation is available for all DataWorks editions.
   * *   You can call this API operation to create a synchronization task. When you call this API operation, you must configure parameters such as SourceDataSourceSettings, DestinationDataSourceSettings, MigrationType, TransformationRules, TableMappings, and JobSettings. The SourceDataSourceSettings parameter defines the settings related to the source. The DestinationDataSourceSettings parameter defines the settings related to the destination. The MigrationType parameter defines the synchronization task type. The TransformationRules parameter defines the transformation rules for objects involved in the synchronization task. The TableMappings parameter defines the mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. The JobSettings parameter defines the settings for the dimension of the synchronization task, including policies for data type mappings between source fields and destination fields and settings for periodic scheduling.
   * 
   * @param tmpReq - CreateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIJobResponse
   */
  async createDIJobWithOptions(tmpReq: $_model.CreateDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationDataSourceSettings)) {
      request.destinationDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationDataSourceSettings, "DestinationDataSourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.sourceDataSourceSettings)) {
      request.sourceDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceDataSourceSettings, "SourceDataSourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!$dara.isNull(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDIJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDIJobResponse({}));
  }

  /**
   * Creates a new-version synchronization task.
   * 
   * @remarks
   *   This API operation is available for all DataWorks editions.
   * *   You can call this API operation to create a synchronization task. When you call this API operation, you must configure parameters such as SourceDataSourceSettings, DestinationDataSourceSettings, MigrationType, TransformationRules, TableMappings, and JobSettings. The SourceDataSourceSettings parameter defines the settings related to the source. The DestinationDataSourceSettings parameter defines the settings related to the destination. The MigrationType parameter defines the synchronization task type. The TransformationRules parameter defines the transformation rules for objects involved in the synchronization task. The TableMappings parameter defines the mappings between rules used to select synchronization objects in the source and transformation rules applied to the selected synchronization objects. The JobSettings parameter defines the settings for the dimension of the synchronization task, including policies for data type mappings between source fields and destination fields and settings for periodic scheduling.
   * 
   * @param request - CreateDIJobRequest
   * @returns CreateDIJobResponse
   */
  async createDIJob(request: $_model.CreateDIJobRequest): Promise<$_model.CreateDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDIJobWithOptions(request, runtime);
  }

  /**
   * Creates a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - CreateDataAssetTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataAssetTagResponse
   */
  async createDataAssetTagWithOptions(tmpReq: $_model.CreateDataAssetTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataAssetTagResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataAssetTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.managers)) {
      request.managersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managers, "Managers", "json");
    }

    if (!$dara.isNull(tmpReq.values)) {
      request.valuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.values, "Values", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.managersShrink)) {
      query["Managers"] = request.managersShrink;
    }

    if (!$dara.isNull(request.valueType)) {
      query["ValueType"] = request.valueType;
    }

    if (!$dara.isNull(request.valuesShrink)) {
      query["Values"] = request.valuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataAssetTag",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataAssetTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataAssetTagResponse({}));
  }

  /**
   * Creates a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - CreateDataAssetTagRequest
   * @returns CreateDataAssetTagResponse
   */
  async createDataAssetTag(request: $_model.CreateDataAssetTagRequest): Promise<$_model.CreateDataAssetTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataAssetTagWithOptions(request, runtime);
  }

  /**
   * Creates a monitor in DataWorks Data Quality.
   * 
   * @remarks
   * This API operation is supported in all DataWorks editions.
   * 
   * @param tmpReq - CreateDataQualityEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataQualityEvaluationTaskResponse
   */
  async createDataQualityEvaluationTaskWithOptions(tmpReq: $_model.CreateDataQualityEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataQualityEvaluationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataQualityEvaluationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataQualityRules)) {
      request.dataQualityRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataQualityRules, "DataQualityRules", "json");
    }

    if (!$dara.isNull(tmpReq.hooks)) {
      request.hooksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hooks, "Hooks", "json");
    }

    if (!$dara.isNull(tmpReq.notifications)) {
      request.notificationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifications, "Notifications", "json");
    }

    if (!$dara.isNull(tmpReq.target)) {
      request.targetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.target, "Target", "json");
    }

    if (!$dara.isNull(tmpReq.trigger)) {
      request.triggerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trigger, "Trigger", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataQualityRulesShrink)) {
      body["DataQualityRules"] = request.dataQualityRulesShrink;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.hooksShrink)) {
      body["Hooks"] = request.hooksShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.notificationsShrink)) {
      body["Notifications"] = request.notificationsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.runtimeConf)) {
      body["RuntimeConf"] = request.runtimeConf;
    }

    if (!$dara.isNull(request.targetShrink)) {
      body["Target"] = request.targetShrink;
    }

    if (!$dara.isNull(request.triggerShrink)) {
      body["Trigger"] = request.triggerShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataQualityEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataQualityEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataQualityEvaluationTaskResponse({}));
  }

  /**
   * Creates a monitor in DataWorks Data Quality.
   * 
   * @remarks
   * This API operation is supported in all DataWorks editions.
   * 
   * @param request - CreateDataQualityEvaluationTaskRequest
   * @returns CreateDataQualityEvaluationTaskResponse
   */
  async createDataQualityEvaluationTask(request: $_model.CreateDataQualityEvaluationTaskRequest): Promise<$_model.CreateDataQualityEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataQualityEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Creates a monitor instance.
   * 
   * @param tmpReq - CreateDataQualityEvaluationTaskInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataQualityEvaluationTaskInstanceResponse
   */
  async createDataQualityEvaluationTaskInstanceWithOptions(tmpReq: $_model.CreateDataQualityEvaluationTaskInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataQualityEvaluationTaskInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataQualityEvaluationTaskInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.runtimeResource)) {
      request.runtimeResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runtimeResource, "RuntimeResource", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataQualityEvaluationTaskId)) {
      body["DataQualityEvaluationTaskId"] = request.dataQualityEvaluationTaskId;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.runtimeResourceShrink)) {
      body["RuntimeResource"] = request.runtimeResourceShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataQualityEvaluationTaskInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataQualityEvaluationTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataQualityEvaluationTaskInstanceResponse({}));
  }

  /**
   * Creates a monitor instance.
   * 
   * @param request - CreateDataQualityEvaluationTaskInstanceRequest
   * @returns CreateDataQualityEvaluationTaskInstanceResponse
   */
  async createDataQualityEvaluationTaskInstance(request: $_model.CreateDataQualityEvaluationTaskInstanceRequest): Promise<$_model.CreateDataQualityEvaluationTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataQualityEvaluationTaskInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a data quality monitoring rule.
   * 
   * @param tmpReq - CreateDataQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataQualityRuleResponse
   */
  async createDataQualityRuleWithOptions(tmpReq: $_model.CreateDataQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataQualityRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataQualityRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkingConfig)) {
      request.checkingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkingConfig, "CheckingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.errorHandlers)) {
      request.errorHandlersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.errorHandlers, "ErrorHandlers", "json");
    }

    if (!$dara.isNull(tmpReq.samplingConfig)) {
      request.samplingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.samplingConfig, "SamplingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.target)) {
      request.targetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.target, "Target", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkingConfigShrink)) {
      body["CheckingConfig"] = request.checkingConfigShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.errorHandlersShrink)) {
      body["ErrorHandlers"] = request.errorHandlersShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.samplingConfigShrink)) {
      body["SamplingConfig"] = request.samplingConfigShrink;
    }

    if (!$dara.isNull(request.severity)) {
      body["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.targetShrink)) {
      body["Target"] = request.targetShrink;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataQualityRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataQualityRuleResponse({}));
  }

  /**
   * Creates a data quality monitoring rule.
   * 
   * @param request - CreateDataQualityRuleRequest
   * @returns CreateDataQualityRuleResponse
   */
  async createDataQualityRule(request: $_model.CreateDataQualityRuleRequest): Promise<$_model.CreateDataQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataQualityRuleWithOptions(request, runtime);
  }

  /**
   * Creates a data quality monitoring rule template.
   * 
   * @param tmpReq - CreateDataQualityRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataQualityRuleTemplateResponse
   */
  async createDataQualityRuleTemplateWithOptions(tmpReq: $_model.CreateDataQualityRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataQualityRuleTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataQualityRuleTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkingConfig)) {
      request.checkingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkingConfig, "CheckingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.samplingConfig)) {
      request.samplingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.samplingConfig, "SamplingConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkingConfigShrink)) {
      body["CheckingConfig"] = request.checkingConfigShrink;
    }

    if (!$dara.isNull(request.directoryPath)) {
      body["DirectoryPath"] = request.directoryPath;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.samplingConfigShrink)) {
      body["SamplingConfig"] = request.samplingConfigShrink;
    }

    if (!$dara.isNull(request.visibleScope)) {
      body["VisibleScope"] = request.visibleScope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataQualityRuleTemplate",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataQualityRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataQualityRuleTemplateResponse({}));
  }

  /**
   * Creates a data quality monitoring rule template.
   * 
   * @param request - CreateDataQualityRuleTemplateRequest
   * @returns CreateDataQualityRuleTemplateResponse
   */
  async createDataQualityRuleTemplate(request: $_model.CreateDataQualityRuleTemplateRequest): Promise<$_model.CreateDataQualityRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataQualityRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Adds a data source to the development environment or production environment of a workspace.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(request: $_model.CreateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!$dara.isNull(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceResponse({}));
  }

  /**
   * Adds a data source to the development environment or production environment of a workspace.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates a rule for sharing a data source to other workspaces or RAM users.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to share a data source from Workspace A to Workspace B, you must have the permissions to share the data source in both workspaces. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRuleWithOptions(request: $_model.CreateDataSourceSharedRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceSharedRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.sharedUser)) {
      query["SharedUser"] = request.sharedUser;
    }

    if (!$dara.isNull(request.targetProjectId)) {
      query["TargetProjectId"] = request.targetProjectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceSharedRuleResponse({}));
  }

  /**
   * Creates a rule for sharing a data source to other workspaces or RAM users.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to share a data source from Workspace A to Workspace B, you must have the permissions to share the data source in both workspaces. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - CreateDataSourceSharedRuleRequest
   * @returns CreateDataSourceSharedRuleResponse
   */
  async createDataSourceSharedRule(request: $_model.CreateDataSourceSharedRuleRequest): Promise<$_model.CreateDataSourceSharedRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: $_model.CreateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!$dara.isNull(request.applyScheduleImmediately)) {
      body["ApplyScheduleImmediately"] = request.applyScheduleImmediately;
    }

    if (!$dara.isNull(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!$dara.isNull(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!$dara.isNull(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.createFolderIfNotExists)) {
      body["CreateFolderIfNotExists"] = request.createFolderIfNotExists;
    }

    if (!$dara.isNull(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!$dara.isNull(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!$dara.isNull(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.ignoreParentSkipRunningProperty)) {
      body["IgnoreParentSkipRunningProperty"] = request.ignoreParentSkipRunningProperty;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!$dara.isNull(request.inputParameters)) {
      body["InputParameters"] = request.inputParameters;
    }

    if (!$dara.isNull(request.outputParameters)) {
      body["OutputParameters"] = request.outputParameters;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!$dara.isNull(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!$dara.isNull(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!$dara.isNull(request.stop)) {
      body["Stop"] = request.stop;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  /**
   * @param request - CreateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(request: $_model.CreateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFolderResponse({}));
  }

  /**
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates a user-defined function (UDF) in DataStudio. The information about the UDF is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple UDFs at a time. If you specify multiple UDFs by using FlowSpec, the system creates only the first specified UDF.
   * 
   * @param request - CreateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: $_model.CreateFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionResponse({}));
  }

  /**
   * Creates a user-defined function (UDF) in DataStudio. The information about the UDF is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple UDFs at a time. If you specify multiple UDFs by using FlowSpec, the system creates only the first specified UDF.
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: $_model.CreateFunctionRequest): Promise<$_model.CreateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  /**
   * Creates a lineage between a source entity and a destination entity. Either the source or destination entity must be a custom entity.
   * 
   * @param tmpReq - CreateLineageRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLineageRelationshipResponse
   */
  async createLineageRelationshipWithOptions(tmpReq: $_model.CreateLineageRelationshipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLineageRelationshipResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLineageRelationshipShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dstEntity)) {
      request.dstEntityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dstEntity, "DstEntity", "json");
    }

    if (!$dara.isNull(tmpReq.srcEntity)) {
      request.srcEntityShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.srcEntity, "SrcEntity", "json");
    }

    if (!$dara.isNull(tmpReq.task)) {
      request.taskShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.task, "Task", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dstEntityShrink)) {
      query["DstEntity"] = request.dstEntityShrink;
    }

    if (!$dara.isNull(request.srcEntityShrink)) {
      query["SrcEntity"] = request.srcEntityShrink;
    }

    if (!$dara.isNull(request.taskShrink)) {
      query["Task"] = request.taskShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLineageRelationship",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLineageRelationshipResponse>(await this.callApi(params, req, runtime), new $_model.CreateLineageRelationshipResponse({}));
  }

  /**
   * Creates a lineage between a source entity and a destination entity. Either the source or destination entity must be a custom entity.
   * 
   * @param request - CreateLineageRelationshipRequest
   * @returns CreateLineageRelationshipResponse
   */
  async createLineageRelationship(request: $_model.CreateLineageRelationshipRequest): Promise<$_model.CreateLineageRelationshipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLineageRelationshipWithOptions(request, runtime);
  }

  /**
   * Creates a collection in Data Map. Collections include categories, subcategories, data albums, and categories that are created in the data albums.
   * 
   * @param request - CreateMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetaCollectionResponse
   */
  async createMetaCollectionWithOptions(request: $_model.CreateMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetaCollectionResponse({}));
  }

  /**
   * Creates a collection in Data Map. Collections include categories, subcategories, data albums, and categories that are created in the data albums.
   * 
   * @param request - CreateMetaCollectionRequest
   * @returns CreateMetaCollectionResponse
   */
  async createMetaCollection(request: $_model.CreateMetaCollectionRequest): Promise<$_model.CreateMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Creates a network and associates the network with a general resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - CreateNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetworkResponse
   */
  async createNetworkWithOptions(request: $_model.CreateNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetworkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      body["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetworkResponse({}));
  }

  /**
   * Creates a network and associates the network with a general resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - CreateNetworkRequest
   * @returns CreateNetworkResponse
   */
  async createNetwork(request: $_model.CreateNetworkRequest): Promise<$_model.CreateNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a node in DataStudio. The information about the node is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple nodes at a time. If you specify multiple nodes by using FlowSpec, the system creates only the first specified node.
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: $_model.CreateNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containerId)) {
      body["ContainerId"] = request.containerId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodeResponse({}));
  }

  /**
   * Creates a node in DataStudio. The information about the node is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple nodes at a time. If you specify multiple nodes by using FlowSpec, the system creates only the first specified node.
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: $_model.CreateNodeRequest): Promise<$_model.CreateNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * Creates a process for deploying or undeploying an entity in Data Studio.
   * 
   * @remarks
   * >  You cannot use this API operation to create a process for multiple entities at a time. If you specify multiple entities in a request, the system creates a process only for the first entity.
   * 
   * @param tmpReq - CreatePipelineRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineRunResponse
   */
  async createPipelineRunWithOptions(tmpReq: $_model.CreatePipelineRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineRunResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePipelineRunShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.objectIdsShrink)) {
      body["ObjectIds"] = request.objectIdsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipelineRun",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineRunResponse({}));
  }

  /**
   * Creates a process for deploying or undeploying an entity in Data Studio.
   * 
   * @remarks
   * >  You cannot use this API operation to create a process for multiple entities at a time. If you specify multiple entities in a request, the system creates a process only for the first entity.
   * 
   * @param request - CreatePipelineRunRequest
   * @returns CreatePipelineRunResponse
   */
  async createPipelineRun(request: $_model.CreatePipelineRunRequest): Promise<$_model.CreatePipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPipelineRunWithOptions(request, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!$dara.isNull(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!$dara.isNull(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * Adds a workspace member and assigns a workspace-level role to the member.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - CreateProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectMemberResponse
   */
  async createProjectMemberWithOptions(tmpReq: $_model.CreateProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectMemberResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectMemberShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectMemberResponse({}));
  }

  /**
   * Adds a workspace member and assigns a workspace-level role to the member.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - CreateProjectMemberRequest
   * @returns CreateProjectMemberResponse
   */
  async createProjectMember(request: $_model.CreateProjectMemberRequest): Promise<$_model.CreateProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  /**
   * >  You cannot use this API operation to create multiple file resources at a time. If you specify multiple file resources by using FlowSpec, the system creates only the first specified resource.
   * 
   * @remarks
   * Private
   * 
   * @param request - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: $_model.CreateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceFile)) {
      body["ResourceFile"] = request.resourceFile;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * >  You cannot use this API operation to create multiple file resources at a time. If you specify multiple file resources by using FlowSpec, the system creates only the first specified resource.
   * 
   * @remarks
   * Private
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  async createResourceAdvance(request: $_model.CreateResourceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
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
      product: "dataworks-public",
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
    let createResourceReq = new $_model.CreateResourceRequest({ });
    OpenApiUtil.convert(request, createResourceReq);
    if (!$dara.isNull(request.resourceFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.resourceFileObject,
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
      createResourceReq.resourceFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createResourceResp = await this.createResourceWithOptions(createResourceReq, runtime);
    return createResourceResp;
  }

  /**
   * Creates a resource file in DataStudio. The following types are supported: JAR, Archive, File, and Python.
   * 
   * @param request - CreateResourceFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceFileResponse
   */
  async createResourceFileWithOptions(request: $_model.CreateResourceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.originResourceName)) {
      body["OriginResourceName"] = request.originResourceName;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.registerToCalcEngine)) {
      body["RegisterToCalcEngine"] = request.registerToCalcEngine;
    }

    if (!$dara.isNull(request.resourceFile)) {
      body["ResourceFile"] = request.resourceFile;
    }

    if (!$dara.isNull(request.storageURL)) {
      body["StorageURL"] = request.storageURL;
    }

    if (!$dara.isNull(request.uploadMode)) {
      body["UploadMode"] = request.uploadMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceFileResponse({}));
  }

  /**
   * Creates a resource file in DataStudio. The following types are supported: JAR, Archive, File, and Python.
   * 
   * @param request - CreateResourceFileRequest
   * @returns CreateResourceFileResponse
   */
  async createResourceFile(request: $_model.CreateResourceFileRequest): Promise<$_model.CreateResourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceFileWithOptions(request, runtime);
  }

  async createResourceFileAdvance(request: $_model.CreateResourceFileAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceFileResponse> {
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
      product: "dataworks-public",
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
    let createResourceFileReq = new $_model.CreateResourceFileRequest({ });
    OpenApiUtil.convert(request, createResourceFileReq);
    if (!$dara.isNull(request.resourceFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.resourceFileObject,
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
      createResourceFileReq.resourceFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let createResourceFileResp = await this.createResourceFileWithOptions(createResourceFileReq, runtime);
    return createResourceFileResp;
  }

  /**
   * Creates a serverless resource group.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  **Before you call this API operation, you must make sure that you have a good command of the billing details and [pricing](https://help.aliyun.com/document_detail/2680173.html) of serverless resource groups.
   * 
   * @param tmpReq - CreateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(tmpReq: $_model.CreateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!$dara.isNull(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!$dara.isNull(request.autoRenewEnabled)) {
      body["AutoRenewEnabled"] = request.autoRenewEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.paymentDuration)) {
      body["PaymentDuration"] = request.paymentDuration;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      body["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      body["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceGroupResponse({}));
  }

  /**
   * Creates a serverless resource group.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  **Before you call this API operation, you must make sure that you have a good command of the billing details and [pricing](https://help.aliyun.com/document_detail/2680173.html) of serverless resource groups.
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: $_model.CreateResourceGroupRequest): Promise<$_model.CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a route for a network.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - CreateRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRouteResponse
   */
  async createRouteWithOptions(request: $_model.CreateRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidr)) {
      body["DestinationCidr"] = request.destinationCidr;
    }

    if (!$dara.isNull(request.networkId)) {
      body["NetworkId"] = request.networkId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateRouteResponse({}));
  }

  /**
   * Creates a route for a network.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - CreateRouteRequest
   * @returns CreateRouteResponse
   */
  async createRoute(request: $_model.CreateRouteRequest): Promise<$_model.CreateRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRouteWithOptions(request, runtime);
  }

  /**
   * @param request - CreateUdfFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfFileResponse
   */
  async createUdfFileWithOptions(request: $_model.CreateUdfFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUdfFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!$dara.isNull(request.createFolderIfNotExists)) {
      body["CreateFolderIfNotExists"] = request.createFolderIfNotExists;
    }

    if (!$dara.isNull(request.example)) {
      body["Example"] = request.example;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!$dara.isNull(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUdfFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUdfFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateUdfFileResponse({}));
  }

  /**
   * @param request - CreateUdfFileRequest
   * @returns CreateUdfFileResponse
   */
  async createUdfFile(request: $_model.CreateUdfFileRequest): Promise<$_model.CreateUdfFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUdfFileWithOptions(request, runtime);
  }

  /**
   * Creates a workflow in a directory of DataStudio.
   * 
   * @remarks
   * > You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system creates only the first specified workflow. Other specified workflows and the nodes in the workflows are ignored. You can call the CreateNode operation to create a node.
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinitionWithOptions(request: $_model.CreateWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkflowDefinitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkflowDefinitionResponse({}));
  }

  /**
   * Creates a workflow in a directory of DataStudio.
   * 
   * @remarks
   * > You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system creates only the first specified workflow. Other specified workflows and the nodes in the workflows are ignored. You can call the CreateNode operation to create a node.
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinition(request: $_model.CreateWorkflowDefinitionRequest): Promise<$_model.CreateWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Creates a workflow instance, such as a data backfill workflow instance, based on configurations.
   * 
   * @param tmpReq - CreateWorkflowInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowInstancesResponse
   */
  async createWorkflowInstancesWithOptions(tmpReq: $_model.CreateWorkflowInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkflowInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateWorkflowInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.defaultRunProperties)) {
      request.defaultRunPropertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultRunProperties, "DefaultRunProperties", "json");
    }

    if (!$dara.isNull(tmpReq.periods)) {
      request.periodsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.periods, "Periods", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoStartEnabled)) {
      body["AutoStartEnabled"] = request.autoStartEnabled;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.defaultRunPropertiesShrink)) {
      body["DefaultRunProperties"] = request.defaultRunPropertiesShrink;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.periodsShrink)) {
      body["Periods"] = request.periodsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskParameters)) {
      body["TaskParameters"] = request.taskParameters;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workflowParameters)) {
      body["WorkflowParameters"] = request.workflowParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkflowInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkflowInstancesResponse({}));
  }

  /**
   * Creates a workflow instance, such as a data backfill workflow instance, based on configurations.
   * 
   * @param request - CreateWorkflowInstancesRequest
   * @returns CreateWorkflowInstancesResponse
   */
  async createWorkflowInstances(request: $_model.CreateWorkflowInstancesRequest): Promise<$_model.CreateWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWorkflowInstancesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom monitoring alert rule.
   * 
   * @param request - DeleteAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertRuleResponse
   */
  async deleteAlertRuleWithOptions(request: $_model.DeleteAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertRuleResponse({}));
  }

  /**
   * Deletes a custom monitoring alert rule.
   * 
   * @param request - DeleteAlertRuleRequest
   * @returns DeleteAlertRuleResponse
   */
  async deleteAlertRule(request: $_model.DeleteAlertRuleRequest): Promise<$_model.DeleteAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBusinessResponse
   */
  async deleteBusinessWithOptions(request: $_model.DeleteBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBusinessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBusinessResponse({}));
  }

  /**
   * @param request - DeleteBusinessRequest
   * @returns DeleteBusinessResponse
   */
  async deleteBusiness(request: $_model.DeleteBusinessRequest): Promise<$_model.DeleteBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBusinessWithOptions(request, runtime);
  }

  /**
   * Deletes a certificate file.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M.
   * 
   * @param request - DeleteCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCertificateResponse
   */
  async deleteCertificateWithOptions(request: $_model.DeleteCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCertificate",
      version: "2024-05-18",
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
   * Deletes a certificate file.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M.
   * 
   * @param request - DeleteCertificateRequest
   * @returns DeleteCertificateResponse
   */
  async deleteCertificate(request: $_model.DeleteCertificateRequest): Promise<$_model.DeleteCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCertificateWithOptions(request, runtime);
  }

  /**
   * Deletes an alert rule configured for a synchronization task.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRuleWithOptions(request: $_model.DeleteDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDIAlarmRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDIAlarmRuleResponse({}));
  }

  /**
   * Deletes an alert rule configured for a synchronization task.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRule(request: $_model.DeleteDIAlarmRuleRequest): Promise<$_model.DeleteDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a new-version synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIJobResponse
   */
  async deleteDIJobWithOptions(request: $_model.DeleteDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDIJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDIJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDIJobResponse({}));
  }

  /**
   * Deletes a new-version synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteDIJobRequest
   * @returns DeleteDIJobResponse
   */
  async deleteDIJob(request: $_model.DeleteDIJobRequest): Promise<$_model.DeleteDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDIJobWithOptions(request, runtime);
  }

  /**
   * Deletes a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - DeleteDataAssetTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataAssetTagResponse
   */
  async deleteDataAssetTagWithOptions(tmpReq: $_model.DeleteDataAssetTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataAssetTagResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataAssetTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.values)) {
      request.valuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.values, "Values", "json");
    }

    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.valuesShrink)) {
      query["Values"] = request.valuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataAssetTag",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataAssetTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataAssetTagResponse({}));
  }

  /**
   * Deletes a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - DeleteDataAssetTagRequest
   * @returns DeleteDataAssetTagResponse
   */
  async deleteDataAssetTag(request: $_model.DeleteDataAssetTagRequest): Promise<$_model.DeleteDataAssetTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataAssetTagWithOptions(request, runtime);
  }

  /**
   * Deletes a data quality monitoring task.
   * 
   * @param request - DeleteDataQualityEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataQualityEvaluationTaskResponse
   */
  async deleteDataQualityEvaluationTaskWithOptions(request: $_model.DeleteDataQualityEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataQualityEvaluationTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataQualityEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataQualityEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataQualityEvaluationTaskResponse({}));
  }

  /**
   * Deletes a data quality monitoring task.
   * 
   * @param request - DeleteDataQualityEvaluationTaskRequest
   * @returns DeleteDataQualityEvaluationTaskResponse
   */
  async deleteDataQualityEvaluationTask(request: $_model.DeleteDataQualityEvaluationTaskRequest): Promise<$_model.DeleteDataQualityEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataQualityEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a data quality monitoring rule.
   * 
   * @param request - DeleteDataQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataQualityRuleResponse
   */
  async deleteDataQualityRuleWithOptions(request: $_model.DeleteDataQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataQualityRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataQualityRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataQualityRuleResponse({}));
  }

  /**
   * Deletes a data quality monitoring rule.
   * 
   * @param request - DeleteDataQualityRuleRequest
   * @returns DeleteDataQualityRuleResponse
   */
  async deleteDataQualityRule(request: $_model.DeleteDataQualityRuleRequest): Promise<$_model.DeleteDataQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataQualityRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a data quality monitoring rule template.
   * 
   * @param request - DeleteDataQualityRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataQualityRuleTemplateResponse
   */
  async deleteDataQualityRuleTemplateWithOptions(request: $_model.DeleteDataQualityRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataQualityRuleTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataQualityRuleTemplate",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataQualityRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataQualityRuleTemplateResponse({}));
  }

  /**
   * Deletes a data quality monitoring rule template.
   * 
   * @param request - DeleteDataQualityRuleTemplateRequest
   * @returns DeleteDataQualityRuleTemplateResponse
   */
  async deleteDataQualityRuleTemplate(request: $_model.DeleteDataQualityRuleTemplateRequest): Promise<$_model.DeleteDataQualityRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataQualityRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Removes a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all Dataworks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * Removes a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all Dataworks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a sharing rule of a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to delete a sharing rule of a data source from Workspace A to Workspace B, you must have the permissions to share the data source in Workspace A or Workspace B. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRuleWithOptions(request: $_model.DeleteDataSourceSharedRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceSharedRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSourceSharedRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceSharedRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceSharedRuleResponse({}));
  }

  /**
   * Deletes a sharing rule of a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to delete a sharing rule of a data source from Workspace A to Workspace B, you must have the permissions to share the data source in Workspace A or Workspace B. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - DeleteDataSourceSharedRuleRequest
   * @returns DeleteDataSourceSharedRuleResponse
   */
  async deleteDataSourceSharedRule(request: $_model.DeleteDataSourceSharedRuleRequest): Promise<$_model.DeleteDataSourceSharedRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceSharedRuleWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: $_model.DeleteFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(request: $_model.DeleteFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFolderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFolderResponse({}));
  }

  /**
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: $_model.DeleteFolderRequest): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Deletes a user-defined function (UDF) in DataStudio.
   * 
   * @remarks
   * >  A UDF that is deployed cannot be deleted. If you want to delete such a UDF, you must first undeploy the UDF.
   * 
   * @param request - DeleteFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(request: $_model.DeleteFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionResponse({}));
  }

  /**
   * Deletes a user-defined function (UDF) in DataStudio.
   * 
   * @remarks
   * >  A UDF that is deployed cannot be deleted. If you want to delete such a UDF, you must first undeploy the UDF.
   * 
   * @param request - DeleteFunctionRequest
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(request: $_model.DeleteFunctionRequest): Promise<$_model.DeleteFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  /**
   * 删除血缘关系
   * 
   * @param request - DeleteLineageRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLineageRelationshipResponse
   */
  async deleteLineageRelationshipWithOptions(request: $_model.DeleteLineageRelationshipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLineageRelationshipResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLineageRelationship",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLineageRelationshipResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLineageRelationshipResponse({}));
  }

  /**
   * 删除血缘关系
   * 
   * @param request - DeleteLineageRelationshipRequest
   * @returns DeleteLineageRelationshipResponse
   */
  async deleteLineageRelationship(request: $_model.DeleteLineageRelationshipRequest): Promise<$_model.DeleteLineageRelationshipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLineageRelationshipWithOptions(request, runtime);
  }

  /**
   * 删除集合
   * 
   * @param request - DeleteMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetaCollectionResponse
   */
  async deleteMetaCollectionWithOptions(request: $_model.DeleteMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetaCollectionResponse({}));
  }

  /**
   * 删除集合
   * 
   * @param request - DeleteMetaCollectionRequest
   * @returns DeleteMetaCollectionResponse
   */
  async deleteMetaCollection(request: $_model.DeleteMetaCollectionRequest): Promise<$_model.DeleteMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Disassociates and deletes a network from a general resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNetworkResponse
   */
  async deleteNetworkWithOptions(request: $_model.DeleteNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNetworkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNetworkResponse({}));
  }

  /**
   * Disassociates and deletes a network from a general resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteNetworkRequest
   * @returns DeleteNetworkResponse
   */
  async deleteNetwork(request: $_model.DeleteNetworkRequest): Promise<$_model.DeleteNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNetworkWithOptions(request, runtime);
  }

  /**
   * Deletes a node from DataStudio.
   * 
   * @remarks
   * >  A node that is deployed cannot be deleted. If you want to delete such a node, you must first undeploy the node.
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: $_model.DeleteNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNodeResponse({}));
  }

  /**
   * Deletes a node from DataStudio.
   * 
   * @remarks
   * >  A node that is deployed cannot be deleted. If you want to delete such a node, you must first undeploy the node.
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: $_model.DeleteNodeRequest): Promise<$_model.DeleteNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * Deletes a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(request: $_model.DeleteProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  /**
   * Removes a workspace member and the workspace-level roles that are assigned to the member.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMemberWithOptions(request: $_model.DeleteProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectMemberResponse({}));
  }

  /**
   * Removes a workspace member and the workspace-level roles that are assigned to the member.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteProjectMemberRequest
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMember(request: $_model.DeleteProjectMemberRequest): Promise<$_model.DeleteProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  /**
   * Deletes a file resource from DataStudio.
   * 
   * @remarks
   * >  A file resource that is deployed cannot be deleted. If you want to delete such a file resource, you must first undeploy the file resource.
   * 
   * @param request - DeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(request: $_model.DeleteResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceResponse({}));
  }

  /**
   * Deletes a file resource from DataStudio.
   * 
   * @remarks
   * >  A file resource that is deployed cannot be deleted. If you want to delete such a file resource, you must first undeploy the file resource.
   * 
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(request: $_model.DeleteResourceRequest): Promise<$_model.DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a serverless resource group.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  **Before you call this API operation, you must make sure that you have a good command of the billing details and [pricing](https://help.aliyun.com/document_detail/2680173.html) of serverless resource groups.
   * 
   * @param request - DeleteResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(request: $_model.DeleteResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceGroupResponse({}));
  }

  /**
   * Deletes a serverless resource group.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  **Before you call this API operation, you must make sure that you have a good command of the billing details and [pricing](https://help.aliyun.com/document_detail/2680173.html) of serverless resource groups.
   * 
   * @param request - DeleteResourceGroupRequest
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(request: $_model.DeleteResourceGroupRequest): Promise<$_model.DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a route from a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRouteResponse
   */
  async deleteRouteWithOptions(request: $_model.DeleteRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRouteResponse({}));
  }

  /**
   * Deletes a route from a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteRouteRequest
   * @returns DeleteRouteResponse
   */
  async deleteRoute(request: $_model.DeleteRouteRequest): Promise<$_model.DeleteRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(request: $_model.DeleteTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectEnv)) {
      query["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskResponse({}));
  }

  /**
   * Deletes a task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteTaskRequest
   * @returns DeleteTaskResponse
   */
  async deleteTask(request: $_model.DeleteTaskRequest): Promise<$_model.DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a workflow.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(request: $_model.DeleteWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientUniqueCode)) {
      body["ClientUniqueCode"] = request.clientUniqueCode;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflow",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowResponse({}));
  }

  /**
   * Deletes a workflow.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(request: $_model.DeleteWorkflowRequest): Promise<$_model.DeleteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowWithOptions(request, runtime);
  }

  /**
   * Deletes a workflow from DataStudio.
   * 
   * @remarks
   * >  A workflow that is deployed cannot be deleted. If you want to delete such a workflow, you must first undeploy the workflow.
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinitionWithOptions(request: $_model.DeleteWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowDefinitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowDefinitionResponse({}));
  }

  /**
   * Deletes a workflow from DataStudio.
   * 
   * @remarks
   * >  A workflow that is deployed cannot be deleted. If you want to delete such a workflow, you must first undeploy the workflow.
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinition(request: $_model.DeleteWorkflowDefinitionRequest): Promise<$_model.DeleteWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * @param request - DeployFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployFileResponse
   */
  async deployFileWithOptions(request: $_model.DeployFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployFileResponse>(await this.callApi(params, req, runtime), new $_model.DeployFileResponse({}));
  }

  /**
   * @param request - DeployFileRequest
   * @returns DeployFileResponse
   */
  async deployFile(request: $_model.DeployFileRequest): Promise<$_model.DeployFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployFileWithOptions(request, runtime);
  }

  /**
   * Disassociates monitoring rules from a data quality monitoring task.
   * 
   * @param tmpReq - DetachDataQualityRulesFromEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachDataQualityRulesFromEvaluationTaskResponse
   */
  async detachDataQualityRulesFromEvaluationTaskWithOptions(tmpReq: $_model.DetachDataQualityRulesFromEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachDataQualityRulesFromEvaluationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.DetachDataQualityRulesFromEvaluationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataQualityRuleIds)) {
      request.dataQualityRuleIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataQualityRuleIds, "DataQualityRuleIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataQualityEvaluationTaskId)) {
      body["DataQualityEvaluationTaskId"] = request.dataQualityEvaluationTaskId;
    }

    if (!$dara.isNull(request.dataQualityRuleIdsShrink)) {
      body["DataQualityRuleIds"] = request.dataQualityRuleIdsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachDataQualityRulesFromEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachDataQualityRulesFromEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.DetachDataQualityRulesFromEvaluationTaskResponse({}));
  }

  /**
   * Disassociates monitoring rules from a data quality monitoring task.
   * 
   * @param request - DetachDataQualityRulesFromEvaluationTaskRequest
   * @returns DetachDataQualityRulesFromEvaluationTaskResponse
   */
  async detachDataQualityRulesFromEvaluationTask(request: $_model.DetachDataQualityRulesFromEvaluationTaskRequest): Promise<$_model.DetachDataQualityRulesFromEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachDataQualityRulesFromEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Disassociates a resource group from a workspace.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  Your account must be assigned one of the following roles of the desired workspace:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - DissociateProjectFromResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateProjectFromResourceGroupResponse
   */
  async dissociateProjectFromResourceGroupWithOptions(request: $_model.DissociateProjectFromResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateProjectFromResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateProjectFromResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateProjectFromResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DissociateProjectFromResourceGroupResponse({}));
  }

  /**
   * Disassociates a resource group from a workspace.
   * 
   * @remarks
   * 1.  You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 2.  Your account must be assigned one of the following roles of the desired workspace:
   * *   Tenant Owner, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - DissociateProjectFromResourceGroupRequest
   * @returns DissociateProjectFromResourceGroupResponse
   */
  async dissociateProjectFromResourceGroup(request: $_model.DissociateProjectFromResourceGroupRequest): Promise<$_model.DissociateProjectFromResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dissociateProjectFromResourceGroupWithOptions(request, runtime);
  }

  /**
   * @param request - EstablishRelationTableToBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EstablishRelationTableToBusinessResponse
   */
  async establishRelationTableToBusinessWithOptions(request: $_model.EstablishRelationTableToBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EstablishRelationTableToBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.tableGuid)) {
      body["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EstablishRelationTableToBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EstablishRelationTableToBusinessResponse>(await this.callApi(params, req, runtime), new $_model.EstablishRelationTableToBusinessResponse({}));
  }

  /**
   * @param request - EstablishRelationTableToBusinessRequest
   * @returns EstablishRelationTableToBusinessResponse
   */
  async establishRelationTableToBusiness(request: $_model.EstablishRelationTableToBusinessRequest): Promise<$_model.EstablishRelationTableToBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.establishRelationTableToBusinessWithOptions(request, runtime);
  }

  /**
   * Executes a stage in a process.
   * 
   * @remarks
   * >  The stages in a process are sequential. For more information, see the GetDeployment operation. Skipping or repeating a stage is not allowed.
   * >  The execution of a stage is asynchronous. The response of this operation indicates only whether a stage is triggered but does not indicate whether the execution of the stage is successful. You can call the GetDeployment operation to check whether the execution is successful.
   * 
   * @param request - ExecPipelineRunStageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecPipelineRunStageResponse
   */
  async execPipelineRunStageWithOptions(request: $_model.ExecPipelineRunStageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecPipelineRunStageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecPipelineRunStage",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecPipelineRunStageResponse>(await this.callApi(params, req, runtime), new $_model.ExecPipelineRunStageResponse({}));
  }

  /**
   * Executes a stage in a process.
   * 
   * @remarks
   * >  The stages in a process are sequential. For more information, see the GetDeployment operation. Skipping or repeating a stage is not allowed.
   * >  The execution of a stage is asynchronous. The response of this operation indicates only whether a stage is triggered but does not indicate whether the execution of the stage is successful. You can call the GetDeployment operation to check whether the execution is successful.
   * 
   * @param request - ExecPipelineRunStageRequest
   * @returns ExecPipelineRunStageResponse
   */
  async execPipelineRunStage(request: $_model.ExecPipelineRunStageRequest): Promise<$_model.ExecPipelineRunStageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.execPipelineRunStageWithOptions(request, runtime);
  }

  /**
   * Create a temporary workflow instance based on configurations.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ExecuteAdhocWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteAdhocWorkflowInstanceResponse
   */
  async executeAdhocWorkflowInstanceWithOptions(tmpReq: $_model.ExecuteAdhocWorkflowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteAdhocWorkflowInstanceResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteAdhocWorkflowInstanceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tasksShrink)) {
      body["Tasks"] = request.tasksShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteAdhocWorkflowInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteAdhocWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteAdhocWorkflowInstanceResponse({}));
  }

  /**
   * Create a temporary workflow instance based on configurations.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ExecuteAdhocWorkflowInstanceRequest
   * @returns ExecuteAdhocWorkflowInstanceResponse
   */
  async executeAdhocWorkflowInstance(request: $_model.ExecuteAdhocWorkflowInstanceRequest): Promise<$_model.ExecuteAdhocWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeAdhocWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * Queries a custom alert monitoring rule.
   * 
   * @param request - GetAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertRuleResponse
   */
  async getAlertRuleWithOptions(request: $_model.GetAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertRuleResponse({}));
  }

  /**
   * Queries a custom alert monitoring rule.
   * 
   * @param request - GetAlertRuleRequest
   * @returns GetAlertRuleResponse
   */
  async getAlertRule(request: $_model.GetAlertRuleRequest): Promise<$_model.GetAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertRuleWithOptions(request, runtime);
  }

  /**
   * @param request - GetBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBusinessResponse
   */
  async getBusinessWithOptions(request: $_model.GetBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBusinessResponse>(await this.callApi(params, req, runtime), new $_model.GetBusinessResponse({}));
  }

  /**
   * @param request - GetBusinessRequest
   * @returns GetBusinessResponse
   */
  async getBusiness(request: $_model.GetBusinessRequest): Promise<$_model.GetBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBusinessWithOptions(request, runtime);
  }

  /**
   * 获取数据目录详情
   * 
   * @param request - GetCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogResponse
   */
  async getCatalogWithOptions(request: $_model.GetCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalog",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogResponse({}));
  }

  /**
   * 获取数据目录详情
   * 
   * @param request - GetCatalogRequest
   * @returns GetCatalogResponse
   */
  async getCatalog(request: $_model.GetCatalogRequest): Promise<$_model.GetCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCatalogWithOptions(request, runtime);
  }

  /**
   * Queries a certificate file.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Deploy, Develop, Workspace Owner, and O\\&M.
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
      version: "2024-05-18",
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
   * Queries a certificate file.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Deploy, Develop, Workspace Owner, and O\\&M.
   * 
   * @param request - GetCertificateRequest
   * @returns GetCertificateResponse
   */
  async getCertificate(request: $_model.GetCertificateRequest): Promise<$_model.GetCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCertificateWithOptions(request, runtime);
  }

  /**
   * 获取字段详情
   * 
   * @param request - GetColumnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetColumnResponse
   */
  async getColumnWithOptions(request: $_model.GetColumnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetColumnResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetColumn",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetColumnResponse>(await this.callApi(params, req, runtime), new $_model.GetColumnResponse({}));
  }

  /**
   * 获取字段详情
   * 
   * @param request - GetColumnRequest
   * @returns GetColumnResponse
   */
  async getColumn(request: $_model.GetColumnRequest): Promise<$_model.GetColumnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getColumnWithOptions(request, runtime);
  }

  /**
   * Queries the result of asynchronously creating a workflow instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetCreateWorkflowInstancesResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateWorkflowInstancesResultResponse
   */
  async getCreateWorkflowInstancesResultWithOptions(request: $_model.GetCreateWorkflowInstancesResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateWorkflowInstancesResultResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateWorkflowInstancesResult",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateWorkflowInstancesResultResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateWorkflowInstancesResultResponse({}));
  }

  /**
   * Queries the result of asynchronously creating a workflow instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetCreateWorkflowInstancesResultRequest
   * @returns GetCreateWorkflowInstancesResultResponse
   */
  async getCreateWorkflowInstancesResult(request: $_model.GetCreateWorkflowInstancesResultRequest): Promise<$_model.GetCreateWorkflowInstancesResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateWorkflowInstancesResultWithOptions(request, runtime);
  }

  /**
   * Queries the information about a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobResponse
   */
  async getDIJobWithOptions(request: $_model.GetDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDIJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDIJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDIJobResponse({}));
  }

  /**
   * Queries the information about a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDIJobRequest
   * @returns GetDIJobResponse
   */
  async getDIJob(request: $_model.GetDIJobRequest): Promise<$_model.GetDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDIJobWithOptions(request, runtime);
  }

  /**
   * Obtains logs generated for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDIJobLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobLogResponse
   */
  async getDIJobLogWithOptions(request: $_model.GetDIJobLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDIJobLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDIJobLog",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDIJobLogResponse>(await this.callApi(params, req, runtime), new $_model.GetDIJobLogResponse({}));
  }

  /**
   * Obtains logs generated for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDIJobLogRequest
   * @returns GetDIJobLogResponse
   */
  async getDIJobLog(request: $_model.GetDIJobLogRequest): Promise<$_model.GetDIJobLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDIJobLogWithOptions(request, runtime);
  }

  /**
   * Queries the details of a monitor.
   * 
   * @param request - GetDataQualityEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityEvaluationTaskResponse
   */
  async getDataQualityEvaluationTaskWithOptions(request: $_model.GetDataQualityEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataQualityEvaluationTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataQualityEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataQualityEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetDataQualityEvaluationTaskResponse({}));
  }

  /**
   * Queries the details of a monitor.
   * 
   * @param request - GetDataQualityEvaluationTaskRequest
   * @returns GetDataQualityEvaluationTaskResponse
   */
  async getDataQualityEvaluationTask(request: $_model.GetDataQualityEvaluationTaskRequest): Promise<$_model.GetDataQualityEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataQualityEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a monitor instance.
   * 
   * @param request - GetDataQualityEvaluationTaskInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityEvaluationTaskInstanceResponse
   */
  async getDataQualityEvaluationTaskInstanceWithOptions(request: $_model.GetDataQualityEvaluationTaskInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataQualityEvaluationTaskInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataQualityEvaluationTaskInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataQualityEvaluationTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetDataQualityEvaluationTaskInstanceResponse({}));
  }

  /**
   * Queries the details of a monitor instance.
   * 
   * @param request - GetDataQualityEvaluationTaskInstanceRequest
   * @returns GetDataQualityEvaluationTaskInstanceResponse
   */
  async getDataQualityEvaluationTaskInstance(request: $_model.GetDataQualityEvaluationTaskInstanceRequest): Promise<$_model.GetDataQualityEvaluationTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataQualityEvaluationTaskInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a data quality monitoring rule.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDataQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityRuleResponse
   */
  async getDataQualityRuleWithOptions(request: $_model.GetDataQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataQualityRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataQualityRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetDataQualityRuleResponse({}));
  }

  /**
   * Queries the information about a data quality monitoring rule.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDataQualityRuleRequest
   * @returns GetDataQualityRuleResponse
   */
  async getDataQualityRule(request: $_model.GetDataQualityRuleRequest): Promise<$_model.GetDataQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataQualityRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about a data quality monitoring rule template.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDataQualityRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataQualityRuleTemplateResponse
   */
  async getDataQualityRuleTemplateWithOptions(request: $_model.GetDataQualityRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataQualityRuleTemplateResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataQualityRuleTemplate",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataQualityRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetDataQualityRuleTemplateResponse({}));
  }

  /**
   * Queries the information about a data quality monitoring rule template.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetDataQualityRuleTemplateRequest
   * @returns GetDataQualityRuleTemplateResponse
   */
  async getDataQualityRuleTemplate(request: $_model.GetDataQualityRuleTemplateRequest): Promise<$_model.GetDataQualityRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataQualityRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Queries a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deployment, Development, Project Owner, and O\\&M
   * 
   * @param request - GetDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceResponse
   */
  async getDataSourceWithOptions(request: $_model.GetDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceResponse({}));
  }

  /**
   * Queries a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deployment, Development, Project Owner, and O\\&M
   * 
   * @param request - GetDataSourceRequest
   * @returns GetDataSourceResponse
   */
  async getDataSource(request: $_model.GetDataSourceRequest): Promise<$_model.GetDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceWithOptions(request, runtime);
  }

  /**
   * 获取数据库详情
   * 
   * @param request - GetDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseResponse
   */
  async getDatabaseWithOptions(request: $_model.GetDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabase",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseResponse({}));
  }

  /**
   * 获取数据库详情
   * 
   * @param request - GetDatabaseRequest
   * @returns GetDatabaseResponse
   */
  async getDatabase(request: $_model.GetDatabaseRequest): Promise<$_model.GetDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseWithOptions(request, runtime);
  }

  /**
   * @param request - GetDeploymentPackageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentPackageResponse
   */
  async getDeploymentPackageWithOptions(request: $_model.GetDeploymentPackageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentPackageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      body["DeploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentPackage",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentPackageResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentPackageResponse({}));
  }

  /**
   * @param request - GetDeploymentPackageRequest
   * @returns GetDeploymentPackageResponse
   */
  async getDeploymentPackage(request: $_model.GetDeploymentPackageRequest): Promise<$_model.GetDeploymentPackageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeploymentPackageWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(request: $_model.GetFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileResponse>(await this.callApi(params, req, runtime), new $_model.GetFileResponse({}));
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(request: $_model.GetFileRequest): Promise<$_model.GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file version.
   * 
   * @param request - GetFileVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileVersionResponse
   */
  async getFileVersionWithOptions(request: $_model.GetFileVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileVersion)) {
      body["FileVersion"] = request.fileVersion;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileVersion",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetFileVersionResponse({}));
  }

  /**
   * Queries the information about a file version.
   * 
   * @param request - GetFileVersionRequest
   * @returns GetFileVersionResponse
   */
  async getFileVersion(request: $_model.GetFileVersionRequest): Promise<$_model.GetFileVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileVersionWithOptions(request, runtime);
  }

  /**
   * @param request - GetFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(request: $_model.GetFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFolderResponse>(await this.callApi(params, req, runtime), new $_model.GetFolderResponse({}));
  }

  /**
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(request: $_model.GetFolderRequest): Promise<$_model.GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  /**
   * Queries the information about a user-defined function (UDF) in DataStudio.
   * 
   * @param request - GetFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(request: $_model.GetFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionResponse({}));
  }

  /**
   * Queries the information about a user-defined function (UDF) in DataStudio.
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(request: $_model.GetFunctionRequest): Promise<$_model.GetFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFunctionWithOptions(request, runtime);
  }

  /**
   * Queries the data snapshot of an extension point based on the ID of a message in DataWorks OpenEvent when the related extension point event is triggered.
   * 
   * @param request - GetIDEEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIDEEventDetailResponse
   */
  async getIDEEventDetailWithOptions(request: $_model.GetIDEEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIDEEventDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIDEEventDetail",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIDEEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetIDEEventDetailResponse({}));
  }

  /**
   * Queries the data snapshot of an extension point based on the ID of a message in DataWorks OpenEvent when the related extension point event is triggered.
   * 
   * @param request - GetIDEEventDetailRequest
   * @returns GetIDEEventDetailResponse
   */
  async getIDEEventDetail(request: $_model.GetIDEEventDetailRequest): Promise<$_model.GetIDEEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIDEEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries the status information of an asynchronous task. After you call an asynchronous operation, an asynchronous task is generated. You can call the GetJobStatus operation to query the status of the asynchronous task.
   * 
   * @param request - GetJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobStatusResponse
   */
  async getJobStatusWithOptions(request: $_model.GetJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobStatus",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetJobStatusResponse({}));
  }

  /**
   * Queries the status information of an asynchronous task. After you call an asynchronous operation, an asynchronous task is generated. You can call the GetJobStatus operation to query the status of the asynchronous task.
   * 
   * @param request - GetJobStatusRequest
   * @returns GetJobStatusResponse
   */
  async getJobStatus(request: $_model.GetJobStatusRequest): Promise<$_model.GetJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  /**
   * 获取血缘关系详情
   * 
   * @param request - GetLineageRelationshipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLineageRelationshipResponse
   */
  async getLineageRelationshipWithOptions(request: $_model.GetLineageRelationshipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLineageRelationshipResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLineageRelationship",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLineageRelationshipResponse>(await this.callApi(params, req, runtime), new $_model.GetLineageRelationshipResponse({}));
  }

  /**
   * 获取血缘关系详情
   * 
   * @param request - GetLineageRelationshipRequest
   * @returns GetLineageRelationshipResponse
   */
  async getLineageRelationship(request: $_model.GetLineageRelationshipRequest): Promise<$_model.GetLineageRelationshipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLineageRelationshipWithOptions(request, runtime);
  }

  /**
   * Queries the information about a collection in Data Map. Collections include categories and data albums.
   * 
   * @param request - GetMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaCollectionResponse
   */
  async getMetaCollectionWithOptions(request: $_model.GetMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaCollectionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaCollectionResponse({}));
  }

  /**
   * Queries the information about a collection in Data Map. Collections include categories and data albums.
   * 
   * @param request - GetMetaCollectionRequest
   * @returns GetMetaCollectionResponse
   */
  async getMetaCollection(request: $_model.GetMetaCollectionRequest): Promise<$_model.GetMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkResponse
   */
  async getNetworkWithOptions(request: $_model.GetNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNetworkResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetwork",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNetworkResponse>(await this.callApi(params, req, runtime), new $_model.GetNetworkResponse({}));
  }

  /**
   * Queries the information about a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetNetworkRequest
   * @returns GetNetworkResponse
   */
  async getNetwork(request: $_model.GetNetworkRequest): Promise<$_model.GetNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNetworkWithOptions(request, runtime);
  }

  /**
   * Queries the information about a node in DataStudio.
   * 
   * @param request - GetNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(request: $_model.GetNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeResponse({}));
  }

  /**
   * Queries the information about a node in DataStudio.
   * 
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: $_model.GetNodeRequest): Promise<$_model.GetNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  /**
   * 获取数据表的分区详情
   * 
   * @param request - GetPartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPartitionResponse
   */
  async getPartitionWithOptions(request: $_model.GetPartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPartitionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPartition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetPartitionResponse({}));
  }

  /**
   * 获取数据表的分区详情
   * 
   * @param request - GetPartitionRequest
   * @returns GetPartitionResponse
   */
  async getPartition(request: $_model.GetPartitionRequest): Promise<$_model.GetPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPartitionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a process for deploying or undeploying an entity.
   * 
   * @param request - GetPipelineRunRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineRunResponse
   */
  async getPipelineRunWithOptions(request: $_model.GetPipelineRunRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineRunResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipelineRun",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineRunResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineRunResponse({}));
  }

  /**
   * Queries the information about a process for deploying or undeploying an entity.
   * 
   * @param request - GetPipelineRunRequest
   * @returns GetPipelineRunResponse
   */
  async getPipelineRun(request: $_model.GetPipelineRunRequest): Promise<$_model.GetPipelineRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPipelineRunWithOptions(request, runtime);
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * Queries the details about a member in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectMemberResponse
   */
  async getProjectMemberWithOptions(request: $_model.GetProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectMember",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectMemberResponse({}));
  }

  /**
   * Queries the details about a member in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectMemberRequest
   * @returns GetProjectMemberResponse
   */
  async getProjectMember(request: $_model.GetProjectMemberRequest): Promise<$_model.GetProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectMemberWithOptions(request, runtime);
  }

  /**
   * Queries the information about a role in a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectRoleResponse
   */
  async getProjectRoleWithOptions(request: $_model.GetProjectRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectRole",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectRoleResponse({}));
  }

  /**
   * Queries the information about a role in a DataWorks workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetProjectRoleRequest
   * @returns GetProjectRoleResponse
   */
  async getProjectRole(request: $_model.GetProjectRoleRequest): Promise<$_model.GetProjectRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectRoleWithOptions(request, runtime);
  }

  /**
   * Query the result of asynchronous workflow instance reruns.
   * 
   * @param request - GetRerunWorkflowInstancesResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRerunWorkflowInstancesResultResponse
   */
  async getRerunWorkflowInstancesResultWithOptions(request: $_model.GetRerunWorkflowInstancesResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRerunWorkflowInstancesResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRerunWorkflowInstancesResult",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRerunWorkflowInstancesResultResponse>(await this.callApi(params, req, runtime), new $_model.GetRerunWorkflowInstancesResultResponse({}));
  }

  /**
   * Query the result of asynchronous workflow instance reruns.
   * 
   * @param request - GetRerunWorkflowInstancesResultRequest
   * @returns GetRerunWorkflowInstancesResultResponse
   */
  async getRerunWorkflowInstancesResult(request: $_model.GetRerunWorkflowInstancesResultRequest): Promise<$_model.GetRerunWorkflowInstancesResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRerunWorkflowInstancesResultWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file resource.
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: $_model.GetResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceResponse({}));
  }

  /**
   * Queries the information about a file resource.
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: $_model.GetResourceRequest): Promise<$_model.GetResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a resource group based on its ID.
   * 
   * @remarks
   * You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 
   * @param request - GetResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(request: $_model.GetResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupResponse({}));
  }

  /**
   * Queries the information about a resource group based on its ID.
   * 
   * @remarks
   * You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(request: $_model.GetResourceGroupRequest): Promise<$_model.GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a route based on its ID.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRouteResponse
   */
  async getRouteWithOptions(request: $_model.GetRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRouteResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRouteResponse>(await this.callApi(params, req, runtime), new $_model.GetRouteResponse({}));
  }

  /**
   * Queries the information about a route based on its ID.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetRouteRequest
   * @returns GetRouteResponse
   */
  async getRoute(request: $_model.GetRouteRequest): Promise<$_model.GetRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRouteWithOptions(request, runtime);
  }

  /**
   * Queries the information about a schema in Data Map. You can call this API operation to query the information only about MaxCompute and Hologres schemas.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this API operation to query the information only about MaxCompute and Hologres schemas.
   * 
   * @param request - GetSchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSchemaResponse
   */
  async getSchemaWithOptions(request: $_model.GetSchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSchemaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSchema",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetSchemaResponse({}));
  }

  /**
   * Queries the information about a schema in Data Map. You can call this API operation to query the information only about MaxCompute and Hologres schemas.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this API operation to query the information only about MaxCompute and Hologres schemas.
   * 
   * @param request - GetSchemaRequest
   * @returns GetSchemaResponse
   */
  async getSchema(request: $_model.GetSchemaRequest): Promise<$_model.GetSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSchemaWithOptions(request, runtime);
  }

  /**
   * 获取表详情
   * 
   * @param request - GetTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
  async getTableWithOptions(request: $_model.GetTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableResponse>(await this.callApi(params, req, runtime), new $_model.GetTableResponse({}));
  }

  /**
   * 获取表详情
   * 
   * @param request - GetTableRequest
   * @returns GetTableResponse
   */
  async getTable(request: $_model.GetTableRequest): Promise<$_model.GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - GetTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(request: $_model.GetTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about an instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetTaskInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInstanceResponse
   */
  async getTaskInstanceWithOptions(request: $_model.GetTaskInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskInstanceResponse({}));
  }

  /**
   * Queries the information about an instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetTaskInstanceRequest
   * @returns GetTaskInstanceResponse
   */
  async getTaskInstance(request: $_model.GetTaskInstanceRequest): Promise<$_model.GetTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the run log generated during a specific run of an instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetTaskInstanceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInstanceLogResponse
   */
  async getTaskInstanceLogWithOptions(request: $_model.GetTaskInstanceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskInstanceLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskInstanceLog",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskInstanceLogResponse({}));
  }

  /**
   * Queries the run log generated during a specific run of an instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetTaskInstanceLogRequest
   * @returns GetTaskInstanceLogResponse
   */
  async getTaskInstanceLog(request: $_model.GetTaskInstanceLogRequest): Promise<$_model.GetTaskInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTaskInstanceLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workflow.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowResponse
   */
  async getWorkflowWithOptions(request: $_model.GetWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflow",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowResponse({}));
  }

  /**
   * Queries the information about a workflow.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetWorkflowRequest
   * @returns GetWorkflowResponse
   */
  async getWorkflow(request: $_model.GetWorkflowRequest): Promise<$_model.GetWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workflow.
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinitionWithOptions(request: $_model.GetWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowDefinitionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowDefinitionResponse({}));
  }

  /**
   * Queries the information about a workflow.
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinition(request: $_model.GetWorkflowDefinitionRequest): Promise<$_model.GetWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workflow instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstanceWithOptions(request: $_model.GetWorkflowInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkflowInstanceResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkflowInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkflowInstanceResponse({}));
  }

  /**
   * Queries the information about a workflow instance.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GetWorkflowInstanceRequest
   * @returns GetWorkflowInstanceResponse
   */
  async getWorkflowInstance(request: $_model.GetWorkflowInstanceRequest): Promise<$_model.GetWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getWorkflowInstanceWithOptions(request, runtime);
  }

  /**
   * Assigns roles to members in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - GrantMemberProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantMemberProjectRolesResponse
   */
  async grantMemberProjectRolesWithOptions(tmpReq: $_model.GrantMemberProjectRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantMemberProjectRolesResponse> {
    tmpReq.validate();
    let request = new $_model.GrantMemberProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantMemberProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantMemberProjectRolesResponse>(await this.callApi(params, req, runtime), new $_model.GrantMemberProjectRolesResponse({}));
  }

  /**
   * Assigns roles to members in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - GrantMemberProjectRolesRequest
   * @returns GrantMemberProjectRolesResponse
   */
  async grantMemberProjectRoles(request: $_model.GrantMemberProjectRolesRequest): Promise<$_model.GrantMemberProjectRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantMemberProjectRolesWithOptions(request, runtime);
  }

  /**
   * Imports a certificate file.
   * 
   * @param request - ImportCertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportCertificateResponse
   */
  async importCertificateWithOptions(request: $_model.ImportCertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certificateFile)) {
      query["CertificateFile"] = request.certificateFile;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportCertificate",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportCertificateResponse>(await this.callApi(params, req, runtime), new $_model.ImportCertificateResponse({}));
  }

  /**
   * Imports a certificate file.
   * 
   * @param request - ImportCertificateRequest
   * @returns ImportCertificateResponse
   */
  async importCertificate(request: $_model.ImportCertificateRequest): Promise<$_model.ImportCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importCertificateWithOptions(request, runtime);
  }

  async importCertificateAdvance(request: $_model.ImportCertificateAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportCertificateResponse> {
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
      product: "dataworks-public",
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
    let importCertificateReq = new $_model.ImportCertificateRequest({ });
    OpenApiUtil.convert(request, importCertificateReq);
    if (!$dara.isNull(request.certificateFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.certificateFileObject,
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
      importCertificateReq.certificateFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let importCertificateResp = await this.importCertificateWithOptions(importCertificateReq, runtime);
    return importCertificateResp;
  }

  /**
   * Imports a workflow and its child nodes that are specified by the FlowSpec field to DataStudio.
   * 
   * @remarks
   * > 
   * *   You cannot use this API operation to import multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system imports only the first specified workflow.
   * *   ImportWorkflowDefinition is an asynchronous operation. After you send a request, an asynchronous task is generated, and the system returns the ID of the asynchronous task. You can call the GetJobStatus operation to query the status of the asynchronous task.
   * 
   * @param request - ImportWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportWorkflowDefinitionResponse
   */
  async importWorkflowDefinitionWithOptions(request: $_model.ImportWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportWorkflowDefinitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.ImportWorkflowDefinitionResponse({}));
  }

  /**
   * Imports a workflow and its child nodes that are specified by the FlowSpec field to DataStudio.
   * 
   * @remarks
   * > 
   * *   You cannot use this API operation to import multiple workflows at a time. If you specify multiple workflows by using FlowSpec, the system imports only the first specified workflow.
   * *   ImportWorkflowDefinition is an asynchronous operation. After you send a request, an asynchronous task is generated, and the system returns the ID of the asynchronous task. You can call the GetJobStatus operation to query the status of the asynchronous task.
   * 
   * @param request - ImportWorkflowDefinitionRequest
   * @returns ImportWorkflowDefinitionResponse
   */
  async importWorkflowDefinition(request: $_model.ImportWorkflowDefinitionRequest): Promise<$_model.ImportWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom monitoring alert rules.
   * 
   * @param tmpReq - ListAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertRulesResponse
   */
  async listAlertRulesWithOptions(tmpReq: $_model.ListAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertRulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertRulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "json");
    }

    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.receiver)) {
      query["Receiver"] = request.receiver;
    }

    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertRulesResponse({}));
  }

  /**
   * Queries a list of custom monitoring alert rules.
   * 
   * @param request - ListAlertRulesRequest
   * @returns ListAlertRulesResponse
   */
  async listAlertRules(request: $_model.ListAlertRulesRequest): Promise<$_model.ListAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertRulesWithOptions(request, runtime);
  }

  /**
   * @param request - ListBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBusinessResponse
   */
  async listBusinessWithOptions(request: $_model.ListBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBusinessResponse>(await this.callApi(params, req, runtime), new $_model.ListBusinessResponse({}));
  }

  /**
   * @param request - ListBusinessRequest
   * @returns ListBusinessResponse
   */
  async listBusiness(request: $_model.ListBusinessRequest): Promise<$_model.ListBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBusinessWithOptions(request, runtime);
  }

  /**
   * 查询数据目录列表
   * 
   * @param tmpReq - ListCatalogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCatalogsResponse
   */
  async listCatalogsWithOptions(tmpReq: $_model.ListCatalogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCatalogsResponse> {
    tmpReq.validate();
    let request = new $_model.ListCatalogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCatalogs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCatalogsResponse({}));
  }

  /**
   * 查询数据目录列表
   * 
   * @param request - ListCatalogsRequest
   * @returns ListCatalogsResponse
   */
  async listCatalogs(request: $_model.ListCatalogsRequest): Promise<$_model.ListCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCatalogsWithOptions(request, runtime);
  }

  /**
   * Queries a list of certificate files.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Deploy, Develop, Visitor, Workspace Owner, O\\&M, Model Designer, Security Administrator, Data Analyst, OpenPlatform Administrator, and Data Governance Administrator.
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
      version: "2024-05-18",
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
   * Queries a list of certificate files.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks: Tenant Owner, Workspace Administrator, Deploy, Develop, Visitor, Workspace Owner, O\\&M, Model Designer, Security Administrator, Data Analyst, OpenPlatform Administrator, and Data Governance Administrator.
   * 
   * @param request - ListCertificatesRequest
   * @returns ListCertificatesResponse
   */
  async listCertificates(request: $_model.ListCertificatesRequest): Promise<$_model.ListCertificatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCertificatesWithOptions(request, runtime);
  }

  /**
   * 查询字段列表
   * 
   * @param request - ListColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListColumnsResponse
   */
  async listColumnsWithOptions(request: $_model.ListColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListColumnsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListColumns",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListColumnsResponse({}));
  }

  /**
   * 查询字段列表
   * 
   * @param request - ListColumnsRequest
   * @returns ListColumnsResponse
   */
  async listColumns(request: $_model.ListColumnsRequest): Promise<$_model.ListColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  /**
   * 查询元数据采集器类型列表
   * 
   * @param request - ListCrawlerTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCrawlerTypesResponse
   */
  async listCrawlerTypesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListCrawlerTypesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListCrawlerTypes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCrawlerTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListCrawlerTypesResponse({}));
  }

  /**
   * 查询元数据采集器类型列表
   * @returns ListCrawlerTypesResponse
   */
  async listCrawlerTypes(): Promise<$_model.ListCrawlerTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCrawlerTypesWithOptions(runtime);
  }

  /**
   * Views alert rules configured for a synchronization task.
   * 
   * @param request - ListDIAlarmRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRulesWithOptions(request: $_model.ListDIAlarmRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIAlarmRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIAlarmRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIAlarmRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDIAlarmRulesResponse({}));
  }

  /**
   * Views alert rules configured for a synchronization task.
   * 
   * @param request - ListDIAlarmRulesRequest
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRules(request: $_model.ListDIAlarmRulesRequest): Promise<$_model.ListDIAlarmRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIAlarmRulesWithOptions(request, runtime);
  }

  /**
   * Queries events for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEventsWithOptions(request: $_model.ListDIJobEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIJobEventsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIJobEvents",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIJobEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListDIJobEventsResponse({}));
  }

  /**
   * Queries events for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobEventsRequest
   * @returns ListDIJobEventsResponse
   */
  async listDIJobEvents(request: $_model.ListDIJobEventsRequest): Promise<$_model.ListDIJobEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIJobEventsWithOptions(request, runtime);
  }

  /**
   * Queries metrics for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListDIJobMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetricsWithOptions(tmpReq: $_model.ListDIJobMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIJobMetricsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDIJobMetricsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.metricName)) {
      request.metricNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.metricName, "MetricName", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIJobMetrics",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIJobMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListDIJobMetricsResponse({}));
  }

  /**
   * Queries metrics for a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobMetricsRequest
   * @returns ListDIJobMetricsResponse
   */
  async listDIJobMetrics(request: $_model.ListDIJobMetricsRequest): Promise<$_model.ListDIJobMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIJobMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the running information about a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobRunDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobRunDetailsResponse
   */
  async listDIJobRunDetailsWithOptions(request: $_model.ListDIJobRunDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIJobRunDetailsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIJobRunDetails",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIJobRunDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListDIJobRunDetailsResponse({}));
  }

  /**
   * Queries the running information about a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobRunDetailsRequest
   * @returns ListDIJobRunDetailsResponse
   */
  async listDIJobRunDetails(request: $_model.ListDIJobRunDetailsRequest): Promise<$_model.ListDIJobRunDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIJobRunDetailsWithOptions(request, runtime);
  }

  /**
   * Queries a list of new-version synchronization tasks in Data Integration. A new-version synchronization task can be a real-time synchronization task used to synchronize full or incremental data in a database, a batch synchronization task used to synchronize full or incremental data in a database, or a real-time synchronization task used to synchronize incremental data in a single table.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobsResponse
   */
  async listDIJobsWithOptions(request: $_model.ListDIJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIJobsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIJobs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDIJobsResponse({}));
  }

  /**
   * Queries a list of new-version synchronization tasks in Data Integration. A new-version synchronization task can be a real-time synchronization task used to synchronize full or incremental data in a database, a batch synchronization task used to synchronize full or incremental data in a database, or a real-time synchronization task used to synchronize incremental data in a single table.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDIJobsRequest
   * @returns ListDIJobsResponse
   */
  async listDIJobs(request: $_model.ListDIJobsRequest): Promise<$_model.ListDIJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIJobsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - ListDataAssetTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAssetTagsResponse
   */
  async listDataAssetTagsWithOptions(request: $_model.ListDataAssetTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAssetTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAssetTags",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAssetTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAssetTagsResponse({}));
  }

  /**
   * Queries a list of tags.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - ListDataAssetTagsRequest
   * @returns ListDataAssetTagsResponse
   */
  async listDataAssetTags(request: $_model.ListDataAssetTagsRequest): Promise<$_model.ListDataAssetTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAssetTagsWithOptions(request, runtime);
  }

  /**
   * Queries the information about DataWorks data assets to which tags are added by page.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - ListDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAssetsResponse
   */
  async listDataAssetsWithOptions(tmpReq: $_model.ListDataAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAssetsResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataAssetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataAssetIds)) {
      request.dataAssetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataAssetIds, "DataAssetIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAssets",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAssetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAssetsResponse({}));
  }

  /**
   * Queries the information about DataWorks data assets to which tags are added by page.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - ListDataAssetsRequest
   * @returns ListDataAssetsResponse
   */
  async listDataAssets(request: $_model.ListDataAssetsRequest): Promise<$_model.ListDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAssetsWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances generated by a data quality monitoring task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityEvaluationTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityEvaluationTaskInstancesResponse
   */
  async listDataQualityEvaluationTaskInstancesWithOptions(request: $_model.ListDataQualityEvaluationTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataQualityEvaluationTaskInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataQualityEvaluationTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataQualityEvaluationTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataQualityEvaluationTaskInstancesResponse({}));
  }

  /**
   * Queries a list of instances generated by a data quality monitoring task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityEvaluationTaskInstancesRequest
   * @returns ListDataQualityEvaluationTaskInstancesResponse
   */
  async listDataQualityEvaluationTaskInstances(request: $_model.ListDataQualityEvaluationTaskInstancesRequest): Promise<$_model.ListDataQualityEvaluationTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataQualityEvaluationTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of data quality monitoring tasks by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityEvaluationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityEvaluationTasksResponse
   */
  async listDataQualityEvaluationTasksWithOptions(request: $_model.ListDataQualityEvaluationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataQualityEvaluationTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataQualityEvaluationTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataQualityEvaluationTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDataQualityEvaluationTasksResponse({}));
  }

  /**
   * Queries a list of data quality monitoring tasks by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityEvaluationTasksRequest
   * @returns ListDataQualityEvaluationTasksResponse
   */
  async listDataQualityEvaluationTasks(request: $_model.ListDataQualityEvaluationTasksRequest): Promise<$_model.ListDataQualityEvaluationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataQualityEvaluationTasksWithOptions(request, runtime);
  }

  /**
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityResultsResponse
   */
  async listDataQualityResultsWithOptions(request: $_model.ListDataQualityResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataQualityResultsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataQualityResults",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataQualityResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataQualityResultsResponse({}));
  }

  /**
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityResultsRequest
   * @returns ListDataQualityResultsResponse
   */
  async listDataQualityResults(request: $_model.ListDataQualityResultsRequest): Promise<$_model.ListDataQualityResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataQualityResultsWithOptions(request, runtime);
  }

  /**
   * Queries a list of data quality monitoring rule templates.
   * 
   * @param request - ListDataQualityRuleTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityRuleTemplatesResponse
   */
  async listDataQualityRuleTemplatesWithOptions(request: $_model.ListDataQualityRuleTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataQualityRuleTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataQualityRuleTemplates",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataQualityRuleTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataQualityRuleTemplatesResponse({}));
  }

  /**
   * Queries a list of data quality monitoring rule templates.
   * 
   * @param request - ListDataQualityRuleTemplatesRequest
   * @returns ListDataQualityRuleTemplatesResponse
   */
  async listDataQualityRuleTemplates(request: $_model.ListDataQualityRuleTemplatesRequest): Promise<$_model.ListDataQualityRuleTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataQualityRuleTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries a list of data quality monitoring rules by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataQualityRulesResponse
   */
  async listDataQualityRulesWithOptions(request: $_model.ListDataQualityRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataQualityRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataQualityRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataQualityRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataQualityRulesResponse({}));
  }

  /**
   * Queries a list of data quality monitoring rules by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDataQualityRulesRequest
   * @returns ListDataQualityRulesResponse
   */
  async listDataQualityRules(request: $_model.ListDataQualityRulesRequest): Promise<$_model.ListDataQualityRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataQualityRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of sharing rules of a data source.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to query the sharing rules of a data source that is associated with Workspace A, you must have the permissions to share the data source in Workspace A. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRulesWithOptions(request: $_model.ListDataSourceSharedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceSharedRulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceSharedRules",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceSharedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceSharedRulesResponse({}));
  }

  /**
   * Queries a list of sharing rules of a data source.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  If you want to query the sharing rules of a data source that is associated with Workspace A, you must have the permissions to share the data source in Workspace A. You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, and Workspace Owner
   * 
   * @param request - ListDataSourceSharedRulesRequest
   * @returns ListDataSourceSharedRulesResponse
   */
  async listDataSourceSharedRules(request: $_model.ListDataSourceSharedRulesRequest): Promise<$_model.ListDataSourceSharedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceSharedRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of data sources based on the business information of data sources.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deploy, Develop, Visitor, Workspace Owner, O\\&M, Model Designer, Security Administrator, Data Analyst, OpenPlatform Administrator, and Data Governance Administrator
   * 
   * @param tmpReq - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(tmpReq: $_model.ListDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataSourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * Queries a list of data sources based on the business information of data sources.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Workspace Administrator, Deploy, Develop, Visitor, Workspace Owner, O\\&M, Model Designer, Security Administrator, Data Analyst, OpenPlatform Administrator, and Data Governance Administrator
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * 查询数据库列表
   * 
   * @param request - ListDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(request: $_model.ListDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * 查询数据库列表
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries a list of versions of files to be deployed.
   * 
   * @param tmpReq - ListDeploymentPackageFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentPackageFilesResponse
   */
  async listDeploymentPackageFilesWithOptions(tmpReq: $_model.ListDeploymentPackageFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentPackageFilesResponse> {
    tmpReq.validate();
    let request = new $_model.ListDeploymentPackageFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fileIds)) {
      request.fileIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fileIds, "FileIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.businessId)) {
      query["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.changeType)) {
      query["ChangeType"] = request.changeType;
    }

    if (!$dara.isNull(request.commitFrom)) {
      query["CommitFrom"] = request.commitFrom;
    }

    if (!$dara.isNull(request.commitTo)) {
      query["CommitTo"] = request.commitTo;
    }

    if (!$dara.isNull(request.commitUserId)) {
      query["CommitUserId"] = request.commitUserId;
    }

    if (!$dara.isNull(request.fileIdsShrink)) {
      query["FileIds"] = request.fileIdsShrink;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.solutionId)) {
      query["SolutionId"] = request.solutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentPackageFiles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentPackageFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentPackageFilesResponse({}));
  }

  /**
   * Queries a list of versions of files to be deployed.
   * 
   * @param request - ListDeploymentPackageFilesRequest
   * @returns ListDeploymentPackageFilesResponse
   */
  async listDeploymentPackageFiles(request: $_model.ListDeploymentPackageFilesRequest): Promise<$_model.ListDeploymentPackageFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentPackageFilesWithOptions(request, runtime);
  }

  /**
   * 查询发布包列表
   * 
   * @param request - ListDeploymentPackagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentPackagesResponse
   */
  async listDeploymentPackagesWithOptions(request: $_model.ListDeploymentPackagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentPackagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      body["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.endExecuteTime)) {
      body["EndExecuteTime"] = request.endExecuteTime;
    }

    if (!$dara.isNull(request.executor)) {
      body["Executor"] = request.executor;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentPackages",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentPackagesResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentPackagesResponse({}));
  }

  /**
   * 查询发布包列表
   * 
   * @param request - ListDeploymentPackagesRequest
   * @returns ListDeploymentPackagesResponse
   */
  async listDeploymentPackages(request: $_model.ListDeploymentPackagesRequest): Promise<$_model.ListDeploymentPackagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentPackagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of descendant instances of an instance by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDownstreamTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownstreamTaskInstancesResponse
   */
  async listDownstreamTaskInstancesWithOptions(request: $_model.ListDownstreamTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownstreamTaskInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownstreamTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownstreamTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListDownstreamTaskInstancesResponse({}));
  }

  /**
   * Queries a list of descendant instances of an instance by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListDownstreamTaskInstancesRequest
   * @returns ListDownstreamTaskInstancesResponse
   */
  async listDownstreamTaskInstances(request: $_model.ListDownstreamTaskInstancesRequest): Promise<$_model.ListDownstreamTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownstreamTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of descendant tasks of a task by page.
   * 
   * @param request - ListDownstreamTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownstreamTasksResponse
   */
  async listDownstreamTasksWithOptions(request: $_model.ListDownstreamTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownstreamTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownstreamTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownstreamTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDownstreamTasksResponse({}));
  }

  /**
   * Queries a list of descendant tasks of a task by page.
   * 
   * @param request - ListDownstreamTasksRequest
   * @returns ListDownstreamTasksResponse
   */
  async listDownstreamTasks(request: $_model.ListDownstreamTasksRequest): Promise<$_model.ListDownstreamTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDownstreamTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of entities in a collection in Data Map. Collections include categories and data albums. Entities can only be tables.
   * 
   * @param request - ListEntitiesInMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesInMetaCollectionResponse
   */
  async listEntitiesInMetaCollectionWithOptions(request: $_model.ListEntitiesInMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEntitiesInMetaCollectionResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEntitiesInMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEntitiesInMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.ListEntitiesInMetaCollectionResponse({}));
  }

  /**
   * Queries a list of entities in a collection in Data Map. Collections include categories and data albums. Entities can only be tables.
   * 
   * @param request - ListEntitiesInMetaCollectionRequest
   * @returns ListEntitiesInMetaCollectionResponse
   */
  async listEntitiesInMetaCollection(request: $_model.ListEntitiesInMetaCollectionRequest): Promise<$_model.ListEntitiesInMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntitiesInMetaCollectionWithOptions(request, runtime);
  }

  /**
   * @param request - ListFileVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileVersionsResponse
   */
  async listFileVersionsWithOptions(request: $_model.ListFileVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileVersionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileVersions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFileVersionsResponse({}));
  }

  /**
   * @param request - ListFileVersionsRequest
   * @returns ListFileVersionsResponse
   */
  async listFileVersions(request: $_model.ListFileVersionsRequest): Promise<$_model.ListFileVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileVersionsWithOptions(request, runtime);
  }

  /**
   * @param request - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(request: $_model.ListFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commitStatus)) {
      body["CommitStatus"] = request.commitStatus;
    }

    if (!$dara.isNull(request.exactFileName)) {
      body["ExactFileName"] = request.exactFileName;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileIdIn)) {
      body["FileIdIn"] = request.fileIdIn;
    }

    if (!$dara.isNull(request.fileTypes)) {
      body["FileTypes"] = request.fileTypes;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lastEditUser)) {
      body["LastEditUser"] = request.lastEditUser;
    }

    if (!$dara.isNull(request.needAbsoluteFolderPath)) {
      body["NeedAbsoluteFolderPath"] = request.needAbsoluteFolderPath;
    }

    if (!$dara.isNull(request.needContent)) {
      body["NeedContent"] = request.needContent;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFiles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFilesResponse({}));
  }

  /**
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: $_model.ListFilesRequest): Promise<$_model.ListFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * @param request - ListFoldersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoldersResponse
   */
  async listFoldersWithOptions(request: $_model.ListFoldersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFoldersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderPath)) {
      body["ParentFolderPath"] = request.parentFolderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFolders",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFoldersResponse>(await this.callApi(params, req, runtime), new $_model.ListFoldersResponse({}));
  }

  /**
   * @param request - ListFoldersRequest
   * @returns ListFoldersResponse
   */
  async listFolders(request: $_model.ListFoldersRequest): Promise<$_model.ListFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoldersWithOptions(request, runtime);
  }

  /**
   * Queries a list of user-defined functions (UDFs) in DataStudio. You can also specify filter conditions to query specific UDFs.
   * 
   * @param request - ListFunctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: $_model.ListFunctionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionsResponse({}));
  }

  /**
   * Queries a list of user-defined functions (UDFs) in DataStudio. You can also specify filter conditions to query specific UDFs.
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: $_model.ListFunctionsRequest): Promise<$_model.ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFunctionsWithOptions(request, runtime);
  }

  /**
   * 查询血缘关系
   * 
   * @param request - ListLineageRelationshipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLineageRelationshipsResponse
   */
  async listLineageRelationshipsWithOptions(request: $_model.ListLineageRelationshipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLineageRelationshipsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLineageRelationships",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLineageRelationshipsResponse>(await this.callApi(params, req, runtime), new $_model.ListLineageRelationshipsResponse({}));
  }

  /**
   * 查询血缘关系
   * 
   * @param request - ListLineageRelationshipsRequest
   * @returns ListLineageRelationshipsResponse
   */
  async listLineageRelationships(request: $_model.ListLineageRelationshipsRequest): Promise<$_model.ListLineageRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLineageRelationshipsWithOptions(request, runtime);
  }

  /**
   * Queries a list of ancestor and descendant entities of an entity in Data Map. You can specify whether to return the lineage between the entities.
   * 
   * @param request - ListLineagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLineagesResponse
   */
  async listLineagesWithOptions(request: $_model.ListLineagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLineagesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLineages",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLineagesResponse>(await this.callApi(params, req, runtime), new $_model.ListLineagesResponse({}));
  }

  /**
   * Queries a list of ancestor and descendant entities of an entity in Data Map. You can specify whether to return the lineage between the entities.
   * 
   * @param request - ListLineagesRequest
   * @returns ListLineagesResponse
   */
  async listLineages(request: $_model.ListLineagesRequest): Promise<$_model.ListLineagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLineagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of collections in Data Map. Collections include categories and data albums.
   * 
   * @param request - ListMetaCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaCollectionsResponse
   */
  async listMetaCollectionsWithOptions(request: $_model.ListMetaCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaCollectionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaCollections",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaCollectionsResponse({}));
  }

  /**
   * Queries a list of collections in Data Map. Collections include categories and data albums.
   * 
   * @param request - ListMetaCollectionsRequest
   * @returns ListMetaCollectionsResponse
   */
  async listMetaCollections(request: $_model.ListMetaCollectionsRequest): Promise<$_model.ListMetaCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMetaCollectionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of network resources of a serverless resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListNetworksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetworksResponse
   */
  async listNetworksWithOptions(request: $_model.ListNetworksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetworksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetworks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetworksResponse>(await this.callApi(params, req, runtime), new $_model.ListNetworksResponse({}));
  }

  /**
   * Queries a list of network resources of a serverless resource group.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListNetworksRequest
   * @returns ListNetworksResponse
   */
  async listNetworks(request: $_model.ListNetworksRequest): Promise<$_model.ListNetworksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetworksWithOptions(request, runtime);
  }

  /**
   * Queries a list of descendant nodes of a node in DataStudio.
   * 
   * @param request - ListNodeDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependenciesWithOptions(request: $_model.ListNodeDependenciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeDependenciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeDependencies",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeDependenciesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeDependenciesResponse({}));
  }

  /**
   * Queries a list of descendant nodes of a node in DataStudio.
   * 
   * @param request - ListNodeDependenciesRequest
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependencies(request: $_model.ListNodeDependenciesRequest): Promise<$_model.ListNodeDependenciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeDependenciesWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes in DataStudio. You can also specify filter conditions to query specific nodes.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * Queries a list of nodes in DataStudio. You can also specify filter conditions to query specific nodes.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 查询数据表的分区列表
   * 
   * @param request - ListPartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPartitionsResponse
   */
  async listPartitionsWithOptions(request: $_model.ListPartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPartitionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPartitions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPartitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPartitionsResponse({}));
  }

  /**
   * 查询数据表的分区列表
   * 
   * @param request - ListPartitionsRequest
   * @returns ListPartitionsResponse
   */
  async listPartitions(request: $_model.ListPartitionsRequest): Promise<$_model.ListPartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPartitionsWithOptions(request, runtime);
  }

  /**
   * 通过发布流程的ID获取发布内容
   * 
   * @param request - ListPipelineRunItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineRunItemsResponse
   */
  async listPipelineRunItemsWithOptions(request: $_model.ListPipelineRunItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineRunItemsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineRunItems",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineRunItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineRunItemsResponse({}));
  }

  /**
   * 通过发布流程的ID获取发布内容
   * 
   * @param request - ListPipelineRunItemsRequest
   * @returns ListPipelineRunItemsResponse
   */
  async listPipelineRunItems(request: $_model.ListPipelineRunItemsRequest): Promise<$_model.ListPipelineRunItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPipelineRunItemsWithOptions(request, runtime);
  }

  /**
   * Queries a list of processes that are used to deploy or undeploy entities in DataStudio. You can also specify filter conditions to query specific processes.
   * 
   * @param request - ListPipelineRunsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRunsWithOptions(request: $_model.ListPipelineRunsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineRunsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineRuns",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineRunsResponse({}));
  }

  /**
   * Queries a list of processes that are used to deploy or undeploy entities in DataStudio. You can also specify filter conditions to query specific processes.
   * 
   * @param request - ListPipelineRunsRequest
   * @returns ListPipelineRunsResponse
   */
  async listPipelineRuns(request: $_model.ListPipelineRunsRequest): Promise<$_model.ListPipelineRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPipelineRunsWithOptions(request, runtime);
  }

  /**
   * Queries details about members in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListProjectMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectMembersResponse
   */
  async listProjectMembersWithOptions(tmpReq: $_model.ListProjectMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectMembersResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectMembersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    if (!$dara.isNull(tmpReq.userIds)) {
      request.userIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userIds, "UserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.userIdsShrink)) {
      body["UserIds"] = request.userIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectMembers",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectMembersResponse({}));
  }

  /**
   * Queries details about members in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListProjectMembersRequest
   * @returns ListProjectMembersResponse
   */
  async listProjectMembers(request: $_model.ListProjectMembersRequest): Promise<$_model.ListProjectMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  /**
   * Queries the information about roles in a DataWorks workspace by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectRolesResponse
   */
  async listProjectRolesWithOptions(tmpReq: $_model.ListProjectRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectRolesResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    if (!$dara.isNull(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codesShrink)) {
      body["Codes"] = request.codesShrink;
    }

    if (!$dara.isNull(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectRolesResponse({}));
  }

  /**
   * Queries the information about roles in a DataWorks workspace by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListProjectRolesRequest
   * @returns ListProjectRolesResponse
   */
  async listProjectRoles(request: $_model.ListProjectRolesRequest): Promise<$_model.ListProjectRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  /**
   * Queries a list of DataWorks workspaces of the tenant to which your account belongs.
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!$dara.isNull(tmpReq.names)) {
      request.namesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.names, "Names", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!$dara.isNull(request.aliyunResourceTagsShrink)) {
      body["AliyunResourceTags"] = request.aliyunResourceTagsShrink;
    }

    if (!$dara.isNull(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!$dara.isNull(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.namesShrink)) {
      body["Names"] = request.namesShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * Queries a list of DataWorks workspaces of the tenant to which your account belongs.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource groups.
   * 
   * @param tmpReq - ListResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(tmpReq: $_model.ListResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aliyunResourceTags)) {
      request.aliyunResourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aliyunResourceTags, "AliyunResourceTags", "json");
    }

    if (!$dara.isNull(tmpReq.resourceGroupTypes)) {
      request.resourceGroupTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceGroupTypes, "ResourceGroupTypes", "json");
    }

    if (!$dara.isNull(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsResponse({}));
  }

  /**
   * Queries a list of resource groups.
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of file resources in DataStudio. You can also specify filter conditions to query specific file resources.
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * Queries a list of file resources in DataStudio. You can also specify filter conditions to query specific file resources.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of routes of a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoutesResponse
   */
  async listRoutesWithOptions(request: $_model.ListRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoutesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoutes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListRoutesResponse({}));
  }

  /**
   * Queries a list of routes of a network resource.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListRoutesRequest
   * @returns ListRoutesResponse
   */
  async listRoutes(request: $_model.ListRoutesRequest): Promise<$_model.ListRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRoutesWithOptions(request, runtime);
  }

  /**
   * Queries a list of schemas in a database or a MaxCompute project in Data Map. Only schemas of the MaxCompute and Hologres metadata crawler types are supported.
   * 
   * @param tmpReq - ListSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemasResponse
   */
  async listSchemasWithOptions(tmpReq: $_model.ListSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemasResponse> {
    tmpReq.validate();
    let request = new $_model.ListSchemasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemas",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemasResponse({}));
  }

  /**
   * Queries a list of schemas in a database or a MaxCompute project in Data Map. Only schemas of the MaxCompute and Hologres metadata crawler types are supported.
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(request: $_model.ListSchemasRequest): Promise<$_model.ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSchemasWithOptions(request, runtime);
  }

  /**
   * 查询数据表列表
   * 
   * @param tmpReq - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(tmpReq: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTablesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableTypes)) {
      request.tableTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableTypes, "TableTypes", "simple");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * 查询数据表列表
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Queries a list of operation logs of an instance by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * You can call this operation to query only the operation logs generated within the previous 31 days.
   * 
   * @param request - ListTaskInstanceOperationLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskInstanceOperationLogsResponse
   */
  async listTaskInstanceOperationLogsWithOptions(request: $_model.ListTaskInstanceOperationLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskInstanceOperationLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskInstanceOperationLogs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskInstanceOperationLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskInstanceOperationLogsResponse({}));
  }

  /**
   * Queries a list of operation logs of an instance by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * You can call this operation to query only the operation logs generated within the previous 31 days.
   * 
   * @param request - ListTaskInstanceOperationLogsRequest
   * @returns ListTaskInstanceOperationLogsResponse
   */
  async listTaskInstanceOperationLogs(request: $_model.ListTaskInstanceOperationLogsRequest): Promise<$_model.ListTaskInstanceOperationLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskInstanceOperationLogsWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances. You can also specify filter conditions to query specific instances.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstancesWithOptions(tmpReq: $_model.ListTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.runtimeResource)) {
      body["RuntimeResource"] = request.runtimeResource;
    }

    if (!$dara.isNull(request.sortBy)) {
      body["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskIdsShrink)) {
      body["TaskIds"] = request.taskIdsShrink;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.triggerRecurrence)) {
      body["TriggerRecurrence"] = request.triggerRecurrence;
    }

    if (!$dara.isNull(request.triggerType)) {
      body["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      body["WorkflowInstanceId"] = request.workflowInstanceId;
    }

    if (!$dara.isNull(request.workflowInstanceType)) {
      body["WorkflowInstanceType"] = request.workflowInstanceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskInstancesResponse({}));
  }

  /**
   * Queries a list of instances. You can also specify filter conditions to query specific instances.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListTaskInstancesRequest
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstances(request: $_model.ListTaskInstancesRequest): Promise<$_model.ListTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of operation logs of a task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * You can call this operation to query only the operation logs generated within the previous 31 days.
   * 
   * @param request - ListTaskOperationLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskOperationLogsResponse
   */
  async listTaskOperationLogsWithOptions(request: $_model.ListTaskOperationLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskOperationLogsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskOperationLogs",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskOperationLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskOperationLogsResponse({}));
  }

  /**
   * Queries a list of operation logs of a task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * You can call this operation to query only the operation logs generated within the previous 31 days.
   * 
   * @param request - ListTaskOperationLogsRequest
   * @returns ListTaskOperationLogsResponse
   */
  async listTaskOperationLogs(request: $_model.ListTaskOperationLogsRequest): Promise<$_model.ListTaskOperationLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskOperationLogsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tasks by page. You can also specify filter conditions to query tasks.
   * 
   * @param tmpReq - ListTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: $_model.ListTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.runtimeResource)) {
      body["RuntimeResource"] = request.runtimeResource;
    }

    if (!$dara.isNull(request.sortBy)) {
      body["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.triggerRecurrence)) {
      body["TriggerRecurrence"] = request.triggerRecurrence;
    }

    if (!$dara.isNull(request.triggerType)) {
      body["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * Queries a list of tasks by page. You can also specify filter conditions to query tasks.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of ancestor instances of an instance by page.
   * 
   * @param request - ListUpstreamTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpstreamTaskInstancesResponse
   */
  async listUpstreamTaskInstancesWithOptions(request: $_model.ListUpstreamTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUpstreamTaskInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpstreamTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUpstreamTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListUpstreamTaskInstancesResponse({}));
  }

  /**
   * Queries a list of ancestor instances of an instance by page.
   * 
   * @param request - ListUpstreamTaskInstancesRequest
   * @returns ListUpstreamTaskInstancesResponse
   */
  async listUpstreamTaskInstances(request: $_model.ListUpstreamTaskInstancesRequest): Promise<$_model.ListUpstreamTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUpstreamTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of ancestor tasks of a task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListUpstreamTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpstreamTasksResponse
   */
  async listUpstreamTasksWithOptions(request: $_model.ListUpstreamTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUpstreamTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpstreamTasks",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUpstreamTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListUpstreamTasksResponse({}));
  }

  /**
   * Queries a list of ancestor tasks of a task by page.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListUpstreamTasksRequest
   * @returns ListUpstreamTasksResponse
   */
  async listUpstreamTasks(request: $_model.ListUpstreamTasksRequest): Promise<$_model.ListUpstreamTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUpstreamTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of workflows in DataStudio. You can also specify filter conditions to query specific workflows.
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitionsWithOptions(request: $_model.ListWorkflowDefinitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowDefinitionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowDefinitions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowDefinitionsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowDefinitionsResponse({}));
  }

  /**
   * Queries a list of workflows in DataStudio. You can also specify filter conditions to query specific workflows.
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitions(request: $_model.ListWorkflowDefinitionsRequest): Promise<$_model.ListWorkflowDefinitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowDefinitionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of workflow instances by page. You can also specify filter conditions to query workflow instances.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListWorkflowInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstancesWithOptions(tmpReq: $_model.ListWorkflowInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkflowInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      body["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowInstancesResponse({}));
  }

  /**
   * Queries a list of workflow instances by page. You can also specify filter conditions to query workflow instances.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListWorkflowInstancesRequest
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstances(request: $_model.ListWorkflowInstancesRequest): Promise<$_model.ListWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of workflows by page. You can also specify filter conditions to query workflows.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ListWorkflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowsResponse
   */
  async listWorkflowsWithOptions(tmpReq: $_model.ListWorkflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowsResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkflowsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sortBy)) {
      body["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.triggerType)) {
      body["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflows",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowsResponse({}));
  }

  /**
   * Queries a list of workflows by page. You can also specify filter conditions to query workflows.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ListWorkflowsRequest
   * @returns ListWorkflowsResponse
   */
  async listWorkflows(request: $_model.ListWorkflowsRequest): Promise<$_model.ListWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWorkflowsWithOptions(request, runtime);
  }

  /**
   * Moves a user-defined function (UDF) to a path in DataStudio.
   * 
   * @param request - MoveFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFunctionResponse
   */
  async moveFunctionWithOptions(request: $_model.MoveFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveFunctionResponse>(await this.callApi(params, req, runtime), new $_model.MoveFunctionResponse({}));
  }

  /**
   * Moves a user-defined function (UDF) to a path in DataStudio.
   * 
   * @param request - MoveFunctionRequest
   * @returns MoveFunctionResponse
   */
  async moveFunction(request: $_model.MoveFunctionRequest): Promise<$_model.MoveFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveFunctionWithOptions(request, runtime);
  }

  /**
   * Moves a node to a path in DataStudio.
   * 
   * @param request - MoveNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveNodeResponse
   */
  async moveNodeWithOptions(request: $_model.MoveNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveNodeResponse>(await this.callApi(params, req, runtime), new $_model.MoveNodeResponse({}));
  }

  /**
   * Moves a node to a path in DataStudio.
   * 
   * @param request - MoveNodeRequest
   * @returns MoveNodeResponse
   */
  async moveNode(request: $_model.MoveNodeRequest): Promise<$_model.MoveNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveNodeWithOptions(request, runtime);
  }

  /**
   * Moves a file resource to a path in DataStudio.
   * 
   * @param request - MoveResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceResponse
   */
  async moveResourceWithOptions(request: $_model.MoveResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceResponse({}));
  }

  /**
   * Moves a file resource to a path in DataStudio.
   * 
   * @param request - MoveResourceRequest
   * @returns MoveResourceResponse
   */
  async moveResource(request: $_model.MoveResourceRequest): Promise<$_model.MoveResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveResourceWithOptions(request, runtime);
  }

  /**
   * Moves a workflow to a path in DataStudio.
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinitionWithOptions(request: $_model.MoveWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MoveWorkflowDefinitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.MoveWorkflowDefinitionResponse({}));
  }

  /**
   * Moves a workflow to a path in DataStudio.
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinition(request: $_model.MoveWorkflowDefinitionRequest): Promise<$_model.MoveWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.moveWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 从集合中移除实体对象
   * 
   * @param request - RemoveEntityFromMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveEntityFromMetaCollectionResponse
   */
  async removeEntityFromMetaCollectionWithOptions(request: $_model.RemoveEntityFromMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveEntityFromMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.metaCollectionId)) {
      query["MetaCollectionId"] = request.metaCollectionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveEntityFromMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveEntityFromMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.RemoveEntityFromMetaCollectionResponse({}));
  }

  /**
   * 从集合中移除实体对象
   * 
   * @param request - RemoveEntityFromMetaCollectionRequest
   * @returns RemoveEntityFromMetaCollectionResponse
   */
  async removeEntityFromMetaCollection(request: $_model.RemoveEntityFromMetaCollectionRequest): Promise<$_model.RemoveEntityFromMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeEntityFromMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Removes multiple upstream dependencies of an instance at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - RemoveTaskInstanceDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveTaskInstanceDependenciesResponse
   */
  async removeTaskInstanceDependenciesWithOptions(tmpReq: $_model.RemoveTaskInstanceDependenciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveTaskInstanceDependenciesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveTaskInstanceDependenciesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.upstreamTaskInstanceIds)) {
      request.upstreamTaskInstanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.upstreamTaskInstanceIds, "UpstreamTaskInstanceIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.upstreamTaskInstanceIdsShrink)) {
      body["UpstreamTaskInstanceIds"] = request.upstreamTaskInstanceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveTaskInstanceDependencies",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveTaskInstanceDependenciesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveTaskInstanceDependenciesResponse({}));
  }

  /**
   * Removes multiple upstream dependencies of an instance at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - RemoveTaskInstanceDependenciesRequest
   * @returns RemoveTaskInstanceDependenciesResponse
   */
  async removeTaskInstanceDependencies(request: $_model.RemoveTaskInstanceDependenciesRequest): Promise<$_model.RemoveTaskInstanceDependenciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeTaskInstanceDependenciesWithOptions(request, runtime);
  }

  /**
   * Renames a user-defined function (UDF) in DataStudio.
   * 
   * @param request - RenameFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFunctionResponse
   */
  async renameFunctionWithOptions(request: $_model.RenameFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameFunctionResponse>(await this.callApi(params, req, runtime), new $_model.RenameFunctionResponse({}));
  }

  /**
   * Renames a user-defined function (UDF) in DataStudio.
   * 
   * @param request - RenameFunctionRequest
   * @returns RenameFunctionResponse
   */
  async renameFunction(request: $_model.RenameFunctionRequest): Promise<$_model.RenameFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renameFunctionWithOptions(request, runtime);
  }

  /**
   * Renames a node in DataStudio.
   * 
   * @param request - RenameNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameNodeResponse
   */
  async renameNodeWithOptions(request: $_model.RenameNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameNodeResponse>(await this.callApi(params, req, runtime), new $_model.RenameNodeResponse({}));
  }

  /**
   * Renames a node in DataStudio.
   * 
   * @param request - RenameNodeRequest
   * @returns RenameNodeResponse
   */
  async renameNode(request: $_model.RenameNodeRequest): Promise<$_model.RenameNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renameNodeWithOptions(request, runtime);
  }

  /**
   * Renames a file resource in DataStudio.
   * 
   * @param request - RenameResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameResourceResponse
   */
  async renameResourceWithOptions(request: $_model.RenameResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameResourceResponse>(await this.callApi(params, req, runtime), new $_model.RenameResourceResponse({}));
  }

  /**
   * Renames a file resource in DataStudio.
   * 
   * @param request - RenameResourceRequest
   * @returns RenameResourceResponse
   */
  async renameResource(request: $_model.RenameResourceRequest): Promise<$_model.RenameResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renameResourceWithOptions(request, runtime);
  }

  /**
   * Renames a workflow in DataStudio.
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinitionWithOptions(request: $_model.RenameWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RenameWorkflowDefinitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.RenameWorkflowDefinitionResponse({}));
  }

  /**
   * Renames a workflow in DataStudio.
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinition(request: $_model.RenameWorkflowDefinitionRequest): Promise<$_model.RenameWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.renameWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * Reruns multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - RerunTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerunTaskInstancesResponse
   */
  async rerunTaskInstancesWithOptions(tmpReq: $_model.RerunTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RerunTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RerunTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RerunTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RerunTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RerunTaskInstancesResponse({}));
  }

  /**
   * Reruns multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - RerunTaskInstancesRequest
   * @returns RerunTaskInstancesResponse
   */
  async rerunTaskInstances(request: $_model.RerunTaskInstancesRequest): Promise<$_model.RerunTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rerunTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Reruns workflow instances.
   * 
   * @param tmpReq - RerunWorkflowInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RerunWorkflowInstancesResponse
   */
  async rerunWorkflowInstancesWithOptions(tmpReq: $_model.RerunWorkflowInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RerunWorkflowInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.RerunWorkflowInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.endTriggerTime)) {
      body["EndTriggerTime"] = request.endTriggerTime;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.startTriggerTime)) {
      body["StartTriggerTime"] = request.startTriggerTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    if (!$dara.isNull(request.workflowId)) {
      body["WorkflowId"] = request.workflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RerunWorkflowInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RerunWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RerunWorkflowInstancesResponse({}));
  }

  /**
   * Reruns workflow instances.
   * 
   * @param request - RerunWorkflowInstancesRequest
   * @returns RerunWorkflowInstancesResponse
   */
  async rerunWorkflowInstances(request: $_model.RerunWorkflowInstancesRequest): Promise<$_model.RerunWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rerunWorkflowInstancesWithOptions(request, runtime);
  }

  /**
   * Resumes multiple suspended instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - ResumeTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskInstancesResponse
   */
  async resumeTaskInstancesWithOptions(tmpReq: $_model.ResumeTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ResumeTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTaskInstancesResponse({}));
  }

  /**
   * Resumes multiple suspended instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - ResumeTaskInstancesRequest
   * @returns ResumeTaskInstancesResponse
   */
  async resumeTaskInstances(request: $_model.ResumeTaskInstancesRequest): Promise<$_model.ResumeTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Revokes roles that are assigned to a member in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - RevokeMemberProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeMemberProjectRolesResponse
   */
  async revokeMemberProjectRolesWithOptions(tmpReq: $_model.RevokeMemberProjectRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeMemberProjectRolesResponse> {
    tmpReq.validate();
    let request = new $_model.RevokeMemberProjectRolesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.roleCodes)) {
      request.roleCodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.roleCodes, "RoleCodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCodesShrink)) {
      body["RoleCodes"] = request.roleCodesShrink;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeMemberProjectRoles",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeMemberProjectRolesResponse>(await this.callApi(params, req, runtime), new $_model.RevokeMemberProjectRolesResponse({}));
  }

  /**
   * Revokes roles that are assigned to a member in a workspace.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - RevokeMemberProjectRolesRequest
   * @returns RevokeMemberProjectRolesResponse
   */
  async revokeMemberProjectRoles(request: $_model.RevokeMemberProjectRolesRequest): Promise<$_model.RevokeMemberProjectRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeMemberProjectRolesWithOptions(request, runtime);
  }

  /**
   * Sets the statuses of multiple instances to successful at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - SetSuccessTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSuccessTaskInstancesResponse
   */
  async setSuccessTaskInstancesWithOptions(tmpReq: $_model.SetSuccessTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSuccessTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.SetSuccessTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSuccessTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSuccessTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.SetSuccessTaskInstancesResponse({}));
  }

  /**
   * Sets the statuses of multiple instances to successful at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - SetSuccessTaskInstancesRequest
   * @returns SetSuccessTaskInstancesResponse
   */
  async setSuccessTaskInstances(request: $_model.SetSuccessTaskInstancesRequest): Promise<$_model.SetSuccessTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSuccessTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Starts a new-version synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - StartDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDIJobResponse
   */
  async startDIJobWithOptions(tmpReq: $_model.StartDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.StartDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.realtimeStartSettings)) {
      request.realtimeStartSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.realtimeStartSettings, "RealtimeStartSettings", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDIJobResponse>(await this.callApi(params, req, runtime), new $_model.StartDIJobResponse({}));
  }

  /**
   * Starts a new-version synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StartDIJobRequest
   * @returns StartDIJobResponse
   */
  async startDIJob(request: $_model.StartDIJobRequest): Promise<$_model.StartDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDIJobWithOptions(request, runtime);
  }

  /**
   * Starts multiple workflow instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - StartWorkflowInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWorkflowInstancesResponse
   */
  async startWorkflowInstancesWithOptions(tmpReq: $_model.StartWorkflowInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartWorkflowInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StartWorkflowInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartWorkflowInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StartWorkflowInstancesResponse({}));
  }

  /**
   * Starts multiple workflow instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StartWorkflowInstancesRequest
   * @returns StartWorkflowInstancesResponse
   */
  async startWorkflowInstances(request: $_model.StartWorkflowInstancesRequest): Promise<$_model.StartWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startWorkflowInstancesWithOptions(request, runtime);
  }

  /**
   * Stops a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StopDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDIJobResponse
   */
  async stopDIJobWithOptions(request: $_model.StopDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDIJobResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDIJobResponse>(await this.callApi(params, req, runtime), new $_model.StopDIJobResponse({}));
  }

  /**
   * Stops a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StopDIJobRequest
   * @returns StopDIJobResponse
   */
  async stopDIJob(request: $_model.StopDIJobRequest): Promise<$_model.StopDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDIJobWithOptions(request, runtime);
  }

  /**
   * Stops multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - StopTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskInstancesResponse
   */
  async stopTaskInstancesWithOptions(tmpReq: $_model.StopTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StopTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopTaskInstancesResponse({}));
  }

  /**
   * Stops multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StopTaskInstancesRequest
   * @returns StopTaskInstancesResponse
   */
  async stopTaskInstances(request: $_model.StopTaskInstancesRequest): Promise<$_model.StopTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Stops multiple workflow instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - StopWorkflowInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopWorkflowInstancesResponse
   */
  async stopWorkflowInstancesWithOptions(tmpReq: $_model.StopWorkflowInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopWorkflowInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.StopWorkflowInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopWorkflowInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopWorkflowInstancesResponse({}));
  }

  /**
   * Stops multiple workflow instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - StopWorkflowInstancesRequest
   * @returns StopWorkflowInstancesResponse
   */
  async stopWorkflowInstances(request: $_model.StopWorkflowInstancesRequest): Promise<$_model.StopWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopWorkflowInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitFileResponse
   */
  async submitFileWithOptions(request: $_model.SubmitFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.skipAllDeployFileExtensions)) {
      body["SkipAllDeployFileExtensions"] = request.skipAllDeployFileExtensions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitFileResponse>(await this.callApi(params, req, runtime), new $_model.SubmitFileResponse({}));
  }

  /**
   * @param request - SubmitFileRequest
   * @returns SubmitFileResponse
   */
  async submitFile(request: $_model.SubmitFileRequest): Promise<$_model.SubmitFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitFileWithOptions(request, runtime);
  }

  /**
   * Suspends multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - SuspendTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendTaskInstancesResponse
   */
  async suspendTaskInstancesWithOptions(tmpReq: $_model.SuspendTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.SuspendTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.idsShrink)) {
      body["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.SuspendTaskInstancesResponse({}));
  }

  /**
   * Suspends multiple instances at a time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - SuspendTaskInstancesRequest
   * @returns SuspendTaskInstancesResponse
   */
  async suspendTaskInstances(request: $_model.SuspendTaskInstancesRequest): Promise<$_model.SuspendTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendTaskInstancesWithOptions(request, runtime);
  }

  /**
   * Adds tags to data assets.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - TagDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagDataAssetsResponse
   */
  async tagDataAssetsWithOptions(tmpReq: $_model.TagDataAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagDataAssetsResponse> {
    tmpReq.validate();
    let request = new $_model.TagDataAssetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataAssetIds)) {
      request.dataAssetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataAssetIds, "DataAssetIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoTraceEnabled)) {
      query["AutoTraceEnabled"] = request.autoTraceEnabled;
    }

    if (!$dara.isNull(request.dataAssetIdsShrink)) {
      query["DataAssetIds"] = request.dataAssetIdsShrink;
    }

    if (!$dara.isNull(request.dataAssetType)) {
      query["DataAssetType"] = request.dataAssetType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagDataAssets",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagDataAssetsResponse>(await this.callApi(params, req, runtime), new $_model.TagDataAssetsResponse({}));
  }

  /**
   * Adds tags to data assets.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - TagDataAssetsRequest
   * @returns TagDataAssetsResponse
   */
  async tagDataAssets(request: $_model.TagDataAssetsRequest): Promise<$_model.TagDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagDataAssetsWithOptions(request, runtime);
  }

  /**
   * Tests the connectivity between a data source and a resource group.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  Your account must be assigned one of the following roles of the desired workspace: Tenant Owner, Workspace Administrator, Deploy, Develop, Workspace Owner, and O\\&M
   * 
   * @param request - TestDataSourceConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestDataSourceConnectivityResponse
   */
  async testDataSourceConnectivityWithOptions(request: $_model.TestDataSourceConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestDataSourceConnectivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestDataSourceConnectivity",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestDataSourceConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.TestDataSourceConnectivityResponse({}));
  }

  /**
   * Tests the connectivity between a data source and a resource group.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  Your account must be assigned one of the following roles of the desired workspace: Tenant Owner, Workspace Administrator, Deploy, Develop, Workspace Owner, and O\\&M
   * 
   * @param request - TestDataSourceConnectivityRequest
   * @returns TestDataSourceConnectivityResponse
   */
  async testDataSourceConnectivity(request: $_model.TestDataSourceConnectivityRequest): Promise<$_model.TestDataSourceConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testDataSourceConnectivityWithOptions(request, runtime);
  }

  /**
   * Triggers a task to run by using an HTTP Trigger node at a specified time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - TriggerSchedulerTaskInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerSchedulerTaskInstanceResponse
   */
  async triggerSchedulerTaskInstanceWithOptions(request: $_model.TriggerSchedulerTaskInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerSchedulerTaskInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.triggerTime)) {
      body["TriggerTime"] = request.triggerTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerSchedulerTaskInstance",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerSchedulerTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TriggerSchedulerTaskInstanceResponse({}));
  }

  /**
   * Triggers a task to run by using an HTTP Trigger node at a specified time.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - TriggerSchedulerTaskInstanceRequest
   * @returns TriggerSchedulerTaskInstanceResponse
   */
  async triggerSchedulerTaskInstance(request: $_model.TriggerSchedulerTaskInstanceRequest): Promise<$_model.TriggerSchedulerTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerSchedulerTaskInstanceWithOptions(request, runtime);
  }

  /**
   * Removes tags from data assets.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - UnTagDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnTagDataAssetsResponse
   */
  async unTagDataAssetsWithOptions(tmpReq: $_model.UnTagDataAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnTagDataAssetsResponse> {
    tmpReq.validate();
    let request = new $_model.UnTagDataAssetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataAssetIds)) {
      request.dataAssetIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataAssetIds, "DataAssetIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.dataAssetIdsShrink)) {
      query["DataAssetIds"] = request.dataAssetIdsShrink;
    }

    if (!$dara.isNull(request.dataAssetType)) {
      query["DataAssetType"] = request.dataAssetType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnTagDataAssets",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnTagDataAssetsResponse>(await this.callApi(params, req, runtime), new $_model.UnTagDataAssetsResponse({}));
  }

  /**
   * Removes tags from data assets.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - UnTagDataAssetsRequest
   * @returns UnTagDataAssetsResponse
   */
  async unTagDataAssets(request: $_model.UnTagDataAssetsRequest): Promise<$_model.UnTagDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unTagDataAssetsWithOptions(request, runtime);
  }

  /**
   * Updates the information about a custom alert monitoring rule.
   * 
   * @param tmpReq - UpdateAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRuleWithOptions(tmpReq: $_model.UpdateAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAlertRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!$dara.isNull(tmpReq.triggerCondition)) {
      request.triggerConditionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerCondition, "TriggerCondition", "json");
    }

    let query = { };
    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.triggerConditionShrink)) {
      query["TriggerCondition"] = request.triggerConditionShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertRuleResponse({}));
  }

  /**
   * Updates the information about a custom alert monitoring rule.
   * 
   * @param request - UpdateAlertRuleRequest
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRule(request: $_model.UpdateAlertRuleRequest): Promise<$_model.UpdateAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  /**
   * Updates a workflow.
   * 
   * @param request - UpdateBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBusinessResponse
   */
  async updateBusinessWithOptions(request: $_model.UpdateBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBusiness",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBusinessResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBusinessResponse({}));
  }

  /**
   * Updates a workflow.
   * 
   * @param request - UpdateBusinessRequest
   * @returns UpdateBusinessResponse
   */
  async updateBusiness(request: $_model.UpdateBusinessRequest): Promise<$_model.UpdateBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBusinessWithOptions(request, runtime);
  }

  /**
   * 更新字段业务元数据
   * 
   * @param request - UpdateColumnBusinessMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateColumnBusinessMetadataResponse
   */
  async updateColumnBusinessMetadataWithOptions(request: $_model.UpdateColumnBusinessMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateColumnBusinessMetadataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateColumnBusinessMetadata",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateColumnBusinessMetadataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateColumnBusinessMetadataResponse({}));
  }

  /**
   * 更新字段业务元数据
   * 
   * @param request - UpdateColumnBusinessMetadataRequest
   * @returns UpdateColumnBusinessMetadataResponse
   */
  async updateColumnBusinessMetadata(request: $_model.UpdateColumnBusinessMetadataRequest): Promise<$_model.UpdateColumnBusinessMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateColumnBusinessMetadataWithOptions(request, runtime);
  }

  /**
   * Updates an alert rule configured for a synchronization task.
   * 
   * @param tmpReq - UpdateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRuleWithOptions(tmpReq: $_model.UpdateDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDIAlarmRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDIAlarmRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDIAlarmRuleResponse({}));
  }

  /**
   * Updates an alert rule configured for a synchronization task.
   * 
   * @param request - UpdateDIAlarmRuleRequest
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRule(request: $_model.UpdateDIAlarmRuleRequest): Promise<$_model.UpdateDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Updates a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - UpdateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIJobResponse
   */
  async updateDIJobWithOptions(tmpReq: $_model.UpdateDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!$dara.isNull(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDIJob",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDIJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDIJobResponse({}));
  }

  /**
   * Updates a synchronization task.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - UpdateDIJobRequest
   * @returns UpdateDIJobResponse
   */
  async updateDIJob(request: $_model.UpdateDIJobRequest): Promise<$_model.UpdateDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDIJobWithOptions(request, runtime);
  }

  /**
   * Updates a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param tmpReq - UpdateDataAssetTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataAssetTagResponse
   */
  async updateDataAssetTagWithOptions(tmpReq: $_model.UpdateDataAssetTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataAssetTagResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataAssetTagShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.managers)) {
      request.managersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.managers, "Managers", "json");
    }

    if (!$dara.isNull(tmpReq.values)) {
      request.valuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.values, "Values", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.managersShrink)) {
      query["Managers"] = request.managersShrink;
    }

    if (!$dara.isNull(request.valuesShrink)) {
      query["Values"] = request.valuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataAssetTag",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataAssetTagResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataAssetTagResponse({}));
  }

  /**
   * Updates a tag.
   * 
   * @remarks
   * This API operation is available only for DataWorks Enterprise Edition or a more advanced edition.
   * 
   * @param request - UpdateDataAssetTagRequest
   * @returns UpdateDataAssetTagResponse
   */
  async updateDataAssetTag(request: $_model.UpdateDataAssetTagRequest): Promise<$_model.UpdateDataAssetTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataAssetTagWithOptions(request, runtime);
  }

  /**
   * Updates a monitor.
   * 
   * @remarks
   * This API operation is supported in all DataWorks editions.
   * 
   * @param tmpReq - UpdateDataQualityEvaluationTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataQualityEvaluationTaskResponse
   */
  async updateDataQualityEvaluationTaskWithOptions(tmpReq: $_model.UpdateDataQualityEvaluationTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataQualityEvaluationTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataQualityEvaluationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataQualityRules)) {
      request.dataQualityRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataQualityRules, "DataQualityRules", "json");
    }

    if (!$dara.isNull(tmpReq.hooks)) {
      request.hooksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hooks, "Hooks", "json");
    }

    if (!$dara.isNull(tmpReq.notifications)) {
      request.notificationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notifications, "Notifications", "json");
    }

    if (!$dara.isNull(tmpReq.target)) {
      request.targetShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.target, "Target", "json");
    }

    if (!$dara.isNull(tmpReq.trigger)) {
      request.triggerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trigger, "Trigger", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataQualityRulesShrink)) {
      body["DataQualityRules"] = request.dataQualityRulesShrink;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.hooksShrink)) {
      body["Hooks"] = request.hooksShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.notificationsShrink)) {
      body["Notifications"] = request.notificationsShrink;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.runtimeConf)) {
      body["RuntimeConf"] = request.runtimeConf;
    }

    if (!$dara.isNull(request.targetShrink)) {
      body["Target"] = request.targetShrink;
    }

    if (!$dara.isNull(request.triggerShrink)) {
      body["Trigger"] = request.triggerShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataQualityEvaluationTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataQualityEvaluationTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataQualityEvaluationTaskResponse({}));
  }

  /**
   * Updates a monitor.
   * 
   * @remarks
   * This API operation is supported in all DataWorks editions.
   * 
   * @param request - UpdateDataQualityEvaluationTaskRequest
   * @returns UpdateDataQualityEvaluationTaskResponse
   */
  async updateDataQualityEvaluationTask(request: $_model.UpdateDataQualityEvaluationTaskRequest): Promise<$_model.UpdateDataQualityEvaluationTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataQualityEvaluationTaskWithOptions(request, runtime);
  }

  /**
   * Updates a data quality monitoring rule.
   * 
   * @param tmpReq - UpdateDataQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataQualityRuleResponse
   */
  async updateDataQualityRuleWithOptions(tmpReq: $_model.UpdateDataQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataQualityRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataQualityRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkingConfig)) {
      request.checkingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkingConfig, "CheckingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.errorHandlers)) {
      request.errorHandlersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.errorHandlers, "ErrorHandlers", "json");
    }

    if (!$dara.isNull(tmpReq.samplingConfig)) {
      request.samplingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.samplingConfig, "SamplingConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkingConfigShrink)) {
      body["CheckingConfig"] = request.checkingConfigShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.errorHandlersShrink)) {
      body["ErrorHandlers"] = request.errorHandlersShrink;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.samplingConfigShrink)) {
      body["SamplingConfig"] = request.samplingConfigShrink;
    }

    if (!$dara.isNull(request.severity)) {
      body["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataQualityRule",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataQualityRuleResponse({}));
  }

  /**
   * Updates a data quality monitoring rule.
   * 
   * @param request - UpdateDataQualityRuleRequest
   * @returns UpdateDataQualityRuleResponse
   */
  async updateDataQualityRule(request: $_model.UpdateDataQualityRuleRequest): Promise<$_model.UpdateDataQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataQualityRuleWithOptions(request, runtime);
  }

  /**
   * Updates a data quality monitoring rule template.
   * 
   * @param tmpReq - UpdateDataQualityRuleTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataQualityRuleTemplateResponse
   */
  async updateDataQualityRuleTemplateWithOptions(tmpReq: $_model.UpdateDataQualityRuleTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataQualityRuleTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataQualityRuleTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.checkingConfig)) {
      request.checkingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.checkingConfig, "CheckingConfig", "json");
    }

    if (!$dara.isNull(tmpReq.samplingConfig)) {
      request.samplingConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.samplingConfig, "SamplingConfig", "json");
    }

    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkingConfigShrink)) {
      body["CheckingConfig"] = request.checkingConfigShrink;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.directoryPath)) {
      body["DirectoryPath"] = request.directoryPath;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.samplingConfigShrink)) {
      body["SamplingConfig"] = request.samplingConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataQualityRuleTemplate",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataQualityRuleTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataQualityRuleTemplateResponse({}));
  }

  /**
   * Updates a data quality monitoring rule template.
   * 
   * @param request - UpdateDataQualityRuleTemplateRequest
   * @returns UpdateDataQualityRuleTemplateResponse
   */
  async updateDataQualityRuleTemplate(request: $_model.UpdateDataQualityRuleTemplateRequest): Promise<$_model.UpdateDataQualityRuleTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataQualityRuleTemplateWithOptions(request, runtime);
  }

  /**
   * Modifies a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: $_model.UpdateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionProperties)) {
      query["ConnectionProperties"] = request.connectionProperties;
    }

    if (!$dara.isNull(request.connectionPropertiesMode)) {
      query["ConnectionPropertiesMode"] = request.connectionPropertiesMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceResponse({}));
  }

  /**
   * Modifies a data source by ID.
   * 
   * @remarks
   * 1.  This API operation is available for all DataWorks editions.
   * 2.  You can call this operation only if you are assigned one of the following roles in DataWorks:
   * *   Tenant Owner, Tenant Administrator, Workspace Administrator, Workspace Owner, and O\\&M
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: $_model.UpdateDataSourceRequest): Promise<$_model.UpdateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileResponse
   */
  async updateFileWithOptions(request: $_model.UpdateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!$dara.isNull(request.applyScheduleImmediately)) {
      body["ApplyScheduleImmediately"] = request.applyScheduleImmediately;
    }

    if (!$dara.isNull(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!$dara.isNull(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!$dara.isNull(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!$dara.isNull(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!$dara.isNull(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ignoreParentSkipRunningProperty)) {
      body["IgnoreParentSkipRunningProperty"] = request.ignoreParentSkipRunningProperty;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!$dara.isNull(request.inputParameters)) {
      body["InputParameters"] = request.inputParameters;
    }

    if (!$dara.isNull(request.outputList)) {
      body["OutputList"] = request.outputList;
    }

    if (!$dara.isNull(request.outputParameters)) {
      body["OutputParameters"] = request.outputParameters;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!$dara.isNull(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!$dara.isNull(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!$dara.isNull(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!$dara.isNull(request.stop)) {
      body["Stop"] = request.stop;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileResponse({}));
  }

  /**
   * @param request - UpdateFileRequest
   * @returns UpdateFileResponse
   */
  async updateFile(request: $_model.UpdateFileRequest): Promise<$_model.UpdateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(request: $_model.UpdateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.folderName)) {
      body["FolderName"] = request.folderName;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFolderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFolderResponse({}));
  }

  /**
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a user-defined function (UDF) in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(request: $_model.UpdateFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionResponse({}));
  }

  /**
   * Updates the basic information about a user-defined function (UDF) in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(request: $_model.UpdateFunctionRequest): Promise<$_model.UpdateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  /**
   * 回调扩展点消息的检查结果
   * 
   * @param request - UpdateIDEEventResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIDEEventResultResponse
   */
  async updateIDEEventResultWithOptions(request: $_model.UpdateIDEEventResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIDEEventResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkResult)) {
      body["CheckResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.checkResultTip)) {
      body["CheckResultTip"] = request.checkResultTip;
    }

    if (!$dara.isNull(request.extensionCode)) {
      body["ExtensionCode"] = request.extensionCode;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIDEEventResult",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIDEEventResultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIDEEventResultResponse({}));
  }

  /**
   * 回调扩展点消息的检查结果
   * 
   * @param request - UpdateIDEEventResultRequest
   * @returns UpdateIDEEventResultResponse
   */
  async updateIDEEventResult(request: $_model.UpdateIDEEventResultRequest): Promise<$_model.UpdateIDEEventResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIDEEventResultWithOptions(request, runtime);
  }

  /**
   * Updates the information about a collection in Data Map, including the collection name, description, and administrator. Collections include categories and data albums. If you want to update the information about a data album, the account that you use must be attached the AliyunDataWorksFullAccess policy, or you are the data album creator or administrator.
   * 
   * @param tmpReq - UpdateMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaCollectionResponse
   */
  async updateMetaCollectionWithOptions(tmpReq: $_model.UpdateMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaCollectionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMetaCollectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.administrators)) {
      request.administratorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.administrators, "Administrators", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.administratorsShrink)) {
      query["Administrators"] = request.administratorsShrink;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

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
      action: "UpdateMetaCollection",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaCollectionResponse({}));
  }

  /**
   * Updates the information about a collection in Data Map, including the collection name, description, and administrator. Collections include categories and data albums. If you want to update the information about a data album, the account that you use must be attached the AliyunDataWorksFullAccess policy, or you are the data album creator or administrator.
   * 
   * @param request - UpdateMetaCollectionRequest
   * @returns UpdateMetaCollectionResponse
   */
  async updateMetaCollection(request: $_model.UpdateMetaCollectionRequest): Promise<$_model.UpdateMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a node in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeResponse
   */
  async updateNodeWithOptions(request: $_model.UpdateNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodeResponse({}));
  }

  /**
   * Updates the basic information about a node in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateNodeRequest
   * @returns UpdateNodeResponse
   */
  async updateNode(request: $_model.UpdateNodeRequest): Promise<$_model.UpdateNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodeWithOptions(request, runtime);
  }

  /**
   * Updates a DataWorks workspace.
   * 
   * @param request - UpdateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(request: $_model.UpdateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.devEnvironmentEnabled)) {
      body["DevEnvironmentEnabled"] = request.devEnvironmentEnabled;
    }

    if (!$dara.isNull(request.devRoleDisabled)) {
      body["DevRoleDisabled"] = request.devRoleDisabled;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.paiTaskEnabled)) {
      body["PaiTaskEnabled"] = request.paiTaskEnabled;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * Updates a DataWorks workspace.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a file resource in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(request: $_model.UpdateResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceFile)) {
      body["ResourceFile"] = request.resourceFile;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceResponse({}));
  }

  /**
   * Updates the basic information about a file resource in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(request: $_model.UpdateResourceRequest): Promise<$_model.UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  async updateResourceAdvance(request: $_model.UpdateResourceAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
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
      product: "dataworks-public",
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
    let updateResourceReq = new $_model.UpdateResourceRequest({ });
    OpenApiUtil.convert(request, updateResourceReq);
    if (!$dara.isNull(request.resourceFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.resourceFileObject,
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
      updateResourceReq.resourceFile = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let updateResourceResp = await this.updateResourceWithOptions(updateResourceReq, runtime);
    return updateResourceResp;
  }

  /**
   * Updates basic information about a resource group.
   * 
   * @remarks
   * You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 
   * @param request - UpdateResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(request: $_model.UpdateResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliyunResourceGroupId)) {
      body["AliyunResourceGroupId"] = request.aliyunResourceGroupId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroup",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceGroupResponse({}));
  }

  /**
   * Updates basic information about a resource group.
   * 
   * @remarks
   * You can use this API operation only in DataWorks Basic Edition or an advanced edition.
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(request: $_model.UpdateResourceGroupRequest): Promise<$_model.UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupWithOptions(request, runtime);
  }

  /**
   * Updates the information about a route.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - UpdateRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRouteResponse
   */
  async updateRouteWithOptions(request: $_model.UpdateRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCidr)) {
      body["DestinationCidr"] = request.destinationCidr;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRoute",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRouteResponse({}));
  }

  /**
   * Updates the information about a route.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - UpdateRouteRequest
   * @returns UpdateRouteResponse
   */
  async updateRoute(request: $_model.UpdateRouteRequest): Promise<$_model.UpdateRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRouteWithOptions(request, runtime);
  }

  /**
   * Updates the business metadata of a table in Data Map. Currently, only the usage notes of a table can be updated.
   * 
   * @param request - UpdateTableBusinessMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableBusinessMetadataResponse
   */
  async updateTableBusinessMetadataWithOptions(request: $_model.UpdateTableBusinessMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableBusinessMetadataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.readme)) {
      body["Readme"] = request.readme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableBusinessMetadata",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableBusinessMetadataResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableBusinessMetadataResponse({}));
  }

  /**
   * Updates the business metadata of a table in Data Map. Currently, only the usage notes of a table can be updated.
   * 
   * @param request - UpdateTableBusinessMetadataRequest
   * @returns UpdateTableBusinessMetadataResponse
   */
  async updateTableBusinessMetadata(request: $_model.UpdateTableBusinessMetadataRequest): Promise<$_model.UpdateTableBusinessMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableBusinessMetadataWithOptions(request, runtime);
  }

  /**
   * Updates a specified task in full update mode.
   * 
   * @param tmpReq - UpdateTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskResponse
   */
  async updateTaskWithOptions(tmpReq: $_model.UpdateTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dataSource)) {
      request.dataSourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dataSource, "DataSource", "json");
    }

    if (!$dara.isNull(tmpReq.dependencies)) {
      request.dependenciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencies, "Dependencies", "json");
    }

    if (!$dara.isNull(tmpReq.inputs)) {
      request.inputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.inputs, "Inputs", "json");
    }

    if (!$dara.isNull(tmpReq.outputs)) {
      request.outputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputs, "Outputs", "json");
    }

    if (!$dara.isNull(tmpReq.runtimeResource)) {
      request.runtimeResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.runtimeResource, "RuntimeResource", "json");
    }

    if (!$dara.isNull(tmpReq.script)) {
      request.scriptShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.script, "Script", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.trigger)) {
      request.triggerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trigger, "Trigger", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientUniqueCode)) {
      body["ClientUniqueCode"] = request.clientUniqueCode;
    }

    if (!$dara.isNull(request.dataSourceShrink)) {
      body["DataSource"] = request.dataSourceShrink;
    }

    if (!$dara.isNull(request.dependenciesShrink)) {
      body["Dependencies"] = request.dependenciesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.inputsShrink)) {
      body["Inputs"] = request.inputsShrink;
    }

    if (!$dara.isNull(request.instanceMode)) {
      body["InstanceMode"] = request.instanceMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputsShrink)) {
      body["Outputs"] = request.outputsShrink;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.rerunInterval)) {
      body["RerunInterval"] = request.rerunInterval;
    }

    if (!$dara.isNull(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!$dara.isNull(request.rerunTimes)) {
      body["RerunTimes"] = request.rerunTimes;
    }

    if (!$dara.isNull(request.runtimeResourceShrink)) {
      body["RuntimeResource"] = request.runtimeResourceShrink;
    }

    if (!$dara.isNull(request.scriptShrink)) {
      body["Script"] = request.scriptShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.triggerShrink)) {
      body["Trigger"] = request.triggerShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTask",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskResponse({}));
  }

  /**
   * Updates a specified task in full update mode.
   * 
   * @param request - UpdateTaskRequest
   * @returns UpdateTaskResponse
   */
  async updateTask(request: $_model.UpdateTaskRequest): Promise<$_model.UpdateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskWithOptions(request, runtime);
  }

  /**
   * Modifies properties configured for multiple instances at a time. The properties include the priority, resource group for scheduling, and data source.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - UpdateTaskInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskInstancesResponse
   */
  async updateTaskInstancesWithOptions(tmpReq: $_model.UpdateTaskInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTaskInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskInstances)) {
      request.taskInstancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskInstances, "TaskInstances", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.taskInstancesShrink)) {
      body["TaskInstances"] = request.taskInstancesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskInstances",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskInstancesResponse({}));
  }

  /**
   * Modifies properties configured for multiple instances at a time. The properties include the priority, resource group for scheduling, and data source.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - UpdateTaskInstancesRequest
   * @returns UpdateTaskInstancesResponse
   */
  async updateTaskInstances(request: $_model.UpdateTaskInstancesRequest): Promise<$_model.UpdateTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTaskInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateUdfFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfFileResponse
   */
  async updateUdfFileWithOptions(request: $_model.UpdateUdfFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUdfFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!$dara.isNull(request.example)) {
      body["Example"] = request.example;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!$dara.isNull(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUdfFile",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUdfFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUdfFileResponse({}));
  }

  /**
   * @param request - UpdateUdfFileRequest
   * @returns UpdateUdfFileResponse
   */
  async updateUdfFile(request: $_model.UpdateUdfFileRequest): Promise<$_model.UpdateUdfFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUdfFileWithOptions(request, runtime);
  }

  /**
   * Updates a specified workflow in full update mode.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param tmpReq - UpdateWorkflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(tmpReq: $_model.UpdateWorkflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateWorkflowShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.dependencies)) {
      request.dependenciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dependencies, "Dependencies", "json");
    }

    if (!$dara.isNull(tmpReq.outputs)) {
      request.outputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.outputs, "Outputs", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!$dara.isNull(tmpReq.tasks)) {
      request.tasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tasks, "Tasks", "json");
    }

    if (!$dara.isNull(tmpReq.trigger)) {
      request.triggerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trigger, "Trigger", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientUniqueCode)) {
      body["ClientUniqueCode"] = request.clientUniqueCode;
    }

    if (!$dara.isNull(request.dependenciesShrink)) {
      body["Dependencies"] = request.dependenciesShrink;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.instanceMode)) {
      body["InstanceMode"] = request.instanceMode;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputsShrink)) {
      body["Outputs"] = request.outputsShrink;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.tasksShrink)) {
      body["Tasks"] = request.tasksShrink;
    }

    if (!$dara.isNull(request.triggerShrink)) {
      body["Trigger"] = request.triggerShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflow",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowResponse({}));
  }

  /**
   * Updates a specified workflow in full update mode.
   * 
   * @remarks
   * This API operation is available for all DataWorks editions.
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(request: $_model.UpdateWorkflowRequest): Promise<$_model.UpdateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowWithOptions(request, runtime);
  }

  /**
   * Updates the basic information about a workflow in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows in the FlowSpec filed, only the first workflow is created. Other specified workflows and the nodes in the workflows are ignored. You can call the UpdateNode operation to update a node.
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinitionWithOptions(request: $_model.UpdateWorkflowDefinitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowDefinitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowDefinitionResponse({}));
  }

  /**
   * Updates the basic information about a workflow in DataStudio. This API operation performs an incremental update. The update information is described by using FlowSpec.
   * 
   * @remarks
   * >  You cannot use this API operation to create multiple workflows at a time. If you specify multiple workflows in the FlowSpec filed, only the first workflow is created. Other specified workflows and the nodes in the workflows are ignored. You can call the UpdateNode operation to update a node.
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinition(request: $_model.UpdateWorkflowDefinitionRequest): Promise<$_model.UpdateWorkflowDefinitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkflowDefinitionWithOptions(request, runtime);
  }

}
