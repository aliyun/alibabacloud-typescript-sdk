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
    this._endpoint = this.getEndpoint("eflo-controller", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Approves an O\\&M operation.
   * 
   * @param request - ApproveOperationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApproveOperationResponse
   */
  async approveOperationWithOptions(request: $_model.ApproveOperationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApproveOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApproveOperation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApproveOperationResponse>(await this.callApi(params, req, runtime), new $_model.ApproveOperationResponse({}));
  }

  /**
   * Approves an O\\&M operation.
   * 
   * @param request - ApproveOperationRequest
   * @returns ApproveOperationResponse
   */
  async approveOperation(request: $_model.ApproveOperationRequest): Promise<$_model.ApproveOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approveOperationWithOptions(request, runtime);
  }

  /**
   * 修改节点的节点组
   * 
   * @param tmpReq - ChangeNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeNodeGroupResponse
   */
  async changeNodeGroupWithOptions(tmpReq: $_model.ChangeNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeNodeGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeNodeGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      query["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.targetNodeGroupId)) {
      query["TargetNodeGroupId"] = request.targetNodeGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeNodeGroupResponse({}));
  }

  /**
   * 修改节点的节点组
   * 
   * @param request - ChangeNodeGroupRequest
   * @returns ChangeNodeGroupResponse
   */
  async changeNodeGroup(request: $_model.ChangeNodeGroupRequest): Promise<$_model.ChangeNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeNodeGroupWithOptions(request, runtime);
  }

  /**
   * 节点规格变配
   * 
   * @param tmpReq - ChangeNodeTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeNodeTypesResponse
   */
  async changeNodeTypesWithOptions(tmpReq: $_model.ChangeNodeTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeNodeTypesResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeNodeTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIds)) {
      request.nodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIds, "NodeIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeIdsShrink)) {
      body["NodeIds"] = request.nodeIdsShrink;
    }

    if (!$dara.isNull(request.nodeType)) {
      body["NodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeNodeTypes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeNodeTypesResponse>(await this.callApi(params, req, runtime), new $_model.ChangeNodeTypesResponse({}));
  }

  /**
   * 节点规格变配
   * 
   * @param request - ChangeNodeTypesRequest
   * @returns ChangeNodeTypesResponse
   */
  async changeNodeTypes(request: $_model.ChangeNodeTypesRequest): Promise<$_model.ChangeNodeTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeNodeTypesWithOptions(request, runtime);
  }

  /**
   * Moves a resource from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Moves a resource from one resource group to another.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Disconnect Connection
   * 
   * @param request - CloseSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseSessionResponse
   */
  async closeSessionWithOptions(request: $_model.CloseSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.sessionToken)) {
      body["SessionToken"] = request.sessionToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseSession",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseSessionResponse>(await this.callApi(params, req, runtime), new $_model.CloseSessionResponse({}));
  }

  /**
   * Disconnect Connection
   * 
   * @param request - CloseSessionRequest
   * @returns CloseSessionResponse
   */
  async closeSession(request: $_model.CloseSessionRequest): Promise<$_model.CloseSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeSessionWithOptions(request, runtime);
  }

  /**
   * Create a large-scale computing cluster
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: $_model.CreateClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.components)) {
      request.componentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.components, "Components", "json");
    }

    if (!$dara.isNull(tmpReq.networks)) {
      request.networksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.networks, "Networks", "json");
    }

    if (!$dara.isNull(tmpReq.nimizVSwitches)) {
      request.nimizVSwitchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nimizVSwitches, "NimizVSwitches", "json");
    }

    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterDescription)) {
      body["ClusterDescription"] = request.clusterDescription;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.componentsShrink)) {
      body["Components"] = request.componentsShrink;
    }

    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.networksShrink)) {
      body["Networks"] = request.networksShrink;
    }

    if (!$dara.isNull(request.nimizVSwitchesShrink)) {
      body["NimizVSwitches"] = request.nimizVSwitchesShrink;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!$dara.isNull(request.openEniJumboFrame)) {
      body["OpenEniJumboFrame"] = request.openEniJumboFrame;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2022-12-15",
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
   * Create a large-scale computing cluster
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * Creates a diagnostics task.
   * 
   * @param tmpReq - CreateDiagnosticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosticTaskResponse
   */
  async createDiagnosticTaskWithOptions(tmpReq: $_model.CreateDiagnosticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiagnosticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDiagnosticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aiJobLogInfo)) {
      request.aiJobLogInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aiJobLogInfo, "AiJobLogInfo", "json");
    }

    if (!$dara.isNull(tmpReq.nodeIds)) {
      request.nodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIds, "NodeIds", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiJobLogInfoShrink)) {
      body["AiJobLogInfo"] = request.aiJobLogInfoShrink;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.diagnosticType)) {
      body["DiagnosticType"] = request.diagnosticType;
    }

    if (!$dara.isNull(request.nodeIdsShrink)) {
      body["NodeIds"] = request.nodeIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnosticTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiagnosticTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiagnosticTaskResponse({}));
  }

  /**
   * Creates a diagnostics task.
   * 
   * @param request - CreateDiagnosticTaskRequest
   * @returns CreateDiagnosticTaskResponse
   */
  async createDiagnosticTask(request: $_model.CreateDiagnosticTaskRequest): Promise<$_model.CreateDiagnosticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDiagnosticTaskWithOptions(request, runtime);
  }

  /**
   * Creates a network test task.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param tmpReq - CreateNetTestTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNetTestTaskResponse
   */
  async createNetTestTaskWithOptions(tmpReq: $_model.CreateNetTestTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNetTestTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNetTestTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commTest)) {
      request.commTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commTest, "CommTest", "json");
    }

    if (!$dara.isNull(tmpReq.delayTest)) {
      request.delayTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.delayTest, "DelayTest", "json");
    }

    if (!$dara.isNull(tmpReq.trafficTest)) {
      request.trafficTestShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trafficTest, "TrafficTest", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.commTestShrink)) {
      body["CommTest"] = request.commTestShrink;
    }

    if (!$dara.isNull(request.delayTestShrink)) {
      body["DelayTest"] = request.delayTestShrink;
    }

    if (!$dara.isNull(request.netTestType)) {
      body["NetTestType"] = request.netTestType;
    }

    if (!$dara.isNull(request.networkMode)) {
      body["NetworkMode"] = request.networkMode;
    }

    if (!$dara.isNull(request.port)) {
      body["Port"] = request.port;
    }

    if (!$dara.isNull(request.trafficTestShrink)) {
      body["TrafficTest"] = request.trafficTestShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNetTestTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNetTestTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateNetTestTaskResponse({}));
  }

  /**
   * Creates a network test task.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - CreateNetTestTaskRequest
   * @returns CreateNetTestTaskResponse
   */
  async createNetTestTask(request: $_model.CreateNetTestTaskRequest): Promise<$_model.CreateNetTestTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNetTestTaskWithOptions(request, runtime);
  }

  /**
   * Create Node Group under Cluster
   * 
   * @param tmpReq - CreateNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroupWithOptions(tmpReq: $_model.CreateNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNodeGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNodeGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeGroup)) {
      request.nodeGroupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroup, "NodeGroup", "json");
    }

    if (!$dara.isNull(tmpReq.nodeUnit)) {
      request.nodeUnitShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeUnit, "NodeUnit", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupShrink)) {
      body["NodeGroup"] = request.nodeGroupShrink;
    }

    if (!$dara.isNull(request.nodeUnitShrink)) {
      body["NodeUnit"] = request.nodeUnitShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNodeGroup",
      version: "2022-12-15",
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
   * Create Node Group under Cluster
   * 
   * @param request - CreateNodeGroupRequest
   * @returns CreateNodeGroupResponse
   */
  async createNodeGroup(request: $_model.CreateNodeGroupRequest): Promise<$_model.CreateNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNodeGroupWithOptions(request, runtime);
  }

  /**
   * Creates a Web Terminal session.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - CreateSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionResponse
   */
  async createSessionWithOptions(request: $_model.CreateSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.sessionType)) {
      body["SessionType"] = request.sessionType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSession",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionResponse({}));
  }

  /**
   * Creates a Web Terminal session.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - CreateSessionRequest
   * @returns CreateSessionResponse
   */
  async createSession(request: $_model.CreateSessionRequest): Promise<$_model.CreateSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSessionWithOptions(request, runtime);
  }

  /**
   * Creates a virtual storage channel (VSC).
   * 
   * @param request - CreateVscRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVscResponse
   */
  async createVscWithOptions(request: $_model.CreateVscRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVscResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vscName)) {
      body["VscName"] = request.vscName;
    }

    if (!$dara.isNull(request.vscType)) {
      body["VscType"] = request.vscType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVsc",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVscResponse>(await this.callApi(params, req, runtime), new $_model.CreateVscResponse({}));
  }

  /**
   * Creates a virtual storage channel (VSC).
   * 
   * @param request - CreateVscRequest
   * @returns CreateVscResponse
   */
  async createVsc(request: $_model.CreateVscRequest): Promise<$_model.CreateVscResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVscWithOptions(request, runtime);
  }

  /**
   * Deletes a Lingjun cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2022-12-15",
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
   * Deletes a Lingjun cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 删除一个未使用超节点
   * 
   * @param request - DeleteHyperNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHyperNodeResponse
   */
  async deleteHyperNodeWithOptions(request: $_model.DeleteHyperNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHyperNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hyperNodeId)) {
      body["HyperNodeId"] = request.hyperNodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHyperNode",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHyperNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHyperNodeResponse({}));
  }

  /**
   * 删除一个未使用超节点
   * 
   * @param request - DeleteHyperNodeRequest
   * @returns DeleteHyperNodeResponse
   */
  async deleteHyperNode(request: $_model.DeleteHyperNodeRequest): Promise<$_model.DeleteHyperNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteHyperNodeWithOptions(request, runtime);
  }

  /**
   * 删除一个未使用节点
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: $_model.DeleteNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNode",
      version: "2022-12-15",
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
   * 删除一个未使用节点
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: $_model.DeleteNodeRequest): Promise<$_model.DeleteNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * 删除节点分组
   * 
   * @param request - DeleteNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeGroupResponse
   */
  async deleteNodeGroupWithOptions(request: $_model.DeleteNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNodeGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNodeGroupResponse({}));
  }

  /**
   * 删除节点分组
   * 
   * @param request - DeleteNodeGroupRequest
   * @returns DeleteNodeGroupResponse
   */
  async deleteNodeGroup(request: $_model.DeleteNodeGroupRequest): Promise<$_model.DeleteNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNodeGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a virtual storage channel (VSC).
   * 
   * @param request - DeleteVscRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVscResponse
   */
  async deleteVscWithOptions(request: $_model.DeleteVscRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVscResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vscId)) {
      body["VscId"] = request.vscId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVsc",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVscResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVscResponse({}));
  }

  /**
   * Deletes a virtual storage channel (VSC).
   * 
   * @param request - DeleteVscRequest
   * @returns DeleteVscResponse
   */
  async deleteVsc(request: $_model.DeleteVscRequest): Promise<$_model.DeleteVscResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteVscWithOptions(request, runtime);
  }

  /**
   * Queries information about a Lingjun cluster.
   * 
   * @param request - DescribeClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResponse
   */
  async describeClusterWithOptions(request: $_model.DescribeClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterResponse({}));
  }

  /**
   * Queries information about a Lingjun cluster.
   * 
   * @param request - DescribeClusterRequest
   * @returns DescribeClusterResponse
   */
  async describeCluster(request: $_model.DescribeClusterRequest): Promise<$_model.DescribeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  /**
   * Queries the results of a diagnostic task.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - DescribeDiagnosticResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosticResultResponse
   */
  async describeDiagnosticResultWithOptions(request: $_model.DescribeDiagnosticResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosticResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diagnosticId)) {
      body["DiagnosticId"] = request.diagnosticId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosticResult",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosticResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosticResultResponse({}));
  }

  /**
   * Queries the results of a diagnostic task.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - DescribeDiagnosticResultRequest
   * @returns DescribeDiagnosticResultResponse
   */
  async describeDiagnosticResult(request: $_model.DescribeDiagnosticResultRequest): Promise<$_model.DescribeDiagnosticResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosticResultWithOptions(request, runtime);
  }

  /**
   * 查询节点列表
   * 
   * @param request - DescribeHyperNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHyperNodeResponse
   */
  async describeHyperNodeWithOptions(request: $_model.DescribeHyperNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHyperNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hyperNodeId)) {
      body["HyperNodeId"] = request.hyperNodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHyperNode",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHyperNodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHyperNodeResponse({}));
  }

  /**
   * 查询节点列表
   * 
   * @param request - DescribeHyperNodeRequest
   * @returns DescribeHyperNodeResponse
   */
  async describeHyperNode(request: $_model.DescribeHyperNodeRequest): Promise<$_model.DescribeHyperNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHyperNodeWithOptions(request, runtime);
  }

  /**
   * Queries the execution list and status of O\\&M Assistant commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInvocationsResponse
   */
  async describeInvocationsWithOptions(request: $_model.DescribeInvocationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInvocationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.includeOutput)) {
      body["IncludeOutput"] = request.includeOutput;
    }

    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInvocations",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInvocationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInvocationsResponse({}));
  }

  /**
   * Queries the execution list and status of O\\&M Assistant commands.
   * 
   * @param request - DescribeInvocationsRequest
   * @returns DescribeInvocationsResponse
   */
  async describeInvocations(request: $_model.DescribeInvocationsRequest): Promise<$_model.DescribeInvocationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInvocationsWithOptions(request, runtime);
  }

  /**
   * Query Network Test Result
   * 
   * @param request - DescribeNetTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNetTestResultResponse
   */
  async describeNetTestResultWithOptions(request: $_model.DescribeNetTestResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNetTestResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.testId)) {
      body["TestId"] = request.testId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNetTestResult",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNetTestResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNetTestResultResponse({}));
  }

  /**
   * Query Network Test Result
   * 
   * @param request - DescribeNetTestResultRequest
   * @returns DescribeNetTestResultResponse
   */
  async describeNetTestResult(request: $_model.DescribeNetTestResultRequest): Promise<$_model.DescribeNetTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNetTestResultWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes.
   * 
   * @param request - DescribeNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeResponse
   */
  async describeNodeWithOptions(request: $_model.DescribeNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNode",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeResponse({}));
  }

  /**
   * Queries a list of nodes.
   * 
   * @param request - DescribeNodeRequest
   * @returns DescribeNodeResponse
   */
  async describeNode(request: $_model.DescribeNodeRequest): Promise<$_model.DescribeNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeWithOptions(request, runtime);
  }

  /**
   * 查询节点分组
   * 
   * @param request - DescribeNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeGroupResponse
   */
  async describeNodeGroupWithOptions(request: $_model.DescribeNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeGroupResponse({}));
  }

  /**
   * 查询节点分组
   * 
   * @param request - DescribeNodeGroupRequest
   * @returns DescribeNodeGroupResponse
   */
  async describeNodeGroup(request: $_model.DescribeNodeGroupRequest): Promise<$_model.DescribeNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeGroupWithOptions(request, runtime);
  }

  /**
   * 创建Web Terminal会话
   * 
   * @param request - DescribeNodeTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodeTypeResponse
   */
  async describeNodeTypeWithOptions(request: $_model.DescribeNodeTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodeTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeType)) {
      body["NodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodeType",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodeTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodeTypeResponse({}));
  }

  /**
   * 创建Web Terminal会话
   * 
   * @param request - DescribeNodeTypeRequest
   * @returns DescribeNodeTypeResponse
   */
  async describeNodeType(request: $_model.DescribeNodeTypeRequest): Promise<$_model.DescribeNodeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodeTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the files that are sent by an O\\&M assistant and the status of the files.
   * 
   * @param request - DescribeSendFileResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResultsWithOptions(request: $_model.DescribeSendFileResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSendFileResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSendFileResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSendFileResultsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSendFileResultsResponse({}));
  }

  /**
   * Queries the files that are sent by an O\\&M assistant and the status of the files.
   * 
   * @param request - DescribeSendFileResultsRequest
   * @returns DescribeSendFileResultsResponse
   */
  async describeSendFileResults(request: $_model.DescribeSendFileResultsRequest): Promise<$_model.DescribeSendFileResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSendFileResultsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a task.
   * 
   * @param request - DescribeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(request: $_model.DescribeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskResponse({}));
  }

  /**
   * Queries the details of a task.
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(request: $_model.DescribeTaskRequest): Promise<$_model.DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskWithOptions(request, runtime);
  }

  /**
   * Queries information about a virtual storage channel (VSC).
   * 
   * @param request - DescribeVscRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVscResponse
   */
  async describeVscWithOptions(request: $_model.DescribeVscRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVscResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vscId)) {
      body["VscId"] = request.vscId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVsc",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVscResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVscResponse({}));
  }

  /**
   * Queries information about a virtual storage channel (VSC).
   * 
   * @param request - DescribeVscRequest
   * @returns DescribeVscResponse
   */
  async describeVsc(request: $_model.DescribeVscRequest): Promise<$_model.DescribeVscResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVscWithOptions(request, runtime);
  }

  /**
   * Queries a list of zones.
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: $_model.DescribeZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      body["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeZones",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeZonesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeZonesResponse({}));
  }

  /**
   * Queries a list of zones.
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: $_model.DescribeZonesRequest): Promise<$_model.DescribeZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * Cluster Scaling
   * 
   * @param tmpReq - ExtendClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExtendClusterResponse
   */
  async extendClusterWithOptions(tmpReq: $_model.ExtendClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExtendClusterResponse> {
    tmpReq.validate();
    let request = new $_model.ExtendClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ipAllocationPolicy)) {
      request.ipAllocationPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ipAllocationPolicy, "IpAllocationPolicy", "json");
    }

    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    if (!$dara.isNull(tmpReq.vpdSubnets)) {
      request.vpdSubnetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.vpdSubnets, "VpdSubnets", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.ipAllocationPolicyShrink)) {
      body["IpAllocationPolicy"] = request.ipAllocationPolicyShrink;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    if (!$dara.isNull(request.vSwitchZoneId)) {
      body["VSwitchZoneId"] = request.vSwitchZoneId;
    }

    if (!$dara.isNull(request.vpdSubnetsShrink)) {
      body["VpdSubnets"] = request.vpdSubnetsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExtendCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExtendClusterResponse>(await this.callApi(params, req, runtime), new $_model.ExtendClusterResponse({}));
  }

  /**
   * Cluster Scaling
   * 
   * @param request - ExtendClusterRequest
   * @returns ExtendClusterResponse
   */
  async extendCluster(request: $_model.ExtendClusterRequest): Promise<$_model.ExtendClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.extendClusterWithOptions(request, runtime);
  }

  /**
   * 集群下的主机分组列表，分组下的主机列表
   * 
   * @param request - ListClusterHyperNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterHyperNodesResponse
   */
  async listClusterHyperNodesWithOptions(request: $_model.ListClusterHyperNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterHyperNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterHyperNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterHyperNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterHyperNodesResponse({}));
  }

  /**
   * 集群下的主机分组列表，分组下的主机列表
   * 
   * @param request - ListClusterHyperNodesRequest
   * @returns ListClusterHyperNodesResponse
   */
  async listClusterHyperNodes(request: $_model.ListClusterHyperNodesRequest): Promise<$_model.ListClusterHyperNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterHyperNodesWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes in a cluster.
   * 
   * @param request - ListClusterNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterNodesResponse
   */
  async listClusterNodesWithOptions(request: $_model.ListClusterNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.operatingStates)) {
      body["OperatingStates"] = request.operatingStates;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterNodesResponse({}));
  }

  /**
   * Queries a list of nodes in a cluster.
   * 
   * @param request - ListClusterNodesRequest
   * @returns ListClusterNodesResponse
   */
  async listClusterNodes(request: $_model.ListClusterNodesRequest): Promise<$_model.ListClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterNodesWithOptions(request, runtime);
  }

  /**
   * Queries a list of clusters.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2022-12-15",
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
   * Queries a list of clusters.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * List of Diagnostic Tasks
   * 
   * @param request - ListDiagnosticResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosticResultsResponse
   */
  async listDiagnosticResultsWithOptions(request: $_model.ListDiagnosticResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnosticResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diagType)) {
      body["DiagType"] = request.diagType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnosticResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnosticResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnosticResultsResponse({}));
  }

  /**
   * List of Diagnostic Tasks
   * 
   * @param request - ListDiagnosticResultsRequest
   * @returns ListDiagnosticResultsResponse
   */
  async listDiagnosticResults(request: $_model.ListDiagnosticResultsRequest): Promise<$_model.ListDiagnosticResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDiagnosticResultsWithOptions(request, runtime);
  }

  /**
   * 可用rack物理机列表
   * 
   * @param request - ListFreeHyperNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreeHyperNodesResponse
   */
  async listFreeHyperNodesWithOptions(request: $_model.ListFreeHyperNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFreeHyperNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.machineType)) {
      body["MachineType"] = request.machineType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFreeHyperNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFreeHyperNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListFreeHyperNodesResponse({}));
  }

  /**
   * 可用rack物理机列表
   * 
   * @param request - ListFreeHyperNodesRequest
   * @returns ListFreeHyperNodesResponse
   */
  async listFreeHyperNodes(request: $_model.ListFreeHyperNodesRequest): Promise<$_model.ListFreeHyperNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFreeHyperNodesWithOptions(request, runtime);
  }

  /**
   * Queries a list of nodes that are not used.
   * 
   * @param request - ListFreeNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFreeNodesResponse
   */
  async listFreeNodesWithOptions(request: $_model.ListFreeNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFreeNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.machineType)) {
      body["MachineType"] = request.machineType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.operatingStates)) {
      body["OperatingStates"] = request.operatingStates;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFreeNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFreeNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListFreeNodesResponse({}));
  }

  /**
   * Queries a list of nodes that are not used.
   * 
   * @param request - ListFreeNodesRequest
   * @returns ListFreeNodesResponse
   */
  async listFreeNodes(request: $_model.ListFreeNodesRequest): Promise<$_model.ListFreeNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFreeNodesWithOptions(request, runtime);
  }

  /**
   * 机器列表
   * 
   * @param tmpReq - ListHyperNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHyperNodesResponse
   */
  async listHyperNodesWithOptions(tmpReq: $_model.ListHyperNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListHyperNodesResponse> {
    tmpReq.validate();
    let request = new $_model.ListHyperNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.hyperNodeIds)) {
      request.hyperNodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hyperNodeIds, "HyperNodeIds", "json");
    }

    if (!$dara.isNull(tmpReq.operatingStates)) {
      request.operatingStatesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.operatingStates, "OperatingStates", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.hyperNodeIdsShrink)) {
      query["HyperNodeIds"] = request.hyperNodeIdsShrink;
    }

    if (!$dara.isNull(request.operatingStatesShrink)) {
      query["OperatingStates"] = request.operatingStatesShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.hpnZone)) {
      body["HpnZone"] = request.hpnZone;
    }

    if (!$dara.isNull(request.hyperNodeId)) {
      body["HyperNodeId"] = request.hyperNodeId;
    }

    if (!$dara.isNull(request.machineType)) {
      body["MachineType"] = request.machineType;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupName)) {
      body["NodeGroupName"] = request.nodeGroupName;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHyperNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHyperNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListHyperNodesResponse({}));
  }

  /**
   * 机器列表
   * 
   * @param request - ListHyperNodesRequest
   * @returns ListHyperNodesResponse
   */
  async listHyperNodes(request: $_model.ListHyperNodesRequest): Promise<$_model.ListHyperNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listHyperNodesWithOptions(request, runtime);
  }

  /**
   * Lists available images.
   * 
   * @param request - ListImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: $_model.ListImagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.architecture)) {
      body["Architecture"] = request.architecture;
    }

    if (!$dara.isNull(request.imageVersion)) {
      body["ImageVersion"] = request.imageVersion;
    }

    if (!$dara.isNull(request.platform)) {
      body["Platform"] = request.platform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesResponse({}));
  }

  /**
   * Lists available images.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  /**
   * Query machine network configuration using HPNZone and machine type
   * 
   * @param tmpReq - ListMachineNetworkInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineNetworkInfoResponse
   */
  async listMachineNetworkInfoWithOptions(tmpReq: $_model.ListMachineNetworkInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMachineNetworkInfoResponse> {
    tmpReq.validate();
    let request = new $_model.ListMachineNetworkInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.machineHpnInfo)) {
      request.machineHpnInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.machineHpnInfo, "MachineHpnInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.machineHpnInfoShrink)) {
      body["MachineHpnInfo"] = request.machineHpnInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachineNetworkInfo",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMachineNetworkInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListMachineNetworkInfoResponse({}));
  }

  /**
   * Query machine network configuration using HPNZone and machine type
   * 
   * @param request - ListMachineNetworkInfoRequest
   * @returns ListMachineNetworkInfoResponse
   */
  async listMachineNetworkInfo(request: $_model.ListMachineNetworkInfoRequest): Promise<$_model.ListMachineNetworkInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMachineNetworkInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of instance types that are available to users.
   * 
   * @param request - ListMachineTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMachineTypesResponse
   */
  async listMachineTypesWithOptions(request: $_model.ListMachineTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMachineTypesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMachineTypes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMachineTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListMachineTypesResponse({}));
  }

  /**
   * Queries a list of instance types that are available to users.
   * 
   * @param request - ListMachineTypesRequest
   * @returns ListMachineTypesResponse
   */
  async listMachineTypes(request: $_model.ListMachineTypesRequest): Promise<$_model.ListMachineTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMachineTypesWithOptions(request, runtime);
  }

  /**
   * Lists the results of network test results.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - ListNetTestResultsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNetTestResultsResponse
   */
  async listNetTestResultsWithOptions(request: $_model.ListNetTestResultsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNetTestResultsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.netTestType)) {
      body["NetTestType"] = request.netTestType;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNetTestResults",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNetTestResultsResponse>(await this.callApi(params, req, runtime), new $_model.ListNetTestResultsResponse({}));
  }

  /**
   * Lists the results of network test results.
   * 
   * @remarks
   * The API creates a session, returns the frontend endpoint, and starts a periodic task to track the session status.
   * 
   * @param request - ListNetTestResultsRequest
   * @returns ListNetTestResultsResponse
   */
  async listNetTestResults(request: $_model.ListNetTestResultsRequest): Promise<$_model.ListNetTestResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNetTestResultsWithOptions(request, runtime);
  }

  /**
   * Queries node groups in a cluster.
   * 
   * @param request - ListNodeGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroupsWithOptions(request: $_model.ListNodeGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeGroups",
      version: "2022-12-15",
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
   * Queries node groups in a cluster.
   * 
   * @param request - ListNodeGroupsRequest
   * @returns ListNodeGroupsResponse
   */
  async listNodeGroups(request: $_model.ListNodeGroupsRequest): Promise<$_model.ListNodeGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeGroupsWithOptions(request, runtime);
  }

  /**
   * 查询系统日志
   * 
   * @param request - ListSyslogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSyslogsResponse
   */
  async listSyslogsWithOptions(request: $_model.ListSyslogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSyslogsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fromTime)) {
      body["FromTime"] = request.fromTime;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.reverse)) {
      body["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.toTime)) {
      body["ToTime"] = request.toTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSyslogs",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSyslogsResponse>(await this.callApi(params, req, runtime), new $_model.ListSyslogsResponse({}));
  }

  /**
   * 查询系统日志
   * 
   * @param request - ListSyslogsRequest
   * @returns ListSyslogsResponse
   */
  async listSyslogs(request: $_model.ListSyslogsRequest): Promise<$_model.ListSyslogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSyslogsWithOptions(request, runtime);
  }

  /**
   * Queries the tags of resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2022-12-15",
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
   * Queries the tags of resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Query the cluster types available to the user
   * 
   * @param request - ListUserClusterTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserClusterTypesResponse
   */
  async listUserClusterTypesWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListUserClusterTypesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListUserClusterTypes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserClusterTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserClusterTypesResponse({}));
  }

  /**
   * Query the cluster types available to the user
   * @returns ListUserClusterTypesResponse
   */
  async listUserClusterTypes(): Promise<$_model.ListUserClusterTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listUserClusterTypesWithOptions(runtime);
  }

  /**
   * Queries a list of virtual storage channels (VSC).
   * 
   * @param tmpReq - ListVscsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVscsResponse
   */
  async listVscsWithOptions(tmpReq: $_model.ListVscsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListVscsResponse> {
    tmpReq.validate();
    let request = new $_model.ListVscsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIds)) {
      request.nodeIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIds, "NodeIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.nodeIdsShrink)) {
      body["NodeIds"] = request.nodeIdsShrink;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vscName)) {
      body["VscName"] = request.vscName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVscs",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVscsResponse>(await this.callApi(params, req, runtime), new $_model.ListVscsResponse({}));
  }

  /**
   * Queries a list of virtual storage channels (VSC).
   * 
   * @param request - ListVscsRequest
   * @returns ListVscsResponse
   */
  async listVscs(request: $_model.ListVscsRequest): Promise<$_model.ListVscsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listVscsWithOptions(request, runtime);
  }

  /**
   * Restarts nodes.
   * 
   * @param tmpReq - RebootNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebootNodesResponse
   */
  async rebootNodesWithOptions(tmpReq: $_model.RebootNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RebootNodesResponse> {
    tmpReq.validate();
    let request = new $_model.RebootNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebootNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebootNodesResponse>(await this.callApi(params, req, runtime), new $_model.RebootNodesResponse({}));
  }

  /**
   * Restarts nodes.
   * 
   * @param request - RebootNodesRequest
   * @returns RebootNodesResponse
   */
  async rebootNodes(request: $_model.RebootNodesRequest): Promise<$_model.RebootNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rebootNodesWithOptions(request, runtime);
  }

  /**
   * Reinstall a node.
   * 
   * @param tmpReq - ReimageNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReimageNodesResponse
   */
  async reimageNodesWithOptions(tmpReq: $_model.ReimageNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReimageNodesResponse> {
    tmpReq.validate();
    let request = new $_model.ReimageNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReimageNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReimageNodesResponse>(await this.callApi(params, req, runtime), new $_model.ReimageNodesResponse({}));
  }

  /**
   * Reinstall a node.
   * 
   * @param request - ReimageNodesRequest
   * @returns ReimageNodesResponse
   */
  async reimageNodes(request: $_model.ReimageNodesRequest): Promise<$_model.ReimageNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reimageNodesWithOptions(request, runtime);
  }

  /**
   * 节点异常问题上报
   * 
   * @param tmpReq - ReportNodesStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReportNodesStatusResponse
   */
  async reportNodesStatusWithOptions(tmpReq: $_model.ReportNodesStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReportNodesStatusResponse> {
    tmpReq.validate();
    let request = new $_model.ReportNodesStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.issueCategory)) {
      body["IssueCategory"] = request.issueCategory;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    if (!$dara.isNull(request.reason)) {
      body["Reason"] = request.reason;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReportNodesStatus",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReportNodesStatusResponse>(await this.callApi(params, req, runtime), new $_model.ReportNodesStatusResponse({}));
  }

  /**
   * 节点异常问题上报
   * 
   * @param request - ReportNodesStatusRequest
   * @returns ReportNodesStatusResponse
   */
  async reportNodesStatus(request: $_model.ReportNodesStatusRequest): Promise<$_model.ReportNodesStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reportNodesStatusWithOptions(request, runtime);
  }

  /**
   * Runs a Shell script on one or more Lingjun nodes.
   * 
   * @param tmpReq - RunCommandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCommandResponse
   */
  async runCommandWithOptions(tmpReq: $_model.RunCommandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCommandResponse> {
    tmpReq.validate();
    let request = new $_model.RunCommandShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commandContent)) {
      body["CommandContent"] = request.commandContent;
    }

    if (!$dara.isNull(request.commandId)) {
      body["CommandId"] = request.commandId;
    }

    if (!$dara.isNull(request.contentEncoding)) {
      body["ContentEncoding"] = request.contentEncoding;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableParameter)) {
      body["EnableParameter"] = request.enableParameter;
    }

    if (!$dara.isNull(request.frequency)) {
      body["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.launcher)) {
      body["Launcher"] = request.launcher;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.repeatMode)) {
      body["RepeatMode"] = request.repeatMode;
    }

    if (!$dara.isNull(request.terminationMode)) {
      body["TerminationMode"] = request.terminationMode;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.username)) {
      body["Username"] = request.username;
    }

    if (!$dara.isNull(request.workingDir)) {
      body["WorkingDir"] = request.workingDir;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCommand",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCommandResponse>(await this.callApi(params, req, runtime), new $_model.RunCommandResponse({}));
  }

  /**
   * Runs a Shell script on one or more Lingjun nodes.
   * 
   * @param request - RunCommandRequest
   * @returns RunCommandResponse
   */
  async runCommand(request: $_model.RunCommandRequest): Promise<$_model.RunCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCommandWithOptions(request, runtime);
  }

  /**
   * Sends a file to one or more Lingjun nodes.
   * 
   * @param tmpReq - SendFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendFileResponse
   */
  async sendFileWithOptions(tmpReq: $_model.SendFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendFileResponse> {
    tmpReq.validate();
    let request = new $_model.SendFileShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.fileGroup)) {
      body["FileGroup"] = request.fileGroup;
    }

    if (!$dara.isNull(request.fileMode)) {
      body["FileMode"] = request.fileMode;
    }

    if (!$dara.isNull(request.fileOwner)) {
      body["FileOwner"] = request.fileOwner;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.targetDir)) {
      body["TargetDir"] = request.targetDir;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendFile",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendFileResponse>(await this.callApi(params, req, runtime), new $_model.SendFileResponse({}));
  }

  /**
   * Sends a file to one or more Lingjun nodes.
   * 
   * @param request - SendFileRequest
   * @returns SendFileResponse
   */
  async sendFile(request: $_model.SendFileRequest): Promise<$_model.SendFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendFileWithOptions(request, runtime);
  }

  /**
   * Scales in a cluster.
   * 
   * @param tmpReq - ShrinkClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShrinkClusterResponse
   */
  async shrinkClusterWithOptions(tmpReq: $_model.ShrinkClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ShrinkClusterResponse> {
    tmpReq.validate();
    let request = new $_model.ShrinkClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeGroups)) {
      request.nodeGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeGroups, "NodeGroups", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodeGroupsShrink)) {
      body["NodeGroups"] = request.nodeGroupsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShrinkCluster",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShrinkClusterResponse>(await this.callApi(params, req, runtime), new $_model.ShrinkClusterResponse({}));
  }

  /**
   * Scales in a cluster.
   * 
   * @param request - ShrinkClusterRequest
   * @returns ShrinkClusterResponse
   */
  async shrinkCluster(request: $_model.ShrinkClusterRequest): Promise<$_model.ShrinkClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.shrinkClusterWithOptions(request, runtime);
  }

  /**
   * Stops the O\\&M assistant command execution.
   * 
   * @param tmpReq - StopInvocationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInvocationResponse
   */
  async stopInvocationWithOptions(tmpReq: $_model.StopInvocationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInvocationResponse> {
    tmpReq.validate();
    let request = new $_model.StopInvocationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodeIdList)) {
      request.nodeIdListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodeIdList, "NodeIdList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.invokeId)) {
      body["InvokeId"] = request.invokeId;
    }

    if (!$dara.isNull(request.nodeIdListShrink)) {
      body["NodeIdList"] = request.nodeIdListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInvocation",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInvocationResponse>(await this.callApi(params, req, runtime), new $_model.StopInvocationResponse({}));
  }

  /**
   * Stops the O\\&M assistant command execution.
   * 
   * @param request - StopInvocationRequest
   * @returns StopInvocationResponse
   */
  async stopInvocation(request: $_model.StopInvocationRequest): Promise<$_model.StopInvocationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInvocationWithOptions(request, runtime);
  }

  /**
   * Stops nodes.
   * 
   * @param tmpReq - StopNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopNodesResponse
   */
  async stopNodesWithOptions(tmpReq: $_model.StopNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopNodesResponse> {
    tmpReq.validate();
    let request = new $_model.StopNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "Nodes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ignoreFailedNodeTasks)) {
      body["IgnoreFailedNodeTasks"] = request.ignoreFailedNodeTasks;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      body["Nodes"] = request.nodesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopNodes",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopNodesResponse>(await this.callApi(params, req, runtime), new $_model.StopNodesResponse({}));
  }

  /**
   * Stops nodes.
   * 
   * @param request - StopNodesRequest
   * @returns StopNodesResponse
   */
  async stopNodes(request: $_model.StopNodesRequest): Promise<$_model.StopNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopNodesWithOptions(request, runtime);
  }

  /**
   * Tags resources.
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-12-15",
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
   * Tags resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes a custom tag from a resource.
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-12-15",
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
   * Deletes a custom tag from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Update Node Group
   * 
   * @param request - UpdateNodeGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeGroupResponse
   */
  async updateNodeGroupWithOptions(request: $_model.UpdateNodeGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodeGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileSystemMountEnabled)) {
      body["FileSystemMountEnabled"] = request.fileSystemMountEnabled;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.keyPairName)) {
      body["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.loginPassword)) {
      body["LoginPassword"] = request.loginPassword;
    }

    if (!$dara.isNull(request.newNodeGroupName)) {
      body["NewNodeGroupName"] = request.newNodeGroupName;
    }

    if (!$dara.isNull(request.nodeGroupId)) {
      body["NodeGroupId"] = request.nodeGroupId;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodeGroup",
      version: "2022-12-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodeGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodeGroupResponse({}));
  }

  /**
   * Update Node Group
   * 
   * @param request - UpdateNodeGroupRequest
   * @returns UpdateNodeGroupResponse
   */
  async updateNodeGroup(request: $_model.UpdateNodeGroupRequest): Promise<$_model.UpdateNodeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodeGroupWithOptions(request, runtime);
  }

}
