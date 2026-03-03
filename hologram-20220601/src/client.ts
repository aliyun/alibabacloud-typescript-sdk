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

}
