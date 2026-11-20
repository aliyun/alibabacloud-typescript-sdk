// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "Hologram";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("hologram", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Associates a follower instance.
   * 
   * @param request - BindLeaderInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindLeaderInstanceResponse
   */
  async bindLeaderInstanceWithOptions(instanceId: string, request: $_model.BindLeaderInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BindLeaderInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.leaderInstanceId)) {
      body["leaderInstanceId"] = request.leaderInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindLeaderInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/bindReadOnly`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindLeaderInstanceResponse>(await this.callApi(params, req, runtime), new $_model.BindLeaderInstanceResponse({}));
  }

  /**
   * Associates a follower instance.
   * 
   * @param request - BindLeaderInstanceRequest
   * @returns BindLeaderInstanceResponse
   */
  async bindLeaderInstance(instanceId: string, request: $_model.BindLeaderInstanceRequest): Promise<$_model.BindLeaderInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.bindLeaderInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      body["newResourceGroupId"] = request.newResourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tag/changeResourceGroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Updates a resource group.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDatabaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(instanceId: string, request: $_model.CreateDatabaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.permissionModel)) {
      body["permissionModel"] = request.permissionModel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabase",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createDatabase`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * Creates a database.
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(instanceId: string, request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatabaseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates an external database.
   * 
   * @param request - CreateExternalDatabaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExternalDatabaseResponse
   */
  async createExternalDatabaseWithOptions(instanceId: string, request: $_model.CreateExternalDatabaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExternalDatabaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.defaultUserMapping)) {
      body["defaultUserMapping"] = request.defaultUserMapping;
    }

    if (!$dara.isNull(request.externalConfig)) {
      body["externalConfig"] = request.externalConfig;
    }

    if (!$dara.isNull(request.metastoreType)) {
      body["metastoreType"] = request.metastoreType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExternalDatabase",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createExternalDatabase`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExternalDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateExternalDatabaseResponse({}));
  }

  /**
   * Creates an external database.
   * 
   * @param request - CreateExternalDatabaseRequest
   * @returns CreateExternalDatabaseResponse
   */
  async createExternalDatabase(instanceId: string, request: $_model.CreateExternalDatabaseRequest): Promise<$_model.CreateExternalDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExternalDatabaseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a compute group.
   * 
   * @param request - CreateHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateHoloWarehouseResponse
   */
  async createHoloWarehouseWithOptions(instanceId: string, request: $_model.CreateHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterCount)) {
      body["clusterCount"] = request.clusterCount;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.CreateHoloWarehouseResponse({}));
  }

  /**
   * Creates a compute group.
   * 
   * @param request - CreateHoloWarehouseRequest
   * @returns CreateHoloWarehouseResponse
   */
  async createHoloWarehouse(instanceId: string, request: $_model.CreateHoloWarehouseRequest): Promise<$_model.CreateHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl"> - For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * - When you create a Hologres instance, you must specify the region and zone where the instance resides. A region may contain multiple zones, as follows:
   *  ```
   *     cn-hangzhou (Hangzhou): cn-hangzhou-h, cn-hangzhou-j, cn-hangzhou-k
   *     cn-shanghai (Shanghai): cn-shanghai-e, cn-shanghai-f, cn-shanghai-l
   *     cn-beijing (Beijing): cn-beijing-i, cn-beijing-g, cn-beijing-l
   *     cn-zhangjiakou (Zhangjiakou): cn-zhangjiakou-b
   *     cn-shenzhen (Shenzhen): cn-shenzhen-d, cn-shenzhen-f, cn-shenzhen-e
   *     cn-wulanchabu (Ulanqab): cn-wulanchabu-a
   *     cn-hongkong (Hong Kong): cn-hongkong-b, cn-hongkong-d
   *     cn-shanghai-finance-1 (Shanghai Finance Cloud): cn-shanghai-finance-1z, cn-shanghai-finance-1f
   *     cn-hangzhou-finance (Hangzhou Finance Cloud): cn-hangzhou-finance-k
   *     cn-shenzhen-finance-1 (Shenzhen Finance Cloud): cn-shenzhen-finance-1d
   *     ap-northeast-1 (Japan): ap-northeast-1a
   *     ap-southeast-1 (Singapore): ap-southeast-1c, ap-southeast-1a
   *     ap-southeast-3 (Kuala Lumpur): ap-southeast-3b
   *     ap-southeast-5 (Jakarta): ap-southeast-5b
   *     eu-central-1 (Frankfurt): eu-central-1a
   *     us-east-1 (Silicon Valley): us-east-1a
   *     us-west-1 (Virginia): us-west-1b
   * ```
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["autoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.coldStorageSize)) {
      body["coldStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.enableServerlessComputing)) {
      body["enableServerlessComputing"] = request.enableServerlessComputing;
    }

    if (!$dara.isNull(request.gatewayCount)) {
      body["gatewayCount"] = request.gatewayCount;
    }

    if (!$dara.isNull(request.initialDatabases)) {
      body["initialDatabases"] = request.initialDatabases;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.leaderInstanceId)) {
      body["leaderInstanceId"] = request.leaderInstanceId;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      body["pricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.storageSize)) {
      body["storageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.storageType)) {
      body["storageType"] = request.storageType;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["vSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates an instance.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl"> - For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * - When you create a Hologres instance, you must specify the region and zone where the instance resides. A region may contain multiple zones, as follows:
   *  ```
   *     cn-hangzhou (Hangzhou): cn-hangzhou-h, cn-hangzhou-j, cn-hangzhou-k
   *     cn-shanghai (Shanghai): cn-shanghai-e, cn-shanghai-f, cn-shanghai-l
   *     cn-beijing (Beijing): cn-beijing-i, cn-beijing-g, cn-beijing-l
   *     cn-zhangjiakou (Zhangjiakou): cn-zhangjiakou-b
   *     cn-shenzhen (Shenzhen): cn-shenzhen-d, cn-shenzhen-f, cn-shenzhen-e
   *     cn-wulanchabu (Ulanqab): cn-wulanchabu-a
   *     cn-hongkong (Hong Kong): cn-hongkong-b, cn-hongkong-d
   *     cn-shanghai-finance-1 (Shanghai Finance Cloud): cn-shanghai-finance-1z, cn-shanghai-finance-1f
   *     cn-hangzhou-finance (Hangzhou Finance Cloud): cn-hangzhou-finance-k
   *     cn-shenzhen-finance-1 (Shenzhen Finance Cloud): cn-shenzhen-finance-1d
   *     ap-northeast-1 (Japan): ap-northeast-1a
   *     ap-southeast-1 (Singapore): ap-southeast-1c, ap-southeast-1a
   *     ap-southeast-3 (Kuala Lumpur): ap-southeast-3b
   *     ap-southeast-5 (Jakarta): ap-southeast-5b
   *     eu-central-1 (Frankfurt): eu-central-1a
   *     us-east-1 (Silicon Valley): us-east-1a
   *     us-west-1 (Virginia): us-west-1b
   * ```
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * Creates an instance backup.
   * 
   * @param request - CreateManualBackupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateManualBackupResponse
   */
  async createManualBackupWithOptions(request: $_model.CreateManualBackupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateManualBackupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateManualBackup",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups/manual`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateManualBackupResponse>(await this.callApi(params, req, runtime), new $_model.CreateManualBackupResponse({}));
  }

  /**
   * Creates an instance backup.
   * 
   * @param request - CreateManualBackupRequest
   * @returns CreateManualBackupResponse
   */
  async createManualBackup(request: $_model.CreateManualBackupRequest): Promise<$_model.CreateManualBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createManualBackupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a model service that enables AI functions to invoke models and supports the creation of two types of models: Alibaba Cloud Model Studio models and Hologres AI nodes. If you use Hologres AI, you must separately purchase AI node resources.
   * 
   * @remarks
   * Creating a model service requires multiple parameters. For model creation of Alibaba Cloud Model Studio models, invoke ListModelCatalog to query model parameters. For model creation of Hologres AI nodes, invoke GetAvailableModelsResource to query model parameters.
   * 
   * @param request - CreateModelServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelServiceResponse
   */
  async createModelServiceWithOptions(instanceId: string, request: $_model.CreateModelServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.gpu)) {
      body["gpu"] = request.gpu;
    }

    if (!$dara.isNull(request.gpuMemory)) {
      body["gpuMemory"] = request.gpuMemory;
    }

    if (!$dara.isNull(request.memory)) {
      body["memory"] = request.memory;
    }

    if (!$dara.isNull(request.modelParams)) {
      body["modelParams"] = request.modelParams;
    }

    if (!$dara.isNull(request.modelServiceName)) {
      body["modelServiceName"] = request.modelServiceName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.provider)) {
      body["provider"] = request.provider;
    }

    if (!$dara.isNull(request.serviceCount)) {
      body["serviceCount"] = request.serviceCount;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelService",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createModelService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelServiceResponse({}));
  }

  /**
   * Creates a model service that enables AI functions to invoke models and supports the creation of two types of models: Alibaba Cloud Model Studio models and Hologres AI nodes. If you use Hologres AI, you must separately purchase AI node resources.
   * 
   * @remarks
   * Creating a model service requires multiple parameters. For model creation of Alibaba Cloud Model Studio models, invoke ListModelCatalog to query model parameters. For model creation of Hologres AI nodes, invoke GetAvailableModelsResource to query model parameters.
   * 
   * @param request - CreateModelServiceRequest
   * @returns CreateModelServiceResponse
   */
  async createModelService(instanceId: string, request: $_model.CreateModelServiceRequest): Promise<$_model.CreateModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelServiceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Adds a RAM user or STS account to a Hologres instance as an instance account. After the account is added, you can log on to the instance by using the RAM or STS identity.
   * 
   * @param request - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(instanceId: string, request: $_model.CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.superUser)) {
      body["superUser"] = request.superUser;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Adds a RAM user or STS account to a Hologres instance as an instance account. After the account is added, you can log on to the instance by using the RAM or STS identity.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(instanceId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a warehouse.
   * 
   * @param request - CreateWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarehouseResponse
   */
  async createWarehouseWithOptions(instanceId: string, request: $_model.CreateWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarehouseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.warehouseName)) {
      body["warehouseName"] = request.warehouseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/warehouse/${$dara.URL.percentEncode(instanceId)}/create`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarehouseResponse({}));
  }

  /**
   * Creates a warehouse.
   * 
   * @param request - CreateWarehouseRequest
   * @returns CreateWarehouseResponse
   */
  async createWarehouse(instanceId: string, request: $_model.CreateWarehouseRequest): Promise<$_model.CreateWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a time-based elastic plan.
   * 
   * @remarks
   * Creates a time-based elastic plan for a compute group of a specified Hologres instance. Before calling this operation, call ListWarehouses to obtain the compute group ID.
   * 
   * @param request - CreateWarehouseScheduleTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWarehouseScheduleTaskResponse
   */
  async createWarehouseScheduleTaskWithOptions(instanceId: string, request: $_model.CreateWarehouseScheduleTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWarehouseScheduleTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.elasticCu)) {
      body["elasticCu"] = request.elasticCu;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.warehouseId)) {
      body["warehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWarehouseScheduleTask",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/createWarehouseScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWarehouseScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateWarehouseScheduleTaskResponse({}));
  }

  /**
   * Creates a time-based elastic plan.
   * 
   * @remarks
   * Creates a time-based elastic plan for a compute group of a specified Hologres instance. Before calling this operation, call ListWarehouses to obtain the compute group ID.
   * 
   * @param request - CreateWarehouseScheduleTaskRequest
   * @returns CreateWarehouseScheduleTaskResponse
   */
  async createWarehouseScheduleTask(instanceId: string, request: $_model.CreateWarehouseScheduleTaskRequest): Promise<$_model.CreateWarehouseScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWarehouseScheduleTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a backup.
   * 
   * @param request - DeleteBackupDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupDataResponse
   */
  async deleteBackupDataWithOptions(id: string, request: $_model.DeleteBackupDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackupData",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups/${$dara.URL.percentEncode(id)}/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupDataResponse({}));
  }

  /**
   * Deletes a backup.
   * 
   * @param request - DeleteBackupDataRequest
   * @returns DeleteBackupDataResponse
   */
  async deleteBackupData(id: string, request: $_model.DeleteBackupDataRequest): Promise<$_model.DeleteBackupDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBackupDataWithOptions(id, request, headers, runtime);
  }

  /**
   * Deletes a compute group.
   * 
   * @param request - DeleteHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteHoloWarehouseResponse
   */
  async deleteHoloWarehouseWithOptions(instanceId: string, request: $_model.DeleteHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/deleteHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteHoloWarehouseResponse({}));
  }

  /**
   * Deletes a compute group.
   * 
   * @param request - DeleteHoloWarehouseRequest
   * @returns DeleteHoloWarehouseResponse
   */
  async deleteHoloWarehouse(instanceId: string, request: $_model.DeleteHoloWarehouseRequest): Promise<$_model.DeleteHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * >Warning: Before calling this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</warning>
   * <props="china">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * - Only pay-as-you-go instances can be released.
   * <props="china">- To unsubscribe from a subscription instance, go to the Unsubscription page in the Alibaba Cloud Management Console. For more information, see [Unsubscribe from subscription instances](https://www.alibabacloud.com/help/en/hologres/product-overview/subscription).
   * 
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, request: $_model.DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * >Warning: Before calling this operation, carefully read the feature documentation to ensure that you fully understand the prerequisites and the impacts of this operation.</warning>
   * <props="china">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * - Only pay-as-you-go instances can be released.
   * <props="china">- To unsubscribe from a subscription instance, go to the Unsubscription page in the Alibaba Cloud Management Console. For more information, see [Unsubscribe from subscription instances](https://www.alibabacloud.com/help/en/hologres/product-overview/subscription).
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string, request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes node resources. All models deployed on the node will be deleted and cannot be recovered.
   * 
   * @param request - DeleteModelResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResourceResponse
   */
  async deleteModelResourceWithOptions(instanceId: string, request: $_model.DeleteModelResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aiInstanceId)) {
      query["aiInstanceId"] = request.aiInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelResource",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/deleteModelResource`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResourceResponse({}));
  }

  /**
   * Deletes node resources. All models deployed on the node will be deleted and cannot be recovered.
   * 
   * @param request - DeleteModelResourceRequest
   * @returns DeleteModelResourceResponse
   */
  async deleteModelResource(instanceId: string, request: $_model.DeleteModelResourceRequest): Promise<$_model.DeleteModelResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelResourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a model service.
   * 
   * @param request - DeleteModelServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelServiceResponse
   */
  async deleteModelServiceWithOptions(instanceId: string, request: $_model.DeleteModelServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelServiceName)) {
      query["modelServiceName"] = request.modelServiceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelService",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/deleteModelService`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelServiceResponse({}));
  }

  /**
   * Deletes a model service.
   * 
   * @param request - DeleteModelServiceRequest
   * @returns DeleteModelServiceResponse
   */
  async deleteModelService(instanceId: string, request: $_model.DeleteModelServiceRequest): Promise<$_model.DeleteModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelServiceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes an elastic plan for a compute group.
   * 
   * @remarks
   * >Warning: Before calling this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
   * <props="china">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * - Only pay-as-you-go instances can be released.
   * <props="china">- To unsubscribe from a subscription instance, go to the Unsubscription Management page in the Alibaba Cloud Management Console. For more information, see [Unsubscribe from a subscription instance](https://www.alibabacloud.com/help/en/hologres/product-overview/subscription).
   * 
   * @param request - DeleteWarehouseScheduleTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWarehouseScheduleTaskResponse
   */
  async deleteWarehouseScheduleTaskWithOptions(instanceId: string, request: $_model.DeleteWarehouseScheduleTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWarehouseScheduleTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.warehouseId)) {
      body["warehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWarehouseScheduleTask",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/deleteWarehouseScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWarehouseScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWarehouseScheduleTaskResponse({}));
  }

  /**
   * Deletes an elastic plan for a compute group.
   * 
   * @remarks
   * >Warning: Before calling this operation, read the feature documentation to ensure that you fully understand the prerequisites and impacts.
   * <props="china">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- After a Hologres instance is released, the data and objects in the instance cannot be recovered. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * - Only pay-as-you-go instances can be released.
   * <props="china">- To unsubscribe from a subscription instance, go to the Unsubscription Management page in the Alibaba Cloud Management Console. For more information, see [Unsubscribe from a subscription instance](https://www.alibabacloud.com/help/en/hologres/product-overview/subscription).
   * 
   * @param request - DeleteWarehouseScheduleTaskRequest
   * @returns DeleteWarehouseScheduleTaskResponse
   */
  async deleteWarehouseScheduleTask(instanceId: string, request: $_model.DeleteWarehouseScheduleTaskRequest): Promise<$_model.DeleteWarehouseScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWarehouseScheduleTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Lists all tags.
   * 
   * @param request - DescribeTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTagsResponse
   */
  async describeTagsWithOptions(request: $_model.DescribeTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagsOnly)) {
      query["tagsOnly"] = request.tagsOnly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTags",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTagsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTagsResponse({}));
  }

  /**
   * Lists all tags.
   * 
   * @param request - DescribeTagsRequest
   * @returns DescribeTagsResponse
   */
  async describeTags(request: $_model.DescribeTagsRequest): Promise<$_model.DescribeTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTagsWithOptions(request, headers, runtime);
  }

  /**
   * Shuts down the ExecuteStatement API access for a specified Hologres instance.
   * 
   * @remarks
   * Disables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is disabled, all ExecuteStatement calls return an error. You can call EnableExecuteStatement to re-enable it.
   * 
   * @param request - DisableExecuteStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableExecuteStatementResponse
   */
  async disableExecuteStatementWithOptions(instanceId: string, request: $_model.DisableExecuteStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableExecuteStatementResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableExecuteStatement",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/disableExecuteStatement`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableExecuteStatementResponse>(await this.callApi(params, req, runtime), new $_model.DisableExecuteStatementResponse({}));
  }

  /**
   * Shuts down the ExecuteStatement API access for a specified Hologres instance.
   * 
   * @remarks
   * Disables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is disabled, all ExecuteStatement calls return an error. You can call EnableExecuteStatement to re-enable it.
   * 
   * @param request - DisableExecuteStatementRequest
   * @returns DisableExecuteStatementResponse
   */
  async disableExecuteStatement(instanceId: string, request: $_model.DisableExecuteStatementRequest): Promise<$_model.DisableExecuteStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableExecuteStatementWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Disables data lake acceleration.
   * 
   * @param request - DisableHiveAccessRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableHiveAccessResponse
   */
  async disableHiveAccessWithOptions(instanceId: string, request: $_model.DisableHiveAccessRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableHiveAccessResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableHiveAccess",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/disableHiveAccess`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableHiveAccessResponse>(await this.callApi(params, req, runtime), new $_model.DisableHiveAccessResponse({}));
  }

  /**
   * Disables data lake acceleration.
   * 
   * @param request - DisableHiveAccessRequest
   * @returns DisableHiveAccessResponse
   */
  async disableHiveAccess(instanceId: string, request: $_model.DisableHiveAccessRequest): Promise<$_model.DisableHiveAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Disables O&M logs.
   * 
   * @param request - DisableOperationEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableOperationEventResponse
   */
  async disableOperationEventWithOptions(instanceId: string, request: $_model.DisableOperationEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableOperationEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableOperationEvent",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/disableOperationEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableOperationEventResponse>(await this.callApi(params, req, runtime), new $_model.DisableOperationEventResponse({}));
  }

  /**
   * Disables O&M logs.
   * 
   * @param request - DisableOperationEventRequest
   * @returns DisableOperationEventResponse
   */
  async disableOperationEvent(instanceId: string, request: $_model.DisableOperationEventRequest): Promise<$_model.DisableOperationEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableOperationEventWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Disables SSL.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSSLResponse
   */
  async disableSSLWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSSLResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSSL",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/disableSSL`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSSLResponse>(await this.callApi(params, req, runtime), new $_model.DisableSSLResponse({}));
  }

  /**
   * Disables SSL.
   * @returns DisableSSLResponse
   */
  async disableSSL(instanceId: string): Promise<$_model.DisableSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSSLWithOptions(instanceId, headers, runtime);
  }

  /**
   * Disables the service account.
   * 
   * @remarks
   * Disables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is disabled, all ExecuteStatement calls return an error. You can call EnableExecuteStatement to re-enable it.
   * 
   * @param request - DisableSupportAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSupportAccountResponse
   */
  async disableSupportAccountWithOptions(instanceId: string, request: $_model.DisableSupportAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSupportAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSupportAccount",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/supportAccount/disable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSupportAccountResponse>(await this.callApi(params, req, runtime), new $_model.DisableSupportAccountResponse({}));
  }

  /**
   * Disables the service account.
   * 
   * @remarks
   * Disables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is disabled, all ExecuteStatement calls return an error. You can call EnableExecuteStatement to re-enable it.
   * 
   * @param request - DisableSupportAccountRequest
   * @returns DisableSupportAccountResponse
   */
  async disableSupportAccount(instanceId: string, request: $_model.DisableSupportAccountRequest): Promise<$_model.DisableSupportAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSupportAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Disables automatic elastic scaling.
   * 
   * @param request - DisableWarehouseAutoScaleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableWarehouseAutoScaleResponse
   */
  async disableWarehouseAutoScaleWithOptions(instanceId: string, request: $_model.DisableWarehouseAutoScaleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableWarehouseAutoScaleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableWarehouseAutoScale",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/disableWarehouseAutoScale`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableWarehouseAutoScaleResponse>(await this.callApi(params, req, runtime), new $_model.DisableWarehouseAutoScaleResponse({}));
  }

  /**
   * Disables automatic elastic scaling.
   * 
   * @param request - DisableWarehouseAutoScaleRequest
   * @returns DisableWarehouseAutoScaleResponse
   */
  async disableWarehouseAutoScale(instanceId: string, request: $_model.DisableWarehouseAutoScaleRequest): Promise<$_model.DisableWarehouseAutoScaleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableWarehouseAutoScaleWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Cancels an upgrade. The cancel upgrade button is enabled only for tasks that have not started or are in the pre_check state. Once a task enters the backup state or a subsequent state, the upgrade cannot be canceled.
   * 
   * @param request - DiscardUpgradeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiscardUpgradeResponse
   */
  async discardUpgradeWithOptions(instanceId: string, request: $_model.DiscardUpgradeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DiscardUpgradeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DiscardUpgrade",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgrade/discard`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiscardUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.DiscardUpgradeResponse({}));
  }

  /**
   * Cancels an upgrade. The cancel upgrade button is enabled only for tasks that have not started or are in the pre_check state. Once a task enters the backup state or a subsequent state, the upgrade cannot be canceled.
   * 
   * @param request - DiscardUpgradeRequest
   * @returns DiscardUpgradeResponse
   */
  async discardUpgrade(instanceId: string, request: $_model.DiscardUpgradeRequest): Promise<$_model.DiscardUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.discardUpgradeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes a RAM user or STS account from the Hologres account system. After deletion, the RAM user or STS account can no longer log on to the instance. To log on to the instance, call the CreateUser operation to add the user again.
   * 
   * @remarks
   * 删除实例内的用户。删除后该用户不能再登录实例，如需恢复请通过 CreateUser 重新添加。删除前需确认 userName：当前没有列举用户的 OpenAPI 接口，可通过 ExecuteStatement 执行 SELECT rolname FROM pg_roles 查询实例内已有角色，且不能删除当前发起调用的账号自身。
   * 
   * @param request - DropUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropUserResponse
   */
  async dropUserWithOptions(instanceId: string, request: $_model.DropUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.superUser)) {
      body["superUser"] = request.superUser;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DropUser",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/dropUser`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DropUserResponse>(await this.callApi(params, req, runtime), new $_model.DropUserResponse({}));
  }

  /**
   * Deletes a RAM user or STS account from the Hologres account system. After deletion, the RAM user or STS account can no longer log on to the instance. To log on to the instance, call the CreateUser operation to add the user again.
   * 
   * @remarks
   * 删除实例内的用户。删除后该用户不能再登录实例，如需恢复请通过 CreateUser 重新添加。删除前需确认 userName：当前没有列举用户的 OpenAPI 接口，可通过 ExecuteStatement 执行 SELECT rolname FROM pg_roles 查询实例内已有角色，且不能删除当前发起调用的账号自身。
   * 
   * @param request - DropUserRequest
   * @returns DropUserResponse
   */
  async dropUser(instanceId: string, request: $_model.DropUserRequest): Promise<$_model.DropUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropUserWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Enables SQL execution via OpenAPI for a specified Hologres instance.
   * 
   * @remarks
   * Enables SQL execution via OpenAPI for a specified Hologres instance. Once enabled, RAM accounts with the `hologram:ExecuteStatement` permission can execute SQL statements by calling the `ExecuteStatement` API. To query the current status, call the `GetExecuteStatementEnabled` API. To disable the feature, call the `DisableExecuteStatement` API.
   * 
   * @param request - EnableExecuteStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableExecuteStatementResponse
   */
  async enableExecuteStatementWithOptions(instanceId: string, request: $_model.EnableExecuteStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableExecuteStatementResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableExecuteStatement",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/enableExecuteStatement`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableExecuteStatementResponse>(await this.callApi(params, req, runtime), new $_model.EnableExecuteStatementResponse({}));
  }

  /**
   * Enables SQL execution via OpenAPI for a specified Hologres instance.
   * 
   * @remarks
   * Enables SQL execution via OpenAPI for a specified Hologres instance. Once enabled, RAM accounts with the `hologram:ExecuteStatement` permission can execute SQL statements by calling the `ExecuteStatement` API. To query the current status, call the `GetExecuteStatementEnabled` API. To disable the feature, call the `DisableExecuteStatement` API.
   * 
   * @param request - EnableExecuteStatementRequest
   * @returns EnableExecuteStatementResponse
   */
  async enableExecuteStatement(instanceId: string, request: $_model.EnableExecuteStatementRequest): Promise<$_model.EnableExecuteStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableExecuteStatementWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Enables data lake acceleration.
   * 
   * @param request - EnableHiveAccessRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableHiveAccessResponse
   */
  async enableHiveAccessWithOptions(instanceId: string, request: $_model.EnableHiveAccessRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableHiveAccessResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableHiveAccess",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/enableHiveAccess`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableHiveAccessResponse>(await this.callApi(params, req, runtime), new $_model.EnableHiveAccessResponse({}));
  }

  /**
   * Enables data lake acceleration.
   * 
   * @param request - EnableHiveAccessRequest
   * @returns EnableHiveAccessResponse
   */
  async enableHiveAccess(instanceId: string, request: $_model.EnableHiveAccessRequest): Promise<$_model.EnableHiveAccessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableHiveAccessWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Enables SSL.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSSLResponse
   */
  async enableSSLWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSSLResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSSL",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/enableSSL`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSSLResponse>(await this.callApi(params, req, runtime), new $_model.EnableSSLResponse({}));
  }

  /**
   * Enables SSL.
   * @returns EnableSSLResponse
   */
  async enableSSL(instanceId: string): Promise<$_model.EnableSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSSLWithOptions(instanceId, headers, runtime);
  }

  /**
   * Enables the service account.
   * 
   * @remarks
   * Enables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is enabled, RAM users that have the hologram:ExecuteStatement permission can execute SQL statements by calling the ExecuteStatement operation. You can call the GetExecuteStatementEnabled operation to query the current status and call the DisableExecuteStatement operation to disable the feature.
   * 
   * @param request - EnableSupportAccountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSupportAccountResponse
   */
  async enableSupportAccountWithOptions(instanceId: string, request: $_model.EnableSupportAccountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSupportAccountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.expireTime)) {
      body["expireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSupportAccount",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/supportAccount/enable`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSupportAccountResponse>(await this.callApi(params, req, runtime), new $_model.EnableSupportAccountResponse({}));
  }

  /**
   * Enables the service account.
   * 
   * @remarks
   * Enables the OpenAPI SQL execution feature for a specified Hologres instance. After the feature is enabled, RAM users that have the hologram:ExecuteStatement permission can execute SQL statements by calling the ExecuteStatement operation. You can call the GetExecuteStatementEnabled operation to query the current status and call the DisableExecuteStatement operation to disable the feature.
   * 
   * @param request - EnableSupportAccountRequest
   * @returns EnableSupportAccountResponse
   */
  async enableSupportAccount(instanceId: string, request: $_model.EnableSupportAccountRequest): Promise<$_model.EnableSupportAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSupportAccountWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Enables automatic elastic scaling.
   * 
   * @param request - EnableWarehouseAutoScaleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableWarehouseAutoScaleResponse
   */
  async enableWarehouseAutoScaleWithOptions(instanceId: string, request: $_model.EnableWarehouseAutoScaleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableWarehouseAutoScaleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxClusterCount)) {
      body["maxClusterCount"] = request.maxClusterCount;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableWarehouseAutoScale",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/enableWarehouseAutoScale`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableWarehouseAutoScaleResponse>(await this.callApi(params, req, runtime), new $_model.EnableWarehouseAutoScaleResponse({}));
  }

  /**
   * Enables automatic elastic scaling.
   * 
   * @param request - EnableWarehouseAutoScaleRequest
   * @returns EnableWarehouseAutoScaleResponse
   */
  async enableWarehouseAutoScale(instanceId: string, request: $_model.EnableWarehouseAutoScaleRequest): Promise<$_model.EnableWarehouseAutoScaleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableWarehouseAutoScaleWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Executes an SQL statement on a specified database by using OpenAPI and returns the result.
   * 
   * @remarks
   * This API is used to securely execute SQL statements on a Hologres instance by using OpenAPI.
   *   Before you begin, meet the following conditions:
   *   1. On the instance details page in the console, turn on the Allow SQL Execution by Using OpenAPI switch in the Data Security section.
   *   2. The RAM user used to invoke the API has been granted the hologram:ExecuteStatement permission.
   *   Statements such as SELECT, DDL, and DML are supported. The parameterized query feature with placeholders such as $1 and $2 is supported to prevent SQL injection. By default, a query returns a maximum of 200 rows (up to 1,000 rows) and 10 MB of data. Excess data is truncated, and the truncated field indicates the truncation. The timeout period for a single execution is 30 seconds.
   * 
   * @param request - ExecuteStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteStatementResponse
   */
  async executeStatementWithOptions(instanceId: string, request: $_model.ExecuteStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteStatementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dbName)) {
      body["dbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxBytes)) {
      body["maxBytes"] = request.maxBytes;
    }

    if (!$dara.isNull(request.maxRows)) {
      body["maxRows"] = request.maxRows;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.queryTimeout)) {
      body["queryTimeout"] = request.queryTimeout;
    }

    if (!$dara.isNull(request.sql)) {
      body["sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteStatement",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/executeStatement`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteStatementResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteStatementResponse({}));
  }

  /**
   * Executes an SQL statement on a specified database by using OpenAPI and returns the result.
   * 
   * @remarks
   * This API is used to securely execute SQL statements on a Hologres instance by using OpenAPI.
   *   Before you begin, meet the following conditions:
   *   1. On the instance details page in the console, turn on the Allow SQL Execution by Using OpenAPI switch in the Data Security section.
   *   2. The RAM user used to invoke the API has been granted the hologram:ExecuteStatement permission.
   *   Statements such as SELECT, DDL, and DML are supported. The parameterized query feature with placeholders such as $1 and $2 is supported to prevent SQL injection. By default, a query returns a maximum of 200 rows (up to 1,000 rows) and 10 MB of data. Excess data is truncated, and the truncated field indicates the truncation. The timeout period for a single execution is 30 seconds.
   * 
   * @param request - ExecuteStatementRequest
   * @returns ExecuteStatementResponse
   */
  async executeStatement(instanceId: string, request: $_model.ExecuteStatementRequest): Promise<$_model.ExecuteStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeStatementWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves certificate information.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCertificateAttributeResponse
   */
  async getCertificateAttributeWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCertificateAttributeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCertificateAttribute",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/certificateAttribute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCertificateAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetCertificateAttributeResponse({}));
  }

  /**
   * Retrieves certificate information.
   * @returns GetCertificateAttributeResponse
   */
  async getCertificateAttribute(instanceId: string): Promise<$_model.GetCertificateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCertificateAttributeWithOptions(instanceId, headers, runtime);
  }

  /**
   * Checks whether a specified Hologres instance allows SQL execution through OpenAPI.
   * 
   * @remarks
   * This operation checks if the "Allow SQL execution through OpenAPI" feature is enabled for a specified Hologres instance. Returns `true` if the feature is enabled, and `false` otherwise. If enabled, you can call the `ExecuteStatement` operation to execute SQL statements.
   * 
   * @param request - GetExecuteStatementEnabledRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteStatementEnabledResponse
   */
  async getExecuteStatementEnabledWithOptions(instanceId: string, request: $_model.GetExecuteStatementEnabledRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecuteStatementEnabledResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteStatementEnabled",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/executeStatementEnabled`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecuteStatementEnabledResponse>(await this.callApi(params, req, runtime), new $_model.GetExecuteStatementEnabledResponse({}));
  }

  /**
   * Checks whether a specified Hologres instance allows SQL execution through OpenAPI.
   * 
   * @remarks
   * This operation checks if the "Allow SQL execution through OpenAPI" feature is enabled for a specified Hologres instance. Returns `true` if the feature is enabled, and `false` otherwise. If enabled, you can call the `ExecuteStatement` operation to execute SQL statements.
   * 
   * @param request - GetExecuteStatementEnabledRequest
   * @returns GetExecuteStatementEnabledResponse
   */
  async getExecuteStatementEnabled(instanceId: string, request: $_model.GetExecuteStatementEnabledRequest): Promise<$_model.GetExecuteStatementEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExecuteStatementEnabledWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the HoloWeb logon permissions.
   * 
   * @remarks
   * Queries whether the feature that allows SQL execution through OpenAPI is enabled for a specified Hologres instance. A value of true indicates that the feature is enabled, and a value of false indicates that the feature is disabled. After the feature is enabled, you can execute SQL statements by calling the ExecuteStatement operation.
   * 
   * @param request - GetHoloWebLoginSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHoloWebLoginSettingResponse
   */
  async getHoloWebLoginSettingWithOptions(instanceId: string, request: $_model.GetHoloWebLoginSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetHoloWebLoginSettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHoloWebLoginSetting",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/getHoloWebLoginSetting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHoloWebLoginSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetHoloWebLoginSettingResponse({}));
  }

  /**
   * Queries the HoloWeb logon permissions.
   * 
   * @remarks
   * Queries whether the feature that allows SQL execution through OpenAPI is enabled for a specified Hologres instance. A value of true indicates that the feature is enabled, and a value of false indicates that the feature is disabled. After the feature is enabled, you can execute SQL statements by calling the ExecuteStatement operation.
   * 
   * @param request - GetHoloWebLoginSettingRequest
   * @returns GetHoloWebLoginSettingResponse
   */
  async getHoloWebLoginSetting(instanceId: string, request: $_model.GetHoloWebLoginSettingRequest): Promise<$_model.GetHoloWebLoginSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHoloWebLoginSettingWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Retrieves the details of an instance.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the list of large model services bound to a Hologres instance.
   * 
   * @param request - GetInstanceModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceModelResponse
   */
  async getInstanceModelWithOptions(instanceId: string, request: $_model.GetInstanceModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceModel",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/getInstanceModel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceModelResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceModelResponse({}));
  }

  /**
   * Queries the list of large model services bound to a Hologres instance.
   * 
   * @param request - GetInstanceModelRequest
   * @returns GetInstanceModelResponse
   */
  async getInstanceModel(instanceId: string, request: $_model.GetInstanceModelRequest): Promise<$_model.GetInstanceModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceModelWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the last upgrade history.
   * 
   * @param request - GetLastUpgradeRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLastUpgradeRecordResponse
   */
  async getLastUpgradeRecordWithOptions(instanceId: string, request: $_model.GetLastUpgradeRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLastUpgradeRecordResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLastUpgradeRecord",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/lastUpgradeRecord`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLastUpgradeRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetLastUpgradeRecordResponse({}));
  }

  /**
   * Retrieves the last upgrade history.
   * 
   * @param request - GetLastUpgradeRecordRequest
   * @returns GetLastUpgradeRecordResponse
   */
  async getLastUpgradeRecord(instanceId: string, request: $_model.GetLastUpgradeRecordRequest): Promise<$_model.GetLastUpgradeRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLastUpgradeRecordWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the root certificate.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRootCertificateResponse
   */
  async getRootCertificateWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRootCertificateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRootCertificate",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/rootCertificate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRootCertificateResponse>(await this.callApi(params, req, runtime), new $_model.GetRootCertificateResponse({}));
  }

  /**
   * Retrieves the root certificate.
   * @returns GetRootCertificateResponse
   */
  async getRootCertificate(instanceId: string): Promise<$_model.GetRootCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRootCertificateWithOptions(instanceId, headers, runtime);
  }

  /**
   * Retrieves the backup configuration.
   * 
   * @param request - GetScheduledBackupConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScheduledBackupConfigResponse
   */
  async getScheduledBackupConfigWithOptions(request: $_model.GetScheduledBackupConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetScheduledBackupConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["scheduleType"] = request.scheduleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScheduledBackupConfig",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups/scheduledConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScheduledBackupConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetScheduledBackupConfigResponse({}));
  }

  /**
   * Retrieves the backup configuration.
   * 
   * @param request - GetScheduledBackupConfigRequest
   * @returns GetScheduledBackupConfigResponse
   */
  async getScheduledBackupConfig(request: $_model.GetScheduledBackupConfigRequest): Promise<$_model.GetScheduledBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduledBackupConfigWithOptions(request, headers, runtime);
  }

  /**
   * Queries the upgrade status.
   * 
   * @param request - GetUpgradeStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpgradeStatusResponse
   */
  async getUpgradeStatusWithOptions(instanceId: string, request: $_model.GetUpgradeStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUpgradeStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUpgradeStatus",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgrade/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUpgradeStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetUpgradeStatusResponse({}));
  }

  /**
   * Queries the upgrade status.
   * 
   * @param request - GetUpgradeStatusRequest
   * @returns GetUpgradeStatusResponse
   */
  async getUpgradeStatus(instanceId: string, request: $_model.GetUpgradeStatusRequest): Promise<$_model.GetUpgradeStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeStatusWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries whether an instance can be upgraded.
   * 
   * @param request - GetUpgradeableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUpgradeableResponse
   */
  async getUpgradeableWithOptions(instanceId: string, request: $_model.GetUpgradeableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUpgradeableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUpgradeable",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgradeable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUpgradeableResponse>(await this.callApi(params, req, runtime), new $_model.GetUpgradeableResponse({}));
  }

  /**
   * Queries whether an instance can be upgraded.
   * 
   * @param request - GetUpgradeableRequest
   * @returns GetUpgradeableResponse
   */
  async getUpgradeable(instanceId: string, request: $_model.GetUpgradeableRequest): Promise<$_model.GetUpgradeableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUpgradeableWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the details of a compute group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWarehouseDetailResponse
   */
  async getWarehouseDetailWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWarehouseDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWarehouseDetail",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/getWarehouseDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWarehouseDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetWarehouseDetailResponse({}));
  }

  /**
   * Queries the details of a compute group.
   * @returns GetWarehouseDetailResponse
   */
  async getWarehouseDetail(instanceId: string): Promise<$_model.GetWarehouseDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarehouseDetailWithOptions(instanceId, headers, runtime);
  }

  /**
   * Grants database permissions.
   * 
   * @param request - GrantDatabasePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantDatabasePermissionResponse
   */
  async grantDatabasePermissionWithOptions(instanceId: string, request: $_model.GrantDatabasePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantDatabasePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantDatabasePermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/grantDatabasePermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantDatabasePermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantDatabasePermissionResponse({}));
  }

  /**
   * Grants database permissions.
   * 
   * @param request - GrantDatabasePermissionRequest
   * @returns GrantDatabasePermissionResponse
   */
  async grantDatabasePermission(instanceId: string, request: $_model.GrantDatabasePermissionRequest): Promise<$_model.GrantDatabasePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantDatabasePermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Grants permissions on a database.
   * 
   * @param request - GrantSchemaPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantSchemaPermissionResponse
   */
  async grantSchemaPermissionWithOptions(instanceId: string, request: $_model.GrantSchemaPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantSchemaPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.schemaName)) {
      body["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantSchemaPermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/grantSchemaPermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantSchemaPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantSchemaPermissionResponse({}));
  }

  /**
   * Grants permissions on a database.
   * 
   * @param request - GrantSchemaPermissionRequest
   * @returns GrantSchemaPermissionResponse
   */
  async grantSchemaPermission(instanceId: string, request: $_model.GrantSchemaPermissionRequest): Promise<$_model.GrantSchemaPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantSchemaPermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Grants table permissions to a specified user.
   * 
   * @param request - GrantTablePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantTablePermissionResponse
   */
  async grantTablePermissionWithOptions(instanceId: string, request: $_model.GrantTablePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantTablePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allTable)) {
      body["allTable"] = request.allTable;
    }

    if (!$dara.isNull(request.columnNames)) {
      body["columnNames"] = request.columnNames;
    }

    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.schemaName)) {
      body["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["tableName"] = request.tableName;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantTablePermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/grantTablePermission`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantTablePermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantTablePermissionResponse({}));
  }

  /**
   * Grants table permissions to a specified user.
   * 
   * @param request - GrantTablePermissionRequest
   * @returns GrantTablePermissionResponse
   */
  async grantTablePermission(instanceId: string, request: $_model.GrantTablePermissionRequest): Promise<$_model.GrantTablePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantTablePermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of backups. A backup is a full data snapshot of an instance up to the snapshot time. You can fully restore the original data by purchasing a new instance.
   * 
   * @param request - ListBackupDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBackupDataResponse
   */
  async listBackupDataWithOptions(request: $_model.ListBackupDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListBackupDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.backupType)) {
      query["backupType"] = request.backupType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBackupData",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBackupDataResponse>(await this.callApi(params, req, runtime), new $_model.ListBackupDataResponse({}));
  }

  /**
   * Queries a list of backups. A backup is a full data snapshot of an instance up to the snapshot time. You can fully restore the original data by purchasing a new instance.
   * 
   * @param request - ListBackupDataRequest
   * @returns ListBackupDataResponse
   */
  async listBackupData(request: $_model.ListBackupDataRequest): Promise<$_model.ListBackupDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBackupDataWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of databases.
   * 
   * @param request - ListDatabasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(instanceId: string, request: $_model.ListDatabasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.external)) {
      query["external"] = request.external;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listDatabases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * Retrieves a list of databases.
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(instanceId: string, request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the read-only secondary instances.
   * 
   * @remarks
   * Retrieves a list of read-only secondary instances bound to a specified Hologres primary instance. instanceId is a path parameter and must be provided when you call this operation.
   * 
   * @param request - ListFollowerInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFollowerInstancesResponse
   */
  async listFollowerInstancesWithOptions(instanceId: string, request: $_model.ListFollowerInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFollowerInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFollowerInstances",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listFollowerInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFollowerInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListFollowerInstancesResponse({}));
  }

  /**
   * Retrieves the read-only secondary instances.
   * 
   * @remarks
   * Retrieves a list of read-only secondary instances bound to a specified Hologres primary instance. instanceId is a path parameter and must be provided when you call this operation.
   * 
   * @param request - ListFollowerInstancesRequest
   * @returns ListFollowerInstancesResponse
   */
  async listFollowerInstances(instanceId: string, request: $_model.ListFollowerInstancesRequest): Promise<$_model.ListFollowerInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFollowerInstancesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the list of AI node resources.
   * 
   * @remarks
   * ## Request description
   * - Retrieves information about deployed model services on a specific Hologres instance, including but not limited to resource usage such as CPU, GPU, and memory.
   * - The `instanceId` parameter is optional. If not provided, the information of all related instances is returned by default.
   * - This operation applies to Hologres AI nodes. Some parameters may be invalid or inapplicable for non-AI nodes.
   * - Make sure that you fully understand the [billing methods and pricing of Alibaba Cloud Hologres](https://help.aliyun.com/document_detail/113666.html) before you call this operation.
   * 
   * @param request - ListInstanceModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceModelResponse
   */
  async listInstanceModelWithOptions(request: $_model.ListInstanceModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceModel",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/rpc/listInstanceModel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceModelResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceModelResponse({}));
  }

  /**
   * Queries the list of AI node resources.
   * 
   * @remarks
   * ## Request description
   * - Retrieves information about deployed model services on a specific Hologres instance, including but not limited to resource usage such as CPU, GPU, and memory.
   * - The `instanceId` parameter is optional. If not provided, the information of all related instances is returned by default.
   * - This operation applies to Hologres AI nodes. Some parameters may be invalid or inapplicable for non-AI nodes.
   * - Make sure that you fully understand the [billing methods and pricing of Alibaba Cloud Hologres](https://help.aliyun.com/document_detail/113666.html) before you call this operation.
   * 
   * @param request - ListInstanceModelRequest
   * @returns ListInstanceModelResponse
   */
  async listInstanceModel(request: $_model.ListInstanceModelRequest): Promise<$_model.ListInstanceModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceModelWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cmsInstanceType)) {
      body["cmsInstanceType"] = request.cmsInstanceType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Retrieves a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of available primary instance IDs.
   * 
   * @remarks
   * Retrieves a list of primary instances that can be bound to a specified Hologres secondary instance. The `instanceId` parameter is a path parameter and is required.
   * 
   * @param request - ListLeaderInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLeaderInstancesResponse
   */
  async listLeaderInstancesWithOptions(instanceId: string, request: $_model.ListLeaderInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLeaderInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLeaderInstances",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/primaryInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLeaderInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListLeaderInstancesResponse({}));
  }

  /**
   * Retrieves a list of available primary instance IDs.
   * 
   * @remarks
   * Retrieves a list of primary instances that can be bound to a specified Hologres secondary instance. The `instanceId` parameter is a path parameter and is required.
   * 
   * @param request - ListLeaderInstancesRequest
   * @returns ListLeaderInstancesResponse
   */
  async listLeaderInstances(instanceId: string, request: $_model.ListLeaderInstancesRequest): Promise<$_model.ListLeaderInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLeaderInstancesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the zones to which an instance can be migrated. Three-zone instances support self-service migration between zones.
   * 
   * @param request - ListMigrationZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMigrationZonesResponse
   */
  async listMigrationZonesWithOptions(instanceId: string, request: $_model.ListMigrationZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMigrationZonesResponse> {
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
      action: "ListMigrationZones",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listMigrationZones`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMigrationZonesResponse>(await this.callApi(params, req, runtime), new $_model.ListMigrationZonesResponse({}));
  }

  /**
   * Queries the zones to which an instance can be migrated. Three-zone instances support self-service migration between zones.
   * 
   * @param request - ListMigrationZonesRequest
   * @returns ListMigrationZonesResponse
   */
  async listMigrationZones(instanceId: string, request: $_model.ListMigrationZonesRequest): Promise<$_model.ListMigrationZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMigrationZonesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Lists models.
   * 
   * @param request - ListModelCatalogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelCatalogResponse
   */
  async listModelCatalogWithOptions(instanceId: string, request: $_model.ListModelCatalogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelCatalogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.provider)) {
      query["provider"] = request.provider;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelCatalog",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listModelCatalog`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelCatalogResponse>(await this.callApi(params, req, runtime), new $_model.ListModelCatalogResponse({}));
  }

  /**
   * Lists models.
   * 
   * @param request - ListModelCatalogRequest
   * @returns ListModelCatalogResponse
   */
  async listModelCatalog(instanceId: string, request: $_model.ListModelCatalogRequest): Promise<$_model.ListModelCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelCatalogWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of operation events based on specified conditions, supporting pagination and sorting.
   * 
   * @param request - ListOperationEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOperationEventsResponse
   */
  async listOperationEventsWithOptions(request: $_model.ListOperationEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOperationEventsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventName)) {
      body["eventName"] = request.eventName;
    }

    if (!$dara.isNull(request.eventNameDesc)) {
      body["eventNameDesc"] = request.eventNameDesc;
    }

    if (!$dara.isNull(request.eventType)) {
      body["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scheduleTimeDesc)) {
      body["scheduleTimeDesc"] = request.scheduleTimeDesc;
    }

    if (!$dara.isNull(request.state)) {
      body["state"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOperationEvents",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/listOperationEvents`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOperationEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListOperationEventsResponse({}));
  }

  /**
   * Queries a list of operation events based on specified conditions, supporting pagination and sorting.
   * 
   * @param request - ListOperationEventsRequest
   * @returns ListOperationEventsResponse
   */
  async listOperationEvents(request: $_model.ListOperationEventsRequest): Promise<$_model.ListOperationEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOperationEventsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of all Hologres regions.
   * 
   * @param request - ListRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: $_model.ListRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/regions/listRegions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries the list of all Hologres regions.
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of upgradable versions.
   * 
   * @param request - ListUpgradeReleaseVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUpgradeReleaseVersionsResponse
   */
  async listUpgradeReleaseVersionsWithOptions(instanceId: string, request: $_model.ListUpgradeReleaseVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUpgradeReleaseVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUpgradeReleaseVersions",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgrade/listReleaseVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUpgradeReleaseVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListUpgradeReleaseVersionsResponse({}));
  }

  /**
   * Retrieves the list of upgradable versions.
   * 
   * @param request - ListUpgradeReleaseVersionsRequest
   * @returns ListUpgradeReleaseVersionsResponse
   */
  async listUpgradeReleaseVersions(instanceId: string, request: $_model.ListUpgradeReleaseVersionsRequest): Promise<$_model.ListUpgradeReleaseVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUpgradeReleaseVersionsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the elastic scheduling events of a specified instance within a given time range.
   * 
   * @remarks
   * ## Request description
   * - This operation retrieves a list of elastic scaling events for compute groups of a specified instance.
   * - The `startTime` and `endTime` parameters specify the time range for the query. The default values are three days ago and the current time, respectively.
   * - The `pageSize` and `pageNumber` parameters are used for paging control. The maximum value of `pageSize` is 100.
   * - If the `elasticType` parameter is not provided, elastic scaling events of all types are returned.
   * 
   * @param request - ListWarehouseScheduleEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarehouseScheduleEventResponse
   */
  async listWarehouseScheduleEventWithOptions(instanceId: string, request: $_model.ListWarehouseScheduleEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarehouseScheduleEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticType)) {
      body["elasticType"] = request.elasticType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarehouseScheduleEvent",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listWarehouseScheduleEvent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarehouseScheduleEventResponse>(await this.callApi(params, req, runtime), new $_model.ListWarehouseScheduleEventResponse({}));
  }

  /**
   * Queries the elastic scheduling events of a specified instance within a given time range.
   * 
   * @remarks
   * ## Request description
   * - This operation retrieves a list of elastic scaling events for compute groups of a specified instance.
   * - The `startTime` and `endTime` parameters specify the time range for the query. The default values are three days ago and the current time, respectively.
   * - The `pageSize` and `pageNumber` parameters are used for paging control. The maximum value of `pageSize` is 100.
   * - If the `elasticType` parameter is not provided, elastic scaling events of all types are returned.
   * 
   * @param request - ListWarehouseScheduleEventRequest
   * @returns ListWarehouseScheduleEventResponse
   */
  async listWarehouseScheduleEvent(instanceId: string, request: $_model.ListWarehouseScheduleEventRequest): Promise<$_model.ListWarehouseScheduleEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehouseScheduleEventWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves the list of time-based elastic plan tasks for all compute groups in a specified instance.
   * 
   * @param request - ListWarehouseScheduleTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarehouseScheduleTaskResponse
   */
  async listWarehouseScheduleTaskWithOptions(instanceId: string, request: $_model.ListWarehouseScheduleTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarehouseScheduleTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarehouseScheduleTask",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listWarehouseScheduleTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarehouseScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListWarehouseScheduleTaskResponse({}));
  }

  /**
   * Retrieves the list of time-based elastic plan tasks for all compute groups in a specified instance.
   * 
   * @param request - ListWarehouseScheduleTaskRequest
   * @returns ListWarehouseScheduleTaskResponse
   */
  async listWarehouseScheduleTask(instanceId: string, request: $_model.ListWarehouseScheduleTaskRequest): Promise<$_model.ListWarehouseScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehouseScheduleTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Retrieves a list of compute groups.
   * 
   * @remarks
   * 获取指定计算组型实例下的计算组列表。instanceId 需为计算组型（InstanceType 为 Warehouse）实例，可通过 ListInstances 查询获取。返回结果中的 Name 为计算组名称、Status 为计算组状态（如 kRunning 表示运行中），可用于 RestartHoloWarehouse、SuspendHoloWarehouse 等接口。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWarehousesResponse
   */
  async listWarehousesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWarehousesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWarehouses",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/listWarehouses`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWarehousesResponse>(await this.callApi(params, req, runtime), new $_model.ListWarehousesResponse({}));
  }

  /**
   * Retrieves a list of compute groups.
   * 
   * @remarks
   * 获取指定计算组型实例下的计算组列表。instanceId 需为计算组型（InstanceType 为 Warehouse）实例，可通过 ListInstances 查询获取。返回结果中的 Name 为计算组名称、Status 为计算组状态（如 kRunning 表示运行中），可用于 RestartHoloWarehouse、SuspendHoloWarehouse 等接口。
   * @returns ListWarehousesResponse
   */
  async listWarehouses(instanceId: string): Promise<$_model.ListWarehousesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehousesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Migrates an instance to the destination zone. Only three-zone instances are supported. Storage migration is not required, and the instance is started directly in the destination zone in approximately 5 minutes.
   * 
   * @param request - MigrateInstanceZoneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateInstanceZoneResponse
   */
  async migrateInstanceZoneWithOptions(instanceId: string, request: $_model.MigrateInstanceZoneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateInstanceZoneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateInstanceZone",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/migrateInstanceZone`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateInstanceZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateInstanceZoneResponse({}));
  }

  /**
   * Migrates an instance to the destination zone. Only three-zone instances are supported. Storage migration is not required, and the instance is started directly in the destination zone in approximately 5 minutes.
   * 
   * @param request - MigrateInstanceZoneRequest
   * @returns MigrateInstanceZoneResponse
   */
  async migrateInstanceZone(instanceId: string, request: $_model.MigrateInstanceZoneRequest): Promise<$_model.MigrateInstanceZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateInstanceZoneWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Initiates pre-upgrade preparations. An evaluation is required before the upgrade. If the evaluation passes, the upgrade can proceed. Otherwise, contact technical support for a manual upgrade.
   * 
   * @param request - PrepareUpgradeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrepareUpgradeResponse
   */
  async prepareUpgradeWithOptions(instanceId: string, request: $_model.PrepareUpgradeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PrepareUpgradeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrepareUpgrade",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgrade/prepare`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrepareUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.PrepareUpgradeResponse({}));
  }

  /**
   * Initiates pre-upgrade preparations. An evaluation is required before the upgrade. If the evaluation passes, the upgrade can proceed. Otherwise, contact technical support for a manual upgrade.
   * 
   * @param request - PrepareUpgradeRequest
   * @returns PrepareUpgradeResponse
   */
  async prepareUpgrade(instanceId: string, request: $_model.PrepareUpgradeRequest): Promise<$_model.PrepareUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.prepareUpgradeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Balances the shards of a compute group.
   * 
   * @param request - RebalanceHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RebalanceHoloWarehouseResponse
   */
  async rebalanceHoloWarehouseWithOptions(instanceId: string, request: $_model.RebalanceHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RebalanceHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RebalanceHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/rebalanceHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RebalanceHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.RebalanceHoloWarehouseResponse({}));
  }

  /**
   * Balances the shards of a compute group.
   * 
   * @param request - RebalanceHoloWarehouseRequest
   * @returns RebalanceHoloWarehouseResponse
   */
  async rebalanceHoloWarehouse(instanceId: string, request: $_model.RebalanceHoloWarehouseRequest): Promise<$_model.RebalanceHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rebalanceHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Renames a compute group.
   * 
   * @param request - RenameHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameHoloWarehouseResponse
   */
  async renameHoloWarehouseWithOptions(instanceId: string, request: $_model.RenameHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenameHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.newWarehouseName)) {
      body["newWarehouseName"] = request.newWarehouseName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/renameHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.RenameHoloWarehouseResponse({}));
  }

  /**
   * Renames a compute group.
   * 
   * @param request - RenameHoloWarehouseRequest
   * @returns RenameHoloWarehouseResponse
   */
  async renameHoloWarehouse(instanceId: string, request: $_model.RenameHoloWarehouseRequest): Promise<$_model.RenameHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Renews an instance manually. You can also enable monthly auto-renewal during the renewal.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.</warning>
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * <props="china">- For more information about Hologres renewal, see [Renewal management](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals).
   * <props="intl">- For more information about Hologres renewal, see [Renewal management](https://www.alibabacloud.com/help/zh/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.38e731c9VAwtDP).
   * - Renewal applies only to subscription (PrePaid) instances.
   * 
   * @param request - RenewInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(instanceId: string, request: $_model.RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Renews an instance manually. You can also enable monthly auto-renewal during the renewal.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.</warning>
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * <props="china">- For more information about Hologres renewal, see [Renewal management](https://www.alibabacloud.com/help/en/hologres/product-overview/manage-renewals).
   * <props="intl">- For more information about Hologres renewal, see [Renewal management](https://www.alibabacloud.com/help/zh/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.38e731c9VAwtDP).
   * - Renewal applies only to subscription (PrePaid) instances.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(instanceId: string, request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates an SSL certificate.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewSSLCertificateResponse
   */
  async renewSSLCertificateWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewSSLCertificateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewSSLCertificate",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/renewSSLCertificate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewSSLCertificateResponse>(await this.callApi(params, req, runtime), new $_model.RenewSSLCertificateResponse({}));
  }

  /**
   * Updates an SSL certificate.
   * @returns RenewSSLCertificateResponse
   */
  async renewSSLCertificate(instanceId: string): Promise<$_model.RenewSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewSSLCertificateWithOptions(instanceId, headers, runtime);
  }

  /**
   * Restarts a compute group.
   * 
   * @remarks
   * 重启指定计算组。前置条件：实例处于运行中（Running）状态，可通过 GetInstance 查询 InstanceStatus；计算组处于运行中状态（kRunning），可通过 ListWarehouses 查询 Status 获取计算组名称和当前状态。调用需要实例的 Superuser 权限，重启为异步操作，调用后可再次通过 ListWarehouses 轮询 Status 确认是否完成。
   * 
   * @param request - RestartHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartHoloWarehouseResponse
   */
  async restartHoloWarehouseWithOptions(instanceId: string, request: $_model.RestartHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/restartHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.RestartHoloWarehouseResponse({}));
  }

  /**
   * Restarts a compute group.
   * 
   * @remarks
   * 重启指定计算组。前置条件：实例处于运行中（Running）状态，可通过 GetInstance 查询 InstanceStatus；计算组处于运行中状态（kRunning），可通过 ListWarehouses 查询 Status 获取计算组名称和当前状态。调用需要实例的 Superuser 权限，重启为异步操作，调用后可再次通过 ListWarehouses 轮询 Status 确认是否完成。
   * 
   * @param request - RestartHoloWarehouseRequest
   * @returns RestartHoloWarehouseResponse
   */
  async restartHoloWarehouse(instanceId: string, request: $_model.RestartHoloWarehouseRequest): Promise<$_model.RestartHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Restarts a Hologres instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts a Hologres instance.
   * @returns RestartInstanceResponse
   */
  async restartInstance(instanceId: string): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Resumes a compute group from the stopped state to the normal state.
   * 
   * @param request - ResumeHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeHoloWarehouseResponse
   */
  async resumeHoloWarehouseWithOptions(instanceId: string, request: $_model.ResumeHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/resumeHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.ResumeHoloWarehouseResponse({}));
  }

  /**
   * Resumes a compute group from the stopped state to the normal state.
   * 
   * @param request - ResumeHoloWarehouseRequest
   * @returns ResumeHoloWarehouseResponse
   */
  async resumeHoloWarehouse(instanceId: string, request: $_model.ResumeHoloWarehouseRequest): Promise<$_model.ResumeHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Resumes a paused instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceResponse({}));
  }

  /**
   * Resumes a paused instance.
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(instanceId: string): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Revokes database authorization.
   * 
   * @param request - RevokeDatabasePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeDatabasePermissionResponse
   */
  async revokeDatabasePermissionWithOptions(instanceId: string, request: $_model.RevokeDatabasePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeDatabasePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeDatabasePermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/revokeDatabasePermission`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeDatabasePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeDatabasePermissionResponse({}));
  }

  /**
   * Revokes database authorization.
   * 
   * @param request - RevokeDatabasePermissionRequest
   * @returns RevokeDatabasePermissionResponse
   */
  async revokeDatabasePermission(instanceId: string, request: $_model.RevokeDatabasePermissionRequest): Promise<$_model.RevokeDatabasePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeDatabasePermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Revokes schema authorization.
   * 
   * @param request - RevokeSchemaPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeSchemaPermissionResponse
   */
  async revokeSchemaPermissionWithOptions(instanceId: string, request: $_model.RevokeSchemaPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeSchemaPermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.schemaName)) {
      body["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeSchemaPermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/revokeSchemaPermission`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeSchemaPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeSchemaPermissionResponse({}));
  }

  /**
   * Revokes schema authorization.
   * 
   * @param request - RevokeSchemaPermissionRequest
   * @returns RevokeSchemaPermissionResponse
   */
  async revokeSchemaPermission(instanceId: string, request: $_model.RevokeSchemaPermissionRequest): Promise<$_model.RevokeSchemaPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeSchemaPermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Revokes table permissions.
   * 
   * @param request - RevokeTablePermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTablePermissionResponse
   */
  async revokeTablePermissionWithOptions(instanceId: string, request: $_model.RevokeTablePermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTablePermissionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allTable)) {
      body["allTable"] = request.allTable;
    }

    if (!$dara.isNull(request.columnNames)) {
      body["columnNames"] = request.columnNames;
    }

    if (!$dara.isNull(request.databaseName)) {
      body["databaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.privileges)) {
      body["privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.schemaName)) {
      body["schemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["tableName"] = request.tableName;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeTablePermission",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/revokeTablePermission`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTablePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeTablePermissionResponse({}));
  }

  /**
   * Revokes table permissions.
   * 
   * @param request - RevokeTablePermissionRequest
   * @returns RevokeTablePermissionResponse
   */
  async revokeTablePermission(instanceId: string, request: $_model.RevokeTablePermissionRequest): Promise<$_model.RevokeTablePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeTablePermissionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Scales a compute group.
   * 
   * @param request - ScaleHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleHoloWarehouseResponse
   */
  async scaleHoloWarehouseWithOptions(instanceId: string, request: $_model.ScaleHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterCount)) {
      body["clusterCount"] = request.clusterCount;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/scaleHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.ScaleHoloWarehouseResponse({}));
  }

  /**
   * Scales a compute group.
   * 
   * @param request - ScaleHoloWarehouseRequest
   * @returns ScaleHoloWarehouseResponse
   */
  async scaleHoloWarehouse(instanceId: string, request: $_model.ScaleHoloWarehouseRequest): Promise<$_model.ScaleHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the specifications and storage space of an instance.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * <props="china">- The instance is unavailable while its compute resources are being changed. Changing instance storage resources of the instance does not affect its normal use. Do not change instance specifications frequently. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * <props="intl">- The instance is unavailable while its compute resources are being changed. Changing instance storage resources of the instance does not affect its normal use. Do not change instance specifications frequently. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/zh/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * 
   * @param request - ScaleInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleInstanceResponse
   */
  async scaleInstanceWithOptions(instanceId: string, request: $_model.ScaleInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ScaleInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.coldStorageSize)) {
      body["coldStorageSize"] = request.coldStorageSize;
    }

    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.enableServerlessComputing)) {
      body["enableServerlessComputing"] = request.enableServerlessComputing;
    }

    if (!$dara.isNull(request.gatewayCount)) {
      body["gatewayCount"] = request.gatewayCount;
    }

    if (!$dara.isNull(request.scaleType)) {
      body["scaleType"] = request.scaleType;
    }

    if (!$dara.isNull(request.storageSize)) {
      body["storageSize"] = request.storageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/scale`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScaleInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ScaleInstanceResponse({}));
  }

  /**
   * Modifies the specifications and storage space of an instance.
   * 
   * @remarks
   * >Warning: This API operation incurs fees. Make sure that you fully understand the billing methods and pricing of Hologres before you call this operation.
   * <props="china">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/en/hologres/product-overview/billing-overview).
   * <props="intl">- For more information about Hologres billing, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * <props="china">- The instance is unavailable while its compute resources are being changed. Changing instance storage resources of the instance does not affect its normal use. Do not change instance specifications frequently. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * <props="intl">- The instance is unavailable while its compute resources are being changed. Changing instance storage resources of the instance does not affect its normal use. Do not change instance specifications frequently. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/zh/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
   * 
   * @param request - ScaleInstanceRequest
   * @returns ScaleInstanceResponse
   */
  async scaleInstance(instanceId: string, request: $_model.ScaleInstanceRequest): Promise<$_model.ScaleInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Pauses an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Pauses an instance.
   * @returns StopInstanceResponse
   */
  async stopInstance(instanceId: string): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Stops a compute group.
   * 
   * @remarks
   * 停止指定计算组。前置条件：instanceId 为计算组型（InstanceType 为 Warehouse）且处于运行中状态的实例，可通过 ListInstances 获取；name 为 ListWarehouses 返回的计算组名称，该计算组需处于运行中状态（kRunning）。若该计算组是 Table Group 的主计算组且存在从计算组，则无法停止。调用需要实例的 Superuser 权限，停止为异步操作。
   * 
   * @param request - SuspendHoloWarehouseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendHoloWarehouseResponse
   */
  async suspendHoloWarehouseWithOptions(instanceId: string, request: $_model.SuspendHoloWarehouseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendHoloWarehouseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendHoloWarehouse",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/suspendHoloWarehouse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendHoloWarehouseResponse>(await this.callApi(params, req, runtime), new $_model.SuspendHoloWarehouseResponse({}));
  }

  /**
   * Stops a compute group.
   * 
   * @remarks
   * 停止指定计算组。前置条件：instanceId 为计算组型（InstanceType 为 Warehouse）且处于运行中状态的实例，可通过 ListInstances 获取；name 为 ListWarehouses 返回的计算组名称，该计算组需处于运行中状态（kRunning）。若该计算组是 Table Group 的主计算组且存在从计算组，则无法停止。调用需要实例的 Superuser 权限，停止为异步操作。
   * 
   * @param request - SuspendHoloWarehouseRequest
   * @returns SuspendHoloWarehouseResponse
   */
  async suspendHoloWarehouse(instanceId: string, request: $_model.SuspendHoloWarehouseRequest): Promise<$_model.SuspendHoloWarehouseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.suspendHoloWarehouseWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Adds a tag.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      body["tagOwnerUid"] = request.tagOwnerUid;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds a tag.
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
   * Dissociates a primary instance from a secondary instance.
   * 
   * @param request - UnBindLeaderInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnBindLeaderInstanceResponse
   */
  async unBindLeaderInstanceWithOptions(instanceId: string, request: $_model.UnBindLeaderInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnBindLeaderInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnBindLeaderInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/unBindReadOnly`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnBindLeaderInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UnBindLeaderInstanceResponse({}));
  }

  /**
   * Dissociates a primary instance from a secondary instance.
   * 
   * @param request - UnBindLeaderInstanceRequest
   * @returns UnBindLeaderInstanceResponse
   */
  async unBindLeaderInstance(instanceId: string, request: $_model.UnBindLeaderInstanceRequest): Promise<$_model.UnBindLeaderInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unBindLeaderInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Deletes instance tags.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      body["tagKeys"] = request.tagKeys;
    }

    if (!$dara.isNull(request.tagOwnerUid)) {
      body["tagOwnerUid"] = request.tagOwnerUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/tag/unTag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Deletes instance tags.
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
   * Enables automatic minor version upgrades. After this feature is enabled, the instance is automatically upgraded during the time window.
   * 
   * @param request - UpdateAutoUpgradeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutoUpgradeResponse
   */
  async updateAutoUpgradeWithOptions(instanceId: string, request: $_model.UpdateAutoUpgradeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutoUpgradeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoUpgrade)) {
      body["autoUpgrade"] = request.autoUpgrade;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutoUpgrade",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/autoUpgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutoUpgradeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutoUpgradeResponse({}));
  }

  /**
   * Enables automatic minor version upgrades. After this feature is enabled, the instance is automatically upgraded during the time window.
   * 
   * @param request - UpdateAutoUpgradeRequest
   * @returns UpdateAutoUpgradeResponse
   */
  async updateAutoUpgrade(instanceId: string, request: $_model.UpdateAutoUpgradeRequest): Promise<$_model.UpdateAutoUpgradeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAutoUpgradeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates the description of a backup.
   * 
   * @param request - UpdateBackupDataDescRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupDataDescResponse
   */
  async updateBackupDataDescWithOptions(id: string, request: $_model.UpdateBackupDataDescRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupDataDescResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupDataDesc",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups/${$dara.URL.percentEncode(id)}/desc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupDataDescResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupDataDescResponse({}));
  }

  /**
   * Updates the description of a backup.
   * 
   * @param request - UpdateBackupDataDescRequest
   * @returns UpdateBackupDataDescResponse
   */
  async updateBackupDataDesc(id: string, request: $_model.UpdateBackupDataDescRequest): Promise<$_model.UpdateBackupDataDescResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBackupDataDescWithOptions(id, request, headers, runtime);
  }

  /**
   * Modifies the HoloWeb logon permissions.
   * 
   * @remarks
   * Model creation for a model service requires a large number of parameters. If you are performing model creation for a Model Studio model, invoke ListModelCatalog to query model parameters. If you are using a Hologres AI node, invoke GetAvailableModelsResource to query model parameters.
   * 
   * @param request - UpdateHoloWebLoginSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHoloWebLoginSettingResponse
   */
  async updateHoloWebLoginSettingWithOptions(instanceId: string, request: $_model.UpdateHoloWebLoginSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHoloWebLoginSettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowExternalAccountsLogin)) {
      body["allowExternalAccountsLogin"] = request.allowExternalAccountsLogin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHoloWebLoginSetting",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/updateHoloWebLoginSetting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHoloWebLoginSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHoloWebLoginSettingResponse({}));
  }

  /**
   * Modifies the HoloWeb logon permissions.
   * 
   * @remarks
   * Model creation for a model service requires a large number of parameters. If you are performing model creation for a Model Studio model, invoke ListModelCatalog to query model parameters. If you are using a Hologres AI node, invoke GetAvailableModelsResource to query model parameters.
   * 
   * @param request - UpdateHoloWebLoginSettingRequest
   * @returns UpdateHoloWebLoginSettingResponse
   */
  async updateHoloWebLoginSetting(instanceId: string, request: $_model.UpdateHoloWebLoginSettingRequest): Promise<$_model.UpdateHoloWebLoginSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHoloWebLoginSettingWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceNameWithOptions(instanceId: string, request: $_model.UpdateInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceName",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/instanceName`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNameResponse({}));
  }

  /**
   * Modifies the name of an instance.
   * 
   * @param request - UpdateInstanceNameRequest
   * @returns UpdateInstanceNameResponse
   */
  async updateInstanceName(instanceId: string, request: $_model.UpdateInstanceNameRequest): Promise<$_model.UpdateInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNameWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the network type of an instance.
   * 
   * @param request - UpdateInstanceNetworkTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNetworkTypeResponse
   */
  async updateInstanceNetworkTypeWithOptions(instanceId: string, request: $_model.UpdateInstanceNetworkTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNetworkTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.anyTunnelToSingleTunnel)) {
      body["anyTunnelToSingleTunnel"] = request.anyTunnelToSingleTunnel;
    }

    if (!$dara.isNull(request.networkTypes)) {
      body["networkTypes"] = request.networkTypes;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["vSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vpcOwnerId)) {
      body["vpcOwnerId"] = request.vpcOwnerId;
    }

    if (!$dara.isNull(request.vpcRegionId)) {
      body["vpcRegionId"] = request.vpcRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceNetworkType",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/network`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNetworkTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNetworkTypeResponse({}));
  }

  /**
   * Modifies the network type of an instance.
   * 
   * @param request - UpdateInstanceNetworkTypeRequest
   * @returns UpdateInstanceNetworkTypeResponse
   */
  async updateInstanceNetworkType(instanceId: string, request: $_model.UpdateInstanceNetworkTypeRequest): Promise<$_model.UpdateInstanceNetworkTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceNetworkTypeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the port number.
   * 
   * @param request - UpdateInstancePortRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstancePortResponse
   */
  async updateInstancePortWithOptions(instanceId: string, request: $_model.UpdateInstancePortRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstancePortResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.port)) {
      body["port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstancePort",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/updatePort`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstancePortResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstancePortResponse({}));
  }

  /**
   * Modifies the port number.
   * 
   * @param request - UpdateInstancePortRequest
   * @returns UpdateInstancePortResponse
   */
  async updateInstancePort(instanceId: string, request: $_model.UpdateInstancePortRequest): Promise<$_model.UpdateInstancePortResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstancePortWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Sets the maintenance window for an instance to perform system maintenance.
   * 
   * @param request - UpdateMaintenanceWindowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMaintenanceWindowResponse
   */
  async updateMaintenanceWindowWithOptions(instanceId: string, request: $_model.UpdateMaintenanceWindowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMaintenanceWindowResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMaintenanceWindow",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/maintenanceWindow`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMaintenanceWindowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMaintenanceWindowResponse({}));
  }

  /**
   * Sets the maintenance window for an instance to perform system maintenance.
   * 
   * @param request - UpdateMaintenanceWindowRequest
   * @returns UpdateMaintenanceWindowResponse
   */
  async updateMaintenanceWindow(instanceId: string, request: $_model.UpdateMaintenanceWindowRequest): Promise<$_model.UpdateMaintenanceWindowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateMaintenanceWindowWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a model creation service. This operation applies only to Hologres AI.
   * 
   * @param request - UpdateModelServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelServiceResponse
   */
  async updateModelServiceWithOptions(instanceId: string, request: $_model.UpdateModelServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!$dara.isNull(request.gpu)) {
      body["gpu"] = request.gpu;
    }

    if (!$dara.isNull(request.memory)) {
      body["memory"] = request.memory;
    }

    if (!$dara.isNull(request.modelServiceName)) {
      body["modelServiceName"] = request.modelServiceName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.serviceCount)) {
      body["serviceCount"] = request.serviceCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelService",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/updateModelService`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelServiceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelServiceResponse({}));
  }

  /**
   * Creates a model creation service. This operation applies only to Hologres AI.
   * 
   * @param request - UpdateModelServiceRequest
   * @returns UpdateModelServiceResponse
   */
  async updateModelService(instanceId: string, request: $_model.UpdateModelServiceRequest): Promise<$_model.UpdateModelServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelServiceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Updates the execution time of an O&M event.
   * 
   * @param request - UpdateOperationEventScheduleTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOperationEventScheduleTimeResponse
   */
  async updateOperationEventScheduleTimeWithOptions(instanceId: string, request: $_model.UpdateOperationEventScheduleTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOperationEventScheduleTimeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      body["scheduleTime"] = request.scheduleTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOperationEventScheduleTime",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/updateOperationEventScheduleTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOperationEventScheduleTimeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOperationEventScheduleTimeResponse({}));
  }

  /**
   * Updates the execution time of an O&M event.
   * 
   * @param request - UpdateOperationEventScheduleTimeRequest
   * @returns UpdateOperationEventScheduleTimeResponse
   */
  async updateOperationEventScheduleTime(instanceId: string, request: $_model.UpdateOperationEventScheduleTimeRequest): Promise<$_model.UpdateOperationEventScheduleTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOperationEventScheduleTimeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Configures the backup policy. You can specify multiple fixed days of the week to start instance backups on a weekly cycle, such as Monday, Wednesday, and Friday at 20:00:00. You can also configure the number of completed backups to retain. Expired backups are automatically deleted.
   * 
   * @param request - UpdateScheduledBackupConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledBackupConfigResponse
   */
  async updateScheduledBackupConfigWithOptions(request: $_model.UpdateScheduledBackupConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduledBackupConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataKeepQuantity)) {
      body["dataKeepQuantity"] = request.dataKeepQuantity;
    }

    if (!$dara.isNull(request.dstRegion)) {
      body["dstRegion"] = request.dstRegion;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.hour)) {
      body["hour"] = request.hour;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.manualDataKeepQuantity)) {
      body["manualDataKeepQuantity"] = request.manualDataKeepQuantity;
    }

    if (!$dara.isNull(request.scheduleType)) {
      body["scheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.week)) {
      body["week"] = request.week;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledBackupConfig",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/backups/scheduledConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduledBackupConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduledBackupConfigResponse({}));
  }

  /**
   * Configures the backup policy. You can specify multiple fixed days of the week to start instance backups on a weekly cycle, such as Monday, Wednesday, and Friday at 20:00:00. You can also configure the number of completed backups to retain. Expired backups are automatically deleted.
   * 
   * @param request - UpdateScheduledBackupConfigRequest
   * @returns UpdateScheduledBackupConfigResponse
   */
  async updateScheduledBackupConfig(request: $_model.UpdateScheduledBackupConfigRequest): Promise<$_model.UpdateScheduledBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateScheduledBackupConfigWithOptions(request, headers, runtime);
  }

  /**
   * Updates the time-based elastic plan for a compute group.
   * 
   * @remarks
   * 更新计算组分时弹性计划。前置条件：instanceId 对应实例需处于运行中（Running）状态，可通过 GetInstance 查询 InstanceStatus；warehouseId 可通过 ListWarehouses 查询返回的 Id 获取。
   * 
   * @param request - UpdateWarehouseScheduleTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWarehouseScheduleTaskResponse
   */
  async updateWarehouseScheduleTaskWithOptions(instanceId: string, request: $_model.UpdateWarehouseScheduleTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWarehouseScheduleTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elasticCu)) {
      body["elasticCu"] = request.elasticCu;
    }

    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.warehouseId)) {
      body["warehouseId"] = request.warehouseId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWarehouseScheduleTask",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/updateWarehouseScheduleTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWarehouseScheduleTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWarehouseScheduleTaskResponse({}));
  }

  /**
   * Updates the time-based elastic plan for a compute group.
   * 
   * @remarks
   * 更新计算组分时弹性计划。前置条件：instanceId 对应实例需处于运行中（Running）状态，可通过 GetInstance 查询 InstanceStatus；warehouseId 可通过 ListWarehouses 查询返回的 Id 获取。
   * 
   * @param request - UpdateWarehouseScheduleTaskRequest
   * @returns UpdateWarehouseScheduleTaskResponse
   */
  async updateWarehouseScheduleTask(instanceId: string, request: $_model.UpdateWarehouseScheduleTaskRequest): Promise<$_model.UpdateWarehouseScheduleTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWarehouseScheduleTaskWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Upgrades an instance. If the preparation succeeds, the instance can start the upgrade immediately.
   * 
   * @param request - UpgradeInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstanceWithOptions(instanceId: string, request: $_model.UpgradeInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.upgradeTime)) {
      query["upgradeTime"] = request.upgradeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstance",
      version: "2022-06-01",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${$dara.URL.percentEncode(instanceId)}/upgrade`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeInstanceResponse({}));
  }

  /**
   * Upgrades an instance. If the preparation succeeds, the instance can start the upgrade immediately.
   * 
   * @param request - UpgradeInstanceRequest
   * @returns UpgradeInstanceResponse
   */
  async upgradeInstance(instanceId: string, request: $_model.UpgradeInstanceRequest): Promise<$_model.UpgradeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeInstanceWithOptions(instanceId, request, headers, runtime);
  }

}
