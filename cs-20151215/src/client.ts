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
      'us-west-1': "cs.us-west-1.aliyuncs.com",
      'us-southeast-1': "cs.us-southeast-1.aliyuncs.com",
      'us-east-1': "cs.us-east-1.aliyuncs.com",
      'na-south-1': "cs.na-south-1.aliyuncs.com",
      'me-east-1': "cs.me-east-1.aliyuncs.com",
      'me-central-1': "cs.me-central-1.aliyuncs.com",
      'eu-west-1': "cs.eu-west-1.aliyuncs.com",
      'eu-central-1': "cs.eu-central-1.aliyuncs.com",
      'cn-zhengzhou-jva': "cs.cn-zhengzhou-jva.aliyuncs.com",
      'cn-zhangjiakou': "cs.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu-gic-1': "cs.cn-wulanchabu-gic-1.aliyuncs.com",
      'cn-wulanchabu': "cs.cn-wulanchabu.aliyuncs.com",
      'cn-wuhan-lr': "cs.cn-wuhan-lr.aliyuncs.com",
      'cn-shenzhen-finance-1': "cs.cn-shenzhen-finance-1.aliyuncs.com",
      'cn-shenzhen': "cs.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "cs.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "cs.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "cs.cn-qingdao.aliyuncs.com",
      'cn-nanjing': "cs.cn-nanjing.aliyuncs.com",
      'cn-huhehaote': "cs.cn-huhehaote.aliyuncs.com",
      'cn-hongkong': "cs.cn-hongkong.aliyuncs.com",
      'cn-heyuan-acdr-1': "cs.cn-heyuan-acdr-1.aliyuncs.com",
      'cn-heyuan': "cs.cn-heyuan.aliyuncs.com",
      'cn-hangzhou-finance': "cs.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou': "cs.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "cs.cn-guangzhou.aliyuncs.com",
      'cn-fuzhou': "cs.cn-fuzhou.aliyuncs.com",
      'cn-chengdu': "cs.cn-chengdu.aliyuncs.com",
      'cn-beijing-finance-1': "cs.cn-beijing-finance-1.aliyuncs.com",
      'cn-beijing': "cs.cn-beijing.aliyuncs.com",
      'ap-southeast-7': "cs.ap-southeast-7.aliyuncs.com",
      'ap-southeast-5': "cs.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "cs.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "cs.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "cs.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "cs.ap-south-1.aliyuncs.com",
      'ap-northeast-2': "cs.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "cs.ap-northeast-1.aliyuncs.com",
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
   * Adds existing Elastic Compute Service (ECS) instances to a Container Service for Kubernetes (ACK) cluster. You can call the AttachInstances operation to add ECS instances to an ACK cluster as worker nodes after purchasing the instances, or to re-add node instances to a node pool after they are removed.
   * 
   * @remarks
   * Before you invoke this operation, read [Limits](https://help.aliyun.com/document_detail/86919.html) to make sure that the ECS instances to be added meet the requirements.
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
   * Adds existing Elastic Compute Service (ECS) instances to a Container Service for Kubernetes (ACK) cluster. You can call the AttachInstances operation to add ECS instances to an ACK cluster as worker nodes after purchasing the instances, or to re-add node instances to a node pool after they are removed.
   * 
   * @remarks
   * Before you invoke this operation, read [Limits](https://help.aliyun.com/document_detail/86919.html) to make sure that the ECS instances to be added meet the requirements.
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
   * Adds existing ECS instances to a node pool in an ACK cluster. You can call this operation to add existing ECS instances as worker nodes to an ACK cluster or to re-add node instances to a node pool after they have been removed.
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
   * Adds existing ECS instances to a node pool in an ACK cluster. You can call this operation to add existing ECS instances as worker nodes to an ACK cluster or to re-add node instances to a node pool after they have been removed.
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
   * Cancels the upgrade of an ACK cluster that is in the upgrading state.
   * 
   * @deprecated OpenAPI CancelClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelClusterUpgradeResponse
   */
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
   * Cancels the upgrade of an ACK cluster that is in the upgrading state.
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
   * Cancels the upgrade of a cluster component.
   * 
   * @deprecated OpenAPI CancelComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelComponentUpgradeResponse
   */
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
   * Cancels the upgrade of a cluster component.
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
   * Cancels an existing but unexecuted automated O&M task execution plan by calling CancelOperationPlan.
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
   * Cancels an existing but unexecuted automated O&M task execution plan by calling CancelOperationPlan.
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
   * Queries the log configuration of control plane components for an ACK managed cluster. Control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager. You can call the CheckControlPlaneLogEnable operation to query the current log configuration of control plane components, including the log retention period and the components from which logs are collected.
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
   * Queries the log configuration of control plane components for an ACK managed cluster. Control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, and Cloud Controller Manager. You can call the CheckControlPlaneLogEnable operation to query the current log configuration of control plane components, including the log retention period and the components from which logs are collected.
   * @returns CheckControlPlaneLogEnableResponse
   */
  async checkControlPlaneLogEnable(ClusterId: string): Promise<$_model.CheckControlPlaneLogEnableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkControlPlaneLogEnableWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Checks whether the current service account has been granted the specified service role permissions. Container Service for Kubernetes (ACK) can call other cloud services (such as ECS, OSS, NAS, and SLB) that are associated with service roles only after the corresponding role permissions are granted.
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
   * Checks whether the current service account has been granted the specified service role permissions. Container Service for Kubernetes (ACK) can call other cloud services (such as ECS, OSS, NAS, and SLB) that are associated with service roles only after the corresponding role permissions are granted.
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
   * Cleans up KubeConfig credentials and RBAC permissions that have been issued to a specified user in a specified cluster. You can call this operation to revoke authorization for KubeConfig credentials that pose security risks.
   * 
   * @remarks
   * > 1. You must have the permission to manage Container Service for Kubernetes (ACK) (AliyunCSFullAccess). 
   * > 2. Cleaning up permissions of an Alibaba Cloud account is not supported.
   * > 3. Cleaning up the permissions of the user who performs this operation is not supported.
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
   * Cleans up KubeConfig credentials and RBAC permissions that have been issued to a specified user in a specified cluster. You can call this operation to revoke authorization for KubeConfig credentials that pose security risks.
   * 
   * @remarks
   * > 1. You must have the permission to manage Container Service for Kubernetes (ACK) (AliyunCSFullAccess). 
   * > 2. Cleaning up permissions of an Alibaba Cloud account is not supported.
   * > 3. Cleaning up the permissions of the user who performs this operation is not supported.
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
   * Cleans up KubeConfig credentials and revokes RBAC permissions for a specified user. If you want to clean up KubeConfig credentials and revoke authorization for risky users such as those who have left the organization or whose accounts have been frozen, call CleanUserPermissions to clean up the issued KubeConfig credentials and RBAC permissions for the specified user.
   * 
   * @remarks
   * >- You must have full access permissions on Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
   * >- Cleaning up permissions of an Alibaba Cloud account is not supported.
   * >- Cleaning up the permissions of the user who performs this operation is not supported.
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
   * Cleans up KubeConfig credentials and revokes RBAC permissions for a specified user. If you want to clean up KubeConfig credentials and revoke authorization for risky users such as those who have left the organization or whose accounts have been frozen, call CleanUserPermissions to clean up the issued KubeConfig credentials and RBAC permissions for the specified user.
   * 
   * @remarks
   * >- You must have full access permissions on Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
   * >- Cleaning up permissions of an Alibaba Cloud account is not supported.
   * >- Cleaning up the permissions of the user who performs this operation is not supported.
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
   * Creates a self-healing rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * 
   * @param request - CreateAutoRepairPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAutoRepairPolicyResponse
   */
  async createAutoRepairPolicyWithOptions(clusterId: string, request: $_model.CreateAutoRepairPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAutoRepairPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resourceSubType)) {
      body["resource_sub_type"] = request.resourceSubType;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resource_type"] = request.resourceType;
    }

    if (!$dara.isNull(request.rules)) {
      body["rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAutoRepairPolicy",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/auto_repair_policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAutoRepairPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAutoRepairPolicyResponse({}));
  }

  /**
   * Creates a self-healing rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * 
   * @param request - CreateAutoRepairPolicyRequest
   * @returns CreateAutoRepairPolicyResponse
   */
  async createAutoRepairPolicy(clusterId: string, request: $_model.CreateAutoRepairPolicyRequest): Promise<$_model.CreateAutoRepairPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAutoRepairPolicyWithOptions(clusterId, request, headers, runtime);
  }

  /**
   * Creates an elastic scaling configuration that allows the system to automatically increase or decrease compute resources based on the configured scaling rules to meet the workload demands of your cluster. During the creation procedure, you can specify scaling metrics and thresholds, scale-out order, cool-down period, and more.
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
   * Creates an elastic scaling configuration that allows the system to automatically increase or decrease compute resources based on the configured scaling rules to meet the workload demands of your cluster. During the creation procedure, you can specify scaling metrics and thresholds, scale-out order, cool-down period, and more.
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
   * You can create ACK clusters through OpenAPI, including ACK managed clusters, ACK Serverless clusters, ACK Edge clusters, and registered clusters. When creating a cluster, you will configure the cluster information, cluster components, and ACK-related cloud resources.
   * 
   * @remarks
   * ### Generate OpenAPI request parameters through the console
   * When calling the CreateCluster API to create a cluster, if the API call fails due to incorrect request parameter combinations, you can generate the required request parameter combinations through the console. Follow these steps:
   * 1. Log in to the [Container Service management console](https://csnew.console.aliyun.com) and choose **Clusters** in the left navigation pane.
   * 1. On the **Clusters** page, click **Cluster Template**.
   * 1. In the dialog box, select the cluster type to create, click Create, and then configure the cluster information on the cluster configuration page.
   * 1. After the configuration is complete, on the **Confirm Configuration** page, click **Equivalent Code** in the upper-right corner. The dialog box will display the parameter combinations required for creating the cluster, which you can copy and use.
   * >Notice: Starting from July 4, 2026, some request parameters will no longer take effect. For change details and alternative parameter descriptions, see [Announcement on OpenAPI parameter changes and API deprecation for ACK cluster management](https://help.aliyun.com/document_detail/2932733.html).</notice>
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

    if (!$dara.isNull(request.controlPlaneEndpointsConfig)) {
      body["control_plane_endpoints_config"] = request.controlPlaneEndpointsConfig;
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
   * You can create ACK clusters through OpenAPI, including ACK managed clusters, ACK Serverless clusters, ACK Edge clusters, and registered clusters. When creating a cluster, you will configure the cluster information, cluster components, and ACK-related cloud resources.
   * 
   * @remarks
   * ### Generate OpenAPI request parameters through the console
   * When calling the CreateCluster API to create a cluster, if the API call fails due to incorrect request parameter combinations, you can generate the required request parameter combinations through the console. Follow these steps:
   * 1. Log in to the [Container Service management console](https://csnew.console.aliyun.com) and choose **Clusters** in the left navigation pane.
   * 1. On the **Clusters** page, click **Cluster Template**.
   * 1. In the dialog box, select the cluster type to create, click Create, and then configure the cluster information on the cluster configuration page.
   * 1. After the configuration is complete, on the **Confirm Configuration** page, click **Equivalent Code** in the upper-right corner. The dialog box will display the parameter combinations required for creating the cluster, which you can copy and use.
   * >Notice: Starting from July 4, 2026, some request parameters will no longer take effect. For change details and alternative parameter descriptions, see [Announcement on OpenAPI parameter changes and API deprecation for ACK cluster management](https://help.aliyun.com/document_detail/2932733.html).</notice>
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
   * Initiates a cluster diagnosis.
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
   * Initiates a cluster diagnosis.
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
   * Creates a cluster inspection configuration.
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
   * Creates a cluster inspection configuration.
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
   * A node pool is a logical collection of nodes with the same attributes, allowing unified management and O&M of nodes, such as node upgrades and auto scaling. You can further leverage the automated O&M capabilities of node pools to use features such as automatic OS CVE vulnerability patching, automatic faulty node recovery, and automatic kubelet and containerd version upgrades, reducing O&M costs. You can call CreateClusterNodePool to create a node pool for a cluster.
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

    if (!$dara.isNull(request.nodeComponents)) {
      body["node_components"] = request.nodeComponents;
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
   * A node pool is a logical collection of nodes with the same attributes, allowing unified management and O&M of nodes, such as node upgrades and auto scaling. You can further leverage the automated O&M capabilities of node pools to use features such as automatic OS CVE vulnerability patching, automatic faulty node recovery, and automatic kubelet and containerd version upgrades, reducing O&M costs. You can call CreateClusterNodePool to create a node pool for a cluster.
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
   * Creates a trigger for an application.
   * 
   * @deprecated OpenAPI CreateKubernetesTrigger is deprecated
   * 
   * @param request - CreateKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKubernetesTriggerResponse
   */
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
   * Creates a trigger for an application.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can use these templates to automate the deployment and cluster management of resources, such as Pods, Services, Deployments, ConfigMaps, and PersistentVolumes. You can invoke the CreateTemplate operation to create an orchestration template.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can use these templates to automate the deployment and cluster management of resources, such as Pods, Services, Deployments, ConfigMaps, and PersistentVolumes. You can invoke the CreateTemplate operation to create an orchestration template.
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
   * Configures a trigger for a cluster application. The trigger redeploys pods when specified conditions are met.
   * 
   * @remarks
   * > Creating a trigger only supports pod redeployment.
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
   * Configures a trigger for a cluster application. The trigger redeploys pods when specified conditions are met.
   * 
   * @remarks
   * > Creating a trigger only supports pod redeployment.
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
   * Deletes alert contacts from ACK.
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
   * Deletes alert contacts from ACK.
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
   * Delete ACK alert contact group
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
   * Delete ACK alert contact group
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
   * Deletes an automatic fault recovery rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutoRepairPolicyResponse
   */
  async deleteAutoRepairPolicyWithOptions(clusterId: string, policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutoRepairPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutoRepairPolicy",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/auto_repair_policies/${$dara.URL.percentEncode(policyId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutoRepairPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutoRepairPolicyResponse({}));
  }

  /**
   * Deletes an automatic fault recovery rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * @returns DeleteAutoRepairPolicyResponse
   */
  async deleteAutoRepairPolicy(clusterId: string, policyId: string): Promise<$_model.DeleteAutoRepairPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAutoRepairPolicyWithOptions(clusterId, policyId, headers, runtime);
  }

  /**
   * If you no longer need a cluster, delete the cluster and choose whether to delete or retain the associated resources. Before you delete a cluster, manually clean up workloads (Deployments, StatefulSets, Jobs, and CronJobs). Otherwise, the cluster deletion may fail.
   * 
   * @remarks
   * Risk notice:
   * - Subscription ECS instances, Lingjun compute nodes, and other subscription resources in the cluster cannot be subject to automatic release. To avoid unnecessary billing, perform manual release of these resources. For more information, refer to Cluster deletion and node release rules.
   * - Subscription APIServer SLB resources cannot be subject to automatic release. To avoid unnecessary billing, perform manual release of these resources.
   * - VPCs, vSwitches, security groups, and RAM roles that are used by other resources cannot be deleted and are retained by default. Perform manual release of these resources.
   * - Elastic Container Instances (ECIs) created through virtual nodes are subject to automatic release.
   * - Some cloud resources created through the cluster are not subject to automatic release when the cluster is deleted. These resources continue to incur billing after the cluster is deleted. Release or retain them as needed. These resources include: Simple Log Service (SLS) projects automatically created by the cluster, and cloud disks purchased through dynamic storage volumes.
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
   * If you no longer need a cluster, delete the cluster and choose whether to delete or retain the associated resources. Before you delete a cluster, manually clean up workloads (Deployments, StatefulSets, Jobs, and CronJobs). Otherwise, the cluster deletion may fail.
   * 
   * @remarks
   * Risk notice:
   * - Subscription ECS instances, Lingjun compute nodes, and other subscription resources in the cluster cannot be subject to automatic release. To avoid unnecessary billing, perform manual release of these resources. For more information, refer to Cluster deletion and node release rules.
   * - Subscription APIServer SLB resources cannot be subject to automatic release. To avoid unnecessary billing, perform manual release of these resources.
   * - VPCs, vSwitches, security groups, and RAM roles that are used by other resources cannot be deleted and are retained by default. Perform manual release of these resources.
   * - Elastic Container Instances (ECIs) created through virtual nodes are subject to automatic release.
   * - Some cloud resources created through the cluster are not subject to automatic release when the cluster is deleted. These resources continue to incur billing after the cluster is deleted. Release or retain them as needed. These resources include: Simple Log Service (SLS) projects automatically created by the cluster, and cloud disks purchased through dynamic storage volumes.
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
   * Deletes a cluster inspection configuration.
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
   * Deletes a cluster inspection configuration.
   * @returns DeleteClusterInspectConfigResponse
   */
  async deleteClusterInspectConfig(clusterId: string): Promise<$_model.DeleteClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterInspectConfigWithOptions(clusterId, headers, runtime);
  }

  /**
   * Deletes a node pool that is no longer in use. When a node pool is deleted, all pods on the nodes are deleted, which may trigger descheduling. If descheduling cannot be performed, your services may be affected. Make sure that the cluster has sufficient resources for descheduling.
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
   * Deletes a node pool that is no longer in use. When a node pool is deleted, all pods on the nodes are deleted, which may trigger descheduling. If descheduling cannot be performed, your services may be affected. Make sure that the cluster has sufficient resources for descheduling.
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
   * When you no longer need cluster nodes to continue working, you can call the DeleteClusterNodes operation to remove nodes from the cluster. When removing nodes, you can choose whether to simultaneously release the ECS instances and whether to automatically drain the nodes.
   * 
   * @remarks
   * - When removing nodes, use this API or the [Container Service console](https://cs.console.aliyun.com) to perform standardized operations. Do not manually remove nodes by using the `kubectl delete node` command.
   * - Do not directly release nodes, remove instances in the ECS or ESS console (or through related APIs), or allow nodes to be passively released due to the expiration of subscription instances. In these cases, the nodes will be directly shut down and automatically removed from the Container Service management console.
   * - If the node pool has a desired number of nodes configured, the node pool will automatically scale out other instances according to the corresponding configuration to always maintain the node count at the desired number.
   * - Removing nodes involves Pod migration, which may affect your business. Perform this operation during off-peak hours. Unexpected risks may exist during the operation, so back up relevant data in advance.
   * - When removing nodes, ACK performs a drain operation. Ensure that the resources on other nodes in the cluster are sufficient to prevent business Pods from being unable to be scheduled.
   * - Check the node affinity rules and scheduling policies of the Pods on the nodes to be removed to ensure that Pods can still be scheduled to other nodes after node removal.
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
   * When you no longer need cluster nodes to continue working, you can call the DeleteClusterNodes operation to remove nodes from the cluster. When removing nodes, you can choose whether to simultaneously release the ECS instances and whether to automatically drain the nodes.
   * 
   * @remarks
   * - When removing nodes, use this API or the [Container Service console](https://cs.console.aliyun.com) to perform standardized operations. Do not manually remove nodes by using the `kubectl delete node` command.
   * - Do not directly release nodes, remove instances in the ECS or ESS console (or through related APIs), or allow nodes to be passively released due to the expiration of subscription instances. In these cases, the nodes will be directly shut down and automatically removed from the Container Service management console.
   * - If the node pool has a desired number of nodes configured, the node pool will automatically scale out other instances according to the corresponding configuration to always maintain the node count at the desired number.
   * - Removing nodes involves Pod migration, which may affect your business. Perform this operation during off-peak hours. Unexpected risks may exist during the operation, so back up relevant data in advance.
   * - When removing nodes, ACK performs a drain operation. Ensure that the resources on other nodes in the cluster are sufficient to prevent business Pods from being unable to be scheduled.
   * - Check the node affinity rules and scheduling policies of the Pods on the nodes to be removed to ensure that Pods can still be scheduled to other nodes after node removal.
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
   * Deletes an application trigger by trigger ID.
   * 
   * @deprecated OpenAPI DeleteKubernetesTrigger is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKubernetesTriggerResponse
   */
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
   * Deletes an application trigger by trigger ID.
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
   * Deletes a policy rule instance from a specified cluster.
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
   * Deletes a policy rule instance from a specified cluster.
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
   * Deletes an orchestration template when you no longer need it.
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
   * Deletes an orchestration template when you no longer need it.
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(TemplateId: string): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TemplateId, headers, runtime);
  }

  /**
   * Deletes an application trigger when it is no longer needed.
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
   * Deletes an application trigger when it is no longer needed.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(clusterId: string, Id: string): Promise<$_model.DeleteTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(clusterId, Id, headers, runtime);
  }

  /**
   * Deploys a policy instance in a specified namespace of a specified cluster. You can select a security policy type in an ACK cluster, configure the governance action (alerting or blocking) and the namespace scope for the policy instance to create and deploy a policy instance.
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
   * Deploys a policy instance in a specified namespace of a specified cluster. You can select a security policy type in an ACK cluster, configure the governance action (alerting or blocking) and the namespace scope for the policy instance to create and deploy a policy instance.
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
   * You can call the DescribeAddon operation to query information about a specified component based on parameters such as region, cluster type, cluster subtype (profile), cluster version, and component name. The returned information includes whether the component is managed, component category, supported custom parameter schema, compatible OS architectures, and the minimum cluster version required by the component version.
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
   * You can call the DescribeAddon operation to query information about a specified component based on parameters such as region, cluster type, cluster subtype (profile), cluster version, and component name. The returned information includes whether the component is managed, component category, supported custom parameter schema, compatible OS architectures, and the minimum cluster version required by the component version.
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
   * Queries the details of all components supported by the platform.
   * 
   * @deprecated OpenAPI DescribeAddons is deprecated
   * 
   * @param request - DescribeAddonsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonsResponse
   */
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
   * Queries the details of all components supported by the platform.
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
   * Queries an auto-repair rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoRepairPolicyResponse
   */
  async describeAutoRepairPolicyWithOptions(clusterId: string, policyId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoRepairPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoRepairPolicy",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/auto_repair_policies/${$dara.URL.percentEncode(policyId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoRepairPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoRepairPolicyResponse({}));
  }

  /**
   * Queries an auto-repair rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned.
   * @returns DescribeAutoRepairPolicyResponse
   */
  async describeAutoRepairPolicy(clusterId: string, policyId: string): Promise<$_model.DescribeAutoRepairPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAutoRepairPolicyWithOptions(clusterId, policyId, headers, runtime);
  }

  /**
   * Calls DescribeClusterAddonInstance to query information about an installed cluster component, such as its version, status, and configuration.
   * 
   * @deprecated OpenAPI DescribeClusterAddonInstance is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonInstanceResponse
   */
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
   * Calls DescribeClusterAddonInstance to query information about an installed cluster component, such as its version, status, and configuration.
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
   * Queries the version information of a specified component that can be used in a specific cluster, including the component version and configurable parameters.
   * 
   * @deprecated OpenAPI DescribeClusterAddonMetadata is deprecated
   * 
   * @param request - DescribeClusterAddonMetadataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonMetadataResponse
   */
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
   * Queries the version information of a specified component that can be used in a specific cluster, including the component version and configurable parameters.
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
   * Queries the upgrade status of a cluster component by calling DescribeClusterAddonUpgradeStatus.
   * 
   * @deprecated OpenAPI DescribeClusterAddonUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonUpgradeStatusResponse
   */
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
   * Queries the upgrade status of a cluster component by calling DescribeClusterAddonUpgradeStatus.
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
   * Queries the upgrade status of a component by component name.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsUpgradeStatus is deprecated
   * 
   * @param tmpReq - DescribeClusterAddonsUpgradeStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsUpgradeStatusResponse
   */
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
   * Queries the upgrade status of a component by component name.
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
   * Queries the details of all installed components in a cluster by cluster ID.
   * 
   * @deprecated OpenAPI DescribeClusterAddonsVersion is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAddonsVersionResponse
   */
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
   * Queries the details of all installed components in a cluster by cluster ID.
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
   * If you need to add existing ECS instances to an ACK cluster as worker nodes, or re-add node instances to a node pool after they are removed, ACK allows you to manually add existing nodes to a node pool. Calls the DescribeClusterAttachScripts operation to obtain the script for adding existing nodes.
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

    if (!$dara.isNull(request.oneTimeToken)) {
      body["one_time_token"] = request.oneTimeToken;
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
   * If you need to add existing ECS instances to an ACK cluster as worker nodes, or re-add node instances to a node pool after they are removed, ACK allows you to manually add existing nodes to a node pool. Calls the DescribeClusterAttachScripts operation to obtain the script for adding existing nodes.
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
   * You can call the DescribeClusterDetail API to query the detailed information of a specified cluster by cluster ID.
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
   * You can call the DescribeClusterDetail API to query the detailed information of a specified cluster by cluster ID.
   * @returns DescribeClusterDetailResponse
   */
  async describeClusterDetail(ClusterId: string): Promise<$_model.DescribeClusterDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterDetailWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Cluster operation events include cluster creation, cluster modification, node pool creation, node pool scale-out, addon installation, and cluster upgrade. You can call the DescribeClusterEvents operation to retrieve the list of events that occurred in a specified cluster and query event details, including the event level, event status, and event time.
   * 
   * @param request - DescribeClusterEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterEventsResponse
   */
  async describeClusterEventsWithOptions(ClusterId: string, request: $_model.DescribeClusterEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["max_results"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["next_token"] = request.nextToken;
    }

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
   * Cluster operation events include cluster creation, cluster modification, node pool creation, node pool scale-out, addon installation, and cluster upgrade. You can call the DescribeClusterEvents operation to retrieve the list of events that occurred in a specified cluster and query event details, including the event level, event status, and event time.
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
   * Retrieves the log data of a cluster for root cause analysis and tracing when cluster issues occur.
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
   * Retrieves the log data of a cluster for root cause analysis and tracing when cluster issues occur.
   * @returns DescribeClusterLogsResponse
   */
  async describeClusterLogs(ClusterId: string): Promise<$_model.DescribeClusterLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterLogsWithOptions(ClusterId, headers, runtime);
  }

  /**
   * You can call the DescribeClusterNodePoolDetail operation to query the configuration of a specified node pool in a cluster by node pool ID.
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
   * You can call the DescribeClusterNodePoolDetail operation to query the configuration of a specified node pool in a cluster by node pool ID.
   * @returns DescribeClusterNodePoolDetailResponse
   */
  async describeClusterNodePoolDetail(ClusterId: string, NodepoolId: string): Promise<$_model.DescribeClusterNodePoolDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterNodePoolDetailWithOptions(ClusterId, NodepoolId, headers, runtime);
  }

  /**
   * Queries the list of all node pools in a cluster.
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
   * Queries the list of all node pools in a cluster.
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
   * Queries the list of nodes that meet the specified conditions in a cluster.
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

    if (!$dara.isNull(request.nodeIps)) {
      query["nodeIps"] = request.nodeIps;
    }

    if (!$dara.isNull(request.nodeLabels)) {
      query["nodeLabels"] = request.nodeLabels;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["nodeNames"] = request.nodeNames;
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
   * Queries the list of nodes that meet the specified conditions in a cluster.
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
   * When you use Container Service for Kubernetes (ACK), you also use resources from other associated Alibaba Cloud services. You can call the DescribeClusterResources operation to query the associated resources of a specified cluster, such as VPCs and SLBs. To query node pool or node resources, call the DescribeClusterNodePools or DescribeClusterNodes operation.
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
   * When you use Container Service for Kubernetes (ACK), you also use resources from other associated Alibaba Cloud services. You can call the DescribeClusterResources operation to query the associated resources of a specified cluster, such as VPCs and SLBs. To query node pool or node resources, call the DescribeClusterNodePools or DescribeClusterNodes operation.
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
   * Queries the task list of a cluster by calling the DescribeClusterTasks operation.
   * 
   * @param request - DescribeClusterTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterTasksResponse
   */
  async describeClusterTasksWithOptions(clusterId: string, request: $_model.DescribeClusterTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["max_results"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["next_token"] = request.nextToken;
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
   * Queries the task list of a cluster by calling the DescribeClusterTasks operation.
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
   * KubeConfig is used to configure access credentials for ACK clusters on the client. It contains identity and authentication data for accessing the target cluster. When you use kubectl for cluster management, you must first connect to the cluster by using KubeConfig. You can invoke the DescribeClusterUserKubeconfig operation to query the KubeConfig of a specified cluster.
   * 
   * @remarks
   * - The default validity period of the certificate issued by KubeConfig is 3 years. Within 180 days before the certificate expires, you can obtain a rotated and refreshed KubeConfig by using the Container Service console or the DescribeClusterUserKubeconfig operation. The new KubeConfig certificate is valid for 3 years. The old KubeConfig credential remains valid until the certificate expires. Obtain the rotated credential promptly based on the KubeConfig expiration time displayed in the console or returned by the operation.
   * - Properly manage the KubeConfig credentials of your cluster and revoke them when they are no longer needed to avoid security risks such as sensitive data leakage caused by KubeConfig exposure.
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
   * KubeConfig is used to configure access credentials for ACK clusters on the client. It contains identity and authentication data for accessing the target cluster. When you use kubectl for cluster management, you must first connect to the cluster by using KubeConfig. You can invoke the DescribeClusterUserKubeconfig operation to query the KubeConfig of a specified cluster.
   * 
   * @remarks
   * - The default validity period of the certificate issued by KubeConfig is 3 years. Within 180 days before the certificate expires, you can obtain a rotated and refreshed KubeConfig by using the Container Service console or the DescribeClusterUserKubeconfig operation. The new KubeConfig certificate is valid for 3 years. The old KubeConfig credential remains valid until the certificate expires. Obtain the rotated credential promptly based on the KubeConfig expiration time displayed in the console or returned by the operation.
   * - Properly manage the KubeConfig credentials of your cluster and revoke them when they are no longer needed to avoid security risks such as sensitive data leakage caused by KubeConfig exposure.
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
   * Retrieves the kubeconfig file for a cluster.
   * 
   * @deprecated OpenAPI DescribeClusterV2UserKubeconfig is deprecated
   * 
   * @param request - DescribeClusterV2UserKubeconfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterV2UserKubeconfigResponse
   */
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
   * Retrieves the kubeconfig file for a cluster.
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
   * You can call the DescribeClusterVuls operation to query the details of security vulnerabilities in a cluster by cluster ID, including vulnerability names, types, and severity levels. Regularly scan your cluster for security vulnerabilities to improve cluster security.
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
   * You can call the DescribeClusterVuls operation to query the details of security vulnerabilities in a cluster by cluster ID, including vulnerability names, types, and severity levels. Regularly scan your cluster for security vulnerabilities to improve cluster security.
   * @returns DescribeClusterVulsResponse
   */
  async describeClusterVuls(clusterId: string): Promise<$_model.DescribeClusterVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * View all clusters created in Container Service (including Swarm and Kubernetes clusters).
   * 
   * @deprecated OpenAPI DescribeClusters is deprecated
   * 
   * @param request - DescribeClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersResponse
   */
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
   * View all clusters created in Container Service (including Swarm and Kubernetes clusters).
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
   * You can invoke the DescribeClustersV1 operation to query the list of ACK clusters that meet conditional criteria (such as cluster type and cluster specification) under the current account.
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
   * You can invoke the DescribeClustersV1 operation to query the list of ACK clusters that meet conditional criteria (such as cluster type and cluster specification) under the current account.
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
   * Cluster operation events include cluster creation, cluster modification, node pool creation, node pool scale-out, addon installation, and cluster upgrade. You can call the DescribeEvents operation to query the details of a specific type of event, including the event level, event status, and event time.
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

    if (!$dara.isNull(request.maxResults)) {
      query["max_results"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["next_token"] = request.nextToken;
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
   * Cluster operation events include cluster creation, cluster modification, node pool creation, node pool scale-out, addon installation, and cluster upgrade. You can call the DescribeEvents operation to query the details of a specific type of event, including the event level, event status, and event time.
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

    if (!$dara.isNull(request.maxResults)) {
      query["max_results"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["next_token"] = request.nextToken;
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
   * Queries the agent configuration for a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information about cluster registration, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
   * 
   * @deprecated OpenAPI DescribeExternalAgent is deprecated
   * 
   * @param request - DescribeExternalAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExternalAgentResponse
   */
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
   * Queries the agent configuration for a registered cluster by cluster ID.
   * 
   * @remarks
   * For more information about cluster registration, see [Register an external Kubernetes cluster](https://help.aliyun.com/document_detail/121053.html).
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
   * You can call the DescribeKubernetesVersionMetadata operation to query detailed information about Kubernetes versions, including version information, release dates and expiration dates, compatible operating systems, and container runtimes.
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
   * You can call the DescribeKubernetesVersionMetadata operation to query detailed information about Kubernetes versions, including version information, release dates and expiration dates, compatible operating systems, and container runtimes.
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
   * Queries the security vulnerability details of a node pool by node pool ID by calling the DescribeNodePoolVuls operation. The details include vulnerability names and severity levels. Regularly scan node pools for security vulnerabilities to improve cluster security.
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
   * Queries the security vulnerability details of a node pool by node pool ID by calling the DescribeNodePoolVuls operation. The details include vulnerability names and severity levels. Regularly scan node pools for security vulnerabilities to improve cluster security.
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
   * ACK cluster container security policies provide a comprehensive built-in rule library that includes Compliance, Infra, K8s-general, and PSP categories to ensure the secure operation of containers in production environments. You can call the DescribePolicies operation to query the list of policy governance rule libraries.
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
   * ACK cluster container security policies provide a comprehensive built-in rule library that includes Compliance, Infra, K8s-general, and PSP categories to ensure the secure operation of containers in production environments. You can call the DescribePolicies operation to query the list of policy governance rule libraries.
   * @returns DescribePoliciesResponse
   */
  async describePolicies(): Promise<$_model.DescribePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePoliciesWithOptions(headers, runtime);
  }

  /**
   * ACK cluster container security policies provide a rich set of built-in rule libraries, including Compliance, Infra, K8s-general, and PSP, to ensure the secure operation of containers in production environments. You can call the DescribePolicyDetails operation to query the details of a specified policy governance rule, such as the rule template description, governance action, and governance severity level.
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
   * ACK cluster container security policies provide a rich set of built-in rule libraries, including Compliance, Infra, K8s-general, and PSP, to ensure the secure operation of containers in production environments. You can call the DescribePolicyDetails operation to query the details of a specified policy governance rule, such as the rule template description, governance action, and governance severity level.
   * @returns DescribePolicyDetailsResponse
   */
  async describePolicyDetails(policyName: string): Promise<$_model.DescribePolicyDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyDetailsWithOptions(policyName, headers, runtime);
  }

  /**
   * ACK cluster container security policies provide a rich set of built-in rule libraries, including Compliance, Infra, K8s-general, and PSP, to ensure the secure operation of containers in production environments. You can call the DescribePolicyGovernanceInCluster operation to query detailed policy governance information for a specified cluster, such as the count of enabled policies at different severity levels, policy governance audit logs, and interception and alert details.
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
   * ACK cluster container security policies provide a rich set of built-in rule libraries, including Compliance, Infra, K8s-general, and PSP, to ensure the secure operation of containers in production environments. You can call the DescribePolicyGovernanceInCluster operation to query detailed policy governance information for a specified cluster, such as the count of enabled policies at different severity levels, policy governance audit logs, and interception and alert details.
   * @returns DescribePolicyGovernanceInClusterResponse
   */
  async describePolicyGovernanceInCluster(clusterId: string): Promise<$_model.DescribePolicyGovernanceInClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyGovernanceInClusterWithOptions(clusterId, headers, runtime);
  }

  /**
   * You can select a security policy type in an ACK cluster, configure the related enforcement actions and scope, and create and deploy a policy instance. You can call the DescribePolicyInstances operation to retrieve the details of specified policy instances in a cluster, such as the policy description and governance level.
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
   * You can select a security policy type in an ACK cluster, configure the related enforcement actions and scope, and create and deploy a policy instance. You can call the DescribePolicyInstances operation to retrieve the details of specified policy instances in a cluster, such as the policy description and governance level.
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
   * Queries the deployment status of policy instances for different policy types in a cluster, including the number of enabled instances for each policy rule and the number of enabled policy types at different governance levels.
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
   * Queries the deployment status of policy instances for different policy types in a cluster, including the number of enabled instances for each policy rule and the number of enabled policy types at different governance levels.
   * @returns DescribePolicyInstancesStatusResponse
   */
  async describePolicyInstancesStatus(clusterId: string): Promise<$_model.DescribePolicyInstancesStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePolicyInstancesStatusWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries the list of regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["clusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.profile)) {
      query["profile"] = request.profile;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries the list of regions.
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
   * Queries whether deletion protection is enabled for a specified resource in a cluster. Resources that support deletion protection include namespaces and services.
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
   * Queries whether deletion protection is enabled for a specified resource in a cluster. Resources that support deletion protection include namespaces and services.
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
   * As a cluster permission management administrator, you can use an Alibaba Cloud account to issue KubeConfig credentials that contain identity information for a specified Resource Access Management (RAM) user or RAM role within the account. These credentials are used to connect to ACK clusters. You can invoke the DescribeSubaccountK8sClusterUserConfig operation to issue or retrieve the KubeConfig for any RAM user or role within the account.
   * 
   * @remarks
   * This operation can be called only by an Alibaba Cloud account.
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
   * As a cluster permission management administrator, you can use an Alibaba Cloud account to issue KubeConfig credentials that contain identity information for a specified Resource Access Management (RAM) user or RAM role within the account. These credentials are used to connect to ACK clusters. You can invoke the DescribeSubaccountK8sClusterUserConfig operation to issue or retrieve the KubeConfig for any RAM user or role within the account.
   * 
   * @remarks
   * This operation can be called only by an Alibaba Cloud account.
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
   * Queries the details of a cluster task, such as the task type, running status, and running stage.
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
   * Queries the details of a cluster task, such as the task type, running status, and running stage.
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfo(taskId: string): Promise<$_model.DescribeTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInfoWithOptions(taskId, headers, runtime);
  }

  /**
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can call the DescribeTemplateAttribute operation to query the details of a specified orchestration template, including access permissions, YAML content, and labels.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can call the DescribeTemplateAttribute operation to query the details of a specified orchestration template, including access permissions, YAML content, and labels.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can call the DescribeTemplates operation to retrieve a list of created orchestration templates and query detailed information about the templates, including access permissions, YAML content, and tags.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. You can call the DescribeTemplates operation to retrieve a list of created orchestration templates and query detailed information about the templates, including access permissions, YAML content, and tags.
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
   * Queries triggers that meet the specified conditions.
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
   * Queries triggers that meet the specified conditions.
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
   * In ACK clusters, you can use Kubernetes namespaces to achieve logically isolated permissions and resources for cluster users. Users who are granted RBAC permissions only for a specified namespace cannot access resources in other namespaces of the cluster. You can invoke the DescribeUserClusterNamespaces operation to query the namespaces for which the current Resource Access Management (RAM) user or role has been granted RBAC access permissions in a specified ACK cluster.
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
   * In ACK clusters, you can use Kubernetes namespaces to achieve logically isolated permissions and resources for cluster users. Users who are granted RBAC permissions only for a specified namespace cannot access resources in other namespaces of the cluster. You can invoke the DescribeUserClusterNamespaces operation to query the namespaces for which the current Resource Access Management (RAM) user or role has been granted RBAC access permissions in a specified ACK cluster.
   * @returns DescribeUserClusterNamespacesResponse
   */
  async describeUserClusterNamespaces(ClusterId: string): Promise<$_model.DescribeUserClusterNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserClusterNamespacesWithOptions(ClusterId, headers, runtime);
  }

  /**
   * In ACK clusters, you can create and assign different access permissions to different Resource Access Management (RAM) users or roles to ensure secure access control and resource isolation. You can invoke the DescribeUserPermission operation to query the details of cluster permissions granted to a RAM user or role, including accessible resources, permission scope, preset role types, and permission sources.
   * 
   * @remarks
   * *Before you begin**:
   * - If the account that invokes this API operation is a Resource Access Management (RAM) user or RAM role, the API operation returns only the permissions for clusters in which the calling account has RBAC administrator permissions. To list permissions for all clusters, the calling account must have RBAC administrator permissions on all clusters.
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
   * In ACK clusters, you can create and assign different access permissions to different Resource Access Management (RAM) users or roles to ensure secure access control and resource isolation. You can invoke the DescribeUserPermission operation to query the details of cluster permissions granted to a RAM user or role, including accessible resources, permission scope, preset role types, and permission sources.
   * 
   * @remarks
   * *Before you begin**:
   * - If the account that invokes this API operation is a Resource Access Management (RAM) user or RAM role, the API operation returns only the permissions for clusters in which the calling account has RBAC administrator permissions. To list permissions for all clusters, the calling account must have RBAC administrator permissions on all clusters.
   * @returns DescribeUserPermissionResponse
   */
  async describeUserPermission(uid: string): Promise<$_model.DescribeUserPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserPermissionWithOptions(uid, headers, runtime);
  }

  /**
   * Queries the quotas of ACK clusters, node pools, and nodes. To increase a quota, go to Quota Center to submit a request.
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
   * Queries the quotas of ACK clusters, node pools, and nodes. To increase a quota, go to Quota Center to submit a request.
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuota(): Promise<$_model.DescribeUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeUserQuotaWithOptions(headers, runtime);
  }

  /**
   * Alibaba Cloud security products periodically scan ECS nodes for security vulnerabilities and provide corresponding remediation suggestions and methods. Some CVE fixes may require node restarts. Ensure that the cluster has sufficient nodes for drain operations. You can call the FixNodePoolVuls operation to fix node security vulnerabilities in a specified cluster node pool and improve the security of cluster nodes.
   * 
   * @remarks
   * - CVE compatibility is ensured by Security Center. Make sure that you have activated the Ultimate edition of Security Center or [purchased vulnerability fixing (pay-as-you-go)](https://help.aliyun.com/document_detail/42308.html).
   * - Some CVE fixes require node restarts. Container Service drains the node before restarting it. Ensure that the cluster has sufficient spare node resources for draining. For example, scale out the node pool in advance.
   * - Pay attention to the compatibility between your applications and CVEs. CVE fixes are performed in batches. During the CVE fix process, you can pause or cancel the task. After you pause or cancel the task, batches that have already been dispatched continue to run until completion. Batches that have not been dispatched are paused or canceled.
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
   * Alibaba Cloud security products periodically scan ECS nodes for security vulnerabilities and provide corresponding remediation suggestions and methods. Some CVE fixes may require node restarts. Ensure that the cluster has sufficient nodes for drain operations. You can call the FixNodePoolVuls operation to fix node security vulnerabilities in a specified cluster node pool and improve the security of cluster nodes.
   * 
   * @remarks
   * - CVE compatibility is ensured by Security Center. Make sure that you have activated the Ultimate edition of Security Center or [purchased vulnerability fixing (pay-as-you-go)](https://help.aliyun.com/document_detail/42308.html).
   * - Some CVE fixes require node restarts. Container Service drains the node before restarting it. Ensure that the cluster has sufficient spare node resources for draining. For example, scale out the node pool in advance.
   * - Pay attention to the compatibility between your applications and CVEs. CVE fixes are performed in batches. During the CVE fix process, you can pause or cancel the task. After you pause or cancel the task, batches that have already been dispatched continue to run until completion. Batches that have not been dispatched are paused or canceled.
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
   * Queries the details of a specified component instance in a cluster, including the version, parameter settings, and logging feature status of the component instance.
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
   * Queries the details of a specified component instance in a cluster, including the version, parameter settings, and logging feature status of the component instance.
   * @returns GetClusterAddonInstanceResponse
   */
  async getClusterAddonInstance(clusterId: string, instanceName: string): Promise<$_model.GetClusterAddonInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAddonInstanceWithOptions(clusterId, instanceName, headers, runtime);
  }

  /**
   * Queries whether the API server audit feature is enabled for a cluster and retrieves the Simple Log Service (SLS) project that stores the API server audit logs.
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
   * Queries whether the API server audit feature is enabled for a cluster and retrieves the Simple Log Service (SLS) project that stores the API server audit logs.
   * @returns GetClusterAuditProjectResponse
   */
  async getClusterAuditProject(clusterid: string): Promise<$_model.GetClusterAuditProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterAuditProjectWithOptions(clusterid, headers, runtime);
  }

  /**
   * The intelligent O&M platform for containers provides comprehensive Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. You can call the GetClusterCheck operation to query information about a specified check task based on the cluster ID and check task ID, such as the check status, specific check items, and check creation and completion time.
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
   * The intelligent O&M platform for containers provides comprehensive Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. You can call the GetClusterCheck operation to query information about a specified check task based on the cluster ID and check task ID, such as the check status, specific check items, and check creation and completion time.
   * @returns GetClusterCheckResponse
   */
  async getClusterCheck(clusterId: string, checkId: string): Promise<$_model.GetClusterCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterCheckWithOptions(clusterId, checkId, headers, runtime);
  }

  /**
   * Retrieves the diagnostic check items of a cluster.
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
   * Retrieves the diagnostic check items of a cluster.
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
   * Retrieves the diagnosis result of a cluster.
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
   * Retrieves the diagnosis result of a cluster.
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
   * Retrieves the inspection configuration of a cluster.
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
   * Retrieves the inspection configuration of a cluster.
   * @returns GetClusterInspectConfigResponse
   */
  async getClusterInspectConfig(clusterId: string): Promise<$_model.GetClusterInspectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterInspectConfigWithOptions(clusterId, headers, runtime);
  }

  /**
   * Retrieves the details of a cluster inspection report.
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
   * Retrieves the details of a cluster inspection report.
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
   * Queries the triggers of an application by application name.
   * 
   * @deprecated OpenAPI GetKubernetesTrigger is deprecated
   * 
   * @param request - GetKubernetesTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKubernetesTriggerResponse
   */
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
   * Queries the triggers of an application by application name.
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
   * Queries the upgrade status of a cluster by cluster ID.
   * 
   * @deprecated OpenAPI GetUpgradeStatus is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpgradeStatusResponse
   */
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
   * Queries the upgrade status of a cluster by cluster ID.
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
   * By default, Resource Access Management (RAM) users or roles that are not cluster creators and have not been granted access permissions across all cluster dimensions do not have any RBAC permissions in a cluster. You can invoke the GrantPermissions operation to update the RBAC access permissions of a RAM user or role, including accessible resources, permission scope, and preset role types, to better manage cluster management security and access control.
   * 
   * @remarks
   * - If the account that invokes this API operation is a RAM user, make sure that the account has been granted the permission to modify the RBAC authorization information of other Resource Access Management (RAM) users or RAM roles. Otherwise, the API operation returns the `StatusForbidden` or `ForbiddenGrantPermissions` fault. For more information, see [Grant RBAC permissions to a RAM user](https://help.aliyun.com/document_detail/119035.html).
   * - The operation of fully updating the RBAC authorization information of a RAM user or RAM role overwrites the existing cluster permissions of the target RAM user or RAM role. Include all permission configurations that you want to grant to the target RAM user or RAM role in the request.
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
   * By default, Resource Access Management (RAM) users or roles that are not cluster creators and have not been granted access permissions across all cluster dimensions do not have any RBAC permissions in a cluster. You can invoke the GrantPermissions operation to update the RBAC access permissions of a RAM user or role, including accessible resources, permission scope, and preset role types, to better manage cluster management security and access control.
   * 
   * @remarks
   * - If the account that invokes this API operation is a RAM user, make sure that the account has been granted the permission to modify the RBAC authorization information of other Resource Access Management (RAM) users or RAM roles. Otherwise, the API operation returns the `StatusForbidden` or `ForbiddenGrantPermissions` fault. For more information, see [Grant RBAC permissions to a RAM user](https://help.aliyun.com/document_detail/119035.html).
   * - The operation of fully updating the RBAC authorization information of a RAM user or RAM role overwrites the existing cluster permissions of the target RAM user or RAM role. Include all permission configurations that you want to grant to the target RAM user or RAM role in the request.
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
   * To enhance Kubernetes capabilities, ACK clusters support various components, such as managed core components, application components, logging and monitoring components, networking components, storage components, and security components. You can call the InstallClusterAddons operation to install components by specifying the component name and version.
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
   * To enhance Kubernetes capabilities, ACK clusters support various components, such as managed core components, application components, logging and monitoring components, networking components, storage components, and security components. You can call the InstallClusterAddons operation to install components by specifying the component name and version.
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
   * Installs components on nodes. You can configure and specify nodes on which to install components.
   * 
   * @param request - InstallNodePoolComponentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallNodePoolComponentsResponse
   */
  async installNodePoolComponentsWithOptions(clusterId: string, nodePoolId: string, request: $_model.InstallNodePoolComponentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallNodePoolComponentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.nodeNames)) {
      body["nodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.rollingPolicy)) {
      body["rollingPolicy"] = request.rollingPolicy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallNodePoolComponents",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodePoolId)}/components`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallNodePoolComponentsResponse>(await this.callApi(params, req, runtime), new $_model.InstallNodePoolComponentsResponse({}));
  }

  /**
   * Installs components on nodes. You can configure and specify nodes on which to install components.
   * 
   * @param request - InstallNodePoolComponentsRequest
   * @returns InstallNodePoolComponentsResponse
   */
  async installNodePoolComponents(clusterId: string, nodePoolId: string, request: $_model.InstallNodePoolComponentsRequest): Promise<$_model.InstallNodePoolComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installNodePoolComponentsWithOptions(clusterId, nodePoolId, request, headers, runtime);
  }

  /**
   * Queries the list of available components based on specified parameters such as region, cluster type, cluster subtype (profile), and cluster version. You can also retrieve detailed component information, including whether a component is managed, the schema of supported custom parameters, and compatible operating system architectures.
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
   * Queries the list of available components based on specified parameters such as region, cluster type, cluster subtype (profile), and cluster version. You can also retrieve detailed component information, including whether a component is managed, the schema of supported custom parameters, and compatible operating system architectures.
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
   * Retrieves the list of auto-repair policies.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutoRepairPoliciesResponse
   */
  async listAutoRepairPoliciesWithOptions(clusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutoRepairPoliciesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutoRepairPolicies",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/auto_repair_policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutoRepairPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListAutoRepairPoliciesResponse({}));
  }

  /**
   * Retrieves the list of auto-repair policies.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned.
   * @returns ListAutoRepairPoliciesResponse
   */
  async listAutoRepairPolicies(clusterId: string): Promise<$_model.ListAutoRepairPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAutoRepairPoliciesWithOptions(clusterId, headers, runtime);
  }

  /**
   * Queries the list of resources contained in an installed cluster component instance, including Kubernetes cluster resources and Helm release instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAddonInstanceResourcesResponse
   */
  async listClusterAddonInstanceResourcesWithOptions(clusterId: string, instanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterAddonInstanceResourcesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterAddonInstanceResources",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/addon_instances/${$dara.URL.percentEncode(instanceName)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterAddonInstanceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterAddonInstanceResourcesResponse({}));
  }

  /**
   * Queries the list of resources contained in an installed cluster component instance, including Kubernetes cluster resources and Helm release instances.
   * @returns ListClusterAddonInstanceResourcesResponse
   */
  async listClusterAddonInstanceResources(clusterId: string, instanceName: string): Promise<$_model.ListClusterAddonInstanceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAddonInstanceResourcesWithOptions(clusterId, instanceName, headers, runtime);
  }

  /**
   * Lists the component instances installed in a specified cluster and queries related information about the component instances, such as the component version and status.
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
   * Lists the component instances installed in a specified cluster and queries related information about the component instances, such as the component version and status.
   * @returns ListClusterAddonInstancesResponse
   */
  async listClusterAddonInstances(clusterId: string): Promise<$_model.ListClusterAddonInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAddonInstancesWithOptions(clusterId, headers, runtime);
  }

  /**
   * The intelligent O&M platform for containers provides comprehensive Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. You can call the ListClusterChecks operation to query the list of cluster checks and related information by cluster ID, such as check type, status, creation time, and completion time.
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
   * The intelligent O&M platform for containers provides comprehensive Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. You can call the ListClusterChecks operation to query the list of cluster checks and related information by cluster ID, such as check type, status, creation time, and completion time.
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
   * Retrieves a list of cluster inspection reports.
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
   * Retrieves a list of cluster inspection reports.
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
   * Queries the list and status of KubeConfigs that have been issued to users in a specified cluster. You can call this operation to view the access control status of the current cluster.
   * 
   * @remarks
   * > - To call this operation, you must have the ram:ListUsers and ram:ListRoles permissions.
   * > - To call this operation, you must have full access to Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
   * 
   * @param request - ListClusterKubeconfigStatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterKubeconfigStatesResponse
   */
  async listClusterKubeconfigStatesWithOptions(ClusterId: string, request: $_model.ListClusterKubeconfigStatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterKubeconfigStatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudServiceKubeConfig)) {
      query["cloudServiceKubeConfig"] = request.cloudServiceKubeConfig;
    }

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
   * Queries the list and status of KubeConfigs that have been issued to users in a specified cluster. You can call this operation to view the access control status of the current cluster.
   * 
   * @remarks
   * > - To call this operation, you must have the ram:ListUsers and ram:ListRoles permissions.
   * > - To call this operation, you must have full access to Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
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
   * Retrieves a list of automated O&M execution plans.
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
   * Retrieves a list of automated O&M execution plans.
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
   * Queries the most recent 100 automated O&M execution plans in a specified region. When features such as cluster intelligent managed mode (Auto Mode), automatic cluster upgrade, or node pool automated O&M are enabled, you can call this operation to query the O&M plans automatically generated by the system and their execution status, such as cluster upgrades and node pool CVE fixes.
   * 
   * @param request - ListOperationPlansForRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationPlansForRegionResponse
   */
  async listOperationPlansForRegionWithOptions(regionId: string, request: $_model.ListOperationPlansForRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationPlansForRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationPlansForRegion",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/regions/${$dara.URL.percentEncode(regionId)}/operation/plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationPlansForRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationPlansForRegionResponse({}));
  }

  /**
   * Queries the most recent 100 automated O&M execution plans in a specified region. When features such as cluster intelligent managed mode (Auto Mode), automatic cluster upgrade, or node pool automated O&M are enabled, you can call this operation to query the O&M plans automatically generated by the system and their execution status, such as cluster upgrades and node pool CVE fixes.
   * 
   * @param request - ListOperationPlansForRegionRequest
   * @returns ListOperationPlansForRegionResponse
   */
  async listOperationPlansForRegion(regionId: string, request: $_model.ListOperationPlansForRegionRequest): Promise<$_model.ListOperationPlansForRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationPlansForRegionWithOptions(regionId, request, headers, runtime);
  }

  /**
   * You can add tag key-value pairs to clusters so that cluster developers or O&M engineers can classify and manage clusters more flexibly, and better support requirements such as monitoring, cost analysis, and multi-tenant data isolation. You can call the ListTagResources operation to obtain a list of resource tags and query detailed tag information, such as key-value pairs and associated clusters.
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
   * You can add tag key-value pairs to clusters so that cluster developers or O&M engineers can classify and manage clusters more flexibly, and better support requirements such as monitoring, cost analysis, and multi-tenant data isolation. You can call the ListTagResources operation to obtain a list of resource tags and query detailed tag information, such as key-value pairs and associated clusters.
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
   * Queries the KubeConfig status list of all clusters for the current user. If you want to view the KubeConfig issuance status of each cluster for the current user, you can call this operation to retrieve the KubeConfig status list of all clusters.
   * 
   * @remarks
   * > To call this operation, you must have full access permissions on Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
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
   * Queries the KubeConfig status list of all clusters for the current user. If you want to view the KubeConfig issuance status of each cluster for the current user, you can call this operation to retrieve the KubeConfig status list of all clusters.
   * 
   * @remarks
   * > To call this operation, you must have full access permissions on Container Service for Kubernetes (ACK) (AliyunCSFullAccess).
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
   * ACK ACK clusters are an evolution of ACK Basic clusters, inheriting all the advantages of managed clusters, such as managed control planes and high-availability control planes. ACK ACK clusters further enhance cluster reliability, security, and scheduling capabilities, and support SLAs with compensation standards. ACK ACK clusters are suitable for enterprise customers who run large-scale workloads in production environments and have high requirements for stability and security. You can call the MigrateCluster operation to migrate an ACK Basic cluster to an ACK ACK cluster.
   * 
   * @remarks
   * After you migrate an ACK managed Basic cluster to an ACK managed Pro cluster, a [cluster management fee](https://help.aliyun.com/document_detail/462278.html) charged by ACK is added. Billing for other cloud resources remains unchanged.
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
   * ACK ACK clusters are an evolution of ACK Basic clusters, inheriting all the advantages of managed clusters, such as managed control planes and high-availability control planes. ACK ACK clusters further enhance cluster reliability, security, and scheduling capabilities, and support SLAs with compensation standards. ACK ACK clusters are suitable for enterprise customers who run large-scale workloads in production environments and have high requirements for stability and security. You can call the MigrateCluster operation to migrate an ACK Basic cluster to an ACK ACK cluster.
   * 
   * @remarks
   * After you migrate an ACK managed Basic cluster to an ACK managed Pro cluster, a [cluster management fee](https://help.aliyun.com/document_detail/462278.html) charged by ACK is added. Billing for other cloud resources remains unchanged.
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
   * Modifies a self-healing rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * 
   * @param request - ModifyAutoRepairPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoRepairPolicyResponse
   */
  async modifyAutoRepairPolicyWithOptions(clusterId: string, policyId: string, request: $_model.ModifyAutoRepairPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoRepairPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.rules)) {
      body["rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoRepairPolicy",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/auto_repair_policies/${$dara.URL.percentEncode(policyId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoRepairPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoRepairPolicyResponse({}));
  }

  /**
   * Modifies a self-healing rule.
   * 
   * @remarks
   * >Notice: This API is not yet available. Stay tuned..
   * 
   * @param request - ModifyAutoRepairPolicyRequest
   * @returns ModifyAutoRepairPolicyResponse
   */
  async modifyAutoRepairPolicy(clusterId: string, policyId: string, request: $_model.ModifyAutoRepairPolicyRequest): Promise<$_model.ModifyAutoRepairPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAutoRepairPolicyWithOptions(clusterId, policyId, request, headers, runtime);
  }

  /**
   * You can call the ModifyCluster operation to modify the configuration of an ACK cluster.
   * 
   * @remarks
   * <notice>Starting from July 04, 2026, the request parameters instance_deletion_protection, ingress_loadbalancer_id, and access_control_list will no longer take effect. For details about the changes, see [Announcement on Changes to ACK Cluster Management OpenAPI Parameters and OpenAPI Deprecation](https://help.aliyun.com/document_detail/2932733.html).</notice>
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

    if (!$dara.isNull(request.clusterSpec)) {
      body["cluster_spec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.controlPlaneConfig)) {
      body["control_plane_config"] = request.controlPlaneConfig;
    }

    if (!$dara.isNull(request.controlPlaneEndpointsConfig)) {
      body["control_plane_endpoints_config"] = request.controlPlaneEndpointsConfig;
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
   * You can call the ModifyCluster operation to modify the configuration of an ACK cluster.
   * 
   * @remarks
   * <notice>Starting from July 04, 2026, the request parameters instance_deletion_protection, ingress_loadbalancer_id, and access_control_list will no longer take effect. For details about the changes, see [Announcement on Changes to ACK Cluster Management OpenAPI Parameters and OpenAPI Deprecation](https://help.aliyun.com/document_detail/2932733.html).</notice>
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
   * Modifies the configuration of an installed cluster component instance. Modifying configurations may affect your services. Evaluate the impact before performing this operation during off-peak hours and back up relevant data in advance.
   * 
   * @remarks
   * You can call this API operation to modify the configuration of common clusters components and the control plane parameter settings of ACK Pro clusters:
   * - To query the configurable parameters of common components, call the DescribeClusterAddonMetadata API operation. For details, see [Query cluster component version metadata](https://help.aliyun.com/document_detail/2667944.html).
   * - For the configurable control plane parameter settings of ACK Pro clusters, see [Customize control plane parameters of ACK Pro clusters](https://help.aliyun.com/document_detail/199588.html).
   * Modifying configurations may cause the component to be redeployed and restarted. Evaluate the impact before performing this operation.
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
   * Modifies the configuration of an installed cluster component instance. Modifying configurations may affect your services. Evaluate the impact before performing this operation during off-peak hours and back up relevant data in advance.
   * 
   * @remarks
   * You can call this API operation to modify the configuration of common clusters components and the control plane parameter settings of ACK Pro clusters:
   * - To query the configurable parameters of common components, call the DescribeClusterAddonMetadata API operation. For details, see [Query cluster component version metadata](https://help.aliyun.com/document_detail/2667944.html).
   * - For the configurable control plane parameter settings of ACK Pro clusters, see [Customize control plane parameters of ACK Pro clusters](https://help.aliyun.com/document_detail/199588.html).
   * Modifying configurations may cause the component to be redeployed and restarted. Evaluate the impact before performing this operation.
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
   * You can call the ModifyClusterNodePool API to update the configuration of a target node pool by specifying its node pool ID.
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
   * You can call the ModifyClusterNodePool API to update the configuration of a target node pool by specifying its node pool ID.
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
   * You can add tag key-value pairs to clusters so that cluster developers or O&M engineers can categorize and manage clusters more flexibly, and better support requirements such as monitoring, cost analysis, and tenant isolation. You can call the ModifyClusterTags operation to modify cluster tags.
   * 
   * @remarks
   * - This operation performs a full update. When you call this operation, specify all target tags as input parameters to avoid losing existing tags. To perform an incremental update, use [TagResources to bind tags to a cluster](https://help.aliyun.com/document_detail/2667969.html).
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
   * You can add tag key-value pairs to clusters so that cluster developers or O&M engineers can categorize and manage clusters more flexibly, and better support requirements such as monitoring, cost analysis, and tenant isolation. You can call the ModifyClusterTags operation to modify cluster tags.
   * 
   * @remarks
   * - This operation performs a full update. When you call this operation, specify all target tags as input parameters to avoid losing existing tags. To perform an incremental update, use [TagResources to bind tags to a cluster](https://help.aliyun.com/document_detail/2667969.html).
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
   * You can call the ModifyNodePoolNodeConfig operation to modify the node configuration in a cluster node pool, such as kubelet configuration and node rolling update configuration. Modifying node configuration changes the node configuration in batches and restarts kubelet, which may affect node operations and workload operations. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * > ACK allows you to modify the kubelet configuration of nodes in a node pool. After the modification is complete, the changes automatically take effect on the nodes in the node pool, and newly added nodes in the node pool also use the new configuration.
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

    if (!$dara.isNull(request.nodeNames)) {
      body["node_names"] = request.nodeNames;
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
   * You can call the ModifyNodePoolNodeConfig operation to modify the node configuration in a cluster node pool, such as kubelet configuration and node rolling update configuration. Modifying node configuration changes the node configuration in batches and restarts kubelet, which may affect node operations and workload operations. We recommend that you perform this operation during off-peak hours.
   * 
   * @remarks
   * > ACK allows you to modify the kubelet configuration of nodes in a node pool. After the modification is complete, the changes automatically take effect on the nodes in the node pool, and newly added nodes in the node pool also use the new configuration.
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
   * Updates a policy rule instance in a specified cluster. You can modify the governance action (alert or block) and the scope of namespaces to which the policy instance applies.
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
   * Updates a policy rule instance in a specified cluster. You can modify the governance action (alert or block) and the scope of namespaces to which the policy instance applies.
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
   * When you use Container Service for Kubernetes (ACK) for the first time, you must call the OpenAckService operation to activate the service.
   * 
   * @remarks
   * - An Alibaba Cloud account can activate ACK.
   * - A Resource Access Management (RAM) user that has the AdministratorAccess permission can activate the service.
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
   * When you use Container Service for Kubernetes (ACK) for the first time, you must call the OpenAckService operation to activate the service.
   * 
   * @remarks
   * - An Alibaba Cloud account can activate ACK.
   * - A Resource Access Management (RAM) user that has the AdministratorAccess permission can activate the service.
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
   * Pauses a cluster upgrade.
   * 
   * @deprecated OpenAPI PauseClusterUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseClusterUpgradeResponse
   */
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
   * Pauses a cluster upgrade.
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
   * Pauses a component upgrade.
   * 
   * @deprecated OpenAPI PauseComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseComponentUpgradeResponse
   */
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
   * Pauses a component upgrade.
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
   * You can call the PauseTask operation to pause a running cluster task.
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
   * You can call the PauseTask operation to pause a running cluster task.
   * @returns PauseTaskResponse
   */
  async pauseTask(taskId: string): Promise<$_model.PauseTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pauseTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 移除集群节点
   * 
   * @deprecated OpenAPI RemoveClusterNodes is deprecated
   * 
   * @param request - RemoveClusterNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterNodesResponse
   */
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
   * 移除集群节点
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
   * Removes nodes from a node pool in a cluster and adjusts the expected number of nodes. When removing nodes, you can specify whether to release the associated ECS instances and whether to drain the nodes. Removing nodes involves pod migration, which may affect your services. Perform this operation during off-peak hours and back up your data in advance.
   * 
   * @remarks
   * - Removing nodes involves pod migration, which may affect your services. Perform this operation during off-peak hours.
   * - Unexpected risks may occur during the operation. Back up your data in advance.
   * - During the operation, the nodes being removed are set to the unschedulable state in the background.
   * - This operation removes only worker nodes, not master nodes.
   *  - Even if you choose to release nodes (nodes for which `release_node` is set to `true`), subscription nodes are not released. After removing the nodes, release them in the [ECS console](https://ecs.console.aliyun.com/).
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
   * Removes nodes from a node pool in a cluster and adjusts the expected number of nodes. When removing nodes, you can specify whether to release the associated ECS instances and whether to drain the nodes. Removing nodes involves pod migration, which may affect your services. Perform this operation during off-peak hours and back up your data in advance.
   * 
   * @remarks
   * - Removing nodes involves pod migration, which may affect your services. Perform this operation during off-peak hours.
   * - Unexpected risks may occur during the operation. Back up your data in advance.
   * - During the operation, the nodes being removed are set to the unschedulable state in the background.
   * - This operation removes only worker nodes, not master nodes.
   *  - Even if you choose to release nodes (nodes for which `release_node` is set to `true`), subscription nodes are not released. After removing the nodes, release them in the [ECS console](https://ecs.console.aliyun.com/).
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
   * Repairs nodes in a cluster node pool.
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
   * Repairs nodes in a cluster node pool.
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
   * Calls ResumeComponentUpgrade to restart a paused component upgrade task.
   * 
   * @deprecated OpenAPI ResumeComponentUpgrade is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeComponentUpgradeResponse
   */
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
   * Calls ResumeComponentUpgrade to restart a paused component upgrade task.
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
   * Resumes a paused cluster task.
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
   * Resumes a paused cluster task.
   * @returns ResumeTaskResponse
   */
  async resumeTask(taskId: string): Promise<$_model.ResumeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * Resumes the upgrade of a cluster that is in the upgrade-paused state based on the cluster ID.
   * 
   * @deprecated OpenAPI ResumeUpgradeCluster is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeUpgradeClusterResponse
   */
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
   * Resumes the upgrade of a cluster that is in the upgrade-paused state based on the cluster ID.
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
   * If you want to revoke the cluster KubeConfig credential owned by the currently logged-on Alibaba Cloud account or Resource Access Management (RAM) user, you can call the RevokeK8sClusterKubeConfig operation to revoke it. After the revocation succeeds, the cluster generates a new KubeConfig, and the original KubeConfig becomes invalid.
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
   * If you want to revoke the cluster KubeConfig credential owned by the currently logged-on Alibaba Cloud account or Resource Access Management (RAM) user, you can call the RevokeK8sClusterKubeConfig operation to revoke it. After the revocation succeeds, the cluster generates a new KubeConfig, and the original KubeConfig becomes invalid.
   * @returns RevokeK8sClusterKubeConfigResponse
   */
  async revokeK8sClusterKubeConfig(ClusterId: string): Promise<$_model.RevokeK8sClusterKubeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeK8sClusterKubeConfigWithOptions(ClusterId, headers, runtime);
  }

  /**
   * The intelligent O&M platform for containers provides a wide range of Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. Before an upgrade, migration, or installation operation is performed, the platform automatically triggers a check. You can perform the change operation only after the check is passed. You can also manually call the RunClusterCheck operation to perform a cluster check. Periodically check and maintain your clusters to prevent security risks.
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
   * The intelligent O&M platform for containers provides a wide range of Kubernetes cluster check capabilities, including cluster upgrade checks, cluster migration checks, component installation checks, component upgrade checks, and node pool checks. Before an upgrade, migration, or installation operation is performed, the platform automatically triggers a check. You can perform the change operation only after the check is passed. You can also manually call the RunClusterCheck operation to perform a cluster check. Periodically check and maintain your clusters to prevent security risks.
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
   * Initiates a cluster inspection and creates an inspection report.
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
   * Initiates a cluster inspection and creates an inspection report.
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
   * 执行节点上的运维操作
   * 
   * @param request - RunNodeOperationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNodeOperationResponse
   */
  async runNodeOperationWithOptions(clusterId: string, nodepoolId: string, nodeName: string, request: $_model.RunNodeOperationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunNodeOperationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operationAction)) {
      body["operationAction"] = request.operationAction;
    }

    if (!$dara.isNull(request.operationArgs)) {
      body["operationArgs"] = request.operationArgs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNodeOperation",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodepoolId)}/nodes/${$dara.URL.percentEncode(nodeName)}/operation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunNodeOperationResponse>(await this.callApi(params, req, runtime), new $_model.RunNodeOperationResponse({}));
  }

  /**
   * 执行节点上的运维操作
   * 
   * @param request - RunNodeOperationRequest
   * @returns RunNodeOperationResponse
   */
  async runNodeOperation(clusterId: string, nodepoolId: string, nodeName: string, request: $_model.RunNodeOperationRequest): Promise<$_model.RunNodeOperationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runNodeOperationWithOptions(clusterId, nodepoolId, nodeName, request, headers, runtime);
  }

  /**
   * Scales out a node pool by adding nodes to ensure that the number of nodes is sufficient to support your workloads.
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
   * Scales out a node pool by adding nodes to ensure that the number of nodes is sufficient to support your workloads.
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
   * 扩容Kubernetes集群
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
   * 扩容Kubernetes集群
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
   * You can call the ScanClusterVuls operation to scan for potential security vulnerabilities in an ACK cluster, including container workload vulnerabilities, third-party software vulnerabilities, CVE vulnerabilities, WebCMS vulnerabilities, and Windows operating system vulnerabilities. Regularly scan your cluster for security vulnerabilities to improve cluster security.
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
   * You can call the ScanClusterVuls operation to scan for potential security vulnerabilities in an ACK cluster, including container workload vulnerabilities, third-party software vulnerabilities, CVE vulnerabilities, WebCMS vulnerabilities, and Windows operating system vulnerabilities. Regularly scan your cluster for security vulnerabilities to improve cluster security.
   * @returns ScanClusterVulsResponse
   */
  async scanClusterVuls(clusterId: string): Promise<$_model.ScanClusterVulsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scanClusterVulsWithOptions(clusterId, headers, runtime);
  }

  /**
   * Starts a specified alert rule.
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
   * Starts a specified alert rule.
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
   * Stops alert rules in the ACK alert center. You can stop an entire alert rule group or a single alert rule.
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
   * Stops alert rules in the ACK alert center. You can stop an entire alert rule group or a single alert rule.
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
   * Synchronizes a cluster node pool, including node pool metadata and information about the nodes in the node pool.
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
   * Synchronizes a cluster node pool, including node pool metadata and information about the nodes in the node pool.
   * @returns SyncClusterNodePoolResponse
   */
  async syncClusterNodePool(ClusterId: string): Promise<$_model.SyncClusterNodePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.syncClusterNodePoolWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Adds tag key-value pairs to clusters so that cluster developers or O&M engineers can categorize and manage clusters more flexibly, and better support monitoring, cost analysis, and tenant isolation requirements. You can call the TagResources operation to attach tags to clusters.
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
   * Adds tag key-value pairs to clusters so that cluster developers or O&M engineers can categorize and manage clusters more flexibly, and better support monitoring, cost analysis, and tenant isolation requirements. You can call the TagResources operation to attach tags to clusters.
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
   * Uninstalls specified components from a cluster when they are no longer needed, with the option to delete associated Alibaba Cloud resources.
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
   * Uninstalls specified components from a cluster when they are no longer needed, with the option to delete associated Alibaba Cloud resources.
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
   * Deletes resource tags when you no longer need the tag key-value pairs for a cluster. You can call the UntagResources operation to delete resource tags.
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
   * Deletes resource tags when you no longer need the tag key-value pairs for a cluster. You can call the UntagResources operation to delete resource tags.
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
   * When you need to record Kubernetes API requests and their results to trace cluster operation history or troubleshoot cluster issues, you can invoke the UpdateClusterAuditLogConfig operation to enable or shutdown the audit log feature for a specified ACK cluster and update the audit log configuration.
   * 
   * @remarks
   * Before you use this operation, make sure that you fully understand the billing methods and pricing of <props="china">[Simple Log Service](https://www.aliyun.com/price/product#/sls/detail/sls)<props="intl">[Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing).
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
   * When you need to record Kubernetes API requests and their results to trace cluster operation history or troubleshoot cluster issues, you can invoke the UpdateClusterAuditLogConfig operation to enable or shutdown the audit log feature for a specified ACK cluster and update the audit log configuration.
   * 
   * @remarks
   * Before you use this operation, make sure that you fully understand the billing methods and pricing of <props="china">[Simple Log Service](https://www.aliyun.com/price/product#/sls/detail/sls)<props="intl">[Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing).
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
   * Updates the cluster inspection configuration.
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
   * Updates the cluster inspection configuration.
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
   * Updates the contact group for an alert rule set in an ACK cluster.
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
   * Updates the contact group for an alert rule set in an ACK cluster.
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
   * ACK managed clusters support collecting control plane component logs and delivering them to your Simple Log Service (SLS) Log Project. Control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, Cloud Controller Manager, and other core components. You can call the UpdateControlPlaneLog operation to modify the control plane component log configuration, such as the log retention period and the components from which logs are collected.
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
   * ACK managed clusters support collecting control plane component logs and delivering them to your Simple Log Service (SLS) Log Project. Control plane components include Kube API Server, Kube Scheduler, Kube Controller Manager, Cloud Controller Manager, and other core components. You can call the UpdateControlPlaneLog operation to modify the control plane component log configuration, such as the log retention period and the components from which logs are collected.
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
   * The default expiration time of the KubeConfig issued by an ACK cluster is 3 years. You can use an Alibaba Cloud account to customize the configuration by invoking the UpdateK8sClusterUserConfigExpire operation to specify the expiration time (1 to 876,000 hours) of the KubeConfig issued to a Resource Access Management (RAM) user or role in an ACK cluster.
   * 
   * @remarks
   * - This operation can be called only by an Alibaba Cloud account.
   * - If you revoke the KubeConfig credential used in the cluster, the custom expiration time configured for the KubeConfig of the cluster is also reset. You must call this operation to reconfigure the expiration time.
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
   * The default expiration time of the KubeConfig issued by an ACK cluster is 3 years. You can use an Alibaba Cloud account to customize the configuration by invoking the UpdateK8sClusterUserConfigExpire operation to specify the expiration time (1 to 876,000 hours) of the KubeConfig issued to a Resource Access Management (RAM) user or role in an ACK cluster.
   * 
   * @remarks
   * - This operation can be called only by an Alibaba Cloud account.
   * - If you revoke the KubeConfig credential used in the cluster, the custom expiration time configured for the KubeConfig of the cluster is also reset. You must call this operation to reconfigure the expiration time.
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
   * Updates the Secret encryption at rest configuration for a specified cluster by cluster ID.
   * 
   * @remarks
   * While enabling or disabling encryption at rest and after the feature is enabled, do not disable or delete the KMS key used by this feature in the KMS console or through OpenAPI. Otherwise, the cluster API Server becomes unavailable, which prevents normal retrieval of objects such as Secrets and ServiceAccounts and affects the normal operation of business applications. For more information, see [Encrypt Secrets at rest by using China KMS](https://help.aliyun.com/document_detail/177372.html).
   * * The user or role that calls this API operation must be granted additional cluster RBAC permissions (O&M engineer or administrator permissions). Otherwise, the ForbiddenUpdateKMSState error code is returned.
   * * After this API operation is successfully called, the cluster status changes to updating. After the update is complete, the cluster status changes back to running. After a change is complete for a cluster, wait at least 5 minutes before calling this API operation again. Otherwise, HTTP status code 409 is returned.
   * 
   * @param request - UpdateKMSEncryptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKMSEncryptionResponse
   */
  async updateKMSEncryptionWithOptions(ClusterId: string, request: $_model.UpdateKMSEncryptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKMSEncryptionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disableEncryption)) {
      body["disable_encryption"] = request.disableEncryption;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      body["kms_key_id"] = request.kmsKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKMSEncryption",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(ClusterId)}/kms`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateKMSEncryptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKMSEncryptionResponse({}));
  }

  /**
   * Updates the Secret encryption at rest configuration for a specified cluster by cluster ID.
   * 
   * @remarks
   * While enabling or disabling encryption at rest and after the feature is enabled, do not disable or delete the KMS key used by this feature in the KMS console or through OpenAPI. Otherwise, the cluster API Server becomes unavailable, which prevents normal retrieval of objects such as Secrets and ServiceAccounts and affects the normal operation of business applications. For more information, see [Encrypt Secrets at rest by using China KMS](https://help.aliyun.com/document_detail/177372.html).
   * * The user or role that calls this API operation must be granted additional cluster RBAC permissions (O&M engineer or administrator permissions). Otherwise, the ForbiddenUpdateKMSState error code is returned.
   * * After this API operation is successfully called, the cluster status changes to updating. After the update is complete, the cluster status changes back to running. After a change is complete for a cluster, wait at least 5 minutes before calling this API operation again. Otherwise, HTTP status code 409 is returned.
   * 
   * @param request - UpdateKMSEncryptionRequest
   * @returns UpdateKMSEncryptionResponse
   */
  async updateKMSEncryption(ClusterId: string, request: $_model.UpdateKMSEncryptionRequest): Promise<$_model.UpdateKMSEncryptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKMSEncryptionWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Updates a node component.
   * 
   * @param request - UpdateNodePoolComponentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodePoolComponentResponse
   */
  async updateNodePoolComponentWithOptions(clusterId: string, nodepoolId: string, request: $_model.UpdateNodePoolComponentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodePoolComponentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.disableRolling)) {
      body["disableRolling"] = request.disableRolling;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.nodeNames)) {
      body["nodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.rollingPolicy)) {
      body["rollingPolicy"] = request.rollingPolicy;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodePoolComponent",
      version: "2015-12-15",
      protocol: "HTTPS",
      pathname: `/clusters/${$dara.URL.percentEncode(clusterId)}/nodepools/${$dara.URL.percentEncode(nodepoolId)}/component`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodePoolComponentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodePoolComponentResponse({}));
  }

  /**
   * Updates a node component.
   * 
   * @param request - UpdateNodePoolComponentRequest
   * @returns UpdateNodePoolComponentResponse
   */
  async updateNodePoolComponent(clusterId: string, nodepoolId: string, request: $_model.UpdateNodePoolComponentRequest): Promise<$_model.UpdateNodePoolComponentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNodePoolComponentWithOptions(clusterId, nodepoolId, request, headers, runtime);
  }

  /**
   * Updates the deletion protection status of a specified resource. Currently supported resource types include namespaces and services.
   * You can call this operation to enable deletion protection for namespaces or services that involve critical business or sensitive data to avoid maintenance costs caused by accidental deletion.
   * 
   * @remarks
   * Before calling this operation, install or upgrade the security policy component for the cluster. For more information, see [Enable security policy management](https://help.aliyun.com/document_detail/359818.html).
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
   * Updates the deletion protection status of a specified resource. Currently supported resource types include namespaces and services.
   * You can call this operation to enable deletion protection for namespaces or services that involve critical business or sensitive data to avoid maintenance costs caused by accidental deletion.
   * 
   * @remarks
   * Before calling this operation, install or upgrade the security policy component for the cluster. For more information, see [Enable security policy management](https://help.aliyun.com/document_detail/359818.html).
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. Calls the UpdateTemplate operation to update an orchestration template configuration.
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
   * An orchestration template defines and describes a set of Kubernetes cluster resources in a declarative manner, specifying how applications should run or be configured. Calls the UpdateTemplate operation to update an orchestration template configuration.
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
   * In an ACK cluster, non-cluster creators, Resource Access Management (RAM) users, and RAM roles have no RBAC permissions by default. You can invoke the UpdateUserPermissions operation to update the RBAC access permissions of a RAM user or role, including accessible resources, permission scope, and preset role types, to better manage cluster management and secure access control.
   * 
   * @remarks
   * You can update the cluster authorization information of a target Resource Access Management (RAM) user or RAM role by using full update or incremental update. A full update overwrites all existing cluster permissions of the target RAM user or RAM role. The request must include all permission configurations that you want to grant to the target RAM user or RAM role. An incremental update includes add and delete operations. Only the cluster authorization information included in the request is changed, and other cluster permissions of the RAM user or RAM role are not affected.
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
   * In an ACK cluster, non-cluster creators, Resource Access Management (RAM) users, and RAM roles have no RBAC permissions by default. You can invoke the UpdateUserPermissions operation to update the RBAC access permissions of a RAM user or role, including accessible resources, permission scope, and preset role types, to better manage cluster management and secure access control.
   * 
   * @remarks
   * You can update the cluster authorization information of a target Resource Access Management (RAM) user or RAM role by using full update or incremental update. A full update overwrites all existing cluster permissions of the target RAM user or RAM role. The request must include all permission configurations that you want to grant to the target RAM user or RAM role. An incremental update includes add and delete operations. Only the cluster authorization information included in the request is changed, and other cluster permissions of the RAM user or RAM role are not affected.
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
   * To avoid potential security and stability risks of expired cluster versions and to use new features of the latest cluster versions, upgrade your clusters in accordance with the ACK cluster version release schedule. You can call the UpgradeCluster operation to manually upgrade a cluster.
   * 
   * @remarks
   * After you successfully call the UpgradeCluster operation, the API returns the `task_id` of the upgrade task. You can manage the task by calling the following task API operations:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html)
   * - [Call ResumeTask to resume a paused task](https://help.aliyun.com/document_detail/2667987.html)
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html).
   * >Notice: Starting July 4, 2026, the request parameters rolling_policy and rolling_policy.max_parallelism will no longer take effect. Use [UpgradeClusterNodepool](https://help.aliyun.com/document_detail/2667922.html) to upgrade worker nodes instead. For more information about the changes, see [Notice on changes to ACK cluster management OpenAPI request and response parameters and OpenAPI deprecation](https://help.aliyun.com/document_detail/2932733.html).</notice>.
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
   * To avoid potential security and stability risks of expired cluster versions and to use new features of the latest cluster versions, upgrade your clusters in accordance with the ACK cluster version release schedule. You can call the UpgradeCluster operation to manually upgrade a cluster.
   * 
   * @remarks
   * After you successfully call the UpgradeCluster operation, the API returns the `task_id` of the upgrade task. You can manage the task by calling the following task API operations:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html)
   * - [Call ResumeTask to resume a paused task](https://help.aliyun.com/document_detail/2667987.html)
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html).
   * >Notice: Starting July 4, 2026, the request parameters rolling_policy and rolling_policy.max_parallelism will no longer take effect. Use [UpgradeClusterNodepool](https://help.aliyun.com/document_detail/2667922.html) to upgrade worker nodes instead. For more information about the changes, see [Notice on changes to ACK cluster management OpenAPI request and response parameters and OpenAPI deprecation](https://help.aliyun.com/document_detail/2932733.html).</notice>.
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
   * Upgrades the versions of cluster component instances so that you can benefit from the feature optimizations in the new versions.
   * 
   * @remarks
   * - Upgrading cluster component instance versions may affect your services. Assess the impact before performing the upgrade during off-peak hours, and back up relevant data in advance.
   * - Before upgrading a component, refer to [Component release notes](https://help.aliyun.com/document_detail/176087.html) to learn about the changes and their impact for the specified component.
   * - Upgrade components one at a time. Confirm that one component has been upgraded successfully before upgrading the next one.
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
   * Upgrades the versions of cluster component instances so that you can benefit from the feature optimizations in the new versions.
   * 
   * @remarks
   * - Upgrading cluster component instance versions may affect your services. Assess the impact before performing the upgrade during off-peak hours, and back up relevant data in advance.
   * - Before upgrading a component, refer to [Component release notes](https://help.aliyun.com/document_detail/176087.html) to learn about the changes and their impact for the specified component.
   * - Upgrade components one at a time. Confirm that one component has been upgraded successfully before upgrading the next one.
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
   * Upgrades the kubelet version (which should match the control plane version), operating system version, or container runtime version of a specified cluster node pool.
   * 
   * @remarks
   * Upgrades the Kubernetes version, operating system version, or container runtime version of nodes in a specified cluster node pool. After you call the UpgradeClusterNodepool operation, the API returns a task_id for the upgrade task. You can manage the task by calling the following task API operations:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html)
   * - [Call ResumeTask to resume a paused task](https://help.aliyun.com/document_detail/2667987.html)
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html).
   * 
   * @param request - UpgradeClusterNodepoolRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeClusterNodepoolResponse
   */
  async upgradeClusterNodepoolWithOptions(ClusterId: string, NodepoolId: string, request: $_model.UpgradeClusterNodepoolRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeClusterNodepoolResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ignoreWarningCheck)) {
      body["ignore_warning_check"] = request.ignoreWarningCheck;
    }

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
   * Upgrades the kubelet version (which should match the control plane version), operating system version, or container runtime version of a specified cluster node pool.
   * 
   * @remarks
   * Upgrades the Kubernetes version, operating system version, or container runtime version of nodes in a specified cluster node pool. After you call the UpgradeClusterNodepool operation, the API returns a task_id for the upgrade task. You can manage the task by calling the following task API operations:
   * - [Call DescribeTaskInfo to query task details](https://help.aliyun.com/document_detail/2667985.html)
   * - [Call PauseTask to pause a running task](https://help.aliyun.com/document_detail/2667986.html)
   * - [Call ResumeTask to resume a paused task](https://help.aliyun.com/document_detail/2667987.html)
   * - [Call CancelTask to cancel a running task](https://help.aliyun.com/document_detail/2667988.html).
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
