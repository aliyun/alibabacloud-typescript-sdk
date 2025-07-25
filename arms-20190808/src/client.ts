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
      'ap-northeast-2-pop': "arms.aliyuncs.com",
      'cn-beijing-finance-1': "arms.aliyuncs.com",
      'cn-beijing-finance-pop': "arms.aliyuncs.com",
      'cn-beijing-gov-1': "arms.aliyuncs.com",
      'cn-beijing-nu16-b01': "arms.aliyuncs.com",
      'cn-edge-1': "arms.aliyuncs.com",
      'cn-fujian': "arms.aliyuncs.com",
      'cn-haidian-cm12-c01': "arms.aliyuncs.com",
      'cn-hangzhou-bj-b01': "arms.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "arms.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "arms.aliyuncs.com",
      'cn-hangzhou-test-306': "arms.aliyuncs.com",
      'cn-hongkong-finance-pop': "arms.aliyuncs.com",
      'cn-huhehaote-nebula-1': "arms.aliyuncs.com",
      'cn-qingdao-nebula': "arms.aliyuncs.com",
      'cn-shanghai-et15-b01': "arms.aliyuncs.com",
      'cn-shanghai-et2-b01': "arms.aliyuncs.com",
      'cn-shanghai-inner': "arms.aliyuncs.com",
      'cn-shanghai-internal-test-1': "arms.aliyuncs.com",
      'cn-shenzhen-inner': "arms.aliyuncs.com",
      'cn-shenzhen-st4-d01': "arms.aliyuncs.com",
      'cn-shenzhen-su18-b01': "arms.aliyuncs.com",
      'cn-wuhan': "arms.aliyuncs.com",
      'cn-yushanfang': "arms.aliyuncs.com",
      'cn-zhangbei': "arms.aliyuncs.com",
      'cn-zhangbei-na61-b01': "arms.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "arms.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "arms.aliyuncs.com",
      'eu-west-1-oxs': "arms.aliyuncs.com",
      'me-east-1': "arms.aliyuncs.com",
      'rus-west-1-pop': "arms.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("arms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a global aggregation instance as a data source in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddAliClusterIdsToPrometheusGlobalView is deprecated
   * 
   * @param request - AddAliClusterIdsToPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAliClusterIdsToPrometheusGlobalViewResponse
   */
  async addAliClusterIdsToPrometheusGlobalViewWithOptions(request: $_model.AddAliClusterIdsToPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAliClusterIdsToPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAliClusterIdsToPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAliClusterIdsToPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.AddAliClusterIdsToPrometheusGlobalViewResponse({}));
  }

  /**
   * Adds a global aggregation instance as a data source in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddAliClusterIdsToPrometheusGlobalView is deprecated
   * 
   * @param request - AddAliClusterIdsToPrometheusGlobalViewRequest
   * @returns AddAliClusterIdsToPrometheusGlobalViewResponse
   */
  // Deprecated
  async addAliClusterIdsToPrometheusGlobalView(request: $_model.AddAliClusterIdsToPrometheusGlobalViewRequest): Promise<$_model.AddAliClusterIdsToPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAliClusterIdsToPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Integrates the dashboard of Prometheus Service.
   * 
   * @deprecated OpenAPI AddGrafana is deprecated
   * 
   * @param request - AddGrafanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddGrafanaResponse
   */
  async addGrafanaWithOptions(request: $_model.AddGrafanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddGrafanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddGrafana",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddGrafanaResponse>(await this.callApi(params, req, runtime), new $_model.AddGrafanaResponse({}));
  }

  /**
   * Integrates the dashboard of Prometheus Service.
   * 
   * @deprecated OpenAPI AddGrafana is deprecated
   * 
   * @param request - AddGrafanaRequest
   * @returns AddGrafanaResponse
   */
  // Deprecated
  async addGrafana(request: $_model.AddGrafanaRequest): Promise<$_model.AddGrafanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addGrafanaWithOptions(request, runtime);
  }

  /**
   * Integrates the dashboard and collection rules of Prometheus Service.
   * 
   * @deprecated OpenAPI AddIntegration is deprecated, please use ARMS::2019-08-08::InstallAddon instead.
   * 
   * @param request - AddIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddIntegrationResponse
   */
  async addIntegrationWithOptions(request: $_model.AddIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.AddIntegrationResponse({}));
  }

  /**
   * Integrates the dashboard and collection rules of Prometheus Service.
   * 
   * @deprecated OpenAPI AddIntegration is deprecated, please use ARMS::2019-08-08::InstallAddon instead.
   * 
   * @param request - AddIntegrationRequest
   * @returns AddIntegrationResponse
   */
  // Deprecated
  async addIntegration(request: $_model.AddIntegrationRequest): Promise<$_model.AddIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addIntegrationWithOptions(request, runtime);
  }

  /**
   * Adds a global aggregation instance in Prometheus Service.
   * 
   * @deprecated OpenAPI AddPrometheusGlobalView is deprecated
   * 
   * @param request - AddPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPrometheusGlobalViewResponse
   */
  async addPrometheusGlobalViewWithOptions(request: $_model.AddPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusters)) {
      query["Clusters"] = request.clusters;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.AddPrometheusGlobalViewResponse({}));
  }

  /**
   * Adds a global aggregation instance in Prometheus Service.
   * 
   * @deprecated OpenAPI AddPrometheusGlobalView is deprecated
   * 
   * @param request - AddPrometheusGlobalViewRequest
   * @returns AddPrometheusGlobalViewResponse
   */
  // Deprecated
  async addPrometheusGlobalView(request: $_model.AddPrometheusGlobalViewRequest): Promise<$_model.AddPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Adds a global aggregation instance in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddPrometheusGlobalViewByAliClusterIds is deprecated
   * 
   * @param request - AddPrometheusGlobalViewByAliClusterIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPrometheusGlobalViewByAliClusterIdsResponse
   */
  async addPrometheusGlobalViewByAliClusterIdsWithOptions(request: $_model.AddPrometheusGlobalViewByAliClusterIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPrometheusGlobalViewByAliClusterIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPrometheusGlobalViewByAliClusterIds",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPrometheusGlobalViewByAliClusterIdsResponse>(await this.callApi(params, req, runtime), new $_model.AddPrometheusGlobalViewByAliClusterIdsResponse({}));
  }

  /**
   * Adds a global aggregation instance in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddPrometheusGlobalViewByAliClusterIds is deprecated
   * 
   * @param request - AddPrometheusGlobalViewByAliClusterIdsRequest
   * @returns AddPrometheusGlobalViewByAliClusterIdsResponse
   */
  // Deprecated
  async addPrometheusGlobalViewByAliClusterIds(request: $_model.AddPrometheusGlobalViewByAliClusterIdsRequest): Promise<$_model.AddPrometheusGlobalViewByAliClusterIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPrometheusGlobalViewByAliClusterIdsWithOptions(request, runtime);
  }

  /**
   * Creates a Prometheus instance for Remote Write.
   * 
   * @deprecated OpenAPI AddPrometheusInstance is deprecated, please use ARMS::2019-08-08::CreatePrometheusInstance instead.
   * 
   * @param request - AddPrometheusInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPrometheusInstanceResponse
   */
  async addPrometheusInstanceWithOptions(request: $_model.AddPrometheusInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPrometheusInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "AddPrometheusInstance",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.AddPrometheusInstanceResponse({}));
  }

  /**
   * Creates a Prometheus instance for Remote Write.
   * 
   * @deprecated OpenAPI AddPrometheusInstance is deprecated, please use ARMS::2019-08-08::CreatePrometheusInstance instead.
   * 
   * @param request - AddPrometheusInstanceRequest
   * @returns AddPrometheusInstanceResponse
   */
  // Deprecated
  async addPrometheusInstance(request: $_model.AddPrometheusInstanceRequest): Promise<$_model.AddPrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPrometheusInstanceWithOptions(request, runtime);
  }

  /**
   * Adds an exporter to a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI AddPrometheusIntegration is deprecated
   * 
   * @param request - AddPrometheusIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddPrometheusIntegrationResponse
   */
  async addPrometheusIntegrationWithOptions(request: $_model.AddPrometheusIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddPrometheusIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddPrometheusIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddPrometheusIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.AddPrometheusIntegrationResponse({}));
  }

  /**
   * Adds an exporter to a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI AddPrometheusIntegration is deprecated
   * 
   * @param request - AddPrometheusIntegrationRequest
   * @returns AddPrometheusIntegrationResponse
   */
  // Deprecated
  async addPrometheusIntegration(request: $_model.AddPrometheusIntegrationRequest): Promise<$_model.AddPrometheusIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addPrometheusIntegrationWithOptions(request, runtime);
  }

  /**
   * Creates or updates a recording rule of Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddRecordingRule is deprecated
   * 
   * @param request - AddRecordingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecordingRuleResponse
   */
  async addRecordingRuleWithOptions(request: $_model.AddRecordingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecordingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.ruleYaml)) {
      query["RuleYaml"] = request.ruleYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecordingRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddRecordingRuleResponse({}));
  }

  /**
   * Creates or updates a recording rule of Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI AddRecordingRule is deprecated
   * 
   * @param request - AddRecordingRuleRequest
   * @returns AddRecordingRuleResponse
   */
  // Deprecated
  async addRecordingRule(request: $_model.AddRecordingRuleRequest): Promise<$_model.AddRecordingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecordingRuleWithOptions(request, runtime);
  }

  /**
   * Attaches the workspace ID and workspace name tags to the Prometheus instance corresponding to a Flink workspace.
   * 
   * @deprecated OpenAPI AddTagToFlinkCluster is deprecated
   * 
   * @param request - AddTagToFlinkClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddTagToFlinkClusterResponse
   */
  async addTagToFlinkClusterWithOptions(request: $_model.AddTagToFlinkClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddTagToFlinkClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.flinkWorkSpaceId)) {
      query["FlinkWorkSpaceId"] = request.flinkWorkSpaceId;
    }

    if (!$dara.isNull(request.flinkWorkSpaceName)) {
      query["FlinkWorkSpaceName"] = request.flinkWorkSpaceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddTagToFlinkCluster",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddTagToFlinkClusterResponse>(await this.callApi(params, req, runtime), new $_model.AddTagToFlinkClusterResponse({}));
  }

  /**
   * Attaches the workspace ID and workspace name tags to the Prometheus instance corresponding to a Flink workspace.
   * 
   * @deprecated OpenAPI AddTagToFlinkCluster is deprecated
   * 
   * @param request - AddTagToFlinkClusterRequest
   * @returns AddTagToFlinkClusterResponse
   */
  // Deprecated
  async addTagToFlinkCluster(request: $_model.AddTagToFlinkClusterRequest): Promise<$_model.AddTagToFlinkClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addTagToFlinkClusterWithOptions(request, runtime);
  }

  /**
   * Adds a data source to a global aggregation instance.
   * 
   * @deprecated OpenAPI AppendInstancesToPrometheusGlobalView is deprecated
   * 
   * @param request - AppendInstancesToPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppendInstancesToPrometheusGlobalViewResponse
   */
  async appendInstancesToPrometheusGlobalViewWithOptions(request: $_model.AppendInstancesToPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AppendInstancesToPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusters)) {
      query["Clusters"] = request.clusters;
    }

    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppendInstancesToPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppendInstancesToPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.AppendInstancesToPrometheusGlobalViewResponse({}));
  }

  /**
   * Adds a data source to a global aggregation instance.
   * 
   * @deprecated OpenAPI AppendInstancesToPrometheusGlobalView is deprecated
   * 
   * @param request - AppendInstancesToPrometheusGlobalViewRequest
   * @returns AppendInstancesToPrometheusGlobalViewResponse
   */
  // Deprecated
  async appendInstancesToPrometheusGlobalView(request: $_model.AppendInstancesToPrometheusGlobalViewRequest): Promise<$_model.AppendInstancesToPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.appendInstancesToPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * @param tmpReq - ApplyScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyScenarioResponse
   */
  async applyScenarioWithOptions(tmpReq: $_model.ApplyScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyScenarioResponse> {
    tmpReq.validate();
    let request = new $_model.ApplyScenarioShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.configShrink)) {
      query["Config"] = request.configShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    if (!$dara.isNull(request.snDump)) {
      query["SnDump"] = request.snDump;
    }

    if (!$dara.isNull(request.snForce)) {
      query["SnForce"] = request.snForce;
    }

    if (!$dara.isNull(request.snStat)) {
      query["SnStat"] = request.snStat;
    }

    if (!$dara.isNull(request.snTransfer)) {
      query["SnTransfer"] = request.snTransfer;
    }

    if (!$dara.isNull(request.updateOption)) {
      query["UpdateOption"] = request.updateOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyScenarioResponse>(await this.callApi(params, req, runtime), new $_model.ApplyScenarioResponse({}));
  }

  /**
   * @param request - ApplyScenarioRequest
   * @returns ApplyScenarioResponse
   */
  async applyScenario(request: $_model.ApplyScenarioRequest): Promise<$_model.ApplyScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyScenarioWithOptions(request, runtime);
  }

  /**
   * Binds a Grafana workspace to a Prometheus instance.
   * 
   * @deprecated OpenAPI BindPrometheusGrafanaInstance is deprecated
   * 
   * @param request - BindPrometheusGrafanaInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindPrometheusGrafanaInstanceResponse
   */
  async bindPrometheusGrafanaInstanceWithOptions(request: $_model.BindPrometheusGrafanaInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindPrometheusGrafanaInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.grafanaInstanceId)) {
      query["GrafanaInstanceId"] = request.grafanaInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindPrometheusGrafanaInstance",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindPrometheusGrafanaInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BindPrometheusGrafanaInstanceResponse({}));
  }

  /**
   * Binds a Grafana workspace to a Prometheus instance.
   * 
   * @deprecated OpenAPI BindPrometheusGrafanaInstance is deprecated
   * 
   * @param request - BindPrometheusGrafanaInstanceRequest
   * @returns BindPrometheusGrafanaInstanceResponse
   */
  // Deprecated
  async bindPrometheusGrafanaInstance(request: $_model.BindPrometheusGrafanaInstanceRequest): Promise<$_model.BindPrometheusGrafanaInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindPrometheusGrafanaInstanceWithOptions(request, runtime);
  }

  /**
   * Blocks alert notifications in a time period.
   * 
   * @param request - BlockAlarmNotificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BlockAlarmNotificationResponse
   */
  async blockAlarmNotificationWithOptions(request: $_model.BlockAlarmNotificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BlockAlarmNotificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.timeout)) {
      query["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BlockAlarmNotification",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BlockAlarmNotificationResponse>(await this.callApi(params, req, runtime), new $_model.BlockAlarmNotificationResponse({}));
  }

  /**
   * Blocks alert notifications in a time period.
   * 
   * @param request - BlockAlarmNotificationRequest
   * @returns BlockAlarmNotificationResponse
   */
  async blockAlarmNotification(request: $_model.BlockAlarmNotificationRequest): Promise<$_model.BlockAlarmNotificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.blockAlarmNotificationWithOptions(request, runtime);
  }

  /**
   * Modifies the severity level of an alert.
   * 
   * @param request - ChangeAlarmSeverityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAlarmSeverityResponse
   */
  async changeAlarmSeverityWithOptions(request: $_model.ChangeAlarmSeverityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAlarmSeverityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAlarmSeverity",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAlarmSeverityResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAlarmSeverityResponse({}));
  }

  /**
   * Modifies the severity level of an alert.
   * 
   * @param request - ChangeAlarmSeverityRequest
   * @returns ChangeAlarmSeverityResponse
   */
  async changeAlarmSeverity(request: $_model.ChangeAlarmSeverityRequest): Promise<$_model.ChangeAlarmSeverityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAlarmSeverityWithOptions(request, runtime);
  }

  /**
   * Moves a resource to a specific resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-08-08",
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
   * Moves a resource to a specific resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Checks whether Application Real-Time Monitoring Service (ARMS) is available for commercial use in a region.
   * 
   * @remarks
   * You can call this operation to check whether ARMS is available for commercial use in a region.
   * 
   * @param request - CheckCommercialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckCommercialStatusResponse
   */
  async checkCommercialStatusWithOptions(request: $_model.CheckCommercialStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckCommercialStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckCommercialStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckCommercialStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckCommercialStatusResponse({}));
  }

  /**
   * Checks whether Application Real-Time Monitoring Service (ARMS) is available for commercial use in a region.
   * 
   * @remarks
   * You can call this operation to check whether ARMS is available for commercial use in a region.
   * 
   * @param request - CheckCommercialStatusRequest
   * @returns CheckCommercialStatusResponse
   */
  async checkCommercialStatus(request: $_model.CheckCommercialStatusRequest): Promise<$_model.CheckCommercialStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkCommercialStatusWithOptions(request, runtime);
  }

  /**
   * Checks the status of a service in the current cluster, such as whether the service is activated and whether the payment is overdue.
   * 
   * @param request - CheckServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceStatusResponse
   */
  async checkServiceStatusWithOptions(request: $_model.CheckServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.svcCode)) {
      query["SvcCode"] = request.svcCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceStatusResponse({}));
  }

  /**
   * Checks the status of a service in the current cluster, such as whether the service is activated and whether the payment is overdue.
   * 
   * @param request - CheckServiceStatusRequest
   * @returns CheckServiceStatusResponse
   */
  async checkServiceStatus(request: $_model.CheckServiceStatusRequest): Promise<$_model.CheckServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceStatusWithOptions(request, runtime);
  }

  /**
   * Claims an alert. This operation can be used together with escalation policies. When multiple handlers are involved in alert management, each handler can call this operation to claim alerts. After an alert is claimed, the alert enters the Being Processed state.
   * 
   * @param request - ClaimAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ClaimAlarmResponse
   */
  async claimAlarmWithOptions(request: $_model.ClaimAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ClaimAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ClaimAlarm",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ClaimAlarmResponse>(await this.callApi(params, req, runtime), new $_model.ClaimAlarmResponse({}));
  }

  /**
   * Claims an alert. This operation can be used together with escalation policies. When multiple handlers are involved in alert management, each handler can call this operation to claim alerts. After an alert is claimed, the alert enters the Being Processed state.
   * 
   * @param request - ClaimAlarmRequest
   * @returns ClaimAlarmResponse
   */
  async claimAlarm(request: $_model.ClaimAlarmRequest): Promise<$_model.ClaimAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.claimAlarmWithOptions(request, runtime);
  }

  /**
   * Disables an alert. Make sure that the alert is resolved before you disable the alert. If an alert is not resolved, new alerts can be triggered even after the alert is disabled.
   * 
   * @param request - CloseAlarmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseAlarmResponse
   */
  async closeAlarmWithOptions(request: $_model.CloseAlarmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseAlarmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmId)) {
      query["AlarmId"] = request.alarmId;
    }

    if (!$dara.isNull(request.handlerId)) {
      query["HandlerId"] = request.handlerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.solution)) {
      query["Solution"] = request.solution;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseAlarm",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseAlarmResponse>(await this.callApi(params, req, runtime), new $_model.CloseAlarmResponse({}));
  }

  /**
   * Disables an alert. Make sure that the alert is resolved before you disable the alert. If an alert is not resolved, new alerts can be triggered even after the alert is disabled.
   * 
   * @param request - CloseAlarmRequest
   * @returns CloseAlarmResponse
   */
  async closeAlarm(request: $_model.CloseAlarmRequest): Promise<$_model.CloseAlarmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeAlarmWithOptions(request, runtime);
  }

  /**
   * Turns on or off the main switch of an ARMS agent, or queries the status of the main switch.
   * 
   * @remarks
   * ***
   * 
   * @param request - ConfigAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfigAppResponse
   */
  async configAppWithOptions(request: $_model.ConfigAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfigAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appIds)) {
      query["AppIds"] = request.appIds;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
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
      action: "ConfigApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfigAppResponse>(await this.callApi(params, req, runtime), new $_model.ConfigAppResponse({}));
  }

  /**
   * Turns on or off the main switch of an ARMS agent, or queries the status of the main switch.
   * 
   * @remarks
   * ***
   * 
   * @param request - ConfigAppRequest
   * @returns ConfigAppResponse
   */
  async configApp(request: $_model.ConfigAppRequest): Promise<$_model.ConfigAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.configAppWithOptions(request, runtime);
  }

  /**
   * Creates an alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. To create or modify an alert contact, call the CreateOrUpdateContact operation provided by the new version of the Alert Management module.
   * 
   * @param request - CreateAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertContactResponse
   */
  async createAlertContactWithOptions(request: $_model.CreateAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertContactResponse({}));
  }

  /**
   * Creates an alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. To create or modify an alert contact, call the CreateOrUpdateContact operation provided by the new version of the Alert Management module.
   * 
   * @param request - CreateAlertContactRequest
   * @returns CreateAlertContactResponse
   */
  async createAlertContact(request: $_model.CreateAlertContactRequest): Promise<$_model.CreateAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertContactWithOptions(request, runtime);
  }

  /**
   * Creates an alert contact group.
   * 
   * @remarks
   * The current API operation is no longer maintained. Call the CreateOrUpdateContactGroup operation of the new Alert Management module to create or modify alert contact groups.
   * 
   * @param request - CreateAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlertContactGroupResponse
   */
  async createAlertContactGroupWithOptions(request: $_model.CreateAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateAlertContactGroupResponse({}));
  }

  /**
   * Creates an alert contact group.
   * 
   * @remarks
   * The current API operation is no longer maintained. Call the CreateOrUpdateContactGroup operation of the new Alert Management module to create or modify alert contact groups.
   * 
   * @param request - CreateAlertContactGroupRequest
   * @returns CreateAlertContactGroupResponse
   */
  async createAlertContactGroup(request: $_model.CreateAlertContactGroupRequest): Promise<$_model.CreateAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * Creates a dispatch policy.
   * 
   * @param request - CreateDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDispatchRuleResponse
   */
  async createDispatchRuleWithOptions(request: $_model.CreateDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDispatchRuleResponse({}));
  }

  /**
   * Creates a dispatch policy.
   * 
   * @param request - CreateDispatchRuleRequest
   * @returns CreateDispatchRuleResponse
   */
  async createDispatchRule(request: $_model.CreateDispatchRuleRequest): Promise<$_model.CreateDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDispatchRuleWithOptions(request, runtime);
  }

  /**
   * Creates a custom job for an environment.
   * 
   * @param request - CreateEnvCustomJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvCustomJobResponse
   */
  async createEnvCustomJobWithOptions(request: $_model.CreateEnvCustomJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvCustomJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.customJobName)) {
      query["CustomJobName"] = request.customJobName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvCustomJob",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvCustomJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvCustomJobResponse({}));
  }

  /**
   * Creates a custom job for an environment.
   * 
   * @param request - CreateEnvCustomJobRequest
   * @returns CreateEnvCustomJobResponse
   */
  async createEnvCustomJob(request: $_model.CreateEnvCustomJobRequest): Promise<$_model.CreateEnvCustomJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnvCustomJobWithOptions(request, runtime);
  }

  /**
   * Creates a PodMonitor for an environment.
   * 
   * @param request - CreateEnvPodMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvPodMonitorResponse
   */
  async createEnvPodMonitorWithOptions(request: $_model.CreateEnvPodMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvPodMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvPodMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvPodMonitorResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvPodMonitorResponse({}));
  }

  /**
   * Creates a PodMonitor for an environment.
   * 
   * @param request - CreateEnvPodMonitorRequest
   * @returns CreateEnvPodMonitorResponse
   */
  async createEnvPodMonitor(request: $_model.CreateEnvPodMonitorRequest): Promise<$_model.CreateEnvPodMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnvPodMonitorWithOptions(request, runtime);
  }

  /**
   * Creates a ServiceMonitor for an environment.
   * 
   * @param request - CreateEnvServiceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvServiceMonitorResponse
   */
  async createEnvServiceMonitorWithOptions(request: $_model.CreateEnvServiceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvServiceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvServiceMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvServiceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvServiceMonitorResponse({}));
  }

  /**
   * Creates a ServiceMonitor for an environment.
   * 
   * @param request - CreateEnvServiceMonitorRequest
   * @returns CreateEnvServiceMonitorResponse
   */
  async createEnvServiceMonitor(request: $_model.CreateEnvServiceMonitorRequest): Promise<$_model.CreateEnvServiceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnvServiceMonitorWithOptions(request, runtime);
  }

  /**
   * Creates an environment instance.
   * 
   * @param request - CreateEnvironmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(request: $_model.CreateEnvironmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvironmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.bindResourceId)) {
      query["BindResourceId"] = request.bindResourceId;
    }

    if (!$dara.isNull(request.environmentName)) {
      query["EnvironmentName"] = request.environmentName;
    }

    if (!$dara.isNull(request.environmentSubType)) {
      query["EnvironmentSubType"] = request.environmentSubType;
    }

    if (!$dara.isNull(request.environmentType)) {
      query["EnvironmentType"] = request.environmentType;
    }

    if (!$dara.isNull(request.feePackage)) {
      query["FeePackage"] = request.feePackage;
    }

    if (!$dara.isNull(request.grafanaWorkspaceId)) {
      query["GrafanaWorkspaceId"] = request.grafanaWorkspaceId;
    }

    if (!$dara.isNull(request.initEnvironment)) {
      query["InitEnvironment"] = request.initEnvironment;
    }

    if (!$dara.isNull(request.managedType)) {
      query["ManagedType"] = request.managedType;
    }

    if (!$dara.isNull(request.prometheusInstanceId)) {
      query["PrometheusInstanceId"] = request.prometheusInstanceId;
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
      action: "CreateEnvironment",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvironmentResponse({}));
  }

  /**
   * Creates an environment instance.
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  async createEnvironment(request: $_model.CreateEnvironmentRequest): Promise<$_model.CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createEnvironmentWithOptions(request, runtime);
  }

  /**
   * Creates a workspace in Managed Service for Grafana.
   * 
   * @remarks
   * Before you call the operation, make sure that you have learned about the billing methods and [pricing](https://www.alibabacloud.com/help/zh/grafana/product-overview/billing-4?spm=a2c4g.11186623.0.0.14c2d253B3SDbt) of Managed Service for Grafana.
   * > 
   * *   To create workspaces, you must complete real-name verification.
   * *   Regular users can create workspaces only in Managed Service for Grafana Developer Edition, Pro Edition, and Advanced Edition. `These editions charge fees.`
   * *   Internal users can create workspaces only in Managed Service for Grafana Beta Edition and Standard Edition. `These editions do not charge fees.`
   * 
   * @param tmpReq - CreateGrafanaWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGrafanaWorkspaceResponse
   */
  async createGrafanaWorkspaceWithOptions(tmpReq: $_model.CreateGrafanaWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGrafanaWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateGrafanaWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountNumber)) {
      query["AccountNumber"] = request.accountNumber;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.customAccountNumber)) {
      query["CustomAccountNumber"] = request.customAccountNumber;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.grafanaVersion)) {
      query["GrafanaVersion"] = request.grafanaVersion;
    }

    if (!$dara.isNull(request.grafanaWorkspaceEdition)) {
      query["GrafanaWorkspaceEdition"] = request.grafanaWorkspaceEdition;
    }

    if (!$dara.isNull(request.grafanaWorkspaceName)) {
      query["GrafanaWorkspaceName"] = request.grafanaWorkspaceName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGrafanaWorkspace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGrafanaWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateGrafanaWorkspaceResponse({}));
  }

  /**
   * Creates a workspace in Managed Service for Grafana.
   * 
   * @remarks
   * Before you call the operation, make sure that you have learned about the billing methods and [pricing](https://www.alibabacloud.com/help/zh/grafana/product-overview/billing-4?spm=a2c4g.11186623.0.0.14c2d253B3SDbt) of Managed Service for Grafana.
   * > 
   * *   To create workspaces, you must complete real-name verification.
   * *   Regular users can create workspaces only in Managed Service for Grafana Developer Edition, Pro Edition, and Advanced Edition. `These editions charge fees.`
   * *   Internal users can create workspaces only in Managed Service for Grafana Beta Edition and Standard Edition. `These editions do not charge fees.`
   * 
   * @param request - CreateGrafanaWorkspaceRequest
   * @returns CreateGrafanaWorkspaceResponse
   */
  async createGrafanaWorkspace(request: $_model.CreateGrafanaWorkspaceRequest): Promise<$_model.CreateGrafanaWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGrafanaWorkspaceWithOptions(request, runtime);
  }

  /**
   * Creates an alert integration.
   * 
   * @param request - CreateIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIntegrationResponse
   */
  async createIntegrationWithOptions(request: $_model.CreateIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRecover)) {
      body["AutoRecover"] = request.autoRecover;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.integrationName)) {
      body["IntegrationName"] = request.integrationName;
    }

    if (!$dara.isNull(request.integrationProductType)) {
      body["IntegrationProductType"] = request.integrationProductType;
    }

    if (!$dara.isNull(request.recoverTime)) {
      body["RecoverTime"] = request.recoverTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.CreateIntegrationResponse({}));
  }

  /**
   * Creates an alert integration.
   * 
   * @param request - CreateIntegrationRequest
   * @returns CreateIntegrationResponse
   */
  async createIntegration(request: $_model.CreateIntegrationRequest): Promise<$_model.CreateIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createIntegrationWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert rule.
   * 
   * @param request - CreateOrUpdateAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateAlertRuleResponse
   */
  async createOrUpdateAlertRuleWithOptions(request: $_model.CreateOrUpdateAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateAlertRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertCheckType)) {
      body["AlertCheckType"] = request.alertCheckType;
    }

    if (!$dara.isNull(request.alertGroup)) {
      body["AlertGroup"] = request.alertGroup;
    }

    if (!$dara.isNull(request.alertId)) {
      body["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertPiplines)) {
      body["AlertPiplines"] = request.alertPiplines;
    }

    if (!$dara.isNull(request.alertRuleContent)) {
      body["AlertRuleContent"] = request.alertRuleContent;
    }

    if (!$dara.isNull(request.alertStatus)) {
      body["AlertStatus"] = request.alertStatus;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.annotations)) {
      body["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.autoAddNewApplication)) {
      body["AutoAddNewApplication"] = request.autoAddNewApplication;
    }

    if (!$dara.isNull(request.autoAddTargetConfig)) {
      body["AutoAddTargetConfig"] = request.autoAddTargetConfig;
    }

    if (!$dara.isNull(request.checkCycle)) {
      body["CheckCycle"] = request.checkCycle;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataConfig)) {
      body["DataConfig"] = request.dataConfig;
    }

    if (!$dara.isNull(request.duration)) {
      body["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.markTags)) {
      body["MarkTags"] = request.markTags;
    }

    if (!$dara.isNull(request.message)) {
      body["Message"] = request.message;
    }

    if (!$dara.isNull(request.metricsKey)) {
      body["MetricsKey"] = request.metricsKey;
    }

    if (!$dara.isNull(request.metricsType)) {
      body["MetricsType"] = request.metricsType;
    }

    if (!$dara.isNull(request.notice)) {
      body["Notice"] = request.notice;
    }

    if (!$dara.isNull(request.notifyMode)) {
      body["NotifyMode"] = request.notifyMode;
    }

    if (!$dara.isNull(request.notifyStrategy)) {
      body["NotifyStrategy"] = request.notifyStrategy;
    }

    if (!$dara.isNull(request.pids)) {
      body["Pids"] = request.pids;
    }

    if (!$dara.isNull(request.product)) {
      body["Product"] = request.product;
    }

    if (!$dara.isNull(request.promQL)) {
      body["PromQL"] = request.promQL;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateAlertRuleResponse({}));
  }

  /**
   * Creates or modifies an alert rule.
   * 
   * @param request - CreateOrUpdateAlertRuleRequest
   * @returns CreateOrUpdateAlertRuleResponse
   */
  async createOrUpdateAlertRule(request: $_model.CreateOrUpdateAlertRuleRequest): Promise<$_model.CreateOrUpdateAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateAlertRuleWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert contact.
   * 
   * @param request - CreateOrUpdateContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateContactResponse
   */
  async createOrUpdateContactWithOptions(request: $_model.CreateOrUpdateContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dingRobotUrl)) {
      query["DingRobotUrl"] = request.dingRobotUrl;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      body["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.corpUserId)) {
      body["CorpUserId"] = request.corpUserId;
    }

    if (!$dara.isNull(request.email)) {
      body["Email"] = request.email;
    }

    if (!$dara.isNull(request.isEmailVerify)) {
      body["IsEmailVerify"] = request.isEmailVerify;
    }

    if (!$dara.isNull(request.phone)) {
      body["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.reissueSendNotice)) {
      body["ReissueSendNotice"] = request.reissueSendNotice;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateContactResponse({}));
  }

  /**
   * Creates or modifies an alert contact.
   * 
   * @param request - CreateOrUpdateContactRequest
   * @returns CreateOrUpdateContactResponse
   */
  async createOrUpdateContact(request: $_model.CreateOrUpdateContactRequest): Promise<$_model.CreateOrUpdateContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateContactWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an alert contact group.
   * 
   * @param request - CreateOrUpdateContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateContactGroupResponse
   */
  async createOrUpdateContactGroupWithOptions(request: $_model.CreateOrUpdateContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateContactGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactGroupId)) {
      body["ContactGroupId"] = request.contactGroupId;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      body["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactIds)) {
      body["ContactIds"] = request.contactIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateContactGroupResponse({}));
  }

  /**
   * Creates or modifies an alert contact group.
   * 
   * @param request - CreateOrUpdateContactGroupRequest
   * @returns CreateOrUpdateContactGroupResponse
   */
  async createOrUpdateContactGroup(request: $_model.CreateOrUpdateContactGroupRequest): Promise<$_model.CreateOrUpdateContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateContactGroupWithOptions(request, runtime);
  }

  /**
   * Creates or modifies an EventBridge integration.
   * 
   * @param request - CreateOrUpdateEventBridgeIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateEventBridgeIntegrationResponse
   */
  async createOrUpdateEventBridgeIntegrationWithOptions(request: $_model.CreateOrUpdateEventBridgeIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateEventBridgeIntegrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessKey)) {
      body["AccessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.accessSecret)) {
      body["AccessSecret"] = request.accessSecret;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.eventBusName)) {
      body["EventBusName"] = request.eventBusName;
    }

    if (!$dara.isNull(request.eventBusRegionId)) {
      body["EventBusRegionId"] = request.eventBusRegionId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateEventBridgeIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateEventBridgeIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateEventBridgeIntegrationResponse({}));
  }

  /**
   * Creates or modifies an EventBridge integration.
   * 
   * @param request - CreateOrUpdateEventBridgeIntegrationRequest
   * @returns CreateOrUpdateEventBridgeIntegrationResponse
   */
  async createOrUpdateEventBridgeIntegration(request: $_model.CreateOrUpdateEventBridgeIntegrationRequest): Promise<$_model.CreateOrUpdateEventBridgeIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateEventBridgeIntegrationWithOptions(request, runtime);
  }

  /**
   * Creates or updates an IM chatbot.
   * 
   * @param request - CreateOrUpdateIMRobotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateIMRobotResponse
   */
  async createOrUpdateIMRobotWithOptions(request: $_model.CreateOrUpdateIMRobotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateIMRobotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cardTemplate)) {
      body["CardTemplate"] = request.cardTemplate;
    }

    if (!$dara.isNull(request.dailyNoc)) {
      body["DailyNoc"] = request.dailyNoc;
    }

    if (!$dara.isNull(request.dailyNocTime)) {
      body["DailyNocTime"] = request.dailyNocTime;
    }

    if (!$dara.isNull(request.dingSignKey)) {
      body["DingSignKey"] = request.dingSignKey;
    }

    if (!$dara.isNull(request.enableOutgoing)) {
      body["EnableOutgoing"] = request.enableOutgoing;
    }

    if (!$dara.isNull(request.robotAddress)) {
      body["RobotAddress"] = request.robotAddress;
    }

    if (!$dara.isNull(request.robotId)) {
      body["RobotId"] = request.robotId;
    }

    if (!$dara.isNull(request.robotName)) {
      body["RobotName"] = request.robotName;
    }

    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateIMRobot",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateIMRobotResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateIMRobotResponse({}));
  }

  /**
   * Creates or updates an IM chatbot.
   * 
   * @param request - CreateOrUpdateIMRobotRequest
   * @returns CreateOrUpdateIMRobotResponse
   */
  async createOrUpdateIMRobot(request: $_model.CreateOrUpdateIMRobotRequest): Promise<$_model.CreateOrUpdateIMRobotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateIMRobotWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a notification policy.
   * 
   * @param request - CreateOrUpdateNotificationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateNotificationPolicyResponse
   */
  async createOrUpdateNotificationPolicyWithOptions(request: $_model.CreateOrUpdateNotificationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateNotificationPolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directedMode)) {
      body["DirectedMode"] = request.directedMode;
    }

    if (!$dara.isNull(request.escalationPolicyId)) {
      body["EscalationPolicyId"] = request.escalationPolicyId;
    }

    if (!$dara.isNull(request.groupRule)) {
      body["GroupRule"] = request.groupRule;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.integrationId)) {
      body["IntegrationId"] = request.integrationId;
    }

    if (!$dara.isNull(request.matchingRules)) {
      body["MatchingRules"] = request.matchingRules;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.notifyRule)) {
      body["NotifyRule"] = request.notifyRule;
    }

    if (!$dara.isNull(request.notifyTemplate)) {
      body["NotifyTemplate"] = request.notifyTemplate;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repeat)) {
      body["Repeat"] = request.repeat;
    }

    if (!$dara.isNull(request.repeatInterval)) {
      body["RepeatInterval"] = request.repeatInterval;
    }

    if (!$dara.isNull(request.sendRecoverMessage)) {
      body["SendRecoverMessage"] = request.sendRecoverMessage;
    }

    if (!$dara.isNull(request.state)) {
      body["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateNotificationPolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateNotificationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateNotificationPolicyResponse({}));
  }

  /**
   * Creates or modifies a notification policy.
   * 
   * @param request - CreateOrUpdateNotificationPolicyRequest
   * @returns CreateOrUpdateNotificationPolicyResponse
   */
  async createOrUpdateNotificationPolicy(request: $_model.CreateOrUpdateNotificationPolicyRequest): Promise<$_model.CreateOrUpdateNotificationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateNotificationPolicyWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a silence policy.
   * 
   * @param request - CreateOrUpdateSilencePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateSilencePolicyResponse
   */
  async createOrUpdateSilencePolicyWithOptions(request: $_model.CreateOrUpdateSilencePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateSilencePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.effectiveTimeType)) {
      query["EffectiveTimeType"] = request.effectiveTimeType;
    }

    if (!$dara.isNull(request.timePeriod)) {
      query["TimePeriod"] = request.timePeriod;
    }

    if (!$dara.isNull(request.timeSlots)) {
      query["TimeSlots"] = request.timeSlots;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.matchingRules)) {
      body["MatchingRules"] = request.matchingRules;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.state)) {
      body["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateSilencePolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateSilencePolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateSilencePolicyResponse({}));
  }

  /**
   * Creates or modifies a silence policy.
   * 
   * @param request - CreateOrUpdateSilencePolicyRequest
   * @returns CreateOrUpdateSilencePolicyResponse
   */
  async createOrUpdateSilencePolicy(request: $_model.CreateOrUpdateSilencePolicyRequest): Promise<$_model.CreateOrUpdateSilencePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateSilencePolicyWithOptions(request, runtime);
  }

  /**
   * Creates or modifies a webhook alert contact.
   * 
   * @param request - CreateOrUpdateWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrUpdateWebhookContactResponse
   */
  async createOrUpdateWebhookContactWithOptions(request: $_model.CreateOrUpdateWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrUpdateWebhookContactResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizHeaders)) {
      body["BizHeaders"] = request.bizHeaders;
    }

    if (!$dara.isNull(request.bizParams)) {
      body["BizParams"] = request.bizParams;
    }

    if (!$dara.isNull(request.body)) {
      body["Body"] = request.body;
    }

    if (!$dara.isNull(request.method)) {
      body["Method"] = request.method;
    }

    if (!$dara.isNull(request.recoverBody)) {
      body["RecoverBody"] = request.recoverBody;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    if (!$dara.isNull(request.webhookId)) {
      body["WebhookId"] = request.webhookId;
    }

    if (!$dara.isNull(request.webhookName)) {
      body["WebhookName"] = request.webhookName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrUpdateWebhookContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrUpdateWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrUpdateWebhookContactResponse({}));
  }

  /**
   * Creates or modifies a webhook alert contact.
   * 
   * @param request - CreateOrUpdateWebhookContactRequest
   * @returns CreateOrUpdateWebhookContactResponse
   */
  async createOrUpdateWebhookContact(request: $_model.CreateOrUpdateWebhookContactRequest): Promise<$_model.CreateOrUpdateWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrUpdateWebhookContactWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule.
   * 
   * @param request - CreatePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusAlertRuleResponse
   */
  async createPrometheusAlertRuleWithOptions(request: $_model.CreatePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusAlertRuleResponse({}));
  }

  /**
   * Creates an alert rule.
   * 
   * @param request - CreatePrometheusAlertRuleRequest
   * @returns CreatePrometheusAlertRuleResponse
   */
  async createPrometheusAlertRule(request: $_model.CreatePrometheusAlertRuleRequest): Promise<$_model.CreatePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * Creates a Prometheus instance.
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstanceWithOptions(request: $_model.CreatePrometheusInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allSubClustersSuccess)) {
      query["AllSubClustersSuccess"] = request.allSubClustersSuccess;
    }

    if (!$dara.isNull(request.archiveDuration)) {
      query["ArchiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.grafanaInstanceId)) {
      query["GrafanaInstanceId"] = request.grafanaInstanceId;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.subClustersJson)) {
      query["SubClustersJson"] = request.subClustersJson;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusInstance",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusInstanceResponse({}));
  }

  /**
   * Creates a Prometheus instance.
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstance(request: $_model.CreatePrometheusInstanceRequest): Promise<$_model.CreatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrometheusInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a monitoring configuration for a Prometheus instance.
   * 
   * @deprecated OpenAPI CreatePrometheusMonitoring is deprecated
   * 
   * @param request - CreatePrometheusMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusMonitoringResponse
   */
  async createPrometheusMonitoringWithOptions(request: $_model.CreatePrometheusMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusMonitoring",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusMonitoringResponse({}));
  }

  /**
   * Creates a monitoring configuration for a Prometheus instance.
   * 
   * @deprecated OpenAPI CreatePrometheusMonitoring is deprecated
   * 
   * @param request - CreatePrometheusMonitoringRequest
   * @returns CreatePrometheusMonitoringResponse
   */
  // Deprecated
  async createPrometheusMonitoring(request: $_model.CreatePrometheusMonitoringRequest): Promise<$_model.CreatePrometheusMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPrometheusMonitoringWithOptions(request, runtime);
  }

  /**
   * Creates a Browser Monitoring task for an application.
   * 
   * @param request - CreateRetcodeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRetcodeAppResponse
   */
  async createRetcodeAppWithOptions(request: $_model.CreateRetcodeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRetcodeAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    if (!$dara.isNull(request.retcodeAppType)) {
      query["RetcodeAppType"] = request.retcodeAppType;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRetcodeApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRetcodeAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateRetcodeAppResponse({}));
  }

  /**
   * Creates a Browser Monitoring task for an application.
   * 
   * @param request - CreateRetcodeAppRequest
   * @returns CreateRetcodeAppResponse
   */
  async createRetcodeApp(request: $_model.CreateRetcodeAppRequest): Promise<$_model.CreateRetcodeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRetcodeAppWithOptions(request, runtime);
  }

  /**
   * Create a Real User Monitoring (RUM) application.
   * 
   * @param tmpReq - CreateRumAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRumAppResponse
   */
  async createRumAppWithOptions(tmpReq: $_model.CreateRumAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRumAppResponse> {
    tmpReq.validate();
    let request = new $_model.CreateRumAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appGroup)) {
      query["AppGroup"] = request.appGroup;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.nickName)) {
      query["NickName"] = request.nickName;
    }

    if (!$dara.isNull(request.packageName)) {
      query["PackageName"] = request.packageName;
    }

    if (!$dara.isNull(request.realRegionId)) {
      query["RealRegionId"] = request.realRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.siteType)) {
      query["SiteType"] = request.siteType;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRumApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRumAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateRumAppResponse({}));
  }

  /**
   * Create a Real User Monitoring (RUM) application.
   * 
   * @param request - CreateRumAppRequest
   * @returns CreateRumAppResponse
   */
  async createRumApp(request: $_model.CreateRumAppRequest): Promise<$_model.CreateRumAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRumAppWithOptions(request, runtime);
  }

  /**
   * Creates a file upload URL to upload SourceMap files, symbol table files, or dSYM files.
   * 
   * @remarks
   * This operation returns a URL. You can upload files to the URL. For more information, see [Upload local files with signed URLs](https://help.aliyun.com/document_detail/2579659.html).
   * 
   * @param request - CreateRumUploadFileUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRumUploadFileUrlResponse
   */
  async createRumUploadFileUrlWithOptions(request: $_model.CreateRumUploadFileUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRumUploadFileUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourcemapType)) {
      query["SourcemapType"] = request.sourcemapType;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRumUploadFileUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRumUploadFileUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreateRumUploadFileUrlResponse({}));
  }

  /**
   * Creates a file upload URL to upload SourceMap files, symbol table files, or dSYM files.
   * 
   * @remarks
   * This operation returns a URL. You can upload files to the URL. For more information, see [Upload local files with signed URLs](https://help.aliyun.com/document_detail/2579659.html).
   * 
   * @param request - CreateRumUploadFileUrlRequest
   * @returns CreateRumUploadFileUrlResponse
   */
  async createRumUploadFileUrl(request: $_model.CreateRumUploadFileUrlRequest): Promise<$_model.CreateRumUploadFileUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRumUploadFileUrlWithOptions(request, runtime);
  }

  /**
   * Creates or updates a synthetic monitoring task.
   * 
   * @param tmpReq - CreateSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSyntheticTaskResponse
   */
  async createSyntheticTaskWithOptions(tmpReq: $_model.CreateSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSyntheticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSyntheticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.commonParam)) {
      request.commonParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonParam, "CommonParam", "json");
    }

    if (!$dara.isNull(tmpReq.download)) {
      request.downloadShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.download, "Download", "json");
    }

    if (!$dara.isNull(tmpReq.extendInterval)) {
      request.extendIntervalShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendInterval, "ExtendInterval", "json");
    }

    if (!$dara.isNull(tmpReq.monitorList)) {
      request.monitorListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitorList, "MonitorList", "json");
    }

    if (!$dara.isNull(tmpReq.navigation)) {
      request.navigationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.navigation, "Navigation", "json");
    }

    if (!$dara.isNull(tmpReq.net)) {
      request.netShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.net, "Net", "json");
    }

    if (!$dara.isNull(tmpReq.protocol)) {
      request.protocolShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.protocol, "Protocol", "json");
    }

    let query = { };
    if (!$dara.isNull(request.commonParamShrink)) {
      query["CommonParam"] = request.commonParamShrink;
    }

    if (!$dara.isNull(request.downloadShrink)) {
      query["Download"] = request.downloadShrink;
    }

    if (!$dara.isNull(request.extendIntervalShrink)) {
      query["ExtendInterval"] = request.extendIntervalShrink;
    }

    if (!$dara.isNull(request.intervalTime)) {
      query["IntervalTime"] = request.intervalTime;
    }

    if (!$dara.isNull(request.intervalType)) {
      query["IntervalType"] = request.intervalType;
    }

    if (!$dara.isNull(request.ipType)) {
      query["IpType"] = request.ipType;
    }

    if (!$dara.isNull(request.monitorListShrink)) {
      query["MonitorList"] = request.monitorListShrink;
    }

    if (!$dara.isNull(request.navigationShrink)) {
      query["Navigation"] = request.navigationShrink;
    }

    if (!$dara.isNull(request.netShrink)) {
      query["Net"] = request.netShrink;
    }

    if (!$dara.isNull(request.protocolShrink)) {
      query["Protocol"] = request.protocolShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.updateTask)) {
      query["UpdateTask"] = request.updateTask;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSyntheticTaskResponse({}));
  }

  /**
   * Creates or updates a synthetic monitoring task.
   * 
   * @param request - CreateSyntheticTaskRequest
   * @returns CreateSyntheticTaskResponse
   */
  async createSyntheticTask(request: $_model.CreateSyntheticTaskRequest): Promise<$_model.CreateSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled synthetic test task.
   * 
   * @param tmpReq - CreateTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTimingSyntheticTaskResponse
   */
  async createTimingSyntheticTaskWithOptions(tmpReq: $_model.CreateTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTimingSyntheticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTimingSyntheticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableAssertions)) {
      request.availableAssertionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableAssertions, "AvailableAssertions", "json");
    }

    if (!$dara.isNull(tmpReq.commonSetting)) {
      request.commonSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonSetting, "CommonSetting", "json");
    }

    if (!$dara.isNull(tmpReq.customPeriod)) {
      request.customPeriodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customPeriod, "CustomPeriod", "json");
    }

    if (!$dara.isNull(tmpReq.monitorConf)) {
      request.monitorConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitorConf, "MonitorConf", "json");
    }

    if (!$dara.isNull(tmpReq.monitors)) {
      request.monitorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitors, "Monitors", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.availableAssertionsShrink)) {
      query["AvailableAssertions"] = request.availableAssertionsShrink;
    }

    if (!$dara.isNull(request.commonSettingShrink)) {
      query["CommonSetting"] = request.commonSettingShrink;
    }

    if (!$dara.isNull(request.customPeriodShrink)) {
      query["CustomPeriod"] = request.customPeriodShrink;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.monitorCategory)) {
      query["MonitorCategory"] = request.monitorCategory;
    }

    if (!$dara.isNull(request.monitorConfShrink)) {
      query["MonitorConf"] = request.monitorConfShrink;
    }

    if (!$dara.isNull(request.monitorsShrink)) {
      query["Monitors"] = request.monitorsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTimingSyntheticTaskResponse({}));
  }

  /**
   * Creates a scheduled synthetic test task.
   * 
   * @param request - CreateTimingSyntheticTaskRequest
   * @returns CreateTimingSyntheticTaskResponse
   */
  async createTimingSyntheticTask(request: $_model.CreateTimingSyntheticTaskRequest): Promise<$_model.CreateTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Adds a contact for webhook alerts.
   * 
   * @param request - CreateWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWebhookResponse
   */
  async createWebhookWithOptions(request: $_model.CreateWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!$dara.isNull(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.recoverBody)) {
      query["RecoverBody"] = request.recoverBody;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWebhook",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWebhookResponse>(await this.callApi(params, req, runtime), new $_model.CreateWebhookResponse({}));
  }

  /**
   * Adds a contact for webhook alerts.
   * 
   * @param request - CreateWebhookRequest
   * @returns CreateWebhookResponse
   */
  async createWebhook(request: $_model.CreateWebhookRequest): Promise<$_model.CreateWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createWebhookWithOptions(request, runtime);
  }

  /**
   * Disables an authentication token.
   * 
   * @param request - DelAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DelAuthTokenResponse
   */
  async delAuthTokenWithOptions(request: $_model.DelAuthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DelAuthTokenResponse> {
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
      action: "DelAuthToken",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DelAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.DelAuthTokenResponse({}));
  }

  /**
   * Disables an authentication token.
   * 
   * @param request - DelAuthTokenRequest
   * @returns DelAuthTokenResponse
   */
  async delAuthToken(request: $_model.DelAuthTokenRequest): Promise<$_model.DelAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.delAuthTokenWithOptions(request, runtime);
  }

  /**
   * Delete AddonRelease data by AddonRelease name.
   * 
   * @param request - DeleteAddonReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonReleaseWithOptions(request: $_model.DeleteAddonReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAddonReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["ReleaseName"] = request.releaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAddonRelease",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAddonReleaseResponse({}));
  }

  /**
   * Delete AddonRelease data by AddonRelease name.
   * 
   * @param request - DeleteAddonReleaseRequest
   * @returns DeleteAddonReleaseResponse
   */
  async deleteAddonRelease(request: $_model.DeleteAddonReleaseRequest): Promise<$_model.DeleteAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAddonReleaseWithOptions(request, runtime);
  }

  /**
   * Deletes an DeleteAlertContact contact.
   * 
   * @remarks
   * *******
   * 
   * @param request - DeleteAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContactWithOptions(request: $_model.DeleteAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactResponse({}));
  }

  /**
   * Deletes an DeleteAlertContact contact.
   * 
   * @remarks
   * *******
   * 
   * @param request - DeleteAlertContactRequest
   * @returns DeleteAlertContactResponse
   */
  async deleteAlertContact(request: $_model.DeleteAlertContactRequest): Promise<$_model.DeleteAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertContactWithOptions(request, runtime);
  }

  /**
   * Deletes an DeleteAlertContactGroup contact group.
   * 
   * @param request - DeleteAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroupWithOptions(request: $_model.DeleteAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertContactGroupResponse({}));
  }

  /**
   * Deletes an DeleteAlertContactGroup contact group.
   * 
   * @param request - DeleteAlertContactGroupRequest
   * @returns DeleteAlertContactGroupResponse
   */
  async deleteAlertContactGroup(request: $_model.DeleteAlertContactGroupRequest): Promise<$_model.DeleteAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * Deletes an alert rule.
   * 
   * @param request - DeleteAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertRuleResponse
   */
  async deleteAlertRuleWithOptions(request: $_model.DeleteAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertRuleResponse({}));
  }

  /**
   * Deletes an alert rule.
   * 
   * @param request - DeleteAlertRuleRequest
   * @returns DeleteAlertRuleResponse
   */
  async deleteAlertRule(request: $_model.DeleteAlertRuleRequest): Promise<$_model.DeleteAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertRuleWithOptions(request, runtime);
  }

  /**
   * Deletes alert rules.
   * 
   * @remarks
   * The current operation is no longer maintained. Call the DeleteAlertRule operation of Alert Management (New) to delete alert rules.
   * 
   * @param request - DeleteAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlertRulesResponse
   */
  async deleteAlertRulesWithOptions(request: $_model.DeleteAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAlertRulesResponse({}));
  }

  /**
   * Deletes alert rules.
   * 
   * @remarks
   * The current operation is no longer maintained. Call the DeleteAlertRule operation of Alert Management (New) to delete alert rules.
   * 
   * @param request - DeleteAlertRulesRequest
   * @returns DeleteAlertRulesResponse
   */
  async deleteAlertRules(request: $_model.DeleteAlertRulesRequest): Promise<$_model.DeleteAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAlertRulesWithOptions(request, runtime);
  }

  /**
   * Deletes multiple applications at a time based on the process IDs (PIDs).
   * 
   * @param request - DeleteAppListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppListResponse
   */
  async deleteAppListWithOptions(request: $_model.DeleteAppListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pids)) {
      query["Pids"] = request.pids;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAppList",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppListResponse({}));
  }

  /**
   * Deletes multiple applications at a time based on the process IDs (PIDs).
   * 
   * @param request - DeleteAppListRequest
   * @returns DeleteAppListResponse
   */
  async deleteAppList(request: $_model.DeleteAppListRequest): Promise<$_model.DeleteAppListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppListWithOptions(request, runtime);
  }

  /**
   * Releases a Prometheus instance for Alibaba Cloud services.
   * 
   * @deprecated OpenAPI DeleteCmsExporter is deprecated, please use ARMS::2019-08-08::DeleteAddonRelease instead.
   * 
   * @param request - DeleteCmsExporterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCmsExporterResponse
   */
  async deleteCmsExporterWithOptions(request: $_model.DeleteCmsExporterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCmsExporterResponse> {
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
      action: "DeleteCmsExporter",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCmsExporterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCmsExporterResponse({}));
  }

  /**
   * Releases a Prometheus instance for Alibaba Cloud services.
   * 
   * @deprecated OpenAPI DeleteCmsExporter is deprecated, please use ARMS::2019-08-08::DeleteAddonRelease instead.
   * 
   * @param request - DeleteCmsExporterRequest
   * @returns DeleteCmsExporterResponse
   */
  // Deprecated
  async deleteCmsExporter(request: $_model.DeleteCmsExporterRequest): Promise<$_model.DeleteCmsExporterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCmsExporterWithOptions(request, runtime);
  }

  /**
   * Deletes alert contacts.
   * 
   * @param request - DeleteContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactResponse
   */
  async deleteContactWithOptions(request: $_model.DeleteContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactResponse({}));
  }

  /**
   * Deletes alert contacts.
   * 
   * @param request - DeleteContactRequest
   * @returns DeleteContactResponse
   */
  async deleteContact(request: $_model.DeleteContactRequest): Promise<$_model.DeleteContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactWithOptions(request, runtime);
  }

  /**
   * Deletes an alert contact group.
   * 
   * @param request - DeleteContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteContactGroupResponse
   */
  async deleteContactGroupWithOptions(request: $_model.DeleteContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteContactGroupResponse({}));
  }

  /**
   * Deletes an alert contact group.
   * 
   * @param request - DeleteContactGroupRequest
   * @returns DeleteContactGroupResponse
   */
  async deleteContactGroup(request: $_model.DeleteContactGroupRequest): Promise<$_model.DeleteContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteContactGroupWithOptions(request, runtime);
  }

  /**
   * Deletes the dispatch policy of a specified ID.
   * 
   * @param request - DeleteDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDispatchRuleResponse
   */
  async deleteDispatchRuleWithOptions(request: $_model.DeleteDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDispatchRuleResponse({}));
  }

  /**
   * Deletes the dispatch policy of a specified ID.
   * 
   * @param request - DeleteDispatchRuleRequest
   * @returns DeleteDispatchRuleResponse
   */
  async deleteDispatchRule(request: $_model.DeleteDispatchRuleRequest): Promise<$_model.DeleteDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDispatchRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a custom job for an environment.
   * 
   * @param request - DeleteEnvCustomJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvCustomJobResponse
   */
  async deleteEnvCustomJobWithOptions(request: $_model.DeleteEnvCustomJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvCustomJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customJobName)) {
      query["CustomJobName"] = request.customJobName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvCustomJob",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvCustomJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvCustomJobResponse({}));
  }

  /**
   * Deletes a custom job for an environment.
   * 
   * @param request - DeleteEnvCustomJobRequest
   * @returns DeleteEnvCustomJobResponse
   */
  async deleteEnvCustomJob(request: $_model.DeleteEnvCustomJobRequest): Promise<$_model.DeleteEnvCustomJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnvCustomJobWithOptions(request, runtime);
  }

  /**
   * Deletes the PodMonitor of an environment.
   * 
   * @param request - DeleteEnvPodMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvPodMonitorResponse
   */
  async deleteEnvPodMonitorWithOptions(request: $_model.DeleteEnvPodMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvPodMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.podMonitorName)) {
      query["PodMonitorName"] = request.podMonitorName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvPodMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvPodMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvPodMonitorResponse({}));
  }

  /**
   * Deletes the PodMonitor of an environment.
   * 
   * @param request - DeleteEnvPodMonitorRequest
   * @returns DeleteEnvPodMonitorResponse
   */
  async deleteEnvPodMonitor(request: $_model.DeleteEnvPodMonitorRequest): Promise<$_model.DeleteEnvPodMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnvPodMonitorWithOptions(request, runtime);
  }

  /**
   * Deletes the ServiceMonitor of an environment.
   * 
   * @param request - DeleteEnvServiceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvServiceMonitorResponse
   */
  async deleteEnvServiceMonitorWithOptions(request: $_model.DeleteEnvServiceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvServiceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceMonitorName)) {
      query["ServiceMonitorName"] = request.serviceMonitorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvServiceMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvServiceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvServiceMonitorResponse({}));
  }

  /**
   * Deletes the ServiceMonitor of an environment.
   * 
   * @param request - DeleteEnvServiceMonitorRequest
   * @returns DeleteEnvServiceMonitorResponse
   */
  async deleteEnvServiceMonitor(request: $_model.DeleteEnvServiceMonitorRequest): Promise<$_model.DeleteEnvServiceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnvServiceMonitorWithOptions(request, runtime);
  }

  /**
   * Deletes an environment instance.
   * 
   * @param request - DeleteEnvironmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(request: $_model.DeleteEnvironmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvironmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletePromInstance)) {
      query["DeletePromInstance"] = request.deletePromInstance;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvironmentResponse({}));
  }

  /**
   * Deletes an environment instance.
   * 
   * @param request - DeleteEnvironmentRequest
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironment(request: $_model.DeleteEnvironmentRequest): Promise<$_model.DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnvironmentWithOptions(request, runtime);
  }

  /**
   * Deletes a feature.
   * 
   * @param request - DeleteEnvironmentFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentFeatureResponse
   */
  async deleteEnvironmentFeatureWithOptions(request: $_model.DeleteEnvironmentFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvironmentFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironmentFeature",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEnvironmentFeatureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvironmentFeatureResponse({}));
  }

  /**
   * Deletes a feature.
   * 
   * @param request - DeleteEnvironmentFeatureRequest
   * @returns DeleteEnvironmentFeatureResponse
   */
  async deleteEnvironmentFeature(request: $_model.DeleteEnvironmentFeatureRequest): Promise<$_model.DeleteEnvironmentFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEnvironmentFeatureWithOptions(request, runtime);
  }

  /**
   * Deletes an EventBridge integration.
   * 
   * @param request - DeleteEventBridgeIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventBridgeIntegrationResponse
   */
  async deleteEventBridgeIntegrationWithOptions(request: $_model.DeleteEventBridgeIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventBridgeIntegrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventBridgeIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventBridgeIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventBridgeIntegrationResponse({}));
  }

  /**
   * Deletes an EventBridge integration.
   * 
   * @param request - DeleteEventBridgeIntegrationRequest
   * @returns DeleteEventBridgeIntegrationResponse
   */
  async deleteEventBridgeIntegration(request: $_model.DeleteEventBridgeIntegrationRequest): Promise<$_model.DeleteEventBridgeIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventBridgeIntegrationWithOptions(request, runtime);
  }

  /**
   * Deletes Grafana dashboard resources from a Managed Service for Prometheus instance.
   * 
   * @deprecated OpenAPI DeleteGrafanaResource is deprecated
   * 
   * @param request - DeleteGrafanaResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGrafanaResourceResponse
   */
  async deleteGrafanaResourceWithOptions(request: $_model.DeleteGrafanaResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGrafanaResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      body["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      body["ClusterName"] = request.clusterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGrafanaResource",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGrafanaResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGrafanaResourceResponse({}));
  }

  /**
   * Deletes Grafana dashboard resources from a Managed Service for Prometheus instance.
   * 
   * @deprecated OpenAPI DeleteGrafanaResource is deprecated
   * 
   * @param request - DeleteGrafanaResourceRequest
   * @returns DeleteGrafanaResourceResponse
   */
  // Deprecated
  async deleteGrafanaResource(request: $_model.DeleteGrafanaResourceRequest): Promise<$_model.DeleteGrafanaResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGrafanaResourceWithOptions(request, runtime);
  }

  /**
   * Deletes a Managed Service for Prometheus workspace.
   * 
   * @remarks
   *   You can delete workspaces only in Managed Service for Prometheus Beta Edition, which is `free of charge`.
   * *   You cannot delete workspaces in Managed Service for Prometheus Developer Edition, Pro Edition, and Advanced Edition. You can go to the [User Center](https://usercenter2.aliyun.com/refund/refund) to unsubscribe from workspaces.
   * 
   * @param request - DeleteGrafanaWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGrafanaWorkspaceResponse
   */
  async deleteGrafanaWorkspaceWithOptions(request: $_model.DeleteGrafanaWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGrafanaWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.grafanaWorkspaceId)) {
      query["GrafanaWorkspaceId"] = request.grafanaWorkspaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGrafanaWorkspace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGrafanaWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGrafanaWorkspaceResponse({}));
  }

  /**
   * Deletes a Managed Service for Prometheus workspace.
   * 
   * @remarks
   *   You can delete workspaces only in Managed Service for Prometheus Beta Edition, which is `free of charge`.
   * *   You cannot delete workspaces in Managed Service for Prometheus Developer Edition, Pro Edition, and Advanced Edition. You can go to the [User Center](https://usercenter2.aliyun.com/refund/refund) to unsubscribe from workspaces.
   * 
   * @param request - DeleteGrafanaWorkspaceRequest
   * @returns DeleteGrafanaWorkspaceResponse
   */
  async deleteGrafanaWorkspace(request: $_model.DeleteGrafanaWorkspaceRequest): Promise<$_model.DeleteGrafanaWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGrafanaWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes an instant messaging (IM) chatbot.
   * 
   * @param request - DeleteIMRobotRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIMRobotResponse
   */
  async deleteIMRobotWithOptions(request: $_model.DeleteIMRobotRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIMRobotResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.robotId)) {
      query["RobotId"] = request.robotId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIMRobot",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIMRobotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIMRobotResponse({}));
  }

  /**
   * Deletes an instant messaging (IM) chatbot.
   * 
   * @param request - DeleteIMRobotRequest
   * @returns DeleteIMRobotResponse
   */
  async deleteIMRobot(request: $_model.DeleteIMRobotRequest): Promise<$_model.DeleteIMRobotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIMRobotWithOptions(request, runtime);
  }

  /**
   * Deletes collection rules from an integration.
   * 
   * @deprecated OpenAPI DeleteIntegration is deprecated, please use ARMS::2019-08-08::DeleteAddonRelease instead.
   * 
   * @param request - DeleteIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntegrationResponse
   */
  async deleteIntegrationWithOptions(request: $_model.DeleteIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntegrationResponse({}));
  }

  /**
   * Deletes collection rules from an integration.
   * 
   * @deprecated OpenAPI DeleteIntegration is deprecated, please use ARMS::2019-08-08::DeleteAddonRelease instead.
   * 
   * @param request - DeleteIntegrationRequest
   * @returns DeleteIntegrationResponse
   */
  // Deprecated
  async deleteIntegration(request: $_model.DeleteIntegrationRequest): Promise<$_model.DeleteIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntegrationWithOptions(request, runtime);
  }

  /**
   * Deletes an alert integration.
   * 
   * @param request - DeleteIntegrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIntegrationsResponse
   */
  async deleteIntegrationsWithOptions(request: $_model.DeleteIntegrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIntegrationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIntegrations",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIntegrationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIntegrationsResponse({}));
  }

  /**
   * Deletes an alert integration.
   * 
   * @param request - DeleteIntegrationsRequest
   * @returns DeleteIntegrationsResponse
   */
  async deleteIntegrations(request: $_model.DeleteIntegrationsRequest): Promise<$_model.DeleteIntegrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteIntegrationsWithOptions(request, runtime);
  }

  /**
   * Deletes a notification policy based on its ID.
   * 
   * @param request - DeleteNotificationPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNotificationPolicyResponse
   */
  async deleteNotificationPolicyWithOptions(request: $_model.DeleteNotificationPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNotificationPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNotificationPolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNotificationPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNotificationPolicyResponse({}));
  }

  /**
   * Deletes a notification policy based on its ID.
   * 
   * @param request - DeleteNotificationPolicyRequest
   * @returns DeleteNotificationPolicyResponse
   */
  async deleteNotificationPolicy(request: $_model.DeleteNotificationPolicyRequest): Promise<$_model.DeleteNotificationPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNotificationPolicyWithOptions(request, runtime);
  }

  /**
   * Deletes an alert rule of Prometheus Service.
   * 
   * @param request - DeletePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusAlertRuleResponse
   */
  async deletePrometheusAlertRuleWithOptions(request: $_model.DeletePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusAlertRuleResponse({}));
  }

  /**
   * Deletes an alert rule of Prometheus Service.
   * 
   * @param request - DeletePrometheusAlertRuleRequest
   * @returns DeletePrometheusAlertRuleResponse
   */
  async deletePrometheusAlertRule(request: $_model.DeletePrometheusAlertRuleRequest): Promise<$_model.DeletePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a global aggregation instance from Prometheus Service.
   * 
   * @deprecated OpenAPI DeletePrometheusGlobalView is deprecated
   * 
   * @param request - DeletePrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusGlobalViewResponse
   */
  async deletePrometheusGlobalViewWithOptions(request: $_model.DeletePrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusGlobalViewResponse({}));
  }

  /**
   * Deletes a global aggregation instance from Prometheus Service.
   * 
   * @deprecated OpenAPI DeletePrometheusGlobalView is deprecated
   * 
   * @param request - DeletePrometheusGlobalViewRequest
   * @returns DeletePrometheusGlobalViewResponse
   */
  // Deprecated
  async deletePrometheusGlobalView(request: $_model.DeletePrometheusGlobalViewRequest): Promise<$_model.DeletePrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Deletes an exporter from a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI DeletePrometheusIntegration is deprecated
   * 
   * @param request - DeletePrometheusIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusIntegrationResponse
   */
  async deletePrometheusIntegrationWithOptions(request: $_model.DeletePrometheusIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePrometheusIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusIntegrationResponse({}));
  }

  /**
   * Deletes an exporter from a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI DeletePrometheusIntegration is deprecated
   * 
   * @param request - DeletePrometheusIntegrationRequest
   * @returns DeletePrometheusIntegrationResponse
   */
  // Deprecated
  async deletePrometheusIntegration(request: $_model.DeletePrometheusIntegrationRequest): Promise<$_model.DeletePrometheusIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrometheusIntegrationWithOptions(request, runtime);
  }

  /**
   * Deletes the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI DeletePrometheusMonitoring is deprecated
   * 
   * @param request - DeletePrometheusMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePrometheusMonitoringResponse
   */
  async deletePrometheusMonitoringWithOptions(request: $_model.DeletePrometheusMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePrometheusMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.monitoringName)) {
      query["MonitoringName"] = request.monitoringName;
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
      action: "DeletePrometheusMonitoring",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePrometheusMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.DeletePrometheusMonitoringResponse({}));
  }

  /**
   * Deletes the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI DeletePrometheusMonitoring is deprecated
   * 
   * @param request - DeletePrometheusMonitoringRequest
   * @returns DeletePrometheusMonitoringResponse
   */
  // Deprecated
  async deletePrometheusMonitoring(request: $_model.DeletePrometheusMonitoringRequest): Promise<$_model.DeletePrometheusMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePrometheusMonitoringWithOptions(request, runtime);
  }

  /**
   * Deletes a Browser Monitoring task.
   * 
   * @param request - DeleteRetcodeAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRetcodeAppResponse
   */
  async deleteRetcodeAppWithOptions(request: $_model.DeleteRetcodeAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRetcodeAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRetcodeApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRetcodeAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRetcodeAppResponse({}));
  }

  /**
   * Deletes a Browser Monitoring task.
   * 
   * @param request - DeleteRetcodeAppRequest
   * @returns DeleteRetcodeAppResponse
   */
  async deleteRetcodeApp(request: $_model.DeleteRetcodeAppRequest): Promise<$_model.DeleteRetcodeAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRetcodeAppWithOptions(request, runtime);
  }

  /**
   * Deletes a RUM application.
   * 
   * @param request - DeleteRumAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRumAppResponse
   */
  async deleteRumAppWithOptions(request: $_model.DeleteRumAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRumAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGroup)) {
      query["AppGroup"] = request.appGroup;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.realRegionId)) {
      query["RealRegionId"] = request.realRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRumApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRumAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRumAppResponse({}));
  }

  /**
   * Deletes a RUM application.
   * 
   * @param request - DeleteRumAppRequest
   * @returns DeleteRumAppResponse
   */
  async deleteRumApp(request: $_model.DeleteRumAppRequest): Promise<$_model.DeleteRumAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRumAppWithOptions(request, runtime);
  }

  /**
   * Deletes a file such as a symbol table or SourceMap.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - DeleteRumUploadFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRumUploadFileResponse
   */
  async deleteRumUploadFileWithOptions(request: $_model.DeleteRumUploadFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRumUploadFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.batchItems)) {
      query["BatchItems"] = request.batchItems;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRumUploadFile",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRumUploadFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRumUploadFileResponse({}));
  }

  /**
   * Deletes a file such as a symbol table or SourceMap.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - DeleteRumUploadFileRequest
   * @returns DeleteRumUploadFileResponse
   */
  async deleteRumUploadFile(request: $_model.DeleteRumUploadFileRequest): Promise<$_model.DeleteRumUploadFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRumUploadFileWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScenarioResponse
   */
  async deleteScenarioWithOptions(request: $_model.DeleteScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScenarioResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScenarioResponse({}));
  }

  /**
   * @param request - DeleteScenarioRequest
   * @returns DeleteScenarioResponse
   */
  async deleteScenario(request: $_model.DeleteScenarioRequest): Promise<$_model.DeleteScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScenarioWithOptions(request, runtime);
  }

  /**
   * The ID of the silence policy.
   * 
   * @param request - DeleteSilencePolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSilencePolicyResponse
   */
  async deleteSilencePolicyWithOptions(request: $_model.DeleteSilencePolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSilencePolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSilencePolicy",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSilencePolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSilencePolicyResponse({}));
  }

  /**
   * The ID of the silence policy.
   * 
   * @param request - DeleteSilencePolicyRequest
   * @returns DeleteSilencePolicyResponse
   */
  async deleteSilencePolicy(request: $_model.DeleteSilencePolicyRequest): Promise<$_model.DeleteSilencePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSilencePolicyWithOptions(request, runtime);
  }

  /**
   * Deletes the SourceMap files uploaded in Browser Monitoring.
   * 
   * @param tmpReq - DeleteSourceMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSourceMapResponse
   */
  async deleteSourceMapWithOptions(tmpReq: $_model.DeleteSourceMapRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSourceMapResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteSourceMapShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.fidList)) {
      request.fidListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.fidList, "FidList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.fidListShrink)) {
      query["FidList"] = request.fidListShrink;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSourceMap",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSourceMapResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSourceMapResponse({}));
  }

  /**
   * Deletes the SourceMap files uploaded in Browser Monitoring.
   * 
   * @param request - DeleteSourceMapRequest
   * @returns DeleteSourceMapResponse
   */
  async deleteSourceMap(request: $_model.DeleteSourceMapRequest): Promise<$_model.DeleteSourceMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSourceMapWithOptions(request, runtime);
  }

  /**
   * Deletes scheduled synthetic monitoring tasks.
   * 
   * @param request - DeleteSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSyntheticTaskResponse
   */
  async deleteSyntheticTaskWithOptions(request: $_model.DeleteSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSyntheticTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSyntheticTaskResponse({}));
  }

  /**
   * Deletes scheduled synthetic monitoring tasks.
   * 
   * @param request - DeleteSyntheticTaskRequest
   * @returns DeleteSyntheticTaskResponse
   */
  async deleteSyntheticTask(request: $_model.DeleteSyntheticTaskRequest): Promise<$_model.DeleteSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled synthetic monitoring task.
   * 
   * @param request - DeleteTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTimingSyntheticTaskResponse
   */
  async deleteTimingSyntheticTaskWithOptions(request: $_model.DeleteTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTimingSyntheticTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTimingSyntheticTaskResponse({}));
  }

  /**
   * Deletes a scheduled synthetic monitoring task.
   * 
   * @param request - DeleteTimingSyntheticTaskRequest
   * @returns DeleteTimingSyntheticTaskResponse
   */
  async deleteTimingSyntheticTask(request: $_model.DeleteTimingSyntheticTaskRequest): Promise<$_model.DeleteTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Deletes an application based on a specified process identifier (PID) and application type.
   * 
   * @param tmpReq - DeleteTraceAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTraceAppResponse
   */
  async deleteTraceAppWithOptions(tmpReq: $_model.DeleteTraceAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTraceAppResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteTraceAppShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.deleteReason)) {
      request.deleteReasonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.deleteReason, "DeleteReason", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.deleteReasonShrink)) {
      query["DeleteReason"] = request.deleteReasonShrink;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
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
      action: "DeleteTraceApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTraceAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTraceAppResponse({}));
  }

  /**
   * Deletes an application based on a specified process identifier (PID) and application type.
   * 
   * @param request - DeleteTraceAppRequest
   * @returns DeleteTraceAppResponse
   */
  async deleteTraceApp(request: $_model.DeleteTraceAppRequest): Promise<$_model.DeleteTraceAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTraceAppWithOptions(request, runtime);
  }

  /**
   * Deletes a webhook alert contact.
   * 
   * @param request - DeleteWebhookContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWebhookContactResponse
   */
  async deleteWebhookContactWithOptions(request: $_model.DeleteWebhookContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWebhookContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.webhookId)) {
      query["WebhookId"] = request.webhookId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWebhookContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWebhookContactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWebhookContactResponse({}));
  }

  /**
   * Deletes a webhook alert contact.
   * 
   * @param request - DeleteWebhookContactRequest
   * @returns DeleteWebhookContactResponse
   */
  async deleteWebhookContact(request: $_model.DeleteWebhookContactRequest): Promise<$_model.DeleteWebhookContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWebhookContactWithOptions(request, runtime);
  }

  /**
   * Queries the metric details of a component.
   * 
   * @param request - DescribeAddonMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonMetricsResponse
   */
  async describeAddonMetricsWithOptions(request: $_model.DescribeAddonMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentType)) {
      query["EnvironmentType"] = request.environmentType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddonMetrics",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonMetricsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonMetricsResponse({}));
  }

  /**
   * Queries the metric details of a component.
   * 
   * @param request - DescribeAddonMetricsRequest
   * @returns DescribeAddonMetricsResponse
   */
  async describeAddonMetrics(request: $_model.DescribeAddonMetricsRequest): Promise<$_model.DescribeAddonMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddonMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the release information of an add-on by name.
   * 
   * @param request - DescribeAddonReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonReleaseResponse
   */
  async describeAddonReleaseWithOptions(request: $_model.DescribeAddonReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAddonReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["ReleaseName"] = request.releaseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAddonRelease",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAddonReleaseResponse({}));
  }

  /**
   * Queries the release information of an add-on by name.
   * 
   * @param request - DescribeAddonReleaseRequest
   * @returns DescribeAddonReleaseResponse
   */
  async describeAddonRelease(request: $_model.DescribeAddonReleaseRequest): Promise<$_model.DescribeAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAddonReleaseWithOptions(request, runtime);
  }

  /**
   * Queries an alert contact group.
   * 
   * @param request - DescribeContactGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactGroupsResponse
   */
  async describeContactGroupsWithOptions(request: $_model.DescribeContactGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.groupIds)) {
      query["GroupIds"] = request.groupIds;
    }

    if (!$dara.isNull(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContactGroups",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactGroupsResponse({}));
  }

  /**
   * Queries an alert contact group.
   * 
   * @param request - DescribeContactGroupsRequest
   * @returns DescribeContactGroupsResponse
   */
  async describeContactGroups(request: $_model.DescribeContactGroupsRequest): Promise<$_model.DescribeContactGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactGroupsWithOptions(request, runtime);
  }

  /**
   * Queries alert contacts.
   * 
   * @param request - DescribeContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeContactsResponse
   */
  async describeContactsWithOptions(request: $_model.DescribeContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeContactsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeContacts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeContactsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeContactsResponse({}));
  }

  /**
   * Queries alert contacts.
   * 
   * @param request - DescribeContactsRequest
   * @returns DescribeContactsResponse
   */
  async describeContacts(request: $_model.DescribeContactsRequest): Promise<$_model.DescribeContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeContactsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a dispatch policy.
   * 
   * @param request - DescribeDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDispatchRuleResponse
   */
  async describeDispatchRuleWithOptions(request: $_model.DescribeDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDispatchRuleResponse({}));
  }

  /**
   * Queries the information about a dispatch policy.
   * 
   * @param request - DescribeDispatchRuleRequest
   * @returns DescribeDispatchRuleResponse
   */
  async describeDispatchRule(request: $_model.DescribeDispatchRuleRequest): Promise<$_model.DescribeDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDispatchRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of a custom job for an environment.
   * 
   * @param request - DescribeEnvCustomJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvCustomJobResponse
   */
  async describeEnvCustomJobWithOptions(request: $_model.DescribeEnvCustomJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvCustomJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customJobName)) {
      query["CustomJobName"] = request.customJobName;
    }

    if (!$dara.isNull(request.encryptYaml)) {
      query["EncryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvCustomJob",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvCustomJobResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvCustomJobResponse({}));
  }

  /**
   * Queries the details of a custom job for an environment.
   * 
   * @param request - DescribeEnvCustomJobRequest
   * @returns DescribeEnvCustomJobResponse
   */
  async describeEnvCustomJob(request: $_model.DescribeEnvCustomJobRequest): Promise<$_model.DescribeEnvCustomJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvCustomJobWithOptions(request, runtime);
  }

  /**
   * 查询指定环境实例的废弃指标列表
   * 
   * @param request - DescribeEnvDropMetricsRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvDropMetricsRuleResponse
   */
  async describeEnvDropMetricsRuleWithOptions(request: $_model.DescribeEnvDropMetricsRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvDropMetricsRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvDropMetricsRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvDropMetricsRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvDropMetricsRuleResponse({}));
  }

  /**
   * 查询指定环境实例的废弃指标列表
   * 
   * @param request - DescribeEnvDropMetricsRuleRequest
   * @returns DescribeEnvDropMetricsRuleResponse
   */
  async describeEnvDropMetricsRule(request: $_model.DescribeEnvDropMetricsRuleRequest): Promise<$_model.DescribeEnvDropMetricsRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvDropMetricsRuleWithOptions(request, runtime);
  }

  /**
   * Queries the PodMonitor details of an environment.
   * 
   * @param request - DescribeEnvPodMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvPodMonitorResponse
   */
  async describeEnvPodMonitorWithOptions(request: $_model.DescribeEnvPodMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvPodMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.podMonitorName)) {
      query["PodMonitorName"] = request.podMonitorName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvPodMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvPodMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvPodMonitorResponse({}));
  }

  /**
   * Queries the PodMonitor details of an environment.
   * 
   * @param request - DescribeEnvPodMonitorRequest
   * @returns DescribeEnvPodMonitorResponse
   */
  async describeEnvPodMonitor(request: $_model.DescribeEnvPodMonitorRequest): Promise<$_model.DescribeEnvPodMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvPodMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the ServiceMonitor details of an environment.
   * 
   * @param request - DescribeEnvServiceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvServiceMonitorResponse
   */
  async describeEnvServiceMonitorWithOptions(request: $_model.DescribeEnvServiceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvServiceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceMonitorName)) {
      query["ServiceMonitorName"] = request.serviceMonitorName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvServiceMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvServiceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvServiceMonitorResponse({}));
  }

  /**
   * Queries the ServiceMonitor details of an environment.
   * 
   * @param request - DescribeEnvServiceMonitorRequest
   * @returns DescribeEnvServiceMonitorResponse
   */
  async describeEnvServiceMonitor(request: $_model.DescribeEnvServiceMonitorRequest): Promise<$_model.DescribeEnvServiceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvServiceMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the details of an environment.
   * 
   * @param request - DescribeEnvironmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvironmentResponse
   */
  async describeEnvironmentWithOptions(request: $_model.DescribeEnvironmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvironmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvironment",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvironmentResponse({}));
  }

  /**
   * Queries the details of an environment.
   * 
   * @param request - DescribeEnvironmentRequest
   * @returns DescribeEnvironmentResponse
   */
  async describeEnvironment(request: $_model.DescribeEnvironmentRequest): Promise<$_model.DescribeEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvironmentWithOptions(request, runtime);
  }

  /**
   * Queries the details of a feature.
   * 
   * @param request - DescribeEnvironmentFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnvironmentFeatureResponse
   */
  async describeEnvironmentFeatureWithOptions(request: $_model.DescribeEnvironmentFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnvironmentFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnvironmentFeature",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnvironmentFeatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnvironmentFeatureResponse({}));
  }

  /**
   * Queries the details of a feature.
   * 
   * @param request - DescribeEnvironmentFeatureRequest
   * @returns DescribeEnvironmentFeatureResponse
   */
  async describeEnvironmentFeature(request: $_model.DescribeEnvironmentFeatureRequest): Promise<$_model.DescribeEnvironmentFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnvironmentFeatureWithOptions(request, runtime);
  }

  /**
   * Queries instant messaging (IM) chatbots.
   * 
   * @param request - DescribeIMRobotsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIMRobotsResponse
   */
  async describeIMRobotsWithOptions(request: $_model.DescribeIMRobotsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIMRobotsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.robotIds)) {
      query["RobotIds"] = request.robotIds;
    }

    if (!$dara.isNull(request.robotName)) {
      query["RobotName"] = request.robotName;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIMRobots",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIMRobotsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIMRobotsResponse({}));
  }

  /**
   * Queries instant messaging (IM) chatbots.
   * 
   * @param request - DescribeIMRobotsRequest
   * @returns DescribeIMRobotsResponse
   */
  async describeIMRobots(request: $_model.DescribeIMRobotsRequest): Promise<$_model.DescribeIMRobotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeIMRobotsWithOptions(request, runtime);
  }

  /**
   * Queries the details about an alert rule for a Prometheus instance.
   * 
   * @param request - DescribePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePrometheusAlertRuleResponse
   */
  async describePrometheusAlertRuleWithOptions(request: $_model.DescribePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.DescribePrometheusAlertRuleResponse({}));
  }

  /**
   * Queries the details about an alert rule for a Prometheus instance.
   * 
   * @param request - DescribePrometheusAlertRuleRequest
   * @returns DescribePrometheusAlertRuleResponse
   */
  async describePrometheusAlertRule(request: $_model.DescribePrometheusAlertRuleRequest): Promise<$_model.DescribePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * Queries the license key.
   * 
   * @param request - DescribeTraceLicenseKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTraceLicenseKeyResponse
   */
  async describeTraceLicenseKeyWithOptions(request: $_model.DescribeTraceLicenseKeyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTraceLicenseKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTraceLicenseKey",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTraceLicenseKeyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTraceLicenseKeyResponse({}));
  }

  /**
   * Queries the license key.
   * 
   * @param request - DescribeTraceLicenseKeyRequest
   * @returns DescribeTraceLicenseKeyResponse
   */
  async describeTraceLicenseKey(request: $_model.DescribeTraceLicenseKeyRequest): Promise<$_model.DescribeTraceLicenseKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTraceLicenseKeyWithOptions(request, runtime);
  }

  /**
   * Queries the list of webhook alert contacts.
   * 
   * @param request - DescribeWebhookContactsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWebhookContactsResponse
   */
  async describeWebhookContactsWithOptions(request: $_model.DescribeWebhookContactsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWebhookContactsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWebhookContacts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWebhookContactsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWebhookContactsResponse({}));
  }

  /**
   * Queries the list of webhook alert contacts.
   * 
   * @param request - DescribeWebhookContactsRequest
   * @returns DescribeWebhookContactsResponse
   */
  async describeWebhookContacts(request: $_model.DescribeWebhookContactsRequest): Promise<$_model.DescribeWebhookContactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWebhookContactsWithOptions(request, runtime);
  }

  /**
   * Performs actions based on the specified module type.
   * 
   * @param request - DoInsightsActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DoInsightsActionResponse
   */
  async doInsightsActionWithOptions(request: $_model.DoInsightsActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DoInsightsActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.module)) {
      body["Module"] = request.module;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DoInsightsAction",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DoInsightsActionResponse>(await this.callApi(params, req, runtime), new $_model.DoInsightsActionResponse({}));
  }

  /**
   * Performs actions based on the specified module type.
   * 
   * @param request - DoInsightsActionRequest
   * @returns DoInsightsActionResponse
   */
  async doInsightsAction(request: $_model.DoInsightsActionRequest): Promise<$_model.DoInsightsActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.doInsightsActionWithOptions(request, runtime);
  }

  /**
   * Enables a discarded metric.
   * 
   * @deprecated OpenAPI EnableMetric is deprecated
   * 
   * @param request - EnableMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMetricResponse
   */
  async enableMetricWithOptions(request: $_model.EnableMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dropMetric)) {
      query["DropMetric"] = request.dropMetric;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableMetric",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableMetricResponse>(await this.callApi(params, req, runtime), new $_model.EnableMetricResponse({}));
  }

  /**
   * Enables a discarded metric.
   * 
   * @deprecated OpenAPI EnableMetric is deprecated
   * 
   * @param request - EnableMetricRequest
   * @returns EnableMetricResponse
   */
  // Deprecated
  async enableMetric(request: $_model.EnableMetricRequest): Promise<$_model.EnableMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableMetricWithOptions(request, runtime);
  }

  /**
   * Obtains the URL for downloading an agent.
   * 
   * @param request - GetAgentDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentDownloadUrlResponse
   */
  async getAgentDownloadUrlWithOptions(request: $_model.GetAgentDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentDownloadUrlResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentDownloadUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetAgentDownloadUrlResponse({}));
  }

  /**
   * Obtains the URL for downloading an agent.
   * 
   * @param request - GetAgentDownloadUrlRequest
   * @returns GetAgentDownloadUrlResponse
   */
  async getAgentDownloadUrl(request: $_model.GetAgentDownloadUrlRequest): Promise<$_model.GetAgentDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the URL for downloading an agent.
   * 
   * @param request - GetAgentDownloadUrlV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentDownloadUrlV2Response
   */
  async getAgentDownloadUrlV2WithOptions(request: $_model.GetAgentDownloadUrlV2Request, runtime: $dara.RuntimeOptions): Promise<$_model.GetAgentDownloadUrlV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentType)) {
      query["AgentType"] = request.agentType;
    }

    if (!$dara.isNull(request.archType)) {
      query["ArchType"] = request.archType;
    }

    if (!$dara.isNull(request.osType)) {
      query["OsType"] = request.osType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentDownloadUrlV2",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAgentDownloadUrlV2Response>(await this.callApi(params, req, runtime), new $_model.GetAgentDownloadUrlV2Response({}));
  }

  /**
   * Obtains the URL for downloading an agent.
   * 
   * @param request - GetAgentDownloadUrlV2Request
   * @returns GetAgentDownloadUrlV2Response
   */
  async getAgentDownloadUrlV2(request: $_model.GetAgentDownloadUrlV2Request): Promise<$_model.GetAgentDownloadUrlV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAgentDownloadUrlV2WithOptions(request, runtime);
  }

  /**
   * Queries alert rules.
   * 
   * @param request - GetAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertRulesResponse
   */
  async getAlertRulesWithOptions(request: $_model.GetAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertIds)) {
      query["AlertIds"] = request.alertIds;
    }

    if (!$dara.isNull(request.alertNames)) {
      query["AlertNames"] = request.alertNames;
    }

    if (!$dara.isNull(request.alertStatus)) {
      query["AlertStatus"] = request.alertStatus;
    }

    if (!$dara.isNull(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.bizRegionId)) {
      query["BizRegionId"] = request.bizRegionId;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertRulesResponse({}));
  }

  /**
   * Queries alert rules.
   * 
   * @param request - GetAlertRulesRequest
   * @returns GetAlertRulesResponse
   */
  async getAlertRules(request: $_model.GetAlertRulesRequest): Promise<$_model.GetAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertRulesWithOptions(request, runtime);
  }

  /**
   * Queries the API operations of application monitoring by page.
   * 
   * @param request - GetAppApiByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppApiByPageResponse
   */
  async getAppApiByPageWithOptions(request: $_model.GetAppApiByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppApiByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.intervalMills)) {
      query["IntervalMills"] = request.intervalMills;
    }

    if (!$dara.isNull(request.PId)) {
      query["PId"] = request.PId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppApiByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppApiByPageResponse>(await this.callApi(params, req, runtime), new $_model.GetAppApiByPageResponse({}));
  }

  /**
   * Queries the API operations of application monitoring by page.
   * 
   * @param request - GetAppApiByPageRequest
   * @returns GetAppApiByPageResponse
   */
  async getAppApiByPage(request: $_model.GetAppApiByPageRequest): Promise<$_model.GetAppApiByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppApiByPageWithOptions(request, runtime);
  }

  /**
   * Obtain the JVM configuration information of each instance of the application
   * 
   * @param request - GetAppJVMConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppJVMConfigResponse
   */
  async getAppJVMConfigWithOptions(request: $_model.GetAppJVMConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppJVMConfigResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppJVMConfig",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppJVMConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAppJVMConfigResponse({}));
  }

  /**
   * Obtain the JVM configuration information of each instance of the application
   * 
   * @param request - GetAppJVMConfigRequest
   * @returns GetAppJVMConfigResponse
   */
  async getAppJVMConfig(request: $_model.GetAppJVMConfigRequest): Promise<$_model.GetAppJVMConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppJVMConfigWithOptions(request, runtime);
  }

  /**
   * Obtains an authentication token. When you connect a Container Service for Kubernetes (ACK) cluster to Prometheus Service over the Internet, you must use a token for authentication.
   * 
   * @param request - GetAuthTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthTokenResponse
   */
  async getAuthTokenWithOptions(request: $_model.GetAuthTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthTokenResponse> {
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
      action: "GetAuthToken",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthTokenResponse({}));
  }

  /**
   * Obtains an authentication token. When you connect a Container Service for Kubernetes (ACK) cluster to Prometheus Service over the Internet, you must use a token for authentication.
   * 
   * @param request - GetAuthTokenRequest
   * @returns GetAuthTokenResponse
   */
  async getAuthToken(request: $_model.GetAuthTokenRequest): Promise<$_model.GetAuthTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthTokenWithOptions(request, runtime);
  }

  /**
   * Queries the read and write URLs of a CloudMonitor instance, such as Pushgateway and Grafana URLs.
   * 
   * @deprecated OpenAPI GetCloudClusterAllUrl is deprecated, please use ARMS::2019-08-08::GetRemoteWriteUrl instead.
   * 
   * @param request - GetCloudClusterAllUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCloudClusterAllUrlResponse
   */
  async getCloudClusterAllUrlWithOptions(request: $_model.GetCloudClusterAllUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCloudClusterAllUrlResponse> {
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
      action: "GetCloudClusterAllUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCloudClusterAllUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetCloudClusterAllUrlResponse({}));
  }

  /**
   * Queries the read and write URLs of a CloudMonitor instance, such as Pushgateway and Grafana URLs.
   * 
   * @deprecated OpenAPI GetCloudClusterAllUrl is deprecated, please use ARMS::2019-08-08::GetRemoteWriteUrl instead.
   * 
   * @param request - GetCloudClusterAllUrlRequest
   * @returns GetCloudClusterAllUrlResponse
   */
  // Deprecated
  async getCloudClusterAllUrl(request: $_model.GetCloudClusterAllUrlRequest): Promise<$_model.GetCloudClusterAllUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCloudClusterAllUrlWithOptions(request, runtime);
  }

  /**
   * Obtains all the URLs of a cluster, including remote read and write URLs, Pushgateway URLs, and Grafana URLs.
   * 
   * @deprecated OpenAPI GetClusterAllUrl is deprecated, please use ARMS::2019-08-08::GetPrometheusInstance instead.
   * 
   * @param request - GetClusterAllUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterAllUrlResponse
   */
  async getClusterAllUrlWithOptions(request: $_model.GetClusterAllUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterAllUrlResponse> {
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
      action: "GetClusterAllUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterAllUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterAllUrlResponse({}));
  }

  /**
   * Obtains all the URLs of a cluster, including remote read and write URLs, Pushgateway URLs, and Grafana URLs.
   * 
   * @deprecated OpenAPI GetClusterAllUrl is deprecated, please use ARMS::2019-08-08::GetPrometheusInstance instead.
   * 
   * @param request - GetClusterAllUrlRequest
   * @returns GetClusterAllUrlResponse
   */
  // Deprecated
  async getClusterAllUrl(request: $_model.GetClusterAllUrlRequest): Promise<$_model.GetClusterAllUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getClusterAllUrlWithOptions(request, runtime);
  }

  /**
   * Queries whether the current account has activated the commercial edition of a service.
   * 
   * @param request - GetCommercialStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommercialStatusResponse
   */
  async getCommercialStatusWithOptions(request: $_model.GetCommercialStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCommercialStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCommercialStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCommercialStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetCommercialStatusResponse({}));
  }

  /**
   * Queries whether the current account has activated the commercial edition of a service.
   * 
   * @param request - GetCommercialStatusRequest
   * @returns GetCommercialStatusResponse
   */
  async getCommercialStatus(request: $_model.GetCommercialStatusRequest): Promise<$_model.GetCommercialStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCommercialStatusWithOptions(request, runtime);
  }

  /**
   * Enables the Explore feature of Grafana.
   * 
   * @deprecated OpenAPI GetExploreUrl is deprecated
   * 
   * @param request - GetExploreUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExploreUrlResponse
   */
  async getExploreUrlWithOptions(request: $_model.GetExploreUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExploreUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
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
      action: "GetExploreUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExploreUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetExploreUrlResponse({}));
  }

  /**
   * Enables the Explore feature of Grafana.
   * 
   * @deprecated OpenAPI GetExploreUrl is deprecated
   * 
   * @param request - GetExploreUrlRequest
   * @returns GetExploreUrlResponse
   */
  // Deprecated
  async getExploreUrl(request: $_model.GetExploreUrlRequest): Promise<$_model.GetExploreUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExploreUrlWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Grafana workspace.
   * 
   * @remarks
   * Note: The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param request - GetGrafanaWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGrafanaWorkspaceResponse
   */
  async getGrafanaWorkspaceWithOptions(request: $_model.GetGrafanaWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGrafanaWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.grafanaWorkspaceId)) {
      query["GrafanaWorkspaceId"] = request.grafanaWorkspaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGrafanaWorkspace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGrafanaWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetGrafanaWorkspaceResponse({}));
  }

  /**
   * Queries the information about a Grafana workspace.
   * 
   * @remarks
   * Note: The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param request - GetGrafanaWorkspaceRequest
   * @returns GetGrafanaWorkspaceResponse
   */
  async getGrafanaWorkspace(request: $_model.GetGrafanaWorkspaceRequest): Promise<$_model.GetGrafanaWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGrafanaWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries the integration state of the dashboards and collection rules of Application Real-Time Monitoring Service (ARMS) Prometheus.
   * 
   * @deprecated OpenAPI GetIntegrationState is deprecated, please use ARMS::2019-08-08::DescribeAddonRelease instead.
   * 
   * @param request - GetIntegrationStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntegrationStateResponse
   */
  async getIntegrationStateWithOptions(request: $_model.GetIntegrationStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIntegrationStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integration)) {
      query["Integration"] = request.integration;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIntegrationState",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntegrationStateResponse>(await this.callApi(params, req, runtime), new $_model.GetIntegrationStateResponse({}));
  }

  /**
   * Queries the integration state of the dashboards and collection rules of Application Real-Time Monitoring Service (ARMS) Prometheus.
   * 
   * @deprecated OpenAPI GetIntegrationState is deprecated, please use ARMS::2019-08-08::DescribeAddonRelease instead.
   * 
   * @param request - GetIntegrationStateRequest
   * @returns GetIntegrationStateResponse
   */
  // Deprecated
  async getIntegrationState(request: $_model.GetIntegrationStateRequest): Promise<$_model.GetIntegrationStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntegrationStateWithOptions(request, runtime);
  }

  /**
   * Queries the installation status of a Prometheus agent in a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) cluster.
   * 
   * @deprecated OpenAPI GetManagedPrometheusStatus is deprecated
   * 
   * @param request - GetManagedPrometheusStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManagedPrometheusStatusResponse
   */
  async getManagedPrometheusStatusWithOptions(request: $_model.GetManagedPrometheusStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManagedPrometheusStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManagedPrometheusStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManagedPrometheusStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetManagedPrometheusStatusResponse({}));
  }

  /**
   * Queries the installation status of a Prometheus agent in a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) cluster.
   * 
   * @deprecated OpenAPI GetManagedPrometheusStatus is deprecated
   * 
   * @param request - GetManagedPrometheusStatusRequest
   * @returns GetManagedPrometheusStatusResponse
   */
  // Deprecated
  async getManagedPrometheusStatus(request: $_model.GetManagedPrometheusStatusRequest): Promise<$_model.GetManagedPrometheusStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManagedPrometheusStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of one or more traces.
   * 
   * @param request - GetMultipleTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultipleTraceResponse
   */
  async getMultipleTraceWithOptions(request: $_model.GetMultipleTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultipleTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.traceIDs)) {
      query["TraceIDs"] = request.traceIDs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultipleTrace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultipleTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetMultipleTraceResponse({}));
  }

  /**
   * Queries the details of one or more traces.
   * 
   * @param request - GetMultipleTraceRequest
   * @returns GetMultipleTraceResponse
   */
  async getMultipleTrace(request: $_model.GetMultipleTraceRequest): Promise<$_model.GetMultipleTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultipleTraceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scheduling policy.
   * 
   * @param request - GetOnCallSchedulesDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnCallSchedulesDetailResponse
   */
  async getOnCallSchedulesDetailWithOptions(request: $_model.GetOnCallSchedulesDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOnCallSchedulesDetailResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnCallSchedulesDetail",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOnCallSchedulesDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetOnCallSchedulesDetailResponse({}));
  }

  /**
   * Queries the information about a scheduling policy.
   * 
   * @param request - GetOnCallSchedulesDetailRequest
   * @returns GetOnCallSchedulesDetailResponse
   */
  async getOnCallSchedulesDetail(request: $_model.GetOnCallSchedulesDetailRequest): Promise<$_model.GetOnCallSchedulesDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOnCallSchedulesDetailWithOptions(request, runtime);
  }

  /**
   * Queries the token required for integrating Prometheus Service.
   * 
   * @remarks
   * None.
   * 
   * @param request - GetPrometheusApiTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusApiTokenResponse
   */
  async getPrometheusApiTokenWithOptions(request: $_model.GetPrometheusApiTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusApiTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusApiToken",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusApiTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusApiTokenResponse({}));
  }

  /**
   * Queries the token required for integrating Prometheus Service.
   * 
   * @remarks
   * None.
   * 
   * @param request - GetPrometheusApiTokenRequest
   * @returns GetPrometheusApiTokenResponse
   */
  async getPrometheusApiToken(request: $_model.GetPrometheusApiTokenRequest): Promise<$_model.GetPrometheusApiTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusApiTokenWithOptions(request, runtime);
  }

  /**
   * Queries the information about a global aggregation instance.
   * 
   * @param request - GetPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusGlobalViewResponse
   */
  async getPrometheusGlobalViewWithOptions(request: $_model.GetPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusGlobalViewResponse({}));
  }

  /**
   * Queries the information about a global aggregation instance.
   * 
   * @param request - GetPrometheusGlobalViewRequest
   * @returns GetPrometheusGlobalViewResponse
   */
  async getPrometheusGlobalView(request: $_model.GetPrometheusGlobalViewRequest): Promise<$_model.GetPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Prometheus instance.
   * 
   * @param request - GetPrometheusInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstanceWithOptions(request: $_model.GetPrometheusInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusInstanceResponse> {
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
      action: "GetPrometheusInstance",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusInstanceResponse({}));
  }

  /**
   * Queries the information about a Prometheus instance.
   * 
   * @param request - GetPrometheusInstanceRequest
   * @returns GetPrometheusInstanceResponse
   */
  async getPrometheusInstance(request: $_model.GetPrometheusInstanceRequest): Promise<$_model.GetPrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about an exporter that is integrated into a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI GetPrometheusIntegration is deprecated
   * 
   * @param request - GetPrometheusIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusIntegrationResponse
   */
  async getPrometheusIntegrationWithOptions(request: $_model.GetPrometheusIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrometheusIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusIntegrationResponse({}));
  }

  /**
   * Queries the information about an exporter that is integrated into a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI GetPrometheusIntegration is deprecated
   * 
   * @param request - GetPrometheusIntegrationRequest
   * @returns GetPrometheusIntegrationResponse
   */
  // Deprecated
  async getPrometheusIntegration(request: $_model.GetPrometheusIntegrationRequest): Promise<$_model.GetPrometheusIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusIntegrationWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI GetPrometheusMonitoring is deprecated
   * 
   * @param request - GetPrometheusMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPrometheusMonitoringResponse
   */
  async getPrometheusMonitoringWithOptions(request: $_model.GetPrometheusMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPrometheusMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.monitoringName)) {
      query["MonitoringName"] = request.monitoringName;
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
      action: "GetPrometheusMonitoring",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPrometheusMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.GetPrometheusMonitoringResponse({}));
  }

  /**
   * Queries the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI GetPrometheusMonitoring is deprecated
   * 
   * @param request - GetPrometheusMonitoringRequest
   * @returns GetPrometheusMonitoringResponse
   */
  // Deprecated
  async getPrometheusMonitoring(request: $_model.GetPrometheusMonitoringRequest): Promise<$_model.GetPrometheusMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPrometheusMonitoringWithOptions(request, runtime);
  }

  /**
   * Obtains the recording rule of a cluster.
   * 
   * @deprecated OpenAPI GetRecordingRule is deprecated
   * 
   * @param request - GetRecordingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRecordingRuleResponse
   */
  async getRecordingRuleWithOptions(request: $_model.GetRecordingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRecordingRuleResponse> {
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
      action: "GetRecordingRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRecordingRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRecordingRuleResponse({}));
  }

  /**
   * Obtains the recording rule of a cluster.
   * 
   * @deprecated OpenAPI GetRecordingRule is deprecated
   * 
   * @param request - GetRecordingRuleRequest
   * @returns GetRecordingRuleResponse
   */
  // Deprecated
  async getRecordingRule(request: $_model.GetRecordingRuleRequest): Promise<$_model.GetRecordingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRecordingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the objects of a Browser Monitoring application by process identifier (PID).
   * 
   * @param request - GetRetcodeAppByPidRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRetcodeAppByPidResponse
   */
  async getRetcodeAppByPidWithOptions(request: $_model.GetRetcodeAppByPidRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRetcodeAppByPidResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRetcodeAppByPid",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRetcodeAppByPidResponse>(await this.callApi(params, req, runtime), new $_model.GetRetcodeAppByPidResponse({}));
  }

  /**
   * Queries the objects of a Browser Monitoring application by process identifier (PID).
   * 
   * @param request - GetRetcodeAppByPidRequest
   * @returns GetRetcodeAppByPidResponse
   */
  async getRetcodeAppByPid(request: $_model.GetRetcodeAppByPidRequest): Promise<$_model.GetRetcodeAppByPidResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRetcodeAppByPidWithOptions(request, runtime);
  }

  /**
   * Queries the Browser Monitoring data based on a query statement of Log Service.
   * 
   * @param request - GetRetcodeDataByQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRetcodeDataByQueryResponse
   */
  async getRetcodeDataByQueryWithOptions(request: $_model.GetRetcodeDataByQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRetcodeDataByQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRetcodeDataByQuery",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRetcodeDataByQueryResponse>(await this.callApi(params, req, runtime), new $_model.GetRetcodeDataByQueryResponse({}));
  }

  /**
   * Queries the Browser Monitoring data based on a query statement of Log Service.
   * 
   * @param request - GetRetcodeDataByQueryRequest
   * @returns GetRetcodeDataByQueryResponse
   */
  async getRetcodeDataByQuery(request: $_model.GetRetcodeDataByQueryRequest): Promise<$_model.GetRetcodeDataByQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRetcodeDataByQueryWithOptions(request, runtime);
  }

  /**
   * Queries the Log Service project and Logstore that correspond to an application of browser monitoring.
   * 
   * @param request - GetRetcodeLogstoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRetcodeLogstoreResponse
   */
  async getRetcodeLogstoreWithOptions(request: $_model.GetRetcodeLogstoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRetcodeLogstoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRetcodeLogstore",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRetcodeLogstoreResponse>(await this.callApi(params, req, runtime), new $_model.GetRetcodeLogstoreResponse({}));
  }

  /**
   * Queries the Log Service project and Logstore that correspond to an application of browser monitoring.
   * 
   * @param request - GetRetcodeLogstoreRequest
   * @returns GetRetcodeLogstoreResponse
   */
  async getRetcodeLogstore(request: $_model.GetRetcodeLogstoreRequest): Promise<$_model.GetRetcodeLogstoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRetcodeLogstoreWithOptions(request, runtime);
  }

  /**
   * Queries the share URL of an application monitored by Browser Monitoring.
   * 
   * @param request - GetRetcodeShareUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRetcodeShareUrlResponse
   */
  async getRetcodeShareUrlWithOptions(request: $_model.GetRetcodeShareUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRetcodeShareUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRetcodeShareUrl",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRetcodeShareUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetRetcodeShareUrlResponse({}));
  }

  /**
   * Queries the share URL of an application monitored by Browser Monitoring.
   * 
   * @param request - GetRetcodeShareUrlRequest
   * @returns GetRetcodeShareUrlResponse
   */
  async getRetcodeShareUrl(request: $_model.GetRetcodeShareUrlRequest): Promise<$_model.GetRetcodeShareUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRetcodeShareUrlWithOptions(request, runtime);
  }

  /**
   * Obtains the information about a single application in Browser Monitoring.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumAppInfoResponse
   */
  async getRumAppInfoWithOptions(request: $_model.GetRumAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGroup)) {
      query["AppGroup"] = request.appGroup;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumAppInfo",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetRumAppInfoResponse({}));
  }

  /**
   * Obtains the information about a single application in Browser Monitoring.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumAppInfoRequest
   * @returns GetRumAppInfoResponse
   */
  async getRumAppInfo(request: $_model.GetRumAppInfoRequest): Promise<$_model.GetRumAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumAppInfoWithOptions(request, runtime);
  }

  /**
   * Queries a list of Real User Monitoring (RUM) applications.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param tmpReq - GetRumAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumAppsResponse
   */
  async getRumAppsWithOptions(tmpReq: $_model.GetRumAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumAppsResponse> {
    tmpReq.validate();
    let request = new $_model.GetRumAppsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appGroup)) {
      query["AppGroup"] = request.appGroup;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumApps",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumAppsResponse>(await this.callApi(params, req, runtime), new $_model.GetRumAppsResponse({}));
  }

  /**
   * Queries a list of Real User Monitoring (RUM) applications.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumAppsRequest
   * @returns GetRumAppsResponse
   */
  async getRumApps(request: $_model.GetRumAppsRequest): Promise<$_model.GetRumAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumAppsWithOptions(request, runtime);
  }

  /**
   * Queries Real User Monitoring (RUM) data by page.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumDataForPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumDataForPageResponse
   */
  async getRumDataForPageWithOptions(request: $_model.GetRumDataForPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumDataForPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGroup)) {
      query["AppGroup"] = request.appGroup;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumDataForPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumDataForPageResponse>(await this.callApi(params, req, runtime), new $_model.GetRumDataForPageResponse({}));
  }

  /**
   * Queries Real User Monitoring (RUM) data by page.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumDataForPageRequest
   * @returns GetRumDataForPageResponse
   */
  async getRumDataForPage(request: $_model.GetRumDataForPageRequest): Promise<$_model.GetRumDataForPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumDataForPageWithOptions(request, runtime);
  }

  /**
   * Queries the exception stack information of a Real User Monitoring (RUM) application.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumExceptionStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumExceptionStackResponse
   */
  async getRumExceptionStackWithOptions(request: $_model.GetRumExceptionStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumExceptionStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exceptionBinaryImages)) {
      query["ExceptionBinaryImages"] = request.exceptionBinaryImages;
    }

    if (!$dara.isNull(request.exceptionStack)) {
      query["ExceptionStack"] = request.exceptionStack;
    }

    if (!$dara.isNull(request.exceptionThreadId)) {
      query["ExceptionThreadId"] = request.exceptionThreadId;
    }

    if (!$dara.isNull(request.extraInfo)) {
      query["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourcemapType)) {
      query["SourcemapType"] = request.sourcemapType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumExceptionStack",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumExceptionStackResponse>(await this.callApi(params, req, runtime), new $_model.GetRumExceptionStackResponse({}));
  }

  /**
   * Queries the exception stack information of a Real User Monitoring (RUM) application.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumExceptionStackRequest
   * @returns GetRumExceptionStackResponse
   */
  async getRumExceptionStack(request: $_model.GetRumExceptionStackRequest): Promise<$_model.GetRumExceptionStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumExceptionStackWithOptions(request, runtime);
  }

  /**
   * Queries the observability capacity unit (OCU) usage data of Real User Monitoring (RUM).
   * 
   * @remarks
   * You can query the usage data for the current day at any time. You can query the usage data for the previous day only after 8:00 today.
   * 
   * @param tmpReq - GetRumOcuStatisticDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumOcuStatisticDataResponse
   */
  async getRumOcuStatisticDataWithOptions(tmpReq: $_model.GetRumOcuStatisticDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumOcuStatisticDataResponse> {
    tmpReq.validate();
    let request = new $_model.GetRumOcuStatisticDataShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    if (!$dara.isNull(tmpReq.group)) {
      request.groupShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.group, "Group", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumOcuStatisticData",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumOcuStatisticDataResponse>(await this.callApi(params, req, runtime), new $_model.GetRumOcuStatisticDataResponse({}));
  }

  /**
   * Queries the observability capacity unit (OCU) usage data of Real User Monitoring (RUM).
   * 
   * @remarks
   * You can query the usage data for the current day at any time. You can query the usage data for the previous day only after 8:00 today.
   * 
   * @param request - GetRumOcuStatisticDataRequest
   * @returns GetRumOcuStatisticDataResponse
   */
  async getRumOcuStatisticData(request: $_model.GetRumOcuStatisticDataRequest): Promise<$_model.GetRumOcuStatisticDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumOcuStatisticDataWithOptions(request, runtime);
  }

  /**
   * Queries Real User Monitoring (RUM)-related files, such as symbol tables and SourceMap.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumUploadFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRumUploadFilesResponse
   */
  async getRumUploadFilesWithOptions(request: $_model.GetRumUploadFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRumUploadFilesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRumUploadFiles",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRumUploadFilesResponse>(await this.callApi(params, req, runtime), new $_model.GetRumUploadFilesResponse({}));
  }

  /**
   * Queries Real User Monitoring (RUM)-related files, such as symbol tables and SourceMap.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - GetRumUploadFilesRequest
   * @returns GetRumUploadFilesResponse
   */
  async getRumUploadFiles(request: $_model.GetRumUploadFilesRequest): Promise<$_model.GetRumUploadFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRumUploadFilesWithOptions(request, runtime);
  }

  /**
   * Obtains the details of the SourceMap file uploaded in Browser Monitoring.
   * 
   * @param request - GetSourceMapInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSourceMapInfoResponse
   */
  async getSourceMapInfoWithOptions(request: $_model.GetSourceMapInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSourceMapInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ascendingSequence)) {
      query["AscendingSequence"] = request.ascendingSequence;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.ID)) {
      query["ID"] = request.ID;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.orderField)) {
      query["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSourceMapInfo",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSourceMapInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSourceMapInfoResponse({}));
  }

  /**
   * Obtains the details of the SourceMap file uploaded in Browser Monitoring.
   * 
   * @param request - GetSourceMapInfoRequest
   * @returns GetSourceMapInfoResponse
   */
  async getSourceMapInfo(request: $_model.GetSourceMapInfoRequest): Promise<$_model.GetSourceMapInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSourceMapInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information of a method stack.
   * 
   * @param request - GetStackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResponse
   */
  async getStackWithOptions(request: $_model.GetStackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rpcID)) {
      query["RpcID"] = request.rpcID;
    }

    if (!$dara.isNull(request.spanID)) {
      query["SpanID"] = request.spanID;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStack",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackResponse>(await this.callApi(params, req, runtime), new $_model.GetStackResponse({}));
  }

  /**
   * Queries the information of a method stack.
   * 
   * @param request - GetStackRequest
   * @returns GetStackResponse
   */
  async getStack(request: $_model.GetStackRequest): Promise<$_model.GetStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStackWithOptions(request, runtime);
  }

  /**
   * Obtains detection points.
   * 
   * @param tmpReq - GetSyntheticMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyntheticMonitorsResponse
   */
  async getSyntheticMonitorsWithOptions(tmpReq: $_model.GetSyntheticMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSyntheticMonitorsResponse> {
    tmpReq.validate();
    let request = new $_model.GetSyntheticMonitorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyntheticMonitors",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSyntheticMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.GetSyntheticMonitorsResponse({}));
  }

  /**
   * Obtains detection points.
   * 
   * @param request - GetSyntheticMonitorsRequest
   * @returns GetSyntheticMonitorsResponse
   */
  async getSyntheticMonitors(request: $_model.GetSyntheticMonitorsRequest): Promise<$_model.GetSyntheticMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyntheticMonitorsWithOptions(request, runtime);
  }

  /**
   * Queries the details of a scheduled synthetic monitoring task.
   * 
   * @param request - GetSyntheticTaskDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyntheticTaskDetailResponse
   */
  async getSyntheticTaskDetailWithOptions(request: $_model.GetSyntheticTaskDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSyntheticTaskDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyntheticTaskDetail",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSyntheticTaskDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetSyntheticTaskDetailResponse({}));
  }

  /**
   * Queries the details of a scheduled synthetic monitoring task.
   * 
   * @param request - GetSyntheticTaskDetailRequest
   * @returns GetSyntheticTaskDetailResponse
   */
  async getSyntheticTaskDetail(request: $_model.GetSyntheticTaskDetailRequest): Promise<$_model.GetSyntheticTaskDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyntheticTaskDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of scheduled synthetic monitoring tasks.
   * 
   * @param request - GetSyntheticTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyntheticTaskListResponse
   */
  async getSyntheticTaskListWithOptions(request: $_model.GetSyntheticTaskListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSyntheticTaskListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStatus)) {
      query["TaskStatus"] = request.taskStatus;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyntheticTaskList",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSyntheticTaskListResponse>(await this.callApi(params, req, runtime), new $_model.GetSyntheticTaskListResponse({}));
  }

  /**
   * Queries a list of scheduled synthetic monitoring tasks.
   * 
   * @param request - GetSyntheticTaskListRequest
   * @returns GetSyntheticTaskListResponse
   */
  async getSyntheticTaskList(request: $_model.GetSyntheticTaskListRequest): Promise<$_model.GetSyntheticTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyntheticTaskListWithOptions(request, runtime);
  }

  /**
   * Obtains the information about synthetic monitoring points.
   * 
   * @param request - GetSyntheticTaskMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSyntheticTaskMonitorsResponse
   */
  async getSyntheticTaskMonitorsWithOptions(request: $_model.GetSyntheticTaskMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSyntheticTaskMonitorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSyntheticTaskMonitors",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSyntheticTaskMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.GetSyntheticTaskMonitorsResponse({}));
  }

  /**
   * Obtains the information about synthetic monitoring points.
   * 
   * @param request - GetSyntheticTaskMonitorsRequest
   * @returns GetSyntheticTaskMonitorsResponse
   */
  async getSyntheticTaskMonitors(request: $_model.GetSyntheticTaskMonitorsRequest): Promise<$_model.GetSyntheticTaskMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSyntheticTaskMonitorsWithOptions(request, runtime);
  }

  /**
   * Obtains the details of a synthetic monitoring task.
   * 
   * @param request - GetTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTimingSyntheticTaskResponse
   */
  async getTimingSyntheticTaskWithOptions(request: $_model.GetTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTimingSyntheticTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTimingSyntheticTaskResponse({}));
  }

  /**
   * Obtains the details of a synthetic monitoring task.
   * 
   * @param request - GetTimingSyntheticTaskRequest
   * @returns GetTimingSyntheticTaskResponse
   */
  async getTimingSyntheticTask(request: $_model.GetTimingSyntheticTaskRequest): Promise<$_model.GetTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of a trace.
   * 
   * @remarks
   * > You must use Application Real-Time Monitoring Service (ARMS) SDK for Java V2.7.24.
   * 
   * @param request - GetTraceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceResponse
   */
  async getTraceWithOptions(request: $_model.GetTraceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.traceID)) {
      query["TraceID"] = request.traceID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceResponse({}));
  }

  /**
   * Queries the details of a trace.
   * 
   * @remarks
   * > You must use Application Real-Time Monitoring Service (ARMS) SDK for Java V2.7.24.
   * 
   * @param request - GetTraceRequest
   * @returns GetTraceResponse
   */
  async getTrace(request: $_model.GetTraceRequest): Promise<$_model.GetTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTraceWithOptions(request, runtime);
  }

  /**
   * Queries the details of an application monitoring task.
   * 
   * @param request - GetTraceAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceAppResponse
   */
  async getTraceAppWithOptions(request: $_model.GetTraceAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
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
      action: "GetTraceApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceAppResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceAppResponse({}));
  }

  /**
   * Queries the details of an application monitoring task.
   * 
   * @param request - GetTraceAppRequest
   * @returns GetTraceAppResponse
   */
  async getTraceApp(request: $_model.GetTraceAppRequest): Promise<$_model.GetTraceAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTraceAppWithOptions(request, runtime);
  }

  /**
   * Queries all custom settings of an application monitored by Application Monitoring, such as trace sampling settings and agent switches. This operation is applicable only to applications that are monitored by Application Monitoring. It is not applicable to applications that are monitored by Managed Service for OpenTelemetry.
   * 
   * @param request - GetTraceAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTraceAppConfigResponse
   */
  async getTraceAppConfigWithOptions(request: $_model.GetTraceAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTraceAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTraceAppConfig",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTraceAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetTraceAppConfigResponse({}));
  }

  /**
   * Queries all custom settings of an application monitored by Application Monitoring, such as trace sampling settings and agent switches. This operation is applicable only to applications that are monitored by Application Monitoring. It is not applicable to applications that are monitored by Managed Service for OpenTelemetry.
   * 
   * @param request - GetTraceAppConfigRequest
   * @returns GetTraceAppConfigResponse
   */
  async getTraceAppConfig(request: $_model.GetTraceAppConfigRequest): Promise<$_model.GetTraceAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTraceAppConfigWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule based on an alert template.
   * 
   * @remarks
   * >  You can call the **ImportAppAlertRules** operation to import only the alert rules that are generated by Application Real-Time Monitoring Service (ARMS) for application monitoring and browser monitoring. This operation cannot be used to import custom alert rules, alert rules for Prometheus monitoring, or default emergency alert rules.
   * 
   * @param request - ImportAppAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportAppAlertRulesResponse
   */
  async importAppAlertRulesWithOptions(request: $_model.ImportAppAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportAppAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!$dara.isNull(request.pids)) {
      query["Pids"] = request.pids;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    if (!$dara.isNull(request.templateAlertId)) {
      query["TemplateAlertId"] = request.templateAlertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportAppAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportAppAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ImportAppAlertRulesResponse({}));
  }

  /**
   * Creates an alert rule based on an alert template.
   * 
   * @remarks
   * >  You can call the **ImportAppAlertRules** operation to import only the alert rules that are generated by Application Real-Time Monitoring Service (ARMS) for application monitoring and browser monitoring. This operation cannot be used to import custom alert rules, alert rules for Prometheus monitoring, or default emergency alert rules.
   * 
   * @param request - ImportAppAlertRulesRequest
   * @returns ImportAppAlertRulesResponse
   */
  async importAppAlertRules(request: $_model.ImportAppAlertRulesRequest): Promise<$_model.ImportAppAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importAppAlertRulesWithOptions(request, runtime);
  }

  /**
   * Initializes an environment instance.
   * 
   * @param request - InitEnvironmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitEnvironmentResponse
   */
  async initEnvironmentWithOptions(request: $_model.InitEnvironmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitEnvironmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.createAuthToken)) {
      query["CreateAuthToken"] = request.createAuthToken;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.managedType)) {
      query["ManagedType"] = request.managedType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitEnvironment",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.InitEnvironmentResponse({}));
  }

  /**
   * Initializes an environment instance.
   * 
   * @param request - InitEnvironmentRequest
   * @returns InitEnvironmentResponse
   */
  async initEnvironment(request: $_model.InitEnvironmentRequest): Promise<$_model.InitEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initEnvironmentWithOptions(request, runtime);
  }

  /**
   * Installs an add-on.
   * 
   * @param request - InstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAddonResponse
   */
  async installAddonWithOptions(request: $_model.InstallAddonRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAddonResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["ReleaseName"] = request.releaseName;
    }

    if (!$dara.isNull(request.values)) {
      query["Values"] = request.values;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAddon",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAddonResponse>(await this.callApi(params, req, runtime), new $_model.InstallAddonResponse({}));
  }

  /**
   * Installs an add-on.
   * 
   * @param request - InstallAddonRequest
   * @returns InstallAddonResponse
   */
  async installAddon(request: $_model.InstallAddonRequest): Promise<$_model.InstallAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installAddonWithOptions(request, runtime);
  }

  /**
   * Installs the cms-exporter collector.
   * 
   * @deprecated OpenAPI InstallCmsExporter is deprecated, please use ARMS::2019-08-08::InstallAddon instead.
   * 
   * @param request - InstallCmsExporterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallCmsExporterResponse
   */
  async installCmsExporterWithOptions(request: $_model.InstallCmsExporterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallCmsExporterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.cmsArgs)) {
      query["CmsArgs"] = request.cmsArgs;
    }

    if (!$dara.isNull(request.directArgs)) {
      query["DirectArgs"] = request.directArgs;
    }

    if (!$dara.isNull(request.enableTag)) {
      query["EnableTag"] = request.enableTag;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallCmsExporter",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallCmsExporterResponse>(await this.callApi(params, req, runtime), new $_model.InstallCmsExporterResponse({}));
  }

  /**
   * Installs the cms-exporter collector.
   * 
   * @deprecated OpenAPI InstallCmsExporter is deprecated, please use ARMS::2019-08-08::InstallAddon instead.
   * 
   * @param request - InstallCmsExporterRequest
   * @returns InstallCmsExporterResponse
   */
  // Deprecated
  async installCmsExporter(request: $_model.InstallCmsExporterRequest): Promise<$_model.InstallCmsExporterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installCmsExporterWithOptions(request, runtime);
  }

  /**
   * Installs a feature.
   * 
   * @param request - InstallEnvironmentFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallEnvironmentFeatureResponse
   */
  async installEnvironmentFeatureWithOptions(request: $_model.InstallEnvironmentFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallEnvironmentFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.featureVersion)) {
      query["FeatureVersion"] = request.featureVersion;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallEnvironmentFeature",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallEnvironmentFeatureResponse>(await this.callApi(params, req, runtime), new $_model.InstallEnvironmentFeatureResponse({}));
  }

  /**
   * Installs a feature.
   * 
   * @param request - InstallEnvironmentFeatureRequest
   * @returns InstallEnvironmentFeatureResponse
   */
  async installEnvironmentFeature(request: $_model.InstallEnvironmentFeatureRequest): Promise<$_model.InstallEnvironmentFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installEnvironmentFeatureWithOptions(request, runtime);
  }

  /**
   * Installs a Prometheus agent for serverless Kubernetes (ASK) clusters or Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * You can call this operation only if the following conditions are met: The resources that you want to monitor are ASK clusters or ECS clusters. No Prometheus agents are installed in the ASK or ECS clusters. Take note that Prometheus agents can be installed only on the cloud service side, not in user clusters.
   * 
   * @deprecated OpenAPI InstallManagedPrometheus is deprecated
   * 
   * @param request - InstallManagedPrometheusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallManagedPrometheusResponse
   */
  async installManagedPrometheusWithOptions(request: $_model.InstallManagedPrometheusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InstallManagedPrometheusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.grafanaInstanceId)) {
      query["GrafanaInstanceId"] = request.grafanaInstanceId;
    }

    if (!$dara.isNull(request.kubeConfig)) {
      query["KubeConfig"] = request.kubeConfig;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vcExtraInfo)) {
      query["VcExtraInfo"] = request.vcExtraInfo;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallManagedPrometheus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallManagedPrometheusResponse>(await this.callApi(params, req, runtime), new $_model.InstallManagedPrometheusResponse({}));
  }

  /**
   * Installs a Prometheus agent for serverless Kubernetes (ASK) clusters or Elastic Compute Service (ECS) clusters.
   * 
   * @remarks
   * You can call this operation only if the following conditions are met: The resources that you want to monitor are ASK clusters or ECS clusters. No Prometheus agents are installed in the ASK or ECS clusters. Take note that Prometheus agents can be installed only on the cloud service side, not in user clusters.
   * 
   * @deprecated OpenAPI InstallManagedPrometheus is deprecated
   * 
   * @param request - InstallManagedPrometheusRequest
   * @returns InstallManagedPrometheusResponse
   */
  // Deprecated
  async installManagedPrometheus(request: $_model.InstallManagedPrometheusRequest): Promise<$_model.InstallManagedPrometheusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.installManagedPrometheusWithOptions(request, runtime);
  }

  /**
   * Queries the alerts that have been triggered.
   * 
   * @param request - ListActivatedAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActivatedAlertsResponse
   */
  async listActivatedAlertsWithOptions(request: $_model.ListActivatedAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActivatedAlertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListActivatedAlerts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActivatedAlertsResponse>(await this.callApi(params, req, runtime), new $_model.ListActivatedAlertsResponse({}));
  }

  /**
   * Queries the alerts that have been triggered.
   * 
   * @param request - ListActivatedAlertsRequest
   * @returns ListActivatedAlertsResponse
   */
  async listActivatedAlerts(request: $_model.ListActivatedAlertsRequest): Promise<$_model.ListActivatedAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActivatedAlertsWithOptions(request, runtime);
  }

  /**
   * Queries the add-ons installed in an environment.
   * 
   * @param request - ListAddonReleasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleasesWithOptions(request: $_model.ListAddonReleasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonReleasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddonReleases",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonReleasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonReleasesResponse({}));
  }

  /**
   * Queries the add-ons installed in an environment.
   * 
   * @param request - ListAddonReleasesRequest
   * @returns ListAddonReleasesResponse
   */
  async listAddonReleases(request: $_model.ListAddonReleasesRequest): Promise<$_model.ListAddonReleasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonReleasesWithOptions(request, runtime);
  }

  /**
   * List of access center products.
   * 
   * @param request - ListAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(request: $_model.ListAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAddonsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.regexp)) {
      query["Regexp"] = request.regexp;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAddons",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListAddonsResponse({}));
  }

  /**
   * List of access center products.
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: $_model.ListAddonsRequest): Promise<$_model.ListAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAddonsWithOptions(request, runtime);
  }

  /**
   * Queries historical alert events.
   * 
   * @param request - ListAlertEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertEventsResponse
   */
  async listAlertEventsWithOptions(request: $_model.ListAlertEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.matchingConditions)) {
      query["MatchingConditions"] = request.matchingConditions;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.showNotificationPolicies)) {
      query["ShowNotificationPolicies"] = request.showNotificationPolicies;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertEvents",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertEventsResponse({}));
  }

  /**
   * Queries historical alert events.
   * 
   * @param request - ListAlertEventsRequest
   * @returns ListAlertEventsResponse
   */
  async listAlertEvents(request: $_model.ListAlertEventsRequest): Promise<$_model.ListAlertEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertEventsWithOptions(request, runtime);
  }

  /**
   * Queries the alert sending history.
   * 
   * @param request - ListAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertsResponse
   */
  async listAlertsWithOptions(request: $_model.ListAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.showActivities)) {
      query["ShowActivities"] = request.showActivities;
    }

    if (!$dara.isNull(request.showEvents)) {
      query["ShowEvents"] = request.showEvents;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlerts",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertsResponse({}));
  }

  /**
   * Queries the alert sending history.
   * 
   * @param request - ListAlertsRequest
   * @returns ListAlertsResponse
   */
  async listAlerts(request: $_model.ListAlertsRequest): Promise<$_model.ListAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertsWithOptions(request, runtime);
  }

  /**
   * Queries all Grafana dashboards in a specified region.
   * 
   * @deprecated OpenAPI ListClusterFromGrafana is deprecated
   * 
   * @param request - ListClusterFromGrafanaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterFromGrafanaResponse
   */
  async listClusterFromGrafanaWithOptions(request: $_model.ListClusterFromGrafanaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterFromGrafanaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterFromGrafana",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterFromGrafanaResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterFromGrafanaResponse({}));
  }

  /**
   * Queries all Grafana dashboards in a specified region.
   * 
   * @deprecated OpenAPI ListClusterFromGrafana is deprecated
   * 
   * @param request - ListClusterFromGrafanaRequest
   * @returns ListClusterFromGrafanaResponse
   */
  // Deprecated
  async listClusterFromGrafana(request: $_model.ListClusterFromGrafanaRequest): Promise<$_model.ListClusterFromGrafanaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterFromGrafanaWithOptions(request, runtime);
  }

  /**
   * Queries the collection of cloud services.
   * 
   * @deprecated OpenAPI ListCmsInstances is deprecated
   * 
   * @param request - ListCmsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCmsInstancesResponse
   */
  async listCmsInstancesWithOptions(request: $_model.ListCmsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCmsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.typeFilter)) {
      query["TypeFilter"] = request.typeFilter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCmsInstances",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCmsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListCmsInstancesResponse({}));
  }

  /**
   * Queries the collection of cloud services.
   * 
   * @deprecated OpenAPI ListCmsInstances is deprecated
   * 
   * @param request - ListCmsInstancesRequest
   * @returns ListCmsInstancesResponse
   */
  // Deprecated
  async listCmsInstances(request: $_model.ListCmsInstancesRequest): Promise<$_model.ListCmsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCmsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the Grafana dashboards of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * None.
   * 
   * @param request - ListDashboardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardsResponse
   */
  async listDashboardsWithOptions(request: $_model.ListDashboardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDashboardsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.dashboardName)) {
      query["DashboardName"] = request.dashboardName;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDashboards",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListDashboardsResponse({}));
  }

  /**
   * Queries the Grafana dashboards of a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * None.
   * 
   * @param request - ListDashboardsRequest
   * @returns ListDashboardsResponse
   */
  async listDashboards(request: $_model.ListDashboardsRequest): Promise<$_model.ListDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDashboardsWithOptions(request, runtime);
  }

  /**
   * Uses Loki data sources and other data sources to create a Grafana dashboard in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI ListDashboardsByName is deprecated
   * 
   * @param request - ListDashboardsByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDashboardsByNameResponse
   */
  async listDashboardsByNameWithOptions(request: $_model.ListDashboardsByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDashboardsByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.dashBoardName)) {
      query["DashBoardName"] = request.dashBoardName;
    }

    if (!$dara.isNull(request.dashBoardVersion)) {
      query["DashBoardVersion"] = request.dashBoardVersion;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.onlyQuery)) {
      query["OnlyQuery"] = request.onlyQuery;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDashboardsByName",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDashboardsByNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDashboardsByNameResponse({}));
  }

  /**
   * Uses Loki data sources and other data sources to create a Grafana dashboard in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI ListDashboardsByName is deprecated
   * 
   * @param request - ListDashboardsByNameRequest
   * @returns ListDashboardsByNameResponse
   */
  // Deprecated
  async listDashboardsByName(request: $_model.ListDashboardsByNameRequest): Promise<$_model.ListDashboardsByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDashboardsByNameWithOptions(request, runtime);
  }

  /**
   * Queries notification policies.
   * 
   * @remarks
   * The current API operation is no longer maintained. To query the notification policy information, call the ListNotificationPolicies operation instead.
   * 
   * @param request - ListDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDispatchRuleResponse
   */
  async listDispatchRuleWithOptions(request: $_model.ListDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.system)) {
      query["System"] = request.system;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListDispatchRuleResponse({}));
  }

  /**
   * Queries notification policies.
   * 
   * @remarks
   * The current API operation is no longer maintained. To query the notification policy information, call the ListNotificationPolicies operation instead.
   * 
   * @param request - ListDispatchRuleRequest
   * @returns ListDispatchRuleResponse
   */
  async listDispatchRule(request: $_model.ListDispatchRuleRequest): Promise<$_model.ListDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDispatchRuleWithOptions(request, runtime);
  }

  /**
   * Queries the custom jobs of an environment.
   * 
   * @param request - ListEnvCustomJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvCustomJobsResponse
   */
  async listEnvCustomJobsWithOptions(request: $_model.ListEnvCustomJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvCustomJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptYaml)) {
      query["EncryptYaml"] = request.encryptYaml;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvCustomJobs",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvCustomJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvCustomJobsResponse({}));
  }

  /**
   * Queries the custom jobs of an environment.
   * 
   * @param request - ListEnvCustomJobsRequest
   * @returns ListEnvCustomJobsResponse
   */
  async listEnvCustomJobs(request: $_model.ListEnvCustomJobsRequest): Promise<$_model.ListEnvCustomJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvCustomJobsWithOptions(request, runtime);
  }

  /**
   * Queries the PodMonitors of an environment.
   * 
   * @param request - ListEnvPodMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvPodMonitorsResponse
   */
  async listEnvPodMonitorsWithOptions(request: $_model.ListEnvPodMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvPodMonitorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvPodMonitors",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvPodMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvPodMonitorsResponse({}));
  }

  /**
   * Queries the PodMonitors of an environment.
   * 
   * @param request - ListEnvPodMonitorsRequest
   * @returns ListEnvPodMonitorsResponse
   */
  async listEnvPodMonitors(request: $_model.ListEnvPodMonitorsRequest): Promise<$_model.ListEnvPodMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvPodMonitorsWithOptions(request, runtime);
  }

  /**
   * Queries the ServiceMonitors of an environment.
   * 
   * @param request - ListEnvServiceMonitorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvServiceMonitorsResponse
   */
  async listEnvServiceMonitorsWithOptions(request: $_model.ListEnvServiceMonitorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvServiceMonitorsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvServiceMonitors",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvServiceMonitorsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvServiceMonitorsResponse({}));
  }

  /**
   * Queries the ServiceMonitors of an environment.
   * 
   * @param request - ListEnvServiceMonitorsRequest
   * @returns ListEnvServiceMonitorsResponse
   */
  async listEnvServiceMonitors(request: $_model.ListEnvServiceMonitorsRequest): Promise<$_model.ListEnvServiceMonitorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvServiceMonitorsWithOptions(request, runtime);
  }

  /**
   * 环境addon列表
   * 
   * @param request - ListEnvironmentAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentAddonsResponse
   */
  async listEnvironmentAddonsWithOptions(request: $_model.ListEnvironmentAddonsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentAddonsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentAddons",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentAddonsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentAddonsResponse({}));
  }

  /**
   * 环境addon列表
   * 
   * @param request - ListEnvironmentAddonsRequest
   * @returns ListEnvironmentAddonsResponse
   */
  async listEnvironmentAddons(request: $_model.ListEnvironmentAddonsRequest): Promise<$_model.ListEnvironmentAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentAddonsWithOptions(request, runtime);
  }

  /**
   * Queries the alert groups of an environment instance.
   * 
   * @param request - ListEnvironmentAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentAlertRulesResponse
   */
  async listEnvironmentAlertRulesWithOptions(request: $_model.ListEnvironmentAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentAlertRulesResponse({}));
  }

  /**
   * Queries the alert groups of an environment instance.
   * 
   * @param request - ListEnvironmentAlertRulesRequest
   * @returns ListEnvironmentAlertRulesResponse
   */
  async listEnvironmentAlertRules(request: $_model.ListEnvironmentAlertRulesRequest): Promise<$_model.ListEnvironmentAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentAlertRulesWithOptions(request, runtime);
  }

  /**
   * Queries information about a dashboard of an environment instance.
   * 
   * @param request - ListEnvironmentDashboardsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentDashboardsResponse
   */
  async listEnvironmentDashboardsWithOptions(request: $_model.ListEnvironmentDashboardsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentDashboardsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentDashboards",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentDashboardsResponse({}));
  }

  /**
   * Queries information about a dashboard of an environment instance.
   * 
   * @param request - ListEnvironmentDashboardsRequest
   * @returns ListEnvironmentDashboardsResponse
   */
  async listEnvironmentDashboards(request: $_model.ListEnvironmentDashboardsRequest): Promise<$_model.ListEnvironmentDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentDashboardsWithOptions(request, runtime);
  }

  /**
   * Queries the features in an environment.
   * 
   * @param request - ListEnvironmentFeaturesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentFeaturesResponse
   */
  async listEnvironmentFeaturesWithOptions(request: $_model.ListEnvironmentFeaturesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentFeaturesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentFeatures",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentFeaturesResponse({}));
  }

  /**
   * Queries the features in an environment.
   * 
   * @param request - ListEnvironmentFeaturesRequest
   * @returns ListEnvironmentFeaturesResponse
   */
  async listEnvironmentFeatures(request: $_model.ListEnvironmentFeaturesRequest): Promise<$_model.ListEnvironmentFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentFeaturesWithOptions(request, runtime);
  }

  /**
   * Queries the Kubernetes resources of an environment.
   * 
   * @param tmpReq - ListEnvironmentKubeResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentKubeResourcesResponse
   */
  async listEnvironmentKubeResourcesWithOptions(tmpReq: $_model.ListEnvironmentKubeResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentKubeResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListEnvironmentKubeResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelectors)) {
      request.labelSelectorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelectors, "LabelSelectors", "json");
    }

    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.kind)) {
      query["Kind"] = request.kind;
    }

    if (!$dara.isNull(request.labelSelectorsShrink)) {
      query["LabelSelectors"] = request.labelSelectorsShrink;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentKubeResources",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentKubeResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentKubeResourcesResponse({}));
  }

  /**
   * Queries the Kubernetes resources of an environment.
   * 
   * @param request - ListEnvironmentKubeResourcesRequest
   * @returns ListEnvironmentKubeResourcesResponse
   */
  async listEnvironmentKubeResources(request: $_model.ListEnvironmentKubeResourcesRequest): Promise<$_model.ListEnvironmentKubeResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentKubeResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the targets of an environment.
   * 
   * @param request - ListEnvironmentMetricTargetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentMetricTargetsResponse
   */
  async listEnvironmentMetricTargetsWithOptions(request: $_model.ListEnvironmentMetricTargetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentMetricTargetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.jobName)) {
      query["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironmentMetricTargets",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentMetricTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentMetricTargetsResponse({}));
  }

  /**
   * Queries the targets of an environment.
   * 
   * @param request - ListEnvironmentMetricTargetsRequest
   * @returns ListEnvironmentMetricTargetsResponse
   */
  async listEnvironmentMetricTargets(request: $_model.ListEnvironmentMetricTargetsRequest): Promise<$_model.ListEnvironmentMetricTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentMetricTargetsWithOptions(request, runtime);
  }

  /**
   * Queries environments.
   * 
   * @param tmpReq - ListEnvironmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(tmpReq: $_model.ListEnvironmentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListEnvironmentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!$dara.isNull(request.bindResourceId)) {
      query["BindResourceId"] = request.bindResourceId;
    }

    if (!$dara.isNull(request.environmentType)) {
      query["EnvironmentType"] = request.environmentType;
    }

    if (!$dara.isNull(request.feePackage)) {
      query["FeePackage"] = request.feePackage;
    }

    if (!$dara.isNull(request.filterRegionIds)) {
      query["FilterRegionIds"] = request.filterRegionIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironments",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentsResponse({}));
  }

  /**
   * Queries environments.
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  async listEnvironments(request: $_model.ListEnvironmentsRequest): Promise<$_model.ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnvironmentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about an escalation policy.
   * 
   * @param request - ListEscalationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEscalationPoliciesResponse
   */
  async listEscalationPoliciesWithOptions(request: $_model.ListEscalationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEscalationPoliciesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEscalationPolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEscalationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListEscalationPoliciesResponse({}));
  }

  /**
   * Queries the information about an escalation policy.
   * 
   * @param request - ListEscalationPoliciesRequest
   * @returns ListEscalationPoliciesResponse
   */
  async listEscalationPolicies(request: $_model.ListEscalationPoliciesRequest): Promise<$_model.ListEscalationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEscalationPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries an EventBridge integration.
   * 
   * @param request - ListEventBridgeIntegrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventBridgeIntegrationsResponse
   */
  async listEventBridgeIntegrationsWithOptions(request: $_model.ListEventBridgeIntegrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventBridgeIntegrationsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventBridgeIntegrations",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventBridgeIntegrationsResponse>(await this.callApi(params, req, runtime), new $_model.ListEventBridgeIntegrationsResponse({}));
  }

  /**
   * Queries an EventBridge integration.
   * 
   * @param request - ListEventBridgeIntegrationsRequest
   * @returns ListEventBridgeIntegrationsResponse
   */
  async listEventBridgeIntegrations(request: $_model.ListEventBridgeIntegrationsRequest): Promise<$_model.ListEventBridgeIntegrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventBridgeIntegrationsWithOptions(request, runtime);
  }

  /**
   * Obtain Specified Workspace List
   * 
   * @remarks
   * >The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param tmpReq - ListGrafanaWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGrafanaWorkspaceResponse
   */
  async listGrafanaWorkspaceWithOptions(tmpReq: $_model.ListGrafanaWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGrafanaWorkspaceResponse> {
    tmpReq.validate();
    let request = new $_model.ListGrafanaWorkspaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGrafanaWorkspace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGrafanaWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.ListGrafanaWorkspaceResponse({}));
  }

  /**
   * Obtain Specified Workspace List
   * 
   * @remarks
   * >The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param request - ListGrafanaWorkspaceRequest
   * @returns ListGrafanaWorkspaceResponse
   */
  async listGrafanaWorkspace(request: $_model.ListGrafanaWorkspaceRequest): Promise<$_model.ListGrafanaWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGrafanaWorkspaceWithOptions(request, runtime);
  }

  /**
   * Queries the abnormal Insights events within a specified period of time.
   * 
   * @param request - ListInsightsEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInsightsEventsResponse
   */
  async listInsightsEventsWithOptions(request: $_model.ListInsightsEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInsightsEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.insightsTypes)) {
      query["InsightsTypes"] = request.insightsTypes;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInsightsEvents",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInsightsEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListInsightsEventsResponse({}));
  }

  /**
   * Queries the abnormal Insights events within a specified period of time.
   * 
   * @param request - ListInsightsEventsRequest
   * @returns ListInsightsEventsResponse
   */
  async listInsightsEvents(request: $_model.ListInsightsEventsRequest): Promise<$_model.ListInsightsEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInsightsEventsWithOptions(request, runtime);
  }

  /**
   * Views a list of alert integrations.
   * 
   * @param request - ListIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIntegrationResponse
   */
  async listIntegrationWithOptions(request: $_model.ListIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIntegrationResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.ListIntegrationResponse({}));
  }

  /**
   * Views a list of alert integrations.
   * 
   * @param request - ListIntegrationRequest
   * @returns ListIntegrationResponse
   */
  async listIntegration(request: $_model.ListIntegrationRequest): Promise<$_model.ListIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIntegrationWithOptions(request, runtime);
  }

  /**
   * Queries notification policies based on specified conditions.
   * 
   * @param request - ListNotificationPoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNotificationPoliciesResponse
   */
  async listNotificationPoliciesWithOptions(request: $_model.ListNotificationPoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNotificationPoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.directedMode)) {
      query["DirectedMode"] = request.directedMode;
    }

    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNotificationPolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNotificationPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListNotificationPoliciesResponse({}));
  }

  /**
   * Queries notification policies based on specified conditions.
   * 
   * @param request - ListNotificationPoliciesRequest
   * @returns ListNotificationPoliciesResponse
   */
  async listNotificationPolicies(request: $_model.ListNotificationPoliciesRequest): Promise<$_model.ListNotificationPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNotificationPoliciesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scheduling policy.
   * 
   * @param request - ListOnCallSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnCallSchedulesResponse
   */
  async listOnCallSchedulesWithOptions(request: $_model.ListOnCallSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOnCallSchedulesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnCallSchedules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOnCallSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.ListOnCallSchedulesResponse({}));
  }

  /**
   * Queries the information about a scheduling policy.
   * 
   * @param request - ListOnCallSchedulesRequest
   * @returns ListOnCallSchedulesResponse
   */
  async listOnCallSchedules(request: $_model.ListOnCallSchedulesRequest): Promise<$_model.ListOnCallSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOnCallSchedulesWithOptions(request, runtime);
  }

  /**
   * Queries the alert rules created for a Prometheus instance.
   * 
   * @param request - ListPrometheusAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusAlertRulesResponse
   */
  async listPrometheusAlertRulesWithOptions(request: $_model.ListPrometheusAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.matchExpressions)) {
      query["MatchExpressions"] = request.matchExpressions;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusAlertRulesResponse({}));
  }

  /**
   * Queries the alert rules created for a Prometheus instance.
   * 
   * @param request - ListPrometheusAlertRulesRequest
   * @returns ListPrometheusAlertRulesResponse
   */
  async listPrometheusAlertRules(request: $_model.ListPrometheusAlertRulesRequest): Promise<$_model.ListPrometheusAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusAlertRulesWithOptions(request, runtime);
  }

  /**
   * Queries the alert templates of Prometheus Service.
   * 
   * @param request - ListPrometheusAlertTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusAlertTemplatesResponse
   */
  async listPrometheusAlertTemplatesWithOptions(request: $_model.ListPrometheusAlertTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusAlertTemplatesResponse> {
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
      action: "ListPrometheusAlertTemplates",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusAlertTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusAlertTemplatesResponse({}));
  }

  /**
   * Queries the alert templates of Prometheus Service.
   * 
   * @param request - ListPrometheusAlertTemplatesRequest
   * @returns ListPrometheusAlertTemplatesResponse
   */
  async listPrometheusAlertTemplates(request: $_model.ListPrometheusAlertTemplatesRequest): Promise<$_model.ListPrometheusAlertTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusAlertTemplatesWithOptions(request, runtime);
  }

  /**
   * Creates a global aggregation instance in Prometheus Service and obtains the list of global aggregation instances.
   * 
   * @param request - ListPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusGlobalViewResponse
   */
  async listPrometheusGlobalViewWithOptions(request: $_model.ListPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusGlobalViewResponse({}));
  }

  /**
   * Creates a global aggregation instance in Prometheus Service and obtains the list of global aggregation instances.
   * 
   * @param request - ListPrometheusGlobalViewRequest
   * @returns ListPrometheusGlobalViewResponse
   */
  async listPrometheusGlobalView(request: $_model.ListPrometheusGlobalViewRequest): Promise<$_model.ListPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Queries Prometheus instances by tag and resource group.
   * 
   * @param request - ListPrometheusInstanceByTagAndResourceGroupIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusInstanceByTagAndResourceGroupIdResponse
   */
  async listPrometheusInstanceByTagAndResourceGroupIdWithOptions(request: $_model.ListPrometheusInstanceByTagAndResourceGroupIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusInstanceByTagAndResourceGroupIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusInstanceByTagAndResourceGroupId",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusInstanceByTagAndResourceGroupIdResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusInstanceByTagAndResourceGroupIdResponse({}));
  }

  /**
   * Queries Prometheus instances by tag and resource group.
   * 
   * @param request - ListPrometheusInstanceByTagAndResourceGroupIdRequest
   * @returns ListPrometheusInstanceByTagAndResourceGroupIdResponse
   */
  async listPrometheusInstanceByTagAndResourceGroupId(request: $_model.ListPrometheusInstanceByTagAndResourceGroupIdRequest): Promise<$_model.ListPrometheusInstanceByTagAndResourceGroupIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusInstanceByTagAndResourceGroupIdWithOptions(request, runtime);
  }

  /**
   * Obtains all Prometheus instances in a region.
   * 
   * @param request - ListPrometheusInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstancesWithOptions(request: $_model.ListPrometheusInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.showGlobalView)) {
      query["ShowGlobalView"] = request.showGlobalView;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusInstances",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusInstancesResponse({}));
  }

  /**
   * Obtains all Prometheus instances in a region.
   * 
   * @param request - ListPrometheusInstancesRequest
   * @returns ListPrometheusInstancesResponse
   */
  async listPrometheusInstances(request: $_model.ListPrometheusInstancesRequest): Promise<$_model.ListPrometheusInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusInstancesWithOptions(request, runtime);
  }

  /**
   * Queries a list of exporters that are integrated into a Prometheus instance. Only aliyun-cs and ecs instances are supported.
   * 
   * @deprecated OpenAPI ListPrometheusIntegration is deprecated
   * 
   * @param request - ListPrometheusIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusIntegrationResponse
   */
  async listPrometheusIntegrationWithOptions(request: $_model.ListPrometheusIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPrometheusIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusIntegrationResponse({}));
  }

  /**
   * Queries a list of exporters that are integrated into a Prometheus instance. Only aliyun-cs and ecs instances are supported.
   * 
   * @deprecated OpenAPI ListPrometheusIntegration is deprecated
   * 
   * @param request - ListPrometheusIntegrationRequest
   * @returns ListPrometheusIntegrationResponse
   */
  // Deprecated
  async listPrometheusIntegration(request: $_model.ListPrometheusIntegrationRequest): Promise<$_model.ListPrometheusIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusIntegrationWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI ListPrometheusMonitoring is deprecated
   * 
   * @param request - ListPrometheusMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPrometheusMonitoringResponse
   */
  async listPrometheusMonitoringWithOptions(request: $_model.ListPrometheusMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPrometheusMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
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
      action: "ListPrometheusMonitoring",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPrometheusMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.ListPrometheusMonitoringResponse({}));
  }

  /**
   * Queries the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI ListPrometheusMonitoring is deprecated
   * 
   * @param request - ListPrometheusMonitoringRequest
   * @returns ListPrometheusMonitoringResponse
   */
  // Deprecated
  async listPrometheusMonitoring(request: $_model.ListPrometheusMonitoringRequest): Promise<$_model.ListPrometheusMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPrometheusMonitoringWithOptions(request, runtime);
  }

  /**
   * Queries the Browser Monitoring tasks in a region.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListRetcodeAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRetcodeAppsResponse
   */
  async listRetcodeAppsWithOptions(request: $_model.ListRetcodeAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRetcodeAppsResponse> {
    request.validate();
    let query = { };
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
      action: "ListRetcodeApps",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRetcodeAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListRetcodeAppsResponse({}));
  }

  /**
   * Queries the Browser Monitoring tasks in a region.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListRetcodeAppsRequest
   * @returns ListRetcodeAppsResponse
   */
  async listRetcodeApps(request: $_model.ListRetcodeAppsRequest): Promise<$_model.ListRetcodeAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRetcodeAppsWithOptions(request, runtime);
  }

  /**
   * @param request - ListScenarioRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScenarioResponse
   */
  async listScenarioWithOptions(request: $_model.ListScenarioRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScenarioResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      query["Scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.sign)) {
      query["Sign"] = request.sign;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScenario",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScenarioResponse>(await this.callApi(params, req, runtime), new $_model.ListScenarioResponse({}));
  }

  /**
   * @param request - ListScenarioRequest
   * @returns ListScenarioResponse
   */
  async listScenario(request: $_model.ListScenarioRequest): Promise<$_model.ListScenarioResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScenarioWithOptions(request, runtime);
  }

  /**
   * Queries the information of a silence policy list.
   * 
   * @param request - ListSilencePoliciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSilencePoliciesResponse
   */
  async listSilencePoliciesWithOptions(request: $_model.ListSilencePoliciesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSilencePoliciesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSilencePolicies",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSilencePoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListSilencePoliciesResponse({}));
  }

  /**
   * Queries the information of a silence policy list.
   * 
   * @param request - ListSilencePoliciesRequest
   * @returns ListSilencePoliciesResponse
   */
  async listSilencePolicies(request: $_model.ListSilencePoliciesRequest): Promise<$_model.ListSilencePoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSilencePoliciesWithOptions(request, runtime);
  }

  /**
   * Obtains the results of one or more synthetic tests.
   * 
   * @param tmpReq - ListSyntheticDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSyntheticDetailResponse
   */
  async listSyntheticDetailWithOptions(tmpReq: $_model.ListSyntheticDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSyntheticDetailResponse> {
    tmpReq.validate();
    let request = new $_model.ListSyntheticDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedFilters)) {
      request.advancedFiltersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedFilters, "AdvancedFilters", "json");
    }

    if (!$dara.isNull(tmpReq.exactFilters)) {
      request.exactFiltersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.exactFilters, "ExactFilters", "json");
    }

    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSyntheticDetail",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSyntheticDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListSyntheticDetailResponse({}));
  }

  /**
   * Obtains the results of one or more synthetic tests.
   * 
   * @param request - ListSyntheticDetailRequest
   * @returns ListSyntheticDetailResponse
   */
  async listSyntheticDetail(request: $_model.ListSyntheticDetailRequest): Promise<$_model.ListSyntheticDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSyntheticDetailWithOptions(request, runtime);
  }

  /**
   * Queries scheduled synthetic monitoring tasks.
   * 
   * @param tmpReq - ListTimingSyntheticTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTimingSyntheticTasksResponse
   */
  async listTimingSyntheticTasksWithOptions(tmpReq: $_model.ListTimingSyntheticTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTimingSyntheticTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTimingSyntheticTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.search)) {
      request.searchShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.search, "Search", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTimingSyntheticTasks",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTimingSyntheticTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTimingSyntheticTasksResponse({}));
  }

  /**
   * Queries scheduled synthetic monitoring tasks.
   * 
   * @param request - ListTimingSyntheticTasksRequest
   * @returns ListTimingSyntheticTasksResponse
   */
  async listTimingSyntheticTasks(request: $_model.ListTimingSyntheticTasksRequest): Promise<$_model.ListTimingSyntheticTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTimingSyntheticTasksWithOptions(request, runtime);
  }

  /**
   * Queries all Application Monitoring tasks in a specified region.
   * 
   * @param request - ListTraceAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTraceAppsResponse
   */
  async listTraceAppsWithOptions(request: $_model.ListTraceAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTraceAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
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
      action: "ListTraceApps",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTraceAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListTraceAppsResponse({}));
  }

  /**
   * Queries all Application Monitoring tasks in a specified region.
   * 
   * @param request - ListTraceAppsRequest
   * @returns ListTraceAppsResponse
   */
  async listTraceApps(request: $_model.ListTraceAppsRequest): Promise<$_model.ListTraceAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTraceAppsWithOptions(request, runtime);
  }

  /**
   * Activates the service-linked role AliyunServiceRoleForARMS for Application Real-Time Monitoring Service (ARMS).
   * 
   * @param request - OpenArmsDefaultSLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenArmsDefaultSLRResponse
   */
  async openArmsDefaultSLRWithOptions(request: $_model.OpenArmsDefaultSLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenArmsDefaultSLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenArmsDefaultSLR",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenArmsDefaultSLRResponse>(await this.callApi(params, req, runtime), new $_model.OpenArmsDefaultSLRResponse({}));
  }

  /**
   * Activates the service-linked role AliyunServiceRoleForARMS for Application Real-Time Monitoring Service (ARMS).
   * 
   * @param request - OpenArmsDefaultSLRRequest
   * @returns OpenArmsDefaultSLRResponse
   */
  async openArmsDefaultSLR(request: $_model.OpenArmsDefaultSLRRequest): Promise<$_model.OpenArmsDefaultSLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openArmsDefaultSLRWithOptions(request, runtime);
  }

  /**
   * Activates a specified pay-as-you-go sub-service of Application Real-Time Monitoring Service (ARMS).
   * 
   * @remarks
   * The **OpenArmsServiceSecondVersion** operation supports the following sub-service editions:
   * *   Application Monitoring: Basic Edition
   * *   Browser Monitoring: Basic Edition
   * *   Synthetic Monitoring: Pro Edition (pay-as-you-go)
   * *   Prometheus Service: Pro Edition
   * 
   * @param request - OpenArmsServiceSecondVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenArmsServiceSecondVersionResponse
   */
  async openArmsServiceSecondVersionWithOptions(request: $_model.OpenArmsServiceSecondVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenArmsServiceSecondVersionResponse> {
    request.validate();
    let query = { };
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
      action: "OpenArmsServiceSecondVersion",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenArmsServiceSecondVersionResponse>(await this.callApi(params, req, runtime), new $_model.OpenArmsServiceSecondVersionResponse({}));
  }

  /**
   * Activates a specified pay-as-you-go sub-service of Application Real-Time Monitoring Service (ARMS).
   * 
   * @remarks
   * The **OpenArmsServiceSecondVersion** operation supports the following sub-service editions:
   * *   Application Monitoring: Basic Edition
   * *   Browser Monitoring: Basic Edition
   * *   Synthetic Monitoring: Pro Edition (pay-as-you-go)
   * *   Prometheus Service: Pro Edition
   * 
   * @param request - OpenArmsServiceSecondVersionRequest
   * @returns OpenArmsServiceSecondVersionResponse
   */
  async openArmsServiceSecondVersion(request: $_model.OpenArmsServiceSecondVersionRequest): Promise<$_model.OpenArmsServiceSecondVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openArmsServiceSecondVersionWithOptions(request, runtime);
  }

  /**
   * Activates a virtual cluster.
   * 
   * @deprecated OpenAPI OpenVCluster is deprecated
   * 
   * @param request - OpenVClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenVClusterResponse
   */
  async openVClusterWithOptions(request: $_model.OpenVClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenVClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.product)) {
      query["Product"] = request.product;
    }

    if (!$dara.isNull(request.recreateSwitch)) {
      query["RecreateSwitch"] = request.recreateSwitch;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenVCluster",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenVClusterResponse>(await this.callApi(params, req, runtime), new $_model.OpenVClusterResponse({}));
  }

  /**
   * Activates a virtual cluster.
   * 
   * @deprecated OpenAPI OpenVCluster is deprecated
   * 
   * @param request - OpenVClusterRequest
   * @returns OpenVClusterResponse
   */
  // Deprecated
  async openVCluster(request: $_model.OpenVClusterRequest): Promise<$_model.OpenVClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openVClusterWithOptions(request, runtime);
  }

  /**
   * Activates the service-linked role AliyunServiceRoleForXtrace for Tracing Analysis.
   * 
   * @param request - OpenXtraceDefaultSLRRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenXtraceDefaultSLRResponse
   */
  async openXtraceDefaultSLRWithOptions(request: $_model.OpenXtraceDefaultSLRRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenXtraceDefaultSLRResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenXtraceDefaultSLR",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenXtraceDefaultSLRResponse>(await this.callApi(params, req, runtime), new $_model.OpenXtraceDefaultSLRResponse({}));
  }

  /**
   * Activates the service-linked role AliyunServiceRoleForXtrace for Tracing Analysis.
   * 
   * @param request - OpenXtraceDefaultSLRRequest
   * @returns OpenXtraceDefaultSLRResponse
   */
  async openXtraceDefaultSLR(request: $_model.OpenXtraceDefaultSLRRequest): Promise<$_model.OpenXtraceDefaultSLRResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openXtraceDefaultSLRWithOptions(request, runtime);
  }

  /**
   * Queries the encoding mapping content based on the metadata IDs and metadata type.
   * 
   * @param request - QueryAppMetadataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppMetadataResponse
   */
  async queryAppMetadataWithOptions(request: $_model.QueryAppMetadataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAppMetadataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppMetadata",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAppMetadataResponse>(await this.callApi(params, req, runtime), new $_model.QueryAppMetadataResponse({}));
  }

  /**
   * Queries the encoding mapping content based on the metadata IDs and metadata type.
   * 
   * @param request - QueryAppMetadataRequest
   * @returns QueryAppMetadataResponse
   */
  async queryAppMetadata(request: $_model.QueryAppMetadataRequest): Promise<$_model.QueryAppMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppMetadataWithOptions(request, runtime);
  }

  /**
   * Queries the topology of an application.
   * 
   * @param tmpReq - QueryAppTopologyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAppTopologyResponse
   */
  async queryAppTopologyWithOptions(tmpReq: $_model.QueryAppTopologyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAppTopologyResponse> {
    tmpReq.validate();
    let request = new $_model.QueryAppTopologyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.db)) {
      query["Db"] = request.db;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rpc)) {
      query["Rpc"] = request.rpc;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAppTopology",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAppTopologyResponse>(await this.callApi(params, req, runtime), new $_model.QueryAppTopologyResponse({}));
  }

  /**
   * Queries the topology of an application.
   * 
   * @param request - QueryAppTopologyRequest
   * @returns QueryAppTopologyResponse
   */
  async queryAppTopology(request: $_model.QueryAppTopologyRequest): Promise<$_model.QueryAppTopologyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAppTopologyWithOptions(request, runtime);
  }

  /**
   * Queries the amount of data written to Application Monitoring, Managed Service for OpenTelemetry, Managed Service for Prometheus, and Real User Monitoring (RUM).
   * 
   * @param request - QueryCommercialUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCommercialUsageResponse
   */
  async queryCommercialUsageWithOptions(request: $_model.QueryCommercialUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCommercialUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.advancedFilters)) {
      query["AdvancedFilters"] = request.advancedFilters;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCommercialUsage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCommercialUsageResponse>(await this.callApi(params, req, runtime), new $_model.QueryCommercialUsageResponse({}));
  }

  /**
   * Queries the amount of data written to Application Monitoring, Managed Service for OpenTelemetry, Managed Service for Prometheus, and Real User Monitoring (RUM).
   * 
   * @param request - QueryCommercialUsageRequest
   * @returns QueryCommercialUsageResponse
   */
  async queryCommercialUsage(request: $_model.QueryCommercialUsageRequest): Promise<$_model.QueryCommercialUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCommercialUsageWithOptions(request, runtime);
  }

  /**
   * Queries an Application Monitoring metric or a Browser Monitoring metric.
   * 
   * @param request - QueryMetricByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryMetricByPageResponse
   */
  async queryMetricByPageWithOptions(request: $_model.QueryMetricByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryMetricByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.customFilters)) {
      query["CustomFilters"] = request.customFilters;
    }

    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.intervalInSec)) {
      query["IntervalInSec"] = request.intervalInSec;
    }

    if (!$dara.isNull(request.measures)) {
      query["Measures"] = request.measures;
    }

    if (!$dara.isNull(request.metric)) {
      query["Metric"] = request.metric;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryMetricByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryMetricByPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryMetricByPageResponse({}));
  }

  /**
   * Queries an Application Monitoring metric or a Browser Monitoring metric.
   * 
   * @param request - QueryMetricByPageRequest
   * @returns QueryMetricByPageResponse
   */
  async queryMetricByPage(request: $_model.QueryMetricByPageRequest): Promise<$_model.QueryMetricByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryMetricByPageWithOptions(request, runtime);
  }

  /**
   * Queries whether the Prometheus agent is installed on a cluster.
   * 
   * @deprecated OpenAPI QueryPromInstallStatus is deprecated
   * 
   * @param request - QueryPromInstallStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPromInstallStatusResponse
   */
  async queryPromInstallStatusWithOptions(request: $_model.QueryPromInstallStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPromInstallStatusResponse> {
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
      action: "QueryPromInstallStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPromInstallStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryPromInstallStatusResponse({}));
  }

  /**
   * Queries whether the Prometheus agent is installed on a cluster.
   * 
   * @deprecated OpenAPI QueryPromInstallStatus is deprecated
   * 
   * @param request - QueryPromInstallStatusRequest
   * @returns QueryPromInstallStatusResponse
   */
  // Deprecated
  async queryPromInstallStatus(request: $_model.QueryPromInstallStatusRequest): Promise<$_model.QueryPromInstallStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPromInstallStatusWithOptions(request, runtime);
  }

  /**
   * Queries the metrics that are provided for different versions of a specified Enterprise Distributed Application Service (EDAS) or Kubernetes application.
   * 
   * @param request - QueryReleaseMetricRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryReleaseMetricResponse
   */
  async queryReleaseMetricWithOptions(request: $_model.QueryReleaseMetricRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryReleaseMetricResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeOrderId)) {
      query["ChangeOrderId"] = request.changeOrderId;
    }

    if (!$dara.isNull(request.createTime)) {
      query["CreateTime"] = request.createTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.proxyUserId)) {
      query["ProxyUserId"] = request.proxyUserId;
    }

    if (!$dara.isNull(request.releaseEndTime)) {
      query["ReleaseEndTime"] = request.releaseEndTime;
    }

    if (!$dara.isNull(request.releaseStartTime)) {
      query["ReleaseStartTime"] = request.releaseStartTime;
    }

    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryReleaseMetric",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryReleaseMetricResponse>(await this.callApi(params, req, runtime), new $_model.QueryReleaseMetricResponse({}));
  }

  /**
   * Queries the metrics that are provided for different versions of a specified Enterprise Distributed Application Service (EDAS) or Kubernetes application.
   * 
   * @param request - QueryReleaseMetricRequest
   * @returns QueryReleaseMetricResponse
   */
  async queryReleaseMetric(request: $_model.QueryReleaseMetricRequest): Promise<$_model.QueryReleaseMetricResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryReleaseMetricWithOptions(request, runtime);
  }

  /**
   * Removes data sources from a global aggregation instance in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI RemoveAliClusterIdsFromPrometheusGlobalView is deprecated
   * 
   * @param request - RemoveAliClusterIdsFromPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveAliClusterIdsFromPrometheusGlobalViewResponse
   */
  async removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request: $_model.RemoveAliClusterIdsFromPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterIds)) {
      query["ClusterIds"] = request.clusterIds;
    }

    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveAliClusterIdsFromPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveAliClusterIdsFromPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.RemoveAliClusterIdsFromPrometheusGlobalViewResponse({}));
  }

  /**
   * Removes data sources from a global aggregation instance in Managed Service for Prometheus.
   * 
   * @deprecated OpenAPI RemoveAliClusterIdsFromPrometheusGlobalView is deprecated
   * 
   * @param request - RemoveAliClusterIdsFromPrometheusGlobalViewRequest
   * @returns RemoveAliClusterIdsFromPrometheusGlobalViewResponse
   */
  // Deprecated
  async removeAliClusterIdsFromPrometheusGlobalView(request: $_model.RemoveAliClusterIdsFromPrometheusGlobalViewRequest): Promise<$_model.RemoveAliClusterIdsFromPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeAliClusterIdsFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Removes data sources from a global aggregation instance in Managed Service for Prometheus. You can delete only data sources that are not from Alibaba Cloud.
   * 
   * @deprecated OpenAPI RemoveSourcesFromPrometheusGlobalView is deprecated
   * 
   * @param request - RemoveSourcesFromPrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSourcesFromPrometheusGlobalViewResponse
   */
  async removeSourcesFromPrometheusGlobalViewWithOptions(request: $_model.RemoveSourcesFromPrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSourcesFromPrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalViewClusterId)) {
      query["GlobalViewClusterId"] = request.globalViewClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceNames)) {
      query["SourceNames"] = request.sourceNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSourcesFromPrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSourcesFromPrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSourcesFromPrometheusGlobalViewResponse({}));
  }

  /**
   * Removes data sources from a global aggregation instance in Managed Service for Prometheus. You can delete only data sources that are not from Alibaba Cloud.
   * 
   * @deprecated OpenAPI RemoveSourcesFromPrometheusGlobalView is deprecated
   * 
   * @param request - RemoveSourcesFromPrometheusGlobalViewRequest
   * @returns RemoveSourcesFromPrometheusGlobalViewResponse
   */
  // Deprecated
  async removeSourcesFromPrometheusGlobalView(request: $_model.RemoveSourcesFromPrometheusGlobalViewRequest): Promise<$_model.RemoveSourcesFromPrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeSourcesFromPrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Restarts a feature.
   * 
   * @param request - RestartEnvironmentFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartEnvironmentFeatureResponse
   */
  async restartEnvironmentFeatureWithOptions(request: $_model.RestartEnvironmentFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartEnvironmentFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartEnvironmentFeature",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartEnvironmentFeatureResponse>(await this.callApi(params, req, runtime), new $_model.RestartEnvironmentFeatureResponse({}));
  }

  /**
   * Restarts a feature.
   * 
   * @param request - RestartEnvironmentFeatureRequest
   * @returns RestartEnvironmentFeatureResponse
   */
  async restartEnvironmentFeature(request: $_model.RestartEnvironmentFeatureRequest): Promise<$_model.RestartEnvironmentFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartEnvironmentFeatureWithOptions(request, runtime);
  }

  /**
   * Modifies the settings of Application Monitoring, such as trace sampling and agent switch settings.
   * 
   * @param request - SaveTraceAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveTraceAppConfigResponse
   */
  async saveTraceAppConfigWithOptions(request: $_model.SaveTraceAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveTraceAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.settings)) {
      query["Settings"] = request.settings;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveTraceAppConfig",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveTraceAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.SaveTraceAppConfigResponse({}));
  }

  /**
   * Modifies the settings of Application Monitoring, such as trace sampling and agent switch settings.
   * 
   * @param request - SaveTraceAppConfigRequest
   * @returns SaveTraceAppConfigResponse
   */
  async saveTraceAppConfig(request: $_model.SaveTraceAppConfigRequest): Promise<$_model.SaveTraceAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveTraceAppConfigWithOptions(request, runtime);
  }

  /**
   * Queries alert contacts.
   * 
   * @remarks
   * This operation is no longer maintained. To query alert contacts, call the DescribeContacts operation provided by the new version of Alert Management.
   * 
   * @param request - SearchAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertContactResponse
   */
  async searchAlertContactWithOptions(request: $_model.SearchAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.phone)) {
      query["Phone"] = request.phone;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertContactResponse({}));
  }

  /**
   * Queries alert contacts.
   * 
   * @remarks
   * This operation is no longer maintained. To query alert contacts, call the DescribeContacts operation provided by the new version of Alert Management.
   * 
   * @param request - SearchAlertContactRequest
   * @returns SearchAlertContactResponse
   */
  async searchAlertContact(request: $_model.SearchAlertContactRequest): Promise<$_model.SearchAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertContactWithOptions(request, runtime);
  }

  /**
   * Queries alert contact groups.
   * 
   * @remarks
   * The operation is no longer maintained. Call the DescribeContactGroups operation in the alert management module to query alert contact groups.
   * 
   * @param request - SearchAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertContactGroupResponse
   */
  async searchAlertContactGroupWithOptions(request: $_model.SearchAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.isDetail)) {
      query["IsDetail"] = request.isDetail;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertContactGroupResponse({}));
  }

  /**
   * Queries alert contact groups.
   * 
   * @remarks
   * The operation is no longer maintained. Call the DescribeContactGroups operation in the alert management module to query alert contact groups.
   * 
   * @param request - SearchAlertContactGroupRequest
   * @returns SearchAlertContactGroupResponse
   */
  async searchAlertContactGroup(request: $_model.SearchAlertContactGroupRequest): Promise<$_model.SearchAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * Queries the alert records of an alert rule.
   * 
   * @remarks
   * This operation is no longer maintained. To query alert records, call the ListAlerts operation provided by the new version of Alert Management.
   * 
   * @param request - SearchAlertHistoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertHistoriesResponse
   */
  async searchAlertHistoriesWithOptions(request: $_model.SearchAlertHistoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertHistoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertHistories",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertHistoriesResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertHistoriesResponse({}));
  }

  /**
   * Queries the alert records of an alert rule.
   * 
   * @remarks
   * This operation is no longer maintained. To query alert records, call the ListAlerts operation provided by the new version of Alert Management.
   * 
   * @param request - SearchAlertHistoriesRequest
   * @returns SearchAlertHistoriesResponse
   */
  async searchAlertHistories(request: $_model.SearchAlertHistoriesRequest): Promise<$_model.SearchAlertHistoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertHistoriesWithOptions(request, runtime);
  }

  /**
   * Queries alert rules.
   * 
   * @remarks
   * The current operation is no longer maintained. You can call the GetAlertRules operation of Alert Management (New) to query existing alert rules.
   * 
   * @param request - SearchAlertRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchAlertRulesResponse
   */
  async searchAlertRulesWithOptions(request: $_model.SearchAlertRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchAlertRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertRuleId)) {
      query["AlertRuleId"] = request.alertRuleId;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.systemRegionId)) {
      query["SystemRegionId"] = request.systemRegionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchAlertRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchAlertRulesResponse>(await this.callApi(params, req, runtime), new $_model.SearchAlertRulesResponse({}));
  }

  /**
   * Queries alert rules.
   * 
   * @remarks
   * The current operation is no longer maintained. You can call the GetAlertRules operation of Alert Management (New) to query existing alert rules.
   * 
   * @param request - SearchAlertRulesRequest
   * @returns SearchAlertRulesResponse
   */
  async searchAlertRules(request: $_model.SearchAlertRulesRequest): Promise<$_model.SearchAlertRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchAlertRulesWithOptions(request, runtime);
  }

  /**
   * Queries alert event records.
   * 
   * @remarks
   * Alert event records are different from alert notification records. Alert events are recorded every minute after an alert rule filters data. Alert events can be classified based on whether they are triggered or not. If a triggered event is not in the silence period, an alert notification is sent.
   * 
   * @param request - SearchEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchEventsResponse
   */
  async searchEventsWithOptions(request: $_model.SearchEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchEventsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertType)) {
      query["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.appType)) {
      query["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isTrigger)) {
      query["IsTrigger"] = request.isTrigger;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchEvents",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchEventsResponse>(await this.callApi(params, req, runtime), new $_model.SearchEventsResponse({}));
  }

  /**
   * Queries alert event records.
   * 
   * @remarks
   * Alert event records are different from alert notification records. Alert events are recorded every minute after an alert rule filters data. Alert events can be classified based on whether they are triggered or not. If a triggered event is not in the silence period, an alert notification is sent.
   * 
   * @param request - SearchEventsRequest
   * @returns SearchEventsResponse
   */
  async searchEvents(request: $_model.SearchEventsRequest): Promise<$_model.SearchEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchEventsWithOptions(request, runtime);
  }

  /**
   * Queries Browser Monitoring tasks by page.
   * 
   * @param request - SearchRetcodeAppByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchRetcodeAppByPageResponse
   */
  async searchRetcodeAppByPageWithOptions(request: $_model.SearchRetcodeAppByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchRetcodeAppByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.retcodeAppId)) {
      query["RetcodeAppId"] = request.retcodeAppId;
    }

    if (!$dara.isNull(request.retcodeAppName)) {
      query["RetcodeAppName"] = request.retcodeAppName;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchRetcodeAppByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchRetcodeAppByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchRetcodeAppByPageResponse({}));
  }

  /**
   * Queries Browser Monitoring tasks by page.
   * 
   * @param request - SearchRetcodeAppByPageRequest
   * @returns SearchRetcodeAppByPageResponse
   */
  async searchRetcodeAppByPage(request: $_model.SearchRetcodeAppByPageRequest): Promise<$_model.SearchRetcodeAppByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchRetcodeAppByPageWithOptions(request, runtime);
  }

  /**
   * Queries Application Monitoring tasks by application name.
   * 
   * @param request - SearchTraceAppByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTraceAppByNameResponse
   */
  async searchTraceAppByNameWithOptions(request: $_model.SearchTraceAppByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTraceAppByNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraceAppByName",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTraceAppByNameResponse>(await this.callApi(params, req, runtime), new $_model.SearchTraceAppByNameResponse({}));
  }

  /**
   * Queries Application Monitoring tasks by application name.
   * 
   * @param request - SearchTraceAppByNameRequest
   * @returns SearchTraceAppByNameResponse
   */
  async searchTraceAppByName(request: $_model.SearchTraceAppByNameRequest): Promise<$_model.SearchTraceAppByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTraceAppByNameWithOptions(request, runtime);
  }

  /**
   * Queries application monitoring tasks by page.
   * 
   * @param request - SearchTraceAppByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTraceAppByPageResponse
   */
  async searchTraceAppByPageWithOptions(request: $_model.SearchTraceAppByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTraceAppByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
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

    if (!$dara.isNull(request.traceAppName)) {
      query["TraceAppName"] = request.traceAppName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraceAppByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTraceAppByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchTraceAppByPageResponse({}));
  }

  /**
   * Queries application monitoring tasks by page.
   * 
   * @param request - SearchTraceAppByPageRequest
   * @returns SearchTraceAppByPageResponse
   */
  async searchTraceAppByPage(request: $_model.SearchTraceAppByPageRequest): Promise<$_model.SearchTraceAppByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTraceAppByPageWithOptions(request, runtime);
  }

  /**
   * Queries traces by time, application name, IP address, span name, and tag.
   * 
   * @remarks
   * > A maximum of 100 data entries can be returned each time this operation is called. If you want to query all existing traces, we recommend that you call the SearchTracesByPage operation. For more information, see [SearchTracesByPage](https://help.aliyun.com/document_detail/175866.html).
   * 
   * @param request - SearchTracesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesResponse
   */
  async searchTracesWithOptions(request: $_model.SearchTracesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTracesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTraces",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTracesResponse>(await this.callApi(params, req, runtime), new $_model.SearchTracesResponse({}));
  }

  /**
   * Queries traces by time, application name, IP address, span name, and tag.
   * 
   * @remarks
   * > A maximum of 100 data entries can be returned each time this operation is called. If you want to query all existing traces, we recommend that you call the SearchTracesByPage operation. For more information, see [SearchTracesByPage](https://help.aliyun.com/document_detail/175866.html).
   * 
   * @param request - SearchTracesRequest
   * @returns SearchTracesResponse
   */
  async searchTraces(request: $_model.SearchTracesRequest): Promise<$_model.SearchTracesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTracesWithOptions(request, runtime);
  }

  /**
   * Queries traces by page. You can query traces by time range, application name, IP address, span name, or tag.
   * 
   * @param request - SearchTracesByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPageWithOptions(request: $_model.SearchTracesByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchTracesByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exclusionFilters)) {
      query["ExclusionFilters"] = request.exclusionFilters;
    }

    if (!$dara.isNull(request.isError)) {
      query["IsError"] = request.isError;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["MinDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!$dara.isNull(request.serviceIp)) {
      query["ServiceIp"] = request.serviceIp;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchTracesByPage",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchTracesByPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchTracesByPageResponse({}));
  }

  /**
   * Queries traces by page. You can query traces by time range, application name, IP address, span name, or tag.
   * 
   * @param request - SearchTracesByPageRequest
   * @returns SearchTracesByPageResponse
   */
  async searchTracesByPage(request: $_model.SearchTracesByPageRequest): Promise<$_model.SearchTracesByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchTracesByPageWithOptions(request, runtime);
  }

  /**
   * Sends a text message to an alert contact to verify the mobile number of the alert contact.
   * 
   * @remarks
   * After you receive the text message, verify the mobile number as prompted. Before you can specify a mobile phone number in a notification policy, you must verify the mobile phone number.
   * 
   * @param request - SendTTSVerifyLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SendTTSVerifyLinkResponse
   */
  async sendTTSVerifyLinkWithOptions(request: $_model.SendTTSVerifyLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SendTTSVerifyLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactId)) {
      body["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.phone)) {
      body["Phone"] = request.phone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SendTTSVerifyLink",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SendTTSVerifyLinkResponse>(await this.callApi(params, req, runtime), new $_model.SendTTSVerifyLinkResponse({}));
  }

  /**
   * Sends a text message to an alert contact to verify the mobile number of the alert contact.
   * 
   * @remarks
   * After you receive the text message, verify the mobile number as prompted. Before you can specify a mobile phone number in a notification policy, you must verify the mobile phone number.
   * 
   * @param request - SendTTSVerifyLinkRequest
   * @returns SendTTSVerifyLinkResponse
   */
  async sendTTSVerifyLink(request: $_model.SendTTSVerifyLinkRequest): Promise<$_model.SendTTSVerifyLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.sendTTSVerifyLinkWithOptions(request, runtime);
  }

  /**
   * Turns on or turns off logon-free sharing for an application monitored by Browser Monitoring.
   * 
   * @param request - SetRetcodeShareStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetRetcodeShareStatusResponse
   */
  async setRetcodeShareStatusWithOptions(request: $_model.SetRetcodeShareStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetRetcodeShareStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appName)) {
      query["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetRetcodeShareStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetRetcodeShareStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetRetcodeShareStatusResponse({}));
  }

  /**
   * Turns on or turns off logon-free sharing for an application monitored by Browser Monitoring.
   * 
   * @param request - SetRetcodeShareStatusRequest
   * @returns SetRetcodeShareStatusResponse
   */
  async setRetcodeShareStatus(request: $_model.SetRetcodeShareStatusRequest): Promise<$_model.SetRetcodeShareStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setRetcodeShareStatusWithOptions(request, runtime);
  }

  /**
   * @param request - StartAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAlertResponse
   */
  async startAlertWithOptions(request: $_model.StartAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAlert",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartAlertResponse>(await this.callApi(params, req, runtime), new $_model.StartAlertResponse({}));
  }

  /**
   * @param request - StartAlertRequest
   * @returns StartAlertResponse
   */
  async startAlert(request: $_model.StartAlertRequest): Promise<$_model.StartAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startAlertWithOptions(request, runtime);
  }

  /**
   * Starts scheduled synthetic monitoring tasks.
   * 
   * @param tmpReq - StartTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTimingSyntheticTaskResponse
   */
  async startTimingSyntheticTaskWithOptions(tmpReq: $_model.StartTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartTimingSyntheticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.StartTimingSyntheticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartTimingSyntheticTaskResponse({}));
  }

  /**
   * Starts scheduled synthetic monitoring tasks.
   * 
   * @param request - StartTimingSyntheticTaskRequest
   * @returns StartTimingSyntheticTaskResponse
   */
  async startTimingSyntheticTask(request: $_model.StartTimingSyntheticTaskRequest): Promise<$_model.StartTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Call StartAlert to stop an alert rule.
   * 
   * @param request - StopAlertRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAlertResponse
   */
  async stopAlertWithOptions(request: $_model.StopAlertRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopAlertResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAlert",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopAlertResponse>(await this.callApi(params, req, runtime), new $_model.StopAlertResponse({}));
  }

  /**
   * Call StartAlert to stop an alert rule.
   * 
   * @param request - StopAlertRequest
   * @returns StopAlertResponse
   */
  async stopAlert(request: $_model.StopAlertRequest): Promise<$_model.StopAlertResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopAlertWithOptions(request, runtime);
  }

  /**
   * Stops scheduled synthetic monitoring tasks.
   * 
   * @param tmpReq - StopTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTimingSyntheticTaskResponse
   */
  async stopTimingSyntheticTaskWithOptions(tmpReq: $_model.StopTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopTimingSyntheticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.StopTimingSyntheticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.taskIds)) {
      request.taskIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskIds, "TaskIds", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskIdsShrink)) {
      query["TaskIds"] = request.taskIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopTimingSyntheticTaskResponse({}));
  }

  /**
   * Stops scheduled synthetic monitoring tasks.
   * 
   * @param request - StopTimingSyntheticTaskRequest
   * @returns StopTimingSyntheticTaskResponse
   */
  async stopTimingSyntheticTask(request: $_model.StopTimingSyntheticTaskRequest): Promise<$_model.StopTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Starts or stops a scheduled synthetic monitoring task.
   * 
   * @param request - SwitchSyntheticTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchSyntheticTaskStatusResponse
   */
  async switchSyntheticTaskStatusWithOptions(request: $_model.SwitchSyntheticTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchSyntheticTaskStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.switchStatus)) {
      query["SwitchStatus"] = request.switchStatus;
    }

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchSyntheticTaskStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchSyntheticTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.SwitchSyntheticTaskStatusResponse({}));
  }

  /**
   * Starts or stops a scheduled synthetic monitoring task.
   * 
   * @param request - SwitchSyntheticTaskStatusRequest
   * @returns SwitchSyntheticTaskStatusResponse
   */
  async switchSyntheticTaskStatus(request: $_model.SwitchSyntheticTaskStatusRequest): Promise<$_model.SwitchSyntheticTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchSyntheticTaskStatusWithOptions(request, runtime);
  }

  /**
   * Synchronizes the aggregation rule of a cluster to other clusters in a region.
   * 
   * @deprecated OpenAPI SyncRecordingRules is deprecated
   * 
   * @param request - SyncRecordingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncRecordingRulesResponse
   */
  async syncRecordingRulesWithOptions(request: $_model.SyncRecordingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncRecordingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.targetClusters)) {
      query["TargetClusters"] = request.targetClusters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncRecordingRules",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncRecordingRulesResponse>(await this.callApi(params, req, runtime), new $_model.SyncRecordingRulesResponse({}));
  }

  /**
   * Synchronizes the aggregation rule of a cluster to other clusters in a region.
   * 
   * @deprecated OpenAPI SyncRecordingRules is deprecated
   * 
   * @param request - SyncRecordingRulesRequest
   * @returns SyncRecordingRulesResponse
   */
  // Deprecated
  async syncRecordingRules(request: $_model.SyncRecordingRulesRequest): Promise<$_model.SyncRecordingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncRecordingRulesWithOptions(request, runtime);
  }

  /**
   * Adds tags to ARMS resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
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
      version: "2019-08-08",
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
   * Adds tags to ARMS resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Uninstalls a managed Prometheus agent for a serverless Kubernetes (ASK) cluster, Distributed Cloud Container Platform for Kubernetes (ACK One) cluster, or Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * This operation is available only for ASK, ECS, and ACK One clusters. Before you call this operation, make sure that a managed Prometheus agent is installed for your cluster.
   * 
   * @deprecated OpenAPI UninstallManagedPrometheus is deprecated
   * 
   * @param request - UninstallManagedPrometheusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallManagedPrometheusResponse
   */
  async uninstallManagedPrometheusWithOptions(request: $_model.UninstallManagedPrometheusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallManagedPrometheusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["ClusterType"] = request.clusterType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallManagedPrometheus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallManagedPrometheusResponse>(await this.callApi(params, req, runtime), new $_model.UninstallManagedPrometheusResponse({}));
  }

  /**
   * Uninstalls a managed Prometheus agent for a serverless Kubernetes (ASK) cluster, Distributed Cloud Container Platform for Kubernetes (ACK One) cluster, or Elastic Compute Service (ECS) cluster.
   * 
   * @remarks
   * This operation is available only for ASK, ECS, and ACK One clusters. Before you call this operation, make sure that a managed Prometheus agent is installed for your cluster.
   * 
   * @deprecated OpenAPI UninstallManagedPrometheus is deprecated
   * 
   * @param request - UninstallManagedPrometheusRequest
   * @returns UninstallManagedPrometheusResponse
   */
  // Deprecated
  async uninstallManagedPrometheus(request: $_model.UninstallManagedPrometheusRequest): Promise<$_model.UninstallManagedPrometheusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallManagedPrometheusWithOptions(request, runtime);
  }

  /**
   * Releases a Prometheus instance.
   * 
   * @param request - UninstallPromClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallPromClusterResponse
   */
  async uninstallPromClusterWithOptions(request: $_model.UninstallPromClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallPromClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
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
      action: "UninstallPromCluster",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallPromClusterResponse>(await this.callApi(params, req, runtime), new $_model.UninstallPromClusterResponse({}));
  }

  /**
   * Releases a Prometheus instance.
   * 
   * @param request - UninstallPromClusterRequest
   * @returns UninstallPromClusterResponse
   */
  async uninstallPromCluster(request: $_model.UninstallPromClusterRequest): Promise<$_model.UninstallPromClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uninstallPromClusterWithOptions(request, runtime);
  }

  /**
   * Removes tags from ARMS resources.
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

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-08-08",
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
   * Removes tags from ARMS resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. To create or modify an alert contact, call the CreateOrUpdateContact operation provided by the new version of Alert Management.
   * 
   * @param request - UpdateAlertContactRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertContactResponse
   */
  async updateAlertContactWithOptions(request: $_model.UpdateAlertContactRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertContactResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.dingRobotWebhookUrl)) {
      query["DingRobotWebhookUrl"] = request.dingRobotWebhookUrl;
    }

    if (!$dara.isNull(request.email)) {
      query["Email"] = request.email;
    }

    if (!$dara.isNull(request.phoneNum)) {
      query["PhoneNum"] = request.phoneNum;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.systemNoc)) {
      query["SystemNoc"] = request.systemNoc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertContact",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertContactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertContactResponse({}));
  }

  /**
   * Updates an alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. To create or modify an alert contact, call the CreateOrUpdateContact operation provided by the new version of Alert Management.
   * 
   * @param request - UpdateAlertContactRequest
   * @returns UpdateAlertContactResponse
   */
  async updateAlertContact(request: $_model.UpdateAlertContactRequest): Promise<$_model.UpdateAlertContactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertContactWithOptions(request, runtime);
  }

  /**
   * Updates UpdateAlertContactGroup alarm contact group.
   * 
   * @param request - UpdateAlertContactGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertContactGroupResponse
   */
  async updateAlertContactGroupWithOptions(request: $_model.UpdateAlertContactGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertContactGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.contactGroupId)) {
      query["ContactGroupId"] = request.contactGroupId;
    }

    if (!$dara.isNull(request.contactGroupName)) {
      query["ContactGroupName"] = request.contactGroupName;
    }

    if (!$dara.isNull(request.contactIds)) {
      query["ContactIds"] = request.contactIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertContactGroup",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertContactGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertContactGroupResponse({}));
  }

  /**
   * Updates UpdateAlertContactGroup alarm contact group.
   * 
   * @param request - UpdateAlertContactGroupRequest
   * @returns UpdateAlertContactGroupResponse
   */
  async updateAlertContactGroup(request: $_model.UpdateAlertContactGroupRequest): Promise<$_model.UpdateAlertContactGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertContactGroupWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRuleWithOptions(request: $_model.UpdateAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.contactGroupIds)) {
      query["ContactGroupIds"] = request.contactGroupIds;
    }

    if (!$dara.isNull(request.isAutoStart)) {
      query["IsAutoStart"] = request.isAutoStart;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templageAlertConfig)) {
      query["TemplageAlertConfig"] = request.templageAlertConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAlertRuleResponse({}));
  }

  /**
   * @param request - UpdateAlertRuleRequest
   * @returns UpdateAlertRuleResponse
   */
  async updateAlertRule(request: $_model.UpdateAlertRuleRequest): Promise<$_model.UpdateAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAlertRuleWithOptions(request, runtime);
  }

  /**
   * Modifies a dispatch policy.
   * 
   * @param request - UpdateDispatchRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDispatchRuleResponse
   */
  async updateDispatchRuleWithOptions(request: $_model.UpdateDispatchRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDispatchRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dispatchRule)) {
      query["DispatchRule"] = request.dispatchRule;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDispatchRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDispatchRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDispatchRuleResponse({}));
  }

  /**
   * Modifies a dispatch policy.
   * 
   * @param request - UpdateDispatchRuleRequest
   * @returns UpdateDispatchRuleResponse
   */
  async updateDispatchRule(request: $_model.UpdateDispatchRuleRequest): Promise<$_model.UpdateDispatchRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDispatchRuleWithOptions(request, runtime);
  }

  /**
   * Updates a custom job for an environment.
   * 
   * @param request - UpdateEnvCustomJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvCustomJobResponse
   */
  async updateEnvCustomJobWithOptions(request: $_model.UpdateEnvCustomJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvCustomJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.customJobName)) {
      query["CustomJobName"] = request.customJobName;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvCustomJob",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvCustomJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvCustomJobResponse({}));
  }

  /**
   * Updates a custom job for an environment.
   * 
   * @param request - UpdateEnvCustomJobRequest
   * @returns UpdateEnvCustomJobResponse
   */
  async updateEnvCustomJob(request: $_model.UpdateEnvCustomJobRequest): Promise<$_model.UpdateEnvCustomJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnvCustomJobWithOptions(request, runtime);
  }

  /**
   * 更新环境实例的废弃指标列表
   * 
   * @param request - UpdateEnvDropMetricsRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvDropMetricsRuleResponse
   */
  async updateEnvDropMetricsRuleWithOptions(request: $_model.UpdateEnvDropMetricsRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvDropMetricsRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dropMetrics)) {
      body["DropMetrics"] = request.dropMetrics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvDropMetricsRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvDropMetricsRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvDropMetricsRuleResponse({}));
  }

  /**
   * 更新环境实例的废弃指标列表
   * 
   * @param request - UpdateEnvDropMetricsRuleRequest
   * @returns UpdateEnvDropMetricsRuleResponse
   */
  async updateEnvDropMetricsRule(request: $_model.UpdateEnvDropMetricsRuleRequest): Promise<$_model.UpdateEnvDropMetricsRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnvDropMetricsRuleWithOptions(request, runtime);
  }

  /**
   * Updates the PodMonitor of an environment.
   * 
   * @param request - UpdateEnvPodMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvPodMonitorResponse
   */
  async updateEnvPodMonitorWithOptions(request: $_model.UpdateEnvPodMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvPodMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.podMonitorName)) {
      query["PodMonitorName"] = request.podMonitorName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvPodMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvPodMonitorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvPodMonitorResponse({}));
  }

  /**
   * Updates the PodMonitor of an environment.
   * 
   * @param request - UpdateEnvPodMonitorRequest
   * @returns UpdateEnvPodMonitorResponse
   */
  async updateEnvPodMonitor(request: $_model.UpdateEnvPodMonitorRequest): Promise<$_model.UpdateEnvPodMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnvPodMonitorWithOptions(request, runtime);
  }

  /**
   * Updates the ServiceMonitor of an environment.
   * 
   * @param request - UpdateEnvServiceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvServiceMonitorResponse
   */
  async updateEnvServiceMonitorWithOptions(request: $_model.UpdateEnvServiceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvServiceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceMonitorName)) {
      query["ServiceMonitorName"] = request.serviceMonitorName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvServiceMonitor",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvServiceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvServiceMonitorResponse({}));
  }

  /**
   * Updates the ServiceMonitor of an environment.
   * 
   * @param request - UpdateEnvServiceMonitorRequest
   * @returns UpdateEnvServiceMonitorResponse
   */
  async updateEnvServiceMonitor(request: $_model.UpdateEnvServiceMonitorRequest): Promise<$_model.UpdateEnvServiceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnvServiceMonitorWithOptions(request, runtime);
  }

  /**
   * Updates the configuration of an environment.
   * 
   * @param request - UpdateEnvironmentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(request: $_model.UpdateEnvironmentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvironmentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.environmentName)) {
      query["EnvironmentName"] = request.environmentName;
    }

    if (!$dara.isNull(request.feePackage)) {
      query["FeePackage"] = request.feePackage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvironmentResponse({}));
  }

  /**
   * Updates the configuration of an environment.
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironment(request: $_model.UpdateEnvironmentRequest): Promise<$_model.UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEnvironmentWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Grafana workspace.
   * 
   * @param request - UpdateGrafanaWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGrafanaWorkspaceResponse
   */
  async updateGrafanaWorkspaceWithOptions(request: $_model.UpdateGrafanaWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGrafanaWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.grafanaWorkspaceId)) {
      query["GrafanaWorkspaceId"] = request.grafanaWorkspaceId;
    }

    if (!$dara.isNull(request.grafanaWorkspaceName)) {
      query["GrafanaWorkspaceName"] = request.grafanaWorkspaceName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGrafanaWorkspace",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGrafanaWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGrafanaWorkspaceResponse({}));
  }

  /**
   * Updates the information about a Grafana workspace.
   * 
   * @param request - UpdateGrafanaWorkspaceRequest
   * @returns UpdateGrafanaWorkspaceResponse
   */
  async updateGrafanaWorkspace(request: $_model.UpdateGrafanaWorkspaceRequest): Promise<$_model.UpdateGrafanaWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGrafanaWorkspaceWithOptions(request, runtime);
  }

  /**
   * Updates the version of a Grafana workspace.
   * 
   * @remarks
   * Note: The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param request - UpdateGrafanaWorkspaceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGrafanaWorkspaceVersionResponse
   */
  async updateGrafanaWorkspaceVersionWithOptions(request: $_model.UpdateGrafanaWorkspaceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGrafanaWorkspaceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.grafanaVersion)) {
      query["GrafanaVersion"] = request.grafanaVersion;
    }

    if (!$dara.isNull(request.grafanaWorkspaceId)) {
      query["GrafanaWorkspaceId"] = request.grafanaWorkspaceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGrafanaWorkspaceVersion",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGrafanaWorkspaceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGrafanaWorkspaceVersionResponse({}));
  }

  /**
   * Updates the version of a Grafana workspace.
   * 
   * @remarks
   * Note: The list returned by this operation includes the workspaces of Developer Edition, Expert Edition, and Advanced Edition. The list does not include the workspaces of Shared Edition.
   * 
   * @param request - UpdateGrafanaWorkspaceVersionRequest
   * @returns UpdateGrafanaWorkspaceVersionResponse
   */
  async updateGrafanaWorkspaceVersion(request: $_model.UpdateGrafanaWorkspaceVersionRequest): Promise<$_model.UpdateGrafanaWorkspaceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateGrafanaWorkspaceVersionWithOptions(request, runtime);
  }

  /**
   * Modifies the information about an integration.
   * 
   * @param request - UpdateIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIntegrationResponse
   */
  async updateIntegrationWithOptions(request: $_model.UpdateIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIntegrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRecover)) {
      body["AutoRecover"] = request.autoRecover;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.duplicateKey)) {
      body["DuplicateKey"] = request.duplicateKey;
    }

    if (!$dara.isNull(request.extendedFieldRedefineRules)) {
      body["ExtendedFieldRedefineRules"] = request.extendedFieldRedefineRules;
    }

    if (!$dara.isNull(request.fieldRedefineRules)) {
      body["FieldRedefineRules"] = request.fieldRedefineRules;
    }

    if (!$dara.isNull(request.initiativeRecoverField)) {
      body["InitiativeRecoverField"] = request.initiativeRecoverField;
    }

    if (!$dara.isNull(request.initiativeRecoverValue)) {
      body["InitiativeRecoverValue"] = request.initiativeRecoverValue;
    }

    if (!$dara.isNull(request.integrationId)) {
      body["IntegrationId"] = request.integrationId;
    }

    if (!$dara.isNull(request.integrationName)) {
      body["IntegrationName"] = request.integrationName;
    }

    if (!$dara.isNull(request.integrationProductType)) {
      body["IntegrationProductType"] = request.integrationProductType;
    }

    if (!$dara.isNull(request.liveness)) {
      body["Liveness"] = request.liveness;
    }

    if (!$dara.isNull(request.recoverTime)) {
      body["RecoverTime"] = request.recoverTime;
    }

    if (!$dara.isNull(request.stat)) {
      body["Stat"] = request.stat;
    }

    if (!$dara.isNull(request.state)) {
      body["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIntegrationResponse({}));
  }

  /**
   * Modifies the information about an integration.
   * 
   * @param request - UpdateIntegrationRequest
   * @returns UpdateIntegrationResponse
   */
  async updateIntegration(request: $_model.UpdateIntegrationRequest): Promise<$_model.UpdateIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIntegrationWithOptions(request, runtime);
  }

  /**
   * Updates the list of discarded metrics.
   * 
   * @deprecated OpenAPI UpdateMetricDrop is deprecated, please use ARMS::2019-08-08::UpdateEnvDropMetricsRule instead.
   * 
   * @param request - UpdateMetricDropRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetricDropResponse
   */
  async updateMetricDropWithOptions(request: $_model.UpdateMetricDropRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetricDropResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.metricDrop)) {
      query["MetricDrop"] = request.metricDrop;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetricDrop",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetricDropResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetricDropResponse({}));
  }

  /**
   * Updates the list of discarded metrics.
   * 
   * @deprecated OpenAPI UpdateMetricDrop is deprecated, please use ARMS::2019-08-08::UpdateEnvDropMetricsRule instead.
   * 
   * @param request - UpdateMetricDropRequest
   * @returns UpdateMetricDropResponse
   */
  // Deprecated
  async updateMetricDrop(request: $_model.UpdateMetricDropRequest): Promise<$_model.UpdateMetricDropResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetricDropWithOptions(request, runtime);
  }

  /**
   * 更新Prometheus告警规则
   * 
   * @param request - UpdatePrometheusAlertRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusAlertRuleResponse
   */
  async updatePrometheusAlertRuleWithOptions(request: $_model.UpdatePrometheusAlertRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusAlertRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alertId)) {
      query["AlertId"] = request.alertId;
    }

    if (!$dara.isNull(request.alertName)) {
      query["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.annotations)) {
      query["Annotations"] = request.annotations;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dispatchRuleId)) {
      query["DispatchRuleId"] = request.dispatchRuleId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusAlertRule",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusAlertRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusAlertRuleResponse({}));
  }

  /**
   * 更新Prometheus告警规则
   * 
   * @param request - UpdatePrometheusAlertRuleRequest
   * @returns UpdatePrometheusAlertRuleResponse
   */
  async updatePrometheusAlertRule(request: $_model.UpdatePrometheusAlertRuleRequest): Promise<$_model.UpdatePrometheusAlertRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusAlertRuleWithOptions(request, runtime);
  }

  /**
   * Updates the data sources of Prometheus instance for GlobalView.
   * 
   * @deprecated OpenAPI UpdatePrometheusGlobalView is deprecated
   * 
   * @param request - UpdatePrometheusGlobalViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusGlobalViewResponse
   */
  async updatePrometheusGlobalViewWithOptions(request: $_model.UpdatePrometheusGlobalViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusGlobalViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allSubClustersSuccess)) {
      query["AllSubClustersSuccess"] = request.allSubClustersSuccess;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.mostRegionId)) {
      query["MostRegionId"] = request.mostRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.subClustersJson)) {
      query["SubClustersJson"] = request.subClustersJson;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusGlobalView",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusGlobalViewResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusGlobalViewResponse({}));
  }

  /**
   * Updates the data sources of Prometheus instance for GlobalView.
   * 
   * @deprecated OpenAPI UpdatePrometheusGlobalView is deprecated
   * 
   * @param request - UpdatePrometheusGlobalViewRequest
   * @returns UpdatePrometheusGlobalViewResponse
   */
  // Deprecated
  async updatePrometheusGlobalView(request: $_model.UpdatePrometheusGlobalViewRequest): Promise<$_model.UpdatePrometheusGlobalViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusGlobalViewWithOptions(request, runtime);
  }

  /**
   * Updates the information about a Prometheus instance.
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstanceWithOptions(request: $_model.UpdatePrometheusInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.archiveDuration)) {
      query["ArchiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      query["AuthFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      query["AuthFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      query["EnableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      query["EnableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      query["EnableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.storageDuration)) {
      query["StorageDuration"] = request.storageDuration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusInstance",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusInstanceResponse({}));
  }

  /**
   * Updates the information about a Prometheus instance.
   * 
   * @param request - UpdatePrometheusInstanceRequest
   * @returns UpdatePrometheusInstanceResponse
   */
  async updatePrometheusInstance(request: $_model.UpdatePrometheusInstanceRequest): Promise<$_model.UpdatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusInstanceWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of an exporter that is integrated into a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI UpdatePrometheusIntegration is deprecated
   * 
   * @param request - UpdatePrometheusIntegrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusIntegrationResponse
   */
  async updatePrometheusIntegrationWithOptions(request: $_model.UpdatePrometheusIntegrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusIntegrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.integrationType)) {
      query["IntegrationType"] = request.integrationType;
    }

    if (!$dara.isNull(request.param)) {
      query["Param"] = request.param;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusIntegration",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusIntegrationResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusIntegrationResponse({}));
  }

  /**
   * Modifies the configurations of an exporter that is integrated into a Prometheus instance for Container Service or a Prometheus instance for ECS.
   * 
   * @deprecated OpenAPI UpdatePrometheusIntegration is deprecated
   * 
   * @param request - UpdatePrometheusIntegrationRequest
   * @returns UpdatePrometheusIntegrationResponse
   */
  // Deprecated
  async updatePrometheusIntegration(request: $_model.UpdatePrometheusIntegrationRequest): Promise<$_model.UpdatePrometheusIntegrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusIntegrationWithOptions(request, runtime);
  }

  /**
   * Updates the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI UpdatePrometheusMonitoring is deprecated
   * 
   * @param request - UpdatePrometheusMonitoringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusMonitoringResponse
   */
  async updatePrometheusMonitoringWithOptions(request: $_model.UpdatePrometheusMonitoringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusMonitoringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.monitoringName)) {
      query["MonitoringName"] = request.monitoringName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configYaml)) {
      body["ConfigYaml"] = request.configYaml;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusMonitoring",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusMonitoringResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusMonitoringResponse({}));
  }

  /**
   * Updates the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI UpdatePrometheusMonitoring is deprecated
   * 
   * @param request - UpdatePrometheusMonitoringRequest
   * @returns UpdatePrometheusMonitoringResponse
   */
  // Deprecated
  async updatePrometheusMonitoring(request: $_model.UpdatePrometheusMonitoringRequest): Promise<$_model.UpdatePrometheusMonitoringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusMonitoringWithOptions(request, runtime);
  }

  /**
   * Updates the status of the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI UpdatePrometheusMonitoringStatus is deprecated
   * 
   * @param request - UpdatePrometheusMonitoringStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrometheusMonitoringStatusResponse
   */
  async updatePrometheusMonitoringStatusWithOptions(request: $_model.UpdatePrometheusMonitoringStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrometheusMonitoringStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.monitoringName)) {
      query["MonitoringName"] = request.monitoringName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrometheusMonitoringStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrometheusMonitoringStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrometheusMonitoringStatusResponse({}));
  }

  /**
   * Updates the status of the monitoring configuration of a Prometheus instance.
   * 
   * @deprecated OpenAPI UpdatePrometheusMonitoringStatus is deprecated
   * 
   * @param request - UpdatePrometheusMonitoringStatusRequest
   * @returns UpdatePrometheusMonitoringStatusResponse
   */
  // Deprecated
  async updatePrometheusMonitoringStatus(request: $_model.UpdatePrometheusMonitoringStatusRequest): Promise<$_model.UpdatePrometheusMonitoringStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrometheusMonitoringStatusWithOptions(request, runtime);
  }

  /**
   * Updates a Real User Monitoring (RUM) application.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - UpdateRumAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRumAppResponse
   */
  async updateRumAppWithOptions(request: $_model.UpdateRumAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRumAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appConfig)) {
      query["AppConfig"] = request.appConfig;
    }

    if (!$dara.isNull(request.autoRestart)) {
      query["AutoRestart"] = request.autoRestart;
    }

    if (!$dara.isNull(request.backendServiceTraceRegion)) {
      query["BackendServiceTraceRegion"] = request.backendServiceTraceRegion;
    }

    if (!$dara.isNull(request.bonreeSDKConfigJson)) {
      query["BonreeSDKConfigJson"] = request.bonreeSDKConfigJson;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.isSubscribe)) {
      query["IsSubscribe"] = request.isSubscribe;
    }

    if (!$dara.isNull(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.realRegionId)) {
      query["RealRegionId"] = request.realRegionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.restart)) {
      query["Restart"] = request.restart;
    }

    if (!$dara.isNull(request.serviceDomainOperationJson)) {
      query["ServiceDomainOperationJson"] = request.serviceDomainOperationJson;
    }

    if (!$dara.isNull(request.stop)) {
      query["Stop"] = request.stop;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRumApp",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRumAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRumAppResponse({}));
  }

  /**
   * Updates a Real User Monitoring (RUM) application.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - UpdateRumAppRequest
   * @returns UpdateRumAppResponse
   */
  async updateRumApp(request: $_model.UpdateRumAppRequest): Promise<$_model.UpdateRumAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRumAppWithOptions(request, runtime);
  }

  /**
   * Updates the status of a Real User Monitoring (RUM) file. You can call this operation after the RUM file is uploaded.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - UpdateRumFileStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRumFileStatusResponse
   */
  async updateRumFileStatusWithOptions(request: $_model.UpdateRumFileStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRumFileStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    if (!$dara.isNull(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRumFileStatus",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRumFileStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRumFileStatusResponse({}));
  }

  /**
   * Updates the status of a Real User Monitoring (RUM) file. You can call this operation after the RUM file is uploaded.
   * 
   * @remarks
   * Real User Monitoring (RUM) is available only in the China (Hangzhou), Singapore, and US (Silicon Valley) regions. Select the correct endpoint.
   * 
   * @param request - UpdateRumFileStatusRequest
   * @returns UpdateRumFileStatusResponse
   */
  async updateRumFileStatus(request: $_model.UpdateRumFileStatusRequest): Promise<$_model.UpdateRumFileStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRumFileStatusWithOptions(request, runtime);
  }

  /**
   * Updates a scheduled synthetic test task.
   * 
   * @param tmpReq - UpdateTimingSyntheticTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTimingSyntheticTaskResponse
   */
  async updateTimingSyntheticTaskWithOptions(tmpReq: $_model.UpdateTimingSyntheticTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTimingSyntheticTaskResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTimingSyntheticTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.availableAssertions)) {
      request.availableAssertionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.availableAssertions, "AvailableAssertions", "json");
    }

    if (!$dara.isNull(tmpReq.commonSetting)) {
      request.commonSettingShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.commonSetting, "CommonSetting", "json");
    }

    if (!$dara.isNull(tmpReq.customPeriod)) {
      request.customPeriodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customPeriod, "CustomPeriod", "json");
    }

    if (!$dara.isNull(tmpReq.monitorConf)) {
      request.monitorConfShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitorConf, "MonitorConf", "json");
    }

    if (!$dara.isNull(tmpReq.monitors)) {
      request.monitorsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.monitors, "Monitors", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.availableAssertionsShrink)) {
      query["AvailableAssertions"] = request.availableAssertionsShrink;
    }

    if (!$dara.isNull(request.commonSettingShrink)) {
      query["CommonSetting"] = request.commonSettingShrink;
    }

    if (!$dara.isNull(request.customPeriodShrink)) {
      query["CustomPeriod"] = request.customPeriodShrink;
    }

    if (!$dara.isNull(request.frequency)) {
      query["Frequency"] = request.frequency;
    }

    if (!$dara.isNull(request.monitorConfShrink)) {
      query["MonitorConf"] = request.monitorConfShrink;
    }

    if (!$dara.isNull(request.monitorsShrink)) {
      query["Monitors"] = request.monitorsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTimingSyntheticTask",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTimingSyntheticTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTimingSyntheticTaskResponse({}));
  }

  /**
   * Updates a scheduled synthetic test task.
   * 
   * @param request - UpdateTimingSyntheticTaskRequest
   * @returns UpdateTimingSyntheticTaskResponse
   */
  async updateTimingSyntheticTask(request: $_model.UpdateTimingSyntheticTaskRequest): Promise<$_model.UpdateTimingSyntheticTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTimingSyntheticTaskWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a webhook alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. Call the CreateOrUpdateWebhookContact operation in the new alter management module to create or modify a webhook alert contact.
   * 
   * @param request - UpdateWebhookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWebhookResponse
   */
  async updateWebhookWithOptions(request: $_model.UpdateWebhookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWebhookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.body)) {
      query["Body"] = request.body;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!$dara.isNull(request.httpHeaders)) {
      query["HttpHeaders"] = request.httpHeaders;
    }

    if (!$dara.isNull(request.httpParams)) {
      query["HttpParams"] = request.httpParams;
    }

    if (!$dara.isNull(request.method)) {
      query["Method"] = request.method;
    }

    if (!$dara.isNull(request.recoverBody)) {
      query["RecoverBody"] = request.recoverBody;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWebhook",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWebhookResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWebhookResponse({}));
  }

  /**
   * Modifies the information about a webhook alert contact.
   * 
   * @remarks
   * This operation is no longer maintained. Call the CreateOrUpdateWebhookContact operation in the new alter management module to create or modify a webhook alert contact.
   * 
   * @param request - UpdateWebhookRequest
   * @returns UpdateWebhookResponse
   */
  async updateWebhook(request: $_model.UpdateWebhookRequest): Promise<$_model.UpdateWebhookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWebhookWithOptions(request, runtime);
  }

  /**
   * Updates the release information of an add-on.
   * 
   * @param request - UpgradeAddonReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAddonReleaseResponse
   */
  async upgradeAddonReleaseWithOptions(request: $_model.UpgradeAddonReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeAddonReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseName)) {
      query["ReleaseName"] = request.releaseName;
    }

    if (!$dara.isNull(request.values)) {
      query["Values"] = request.values;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAddonRelease",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeAddonReleaseResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeAddonReleaseResponse({}));
  }

  /**
   * Updates the release information of an add-on.
   * 
   * @param request - UpgradeAddonReleaseRequest
   * @returns UpgradeAddonReleaseResponse
   */
  async upgradeAddonRelease(request: $_model.UpgradeAddonReleaseRequest): Promise<$_model.UpgradeAddonReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeAddonReleaseWithOptions(request, runtime);
  }

  /**
   * Updates the feature information of an environment.
   * 
   * @param request - UpgradeEnvironmentFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeEnvironmentFeatureResponse
   */
  async upgradeEnvironmentFeatureWithOptions(request: $_model.UpgradeEnvironmentFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeEnvironmentFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunLang)) {
      query["AliyunLang"] = request.aliyunLang;
    }

    if (!$dara.isNull(request.environmentId)) {
      query["EnvironmentId"] = request.environmentId;
    }

    if (!$dara.isNull(request.featureName)) {
      query["FeatureName"] = request.featureName;
    }

    if (!$dara.isNull(request.featureVersion)) {
      query["FeatureVersion"] = request.featureVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.values)) {
      query["Values"] = request.values;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeEnvironmentFeature",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeEnvironmentFeatureResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeEnvironmentFeatureResponse({}));
  }

  /**
   * Updates the feature information of an environment.
   * 
   * @param request - UpgradeEnvironmentFeatureRequest
   * @returns UpgradeEnvironmentFeatureResponse
   */
  async upgradeEnvironmentFeature(request: $_model.UpgradeEnvironmentFeatureRequest): Promise<$_model.UpgradeEnvironmentFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeEnvironmentFeatureWithOptions(request, runtime);
  }

  /**
   * Uploads a SourceMap file to ARMS Browser Monitoring.
   * 
   * @param request - UploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadResponse
   */
  async uploadWithOptions(request: $_model.UploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.pid)) {
      query["Pid"] = request.pid;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.version)) {
      query["Version"] = request.version;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.file)) {
      body["File"] = request.file;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Upload",
      version: "2019-08-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadResponse>(await this.callApi(params, req, runtime), new $_model.UploadResponse({}));
  }

  /**
   * Uploads a SourceMap file to ARMS Browser Monitoring.
   * 
   * @param request - UploadRequest
   * @returns UploadResponse
   */
  async upload(request: $_model.UploadRequest): Promise<$_model.UploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.uploadWithOptions(request, runtime);
  }

}
