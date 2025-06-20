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
   * 创建投递渠道
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
   * 创建投递渠道
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
   * 创建多账号投递渠道
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
   * 创建多账号投递渠道
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
   * 删除投递渠道
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
   * 删除投递渠道
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
   * 删除多账号投递渠道
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
   * 删除多账号投递渠道
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
   * Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
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
   * Disables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * @returns DisableMultiAccountResourceCenterResponse
   */
  async disableMultiAccountResourceCenter(): Promise<$_model.DisableMultiAccountResourceCenterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableMultiAccountResourceCenterWithOptions(runtime);
  }

  /**
   * Deactivates the Resource Center service.
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
   * Deactivates the Resource Center service.
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
   * Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @remarks
   * If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources of members in the resource directory. For more information about a resource directory, see [Resource Directory overview](https://help.aliyun.com/document_detail/200506.html).
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
   * Enables the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
   * 
   * @remarks
   * If you have created a resource directory for your enterprise, you can enable the cross-account resource search feature by using the management account of the resource directory or a delegated administrator account of Resource Center to view the resources of members in the resource directory. For more information about a resource directory, see [Resource Directory overview](https://help.aliyun.com/document_detail/200506.html).
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
   * Executes an SQL statement to query resources across accounts.
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
   * Executes an SQL statement to query resources across accounts.
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
   * 查询投递渠道
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
   * 查询投递渠道
   * 
   * @param request - GetDeliveryChannelRequest
   * @returns GetDeliveryChannelResponse
   */
  async getDeliveryChannel(request: $_model.GetDeliveryChannelRequest): Promise<$_model.GetDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * 查询投递渠道统计信息
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
   * 查询投递渠道统计信息
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
   * 查询多账号投递渠道
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
   * 查询多账号投递渠道
   * 
   * @param request - GetMultiAccountDeliveryChannelRequest
   * @returns GetMultiAccountDeliveryChannelResponse
   */
  async getMultiAccountDeliveryChannel(request: $_model.GetMultiAccountDeliveryChannelRequest): Promise<$_model.GetMultiAccountDeliveryChannelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountDeliveryChannelWithOptions(request, runtime);
  }

  /**
   * 查询多账号投递渠道统计信息
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
   * 查询多账号投递渠道统计信息
   * 
   * @param request - GetMultiAccountDeliveryChannelStatisticsRequest
   * @returns GetMultiAccountDeliveryChannelStatisticsResponse
   */
  async getMultiAccountDeliveryChannelStatistics(request: $_model.GetMultiAccountDeliveryChannelStatisticsRequest): Promise<$_model.GetMultiAccountDeliveryChannelStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMultiAccountDeliveryChannelStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
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
   * Queries the status of the cross-account resource search feature by using the management account of a resource directory or a delegated administrator account of Resource Center.
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
   * Queries the configurations of a resource within the current account.
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
   * Queries the configurations of a resource within the current account.
   * 
   * @param request - GetResourceConfigurationRequest
   * @returns GetResourceConfigurationResponse
   */
  async getResourceConfiguration(request: $_model.GetResourceConfigurationRequest): Promise<$_model.GetResourceConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResourceConfigurationWithOptions(request, runtime);
  }

  /**
   * Queries the numbers of resources on which the current account has access permissions.
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
   * Queries the numbers of resources on which the current account has access permissions.
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
   * 列出投递渠道
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
   * 列出投递渠道
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
   * Queries a list of filters.
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
   * Queries a list of filters.
   * @returns ListFiltersResponse
   */
  async listFilters(): Promise<$_model.ListFiltersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFiltersWithOptions(runtime);
  }

  /**
   * 列出多账号投递渠道
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
   * 列出多账号投递渠道
   * 
   * @param request - ListMultiAccountDeliveryChannelsRequest
   * @returns ListMultiAccountDeliveryChannelsResponse
   */
  async listMultiAccountDeliveryChannels(request: $_model.ListMultiAccountDeliveryChannelsRequest): Promise<$_model.ListMultiAccountDeliveryChannelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountDeliveryChannelsWithOptions(request, runtime);
  }

  /**
   * Queries the resource groups within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
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
   * Queries the resource groups within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountResourceGroupsRequest
   * @returns ListMultiAccountResourceGroupsResponse
   */
  async listMultiAccountResourceGroups(request: $_model.ListMultiAccountResourceGroupsRequest): Promise<$_model.ListMultiAccountResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the relationships between resources within the management account or members of your resource directory.
   * 
   * @remarks
   *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns up to 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
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
   * Queries the relationships between resources within the management account or members of your resource directory.
   * 
   * @remarks
   *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns up to 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * 
   * @param request - ListMultiAccountResourceRelationshipsRequest
   * @returns ListMultiAccountResourceRelationshipsResponse
   */
  async listMultiAccountResourceRelationships(request: $_model.ListMultiAccountResourceRelationshipsRequest): Promise<$_model.ListMultiAccountResourceRelationshipsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountResourceRelationshipsWithOptions(request, runtime);
  }

  /**
   * Queries the tag keys of resources within the management account or a member of your resource directory.
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
   * Queries the tag keys of resources within the management account or a member of your resource directory.
   * 
   * @param request - ListMultiAccountTagKeysRequest
   * @returns ListMultiAccountTagKeysResponse
   */
  async listMultiAccountTagKeys(request: $_model.ListMultiAccountTagKeysRequest): Promise<$_model.ListMultiAccountTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tag values of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
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
   * Queries the tag values of resources within the management account or a member of a resource directory by using the management account of the resource directory or a delegated administrator account of Resource Center.
   * 
   * @param request - ListMultiAccountTagValuesRequest
   * @returns ListMultiAccountTagValuesResponse
   */
  async listMultiAccountTagValues(request: $_model.ListMultiAccountTagValuesRequest): Promise<$_model.ListMultiAccountTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMultiAccountTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource relationships on which the current account has access permissions.
   * 
   * @remarks
   *   You can call this operation to query only the resource relationships on which the current account has access permissions.
   * *   By default, this operation returns up to 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the query scope. For information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only entries that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Entries that meet any value of the filter condition are returned.
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
   * Queries a list of resource relationships on which the current account has access permissions.
   * 
   * @remarks
   *   You can call this operation to query only the resource relationships on which the current account has access permissions.
   * *   By default, this operation returns up to 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the query scope. For information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only entries that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Entries that meet any value of the filter condition are returned.
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
   * Queries the tag values of resources within the current account.
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
   * Queries the tag values of resources within the current account.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Searches for resources within the management account or members of a resource directory.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.alibabacloud.com/api-tools/demo/ResourceCenter) to view more sample queries.
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
   * Searches for resources within the management account or members of a resource directory.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   Before you use a RAM user or a RAM role to call the operation, you must make sure that the RAM user or RAM role is granted the required permissions. For more information, see [Grant a RAM user the permissions to use Resource Center](https://help.aliyun.com/document_detail/600556.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.alibabacloud.com/api-tools/demo/ResourceCenter) to view more sample queries.
   * 
   * @param request - SearchMultiAccountResourcesRequest
   * @returns SearchMultiAccountResourcesResponse
   */
  async searchMultiAccountResources(request: $_model.SearchMultiAccountResourcesRequest): Promise<$_model.SearchMultiAccountResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMultiAccountResourcesWithOptions(request, runtime);
  }

  /**
   * Search for resources that you can access within the current account.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.aliyun.com/api-tools/demo/ResourceCenter) to view more sample queries.
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

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
   * Search for resources that you can access within the current account.
   * 
   * @remarks
   *   You can use this operation to search for only resources whose types are supported by Resource Center in services that work with Resource Center. For more information about the services and the resource types that are supported by Resource Center, see [Services that work with Resource Center](https://help.aliyun.com/document_detail/477798.html).
   * *   By default, the operation returns a maximum of 20 entries. You can configure the `MaxResults` parameter to specify the maximum number of entries to return.
   * *   If the response does not contain the `NextToken` parameter, all entries are returned. Otherwise, more entries exist. If you want to obtain the entries, you can call the operation again to initiate another query request. In the request, set the `NextToken` parameter to the value of `NextToken` in the last response of the operation. If you do not configure the `NextToken` parameter, entries on the first page are returned by default.
   * *   You can specify one or more filter conditions to narrow the search scope. For more information about supported filter parameters and matching methods, see the Supported filter parameters section. Multiple filter conditions have logical `AND` relations. Only resources that meet all filter conditions are returned. The values of a filter condition have logical `OR` relations. Resources that meet any value of the filter condition are returned.
   * *   You can visit [Sample Code Center](https://api.aliyun.com/api-tools/demo/ResourceCenter) to view more sample queries.
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
   * 更新多账号投递渠道
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
   * 更新多账号投递渠道
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
