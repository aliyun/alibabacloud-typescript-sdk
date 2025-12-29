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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sae", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Terminates a change order and rolls back the corresponding application.
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortAndRollbackChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortAndRollbackChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.AbortAndRollbackChangeOrderResponse({}));
  }

  /**
   * Terminates a change order and rolls back the corresponding application.
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
   * Terminate a change order.
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

    if (!$dara.isNull(request.rollback)) {
      query["Rollback"] = request.rollback;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbortChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/AbortChangeOrder`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbortChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.AbortChangeOrderResponse({}));
  }

  /**
   * Terminate a change order.
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
   * Restarts applications in batches.
   * 
   * @param request - BatchRestartApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRestartApplicationsResponse
   */
  async batchRestartApplicationsWithOptions(request: $_model.BatchRestartApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRestartApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRestartApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchRestartApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRestartApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.BatchRestartApplicationsResponse({}));
  }

  /**
   * Restarts applications in batches.
   * 
   * @param request - BatchRestartApplicationsRequest
   * @returns BatchRestartApplicationsResponse
   */
  async batchRestartApplications(request: $_model.BatchRestartApplicationsRequest): Promise<$_model.BatchRestartApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchRestartApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * Starts multiple applications at a time.
   * 
   * @param request - BatchStartApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStartApplicationsResponse
   */
  async batchStartApplicationsWithOptions(request: $_model.BatchStartApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStartApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStartApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStartApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStartApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.BatchStartApplicationsResponse({}));
  }

  /**
   * Starts multiple applications at a time.
   * 
   * @param request - BatchStartApplicationsRequest
   * @returns BatchStartApplicationsResponse
   */
  async batchStartApplications(request: $_model.BatchStartApplicationsRequest): Promise<$_model.BatchStartApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStartApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * Stop applications in batches.
   * 
   * @param request - BatchStopApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchStopApplicationsResponse
   */
  async batchStopApplicationsWithOptions(request: $_model.BatchStopApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchStopApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchStopApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/batchStopApplications`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchStopApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.BatchStopApplicationsResponse({}));
  }

  /**
   * Stop applications in batches.
   * 
   * @param request - BatchStopApplicationsRequest
   * @returns BatchStopApplicationsResponse
   */
  async batchStopApplications(request: $_model.BatchStopApplicationsRequest): Promise<$_model.BatchStopApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchStopApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * Associates a Network Load Balancer (NLB) instance with an application.
   * 
   * @param request - BindNlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindNlbResponse
   */
  async bindNlbWithOptions(request: $_model.BindNlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindNlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.listeners)) {
      query["Listeners"] = request.listeners;
    }

    if (!$dara.isNull(request.nlbId)) {
      query["NlbId"] = request.nlbId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindNlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/nlb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindNlbResponse>(await this.callApi(params, req, runtime), new $_model.BindNlbResponse({}));
  }

  /**
   * Associates a Network Load Balancer (NLB) instance with an application.
   * 
   * @param request - BindNlbRequest
   * @returns BindNlbResponse
   */
  async bindNlb(request: $_model.BindNlbRequest): Promise<$_model.BindNlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindNlbWithOptions(request, headers, runtime);
  }

  /**
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

    if (!$dara.isNull(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!$dara.isNull(request.internetSlbChargeType)) {
      query["InternetSlbChargeType"] = request.internetSlbChargeType;
    }

    if (!$dara.isNull(request.internetSlbId)) {
      query["InternetSlbId"] = request.internetSlbId;
    }

    if (!$dara.isNull(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    if (!$dara.isNull(request.intranetSlbChargeType)) {
      query["IntranetSlbChargeType"] = request.intranetSlbChargeType;
    }

    if (!$dara.isNull(request.intranetSlbId)) {
      query["IntranetSlbId"] = request.intranetSlbId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindSlbResponse>(await this.callApi(params, req, runtime), new $_model.BindSlbResponse({}));
  }

  /**
   * @param request - BindSlbRequest
   * @returns BindSlbResponse
   */
  async bindSlb(request: $_model.BindSlbRequest): Promise<$_model.BindSlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindSlbWithOptions(request, headers, runtime);
  }

  /**
   * Confirms whether to start the next batch.
   * 
   * @param request - ConfirmPipelineBatchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmPipelineBatchResponse
   */
  async confirmPipelineBatchWithOptions(request: $_model.ConfirmPipelineBatchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmPipelineBatchResponse> {
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
      action: "ConfirmPipelineBatch",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ConfirmPipelineBatch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmPipelineBatchResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmPipelineBatchResponse({}));
  }

  /**
   * Confirms whether to start the next batch.
   * 
   * @param request - ConfirmPipelineBatchRequest
   * @returns ConfirmPipelineBatchResponse
   */
  async confirmPipelineBatch(request: $_model.ConfirmPipelineBatchRequest): Promise<$_model.ConfirmPipelineBatchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmPipelineBatchWithOptions(request, headers, runtime);
  }

  /**
   * Creates an application.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: $_model.CreateApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.initContainersConfig)) {
      request.initContainersConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.initContainersConfig, "InitContainersConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sidecarContainersConfig)) {
      request.sidecarContainersConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sidecarContainersConfig, "SidecarContainersConfig", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.autoConfig)) {
      query["AutoConfig"] = request.autoConfig;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!$dara.isNull(request.customImageNetworkType)) {
      query["CustomImageNetworkType"] = request.customImageNetworkType;
    }

    if (!$dara.isNull(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.dotnet)) {
      query["Dotnet"] = request.dotnet;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.enableCpuBurst)) {
      query["EnableCpuBurst"] = request.enableCpuBurst;
    }

    if (!$dara.isNull(request.enableEbpf)) {
      query["EnableEbpf"] = request.enableEbpf;
    }

    if (!$dara.isNull(request.enableNamespaceAgentVersion)) {
      query["EnableNamespaceAgentVersion"] = request.enableNamespaceAgentVersion;
    }

    if (!$dara.isNull(request.enableNamespaceSlsConfig)) {
      query["EnableNamespaceSlsConfig"] = request.enableNamespaceSlsConfig;
    }

    if (!$dara.isNull(request.enableNewArms)) {
      query["EnableNewArms"] = request.enableNewArms;
    }

    if (!$dara.isNull(request.enablePrometheus)) {
      query["EnablePrometheus"] = request.enablePrometheus;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.gpuConfig)) {
      query["GpuConfig"] = request.gpuConfig;
    }

    if (!$dara.isNull(request.headlessPvtzDiscoverySvc)) {
      query["HeadlessPvtzDiscoverySvc"] = request.headlessPvtzDiscoverySvc;
    }

    if (!$dara.isNull(request.html)) {
      query["Html"] = request.html;
    }

    if (!$dara.isNull(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.isStateful)) {
      query["IsStateful"] = request.isStateful;
    }

    if (!$dara.isNull(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!$dara.isNull(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!$dara.isNull(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!$dara.isNull(request.kafkaConfigs)) {
      query["KafkaConfigs"] = request.kafkaConfigs;
    }

    if (!$dara.isNull(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.lokiConfigs)) {
      query["LokiConfigs"] = request.lokiConfigs;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.microRegistration)) {
      query["MicroRegistration"] = request.microRegistration;
    }

    if (!$dara.isNull(request.microserviceEngineConfig)) {
      query["MicroserviceEngineConfig"] = request.microserviceEngineConfig;
    }

    if (!$dara.isNull(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!$dara.isNull(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
    }

    if (!$dara.isNull(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!$dara.isNull(request.newSaeVersion)) {
      query["NewSaeVersion"] = request.newSaeVersion;
    }

    if (!$dara.isNull(request.oidcRoleName)) {
      query["OidcRoleName"] = request.oidcRoleName;
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

    if (!$dara.isNull(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!$dara.isNull(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!$dara.isNull(request.pvtzDiscoverySvc)) {
      query["PvtzDiscoverySvc"] = request.pvtzDiscoverySvc;
    }

    if (!$dara.isNull(request.python)) {
      query["Python"] = request.python;
    }

    if (!$dara.isNull(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!$dara.isNull(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.saeVersion)) {
      query["SaeVersion"] = request.saeVersion;
    }

    if (!$dara.isNull(request.secretMountDesc)) {
      query["SecretMountDesc"] = request.secretMountDesc;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.slsLogEnvTags)) {
      query["SlsLogEnvTags"] = request.slsLogEnvTags;
    }

    if (!$dara.isNull(request.startupProbe)) {
      query["StartupProbe"] = request.startupProbe;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!$dara.isNull(request.baseAppId)) {
      body["BaseAppId"] = request.baseAppId;
    }

    if (!$dara.isNull(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!$dara.isNull(request.emptyDirDesc)) {
      body["EmptyDirDesc"] = request.emptyDirDesc;
    }

    if (!$dara.isNull(request.enableSidecarResourceIsolated)) {
      body["EnableSidecarResourceIsolated"] = request.enableSidecarResourceIsolated;
    }

    if (!$dara.isNull(request.initContainersConfigShrink)) {
      body["InitContainersConfig"] = request.initContainersConfigShrink;
    }

    if (!$dara.isNull(request.microRegistrationConfig)) {
      body["MicroRegistrationConfig"] = request.microRegistrationConfig;
    }

    if (!$dara.isNull(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!$dara.isNull(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!$dara.isNull(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!$dara.isNull(request.php)) {
      body["Php"] = request.php;
    }

    if (!$dara.isNull(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    if (!$dara.isNull(request.serviceTags)) {
      body["ServiceTags"] = request.serviceTags;
    }

    if (!$dara.isNull(request.sidecarContainersConfigShrink)) {
      body["SidecarContainersConfig"] = request.sidecarContainersConfigShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/createApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Creates an auto scaling policy for an application.
   * 
   * @remarks
   * ## [](#)Precautions
   * *   You can create up to five auto scaling policies for one application.
   * *   You can create up to 20 trigger points within one day in a scheduled auto scaling policy.
   * *   If an auto scaling policy is enabled for an application, you cannot manually manage the lifecycle of the application. For example, you cannot scale, deploy (including single-batch release, phased release, and canary release), stop, or restart the application, or change the instance type. If you want to perform the preceding operations on the application, disable the auto scaling policy and then manually perform the operations.
   * *   If an application is in the process of scale-out, scale-in, deployment (including single-batch release, phased release, and canary release), instance type change, restart, or stop, you cannot add or enable an auto scaling policy for the application.
   * *   If you want to configure more than 50 instances for an application, you must contact SAE technical support to add your account to the whitelist. For more information, see [Contact us](https://help.aliyun.com/document_detail/146530.html).
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

    if (!$dara.isNull(request.enableIdle)) {
      query["EnableIdle"] = request.enableIdle;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
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

    if (!$dara.isNull(request.scalingRuleType)) {
      query["ScalingRuleType"] = request.scalingRuleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
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
   * @remarks
   * ## [](#)Precautions
   * *   You can create up to five auto scaling policies for one application.
   * *   You can create up to 20 trigger points within one day in a scheduled auto scaling policy.
   * *   If an auto scaling policy is enabled for an application, you cannot manually manage the lifecycle of the application. For example, you cannot scale, deploy (including single-batch release, phased release, and canary release), stop, or restart the application, or change the instance type. If you want to perform the preceding operations on the application, disable the auto scaling policy and then manually perform the operations.
   * *   If an application is in the process of scale-out, scale-in, deployment (including single-batch release, phased release, and canary release), instance type change, restart, or stop, you cannot add or enable an auto scaling policy for the application.
   * *   If you want to configure more than 50 instances for an application, you must contact SAE technical support to add your account to the whitelist. For more information, see [Contact us](https://help.aliyun.com/document_detail/146530.html).
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
   * Create a ConfigMap in a namespace.
   * 
   * @param request - CreateConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigMapResponse
   */
  async createConfigMapWithOptions(request: $_model.CreateConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigMapResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigMapResponse({}));
  }

  /**
   * Create a ConfigMap in a namespace.
   * 
   * @param request - CreateConfigMapRequest
   * @returns CreateConfigMapResponse
   */
  async createConfigMap(request: $_model.CreateConfigMapRequest): Promise<$_model.CreateConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Creates a canary release rule for a Spring Cloud or Dubbo application.
   * 
   * @remarks
   * >  You can configure only one canary release rule for each application.
   * 
   * @param request - CreateGreyTagRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGreyTagRouteResponse
   */
  async createGreyTagRouteWithOptions(request: $_model.CreateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGreyTagRouteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.albRules)) {
      query["AlbRules"] = request.albRules;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new $_model.CreateGreyTagRouteResponse({}));
  }

  /**
   * Creates a canary release rule for a Spring Cloud or Dubbo application.
   * 
   * @remarks
   * >  You can configure only one canary release rule for each application.
   * 
   * @param request - CreateGreyTagRouteRequest
   * @returns CreateGreyTagRouteResponse
   */
  async createGreyTagRoute(request: $_model.CreateGreyTagRouteRequest): Promise<$_model.CreateGreyTagRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * Creates a routing rule.
   * 
   * @param request - CreateIngressRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIngressResponse
   */
  async createIngressWithOptions(request: $_model.CreateIngressRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIngressResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.corsConfig)) {
      query["CorsConfig"] = request.corsConfig;
    }

    if (!$dara.isNull(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableGzip)) {
      query["EnableGzip"] = request.enableGzip;
    }

    if (!$dara.isNull(request.enableXForwardedFor)) {
      query["EnableXForwardedFor"] = request.enableXForwardedFor;
    }

    if (!$dara.isNull(request.enableXForwardedForClientSrcPort)) {
      query["EnableXForwardedForClientSrcPort"] = request.enableXForwardedForClientSrcPort;
    }

    if (!$dara.isNull(request.enableXForwardedForProto)) {
      query["EnableXForwardedForProto"] = request.enableXForwardedForProto;
    }

    if (!$dara.isNull(request.enableXForwardedForSlbId)) {
      query["EnableXForwardedForSlbId"] = request.enableXForwardedForSlbId;
    }

    if (!$dara.isNull(request.enableXForwardedForSlbPort)) {
      query["EnableXForwardedForSlbPort"] = request.enableXForwardedForSlbPort;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalanceType)) {
      query["LoadBalanceType"] = request.loadBalanceType;
    }

    if (!$dara.isNull(request.loadBalancerEdition)) {
      query["LoadBalancerEdition"] = request.loadBalancerEdition;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!$dara.isNull(request.slbId)) {
      query["SlbId"] = request.slbId;
    }

    if (!$dara.isNull(request.zoneMappings)) {
      query["ZoneMappings"] = request.zoneMappings;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIngressResponse>(await this.callApi(params, req, runtime), new $_model.CreateIngressResponse({}));
  }

  /**
   * Creates a routing rule.
   * 
   * @param request - CreateIngressRequest
   * @returns CreateIngressResponse
   */
  async createIngress(request: $_model.CreateIngressRequest): Promise<$_model.CreateIngressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIngressWithOptions(request, headers, runtime);
  }

  /**
   * Create a job template.
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(request: $_model.CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!$dara.isNull(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.autoConfig)) {
      query["AutoConfig"] = request.autoConfig;
    }

    if (!$dara.isNull(request.backoffLimit)) {
      query["BackoffLimit"] = request.backoffLimit;
    }

    if (!$dara.isNull(request.bestEffortType)) {
      query["BestEffortType"] = request.bestEffortType;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.concurrencyPolicy)) {
      query["ConcurrencyPolicy"] = request.concurrencyPolicy;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!$dara.isNull(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!$dara.isNull(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!$dara.isNull(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
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

    if (!$dara.isNull(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!$dara.isNull(request.python)) {
      query["Python"] = request.python;
    }

    if (!$dara.isNull(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!$dara.isNull(request.refAppId)) {
      query["RefAppId"] = request.refAppId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.slice)) {
      query["Slice"] = request.slice;
    }

    if (!$dara.isNull(request.sliceEnvs)) {
      query["SliceEnvs"] = request.sliceEnvs;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      query["TriggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    if (!$dara.isNull(request.workload)) {
      query["Workload"] = request.workload;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!$dara.isNull(request.enableImageAccl)) {
      body["EnableImageAccl"] = request.enableImageAccl;
    }

    if (!$dara.isNull(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!$dara.isNull(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!$dara.isNull(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!$dara.isNull(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/createJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * Create a job template.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  /**
   * Create a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(request: $_model.CreateNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableMicroRegistration)) {
      query["EnableMicroRegistration"] = request.enableMicroRegistration;
    }

    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * Create a namespace.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Creates or updates a lane.
   * 
   * @param tmpReq - CreateOrUpdateSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateSwimmingLaneResponse
   */
  async createOrUpdateSwimmingLaneWithOptions(tmpReq: $_model.CreateOrUpdateSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateSwimmingLaneResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrUpdateSwimmingLaneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appEntryRule)) {
      request.appEntryRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appEntryRule, "AppEntryRule", "json");
    }

    if (!$dara.isNull(tmpReq.mseGatewayEntryRule)) {
      request.mseGatewayEntryRuleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.mseGatewayEntryRule, "MseGatewayEntryRule", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appEntryRuleShrink)) {
      query["AppEntryRule"] = request.appEntryRuleShrink;
    }

    if (!$dara.isNull(request.canaryModel)) {
      query["CanaryModel"] = request.canaryModel;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.laneName)) {
      query["LaneName"] = request.laneName;
    }

    if (!$dara.isNull(request.laneTag)) {
      query["LaneTag"] = request.laneTag;
    }

    if (!$dara.isNull(request.mseGatewayEntryRuleShrink)) {
      query["MseGatewayEntryRule"] = request.mseGatewayEntryRuleShrink;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateSwimmingLane",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/createOrUpdateSwimmingLane`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateSwimmingLaneResponse({}));
  }

  /**
   * Creates or updates a lane.
   * 
   * @param request - CreateOrUpdateSwimmingLaneRequest
   * @returns CreateOrUpdateSwimmingLaneResponse
   */
  async createOrUpdateSwimmingLane(request: $_model.CreateOrUpdateSwimmingLaneRequest): Promise<$_model.CreateOrUpdateSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrUpdateSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Creates or updates a lane group.
   * 
   * @param tmpReq - CreateOrUpdateSwimmingLaneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateSwimmingLaneGroupResponse
   */
  async createOrUpdateSwimmingLaneGroupWithOptions(tmpReq: $_model.CreateOrUpdateSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateSwimmingLaneGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrUpdateSwimmingLaneGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appIds)) {
      request.appIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appIds, "AppIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appIdsShrink)) {
      query["AppIds"] = request.appIdsShrink;
    }

    if (!$dara.isNull(request.entryAppId)) {
      query["EntryAppId"] = request.entryAppId;
    }

    if (!$dara.isNull(request.entryAppType)) {
      query["EntryAppType"] = request.entryAppType;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.swimVersion)) {
      query["SwimVersion"] = request.swimVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateSwimmingLaneGroup",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/createOrUpdateSwimmingLaneGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateSwimmingLaneGroupResponse({}));
  }

  /**
   * Creates or updates a lane group.
   * 
   * @param request - CreateOrUpdateSwimmingLaneGroupRequest
   * @returns CreateOrUpdateSwimmingLaneGroupResponse
   */
  async createOrUpdateSwimmingLaneGroup(request: $_model.CreateOrUpdateSwimmingLaneGroupRequest): Promise<$_model.CreateOrUpdateSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrUpdateSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Secret in a namespace.
   * 
   * @param tmpReq - CreateSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretResponse
   */
  async createSecretWithOptions(tmpReq: $_model.CreateSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.secretData)) {
      request.secretDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.secretData, "SecretData", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.secretDataShrink)) {
      query["SecretData"] = request.secretDataShrink;
    }

    if (!$dara.isNull(request.secretName)) {
      query["SecretName"] = request.secretName;
    }

    if (!$dara.isNull(request.secretType)) {
      query["SecretType"] = request.secretType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretResponse({}));
  }

  /**
   * Creates a Secret in a namespace.
   * 
   * @param request - CreateSecretRequest
   * @returns CreateSecretResponse
   */
  async createSecret(request: $_model.CreateSecretRequest): Promise<$_model.CreateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSecretWithOptions(request, headers, runtime);
  }

  /**
   * Create a web application
   * 
   * @remarks
   * Call the CreateWebApplication operation to create a web application.
   * 
   * @param request - CreateWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebApplicationResponse
   */
  async createWebApplicationWithOptions(request: $_model.CreateWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebApplicationResponse({}));
  }

  /**
   * Create a web application
   * 
   * @remarks
   * Call the CreateWebApplication operation to create a web application.
   * 
   * @param request - CreateWebApplicationRequest
   * @returns CreateWebApplicationResponse
   */
  async createWebApplication(request: $_model.CreateWebApplicationRequest): Promise<$_model.CreateWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWebApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Create a custom domain name for the web application.
   * 
   * @remarks
   * Create a custom domain name for the web application.
   * 
   * @param request - CreateWebCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebCustomDomainResponse
   */
  async createWebCustomDomainWithOptions(request: $_model.CreateWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebCustomDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebCustomDomainResponse({}));
  }

  /**
   * Create a custom domain name for the web application.
   * 
   * @remarks
   * Create a custom domain name for the web application.
   * 
   * @param request - CreateWebCustomDomainRequest
   * @returns CreateWebCustomDomainResponse
   */
  async createWebCustomDomain(request: $_model.CreateWebCustomDomainRequest): Promise<$_model.CreateWebCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWebCustomDomainWithOptions(request, headers, runtime);
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deleteApplication`,
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
   * 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationScalingRuleResponse({}));
  }

  /**
   * 7171a6ca-d1cd-4928-8642-7d5cfe69\\*\\*\\*\\*
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
   * Deletes a ConfigMap.
   * 
   * @param request - DeleteConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigMapResponse
   */
  async deleteConfigMapWithOptions(request: $_model.DeleteConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigMapResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigMapResponse({}));
  }

  /**
   * Deletes a ConfigMap.
   * 
   * @param request - DeleteConfigMapRequest
   * @returns DeleteConfigMapResponse
   */
  async deleteConfigMap(request: $_model.DeleteConfigMapRequest): Promise<$_model.DeleteConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a canary release rule based on the specified rule ID.
   * 
   * @param request - DeleteGreyTagRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGreyTagRouteResponse
   */
  async deleteGreyTagRouteWithOptions(request: $_model.DeleteGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGreyTagRouteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGreyTagRouteResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGreyTagRouteResponse({}));
  }

  /**
   * Deletes a canary release rule based on the specified rule ID.
   * 
   * @param request - DeleteGreyTagRouteRequest
   * @returns DeleteGreyTagRouteResponse
   */
  async deleteGreyTagRoute(request: $_model.DeleteGreyTagRouteRequest): Promise<$_model.DeleteGreyTagRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * Delete a job.
   * 
   * @param request - DeleteHistoryJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHistoryJobResponse
   */
  async deleteHistoryJobWithOptions(request: $_model.DeleteHistoryJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHistoryJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHistoryJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/deleteHistoryJob`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHistoryJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHistoryJobResponse({}));
  }

  /**
   * Delete a job.
   * 
   * @param request - DeleteHistoryJobRequest
   * @returns DeleteHistoryJobResponse
   */
  async deleteHistoryJob(request: $_model.DeleteHistoryJobRequest): Promise<$_model.DeleteHistoryJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHistoryJobWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a routing rule.
   * 
   * @param request - DeleteIngressRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIngressResponse
   */
  async deleteIngressWithOptions(request: $_model.DeleteIngressRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIngressResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIngressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIngressResponse({}));
  }

  /**
   * Deletes a routing rule.
   * 
   * @param request - DeleteIngressRequest
   * @returns DeleteIngressResponse
   */
  async deleteIngress(request: $_model.DeleteIngressRequest): Promise<$_model.DeleteIngressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIngressWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an application instance.
   * 
   * @param request - DeleteInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstancesResponse
   */
  async deleteInstancesWithOptions(request: $_model.DeleteInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deleteInstances`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstancesResponse({}));
  }

  /**
   * Deletes an application instance.
   * 
   * @param request - DeleteInstancesRequest
   * @returns DeleteInstancesResponse
   */
  async deleteInstances(request: $_model.DeleteInstancesRequest): Promise<$_model.DeleteInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Delete a job template.
   * 
   * @param request - DeleteJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(request: $_model.DeleteJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobResponse> {
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
      action: "DeleteJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/deleteJob`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobResponse({}));
  }

  /**
   * Delete a job template.
   * 
   * @param request - DeleteJobRequest
   * @returns DeleteJobResponse
   */
  async deleteJob(request: $_model.DeleteJobRequest): Promise<$_model.DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a namespace.
   * 
   * @param request - DeleteNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * Deletes a namespace.
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a Secret.
   * 
   * @param request - DeleteSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretResponse
   */
  async deleteSecretWithOptions(request: $_model.DeleteSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretResponse({}));
  }

  /**
   * Deletes a Secret.
   * 
   * @param request - DeleteSecretRequest
   * @returns DeleteSecretResponse
   */
  async deleteSecret(request: $_model.DeleteSecretRequest): Promise<$_model.DeleteSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSecretWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a lane group.
   * 
   * @param request - DeleteSwimmingLaneGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSwimmingLaneGroupResponse
   */
  async deleteSwimmingLaneGroupWithOptions(request: $_model.DeleteSwimmingLaneGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSwimmingLaneGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSwimmingLaneGroup",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/deleteSwimmingLaneGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSwimmingLaneGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSwimmingLaneGroupResponse({}));
  }

  /**
   * Deletes a lane group.
   * 
   * @param request - DeleteSwimmingLaneGroupRequest
   * @returns DeleteSwimmingLaneGroupResponse
   */
  async deleteSwimmingLaneGroup(request: $_model.DeleteSwimmingLaneGroupRequest): Promise<$_model.DeleteSwimmingLaneGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSwimmingLaneGroupWithOptions(request, headers, runtime);
  }

  /**
   * Delete a web application.
   * 
   * @remarks
   * Call the DeleteWebApplication operation to delete a web application.
   * 
   * @param request - DeleteWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebApplicationResponse
   */
  async deleteWebApplicationWithOptions(ApplicationId: string, request: $_model.DeleteWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebApplicationResponse> {
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
      action: "DeleteWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebApplicationResponse({}));
  }

  /**
   * Delete a web application.
   * 
   * @remarks
   * Call the DeleteWebApplication operation to delete a web application.
   * 
   * @param request - DeleteWebApplicationRequest
   * @returns DeleteWebApplicationResponse
   */
  async deleteWebApplication(ApplicationId: string, request: $_model.DeleteWebApplicationRequest): Promise<$_model.DeleteWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Delete a web application version.
   * 
   * @remarks
   * Delete a web application version.
   * 
   * @param request - DeleteWebApplicationRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebApplicationRevisionResponse
   */
  async deleteWebApplicationRevisionWithOptions(ApplicationId: string, RevisionId: string, request: $_model.DeleteWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebApplicationRevisionResponse> {
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
      action: "DeleteWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${$dara.URL.percentEncode(ApplicationId)}/revisions/${$dara.URL.percentEncode(RevisionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebApplicationRevisionResponse({}));
  }

  /**
   * Delete a web application version.
   * 
   * @remarks
   * Delete a web application version.
   * 
   * @param request - DeleteWebApplicationRevisionRequest
   * @returns DeleteWebApplicationRevisionResponse
   */
  async deleteWebApplicationRevision(ApplicationId: string, RevisionId: string, request: $_model.DeleteWebApplicationRevisionRequest): Promise<$_model.DeleteWebApplicationRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebApplicationRevisionWithOptions(ApplicationId, RevisionId, request, headers, runtime);
  }

  /**
   * Delete a custom domain name.
   * 
   * @remarks
   * Delete a custom domain name.
   * 
   * @param request - DeleteWebCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebCustomDomainResponse
   */
  async deleteWebCustomDomainWithOptions(DomainName: string, request: $_model.DeleteWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebCustomDomainResponse> {
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
      action: "DeleteWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${$dara.URL.percentEncode(DomainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebCustomDomainResponse({}));
  }

  /**
   * Delete a custom domain name.
   * 
   * @remarks
   * Delete a custom domain name.
   * 
   * @param request - DeleteWebCustomDomainRequest
   * @returns DeleteWebCustomDomainResponse
   */
  async deleteWebCustomDomain(DomainName: string, request: $_model.DeleteWebCustomDomainRequest): Promise<$_model.DeleteWebCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

  /**
   * Deploys an application.
   * 
   * @param tmpReq - DeployApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationResponse
   */
  async deployApplicationWithOptions(tmpReq: $_model.DeployApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.DeployApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.initContainersConfig)) {
      request.initContainersConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.initContainersConfig, "InitContainersConfig", "json");
    }

    if (!$dara.isNull(tmpReq.sidecarContainersConfig)) {
      request.sidecarContainersConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sidecarContainersConfig, "SidecarContainersConfig", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!$dara.isNull(request.agentVersion)) {
      query["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.albIngressReadinessGate)) {
      query["AlbIngressReadinessGate"] = request.albIngressReadinessGate;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!$dara.isNull(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!$dara.isNull(request.changeOrderDesc)) {
      query["ChangeOrderDesc"] = request.changeOrderDesc;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!$dara.isNull(request.customImageNetworkType)) {
      query["CustomImageNetworkType"] = request.customImageNetworkType;
    }

    if (!$dara.isNull(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!$dara.isNull(request.dotnet)) {
      query["Dotnet"] = request.dotnet;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    if (!$dara.isNull(request.enableCpuBurst)) {
      query["EnableCpuBurst"] = request.enableCpuBurst;
    }

    if (!$dara.isNull(request.enableGreyTagRoute)) {
      query["EnableGreyTagRoute"] = request.enableGreyTagRoute;
    }

    if (!$dara.isNull(request.enableNamespaceAgentVersion)) {
      query["EnableNamespaceAgentVersion"] = request.enableNamespaceAgentVersion;
    }

    if (!$dara.isNull(request.enableNewArms)) {
      query["EnableNewArms"] = request.enableNewArms;
    }

    if (!$dara.isNull(request.enablePrometheus)) {
      query["EnablePrometheus"] = request.enablePrometheus;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.gpuConfig)) {
      query["GpuConfig"] = request.gpuConfig;
    }

    if (!$dara.isNull(request.html)) {
      query["Html"] = request.html;
    }

    if (!$dara.isNull(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!$dara.isNull(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!$dara.isNull(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!$dara.isNull(request.kafkaConfigs)) {
      query["KafkaConfigs"] = request.kafkaConfigs;
    }

    if (!$dara.isNull(request.liveness)) {
      query["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.lokiConfigs)) {
      query["LokiConfigs"] = request.lokiConfigs;
    }

    if (!$dara.isNull(request.maxSurgeInstanceRatio)) {
      query["MaxSurgeInstanceRatio"] = request.maxSurgeInstanceRatio;
    }

    if (!$dara.isNull(request.maxSurgeInstances)) {
      query["MaxSurgeInstances"] = request.maxSurgeInstances;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.microRegistration)) {
      query["MicroRegistration"] = request.microRegistration;
    }

    if (!$dara.isNull(request.microserviceEngineConfig)) {
      query["MicroserviceEngineConfig"] = request.microserviceEngineConfig;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!$dara.isNull(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!$dara.isNull(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!$dara.isNull(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
    }

    if (!$dara.isNull(request.nasId)) {
      query["NasId"] = request.nasId;
    }

    if (!$dara.isNull(request.newSaeVersion)) {
      query["NewSaeVersion"] = request.newSaeVersion;
    }

    if (!$dara.isNull(request.oidcRoleName)) {
      query["OidcRoleName"] = request.oidcRoleName;
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

    if (!$dara.isNull(request.phpArmsConfigLocation)) {
      query["PhpArmsConfigLocation"] = request.phpArmsConfigLocation;
    }

    if (!$dara.isNull(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.pvtzDiscoverySvc)) {
      query["PvtzDiscoverySvc"] = request.pvtzDiscoverySvc;
    }

    if (!$dara.isNull(request.python)) {
      query["Python"] = request.python;
    }

    if (!$dara.isNull(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!$dara.isNull(request.readiness)) {
      query["Readiness"] = request.readiness;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.secretMountDesc)) {
      query["SecretMountDesc"] = request.secretMountDesc;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.slsLogEnvTags)) {
      query["SlsLogEnvTags"] = request.slsLogEnvTags;
    }

    if (!$dara.isNull(request.startupProbe)) {
      query["StartupProbe"] = request.startupProbe;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!$dara.isNull(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.associateEip)) {
      body["AssociateEip"] = request.associateEip;
    }

    if (!$dara.isNull(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!$dara.isNull(request.emptyDirDesc)) {
      body["EmptyDirDesc"] = request.emptyDirDesc;
    }

    if (!$dara.isNull(request.enableSidecarResourceIsolated)) {
      body["EnableSidecarResourceIsolated"] = request.enableSidecarResourceIsolated;
    }

    if (!$dara.isNull(request.initContainersConfigShrink)) {
      body["InitContainersConfig"] = request.initContainersConfigShrink;
    }

    if (!$dara.isNull(request.microRegistrationConfig)) {
      body["MicroRegistrationConfig"] = request.microRegistrationConfig;
    }

    if (!$dara.isNull(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!$dara.isNull(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!$dara.isNull(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!$dara.isNull(request.php)) {
      body["Php"] = request.php;
    }

    if (!$dara.isNull(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    if (!$dara.isNull(request.serviceTags)) {
      body["ServiceTags"] = request.serviceTags;
    }

    if (!$dara.isNull(request.sidecarContainersConfigShrink)) {
      body["SidecarContainersConfig"] = request.sidecarContainersConfigShrink;
    }

    if (!$dara.isNull(request.swimlanePvtzDiscoverySvc)) {
      body["SwimlanePvtzDiscoverySvc"] = request.swimlanePvtzDiscoverySvc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/deployApplication`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeployApplicationResponse({}));
  }

  /**
   * Deploys an application.
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
   * Queries the metadata details of the service of an application.
   * 
   * @param request - DescribeAppServiceDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppServiceDetailResponse
   */
  async describeAppServiceDetailWithOptions(request: $_model.DescribeAppServiceDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppServiceDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.nacosInstanceId)) {
      query["NacosInstanceId"] = request.nacosInstanceId;
    }

    if (!$dara.isNull(request.nacosNamespaceId)) {
      query["NacosNamespaceId"] = request.nacosNamespaceId;
    }

    if (!$dara.isNull(request.serviceGroup)) {
      query["ServiceGroup"] = request.serviceGroup;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceVersion)) {
      query["ServiceVersion"] = request.serviceVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppServiceDetail",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/describeAppServiceDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppServiceDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppServiceDetailResponse({}));
  }

  /**
   * Queries the metadata details of the service of an application.
   * 
   * @param request - DescribeAppServiceDetailRequest
   * @returns DescribeAppServiceDetailResponse
   */
  async describeAppServiceDetail(request: $_model.DescribeAppServiceDetailRequest): Promise<$_model.DescribeAppServiceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAppServiceDetailWithOptions(request, headers, runtime);
  }

  /**
   * Queries the configurations of an application.
   * 
   * @param request - DescribeApplicationConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationConfigResponse
   */
  async describeApplicationConfigWithOptions(request: $_model.DescribeApplicationConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationConfigResponse({}));
  }

  /**
   * Queries the configurations of an application.
   * 
   * @param request - DescribeApplicationConfigRequest
   * @returns DescribeApplicationConfigResponse
   */
  async describeApplicationConfig(request: $_model.DescribeApplicationConfigRequest): Promise<$_model.DescribeApplicationConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationConfigWithOptions(request, headers, runtime);
  }

  /**
   * Queries the instance groups of an application.
   * 
   * @param request - DescribeApplicationGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationGroupsResponse
   */
  async describeApplicationGroupsWithOptions(request: $_model.DescribeApplicationGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationGroupsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationGroups",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationGroupsResponse({}));
  }

  /**
   * Queries the instance groups of an application.
   * 
   * @param request - DescribeApplicationGroupsRequest
   * @returns DescribeApplicationGroupsResponse
   */
  async describeApplicationGroups(request: $_model.DescribeApplicationGroupsRequest): Promise<$_model.DescribeApplicationGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about the image of an application.
   * 
   * @param request - DescribeApplicationImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationImageResponse
   */
  async describeApplicationImageWithOptions(request: $_model.DescribeApplicationImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationImageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationImage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/container/describeApplicationImage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationImageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationImageResponse({}));
  }

  /**
   * Queries the information about the image of an application.
   * 
   * @param request - DescribeApplicationImageRequest
   * @returns DescribeApplicationImageResponse
   */
  async describeApplicationImage(request: $_model.DescribeApplicationImageRequest): Promise<$_model.DescribeApplicationImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationImageWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of application instances.
   * 
   * @param request - DescribeApplicationInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationInstancesResponse
   */
  async describeApplicationInstancesWithOptions(request: $_model.DescribeApplicationInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationInstancesResponse({}));
  }

  /**
   * Queries a list of application instances.
   * 
   * @param request - DescribeApplicationInstancesRequest
   * @returns DescribeApplicationInstancesResponse
   */
  async describeApplicationInstances(request: $_model.DescribeApplicationInstancesRequest): Promise<$_model.DescribeApplicationInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information of the associated MSE microservice governance application.
   * 
   * @param request - DescribeApplicationMseServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationMseServiceResponse
   */
  async describeApplicationMseServiceWithOptions(request: $_model.DescribeApplicationMseServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationMseServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.enableAhas)) {
      query["EnableAhas"] = request.enableAhas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationMseService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/applicationMseService`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationMseServiceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationMseServiceResponse({}));
  }

  /**
   * Queries the information of the associated MSE microservice governance application.
   * 
   * @param request - DescribeApplicationMseServiceRequest
   * @returns DescribeApplicationMseServiceResponse
   */
  async describeApplicationMseService(request: $_model.DescribeApplicationMseServiceRequest): Promise<$_model.DescribeApplicationMseServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationMseServiceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Network Load Balancer (NLB) instances bound to an application and their listeners.
   * 
   * @param request - DescribeApplicationNlbsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationNlbsResponse
   */
  async describeApplicationNlbsWithOptions(request: $_model.DescribeApplicationNlbsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationNlbsResponse> {
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
      action: "DescribeApplicationNlbs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/nlb`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationNlbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationNlbsResponse({}));
  }

  /**
   * Queries the Network Load Balancer (NLB) instances bound to an application and their listeners.
   * 
   * @param request - DescribeApplicationNlbsRequest
   * @returns DescribeApplicationNlbsResponse
   */
  async describeApplicationNlbs(request: $_model.DescribeApplicationNlbsRequest): Promise<$_model.DescribeApplicationNlbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationNlbsWithOptions(request, headers, runtime);
  }

  /**
   * Queries an Auto Scaling policy of an application.
   * 
   * @param request - DescribeApplicationScalingRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationScalingRuleResponse
   */
  async describeApplicationScalingRuleWithOptions(request: $_model.DescribeApplicationScalingRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationScalingRuleResponse> {
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
      action: "DescribeApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationScalingRuleResponse({}));
  }

  /**
   * Queries an Auto Scaling policy of an application.
   * 
   * @param request - DescribeApplicationScalingRuleRequest
   * @returns DescribeApplicationScalingRuleResponse
   */
  async describeApplicationScalingRule(request: $_model.DescribeApplicationScalingRuleRequest): Promise<$_model.DescribeApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationScalingRuleWithOptions(request, headers, runtime);
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRules`,
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
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   * 
   * @param request - DescribeApplicationSlbsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationSlbsResponse
   */
  async describeApplicationSlbsWithOptions(request: $_model.DescribeApplicationSlbsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationSlbsResponse> {
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
      action: "DescribeApplicationSlbs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationSlbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationSlbsResponse({}));
  }

  /**
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1\\*\\*\\*\\*
   * 
   * @param request - DescribeApplicationSlbsRequest
   * @returns DescribeApplicationSlbsResponse
   */
  async describeApplicationSlbs(request: $_model.DescribeApplicationSlbsRequest): Promise<$_model.DescribeApplicationSlbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationSlbsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of an application.
   * 
   * @param request - DescribeApplicationStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationStatusResponse
   */
  async describeApplicationStatusWithOptions(request: $_model.DescribeApplicationStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationStatusResponse> {
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
      action: "DescribeApplicationStatus",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/describeApplicationStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationStatusResponse({}));
  }

  /**
   * Queries the status of an application.
   * 
   * @param request - DescribeApplicationStatusRequest
   * @returns DescribeApplicationStatusResponse
   */
  async describeApplicationStatus(request: $_model.DescribeApplicationStatusRequest): Promise<$_model.DescribeApplicationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApplicationStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information of a change order.
   * 
   * @param request - DescribeChangeOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeChangeOrderResponse
   */
  async describeChangeOrderWithOptions(request: $_model.DescribeChangeOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeChangeOrderResponse> {
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
      action: "DescribeChangeOrder",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribeChangeOrder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeChangeOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeChangeOrderResponse({}));
  }

  /**
   * Queries the information of a change order.
   * 
   * @param request - DescribeChangeOrderRequest
   * @returns DescribeChangeOrderResponse
   */
  async describeChangeOrder(request: $_model.DescribeChangeOrderRequest): Promise<$_model.DescribeChangeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeChangeOrderWithOptions(request, headers, runtime);
  }

  /**
   * Queries the version of the component that is required when you create and deploy an application.
   * 
   * @param request - DescribeComponentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentsResponse
   */
  async describeComponentsWithOptions(request: $_model.DescribeComponentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/components`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentsResponse({}));
  }

  /**
   * Queries the version of the component that is required when you create and deploy an application.
   * 
   * @param request - DescribeComponentsRequest
   * @returns DescribeComponentsResponse
   */
  async describeComponents(request: $_model.DescribeComponentsRequest): Promise<$_model.DescribeComponentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of a ConfigMap.
   * 
   * @param request - DescribeConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigMapResponse
   */
  async describeConfigMapWithOptions(request: $_model.DescribeConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigMapResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigMapResponse({}));
  }

  /**
   * Queries the details of a ConfigMap.
   * 
   * @param request - DescribeConfigMapRequest
   * @returns DescribeConfigMapResponse
   */
  async describeConfigMap(request: $_model.DescribeConfigMapRequest): Promise<$_model.DescribeConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Query configuration price.
   * 
   * @param request - DescribeConfigurationPriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConfigurationPriceResponse
   */
  async describeConfigurationPriceWithOptions(request: $_model.DescribeConfigurationPriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConfigurationPriceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bestEffortType)) {
      query["BestEffortType"] = request.bestEffortType;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.newSaeVersion)) {
      query["NewSaeVersion"] = request.newSaeVersion;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.workload)) {
      query["Workload"] = request.workload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConfigurationPrice",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/configurationPrice`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConfigurationPriceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConfigurationPriceResponse({}));
  }

  /**
   * Query configuration price.
   * 
   * @param request - DescribeConfigurationPriceRequest
   * @returns DescribeConfigurationPriceResponse
   */
  async describeConfigurationPrice(request: $_model.DescribeConfigurationPriceRequest): Promise<$_model.DescribeConfigurationPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConfigurationPriceWithOptions(request, headers, runtime);
  }

  /**
   * Queries the container components of a microservices application.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEdasContainersResponse
   */
  async describeEdasContainersWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEdasContainersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEdasContainers",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/resource/edasContainers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEdasContainersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEdasContainersResponse({}));
  }

  /**
   * Queries the container components of a microservices application.
   * @returns DescribeEdasContainersResponse
   */
  async describeEdasContainers(): Promise<$_model.DescribeEdasContainersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeEdasContainersWithOptions(headers, runtime);
  }

  /**
   * Queries the details of a canary release rule based on the specified rule ID.
   * 
   * @param request - DescribeGreyTagRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGreyTagRouteResponse
   */
  async describeGreyTagRouteWithOptions(request: $_model.DescribeGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGreyTagRouteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGreyTagRouteResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGreyTagRouteResponse({}));
  }

  /**
   * Queries the details of a canary release rule based on the specified rule ID.
   * 
   * @param request - DescribeGreyTagRouteRequest
   * @returns DescribeGreyTagRouteResponse
   */
  async describeGreyTagRoute(request: $_model.DescribeGreyTagRouteRequest): Promise<$_model.DescribeGreyTagRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * Call the DescribeIngress operation to query the details of an Ingress.
   * 
   * @param request - DescribeIngressRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIngressResponse
   */
  async describeIngressWithOptions(request: $_model.DescribeIngressRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIngressResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIngressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIngressResponse({}));
  }

  /**
   * Call the DescribeIngress operation to query the details of an Ingress.
   * 
   * @param request - DescribeIngressRequest
   * @returns DescribeIngressResponse
   */
  async describeIngress(request: $_model.DescribeIngressRequest): Promise<$_model.DescribeIngressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIngressWithOptions(request, headers, runtime);
  }

  /**
   * Queries the logs of a sidecar container instance.
   * 
   * @param request - DescribeInstanceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceLogResponse
   */
  async describeInstanceLogWithOptions(request: $_model.DescribeInstanceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containerId)) {
      query["ContainerId"] = request.containerId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.previous)) {
      query["Previous"] = request.previous;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceLog",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/instance/describeInstanceLog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceLogResponse({}));
  }

  /**
   * Queries the logs of a sidecar container instance.
   * 
   * @param request - DescribeInstanceLogRequest
   * @returns DescribeInstanceLogResponse
   */
  async describeInstanceLog(request: $_model.DescribeInstanceLogRequest): Promise<$_model.DescribeInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceLogWithOptions(request, headers, runtime);
  }

  /**
   * Queries all instance types.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSpecificationsResponse
   */
  async describeInstanceSpecificationsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSpecificationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSpecifications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/instanceSpecifications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSpecificationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSpecificationsResponse({}));
  }

  /**
   * Queries all instance types.
   * @returns DescribeInstanceSpecificationsResponse
   */
  async describeInstanceSpecifications(): Promise<$_model.DescribeInstanceSpecificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceSpecificationsWithOptions(headers, runtime);
  }

  /**
   * Queries the configurations of a job template.
   * 
   * @param request - DescribeJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobResponse
   */
  async describeJobWithOptions(request: $_model.DescribeJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobResponse({}));
  }

  /**
   * Queries the configurations of a job template.
   * 
   * @param request - DescribeJobRequest
   * @returns DescribeJobResponse
   */
  async describeJob(request: $_model.DescribeJobRequest): Promise<$_model.DescribeJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobWithOptions(request, headers, runtime);
  }

  /**
   * Query the information about jobs.
   * 
   * @param request - DescribeJobHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobHistoryResponse
   */
  async describeJobHistoryWithOptions(request: $_model.DescribeJobHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobHistoryResponse> {
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

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobHistory",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJobHistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobHistoryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobHistoryResponse({}));
  }

  /**
   * Query the information about jobs.
   * 
   * @param request - DescribeJobHistoryRequest
   * @returns DescribeJobHistoryResponse
   */
  async describeJobHistory(request: $_model.DescribeJobHistoryRequest): Promise<$_model.DescribeJobHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Queries the status of a job.
   * 
   * @param request - DescribeJobStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobStatusResponse
   */
  async describeJobStatusWithOptions(request: $_model.DescribeJobStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobStatus",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/describeJobStatus`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobStatusResponse({}));
  }

  /**
   * Queries the status of a job.
   * 
   * @param request - DescribeJobStatusRequest
   * @returns DescribeJobStatusResponse
   */
  async describeJobStatus(request: $_model.DescribeJobStatusRequest): Promise<$_model.DescribeJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeJobStatusWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of a namespace.
   * 
   * @param request - DescribeNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespaceResponse
   */
  async describeNamespaceWithOptions(request: $_model.DescribeNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespaceResponse({}));
  }

  /**
   * Queries the details of a namespace.
   * 
   * @param request - DescribeNamespaceRequest
   * @returns DescribeNamespaceResponse
   */
  async describeNamespace(request: $_model.DescribeNamespaceRequest): Promise<$_model.DescribeNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - DescribeNamespaceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespaceListResponse
   */
  async describeNamespaceListWithOptions(request: $_model.DescribeNamespaceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespaceListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containCustom)) {
      query["ContainCustom"] = request.containCustom;
    }

    if (!$dara.isNull(request.hybridCloudExclude)) {
      query["HybridCloudExclude"] = request.hybridCloudExclude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaceList",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespaceListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespaceListResponse({}));
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - DescribeNamespaceListRequest
   * @returns DescribeNamespaceListResponse
   */
  async describeNamespaceList(request: $_model.DescribeNamespaceListRequest): Promise<$_model.DescribeNamespaceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceListWithOptions(request, headers, runtime);
  }

  /**
   * Query the information about resources in a namespace.
   * 
   * @param request - DescribeNamespaceResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespaceResourcesResponse
   */
  async describeNamespaceResourcesWithOptions(request: $_model.DescribeNamespaceResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespaceResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaceResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/describeNamespaceResources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespaceResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespaceResourcesResponse({}));
  }

  /**
   * Query the information about resources in a namespace.
   * 
   * @param request - DescribeNamespaceResourcesRequest
   * @returns DescribeNamespaceResourcesResponse
   */
  async describeNamespaceResources(request: $_model.DescribeNamespaceResourcesRequest): Promise<$_model.DescribeNamespaceResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespaceResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - DescribeNamespacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeNamespacesResponse
   */
  async describeNamespacesWithOptions(request: $_model.DescribeNamespacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeNamespacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeNamespaces",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeNamespacesResponse({}));
  }

  /**
   * Queries a list of namespaces.
   * 
   * @param request - DescribeNamespacesRequest
   * @returns DescribeNamespacesResponse
   */
  async describeNamespaces(request: $_model.DescribeNamespacesRequest): Promise<$_model.DescribeNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeNamespacesWithOptions(request, headers, runtime);
  }

  /**
   * View batch information
   * 
   * @param request - DescribePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePipelineResponse
   */
  async describePipelineWithOptions(request: $_model.DescribePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePipelineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePipeline",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/DescribePipeline`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePipelineResponse>(await this.callApi(params, req, runtime), new $_model.DescribePipelineResponse({}));
  }

  /**
   * View batch information
   * 
   * @param request - DescribePipelineRequest
   * @returns DescribePipelineResponse
   */
  async describePipeline(request: $_model.DescribePipelineRequest): Promise<$_model.DescribePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(request, headers, runtime);
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/regionConfig`,
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
   * Queries the details of a Secret.
   * 
   * @param request - DescribeSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSecretResponse
   */
  async describeSecretWithOptions(request: $_model.DescribeSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSecretResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSecretResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSecretResponse({}));
  }

  /**
   * Queries the details of a Secret.
   * 
   * @param request - DescribeSecretRequest
   * @returns DescribeSecretResponse
   */
  async describeSecret(request: $_model.DescribeSecretRequest): Promise<$_model.DescribeSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSecretWithOptions(request, headers, runtime);
  }

  /**
   * Queries details about swimlanes.
   * 
   * @param request - DescribeSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSwimmingLaneResponse
   */
  async describeSwimmingLaneWithOptions(request: $_model.DescribeSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSwimmingLane",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/describeSwimmingLane`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSwimmingLaneResponse({}));
  }

  /**
   * Queries details about swimlanes.
   * 
   * @param request - DescribeSwimmingLaneRequest
   * @returns DescribeSwimmingLaneResponse
   */
  async describeSwimmingLane(request: $_model.DescribeSwimmingLaneRequest): Promise<$_model.DescribeSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Query web applications.
   * 
   * @remarks
   * Call the DescribeWebApplication operation to query web applications.
   * 
   * @param request - DescribeWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebApplicationResponse
   */
  async describeWebApplicationWithOptions(ApplicationId: string, request: $_model.DescribeWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebApplicationResponse> {
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
      action: "DescribeWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebApplicationResponse({}));
  }

  /**
   * Query web applications.
   * 
   * @remarks
   * Call the DescribeWebApplication operation to query web applications.
   * 
   * @param request - DescribeWebApplicationRequest
   * @returns DescribeWebApplicationResponse
   */
  async describeWebApplication(ApplicationId: string, request: $_model.DescribeWebApplicationRequest): Promise<$_model.DescribeWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Query the resource usage of a web application.
   * 
   * @remarks
   * Query the resource usage of a web application.
   * 
   * @param request - DescribeWebApplicationResourceStaticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebApplicationResourceStaticsResponse
   */
  async describeWebApplicationResourceStaticsWithOptions(ApplicationId: string, request: $_model.DescribeWebApplicationResourceStaticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebApplicationResourceStaticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebApplicationResourceStatics",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${$dara.URL.percentEncode(ApplicationId)}/resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebApplicationResourceStaticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebApplicationResourceStaticsResponse({}));
  }

  /**
   * Query the resource usage of a web application.
   * 
   * @remarks
   * Query the resource usage of a web application.
   * 
   * @param request - DescribeWebApplicationResourceStaticsRequest
   * @returns DescribeWebApplicationResourceStaticsResponse
   */
  async describeWebApplicationResourceStatics(ApplicationId: string, request: $_model.DescribeWebApplicationResourceStaticsRequest): Promise<$_model.DescribeWebApplicationResourceStaticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationResourceStaticsWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Describe a web application version.
   * 
   * @remarks
   * Describe a web application version.
   * 
   * @param request - DescribeWebApplicationRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebApplicationRevisionResponse
   */
  async describeWebApplicationRevisionWithOptions(ApplicationId: string, RevisionId: string, request: $_model.DescribeWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebApplicationRevisionResponse> {
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
      action: "DescribeWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${$dara.URL.percentEncode(ApplicationId)}/revisions/${$dara.URL.percentEncode(RevisionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebApplicationRevisionResponse({}));
  }

  /**
   * Describe a web application version.
   * 
   * @remarks
   * Describe a web application version.
   * 
   * @param request - DescribeWebApplicationRevisionRequest
   * @returns DescribeWebApplicationRevisionResponse
   */
  async describeWebApplicationRevision(ApplicationId: string, RevisionId: string, request: $_model.DescribeWebApplicationRevisionRequest): Promise<$_model.DescribeWebApplicationRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationRevisionWithOptions(ApplicationId, RevisionId, request, headers, runtime);
  }

  /**
   * Describe the scaling configuration of a web application.
   * 
   * @remarks
   * Call the DescribeWebApplicationScalingConfig operation to obtain the scaling configuration of a web application.
   * 
   * @param request - DescribeWebApplicationScalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebApplicationScalingConfigResponse
   */
  async describeWebApplicationScalingConfigWithOptions(ApplicationId: string, request: $_model.DescribeWebApplicationScalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebApplicationScalingConfigResponse> {
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
      action: "DescribeWebApplicationScalingConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-scaling/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebApplicationScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebApplicationScalingConfigResponse({}));
  }

  /**
   * Describe the scaling configuration of a web application.
   * 
   * @remarks
   * Call the DescribeWebApplicationScalingConfig operation to obtain the scaling configuration of a web application.
   * 
   * @param request - DescribeWebApplicationScalingConfigRequest
   * @returns DescribeWebApplicationScalingConfigResponse
   */
  async describeWebApplicationScalingConfig(ApplicationId: string, request: $_model.DescribeWebApplicationScalingConfigRequest): Promise<$_model.DescribeWebApplicationScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationScalingConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Query the traffic configurations of a web application.
   * 
   * @remarks
   * Call the DescribeWebApplicationTrafficConfig operation to query the traffic configurations of a web application.
   * 
   * @param request - DescribeWebApplicationTrafficConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebApplicationTrafficConfigResponse
   */
  async describeWebApplicationTrafficConfigWithOptions(ApplicationId: string, request: $_model.DescribeWebApplicationTrafficConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebApplicationTrafficConfigResponse> {
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
      action: "DescribeWebApplicationTrafficConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-traffic/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebApplicationTrafficConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebApplicationTrafficConfigResponse({}));
  }

  /**
   * Query the traffic configurations of a web application.
   * 
   * @remarks
   * Call the DescribeWebApplicationTrafficConfig operation to query the traffic configurations of a web application.
   * 
   * @param request - DescribeWebApplicationTrafficConfigRequest
   * @returns DescribeWebApplicationTrafficConfigResponse
   */
  async describeWebApplicationTrafficConfig(ApplicationId: string, request: $_model.DescribeWebApplicationTrafficConfigRequest): Promise<$_model.DescribeWebApplicationTrafficConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebApplicationTrafficConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Query the details of a custom domain name for a web application.
   * 
   * @remarks
   * Query the details of a custom domain name for a web application.
   * 
   * @param request - DescribeWebCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebCustomDomainResponse
   */
  async describeWebCustomDomainWithOptions(DomainName: string, request: $_model.DescribeWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebCustomDomainResponse> {
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
      action: "DescribeWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${$dara.URL.percentEncode(DomainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebCustomDomainResponse({}));
  }

  /**
   * Query the details of a custom domain name for a web application.
   * 
   * @remarks
   * Query the details of a custom domain name for a web application.
   * 
   * @param request - DescribeWebCustomDomainRequest
   * @returns DescribeWebCustomDomainResponse
   */
  async describeWebCustomDomain(DomainName: string, request: $_model.DescribeWebCustomDomainRequest): Promise<$_model.DescribeWebCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

  /**
   * Obtain the logs of web application instances.
   * 
   * @remarks
   * Obtain the logs of web application instances.
   * 
   * @param request - DescribeWebInstanceLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebInstanceLogsResponse
   */
  async describeWebInstanceLogsWithOptions(ApplicationId: string, InstanceId: string, request: $_model.DescribeWebInstanceLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebInstanceLogsResponse> {
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
      action: "DescribeWebInstanceLogs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${$dara.URL.percentEncode(ApplicationId)}/instances/${$dara.URL.percentEncode(InstanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebInstanceLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebInstanceLogsResponse({}));
  }

  /**
   * Obtain the logs of web application instances.
   * 
   * @remarks
   * Obtain the logs of web application instances.
   * 
   * @param request - DescribeWebInstanceLogsRequest
   * @returns DescribeWebInstanceLogsResponse
   */
  async describeWebInstanceLogs(ApplicationId: string, InstanceId: string, request: $_model.DescribeWebInstanceLogsRequest): Promise<$_model.DescribeWebInstanceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWebInstanceLogsWithOptions(ApplicationId, InstanceId, request, headers, runtime);
  }

  /**
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/disableApplicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DisableApplicationScalingRuleResponse({}));
  }

  /**
   * @param request - DisableApplicationScalingRuleRequest
   * @returns DisableApplicationScalingRuleResponse
   */
  async disableApplicationScalingRule(request: $_model.DisableApplicationScalingRuleRequest): Promise<$_model.DisableApplicationScalingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableApplicationScalingRuleWithOptions(request, headers, runtime);
  }

  /**
   * @param request - DisableArmsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableArmsResponse
   */
  async disableArmsWithOptions(request: $_model.DisableArmsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableArmsResponse> {
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
      action: "DisableArms",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/arms/disableArms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableArmsResponse>(await this.callApi(params, req, runtime), new $_model.DisableArmsResponse({}));
  }

  /**
   * @param request - DisableArmsRequest
   * @returns DisableArmsResponse
   */
  async disableArms(request: $_model.DisableArmsRequest): Promise<$_model.DisableArmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableArmsWithOptions(request, headers, runtime);
  }

  /**
   * Disable ARMS Advanced Edition monitoring.
   * 
   * @param request - DowngradeApplicationApmServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DowngradeApplicationApmServiceResponse
   */
  async downgradeApplicationApmServiceWithOptions(request: $_model.DowngradeApplicationApmServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DowngradeApplicationApmServiceResponse> {
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
      action: "DowngradeApplicationApmService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/applicationApmService`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DowngradeApplicationApmServiceResponse>(await this.callApi(params, req, runtime), new $_model.DowngradeApplicationApmServiceResponse({}));
  }

  /**
   * Disable ARMS Advanced Edition monitoring.
   * 
   * @param request - DowngradeApplicationApmServiceRequest
   * @returns DowngradeApplicationApmServiceResponse
   */
  async downgradeApplicationApmService(request: $_model.DowngradeApplicationApmServiceRequest): Promise<$_model.DowngradeApplicationApmServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downgradeApplicationApmServiceWithOptions(request, headers, runtime);
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/enableApplicationScalingRule`,
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
   * @param request - ExecJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecJobResponse
   */
  async execJobWithOptions(request: $_model.ExecJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.eventId)) {
      query["EventId"] = request.eventId;
    }

    if (!$dara.isNull(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!$dara.isNull(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.time)) {
      query["Time"] = request.time;
    }

    if (!$dara.isNull(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/execJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecJobResponse>(await this.callApi(params, req, runtime), new $_model.ExecJobResponse({}));
  }

  /**
   * @param request - ExecJobRequest
   * @returns ExecJobResponse
   */
  async execJob(request: $_model.ExecJobRequest): Promise<$_model.ExecJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.execJobWithOptions(request, headers, runtime);
  }

  /**
   * Queries the basic information of an application.
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

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/getApplication`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Queries the basic information of an application.
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
   * The application name.
   * 
   * @param request - GetArmsTopNMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArmsTopNMetricResponse
   */
  async getArmsTopNMetricWithOptions(request: $_model.GetArmsTopNMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetArmsTopNMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArmsTopNMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getArmsTopNMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArmsTopNMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetArmsTopNMetricResponse({}));
  }

  /**
   * The application name.
   * 
   * @param request - GetArmsTopNMetricRequest
   * @returns GetArmsTopNMetricResponse
   */
  async getArmsTopNMetric(request: $_model.GetArmsTopNMetricRequest): Promise<$_model.GetArmsTopNMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getArmsTopNMetricWithOptions(request, headers, runtime);
  }

  /**
   * Queries the top N applications in which abnormal instances exist. The applications are sorted by the total number of abnormal instances.
   * 
   * @param request - GetAvailabilityMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAvailabilityMetricResponse
   */
  async getAvailabilityMetricWithOptions(request: $_model.GetAvailabilityMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAvailabilityMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAvailabilityMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getAvailabilityMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAvailabilityMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetAvailabilityMetricResponse({}));
  }

  /**
   * Queries the top N applications in which abnormal instances exist. The applications are sorted by the total number of abnormal instances.
   * 
   * @param request - GetAvailabilityMetricRequest
   * @returns GetAvailabilityMetricResponse
   */
  async getAvailabilityMetric(request: $_model.GetAvailabilityMetricRequest): Promise<$_model.GetAvailabilityMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAvailabilityMetricWithOptions(request, headers, runtime);
  }

  /**
   * Queries top N applications in abnormal change orders.
   * 
   * @param request - GetChangeOrderMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChangeOrderMetricResponse
   */
  async getChangeOrderMetricWithOptions(request: $_model.GetChangeOrderMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetChangeOrderMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!$dara.isNull(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChangeOrderMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getChangeOrderMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChangeOrderMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetChangeOrderMetricResponse({}));
  }

  /**
   * Queries top N applications in abnormal change orders.
   * 
   * @param request - GetChangeOrderMetricRequest
   * @returns GetChangeOrderMetricResponse
   */
  async getChangeOrderMetric(request: $_model.GetChangeOrderMetricRequest): Promise<$_model.GetChangeOrderMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getChangeOrderMetricWithOptions(request, headers, runtime);
  }

  /**
   * Queries the top N applications in which auto scaling takes effect.
   * 
   * @param request - GetScaleAppMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScaleAppMetricResponse
   */
  async getScaleAppMetricWithOptions(request: $_model.GetScaleAppMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScaleAppMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScaleAppMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getScaleAppMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScaleAppMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetScaleAppMetricResponse({}));
  }

  /**
   * Queries the top N applications in which auto scaling takes effect.
   * 
   * @param request - GetScaleAppMetricRequest
   * @returns GetScaleAppMetricResponse
   */
  async getScaleAppMetric(request: $_model.GetScaleAppMetricRequest): Promise<$_model.GetScaleAppMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScaleAppMetricWithOptions(request, headers, runtime);
  }

  /**
   * The number of Warning events.
   * 
   * @param request - GetWarningEventMetricRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWarningEventMetricResponse
   */
  async getWarningEventMetricWithOptions(request: $_model.GetWarningEventMetricRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWarningEventMetricResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.cpuStrategy)) {
      query["CpuStrategy"] = request.cpuStrategy;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWarningEventMetric",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/getWarningEventMetric`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWarningEventMetricResponse>(await this.callApi(params, req, runtime), new $_model.GetWarningEventMetricResponse({}));
  }

  /**
   * The number of Warning events.
   * 
   * @param request - GetWarningEventMetricRequest
   * @returns GetWarningEventMetricResponse
   */
  async getWarningEventMetric(request: $_model.GetWarningEventMetricRequest): Promise<$_model.GetWarningEventMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarningEventMetricWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the token used to remotely log on to the Webshell of an instance.
   * 
   * @param request - GetWebshellTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebshellTokenResponse
   */
  async getWebshellTokenWithOptions(request: $_model.GetWebshellTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWebshellTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.podName)) {
      query["PodName"] = request.podName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebshellToken",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/instance/webshellToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWebshellTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetWebshellTokenResponse({}));
  }

  /**
   * Obtains the token used to remotely log on to the Webshell of an instance.
   * 
   * @param request - GetWebshellTokenRequest
   * @returns GetWebshellTokenResponse
   */
  async getWebshellToken(request: $_model.GetWebshellTokenRequest): Promise<$_model.GetWebshellTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebshellTokenWithOptions(request, headers, runtime);
  }

  /**
   * Queries all lane groups.
   * 
   * @param request - ListAllSwimmingLaneGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllSwimmingLaneGroupsResponse
   */
  async listAllSwimmingLaneGroupsWithOptions(request: $_model.ListAllSwimmingLaneGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllSwimmingLaneGroupsResponse> {
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
      action: "ListAllSwimmingLaneGroups",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/listSwimmingLaneGroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllSwimmingLaneGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAllSwimmingLaneGroupsResponse({}));
  }

  /**
   * Queries all lane groups.
   * 
   * @param request - ListAllSwimmingLaneGroupsRequest
   * @returns ListAllSwimmingLaneGroupsResponse
   */
  async listAllSwimmingLaneGroups(request: $_model.ListAllSwimmingLaneGroupsRequest): Promise<$_model.ListAllSwimmingLaneGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllSwimmingLaneGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries all swimlanes.
   * 
   * @param request - ListAllSwimmingLanesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllSwimmingLanesResponse
   */
  async listAllSwimmingLanesWithOptions(request: $_model.ListAllSwimmingLanesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllSwimmingLanesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllSwimmingLanes",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/listSwimmingLanes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllSwimmingLanesResponse>(await this.callApi(params, req, runtime), new $_model.ListAllSwimmingLanesResponse({}));
  }

  /**
   * Queries all swimlanes.
   * 
   * @param request - ListAllSwimmingLanesRequest
   * @returns ListAllSwimmingLanesResponse
   */
  async listAllSwimmingLanes(request: $_model.ListAllSwimmingLanesRequest): Promise<$_model.ListAllSwimmingLanesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllSwimmingLanesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the events that occurred in an application.
   * 
   * @param request - ListAppEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppEventsResponse
   */
  async listAppEventsWithOptions(request: $_model.ListAppEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.objectKind)) {
      query["ObjectKind"] = request.objectKind;
    }

    if (!$dara.isNull(request.objectName)) {
      query["ObjectName"] = request.objectName;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reason)) {
      query["Reason"] = request.reason;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppEvents",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppEvents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppEventsResponse({}));
  }

  /**
   * Queries the events that occurred in an application.
   * 
   * @param request - ListAppEventsRequest
   * @returns ListAppEventsResponse
   */
  async listAppEvents(request: $_model.ListAppEventsRequest): Promise<$_model.ListAppEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppEventsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of microservices.
   * 
   * @param request - ListAppServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppServicesResponse
   */
  async listAppServicesWithOptions(request: $_model.ListAppServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.nacosInstanceId)) {
      query["NacosInstanceId"] = request.nacosInstanceId;
    }

    if (!$dara.isNull(request.nacosNamespaceId)) {
      query["NacosNamespaceId"] = request.nacosNamespaceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.registryType)) {
      query["RegistryType"] = request.registryType;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppServices",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listAppServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListAppServicesResponse({}));
  }

  /**
   * Queries the list of microservices.
   * 
   * @param request - ListAppServicesRequest
   * @returns ListAppServicesResponse
   */
  async listAppServices(request: $_model.ListAppServicesRequest): Promise<$_model.ListAppServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the services of an application.
   * 
   * @param request - ListAppServicesPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppServicesPageResponse
   */
  async listAppServicesPageWithOptions(request: $_model.ListAppServicesPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppServicesPageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAppServicesPage",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listAppServicesPage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppServicesPageResponse>(await this.callApi(params, req, runtime), new $_model.ListAppServicesPageResponse({}));
  }

  /**
   * Queries the services of an application.
   * 
   * @param request - ListAppServicesPageRequest
   * @returns ListAppServicesPageResponse
   */
  async listAppServicesPage(request: $_model.ListAppServicesPageRequest): Promise<$_model.ListAppServicesPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppServicesPageWithOptions(request, headers, runtime);
  }

  /**
   * Queries the deployment versions of an application.
   * 
   * @param request - ListAppVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppVersionsResponse
   */
  async listAppVersionsWithOptions(request: $_model.ListAppVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppVersionsResponse> {
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
      action: "ListAppVersions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listAppVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppVersionsResponse({}));
  }

  /**
   * Queries the deployment versions of an application.
   * 
   * @param request - ListAppVersionsRequest
   * @returns ListAppVersionsResponse
   */
  async listAppVersions(request: $_model.ListAppVersionsRequest): Promise<$_model.ListAppVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of applications.
   * 
   * @param request - ListApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(request: $_model.ListApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appSource)) {
      query["AppSource"] = request.appSource;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.fieldType)) {
      query["FieldType"] = request.fieldType;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.isStateful)) {
      query["IsStateful"] = request.isStateful;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.newSaeVersion)) {
      query["NewSaeVersion"] = request.newSaeVersion;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/listApplications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
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
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * Obtains the application list for the end-to-end grayscale pull application list.
   * 
   * @param request - ListApplicationsForSwimmingLaneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsForSwimmingLaneResponse
   */
  async listApplicationsForSwimmingLaneWithOptions(request: $_model.ListApplicationsForSwimmingLaneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsForSwimmingLaneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationsForSwimmingLane",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/listApplicationsForSwimmingLane`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsForSwimmingLaneResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsForSwimmingLaneResponse({}));
  }

  /**
   * Obtains the application list for the end-to-end grayscale pull application list.
   * 
   * @param request - ListApplicationsForSwimmingLaneRequest
   * @returns ListApplicationsForSwimmingLaneResponse
   */
  async listApplicationsForSwimmingLane(request: $_model.ListApplicationsForSwimmingLaneRequest): Promise<$_model.ListApplicationsForSwimmingLaneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApplicationsForSwimmingLaneWithOptions(request, headers, runtime);
  }

  /**
   * Query a list of change orders.
   * 
   * @param request - ListChangeOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChangeOrdersResponse
   */
  async listChangeOrdersWithOptions(request: $_model.ListChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListChangeOrdersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!$dara.isNull(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/ListChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChangeOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListChangeOrdersResponse({}));
  }

  /**
   * Query a list of change orders.
   * 
   * @param request - ListChangeOrdersRequest
   * @returns ListChangeOrdersResponse
   */
  async listChangeOrders(request: $_model.ListChangeOrdersRequest): Promise<$_model.ListChangeOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listChangeOrdersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of microservices that are subscribed.
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listConsumedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConsumedServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListConsumedServicesResponse({}));
  }

  /**
   * Queries a list of microservices that are subscribed.
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
   * Queries the details of a canary release rule based on an application ID.
   * 
   * @remarks
   * >  You can configure only one canary release rule for each application.
   * 
   * @param request - ListGreyTagRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGreyTagRouteResponse
   */
  async listGreyTagRouteWithOptions(request: $_model.ListGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGreyTagRouteResponse> {
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
      action: "ListGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRouteList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGreyTagRouteResponse>(await this.callApi(params, req, runtime), new $_model.ListGreyTagRouteResponse({}));
  }

  /**
   * Queries the details of a canary release rule based on an application ID.
   * 
   * @remarks
   * >  You can configure only one canary release rule for each application.
   * 
   * @param request - ListGreyTagRouteRequest
   * @returns ListGreyTagRouteResponse
   */
  async listGreyTagRoute(request: $_model.ListGreyTagRouteRequest): Promise<$_model.ListGreyTagRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * Use ListIngress API call to query Ingress list
   * 
   * @param request - ListIngressesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIngressesResponse
   */
  async listIngressesWithOptions(request: $_model.ListIngressesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIngressesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIngresses",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/IngressList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIngressesResponse>(await this.callApi(params, req, runtime), new $_model.ListIngressesResponse({}));
  }

  /**
   * Use ListIngress API call to query Ingress list
   * 
   * @param request - ListIngressesRequest
   * @returns ListIngressesResponse
   */
  async listIngresses(request: $_model.ListIngressesRequest): Promise<$_model.ListIngressesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIngressesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about job templates.
   * 
   * @param request - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(request: $_model.ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.fieldType)) {
      query["FieldType"] = request.fieldType;
    }

    if (!$dara.isNull(request.fieldValue)) {
      query["FieldValue"] = request.fieldValue;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.workload)) {
      query["Workload"] = request.workload;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/listJobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Queries the information about job templates.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of application logs.
   * 
   * @param request - ListLogConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogConfigsResponse
   */
  async listLogConfigsWithOptions(request: $_model.ListLogConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogConfigsResponse> {
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogConfigs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/log/listLogConfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogConfigsResponse({}));
  }

  /**
   * Queries a list of application logs.
   * 
   * @param request - ListLogConfigsRequest
   * @returns ListLogConfigsResponse
   */
  async listLogConfigs(request: $_model.ListLogConfigsRequest): Promise<$_model.ListLogConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of change orders in a namespace.
   * 
   * @param request - ListNamespaceChangeOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespaceChangeOrdersResponse
   */
  async listNamespaceChangeOrdersWithOptions(request: $_model.ListNamespaceChangeOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespaceChangeOrdersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coStatus)) {
      query["CoStatus"] = request.coStatus;
    }

    if (!$dara.isNull(request.coType)) {
      query["CoType"] = request.coType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespaceChangeOrders",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/changeorder/listNamespaceChangeOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespaceChangeOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespaceChangeOrdersResponse({}));
  }

  /**
   * Queries a list of change orders in a namespace.
   * 
   * @param request - ListNamespaceChangeOrdersRequest
   * @returns ListNamespaceChangeOrdersResponse
   */
  async listNamespaceChangeOrders(request: $_model.ListNamespaceChangeOrdersRequest): Promise<$_model.ListNamespaceChangeOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespaceChangeOrdersWithOptions(request, headers, runtime);
  }

  /**
   * Queries the ConfigMap instances in a namespace.
   * 
   * @param request - ListNamespacedConfigMapsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespacedConfigMapsResponse
   */
  async listNamespacedConfigMapsWithOptions(request: $_model.ListNamespacedConfigMapsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespacedConfigMapsResponse> {
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
      action: "ListNamespacedConfigMaps",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/listNamespacedConfigMaps`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespacedConfigMapsResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespacedConfigMapsResponse({}));
  }

  /**
   * Queries the ConfigMap instances in a namespace.
   * 
   * @param request - ListNamespacedConfigMapsRequest
   * @returns ListNamespacedConfigMapsResponse
   */
  async listNamespacedConfigMaps(request: $_model.ListNamespacedConfigMapsRequest): Promise<$_model.ListNamespacedConfigMapsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespacedConfigMapsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of microservices that are published.
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
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/service/listPublishedServices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPublishedServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListPublishedServicesResponse({}));
  }

  /**
   * Queries a list of microservices that are published.
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
   * Queries the information about Secrets in a namespace.
   * 
   * @param request - ListSecretsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretsResponse
   */
  async listSecretsWithOptions(request: $_model.ListSecretsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretsResponse> {
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
      action: "ListSecrets",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secrets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretsResponse({}));
  }

  /**
   * Queries the information about Secrets in a namespace.
   * 
   * @param request - ListSecretsRequest
   * @returns ListSecretsResponse
   */
  async listSecrets(request: $_model.ListSecretsRequest): Promise<$_model.ListSecretsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecretsWithOptions(request, headers, runtime);
  }

  /**
   * Query the gateway routes that are available for a lane
   * 
   * @param request - ListSwimmingLaneGatewayRoutesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSwimmingLaneGatewayRoutesResponse
   */
  async listSwimmingLaneGatewayRoutesWithOptions(request: $_model.ListSwimmingLaneGatewayRoutesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSwimmingLaneGatewayRoutesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayUniqueId)) {
      query["GatewayUniqueId"] = request.gatewayUniqueId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSwimmingLaneGatewayRoutes",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/listSwimmingLaneGatewayRoutes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSwimmingLaneGatewayRoutesResponse>(await this.callApi(params, req, runtime), new $_model.ListSwimmingLaneGatewayRoutesResponse({}));
  }

  /**
   * Query the gateway routes that are available for a lane
   * 
   * @param request - ListSwimmingLaneGatewayRoutesRequest
   * @returns ListSwimmingLaneGatewayRoutesResponse
   */
  async listSwimmingLaneGatewayRoutes(request: $_model.ListSwimmingLaneGatewayRoutesRequest): Promise<$_model.ListSwimmingLaneGatewayRoutesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneGatewayRoutesWithOptions(request, headers, runtime);
  }

  /**
   * Queries all lane tags.
   * 
   * @param request - ListSwimmingLaneGroupTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSwimmingLaneGroupTagsResponse
   */
  async listSwimmingLaneGroupTagsWithOptions(request: $_model.ListSwimmingLaneGroupTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSwimmingLaneGroupTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSwimmingLaneGroupTags",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/listSwimmingLaneGroupTags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSwimmingLaneGroupTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListSwimmingLaneGroupTagsResponse({}));
  }

  /**
   * Queries all lane tags.
   * 
   * @param request - ListSwimmingLaneGroupTagsRequest
   * @returns ListSwimmingLaneGroupTagsResponse
   */
  async listSwimmingLaneGroupTags(request: $_model.ListSwimmingLaneGroupTagsRequest): Promise<$_model.ListSwimmingLaneGroupTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwimmingLaneGroupTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the mapping relationships between applications and tags.
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-05-06",
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
   * Queries the mapping relationships between applications and tags.
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
   * Query the list of web application instances.
   * 
   * @remarks
   * Query the list of web application instances.
   * 
   * @param tmpReq - ListWebApplicationInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebApplicationInstancesResponse
   */
  async listWebApplicationInstancesWithOptions(ApplicationId: string, tmpReq: $_model.ListWebApplicationInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebApplicationInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWebApplicationInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.statuses)) {
      request.statusesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statuses, "Statuses", "json");
    }

    if (!$dara.isNull(tmpReq.versionIds)) {
      request.versionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.versionIds, "VersionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statusesShrink)) {
      query["Statuses"] = request.statusesShrink;
    }

    if (!$dara.isNull(request.versionIdsShrink)) {
      query["VersionIds"] = request.versionIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebApplicationInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications-observability/${$dara.URL.percentEncode(ApplicationId)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebApplicationInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListWebApplicationInstancesResponse({}));
  }

  /**
   * Query the list of web application instances.
   * 
   * @remarks
   * Query the list of web application instances.
   * 
   * @param request - ListWebApplicationInstancesRequest
   * @returns ListWebApplicationInstancesResponse
   */
  async listWebApplicationInstances(ApplicationId: string, request: $_model.ListWebApplicationInstancesRequest): Promise<$_model.ListWebApplicationInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationInstancesWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Query the list of web application versions.
   * 
   * @remarks
   * Query the list of web application versions.
   * 
   * @param request - ListWebApplicationRevisionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebApplicationRevisionsResponse
   */
  async listWebApplicationRevisionsWithOptions(ApplicationId: string, request: $_model.ListWebApplicationRevisionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebApplicationRevisionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebApplicationRevisions",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${$dara.URL.percentEncode(ApplicationId)}/revisions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebApplicationRevisionsResponse>(await this.callApi(params, req, runtime), new $_model.ListWebApplicationRevisionsResponse({}));
  }

  /**
   * Query the list of web application versions.
   * 
   * @remarks
   * Query the list of web application versions.
   * 
   * @param request - ListWebApplicationRevisionsRequest
   * @returns ListWebApplicationRevisionsResponse
   */
  async listWebApplicationRevisions(ApplicationId: string, request: $_model.ListWebApplicationRevisionsRequest): Promise<$_model.ListWebApplicationRevisionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationRevisionsWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Query the list of web applications.
   * 
   * @remarks
   * Call the ListWebApplications operation to query the list of web applications.
   * 
   * @param request - ListWebApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebApplicationsResponse
   */
  async listWebApplicationsWithOptions(request: $_model.ListWebApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebApplicationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebApplications",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListWebApplicationsResponse({}));
  }

  /**
   * Query the list of web applications.
   * 
   * @remarks
   * Call the ListWebApplications operation to query the list of web applications.
   * 
   * @param request - ListWebApplicationsRequest
   * @returns ListWebApplicationsResponse
   */
  async listWebApplications(request: $_model.ListWebApplicationsRequest): Promise<$_model.ListWebApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebApplicationsWithOptions(request, headers, runtime);
  }

  /**
   * Query available custom domain names.
   * 
   * @remarks
   * Query available custom domain names.
   * 
   * @param request - ListWebCustomDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWebCustomDomainsResponse
   */
  async listWebCustomDomainsWithOptions(request: $_model.ListWebCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWebCustomDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWebCustomDomains",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWebCustomDomainsResponse>(await this.callApi(params, req, runtime), new $_model.ListWebCustomDomainsResponse({}));
  }

  /**
   * Query available custom domain names.
   * 
   * @remarks
   * Query available custom domain names.
   * 
   * @param request - ListWebCustomDomainsRequest
   * @returns ListWebCustomDomainsResponse
   */
  async listWebCustomDomains(request: $_model.ListWebCustomDomainsRequest): Promise<$_model.ListWebCustomDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWebCustomDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Activates Serverless App Engine (SAE) for free.
   * 
   * @remarks
   * > Make sure that your account balance is greater than 0. Otherwise, the SAE service cannot be activated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenSaeServiceResponse
   */
  async openSaeServiceWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenSaeServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenSaeService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/service/open`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenSaeServiceResponse>(await this.callApi(params, req, runtime), new $_model.OpenSaeServiceResponse({}));
  }

  /**
   * Activates Serverless App Engine (SAE) for free.
   * 
   * @remarks
   * > Make sure that your account balance is greater than 0. Otherwise, the SAE service cannot be activated.
   * @returns OpenSaeServiceResponse
   */
  async openSaeService(): Promise<$_model.OpenSaeServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openSaeServiceWithOptions(headers, runtime);
  }

  /**
   * Publish a web application version.
   * 
   * @remarks
   * Publish a web application version. You can change the configurations of the version and create a new version.
   * 
   * @param request - PublishWebApplicationRevisionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishWebApplicationRevisionResponse
   */
  async publishWebApplicationRevisionWithOptions(ApplicationId: string, request: $_model.PublishWebApplicationRevisionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishWebApplicationRevisionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishWebApplicationRevision",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-revisions/${$dara.URL.percentEncode(ApplicationId)}/revisions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishWebApplicationRevisionResponse>(await this.callApi(params, req, runtime), new $_model.PublishWebApplicationRevisionResponse({}));
  }

  /**
   * Publish a web application version.
   * 
   * @remarks
   * Publish a web application version. You can change the configurations of the version and create a new version.
   * 
   * @param request - PublishWebApplicationRevisionRequest
   * @returns PublishWebApplicationRevisionResponse
   */
  async publishWebApplicationRevision(ApplicationId: string, request: $_model.PublishWebApplicationRevisionRequest): Promise<$_model.PublishWebApplicationRevisionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishWebApplicationRevisionWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Queries whether ARMS monitoring is enabled for a specified application.
   * 
   * @param request - QueryArmsEnableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryArmsEnableResponse
   */
  async queryArmsEnableWithOptions(request: $_model.QueryArmsEnableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryArmsEnableResponse> {
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
      action: "QueryArmsEnable",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/arms/queryArms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryArmsEnableResponse>(await this.callApi(params, req, runtime), new $_model.QueryArmsEnableResponse({}));
  }

  /**
   * Queries whether ARMS monitoring is enabled for a specified application.
   * 
   * @param request - QueryArmsEnableRequest
   * @returns QueryArmsEnableResponse
   */
  async queryArmsEnable(request: $_model.QueryArmsEnableRequest): Promise<$_model.QueryArmsEnableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryArmsEnableWithOptions(request, headers, runtime);
  }

  /**
   * Queries the resource usage of an application.
   * 
   * @param request - QueryResourceStaticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryResourceStaticsResponse
   */
  async queryResourceStaticsWithOptions(request: $_model.QueryResourceStaticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryResourceStaticsResponse> {
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
      action: "QueryResourceStatics",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/quota/queryResourceStatics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryResourceStaticsResponse>(await this.callApi(params, req, runtime), new $_model.QueryResourceStaticsResponse({}));
  }

  /**
   * Queries the resource usage of an application.
   * 
   * @param request - QueryResourceStaticsRequest
   * @returns QueryResourceStaticsResponse
   */
  async queryResourceStatics(request: $_model.QueryResourceStaticsRequest): Promise<$_model.QueryResourceStaticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryResourceStaticsWithOptions(request, headers, runtime);
  }

  /**
   * Scales in an application based on instance IDs.
   * 
   * @param request - ReduceApplicationCapacityByInstanceIdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReduceApplicationCapacityByInstanceIdsResponse
   */
  async reduceApplicationCapacityByInstanceIdsWithOptions(request: $_model.ReduceApplicationCapacityByInstanceIdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReduceApplicationCapacityByInstanceIdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReduceApplicationCapacityByInstanceIds",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/ScaleInApplicationWithInstanceIds`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReduceApplicationCapacityByInstanceIdsResponse>(await this.callApi(params, req, runtime), new $_model.ReduceApplicationCapacityByInstanceIdsResponse({}));
  }

  /**
   * Scales in an application based on instance IDs.
   * 
   * @param request - ReduceApplicationCapacityByInstanceIdsRequest
   * @returns ReduceApplicationCapacityByInstanceIdsResponse
   */
  async reduceApplicationCapacityByInstanceIds(request: $_model.ReduceApplicationCapacityByInstanceIdsRequest): Promise<$_model.ReduceApplicationCapacityByInstanceIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reduceApplicationCapacityByInstanceIdsWithOptions(request, headers, runtime);
  }

  /**
   * Rescale an application.
   * 
   * @param request - RescaleApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RescaleApplicationResponse
   */
  async rescaleApplicationWithOptions(request: $_model.RescaleApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RescaleApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RescaleApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RescaleApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RescaleApplicationResponse({}));
  }

  /**
   * Rescale an application.
   * 
   * @param request - RescaleApplicationRequest
   * @returns RescaleApplicationResponse
   */
  async rescaleApplication(request: $_model.RescaleApplicationRequest): Promise<$_model.RescaleApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationWithOptions(request, headers, runtime);
  }

  /**
   * Changes the instance specifications of an application.
   * 
   * @param request - RescaleApplicationVerticallyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RescaleApplicationVerticallyResponse
   */
  async rescaleApplicationVerticallyWithOptions(request: $_model.RescaleApplicationVerticallyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RescaleApplicationVerticallyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.cpu)) {
      query["Cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!$dara.isNull(request.diskSize)) {
      query["DiskSize"] = request.diskSize;
    }

    if (!$dara.isNull(request.memory)) {
      query["Memory"] = request.memory;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.autoEnableApplicationScalingRule)) {
      query["autoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["minReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["minReadyInstances"] = request.minReadyInstances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RescaleApplicationVertically",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rescaleApplicationVertically`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RescaleApplicationVerticallyResponse>(await this.callApi(params, req, runtime), new $_model.RescaleApplicationVerticallyResponse({}));
  }

  /**
   * Changes the instance specifications of an application.
   * 
   * @param request - RescaleApplicationVerticallyRequest
   * @returns RescaleApplicationVerticallyResponse
   */
  async rescaleApplicationVertically(request: $_model.RescaleApplicationVerticallyRequest): Promise<$_model.RescaleApplicationVerticallyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rescaleApplicationVerticallyWithOptions(request, headers, runtime);
  }

  /**
   * Restarts an application.
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

    if (!$dara.isNull(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartApplication`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartApplicationResponse>(await this.callApi(params, req, runtime), new $_model.RestartApplicationResponse({}));
  }

  /**
   * Restarts an application.
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
   * Restarts one or more instances in an application.
   * 
   * @param request - RestartInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstancesResponse
   */
  async restartInstancesWithOptions(request: $_model.RestartInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstances",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/restartInstances`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstancesResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstancesResponse({}));
  }

  /**
   * Restarts one or more instances in an application.
   * 
   * @param request - RestartInstancesRequest
   * @returns RestartInstancesResponse
   */
  async restartInstances(request: $_model.RestartInstancesRequest): Promise<$_model.RestartInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 恢复实例的流量
   * 
   * @param request - ResumeTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTrafficResponse
   */
  async resumeTrafficWithOptions(request: $_model.ResumeTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTraffic",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/instanceTrafficResume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeTrafficResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTrafficResponse({}));
  }

  /**
   * 恢复实例的流量
   * 
   * @param request - ResumeTrafficRequest
   * @returns ResumeTrafficResponse
   */
  async resumeTraffic(request: $_model.ResumeTrafficRequest): Promise<$_model.ResumeTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTrafficWithOptions(request, headers, runtime);
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

    if (!$dara.isNull(request.autoEnableApplicationScalingRule)) {
      query["AutoEnableApplicationScalingRule"] = request.autoEnableApplicationScalingRule;
    }

    if (!$dara.isNull(request.batchWaitTime)) {
      query["BatchWaitTime"] = request.batchWaitTime;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!$dara.isNull(request.updateStrategy)) {
      query["UpdateStrategy"] = request.updateStrategy;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/rollbackApplication`,
      method: "PUT",
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/startApplication`,
      method: "PUT",
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
   * Start a web application.
   * 
   * @remarks
   * Call the StartWebApplication operation to start a web application.
   * 
   * @param request - StartWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartWebApplicationResponse
   */
  async startWebApplicationWithOptions(ApplicationId: string, request: $_model.StartWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartWebApplicationResponse> {
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
      action: "StartWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-ops/${$dara.URL.percentEncode(ApplicationId)}/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StartWebApplicationResponse({}));
  }

  /**
   * Start a web application.
   * 
   * @remarks
   * Call the StartWebApplication operation to start a web application.
   * 
   * @param request - StartWebApplicationRequest
   * @returns StartWebApplicationResponse
   */
  async startWebApplication(ApplicationId: string, request: $_model.StartWebApplicationRequest): Promise<$_model.StartWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startWebApplicationWithOptions(ApplicationId, request, headers, runtime);
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/stopApplication`,
      method: "PUT",
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
   * Stop a web application.
   * 
   * @remarks
   * Call the StopWebApplication operation to stop a web application.
   * 
   * @param request - StopWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopWebApplicationResponse
   */
  async stopWebApplicationWithOptions(ApplicationId: string, request: $_model.StopWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopWebApplicationResponse> {
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
      action: "StopWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-ops/${$dara.URL.percentEncode(ApplicationId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.StopWebApplicationResponse({}));
  }

  /**
   * Stop a web application.
   * 
   * @remarks
   * Call the StopWebApplication operation to stop a web application.
   * 
   * @param request - StopWebApplicationRequest
   * @returns StopWebApplicationResponse
   */
  async stopWebApplication(ApplicationId: string, request: $_model.StopWebApplicationRequest): Promise<$_model.StopWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Suspends one or more jobs.
   * 
   * @param request - SuspendJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendJobResponse
   */
  async suspendJobWithOptions(request: $_model.SuspendJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.suspend)) {
      query["Suspend"] = request.suspend;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/suspendJob`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendJobResponse({}));
  }

  /**
   * Suspends one or more jobs.
   * 
   * @param request - SuspendJobRequest
   * @returns SuspendJobResponse
   */
  async suspendJob(request: $_model.SuspendJobRequest): Promise<$_model.SuspendJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.suspendJobWithOptions(request, headers, runtime);
  }

  /**
   * 将流量从实例中摘除
   * 
   * @param request - SuspendTrafficRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendTrafficResponse
   */
  async suspendTrafficWithOptions(request: $_model.SuspendTrafficRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendTrafficResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendTraffic",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/instanceTrafficSuspend`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendTrafficResponse>(await this.callApi(params, req, runtime), new $_model.SuspendTrafficResponse({}));
  }

  /**
   * 将流量从实例中摘除
   * 
   * @param request - SuspendTrafficRequest
   * @returns SuspendTrafficResponse
   */
  async suspendTraffic(request: $_model.SuspendTrafficRequest): Promise<$_model.SuspendTrafficResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.suspendTrafficWithOptions(request, headers, runtime);
  }

  /**
   * Adds tags to resources.
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
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources.
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
   * Calls the UnbindNlb operation to delete an NLB listener bound for application access
   * 
   * @param request - UnbindNlbRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindNlbResponse
   */
  async unbindNlbWithOptions(request: $_model.UnbindNlbRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindNlbResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.nlbId)) {
      query["NlbId"] = request.nlbId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.protocol)) {
      query["Protocol"] = request.protocol;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindNlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/nlb`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindNlbResponse>(await this.callApi(params, req, runtime), new $_model.UnbindNlbResponse({}));
  }

  /**
   * Calls the UnbindNlb operation to delete an NLB listener bound for application access
   * 
   * @param request - UnbindNlbRequest
   * @returns UnbindNlbResponse
   */
  async unbindNlb(request: $_model.UnbindNlbRequest): Promise<$_model.UnbindNlbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unbindNlbWithOptions(request, headers, runtime);
  }

  /**
   * Disassociates an internal-facing or Internet-facing SLB instance from an application.
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

    if (!$dara.isNull(request.internet)) {
      query["Internet"] = request.internet;
    }

    if (!$dara.isNull(request.intranet)) {
      query["Intranet"] = request.intranet;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindSlb",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/slb`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindSlbResponse>(await this.callApi(params, req, runtime), new $_model.UnbindSlbResponse({}));
  }

  /**
   * Disassociates an internal-facing or Internet-facing SLB instance from an application.
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
   * Removes tags from resources.
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
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-05-06",
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
   * Removes tags from resources.
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
   * Application Idle Mode Update
   * 
   * @param request - UpdateAppModeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppModeResponse
   */
  async updateAppModeWithOptions(request: $_model.UpdateAppModeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppModeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.enableIdle)) {
      query["EnableIdle"] = request.enableIdle;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppMode",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppMode`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppModeResponse({}));
  }

  /**
   * Application Idle Mode Update
   * 
   * @param request - UpdateAppModeRequest
   * @returns UpdateAppModeResponse
   */
  async updateAppMode(request: $_model.UpdateAppModeRequest): Promise<$_model.UpdateAppModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppModeWithOptions(request, headers, runtime);
  }

  /**
   * Updates the security group of an application.
   * 
   * @param request - UpdateAppSecurityGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppSecurityGroupResponse
   */
  async updateAppSecurityGroupWithOptions(request: $_model.UpdateAppSecurityGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppSecurityGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppSecurityGroup",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppSecurityGroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppSecurityGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppSecurityGroupResponse({}));
  }

  /**
   * Updates the security group of an application.
   * 
   * @param request - UpdateAppSecurityGroupRequest
   * @returns UpdateAppSecurityGroupResponse
   */
  async updateAppSecurityGroup(request: $_model.UpdateAppSecurityGroupRequest): Promise<$_model.UpdateAppSecurityGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppSecurityGroupWithOptions(request, headers, runtime);
  }

  /**
   * Updates the description of an application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescriptionWithOptions(request: $_model.UpdateApplicationDescriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationDescriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appDescription)) {
      query["AppDescription"] = request.appDescription;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationDescription",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppDescription`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationDescriptionResponse({}));
  }

  /**
   * Updates the description of an application.
   * 
   * @param request - UpdateApplicationDescriptionRequest
   * @returns UpdateApplicationDescriptionResponse
   */
  async updateApplicationDescription(request: $_model.UpdateApplicationDescriptionRequest): Promise<$_model.UpdateApplicationDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationDescriptionWithOptions(request, headers, runtime);
  }

  /**
   * Updates the auto scaling policy of an application.
   * 
   * @remarks
   * ##
   * If you want to configure more than 50 instances for an application, you must submit a [ticket](https://workorder.console.aliyun.com/#/ticket/createIndex) to add your account to the whitelist.
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

    if (!$dara.isNull(request.enableIdle)) {
      query["EnableIdle"] = request.enableIdle;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationScalingRule",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/scale/applicationScalingRule`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationScalingRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationScalingRuleResponse({}));
  }

  /**
   * Updates the auto scaling policy of an application.
   * 
   * @remarks
   * ##
   * If you want to configure more than 50 instances for an application, you must submit a [ticket](https://workorder.console.aliyun.com/#/ticket/createIndex) to add your account to the whitelist.
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
   * Update the configuration of a vSwitch.
   * 
   * @param request - UpdateApplicationVswitchesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationVswitchesResponse
   */
  async updateApplicationVswitchesWithOptions(request: $_model.UpdateApplicationVswitchesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationVswitchesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deploy)) {
      query["Deploy"] = request.deploy;
    }

    if (!$dara.isNull(request.minReadyInstanceRatio)) {
      query["MinReadyInstanceRatio"] = request.minReadyInstanceRatio;
    }

    if (!$dara.isNull(request.minReadyInstances)) {
      query["MinReadyInstances"] = request.minReadyInstances;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationVswitches",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/updateAppVswitches`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationVswitchesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationVswitchesResponse({}));
  }

  /**
   * Update the configuration of a vSwitch.
   * 
   * @param request - UpdateApplicationVswitchesRequest
   * @returns UpdateApplicationVswitchesResponse
   */
  async updateApplicationVswitches(request: $_model.UpdateApplicationVswitchesRequest): Promise<$_model.UpdateApplicationVswitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApplicationVswitchesWithOptions(request, headers, runtime);
  }

  /**
   * Updates a ConfigMap instance.
   * 
   * @param request - UpdateConfigMapRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigMapResponse
   */
  async updateConfigMapWithOptions(request: $_model.UpdateConfigMapRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigMapResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configMapId)) {
      query["ConfigMapId"] = request.configMapId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigMap",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/configmap/configMap`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigMapResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigMapResponse({}));
  }

  /**
   * Updates a ConfigMap instance.
   * 
   * @param request - UpdateConfigMapRequest
   * @returns UpdateConfigMapResponse
   */
  async updateConfigMap(request: $_model.UpdateConfigMapRequest): Promise<$_model.UpdateConfigMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigMapWithOptions(request, headers, runtime);
  }

  /**
   * Updates a canary release rule.
   * 
   * @param request - UpdateGreyTagRouteRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGreyTagRouteResponse
   */
  async updateGreyTagRouteWithOptions(request: $_model.UpdateGreyTagRouteRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGreyTagRouteResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.albRules)) {
      query["AlbRules"] = request.albRules;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dubboRules)) {
      query["DubboRules"] = request.dubboRules;
    }

    if (!$dara.isNull(request.greyTagRouteId)) {
      query["GreyTagRouteId"] = request.greyTagRouteId;
    }

    if (!$dara.isNull(request.scRules)) {
      query["ScRules"] = request.scRules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGreyTagRoute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/tagroute/greyTagRoute`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGreyTagRouteResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGreyTagRouteResponse({}));
  }

  /**
   * Updates a canary release rule.
   * 
   * @param request - UpdateGreyTagRouteRequest
   * @returns UpdateGreyTagRouteResponse
   */
  async updateGreyTagRoute(request: $_model.UpdateGreyTagRouteRequest): Promise<$_model.UpdateGreyTagRouteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGreyTagRouteWithOptions(request, headers, runtime);
  }

  /**
   * Update the configurations of an Ingress instance.
   * 
   * @param request - UpdateIngressRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIngressResponse
   */
  async updateIngressWithOptions(request: $_model.UpdateIngressRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIngressResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certId)) {
      query["CertId"] = request.certId;
    }

    if (!$dara.isNull(request.certIds)) {
      query["CertIds"] = request.certIds;
    }

    if (!$dara.isNull(request.corsConfig)) {
      query["CorsConfig"] = request.corsConfig;
    }

    if (!$dara.isNull(request.defaultRule)) {
      query["DefaultRule"] = request.defaultRule;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.enableGzip)) {
      query["EnableGzip"] = request.enableGzip;
    }

    if (!$dara.isNull(request.enableXForwardedFor)) {
      query["EnableXForwardedFor"] = request.enableXForwardedFor;
    }

    if (!$dara.isNull(request.enableXForwardedForClientSrcPort)) {
      query["EnableXForwardedForClientSrcPort"] = request.enableXForwardedForClientSrcPort;
    }

    if (!$dara.isNull(request.enableXForwardedForProto)) {
      query["EnableXForwardedForProto"] = request.enableXForwardedForProto;
    }

    if (!$dara.isNull(request.enableXForwardedForSlbId)) {
      query["EnableXForwardedForSlbId"] = request.enableXForwardedForSlbId;
    }

    if (!$dara.isNull(request.enableXForwardedForSlbPort)) {
      query["EnableXForwardedForSlbPort"] = request.enableXForwardedForSlbPort;
    }

    if (!$dara.isNull(request.idleTimeout)) {
      query["IdleTimeout"] = request.idleTimeout;
    }

    if (!$dara.isNull(request.ingressId)) {
      query["IngressId"] = request.ingressId;
    }

    if (!$dara.isNull(request.listenerPort)) {
      query["ListenerPort"] = request.listenerPort;
    }

    if (!$dara.isNull(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!$dara.isNull(request.loadBalanceType)) {
      query["LoadBalanceType"] = request.loadBalanceType;
    }

    if (!$dara.isNull(request.requestTimeout)) {
      query["RequestTimeout"] = request.requestTimeout;
    }

    if (!$dara.isNull(request.securityPolicyId)) {
      query["SecurityPolicyId"] = request.securityPolicyId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rules)) {
      body["Rules"] = request.rules;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIngress",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/ingress/Ingress`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIngressResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIngressResponse({}));
  }

  /**
   * Update the configurations of an Ingress instance.
   * 
   * @param request - UpdateIngressRequest
   * @returns UpdateIngressResponse
   */
  async updateIngress(request: $_model.UpdateIngressRequest): Promise<$_model.UpdateIngressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIngressWithOptions(request, headers, runtime);
  }

  /**
   * Updates a job template.
   * 
   * @param request - UpdateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateJobResponse
   */
  async updateJobWithOptions(request: $_model.UpdateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrAssumeRoleArn)) {
      query["AcrAssumeRoleArn"] = request.acrAssumeRoleArn;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.backoffLimit)) {
      query["BackoffLimit"] = request.backoffLimit;
    }

    if (!$dara.isNull(request.bestEffortType)) {
      query["BestEffortType"] = request.bestEffortType;
    }

    if (!$dara.isNull(request.command)) {
      query["Command"] = request.command;
    }

    if (!$dara.isNull(request.commandArgs)) {
      query["CommandArgs"] = request.commandArgs;
    }

    if (!$dara.isNull(request.concurrencyPolicy)) {
      query["ConcurrencyPolicy"] = request.concurrencyPolicy;
    }

    if (!$dara.isNull(request.customHostAlias)) {
      query["CustomHostAlias"] = request.customHostAlias;
    }

    if (!$dara.isNull(request.edasContainerVersion)) {
      query["EdasContainerVersion"] = request.edasContainerVersion;
    }

    if (!$dara.isNull(request.envs)) {
      query["Envs"] = request.envs;
    }

    if (!$dara.isNull(request.imagePullSecrets)) {
      query["ImagePullSecrets"] = request.imagePullSecrets;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.jarStartArgs)) {
      query["JarStartArgs"] = request.jarStartArgs;
    }

    if (!$dara.isNull(request.jarStartOptions)) {
      query["JarStartOptions"] = request.jarStartOptions;
    }

    if (!$dara.isNull(request.jdk)) {
      query["Jdk"] = request.jdk;
    }

    if (!$dara.isNull(request.mountDesc)) {
      query["MountDesc"] = request.mountDesc;
    }

    if (!$dara.isNull(request.mountHost)) {
      query["MountHost"] = request.mountHost;
    }

    if (!$dara.isNull(request.nasConfigs)) {
      query["NasConfigs"] = request.nasConfigs;
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

    if (!$dara.isNull(request.phpConfigLocation)) {
      query["PhpConfigLocation"] = request.phpConfigLocation;
    }

    if (!$dara.isNull(request.postStart)) {
      query["PostStart"] = request.postStart;
    }

    if (!$dara.isNull(request.preStop)) {
      query["PreStop"] = request.preStop;
    }

    if (!$dara.isNull(request.programmingLanguage)) {
      query["ProgrammingLanguage"] = request.programmingLanguage;
    }

    if (!$dara.isNull(request.python)) {
      query["Python"] = request.python;
    }

    if (!$dara.isNull(request.pythonModules)) {
      query["PythonModules"] = request.pythonModules;
    }

    if (!$dara.isNull(request.refAppId)) {
      query["RefAppId"] = request.refAppId;
    }

    if (!$dara.isNull(request.replicas)) {
      query["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.slice)) {
      query["Slice"] = request.slice;
    }

    if (!$dara.isNull(request.sliceEnvs)) {
      query["SliceEnvs"] = request.sliceEnvs;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.terminationGracePeriodSeconds)) {
      query["TerminationGracePeriodSeconds"] = request.terminationGracePeriodSeconds;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.timezone)) {
      query["Timezone"] = request.timezone;
    }

    if (!$dara.isNull(request.tomcatConfig)) {
      query["TomcatConfig"] = request.tomcatConfig;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      query["TriggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.warStartOptions)) {
      query["WarStartOptions"] = request.warStartOptions;
    }

    if (!$dara.isNull(request.webContainer)) {
      query["WebContainer"] = request.webContainer;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrInstanceId)) {
      body["AcrInstanceId"] = request.acrInstanceId;
    }

    if (!$dara.isNull(request.configMapMountDesc)) {
      body["ConfigMapMountDesc"] = request.configMapMountDesc;
    }

    if (!$dara.isNull(request.enableImageAccl)) {
      body["EnableImageAccl"] = request.enableImageAccl;
    }

    if (!$dara.isNull(request.ossAkId)) {
      body["OssAkId"] = request.ossAkId;
    }

    if (!$dara.isNull(request.ossAkSecret)) {
      body["OssAkSecret"] = request.ossAkSecret;
    }

    if (!$dara.isNull(request.ossMountDescs)) {
      body["OssMountDescs"] = request.ossMountDescs;
    }

    if (!$dara.isNull(request.php)) {
      body["Php"] = request.php;
    }

    if (!$dara.isNull(request.phpConfig)) {
      body["PhpConfig"] = request.phpConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateJob",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/job/updateJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateJobResponse({}));
  }

  /**
   * Updates a job template.
   * 
   * @param request - UpdateJobRequest
   * @returns UpdateJobResponse
   */
  async updateJob(request: $_model.UpdateJobRequest): Promise<$_model.UpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateJobWithOptions(request, headers, runtime);
  }

  /**
   * Updates the information about a namespace.
   * 
   * @param request - UpdateNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(request: $_model.UpdateNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableMicroRegistration)) {
      query["EnableMicroRegistration"] = request.enableMicroRegistration;
    }

    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceDescription)) {
      query["NamespaceDescription"] = request.namespaceDescription;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/paas/namespace`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceResponse({}));
  }

  /**
   * Updates the information about a namespace.
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: $_model.UpdateNamespaceRequest): Promise<$_model.UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * 更新命名空间级别sls配置
   * 
   * @param request - UpdateNamespaceSlsConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceSlsConfigsResponse
   */
  async updateNamespaceSlsConfigsWithOptions(request: $_model.UpdateNamespaceSlsConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceSlsConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.slsConfigs)) {
      query["SlsConfigs"] = request.slsConfigs;
    }

    if (!$dara.isNull(request.slsLogEnvTags)) {
      query["SlsLogEnvTags"] = request.slsLogEnvTags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespaceSlsConfigs",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/cas/namespace/updateNamespaceSlsConfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceSlsConfigsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceSlsConfigsResponse({}));
  }

  /**
   * 更新命名空间级别sls配置
   * 
   * @param request - UpdateNamespaceSlsConfigsRequest
   * @returns UpdateNamespaceSlsConfigsResponse
   */
  async updateNamespaceSlsConfigs(request: $_model.UpdateNamespaceSlsConfigsRequest): Promise<$_model.UpdateNamespaceSlsConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceSlsConfigsWithOptions(request, headers, runtime);
  }

  /**
   * cn-beijing:test
   * 
   * @param request - UpdateNamespaceVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceVpcResponse
   */
  async updateNamespaceVpcWithOptions(request: $_model.UpdateNamespaceVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nameSpaceShortId)) {
      query["NameSpaceShortId"] = request.nameSpaceShortId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespaceVpc",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/namespace/updateNamespaceVpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceVpcResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceVpcResponse({}));
  }

  /**
   * cn-beijing:test
   * 
   * @param request - UpdateNamespaceVpcRequest
   * @returns UpdateNamespaceVpcResponse
   */
  async updateNamespaceVpc(request: $_model.UpdateNamespaceVpcRequest): Promise<$_model.UpdateNamespaceVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNamespaceVpcWithOptions(request, headers, runtime);
  }

  /**
   * The HTTP status code. Valid values:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @param tmpReq - UpdateSecretRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretResponse
   */
  async updateSecretWithOptions(tmpReq: $_model.UpdateSecretRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecretShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.secretData)) {
      request.secretDataShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.secretData, "SecretData", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.secretDataShrink)) {
      query["SecretData"] = request.secretDataShrink;
    }

    if (!$dara.isNull(request.secretId)) {
      query["SecretId"] = request.secretId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecret",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/secret/secret`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecretResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretResponse({}));
  }

  /**
   * The HTTP status code. Valid values:
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @param request - UpdateSecretRequest
   * @returns UpdateSecretResponse
   */
  async updateSecret(request: $_model.UpdateSecretRequest): Promise<$_model.UpdateSecretResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSecretWithOptions(request, headers, runtime);
  }

  /**
   * Update the enabled property of the swimlane.
   * 
   * @param request - UpdateSwimmingLaneEnableAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSwimmingLaneEnableAttributeResponse
   */
  async updateSwimmingLaneEnableAttributeWithOptions(request: $_model.UpdateSwimmingLaneEnableAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSwimmingLaneEnableAttributeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.laneId)) {
      query["LaneId"] = request.laneId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSwimmingLaneEnableAttribute",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/cas/gray/updateSwimmingLaneEnableAttribute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSwimmingLaneEnableAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSwimmingLaneEnableAttributeResponse({}));
  }

  /**
   * Update the enabled property of the swimlane.
   * 
   * @param request - UpdateSwimmingLaneEnableAttributeRequest
   * @returns UpdateSwimmingLaneEnableAttributeResponse
   */
  async updateSwimmingLaneEnableAttribute(request: $_model.UpdateSwimmingLaneEnableAttributeRequest): Promise<$_model.UpdateSwimmingLaneEnableAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSwimmingLaneEnableAttributeWithOptions(request, headers, runtime);
  }

  /**
   * Updates the configuration at the web application level.
   * 
   * @remarks
   * You can call the UpdateWebApplication operation to update the configuration at the web application level.
   * 
   * @param request - UpdateWebApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebApplicationResponse
   */
  async updateWebApplicationWithOptions(ApplicationId: string, request: $_model.UpdateWebApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebApplication",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/applications/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebApplicationResponse({}));
  }

  /**
   * Updates the configuration at the web application level.
   * 
   * @remarks
   * You can call the UpdateWebApplication operation to update the configuration at the web application level.
   * 
   * @param request - UpdateWebApplicationRequest
   * @returns UpdateWebApplicationResponse
   */
  async updateWebApplication(ApplicationId: string, request: $_model.UpdateWebApplicationRequest): Promise<$_model.UpdateWebApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Update the scaling configuration of a web application.
   * 
   * @remarks
   * You can call the UpdateWebApplicationScalingConfig operation to update the scaling configurations of a web application.
   * 
   * @param request - UpdateWebApplicationScalingConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebApplicationScalingConfigResponse
   */
  async updateWebApplicationScalingConfigWithOptions(ApplicationId: string, request: $_model.UpdateWebApplicationScalingConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebApplicationScalingConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebApplicationScalingConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-scaling/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebApplicationScalingConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebApplicationScalingConfigResponse({}));
  }

  /**
   * Update the scaling configuration of a web application.
   * 
   * @remarks
   * You can call the UpdateWebApplicationScalingConfig operation to update the scaling configurations of a web application.
   * 
   * @param request - UpdateWebApplicationScalingConfigRequest
   * @returns UpdateWebApplicationScalingConfigResponse
   */
  async updateWebApplicationScalingConfig(ApplicationId: string, request: $_model.UpdateWebApplicationScalingConfigRequest): Promise<$_model.UpdateWebApplicationScalingConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationScalingConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Update the traffic configurations of a web application.
   * 
   * @remarks
   * Call the UpdateWebApplicationTrafficConfig operation to update the traffic configurations of a web application.
   * 
   * @param request - UpdateWebApplicationTrafficConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebApplicationTrafficConfigResponse
   */
  async updateWebApplicationTrafficConfigWithOptions(ApplicationId: string, request: $_model.UpdateWebApplicationTrafficConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebApplicationTrafficConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebApplicationTrafficConfig",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/application-traffic/${$dara.URL.percentEncode(ApplicationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebApplicationTrafficConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebApplicationTrafficConfigResponse({}));
  }

  /**
   * Update the traffic configurations of a web application.
   * 
   * @remarks
   * Call the UpdateWebApplicationTrafficConfig operation to update the traffic configurations of a web application.
   * 
   * @param request - UpdateWebApplicationTrafficConfigRequest
   * @returns UpdateWebApplicationTrafficConfigResponse
   */
  async updateWebApplicationTrafficConfig(ApplicationId: string, request: $_model.UpdateWebApplicationTrafficConfigRequest): Promise<$_model.UpdateWebApplicationTrafficConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebApplicationTrafficConfigWithOptions(ApplicationId, request, headers, runtime);
  }

  /**
   * Update a custom domain name.
   * 
   * @remarks
   * Update a custom domain name.
   * 
   * @param request - UpdateWebCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebCustomDomainResponse
   */
  async updateWebCustomDomainWithOptions(DomainName: string, request: $_model.UpdateWebCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebCustomDomainResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebCustomDomain",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v2/api/web/custom-domains/${$dara.URL.percentEncode(DomainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebCustomDomainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebCustomDomainResponse({}));
  }

  /**
   * Update a custom domain name.
   * 
   * @remarks
   * Update a custom domain name.
   * 
   * @param request - UpdateWebCustomDomainRequest
   * @returns UpdateWebCustomDomainResponse
   */
  async updateWebCustomDomain(DomainName: string, request: $_model.UpdateWebCustomDomainRequest): Promise<$_model.UpdateWebCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWebCustomDomainWithOptions(DomainName, request, headers, runtime);
  }

  /**
   * Enables the advanced monitoring feature of Application Real-Time Monitoring Service (ARMS).
   * 
   * @remarks
   * You are charged when you use the ARMS advanced monitoring feature. Enable this feature based on your business requirements. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/arms/application-monitoring/product-overview/billing-overview-1).
   * 
   * @param request - UpgradeApplicationApmServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeApplicationApmServiceResponse
   */
  async upgradeApplicationApmServiceWithOptions(request: $_model.UpgradeApplicationApmServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeApplicationApmServiceResponse> {
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
      action: "UpgradeApplicationApmService",
      version: "2019-05-06",
      protocol: "HTTPS",
      pathname: `/pop/v1/sam/app/applicationApmService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeApplicationApmServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeApplicationApmServiceResponse({}));
  }

  /**
   * Enables the advanced monitoring feature of Application Real-Time Monitoring Service (ARMS).
   * 
   * @remarks
   * You are charged when you use the ARMS advanced monitoring feature. Enable this feature based on your business requirements. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/arms/application-monitoring/product-overview/billing-overview-1).
   * 
   * @param request - UpgradeApplicationApmServiceRequest
   * @returns UpgradeApplicationApmServiceResponse
   */
  async upgradeApplicationApmService(request: $_model.UpgradeApplicationApmServiceRequest): Promise<$_model.UpgradeApplicationApmServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeApplicationApmServiceWithOptions(request, headers, runtime);
  }

}
