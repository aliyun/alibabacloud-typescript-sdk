// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-sls';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Sls";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "central";
  }


  /**
   * Applies a Logtail configuration to a machine group.
   * 
   * @remarks
   * - The Host consists of the project name and the Simple Log Service endpoint. You must specify the project in the Host.
   * - Create an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   *  An AccessKey pair for an Alibaba Cloud account provides full access to all API operations. This poses a security risk. For security reasons, we recommend that you create and use a RAM user for API access or routine O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - Create a Logtail configuration and obtain its name. For more information, see [CreateConfig](https://help.aliyun.com/document_detail/29042.html).
   * - Create a machine group and obtain its name. For more information, see [CreateMachineGroup](https://help.aliyun.com/document_detail/29032.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroupWithOptions(project: string, machineGroup: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyConfigToMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyConfigToMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ApplyConfigToMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.ApplyConfigToMachineGroupResponse({}));
  }

  /**
   * Applies a Logtail configuration to a machine group.
   * 
   * @remarks
   * - The Host consists of the project name and the Simple Log Service endpoint. You must specify the project in the Host.
   * - Create an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   *  An AccessKey pair for an Alibaba Cloud account provides full access to all API operations. This poses a security risk. For security reasons, we recommend that you create and use a RAM user for API access or routine O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - Create a Logtail configuration and obtain its name. For more information, see [CreateConfig](https://help.aliyun.com/document_detail/29042.html).
   * - Create a machine group and obtain its name. For more information, see [CreateMachineGroup](https://help.aliyun.com/document_detail/29032.html).
   * @returns ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroup(project: string, machineGroup: string, configName: string): Promise<$_model.ApplyConfigToMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyConfigToMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
   * Calls observable AI tools. The capabilities of these tools are continuously updated. You can call the tool list API to retrieve the currently supported capabilities.
   * 
   * @param request - CallAiToolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CallAiToolsResponse
   */
  async callAiToolsWithOptions(request: $_model.CallAiToolsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CallAiToolsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.toolName)) {
      body["toolName"] = request.toolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CallAiTools",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/tool/call`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.CallAiToolsResponse>(await this.execute(params, req, runtime), new $_model.CallAiToolsResponse({}));
  }

  /**
   * Calls observable AI tools. The capabilities of these tools are continuously updated. You can call the tool list API to retrieve the currently supported capabilities.
   * 
   * @param request - CallAiToolsRequest
   * @returns CallAiToolsResponse
   */
  async callAiTools(request: $_model.CallAiToolsRequest): Promise<$_model.CallAiToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.callAiToolsWithOptions(request, headers, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(project: string, request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/resourcegroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(project: string, request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * A consumer sends a heartbeat to the server to maintain its active status.
   * 
   * @remarks
   * ### API description
   * - The Host consists of a project name and a Simple Log Service Endpoint. You must specify the project in the Host.
   * - A consumer sends heartbeats to the server at fixed intervals to maintain its connection. If the server does not receive a heartbeat from the consumer within a specified period, the consumer is deleted.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair of an Alibaba Cloud account has permissions for all API operations. This poses a high security threat. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Obtain the consumer group name. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authorization information
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy to grant a RAM user or RAM role the permissions to call this API operation.
   * | Action                       | Resource in an authorization policy                                                                                   |
   * | :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
   * | `log:ConsumerGroupHeartBeat` | `acs:log:${regionId}:${accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/{#ConsumerGroupName}` |
   * 
   * @param request - ConsumerGroupHeartBeatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsumerGroupHeartBeatResponse
   */
  async consumerGroupHeartBeatWithOptions(project: string, logstore: string, consumerGroup: string, request: $_model.ConsumerGroupHeartBeatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConsumerGroupHeartBeatResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumer)) {
      query["consumer"] = request.consumer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsumerGroupHeartBeat",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}?type=heartbeat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ConsumerGroupHeartBeatResponse>(await this.execute(params, req, runtime), new $_model.ConsumerGroupHeartBeatResponse({}));
  }

  /**
   * A consumer sends a heartbeat to the server to maintain its active status.
   * 
   * @remarks
   * ### API description
   * - The Host consists of a project name and a Simple Log Service Endpoint. You must specify the project in the Host.
   * - A consumer sends heartbeats to the server at fixed intervals to maintain its connection. If the server does not receive a heartbeat from the consumer within a specified period, the consumer is deleted.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair of an Alibaba Cloud account has permissions for all API operations. This poses a high security threat. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Obtain the consumer group name. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authorization information
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy to grant a RAM user or RAM role the permissions to call this API operation.
   * | Action                       | Resource in an authorization policy                                                                                   |
   * | :--------------------------- | :-------------------------------------------------------------------------------------------------------------------- |
   * | `log:ConsumerGroupHeartBeat` | `acs:log:${regionId}:${accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/{#ConsumerGroupName}` |
   * 
   * @param request - ConsumerGroupHeartBeatRequest
   * @returns ConsumerGroupHeartBeatResponse
   */
  async consumerGroupHeartBeat(project: string, logstore: string, consumerGroup: string, request: $_model.ConsumerGroupHeartBeatRequest): Promise<$_model.ConsumerGroupHeartBeatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consumerGroupHeartBeatWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * Updates the checkpoint of a shard for a consumer group.
   * 
   * @remarks
   * - If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ConsumerGroupUpdateCheckPointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConsumerGroupUpdateCheckPointResponse
   */
  async consumerGroupUpdateCheckPointWithOptions(project: string, logstore: string, consumerGroup: string, request: $_model.ConsumerGroupUpdateCheckPointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConsumerGroupUpdateCheckPointResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumer)) {
      query["consumer"] = request.consumer;
    }

    if (!$dara.isNull(request.forceSuccess)) {
      query["forceSuccess"] = request.forceSuccess;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkpoint)) {
      body["checkpoint"] = request.checkpoint;
    }

    if (!$dara.isNull(request.shard)) {
      body["shard"] = request.shard;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConsumerGroupUpdateCheckPoint",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}?type=checkpoint`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ConsumerGroupUpdateCheckPointResponse>(await this.execute(params, req, runtime), new $_model.ConsumerGroupUpdateCheckPointResponse({}));
  }

  /**
   * Updates the checkpoint of a shard for a consumer group.
   * 
   * @remarks
   * - If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param request - ConsumerGroupUpdateCheckPointRequest
   * @returns ConsumerGroupUpdateCheckPointResponse
   */
  async consumerGroupUpdateCheckPoint(project: string, logstore: string, consumerGroup: string, request: $_model.ConsumerGroupUpdateCheckPointRequest): Promise<$_model.ConsumerGroupUpdateCheckPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.consumerGroupUpdateCheckPointWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * Creates a process-level configuration.
   * 
   * @param request - CreateAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAgentInstanceConfigResponse
   */
  async createAgentInstanceConfigWithOptions(request: $_model.CreateAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAgentInstanceConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      body["attributes"] = request.attributes;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.configType)) {
      body["configType"] = request.configType;
    }

    if (!$dara.isNull(request.grayConfigs)) {
      body["grayConfigs"] = request.grayConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAgentInstanceConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/agentinstanceconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateAgentInstanceConfigResponse>(await this.execute(params, req, runtime), new $_model.CreateAgentInstanceConfigResponse({}));
  }

  /**
   * Creates a process-level configuration.
   * 
   * @param request - CreateAgentInstanceConfigRequest
   * @returns CreateAgentInstanceConfigResponse
   */
  async createAgentInstanceConfig(request: $_model.CreateAgentInstanceConfigRequest): Promise<$_model.CreateAgentInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAgentInstanceConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates an alert rule in a project.
   * 
   * @param request - CreateAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertResponse
   */
  async createAlertWithOptions(project: string, request: $_model.CreateAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateAlertResponse>(await this.execute(params, req, runtime), new $_model.CreateAlertResponse({}));
  }

  /**
   * Creates an alert rule in a project.
   * 
   * @param request - CreateAlertRequest
   * @returns CreateAlertResponse
   */
  async createAlert(project: string, request: $_model.CreateAlertRequest): Promise<$_model.CreateAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlertWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateAnnotationDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnotationDataSetResponse
   */
  async createAnnotationDataSetWithOptions(request: $_model.CreateAnnotationDataSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnnotationDataSetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      query["datasetId"] = request.datasetId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateAnnotationDataSetResponse>(await this.execute(params, req, runtime), new $_model.CreateAnnotationDataSetResponse({}));
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateAnnotationDataSetRequest
   * @returns CreateAnnotationDataSetResponse
   */
  async createAnnotationDataSet(request: $_model.CreateAnnotationDataSetRequest): Promise<$_model.CreateAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationDataSetWithOptions(request, headers, runtime);
  }

  /**
   * Creates an annotation label table.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - CreateAnnotationLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnnotationLabelResponse
   */
  async createAnnotationLabelWithOptions(request: $_model.CreateAnnotationLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnnotationLabelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateAnnotationLabelResponse>(await this.execute(params, req, runtime), new $_model.CreateAnnotationLabelResponse({}));
  }

  /**
   * Creates an annotation label table.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - CreateAnnotationLabelRequest
   * @returns CreateAnnotationLabelResponse
   */
  async createAnnotationLabel(request: $_model.CreateAnnotationLabelRequest): Promise<$_model.CreateAnnotationLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
   * Creates an Azure BLOB ingestion task.
   * 
   * @param request - CreateAzureBlobIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAzureBlobIngestionResponse
   */
  async createAzureBlobIngestionWithOptions(project: string, request: $_model.CreateAzureBlobIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAzureBlobIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.CreateAzureBlobIngestionResponse({}));
  }

  /**
   * Creates an Azure BLOB ingestion task.
   * 
   * @param request - CreateAzureBlobIngestionRequest
   * @returns CreateAzureBlobIngestionResponse
   */
  async createAzureBlobIngestion(project: string, request: $_model.CreateAzureBlobIngestionRequest): Promise<$_model.CreateAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAzureBlobIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 100 Logtail configurations in a project.
   * - The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - CreateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigResponse
   */
  async createConfigWithOptions(project: string, request: $_model.CreateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateConfigResponse>(await this.execute(params, req, runtime), new $_model.CreateConfigResponse({}));
  }

  /**
   * Creates a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 100 Logtail configurations in a project.
   * - The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - CreateConfigRequest
   * @returns CreateConfigResponse
   */
  async createConfig(project: string, request: $_model.CreateConfigRequest): Promise<$_model.CreateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a consumer group for a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - You can create up to 30 consumer groups for a Logstore. The name of a consumer group must be unique in a project.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDK for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:CreateConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * 
   * @param request - CreateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroupWithOptions(project: string, logstore: string, request: $_model.CreateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConsumerGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.consumerGroup)) {
      body["consumerGroup"] = request.consumerGroup;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateConsumerGroupResponse>(await this.execute(params, req, runtime), new $_model.CreateConsumerGroupResponse({}));
  }

  /**
   * Creates a consumer group for a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - You can create up to 30 consumer groups for a Logstore. The name of a consumer group must be unique in a project.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDK for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:CreateConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * 
   * @param request - CreateConsumerGroupRequest
   * @returns CreateConsumerGroupResponse
   */
  async createConsumerGroup(project: string, logstore: string, request: $_model.CreateConsumerGroupRequest): Promise<$_model.CreateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConsumerGroupWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Creates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDashboardResponse
   */
  async createDashboardWithOptions(project: string, request: $_model.CreateDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDashboardResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateDashboardResponse>(await this.execute(params, req, runtime), new $_model.CreateDashboardResponse({}));
  }

  /**
   * Creates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateDashboardRequest
   * @returns CreateDashboardResponse
   */
  async createDashboard(project: string, request: $_model.CreateDashboardRequest): Promise<$_model.CreateDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDashboardWithOptions(project, request, headers, runtime);
  }

  /**
   * Binds a new custom domain name to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDomainResponse
   */
  async createDomainWithOptions(project: string, request: $_model.CreateDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDomainResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDomain",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateDomainResponse>(await this.execute(params, req, runtime), new $_model.CreateDomainResponse({}));
  }

  /**
   * Binds a new custom domain name to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateDomainRequest
   * @returns CreateDomainResponse
   */
  async createDomain(project: string, request: $_model.CreateDomainRequest): Promise<$_model.CreateDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDomainWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a log download task in a specified project.
   * 
   * @param request - CreateDownloadJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDownloadJobResponse
   */
  async createDownloadJobWithOptions(project: string, request: $_model.CreateDownloadJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDownloadJobResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateDownloadJobResponse>(await this.execute(params, req, runtime), new $_model.CreateDownloadJobResponse({}));
  }

  /**
   * Creates a log download task in a specified project.
   * 
   * @param request - CreateDownloadJobRequest
   * @returns CreateDownloadJobResponse
   */
  async createDownloadJob(project: string, request: $_model.CreateDownloadJobRequest): Promise<$_model.CreateDownloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDownloadJobWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a data transformation job in a specified project.
   * 
   * @param request - CreateETLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateETLResponse
   */
  async createETLWithOptions(project: string, request: $_model.CreateETLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateETLResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateETLResponse>(await this.execute(params, req, runtime), new $_model.CreateETLResponse({}));
  }

  /**
   * Creates a data transformation job in a specified project.
   * 
   * @param request - CreateETLRequest
   * @returns CreateETLResponse
   */
  async createETL(project: string, request: $_model.CreateETLRequest): Promise<$_model.CreateETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createETLWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates an ES or OpenSearch import job.
   * 
   * @param request - CreateElasticsearchIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticsearchIngestionResponse
   */
  async createElasticsearchIngestionWithOptions(project: string, request: $_model.CreateElasticsearchIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateElasticsearchIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.CreateElasticsearchIngestionResponse({}));
  }

  /**
   * Creates an ES or OpenSearch import job.
   * 
   * @param request - CreateElasticsearchIngestionRequest
   * @returns CreateElasticsearchIngestionResponse
   */
  async createElasticsearchIngestion(project: string, request: $_model.CreateElasticsearchIngestionRequest): Promise<$_model.CreateElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createElasticsearchIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a GCS file import task.
   * 
   * @param request - CreateGCSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGCSIngestionResponse
   */
  async createGCSIngestionWithOptions(project: string, request: $_model.CreateGCSIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGCSIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGCSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.CreateGCSIngestionResponse>(await this.execute(params, req, runtime), new $_model.CreateGCSIngestionResponse({}));
  }

  /**
   * Creates a GCS file import task.
   * 
   * @param request - CreateGCSIngestionRequest
   * @returns CreateGCSIngestionResponse
   */
  async createGCSIngestion(project: string, request: $_model.CreateGCSIngestionRequest): Promise<$_model.CreateGCSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGCSIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates indexes for a Logstore.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
   */
  async createIndexWithOptions(project: string, logstore: string, request: $_model.CreateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateIndexResponse>(await this.execute(params, req, runtime), new $_model.CreateIndexResponse({}));
  }

  /**
   * Creates indexes for a Logstore.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(project: string, logstore: string, request: $_model.CreateIndexRequest): Promise<$_model.CreateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Creates a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - The Host header of the request consists of a project name and a Log Service endpoint. You must specify the project in this header.
   * - You must create and obtain an AccessKey. For more information, see [AccessKey](https://help.aliyun.com/document_detail/29009.html).
   * An Alibaba Cloud account\\"s AccessKey pair has full permissions for all API operations, which poses a security risk. For enhanced security, we strongly recommend using a RAM user to call API operations or perform routine O\\&M. You must grant the RAM user permissions to manage Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Ensure you have the name and region of the project where you want to create the Logstore. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores in a project.
   * - Log Service automatically deletes logs after the specified data retention period expires.
   * ### Authorization
   * The following table lists the permission required to call this API. To grant this permission to a RAM user or RAM role, add the corresponding Action to a RAM policy statement.
   * | Action               | Resource                                                                       |
   * | :------------------- | :----------------------------------------------------------------------------- |
   * | `log:CreateLogStore` | `acs:log:{#regionId}:{#accountId}:project/{#project}/logstore/{#logstoreName}` |
   * 
   * @param request - CreateLogStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogStoreResponse
   */
  async createLogStoreWithOptions(project: string, request: $_model.CreateLogStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogStoreResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!$dara.isNull(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!$dara.isNull(request.enableModify)) {
      body["enableModify"] = request.enableModify;
    }

    if (!$dara.isNull(request.enableTracking)) {
      body["enable_tracking"] = request.enableTracking;
    }

    if (!$dara.isNull(request.encryptConf)) {
      body["encrypt_conf"] = request.encryptConf;
    }

    if (!$dara.isNull(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!$dara.isNull(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!$dara.isNull(request.logstoreName)) {
      body["logstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.processorId)) {
      body["processorId"] = request.processorId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shardCount)) {
      body["shardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.shardingPolicy)) {
      body["shardingPolicy"] = request.shardingPolicy;
    }

    if (!$dara.isNull(request.telemetryType)) {
      body["telemetryType"] = request.telemetryType;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateLogStoreResponse>(await this.execute(params, req, runtime), new $_model.CreateLogStoreResponse({}));
  }

  /**
   * Creates a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - The Host header of the request consists of a project name and a Log Service endpoint. You must specify the project in this header.
   * - You must create and obtain an AccessKey. For more information, see [AccessKey](https://help.aliyun.com/document_detail/29009.html).
   * An Alibaba Cloud account\\"s AccessKey pair has full permissions for all API operations, which poses a security risk. For enhanced security, we strongly recommend using a RAM user to call API operations or perform routine O\\&M. You must grant the RAM user permissions to manage Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Ensure you have the name and region of the project where you want to create the Logstore. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores in a project.
   * - Log Service automatically deletes logs after the specified data retention period expires.
   * ### Authorization
   * The following table lists the permission required to call this API. To grant this permission to a RAM user or RAM role, add the corresponding Action to a RAM policy statement.
   * | Action               | Resource                                                                       |
   * | :------------------- | :----------------------------------------------------------------------------- |
   * | `log:CreateLogStore` | `acs:log:{#regionId}:{#accountId}:project/{#project}/logstore/{#logstoreName}` |
   * 
   * @param request - CreateLogStoreRequest
   * @returns CreateLogStoreResponse
   */
  async createLogStore(project: string, request: $_model.CreateLogStoreRequest): Promise<$_model.CreateLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogStoreWithOptions(project, request, headers, runtime);
  }

  /**
   * Enables the service log feature for a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLoggingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoggingResponse
   */
  async createLoggingWithOptions(project: string, request: $_model.CreateLoggingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoggingResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loggingDetails)) {
      body["loggingDetails"] = request.loggingDetails;
    }

    if (!$dara.isNull(request.loggingProject)) {
      body["loggingProject"] = request.loggingProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateLoggingResponse>(await this.execute(params, req, runtime), new $_model.CreateLoggingResponse({}));
  }

  /**
   * Enables the service log feature for a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateLoggingRequest
   * @returns CreateLoggingResponse
   */
  async createLogging(project: string, request: $_model.CreateLoggingRequest): Promise<$_model.CreateLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLoggingWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a Logtail pipeline configuration.
   * 
   * @param request - CreateLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogtailPipelineConfigResponse
   */
  async createLogtailPipelineConfigWithOptions(project: string, request: $_model.CreateLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogtailPipelineConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregators)) {
      body["aggregators"] = request.aggregators;
    }

    if (!$dara.isNull(request.configName)) {
      body["configName"] = request.configName;
    }

    if (!$dara.isNull(request.flushers)) {
      body["flushers"] = request.flushers;
    }

    if (!$dara.isNull(request.global)) {
      body["global"] = request.global;
    }

    if (!$dara.isNull(request.inputs)) {
      body["inputs"] = request.inputs;
    }

    if (!$dara.isNull(request.logSample)) {
      body["logSample"] = request.logSample;
    }

    if (!$dara.isNull(request.processors)) {
      body["processors"] = request.processors;
    }

    if (!$dara.isNull(request.task)) {
      body["task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new $_model.CreateLogtailPipelineConfigResponse({}));
  }

  /**
   * Creates a Logtail pipeline configuration.
   * 
   * @param request - CreateLogtailPipelineConfigRequest
   * @returns CreateLogtailPipelineConfigResponse
   */
  async createLogtailPipelineConfig(project: string, request: $_model.CreateLogtailPipelineConfigRequest): Promise<$_model.CreateLogtailPipelineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a machine group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMachineGroupResponse
   */
  async createMachineGroupWithOptions(project: string, request: $_model.CreateMachineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMachineGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupAttribute)) {
      body["groupAttribute"] = request.groupAttribute;
    }

    if (!$dara.isNull(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      body["groupType"] = request.groupType;
    }

    if (!$dara.isNull(request.machineIdentifyType)) {
      body["machineIdentifyType"] = request.machineIdentifyType;
    }

    if (!$dara.isNull(request.machineList)) {
      body["machineList"] = request.machineList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.CreateMachineGroupResponse({}));
  }

  /**
   * Creates a machine group.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - CreateMachineGroupRequest
   * @returns CreateMachineGroupResponse
   */
  async createMachineGroup(project: string, request: $_model.CreateMachineGroupRequest): Promise<$_model.CreateMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMachineGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a materialized view.
   * 
   * @param request - CreateMaterializedViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaterializedViewResponse
   */
  async createMaterializedViewWithOptions(project: string, request: $_model.CreateMaterializedViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaterializedViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggIntervalMins)) {
      body["aggIntervalMins"] = request.aggIntervalMins;
    }

    if (!$dara.isNull(request.logstore)) {
      body["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.originalSql)) {
      body["originalSql"] = request.originalSql;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaterializedView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateMaterializedViewResponse>(await this.execute(params, req, runtime), new $_model.CreateMaterializedViewResponse({}));
  }

  /**
   * Creates a materialized view.
   * 
   * @param request - CreateMaterializedViewRequest
   * @returns CreateMaterializedViewResponse
   */
  async createMaterializedView(project: string, request: $_model.CreateMaterializedViewRequest): Promise<$_model.CreateMaterializedViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMaterializedViewWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateMaxComputeExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMaxComputeExportResponse
   */
  async createMaxComputeExportWithOptions(project: string, request: $_model.CreateMaxComputeExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMaxComputeExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.CreateMaxComputeExportResponse({}));
  }

  /**
   * Creates a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - CreateMaxComputeExportRequest
   * @returns CreateMaxComputeExportResponse
   */
  async createMaxComputeExport(project: string, request: $_model.CreateMaxComputeExportRequest): Promise<$_model.CreateMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMaxComputeExportWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a Metricstore to store metrics.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html).
   * - The Host in the request syntax consists of a project name and a Simple Log Service Endpoint. The project name must be specified in the Host.
   * - An AccessKey pair is required. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full permissions on all API operations. This poses a high security risk. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform operations and maintenance (O\\&M). If you use a RAM user, you must grant the RAM user the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - The name and region of the project are required. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - A project can contain a maximum of 200 Logstores or Metricstores.
   * - Metrics are deleted after the specified data retention period ends.
   * - A Logstore and a Metricstore in the same project cannot have the same name.
   * 
   * @param request - CreateMetricStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetricStoreResponse
   */
  async createMetricStoreWithOptions(project: string, request: $_model.CreateMetricStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetricStoreResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!$dara.isNull(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!$dara.isNull(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!$dara.isNull(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!$dara.isNull(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!$dara.isNull(request.metricType)) {
      body["metricType"] = request.metricType;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.shardCount)) {
      body["shardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.shardingPolicy)) {
      body["shardingPolicy"] = request.shardingPolicy;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetricStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateMetricStoreResponse>(await this.execute(params, req, runtime), new $_model.CreateMetricStoreResponse({}));
  }

  /**
   * Creates a Metricstore to store metrics.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html).
   * - The Host in the request syntax consists of a project name and a Simple Log Service Endpoint. The project name must be specified in the Host.
   * - An AccessKey pair is required. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full permissions on all API operations. This poses a high security risk. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform operations and maintenance (O\\&M). If you use a RAM user, you must grant the RAM user the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - The name and region of the project are required. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - A project can contain a maximum of 200 Logstores or Metricstores.
   * - Metrics are deleted after the specified data retention period ends.
   * - A Logstore and a Metricstore in the same project cannot have the same name.
   * 
   * @param request - CreateMetricStoreRequest
   * @returns CreateMetricStoreResponse
   */
  async createMetricStore(project: string, request: $_model.CreateMetricStoreRequest): Promise<$_model.CreateMetricStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMetricStoreWithOptions(project, request, headers, runtime);
  }

  /**
   * Exports logs from a Logstore to an OSS bucket.
   * 
   * @param request - CreateOSSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSExportResponse
   */
  async createOSSExportWithOptions(project: string, request: $_model.CreateOSSExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOSSExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateOSSExportResponse>(await this.execute(params, req, runtime), new $_model.CreateOSSExportResponse({}));
  }

  /**
   * Exports logs from a Logstore to an OSS bucket.
   * 
   * @param request - CreateOSSExportRequest
   * @returns CreateOSSExportResponse
   */
  async createOSSExport(project: string, request: $_model.CreateOSSExportRequest): Promise<$_model.CreateOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSExportWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates an export job from OSS to HDFS in a specified project.
   * 
   * @param request - CreateOSSHDFSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSHDFSExportResponse
   */
  async createOSSHDFSExportWithOptions(project: string, request: $_model.CreateOSSHDFSExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOSSHDFSExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.CreateOSSHDFSExportResponse({}));
  }

  /**
   * Creates an export job from OSS to HDFS in a specified project.
   * 
   * @param request - CreateOSSHDFSExportRequest
   * @returns CreateOSSHDFSExportResponse
   */
  async createOSSHDFSExport(project: string, request: $_model.CreateOSSHDFSExportRequest): Promise<$_model.CreateOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSHDFSExportWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates an OSS import task in a specified project.
   * 
   * @param request - CreateOSSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOSSIngestionResponse
   */
  async createOSSIngestionWithOptions(project: string, request: $_model.CreateOSSIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOSSIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.CreateOSSIngestionResponse({}));
  }

  /**
   * Creates an OSS import task in a specified project.
   * 
   * @param request - CreateOSSIngestionRequest
   * @returns CreateOSSIngestionResponse
   */
  async createOSSIngestion(project: string, request: $_model.CreateOSSIngestionRequest): Promise<$_model.CreateOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOSSIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a project.
   * 
   * @remarks
   * ### Usage notes
   * - An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - A project name must be globally unique in an Alibaba Cloud region and cannot be changed after the project is created.
   * - For limits on the number of projects per Alibaba Cloud account, see[Basic resources](https://help.aliyun.com/document_detail/86660.html).
   * ### Authorization information
   * The following table describes the authorization information for this API operation. You can add this information to the Action element of a RAM policy statement to grant RAM users or RAM roles permissions to call this operation.
   * | Action              | Resource in policy                                        |
   * | :------------------ | :-------------------------------------------------------- |
   * | `log:CreateProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataRedundancyType)) {
      body["dataRedundancyType"] = request.dataRedundancyType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.recycleBinEnabled)) {
      body["recycleBinEnabled"] = request.recycleBinEnabled;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.execute(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a project.
   * 
   * @remarks
   * ### Usage notes
   * - An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - A project name must be globally unique in an Alibaba Cloud region and cannot be changed after the project is created.
   * - For limits on the number of projects per Alibaba Cloud account, see[Basic resources](https://help.aliyun.com/document_detail/86660.html).
   * ### Authorization information
   * The following table describes the authorization information for this API operation. You can add this information to the Action element of a RAM policy statement to grant RAM users or RAM roles permissions to call this operation.
   * | Action              | Resource in policy                                        |
   * | :------------------ | :-------------------------------------------------------- |
   * | `log:CreateProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates an S3 file import job.
   * 
   * @param request - CreateS3IngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateS3IngestionResponse
   */
  async createS3IngestionWithOptions(project: string, request: $_model.CreateS3IngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateS3IngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateS3Ingestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/s3ingestions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateS3IngestionResponse>(await this.execute(params, req, runtime), new $_model.CreateS3IngestionResponse({}));
  }

  /**
   * Creates an S3 file import job.
   * 
   * @param request - CreateS3IngestionRequest
   * @returns CreateS3IngestionResponse
   */
  async createS3Ingestion(project: string, request: $_model.CreateS3IngestionRequest): Promise<$_model.CreateS3IngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createS3IngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:CreateSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param request - CreateSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavedSearchResponse
   */
  async createSavedSearchWithOptions(project: string, request: $_model.CreateSavedSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSavedSearchResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.logstore)) {
      body["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.savedsearchName)) {
      body["savedsearchName"] = request.savedsearchName;
    }

    if (!$dara.isNull(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateSavedSearchResponse>(await this.execute(params, req, runtime), new $_model.CreateSavedSearchResponse({}));
  }

  /**
   * Creates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:CreateSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param request - CreateSavedSearchRequest
   * @returns CreateSavedSearchResponse
   */
  async createSavedSearch(project: string, request: $_model.CreateSavedSearchRequest): Promise<$_model.CreateSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSavedSearchWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a scheduled SQL job in a specified project.
   * 
   * @param request - CreateScheduledSQLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledSQLResponse
   */
  async createScheduledSQLWithOptions(project: string, request: $_model.CreateScheduledSQLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledSQLResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.CreateScheduledSQLResponse({}));
  }

  /**
   * Creates a scheduled SQL job in a specified project.
   * 
   * @param request - CreateScheduledSQLRequest
   * @returns CreateScheduledSQLResponse
   */
  async createScheduledSQL(project: string, request: $_model.CreateScheduledSQLRequest): Promise<$_model.CreateScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduledSQLWithOptions(project, request, headers, runtime);
  }

  /**
   * If you use Standard SQL to analyze a large volume of data, a single query may not be able to scan all logs within a specified time range, which can result in incomplete data. Adding shards improves read and write performance, but this change applies only to new data. To analyze a larger volume of data in a single query, you can enable Dedicated SQL and increase its compute resources.
   * 
   * @remarks
   * *Ensure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/223777.html) of Dedicated SQL before you use this operation.**
   * 
   * @param request - CreateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstanceWithOptions(project: string, request: $_model.CreateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlInstanceResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cu)) {
      body["cu"] = request.cu;
    }

    if (!$dara.isNull(request.useAsDefault)) {
      body["useAsDefault"] = request.useAsDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateSqlInstanceResponse>(await this.execute(params, req, runtime), new $_model.CreateSqlInstanceResponse({}));
  }

  /**
   * If you use Standard SQL to analyze a large volume of data, a single query may not be able to scan all logs within a specified time range, which can result in incomplete data. Adding shards improves read and write performance, but this change applies only to new data. To analyze a larger volume of data in a single query, you can enable Dedicated SQL and increase its compute resources.
   * 
   * @remarks
   * *Ensure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/223777.html) of Dedicated SQL before you use this operation.**
   * 
   * @param request - CreateSqlInstanceRequest
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstance(project: string, request: $_model.CreateSqlInstanceRequest): Promise<$_model.CreateSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlInstanceWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateStoreViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoreViewResponse
   */
  async createStoreViewWithOptions(project: string, request: $_model.CreateStoreViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStoreViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    if (!$dara.isNull(request.stores)) {
      body["stores"] = request.stores;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateStoreViewResponse>(await this.execute(params, req, runtime), new $_model.CreateStoreViewResponse({}));
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateStoreViewRequest
   * @returns CreateStoreViewResponse
   */
  async createStoreView(project: string, request: $_model.CreateStoreViewRequest): Promise<$_model.CreateStoreViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStoreViewWithOptions(project, request, headers, runtime);
  }

  /**
   * Obtains a ticket. Simple Log Service allows you to share the query and analysis pages and dashboard pages with other users and embed the console pages into third-party systems. This way, other users can view your logs in password-free mode. The URLs of the shared pages are referred to as password-free URLs. You can call the CreateTicket operation to obtain a ticket and generate a password-free URL based on the ticket and the URL of the console page that you want to share.
   * 
   * @param request - CreateTicketRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTicketResponse
   */
  async createTicketWithOptions(request: $_model.CreateTicketRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTicketResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!$dara.isNull(request.expirationTime)) {
      query["expirationTime"] = request.expirationTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTicket",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tickets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTicketResponse>(await this.execute(params, req, runtime), new $_model.CreateTicketResponse({}));
  }

  /**
   * Obtains a ticket. Simple Log Service allows you to share the query and analysis pages and dashboard pages with other users and embed the console pages into third-party systems. This way, other users can view your logs in password-free mode. The URLs of the shared pages are referred to as password-free URLs. You can call the CreateTicket operation to obtain a ticket and generate a password-free URL based on the ticket and the URL of the console page that you want to share.
   * 
   * @param request - CreateTicketRequest
   * @returns CreateTicketResponse
   */
  async createTicket(request: $_model.CreateTicketRequest): Promise<$_model.CreateTicketResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTicketWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a process configuration.
   * 
   * @param tmpReq - DeleteAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentInstanceConfigResponse
   */
  async deleteAgentInstanceConfigWithOptions(configType: string, tmpReq: $_model.DeleteAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentInstanceConfigResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAgentInstanceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "attributes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributesShrink)) {
      query["attributes"] = request.attributesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAgentInstanceConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/agentinstanceconfigs/${configType}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAgentInstanceConfigResponse>(await this.execute(params, req, runtime), new $_model.DeleteAgentInstanceConfigResponse({}));
  }

  /**
   * Deletes a process configuration.
   * 
   * @param request - DeleteAgentInstanceConfigRequest
   * @returns DeleteAgentInstanceConfigResponse
   */
  async deleteAgentInstanceConfig(configType: string, request: $_model.DeleteAgentInstanceConfigRequest): Promise<$_model.DeleteAgentInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAgentInstanceConfigWithOptions(configType, request, headers, runtime);
  }

  /**
   * Deletes an alert rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertResponse
   */
  async deleteAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAlertResponse>(await this.execute(params, req, runtime), new $_model.DeleteAlertResponse({}));
  }

  /**
   * Deletes an alert rule.
   * @returns DeleteAlertResponse
   */
  async deleteAlert(project: string, alertName: string): Promise<$_model.DeleteAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Deletes data from a dataset.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationDataResponse
   */
  async deleteAnnotationDataWithOptions(datasetId: string, annotationdataId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnnotationDataResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata/${annotationdataId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAnnotationDataResponse>(await this.execute(params, req, runtime), new $_model.DeleteAnnotationDataResponse({}));
  }

  /**
   * Deletes data from a dataset.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * @returns DeleteAnnotationDataResponse
   */
  async deleteAnnotationData(datasetId: string, annotationdataId: string): Promise<$_model.DeleteAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Deletes a dataset. You can delete a dataset only if it contains no data structures.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSetWithOptions(datasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnnotationDataSetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAnnotationDataSetResponse>(await this.execute(params, req, runtime), new $_model.DeleteAnnotationDataSetResponse({}));
  }

  /**
   * Deletes a dataset. You can delete a dataset only if it contains no data structures.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * @returns DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSet(datasetId: string): Promise<$_model.DeleteAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Deletes a custom annotation label.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabelWithOptions(labelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnnotationLabelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel/${labelId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAnnotationLabelResponse>(await this.execute(params, req, runtime), new $_model.DeleteAnnotationLabelResponse({}));
  }

  /**
   * Deletes a custom annotation label.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * @returns DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabel(labelId: string): Promise<$_model.DeleteAnnotationLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
   * Create a file import task from Azure Blob
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAzureBlobIngestionResponse
   */
  async deleteAzureBlobIngestionWithOptions(project: string, azureBlobIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAzureBlobIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions/${azureBlobIngestionName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.DeleteAzureBlobIngestionResponse({}));
  }

  /**
   * Create a file import task from Azure Blob
   * @returns DeleteAzureBlobIngestionResponse
   */
  async deleteAzureBlobIngestion(project: string, azureBlobIngestionName: string): Promise<$_model.DeleteAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAzureBlobIngestionWithOptions(project, azureBlobIngestionName, headers, runtime);
  }

  /**
   * Deletes a log collection rule for an Alibaba Cloud product.
   * 
   * @remarks
   * This API can be called only from endpoints in the China (Shanghai), Singapore, and China (Heyuan) Automotive Compliance Cloud (cn-heyuan-acdr-1) regions.
   * 
   * @param request - DeleteCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCollectionPolicyResponse
   */
  async deleteCollectionPolicyWithOptions(policyName: string, request: $_model.DeleteCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCollectionPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!$dara.isNull(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy/${policyName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteCollectionPolicyResponse>(await this.execute(params, req, runtime), new $_model.DeleteCollectionPolicyResponse({}));
  }

  /**
   * Deletes a log collection rule for an Alibaba Cloud product.
   * 
   * @remarks
   * This API can be called only from endpoints in the China (Shanghai), Singapore, and China (Heyuan) Automotive Compliance Cloud (cn-heyuan-acdr-1) regions.
   * 
   * @param request - DeleteCollectionPolicyRequest
   * @returns DeleteCollectionPolicyResponse
   */
  async deleteCollectionPolicy(policyName: string, request: $_model.DeleteCollectionPolicyRequest): Promise<$_model.DeleteCollectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
   * Deletes a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigResponse
   */
  async deleteConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteConfigResponse>(await this.execute(params, req, runtime), new $_model.DeleteConfigResponse({}));
  }

  /**
   * Deletes a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns DeleteConfigResponse
   */
  async deleteConfig(project: string, configName: string): Promise<$_model.DeleteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Deletes a consume processor.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumeProcessorResponse
   */
  async deleteConsumeProcessorWithOptions(project: string, processorName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumeProcessorResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumeProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/consumeprocessors/${processorName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteConsumeProcessorResponse>(await this.execute(params, req, runtime), new $_model.DeleteConsumeProcessorResponse({}));
  }

  /**
   * Deletes a consume processor.
   * @returns DeleteConsumeProcessorResponse
   */
  async deleteConsumeProcessor(project: string, processorName: string): Promise<$_model.DeleteConsumeProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumeProcessorWithOptions(project, processorName, headers, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:DeleteConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroupWithOptions(project: string, logstore: string, consumerGroup: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConsumerGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteConsumerGroupResponse>(await this.execute(params, req, runtime), new $_model.DeleteConsumerGroupResponse({}));
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:DeleteConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * @returns DeleteConsumerGroupResponse
   */
  async deleteConsumerGroup(project: string, logstore: string, consumerGroup: string): Promise<$_model.DeleteConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConsumerGroupWithOptions(project, logstore, consumerGroup, headers, runtime);
  }

  /**
   * Deletes a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDashboardResponse
   */
  async deleteDashboardWithOptions(project: string, dashboardName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDashboardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteDashboardResponse>(await this.execute(params, req, runtime), new $_model.DeleteDashboardResponse({}));
  }

  /**
   * Deletes a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns DeleteDashboardResponse
   */
  async deleteDashboard(project: string, dashboardName: string): Promise<$_model.DeleteDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
   * Deletes a custom domain name that is bound to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDomainResponse
   */
  async deleteDomainWithOptions(project: string, domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDomainResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDomain",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains/${domainName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteDomainResponse>(await this.execute(params, req, runtime), new $_model.DeleteDomainResponse({}));
  }

  /**
   * Deletes a custom domain name that is bound to a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteDomainResponse
   */
  async deleteDomain(project: string, domainName: string): Promise<$_model.DeleteDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDomainWithOptions(project, domainName, headers, runtime);
  }

  /**
   * Deletes a download job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDownloadJobResponse
   */
  async deleteDownloadJobWithOptions(project: string, downloadJobName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDownloadJobResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs/${downloadJobName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteDownloadJobResponse>(await this.execute(params, req, runtime), new $_model.DeleteDownloadJobResponse({}));
  }

  /**
   * Deletes a download job.
   * @returns DeleteDownloadJobResponse
   */
  async deleteDownloadJob(project: string, downloadJobName: string): Promise<$_model.DeleteDownloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDownloadJobWithOptions(project, downloadJobName, headers, runtime);
  }

  /**
   * Deletes a data transformation job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteETLResponse
   */
  async deleteETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteETLResponse>(await this.execute(params, req, runtime), new $_model.DeleteETLResponse({}));
  }

  /**
   * Deletes a data transformation job.
   * @returns DeleteETLResponse
   */
  async deleteETL(project: string, etlName: string): Promise<$_model.DeleteETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Deletes an ES/OpenSearch ingestion task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticsearchIngestionResponse
   */
  async deleteElasticsearchIngestionWithOptions(project: string, esIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteElasticsearchIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${esIngestionName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.DeleteElasticsearchIngestionResponse({}));
  }

  /**
   * Deletes an ES/OpenSearch ingestion task.
   * @returns DeleteElasticsearchIngestionResponse
   */
  async deleteElasticsearchIngestion(project: string, esIngestionName: string): Promise<$_model.DeleteElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteElasticsearchIngestionWithOptions(project, esIngestionName, headers, runtime);
  }

  /**
   * Deletes an index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
   */
  async deleteIndexWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteIndexResponse>(await this.execute(params, req, runtime), new $_model.DeleteIndexResponse({}));
  }

  /**
   * Deletes an index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteIndexResponse
   */
  async deleteIndex(project: string, logstore: string): Promise<$_model.DeleteIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Deletes an ingest processor.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIngestProcessorResponse
   */
  async deleteIngestProcessorWithOptions(project: string, processorName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIngestProcessorResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIngestProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ingestprocessors/${processorName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteIngestProcessorResponse>(await this.execute(params, req, runtime), new $_model.DeleteIngestProcessorResponse({}));
  }

  /**
   * Deletes an ingest processor.
   * @returns DeleteIngestProcessorResponse
   */
  async deleteIngestProcessor(project: string, processorName: string): Promise<$_model.DeleteIngestProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIngestProcessorWithOptions(project, processorName, headers, runtime);
  }

  /**
   * Deletes a Logstore, including all shards and indexes in the Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogStoreResponse
   */
  async deleteLogStoreWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLogStoreResponse>(await this.execute(params, req, runtime), new $_model.DeleteLogStoreResponse({}));
  }

  /**
   * Deletes a Logstore, including all shards and indexes in the Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * @returns DeleteLogStoreResponse
   */
  async deleteLogStore(project: string, logstore: string): Promise<$_model.DeleteLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogStoreWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Deletes the service log for a specified project.
   * 
   * @remarks
   * The host must be specified as a combination of the project name and the Simple Log Service endpoint.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoggingResponse
   */
  async deleteLoggingWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLoggingResponse>(await this.execute(params, req, runtime), new $_model.DeleteLoggingResponse({}));
  }

  /**
   * Deletes the service log for a specified project.
   * 
   * @remarks
   * The host must be specified as a combination of the project name and the Simple Log Service endpoint.
   * @returns DeleteLoggingResponse
   */
  async deleteLogging(project: string): Promise<$_model.DeleteLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLoggingWithOptions(project, headers, runtime);
  }

  /**
   * Deletes a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogtailPipelineConfigResponse
   */
  async deleteLogtailPipelineConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogtailPipelineConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new $_model.DeleteLogtailPipelineConfigResponse({}));
  }

  /**
   * Deletes a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * @returns DeleteLogtailPipelineConfigResponse
   */
  async deleteLogtailPipelineConfig(project: string, configName: string): Promise<$_model.DeleteLogtailPipelineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Deletes a machine group. If the Logtail configurations for log collection are applied to a machine group, the configurations are disassociated from the machine group after the machine group is deleted.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMachineGroupResponse
   */
  async deleteMachineGroupWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.DeleteMachineGroupResponse({}));
  }

  /**
   * Deletes a machine group. If the Logtail configurations for log collection are applied to a machine group, the configurations are disassociated from the machine group after the machine group is deleted.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns DeleteMachineGroupResponse
   */
  async deleteMachineGroup(project: string, machineGroup: string): Promise<$_model.DeleteMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * Deletes a materialized view.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaterializedViewResponse
   */
  async deleteMaterializedViewWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaterializedViewResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaterializedView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMaterializedViewResponse>(await this.execute(params, req, runtime), new $_model.DeleteMaterializedViewResponse({}));
  }

  /**
   * Deletes a materialized view.
   * @returns DeleteMaterializedViewResponse
   */
  async deleteMaterializedView(project: string, name: string): Promise<$_model.DeleteMaterializedViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMaterializedViewWithOptions(project, name, headers, runtime);
  }

  /**
   * Deletes a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaxComputeExportResponse
   */
  async deleteMaxComputeExportWithOptions(project: string, mcExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaxComputeExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports/${mcExportName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.DeleteMaxComputeExportResponse({}));
  }

  /**
   * Deletes a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns DeleteMaxComputeExportResponse
   */
  async deleteMaxComputeExport(project: string, mcExportName: string): Promise<$_model.DeleteMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * Deletes an existing Metricstore. When you delete a Metricstore, the metric data stored in the Metricstore and associated resources such as associated collection settings and transformation settings are also deleted.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * - You must specify an existing Metricstore.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 200 Logstores or Metricstores in a project.
   * - Metric data is automatically deleted when the retention period of the metric data ends.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetricStoreResponse
   */
  async deleteMetricStoreWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetricStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetricStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteMetricStoreResponse>(await this.execute(params, req, runtime), new $_model.DeleteMetricStoreResponse({}));
  }

  /**
   * Deletes an existing Metricstore. When you delete a Metricstore, the metric data stored in the Metricstore and associated resources such as associated collection settings and transformation settings are also deleted.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * - You must specify an existing Metricstore.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 200 Logstores or Metricstores in a project.
   * - Metric data is automatically deleted when the retention period of the metric data ends.
   * @returns DeleteMetricStoreResponse
   */
  async deleteMetricStore(project: string, name: string): Promise<$_model.DeleteMetricStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMetricStoreWithOptions(project, name, headers, runtime);
  }

  /**
   * Deletes a specified OSS data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSExportResponse
   */
  async deleteOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteOSSExportResponse>(await this.execute(params, req, runtime), new $_model.DeleteOSSExportResponse({}));
  }

  /**
   * Deletes a specified OSS data shipping job.
   * @returns DeleteOSSExportResponse
   */
  async deleteOSSExport(project: string, ossExportName: string): Promise<$_model.DeleteOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Deletes an OSS-HDFS data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSHDFSExportResponse
   */
  async deleteOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.DeleteOSSHDFSExportResponse({}));
  }

  /**
   * Deletes an OSS-HDFS data shipping job.
   * @returns DeleteOSSHDFSExportResponse
   */
  async deleteOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.DeleteOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Deletes an OSS import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOSSIngestionResponse
   */
  async deleteOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.DeleteOSSIngestionResponse({}));
  }

  /**
   * Deletes an OSS import task.
   * @returns DeleteOSSIngestionResponse
   */
  async deleteOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.DeleteOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Deletes a specified project.
   * 
   * @remarks
   * ### Description
   * - The Host parameter consists of a project name and a Simple Log Service Endpoint. You must specify the project name in the Host parameter.
   * - You must create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security threat. We recommend that you use a RAM user to call API operations or perform O\\&M. The RAM user must have the permissions to operate on Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - When you delete a project, all its log data and configurations are released and cannot be recovered. To prevent data loss, confirm the action before you delete the project.
   * ### Authorization
   * The following table lists the authorization information for this API operation. To grant a RAM user or RAM role the permissions to call this API operation, add this information to the Action element of a RAM access policy statement.
   * | Action              | Resource description in an authorization policy           |
   * | :------------------ | :-------------------------------------------------------- |
   * | `log:DeleteProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(project: string, request: $_model.DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forceDelete)) {
      query["forceDelete"] = request.forceDelete;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.execute(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a specified project.
   * 
   * @remarks
   * ### Description
   * - The Host parameter consists of a project name and a Simple Log Service Endpoint. You must specify the project name in the Host parameter.
   * - You must create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security threat. We recommend that you use a RAM user to call API operations or perform O\\&M. The RAM user must have the permissions to operate on Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - When you delete a project, all its log data and configurations are released and cannot be recovered. To prevent data loss, confirm the action before you delete the project.
   * ### Authorization
   * The following table lists the authorization information for this API operation. To grant a RAM user or RAM role the permissions to call this API operation, add this information to the Action element of a RAM access policy statement.
   * | Action              | Resource description in an authorization policy           |
   * | :------------------ | :-------------------------------------------------------- |
   * | `log:DeleteProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(project: string, request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(project, request, headers, runtime);
  }

  /**
   * Deletes a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectPolicyResponse
   */
  async deleteProjectPolicyWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteProjectPolicyResponse>(await this.execute(params, req, runtime), new $_model.DeleteProjectPolicyResponse({}));
  }

  /**
   * Deletes a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns DeleteProjectPolicyResponse
   */
  async deleteProjectPolicy(project: string): Promise<$_model.DeleteProjectPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Deletes an S3 ingestion task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteS3IngestionResponse
   */
  async deleteS3IngestionWithOptions(project: string, s3IngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteS3IngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteS3Ingestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/s3ingestions/${s3IngestionName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteS3IngestionResponse>(await this.execute(params, req, runtime), new $_model.DeleteS3IngestionResponse({}));
  }

  /**
   * Deletes an S3 ingestion task.
   * @returns DeleteS3IngestionResponse
   */
  async deleteS3Ingestion(project: string, s3IngestionName: string): Promise<$_model.DeleteS3IngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteS3IngestionWithOptions(project, s3IngestionName, headers, runtime);
  }

  /**
   * Deletes a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - After you delete a saved search, it cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:DeleteSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavedSearchResponse
   */
  async deleteSavedSearchWithOptions(project: string, savedsearchName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSavedSearchResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteSavedSearchResponse>(await this.execute(params, req, runtime), new $_model.DeleteSavedSearchResponse({}));
  }

  /**
   * Deletes a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - After you delete a saved search, it cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:DeleteSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * @returns DeleteSavedSearchResponse
   */
  async deleteSavedSearch(project: string, savedsearchName: string): Promise<$_model.DeleteSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  /**
   * Deletes a Scheduled SQL job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledSQLResponse
   */
  async deleteScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.DeleteScheduledSQLResponse({}));
  }

  /**
   * Deletes a Scheduled SQL job.
   * @returns DeleteScheduledSQLResponse
   */
  async deleteScheduledSQL(project: string, scheduledSQLName: string): Promise<$_model.DeleteScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * Deletes a dataset by using the name of the dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStoreViewResponse
   */
  async deleteStoreViewWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStoreViewResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteStoreViewResponse>(await this.execute(params, req, runtime), new $_model.DeleteStoreViewResponse({}));
  }

  /**
   * Deletes a dataset by using the name of the dataset.
   * @returns DeleteStoreViewResponse
   */
  async deleteStoreView(project: string, name: string): Promise<$_model.DeleteStoreViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStoreViewWithOptions(project, name, headers, runtime);
  }

  /**
   * Queries the available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.execute(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(request, headers, runtime);
  }

  /**
   * Disables an alert rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAlertResponse
   */
  async disableAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}?action=disable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DisableAlertResponse>(await this.execute(params, req, runtime), new $_model.DisableAlertResponse({}));
  }

  /**
   * Disables an alert rule.
   * @returns DisableAlertResponse
   */
  async disableAlert(project: string, alertName: string): Promise<$_model.DisableAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Disables the Scheduled SQL feature.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableScheduledSQLResponse
   */
  async disableScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}?action=disable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DisableScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.DisableScheduledSQLResponse({}));
  }

  /**
   * Disables the Scheduled SQL feature.
   * @returns DisableScheduledSQLResponse
   */
  async disableScheduledSQL(project: string, scheduledSQLName: string): Promise<$_model.DisableScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * Enables an alert rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAlertResponse
   */
  async enableAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}?action=enable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.EnableAlertResponse>(await this.execute(params, req, runtime), new $_model.EnableAlertResponse({}));
  }

  /**
   * Enables an alert rule.
   * @returns EnableAlertResponse
   */
  async enableAlert(project: string, alertName: string): Promise<$_model.EnableAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Enables the Scheduled SQL feature.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableScheduledSQLResponse
   */
  async enableScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}?action=enable`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.EnableScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.EnableScheduledSQLResponse({}));
  }

  /**
   * Enables the Scheduled SQL feature.
   * @returns EnableScheduledSQLResponse
   */
  async enableScheduledSQL(project: string, scheduledSQLName: string): Promise<$_model.EnableScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * Retrieves a process-level configuration.
   * 
   * @param tmpReq - GetAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentInstanceConfigResponse
   */
  async getAgentInstanceConfigWithOptions(configType: string, tmpReq: $_model.GetAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentInstanceConfigResponse> {
    tmpReq.validate();
    let request = new $_model.GetAgentInstanceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "attributes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributesShrink)) {
      query["attributes"] = request.attributesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentInstanceConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/agentinstanceconfigs/${configType}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentInstanceConfigResponse>(await this.execute(params, req, runtime), new $_model.GetAgentInstanceConfigResponse({}));
  }

  /**
   * Retrieves a process-level configuration.
   * 
   * @param request - GetAgentInstanceConfigRequest
   * @returns GetAgentInstanceConfigResponse
   */
  async getAgentInstanceConfig(configType: string, request: $_model.GetAgentInstanceConfigRequest): Promise<$_model.GetAgentInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentInstanceConfigWithOptions(configType, request, headers, runtime);
  }

  /**
   * Queries the information about an alert rule.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertResponse
   */
  async getAlertWithOptions(project: string, alertName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertResponse>(await this.execute(params, req, runtime), new $_model.GetAlertResponse({}));
  }

  /**
   * Queries the information about an alert rule.
   * @returns GetAlertResponse
   */
  async getAlert(project: string, alertName: string): Promise<$_model.GetAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlertWithOptions(project, alertName, headers, runtime);
  }

  /**
   * Retrieves a data struct from a dataset by its unique identity.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationDataResponse
   */
  async getAnnotationDataWithOptions(datasetId: string, annotationdataId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnnotationDataResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata/${annotationdataId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnnotationDataResponse>(await this.execute(params, req, runtime), new $_model.GetAnnotationDataResponse({}));
  }

  /**
   * Retrieves a data struct from a dataset by its unique identity.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * @returns GetAnnotationDataResponse
   */
  async getAnnotationData(datasetId: string, annotationdataId: string): Promise<$_model.GetAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Retrieves information about a dataset.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationDataSetResponse
   */
  async getAnnotationDataSetWithOptions(datasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnnotationDataSetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnnotationDataSetResponse>(await this.execute(params, req, runtime), new $_model.GetAnnotationDataSetResponse({}));
  }

  /**
   * Retrieves information about a dataset.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * @returns GetAnnotationDataSetResponse
   */
  async getAnnotationDataSet(datasetId: string): Promise<$_model.GetAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Retrieves a label table by its ID.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnnotationLabelResponse
   */
  async getAnnotationLabelWithOptions(labelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnnotationLabelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel/${labelId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnnotationLabelResponse>(await this.execute(params, req, runtime), new $_model.GetAnnotationLabelResponse({}));
  }

  /**
   * Retrieves a label table by its ID.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * @returns GetAnnotationLabelResponse
   */
  async getAnnotationLabel(labelId: string): Promise<$_model.GetAnnotationLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
   * Queries the Logtail configurations that are applied to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedConfigsResponse
   */
  async getAppliedConfigsWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppliedConfigsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppliedConfigs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppliedConfigsResponse>(await this.execute(params, req, runtime), new $_model.GetAppliedConfigsResponse({}));
  }

  /**
   * Queries the Logtail configurations that are applied to a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetAppliedConfigsResponse
   */
  async getAppliedConfigs(project: string, machineGroup: string): Promise<$_model.GetAppliedConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedConfigsWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * Queries the machine groups to which a Logtail configuration is bound.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedMachineGroupsResponse
   */
  async getAppliedMachineGroupsWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppliedMachineGroupsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppliedMachineGroups",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppliedMachineGroupsResponse>(await this.execute(params, req, runtime), new $_model.GetAppliedMachineGroupsResponse({}));
  }

  /**
   * Queries the machine groups to which a Logtail configuration is bound.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetAppliedMachineGroupsResponse
   */
  async getAppliedMachineGroups(project: string, configName: string): Promise<$_model.GetAppliedMachineGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppliedMachineGroupsWithOptions(project, configName, headers, runtime);
  }

  /**
   * Retrieves the status and results of an asynchronous SQL query.
   * 
   * @remarks
   * After you submit an SQL request using the SubmitAsyncSql operation, you can use this operation to poll the execution status of the request. You can set the polling interval to 1 second or longer. When the query is complete, use the GetAsyncSql operation to retrieve the results in pages.
   * 
   * @param request - GetAsyncSqlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncSqlResponse
   */
  async getAsyncSqlWithOptions(project: string, queryId: string, request: $_model.GetAsyncSqlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncSqlResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.line)) {
      query["line"] = request.line;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncSql",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/asyncsql/${queryId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncSqlResponse>(await this.execute(params, req, runtime), new $_model.GetAsyncSqlResponse({}));
  }

  /**
   * Retrieves the status and results of an asynchronous SQL query.
   * 
   * @remarks
   * After you submit an SQL request using the SubmitAsyncSql operation, you can use this operation to poll the execution status of the request. You can set the polling interval to 1 second or longer. When the query is complete, use the GetAsyncSql operation to retrieve the results in pages.
   * 
   * @param request - GetAsyncSqlRequest
   * @returns GetAsyncSqlResponse
   */
  async getAsyncSql(project: string, queryId: string, request: $_model.GetAsyncSqlRequest): Promise<$_model.GetAsyncSqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncSqlWithOptions(project, queryId, request, headers, runtime);
  }

  /**
   * Gets the details of an Azure Blob ingestion.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAzureBlobIngestionResponse
   */
  async getAzureBlobIngestionWithOptions(project: string, azureBlobIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAzureBlobIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions/${azureBlobIngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.GetAzureBlobIngestionResponse({}));
  }

  /**
   * Gets the details of an Azure Blob ingestion.
   * @returns GetAzureBlobIngestionResponse
   */
  async getAzureBlobIngestion(project: string, azureBlobIngestionName: string): Promise<$_model.GetAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAzureBlobIngestionWithOptions(project, azureBlobIngestionName, headers, runtime);
  }

  /**
   * Queries the checkpoints of a shard from which data is consumed by a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetCheckPointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCheckPointResponse
   */
  async getCheckPointWithOptions(project: string, logstore: string, consumerGroup: string, request: $_model.GetCheckPointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCheckPointResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.shard)) {
      query["shard"] = request.shard;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCheckPoint",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetCheckPointResponse>(await this.execute(params, req, runtime), new $_model.GetCheckPointResponse({}));
  }

  /**
   * Queries the checkpoints of a shard from which data is consumed by a consumer group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - GetCheckPointRequest
   * @returns GetCheckPointResponse
   */
  async getCheckPoint(project: string, logstore: string, consumerGroup: string, request: $_model.GetCheckPointRequest): Promise<$_model.GetCheckPointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCheckPointWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * You can call the GetCollectionPolicy operation to retrieve the details of a specific rule.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai), Singapore, and China (Heyuan) Automotive Compliance Cloud (cn-heyuan-acdr-1) regions.
   * 
   * @param request - GetCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCollectionPolicyResponse
   */
  async getCollectionPolicyWithOptions(policyName: string, request: $_model.GetCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCollectionPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!$dara.isNull(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy/${policyName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCollectionPolicyResponse>(await this.execute(params, req, runtime), new $_model.GetCollectionPolicyResponse({}));
  }

  /**
   * You can call the GetCollectionPolicy operation to retrieve the details of a specific rule.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai), Singapore, and China (Heyuan) Automotive Compliance Cloud (cn-heyuan-acdr-1) regions.
   * 
   * @param request - GetCollectionPolicyRequest
   * @returns GetCollectionPolicyResponse
   */
  async getCollectionPolicy(policyName: string, request: $_model.GetCollectionPolicyRequest): Promise<$_model.GetCollectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCollectionPolicyWithOptions(policyName, request, headers, runtime);
  }

  /**
   * Gets the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigResponse
   */
  async getConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigResponse>(await this.execute(params, req, runtime), new $_model.GetConfigResponse({}));
  }

  /**
   * Gets the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns GetConfigResponse
   */
  async getConfig(project: string, configName: string): Promise<$_model.GetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Retrieves the details of a consume processor.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConsumeProcessorResponse
   */
  async getConsumeProcessorWithOptions(project: string, processorName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConsumeProcessorResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConsumeProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/consumeprocessors/${processorName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConsumeProcessorResponse>(await this.execute(params, req, runtime), new $_model.GetConsumeProcessorResponse({}));
  }

  /**
   * Retrieves the details of a consume processor.
   * @returns GetConsumeProcessorResponse
   */
  async getConsumeProcessor(project: string, processorName: string): Promise<$_model.GetConsumeProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConsumeProcessorWithOptions(project, processorName, headers, runtime);
  }

  /**
   * Queries the contextual logs of a specified log.
   * 
   * @remarks
   * ### Usage notes
   * - You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - The values of the pack_id and pack_meta fields are obtained before you query logs. The fields are internal fields, and you can obtain the values by using the debugging feature of your browser in the Simple Log Service console.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                       | Resource                                                                           |
   * | :--------------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreContextLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetContextLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContextLogsResponse
   */
  async getContextLogsWithOptions(project: string, logstore: string, request: $_model.GetContextLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetContextLogsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backLines)) {
      query["back_lines"] = request.backLines;
    }

    if (!$dara.isNull(request.forwardLines)) {
      query["forward_lines"] = request.forwardLines;
    }

    if (!$dara.isNull(request.packId)) {
      query["pack_id"] = request.packId;
    }

    if (!$dara.isNull(request.packMeta)) {
      query["pack_meta"] = request.packMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContextLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}?type=context_log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContextLogsResponse>(await this.execute(params, req, runtime), new $_model.GetContextLogsResponse({}));
  }

  /**
   * Queries the contextual logs of a specified log.
   * 
   * @remarks
   * ### Usage notes
   * - You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - The values of the pack_id and pack_meta fields are obtained before you query logs. The fields are internal fields, and you can obtain the values by using the debugging feature of your browser in the Simple Log Service console.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                       | Resource                                                                           |
   * | :--------------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreContextLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetContextLogsRequest
   * @returns GetContextLogsResponse
   */
  async getContextLogs(project: string, logstore: string, request: $_model.GetContextLogsRequest): Promise<$_model.GetContextLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContextLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Retrieves a cursor based on a specified time.
   * 
   * @remarks
   * ### Description
   * - The host consists of a project name and a Simple Log Service endpoint. You must specify the project name in the host.
   * - The relationship among a cursor, a project, a Logstore, and a shard is as follows:
   *   - A project contains multiple Logstores.
   *   - Each Logstore contains multiple shards.
   *   - A cursor indicates the position of a specific log.
   * 
   * @param request - GetCursorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCursorResponse
   */
  async getCursorWithOptions(project: string, logstore: string, shardId: string, request: $_model.GetCursorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCursorResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCursor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shardId}?type=cursor`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCursorResponse>(await this.execute(params, req, runtime), new $_model.GetCursorResponse({}));
  }

  /**
   * Retrieves a cursor based on a specified time.
   * 
   * @remarks
   * ### Description
   * - The host consists of a project name and a Simple Log Service endpoint. You must specify the project name in the host.
   * - The relationship among a cursor, a project, a Logstore, and a shard is as follows:
   *   - A project contains multiple Logstores.
   *   - Each Logstore contains multiple shards.
   *   - A cursor indicates the position of a specific log.
   * 
   * @param request - GetCursorRequest
   * @returns GetCursorResponse
   */
  async getCursor(project: string, logstore: string, shardId: string, request: $_model.GetCursorRequest): Promise<$_model.GetCursorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  /**
   * Retrieves the server time that corresponds to a cursor.
   * 
   * @remarks
   * ### Description
   * - The host consists of a project name and a Simple Log Service endpoint. You must specify the project in the host.
   * - Create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair that belongs to an Alibaba Cloud account has access permissions on all API operations. Using this AccessKey pair poses a high security threat. For security, we recommend that you create and use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted the permissions to perform operations on Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, the project\\"s region, and the logstore name. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy to grant a RAM user or RAM role the permissions to call this API operation.
   * | Action                | Resource description in an authorization policy                                    |
   * | --------------------- | ---------------------------------------------------------------------------------- |
   * | `log:GetCursorOrData` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetCursorTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCursorTimeResponse
   */
  async getCursorTimeWithOptions(project: string, logstore: string, shardId: string, request: $_model.GetCursorTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCursorTimeResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCursorTime",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shardId}?type=cursor_time`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCursorTimeResponse>(await this.execute(params, req, runtime), new $_model.GetCursorTimeResponse({}));
  }

  /**
   * Retrieves the server time that corresponds to a cursor.
   * 
   * @remarks
   * ### Description
   * - The host consists of a project name and a Simple Log Service endpoint. You must specify the project in the host.
   * - Create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair that belongs to an Alibaba Cloud account has access permissions on all API operations. Using this AccessKey pair poses a high security threat. For security, we recommend that you create and use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted the permissions to perform operations on Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, the project\\"s region, and the logstore name. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy to grant a RAM user or RAM role the permissions to call this API operation.
   * | Action                | Resource description in an authorization policy                                    |
   * | --------------------- | ---------------------------------------------------------------------------------- |
   * | `log:GetCursorOrData` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetCursorTimeRequest
   * @returns GetCursorTimeResponse
   */
  async getCursorTime(project: string, logstore: string, shardId: string, request: $_model.GetCursorTimeRequest): Promise<$_model.GetCursorTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCursorTimeWithOptions(project, logstore, shardId, request, headers, runtime);
  }

  /**
   * Queries a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDashboardResponse
   */
  async getDashboardWithOptions(project: string, dashboardName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDashboardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDashboardResponse>(await this.execute(params, req, runtime), new $_model.GetDashboardResponse({}));
  }

  /**
   * Queries a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns GetDashboardResponse
   */
  async getDashboard(project: string, dashboardName: string): Promise<$_model.GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
   * Retrieves information about a download task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDownloadJobResponse
   */
  async getDownloadJobWithOptions(project: string, downloadJobName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDownloadJobResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDownloadJob",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs/${downloadJobName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDownloadJobResponse>(await this.execute(params, req, runtime), new $_model.GetDownloadJobResponse({}));
  }

  /**
   * Retrieves information about a download task.
   * @returns GetDownloadJobResponse
   */
  async getDownloadJob(project: string, downloadJobName: string): Promise<$_model.GetDownloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadJobWithOptions(project, downloadJobName, headers, runtime);
  }

  /**
   * Retrieves the configuration of a specified extract, transform, and load (ETL) job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetETLResponse
   */
  async getETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetETLResponse>(await this.execute(params, req, runtime), new $_model.GetETLResponse({}));
  }

  /**
   * Retrieves the configuration of a specified extract, transform, and load (ETL) job.
   * @returns GetETLResponse
   */
  async getETL(project: string, etlName: string): Promise<$_model.GetETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Retrieves information about an ES/OpenSearch import job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElasticsearchIngestionResponse
   */
  async getElasticsearchIngestionWithOptions(project: string, esIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetElasticsearchIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${esIngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.GetElasticsearchIngestionResponse({}));
  }

  /**
   * Retrieves information about an ES/OpenSearch import job.
   * @returns GetElasticsearchIngestionResponse
   */
  async getElasticsearchIngestion(project: string, esIngestionName: string): Promise<$_model.GetElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElasticsearchIngestionWithOptions(project, esIngestionName, headers, runtime);
  }

  /**
   * Retrieves a Google Cloud Storage (GCS) file import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGCSIngestionResponse
   */
  async getGCSIngestionWithOptions(project: string, gcsIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGCSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGCSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions/${gcsIngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGCSIngestionResponse>(await this.execute(params, req, runtime), new $_model.GetGCSIngestionResponse({}));
  }

  /**
   * Retrieves a Google Cloud Storage (GCS) file import task.
   * @returns GetGCSIngestionResponse
   */
  async getGCSIngestion(project: string, gcsIngestionName: string): Promise<$_model.GetGCSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGCSIngestionWithOptions(project, gcsIngestionName, headers, runtime);
  }

  /**
   * You can call the GetHistograms operation to query the distribution of logs that meet the search criteria in a specified Logstore.
   * 
   * @remarks
   * ### Interface description
   * - The Host in the request syntax consists of the project name and the Simple Log Service Endpoint. You must specify the project in the Host.
   * - The subintervals in the response are divided consistently. If the requested time range is the same, the subinterval division in the response is also the same.
   * - If the number of logs in a query varies greatly, the Simple Log Service application programming interface (API) cannot predict how many calls are needed to retrieve the full result. You must check the status of the progress member in each response. This status indicates whether to call the operation again to retrieve the final result. Each repeated call consumes the same number of query CUs.
   * - The delay between when a log is written to a Logstore and when it can be queried using the GetHistograms and GetLogs operations varies by log type. Simple Log Service classifies logs into two types based on their timestamps:
   *   - Real-time data: The log timestamp is within the range of (-180 seconds, +900 seconds] relative to the server\\"s current time. For example, if a log\\"s timestamp is UTC 2014-09-25 12:03:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as real-time data. The maximum latency for real-time data to become searchable is 3 seconds. In 99.9% of cases, the data is searchable within 1 second.
   *   - Historical data: The log timestamp is within the range of [-7 × 86400 seconds, -180 seconds) relative to the server\\"s current time. For example, if a log\\"s timestamp is UTC 2014-09-25 12:00:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as historical data. This typically happens during data backfill.
   * > Simple Log Service calculates the difference between the log time (the __time__ field) and the time the server received the log (the __tag__:__receive_time__ field). If the difference is in the range of (-180 seconds, 900 seconds], the data is real-time data. If the difference is in the range of [-7 × 86400 seconds, -180 seconds), the data is historical data.
   * - Simple Log Service provides a Java software development kit (SDK) example for using the GetHistograms query. For more information, see [Use GetHistograms to query log distribution](https://help.aliyun.com/document_detail/462234.html).
   * 
   * @param request - GetHistogramsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHistogramsResponse
   */
  async getHistogramsWithOptions(project: string, logstore: string, request: $_model.GetHistogramsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHistogramsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    if (!$dara.isNull(request.topic)) {
      query["topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHistograms",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index?type=histogram`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetHistogramsResponse>(await this.execute(params, req, runtime), new $_model.GetHistogramsResponse({}));
  }

  /**
   * You can call the GetHistograms operation to query the distribution of logs that meet the search criteria in a specified Logstore.
   * 
   * @remarks
   * ### Interface description
   * - The Host in the request syntax consists of the project name and the Simple Log Service Endpoint. You must specify the project in the Host.
   * - The subintervals in the response are divided consistently. If the requested time range is the same, the subinterval division in the response is also the same.
   * - If the number of logs in a query varies greatly, the Simple Log Service application programming interface (API) cannot predict how many calls are needed to retrieve the full result. You must check the status of the progress member in each response. This status indicates whether to call the operation again to retrieve the final result. Each repeated call consumes the same number of query CUs.
   * - The delay between when a log is written to a Logstore and when it can be queried using the GetHistograms and GetLogs operations varies by log type. Simple Log Service classifies logs into two types based on their timestamps:
   *   - Real-time data: The log timestamp is within the range of (-180 seconds, +900 seconds] relative to the server\\"s current time. For example, if a log\\"s timestamp is UTC 2014-09-25 12:03:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as real-time data. The maximum latency for real-time data to become searchable is 3 seconds. In 99.9% of cases, the data is searchable within 1 second.
   *   - Historical data: The log timestamp is within the range of [-7 × 86400 seconds, -180 seconds) relative to the server\\"s current time. For example, if a log\\"s timestamp is UTC 2014-09-25 12:00:00 and the server receives it at UTC 2014-09-25 12:05:00, the log is processed as historical data. This typically happens during data backfill.
   * > Simple Log Service calculates the difference between the log time (the __time__ field) and the time the server received the log (the __tag__:__receive_time__ field). If the difference is in the range of (-180 seconds, 900 seconds], the data is real-time data. If the difference is in the range of [-7 × 86400 seconds, -180 seconds), the data is historical data.
   * - Simple Log Service provides a Java software development kit (SDK) example for using the GetHistograms query. For more information, see [Use GetHistograms to query log distribution](https://help.aliyun.com/document_detail/462234.html).
   * 
   * @param request - GetHistogramsRequest
   * @returns GetHistogramsResponse
   */
  async getHistograms(project: string, logstore: string, request: $_model.GetHistogramsRequest): Promise<$_model.GetHistogramsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHistogramsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries the index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexResponse
   */
  async getIndexWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexResponse>(await this.execute(params, req, runtime), new $_model.GetIndexResponse({}));
  }

  /**
   * Queries the index of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetIndexResponse
   */
  async getIndex(project: string, logstore: string): Promise<$_model.GetIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Retrieves information about an ingest processor.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIngestProcessorResponse
   */
  async getIngestProcessorWithOptions(project: string, processorName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIngestProcessorResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIngestProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ingestprocessors/${processorName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIngestProcessorResponse>(await this.execute(params, req, runtime), new $_model.GetIngestProcessorResponse({}));
  }

  /**
   * Retrieves information about an ingest processor.
   * @returns GetIngestProcessorResponse
   */
  async getIngestProcessor(project: string, processorName: string): Promise<$_model.GetIngestProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIngestProcessorWithOptions(project, processorName, headers, runtime);
  }

  /**
   * Retrieves the details of a Logstore.
   * 
   * @remarks
   * ### Description
   * The host consists of the project name and the Log Service endpoint.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogStoreResponse
   */
  async getLogStoreWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogStoreResponse>(await this.execute(params, req, runtime), new $_model.GetLogStoreResponse({}));
  }

  /**
   * Retrieves the details of a Logstore.
   * 
   * @remarks
   * ### Description
   * The host consists of the project name and the Log Service endpoint.
   * @returns GetLogStoreResponse
   */
  async getLogStore(project: string, logstore: string): Promise<$_model.GetLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Retrieves the configuration of a Logstore.
   * 
   * @remarks
   * - The `Host` in the request syntax consists of the Project name and the Log Service endpoint.
   * - An AccessKey pair is available. For more information, see [AccessKey](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey of an Alibaba Cloud account has full permissions on all APIs and poses a high security risk. Use a RAM user to make API calls or perform routine operations. Grant the RAM user the required permissions to access Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - The Project name, region, and Logstore name are obtained. For more information, see [Manage Project](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * To grant a RAM user or RAM role the permission to call this operation, add the following Action to a RAM permission policy.
   * | Action                  | Resource                                                                           |
   * | :---------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreConfig` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogStoreConfigResponse
   */
  async getLogStoreConfigWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogStoreConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogStoreConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogStoreConfigResponse>(await this.execute(params, req, runtime), new $_model.GetLogStoreConfigResponse({}));
  }

  /**
   * Retrieves the configuration of a Logstore.
   * 
   * @remarks
   * - The `Host` in the request syntax consists of the Project name and the Log Service endpoint.
   * - An AccessKey pair is available. For more information, see [AccessKey](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey of an Alibaba Cloud account has full permissions on all APIs and poses a high security risk. Use a RAM user to make API calls or perform routine operations. Grant the RAM user the required permissions to access Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - The Project name, region, and Logstore name are obtained. For more information, see [Manage Project](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * To grant a RAM user or RAM role the permission to call this operation, add the following Action to a RAM permission policy.
   * | Action                  | Resource                                                                           |
   * | :---------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreConfig` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * @returns GetLogStoreConfigResponse
   */
  async getLogStoreConfig(project: string, logstore: string): Promise<$_model.GetLogStoreConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreConfigWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries the billing mode of a Logstore.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogStoreMeteringModeResponse
   */
  async getLogStoreMeteringModeWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogStoreMeteringModeResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/meteringmode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogStoreMeteringModeResponse>(await this.execute(params, req, runtime), new $_model.GetLogStoreMeteringModeResponse({}));
  }

  /**
   * Queries the billing mode of a Logstore.
   * @returns GetLogStoreMeteringModeResponse
   */
  async getLogStoreMeteringMode(project: string, logstore: string): Promise<$_model.GetLogStoreMeteringModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreMeteringModeWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries the service log configuration of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoggingResponse
   */
  async getLoggingWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLoggingResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLoggingResponse>(await this.execute(params, req, runtime), new $_model.GetLoggingResponse({}));
  }

  /**
   * Queries the service log configuration of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetLoggingResponse
   */
  async getLogging(project: string): Promise<$_model.GetLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLoggingWithOptions(project, headers, runtime);
  }

  /**
   * Queries log data from a Logstore in the specified project.
   * 
   * @remarks
   * ###
   * > Simple Log Service supports scheduled SQL jobs. For details, see [Create a scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. Specify the project name in the Host.
   * - Create and obtain an AccessKey pair. For details, see [AccessKey pair](https://help.aliyun.com/document_detail/2766629.html).
   * Create and use a RAM user to make API calls or perform routine O\\&M. Using an Alibaba Cloud account AccessKey pair grants access to all APIs and poses a high security risk. Ensure the RAM user has the required permissions for Simple Log Service resources. For details, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name for the logs to query. See [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Simple Log Service imposes limits on log queries. Design appropriate query and analytic statements and set a reasonable time range. See [Log query limits](https://help.aliyun.com/document_detail/43772.html) and [Log analysis limits](https://help.aliyun.com/document_detail/53608.html).
   * - Configure indexes before querying logs. See [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - When the number of matching logs varies significantly, the API cannot predict how many calls are needed to retrieve the complete result. Check the `x-log-progress` header in each response to determine whether to repeat the call. Each repeated call consumes the same number of query capacity units (CUs).
   * - After a log is written to a Logstore, the latency before it becomes queryable through the GetHistograms and GetLogs operations depends on the log type. Simple Log Service classifies logs into two types based on their timestamps:
   *   - Real-time data: The log timestamp falls within (-180 seconds, 900 seconds] relative to the current server time. For example, if a log is generated at UTC 2014-09-25 12:03:00 and is received by the server at UTC 2014-09-25 12:05:00, the log is classified as real-time data. This is typical in normal scenarios. Real-time data becomes queryable in about 3 seconds.
   *   - Historical data: The log timestamp falls within [-7 x 86,400 seconds, -180 seconds) relative to the current server time. For example, if a log is generated at UTC 2014-09-25 12:00:00 and is received by the server at UTC 2014-09-25 12:05:00, the log is classified as historical data. This is typical in data backfill scenarios.
   * > Simple Log Service calculates the difference between the log time (the __time__ field) and the server receipt time (the __tag__: **receive_time** field). If the difference falls within (-180 seconds, 900 seconds], the log is real-time data. If the difference falls within [-7 x 86,400 seconds, -180 seconds), the log is historical data.
   * - Simple Log Service provides Java and Python SDK examples for the GetLogs operation. See [GetLogs examples for Java](https://help.aliyun.com/document_detail/407683.html) and [GetLogs examples for Python](https://help.aliyun.com/document_detail/407684.html).
   * ### Authorization
   * The following table describes the authorization information required for this operation. Add this information to the Action element of a RAM access policy statement to grant RAM users or RAM roles the permission to call this operation.
   * | Action                | Resource                                                                           |
   * | :-------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogsResponse
   */
  async getLogsWithOptions(project: string, logstore: string, request: $_model.GetLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      query["from"] = request.from;
    }

    if (!$dara.isNull(request.line)) {
      query["line"] = request.line;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.powerSql)) {
      query["powerSql"] = request.powerSql;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.reverse)) {
      query["reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.to)) {
      query["to"] = request.to;
    }

    if (!$dara.isNull(request.topic)) {
      query["topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}?type=log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetLogsResponse>(await this.execute(params, req, runtime), new $_model.GetLogsResponse({}));
  }

  /**
   * Queries log data from a Logstore in the specified project.
   * 
   * @remarks
   * ###
   * > Simple Log Service supports scheduled SQL jobs. For details, see [Create a scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. Specify the project name in the Host.
   * - Create and obtain an AccessKey pair. For details, see [AccessKey pair](https://help.aliyun.com/document_detail/2766629.html).
   * Create and use a RAM user to make API calls or perform routine O\\&M. Using an Alibaba Cloud account AccessKey pair grants access to all APIs and poses a high security risk. Ensure the RAM user has the required permissions for Simple Log Service resources. For details, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name for the logs to query. See [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Simple Log Service imposes limits on log queries. Design appropriate query and analytic statements and set a reasonable time range. See [Log query limits](https://help.aliyun.com/document_detail/43772.html) and [Log analysis limits](https://help.aliyun.com/document_detail/53608.html).
   * - Configure indexes before querying logs. See [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - When the number of matching logs varies significantly, the API cannot predict how many calls are needed to retrieve the complete result. Check the `x-log-progress` header in each response to determine whether to repeat the call. Each repeated call consumes the same number of query capacity units (CUs).
   * - After a log is written to a Logstore, the latency before it becomes queryable through the GetHistograms and GetLogs operations depends on the log type. Simple Log Service classifies logs into two types based on their timestamps:
   *   - Real-time data: The log timestamp falls within (-180 seconds, 900 seconds] relative to the current server time. For example, if a log is generated at UTC 2014-09-25 12:03:00 and is received by the server at UTC 2014-09-25 12:05:00, the log is classified as real-time data. This is typical in normal scenarios. Real-time data becomes queryable in about 3 seconds.
   *   - Historical data: The log timestamp falls within [-7 x 86,400 seconds, -180 seconds) relative to the current server time. For example, if a log is generated at UTC 2014-09-25 12:00:00 and is received by the server at UTC 2014-09-25 12:05:00, the log is classified as historical data. This is typical in data backfill scenarios.
   * > Simple Log Service calculates the difference between the log time (the __time__ field) and the server receipt time (the __tag__: **receive_time** field). If the difference falls within (-180 seconds, 900 seconds], the log is real-time data. If the difference falls within [-7 x 86,400 seconds, -180 seconds), the log is historical data.
   * - Simple Log Service provides Java and Python SDK examples for the GetLogs operation. See [GetLogs examples for Java](https://help.aliyun.com/document_detail/407683.html) and [GetLogs examples for Python](https://help.aliyun.com/document_detail/407684.html).
   * ### Authorization
   * The following table describes the authorization information required for this operation. Add this information to the Action element of a RAM access policy statement to grant RAM users or RAM roles the permission to call this operation.
   * | Action                | Resource                                                                           |
   * | :-------------------- | :--------------------------------------------------------------------------------- |
   * | `log:GetLogStoreLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - GetLogsRequest
   * @returns GetLogsResponse
   */
  async getLogs(project: string, logstore: string, request: $_model.GetLogsRequest): Promise<$_model.GetLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries raw logs from a specified Logstore in a project. The response contains raw logs within a specified time range and is compressed for transmission.
   * 
   * @remarks
   * - The Simple Log Service software development kit (SDK) is available for Go, Java, and Python. You can also call all OpenAPI operations directly.
   * - Specify a compression method when you call this operation. Available compression algorithms depend on your programming language. For more information, see the Accept-Encoding request parameter.
   * - For more information, see [GetLogs](https://help.aliyun.com/document_detail/2771313.html).
   * ### Permissions
   * The following table lists the permissions required to call this API operation. Add the action to a RAM policy statement to grant a RAM user or RAM role permission to call this operation.
   * | Action                | Resource in an authorization policy                       |
   * | :-------------------- | :-------------------------------------------------------- |
   * | `log:GetLogStoreLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - GetLogsV2Request
   * @param headers - GetLogsV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogsV2Response
   */
  async getLogsV2WithOptions(project: string, logstore: string, request: $_model.GetLogsV2Request, headers: $_model.GetLogsV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogsV2Response> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.forward)) {
      body["forward"] = request.forward;
    }

    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.highlight)) {
      body["highlight"] = request.highlight;
    }

    if (!$dara.isNull(request.isAccurate)) {
      body["isAccurate"] = request.isAccurate;
    }

    if (!$dara.isNull(request.line)) {
      body["line"] = request.line;
    }

    if (!$dara.isNull(request.offset)) {
      body["offset"] = request.offset;
    }

    if (!$dara.isNull(request.powerSql)) {
      body["powerSql"] = request.powerSql;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.reverse)) {
      body["reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.session)) {
      body["session"] = request.session;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["Accept-Encoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogsV2",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/logs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogsV2Response>(await this.execute(params, req, runtime), new $_model.GetLogsV2Response({}));
  }

  /**
   * Queries raw logs from a specified Logstore in a project. The response contains raw logs within a specified time range and is compressed for transmission.
   * 
   * @remarks
   * - The Simple Log Service software development kit (SDK) is available for Go, Java, and Python. You can also call all OpenAPI operations directly.
   * - Specify a compression method when you call this operation. Available compression algorithms depend on your programming language. For more information, see the Accept-Encoding request parameter.
   * - For more information, see [GetLogs](https://help.aliyun.com/document_detail/2771313.html).
   * ### Permissions
   * The following table lists the permissions required to call this API operation. Add the action to a RAM policy statement to grant a RAM user or RAM role permission to call this operation.
   * | Action                | Resource in an authorization policy                       |
   * | :-------------------- | :-------------------------------------------------------- |
   * | `log:GetLogStoreLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - GetLogsV2Request
   * @returns GetLogsV2Response
   */
  async getLogsV2(project: string, logstore: string, request: $_model.GetLogsV2Request): Promise<$_model.GetLogsV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetLogsV2Headers({ });
    return await this.getLogsV2WithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Queries the information about a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLogtailPipelineConfigResponse
   */
  async getLogtailPipelineConfigWithOptions(project: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLogtailPipelineConfigResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new $_model.GetLogtailPipelineConfigResponse({}));
  }

  /**
   * Queries the information about a Logtail pipeline configuration.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
   * @returns GetLogtailPipelineConfigResponse
   */
  async getLogtailPipelineConfig(project: string, configName: string): Promise<$_model.GetLogtailPipelineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogtailPipelineConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Alibaba Cloud Simple Log Service (SLS) provides intelligent analysis for data such as logs, metrics, and traces. You can call models to obtain analysis results directly. Its main features include Named Entity Recognition (NER) for log data, anomaly detection for time series data, and root cause analysis for high-latency trace spans.
   * 
   * @remarks
   * This API endpoint is available only in the China (Shanghai) and Singapore regions. The following basic permissions are required:
   * ```
   * {
   *     "Version": "1",
   *     "Statement": [
   *         {
   *             "Action": [
   *                 "log:Get*"
   *             ],
   *             "Resource": [
   *                 "acs:log:*:*:mlservice/sls_builtin_*"
   *             ],
   *             "Effect": "Allow"
   *         }
   *     ]
   * }
   * ```
   * 
   * @param request - GetMLServiceResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMLServiceResultsResponse
   */
  async getMLServiceResultsWithOptions(serviceName: string, request: $_model.GetMLServiceResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMLServiceResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowBuiltin)) {
      query["allowBuiltin"] = request.allowBuiltin;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMLServiceResults",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/service/${serviceName}/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMLServiceResultsResponse>(await this.execute(params, req, runtime), new $_model.GetMLServiceResultsResponse({}));
  }

  /**
   * Alibaba Cloud Simple Log Service (SLS) provides intelligent analysis for data such as logs, metrics, and traces. You can call models to obtain analysis results directly. Its main features include Named Entity Recognition (NER) for log data, anomaly detection for time series data, and root cause analysis for high-latency trace spans.
   * 
   * @remarks
   * This API endpoint is available only in the China (Shanghai) and Singapore regions. The following basic permissions are required:
   * ```
   * {
   *     "Version": "1",
   *     "Statement": [
   *         {
   *             "Action": [
   *                 "log:Get*"
   *             ],
   *             "Resource": [
   *                 "acs:log:*:*:mlservice/sls_builtin_*"
   *             ],
   *             "Effect": "Allow"
   *         }
   *     ]
   * }
   * ```
   * 
   * @param request - GetMLServiceResultsRequest
   * @returns GetMLServiceResultsResponse
   */
  async getMLServiceResults(serviceName: string, request: $_model.GetMLServiceResultsRequest): Promise<$_model.GetMLServiceResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMLServiceResultsWithOptions(serviceName, request, headers, runtime);
  }

  /**
   * Gets the details of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMachineGroupResponse
   */
  async getMachineGroupWithOptions(project: string, machineGroup: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.GetMachineGroupResponse({}));
  }

  /**
   * Gets the details of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetMachineGroupResponse
   */
  async getMachineGroup(project: string, machineGroup: string): Promise<$_model.GetMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(project, machineGroup, headers, runtime);
  }

  /**
   * Retrieve a materialized view.
   * 
   * @param request - GetMaterializedViewRequest
   * @param headers - GetMaterializedViewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMaterializedViewResponse
   */
  async getMaterializedViewWithOptions(project: string, name: string, request: $_model.GetMaterializedViewRequest, headers: $_model.GetMaterializedViewHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMaterializedViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.returnStatus)) {
      query["returnStatus"] = request.returnStatus;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.contentType)) {
      realHeaders["Content-Type"] = String(headers.contentType);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMaterializedView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMaterializedViewResponse>(await this.execute(params, req, runtime), new $_model.GetMaterializedViewResponse({}));
  }

  /**
   * Retrieve a materialized view.
   * 
   * @param request - GetMaterializedViewRequest
   * @returns GetMaterializedViewResponse
   */
  async getMaterializedView(project: string, name: string, request: $_model.GetMaterializedViewRequest): Promise<$_model.GetMaterializedViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMaterializedViewHeaders({ });
    return await this.getMaterializedViewWithOptions(project, name, request, headers, runtime);
  }

  /**
   * Queries a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMaxComputeExportResponse
   */
  async getMaxComputeExportWithOptions(project: string, mcExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMaxComputeExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports/${mcExportName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.GetMaxComputeExportResponse({}));
  }

  /**
   * Queries a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns GetMaxComputeExportResponse
   */
  async getMaxComputeExport(project: string, mcExportName: string): Promise<$_model.GetMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * Queries a Metricstore.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html). This operation queries only the configuration of a Metricstore. To query the metric data, see [Query and analyze data](https://help.aliyun.com/document_detail/174968.html) and [GetLogsV2](https://help.aliyun.com/document_detail/2771318.html).
   * - You must specify an existing Metricstore.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify the project in the Host.
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full access permissions to all API operations. This poses a high security threat. For security, we recommend that you use a RAM user for API access or routine O\\&M. Grant the RAM user the required permissions to operate Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the name and region of the project that contains the Metricstore. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores or Metricstores in a project.
   * - Metrics are deleted after their retention period expires.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricStoreResponse
   */
  async getMetricStoreWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetricStoreResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetricStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetricStoreResponse>(await this.execute(params, req, runtime), new $_model.GetMetricStoreResponse({}));
  }

  /**
   * Queries a Metricstore.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html). This operation queries only the configuration of a Metricstore. To query the metric data, see [Query and analyze data](https://help.aliyun.com/document_detail/174968.html) and [GetLogsV2](https://help.aliyun.com/document_detail/2771318.html).
   * - You must specify an existing Metricstore.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify the project in the Host.
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full access permissions to all API operations. This poses a high security threat. For security, we recommend that you use a RAM user for API access or routine O\\&M. Grant the RAM user the required permissions to operate Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the name and region of the project that contains the Metricstore. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores or Metricstores in a project.
   * - Metrics are deleted after their retention period expires.
   * @returns GetMetricStoreResponse
   */
  async getMetricStore(project: string, name: string): Promise<$_model.GetMetricStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricStoreWithOptions(project, name, headers, runtime);
  }

  /**
   * Queries the billing mode of a Metricstore.
   * 
   * @remarks
   * MetricStore supports two billing modes: [pay-by-feature](https://help.aliyun.com/document_detail/48220.html) and [pay-by-write-traffic](https://help.aliyun.com/document_detail/2365756.html).
   * - You must specify an existing MetricStore when you call this operation.
   * - In the request syntax, Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Before you call this operation, make sure that you have obtained the project name and region of the logs. For more information, see[Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 200 Logstores or MetricStores in a project.
   * - When metric data reaches the retention period that you configured, the data is deleted.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricStoreMeteringModeResponse
   */
  async getMetricStoreMeteringModeWithOptions(project: string, metricStore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetricStoreMeteringModeResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetricStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${metricStore}/meteringmode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetricStoreMeteringModeResponse>(await this.execute(params, req, runtime), new $_model.GetMetricStoreMeteringModeResponse({}));
  }

  /**
   * Queries the billing mode of a Metricstore.
   * 
   * @remarks
   * MetricStore supports two billing modes: [pay-by-feature](https://help.aliyun.com/document_detail/48220.html) and [pay-by-write-traffic](https://help.aliyun.com/document_detail/2365756.html).
   * - You must specify an existing MetricStore when you call this operation.
   * - In the request syntax, Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Before you call this operation, make sure that you have obtained the project name and region of the logs. For more information, see[Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create up to 200 Logstores or MetricStores in a project.
   * - When metric data reaches the retention period that you configured, the data is deleted.
   * @returns GetMetricStoreMeteringModeResponse
   */
  async getMetricStoreMeteringMode(project: string, metricStore: string): Promise<$_model.GetMetricStoreMeteringModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricStoreMeteringModeWithOptions(project, metricStore, headers, runtime);
  }

  /**
   * Retrieves the specified OSS data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSExportResponse
   */
  async getOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSExportResponse>(await this.execute(params, req, runtime), new $_model.GetOSSExportResponse({}));
  }

  /**
   * Retrieves the specified OSS data shipping job.
   * @returns GetOSSExportResponse
   */
  async getOSSExport(project: string, ossExportName: string): Promise<$_model.GetOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Retrieves the details of a specified OSS-HDFS delivery job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSHDFSExportResponse
   */
  async getOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.GetOSSHDFSExportResponse({}));
  }

  /**
   * Retrieves the details of a specified OSS-HDFS delivery job.
   * @returns GetOSSHDFSExportResponse
   */
  async getOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.GetOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Retrieves a specified OSS import job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOSSIngestionResponse
   */
  async getOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.GetOSSIngestionResponse({}));
  }

  /**
   * Retrieves a specified OSS import job.
   * @returns GetOSSIngestionResponse
   */
  async getOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.GetOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Gets the details of a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.execute(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Gets the details of a project.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetProjectResponse
   */
  async getProject(project: string): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(project, headers, runtime);
  }

  /**
   * Queries logs in a project. You can use this operation to query logs at the project level.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * - You must set query to a standard SQL statement.
   * - You must specify a Logstore in the FROM clause of an SQL statement. A Logstore can be used as an SQL table.
   * - You must specify a time range in an SQL statement by using the __date__ or __time__ parameter. The value of the __date__ parameter is a timestamp. The value of the __time__ parameter is an integer, and the unit of the value is seconds.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                  |
   * | :------------------- | :-------------------------------------------------------- |
   * | `log:GetProjectLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - GetProjectLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectLogsResponse
   */
  async getProjectLogsWithOptions(project: string, request: $_model.GetProjectLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectLogsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.powerSql)) {
      query["powerSql"] = request.powerSql;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetProjectLogsResponse>(await this.execute(params, req, runtime), new $_model.GetProjectLogsResponse({}));
  }

  /**
   * Queries logs in a project. You can use this operation to query logs at the project level.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * - You must set query to a standard SQL statement.
   * - You must specify a Logstore in the FROM clause of an SQL statement. A Logstore can be used as an SQL table.
   * - You must specify a time range in an SQL statement by using the __date__ or __time__ parameter. The value of the __date__ parameter is a timestamp. The value of the __time__ parameter is an integer, and the unit of the value is seconds.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                  |
   * | :------------------- | :-------------------------------------------------------- |
   * | `log:GetProjectLogs` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - GetProjectLogsRequest
   * @returns GetProjectLogsResponse
   */
  async getProjectLogs(project: string, request: $_model.GetProjectLogsRequest): Promise<$_model.GetProjectLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectLogsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectPolicyResponse
   */
  async getProjectPolicyWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectPolicyResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.GetProjectPolicyResponse>(await this.execute(params, req, runtime), new $_model.GetProjectPolicyResponse({}));
  }

  /**
   * Queries a project policy.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns GetProjectPolicyResponse
   */
  async getProjectPolicy(project: string): Promise<$_model.GetProjectPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Retrieves information about an S3 import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetS3IngestionResponse
   */
  async getS3IngestionWithOptions(project: string, s3IngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetS3IngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetS3Ingestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/s3ingestions/${s3IngestionName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetS3IngestionResponse>(await this.execute(params, req, runtime), new $_model.GetS3IngestionResponse({}));
  }

  /**
   * Retrieves information about an S3 import task.
   * @returns GetS3IngestionResponse
   */
  async getS3Ingestion(project: string, s3IngestionName: string): Promise<$_model.GetS3IngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getS3IngestionWithOptions(project, s3IngestionName, headers, runtime);
  }

  /**
   * Queries a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - You can call the ListSavedSearch operation to query the name of a saved search.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                                                 |
   * | :------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:GetSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavedSearchResponse
   */
  async getSavedSearchWithOptions(project: string, savedsearchName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavedSearchResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavedSearchResponse>(await this.execute(params, req, runtime), new $_model.GetSavedSearchResponse({}));
  }

  /**
   * Queries a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - You can call the ListSavedSearch operation to query the name of a saved search.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                                                 |
   * | :------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:GetSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * @returns GetSavedSearchResponse
   */
  async getSavedSearch(project: string, savedsearchName: string): Promise<$_model.GetSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  /**
   * Retrieves the specified Scheduled SQL job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledSQLResponse
   */
  async getScheduledSQLWithOptions(project: string, scheduledSQLName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledSQLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.GetScheduledSQLResponse({}));
  }

  /**
   * Retrieves the specified Scheduled SQL job.
   * @returns GetScheduledSQLResponse
   */
  async getScheduledSQL(project: string, scheduledSQLName: string): Promise<$_model.GetScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * Call the GetSlsService operation to retrieve the activation status of Simple Log Service. The endpoint must be China (Shanghai) or Singapore.
   * 
   * @remarks
   * This operation requires an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account grants full access to all APIs. This poses a high security threat. Create and use a RAM user for API access or routine operations and maintenance (O\\&M). The RAM user must have permissions to operate Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSlsServiceResponse
   */
  async getSlsServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSlsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSlsService",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/slsservice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSlsServiceResponse>(await this.execute(params, req, runtime), new $_model.GetSlsServiceResponse({}));
  }

  /**
   * Call the GetSlsService operation to retrieve the activation status of Simple Log Service. The endpoint must be China (Shanghai) or Singapore.
   * 
   * @remarks
   * This operation requires an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account grants full access to all APIs. This poses a high security threat. Create and use a RAM user for API access or routine operations and maintenance (O\\&M). The RAM user must have permissions to operate Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * @returns GetSlsServiceResponse
   */
  async getSlsService(): Promise<$_model.GetSlsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSlsServiceWithOptions(headers, runtime);
  }

  /**
   * Gets information about the Dedicated SQL instance of a project, such as the number of compute units (CUs) and whether the Dedicated SQL instance is enabled by default. Before you call this operation, you must create a Dedicated SQL instance by calling the CreateSqlInstance or UpdateSqlInstance operation.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstanceWithOptions(project: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlInstanceResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetSqlInstanceResponse>(await this.execute(params, req, runtime), new $_model.GetSqlInstanceResponse({}));
  }

  /**
   * Gets information about the Dedicated SQL instance of a project, such as the number of compute units (CUs) and whether the Dedicated SQL instance is enabled by default. Before you call this operation, you must create a Dedicated SQL instance by calling the CreateSqlInstance or UpdateSqlInstance operation.
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstance(project: string): Promise<$_model.GetSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlInstanceWithOptions(project, headers, runtime);
  }

  /**
   * Queries the configurations of a dataset by using the name of the dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoreViewResponse
   */
  async getStoreViewWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStoreViewResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStoreViewResponse>(await this.execute(params, req, runtime), new $_model.GetStoreViewResponse({}));
  }

  /**
   * Queries the configurations of a dataset by using the name of the dataset.
   * @returns GetStoreViewResponse
   */
  async getStoreView(project: string, name: string): Promise<$_model.GetStoreViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoreViewWithOptions(project, name, headers, runtime);
  }

  /**
   * Queries the indexes of a dataset by using the name of the dataset. Only datasets of the logstore type are supported.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStoreViewIndexResponse
   */
  async getStoreViewIndexWithOptions(project: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStoreViewIndexResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStoreViewIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}/index`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStoreViewIndexResponse>(await this.execute(params, req, runtime), new $_model.GetStoreViewIndexResponse({}));
  }

  /**
   * Queries the indexes of a dataset by using the name of the dataset. Only datasets of the logstore type are supported.
   * @returns GetStoreViewIndexResponse
   */
  async getStoreViewIndex(project: string, name: string): Promise<$_model.GetStoreViewIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStoreViewIndexWithOptions(project, name, headers, runtime);
  }

  /**
   * This operation lists process-level configurations.
   * 
   * @remarks
   * Retrieves a list of process-level configurations.
   * 
   * @param request - ListAgentInstanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentInstanceConfigsResponse
   */
  async listAgentInstanceConfigsWithOptions(request: $_model.ListAgentInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentInstanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      query["configType"] = request.configType;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentInstanceConfigs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/agentinstanceconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAgentInstanceConfigsResponse>(await this.execute(params, req, runtime), new $_model.ListAgentInstanceConfigsResponse({}));
  }

  /**
   * This operation lists process-level configurations.
   * 
   * @remarks
   * Retrieves a list of process-level configurations.
   * 
   * @param request - ListAgentInstanceConfigsRequest
   * @returns ListAgentInstanceConfigsResponse
   */
  async listAgentInstanceConfigs(request: $_model.ListAgentInstanceConfigsRequest): Promise<$_model.ListAgentInstanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentInstanceConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the AI tools provided by the observability service, including Copilot capabilities for various services.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAiToolsResponse
   */
  async listAiToolsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAiToolsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAiTools",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/tool/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListAiToolsResponse>(await this.execute(params, req, runtime), new $_model.ListAiToolsResponse({}));
  }

  /**
   * Lists the AI tools provided by the observability service, including Copilot capabilities for various services.
   * 
   * @remarks
   * The endpoint for this API is available only in the China (Shanghai) and Singapore regions.
   * @returns ListAiToolsResponse
   */
  async listAiTools(): Promise<$_model.ListAiToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAiToolsWithOptions(headers, runtime);
  }

  /**
   * Lists the alert rules in a specified project.
   * 
   * @param request - ListAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertsResponse
   */
  async listAlertsWithOptions(project: string, request: $_model.ListAlertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlerts",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertsResponse>(await this.execute(params, req, runtime), new $_model.ListAlertsResponse({}));
  }

  /**
   * Lists the alert rules in a specified project.
   * 
   * @param request - ListAlertsRequest
   * @returns ListAlertsResponse
   */
  async listAlerts(project: string, request: $_model.ListAlertsRequest): Promise<$_model.ListAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the data records in a specified dataset.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationDataResponse
   */
  async listAnnotationDataWithOptions(datasetId: string, request: $_model.ListAnnotationDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnnotationDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnnotationDataResponse>(await this.execute(params, req, runtime), new $_model.ListAnnotationDataResponse({}));
  }

  /**
   * Lists the data records in a specified dataset.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationDataRequest
   * @returns ListAnnotationDataResponse
   */
  async listAnnotationData(datasetId: string, request: $_model.ListAnnotationDataRequest): Promise<$_model.ListAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Returns a list of dataset structs.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationDataSetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationDataSetsResponse
   */
  async listAnnotationDataSetsWithOptions(request: $_model.ListAnnotationDataSetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnnotationDataSetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnnotationDataSets",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnnotationDataSetsResponse>(await this.execute(params, req, runtime), new $_model.ListAnnotationDataSetsResponse({}));
  }

  /**
   * Returns a list of dataset structs.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationDataSetsRequest
   * @returns ListAnnotationDataSetsResponse
   */
  async listAnnotationDataSets(request: $_model.ListAnnotationDataSetsRequest): Promise<$_model.ListAnnotationDataSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationDataSetsWithOptions(request, headers, runtime);
  }

  /**
   * Lists annotation label tables.
   * 
   * @remarks
   * This API operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnnotationLabelsResponse
   */
  async listAnnotationLabelsWithOptions(request: $_model.ListAnnotationLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnnotationLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnnotationLabels",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnnotationLabelsResponse>(await this.execute(params, req, runtime), new $_model.ListAnnotationLabelsResponse({}));
  }

  /**
   * Lists annotation label tables.
   * 
   * @remarks
   * This API operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - ListAnnotationLabelsRequest
   * @returns ListAnnotationLabelsResponse
   */
  async listAnnotationLabels(request: $_model.ListAnnotationLabelsRequest): Promise<$_model.ListAnnotationLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnnotationLabelsWithOptions(request, headers, runtime);
  }

  /**
   * Lists Azure Blob ingestion tasks.
   * 
   * @param request - ListAzureBlobIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAzureBlobIngestionResponse
   */
  async listAzureBlobIngestionWithOptions(project: string, request: $_model.ListAzureBlobIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAzureBlobIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.ListAzureBlobIngestionResponse({}));
  }

  /**
   * Lists Azure Blob ingestion tasks.
   * 
   * @param request - ListAzureBlobIngestionRequest
   * @returns ListAzureBlobIngestionResponse
   */
  async listAzureBlobIngestion(project: string, request: $_model.ListAzureBlobIngestionRequest): Promise<$_model.ListAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAzureBlobIngestionWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the collection rules for logs from Alibaba Cloud services.
   * 
   * @remarks
   * This API operation is available only at the endpoints in the following regions: China (Shanghai), Singapore, and Heyuan Automotive Compliance Cloud (cn-heyuan-acdr-1).
   * 
   * @param request - ListCollectionPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectionPoliciesResponse
   */
  async listCollectionPoliciesWithOptions(request: $_model.ListCollectionPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCollectionPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.centralProject)) {
      query["centralProject"] = request.centralProject;
    }

    if (!$dara.isNull(request.dataCode)) {
      query["dataCode"] = request.dataCode;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCollectionPolicies",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCollectionPoliciesResponse>(await this.execute(params, req, runtime), new $_model.ListCollectionPoliciesResponse({}));
  }

  /**
   * Lists the collection rules for logs from Alibaba Cloud services.
   * 
   * @remarks
   * This API operation is available only at the endpoints in the following regions: China (Shanghai), Singapore, and Heyuan Automotive Compliance Cloud (cn-heyuan-acdr-1).
   * 
   * @param request - ListCollectionPoliciesRequest
   * @returns ListCollectionPoliciesResponse
   */
  async listCollectionPolicies(request: $_model.ListCollectionPoliciesRequest): Promise<$_model.ListCollectionPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCollectionPoliciesWithOptions(request, headers, runtime);
  }

  /**
   * Queries all Logtail configurations in a project.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigResponse
   */
  async listConfigWithOptions(project: string, request: $_model.ListConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configName)) {
      query["configName"] = request.configName;
    }

    if (!$dara.isNull(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigResponse>(await this.execute(params, req, runtime), new $_model.ListConfigResponse({}));
  }

  /**
   * Queries all Logtail configurations in a project.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListConfigRequest
   * @returns ListConfigResponse
   */
  async listConfig(project: string, request: $_model.ListConfigRequest): Promise<$_model.ListConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Retrieves a list of consume processors that match the specified parameters.
   * 
   * @param request - ListConsumeProcessorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumeProcessorsResponse
   */
  async listConsumeProcessorsWithOptions(project: string, request: $_model.ListConsumeProcessorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumeProcessorsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.processorName)) {
      query["processorName"] = request.processorName;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumeProcessors",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/consumeprocessors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumeProcessorsResponse>(await this.execute(params, req, runtime), new $_model.ListConsumeProcessorsResponse({}));
  }

  /**
   * Retrieves a list of consume processors that match the specified parameters.
   * 
   * @param request - ListConsumeProcessorsRequest
   * @returns ListConsumeProcessorsResponse
   */
  async listConsumeProcessors(project: string, request: $_model.ListConsumeProcessorsRequest): Promise<$_model.ListConsumeProcessorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumeProcessorsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries all consumer groups of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                           |
   * | :---------------------- | :------------------------------------------------------------------------------------------------- |
   * | `log:ListConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*` |
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumerGroupResponse
   */
  async listConsumerGroupWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumerGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListConsumerGroupResponse>(await this.execute(params, req, runtime), new $_model.ListConsumerGroupResponse({}));
  }

  /**
   * Queries all consumer groups of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                           |
   * | :---------------------- | :------------------------------------------------------------------------------------------------- |
   * | `log:ListConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*` |
   * @returns ListConsumerGroupResponse
   */
  async listConsumerGroup(project: string, logstore: string): Promise<$_model.ListConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries dashboards.
   * 
   * @remarks
   * ### Description
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. You must specify the project name in the Host.
   * - Create an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has the permissions to call all API operations. This is a high-risk practice. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project that contains the logs you want to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param tmpReq - ListDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardResponse
   */
  async listDashboardWithOptions(project: string, tmpReq: $_model.ListDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDashboardResponse> {
    tmpReq.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let request = new $_model.ListDashboardShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dashboardName)) {
      query["dashboardName"] = request.dashboardName;
    }

    if (!$dara.isNull(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDashboardResponse>(await this.execute(params, req, runtime), new $_model.ListDashboardResponse({}));
  }

  /**
   * Queries dashboards.
   * 
   * @remarks
   * ### Description
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. You must specify the project name in the Host.
   * - Create an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has the permissions to call all API operations. This is a high-risk practice. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project that contains the logs you want to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListDashboardRequest
   * @returns ListDashboardResponse
   */
  async listDashboard(project: string, request: $_model.ListDashboardRequest): Promise<$_model.ListDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDashboardWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the custom domain names that are bound to projects.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - Only one custom domain name can be bound to each project.
   * 
   * @param request - ListDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDomainsResponse
   */
  async listDomainsWithOptions(project: string, request: $_model.ListDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDomainsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDomains",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDomainsResponse>(await this.execute(params, req, runtime), new $_model.ListDomainsResponse({}));
  }

  /**
   * Queries the custom domain names that are bound to projects.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - Only one custom domain name can be bound to each project.
   * 
   * @param request - ListDomainsRequest
   * @returns ListDomainsResponse
   */
  async listDomains(project: string, request: $_model.ListDomainsRequest): Promise<$_model.ListDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDomainsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the log download jobs in a specified project.
   * 
   * @param request - ListDownloadJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDownloadJobsResponse
   */
  async listDownloadJobsWithOptions(project: string, request: $_model.ListDownloadJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDownloadJobsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDownloadJobs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/downloadjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDownloadJobsResponse>(await this.execute(params, req, runtime), new $_model.ListDownloadJobsResponse({}));
  }

  /**
   * Lists the log download jobs in a specified project.
   * 
   * @param request - ListDownloadJobsRequest
   * @returns ListDownloadJobsResponse
   */
  async listDownloadJobs(project: string, request: $_model.ListDownloadJobsRequest): Promise<$_model.ListDownloadJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDownloadJobsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the data transformation jobs in a project.
   * 
   * @param request - ListETLsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListETLsResponse
   */
  async listETLsWithOptions(project: string, request: $_model.ListETLsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListETLsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListETLs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListETLsResponse>(await this.execute(params, req, runtime), new $_model.ListETLsResponse({}));
  }

  /**
   * Lists the data transformation jobs in a project.
   * 
   * @param request - ListETLsRequest
   * @returns ListETLsResponse
   */
  async listETLs(project: string, request: $_model.ListETLsRequest): Promise<$_model.ListETLsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listETLsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the Elasticsearch and OpenSearch ingestion jobs.
   * 
   * @param request - ListElasticsearchIngestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListElasticsearchIngestionsResponse
   */
  async listElasticsearchIngestionsWithOptions(project: string, request: $_model.ListElasticsearchIngestionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListElasticsearchIngestionsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListElasticsearchIngestions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListElasticsearchIngestionsResponse>(await this.execute(params, req, runtime), new $_model.ListElasticsearchIngestionsResponse({}));
  }

  /**
   * Lists the Elasticsearch and OpenSearch ingestion jobs.
   * 
   * @param request - ListElasticsearchIngestionsRequest
   * @returns ListElasticsearchIngestionsResponse
   */
  async listElasticsearchIngestions(project: string, request: $_model.ListElasticsearchIngestionsRequest): Promise<$_model.ListElasticsearchIngestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listElasticsearchIngestionsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists Google Cloud Storage (GCS) file import jobs.
   * 
   * @param request - ListGCSIngestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGCSIngestionsResponse
   */
  async listGCSIngestionsWithOptions(project: string, request: $_model.ListGCSIngestionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGCSIngestionsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGCSIngestions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGCSIngestionsResponse>(await this.execute(params, req, runtime), new $_model.ListGCSIngestionsResponse({}));
  }

  /**
   * Lists Google Cloud Storage (GCS) file import jobs.
   * 
   * @param request - ListGCSIngestionsRequest
   * @returns ListGCSIngestionsResponse
   */
  async listGCSIngestions(project: string, request: $_model.ListGCSIngestionsRequest): Promise<$_model.ListGCSIngestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGCSIngestionsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists ingest processors that meet the specified conditions.
   * 
   * @param request - ListIngestProcessorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIngestProcessorsResponse
   */
  async listIngestProcessorsWithOptions(project: string, request: $_model.ListIngestProcessorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIngestProcessorsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.processorName)) {
      query["processorName"] = request.processorName;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIngestProcessors",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ingestprocessors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIngestProcessorsResponse>(await this.execute(params, req, runtime), new $_model.ListIngestProcessorsResponse({}));
  }

  /**
   * Lists ingest processors that meet the specified conditions.
   * 
   * @param request - ListIngestProcessorsRequest
   * @returns ListIngestProcessorsResponse
   */
  async listIngestProcessors(project: string, request: $_model.ListIngestProcessorsRequest): Promise<$_model.ListIngestProcessorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIngestProcessorsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries all Logstores or Logstores that match specific conditions in a project.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action              | Resource                                                             |
   * | :------------------ | :------------------------------------------------------------------- |
   * | `log:ListLogStores` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*` |
   * 
   * @param request - ListLogStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogStoresResponse
   */
  async listLogStoresWithOptions(project: string, request: $_model.ListLogStoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogStoresResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.mode)) {
      query["mode"] = request.mode;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.telemetryType)) {
      query["telemetryType"] = request.telemetryType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogStores",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogStoresResponse>(await this.execute(params, req, runtime), new $_model.ListLogStoresResponse({}));
  }

  /**
   * Queries all Logstores or Logstores that match specific conditions in a project.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action              | Resource                                                             |
   * | :------------------ | :------------------------------------------------------------------- |
   * | `log:ListLogStores` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*` |
   * 
   * @param request - ListLogStoresRequest
   * @returns ListLogStoresResponse
   */
  async listLogStores(project: string, request: $_model.ListLogStoresRequest): Promise<$_model.ListLogStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogStoresWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the names of Logtail pipeline configurations that meet specified criteria.
   * 
   * @param request - ListLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogtailPipelineConfigResponse
   */
  async listLogtailPipelineConfigWithOptions(project: string, request: $_model.ListLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogtailPipelineConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configName)) {
      query["configName"] = request.configName;
    }

    if (!$dara.isNull(request.configType)) {
      query["configType"] = request.configType;
    }

    if (!$dara.isNull(request.logstoreName)) {
      query["logstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new $_model.ListLogtailPipelineConfigResponse({}));
  }

  /**
   * Lists the names of Logtail pipeline configurations that meet specified criteria.
   * 
   * @param request - ListLogtailPipelineConfigRequest
   * @returns ListLogtailPipelineConfigResponse
   */
  async listLogtailPipelineConfig(project: string, request: $_model.ListLogtailPipelineConfigRequest): Promise<$_model.ListLogtailPipelineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogtailPipelineConfigWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the machine groups of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineGroupResponse
   */
  async listMachineGroupWithOptions(project: string, request: $_model.ListMachineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMachineGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["groupName"] = request.groupName;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.ListMachineGroupResponse({}));
  }

  /**
   * Queries the machine groups of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachineGroupRequest
   * @returns ListMachineGroupResponse
   */
  async listMachineGroup(project: string, request: $_model.ListMachineGroupRequest): Promise<$_model.ListMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachineGroupWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of machines that are connected to Simple Log Service in a specified machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachinesResponse
   */
  async listMachinesWithOptions(project: string, machineGroup: string, request: $_model.ListMachinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMachinesResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachines",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/machines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMachinesResponse>(await this.execute(params, req, runtime), new $_model.ListMachinesResponse({}));
  }

  /**
   * Queries a list of machines that are connected to Simple Log Service in a specified machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListMachinesRequest
   * @returns ListMachinesResponse
   */
  async listMachines(project: string, machineGroup: string, request: $_model.ListMachinesRequest): Promise<$_model.ListMachinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMachinesWithOptions(project, machineGroup, request, headers, runtime);
  }

  /**
   * Lists the materialized views in a project.
   * 
   * @param request - ListMaterializedViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMaterializedViewResponse
   */
  async listMaterializedViewWithOptions(project: string, request: $_model.ListMaterializedViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMaterializedViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMaterializedView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMaterializedViewResponse>(await this.execute(params, req, runtime), new $_model.ListMaterializedViewResponse({}));
  }

  /**
   * Lists the materialized views in a project.
   * 
   * @param request - ListMaterializedViewRequest
   * @returns ListMaterializedViewResponse
   */
  async listMaterializedView(project: string, request: $_model.ListMaterializedViewRequest): Promise<$_model.ListMaterializedViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMaterializedViewWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists materialized views.
   * 
   * @param request - ListMaterializedViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMaterializedViewsResponse
   */
  async listMaterializedViewsWithOptions(project: string, request: $_model.ListMaterializedViewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMaterializedViewsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMaterializedViews",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMaterializedViewsResponse>(await this.execute(params, req, runtime), new $_model.ListMaterializedViewsResponse({}));
  }

  /**
   * Lists materialized views.
   * 
   * @param request - ListMaterializedViewsRequest
   * @returns ListMaterializedViewsResponse
   */
  async listMaterializedViews(project: string, request: $_model.ListMaterializedViewsRequest): Promise<$_model.ListMaterializedViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMaterializedViewsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists MaxCompute delivery tasks.
   * 
   * @remarks
   * - The Host consists of the project name and the Simple Log Service endpoint. You must specify the project in the Host.
   * - Create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions to access all APIs. This poses a high security risk. We recommend that you create and use a Resource Access Management (RAM) user for API access or daily O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project that contains the logs to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListMaxComputeExportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMaxComputeExportsResponse
   */
  async listMaxComputeExportsWithOptions(project: string, request: $_model.ListMaxComputeExportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMaxComputeExportsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMaxComputeExports",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMaxComputeExportsResponse>(await this.execute(params, req, runtime), new $_model.ListMaxComputeExportsResponse({}));
  }

  /**
   * Lists MaxCompute delivery tasks.
   * 
   * @remarks
   * - The Host consists of the project name and the Simple Log Service endpoint. You must specify the project in the Host.
   * - Create and obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions to access all APIs. This poses a high security risk. We recommend that you create and use a Resource Access Management (RAM) user for API access or daily O\\&M. The RAM user must have the permissions to manage Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the name and region of the project that contains the logs to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListMaxComputeExportsRequest
   * @returns ListMaxComputeExportsResponse
   */
  async listMaxComputeExports(project: string, request: $_model.ListMaxComputeExportsRequest): Promise<$_model.ListMaxComputeExportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMaxComputeExportsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the list of Metricstores in a project. You can use fuzzy search to query the Metricstores by Metricstore name.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListMetricStoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetricStoresResponse
   */
  async listMetricStoresWithOptions(project: string, request: $_model.ListMetricStoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetricStoresResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      query["mode"] = request.mode;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetricStores",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetricStoresResponse>(await this.execute(params, req, runtime), new $_model.ListMetricStoresResponse({}));
  }

  /**
   * Queries the list of Metricstores in a project. You can use fuzzy search to query the Metricstores by Metricstore name.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - ListMetricStoresRequest
   * @returns ListMetricStoresResponse
   */
  async listMetricStores(project: string, request: $_model.ListMetricStoresRequest): Promise<$_model.ListMetricStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMetricStoresWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries the OSS shipping jobs in a specified project.
   * 
   * @param request - ListOSSExportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSExportsResponse
   */
  async listOSSExportsWithOptions(project: string, request: $_model.ListOSSExportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOSSExportsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOSSExports",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOSSExportsResponse>(await this.execute(params, req, runtime), new $_model.ListOSSExportsResponse({}));
  }

  /**
   * Queries the OSS shipping jobs in a specified project.
   * 
   * @param request - ListOSSExportsRequest
   * @returns ListOSSExportsResponse
   */
  async listOSSExports(project: string, request: $_model.ListOSSExportsRequest): Promise<$_model.ListOSSExportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSExportsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the OSS-HDFS export tasks in a specified project.
   * 
   * @param request - ListOSSHDFSExportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSHDFSExportsResponse
   */
  async listOSSHDFSExportsWithOptions(project: string, request: $_model.ListOSSHDFSExportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOSSHDFSExportsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOSSHDFSExports",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOSSHDFSExportsResponse>(await this.execute(params, req, runtime), new $_model.ListOSSHDFSExportsResponse({}));
  }

  /**
   * Lists the OSS-HDFS export tasks in a specified project.
   * 
   * @param request - ListOSSHDFSExportsRequest
   * @returns ListOSSHDFSExportsResponse
   */
  async listOSSHDFSExports(project: string, request: $_model.ListOSSHDFSExportsRequest): Promise<$_model.ListOSSHDFSExportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSHDFSExportsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists OSS import tasks in a specified Project.
   * 
   * @param request - ListOSSIngestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOSSIngestionsResponse
   */
  async listOSSIngestionsWithOptions(project: string, request: $_model.ListOSSIngestionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOSSIngestionsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOSSIngestions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOSSIngestionsResponse>(await this.execute(params, req, runtime), new $_model.ListOSSIngestionsResponse({}));
  }

  /**
   * Lists OSS import tasks in a specified Project.
   * 
   * @param request - ListOSSIngestionsRequest
   * @returns ListOSSIngestionsResponse
   */
  async listOSSIngestions(project: string, request: $_model.ListOSSIngestionsRequest): Promise<$_model.ListOSSIngestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOSSIngestionsWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists projects that meet the specified criteria.
   * 
   * @remarks
   * ### API description
   * The host consists of a project name and a Simple Log Service endpoint. Specify the project in the host.
   * 
   * @param request - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: $_model.ListProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.fetchQuota)) {
      query["fetchQuota"] = request.fetchQuota;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.projectName)) {
      query["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectResponse>(await this.execute(params, req, runtime), new $_model.ListProjectResponse({}));
  }

  /**
   * Lists projects that meet the specified criteria.
   * 
   * @remarks
   * ### API description
   * The host consists of a project name and a Simple Log Service endpoint. Specify the project in the host.
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
   * Lists S3 import tasks.
   * 
   * @param request - ListS3IngestionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListS3IngestionsResponse
   */
  async listS3IngestionsWithOptions(project: string, request: $_model.ListS3IngestionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListS3IngestionsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListS3Ingestions",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/s3ingestions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListS3IngestionsResponse>(await this.execute(params, req, runtime), new $_model.ListS3IngestionsResponse({}));
  }

  /**
   * Lists S3 import tasks.
   * 
   * @param request - ListS3IngestionsRequest
   * @returns ListS3IngestionsResponse
   */
  async listS3Ingestions(project: string, request: $_model.ListS3IngestionsRequest): Promise<$_model.ListS3IngestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listS3IngestionsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of saved searches.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavedSearchResponse
   */
  async listSavedSearchWithOptions(project: string, request: $_model.ListSavedSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSavedSearchResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSavedSearchResponse>(await this.execute(params, req, runtime), new $_model.ListSavedSearchResponse({}));
  }

  /**
   * Queries a list of saved searches.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListSavedSearchRequest
   * @returns ListSavedSearchResponse
   */
  async listSavedSearch(project: string, request: $_model.ListSavedSearchRequest): Promise<$_model.ListSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSavedSearchWithOptions(project, request, headers, runtime);
  }

  /**
   * Lists the Scheduled SQLs in a specified project.
   * 
   * @param request - ListScheduledSQLsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledSQLsResponse
   */
  async listScheduledSQLsWithOptions(project: string, request: $_model.ListScheduledSQLsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledSQLsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logstore)) {
      query["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledSQLs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledSQLsResponse>(await this.execute(params, req, runtime), new $_model.ListScheduledSQLsResponse({}));
  }

  /**
   * Lists the Scheduled SQLs in a specified project.
   * 
   * @param request - ListScheduledSQLsRequest
   * @returns ListScheduledSQLsResponse
   */
  async listScheduledSQLs(project: string, request: $_model.ListScheduledSQLsRequest): Promise<$_model.ListScheduledSQLsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScheduledSQLsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of shards in a Logstore.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShardsResponse
   */
  async listShardsWithOptions(project: string, logstore: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListShardsResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShards",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListShardsResponse>(await this.execute(params, req, runtime), new $_model.ListShardsResponse({}));
  }

  /**
   * Queries a list of shards in a Logstore.
   * @returns ListShardsResponse
   */
  async listShards(project: string, logstore: string): Promise<$_model.ListShardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShardsWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries datasets in a project.
   * 
   * @param request - ListStoreViewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStoreViewsResponse
   */
  async listStoreViewsWithOptions(project: string, request: $_model.ListStoreViewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStoreViewsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.storeType)) {
      query["storeType"] = request.storeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStoreViews",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStoreViewsResponse>(await this.execute(params, req, runtime), new $_model.ListStoreViewsResponse({}));
  }

  /**
   * Queries datasets in a project.
   * 
   * @param request - ListStoreViewsRequest
   * @returns ListStoreViewsResponse
   */
  async listStoreViews(project: string, request: $_model.ListStoreViewsRequest): Promise<$_model.ListStoreViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStoreViewsWithOptions(project, request, headers, runtime);
  }

  /**
   * Queries a list of tags for one or more resources. You can query tags for resources by resource type or filter resources by tag. Each tag is a key-value pair.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * - For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                 | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:ListTagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.execute(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries a list of tags for one or more resources. You can query tags for resources by resource type or filter resources by tag. Each tag is a key-value pair.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * - For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                 | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :--------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:ListTagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Merges adjacent read/write shards.
   * 
   * @remarks
   * ### API description
   * - The host consists of the project name and the Simple Log Service endpoint. You must specify the project in the host.
   * - Each shard has a range, which is a left-closed, right-open MD5 interval of `[BeginKey,EndKey)`. The status of a shard can be readwrite or readonly. You can split and merge shards. For more information, see [Shards](https://help.aliyun.com/document_detail/28976.html).
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has access permissions for all APIs. This poses a high security threat. We recommend that you create and use a RAM user for API calls or routine O\\&M. The RAM user must have the required permissions to manage Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - You must have the project name, region, and Logstore name for the logs that you want to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MergeShardResponse
   */
  async mergeShardWithOptions(project: string, logstore: string, shard: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MergeShardResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "MergeShard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shard}?action=merge`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.MergeShardResponse>(await this.execute(params, req, runtime), new $_model.MergeShardResponse({}));
  }

  /**
   * Merges adjacent read/write shards.
   * 
   * @remarks
   * ### API description
   * - The host consists of the project name and the Simple Log Service endpoint. You must specify the project in the host.
   * - Each shard has a range, which is a left-closed, right-open MD5 interval of `[BeginKey,EndKey)`. The status of a shard can be readwrite or readonly. You can split and merge shards. For more information, see [Shards](https://help.aliyun.com/document_detail/28976.html).
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has access permissions for all APIs. This poses a high security threat. We recommend that you create and use a RAM user for API calls or routine O\\&M. The RAM user must have the required permissions to manage Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - You must have the project name, region, and Logstore name for the logs that you want to query. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * @returns MergeShardResponse
   */
  async mergeShard(project: string, logstore: string, shard: string): Promise<$_model.MergeShardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.mergeShardWithOptions(project, logstore, shard, headers, runtime);
  }

  /**
   * Activates Simple Log Service. You must use the endpoint for Simple Log Service only in the China (Shanghai) or Singapore region.
   * 
   * @remarks
   * An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenSlsServiceResponse
   */
  async openSlsServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenSlsServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenSlsService",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/slsservice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.OpenSlsServiceResponse>(await this.execute(params, req, runtime), new $_model.OpenSlsServiceResponse({}));
  }

  /**
   * Activates Simple Log Service. You must use the endpoint for Simple Log Service only in the China (Shanghai) or Singapore region.
   * 
   * @remarks
   * An AccessKey pair is required. For more information, see[AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations, which is high risk. We recommend that you create and use a RAM user to call API operations or perform routine O\\&M. The RAM user must have permissions to manage Simple Log Service resources. For more information, see[Create a RAM user and authorize the RAM user](https://help.aliyun.com/document_detail/47664.html).
   * @returns OpenSlsServiceResponse
   */
  async openSlsService(): Promise<$_model.OpenSlsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSlsServiceWithOptions(headers, runtime);
  }

  /**
   * Call the PullLogs operation to retrieve log data from a specified cursor position. This operation retrieves raw logs. To query or analyze logs, call the GetLogsV2 operation.
   * 
   * @remarks
   * >Warning: 
   * This operation is not supported by the OpenAPI SDK. Use the [Simple Log Service SDK](https://help.aliyun.com/document_detail/29063.html).
   * - Specify a shard to retrieve logs.
   * - This operation supports reading data in only the [Protocol Buffer](https://help.aliyun.com/document_detail/29055.html) format.
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. Specify the project in the Host.
   * 
   * @param request - PullLogsRequest
   * @param headers - PullLogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullLogsResponse
   */
  async pullLogsWithOptions(project: string, logStore: string, shardId: string, request: $_model.PullLogsRequest, headers: $_model.PullLogsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PullLogsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      query["count"] = request.count;
    }

    if (!$dara.isNull(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.endCursor)) {
      query["end_cursor"] = request.endCursor;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["Accept-Encoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PullLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logStore}/shards/${shardId}?type=log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.PullLogsResponse>(await this.execute(params, req, runtime), new $_model.PullLogsResponse({}));
  }

  /**
   * Call the PullLogs operation to retrieve log data from a specified cursor position. This operation retrieves raw logs. To query or analyze logs, call the GetLogsV2 operation.
   * 
   * @remarks
   * >Warning: 
   * This operation is not supported by the OpenAPI SDK. Use the [Simple Log Service SDK](https://help.aliyun.com/document_detail/29063.html).
   * - Specify a shard to retrieve logs.
   * - This operation supports reading data in only the [Protocol Buffer](https://help.aliyun.com/document_detail/29055.html) format.
   * - The Host in the request syntax consists of the project name and the Simple Log Service endpoint. Specify the project in the Host.
   * 
   * @param request - PullLogsRequest
   * @returns PullLogsResponse
   */
  async pullLogs(project: string, logStore: string, shardId: string, request: $_model.PullLogsRequest): Promise<$_model.PullLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PullLogsHeaders({ });
    return await this.pullLogsWithOptions(project, logStore, shardId, request, headers, runtime);
  }

  /**
   * Stores annotation data in a dataset.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - PutAnnotationDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAnnotationDataResponse
   */
  async putAnnotationDataWithOptions(datasetId: string, request: $_model.PutAnnotationDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutAnnotationDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotationdataId)) {
      query["annotationdataId"] = request.annotationdataId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mlDataParam)) {
      body["mlDataParam"] = request.mlDataParam;
    }

    if (!$dara.isNull(request.rawLog)) {
      body["rawLog"] = request.rawLog;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutAnnotationData",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}/annotationdata`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutAnnotationDataResponse>(await this.execute(params, req, runtime), new $_model.PutAnnotationDataResponse({}));
  }

  /**
   * Stores annotation data in a dataset.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - PutAnnotationDataRequest
   * @returns PutAnnotationDataResponse
   */
  async putAnnotationData(datasetId: string, request: $_model.PutAnnotationDataRequest): Promise<$_model.PutAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putAnnotationDataWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Creates or updates a consume processor.
   * 
   * @param request - PutConsumeProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutConsumeProcessorResponse
   */
  async putConsumeProcessorWithOptions(project: string, processorName: string, request: $_model.PutConsumeProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutConsumeProcessorResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutConsumeProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/consumeprocessors/${processorName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutConsumeProcessorResponse>(await this.execute(params, req, runtime), new $_model.PutConsumeProcessorResponse({}));
  }

  /**
   * Creates or updates a consume processor.
   * 
   * @param request - PutConsumeProcessorRequest
   * @returns PutConsumeProcessorResponse
   */
  async putConsumeProcessor(project: string, processorName: string, request: $_model.PutConsumeProcessorRequest): Promise<$_model.PutConsumeProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putConsumeProcessorWithOptions(project, processorName, request, headers, runtime);
  }

  /**
   * Creates or modifies an ingest processor.
   * 
   * @param request - PutIngestProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutIngestProcessorResponse
   */
  async putIngestProcessorWithOptions(project: string, processorName: string, request: $_model.PutIngestProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutIngestProcessorResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutIngestProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ingestprocessors/${processorName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutIngestProcessorResponse>(await this.execute(params, req, runtime), new $_model.PutIngestProcessorResponse({}));
  }

  /**
   * Creates or modifies an ingest processor.
   * 
   * @param request - PutIngestProcessorRequest
   * @returns PutIngestProcessorResponse
   */
  async putIngestProcessor(project: string, processorName: string, request: $_model.PutIngestProcessorRequest): Promise<$_model.PutIngestProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putIngestProcessorWithOptions(project, processorName, request, headers, runtime);
  }

  /**
   * Updates the configuration of a Logstore.
   * 
   * @remarks
   * - The `Host` in the request header must contain both the `Project` name and the Simple Log Service (SLS) endpoint.
   * - This operation requires an AccessKey. For more information, see [Access Key](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey for an Alibaba Cloud account grants full access to all APIs and poses a high security risk. We strongly recommend that you create and use a RAM user for API access and daily operations. The RAM user must have the necessary permissions to operate SLS resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the names of the target `Project`, `Region`, and `Logstore`. For more information, see [Manage Project](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Permissions
   * To grant a RAM user or RAM role permission to call this operation, add the Action and Resource in the following table to a permission policy in Resource Access Management (RAM).
   * | Actions                 | Resource                                                                           |
   * | :---------------------- | :--------------------------------------------------------------------------------- |
   * | `log:PutLogStoreConfig` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - PutLogStoreConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutLogStoreConfigResponse
   */
  async putLogStoreConfigWithOptions(project: string, logstore: string, request: $_model.PutLogStoreConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutLogStoreConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientIpHeaders)) {
      body["clientIpHeaders"] = request.clientIpHeaders;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutLogStoreConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutLogStoreConfigResponse>(await this.execute(params, req, runtime), new $_model.PutLogStoreConfigResponse({}));
  }

  /**
   * Updates the configuration of a Logstore.
   * 
   * @remarks
   * - The `Host` in the request header must contain both the `Project` name and the Simple Log Service (SLS) endpoint.
   * - This operation requires an AccessKey. For more information, see [Access Key](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey for an Alibaba Cloud account grants full access to all APIs and poses a high security risk. We strongly recommend that you create and use a RAM user for API access and daily operations. The RAM user must have the necessary permissions to operate SLS resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Identify the names of the target `Project`, `Region`, and `Logstore`. For more information, see [Manage Project](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Permissions
   * To grant a RAM user or RAM role permission to call this operation, add the Action and Resource in the following table to a permission policy in Resource Access Management (RAM).
   * | Actions                 | Resource                                                                           |
   * | :---------------------- | :--------------------------------------------------------------------------------- |
   * | `log:PutLogStoreConfig` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - PutLogStoreConfigRequest
   * @returns PutLogStoreConfigResponse
   */
  async putLogStoreConfig(project: string, logstore: string, request: $_model.PutLogStoreConfigRequest): Promise<$_model.PutLogStoreConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putLogStoreConfigWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Writes log data to a specified logstore.
   * 
   * @remarks
   * > - The OpenAPI SDK does not support this operation. Use the [Simple Log Service (SLS) SDK](https://help.aliyun.com/document_detail/29063.html) instead.
   * - The service checks the format of log data for each PutLogs request. If any log entry is invalid, the entire request fails and no logs are written.
   * - This operation supports only log data in [protobuf format](https://help.aliyun.com/document_detail/29055.html). The log data is structured as a LogGroup.
   * - Logs can be written in two modes:
   *   - LoadBalance mode: Data is automatically written to all writable shards in a logstore. This method provides high availability and is suitable for data consumption scenarios that do not require a specific order. Request syntax:
   *     ```plaintext
   *     POST /logstores/logstoreName/shards/lb HTTP/1.1
   *     Authorization: LOG yourAccessKeyId:yourSignature
   *     Content-Type: application/x-protobuf
   *     Content-Length: Content Length
   *     Content-MD5: Content MD5
   *     Date: GMT Date
   *     Host: ProjectName.Endpoint
   *     x-log-apiversion: 0.6.0
   *     x-log-bodyrawsize: BodyRawSize
   *     x-log-compresstype: lz4
   *     x-log-signaturemethod: hmac-sha1
   *     <Compressed log data in protobuf format>
   *     ```
   *   - KeyHash mode: Add a key parameter to the URL to determine which shard receives the data. This parameter is optional. If you do not set this parameter, the system automatically switches to the load balancing mode. For example, pin a producer, such as an instance, to a specific shard based on its name hash. This ensures that data written to and consumed from the shard is strictly ordered. During merge and split operations, a key is associated with only one shard at any given time. Request syntax:
   *     ```plaintext
   *     POST /logstores/logstoreName/shards/route?key=14d2f850ad6ea48e46e4547edbbb27e0
   *     Authorization: LOG yourAccessKeyId:yourSignature
   *     Content-Type: application/x-protobuf
   *     Content-Length: Content Length
   *     Content-MD5: Content MD5
   *     Date: GMT Date
   *     Host: ProjectName.Endpoint
   *     x-log-apiversion: 0.6.0
   *     x-log-bodyrawsize: BodyRawSize
   *     x-log-compresstype: lz4
   *     x-log-signaturemethod: hmac-sha1
   *     <Compressed log data in protobuf format>
   *     ```
   * - The maximum size of raw logs for each PutLogs request is 10 MB. The Value of each log in a log group must not exceed 1 MB. Older SDK versions may have different limits. Upgrade to the latest SDK version.
   * - SLS provides examples of how to use PutLogs with the Java and Python SDKs.
   * ## Protobuf data
   * This section describes the fields for compressed log data in protobuf format. For more information, see [Data model](https://help.aliyun.com/document_detail/29054.html) and [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * - Log
   * | **Parameter** | **Data type** | **Required** | **Description**                                                                                                                         |
   * | ------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
   * | Time          | Integer       | Yes          | The time of the log. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-1-1 00:00:00 UTC. |
   * | Contents      | List          | Yes          | A list of log fields. The list must contain at least one element. For the element type, see the Content table below.                    |
   * - Content
   * | **Parameter** | **Data type** | **Required** | **Description**                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------- |
   * | Key           | String        | Yes          | The custom key name.                          |
   * | Value         | String        | Yes          | The value that corresponds to the custom key. |
   * - LogTag
   * | **Parameter** | **Data type** | **Required** | **Description**                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------- |
   * | Key           | String        | Yes          | The custom key name.                          |
   * | Value         | String        | Yes          | The value that corresponds to the custom key. |
   * - LogGroup
   * | **Parameter** | **Data type** | **Required** | **Description**                                                                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------- |
   * | Logs          | List          | Yes          | A list of logs. For each element, see the Log table.                                          |
   * | Topic         | String        | No           | The topic of the logs. Use this custom field to distinguish log data with different features. |
   * | Source        | String        | No           | The source of the logs, such as the IP address of the machine that generated the logs.        |
   * | LogTags       | List          | Yes          | A list of log tags. For each element, see the LogTag table.                                   |
   * 
   * @param request - PutLogsRequest
   * @param headers - PutLogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutLogsResponse
   */
  async putLogsWithOptions(project: string, logstore: string, request: $_model.PutLogsRequest, headers: $_model.PutLogsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PutLogsResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xLogCompresstype)) {
      realHeaders["x-log-compresstype"] = String(headers.xLogCompresstype);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutLogs",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/lb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "protobuf",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutLogsResponse>(await this.execute(params, req, runtime), new $_model.PutLogsResponse({}));
  }

  /**
   * Writes log data to a specified logstore.
   * 
   * @remarks
   * > - The OpenAPI SDK does not support this operation. Use the [Simple Log Service (SLS) SDK](https://help.aliyun.com/document_detail/29063.html) instead.
   * - The service checks the format of log data for each PutLogs request. If any log entry is invalid, the entire request fails and no logs are written.
   * - This operation supports only log data in [protobuf format](https://help.aliyun.com/document_detail/29055.html). The log data is structured as a LogGroup.
   * - Logs can be written in two modes:
   *   - LoadBalance mode: Data is automatically written to all writable shards in a logstore. This method provides high availability and is suitable for data consumption scenarios that do not require a specific order. Request syntax:
   *     ```plaintext
   *     POST /logstores/logstoreName/shards/lb HTTP/1.1
   *     Authorization: LOG yourAccessKeyId:yourSignature
   *     Content-Type: application/x-protobuf
   *     Content-Length: Content Length
   *     Content-MD5: Content MD5
   *     Date: GMT Date
   *     Host: ProjectName.Endpoint
   *     x-log-apiversion: 0.6.0
   *     x-log-bodyrawsize: BodyRawSize
   *     x-log-compresstype: lz4
   *     x-log-signaturemethod: hmac-sha1
   *     <Compressed log data in protobuf format>
   *     ```
   *   - KeyHash mode: Add a key parameter to the URL to determine which shard receives the data. This parameter is optional. If you do not set this parameter, the system automatically switches to the load balancing mode. For example, pin a producer, such as an instance, to a specific shard based on its name hash. This ensures that data written to and consumed from the shard is strictly ordered. During merge and split operations, a key is associated with only one shard at any given time. Request syntax:
   *     ```plaintext
   *     POST /logstores/logstoreName/shards/route?key=14d2f850ad6ea48e46e4547edbbb27e0
   *     Authorization: LOG yourAccessKeyId:yourSignature
   *     Content-Type: application/x-protobuf
   *     Content-Length: Content Length
   *     Content-MD5: Content MD5
   *     Date: GMT Date
   *     Host: ProjectName.Endpoint
   *     x-log-apiversion: 0.6.0
   *     x-log-bodyrawsize: BodyRawSize
   *     x-log-compresstype: lz4
   *     x-log-signaturemethod: hmac-sha1
   *     <Compressed log data in protobuf format>
   *     ```
   * - The maximum size of raw logs for each PutLogs request is 10 MB. The Value of each log in a log group must not exceed 1 MB. Older SDK versions may have different limits. Upgrade to the latest SDK version.
   * - SLS provides examples of how to use PutLogs with the Java and Python SDKs.
   * ## Protobuf data
   * This section describes the fields for compressed log data in protobuf format. For more information, see [Data model](https://help.aliyun.com/document_detail/29054.html) and [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * - Log
   * | **Parameter** | **Data type** | **Required** | **Description**                                                                                                                         |
   * | ------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
   * | Time          | Integer       | Yes          | The time of the log. The value is a UNIX timestamp that represents the number of seconds that have elapsed since 1970-1-1 00:00:00 UTC. |
   * | Contents      | List          | Yes          | A list of log fields. The list must contain at least one element. For the element type, see the Content table below.                    |
   * - Content
   * | **Parameter** | **Data type** | **Required** | **Description**                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------- |
   * | Key           | String        | Yes          | The custom key name.                          |
   * | Value         | String        | Yes          | The value that corresponds to the custom key. |
   * - LogTag
   * | **Parameter** | **Data type** | **Required** | **Description**                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------- |
   * | Key           | String        | Yes          | The custom key name.                          |
   * | Value         | String        | Yes          | The value that corresponds to the custom key. |
   * - LogGroup
   * | **Parameter** | **Data type** | **Required** | **Description**                                                                               |
   * | ------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------- |
   * | Logs          | List          | Yes          | A list of logs. For each element, see the Log table.                                          |
   * | Topic         | String        | No           | The topic of the logs. Use this custom field to distinguish log data with different features. |
   * | Source        | String        | No           | The source of the logs, such as the IP address of the machine that generated the logs.        |
   * | LogTags       | List          | Yes          | A list of log tags. For each element, see the LogTag table.                                   |
   * 
   * @param request - PutLogsRequest
   * @returns PutLogsResponse
   */
  async putLogs(project: string, logstore: string, request: $_model.PutLogsRequest): Promise<$_model.PutLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PutLogsHeaders({ });
    return await this.putLogsWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Creates a project access policy.
   * 
   * @remarks
   * ###
   * - The Host in the request syntax consists of the project name and the Simple Log Service (SLS) endpoint. You must specify the project in the Host.
   * - You have created an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account provides full access to all API operations. This is a high security risk. We recommend that you create and use a Resource Access Management (RAM) user for API access or daily O\\&M. The RAM user must have permissions to manage SLS resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * - A project policy is an authorization policy for projects in SLS. You can use a project policy to grant other users access to your specified SLS resources.
   *   - Before you configure a project policy using policy syntax, you must understand the classification of SLS actions, resources, and conditions. For more information, see [Resource Access Management](https://help.aliyun.com/document_detail/128139.html).
   *   - When you configure a project policy, if you grant permissions to an anonymous account (\\*) and do not specify a condition, the policy applies to all users except the project owner. If you grant permissions to an anonymous account (\\*) and specify a condition, the policy applies to all users, including the project owner.
   *   - You can add multiple project policies, but their total size cannot exceed 16 KB.
   * 
   * @param request - PutProjectPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProjectPolicyResponse
   */
  async putProjectPolicyWithOptions(project: string, request: $_model.PutProjectPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutProjectPolicyResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "PutProjectPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutProjectPolicyResponse>(await this.execute(params, req, runtime), new $_model.PutProjectPolicyResponse({}));
  }

  /**
   * Creates a project access policy.
   * 
   * @remarks
   * ###
   * - The Host in the request syntax consists of the project name and the Simple Log Service (SLS) endpoint. You must specify the project in the Host.
   * - You have created an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account provides full access to all API operations. This is a high security risk. We recommend that you create and use a Resource Access Management (RAM) user for API access or daily O\\&M. The RAM user must have permissions to manage SLS resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, region, and Logstore name. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * - A project policy is an authorization policy for projects in SLS. You can use a project policy to grant other users access to your specified SLS resources.
   *   - Before you configure a project policy using policy syntax, you must understand the classification of SLS actions, resources, and conditions. For more information, see [Resource Access Management](https://help.aliyun.com/document_detail/128139.html).
   *   - When you configure a project policy, if you grant permissions to an anonymous account (\\*) and do not specify a condition, the policy applies to all users except the project owner. If you grant permissions to an anonymous account (\\*) and specify a condition, the policy applies to all users, including the project owner.
   *   - You can add multiple project policies, but their total size cannot exceed 16 KB.
   * 
   * @param request - PutProjectPolicyRequest
   * @returns PutProjectPolicyResponse
   */
  async putProjectPolicy(project: string, request: $_model.PutProjectPolicyRequest): Promise<$_model.PutProjectPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectPolicyWithOptions(project, request, headers, runtime);
  }

  /**
   * Enables or disables transfer acceleration.
   * 
   * @param request - PutProjectTransferAccelerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProjectTransferAccelerationResponse
   */
  async putProjectTransferAccelerationWithOptions(project: string, request: $_model.PutProjectTransferAccelerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutProjectTransferAccelerationResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutProjectTransferAcceleration",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/transferacceleration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutProjectTransferAccelerationResponse>(await this.execute(params, req, runtime), new $_model.PutProjectTransferAccelerationResponse({}));
  }

  /**
   * Enables or disables transfer acceleration.
   * 
   * @param request - PutProjectTransferAccelerationRequest
   * @returns PutProjectTransferAccelerationResponse
   */
  async putProjectTransferAcceleration(project: string, request: $_model.PutProjectTransferAccelerationRequest): Promise<$_model.PutProjectTransferAccelerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProjectTransferAccelerationWithOptions(project, request, headers, runtime);
  }

  /**
   * Sends multiple logs to Simple Log Service in one request.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Use this operation to collect logs from web pages or clients.
   * - If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * - If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * - Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * - You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * - If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
   * 
   * @param request - PutWebtrackingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWebtrackingResponse
   */
  async putWebtrackingWithOptions(project: string, logstoreName: string, request: $_model.PutWebtrackingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutWebtrackingResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logs)) {
      body["__logs__"] = request.logs;
    }

    if (!$dara.isNull(request.source)) {
      body["__source__"] = request.source;
    }

    if (!$dara.isNull(request.tags)) {
      body["__tags__"] = request.tags;
    }

    if (!$dara.isNull(request.topic)) {
      body["__topic__"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutWebtracking",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstoreName}/track`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PutWebtrackingResponse>(await this.execute(params, req, runtime), new $_model.PutWebtrackingResponse({}));
  }

  /**
   * Sends multiple logs to Simple Log Service in one request.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Use this operation to collect logs from web pages or clients.
   * - If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * - If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * - Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * - You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * - If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
   * 
   * @param request - PutWebtrackingRequest
   * @returns PutWebtrackingResponse
   */
  async putWebtracking(project: string, logstoreName: string, request: $_model.PutWebtrackingRequest): Promise<$_model.PutWebtrackingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWebtrackingWithOptions(project, logstoreName, request, headers, runtime);
  }

  /**
   * Refreshes an access token using a ticket. The access token is used to call console API operations.
   * 
   * @param request - RefreshTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshTokenResponse
   */
  async refreshTokenWithOptions(request: $_model.RefreshTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessTokenExpirationTime)) {
      query["accessTokenExpirationTime"] = request.accessTokenExpirationTime;
    }

    if (!$dara.isNull(request.ticket)) {
      query["ticket"] = request.ticket;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshToken",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/token/refresh`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshTokenResponse>(await this.execute(params, req, runtime), new $_model.RefreshTokenResponse({}));
  }

  /**
   * Refreshes an access token using a ticket. The access token is used to call console API operations.
   * 
   * @param request - RefreshTokenRequest
   * @returns RefreshTokenResponse
   */
  async refreshToken(request: $_model.RefreshTokenRequest): Promise<$_model.RefreshTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshTokenWithOptions(request, headers, runtime);
  }

  /**
   * Removes a Logtail configuration from a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveConfigFromMachineGroupResponse
   */
  async removeConfigFromMachineGroupWithOptions(project: string, machineGroup: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveConfigFromMachineGroupResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveConfigFromMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/configs/${configName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RemoveConfigFromMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.RemoveConfigFromMachineGroupResponse({}));
  }

  /**
   * Removes a Logtail configuration from a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns RemoveConfigFromMachineGroupResponse
   */
  async removeConfigFromMachineGroup(project: string, machineGroup: string, configName: string): Promise<$_model.RemoveConfigFromMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeConfigFromMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
   * Splits a shard in the readwrite state.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * 
   * @param request - SplitShardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitShardResponse
   */
  async splitShardWithOptions(project: string, logstore: string, shard: string, request: $_model.SplitShardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SplitShardResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      query["key"] = request.key;
    }

    if (!$dara.isNull(request.shardCount)) {
      query["shardCount"] = request.shardCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SplitShard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/shards/${shard}?action=split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.SplitShardResponse>(await this.execute(params, req, runtime), new $_model.SplitShardResponse({}));
  }

  /**
   * Splits a shard in the readwrite state.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * 
   * @param request - SplitShardRequest
   * @returns SplitShardResponse
   */
  async splitShard(project: string, logstore: string, shard: string, request: $_model.SplitShardRequest): Promise<$_model.SplitShardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitShardWithOptions(project, logstore, shard, request, headers, runtime);
  }

  /**
   * Starts an Azure Blob ingestion task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAzureBlobIngestionResponse
   */
  async startAzureBlobIngestionWithOptions(project: string, azureBlobIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartAzureBlobIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions/${azureBlobIngestionName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.StartAzureBlobIngestionResponse({}));
  }

  /**
   * Starts an Azure Blob ingestion task.
   * @returns StartAzureBlobIngestionResponse
   */
  async startAzureBlobIngestion(project: string, azureBlobIngestionName: string): Promise<$_model.StartAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAzureBlobIngestionWithOptions(project, azureBlobIngestionName, headers, runtime);
  }

  /**
   * Starts a data transformation task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartETLResponse
   */
  async startETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartETLResponse>(await this.execute(params, req, runtime), new $_model.StartETLResponse({}));
  }

  /**
   * Starts a data transformation task.
   * @returns StartETLResponse
   */
  async startETL(project: string, etlName: string): Promise<$_model.StartETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Starts an ES or OpenSearch ingestion task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartElasticsearchIngestionResponse
   */
  async startElasticsearchIngestionWithOptions(project: string, elasticsearchIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartElasticsearchIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${elasticsearchIngestionName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.StartElasticsearchIngestionResponse({}));
  }

  /**
   * Starts an ES or OpenSearch ingestion task.
   * @returns StartElasticsearchIngestionResponse
   */
  async startElasticsearchIngestion(project: string, elasticsearchIngestionName: string): Promise<$_model.StartElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startElasticsearchIngestionWithOptions(project, elasticsearchIngestionName, headers, runtime);
  }

  /**
   * Starts a GCS file import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartGCSIngestionResponse
   */
  async startGCSIngestionWithOptions(project: string, gcsIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartGCSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartGCSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions/${gcsIngestionName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.StartGCSIngestionResponse>(await this.execute(params, req, runtime), new $_model.StartGCSIngestionResponse({}));
  }

  /**
   * Starts a GCS file import task.
   * @returns StartGCSIngestionResponse
   */
  async startGCSIngestion(project: string, gcsIngestionName: string): Promise<$_model.StartGCSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startGCSIngestionWithOptions(project, gcsIngestionName, headers, runtime);
  }

  /**
   * Starts a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMaxComputeExportResponse
   */
  async startMaxComputeExportWithOptions(project: string, mcExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartMaxComputeExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports/${mcExportName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.StartMaxComputeExportResponse({}));
  }

  /**
   * Starts a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns StartMaxComputeExportResponse
   */
  async startMaxComputeExport(project: string, mcExportName: string): Promise<$_model.StartMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * Starts an Object Storage Service (OSS) data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSExportResponse
   */
  async startOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartOSSExportResponse>(await this.execute(params, req, runtime), new $_model.StartOSSExportResponse({}));
  }

  /**
   * Starts an Object Storage Service (OSS) data shipping job.
   * @returns StartOSSExportResponse
   */
  async startOSSExport(project: string, ossExportName: string): Promise<$_model.StartOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Starts an OSS-HDFS data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSHDFSExportResponse
   */
  async startOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.StartOSSHDFSExportResponse({}));
  }

  /**
   * Starts an OSS-HDFS data shipping job.
   * @returns StartOSSHDFSExportResponse
   */
  async startOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.StartOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Starts a specified OSS import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOSSIngestionResponse
   */
  async startOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}?action=START`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StartOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.StartOSSIngestionResponse({}));
  }

  /**
   * Starts a specified OSS import task.
   * @returns StartOSSIngestionResponse
   */
  async startOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.StartOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Stops an Azure Blob ingestion task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAzureBlobIngestionResponse
   */
  async stopAzureBlobIngestionWithOptions(project: string, azureBlobIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopAzureBlobIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions/${azureBlobIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.StopAzureBlobIngestionResponse({}));
  }

  /**
   * Stops an Azure Blob ingestion task.
   * @returns StopAzureBlobIngestionResponse
   */
  async stopAzureBlobIngestion(project: string, azureBlobIngestionName: string): Promise<$_model.StopAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAzureBlobIngestionWithOptions(project, azureBlobIngestionName, headers, runtime);
  }

  /**
   * Stops a specified data transformation task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopETLResponse
   */
  async stopETLWithOptions(project: string, etlName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopETLResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopETLResponse>(await this.execute(params, req, runtime), new $_model.StopETLResponse({}));
  }

  /**
   * Stops a specified data transformation task.
   * @returns StopETLResponse
   */
  async stopETL(project: string, etlName: string): Promise<$_model.StopETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Stops an ES or OpenSearch import job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopElasticsearchIngestionResponse
   */
  async *stopElasticsearchIngestionWithSSE(project: string, elasticsearchIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.StopElasticsearchIngestionResponse, any, unknown> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${elasticsearchIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.StopElasticsearchIngestionResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.StopElasticsearchIngestionResponse({}));
      }

    }
  }

  /**
   * Stops an ES or OpenSearch import job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopElasticsearchIngestionResponse
   */
  async stopElasticsearchIngestionWithOptions(project: string, elasticsearchIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopElasticsearchIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${elasticsearchIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.StopElasticsearchIngestionResponse({}));
  }

  /**
   * Stops an ES or OpenSearch import job.
   * @returns StopElasticsearchIngestionResponse
   */
  async stopElasticsearchIngestion(project: string, elasticsearchIngestionName: string): Promise<$_model.StopElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopElasticsearchIngestionWithOptions(project, elasticsearchIngestionName, headers, runtime);
  }

  /**
   * Stops a GCP Cloud Storage file import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopGCSIngestionResponse
   */
  async stopGCSIngestionWithOptions(project: string, gcsIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopGCSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopGCSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions/${gcsIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.StopGCSIngestionResponse>(await this.execute(params, req, runtime), new $_model.StopGCSIngestionResponse({}));
  }

  /**
   * Stops a GCP Cloud Storage file import task.
   * @returns StopGCSIngestionResponse
   */
  async stopGCSIngestion(project: string, gcsIngestionName: string): Promise<$_model.StopGCSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopGCSIngestionWithOptions(project, gcsIngestionName, headers, runtime);
  }

  /**
   * Stops a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopMaxComputeExportResponse
   */
  async stopMaxComputeExportWithOptions(project: string, mcExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopMaxComputeExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports/${mcExportName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.StopMaxComputeExportResponse({}));
  }

  /**
   * Stops a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns StopMaxComputeExportResponse
   */
  async stopMaxComputeExport(project: string, mcExportName: string): Promise<$_model.StopMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * Stops an Object Storage Service (OSS) data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSExportResponse
   */
  async stopOSSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopOSSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopOSSExportResponse>(await this.execute(params, req, runtime), new $_model.StopOSSExportResponse({}));
  }

  /**
   * Stops an Object Storage Service (OSS) data shipping job.
   * @returns StopOSSExportResponse
   */
  async stopOSSExport(project: string, ossExportName: string): Promise<$_model.StopOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Stops an OSS-HDFS data shipping job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSHDFSExportResponse
   */
  async stopOSSHDFSExportWithOptions(project: string, ossExportName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopOSSHDFSExportResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.StopOSSHDFSExportResponse({}));
  }

  /**
   * Stops an OSS-HDFS data shipping job.
   * @returns StopOSSHDFSExportResponse
   */
  async stopOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.StopOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Stops the specified OSS import task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOSSIngestionResponse
   */
  async stopOSSIngestionWithOptions(project: string, ossIngestionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopOSSIngestionResponse> {
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}?action=STOP`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.StopOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.StopOSSIngestionResponse({}));
  }

  /**
   * Stops the specified OSS import task.
   * @returns StopOSSIngestionResponse
   */
  async stopOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.StopOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Submits an asynchronous SQL request.
   * 
   * @param request - SubmitAsyncSqlRequest
   * @param headers - SubmitAsyncSqlHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitAsyncSqlResponse
   */
  async submitAsyncSqlWithOptions(project: string, request: $_model.SubmitAsyncSqlRequest, headers: $_model.SubmitAsyncSqlHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitAsyncSqlResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.accept)) {
      realHeaders["Accept"] = String(headers.accept);
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["Accept-Encoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitAsyncSql",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/asyncsql`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "none",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitAsyncSqlResponse>(await this.execute(params, req, runtime), new $_model.SubmitAsyncSqlResponse({}));
  }

  /**
   * Submits an asynchronous SQL request.
   * 
   * @param request - SubmitAsyncSqlRequest
   * @returns SubmitAsyncSqlResponse
   */
  async submitAsyncSql(project: string, request: $_model.SubmitAsyncSqlRequest): Promise<$_model.SubmitAsyncSqlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubmitAsyncSqlHeaders({ });
    return await this.submitAsyncSqlWithOptions(project, request, headers, runtime);
  }

  /**
   * Creates and adds tags to a resource. You can add tags only to projects.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * - For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action             | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:TagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/tag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.execute(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates and adds tags to a resource. You can add tags only to projects.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * - For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action             | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:TagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Detaches one or more tags from a resource. You can detach tags only from Simple Log Service projects. You can detach multiple or all tags from a Simple Log Service project at a time.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:UntagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      body["all"] = request.all;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/untag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.execute(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Detaches one or more tags from a resource. You can detach tags only from Simple Log Service projects. You can detach multiple or all tags from a Simple Log Service project at a time.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action               | Resource                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
   * | :------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | `log:UntagResources` | The resource format varies based on the resource type.-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}` |
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Updates process-level configurations.
   * 
   * @param tmpReq - UpdateAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentInstanceConfigResponse
   */
  async updateAgentInstanceConfigWithOptions(configType: string, tmpReq: $_model.UpdateAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentInstanceConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateAgentInstanceConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "attributes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributesShrink)) {
      query["attributes"] = request.attributesShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.grayConfigs)) {
      body["grayConfigs"] = request.grayConfigs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAgentInstanceConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/agentinstanceconfigs/${configType}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateAgentInstanceConfigResponse>(await this.execute(params, req, runtime), new $_model.UpdateAgentInstanceConfigResponse({}));
  }

  /**
   * Updates process-level configurations.
   * 
   * @param request - UpdateAgentInstanceConfigRequest
   * @returns UpdateAgentInstanceConfigResponse
   */
  async updateAgentInstanceConfig(configType: string, request: $_model.UpdateAgentInstanceConfigRequest): Promise<$_model.UpdateAgentInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAgentInstanceConfigWithOptions(configType, request, headers, runtime);
  }

  /**
   * Updates an alert rule.
   * 
   * @param request - UpdateAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertResponse
   */
  async updateAlertWithOptions(project: string, alertName: string, request: $_model.UpdateAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlert",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/alerts/${alertName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateAlertResponse>(await this.execute(params, req, runtime), new $_model.UpdateAlertResponse({}));
  }

  /**
   * Updates an alert rule.
   * 
   * @param request - UpdateAlertRequest
   * @returns UpdateAlertResponse
   */
  async updateAlert(project: string, alertName: string, request: $_model.UpdateAlertRequest): Promise<$_model.UpdateAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertWithOptions(project, alertName, request, headers, runtime);
  }

  /**
   * Updates a dataset.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - UpdateAnnotationDataSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnnotationDataSetResponse
   */
  async updateAnnotationDataSetWithOptions(datasetId: string, request: $_model.UpdateAnnotationDataSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAnnotationDataSetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAnnotationDataSet",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationdataset/${datasetId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateAnnotationDataSetResponse>(await this.execute(params, req, runtime), new $_model.UpdateAnnotationDataSetResponse({}));
  }

  /**
   * Updates a dataset.
   * 
   * @remarks
   * The endpoint for this operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - UpdateAnnotationDataSetRequest
   * @returns UpdateAnnotationDataSetResponse
   */
  async updateAnnotationDataSet(datasetId: string, request: $_model.UpdateAnnotationDataSetRequest): Promise<$_model.UpdateAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationDataSetWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Updates a label table. You can update only the names of labels in a label set.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - UpdateAnnotationLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAnnotationLabelResponse
   */
  async updateAnnotationLabelWithOptions(request: $_model.UpdateAnnotationLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAnnotationLabelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAnnotationLabel",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ml/annotationlabel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateAnnotationLabelResponse>(await this.execute(params, req, runtime), new $_model.UpdateAnnotationLabelResponse({}));
  }

  /**
   * Updates a label table. You can update only the names of labels in a label set.
   * 
   * @remarks
   * This operation is available only in the China (Shanghai) and Singapore regions.
   * 
   * @param request - UpdateAnnotationLabelRequest
   * @returns UpdateAnnotationLabelResponse
   */
  async updateAnnotationLabel(request: $_model.UpdateAnnotationLabelRequest): Promise<$_model.UpdateAnnotationLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationLabelWithOptions(request, headers, runtime);
  }

  /**
   * Updates an Azure Blob ingestion.
   * 
   * @param request - UpdateAzureBlobIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAzureBlobIngestionResponse
   */
  async updateAzureBlobIngestionWithOptions(project: string, azureBlobIngestionName: string, request: $_model.UpdateAzureBlobIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAzureBlobIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAzureBlobIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/azureblobingestions/${azureBlobIngestionName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateAzureBlobIngestionResponse>(await this.execute(params, req, runtime), new $_model.UpdateAzureBlobIngestionResponse({}));
  }

  /**
   * Updates an Azure Blob ingestion.
   * 
   * @param request - UpdateAzureBlobIngestionRequest
   * @returns UpdateAzureBlobIngestionResponse
   */
  async updateAzureBlobIngestion(project: string, azureBlobIngestionName: string, request: $_model.UpdateAzureBlobIngestionRequest): Promise<$_model.UpdateAzureBlobIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAzureBlobIngestionWithOptions(project, azureBlobIngestionName, request, headers, runtime);
  }

  /**
   * Modifies a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - UpdateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
   */
  async updateConfigWithOptions(project: string, configName: string, request: $_model.UpdateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/configs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateConfigResponse>(await this.execute(params, req, runtime), new $_model.UpdateConfigResponse({}));
  }

  /**
   * Modifies a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(project: string, configName: string, request: $_model.UpdateConfigRequest): Promise<$_model.UpdateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
   * Updates the attributes of a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:UpdateConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * 
   * @param request - UpdateConsumerGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroupWithOptions(project: string, logstore: string, consumerGroup: string, request: $_model.UpdateConsumerGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConsumerGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConsumerGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/consumergroups/${consumerGroup}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateConsumerGroupResponse>(await this.execute(params, req, runtime), new $_model.UpdateConsumerGroupResponse({}));
  }

  /**
   * Updates the attributes of a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                    | Resource                                                                                                          |
   * | :------------------------ | :---------------------------------------------------------------------------------------------------------------- |
   * | `log:UpdateConsumerGroup` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}` |
   * 
   * @param request - UpdateConsumerGroupRequest
   * @returns UpdateConsumerGroupResponse
   */
  async updateConsumerGroup(project: string, logstore: string, consumerGroup: string, request: $_model.UpdateConsumerGroupRequest): Promise<$_model.UpdateConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConsumerGroupWithOptions(project, logstore, consumerGroup, request, headers, runtime);
  }

  /**
   * Updates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateDashboardRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDashboardResponse
   */
  async updateDashboardWithOptions(project: string, dashboardName: string, request: $_model.UpdateDashboardRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDashboardResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attribute)) {
      body["attribute"] = request.attribute;
    }

    if (!$dara.isNull(request.charts)) {
      body["charts"] = request.charts;
    }

    if (!$dara.isNull(request.dashboardName)) {
      body["dashboardName"] = request.dashboardName;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDashboard",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/dashboards/${dashboardName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateDashboardResponse>(await this.execute(params, req, runtime), new $_model.UpdateDashboardResponse({}));
  }

  /**
   * Updates a dashboard.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateDashboardRequest
   * @returns UpdateDashboardResponse
   */
  async updateDashboard(project: string, dashboardName: string, request: $_model.UpdateDashboardRequest): Promise<$_model.UpdateDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDashboardWithOptions(project, dashboardName, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified data transformation task and restarts it.
   * 
   * @param request - UpdateETLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateETLResponse
   */
  async updateETLWithOptions(project: string, etlName: string, request: $_model.UpdateETLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateETLResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateETL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/etls/${etlName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateETLResponse>(await this.execute(params, req, runtime), new $_model.UpdateETLResponse({}));
  }

  /**
   * Updates the configuration of a specified data transformation task and restarts it.
   * 
   * @param request - UpdateETLRequest
   * @returns UpdateETLResponse
   */
  async updateETL(project: string, etlName: string, request: $_model.UpdateETLRequest): Promise<$_model.UpdateETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateETLWithOptions(project, etlName, request, headers, runtime);
  }

  /**
   * Updates an ES or OpenSearch ingestion task.
   * 
   * @param request - UpdateElasticsearchIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateElasticsearchIngestionResponse
   */
  async updateElasticsearchIngestionWithOptions(project: string, elasticsearchIngestionName: string, request: $_model.UpdateElasticsearchIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateElasticsearchIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateElasticsearchIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/elasticsearchingestions/${elasticsearchIngestionName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateElasticsearchIngestionResponse>(await this.execute(params, req, runtime), new $_model.UpdateElasticsearchIngestionResponse({}));
  }

  /**
   * Updates an ES or OpenSearch ingestion task.
   * 
   * @param request - UpdateElasticsearchIngestionRequest
   * @returns UpdateElasticsearchIngestionResponse
   */
  async updateElasticsearchIngestion(project: string, elasticsearchIngestionName: string, request: $_model.UpdateElasticsearchIngestionRequest): Promise<$_model.UpdateElasticsearchIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateElasticsearchIngestionWithOptions(project, elasticsearchIngestionName, request, headers, runtime);
  }

  /**
   * Updates a GCP Cloud Storage file ingestion task.
   * 
   * @param request - UpdateGCSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGCSIngestionResponse
   */
  async updateGCSIngestionWithOptions(project: string, gcsIngestionName: string, request: $_model.UpdateGCSIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGCSIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGCSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/gcsingestions/${gcsIngestionName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $dara.cast<$_model.UpdateGCSIngestionResponse>(await this.execute(params, req, runtime), new $_model.UpdateGCSIngestionResponse({}));
  }

  /**
   * Updates a GCP Cloud Storage file ingestion task.
   * 
   * @param request - UpdateGCSIngestionRequest
   * @returns UpdateGCSIngestionResponse
   */
  async updateGCSIngestion(project: string, gcsIngestionName: string, request: $_model.UpdateGCSIngestionRequest): Promise<$_model.UpdateGCSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGCSIngestionWithOptions(project, gcsIngestionName, request, headers, runtime);
  }

  /**
   * Updates the indexes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIndexResponse
   */
  async updateIndexWithOptions(project: string, logstore: string, request: $_model.UpdateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIndexResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIndex",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/index`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateIndexResponse>(await this.execute(params, req, runtime), new $_model.UpdateIndexResponse({}));
  }

  /**
   * Updates the indexes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateIndexRequest
   * @returns UpdateIndexResponse
   */
  async updateIndex(project: string, logstore: string, request: $_model.UpdateIndexRequest): Promise<$_model.UpdateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the properties of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Before you update a Logstore, call the GetLogStore operation to retrieve the configuration of the Logstore. Then, modify the configuration and pass it to the UpdateLogStore operation.
   * - The Host in the request syntax consists of a project name and a Simple Log Service (SLS) endpoint. You must specify the project in the Host.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations. This poses a high security risk. We recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O\\&M. The RAM user must be granted the required permissions to operate SLS resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, the Logstore name, and the region where the project resides. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * The following table describes the authorization required for this operation. To grant a RAM user or RAM role permission to call this operation, add the required action to the Action element of a RAM policy.
   * | Action               | Resource description in an authorization policy                                    |
   * | :------------------- | :--------------------------------------------------------------------------------- |
   * | `log:UpdateLogStore` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - UpdateLogStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreResponse
   */
  async updateLogStoreWithOptions(project: string, logstore: string, request: $_model.UpdateLogStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogStoreResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!$dara.isNull(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!$dara.isNull(request.enableTracking)) {
      body["enable_tracking"] = request.enableTracking;
    }

    if (!$dara.isNull(request.encryptConf)) {
      body["encrypt_conf"] = request.encryptConf;
    }

    if (!$dara.isNull(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!$dara.isNull(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!$dara.isNull(request.logstoreName)) {
      body["logstoreName"] = request.logstoreName;
    }

    if (!$dara.isNull(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.shardCount)) {
      body["shardCount"] = request.shardCount;
    }

    if (!$dara.isNull(request.shardingPolicy)) {
      body["shardingPolicy"] = request.shardingPolicy;
    }

    if (!$dara.isNull(request.telemetryType)) {
      body["telemetryType"] = request.telemetryType;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLogStoreResponse>(await this.execute(params, req, runtime), new $_model.UpdateLogStoreResponse({}));
  }

  /**
   * Updates the properties of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * - Before you update a Logstore, call the GetLogStore operation to retrieve the configuration of the Logstore. Then, modify the configuration and pass it to the UpdateLogStore operation.
   * - The Host in the request syntax consists of a project name and a Simple Log Service (SLS) endpoint. You must specify the project in the Host.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations. This poses a high security risk. We recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O\\&M. The RAM user must be granted the required permissions to operate SLS resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the project name, the Logstore name, and the region where the project resides. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html) and [Manage Logstores](https://help.aliyun.com/document_detail/48990.html).
   * ### Authorization
   * The following table describes the authorization required for this operation. To grant a RAM user or RAM role permission to call this operation, add the required action to the Action element of a RAM policy.
   * | Action               | Resource description in an authorization policy                                    |
   * | :------------------- | :--------------------------------------------------------------------------------- |
   * | `log:UpdateLogStore` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}` |
   * 
   * @param request - UpdateLogStoreRequest
   * @returns UpdateLogStoreResponse
   */
  async updateLogStore(project: string, logstore: string, request: $_model.UpdateLogStoreRequest): Promise<$_model.UpdateLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the encryption configuration of a Logstore. You can create encryption configurations for the Logstore and enable or disable the encryption feature.
   * 
   * @remarks
   * ## [](#)Limits
   * If you specify a data encryption method when you configure data encryption settings, you cannot switch to the other method after the configuration. In addition, you cannot change the encryption algorithm or the encryption type. You can only enable or disable the encryption feature by using the enable parameter. If you specify the encryption method by using the service key of Simple Log Service when you configure data encryption settings, you cannot switch to the encryption method by using Bring Your Own Key (BYOK) keys after the configuration.
   * ## [](#)Create encryption configurations
   * ### [](#)Encryption by using service keys
   * Simple Log Service is fully responsible for data encryption and key management. No additional operations are required. When you create encryption configurations for the Logstore, you must specify the enable and encryptType parameters.
   * ### [](#byok)Encryption by using BYOK keys
   * You must create a customer master key (CMK) in Key Management Service (KMS). Then, Simple Log Service encrypts logs by using the CMK. When you create encryption configurations for the Logstore, you must specify the enable, encryptType, and userCmkInfo parameters.
   * ## [](#)Enable or disable the encryption feature
   * After you create encryption configurations for the Logstore, you cannot modify the encryptType or userCmkInfo parameters. However, you can enable and disable the encryption feature by using the enable parameter.
   * 
   * @param request - UpdateLogStoreEncryptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreEncryptionResponse
   */
  async updateLogStoreEncryptionWithOptions(project: string, logstore: string, request: $_model.UpdateLogStoreEncryptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogStoreEncryptionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.encryptType)) {
      body["encryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.userCmkInfo)) {
      body["userCmkInfo"] = request.userCmkInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogStoreEncryption",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/encryption`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLogStoreEncryptionResponse>(await this.execute(params, req, runtime), new $_model.UpdateLogStoreEncryptionResponse({}));
  }

  /**
   * Updates the encryption configuration of a Logstore. You can create encryption configurations for the Logstore and enable or disable the encryption feature.
   * 
   * @remarks
   * ## [](#)Limits
   * If you specify a data encryption method when you configure data encryption settings, you cannot switch to the other method after the configuration. In addition, you cannot change the encryption algorithm or the encryption type. You can only enable or disable the encryption feature by using the enable parameter. If you specify the encryption method by using the service key of Simple Log Service when you configure data encryption settings, you cannot switch to the encryption method by using Bring Your Own Key (BYOK) keys after the configuration.
   * ## [](#)Create encryption configurations
   * ### [](#)Encryption by using service keys
   * Simple Log Service is fully responsible for data encryption and key management. No additional operations are required. When you create encryption configurations for the Logstore, you must specify the enable and encryptType parameters.
   * ### [](#byok)Encryption by using BYOK keys
   * You must create a customer master key (CMK) in Key Management Service (KMS). Then, Simple Log Service encrypts logs by using the CMK. When you create encryption configurations for the Logstore, you must specify the enable, encryptType, and userCmkInfo parameters.
   * ## [](#)Enable or disable the encryption feature
   * After you create encryption configurations for the Logstore, you cannot modify the encryptType or userCmkInfo parameters. However, you can enable and disable the encryption feature by using the enable parameter.
   * 
   * @param request - UpdateLogStoreEncryptionRequest
   * @returns UpdateLogStoreEncryptionResponse
   */
  async updateLogStoreEncryption(project: string, logstore: string, request: $_model.UpdateLogStoreEncryptionRequest): Promise<$_model.UpdateLogStoreEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreEncryptionWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Changes the billing mode of a Logstore.
   * 
   * @param request - UpdateLogStoreMeteringModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreMeteringModeResponse
   */
  async updateLogStoreMeteringModeWithOptions(project: string, logstore: string, request: $_model.UpdateLogStoreMeteringModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogStoreMeteringModeResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meteringMode)) {
      body["meteringMode"] = request.meteringMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/meteringmode`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLogStoreMeteringModeResponse>(await this.execute(params, req, runtime), new $_model.UpdateLogStoreMeteringModeResponse({}));
  }

  /**
   * Changes the billing mode of a Logstore.
   * 
   * @param request - UpdateLogStoreMeteringModeRequest
   * @returns UpdateLogStoreMeteringModeResponse
   */
  async updateLogStoreMeteringMode(project: string, logstore: string, request: $_model.UpdateLogStoreMeteringModeRequest): Promise<$_model.UpdateLogStoreMeteringModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreMeteringModeWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the ingest processor for a Logstore.
   * 
   * @param request - UpdateLogStoreProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogStoreProcessorResponse
   */
  async updateLogStoreProcessorWithOptions(project: string, logstore: string, request: $_model.UpdateLogStoreProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogStoreProcessorResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processorName)) {
      body["processorName"] = request.processorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogStoreProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logstores/${logstore}/processor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLogStoreProcessorResponse>(await this.execute(params, req, runtime), new $_model.UpdateLogStoreProcessorResponse({}));
  }

  /**
   * Updates the ingest processor for a Logstore.
   * 
   * @param request - UpdateLogStoreProcessorRequest
   * @returns UpdateLogStoreProcessorResponse
   */
  async updateLogStoreProcessor(project: string, logstore: string, request: $_model.UpdateLogStoreProcessorRequest): Promise<$_model.UpdateLogStoreProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogStoreProcessorWithOptions(project, logstore, request, headers, runtime);
  }

  /**
   * Updates the service log configurations of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateLoggingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoggingResponse
   */
  async updateLoggingWithOptions(project: string, request: $_model.UpdateLoggingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLoggingResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.loggingDetails)) {
      body["loggingDetails"] = request.loggingDetails;
    }

    if (!$dara.isNull(request.loggingProject)) {
      body["loggingProject"] = request.loggingProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogging",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/logging`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLoggingResponse>(await this.execute(params, req, runtime), new $_model.UpdateLoggingResponse({}));
  }

  /**
   * Updates the service log configurations of a project.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateLoggingRequest
   * @returns UpdateLoggingResponse
   */
  async updateLogging(project: string, request: $_model.UpdateLoggingRequest): Promise<$_model.UpdateLoggingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLoggingWithOptions(project, request, headers, runtime);
  }

  /**
   * Updates a Logtail pipeline configuration.
   * 
   * @param request - UpdateLogtailPipelineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogtailPipelineConfigResponse
   */
  async updateLogtailPipelineConfigWithOptions(project: string, configName: string, request: $_model.UpdateLogtailPipelineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogtailPipelineConfigResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregators)) {
      body["aggregators"] = request.aggregators;
    }

    if (!$dara.isNull(request.configName)) {
      body["configName"] = request.configName;
    }

    if (!$dara.isNull(request.flushers)) {
      body["flushers"] = request.flushers;
    }

    if (!$dara.isNull(request.global)) {
      body["global"] = request.global;
    }

    if (!$dara.isNull(request.inputs)) {
      body["inputs"] = request.inputs;
    }

    if (!$dara.isNull(request.logSample)) {
      body["logSample"] = request.logSample;
    }

    if (!$dara.isNull(request.processors)) {
      body["processors"] = request.processors;
    }

    if (!$dara.isNull(request.task)) {
      body["task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogtailPipelineConfig",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/pipelineconfigs/${configName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateLogtailPipelineConfigResponse>(await this.execute(params, req, runtime), new $_model.UpdateLogtailPipelineConfigResponse({}));
  }

  /**
   * Updates a Logtail pipeline configuration.
   * 
   * @param request - UpdateLogtailPipelineConfigRequest
   * @returns UpdateLogtailPipelineConfigResponse
   */
  async updateLogtailPipelineConfig(project: string, configName: string, request: $_model.UpdateLogtailPipelineConfigRequest): Promise<$_model.UpdateLogtailPipelineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogtailPipelineConfigWithOptions(project, configName, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMachineGroupResponse
   */
  async updateMachineGroupWithOptions(project: string, groupName: string, request: $_model.UpdateMachineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMachineGroupResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupAttribute)) {
      body["groupAttribute"] = request.groupAttribute;
    }

    if (!$dara.isNull(request.groupName)) {
      body["groupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      body["groupType"] = request.groupType;
    }

    if (!$dara.isNull(request.machineIdentifyType)) {
      body["machineIdentifyType"] = request.machineIdentifyType;
    }

    if (!$dara.isNull(request.machineList)) {
      body["machineList"] = request.machineList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMachineGroup",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${groupName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMachineGroupResponse>(await this.execute(params, req, runtime), new $_model.UpdateMachineGroupResponse({}));
  }

  /**
   * Modifies the configuration of a machine group.
   * 
   * @remarks
   * Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupRequest
   * @returns UpdateMachineGroupResponse
   */
  async updateMachineGroup(project: string, groupName: string, request: $_model.UpdateMachineGroupRequest): Promise<$_model.UpdateMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupWithOptions(project, groupName, request, headers, runtime);
  }

  /**
   * Modifies the machines in a machine group. You can add machine to or remove machines from the machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMachineGroupMachineResponse
   */
  async updateMachineGroupMachineWithOptions(project: string, machineGroup: string, request: $_model.UpdateMachineGroupMachineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMachineGroupMachineResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMachineGroupMachine",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/machinegroups/${machineGroup}/machines`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMachineGroupMachineResponse>(await this.execute(params, req, runtime), new $_model.UpdateMachineGroupMachineResponse({}));
  }

  /**
   * Modifies the machines in a machine group. You can add machine to or remove machines from the machine group.
   * 
   * @remarks
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - UpdateMachineGroupMachineRequest
   * @returns UpdateMachineGroupMachineResponse
   */
  async updateMachineGroupMachine(project: string, machineGroup: string, request: $_model.UpdateMachineGroupMachineRequest): Promise<$_model.UpdateMachineGroupMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMachineGroupMachineWithOptions(project, machineGroup, request, headers, runtime);
  }

  /**
   * Updates a materialized view.
   * 
   * @param request - UpdateMaterializedViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMaterializedViewResponse
   */
  async updateMaterializedViewWithOptions(project: string, name: string, request: $_model.UpdateMaterializedViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMaterializedViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggIntervalMins)) {
      body["aggIntervalMins"] = request.aggIntervalMins;
    }

    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.originalSql)) {
      body["originalSql"] = request.originalSql;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMaterializedView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/materializedviews/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMaterializedViewResponse>(await this.execute(params, req, runtime), new $_model.UpdateMaterializedViewResponse({}));
  }

  /**
   * Updates a materialized view.
   * 
   * @param request - UpdateMaterializedViewRequest
   * @returns UpdateMaterializedViewResponse
   */
  async updateMaterializedView(project: string, name: string, request: $_model.UpdateMaterializedViewRequest): Promise<$_model.UpdateMaterializedViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMaterializedViewWithOptions(project, name, request, headers, runtime);
  }

  /**
   * Updates a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param request - UpdateMaxComputeExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMaxComputeExportResponse
   */
  async updateMaxComputeExportWithOptions(project: string, mcExportName: string, request: $_model.UpdateMaxComputeExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMaxComputeExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMaxComputeExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/maxcomputeexports/${mcExportName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMaxComputeExportResponse>(await this.execute(params, req, runtime), new $_model.UpdateMaxComputeExportResponse({}));
  }

  /**
   * Updates a MaxCompute data shipping job.
   * 
   * @remarks
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * 
   * @param request - UpdateMaxComputeExportRequest
   * @returns UpdateMaxComputeExportResponse
   */
  async updateMaxComputeExport(project: string, mcExportName: string, request: $_model.UpdateMaxComputeExportRequest): Promise<$_model.UpdateMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMaxComputeExportWithOptions(project, mcExportName, request, headers, runtime);
  }

  /**
   * Updates the configuration of an existing Metricstore. A Metricstore is used to store metrics.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html).
   * - The Metricstore that you want to update must already exist.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify a project in the Host.
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full permissions for all API operations, which poses a security risk. We recommend that you use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted only the permissions required to access Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - You must know the name and region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores or Metricstores in a project.
   * - Metrics are deleted after their retention period expires.
   * 
   * @param request - UpdateMetricStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetricStoreResponse
   */
  async updateMetricStoreWithOptions(project: string, name: string, request: $_model.UpdateMetricStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetricStoreResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appendMeta)) {
      body["appendMeta"] = request.appendMeta;
    }

    if (!$dara.isNull(request.autoSplit)) {
      body["autoSplit"] = request.autoSplit;
    }

    if (!$dara.isNull(request.hotTtl)) {
      body["hot_ttl"] = request.hotTtl;
    }

    if (!$dara.isNull(request.infrequentAccessTTL)) {
      body["infrequentAccessTTL"] = request.infrequentAccessTTL;
    }

    if (!$dara.isNull(request.maxSplitShard)) {
      body["maxSplitShard"] = request.maxSplitShard;
    }

    if (!$dara.isNull(request.mode)) {
      body["mode"] = request.mode;
    }

    if (!$dara.isNull(request.shardingPolicy)) {
      body["shardingPolicy"] = request.shardingPolicy;
    }

    if (!$dara.isNull(request.ttl)) {
      body["ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetricStore",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMetricStoreResponse>(await this.execute(params, req, runtime), new $_model.UpdateMetricStoreResponse({}));
  }

  /**
   * Updates the configuration of an existing Metricstore. A Metricstore is used to store metrics.
   * 
   * @remarks
   * A [Metricstore](https://help.aliyun.com/document_detail/171723.html) is used to store [metrics](https://help.aliyun.com/document_detail/174965.html).
   * - The Metricstore that you want to update must already exist.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify a project in the Host.
   * - You must have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has full permissions for all API operations, which poses a security risk. We recommend that you use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted only the permissions required to access Simple Log Service resources. For more information, see [Create and authorize a RAM user](https://help.aliyun.com/document_detail/47664.html).
   * - You must know the name and region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * - You can create a maximum of 200 Logstores or Metricstores in a project.
   * - Metrics are deleted after their retention period expires.
   * 
   * @param request - UpdateMetricStoreRequest
   * @returns UpdateMetricStoreResponse
   */
  async updateMetricStore(project: string, name: string, request: $_model.UpdateMetricStoreRequest): Promise<$_model.UpdateMetricStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricStoreWithOptions(project, name, request, headers, runtime);
  }

  /**
   * Updates the billing mode of a specified Metricstore.
   * 
   * @remarks
   * A Metricstore supports two billing modes: [Pay-by-feature](https://help.aliyun.com/document_detail/48220.html) and [Pay-by-ingested-data](https://help.aliyun.com/document_detail/2365756.html).
   * - Specify an existing Metricstore.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify the project in the Host.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair that belongs to an Alibaba Cloud account has permissions for all API operations, which poses a high security threat. We recommend that you use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted the required permissions to manage Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the name and region of the project. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - UpdateMetricStoreMeteringModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetricStoreMeteringModeResponse
   */
  async updateMetricStoreMeteringModeWithOptions(project: string, metricStore: string, request: $_model.UpdateMetricStoreMeteringModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetricStoreMeteringModeResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meteringMode)) {
      body["meteringMode"] = request.meteringMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetricStoreMeteringMode",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${metricStore}/meteringmode`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMetricStoreMeteringModeResponse>(await this.execute(params, req, runtime), new $_model.UpdateMetricStoreMeteringModeResponse({}));
  }

  /**
   * Updates the billing mode of a specified Metricstore.
   * 
   * @remarks
   * A Metricstore supports two billing modes: [Pay-by-feature](https://help.aliyun.com/document_detail/48220.html) and [Pay-by-ingested-data](https://help.aliyun.com/document_detail/2365756.html).
   * - Specify an existing Metricstore.
   * - The Host in the request syntax consists of a project name and a Simple Log Service endpoint. You must specify the project in the Host.
   * - Obtain an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair that belongs to an Alibaba Cloud account has permissions for all API operations, which poses a high security threat. We recommend that you use a RAM user to call API operations or perform routine operations and maintenance (O\\&M). The RAM user must be granted the required permissions to manage Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * - Obtain the name and region of the project. For more information, see [Manage projects](https://help.aliyun.com/document_detail/48984.html).
   * 
   * @param request - UpdateMetricStoreMeteringModeRequest
   * @returns UpdateMetricStoreMeteringModeResponse
   */
  async updateMetricStoreMeteringMode(project: string, metricStore: string, request: $_model.UpdateMetricStoreMeteringModeRequest): Promise<$_model.UpdateMetricStoreMeteringModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricStoreMeteringModeWithOptions(project, metricStore, request, headers, runtime);
  }

  /**
   * Updates the ingest processor that is associated with a Metricstore.
   * 
   * @param request - UpdateMetricStoreProcessorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetricStoreProcessorResponse
   */
  async updateMetricStoreProcessorWithOptions(project: string, metricstore: string, request: $_model.UpdateMetricStoreProcessorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetricStoreProcessorResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.processorName)) {
      body["processorName"] = request.processorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetricStoreProcessor",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/metricstores/${metricstore}/processor`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateMetricStoreProcessorResponse>(await this.execute(params, req, runtime), new $_model.UpdateMetricStoreProcessorResponse({}));
  }

  /**
   * Updates the ingest processor that is associated with a Metricstore.
   * 
   * @param request - UpdateMetricStoreProcessorRequest
   * @returns UpdateMetricStoreProcessorResponse
   */
  async updateMetricStoreProcessor(project: string, metricstore: string, request: $_model.UpdateMetricStoreProcessorRequest): Promise<$_model.UpdateMetricStoreProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMetricStoreProcessorWithOptions(project, metricstore, request, headers, runtime);
  }

  /**
   * Updates an Object Storage Service (OSS) data shipping job.
   * 
   * @param request - UpdateOSSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSExportResponse
   */
  async updateOSSExportWithOptions(project: string, ossExportName: string, request: $_model.UpdateOSSExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOSSExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOSSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossexports/${ossExportName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateOSSExportResponse>(await this.execute(params, req, runtime), new $_model.UpdateOSSExportResponse({}));
  }

  /**
   * Updates an Object Storage Service (OSS) data shipping job.
   * 
   * @param request - UpdateOSSExportRequest
   * @returns UpdateOSSExportResponse
   */
  async updateOSSExport(project: string, ossExportName: string, request: $_model.UpdateOSSExportRequest): Promise<$_model.UpdateOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  /**
   * Updates an OSS-HDFS data shipping job.
   * 
   * @param request - UpdateOSSHDFSExportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSHDFSExportResponse
   */
  async updateOSSHDFSExportWithOptions(project: string, ossExportName: string, request: $_model.UpdateOSSHDFSExportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOSSHDFSExportResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOSSHDFSExport",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/osshdfsexports/${ossExportName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateOSSHDFSExportResponse>(await this.execute(params, req, runtime), new $_model.UpdateOSSHDFSExportResponse({}));
  }

  /**
   * Updates an OSS-HDFS data shipping job.
   * 
   * @param request - UpdateOSSHDFSExportRequest
   * @returns UpdateOSSHDFSExportResponse
   */
  async updateOSSHDFSExport(project: string, ossExportName: string, request: $_model.UpdateOSSHDFSExportRequest): Promise<$_model.UpdateOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSHDFSExportWithOptions(project, ossExportName, request, headers, runtime);
  }

  /**
   * Updates the specified OSS import task.
   * 
   * @param request - UpdateOSSIngestionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOSSIngestionResponse
   */
  async updateOSSIngestionWithOptions(project: string, ossIngestionName: string, request: $_model.UpdateOSSIngestionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOSSIngestionResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOSSIngestion",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/ossingestions/${ossIngestionName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateOSSIngestionResponse>(await this.execute(params, req, runtime), new $_model.UpdateOSSIngestionResponse({}));
  }

  /**
   * Updates the specified OSS import task.
   * 
   * @param request - UpdateOSSIngestionRequest
   * @returns UpdateOSSIngestionResponse
   */
  async updateOSSIngestion(project: string, ossIngestionName: string, request: $_model.UpdateOSSIngestionRequest): Promise<$_model.UpdateOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOSSIngestionWithOptions(project, ossIngestionName, request, headers, runtime);
  }

  /**
   * Updates project information.
   * 
   * @remarks
   * ### Usage notes
   * - The Host parameter consists of a project name and a Simple Log Service endpoint. You must specify a project in the Host parameter.
   * - Make sure that you have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security risk. For security, we recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O\\&M. The RAM user must have permissions to operate on Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * ### Authorization resources
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy statement to grant a RAM user or RAM role the permissions to call this operation.
   * | Action              | Resource                                                  |
   * | ------------------- | --------------------------------------------------------- |
   * | `log:UpdateProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(project: string, request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.recycleBinEnabled)) {
      body["recycleBinEnabled"] = request.recycleBinEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.execute(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * Updates project information.
   * 
   * @remarks
   * ### Usage notes
   * - The Host parameter consists of a project name and a Simple Log Service endpoint. You must specify a project in the Host parameter.
   * - Make sure that you have an AccessKey pair. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * An AccessKey pair for an Alibaba Cloud account has permissions on all API operations, which poses a high security risk. For security, we recommend that you create and use a Resource Access Management (RAM) user to make API calls or perform routine O\\&M. The RAM user must have permissions to operate on Simple Log Service resources. For more information, see [Create a RAM user and grant permissions](https://help.aliyun.com/document_detail/47664.html).
   * ### Authorization resources
   * The following table describes the authorization information for this operation. Add this information to the Action element of a RAM policy statement to grant a RAM user or RAM role the permissions to call this operation.
   * | Action              | Resource                                                  |
   * | ------------------- | --------------------------------------------------------- |
   * | `log:UpdateProject` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}` |
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(project: string, request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(project, request, headers, runtime);
  }

  /**
   * Updates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:UpdateSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param request - UpdateSavedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSavedSearchResponse
   */
  async updateSavedSearchWithOptions(project: string, savedsearchName: string, request: $_model.UpdateSavedSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSavedSearchResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.logstore)) {
      body["logstore"] = request.logstore;
    }

    if (!$dara.isNull(request.savedsearchName)) {
      body["savedsearchName"] = request.savedsearchName;
    }

    if (!$dara.isNull(request.searchQuery)) {
      body["searchQuery"] = request.searchQuery;
    }

    if (!$dara.isNull(request.topic)) {
      body["topic"] = request.topic;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSavedSearch",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/savedsearches/${savedsearchName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateSavedSearchResponse>(await this.execute(params, req, runtime), new $_model.UpdateSavedSearchResponse({}));
  }

  /**
   * Updates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * - Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * - An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * - The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * - Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * | Action                  | Resource                                                                                 |
   * | :---------------------- | :--------------------------------------------------------------------------------------- |
   * | `log:UpdateSavedSearch` | `acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}` |
   * 
   * @param request - UpdateSavedSearchRequest
   * @returns UpdateSavedSearchResponse
   */
  async updateSavedSearch(project: string, savedsearchName: string, request: $_model.UpdateSavedSearchRequest): Promise<$_model.UpdateSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSavedSearchWithOptions(project, savedsearchName, request, headers, runtime);
  }

  /**
   * Updates the specified scheduled SQL task.
   * 
   * @param request - UpdateScheduledSQLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledSQLResponse
   */
  async updateScheduledSQLWithOptions(project: string, scheduledSQLName: string, request: $_model.UpdateScheduledSQLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduledSQLResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configuration)) {
      body["configuration"] = request.configuration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.schedule)) {
      body["schedule"] = request.schedule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledSQL",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/scheduledsqls/${scheduledSQLName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateScheduledSQLResponse>(await this.execute(params, req, runtime), new $_model.UpdateScheduledSQLResponse({}));
  }

  /**
   * Updates the specified scheduled SQL task.
   * 
   * @param request - UpdateScheduledSQLRequest
   * @returns UpdateScheduledSQLResponse
   */
  async updateScheduledSQL(project: string, scheduledSQLName: string, request: $_model.UpdateScheduledSQLRequest): Promise<$_model.UpdateScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateScheduledSQLWithOptions(project, scheduledSQLName, request, headers, runtime);
  }

  /**
   * When you use Standard SQL to analyze large amounts of data, a single query may not scan all logs within a specific time range, which can result in incomplete data. Although adding shards improves read and write performance, this improvement applies only to new data. To analyze more data in a single query, enable Dedicated SQL and add more compute resources.
   * 
   * @remarks
   * *Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/223777.html) for Dedicated SQL.**
   * 
   * @param request - UpdateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceResponse
   */
  async updateSqlInstanceWithOptions(project: string, request: $_model.UpdateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSqlInstanceResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cu)) {
      body["cu"] = request.cu;
    }

    if (!$dara.isNull(request.useAsDefault)) {
      body["useAsDefault"] = request.useAsDefault;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstance",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/sqlinstance`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateSqlInstanceResponse>(await this.execute(params, req, runtime), new $_model.UpdateSqlInstanceResponse({}));
  }

  /**
   * When you use Standard SQL to analyze large amounts of data, a single query may not scan all logs within a specific time range, which can result in incomplete data. Although adding shards improves read and write performance, this improvement applies only to new data. To analyze more data in a single query, enable Dedicated SQL and add more compute resources.
   * 
   * @remarks
   * *Before you call this operation, make sure that you understand the billing methods and [pricing](https://help.aliyun.com/document_detail/223777.html) for Dedicated SQL.**
   * 
   * @param request - UpdateSqlInstanceRequest
   * @returns UpdateSqlInstanceResponse
   */
  async updateSqlInstance(project: string, request: $_model.UpdateSqlInstanceRequest): Promise<$_model.UpdateSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceWithOptions(project, request, headers, runtime);
  }

  /**
   * Updates the configurations of a dataset.
   * 
   * @param request - UpdateStoreViewRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStoreViewResponse
   */
  async updateStoreViewWithOptions(project: string, name: string, request: $_model.UpdateStoreViewRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStoreViewResponse> {
    request.validate();
    let hostMap : {[key: string ]: string} = { };
    hostMap["project"] = project;
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.storeType)) {
      body["storeType"] = request.storeType;
    }

    if (!$dara.isNull(request.stores)) {
      body["stores"] = request.stores;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      hostMap: hostMap,
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStoreView",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/storeviews/${name}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateStoreViewResponse>(await this.execute(params, req, runtime), new $_model.UpdateStoreViewResponse({}));
  }

  /**
   * Updates the configurations of a dataset.
   * 
   * @param request - UpdateStoreViewRequest
   * @returns UpdateStoreViewResponse
   */
  async updateStoreView(project: string, name: string, request: $_model.UpdateStoreViewRequest): Promise<$_model.UpdateStoreViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStoreViewWithOptions(project, name, request, headers, runtime);
  }

  /**
   * Creates a log collection policy for a cloud service. This way, logs can be automatically collected from the service.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai) or Singapore region to call the operation.
   * 
   * @param request - UpsertCollectionPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertCollectionPolicyResponse
   */
  async upsertCollectionPolicyWithOptions(request: $_model.UpsertCollectionPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertCollectionPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.centralizeConfig)) {
      body["centralizeConfig"] = request.centralizeConfig;
    }

    if (!$dara.isNull(request.centralizeEnabled)) {
      body["centralizeEnabled"] = request.centralizeEnabled;
    }

    if (!$dara.isNull(request.dataCode)) {
      body["dataCode"] = request.dataCode;
    }

    if (!$dara.isNull(request.dataConfig)) {
      body["dataConfig"] = request.dataConfig;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.policyConfig)) {
      body["policyConfig"] = request.policyConfig;
    }

    if (!$dara.isNull(request.policyName)) {
      body["policyName"] = request.policyName;
    }

    if (!$dara.isNull(request.productCode)) {
      body["productCode"] = request.productCode;
    }

    if (!$dara.isNull(request.resourceDirectory)) {
      body["resourceDirectory"] = request.resourceDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertCollectionPolicy",
      version: "2020-12-30",
      protocol: "HTTPS",
      pathname: `/collectionpolicy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpsertCollectionPolicyResponse>(await this.execute(params, req, runtime), new $_model.UpsertCollectionPolicyResponse({}));
  }

  /**
   * Creates a log collection policy for a cloud service. This way, logs can be automatically collected from the service.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai) or Singapore region to call the operation.
   * 
   * @param request - UpsertCollectionPolicyRequest
   * @returns UpsertCollectionPolicyResponse
   */
  async upsertCollectionPolicy(request: $_model.UpsertCollectionPolicyRequest): Promise<$_model.UpsertCollectionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertCollectionPolicyWithOptions(request, headers, runtime);
  }

}
