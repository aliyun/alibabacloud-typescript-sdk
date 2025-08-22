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
    this._endpoint = this.getEndpoint("dlfnext", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 更新数据目录
   * 
   * @param request - AlterCatalogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterCatalogResponse
   */
  async alterCatalogWithOptions(catalog: string, request: $_model.AlterCatalogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterCatalogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removals)) {
      body["removals"] = request.removals;
    }

    if (!$dara.isNull(request.updates)) {
      body["updates"] = request.updates;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterCatalog",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs/${$dara.URL.percentEncode(catalog)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AlterCatalogResponse>(await this.callApi(params, req, runtime), new $_model.AlterCatalogResponse({}));
  }

  /**
   * 更新数据目录
   * 
   * @param request - AlterCatalogRequest
   * @returns AlterCatalogResponse
   */
  async alterCatalog(catalog: string, request: $_model.AlterCatalogRequest): Promise<$_model.AlterCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterCatalogWithOptions(catalog, request, headers, runtime);
  }

  /**
   * 更新数据库
   * 
   * @param request - AlterDatabaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterDatabaseResponse
   */
  async alterDatabaseWithOptions(catalogId: string, database: string, request: $_model.AlterDatabaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterDatabaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.removals)) {
      body["removals"] = request.removals;
    }

    if (!$dara.isNull(request.updates)) {
      body["updates"] = request.updates;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterDatabase",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AlterDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.AlterDatabaseResponse({}));
  }

  /**
   * 更新数据库
   * 
   * @param request - AlterDatabaseRequest
   * @returns AlterDatabaseResponse
   */
  async alterDatabase(catalogId: string, database: string, request: $_model.AlterDatabaseRequest): Promise<$_model.AlterDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterDatabaseWithOptions(catalogId, database, request, headers, runtime);
  }

  /**
   * 更新接收者
   * 
   * @param request - AlterReceiverRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterReceiverResponse
   */
  async alterReceiverWithOptions(receiver: string, request: $_model.AlterReceiverRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterReceiverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.receiverName)) {
      body["receiverName"] = request.receiverName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterReceiver",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/receivers/${$dara.URL.percentEncode(receiver)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AlterReceiverResponse>(await this.callApi(params, req, runtime), new $_model.AlterReceiverResponse({}));
  }

  /**
   * 更新接收者
   * 
   * @param request - AlterReceiverRequest
   * @returns AlterReceiverResponse
   */
  async alterReceiver(receiver: string, request: $_model.AlterReceiverRequest): Promise<$_model.AlterReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterReceiverWithOptions(receiver, request, headers, runtime);
  }

  /**
   * 更新共享
   * 
   * @param request - AlterShareRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterShareResponse
   */
  async alterShareWithOptions(share: string, request: $_model.AlterShareRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterShareResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.enableWrite)) {
      body["enableWrite"] = request.enableWrite;
    }

    if (!$dara.isNull(request.shareName)) {
      body["shareName"] = request.shareName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterShare",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AlterShareResponse>(await this.callApi(params, req, runtime), new $_model.AlterShareResponse({}));
  }

  /**
   * 更新共享
   * 
   * @param request - AlterShareRequest
   * @returns AlterShareResponse
   */
  async alterShare(share: string, request: $_model.AlterShareRequest): Promise<$_model.AlterShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterShareWithOptions(share, request, headers, runtime);
  }

  /**
   * 更新共享中的接收者
   * 
   * @param request - AlterShareReceiversRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterShareReceiversResponse
   */
  async alterShareReceiversWithOptions(share: string, request: $_model.AlterShareReceiversRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterShareReceiversResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addedReceivers)) {
      body["addedReceivers"] = request.addedReceivers;
    }

    if (!$dara.isNull(request.removedReceivers)) {
      body["removedReceivers"] = request.removedReceivers;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterShareReceivers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}/receivers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AlterShareReceiversResponse>(await this.callApi(params, req, runtime), new $_model.AlterShareReceiversResponse({}));
  }

  /**
   * 更新共享中的接收者
   * 
   * @param request - AlterShareReceiversRequest
   * @returns AlterShareReceiversResponse
   */
  async alterShareReceivers(share: string, request: $_model.AlterShareReceiversRequest): Promise<$_model.AlterShareReceiversResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterShareReceiversWithOptions(share, request, headers, runtime);
  }

  /**
   * 更改共享资源
   * 
   * @param request - AlterShareResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterShareResourcesResponse
   */
  async alterShareResourcesWithOptions(share: string, request: $_model.AlterShareResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterShareResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalogId)) {
      body["catalogId"] = request.catalogId;
    }

    if (!$dara.isNull(request.shareResourceList)) {
      body["shareResourceList"] = request.shareResourceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterShareResources",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AlterShareResourcesResponse>(await this.callApi(params, req, runtime), new $_model.AlterShareResourcesResponse({}));
  }

  /**
   * 更改共享资源
   * 
   * @param request - AlterShareResourcesRequest
   * @returns AlterShareResourcesResponse
   */
  async alterShareResources(share: string, request: $_model.AlterShareResourcesRequest): Promise<$_model.AlterShareResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterShareResourcesWithOptions(share, request, headers, runtime);
  }

  /**
   * 更改Table
   * 
   * @param request - AlterTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AlterTableResponse
   */
  async alterTableWithOptions(catalogId: string, database: string, table: string, request: $_model.AlterTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AlterTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changes)) {
      body["changes"] = request.changes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AlterTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.AlterTableResponse>(await this.callApi(params, req, runtime), new $_model.AlterTableResponse({}));
  }

  /**
   * 更改Table
   * 
   * @param request - AlterTableRequest
   * @returns AlterTableResponse
   */
  async alterTable(catalogId: string, database: string, table: string, request: $_model.AlterTableRequest): Promise<$_model.AlterTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.alterTableWithOptions(catalogId, database, table, request, headers, runtime);
  }

  /**
   * 批量授权
   * 
   * @param request - BatchGrantPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGrantPermissionsResponse
   */
  async batchGrantPermissionsWithOptions(catalogId: string, request: $_model.BatchGrantPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGrantPermissionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGrantPermissions",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/permissions/${$dara.URL.percentEncode(catalogId)}/batchgrant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGrantPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchGrantPermissionsResponse({}));
  }

  /**
   * 批量授权
   * 
   * @param request - BatchGrantPermissionsRequest
   * @returns BatchGrantPermissionsResponse
   */
  async batchGrantPermissions(catalogId: string, request: $_model.BatchGrantPermissionsRequest): Promise<$_model.BatchGrantPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGrantPermissionsWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 批量取消授权
   * 
   * @param request - BatchRevokePermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchRevokePermissionsResponse
   */
  async batchRevokePermissionsWithOptions(catalogId: string, request: $_model.BatchRevokePermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchRevokePermissionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchRevokePermissions",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/permissions/${$dara.URL.percentEncode(catalogId)}/batchrevoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchRevokePermissionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchRevokePermissionsResponse({}));
  }

  /**
   * 批量取消授权
   * 
   * @param request - BatchRevokePermissionsRequest
   * @returns BatchRevokePermissionsResponse
   */
  async batchRevokePermissions(catalogId: string, request: $_model.BatchRevokePermissionsRequest): Promise<$_model.BatchRevokePermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchRevokePermissionsWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 创建数据目录
   * 
   * @param request - CreateCatalogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCatalogResponse
   */
  async createCatalogWithOptions(request: $_model.CreateCatalogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCatalogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isShared)) {
      body["isShared"] = request.isShared;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.shareId)) {
      body["shareId"] = request.shareId;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCatalog",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateCatalogResponse>(await this.callApi(params, req, runtime), new $_model.CreateCatalogResponse({}));
  }

  /**
   * 创建数据目录
   * 
   * @param request - CreateCatalogRequest
   * @returns CreateCatalogResponse
   */
  async createCatalog(request: $_model.CreateCatalogRequest): Promise<$_model.CreateCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCatalogWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据库
   * 
   * @param request - CreateDatabaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(catalogId: string, request: $_model.CreateDatabaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatabase",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * 创建数据库
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(catalogId: string, request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatabaseWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 创建接收者
   * 
   * @param request - CreateReceiverRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateReceiverResponse
   */
  async createReceiverWithOptions(request: $_model.CreateReceiverRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateReceiverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.receiverName)) {
      body["receiverName"] = request.receiverName;
    }

    if (!$dara.isNull(request.receiverTenantId)) {
      body["receiverTenantId"] = request.receiverTenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateReceiver",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/receivers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateReceiverResponse>(await this.callApi(params, req, runtime), new $_model.CreateReceiverResponse({}));
  }

  /**
   * 创建接收者
   * 
   * @param request - CreateReceiverRequest
   * @returns CreateReceiverResponse
   */
  async createReceiver(request: $_model.CreateReceiverRequest): Promise<$_model.CreateReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createReceiverWithOptions(request, headers, runtime);
  }

  /**
   * 创建角色
   * 
   * @param request - CreateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRoleResponse
   */
  async createRoleWithOptions(request: $_model.CreateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.roleName)) {
      body["roleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRole",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRoleResponse({}));
  }

  /**
   * 创建角色
   * 
   * @param request - CreateRoleRequest
   * @returns CreateRoleResponse
   */
  async createRole(request: $_model.CreateRoleRequest): Promise<$_model.CreateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRoleWithOptions(request, headers, runtime);
  }

  /**
   * 创建共享
   * 
   * @param request - CreateShareRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShareResponse
   */
  async createShareWithOptions(request: $_model.CreateShareRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateShareResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["comment"] = request.comment;
    }

    if (!$dara.isNull(request.enableWrite)) {
      body["enableWrite"] = request.enableWrite;
    }

    if (!$dara.isNull(request.shareName)) {
      body["shareName"] = request.shareName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShare",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateShareResponse>(await this.callApi(params, req, runtime), new $_model.CreateShareResponse({}));
  }

  /**
   * 创建共享
   * 
   * @param request - CreateShareRequest
   * @returns CreateShareResponse
   */
  async createShare(request: $_model.CreateShareRequest): Promise<$_model.CreateShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createShareWithOptions(request, headers, runtime);
  }

  /**
   * 创建表
   * 
   * @param request - CreateTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableResponse
   */
  async createTableWithOptions(catalogId: string, database: string, request: $_model.CreateTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.schema)) {
      body["schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableResponse({}));
  }

  /**
   * 创建表
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(catalogId: string, database: string, request: $_model.CreateTableRequest): Promise<$_model.CreateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(catalogId, database, request, headers, runtime);
  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRoleResponse
   */
  async deleteRoleWithOptions(request: $_model.DeleteRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rolePrincipal)) {
      query["rolePrincipal"] = request.rolePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRole",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteRoleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRoleResponse({}));
  }

  /**
   * 删除角色
   * 
   * @param request - DeleteRoleRequest
   * @returns DeleteRoleResponse
   */
  async deleteRole(request: $_model.DeleteRoleRequest): Promise<$_model.DeleteRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRoleWithOptions(request, headers, runtime);
  }

  /**
   * 查询 DLF 开通地域
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
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/service/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * 查询 DLF 开通地域
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * 创建数据湖Catalog
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropCatalogResponse
   */
  async dropCatalogWithOptions(catalog: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropCatalogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DropCatalog",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs/${$dara.URL.percentEncode(catalog)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DropCatalogResponse>(await this.callApi(params, req, runtime), new $_model.DropCatalogResponse({}));
  }

  /**
   * 创建数据湖Catalog
   * @returns DropCatalogResponse
   */
  async dropCatalog(catalog: string): Promise<$_model.DropCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropCatalogWithOptions(catalog, headers, runtime);
  }

  /**
   * 删除数据库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropDatabaseResponse
   */
  async dropDatabaseWithOptions(catalogId: string, database: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropDatabaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DropDatabase",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DropDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DropDatabaseResponse({}));
  }

  /**
   * 删除数据库
   * @returns DropDatabaseResponse
   */
  async dropDatabase(catalogId: string, database: string): Promise<$_model.DropDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropDatabaseWithOptions(catalogId, database, headers, runtime);
  }

  /**
   * 删除接收者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropReceiverResponse
   */
  async dropReceiverWithOptions(receiver: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropReceiverResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DropReceiver",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/receivers/${$dara.URL.percentEncode(receiver)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DropReceiverResponse>(await this.callApi(params, req, runtime), new $_model.DropReceiverResponse({}));
  }

  /**
   * 删除接收者
   * @returns DropReceiverResponse
   */
  async dropReceiver(receiver: string): Promise<$_model.DropReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropReceiverWithOptions(receiver, headers, runtime);
  }

  /**
   * 删除共享
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropShareResponse
   */
  async dropShareWithOptions(share: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropShareResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DropShare",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DropShareResponse>(await this.callApi(params, req, runtime), new $_model.DropShareResponse({}));
  }

  /**
   * 删除共享
   * @returns DropShareResponse
   */
  async dropShare(share: string): Promise<$_model.DropShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropShareWithOptions(share, headers, runtime);
  }

  /**
   * 删除表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DropTableResponse
   */
  async dropTableWithOptions(catalogId: string, database: string, table: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DropTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DropTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DropTableResponse>(await this.callApi(params, req, runtime), new $_model.DropTableResponse({}));
  }

  /**
   * 删除表
   * @returns DropTableResponse
   */
  async dropTable(catalogId: string, database: string, table: string): Promise<$_model.DropTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dropTableWithOptions(catalogId, database, table, headers, runtime);
  }

  /**
   * 查看数据湖Catalog
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogResponse
   */
  async getCatalogWithOptions(catalog: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalog",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs/${$dara.URL.percentEncode(catalog)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogResponse({}));
  }

  /**
   * 查看数据湖Catalog
   * @returns GetCatalogResponse
   */
  async getCatalog(catalog: string): Promise<$_model.GetCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogWithOptions(catalog, headers, runtime);
  }

  /**
   * 查看数据湖Catalog
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogByIdResponse
   */
  async getCatalogByIdWithOptions(id: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogByIdResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogById",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs/id/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogByIdResponse({}));
  }

  /**
   * 查看数据湖Catalog
   * @returns GetCatalogByIdResponse
   */
  async getCatalogById(id: string): Promise<$_model.GetCatalogByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogByIdWithOptions(id, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param request - GetCatalogSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogSummaryResponse
   */
  async getCatalogSummaryWithOptions(catalogId: string, request: $_model.GetCatalogSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogSummary",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/storage-summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogSummaryResponse({}));
  }

  /**
   * 查看表
   * 
   * @param request - GetCatalogSummaryRequest
   * @returns GetCatalogSummaryResponse
   */
  async getCatalogSummary(catalogId: string, request: $_model.GetCatalogSummaryRequest): Promise<$_model.GetCatalogSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogSummaryWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param request - GetCatalogSummaryTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogSummaryTrendResponse
   */
  async getCatalogSummaryTrendWithOptions(catalogId: string, request: $_model.GetCatalogSummaryTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogSummaryTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogSummaryTrend",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/storage-summary/trend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogSummaryTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogSummaryTrendResponse({}));
  }

  /**
   * 查看表
   * 
   * @param request - GetCatalogSummaryTrendRequest
   * @returns GetCatalogSummaryTrendResponse
   */
  async getCatalogSummaryTrend(catalogId: string, request: $_model.GetCatalogSummaryTrendRequest): Promise<$_model.GetCatalogSummaryTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogSummaryTrendWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 获取数据湖Catalog的临时访问凭证
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogTokenResponse
   */
  async getCatalogTokenWithOptions(catalog: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogToken",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs/${$dara.URL.percentEncode(catalog)}/token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogTokenResponse({}));
  }

  /**
   * 获取数据湖Catalog的临时访问凭证
   * @returns GetCatalogTokenResponse
   */
  async getCatalogToken(catalog: string): Promise<$_model.GetCatalogTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogTokenWithOptions(catalog, headers, runtime);
  }

  /**
   * 查看数据库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseResponse
   */
  async getDatabaseWithOptions(catalogId: string, database: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabase",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseResponse({}));
  }

  /**
   * 查看数据库
   * @returns GetDatabaseResponse
   */
  async getDatabase(catalogId: string, database: string): Promise<$_model.GetDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseWithOptions(catalogId, database, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param request - GetDatabaseSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseSummaryResponse
   */
  async getDatabaseSummaryWithOptions(catalogId: string, database: string, request: $_model.GetDatabaseSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseSummary",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/storage-summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseSummaryResponse({}));
  }

  /**
   * 查看表
   * 
   * @param request - GetDatabaseSummaryRequest
   * @returns GetDatabaseSummaryResponse
   */
  async getDatabaseSummary(catalogId: string, database: string, request: $_model.GetDatabaseSummaryRequest): Promise<$_model.GetDatabaseSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseSummaryWithOptions(catalogId, database, request, headers, runtime);
  }

  /**
   * 查看iceberg数据库
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIcebergNamespaceResponse
   */
  async getIcebergNamespaceWithOptions(catalogId: string, namespace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIcebergNamespaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIcebergNamespace",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/iceberg/dlf/v1/${$dara.URL.percentEncode(catalogId)}/namespaces/${$dara.URL.percentEncode(namespace)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIcebergNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetIcebergNamespaceResponse({}));
  }

  /**
   * 查看iceberg数据库
   * @returns GetIcebergNamespaceResponse
   */
  async getIcebergNamespace(catalogId: string, namespace: string): Promise<$_model.GetIcebergNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIcebergNamespaceWithOptions(catalogId, namespace, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIcebergTableResponse
   */
  async getIcebergTableWithOptions(catalogId: string, namespace: string, table: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIcebergTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIcebergTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/iceberg/dlf/v1/${$dara.URL.percentEncode(catalogId)}/namespaces/${$dara.URL.percentEncode(namespace)}/tables/${$dara.URL.percentEncode(table)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIcebergTableResponse>(await this.callApi(params, req, runtime), new $_model.GetIcebergTableResponse({}));
  }

  /**
   * 查看表
   * @returns GetIcebergTableResponse
   */
  async getIcebergTable(catalogId: string, namespace: string, table: string): Promise<$_model.GetIcebergTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIcebergTableWithOptions(catalogId, namespace, table, headers, runtime);
  }

  /**
   * 获取接收者
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReceiverResponse
   */
  async getReceiverWithOptions(receiver: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetReceiverResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetReceiver",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/receivers/${$dara.URL.percentEncode(receiver)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReceiverResponse>(await this.callApi(params, req, runtime), new $_model.GetReceiverResponse({}));
  }

  /**
   * 获取接收者
   * @returns GetReceiverResponse
   */
  async getReceiver(receiver: string): Promise<$_model.GetReceiverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getReceiverWithOptions(receiver, headers, runtime);
  }

  /**
   * 查询 DLF 当前地域开通状态
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegionStatusResponse
   */
  async getRegionStatusWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegionStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegionStatus",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/service/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegionStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetRegionStatusResponse({}));
  }

  /**
   * 查询 DLF 当前地域开通状态
   * @returns GetRegionStatusResponse
   */
  async getRegionStatus(): Promise<$_model.GetRegionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionStatusWithOptions(headers, runtime);
  }

  /**
   * 获取角色
   * 
   * @param request - GetRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRoleResponse
   */
  async getRoleWithOptions(request: $_model.GetRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rolePrincipal)) {
      query["rolePrincipal"] = request.rolePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRole",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetRoleResponse({}));
  }

  /**
   * 获取角色
   * 
   * @param request - GetRoleRequest
   * @returns GetRoleResponse
   */
  async getRole(request: $_model.GetRoleRequest): Promise<$_model.GetRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRoleWithOptions(request, headers, runtime);
  }

  /**
   * 获取共享
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetShareResponse
   */
  async getShareWithOptions(share: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetShareResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetShare",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetShareResponse>(await this.callApi(params, req, runtime), new $_model.GetShareResponse({}));
  }

  /**
   * 获取共享
   * @returns GetShareResponse
   */
  async getShare(share: string): Promise<$_model.GetShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getShareWithOptions(share, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
  async getTableWithOptions(catalogId: string, database: string, table: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableResponse>(await this.callApi(params, req, runtime), new $_model.GetTableResponse({}));
  }

  /**
   * 查看表
   * @returns GetTableResponse
   */
  async getTable(catalogId: string, database: string, table: string): Promise<$_model.GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(catalogId, database, table, headers, runtime);
  }

  /**
   * 查看表快照
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableSnapshotResponse
   */
  async getTableSnapshotWithOptions(catalogId: string, database: string, table: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableSnapshot",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}/snapshot`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.GetTableSnapshotResponse({}));
  }

  /**
   * 查看表快照
   * @returns GetTableSnapshotResponse
   */
  async getTableSnapshot(catalogId: string, database: string, table: string): Promise<$_model.GetTableSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableSnapshotWithOptions(catalogId, database, table, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param request - GetTableSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableSummaryResponse
   */
  async getTableSummaryWithOptions(catalogId: string, database: string, table: string, request: $_model.GetTableSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.date)) {
      query["date"] = request.date;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableSummary",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}/storage-summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetTableSummaryResponse({}));
  }

  /**
   * 查看表
   * 
   * @param request - GetTableSummaryRequest
   * @returns GetTableSummaryResponse
   */
  async getTableSummary(catalogId: string, database: string, table: string, request: $_model.GetTableSummaryRequest): Promise<$_model.GetTableSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableSummaryWithOptions(catalogId, database, table, request, headers, runtime);
  }

  /**
   * 获取用户
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userPrincipal)) {
      query["userPrincipal"] = request.userPrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * 获取用户
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * 批量授予角色权限给用户
   * 
   * @param request - GrantRoleToUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsersWithOptions(request: $_model.GrantRoleToUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantRoleToUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rolePrincipal)) {
      body["rolePrincipal"] = request.rolePrincipal;
    }

    if (!$dara.isNull(request.userPrincipals)) {
      body["userPrincipals"] = request.userPrincipals;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantRoleToUsers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.GrantRoleToUsersResponse>(await this.callApi(params, req, runtime), new $_model.GrantRoleToUsersResponse({}));
  }

  /**
   * 批量授予角色权限给用户
   * 
   * @param request - GrantRoleToUsersRequest
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsers(request: $_model.GrantRoleToUsersRequest): Promise<$_model.GrantRoleToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleToUsersWithOptions(request, headers, runtime);
  }

  /**
   * 查看数据目录列表
   * 
   * @param request - ListCatalogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCatalogsResponse
   */
  async listCatalogsWithOptions(request: $_model.ListCatalogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCatalogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalogNamePattern)) {
      query["catalogNamePattern"] = request.catalogNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCatalogs",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.ListCatalogsResponse({}));
  }

  /**
   * 查看数据目录列表
   * 
   * @param request - ListCatalogsRequest
   * @returns ListCatalogsResponse
   */
  async listCatalogs(request: $_model.ListCatalogsRequest): Promise<$_model.ListCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCatalogsWithOptions(request, headers, runtime);
  }

  /**
   * 查看数据库列表
   * 
   * @param request - ListDatabaseDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabaseDetailsResponse
   */
  async listDatabaseDetailsWithOptions(catalogId: string, request: $_model.ListDatabaseDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabaseDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseNamePattern)) {
      query["databaseNamePattern"] = request.databaseNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabaseDetails",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/database-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabaseDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabaseDetailsResponse({}));
  }

  /**
   * 查看数据库列表
   * 
   * @param request - ListDatabaseDetailsRequest
   * @returns ListDatabaseDetailsResponse
   */
  async listDatabaseDetails(catalogId: string, request: $_model.ListDatabaseDetailsRequest): Promise<$_model.ListDatabaseDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabaseDetailsWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 查看数据库列表
   * 
   * @param request - ListDatabasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(catalogId: string, request: $_model.ListDatabasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseNamePattern)) {
      query["databaseNamePattern"] = request.databaseNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * 查看数据库列表
   * 
   * @param request - ListDatabasesRequest
   * @returns ListDatabasesResponse
   */
  async listDatabases(catalogId: string, request: $_model.ListDatabasesRequest): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 查看iceberg数据库列表
   * 
   * @param request - ListIcebergNamespaceDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIcebergNamespaceDetailsResponse
   */
  async listIcebergNamespaceDetailsWithOptions(catalogId: string, request: $_model.ListIcebergNamespaceDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIcebergNamespaceDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namespaceNamePattern)) {
      query["namespaceNamePattern"] = request.namespaceNamePattern;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIcebergNamespaceDetails",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/iceberg/dlf/v1/${$dara.URL.percentEncode(catalogId)}/namespace-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIcebergNamespaceDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListIcebergNamespaceDetailsResponse({}));
  }

  /**
   * 查看iceberg数据库列表
   * 
   * @param request - ListIcebergNamespaceDetailsRequest
   * @returns ListIcebergNamespaceDetailsResponse
   */
  async listIcebergNamespaceDetails(catalogId: string, request: $_model.ListIcebergNamespaceDetailsRequest): Promise<$_model.ListIcebergNamespaceDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIcebergNamespaceDetailsWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 查看iceberg表快照列表
   * 
   * @param request - ListIcebergSnapshotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIcebergSnapshotsResponse
   */
  async listIcebergSnapshotsWithOptions(catalogId: string, namespace: string, table: string, request: $_model.ListIcebergSnapshotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIcebergSnapshotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIcebergSnapshots",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/iceberg/dlf/v1/${$dara.URL.percentEncode(catalogId)}/namespaces/${$dara.URL.percentEncode(namespace)}/tables/${$dara.URL.percentEncode(table)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIcebergSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.ListIcebergSnapshotsResponse({}));
  }

  /**
   * 查看iceberg表快照列表
   * 
   * @param request - ListIcebergSnapshotsRequest
   * @returns ListIcebergSnapshotsResponse
   */
  async listIcebergSnapshots(catalogId: string, namespace: string, table: string, request: $_model.ListIcebergSnapshotsRequest): Promise<$_model.ListIcebergSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIcebergSnapshotsWithOptions(catalogId, namespace, table, request, headers, runtime);
  }

  /**
   * 查看iceberg表详情列表
   * 
   * @param request - ListIcebergTableDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIcebergTableDetailsResponse
   */
  async listIcebergTableDetailsWithOptions(catalogId: string, namespace: string, request: $_model.ListIcebergTableDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIcebergTableDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["tableNamePattern"] = request.tableNamePattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIcebergTableDetails",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/iceberg/dlf/v1/${$dara.URL.percentEncode(catalogId)}/namespaces/${$dara.URL.percentEncode(namespace)}/table-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIcebergTableDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListIcebergTableDetailsResponse({}));
  }

  /**
   * 查看iceberg表详情列表
   * 
   * @param request - ListIcebergTableDetailsRequest
   * @returns ListIcebergTableDetailsResponse
   */
  async listIcebergTableDetails(catalogId: string, namespace: string, request: $_model.ListIcebergTableDetailsRequest): Promise<$_model.ListIcebergTableDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIcebergTableDetailsWithOptions(catalogId, namespace, request, headers, runtime);
  }

  /**
   * 查看表
   * 
   * @param request - ListPartitionSummariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPartitionSummariesResponse
   */
  async listPartitionSummariesWithOptions(catalogId: string, database: string, table: string, request: $_model.ListPartitionSummariesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPartitionSummariesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.partitionNamePattern)) {
      query["partitionNamePattern"] = request.partitionNamePattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPartitionSummaries",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}/partitions/storage-summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPartitionSummariesResponse>(await this.callApi(params, req, runtime), new $_model.ListPartitionSummariesResponse({}));
  }

  /**
   * 查看表
   * 
   * @param request - ListPartitionSummariesRequest
   * @returns ListPartitionSummariesResponse
   */
  async listPartitionSummaries(catalogId: string, database: string, table: string, request: $_model.ListPartitionSummariesRequest): Promise<$_model.ListPartitionSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPartitionSummariesWithOptions(catalogId, database, table, request, headers, runtime);
  }

  /**
   * 获取指定资源或指定Principal的权限信息
   * 
   * @param request - ListPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(catalogId: string, request: $_model.ListPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.function)) {
      query["function"] = request.function;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.principal)) {
      query["principal"] = request.principal;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    if (!$dara.isNull(request.view)) {
      query["view"] = request.view;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissions",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/permissions/${$dara.URL.percentEncode(catalogId)}/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionsResponse({}));
  }

  /**
   * 获取指定资源或指定Principal的权限信息
   * 
   * @param request - ListPermissionsRequest
   * @returns ListPermissionsResponse
   */
  async listPermissions(catalogId: string, request: $_model.ListPermissionsRequest): Promise<$_model.ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(catalogId, request, headers, runtime);
  }

  /**
   * 获取提供的共享列表
   * 
   * @param request - ListProvidedSharesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvidedSharesResponse
   */
  async listProvidedSharesWithOptions(request: $_model.ListProvidedSharesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProvidedSharesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProvidedShares",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/list/provided`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProvidedSharesResponse>(await this.callApi(params, req, runtime), new $_model.ListProvidedSharesResponse({}));
  }

  /**
   * 获取提供的共享列表
   * 
   * @param request - ListProvidedSharesRequest
   * @returns ListProvidedSharesResponse
   */
  async listProvidedShares(request: $_model.ListProvidedSharesRequest): Promise<$_model.ListProvidedSharesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProvidedSharesWithOptions(request, headers, runtime);
  }

  /**
   * 获取接收的共享列表
   * 
   * @param request - ListReceivedSharesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReceivedSharesResponse
   */
  async listReceivedSharesWithOptions(request: $_model.ListReceivedSharesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReceivedSharesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReceivedShares",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/list/received`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReceivedSharesResponse>(await this.callApi(params, req, runtime), new $_model.ListReceivedSharesResponse({}));
  }

  /**
   * 获取接收的共享列表
   * 
   * @param request - ListReceivedSharesRequest
   * @returns ListReceivedSharesResponse
   */
  async listReceivedShares(request: $_model.ListReceivedSharesRequest): Promise<$_model.ListReceivedSharesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReceivedSharesWithOptions(request, headers, runtime);
  }

  /**
   * 获取接收者列表
   * 
   * @param request - ListReceiversRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReceiversResponse
   */
  async listReceiversWithOptions(request: $_model.ListReceiversRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReceiversResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.receiverName)) {
      query["receiverName"] = request.receiverName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReceivers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/receivers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReceiversResponse>(await this.callApi(params, req, runtime), new $_model.ListReceiversResponse({}));
  }

  /**
   * 获取接收者列表
   * 
   * @param request - ListReceiversRequest
   * @returns ListReceiversResponse
   */
  async listReceivers(request: $_model.ListReceiversRequest): Promise<$_model.ListReceiversResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReceiversWithOptions(request, headers, runtime);
  }

  /**
   * 获取角色用户列表
   * 
   * @param request - ListRoleUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRoleUsersResponse
   */
  async listRoleUsersWithOptions(request: $_model.ListRoleUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRoleUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.rolePrincipal)) {
      query["rolePrincipal"] = request.rolePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoleUsers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles/users/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRoleUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListRoleUsersResponse({}));
  }

  /**
   * 获取角色用户列表
   * 
   * @param request - ListRoleUsersRequest
   * @returns ListRoleUsersResponse
   */
  async listRoleUsers(request: $_model.ListRoleUsersRequest): Promise<$_model.ListRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRoleUsersWithOptions(request, headers, runtime);
  }

  /**
   * 获取角色列表
   * 
   * @param request - ListRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRolesResponse
   */
  async listRolesWithOptions(request: $_model.ListRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRolesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.roleName)) {
      query["roleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRoles",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListRolesResponse({}));
  }

  /**
   * 获取角色列表
   * 
   * @param request - ListRolesRequest
   * @returns ListRolesResponse
   */
  async listRoles(request: $_model.ListRolesRequest): Promise<$_model.ListRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRolesWithOptions(request, headers, runtime);
  }

  /**
   * 获取共享中的接收者列表
   * 
   * @param request - ListShareReceiversRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShareReceiversResponse
   */
  async listShareReceiversWithOptions(share: string, request: $_model.ListShareReceiversRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListShareReceiversResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShareReceivers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}/receivers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShareReceiversResponse>(await this.callApi(params, req, runtime), new $_model.ListShareReceiversResponse({}));
  }

  /**
   * 获取共享中的接收者列表
   * 
   * @param request - ListShareReceiversRequest
   * @returns ListShareReceiversResponse
   */
  async listShareReceivers(share: string, request: $_model.ListShareReceiversRequest): Promise<$_model.ListShareReceiversResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShareReceiversWithOptions(share, request, headers, runtime);
  }

  /**
   * 获取共享资源列表
   * 
   * @param request - ListShareResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShareResourcesResponse
   */
  async listShareResourcesWithOptions(share: string, request: $_model.ListShareResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListShareResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShareResources",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/share/shares/${$dara.URL.percentEncode(share)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShareResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListShareResourcesResponse({}));
  }

  /**
   * 获取共享资源列表
   * 
   * @param request - ListShareResourcesRequest
   * @returns ListShareResourcesResponse
   */
  async listShareResources(share: string, request: $_model.ListShareResourcesRequest): Promise<$_model.ListShareResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShareResourcesWithOptions(share, request, headers, runtime);
  }

  /**
   * 查看表快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(catalogId: string, database: string, table: string, request: $_model.ListSnapshotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotsResponse({}));
  }

  /**
   * 查看表快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(catalogId: string, database: string, table: string, request: $_model.ListSnapshotsRequest): Promise<$_model.ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotsWithOptions(catalogId, database, table, request, headers, runtime);
  }

  /**
   * 查看表详情列表
   * 
   * @param request - ListTableDetailsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableDetailsResponse
   */
  async listTableDetailsWithOptions(catalogId: string, database: string, request: $_model.ListTableDetailsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableDetailsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["tableNamePattern"] = request.tableNamePattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableDetails",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/table-details`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableDetailsResponse>(await this.callApi(params, req, runtime), new $_model.ListTableDetailsResponse({}));
  }

  /**
   * 查看表详情列表
   * 
   * @param request - ListTableDetailsRequest
   * @returns ListTableDetailsResponse
   */
  async listTableDetails(catalogId: string, database: string, request: $_model.ListTableDetailsRequest): Promise<$_model.ListTableDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableDetailsWithOptions(catalogId, database, request, headers, runtime);
  }

  /**
   * 查看表详情列表
   * 
   * @param request - ListTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(catalogId: string, database: string, request: $_model.ListTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["tableNamePattern"] = request.tableNamePattern;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * 查看表详情列表
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(catalogId: string, database: string, request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(catalogId, database, request, headers, runtime);
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListUserRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserRolesResponse
   */
  async listUserRolesWithOptions(request: $_model.ListUserRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserRolesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.userPrincipal)) {
      query["userPrincipal"] = request.userPrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserRoles",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/users/roles/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListUserRolesResponse({}));
  }

  /**
   * 获取用户角色列表
   * 
   * @param request - ListUserRolesRequest
   * @returns ListUserRolesResponse
   */
  async listUserRoles(request: $_model.ListUserRolesRequest): Promise<$_model.ListUserRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserRolesWithOptions(request, headers, runtime);
  }

  /**
   * 获取用户列表
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["pageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.userName)) {
      query["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/users/list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * 获取用户列表
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(request, headers, runtime);
  }

  /**
   * 刷新用户同步
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshUserSyncResponse
   */
  async refreshUserSyncWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshUserSyncResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshUserSync",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/usersync`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RefreshUserSyncResponse>(await this.callApi(params, req, runtime), new $_model.RefreshUserSyncResponse({}));
  }

  /**
   * 刷新用户同步
   * @returns RefreshUserSyncResponse
   */
  async refreshUserSync(): Promise<$_model.RefreshUserSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.refreshUserSyncWithOptions(headers, runtime);
  }

  /**
   * 批量取消授予角色权限给用户
   * 
   * @param request - RevokeRoleFromUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeRoleFromUsersResponse
   */
  async revokeRoleFromUsersWithOptions(request: $_model.RevokeRoleFromUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeRoleFromUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rolePrincipal)) {
      body["rolePrincipal"] = request.rolePrincipal;
    }

    if (!$dara.isNull(request.userPrincipals)) {
      body["userPrincipals"] = request.userPrincipals;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeRoleFromUsers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles/revoke`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RevokeRoleFromUsersResponse>(await this.callApi(params, req, runtime), new $_model.RevokeRoleFromUsersResponse({}));
  }

  /**
   * 批量取消授予角色权限给用户
   * 
   * @param request - RevokeRoleFromUsersRequest
   * @returns RevokeRoleFromUsersResponse
   */
  async revokeRoleFromUsers(request: $_model.RevokeRoleFromUsersRequest): Promise<$_model.RevokeRoleFromUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.revokeRoleFromUsersWithOptions(request, headers, runtime);
  }

  /**
   * 回滚表
   * 
   * @param request - RollbackTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackTableResponse
   */
  async rollbackTableWithOptions(catalogId: string, database: string, table: string, request: $_model.RollbackTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackTableResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instant)) {
      body["instant"] = request.instant;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackTable",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/${$dara.URL.percentEncode(catalogId)}/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(table)}/rollback`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.RollbackTableResponse>(await this.callApi(params, req, runtime), new $_model.RollbackTableResponse({}));
  }

  /**
   * 回滚表
   * 
   * @param request - RollbackTableRequest
   * @returns RollbackTableResponse
   */
  async rollbackTable(catalogId: string, database: string, table: string, request: $_model.RollbackTableRequest): Promise<$_model.RollbackTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rollbackTableWithOptions(catalogId, database, table, request, headers, runtime);
  }

  /**
   * 订阅当前地域的 DLF
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubscribeResponse
   */
  async subscribeWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubscribeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "Subscribe",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/service/subscribe`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.SubscribeResponse>(await this.callApi(params, req, runtime), new $_model.SubscribeResponse({}));
  }

  /**
   * 订阅当前地域的 DLF
   * @returns SubscribeResponse
   */
  async subscribe(): Promise<$_model.SubscribeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.subscribeWithOptions(headers, runtime);
  }

  /**
   * 更新角色
   * 
   * @param request - UpdateRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleResponse
   */
  async updateRoleWithOptions(request: $_model.UpdateRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.rolePrincipal)) {
      body["rolePrincipal"] = request.rolePrincipal;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRole",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleResponse({}));
  }

  /**
   * 更新角色
   * 
   * @param request - UpdateRoleRequest
   * @returns UpdateRoleResponse
   */
  async updateRole(request: $_model.UpdateRoleRequest): Promise<$_model.UpdateRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleWithOptions(request, headers, runtime);
  }

  /**
   * 更新角色用户
   * 
   * @param request - UpdateRoleUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRoleUsersResponse
   */
  async updateRoleUsersWithOptions(request: $_model.UpdateRoleUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRoleUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.rolePrincipal)) {
      body["rolePrincipal"] = request.rolePrincipal;
    }

    if (!$dara.isNull(request.userPrincipals)) {
      body["userPrincipals"] = request.userPrincipals;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRoleUsers",
      version: "2025-03-10",
      protocol: "HTTPS",
      pathname: `/dlf/v1/auth/roles/users`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.UpdateRoleUsersResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRoleUsersResponse({}));
  }

  /**
   * 更新角色用户
   * 
   * @param request - UpdateRoleUsersRequest
   * @returns UpdateRoleUsersResponse
   */
  async updateRoleUsers(request: $_model.UpdateRoleUsersRequest): Promise<$_model.UpdateRoleUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRoleUsersWithOptions(request, headers, runtime);
  }

}
