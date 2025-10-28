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
      'ap-northeast-2-pop': "edas.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-3': "edas.ap-northeast-1.aliyuncs.com",
      'ap-southeast-5': "edas.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "edas.aliyuncs.com",
      'cn-beijing-finance-pop': "edas.aliyuncs.com",
      'cn-beijing-gov-1': "edas.aliyuncs.com",
      'cn-beijing-nu16-b01': "edas.aliyuncs.com",
      'cn-chengdu': "edas.aliyuncs.com",
      'cn-edge-1': "edas.aliyuncs.com",
      'cn-fujian': "edas.aliyuncs.com",
      'cn-haidian-cm12-c01': "edas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "edas.aliyuncs.com",
      'cn-hangzhou-finance': "edas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "edas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "edas.aliyuncs.com",
      'cn-hangzhou-test-306': "edas.aliyuncs.com",
      'cn-hongkong-finance-pop': "edas.aliyuncs.com",
      'cn-huhehaote': "edas.aliyuncs.com",
      'cn-qingdao-nebula': "edas.aliyuncs.com",
      'cn-shanghai-et15-b01': "edas.aliyuncs.com",
      'cn-shanghai-et2-b01': "edas.aliyuncs.com",
      'cn-shanghai-finance-1': "edas.aliyuncs.com",
      'cn-shanghai-inner': "edas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "edas.aliyuncs.com",
      'cn-shenzhen-finance-1': "edas.aliyuncs.com",
      'cn-shenzhen-inner': "edas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "edas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "edas.aliyuncs.com",
      'cn-wuhan': "edas.aliyuncs.com",
      'cn-yushanfang': "edas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "edas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "edas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "edas.aliyuncs.com",
      'eu-west-1': "edas.ap-northeast-1.aliyuncs.com",
      'eu-west-1-oxs': "edas.ap-northeast-1.aliyuncs.com",
      'me-east-1': "edas.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "edas.ap-northeast-1.aliyuncs.com",
      'us-west-1': "edas.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("edas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Terminates a change process and rolls back the application. This operation is applicable to applications that are deployed in Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - AbortAndRollbackChangeOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortAndRollbackChangeOrderResponse
   */
  async abortAndRollbackChangeOrderWithOptions(request: $_model.AbortAndRollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AbortAndRollbackChangeOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortAndRollbackChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_abort_and_rollback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortAndRollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.AbortAndRollbackChangeOrderResponse({}));
  }

  /**
   * Terminates a change process and rolls back the application. This operation is applicable to applications that are deployed in Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - AbortAndRollbackChangeOrderRequest
   * @returns AbortAndRollbackChangeOrderResponse
   */
  async abortAndRollbackChangeOrder(request: $_model.AbortAndRollbackChangeOrderRequest): Promise<$_model.AbortAndRollbackChangeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortAndRollbackChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * Terminates a change process.
   * 
   * @param request - AbortChangeOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbortChangeOrderResponse
   */
  async abortChangeOrderWithOptions(request: $_model.AbortChangeOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AbortChangeOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_abort`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.AbortChangeOrderResponse({}));
  }

  /**
   * Terminates a change process.
   * 
   * @param request - AbortChangeOrderRequest
   * @returns AbortChangeOrderResponse
   */
  async abortChangeOrder(request: $_model.AbortChangeOrderRequest): Promise<$_model.AbortChangeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.abortChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * Adds a log directory to an application. This operation is applicable to applications that are deployed in Alibaba Cloud Elastic Compute Service (ECS) clusters and hybrid cloud ECS clusters.
   * 
   * @param request - AddLogPathRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddLogPathResponse
   */
  async addLogPathWithOptions(request: $_model.AddLogPathRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddLogPathResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddLogPath",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/log/popListLogDirs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddLogPathResponse>(await this.callApi(params, req, runtime), new $_model.AddLogPathResponse({}));
  }

  /**
   * Adds a log directory to an application. This operation is applicable to applications that are deployed in Alibaba Cloud Elastic Compute Service (ECS) clusters and hybrid cloud ECS clusters.
   * 
   * @param request - AddLogPathRequest
   * @returns AddLogPathResponse
   */
  async addLogPath(request: $_model.AddLogPathRequest): Promise<$_model.AddLogPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addLogPathWithOptions(request, headers, runtime);
  }

  /**
   * Grants a Resource Access Management (RAM) user the permissions on a specified application.
   * 
   * @param request - AuthorizeApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeApplicationResponse
   */
  async authorizeApplicationWithOptions(request: $_model.AuthorizeApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeApplicationResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeApplicationResponse({}));
  }

  /**
   * Grants a Resource Access Management (RAM) user the permissions on a specified application.
   * 
   * @param request - AuthorizeApplicationRequest
   * @returns AuthorizeApplicationResponse
   */
  async authorizeApplication(request: $_model.AuthorizeApplicationRequest): Promise<$_model.AuthorizeApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Grants a Resource Access Management (RAM) user the permissions on a resource group.
   * 
   * @param request - AuthorizeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeResourceGroupResponse
   */
  async authorizeResourceGroupWithOptions(request: $_model.AuthorizeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeResourceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_res_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeResourceGroupResponse({}));
  }

  /**
   * Grants a Resource Access Management (RAM) user the permissions on a resource group.
   * 
   * @param request - AuthorizeResourceGroupRequest
   * @returns AuthorizeResourceGroupResponse
   */
  async authorizeResourceGroup(request: $_model.AuthorizeResourceGroupRequest): Promise<$_model.AuthorizeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Assigns one or more roles to a RAM user.
   * 
   * @param request - AuthorizeRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthorizeRoleResponse
   */
  async authorizeRoleWithOptions(request: $_model.AuthorizeRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AuthorizeRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AuthorizeRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authorize_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AuthorizeRoleResponse>(await this.callApi(params, req, runtime), new $_model.AuthorizeRoleResponse({}));
  }

  /**
   * Assigns one or more roles to a RAM user.
   * 
   * @param request - AuthorizeRoleRequest
   * @returns AuthorizeRoleResponse
   */
  async authorizeRole(request: $_model.AuthorizeRoleRequest): Promise<$_model.AuthorizeRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authorizeRoleWithOptions(request, headers, runtime);
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application that is deployed in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - BindEcsSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindEcsSlbResponse
   */
  async bindEcsSlbWithOptions(request: $_model.BindEcsSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindEcsSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deployGroupId)) {
      query["DeployGroupId"] = request.deployGroupId;
    }

    if (!$dara.isNull(request.listenerHealthCheckUrl)) {
      query["ListenerHealthCheckUrl"] = request.listenerHealthCheckUrl;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.VForwardingUrlRule)) {
      query["VForwardingUrlRule"] = request.VForwardingUrlRule;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.VServerGroupName)) {
      query["VServerGroupName"] = request.VServerGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindEcsSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/slb/bind_slb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindEcsSlbResponse>(await this.callApi(params, req, runtime), new $_model.BindEcsSlbResponse({}));
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application that is deployed in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - BindEcsSlbRequest
   * @returns BindEcsSlbResponse
   */
  async bindEcsSlb(request: $_model.BindEcsSlbRequest): Promise<$_model.BindEcsSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindEcsSlbWithOptions(request, headers, runtime);
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - BindK8sSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindK8sSlbResponse
   */
  async bindK8sSlbWithOptions(request: $_model.BindK8sSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindK8sSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindK8sSlbResponse>(await this.callApi(params, req, runtime), new $_model.BindK8sSlbResponse({}));
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - BindK8sSlbRequest
   * @returns BindK8sSlbResponse
   */
  async bindK8sSlb(request: $_model.BindK8sSlbRequest): Promise<$_model.BindK8sSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindK8sSlbWithOptions(request, headers, runtime);
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application in Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - BindSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindSlbResponse
   */
  async bindSlbWithOptions(request: $_model.BindSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.slbIp)) {
      query["SlbIp"] = request.slbIp;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/bind_slb_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSlbResponse>(await this.callApi(params, req, runtime), new $_model.BindSlbResponse({}));
  }

  /**
   * Binds a Server Load Balancer (SLB) instance to an application in Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - BindSlbRequest
   * @returns BindSlbResponse
   */
  async bindSlb(request: $_model.BindSlbRequest): Promise<$_model.BindSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
  }

  /**
   * Changes the application instance group for an Elastic Compute Service (ECS) instance in an ECS cluster.
   * 
   * @param request - ChangeDeployGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDeployGroupResponse
   */
  async changeDeployGroupWithOptions(request: $_model.ChangeDeployGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDeployGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    if (!$dara.isNull(request.forceStatus)) {
      query["ForceStatus"] = request.forceStatus;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_change_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDeployGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDeployGroupResponse({}));
  }

  /**
   * Changes the application instance group for an Elastic Compute Service (ECS) instance in an ECS cluster.
   * 
   * @param request - ChangeDeployGroupRequest
   * @returns ChangeDeployGroupResponse
   */
  async changeDeployGroup(request: $_model.ChangeDeployGroupRequest): Promise<$_model.ChangeDeployGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeDeployGroupWithOptions(request, headers, runtime);
  }

  /**
   * Manually confirms the release of the next batch.
   * 
   * @param request - ContinuePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinuePipelineResponse
   */
  async continuePipelineWithOptions(request: $_model.ContinuePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ContinuePipelineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.confirm)) {
      query["Confirm"] = request.confirm;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinuePipeline",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/pipeline_batch_confirm`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinuePipelineResponse>(await this.callApi(params, req, runtime), new $_model.ContinuePipelineResponse({}));
  }

  /**
   * Manually confirms the release of the next batch.
   * 
   * @param request - ContinuePipelineRequest
   * @returns ContinuePipelineResponse
   */
  async continuePipeline(request: $_model.ContinuePipelineRequest): Promise<$_model.ContinuePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.continuePipelineWithOptions(request, headers, runtime);
  }

  /**
   * Converts a Deployment into an application.
   * 
   * @param request - ConvertK8sResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConvertK8sResourceResponse
   */
  async convertK8sResourceWithOptions(request: $_model.ConvertK8sResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConvertK8sResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConvertK8sResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/k8s_resource_convert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConvertK8sResourceResponse>(await this.callApi(params, req, runtime), new $_model.ConvertK8sResourceResponse({}));
  }

  /**
   * Converts a Deployment into an application.
   * 
   * @param request - ConvertK8sResourceRequest
   * @returns ConvertK8sResourceResponse
   */
  async convertK8sResource(request: $_model.ConvertK8sResourceRequest): Promise<$_model.ConvertK8sResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.convertK8sResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates an auto scaling policy for an application.
   * 
   * @param request - CreateApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationScalingRuleResponse
   */
  async createApplicationScalingRuleWithOptions(request: $_model.CreateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scalingBehaviour)) {
      query["ScalingBehaviour"] = request.scalingBehaviour;
    }

    if (!$dara.isNull(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!$dara.isNull(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!$dara.isNull(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!$dara.isNull(request.scalingRuleTrigger)) {
      query["ScalingRuleTrigger"] = request.scalingRuleTrigger;
    }

    if (!$dara.isNull(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationScalingRuleResponse({}));
  }

  /**
   * Creates an auto scaling policy for an application.
   * 
   * @param request - CreateApplicationScalingRuleRequest
   * @returns CreateApplicationScalingRuleResponse
   */
  async createApplicationScalingRule(request: $_model.CreateApplicationScalingRuleRequest): Promise<$_model.CreateApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Creates a configuration template.
   * 
   * @param request - CreateConfigTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigTemplateResponse
   */
  async createConfigTemplateWithOptions(request: $_model.CreateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigTemplateResponse({}));
  }

  /**
   * Creates a configuration template.
   * 
   * @param request - CreateConfigTemplateRequest
   * @returns CreateConfigTemplateResponse
   */
  async createConfigTemplate(request: $_model.CreateConfigTemplateRequest): Promise<$_model.CreateConfigTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Generates a command that is used to import instances to a hybrid cloud Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * ## Description
   * You must call the CreateIDCImportCommand operation first to generate a command used to import hybrid cloud ECS instances to a hybrid cloud ECS cluster. Then, run this command on the instances to import the instances to the cluster.
   * 
   * @param request - CreateIDCImportCommandRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIDCImportCommandResponse
   */
  async createIDCImportCommandWithOptions(request: $_model.CreateIDCImportCommandRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIDCImportCommandResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIDCImportCommand",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/create_idc_import_command`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIDCImportCommandResponse>(await this.callApi(params, req, runtime), new $_model.CreateIDCImportCommandResponse({}));
  }

  /**
   * Generates a command that is used to import instances to a hybrid cloud Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * ## Description
   * You must call the CreateIDCImportCommand operation first to generate a command used to import hybrid cloud ECS instances to a hybrid cloud ECS cluster. Then, run this command on the instances to import the instances to the cluster.
   * 
   * @param request - CreateIDCImportCommandRequest
   * @returns CreateIDCImportCommandResponse
   */
  async createIDCImportCommand(request: $_model.CreateIDCImportCommandRequest): Promise<$_model.CreateIDCImportCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIDCImportCommandWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Kubernetes ConfigMap.
   * 
   * @param request - CreateK8sConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateK8sConfigMapResponse
   */
  async createK8sConfigMapWithOptions(request: $_model.CreateK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateK8sConfigMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateK8sConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.CreateK8sConfigMapResponse({}));
  }

  /**
   * Creates a Kubernetes ConfigMap.
   * 
   * @param request - CreateK8sConfigMapRequest
   * @returns CreateK8sConfigMapResponse
   */
  async createK8sConfigMap(request: $_model.CreateK8sConfigMapRequest): Promise<$_model.CreateK8sConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Creates an Ingress.
   * 
   * @param request - CreateK8sIngressRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateK8sIngressRuleResponse
   */
  async createK8sIngressRuleWithOptions(request: $_model.CreateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateK8sIngressRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateK8sIngressRuleResponse({}));
  }

  /**
   * Creates an Ingress.
   * 
   * @param request - CreateK8sIngressRuleRequest
   * @returns CreateK8sIngressRuleResponse
   */
  async createK8sIngressRule(request: $_model.CreateK8sIngressRuleRequest): Promise<$_model.CreateK8sIngressRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sIngressRuleWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Kubernetes Secret.
   * 
   * @param request - CreateK8sSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateK8sSecretResponse
   */
  async createK8sSecretWithOptions(request: $_model.CreateK8sSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateK8sSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.base64Encoded)) {
      body["Base64Encoded"] = request.base64Encoded;
    }

    if (!$dara.isNull(request.certId)) {
      body["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certRegionId)) {
      body["CertRegionId"] = request.certRegionId;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateK8sSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateK8sSecretResponse({}));
  }

  /**
   * Creates a Kubernetes Secret.
   * 
   * @param request - CreateK8sSecretRequest
   * @returns CreateK8sSecretResponse
   */
  async createK8sSecret(request: $_model.CreateK8sSecretRequest): Promise<$_model.CreateK8sSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sSecretWithOptions(request, headers, runtime);
  }

  /**
   * Creates an application service in a Kubernetes cluster.
   * 
   * @param request - CreateK8sServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateK8sServiceResponse
   */
  async createK8sServiceWithOptions(request: $_model.CreateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateK8sServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.externalTrafficPolicy)) {
      query["ExternalTrafficPolicy"] = request.externalTrafficPolicy;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateK8sServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateK8sServiceResponse({}));
  }

  /**
   * Creates an application service in a Kubernetes cluster.
   * 
   * @param request - CreateK8sServiceRequest
   * @returns CreateK8sServiceResponse
   */
  async createK8sService(request: $_model.CreateK8sServiceRequest): Promise<$_model.CreateK8sServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createK8sServiceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @param request - DeleteApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_delete_app`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * Deletes an application.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an auto scaling policy for an application.
   * 
   * @param request - DeleteApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationScalingRuleResponse
   */
  async deleteApplicationScalingRuleWithOptions(request: $_model.DeleteApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationScalingRuleResponse({}));
  }

  /**
   * Deletes an auto scaling policy for an application.
   * 
   * @param request - DeleteApplicationScalingRuleRequest
   * @returns DeleteApplicationScalingRuleResponse
   */
  async deleteApplicationScalingRule(request: $_model.DeleteApplicationScalingRuleRequest): Promise<$_model.DeleteApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an Elastic Compute Service (ECS) cluster or cancels the import of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: $_model.DeleteClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterResponse({}));
  }

  /**
   * Deletes an Elastic Compute Service (ECS) cluster or cancels the import of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: $_model.DeleteClusterRequest): Promise<$_model.DeleteClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterWithOptions(request, headers, runtime);
  }

  /**
   * Removes an Elastic Compute Service (ECS) instance from a cluster.
   * 
   * @param request - DeleteClusterMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterMemberResponse
   */
  async deleteClusterMemberWithOptions(request: $_model.DeleteClusterMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteClusterMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterMemberId)) {
      query["ClusterMemberId"] = request.clusterMemberId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteClusterMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteClusterMemberResponse({}));
  }

  /**
   * Removes an Elastic Compute Service (ECS) instance from a cluster.
   * 
   * @param request - DeleteClusterMemberRequest
   * @returns DeleteClusterMemberResponse
   */
  async deleteClusterMember(request: $_model.DeleteClusterMemberRequest): Promise<$_model.DeleteClusterMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteClusterMemberWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a configuration template.
   * 
   * @param request - DeleteConfigTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigTemplateResponse
   */
  async deleteConfigTemplateWithOptions(request: $_model.DeleteConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigTemplateResponse({}));
  }

  /**
   * Deletes a configuration template.
   * 
   * @param request - DeleteConfigTemplateRequest
   * @returns DeleteConfigTemplateResponse
   */
  async deleteConfigTemplate(request: $_model.DeleteConfigTemplateRequest): Promise<$_model.DeleteConfigTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an instance group for an application.
   * 
   * @param request - DeleteDeployGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeployGroupResponse
   */
  async deleteDeployGroupWithOptions(request: $_model.DeleteDeployGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeployGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/deploy_group`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeployGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeployGroupResponse({}));
  }

  /**
   * Deletes an instance group for an application.
   * 
   * @param request - DeleteDeployGroupRequest
   * @returns DeleteDeployGroupResponse
   */
  async deleteDeployGroup(request: $_model.DeleteDeployGroupRequest): Promise<$_model.DeleteDeployGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeployGroupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an Elastic Compute Unit (ECU).
   * 
   * @param request - DeleteEcuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEcuResponse
   */
  async deleteEcuWithOptions(request: $_model.DeleteEcuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEcuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ecuId)) {
      query["EcuId"] = request.ecuId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/delete_ecu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEcuResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEcuResponse({}));
  }

  /**
   * Deletes an Elastic Compute Unit (ECU).
   * 
   * @param request - DeleteEcuRequest
   * @returns DeleteEcuResponse
   */
  async deleteEcu(request: $_model.DeleteEcuRequest): Promise<$_model.DeleteEcuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEcuWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an application from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeleteK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteK8sApplicationResponse
   */
  async deleteK8sApplicationWithOptions(request: $_model.DeleteK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteK8sApplicationResponse({}));
  }

  /**
   * Deletes an application from a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - DeleteK8sApplicationRequest
   * @returns DeleteK8sApplicationResponse
   */
  async deleteK8sApplication(request: $_model.DeleteK8sApplicationRequest): Promise<$_model.DeleteK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Kubernetes ConfigMap.
   * 
   * @param request - DeleteK8sConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteK8sConfigMapResponse
   */
  async deleteK8sConfigMapWithOptions(request: $_model.DeleteK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteK8sConfigMapResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteK8sConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.DeleteK8sConfigMapResponse({}));
  }

  /**
   * Deletes a Kubernetes ConfigMap.
   * 
   * @param request - DeleteK8sConfigMapRequest
   * @returns DeleteK8sConfigMapResponse
   */
  async deleteK8sConfigMap(request: $_model.DeleteK8sConfigMapRequest): Promise<$_model.DeleteK8sConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an ingress.
   * 
   * @param request - DeleteK8sIngressRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteK8sIngressRuleResponse
   */
  async deleteK8sIngressRuleWithOptions(request: $_model.DeleteK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteK8sIngressRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteK8sIngressRuleResponse({}));
  }

  /**
   * Deletes an ingress.
   * 
   * @param request - DeleteK8sIngressRuleRequest
   * @returns DeleteK8sIngressRuleResponse
   */
  async deleteK8sIngressRule(request: $_model.DeleteK8sIngressRuleRequest): Promise<$_model.DeleteK8sIngressRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sIngressRuleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Kubernetes Secret.
   * 
   * @param request - DeleteK8sSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteK8sSecretResponse
   */
  async deleteK8sSecretWithOptions(request: $_model.DeleteK8sSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteK8sSecretResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteK8sSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteK8sSecretResponse({}));
  }

  /**
   * Deletes a Kubernetes Secret.
   * 
   * @param request - DeleteK8sSecretRequest
   * @returns DeleteK8sSecretResponse
   */
  async deleteK8sSecret(request: $_model.DeleteK8sSecretRequest): Promise<$_model.DeleteK8sSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sSecretWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an application service from a Kubernetes cluster.
   * 
   * @param request - DeleteK8sServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteK8sServiceResponse
   */
  async deleteK8sServiceWithOptions(request: $_model.DeleteK8sServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteK8sServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteK8sServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteK8sServiceResponse({}));
  }

  /**
   * Deletes an application service from a Kubernetes cluster.
   * 
   * @param request - DeleteK8sServiceRequest
   * @returns DeleteK8sServiceResponse
   */
  async deleteK8sService(request: $_model.DeleteK8sServiceRequest): Promise<$_model.DeleteK8sServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteK8sServiceWithOptions(request, headers, runtime);
  }

  /**
   * Removes a log directory from an application. This operation is applicable to applications that are deployed in Alibaba Cloud Elastic Compute Service (ECS) clusters and hybrid cloud ECS clusters.
   * 
   * @param request - DeleteLogPathRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogPathResponse
   */
  async deleteLogPathWithOptions(request: $_model.DeleteLogPathRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogPathResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogPath",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/log/popListLogDirs`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogPathResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogPathResponse({}));
  }

  /**
   * Removes a log directory from an application. This operation is applicable to applications that are deployed in Alibaba Cloud Elastic Compute Service (ECS) clusters and hybrid cloud ECS clusters.
   * 
   * @param request - DeleteLogPathRequest
   * @returns DeleteLogPathResponse
   */
  async deleteLogPath(request: $_model.DeleteLogPathRequest): Promise<$_model.DeleteLogPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogPathWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Resource Access Management (RAM) role.
   * 
   * @param request - DeleteRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: $_model.DeleteRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/delete_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleResponse({}));
  }

  /**
   * Deletes a Resource Access Management (RAM) role.
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: $_model.DeleteRoleRequest): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a service group.
   * 
   * @param request - DeleteServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceGroupResponse
   */
  async deleteServiceGroupWithOptions(request: $_model.DeleteServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceGroupResponse({}));
  }

  /**
   * Deletes a service group.
   * 
   * @param request - DeleteServiceGroupRequest
   * @returns DeleteServiceGroupResponse
   */
  async deleteServiceGroup(request: $_model.DeleteServiceGroupRequest): Promise<$_model.DeleteServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimmingLaneResponse
   */
  async deleteSwimmingLaneWithOptions(request: $_model.DeleteSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimmingLaneResponse({}));
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimmingLaneRequest
   * @returns DeleteSwimmingLaneResponse
   */
  async deleteSwimmingLane(request: $_model.DeleteSwimmingLaneRequest): Promise<$_model.DeleteSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a specified custom namespace.
   * 
   * @param request - DeleteUserDefineRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserDefineRegionResponse
   */
  async deleteUserDefineRegionWithOptions(request: $_model.DeleteUserDefineRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserDefineRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserDefineRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_def`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserDefineRegionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserDefineRegionResponse({}));
  }

  /**
   * Deletes a specified custom namespace.
   * 
   * @param request - DeleteUserDefineRegionRequest
   * @returns DeleteUserDefineRegionResponse
   */
  async deleteUserDefineRegion(request: $_model.DeleteUserDefineRegionRequest): Promise<$_model.DeleteUserDefineRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserDefineRegionWithOptions(request, headers, runtime);
  }

  /**
   * Deploys an application in an Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * > To deploy an application in a Container Service for Kubernetes (ACK) cluster that is imported into Enterprise Distributed Application Service (EDAS), call the DeployK8sApplication operation provided by EDAS. For more information, see [](~~149420~~)DeployK8sApplication.
   * 
   * @param request - DeployApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationResponse
   */
  async deployApplicationWithOptions(request: $_model.DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appEnv)) {
      query["AppEnv"] = request.appEnv;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!$dara.isNull(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!$dara.isNull(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!$dara.isNull(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!$dara.isNull(request.deployType)) {
      query["DeployType"] = request.deployType;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.gray)) {
      query["Gray"] = request.gray;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!$dara.isNull(request.releaseType)) {
      query["ReleaseType"] = request.releaseType;
    }

    if (!$dara.isNull(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    if (!$dara.isNull(request.warUrl)) {
      query["WarUrl"] = request.warUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeployApplicationResponse({}));
  }

  /**
   * Deploys an application in an Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * > To deploy an application in a Container Service for Kubernetes (ACK) cluster that is imported into Enterprise Distributed Application Service (EDAS), call the DeployK8sApplication operation provided by EDAS. For more information, see [](~~149420~~)DeployK8sApplication.
   * 
   * @param request - DeployApplicationRequest
   * @returns DeployApplicationResponse
   */
  async deployApplication(request: $_model.DeployApplicationRequest): Promise<$_model.DeployApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Deploys an application in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - DeployK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployK8sApplicationResponse
   */
  async deployK8sApplicationWithOptions(request: $_model.DeployK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.args)) {
      query["Args"] = request.args;
    }

    if (!$dara.isNull(request.batchTimeout)) {
      query["BatchTimeout"] = request.batchTimeout;
    }

    if (!$dara.isNull(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!$dara.isNull(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!$dara.isNull(request.canaryRuleId)) {
      query["CanaryRuleId"] = request.canaryRuleId;
    }

    if (!$dara.isNull(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!$dara.isNull(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!$dara.isNull(request.customAffinity)) {
      query["CustomAffinity"] = request.customAffinity;
    }

    if (!$dara.isNull(request.customAgentVersion)) {
      query["CustomAgentVersion"] = request.customAgentVersion;
    }

    if (!$dara.isNull(request.customTolerations)) {
      query["CustomTolerations"] = request.customTolerations;
    }

    if (!$dara.isNull(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    if (!$dara.isNull(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
    }

    if (!$dara.isNull(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!$dara.isNull(request.enableEmptyPushReject)) {
      query["EnableEmptyPushReject"] = request.enableEmptyPushReject;
    }

    if (!$dara.isNull(request.enableLosslessRule)) {
      query["EnableLosslessRule"] = request.enableLosslessRule;
    }

    if (!$dara.isNull(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.image)) {
      query["Image"] = request.image;
    }

    if (!$dara.isNull(request.imagePlatforms)) {
      query["ImagePlatforms"] = request.imagePlatforms;
    }

    if (!$dara.isNull(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!$dara.isNull(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!$dara.isNull(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!$dara.isNull(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
    }

    if (!$dara.isNull(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!$dara.isNull(request.losslessRuleAligned)) {
      query["LosslessRuleAligned"] = request.losslessRuleAligned;
    }

    if (!$dara.isNull(request.losslessRuleDelayTime)) {
      query["LosslessRuleDelayTime"] = request.losslessRuleDelayTime;
    }

    if (!$dara.isNull(request.losslessRuleFuncType)) {
      query["LosslessRuleFuncType"] = request.losslessRuleFuncType;
    }

    if (!$dara.isNull(request.losslessRuleRelated)) {
      query["LosslessRuleRelated"] = request.losslessRuleRelated;
    }

    if (!$dara.isNull(request.losslessRuleWarmupTime)) {
      query["LosslessRuleWarmupTime"] = request.losslessRuleWarmupTime;
    }

    if (!$dara.isNull(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!$dara.isNull(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.memoryRequest)) {
      query["MemoryRequest"] = request.memoryRequest;
    }

    if (!$dara.isNull(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!$dara.isNull(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!$dara.isNull(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!$dara.isNull(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!$dara.isNull(request.packageVersionId)) {
      query["PackageVersionId"] = request.packageVersionId;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!$dara.isNull(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!$dara.isNull(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!$dara.isNull(request.sidecars)) {
      query["Sidecars"] = request.sidecars;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.startup)) {
      query["Startup"] = request.startup;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.terminateGracePeriod)) {
      query["TerminateGracePeriod"] = request.terminateGracePeriod;
    }

    if (!$dara.isNull(request.trafficControlStrategy)) {
      query["TrafficControlStrategy"] = request.trafficControlStrategy;
    }

    if (!$dara.isNull(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!$dara.isNull(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!$dara.isNull(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!$dara.isNull(request.userBaseImageUrl)) {
      query["UserBaseImageUrl"] = request.userBaseImageUrl;
    }

    if (!$dara.isNull(request.volumesStr)) {
      query["VolumesStr"] = request.volumesStr;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!$dara.isNull(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeployK8sApplicationResponse({}));
  }

  /**
   * Deploys an application in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - DeployK8sApplicationRequest
   * @returns DeployK8sApplicationResponse
   */
  async deployK8sApplication(request: $_model.DeployK8sApplicationRequest): Promise<$_model.DeployK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Queries Kubernetes application instances.
   * 
   * @param request - DescribeAppInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppInstanceListResponse
   */
  async describeAppInstanceListWithOptions(request: $_model.DescribeAppInstanceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppInstanceListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.withNodeInfo)) {
      query["WithNodeInfo"] = request.withNodeInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppInstanceList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/app_instance_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppInstanceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppInstanceListResponse({}));
  }

  /**
   * Queries Kubernetes application instances.
   * 
   * @param request - DescribeAppInstanceListRequest
   * @returns DescribeAppInstanceListResponse
   */
  async describeAppInstanceList(request: $_model.DescribeAppInstanceListRequest): Promise<$_model.DescribeAppInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the auto scaling policies of an application.
   * 
   * @param request - DescribeApplicationScalingRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationScalingRulesResponse
   */
  async describeApplicationScalingRulesWithOptions(request: $_model.DescribeApplicationScalingRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationScalingRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationScalingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationScalingRulesResponse({}));
  }

  /**
   * Queries the auto scaling policies of an application.
   * 
   * @param request - DescribeApplicationScalingRulesRequest
   * @returns DescribeApplicationScalingRulesResponse
   */
  async describeApplicationScalingRules(request: $_model.DescribeApplicationScalingRulesRequest): Promise<$_model.DescribeApplicationScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRulesWithOptions(request, headers, runtime);
  }

  /**
   * Disables an auto scaling policy for an application.
   * 
   * @param request - DisableApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableApplicationScalingRuleResponse
   */
  async disableApplicationScalingRuleWithOptions(request: $_model.DisableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableApplicationScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/disable_application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationScalingRuleResponse({}));
  }

  /**
   * Disables an auto scaling policy for an application.
   * 
   * @param request - DisableApplicationScalingRuleRequest
   * @returns DisableApplicationScalingRuleResponse
   */
  async disableApplicationScalingRule(request: $_model.DisableApplicationScalingRuleRequest): Promise<$_model.DisableApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Enables an auto scaling policy for an application.
   * 
   * @param request - EnableApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableApplicationScalingRuleResponse
   */
  async enableApplicationScalingRuleWithOptions(request: $_model.EnableApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableApplicationScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/enable_application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.EnableApplicationScalingRuleResponse({}));
  }

  /**
   * Enables an auto scaling policy for an application.
   * 
   * @param request - EnableApplicationScalingRuleRequest
   * @returns EnableApplicationScalingRuleResponse
   */
  async enableApplicationScalingRule(request: $_model.EnableApplicationScalingRuleRequest): Promise<$_model.EnableApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about the Deployment of a Kubernetes application.
   * 
   * @param request - GetAppDeploymentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppDeploymentResponse
   */
  async getAppDeploymentWithOptions(request: $_model.GetAppDeploymentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppDeploymentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppDeployment",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/app_deployment`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetAppDeploymentResponse({}));
  }

  /**
   * Queries the information about the Deployment of a Kubernetes application.
   * 
   * @param request - GetAppDeploymentRequest
   * @returns GetAppDeploymentResponse
   */
  async getAppDeployment(request: $_model.GetAppDeploymentRequest): Promise<$_model.GetAppDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppDeploymentWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details about a specified application in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - GetApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Queries the details about a specified application in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details about a change process.
   * 
   * @param request - GetChangeOrderInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChangeOrderInfoResponse
   */
  async getChangeOrderInfoWithOptions(request: $_model.GetChangeOrderInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChangeOrderInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChangeOrderInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChangeOrderInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetChangeOrderInfoResponse({}));
  }

  /**
   * Queries the details about a change process.
   * 
   * @param request - GetChangeOrderInfoRequest
   * @returns GetChangeOrderInfoResponse
   */
  async getChangeOrderInfo(request: $_model.GetChangeOrderInfoRequest): Promise<$_model.GetChangeOrderInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChangeOrderInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries a specific cluster.
   * 
   * @param request - GetClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: $_model.GetClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Queries a specific cluster.
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: $_model.GetClusterRequest): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Tomcat configuration of an application or an instance group in which an application is deployed.
   * 
   * @param request - GetContainerConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetContainerConfigurationResponse
   */
  async getContainerConfigurationWithOptions(request: $_model.GetContainerConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetContainerConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetContainerConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/container_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetContainerConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetContainerConfigurationResponse({}));
  }

  /**
   * Queries the Tomcat configuration of an application or an instance group in which an application is deployed.
   * 
   * @param request - GetContainerConfigurationRequest
   * @returns GetContainerConfigurationResponse
   */
  async getContainerConfiguration(request: $_model.GetContainerConfigurationRequest): Promise<$_model.GetContainerConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getContainerConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * Queries the configuration of Java startup parameters for an application.
   * 
   * @param request - GetJavaStartUpConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJavaStartUpConfigResponse
   */
  async getJavaStartUpConfigWithOptions(request: $_model.GetJavaStartUpConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJavaStartUpConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJavaStartUpConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/java_start_up_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJavaStartUpConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetJavaStartUpConfigResponse({}));
  }

  /**
   * Queries the configuration of Java startup parameters for an application.
   * 
   * @param request - GetJavaStartUpConfigRequest
   * @returns GetJavaStartUpConfigResponse
   */
  async getJavaStartUpConfig(request: $_model.GetJavaStartUpConfigRequest): Promise<$_model.GetJavaStartUpConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJavaStartUpConfigWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Java Virtual Machine (JVM) configuration of an application or an instance group in which an application is deployed.
   * 
   * @param request - GetJvmConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJvmConfigurationResponse
   */
  async getJvmConfigurationWithOptions(request: $_model.GetJvmConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJvmConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJvmConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_jvm_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJvmConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetJvmConfigurationResponse({}));
  }

  /**
   * Queries the Java Virtual Machine (JVM) configuration of an application or an instance group in which an application is deployed.
   * 
   * @param request - GetJvmConfigurationRequest
   * @returns GetJvmConfigurationResponse
   */
  async getJvmConfiguration(request: $_model.GetJvmConfigurationRequest): Promise<$_model.GetJvmConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJvmConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * Queries the precheck result of a Kubernetes application.
   * 
   * @param request - GetK8sAppPrecheckResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetK8sAppPrecheckResultResponse
   */
  async getK8sAppPrecheckResultWithOptions(request: $_model.GetK8sAppPrecheckResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetK8sAppPrecheckResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetK8sAppPrecheckResult",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/app_precheck`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetK8sAppPrecheckResultResponse>(await this.callApi(params, req, runtime), new $_model.GetK8sAppPrecheckResultResponse({}));
  }

  /**
   * Queries the precheck result of a Kubernetes application.
   * 
   * @param request - GetK8sAppPrecheckResultRequest
   * @returns GetK8sAppPrecheckResultResponse
   */
  async getK8sAppPrecheckResult(request: $_model.GetK8sAppPrecheckResultRequest): Promise<$_model.GetK8sAppPrecheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sAppPrecheckResultWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about applications deployed in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - GetK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetK8sApplicationResponse
   */
  async getK8sApplicationWithOptions(request: $_model.GetK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_application`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetK8sApplicationResponse({}));
  }

  /**
   * Queries the information about applications deployed in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - GetK8sApplicationRequest
   * @returns GetK8sApplicationResponse
   */
  async getK8sApplication(request: $_model.GetK8sApplicationRequest): Promise<$_model.GetK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Queries Container Service for Kubernetes (ACK) clusters or Serverless Kubernetes clusters in a specified region.
   * 
   * @param request - GetK8sClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetK8sClusterResponse
   */
  async getK8sClusterWithOptions(request: $_model.GetK8sClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetK8sClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    if (!$dara.isNull(request.subClusterType)) {
      query["SubClusterType"] = request.subClusterType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetK8sCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s_clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetK8sClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetK8sClusterResponse({}));
  }

  /**
   * Queries Container Service for Kubernetes (ACK) clusters or Serverless Kubernetes clusters in a specified region.
   * 
   * @param request - GetK8sClusterRequest
   * @returns GetK8sClusterResponse
   */
  async getK8sCluster(request: $_model.GetK8sClusterRequest): Promise<$_model.GetK8sClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sClusterWithOptions(request, headers, runtime);
  }

  /**
   * Queries application services that are deployed in a Kubernetes cluster.
   * 
   * @param request - GetK8sServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetK8sServicesResponse
   */
  async getK8sServicesWithOptions(request: $_model.GetK8sServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetK8sServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetK8sServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetK8sServicesResponse>(await this.callApi(params, req, runtime), new $_model.GetK8sServicesResponse({}));
  }

  /**
   * Queries application services that are deployed in a Kubernetes cluster.
   * 
   * @param request - GetK8sServicesRequest
   * @returns GetK8sServicesResponse
   */
  async getK8sServices(request: $_model.GetK8sServicesRequest): Promise<$_model.GetK8sServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getK8sServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Security Token Service (STS) tokens that are required for temporary storage.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPackageStorageCredentialResponse
   */
  async getPackageStorageCredentialWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPackageStorageCredentialResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPackageStorageCredential",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/package_storage_credential`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPackageStorageCredentialResponse>(await this.callApi(params, req, runtime), new $_model.GetPackageStorageCredentialResponse({}));
  }

  /**
   * Queries the Security Token Service (STS) tokens that are required for temporary storage.
   * @returns GetPackageStorageCredentialResponse
   */
  async getPackageStorageCredential(): Promise<$_model.GetPackageStorageCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPackageStorageCredentialWithOptions(headers, runtime);
  }

  /**
   * Queries scaling rules.
   * 
   * @param request - GetScalingRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScalingRulesResponse
   */
  async getScalingRulesWithOptions(request: $_model.GetScalingRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScalingRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScalingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/scalingRules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScalingRulesResponse>(await this.callApi(params, req, runtime), new $_model.GetScalingRulesResponse({}));
  }

  /**
   * Queries scaling rules.
   * 
   * @param request - GetScalingRulesRequest
   * @returns GetScalingRulesResponse
   */
  async getScalingRules(request: $_model.GetScalingRulesRequest): Promise<$_model.GetScalingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScalingRulesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the security token information of a namespace. You can call this operation to query information, such as the AccessKey ID, AccessKey secret, tenant ID, and the domain name of Address Server, for the specified namespace.
   * 
   * @param request - GetSecureTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecureTokenResponse
   */
  async getSecureTokenWithOptions(request: $_model.GetSecureTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecureTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecureToken",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/secure_token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecureTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetSecureTokenResponse({}));
  }

  /**
   * Queries the security token information of a namespace. You can call this operation to query information, such as the AccessKey ID, AccessKey secret, tenant ID, and the domain name of Address Server, for the specified namespace.
   * 
   * @param request - GetSecureTokenRequest
   * @returns GetSecureTokenResponse
   */
  async getSecureToken(request: $_model.GetSecureTokenRequest): Promise<$_model.GetSecureTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecureTokenWithOptions(request, headers, runtime);
  }

  /**
   * Queries service consumers.
   * 
   * @param request - GetServiceConsumersPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConsumersPageResponse
   */
  async getServiceConsumersPageWithOptions(request: $_model.GetServiceConsumersPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceConsumersPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConsumersPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceConsumersPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceConsumersPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceConsumersPageResponse({}));
  }

  /**
   * Queries service consumers.
   * 
   * @param request - GetServiceConsumersPageRequest
   * @returns GetServiceConsumersPageResponse
   */
  async getServiceConsumersPage(request: $_model.GetServiceConsumersPageRequest): Promise<$_model.GetServiceConsumersPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceConsumersPageWithOptions(request, headers, runtime);
  }

  /**
   * Queries service details.
   * 
   * @param request - GetServiceDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceDetailResponse
   */
  async getServiceDetailWithOptions(request: $_model.GetServiceDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceDetail",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceDetailResponse({}));
  }

  /**
   * Queries service details.
   * 
   * @param request - GetServiceDetailRequest
   * @returns GetServiceDetailResponse
   */
  async getServiceDetail(request: $_model.GetServiceDetailRequest): Promise<$_model.GetServiceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDetailWithOptions(request, headers, runtime);
  }

  /**
   * Queries services.
   * 
   * @param request - GetServiceListPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceListPageResponse
   */
  async getServiceListPageWithOptions(request: $_model.GetServiceListPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceListPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.searchType)) {
      query["searchType"] = request.searchType;
    }

    if (!$dara.isNull(request.searchValue)) {
      query["searchValue"] = request.searchValue;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.side)) {
      query["side"] = request.side;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceListPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceListPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceListPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceListPageResponse({}));
  }

  /**
   * Queries services.
   * 
   * @param request - GetServiceListPageRequest
   * @returns GetServiceListPageResponse
   */
  async getServiceListPage(request: $_model.GetServiceListPageRequest): Promise<$_model.GetServiceListPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceListPageWithOptions(request, headers, runtime);
  }

  /**
   * Queries service methods.
   * 
   * @param request - GetServiceMethodPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceMethodPageResponse
   */
  async getServiceMethodPageWithOptions(request: $_model.GetServiceMethodPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceMethodPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.methodController)) {
      query["methodController"] = request.methodController;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceMethodPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceMethodPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceMethodPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceMethodPageResponse({}));
  }

  /**
   * Queries service methods.
   * 
   * @param request - GetServiceMethodPageRequest
   * @returns GetServiceMethodPageResponse
   */
  async getServiceMethodPage(request: $_model.GetServiceMethodPageRequest): Promise<$_model.GetServiceMethodPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceMethodPageWithOptions(request, headers, runtime);
  }

  /**
   * Queries service providers.
   * 
   * @param request - GetServiceProvidersPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceProvidersPageResponse
   */
  async getServiceProvidersPageWithOptions(request: $_model.GetServiceProvidersPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceProvidersPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["appId"] = request.appId;
    }

    if (!$dara.isNull(request.group)) {
      query["group"] = request.group;
    }

    if (!$dara.isNull(request.ip)) {
      query["ip"] = request.ip;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.registryType)) {
      query["registryType"] = request.registryType;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["serviceVersion"] = request.serviceVersion;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceProvidersPage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/api/mseForOam/getServiceProvidersPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceProvidersPageResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceProvidersPageResponse({}));
  }

  /**
   * Queries service providers.
   * 
   * @param request - GetServiceProvidersPageRequest
   * @returns GetServiceProvidersPageResponse
   */
  async getServiceProvidersPage(request: $_model.GetServiceProvidersPageRequest): Promise<$_model.GetServiceProvidersPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceProvidersPageWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Tomcat configurations of an application.
   * 
   * @remarks
   * **
   * 
   * @param request - GetWebContainerConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebContainerConfigResponse
   */
  async getWebContainerConfigWithOptions(request: $_model.GetWebContainerConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWebContainerConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebContainerConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/web_container_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWebContainerConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetWebContainerConfigResponse({}));
  }

  /**
   * Queries the Tomcat configurations of an application.
   * 
   * @remarks
   * **
   * 
   * @param request - GetWebContainerConfigRequest
   * @returns GetWebContainerConfigResponse
   */
  async getWebContainerConfig(request: $_model.GetWebContainerConfigRequest): Promise<$_model.GetWebContainerConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebContainerConfigWithOptions(request, headers, runtime);
  }

  /**
   * Imports a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster to Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - ImportK8sClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportK8sClusterResponse
   */
  async importK8sClusterWithOptions(request: $_model.ImportK8sClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ImportK8sClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.enableAsm)) {
      query["EnableAsm"] = request.enableAsm;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportK8sCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/import_k8s_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportK8sClusterResponse>(await this.callApi(params, req, runtime), new $_model.ImportK8sClusterResponse({}));
  }

  /**
   * Imports a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster to Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - ImportK8sClusterRequest
   * @returns ImportK8sClusterResponse
   */
  async importK8sCluster(request: $_model.ImportK8sClusterRequest): Promise<$_model.ImportK8sClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importK8sClusterWithOptions(request, headers, runtime);
  }

  /**
   * Creates an application in an Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * > To create an application in a Kubernetes cluster, call the InsertK8sApplication operation provided by Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - InsertApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertApplicationResponse
   */
  async insertApplicationWithOptions(request: $_model.InsertApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    if (!$dara.isNull(request.enablePortCheck)) {
      query["EnablePortCheck"] = request.enablePortCheck;
    }

    if (!$dara.isNull(request.enableUrlCheck)) {
      query["EnableUrlCheck"] = request.enableUrlCheck;
    }

    if (!$dara.isNull(request.healthCheckUrl)) {
      query["HealthCheckUrl"] = request.healthCheckUrl;
    }

    if (!$dara.isNull(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    if (!$dara.isNull(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!$dara.isNull(request.jvmOptions)) {
      query["JvmOptions"] = request.jvmOptions;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    if (!$dara.isNull(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!$dara.isNull(request.mem)) {
      query["Mem"] = request.mem;
    }

    if (!$dara.isNull(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.reservedPortStr)) {
      query["ReservedPortStr"] = request.reservedPortStr;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_create_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertApplicationResponse>(await this.callApi(params, req, runtime), new $_model.InsertApplicationResponse({}));
  }

  /**
   * Creates an application in an Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * > To create an application in a Kubernetes cluster, call the InsertK8sApplication operation provided by Enterprise Distributed Application Service (EDAS).
   * 
   * @param request - InsertApplicationRequest
   * @returns InsertApplicationResponse
   */
  async insertApplication(request: $_model.InsertApplicationRequest): Promise<$_model.InsertApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Creates a cluster.
   * 
   * @param request - InsertClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertClusterResponse
   */
  async insertClusterWithOptions(request: $_model.InsertClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.iaasProvider)) {
      query["IaasProvider"] = request.iaasProvider;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!$dara.isNull(request.oversoldFactor)) {
      query["OversoldFactor"] = request.oversoldFactor;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertClusterResponse>(await this.callApi(params, req, runtime), new $_model.InsertClusterResponse({}));
  }

  /**
   * Creates a cluster.
   * 
   * @param request - InsertClusterRequest
   * @returns InsertClusterResponse
   */
  async insertCluster(request: $_model.InsertClusterRequest): Promise<$_model.InsertClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterWithOptions(request, headers, runtime);
  }

  /**
   * Imports Elastic Compute Service (ECS) instances into an ECS cluster.
   * 
   * @remarks
   * ##
   * If you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all original data of the ECS instance is deleted. In addition, you must set a logon password for the ECS instance. Make sure that no important data exists on the ECS instance that you want to import or data has been backed up for the ECS instance.
   * > We recommend that you call the InstallAgent operation instead of this operation. For more information, see [InstallAgent](https://help.aliyun.com/document_detail/127023.html).
   * 
   * @param request - InsertClusterMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertClusterMemberResponse
   */
  async insertClusterMemberWithOptions(request: $_model.InsertClusterMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertClusterMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["clusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["instanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.password)) {
      query["password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertClusterMemberResponse>(await this.callApi(params, req, runtime), new $_model.InsertClusterMemberResponse({}));
  }

  /**
   * Imports Elastic Compute Service (ECS) instances into an ECS cluster.
   * 
   * @remarks
   * ##
   * If you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all original data of the ECS instance is deleted. In addition, you must set a logon password for the ECS instance. Make sure that no important data exists on the ECS instance that you want to import or data has been backed up for the ECS instance.
   * > We recommend that you call the InstallAgent operation instead of this operation. For more information, see [InstallAgent](https://help.aliyun.com/document_detail/127023.html).
   * 
   * @param request - InsertClusterMemberRequest
   * @returns InsertClusterMemberResponse
   */
  async insertClusterMember(request: $_model.InsertClusterMemberRequest): Promise<$_model.InsertClusterMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertClusterMemberWithOptions(request, headers, runtime);
  }

  /**
   * Creates an instance group for a specified application.
   * 
   * @param request - InsertDeployGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertDeployGroupResponse
   */
  async insertDeployGroupWithOptions(request: $_model.InsertDeployGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertDeployGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.initPackageVersionId)) {
      query["InitPackageVersionId"] = request.initPackageVersionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/deploy_group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertDeployGroupResponse>(await this.callApi(params, req, runtime), new $_model.InsertDeployGroupResponse({}));
  }

  /**
   * Creates an instance group for a specified application.
   * 
   * @param request - InsertDeployGroupRequest
   * @returns InsertDeployGroupResponse
   */
  async insertDeployGroup(request: $_model.InsertDeployGroupRequest): Promise<$_model.InsertDeployGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertDeployGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates an application in a Container Service for Kubernetes (ACK) cluster or serverless Kubernetes cluster.
   * 
   * @param request - InsertK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertK8sApplicationResponse
   */
  async insertK8sApplicationWithOptions(request: $_model.InsertK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.appConfig)) {
      query["AppConfig"] = request.appConfig;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appTemplateName)) {
      query["AppTemplateName"] = request.appTemplateName;
    }

    if (!$dara.isNull(request.applicationDescription)) {
      query["ApplicationDescription"] = request.applicationDescription;
    }

    if (!$dara.isNull(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!$dara.isNull(request.containerRegistryId)) {
      query["ContainerRegistryId"] = request.containerRegistryId;
    }

    if (!$dara.isNull(request.csClusterId)) {
      query["CsClusterId"] = request.csClusterId;
    }

    if (!$dara.isNull(request.customAffinity)) {
      query["CustomAffinity"] = request.customAffinity;
    }

    if (!$dara.isNull(request.customAgentVersion)) {
      query["CustomAgentVersion"] = request.customAgentVersion;
    }

    if (!$dara.isNull(request.customTolerations)) {
      query["CustomTolerations"] = request.customTolerations;
    }

    if (!$dara.isNull(request.deployAcrossNodes)) {
      query["DeployAcrossNodes"] = request.deployAcrossNodes;
    }

    if (!$dara.isNull(request.deployAcrossZones)) {
      query["DeployAcrossZones"] = request.deployAcrossZones;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
    }

    if (!$dara.isNull(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!$dara.isNull(request.enableAsm)) {
      query["EnableAsm"] = request.enableAsm;
    }

    if (!$dara.isNull(request.enableEmptyPushReject)) {
      query["EnableEmptyPushReject"] = request.enableEmptyPushReject;
    }

    if (!$dara.isNull(request.enableLosslessRule)) {
      query["EnableLosslessRule"] = request.enableLosslessRule;
    }

    if (!$dara.isNull(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.featureConfig)) {
      query["FeatureConfig"] = request.featureConfig;
    }

    if (!$dara.isNull(request.imagePlatforms)) {
      query["ImagePlatforms"] = request.imagePlatforms;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.initContainers)) {
      query["InitContainers"] = request.initContainers;
    }

    if (!$dara.isNull(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!$dara.isNull(request.internetSlbPort)) {
      query["InternetSlbPort"] = request.internetSlbPort;
    }

    if (!$dara.isNull(request.internetSlbProtocol)) {
      query["InternetSlbProtocol"] = request.internetSlbProtocol;
    }

    if (!$dara.isNull(request.internetTargetPort)) {
      query["InternetTargetPort"] = request.internetTargetPort;
    }

    if (!$dara.isNull(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    if (!$dara.isNull(request.intranetSlbPort)) {
      query["IntranetSlbPort"] = request.intranetSlbPort;
    }

    if (!$dara.isNull(request.intranetSlbProtocol)) {
      query["IntranetSlbProtocol"] = request.intranetSlbProtocol;
    }

    if (!$dara.isNull(request.intranetTargetPort)) {
      query["IntranetTargetPort"] = request.intranetTargetPort;
    }

    if (!$dara.isNull(request.isMultilingualApp)) {
      query["IsMultilingualApp"] = request.isMultilingualApp;
    }

    if (!$dara.isNull(request.JDK)) {
      query["JDK"] = request.JDK;
    }

    if (!$dara.isNull(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.limitCpu)) {
      query["LimitCpu"] = request.limitCpu;
    }

    if (!$dara.isNull(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
    }

    if (!$dara.isNull(request.limitMem)) {
      query["LimitMem"] = request.limitMem;
    }

    if (!$dara.isNull(request.limitmCpu)) {
      query["LimitmCpu"] = request.limitmCpu;
    }

    if (!$dara.isNull(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.losslessRuleAligned)) {
      query["LosslessRuleAligned"] = request.losslessRuleAligned;
    }

    if (!$dara.isNull(request.losslessRuleDelayTime)) {
      query["LosslessRuleDelayTime"] = request.losslessRuleDelayTime;
    }

    if (!$dara.isNull(request.losslessRuleFuncType)) {
      query["LosslessRuleFuncType"] = request.losslessRuleFuncType;
    }

    if (!$dara.isNull(request.losslessRuleRelated)) {
      query["LosslessRuleRelated"] = request.losslessRuleRelated;
    }

    if (!$dara.isNull(request.losslessRuleWarmupTime)) {
      query["LosslessRuleWarmupTime"] = request.losslessRuleWarmupTime;
    }

    if (!$dara.isNull(request.mountDescs)) {
      query["MountDescs"] = request.mountDescs;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!$dara.isNull(request.packageVersion)) {
      query["PackageVersion"] = request.packageVersion;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!$dara.isNull(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.requestsCpu)) {
      query["RequestsCpu"] = request.requestsCpu;
    }

    if (!$dara.isNull(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!$dara.isNull(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!$dara.isNull(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.runtimeClassName)) {
      query["RuntimeClassName"] = request.runtimeClassName;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.serviceConfigs)) {
      query["ServiceConfigs"] = request.serviceConfigs;
    }

    if (!$dara.isNull(request.sidecars)) {
      query["Sidecars"] = request.sidecars;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.startup)) {
      query["Startup"] = request.startup;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.terminateGracePeriod)) {
      query["TerminateGracePeriod"] = request.terminateGracePeriod;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.uriEncoding)) {
      query["UriEncoding"] = request.uriEncoding;
    }

    if (!$dara.isNull(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    if (!$dara.isNull(request.userBaseImageUrl)) {
      query["UserBaseImageUrl"] = request.userBaseImageUrl;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!$dara.isNull(request.webContainerConfig)) {
      query["WebContainerConfig"] = request.webContainerConfig;
    }

    if (!$dara.isNull(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/create_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.InsertK8sApplicationResponse({}));
  }

  /**
   * Creates an application in a Container Service for Kubernetes (ACK) cluster or serverless Kubernetes cluster.
   * 
   * @param request - InsertK8sApplicationRequest
   * @returns InsertK8sApplicationResponse
   */
  async insertK8sApplication(request: $_model.InsertK8sApplicationRequest): Promise<$_model.InsertK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Creates or edits a custom namespace.
   * 
   * @param request - InsertOrUpdateRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertOrUpdateRegionResponse
   */
  async insertOrUpdateRegionWithOptions(request: $_model.InsertOrUpdateRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertOrUpdateRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.debugEnable)) {
      query["DebugEnable"] = request.debugEnable;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.mseInstanceId)) {
      query["MseInstanceId"] = request.mseInstanceId;
    }

    if (!$dara.isNull(request.regionName)) {
      query["RegionName"] = request.regionName;
    }

    if (!$dara.isNull(request.regionTag)) {
      query["RegionTag"] = request.regionTag;
    }

    if (!$dara.isNull(request.registryType)) {
      query["RegistryType"] = request.registryType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertOrUpdateRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_def`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertOrUpdateRegionResponse>(await this.callApi(params, req, runtime), new $_model.InsertOrUpdateRegionResponse({}));
  }

  /**
   * Creates or edits a custom namespace.
   * 
   * @param request - InsertOrUpdateRegionRequest
   * @returns InsertOrUpdateRegionResponse
   */
  async insertOrUpdateRegion(request: $_model.InsertOrUpdateRegionRequest): Promise<$_model.InsertOrUpdateRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertOrUpdateRegionWithOptions(request, headers, runtime);
  }

  /**
   * Creates a role.
   * 
   * @param request - InsertRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertRoleResponse
   */
  async insertRoleWithOptions(request: $_model.InsertRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/create_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertRoleResponse>(await this.callApi(params, req, runtime), new $_model.InsertRoleResponse({}));
  }

  /**
   * Creates a role.
   * 
   * @param request - InsertRoleRequest
   * @returns InsertRoleResponse
   */
  async insertRole(request: $_model.InsertRoleRequest): Promise<$_model.InsertRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertRoleWithOptions(request, headers, runtime);
  }

  /**
   * Creates a service group.
   * 
   * @param request - InsertServiceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertServiceGroupResponse
   */
  async insertServiceGroupWithOptions(request: $_model.InsertServiceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertServiceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertServiceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.InsertServiceGroupResponse({}));
  }

  /**
   * Creates a service group.
   * 
   * @param request - InsertServiceGroupRequest
   * @returns InsertServiceGroupResponse
   */
  async insertServiceGroup(request: $_model.InsertServiceGroupRequest): Promise<$_model.InsertServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertServiceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a lane.
   * 
   * @param request - InsertSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertSwimmingLaneResponse
   */
  async insertSwimmingLaneWithOptions(request: $_model.InsertSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    if (!$dara.isNull(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!$dara.isNull(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.InsertSwimmingLaneResponse({}));
  }

  /**
   * Creates a lane.
   * 
   * @param request - InsertSwimmingLaneRequest
   * @returns InsertSwimmingLaneResponse
   */
  async insertSwimmingLane(request: $_model.InsertSwimmingLaneRequest): Promise<$_model.InsertSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Creates a lane group.
   * 
   * @param request - InsertSwimmingLaneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertSwimmingLaneGroupResponse
   */
  async insertSwimmingLaneGroupWithOptions(request: $_model.InsertSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InsertSwimmingLaneGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InsertSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.InsertSwimmingLaneGroupResponse({}));
  }

  /**
   * Creates a lane group.
   * 
   * @param request - InsertSwimmingLaneGroupRequest
   * @returns InsertSwimmingLaneGroupResponse
   */
  async insertSwimmingLaneGroup(request: $_model.InsertSwimmingLaneGroupRequest): Promise<$_model.InsertSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.insertSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  /**
   * Uses the Cloud Assistant provided by Elastic Compute Service (ECS) to install Enterprise Distributed Application Service (EDAS) Agent and imports ECS instances to EDAS.
   * 
   * @remarks
   * If you call this operation to import an ECS instance into EDAS, the operating system of the ECS instance is not reinstalled. We recommend that you call this operation to import ECS instances into EDAS.
   * 
   * @param request - InstallAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAgentResponse
   */
  async installAgentWithOptions(request: $_model.InstallAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.doAsync)) {
      query["DoAsync"] = request.doAsync;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAgent",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/ecss/install_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAgentResponse>(await this.callApi(params, req, runtime), new $_model.InstallAgentResponse({}));
  }

  /**
   * Uses the Cloud Assistant provided by Elastic Compute Service (ECS) to install Enterprise Distributed Application Service (EDAS) Agent and imports ECS instances to EDAS.
   * 
   * @remarks
   * If you call this operation to import an ECS instance into EDAS, the operating system of the ECS instance is not reinstalled. We recommend that you call this operation to import ECS instances into EDAS.
   * 
   * @param request - InstallAgentRequest
   * @returns InstallAgentResponse
   */
  async installAgent(request: $_model.InstallAgentRequest): Promise<$_model.InstallAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentWithOptions(request, headers, runtime);
  }

  /**
   * Queries Alibaba Cloud regions supported by Enterprise Distributed Application Service (EDAS).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliyunRegionResponse
   */
  async listAliyunRegionWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAliyunRegionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAliyunRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/region_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAliyunRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListAliyunRegionResponse({}));
  }

  /**
   * Queries Alibaba Cloud regions supported by Enterprise Distributed Application Service (EDAS).
   * @returns ListAliyunRegionResponse
   */
  async listAliyunRegion(): Promise<$_model.ListAliyunRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliyunRegionWithOptions(headers, runtime);
  }

  /**
   * Queries a list of applications.
   * 
   * @param request - ListApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationResponse
   */
  async listApplicationWithOptions(request: $_model.ListApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.logicalRegionIdFilter)) {
      query["LogicalRegionIdFilter"] = request.logicalRegionIdFilter;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationResponse({}));
  }

  /**
   * Queries a list of applications.
   * 
   * @param request - ListApplicationRequest
   * @returns ListApplicationResponse
   */
  async listApplication(request: $_model.ListApplicationRequest): Promise<$_model.ListApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Queries elastic compute units (ECUs).
   * 
   * @param request - ListApplicationEcuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationEcuResponse
   */
  async listApplicationEcuWithOptions(request: $_model.ListApplicationEcuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationEcuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecu_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationEcuResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationEcuResponse({}));
  }

  /**
   * Queries elastic compute units (ECUs).
   * 
   * @param request - ListApplicationEcuRequest
   * @returns ListApplicationEcuResponse
   */
  async listApplicationEcu(request: $_model.ListApplicationEcuRequest): Promise<$_model.ListApplicationEcuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationEcuWithOptions(request, headers, runtime);
  }

  /**
   * Queries all permissions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAuthorityResponse
   */
  async listAuthorityWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAuthorityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAuthority",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/authority_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.ListAuthorityResponse({}));
  }

  /**
   * Queries all permissions.
   * @returns ListAuthorityResponse
   */
  async listAuthority(): Promise<$_model.ListAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorityWithOptions(headers, runtime);
  }

  /**
   * Queries Enterprise Distributed Application Service (EDAS) Container versions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBuildPackResponse
   */
  async listBuildPackWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBuildPackResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBuildPack",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/build_pack_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBuildPackResponse>(await this.callApi(params, req, runtime), new $_model.ListBuildPackResponse({}));
  }

  /**
   * Queries Enterprise Distributed Application Service (EDAS) Container versions.
   * @returns ListBuildPackResponse
   */
  async listBuildPack(): Promise<$_model.ListBuildPackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBuildPackWithOptions(headers, runtime);
  }

  /**
   * Queries clusters.
   * 
   * @param request - ListClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterResponse
   */
  async listClusterWithOptions(request: $_model.ListClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterResponse({}));
  }

  /**
   * Queries clusters.
   * 
   * @param request - ListClusterRequest
   * @returns ListClusterResponse
   */
  async listCluster(request: $_model.ListClusterRequest): Promise<$_model.ListClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterWithOptions(request, headers, runtime);
  }

  /**
   * Queries Elastic Compute Service (ECS) instances in a cluster.
   * 
   * @param request - ListClusterMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterMembersResponse
   */
  async listClusterMembersWithOptions(request: $_model.ListClusterMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.ecsList)) {
      query["EcsList"] = request.ecsList;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterMembers",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/cluster_member_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterMembersResponse({}));
  }

  /**
   * Queries Elastic Compute Service (ECS) instances in a cluster.
   * 
   * @param request - ListClusterMembersRequest
   * @returns ListClusterMembersResponse
   */
  async listClusterMembers(request: $_model.ListClusterMembersRequest): Promise<$_model.ListClusterMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterMembersWithOptions(request, headers, runtime);
  }

  /**
   * Queries the components that are related to applications in Elastic Compute Service (ECS) clusters.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentsResponse
   */
  async listComponentsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListComponents",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentsResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentsResponse({}));
  }

  /**
   * Queries the components that are related to applications in Elastic Compute Service (ECS) clusters.
   * @returns ListComponentsResponse
   */
  async listComponents(): Promise<$_model.ListComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentsWithOptions(headers, runtime);
  }

  /**
   * Queries configuration templates.
   * 
   * @param request - ListConfigTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigTemplatesResponse
   */
  async listConfigTemplatesWithOptions(request: $_model.ListConfigTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigTemplates",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigTemplatesResponse({}));
  }

  /**
   * Queries configuration templates.
   * 
   * @param request - ListConfigTemplatesRequest
   * @returns ListConfigTemplatesResponse
   */
  async listConfigTemplates(request: $_model.ListConfigTemplatesRequest): Promise<$_model.ListConfigTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigTemplatesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the services that are consumed by an application.
   * 
   * @param request - ListConsumedServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConsumedServicesResponse
   */
  async listConsumedServicesWithOptions(request: $_model.ListConsumedServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConsumedServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConsumedServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/listConsumedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumedServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumedServicesResponse({}));
  }

  /**
   * Queries the services that are consumed by an application.
   * 
   * @param request - ListConsumedServicesRequest
   * @returns ListConsumedServicesResponse
   */
  async listConsumedServices(request: $_model.ListConsumedServicesRequest): Promise<$_model.ListConsumedServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConsumedServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Elastic Compute Service (ECS) instances that can be imported to a specified cluster. This operation is applicable to ECS clusters.
   * 
   * @param request - ListConvertableEcuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConvertableEcuResponse
   */
  async listConvertableEcuWithOptions(request: $_model.ListConvertableEcuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConvertableEcuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["clusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConvertableEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/convertable_ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConvertableEcuResponse>(await this.callApi(params, req, runtime), new $_model.ListConvertableEcuResponse({}));
  }

  /**
   * Queries the Elastic Compute Service (ECS) instances that can be imported to a specified cluster. This operation is applicable to ECS clusters.
   * 
   * @param request - ListConvertableEcuRequest
   * @returns ListConvertableEcuResponse
   */
  async listConvertableEcu(request: $_model.ListConvertableEcuRequest): Promise<$_model.ListConvertableEcuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConvertableEcuWithOptions(request, headers, runtime);
  }

  /**
   * Queries the instance groups to which an application is deployed.
   * 
   * @param request - ListDeployGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeployGroupResponse
   */
  async listDeployGroupWithOptions(request: $_model.ListDeployGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeployGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeployGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/deploy_group_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeployGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListDeployGroupResponse({}));
  }

  /**
   * Queries the instance groups to which an application is deployed.
   * 
   * @param request - ListDeployGroupRequest
   * @returns ListDeployGroupResponse
   */
  async listDeployGroup(request: $_model.ListDeployGroupRequest): Promise<$_model.ListDeployGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeployGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries all Elastic Compute Service (ECS) instances that have not been imported to clusters.
   * 
   * @param request - ListEcsNotInClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsNotInClusterResponse
   */
  async listEcsNotInClusterWithOptions(request: $_model.ListEcsNotInClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEcsNotInClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.networkMode)) {
      query["NetworkMode"] = request.networkMode;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsNotInCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecs_not_in_cluster`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEcsNotInClusterResponse>(await this.callApi(params, req, runtime), new $_model.ListEcsNotInClusterResponse({}));
  }

  /**
   * Queries all Elastic Compute Service (ECS) instances that have not been imported to clusters.
   * 
   * @param request - ListEcsNotInClusterRequest
   * @returns ListEcsNotInClusterResponse
   */
  async listEcsNotInCluster(request: $_model.ListEcsNotInClusterRequest): Promise<$_model.ListEcsNotInClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsNotInClusterWithOptions(request, headers, runtime);
  }

  /**
   * Queries the available elastic compute units (ECUs) in a specified namespace.
   * 
   * @remarks
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
   * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - ListEcuByRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcuByRegionResponse
   */
  async listEcuByRegionWithOptions(request: $_model.ListEcuByRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEcuByRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.act)) {
      query["Act"] = request.act;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcuByRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEcuByRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListEcuByRegionResponse({}));
  }

  /**
   * Queries the available elastic compute units (ECUs) in a specified namespace.
   * 
   * @remarks
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
   * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - ListEcuByRegionRequest
   * @returns ListEcuByRegionResponse
   */
  async listEcuByRegion(request: $_model.ListEcuByRegionRequest): Promise<$_model.ListEcuByRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcuByRegionWithOptions(request, headers, runtime);
  }

  /**
   * Queries historical deployment packages of an application.
   * 
   * @param request - ListHistoryDeployVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHistoryDeployVersionResponse
   */
  async listHistoryDeployVersionWithOptions(request: $_model.ListHistoryDeployVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHistoryDeployVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHistoryDeployVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/deploy_history_version_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHistoryDeployVersionResponse>(await this.callApi(params, req, runtime), new $_model.ListHistoryDeployVersionResponse({}));
  }

  /**
   * Queries historical deployment packages of an application.
   * 
   * @param request - ListHistoryDeployVersionRequest
   * @returns ListHistoryDeployVersionResponse
   */
  async listHistoryDeployVersion(request: $_model.ListHistoryDeployVersionRequest): Promise<$_model.ListHistoryDeployVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHistoryDeployVersionWithOptions(request, headers, runtime);
  }

  /**
   * Queries Kubernetes ConfigMaps.
   * 
   * @param request - ListK8sConfigMapsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListK8sConfigMapsResponse
   */
  async listK8sConfigMapsWithOptions(request: $_model.ListK8sConfigMapsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListK8sConfigMapsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showRelatedApps)) {
      query["ShowRelatedApps"] = request.showRelatedApps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListK8sConfigMaps",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListK8sConfigMapsResponse>(await this.callApi(params, req, runtime), new $_model.ListK8sConfigMapsResponse({}));
  }

  /**
   * Queries Kubernetes ConfigMaps.
   * 
   * @param request - ListK8sConfigMapsRequest
   * @returns ListK8sConfigMapsResponse
   */
  async listK8sConfigMaps(request: $_model.ListK8sConfigMapsRequest): Promise<$_model.ListK8sConfigMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sConfigMapsWithOptions(request, headers, runtime);
  }

  /**
   * Queries ingresses.
   * 
   * @param request - ListK8sIngressRulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListK8sIngressRulesResponse
   */
  async listK8sIngressRulesWithOptions(request: $_model.ListK8sIngressRulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListK8sIngressRulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListK8sIngressRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListK8sIngressRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListK8sIngressRulesResponse({}));
  }

  /**
   * Queries ingresses.
   * 
   * @param request - ListK8sIngressRulesRequest
   * @returns ListK8sIngressRulesResponse
   */
  async listK8sIngressRules(request: $_model.ListK8sIngressRulesRequest): Promise<$_model.ListK8sIngressRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sIngressRulesWithOptions(request, headers, runtime);
  }

  /**
   * Queries namespaces for a Kubernetes cluster.
   * 
   * @param request - ListK8sNamespacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListK8sNamespacesResponse
   */
  async listK8sNamespacesWithOptions(request: $_model.ListK8sNamespacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListK8sNamespacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListK8sNamespaces",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListK8sNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListK8sNamespacesResponse({}));
  }

  /**
   * Queries namespaces for a Kubernetes cluster.
   * 
   * @param request - ListK8sNamespacesRequest
   * @returns ListK8sNamespacesResponse
   */
  async listK8sNamespaces(request: $_model.ListK8sNamespacesRequest): Promise<$_model.ListK8sNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sNamespacesWithOptions(request, headers, runtime);
  }

  /**
   * Queries Kubernetes Secrets.
   * 
   * @param request - ListK8sSecretsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListK8sSecretsResponse
   */
  async listK8sSecretsWithOptions(request: $_model.ListK8sSecretsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListK8sSecretsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.condition)) {
      query["Condition"] = request.condition;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showRelatedApps)) {
      query["ShowRelatedApps"] = request.showRelatedApps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListK8sSecrets",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListK8sSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListK8sSecretsResponse({}));
  }

  /**
   * Queries Kubernetes Secrets.
   * 
   * @param request - ListK8sSecretsRequest
   * @returns ListK8sSecretsResponse
   */
  async listK8sSecrets(request: $_model.ListK8sSecretsRequest): Promise<$_model.ListK8sSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listK8sSecretsWithOptions(request, headers, runtime);
  }

  /**
   * Queries service methods.
   * 
   * @param request - ListMethodsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMethodsResponse
   */
  async listMethodsWithOptions(request: $_model.ListMethodsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMethodsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMethods",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/list_methods`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMethodsResponse>(await this.callApi(params, req, runtime), new $_model.ListMethodsResponse({}));
  }

  /**
   * Queries service methods.
   * 
   * @param request - ListMethodsRequest
   * @returns ListMethodsResponse
   */
  async listMethods(request: $_model.ListMethodsRequest): Promise<$_model.ListMethodsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMethodsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the services that are published by an application.
   * 
   * @param request - ListPublishedServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPublishedServicesResponse
   */
  async listPublishedServicesWithOptions(request: $_model.ListPublishedServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPublishedServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPublishedServices",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/listPublishedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishedServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishedServicesResponse({}));
  }

  /**
   * Queries the services that are published by an application.
   * 
   * @param request - ListPublishedServicesRequest
   * @returns ListPublishedServicesResponse
   */
  async listPublishedServices(request: $_model.ListPublishedServicesRequest): Promise<$_model.ListPublishedServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPublishedServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the change processes of an application.
   * 
   * @param request - ListRecentChangeOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRecentChangeOrderResponse
   */
  async listRecentChangeOrderWithOptions(request: $_model.ListRecentChangeOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRecentChangeOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRecentChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/change_order_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRecentChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.ListRecentChangeOrderResponse({}));
  }

  /**
   * Queries the change processes of an application.
   * 
   * @param request - ListRecentChangeOrderRequest
   * @returns ListRecentChangeOrderResponse
   */
  async listRecentChangeOrder(request: $_model.ListRecentChangeOrderRequest): Promise<$_model.ListRecentChangeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecentChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * Queries resource groups.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupResponse
   */
  async listResourceGroupWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/reg_group_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupResponse({}));
  }

  /**
   * Queries resource groups.
   * @returns ListResourceGroupResponse
   */
  async listResourceGroup(): Promise<$_model.ListResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupWithOptions(headers, runtime);
  }

  /**
   * Queries roles.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoleResponse
   */
  async listRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/role_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoleResponse>(await this.callApi(params, req, runtime), new $_model.ListRoleResponse({}));
  }

  /**
   * Queries roles.
   * @returns ListRoleResponse
   */
  async listRole(): Promise<$_model.ListRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRoleWithOptions(headers, runtime);
  }

  /**
   * Queries elastic compute units (ECUs) available for scaling out an application in a specified cluster or the cluster where the application is deployed. This operation is applicable to Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
   * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - ListScaleOutEcuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScaleOutEcuResponse
   */
  async listScaleOutEcuWithOptions(request: $_model.ListScaleOutEcuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListScaleOutEcuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceNum)) {
      query["InstanceNum"] = request.instanceNum;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    if (!$dara.isNull(request.mem)) {
      query["Mem"] = request.mem;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScaleOutEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/scale_out_ecu_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScaleOutEcuResponse>(await this.callApi(params, req, runtime), new $_model.ListScaleOutEcuResponse({}));
  }

  /**
   * Queries elastic compute units (ECUs) available for scaling out an application in a specified cluster or the cluster where the application is deployed. This operation is applicable to Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources such as clusters, ECS instances, and applications, and microservices published in EDAS. This concept involves the default namespace and custom namespaces. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources and microservices.
   * *   **Elastic compute unit (ECU)**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - ListScaleOutEcuRequest
   * @returns ListScaleOutEcuResponse
   */
  async listScaleOutEcu(request: $_model.ListScaleOutEcuRequest): Promise<$_model.ListScaleOutEcuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listScaleOutEcuWithOptions(request, headers, runtime);
  }

  /**
   * Queries the service groups of a High-Speed Service Framework (HSF) application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceGroupsResponse
   */
  async listServiceGroupsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceGroupsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceGroups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/service/serviceGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceGroupsResponse({}));
  }

  /**
   * Queries the service groups of a High-Speed Service Framework (HSF) application.
   * @returns ListServiceGroupsResponse
   */
  async listServiceGroups(): Promise<$_model.ListServiceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceGroupsWithOptions(headers, runtime);
  }

  /**
   * Queries Server Load Balancer (SLB) instances.
   * 
   * @param request - ListSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSlbResponse
   */
  async listSlbWithOptions(request: $_model.ListSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.slbType)) {
      query["SlbType"] = request.slbType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/slb_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSlbResponse>(await this.callApi(params, req, runtime), new $_model.ListSlbResponse({}));
  }

  /**
   * Queries Server Load Balancer (SLB) instances.
   * 
   * @param request - ListSlbRequest
   * @returns ListSlbResponse
   */
  async listSlb(request: $_model.ListSlbRequest): Promise<$_model.ListSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSlbWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Resource Access Management (RAM) users.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubAccountResponse
   */
  async listSubAccountWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubAccountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/sub_account_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListSubAccountResponse({}));
  }

  /**
   * Queries the Resource Access Management (RAM) users.
   * @returns ListSubAccountResponse
   */
  async listSubAccount(): Promise<$_model.ListSubAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubAccountWithOptions(headers, runtime);
  }

  /**
   * Queries lanes in a lane group.
   * 
   * @param request - ListSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSwimmingLaneResponse
   */
  async listSwimmingLaneWithOptions(request: $_model.ListSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.ListSwimmingLaneResponse({}));
  }

  /**
   * Queries lanes in a lane group.
   * 
   * @param request - ListSwimmingLaneRequest
   * @returns ListSwimmingLaneResponse
   */
  async listSwimmingLane(request: $_model.ListSwimmingLaneRequest): Promise<$_model.ListSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Queries lane groups.
   * 
   * @param request - ListSwimmingLaneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSwimmingLaneGroupResponse
   */
  async listSwimmingLaneGroupWithOptions(request: $_model.ListSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSwimmingLaneGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListSwimmingLaneGroupResponse({}));
  }

  /**
   * Queries lane groups.
   * 
   * @param request - ListSwimmingLaneGroupRequest
   * @returns ListSwimmingLaneGroupResponse
   */
  async listSwimmingLaneGroup(request: $_model.ListSwimmingLaneGroupRequest): Promise<$_model.ListSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries the tags that are added to resources.
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to resources.
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
   * Queries custom namespaces.
   * 
   * @param request - ListUserDefineRegionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserDefineRegionResponse
   */
  async listUserDefineRegionWithOptions(request: $_model.ListUserDefineRegionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserDefineRegionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.debugEnable)) {
      query["DebugEnable"] = request.debugEnable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserDefineRegion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/user_region_defs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserDefineRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListUserDefineRegionResponse({}));
  }

  /**
   * Queries custom namespaces.
   * 
   * @param request - ListUserDefineRegionRequest
   * @returns ListUserDefineRegionResponse
   */
  async listUserDefineRegion(request: $_model.ListUserDefineRegionRequest): Promise<$_model.ListUserDefineRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserDefineRegionWithOptions(request, headers, runtime);
  }

  /**
   * The HTTP status code returned.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcResponse
   */
  async listVpcWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpc",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/vpc_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcResponse({}));
  }

  /**
   * The HTTP status code returned.
   * @returns ListVpcResponse
   */
  async listVpc(): Promise<$_model.ListVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcWithOptions(headers, runtime);
  }

  /**
   * Migrates an elastic compute unit (ECU) to the default cluster in a specified namespace.
   * 
   * @remarks
   * ## Limits
   * We recommend that you do not call this operation. Instead, we recommend that you call the TransformClusterMember operation. For more information, see [TransformClusterMember](https://help.aliyun.com/document_detail/71514.html).
   * When you call this operation to import an Elastic Compute Service (ECS) instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources and microservices in Enterprise Distributed Application Service (EDAS). The resources include clusters, ECS instances, and applications. You can use a default or custom namespace. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources or microservices.
   * *   **ECU**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - MigrateEcuRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateEcuResponse
   */
  async migrateEcuWithOptions(request: $_model.MigrateEcuRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateEcuResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateEcu",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_ecu`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateEcuResponse>(await this.callApi(params, req, runtime), new $_model.MigrateEcuResponse({}));
  }

  /**
   * Migrates an elastic compute unit (ECU) to the default cluster in a specified namespace.
   * 
   * @remarks
   * ## Limits
   * We recommend that you do not call this operation. Instead, we recommend that you call the TransformClusterMember operation. For more information, see [TransformClusterMember](https://help.aliyun.com/document_detail/71514.html).
   * When you call this operation to import an Elastic Compute Service (ECS) instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
   * ## Terms
   * *   **Namespace**: the logical concept that is used to isolate resources and microservices in Enterprise Distributed Application Service (EDAS). The resources include clusters, ECS instances, and applications. You can use a default or custom namespace. Each region has a default namespace and supports multiple custom namespaces. By default, only the default namespace is available. You do not need to create a custom namespace if you do not want to isolate resources or microservices.
   * *   **ECU**: After an ECS instance is imported to a cluster, the instance becomes an ECU.
   * *   **Elastic compute container (ECC)**: After you deploy an application to an ECU in a cluster, the ECU becomes an ECC.
   * 
   * @param request - MigrateEcuRequest
   * @returns MigrateEcuResponse
   */
  async migrateEcu(request: $_model.MigrateEcuRequest): Promise<$_model.MigrateEcuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateEcuWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the scaling rule for an application.
   * 
   * @param request - ModifyScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRuleWithOptions(request: $_model.ModifyScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptEULA)) {
      query["AcceptEULA"] = request.acceptEULA;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.inCondition)) {
      query["InCondition"] = request.inCondition;
    }

    if (!$dara.isNull(request.inCpu)) {
      query["InCpu"] = request.inCpu;
    }

    if (!$dara.isNull(request.inDuration)) {
      query["InDuration"] = request.inDuration;
    }

    if (!$dara.isNull(request.inEnable)) {
      query["InEnable"] = request.inEnable;
    }

    if (!$dara.isNull(request.inInstanceNum)) {
      query["InInstanceNum"] = request.inInstanceNum;
    }

    if (!$dara.isNull(request.inLoad)) {
      query["InLoad"] = request.inLoad;
    }

    if (!$dara.isNull(request.inRT)) {
      query["InRT"] = request.inRT;
    }

    if (!$dara.isNull(request.inStep)) {
      query["InStep"] = request.inStep;
    }

    if (!$dara.isNull(request.keyPairName)) {
      query["KeyPairName"] = request.keyPairName;
    }

    if (!$dara.isNull(request.multiAzPolicy)) {
      query["MultiAzPolicy"] = request.multiAzPolicy;
    }

    if (!$dara.isNull(request.outCPU)) {
      query["OutCPU"] = request.outCPU;
    }

    if (!$dara.isNull(request.outCondition)) {
      query["OutCondition"] = request.outCondition;
    }

    if (!$dara.isNull(request.outDuration)) {
      query["OutDuration"] = request.outDuration;
    }

    if (!$dara.isNull(request.outEnable)) {
      query["OutEnable"] = request.outEnable;
    }

    if (!$dara.isNull(request.outInstanceNum)) {
      query["OutInstanceNum"] = request.outInstanceNum;
    }

    if (!$dara.isNull(request.outLoad)) {
      query["OutLoad"] = request.outLoad;
    }

    if (!$dara.isNull(request.outRT)) {
      query["OutRT"] = request.outRT;
    }

    if (!$dara.isNull(request.outStep)) {
      query["OutStep"] = request.outStep;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.resourceFrom)) {
      query["ResourceFrom"] = request.resourceFrom;
    }

    if (!$dara.isNull(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!$dara.isNull(request.templateInstanceName)) {
      query["TemplateInstanceName"] = request.templateInstanceName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    if (!$dara.isNull(request.vSwitchIds)) {
      query["VSwitchIds"] = request.vSwitchIds;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/scaling_rules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScalingRuleResponse({}));
  }

  /**
   * Modifies the scaling rule for an application.
   * 
   * @param request - ModifyScalingRuleRequest
   * @returns ModifyScalingRuleResponse
   */
  async modifyScalingRule(request: $_model.ModifyScalingRuleRequest): Promise<$_model.ModifyScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of an application.
   * 
   * @param request - QueryApplicationStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryApplicationStatusResponse
   */
  async queryApplicationStatusWithOptions(request: $_model.QueryApplicationStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryApplicationStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryApplicationStatus",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryApplicationStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryApplicationStatusResponse({}));
  }

  /**
   * Queries the status of an application.
   * 
   * @param request - QueryApplicationStatusRequest
   * @returns QueryApplicationStatusResponse
   */
  async queryApplicationStatus(request: $_model.QueryApplicationStatusRequest): Promise<$_model.QueryApplicationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryApplicationStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries details about an elastic compute container (ECC). This operation is applicable to Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - QueryEccInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryEccInfoResponse
   */
  async queryEccInfoWithOptions(request: $_model.QueryEccInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryEccInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eccId)) {
      query["EccId"] = request.eccId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryEccInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/ecc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryEccInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryEccInfoResponse({}));
  }

  /**
   * Queries details about an elastic compute container (ECC). This operation is applicable to Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - QueryEccInfoRequest
   * @returns QueryEccInfoResponse
   */
  async queryEccInfo(request: $_model.QueryEccInfoRequest): Promise<$_model.QueryEccInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryEccInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the elastic compute units (ECUs) that can be migrated.
   * 
   * @param request - QueryMigrateEcuListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMigrateEcuListResponse
   */
  async queryMigrateEcuListWithOptions(request: $_model.QueryMigrateEcuListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMigrateEcuListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMigrateEcuList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_ecu_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMigrateEcuListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMigrateEcuListResponse({}));
  }

  /**
   * Queries the elastic compute units (ECUs) that can be migrated.
   * 
   * @param request - QueryMigrateEcuListRequest
   * @returns QueryMigrateEcuListResponse
   */
  async queryMigrateEcuList(request: $_model.QueryMigrateEcuListRequest): Promise<$_model.QueryMigrateEcuListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateEcuListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the namespaces to which an instance can be migrated.
   * 
   * @param request - QueryMigrateRegionListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMigrateRegionListResponse
   */
  async queryMigrateRegionListWithOptions(request: $_model.QueryMigrateRegionListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMigrateRegionListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logicalRegionId)) {
      query["LogicalRegionId"] = request.logicalRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMigrateRegionList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/migrate_region_select`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMigrateRegionListResponse>(await this.callApi(params, req, runtime), new $_model.QueryMigrateRegionListResponse({}));
  }

  /**
   * Queries the namespaces to which an instance can be migrated.
   * 
   * @param request - QueryMigrateRegionListRequest
   * @returns QueryMigrateRegionListResponse
   */
  async queryMigrateRegionList(request: $_model.QueryMigrateRegionListRequest): Promise<$_model.QueryMigrateRegionListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryMigrateRegionListWithOptions(request, headers, runtime);
  }

  /**
   * Queries the configurations of different regions that are supported by Enterprise Distributed Application Service (EDAS).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRegionConfigResponse
   */
  async queryRegionConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRegionConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRegionConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/region_config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRegionConfigResponse>(await this.callApi(params, req, runtime), new $_model.QueryRegionConfigResponse({}));
  }

  /**
   * Queries the configurations of different regions that are supported by Enterprise Distributed Application Service (EDAS).
   * @returns QueryRegionConfigResponse
   */
  async queryRegionConfig(): Promise<$_model.QueryRegionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRegionConfigWithOptions(headers, runtime);
  }

  /**
   * Queries the configuration details of Log Service for an application.
   * 
   * @param request - QuerySlsLogStoreListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySlsLogStoreListResponse
   */
  async querySlsLogStoreListWithOptions(request: $_model.QuerySlsLogStoreListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySlsLogStoreListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySlsLogStoreList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/sls/query_sls_log_store_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySlsLogStoreListResponse>(await this.callApi(params, req, runtime), new $_model.QuerySlsLogStoreListResponse({}));
  }

  /**
   * Queries the configuration details of Log Service for an application.
   * 
   * @param request - QuerySlsLogStoreListRequest
   * @returns QuerySlsLogStoreListResponse
   */
  async querySlsLogStoreList(request: $_model.QuerySlsLogStoreListRequest): Promise<$_model.QuerySlsLogStoreListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.querySlsLogStoreListWithOptions(request, headers, runtime);
  }

  /**
   * Resets an application.
   * 
   * @param request - ResetApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetApplicationResponse
   */
  async resetApplicationWithOptions(request: $_model.ResetApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResetApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_reset`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ResetApplicationResponse({}));
  }

  /**
   * Resets an application.
   * 
   * @param request - ResetApplicationRequest
   * @returns ResetApplicationResponse
   */
  async resetApplication(request: $_model.ResetApplicationRequest): Promise<$_model.ResetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resetApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Restarts an application. This operation is applicable to applications that are deployed in Elastic Compute Service (ECS) clusters.
   * 
   * @param request - RestartApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartApplicationResponse
   */
  async restartApplicationWithOptions(request: $_model.RestartApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RestartApplicationResponse({}));
  }

  /**
   * Restarts an application. This operation is applicable to applications that are deployed in Elastic Compute Service (ECS) clusters.
   * 
   * @param request - RestartApplicationRequest
   * @returns RestartApplicationResponse
   */
  async restartApplication(request: $_model.RestartApplicationRequest): Promise<$_model.RestartApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Restarts an application that is deployed in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - RestartK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartK8sApplicationResponse
   */
  async restartK8sApplicationWithOptions(request: $_model.RestartK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/restart_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RestartK8sApplicationResponse({}));
  }

  /**
   * Restarts an application that is deployed in a Container Service for Kubernetes (ACK) cluster or a serverless Kubernetes cluster.
   * 
   * @param request - RestartK8sApplicationRequest
   * @returns RestartK8sApplicationResponse
   */
  async restartK8sApplication(request: $_model.RestartK8sApplicationRequest): Promise<$_model.RestartK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Retries a failed process.
   * 
   * @param request - RetryChangeOrderTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryChangeOrderTaskResponse
   */
  async retryChangeOrderTaskWithOptions(request: $_model.RetryChangeOrderTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryChangeOrderTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.retryStatus)) {
      query["RetryStatus"] = request.retryStatus;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryChangeOrderTask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/task_retry`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryChangeOrderTaskResponse>(await this.callApi(params, req, runtime), new $_model.RetryChangeOrderTaskResponse({}));
  }

  /**
   * Retries a failed process.
   * 
   * @param request - RetryChangeOrderTaskRequest
   * @returns RetryChangeOrderTaskResponse
   */
  async retryChangeOrderTask(request: $_model.RetryChangeOrderTaskRequest): Promise<$_model.RetryChangeOrderTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryChangeOrderTaskWithOptions(request, headers, runtime);
  }

  /**
   * Rolls back an application.
   * 
   * @param request - RollbackApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackApplicationResponse
   */
  async rollbackApplicationWithOptions(request: $_model.RollbackApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.batch)) {
      query["Batch"] = request.batch;
    }

    if (!$dara.isNull(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.historyVersion)) {
      query["HistoryVersion"] = request.historyVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_rollback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RollbackApplicationResponse({}));
  }

  /**
   * Rolls back an application.
   * 
   * @param request - RollbackApplicationRequest
   * @returns RollbackApplicationResponse
   */
  async rollbackApplication(request: $_model.RollbackApplicationRequest): Promise<$_model.RollbackApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Terminates an application change process and rolls back the application. This operation is applicable to applications that are deployed in Elastic Compute Service (ECS) clusters.
   * 
   * @param request - RollbackChangeOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackChangeOrderResponse
   */
  async rollbackChangeOrderWithOptions(request: $_model.RollbackChangeOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackChangeOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackChangeOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/changeorder/rollback`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.RollbackChangeOrderResponse({}));
  }

  /**
   * Terminates an application change process and rolls back the application. This operation is applicable to applications that are deployed in Elastic Compute Service (ECS) clusters.
   * 
   * @param request - RollbackChangeOrderRequest
   * @returns RollbackChangeOrderResponse
   */
  async rollbackChangeOrder(request: $_model.RollbackChangeOrderRequest): Promise<$_model.RollbackChangeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * Scales in an application.
   * 
   * @param request - ScaleInApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleInApplicationResponse
   */
  async scaleInApplicationWithOptions(request: $_model.ScaleInApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleInApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    if (!$dara.isNull(request.forceStatus)) {
      query["ForceStatus"] = request.forceStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleInApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_scale_in`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleInApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ScaleInApplicationResponse({}));
  }

  /**
   * Scales in an application.
   * 
   * @param request - ScaleInApplicationRequest
   * @returns ScaleInApplicationResponse
   */
  async scaleInApplication(request: $_model.ScaleInApplicationRequest): Promise<$_model.ScaleInApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Scales out or in an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - ScaleK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleK8sApplicationResponse
   */
  async scaleK8sApplicationWithOptions(request: $_model.ScaleK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_apps`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ScaleK8sApplicationResponse({}));
  }

  /**
   * Scales out or in an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - ScaleK8sApplicationRequest
   * @returns ScaleK8sApplicationResponse
   */
  async scaleK8sApplication(request: $_model.ScaleK8sApplicationRequest): Promise<$_model.ScaleK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Scales out an application.
   * 
   * @param request - ScaleOutApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleOutApplicationResponse
   */
  async scaleOutApplicationWithOptions(request: $_model.ScaleOutApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleOutApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deployGroup)) {
      query["DeployGroup"] = request.deployGroup;
    }

    if (!$dara.isNull(request.ecuInfo)) {
      query["EcuInfo"] = request.ecuInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleOutApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_scale_out`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleOutApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ScaleOutApplicationResponse({}));
  }

  /**
   * Scales out an application.
   * 
   * @param request - ScaleOutApplicationRequest
   * @returns ScaleOutApplicationResponse
   */
  async scaleOutApplication(request: $_model.ScaleOutApplicationRequest): Promise<$_model.ScaleOutApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleOutApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Purchases Elastic Compute Service (ECS) instances in the Enterprise Distributed Application Service (EDAS) console and adds the purchased ECS instances to the specified instance group of an application.
   * 
   * @remarks
   * ## Limits
   * Assume that the auto scaling feature is configured and enabled for an application. When an auto scale-in is triggered for the application, the ECS instances that are purchased by calling this operation are removed first.
   * 
   * @param request - ScaleoutApplicationWithNewInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleoutApplicationWithNewInstancesResponse
   */
  async scaleoutApplicationWithNewInstancesWithOptions(request: $_model.ScaleoutApplicationWithNewInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleoutApplicationWithNewInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      query["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceChargePeriod)) {
      query["InstanceChargePeriod"] = request.instanceChargePeriod;
    }

    if (!$dara.isNull(request.instanceChargePeriodUnit)) {
      query["InstanceChargePeriodUnit"] = request.instanceChargePeriodUnit;
    }

    if (!$dara.isNull(request.instanceChargeType)) {
      query["InstanceChargeType"] = request.instanceChargeType;
    }

    if (!$dara.isNull(request.scalingNum)) {
      query["ScalingNum"] = request.scalingNum;
    }

    if (!$dara.isNull(request.scalingPolicy)) {
      query["ScalingPolicy"] = request.scalingPolicy;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateInstanceId)) {
      query["TemplateInstanceId"] = request.templateInstanceId;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleoutApplicationWithNewInstances",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/scaling/scale_out`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleoutApplicationWithNewInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ScaleoutApplicationWithNewInstancesResponse({}));
  }

  /**
   * Purchases Elastic Compute Service (ECS) instances in the Enterprise Distributed Application Service (EDAS) console and adds the purchased ECS instances to the specified instance group of an application.
   * 
   * @remarks
   * ## Limits
   * Assume that the auto scaling feature is configured and enabled for an application. When an auto scale-in is triggered for the application, the ECS instances that are purchased by calling this operation are removed first.
   * 
   * @param request - ScaleoutApplicationWithNewInstancesRequest
   * @returns ScaleoutApplicationWithNewInstancesResponse
   */
  async scaleoutApplicationWithNewInstances(request: $_model.ScaleoutApplicationWithNewInstancesRequest): Promise<$_model.ScaleoutApplicationWithNewInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleoutApplicationWithNewInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Starts an application.
   * 
   * @param request - StartApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartApplicationResponse
   */
  async startApplicationWithOptions(request: $_model.StartApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StartApplicationResponse({}));
  }

  /**
   * Starts an application.
   * 
   * @param request - StartApplicationRequest
   * @returns StartApplicationResponse
   */
  async startApplication(request: $_model.StartApplicationRequest): Promise<$_model.StartApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Starts precheck for Kubernetes application changes.
   * 
   * @param request - StartK8sAppPrecheckRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartK8sAppPrecheckResponse
   */
  async startK8sAppPrecheckWithOptions(request: $_model.StartK8sAppPrecheckRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartK8sAppPrecheckResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.componentIds)) {
      query["ComponentIds"] = request.componentIds;
    }

    if (!$dara.isNull(request.configMountDescs)) {
      query["ConfigMountDescs"] = request.configMountDescs;
    }

    if (!$dara.isNull(request.emptyDirs)) {
      query["EmptyDirs"] = request.emptyDirs;
    }

    if (!$dara.isNull(request.envFroms)) {
      query["EnvFroms"] = request.envFroms;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.javaStartUpConfig)) {
      query["JavaStartUpConfig"] = request.javaStartUpConfig;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.limitEphemeralStorage)) {
      query["LimitEphemeralStorage"] = request.limitEphemeralStorage;
    }

    if (!$dara.isNull(request.limitMem)) {
      query["LimitMem"] = request.limitMem;
    }

    if (!$dara.isNull(request.limitmCpu)) {
      query["LimitmCpu"] = request.limitmCpu;
    }

    if (!$dara.isNull(request.localVolume)) {
      query["LocalVolume"] = request.localVolume;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.packageUrl)) {
      query["PackageUrl"] = request.packageUrl;
    }

    if (!$dara.isNull(request.pvcMountDescs)) {
      query["PvcMountDescs"] = request.pvcMountDescs;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.requestsEphemeralStorage)) {
      query["RequestsEphemeralStorage"] = request.requestsEphemeralStorage;
    }

    if (!$dara.isNull(request.requestsMem)) {
      query["RequestsMem"] = request.requestsMem;
    }

    if (!$dara.isNull(request.requestsmCpu)) {
      query["RequestsmCpu"] = request.requestsmCpu;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartK8sAppPrecheck",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/app_precheck`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartK8sAppPrecheckResponse>(await this.callApi(params, req, runtime), new $_model.StartK8sAppPrecheckResponse({}));
  }

  /**
   * Starts precheck for Kubernetes application changes.
   * 
   * @param request - StartK8sAppPrecheckRequest
   * @returns StartK8sAppPrecheckResponse
   */
  async startK8sAppPrecheck(request: $_model.StartK8sAppPrecheckRequest): Promise<$_model.StartK8sAppPrecheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sAppPrecheckWithOptions(request, headers, runtime);
  }

  /**
   * Starts an application in a Container Service for Kubernetes (ACK) cluster or Serverless Kubernetes cluster.
   * 
   * @param request - StartK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartK8sApplicationResponse
   */
  async startK8sApplicationWithOptions(request: $_model.StartK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/start_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StartK8sApplicationResponse({}));
  }

  /**
   * Starts an application in a Container Service for Kubernetes (ACK) cluster or Serverless Kubernetes cluster.
   * 
   * @param request - StartK8sApplicationRequest
   * @returns StartK8sApplicationResponse
   */
  async startK8sApplication(request: $_model.StartK8sApplicationRequest): Promise<$_model.StartK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Stops an application.
   * 
   * @param request - StopApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopApplicationResponse
   */
  async stopApplicationWithOptions(request: $_model.StopApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.eccInfo)) {
      query["EccInfo"] = request.eccInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StopApplicationResponse({}));
  }

  /**
   * Stops an application.
   * 
   * @param request - StopApplicationRequest
   * @returns StopApplicationResponse
   */
  async stopApplication(request: $_model.StopApplicationRequest): Promise<$_model.StopApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Stops an application in a Container Service for Kubernetes (ACK) cluster or a Serverless Kubernetes cluster.
   * 
   * @param request - StopK8sApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopK8sApplicationResponse
   */
  async stopK8sApplicationWithOptions(request: $_model.StopK8sApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopK8sApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopK8sApplication",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/stop_k8s_app`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopK8sApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StopK8sApplicationResponse({}));
  }

  /**
   * Stops an application in a Container Service for Kubernetes (ACK) cluster or a Serverless Kubernetes cluster.
   * 
   * @param request - StopK8sApplicationRequest
   * @returns StopK8sApplicationResponse
   */
  async stopK8sApplication(request: $_model.StopK8sApplicationRequest): Promise<$_model.StopK8sApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopK8sApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of the advanced application monitoring feature or configures this feature for an application that is deployed in an Elastic Compute Service (ECS) or Kubernetes cluster.
   * 
   * @remarks
   * To call the SwitchAdvancedMonitoring operation, you must make sure that the version of Enterprise Distributed Application Service (EDAS) SDK for Java or Python is 3.15.2 or later.
   * 
   * @param request - SwitchAdvancedMonitoringRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchAdvancedMonitoringResponse
   */
  async switchAdvancedMonitoringWithOptions(request: $_model.SwitchAdvancedMonitoringRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchAdvancedMonitoringResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.enableAdvancedMonitoring)) {
      query["EnableAdvancedMonitoring"] = request.enableAdvancedMonitoring;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchAdvancedMonitoring",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/monitor/advancedMonitorInfo`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchAdvancedMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.SwitchAdvancedMonitoringResponse({}));
  }

  /**
   * Queries the status of the advanced application monitoring feature or configures this feature for an application that is deployed in an Elastic Compute Service (ECS) or Kubernetes cluster.
   * 
   * @remarks
   * To call the SwitchAdvancedMonitoring operation, you must make sure that the version of Enterprise Distributed Application Service (EDAS) SDK for Java or Python is 3.15.2 or later.
   * 
   * @param request - SwitchAdvancedMonitoringRequest
   * @returns SwitchAdvancedMonitoringResponse
   */
  async switchAdvancedMonitoring(request: $_model.SwitchAdvancedMonitoringRequest): Promise<$_model.SwitchAdvancedMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.switchAdvancedMonitoringWithOptions(request, headers, runtime);
  }

  /**
   * Synchronizes the basic Alibaba Cloud resources that belong to your account to Enterprise Distributed Application Service (EDAS). This operation is applicable to Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * If you call this operation to synchronize ECS resource information, all instance data is synchronized from ECS. If you have more than 100 ECS instances, we recommend that you do not frequently call this operation.
   * 
   * @param request - SynchronizeResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SynchronizeResourceResponse
   */
  async synchronizeResourceWithOptions(request: $_model.SynchronizeResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SynchronizeResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SynchronizeResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/pop_sync_resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SynchronizeResourceResponse>(await this.callApi(params, req, runtime), new $_model.SynchronizeResourceResponse({}));
  }

  /**
   * Synchronizes the basic Alibaba Cloud resources that belong to your account to Enterprise Distributed Application Service (EDAS). This operation is applicable to Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * If you call this operation to synchronize ECS resource information, all instance data is synchronized from ECS. If you have more than 100 ECS instances, we recommend that you do not frequently call this operation.
   * 
   * @param request - SynchronizeResourceRequest
   * @returns SynchronizeResourceResponse
   */
  async synchronizeResource(request: $_model.SynchronizeResourceRequest): Promise<$_model.SynchronizeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.synchronizeResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates tags and adds the tags to resources at a time.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Creates tags and adds the tags to resources at a time.
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
   * Imports or migrates one or more Elastic Compute Service (ECS) instances to a cluster.
   * 
   * @remarks
   * ## Limits
   * When you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
   * 
   * @param request - TransformClusterMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformClusterMemberResponse
   */
  async transformClusterMemberWithOptions(request: $_model.TransformClusterMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TransformClusterMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.targetClusterId)) {
      query["TargetClusterId"] = request.targetClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformClusterMember",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/resource/transform_cluster_member`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformClusterMemberResponse>(await this.callApi(params, req, runtime), new $_model.TransformClusterMemberResponse({}));
  }

  /**
   * Imports or migrates one or more Elastic Compute Service (ECS) instances to a cluster.
   * 
   * @remarks
   * ## Limits
   * When you call this operation to import an ECS instance, the operating system of the ECS instance is reinstalled. After the operating system is reinstalled, all data of the ECS instance is deleted. You must set a logon password for the ECS instance. Make sure that no important data exists on or data has been backed up for the ECS instance that you want to import.
   * 
   * @param request - TransformClusterMemberRequest
   * @returns TransformClusterMemberResponse
   */
  async transformClusterMember(request: $_model.TransformClusterMemberRequest): Promise<$_model.TransformClusterMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transformClusterMemberWithOptions(request, headers, runtime);
  }

  /**
   * Unbinds a Server Load Balancer (SLB) instance from an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - UnbindK8sSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindK8sSlbResponse
   */
  async unbindK8sSlbWithOptions(request: $_model.UnbindK8sSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindK8sSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindK8sSlbResponse>(await this.callApi(params, req, runtime), new $_model.UnbindK8sSlbResponse({}));
  }

  /**
   * Unbinds a Server Load Balancer (SLB) instance from an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - UnbindK8sSlbRequest
   * @returns UnbindK8sSlbResponse
   */
  async unbindK8sSlb(request: $_model.UnbindK8sSlbRequest): Promise<$_model.UnbindK8sSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindK8sSlbWithOptions(request, headers, runtime);
  }

  /**
   * Unbinds a Server Load Balancer (SLB) instance from an application.
   * 
   * @param request - UnbindSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindSlbResponse
   */
  async unbindSlbWithOptions(request: $_model.UnbindSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deleteListener)) {
      query["DeleteListener"] = request.deleteListener;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/unbind_slb_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSlbResponse>(await this.callApi(params, req, runtime), new $_model.UnbindSlbResponse({}));
  }

  /**
   * Unbinds a Server Load Balancer (SLB) instance from an application.
   * 
   * @param request - UnbindSlbRequest
   * @returns UnbindSlbResponse
   */
  async unbindSlb(request: $_model.UnbindSlbRequest): Promise<$_model.UnbindSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindSlbWithOptions(request, headers, runtime);
  }

  /**
   * Removes one or more tags from one or more resources.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleteAll)) {
      query["DeleteAll"] = request.deleteAll;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/tag/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes one or more tags from one or more resources.
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
   * Modifies the information about an account.
   * 
   * @param request - UpdateAccountInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAccountInfoResponse
   */
  async updateAccountInfoWithOptions(request: $_model.UpdateAccountInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAccountInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.telephone)) {
      query["Telephone"] = request.telephone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAccountInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/edit_account_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAccountInfoResponse({}));
  }

  /**
   * Modifies the information about an account.
   * 
   * @param request - UpdateAccountInfoRequest
   * @returns UpdateAccountInfoResponse
   */
  async updateAccountInfo(request: $_model.UpdateAccountInfoRequest): Promise<$_model.UpdateAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAccountInfoWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the name, description, and owner of an application.
   * 
   * @param request - UpdateApplicationBaseInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationBaseInfoResponse
   */
  async updateApplicationBaseInfoWithOptions(request: $_model.UpdateApplicationBaseInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationBaseInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.desc)) {
      query["Desc"] = request.desc;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationBaseInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/update_app_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationBaseInfoResponse({}));
  }

  /**
   * Modifies the name, description, and owner of an application.
   * 
   * @param request - UpdateApplicationBaseInfoRequest
   * @returns UpdateApplicationBaseInfoResponse
   */
  async updateApplicationBaseInfo(request: $_model.UpdateApplicationBaseInfoRequest): Promise<$_model.UpdateApplicationBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationBaseInfoWithOptions(request, headers, runtime);
  }

  /**
   * Modifies an auto scaling policy for an application.
   * 
   * @param request - UpdateApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationScalingRuleResponse
   */
  async updateApplicationScalingRuleWithOptions(request: $_model.UpdateApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationScalingRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.scalingBehaviour)) {
      query["ScalingBehaviour"] = request.scalingBehaviour;
    }

    if (!$dara.isNull(request.scalingRuleEnable)) {
      query["ScalingRuleEnable"] = request.scalingRuleEnable;
    }

    if (!$dara.isNull(request.scalingRuleMetric)) {
      query["ScalingRuleMetric"] = request.scalingRuleMetric;
    }

    if (!$dara.isNull(request.scalingRuleName)) {
      query["ScalingRuleName"] = request.scalingRuleName;
    }

    if (!$dara.isNull(request.scalingRuleTimer)) {
      query["ScalingRuleTimer"] = request.scalingRuleTimer;
    }

    if (!$dara.isNull(request.scalingRuleTrigger)) {
      query["ScalingRuleTrigger"] = request.scalingRuleTrigger;
    }

    if (!$dara.isNull(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationScalingRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v1/eam/scale/application_scaling_rule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationScalingRuleResponse({}));
  }

  /**
   * Modifies an auto scaling policy for an application.
   * 
   * @param request - UpdateApplicationScalingRuleRequest
   * @returns UpdateApplicationScalingRuleResponse
   */
  async updateApplicationScalingRule(request: $_model.UpdateApplicationScalingRuleRequest): Promise<$_model.UpdateApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a configuration template.
   * 
   * @param request - UpdateConfigTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigTemplateResponse
   */
  async updateConfigTemplateWithOptions(request: $_model.UpdateConfigTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.format)) {
      body["Format"] = request.format;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigTemplate",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/config_template`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigTemplateResponse({}));
  }

  /**
   * Modifies a configuration template.
   * 
   * @param request - UpdateConfigTemplateRequest
   * @returns UpdateConfigTemplateResponse
   */
  async updateConfigTemplate(request: $_model.UpdateConfigTemplateRequest): Promise<$_model.UpdateConfigTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigTemplateWithOptions(request, headers, runtime);
  }

  /**
   * Updates the Enterprise Distributed Application Service (EDAS) Container version of a High-Speed Service Framework (HSF) application. EDAS Container includes Ali-Tomcat and Pandora.
   * 
   * @param request - UpdateContainerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContainerResponse
   */
  async updateContainerWithOptions(request: $_model.UpdateContainerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContainerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.buildPackId)) {
      query["BuildPackId"] = request.buildPackId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContainer",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/changeorder/co_update_container`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContainerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContainerResponse({}));
  }

  /**
   * Updates the Enterprise Distributed Application Service (EDAS) Container version of a High-Speed Service Framework (HSF) application. EDAS Container includes Ali-Tomcat and Pandora.
   * 
   * @param request - UpdateContainerRequest
   * @returns UpdateContainerResponse
   */
  async updateContainer(request: $_model.UpdateContainerRequest): Promise<$_model.UpdateContainerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerWithOptions(request, headers, runtime);
  }

  /**
   * Configures the Tomcat container for an application or application instance group in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - UpdateContainerConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateContainerConfigurationResponse
   */
  async updateContainerConfigurationWithOptions(request: $_model.UpdateContainerConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateContainerConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.contextPath)) {
      query["ContextPath"] = request.contextPath;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.httpPort)) {
      query["HttpPort"] = request.httpPort;
    }

    if (!$dara.isNull(request.maxThreads)) {
      query["MaxThreads"] = request.maxThreads;
    }

    if (!$dara.isNull(request.URIEncoding)) {
      query["URIEncoding"] = request.URIEncoding;
    }

    if (!$dara.isNull(request.useBodyEncoding)) {
      query["UseBodyEncoding"] = request.useBodyEncoding;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateContainerConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/container_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateContainerConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateContainerConfigurationResponse({}));
  }

  /**
   * Configures the Tomcat container for an application or application instance group in an Elastic Compute Service (ECS) cluster.
   * 
   * @param request - UpdateContainerConfigurationRequest
   * @returns UpdateContainerConfigurationResponse
   */
  async updateContainerConfiguration(request: $_model.UpdateContainerConfigurationRequest): Promise<$_model.UpdateContainerConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateContainerConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * Changes the health check URL for an application.
   * 
   * @param request - UpdateHealthCheckUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHealthCheckUrlResponse
   */
  async updateHealthCheckUrlWithOptions(request: $_model.UpdateHealthCheckUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHealthCheckUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.hcURL)) {
      query["hcURL"] = request.hcURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHealthCheckUrl",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/modify_hc_url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHealthCheckUrlResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHealthCheckUrlResponse({}));
  }

  /**
   * Changes the health check URL for an application.
   * 
   * @param request - UpdateHealthCheckUrlRequest
   * @returns UpdateHealthCheckUrlResponse
   */
  async updateHealthCheckUrl(request: $_model.UpdateHealthCheckUrlRequest): Promise<$_model.UpdateHealthCheckUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHealthCheckUrlWithOptions(request, headers, runtime);
  }

  /**
   * Mounts a script to an application or application instance group.
   * 
   * @param request - UpdateHookConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHookConfigurationResponse
   */
  async updateHookConfigurationWithOptions(request: $_model.UpdateHookConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHookConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.hooks)) {
      query["Hooks"] = request.hooks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHookConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/app/config_app_hook_json`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHookConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHookConfigurationResponse({}));
  }

  /**
   * Mounts a script to an application or application instance group.
   * 
   * @param request - UpdateHookConfigurationRequest
   * @returns UpdateHookConfigurationResponse
   */
  async updateHookConfiguration(request: $_model.UpdateHookConfigurationRequest): Promise<$_model.UpdateHookConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHookConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * Configures the Java virtual machine (JVM) parameters for an application or an instance group where the application is deployed.
   * 
   * @param request - UpdateJvmConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJvmConfigurationResponse
   */
  async updateJvmConfigurationWithOptions(request: $_model.UpdateJvmConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJvmConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.maxHeapSize)) {
      query["MaxHeapSize"] = request.maxHeapSize;
    }

    if (!$dara.isNull(request.maxPermSize)) {
      query["MaxPermSize"] = request.maxPermSize;
    }

    if (!$dara.isNull(request.minHeapSize)) {
      query["MinHeapSize"] = request.minHeapSize;
    }

    if (!$dara.isNull(request.options)) {
      query["Options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJvmConfiguration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/app/app_jvm_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJvmConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJvmConfigurationResponse({}));
  }

  /**
   * Configures the Java virtual machine (JVM) parameters for an application or an instance group where the application is deployed.
   * 
   * @param request - UpdateJvmConfigurationRequest
   * @returns UpdateJvmConfigurationResponse
   */
  async updateJvmConfiguration(request: $_model.UpdateJvmConfigurationRequest): Promise<$_model.UpdateJvmConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJvmConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * Modifies basic information about an application that is deployed in a Kubernetes cluster.
   * 
   * @param request - UpdateK8sApplicationBaseInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sApplicationBaseInfoResponse
   */
  async updateK8sApplicationBaseInfoWithOptions(request: $_model.UpdateK8sApplicationBaseInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sApplicationBaseInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sApplicationBaseInfo",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/update_app_basic_info`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sApplicationBaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sApplicationBaseInfoResponse({}));
  }

  /**
   * Modifies basic information about an application that is deployed in a Kubernetes cluster.
   * 
   * @param request - UpdateK8sApplicationBaseInfoRequest
   * @returns UpdateK8sApplicationBaseInfoResponse
   */
  async updateK8sApplicationBaseInfo(request: $_model.UpdateK8sApplicationBaseInfoRequest): Promise<$_model.UpdateK8sApplicationBaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationBaseInfoWithOptions(request, headers, runtime);
  }

  /**
   * Updates the configuration of an application in a Container Service for Kubernetes (ACK) or Serverless Kubernetes cluster.
   * 
   * @param request - UpdateK8sApplicationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sApplicationConfigResponse
   */
  async updateK8sApplicationConfigWithOptions(request: $_model.UpdateK8sApplicationConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sApplicationConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.cpuLimit)) {
      query["CpuLimit"] = request.cpuLimit;
    }

    if (!$dara.isNull(request.cpuRequest)) {
      query["CpuRequest"] = request.cpuRequest;
    }

    if (!$dara.isNull(request.ephemeralStorageLimit)) {
      query["EphemeralStorageLimit"] = request.ephemeralStorageLimit;
    }

    if (!$dara.isNull(request.ephemeralStorageRequest)) {
      query["EphemeralStorageRequest"] = request.ephemeralStorageRequest;
    }

    if (!$dara.isNull(request.mcpuLimit)) {
      query["McpuLimit"] = request.mcpuLimit;
    }

    if (!$dara.isNull(request.mcpuRequest)) {
      query["McpuRequest"] = request.mcpuRequest;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      query["MemoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.memoryRequest)) {
      query["MemoryRequest"] = request.memoryRequest;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sApplicationConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_app_configuration`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sApplicationConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sApplicationConfigResponse({}));
  }

  /**
   * Updates the configuration of an application in a Container Service for Kubernetes (ACK) or Serverless Kubernetes cluster.
   * 
   * @param request - UpdateK8sApplicationConfigRequest
   * @returns UpdateK8sApplicationConfigResponse
   */
  async updateK8sApplicationConfig(request: $_model.UpdateK8sApplicationConfigRequest): Promise<$_model.UpdateK8sApplicationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sApplicationConfigWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a Kubernetes ConfigMap.
   * 
   * @param request - UpdateK8sConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sConfigMapResponse
   */
  async updateK8sConfigMapWithOptions(request: $_model.UpdateK8sConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sConfigMapResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sConfigMap",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_config_map`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sConfigMapResponse({}));
  }

  /**
   * Modifies a Kubernetes ConfigMap.
   * 
   * @param request - UpdateK8sConfigMapRequest
   * @returns UpdateK8sConfigMapResponse
   */
  async updateK8sConfigMap(request: $_model.UpdateK8sConfigMapRequest): Promise<$_model.UpdateK8sConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Updates an ingress.
   * 
   * @param request - UpdateK8sIngressRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sIngressRuleResponse
   */
  async updateK8sIngressRuleWithOptions(request: $_model.UpdateK8sIngressRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sIngressRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.ingressConf)) {
      query["IngressConf"] = request.ingressConf;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sIngressRule",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_ingress`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sIngressRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sIngressRuleResponse({}));
  }

  /**
   * Updates an ingress.
   * 
   * @param request - UpdateK8sIngressRuleRequest
   * @returns UpdateK8sIngressRuleResponse
   */
  async updateK8sIngressRule(request: $_model.UpdateK8sIngressRuleRequest): Promise<$_model.UpdateK8sIngressRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sIngressRuleWithOptions(request, headers, runtime);
  }

  /**
   * Updates a specified resource in a Kubernetes cluster.
   * 
   * @remarks
   * > You can update only Deployments.
   * 
   * @param request - UpdateK8sResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sResourceResponse
   */
  async updateK8sResourceWithOptions(request: $_model.UpdateK8sResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resourceContent)) {
      body["ResourceContent"] = request.resourceContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/oam/update_k8s_resource_config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sResourceResponse({}));
  }

  /**
   * Updates a specified resource in a Kubernetes cluster.
   * 
   * @remarks
   * > You can update only Deployments.
   * 
   * @param request - UpdateK8sResourceRequest
   * @returns UpdateK8sResourceResponse
   */
  async updateK8sResource(request: $_model.UpdateK8sResourceRequest): Promise<$_model.UpdateK8sResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sResourceWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a Kubernetes Secret.
   * 
   * @param request - UpdateK8sSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sSecretResponse
   */
  async updateK8sSecretWithOptions(request: $_model.UpdateK8sSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sSecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.base64Encoded)) {
      body["Base64Encoded"] = request.base64Encoded;
    }

    if (!$dara.isNull(request.certId)) {
      body["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certRegionId)) {
      body["CertRegionId"] = request.certRegionId;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sSecret",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_secret`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sSecretResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sSecretResponse({}));
  }

  /**
   * Modifies a Kubernetes Secret.
   * 
   * @param request - UpdateK8sSecretRequest
   * @returns UpdateK8sSecretResponse
   */
  async updateK8sSecret(request: $_model.UpdateK8sSecretRequest): Promise<$_model.UpdateK8sSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSecretWithOptions(request, headers, runtime);
  }

  /**
   * Updates an application service in a Kubernetes cluster.
   * 
   * @param request - UpdateK8sServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sServiceResponse
   */
  async updateK8sServiceWithOptions(request: $_model.UpdateK8sServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.externalTrafficPolicy)) {
      query["ExternalTrafficPolicy"] = request.externalTrafficPolicy;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.servicePorts)) {
      query["ServicePorts"] = request.servicePorts;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sService",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_service`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sServiceResponse({}));
  }

  /**
   * Updates an application service in a Kubernetes cluster.
   * 
   * @param request - UpdateK8sServiceRequest
   * @returns UpdateK8sServiceResponse
   */
  async updateK8sService(request: $_model.UpdateK8sServiceRequest): Promise<$_model.UpdateK8sServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sServiceWithOptions(request, headers, runtime);
  }

  /**
   * Updates the Server Load Balancer (SLB) instance bound to an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - UpdateK8sSlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateK8sSlbResponse
   */
  async updateK8sSlbWithOptions(request: $_model.UpdateK8sSlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateK8sSlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.disableForceOverride)) {
      query["DisableForceOverride"] = request.disableForceOverride;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.servicePortInfos)) {
      query["ServicePortInfos"] = request.servicePortInfos;
    }

    if (!$dara.isNull(request.slbName)) {
      query["SlbName"] = request.slbName;
    }

    if (!$dara.isNull(request.slbProtocol)) {
      query["SlbProtocol"] = request.slbProtocol;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateK8sSlb",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/acs/k8s_slb_binding`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateK8sSlbResponse>(await this.callApi(params, req, runtime), new $_model.UpdateK8sSlbResponse({}));
  }

  /**
   * Updates the Server Load Balancer (SLB) instance bound to an application that is deployed in a Container Service for Kubernetes (ACK) cluster.
   * 
   * @param request - UpdateK8sSlbRequest
   * @returns UpdateK8sSlbResponse
   */
  async updateK8sSlb(request: $_model.UpdateK8sSlbRequest): Promise<$_model.UpdateK8sSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateK8sSlbWithOptions(request, headers, runtime);
  }

  /**
   * 更新本地设置
   * 
   * @param request - UpdateLocalitySettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLocalitySettingResponse
   */
  async updateLocalitySettingWithOptions(request: $_model.UpdateLocalitySettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLocalitySettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLocalitySetting",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/sp/applications/locality/setting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLocalitySettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLocalitySettingResponse({}));
  }

  /**
   * 更新本地设置
   * 
   * @param request - UpdateLocalitySettingRequest
   * @returns UpdateLocalitySettingResponse
   */
  async updateLocalitySetting(request: $_model.UpdateLocalitySettingRequest): Promise<$_model.UpdateLocalitySettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLocalitySettingWithOptions(request, headers, runtime);
  }

  /**
   * Modifies a role.
   * 
   * @param request - UpdateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: $_model.UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionData)) {
      query["ActionData"] = request.actionData;
    }

    if (!$dara.isNull(request.roleId)) {
      query["RoleId"] = request.roleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/account/edit_role`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleResponse({}));
  }

  /**
   * Modifies a role.
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
  }

  /**
   * Configures a Logstore for an application.
   * 
   * @param request - UpdateSlsLogStoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSlsLogStoreResponse
   */
  async updateSlsLogStoreWithOptions(request: $_model.UpdateSlsLogStoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSlsLogStoreResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSlsLogStore",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/k8s/sls/update_sls_log_store`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSlsLogStoreResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSlsLogStoreResponse({}));
  }

  /**
   * Configures a Logstore for an application.
   * 
   * @param request - UpdateSlsLogStoreRequest
   * @returns UpdateSlsLogStoreResponse
   */
  async updateSlsLogStore(request: $_model.UpdateSlsLogStoreRequest): Promise<$_model.UpdateSlsLogStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSlsLogStoreWithOptions(request, headers, runtime);
  }

  /**
   * 更新泳道
   * 
   * @param request - UpdateSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSwimmingLaneResponse
   */
  async updateSwimmingLaneWithOptions(request: $_model.UpdateSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appInfos)) {
      query["AppInfos"] = request.appInfos;
    }

    if (!$dara.isNull(request.enableRules)) {
      query["EnableRules"] = request.enableRules;
    }

    if (!$dara.isNull(request.entryRules)) {
      query["EntryRules"] = request.entryRules;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSwimmingLane",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lanes`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSwimmingLaneResponse({}));
  }

  /**
   * 更新泳道
   * 
   * @param request - UpdateSwimmingLaneRequest
   * @returns UpdateSwimmingLaneResponse
   */
  async updateSwimmingLane(request: $_model.UpdateSwimmingLaneRequest): Promise<$_model.UpdateSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Updates a lane group.
   * 
   * @param request - UpdateSwimmingLaneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSwimmingLaneGroupResponse
   */
  async updateSwimmingLaneGroupWithOptions(request: $_model.UpdateSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSwimmingLaneGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.entryApp)) {
      query["EntryApp"] = request.entryApp;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSwimmingLaneGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: `/pop/v5/trafficmgnt/swimming_lane_groups`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSwimmingLaneGroupResponse({}));
  }

  /**
   * Updates a lane group.
   * 
   * @param request - UpdateSwimmingLaneGroupRequest
   * @returns UpdateSwimmingLaneGroupResponse
   */
  async updateSwimmingLaneGroup(request: $_model.UpdateSwimmingLaneGroupRequest): Promise<$_model.UpdateSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

}
