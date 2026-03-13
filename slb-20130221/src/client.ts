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
      'cn-qingdao': "slb.aliyuncs.com",
      'cn-beijing': "slb.aliyuncs.com",
      'cn-hangzhou': "slb.aliyuncs.com",
      'cn-shanghai': "slb.aliyuncs.com",
      'cn-shenzhen': "slb.aliyuncs.com",
      'cn-hongkong': "slb.aliyuncs.com",
      'ap-southeast-1': "slb.aliyuncs.com",
      'us-east-1': "slb.aliyuncs.com",
      'us-west-1': "slb.aliyuncs.com",
      'cn-shanghai-finance-1': "slb.aliyuncs.com",
      'cn-shenzhen-finance-1': "slb.aliyuncs.com",
      'cn-north-2-gov-1': "slb.aliyuncs.com",
      'ap-northeast-2-pop': "slb.aliyuncs.com",
      'cn-beijing-finance-pop': "slb.aliyuncs.com",
      'cn-beijing-gov-1': "slb.aliyuncs.com",
      'cn-beijing-nu16-b01': "slb.aliyuncs.com",
      'cn-edge-1': "slb.aliyuncs.com",
      'cn-fujian': "slb.aliyuncs.com",
      'cn-haidian-cm12-c01': "slb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "slb.aliyuncs.com",
      'cn-hangzhou-finance': "slb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "slb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "slb.aliyuncs.com",
      'cn-hangzhou-test-306': "slb.aliyuncs.com",
      'cn-hongkong-finance-pop': "slb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "slb-api.cn-qingdao-nebula.aliyuncs.com",
      'cn-shanghai-et15-b01': "slb.aliyuncs.com",
      'cn-shanghai-et2-b01': "slb.aliyuncs.com",
      'cn-shanghai-inner': "slb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "slb.aliyuncs.com",
      'cn-shenzhen-inner': "slb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "slb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "slb.aliyuncs.com",
      'cn-wuhan': "slb.aliyuncs.com",
      'cn-yushanfang': "slb.aliyuncs.com",
      'cn-zhangbei': "slb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "slb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "slb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "slb.aliyuncs.com",
      'eu-west-1-oxs': "slb.aliyuncs.com",
      'rus-west-1-pop': "slb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("slb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加后端服务器
   * 
   * @param request - AddBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddBackendServersResponse
   */
  async addBackendServersWithOptions(request: $_model.AddBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddBackendServers",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.AddBackendServersResponse({}));
  }

  /**
   * 添加后端服务器
   * 
   * @param request - AddBackendServersRequest
   * @returns AddBackendServersResponse
   */
  async addBackendServers(request: $_model.AddBackendServersRequest): Promise<$_model.AddBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addBackendServersWithOptions(request, runtime);
  }

  /**
   * 创建实例
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: $_model.CreateLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.isPublicAddress)) {
      query["IsPublicAddress"] = request.isPublicAddress;
    }

    if (!$dara.isNull(request.loadBalancerMode)) {
      query["LoadBalancerMode"] = request.loadBalancerMode;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancer",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerResponse({}));
  }

  /**
   * 创建实例
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: $_model.CreateLoadBalancerRequest): Promise<$_model.CreateLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * 创建HTTP监听
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListenerWithOptions(request: $_model.CreateLoadBalancerHTTPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerHTTPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerStatus)) {
      query["ListenerStatus"] = request.listenerStatus;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerHTTPListener",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerHTTPListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerHTTPListenerResponse({}));
  }

  /**
   * 创建HTTP监听
   * 
   * @param request - CreateLoadBalancerHTTPListenerRequest
   * @returns CreateLoadBalancerHTTPListenerResponse
   */
  async createLoadBalancerHTTPListener(request: $_model.CreateLoadBalancerHTTPListenerRequest): Promise<$_model.CreateLoadBalancerHTTPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerHTTPListenerWithOptions(request, runtime);
  }

  /**
   * 创建TCP监听
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListenerWithOptions(request: $_model.CreateLoadBalancerTCPListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServerPort)) {
      query["BackendServerPort"] = request.backendServerPort;
    }

    if (!$dara.isNull(request.bandwidth)) {
      query["Bandwidth"] = request.bandwidth;
    }

    if (!$dara.isNull(request.connectPort)) {
      query["ConnectPort"] = request.connectPort;
    }

    if (!$dara.isNull(request.connectTimeout)) {
      query["ConnectTimeout"] = request.connectTimeout;
    }

    if (!$dara.isNull(request.establishedTimeout)) {
      query["EstablishedTimeout"] = request.establishedTimeout;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckDomain)) {
      query["HealthCheckDomain"] = request.healthCheckDomain;
    }

    if (!$dara.isNull(request.healthCheckHttpCode)) {
      query["HealthCheckHttpCode"] = request.healthCheckHttpCode;
    }

    if (!$dara.isNull(request.healthCheckType)) {
      query["HealthCheckType"] = request.healthCheckType;
    }

    if (!$dara.isNull(request.healthCheckURI)) {
      query["HealthCheckURI"] = request.healthCheckURI;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerStatus)) {
      query["ListenerStatus"] = request.listenerStatus;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.masterSlaveServerGroupId)) {
      query["MasterSlaveServerGroupId"] = request.masterSlaveServerGroupId;
    }

    if (!$dara.isNull(request.maxConnection)) {
      query["MaxConnection"] = request.maxConnection;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.VServerGroupId)) {
      query["VServerGroupId"] = request.VServerGroupId;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLoadBalancerTCPListener",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLoadBalancerTCPListenerResponse>(await this.callApi(params, req, runtime), new $_model.CreateLoadBalancerTCPListenerResponse({}));
  }

  /**
   * 创建TCP监听
   * 
   * @param request - CreateLoadBalancerTCPListenerRequest
   * @returns CreateLoadBalancerTCPListenerResponse
   */
  async createLoadBalancerTCPListener(request: $_model.CreateLoadBalancerTCPListenerRequest): Promise<$_model.CreateLoadBalancerTCPListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLoadBalancerTCPListenerWithOptions(request, runtime);
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: $_model.DeleteLoadBalancerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancer",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoadBalancerResponse({}));
  }

  /**
   * 删除实例
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: $_model.DeleteLoadBalancerRequest): Promise<$_model.DeleteLoadBalancerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * 删除监听
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListenerWithOptions(request: $_model.DeleteLoadBalancerListenerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLoadBalancerListenerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLoadBalancerListener",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLoadBalancerListenerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLoadBalancerListenerResponse({}));
  }

  /**
   * 删除监听
   * 
   * @param request - DeleteLoadBalancerListenerRequest
   * @returns DeleteLoadBalancerListenerResponse
   */
  async deleteLoadBalancerListener(request: $_model.DeleteLoadBalancerListenerRequest): Promise<$_model.DeleteLoadBalancerListenerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLoadBalancerListenerWithOptions(request, runtime);
  }

  /**
   * 查询后端服务器
   * 
   * @param request - DescribeBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackendServersResponse
   */
  async describeBackendServersWithOptions(request: $_model.DescribeBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackendServers",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackendServersResponse({}));
  }

  /**
   * 查询后端服务器
   * 
   * @param request - DescribeBackendServersRequest
   * @returns DescribeBackendServersResponse
   */
  async describeBackendServers(request: $_model.DescribeBackendServersRequest): Promise<$_model.DescribeBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackendServersWithOptions(request, runtime);
  }

  /**
   * 查询实例信息
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttributeWithOptions(request: $_model.DescribeLoadBalancerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerAttribute",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerAttributeResponse({}));
  }

  /**
   * 查询实例信息
   * 
   * @param request - DescribeLoadBalancerAttributeRequest
   * @returns DescribeLoadBalancerAttributeResponse
   */
  async describeLoadBalancerAttribute(request: $_model.DescribeLoadBalancerAttributeRequest): Promise<$_model.DescribeLoadBalancerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * 查询HTTP监听配置
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerHTTPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerHTTPListenerAttribute",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * 查询HTTP监听配置
   * 
   * @param request - DescribeLoadBalancerHTTPListenerAttributeRequest
   * @returns DescribeLoadBalancerHTTPListenerAttributeResponse
   */
  async describeLoadBalancerHTTPListenerAttribute(request: $_model.DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * 查询TCP监听配置
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttributeWithOptions(request: $_model.DescribeLoadBalancerTCPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancerTCPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancerTCPListenerAttribute",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * 查询TCP监听配置
   * 
   * @param request - DescribeLoadBalancerTCPListenerAttributeRequest
   * @returns DescribeLoadBalancerTCPListenerAttributeResponse
   */
  async describeLoadBalancerTCPListenerAttribute(request: $_model.DescribeLoadBalancerTCPListenerAttributeRequest): Promise<$_model.DescribeLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * slb实例批量查询
   * 
   * @param request - DescribeLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancersWithOptions(request: $_model.DescribeLoadBalancersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadBalancersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.address)) {
      query["Address"] = request.address;
    }

    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.internetChargeType)) {
      query["InternetChargeType"] = request.internetChargeType;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.masterZoneId)) {
      query["MasterZoneId"] = request.masterZoneId;
    }

    if (!$dara.isNull(request.networkType)) {
      query["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serverId)) {
      query["ServerId"] = request.serverId;
    }

    if (!$dara.isNull(request.serverIntranetAddress)) {
      query["ServerIntranetAddress"] = request.serverIntranetAddress;
    }

    if (!$dara.isNull(request.slaveZoneId)) {
      query["SlaveZoneId"] = request.slaveZoneId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadBalancers",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadBalancersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadBalancersResponse({}));
  }

  /**
   * slb实例批量查询
   * 
   * @param request - DescribeLoadBalancersRequest
   * @returns DescribeLoadBalancersResponse
   */
  async describeLoadBalancers(request: $_model.DescribeLoadBalancersRequest): Promise<$_model.DescribeLoadBalancersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadBalancersWithOptions(request, runtime);
  }

  /**
   * 查询可用地域
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2013-02-21",
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
   * 查询可用地域
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * 删除默认服务器组的后端服务器
   * 
   * @param request - RemoveBackendServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServersWithOptions(request: $_model.RemoveBackendServersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveBackendServersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backendServers)) {
      query["BackendServers"] = request.backendServers;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveBackendServers",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveBackendServersResponse>(await this.callApi(params, req, runtime), new $_model.RemoveBackendServersResponse({}));
  }

  /**
   * 删除默认服务器组的后端服务器
   * 
   * @param request - RemoveBackendServersRequest
   * @returns RemoveBackendServersResponse
   */
  async removeBackendServers(request: $_model.RemoveBackendServersRequest): Promise<$_model.RemoveBackendServersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBackendServersWithOptions(request, runtime);
  }

  /**
   * 更新http监听
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttributeWithOptions(request: $_model.SetLoadBalancerHTTPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerHTTPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cookie)) {
      query["Cookie"] = request.cookie;
    }

    if (!$dara.isNull(request.cookieTimeout)) {
      query["CookieTimeout"] = request.cookieTimeout;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthCheckTimeout)) {
      query["HealthCheckTimeout"] = request.healthCheckTimeout;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.stickySession)) {
      query["StickySession"] = request.stickySession;
    }

    if (!$dara.isNull(request.stickySessionType)) {
      query["StickySessionType"] = request.stickySessionType;
    }

    if (!$dara.isNull(request.URI)) {
      query["URI"] = request.URI;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    if (!$dara.isNull(request.XForwardedFor)) {
      query["XForwardedFor"] = request.XForwardedFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerHTTPListenerAttribute",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerHTTPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerHTTPListenerAttributeResponse({}));
  }

  /**
   * 更新http监听
   * 
   * @param request - SetLoadBalancerHTTPListenerAttributeRequest
   * @returns SetLoadBalancerHTTPListenerAttributeResponse
   */
  async setLoadBalancerHTTPListenerAttribute(request: $_model.SetLoadBalancerHTTPListenerAttributeRequest): Promise<$_model.SetLoadBalancerHTTPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerHTTPListenerAttributeWithOptions(request, runtime);
  }

  /**
   * 修改监听状态
   * 
   * @param request - SetLoadBalancerListenerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerListenerStatusResponse
   */
  async setLoadBalancerListenerStatusWithOptions(request: $_model.SetLoadBalancerListenerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerListenerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerStatus)) {
      query["ListenerStatus"] = request.listenerStatus;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerListenerStatus",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerListenerStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerListenerStatusResponse({}));
  }

  /**
   * 修改监听状态
   * 
   * @param request - SetLoadBalancerListenerStatusRequest
   * @returns SetLoadBalancerListenerStatusResponse
   */
  async setLoadBalancerListenerStatus(request: $_model.SetLoadBalancerListenerStatusRequest): Promise<$_model.SetLoadBalancerListenerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerListenerStatusWithOptions(request, runtime);
  }

  /**
   * 修改实例名称
   * 
   * @param request - SetLoadBalancerNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerNameWithOptions(request: $_model.SetLoadBalancerNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerName)) {
      query["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerName",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerNameResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerNameResponse({}));
  }

  /**
   * 修改实例名称
   * 
   * @param request - SetLoadBalancerNameRequest
   * @returns SetLoadBalancerNameResponse
   */
  async setLoadBalancerName(request: $_model.SetLoadBalancerNameRequest): Promise<$_model.SetLoadBalancerNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerNameWithOptions(request, runtime);
  }

  /**
   * 修改实例状态
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatusWithOptions(request: $_model.SetLoadBalancerStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.accessKeyId)) {
      query["access_key_id"] = request.accessKeyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerStatus",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerStatusResponse({}));
  }

  /**
   * 修改实例状态
   * 
   * @param request - SetLoadBalancerStatusRequest
   * @returns SetLoadBalancerStatusResponse
   */
  async setLoadBalancerStatus(request: $_model.SetLoadBalancerStatusRequest): Promise<$_model.SetLoadBalancerStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerStatusWithOptions(request, runtime);
  }

  /**
   * 更新tcp监听
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttributeWithOptions(request: $_model.SetLoadBalancerTCPListenerAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetLoadBalancerTCPListenerAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectPort)) {
      query["ConnectPort"] = request.connectPort;
    }

    if (!$dara.isNull(request.connectTimeout)) {
      query["ConnectTimeout"] = request.connectTimeout;
    }

    if (!$dara.isNull(request.healthCheck)) {
      query["HealthCheck"] = request.healthCheck;
    }

    if (!$dara.isNull(request.healthyThreshold)) {
      query["HealthyThreshold"] = request.healthyThreshold;
    }

    if (!$dara.isNull(request.hostId)) {
      query["HostId"] = request.hostId;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.persistenceTimeout)) {
      query["PersistenceTimeout"] = request.persistenceTimeout;
    }

    if (!$dara.isNull(request.scheduler)) {
      query["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.unhealthyThreshold)) {
      query["UnhealthyThreshold"] = request.unhealthyThreshold;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetLoadBalancerTCPListenerAttribute",
      version: "2013-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetLoadBalancerTCPListenerAttributeResponse>(await this.callApi(params, req, runtime), new $_model.SetLoadBalancerTCPListenerAttributeResponse({}));
  }

  /**
   * 更新tcp监听
   * 
   * @param request - SetLoadBalancerTCPListenerAttributeRequest
   * @returns SetLoadBalancerTCPListenerAttributeResponse
   */
  async setLoadBalancerTCPListenerAttribute(request: $_model.SetLoadBalancerTCPListenerAttributeRequest): Promise<$_model.SetLoadBalancerTCPListenerAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setLoadBalancerTCPListenerAttributeWithOptions(request, runtime);
  }

}
