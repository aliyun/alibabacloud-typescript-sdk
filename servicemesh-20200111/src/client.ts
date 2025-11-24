// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("servicemesh", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a cluster to an ASM instance.
   * 
   * @param request - AddClusterIntoServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddClusterIntoServiceMeshResponse
   */
  async addClusterIntoServiceMeshWithOptions(request: $_model.AddClusterIntoServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddClusterIntoServiceMeshResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.discoveryOnly)) {
      body["DiscoveryOnly"] = request.discoveryOnly;
    }

    if (!$dara.isNull(request.ignoreNamespaceCheck)) {
      body["IgnoreNamespaceCheck"] = request.ignoreNamespaceCheck;
    }

    if (!$dara.isNull(request.kubeconfig)) {
      body["Kubeconfig"] = request.kubeconfig;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddClusterIntoServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddClusterIntoServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.AddClusterIntoServiceMeshResponse({}));
  }

  /**
   * Adds a cluster to an ASM instance.
   * 
   * @param request - AddClusterIntoServiceMeshRequest
   * @returns AddClusterIntoServiceMeshResponse
   */
  async addClusterIntoServiceMesh(request: $_model.AddClusterIntoServiceMeshRequest): Promise<$_model.AddClusterIntoServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addClusterIntoServiceMeshWithOptions(request, runtime);
  }

  /**
   * Adds a virtual machine (VM) to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI AddVMIntoServiceMesh is deprecated
   * 
   * @param request - AddVMIntoServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddVMIntoServiceMeshResponse
   */
  async addVMIntoServiceMeshWithOptions(request: $_model.AddVMIntoServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddVMIntoServiceMeshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecsId)) {
      query["EcsId"] = request.ecsId;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddVMIntoServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddVMIntoServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.AddVMIntoServiceMeshResponse({}));
  }

  /**
   * Adds a virtual machine (VM) to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI AddVMIntoServiceMesh is deprecated
   * 
   * @param request - AddVMIntoServiceMeshRequest
   * @returns AddVMIntoServiceMeshResponse
   */
  // Deprecated
  async addVMIntoServiceMesh(request: $_model.AddVMIntoServiceMeshRequest): Promise<$_model.AddVMIntoServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addVMIntoServiceMeshWithOptions(request, runtime);
  }

  /**
   * Creates a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateASMGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateASMGatewayResponse
   */
  async createASMGatewayWithOptions(request: $_model.CreateASMGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateASMGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["Body"] = request.body;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateASMGateway",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateASMGatewayResponse>(await this.callApi(params, req, runtime), new $_model.CreateASMGatewayResponse({}));
  }

  /**
   * Creates a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateASMGatewayRequest
   * @returns CreateASMGatewayResponse
   */
  async createASMGateway(request: $_model.CreateASMGatewayRequest): Promise<$_model.CreateASMGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createASMGatewayWithOptions(request, runtime);
  }

  /**
   * Creates a secret for a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateGatewaySecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewaySecretResponse
   */
  async createGatewaySecretWithOptions(request: $_model.CreateGatewaySecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGatewaySecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cert)) {
      body["Cert"] = request.cert;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.key)) {
      body["Key"] = request.key;
    }

    if (!$dara.isNull(request.secretName)) {
      body["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewaySecret",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGatewaySecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateGatewaySecretResponse({}));
  }

  /**
   * Creates a secret for a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateGatewaySecretRequest
   * @returns CreateGatewaySecretResponse
   */
  async createGatewaySecret(request: $_model.CreateGatewaySecretRequest): Promise<$_model.CreateGatewaySecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGatewaySecretWithOptions(request, runtime);
  }

  /**
   * Adds domain names for a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateIstioGatewayDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIstioGatewayDomainsResponse
   */
  async createIstioGatewayDomainsWithOptions(request: $_model.CreateIstioGatewayDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIstioGatewayDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.credential)) {
      body["Credential"] = request.credential;
    }

    if (!$dara.isNull(request.forceHttps)) {
      body["ForceHttps"] = request.forceHttps;
    }

    if (!$dara.isNull(request.hosts)) {
      body["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.number)) {
      body["Number"] = request.number;
    }

    if (!$dara.isNull(request.portName)) {
      body["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new $_model.CreateIstioGatewayDomainsResponse({}));
  }

  /**
   * Adds domain names for a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateIstioGatewayDomainsRequest
   * @returns CreateIstioGatewayDomainsResponse
   */
  async createIstioGatewayDomains(request: $_model.CreateIstioGatewayDomainsRequest): Promise<$_model.CreateIstioGatewayDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIstioGatewayDomainsWithOptions(request, runtime);
  }

  /**
   * Creates a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param tmpReq - CreateIstioGatewayRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIstioGatewayRoutesResponse
   */
  async createIstioGatewayRoutesWithOptions(tmpReq: $_model.CreateIstioGatewayRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIstioGatewayRoutesResponse> {
    tmpReq.validate();
    let request = new $_model.CreateIstioGatewayRoutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.gatewayRoute)) {
      request.gatewayRouteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayRoute, "GatewayRoute", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayRouteShrink)) {
      body["GatewayRoute"] = request.gatewayRouteShrink;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new $_model.CreateIstioGatewayRoutesResponse({}));
  }

  /**
   * Creates a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - CreateIstioGatewayRoutesRequest
   * @returns CreateIstioGatewayRoutesResponse
   */
  async createIstioGatewayRoutes(request: $_model.CreateIstioGatewayRoutesRequest): Promise<$_model.CreateIstioGatewayRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIstioGatewayRoutesWithOptions(request, runtime);
  }

  /**
   * Creates a Service Mesh (ASM) instance.
   * 
   * @param request - CreateServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceMeshResponse
   */
  async createServiceMeshWithOptions(request: $_model.CreateServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceMeshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLogEnabled)) {
      body["AccessLogEnabled"] = request.accessLogEnabled;
    }

    if (!$dara.isNull(request.accessLogFile)) {
      body["AccessLogFile"] = request.accessLogFile;
    }

    if (!$dara.isNull(request.accessLogFormat)) {
      body["AccessLogFormat"] = request.accessLogFormat;
    }

    if (!$dara.isNull(request.accessLogProject)) {
      body["AccessLogProject"] = request.accessLogProject;
    }

    if (!$dara.isNull(request.accessLogServiceEnabled)) {
      body["AccessLogServiceEnabled"] = request.accessLogServiceEnabled;
    }

    if (!$dara.isNull(request.accessLogServiceHost)) {
      body["AccessLogServiceHost"] = request.accessLogServiceHost;
    }

    if (!$dara.isNull(request.accessLogServicePort)) {
      body["AccessLogServicePort"] = request.accessLogServicePort;
    }

    if (!$dara.isNull(request.apiServerLoadBalancerSpec)) {
      body["ApiServerLoadBalancerSpec"] = request.apiServerLoadBalancerSpec;
    }

    if (!$dara.isNull(request.apiServerPublicEip)) {
      body["ApiServerPublicEip"] = request.apiServerPublicEip;
    }

    if (!$dara.isNull(request.auditProject)) {
      body["AuditProject"] = request.auditProject;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["AutoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.CRAggregationEnabled)) {
      body["CRAggregationEnabled"] = request.CRAggregationEnabled;
    }

    if (!$dara.isNull(request.certChain)) {
      body["CertChain"] = request.certChain;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.clusterDomain)) {
      body["ClusterDomain"] = request.clusterDomain;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.configSourceEnabled)) {
      body["ConfigSourceEnabled"] = request.configSourceEnabled;
    }

    if (!$dara.isNull(request.configSourceNacosID)) {
      body["ConfigSourceNacosID"] = request.configSourceNacosID;
    }

    if (!$dara.isNull(request.controlPlaneLogEnabled)) {
      body["ControlPlaneLogEnabled"] = request.controlPlaneLogEnabled;
    }

    if (!$dara.isNull(request.controlPlaneLogProject)) {
      body["ControlPlaneLogProject"] = request.controlPlaneLogProject;
    }

    if (!$dara.isNull(request.customizedPrometheus)) {
      body["CustomizedPrometheus"] = request.customizedPrometheus;
    }

    if (!$dara.isNull(request.customizedZipkin)) {
      body["CustomizedZipkin"] = request.customizedZipkin;
    }

    if (!$dara.isNull(request.DNSProxyingEnabled)) {
      body["DNSProxyingEnabled"] = request.DNSProxyingEnabled;
    }

    if (!$dara.isNull(request.dubboFilterEnabled)) {
      body["DubboFilterEnabled"] = request.dubboFilterEnabled;
    }

    if (!$dara.isNull(request.edition)) {
      body["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.enableACMG)) {
      body["EnableACMG"] = request.enableACMG;
    }

    if (!$dara.isNull(request.enableAmbient)) {
      body["EnableAmbient"] = request.enableAmbient;
    }

    if (!$dara.isNull(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!$dara.isNull(request.enableCRHistory)) {
      body["EnableCRHistory"] = request.enableCRHistory;
    }

    if (!$dara.isNull(request.enableSDSServer)) {
      body["EnableSDSServer"] = request.enableSDSServer;
    }

    if (!$dara.isNull(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!$dara.isNull(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!$dara.isNull(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!$dara.isNull(request.existingCaCert)) {
      body["ExistingCaCert"] = request.existingCaCert;
    }

    if (!$dara.isNull(request.existingCaKey)) {
      body["ExistingCaKey"] = request.existingCaKey;
    }

    if (!$dara.isNull(request.existingCaType)) {
      body["ExistingCaType"] = request.existingCaType;
    }

    if (!$dara.isNull(request.existingRootCaCert)) {
      body["ExistingRootCaCert"] = request.existingRootCaCert;
    }

    if (!$dara.isNull(request.existingRootCaKey)) {
      body["ExistingRootCaKey"] = request.existingRootCaKey;
    }

    if (!$dara.isNull(request.filterGatewayClusterConfig)) {
      body["FilterGatewayClusterConfig"] = request.filterGatewayClusterConfig;
    }

    if (!$dara.isNull(request.gatewayAPIEnabled)) {
      body["GatewayAPIEnabled"] = request.gatewayAPIEnabled;
    }

    if (!$dara.isNull(request.guestCluster)) {
      body["GuestCluster"] = request.guestCluster;
    }

    if (!$dara.isNull(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!$dara.isNull(request.istioVersion)) {
      body["IstioVersion"] = request.istioVersion;
    }

    if (!$dara.isNull(request.kialiEnabled)) {
      body["KialiEnabled"] = request.kialiEnabled;
    }

    if (!$dara.isNull(request.localityLBConf)) {
      body["LocalityLBConf"] = request.localityLBConf;
    }

    if (!$dara.isNull(request.localityLoadBalancing)) {
      body["LocalityLoadBalancing"] = request.localityLoadBalancing;
    }

    if (!$dara.isNull(request.MSEEnabled)) {
      body["MSEEnabled"] = request.MSEEnabled;
    }

    if (!$dara.isNull(request.multiBufferEnabled)) {
      body["MultiBufferEnabled"] = request.multiBufferEnabled;
    }

    if (!$dara.isNull(request.multiBufferPollDelay)) {
      body["MultiBufferPollDelay"] = request.multiBufferPollDelay;
    }

    if (!$dara.isNull(request.mysqlFilterEnabled)) {
      body["MysqlFilterEnabled"] = request.mysqlFilterEnabled;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.OPALimitCPU)) {
      body["OPALimitCPU"] = request.OPALimitCPU;
    }

    if (!$dara.isNull(request.OPALimitMemory)) {
      body["OPALimitMemory"] = request.OPALimitMemory;
    }

    if (!$dara.isNull(request.OPALogLevel)) {
      body["OPALogLevel"] = request.OPALogLevel;
    }

    if (!$dara.isNull(request.OPARequestCPU)) {
      body["OPARequestCPU"] = request.OPARequestCPU;
    }

    if (!$dara.isNull(request.OPARequestMemory)) {
      body["OPARequestMemory"] = request.OPARequestMemory;
    }

    if (!$dara.isNull(request.opaEnabled)) {
      body["OpaEnabled"] = request.opaEnabled;
    }

    if (!$dara.isNull(request.openAgentPolicy)) {
      body["OpenAgentPolicy"] = request.openAgentPolicy;
    }

    if (!$dara.isNull(request.period)) {
      body["Period"] = request.period;
    }

    if (!$dara.isNull(request.pilotLoadBalancerSpec)) {
      body["PilotLoadBalancerSpec"] = request.pilotLoadBalancerSpec;
    }

    if (!$dara.isNull(request.playgroundScene)) {
      body["PlaygroundScene"] = request.playgroundScene;
    }

    if (!$dara.isNull(request.prometheusUrl)) {
      body["PrometheusUrl"] = request.prometheusUrl;
    }

    if (!$dara.isNull(request.proxyLimitCPU)) {
      body["ProxyLimitCPU"] = request.proxyLimitCPU;
    }

    if (!$dara.isNull(request.proxyLimitMemory)) {
      body["ProxyLimitMemory"] = request.proxyLimitMemory;
    }

    if (!$dara.isNull(request.proxyRequestCPU)) {
      body["ProxyRequestCPU"] = request.proxyRequestCPU;
    }

    if (!$dara.isNull(request.proxyRequestMemory)) {
      body["ProxyRequestMemory"] = request.proxyRequestMemory;
    }

    if (!$dara.isNull(request.redisFilterEnabled)) {
      body["RedisFilterEnabled"] = request.redisFilterEnabled;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.telemetry)) {
      body["Telemetry"] = request.telemetry;
    }

    if (!$dara.isNull(request.thriftFilterEnabled)) {
      body["ThriftFilterEnabled"] = request.thriftFilterEnabled;
    }

    if (!$dara.isNull(request.traceSampling)) {
      body["TraceSampling"] = request.traceSampling;
    }

    if (!$dara.isNull(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    if (!$dara.isNull(request.useExistingCA)) {
      body["UseExistingCA"] = request.useExistingCA;
    }

    if (!$dara.isNull(request.vSwitches)) {
      body["VSwitches"] = request.vSwitches;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.webAssemblyFilterEnabled)) {
      body["WebAssemblyFilterEnabled"] = request.webAssemblyFilterEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceMeshResponse({}));
  }

  /**
   * Creates a Service Mesh (ASM) instance.
   * 
   * @param request - CreateServiceMeshRequest
   * @returns CreateServiceMeshResponse
   */
  async createServiceMesh(request: $_model.CreateServiceMeshRequest): Promise<$_model.CreateServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceMeshWithOptions(request, runtime);
  }

  /**
   * Creates a lane.
   * 
   * @param request - CreateSwimLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSwimLaneResponse
   */
  async createSwimLaneWithOptions(request: $_model.CreateSwimLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSwimLaneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labelSelectorKey)) {
      body["LabelSelectorKey"] = request.labelSelectorKey;
    }

    if (!$dara.isNull(request.labelSelectorValue)) {
      body["LabelSelectorValue"] = request.labelSelectorValue;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!$dara.isNull(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSwimLaneResponse>(await this.callApi(params, req, runtime), new $_model.CreateSwimLaneResponse({}));
  }

  /**
   * Creates a lane.
   * 
   * @param request - CreateSwimLaneRequest
   * @returns CreateSwimLaneResponse
   */
  async createSwimLane(request: $_model.CreateSwimLaneRequest): Promise<$_model.CreateSwimLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSwimLaneWithOptions(request, runtime);
  }

  /**
   * Creates a lane group.
   * 
   * @param request - CreateSwimLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSwimLaneGroupResponse
   */
  async createSwimLaneGroupWithOptions(request: $_model.CreateSwimLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSwimLaneGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ingressGatewayName)) {
      body["IngressGatewayName"] = request.ingressGatewayName;
    }

    if (!$dara.isNull(request.ingressGatewayNamespace)) {
      body["IngressGatewayNamespace"] = request.ingressGatewayNamespace;
    }

    if (!$dara.isNull(request.ingressType)) {
      body["IngressType"] = request.ingressType;
    }

    if (!$dara.isNull(request.isPermissive)) {
      body["IsPermissive"] = request.isPermissive;
    }

    if (!$dara.isNull(request.routeHeader)) {
      body["RouteHeader"] = request.routeHeader;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!$dara.isNull(request.traceHeader)) {
      body["TraceHeader"] = request.traceHeader;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateSwimLaneGroupResponse({}));
  }

  /**
   * Creates a lane group.
   * 
   * @param request - CreateSwimLaneGroupRequest
   * @returns CreateSwimLaneGroupResponse
   */
  async createSwimLaneGroup(request: $_model.CreateSwimLaneGroupRequest): Promise<$_model.CreateSwimLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSwimLaneGroupWithOptions(request, runtime);
  }

  /**
   * 创建Waypoint
   * 
   * @param request - CreateWaypointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWaypointResponse
   */
  async createWaypointWithOptions(request: $_model.CreateWaypointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWaypointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.HPAEnabled)) {
      body["HPAEnabled"] = request.HPAEnabled;
    }

    if (!$dara.isNull(request.HPAMaxReplicas)) {
      body["HPAMaxReplicas"] = request.HPAMaxReplicas;
    }

    if (!$dara.isNull(request.HPAMinReplicas)) {
      body["HPAMinReplicas"] = request.HPAMinReplicas;
    }

    if (!$dara.isNull(request.HPATargetCPU)) {
      body["HPATargetCPU"] = request.HPATargetCPU;
    }

    if (!$dara.isNull(request.HPATargetMemory)) {
      body["HPATargetMemory"] = request.HPATargetMemory;
    }

    if (!$dara.isNull(request.limitCPU)) {
      body["LimitCPU"] = request.limitCPU;
    }

    if (!$dara.isNull(request.limitMemory)) {
      body["LimitMemory"] = request.limitMemory;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.preferECI)) {
      body["PreferECI"] = request.preferECI;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.requestCPU)) {
      body["RequestCPU"] = request.requestCPU;
    }

    if (!$dara.isNull(request.requestMemory)) {
      body["RequestMemory"] = request.requestMemory;
    }

    if (!$dara.isNull(request.serviceAccount)) {
      body["ServiceAccount"] = request.serviceAccount;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWaypoint",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWaypointResponse>(await this.callApi(params, req, runtime), new $_model.CreateWaypointResponse({}));
  }

  /**
   * 创建Waypoint
   * 
   * @param request - CreateWaypointRequest
   * @returns CreateWaypointResponse
   */
  async createWaypoint(request: $_model.CreateWaypointRequest): Promise<$_model.CreateWaypointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWaypointWithOptions(request, runtime);
  }

  /**
   * Deletes a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteGatewayRouteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRouteWithOptions(request: $_model.DeleteGatewayRouteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewayRouteResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.routeName)) {
      body["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayRoute",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewayRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewayRouteResponse({}));
  }

  /**
   * Deletes a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteGatewayRouteRequest
   * @returns DeleteGatewayRouteResponse
   */
  async deleteGatewayRoute(request: $_model.DeleteGatewayRouteRequest): Promise<$_model.DeleteGatewayRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewayRouteWithOptions(request, runtime);
  }

  /**
   * Deletes a secret for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteGatewaySecretRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewaySecretResponse
   */
  async deleteGatewaySecretWithOptions(request: $_model.DeleteGatewaySecretRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGatewaySecretResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.secretName)) {
      body["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewaySecret",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGatewaySecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGatewaySecretResponse({}));
  }

  /**
   * Deletes a secret for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteGatewaySecretRequest
   * @returns DeleteGatewaySecretResponse
   */
  async deleteGatewaySecret(request: $_model.DeleteGatewaySecretRequest): Promise<$_model.DeleteGatewaySecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGatewaySecretWithOptions(request, runtime);
  }

  /**
   * Deletes one or more domain names for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteIstioGatewayDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIstioGatewayDomainsResponse
   */
  async deleteIstioGatewayDomainsWithOptions(request: $_model.DeleteIstioGatewayDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIstioGatewayDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hosts)) {
      body["Hosts"] = request.hosts;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.portName)) {
      body["PortName"] = request.portName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIstioGatewayDomainsResponse({}));
  }

  /**
   * Deletes one or more domain names for a Service Mesh (ASM) gateway.
   * 
   * @param request - DeleteIstioGatewayDomainsRequest
   * @returns DeleteIstioGatewayDomainsResponse
   */
  async deleteIstioGatewayDomains(request: $_model.DeleteIstioGatewayDomainsRequest): Promise<$_model.DeleteIstioGatewayDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIstioGatewayDomainsWithOptions(request, runtime);
  }

  /**
   * Deletes a Service Mesh (ASM) instance.
   * 
   * @param request - DeleteServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceMeshResponse
   */
  async deleteServiceMeshWithOptions(request: $_model.DeleteServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteServiceMeshResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.retainResources)) {
      body["RetainResources"] = request.retainResources;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.DeleteServiceMeshResponse({}));
  }

  /**
   * Deletes a Service Mesh (ASM) instance.
   * 
   * @param request - DeleteServiceMeshRequest
   * @returns DeleteServiceMeshResponse
   */
  async deleteServiceMesh(request: $_model.DeleteServiceMeshRequest): Promise<$_model.DeleteServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteServiceMeshWithOptions(request, runtime);
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimLaneResponse
   */
  async deleteSwimLaneWithOptions(request: $_model.DeleteSwimLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimLaneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimLaneResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimLaneResponse({}));
  }

  /**
   * Deletes a lane.
   * 
   * @param request - DeleteSwimLaneRequest
   * @returns DeleteSwimLaneResponse
   */
  async deleteSwimLane(request: $_model.DeleteSwimLaneRequest): Promise<$_model.DeleteSwimLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSwimLaneWithOptions(request, runtime);
  }

  /**
   * Deletes a lane group. If a lane group is deleted, the lanes in the group and the traffic routing rules attached to the lanes are deleted.
   * 
   * @param request - DeleteSwimLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimLaneGroupResponse
   */
  async deleteSwimLaneGroupWithOptions(request: $_model.DeleteSwimLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimLaneGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimLaneGroupResponse({}));
  }

  /**
   * Deletes a lane group. If a lane group is deleted, the lanes in the group and the traffic routing rules attached to the lanes are deleted.
   * 
   * @param request - DeleteSwimLaneGroupRequest
   * @returns DeleteSwimLaneGroupResponse
   */
  async deleteSwimLaneGroup(request: $_model.DeleteSwimLaneGroupRequest): Promise<$_model.DeleteSwimLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSwimLaneGroupWithOptions(request, runtime);
  }

  /**
   * 删除Waypoint资源
   * 
   * @param request - DeleteWaypointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWaypointResponse
   */
  async deleteWaypointWithOptions(request: $_model.DeleteWaypointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWaypointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWaypoint",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWaypointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWaypointResponse({}));
  }

  /**
   * 删除Waypoint资源
   * 
   * @param request - DeleteWaypointRequest
   * @returns DeleteWaypointResponse
   */
  async deleteWaypoint(request: $_model.DeleteWaypointRequest): Promise<$_model.DeleteWaypointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWaypointWithOptions(request, runtime);
  }

  /**
   * Queries the information about imported services on a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeASMGatewayImportedServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeASMGatewayImportedServicesResponse
   */
  async describeASMGatewayImportedServicesWithOptions(request: $_model.DescribeASMGatewayImportedServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeASMGatewayImportedServicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeASMGatewayImportedServices",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeASMGatewayImportedServicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeASMGatewayImportedServicesResponse({}));
  }

  /**
   * Queries the information about imported services on a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeASMGatewayImportedServicesRequest
   * @returns DescribeASMGatewayImportedServicesResponse
   */
  async describeASMGatewayImportedServices(request: $_model.DescribeASMGatewayImportedServicesRequest): Promise<$_model.DescribeASMGatewayImportedServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeASMGatewayImportedServicesWithOptions(request, runtime);
  }

  /**
   * Queries the versions of the Cloud Controller Manager (CCM) component.
   * 
   * @param request - DescribeCCMVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCCMVersionResponse
   */
  async describeCCMVersionWithOptions(request: $_model.DescribeCCMVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCCMVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCCMVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCCMVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCCMVersionResponse({}));
  }

  /**
   * Queries the versions of the Cloud Controller Manager (CCM) component.
   * 
   * @param request - DescribeCCMVersionRequest
   * @returns DescribeCCMVersionResponse
   */
  async describeCCMVersion(request: $_model.DescribeCCMVersionRequest): Promise<$_model.DescribeCCMVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCCMVersionWithOptions(request, runtime);
  }

  /**
   * Queries the network connectivity between clusters that are deployed across virtual private clouds (VPCs) in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeCensRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCensResponse
   */
  async describeCensWithOptions(request: $_model.DescribeCensRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCensResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCens",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCensResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCensResponse({}));
  }

  /**
   * Queries the network connectivity between clusters that are deployed across virtual private clouds (VPCs) in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeCensRequest
   * @returns DescribeCensResponse
   */
  async describeCens(request: $_model.DescribeCensRequest): Promise<$_model.DescribeCensResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCensWithOptions(request, runtime);
  }

  /**
   * Queries the information about Grafana dashboards of a cluster in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClusterGrafanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterGrafanaResponse
   */
  async describeClusterGrafanaWithOptions(request: $_model.DescribeClusterGrafanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterGrafanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      query["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.reAddPrometheusIntegration)) {
      query["ReAddPrometheusIntegration"] = request.reAddPrometheusIntegration;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterGrafana",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterGrafanaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterGrafanaResponse({}));
  }

  /**
   * Queries the information about Grafana dashboards of a cluster in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClusterGrafanaRequest
   * @returns DescribeClusterGrafanaResponse
   */
  async describeClusterGrafana(request: $_model.DescribeClusterGrafanaRequest): Promise<$_model.DescribeClusterGrafanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterGrafanaWithOptions(request, runtime);
  }

  /**
   * Queries the public endpoint of the Prometheus service that is used to monitor a cluster in an Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClusterPrometheusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterPrometheusResponse
   */
  async describeClusterPrometheusWithOptions(request: $_model.DescribeClusterPrometheusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterPrometheusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      query["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.k8sClusterRegionId)) {
      query["K8sClusterRegionId"] = request.k8sClusterRegionId;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterPrometheus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterPrometheusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterPrometheusResponse({}));
  }

  /**
   * Queries the public endpoint of the Prometheus service that is used to monitor a cluster in an Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClusterPrometheusRequest
   * @returns DescribeClusterPrometheusResponse
   */
  async describeClusterPrometheus(request: $_model.DescribeClusterPrometheusRequest): Promise<$_model.DescribeClusterPrometheusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterPrometheusWithOptions(request, runtime);
  }

  /**
   * Queries the information about clusters in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClustersInServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClustersInServiceMeshResponse
   */
  async describeClustersInServiceMeshWithOptions(request: $_model.DescribeClustersInServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClustersInServiceMeshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClustersInServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClustersInServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClustersInServiceMeshResponse({}));
  }

  /**
   * Queries the information about clusters in a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeClustersInServiceMeshRequest
   * @returns DescribeClustersInServiceMeshResponse
   */
  async describeClustersInServiceMesh(request: $_model.DescribeClustersInServiceMeshRequest): Promise<$_model.DescribeClustersInServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClustersInServiceMeshWithOptions(request, runtime);
  }

  /**
   * Queries the common YAML templates of Istio resources used by Service Mesh (ASM) instances.
   * 
   * @param request - DescribeCrTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCrTemplatesResponse
   */
  async describeCrTemplatesWithOptions(request: $_model.DescribeCrTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCrTemplatesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioVersion)) {
      body["IstioVersion"] = request.istioVersion;
    }

    if (!$dara.isNull(request.kind)) {
      body["Kind"] = request.kind;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCrTemplates",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCrTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCrTemplatesResponse({}));
  }

  /**
   * Queries the common YAML templates of Istio resources used by Service Mesh (ASM) instances.
   * 
   * @param request - DescribeCrTemplatesRequest
   * @returns DescribeCrTemplatesResponse
   */
  async describeCrTemplates(request: $_model.DescribeCrTemplatesRequest): Promise<$_model.DescribeCrTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCrTemplatesWithOptions(request, runtime);
  }

  /**
   * DescribeEipResources
   * 
   * @param request - DescribeEipResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEipResourcesResponse
   */
  async describeEipResourcesWithOptions(request: $_model.DescribeEipResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEipResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEipResources",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEipResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEipResourcesResponse({}));
  }

  /**
   * DescribeEipResources
   * 
   * @param request - DescribeEipResourcesRequest
   * @returns DescribeEipResourcesResponse
   */
  async describeEipResources(request: $_model.DescribeEipResourcesRequest): Promise<$_model.DescribeEipResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEipResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a secret of a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeGatewaySecretDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGatewaySecretDetailsResponse
   */
  async describeGatewaySecretDetailsWithOptions(request: $_model.DescribeGatewaySecretDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGatewaySecretDetailsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGatewaySecretDetails",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGatewaySecretDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGatewaySecretDetailsResponse({}));
  }

  /**
   * Queries the detailed information about a secret of a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeGatewaySecretDetailsRequest
   * @returns DescribeGatewaySecretDetailsResponse
   */
  async describeGatewaySecretDetails(request: $_model.DescribeGatewaySecretDetailsRequest): Promise<$_model.DescribeGatewaySecretDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGatewaySecretDetailsWithOptions(request, runtime);
  }

  /**
   * Queries the access log dashboards of a cluster on the data plane.
   * 
   * @param request - DescribeGuestClusterAccessLogDashboardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGuestClusterAccessLogDashboardsResponse
   */
  async describeGuestClusterAccessLogDashboardsWithOptions(request: $_model.DescribeGuestClusterAccessLogDashboardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGuestClusterAccessLogDashboardsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGuestClusterAccessLogDashboards",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGuestClusterAccessLogDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGuestClusterAccessLogDashboardsResponse({}));
  }

  /**
   * Queries the access log dashboards of a cluster on the data plane.
   * 
   * @param request - DescribeGuestClusterAccessLogDashboardsRequest
   * @returns DescribeGuestClusterAccessLogDashboardsResponse
   */
  async describeGuestClusterAccessLogDashboards(request: $_model.DescribeGuestClusterAccessLogDashboardsRequest): Promise<$_model.DescribeGuestClusterAccessLogDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGuestClusterAccessLogDashboardsWithOptions(request, runtime);
  }

  /**
   * Queries a list of the namespaces of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeGuestClusterNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGuestClusterNamespacesResponse
   */
  async describeGuestClusterNamespacesWithOptions(request: $_model.DescribeGuestClusterNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGuestClusterNamespacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.guestClusterID)) {
      body["GuestClusterID"] = request.guestClusterID;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.showNsLabels)) {
      body["ShowNsLabels"] = request.showNsLabels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGuestClusterNamespaces",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGuestClusterNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGuestClusterNamespacesResponse({}));
  }

  /**
   * Queries a list of the namespaces of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeGuestClusterNamespacesRequest
   * @returns DescribeGuestClusterNamespacesResponse
   */
  async describeGuestClusterNamespaces(request: $_model.DescribeGuestClusterNamespacesRequest): Promise<$_model.DescribeGuestClusterNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGuestClusterNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries a list of the pods in a specified namespace of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeGuestClusterPodsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGuestClusterPodsResponse
   */
  async describeGuestClusterPodsWithOptions(request: $_model.DescribeGuestClusterPodsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGuestClusterPodsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.guestClusterID)) {
      body["GuestClusterID"] = request.guestClusterID;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGuestClusterPods",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGuestClusterPodsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGuestClusterPodsResponse({}));
  }

  /**
   * Queries a list of the pods in a specified namespace of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeGuestClusterPodsRequest
   * @returns DescribeGuestClusterPodsResponse
   */
  async describeGuestClusterPods(request: $_model.DescribeGuestClusterPodsRequest): Promise<$_model.DescribeGuestClusterPodsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGuestClusterPodsWithOptions(request, runtime);
  }

  /**
   * Queries the details of the imported services on a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeImportedServicesDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportedServicesDetailResponse
   */
  async describeImportedServicesDetailWithOptions(request: $_model.DescribeImportedServicesDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportedServicesDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImportedServicesDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImportedServicesDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImportedServicesDetailResponse({}));
  }

  /**
   * Queries the details of the imported services on a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeImportedServicesDetailRequest
   * @returns DescribeImportedServicesDetailResponse
   */
  async describeImportedServicesDetail(request: $_model.DescribeImportedServicesDetailRequest): Promise<$_model.DescribeImportedServicesDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportedServicesDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of the domain names that are exposed by a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIstioGatewayDomainsResponse
   */
  async describeIstioGatewayDomainsWithOptions(request: $_model.DescribeIstioGatewayDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIstioGatewayDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIstioGatewayDomains",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIstioGatewayDomainsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIstioGatewayDomainsResponse({}));
  }

  /**
   * Queries a list of the domain names that are exposed by a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayDomainsRequest
   * @returns DescribeIstioGatewayDomainsResponse
   */
  async describeIstioGatewayDomains(request: $_model.DescribeIstioGatewayDomainsRequest): Promise<$_model.DescribeIstioGatewayDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIstioGatewayDomainsWithOptions(request, runtime);
  }

  /**
   * Queries the detailed information about a routing rule of an Alibaba Cloud Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayRouteDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIstioGatewayRouteDetailResponse
   */
  async describeIstioGatewayRouteDetailWithOptions(request: $_model.DescribeIstioGatewayRouteDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIstioGatewayRouteDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.routeName)) {
      body["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIstioGatewayRouteDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIstioGatewayRouteDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIstioGatewayRouteDetailResponse({}));
  }

  /**
   * Queries the detailed information about a routing rule of an Alibaba Cloud Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayRouteDetailRequest
   * @returns DescribeIstioGatewayRouteDetailResponse
   */
  async describeIstioGatewayRouteDetail(request: $_model.DescribeIstioGatewayRouteDetailRequest): Promise<$_model.DescribeIstioGatewayRouteDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIstioGatewayRouteDetailWithOptions(request, runtime);
  }

  /**
   * Queries the routing rules for a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIstioGatewayRoutesResponse
   */
  async describeIstioGatewayRoutesWithOptions(request: $_model.DescribeIstioGatewayRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIstioGatewayRoutesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIstioGatewayRoutesResponse({}));
  }

  /**
   * Queries the routing rules for a Service Mesh (ASM) gateway.
   * 
   * @param request - DescribeIstioGatewayRoutesRequest
   * @returns DescribeIstioGatewayRoutesResponse
   */
  async describeIstioGatewayRoutes(request: $_model.DescribeIstioGatewayRoutesRequest): Promise<$_model.DescribeIstioGatewayRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIstioGatewayRoutesWithOptions(request, runtime);
  }

  /**
   * 获取ASM网格网络分区设置
   * 
   * @param request - DescribeMeshMultiClusterNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMeshMultiClusterNetworkResponse
   */
  async describeMeshMultiClusterNetworkWithOptions(request: $_model.DescribeMeshMultiClusterNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMeshMultiClusterNetworkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMeshMultiClusterNetwork",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMeshMultiClusterNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMeshMultiClusterNetworkResponse({}));
  }

  /**
   * 获取ASM网格网络分区设置
   * 
   * @param request - DescribeMeshMultiClusterNetworkRequest
   * @returns DescribeMeshMultiClusterNetworkResponse
   */
  async describeMeshMultiClusterNetwork(request: $_model.DescribeMeshMultiClusterNetworkRequest): Promise<$_model.DescribeMeshMultiClusterNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMeshMultiClusterNetworkWithOptions(request, runtime);
  }

  /**
   * Queries basic information about a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetadataResponse
   */
  async describeMetadataWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetadataResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetadata",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetadataResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetadataResponse({}));
  }

  /**
   * Queries basic information about a Service Mesh (ASM) instance.
   * @returns DescribeMetadataResponse
   */
  async describeMetadata(): Promise<$_model.DescribeMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetadataWithOptions(runtime);
  }

  /**
   * Queries the configurations of sidecar proxies at the namespace level.
   * 
   * @param request - DescribeNamespaceScopeSidecarConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespaceScopeSidecarConfigResponse
   */
  async describeNamespaceScopeSidecarConfigWithOptions(request: $_model.DescribeNamespaceScopeSidecarConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespaceScopeSidecarConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaceScopeSidecarConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespaceScopeSidecarConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespaceScopeSidecarConfigResponse({}));
  }

  /**
   * Queries the configurations of sidecar proxies at the namespace level.
   * 
   * @param request - DescribeNamespaceScopeSidecarConfigRequest
   * @returns DescribeNamespaceScopeSidecarConfigResponse
   */
  async describeNamespaceScopeSidecarConfig(request: $_model.DescribeNamespaceScopeSidecarConfigRequest): Promise<$_model.DescribeNamespaceScopeSidecarConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNamespaceScopeSidecarConfigWithOptions(request, runtime);
  }

  /**
   * Queries the instance types of nodes on the data plane and whether the instance types support Multi-Buffer acceleration.
   * 
   * @param request - DescribeNodesInstanceTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNodesInstanceTypeResponse
   */
  async describeNodesInstanceTypeWithOptions(request: $_model.DescribeNodesInstanceTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNodesInstanceTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNodesInstanceType",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNodesInstanceTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNodesInstanceTypeResponse({}));
  }

  /**
   * Queries the instance types of nodes on the data plane and whether the instance types support Multi-Buffer acceleration.
   * 
   * @param request - DescribeNodesInstanceTypeRequest
   * @returns DescribeNodesInstanceTypeResponse
   */
  async describeNodesInstanceType(request: $_model.DescribeNodesInstanceTypeRequest): Promise<$_model.DescribeNodesInstanceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeNodesInstanceTypeWithOptions(request, runtime);
  }

  /**
   * Queries the Server Load Balancer (SLB) instances that can be reused.
   * 
   * @param request - DescribeReusableSlbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeReusableSlbResponse
   */
  async describeReusableSlbWithOptions(request: $_model.DescribeReusableSlbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeReusableSlbResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.lbType)) {
      body["LbType"] = request.lbType;
    }

    if (!$dara.isNull(request.networkType)) {
      body["NetworkType"] = request.networkType;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeReusableSlb",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeReusableSlbResponse>(await this.callApi(params, req, runtime), new $_model.DescribeReusableSlbResponse({}));
  }

  /**
   * Queries the Server Load Balancer (SLB) instances that can be reused.
   * 
   * @param request - DescribeReusableSlbRequest
   * @returns DescribeReusableSlbResponse
   */
  async describeReusableSlb(request: $_model.DescribeReusableSlbRequest): Promise<$_model.DescribeReusableSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeReusableSlbWithOptions(request, runtime);
  }

  /**
   * Queries the check results of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshAdditionalStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshAdditionalStatusResponse
   */
  async describeServiceMeshAdditionalStatusWithOptions(request: $_model.DescribeServiceMeshAdditionalStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshAdditionalStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkMode)) {
      body["CheckMode"] = request.checkMode;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshAdditionalStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshAdditionalStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshAdditionalStatusResponse({}));
  }

  /**
   * Queries the check results of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshAdditionalStatusRequest
   * @returns DescribeServiceMeshAdditionalStatusResponse
   */
  async describeServiceMeshAdditionalStatus(request: $_model.DescribeServiceMeshAdditionalStatusRequest): Promise<$_model.DescribeServiceMeshAdditionalStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshAdditionalStatusWithOptions(request, runtime);
  }

  /**
   * Queries the clusters that can be added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshClustersResponse
   */
  async describeServiceMeshClustersWithOptions(request: $_model.DescribeServiceMeshClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.offset)) {
      body["Offset"] = request.offset;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshClusters",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshClustersResponse({}));
  }

  /**
   * Queries the clusters that can be added to a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshClustersRequest
   * @returns DescribeServiceMeshClustersResponse
   */
  async describeServiceMeshClusters(request: $_model.DescribeServiceMeshClustersRequest): Promise<$_model.DescribeServiceMeshClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshClustersWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshDetailResponse
   */
  async describeServiceMeshDetailWithOptions(request: $_model.DescribeServiceMeshDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshDetailResponse({}));
  }

  /**
   * Queries the details of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshDetailRequest
   * @returns DescribeServiceMeshDetailResponse
   */
  async describeServiceMeshDetail(request: $_model.DescribeServiceMeshDetailRequest): Promise<$_model.DescribeServiceMeshDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshDetailWithOptions(request, runtime);
  }

  /**
   * Queries the content of the kubeconfig file of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshKubeconfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshKubeconfigResponse
   */
  async describeServiceMeshKubeconfigWithOptions(request: $_model.DescribeServiceMeshKubeconfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshKubeconfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.privateIpAddress)) {
      query["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshKubeconfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshKubeconfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshKubeconfigResponse({}));
  }

  /**
   * Queries the content of the kubeconfig file of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshKubeconfigRequest
   * @returns DescribeServiceMeshKubeconfigResponse
   */
  async describeServiceMeshKubeconfig(request: $_model.DescribeServiceMeshKubeconfigRequest): Promise<$_model.DescribeServiceMeshKubeconfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshKubeconfigWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshLogsResponse
   */
  async describeServiceMeshLogsWithOptions(request: $_model.DescribeServiceMeshLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshLogsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshLogs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshLogsResponse({}));
  }

  /**
   * Queries the logs of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshLogsRequest
   * @returns DescribeServiceMeshLogsResponse
   */
  async describeServiceMeshLogs(request: $_model.DescribeServiceMeshLogsRequest): Promise<$_model.DescribeServiceMeshLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshLogsWithOptions(request, runtime);
  }

  /**
   * Queries the status of proxies on the data plane of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshProxyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshProxyStatusResponse
   */
  async describeServiceMeshProxyStatusWithOptions(request: $_model.DescribeServiceMeshProxyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshProxyStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshProxyStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshProxyStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshProxyStatusResponse({}));
  }

  /**
   * Queries the status of proxies on the data plane of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeServiceMeshProxyStatusRequest
   * @returns DescribeServiceMeshProxyStatusResponse
   */
  async describeServiceMeshProxyStatus(request: $_model.DescribeServiceMeshProxyStatusRequest): Promise<$_model.DescribeServiceMeshProxyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshProxyStatusWithOptions(request, runtime);
  }

  /**
   * Queries the upgrade details of a Service Mesh (ASM) instance and its ingress gateways.
   * 
   * @param request - DescribeServiceMeshUpgradeStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshUpgradeStatusResponse
   */
  async describeServiceMeshUpgradeStatusWithOptions(request: $_model.DescribeServiceMeshUpgradeStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshUpgradeStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allIstioGatewayFullNames)) {
      body["AllIstioGatewayFullNames"] = request.allIstioGatewayFullNames;
    }

    if (!$dara.isNull(request.guestClusterIds)) {
      body["GuestClusterIds"] = request.guestClusterIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshUpgradeStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshUpgradeStatusResponse({}));
  }

  /**
   * Queries the upgrade details of a Service Mesh (ASM) instance and its ingress gateways.
   * 
   * @param request - DescribeServiceMeshUpgradeStatusRequest
   * @returns DescribeServiceMeshUpgradeStatusResponse
   */
  async describeServiceMeshUpgradeStatus(request: $_model.DescribeServiceMeshUpgradeStatusRequest): Promise<$_model.DescribeServiceMeshUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshUpgradeStatusWithOptions(request, runtime);
  }

  /**
   * Queries the Elastic Compute Service (ECS) instances that reside in the same virtual private cloud (VPC) as a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI DescribeServiceMeshVMs is deprecated
   * 
   * @param request - DescribeServiceMeshVMsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshVMsResponse
   */
  async describeServiceMeshVMsWithOptions(request: $_model.DescribeServiceMeshVMsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshVMsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshVMs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshVMsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshVMsResponse({}));
  }

  /**
   * Queries the Elastic Compute Service (ECS) instances that reside in the same virtual private cloud (VPC) as a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI DescribeServiceMeshVMs is deprecated
   * 
   * @param request - DescribeServiceMeshVMsRequest
   * @returns DescribeServiceMeshVMsResponse
   */
  // Deprecated
  async describeServiceMeshVMs(request: $_model.DescribeServiceMeshVMsRequest): Promise<$_model.DescribeServiceMeshVMsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshVMsWithOptions(request, runtime);
  }

  /**
   * Queries ASM instances.
   * 
   * @param request - DescribeServiceMeshesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMeshesResponse
   */
  async describeServiceMeshesWithOptions(request: $_model.DescribeServiceMeshesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceMeshesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMeshes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceMeshesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceMeshesResponse({}));
  }

  /**
   * Queries ASM instances.
   * 
   * @param request - DescribeServiceMeshesRequest
   * @returns DescribeServiceMeshesResponse
   */
  async describeServiceMeshes(request: $_model.DescribeServiceMeshesRequest): Promise<$_model.DescribeServiceMeshesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceMeshesWithOptions(request, runtime);
  }

  /**
   * Queries the update status of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeUpgradeVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUpgradeVersionResponse
   */
  async describeUpgradeVersionWithOptions(request: $_model.DescribeUpgradeVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUpgradeVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUpgradeVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUpgradeVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUpgradeVersionResponse({}));
  }

  /**
   * Queries the update status of a Service Mesh (ASM) instance.
   * 
   * @param request - DescribeUpgradeVersionRequest
   * @returns DescribeUpgradeVersionResponse
   */
  async describeUpgradeVersion(request: $_model.DescribeUpgradeVersionRequest): Promise<$_model.DescribeUpgradeVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUpgradeVersionWithOptions(request, runtime);
  }

  /**
   * Obtains role-based access control (RBAC) permissions.
   * 
   * @param request - DescribeUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserPermissionsResponse
   */
  async describeUserPermissionsWithOptions(request: $_model.DescribeUserPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserPermissionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.subAccountUserId)) {
      body["SubAccountUserId"] = request.subAccountUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserPermissionsResponse({}));
  }

  /**
   * Obtains role-based access control (RBAC) permissions.
   * 
   * @param request - DescribeUserPermissionsRequest
   * @returns DescribeUserPermissionsResponse
   */
  async describeUserPermissions(request: $_model.DescribeUserPermissionsRequest): Promise<$_model.DescribeUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of all RAM users or RAM roles to which a Role-based Access Control (RBAC) role is assigned.
   * 
   * @param request - DescribeUsersWithPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUsersWithPermissionsResponse
   */
  async describeUsersWithPermissionsWithOptions(request: $_model.DescribeUsersWithPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUsersWithPermissionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUsersWithPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUsersWithPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUsersWithPermissionsResponse({}));
  }

  /**
   * Queries the IDs of all RAM users or RAM roles to which a Role-based Access Control (RBAC) role is assigned.
   * 
   * @param request - DescribeUsersWithPermissionsRequest
   * @returns DescribeUsersWithPermissionsResponse
   */
  async describeUsersWithPermissions(request: $_model.DescribeUsersWithPermissionsRequest): Promise<$_model.DescribeUsersWithPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUsersWithPermissionsWithOptions(request, runtime);
  }

  /**
   * Queries the virtual machines (VMs) that are added to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI DescribeVMsInServiceMesh is deprecated
   * 
   * @param request - DescribeVMsInServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVMsInServiceMeshResponse
   */
  async describeVMsInServiceMeshWithOptions(request: $_model.DescribeVMsInServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVMsInServiceMeshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVMsInServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVMsInServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVMsInServiceMeshResponse({}));
  }

  /**
   * Queries the virtual machines (VMs) that are added to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI DescribeVMsInServiceMesh is deprecated
   * 
   * @param request - DescribeVMsInServiceMeshRequest
   * @returns DescribeVMsInServiceMeshResponse
   */
  // Deprecated
  async describeVMsInServiceMesh(request: $_model.DescribeVMsInServiceMeshRequest): Promise<$_model.DescribeVMsInServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVMsInServiceMeshWithOptions(request, runtime);
  }

  /**
   * Queries a list of vSwitches that are deployed in a specified virtual private cloud (VPC) in a region.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitches",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchesResponse({}));
  }

  /**
   * Queries a list of vSwitches that are deployed in a specified virtual private cloud (VPC) in a region.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * Queries available Service Mesh (ASM) versions when you create an ASM instance.
   * 
   * @param request - DescribeVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVersionsResponse
   */
  async describeVersionsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVersionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVersions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVersionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVersionsResponse({}));
  }

  /**
   * Queries available Service Mesh (ASM) versions when you create an ASM instance.
   * @returns DescribeVersionsResponse
   */
  async describeVersions(): Promise<$_model.DescribeVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVersionsWithOptions(runtime);
  }

  /**
   * Queries the virtual private clouds (VPCs) that are available in a specified region.
   * 
   * @param request - DescribeVpcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcsResponse
   */
  async describeVpcsWithOptions(request: $_model.DescribeVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcs",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcsResponse({}));
  }

  /**
   * Queries the virtual private clouds (VPCs) that are available in a specified region.
   * 
   * @param request - DescribeVpcsRequest
   * @returns DescribeVpcsResponse
   */
  async describeVpcs(request: $_model.DescribeVpcsRequest): Promise<$_model.DescribeVpcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  /**
   * Obtains a certificate issued by a certificate authority (CA).
   * 
   * @param request - GetCaCertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCaCertResponse
   */
  async getCaCertWithOptions(request: $_model.GetCaCertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCaCertResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCaCert",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCaCertResponse>(await this.callApi(params, req, runtime), new $_model.GetCaCertResponse({}));
  }

  /**
   * Obtains a certificate issued by a certificate authority (CA).
   * 
   * @param request - GetCaCertRequest
   * @returns GetCaCertResponse
   */
  async getCaCert(request: $_model.GetCaCertRequest): Promise<$_model.GetCaCertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCaCertWithOptions(request, runtime);
  }

  /**
   * Queries a list of workloads specified by a label selector.
   * 
   * @param tmpReq - GetDeploymentBySelectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentBySelectorResponse
   */
  async getDeploymentBySelectorWithOptions(tmpReq: $_model.GetDeploymentBySelectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentBySelectorResponse> {
    tmpReq.validate();
    let request = new $_model.GetDeploymentBySelectorShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "LabelSelector", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.guestCluster)) {
      body["GuestCluster"] = request.guestCluster;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      body["LabelSelector"] = request.labelSelectorShrink;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.mark)) {
      body["Mark"] = request.mark;
    }

    if (!$dara.isNull(request.nameSpace)) {
      body["NameSpace"] = request.nameSpace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentBySelector",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentBySelectorResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentBySelectorResponse({}));
  }

  /**
   * Queries a list of workloads specified by a label selector.
   * 
   * @param request - GetDeploymentBySelectorRequest
   * @returns GetDeploymentBySelectorResponse
   */
  async getDeploymentBySelector(request: $_model.GetDeploymentBySelectorRequest): Promise<$_model.GetDeploymentBySelectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeploymentBySelectorWithOptions(request, runtime);
  }

  /**
   * Queries the Grafana dashboard URL from Application Real-Time Monitoring Service (ARMS).
   * 
   * @param request - GetGrafanaDashboardUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGrafanaDashboardUrlResponse
   */
  async getGrafanaDashboardUrlWithOptions(request: $_model.GetGrafanaDashboardUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGrafanaDashboardUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGrafanaDashboardUrl",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGrafanaDashboardUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetGrafanaDashboardUrlResponse({}));
  }

  /**
   * Queries the Grafana dashboard URL from Application Real-Time Monitoring Service (ARMS).
   * 
   * @param request - GetGrafanaDashboardUrlRequest
   * @returns GetGrafanaDashboardUrlResponse
   */
  async getGrafanaDashboardUrl(request: $_model.GetGrafanaDashboardUrlRequest): Promise<$_model.GetGrafanaDashboardUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGrafanaDashboardUrlWithOptions(request, runtime);
  }

  /**
   * 描述ServiceEndpoints信息
   * 
   * @param request - GetRegisteredServiceEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegisteredServiceEndpointsResponse
   */
  async getRegisteredServiceEndpointsWithOptions(request: $_model.GetRegisteredServiceEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegisteredServiceEndpointsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterIds)) {
      body["ClusterIds"] = request.clusterIds;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegisteredServiceEndpoints",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegisteredServiceEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.GetRegisteredServiceEndpointsResponse({}));
  }

  /**
   * 描述ServiceEndpoints信息
   * 
   * @param request - GetRegisteredServiceEndpointsRequest
   * @returns GetRegisteredServiceEndpointsResponse
   */
  async getRegisteredServiceEndpoints(request: $_model.GetRegisteredServiceEndpointsRequest): Promise<$_model.GetRegisteredServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegisteredServiceEndpointsWithOptions(request, runtime);
  }

  /**
   * @param request - GetRegisteredServiceNamespacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegisteredServiceNamespacesResponse
   */
  async getRegisteredServiceNamespacesWithOptions(request: $_model.GetRegisteredServiceNamespacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegisteredServiceNamespacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegisteredServiceNamespaces",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegisteredServiceNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.GetRegisteredServiceNamespacesResponse({}));
  }

  /**
   * @param request - GetRegisteredServiceNamespacesRequest
   * @returns GetRegisteredServiceNamespacesResponse
   */
  async getRegisteredServiceNamespaces(request: $_model.GetRegisteredServiceNamespacesRequest): Promise<$_model.GetRegisteredServiceNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRegisteredServiceNamespacesWithOptions(request, runtime);
  }

  /**
   * Queries detailed information about a lane.
   * 
   * @param request - GetSwimLaneDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSwimLaneDetailResponse
   */
  async getSwimLaneDetailWithOptions(request: $_model.GetSwimLaneDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSwimLaneDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSwimLaneDetail",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSwimLaneDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSwimLaneDetailResponse({}));
  }

  /**
   * Queries detailed information about a lane.
   * 
   * @param request - GetSwimLaneDetailRequest
   * @returns GetSwimLaneDetailResponse
   */
  async getSwimLaneDetail(request: $_model.GetSwimLaneDetailRequest): Promise<$_model.GetSwimLaneDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSwimLaneDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of all lane groups in an Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * @param request - GetSwimLaneGroupListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSwimLaneGroupListResponse
   */
  async getSwimLaneGroupListWithOptions(request: $_model.GetSwimLaneGroupListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSwimLaneGroupListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSwimLaneGroupList",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSwimLaneGroupListResponse>(await this.callApi(params, req, runtime), new $_model.GetSwimLaneGroupListResponse({}));
  }

  /**
   * Queries a list of all lane groups in an Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * @param request - GetSwimLaneGroupListRequest
   * @returns GetSwimLaneGroupListResponse
   */
  async getSwimLaneGroupList(request: $_model.GetSwimLaneGroupListRequest): Promise<$_model.GetSwimLaneGroupListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSwimLaneGroupListWithOptions(request, runtime);
  }

  /**
   * Queries a list of all the lanes in a lane group.
   * 
   * @param request - GetSwimLaneListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSwimLaneListResponse
   */
  async getSwimLaneListWithOptions(request: $_model.GetSwimLaneListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSwimLaneListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSwimLaneList",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSwimLaneListResponse>(await this.callApi(params, req, runtime), new $_model.GetSwimLaneListResponse({}));
  }

  /**
   * Queries a list of all the lanes in a lane group.
   * 
   * @param request - GetSwimLaneListRequest
   * @returns GetSwimLaneListResponse
   */
  async getSwimLaneList(request: $_model.GetSwimLaneListRequest): Promise<$_model.GetSwimLaneListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSwimLaneListWithOptions(request, runtime);
  }

  /**
   * Queries the information about VMs that are added to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI GetVmAppMeshInfo is deprecated
   * 
   * @param request - GetVmAppMeshInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVmAppMeshInfoResponse
   */
  async getVmAppMeshInfoWithOptions(request: $_model.GetVmAppMeshInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVmAppMeshInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVmAppMeshInfo",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVmAppMeshInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetVmAppMeshInfoResponse({}));
  }

  /**
   * Queries the information about VMs that are added to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI GetVmAppMeshInfo is deprecated
   * 
   * @param request - GetVmAppMeshInfoRequest
   * @returns GetVmAppMeshInfoResponse
   */
  // Deprecated
  async getVmAppMeshInfo(request: $_model.GetVmAppMeshInfoRequest): Promise<$_model.GetVmAppMeshInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVmAppMeshInfoWithOptions(request, runtime);
  }

  /**
   * Queries the metadata that is required to add a non-containerized application to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI GetVmMeta is deprecated
   * 
   * @param request - GetVmMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVmMetaResponse
   */
  async getVmMetaWithOptions(request: $_model.GetVmMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVmMetaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVmMeta",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVmMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetVmMetaResponse({}));
  }

  /**
   * Queries the metadata that is required to add a non-containerized application to a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI GetVmMeta is deprecated
   * 
   * @param request - GetVmMetaRequest
   * @returns GetVmMetaResponse
   */
  // Deprecated
  async getVmMeta(request: $_model.GetVmMetaRequest): Promise<$_model.GetVmMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVmMetaWithOptions(request, runtime);
  }

  /**
   * Grants permissions to a Resource Access Management (RAM) user.
   * 
   * @param tmpReq - GrantUserPermissionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantUserPermissionsResponse
   */
  async grantUserPermissionsWithOptions(tmpReq: $_model.GrantUserPermissionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantUserPermissionsResponse> {
    tmpReq.validate();
    let request = new $_model.GrantUserPermissionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subAccountUserIds)) {
      request.subAccountUserIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subAccountUserIds, "SubAccountUserIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permissions)) {
      body["Permissions"] = request.permissions;
    }

    if (!$dara.isNull(request.subAccountUserId)) {
      body["SubAccountUserId"] = request.subAccountUserId;
    }

    if (!$dara.isNull(request.subAccountUserIdsShrink)) {
      body["SubAccountUserIds"] = request.subAccountUserIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantUserPermissions",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantUserPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.GrantUserPermissionsResponse({}));
  }

  /**
   * Grants permissions to a Resource Access Management (RAM) user.
   * 
   * @param request - GrantUserPermissionsRequest
   * @returns GrantUserPermissionsResponse
   */
  async grantUserPermissions(request: $_model.GrantUserPermissionsRequest): Promise<$_model.GrantUserPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantUserPermissionsWithOptions(request, runtime);
  }

  /**
   * 列举所有服务账号
   * 
   * @param request - ListServiceAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceAccountsResponse
   */
  async listServiceAccountsWithOptions(request: $_model.ListServiceAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceAccountsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceAccounts",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceAccountsResponse({}));
  }

  /**
   * 列举所有服务账号
   * 
   * @param request - ListServiceAccountsRequest
   * @returns ListServiceAccountsResponse
   */
  async listServiceAccounts(request: $_model.ListServiceAccountsRequest): Promise<$_model.ListServiceAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceAccountsWithOptions(request, runtime);
  }

  /**
   * Queries user tags on a Service Mesh (ASM) instance.
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
      version: "2020-01-11",
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
   * Queries user tags on a Service Mesh (ASM) instance.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of all waypoint proxies in a namespace of a cluster on the data plane.
   * 
   * @param request - ListWaypointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWaypointsResponse
   */
  async listWaypointsWithOptions(request: $_model.ListWaypointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListWaypointsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.continue)) {
      body["Continue"] = request.continue;
    }

    if (!$dara.isNull(request.limit)) {
      body["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWaypoints",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWaypointsResponse>(await this.callApi(params, req, runtime), new $_model.ListWaypointsResponse({}));
  }

  /**
   * Queries the configurations of all waypoint proxies in a namespace of a cluster on the data plane.
   * 
   * @param request - ListWaypointsRequest
   * @returns ListWaypointsResponse
   */
  async listWaypoints(request: $_model.ListWaypointsRequest): Promise<$_model.ListWaypointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listWaypointsWithOptions(request, runtime);
  }

  /**
   * ModifyApiServerEipResource
   * 
   * @param request - ModifyApiServerEipResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApiServerEipResourceResponse
   */
  async modifyApiServerEipResourceWithOptions(request: $_model.ModifyApiServerEipResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApiServerEipResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiServerEipId)) {
      body["ApiServerEipId"] = request.apiServerEipId;
    }

    if (!$dara.isNull(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApiServerEipResource",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApiServerEipResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApiServerEipResourceResponse({}));
  }

  /**
   * ModifyApiServerEipResource
   * 
   * @param request - ModifyApiServerEipResourceRequest
   * @returns ModifyApiServerEipResourceResponse
   */
  async modifyApiServerEipResource(request: $_model.ModifyApiServerEipResourceRequest): Promise<$_model.ModifyApiServerEipResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApiServerEipResourceWithOptions(request, runtime);
  }

  /**
   * ModifyPilotEipResource
   * 
   * @param request - ModifyPilotEipResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPilotEipResourceResponse
   */
  async modifyPilotEipResourceWithOptions(request: $_model.ModifyPilotEipResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPilotEipResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eipId)) {
      body["EipId"] = request.eipId;
    }

    if (!$dara.isNull(request.isCanary)) {
      body["IsCanary"] = request.isCanary;
    }

    if (!$dara.isNull(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPilotEipResource",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPilotEipResourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPilotEipResourceResponse({}));
  }

  /**
   * ModifyPilotEipResource
   * 
   * @param request - ModifyPilotEipResourceRequest
   * @returns ModifyPilotEipResourceResponse
   */
  async modifyPilotEipResource(request: $_model.ModifyPilotEipResourceRequest): Promise<$_model.ModifyPilotEipResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPilotEipResourceWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a Service Mesh (ASM) instance.
   * 
   * @param request - ModifyServiceMeshNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceMeshNameResponse
   */
  async modifyServiceMeshNameWithOptions(request: $_model.ModifyServiceMeshNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyServiceMeshNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyServiceMeshName",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyServiceMeshNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyServiceMeshNameResponse({}));
  }

  /**
   * Modifies the name of a Service Mesh (ASM) instance.
   * 
   * @param request - ModifyServiceMeshNameRequest
   * @returns ModifyServiceMeshNameResponse
   */
  async modifyServiceMeshName(request: $_model.ModifyServiceMeshNameRequest): Promise<$_model.ModifyServiceMeshNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceMeshNameWithOptions(request, runtime);
  }

  /**
   * Recreates a project that is used to store audit logs. After mesh audit is enabled, if you delete the log project that stores audit logs by mistake, you can recreate a project for storing audit logs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods of Simple Log Service. For more information, visit the [pricing page](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1\\&spm=a2796.7960336.3034855210.1.44e6b91aaSp2M7#/commodity/vm_intl).
   * 
   * @param request - ReActivateAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReActivateAuditResponse
   */
  async reActivateAuditWithOptions(request: $_model.ReActivateAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReActivateAuditResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReActivateAudit",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReActivateAuditResponse>(await this.callApi(params, req, runtime), new $_model.ReActivateAuditResponse({}));
  }

  /**
   * Recreates a project that is used to store audit logs. After mesh audit is enabled, if you delete the log project that stores audit logs by mistake, you can recreate a project for storing audit logs.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods of Simple Log Service. For more information, visit the [pricing page](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1\\&spm=a2796.7960336.3034855210.1.44e6b91aaSp2M7#/commodity/vm_intl).
   * 
   * @param request - ReActivateAuditRequest
   * @returns ReActivateAuditResponse
   */
  async reActivateAudit(request: $_model.ReActivateAuditRequest): Promise<$_model.ReActivateAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reActivateAuditWithOptions(request, runtime);
  }

  /**
   * Removes a cluster from a Service Mesh (ASM) instance.
   * 
   * @param request - RemoveClusterFromServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterFromServiceMeshResponse
   */
  async removeClusterFromServiceMeshWithOptions(request: $_model.RemoveClusterFromServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClusterFromServiceMeshResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.reserveNamespace)) {
      body["ReserveNamespace"] = request.reserveNamespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveClusterFromServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveClusterFromServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClusterFromServiceMeshResponse({}));
  }

  /**
   * Removes a cluster from a Service Mesh (ASM) instance.
   * 
   * @param request - RemoveClusterFromServiceMeshRequest
   * @returns RemoveClusterFromServiceMeshResponse
   */
  async removeClusterFromServiceMesh(request: $_model.RemoveClusterFromServiceMeshRequest): Promise<$_model.RemoveClusterFromServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeClusterFromServiceMeshWithOptions(request, runtime);
  }

  /**
   * Removes a virtual machine (VM) from a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI RemoveVMFromServiceMesh is deprecated
   * 
   * @param request - RemoveVMFromServiceMeshRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveVMFromServiceMeshResponse
   */
  async removeVMFromServiceMeshWithOptions(request: $_model.RemoveVMFromServiceMeshRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveVMFromServiceMeshResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ecsId)) {
      query["EcsId"] = request.ecsId;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveVMFromServiceMesh",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveVMFromServiceMeshResponse>(await this.callApi(params, req, runtime), new $_model.RemoveVMFromServiceMeshResponse({}));
  }

  /**
   * Removes a virtual machine (VM) from a Service Mesh (ASM) instance.
   * 
   * @deprecated OpenAPI RemoveVMFromServiceMesh is deprecated
   * 
   * @param request - RemoveVMFromServiceMeshRequest
   * @returns RemoveVMFromServiceMeshResponse
   */
  // Deprecated
  async removeVMFromServiceMesh(request: $_model.RemoveVMFromServiceMeshRequest): Promise<$_model.RemoveVMFromServiceMeshResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeVMFromServiceMeshWithOptions(request, runtime);
  }

  /**
   * Revokes the kubeconfig file of a Service Mesh (ASM) instance and generates a new kubeconfig file.
   * 
   * @param request - RevokeKubeconfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeKubeconfigResponse
   */
  async revokeKubeconfigWithOptions(request: $_model.RevokeKubeconfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeKubeconfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.privateIpAddress)) {
      body["PrivateIpAddress"] = request.privateIpAddress;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeKubeconfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeKubeconfigResponse>(await this.callApi(params, req, runtime), new $_model.RevokeKubeconfigResponse({}));
  }

  /**
   * Revokes the kubeconfig file of a Service Mesh (ASM) instance and generates a new kubeconfig file.
   * 
   * @param request - RevokeKubeconfigRequest
   * @returns RevokeKubeconfigResponse
   */
  async revokeKubeconfig(request: $_model.RevokeKubeconfigRequest): Promise<$_model.RevokeKubeconfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeKubeconfigWithOptions(request, runtime);
  }

  /**
   * Adds or modifies user tags on a resource.
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
      version: "2020-01-11",
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
   * Adds or modifies user tags on a resource.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Deletes user tags on a Service Mesh (ASM) instance.
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
      version: "2020-01-11",
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
   * Deletes user tags on a Service Mesh (ASM) instance.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a Service Mesh (ASM) gateway.
   * 
   * @param request - UpdateASMGatewayRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateASMGatewayResponse
   */
  async updateASMGatewayWithOptions(request: $_model.UpdateASMGatewayRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateASMGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["Body"] = request.body;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateASMGateway",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateASMGatewayResponse>(await this.callApi(params, req, runtime), new $_model.UpdateASMGatewayResponse({}));
  }

  /**
   * Updates a Service Mesh (ASM) gateway.
   * 
   * @param request - UpdateASMGatewayRequest
   * @returns UpdateASMGatewayResponse
   */
  async updateASMGateway(request: $_model.UpdateASMGatewayRequest): Promise<$_model.UpdateASMGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateASMGatewayWithOptions(request, runtime);
  }

  /**
   * Updates imported services on a Service Mesh (ASM) gateway to import or delete upstream services associated with the gateway.
   * 
   * @param request - UpdateASMGatewayImportedServicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateASMGatewayImportedServicesResponse
   */
  async updateASMGatewayImportedServicesWithOptions(request: $_model.UpdateASMGatewayImportedServicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateASMGatewayImportedServicesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ASMGatewayName)) {
      body["ASMGatewayName"] = request.ASMGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.serviceNames)) {
      body["ServiceNames"] = request.serviceNames;
    }

    if (!$dara.isNull(request.serviceNamespace)) {
      body["ServiceNamespace"] = request.serviceNamespace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateASMGatewayImportedServices",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateASMGatewayImportedServicesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateASMGatewayImportedServicesResponse({}));
  }

  /**
   * Updates imported services on a Service Mesh (ASM) gateway to import or delete upstream services associated with the gateway.
   * 
   * @param request - UpdateASMGatewayImportedServicesRequest
   * @returns UpdateASMGatewayImportedServicesResponse
   */
  async updateASMGatewayImportedServices(request: $_model.UpdateASMGatewayImportedServicesRequest): Promise<$_model.UpdateASMGatewayImportedServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateASMGatewayImportedServicesWithOptions(request, runtime);
  }

  /**
   * Synchronizes namespaces of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - UpdateASMNamespaceFromGuestClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateASMNamespaceFromGuestClusterResponse
   */
  async updateASMNamespaceFromGuestClusterWithOptions(request: $_model.UpdateASMNamespaceFromGuestClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateASMNamespaceFromGuestClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.k8sClusterId)) {
      body["K8sClusterId"] = request.k8sClusterId;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateASMNamespaceFromGuestCluster",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateASMNamespaceFromGuestClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateASMNamespaceFromGuestClusterResponse({}));
  }

  /**
   * Synchronizes namespaces of a Kubernetes cluster that is added to a Service Mesh (ASM) instance.
   * 
   * @param request - UpdateASMNamespaceFromGuestClusterRequest
   * @returns UpdateASMNamespaceFromGuestClusterResponse
   */
  async updateASMNamespaceFromGuestCluster(request: $_model.UpdateASMNamespaceFromGuestClusterRequest): Promise<$_model.UpdateASMNamespaceFromGuestClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateASMNamespaceFromGuestClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the configuration for collecting control plane logs.
   * 
   * @param request - UpdateControlPlaneLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateControlPlaneLogConfigResponse
   */
  async updateControlPlaneLogConfigWithOptions(request: $_model.UpdateControlPlaneLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateControlPlaneLogConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.logTTLInDay)) {
      body["LogTTLInDay"] = request.logTTLInDay;
    }

    if (!$dara.isNull(request.project)) {
      body["Project"] = request.project;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateControlPlaneLogConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateControlPlaneLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateControlPlaneLogConfigResponse({}));
  }

  /**
   * Modifies the configuration for collecting control plane logs.
   * 
   * @param request - UpdateControlPlaneLogConfigRequest
   * @returns UpdateControlPlaneLogConfigResponse
   */
  async updateControlPlaneLogConfig(request: $_model.UpdateControlPlaneLogConfigRequest): Promise<$_model.UpdateControlPlaneLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateControlPlaneLogConfigWithOptions(request, runtime);
  }

  /**
   * 更新Guest Cluster配置
   * 
   * @param request - UpdateGuestClusterConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGuestClusterConfigResponse
   */
  async updateGuestClusterConfigWithOptions(request: $_model.UpdateGuestClusterConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGuestClusterConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.guestClusterId)) {
      body["GuestClusterId"] = request.guestClusterId;
    }

    if (!$dara.isNull(request.SMCEnabled)) {
      body["SMCEnabled"] = request.SMCEnabled;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGuestClusterConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGuestClusterConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGuestClusterConfigResponse({}));
  }

  /**
   * 更新Guest Cluster配置
   * 
   * @param request - UpdateGuestClusterConfigRequest
   * @returns UpdateGuestClusterConfigResponse
   */
  async updateGuestClusterConfig(request: $_model.UpdateGuestClusterConfigRequest): Promise<$_model.UpdateGuestClusterConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGuestClusterConfigWithOptions(request, runtime);
  }

  /**
   * Updates a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param tmpReq - UpdateIstioGatewayRoutesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIstioGatewayRoutesResponse
   */
  async updateIstioGatewayRoutesWithOptions(tmpReq: $_model.UpdateIstioGatewayRoutesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIstioGatewayRoutesResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateIstioGatewayRoutesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.gatewayRoute)) {
      request.gatewayRouteShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.gatewayRoute, "GatewayRoute", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.gatewayRouteShrink)) {
      body["GatewayRoute"] = request.gatewayRouteShrink;
    }

    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIstioGatewayRoutes",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIstioGatewayRoutesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIstioGatewayRoutesResponse({}));
  }

  /**
   * Updates a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - UpdateIstioGatewayRoutesRequest
   * @returns UpdateIstioGatewayRoutesResponse
   */
  async updateIstioGatewayRoutes(request: $_model.UpdateIstioGatewayRoutesRequest): Promise<$_model.UpdateIstioGatewayRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIstioGatewayRoutesWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateIstioInjectionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIstioInjectionConfigResponse
   */
  async updateIstioInjectionConfigWithOptions(request: $_model.UpdateIstioInjectionConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIstioInjectionConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataPlaneMode)) {
      body["DataPlaneMode"] = request.dataPlaneMode;
    }

    if (!$dara.isNull(request.enableIstioInjection)) {
      body["EnableIstioInjection"] = request.enableIstioInjection;
    }

    if (!$dara.isNull(request.enableSidecarSetInjection)) {
      body["EnableSidecarSetInjection"] = request.enableSidecarSetInjection;
    }

    if (!$dara.isNull(request.istioRev)) {
      body["IstioRev"] = request.istioRev;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIstioInjectionConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIstioInjectionConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIstioInjectionConfigResponse({}));
  }

  /**
   * @param request - UpdateIstioInjectionConfigRequest
   * @returns UpdateIstioInjectionConfigResponse
   */
  async updateIstioInjectionConfig(request: $_model.UpdateIstioInjectionConfigRequest): Promise<$_model.UpdateIstioInjectionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIstioInjectionConfigWithOptions(request, runtime);
  }

  /**
   * Updates the information about a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - UpdateIstioRouteAdditionalStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIstioRouteAdditionalStatusResponse
   */
  async updateIstioRouteAdditionalStatusWithOptions(request: $_model.UpdateIstioRouteAdditionalStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIstioRouteAdditionalStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.routeName)) {
      query["RouteName"] = request.routeName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.istioGatewayName)) {
      body["IstioGatewayName"] = request.istioGatewayName;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIstioRouteAdditionalStatus",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIstioRouteAdditionalStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIstioRouteAdditionalStatusResponse({}));
  }

  /**
   * Updates the information about a routing rule for a Service Mesh (ASM) gateway.
   * 
   * @param request - UpdateIstioRouteAdditionalStatusRequest
   * @returns UpdateIstioRouteAdditionalStatusResponse
   */
  async updateIstioRouteAdditionalStatus(request: $_model.UpdateIstioRouteAdditionalStatusRequest): Promise<$_model.UpdateIstioRouteAdditionalStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIstioRouteAdditionalStatusWithOptions(request, runtime);
  }

  /**
   * Updates the settings of whether to enable the Kubernetes API on the data plane to access Istio resources.
   * 
   * @param request - UpdateMeshCRAggregationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMeshCRAggregationResponse
   */
  async updateMeshCRAggregationWithOptions(request: $_model.UpdateMeshCRAggregationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMeshCRAggregationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.CPULimit)) {
      body["CPULimit"] = request.CPULimit;
    }

    if (!$dara.isNull(request.CPURequirement)) {
      body["CPURequirement"] = request.CPURequirement;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.memoryLimit)) {
      body["MemoryLimit"] = request.memoryLimit;
    }

    if (!$dara.isNull(request.memoryRequirement)) {
      body["MemoryRequirement"] = request.memoryRequirement;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.usePublicApiServer)) {
      body["UsePublicApiServer"] = request.usePublicApiServer;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMeshCRAggregation",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMeshCRAggregationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMeshCRAggregationResponse({}));
  }

  /**
   * Updates the settings of whether to enable the Kubernetes API on the data plane to access Istio resources.
   * 
   * @param request - UpdateMeshCRAggregationRequest
   * @returns UpdateMeshCRAggregationResponse
   */
  async updateMeshCRAggregation(request: $_model.UpdateMeshCRAggregationRequest): Promise<$_model.UpdateMeshCRAggregationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMeshCRAggregationWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of a Service Mesh (ASM) instance.
   * 
   * @param request - UpdateMeshFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMeshFeatureResponse
   */
  async updateMeshFeatureWithOptions(request: $_model.UpdateMeshFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMeshFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accessLogGatewayEnabled)) {
      query["AccessLogGatewayEnabled"] = request.accessLogGatewayEnabled;
    }

    if (!$dara.isNull(request.accessLogSidecarEnabled)) {
      query["AccessLogSidecarEnabled"] = request.accessLogSidecarEnabled;
    }

    if (!$dara.isNull(request.labelsForOffloadedWorkloads)) {
      query["LabelsForOffloadedWorkloads"] = request.labelsForOffloadedWorkloads;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessLogEnabled)) {
      body["AccessLogEnabled"] = request.accessLogEnabled;
    }

    if (!$dara.isNull(request.accessLogFile)) {
      body["AccessLogFile"] = request.accessLogFile;
    }

    if (!$dara.isNull(request.accessLogFormat)) {
      body["AccessLogFormat"] = request.accessLogFormat;
    }

    if (!$dara.isNull(request.accessLogGatewayLifecycle)) {
      body["AccessLogGatewayLifecycle"] = request.accessLogGatewayLifecycle;
    }

    if (!$dara.isNull(request.accessLogProject)) {
      body["AccessLogProject"] = request.accessLogProject;
    }

    if (!$dara.isNull(request.accessLogServiceEnabled)) {
      body["AccessLogServiceEnabled"] = request.accessLogServiceEnabled;
    }

    if (!$dara.isNull(request.accessLogServiceHost)) {
      body["AccessLogServiceHost"] = request.accessLogServiceHost;
    }

    if (!$dara.isNull(request.accessLogServicePort)) {
      body["AccessLogServicePort"] = request.accessLogServicePort;
    }

    if (!$dara.isNull(request.accessLogSidecarLifecycle)) {
      body["AccessLogSidecarLifecycle"] = request.accessLogSidecarLifecycle;
    }

    if (!$dara.isNull(request.auditProject)) {
      body["AuditProject"] = request.auditProject;
    }

    if (!$dara.isNull(request.autoInjectionPolicyEnabled)) {
      body["AutoInjectionPolicyEnabled"] = request.autoInjectionPolicyEnabled;
    }

    if (!$dara.isNull(request.CRAggregationEnabled)) {
      body["CRAggregationEnabled"] = request.CRAggregationEnabled;
    }

    if (!$dara.isNull(request.certChain)) {
      body["CertChain"] = request.certChain;
    }

    if (!$dara.isNull(request.clusterSpec)) {
      body["ClusterSpec"] = request.clusterSpec;
    }

    if (!$dara.isNull(request.cniEnabled)) {
      body["CniEnabled"] = request.cniEnabled;
    }

    if (!$dara.isNull(request.cniExcludeNamespaces)) {
      body["CniExcludeNamespaces"] = request.cniExcludeNamespaces;
    }

    if (!$dara.isNull(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.configSourceEnabled)) {
      body["ConfigSourceEnabled"] = request.configSourceEnabled;
    }

    if (!$dara.isNull(request.configSourceNacosID)) {
      body["ConfigSourceNacosID"] = request.configSourceNacosID;
    }

    if (!$dara.isNull(request.customizedPrometheus)) {
      body["CustomizedPrometheus"] = request.customizedPrometheus;
    }

    if (!$dara.isNull(request.customizedZipkin)) {
      body["CustomizedZipkin"] = request.customizedZipkin;
    }

    if (!$dara.isNull(request.DNSProxyingEnabled)) {
      body["DNSProxyingEnabled"] = request.DNSProxyingEnabled;
    }

    if (!$dara.isNull(request.defaultComponentsScheduleConfig)) {
      body["DefaultComponentsScheduleConfig"] = request.defaultComponentsScheduleConfig;
    }

    if (!$dara.isNull(request.discoverySelectors)) {
      body["DiscoverySelectors"] = request.discoverySelectors;
    }

    if (!$dara.isNull(request.dubboFilterEnabled)) {
      body["DubboFilterEnabled"] = request.dubboFilterEnabled;
    }

    if (!$dara.isNull(request.enableAudit)) {
      body["EnableAudit"] = request.enableAudit;
    }

    if (!$dara.isNull(request.enableAutoDiagnosis)) {
      body["EnableAutoDiagnosis"] = request.enableAutoDiagnosis;
    }

    if (!$dara.isNull(request.enableBootstrapXdsAgent)) {
      body["EnableBootstrapXdsAgent"] = request.enableBootstrapXdsAgent;
    }

    if (!$dara.isNull(request.enableCRHistory)) {
      body["EnableCRHistory"] = request.enableCRHistory;
    }

    if (!$dara.isNull(request.enableNamespacesByDefault)) {
      body["EnableNamespacesByDefault"] = request.enableNamespacesByDefault;
    }

    if (!$dara.isNull(request.enableSDSServer)) {
      body["EnableSDSServer"] = request.enableSDSServer;
    }

    if (!$dara.isNull(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!$dara.isNull(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!$dara.isNull(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!$dara.isNull(request.existingCaCert)) {
      body["ExistingCaCert"] = request.existingCaCert;
    }

    if (!$dara.isNull(request.existingCaKey)) {
      body["ExistingCaKey"] = request.existingCaKey;
    }

    if (!$dara.isNull(request.existingRootCaCert)) {
      body["ExistingRootCaCert"] = request.existingRootCaCert;
    }

    if (!$dara.isNull(request.filterGatewayClusterConfig)) {
      body["FilterGatewayClusterConfig"] = request.filterGatewayClusterConfig;
    }

    if (!$dara.isNull(request.gatewayAPIEnabled)) {
      body["GatewayAPIEnabled"] = request.gatewayAPIEnabled;
    }

    if (!$dara.isNull(request.holdApplicationUntilProxyStarts)) {
      body["HoldApplicationUntilProxyStarts"] = request.holdApplicationUntilProxyStarts;
    }

    if (!$dara.isNull(request.http10Enabled)) {
      body["Http10Enabled"] = request.http10Enabled;
    }

    if (!$dara.isNull(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!$dara.isNull(request.includeInboundPorts)) {
      body["IncludeInboundPorts"] = request.includeInboundPorts;
    }

    if (!$dara.isNull(request.includeOutboundPorts)) {
      body["IncludeOutboundPorts"] = request.includeOutboundPorts;
    }

    if (!$dara.isNull(request.integrateKiali)) {
      body["IntegrateKiali"] = request.integrateKiali;
    }

    if (!$dara.isNull(request.interceptionMode)) {
      body["InterceptionMode"] = request.interceptionMode;
    }

    if (!$dara.isNull(request.kialiArmsAuthTokens)) {
      body["KialiArmsAuthTokens"] = request.kialiArmsAuthTokens;
    }

    if (!$dara.isNull(request.kialiEnabled)) {
      body["KialiEnabled"] = request.kialiEnabled;
    }

    if (!$dara.isNull(request.kialiServiceAnnotations)) {
      body["KialiServiceAnnotations"] = request.kialiServiceAnnotations;
    }

    if (!$dara.isNull(request.lifecycle)) {
      body["Lifecycle"] = request.lifecycle;
    }

    if (!$dara.isNull(request.localityLBConf)) {
      body["LocalityLBConf"] = request.localityLBConf;
    }

    if (!$dara.isNull(request.localityLoadBalancing)) {
      body["LocalityLoadBalancing"] = request.localityLoadBalancing;
    }

    if (!$dara.isNull(request.logLevel)) {
      body["LogLevel"] = request.logLevel;
    }

    if (!$dara.isNull(request.MSEEnabled)) {
      body["MSEEnabled"] = request.MSEEnabled;
    }

    if (!$dara.isNull(request.multiBufferEnabled)) {
      body["MultiBufferEnabled"] = request.multiBufferEnabled;
    }

    if (!$dara.isNull(request.multiBufferPollDelay)) {
      body["MultiBufferPollDelay"] = request.multiBufferPollDelay;
    }

    if (!$dara.isNull(request.mysqlFilterEnabled)) {
      body["MysqlFilterEnabled"] = request.mysqlFilterEnabled;
    }

    if (!$dara.isNull(request.NFDEnabled)) {
      body["NFDEnabled"] = request.NFDEnabled;
    }

    if (!$dara.isNull(request.NFDLabelPruned)) {
      body["NFDLabelPruned"] = request.NFDLabelPruned;
    }

    if (!$dara.isNull(request.OPAInjectorCPULimit)) {
      body["OPAInjectorCPULimit"] = request.OPAInjectorCPULimit;
    }

    if (!$dara.isNull(request.OPAInjectorCPURequirement)) {
      body["OPAInjectorCPURequirement"] = request.OPAInjectorCPURequirement;
    }

    if (!$dara.isNull(request.OPAInjectorMemoryLimit)) {
      body["OPAInjectorMemoryLimit"] = request.OPAInjectorMemoryLimit;
    }

    if (!$dara.isNull(request.OPAInjectorMemoryRequirement)) {
      body["OPAInjectorMemoryRequirement"] = request.OPAInjectorMemoryRequirement;
    }

    if (!$dara.isNull(request.OPALimitCPU)) {
      body["OPALimitCPU"] = request.OPALimitCPU;
    }

    if (!$dara.isNull(request.OPALimitMemory)) {
      body["OPALimitMemory"] = request.OPALimitMemory;
    }

    if (!$dara.isNull(request.OPALogLevel)) {
      body["OPALogLevel"] = request.OPALogLevel;
    }

    if (!$dara.isNull(request.OPARequestCPU)) {
      body["OPARequestCPU"] = request.OPARequestCPU;
    }

    if (!$dara.isNull(request.OPARequestMemory)) {
      body["OPARequestMemory"] = request.OPARequestMemory;
    }

    if (!$dara.isNull(request.OPAScopeInjected)) {
      body["OPAScopeInjected"] = request.OPAScopeInjected;
    }

    if (!$dara.isNull(request.opaEnabled)) {
      body["OpaEnabled"] = request.opaEnabled;
    }

    if (!$dara.isNull(request.openAgentPolicy)) {
      body["OpenAgentPolicy"] = request.openAgentPolicy;
    }

    if (!$dara.isNull(request.outboundTrafficPolicy)) {
      body["OutboundTrafficPolicy"] = request.outboundTrafficPolicy;
    }

    if (!$dara.isNull(request.pilotEnableQuicListeners)) {
      body["PilotEnableQuicListeners"] = request.pilotEnableQuicListeners;
    }

    if (!$dara.isNull(request.prometheusUrl)) {
      body["PrometheusUrl"] = request.prometheusUrl;
    }

    if (!$dara.isNull(request.proxyInitCPUResourceLimit)) {
      body["ProxyInitCPUResourceLimit"] = request.proxyInitCPUResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitCPUResourceRequest)) {
      body["ProxyInitCPUResourceRequest"] = request.proxyInitCPUResourceRequest;
    }

    if (!$dara.isNull(request.proxyInitMemoryResourceLimit)) {
      body["ProxyInitMemoryResourceLimit"] = request.proxyInitMemoryResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitMemoryResourceRequest)) {
      body["ProxyInitMemoryResourceRequest"] = request.proxyInitMemoryResourceRequest;
    }

    if (!$dara.isNull(request.proxyLimitCPU)) {
      body["ProxyLimitCPU"] = request.proxyLimitCPU;
    }

    if (!$dara.isNull(request.proxyLimitMemory)) {
      body["ProxyLimitMemory"] = request.proxyLimitMemory;
    }

    if (!$dara.isNull(request.proxyRequestCPU)) {
      body["ProxyRequestCPU"] = request.proxyRequestCPU;
    }

    if (!$dara.isNull(request.proxyRequestMemory)) {
      body["ProxyRequestMemory"] = request.proxyRequestMemory;
    }

    if (!$dara.isNull(request.proxyStatsMatcher)) {
      body["ProxyStatsMatcher"] = request.proxyStatsMatcher;
    }

    if (!$dara.isNull(request.redisFilterEnabled)) {
      body["RedisFilterEnabled"] = request.redisFilterEnabled;
    }

    if (!$dara.isNull(request.SMCEnabled)) {
      body["SMCEnabled"] = request.SMCEnabled;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.sidecarInjectorLimitCPU)) {
      body["SidecarInjectorLimitCPU"] = request.sidecarInjectorLimitCPU;
    }

    if (!$dara.isNull(request.sidecarInjectorLimitMemory)) {
      body["SidecarInjectorLimitMemory"] = request.sidecarInjectorLimitMemory;
    }

    if (!$dara.isNull(request.sidecarInjectorRequestCPU)) {
      body["SidecarInjectorRequestCPU"] = request.sidecarInjectorRequestCPU;
    }

    if (!$dara.isNull(request.sidecarInjectorRequestMemory)) {
      body["SidecarInjectorRequestMemory"] = request.sidecarInjectorRequestMemory;
    }

    if (!$dara.isNull(request.sidecarInjectorWebhookAsYaml)) {
      body["SidecarInjectorWebhookAsYaml"] = request.sidecarInjectorWebhookAsYaml;
    }

    if (!$dara.isNull(request.telemetry)) {
      body["Telemetry"] = request.telemetry;
    }

    if (!$dara.isNull(request.terminationDrainDuration)) {
      body["TerminationDrainDuration"] = request.terminationDrainDuration;
    }

    if (!$dara.isNull(request.thriftFilterEnabled)) {
      body["ThriftFilterEnabled"] = request.thriftFilterEnabled;
    }

    if (!$dara.isNull(request.traceCustomTags)) {
      body["TraceCustomTags"] = request.traceCustomTags;
    }

    if (!$dara.isNull(request.traceMaxPathTagLength)) {
      body["TraceMaxPathTagLength"] = request.traceMaxPathTagLength;
    }

    if (!$dara.isNull(request.traceSampling)) {
      body["TraceSampling"] = request.traceSampling;
    }

    if (!$dara.isNull(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    if (!$dara.isNull(request.tracingOnExtZipkinLimitCPU)) {
      body["TracingOnExtZipkinLimitCPU"] = request.tracingOnExtZipkinLimitCPU;
    }

    if (!$dara.isNull(request.tracingOnExtZipkinLimitMemory)) {
      body["TracingOnExtZipkinLimitMemory"] = request.tracingOnExtZipkinLimitMemory;
    }

    if (!$dara.isNull(request.tracingOnExtZipkinReplicaCount)) {
      body["TracingOnExtZipkinReplicaCount"] = request.tracingOnExtZipkinReplicaCount;
    }

    if (!$dara.isNull(request.tracingOnExtZipkinRequestCPU)) {
      body["TracingOnExtZipkinRequestCPU"] = request.tracingOnExtZipkinRequestCPU;
    }

    if (!$dara.isNull(request.tracingOnExtZipkinRequestMemory)) {
      body["TracingOnExtZipkinRequestMemory"] = request.tracingOnExtZipkinRequestMemory;
    }

    if (!$dara.isNull(request.webAssemblyFilterEnabled)) {
      body["WebAssemblyFilterEnabled"] = request.webAssemblyFilterEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMeshFeature",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMeshFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMeshFeatureResponse({}));
  }

  /**
   * Updates the configuration of a Service Mesh (ASM) instance.
   * 
   * @param request - UpdateMeshFeatureRequest
   * @returns UpdateMeshFeatureResponse
   */
  async updateMeshFeature(request: $_model.UpdateMeshFeatureRequest): Promise<$_model.UpdateMeshFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMeshFeatureWithOptions(request, runtime);
  }

  /**
   * Updates the network configurations of multiple Kubernetes clusters in a Service Mesh (ASM) instance.
   * 
   * @param tmpReq - UpdateMeshMultiClusterNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMeshMultiClusterNetworkResponse
   */
  async updateMeshMultiClusterNetworkWithOptions(tmpReq: $_model.UpdateMeshMultiClusterNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMeshMultiClusterNetworkResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateMeshMultiClusterNetworkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.multiClusterNetworks)) {
      request.multiClusterNetworksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.multiClusterNetworks, "MultiClusterNetworks", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.multiClusterNetworksShrink)) {
      body["MultiClusterNetworks"] = request.multiClusterNetworksShrink;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMeshMultiClusterNetwork",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMeshMultiClusterNetworkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMeshMultiClusterNetworkResponse({}));
  }

  /**
   * Updates the network configurations of multiple Kubernetes clusters in a Service Mesh (ASM) instance.
   * 
   * @param request - UpdateMeshMultiClusterNetworkRequest
   * @returns UpdateMeshMultiClusterNetworkResponse
   */
  async updateMeshMultiClusterNetwork(request: $_model.UpdateMeshMultiClusterNetworkRequest): Promise<$_model.UpdateMeshMultiClusterNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMeshMultiClusterNetworkWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of sidecar proxies at the namespace level.
   * 
   * @param tmpReq - UpdateNamespaceScopeSidecarConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceScopeSidecarConfigResponse
   */
  async updateNamespaceScopeSidecarConfigWithOptions(tmpReq: $_model.UpdateNamespaceScopeSidecarConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceScopeSidecarConfigResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateNamespaceScopeSidecarConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scaledSidecarResource)) {
      request.scaledSidecarResourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scaledSidecarResource, "ScaledSidecarResource", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.concurrency)) {
      body["Concurrency"] = request.concurrency;
    }

    if (!$dara.isNull(request.enableCoreDump)) {
      body["EnableCoreDump"] = request.enableCoreDump;
    }

    if (!$dara.isNull(request.excludeIPRanges)) {
      body["ExcludeIPRanges"] = request.excludeIPRanges;
    }

    if (!$dara.isNull(request.excludeInboundPorts)) {
      body["ExcludeInboundPorts"] = request.excludeInboundPorts;
    }

    if (!$dara.isNull(request.excludeOutboundPorts)) {
      body["ExcludeOutboundPorts"] = request.excludeOutboundPorts;
    }

    if (!$dara.isNull(request.holdApplicationUntilProxyStarts)) {
      body["HoldApplicationUntilProxyStarts"] = request.holdApplicationUntilProxyStarts;
    }

    if (!$dara.isNull(request.includeIPRanges)) {
      body["IncludeIPRanges"] = request.includeIPRanges;
    }

    if (!$dara.isNull(request.includeInboundPorts)) {
      body["IncludeInboundPorts"] = request.includeInboundPorts;
    }

    if (!$dara.isNull(request.includeOutboundPorts)) {
      body["IncludeOutboundPorts"] = request.includeOutboundPorts;
    }

    if (!$dara.isNull(request.interceptionMode)) {
      body["InterceptionMode"] = request.interceptionMode;
    }

    if (!$dara.isNull(request.istioDNSProxyEnabled)) {
      body["IstioDNSProxyEnabled"] = request.istioDNSProxyEnabled;
    }

    if (!$dara.isNull(request.lifecycle)) {
      body["Lifecycle"] = request.lifecycle;
    }

    if (!$dara.isNull(request.logLevel)) {
      body["LogLevel"] = request.logLevel;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.postStart)) {
      body["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      body["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.privileged)) {
      body["Privileged"] = request.privileged;
    }

    if (!$dara.isNull(request.proxyInitAckSloCPUResourceLimit)) {
      body["ProxyInitAckSloCPUResourceLimit"] = request.proxyInitAckSloCPUResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitAckSloCPUResourceRequest)) {
      body["ProxyInitAckSloCPUResourceRequest"] = request.proxyInitAckSloCPUResourceRequest;
    }

    if (!$dara.isNull(request.proxyInitAckSloMemoryResourceLimit)) {
      body["ProxyInitAckSloMemoryResourceLimit"] = request.proxyInitAckSloMemoryResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitAckSloMemoryResourceRequest)) {
      body["ProxyInitAckSloMemoryResourceRequest"] = request.proxyInitAckSloMemoryResourceRequest;
    }

    if (!$dara.isNull(request.proxyInitCPUResourceLimit)) {
      body["ProxyInitCPUResourceLimit"] = request.proxyInitCPUResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitCPUResourceRequest)) {
      body["ProxyInitCPUResourceRequest"] = request.proxyInitCPUResourceRequest;
    }

    if (!$dara.isNull(request.proxyInitMemoryResourceLimit)) {
      body["ProxyInitMemoryResourceLimit"] = request.proxyInitMemoryResourceLimit;
    }

    if (!$dara.isNull(request.proxyInitMemoryResourceRequest)) {
      body["ProxyInitMemoryResourceRequest"] = request.proxyInitMemoryResourceRequest;
    }

    if (!$dara.isNull(request.proxyMetadata)) {
      body["ProxyMetadata"] = request.proxyMetadata;
    }

    if (!$dara.isNull(request.proxyStatsMatcher)) {
      body["ProxyStatsMatcher"] = request.proxyStatsMatcher;
    }

    if (!$dara.isNull(request.readinessFailureThreshold)) {
      body["ReadinessFailureThreshold"] = request.readinessFailureThreshold;
    }

    if (!$dara.isNull(request.readinessInitialDelaySeconds)) {
      body["ReadinessInitialDelaySeconds"] = request.readinessInitialDelaySeconds;
    }

    if (!$dara.isNull(request.readinessPeriodSeconds)) {
      body["ReadinessPeriodSeconds"] = request.readinessPeriodSeconds;
    }

    if (!$dara.isNull(request.runtimeValues)) {
      body["RuntimeValues"] = request.runtimeValues;
    }

    if (!$dara.isNull(request.SMCEnabled)) {
      body["SMCEnabled"] = request.SMCEnabled;
    }

    if (!$dara.isNull(request.scaledSidecarResourceShrink)) {
      body["ScaledSidecarResource"] = request.scaledSidecarResourceShrink;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.sidecarProxyAckSloCPUResourceLimit)) {
      body["SidecarProxyAckSloCPUResourceLimit"] = request.sidecarProxyAckSloCPUResourceLimit;
    }

    if (!$dara.isNull(request.sidecarProxyAckSloCPUResourceRequest)) {
      body["SidecarProxyAckSloCPUResourceRequest"] = request.sidecarProxyAckSloCPUResourceRequest;
    }

    if (!$dara.isNull(request.sidecarProxyAckSloMemoryResourceLimit)) {
      body["SidecarProxyAckSloMemoryResourceLimit"] = request.sidecarProxyAckSloMemoryResourceLimit;
    }

    if (!$dara.isNull(request.sidecarProxyAckSloMemoryResourceRequest)) {
      body["SidecarProxyAckSloMemoryResourceRequest"] = request.sidecarProxyAckSloMemoryResourceRequest;
    }

    if (!$dara.isNull(request.sidecarProxyCPUResourceLimit)) {
      body["SidecarProxyCPUResourceLimit"] = request.sidecarProxyCPUResourceLimit;
    }

    if (!$dara.isNull(request.sidecarProxyCPUResourceRequest)) {
      body["SidecarProxyCPUResourceRequest"] = request.sidecarProxyCPUResourceRequest;
    }

    if (!$dara.isNull(request.sidecarProxyMemoryResourceLimit)) {
      body["SidecarProxyMemoryResourceLimit"] = request.sidecarProxyMemoryResourceLimit;
    }

    if (!$dara.isNull(request.sidecarProxyMemoryResourceRequest)) {
      body["SidecarProxyMemoryResourceRequest"] = request.sidecarProxyMemoryResourceRequest;
    }

    if (!$dara.isNull(request.terminationDrainDuration)) {
      body["TerminationDrainDuration"] = request.terminationDrainDuration;
    }

    if (!$dara.isNull(request.tracing)) {
      body["Tracing"] = request.tracing;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespaceScopeSidecarConfig",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceScopeSidecarConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceScopeSidecarConfigResponse({}));
  }

  /**
   * Updates the configurations of sidecar proxies at the namespace level.
   * 
   * @param request - UpdateNamespaceScopeSidecarConfigRequest
   * @returns UpdateNamespaceScopeSidecarConfigResponse
   */
  async updateNamespaceScopeSidecarConfig(request: $_model.UpdateNamespaceScopeSidecarConfigRequest): Promise<$_model.UpdateNamespaceScopeSidecarConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceScopeSidecarConfigWithOptions(request, runtime);
  }

  /**
   * Updates the information about a lane.
   * 
   * @param request - UpdateSwimLaneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSwimLaneResponse
   */
  async updateSwimLaneWithOptions(request: $_model.UpdateSwimLaneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSwimLaneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labelSelectorKey)) {
      body["LabelSelectorKey"] = request.labelSelectorKey;
    }

    if (!$dara.isNull(request.labelSelectorValue)) {
      body["LabelSelectorValue"] = request.labelSelectorValue;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!$dara.isNull(request.swimLaneName)) {
      body["SwimLaneName"] = request.swimLaneName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSwimLane",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSwimLaneResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSwimLaneResponse({}));
  }

  /**
   * Updates the information about a lane.
   * 
   * @param request - UpdateSwimLaneRequest
   * @returns UpdateSwimLaneResponse
   */
  async updateSwimLane(request: $_model.UpdateSwimLaneRequest): Promise<$_model.UpdateSwimLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSwimLaneWithOptions(request, runtime);
  }

  /**
   * Updates the information of a lane group.
   * 
   * @param request - UpdateSwimLaneGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSwimLaneGroupResponse
   */
  async updateSwimLaneGroupWithOptions(request: $_model.UpdateSwimLaneGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSwimLaneGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fallbackTarget)) {
      body["FallbackTarget"] = request.fallbackTarget;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ingressRoutingStrategy)) {
      body["IngressRoutingStrategy"] = request.ingressRoutingStrategy;
    }

    if (!$dara.isNull(request.serviceLevelFallbackTarget)) {
      body["ServiceLevelFallbackTarget"] = request.serviceLevelFallbackTarget;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.servicesList)) {
      body["ServicesList"] = request.servicesList;
    }

    if (!$dara.isNull(request.weightedIngressRule)) {
      body["WeightedIngressRule"] = request.weightedIngressRule;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSwimLaneGroup",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSwimLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSwimLaneGroupResponse({}));
  }

  /**
   * Updates the information of a lane group.
   * 
   * @param request - UpdateSwimLaneGroupRequest
   * @returns UpdateSwimLaneGroupResponse
   */
  async updateSwimLaneGroup(request: $_model.UpdateSwimLaneGroupRequest): Promise<$_model.UpdateSwimLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSwimLaneGroupWithOptions(request, runtime);
  }

  /**
   * 更新Waypoint
   * 
   * @param request - UpdateWaypointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWaypointResponse
   */
  async updateWaypointWithOptions(request: $_model.UpdateWaypointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWaypointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.HPAEnabled)) {
      body["HPAEnabled"] = request.HPAEnabled;
    }

    if (!$dara.isNull(request.HPAMaxReplicas)) {
      body["HPAMaxReplicas"] = request.HPAMaxReplicas;
    }

    if (!$dara.isNull(request.HPAMinReplicas)) {
      body["HPAMinReplicas"] = request.HPAMinReplicas;
    }

    if (!$dara.isNull(request.HPATargetCPU)) {
      body["HPATargetCPU"] = request.HPATargetCPU;
    }

    if (!$dara.isNull(request.HPATargetMemory)) {
      body["HPATargetMemory"] = request.HPATargetMemory;
    }

    if (!$dara.isNull(request.limitCPU)) {
      body["LimitCPU"] = request.limitCPU;
    }

    if (!$dara.isNull(request.limitMemory)) {
      body["LimitMemory"] = request.limitMemory;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespace)) {
      body["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.preferECI)) {
      body["PreferECI"] = request.preferECI;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.requestCPU)) {
      body["RequestCPU"] = request.requestCPU;
    }

    if (!$dara.isNull(request.requestMemory)) {
      body["RequestMemory"] = request.requestMemory;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWaypoint",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWaypointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWaypointResponse({}));
  }

  /**
   * 更新Waypoint
   * 
   * @param request - UpdateWaypointRequest
   * @returns UpdateWaypointResponse
   */
  async updateWaypoint(request: $_model.UpdateWaypointRequest): Promise<$_model.UpdateWaypointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWaypointWithOptions(request, runtime);
  }

  /**
   * Upgrades a Service Mesh (ASM) instance to Professional Edition that is commercially released.
   * 
   * @param request - UpgradeMeshEditionPartiallyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMeshEditionPartiallyResponse
   */
  async upgradeMeshEditionPartiallyWithOptions(request: $_model.UpgradeMeshEditionPartiallyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMeshEditionPartiallyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ASMGatewayContinue)) {
      body["ASMGatewayContinue"] = request.ASMGatewayContinue;
    }

    if (!$dara.isNull(request.expectedVersion)) {
      body["ExpectedVersion"] = request.expectedVersion;
    }

    if (!$dara.isNull(request.preCheck)) {
      body["PreCheck"] = request.preCheck;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      body["ServiceMeshId"] = request.serviceMeshId;
    }

    if (!$dara.isNull(request.switchToPro)) {
      body["SwitchToPro"] = request.switchToPro;
    }

    if (!$dara.isNull(request.upgradeGatewayRecords)) {
      body["UpgradeGatewayRecords"] = request.upgradeGatewayRecords;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMeshEditionPartially",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeMeshEditionPartiallyResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeMeshEditionPartiallyResponse({}));
  }

  /**
   * Upgrades a Service Mesh (ASM) instance to Professional Edition that is commercially released.
   * 
   * @param request - UpgradeMeshEditionPartiallyRequest
   * @returns UpgradeMeshEditionPartiallyResponse
   */
  async upgradeMeshEditionPartially(request: $_model.UpgradeMeshEditionPartiallyRequest): Promise<$_model.UpgradeMeshEditionPartiallyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMeshEditionPartiallyWithOptions(request, runtime);
  }

  /**
   * Updates the version of a Service Mesh (ASM) instance.
   * 
   * @param request - UpgradeMeshVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeMeshVersionResponse
   */
  async upgradeMeshVersionWithOptions(request: $_model.UpgradeMeshVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeMeshVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.preCheck)) {
      query["PreCheck"] = request.preCheck;
    }

    if (!$dara.isNull(request.serviceMeshId)) {
      query["ServiceMeshId"] = request.serviceMeshId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeMeshVersion",
      version: "2020-01-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeMeshVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeMeshVersionResponse({}));
  }

  /**
   * Updates the version of a Service Mesh (ASM) instance.
   * 
   * @param request - UpgradeMeshVersionRequest
   * @returns UpgradeMeshVersionResponse
   */
  async upgradeMeshVersion(request: $_model.UpgradeMeshVersionRequest): Promise<$_model.UpgradeMeshVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeMeshVersionWithOptions(request, runtime);
  }

}
