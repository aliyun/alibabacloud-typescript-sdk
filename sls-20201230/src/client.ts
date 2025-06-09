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
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
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
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns ApplyConfigToMachineGroupResponse
   */
  async applyConfigToMachineGroup(project: string, machineGroup: string, configName: string): Promise<$_model.ApplyConfigToMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyConfigToMachineGroupWithOptions(project, machineGroup, configName, headers, runtime);
  }

  /**
   * 调用 ai 工具
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
   * 调用 ai 工具
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
   * Sends heartbeats to a server from a consumer.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * Connections between consumers and Simple Log Service are established by sending heartbeat messages at regular intervals. If Simple Log Service does not receive heartbeat messages from a consumer on schedule, Simple Log Service deletes the consumer.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ConsumerGroupHeartBeat`|`acs:log:${regionId}:${accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/{#ConsumerGroupName}`|
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
   * Sends heartbeats to a server from a consumer.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * Connections between consumers and Simple Log Service are established by sending heartbeat messages at regular intervals. If Simple Log Service does not receive heartbeat messages from a consumer on schedule, Simple Log Service deletes the consumer.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ConsumerGroupHeartBeat`|`acs:log:${regionId}:${accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/{#ConsumerGroupName}`|
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
   *   If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
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
   *   If you do not specify a consumer, you must set **forceSuccess** to **true**. Otherwise, the checkpoint cannot be updated.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
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
   * CreateAgentInstanceConfig
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
   * CreateAgentInstanceConfig
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
   * CreateAlert
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
   * CreateAlert
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
   * Creates a tag table.
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
   * Creates a tag table.
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
   * Creates a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 100 Logtail configurations in a project.
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 100 Logtail configurations in a project.
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * You can create up to 30 consumer groups for a Logstore. The name of a consumer group must be unique in a project.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDK for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * You can create up to 30 consumer groups for a Logstore. The name of a consumer group must be unique in a project.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Simple Log Service provides examples of both regular log consumption and consumer group-based log consumption by using Simple Log Service SDK for Java. For more information, see [Consume log data](https://help.aliyun.com/document_detail/120035.html) and [Use consumer groups to consume data](https://help.aliyun.com/document_detail/28998.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * 创建下载任务
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
   * 创建下载任务
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
   * Creates a data transformation job in a project.
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
   * Creates a data transformation job in a project.
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * * You can create up to 200 Logstores in each project.
   * * If the retention period of a log reaches the data retention period that you specified for the Logstore, the log is deleted.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateLogStore`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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

    if (!$dara.isNull(request.shardCount)) {
      body["shardCount"] = request.shardCount;
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * * You can create up to 200 Logstores in each project.
   * * If the retention period of a log reaches the data retention period that you specified for the Logstore, the log is deleted.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateLogStore`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * Creates a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * Creates a Metricstore to store metric data.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * Creates a Metricstore to store metric data.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * Ships logs from a Simple Log Service Logstore to an Object Storage Service (OSS) bucket.
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
   * Ships logs from a Simple Log Service Logstore to an Object Storage Service (OSS) bucket.
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
   * Creates an OSS-HDFS data shipping job in a project.
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
   * Creates an OSS-HDFS data shipping job in a project.
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
   * Creates an Object Storage Service (OSS) data import job in a project.
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
   * Creates an Object Storage Service (OSS) data import job in a project.
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
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates a saved search.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:CreateSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * Creates a Scheduled SQL job in a project.
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
   * Creates a Scheduled SQL job in a project.
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
   * If you use the Standard SQL feature to analyze a large amount of data, the logs within the specified time range cannot be fully scanned in a single query request. In this case, the returned results may not contain all matched data. You can increase the number of shards to improve data read and write capabilities. However, this method takes effect only for incremental data. You can enable the Dedicated SQL feature to increase computing resources and the amount of data that can be analyzed in a single query request.
   * 
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing](https://help.aliyun.com/document_detail/223777.html) of Dedicated SQL.
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
   * If you use the Standard SQL feature to analyze a large amount of data, the logs within the specified time range cannot be fully scanned in a single query request. In this case, the returned results may not contain all matched data. You can increase the number of shards to improve data read and write capabilities. However, this method takes effect only for incremental data. You can enable the Dedicated SQL feature to increase computing resources and the amount of data that can be analyzed in a single query request.
   * 
   * @remarks
   * *Before you call this operation, make sure that you fully understand the [billing](https://help.aliyun.com/document_detail/223777.html) of Dedicated SQL.
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
   * 创建StoreView
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
   * 创建StoreView
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
   * DeleteAgentInstanceConfig
   * 
   * @param request - DeleteAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAgentInstanceConfigResponse
   */
  async deleteAgentInstanceConfigWithOptions(configType: string, request: $_model.DeleteAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAgentInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      query["attributes"] = request.attributes;
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
   * DeleteAgentInstanceConfig
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
   * Removes data from a dataset.
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
   * Removes data from a dataset.
   * @returns DeleteAnnotationDataResponse
   */
  async deleteAnnotationData(datasetId: string, annotationdataId: string): Promise<$_model.DeleteAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @remarks
   * You can delete a dataset only if no data exists in the dataset.
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
   * Deletes a dataset.
   * 
   * @remarks
   * You can delete a dataset only if no data exists in the dataset.
   * @returns DeleteAnnotationDataSetResponse
   */
  async deleteAnnotationDataSet(datasetId: string): Promise<$_model.DeleteAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Deletes a tag table.
   * 
   * @remarks
   * Only non-built-in tags can be deleted.
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
   * Deletes a tag table.
   * 
   * @remarks
   * Only non-built-in tags can be deleted.
   * @returns DeleteAnnotationLabelResponse
   */
  async deleteAnnotationLabel(labelId: string): Promise<$_model.DeleteAnnotationLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAnnotationLabelWithOptions(labelId, headers, runtime);
  }

  /**
   * Deletes a log collection policy from a cloud service.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * Deletes a log collection policy from a cloud service.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   If a Logtail configuration is applied to a machine group, you cannot collect data from the machine group after you delete the Logtail configuration.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns DeleteConfigResponse
   */
  async deleteConfig(project: string, configName: string): Promise<$_model.DeleteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Deletes a consumer group.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * The name of the consumer group is obtained. For more information, see [ListConsumerGroup](https://help.aliyun.com/document_detail/74964.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * Deletes a download task.
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
   * Deletes a download task.
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
   * 关闭项目的服务日志记录。
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
   * 关闭项目的服务日志记录。
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
   * Deletes a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
   * @returns DeleteMetricStoreResponse
   */
  async deleteMetricStore(project: string, name: string): Promise<$_model.DeleteMetricStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMetricStoreWithOptions(project, name, headers, runtime);
  }

  /**
   * Deletes an Object Storage Service (OSS) data shipping job.
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
   * Deletes an Object Storage Service (OSS) data shipping job.
   * @returns DeleteOSSExportResponse
   */
  async deleteOSSExport(project: string, ossExportName: string): Promise<$_model.DeleteOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 删除OSSHDFS投递任务
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
   * 删除OSSHDFS投递任务
   * @returns DeleteOSSHDFSExportResponse
   */
  async deleteOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.DeleteOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Deletes an Object Storage Service (OSS) data import job.
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
   * Deletes an Object Storage Service (OSS) data import job.
   * @returns DeleteOSSIngestionResponse
   */
  async deleteOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.DeleteOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Deletes a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * After you delete a project, all logs stored in the project and the configurations of the project are deleted and cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteProject`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * Deletes a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * After you delete a project, all logs stored in the project and the configurations of the project are deleted and cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteProject`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns DeleteProjectPolicyResponse
   */
  async deleteProjectPolicy(project: string): Promise<$_model.DeleteProjectPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Deletes a saved search.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * After you delete a saved search, it cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * After you delete a saved search, it cannot be restored. Proceed with caution.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:DeleteSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * Queries supported regions.
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
   * Queries supported regions.
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
   * GetAgentInstanceConfig
   * 
   * @param request - GetAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentInstanceConfigResponse
   */
  async getAgentInstanceConfigWithOptions(configType: string, request: $_model.GetAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      query["attributes"] = request.attributes;
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
   * GetAgentInstanceConfig
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
   * Queries data in datasets based on the unique identifier of the data.
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
   * Queries data in datasets based on the unique identifier of the data.
   * @returns GetAnnotationDataResponse
   */
  async getAnnotationData(datasetId: string, annotationdataId: string): Promise<$_model.GetAnnotationDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataWithOptions(datasetId, annotationdataId, headers, runtime);
  }

  /**
   * Queries a dataset.
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
   * Queries a dataset.
   * @returns GetAnnotationDataSetResponse
   */
  async getAnnotationDataSet(datasetId: string): Promise<$_model.GetAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAnnotationDataSetWithOptions(datasetId, headers, runtime);
  }

  /**
   * Queries a tag table by using a label ID.
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
   * Queries a tag table by using a label ID.
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
   * 调用GetCollectionPolicy获取对应的规则
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * 调用GetCollectionPolicy获取对应的规则
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * Queries the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
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
   * Queries the details of a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The name of the required Logtail configuration is obtained. For more information, see [ListConfig](https://help.aliyun.com/document_detail/29043.html).
   * @returns GetConfigResponse
   */
  async getConfig(project: string, configName: string): Promise<$_model.GetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(project, configName, headers, runtime);
  }

  /**
   * Queries the contextual logs of a specified log.
   * 
   * @remarks
   * ### Usage notes
   * * You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * The values of the pack_id and pack_meta fields are obtained before you query logs. The fields are internal fields, and you can obtain the values by using the debugging feature of your browser in the Simple Log Service console.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetLogStoreContextLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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
   * * You can specify a log as the start log. The time range of a contextual query is one day before and one day after the generation time of the start log.
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * The values of the pack_id and pack_meta fields are obtained before you query logs. The fields are internal fields, and you can obtain the values by using the debugging feature of your browser in the Simple Log Service console.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetLogStoreContextLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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
   * Queries a cursor based on a point in time.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
   *     *   A project can have multiple Logstores.
   *     *   A Logstore can have multiple shards.
   *     *   You can use a cursor to obtain a log in a shard.
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
   * Queries a cursor based on a point in time.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The following content describes the relationships among a cursor, project, Logstore, and shard:
   *     *   A project can have multiple Logstores.
   *     *   A Logstore can have multiple shards.
   *     *   You can use a cursor to obtain a log in a shard.
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
   * Queries the server time of a cursor.
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
   * Queries the server time of a cursor.
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns GetDashboardResponse
   */
  async getDashboard(project: string, dashboardName: string): Promise<$_model.GetDashboardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardWithOptions(project, dashboardName, headers, runtime);
  }

  /**
   * Queries the information about a download task.
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
   * Queries the information about a download task.
   * @returns GetDownloadJobResponse
   */
  async getDownloadJob(project: string, downloadJobName: string): Promise<$_model.GetDownloadJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDownloadJobWithOptions(project, downloadJobName, headers, runtime);
  }

  /**
   * Queries the configurations of a data transformation job.
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
   * Queries the configurations of a data transformation job.
   * @returns GetETLResponse
   */
  async getETL(project: string, etlName: string): Promise<$_model.GetETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Queries the distribution of logs that meet the specified search conditions in a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:__receive_time__ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](https://help.aliyun.com/document_detail/462234.html).
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
   * Queries the distribution of logs that meet the specified search conditions in a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   The time range is evenly divided into subintervals in the responses. If the time range that is specified in the request remains unchanged, the subintervals in the responses also remain unchanged.
   * *   If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete result. In this case, you must check the value of the progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete result. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * *   After a log is written to a Logstore, you can call the GetHistograms or GetLogs operation to query the log after a short latency. The latency of a query varies based on the type of the log. Simple Log Service classifies logs into the following types based on the log time:
   *     *   Real-time data: The difference between the time record in a log and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds.
   *     *   Historical data: The difference between the time record in a log and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios.
   *     After real-time data is written to a Logstore, the data can be queried with a maximum latency of 3 seconds. For 99.9% of queries, the latency is no more than 1 second.
   * > Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:__receive_time__ field for each log. The receiving time indicates the time at which Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * *   Simple Log Service provides examples on how to call the GetHistograms operation by using Simple Log Service SDK for Java. For more information, see [Use GetHistograms to query the distribution of logs](https://help.aliyun.com/document_detail/462234.html).
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
   * Queries an ingest processor.
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
   * Queries an ingest processor.
   * @returns GetIngestProcessorResponse
   */
  async getIngestProcessor(project: string, processorName: string): Promise<$_model.GetIngestProcessorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIngestProcessorWithOptions(project, processorName, headers, runtime);
  }

  /**
   * Queries the details of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
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
   * Queries the details of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * @returns GetLogStoreResponse
   */
  async getLogStore(project: string, logstore: string): Promise<$_model.GetLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLogStoreWithOptions(project, logstore, headers, runtime);
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
   * Queries the logs of a Logstore in a project.
   * 
   * @remarks
   * ### Usage notes
   * **Note** Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete results. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete results. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * * After a log is written to a Logstore, you can call the GetHistograms or the GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
   *   * Real-time data: The difference between the time record in a log of this type and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds\\]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios.
   *   * Historical data: The difference between the time record in a log of this type and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with an approximate latency of 3 seconds.
   * **Note** Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:**receive_time** field for each log. The receiving time indicates when Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds\\], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * * Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/407683.html) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/407684.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetLogStoreLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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
   * Queries the logs of a Logstore in a project.
   * 
   * @remarks
   * ### Usage notes
   * **Note** Simple Log Service allows you to create a Scheduled SQL job. For more information, see [Create a scheduled SQL job](https://help.aliyun.com/document_detail/286457.html).
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * If the number of logs in a Logstore significantly changes, Simple Log Service cannot predict the number of times that you must call this operation to obtain the complete results. In this case, you must check the value of the x-log-progress parameter in the response of each request and determine whether to call this operation one more time to obtain the complete results. Each time you call this operation, the same number of charge units (CUs) are consumed.
   * * After a log is written to a Logstore, you can call the GetHistograms or the GetLogs operation to query the log. The latency of the query varies based on the type of the log. Simple Log Service classifies logs into the following types based on log timestamps:
   *   * Real-time data: The difference between the time record in a log of this type and the current time on Simple Log Service is within the interval (-180 seconds,900 seconds\\]. For example, if a log was generated at 12:03:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as real-time data. This type of log is usually generated in common scenarios.
   *   * Historical data: The difference between the time record in a log of this type and the current time on Simple Log Service is within the interval [-604,800 seconds,-180 seconds). For example, if a log was generated at 12:00:00, September 25, 2014 (UTC) and Simple Log Service received the log at 12:05:00, September 25, 2014 (UTC), Simple Log Service processes the log as historical data. This type of log is usually generated in data backfill scenarios. After real-time data is written to a Logstore, the data can be queried with an approximate latency of 3 seconds.
   * **Note** Simple Log Service calculates the difference between the log time that is specified by the __time__ field and the receiving time that is specified by the __tag__:**receive_time** field for each log. The receiving time indicates when Simple Log Service receives the log. If the difference is within the interval (-180 seconds,900 seconds\\], Simple Log Service processes the log as real-time data. If the difference is within the interval [-604,800 seconds,-180 seconds), Simple Log Service processes the log as historical data.
   * * Simple Log Service provides examples on how to call the GetLogs operation by using Simple Log Service SDK for Java and Simple Log Service SDK for Python. For more information, see [Examples of calling the GetLogs operation by using Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/407683.html) and [Examples of calling the GetLogs operation by using Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/407684.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetLogStoreLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}`|
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
   * Queries the raw log data in a Logstore of a project. The returned result contains the raw log data within a specific time range. The returned result is compressed before transmission.
   * 
   * @remarks
   *   You can call this operation by using Alibaba Cloud SDK for Go, Java, TypeScript, or Python.
   * *   You can call this operation by using Simple Log Service SDK for Go or Java.
   * *   For more information, see [GetLogs](https://help.aliyun.com/document_detail/29029.html).
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
   * Queries the raw log data in a Logstore of a project. The returned result contains the raw log data within a specific time range. The returned result is compressed before transmission.
   * 
   * @remarks
   *   You can call this operation by using Alibaba Cloud SDK for Go, Java, TypeScript, or Python.
   * *   You can call this operation by using Simple Log Service SDK for Go or Java.
   * *   For more information, see [GetLogs](https://help.aliyun.com/document_detail/29029.html).
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
   * Simple Log Service provides intelligent analysis capabilities that can be used to analyze basic data such as logs, metrics, and traces. You can call the GetMLServiceResults operation to obtain the analysis results of a model. You can call the operation in the following scenarios: Named Entity Recognition (NER) tasks on logs, anomaly detection on time series, and root cause analysis on high-latency traces.
   * 
   * @remarks
   * You must obtain the following basic permissions before you call this operation:
   *     {
   *         "Version": "1",
   *         "Statement": [
   *             {
   *                 "Action": [
   *                     "log:Get*"
   *                 ],
   *                 "Resource": [
   *                     "acs:log:*:*:mlservice/sls_builtin_*"
   *                 ],
   *                 "Effect": "Allow"
   *             }
   *         ]
   *     }
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
   * Simple Log Service provides intelligent analysis capabilities that can be used to analyze basic data such as logs, metrics, and traces. You can call the GetMLServiceResults operation to obtain the analysis results of a model. You can call the operation in the following scenarios: Named Entity Recognition (NER) tasks on logs, anomaly detection on time series, and root cause analysis on high-latency traces.
   * 
   * @remarks
   * You must obtain the following basic permissions before you call this operation:
   *     {
   *         "Version": "1",
   *         "Statement": [
   *             {
   *                 "Action": [
   *                     "log:Get*"
   *                 ],
   *                 "Resource": [
   *                     "acs:log:*:*:mlservice/sls_builtin_*"
   *                 ],
   *                 "Effect": "Allow"
   *             }
   *         ]
   *     }
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
   * Queries the details of a machine group.
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
   * Queries the details of a machine group.
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
   * Queries a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * Metricstores are used to store metric data. For more information about Metricstores, see [Metricstores](https://help.aliyun.com/document_detail/171723.html). For more information about metric data, see [Metric data](https://help.aliyun.com/document_detail/174965.html). You can call this operation to query the settings of a Metricstore. To query the metric data in a Metricstore, see [Query and analysis](https://help.aliyun.com/document_detail/174968.html) and [GetLogsV2](https://help.aliyun.com/document_detail/2771318.html).
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * Metricstores are used to store metric data. For more information about Metricstores, see [Metricstores](https://help.aliyun.com/document_detail/171723.html). For more information about metric data, see [Metric data](https://help.aliyun.com/document_detail/174965.html). You can call this operation to query the settings of a Metricstore. To query the metric data in a Metricstore, see [Query and analysis](https://help.aliyun.com/document_detail/174968.html) and [GetLogsV2](https://help.aliyun.com/document_detail/2771318.html).
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * @returns GetMetricStoreMeteringModeResponse
   */
  async getMetricStoreMeteringMode(project: string, metricStore: string): Promise<$_model.GetMetricStoreMeteringModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricStoreMeteringModeWithOptions(project, metricStore, headers, runtime);
  }

  /**
   * 获取OSS投递任务
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
   * 获取OSS投递任务
   * @returns GetOSSExportResponse
   */
  async getOSSExport(project: string, ossExportName: string): Promise<$_model.GetOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Get OSSHDFS Exports
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
   * Get OSSHDFS Exports
   * @returns GetOSSHDFSExportResponse
   */
  async getOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.GetOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Queries the information about an Object Storage Service (OSS) data import job.
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
   * Queries the information about an Object Storage Service (OSS) data import job.
   * @returns GetOSSIngestionResponse
   */
  async getOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.GetOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Queries the details of a project.
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
   * Queries the details of a project.
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * * You must set query to a standard SQL statement.
   * * You must specify a Logstore in the FROM clause of an SQL statement. A Logstore can be used as an SQL table.
   * * You must specify a time range in an SQL statement by using the __date__ or __time__ parameter. The value of the __date__ parameter is a timestamp. The value of the __time__ parameter is an integer, and the unit of the value is seconds.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetProjectLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * * Indexes are configured before you query logs. For more information, see [Create indexes](https://help.aliyun.com/document_detail/90732.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * * You must set query to a standard SQL statement.
   * * You must specify a Logstore in the FROM clause of an SQL statement. A Logstore can be used as an SQL table.
   * * You must specify a time range in an SQL statement by using the __date__ or __time__ parameter. The value of the __date__ parameter is a timestamp. The value of the __time__ parameter is an integer, and the unit of the value is seconds.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetProjectLogs`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns GetProjectPolicyResponse
   */
  async getProjectPolicy(project: string): Promise<$_model.GetProjectPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectPolicyWithOptions(project, headers, runtime);
  }

  /**
   * Queries a saved search.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * You can call the ListSavedSearch operation to query the name of a saved search.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * You can call the ListSavedSearch operation to query the name of a saved search.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:GetSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
   * @returns GetSavedSearchResponse
   */
  async getSavedSearch(project: string, savedsearchName: string): Promise<$_model.GetSavedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSavedSearchWithOptions(project, savedsearchName, headers, runtime);
  }

  /**
   * Queries the information about a Scheduled SQL job.
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
   * Queries the information about a Scheduled SQL job.
   * @returns GetScheduledSQLResponse
   */
  async getScheduledSQL(project: string, scheduledSQLName: string): Promise<$_model.GetScheduledSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledSQLWithOptions(project, scheduledSQLName, headers, runtime);
  }

  /**
   * Queries the activation status of Simple Log Service. You must use the endpoint for Simple Log Service only in the China (Shanghai) or Singapore region.
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
   * Queries the activation status of Simple Log Service. You must use the endpoint for Simple Log Service only in the China (Shanghai) or Singapore region.
   * @returns GetSlsServiceResponse
   */
  async getSlsService(): Promise<$_model.GetSlsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSlsServiceWithOptions(headers, runtime);
  }

  /**
   * Queries the configurations of the Dedicated SQL feature.
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
   * Queries the configurations of the Dedicated SQL feature.
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
   * ListAgentInstanceConfigs
   * 
   * @param request - ListAgentInstanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentInstanceConfigsResponse
   */
  async listAgentInstanceConfigsWithOptions(request: $_model.ListAgentInstanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAgentInstanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      query["attributes"] = request.attributes;
    }

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
   * ListAgentInstanceConfigs
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
   * 获取 ai 工具列表
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
   * 获取 ai 工具列表
   * @returns ListAiToolsResponse
   */
  async listAiTools(): Promise<$_model.ListAiToolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAiToolsWithOptions(headers, runtime);
  }

  /**
   * Queries a list of alert rules in a project.
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
   * Queries a list of alert rules in a project.
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
   * Queries data in datasets.
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
   * Queries data in datasets.
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
   * Queries a list of datasets.
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
   * Queries a list of datasets.
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
   * Queries a list of tag tables.
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
   * Queries a list of tag tables.
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
   * Queries a list of log collection policies for cloud services.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * Queries a list of log collection policies for cloud services.
   * 
   * @remarks
   * You must use the Simple Log Service endpoint for the China (Shanghai), Singapore, or Heyuan ACDR Auto region to call the operation.
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * Queries all consumer groups of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#LogstoreName}/consumergroup/*`|
   * @returns ListConsumerGroupResponse
   */
  async listConsumerGroup(project: string, logstore: string): Promise<$_model.ListConsumerGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumerGroupWithOptions(project, logstore, headers, runtime);
  }

  /**
   * Queries a list of dashboards.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * Queries a list of dashboards.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Only one custom domain name can be bound to each project.
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Only one custom domain name can be bound to each project.
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
   * 列举下载任务
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
   * 列举下载任务
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
   * Queries a list of data transformation jobs in a project.
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
   * Queries a list of data transformation jobs in a project.
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
   * Queries a list of ingest processors that meet specific conditions.
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
   * Queries a list of ingest processors that meet specific conditions.
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListLogStores`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/*`|
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
   * Queries a list of Logtail pipeline configurations that meet the specified conditions.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * Queries a list of Logtail pipeline configurations that meet the specified conditions.
   * 
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * Queries a list of MaxCompute data shipping jobs.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * Queries a list of MaxCompute data shipping jobs.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   * 列出OSS投递任务
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
   * 列出OSS投递任务
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
   * 列举OSSHDFS投递任务
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
   * 列举OSSHDFS投递任务
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
   * Queries a list of Object Storage Service (OSS) data import jobs in a project.
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
   * Queries a list of Object Storage Service (OSS) data import jobs in a project.
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
   * Queries the projects that meet specified conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(request: $_model.ListProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
   * Queries the projects that meet specified conditions.
   * 
   * @remarks
   * ### [](#)Usage notes
   * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
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
   * Queries a list of Scheduled SQL jobs in a project.
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
   * Queries a list of Scheduled SQL jobs in a project.
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListTagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:ListTagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * 合并两个相邻的readwrite状态的Shards。在参数中指定一个shardID，服务端自动找相邻的下一个Shard进行合并。
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
   * 合并两个相邻的readwrite状态的Shards。在参数中指定一个shardID，服务端自动找相邻的下一个Shard进行合并。
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
   * @returns OpenSlsServiceResponse
   */
  async openSlsService(): Promise<$_model.OpenSlsServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSlsServiceWithOptions(headers, runtime);
  }

  /**
   * Queries logs based on the specified cursors. You can call this operation to obtain raw logs. To query and analyze logs, you can call the GetLogsV2 operation.
   * 
   * @remarks
   * *
   * **Warning** You cannot call this operation in OpenAPI Explorer. You can use Simple Log Service SDK to call this operation. For more information, see SLS SDK Reference.
   * *   You must specify a shard when you query the logs.
   * *   You can query only logs in the Protocol Buffers (protobuf) format. For more information, see [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * 
   * @param request - PullLogsRequest
   * @param headers - PullLogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PullLogsResponse
   */
  async pullLogsWithOptions(project: string, logStore: string, shardId: string, request: $_model.PullLogsRequest, headers: $_model.PullLogsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PullLogsResponse> {
    request.validate();
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
   * Queries logs based on the specified cursors. You can call this operation to obtain raw logs. To query and analyze logs, you can call the GetLogsV2 operation.
   * 
   * @remarks
   * *
   * **Warning** You cannot call this operation in OpenAPI Explorer. You can use Simple Log Service SDK to call this operation. For more information, see SLS SDK Reference.
   * *   You must specify a shard when you query the logs.
   * *   You can query only logs in the Protocol Buffers (protobuf) format. For more information, see [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
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
   * Adds data to a dataset for storage.
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
   * Adds data to a dataset for storage.
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
   * Writes logs to a Logstore.
   * 
   * @remarks
   * *
   * **Warning** You cannot call this operation in OpenAPI Explorer. You can use Simple Log Service SDK to call this operation. For more information, see SLS SDK Reference.
   * *   When you call the PutLogs operation to write logs to Simple Log Service, Simple Log Servicechecks the format of the logs. If a log does not meet the format requirements, the request fails and no logs are written to Simple Log Service.
   * *   You can write logs only in the Protocol Buffers (Protobuf) format as log groups. For more information, see [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * *   You can write logs in one of the following modes:
   *     *   LoadBalance mode: In this mode, Log Service automatically writes logs to all writable shards in a Logstore. This mode delivers high availability for write operations and is suitable for data consumption scenarios in which you do not need to preserve the order of logs.
   *     *   KeyHash: In this mode, a key field is added in the URL parameter. Log Service writes logs to a shard based on the key field. The hash key is optional. If you do not configure the hash key, logs are written to shards in LoadBalance mode. For example, you can use the KeyHash mode to write data from a producer, such as an instance, to the shard whose hash value range includes the hash value of the producer name. This ensures that the data that is written to the shard is ordered and the data in the shard is consumed based on the order. This way, when a shard is split or when shards are merged, the data that is associated with the same hash key is stored only in one shard at a point in time. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * *   You can call the PutLogs operation to write up to 10 MB of raw logs at a time. We recommend that you keep the total size of the values for each log in a log group to or below 1 MB. Historical versions of SDKs may have different limits. We recommend that you upgrade your SDK to the latest version.
   * *   The references for Log Service SDK for Java and Log Service SDK for Python provide examples on how to call the PutLogs operation. For more information, see [Get started with Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/279525.html) and [Get started with Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/284638.html).
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
   * Writes logs to a Logstore.
   * 
   * @remarks
   * *
   * **Warning** You cannot call this operation in OpenAPI Explorer. You can use Simple Log Service SDK to call this operation. For more information, see SLS SDK Reference.
   * *   When you call the PutLogs operation to write logs to Simple Log Service, Simple Log Servicechecks the format of the logs. If a log does not meet the format requirements, the request fails and no logs are written to Simple Log Service.
   * *   You can write logs only in the Protocol Buffers (Protobuf) format as log groups. For more information, see [Data encoding](https://help.aliyun.com/document_detail/29055.html).
   * *   You can write logs in one of the following modes:
   *     *   LoadBalance mode: In this mode, Log Service automatically writes logs to all writable shards in a Logstore. This mode delivers high availability for write operations and is suitable for data consumption scenarios in which you do not need to preserve the order of logs.
   *     *   KeyHash: In this mode, a key field is added in the URL parameter. Log Service writes logs to a shard based on the key field. The hash key is optional. If you do not configure the hash key, logs are written to shards in LoadBalance mode. For example, you can use the KeyHash mode to write data from a producer, such as an instance, to the shard whose hash value range includes the hash value of the producer name. This ensures that the data that is written to the shard is ordered and the data in the shard is consumed based on the order. This way, when a shard is split or when shards are merged, the data that is associated with the same hash key is stored only in one shard at a point in time. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
   * *   You can call the PutLogs operation to write up to 10 MB of raw logs at a time. We recommend that you keep the total size of the values for each log in a log group to or below 1 MB. Historical versions of SDKs may have different limits. We recommend that you upgrade your SDK to the latest version.
   * *   The references for Log Service SDK for Java and Log Service SDK for Python provide examples on how to call the PutLogs operation. For more information, see [Get started with Simple Log Service SDK for Java](https://help.aliyun.com/document_detail/279525.html) and [Get started with Simple Log Service SDK for Python](https://help.aliyun.com/document_detail/284638.html).
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
   * Creates a project policy.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
   *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](https://help.aliyun.com/document_detail/128139.html).
   *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
   *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
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
   * Creates a project policy.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Alibaba Cloud Simple Log Service allows you to configure a project policy to authorize other users to access the specified Log Service resources.
   *     *   You must configure a project policy based on policy syntax. Before you configure a project policy, you must be familiar with the Action, Resource, and Condition parameters. For more information, see [RAM](https://help.aliyun.com/document_detail/128139.html).
   *     *   If you set the Principal element to an asterisk (\\*) and do not configure the Condition element when you configure a project policy, the policy applies to all users except for the project owner. If you set the Principal element to an asterisk (\\*) and configure the Condition element when you configure a project policy, the policy applies to all users including the project owner.
   *     *   You can configure multiple project policies for a project. The total size of the policies cannot exceed 16 KB.
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
   * 设置project传输加速状态
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
   * 设置project传输加速状态
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
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * *   You can call this operation to collect logs from web pages or clients.
   * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
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
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * *   You can call this operation to collect logs from web pages or clients.
   * *   If you use web tracking to collect logs and you do not call this operation, you can send only one log to Simple Log Service in a request. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   If you want to collect a large amount of log data, you can call this operation to send multiple logs to Simple Log Service in one request.
   * *   Before you can call this operation to send logs to a Logstore, you must enable web tracking for the Logstore. For more information, see [Use web tracking to collect logs](https://help.aliyun.com/document_detail/31752.html).
   * *   You cannot call this operation to send the logs of multiple topics to Simple Log Service at a time.
   * *   If you call this operation, anonymous users from the Internet are granted the write permissions on the Logstore. This may generate dirty data because AccessKey pair-based authentication is not performed.
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
   * 刷新token
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
   * 刷新token
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   Each shard has an MD5 hash range, and each range is a left-closed, right-open interval. The interval is in the `[BeginKey,EndKey)` format. A shard can be in the readwrite or readonly state. You can split a shard and merge shards. For more information, see [Shard](https://help.aliyun.com/document_detail/28976.html).
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
   * Starts a data transformation job.
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
   * Starts a data transformation job.
   * @returns StartETLResponse
   */
  async startETL(project: string, etlName: string): Promise<$_model.StartETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Starts a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * @returns StartMaxComputeExportResponse
   */
  async startMaxComputeExport(project: string, mcExportName: string): Promise<$_model.StartMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * 启动OSS投递任务
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
   * 启动OSS投递任务
   * @returns StartOSSExportResponse
   */
  async startOSSExport(project: string, ossExportName: string): Promise<$_model.StartOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 启动OSSHDFS投递任务
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
   * 启动OSSHDFS投递任务
   * @returns StartOSSHDFSExportResponse
   */
  async startOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.StartOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Starts an Object Storage Service (OSS) data import job.
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
   * Starts an Object Storage Service (OSS) data import job.
   * @returns StartOSSIngestionResponse
   */
  async startOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.StartOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Stops a data transformation job.
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
   * Stops a data transformation job.
   * @returns StopETLResponse
   */
  async stopETL(project: string, etlName: string): Promise<$_model.StopETLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopETLWithOptions(project, etlName, headers, runtime);
  }

  /**
   * Stops a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * @returns StopMaxComputeExportResponse
   */
  async stopMaxComputeExport(project: string, mcExportName: string): Promise<$_model.StopMaxComputeExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopMaxComputeExportWithOptions(project, mcExportName, headers, runtime);
  }

  /**
   * 停止OSS投递任务
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
   * 停止OSS投递任务
   * @returns StopOSSExportResponse
   */
  async stopOSSExport(project: string, ossExportName: string): Promise<$_model.StopOSSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * 停止OSSHDFS投递任务
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
   * 停止OSSHDFS投递任务
   * @returns StopOSSHDFSExportResponse
   */
  async stopOSSHDFSExport(project: string, ossExportName: string): Promise<$_model.StopOSSHDFSExportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSHDFSExportWithOptions(project, ossExportName, headers, runtime);
  }

  /**
   * Stops an Object Storage Service (OSS) data import job.
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
   * Stops an Object Storage Service (OSS) data import job.
   * @returns StopOSSIngestionResponse
   */
  async stopOSSIngestion(project: string, ossIngestionName: string): Promise<$_model.StopOSSIngestionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOSSIngestionWithOptions(project, ossIngestionName, headers, runtime);
  }

  /**
   * Creates and adds tags to a resource. You can add tags only to projects.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:TagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
   * * For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:TagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UntagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) For more information, see [Authorization rules](https://help.aliyun.com/document_detail/29049.html). The following types of resources are supported: project, Logstore, dashboard, machine group, and Logtail configuration.
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UntagResources`|The resource format varies based on the resource type.\\-`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logstore/${logstoreName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/dashboard/${dashboardName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/machinegroup/${machineGroupName}`\\-`acs:log:${regionName}:${accountId}:project/${projectName}/logtailconfig/${logtailConfigName}`|
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
   * UpdateAgentInstanceConfig
   * 
   * @param request - UpdateAgentInstanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAgentInstanceConfigResponse
   */
  async updateAgentInstanceConfigWithOptions(configType: string, request: $_model.UpdateAgentInstanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAgentInstanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attributes)) {
      query["attributes"] = request.attributes;
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
   * UpdateAgentInstanceConfig
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
   * @param request - UpdateAnnotationDataSetRequest
   * @returns UpdateAnnotationDataSetResponse
   */
  async updateAnnotationDataSet(datasetId: string, request: $_model.UpdateAnnotationDataSetRequest): Promise<$_model.UpdateAnnotationDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAnnotationDataSetWithOptions(datasetId, request, headers, runtime);
  }

  /**
   * Updates a tag table.
   * 
   * @remarks
   * You can update only the names of the tags in a tag set.
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
   * Updates a tag table.
   * 
   * @remarks
   * You can update only the names of the tags in a tag set.
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
   * Modifies a Logtail configuration.
   * 
   * @remarks
   * ### [](#)Usage notes
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
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
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   After you update a Logtail configuration that is applied to a machine group, the new configuration immediately takes effect.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   The Logtail configuration is planned out. For more information, see [Logtail configurations](https://help.aliyun.com/document_detail/29058.html).
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateConsumerGroup`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/logstore/{#logstoreName}/consumergroup/{#ConsumerGroup}`|
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
   * Updates a data transformation job.
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
   * Updates a data transformation job.
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
   * Updates the attributes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
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
   * Updates the attributes of a Logstore.
   * 
   * @remarks
   * ### Usage notes
   * *   Host consists of a project name and a Log Service endpoint. You must specify a project in Host.
   * *   You can call the UpdateLogStore operation to change only the time-to-live (TTL) attribute.
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
   * Modifies the ingest processor that is associated with a Logstore.
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
   * Modifies the ingest processor that is associated with a Logstore.
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
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * @remarks
   * The UK (London) region is supported. Supported regions are constantly updated.
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
   * Updates a MaxCompute data shipping job.
   * 
   * @remarks
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html)
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
   * Updates the settings of an existing Metricstore. Metricstores are used to store metric data.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * Updates the settings of an existing Metricstore. Metricstores are used to store metric data.
   * 
   * @remarks
   * Metricstores are used to store metric data. For more information, see [Metric data](https://help.aliyun.com/document_detail/174965.html).
   * *   You must specify an existing Metricstore.
   * *   Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * *   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O\\&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * *   The information that is required to query metric data is obtained. The information includes the name of the project to which the metric data belong and the region of the project. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html).
   * *   You can create up to 200 Logstores or Metricstores in a project.
   * *   Metric data is automatically deleted when the retention period of the metric data ends.
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
   * 更新 MetricStore 计量模式
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
   * 更新 MetricStore 计量模式
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
   * 更新OSS投递任务
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
   * 更新OSS投递任务
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
   * 更新OSSHDFS投递任务
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
   * 更新OSSHDFS投递任务
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
   * Updates an Object Storage Service (OSS) data import job.
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
   * Updates an Object Storage Service (OSS) data import job.
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
   * Updates a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateProject`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * Updates a project.
   * 
   * @remarks
   * ### Usage notes
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateProject`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * * Host consists of a project name and a Simple Log Service endpoint. You must specify a project in Host.
   * * An AccessKey pair is created and obtained. For more information, see [AccessKey pair](https://help.aliyun.com/document_detail/29009.html).
   * The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a Resource Access Management (RAM) user to call API operations or perform routine O&#x26;M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Create a RAM user and authorize the RAM user to access Simple Log Service](https://help.aliyun.com/document_detail/47664.html).
   * * The information that is required to query logs is obtained. The information includes the name of the project to which the logs belong, the region of the project, and the name of the Logstore to which the logs belong. For more information, see [Manage a project](https://help.aliyun.com/document_detail/48984.html) and [Manage a Logstore](https://help.aliyun.com/document_detail/48990.html).
   * * Limits are imposed when you use Simple Log Service to query logs. We recommend that you specify query statements and query time ranges based on the limits. For more information, see [Log search overview](https://help.aliyun.com/document_detail/43772.html) and [Log analysis overview](https://help.aliyun.com/document_detail/53608.html).
   * ### Authentication resources
   * The following table describes the authorization information that is required for this operation. You can add the information to the Action element of a RAM policy statement to grant a RAM user or a RAM role the permissions to call this operation.
   * |Action|Resource|
   * |:---|:---|
   * |`log:UpdateSavedSearch`|`acs:log:{#regionId}:{#accountId}:project/{#ProjectName}/savedsearch/{#SavedSearchName}`|
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
   * Updates a Scheduled SQL job.
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
   * Updates a Scheduled SQL job.
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
   * Updates the configurations of the Dedicated SQL feature.
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
   * Updates the configurations of the Dedicated SQL feature.
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
   * 调用UpsertCollectionPolicy接口创建或更新日志采集规则
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
   * 调用UpsertCollectionPolicy接口创建或更新日志采集规则
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
