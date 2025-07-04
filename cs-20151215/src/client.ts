// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'ap-northeast-2-pop': "cs.aliyuncs.com",
      'cn-beijing-finance-pop': "cs.aliyuncs.com",
      'cn-beijing-gov-1': "cs.aliyuncs.com",
      'cn-beijing-nu16-b01': "cs.aliyuncs.com",
      'cn-edge-1': "cs.aliyuncs.com",
      'cn-fujian': "cs.aliyuncs.com",
      'cn-haidian-cm12-c01': "cs.aliyuncs.com",
      'cn-hangzhou-bj-b01': "cs.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "cs.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "cs.aliyuncs.com",
      'cn-hangzhou-test-306': "cs.aliyuncs.com",
      'cn-hongkong-finance-pop': "cs.aliyuncs.com",
      'cn-qingdao-nebula': "cs.aliyuncs.com",
      'cn-shanghai-et15-b01': "cs.aliyuncs.com",
      'cn-shanghai-et2-b01': "cs.aliyuncs.com",
      'cn-shanghai-inner': "cs.aliyuncs.com",
      'cn-shanghai-internal-test-1': "cs.aliyuncs.com",
      'cn-shenzhen-inner': "cs.aliyuncs.com",
      'cn-shenzhen-st4-d01': "cs.aliyuncs.com",
      'cn-shenzhen-su18-b01': "cs.aliyuncs.com",
      'cn-wuhan': "cs.aliyuncs.com",
      'cn-yushanfang': "cs.aliyuncs.com",
      'cn-zhangbei': "cs.aliyuncs.com",
      'cn-zhangbei-na61-b01': "cs.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "cs.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "cs.aliyuncs.com",
      'eu-west-1-oxs': "cs.aliyuncs.com",
      'rus-west-1-pop': "cs.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds existing Elastic Compute Service (ECS) instances to a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AttachInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstancesResponse
   */
  async attachInstancesWithOptions(ClusterId: string, request: $_model.AttachInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AttachInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!$dara.isNull(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!$dara.isNull(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.isEdgeWorker)) {
      body["is_edge_worker"] = request.isEdgeWorker;
    }

    if (!$dara.isNull(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!$dara.isNull(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!$dara.isNull(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachInstancesResponse>(await this.callApi(params, req, runtime), new $_model.AttachInstancesResponse({}));
  }

  /**
   * Adds existing Elastic Compute Service (ECS) instances to a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - AttachInstancesRequest
   * @returns AttachInstancesResponse
   */
  async attachInstances(ClusterId: string, request: $_model.AttachInstancesRequest): Promise<$_model.AttachInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Adds existing nodes to a specific node pool. You can add existing ECS instances to a specific node pool in a Container Service for Kubernetes (ACK) cluster as worker nodes. You can also add removed worker nodes back to the node pool.
   * 
   * @param request - AttachInstancesToNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachInstancesToNodePoolResponse
   */
  async attachInstancesToNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.AttachInstancesToNodePoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AttachInstancesToNodePoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachInstancesToNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachInstancesToNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.AttachInstancesToNodePoolResponse({}));
  }

  /**
   * Adds existing nodes to a specific node pool. You can add existing ECS instances to a specific node pool in a Container Service for Kubernetes (ACK) cluster as worker nodes. You can also add removed worker nodes back to the node pool.
   * 
   * @param request - AttachInstancesToNodePoolRequest
   * @returns AttachInstancesToNodePoolResponse
   */
  async attachInstancesToNodePool(ClusterId: string, NodepoolId: string, request: $_model.AttachInstancesToNodePoolRequest): Promise<$_model.AttachInstancesToNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachInstancesToNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   * 
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelClusterUpgradeResponse
   */
  // Deprecated
  async cancelClusterUpgradeWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelClusterUpgradeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelClusterUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/upgrade/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CancelClusterUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.CancelClusterUpgradeResponse({}));
  }

  /**
   * You can call the CancelClusterUpgrade operation to cancel the update of a cluster.
   * 
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   * @returns CancelClusterUpgradeResponse
   */
  // Deprecated
  async cancelClusterUpgrade(ClusterId: string): Promise<$_model.CancelClusterUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the CancelComponentUpgrade operation to cancel the update of a component.
   * 
   * @deprecated OpenAPI CancelComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelComponentUpgradeResponse
   */
  // Deprecated
  async cancelComponentUpgradeWithOptions(clusterId: string, componentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelComponentUpgradeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/components/${$dara.URL.percentEncode(componentId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CancelComponentUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.CancelComponentUpgradeResponse({}));
  }

  /**
   * You can call the CancelComponentUpgrade operation to cancel the update of a component.
   * 
   * @deprecated OpenAPI CancelComponentUpgrade is deprecated
   * @returns CancelComponentUpgradeResponse
   */
  // Deprecated
  async cancelComponentUpgrade(clusterId: string, componentId: string): Promise<$_model.CancelComponentUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelComponentUpgradeWithOptions(clusterId, componentId, headers, runtime);
  }

  /**
   * You can call the CancelOperationPlan operation to cancel a pending auto O\\\\\\\\\\\\&M plan.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOperationPlanResponse
   */
  async cancelOperationPlanWithOptions(planId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOperationPlanResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelOperationPlan",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/operation/plans/${$dara.URL.percentEncode(planId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOperationPlanResponse>(await this.callApi(params, req, runtime), new $_model.CancelOperationPlanResponse({}));
  }

  /**
   * You can call the CancelOperationPlan operation to cancel a pending auto O\\\\\\\\\\\\&M plan.
   * @returns CancelOperationPlanResponse
   */
  async cancelOperationPlan(planId: string): Promise<$_model.CancelOperationPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOperationPlanWithOptions(planId, headers, runtime);
  }

  /**
   * Cancels the execution of a cluster task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * Cancels the execution of a cluster task.
   * @returns CancelTaskResponse
   */
  async cancelTask(taskId: string): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnableWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckControlPlaneLogEnableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckControlPlaneLogEnable",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/controlplanelog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckControlPlaneLogEnableResponse>(await this.callApi(params, req, runtime), new $_model.CheckControlPlaneLogEnableResponse({}));
  }

  /**
   * Queries the current log configuration of control plane components, including the log retention period and the log collection component. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager.
   * @returns CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnable(ClusterId: string): Promise<$_model.CheckControlPlaneLogEnableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkControlPlaneLogEnableWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Checks whether the specified service roles are granted to Container Service for Kubernetes (ACK) within the current Alibaba Cloud account. ACK can access other cloud services, such as Elastic Compute Service (ECS), Object Storage Service (OSS), File Storage NAS (NAS), and Server Load Balancer (SLB), only after ACK is assigned the required service roles.
   * 
   * @param request - CheckServiceRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceRoleResponse
   */
  async checkServiceRoleWithOptions(request: $_model.CheckServiceRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roles)) {
      body["roles"] = request.roles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceRole",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/ram/check-service-role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceRoleResponse({}));
  }

  /**
   * Checks whether the specified service roles are granted to Container Service for Kubernetes (ACK) within the current Alibaba Cloud account. ACK can access other cloud services, such as Elastic Compute Service (ECS), Object Storage Service (OSS), File Storage NAS (NAS), and Server Load Balancer (SLB), only after ACK is assigned the required service roles.
   * 
   * @param request - CheckServiceRoleRequest
   * @returns CheckServiceRoleResponse
   */
  async checkServiceRole(request: $_model.CheckServiceRoleRequest): Promise<$_model.CheckServiceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkServiceRoleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes kubeconfig files that may pose potential risks from a user and revokes Role-Based Access Control (RBAC) permissions on a cluster.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permission.
   * *   You cannot revoke the permissions of an Alibaba Cloud account.
   * *   You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanClusterUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CleanClusterUserPermissionsResponse
   */
  async cleanClusterUserPermissionsWithOptions(ClusterId: string, Uid: string, request: $_model.CleanClusterUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CleanClusterUserPermissionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CleanClusterUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/cluster/${$dara.URL.percentEncode(ClusterId)}/user/${$dara.URL.percentEncode(Uid)}/permissions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CleanClusterUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.CleanClusterUserPermissionsResponse({}));
  }

  /**
   * Deletes kubeconfig files that may pose potential risks from a user and revokes Role-Based Access Control (RBAC) permissions on a cluster.
   * 
   * @remarks
   * > 
   * *   To call this operation, make sure that you have the AliyunCSFullAccess permission.
   * *   You cannot revoke the permissions of an Alibaba Cloud account.
   * *   You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanClusterUserPermissionsRequest
   * @returns CleanClusterUserPermissionsResponse
   */
  async cleanClusterUserPermissions(ClusterId: string, Uid: string, request: $_model.CleanClusterUserPermissionsRequest): Promise<$_model.CleanClusterUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cleanClusterUserPermissionsWithOptions(ClusterId, Uid, request, headers, runtime);
  }

  /**
   * You can call the CleanUserPermissions operation to delete the kubeconfig files of the specified users and revoke the relevant Role-Based Access Control (RBAC) permissions. This API operation is suitable for scenarios where employees have resigned or the accounts of employees are locked.
   * 
   * @remarks
   * > - To call this operation, make sure that you have the AliyunCSFullAccess permission.
   * > - You cannot revoke the permissions of an Alibaba Cloud account.
   * > - You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param tmpReq - CleanUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CleanUserPermissionsResponse
   */
  async cleanUserPermissionsWithOptions(Uid: string, tmpReq: $_model.CleanUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CleanUserPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.CleanUserPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CleanUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/users/${$dara.URL.percentEncode(Uid)}/permissions`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CleanUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.CleanUserPermissionsResponse({}));
  }

  /**
   * You can call the CleanUserPermissions operation to delete the kubeconfig files of the specified users and revoke the relevant Role-Based Access Control (RBAC) permissions. This API operation is suitable for scenarios where employees have resigned or the accounts of employees are locked.
   * 
   * @remarks
   * > - To call this operation, make sure that you have the AliyunCSFullAccess permission.
   * > - You cannot revoke the permissions of an Alibaba Cloud account.
   * > - You cannot revoke the permissions of the account that you use to call this operation.
   * 
   * @param request - CleanUserPermissionsRequest
   * @returns CleanUserPermissionsResponse
   */
  async cleanUserPermissions(Uid: string, request: $_model.CleanUserPermissionsRequest): Promise<$_model.CleanUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cleanUserPermissionsWithOptions(Uid, request, headers, runtime);
  }

  /**
   * Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   * 
   * @param request - CreateAutoscalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoscalingConfigResponse
   */
  async createAutoscalingConfigWithOptions(ClusterId: string, request: $_model.CreateAutoscalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoscalingConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coolDownDuration)) {
      body["cool_down_duration"] = request.coolDownDuration;
    }

    if (!$dara.isNull(request.daemonsetEvictionForNodes)) {
      body["daemonset_eviction_for_nodes"] = request.daemonsetEvictionForNodes;
    }

    if (!$dara.isNull(request.expander)) {
      body["expander"] = request.expander;
    }

    if (!$dara.isNull(request.gpuUtilizationThreshold)) {
      body["gpu_utilization_threshold"] = request.gpuUtilizationThreshold;
    }

    if (!$dara.isNull(request.maxGracefulTerminationSec)) {
      body["max_graceful_termination_sec"] = request.maxGracefulTerminationSec;
    }

    if (!$dara.isNull(request.minReplicaCount)) {
      body["min_replica_count"] = request.minReplicaCount;
    }

    if (!$dara.isNull(request.priorities)) {
      body["priorities"] = request.priorities;
    }

    if (!$dara.isNull(request.recycleNodeDeletionEnabled)) {
      body["recycle_node_deletion_enabled"] = request.recycleNodeDeletionEnabled;
    }

    if (!$dara.isNull(request.scaleDownEnabled)) {
      body["scale_down_enabled"] = request.scaleDownEnabled;
    }

    if (!$dara.isNull(request.scaleUpFromZero)) {
      body["scale_up_from_zero"] = request.scaleUpFromZero;
    }

    if (!$dara.isNull(request.scalerType)) {
      body["scaler_type"] = request.scalerType;
    }

    if (!$dara.isNull(request.scanInterval)) {
      body["scan_interval"] = request.scanInterval;
    }

    if (!$dara.isNull(request.skipNodesWithLocalStorage)) {
      body["skip_nodes_with_local_storage"] = request.skipNodesWithLocalStorage;
    }

    if (!$dara.isNull(request.skipNodesWithSystemPods)) {
      body["skip_nodes_with_system_pods"] = request.skipNodesWithSystemPods;
    }

    if (!$dara.isNull(request.unneededDuration)) {
      body["unneeded_duration"] = request.unneededDuration;
    }

    if (!$dara.isNull(request.utilizationThreshold)) {
      body["utilization_threshold"] = request.utilizationThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoscalingConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/cluster/${$dara.URL.percentEncode(ClusterId)}/autoscale/config/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoscalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoscalingConfigResponse({}));
  }

  /**
   * Creates a scaling configuration to allow the system to scale resources based on the given scaling rules. When you create a scaling configuration, you can specify the scaling metrics, thresholds, scaling order, and scaling interval.
   * 
   * @param request - CreateAutoscalingConfigRequest
   * @returns CreateAutoscalingConfigResponse
   */
  async createAutoscalingConfig(ClusterId: string, request: $_model.CreateAutoscalingConfigRequest): Promise<$_model.CreateAutoscalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutoscalingConfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Creates a Container Service for Kubernetes (ACK) cluster. For example, you can create an ACK managed cluster, ACK Serverless cluster, ACK Edge cluster, or registered cluster. When you create an ACK cluster, you need to configure the cluster information, components, and cloud resources used by ACK.
   * 
   * @remarks
   * ### [](#-openapi-)Generate API request parameters through the ACK console
   * When calling the CreateCluster operation to create a cluster, if the API call fails due to invalid parameter settings, you can generate valid request parameters through the ACK console. Follow these steps:
   * 1.  Log on to the [ACK console](https://csnew.console.aliyun.com). In the left-side navigation pane, click **Clusters**.
   * 2.  On the **Clusters** page, click **Cluster Templates**.
   * 3.  In the Select Cluster Template dialog box, select the type of cluster you want to create and click Create. Then, configure the cluster parameters.
   * 4.  In the **Confirm** step, click **Generate API Request Parameters**.
   *     The API request parameters are displayed in the API Request Parameters dialog box.
   * 
   * @param request - CreateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(request: $_model.CreateClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessControlList)) {
      body["access_control_list"] = request.accessControlList;
    }

    if (!$dara.isNull(request.addons)) {
      body["addons"] = request.addons;
    }

    if (!$dara.isNull(request.apiAudiences)) {
      body["api_audiences"] = request.apiAudiences;
    }

    if (!$dara.isNull(request.auditLogConfig)) {
      body["audit_log_config"] = request.auditLogConfig;
    }

    if (!$dara.isNull(request.autoMode)) {
      body["auto_mode"] = request.autoMode;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["auto_renew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["auto_renew_period"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["charge_type"] = request.chargeType;
    }

    if (!$dara.isNull(request.cisEnabled)) {
      body["cis_enabled"] = request.cisEnabled;
    }

    if (!$dara.isNull(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!$dara.isNull(request.clusterDomain)) {
      body["cluster_domain"] = request.clusterDomain;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      body["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      body["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.containerCidr)) {
      body["container_cidr"] = request.containerCidr;
    }

    if (!$dara.isNull(request.controlPlaneConfig)) {
      body["control_plane_config"] = request.controlPlaneConfig;
    }

    if (!$dara.isNull(request.controlplaneLogComponents)) {
      body["controlplane_log_components"] = request.controlplaneLogComponents;
    }

    if (!$dara.isNull(request.controlplaneLogProject)) {
      body["controlplane_log_project"] = request.controlplaneLogProject;
    }

    if (!$dara.isNull(request.controlplaneLogTtl)) {
      body["controlplane_log_ttl"] = request.controlplaneLogTtl;
    }

    if (!$dara.isNull(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!$dara.isNull(request.customSan)) {
      body["custom_san"] = request.customSan;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      body["deletion_protection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.disableRollback)) {
      body["disable_rollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.enableRrsa)) {
      body["enable_rrsa"] = request.enableRrsa;
    }

    if (!$dara.isNull(request.encryptionProviderKey)) {
      body["encryption_provider_key"] = request.encryptionProviderKey;
    }

    if (!$dara.isNull(request.endpointPublicAccess)) {
      body["endpoint_public_access"] = request.endpointPublicAccess;
    }

    if (!$dara.isNull(request.extraSans)) {
      body["extra_sans"] = request.extraSans;
    }

    if (!$dara.isNull(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!$dara.isNull(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!$dara.isNull(request.imageType)) {
      body["image_type"] = request.imageType;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    if (!$dara.isNull(request.ipStack)) {
      body["ip_stack"] = request.ipStack;
    }

    if (!$dara.isNull(request.isEnterpriseSecurityGroup)) {
      body["is_enterprise_security_group"] = request.isEnterpriseSecurityGroup;
    }

    if (!$dara.isNull(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!$dara.isNull(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!$dara.isNull(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      body["load_balancer_id"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerSpec)) {
      body["load_balancer_spec"] = request.loadBalancerSpec;
    }

    if (!$dara.isNull(request.loggingType)) {
      body["logging_type"] = request.loggingType;
    }

    if (!$dara.isNull(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!$dara.isNull(request.maintenanceWindow)) {
      body["maintenance_window"] = request.maintenanceWindow;
    }

    if (!$dara.isNull(request.masterAutoRenew)) {
      body["master_auto_renew"] = request.masterAutoRenew;
    }

    if (!$dara.isNull(request.masterAutoRenewPeriod)) {
      body["master_auto_renew_period"] = request.masterAutoRenewPeriod;
    }

    if (!$dara.isNull(request.masterCount)) {
      body["master_count"] = request.masterCount;
    }

    if (!$dara.isNull(request.masterInstanceChargeType)) {
      body["master_instance_charge_type"] = request.masterInstanceChargeType;
    }

    if (!$dara.isNull(request.masterInstanceTypes)) {
      body["master_instance_types"] = request.masterInstanceTypes;
    }

    if (!$dara.isNull(request.masterPeriod)) {
      body["master_period"] = request.masterPeriod;
    }

    if (!$dara.isNull(request.masterPeriodUnit)) {
      body["master_period_unit"] = request.masterPeriodUnit;
    }

    if (!$dara.isNull(request.masterSystemDiskCategory)) {
      body["master_system_disk_category"] = request.masterSystemDiskCategory;
    }

    if (!$dara.isNull(request.masterSystemDiskPerformanceLevel)) {
      body["master_system_disk_performance_level"] = request.masterSystemDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.masterSystemDiskSize)) {
      body["master_system_disk_size"] = request.masterSystemDiskSize;
    }

    if (!$dara.isNull(request.masterSystemDiskSnapshotPolicyId)) {
      body["master_system_disk_snapshot_policy_id"] = request.masterSystemDiskSnapshotPolicyId;
    }

    if (!$dara.isNull(request.masterVswitchIds)) {
      body["master_vswitch_ids"] = request.masterVswitchIds;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.natGateway)) {
      body["nat_gateway"] = request.natGateway;
    }

    if (!$dara.isNull(request.nodeCidrMask)) {
      body["node_cidr_mask"] = request.nodeCidrMask;
    }

    if (!$dara.isNull(request.nodeNameMode)) {
      body["node_name_mode"] = request.nodeNameMode;
    }

    if (!$dara.isNull(request.nodePortRange)) {
      body["node_port_range"] = request.nodePortRange;
    }

    if (!$dara.isNull(request.nodepools)) {
      body["nodepools"] = request.nodepools;
    }

    if (!$dara.isNull(request.numOfNodes)) {
      body["num_of_nodes"] = request.numOfNodes;
    }

    if (!$dara.isNull(request.operationPolicy)) {
      body["operation_policy"] = request.operationPolicy;
    }

    if (!$dara.isNull(request.osType)) {
      body["os_type"] = request.osType;
    }

    if (!$dara.isNull(request.period)) {
      body["period"] = request.period;
    }

    if (!$dara.isNull(request.periodUnit)) {
      body["period_unit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!$dara.isNull(request.podVswitchIds)) {
      body["pod_vswitch_ids"] = request.podVswitchIds;
    }

    if (!$dara.isNull(request.profile)) {
      body["profile"] = request.profile;
    }

    if (!$dara.isNull(request.proxyMode)) {
      body["proxy_mode"] = request.proxyMode;
    }

    if (!$dara.isNull(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!$dara.isNull(request.regionId)) {
      body["region_id"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.rrsaConfig)) {
      body["rrsa_config"] = request.rrsaConfig;
    }

    if (!$dara.isNull(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["security_group_id"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.securityHardeningOs)) {
      body["security_hardening_os"] = request.securityHardeningOs;
    }

    if (!$dara.isNull(request.serviceAccountIssuer)) {
      body["service_account_issuer"] = request.serviceAccountIssuer;
    }

    if (!$dara.isNull(request.serviceCidr)) {
      body["service_cidr"] = request.serviceCidr;
    }

    if (!$dara.isNull(request.serviceDiscoveryTypes)) {
      body["service_discovery_types"] = request.serviceDiscoveryTypes;
    }

    if (!$dara.isNull(request.snatEntry)) {
      body["snat_entry"] = request.snatEntry;
    }

    if (!$dara.isNull(request.socEnabled)) {
      body["soc_enabled"] = request.socEnabled;
    }

    if (!$dara.isNull(request.sshFlags)) {
      body["ssh_flags"] = request.sshFlags;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!$dara.isNull(request.timeoutMins)) {
      body["timeout_mins"] = request.timeoutMins;
    }

    if (!$dara.isNull(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.userCa)) {
      body["user_ca"] = request.userCa;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.vpcid)) {
      body["vpcid"] = request.vpcid;
    }

    if (!$dara.isNull(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!$dara.isNull(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!$dara.isNull(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!$dara.isNull(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!$dara.isNull(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!$dara.isNull(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!$dara.isNull(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!$dara.isNull(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!$dara.isNull(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!$dara.isNull(request.workerSystemDiskPerformanceLevel)) {
      body["worker_system_disk_performance_level"] = request.workerSystemDiskPerformanceLevel;
    }

    if (!$dara.isNull(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    if (!$dara.isNull(request.workerSystemDiskSnapshotPolicyId)) {
      body["worker_system_disk_snapshot_policy_id"] = request.workerSystemDiskSnapshotPolicyId;
    }

    if (!$dara.isNull(request.workerVswitchIds)) {
      body["worker_vswitch_ids"] = request.workerVswitchIds;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["zone_id"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneIds)) {
      body["zone_ids"] = request.zoneIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a Container Service for Kubernetes (ACK) cluster. For example, you can create an ACK managed cluster, ACK Serverless cluster, ACK Edge cluster, or registered cluster. When you create an ACK cluster, you need to configure the cluster information, components, and cloud resources used by ACK.
   * 
   * @remarks
   * ### [](#-openapi-)Generate API request parameters through the ACK console
   * When calling the CreateCluster operation to create a cluster, if the API call fails due to invalid parameter settings, you can generate valid request parameters through the ACK console. Follow these steps:
   * 1.  Log on to the [ACK console](https://csnew.console.aliyun.com). In the left-side navigation pane, click **Clusters**.
   * 2.  On the **Clusters** page, click **Cluster Templates**.
   * 3.  In the Select Cluster Template dialog box, select the type of cluster you want to create and click Create. Then, configure the cluster parameters.
   * 4.  In the **Confirm** step, click **Generate API Request Parameters**.
   *     The API request parameters are displayed in the API Request Parameters dialog box.
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(request, headers, runtime);
  }

  /**
   * Starts a cluster diagnostic.
   * 
   * @param request - CreateClusterDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterDiagnosisResponse
   */
  async createClusterDiagnosisWithOptions(clusterId: string, request: $_model.CreateClusterDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.target)) {
      body["target"] = request.target;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClusterDiagnosis",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterDiagnosisResponse({}));
  }

  /**
   * Starts a cluster diagnostic.
   * 
   * @param request - CreateClusterDiagnosisRequest
   * @returns CreateClusterDiagnosisResponse
   */
  async createClusterDiagnosis(clusterId: string, request: $_model.CreateClusterDiagnosisRequest): Promise<$_model.CreateClusterDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterDiagnosisWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Configures cluster inspection.
   * 
   * @param request - CreateClusterInspectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterInspectConfigResponse
   */
  async createClusterInspectConfigWithOptions(clusterId: string, request: $_model.CreateClusterInspectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterInspectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disabledCheckItems)) {
      body["disabledCheckItems"] = request.disabledCheckItems;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.recurrence)) {
      body["recurrence"] = request.recurrence;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClusterInspectConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterInspectConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterInspectConfigResponse({}));
  }

  /**
   * Configures cluster inspection.
   * 
   * @param request - CreateClusterInspectConfigRequest
   * @returns CreateClusterInspectConfigResponse
   */
  async createClusterInspectConfig(clusterId: string, request: $_model.CreateClusterInspectConfigRequest): Promise<$_model.CreateClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterInspectConfigWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\\\\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\\\\\&M workload.
   * 
   * @param request - CreateClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePoolWithOptions(ClusterId: string, request: $_model.CreateClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterNodePoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoMode)) {
      body["auto_mode"] = request.autoMode;
    }

    if (!$dara.isNull(request.autoScaling)) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    if (!$dara.isNull(request.efloNodeGroup)) {
      body["eflo_node_group"] = request.efloNodeGroup;
    }

    if (!$dara.isNull(request.hostNetwork)) {
      body["host_network"] = request.hostNetwork;
    }

    if (!$dara.isNull(request.interconnectConfig)) {
      body["interconnect_config"] = request.interconnectConfig;
    }

    if (!$dara.isNull(request.interconnectMode)) {
      body["interconnect_mode"] = request.interconnectMode;
    }

    if (!$dara.isNull(request.intranet)) {
      body["intranet"] = request.intranet;
    }

    if (!$dara.isNull(request.kubernetesConfig)) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!$dara.isNull(request.management)) {
      body["management"] = request.management;
    }

    if (!$dara.isNull(request.maxNodes)) {
      body["max_nodes"] = request.maxNodes;
    }

    if (!$dara.isNull(request.nodeConfig)) {
      body["node_config"] = request.nodeConfig;
    }

    if (!$dara.isNull(request.nodepoolInfo)) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!$dara.isNull(request.scalingGroup)) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!$dara.isNull(request.teeConfig)) {
      body["tee_config"] = request.teeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterNodePoolResponse({}));
  }

  /**
   * Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\\\\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\\\\\&M workload.
   * 
   * @param request - CreateClusterNodePoolRequest
   * @returns CreateClusterNodePoolResponse
   */
  async createClusterNodePool(ClusterId: string, request: $_model.CreateClusterNodePoolRequest): Promise<$_model.CreateClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterNodePoolWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the CreateEdgeMachine operation to activate a cloud-native box.
   * 
   * @param request - CreateEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEdgeMachineResponse
   */
  async createEdgeMachineWithOptions(request: $_model.CreateEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEdgeMachineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hostname)) {
      body["hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.model)) {
      body["model"] = request.model;
    }

    if (!$dara.isNull(request.sn)) {
      body["sn"] = request.sn;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEdgeMachineResponse>(await this.callApi(params, req, runtime), new $_model.CreateEdgeMachineResponse({}));
  }

  /**
   * You can call the CreateEdgeMachine operation to activate a cloud-native box.
   * 
   * @param request - CreateEdgeMachineRequest
   * @returns CreateEdgeMachineResponse
   */
  async createEdgeMachine(request: $_model.CreateEdgeMachineRequest): Promise<$_model.CreateEdgeMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEdgeMachineWithOptions(request, headers, runtime);
  }

  /**
   * You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   * 
   * @deprecated OpenAPI CreateKubernetesTrigger is deprecated
   * 
   * @param request - CreateKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKubernetesTriggerResponse
   */
  // Deprecated
  async createKubernetesTriggerWithOptions(request: $_model.CreateKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKubernetesTriggerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["project_id"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new $_model.CreateKubernetesTriggerResponse({}));
  }

  /**
   * You can call the CreateKubernetesTrigger operation to create a trigger for an application.
   * 
   * @deprecated OpenAPI CreateKubernetesTrigger is deprecated
   * 
   * @param request - CreateKubernetesTriggerRequest
   * @returns CreateKubernetesTriggerResponse
   */
  // Deprecated
  async createKubernetesTrigger(request: $_model.CreateKubernetesTriggerRequest): Promise<$_model.CreateKubernetesTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKubernetesTriggerWithOptions(request, headers, runtime);
  }

  /**
   * Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   * 
   * @param request - CreateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(request: $_model.CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    if (!$dara.isNull(request.templateType)) {
      body["template_type"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * Creates an orchestration template. An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can use orchestration templates to manage resources in Kubernetes clusters and automate resource deployment, such as pods, Services, Deployments, ConfigMaps, and persistent volumes (PVs).
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Creates a trigger for an application to redeploy the application pods when specific conditions are met.
   * 
   * @param request - CreateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTriggerResponse
   */
  async createTriggerWithOptions(clusterId: string, request: $_model.CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTriggerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["project_id"] = request.projectId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTriggerResponse>(await this.callApi(params, req, runtime), new $_model.CreateTriggerResponse({}));
  }

  /**
   * Creates a trigger for an application to redeploy the application pods when specific conditions are met.
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(clusterId: string, request: $_model.CreateTriggerRequest): Promise<$_model.CreateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Deletes one or more ACK alert contacts.
   * 
   * @param tmpReq - DeleteAlertContactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContactWithOptions(tmpReq: $_model.DeleteAlertContactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAlertContactShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactIds)) {
      request.contactIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactIds, "contact_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactIdsShrink)) {
      query["contact_ids"] = request.contactIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContact",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/contacts`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactResponse({}));
  }

  /**
   * Deletes one or more ACK alert contacts.
   * 
   * @param request - DeleteAlertContactRequest
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContact(request: $_model.DeleteAlertContactRequest): Promise<$_model.DeleteAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an ACK alert contact group.
   * 
   * @param tmpReq - DeleteAlertContactGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroupWithOptions(tmpReq: $_model.DeleteAlertContactGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactGroupResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAlertContactGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contactGroupIds)) {
      request.contactGroupIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contactGroupIds, "contact_group_ids", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactGroupIdsShrink)) {
      query["contact_group_ids"] = request.contactGroupIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContactGroup",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/contact_groups`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactGroupResponse({}));
  }

  /**
   * Deletes an ACK alert contact group.
   * 
   * @param request - DeleteAlertContactGroupRequest
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroup(request: $_model.DeleteAlertContactGroupRequest): Promise<$_model.DeleteAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlertContactGroupWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DeleteCluster operation to delete a cluster and specify whether to delete or retain the relevant cluster resources. Before you delete a cluster, you must manually delete workloads in the cluster, such as Deployments, StatefulSets, Jobs, and CronJobs. Otherwise, you may fail to delete the cluster.
   * 
   * @remarks
   * Warning:
   * *   Subscription ECS instances and Lingjun nodes in a cluster cannot be automatically released. To avoid unnecessary costs, we recommend that you manually release the resources. For more information, see \\<a href="{0}" target="_blank">Rules for deleting clusters and releasing nodes\\</a>.
   * *   If the SLB instance of the API server uses the subscription billing method, it cannot be automatically released. To avoid unnecessary costs, we recommend that you manually release it.
   * *   By default, virtual private clouds (VPCs), vSwitches, security groups, and RAM roles are retained if they are used by other resources. To avoid unnecessary costs, we recommend that you manually release the resources.
   * *   Elastic container instances created on virtual nodes are automatically released.
   * *   Some resources created together with a cluster are not automatically released when the cluster is deleted. After the cluster is deleted, you are still charged for the resources. Release or retain the resources based on your actual needs. The resources include Simple Log Service projects automatically created by the cluster and dynamically provisioned disks.
   * 
   * @param tmpReq - DeleteClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(ClusterId: string, tmpReq: $_model.DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteOptions)) {
      request.deleteOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteOptions, "delete_options", "json");
    }

    if (!$dara.isNull(tmpReq.retainResources)) {
      request.retainResourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.retainResources, "retain_resources", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteOptionsShrink)) {
      query["delete_options"] = request.deleteOptionsShrink;
    }

    if (!$dara.isNull(request.keepSlb)) {
      query["keep_slb"] = request.keepSlb;
    }

    if (!$dara.isNull(request.retainAllResources)) {
      query["retain_all_resources"] = request.retainAllResources;
    }

    if (!$dara.isNull(request.retainResourcesShrink)) {
      query["retain_resources"] = request.retainResourcesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * You can call the DeleteCluster operation to delete a cluster and specify whether to delete or retain the relevant cluster resources. Before you delete a cluster, you must manually delete workloads in the cluster, such as Deployments, StatefulSets, Jobs, and CronJobs. Otherwise, you may fail to delete the cluster.
   * 
   * @remarks
   * Warning:
   * *   Subscription ECS instances and Lingjun nodes in a cluster cannot be automatically released. To avoid unnecessary costs, we recommend that you manually release the resources. For more information, see \\<a href="{0}" target="_blank">Rules for deleting clusters and releasing nodes\\</a>.
   * *   If the SLB instance of the API server uses the subscription billing method, it cannot be automatically released. To avoid unnecessary costs, we recommend that you manually release it.
   * *   By default, virtual private clouds (VPCs), vSwitches, security groups, and RAM roles are retained if they are used by other resources. To avoid unnecessary costs, we recommend that you manually release the resources.
   * *   Elastic container instances created on virtual nodes are automatically released.
   * *   Some resources created together with a cluster are not automatically released when the cluster is deleted. After the cluster is deleted, you are still charged for the resources. Release or retain the resources based on your actual needs. The resources include Simple Log Service projects automatically created by the cluster and dynamically provisioned disks.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(ClusterId: string, request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Deletes cluster inspection configurations.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterInspectConfigResponse
   */
  async deleteClusterInspectConfigWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterInspectConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterInspectConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectConfig`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterInspectConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterInspectConfigResponse({}));
  }

  /**
   * Deletes cluster inspection configurations.
   * @returns DeleteClusterInspectConfigResponse
   */
  async deleteClusterInspectConfig(clusterId: string): Promise<$_model.DeleteClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterInspectConfigWithOptions(clusterId, headers, runtime);
  }

  /**
   * null
   * 
   * @param request - DeleteClusterNodepoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodepoolResponse
   */
  async deleteClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.DeleteClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterNodepoolResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterNodepool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterNodepoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterNodepoolResponse({}));
  }

  /**
   * null
   * 
   * @param request - DeleteClusterNodepoolRequest
   * @returns DeleteClusterNodepoolResponse
   */
  async deleteClusterNodepool(ClusterId: string, NodepoolId: string, request: $_model.DeleteClusterNodepoolRequest): Promise<$_model.DeleteClusterNodepoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Removes nodes from a Container Service for Kubernetes (ACK) cluster when they are no longer required through the DeleteClusterNodes interface. When removing nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes.
   * 
   * @remarks
   *   Use this API or the [ACK console](https://cs.console.aliyun.com) for node removal. Do not remove a node by running the `kubectl delete node` command.
   * *   Never directly release or remove ECS instances through the ECS or Auto Scaling console/APIs. Renew subscription ECS instances before they expire. Violations may cause node termination and removal from the ACK console.
   * *   If a node pool has the Expected Nodes parameter configured, the node pool automatically scales other ECS instances to maintain the expected number of nodes.
   * *   When you remove a node, the pods on the node are migrated to other nodes. To prevent service interruptions, remove nodes during off-peak hours. Unexpected risks may arise during node removal. Back up the data in advance.
   * *   ACK drains the node during node removal. Make sure that other nodes in the cluster have sufficient resources to host the evicted pods.
   * *   To ensure the pods on the node you want to remove can be successfully scheduled to other nodes, check whether the node affinity rules and scheduling policies of the pods meet the requirements.
   * 
   * @param request - DeleteClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodesWithOptions(ClusterId: string, request: $_model.DeleteClusterNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.drainNode)) {
      body["drain_node"] = request.drainNode;
    }

    if (!$dara.isNull(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.releaseNode)) {
      body["release_node"] = request.releaseNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterNodesResponse({}));
  }

  /**
   * Removes nodes from a Container Service for Kubernetes (ACK) cluster when they are no longer required through the DeleteClusterNodes interface. When removing nodes, you can specify whether to release the Elastic Compute Service (ECS) instances and drain the nodes.
   * 
   * @remarks
   *   Use this API or the [ACK console](https://cs.console.aliyun.com) for node removal. Do not remove a node by running the `kubectl delete node` command.
   * *   Never directly release or remove ECS instances through the ECS or Auto Scaling console/APIs. Renew subscription ECS instances before they expire. Violations may cause node termination and removal from the ACK console.
   * *   If a node pool has the Expected Nodes parameter configured, the node pool automatically scales other ECS instances to maintain the expected number of nodes.
   * *   When you remove a node, the pods on the node are migrated to other nodes. To prevent service interruptions, remove nodes during off-peak hours. Unexpected risks may arise during node removal. Back up the data in advance.
   * *   ACK drains the node during node removal. Make sure that other nodes in the cluster have sufficient resources to host the evicted pods.
   * *   To ensure the pods on the node you want to remove can be successfully scheduled to other nodes, check whether the node affinity rules and scheduling policies of the pods meet the requirements.
   * 
   * @param request - DeleteClusterNodesRequest
   * @returns DeleteClusterNodesResponse
   */
  async deleteClusterNodes(ClusterId: string, request: $_model.DeleteClusterNodesRequest): Promise<$_model.DeleteClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   * 
   * @param request - DeleteEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEdgeMachineResponse
   */
  async deleteEdgeMachineWithOptions(edgeMachineid: string, request: $_model.DeleteEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEdgeMachineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteEdgeMachineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEdgeMachineResponse({}));
  }

  /**
   * You can call the DeleteEdgeMachine operation to delete a cloud-native box.
   * 
   * @param request - DeleteEdgeMachineRequest
   * @returns DeleteEdgeMachineResponse
   */
  async deleteEdgeMachine(edgeMachineid: string, request: $_model.DeleteEdgeMachineRequest): Promise<$_model.DeleteEdgeMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEdgeMachineWithOptions(edgeMachineid, request, headers, runtime);
  }

  /**
   * You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   * 
   * @deprecated OpenAPI DeleteKubernetesTrigger is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKubernetesTriggerResponse
   */
  // Deprecated
  async deleteKubernetesTriggerWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKubernetesTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers/revoke/${$dara.URL.percentEncode(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKubernetesTriggerResponse({}));
  }

  /**
   * You can call the DeleteKubernetesTrigger operation to delete an application trigger by trigger ID
   * 
   * @deprecated OpenAPI DeleteKubernetesTrigger is deprecated
   * @returns DeleteKubernetesTriggerResponse
   */
  // Deprecated
  async deleteKubernetesTrigger(Id: string): Promise<$_model.DeleteKubernetesTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKubernetesTriggerWithOptions(Id, headers, runtime);
  }

  /**
   * Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeletePolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePolicyInstanceResponse
   */
  async deletePolicyInstanceWithOptions(clusterId: string, policyName: string, request: $_model.DeletePolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePolicyInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policies/${$dara.URL.percentEncode(policyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePolicyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeletePolicyInstanceResponse({}));
  }

  /**
   * Deletes policy instances in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeletePolicyInstanceRequest
   * @returns DeletePolicyInstanceResponse
   */
  async deletePolicyInstance(clusterId: string, policyName: string, request: $_model.DeletePolicyInstanceRequest): Promise<$_model.DeletePolicyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * Deletes the orchestration templates that you no longer need.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(TemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Deletes the orchestration templates that you no longer need.
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(TemplateId: string): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TemplateId, headers, runtime);
  }

  /**
   * Deletes an application trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTriggerResponse
   */
  async deleteTriggerWithOptions(clusterId: string, Id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/triggers/${$dara.URL.percentEncode(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTriggerResponse({}));
  }

  /**
   * Deletes an application trigger.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(clusterId: string, Id: string): Promise<$_model.DeleteTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(clusterId, Id, headers, runtime);
  }

  /**
   * Deploys a policy in the specified namespaces of a specific Container Service for Kubernetes (ACK) cluster. You can create and deploy a security policy by specifying the policy type, action of the policy such as alerting or denying, and namespaces to which the policy applies.
   * 
   * @param request - DeployPolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployPolicyInstanceResponse
   */
  async deployPolicyInstanceWithOptions(clusterId: string, policyName: string, request: $_model.DeployPolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployPolicyInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.namespaces)) {
      body["namespaces"] = request.namespaces;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployPolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policies/${$dara.URL.percentEncode(policyName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployPolicyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeployPolicyInstanceResponse({}));
  }

  /**
   * Deploys a policy in the specified namespaces of a specific Container Service for Kubernetes (ACK) cluster. You can create and deploy a security policy by specifying the policy type, action of the policy such as alerting or denying, and namespaces to which the policy applies.
   * 
   * @param request - DeployPolicyInstanceRequest
   * @returns DeployPolicyInstanceResponse
   */
  async deployPolicyInstance(clusterId: string, policyName: string, request: $_model.DeployPolicyInstanceRequest): Promise<$_model.DeployPolicyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * Queries the information about a component based on specific conditions such as the region, cluster type, cluster subtype defined by cluster profile, cluster version, and component name. The information includes whether the component is managed, the component type, supported custom parameter schema, compatible operating system architecture, and earliest supported cluster version.
   * 
   * @param request - DescribeAddonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonResponse
   */
  async describeAddonWithOptions(addonName: string, request: $_model.DescribeAddonRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!$dara.isNull(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!$dara.isNull(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddon",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/addons/${$dara.URL.percentEncode(addonName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonResponse({}));
  }

  /**
   * Queries the information about a component based on specific conditions such as the region, cluster type, cluster subtype defined by cluster profile, cluster version, and component name. The information includes whether the component is managed, the component type, supported custom parameter schema, compatible operating system architecture, and earliest supported cluster version.
   * 
   * @param request - DescribeAddonRequest
   * @returns DescribeAddonResponse
   */
  async describeAddon(addonName: string, request: $_model.DescribeAddonRequest): Promise<$_model.DescribeAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonWithOptions(addonName, request, headers, runtime);
  }

  /**
   * You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   * 
   * @deprecated OpenAPI DescribeAddons is deprecated
   * 
   * @param request - DescribeAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonsResponse
   */
  // Deprecated
  async describeAddonsWithOptions(request: $_model.DescribeAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterProfile)) {
      query["cluster_profile"] = request.clusterProfile;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/components/metadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonsResponse({}));
  }

  /**
   * You can call the DescribeAddons operation to query the details about all components that are supported by Container Service for Kubernetes (ACK).
   * 
   * @deprecated OpenAPI DescribeAddons is deprecated
   * 
   * @param request - DescribeAddonsRequest
   * @returns DescribeAddonsResponse
   */
  // Deprecated
  async describeAddons(request: $_model.DescribeAddonsRequest): Promise<$_model.DescribeAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAddonsWithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonInstanceResponse
   */
  // Deprecated
  async describeClusterAddonInstanceWithOptions(ClusterID: string, AddonName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAddonInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAddonInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterID)}/components/${$dara.URL.percentEncode(AddonName)}/instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAddonInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAddonInstanceResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonInstance operation to query the information about a cluster component, including the version, status, and configuration of the component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   * @returns DescribeClusterAddonInstanceResponse
   */
  // Deprecated
  async describeClusterAddonInstance(ClusterID: string, AddonName: string): Promise<$_model.DescribeClusterAddonInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonInstanceWithOptions(ClusterID, AddonName, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   * 
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   * 
   * @param request - DescribeClusterAddonMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonMetadataResponse
   */
  // Deprecated
  async describeClusterAddonMetadataWithOptions(clusterId: string, componentId: string, request: $_model.DescribeClusterAddonMetadataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAddonMetadataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAddonMetadata",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/components/${$dara.URL.percentEncode(componentId)}/metadata`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAddonMetadataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAddonMetadataResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonMetadata operation to query the metadata of a component version. The metadata includes the component version and available parameters.
   * 
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   * 
   * @param request - DescribeClusterAddonMetadataRequest
   * @returns DescribeClusterAddonMetadataResponse
   */
  // Deprecated
  async describeClusterAddonMetadata(clusterId: string, componentId: string, request: $_model.DescribeClusterAddonMetadataRequest): Promise<$_model.DescribeClusterAddonMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonMetadataWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonUpgradeStatusWithOptions(ClusterId: string, ComponentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAddonUpgradeStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAddonUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/${$dara.URL.percentEncode(ComponentId)}/upgradestatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAddonUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAddonUpgradeStatusResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonUpgradeStatus operation to query the update progress of a cluster component.
   * 
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   * @returns DescribeClusterAddonUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonUpgradeStatus(ClusterId: string, ComponentId: string): Promise<$_model.DescribeClusterAddonUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonUpgradeStatusWithOptions(ClusterId, ComponentId, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   * 
   * @param tmpReq - DescribeClusterAddonsUpgradeStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonsUpgradeStatusWithOptions(ClusterId: string, tmpReq: $_model.DescribeClusterAddonsUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAddonsUpgradeStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeClusterAddonsUpgradeStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.componentIds)) {
      request.componentIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.componentIds, "componentIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentIdsShrink)) {
      query["componentIds"] = request.componentIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAddonsUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/upgradestatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAddonsUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAddonsUpgradeStatusResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonsUpgradeStatus operation to query the update progress of a component by component name.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   * 
   * @param request - DescribeClusterAddonsUpgradeStatusRequest
   * @returns DescribeClusterAddonsUpgradeStatusResponse
   */
  // Deprecated
  async describeClusterAddonsUpgradeStatus(ClusterId: string, request: $_model.DescribeClusterAddonsUpgradeStatusRequest): Promise<$_model.DescribeClusterAddonsUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsUpgradeStatusWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsVersionResponse
   */
  // Deprecated
  async describeClusterAddonsVersionWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAddonsVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAddonsVersion",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAddonsVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAddonsVersionResponse({}));
  }

  /**
   * You can call the DescribeClusterAddonsVersion operation to query the details about all components in a cluster by cluster ID.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   * @returns DescribeClusterAddonsVersionResponse
   */
  // Deprecated
  async describeClusterAddonsVersion(ClusterId: string): Promise<$_model.DescribeClusterAddonsVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAddonsVersionWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Queries the scripts used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. ACK allows you to manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add worker nodes that you remove from the cluster to a node pool.
   * 
   * @param request - DescribeClusterAttachScriptsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAttachScriptsResponse
   */
  async describeClusterAttachScriptsWithOptions(ClusterId: string, request: $_model.DescribeClusterAttachScriptsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAttachScriptsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.arch)) {
      body["arch"] = request.arch;
    }

    if (!$dara.isNull(request.expired)) {
      body["expired"] = request.expired;
    }

    if (!$dara.isNull(request.formatDisk)) {
      body["format_disk"] = request.formatDisk;
    }

    if (!$dara.isNull(request.keepInstanceName)) {
      body["keep_instance_name"] = request.keepInstanceName;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAttachScripts",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/attachscript`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.DescribeClusterAttachScriptsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAttachScriptsResponse({}));
  }

  /**
   * Queries the scripts used to add existing nodes to a Container Service for Kubernetes (ACK) cluster. ACK allows you to manually add existing Elastic Compute Service (ECS) instances to an ACK cluster as worker nodes or re-add worker nodes that you remove from the cluster to a node pool.
   * 
   * @param request - DescribeClusterAttachScriptsRequest
   * @returns DescribeClusterAttachScriptsResponse
   */
  async describeClusterAttachScripts(ClusterId: string, request: $_model.DescribeClusterAttachScriptsRequest): Promise<$_model.DescribeClusterAttachScriptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterAttachScriptsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetailWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterDetailResponse({}));
  }

  /**
   * You can call the DescribeClusterDetail operation to query the details of a Container Service for Kubernetes (ACK) cluster by cluster ID.
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetail(ClusterId: string): Promise<$_model.DescribeClusterDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeClusterEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterEventsResponse
   */
  async describeClusterEventsWithOptions(ClusterId: string, request: $_model.DescribeClusterEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterEvents",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterEventsResponse({}));
  }

  /**
   * Queries events and event details in a Container Service for Kubernetes (ACK) cluster, including the severity level, status, and start time of each event. Events are generated when clusters created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeClusterEventsRequest
   * @returns DescribeClusterEventsResponse
   */
  async describeClusterEvents(ClusterId: string, request: $_model.DescribeClusterEventsRequest): Promise<$_model.DescribeClusterEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterEventsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the cluster log to help analyze cluster issues and locate the cause.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterLogsResponse
   */
  async describeClusterLogsWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterLogsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterLogs",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeClusterLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterLogsResponse({}));
  }

  /**
   * Queries the cluster log to help analyze cluster issues and locate the cause.
   * @returns DescribeClusterLogsResponse
   */
  async describeClusterLogs(ClusterId: string): Promise<$_model.DescribeClusterLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetailWithOptions(ClusterId: string, NodepoolId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNodePoolDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterNodePoolDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNodePoolDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNodePoolDetailResponse({}));
  }

  /**
   * You can call the DescribeClusterNodePoolDetail.html operation to query the details about a node pool in a cluster by node pool ID.
   * @returns DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetail(ClusterId: string, NodepoolId: string): Promise<$_model.DescribeClusterNodePoolDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolDetailWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

  /**
   * Queries the information about all node pools in a cluster.
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePoolsWithOptions(ClusterId: string, request: $_model.DescribeClusterNodePoolsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNodePoolsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodepoolName)) {
      query["NodepoolName"] = request.nodepoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterNodePools",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNodePoolsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNodePoolsResponse({}));
  }

  /**
   * Queries the information about all node pools in a cluster.
   * 
   * @param request - DescribeClusterNodePoolsRequest
   * @returns DescribeClusterNodePoolsResponse
   */
  async describeClusterNodePools(ClusterId: string, request: $_model.DescribeClusterNodePoolsRequest): Promise<$_model.DescribeClusterNodePoolsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * null
   * 
   * @param request - DescribeClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodesWithOptions(ClusterId: string, request: $_model.DescribeClusterNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["instanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      query["nodepool_id"] = request.nodepoolId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNodesResponse({}));
  }

  /**
   * null
   * 
   * @param request - DescribeClusterNodesRequest
   * @returns DescribeClusterNodesResponse
   */
  async describeClusterNodes(ClusterId: string, request: $_model.DescribeClusterNodesRequest): Promise<$_model.DescribeClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourcesResponse
   */
  async describeClusterResourcesWithOptions(ClusterId: string, request: $_model.DescribeClusterResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.withAddonResources)) {
      query["with_addon_resources"] = request.withAddonResources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeClusterResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterResourcesResponse({}));
  }

  /**
   * You can call the DescribeClusterResources operation to query all resources in a cluster by cluster ID.
   * 
   * @param request - DescribeClusterResourcesRequest
   * @returns DescribeClusterResourcesResponse
   */
  async describeClusterResources(ClusterId: string, request: $_model.DescribeClusterResourcesRequest): Promise<$_model.DescribeClusterResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterResourcesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterTasksResponse
   */
  async describeClusterTasksWithOptions(clusterId: string, request: $_model.DescribeClusterTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterTasks",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterTasksResponse({}));
  }

  /**
   * Queries tasks in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DescribeClusterTasksRequest
   * @returns DescribeClusterTasksResponse
   */
  async describeClusterTasks(clusterId: string, request: $_model.DescribeClusterTasksRequest): Promise<$_model.DescribeClusterTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterTasksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @remarks
   *   The default validity period of a kubeconfig file is 3 years. 180 days before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the kubeconfig file is valid for 3 years. The previous kubeconfig file still remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   * *   We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfigWithOptions(ClusterId: string, request: $_model.DescribeClusterUserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterUserKubeconfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterUserKubeconfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${$dara.URL.percentEncode(ClusterId)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterUserKubeconfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterUserKubeconfigResponse({}));
  }

  /**
   * Kubeconfig files store identity and authentication information that is used by clients to access Container Service for Kubernetes (ACK) clusters. To use a kubectl client to manage an ACK cluster, you need to use the corresponding kubeconfig file to connect to the ACK cluster. We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @remarks
   *   The default validity period of a kubeconfig file is 3 years. 180 days before a kubeconfig file expires, you can renew it in the Container Service for Kubernetes (ACK) console or by calling API operations. After a kubeconfig file is renewed, the kubeconfig file is valid for 3 years. The previous kubeconfig file still remains valid until expiration. We recommend that you renew your kubeconfig file at the earliest opportunity.
   * *   We recommend that you keep kubeconfig files confidential and revoke kubeconfig files that are not in use. This helps prevent data leaks caused by the disclosure of kubeconfig files.
   * 
   * @param request - DescribeClusterUserKubeconfigRequest
   * @returns DescribeClusterUserKubeconfigResponse
   */
  async describeClusterUserKubeconfig(ClusterId: string, request: $_model.DescribeClusterUserKubeconfigRequest): Promise<$_model.DescribeClusterUserKubeconfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterUserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * 获取集群kubeconfig接口
   * 
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   * 
   * @param request - DescribeClusterV2UserKubeconfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterV2UserKubeconfigResponse
   */
  // Deprecated
  async describeClusterV2UserKubeconfigWithOptions(ClusterId: string, request: $_model.DescribeClusterV2UserKubeconfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterV2UserKubeconfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterV2UserKubeconfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/k8s/${$dara.URL.percentEncode(ClusterId)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterV2UserKubeconfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterV2UserKubeconfigResponse({}));
  }

  /**
   * 获取集群kubeconfig接口
   * 
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   * 
   * @param request - DescribeClusterV2UserKubeconfigRequest
   * @returns DescribeClusterV2UserKubeconfigResponse
   */
  // Deprecated
  async describeClusterV2UserKubeconfig(ClusterId: string, request: $_model.DescribeClusterV2UserKubeconfigRequest): Promise<$_model.DescribeClusterV2UserKubeconfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterV2UserKubeconfigWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the security vulnerability details of a cluster by cluster ID. The details include vulnerability name, vulnerability type, and vulnerability severity. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterVulsResponse
   */
  async describeClusterVulsWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterVulsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/vuls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterVulsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterVulsResponse({}));
  }

  /**
   * Queries the security vulnerability details of a cluster by cluster ID. The details include vulnerability name, vulnerability type, and vulnerability severity. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * @returns DescribeClusterVulsResponse
   */
  async describeClusterVuls(clusterId: string): Promise<$_model.DescribeClusterVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   * 
   * @deprecated OpenAPI DescribeClusters is deprecated
   * 
   * @param request - DescribeClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersResponse
   */
  // Deprecated
  async describeClustersWithOptions(request: $_model.DescribeClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterType)) {
      query["clusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resource_group_id"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusters",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClustersResponse({}));
  }

  /**
   * Queries all the clusters that belong to the current Alibaba Cloud account, including Kubernetes clusters and Swarm clusters.
   * 
   * @deprecated OpenAPI DescribeClusters is deprecated
   * 
   * @param request - DescribeClustersRequest
   * @returns DescribeClustersResponse
   */
  // Deprecated
  async describeClusters(request: $_model.DescribeClustersRequest): Promise<$_model.DescribeClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersWithOptions(request, headers, runtime);
  }

  /**
   * Queries all clusters in a specified region.
   * 
   * @param request - DescribeClustersForRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersForRegionResponse
   */
  async describeClustersForRegionWithOptions(regionId: string, request: $_model.DescribeClustersForRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClustersForRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.profile)) {
      query["profile"] = request.profile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClustersForRegion",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/regions/${$dara.URL.percentEncode(regionId)}/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClustersForRegionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClustersForRegionResponse({}));
  }

  /**
   * Queries all clusters in a specified region.
   * 
   * @param request - DescribeClustersForRegionRequest
   * @returns DescribeClustersForRegionResponse
   */
  async describeClustersForRegion(regionId: string, request: $_model.DescribeClustersForRegionRequest): Promise<$_model.DescribeClustersForRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersForRegionWithOptions(regionId, request, headers, runtime);
  }

  /**
   * Queries the details about Container Service for Kubernetes (ACK) clusters of specified types or specifications within an account.
   * 
   * @param request - DescribeClustersV1Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1WithOptions(request: $_model.DescribeClustersV1Request, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClustersV1Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!$dara.isNull(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClustersV1",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v1/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClustersV1Response>(await this.callApi(params, req, runtime), new $_model.DescribeClustersV1Response({}));
  }

  /**
   * Queries the details about Container Service for Kubernetes (ACK) clusters of specified types or specifications within an account.
   * 
   * @param request - DescribeClustersV1Request
   * @returns DescribeClustersV1Response
   */
  async describeClustersV1(request: $_model.DescribeClustersV1Request): Promise<$_model.DescribeClustersV1Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClustersV1WithOptions(request, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   * 
   * @deprecated OpenAPI DescribeEdgeMachineActiveProcess is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineActiveProcessResponse
   */
  // Deprecated
  async describeEdgeMachineActiveProcessWithOptions(edgeMachineid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeMachineActiveProcessResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeMachineActiveProcess",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D/activeprocess`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeMachineActiveProcessResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeMachineActiveProcessResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineActiveProcess operation to query the activation progress of a cloud-native box.
   * 
   * @deprecated OpenAPI DescribeEdgeMachineActiveProcess is deprecated
   * @returns DescribeEdgeMachineActiveProcessResponse
   */
  // Deprecated
  async describeEdgeMachineActiveProcess(edgeMachineid: string): Promise<$_model.DescribeEdgeMachineActiveProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineActiveProcessWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineModelsResponse
   */
  async describeEdgeMachineModelsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeMachineModelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeMachineModels",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeMachineModelsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeMachineModelsResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineModels operation to query the cloud-native box models.
   * @returns DescribeEdgeMachineModelsResponse
   */
  async describeEdgeMachineModels(): Promise<$_model.DescribeEdgeMachineModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineModelsWithOptions(headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachineTunnelConfigDetailResponse
   */
  async describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeMachineTunnelConfigDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeMachineTunnelConfigDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines/%5Bedge_machineid%5D/tunnelconfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeMachineTunnelConfigDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeMachineTunnelConfigDetailResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachineTunnelConfigDetail operation to obtain the SSH token of a cloud-native box.
   * @returns DescribeEdgeMachineTunnelConfigDetailResponse
   */
  async describeEdgeMachineTunnelConfigDetail(edgeMachineid: string): Promise<$_model.DescribeEdgeMachineTunnelConfigDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachineTunnelConfigDetailWithOptions(edgeMachineid, headers, runtime);
  }

  /**
   * You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   * 
   * @param request - DescribeEdgeMachinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdgeMachinesResponse
   */
  async describeEdgeMachinesWithOptions(request: $_model.DescribeEdgeMachinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdgeMachinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hostname)) {
      query["hostname"] = request.hostname;
    }

    if (!$dara.isNull(request.lifeState)) {
      query["life_state"] = request.lifeState;
    }

    if (!$dara.isNull(request.model)) {
      query["model"] = request.model;
    }

    if (!$dara.isNull(request.onlineState)) {
      query["online_state"] = request.onlineState;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdgeMachines",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/edge_machines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdgeMachinesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdgeMachinesResponse({}));
  }

  /**
   * You can call the DescribeEdgeMachines operation to query a list of cloud-native boxes.
   * 
   * @param request - DescribeEdgeMachinesRequest
   * @returns DescribeEdgeMachinesResponse
   */
  async describeEdgeMachines(request: $_model.DescribeEdgeMachinesRequest): Promise<$_model.DescribeEdgeMachinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdgeMachinesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the detailed information about a type of events, including the severity level, status, and time. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsResponse
   */
  async describeEventsWithOptions(request: $_model.DescribeEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEvents",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsResponse({}));
  }

  /**
   * Queries the detailed information about a type of events, including the severity level, status, and time. Events are generated when clusters are created, modified, and updated, node pools are created and scaled out, and components are installed.
   * 
   * @param request - DescribeEventsRequest
   * @returns DescribeEventsResponse
   */
  async describeEvents(request: $_model.DescribeEventsRequest): Promise<$_model.DescribeEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsWithOptions(request, headers, runtime);
  }

  /**
   * Queries all events in a specified region.
   * 
   * @param request - DescribeEventsForRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventsForRegionResponse
   */
  async describeEventsForRegionWithOptions(regionId: string, request: $_model.DescribeEventsForRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventsForRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventsForRegion",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/regions/${$dara.URL.percentEncode(regionId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventsForRegionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventsForRegionResponse({}));
  }

  /**
   * Queries all events in a specified region.
   * 
   * @param request - DescribeEventsForRegionRequest
   * @returns DescribeEventsForRegionResponse
   */
  async describeEventsForRegion(regionId: string, request: $_model.DescribeEventsForRegionRequest): Promise<$_model.DescribeEventsForRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEventsForRegionWithOptions(regionId, request, headers, runtime);
  }

  /**
   * Queries the proxy configurations of a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   * 
   * @deprecated OpenAPI DescribeExternalAgent is deprecated
   * 
   * @param request - DescribeExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExternalAgentResponse
   */
  // Deprecated
  async describeExternalAgentWithOptions(ClusterId: string, request: $_model.DescribeExternalAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExternalAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentMode)) {
      query["AgentMode"] = request.agentMode;
    }

    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExternalAgent",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${$dara.URL.percentEncode(ClusterId)}/external/agent/deployment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExternalAgentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExternalAgentResponse({}));
  }

  /**
   * Queries the proxy configurations of a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   * 
   * @deprecated OpenAPI DescribeExternalAgent is deprecated
   * 
   * @param request - DescribeExternalAgentRequest
   * @returns DescribeExternalAgentResponse
   */
  // Deprecated
  async describeExternalAgent(ClusterId: string, request: $_model.DescribeExternalAgentRequest): Promise<$_model.DescribeExternalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeExternalAgentWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   * 
   * @param request - DescribeKubernetesVersionMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKubernetesVersionMetadataResponse
   */
  async describeKubernetesVersionMetadataWithOptions(request: $_model.DescribeKubernetesVersionMetadataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKubernetesVersionMetadataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.kubernetesVersion)) {
      query["KubernetesVersion"] = request.kubernetesVersion;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.profile)) {
      query["Profile"] = request.profile;
    }

    if (!$dara.isNull(request.queryUpgradableVersion)) {
      query["QueryUpgradableVersion"] = request.queryUpgradableVersion;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.runtime)) {
      query["runtime"] = request.runtime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKubernetesVersionMetadata",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v1/metadata/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeKubernetesVersionMetadataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKubernetesVersionMetadataResponse({}));
  }

  /**
   * Queries the detailed information about Kubernetes versions, including the version number, release date, expiration date, compatible OSs, and runtime.
   * 
   * @param request - DescribeKubernetesVersionMetadataRequest
   * @returns DescribeKubernetesVersionMetadataResponse
   */
  async describeKubernetesVersionMetadata(request: $_model.DescribeKubernetesVersionMetadataRequest): Promise<$_model.DescribeKubernetesVersionMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKubernetesVersionMetadataWithOptions(request, headers, runtime);
  }

  /**
   * Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   * 
   * @param request - DescribeNodePoolVulsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodePoolVulsResponse
   */
  async describeNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, request: $_model.DescribeNodePoolVulsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodePoolVulsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.necessity)) {
      query["necessity"] = request.necessity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodePoolVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodepoolId)}/vuls`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodePoolVulsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodePoolVulsResponse({}));
  }

  /**
   * Queries the vulnerability information of a node pool, such as vulnerability names and severity levels, by specifying the ID of the node pool. We recommend that you periodically scan node pools for vulnerabilities to enhance cluster security.
   * 
   * @param request - DescribeNodePoolVulsRequest
   * @returns DescribeNodePoolVulsResponse
   */
  async describeNodePoolVuls(clusterId: string, nodepoolId: string, request: $_model.DescribeNodePoolVulsRequest): Promise<$_model.DescribeNodePoolVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * Queries a list of security policies. Container Service for Kubernetes (ACK) clusters offer a variety of built-in container security policies, such as Compliance, Infra, K8s-general, and pod security policy (PSP). You can use these policies to ensure the security of containers running in a production environment.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePoliciesResponse
   */
  async describePoliciesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePoliciesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicies",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePoliciesResponse({}));
  }

  /**
   * Queries a list of security policies. Container Service for Kubernetes (ACK) clusters offer a variety of built-in container security policies, such as Compliance, Infra, K8s-general, and pod security policy (PSP). You can use these policies to ensure the security of containers running in a production environment.
   * @returns DescribePoliciesResponse
   */
  async describePolicies(): Promise<$_model.DescribePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePoliciesWithOptions(headers, runtime);
  }

  /**
   * Queries the detailed information about a policy. The information includes the content, action, and severity level of the policy. Container Service for Kubernetes (ACK) provides the following types of predefined security policies: Compliance, Infra, K8s-general, and pod security policy (PSP). These policies ensure that containers are running in the production environment in a secure manner.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetailsWithOptions(policyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyDetailsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyDetails",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/policies/${$dara.URL.percentEncode(policyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyDetailsResponse({}));
  }

  /**
   * Queries the detailed information about a policy. The information includes the content, action, and severity level of the policy. Container Service for Kubernetes (ACK) provides the following types of predefined security policies: Compliance, Infra, K8s-general, and pod security policy (PSP). These policies ensure that containers are running in the production environment in a secure manner.
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetails(policyName: string): Promise<$_model.DescribePolicyDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyDetailsWithOptions(policyName, headers, runtime);
  }

  /**
   * Container Service for Kubernetes (ACK) clusters offer a variety of built-in container security policies, such as Compliance, Infra, K8s-general, and pod security policy (PSP). You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyGovernanceInCluster operation to query the details of policies for an ACK cluster. For example, you can query the number of policies that are enabled per severity level, the audit logs of policies, and the blocking and alerting information.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInClusterWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyGovernanceInClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyGovernanceInCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policygovernance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyGovernanceInClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyGovernanceInClusterResponse({}));
  }

  /**
   * Container Service for Kubernetes (ACK) clusters offer a variety of built-in container security policies, such as Compliance, Infra, K8s-general, and pod security policy (PSP). You can use these policies to ensure the security of containers running in a production environment. You can call the DescribePolicyGovernanceInCluster operation to query the details of policies for an ACK cluster. For example, you can query the number of policies that are enabled per severity level, the audit logs of policies, and the blocking and alerting information.
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInCluster(clusterId: string): Promise<$_model.DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyGovernanceInClusterWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesResponse
   */
  async describePolicyInstancesWithOptions(clusterId: string, request: $_model.DescribePolicyInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    if (!$dara.isNull(request.policyName)) {
      query["policy_name"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribePolicyInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyInstancesResponse({}));
  }

  /**
   * Queries the detailed information about policy instances of the specified type in a Container Service for Kubernetes (ACK) cluster, such as the policy description and severity level. You can choose a type of security policy for an ACK cluster, specify the action and applicable scope of the policy, and then create and deploy a policy instance.
   * 
   * @param request - DescribePolicyInstancesRequest
   * @returns DescribePolicyInstancesResponse
   */
  async describePolicyInstances(clusterId: string, request: $_model.DescribePolicyInstancesRequest): Promise<$_model.DescribePolicyInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatusWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolicyInstancesStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolicyInstancesStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policies/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolicyInstancesStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolicyInstancesStatusResponse({}));
  }

  /**
   * Queries the deployment of policy instances in the current Container Service for Kubernetes (ACK) cluster, including the number of policy instances of each type and the number of policy types of each severity level.
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatus(clusterId: string): Promise<$_model.DescribePolicyInstancesStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesStatusWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries whether the deletion protection feature is enabled for the specified resources in the cluster. The resources that you can query include namespaces and Services.
   * 
   * @param request - DescribeResourcesDeleteProtectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourcesDeleteProtectionResponse
   */
  async describeResourcesDeleteProtectionWithOptions(ClusterId: string, ResourceType: string, request: $_model.DescribeResourcesDeleteProtectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourcesDeleteProtectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resources)) {
      query["resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourcesDeleteProtection",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/resources/${$dara.URL.percentEncode(ResourceType)}/protection`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeResourcesDeleteProtectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourcesDeleteProtectionResponse({}));
  }

  /**
   * Queries whether the deletion protection feature is enabled for the specified resources in the cluster. The resources that you can query include namespaces and Services.
   * 
   * @param request - DescribeResourcesDeleteProtectionRequest
   * @returns DescribeResourcesDeleteProtectionResponse
   */
  async describeResourcesDeleteProtection(ClusterId: string, ResourceType: string, request: $_model.DescribeResourcesDeleteProtectionRequest): Promise<$_model.DescribeResourcesDeleteProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourcesDeleteProtectionWithOptions(ClusterId, ResourceType, request, headers, runtime);
  }

  /**
   * Queries or issues the kubeconfig credentials of a Resource Access Management (RAM) user or RAM role of the account. If you are the permission manager of a Container Service for Kubernetes (ACK) cluster, you can issue the kubeconfig credentials to a specific RAM user or RAM role of the account by using the Alibaba Cloud account. The kubeconfig credentials, which are used to connect to the ACK cluster, contain the identity information about the RAM user or RAM role.
   * 
   * @remarks
   * You can call this operation only by using an Alibaba Cloud account.
   * 
   * @param request - DescribeSubaccountK8sClusterUserConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSubaccountK8sClusterUserConfigResponse
   */
  async describeSubaccountK8sClusterUserConfigWithOptions(ClusterId: string, Uid: string, request: $_model.DescribeSubaccountK8sClusterUserConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSubaccountK8sClusterUserConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.temporaryDurationMinutes)) {
      query["TemporaryDurationMinutes"] = request.temporaryDurationMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSubaccountK8sClusterUserConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${$dara.URL.percentEncode(ClusterId)}/users/${$dara.URL.percentEncode(Uid)}/user_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSubaccountK8sClusterUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSubaccountK8sClusterUserConfigResponse({}));
  }

  /**
   * Queries or issues the kubeconfig credentials of a Resource Access Management (RAM) user or RAM role of the account. If you are the permission manager of a Container Service for Kubernetes (ACK) cluster, you can issue the kubeconfig credentials to a specific RAM user or RAM role of the account by using the Alibaba Cloud account. The kubeconfig credentials, which are used to connect to the ACK cluster, contain the identity information about the RAM user or RAM role.
   * 
   * @remarks
   * You can call this operation only by using an Alibaba Cloud account.
   * 
   * @param request - DescribeSubaccountK8sClusterUserConfigRequest
   * @returns DescribeSubaccountK8sClusterUserConfigResponse
   */
  async describeSubaccountK8sClusterUserConfig(ClusterId: string, Uid: string, request: $_model.DescribeSubaccountK8sClusterUserConfigRequest): Promise<$_model.DescribeSubaccountK8sClusterUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSubaccountK8sClusterUserConfigWithOptions(ClusterId, Uid, request, headers, runtime);
  }

  /**
   * Queries detailed information about a task, such as the task type, status, and progress.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfoWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskInfo",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskInfoResponse({}));
  }

  /**
   * Queries detailed information about a task, such as the task type, status, and progress.
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfo(taskId: string): Promise<$_model.DescribeTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInfoWithOptions(taskId, headers, runtime);
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplateAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplateAttributeResponse
   */
  async describeTemplateAttributeWithOptions(TemplateId: string, request: $_model.DescribeTemplateAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplateAttributeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateType)) {
      query["template_type"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplateAttribute",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeTemplateAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplateAttributeResponse({}));
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplateAttributeRequest
   * @returns DescribeTemplateAttributeResponse
   */
  async describeTemplateAttribute(TemplateId: string, request: $_model.DescribeTemplateAttributeRequest): Promise<$_model.DescribeTemplateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplateAttributeWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(request: $_model.DescribeTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      query["page_num"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.templateType)) {
      query["template_type"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplatesResponse({}));
  }

  /**
   * An orchestration template defines and describes a group of Kubernetes resources. It declaratively describes the configuration of an application or how an application runs. You can call the DescribeTemplates API operation to query orchestration templates and their detailed information, including access permissions, YAML content, and labels.
   * 
   * @param request - DescribeTemplatesRequest
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(request: $_model.DescribeTemplatesRequest): Promise<$_model.DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * Queries triggers that match specific conditions.
   * 
   * @param request - DescribeTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTriggerResponse
   */
  async describeTriggerWithOptions(clusterId: string, request: $_model.DescribeTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTriggerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTriggerResponse({}));
  }

  /**
   * Queries triggers that match specific conditions.
   * 
   * @param request - DescribeTriggerRequest
   * @returns DescribeTriggerResponse
   */
  async describeTrigger(clusterId: string, request: $_model.DescribeTriggerRequest): Promise<$_model.DescribeTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTriggerWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * You can use Kubernetes namespaces to limit users from accessing resources in a Container Service for Kubernetes (ACK) cluster. Users that are granted Role-Based Access Control (RBAC) permissions only on one namespace cannot access resources in other namespaces. Queries the RBAC permissions that are granted to the current Resource Access Management (RAM) user or RAM role on an ACK cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespacesWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserClusterNamespacesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserClusterNamespaces",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/k8s/${$dara.URL.percentEncode(ClusterId)}/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeUserClusterNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserClusterNamespacesResponse({}));
  }

  /**
   * You can use Kubernetes namespaces to limit users from accessing resources in a Container Service for Kubernetes (ACK) cluster. Users that are granted Role-Based Access Control (RBAC) permissions only on one namespace cannot access resources in other namespaces. Queries the RBAC permissions that are granted to the current Resource Access Management (RAM) user or RAM role on an ACK cluster.
   * @returns DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespaces(ClusterId: string): Promise<$_model.DescribeUserClusterNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserClusterNamespacesWithOptions(ClusterId, headers, runtime);
  }

  /**
   * In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   * 
   * @remarks
   * *Precautions**:
   * *   If you call this operation as a Resource Access Management (RAM) user or by assuming a RAM role, only the permissions granted on the clusters on which the current account has the role-based access control (RBAC) administrator permissions are returned. If you want to query the permissions on all clusters, you must use an account that has the RBAC administrator permissions on all clusters.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserPermissionResponse
   */
  async describeUserPermissionWithOptions(uid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserPermissionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserPermission",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${$dara.URL.percentEncode(uid)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.DescribeUserPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserPermissionResponse({}));
  }

  /**
   * In an Container Service for Kubernetes (ACK) cluster, you can create and specify different Resource Access Management (RAM) users or roles to have different access permissions. This ensures access control and resource isolation. You can call the DescribeUserPermission operation to query the permissions that are granted to a RAM user or RAM role on ACK clusters, including the resources that are allowed to access, the scope of the permissions, the predefined role, and the permission source.
   * 
   * @remarks
   * *Precautions**:
   * *   If you call this operation as a Resource Access Management (RAM) user or by assuming a RAM role, only the permissions granted on the clusters on which the current account has the role-based access control (RBAC) administrator permissions are returned. If you want to query the permissions on all clusters, you must use an account that has the RBAC administrator permissions on all clusters.
   * @returns DescribeUserPermissionResponse
   */
  async describeUserPermission(uid: string): Promise<$_model.DescribeUserPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserPermissionWithOptions(uid, headers, runtime);
  }

  /**
   * Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuotaWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserQuota",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserQuotaResponse({}));
  }

  /**
   * Queries quotas related to Container Service for Kubernetes (ACK) clusters, node pools, and nodes. To increase a quota, submit an application in the Quota Center console.
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuota(): Promise<$_model.DescribeUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserQuotaWithOptions(headers, runtime);
  }

  /**
   * You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   * 
   * @deprecated OpenAPI EdgeClusterAddEdgeMachine is deprecated
   * 
   * @param request - EdgeClusterAddEdgeMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EdgeClusterAddEdgeMachineResponse
   */
  // Deprecated
  async edgeClusterAddEdgeMachineWithOptions(clusterid: string, edgeMachineid: string, request: $_model.EdgeClusterAddEdgeMachineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EdgeClusterAddEdgeMachineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expired)) {
      body["expired"] = request.expired;
    }

    if (!$dara.isNull(request.nodepoolId)) {
      body["nodepool_id"] = request.nodepoolId;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EdgeClusterAddEdgeMachine",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/%5Bclusterid%5D/attachedgemachine/%5Bedge_machineid%5D`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EdgeClusterAddEdgeMachineResponse>(await this.callApi(params, req, runtime), new $_model.EdgeClusterAddEdgeMachineResponse({}));
  }

  /**
   * You can call the EdgeClusterAddEdgeMachine operation to add a cloud-native box to a Container Service for Kubernetes (ACK) Edge cluster.
   * 
   * @deprecated OpenAPI EdgeClusterAddEdgeMachine is deprecated
   * 
   * @param request - EdgeClusterAddEdgeMachineRequest
   * @returns EdgeClusterAddEdgeMachineResponse
   */
  // Deprecated
  async edgeClusterAddEdgeMachine(clusterid: string, edgeMachineid: string, request: $_model.EdgeClusterAddEdgeMachineRequest): Promise<$_model.EdgeClusterAddEdgeMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.edgeClusterAddEdgeMachineWithOptions(clusterid, edgeMachineid, request, headers, runtime);
  }

  /**
   * Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   * 
   * @remarks
   * 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   * 
   * @param request - FixNodePoolVulsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FixNodePoolVulsResponse
   */
  async fixNodePoolVulsWithOptions(clusterId: string, nodepoolId: string, request: $_model.FixNodePoolVulsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FixNodePoolVulsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRestart)) {
      body["auto_restart"] = request.autoRestart;
    }

    if (!$dara.isNull(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.rolloutPolicy)) {
      body["rollout_policy"] = request.rolloutPolicy;
    }

    if (!$dara.isNull(request.vuls)) {
      body["vuls"] = request.vuls;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FixNodePoolVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodepoolId)}/vuls/fix`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FixNodePoolVulsResponse>(await this.callApi(params, req, runtime), new $_model.FixNodePoolVulsResponse({}));
  }

  /**
   * Patches node vulnerabilities in a node pool to enhance node security. Cloud Security provided by Alibaba Cloud periodically scans Elastic Compute Service (ECS) instances for vulnerabilities and provides suggestions on how to patch the detected vulnerabilities. Vulnerability patching may require node restarts. Make sure that your cluster has sufficient idle nodes for node draining.
   * 
   * @remarks
   * 1.  The Common Vulnerabilities and Exposures (CVE) patching feature is developed based on Security Center. To use this feature, you must purchase the Security Center Ultimate Edition that supports Container Service for Kubernetes (ACK).
   * 2.  ACK may need to restart nodes to patch certain vulnerabilities. ACK drains a node before the node restarts. Make sure that the ACK cluster has sufficient idle nodes to host the pods evicted from the trained nodes. For example, you can scale out a node pool before you patch vulnerabilities for the nodes in the node pool.
   * 3.  Security Center ensures the compatibility of CVE patches. We recommend that you check the compatibility of a CVE patch with your application before you install the patch. You can pause or cancel a CVE patching task anytime.
   * 4.  CVE patching is a progressive task that consists of multiple batches. After you pause or cancel a CVE patching task, ACK continues to process the dispatched batches. Only the batches that have not been dispatched are paused or canceled.
   * 
   * @param request - FixNodePoolVulsRequest
   * @returns FixNodePoolVulsResponse
   */
  async fixNodePoolVuls(clusterId: string, nodepoolId: string, request: $_model.FixNodePoolVulsRequest): Promise<$_model.FixNodePoolVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fixNodePoolVulsWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstanceWithOptions(clusterId: string, instanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterAddonInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterAddonInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/addon_instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterAddonInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterAddonInstanceResponse({}));
  }

  /**
   * You can call the GetClusterAddonInstance operation to query the information of a component instance in a cluster, including the version, configurations, and log status of the component instance.
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstance(clusterId: string, instanceName: string): Promise<$_model.GetClusterAddonInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAddonInstanceWithOptions(clusterId, instanceName, headers, runtime);
  }

  /**
   * You can call the GetClusterAuditProject operation to check whether the cluster has API Server auditing enabled and the corresponding Simple Log Service project that stores API Server audit logs.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAuditProjectResponse
   */
  async getClusterAuditProjectWithOptions(clusterid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterAuditProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterAuditProject",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterid)}/audit`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterAuditProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterAuditProjectResponse({}));
  }

  /**
   * You can call the GetClusterAuditProject operation to check whether the cluster has API Server auditing enabled and the corresponding Simple Log Service project that stores API Server audit logs.
   * @returns GetClusterAuditProjectResponse
   */
  async getClusterAuditProject(clusterid: string): Promise<$_model.GetClusterAuditProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAuditProjectWithOptions(clusterid, headers, runtime);
  }

  /**
   * Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterCheckResponse
   */
  async getClusterCheckWithOptions(clusterId: string, checkId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterCheckResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterCheck",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/checks/${$dara.URL.percentEncode(checkId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterCheckResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterCheckResponse({}));
  }

  /**
   * Queries a cluster check task by cluster ID and task ID. You can view the status, check items, creation time, and end time of the task. Container Intelligence Service (CIS) provides a variety of Kubernetes cluster check features, including cluster update check, cluster migration check, component installation check, component update check, and node pool check.
   * @returns GetClusterCheckResponse
   */
  async getClusterCheck(clusterId: string, checkId: string): Promise<$_model.GetClusterCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterCheckWithOptions(clusterId, checkId, headers, runtime);
  }

  /**
   * Queries cluster diagnostic items.
   * 
   * @param request - GetClusterDiagnosisCheckItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterDiagnosisCheckItemsResponse
   */
  async getClusterDiagnosisCheckItemsWithOptions(clusterId: string, diagnosisId: string, request: $_model.GetClusterDiagnosisCheckItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterDiagnosisCheckItemsResponse> {
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
      action: "GetClusterDiagnosisCheckItems",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/diagnosis/${$dara.URL.percentEncode(diagnosisId)}/check_items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterDiagnosisCheckItemsResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterDiagnosisCheckItemsResponse({}));
  }

  /**
   * Queries cluster diagnostic items.
   * 
   * @param request - GetClusterDiagnosisCheckItemsRequest
   * @returns GetClusterDiagnosisCheckItemsResponse
   */
  async getClusterDiagnosisCheckItems(clusterId: string, diagnosisId: string, request: $_model.GetClusterDiagnosisCheckItemsRequest): Promise<$_model.GetClusterDiagnosisCheckItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisCheckItemsWithOptions(clusterId, diagnosisId, request, headers, runtime);
  }

  /**
   * Queries cluster diagnostic results.
   * 
   * @param request - GetClusterDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterDiagnosisResultResponse
   */
  async getClusterDiagnosisResultWithOptions(clusterId: string, diagnosisId: string, request: $_model.GetClusterDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterDiagnosisResultResponse> {
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
      action: "GetClusterDiagnosisResult",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/diagnosis/${$dara.URL.percentEncode(diagnosisId)}/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterDiagnosisResultResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterDiagnosisResultResponse({}));
  }

  /**
   * Queries cluster diagnostic results.
   * 
   * @param request - GetClusterDiagnosisResultRequest
   * @returns GetClusterDiagnosisResultResponse
   */
  async getClusterDiagnosisResult(clusterId: string, diagnosisId: string, request: $_model.GetClusterDiagnosisResultRequest): Promise<$_model.GetClusterDiagnosisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDiagnosisResultWithOptions(clusterId, diagnosisId, request, headers, runtime);
  }

  /**
   * Retrieves cluster inspection configuration.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterInspectConfigResponse
   */
  async getClusterInspectConfigWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterInspectConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterInspectConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterInspectConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterInspectConfigResponse({}));
  }

  /**
   * Retrieves cluster inspection configuration.
   * @returns GetClusterInspectConfigResponse
   */
  async getClusterInspectConfig(clusterId: string): Promise<$_model.GetClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterInspectConfigWithOptions(clusterId, headers, runtime);
  }

  /**
   * Obtain the details of the inspection report for the cluster
   * 
   * @param request - GetClusterInspectReportDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterInspectReportDetailResponse
   */
  async getClusterInspectReportDetailWithOptions(clusterId: string, reportId: string, request: $_model.GetClusterInspectReportDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterInspectReportDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      query["category"] = request.category;
    }

    if (!$dara.isNull(request.enableFilter)) {
      query["enableFilter"] = request.enableFilter;
    }

    if (!$dara.isNull(request.language)) {
      query["language"] = request.language;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.targetType)) {
      query["targetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterInspectReportDetail",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectReports/${$dara.URL.percentEncode(reportId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterInspectReportDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterInspectReportDetailResponse({}));
  }

  /**
   * Obtain the details of the inspection report for the cluster
   * 
   * @param request - GetClusterInspectReportDetailRequest
   * @returns GetClusterInspectReportDetailResponse
   */
  async getClusterInspectReportDetail(clusterId: string, reportId: string, request: $_model.GetClusterInspectReportDetailRequest): Promise<$_model.GetClusterInspectReportDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterInspectReportDetailWithOptions(clusterId, reportId, request, headers, runtime);
  }

  /**
   * You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   * 
   * @deprecated OpenAPI GetKubernetesTrigger is deprecated
   * 
   * @param request - GetKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKubernetesTriggerResponse
   */
  // Deprecated
  async getKubernetesTriggerWithOptions(ClusterId: string, request: $_model.GetKubernetesTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKubernetesTriggerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKubernetesTrigger",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/triggers/${$dara.URL.percentEncode(ClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.GetKubernetesTriggerResponse>(await this.callApi(params, req, runtime), new $_model.GetKubernetesTriggerResponse({}));
  }

  /**
   * You can call the GetKubernetesTrigger operationto query the triggers of an application by application name.
   * 
   * @deprecated OpenAPI GetKubernetesTrigger is deprecated
   * 
   * @param request - GetKubernetesTriggerRequest
   * @returns GetKubernetesTriggerResponse
   */
  // Deprecated
  async getKubernetesTrigger(ClusterId: string, request: $_model.GetKubernetesTriggerRequest): Promise<$_model.GetKubernetesTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKubernetesTriggerWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI GetUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpgradeStatusResponse
   */
  // Deprecated
  async getUpgradeStatusWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUpgradeStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUpgradeStatus",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/upgrade/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetUpgradeStatusResponse({}));
  }

  /**
   * You can call the GetUpgradeStatus operation to query the update progress of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI GetUpgradeStatus is deprecated
   * @returns GetUpgradeStatusResponse
   */
  // Deprecated
  async getUpgradeStatus(ClusterId: string): Promise<$_model.GetUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   *   If you use a Resource Access Management (RAM) account to call this operation, make sure it has permissions to modify cluster authorization information for other RAM users or RAM roles. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   This operation overwrites all existing cluster permissions for the target RAM user or RAM role. You must specify all the permissions you want to grant to the RAM user or RAM role in the request.
   * 
   * @param request - GrantPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantPermissionsResponse
   */
  async grantPermissionsWithOptions(uid: string, request: $_model.GrantPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantPermissionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${$dara.URL.percentEncode(uid)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.GrantPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.GrantPermissionsResponse({}));
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   *   If you use a Resource Access Management (RAM) account to call this operation, make sure it has permissions to modify cluster authorization information for other RAM users or RAM roles. Otherwise, the `StatusForbidden` or `ForbiddenGrantPermissions` error code is returned. For more information, see [Use a RAM user to grant RBAC permissions to other RAM users](https://help.aliyun.com/document_detail/119035.html).
   * *   This operation overwrites all existing cluster permissions for the target RAM user or RAM role. You must specify all the permissions you want to grant to the RAM user or RAM role in the request.
   * 
   * @param request - GrantPermissionsRequest
   * @returns GrantPermissionsResponse
   */
  async grantPermissions(uid: string, request: $_model.GrantPermissionsRequest): Promise<$_model.GrantPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * 为了增强Kubernetes能力，ACK集群支持了多种组件，例如托管的核心组件，应用、日志和监控、网络、存储、安全组件等。您可以调用InstallClusterAddons接口，通过组件名称和版本安装组件。
   * 
   * @param request - InstallClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddonsWithOptions(ClusterId: string, request: $_model.InstallClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallClusterAddonsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.InstallClusterAddonsResponse({}));
  }

  /**
   * 为了增强Kubernetes能力，ACK集群支持了多种组件，例如托管的核心组件，应用、日志和监控、网络、存储、安全组件等。您可以调用InstallClusterAddons接口，通过组件名称和版本安装组件。
   * 
   * @param request - InstallClusterAddonsRequest
   * @returns InstallClusterAddonsResponse
   */
  async installClusterAddons(ClusterId: string, request: $_model.InstallClusterAddonsRequest): Promise<$_model.InstallClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the available components based on specific conditions such as the region, cluster type, cluster subtype defined by cluster profile, and cluster version and queries the detailed information about a component. The information includes whether the component is managed, the supported custom parameter schema, and compatible operating system architecture.
   * 
   * @param request - ListAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(request: $_model.ListAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      query["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.clusterVersion)) {
      query["cluster_version"] = request.clusterVersion;
    }

    if (!$dara.isNull(request.profile)) {
      query["profile"] = request.profile;
    }

    if (!$dara.isNull(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/addons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonsResponse({}));
  }

  /**
   * Queries the available components based on specific conditions such as the region, cluster type, cluster subtype defined by cluster profile, and cluster version and queries the detailed information about a component. The information includes whether the component is managed, the supported custom parameter schema, and compatible operating system architecture.
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: $_model.ListAddonsRequest): Promise<$_model.ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAddonsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the component instances that are running in the specified cluster and the information about the component instances. The information includes the component version and status.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstancesWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterAddonInstancesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterAddonInstances",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/addon_instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterAddonInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterAddonInstancesResponse({}));
  }

  /**
   * Queries the component instances that are running in the specified cluster and the information about the component instances. The information includes the component version and status.
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstances(clusterId: string): Promise<$_model.ListClusterAddonInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAddonInstancesWithOptions(clusterId, headers, runtime);
  }

  /**
   * You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   * 
   * @param request - ListClusterChecksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterChecksResponse
   */
  async listClusterChecksWithOptions(clusterId: string, request: $_model.ListClusterChecksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterChecksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.target)) {
      query["target"] = request.target;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterChecks",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/checks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterChecksResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterChecksResponse({}));
  }

  /**
   * You can call the ListClusterChecks operation to query all the cluster check results of a cluster.
   * 
   * @param request - ListClusterChecksRequest
   * @returns ListClusterChecksResponse
   */
  async listClusterChecks(clusterId: string, request: $_model.ListClusterChecksRequest): Promise<$_model.ListClusterChecksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterChecksWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Obtains the details of the cluster inspection report.
   * 
   * @param request - ListClusterInspectReportsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterInspectReportsResponse
   */
  async listClusterInspectReportsWithOptions(clusterId: string, request: $_model.ListClusterInspectReportsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterInspectReportsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterInspectReports",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectReports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterInspectReportsResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterInspectReportsResponse({}));
  }

  /**
   * Obtains the details of the cluster inspection report.
   * 
   * @param request - ListClusterInspectReportsRequest
   * @returns ListClusterInspectReportsResponse
   */
  async listClusterInspectReports(clusterId: string, request: $_model.ListClusterInspectReportsRequest): Promise<$_model.ListClusterInspectReportsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterInspectReportsWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Queries the kubeconfig files that are issued to users for the current cluster and the status of the kubeconfig files.
   * 
   * @remarks
   * > - To call this operation, make sure that you have ram:ListUsers and ram:ListRoles permissions.
   * > - To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListClusterKubeconfigStatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterKubeconfigStatesResponse
   */
  async listClusterKubeconfigStatesWithOptions(ClusterId: string, request: $_model.ListClusterKubeconfigStatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterKubeconfigStatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterKubeconfigStates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/kubeconfig/states`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterKubeconfigStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterKubeconfigStatesResponse({}));
  }

  /**
   * Queries the kubeconfig files that are issued to users for the current cluster and the status of the kubeconfig files.
   * 
   * @remarks
   * > - To call this operation, make sure that you have ram:ListUsers and ram:ListRoles permissions.
   * > - To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListClusterKubeconfigStatesRequest
   * @returns ListClusterKubeconfigStatesResponse
   */
  async listClusterKubeconfigStates(ClusterId: string, request: $_model.ListClusterKubeconfigStatesRequest): Promise<$_model.ListClusterKubeconfigStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterKubeconfigStatesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Queries the automated maintenance schedules of a cluster.
   * 
   * @param request - ListOperationPlansRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationPlansResponse
   */
  async listOperationPlansWithOptions(request: $_model.ListOperationPlansRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationPlansResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationPlans",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/operation/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationPlansResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationPlansResponse({}));
  }

  /**
   * Queries the automated maintenance schedules of a cluster.
   * 
   * @param request - ListOperationPlansRequest
   * @returns ListOperationPlansResponse
   */
  async listOperationPlans(request: $_model.ListOperationPlansRequest): Promise<$_model.ListOperationPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationPlansWithOptions(request, headers, runtime);
  }

  /**
   * Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
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
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "resource_ids", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["next_token"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["resource_ids"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resource_type"] = request.resourceType;
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
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries resource labels and the detailed information, such as the key-value pairs of the labels and the clusters to which the labels are added. You can use labels to classify and manage Container Service for Kubernetes (ACK) clusters in order to meet monitoring, cost analysis, and tenant isolation requirements.
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
   * You can call the ListUserKubeConfigStates operation to query the status of the kubeconfig files of all clusters managed by the current user.
   * 
   * @remarks
   * >  To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListUserKubeConfigStatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserKubeConfigStatesResponse
   */
  async listUserKubeConfigStatesWithOptions(Uid: string, request: $_model.ListUserKubeConfigStatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserKubeConfigStatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["page_number"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserKubeConfigStates",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/users/${$dara.URL.percentEncode(Uid)}/kubeconfig/states`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserKubeConfigStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserKubeConfigStatesResponse({}));
  }

  /**
   * You can call the ListUserKubeConfigStates operation to query the status of the kubeconfig files of all clusters managed by the current user.
   * 
   * @remarks
   * >  To call this operation, make sure that you have the AliyunCSFullAccess permissions.
   * 
   * @param request - ListUserKubeConfigStatesRequest
   * @returns ListUserKubeConfigStatesResponse
   */
  async listUserKubeConfigStates(Uid: string, request: $_model.ListUserKubeConfigStatesRequest): Promise<$_model.ListUserKubeConfigStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserKubeConfigStatesWithOptions(Uid, request, headers, runtime);
  }

  /**
   * The Container Service for Kubernetes (ACK) managed Pro cluster type is developed based on the ACK managed Basic cluster type. It inherits all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. It further enhances reliability, security, scheduling capabilities, and offers service level agreement (SLA)-backed guarantees, making it ideal for enterprise customers with large-scale production workloads requiring high stability and security. You can call the MigrateCluster operation to migrate an ACK managed Basic cluster to an ACK managed Pro cluster.
   * 
   * @param request - MigrateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateClusterResponse
   */
  async migrateClusterWithOptions(clusterId: string, request: $_model.MigrateClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ossBucketEndpoint)) {
      body["oss_bucket_endpoint"] = request.ossBucketEndpoint;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["oss_bucket_name"] = request.ossBucketName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/migrate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateClusterResponse>(await this.callApi(params, req, runtime), new $_model.MigrateClusterResponse({}));
  }

  /**
   * The Container Service for Kubernetes (ACK) managed Pro cluster type is developed based on the ACK managed Basic cluster type. It inherits all benefits of ACK managed clusters, such as fully-managed control planes and control plane high availability. It further enhances reliability, security, scheduling capabilities, and offers service level agreement (SLA)-backed guarantees, making it ideal for enterprise customers with large-scale production workloads requiring high stability and security. You can call the MigrateCluster operation to migrate an ACK managed Basic cluster to an ACK managed Pro cluster.
   * 
   * @param request - MigrateClusterRequest
   * @returns MigrateClusterResponse
   */
  async migrateCluster(clusterId: string, request: $_model.MigrateClusterRequest): Promise<$_model.MigrateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateClusterWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   * 
   * @param request - ModifyClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterResponse
   */
  async modifyClusterWithOptions(ClusterId: string, request: $_model.ModifyClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessControlList)) {
      body["access_control_list"] = request.accessControlList;
    }

    if (!$dara.isNull(request.apiServerCustomCertSans)) {
      body["api_server_custom_cert_sans"] = request.apiServerCustomCertSans;
    }

    if (!$dara.isNull(request.apiServerEip)) {
      body["api_server_eip"] = request.apiServerEip;
    }

    if (!$dara.isNull(request.apiServerEipId)) {
      body["api_server_eip_id"] = request.apiServerEipId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["cluster_name"] = request.clusterName;
    }

    if (!$dara.isNull(request.controlPlaneConfig)) {
      body["control_plane_config"] = request.controlPlaneConfig;
    }

    if (!$dara.isNull(request.deletionProtection)) {
      body["deletion_protection"] = request.deletionProtection;
    }

    if (!$dara.isNull(request.enableRrsa)) {
      body["enable_rrsa"] = request.enableRrsa;
    }

    if (!$dara.isNull(request.ingressDomainRebinding)) {
      body["ingress_domain_rebinding"] = request.ingressDomainRebinding;
    }

    if (!$dara.isNull(request.ingressLoadbalancerId)) {
      body["ingress_loadbalancer_id"] = request.ingressLoadbalancerId;
    }

    if (!$dara.isNull(request.instanceDeletionProtection)) {
      body["instance_deletion_protection"] = request.instanceDeletionProtection;
    }

    if (!$dara.isNull(request.maintenanceWindow)) {
      body["maintenance_window"] = request.maintenanceWindow;
    }

    if (!$dara.isNull(request.operationPolicy)) {
      body["operation_policy"] = request.operationPolicy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resource_group_id"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["security_group_id"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.systemEventsLogging)) {
      body["system_events_logging"] = request.systemEventsLogging;
    }

    if (!$dara.isNull(request.timezone)) {
      body["timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterResponse({}));
  }

  /**
   * You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.
   * 
   * @param request - ModifyClusterRequest
   * @returns ModifyClusterResponse
   */
  async modifyCluster(ClusterId: string, request: $_model.ModifyClusterRequest): Promise<$_model.ModifyClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   * 
   * @remarks
   * You can call this API operation to modify the component parameters of an ACK Basic cluster or the control plane parameters of an ACK Pro cluster:
   * *   To view the component parameters of an ACK Basic cluster, call the DescribeClusterAddonMetadata API operation. For more information, see [Query the metadata of a cluster component](https://help.aliyun.com/document_detail/2667944.html).
   * *   To view the control plane parameters of an ACK Pro cluster, see [Customize the control plane parameters of an ACK Pro cluster](https://help.aliyun.com/document_detail/199588.html).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   * 
   * @param request - ModifyClusterAddonRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddonWithOptions(clusterId: string, componentId: string, request: $_model.ModifyClusterAddonRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterAddonResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterAddon",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/components/${$dara.URL.percentEncode(componentId)}/config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ModifyClusterAddonResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterAddonResponse({}));
  }

  /**
   * Modifies the configuration of a cluster component. This operation may affect your businesses. We recommend that you assess the impact, back up data, and perform the operation during off-peak hours.
   * 
   * @remarks
   * You can call this API operation to modify the component parameters of an ACK Basic cluster or the control plane parameters of an ACK Pro cluster:
   * *   To view the component parameters of an ACK Basic cluster, call the DescribeClusterAddonMetadata API operation. For more information, see [Query the metadata of a cluster component](https://help.aliyun.com/document_detail/2667944.html).
   * *   To view the control plane parameters of an ACK Pro cluster, see [Customize the control plane parameters of an ACK Pro cluster](https://help.aliyun.com/document_detail/199588.html).
   * After you call this operation, the component may be redeployed and restarted. We recommend that you assess the impact before you call this operation.
   * 
   * @param request - ModifyClusterAddonRequest
   * @returns ModifyClusterAddonResponse
   */
  async modifyClusterAddon(clusterId: string, componentId: string, request: $_model.ModifyClusterAddonRequest): Promise<$_model.ModifyClusterAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterAddonWithOptions(clusterId, componentId, request, headers, runtime);
  }

  /**
   * This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   * 
   * @deprecated OpenAPI ModifyClusterConfiguration is deprecated
   * 
   * @param request - ModifyClusterConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConfigurationResponse
   */
  // Deprecated
  async modifyClusterConfigurationWithOptions(ClusterId: string, request: $_model.ModifyClusterConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterConfigurationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customizeConfig)) {
      body["customize_config"] = request.customizeConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterConfiguration",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/configuration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ModifyClusterConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterConfigurationResponse({}));
  }

  /**
   * This API operation applies only to Container Service for Kubernetes (ACK) managed clusters.
   * 
   * @deprecated OpenAPI ModifyClusterConfiguration is deprecated
   * 
   * @param request - ModifyClusterConfigurationRequest
   * @returns ModifyClusterConfigurationResponse
   */
  // Deprecated
  async modifyClusterConfiguration(ClusterId: string, request: $_model.ModifyClusterConfigurationRequest): Promise<$_model.ModifyClusterConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterConfigurationWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   * 
   * @param request - ModifyClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.ModifyClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterNodePoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoScaling)) {
      body["auto_scaling"] = request.autoScaling;
    }

    if (!$dara.isNull(request.concurrency)) {
      body["concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.kubernetesConfig)) {
      body["kubernetes_config"] = request.kubernetesConfig;
    }

    if (!$dara.isNull(request.management)) {
      body["management"] = request.management;
    }

    if (!$dara.isNull(request.nodepoolInfo)) {
      body["nodepool_info"] = request.nodepoolInfo;
    }

    if (!$dara.isNull(request.scalingGroup)) {
      body["scaling_group"] = request.scalingGroup;
    }

    if (!$dara.isNull(request.teeConfig)) {
      body["tee_config"] = request.teeConfig;
    }

    if (!$dara.isNull(request.updateNodes)) {
      body["update_nodes"] = request.updateNodes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterNodePoolResponse({}));
  }

  /**
   * You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.
   * 
   * @param request - ModifyClusterNodePoolRequest
   * @returns ModifyClusterNodePoolResponse
   */
  async modifyClusterNodePool(ClusterId: string, NodepoolId: string, request: $_model.ModifyClusterNodePoolRequest): Promise<$_model.ModifyClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can add labels in key-value pairs to clusters. This allows cluster developers or O\\\\\\&M engineers to classify and manage clusters in a more flexible manner. This also meets the requirements for monitoring, cost analysis, and tenant isolation. You can call the ModifyClusterTags operation to modify the labels of a cluster.
   * 
   * @param request - ModifyClusterTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterTagsResponse
   */
  async modifyClusterTagsWithOptions(ClusterId: string, request: $_model.ModifyClusterTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterTagsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterTags",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ModifyClusterTagsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterTagsResponse({}));
  }

  /**
   * You can add labels in key-value pairs to clusters. This allows cluster developers or O\\\\\\&M engineers to classify and manage clusters in a more flexible manner. This also meets the requirements for monitoring, cost analysis, and tenant isolation. You can call the ModifyClusterTags operation to modify the labels of a cluster.
   * 
   * @param request - ModifyClusterTagsRequest
   * @returns ModifyClusterTagsResponse
   */
  async modifyClusterTags(ClusterId: string, request: $_model.ModifyClusterTagsRequest): Promise<$_model.ModifyClusterTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterTagsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   * 
   * @param request - ModifyNodePoolNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodePoolNodeConfigResponse
   */
  async modifyNodePoolNodeConfigWithOptions(ClusterId: string, NodepoolId: string, request: $_model.ModifyNodePoolNodeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodePoolNodeConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containerdConfig)) {
      body["containerd_config"] = request.containerdConfig;
    }

    if (!$dara.isNull(request.kubeletConfig)) {
      body["kubelet_config"] = request.kubeletConfig;
    }

    if (!$dara.isNull(request.osConfig)) {
      body["os_config"] = request.osConfig;
    }

    if (!$dara.isNull(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodePoolNodeConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}/node_config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodePoolNodeConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodePoolNodeConfigResponse({}));
  }

  /**
   * Modifies the configuration of a node pool, such as the kubelet configuration and node rolling update configuration. After you modify the node pool configuration, nodes are batch updated and the kubelet on each node is restarted. This may adversely affect the nodes and workloads. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * >  Container Service for Kubernetes (ACK) allows you to modify the kubelet configuration of nodes in a node pool. After you modify the kubelet configuration, the new configuration immediately takes effect on existing nodes in the node pool and is automatically applied to newly added nodes.
   * 
   * @param request - ModifyNodePoolNodeConfigRequest
   * @returns ModifyNodePoolNodeConfigResponse
   */
  async modifyNodePoolNodeConfig(ClusterId: string, NodepoolId: string, request: $_model.ModifyNodePoolNodeConfigRequest): Promise<$_model.ModifyNodePoolNodeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodePoolNodeConfigWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Updates a policy in a specific Container Service for Kubernetes (ACK) cluster. You can modify the action of the policy such as alerting or denying and namespaces to which the policy applies.
   * 
   * @param request - ModifyPolicyInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolicyInstanceResponse
   */
  async modifyPolicyInstanceWithOptions(clusterId: string, policyName: string, request: $_model.ModifyPolicyInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolicyInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instance_name"] = request.instanceName;
    }

    if (!$dara.isNull(request.namespaces)) {
      body["namespaces"] = request.namespaces;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolicyInstance",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/policies/${$dara.URL.percentEncode(policyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolicyInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolicyInstanceResponse({}));
  }

  /**
   * Updates a policy in a specific Container Service for Kubernetes (ACK) cluster. You can modify the action of the policy such as alerting or denying and namespaces to which the policy applies.
   * 
   * @param request - ModifyPolicyInstanceRequest
   * @returns ModifyPolicyInstanceResponse
   */
  async modifyPolicyInstance(clusterId: string, policyName: string, request: $_model.ModifyPolicyInstanceRequest): Promise<$_model.ModifyPolicyInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPolicyInstanceWithOptions(clusterId, policyName, request, headers, runtime);
  }

  /**
   * When using Container Service for Kubernetes (ACK) for the first time, you must call the OpenAckService operation to activate the service.
   * 
   * @remarks
   *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   * 
   * @param request - OpenAckServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenAckServiceResponse
   */
  async openAckServiceWithOptions(request: $_model.OpenAckServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenAckServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenAckService",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenAckServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenAckServiceResponse({}));
  }

  /**
   * When using Container Service for Kubernetes (ACK) for the first time, you must call the OpenAckService operation to activate the service.
   * 
   * @remarks
   *   You can activate ACK by using Alibaba Cloud accounts.
   * *   To activate ACK by using RAM users, you need to grant the AdministratorAccess permission to the RAM users.
   * 
   * @param request - OpenAckServiceRequest
   * @returns OpenAckServiceResponse
   */
  async openAckService(request: $_model.OpenAckServiceRequest): Promise<$_model.OpenAckServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openAckServiceWithOptions(request, headers, runtime);
  }

  /**
   * You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseClusterUpgradeResponse
   */
  // Deprecated
  async pauseClusterUpgradeWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PauseClusterUpgradeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseClusterUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/upgrade/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PauseClusterUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.PauseClusterUpgradeResponse({}));
  }

  /**
   * You can call the PauseClusterUpgrade operation to pause the update of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   * @returns PauseClusterUpgradeResponse
   */
  // Deprecated
  async pauseClusterUpgrade(ClusterId: string): Promise<$_model.PauseClusterUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseClusterUpgradeWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the PauseComponentUpgrade operation to pause the update of a component.
   * 
   * @deprecated OpenAPI PauseComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseComponentUpgradeResponse
   */
  // Deprecated
  async pauseComponentUpgradeWithOptions(clusterid: string, componentid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PauseComponentUpgradeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterid)}/components/${$dara.URL.percentEncode(componentid)}/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PauseComponentUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.PauseComponentUpgradeResponse({}));
  }

  /**
   * You can call the PauseComponentUpgrade operation to pause the update of a component.
   * 
   * @deprecated OpenAPI PauseComponentUpgrade is deprecated
   * @returns PauseComponentUpgradeResponse
   */
  // Deprecated
  async pauseComponentUpgrade(clusterid: string, componentid: string): Promise<$_model.PauseComponentUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * Pauses an on-going task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseTaskResponse
   */
  async pauseTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PauseTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/pause`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.PauseTaskResponse>(await this.callApi(params, req, runtime), new $_model.PauseTaskResponse({}));
  }

  /**
   * Pauses an on-going task.
   * @returns PauseTaskResponse
   */
  async pauseTask(taskId: string): Promise<$_model.PauseTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * ***
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   * 
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   * 
   * @param request - RemoveClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterNodesResponse
   */
  // Deprecated
  async removeClusterNodesWithOptions(ClusterId: string, request: $_model.RemoveClusterNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClusterNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.drainNode)) {
      body["drain_node"] = request.drainNode;
    }

    if (!$dara.isNull(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.releaseNode)) {
      body["release_node"] = request.releaseNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveClusterNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/nodes/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RemoveClusterNodesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClusterNodesResponse({}));
  }

  /**
   * You can call the RemoveClusterNodes operation to remove nodes from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * ***
   * *   When you remove a node, the pods that run on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   Unknown errors may occur when you remove nodes. Before you remove nodes, back up the data on the nodes.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   You can remove only worker nodes. You cannot remove master nodes.
   * 
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   * 
   * @param request - RemoveClusterNodesRequest
   * @returns RemoveClusterNodesResponse
   */
  // Deprecated
  async removeClusterNodes(ClusterId: string, request: $_model.RemoveClusterNodesRequest): Promise<$_model.RemoveClusterNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterNodesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Removes nodes from a node pool.
   * 
   * @remarks
   *   When you remove a node, the pods on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   The operation may have unexpected risks. Back up the data before you perform this operation.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   The system removes only worker nodes. It does not remove master nodes.
   * *   Even if you set the `release_node` parameter to `true`, subscription nodes are not released. You must release the subscription nodes in the [ECS console](https://ecs.console.aliyun.com/) after you remove the nodes.
   * 
   * @param tmpReq - RemoveNodePoolNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveNodePoolNodesResponse
   */
  async removeNodePoolNodesWithOptions(ClusterId: string, NodepoolId: string, tmpReq: $_model.RemoveNodePoolNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveNodePoolNodesResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveNodePoolNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "instance_ids", "json");
    }

    if (!$dara.isNull(tmpReq.nodes)) {
      request.nodesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.nodes, "nodes", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      query["concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.drainNode)) {
      query["drain_node"] = request.drainNode;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["instance_ids"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.nodesShrink)) {
      query["nodes"] = request.nodesShrink;
    }

    if (!$dara.isNull(request.releaseNode)) {
      query["release_node"] = request.releaseNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveNodePoolNodes",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}/nodes`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveNodePoolNodesResponse>(await this.callApi(params, req, runtime), new $_model.RemoveNodePoolNodesResponse({}));
  }

  /**
   * Removes nodes from a node pool.
   * 
   * @remarks
   *   When you remove a node, the pods on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours.
   * *   The operation may have unexpected risks. Back up the data before you perform this operation.
   * *   Nodes remain in the Unschedulable state when they are being removed.
   * *   The system removes only worker nodes. It does not remove master nodes.
   * *   Even if you set the `release_node` parameter to `true`, subscription nodes are not released. You must release the subscription nodes in the [ECS console](https://ecs.console.aliyun.com/) after you remove the nodes.
   * 
   * @param request - RemoveNodePoolNodesRequest
   * @returns RemoveNodePoolNodesResponse
   */
  async removeNodePoolNodes(ClusterId: string, NodepoolId: string, request: $_model.RemoveNodePoolNodesRequest): Promise<$_model.RemoveNodePoolNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeNodePoolNodesWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * Repairs a node pool.
   * 
   * @param request - RepairClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RepairClusterNodePoolResponse
   */
  async repairClusterNodePoolWithOptions(clusterId: string, nodepoolId: string, request: $_model.RepairClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RepairClusterNodePoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRestart)) {
      body["auto_restart"] = request.autoRestart;
    }

    if (!$dara.isNull(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.operations)) {
      body["operations"] = request.operations;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RepairClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodepoolId)}/repair`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RepairClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.RepairClusterNodePoolResponse({}));
  }

  /**
   * Repairs a node pool.
   * 
   * @param request - RepairClusterNodePoolRequest
   * @returns RepairClusterNodePoolResponse
   */
  async repairClusterNodePool(clusterId: string, nodepoolId: string, request: $_model.RepairClusterNodePoolRequest): Promise<$_model.RepairClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.repairClusterNodePoolWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * You can call the ResumeComponentUpgrade operation to resume the update of a component.
   * 
   * @deprecated OpenAPI ResumeComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeComponentUpgradeResponse
   */
  // Deprecated
  async resumeComponentUpgradeWithOptions(clusterid: string, componentid: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeComponentUpgradeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeComponentUpgrade",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterid)}/components/${$dara.URL.percentEncode(componentid)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ResumeComponentUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.ResumeComponentUpgradeResponse({}));
  }

  /**
   * You can call the ResumeComponentUpgrade operation to resume the update of a component.
   * 
   * @deprecated OpenAPI ResumeComponentUpgrade is deprecated
   * @returns ResumeComponentUpgradeResponse
   */
  // Deprecated
  async resumeComponentUpgrade(clusterid: string, componentid: string): Promise<$_model.ResumeComponentUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeComponentUpgradeWithOptions(clusterid, componentid, headers, runtime);
  }

  /**
   * Resumes a task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskResponse
   */
  async resumeTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTask",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ResumeTaskResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTaskResponse({}));
  }

  /**
   * Resumes a task.
   * @returns ResumeTaskResponse
   */
  async resumeTask(taskId: string): Promise<$_model.ResumeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeUpgradeClusterResponse
   */
  // Deprecated
  async resumeUpgradeClusterWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeUpgradeClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeUpgradeCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/upgrade/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.ResumeUpgradeClusterResponse>(await this.callApi(params, req, runtime), new $_model.ResumeUpgradeClusterResponse({}));
  }

  /**
   * You can call the ResumeUpgradeCluster operation to resume the update of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   * @returns ResumeUpgradeClusterResponse
   */
  // Deprecated
  async resumeUpgradeCluster(ClusterId: string): Promise<$_model.ResumeUpgradeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeUpgradeClusterWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the RevokeK8sClusterKubeConfig operation to revoke the kubeconfig file of a cluster that belongs to the current Alibaba Cloud account or RAM user. After the kubeconfig file is revoked, the cluster generates a new kubeconfig file, and the original kubeconfig file becomes invalid.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeK8sClusterKubeConfigResponse
   */
  async revokeK8sClusterKubeConfigWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeK8sClusterKubeConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeK8sClusterKubeConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${$dara.URL.percentEncode(ClusterId)}/certs`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeK8sClusterKubeConfigResponse>(await this.callApi(params, req, runtime), new $_model.RevokeK8sClusterKubeConfigResponse({}));
  }

  /**
   * You can call the RevokeK8sClusterKubeConfig operation to revoke the kubeconfig file of a cluster that belongs to the current Alibaba Cloud account or RAM user. After the kubeconfig file is revoked, the cluster generates a new kubeconfig file, and the original kubeconfig file becomes invalid.
   * @returns RevokeK8sClusterKubeConfigResponse
   */
  async revokeK8sClusterKubeConfig(ClusterId: string): Promise<$_model.RevokeK8sClusterKubeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeK8sClusterKubeConfigWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Container Intelligence Service (CIS) provides a variety of cluster check capabilities to allow you to perform cluster update check, cluster migration check, component installation check, component update check, and node pool check. A precheck is automatically triggered before an update, migration, or installation is performed. You can perform changes only if the cluster passes the precheck. You can also manually call the RunClusterCheck operation to initiate cluster checks. We recommend that you periodically check and maintain your cluster to mitigate potential risks.
   * 
   * @param request - RunClusterCheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunClusterCheckResponse
   */
  async runClusterCheckWithOptions(clusterId: string, request: $_model.RunClusterCheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunClusterCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.target)) {
      body["target"] = request.target;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunClusterCheck",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/checks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunClusterCheckResponse>(await this.callApi(params, req, runtime), new $_model.RunClusterCheckResponse({}));
  }

  /**
   * Container Intelligence Service (CIS) provides a variety of cluster check capabilities to allow you to perform cluster update check, cluster migration check, component installation check, component update check, and node pool check. A precheck is automatically triggered before an update, migration, or installation is performed. You can perform changes only if the cluster passes the precheck. You can also manually call the RunClusterCheck operation to initiate cluster checks. We recommend that you periodically check and maintain your cluster to mitigate potential risks.
   * 
   * @param request - RunClusterCheckRequest
   * @returns RunClusterCheckResponse
   */
  async runClusterCheck(clusterId: string, request: $_model.RunClusterCheckRequest): Promise<$_model.RunClusterCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runClusterCheckWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Triggers a cluster inspection and generates a report.
   * 
   * @param request - RunClusterInspectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunClusterInspectResponse
   */
  async runClusterInspectWithOptions(clusterId: string, request: $_model.RunClusterInspectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunClusterInspectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunClusterInspect",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectReports`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunClusterInspectResponse>(await this.callApi(params, req, runtime), new $_model.RunClusterInspectResponse({}));
  }

  /**
   * Triggers a cluster inspection and generates a report.
   * 
   * @param request - RunClusterInspectRequest
   * @returns RunClusterInspectResponse
   */
  async runClusterInspect(clusterId: string, request: $_model.RunClusterInspectRequest): Promise<$_model.RunClusterInspectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runClusterInspectWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * 扩容Kubernetes集群
   * 
   * @deprecated OpenAPI ScaleCluster is deprecated
   * 
   * @param request - ScaleClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleClusterResponse
   */
  // Deprecated
  async scaleClusterWithOptions(ClusterId: string, request: $_model.ScaleClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    if (!$dara.isNull(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!$dara.isNull(request.disableRollback)) {
      body["disable_rollback"] = request.disableRollback;
    }

    if (!$dara.isNull(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!$dara.isNull(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!$dara.isNull(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!$dara.isNull(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!$dara.isNull(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!$dara.isNull(request.workerDataDisk)) {
      body["worker_data_disk"] = request.workerDataDisk;
    }

    if (!$dara.isNull(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!$dara.isNull(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!$dara.isNull(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!$dara.isNull(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!$dara.isNull(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!$dara.isNull(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!$dara.isNull(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleClusterResponse>(await this.callApi(params, req, runtime), new $_model.ScaleClusterResponse({}));
  }

  /**
   * 扩容Kubernetes集群
   * 
   * @deprecated OpenAPI ScaleCluster is deprecated
   * 
   * @param request - ScaleClusterRequest
   * @returns ScaleClusterResponse
   */
  // Deprecated
  async scaleCluster(ClusterId: string, request: $_model.ScaleClusterRequest): Promise<$_model.ScaleClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Scales out a node pool.
   * 
   * @param request - ScaleClusterNodePoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.ScaleClusterNodePoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleClusterNodePoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.ScaleClusterNodePoolResponse({}));
  }

  /**
   * Scales out a node pool.
   * 
   * @param request - ScaleClusterNodePoolRequest
   * @returns ScaleClusterNodePoolResponse
   */
  async scaleClusterNodePool(ClusterId: string, NodepoolId: string, request: $_model.ScaleClusterNodePoolRequest): Promise<$_model.ScaleClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleClusterNodePoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

  /**
   * You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   * 
   * @remarks
   * *
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   * 
   * @param request - ScaleOutClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleOutClusterResponse
   */
  async scaleOutClusterWithOptions(ClusterId: string, request: $_model.ScaleOutClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleOutClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudMonitorFlags)) {
      body["cloud_monitor_flags"] = request.cloudMonitorFlags;
    }

    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    if (!$dara.isNull(request.cpuPolicy)) {
      body["cpu_policy"] = request.cpuPolicy;
    }

    if (!$dara.isNull(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!$dara.isNull(request.keyPair)) {
      body["key_pair"] = request.keyPair;
    }

    if (!$dara.isNull(request.loginPassword)) {
      body["login_password"] = request.loginPassword;
    }

    if (!$dara.isNull(request.rdsInstances)) {
      body["rds_instances"] = request.rdsInstances;
    }

    if (!$dara.isNull(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taints)) {
      body["taints"] = request.taints;
    }

    if (!$dara.isNull(request.userData)) {
      body["user_data"] = request.userData;
    }

    if (!$dara.isNull(request.vswitchIds)) {
      body["vswitch_ids"] = request.vswitchIds;
    }

    if (!$dara.isNull(request.workerAutoRenew)) {
      body["worker_auto_renew"] = request.workerAutoRenew;
    }

    if (!$dara.isNull(request.workerAutoRenewPeriod)) {
      body["worker_auto_renew_period"] = request.workerAutoRenewPeriod;
    }

    if (!$dara.isNull(request.workerDataDisks)) {
      body["worker_data_disks"] = request.workerDataDisks;
    }

    if (!$dara.isNull(request.workerInstanceChargeType)) {
      body["worker_instance_charge_type"] = request.workerInstanceChargeType;
    }

    if (!$dara.isNull(request.workerInstanceTypes)) {
      body["worker_instance_types"] = request.workerInstanceTypes;
    }

    if (!$dara.isNull(request.workerPeriod)) {
      body["worker_period"] = request.workerPeriod;
    }

    if (!$dara.isNull(request.workerPeriodUnit)) {
      body["worker_period_unit"] = request.workerPeriodUnit;
    }

    if (!$dara.isNull(request.workerSystemDiskCategory)) {
      body["worker_system_disk_category"] = request.workerSystemDiskCategory;
    }

    if (!$dara.isNull(request.workerSystemDiskSize)) {
      body["worker_system_disk_size"] = request.workerSystemDiskSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleOutCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleOutClusterResponse>(await this.callApi(params, req, runtime), new $_model.ScaleOutClusterResponse({}));
  }

  /**
   * You can call the ScaleOutCluster operation to scale out a cluster by cluster ID.
   * 
   * @remarks
   * *
   * ****The ScaleOutCluster API operation is phased out. You must call the node pool-related API operations to manage nodes. If you want to add worker nodes to a Container Service for Kubernetes (ACK) cluster, call the ScaleClusterNodePool API operation. For more information, see [ScaleClusterNodePool](https://help.aliyun.com/document_detail/184928.html).
   * 
   * @param request - ScaleOutClusterRequest
   * @returns ScaleOutClusterResponse
   */
  async scaleOutCluster(ClusterId: string, request: $_model.ScaleOutClusterRequest): Promise<$_model.ScaleOutClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Scans for vulnerabilities in a Container Service for Kubernetes (ACK) cluster, including workload vulnerabilities, third-party software vulnerabilities, CVE vulnerabilities, WebCMS vulnerabilities, and Windows vulnerabilities. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanClusterVulsResponse
   */
  async scanClusterVulsWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScanClusterVulsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanClusterVuls",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/vuls/scan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanClusterVulsResponse>(await this.callApi(params, req, runtime), new $_model.ScanClusterVulsResponse({}));
  }

  /**
   * Scans for vulnerabilities in a Container Service for Kubernetes (ACK) cluster, including workload vulnerabilities, third-party software vulnerabilities, CVE vulnerabilities, WebCMS vulnerabilities, and Windows vulnerabilities. We recommend that you scan your cluster on a regular basis to ensure cluster security.
   * @returns ScanClusterVulsResponse
   */
  async scanClusterVuls(clusterId: string): Promise<$_model.ScanClusterVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * Activates the specified alert rule(s).
   * 
   * @param request - StartAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAlertResponse
   */
  async startAlertWithOptions(ClusterId: string, request: $_model.StartAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartAlertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!$dara.isNull(request.alertRuleName)) {
      body["alert_rule_name"] = request.alertRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${$dara.URL.percentEncode(ClusterId)}/alert_rule/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAlertResponse>(await this.callApi(params, req, runtime), new $_model.StartAlertResponse({}));
  }

  /**
   * Activates the specified alert rule(s).
   * 
   * @param request - StartAlertRequest
   * @returns StartAlertResponse
   */
  async startAlert(ClusterId: string, request: $_model.StartAlertRequest): Promise<$_model.StartAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   * 
   * @param request - StopAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAlertResponse
   */
  async stopAlertWithOptions(ClusterId: string, request: $_model.StopAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopAlertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!$dara.isNull(request.alertRuleName)) {
      body["alert_rule_name"] = request.alertRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${$dara.URL.percentEncode(ClusterId)}/alert_rule/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAlertResponse>(await this.callApi(params, req, runtime), new $_model.StopAlertResponse({}));
  }

  /**
   * You can call the StopAlert operation to disable an alert rule or an alert rule set in the alert center of Container Service for Kubernetes (ACK).
   * 
   * @param request - StopAlertRequest
   * @returns StopAlertResponse
   */
  async stopAlert(ClusterId: string, request: $_model.StopAlertRequest): Promise<$_model.StopAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncClusterNodePoolResponse
   */
  async syncClusterNodePoolWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SyncClusterNodePoolResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncClusterNodePool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/sync_nodepools`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncClusterNodePoolResponse>(await this.callApi(params, req, runtime), new $_model.SyncClusterNodePoolResponse({}));
  }

  /**
   * Synchronizes the information about a node pool, including the metadata and node information of the node pool.
   * @returns SyncClusterNodePoolResponse
   */
  async syncClusterNodePool(ClusterId: string): Promise<$_model.SyncClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncClusterNodePoolWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can add labels in key-value pairs to clusters. This allows cluster developers or O\\&M engineers to classify and manage clusters in a more flexible manner. This also meets the requirements for monitoring, cost analysis, and tenant isolation. You can call the TagResources operation to add labels to a cluster.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["region_id"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resource_ids"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resource_type"] = request.resourceType;
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
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * You can add labels in key-value pairs to clusters. This allows cluster developers or O\\&M engineers to classify and manage clusters in a more flexible manner. This also meets the requirements for monitoring, cost analysis, and tenant isolation. You can call the TagResources operation to add labels to a cluster.
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
   * Uninstalls components that you no longer need from a cluster. You must specify the name of the components and specify whether to release associated Alibaba Cloud resources from the cluster.
   * 
   * @param request - UnInstallClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddonsWithOptions(ClusterId: string, request: $_model.UnInstallClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnInstallClusterAddonsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.addons),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnInstallClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnInstallClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.UnInstallClusterAddonsResponse({}));
  }

  /**
   * Uninstalls components that you no longer need from a cluster. You must specify the name of the components and specify whether to release associated Alibaba Cloud resources from the cluster.
   * 
   * @param request - UnInstallClusterAddonsRequest
   * @returns UnInstallClusterAddonsResponse
   */
  async unInstallClusterAddons(ClusterId: string, request: $_model.UnInstallClusterAddonsRequest): Promise<$_model.UnInstallClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unInstallClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * If you no longer need the labels (key-value pairs) of a cluster, you can call the UntagResources operation to delete the labels.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "resource_ids", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "tag_keys", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["region_id"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["resource_ids"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resource_type"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["tag_keys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * If you no longer need the labels (key-value pairs) of a cluster, you can call the UntagResources operation to delete the labels.
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
   * You can call the UpdateClusterAuditLogConfig operation to enable or disable the audit log feature in a Container Service for Kubernetes (ACK) cluster and update the audit log configuration. This operation also allows you to record requests to the Kubernetes API and the responses, which can be used to trace cluster operation history and troubleshoot cluster issues.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and pricing of [Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing).
   * 
   * @param request - UpdateClusterAuditLogConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterAuditLogConfigResponse
   */
  async updateClusterAuditLogConfigWithOptions(clusterid: string, request: $_model.UpdateClusterAuditLogConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterAuditLogConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disable)) {
      body["disable"] = request.disable;
    }

    if (!$dara.isNull(request.slsProjectName)) {
      body["sls_project_name"] = request.slsProjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterAuditLogConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterid)}/audit_log`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterAuditLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterAuditLogConfigResponse({}));
  }

  /**
   * You can call the UpdateClusterAuditLogConfig operation to enable or disable the audit log feature in a Container Service for Kubernetes (ACK) cluster and update the audit log configuration. This operation also allows you to record requests to the Kubernetes API and the responses, which can be used to trace cluster operation history and troubleshoot cluster issues.
   * 
   * @remarks
   * Before you call this operation, ensure that you understand the billing methods and pricing of [Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing).
   * 
   * @param request - UpdateClusterAuditLogConfigRequest
   * @returns UpdateClusterAuditLogConfigResponse
   */
  async updateClusterAuditLogConfig(clusterid: string, request: $_model.UpdateClusterAuditLogConfigRequest): Promise<$_model.UpdateClusterAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateClusterAuditLogConfigWithOptions(clusterid, request, headers, runtime);
  }

  /**
   * Modifies cluster inspection configurations.
   * 
   * @param request - UpdateClusterInspectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterInspectConfigResponse
   */
  async updateClusterInspectConfigWithOptions(clusterId: string, request: $_model.UpdateClusterInspectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterInspectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disabledCheckItems)) {
      body["disabledCheckItems"] = request.disabledCheckItems;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      body["scheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterInspectConfig",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/inspectConfig`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterInspectConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterInspectConfigResponse({}));
  }

  /**
   * Modifies cluster inspection configurations.
   * 
   * @param request - UpdateClusterInspectConfigRequest
   * @returns UpdateClusterInspectConfigResponse
   */
  async updateClusterInspectConfig(clusterId: string, request: $_model.UpdateClusterInspectConfigRequest): Promise<$_model.UpdateClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateClusterInspectConfigWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * You can call the UpdateContactGroupForAlert operation to specify a contact group for an alert rule in an ACK cluster.
   * 
   * @param request - UpdateContactGroupForAlertRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlertWithOptions(ClusterId: string, request: $_model.UpdateContactGroupForAlertRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContactGroupForAlertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertRuleGroupName)) {
      body["alert_rule_group_name"] = request.alertRuleGroupName;
    }

    if (!$dara.isNull(request.contactGroupIds)) {
      body["contact_group_ids"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.crName)) {
      body["cr_name"] = request.crName;
    }

    if (!$dara.isNull(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContactGroupForAlert",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/alert/${$dara.URL.percentEncode(ClusterId)}/alert_rule/contact_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContactGroupForAlertResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContactGroupForAlertResponse({}));
  }

  /**
   * You can call the UpdateContactGroupForAlert operation to specify a contact group for an alert rule in an ACK cluster.
   * 
   * @param request - UpdateContactGroupForAlertRequest
   * @returns UpdateContactGroupForAlertResponse
   */
  async updateContactGroupForAlert(ClusterId: string, request: $_model.UpdateContactGroupForAlertRequest): Promise<$_model.UpdateContactGroupForAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContactGroupForAlertWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Modifies the log configurations of control plane components. The configurations include the log retention period and components whose logs that you want to collect. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube-apiserver, kube-scheduler, Kubernetes controller manager, and cloud controller manager (CCM).
   * 
   * @param request - UpdateControlPlaneLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateControlPlaneLogResponse
   */
  async updateControlPlaneLogWithOptions(ClusterId: string, request: $_model.UpdateControlPlaneLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateControlPlaneLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aliuid)) {
      body["aliuid"] = request.aliuid;
    }

    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.logProject)) {
      body["log_project"] = request.logProject;
    }

    if (!$dara.isNull(request.logTtl)) {
      body["log_ttl"] = request.logTtl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateControlPlaneLog",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/controlplanelog`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateControlPlaneLogResponse>(await this.callApi(params, req, runtime), new $_model.UpdateControlPlaneLogResponse({}));
  }

  /**
   * Modifies the log configurations of control plane components. The configurations include the log retention period and components whose logs that you want to collect. Container Service for Kubernetes (ACK) managed clusters can collect the logs of control plane components and deliver the logs to projects in Simple Log Service. These control plane components include Kube-apiserver, kube-scheduler, Kubernetes controller manager, and cloud controller manager (CCM).
   * 
   * @param request - UpdateControlPlaneLogRequest
   * @returns UpdateControlPlaneLogResponse
   */
  async updateControlPlaneLog(ClusterId: string, request: $_model.UpdateControlPlaneLogRequest): Promise<$_model.UpdateControlPlaneLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateControlPlaneLogWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   * 
   * @remarks
   *   You can call this operation only with an Alibaba Cloud account.
   * *   If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   * 
   * @param request - UpdateK8sClusterUserConfigExpireRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sClusterUserConfigExpireResponse
   */
  async updateK8sClusterUserConfigExpireWithOptions(ClusterId: string, request: $_model.UpdateK8sClusterUserConfigExpireRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sClusterUserConfigExpireResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireHour)) {
      body["expire_hour"] = request.expireHour;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sClusterUserConfigExpire",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/k8s/${$dara.URL.percentEncode(ClusterId)}/user_config/expire`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateK8sClusterUserConfigExpireResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sClusterUserConfigExpireResponse({}));
  }

  /**
   * Sets the validity period of a kubeconfig file used by a Resource Access Management (RAM) user or RAM role to connect to a Container Service for Kubernetes (ACK) cluster. The validity period ranges from 1 to 876,000 hours. You can call this API operation when you customize configurations by using an Alibaba Cloud account. The default validity period of a kubeconfig file is three years.
   * 
   * @remarks
   *   You can call this operation only with an Alibaba Cloud account.
   * *   If the kubeconfig file used by your cluster is revoked, the custom validity period of the kubeconfig file is reset. In this case, you need to call this API operation to reconfigure the validity period of the kubeconfig file.
   * 
   * @param request - UpdateK8sClusterUserConfigExpireRequest
   * @returns UpdateK8sClusterUserConfigExpireResponse
   */
  async updateK8sClusterUserConfigExpire(ClusterId: string, request: $_model.UpdateK8sClusterUserConfigExpireRequest): Promise<$_model.UpdateK8sClusterUserConfigExpireResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sClusterUserConfigExpireWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates the deletion protection status of the specified resources. You can enable or disable deletion protection for namespaces and Services. You can call this operation to enable deletion protection for namespaces or Services that involve businesses-critical and sensitive data to avoid incurring maintenance costs caused by accidental namespace or Service deletion.
   * 
   * @param request - UpdateResourcesDeleteProtectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourcesDeleteProtectionResponse
   */
  async updateResourcesDeleteProtectionWithOptions(ClusterId: string, request: $_model.UpdateResourcesDeleteProtectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourcesDeleteProtectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.namespace)) {
      body["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resource_type"] = request.resourceType;
    }

    if (!$dara.isNull(request.resources)) {
      body["resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourcesDeleteProtection",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/resources/protection`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourcesDeleteProtectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourcesDeleteProtectionResponse({}));
  }

  /**
   * Updates the deletion protection status of the specified resources. You can enable or disable deletion protection for namespaces and Services. You can call this operation to enable deletion protection for namespaces or Services that involve businesses-critical and sensitive data to avoid incurring maintenance costs caused by accidental namespace or Service deletion.
   * 
   * @param request - UpdateResourcesDeleteProtectionRequest
   * @returns UpdateResourcesDeleteProtectionResponse
   */
  async updateResourcesDeleteProtection(ClusterId: string, request: $_model.UpdateResourcesDeleteProtectionRequest): Promise<$_model.UpdateResourcesDeleteProtectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourcesDeleteProtectionWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates the configurations of an orchestration template. An orchestration template defines and describes a group of Container Service for Kubernetes (ACK) resources. An orchestration template describes the configurations of an application or how an application runs in a declarative manner.
   * 
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(TemplateId: string, request: $_model.UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    if (!$dara.isNull(request.templateType)) {
      body["template_type"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * Updates the configurations of an orchestration template. An orchestration template defines and describes a group of Container Service for Kubernetes (ACK) resources. An orchestration template describes the configurations of an application or how an application runs in a declarative manner.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(TemplateId: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   You can update the permissions of a RAM user or RAM role on a cluster by using full update or incremental update. If you use full update, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation. If you use incremental update, you can grant permissions to or revoke permissions from the RAM user or RAM role on the cluster. In this case, only the permissions that you specify in the request parameters when you call the operation are granted or revoked, other permissions of the RAM user or RAM role on the cluster are not affected.
   * 
   * @param request - UpdateUserPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserPermissionsResponse
   */
  async updateUserPermissionsWithOptions(uid: string, request: $_model.UpdateUserPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserPermissionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mode)) {
      query["mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUserPermissions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/permissions/users/${$dara.URL.percentEncode(uid)}/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserPermissionsResponse({}));
  }

  /**
   * Updates the role-based access control (RBAC) permissions of a Resource Access Management (RAM) user or RAM role. By default, you do not have the RBAC permissions on a Container Service for Kubernetes (ACK) cluster if you are not the cluster owner or you are not using an Alibaba Cloud account. You can call this operation to specify the resources that can be accessed, permission scope, and predefined roles. This helps you better manage the access control on resources in ACK clusters.
   * 
   * @remarks
   * *Precautions**:
   * *   You can update the permissions of a RAM user or RAM role on a cluster by using full update or incremental update. If you use full update, the existing permissions of the RAM user or RAM role on the cluster are overwritten. You must specify all the permissions that you want to grant to the RAM user or RAM role in the request parameters when you call the operation. If you use incremental update, you can grant permissions to or revoke permissions from the RAM user or RAM role on the cluster. In this case, only the permissions that you specify in the request parameters when you call the operation are granted or revoked, other permissions of the RAM user or RAM role on the cluster are not affected.
   * 
   * @param request - UpdateUserPermissionsRequest
   * @returns UpdateUserPermissionsResponse
   */
  async updateUserPermissions(uid: string, request: $_model.UpdateUserPermissionsRequest): Promise<$_model.UpdateUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserPermissionsWithOptions(uid, request, headers, runtime);
  }

  /**
   * Outdated Kubernetes versions may have security and stability issues. We recommend that you update the Kubernetes version of your cluster at the earliest opportunity to enjoy the new features of the new Kubernetes version. You can call the UpgradeCluster operation to manually upgrade a cluster.
   * 
   * @remarks
   * After successfully calling the UpgradeCluster interface, this API returns the `task_id` of the upgrade task. You can manage this operation task by calling the following task APIs:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html) 
   * - [Call ResumeTask to resume a task that has been paused](https://help.aliyun.com/document_detail/2667987.html) 
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html)
   * 
   * @param request - UpgradeClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterResponse
   */
  async upgradeClusterWithOptions(ClusterId: string, request: $_model.UpgradeClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.componentName)) {
      body["component_name"] = request.componentName;
    }

    if (!$dara.isNull(request.masterOnly)) {
      body["master_only"] = request.masterOnly;
    }

    if (!$dara.isNull(request.nextVersion)) {
      body["next_version"] = request.nextVersion;
    }

    if (!$dara.isNull(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeCluster",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/api/v2/clusters/${$dara.URL.percentEncode(ClusterId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClusterResponse({}));
  }

  /**
   * Outdated Kubernetes versions may have security and stability issues. We recommend that you update the Kubernetes version of your cluster at the earliest opportunity to enjoy the new features of the new Kubernetes version. You can call the UpgradeCluster operation to manually upgrade a cluster.
   * 
   * @remarks
   * After successfully calling the UpgradeCluster interface, this API returns the `task_id` of the upgrade task. You can manage this operation task by calling the following task APIs:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html) 
   * - [Call ResumeTask to resume a task that has been paused](https://help.aliyun.com/document_detail/2667987.html) 
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html)
   * 
   * @param request - UpgradeClusterRequest
   * @returns UpgradeClusterResponse
   */
  async upgradeCluster(ClusterId: string, request: $_model.UpgradeClusterRequest): Promise<$_model.UpgradeClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   * 
   * @param request - UpgradeClusterAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddonsWithOptions(ClusterId: string, request: $_model.UpgradeClusterAddonsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterAddonsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClusterAddons",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/components/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClusterAddonsResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClusterAddonsResponse({}));
  }

  /**
   * Updates cluster components to use new features and patch vulnerabilities. You must update cluster components one after one and update a component only after the previous one is successfully updated. Before you update a component, we recommend that you read the update notes for each component. Cluster component updates may affect your businesses. Assess the impact, back up data, and perform the update during off-peak hours.
   * 
   * @param request - UpgradeClusterAddonsRequest
   * @returns UpgradeClusterAddonsResponse
   */
  async upgradeClusterAddons(ClusterId: string, request: $_model.UpgradeClusterAddonsRequest): Promise<$_model.UpgradeClusterAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterAddonsWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @remarks
   * This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @param request - UpgradeClusterNodepoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.UpgradeClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterNodepoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      body["image_id"] = request.imageId;
    }

    if (!$dara.isNull(request.kubernetesVersion)) {
      body["kubernetes_version"] = request.kubernetesVersion;
    }

    if (!$dara.isNull(request.nodeNames)) {
      body["node_names"] = request.nodeNames;
    }

    if (!$dara.isNull(request.rollingPolicy)) {
      body["rolling_policy"] = request.rollingPolicy;
    }

    if (!$dara.isNull(request.runtimeType)) {
      body["runtime_type"] = request.runtimeType;
    }

    if (!$dara.isNull(request.runtimeVersion)) {
      body["runtime_version"] = request.runtimeVersion;
    }

    if (!$dara.isNull(request.useReplace)) {
      body["use_replace"] = request.useReplace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeClusterNodepool",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/nodepools/${$dara.URL.percentEncode(NodepoolId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeClusterNodepoolResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeClusterNodepoolResponse({}));
  }

  /**
   * You can call the UpgradeClusterNodepool operation to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @remarks
   * This operation allows you to update the Kubernetes version, OS version, or container runtime version of the nodes in a node pool.
   * 
   * @param request - UpgradeClusterNodepoolRequest
   * @returns UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepool(ClusterId: string, NodepoolId: string, request: $_model.UpgradeClusterNodepoolRequest): Promise<$_model.UpgradeClusterNodepoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeClusterNodepoolWithOptions(ClusterId, NodepoolId, request, headers, runtime);
  }

}
