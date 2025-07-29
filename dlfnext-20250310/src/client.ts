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
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogSummaryResponse
   */
  async getCatalogSummaryWithOptions(catalogId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
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
   * @returns GetCatalogSummaryResponse
   */
  async getCatalogSummary(catalogId: string): Promise<$_model.GetCatalogSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCatalogSummaryWithOptions(catalogId, headers, runtime);
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseSummaryResponse
   */
  async getDatabaseSummaryWithOptions(catalogId: string, database: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
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
   * @returns GetDatabaseSummaryResponse
   */
  async getDatabaseSummary(catalogId: string, database: string): Promise<$_model.GetDatabaseSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseSummaryWithOptions(catalogId, database, headers, runtime);
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
   * 查看表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableSummaryResponse
   */
  async getTableSummaryWithOptions(catalogId: string, database: string, table: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableSummaryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
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
   * @returns GetTableSummaryResponse
   */
  async getTableSummary(catalogId: string, database: string, table: string): Promise<$_model.GetTableSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableSummaryWithOptions(catalogId, database, table, headers, runtime);
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
