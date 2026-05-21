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
   * 绑定主实例
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
   * 绑定主实例
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
   * 创建db
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
   * 创建db
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
   * 创建外部db
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
   * 创建外部db
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
   * Creates a virtual warehouse.
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
   * Creates a virtual warehouse.
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
   * Creates a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance).
   * *   When you purchase a Hologres instance, you must specify the region and zone in which the Hologres instance resides. A region may correspond to multiple zones. Example:
   * <!---->
   *     cn-hangzhou: cn-hangzhou-h, cn-hangzhou-j
   *        cn-shanghai: cn-shanghai-e, cn-shanghai-f
   *        cn-beijing: cn-beijing-i, cn-beijing-g
   *        cn-zhangjiakou: cn-zhangjiakou-b
   *        cn-shenzhen: cn-shenzhen-e
   *        cn-hongkong: cn-hongkong-b
   *        cn-shanghai-finance-1: cn-shanghai-finance-1z
   *        ap-northeast-1: ap-northeast-1a
   *        ap-southeast-1: ap-southeast-1c
   *        ap-southeast-3: ap-southeast-3b
   *        ap-southeast-5: ap-southeast-5b
   *        ap-south-1: ap-south-1b
   *        eu-central-1: eu-central-1a
   *        us-east-1: us-east-1a
   *        us-west-1: us-west-1b
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
   * Creates a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing details of Hologres, see [Pricing](https://www.alibabacloud.com/help/en/hologres/developer-reference/api-hologram-2022-06-01-createinstance).
   * *   When you purchase a Hologres instance, you must specify the region and zone in which the Hologres instance resides. A region may correspond to multiple zones. Example:
   * <!---->
   *     cn-hangzhou: cn-hangzhou-h, cn-hangzhou-j
   *        cn-shanghai: cn-shanghai-e, cn-shanghai-f
   *        cn-beijing: cn-beijing-i, cn-beijing-g
   *        cn-zhangjiakou: cn-zhangjiakou-b
   *        cn-shenzhen: cn-shenzhen-e
   *        cn-hongkong: cn-hongkong-b
   *        cn-shanghai-finance-1: cn-shanghai-finance-1z
   *        ap-northeast-1: ap-northeast-1a
   *        ap-southeast-1: ap-southeast-1c
   *        ap-southeast-3: ap-southeast-3b
   *        ap-southeast-5: ap-southeast-5b
   *        ap-south-1: ap-south-1b
   *        eu-central-1: eu-central-1a
   *        us-east-1: us-east-1a
   *        us-west-1: us-west-1b
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
   * 创建手动备份
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
   * 创建手动备份
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
   * 创建模型服务
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
   * 创建模型服务
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
   * 添加用户
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
   * 添加用户
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
   * 创建warehouse
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
   * 创建warehouse
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
   * 创建分时弹性计划
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
   * 创建分时弹性计划
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
   * 删除备份
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
   * 删除备份
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
   * Deletes a virtual warehouse.
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
   * Deletes a virtual warehouse.
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
   * Deletes a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
   * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * *   You can delete only pay-as-you-go instances.
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
   * Deletes a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, read the documentation and make sure that you understand the prerequisites and impacts of this operation.
   * *   After you delete a Hologres instance, data and objects in the instance cannot be restored. Proceed with caution. For more information, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview?spm=a2c63.p38356.0.0.efc33b87i5pDl7).
   * *   You can delete only pay-as-you-go instances.
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
   * 删除模型资源
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
   * 删除模型资源
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
   * 创建模型服务
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
   * 创建模型服务
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
   * 删除计算组弹性计划
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
   * 删除计算组弹性计划
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
   * 暂停实例
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
   * 暂停实例
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
   * 关闭OpenAPI执行SQL功能
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
   * 关闭OpenAPI执行SQL功能
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
   * 取消执行计划
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
   * 取消执行计划
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
   * 关闭SSL
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
   * 关闭SSL
   * @returns DisableSSLResponse
   */
  async disableSSL(instanceId: string): Promise<$_model.DisableSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableSSLWithOptions(instanceId, headers, runtime);
  }

  /**
   * 关闭服务账号
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
   * 关闭服务账号
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
   * 关闭自动弹性
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
   * 关闭自动弹性
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
   * 取消升级
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
   * 取消升级
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
   * 删除用户
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
   * 删除用户
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
   * 开启或关闭OpenAPI执行SQL功能
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
   * 开启或关闭OpenAPI执行SQL功能
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
   * 打开SSL
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
   * 打开SSL
   * @returns EnableSSLResponse
   */
  async enableSSL(instanceId: string): Promise<$_model.EnableSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableSSLWithOptions(instanceId, headers, runtime);
  }

  /**
   * 打开服务账号
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
   * 打开服务账号
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
   * 开启自动弹性
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
   * 开启自动弹性
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
   * SQL执行
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
   * SQL执行
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
   * 获得证书信息
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
   * 获得证书信息
   * @returns GetCertificateAttributeResponse
   */
  async getCertificateAttribute(instanceId: string): Promise<$_model.GetCertificateAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCertificateAttributeWithOptions(instanceId, headers, runtime);
  }

  /**
   * 查询实例是否已开启OpenAPI执行SQL功能
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
   * 查询实例是否已开启OpenAPI执行SQL功能
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
   * 获取holoweb登陆权限
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
   * 获取holoweb登陆权限
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
   * Obtains the details of an instance.
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
   * Obtains the details of an instance.
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 模型信息
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
   * 模型信息
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
   * 获取上次升级历史
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
   * 获取上次升级历史
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
   * 获得根证书
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
   * 获得根证书
   * @returns GetRootCertificateResponse
   */
  async getRootCertificate(instanceId: string): Promise<$_model.GetRootCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRootCertificateWithOptions(instanceId, headers, runtime);
  }

  /**
   * 获取周期备份配置
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
   * 获取周期备份配置
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
   * 获取升级状态
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
   * 获取升级状态
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
   * 是否可升级
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
   * 是否可升级
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
   * Queries details of a virtual warehouse instance.
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
   * Queries details of a virtual warehouse instance.
   * @returns GetWarehouseDetailResponse
   */
  async getWarehouseDetail(instanceId: string): Promise<$_model.GetWarehouseDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWarehouseDetailWithOptions(instanceId, headers, runtime);
  }

  /**
   * DB授权
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
   * DB授权
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
   * DB授权
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
   * DB授权
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
   * DB授权
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
   * DB授权
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
   * Queries a list of backups. A backup is a full data snapshot of an instance at the end of the snapshot time. You can purchase another instance to completely restore the original data.
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
   * Queries a list of backups. A backup is a full data snapshot of an instance at the end of the snapshot time. You can purchase another instance to completely restore the original data.
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
   * 获取DB列表
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
   * 获取DB列表
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
   * 获取只读从实例
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
   * 获取只读从实例
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
   * AI资源列表
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
   * AI资源列表
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
   * Queries a list of instances.
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
   * Queries a list of instances.
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
   * 获取主实例
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
   * 获取主实例
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
   * 实例可迁移可用区列表
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
   * 实例可迁移可用区列表
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
   * 列出模型列表
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
   * 列出模型列表
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
   * 运维事件列表
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
   * 运维事件列表
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
   * holoapp共有云所有开服的region
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
   * holoapp共有云所有开服的region
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
   * 获取版本列表
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
   * 获取版本列表
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
   * 分时弹性日志
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
   * 分时弹性日志
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
   * 计算分时弹性计划列表
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
   * 计算分时弹性计划列表
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
   * Queries the list of virtual warehouse instances.
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
   * Queries the list of virtual warehouse instances.
   * @returns ListWarehousesResponse
   */
  async listWarehouses(instanceId: string): Promise<$_model.ListWarehousesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWarehousesWithOptions(instanceId, headers, runtime);
  }

  /**
   * 实例迁移
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
   * 实例迁移
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
   * 准备升级
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
   * 准备升级
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
   * Triggers shard rebalancing for a virtual warehouse.
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
   * Triggers shard rebalancing for a virtual warehouse.
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
   * Renames a virtual warehouse.
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
   * Renames a virtual warehouse.
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
   * Manually renews a Hologres instance. You can enable monthly auto-renewal when you renew a Hologres instance.
   * 
   * @remarks
   * >  Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/zh/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.38e731c9VAwtDP).
   * *   You can renew only subscription instances.
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
   * Manually renews a Hologres instance. You can enable monthly auto-renewal when you renew a Hologres instance.
   * 
   * @remarks
   * >  Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   For more information about how to renew a Hologres instance, see [Manage renewals](https://www.alibabacloud.com/help/zh/hologres/product-overview/manage-renewals?spm=a2c63.p38356.0.0.38e731c9VAwtDP).
   * *   You can renew only subscription instances.
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
   * 更新证书
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
   * 更新证书
   * @returns RenewSSLCertificateResponse
   */
  async renewSSLCertificate(instanceId: string): Promise<$_model.RenewSSLCertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewSSLCertificateWithOptions(instanceId, headers, runtime);
  }

  /**
   * Restarts a virtual warehouse.
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
   * Restarts a virtual warehouse.
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
   * Restarts an instance.
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
   * Restarts an instance.
   * @returns RestartInstanceResponse
   */
  async restartInstance(instanceId: string): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Resumes a virtual warehouse.
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
   * Resumes a virtual warehouse.
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
   * Resumes an instance.
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
   * Resumes an instance.
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(instanceId: string): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 取消DB授权
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
   * 取消DB授权
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
   * 取消Schema授权
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
   * 取消Schema授权
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
   * 取消表授权
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
   * 取消表授权
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
   * Scales in or out a virtual warehouse.
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
   * Scales in or out a virtual warehouse.
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
   * Changes the specifications and storage space of a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
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
   * Changes the specifications and storage space of a Hologres instance.
   * 
   * @remarks
   * > Before you call this operation, make sure that you understand the billing method and pricing of Hologres because this operation is charged.
   * *   For more information about the billing of Hologres, see [Billing overview](https://www.alibabacloud.com/help/zh/hologres/product-overview/billing-overview).
   * *   During the change of computing resource specifications of a Hologres instance, the instance is unavailable. During the change of storage resource specifications of a Hologres instance, the instance can work normally. Do not frequently change instance specifications. For more information, see [Upgrade or downgrade instance specifications](https://www.alibabacloud.com/help/en/hologres/product-overview/upgrade-or-downgrade-instance-specifications).
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
   * Stops an instance.
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
   * Stops an instance.
   * @returns StopInstanceResponse
   */
  async stopInstance(instanceId: string): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * Suspends a virtual warehouse.
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
   * Suspends a virtual warehouse.
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
   * 新增tag
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
   * 新增tag
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
   * 解除绑定主实例
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
   * 解除绑定主实例
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
   * 删除tag
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
   * 删除tag
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
   * 修改小版本自动升级开关
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
   * 修改小版本自动升级开关
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
   * 更新备份描述
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
   * 更新备份描述
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
   * 修改holoweb登陆权限
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
   * 修改holoweb登陆权限
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
   * Changes the name of an instance.
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
   * Changes the name of an instance.
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
   * Modifies the network configuration of an instance.
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
   * Modifies the network configuration of an instance.
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
   * 修改端口号
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
   * 修改端口号
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
   * 修改可维护时间窗口
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
   * 修改可维护时间窗口
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
   * 创建模型服务
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
   * 创建模型服务
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
   * 修改运维事件执行时间
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
   * 修改运维事件执行时间
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
   * 配置周期备份
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
   * 配置周期备份
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
   * 创建分时弹性计划
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
   * 创建分时弹性计划
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
   * 开始升级
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
   * 开始升级
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
