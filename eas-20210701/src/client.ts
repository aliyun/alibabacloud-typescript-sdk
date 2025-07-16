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
      'cn-beijing': "pai-eas.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "pai-eas.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "pai-eas.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai-eas.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai-eas.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai-eas.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai-eas.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "pai-eas.ap-southeast-5.aliyuncs.com",
      'us-east-1': "pai-eas.us-east-1.aliyuncs.com",
      'us-west-1': "pai-eas.us-west-1.aliyuncs.com",
      'eu-central-1': "pai-eas.eu-central-1.aliyuncs.com",
      'ap-south-1': "pai-eas.ap-south-1.aliyuncs.com",
      'cn-shanghai-finance-1': "pai-eas.cn-shanghai-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "pai-eas.cn-north-2-gov-1.aliyuncs.com",
      'cn-chengdu': "pai-eas.cn-chengdu.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Binds a custom domain name to a private gateway.
   * 
   * @param tmpReq - AttachGatewayDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachGatewayDomainResponse
   */
  async attachGatewayDomainWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.AttachGatewayDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AttachGatewayDomainResponse> {
    tmpReq.validate();
    let request = new $_model.AttachGatewayDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customDomain)) {
      request.customDomainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customDomain, "CustomDomain", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customDomainShrink)) {
      query["CustomDomain"] = request.customDomainShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachGatewayDomain",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domain/attach`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.AttachGatewayDomainResponse({}));
  }

  /**
   * Binds a custom domain name to a private gateway.
   * 
   * @param request - AttachGatewayDomainRequest
   * @returns AttachGatewayDomainResponse
   */
  async attachGatewayDomain(ClusterId: string, GatewayId: string, request: $_model.AttachGatewayDomainRequest): Promise<$_model.AttachGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachGatewayDomainWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Clones a service.
   * 
   * @param tmpReq - CloneServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneServiceResponse
   */
  async cloneServiceWithOptions(ClusterId: string, ServiceName: string, tmpReq: $_model.CloneServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneServiceResponse> {
    tmpReq.validate();
    let request = new $_model.CloneServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneServiceResponse>(await this.callApi(params, req, runtime), new $_model.CloneServiceResponse({}));
  }

  /**
   * Clones a service.
   * 
   * @param request - CloneServiceRequest
   * @returns CloneServiceResponse
   */
  async cloneService(ClusterId: string, ServiceName: string, request: $_model.CloneServiceRequest): Promise<$_model.CloneServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitServiceResponse
   */
  async commitServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CommitServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/commit`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommitServiceResponse>(await this.callApi(params, req, runtime), new $_model.CommitServiceResponse({}));
  }

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * @returns CommitServiceResponse
   */
  async commitService(ClusterId: string, ServiceName: string): Promise<$_model.CommitServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commitServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param tmpReq - CreateAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.CreateAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAclPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAclPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateAclPolicyResponse({}));
  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param request - CreateAclPolicyRequest
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicy(ClusterId: string, GatewayId: string, request: $_model.CreateAclPolicyRequest): Promise<$_model.CreateAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates an application service to obtain the inference capabilities of large models.
   * 
   * @param request - CreateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppServiceResponse
   */
  async createAppServiceWithOptions(request: $_model.CreateAppServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppServiceResponse({}));
  }

  /**
   * Creates an application service to obtain the inference capabilities of large models.
   * 
   * @param request - CreateAppServiceRequest
   * @returns CreateAppServiceResponse
   */
  async createAppService(request: $_model.CreateAppServiceRequest): Promise<$_model.CreateAppServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppServiceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBenchmarkTaskResponse
   */
  async createBenchmarkTaskWithOptions(request: $_model.CreateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBenchmarkTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateBenchmarkTaskResponse({}));
  }

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @returns CreateBenchmarkTaskResponse
   */
  async createBenchmarkTask(request: $_model.CreateBenchmarkTaskRequest): Promise<$_model.CreateBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a gateway.
   * 
   * @param request - CreateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayResponse
   */
  async createGatewayWithOptions(request: $_model.CreateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!$dara.isNull(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayResponse({}));
  }

  /**
   * Creates a gateway.
   * 
   * @param request - CreateGatewayRequest
   * @returns CreateGatewayResponse
   */
  async createGateway(request: $_model.CreateGatewayRequest): Promise<$_model.CreateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
  async createGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: $_model.CreateGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayIntranetLinkedVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.enableAuthoritativeDns)) {
      query["EnableAuthoritativeDns"] = request.enableAuthoritativeDns;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayIntranetLinkedVpcResponse({}));
  }

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
  async createGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: $_model.CreateGatewayIntranetLinkedVpcRequest): Promise<$_model.CreateGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates a VPC peering connection on an internal endpoint of a gateway.
   * 
   * @param tmpReq - CreateGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIntranetLinkedVpcPeerResponse
   */
  async createGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.CreateGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewayIntranetLinkedVpcPeerResponse> {
    tmpReq.validate();
    let request = new $_model.CreateGatewayIntranetLinkedVpcPeerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.peerVpcs)) {
      request.peerVpcsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.peerVpcs, "PeerVpcs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.peerVpcsShrink)) {
      query["PeerVpcs"] = request.peerVpcsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewayIntranetLinkedVpcPeerResponse({}));
  }

  /**
   * Creates a VPC peering connection on an internal endpoint of a gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcPeerRequest
   * @returns CreateGatewayIntranetLinkedVpcPeerResponse
   */
  async createGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: $_model.CreateGatewayIntranetLinkedVpcPeerRequest): Promise<$_model.CreateGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: $_model.CreateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!$dara.isNull(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceResponse({}));
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: $_model.CreateResourceRequest): Promise<$_model.CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceInstancesResponse
   */
  async createResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: $_model.CreateResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!$dara.isNull(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceInstancesResponse({}));
  }

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @returns CreateResourceInstancesResponse
   */
  async createResourceInstances(ClusterId: string, ResourceId: string, request: $_model.CreateResourceInstancesRequest): Promise<$_model.CreateResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceLogResponse
   */
  async createResourceLogWithOptions(ClusterId: string, ResourceId: string, request: $_model.CreateResourceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logStore)) {
      body["LogStore"] = request.logStore;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceLogResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceLogResponse({}));
  }

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @returns CreateResourceLogResponse
   */
  async createResourceLog(ClusterId: string, ResourceId: string, request: $_model.CreateResourceLogRequest): Promise<$_model.CreateResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceLogWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param tmpReq - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(tmpReq: $_model.CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.develop)) {
      query["Develop"] = request.develop;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceResponse({}));
  }

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: $_model.CreateServiceRequest): Promise<$_model.CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceAutoScalerResponse
   */
  async createServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: $_model.CreateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceAutoScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!$dara.isNull(request.max)) {
      body["max"] = request.max;
    }

    if (!$dara.isNull(request.min)) {
      body["min"] = request.min;
    }

    if (!$dara.isNull(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceAutoScalerResponse({}));
  }

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @returns CreateServiceAutoScalerResponse
   */
  async createServiceAutoScaler(ClusterId: string, ServiceName: string, request: $_model.CreateServiceAutoScalerRequest): Promise<$_model.CreateServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceCronScalerResponse
   */
  async createServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: $_model.CreateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceCronScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!$dara.isNull(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceCronScalerResponse({}));
  }

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @returns CreateServiceCronScalerResponse
   */
  async createServiceCronScaler(ClusterId: string, ServiceName: string, request: $_model.CreateServiceCronScalerRequest): Promise<$_model.CreateServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceMirrorResponse
   */
  async createServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: $_model.CreateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceMirrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceMirrorResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceMirrorResponse({}));
  }

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @returns CreateServiceMirrorResponse
   */
  async createServiceMirror(ClusterId: string, ServiceName: string, request: $_model.CreateServiceMirrorRequest): Promise<$_model.CreateServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Creates a virtual resource group.
   * 
   * @param request - CreateVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualResourceResponse
   */
  async createVirtualResourceWithOptions(request: $_model.CreateVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVirtualResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disableSpotProtectionPeriod)) {
      body["DisableSpotProtectionPeriod"] = request.disableSpotProtectionPeriod;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      body["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVirtualResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateVirtualResourceResponse({}));
  }

  /**
   * Creates a virtual resource group.
   * 
   * @param request - CreateVirtualResourceRequest
   * @returns CreateVirtualResourceResponse
   */
  async createVirtualResource(request: $_model.CreateVirtualResourceRequest): Promise<$_model.CreateVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVirtualResourceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param tmpReq - DeleteAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.DeleteAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAclPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAclPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAclPolicyResponse({}));
  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param request - DeleteAclPolicyRequest
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicy(ClusterId: string, GatewayId: string, request: $_model.DeleteAclPolicyRequest): Promise<$_model.DeleteAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBenchmarkTaskResponse
   */
  async deleteBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBenchmarkTaskResponse({}));
  }

  /**
   * Deletes a stress testing task.
   * @returns DeleteBenchmarkTaskResponse
   */
  async deleteBenchmarkTask(ClusterId: string, TaskName: string): Promise<$_model.DeleteBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Deletes a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayResponse({}));
  }

  /**
   * Deletes a private gateway.
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(ClusterId: string, GatewayId: string): Promise<$_model.DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
  async deleteGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: $_model.DeleteGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayIntranetLinkedVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayIntranetLinkedVpcResponse({}));
  }

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
  async deleteGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: $_model.DeleteGatewayIntranetLinkedVpcRequest): Promise<$_model.DeleteGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a VPC peering connection from an internal endpoint of a gateway.
   * 
   * @param tmpReq - DeleteGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIntranetLinkedVpcPeerResponse
   */
  async deleteGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.DeleteGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayIntranetLinkedVpcPeerResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteGatewayIntranetLinkedVpcPeerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.peerVpcs)) {
      request.peerVpcsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.peerVpcs, "PeerVpcs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.peerVpcsShrink)) {
      query["PeerVpcs"] = request.peerVpcsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayIntranetLinkedVpcPeerResponse({}));
  }

  /**
   * Deletes a VPC peering connection from an internal endpoint of a gateway.
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcPeerRequest
   * @returns DeleteGatewayIntranetLinkedVpcPeerResponse
   */
  async deleteGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: $_model.DeleteGatewayIntranetLinkedVpcPeerRequest): Promise<$_model.DeleteGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a resource group that contains no resources or instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceResponse({}));
  }

  /**
   * Deletes a resource group that contains no resources or instances.
   * @returns DeleteResourceResponse
   */
  async deleteResource(ClusterId: string, ResourceId: string): Promise<$_model.DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceDLinkResponse
   */
  async deleteResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceDLinkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceDLinkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceDLinkResponse({}));
  }

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * @returns DeleteResourceDLinkResponse
   */
  async deleteResourceDLink(ClusterId: string, ResourceId: string): Promise<$_model.DeleteResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes the tags of an instance in a resource group.
   * 
   * @param tmpReq - DeleteResourceInstanceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceInstanceLabelResponse
   */
  async deleteResourceInstanceLabelWithOptions(ClusterId: string, ResourceId: string, tmpReq: $_model.DeleteResourceInstanceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceInstanceLabelResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteResourceInstanceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allInstances)) {
      query["AllInstances"] = request.allInstances;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceInstanceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/label`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceInstanceLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceInstanceLabelResponse({}));
  }

  /**
   * Deletes the tags of an instance in a resource group.
   * 
   * @param request - DeleteResourceInstanceLabelRequest
   * @returns DeleteResourceInstanceLabelResponse
   */
  async deleteResourceInstanceLabel(ClusterId: string, ResourceId: string, request: $_model.DeleteResourceInstanceLabelRequest): Promise<$_model.DeleteResourceInstanceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstanceLabelWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceInstancesResponse
   */
  async deleteResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: $_model.DeleteResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allFailed)) {
      query["AllFailed"] = request.allFailed;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceInstancesResponse({}));
  }

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @returns DeleteResourceInstancesResponse
   */
  async deleteResourceInstances(ClusterId: string, ResourceId: string, request: $_model.DeleteResourceInstancesRequest): Promise<$_model.DeleteResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceLogResponse
   */
  async deleteResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceLogResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceLogResponse({}));
  }

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * @returns DeleteResourceLogResponse
   */
  async deleteResourceLog(ClusterId: string, ResourceId: string): Promise<$_model.DeleteResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceResponse({}));
  }

  /**
   * Deletes a service.
   * @returns DeleteServiceResponse
   */
  async deleteService(ClusterId: string, ServiceName: string): Promise<$_model.DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceAutoScalerResponse
   */
  async deleteServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceAutoScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceAutoScalerResponse({}));
  }

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * @returns DeleteServiceAutoScalerResponse
   */
  async deleteServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<$_model.DeleteServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Disables the Cronscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceCronScalerResponse
   */
  async deleteServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceCronScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceCronScalerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceCronScalerResponse({}));
  }

  /**
   * Disables the Cronscaler feature for a service.
   * @returns DeleteServiceCronScalerResponse
   */
  async deleteServiceCronScaler(ClusterId: string, ServiceName: string): Promise<$_model.DeleteServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: $_model.DeleteServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.softRestart)) {
      query["SoftRestart"] = request.softRestart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceInstancesResponse({}));
  }

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(ClusterId: string, ServiceName: string, request: $_model.DeleteServiceInstancesRequest): Promise<$_model.DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Deletes existing service tags.
   * 
   * @param tmpReq - DeleteServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceLabelResponse
   */
  async deleteServiceLabelWithOptions(ClusterId: string, ServiceName: string, tmpReq: $_model.DeleteServiceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceLabelResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteServiceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/label`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceLabelResponse({}));
  }

  /**
   * Deletes existing service tags.
   * 
   * @param request - DeleteServiceLabelRequest
   * @returns DeleteServiceLabelResponse
   */
  async deleteServiceLabel(ClusterId: string, ServiceName: string, request: $_model.DeleteServiceLabelRequest): Promise<$_model.DeleteServiceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Disables the traffic mirroring feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceMirrorResponse
   */
  async deleteServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceMirrorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceMirrorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceMirrorResponse({}));
  }

  /**
   * Disables the traffic mirroring feature for a service.
   * @returns DeleteServiceMirrorResponse
   */
  async deleteServiceMirror(ClusterId: string, ServiceName: string): Promise<$_model.DeleteServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Deletes a virtual resource group that contains no resources or instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualResourceResponse
   */
  async deleteVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVirtualResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVirtualResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVirtualResourceResponse({}));
  }

  /**
   * Deletes a virtual resource group that contains no resources or instances.
   * @returns DeleteVirtualResourceResponse
   */
  async deleteVirtualResource(ClusterId: string, VirtualResourceId: string): Promise<$_model.DeleteVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVirtualResourceWithOptions(ClusterId, VirtualResourceId, headers, runtime);
  }

  /**
   * Queries details about the configurations of a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskResponse
   */
  async describeBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBenchmarkTaskResponse({}));
  }

  /**
   * Queries details about the configurations of a stress testing task.
   * @returns DescribeBenchmarkTaskResponse
   */
  async describeBenchmarkTask(ClusterId: string, TaskName: string): Promise<$_model.DescribeBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskReportResponse
   */
  async describeBenchmarkTaskReportWithOptions(ClusterId: string, TaskName: string, request: $_model.DescribeBenchmarkTaskReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBenchmarkTaskReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBenchmarkTaskReport",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBenchmarkTaskReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBenchmarkTaskReportResponse({}));
  }

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @returns DescribeBenchmarkTaskReportResponse
   */
  async describeBenchmarkTaskReport(ClusterId: string, TaskName: string, request: $_model.DescribeBenchmarkTaskReportRequest): Promise<$_model.DescribeBenchmarkTaskReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskReportWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Queries the details of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGatewayResponse
   */
  async describeGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGatewayResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGatewayResponse({}));
  }

  /**
   * Queries the details of a private gateway.
   * @returns DescribeGatewayResponse
   */
  async describeGateway(ClusterId: string, GatewayId: string): Promise<$_model.DescribeGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries the information about a service group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupResponse
   */
  async describeGroupWithOptions(ClusterId: string, GroupName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroup",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GroupName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupResponse({}));
  }

  /**
   * Queries the information about a service group.
   * @returns DescribeGroupResponse
   */
  async describeGroup(ClusterId: string, GroupName: string): Promise<$_model.DescribeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupWithOptions(ClusterId, GroupName, headers, runtime);
  }

  /**
   * Obtains a list of endpoints of service groups.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupEndpointsResponse
   */
  async describeGroupEndpointsWithOptions(ClusterId: string, GroupName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGroupEndpointsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupEndpoints",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GroupName)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGroupEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGroupEndpointsResponse({}));
  }

  /**
   * Obtains a list of endpoints of service groups.
   * @returns DescribeGroupEndpointsResponse
   */
  async describeGroupEndpoints(ClusterId: string, GroupName: string): Promise<$_model.DescribeGroupEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupEndpointsWithOptions(ClusterId, GroupName, headers, runtime);
  }

  /**
   * Queries a list of instance types for an available instance in a shared resource group.
   * 
   * @param tmpReq - DescribeMachineSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMachineSpecResponse
   */
  async describeMachineSpecWithOptions(tmpReq: $_model.DescribeMachineSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMachineSpecResponse> {
    tmpReq.validate();
    let request = new $_model.DescribeMachineSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceTypes)) {
      request.instanceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceTypes, "InstanceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceTypesShrink)) {
      query["InstanceTypes"] = request.instanceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMachineSpec",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/public/instance_types`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMachineSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMachineSpecResponse({}));
  }

  /**
   * Queries a list of instance types for an available instance in a shared resource group.
   * 
   * @param request - DescribeMachineSpecRequest
   * @returns DescribeMachineSpecResponse
   */
  async describeMachineSpec(request: $_model.DescribeMachineSpecRequest): Promise<$_model.DescribeMachineSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMachineSpecWithOptions(request, headers, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * Queries the information about a resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceResponse
   */
  async describeResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceResponse({}));
  }

  /**
   * Queries the information about a resource group.
   * @returns DescribeResourceResponse
   */
  async describeResource(ClusterId: string, ResourceId: string): Promise<$_model.DescribeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceDLinkResponse
   */
  async describeResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceDLinkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceDLinkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceDLinkResponse({}));
  }

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * @returns DescribeResourceDLinkResponse
   */
  async describeResourceDLink(ClusterId: string, ResourceId: string): Promise<$_model.DescribeResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogResponse
   */
  async describeResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceLogResponse({}));
  }

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * @returns DescribeResourceLogResponse
   */
  async describeResourceLog(ClusterId: string, ResourceId: string): Promise<$_model.DescribeResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceResponse
   */
  async describeServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceResponse({}));
  }

  /**
   * Queries the details about a service.
   * @returns DescribeServiceResponse
   */
  async describeService(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about the Autoscaler configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceAutoScalerResponse
   */
  async describeServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceAutoScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceAutoScalerResponse({}));
  }

  /**
   * Queries information about the Autoscaler configurations of a service.
   * @returns DescribeServiceAutoScalerResponse
   */
  async describeServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceCronScalerResponse
   */
  async describeServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceCronScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceCronScalerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceCronScalerResponse({}));
  }

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * @returns DescribeServiceCronScalerResponse
   */
  async describeServiceCronScaler(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the diagnostics details of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceDiagnosisResponse
   */
  async describeServiceDiagnosisWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceDiagnosisResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceDiagnosisResponse({}));
  }

  /**
   * Queries the diagnostics details of a service.
   * @returns DescribeServiceDiagnosisResponse
   */
  async describeServiceDiagnosis(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceDiagnosisWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Obtains a list of service endpoints.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceEndpointsResponse
   */
  async describeServiceEndpointsWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceEndpointsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceEndpoints",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceEndpointsResponse({}));
  }

  /**
   * Obtains a list of service endpoints.
   * @returns DescribeServiceEndpointsResponse
   */
  async describeServiceEndpoints(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEndpointsWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceEventResponse
   */
  async describeServiceEventWithOptions(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceEventResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceEvent",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceEventResponse({}));
  }

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @returns DescribeServiceEventResponse
   */
  async describeServiceEvent(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceEventRequest): Promise<$_model.DescribeServiceEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEventWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
  async describeServiceInstanceDiagnosisWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceInstanceDiagnosisResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceInstanceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceInstanceDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceInstanceDiagnosisResponse({}));
  }

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
  async describeServiceInstanceDiagnosis(ClusterId: string, ServiceName: string, InstanceName: string): Promise<$_model.DescribeServiceInstanceDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceInstanceDiagnosisWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLogResponse
   */
  async describeServiceLogWithOptions(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.previous)) {
      query["Previous"] = request.previous;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceLogResponse({}));
  }

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @returns DescribeServiceLogResponse
   */
  async describeServiceLog(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceLogRequest): Promise<$_model.DescribeServiceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceLogWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries details about the traffic mirroring settings of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMirrorResponse
   */
  async describeServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMirrorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMirrorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMirrorResponse({}));
  }

  /**
   * Queries details about the traffic mirroring settings of a service.
   * @returns DescribeServiceMirrorResponse
   */
  async describeServiceMirror(ClusterId: string, ServiceName: string): Promise<$_model.DescribeServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Obtains the logon-free URL of the service.
   * 
   * @param request - DescribeServiceSignedUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceSignedUrlResponse
   */
  async describeServiceSignedUrlWithOptions(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceSignedUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceSignedUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.internal)) {
      query["Internal"] = request.internal;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceSignedUrl",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/signed_url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceSignedUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceSignedUrlResponse({}));
  }

  /**
   * Obtains the logon-free URL of the service.
   * 
   * @param request - DescribeServiceSignedUrlRequest
   * @returns DescribeServiceSignedUrlResponse
   */
  async describeServiceSignedUrl(ClusterId: string, ServiceName: string, request: $_model.DescribeServiceSignedUrlRequest): Promise<$_model.DescribeServiceSignedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceSignedUrlWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistoryWithOptions(request: $_model.DescribeSpotDiscountHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSpotDiscountHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isProtect)) {
      query["IsProtect"] = request.isProtect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSpotDiscountHistory",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/public/spot_discount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSpotDiscountHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSpotDiscountHistoryResponse({}));
  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistory(request: $_model.DescribeSpotDiscountHistoryRequest): Promise<$_model.DescribeSpotDiscountHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSpotDiscountHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Views the details of a virtual resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualResourceResponse
   */
  async describeVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVirtualResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVirtualResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVirtualResourceResponse({}));
  }

  /**
   * Views the details of a virtual resource group.
   * @returns DescribeVirtualResourceResponse
   */
  async describeVirtualResource(ClusterId: string, VirtualResourceId: string): Promise<$_model.DescribeVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeVirtualResourceWithOptions(ClusterId, VirtualResourceId, headers, runtime);
  }

  /**
   * Unbinds a custom domain name from a private gateway.
   * 
   * @param tmpReq - DetachGatewayDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGatewayDomainResponse
   */
  async detachGatewayDomainWithOptions(ClusterId: string, GatewayId: string, tmpReq: $_model.DetachGatewayDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DetachGatewayDomainResponse> {
    tmpReq.validate();
    let request = new $_model.DetachGatewayDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customDomain)) {
      request.customDomainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customDomain, "CustomDomain", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customDomainShrink)) {
      query["CustomDomain"] = request.customDomainShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachGatewayDomain",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domain/detach`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachGatewayDomainResponse>(await this.callApi(params, req, runtime), new $_model.DetachGatewayDomainResponse({}));
  }

  /**
   * Unbinds a custom domain name from a private gateway.
   * 
   * @param request - DetachGatewayDomainRequest
   * @returns DetachGatewayDomainResponse
   */
  async detachGatewayDomain(ClusterId: string, GatewayId: string, request: $_model.DetachGatewayDomainRequest): Promise<$_model.DetachGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detachGatewayDomainWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DevelopServiceResponse
   */
  async developServiceWithOptions(ClusterId: string, ServiceName: string, request: $_model.DevelopServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DevelopServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exit)) {
      query["Exit"] = request.exit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DevelopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/develop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DevelopServiceResponse>(await this.callApi(params, req, runtime), new $_model.DevelopServiceResponse({}));
  }

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @returns DevelopServiceResponse
   */
  async developService(ClusterId: string, ServiceName: string, request: $_model.DevelopServiceRequest): Promise<$_model.DevelopServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.developServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclPolicyResponse
   */
  async listAclPolicyWithOptions(ClusterId: string, GatewayId: string, request: $_model.ListAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAclPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAclPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ListAclPolicyResponse({}));
  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @returns ListAclPolicyResponse
   */
  async listAclPolicy(ClusterId: string, GatewayId: string, request: $_model.ListAclPolicyRequest): Promise<$_model.ListAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBenchmarkTaskResponse
   */
  async listBenchmarkTaskWithOptions(request: $_model.ListBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBenchmarkTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListBenchmarkTaskResponse({}));
  }

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @returns ListBenchmarkTaskResponse
   */
  async listBenchmarkTask(request: $_model.ListBenchmarkTaskRequest): Promise<$_model.ListBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayResponse
   */
  async listGatewayWithOptions(request: $_model.ListGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayName)) {
      query["GatewayName"] = request.gatewayName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayResponse({}));
  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @returns ListGatewayResponse
   */
  async listGateway(request: $_model.ListGatewayRequest): Promise<$_model.ListGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of custom domain names of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayDomainsResponse
   */
  async listGatewayDomainsWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayDomainsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayDomains",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayDomainsResponse({}));
  }

  /**
   * Queries a list of custom domain names of a private gateway.
   * @returns ListGatewayDomainsResponse
   */
  async listGatewayDomains(ClusterId: string, GatewayId: string): Promise<$_model.ListGatewayDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayDomainsWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
  async listGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayIntranetLinkedVpcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayIntranetLinkedVpcResponse({}));
  }

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
  async listGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string): Promise<$_model.ListGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Obtains a list of all VPC peering connections on internal endpoint of a gateway.
   * 
   * @param request - ListGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetLinkedVpcPeerResponse
   */
  async listGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, request: $_model.ListGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayIntranetLinkedVpcPeerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayIntranetLinkedVpcPeerResponse({}));
  }

  /**
   * Obtains a list of all VPC peering connections on internal endpoint of a gateway.
   * 
   * @param request - ListGatewayIntranetLinkedVpcPeerRequest
   * @returns ListGatewayIntranetLinkedVpcPeerResponse
   */
  async listGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: $_model.ListGatewayIntranetLinkedVpcPeerRequest): Promise<$_model.ListGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Obtains the zones supported by a gateway within an intranet.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetSupportedZoneResponse
   */
  async listGatewayIntranetSupportedZoneWithOptions(GatewayId: string, ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGatewayIntranetSupportedZoneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetSupportedZone",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_supported_zone`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGatewayIntranetSupportedZoneResponse>(await this.callApi(params, req, runtime), new $_model.ListGatewayIntranetSupportedZoneResponse({}));
  }

  /**
   * Obtains the zones supported by a gateway within an intranet.
   * @returns ListGatewayIntranetSupportedZoneResponse
   */
  async listGatewayIntranetSupportedZone(GatewayId: string, ClusterId: string): Promise<$_model.ListGatewayIntranetSupportedZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetSupportedZoneWithOptions(GatewayId, ClusterId, headers, runtime);
  }

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: $_model.ListGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupsResponse({}));
  }

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: $_model.ListGroupsRequest): Promise<$_model.ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstanceWorkerResponse
   */
  async listResourceInstanceWorkerWithOptions(ClusterId: string, ResourceId: string, InstanceName: string, request: $_model.ListResourceInstanceWorkerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceInstanceWorkerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workerName)) {
      query["WorkerName"] = request.workerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceInstanceWorker",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instance/${$dara.URL.percentEncode(InstanceName)}/workers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceInstanceWorkerResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceInstanceWorkerResponse({}));
  }

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @returns ListResourceInstanceWorkerResponse
   */
  async listResourceInstanceWorker(ClusterId: string, ResourceId: string, InstanceName: string, request: $_model.ListResourceInstanceWorkerRequest): Promise<$_model.ListResourceInstanceWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstanceWorkerWithOptions(ClusterId, ResourceId, InstanceName, request, headers, runtime);
  }

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param tmpReq - ListResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstancesResponse
   */
  async listResourceInstancesWithOptions(ClusterId: string, ResourceId: string, tmpReq: $_model.ListResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.label)) {
      request.labelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.label, "Label", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.labelShrink)) {
      query["Label"] = request.labelShrink;
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

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceInstancesResponse({}));
  }

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param request - ListResourceInstancesRequest
   * @returns ListResourceInstancesResponse
   */
  async listResourceInstances(ClusterId: string, ResourceId: string, request: $_model.ListResourceInstancesRequest): Promise<$_model.ListResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceServicesResponse
   */
  // Deprecated
  async listResourceServicesWithOptions(ClusterId: string, ResourceId: string, request: $_model.ListResourceServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceServicesResponse({}));
  }

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @returns ListResourceServicesResponse
   */
  // Deprecated
  async listResourceServices(ClusterId: string, ResourceId: string, request: $_model.ListResourceServicesRequest): Promise<$_model.ListResourceServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceServicesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the containers of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceContainersResponse
   */
  async listServiceContainersWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceContainersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceContainers",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}/containers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceContainersResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceContainersResponse({}));
  }

  /**
   * Queries the containers of a service.
   * @returns ListServiceContainersResponse
   */
  async listServiceContainers(ClusterId: string, ServiceName: string, InstanceName: string): Promise<$_model.ListServiceContainersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceContainersWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: $_model.ListServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.hostIP)) {
      query["HostIP"] = request.hostIP;
    }

    if (!$dara.isNull(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isSpot)) {
      query["IsSpot"] = request.isSpot;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceInstancesResponse({}));
  }

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(ClusterId: string, ServiceName: string, request: $_model.ListServiceInstancesRequest): Promise<$_model.ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceVersionsResponse
   */
  async listServiceVersionsWithOptions(ClusterId: string, ServiceName: string, request: $_model.ListServiceVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceVersions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceVersionsResponse({}));
  }

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @returns ListServiceVersionsResponse
   */
  async listServiceVersions(ClusterId: string, ServiceName: string, request: $_model.ListServiceVersionsRequest): Promise<$_model.ListServiceVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceVersionsWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Lists services.
   * 
   * @param tmpReq - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(tmpReq: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    tmpReq.validate();
    let request = new $_model.ListServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.label)) {
      request.labelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.label, "Label", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoscalerEnabled)) {
      query["AutoscalerEnabled"] = request.autoscalerEnabled;
    }

    if (!$dara.isNull(request.cronscalerEnabled)) {
      query["CronscalerEnabled"] = request.cronscalerEnabled;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.includeNoWorkspace)) {
      query["IncludeNoWorkspace"] = request.includeNoWorkspace;
    }

    if (!$dara.isNull(request.labelShrink)) {
      query["Label"] = request.labelShrink;
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

    if (!$dara.isNull(request.parentServiceUid)) {
      query["ParentServiceUid"] = request.parentServiceUid;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.resourceAliasName)) {
      query["ResourceAliasName"] = request.resourceAliasName;
    }

    if (!$dara.isNull(request.resourceBurstable)) {
      query["ResourceBurstable"] = request.resourceBurstable;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceUid)) {
      query["ServiceUid"] = request.serviceUid;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * Lists services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of tenant plug-ins.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddonsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantAddonsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantAddons",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantAddonsResponse({}));
  }

  /**
   * Queries a list of tenant plug-ins.
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddons(): Promise<$_model.ListTenantAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantAddonsWithOptions(headers, runtime);
  }

  /**
   * Queries a list of virtual resource groups for the current user.
   * 
   * @param request - ListVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualResourceResponse
   */
  async listVirtualResourceWithOptions(request: $_model.ListVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVirtualResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.virtualResourceId)) {
      query["VirtualResourceId"] = request.virtualResourceId;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      query["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVirtualResourceResponse>(await this.callApi(params, req, runtime), new $_model.ListVirtualResourceResponse({}));
  }

  /**
   * Queries a list of virtual resource groups for the current user.
   * 
   * @param request - ListVirtualResourceRequest
   * @returns ListVirtualResourceResponse
   */
  async listVirtualResource(request: $_model.ListVirtualResourceRequest): Promise<$_model.ListVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVirtualResourceWithOptions(request, headers, runtime);
  }

  /**
   * Resets tenant configurations.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddonWithOptions(ClusterId: string, TenantAddonName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReinstallTenantAddonResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinstallTenantAddon",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TenantAddonName)}/reinstall`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReinstallTenantAddonResponse>(await this.callApi(params, req, runtime), new $_model.ReinstallTenantAddonResponse({}));
  }

  /**
   * Resets tenant configurations.
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddon(ClusterId: string, TenantAddonName: string): Promise<$_model.ReinstallTenantAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reinstallTenantAddonWithOptions(ClusterId, TenantAddonName, headers, runtime);
  }

  /**
   * Switch the traffic state or weight of the service.
   * 
   * @param request - ReleaseServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseServiceResponse
   */
  async releaseServiceWithOptions(ClusterId: string, ServiceName: string, request: $_model.ReleaseServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.trafficState)) {
      body["TrafficState"] = request.trafficState;
    }

    if (!$dara.isNull(request.weight)) {
      body["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/release`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseServiceResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseServiceResponse({}));
  }

  /**
   * Switch the traffic state or weight of the service.
   * 
   * @param request - ReleaseServiceRequest
   * @returns ReleaseServiceResponse
   */
  async releaseService(ClusterId: string, ServiceName: string, request: $_model.ReleaseServiceRequest): Promise<$_model.ReleaseServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Restarts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceResponse
   */
  async restartServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/restart`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartServiceResponse>(await this.callApi(params, req, runtime), new $_model.RestartServiceResponse({}));
  }

  /**
   * Restarts a service.
   * @returns RestartServiceResponse
   */
  async restartService(ClusterId: string, ServiceName: string): Promise<$_model.RestartServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Starts a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBenchmarkTaskResponse
   */
  async startBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartBenchmarkTaskResponse({}));
  }

  /**
   * Starts a stress testing task.
   * @returns StartBenchmarkTaskResponse
   */
  async startBenchmarkTask(ClusterId: string, TaskName: string): Promise<$_model.StartBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Starts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceResponse
   */
  async startServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartServiceResponse>(await this.callApi(params, req, runtime), new $_model.StartServiceResponse({}));
  }

  /**
   * Starts a service.
   * @returns StartServiceResponse
   */
  async startService(ClusterId: string, ServiceName: string): Promise<$_model.StartServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Stops a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBenchmarkTaskResponse
   */
  async stopBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopBenchmarkTaskResponse({}));
  }

  /**
   * Stops a stress testing task.
   * @returns StopBenchmarkTaskResponse
   */
  async stopBenchmarkTask(ClusterId: string, TaskName: string): Promise<$_model.StopBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Stops a running service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceResponse
   */
  async stopServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopServiceResponse>(await this.callApi(params, req, runtime), new $_model.StopServiceResponse({}));
  }

  /**
   * Stops a running service.
   * @returns StopServiceResponse
   */
  async stopService(ClusterId: string, ServiceName: string): Promise<$_model.StopServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppServiceResponse
   */
  async updateAppServiceWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateAppServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppServiceResponse({}));
  }

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @returns UpdateAppServiceResponse
   */
  async updateAppService(ClusterId: string, ServiceName: string, request: $_model.UpdateAppServiceRequest): Promise<$_model.UpdateAppServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBenchmarkTaskResponse
   */
  async updateBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, request: $_model.UpdateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBenchmarkTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBenchmarkTaskResponse({}));
  }

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @returns UpdateBenchmarkTaskResponse
   */
  async updateBenchmarkTask(ClusterId: string, TaskName: string, request: $_model.UpdateBenchmarkTaskRequest): Promise<$_model.UpdateBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBenchmarkTaskWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayResponse
   */
  async updateGatewayWithOptions(GatewayId: string, ClusterId: string, request: $_model.UpdateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!$dara.isNull(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!$dara.isNull(request.enableSSLRedirection)) {
      body["EnableSSLRedirection"] = request.enableSSLRedirection;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGatewayResponse({}));
  }

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @returns UpdateGatewayResponse
   */
  async updateGateway(GatewayId: string, ClusterId: string, request: $_model.UpdateGatewayRequest): Promise<$_model.UpdateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayWithOptions(GatewayId, ClusterId, request, headers, runtime);
  }

  /**
   * Updates the specific fields of a service group.
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(ClusterId: string, GroupName: string, request: $_model.UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.trafficMode)) {
      body["TrafficMode"] = request.trafficMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GroupName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * Updates the specific fields of a service group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(ClusterId: string, GroupName: string, request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(ClusterId, GroupName, request, headers, runtime);
  }

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(ClusterId: string, ResourceId: string, request: $_model.UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceResponse({}));
  }

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(ClusterId: string, ResourceId: string, request: $_model.UpdateResourceRequest): Promise<$_model.UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceDLinkResponse
   */
  async updateResourceDLinkWithOptions(ClusterId: string, ResourceId: string, request: $_model.UpdateResourceDLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceDLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCIDRs)) {
      body["DestinationCIDRs"] = request.destinationCIDRs;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIdList)) {
      body["VSwitchIdList"] = request.vSwitchIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceDLinkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceDLinkResponse({}));
  }

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @returns UpdateResourceDLinkResponse
   */
  async updateResourceDLink(ClusterId: string, ResourceId: string, request: $_model.UpdateResourceDLinkRequest): Promise<$_model.UpdateResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceDLinkWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceInstanceResponse
   */
  async updateResourceInstanceWithOptions(ClusterId: string, ResourceId: string, InstanceId: string, request: $_model.UpdateResourceInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["Action"] = request.action;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceInstanceResponse({}));
  }

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @returns UpdateResourceInstanceResponse
   */
  async updateResourceInstance(ClusterId: string, ResourceId: string, InstanceId: string, request: $_model.UpdateResourceInstanceRequest): Promise<$_model.UpdateResourceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceWithOptions(ClusterId, ResourceId, InstanceId, request, headers, runtime);
  }

  /**
   * Updates the tag of an instance in a resource group.
   * 
   * @param tmpReq - UpdateResourceInstanceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceInstanceLabelResponse
   */
  async updateResourceInstanceLabelWithOptions(ClusterId: string, ResourceId: string, tmpReq: $_model.UpdateResourceInstanceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceInstanceLabelResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateResourceInstanceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allInstances)) {
      query["AllInstances"] = request.allInstances;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceInstanceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/label`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceInstanceLabelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceInstanceLabelResponse({}));
  }

  /**
   * Updates the tag of an instance in a resource group.
   * 
   * @param request - UpdateResourceInstanceLabelRequest
   * @returns UpdateResourceInstanceLabelResponse
   */
  async updateResourceInstanceLabel(ClusterId: string, ResourceId: string, request: $_model.UpdateResourceInstanceLabelRequest): Promise<$_model.UpdateResourceInstanceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceLabelWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceResponse({}));
  }

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceRequest): Promise<$_model.UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceAutoScalerResponse
   */
  async updateServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceAutoScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!$dara.isNull(request.max)) {
      body["max"] = request.max;
    }

    if (!$dara.isNull(request.min)) {
      body["min"] = request.min;
    }

    if (!$dara.isNull(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceAutoScalerResponse({}));
  }

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @returns UpdateServiceAutoScalerResponse
   */
  async updateServiceAutoScaler(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceAutoScalerRequest): Promise<$_model.UpdateServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceCronScalerResponse
   */
  async updateServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceCronScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!$dara.isNull(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceCronScalerResponse({}));
  }

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @returns UpdateServiceCronScalerResponse
   */
  async updateServiceCronScaler(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceCronScalerRequest): Promise<$_model.UpdateServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceResponse
   */
  async updateServiceInstanceWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, request: $_model.UpdateServiceInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isolate)) {
      body["Isolate"] = request.isolate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceInstanceResponse({}));
  }

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @returns UpdateServiceInstanceResponse
   */
  async updateServiceInstance(ClusterId: string, ServiceName: string, InstanceName: string, request: $_model.UpdateServiceInstanceRequest): Promise<$_model.UpdateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceInstanceWithOptions(ClusterId, ServiceName, InstanceName, request, headers, runtime);
  }

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceLabelResponse
   */
  async updateServiceLabelWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/label`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceLabelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceLabelResponse({}));
  }

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @returns UpdateServiceLabelResponse
   */
  async updateServiceLabel(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceLabelRequest): Promise<$_model.UpdateServiceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceMirrorResponse
   */
  async updateServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceMirrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceMirrorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceMirrorResponse({}));
  }

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @returns UpdateServiceMirrorResponse
   */
  async updateServiceMirror(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceMirrorRequest): Promise<$_model.UpdateServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceSafetyLockResponse
   */
  async updateServiceSafetyLockWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceSafetyLockRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceSafetyLockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lock)) {
      body["Lock"] = request.lock;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceSafetyLock",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/lock`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceSafetyLockResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceSafetyLockResponse({}));
  }

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @returns UpdateServiceSafetyLockResponse
   */
  async updateServiceSafetyLock(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceSafetyLockRequest): Promise<$_model.UpdateServiceSafetyLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceSafetyLockWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersionWithOptions(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceVersion",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceVersionResponse({}));
  }

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersion(ClusterId: string, ServiceName: string, request: $_model.UpdateServiceVersionRequest): Promise<$_model.UpdateServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the information about a virtual resource group.
   * 
   * @param request - UpdateVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVirtualResourceResponse
   */
  async updateVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, request: $_model.UpdateVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVirtualResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disableSpotProtectionPeriod)) {
      body["DisableSpotProtectionPeriod"] = request.disableSpotProtectionPeriod;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      body["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVirtualResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVirtualResourceResponse({}));
  }

  /**
   * Updates the information about a virtual resource group.
   * 
   * @param request - UpdateVirtualResourceRequest
   * @returns UpdateVirtualResourceResponse
   */
  async updateVirtualResource(ClusterId: string, VirtualResourceId: string, request: $_model.UpdateVirtualResourceRequest): Promise<$_model.UpdateVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVirtualResourceWithOptions(ClusterId, VirtualResourceId, request, headers, runtime);
  }

}
