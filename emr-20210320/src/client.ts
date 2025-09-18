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
      'cn-beijing': "emr.aliyuncs.com",
      'cn-hangzhou': "emr.aliyuncs.com",
      'cn-shanghai': "emr.aliyuncs.com",
      'cn-shenzhen': "emr.aliyuncs.com",
      'ap-southeast-1': "emr.aliyuncs.com",
      'us-west-1': "emr.aliyuncs.com",
      'cn-shanghai-finance-1': "emr.aliyuncs.com",
      'cn-shenzhen-finance-1': "emr.aliyuncs.com",
      'cn-north-2-gov-1': "emr.aliyuncs.com",
      'ap-northeast-2-pop': "emr.aliyuncs.com",
      'cn-beijing-finance-1': "emr.aliyuncs.com",
      'cn-beijing-finance-pop': "emr.aliyuncs.com",
      'cn-beijing-gov-1': "emr.aliyuncs.com",
      'cn-beijing-nu16-b01': "emr.aliyuncs.com",
      'cn-edge-1': "emr.aliyuncs.com",
      'cn-fujian': "emr.aliyuncs.com",
      'cn-haidian-cm12-c01': "emr.aliyuncs.com",
      'cn-hangzhou-bj-b01': "emr.aliyuncs.com",
      'cn-hangzhou-finance': "emr.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "emr.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "emr.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "emr.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "emr.aliyuncs.com",
      'cn-hangzhou-test-306': "emr.aliyuncs.com",
      'cn-hongkong-finance-pop': "emr.aliyuncs.com",
      'cn-huhehaote-nebula-1': "emr.aliyuncs.com",
      'cn-qingdao-nebula': "emr.aliyuncs.com",
      'cn-shanghai-et15-b01': "emr.aliyuncs.com",
      'cn-shanghai-et2-b01': "emr.aliyuncs.com",
      'cn-shanghai-inner': "emr.aliyuncs.com",
      'cn-shanghai-internal-test-1': "emr.aliyuncs.com",
      'cn-shenzhen-inner': "emr.aliyuncs.com",
      'cn-shenzhen-st4-d01': "emr.aliyuncs.com",
      'cn-shenzhen-su18-b01': "emr.aliyuncs.com",
      'cn-wuhan': "emr.aliyuncs.com",
      'cn-yushanfang': "emr.aliyuncs.com",
      'cn-zhangbei': "emr.aliyuncs.com",
      'cn-zhangbei-na61-b01': "emr.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "emr.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "emr.aliyuncs.com",
      'eu-west-1-oxs': "emr.aliyuncs.com",
      'rus-west-1-pop': "emr.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Creates a predefined API operation template. The template contains information about an API operation, including the basic structure, request method, URL path, request parameters, and response format.
   * 
   * @param request - CreateApiTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApiTemplateResponse
   */
  async createApiTemplateWithOptions(request: $_model.CreateApiTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApiTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApiTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateApiTemplateResponse({}));
  }

  /**
   * Creates a predefined API operation template. The template contains information about an API operation, including the basic structure, request method, URL path, request parameters, and response format.
   * 
   * @param request - CreateApiTemplateRequest
   * @returns CreateApiTemplateResponse
   */
  async createApiTemplate(request: $_model.CreateApiTemplateRequest): Promise<$_model.CreateApiTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApiTemplateWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription cluster.
   * 
   * @param request - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      query["ApplicationConfigs"] = request.applicationConfigs;
    }

    if (!$dara.isNull(request.applications)) {
      query["Applications"] = request.applications;
    }

    if (!$dara.isNull(request.bootstrapScripts)) {
      query["BootstrapScripts"] = request.bootstrapScripts;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nodeAttributes)) {
      query["NodeAttributes"] = request.nodeAttributes;
    }

    if (!$dara.isNull(request.nodeGroups)) {
      query["NodeGroups"] = request.nodeGroups;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      query["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityMode)) {
      query["SecurityMode"] = request.securityMode;
    }

    if (!$dara.isNull(request.subscriptionConfig)) {
      query["SubscriptionConfig"] = request.subscriptionConfig;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription cluster.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a node group.
   * 
   * @remarks
   * 创建节点组。
   * 
   * @param request - CreateNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroupWithOptions(request: $_model.CreateNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroup)) {
      query["NodeGroup"] = request.nodeGroup;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodeGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateNodeGroupResponse({}));
  }

  /**
   * Creates a node group.
   * 
   * @remarks
   * 创建节点组。
   * 
   * @param request - CreateNodeGroupRequest
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroup(request: $_model.CreateNodeGroupRequest): Promise<$_model.CreateNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeGroupWithOptions(request, runtime);
  }

  /**
   * Adds a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param request - CreateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScriptResponse
   */
  async createScriptWithOptions(request: $_model.CreateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scriptType)) {
      query["ScriptType"] = request.scriptType;
    }

    if (!$dara.isNull(request.scripts)) {
      query["Scripts"] = request.scripts;
    }

    if (!$dara.isNull(request.timeoutSecs)) {
      query["TimeoutSecs"] = request.timeoutSecs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScript",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScriptResponse>(await this.callApi(params, req, runtime), new $_model.CreateScriptResponse({}));
  }

  /**
   * Adds a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param request - CreateScriptRequest
   * @returns CreateScriptResponse
   */
  async createScript(request: $_model.CreateScriptRequest): Promise<$_model.CreateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScriptWithOptions(request, runtime);
  }

  /**
   * Creates multiple users at a time.
   * 
   * @remarks
   * You can call this operation to create multiple users at a time.
   * 
   * @param request - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(request: $_model.CreateUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUsers",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUsersResponse>(await this.callApi(params, req, runtime), new $_model.CreateUsersResponse({}));
  }

  /**
   * Creates multiple users at a time.
   * 
   * @remarks
   * You can call this operation to create multiple users at a time.
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: $_model.CreateUsersRequest): Promise<$_model.CreateUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Performs a scale-out operation on the target node group.
   * 
   * @param request - DecreaseNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DecreaseNodesResponse
   */
  async decreaseNodesWithOptions(request: $_model.DecreaseNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DecreaseNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchInterval)) {
      query["BatchInterval"] = request.batchInterval;
    }

    if (!$dara.isNull(request.batchSize)) {
      query["BatchSize"] = request.batchSize;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.decreaseNodeCount)) {
      query["DecreaseNodeCount"] = request.decreaseNodeCount;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DecreaseNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DecreaseNodesResponse>(await this.callApi(params, req, runtime), new $_model.DecreaseNodesResponse({}));
  }

  /**
   * Performs a scale-out operation on the target node group.
   * 
   * @param request - DecreaseNodesRequest
   * @returns DecreaseNodesResponse
   */
  async decreaseNodes(request: $_model.DecreaseNodesRequest): Promise<$_model.DecreaseNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.decreaseNodesWithOptions(request, runtime);
  }

  /**
   * Deletes an API operation template.
   * 
   * @param request - DeleteApiTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApiTemplateResponse
   */
  async deleteApiTemplateWithOptions(request: $_model.DeleteApiTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApiTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApiTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApiTemplateResponse({}));
  }

  /**
   * Deletes an API operation template.
   * 
   * @param request - DeleteApiTemplateRequest
   * @returns DeleteApiTemplateResponse
   */
  async deleteApiTemplate(request: $_model.DeleteApiTemplateRequest): Promise<$_model.DeleteApiTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApiTemplateWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param request - DeleteScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScriptResponse
   */
  async deleteScriptWithOptions(request: $_model.DeleteScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScriptResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptType)) {
      query["ScriptType"] = request.scriptType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScript",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScriptResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScriptResponse({}));
  }

  /**
   * Deletes a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param request - DeleteScriptRequest
   * @returns DeleteScriptResponse
   */
  async deleteScript(request: $_model.DeleteScriptRequest): Promise<$_model.DeleteScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScriptWithOptions(request, runtime);
  }

  /**
   * Deletes multiple users at a time.
   * 
   * @remarks
   * Deletes multiple users at a time.
   * 
   * @param tmpReq - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(tmpReq: $_model.DeleteUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUsersResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userNames)) {
      request.userNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userNames, "UserNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.userNamesShrink)) {
      body["UserNames"] = request.userNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUsers",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUsersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUsersResponse({}));
  }

  /**
   * Deletes multiple users at a time.
   * 
   * @remarks
   * Deletes multiple users at a time.
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: $_model.DeleteUsersRequest): Promise<$_model.DeleteUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * @param request - ExportApplicationConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportApplicationConfigsResponse
   */
  async exportApplicationConfigsWithOptions(request: $_model.ExportApplicationConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportApplicationConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationConfigFiles)) {
      query["ApplicationConfigFiles"] = request.applicationConfigFiles;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.exportMode)) {
      query["ExportMode"] = request.exportMode;
    }

    if (!$dara.isNull(request.fileFormat)) {
      query["FileFormat"] = request.fileFormat;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportApplicationConfigs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportApplicationConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ExportApplicationConfigsResponse({}));
  }

  /**
   * @param request - ExportApplicationConfigsRequest
   * @returns ExportApplicationConfigsResponse
   */
  async exportApplicationConfigs(request: $_model.ExportApplicationConfigsRequest): Promise<$_model.ExportApplicationConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportApplicationConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed configuration information about an API operation template.
   * 
   * @param request - GetApiTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApiTemplateResponse
   */
  async getApiTemplateWithOptions(request: $_model.GetApiTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApiTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApiTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetApiTemplateResponse({}));
  }

  /**
   * Queries the detailed configuration information about an API operation template.
   * 
   * @param request - GetApiTemplateRequest
   * @returns GetApiTemplateResponse
   */
  async getApiTemplate(request: $_model.GetApiTemplateRequest): Promise<$_model.GetApiTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApiTemplateWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an application.
   * 
   * @remarks
   * 查询应用详情。
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Retrieves the details of an application.
   * 
   * @remarks
   * 查询应用详情。
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about an auto scaling activity.
   * 
   * @param request - GetAutoScalingActivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingActivityResponse
   */
  async getAutoScalingActivityWithOptions(request: $_model.GetAutoScalingActivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoScalingActivityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingActivityId)) {
      query["ScalingActivityId"] = request.scalingActivityId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScalingActivity",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoScalingActivityResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoScalingActivityResponse({}));
  }

  /**
   * Queries the information about an auto scaling activity.
   * 
   * @param request - GetAutoScalingActivityRequest
   * @returns GetAutoScalingActivityResponse
   */
  async getAutoScalingActivity(request: $_model.GetAutoScalingActivityRequest): Promise<$_model.GetAutoScalingActivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingActivityWithOptions(request, runtime);
  }

  /**
   * Queries custom auto scaling rules.
   * 
   * @param request - GetAutoScalingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAutoScalingPolicyResponse
   */
  async getAutoScalingPolicyWithOptions(request: $_model.GetAutoScalingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAutoScalingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetAutoScalingPolicyResponse({}));
  }

  /**
   * Queries custom auto scaling rules.
   * 
   * @param request - GetAutoScalingPolicyRequest
   * @returns GetAutoScalingPolicyResponse
   */
  async getAutoScalingPolicy(request: $_model.GetAutoScalingPolicyRequest): Promise<$_model.GetAutoScalingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAutoScalingPolicyWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a cluster.
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: $_model.GetClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Obtains the details of a cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * Obtains metadata of the E-MapReduce (EMR) cluster that you want to clone. This helps you call the CreateCluster API operation to quickly create an EMR cluster.
   * 
   * @param request - GetClusterCloneMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterCloneMetaResponse
   */
  async getClusterCloneMetaWithOptions(request: $_model.GetClusterCloneMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterCloneMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterCloneMeta",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterCloneMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterCloneMetaResponse({}));
  }

  /**
   * Obtains metadata of the E-MapReduce (EMR) cluster that you want to clone. This helps you call the CreateCluster API operation to quickly create an EMR cluster.
   * 
   * @param request - GetClusterCloneMetaRequest
   * @returns GetClusterCloneMetaResponse
   */
  async getClusterCloneMeta(request: $_model.GetClusterCloneMetaRequest): Promise<$_model.GetClusterCloneMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterCloneMetaWithOptions(request, runtime);
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get one doctor analysis app
   * 
   * @param request - GetDoctorApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplicationWithOptions(request: $_model.GetDoctorApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorApplication",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorApplicationResponse({}));
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get one doctor analysis app
   * 
   * @param request - GetDoctorApplicationRequest
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplication(request: $_model.GetDoctorApplicationRequest): Promise<$_model.GetDoctorApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorApplicationWithOptions(request, runtime);
  }

  /**
   * Obtains the information about resource usage in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get one specific luster engine queue by <type, name>
   * 
   * @param request - GetDoctorComputeSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorComputeSummaryResponse
   */
  async getDoctorComputeSummaryWithOptions(request: $_model.GetDoctorComputeSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorComputeSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentInfo)) {
      query["ComponentInfo"] = request.componentInfo;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorComputeSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorComputeSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorComputeSummaryResponse({}));
  }

  /**
   * Obtains the information about resource usage in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get one specific luster engine queue by <type, name>
   * 
   * @param request - GetDoctorComputeSummaryRequest
   * @returns GetDoctorComputeSummaryResponse
   */
  async getDoctorComputeSummary(request: $_model.GetDoctorComputeSummaryRequest): Promise<$_model.GetDoctorComputeSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorComputeSummaryWithOptions(request, runtime);
  }

  /**
   * Obtains the metrics of an HBase cluster.
   * 
   * @remarks
   * get Doctor HBaseCluster
   * 
   * @param request - GetDoctorHBaseClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHBaseClusterResponse
   */
  async getDoctorHBaseClusterWithOptions(request: $_model.GetDoctorHBaseClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHBaseClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHBaseCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHBaseClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHBaseClusterResponse({}));
  }

  /**
   * Obtains the metrics of an HBase cluster.
   * 
   * @remarks
   * get Doctor HBaseCluster
   * 
   * @param request - GetDoctorHBaseClusterRequest
   * @returns GetDoctorHBaseClusterResponse
   */
  async getDoctorHBaseCluster(request: $_model.GetDoctorHBaseClusterRequest): Promise<$_model.GetDoctorHBaseClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHBaseClusterWithOptions(request, runtime);
  }

  /**
   * Get HBase Region information.
   * 
   * @remarks
   * List Doctor HBase Regions
   * 
   * @param request - GetDoctorHBaseRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHBaseRegionResponse
   */
  async getDoctorHBaseRegionWithOptions(request: $_model.GetDoctorHBaseRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHBaseRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.hbaseRegionId)) {
      query["HbaseRegionId"] = request.hbaseRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHBaseRegion",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHBaseRegionResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHBaseRegionResponse({}));
  }

  /**
   * Get HBase Region information.
   * 
   * @remarks
   * List Doctor HBase Regions
   * 
   * @param request - GetDoctorHBaseRegionRequest
   * @returns GetDoctorHBaseRegionResponse
   */
  async getDoctorHBaseRegion(request: $_model.GetDoctorHBaseRegionRequest): Promise<$_model.GetDoctorHBaseRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHBaseRegionWithOptions(request, runtime);
  }

  /**
   * Obtains the information about an HBase region server.
   * 
   * @remarks
   * get Doctor HBaseRegionServer
   * 
   * @param request - GetDoctorHBaseRegionServerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHBaseRegionServerResponse
   */
  async getDoctorHBaseRegionServerWithOptions(request: $_model.GetDoctorHBaseRegionServerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHBaseRegionServerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionServerHost)) {
      query["RegionServerHost"] = request.regionServerHost;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHBaseRegionServer",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHBaseRegionServerResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHBaseRegionServerResponse({}));
  }

  /**
   * Obtains the information about an HBase region server.
   * 
   * @remarks
   * get Doctor HBaseRegionServer
   * 
   * @param request - GetDoctorHBaseRegionServerRequest
   * @returns GetDoctorHBaseRegionServerResponse
   */
  async getDoctorHBaseRegionServer(request: $_model.GetDoctorHBaseRegionServerRequest): Promise<$_model.GetDoctorHBaseRegionServerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHBaseRegionServerWithOptions(request, runtime);
  }

  /**
   * Get HBase Table information.
   * 
   * @remarks
   * get Doctor HBaseTable
   * 
   * @param request - GetDoctorHBaseTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHBaseTableResponse
   */
  async getDoctorHBaseTableWithOptions(request: $_model.GetDoctorHBaseTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHBaseTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHBaseTable",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHBaseTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHBaseTableResponse({}));
  }

  /**
   * Get HBase Table information.
   * 
   * @remarks
   * get Doctor HBaseTable
   * 
   * @param request - GetDoctorHBaseTableRequest
   * @returns GetDoctorHBaseTableResponse
   */
  async getDoctorHBaseTable(request: $_model.GetDoctorHBaseTableRequest): Promise<$_model.GetDoctorHBaseTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHBaseTableWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of the Hadoop Distributed File System (HDFS) storage resources of a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor HBaseTableRegions
   * 
   * @param request - GetDoctorHDFSClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHDFSClusterResponse
   */
  async getDoctorHDFSClusterWithOptions(request: $_model.GetDoctorHDFSClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHDFSClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHDFSCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHDFSClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHDFSClusterResponse({}));
  }

  /**
   * Obtains the analysis results of the Hadoop Distributed File System (HDFS) storage resources of a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor HBaseTableRegions
   * 
   * @param request - GetDoctorHDFSClusterRequest
   * @returns GetDoctorHDFSClusterResponse
   */
  async getDoctorHDFSCluster(request: $_model.GetDoctorHDFSClusterRequest): Promise<$_model.GetDoctorHDFSClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHDFSClusterWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a specific Hadoop Distributed File System (HDFS) directory of a cluster. The depth of the directory is not greater than five.
   * 
   * @remarks
   * get Doctor HDFSNode
   * 
   * @param request - GetDoctorHDFSDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHDFSDirectoryResponse
   */
  async getDoctorHDFSDirectoryWithOptions(request: $_model.GetDoctorHDFSDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHDFSDirectoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.dirPath)) {
      query["DirPath"] = request.dirPath;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHDFSDirectory",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHDFSDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHDFSDirectoryResponse({}));
  }

  /**
   * Obtains the analysis results of a specific Hadoop Distributed File System (HDFS) directory of a cluster. The depth of the directory is not greater than five.
   * 
   * @remarks
   * get Doctor HDFSNode
   * 
   * @param request - GetDoctorHDFSDirectoryRequest
   * @returns GetDoctorHDFSDirectoryResponse
   */
  async getDoctorHDFSDirectory(request: $_model.GetDoctorHDFSDirectoryRequest): Promise<$_model.GetDoctorHDFSDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHDFSDirectoryWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a Hive cluster.
   * 
   * @remarks
   * list Doctor Hive Cluster
   * 
   * @param request - GetDoctorHiveClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHiveClusterResponse
   */
  async getDoctorHiveClusterWithOptions(request: $_model.GetDoctorHiveClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHiveClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHiveCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHiveClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHiveClusterResponse({}));
  }

  /**
   * Obtains the analysis results of a Hive cluster.
   * 
   * @remarks
   * list Doctor Hive Cluster
   * 
   * @param request - GetDoctorHiveClusterRequest
   * @returns GetDoctorHiveClusterResponse
   */
  async getDoctorHiveCluster(request: $_model.GetDoctorHiveClusterRequest): Promise<$_model.GetDoctorHiveClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHiveClusterWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a Hive database.
   * 
   * @remarks
   * get Doctor Hive Database
   * 
   * @param request - GetDoctorHiveDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHiveDatabaseResponse
   */
  async getDoctorHiveDatabaseWithOptions(request: $_model.GetDoctorHiveDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHiveDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHiveDatabase",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHiveDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHiveDatabaseResponse({}));
  }

  /**
   * Obtains the analysis results of a Hive database.
   * 
   * @remarks
   * get Doctor Hive Database
   * 
   * @param request - GetDoctorHiveDatabaseRequest
   * @returns GetDoctorHiveDatabaseResponse
   */
  async getDoctorHiveDatabase(request: $_model.GetDoctorHiveDatabaseRequest): Promise<$_model.GetDoctorHiveDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHiveDatabaseWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of a specific Hive table in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get Doctor Hive Table
   * 
   * @param request - GetDoctorHiveTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorHiveTableResponse
   */
  async getDoctorHiveTableWithOptions(request: $_model.GetDoctorHiveTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorHiveTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorHiveTable",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorHiveTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorHiveTableResponse({}));
  }

  /**
   * Obtains the analysis results of a specific Hive table in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * get Doctor Hive Table
   * 
   * @param request - GetDoctorHiveTableRequest
   * @returns GetDoctorHiveTableResponse
   */
  async getDoctorHiveTable(request: $_model.GetDoctorHiveTableRequest): Promise<$_model.GetDoctorHiveTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorHiveTableWithOptions(request, runtime);
  }

  /**
   * Obtains the basic running information about a job on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * Get realtime job by yarn
   * 
   * @param request - GetDoctorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorJobResponse
   */
  async getDoctorJobWithOptions(request: $_model.GetDoctorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorJob",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorJobResponse({}));
  }

  /**
   * Obtains the basic running information about a job on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * Get realtime job by yarn
   * 
   * @param request - GetDoctorJobRequest
   * @returns GetDoctorJobResponse
   */
  async getDoctorJob(request: $_model.GetDoctorJobRequest): Promise<$_model.GetDoctorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorJobWithOptions(request, runtime);
  }

  /**
   * Obtain the analysis result report of a specified component from EMR Doctor.
   * 
   * @remarks
   * get specify component\\"s report analysis by EMR Doctor
   * 
   * @param request - GetDoctorReportComponentSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorReportComponentSummaryResponse
   */
  async getDoctorReportComponentSummaryWithOptions(request: $_model.GetDoctorReportComponentSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorReportComponentSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentType)) {
      query["ComponentType"] = request.componentType;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorReportComponentSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorReportComponentSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorReportComponentSummaryResponse({}));
  }

  /**
   * Obtain the analysis result report of a specified component from EMR Doctor.
   * 
   * @remarks
   * get specify component\\"s report analysis by EMR Doctor
   * 
   * @param request - GetDoctorReportComponentSummaryRequest
   * @returns GetDoctorReportComponentSummaryResponse
   */
  async getDoctorReportComponentSummary(request: $_model.GetDoctorReportComponentSummaryRequest): Promise<$_model.GetDoctorReportComponentSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDoctorReportComponentSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - GetManagedScalingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagedScalingPolicyResponse
   */
  async getManagedScalingPolicyWithOptions(request: $_model.GetManagedScalingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedScalingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagedScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManagedScalingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GetManagedScalingPolicyResponse({}));
  }

  /**
   * @param request - GetManagedScalingPolicyRequest
   * @returns GetManagedScalingPolicyResponse
   */
  async getManagedScalingPolicy(request: $_model.GetManagedScalingPolicyRequest): Promise<$_model.GetManagedScalingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagedScalingPolicyWithOptions(request, runtime);
  }

  /**
   * You can call this operation to obtain the details of a node group.
   * 
   * @remarks
   * 获取节点组详情。
   * 
   * @param request - GetNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeGroupResponse
   */
  async getNodeGroupWithOptions(request: $_model.GetNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeGroupResponse({}));
  }

  /**
   * You can call this operation to obtain the details of a node group.
   * 
   * @remarks
   * 获取节点组详情。
   * 
   * @param request - GetNodeGroupRequest
   * @returns GetNodeGroupResponse
   */
  async getNodeGroup(request: $_model.GetNodeGroupRequest): Promise<$_model.GetNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeGroupWithOptions(request, runtime);
  }

  /**
   * Gets the details of an asynchronous operation.
   * 
   * @param request - GetOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOperationResponse
   */
  async getOperationWithOptions(request: $_model.GetOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOperationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.operationId)) {
      query["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOperation",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOperationResponse>(await this.callApi(params, req, runtime), new $_model.GetOperationResponse({}));
  }

  /**
   * Gets the details of an asynchronous operation.
   * 
   * @param request - GetOperationRequest
   * @returns GetOperationResponse
   */
  async getOperation(request: $_model.GetOperationRequest): Promise<$_model.GetOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOperationWithOptions(request, runtime);
  }

  /**
   * Scales out the node group.
   * 
   * @param request - IncreaseNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IncreaseNodesResponse
   */
  async increaseNodesWithOptions(request: $_model.IncreaseNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IncreaseNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      query["ApplicationConfigs"] = request.applicationConfigs;
    }

    if (!$dara.isNull(request.autoPayOrder)) {
      query["AutoPayOrder"] = request.autoPayOrder;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.increaseNodeCount)) {
      query["IncreaseNodeCount"] = request.increaseNodeCount;
    }

    if (!$dara.isNull(request.minIncreaseNodeCount)) {
      query["MinIncreaseNodeCount"] = request.minIncreaseNodeCount;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.paymentDuration)) {
      query["PaymentDuration"] = request.paymentDuration;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      query["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.promotions)) {
      query["Promotions"] = request.promotions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IncreaseNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IncreaseNodesResponse>(await this.callApi(params, req, runtime), new $_model.IncreaseNodesResponse({}));
  }

  /**
   * Scales out the node group.
   * 
   * @param request - IncreaseNodesRequest
   * @returns IncreaseNodesResponse
   */
  async increaseNodes(request: $_model.IncreaseNodesRequest): Promise<$_model.IncreaseNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.increaseNodesWithOptions(request, runtime);
  }

  /**
   * Adds an EMR resource to a resource group. A resource can belong to only one resource group.
   * 
   * @param request - JoinResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns JoinResourceGroupResponse
   */
  async joinResourceGroupWithOptions(request: $_model.JoinResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.JoinResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "JoinResourceGroup",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.JoinResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.JoinResourceGroupResponse({}));
  }

  /**
   * Adds an EMR resource to a resource group. A resource can belong to only one resource group.
   * 
   * @param request - JoinResourceGroupRequest
   * @returns JoinResourceGroupResponse
   */
  async joinResourceGroup(request: $_model.JoinResourceGroupRequest): Promise<$_model.JoinResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.joinResourceGroupWithOptions(request, runtime);
  }

  /**
   * 查询API模板
   * 
   * @param request - ListApiTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiTemplatesResponse
   */
  async listApiTemplatesWithOptions(request: $_model.ListApiTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateIds)) {
      query["TemplateIds"] = request.templateIds;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiTemplates",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListApiTemplatesResponse({}));
  }

  /**
   * 查询API模板
   * 
   * @param request - ListApiTemplatesRequest
   * @returns ListApiTemplatesResponse
   */
  async listApiTemplates(request: $_model.ListApiTemplatesRequest): Promise<$_model.ListApiTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApiTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of the application.
   * 
   * @remarks
   * 查询应用配置。
   * 
   * @param request - ListApplicationConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationConfigsResponse
   */
  async listApplicationConfigsWithOptions(request: $_model.ListApplicationConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configFileName)) {
      query["ConfigFileName"] = request.configFileName;
    }

    if (!$dara.isNull(request.configItemKey)) {
      query["ConfigItemKey"] = request.configItemKey;
    }

    if (!$dara.isNull(request.configItemValue)) {
      query["ConfigItemValue"] = request.configItemValue;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationConfigs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationConfigsResponse({}));
  }

  /**
   * Queries the configurations of the application.
   * 
   * @remarks
   * 查询应用配置。
   * 
   * @param request - ListApplicationConfigsRequest
   * @returns ListApplicationConfigsResponse
   */
  async listApplicationConfigs(request: $_model.ListApplicationConfigsRequest): Promise<$_model.ListApplicationConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationConfigsWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications.
   * 
   * @param request - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * Queries a list of applications.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries a list of auto scaling activities.
   * 
   * @param request - ListAutoScalingActivitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoScalingActivitiesResponse
   */
  async listAutoScalingActivitiesWithOptions(request: $_model.ListAutoScalingActivitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoScalingActivitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceChargeTypes)) {
      query["InstanceChargeTypes"] = request.instanceChargeTypes;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingActivityStates)) {
      query["ScalingActivityStates"] = request.scalingActivityStates;
    }

    if (!$dara.isNull(request.scalingActivityType)) {
      query["ScalingActivityType"] = request.scalingActivityType;
    }

    if (!$dara.isNull(request.scalingPolicyType)) {
      query["ScalingPolicyType"] = request.scalingPolicyType;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoScalingActivities",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoScalingActivitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoScalingActivitiesResponse({}));
  }

  /**
   * Queries a list of auto scaling activities.
   * 
   * @param request - ListAutoScalingActivitiesRequest
   * @returns ListAutoScalingActivitiesResponse
   */
  async listAutoScalingActivities(request: $_model.ListAutoScalingActivitiesRequest): Promise<$_model.ListAutoScalingActivitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutoScalingActivitiesWithOptions(request, runtime);
  }

  /**
   * Queries E-MapReduce (EMR) clusters.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterStates)) {
      query["ClusterStates"] = request.clusterStates;
    }

    if (!$dara.isNull(request.clusterTypes)) {
      query["ClusterTypes"] = request.clusterTypes;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.paymentTypes)) {
      query["PaymentTypes"] = request.paymentTypes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries E-MapReduce (EMR) clusters.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of component instances.
   * 
   * @param request - ListComponentInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentInstancesResponse
   */
  async listComponentInstancesWithOptions(request: $_model.ListComponentInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentNames)) {
      query["ComponentNames"] = request.componentNames;
    }

    if (!$dara.isNull(request.componentStates)) {
      query["ComponentStates"] = request.componentStates;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponentInstances",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentInstancesResponse({}));
  }

  /**
   * Retrieves the list of component instances.
   * 
   * @param request - ListComponentInstancesRequest
   * @returns ListComponentInstancesResponse
   */
  async listComponentInstances(request: $_model.ListComponentInstancesRequest): Promise<$_model.ListComponentInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComponentInstancesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of components.
   * 
   * @param request - ListComponentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentsResponse
   */
  async listComponentsWithOptions(request: $_model.ListComponentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationNames)) {
      query["ApplicationNames"] = request.applicationNames;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentNames)) {
      query["ComponentNames"] = request.componentNames;
    }

    if (!$dara.isNull(request.componentStates)) {
      query["ComponentStates"] = request.componentStates;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponents",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentsResponse({}));
  }

  /**
   * Retrieves a list of components.
   * 
   * @param request - ListComponentsRequest
   * @returns ListComponentsResponse
   */
  async listComponents(request: $_model.ListComponentsRequest): Promise<$_model.ListComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listComponentsWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of multiple jobs on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list all doctor analysis apps
   * 
   * @param request - ListDoctorApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorApplicationsResponse
   */
  async listDoctorApplicationsWithOptions(request: $_model.ListDoctorApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorApplicationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.queues)) {
      query["Queues"] = request.queues;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorApplications",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorApplicationsResponse({}));
  }

  /**
   * Obtains the analysis results of multiple jobs on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list all doctor analysis apps
   * 
   * @param request - ListDoctorApplicationsRequest
   * @returns ListDoctorApplicationsResponse
   */
  async listDoctorApplications(request: $_model.ListDoctorApplicationsRequest): Promise<$_model.ListDoctorApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorApplicationsWithOptions(request, runtime);
  }

  /**
   * Obtains the information about resource usage by resource type in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor analysis result of cluster engine queue view
   * 
   * @param request - ListDoctorComputeSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorComputeSummaryResponse
   */
  async listDoctorComputeSummaryWithOptions(request: $_model.ListDoctorComputeSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorComputeSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentTypes)) {
      query["ComponentTypes"] = request.componentTypes;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorComputeSummary",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorComputeSummaryResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorComputeSummaryResponse({}));
  }

  /**
   * Obtains the information about resource usage by resource type in a cluster on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor analysis result of cluster engine queue view
   * 
   * @param request - ListDoctorComputeSummaryRequest
   * @returns ListDoctorComputeSummaryResponse
   */
  async listDoctorComputeSummary(request: $_model.ListDoctorComputeSummaryRequest): Promise<$_model.ListDoctorComputeSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorComputeSummaryWithOptions(request, runtime);
  }

  /**
   * Obtains the information about multiple HBase RegionServers at a time.
   * 
   * @remarks
   * list Doctor HBaseRegionServers
   * 
   * @param request - ListDoctorHBaseRegionServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHBaseRegionServersResponse
   */
  async listDoctorHBaseRegionServersWithOptions(request: $_model.ListDoctorHBaseRegionServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHBaseRegionServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.regionServerHosts)) {
      query["RegionServerHosts"] = request.regionServerHosts;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHBaseRegionServers",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHBaseRegionServersResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHBaseRegionServersResponse({}));
  }

  /**
   * Obtains the information about multiple HBase RegionServers at a time.
   * 
   * @remarks
   * list Doctor HBaseRegionServers
   * 
   * @param request - ListDoctorHBaseRegionServersRequest
   * @returns ListDoctorHBaseRegionServersResponse
   */
  async listDoctorHBaseRegionServers(request: $_model.ListDoctorHBaseRegionServersRequest): Promise<$_model.ListDoctorHBaseRegionServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHBaseRegionServersWithOptions(request, runtime);
  }

  /**
   * Obtains the information about multiple HBase tables at a time.
   * 
   * @remarks
   * list Doctor HBaseTables
   * 
   * @param request - ListDoctorHBaseTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHBaseTablesResponse
   */
  async listDoctorHBaseTablesWithOptions(request: $_model.ListDoctorHBaseTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHBaseTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHBaseTables",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHBaseTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHBaseTablesResponse({}));
  }

  /**
   * Obtains the information about multiple HBase tables at a time.
   * 
   * @remarks
   * list Doctor HBaseTables
   * 
   * @param request - ListDoctorHBaseTablesRequest
   * @returns ListDoctorHBaseTablesResponse
   */
  async listDoctorHBaseTables(request: $_model.ListDoctorHBaseTablesRequest): Promise<$_model.ListDoctorHBaseTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHBaseTablesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * list Doctor HDFSNodes
   * 
   * @param request - ListDoctorHDFSDirectoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHDFSDirectoriesResponse
   */
  async listDoctorHDFSDirectoriesWithOptions(request: $_model.ListDoctorHDFSDirectoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHDFSDirectoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.dirPath)) {
      query["DirPath"] = request.dirPath;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHDFSDirectories",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHDFSDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHDFSDirectoriesResponse({}));
  }

  /**
   * @remarks
   * list Doctor HDFSNodes
   * 
   * @param request - ListDoctorHDFSDirectoriesRequest
   * @returns ListDoctorHDFSDirectoriesResponse
   */
  async listDoctorHDFSDirectories(request: $_model.ListDoctorHDFSDirectoriesRequest): Promise<$_model.ListDoctorHDFSDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHDFSDirectoriesWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of Hadoop Distributed File System (HDFS) storage resources for multiple owners or groups at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor HDFS UGIs
   * 
   * @param request - ListDoctorHDFSUGIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHDFSUGIResponse
   */
  async listDoctorHDFSUGIWithOptions(request: $_model.ListDoctorHDFSUGIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHDFSUGIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHDFSUGI",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHDFSUGIResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHDFSUGIResponse({}));
  }

  /**
   * Obtains the analysis results of Hadoop Distributed File System (HDFS) storage resources for multiple owners or groups at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor HDFS UGIs
   * 
   * @param request - ListDoctorHDFSUGIRequest
   * @returns ListDoctorHDFSUGIResponse
   */
  async listDoctorHDFSUGI(request: $_model.ListDoctorHDFSUGIRequest): Promise<$_model.ListDoctorHDFSUGIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHDFSUGIWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of multiple Hive databases at a time.
   * 
   * @remarks
   * list Doctor Hive Databases
   * 
   * @param request - ListDoctorHiveDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHiveDatabasesResponse
   */
  async listDoctorHiveDatabasesWithOptions(request: $_model.ListDoctorHiveDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHiveDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.databaseNames)) {
      query["DatabaseNames"] = request.databaseNames;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHiveDatabases",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHiveDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHiveDatabasesResponse({}));
  }

  /**
   * Obtains the analysis results of multiple Hive databases at a time.
   * 
   * @remarks
   * list Doctor Hive Databases
   * 
   * @param request - ListDoctorHiveDatabasesRequest
   * @returns ListDoctorHiveDatabasesResponse
   */
  async listDoctorHiveDatabases(request: $_model.ListDoctorHiveDatabasesRequest): Promise<$_model.ListDoctorHiveDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHiveDatabasesWithOptions(request, runtime);
  }

  /**
   * Obtains the analysis results of multiple Hive tables at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor Hive Tables
   * 
   * @param request - ListDoctorHiveTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorHiveTablesResponse
   */
  async listDoctorHiveTablesWithOptions(request: $_model.ListDoctorHiveTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorHiveTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dateTime)) {
      query["DateTime"] = request.dateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableNames)) {
      query["TableNames"] = request.tableNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorHiveTables",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorHiveTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorHiveTablesResponse({}));
  }

  /**
   * Obtains the analysis results of multiple Hive tables at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list Doctor Hive Tables
   * 
   * @param request - ListDoctorHiveTablesRequest
   * @returns ListDoctorHiveTablesResponse
   */
  async listDoctorHiveTables(request: $_model.ListDoctorHiveTablesRequest): Promise<$_model.ListDoctorHiveTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorHiveTablesWithOptions(request, runtime);
  }

  /**
   * Obtains the basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list realtime jobs by yarn
   * 
   * @param request - ListDoctorJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorJobsResponse
   */
  async listDoctorJobsWithOptions(request: $_model.ListDoctorJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endRange)) {
      query["EndRange"] = request.endRange;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.queues)) {
      query["Queues"] = request.queues;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startRange)) {
      query["StartRange"] = request.startRange;
    }

    if (!$dara.isNull(request.types)) {
      query["Types"] = request.types;
    }

    if (!$dara.isNull(request.users)) {
      query["Users"] = request.users;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorJobs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorJobsResponse({}));
  }

  /**
   * Obtains the basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list realtime jobs by yarn
   * 
   * @param request - ListDoctorJobsRequest
   * @returns ListDoctorJobsResponse
   */
  async listDoctorJobs(request: $_model.ListDoctorJobsRequest): Promise<$_model.ListDoctorJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorJobsWithOptions(request, runtime);
  }

  /**
   * Obtains the summary of basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list stats groupBy jobs by yarn
   * 
   * @param request - ListDoctorJobsStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorJobsStatsResponse
   */
  async listDoctorJobsStatsWithOptions(request: $_model.ListDoctorJobsStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorJobsStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.endRange)) {
      query["EndRange"] = request.endRange;
    }

    if (!$dara.isNull(request.groupBy)) {
      query["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startRange)) {
      query["StartRange"] = request.startRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorJobsStats",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorJobsStatsResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorJobsStatsResponse({}));
  }

  /**
   * Obtains the summary of basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.
   * 
   * @remarks
   * list stats groupBy jobs by yarn
   * 
   * @param request - ListDoctorJobsStatsRequest
   * @returns ListDoctorJobsStatsResponse
   */
  async listDoctorJobsStats(request: $_model.ListDoctorJobsStatsRequest): Promise<$_model.ListDoctorJobsStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorJobsStatsWithOptions(request, runtime);
  }

  /**
   * Obtains the overall analysis result reports of E-MapReduce (EMR) Doctor at a time.
   * 
   * @remarks
   * list all reports analysis by emr doctor
   * 
   * @param request - ListDoctorReportsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDoctorReportsResponse
   */
  async listDoctorReportsWithOptions(request: $_model.ListDoctorReportsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDoctorReportsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDoctorReports",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDoctorReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListDoctorReportsResponse({}));
  }

  /**
   * Obtains the overall analysis result reports of E-MapReduce (EMR) Doctor at a time.
   * 
   * @remarks
   * list all reports analysis by emr doctor
   * 
   * @param request - ListDoctorReportsRequest
   * @returns ListDoctorReportsResponse
   */
  async listDoctorReports(request: $_model.ListDoctorReportsRequest): Promise<$_model.ListDoctorReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDoctorReportsWithOptions(request, runtime);
  }

  /**
   * Lists instance types.
   * 
   * @param request - ListInstanceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceTypesResponse
   */
  async listInstanceTypesWithOptions(request: $_model.ListInstanceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.deployMode)) {
      query["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isModification)) {
      query["IsModification"] = request.isModification;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.nodeGroupType)) {
      query["NodeGroupType"] = request.nodeGroupType;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      query["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceTypes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceTypesResponse({}));
  }

  /**
   * Lists instance types.
   * 
   * @param request - ListInstanceTypesRequest
   * @returns ListInstanceTypesResponse
   */
  async listInstanceTypes(request: $_model.ListInstanceTypesRequest): Promise<$_model.ListInstanceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceTypesWithOptions(request, runtime);
  }

  /**
   * Queries the list of node groups in an EMR cluster.
   * 
   * @param request - ListNodeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroupsWithOptions(request: $_model.ListNodeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupIds)) {
      query["NodeGroupIds"] = request.nodeGroupIds;
    }

    if (!$dara.isNull(request.nodeGroupNames)) {
      query["NodeGroupNames"] = request.nodeGroupNames;
    }

    if (!$dara.isNull(request.nodeGroupStates)) {
      query["NodeGroupStates"] = request.nodeGroupStates;
    }

    if (!$dara.isNull(request.nodeGroupTypes)) {
      query["NodeGroupTypes"] = request.nodeGroupTypes;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeGroups",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeGroupsResponse({}));
  }

  /**
   * Queries the list of node groups in an EMR cluster.
   * 
   * @param request - ListNodeGroupsRequest
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroups(request: $_model.ListNodeGroupsRequest): Promise<$_model.ListNodeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the node list of an EMR cluster.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupIds)) {
      query["NodeGroupIds"] = request.nodeGroupIds;
    }

    if (!$dara.isNull(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.nodeStates)) {
      query["NodeStates"] = request.nodeStates;
    }

    if (!$dara.isNull(request.privateIps)) {
      query["PrivateIps"] = request.privateIps;
    }

    if (!$dara.isNull(request.publicIps)) {
      query["PublicIps"] = request.publicIps;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * Queries the node list of an EMR cluster.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries the major E-MapReduce (EMR) versions.
   * 
   * @remarks
   * 查询主版本。
   * 
   * @param request - ListReleaseVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersionsWithOptions(request: $_model.ListReleaseVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListReleaseVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.iaasType)) {
      query["IaasType"] = request.iaasType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReleaseVersions",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReleaseVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListReleaseVersionsResponse({}));
  }

  /**
   * Queries the major E-MapReduce (EMR) versions.
   * 
   * @remarks
   * 查询主版本。
   * 
   * @param request - ListReleaseVersionsRequest
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersions(request: $_model.ListReleaseVersionsRequest): Promise<$_model.ListReleaseVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listReleaseVersionsWithOptions(request, runtime);
  }

  /**
   * Query EMR cluster bootstrap scripts or regular scripts.
   * 
   * @param request - ListScriptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScriptsResponse
   */
  async listScriptsWithOptions(request: $_model.ListScriptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScriptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.scriptType)) {
      query["ScriptType"] = request.scriptType;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScripts",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScriptsResponse>(await this.callApi(params, req, runtime), new $_model.ListScriptsResponse({}));
  }

  /**
   * Query EMR cluster bootstrap scripts or regular scripts.
   * 
   * @param request - ListScriptsRequest
   * @returns ListScriptsResponse
   */
  async listScripts(request: $_model.ListScriptsRequest): Promise<$_model.ListScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are bound to an EMR cluster.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are bound to an EMR cluster.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries a user.
   * 
   * @remarks
   * Queries a user.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.userNames)) {
      query["UserNames"] = request.userNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Queries a user.
   * 
   * @remarks
   * Queries a user.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Adds a custom auto scaling rule.
   * 
   * @remarks
   * You can call this operation to configure auto scaling policies.
   * 
   * @param request - PutAutoScalingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAutoScalingPolicyResponse
   */
  async putAutoScalingPolicyWithOptions(request: $_model.PutAutoScalingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutAutoScalingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scalingRules)) {
      query["ScalingRules"] = request.scalingRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.PutAutoScalingPolicyResponse({}));
  }

  /**
   * Adds a custom auto scaling rule.
   * 
   * @remarks
   * You can call this operation to configure auto scaling policies.
   * 
   * @param request - PutAutoScalingPolicyRequest
   * @returns PutAutoScalingPolicyResponse
   */
  async putAutoScalingPolicy(request: $_model.PutAutoScalingPolicyRequest): Promise<$_model.PutAutoScalingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putAutoScalingPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - PutManagedScalingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutManagedScalingPolicyResponse
   */
  async putManagedScalingPolicyWithOptions(request: $_model.PutManagedScalingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutManagedScalingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutManagedScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutManagedScalingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.PutManagedScalingPolicyResponse({}));
  }

  /**
   * @param request - PutManagedScalingPolicyRequest
   * @returns PutManagedScalingPolicyResponse
   */
  async putManagedScalingPolicy(request: $_model.PutManagedScalingPolicyRequest): Promise<$_model.PutManagedScalingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putManagedScalingPolicyWithOptions(request, runtime);
  }

  /**
   * Removes an auto scaling policy.
   * 
   * @param request - RemoveAutoScalingPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAutoScalingPolicyResponse
   */
  async removeAutoScalingPolicyWithOptions(request: $_model.RemoveAutoScalingPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAutoScalingPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAutoScalingPolicy",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAutoScalingPolicyResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAutoScalingPolicyResponse({}));
  }

  /**
   * Removes an auto scaling policy.
   * 
   * @param request - RemoveAutoScalingPolicyRequest
   * @returns RemoveAutoScalingPolicyResponse
   */
  async removeAutoScalingPolicy(request: $_model.RemoveAutoScalingPolicyRequest): Promise<$_model.RemoveAutoScalingPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAutoScalingPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - RunApiTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunApiTemplateResponse
   */
  async runApiTemplateWithOptions(request: $_model.RunApiTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunApiTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunApiTemplateResponse>(await this.callApi(params, req, runtime), new $_model.RunApiTemplateResponse({}));
  }

  /**
   * @param request - RunApiTemplateRequest
   * @returns RunApiTemplateResponse
   */
  async runApiTemplate(request: $_model.RunApiTemplateRequest): Promise<$_model.RunApiTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runApiTemplateWithOptions(request, runtime);
  }

  /**
   * Manages a service deployed in a cluster. For example, you can call this operation to start pr stop a service.
   * 
   * @param request - RunApplicationActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunApplicationActionResponse
   */
  async runApplicationActionWithOptions(request: $_model.RunApplicationActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunApplicationActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!$dara.isNull(request.batchSize)) {
      query["BatchSize"] = request.batchSize;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentInstanceSelector)) {
      query["ComponentInstanceSelector"] = request.componentInstanceSelector;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executeStrategy)) {
      query["ExecuteStrategy"] = request.executeStrategy;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rollingExecute)) {
      query["RollingExecute"] = request.rollingExecute;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunApplicationAction",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunApplicationActionResponse>(await this.callApi(params, req, runtime), new $_model.RunApplicationActionResponse({}));
  }

  /**
   * Manages a service deployed in a cluster. For example, you can call this operation to start pr stop a service.
   * 
   * @param request - RunApplicationActionRequest
   * @returns RunApplicationActionResponse
   */
  async runApplicationAction(request: $_model.RunApplicationActionRequest): Promise<$_model.RunApplicationActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runApplicationActionWithOptions(request, runtime);
  }

  /**
   * Creates a pay-as-you-go or subscription E-MapReduce (EMR) cluster.
   * 
   * @remarks
   * RunCluster is an upgraded version of CreateCluster. RunCluster uses HTTPS POST requests and supports more parameters. Complex parameters, such as parameters of the object and array types, are in the JSON format and are more friendly for users who use CLI.
   * 
   * @param tmpReq - RunClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunClusterResponse
   */
  async runClusterWithOptions(tmpReq: $_model.RunClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunClusterResponse> {
    tmpReq.validate();
    let request = new $_model.RunClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.applicationConfigs)) {
      request.applicationConfigsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applicationConfigs, "ApplicationConfigs", "json");
    }

    if (!$dara.isNull(tmpReq.applications)) {
      request.applicationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.applications, "Applications", "json");
    }

    if (!$dara.isNull(tmpReq.bootstrapScripts)) {
      request.bootstrapScriptsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.bootstrapScripts, "BootstrapScripts", "json");
    }

    if (!$dara.isNull(tmpReq.nodeAttributes)) {
      request.nodeAttributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeAttributes, "NodeAttributes", "json");
    }

    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    if (!$dara.isNull(tmpReq.promotions)) {
      request.promotionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.promotions, "Promotions", "json");
    }

    if (!$dara.isNull(tmpReq.subscriptionConfig)) {
      request.subscriptionConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subscriptionConfig, "SubscriptionConfig", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.promotionsShrink)) {
      query["Promotions"] = request.promotionsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigsShrink)) {
      body["ApplicationConfigs"] = request.applicationConfigsShrink;
    }

    if (!$dara.isNull(request.applicationsShrink)) {
      body["Applications"] = request.applicationsShrink;
    }

    if (!$dara.isNull(request.bootstrapScriptsShrink)) {
      body["BootstrapScripts"] = request.bootstrapScriptsShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      body["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.deployMode)) {
      body["DeployMode"] = request.deployMode;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.nodeAttributesShrink)) {
      body["NodeAttributes"] = request.nodeAttributesShrink;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["ReleaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityMode)) {
      body["SecurityMode"] = request.securityMode;
    }

    if (!$dara.isNull(request.subscriptionConfigShrink)) {
      body["SubscriptionConfig"] = request.subscriptionConfigShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCluster",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunClusterResponse>(await this.callApi(params, req, runtime), new $_model.RunClusterResponse({}));
  }

  /**
   * Creates a pay-as-you-go or subscription E-MapReduce (EMR) cluster.
   * 
   * @remarks
   * RunCluster is an upgraded version of CreateCluster. RunCluster uses HTTPS POST requests and supports more parameters. Complex parameters, such as parameters of the object and array types, are in the JSON format and are more friendly for users who use CLI.
   * 
   * @param request - RunClusterRequest
   * @returns RunClusterResponse
   */
  async runCluster(request: $_model.RunClusterRequest): Promise<$_model.RunClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runClusterWithOptions(request, runtime);
  }

  /**
   * Binds tags to a specified EMR cluster.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Binds tags to a specified EMR cluster.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from a specified column in an EMR cluster. If the tag is not bound to other resources, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Unbinds tags from a specified column in an EMR cluster. If the tag is not bound to other resources, the tag is automatically deleted.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an API operation template.
   * 
   * @remarks
   * 修改集群模板
   * 
   * @param request - UpdateApiTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApiTemplateResponse
   */
  async updateApiTemplateWithOptions(request: $_model.UpdateApiTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApiTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiName)) {
      query["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApiTemplate",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApiTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApiTemplateResponse({}));
  }

  /**
   * Updates an API operation template.
   * 
   * @remarks
   * 修改集群模板
   * 
   * @param request - UpdateApiTemplateRequest
   * @returns UpdateApiTemplateResponse
   */
  async updateApiTemplate(request: $_model.UpdateApiTemplateRequest): Promise<$_model.UpdateApiTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApiTemplateWithOptions(request, runtime);
  }

  /**
   * Updates the application configurations.
   * 
   * @param request - UpdateApplicationConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationConfigsResponse
   */
  async updateApplicationConfigsWithOptions(request: $_model.UpdateApplicationConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configAction)) {
      query["ConfigAction"] = request.configAction;
    }

    if (!$dara.isNull(request.configScope)) {
      query["ConfigScope"] = request.configScope;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      query["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.refreshConfig)) {
      query["RefreshConfig"] = request.refreshConfig;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      bodyFlat["ApplicationConfigs"] = request.applicationConfigs;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationConfigs",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationConfigsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationConfigsResponse({}));
  }

  /**
   * Updates the application configurations.
   * 
   * @param request - UpdateApplicationConfigsRequest
   * @returns UpdateApplicationConfigsResponse
   */
  async updateApplicationConfigs(request: $_model.UpdateApplicationConfigsRequest): Promise<$_model.UpdateApplicationConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationConfigsWithOptions(request, runtime);
  }

  /**
   * Updates cluster attributes.
   * 
   * @param request - UpdateClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterAttributeResponse
   */
  async updateClusterAttributeWithOptions(request: $_model.UpdateClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterAttribute",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterAttributeResponse({}));
  }

  /**
   * Updates cluster attributes.
   * 
   * @param request - UpdateClusterAttributeRequest
   * @returns UpdateClusterAttributeResponse
   */
  async updateClusterAttribute(request: $_model.UpdateClusterAttributeRequest): Promise<$_model.UpdateClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Updates a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param tmpReq - UpdateScriptRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScriptResponse
   */
  async updateScriptWithOptions(tmpReq: $_model.UpdateScriptRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScriptResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScriptShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.script)) {
      request.scriptShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.script, "Script", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scriptShrink)) {
      query["Script"] = request.scriptShrink;
    }

    if (!$dara.isNull(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!$dara.isNull(request.scriptType)) {
      query["ScriptType"] = request.scriptType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScript",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScriptResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScriptResponse({}));
  }

  /**
   * Updates a bootstrap action or a common script of an E-MapReduce (EMR) cluster.
   * 
   * @param request - UpdateScriptRequest
   * @returns UpdateScriptResponse
   */
  async updateScript(request: $_model.UpdateScriptRequest): Promise<$_model.UpdateScriptResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScriptWithOptions(request, runtime);
  }

  /**
   * Updates the information about a user.
   * 
   * @remarks
   * Updates the information about a user.
   * 
   * @param request - UpdateUserAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserAttributeResponse
   */
  async updateUserAttributeWithOptions(request: $_model.UpdateUserAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserAttribute",
      version: "2021-03-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserAttributeResponse({}));
  }

  /**
   * Updates the information about a user.
   * 
   * @remarks
   * Updates the information about a user.
   * 
   * @param request - UpdateUserAttributeRequest
   * @returns UpdateUserAttributeResponse
   */
  async updateUserAttribute(request: $_model.UpdateUserAttributeRequest): Promise<$_model.UpdateUserAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUserAttributeWithOptions(request, runtime);
  }

}
