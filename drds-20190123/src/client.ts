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
      'ap-northeast-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2-pop': "drds.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "drds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "drds.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "drds.aliyuncs.com",
      'cn-beijing-finance-pop': "drds.aliyuncs.com",
      'cn-beijing-gov-1': "drds.aliyuncs.com",
      'cn-beijing-nu16-b01': "drds.aliyuncs.com",
      'cn-chengdu': "drds.aliyuncs.com",
      'cn-edge-1': "drds.aliyuncs.com",
      'cn-fujian': "drds.aliyuncs.com",
      'cn-haidian-cm12-c01': "drds.aliyuncs.com",
      'cn-hangzhou-bj-b01': "drds.aliyuncs.com",
      'cn-hangzhou-finance': "drds.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "drds.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "drds.aliyuncs.com",
      'cn-hangzhou-test-306': "drds.aliyuncs.com",
      'cn-hongkong-finance-pop': "drds.aliyuncs.com",
      'cn-qingdao-nebula': "drds.aliyuncs.com",
      'cn-shanghai-et15-b01': "drds.aliyuncs.com",
      'cn-shanghai-et2-b01': "drds.aliyuncs.com",
      'cn-shanghai-inner': "drds.aliyuncs.com",
      'cn-shanghai-internal-test-1': "drds.aliyuncs.com",
      'cn-shenzhen-inner': "drds.aliyuncs.com",
      'cn-shenzhen-st4-d01': "drds.aliyuncs.com",
      'cn-shenzhen-su18-b01': "drds.aliyuncs.com",
      'cn-wuhan': "drds.aliyuncs.com",
      'cn-yushanfang': "drds.aliyuncs.com",
      'cn-zhangbei-na61-b01': "drds.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "drds.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "drds.aliyuncs.com",
      'eu-central-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "drds.ap-southeast-1.aliyuncs.com",
      'eu-west-1-oxs': "drds.ap-southeast-1.aliyuncs.com",
      'me-east-1': "drds.ap-southeast-1.aliyuncs.com",
      'rus-west-1-pop': "drds.ap-southeast-1.aliyuncs.com",
      'us-west-1': "drds.ap-southeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("drds", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - ChangeAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAccountPasswordResponse
   */
  async changeAccountPasswordWithOptions(request: $_model.ChangeAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAccountPassword",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAccountPasswordResponse({}));
  }

  /**
   * @param request - ChangeAccountPasswordRequest
   * @returns ChangeAccountPasswordResponse
   */
  async changeAccountPassword(request: $_model.ChangeAccountPasswordRequest): Promise<$_model.ChangeAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAccountPasswordWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeInstanceAzoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeInstanceAzoneResponse
   */
  async changeInstanceAzoneWithOptions(request: $_model.ChangeInstanceAzoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeInstanceAzoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.changeVSwitch)) {
      query["ChangeVSwitch"] = request.changeVSwitch;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.drdsRegionId)) {
      query["DrdsRegionId"] = request.drdsRegionId;
    }

    if (!$dara.isNull(request.newVSwitch)) {
      query["NewVSwitch"] = request.newVSwitch;
    }

    if (!$dara.isNull(request.originAzoneId)) {
      query["OriginAzoneId"] = request.originAzoneId;
    }

    if (!$dara.isNull(request.targetAzoneId)) {
      query["TargetAzoneId"] = request.targetAzoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeInstanceAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeInstanceAzoneResponse>(await this.callApi(params, req, runtime), new $_model.ChangeInstanceAzoneResponse({}));
  }

  /**
   * @param request - ChangeInstanceAzoneRequest
   * @returns ChangeInstanceAzoneResponse
   */
  async changeInstanceAzone(request: $_model.ChangeInstanceAzoneRequest): Promise<$_model.ChangeInstanceAzoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeInstanceAzoneWithOptions(request, runtime);
  }

  /**
   * @param request - CheckDrdsDbNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDrdsDbNameResponse
   */
  async checkDrdsDbNameWithOptions(request: $_model.CheckDrdsDbNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDrdsDbNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDrdsDbName",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDrdsDbNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckDrdsDbNameResponse({}));
  }

  /**
   * @param request - CheckDrdsDbNameRequest
   * @returns CheckDrdsDbNameResponse
   */
  async checkDrdsDbName(request: $_model.CheckDrdsDbNameRequest): Promise<$_model.CheckDrdsDbNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDrdsDbNameWithOptions(request, runtime);
  }

  /**
   * Verifies whether scale-out operations such as smooth scale-out can be performed on a PolarDB-X database.
   * 
   * @param request - CheckExpandStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckExpandStatusResponse
   */
  async checkExpandStatusWithOptions(request: $_model.CheckExpandStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckExpandStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckExpandStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckExpandStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckExpandStatusResponse({}));
  }

  /**
   * Verifies whether scale-out operations such as smooth scale-out can be performed on a PolarDB-X database.
   * 
   * @param request - CheckExpandStatusRequest
   * @returns CheckExpandStatusResponse
   */
  async checkExpandStatus(request: $_model.CheckExpandStatusRequest): Promise<$_model.CheckExpandStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkExpandStatusWithOptions(request, runtime);
  }

  /**
   * Checks whether the SQL audit feature is enabled for the logical database of a PolarDB-X 1.0 instance.
   * 
   * @param request - CheckSqlAuditEnableStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSqlAuditEnableStatusResponse
   */
  async checkSqlAuditEnableStatusWithOptions(request: $_model.CheckSqlAuditEnableStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSqlAuditEnableStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSqlAuditEnableStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSqlAuditEnableStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckSqlAuditEnableStatusResponse({}));
  }

  /**
   * Checks whether the SQL audit feature is enabled for the logical database of a PolarDB-X 1.0 instance.
   * 
   * @param request - CheckSqlAuditEnableStatusRequest
   * @returns CheckSqlAuditEnableStatusResponse
   */
  async checkSqlAuditEnableStatus(request: $_model.CheckSqlAuditEnableStatusRequest): Promise<$_model.CheckSqlAuditEnableStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSqlAuditEnableStatusWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDrdsDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDrdsDBResponse
   */
  async createDrdsDBWithOptions(request: $_model.CreateDrdsDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDrdsDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbInstanceIsCreating)) {
      query["DbInstanceIsCreating"] = request.dbInstanceIsCreating;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.encode)) {
      query["Encode"] = request.encode;
    }

    if (!$dara.isNull(request.instDbName)) {
      query["InstDbName"] = request.instDbName;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    if (!$dara.isNull(request.rdsSuperAccount)) {
      query["RdsSuperAccount"] = request.rdsSuperAccount;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDrdsDBResponse>(await this.callApi(params, req, runtime), new $_model.CreateDrdsDBResponse({}));
  }

  /**
   * @param request - CreateDrdsDBRequest
   * @returns CreateDrdsDBResponse
   */
  async createDrdsDB(request: $_model.CreateDrdsDBRequest): Promise<$_model.CreateDrdsDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDrdsDBWithOptions(request, runtime);
  }

  /**
   * @param request - CreateDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDrdsInstanceResponse
   */
  async createDrdsInstanceWithOptions(request: $_model.CreateDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.instanceSeries)) {
      query["InstanceSeries"] = request.instanceSeries;
    }

    if (!$dara.isNull(request.isAutoRenew)) {
      query["IsAutoRenew"] = request.isAutoRenew;
    }

    if (!$dara.isNull(request.masterInstId)) {
      query["MasterInstId"] = request.masterInstId;
    }

    if (!$dara.isNull(request.mySQLVersion)) {
      query["MySQLVersion"] = request.mySQLVersion;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.pricingCycle)) {
      query["PricingCycle"] = request.pricingCycle;
    }

    if (!$dara.isNull(request.quantity)) {
      query["Quantity"] = request.quantity;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.specification)) {
      query["Specification"] = request.specification;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.isHa)) {
      query["isHa"] = request.isHa;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDrdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDrdsInstanceResponse({}));
  }

  /**
   * @param request - CreateDrdsInstanceRequest
   * @returns CreateDrdsInstanceResponse
   */
  async createDrdsInstance(request: $_model.CreateDrdsInstanceRequest): Promise<$_model.CreateDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccountWithOptions(request: $_model.CreateInstanceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceAccountResponse({}));
  }

  /**
   * @param request - CreateInstanceAccountRequest
   * @returns CreateInstanceAccountResponse
   */
  async createInstanceAccount(request: $_model.CreateInstanceAccountRequest): Promise<$_model.CreateInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceAccountWithOptions(request, runtime);
  }

  /**
   * @param request - CreateInstanceInternetAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceInternetAddressResponse
   */
  async createInstanceInternetAddressWithOptions(request: $_model.CreateInstanceInternetAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceInternetAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceInternetAddressResponse({}));
  }

  /**
   * @param request - CreateInstanceInternetAddressRequest
   * @returns CreateInstanceInternetAddressResponse
   */
  async createInstanceInternetAddress(request: $_model.CreateInstanceInternetAddressRequest): Promise<$_model.CreateInstanceInternetAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceInternetAddressWithOptions(request, runtime);
  }

  /**
   * Creates an order to purchase an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
   * 
   * @param request - CreateOrderForRdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderForRdsResponse
   */
  async createOrderForRdsWithOptions(request: $_model.CreateOrderForRdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderForRdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrderForRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderForRdsResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderForRdsResponse({}));
  }

  /**
   * Creates an order to purchase an ApsaraDB RDS for MySQL instance.
   * 
   * @remarks
   * Before you call this operation, make sure that you understand the billing methods and pricing of PolarDB-X 1.0. For more information, visit the [pricing page](https://www.aliyun.com/price/product#/rds/detail).
   * 
   * @param request - CreateOrderForRdsRequest
   * @returns CreateOrderForRdsResponse
   */
  async createOrderForRds(request: $_model.CreateOrderForRdsRequest): Promise<$_model.CreateOrderForRdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderForRdsWithOptions(request, runtime);
  }

  /**
   * @param request - CreateShardTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateShardTaskResponse
   */
  async createShardTaskWithOptions(request: $_model.CreateShardTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateShardTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateShardTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateShardTaskResponse({}));
  }

  /**
   * @param request - CreateShardTaskRequest
   * @returns CreateShardTaskResponse
   */
  async createShardTask(request: $_model.CreateShardTaskRequest): Promise<$_model.CreateShardTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createShardTaskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackMenuRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackMenuResponse
   */
  async describeBackMenuWithOptions(request: $_model.DescribeBackMenuRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackMenuResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackMenu",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackMenuResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackMenuResponse({}));
  }

  /**
   * @param request - DescribeBackMenuRequest
   * @returns DescribeBackMenuResponse
   */
  async describeBackMenu(request: $_model.DescribeBackMenuRequest): Promise<$_model.DescribeBackMenuResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackMenuWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupDbsResponse
   */
  async describeBackupDbsWithOptions(request: $_model.DescribeBackupDbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredRestoreTime)) {
      query["PreferredRestoreTime"] = request.preferredRestoreTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupDbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupDbsResponse({}));
  }

  /**
   * @param request - DescribeBackupDbsRequest
   * @returns DescribeBackupDbsResponse
   */
  async describeBackupDbs(request: $_model.DescribeBackupDbsRequest): Promise<$_model.DescribeBackupDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupDbsWithOptions(request, runtime);
  }

  /**
   * Queries the backup settings of local logs.
   * 
   * @param request - DescribeBackupLocalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupLocalResponse
   */
  async describeBackupLocalWithOptions(request: $_model.DescribeBackupLocalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupLocalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupLocalResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupLocalResponse({}));
  }

  /**
   * Queries the backup settings of local logs.
   * 
   * @param request - DescribeBackupLocalRequest
   * @returns DescribeBackupLocalResponse
   */
  async describeBackupLocal(request: $_model.DescribeBackupLocalRequest): Promise<$_model.DescribeBackupLocalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupLocalWithOptions(request, runtime);
  }

  /**
   * Queries the information about a backup policy.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2019-01-23",
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
   * Queries the information about a backup policy.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupSetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupSetsResponse
   */
  async describeBackupSetsWithOptions(request: $_model.DescribeBackupSetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupSetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeBackupSets",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupSetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupSetsResponse({}));
  }

  /**
   * @param request - DescribeBackupSetsRequest
   * @returns DescribeBackupSetsResponse
   */
  async describeBackupSets(request: $_model.DescribeBackupSetsRequest): Promise<$_model.DescribeBackupSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupSetsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBackupTimesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTimesResponse
   */
  async describeBackupTimesWithOptions(request: $_model.DescribeBackupTimesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTimesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupTimes",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupTimesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupTimesResponse({}));
  }

  /**
   * @param request - DescribeBackupTimesRequest
   * @returns DescribeBackupTimesResponse
   */
  async describeBackupTimes(request: $_model.DescribeBackupTimesRequest): Promise<$_model.DescribeBackupTimesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTimesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeBroadcastTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBroadcastTablesResponse
   */
  async describeBroadcastTablesWithOptions(request: $_model.DescribeBroadcastTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBroadcastTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBroadcastTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBroadcastTablesResponse({}));
  }

  /**
   * @param request - DescribeBroadcastTablesRequest
   * @returns DescribeBroadcastTablesResponse
   */
  async describeBroadcastTables(request: $_model.DescribeBroadcastTablesRequest): Promise<$_model.DescribeBroadcastTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBroadcastTablesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDbInstanceDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbInstanceDbsResponse
   */
  async describeDbInstanceDbsWithOptions(request: $_model.DescribeDbInstanceDbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDbInstanceDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbInstanceDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDbInstanceDbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDbInstanceDbsResponse({}));
  }

  /**
   * @param request - DescribeDbInstanceDbsRequest
   * @returns DescribeDbInstanceDbsResponse
   */
  async describeDbInstanceDbs(request: $_model.DescribeDbInstanceDbsRequest): Promise<$_model.DescribeDbInstanceDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstanceDbsWithOptions(request, runtime);
  }

  /**
   * Queries DescribeDbInstances of the storage layer, such as RDS or PolarDB.
   * 
   * @param request - DescribeDbInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDbInstancesResponse
   */
  async describeDbInstancesWithOptions(request: $_model.DescribeDbInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDbInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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

    if (!$dara.isNull(request.search)) {
      query["Search"] = request.search;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDbInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDbInstancesResponse({}));
  }

  /**
   * Queries DescribeDbInstances of the storage layer, such as RDS or PolarDB.
   * 
   * @param request - DescribeDbInstancesRequest
   * @returns DescribeDbInstancesResponse
   */
  async describeDbInstances(request: $_model.DescribeDbInstancesRequest): Promise<$_model.DescribeDbInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDbInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBResponse
   */
  async describeDrdsDBWithOptions(request: $_model.DescribeDrdsDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDBResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDB",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDBResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDBResponse({}));
  }

  /**
   * @param request - DescribeDrdsDBRequest
   * @returns DescribeDrdsDBResponse
   */
  async describeDrdsDB(request: $_model.DescribeDrdsDBRequest): Promise<$_model.DescribeDrdsDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBWithOptions(request, runtime);
  }

  /**
   * You can call this operation to query the information of the PolarDB cluster in the DRDS logical database.
   * 
   * @param request - DescribeDrdsDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBClusterResponse
   */
  async describeDrdsDBClusterWithOptions(request: $_model.DescribeDrdsDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDBCluster",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDBClusterResponse({}));
  }

  /**
   * You can call this operation to query the information of the PolarDB cluster in the DRDS logical database.
   * 
   * @param request - DescribeDrdsDBClusterRequest
   * @returns DescribeDrdsDBClusterResponse
   */
  async describeDrdsDBCluster(request: $_model.DescribeDrdsDBClusterRequest): Promise<$_model.DescribeDrdsDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBClusterWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteListWithOptions(request: $_model.DescribeDrdsDBIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDBIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsDBIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDBIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDBIpWhiteListResponse({}));
  }

  /**
   * @param request - DescribeDrdsDBIpWhiteListRequest
   * @returns DescribeDrdsDBIpWhiteListResponse
   */
  async describeDrdsDBIpWhiteList(request: $_model.DescribeDrdsDBIpWhiteListRequest): Promise<$_model.DescribeDrdsDBIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDBsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDBsResponse
   */
  async describeDrdsDBsWithOptions(request: $_model.DescribeDrdsDBsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDBsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsDBs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDBsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDBsResponse({}));
  }

  /**
   * @param request - DescribeDrdsDBsRequest
   * @returns DescribeDrdsDBsResponse
   */
  async describeDrdsDBs(request: $_model.DescribeDrdsDBsRequest): Promise<$_model.DescribeDrdsDBsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDBsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsDbInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbInstanceResponse
   */
  async describeDrdsDbInstanceWithOptions(request: $_model.DescribeDrdsDbInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDbInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDbInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDbInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDbInstanceResponse({}));
  }

  /**
   * @param request - DescribeDrdsDbInstanceRequest
   * @returns DescribeDrdsDbInstanceResponse
   */
  async describeDrdsDbInstance(request: $_model.DescribeDrdsDbInstanceRequest): Promise<$_model.DescribeDrdsDbInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbInstanceWithOptions(request, runtime);
  }

  /**
   * Queries ApsaraDB RDS for MySQL instances that are used to store the data of a database.
   * 
   * @param request - DescribeDrdsDbInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbInstancesResponse
   */
  async describeDrdsDbInstancesWithOptions(request: $_model.DescribeDrdsDbInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDbInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsDbInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDbInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDbInstancesResponse({}));
  }

  /**
   * Queries ApsaraDB RDS for MySQL instances that are used to store the data of a database.
   * 
   * @param request - DescribeDrdsDbInstancesRequest
   * @returns DescribeDrdsDbInstancesResponse
   */
  async describeDrdsDbInstances(request: $_model.DescribeDrdsDbInstancesRequest): Promise<$_model.DescribeDrdsDbInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbInstancesWithOptions(request, runtime);
  }

  /**
   * 查询存储实例列表
   * 
   * @param request - DescribeDrdsDbRdsNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsDbRdsNameListResponse
   */
  async describeDrdsDbRdsNameListWithOptions(request: $_model.DescribeDrdsDbRdsNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsDbRdsNameListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsDbRdsNameList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsDbRdsNameListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsDbRdsNameListResponse({}));
  }

  /**
   * 查询存储实例列表
   * 
   * @param request - DescribeDrdsDbRdsNameListRequest
   * @returns DescribeDrdsDbRdsNameListResponse
   */
  async describeDrdsDbRdsNameList(request: $_model.DescribeDrdsDbRdsNameListRequest): Promise<$_model.DescribeDrdsDbRdsNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsDbRdsNameListWithOptions(request, runtime);
  }

  /**
   * Queries the details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceResponse
   */
  async describeDrdsInstanceWithOptions(request: $_model.DescribeDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstanceResponse({}));
  }

  /**
   * Queries the details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsInstanceRequest
   * @returns DescribeDrdsInstanceResponse
   */
  async describeDrdsInstance(request: $_model.DescribeDrdsInstanceRequest): Promise<$_model.DescribeDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceDbMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitorWithOptions(request: $_model.DescribeDrdsInstanceDbMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstanceDbMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceDbMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstanceDbMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstanceDbMonitorResponse({}));
  }

  /**
   * @param request - DescribeDrdsInstanceDbMonitorRequest
   * @returns DescribeDrdsInstanceDbMonitorResponse
   */
  async describeDrdsInstanceDbMonitor(request: $_model.DescribeDrdsInstanceDbMonitorRequest): Promise<$_model.DescribeDrdsInstanceDbMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceDbMonitorWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceLevelTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceLevelTasksResponse
   */
  async describeDrdsInstanceLevelTasksWithOptions(request: $_model.DescribeDrdsInstanceLevelTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstanceLevelTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceLevelTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstanceLevelTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstanceLevelTasksResponse({}));
  }

  /**
   * @param request - DescribeDrdsInstanceLevelTasksRequest
   * @returns DescribeDrdsInstanceLevelTasksResponse
   */
  async describeDrdsInstanceLevelTasks(request: $_model.DescribeDrdsInstanceLevelTasksRequest): Promise<$_model.DescribeDrdsInstanceLevelTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceLevelTasksWithOptions(request, runtime);
  }

  /**
   * 查询监控数据
   * 
   * @param request - DescribeDrdsInstanceMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitorWithOptions(request: $_model.DescribeDrdsInstanceMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstanceMonitorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.periodMultiple)) {
      query["PeriodMultiple"] = request.periodMultiple;
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
      action: "DescribeDrdsInstanceMonitor",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstanceMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstanceMonitorResponse({}));
  }

  /**
   * 查询监控数据
   * 
   * @param request - DescribeDrdsInstanceMonitorRequest
   * @returns DescribeDrdsInstanceMonitorResponse
   */
  async describeDrdsInstanceMonitor(request: $_model.DescribeDrdsInstanceMonitorRequest): Promise<$_model.DescribeDrdsInstanceMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceMonitorWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstanceVersionResponse
   */
  async describeDrdsInstanceVersionWithOptions(request: $_model.DescribeDrdsInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstanceVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstanceVersionResponse({}));
  }

  /**
   * @param request - DescribeDrdsInstanceVersionRequest
   * @returns DescribeDrdsInstanceVersionResponse
   */
  async describeDrdsInstanceVersion(request: $_model.DescribeDrdsInstanceVersionRequest): Promise<$_model.DescribeDrdsInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Queries instances that meet the specified conditions.
   * 
   * @param request - DescribeDrdsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsInstancesResponse
   */
  async describeDrdsInstancesWithOptions(request: $_model.DescribeDrdsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
    }

    if (!$dara.isNull(request.mix)) {
      query["Mix"] = request.mix;
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

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsInstancesResponse({}));
  }

  /**
   * Queries instances that meet the specified conditions.
   * 
   * @param request - DescribeDrdsInstancesRequest
   * @returns DescribeDrdsInstancesResponse
   */
  async describeDrdsInstances(request: $_model.DescribeDrdsInstancesRequest): Promise<$_model.DescribeDrdsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsInstancesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsParamsResponse
   */
  async describeDrdsParamsWithOptions(request: $_model.DescribeDrdsParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsParamsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsParamsResponse({}));
  }

  /**
   * @param request - DescribeDrdsParamsRequest
   * @returns DescribeDrdsParamsResponse
   */
  async describeDrdsParams(request: $_model.DescribeDrdsParamsRequest): Promise<$_model.DescribeDrdsParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsParamsWithOptions(request, runtime);
  }

  /**
   * Queries the information about all custom ApsaraDB RDS for MySQL instances in a PolarDB-X instance.
   * 
   * @param request - DescribeDrdsRdsInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsRdsInstancesResponse
   */
  async describeDrdsRdsInstancesWithOptions(request: $_model.DescribeDrdsRdsInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsRdsInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsRdsInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsRdsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsRdsInstancesResponse({}));
  }

  /**
   * Queries the information about all custom ApsaraDB RDS for MySQL instances in a PolarDB-X instance.
   * 
   * @param request - DescribeDrdsRdsInstancesRequest
   * @returns DescribeDrdsRdsInstancesResponse
   */
  async describeDrdsRdsInstances(request: $_model.DescribeDrdsRdsInstancesRequest): Promise<$_model.DescribeDrdsRdsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsRdsInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the database shards of an PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsShardingDbsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsShardingDbsResponse
   */
  async describeDrdsShardingDbsWithOptions(request: $_model.DescribeDrdsShardingDbsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsShardingDbsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dbNamePattern)) {
      query["DbNamePattern"] = request.dbNamePattern;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeDrdsShardingDbs",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsShardingDbsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsShardingDbsResponse({}));
  }

  /**
   * Queries the database shards of an PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsShardingDbsRequest
   * @returns DescribeDrdsShardingDbsResponse
   */
  async describeDrdsShardingDbs(request: $_model.DescribeDrdsShardingDbsRequest): Promise<$_model.DescribeDrdsShardingDbsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsShardingDbsWithOptions(request, runtime);
  }

  /**
   * Queries a slow SQL query.
   * 
   * @param request - DescribeDrdsSlowSqlsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsSlowSqlsResponse
   */
  async describeDrdsSlowSqlsWithOptions(request: $_model.DescribeDrdsSlowSqlsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsSlowSqlsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exeTime)) {
      query["ExeTime"] = request.exeTime;
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
      action: "DescribeDrdsSlowSqls",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsSlowSqlsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsSlowSqlsResponse({}));
  }

  /**
   * Queries a slow SQL query.
   * 
   * @param request - DescribeDrdsSlowSqlsRequest
   * @returns DescribeDrdsSlowSqlsResponse
   */
  async describeDrdsSlowSqls(request: $_model.DescribeDrdsSlowSqlsRequest): Promise<$_model.DescribeDrdsSlowSqlsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsSlowSqlsWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsSqlAuditStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsSqlAuditStatusResponse
   */
  async describeDrdsSqlAuditStatusWithOptions(request: $_model.DescribeDrdsSqlAuditStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsSqlAuditStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsSqlAuditStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsSqlAuditStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsSqlAuditStatusResponse({}));
  }

  /**
   * Queries the SQL audit details of a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeDrdsSqlAuditStatusRequest
   * @returns DescribeDrdsSqlAuditStatusResponse
   */
  async describeDrdsSqlAuditStatus(request: $_model.DescribeDrdsSqlAuditStatusRequest): Promise<$_model.DescribeDrdsSqlAuditStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsSqlAuditStatusWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDrdsTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDrdsTasksResponse
   */
  async describeDrdsTasksWithOptions(request: $_model.DescribeDrdsTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDrdsTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDrdsTasks",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDrdsTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDrdsTasksResponse({}));
  }

  /**
   * @param request - DescribeDrdsTasksRequest
   * @returns DescribeDrdsTasksResponse
   */
  async describeDrdsTasks(request: $_model.DescribeDrdsTasksRequest): Promise<$_model.DescribeDrdsTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDrdsTasksWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeExpandLogicTableInfoListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExpandLogicTableInfoListResponse
   */
  async describeExpandLogicTableInfoListWithOptions(request: $_model.DescribeExpandLogicTableInfoListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExpandLogicTableInfoListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExpandLogicTableInfoList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExpandLogicTableInfoListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExpandLogicTableInfoListResponse({}));
  }

  /**
   * @param request - DescribeExpandLogicTableInfoListRequest
   * @returns DescribeExpandLogicTableInfoListResponse
   */
  async describeExpandLogicTableInfoList(request: $_model.DescribeExpandLogicTableInfoListRequest): Promise<$_model.DescribeExpandLogicTableInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExpandLogicTableInfoListWithOptions(request, runtime);
  }

  /**
   * Queries the information about databases on which hots-pot scale-out is performed.
   * 
   * @param request - DescribeHotDbListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHotDbListResponse
   */
  async describeHotDbListWithOptions(request: $_model.DescribeHotDbListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHotDbListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHotDbList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHotDbListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHotDbListResponse({}));
  }

  /**
   * Queries the information about databases on which hots-pot scale-out is performed.
   * 
   * @param request - DescribeHotDbListRequest
   * @returns DescribeHotDbListResponse
   */
  async describeHotDbList(request: $_model.DescribeHotDbListRequest): Promise<$_model.DescribeHotDbListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHotDbListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstDbLogInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstDbLogInfoResponse
   */
  async describeInstDbLogInfoWithOptions(request: $_model.DescribeInstDbLogInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstDbLogInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstDbLogInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstDbLogInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstDbLogInfoResponse({}));
  }

  /**
   * @param request - DescribeInstDbLogInfoRequest
   * @returns DescribeInstDbLogInfoResponse
   */
  async describeInstDbLogInfo(request: $_model.DescribeInstDbLogInfoRequest): Promise<$_model.DescribeInstDbLogInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstDbLogInfoWithOptions(request, runtime);
  }

  /**
   * Queries the names of the Log Service project and the Logstore used by the SQL audit feature.
   * 
   * @param request - DescribeInstDbSlsInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstDbSlsInfoResponse
   */
  async describeInstDbSlsInfoWithOptions(request: $_model.DescribeInstDbSlsInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstDbSlsInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstDbSlsInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstDbSlsInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstDbSlsInfoResponse({}));
  }

  /**
   * Queries the names of the Log Service project and the Logstore used by the SQL audit feature.
   * 
   * @param request - DescribeInstDbSlsInfoRequest
   * @returns DescribeInstDbSlsInfoResponse
   */
  async describeInstDbSlsInfo(request: $_model.DescribeInstDbSlsInfoRequest): Promise<$_model.DescribeInstDbSlsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstDbSlsInfoWithOptions(request, runtime);
  }

  /**
   * Queries information about an instance account.
   * 
   * @param request - DescribeInstanceAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceAccountsResponse
   */
  async describeInstanceAccountsWithOptions(request: $_model.DescribeInstanceAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceAccounts",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceAccountsResponse({}));
  }

  /**
   * Queries information about an instance account.
   * 
   * @param request - DescribeInstanceAccountsRequest
   * @returns DescribeInstanceAccountsResponse
   */
  async describeInstanceAccounts(request: $_model.DescribeInstanceAccountsRequest): Promise<$_model.DescribeInstanceAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceAccountsWithOptions(request, runtime);
  }

  /**
   * Check whether zone switching is enabled
   * 
   * @param request - DescribeInstanceSwitchAzoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSwitchAzoneResponse
   */
  async describeInstanceSwitchAzoneWithOptions(request: $_model.DescribeInstanceSwitchAzoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSwitchAzoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSwitchAzone",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSwitchAzoneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSwitchAzoneResponse({}));
  }

  /**
   * Check whether zone switching is enabled
   * 
   * @param request - DescribeInstanceSwitchAzoneRequest
   * @returns DescribeInstanceSwitchAzoneResponse
   */
  async describeInstanceSwitchAzone(request: $_model.DescribeInstanceSwitchAzoneRequest): Promise<$_model.DescribeInstanceSwitchAzoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSwitchAzoneWithOptions(request, runtime);
  }

  /**
   * Queries whether you can change the network type of a PolarDB-X 1.0 instance.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceSwitchNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetworkWithOptions(request: $_model.DescribeInstanceSwitchNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceSwitchNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceSwitchNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceSwitchNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceSwitchNetworkResponse({}));
  }

  /**
   * Queries whether you can change the network type of a PolarDB-X 1.0 instance.
   * 
   * @remarks
   * ***
   * 
   * @param request - DescribeInstanceSwitchNetworkRequest
   * @returns DescribeInstanceSwitchNetworkResponse
   */
  async describeInstanceSwitchNetwork(request: $_model.DescribeInstanceSwitchNetworkRequest): Promise<$_model.DescribeInstanceSwitchNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceSwitchNetworkWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePreCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePreCheckResultResponse
   */
  async describePreCheckResultWithOptions(request: $_model.DescribePreCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePreCheckResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

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
      action: "DescribePreCheckResult",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePreCheckResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribePreCheckResultResponse({}));
  }

  /**
   * @param request - DescribePreCheckResultRequest
   * @returns DescribePreCheckResultResponse
   */
  async describePreCheckResult(request: $_model.DescribePreCheckResultRequest): Promise<$_model.DescribePreCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePreCheckResultWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRDSPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRDSPerformanceResponse
   */
  async describeRDSPerformanceWithOptions(request: $_model.DescribeRDSPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRDSPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    if (!$dara.isNull(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRDSPerformance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRDSPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRDSPerformanceResponse({}));
  }

  /**
   * @param request - DescribeRDSPerformanceRequest
   * @returns DescribeRDSPerformanceResponse
   */
  async describeRDSPerformance(request: $_model.DescribeRDSPerformanceRequest): Promise<$_model.DescribeRDSPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRDSPerformanceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsCommodityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsCommodityResponse
   */
  async describeRdsCommodityWithOptions(request: $_model.DescribeRdsCommodityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsCommodityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsCommodity",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsCommodityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsCommodityResponse({}));
  }

  /**
   * @param request - DescribeRdsCommodityRequest
   * @returns DescribeRdsCommodityResponse
   */
  async describeRdsCommodity(request: $_model.DescribeRdsCommodityRequest): Promise<$_model.DescribeRdsCommodityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsCommodityWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsPerformanceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsPerformanceSummaryResponse
   */
  async describeRdsPerformanceSummaryWithOptions(request: $_model.DescribeRdsPerformanceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsPerformanceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsPerformanceSummary",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsPerformanceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsPerformanceSummaryResponse({}));
  }

  /**
   * @param request - DescribeRdsPerformanceSummaryRequest
   * @returns DescribeRdsPerformanceSummaryResponse
   */
  async describeRdsPerformanceSummary(request: $_model.DescribeRdsPerformanceSummaryRequest): Promise<$_model.DescribeRdsPerformanceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsPerformanceSummaryWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeRdsSuperAccountInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsSuperAccountInstancesResponse
   */
  async describeRdsSuperAccountInstancesWithOptions(request: $_model.DescribeRdsSuperAccountInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsSuperAccountInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.rdsInstance)) {
      query["RdsInstance"] = request.rdsInstance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsSuperAccountInstances",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsSuperAccountInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsSuperAccountInstancesResponse({}));
  }

  /**
   * @param request - DescribeRdsSuperAccountInstancesRequest
   * @returns DescribeRdsSuperAccountInstancesResponse
   */
  async describeRdsSuperAccountInstances(request: $_model.DescribeRdsSuperAccountInstancesRequest): Promise<$_model.DescribeRdsSuperAccountInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsSuperAccountInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the status of the table recycle bin.
   * 
   * @param request - DescribeRecycleBinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecycleBinStatusResponse
   */
  async describeRecycleBinStatusWithOptions(request: $_model.DescribeRecycleBinStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecycleBinStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecycleBinStatusResponse({}));
  }

  /**
   * Queries the status of the table recycle bin.
   * 
   * @param request - DescribeRecycleBinStatusRequest
   * @returns DescribeRecycleBinStatusResponse
   */
  async describeRecycleBinStatus(request: $_model.DescribeRecycleBinStatusRequest): Promise<$_model.DescribeRecycleBinStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecycleBinStatusWithOptions(request, runtime);
  }

  /**
   * Queries the tables that can be restored in the recycle bin.
   * 
   * @param request - DescribeRecycleBinTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRecycleBinTablesResponse
   */
  async describeRecycleBinTablesWithOptions(request: $_model.DescribeRecycleBinTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRecycleBinTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRecycleBinTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRecycleBinTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRecycleBinTablesResponse({}));
  }

  /**
   * Queries the tables that can be restored in the recycle bin.
   * 
   * @param request - DescribeRecycleBinTablesRequest
   * @returns DescribeRecycleBinTablesResponse
   */
  async describeRecycleBinTables(request: $_model.DescribeRecycleBinTablesRequest): Promise<$_model.DescribeRecycleBinTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRecycleBinTablesWithOptions(request, runtime);
  }

  /**
   * You can call the DescribeRestoreOrder operation to view the details of the order.
   * 
   * @param request - DescribeRestoreOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRestoreOrderResponse
   */
  async describeRestoreOrderWithOptions(request: $_model.DescribeRestoreOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRestoreOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRestoreOrder",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRestoreOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRestoreOrderResponse({}));
  }

  /**
   * You can call the DescribeRestoreOrder operation to view the details of the order.
   * 
   * @param request - DescribeRestoreOrderRequest
   * @returns DescribeRestoreOrderResponse
   */
  async describeRestoreOrder(request: $_model.DescribeRestoreOrderRequest): Promise<$_model.DescribeRestoreOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRestoreOrderWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeShardTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeShardTaskInfoResponse
   */
  async describeShardTaskInfoWithOptions(request: $_model.DescribeShardTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeShardTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeShardTaskInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeShardTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeShardTaskInfoResponse({}));
  }

  /**
   * @param request - DescribeShardTaskInfoRequest
   * @returns DescribeShardTaskInfoResponse
   */
  async describeShardTaskInfo(request: $_model.DescribeShardTaskInfoRequest): Promise<$_model.DescribeShardTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeShardTaskInfoWithOptions(request, runtime);
  }

  /**
   * Queries the flashback tasks that are performed on a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeSqlFlashbakTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlFlashbakTaskResponse
   */
  async describeSqlFlashbakTaskWithOptions(request: $_model.DescribeSqlFlashbakTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlFlashbakTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlFlashbakTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlFlashbakTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlFlashbakTaskResponse({}));
  }

  /**
   * Queries the flashback tasks that are performed on a PolarDB-X 1.0 instance.
   * 
   * @param request - DescribeSqlFlashbakTaskRequest
   * @returns DescribeSqlFlashbakTaskResponse
   */
  async describeSqlFlashbakTask(request: $_model.DescribeSqlFlashbakTaskRequest): Promise<$_model.DescribeSqlFlashbakTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlFlashbakTaskWithOptions(request, runtime);
  }

  /**
   * Queries information about the schema of a table.
   * 
   * @param request - DescribeTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableResponse
   */
  async describeTableWithOptions(request: $_model.DescribeTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "DescribeTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableResponse({}));
  }

  /**
   * Queries information about the schema of a table.
   * 
   * @param request - DescribeTableRequest
   * @returns DescribeTableResponse
   */
  async describeTable(request: $_model.DescribeTableRequest): Promise<$_model.DescribeTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeTableListByTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableListByTypeResponse
   */
  async describeTableListByTypeWithOptions(request: $_model.DescribeTableListByTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableListByTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
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
      action: "DescribeTableListByType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableListByTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableListByTypeResponse({}));
  }

  /**
   * @param request - DescribeTableListByTypeRequest
   * @returns DescribeTableListByTypeResponse
   */
  async describeTableListByType(request: $_model.DescribeTableListByTypeRequest): Promise<$_model.DescribeTableListByTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableListByTypeWithOptions(request, runtime);
  }

  /**
   * DescribeTables文档变更
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: $_model.DescribeTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTables",
      version: "2019-01-23",
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
   * DescribeTables文档变更
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Disables the SQL audit feature for a database.
   * 
   * @param request - DisableSqlAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableSqlAuditResponse
   */
  async disableSqlAuditWithOptions(request: $_model.DisableSqlAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableSqlAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableSqlAuditResponse>(await this.callApi(params, req, runtime), new $_model.DisableSqlAuditResponse({}));
  }

  /**
   * Disables the SQL audit feature for a database.
   * 
   * @param request - DisableSqlAuditRequest
   * @returns DisableSqlAuditResponse
   */
  async disableSqlAudit(request: $_model.DisableSqlAuditRequest): Promise<$_model.DisableSqlAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableSqlAuditWithOptions(request, runtime);
  }

  /**
   * Creates an IPv6 address.
   * 
   * @param request - EnableInstanceIpv6AddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableInstanceIpv6AddressResponse
   */
  async enableInstanceIpv6AddressWithOptions(request: $_model.EnableInstanceIpv6AddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableInstanceIpv6AddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableInstanceIpv6Address",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableInstanceIpv6AddressResponse>(await this.callApi(params, req, runtime), new $_model.EnableInstanceIpv6AddressResponse({}));
  }

  /**
   * Creates an IPv6 address.
   * 
   * @param request - EnableInstanceIpv6AddressRequest
   * @returns EnableInstanceIpv6AddressResponse
   */
  async enableInstanceIpv6Address(request: $_model.EnableInstanceIpv6AddressRequest): Promise<$_model.EnableInstanceIpv6AddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableInstanceIpv6AddressWithOptions(request, runtime);
  }

  /**
   * Enables the SQL audit feature for a database.
   * 
   * @param request - EnableSqlAuditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSqlAuditResponse
   */
  async enableSqlAuditWithOptions(request: $_model.EnableSqlAuditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSqlAuditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.isRecall)) {
      query["IsRecall"] = request.isRecall;
    }

    if (!$dara.isNull(request.recallEndTimestamp)) {
      query["RecallEndTimestamp"] = request.recallEndTimestamp;
    }

    if (!$dara.isNull(request.recallStartTimestamp)) {
      query["RecallStartTimestamp"] = request.recallStartTimestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSqlAudit",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSqlAuditResponse>(await this.callApi(params, req, runtime), new $_model.EnableSqlAuditResponse({}));
  }

  /**
   * Enables the SQL audit feature for a database.
   * 
   * @param request - EnableSqlAuditRequest
   * @returns EnableSqlAuditResponse
   */
  async enableSqlAudit(request: $_model.EnableSqlAuditRequest): Promise<$_model.EnableSqlAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSqlAuditWithOptions(request, runtime);
  }

  /**
   * @param request - EnableSqlFlashbackMatchSwitchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableSqlFlashbackMatchSwitchResponse
   */
  async enableSqlFlashbackMatchSwitchWithOptions(request: $_model.EnableSqlFlashbackMatchSwitchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableSqlFlashbackMatchSwitchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableSqlFlashbackMatchSwitch",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableSqlFlashbackMatchSwitchResponse>(await this.callApi(params, req, runtime), new $_model.EnableSqlFlashbackMatchSwitchResponse({}));
  }

  /**
   * @param request - EnableSqlFlashbackMatchSwitchRequest
   * @returns EnableSqlFlashbackMatchSwitchResponse
   */
  async enableSqlFlashbackMatchSwitch(request: $_model.EnableSqlFlashbackMatchSwitchRequest): Promise<$_model.EnableSqlFlashbackMatchSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableSqlFlashbackMatchSwitchWithOptions(request, runtime);
  }

  /**
   * Restores a logical table that is deleted.
   * 
   * @param request - FlashbackRecycleBinTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlashbackRecycleBinTableResponse
   */
  async flashbackRecycleBinTableWithOptions(request: $_model.FlashbackRecycleBinTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FlashbackRecycleBinTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "FlashbackRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlashbackRecycleBinTableResponse>(await this.callApi(params, req, runtime), new $_model.FlashbackRecycleBinTableResponse({}));
  }

  /**
   * Restores a logical table that is deleted.
   * 
   * @param request - FlashbackRecycleBinTableRequest
   * @returns FlashbackRecycleBinTableResponse
   */
  async flashbackRecycleBinTable(request: $_model.FlashbackRecycleBinTableRequest): Promise<$_model.FlashbackRecycleBinTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.flashbackRecycleBinTableWithOptions(request, runtime);
  }

  /**
   * @param request - GetDrdsDbRdsRelationInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDrdsDbRdsRelationInfoResponse
   */
  async getDrdsDbRdsRelationInfoWithOptions(request: $_model.GetDrdsDbRdsRelationInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDrdsDbRdsRelationInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDrdsDbRdsRelationInfo",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDrdsDbRdsRelationInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDrdsDbRdsRelationInfoResponse({}));
  }

  /**
   * @param request - GetDrdsDbRdsRelationInfoRequest
   * @returns GetDrdsDbRdsRelationInfoResponse
   */
  async getDrdsDbRdsRelationInfo(request: $_model.GetDrdsDbRdsRelationInfoRequest): Promise<$_model.GetDrdsDbRdsRelationInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDrdsDbRdsRelationInfoWithOptions(request, runtime);
  }

  /**
   * 查看Tag标签
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      action: "ListTagResources",
      version: "2019-01-23",
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
   * 查看Tag标签
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Manages a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - ManagePrivateRdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManagePrivateRdsResponse
   */
  async managePrivateRdsWithOptions(request: $_model.ManagePrivateRdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManagePrivateRdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    if (!$dara.isNull(request.rdsAction)) {
      query["RdsAction"] = request.rdsAction;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManagePrivateRds",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManagePrivateRdsResponse>(await this.callApi(params, req, runtime), new $_model.ManagePrivateRdsResponse({}));
  }

  /**
   * Manages a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - ManagePrivateRdsRequest
   * @returns ManagePrivateRdsResponse
   */
  async managePrivateRds(request: $_model.ManagePrivateRdsRequest): Promise<$_model.ManagePrivateRdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.managePrivateRdsWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2019-01-23",
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
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilegeWithOptions(request: $_model.ModifyAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.dbPrivilege)) {
      query["DbPrivilege"] = request.dbPrivilege;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountPrivilege",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountPrivilegeResponse({}));
  }

  /**
   * @param request - ModifyAccountPrivilegeRequest
   * @returns ModifyAccountPrivilegeResponse
   */
  async modifyAccountPrivilege(request: $_model.ModifyAccountPrivilegeRequest): Promise<$_model.ModifyAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDrdsInstanceDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescriptionWithOptions(request: $_model.ModifyDrdsInstanceDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDrdsInstanceDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDrdsInstanceDescription",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDrdsInstanceDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDrdsInstanceDescriptionResponse({}));
  }

  /**
   * @param request - ModifyDrdsInstanceDescriptionRequest
   * @returns ModifyDrdsInstanceDescriptionResponse
   */
  async modifyDrdsInstanceDescription(request: $_model.ModifyDrdsInstanceDescriptionRequest): Promise<$_model.ModifyDrdsInstanceDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDrdsInstanceDescriptionWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDrdsIpWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteListWithOptions(request: $_model.ModifyDrdsIpWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDrdsIpWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.groupAttribute)) {
      query["GroupAttribute"] = request.groupAttribute;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ipWhiteList)) {
      query["IpWhiteList"] = request.ipWhiteList;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDrdsIpWhiteList",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDrdsIpWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDrdsIpWhiteListResponse({}));
  }

  /**
   * @param request - ModifyDrdsIpWhiteListRequest
   * @returns ModifyDrdsIpWhiteListResponse
   */
  async modifyDrdsIpWhiteList(request: $_model.ModifyDrdsIpWhiteListRequest): Promise<$_model.ModifyDrdsIpWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDrdsIpWhiteListWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyPolarDbReadWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPolarDbReadWeightResponse
   */
  async modifyPolarDbReadWeightWithOptions(request: $_model.ModifyPolarDbReadWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPolarDbReadWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstanceId)) {
      query["DbInstanceId"] = request.dbInstanceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.dbNodeIds)) {
      query["DbNodeIds"] = request.dbNodeIds;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPolarDbReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPolarDbReadWeightResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPolarDbReadWeightResponse({}));
  }

  /**
   * @param request - ModifyPolarDbReadWeightRequest
   * @returns ModifyPolarDbReadWeightResponse
   */
  async modifyPolarDbReadWeight(request: $_model.ModifyPolarDbReadWeightRequest): Promise<$_model.ModifyPolarDbReadWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPolarDbReadWeightWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyRdsReadWeightRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeightWithOptions(request: $_model.ModifyRdsReadWeightRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyRdsReadWeightResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.instanceNames)) {
      query["InstanceNames"] = request.instanceNames;
    }

    if (!$dara.isNull(request.weights)) {
      query["Weights"] = request.weights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyRdsReadWeight",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyRdsReadWeightResponse>(await this.callApi(params, req, runtime), new $_model.ModifyRdsReadWeightResponse({}));
  }

  /**
   * @param request - ModifyRdsReadWeightRequest
   * @returns ModifyRdsReadWeightResponse
   */
  async modifyRdsReadWeight(request: $_model.ModifyRdsReadWeightRequest): Promise<$_model.ModifyRdsReadWeightResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyRdsReadWeightWithOptions(request, runtime);
  }

  /**
   * @param request - PutStartBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutStartBackupResponse
   */
  async putStartBackupWithOptions(request: $_model.PutStartBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PutStartBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutStartBackup",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutStartBackupResponse>(await this.callApi(params, req, runtime), new $_model.PutStartBackupResponse({}));
  }

  /**
   * @param request - PutStartBackupRequest
   * @returns PutStartBackupResponse
   */
  async putStartBackup(request: $_model.PutStartBackupRequest): Promise<$_model.PutStartBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.putStartBackupWithOptions(request, runtime);
  }

  /**
   * @param request - RefreshDrdsAtomUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDrdsAtomUrlResponse
   */
  async refreshDrdsAtomUrlWithOptions(request: $_model.RefreshDrdsAtomUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDrdsAtomUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDrdsAtomUrl",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDrdsAtomUrlResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDrdsAtomUrlResponse({}));
  }

  /**
   * @param request - RefreshDrdsAtomUrlRequest
   * @returns RefreshDrdsAtomUrlResponse
   */
  async refreshDrdsAtomUrl(request: $_model.RefreshDrdsAtomUrlRequest): Promise<$_model.RefreshDrdsAtomUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDrdsAtomUrlWithOptions(request, runtime);
  }

  /**
   * @param request - ReleaseInstanceInternetAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseInstanceInternetAddressResponse
   */
  async releaseInstanceInternetAddressWithOptions(request: $_model.ReleaseInstanceInternetAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseInstanceInternetAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseInstanceInternetAddress",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseInstanceInternetAddressResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseInstanceInternetAddressResponse({}));
  }

  /**
   * @param request - ReleaseInstanceInternetAddressRequest
   * @returns ReleaseInstanceInternetAddressResponse
   */
  async releaseInstanceInternetAddress(request: $_model.ReleaseInstanceInternetAddressRequest): Promise<$_model.ReleaseInstanceInternetAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseInstanceInternetAddressWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveBackupsSetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveBackupsSetResponse
   */
  async removeBackupsSetWithOptions(request: $_model.RemoveBackupsSetRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveBackupsSetResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveBackupsSet",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveBackupsSetResponse>(await this.callApi(params, req, runtime), new $_model.RemoveBackupsSetResponse({}));
  }

  /**
   * @param request - RemoveBackupsSetRequest
   * @returns RemoveBackupsSetResponse
   */
  async removeBackupsSet(request: $_model.RemoveBackupsSetRequest): Promise<$_model.RemoveBackupsSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeBackupsSetWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveDrdsDbRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsDbResponse
   */
  async removeDrdsDbWithOptions(request: $_model.RemoveDrdsDbRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDrdsDbResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsDb",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDrdsDbResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDrdsDbResponse({}));
  }

  /**
   * @param request - RemoveDrdsDbRequest
   * @returns RemoveDrdsDbResponse
   */
  async removeDrdsDb(request: $_model.RemoveDrdsDbRequest): Promise<$_model.RemoveDrdsDbResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsDbWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveDrdsDbFailedRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsDbFailedRecordResponse
   */
  async removeDrdsDbFailedRecordWithOptions(request: $_model.RemoveDrdsDbFailedRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDrdsDbFailedRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsDbFailedRecord",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDrdsDbFailedRecordResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDrdsDbFailedRecordResponse({}));
  }

  /**
   * @param request - RemoveDrdsDbFailedRecordRequest
   * @returns RemoveDrdsDbFailedRecordResponse
   */
  async removeDrdsDbFailedRecord(request: $_model.RemoveDrdsDbFailedRecordRequest): Promise<$_model.RemoveDrdsDbFailedRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsDbFailedRecordWithOptions(request, runtime);
  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
   * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
   * 
   * @param request - RemoveDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDrdsInstanceResponse
   */
  async removeDrdsInstanceWithOptions(request: $_model.RemoveDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDrdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDrdsInstanceResponse({}));
  }

  /**
   * Releases an instance.
   * 
   * @remarks
   * > *   You can call this operation to release an instance that is charged based on only the pay-as-you-go billing method.
   * >*   If the specifications of the instance are being changed, or one or more databases exist in the instance, you cannot call this operation to release the instance.
   * 
   * @param request - RemoveDrdsInstanceRequest
   * @returns RemoveDrdsInstanceResponse
   */
  async removeDrdsInstance(request: $_model.RemoveDrdsInstanceRequest): Promise<$_model.RemoveDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RemoveInstanceAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveInstanceAccountResponse
   */
  async removeInstanceAccountWithOptions(request: $_model.RemoveInstanceAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveInstanceAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveInstanceAccount",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveInstanceAccountResponse>(await this.callApi(params, req, runtime), new $_model.RemoveInstanceAccountResponse({}));
  }

  /**
   * @param request - RemoveInstanceAccountRequest
   * @returns RemoveInstanceAccountResponse
   */
  async removeInstanceAccount(request: $_model.RemoveInstanceAccountRequest): Promise<$_model.RemoveInstanceAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeInstanceAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a table in the recycle bin.
   * 
   * @param request - RemoveRecycleBinTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveRecycleBinTableResponse
   */
  async removeRecycleBinTableWithOptions(request: $_model.RemoveRecycleBinTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveRecycleBinTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "RemoveRecycleBinTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveRecycleBinTableResponse>(await this.callApi(params, req, runtime), new $_model.RemoveRecycleBinTableResponse({}));
  }

  /**
   * Deletes a table in the recycle bin.
   * 
   * @param request - RemoveRecycleBinTableRequest
   * @returns RemoveRecycleBinTableResponse
   */
  async removeRecycleBinTable(request: $_model.RemoveRecycleBinTableRequest): Promise<$_model.RemoveRecycleBinTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeRecycleBinTableWithOptions(request, runtime);
  }

  /**
   * @param request - RestartDrdsInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDrdsInstanceResponse
   */
  async restartDrdsInstanceWithOptions(request: $_model.RestartDrdsInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDrdsInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDrdsInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDrdsInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartDrdsInstanceResponse({}));
  }

  /**
   * @param request - RestartDrdsInstanceRequest
   * @returns RestartDrdsInstanceResponse
   */
  async restartDrdsInstance(request: $_model.RestartDrdsInstanceRequest): Promise<$_model.RestartDrdsInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDrdsInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - RollbackInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackInstanceVersionResponse
   */
  async rollbackInstanceVersionWithOptions(request: $_model.RollbackInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackInstanceVersionResponse>(await this.callApi(params, req, runtime), new $_model.RollbackInstanceVersionResponse({}));
  }

  /**
   * @param request - RollbackInstanceVersionRequest
   * @returns RollbackInstanceVersionResponse
   */
  async rollbackInstanceVersion(request: $_model.RollbackInstanceVersionRequest): Promise<$_model.RollbackInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackInstanceVersionWithOptions(request, runtime);
  }

  /**
   * Modifies a backup policy.
   * 
   * @param request - SetBackupLocalRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackupLocalResponse
   */
  async setBackupLocalWithOptions(request: $_model.SetBackupLocalRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetBackupLocalResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.highSpaceUsageProtection)) {
      query["HighSpaceUsageProtection"] = request.highSpaceUsageProtection;
    }

    if (!$dara.isNull(request.localLogRetentionHours)) {
      query["LocalLogRetentionHours"] = request.localLogRetentionHours;
    }

    if (!$dara.isNull(request.localLogRetentionSpace)) {
      query["LocalLogRetentionSpace"] = request.localLogRetentionSpace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetBackupLocal",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetBackupLocalResponse>(await this.callApi(params, req, runtime), new $_model.SetBackupLocalResponse({}));
  }

  /**
   * Modifies a backup policy.
   * 
   * @param request - SetBackupLocalRequest
   * @returns SetBackupLocalResponse
   */
  async setBackupLocal(request: $_model.SetBackupLocalRequest): Promise<$_model.SetBackupLocalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackupLocalWithOptions(request, runtime);
  }

  /**
   * @param request - SetBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetBackupPolicyResponse
   */
  async setBackupPolicyWithOptions(request: $_model.SetBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupLog)) {
      query["BackupLog"] = request.backupLog;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.dataBackupRetentionPeriod)) {
      query["DataBackupRetentionPeriod"] = request.dataBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.preferredBackupEndTime)) {
      query["PreferredBackupEndTime"] = request.preferredBackupEndTime;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupStartTime)) {
      query["PreferredBackupStartTime"] = request.preferredBackupStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetBackupPolicy",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.SetBackupPolicyResponse({}));
  }

  /**
   * @param request - SetBackupPolicyRequest
   * @returns SetBackupPolicyResponse
   */
  async setBackupPolicy(request: $_model.SetBackupPolicyRequest): Promise<$_model.SetBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Configures a broadcast table for a database.
   * 
   * @param request - SetupBroadcastTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupBroadcastTablesResponse
   */
  async setupBroadcastTablesWithOptions(request: $_model.SetupBroadcastTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetupBroadcastTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.active)) {
      query["Active"] = request.active;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "SetupBroadcastTables",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetupBroadcastTablesResponse>(await this.callApi(params, req, runtime), new $_model.SetupBroadcastTablesResponse({}));
  }

  /**
   * Configures a broadcast table for a database.
   * 
   * @param request - SetupBroadcastTablesRequest
   * @returns SetupBroadcastTablesResponse
   */
  async setupBroadcastTables(request: $_model.SetupBroadcastTablesRequest): Promise<$_model.SetupBroadcastTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupBroadcastTablesWithOptions(request, runtime);
  }

  /**
   * @param request - SetupDrdsParamsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupDrdsParamsResponse
   */
  async setupDrdsParamsWithOptions(request: $_model.SetupDrdsParamsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetupDrdsParamsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.paramLevel)) {
      query["ParamLevel"] = request.paramLevel;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupDrdsParams",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetupDrdsParamsResponse>(await this.callApi(params, req, runtime), new $_model.SetupDrdsParamsResponse({}));
  }

  /**
   * @param request - SetupDrdsParamsRequest
   * @returns SetupDrdsParamsResponse
   */
  async setupDrdsParams(request: $_model.SetupDrdsParamsRequest): Promise<$_model.SetupDrdsParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupDrdsParamsWithOptions(request, runtime);
  }

  /**
   * Enables the table recycle bin for a database.
   * 
   * @param request - SetupRecycleBinStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupRecycleBinStatusResponse
   */
  async setupRecycleBinStatusWithOptions(request: $_model.SetupRecycleBinStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetupRecycleBinStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.statusAction)) {
      query["StatusAction"] = request.statusAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetupRecycleBinStatus",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetupRecycleBinStatusResponse>(await this.callApi(params, req, runtime), new $_model.SetupRecycleBinStatusResponse({}));
  }

  /**
   * Enables the table recycle bin for a database.
   * 
   * @param request - SetupRecycleBinStatusRequest
   * @returns SetupRecycleBinStatusResponse
   */
  async setupRecycleBinStatus(request: $_model.SetupRecycleBinStatusRequest): Promise<$_model.SetupRecycleBinStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupRecycleBinStatusWithOptions(request, runtime);
  }

  /**
   * @param request - SetupTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetupTableResponse
   */
  async setupTableWithOptions(request: $_model.SetupTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetupTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowFullTableScan)) {
      query["AllowFullTableScan"] = request.allowFullTableScan;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
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
      action: "SetupTable",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetupTableResponse>(await this.callApi(params, req, runtime), new $_model.SetupTableResponse({}));
  }

  /**
   * @param request - SetupTableRequest
   * @returns SetupTableResponse
   */
  async setupTable(request: $_model.SetupTableRequest): Promise<$_model.SetupTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setupTableWithOptions(request, runtime);
  }

  /**
   * @param request - StartRestoreRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartRestoreResponse
   */
  async startRestoreWithOptions(request: $_model.StartRestoreRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartRestoreResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupDbNames)) {
      query["BackupDbNames"] = request.backupDbNames;
    }

    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupLevel)) {
      query["BackupLevel"] = request.backupLevel;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartRestore",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartRestoreResponse>(await this.callApi(params, req, runtime), new $_model.StartRestoreResponse({}));
  }

  /**
   * @param request - StartRestoreRequest
   * @returns StartRestoreResponse
   */
  async startRestore(request: $_model.StartRestoreRequest): Promise<$_model.StartRestoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startRestoreWithOptions(request, runtime);
  }

  /**
   * Submits a cleanup task for the scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitCleanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitCleanTaskResponse
   */
  async submitCleanTaskWithOptions(request: $_model.SubmitCleanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitCleanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.expandType)) {
      query["ExpandType"] = request.expandType;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.parentJobId)) {
      query["ParentJobId"] = request.parentJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitCleanTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitCleanTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitCleanTaskResponse({}));
  }

  /**
   * Submits a cleanup task for the scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitCleanTaskRequest
   * @returns SubmitCleanTaskResponse
   */
  async submitCleanTask(request: $_model.SubmitCleanTaskRequest): Promise<$_model.SubmitCleanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitCleanTaskWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the hot-spot scale-out of a PolarDB-X database. The task is used to check the table that does not contain the primary key.
   * 
   * @param request - SubmitHotExpandPreCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotExpandPreCheckTaskResponse
   */
  async submitHotExpandPreCheckTaskWithOptions(request: $_model.SubmitHotExpandPreCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHotExpandPreCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.tableList)) {
      query["TableList"] = request.tableList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHotExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHotExpandPreCheckTaskResponse({}));
  }

  /**
   * Submits a precheck task for the hot-spot scale-out of a PolarDB-X database. The task is used to check the table that does not contain the primary key.
   * 
   * @param request - SubmitHotExpandPreCheckTaskRequest
   * @returns SubmitHotExpandPreCheckTaskResponse
   */
  async submitHotExpandPreCheckTask(request: $_model.SubmitHotExpandPreCheckTaskRequest): Promise<$_model.SubmitHotExpandPreCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHotExpandPreCheckTaskWithOptions(request, runtime);
  }

  /**
   * Submits a hot-spot scale-out task for a database.
   * 
   * @param request - SubmitHotExpandTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitHotExpandTaskResponse
   */
  async submitHotExpandTaskWithOptions(request: $_model.SubmitHotExpandTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitHotExpandTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.extendedMapping)) {
      query["ExtendedMapping"] = request.extendedMapping;
    }

    if (!$dara.isNull(request.instanceDbMapping)) {
      query["InstanceDbMapping"] = request.instanceDbMapping;
    }

    if (!$dara.isNull(request.mapping)) {
      query["Mapping"] = request.mapping;
    }

    if (!$dara.isNull(request.supperAccountMapping)) {
      query["SupperAccountMapping"] = request.supperAccountMapping;
    }

    if (!$dara.isNull(request.taskDesc)) {
      query["TaskDesc"] = request.taskDesc;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitHotExpandTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitHotExpandTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitHotExpandTaskResponse({}));
  }

  /**
   * Submits a hot-spot scale-out task for a database.
   * 
   * @param request - SubmitHotExpandTaskRequest
   * @returns SubmitHotExpandTaskResponse
   */
  async submitHotExpandTask(request: $_model.SubmitHotExpandTaskRequest): Promise<$_model.SubmitHotExpandTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitHotExpandTaskWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitSmoothExpandPreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmoothExpandPreCheckResponse
   */
  async submitSmoothExpandPreCheckWithOptions(request: $_model.SubmitSmoothExpandPreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmoothExpandPreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbInstType)) {
      query["DbInstType"] = request.dbInstType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmoothExpandPreCheck",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSmoothExpandPreCheckResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSmoothExpandPreCheckResponse({}));
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X database.
   * 
   * @param request - SubmitSmoothExpandPreCheckRequest
   * @returns SubmitSmoothExpandPreCheckResponse
   */
  async submitSmoothExpandPreCheck(request: $_model.SubmitSmoothExpandPreCheckRequest): Promise<$_model.SubmitSmoothExpandPreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckWithOptions(request, runtime);
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X 1.0 database.
   * 
   * @param request - SubmitSmoothExpandPreCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSmoothExpandPreCheckTaskResponse
   */
  async submitSmoothExpandPreCheckTaskWithOptions(request: $_model.SubmitSmoothExpandPreCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSmoothExpandPreCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSmoothExpandPreCheckTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSmoothExpandPreCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSmoothExpandPreCheckTaskResponse({}));
  }

  /**
   * Submits a precheck task for the smooth scale-out of a PolarDB-X 1.0 database.
   * 
   * @param request - SubmitSmoothExpandPreCheckTaskRequest
   * @returns SubmitSmoothExpandPreCheckTaskResponse
   */
  async submitSmoothExpandPreCheckTask(request: $_model.SubmitSmoothExpandPreCheckTaskRequest): Promise<$_model.SubmitSmoothExpandPreCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSmoothExpandPreCheckTaskWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSqlFlashbackTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSqlFlashbackTaskResponse
   */
  async submitSqlFlashbackTaskWithOptions(request: $_model.SubmitSqlFlashbackTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSqlFlashbackTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.recallRestoreType)) {
      query["RecallRestoreType"] = request.recallRestoreType;
    }

    if (!$dara.isNull(request.recallType)) {
      query["RecallType"] = request.recallType;
    }

    if (!$dara.isNull(request.sqlPk)) {
      query["SqlPk"] = request.sqlPk;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.traceId)) {
      query["TraceId"] = request.traceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSqlFlashbackTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSqlFlashbackTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSqlFlashbackTaskResponse({}));
  }

  /**
   * @param request - SubmitSqlFlashbackTaskRequest
   * @returns SubmitSqlFlashbackTaskResponse
   */
  async submitSqlFlashbackTask(request: $_model.SubmitSqlFlashbackTaskRequest): Promise<$_model.SubmitSqlFlashbackTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSqlFlashbackTaskWithOptions(request, runtime);
  }

  /**
   * Switches the mode of broadcast tables from the multi-write mode to the asynchronous link mode.
   * 
   * @param request - SwitchGlobalBroadcastTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchGlobalBroadcastTypeResponse
   */
  async switchGlobalBroadcastTypeWithOptions(request: $_model.SwitchGlobalBroadcastTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchGlobalBroadcastTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SwitchGlobalBroadcastType",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchGlobalBroadcastTypeResponse>(await this.callApi(params, req, runtime), new $_model.SwitchGlobalBroadcastTypeResponse({}));
  }

  /**
   * Switches the mode of broadcast tables from the multi-write mode to the asynchronous link mode.
   * 
   * @param request - SwitchGlobalBroadcastTypeRequest
   * @returns SwitchGlobalBroadcastTypeResponse
   */
  async switchGlobalBroadcastType(request: $_model.SwitchGlobalBroadcastTypeRequest): Promise<$_model.SwitchGlobalBroadcastTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchGlobalBroadcastTypeWithOptions(request, runtime);
  }

  /**
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

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
      version: "2019-01-23",
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
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-01-23",
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
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Changes the network type of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpdateInstanceNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceNetworkResponse
   */
  async updateInstanceNetworkWithOptions(request: $_model.UpdateInstanceNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classicExpiredDays)) {
      query["ClassicExpiredDays"] = request.classicExpiredDays;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.retainClassic)) {
      query["RetainClassic"] = request.retainClassic;
    }

    if (!$dara.isNull(request.srcInstanceNetworkType)) {
      query["SrcInstanceNetworkType"] = request.srcInstanceNetworkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceNetwork",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceNetworkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceNetworkResponse({}));
  }

  /**
   * Changes the network type of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpdateInstanceNetworkRequest
   * @returns UpdateInstanceNetworkResponse
   */
  async updateInstanceNetwork(request: $_model.UpdateInstanceNetworkRequest): Promise<$_model.UpdateInstanceNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceNetworkWithOptions(request, runtime);
  }

  /**
   * Updates the specifications of a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - UpdatePrivateRdsClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateRdsClassResponse
   */
  async updatePrivateRdsClassWithOptions(request: $_model.UpdatePrivateRdsClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateRdsClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoUseCoupon)) {
      query["AutoUseCoupon"] = request.autoUseCoupon;
    }

    if (!$dara.isNull(request.DBInstanceId)) {
      query["DBInstanceId"] = request.DBInstanceId;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.prePayDuration)) {
      query["PrePayDuration"] = request.prePayDuration;
    }

    if (!$dara.isNull(request.rdsClass)) {
      query["RdsClass"] = request.rdsClass;
    }

    if (!$dara.isNull(request.storage)) {
      query["Storage"] = request.storage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateRdsClass",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateRdsClassResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateRdsClassResponse({}));
  }

  /**
   * Updates the specifications of a custom ApsaraDB RDS instance at the storage layer.
   * 
   * @param request - UpdatePrivateRdsClassRequest
   * @returns UpdatePrivateRdsClassResponse
   */
  async updatePrivateRdsClass(request: $_model.UpdatePrivateRdsClassRequest): Promise<$_model.UpdatePrivateRdsClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePrivateRdsClassWithOptions(request, runtime);
  }

  /**
   * @param request - UpdateResourceGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupAttributeResponse
   */
  async updateResourceGroupAttributeWithOptions(request: $_model.UpdateResourceGroupAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceGroupAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroupAttribute",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceGroupAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceGroupAttributeResponse({}));
  }

  /**
   * @param request - UpdateResourceGroupAttributeRequest
   * @returns UpdateResourceGroupAttributeResponse
   */
  async updateResourceGroupAttribute(request: $_model.UpdateResourceGroupAttributeRequest): Promise<$_model.UpdateResourceGroupAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateResourceGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Upgrades the version of a column-oriented storage instance of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpgradeHiStoreInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeHiStoreInstanceResponse
   */
  async upgradeHiStoreInstanceWithOptions(request: $_model.UpgradeHiStoreInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeHiStoreInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.historeInstanceId)) {
      query["HistoreInstanceId"] = request.historeInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeHiStoreInstance",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeHiStoreInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeHiStoreInstanceResponse({}));
  }

  /**
   * Upgrades the version of a column-oriented storage instance of a PolarDB-X 1.0 instance.
   * 
   * @param request - UpgradeHiStoreInstanceRequest
   * @returns UpgradeHiStoreInstanceResponse
   */
  async upgradeHiStoreInstance(request: $_model.UpgradeHiStoreInstanceRequest): Promise<$_model.UpgradeHiStoreInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeHiStoreInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - UpgradeInstanceVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersionWithOptions(request: $_model.UpgradeInstanceVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeInstanceVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rpm)) {
      query["Rpm"] = request.rpm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInstanceVersion",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeInstanceVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeInstanceVersionResponse({}));
  }

  /**
   * @param request - UpgradeInstanceVersionRequest
   * @returns UpgradeInstanceVersionResponse
   */
  async upgradeInstanceVersion(request: $_model.UpgradeInstanceVersionRequest): Promise<$_model.UpgradeInstanceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeInstanceVersionWithOptions(request, runtime);
  }

  /**
   * @param request - ValidateShardTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateShardTaskResponse
   */
  async validateShardTaskWithOptions(request: $_model.ValidateShardTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateShardTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.drdsInstanceId)) {
      query["DrdsInstanceId"] = request.drdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceTableName)) {
      query["SourceTableName"] = request.sourceTableName;
    }

    if (!$dara.isNull(request.targetTableName)) {
      query["TargetTableName"] = request.targetTableName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateShardTask",
      version: "2019-01-23",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateShardTaskResponse>(await this.callApi(params, req, runtime), new $_model.ValidateShardTaskResponse({}));
  }

  /**
   * @param request - ValidateShardTaskRequest
   * @returns ValidateShardTaskResponse
   */
  async validateShardTask(request: $_model.ValidateShardTaskRequest): Promise<$_model.ValidateShardTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateShardTaskWithOptions(request, runtime);
  }

}
