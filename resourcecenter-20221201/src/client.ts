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
    this._endpoint = this.getEndpoint("resourcecenter", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Sets a default filter.
   * 
   * @param request - AssociateDefaultFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateDefaultFilterResponse
   */
  async associateDefaultFilterWithOptions(request: $_model.AssociateDefaultFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateDefaultFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateDefaultFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateDefaultFilterResponse>(await this.callApi(params, req, runtime), new $_model.AssociateDefaultFilterResponse({}));
  }

  /**
   * Sets a default filter.
   * 
   * @param request - AssociateDefaultFilterRequest
   * @returns AssociateDefaultFilterResponse
   */
  async associateDefaultFilter(request: $_model.AssociateDefaultFilterRequest): Promise<$_model.AssociateDefaultFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associateDefaultFilterWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of multiple resources in your account.
   * 
   * @param request - BatchGetResourceConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetResourceConfigurationsResponse
   */
  async batchGetResourceConfigurationsWithOptions(request: $_model.BatchGetResourceConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetResourceConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetResourceConfigurations",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetResourceConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetResourceConfigurationsResponse({}));
  }

  /**
   * Queries the configurations of multiple resources in your account.
   * 
   * @param request - BatchGetResourceConfigurationsRequest
   * @returns BatchGetResourceConfigurationsResponse
   */
  async batchGetResourceConfigurations(request: $_model.BatchGetResourceConfigurationsRequest): Promise<$_model.BatchGetResourceConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetResourceConfigurationsWithOptions(request, runtime);
  }

  /**
   * Creates a resource delivery channel for the current account.
   * 
   * @remarks
   * Resource delivery supports the scheduled delivery of resource snapshots and the delivery of resource configuration changes.
   * Scheduled delivery of resource snapshots supports two scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - CreateDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeliveryChannelResponse
   */
  async createDeliveryChannelWithOptions(request: $_model.CreateDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelDescription)) {
      query["DeliveryChannelDescription"] = request.deliveryChannelDescription;
    }

    if (!$dara.isNull(request.deliveryChannelFilter)) {
      query["DeliveryChannelFilter"] = request.deliveryChannelFilter;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.resourceChangeDelivery)) {
      query["ResourceChangeDelivery"] = request.resourceChangeDelivery;
    }

    if (!$dara.isNull(request.resourceSnapshotDelivery)) {
      query["ResourceSnapshotDelivery"] = request.resourceSnapshotDelivery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeliveryChannelResponse({}));
  }

  /**
   * Creates a resource delivery channel for the current account.
   * 
   * @remarks
   * Resource delivery supports the scheduled delivery of resource snapshots and the delivery of resource configuration changes.
   * Scheduled delivery of resource snapshots supports two scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - CreateDeliveryChannelRequest
   * @returns CreateDeliveryChannelResponse
   */
  async createDeliveryChannel(request: $_model.CreateDeliveryChannelRequest): Promise<$_model.CreateDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a filter.
   * 
   * @param request - CreateFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFilterResponse
   */
  async createFilterWithOptions(request: $_model.CreateFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterConfiguration)) {
      query["FilterConfiguration"] = request.filterConfiguration;
    }

    if (!$dara.isNull(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFilterResponse>(await this.callApi(params, req, runtime), new $_model.CreateFilterResponse({}));
  }

  /**
   * Creates a filter.
   * 
   * @param request - CreateFilterRequest
   * @returns CreateFilterResponse
   */
  async createFilter(request: $_model.CreateFilterRequest): Promise<$_model.CreateFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFilterWithOptions(request, runtime);
  }

  /**
   * Creates a multi-account delivery channel.
   * 
   * @remarks
   * In Resource Center, you can create multi-account delivery channels by using the management account of your resource directory or the delegated administrator account of Resource Center to deliver resource configuration change events and scheduled resource snapshots within the members in your resource directory to Object Storage Service (OSS) or Simple Log Service (SLS). Then, other Alibaba Cloud services consume standardized resource information from OSS or Simple Log Service.
   * Scheduled resource snapshots support the following delivery scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - CreateMultiAccountDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMultiAccountDeliveryChannelResponse
   */
  async createMultiAccountDeliveryChannelWithOptions(request: $_model.CreateMultiAccountDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMultiAccountDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelDescription)) {
      query["DeliveryChannelDescription"] = request.deliveryChannelDescription;
    }

    if (!$dara.isNull(request.deliveryChannelFilter)) {
      query["DeliveryChannelFilter"] = request.deliveryChannelFilter;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.resourceChangeDelivery)) {
      query["ResourceChangeDelivery"] = request.resourceChangeDelivery;
    }

    if (!$dara.isNull(request.resourceSnapshotDelivery)) {
      query["ResourceSnapshotDelivery"] = request.resourceSnapshotDelivery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMultiAccountDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMultiAccountDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.CreateMultiAccountDeliveryChannelResponse({}));
  }

  /**
   * Creates a multi-account delivery channel.
   * 
   * @remarks
   * In Resource Center, you can create multi-account delivery channels by using the management account of your resource directory or the delegated administrator account of Resource Center to deliver resource configuration change events and scheduled resource snapshots within the members in your resource directory to Object Storage Service (OSS) or Simple Log Service (SLS). Then, other Alibaba Cloud services consume standardized resource information from OSS or Simple Log Service.
   * Scheduled resource snapshots support the following delivery scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - CreateMultiAccountDeliveryChannelRequest
   * @returns CreateMultiAccountDeliveryChannelResponse
   */
  async createMultiAccountDeliveryChannel(request: $_model.CreateMultiAccountDeliveryChannelRequest): Promise<$_model.CreateMultiAccountDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMultiAccountDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Creates a custom query template.
   * 
   * @param request - CreateSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavedQueryResponse
   */
  async createSavedQueryWithOptions(request: $_model.CreateSavedQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSavedQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSavedQueryResponse>(await this.callApi(params, req, runtime), new $_model.CreateSavedQueryResponse({}));
  }

  /**
   * Creates a custom query template.
   * 
   * @param request - CreateSavedQueryRequest
   * @returns CreateSavedQueryResponse
   */
  async createSavedQuery(request: $_model.CreateSavedQueryRequest): Promise<$_model.CreateSavedQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSavedQueryWithOptions(request, runtime);
  }

  /**
   * Deletes a single-account delivery channel.
   * 
   * @param request - DeleteDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeliveryChannelResponse
   */
  async deleteDeliveryChannelWithOptions(request: $_model.DeleteDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeliveryChannelResponse({}));
  }

  /**
   * Deletes a single-account delivery channel.
   * 
   * @param request - DeleteDeliveryChannelRequest
   * @returns DeleteDeliveryChannelResponse
   */
  async deleteDeliveryChannel(request: $_model.DeleteDeliveryChannelRequest): Promise<$_model.DeleteDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a filter.
   * 
   * @param request - DeleteFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFilterResponse
   */
  async deleteFilterWithOptions(request: $_model.DeleteFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFilterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFilterResponse({}));
  }

  /**
   * Deletes a filter.
   * 
   * @param request - DeleteFilterRequest
   * @returns DeleteFilterResponse
   */
  async deleteFilter(request: $_model.DeleteFilterRequest): Promise<$_model.DeleteFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFilterWithOptions(request, runtime);
  }

  /**
   * Deletes a multi-account delivery channel.
   * 
   * @param request - DeleteMultiAccountDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMultiAccountDeliveryChannelResponse
   */
  async deleteMultiAccountDeliveryChannelWithOptions(request: $_model.DeleteMultiAccountDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMultiAccountDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMultiAccountDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMultiAccountDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMultiAccountDeliveryChannelResponse({}));
  }

  /**
   * Deletes a multi-account delivery channel.
   * 
   * @param request - DeleteMultiAccountDeliveryChannelRequest
   * @returns DeleteMultiAccountDeliveryChannelResponse
   */
  async deleteMultiAccountDeliveryChannel(request: $_model.DeleteMultiAccountDeliveryChannelRequest): Promise<$_model.DeleteMultiAccountDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMultiAccountDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Deletes a custom query template.
   * 
   * @param request - DeleteSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavedQueryResponse
   */
  async deleteSavedQueryWithOptions(request: $_model.DeleteSavedQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSavedQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSavedQueryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSavedQueryResponse({}));
  }

  /**
   * Deletes a custom query template.
   * 
   * @param request - DeleteSavedQueryRequest
   * @returns DeleteSavedQueryResponse
   */
  async deleteSavedQuery(request: $_model.DeleteSavedQueryRequest): Promise<$_model.DeleteSavedQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSavedQueryWithOptions(request, runtime);
  }

  /**
   * 关闭跨账号搜索功能
   * 
   * @param request - DisableMultiAccountResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableMultiAccountResourceCenterResponse
   */
  async disableMultiAccountResourceCenterWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableMultiAccountResourceCenterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableMultiAccountResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableMultiAccountResourceCenterResponse>(await this.callApi(params, req, runtime), new $_model.DisableMultiAccountResourceCenterResponse({}));
  }

  /**
   * 关闭跨账号搜索功能
   * @returns DisableMultiAccountResourceCenterResponse
   */
  async disableMultiAccountResourceCenter(): Promise<$_model.DisableMultiAccountResourceCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableMultiAccountResourceCenterWithOptions(runtime);
  }

  /**
   * 禁用资源中心
   * 
   * @param request - DisableResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableResourceCenterResponse
   */
  async disableResourceCenterWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisableResourceCenterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisableResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableResourceCenterResponse>(await this.callApi(params, req, runtime), new $_model.DisableResourceCenterResponse({}));
  }

  /**
   * 禁用资源中心
   * @returns DisableResourceCenterResponse
   */
  async disableResourceCenter(): Promise<$_model.DisableResourceCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableResourceCenterWithOptions(runtime);
  }

  /**
   * Cancels the default filter.
   * 
   * @param request - DisassociateDefaultFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateDefaultFilterResponse
   */
  async disassociateDefaultFilterWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DisassociateDefaultFilterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DisassociateDefaultFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisassociateDefaultFilterResponse>(await this.callApi(params, req, runtime), new $_model.DisassociateDefaultFilterResponse({}));
  }

  /**
   * Cancels the default filter.
   * @returns DisassociateDefaultFilterResponse
   */
  async disassociateDefaultFilter(): Promise<$_model.DisassociateDefaultFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disassociateDefaultFilterWithOptions(runtime);
  }

  /**
   * 开通跨账号搜索功能
   * 
   * @param request - EnableMultiAccountResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableMultiAccountResourceCenterResponse
   */
  async enableMultiAccountResourceCenterWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableMultiAccountResourceCenterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableMultiAccountResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableMultiAccountResourceCenterResponse>(await this.callApi(params, req, runtime), new $_model.EnableMultiAccountResourceCenterResponse({}));
  }

  /**
   * 开通跨账号搜索功能
   * @returns EnableMultiAccountResourceCenterResponse
   */
  async enableMultiAccountResourceCenter(): Promise<$_model.EnableMultiAccountResourceCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableMultiAccountResourceCenterWithOptions(runtime);
  }

  /**
   * Activates the Resource Center service.
   * 
   * @param request - EnableResourceCenterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableResourceCenterResponse
   */
  async enableResourceCenterWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.EnableResourceCenterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "EnableResourceCenter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableResourceCenterResponse>(await this.callApi(params, req, runtime), new $_model.EnableResourceCenterResponse({}));
  }

  /**
   * Activates the Resource Center service.
   * @returns EnableResourceCenterResponse
   */
  async enableResourceCenter(): Promise<$_model.EnableResourceCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableResourceCenterWithOptions(runtime);
  }

  /**
   * 执行多账号查询
   * 
   * @param request - ExecuteMultiAccountSQLQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteMultiAccountSQLQueryResponse
   */
  async executeMultiAccountSQLQueryWithOptions(request: $_model.ExecuteMultiAccountSQLQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteMultiAccountSQLQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteMultiAccountSQLQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteMultiAccountSQLQueryResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteMultiAccountSQLQueryResponse({}));
  }

  /**
   * 执行多账号查询
   * 
   * @param request - ExecuteMultiAccountSQLQueryRequest
   * @returns ExecuteMultiAccountSQLQueryResponse
   */
  async executeMultiAccountSQLQuery(request: $_model.ExecuteMultiAccountSQLQueryRequest): Promise<$_model.ExecuteMultiAccountSQLQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeMultiAccountSQLQueryWithOptions(request, runtime);
  }

  /**
   * Executes an SQL statement to query the resources that can be accessed within the current account.
   * 
   * @param request - ExecuteSQLQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSQLQueryResponse
   */
  async executeSQLQueryWithOptions(request: $_model.ExecuteSQLQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSQLQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSQLQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSQLQueryResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSQLQueryResponse({}));
  }

  /**
   * Executes an SQL statement to query the resources that can be accessed within the current account.
   * 
   * @param request - ExecuteSQLQueryRequest
   * @returns ExecuteSQLQueryResponse
   */
  async executeSQLQuery(request: $_model.ExecuteSQLQueryRequest): Promise<$_model.ExecuteSQLQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeSQLQueryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a delivery channel within the current account.
   * 
   * @param request - GetDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeliveryChannelResponse
   */
  async getDeliveryChannelWithOptions(request: $_model.GetDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetDeliveryChannelResponse({}));
  }

  /**
   * Queries the information about a delivery channel within the current account.
   * 
   * @param request - GetDeliveryChannelRequest
   * @returns GetDeliveryChannelResponse
   */
  async getDeliveryChannel(request: $_model.GetDeliveryChannelRequest): Promise<$_model.GetDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of a resource delivery channel in the current account.
   * 
   * @param request - GetDeliveryChannelStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeliveryChannelStatisticsResponse
   */
  async getDeliveryChannelStatisticsWithOptions(request: $_model.GetDeliveryChannelStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeliveryChannelStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeliveryChannelStatistics",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeliveryChannelStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetDeliveryChannelStatisticsResponse({}));
  }

  /**
   * Queries the statistics of a resource delivery channel in the current account.
   * 
   * @param request - GetDeliveryChannelStatisticsRequest
   * @returns GetDeliveryChannelStatisticsResponse
   */
  async getDeliveryChannelStatistics(request: $_model.GetDeliveryChannelStatisticsRequest): Promise<$_model.GetDeliveryChannelStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeliveryChannelStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a sample query template.
   * 
   * @param request - GetExampleQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExampleQueryResponse
   */
  async getExampleQueryWithOptions(request: $_model.GetExampleQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExampleQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExampleQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExampleQueryResponse>(await this.callApi(params, req, runtime), new $_model.GetExampleQueryResponse({}));
  }

  /**
   * Queries the information about a sample query template.
   * 
   * @param request - GetExampleQueryRequest
   * @returns GetExampleQueryResponse
   */
  async getExampleQuery(request: $_model.GetExampleQueryRequest): Promise<$_model.GetExampleQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExampleQueryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a cross-account resource delivery channel.
   * 
   * @param request - GetMultiAccountDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountDeliveryChannelResponse
   */
  async getMultiAccountDeliveryChannelWithOptions(request: $_model.GetMultiAccountDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiAccountDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiAccountDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiAccountDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiAccountDeliveryChannelResponse({}));
  }

  /**
   * Queries the information about a cross-account resource delivery channel.
   * 
   * @param request - GetMultiAccountDeliveryChannelRequest
   * @returns GetMultiAccountDeliveryChannelResponse
   */
  async getMultiAccountDeliveryChannel(request: $_model.GetMultiAccountDeliveryChannelRequest): Promise<$_model.GetMultiAccountDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on a multi-account delivery channel.
   * 
   * @param request - GetMultiAccountDeliveryChannelStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountDeliveryChannelStatisticsResponse
   */
  async getMultiAccountDeliveryChannelStatisticsWithOptions(request: $_model.GetMultiAccountDeliveryChannelStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiAccountDeliveryChannelStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiAccountDeliveryChannelStatistics",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiAccountDeliveryChannelStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiAccountDeliveryChannelStatisticsResponse({}));
  }

  /**
   * Queries the statistics on a multi-account delivery channel.
   * 
   * @param request - GetMultiAccountDeliveryChannelStatisticsRequest
   * @returns GetMultiAccountDeliveryChannelStatisticsResponse
   */
  async getMultiAccountDeliveryChannelStatistics(request: $_model.GetMultiAccountDeliveryChannelStatisticsRequest): Promise<$_model.GetMultiAccountDeliveryChannelStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountDeliveryChannelStatisticsWithOptions(request, runtime);
  }

  /**
   * 获取跨账号资源中心服务状态
   * 
   * @param request - GetMultiAccountResourceCenterServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountResourceCenterServiceStatusResponse
   */
  async getMultiAccountResourceCenterServiceStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiAccountResourceCenterServiceStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiAccountResourceCenterServiceStatus",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiAccountResourceCenterServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiAccountResourceCenterServiceStatusResponse({}));
  }

  /**
   * 获取跨账号资源中心服务状态
   * @returns GetMultiAccountResourceCenterServiceStatusResponse
   */
  async getMultiAccountResourceCenterServiceStatus(): Promise<$_model.GetMultiAccountResourceCenterServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountResourceCenterServiceStatusWithOptions(runtime);
  }

  /**
   * Queries the configurations of a resource within the management account or a member of a resource directory.
   * 
   * @param request - GetMultiAccountResourceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountResourceConfigurationResponse
   */
  async getMultiAccountResourceConfigurationWithOptions(request: $_model.GetMultiAccountResourceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiAccountResourceConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiAccountResourceConfiguration",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiAccountResourceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiAccountResourceConfigurationResponse({}));
  }

  /**
   * Queries the configurations of a resource within the management account or a member of a resource directory.
   * 
   * @param request - GetMultiAccountResourceConfigurationRequest
   * @returns GetMultiAccountResourceConfigurationResponse
   */
  async getMultiAccountResourceConfiguration(request: $_model.GetMultiAccountResourceConfigurationRequest): Promise<$_model.GetMultiAccountResourceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountResourceConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the number of resources within the management account and multiple members of a resource directory.
   * 
   * @remarks
   * You can query only resources supported by Resource Center. For more information, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @param request - GetMultiAccountResourceCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiAccountResourceCountsResponse
   */
  async getMultiAccountResourceCountsWithOptions(request: $_model.GetMultiAccountResourceCountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiAccountResourceCountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.groupByKey)) {
      query["GroupByKey"] = request.groupByKey;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiAccountResourceCounts",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiAccountResourceCountsResponse>(await this.callApi(params, req, runtime), new $_model.GetMultiAccountResourceCountsResponse({}));
  }

  /**
   * Queries the number of resources within the management account and multiple members of a resource directory.
   * 
   * @remarks
   * You can query only resources supported by Resource Center. For more information, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @param request - GetMultiAccountResourceCountsRequest
   * @returns GetMultiAccountResourceCountsResponse
   */
  async getMultiAccountResourceCounts(request: $_model.GetMultiAccountResourceCountsRequest): Promise<$_model.GetMultiAccountResourceCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountResourceCountsWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Resource Center service.
   * 
   * @param request - GetResourceCenterServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceCenterServiceStatusResponse
   */
  async getResourceCenterServiceStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceCenterServiceStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceCenterServiceStatus",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceCenterServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceCenterServiceStatusResponse({}));
  }

  /**
   * Queries the status of the Resource Center service.
   * @returns GetResourceCenterServiceStatusResponse
   */
  async getResourceCenterServiceStatus(): Promise<$_model.GetResourceCenterServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceCenterServiceStatusWithOptions(runtime);
  }

  /**
   * 获取资源配置
   * 
   * @param request - GetResourceConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceConfigurationResponse
   */
  async getResourceConfigurationWithOptions(request: $_model.GetResourceConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceConfigurationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceConfiguration",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceConfigurationResponse({}));
  }

  /**
   * 获取资源配置
   * 
   * @param request - GetResourceConfigurationRequest
   * @returns GetResourceConfigurationResponse
   */
  async getResourceConfiguration(request: $_model.GetResourceConfigurationRequest): Promise<$_model.GetResourceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the number of resources in your account that you have permission to access.
   * 
   * @remarks
   * - You can query the number of resources in your account that you have permission to access.
   * - You can query only the [Alibaba Cloud services and resource types that are supported by Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @param request - GetResourceCountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceCountsResponse
   */
  async getResourceCountsWithOptions(request: $_model.GetResourceCountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceCountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.groupByKey)) {
      query["GroupByKey"] = request.groupByKey;
    }

    if (!$dara.isNull(request.includeDeletedResources)) {
      query["IncludeDeletedResources"] = request.includeDeletedResources;
    }

    if (!$dara.isNull(request.searchExpression)) {
      query["SearchExpression"] = request.searchExpression;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceCounts",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceCountsResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceCountsResponse({}));
  }

  /**
   * Queries the number of resources in your account that you have permission to access.
   * 
   * @remarks
   * - You can query the number of resources in your account that you have permission to access.
   * - You can query only the [Alibaba Cloud services and resource types that are supported by Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * 
   * @param request - GetResourceCountsRequest
   * @returns GetResourceCountsResponse
   */
  async getResourceCounts(request: $_model.GetResourceCountsRequest): Promise<$_model.GetResourceCountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceCountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a custom query template.
   * 
   * @param request - GetSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavedQueryResponse
   */
  async getSavedQueryWithOptions(request: $_model.GetSavedQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavedQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavedQueryResponse>(await this.callApi(params, req, runtime), new $_model.GetSavedQueryResponse({}));
  }

  /**
   * Queries the information about a custom query template.
   * 
   * @param request - GetSavedQueryRequest
   * @returns GetSavedQueryResponse
   */
  async getSavedQuery(request: $_model.GetSavedQueryRequest): Promise<$_model.GetSavedQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSavedQueryWithOptions(request, runtime);
  }

  /**
   * Queries a list of delivery channels within the current account.
   * 
   * @param request - ListDeliveryChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeliveryChannelsResponse
   */
  async listDeliveryChannelsWithOptions(request: $_model.ListDeliveryChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeliveryChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeliveryChannels",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeliveryChannelsResponse({}));
  }

  /**
   * Queries a list of delivery channels within the current account.
   * 
   * @param request - ListDeliveryChannelsRequest
   * @returns ListDeliveryChannelsResponse
   */
  async listDeliveryChannels(request: $_model.ListDeliveryChannelsRequest): Promise<$_model.ListDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries all sample query templates.
   * 
   * @param request - ListExampleQueriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExampleQueriesResponse
   */
  async listExampleQueriesWithOptions(request: $_model.ListExampleQueriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExampleQueriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExampleQueries",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExampleQueriesResponse>(await this.callApi(params, req, runtime), new $_model.ListExampleQueriesResponse({}));
  }

  /**
   * Queries all sample query templates.
   * 
   * @param request - ListExampleQueriesRequest
   * @returns ListExampleQueriesResponse
   */
  async listExampleQueries(request: $_model.ListExampleQueriesRequest): Promise<$_model.ListExampleQueriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExampleQueriesWithOptions(request, runtime);
  }

  /**
   * 获取过滤器列表
   * 
   * @param request - ListFiltersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFiltersResponse
   */
  async listFiltersWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListFiltersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListFilters",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFiltersResponse>(await this.callApi(params, req, runtime), new $_model.ListFiltersResponse({}));
  }

  /**
   * 获取过滤器列表
   * @returns ListFiltersResponse
   */
  async listFilters(): Promise<$_model.ListFiltersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFiltersWithOptions(runtime);
  }

  /**
   * Queries a list of delivery channels in resource directory mode.
   * 
   * @param request - ListMultiAccountDeliveryChannelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountDeliveryChannelsResponse
   */
  async listMultiAccountDeliveryChannelsWithOptions(request: $_model.ListMultiAccountDeliveryChannelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiAccountDeliveryChannelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiAccountDeliveryChannels",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiAccountDeliveryChannelsResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiAccountDeliveryChannelsResponse({}));
  }

  /**
   * Queries a list of delivery channels in resource directory mode.
   * 
   * @param request - ListMultiAccountDeliveryChannelsRequest
   * @returns ListMultiAccountDeliveryChannelsResponse
   */
  async listMultiAccountDeliveryChannels(request: $_model.ListMultiAccountDeliveryChannelsRequest): Promise<$_model.ListMultiAccountDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the resource groups within the management account or a member in a resource directory.
   * 
   * @param request - ListMultiAccountResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountResourceGroupsResponse
   */
  async listMultiAccountResourceGroupsWithOptions(request: $_model.ListMultiAccountResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiAccountResourceGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountId)) {
      query["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiAccountResourceGroups",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiAccountResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiAccountResourceGroupsResponse({}));
  }

  /**
   * Queries the resource groups within the management account or a member in a resource directory.
   * 
   * @param request - ListMultiAccountResourceGroupsRequest
   * @returns ListMultiAccountResourceGroupsResponse
   */
  async listMultiAccountResourceGroups(request: $_model.ListMultiAccountResourceGroupsRequest): Promise<$_model.ListMultiAccountResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountResourceGroupsWithOptions(request, runtime);
  }

  /**
   * 跨账号列出资源关系
   * 
   * @param request - ListMultiAccountResourceRelationshipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountResourceRelationshipsResponse
   */
  async listMultiAccountResourceRelationshipsWithOptions(request: $_model.ListMultiAccountResourceRelationshipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiAccountResourceRelationshipsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relatedResourceFilter)) {
      query["RelatedResourceFilter"] = request.relatedResourceFilter;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiAccountResourceRelationships",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiAccountResourceRelationshipsResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiAccountResourceRelationshipsResponse({}));
  }

  /**
   * 跨账号列出资源关系
   * 
   * @param request - ListMultiAccountResourceRelationshipsRequest
   * @returns ListMultiAccountResourceRelationshipsResponse
   */
  async listMultiAccountResourceRelationships(request: $_model.ListMultiAccountResourceRelationshipsRequest): Promise<$_model.ListMultiAccountResourceRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountResourceRelationshipsWithOptions(request, runtime);
  }

  /**
   * 查询多账号标签键
   * 
   * @param request - ListMultiAccountTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountTagKeysResponse
   */
  async listMultiAccountTagKeysWithOptions(request: $_model.ListMultiAccountTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiAccountTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiAccountTagKeys",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiAccountTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiAccountTagKeysResponse({}));
  }

  /**
   * 查询多账号标签键
   * 
   * @param request - ListMultiAccountTagKeysRequest
   * @returns ListMultiAccountTagKeysResponse
   */
  async listMultiAccountTagKeys(request: $_model.ListMultiAccountTagKeysRequest): Promise<$_model.ListMultiAccountTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountTagKeysWithOptions(request, runtime);
  }

  /**
   * 查询多账号标签值
   * 
   * @param request - ListMultiAccountTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMultiAccountTagValuesResponse
   */
  async listMultiAccountTagValuesWithOptions(request: $_model.ListMultiAccountTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMultiAccountTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMultiAccountTagValues",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMultiAccountTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListMultiAccountTagValuesResponse({}));
  }

  /**
   * 查询多账号标签值
   * 
   * @param request - ListMultiAccountTagValuesRequest
   * @returns ListMultiAccountTagValuesResponse
   */
  async listMultiAccountTagValues(request: $_model.ListMultiAccountTagValuesRequest): Promise<$_model.ListMultiAccountTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountTagValuesWithOptions(request, runtime);
  }

  /**
   * 列出资源关系
   * 
   * @param request - ListResourceRelationshipsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceRelationshipsResponse
   */
  async listResourceRelationshipsWithOptions(request: $_model.ListResourceRelationshipsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceRelationshipsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.relatedResourceFilter)) {
      query["RelatedResourceFilter"] = request.relatedResourceFilter;
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
      action: "ListResourceRelationships",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceRelationshipsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceRelationshipsResponse({}));
  }

  /**
   * 列出资源关系
   * 
   * @param request - ListResourceRelationshipsRequest
   * @returns ListResourceRelationshipsResponse
   */
  async listResourceRelationships(request: $_model.ListResourceRelationshipsRequest): Promise<$_model.ListResourceRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceRelationshipsWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of resource types
   * 
   * @param request - ListResourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(request: $_model.ListResourceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypes",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceTypesResponse({}));
  }

  /**
   * Queries the metadata of resource types
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: $_model.ListResourceTypesRequest): Promise<$_model.ListResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries all custom query templates.
   * 
   * @param request - ListSavedQueriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavedQueriesResponse
   */
  async listSavedQueriesWithOptions(request: $_model.ListSavedQueriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSavedQueriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSavedQueries",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSavedQueriesResponse>(await this.callApi(params, req, runtime), new $_model.ListSavedQueriesResponse({}));
  }

  /**
   * Queries all custom query templates.
   * 
   * @param request - ListSavedQueriesRequest
   * @returns ListSavedQueriesResponse
   */
  async listSavedQueries(request: $_model.ListSavedQueriesRequest): Promise<$_model.ListSavedQueriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSavedQueriesWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys of resources within the current account.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries the tag keys of resources within the current account.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * 查询标签值
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.matchType)) {
      query["MatchType"] = request.matchType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    if (!$dara.isNull(request.tagValue)) {
      query["TagValue"] = request.tagValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * 查询标签值
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Searches for resources in the management account and multiple member accounts of a resource directory.
   * 
   * @remarks
   * - You can search only for [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * - To search for resources across accounts as a RAM user or RAM role, you must have been attached the `resourcecenter:SearchMultiAccountResources` policy. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * - By default, this operation returns a maximum of 20 entries. To change the maximum number of entries that can be returned, specify the `MaxResults` parameter.
   * - If the response does not include `NextToken`, no more data is available. To query the next page of results, set the `NextToken` parameter to the value that was returned from the previous call. If you do not specify the `NextToken` parameter, the first page of data is returned by default.
   * - You can set one or more filter conditions to narrow the search scope. For information about supported filter parameters and matching methods, see the information below. Multiple filter conditions are joined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a single filter condition are joined by a logical `OR`. Resources that meet any value for a filter condition are returned.
   * - For more query examples, visit <props="china">[示例中心](https://api.aliyun.com/api-tools/demo/ResourceCenter) <props="intl">[OpenAPI Portal](https://api.alibabacloud.com/api-tools/demo/ResourceCenter).
   * 
   * @param request - SearchMultiAccountResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMultiAccountResourcesResponse
   */
  async searchMultiAccountResourcesWithOptions(request: $_model.SearchMultiAccountResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMultiAccountResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.sortCriterion)) {
      query["SortCriterion"] = request.sortCriterion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMultiAccountResources",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMultiAccountResourcesResponse>(await this.callApi(params, req, runtime), new $_model.SearchMultiAccountResourcesResponse({}));
  }

  /**
   * Searches for resources in the management account and multiple member accounts of a resource directory.
   * 
   * @remarks
   * - You can search only for [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * - To search for resources across accounts as a RAM user or RAM role, you must have been attached the `resourcecenter:SearchMultiAccountResources` policy. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * - By default, this operation returns a maximum of 20 entries. To change the maximum number of entries that can be returned, specify the `MaxResults` parameter.
   * - If the response does not include `NextToken`, no more data is available. To query the next page of results, set the `NextToken` parameter to the value that was returned from the previous call. If you do not specify the `NextToken` parameter, the first page of data is returned by default.
   * - You can set one or more filter conditions to narrow the search scope. For information about supported filter parameters and matching methods, see the information below. Multiple filter conditions are joined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a single filter condition are joined by a logical `OR`. Resources that meet any value for a filter condition are returned.
   * - For more query examples, visit <props="china">[示例中心](https://api.aliyun.com/api-tools/demo/ResourceCenter) <props="intl">[OpenAPI Portal](https://api.alibabacloud.com/api-tools/demo/ResourceCenter).
   * 
   * @param request - SearchMultiAccountResourcesRequest
   * @returns SearchMultiAccountResourcesResponse
   */
  async searchMultiAccountResources(request: $_model.SearchMultiAccountResourcesRequest): Promise<$_model.SearchMultiAccountResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMultiAccountResourcesWithOptions(request, runtime);
  }

  /**
   * Searches for resources in your current account that you are permitted to access.
   * 
   * @remarks
   * - You can search only for resources in your current account that you are permitted to access.
   * - You can search only for the [Alibaba Cloud services and resource types that are supported by Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * - By default, the SearchResources operation returns a maximum of 20 entries. You can specify the `MaxResults` parameter to change the maximum number of entries that are returned.
   * - If the response does not include a `NextToken` value, no more results are available. To retrieve the next page of results, include the `NextToken` value from the previous response in your next request. If you do not specify the `NextToken` parameter, the first page of results is returned.
   * - You can set one or more filter conditions to narrow the search scope. For information about the supported filter parameters and matching methods, see the following sections. Multiple filter conditions are combined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a filter condition are combined by a logical `OR`. Resources that meet any value of the filter condition are returned.
   * - For more query examples, see [API Explorer](https://api.aliyun.com/api-tools/demo/ResourceCenter).
   * 
   * @param request - SearchResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchResourcesResponse
   */
  async searchResourcesWithOptions(request: $_model.SearchResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.includeDeletedResources)) {
      query["IncludeDeletedResources"] = request.includeDeletedResources;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.searchExpression)) {
      query["SearchExpression"] = request.searchExpression;
    }

    if (!$dara.isNull(request.sortCriterion)) {
      query["SortCriterion"] = request.sortCriterion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchResources",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchResourcesResponse>(await this.callApi(params, req, runtime), new $_model.SearchResourcesResponse({}));
  }

  /**
   * Searches for resources in your current account that you are permitted to access.
   * 
   * @remarks
   * - You can search only for resources in your current account that you are permitted to access.
   * - You can search only for the [Alibaba Cloud services and resource types that are supported by Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * - By default, the SearchResources operation returns a maximum of 20 entries. You can specify the `MaxResults` parameter to change the maximum number of entries that are returned.
   * - If the response does not include a `NextToken` value, no more results are available. To retrieve the next page of results, include the `NextToken` value from the previous response in your next request. If you do not specify the `NextToken` parameter, the first page of results is returned.
   * - You can set one or more filter conditions to narrow the search scope. For information about the supported filter parameters and matching methods, see the following sections. Multiple filter conditions are combined by a logical `AND`. Only resources that meet all filter conditions are returned. The values within a filter condition are combined by a logical `OR`. Resources that meet any value of the filter condition are returned.
   * - For more query examples, see [API Explorer](https://api.aliyun.com/api-tools/demo/ResourceCenter).
   * 
   * @param request - SearchResourcesRequest
   * @returns SearchResourcesResponse
   */
  async searchResources(request: $_model.SearchResourcesRequest): Promise<$_model.SearchResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchResourcesWithOptions(request, runtime);
  }

  /**
   * 更新投递渠道
   * 
   * @param request - UpdateDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeliveryChannelResponse
   */
  async updateDeliveryChannelWithOptions(request: $_model.UpdateDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelDescription)) {
      query["DeliveryChannelDescription"] = request.deliveryChannelDescription;
    }

    if (!$dara.isNull(request.deliveryChannelFilter)) {
      query["DeliveryChannelFilter"] = request.deliveryChannelFilter;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.resourceChangeDelivery)) {
      query["ResourceChangeDelivery"] = request.resourceChangeDelivery;
    }

    if (!$dara.isNull(request.resourceSnapshotDelivery)) {
      query["ResourceSnapshotDelivery"] = request.resourceSnapshotDelivery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeliveryChannelResponse({}));
  }

  /**
   * 更新投递渠道
   * 
   * @param request - UpdateDeliveryChannelRequest
   * @returns UpdateDeliveryChannelResponse
   */
  async updateDeliveryChannel(request: $_model.UpdateDeliveryChannelRequest): Promise<$_model.UpdateDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Updates a filter.
   * 
   * @param request - UpdateFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFilterResponse
   */
  async updateFilterWithOptions(request: $_model.UpdateFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filterConfiguration)) {
      query["FilterConfiguration"] = request.filterConfiguration;
    }

    if (!$dara.isNull(request.filterName)) {
      query["FilterName"] = request.filterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFilter",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFilterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFilterResponse({}));
  }

  /**
   * Updates a filter.
   * 
   * @param request - UpdateFilterRequest
   * @returns UpdateFilterResponse
   */
  async updateFilter(request: $_model.UpdateFilterRequest): Promise<$_model.UpdateFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFilterWithOptions(request, runtime);
  }

  /**
   * Updates a multi-account delivery channel.
   * 
   * @remarks
   * Resource delivery supports the delivery of resource configuration change events and scheduled resource snapshots.
   * Scheduled resource snapshots support the following delivery scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - UpdateMultiAccountDeliveryChannelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMultiAccountDeliveryChannelResponse
   */
  async updateMultiAccountDeliveryChannelWithOptions(request: $_model.UpdateMultiAccountDeliveryChannelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMultiAccountDeliveryChannelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryChannelDescription)) {
      query["DeliveryChannelDescription"] = request.deliveryChannelDescription;
    }

    if (!$dara.isNull(request.deliveryChannelFilter)) {
      query["DeliveryChannelFilter"] = request.deliveryChannelFilter;
    }

    if (!$dara.isNull(request.deliveryChannelId)) {
      query["DeliveryChannelId"] = request.deliveryChannelId;
    }

    if (!$dara.isNull(request.deliveryChannelName)) {
      query["DeliveryChannelName"] = request.deliveryChannelName;
    }

    if (!$dara.isNull(request.resourceChangeDelivery)) {
      query["ResourceChangeDelivery"] = request.resourceChangeDelivery;
    }

    if (!$dara.isNull(request.resourceSnapshotDelivery)) {
      query["ResourceSnapshotDelivery"] = request.resourceSnapshotDelivery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMultiAccountDeliveryChannel",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMultiAccountDeliveryChannelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMultiAccountDeliveryChannelResponse({}));
  }

  /**
   * Updates a multi-account delivery channel.
   * 
   * @remarks
   * Resource delivery supports the delivery of resource configuration change events and scheduled resource snapshots.
   * Scheduled resource snapshots support the following delivery scenarios:
   * - Standard delivery: Leave the `ResourceSnapshotDelivery.CustomExpression` parameter empty.
   * - Custom delivery: Set the `ResourceSnapshotDelivery.CustomExpression` parameter to an appropriate value.
   * 
   * @param request - UpdateMultiAccountDeliveryChannelRequest
   * @returns UpdateMultiAccountDeliveryChannelResponse
   */
  async updateMultiAccountDeliveryChannel(request: $_model.UpdateMultiAccountDeliveryChannelRequest): Promise<$_model.UpdateMultiAccountDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMultiAccountDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * Updates a custom query template.
   * 
   * @param request - UpdateSavedQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSavedQueryResponse
   */
  async updateSavedQueryWithOptions(request: $_model.UpdateSavedQueryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSavedQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.queryId)) {
      query["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSavedQuery",
      version: "2022-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSavedQueryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSavedQueryResponse({}));
  }

  /**
   * Updates a custom query template.
   * 
   * @param request - UpdateSavedQueryRequest
   * @returns UpdateSavedQueryResponse
   */
  async updateSavedQuery(request: $_model.UpdateSavedQueryRequest): Promise<$_model.UpdateSavedQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSavedQueryWithOptions(request, runtime);
  }

}
