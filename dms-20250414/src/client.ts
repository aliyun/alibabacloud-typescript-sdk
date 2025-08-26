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
    this._endpoint = this.getEndpoint("dms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 批量新建湖仓表分区
   * 
   * @param tmpReq - BatchCreateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitionsWithOptions(tmpReq: $_model.BatchCreateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchCreateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchCreateDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchCreateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchCreateDataLakePartitionsResponse({}));
  }

  /**
   * 批量新建湖仓表分区
   * 
   * @param request - BatchCreateDataLakePartitionsRequest
   * @returns BatchCreateDataLakePartitionsResponse
   */
  async batchCreateDataLakePartitions(request: $_model.BatchCreateDataLakePartitionsRequest): Promise<$_model.BatchCreateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchCreateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 批量删除湖仓表分区
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitionsWithOptions(request: $_model.BatchDeleteDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesList)) {
      query["PartitionValuesList"] = request.partitionValuesList;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchDeleteDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchDeleteDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchDeleteDataLakePartitionsResponse({}));
  }

  /**
   * 批量删除湖仓表分区
   * 
   * @param request - BatchDeleteDataLakePartitionsRequest
   * @returns BatchDeleteDataLakePartitionsResponse
   */
  async batchDeleteDataLakePartitions(request: $_model.BatchDeleteDataLakePartitionsRequest): Promise<$_model.BatchDeleteDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchDeleteDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 批量更新湖仓表分区
   * 
   * @param tmpReq - BatchUpdateDataLakePartitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitionsWithOptions(tmpReq: $_model.BatchUpdateDataLakePartitionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    tmpReq.validate();
    let request = new $_model.BatchUpdateDataLakePartitionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInputs)) {
      request.partitionInputsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInputs, "PartitionInputs", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputsShrink)) {
      body["PartitionInputs"] = request.partitionInputsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchUpdateDataLakePartitions",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchUpdateDataLakePartitionsResponse>(await this.callApi(params, req, runtime), new $_model.BatchUpdateDataLakePartitionsResponse({}));
  }

  /**
   * 批量更新湖仓表分区
   * 
   * @param request - BatchUpdateDataLakePartitionsRequest
   * @returns BatchUpdateDataLakePartitionsResponse
   */
  async batchUpdateDataLakePartitions(request: $_model.BatchUpdateDataLakePartitionsRequest): Promise<$_model.BatchUpdateDataLakePartitionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchUpdateDataLakePartitionsWithOptions(request, runtime);
  }

  /**
   * 创建Airflow
   * 
   * @param request - CreateAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAirflowResponse
   */
  async createAirflowWithOptions(request: $_model.CreateAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowName)) {
      query["AirflowName"] = request.airflowName;
    }

    if (!$dara.isNull(request.appSpec)) {
      query["AppSpec"] = request.appSpec;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dagsDir)) {
      query["DagsDir"] = request.dagsDir;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.pluginsDir)) {
      query["PluginsDir"] = request.pluginsDir;
    }

    if (!$dara.isNull(request.requirementFile)) {
      query["RequirementFile"] = request.requirementFile;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.startupFile)) {
      query["StartupFile"] = request.startupFile;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.workerServerlessReplicas)) {
      query["WorkerServerlessReplicas"] = request.workerServerlessReplicas;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAirflowResponse>(await this.callApi(params, req, runtime), new $_model.CreateAirflowResponse({}));
  }

  /**
   * 创建Airflow
   * 
   * @param request - CreateAirflowRequest
   * @returns CreateAirflowResponse
   */
  async createAirflow(request: $_model.CreateAirflowRequest): Promise<$_model.CreateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowWithOptions(request, runtime);
  }

  /**
   * Queries the Airflow logon credential. You can use this credential to log on to the DMS-managed Airflow instance.
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginTokenWithOptions(request: $_model.CreateAirflowLoginTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAirflowLoginTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAirflowLoginToken",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAirflowLoginTokenResponse>(await this.callApi(params, req, runtime), new $_model.CreateAirflowLoginTokenResponse({}));
  }

  /**
   * Queries the Airflow logon credential. You can use this credential to log on to the DMS-managed Airflow instance.
   * 
   * @param request - CreateAirflowLoginTokenRequest
   * @returns CreateAirflowLoginTokenResponse
   */
  async createAirflowLoginToken(request: $_model.CreateAirflowLoginTokenRequest): Promise<$_model.CreateAirflowLoginTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAirflowLoginTokenWithOptions(request, runtime);
  }

  /**
   * 新建湖仓数据库
   * 
   * @param tmpReq - CreateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabaseWithOptions(tmpReq: $_model.CreateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeDatabaseResponse({}));
  }

  /**
   * 新建湖仓数据库
   * 
   * @param request - CreateDataLakeDatabaseRequest
   * @returns CreateDataLakeDatabaseResponse
   */
  async createDataLakeDatabase(request: $_model.CreateDataLakeDatabaseRequest): Promise<$_model.CreateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 新建湖仓自定义函数
   * 
   * @param tmpReq - CreateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunctionWithOptions(tmpReq: $_model.CreateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeFunctionResponse({}));
  }

  /**
   * 新建湖仓自定义函数
   * 
   * @param request - CreateDataLakeFunctionRequest
   * @returns CreateDataLakeFunctionResponse
   */
  async createDataLakeFunction(request: $_model.CreateDataLakeFunctionRequest): Promise<$_model.CreateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 新建湖仓表分区
   * 
   * @param tmpReq - CreateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartitionWithOptions(tmpReq: $_model.CreateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifNotExists)) {
      query["IfNotExists"] = request.ifNotExists;
    }

    if (!$dara.isNull(request.needResult)) {
      query["NeedResult"] = request.needResult;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakePartitionResponse({}));
  }

  /**
   * 新建湖仓表分区
   * 
   * @param request - CreateDataLakePartitionRequest
   * @returns CreateDataLakePartitionResponse
   */
  async createDataLakePartition(request: $_model.CreateDataLakePartitionRequest): Promise<$_model.CreateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 新建湖仓表
   * 
   * @param tmpReq - CreateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTableWithOptions(tmpReq: $_model.CreateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataLakeTableResponse({}));
  }

  /**
   * 新建湖仓表
   * 
   * @param request - CreateDataLakeTableRequest
   * @returns CreateDataLakeTableResponse
   */
  async createDataLakeTable(request: $_model.CreateDataLakeTableRequest): Promise<$_model.CreateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 删除Airflow
   * 
   * @param request - DeleteAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAirflowResponse
   */
  async deleteAirflowWithOptions(request: $_model.DeleteAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAirflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAirflowResponse({}));
  }

  /**
   * 删除Airflow
   * 
   * @param request - DeleteAirflowRequest
   * @returns DeleteAirflowResponse
   */
  async deleteAirflow(request: $_model.DeleteAirflowRequest): Promise<$_model.DeleteAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAirflowWithOptions(request, runtime);
  }

  /**
   * 删除湖仓数据库
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabaseWithOptions(request: $_model.DeleteDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeDatabaseResponse({}));
  }

  /**
   * 删除湖仓数据库
   * 
   * @param request - DeleteDataLakeDatabaseRequest
   * @returns DeleteDataLakeDatabaseResponse
   */
  async deleteDataLakeDatabase(request: $_model.DeleteDataLakeDatabaseRequest): Promise<$_model.DeleteDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 删除湖仓自定义函数
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunctionWithOptions(request: $_model.DeleteDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeFunctionResponse({}));
  }

  /**
   * 删除湖仓自定义函数
   * 
   * @param request - DeleteDataLakeFunctionRequest
   * @returns DeleteDataLakeFunctionResponse
   */
  async deleteDataLakeFunction(request: $_model.DeleteDataLakeFunctionRequest): Promise<$_model.DeleteDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 删除湖仓表分区
   * 
   * @param tmpReq - DeleteDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartitionWithOptions(tmpReq: $_model.DeleteDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.ifExists)) {
      query["IfExists"] = request.ifExists;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakePartitionResponse({}));
  }

  /**
   * 删除湖仓表分区
   * 
   * @param request - DeleteDataLakePartitionRequest
   * @returns DeleteDataLakePartitionResponse
   */
  async deleteDataLakePartition(request: $_model.DeleteDataLakePartitionRequest): Promise<$_model.DeleteDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 删除湖仓表
   * 
   * @param request - DeleteDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTableWithOptions(request: $_model.DeleteDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataLakeTableResponse({}));
  }

  /**
   * 删除湖仓表
   * 
   * @param request - DeleteDataLakeTableRequest
   * @returns DeleteDataLakeTableResponse
   */
  async deleteDataLakeTable(request: $_model.DeleteDataLakeTableRequest): Promise<$_model.DeleteDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 查询 Airflow
   * 
   * @param request - GetAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAirflowResponse
   */
  async getAirflowWithOptions(request: $_model.GetAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAirflowResponse>(await this.callApi(params, req, runtime), new $_model.GetAirflowResponse({}));
  }

  /**
   * 查询 Airflow
   * 
   * @param request - GetAirflowRequest
   * @returns GetAirflowResponse
   */
  async getAirflow(request: $_model.GetAirflowRequest): Promise<$_model.GetAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAirflowWithOptions(request, runtime);
  }

  /**
   * 获取uc的数据库目录
   * 
   * @param request - GetDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalogWithOptions(request: $_model.GetDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeCatalog",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeCatalogResponse({}));
  }

  /**
   * 获取uc的数据库目录
   * 
   * @param request - GetDataLakeCatalogRequest
   * @returns GetDataLakeCatalogResponse
   */
  async getDataLakeCatalog(request: $_model.GetDataLakeCatalogRequest): Promise<$_model.GetDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * 获取UC的数据库
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabaseWithOptions(request: $_model.GetDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeDatabaseResponse({}));
  }

  /**
   * 获取UC的数据库
   * 
   * @param request - GetDataLakeDatabaseRequest
   * @returns GetDataLakeDatabaseResponse
   */
  async getDataLakeDatabase(request: $_model.GetDataLakeDatabaseRequest): Promise<$_model.GetDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 获取湖仓自定义函数详细信息
   * 
   * @param request - GetDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunctionWithOptions(request: $_model.GetDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeFunctionResponse({}));
  }

  /**
   * 获取湖仓自定义函数详细信息
   * 
   * @param request - GetDataLakeFunctionRequest
   * @returns GetDataLakeFunctionResponse
   */
  async getDataLakeFunction(request: $_model.GetDataLakeFunctionRequest): Promise<$_model.GetDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 获取湖仓表分区详情
   * 
   * @param tmpReq - GetDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartitionWithOptions(tmpReq: $_model.GetDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.GetDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionValues)) {
      request.partitionValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionValues, "PartitionValues", "simple");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.partitionValuesShrink)) {
      query["PartitionValues"] = request.partitionValuesShrink;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakePartitionResponse({}));
  }

  /**
   * 获取湖仓表分区详情
   * 
   * @param request - GetDataLakePartitionRequest
   * @returns GetDataLakePartitionResponse
   */
  async getDataLakePartition(request: $_model.GetDataLakePartitionRequest): Promise<$_model.GetDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 获取表信息
   * 
   * @param request - GetDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTableWithOptions(request: $_model.GetDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.GetDataLakeTableResponse({}));
  }

  /**
   * 获取表信息
   * 
   * @param request - GetDataLakeTableRequest
   * @returns GetDataLakeTableResponse
   */
  async getDataLakeTable(request: $_model.GetDataLakeTableRequest): Promise<$_model.GetDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 列出资源Airflow
   * 
   * @param request - ListAirflowsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAirflowsResponse
   */
  async listAirflowsWithOptions(request: $_model.ListAirflowsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAirflowsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.skip)) {
      query["Skip"] = request.skip;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAirflows",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAirflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListAirflowsResponse({}));
  }

  /**
   * 列出资源Airflow
   * 
   * @param request - ListAirflowsRequest
   * @returns ListAirflowsResponse
   */
  async listAirflows(request: $_model.ListAirflowsRequest): Promise<$_model.ListAirflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAirflowsWithOptions(request, runtime);
  }

  /**
   * 获取uc的数据库目录列表
   * 
   * @param request - ListDataLakeCatalogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalogWithOptions(request: $_model.ListDataLakeCatalogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeCatalogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeCatalog",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeCatalogResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeCatalogResponse({}));
  }

  /**
   * 获取uc的数据库目录列表
   * 
   * @param request - ListDataLakeCatalogRequest
   * @returns ListDataLakeCatalogResponse
   */
  async listDataLakeCatalog(request: $_model.ListDataLakeCatalogRequest): Promise<$_model.ListDataLakeCatalogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeCatalogWithOptions(request, runtime);
  }

  /**
   * 获取数据库列表
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabaseWithOptions(request: $_model.ListDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeDatabaseResponse({}));
  }

  /**
   * 获取数据库列表
   * 
   * @param request - ListDataLakeDatabaseRequest
   * @returns ListDataLakeDatabaseResponse
   */
  async listDataLakeDatabase(request: $_model.ListDataLakeDatabaseRequest): Promise<$_model.ListDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 获取数据湖函数列表
   * 
   * @param request - ListDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunctionWithOptions(request: $_model.ListDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionResponse({}));
  }

  /**
   * 获取数据湖函数列表
   * 
   * @param request - ListDataLakeFunctionRequest
   * @returns ListDataLakeFunctionResponse
   */
  async listDataLakeFunction(request: $_model.ListDataLakeFunctionRequest): Promise<$_model.ListDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 获取数据湖函数名列表
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionNameWithOptions(request: $_model.ListDataLakeFunctionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeFunctionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionNamePattern)) {
      query["FunctionNamePattern"] = request.functionNamePattern;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeFunctionName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeFunctionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeFunctionNameResponse({}));
  }

  /**
   * 获取数据湖函数名列表
   * 
   * @param request - ListDataLakeFunctionNameRequest
   * @returns ListDataLakeFunctionNameResponse
   */
  async listDataLakeFunctionName(request: $_model.ListDataLakeFunctionNameRequest): Promise<$_model.ListDataLakeFunctionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeFunctionNameWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表分区列表
   * 
   * @param tmpReq - ListDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartitionWithOptions(tmpReq: $_model.ListDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.ListDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partNames)) {
      request.partNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partNames, "PartNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partNamesShrink)) {
      body["PartNames"] = request.partNamesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionResponse({}));
  }

  /**
   * 获取数据湖表分区列表
   * 
   * @param request - ListDataLakePartitionRequest
   * @returns ListDataLakePartitionResponse
   */
  async listDataLakePartition(request: $_model.ListDataLakePartitionRequest): Promise<$_model.ListDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 根据筛选条件获取数据湖表分区列表
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilterWithOptions(request: $_model.ListDataLakePartitionByFilterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      body["Filter"] = request.filter;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionByFilter",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionByFilterResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionByFilterResponse({}));
  }

  /**
   * 根据筛选条件获取数据湖表分区列表
   * 
   * @param request - ListDataLakePartitionByFilterRequest
   * @returns ListDataLakePartitionByFilterResponse
   */
  async listDataLakePartitionByFilter(request: $_model.ListDataLakePartitionByFilterRequest): Promise<$_model.ListDataLakePartitionByFilterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionByFilterWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表分区名列表
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionNameWithOptions(request: $_model.ListDataLakePartitionNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakePartitionNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakePartitionName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakePartitionNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakePartitionNameResponse({}));
  }

  /**
   * 获取数据湖表分区名列表
   * 
   * @param request - ListDataLakePartitionNameRequest
   * @returns ListDataLakePartitionNameResponse
   */
  async listDataLakePartitionName(request: $_model.ListDataLakePartitionNameRequest): Promise<$_model.ListDataLakePartitionNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakePartitionNameWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表列表
   * 
   * @param request - ListDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTableWithOptions(request: $_model.ListDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableResponse({}));
  }

  /**
   * 获取数据湖表列表
   * 
   * @param request - ListDataLakeTableRequest
   * @returns ListDataLakeTableResponse
   */
  async listDataLakeTable(request: $_model.ListDataLakeTableRequest): Promise<$_model.ListDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableWithOptions(request, runtime);
  }

  /**
   * 获取数据湖表名列表
   * 
   * @param request - ListDataLakeTableNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableNameWithOptions(request: $_model.ListDataLakeTableNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTableNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.tableNamePattern)) {
      query["TableNamePattern"] = request.tableNamePattern;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTableName",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTableNameResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTableNameResponse({}));
  }

  /**
   * 获取数据湖表名列表
   * 
   * @param request - ListDataLakeTableNameRequest
   * @returns ListDataLakeTableNameResponse
   */
  async listDataLakeTableName(request: $_model.ListDataLakeTableNameRequest): Promise<$_model.ListDataLakeTableNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTableNameWithOptions(request, runtime);
  }

  /**
   * 获取表信息
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfoWithOptions(request: $_model.ListDataLakeTablebaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.rows)) {
      query["Rows"] = request.rows;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataLakeTablebaseInfo",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataLakeTablebaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListDataLakeTablebaseInfoResponse({}));
  }

  /**
   * 获取表信息
   * 
   * @param request - ListDataLakeTablebaseInfoRequest
   * @returns ListDataLakeTablebaseInfoResponse
   */
  async listDataLakeTablebaseInfo(request: $_model.ListDataLakeTablebaseInfoRequest): Promise<$_model.ListDataLakeTablebaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataLakeTablebaseInfoWithOptions(request, runtime);
  }

  /**
   * 更新UpdateAirflow
   * 
   * @param request - UpdateAirflowRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAirflowResponse
   */
  async updateAirflowWithOptions(request: $_model.UpdateAirflowRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAirflowResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.airflowId)) {
      query["AirflowId"] = request.airflowId;
    }

    if (!$dara.isNull(request.airflowName)) {
      query["AirflowName"] = request.airflowName;
    }

    if (!$dara.isNull(request.appSpec)) {
      query["AppSpec"] = request.appSpec;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dagsDir)) {
      query["DagsDir"] = request.dagsDir;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.pluginsDir)) {
      query["PluginsDir"] = request.pluginsDir;
    }

    if (!$dara.isNull(request.requirementFile)) {
      query["RequirementFile"] = request.requirementFile;
    }

    if (!$dara.isNull(request.startupFile)) {
      query["StartupFile"] = request.startupFile;
    }

    if (!$dara.isNull(request.workerServerlessReplicas)) {
      query["WorkerServerlessReplicas"] = request.workerServerlessReplicas;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAirflow",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAirflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAirflowResponse({}));
  }

  /**
   * 更新UpdateAirflow
   * 
   * @param request - UpdateAirflowRequest
   * @returns UpdateAirflowResponse
   */
  async updateAirflow(request: $_model.UpdateAirflowRequest): Promise<$_model.UpdateAirflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAirflowWithOptions(request, runtime);
  }

  /**
   * 更新湖仓数据库
   * 
   * @param tmpReq - UpdateDataLakeDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabaseWithOptions(tmpReq: $_model.UpdateDataLakeDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeDatabaseShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeDatabase",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeDatabaseResponse({}));
  }

  /**
   * 更新湖仓数据库
   * 
   * @param request - UpdateDataLakeDatabaseRequest
   * @returns UpdateDataLakeDatabaseResponse
   */
  async updateDataLakeDatabase(request: $_model.UpdateDataLakeDatabaseRequest): Promise<$_model.UpdateDataLakeDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeDatabaseWithOptions(request, runtime);
  }

  /**
   * 更新湖仓自定义函数
   * 
   * @param tmpReq - UpdateDataLakeFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunctionWithOptions(tmpReq: $_model.UpdateDataLakeFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeFunctionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeFunctionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.functionInput)) {
      request.functionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.functionInput, "FunctionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.functionName)) {
      query["FunctionName"] = request.functionName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionInputShrink)) {
      body["FunctionInput"] = request.functionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeFunction",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeFunctionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeFunctionResponse({}));
  }

  /**
   * 更新湖仓自定义函数
   * 
   * @param request - UpdateDataLakeFunctionRequest
   * @returns UpdateDataLakeFunctionResponse
   */
  async updateDataLakeFunction(request: $_model.UpdateDataLakeFunctionRequest): Promise<$_model.UpdateDataLakeFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeFunctionWithOptions(request, runtime);
  }

  /**
   * 更新湖仓表分区
   * 
   * @param tmpReq - UpdateDataLakePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartitionWithOptions(tmpReq: $_model.UpdateDataLakePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.partitionInput)) {
      request.partitionInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionInput, "PartitionInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partitionInputShrink)) {
      body["PartitionInput"] = request.partitionInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakePartition",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakePartitionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakePartitionResponse({}));
  }

  /**
   * 更新湖仓表分区
   * 
   * @param request - UpdateDataLakePartitionRequest
   * @returns UpdateDataLakePartitionResponse
   */
  async updateDataLakePartition(request: $_model.UpdateDataLakePartitionRequest): Promise<$_model.UpdateDataLakePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakePartitionWithOptions(request, runtime);
  }

  /**
   * 更新湖仓表信息
   * 
   * @param tmpReq - UpdateDataLakeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTableWithOptions(tmpReq: $_model.UpdateDataLakeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataLakeTableResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataLakeTableShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tableInput)) {
      request.tableInputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableInput, "TableInput", "json");
    }

    let query = { };
    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.tid)) {
      query["Tid"] = request.tid;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableInputShrink)) {
      body["TableInput"] = request.tableInputShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataLakeTable",
      version: "2025-04-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataLakeTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataLakeTableResponse({}));
  }

  /**
   * 更新湖仓表信息
   * 
   * @param request - UpdateDataLakeTableRequest
   * @returns UpdateDataLakeTableResponse
   */
  async updateDataLakeTable(request: $_model.UpdateDataLakeTableRequest): Promise<$_model.UpdateDataLakeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataLakeTableWithOptions(request, runtime);
  }

}
