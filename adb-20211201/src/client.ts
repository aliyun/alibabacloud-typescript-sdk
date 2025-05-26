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
    this._endpointMap = {
      'cn-qingdao': "adb.aliyuncs.com",
      'cn-beijing': "adb.aliyuncs.com",
      'cn-hangzhou': "adb.aliyuncs.com",
      'cn-shanghai': "adb.aliyuncs.com",
      'cn-shenzhen': "adb.aliyuncs.com",
      'cn-hongkong': "adb.aliyuncs.com",
      'ap-southeast-1': "adb.aliyuncs.com",
      'us-west-1': "adb.aliyuncs.com",
      'us-east-1': "adb.aliyuncs.com",
      'cn-hangzhou-finance': "adb.aliyuncs.com",
      'cn-north-2-gov-1': "adb.aliyuncs.com",
      'ap-northeast-2-pop': "adb.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "adb.aliyuncs.com",
      'cn-beijing-finance-pop': "adb.aliyuncs.com",
      'cn-beijing-gov-1': "adb.aliyuncs.com",
      'cn-beijing-nu16-b01': "adb.aliyuncs.com",
      'cn-edge-1': "adb.aliyuncs.com",
      'cn-fujian': "adb.aliyuncs.com",
      'cn-haidian-cm12-c01': "adb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "adb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "adb.aliyuncs.com",
      'cn-hangzhou-test-306': "adb.aliyuncs.com",
      'cn-hongkong-finance-pop': "adb.aliyuncs.com",
      'cn-qingdao-nebula': "adb.aliyuncs.com",
      'cn-shanghai-et15-b01': "adb.aliyuncs.com",
      'cn-shanghai-et2-b01': "adb.aliyuncs.com",
      'cn-shanghai-finance-1': "adb.aliyuncs.com",
      'cn-shanghai-inner': "adb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "adb.aliyuncs.com",
      'cn-shenzhen-finance-1': "adb.aliyuncs.com",
      'cn-shenzhen-inner': "adb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "adb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "adb.aliyuncs.com",
      'cn-wuhan': "adb.aliyuncs.com",
      'cn-yushanfang': "adb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "adb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "adb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "adb.aliyuncs.com",
      'eu-west-1-oxs': "adb.ap-northeast-1.aliyuncs.com",
      'me-east-1': "adb.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "adb.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies for a public endpoint for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnectionWithOptions(request: $_model.AllocateClusterPublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateClusterPublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateClusterPublicConnection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateClusterPublicConnectionResponse({}));
  }

  /**
   * Applies for a public endpoint for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: $_model.AllocateClusterPublicConnectionRequest): Promise<$_model.AllocateClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Applies an optimization suggestion.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ApplyAdviceByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceByIdWithOptions(request: $_model.ApplyAdviceByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAdviceByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAdviceById",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAdviceByIdResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAdviceByIdResponse({}));
  }

  /**
   * Applies an optimization suggestion.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ApplyAdviceByIdRequest
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceById(request: $_model.ApplyAdviceByIdRequest): Promise<$_model.ApplyAdviceByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAdviceByIdWithOptions(request, runtime);
  }

  /**
   * Attaches an elastic network interface (ENI) to an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AttachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachUserENIResponse
   */
  async attachUserENIWithOptions(request: $_model.AttachUserENIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachUserENIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachUserENI",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachUserENIResponse>(await this.callApi(params, req, runtime), new $_model.AttachUserENIResponse({}));
  }

  /**
   * Attaches an elastic network interface (ENI) to an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - AttachUserENIRequest
   * @returns AttachUserENIResponse
   */
  async attachUserENI(request: $_model.AttachUserENIRequest): Promise<$_model.AttachUserENIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachUserENIWithOptions(request, runtime);
  }

  /**
   * Applies optimization suggestions.
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdListWithOptions(request: $_model.BatchApplyAdviceByIdListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchApplyAdviceByIdListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceIdList)) {
      query["AdviceIdList"] = request.adviceIdList;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchApplyAdviceByIdList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchApplyAdviceByIdListResponse>(await this.callApi(params, req, runtime), new $_model.BatchApplyAdviceByIdListResponse({}));
  }

  /**
   * Applies optimization suggestions.
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdList(request: $_model.BatchApplyAdviceByIdListRequest): Promise<$_model.BatchApplyAdviceByIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchApplyAdviceByIdListWithOptions(request, runtime);
  }

  /**
   * Associates a standard account of an AnalyticDB for MySQL cluster with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountResponse
   */
  async bindAccountWithOptions(request: $_model.BindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ramUser)) {
      query["RamUser"] = request.ramUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindAccountResponse>(await this.callApi(params, req, runtime), new $_model.BindAccountResponse({}));
  }

  /**
   * Associates a standard account of an AnalyticDB for MySQL cluster with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindAccountRequest
   * @returns BindAccountResponse
   */
  async bindAccount(request: $_model.BindAccountRequest): Promise<$_model.BindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  /**
   * Associates a resource group with a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUserWithOptions(request: $_model.BindDBResourceGroupWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDBResourceGroupWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDBResourceGroupWithUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new $_model.BindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Associates a resource group with a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUser(request: $_model.BindDBResourceGroupWithUserRequest): Promise<$_model.BindDBResourceGroupWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Terminates part of the code in a Spark job.
   * 
   * @param request - CancelSparkReplStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSparkReplStatementResponse
   */
  async cancelSparkReplStatementWithOptions(request: $_model.CancelSparkReplStatementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSparkReplStatementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.statementId)) {
      body["StatementId"] = request.statementId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSparkReplStatement",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSparkReplStatementResponse>(await this.callApi(params, req, runtime), new $_model.CancelSparkReplStatementResponse({}));
  }

  /**
   * Terminates part of the code in a Spark job.
   * 
   * @param request - CancelSparkReplStatementRequest
   * @returns CancelSparkReplStatementResponse
   */
  async cancelSparkReplStatement(request: $_model.CancelSparkReplStatementRequest): Promise<$_model.CancelSparkReplStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSparkReplStatementWithOptions(request, runtime);
  }

  /**
   * Cancels the execution of a Spark SQL statement.
   * 
   * @param request - CancelSparkWarehouseBatchSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSparkWarehouseBatchSQLResponse
   */
  async cancelSparkWarehouseBatchSQLWithOptions(request: $_model.CancelSparkWarehouseBatchSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSparkWarehouseBatchSQLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agency)) {
      body["Agency"] = request.agency;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.queryId)) {
      body["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSparkWarehouseBatchSQL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSparkWarehouseBatchSQLResponse>(await this.callApi(params, req, runtime), new $_model.CancelSparkWarehouseBatchSQLResponse({}));
  }

  /**
   * Cancels the execution of a Spark SQL statement.
   * 
   * @param request - CancelSparkWarehouseBatchSQLRequest
   * @returns CancelSparkWarehouseBatchSQLResponse
   */
  async cancelSparkWarehouseBatchSQL(request: $_model.CancelSparkWarehouseBatchSQLRequest): Promise<$_model.CancelSparkWarehouseBatchSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelSparkWarehouseBatchSQLWithOptions(request, runtime);
  }

  /**
   * Queries whether a database account of an AnalyticDB for MySQL cluster is associated with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckBindRamUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckBindRamUserResponse
   */
  async checkBindRamUserWithOptions(request: $_model.CheckBindRamUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckBindRamUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckBindRamUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckBindRamUserResponse>(await this.callApi(params, req, runtime), new $_model.CheckBindRamUserResponse({}));
  }

  /**
   * Queries whether a database account of an AnalyticDB for MySQL cluster is associated with a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckBindRamUserRequest
   * @returns CheckBindRamUserResponse
   */
  async checkBindRamUser(request: $_model.CheckBindRamUserRequest): Promise<$_model.CheckBindRamUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkBindRamUserWithOptions(request, runtime);
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckSampleDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSampleDataSetResponse
   */
  async checkSampleDataSetWithOptions(request: $_model.CheckSampleDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSampleDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSampleDataSet",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSampleDataSetResponse>(await this.callApi(params, req, runtime), new $_model.CheckSampleDataSetResponse({}));
  }

  /**
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CheckSampleDataSetRequest
   * @returns CheckSampleDataSetResponse
   */
  async checkSampleDataSet(request: $_model.CheckSampleDataSetRequest): Promise<$_model.CheckSampleDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSampleDataSetWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAPSJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAPSJobResponse
   */
  async createAPSJobWithOptions(request: $_model.CreateAPSJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAPSJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobName)) {
      body["ApsJobName"] = request.apsJobName;
    }

    if (!$dara.isNull(request.dbList)) {
      body["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.destinationEndpointInstanceID)) {
      body["DestinationEndpointInstanceID"] = request.destinationEndpointInstanceID;
    }

    if (!$dara.isNull(request.destinationEndpointPassword)) {
      body["DestinationEndpointPassword"] = request.destinationEndpointPassword;
    }

    if (!$dara.isNull(request.destinationEndpointUserName)) {
      body["DestinationEndpointUserName"] = request.destinationEndpointUserName;
    }

    if (!$dara.isNull(request.partitionList)) {
      body["PartitionList"] = request.partitionList;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceEndpointInstanceID)) {
      body["SourceEndpointInstanceID"] = request.sourceEndpointInstanceID;
    }

    if (!$dara.isNull(request.sourceEndpointPassword)) {
      body["SourceEndpointPassword"] = request.sourceEndpointPassword;
    }

    if (!$dara.isNull(request.sourceEndpointRegion)) {
      body["SourceEndpointRegion"] = request.sourceEndpointRegion;
    }

    if (!$dara.isNull(request.sourceEndpointUserName)) {
      body["SourceEndpointUserName"] = request.sourceEndpointUserName;
    }

    if (!$dara.isNull(request.targetTableMode)) {
      body["TargetTableMode"] = request.targetTableMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAPSJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAPSJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateAPSJobResponse({}));
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAPSJobRequest
   * @returns CreateAPSJobResponse
   */
  async createAPSJob(request: $_model.CreateAPSJobRequest): Promise<$_model.CreateAPSJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAPSJobWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountResponse({}));
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) replication job.
   * 
   * @param request - CreateApsCopyWorkloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApsCopyWorkloadResponse
   */
  async createApsCopyWorkloadWithOptions(request: $_model.CreateApsCopyWorkloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApsCopyWorkloadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    if (!$dara.isNull(request.workloadType)) {
      body["WorkloadType"] = request.workloadType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApsCopyWorkload",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApsCopyWorkloadResponse>(await this.callApi(params, req, runtime), new $_model.CreateApsCopyWorkloadResponse({}));
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) replication job.
   * 
   * @param request - CreateApsCopyWorkloadRequest
   * @returns CreateApsCopyWorkloadResponse
   */
  async createApsCopyWorkload(request: $_model.CreateApsCopyWorkloadRequest): Promise<$_model.CreateApsCopyWorkloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApsCopyWorkloadWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param tmpReq - CreateApsDatasoureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApsDatasoureResponse
   */
  async createApsDatasoureWithOptions(tmpReq: $_model.CreateApsDatasoureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApsDatasoureResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApsDatasoureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.databricksInfo)) {
      request.databricksInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.databricksInfo, "DatabricksInfo", "json");
    }

    if (!$dara.isNull(tmpReq.hiveInfo)) {
      request.hiveInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hiveInfo, "HiveInfo", "json");
    }

    if (!$dara.isNull(tmpReq.kafkaInfo)) {
      request.kafkaInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaInfo, "KafkaInfo", "json");
    }

    if (!$dara.isNull(tmpReq.polarDBMysqlInfo)) {
      request.polarDBMysqlInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.polarDBMysqlInfo, "PolarDBMysqlInfo", "json");
    }

    if (!$dara.isNull(tmpReq.polarDBXInfo)) {
      request.polarDBXInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.polarDBXInfo, "PolarDBXInfo", "json");
    }

    if (!$dara.isNull(tmpReq.rdsMysqlInfo)) {
      request.rdsMysqlInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rdsMysqlInfo, "RdsMysqlInfo", "json");
    }

    if (!$dara.isNull(tmpReq.slsInfo)) {
      request.slsInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsInfo, "SlsInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.databricksInfoShrink)) {
      body["DatabricksInfo"] = request.databricksInfoShrink;
    }

    if (!$dara.isNull(request.datasourceDescription)) {
      body["DatasourceDescription"] = request.datasourceDescription;
    }

    if (!$dara.isNull(request.datasourceName)) {
      body["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.datasourceType)) {
      body["DatasourceType"] = request.datasourceType;
    }

    if (!$dara.isNull(request.hiveInfoShrink)) {
      body["HiveInfo"] = request.hiveInfoShrink;
    }

    if (!$dara.isNull(request.kafkaInfoShrink)) {
      body["KafkaInfo"] = request.kafkaInfoShrink;
    }

    if (!$dara.isNull(request.mode)) {
      body["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.polarDBMysqlInfoShrink)) {
      body["PolarDBMysqlInfo"] = request.polarDBMysqlInfoShrink;
    }

    if (!$dara.isNull(request.polarDBXInfoShrink)) {
      body["PolarDBXInfo"] = request.polarDBXInfoShrink;
    }

    if (!$dara.isNull(request.rdsMysqlInfoShrink)) {
      body["RdsMysqlInfo"] = request.rdsMysqlInfoShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.slsInfoShrink)) {
      body["SlsInfo"] = request.slsInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApsDatasoure",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApsDatasoureResponse>(await this.callApi(params, req, runtime), new $_model.CreateApsDatasoureResponse({}));
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateApsDatasoureRequest
   * @returns CreateApsDatasoureResponse
   */
  async createApsDatasoure(request: $_model.CreateApsDatasoureRequest): Promise<$_model.CreateApsDatasoureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApsDatasoureWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job from a Hive data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateApsHiveJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApsHiveJobResponse
   */
  async createApsHiveJobWithOptions(request: $_model.CreateApsHiveJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApsHiveJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedConfig)) {
      body["AdvancedConfig"] = request.advancedConfig;
    }

    if (!$dara.isNull(request.conflictStrategy)) {
      body["ConflictStrategy"] = request.conflictStrategy;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.fullComputeUnit)) {
      body["FullComputeUnit"] = request.fullComputeUnit;
    }

    if (!$dara.isNull(request.ossLocation)) {
      body["OssLocation"] = request.ossLocation;
    }

    if (!$dara.isNull(request.parallelism)) {
      body["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      body["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.syncAllowExpression)) {
      body["SyncAllowExpression"] = request.syncAllowExpression;
    }

    if (!$dara.isNull(request.syncDenyExpression)) {
      body["SyncDenyExpression"] = request.syncDenyExpression;
    }

    if (!$dara.isNull(request.targetType)) {
      body["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.workloadName)) {
      body["WorkloadName"] = request.workloadName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApsHiveJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApsHiveJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateApsHiveJobResponse({}));
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job from a Hive data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateApsHiveJobRequest
   * @returns CreateApsHiveJobResponse
   */
  async createApsHiveJob(request: $_model.CreateApsHiveJobRequest): Promise<$_model.CreateApsHiveJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApsHiveJobWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job from Simple Log Service (SLS) to an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @param tmpReq - CreateApsSlsADBJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApsSlsADBJobResponse
   */
  async createApsSlsADBJobWithOptions(tmpReq: $_model.CreateApsSlsADBJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApsSlsADBJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApsSlsADBJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    if (!$dara.isNull(tmpReq.partitionSpecs)) {
      request.partitionSpecsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.partitionSpecs, "PartitionSpecs", "json");
    }

    if (!$dara.isNull(tmpReq.unixTimestampConvert)) {
      request.unixTimestampConvertShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.unixTimestampConvert, "UnixTimestampConvert", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acrossRole)) {
      body["AcrossRole"] = request.acrossRole;
    }

    if (!$dara.isNull(request.acrossUid)) {
      body["AcrossUid"] = request.acrossUid;
    }

    if (!$dara.isNull(request.advancedConfig)) {
      body["AdvancedConfig"] = request.advancedConfig;
    }

    if (!$dara.isNull(request.columnsShrink)) {
      body["Columns"] = request.columnsShrink;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dirtyDataHandleMode)) {
      body["DirtyDataHandleMode"] = request.dirtyDataHandleMode;
    }

    if (!$dara.isNull(request.dirtyDataProcessPattern)) {
      body["DirtyDataProcessPattern"] = request.dirtyDataProcessPattern;
    }

    if (!$dara.isNull(request.exactlyOnce)) {
      body["ExactlyOnce"] = request.exactlyOnce;
    }

    if (!$dara.isNull(request.fullComputeUnit)) {
      body["FullComputeUnit"] = request.fullComputeUnit;
    }

    if (!$dara.isNull(request.hudiAdvancedConfig)) {
      body["HudiAdvancedConfig"] = request.hudiAdvancedConfig;
    }

    if (!$dara.isNull(request.incrementalComputeUnit)) {
      body["IncrementalComputeUnit"] = request.incrementalComputeUnit;
    }

    if (!$dara.isNull(request.lakehouseId)) {
      body["LakehouseId"] = request.lakehouseId;
    }

    if (!$dara.isNull(request.maxOffsetsPerTrigger)) {
      body["MaxOffsetsPerTrigger"] = request.maxOffsetsPerTrigger;
    }

    if (!$dara.isNull(request.ossLocation)) {
      body["OssLocation"] = request.ossLocation;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["OutputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.partitionSpecsShrink)) {
      body["PartitionSpecs"] = request.partitionSpecsShrink;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.primaryKeyDefinition)) {
      body["PrimaryKeyDefinition"] = request.primaryKeyDefinition;
    }

    if (!$dara.isNull(request.project)) {
      body["Project"] = request.project;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      body["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.sourceRegionId)) {
      body["SourceRegionId"] = request.sourceRegionId;
    }

    if (!$dara.isNull(request.startingOffsets)) {
      body["StartingOffsets"] = request.startingOffsets;
    }

    if (!$dara.isNull(request.store)) {
      body["Store"] = request.store;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.targetGenerateRule)) {
      body["TargetGenerateRule"] = request.targetGenerateRule;
    }

    if (!$dara.isNull(request.targetType)) {
      body["TargetType"] = request.targetType;
    }

    if (!$dara.isNull(request.unixTimestampConvertShrink)) {
      body["UnixTimestampConvert"] = request.unixTimestampConvertShrink;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.workloadName)) {
      body["WorkloadName"] = request.workloadName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApsSlsADBJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApsSlsADBJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateApsSlsADBJobResponse({}));
  }

  /**
   * Creates an AnalyticDB Pipeline Service (APS) job from Simple Log Service (SLS) to an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @param request - CreateApsSlsADBJobRequest
   * @returns CreateApsSlsADBJobResponse
   */
  async createApsSlsADBJob(request: $_model.CreateApsSlsADBJobRequest): Promise<$_model.CreateApsSlsADBJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApsSlsADBJobWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * CreateDBCluster
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: $_model.CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetId)) {
      query["BackupSetId"] = request.backupSetId;
    }

    if (!$dara.isNull(request.cloneSourceRegionId)) {
      query["CloneSourceRegionId"] = request.cloneSourceRegionId;
    }

    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterNetworkType)) {
      query["DBClusterNetworkType"] = request.DBClusterNetworkType;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.diskEncryption)) {
      query["DiskEncryption"] = request.diskEncryption;
    }

    if (!$dara.isNull(request.enableDefaultResourcePool)) {
      query["EnableDefaultResourcePool"] = request.enableDefaultResourcePool;
    }

    if (!$dara.isNull(request.kmsId)) {
      query["KmsId"] = request.kmsId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.productForm)) {
      query["ProductForm"] = request.productForm;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reservedNodeCount)) {
      query["ReservedNodeCount"] = request.reservedNodeCount;
    }

    if (!$dara.isNull(request.reservedNodeSize)) {
      query["ReservedNodeSize"] = request.reservedNodeSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.restoreToTime)) {
      query["RestoreToTime"] = request.restoreToTime;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.secondaryVSwitchId)) {
      query["SecondaryVSwitchId"] = request.secondaryVSwitchId;
    }

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.sourceDbClusterId)) {
      query["SourceDbClusterId"] = request.sourceDbClusterId;
    }

    if (!$dara.isNull(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBCluster",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBClusterResponse({}));
  }

  /**
   * Creates an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * CreateDBCluster
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: $_model.CreateDBClusterRequest): Promise<$_model.CreateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param tmpReq - CreateDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroupWithOptions(tmpReq: $_model.CreateDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.engineParams)) {
      request.engineParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.engineParams, "EngineParams", "json");
    }

    if (!$dara.isNull(tmpReq.rayConfig)) {
      request.rayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rayConfig, "RayConfig", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoStopInterval)) {
      query["AutoStopInterval"] = request.autoStopInterval;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableSpot)) {
      query["EnableSpot"] = request.enableSpot;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineParamsShrink)) {
      query["EngineParams"] = request.engineParamsShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!$dara.isNull(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!$dara.isNull(request.maxGpuQuantity)) {
      query["MaxGpuQuantity"] = request.maxGpuQuantity;
    }

    if (!$dara.isNull(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!$dara.isNull(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!$dara.isNull(request.minGpuQuantity)) {
      query["MinGpuQuantity"] = request.minGpuQuantity;
    }

    if (!$dara.isNull(request.rayConfigShrink)) {
      query["RayConfig"] = request.rayConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    if (!$dara.isNull(request.specName)) {
      query["SpecName"] = request.specName;
    }

    if (!$dara.isNull(request.targetResourceGroupName)) {
      query["TargetResourceGroupName"] = request.targetResourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResourceGroupResponse({}));
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroup(request: $_model.CreateDBResourceGroupRequest): Promise<$_model.CreateDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlanWithOptions(request: $_model.CreateElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoScale)) {
      query["AutoScale"] = request.autoScale;
    }

    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.targetSize)) {
      query["TargetSize"] = request.targetSize;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateElasticPlanResponse({}));
  }

  /**
   * Creates a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - CreateElasticPlanRequest
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlan(request: $_model.CreateElasticPlanRequest): Promise<$_model.CreateElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  /**
   * Creates a lake storage.
   * 
   * @param tmpReq - CreateLakeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLakeStorageResponse
   */
  async createLakeStorageWithOptions(tmpReq: $_model.CreateLakeStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLakeStorageResponse> {
    tmpReq.validate();
    let request = new $_model.CreateLakeStorageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      body["Permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLakeStorage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLakeStorageResponse>(await this.callApi(params, req, runtime), new $_model.CreateLakeStorageResponse({}));
  }

  /**
   * Creates a lake storage.
   * 
   * @param request - CreateLakeStorageRequest
   * @returns CreateLakeStorageResponse
   */
  async createLakeStorage(request: $_model.CreateLakeStorageRequest): Promise<$_model.CreateLakeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createLakeStorageWithOptions(request, runtime);
  }

  /**
   * Creates an Object Storage Service (OSS) subdirectory.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - CreateOssSubDirectoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOssSubDirectoryResponse
   */
  async createOssSubDirectoryWithOptions(request: $_model.CreateOssSubDirectoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOssSubDirectoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.path)) {
      body["Path"] = request.path;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOssSubDirectory",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOssSubDirectoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateOssSubDirectoryResponse({}));
  }

  /**
   * Creates an Object Storage Service (OSS) subdirectory.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - CreateOssSubDirectoryRequest
   * @returns CreateOssSubDirectoryResponse
   */
  async createOssSubDirectory(request: $_model.CreateOssSubDirectoryRequest): Promise<$_model.CreateOssSubDirectoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOssSubDirectoryWithOptions(request, runtime);
  }

  /**
   * Creates a custom monitoring view.
   * 
   * @param tmpReq - CreatePerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePerformanceViewResponse
   */
  async createPerformanceViewWithOptions(tmpReq: $_model.CreatePerformanceViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePerformanceViewResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePerformanceViewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.viewDetail)) {
      request.viewDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewDetail, "ViewDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.createFromViewType)) {
      query["CreateFromViewType"] = request.createFromViewType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.fillOriginViewKeys)) {
      query["FillOriginViewKeys"] = request.fillOriginViewKeys;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.viewDetailShrink)) {
      query["ViewDetail"] = request.viewDetailShrink;
    }

    if (!$dara.isNull(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePerformanceViewResponse>(await this.callApi(params, req, runtime), new $_model.CreatePerformanceViewResponse({}));
  }

  /**
   * Creates a custom monitoring view.
   * 
   * @param request - CreatePerformanceViewRequest
   * @returns CreatePerformanceViewResponse
   */
  async createPerformanceView(request: $_model.CreatePerformanceViewRequest): Promise<$_model.CreatePerformanceViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPerformanceViewWithOptions(request, runtime);
  }

  /**
   * Creates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - CreateSparkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSparkTemplateResponse
   */
  async createSparkTemplateWithOptions(request: $_model.CreateSparkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSparkTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSparkTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSparkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateSparkTemplateResponse({}));
  }

  /**
   * Creates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - CreateSparkTemplateRequest
   * @returns CreateSparkTemplateResponse
   */
  async createSparkTemplate(request: $_model.CreateSparkTemplateRequest): Promise<$_model.CreateSparkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSparkTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes a database account from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountResponse({}));
  }

  /**
   * Deletes a database account from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteApsDatasoureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApsDatasoureResponse
   */
  async deleteApsDatasoureWithOptions(request: $_model.DeleteApsDatasoureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApsDatasoureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApsDatasoure",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApsDatasoureResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApsDatasoureResponse({}));
  }

  /**
   * Deletes an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteApsDatasoureRequest
   * @returns DeleteApsDatasoureResponse
   */
  async deleteApsDatasoure(request: $_model.DeleteApsDatasoureRequest): Promise<$_model.DeleteApsDatasoureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApsDatasoureWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteApsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApsJobResponse
   */
  async deleteApsJobWithOptions(request: $_model.DeleteApsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobId)) {
      body["ApsJobId"] = request.apsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApsJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApsJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApsJobResponse({}));
  }

  /**
   * Deletes an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteApsJobRequest
   * @returns DeleteApsJobResponse
   */
  async deleteApsJob(request: $_model.DeleteApsJobRequest): Promise<$_model.DeleteApsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApsJobWithOptions(request, runtime);
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupsResponse
   */
  async deleteBackupsWithOptions(request: $_model.DeleteBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupIds)) {
      query["BackupIds"] = request.backupIds;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupsResponse({}));
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @returns DeleteBackupsResponse
   */
  async deleteBackups(request: $_model.DeleteBackupsRequest): Promise<$_model.DeleteBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupsWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)
   * *   You can delete only pay-as-you-go clusters.
   * *   The cluster that you want to delete must be in the Running state.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: $_model.DeleteDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBCluster",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBClusterResponse({}));
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ### [](#)
   * *   You can delete only pay-as-you-go clusters.
   * *   The cluster that you want to delete must be in the Running state.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroupWithOptions(request: $_model.DeleteDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResourceGroupResponse({}));
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroup(request: $_model.DeleteDBResourceGroupRequest): Promise<$_model.DeleteDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a scaling plan from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlanWithOptions(request: $_model.DeleteElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteElasticPlanResponse({}));
  }

  /**
   * Deletes a scaling plan from an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteElasticPlanRequest
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlan(request: $_model.DeleteElasticPlanRequest): Promise<$_model.DeleteElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  /**
   * Deletes a lake storage.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteLakeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLakeStorageResponse
   */
  async deleteLakeStorageWithOptions(request: $_model.DeleteLakeStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLakeStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lakeStorageId)) {
      body["LakeStorageId"] = request.lakeStorageId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLakeStorage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLakeStorageResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLakeStorageResponse({}));
  }

  /**
   * Deletes a lake storage.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DeleteLakeStorageRequest
   * @returns DeleteLakeStorageResponse
   */
  async deleteLakeStorage(request: $_model.DeleteLakeStorageRequest): Promise<$_model.DeleteLakeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLakeStorageWithOptions(request, runtime);
  }

  /**
   * Deletes a monitoring view.
   * 
   * @param request - DeletePerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePerformanceViewResponse
   */
  async deletePerformanceViewWithOptions(request: $_model.DeletePerformanceViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePerformanceViewResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePerformanceViewResponse>(await this.callApi(params, req, runtime), new $_model.DeletePerformanceViewResponse({}));
  }

  /**
   * Deletes a monitoring view.
   * 
   * @param request - DeletePerformanceViewRequest
   * @returns DeletePerformanceViewResponse
   */
  async deletePerformanceView(request: $_model.DeletePerformanceViewRequest): Promise<$_model.DeletePerformanceViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePerformanceViewWithOptions(request, runtime);
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSparkTemplateResponse
   */
  async deleteSparkTemplateWithOptions(request: $_model.DeleteSparkTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSparkTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSparkTemplate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSparkTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSparkTemplateResponse({}));
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateRequest
   * @returns DeleteSparkTemplateResponse
   */
  async deleteSparkTemplate(request: $_model.DeleteSparkTemplateRequest): Promise<$_model.DeleteSparkTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSparkTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSparkTemplateFileResponse
   */
  async deleteSparkTemplateFileWithOptions(request: $_model.DeleteSparkTemplateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSparkTemplateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSparkTemplateFile",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSparkTemplateFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSparkTemplateFileResponse({}));
  }

  /**
   * Deletes Spark template files.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - DeleteSparkTemplateFileRequest
   * @returns DeleteSparkTemplateFileResponse
   */
  async deleteSparkTemplateFile(request: $_model.DeleteSparkTemplateFileRequest): Promise<$_model.DeleteSparkTemplateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSparkTemplateFileWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters for AnalyticDB Pipeline Service (APS) federated analytics.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on performance metrics. The collection granularity is 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeAPSADBInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAPSADBInstancesResponse
   */
  async describeAPSADBInstancesWithOptions(request: $_model.DescribeAPSADBInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAPSADBInstancesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAPSADBInstances",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAPSADBInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAPSADBInstancesResponse({}));
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters for AnalyticDB Pipeline Service (APS) federated analytics.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on performance metrics. The collection granularity is 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeAPSADBInstancesRequest
   * @returns DescribeAPSADBInstancesResponse
   */
  async describeAPSADBInstances(request: $_model.DescribeAPSADBInstancesRequest): Promise<$_model.DescribeAPSADBInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAPSADBInstancesWithOptions(request, runtime);
  }

  /**
   * Queries abnormal SQL patterns within a time range.
   * 
   * @param request - DescribeAbnormalPatternDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAbnormalPatternDetectionResponse
   */
  async describeAbnormalPatternDetectionWithOptions(request: $_model.DescribeAbnormalPatternDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAbnormalPatternDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAbnormalPatternDetection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAbnormalPatternDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAbnormalPatternDetectionResponse({}));
  }

  /**
   * Queries abnormal SQL patterns within a time range.
   * 
   * @param request - DescribeAbnormalPatternDetectionRequest
   * @returns DescribeAbnormalPatternDetectionResponse
   */
  async describeAbnormalPatternDetection(request: $_model.DescribeAbnormalPatternDetectionRequest): Promise<$_model.DescribeAbnormalPatternDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAbnormalPatternDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the permissions of a database account on all permission levels.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountAllPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountAllPrivilegesResponse
   */
  async describeAccountAllPrivilegesWithOptions(request: $_model.DescribeAccountAllPrivilegesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountAllPrivilegesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountAllPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountAllPrivilegesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountAllPrivilegesResponse({}));
  }

  /**
   * Queries the permissions of a database account on all permission levels.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountAllPrivilegesRequest
   * @returns DescribeAccountAllPrivilegesResponse
   */
  async describeAccountAllPrivileges(request: $_model.DescribeAccountAllPrivilegesRequest): Promise<$_model.DescribeAccountAllPrivilegesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountAllPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the databases, tables, and columns on which a database account has permissions.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountPrivilegeObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountPrivilegeObjectsResponse
   */
  async describeAccountPrivilegeObjectsWithOptions(request: $_model.DescribeAccountPrivilegeObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountPrivilegeObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.columnPrivilegeObject)) {
      query["ColumnPrivilegeObject"] = request.columnPrivilegeObject;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.databasePrivilegeObject)) {
      query["DatabasePrivilegeObject"] = request.databasePrivilegeObject;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tablePrivilegeObject)) {
      query["TablePrivilegeObject"] = request.tablePrivilegeObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountPrivilegeObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountPrivilegeObjectsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountPrivilegeObjectsResponse({}));
  }

  /**
   * Queries the databases, tables, and columns on which a database account has permissions.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountPrivilegeObjectsRequest
   * @returns DescribeAccountPrivilegeObjectsResponse
   */
  async describeAccountPrivilegeObjects(request: $_model.DescribeAccountPrivilegeObjectsRequest): Promise<$_model.DescribeAccountPrivilegeObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountPrivilegeObjectsWithOptions(request, runtime);
  }

  /**
   * 获取某一ADB账户的权限
   * 
   * @param request - DescribeAccountPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountPrivilegesResponse
   */
  async describeAccountPrivilegesWithOptions(request: $_model.DescribeAccountPrivilegesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountPrivilegesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.columnPrivilegeObject)) {
      query["ColumnPrivilegeObject"] = request.columnPrivilegeObject;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.databasePrivilegeObject)) {
      query["DatabasePrivilegeObject"] = request.databasePrivilegeObject;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privilegeType)) {
      query["PrivilegeType"] = request.privilegeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tablePrivilegeObject)) {
      query["TablePrivilegeObject"] = request.tablePrivilegeObject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccountPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountPrivilegesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountPrivilegesResponse({}));
  }

  /**
   * 获取某一ADB账户的权限
   * 
   * @param request - DescribeAccountPrivilegesRequest
   * @returns DescribeAccountPrivilegesResponse
   */
  async describeAccountPrivileges(request: $_model.DescribeAccountPrivilegesRequest): Promise<$_model.DescribeAccountPrivilegesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the database accounts of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountsResponse({}));
  }

  /**
   * Queries the database accounts of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the information about table columns for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlColumnsResponse
   */
  async describeAdbMySqlColumnsWithOptions(request: $_model.DescribeAdbMySqlColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdbMySqlColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdbMySqlColumns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdbMySqlColumnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdbMySqlColumnsResponse({}));
  }

  /**
   * Queries the information about table columns for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlColumnsRequest
   * @returns DescribeAdbMySqlColumnsResponse
   */
  async describeAdbMySqlColumns(request: $_model.DescribeAdbMySqlColumnsRequest): Promise<$_model.DescribeAdbMySqlColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdbMySqlColumnsWithOptions(request, runtime);
  }

  /**
   * 用于查看表索引信息
   * 
   * @param request - DescribeAdbMySqlIndexesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlIndexesResponse
   */
  async describeAdbMySqlIndexesWithOptions(request: $_model.DescribeAdbMySqlIndexesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdbMySqlIndexesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdbMySqlIndexes",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdbMySqlIndexesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdbMySqlIndexesResponse({}));
  }

  /**
   * 用于查看表索引信息
   * 
   * @param request - DescribeAdbMySqlIndexesRequest
   * @returns DescribeAdbMySqlIndexesResponse
   */
  async describeAdbMySqlIndexes(request: $_model.DescribeAdbMySqlIndexesRequest): Promise<$_model.DescribeAdbMySqlIndexesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdbMySqlIndexesWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlSchemasResponse
   */
  async describeAdbMySqlSchemasWithOptions(request: $_model.DescribeAdbMySqlSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdbMySqlSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdbMySqlSchemas",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdbMySqlSchemasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdbMySqlSchemasResponse({}));
  }

  /**
   * Queries a list of databases for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlSchemasRequest
   * @returns DescribeAdbMySqlSchemasResponse
   */
  async describeAdbMySqlSchemas(request: $_model.DescribeAdbMySqlSchemasRequest): Promise<$_model.DescribeAdbMySqlSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdbMySqlSchemasWithOptions(request, runtime);
  }

  /**
   * 用于查看表元数据信息
   * 
   * @param request - DescribeAdbMySqlTableMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlTableMetaResponse
   */
  async describeAdbMySqlTableMetaWithOptions(request: $_model.DescribeAdbMySqlTableMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdbMySqlTableMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdbMySqlTableMeta",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdbMySqlTableMetaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdbMySqlTableMetaResponse({}));
  }

  /**
   * 用于查看表元数据信息
   * 
   * @param request - DescribeAdbMySqlTableMetaRequest
   * @returns DescribeAdbMySqlTableMetaResponse
   */
  async describeAdbMySqlTableMeta(request: $_model.DescribeAdbMySqlTableMetaRequest): Promise<$_model.DescribeAdbMySqlTableMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdbMySqlTableMetaWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdbMySqlTablesResponse
   */
  async describeAdbMySqlTablesWithOptions(request: $_model.DescribeAdbMySqlTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdbMySqlTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdbMySqlTables",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdbMySqlTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdbMySqlTablesResponse({}));
  }

  /**
   * Queries a list of tables for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAdbMySqlTablesRequest
   * @returns DescribeAdbMySqlTablesResponse
   */
  async describeAdbMySqlTables(request: $_model.DescribeAdbMySqlTablesRequest): Promise<$_model.DescribeAdbMySqlTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdbMySqlTablesWithOptions(request, runtime);
  }

  /**
   * Queries whether the suggestion feature is enabled.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabledWithOptions(request: $_model.DescribeAdviceServiceEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdviceServiceEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdviceServiceEnabled",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdviceServiceEnabledResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdviceServiceEnabledResponse({}));
  }

  /**
   * Queries whether the suggestion feature is enabled.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabled(request: $_model.DescribeAdviceServiceEnabledRequest): Promise<$_model.DescribeAdviceServiceEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdviceServiceEnabledWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases, tables, and columns in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSourceWithOptions(request: $_model.DescribeAllDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllDataSource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllDataSourceResponse({}));
  }

  /**
   * Queries a list of databases, tables, and columns in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: $_model.DescribeAllDataSourceRequest): Promise<$_model.DescribeAllDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvicesWithOptions(request: $_model.DescribeAppliedAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppliedAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppliedAdvices",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppliedAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppliedAdvicesResponse({}));
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvices(request: $_model.DescribeAppliedAdvicesRequest): Promise<$_model.DescribeAppliedAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppliedAdvicesWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a real-time data ingestion job for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsActionLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsActionLogsResponse
   */
  async describeApsActionLogsWithOptions(request: $_model.DescribeApsActionLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsActionLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.stage)) {
      query["Stage"] = request.stage;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    if (!$dara.isNull(request.workloadId)) {
      query["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsActionLogs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsActionLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsActionLogsResponse({}));
  }

  /**
   * Queries the logs of a real-time data ingestion job for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsActionLogsRequest
   * @returns DescribeApsActionLogsResponse
   */
  async describeApsActionLogs(request: $_model.DescribeApsActionLogsRequest): Promise<$_model.DescribeApsActionLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsActionLogsWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @param request - DescribeApsDatasourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsDatasourceResponse
   */
  async describeApsDatasourceWithOptions(request: $_model.DescribeApsDatasourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsDatasourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsDatasource",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsDatasourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsDatasourceResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @param request - DescribeApsDatasourceRequest
   * @returns DescribeApsDatasourceResponse
   */
  async describeApsDatasource(request: $_model.DescribeApsDatasourceRequest): Promise<$_model.DescribeApsDatasourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsDatasourceWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB Pipeline Service (APS) data sources.
   * 
   * @param request - DescribeApsDatasourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsDatasourcesResponse
   */
  async describeApsDatasourcesWithOptions(request: $_model.DescribeApsDatasourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsDatasourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceName)) {
      body["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.datasourceType)) {
      body["DatasourceType"] = request.datasourceType;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsDatasources",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsDatasourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsDatasourcesResponse({}));
  }

  /**
   * Queries a list of AnalyticDB Pipeline Service (APS) data sources.
   * 
   * @param request - DescribeApsDatasourcesRequest
   * @returns DescribeApsDatasourcesResponse
   */
  async describeApsDatasources(request: $_model.DescribeApsDatasourcesRequest): Promise<$_model.DescribeApsDatasourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsDatasourcesWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) job from a Hive data source.
   * 
   * @param request - DescribeApsHiveWorkloadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsHiveWorkloadResponse
   */
  async describeApsHiveWorkloadWithOptions(request: $_model.DescribeApsHiveWorkloadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsHiveWorkloadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsHiveWorkload",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsHiveWorkloadResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsHiveWorkloadResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) job from a Hive data source.
   * 
   * @param request - DescribeApsHiveWorkloadRequest
   * @returns DescribeApsHiveWorkloadResponse
   */
  async describeApsHiveWorkload(request: $_model.DescribeApsHiveWorkloadRequest): Promise<$_model.DescribeApsHiveWorkloadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsHiveWorkloadWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - DescribeApsJobDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsJobDetailResponse
   */
  async describeApsJobDetailWithOptions(request: $_model.DescribeApsJobDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsJobDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobId)) {
      body["ApsJobId"] = request.apsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsJobDetail",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsJobDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsJobDetailResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - DescribeApsJobDetailRequest
   * @returns DescribeApsJobDetailResponse
   */
  async describeApsJobDetail(request: $_model.DescribeApsJobDetailRequest): Promise<$_model.DescribeApsJobDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsJobDetailWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB Pipeline Service (APS) jobs.
   * 
   * @param request - DescribeApsJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsJobsResponse
   */
  async describeApsJobsWithOptions(request: $_model.DescribeApsJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobName)) {
      body["ApsJobName"] = request.apsJobName;
    }

    if (!$dara.isNull(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!$dara.isNull(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsJobsResponse({}));
  }

  /**
   * Queries a list of AnalyticDB Pipeline Service (APS) jobs.
   * 
   * @param request - DescribeApsJobsRequest
   * @returns DescribeApsJobsResponse
   */
  async describeApsJobs(request: $_model.DescribeApsJobsRequest): Promise<$_model.DescribeApsJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsJobsWithOptions(request, runtime);
  }

  /**
   * Queries the workloads of AnalyticDB Pipeline Service (APS) migration jobs.
   * 
   * @param request - DescribeApsMigrationWorkloadsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsMigrationWorkloadsResponse
   */
  async describeApsMigrationWorkloadsWithOptions(request: $_model.DescribeApsMigrationWorkloadsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsMigrationWorkloadsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ossLocation)) {
      body["OssLocation"] = request.ossLocation;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workloadName)) {
      body["WorkloadName"] = request.workloadName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsMigrationWorkloads",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsMigrationWorkloadsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsMigrationWorkloadsResponse({}));
  }

  /**
   * Queries the workloads of AnalyticDB Pipeline Service (APS) migration jobs.
   * 
   * @param request - DescribeApsMigrationWorkloadsRequest
   * @returns DescribeApsMigrationWorkloadsResponse
   */
  async describeApsMigrationWorkloads(request: $_model.DescribeApsMigrationWorkloadsRequest): Promise<$_model.DescribeApsMigrationWorkloadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsMigrationWorkloadsWithOptions(request, runtime);
  }

  /**
   * Queries the progress of an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - DescribeApsProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsProgressResponse
   */
  async describeApsProgressWithOptions(request: $_model.DescribeApsProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsProgressResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsProgress",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsProgressResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsProgressResponse({}));
  }

  /**
   * Queries the progress of an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - DescribeApsProgressRequest
   * @returns DescribeApsProgressResponse
   */
  async describeApsProgress(request: $_model.DescribeApsProgressRequest): Promise<$_model.DescribeApsProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsProgressWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApsResourceGroupsResponse
   */
  async describeApsResourceGroupsWithOptions(request: $_model.DescribeApsResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApsResourceGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApsResourceGroups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApsResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApsResourceGroupsResponse({}));
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeApsResourceGroupsRequest
   * @returns DescribeApsResourceGroupsResponse
   */
  async describeApsResourceGroups(request: $_model.DescribeApsResourceGroupsRequest): Promise<$_model.DescribeApsResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApsResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecordsWithOptions(request: $_model.DescribeAuditLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.proxyUser)) {
      query["ProxyUser"] = request.proxyUser;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.succeed)) {
      query["Succeed"] = request.succeed;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogRecordsResponse({}));
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecords(request: $_model.DescribeAuditLogRecordsRequest): Promise<$_model.DescribeAuditLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the available optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvicesWithOptions(request: $_model.DescribeAvailableAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableAdvices",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableAdvicesResponse({}));
  }

  /**
   * Queries the available optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvices(request: $_model.DescribeAvailableAdvicesRequest): Promise<$_model.DescribeAvailableAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableAdvicesWithOptions(request, runtime);
  }

  /**
   * 查看集群备份设置
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPolicyResponse({}));
  }

  /**
   * 查看集群备份设置
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查询实例备份集
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remote)) {
      query["Remote"] = request.remote;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupsResponse({}));
  }

  /**
   * 查询实例备份集
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the bad SQL statements that affect cluster stability within a time range.
   * 
   * @param request - DescribeBadSqlDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBadSqlDetectionResponse
   */
  async describeBadSqlDetectionWithOptions(request: $_model.DescribeBadSqlDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBadSqlDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBadSqlDetection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBadSqlDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBadSqlDetectionResponse({}));
  }

  /**
   * Queries the bad SQL statements that affect cluster stability within a time range.
   * 
   * @param request - DescribeBadSqlDetectionRequest
   * @returns DescribeBadSqlDetectionResponse
   */
  async describeBadSqlDetection(request: $_model.DescribeBadSqlDetectionRequest): Promise<$_model.DescribeBadSqlDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBadSqlDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelists of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterAccessWhiteListResponse
   */
  async describeClusterAccessWhiteListWithOptions(request: $_model.DescribeClusterAccessWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterAccessWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterAccessWhiteList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterAccessWhiteListResponse({}));
  }

  /**
   * Queries the IP address whitelists of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterAccessWhiteListRequest
   * @returns DescribeClusterAccessWhiteListResponse
   */
  async describeClusterAccessWhiteList(request: $_model.DescribeClusterAccessWhiteListRequest): Promise<$_model.DescribeClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterNetInfoResponse
   */
  async describeClusterNetInfoWithOptions(request: $_model.DescribeClusterNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterNetInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterNetInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterNetInfoResponse({}));
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterNetInfoRequest
   * @returns DescribeClusterNetInfoResponse
   */
  async describeClusterNetInfo(request: $_model.DescribeClusterNetInfoRequest): Promise<$_model.DescribeClusterNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterResourceDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourceDetailResponse
   */
  async describeClusterResourceDetailWithOptions(request: $_model.DescribeClusterResourceDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterResourceDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterResourceDetail",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterResourceDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterResourceDetailResponse({}));
  }

  /**
   * Queries the information about resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterResourceDetailRequest
   * @returns DescribeClusterResourceDetailResponse
   */
  async describeClusterResourceDetail(request: $_model.DescribeClusterResourceDetailRequest): Promise<$_model.DescribeClusterResourceDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterResourceDetailWithOptions(request, runtime);
  }

  /**
   * Queries the resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClusterResourceUsageResponse
   */
  async describeClusterResourceUsageWithOptions(request: $_model.DescribeClusterResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClusterResourceUsageResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeClusterResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClusterResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClusterResourceUsageResponse({}));
  }

  /**
   * Queries the resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeClusterResourceUsageRequest
   * @returns DescribeClusterResourceUsageResponse
   */
  async describeClusterResourceUsage(request: $_model.DescribeClusterResourceUsageRequest): Promise<$_model.DescribeClusterResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClusterResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries a list of columns in a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: $_model.DescribeColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColumns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColumnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeColumnsResponse({}));
  }

  /**
   * Queries a list of columns in a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: $_model.DescribeColumnsRequest): Promise<$_model.DescribeColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries whether the remote build feature is enabled in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeCompactionServiceSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCompactionServiceSwitchResponse
   */
  async describeCompactionServiceSwitchWithOptions(request: $_model.DescribeCompactionServiceSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCompactionServiceSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCompactionServiceSwitch",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCompactionServiceSwitchResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCompactionServiceSwitchResponse({}));
  }

  /**
   * Queries whether the remote build feature is enabled in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeCompactionServiceSwitchRequest
   * @returns DescribeCompactionServiceSwitchResponse
   */
  async describeCompactionServiceSwitch(request: $_model.DescribeCompactionServiceSwitchRequest): Promise<$_model.DescribeCompactionServiceSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCompactionServiceSwitchWithOptions(request, runtime);
  }

  /**
   * Queries the computing resource usage of a resource group in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeComputeResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComputeResourceUsageResponse
   */
  async describeComputeResourceUsageWithOptions(request: $_model.DescribeComputeResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComputeResourceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComputeResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComputeResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComputeResourceUsageResponse({}));
  }

  /**
   * Queries the computing resource usage of a resource group in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeComputeResourceUsageRequest
   * @returns DescribeComputeResourceUsageResponse
   */
  async describeComputeResourceUsage(request: $_model.DescribeComputeResourceUsageRequest): Promise<$_model.DescribeComputeResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComputeResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the access layer.
   * 
   * @param request - DescribeControllerDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeControllerDetectionResponse
   */
  async describeControllerDetectionWithOptions(request: $_model.DescribeControllerDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeControllerDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeControllerDetection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeControllerDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeControllerDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the access layer.
   * 
   * @param request - DescribeControllerDetectionRequest
   * @returns DescribeControllerDetectionResponse
   */
  async describeControllerDetection(request: $_model.DescribeControllerDetectionRequest): Promise<$_model.DescribeControllerDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeControllerDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttributeWithOptions(request: $_model.DescribeDBClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAttributeResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: $_model.DescribeDBClusterAttributeRequest): Promise<$_model.DescribeDBClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the health status of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatusWithOptions(request: $_model.DescribeDBClusterHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterHealthStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterHealthStatusResponse({}));
  }

  /**
   * Queries the health status of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatus(request: $_model.DescribeDBClusterHealthStatusRequest): Promise<$_model.DescribeDBClusterHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: $_model.DescribeDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterPerformance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterPerformanceResponse({}));
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummaryWithOptions(request: $_model.DescribeDBClusterSpaceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterSpaceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterSpaceSummary",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterSpaceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterSpaceSummaryResponse({}));
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummary(request: $_model.DescribeDBClusterSpaceSummaryRequest): Promise<$_model.DescribeDBClusterSpaceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterSpaceSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the statuses of AnalyticDB for MySQL clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatusWithOptions(request: $_model.DescribeDBClusterStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterStatus",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterStatusResponse({}));
  }

  /**
   * Queries the statuses of AnalyticDB for MySQL clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatus(request: $_model.DescribeDBClusterStatusRequest): Promise<$_model.DescribeDBClusterStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersResponse
   */
  async describeDBClustersWithOptions(request: $_model.DescribeDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!$dara.isNull(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
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
      action: "DescribeDBClusters",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClustersResponse({}));
  }

  /**
   * Queries the information about AnalyticDB for MySQL Data Lakehouse Edition clusters within a region.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: $_model.DescribeDBClustersRequest): Promise<$_model.DescribeDBClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroupWithOptions(request: $_model.DescribeDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBResourceGroupResponse({}));
  }

  /**
   * Queries the information about resource groups of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroup(request: $_model.DescribeDBResourceGroupRequest): Promise<$_model.DescribeDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the deduplicated statistics of resource groups, databases, usernames, and source IP addresses about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensionsWithOptions(request: $_model.DescribeDiagnosisDimensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
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
      action: "DescribeDiagnosisDimensions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisDimensionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisDimensionsResponse({}));
  }

  /**
   * Queries the deduplicated statistics of resource groups, databases, usernames, and source IP addresses about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: $_model.DescribeDiagnosisDimensionsRequest): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecordsWithOptions(request: $_model.DescribeDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!$dara.isNull(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!$dara.isNull(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!$dara.isNull(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisRecordsResponse({}));
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: $_model.DescribeDiagnosisRecordsRequest): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfoWithOptions(request: $_model.DescribeDiagnosisSQLInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.processRcHost)) {
      query["ProcessRcHost"] = request.processRcHost;
    }

    if (!$dara.isNull(request.processStartTime)) {
      query["ProcessStartTime"] = request.processStartTime;
    }

    if (!$dara.isNull(request.processState)) {
      query["ProcessState"] = request.processState;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisSQLInfoResponse({}));
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: $_model.DescribeDiagnosisSQLInfoRequest): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the last five SQL query download tasks of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecordsWithOptions(request: $_model.DescribeDownloadRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadRecordsResponse({}));
  }

  /**
   * Queries the last five SQL query download tasks of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: $_model.DescribeDownloadRecordsRequest): Promise<$_model.DescribeDownloadRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanAttributeResponse
   */
  async describeElasticPlanAttributeWithOptions(request: $_model.DescribeElasticPlanAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticPlanAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticPlanAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticPlanAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticPlanAttributeResponse({}));
  }

  /**
   * Queries the information about a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanAttributeRequest
   * @returns DescribeElasticPlanAttributeResponse
   */
  async describeElasticPlanAttribute(request: $_model.DescribeElasticPlanAttributeRequest): Promise<$_model.DescribeElasticPlanAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticPlanAttributeWithOptions(request, runtime);
  }

  /**
   * Queries a list of scaling plan jobs for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlanJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanJobsResponse
   */
  async describeElasticPlanJobsWithOptions(request: $_model.DescribeElasticPlanJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticPlanJobsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
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
      action: "DescribeElasticPlanJobs",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticPlanJobsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticPlanJobsResponse({}));
  }

  /**
   * Queries a list of scaling plan jobs for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeElasticPlanJobsRequest
   * @returns DescribeElasticPlanJobsResponse
   */
  async describeElasticPlanJobs(request: $_model.DescribeElasticPlanJobsRequest): Promise<$_model.DescribeElasticPlanJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticPlanJobsWithOptions(request, runtime);
  }

  /**
   * Queries the resource specifications that are supported by different types of scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanSpecificationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanSpecificationsResponse
   */
  async describeElasticPlanSpecificationsWithOptions(request: $_model.DescribeElasticPlanSpecificationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticPlanSpecificationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticPlanSpecifications",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticPlanSpecificationsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticPlanSpecificationsResponse({}));
  }

  /**
   * Queries the resource specifications that are supported by different types of scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlanSpecificationsRequest
   * @returns DescribeElasticPlanSpecificationsResponse
   */
  async describeElasticPlanSpecifications(request: $_model.DescribeElasticPlanSpecificationsRequest): Promise<$_model.DescribeElasticPlanSpecificationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticPlanSpecificationsWithOptions(request, runtime);
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlansRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlansResponse
   */
  async describeElasticPlansWithOptions(request: $_model.DescribeElasticPlansRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticPlansResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticPlans",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticPlansResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticPlansResponse({}));
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeElasticPlansRequest
   * @returns DescribeElasticPlansResponse
   */
  async describeElasticPlans(request: $_model.DescribeElasticPlansRequest): Promise<$_model.DescribeElasticPlansResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticPlansWithOptions(request, runtime);
  }

  /**
   * Queries the permission level and permissions supported for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEnabledPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEnabledPrivilegesResponse
   */
  async describeEnabledPrivilegesWithOptions(request: $_model.DescribeEnabledPrivilegesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEnabledPrivilegesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEnabledPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEnabledPrivilegesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEnabledPrivilegesResponse({}));
  }

  /**
   * Queries the permission level and permissions supported for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEnabledPrivilegesRequest
   * @returns DescribeEnabledPrivilegesResponse
   */
  async describeEnabledPrivileges(request: $_model.DescribeEnabledPrivilegesRequest): Promise<$_model.DescribeEnabledPrivilegesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEnabledPrivilegesWithOptions(request, runtime);
  }

  /**
   * Queries the disk cache size in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeEssdCacheConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEssdCacheConfigResponse
   */
  async describeEssdCacheConfigWithOptions(request: $_model.DescribeEssdCacheConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEssdCacheConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEssdCacheConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEssdCacheConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEssdCacheConfigResponse({}));
  }

  /**
   * Queries the disk cache size in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeEssdCacheConfigRequest
   * @returns DescribeEssdCacheConfigResponse
   */
  async describeEssdCacheConfig(request: $_model.DescribeEssdCacheConfigRequest): Promise<$_model.DescribeEssdCacheConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEssdCacheConfigWithOptions(request, runtime);
  }

  /**
   * Queries the information about tables that have excessive primary key fields in an AnalyticDB for MySQL Data Lakehouse Edition (V5.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeysWithOptions(request: $_model.DescribeExcessivePrimaryKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExcessivePrimaryKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExcessivePrimaryKeys",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExcessivePrimaryKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExcessivePrimaryKeysResponse({}));
  }

  /**
   * Queries the information about tables that have excessive primary key fields in an AnalyticDB for MySQL Data Lakehouse Edition (V5.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeys(request: $_model.DescribeExcessivePrimaryKeysRequest): Promise<$_model.DescribeExcessivePrimaryKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExcessivePrimaryKeysWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the compute layer.
   * 
   * @param request - DescribeExecutorDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutorDetectionResponse
   */
  async describeExecutorDetectionWithOptions(request: $_model.DescribeExecutorDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExecutorDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExecutorDetection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExecutorDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExecutorDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the compute layer.
   * 
   * @param request - DescribeExecutorDetectionRequest
   * @returns DescribeExecutorDetectionResponse
   */
  async describeExecutorDetection(request: $_model.DescribeExecutorDetectionRequest): Promise<$_model.DescribeExecutorDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutorDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the disk usage of all storage nodes.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeInclinedNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInclinedNodesResponse
   */
  async describeInclinedNodesWithOptions(request: $_model.DescribeInclinedNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInclinedNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInclinedNodes",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInclinedNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInclinedNodesResponse({}));
  }

  /**
   * Queries the disk usage of all storage nodes.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeInclinedNodesRequest
   * @returns DescribeInclinedNodesResponse
   */
  async describeInclinedNodes(request: $_model.DescribeInclinedNodesRequest): Promise<$_model.DescribeInclinedNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInclinedNodesWithOptions(request, runtime);
  }

  /**
   * Queries the information about skewed tables for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTablesWithOptions(request: $_model.DescribeInclinedTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInclinedTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInclinedTables",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInclinedTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInclinedTablesResponse({}));
  }

  /**
   * Queries the information about skewed tables for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTables(request: $_model.DescribeInclinedTablesRequest): Promise<$_model.DescribeInclinedTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInclinedTablesWithOptions(request, runtime);
  }

  /**
   * 获取作业资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeJobResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeJobResourceUsageResponse
   */
  async describeJobResourceUsageWithOptions(request: $_model.DescribeJobResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeJobResourceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeJobResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeJobResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeJobResourceUsageResponse({}));
  }

  /**
   * 获取作业资源使用统计
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeJobResourceUsageRequest
   * @returns DescribeJobResourceUsageResponse
   */
  async describeJobResourceUsage(request: $_model.DescribeJobResourceUsageRequest): Promise<$_model.DescribeJobResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeJobResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersionWithOptions(request: $_model.DescribeKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKernelVersion",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKernelVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKernelVersionResponse({}));
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersion(request: $_model.DescribeKernelVersionRequest): Promise<$_model.DescribeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKernelVersionWithOptions(request, runtime);
  }

  /**
   * Queries the answer by a large language model (LLM) to a user question about the use of AnalyticDB for MySQL.
   * 
   * @param request - DescribeLLMAnswerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLLMAnswerResponse
   */
  async describeLLMAnswerWithOptions(request: $_model.DescribeLLMAnswerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLLMAnswerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLLMAnswer",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLLMAnswerResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLLMAnswerResponse({}));
  }

  /**
   * Queries the answer by a large language model (LLM) to a user question about the use of AnalyticDB for MySQL.
   * 
   * @param request - DescribeLLMAnswerRequest
   * @returns DescribeLLMAnswerResponse
   */
  async describeLLMAnswer(request: $_model.DescribeLLMAnswerRequest): Promise<$_model.DescribeLLMAnswerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLLMAnswerWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeLLMSimilarQuestionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLLMSimilarQuestionsResponse
   */
  async describeLLMSimilarQuestionsWithOptions(request: $_model.DescribeLLMSimilarQuestionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLLMSimilarQuestionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLLMSimilarQuestions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLLMSimilarQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLLMSimilarQuestionsResponse({}));
  }

  /**
   * @param request - DescribeLLMSimilarQuestionsRequest
   * @returns DescribeLLMSimilarQuestionsResponse
   */
  async describeLLMSimilarQuestions(request: $_model.DescribeLLMSimilarQuestionsRequest): Promise<$_model.DescribeLLMSimilarQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLLMSimilarQuestionsWithOptions(request, runtime);
  }

  /**
   * Queries the lake cache size of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeLakeCacheSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLakeCacheSizeResponse
   */
  async describeLakeCacheSizeWithOptions(request: $_model.DescribeLakeCacheSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLakeCacheSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLakeCacheSize",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLakeCacheSizeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLakeCacheSizeResponse({}));
  }

  /**
   * Queries the lake cache size of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeLakeCacheSizeRequest
   * @returns DescribeLakeCacheSizeResponse
   */
  async describeLakeCacheSize(request: $_model.DescribeLakeCacheSizeRequest): Promise<$_model.DescribeLakeCacheSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLakeCacheSizeWithOptions(request, runtime);
  }

  /**
   * Queries the service account permissions of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermissionWithOptions(request: $_model.DescribeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperatorPermission",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorPermissionResponse({}));
  }

  /**
   * Queries the service account permissions of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOperatorPermissionRequest
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermission(request: $_model.DescribeOperatorPermissionRequest): Promise<$_model.DescribeOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the information about oversized non-partitioned tables in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOversizeNonPartitionTableInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOversizeNonPartitionTableInfosResponse
   */
  async describeOversizeNonPartitionTableInfosWithOptions(request: $_model.DescribeOversizeNonPartitionTableInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOversizeNonPartitionTableInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOversizeNonPartitionTableInfos",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOversizeNonPartitionTableInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOversizeNonPartitionTableInfosResponse({}));
  }

  /**
   * Queries the information about oversized non-partitioned tables in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOversizeNonPartitionTableInfosRequest
   * @returns DescribeOversizeNonPartitionTableInfosResponse
   */
  async describeOversizeNonPartitionTableInfos(request: $_model.DescribeOversizeNonPartitionTableInfosRequest): Promise<$_model.DescribeOversizeNonPartitionTableInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOversizeNonPartitionTableInfosWithOptions(request, runtime);
  }

  /**
   * Queries the information about performance metrics of an SQL pattern such as the query duration and average memory usage for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformanceWithOptions(request: $_model.DescribePatternPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePatternPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.patternId)) {
      query["PatternId"] = request.patternId;
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
      action: "DescribePatternPerformance",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePatternPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePatternPerformanceResponse({}));
  }

  /**
   * Queries the information about performance metrics of an SQL pattern such as the query duration and average memory usage for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformance(request: $_model.DescribePatternPerformanceRequest): Promise<$_model.DescribePatternPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a monitoring view.
   * 
   * @param request - DescribePerformanceViewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerformanceViewAttributeResponse
   */
  async describePerformanceViewAttributeWithOptions(request: $_model.DescribePerformanceViewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePerformanceViewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePerformanceViewAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePerformanceViewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribePerformanceViewAttributeResponse({}));
  }

  /**
   * Queries the information about a monitoring view.
   * 
   * @param request - DescribePerformanceViewAttributeRequest
   * @returns DescribePerformanceViewAttributeResponse
   */
  async describePerformanceViewAttribute(request: $_model.DescribePerformanceViewAttributeRequest): Promise<$_model.DescribePerformanceViewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePerformanceViewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries a list of monitoring views.
   * 
   * @param request - DescribePerformanceViewsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePerformanceViewsResponse
   */
  async describePerformanceViewsWithOptions(request: $_model.DescribePerformanceViewsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePerformanceViewsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePerformanceViews",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePerformanceViewsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePerformanceViewsResponse({}));
  }

  /**
   * Queries a list of monitoring views.
   * 
   * @param request - DescribePerformanceViewsRequest
   * @returns DescribePerformanceViewsResponse
   */
  async describePerformanceViews(request: $_model.DescribePerformanceViewsRequest): Promise<$_model.DescribePerformanceViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePerformanceViewsWithOptions(request, runtime);
  }

  /**
   * Queries a list of regions and zones in which AnalyticDB for MySQL Data Lakehouse Edition (V3.0) is available.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of regions and zones in which AnalyticDB for MySQL Data Lakehouse Edition (V3.0) is available.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about resource group specifications.
   * 
   * @remarks
   * ### [](#)
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://www.alibabacloud.com/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2021-12-01-endpoint?spm=a2c63.p38356.help-menu-92664.d_5_3_1.57da5837J23pkx).
   * 
   * @param request - DescribeResourceGroupSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceGroupSpecResponse
   */
  async describeResourceGroupSpecWithOptions(request: $_model.DescribeResourceGroupSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResourceGroupSpecResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupType)) {
      query["ResourceGroupType"] = request.resourceGroupType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceGroupSpec",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResourceGroupSpecResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResourceGroupSpecResponse({}));
  }

  /**
   * Queries the information about resource group specifications.
   * 
   * @remarks
   * ### [](#)
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://www.alibabacloud.com/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2021-12-01-endpoint?spm=a2c63.p38356.help-menu-92664.d_5_3_1.57da5837J23pkx).
   * 
   * @param request - DescribeResourceGroupSpecRequest
   * @returns DescribeResourceGroupSpecResponse
   */
  async describeResourceGroupSpec(request: $_model.DescribeResourceGroupSpecRequest): Promise<$_model.DescribeResourceGroupSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResourceGroupSpecWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatternsWithOptions(request: $_model.DescribeSQLPatternsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLPatternsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLPatterns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLPatternsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLPatternsResponse({}));
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatterns(request: $_model.DescribeSQLPatternsRequest): Promise<$_model.DescribeSQLPatternsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  /**
   * 查看注册的WebSocket域名
   * 
   * @param request - DescribeSQLWebSocketDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLWebSocketDomainResponse
   */
  async describeSQLWebSocketDomainWithOptions(request: $_model.DescribeSQLWebSocketDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLWebSocketDomainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLWebSocketDomain",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLWebSocketDomainResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLWebSocketDomainResponse({}));
  }

  /**
   * 查看注册的WebSocket域名
   * 
   * @param request - DescribeSQLWebSocketDomainRequest
   * @returns DescribeSQLWebSocketDomainResponse
   */
  async describeSQLWebSocketDomain(request: $_model.DescribeSQLWebSocketDomainRequest): Promise<$_model.DescribeSQLWebSocketDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLWebSocketDomainWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSchemasResponse
   */
  async describeSchemasWithOptions(request: $_model.DescribeSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSchemas",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSchemasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSchemasResponse({}));
  }

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: $_model.DescribeSchemasRequest): Promise<$_model.DescribeSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about a Spark application.
   * 
   * @param request - DescribeSparkAppDiagnosisInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkAppDiagnosisInfoResponse
   */
  async describeSparkAppDiagnosisInfoWithOptions(request: $_model.DescribeSparkAppDiagnosisInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkAppDiagnosisInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkAppDiagnosisInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkAppDiagnosisInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkAppDiagnosisInfoResponse({}));
  }

  /**
   * Queries the diagnostic information about a Spark application.
   * 
   * @param request - DescribeSparkAppDiagnosisInfoRequest
   * @returns DescribeSparkAppDiagnosisInfoResponse
   */
  async describeSparkAppDiagnosisInfo(request: $_model.DescribeSparkAppDiagnosisInfoRequest): Promise<$_model.DescribeSparkAppDiagnosisInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkAppDiagnosisInfoWithOptions(request, runtime);
  }

  /**
   * Queries the type of a Spark application.
   * 
   * @param request - DescribeSparkAppTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkAppTypeResponse
   */
  async describeSparkAppTypeWithOptions(request: $_model.DescribeSparkAppTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkAppTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkAppType",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkAppTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkAppTypeResponse({}));
  }

  /**
   * Queries the type of a Spark application.
   * 
   * @param request - DescribeSparkAppTypeRequest
   * @returns DescribeSparkAppTypeResponse
   */
  async describeSparkAppType(request: $_model.DescribeSparkAppTypeRequest): Promise<$_model.DescribeSparkAppTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkAppTypeWithOptions(request, runtime);
  }

  /**
   * Queries the execution logs of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeLogResponse
   */
  async describeSparkCodeLogWithOptions(request: $_model.DescribeSparkCodeLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkCodeLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkCodeLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkCodeLogResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkCodeLogResponse({}));
  }

  /**
   * Queries the execution logs of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeLogRequest
   * @returns DescribeSparkCodeLogResponse
   */
  async describeSparkCodeLog(request: $_model.DescribeSparkCodeLogRequest): Promise<$_model.DescribeSparkCodeLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkCodeLogWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeOutputResponse
   */
  async describeSparkCodeOutputWithOptions(request: $_model.DescribeSparkCodeOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkCodeOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkCodeOutput",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkCodeOutputResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkCodeOutputResponse({}));
  }

  /**
   * Queries the execution result of Spark code.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeOutputRequest
   * @returns DescribeSparkCodeOutputResponse
   */
  async describeSparkCodeOutput(request: $_model.DescribeSparkCodeOutputRequest): Promise<$_model.DescribeSparkCodeOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkCodeOutputWithOptions(request, runtime);
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeWebUiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkCodeWebUiResponse
   */
  async describeSparkCodeWebUiWithOptions(request: $_model.DescribeSparkCodeWebUiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkCodeWebUiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkCodeWebUi",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkCodeWebUiResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkCodeWebUiResponse({}));
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeSparkCodeWebUiRequest
   * @returns DescribeSparkCodeWebUiResponse
   */
  async describeSparkCodeWebUi(request: $_model.DescribeSparkCodeWebUiRequest): Promise<$_model.DescribeSparkCodeWebUiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkCodeWebUiWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about a Spark SQL query.
   * 
   * @param request - DescribeSparkSQLDiagnosisAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkSQLDiagnosisAttributeResponse
   */
  async describeSparkSQLDiagnosisAttributeWithOptions(request: $_model.DescribeSparkSQLDiagnosisAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkSQLDiagnosisAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.innerQueryId)) {
      query["InnerQueryId"] = request.innerQueryId;
    }

    if (!$dara.isNull(request.language)) {
      query["Language"] = request.language;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkSQLDiagnosisAttribute",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkSQLDiagnosisAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkSQLDiagnosisAttributeResponse({}));
  }

  /**
   * Queries the diagnostic information about a Spark SQL query.
   * 
   * @param request - DescribeSparkSQLDiagnosisAttributeRequest
   * @returns DescribeSparkSQLDiagnosisAttributeResponse
   */
  async describeSparkSQLDiagnosisAttribute(request: $_model.DescribeSparkSQLDiagnosisAttributeRequest): Promise<$_model.DescribeSparkSQLDiagnosisAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkSQLDiagnosisAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about Spark SQL queries.
   * 
   * @param request - DescribeSparkSQLDiagnosisListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSparkSQLDiagnosisListResponse
   */
  async describeSparkSQLDiagnosisListWithOptions(request: $_model.DescribeSparkSQLDiagnosisListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSparkSQLDiagnosisListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.maxStartTime)) {
      query["MaxStartTime"] = request.maxStartTime;
    }

    if (!$dara.isNull(request.minStartTime)) {
      query["MinStartTime"] = request.minStartTime;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.statementId)) {
      query["StatementId"] = request.statementId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSparkSQLDiagnosisList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSparkSQLDiagnosisListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSparkSQLDiagnosisListResponse({}));
  }

  /**
   * Queries the diagnostic information about Spark SQL queries.
   * 
   * @param request - DescribeSparkSQLDiagnosisListRequest
   * @returns DescribeSparkSQLDiagnosisListResponse
   */
  async describeSparkSQLDiagnosisList(request: $_model.DescribeSparkSQLDiagnosisListRequest): Promise<$_model.DescribeSparkSQLDiagnosisListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSparkSQLDiagnosisListWithOptions(request, runtime);
  }

  /**
   * Queries the information about SQL patterns of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeSqlPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPatternWithOptions(request: $_model.DescribeSqlPatternRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlPatternResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.sqlPattern)) {
      query["SqlPattern"] = request.sqlPattern;
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
      action: "DescribeSqlPattern",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlPatternResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlPatternResponse({}));
  }

  /**
   * Queries the information about SQL patterns of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster within a time range.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeSqlPatternRequest
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPattern(request: $_model.DescribeSqlPatternRequest): Promise<$_model.DescribeSqlPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  /**
   * Queries the storage resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeStorageResourceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageResourceUsageResponse
   */
  async describeStorageResourceUsageWithOptions(request: $_model.DescribeStorageResourceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStorageResourceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStorageResourceUsage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStorageResourceUsageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStorageResourceUsageResponse({}));
  }

  /**
   * Queries the storage resource usage of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeStorageResourceUsageRequest
   * @returns DescribeStorageResourceUsageResponse
   */
  async describeStorageResourceUsage(request: $_model.DescribeStorageResourceUsageRequest): Promise<$_model.DescribeStorageResourceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStorageResourceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the number of accesses to a table or all tables in an AnalyticDB for MySQL cluster on a date.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeTableAccessCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCountWithOptions(request: $_model.DescribeTableAccessCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableAccessCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableAccessCount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableAccessCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableAccessCountResponse({}));
  }

  /**
   * Queries the number of accesses to a table or all tables in an AnalyticDB for MySQL cluster on a date.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DescribeTableAccessCountRequest
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCount(request: $_model.DescribeTableAccessCountRequest): Promise<$_model.DescribeTableAccessCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  /**
   * Queries the information about data distribution among shards of a table.
   * 
   * @param request - DescribeTableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetailWithOptions(request: $_model.DescribeTableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableDetail",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableDetailResponse({}));
  }

  /**
   * Queries the information about data distribution among shards of a table.
   * 
   * @param request - DescribeTableDetailRequest
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetail(request: $_model.DescribeTableDetailRequest): Promise<$_model.DescribeTableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnoseWithOptions(request: $_model.DescribeTablePartitionDiagnoseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablePartitionDiagnoseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTablePartitionDiagnose",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTablePartitionDiagnoseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTablePartitionDiagnoseResponse({}));
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnose(request: $_model.DescribeTablePartitionDiagnoseRequest): Promise<$_model.DescribeTablePartitionDiagnoseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablePartitionDiagnoseWithOptions(request, runtime);
  }

  /**
   * 查询表统计信息
   * 
   * @param request - DescribeTableStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatisticsWithOptions(request: $_model.DescribeTableStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableStatistics",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableStatisticsResponse({}));
  }

  /**
   * 查询表统计信息
   * 
   * @param request - DescribeTableStatisticsRequest
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatistics(request: $_model.DescribeTableStatisticsRequest): Promise<$_model.DescribeTableStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a database.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: $_model.DescribeTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTables",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTablesResponse({}));
  }

  /**
   * Queries a list of tables in a database.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Queries available quotas.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeUserQuotaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuotaWithOptions(request: $_model.DescribeUserQuotaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserQuotaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserQuota",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserQuotaResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserQuotaResponse({}));
  }

  /**
   * Queries available quotas.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeUserQuotaRequest
   * @returns DescribeUserQuotaResponse
   */
  async describeUserQuota(request: $_model.DescribeUserQuotaRequest): Promise<$_model.DescribeUserQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserQuotaWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the storage layer.
   * 
   * @param request - DescribeWorkerDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkerDetectionResponse
   */
  async describeWorkerDetectionWithOptions(request: $_model.DescribeWorkerDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkerDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkerDetection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkerDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkerDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the storage layer.
   * 
   * @param request - DescribeWorkerDetectionRequest
   * @returns DescribeWorkerDetectionResponse
   */
  async describeWorkerDetection(request: $_model.DescribeWorkerDetectionRequest): Promise<$_model.DescribeWorkerDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWorkerDetectionWithOptions(request, runtime);
  }

  /**
   * 解绑用户弹性网卡
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DetachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachUserENIResponse
   */
  async detachUserENIWithOptions(request: $_model.DetachUserENIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachUserENIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachUserENI",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachUserENIResponse>(await this.callApi(params, req, runtime), new $_model.DetachUserENIResponse({}));
  }

  /**
   * 解绑用户弹性网卡
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DetachUserENIRequest
   * @returns DetachUserENIResponse
   */
  async detachUserENI(request: $_model.DetachUserENIRequest): Promise<$_model.DetachUserENIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachUserENIWithOptions(request, runtime);
  }

  /**
   * Disables the suggestion feature.
   * 
   * @param request - DisableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceServiceWithOptions(request: $_model.DisableAdviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAdviceServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAdviceService",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAdviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.DisableAdviceServiceResponse({}));
  }

  /**
   * Disables the suggestion feature.
   * 
   * @param request - DisableAdviceServiceRequest
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceService(request: $_model.DisableAdviceServiceRequest): Promise<$_model.DisableAdviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Disables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DisableElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableElasticPlanResponse
   */
  async disableElasticPlanWithOptions(request: $_model.DisableElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.DisableElasticPlanResponse({}));
  }

  /**
   * Disables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DisableElasticPlanRequest
   * @returns DisableElasticPlanResponse
   */
  async disableElasticPlan(request: $_model.DisableElasticPlanRequest): Promise<$_model.DisableElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableElasticPlanWithOptions(request, runtime);
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecordsWithOptions(request: $_model.DownloadDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!$dara.isNull(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!$dara.isNull(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!$dara.isNull(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadDiagnosisRecords",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadDiagnosisRecordsResponse({}));
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a query condition for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: $_model.DownloadDiagnosisRecordsRequest): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the Object Storage Service (OSS) URL of the downloaded certificate authority (CA) certificate that is used to connect to the wide table engine.
   * 
   * @param request - DownloadInstanceCACertificateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadInstanceCACertificateResponse
   */
  async downloadInstanceCACertificateWithOptions(request: $_model.DownloadInstanceCACertificateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadInstanceCACertificateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadInstanceCACertificate",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadInstanceCACertificateResponse>(await this.callApi(params, req, runtime), new $_model.DownloadInstanceCACertificateResponse({}));
  }

  /**
   * Queries the Object Storage Service (OSS) URL of the downloaded certificate authority (CA) certificate that is used to connect to the wide table engine.
   * 
   * @param request - DownloadInstanceCACertificateRequest
   * @returns DownloadInstanceCACertificateResponse
   */
  async downloadInstanceCACertificate(request: $_model.DownloadInstanceCACertificateRequest): Promise<$_model.DownloadInstanceCACertificateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadInstanceCACertificateWithOptions(request, runtime);
  }

  /**
   * Enables the suggestion feature.
   * 
   * @param request - EnableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceServiceWithOptions(request: $_model.EnableAdviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAdviceServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAdviceService",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAdviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.EnableAdviceServiceResponse({}));
  }

  /**
   * Enables the suggestion feature.
   * 
   * @param request - EnableAdviceServiceRequest
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceService(request: $_model.EnableAdviceServiceRequest): Promise<$_model.EnableAdviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Enables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - EnableElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableElasticPlanResponse
   */
  async enableElasticPlanWithOptions(request: $_model.EnableElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.EnableElasticPlanResponse({}));
  }

  /**
   * Enables a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - EnableElasticPlanRequest
   * @returns EnableElasticPlanResponse
   */
  async enableElasticPlan(request: $_model.EnableElasticPlanRequest): Promise<$_model.EnableElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableElasticPlanWithOptions(request, runtime);
  }

  /**
   * Executes part of the code in a Spark job.
   * 
   * @param request - ExecuteSparkReplStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSparkReplStatementResponse
   */
  async executeSparkReplStatementWithOptions(request: $_model.ExecuteSparkReplStatementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSparkReplStatementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.codeType)) {
      body["CodeType"] = request.codeType;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSparkReplStatement",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSparkReplStatementResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSparkReplStatementResponse({}));
  }

  /**
   * Executes part of the code in a Spark job.
   * 
   * @param request - ExecuteSparkReplStatementRequest
   * @returns ExecuteSparkReplStatementResponse
   */
  async executeSparkReplStatement(request: $_model.ExecuteSparkReplStatementRequest): Promise<$_model.ExecuteSparkReplStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeSparkReplStatementWithOptions(request, runtime);
  }

  /**
   * Executes Spark SQL statements in batches.
   * 
   * @param request - ExecuteSparkWarehouseBatchSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSparkWarehouseBatchSQLResponse
   */
  async executeSparkWarehouseBatchSQLWithOptions(request: $_model.ExecuteSparkWarehouseBatchSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSparkWarehouseBatchSQLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agency)) {
      body["Agency"] = request.agency;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.executeResultLimit)) {
      body["ExecuteResultLimit"] = request.executeResultLimit;
    }

    if (!$dara.isNull(request.executeTimeLimitInSeconds)) {
      body["ExecuteTimeLimitInSeconds"] = request.executeTimeLimitInSeconds;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.runtimeConfig)) {
      body["RuntimeConfig"] = request.runtimeConfig;
    }

    if (!$dara.isNull(request.schema)) {
      body["Schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSparkWarehouseBatchSQL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSparkWarehouseBatchSQLResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSparkWarehouseBatchSQLResponse({}));
  }

  /**
   * Executes Spark SQL statements in batches.
   * 
   * @param request - ExecuteSparkWarehouseBatchSQLRequest
   * @returns ExecuteSparkWarehouseBatchSQLResponse
   */
  async executeSparkWarehouseBatchSQL(request: $_model.ExecuteSparkWarehouseBatchSQLRequest): Promise<$_model.ExecuteSparkWarehouseBatchSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeSparkWarehouseBatchSQLWithOptions(request, runtime);
  }

  /**
   * Queries whether a running SQL engine exists.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @deprecated OpenAPI ExistRunningSQLEngine is deprecated
   * 
   * @param request - ExistRunningSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExistRunningSQLEngineResponse
   */
  // Deprecated
  async existRunningSQLEngineWithOptions(request: $_model.ExistRunningSQLEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExistRunningSQLEngineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExistRunningSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExistRunningSQLEngineResponse>(await this.callApi(params, req, runtime), new $_model.ExistRunningSQLEngineResponse({}));
  }

  /**
   * Queries whether a running SQL engine exists.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @deprecated OpenAPI ExistRunningSQLEngine is deprecated
   * 
   * @param request - ExistRunningSQLEngineRequest
   * @returns ExistRunningSQLEngineResponse
   */
  // Deprecated
  async existRunningSQLEngine(request: $_model.ExistRunningSQLEngineRequest): Promise<$_model.ExistRunningSQLEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.existRunningSQLEngineWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases.
   * 
   * @param request - GetApsManagedDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApsManagedDatabasesResponse
   */
  async getApsManagedDatabasesWithOptions(request: $_model.GetApsManagedDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApsManagedDatabasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApsManagedDatabases",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApsManagedDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.GetApsManagedDatabasesResponse({}));
  }

  /**
   * Queries a list of databases.
   * 
   * @param request - GetApsManagedDatabasesRequest
   * @returns GetApsManagedDatabasesResponse
   */
  async getApsManagedDatabases(request: $_model.GetApsManagedDatabasesRequest): Promise<$_model.GetApsManagedDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApsManagedDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries the table creation statement for tables.
   * 
   * @param request - GetCreateTableSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateTableSQLResponse
   */
  async getCreateTableSQLWithOptions(request: $_model.GetCreateTableSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateTableSQLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateTableSQL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateTableSQLResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateTableSQLResponse({}));
  }

  /**
   * Queries the table creation statement for tables.
   * 
   * @param request - GetCreateTableSQLRequest
   * @returns GetCreateTableSQLResponse
   */
  async getCreateTableSQL(request: $_model.GetCreateTableSQLRequest): Promise<$_model.GetCreateTableSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateTableSQLWithOptions(request, runtime);
  }

  /**
   * Queries the information about databases.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetDatabaseObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseObjectsResponse
   */
  async getDatabaseObjectsWithOptions(request: $_model.GetDatabaseObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!$dara.isNull(request.filterSchemaName)) {
      query["FilterSchemaName"] = request.filterSchemaName;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseObjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseObjectsResponse({}));
  }

  /**
   * Queries the information about databases.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetDatabaseObjectsRequest
   * @returns GetDatabaseObjectsResponse
   */
  async getDatabaseObjects(request: $_model.GetDatabaseObjectsRequest): Promise<$_model.GetDatabaseObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDatabaseObjectsWithOptions(request, runtime);
  }

  /**
   * Queries a lake storage.
   * 
   * @param request - GetLakeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLakeStorageResponse
   */
  async getLakeStorageWithOptions(request: $_model.GetLakeStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetLakeStorageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lakeStorageId)) {
      query["LakeStorageId"] = request.lakeStorageId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLakeStorage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLakeStorageResponse>(await this.callApi(params, req, runtime), new $_model.GetLakeStorageResponse({}));
  }

  /**
   * Queries a lake storage.
   * 
   * @param request - GetLakeStorageRequest
   * @returns GetLakeStorageResponse
   */
  async getLakeStorage(request: $_model.GetLakeStorageRequest): Promise<$_model.GetLakeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getLakeStorageWithOptions(request, runtime);
  }

  /**
   * Queries the information about the retry log of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppAttemptLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppAttemptLogResponse
   */
  async getSparkAppAttemptLogWithOptions(request: $_model.GetSparkAppAttemptLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppAttemptLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.attemptId)) {
      body["AttemptId"] = request.attemptId;
    }

    if (!$dara.isNull(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppAttemptLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppAttemptLogResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppAttemptLogResponse({}));
  }

  /**
   * Queries the information about the retry log of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppAttemptLogRequest
   * @returns GetSparkAppAttemptLogResponse
   */
  async getSparkAppAttemptLog(request: $_model.GetSparkAppAttemptLogRequest): Promise<$_model.GetSparkAppAttemptLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppAttemptLogWithOptions(request, runtime);
  }

  /**
   * Queries the information about an Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppInfoResponse
   */
  async getSparkAppInfoWithOptions(request: $_model.GetSparkAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppInfo",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppInfoResponse({}));
  }

  /**
   * Queries the information about an Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppInfoRequest
   * @returns GetSparkAppInfoResponse
   */
  async getSparkAppInfo(request: $_model.GetSparkAppInfoRequest): Promise<$_model.GetSparkAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppInfoWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppLogResponse
   */
  async getSparkAppLogWithOptions(request: $_model.GetSparkAppLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.logLength)) {
      body["LogLength"] = request.logLength;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppLog",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppLogResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppLogResponse({}));
  }

  /**
   * Queries the logs of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppLogRequest
   * @returns GetSparkAppLogResponse
   */
  async getSparkAppLog(request: $_model.GetSparkAppLogRequest): Promise<$_model.GetSparkAppLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppLogWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppMetricsResponse
   */
  async getSparkAppMetricsWithOptions(request: $_model.GetSparkAppMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppMetrics",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppMetricsResponse({}));
  }

  /**
   * Queries the metrics of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppMetricsRequest
   * @returns GetSparkAppMetricsResponse
   */
  async getSparkAppMetrics(request: $_model.GetSparkAppMetricsRequest): Promise<$_model.GetSparkAppMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppMetricsWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppStateResponse
   */
  async getSparkAppStateWithOptions(request: $_model.GetSparkAppStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppStateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppState",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppStateResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppStateResponse({}));
  }

  /**
   * Queries the status of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkAppStateRequest
   * @returns GetSparkAppStateResponse
   */
  async getSparkAppState(request: $_model.GetSparkAppStateRequest): Promise<$_model.GetSparkAppStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppStateWithOptions(request, runtime);
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppWebUiAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkAppWebUiAddressResponse
   */
  async getSparkAppWebUiAddressWithOptions(request: $_model.GetSparkAppWebUiAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkAppWebUiAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkAppWebUiAddress",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkAppWebUiAddressResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkAppWebUiAddressResponse({}));
  }

  /**
   * Queries the URL of the web UI for a Spark application.
   * 
   * @remarks
   *   General endpoint: `adb.aliyuncs.com`.
   * *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetSparkAppWebUiAddressRequest
   * @returns GetSparkAppWebUiAddressResponse
   */
  async getSparkAppWebUiAddress(request: $_model.GetSparkAppWebUiAddressRequest): Promise<$_model.GetSparkAppWebUiAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkAppWebUiAddressWithOptions(request, runtime);
  }

  /**
   * Queries the Spark log configuration of an AnalyticDB for MySQL cluster, including the default Spark log path.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkConfigLogPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkConfigLogPathResponse
   */
  async getSparkConfigLogPathWithOptions(request: $_model.GetSparkConfigLogPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkConfigLogPathResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkConfigLogPath",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkConfigLogPathResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkConfigLogPathResponse({}));
  }

  /**
   * Queries the Spark log configuration of an AnalyticDB for MySQL cluster, including the default Spark log path.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkConfigLogPathRequest
   * @returns GetSparkConfigLogPathResponse
   */
  async getSparkConfigLogPath(request: $_model.GetSparkConfigLogPathRequest): Promise<$_model.GetSparkConfigLogPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkConfigLogPathWithOptions(request, runtime);
  }

  /**
   * Queries the results of a Spark log analysis task.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkLogAnalyzeTaskResponse
   */
  async getSparkLogAnalyzeTaskWithOptions(request: $_model.GetSparkLogAnalyzeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkLogAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkLogAnalyzeTaskResponse({}));
  }

  /**
   * Queries the results of a Spark log analysis task.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkLogAnalyzeTaskRequest
   * @returns GetSparkLogAnalyzeTaskResponse
   */
  async getSparkLogAnalyzeTask(request: $_model.GetSparkLogAnalyzeTaskRequest): Promise<$_model.GetSparkLogAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Queries the status of a Spark session.
   * 
   * @param request - GetSparkReplSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkReplSessionResponse
   */
  async getSparkReplSessionWithOptions(request: $_model.GetSparkReplSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkReplSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkReplSession",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkReplSessionResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkReplSessionResponse({}));
  }

  /**
   * Queries the status of a Spark session.
   * 
   * @param request - GetSparkReplSessionRequest
   * @returns GetSparkReplSessionResponse
   */
  async getSparkReplSession(request: $_model.GetSparkReplSessionRequest): Promise<$_model.GetSparkReplSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkReplSessionWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of a code block.
   * 
   * @param request - GetSparkReplStatementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkReplStatementResponse
   */
  async getSparkReplStatementWithOptions(request: $_model.GetSparkReplStatementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkReplStatementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["SessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.statementId)) {
      body["StatementId"] = request.statementId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkReplStatement",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkReplStatementResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkReplStatementResponse({}));
  }

  /**
   * Queries the execution result of a code block.
   * 
   * @param request - GetSparkReplStatementRequest
   * @returns GetSparkReplStatementResponse
   */
  async getSparkReplStatement(request: $_model.GetSparkReplStatementRequest): Promise<$_model.GetSparkReplStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkReplStatementWithOptions(request, runtime);
  }

  /**
   * Queries the state information about the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkSQLEngineStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkSQLEngineStateResponse
   */
  async getSparkSQLEngineStateWithOptions(request: $_model.GetSparkSQLEngineStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkSQLEngineStateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkSQLEngineState",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkSQLEngineStateResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkSQLEngineStateResponse({}));
  }

  /**
   * Queries the state information about the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkSQLEngineStateRequest
   * @returns GetSparkSQLEngineStateResponse
   */
  async getSparkSQLEngineState(request: $_model.GetSparkSQLEngineStateRequest): Promise<$_model.GetSparkSQLEngineStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkSQLEngineStateWithOptions(request, runtime);
  }

  /**
   * Queries the content of a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFileContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFileContentResponse
   */
  async getSparkTemplateFileContentWithOptions(request: $_model.GetSparkTemplateFileContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkTemplateFileContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkTemplateFileContent",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkTemplateFileContentResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkTemplateFileContentResponse({}));
  }

  /**
   * Queries the content of a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFileContentRequest
   * @returns GetSparkTemplateFileContentResponse
   */
  async getSparkTemplateFileContent(request: $_model.GetSparkTemplateFileContentRequest): Promise<$_model.GetSparkTemplateFileContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkTemplateFileContentWithOptions(request, runtime);
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFolderTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFolderTreeResponse
   */
  async getSparkTemplateFolderTreeWithOptions(request: $_model.GetSparkTemplateFolderTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkTemplateFolderTreeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkTemplateFolderTree",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkTemplateFolderTreeResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkTemplateFolderTreeResponse({}));
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFolderTreeRequest
   * @returns GetSparkTemplateFolderTreeResponse
   */
  async getSparkTemplateFolderTree(request: $_model.GetSparkTemplateFolderTreeRequest): Promise<$_model.GetSparkTemplateFolderTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkTemplateFolderTreeWithOptions(request, runtime);
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFullTreeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkTemplateFullTreeResponse
   */
  async getSparkTemplateFullTreeWithOptions(request: $_model.GetSparkTemplateFullTreeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkTemplateFullTreeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkTemplateFullTree",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkTemplateFullTreeResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkTemplateFullTreeResponse({}));
  }

  /**
   * Queries the directory structure of Spark applications.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - GetSparkTemplateFullTreeRequest
   * @returns GetSparkTemplateFullTreeResponse
   */
  async getSparkTemplateFullTree(request: $_model.GetSparkTemplateFullTreeRequest): Promise<$_model.GetSparkTemplateFullTreeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkTemplateFullTreeWithOptions(request, runtime);
  }

  /**
   * Queries the execution result of a Spark SQL statement.
   * 
   * @param request - GetSparkWarehouseBatchSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSparkWarehouseBatchSQLResponse
   */
  async getSparkWarehouseBatchSQLWithOptions(request: $_model.GetSparkWarehouseBatchSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSparkWarehouseBatchSQLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agency)) {
      body["Agency"] = request.agency;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.queryId)) {
      body["QueryId"] = request.queryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSparkWarehouseBatchSQL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSparkWarehouseBatchSQLResponse>(await this.callApi(params, req, runtime), new $_model.GetSparkWarehouseBatchSQLResponse({}));
  }

  /**
   * Queries the execution result of a Spark SQL statement.
   * 
   * @param request - GetSparkWarehouseBatchSQLRequest
   * @returns GetSparkWarehouseBatchSQLResponse
   */
  async getSparkWarehouseBatchSQL(request: $_model.GetSparkWarehouseBatchSQLRequest): Promise<$_model.GetSparkWarehouseBatchSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSparkWarehouseBatchSQLWithOptions(request, runtime);
  }

  /**
   * 获取表
   * 
   * @param request - GetTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
  async getTableWithOptions(request: $_model.GetTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableResponse>(await this.callApi(params, req, runtime), new $_model.GetTableResponse({}));
  }

  /**
   * 获取表
   * 
   * @param request - GetTableRequest
   * @returns GetTableResponse
   */
  async getTable(request: $_model.GetTableRequest): Promise<$_model.GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableWithOptions(request, runtime);
  }

  /**
   * Queries the information about columns.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnsResponse
   */
  async getTableColumnsWithOptions(request: $_model.GetTableColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableColumns",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableColumnsResponse>(await this.callApi(params, req, runtime), new $_model.GetTableColumnsResponse({}));
  }

  /**
   * Queries the information about columns.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableColumnsRequest
   * @returns GetTableColumnsResponse
   */
  async getTableColumns(request: $_model.GetTableColumnsRequest): Promise<$_model.GetTableColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the statement that is used to create a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableDDLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableDDLResponse
   */
  async getTableDDLWithOptions(request: $_model.GetTableDDLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableDDLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableDDL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableDDLResponse>(await this.callApi(params, req, runtime), new $_model.GetTableDDLResponse({}));
  }

  /**
   * Queries the statement that is used to create a table.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetTableDDLRequest
   * @returns GetTableDDLResponse
   */
  async getTableDDL(request: $_model.GetTableDDLRequest): Promise<$_model.GetTableDDLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableDDLWithOptions(request, runtime);
  }

  /**
   * 获取table概要信息
   * 
   * @param request - GetTableObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableObjectsResponse
   */
  async getTableObjectsWithOptions(request: $_model.GetTableObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.filterDescription)) {
      query["FilterDescription"] = request.filterDescription;
    }

    if (!$dara.isNull(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!$dara.isNull(request.filterTblName)) {
      query["FilterTblName"] = request.filterTblName;
    }

    if (!$dara.isNull(request.filterTblType)) {
      query["FilterTblType"] = request.filterTblType;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableObjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetTableObjectsResponse({}));
  }

  /**
   * 获取table概要信息
   * 
   * @param request - GetTableObjectsRequest
   * @returns GetTableObjectsResponse
   */
  async getTableObjects(request: $_model.GetTableObjectsRequest): Promise<$_model.GetTableObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTableObjectsWithOptions(request, runtime);
  }

  /**
   * Queries the statement that is used to create a view.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewDDLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViewDDLResponse
   */
  async getViewDDLWithOptions(request: $_model.GetViewDDLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetViewDDLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetViewDDL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetViewDDLResponse>(await this.callApi(params, req, runtime), new $_model.GetViewDDLResponse({}));
  }

  /**
   * Queries the statement that is used to create a view.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewDDLRequest
   * @returns GetViewDDLResponse
   */
  async getViewDDL(request: $_model.GetViewDDLRequest): Promise<$_model.GetViewDDLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getViewDDLWithOptions(request, runtime);
  }

  /**
   * Queries the information about views.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewObjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetViewObjectsResponse
   */
  async getViewObjectsWithOptions(request: $_model.GetViewObjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetViewObjectsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.filterOwner)) {
      query["FilterOwner"] = request.filterOwner;
    }

    if (!$dara.isNull(request.filterViewName)) {
      query["FilterViewName"] = request.filterViewName;
    }

    if (!$dara.isNull(request.filterViewType)) {
      query["FilterViewType"] = request.filterViewType;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
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

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.showMvBaseTable)) {
      query["ShowMvBaseTable"] = request.showMvBaseTable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetViewObjects",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetViewObjectsResponse>(await this.callApi(params, req, runtime), new $_model.GetViewObjectsResponse({}));
  }

  /**
   * Queries the information about views.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * 
   * @param request - GetViewObjectsRequest
   * @returns GetViewObjectsResponse
   */
  async getViewObjects(request: $_model.GetViewObjectsRequest): Promise<$_model.GetViewObjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getViewObjectsWithOptions(request, runtime);
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermissionWithOptions(request: $_model.GrantOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privileges)) {
      query["Privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantOperatorPermission",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantOperatorPermissionResponse({}));
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermission(request: $_model.GrantOperatorPermissionRequest): Promise<$_model.GrantOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessResponse
   */
  async killProcessWithOptions(request: $_model.KillProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillProcessResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillProcess",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillProcessResponse>(await this.callApi(params, req, runtime), new $_model.KillProcessResponse({}));
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: $_model.KillProcessRequest): Promise<$_model.KillProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Terminates a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkAppResponse
   */
  async killSparkAppWithOptions(request: $_model.KillSparkAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillSparkAppResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillSparkApp",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillSparkAppResponse>(await this.callApi(params, req, runtime), new $_model.KillSparkAppResponse({}));
  }

  /**
   * Terminates a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkAppRequest
   * @returns KillSparkAppResponse
   */
  async killSparkApp(request: $_model.KillSparkAppRequest): Promise<$_model.KillSparkAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killSparkAppWithOptions(request, runtime);
  }

  /**
   * Terminates a Spark log analysis task and queries the information about the analysis task.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkLogAnalyzeTaskResponse
   */
  async killSparkLogAnalyzeTaskWithOptions(request: $_model.KillSparkLogAnalyzeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillSparkLogAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new $_model.KillSparkLogAnalyzeTaskResponse({}));
  }

  /**
   * Terminates a Spark log analysis task and queries the information about the analysis task.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkLogAnalyzeTaskRequest
   * @returns KillSparkLogAnalyzeTaskResponse
   */
  async killSparkLogAnalyzeTask(request: $_model.KillSparkLogAnalyzeTaskRequest): Promise<$_model.KillSparkLogAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Shuts down a Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillSparkSQLEngineResponse
   */
  async killSparkSQLEngineWithOptions(request: $_model.KillSparkSQLEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillSparkSQLEngineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillSparkSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillSparkSQLEngineResponse>(await this.callApi(params, req, runtime), new $_model.KillSparkSQLEngineResponse({}));
  }

  /**
   * Shuts down a Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - KillSparkSQLEngineRequest
   * @returns KillSparkSQLEngineResponse
   */
  async killSparkSQLEngine(request: $_model.KillSparkSQLEngineRequest): Promise<$_model.KillSparkSQLEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killSparkSQLEngineWithOptions(request, runtime);
  }

  /**
   * Queries a list of lifecycle management policies of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ListApsLifecycleStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApsLifecycleStrategyResponse
   */
  async listApsLifecycleStrategyWithOptions(request: $_model.ListApsLifecycleStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApsLifecycleStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApsLifecycleStrategy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApsLifecycleStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ListApsLifecycleStrategyResponse({}));
  }

  /**
   * Queries a list of lifecycle management policies of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ListApsLifecycleStrategyRequest
   * @returns ListApsLifecycleStrategyResponse
   */
  async listApsLifecycleStrategy(request: $_model.ListApsLifecycleStrategyRequest): Promise<$_model.ListApsLifecycleStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApsLifecycleStrategyWithOptions(request, runtime);
  }

  /**
   * Queries a list of lake storage optimization policies for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ListApsOptimizationStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApsOptimizationStrategyResponse
   */
  async listApsOptimizationStrategyWithOptions(request: $_model.ListApsOptimizationStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApsOptimizationStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApsOptimizationStrategy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApsOptimizationStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ListApsOptimizationStrategyResponse({}));
  }

  /**
   * Queries a list of lake storage optimization policies for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ListApsOptimizationStrategyRequest
   * @returns ListApsOptimizationStrategyResponse
   */
  async listApsOptimizationStrategy(request: $_model.ListApsOptimizationStrategyRequest): Promise<$_model.ListApsOptimizationStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApsOptimizationStrategyWithOptions(request, runtime);
  }

  /**
   * Queries a list of optimization jobs executed based on a lifecycle management policy. The system runs optimization jobs on a regular basis based on lifecycle management policies.
   * 
   * @param request - ListApsOptimizationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApsOptimizationTasksResponse
   */
  async listApsOptimizationTasksWithOptions(request: $_model.ListApsOptimizationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApsOptimizationTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApsOptimizationTasks",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApsOptimizationTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListApsOptimizationTasksResponse({}));
  }

  /**
   * Queries a list of optimization jobs executed based on a lifecycle management policy. The system runs optimization jobs on a regular basis based on lifecycle management policies.
   * 
   * @param request - ListApsOptimizationTasksRequest
   * @returns ListApsOptimizationTasksResponse
   */
  async listApsOptimizationTasks(request: $_model.ListApsOptimizationTasksRequest): Promise<$_model.ListApsOptimizationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApsOptimizationTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of lake storages.
   * 
   * @param request - ListLakeStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLakeStoragesResponse
   */
  async listLakeStoragesWithOptions(request: $_model.ListLakeStoragesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLakeStoragesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLakeStorages",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLakeStoragesResponse>(await this.callApi(params, req, runtime), new $_model.ListLakeStoragesResponse({}));
  }

  /**
   * Queries a list of lake storages.
   * 
   * @param request - ListLakeStoragesRequest
   * @returns ListLakeStoragesResponse
   */
  async listLakeStorages(request: $_model.ListLakeStoragesRequest): Promise<$_model.ListLakeStoragesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLakeStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the execution records of result set export jobs of a Resource Access Management (RAM) user.
   * 
   * @param tmpReq - ListResultExportJobHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResultExportJobHistoryResponse
   */
  async listResultExportJobHistoryWithOptions(tmpReq: $_model.ListResultExportJobHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResultExportJobHistoryResponse> {
    tmpReq.validate();
    let request = new $_model.ListResultExportJobHistoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.order)) {
      request.orderShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.order, "Order", "json");
    }

    if (!$dara.isNull(tmpReq.statusList)) {
      request.statusListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.statusList, "StatusList", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.databaseUser)) {
      body["DatabaseUser"] = request.databaseUser;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.orderShrink)) {
      body["Order"] = request.orderShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      body["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.statusListShrink)) {
      body["StatusList"] = request.statusListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResultExportJobHistory",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResultExportJobHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListResultExportJobHistoryResponse({}));
  }

  /**
   * Queries the execution records of result set export jobs of a Resource Access Management (RAM) user.
   * 
   * @param request - ListResultExportJobHistoryRequest
   * @returns ListResultExportJobHistoryResponse
   */
  async listResultExportJobHistory(request: $_model.ListResultExportJobHistoryRequest): Promise<$_model.ListResultExportJobHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResultExportJobHistoryWithOptions(request, runtime);
  }

  /**
   * Queries the information about retry attempts of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkAppAttemptsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkAppAttemptsResponse
   */
  async listSparkAppAttemptsWithOptions(request: $_model.ListSparkAppAttemptsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSparkAppAttemptsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSparkAppAttempts",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSparkAppAttemptsResponse>(await this.callApi(params, req, runtime), new $_model.ListSparkAppAttemptsResponse({}));
  }

  /**
   * Queries the information about retry attempts of a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkAppAttemptsRequest
   * @returns ListSparkAppAttemptsResponse
   */
  async listSparkAppAttempts(request: $_model.ListSparkAppAttemptsRequest): Promise<$_model.ListSparkAppAttemptsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSparkAppAttemptsWithOptions(request, runtime);
  }

  /**
   * Queries the Spark applications that run on an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - ListSparkAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkAppsResponse
   */
  async listSparkAppsWithOptions(request: $_model.ListSparkAppsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSparkAppsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.filters)) {
      query["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSparkApps",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSparkAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListSparkAppsResponse({}));
  }

  /**
   * Queries the Spark applications that run on an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @param request - ListSparkAppsRequest
   * @returns ListSparkAppsResponse
   */
  async listSparkApps(request: $_model.ListSparkAppsRequest): Promise<$_model.ListSparkAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSparkAppsWithOptions(request, runtime);
  }

  /**
   * Queries a list of Spark log analysis tasks.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkLogAnalyzeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkLogAnalyzeTasksResponse
   */
  async listSparkLogAnalyzeTasksWithOptions(request: $_model.ListSparkLogAnalyzeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSparkLogAnalyzeTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSparkLogAnalyzeTasks",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSparkLogAnalyzeTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSparkLogAnalyzeTasksResponse({}));
  }

  /**
   * Queries a list of Spark log analysis tasks.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkLogAnalyzeTasksRequest
   * @returns ListSparkLogAnalyzeTasksResponse
   */
  async listSparkLogAnalyzeTasks(request: $_model.ListSparkLogAnalyzeTasksRequest): Promise<$_model.ListSparkLogAnalyzeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSparkLogAnalyzeTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of Spark template file IDs for AnalyticDB for MySQL clusters.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkTemplateFileIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkTemplateFileIdsResponse
   */
  async listSparkTemplateFileIdsWithOptions(request: $_model.ListSparkTemplateFileIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSparkTemplateFileIdsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSparkTemplateFileIds",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSparkTemplateFileIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListSparkTemplateFileIdsResponse({}));
  }

  /**
   * Queries a list of Spark template file IDs for AnalyticDB for MySQL clusters.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - ListSparkTemplateFileIdsRequest
   * @returns ListSparkTemplateFileIdsResponse
   */
  async listSparkTemplateFileIds(request: $_model.ListSparkTemplateFileIdsRequest): Promise<$_model.ListSparkTemplateFileIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSparkTemplateFileIdsWithOptions(request, runtime);
  }

  /**
   * Queries a list of Spark SQL statements.
   * 
   * @param request - ListSparkWarehouseBatchSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSparkWarehouseBatchSQLResponse
   */
  async listSparkWarehouseBatchSQLWithOptions(request: $_model.ListSparkWarehouseBatchSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSparkWarehouseBatchSQLResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSparkWarehouseBatchSQL",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSparkWarehouseBatchSQLResponse>(await this.callApi(params, req, runtime), new $_model.ListSparkWarehouseBatchSQLResponse({}));
  }

  /**
   * Queries a list of Spark SQL statements.
   * 
   * @param request - ListSparkWarehouseBatchSQLRequest
   * @returns ListSparkWarehouseBatchSQLResponse
   */
  async listSparkWarehouseBatchSQL(request: $_model.ListSparkWarehouseBatchSQLRequest): Promise<$_model.ListSparkWarehouseBatchSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSparkWarehouseBatchSQLWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
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
      action: "ListTagResources",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Loads a built-in dataset.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - LoadSampleDataSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadSampleDataSetResponse
   */
  async loadSampleDataSetWithOptions(request: $_model.LoadSampleDataSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LoadSampleDataSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LoadSampleDataSet",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LoadSampleDataSetResponse>(await this.callApi(params, req, runtime), new $_model.LoadSampleDataSetResponse({}));
  }

  /**
   * Loads a built-in dataset.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - LoadSampleDataSetRequest
   * @returns LoadSampleDataSetResponse
   */
  async loadSampleDataSet(request: $_model.LoadSampleDataSetRequest): Promise<$_model.LoadSampleDataSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.loadSampleDataSetWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountDescriptionResponse({}));
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param tmpReq - ModifyAccountPrivilegesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegesResponse
   */
  async modifyAccountPrivilegesWithOptions(tmpReq: $_model.ModifyAccountPrivilegesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPrivilegesResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyAccountPrivilegesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountPrivileges)) {
      request.accountPrivilegesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountPrivileges, "AccountPrivileges", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPrivilegesShrink)) {
      query["AccountPrivileges"] = request.accountPrivilegesShrink;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPrivileges",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountPrivilegesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountPrivilegesResponse({}));
  }

  /**
   * Modifies the permissions of a database account.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAccountPrivilegesRequest
   * @returns ModifyAccountPrivilegesResponse
   */
  async modifyAccountPrivileges(request: $_model.ModifyAccountPrivilegesRequest): Promise<$_model.ModifyAccountPrivilegesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPrivilegesWithOptions(request, runtime);
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * ### [](#)
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   You cannot modify the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param tmpReq - ModifyApsDatasoureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApsDatasoureResponse
   */
  async modifyApsDatasoureWithOptions(tmpReq: $_model.ModifyApsDatasoureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApsDatasoureResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyApsDatasoureShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.kafkaInfo)) {
      request.kafkaInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kafkaInfo, "KafkaInfo", "json");
    }

    if (!$dara.isNull(tmpReq.lakehouseId)) {
      request.lakehouseIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lakehouseId, "LakehouseId", "json");
    }

    if (!$dara.isNull(tmpReq.polarDBMysqlInfo)) {
      request.polarDBMysqlInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.polarDBMysqlInfo, "PolarDBMysqlInfo", "json");
    }

    if (!$dara.isNull(tmpReq.rdsMysqlInfo)) {
      request.rdsMysqlInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rdsMysqlInfo, "RdsMysqlInfo", "json");
    }

    if (!$dara.isNull(tmpReq.slsInfo)) {
      request.slsInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.slsInfo, "SlsInfo", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.datasourceDescription)) {
      body["DatasourceDescription"] = request.datasourceDescription;
    }

    if (!$dara.isNull(request.datasourceId)) {
      body["DatasourceId"] = request.datasourceId;
    }

    if (!$dara.isNull(request.datasourceName)) {
      body["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.kafkaInfoShrink)) {
      body["KafkaInfo"] = request.kafkaInfoShrink;
    }

    if (!$dara.isNull(request.lakehouseIdShrink)) {
      body["LakehouseId"] = request.lakehouseIdShrink;
    }

    if (!$dara.isNull(request.polarDBMysqlInfoShrink)) {
      body["PolarDBMysqlInfo"] = request.polarDBMysqlInfoShrink;
    }

    if (!$dara.isNull(request.rdsMysqlInfoShrink)) {
      body["RdsMysqlInfo"] = request.rdsMysqlInfoShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.slsInfoShrink)) {
      body["SlsInfo"] = request.slsInfoShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApsDatasoure",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApsDatasoureResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApsDatasoureResponse({}));
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) data source.
   * 
   * @remarks
   * ### [](#)
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   You cannot modify the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param request - ModifyApsDatasoureRequest
   * @returns ModifyApsDatasoureResponse
   */
  async modifyApsDatasoure(request: $_model.ModifyApsDatasoureRequest): Promise<$_model.ModifyApsDatasoureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApsDatasoureWithOptions(request, runtime);
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyApsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApsJobResponse
   */
  async modifyApsJobWithOptions(request: $_model.ModifyApsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobId)) {
      body["ApsJobId"] = request.apsJobId;
    }

    if (!$dara.isNull(request.dbList)) {
      body["DbList"] = request.dbList;
    }

    if (!$dara.isNull(request.partitionList)) {
      body["PartitionList"] = request.partitionList;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApsJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApsJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApsJobResponse({}));
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) job.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyApsJobRequest
   * @returns ModifyApsJobResponse
   */
  async modifyApsJob(request: $_model.ModifyApsJobRequest): Promise<$_model.ModifyApsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApsJobWithOptions(request, runtime);
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) job from Simple Log Service (SLS) to an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @param tmpReq - ModifyApsSlsADBJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApsSlsADBJobResponse
   */
  async modifyApsSlsADBJobWithOptions(tmpReq: $_model.ModifyApsSlsADBJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApsSlsADBJobResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyApsSlsADBJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.columns)) {
      request.columnsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.columns, "Columns", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columnsShrink)) {
      body["Columns"] = request.columnsShrink;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.dbName)) {
      body["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dirtyDataProcessPattern)) {
      body["DirtyDataProcessPattern"] = request.dirtyDataProcessPattern;
    }

    if (!$dara.isNull(request.exactlyOnce)) {
      body["ExactlyOnce"] = request.exactlyOnce;
    }

    if (!$dara.isNull(request.password)) {
      body["Password"] = request.password;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startingOffsets)) {
      body["StartingOffsets"] = request.startingOffsets;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.unixTimestampConvert)) {
      body["UnixTimestampConvert"] = request.unixTimestampConvert;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    if (!$dara.isNull(request.workloadName)) {
      body["WorkloadName"] = request.workloadName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApsSlsADBJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApsSlsADBJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApsSlsADBJobResponse({}));
  }

  /**
   * Modifies an AnalyticDB Pipeline Service (APS) job from Simple Log Service (SLS) to an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @param request - ModifyApsSlsADBJobRequest
   * @returns ModifyApsSlsADBJobResponse
   */
  async modifyApsSlsADBJob(request: $_model.ModifyApsSlsADBJobRequest): Promise<$_model.ModifyApsSlsADBJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApsSlsADBJobWithOptions(request, runtime);
  }

  /**
   * Modifies the AnalyticDB Pipeline Service (APS) workload name.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyApsWorkloadNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApsWorkloadNameResponse
   */
  async modifyApsWorkloadNameWithOptions(request: $_model.ModifyApsWorkloadNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApsWorkloadNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workloadId)) {
      body["WorkloadId"] = request.workloadId;
    }

    if (!$dara.isNull(request.workloadName)) {
      body["WorkloadName"] = request.workloadName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApsWorkloadName",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApsWorkloadNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApsWorkloadNameResponse({}));
  }

  /**
   * Modifies the AnalyticDB Pipeline Service (APS) workload name.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyApsWorkloadNameRequest
   * @returns ModifyApsWorkloadNameResponse
   */
  async modifyApsWorkloadName(request: $_model.ModifyApsWorkloadNameRequest): Promise<$_model.ModifyApsWorkloadNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApsWorkloadNameWithOptions(request, runtime);
  }

  /**
   * Modifies the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfigWithOptions(request: $_model.ModifyAuditLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAuditLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditLogStatus)) {
      query["AuditLogStatus"] = request.auditLogStatus;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAuditLogConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAuditLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAuditLogConfigResponse({}));
  }

  /**
   * Modifies the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfig(request: $_model.ModifyAuditLogConfigRequest): Promise<$_model.ModifyAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the backup policy of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPolicyResponse({}));
  }

  /**
   * Modifies the backup policy of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Enables the wide table engine feature for an AnalyticDB for MySQL cluster or modifies the disk cache size of the wide table engine of an AnalyticDB for MySQL cluster for which you enabled the wide table engine feature.
   * 
   * @param request - ModifyClickhouseEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClickhouseEngineResponse
   */
  async modifyClickhouseEngineWithOptions(request: $_model.ModifyClickhouseEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClickhouseEngineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cacheSize)) {
      query["CacheSize"] = request.cacheSize;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enabled)) {
      query["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClickhouseEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClickhouseEngineResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClickhouseEngineResponse({}));
  }

  /**
   * Enables the wide table engine feature for an AnalyticDB for MySQL cluster or modifies the disk cache size of the wide table engine of an AnalyticDB for MySQL cluster for which you enabled the wide table engine feature.
   * 
   * @param request - ModifyClickhouseEngineRequest
   * @returns ModifyClickhouseEngineResponse
   */
  async modifyClickhouseEngine(request: $_model.ModifyClickhouseEngineRequest): Promise<$_model.ModifyClickhouseEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClickhouseEngineWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelist of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterAccessWhiteListResponse
   */
  async modifyClusterAccessWhiteListWithOptions(request: $_model.ModifyClusterAccessWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterAccessWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterIPArrayAttribute)) {
      query["DBClusterIPArrayAttribute"] = request.DBClusterIPArrayAttribute;
    }

    if (!$dara.isNull(request.DBClusterIPArrayName)) {
      query["DBClusterIPArrayName"] = request.DBClusterIPArrayName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterAccessWhiteList",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterAccessWhiteListResponse({}));
  }

  /**
   * Modifies the IP address whitelist of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyClusterAccessWhiteListRequest
   * @returns ModifyClusterAccessWhiteListResponse
   */
  async modifyClusterAccessWhiteList(request: $_model.ModifyClusterAccessWhiteListRequest): Promise<$_model.ModifyClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Modifies the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionStringWithOptions(request: $_model.ModifyClusterConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterConnectionString",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterConnectionStringResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterConnectionStringResponse({}));
  }

  /**
   * Modifies the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionString(request: $_model.ModifyClusterConnectionStringRequest): Promise<$_model.ModifyClusterConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  /**
   * Modifies the status of the remote build feature in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyCompactionServiceSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCompactionServiceSwitchResponse
   */
  async modifyCompactionServiceSwitchWithOptions(request: $_model.ModifyCompactionServiceSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCompactionServiceSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableCompactionService)) {
      query["EnableCompactionService"] = request.enableCompactionService;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCompactionServiceSwitch",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCompactionServiceSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCompactionServiceSwitchResponse({}));
  }

  /**
   * Modifies the status of the remote build feature in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyCompactionServiceSwitchRequest
   * @returns ModifyCompactionServiceSwitchResponse
   */
  async modifyCompactionServiceSwitch(request: $_model.ModifyCompactionServiceSwitchRequest): Promise<$_model.ModifyCompactionServiceSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCompactionServiceSwitchWithOptions(request, runtime);
  }

  /**
   * Changes the configurations of an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * ### [](#)
   * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous jobs. If your business requires asynchronous jobs, perform scaling during appropriate periods.
   * *   When you scale a cluster, data in the cluster is migrated for redistribution. The amount of time that is required to migrate data is proportional to the data volume. During a scaling event, the services provided by the cluster are not interrupted. When you downgrade cluster specifications, data migration may require up to dozens of hours to complete. Proceed with caution especially if your cluster contains a large amount of data.
   * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
   * *   When the scaling process is about to end, transient connections may occur. We recommend that you scale your cluster during off-peak hours or make sure that your application is configured to automatically reconnect to your cluster.
   * *   You can change an AnalyticDB for MySQL cluster from Data Warehouse Edition to Data Lakehouse Edition, but not the other way around. For more information, see Change a cluster from Data Warehouse Edition to Data Lakehouse Edition.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableDefaultResourcePool)) {
      query["EnableDefaultResourcePool"] = request.enableDefaultResourcePool;
    }

    if (!$dara.isNull(request.productForm)) {
      query["ProductForm"] = request.productForm;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.reservedNodeCount)) {
      query["ReservedNodeCount"] = request.reservedNodeCount;
    }

    if (!$dara.isNull(request.reservedNodeSize)) {
      query["ReservedNodeSize"] = request.reservedNodeSize;
    }

    if (!$dara.isNull(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBCluster",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterResponse({}));
  }

  /**
   * Changes the configurations of an AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * @remarks
   * ### [](#)
   * *   During a scaling event, you are not allowed to execute the `SUBMIT JOB` statement to submit asynchronous jobs. If your business requires asynchronous jobs, perform scaling during appropriate periods.
   * *   When you scale a cluster, data in the cluster is migrated for redistribution. The amount of time that is required to migrate data is proportional to the data volume. During a scaling event, the services provided by the cluster are not interrupted. When you downgrade cluster specifications, data migration may require up to dozens of hours to complete. Proceed with caution especially if your cluster contains a large amount of data.
   * *   If the cluster has a built-in dataset loaded, make sure that the cluster has reserved storage resources of at least 24 AnalyticDB compute units (ACUs). Otherwise, the built-in dataset cannot be used.
   * *   When the scaling process is about to end, transient connections may occur. We recommend that you scale your cluster during off-peak hours or make sure that your application is configured to automatically reconnect to your cluster.
   * *   You can change an AnalyticDB for MySQL cluster from Data Warehouse Edition to Data Lakehouse Edition, but not the other way around. For more information, see Change a cluster from Data Warehouse Edition to Data Lakehouse Edition.
   * *   For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an AnalyticDB for MySQL cluster to facilitate the maintenance and management of the cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescriptionWithOptions(request: $_model.ModifyDBClusterDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterDescription",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterDescriptionResponse({}));
  }

  /**
   * Modifies the description of an AnalyticDB for MySQL cluster to facilitate the maintenance and management of the cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: $_model.ModifyDBClusterDescriptionRequest): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTimeWithOptions(request: $_model.ModifyDBClusterMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterMaintainTime",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterMaintainTimeResponse({}));
  }

  /**
   * Modifies the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: $_model.ModifyDBClusterMaintainTimeRequest): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which an AnalyticDB for MySQL cluster belongs.
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroupWithOptions(request: $_model.ModifyDBClusterResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which an AnalyticDB for MySQL cluster belongs.
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroup(request: $_model.ModifyDBClusterResourceGroupRequest): Promise<$_model.ModifyDBClusterResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  /**
   * Changes the virtual IP address (VIP) that is used to connect to an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterVipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterVipResponse
   */
  async modifyDBClusterVipWithOptions(request: $_model.ModifyDBClusterVipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterVipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectString)) {
      query["ConnectString"] = request.connectString;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterVip",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterVipResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterVipResponse({}));
  }

  /**
   * Changes the virtual IP address (VIP) that is used to connect to an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterVipRequest
   * @returns ModifyDBClusterVipResponse
   */
  async modifyDBClusterVip(request: $_model.ModifyDBClusterVipRequest): Promise<$_model.ModifyDBClusterVipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterVipWithOptions(request, runtime);
  }

  /**
   * Modifies the amount of reserved computing resources for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param tmpReq - ModifyDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroupWithOptions(tmpReq: $_model.ModifyDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.engineParams)) {
      request.engineParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.engineParams, "EngineParams", "json");
    }

    if (!$dara.isNull(tmpReq.rayConfig)) {
      request.rayConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rayConfig, "RayConfig", "json");
    }

    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoStopInterval)) {
      query["AutoStopInterval"] = request.autoStopInterval;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableSpot)) {
      query["EnableSpot"] = request.enableSpot;
    }

    if (!$dara.isNull(request.engineParamsShrink)) {
      query["EngineParams"] = request.engineParamsShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!$dara.isNull(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!$dara.isNull(request.maxGpuQuantity)) {
      query["MaxGpuQuantity"] = request.maxGpuQuantity;
    }

    if (!$dara.isNull(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!$dara.isNull(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!$dara.isNull(request.minGpuQuantity)) {
      query["MinGpuQuantity"] = request.minGpuQuantity;
    }

    if (!$dara.isNull(request.rayConfigShrink)) {
      query["RayConfig"] = request.rayConfigShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    if (!$dara.isNull(request.specName)) {
      query["SpecName"] = request.specName;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.targetResourceGroupName)) {
      query["TargetResourceGroupName"] = request.targetResourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBResourceGroup",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBResourceGroupResponse({}));
  }

  /**
   * Modifies the amount of reserved computing resources for an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ModifyDBResourceGroupRequest
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroup(request: $_model.ModifyDBResourceGroupRequest): Promise<$_model.ModifyDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlanWithOptions(request: $_model.ModifyElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cronExpression)) {
      query["CronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.targetSize)) {
      query["TargetSize"] = request.targetSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticPlan",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticPlanResponse({}));
  }

  /**
   * Modifies a scaling plan for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see Endpoints.
   * 
   * @param request - ModifyElasticPlanRequest
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlan(request: $_model.ModifyElasticPlanRequest): Promise<$_model.ModifyElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  /**
   * Modifies the disk cache size in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyEssdCacheConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyEssdCacheConfigResponse
   */
  async modifyEssdCacheConfigWithOptions(request: $_model.ModifyEssdCacheConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyEssdCacheConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableEssdCache)) {
      query["EnableEssdCache"] = request.enableEssdCache;
    }

    if (!$dara.isNull(request.essdCacheSize)) {
      query["EssdCacheSize"] = request.essdCacheSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyEssdCacheConfig",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyEssdCacheConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyEssdCacheConfigResponse({}));
  }

  /**
   * Modifies the disk cache size in the query acceleration configuration of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyEssdCacheConfigRequest
   * @returns ModifyEssdCacheConfigResponse
   */
  async modifyEssdCacheConfig(request: $_model.ModifyEssdCacheConfigRequest): Promise<$_model.ModifyEssdCacheConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyEssdCacheConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the lake cache size of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLakeCacheSizeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLakeCacheSizeResponse
   */
  async modifyLakeCacheSizeWithOptions(request: $_model.ModifyLakeCacheSizeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLakeCacheSizeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.capacity)) {
      query["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableLakeCache)) {
      query["EnableLakeCache"] = request.enableLakeCache;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLakeCacheSize",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLakeCacheSizeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLakeCacheSizeResponse({}));
  }

  /**
   * Modifies the lake cache size of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLakeCacheSizeRequest
   * @returns ModifyLakeCacheSizeResponse
   */
  async modifyLakeCacheSize(request: $_model.ModifyLakeCacheSizeRequest): Promise<$_model.ModifyLakeCacheSizeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLakeCacheSizeWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a custom monitoring view.
   * 
   * @param tmpReq - ModifyPerformanceViewRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPerformanceViewResponse
   */
  async modifyPerformanceViewWithOptions(tmpReq: $_model.ModifyPerformanceViewRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPerformanceViewResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyPerformanceViewShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.viewDetail)) {
      request.viewDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.viewDetail, "ViewDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.viewDetailShrink)) {
      query["ViewDetail"] = request.viewDetailShrink;
    }

    if (!$dara.isNull(request.viewName)) {
      query["ViewName"] = request.viewName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPerformanceView",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPerformanceViewResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPerformanceViewResponse({}));
  }

  /**
   * Modifies the information about a custom monitoring view.
   * 
   * @param request - ModifyPerformanceViewRequest
   * @returns ModifyPerformanceViewResponse
   */
  async modifyPerformanceView(request: $_model.ModifyPerformanceViewRequest): Promise<$_model.ModifyPerformanceViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPerformanceViewWithOptions(request, runtime);
  }

  /**
   * Modifies the vSwitches that are connected to elastic network interfaces (ENIs).
   * 
   * @param request - ModifyUserEniVswitchOptionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyUserEniVswitchOptionsResponse
   */
  async modifyUserEniVswitchOptionsWithOptions(request: $_model.ModifyUserEniVswitchOptionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyUserEniVswitchOptionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vSwitchOptions)) {
      body["VSwitchOptions"] = request.vSwitchOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyUserEniVswitchOptions",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyUserEniVswitchOptionsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyUserEniVswitchOptionsResponse({}));
  }

  /**
   * Modifies the vSwitches that are connected to elastic network interfaces (ENIs).
   * 
   * @param request - ModifyUserEniVswitchOptionsRequest
   * @returns ModifyUserEniVswitchOptionsResponse
   */
  async modifyUserEniVswitchOptions(request: $_model.ModifyUserEniVswitchOptionsRequest): Promise<$_model.ModifyUserEniVswitchOptionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyUserEniVswitchOptionsWithOptions(request, runtime);
  }

  /**
   * Preloads metrics for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - PreloadSparkAppMetricsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreloadSparkAppMetricsResponse
   */
  async preloadSparkAppMetricsWithOptions(request: $_model.PreloadSparkAppMetricsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PreloadSparkAppMetricsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PreloadSparkAppMetrics",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreloadSparkAppMetricsResponse>(await this.callApi(params, req, runtime), new $_model.PreloadSparkAppMetricsResponse({}));
  }

  /**
   * Preloads metrics for a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - PreloadSparkAppMetricsRequest
   * @returns PreloadSparkAppMetricsResponse
   */
  async preloadSparkAppMetrics(request: $_model.PreloadSparkAppMetricsRequest): Promise<$_model.PreloadSparkAppMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.preloadSparkAppMetricsWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnectionWithOptions(request: $_model.ReleaseClusterPublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseClusterPublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseClusterPublicConnection",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseClusterPublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: $_model.ReleaseClusterPublicConnectionRequest): Promise<$_model.ReleaseClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Revokes permissions from the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermissionWithOptions(request: $_model.RevokeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeOperatorPermission",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeOperatorPermissionResponse({}));
  }

  /**
   * Revokes permissions from the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermission(request: $_model.RevokeOperatorPermissionRequest): Promise<$_model.RevokeOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Modifies the Spark log configuration.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SetSparkAppLogRootPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSparkAppLogRootPathResponse
   */
  async setSparkAppLogRootPathWithOptions(request: $_model.SetSparkAppLogRootPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSparkAppLogRootPathResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ossLogPath)) {
      body["OssLogPath"] = request.ossLogPath;
    }

    if (!$dara.isNull(request.useDefaultOss)) {
      body["UseDefaultOss"] = request.useDefaultOss;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSparkAppLogRootPath",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSparkAppLogRootPathResponse>(await this.callApi(params, req, runtime), new $_model.SetSparkAppLogRootPathResponse({}));
  }

  /**
   * Modifies the Spark log configuration.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SetSparkAppLogRootPathRequest
   * @returns SetSparkAppLogRootPathResponse
   */
  async setSparkAppLogRootPath(request: $_model.SetSparkAppLogRootPathRequest): Promise<$_model.SetSparkAppLogRootPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSparkAppLogRootPathWithOptions(request, runtime);
  }

  /**
   * Starts an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - StartApsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartApsJobResponse
   */
  async startApsJobWithOptions(request: $_model.StartApsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartApsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobId)) {
      body["ApsJobId"] = request.apsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartApsJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartApsJobResponse>(await this.callApi(params, req, runtime), new $_model.StartApsJobResponse({}));
  }

  /**
   * Starts an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - StartApsJobRequest
   * @returns StartApsJobResponse
   */
  async startApsJob(request: $_model.StartApsJobRequest): Promise<$_model.StartApsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startApsJobWithOptions(request, runtime);
  }

  /**
   * Starts a Spark session.
   * 
   * @param request - StartSparkReplSessionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSparkReplSessionResponse
   */
  async startSparkReplSessionWithOptions(request: $_model.StartSparkReplSessionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSparkReplSessionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSparkReplSession",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSparkReplSessionResponse>(await this.callApi(params, req, runtime), new $_model.StartSparkReplSessionResponse({}));
  }

  /**
   * Starts a Spark session.
   * 
   * @param request - StartSparkReplSessionRequest
   * @returns StartSparkReplSessionResponse
   */
  async startSparkReplSession(request: $_model.StartSparkReplSessionRequest): Promise<$_model.StartSparkReplSessionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSparkReplSessionWithOptions(request, runtime);
  }

  /**
   * Starts the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @deprecated OpenAPI StartSparkSQLEngine is deprecated
   * 
   * @param request - StartSparkSQLEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSparkSQLEngineResponse
   */
  // Deprecated
  async startSparkSQLEngineWithOptions(request: $_model.StartSparkSQLEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartSparkSQLEngineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.jars)) {
      body["Jars"] = request.jars;
    }

    if (!$dara.isNull(request.maxExecutor)) {
      body["MaxExecutor"] = request.maxExecutor;
    }

    if (!$dara.isNull(request.minExecutor)) {
      body["MinExecutor"] = request.minExecutor;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.slotNum)) {
      body["SlotNum"] = request.slotNum;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSparkSQLEngine",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSparkSQLEngineResponse>(await this.callApi(params, req, runtime), new $_model.StartSparkSQLEngineResponse({}));
  }

  /**
   * Starts the Spark SQL engine.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @deprecated OpenAPI StartSparkSQLEngine is deprecated
   * 
   * @param request - StartSparkSQLEngineRequest
   * @returns StartSparkSQLEngineResponse
   */
  // Deprecated
  async startSparkSQLEngine(request: $_model.StartSparkSQLEngineRequest): Promise<$_model.StartSparkSQLEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startSparkSQLEngineWithOptions(request, runtime);
  }

  /**
   * Submits an SQL query and exports a result set.
   * 
   * @param request - SubmitResultExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitResultExportJobResponse
   */
  async submitResultExportJobWithOptions(request: $_model.SubmitResultExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitResultExportJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      body["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      body["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.SQL)) {
      body["SQL"] = request.SQL;
    }

    if (!$dara.isNull(request.schema)) {
      body["Schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitResultExportJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitResultExportJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitResultExportJobResponse({}));
  }

  /**
   * Submits an SQL query and exports a result set.
   * 
   * @param request - SubmitResultExportJobRequest
   * @returns SubmitResultExportJobResponse
   */
  async submitResultExportJob(request: $_model.SubmitResultExportJobRequest): Promise<$_model.SubmitResultExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitResultExportJobWithOptions(request, runtime);
  }

  /**
   * Submits a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkAppRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkAppResponse
   */
  async submitSparkAppWithOptions(request: $_model.SubmitSparkAppRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSparkAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentSource)) {
      body["AgentSource"] = request.agentSource;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["AgentVersion"] = request.agentVersion;
    }

    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.templateFileId)) {
      body["TemplateFileId"] = request.templateFileId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSparkApp",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSparkAppResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSparkAppResponse({}));
  }

  /**
   * Submits a Spark application.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkAppRequest
   * @returns SubmitSparkAppResponse
   */
  async submitSparkApp(request: $_model.SubmitSparkAppRequest): Promise<$_model.SubmitSparkAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSparkAppWithOptions(request, runtime);
  }

  /**
   * Submits a Spark log analysis task and queries the analysis results.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkLogAnalyzeTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSparkLogAnalyzeTaskResponse
   */
  async submitSparkLogAnalyzeTaskWithOptions(request: $_model.SubmitSparkLogAnalyzeTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSparkLogAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSparkLogAnalyzeTask",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSparkLogAnalyzeTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSparkLogAnalyzeTaskResponse({}));
  }

  /**
   * Submits a Spark log analysis task and queries the analysis results.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - SubmitSparkLogAnalyzeTaskRequest
   * @returns SubmitSparkLogAnalyzeTaskResponse
   */
  async submitSparkLogAnalyzeTask(request: $_model.SubmitSparkLogAnalyzeTaskRequest): Promise<$_model.SubmitSparkLogAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSparkLogAnalyzeTaskWithOptions(request, runtime);
  }

  /**
   * Suspends an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - SuspendApsJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendApsJobResponse
   */
  async suspendApsJobWithOptions(request: $_model.SuspendApsJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendApsJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apsJobId)) {
      body["ApsJobId"] = request.apsJobId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendApsJob",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendApsJobResponse>(await this.callApi(params, req, runtime), new $_model.SuspendApsJobResponse({}));
  }

  /**
   * Suspends an AnalyticDB Pipeline Service (APS) job.
   * 
   * @param request - SuspendApsJobRequest
   * @returns SuspendApsJobResponse
   */
  async suspendApsJob(request: $_model.SuspendApsJobRequest): Promise<$_model.SuspendApsJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendApsJobWithOptions(request, runtime);
  }

  /**
   * Disassociates a standard account of an AnalyticDB for MySQL cluster from a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindAccountResponse
   */
  async unbindAccountWithOptions(request: $_model.UnbindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindAccount",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindAccountResponse>(await this.callApi(params, req, runtime), new $_model.UnbindAccountResponse({}));
  }

  /**
   * Disassociates a standard account of an AnalyticDB for MySQL cluster from a Resource Access Management (RAM) user.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindAccountRequest
   * @returns UnbindAccountResponse
   */
  async unbindAccount(request: $_model.UnbindAccountRequest): Promise<$_model.UnbindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindAccountWithOptions(request, runtime);
  }

  /**
   * Disassociates resource groups from database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUserWithOptions(request: $_model.UnbindDBResourceGroupWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDBResourceGroupWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDBResourceGroupWithUser",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Disassociates resource groups from database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUser(request: $_model.UnbindDBResourceGroupWithUserRequest): Promise<$_model.UnbindDBResourceGroupWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Updates a lake storage.
   * 
   * @param tmpReq - UpdateLakeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLakeStorageResponse
   */
  async updateLakeStorageWithOptions(tmpReq: $_model.UpdateLakeStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLakeStorageResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateLakeStorageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.permissions)) {
      request.permissionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permissions, "Permissions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.lakeStorageId)) {
      body["LakeStorageId"] = request.lakeStorageId;
    }

    if (!$dara.isNull(request.permissionsShrink)) {
      body["Permissions"] = request.permissionsShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLakeStorage",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLakeStorageResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLakeStorageResponse({}));
  }

  /**
   * Updates a lake storage.
   * 
   * @param request - UpdateLakeStorageRequest
   * @returns UpdateLakeStorageResponse
   */
  async updateLakeStorage(request: $_model.UpdateLakeStorageRequest): Promise<$_model.UpdateLakeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateLakeStorageWithOptions(request, runtime);
  }

  /**
   * Updates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - UpdateSparkTemplateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSparkTemplateFileResponse
   */
  async updateSparkTemplateFileWithOptions(request: $_model.UpdateSparkTemplateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSparkTemplateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      body["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      body["ResourceGroupName"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSparkTemplateFile",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSparkTemplateFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSparkTemplateFileResponse({}));
  }

  /**
   * Updates a Spark application template.
   * 
   * @remarks
   *   Regional public endpoint: `adb.<region-id>.aliyuncs.com`. Example: `adb.cn-hangzhou.aliyuncs.com`.
   * *   Regional Virtual Private Cloud (VPC) endpoint: `adb-vpc.<region-id>.aliyuncs.com`. Example: `adb-vpc.cn-hangzhou.aliyuncs.com`.
   * >  If HTTP status code 409 is returned when you call this operation in the China (Qingdao), China (Shenzhen), China (Guangzhou), or China (Hong Kong) region, contact technical support.
   * 
   * @param request - UpdateSparkTemplateFileRequest
   * @returns UpdateSparkTemplateFileResponse
   */
  async updateSparkTemplateFile(request: $_model.UpdateSparkTemplateFileRequest): Promise<$_model.UpdateSparkTemplateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSparkTemplateFileWithOptions(request, runtime);
  }

  /**
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersionWithOptions(request: $_model.UpgradeKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeKernelVersion",
      version: "2021-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeKernelVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeKernelVersionResponse({}));
  }

  /**
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersion(request: $_model.UpgradeKernelVersionRequest): Promise<$_model.UpgradeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeKernelVersionWithOptions(request, runtime);
  }

}
