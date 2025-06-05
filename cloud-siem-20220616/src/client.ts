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
    this._endpoint = this.getEndpoint("cloud-siem", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a data source to a cloud account that is added to the threat analysis feature.
   * 
   * @param request - AddDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataSourceResponse
   */
  async addDataSourceWithOptions(request: $_model.AddDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceName)) {
      body["DataSourceInstanceName"] = request.dataSourceInstanceName;
    }

    if (!$dara.isNull(request.dataSourceInstanceParams)) {
      body["DataSourceInstanceParams"] = request.dataSourceInstanceParams;
    }

    if (!$dara.isNull(request.dataSourceInstanceRemark)) {
      body["DataSourceInstanceRemark"] = request.dataSourceInstanceRemark;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.AddDataSourceResponse({}));
  }

  /**
   * Adds a data source to a cloud account that is added to the threat analysis feature.
   * 
   * @param request - AddDataSourceRequest
   * @returns AddDataSourceResponse
   */
  async addDataSource(request: $_model.AddDataSourceRequest): Promise<$_model.AddDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  /**
   * Adds logs of a cloud account to the threat analysis feature.
   * 
   * @param request - AddDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddDataSourceLogResponse
   */
  async addDataSourceLogWithOptions(request: $_model.AddDataSourceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddDataSourceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.dataSourceInstanceLogs)) {
      body["DataSourceInstanceLogs"] = request.dataSourceInstanceLogs;
    }

    if (!$dara.isNull(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddDataSourceLogResponse>(await this.callApi(params, req, runtime), new $_model.AddDataSourceLogResponse({}));
  }

  /**
   * Adds logs of a cloud account to the threat analysis feature.
   * 
   * @param request - AddDataSourceLogRequest
   * @returns AddDataSourceLogResponse
   */
  async addDataSourceLog(request: $_model.AddDataSourceLogRequest): Promise<$_model.AddDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Adds the logs of a cloud service within a cloud account to the threat analysis feature for alert and event anslysis.
   * 
   * @param request - AddUserSourceLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddUserSourceLogConfigResponse
   */
  async addUserSourceLogConfigWithOptions(request: $_model.AddUserSourceLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddUserSourceLogConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deleted)) {
      body["Deleted"] = request.deleted;
    }

    if (!$dara.isNull(request.disPlayLine)) {
      body["DisPlayLine"] = request.disPlayLine;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceLogCode)) {
      body["SourceLogCode"] = request.sourceLogCode;
    }

    if (!$dara.isNull(request.sourceLogInfo)) {
      body["SourceLogInfo"] = request.sourceLogInfo;
    }

    if (!$dara.isNull(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddUserSourceLogConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddUserSourceLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.AddUserSourceLogConfigResponse({}));
  }

  /**
   * Adds the logs of a cloud service within a cloud account to the threat analysis feature for alert and event anslysis.
   * 
   * @param request - AddUserSourceLogConfigRequest
   * @returns AddUserSourceLogConfigResponse
   */
  async addUserSourceLogConfig(request: $_model.AddUserSourceLogConfigRequest): Promise<$_model.AddUserSourceLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserSourceLogConfigWithOptions(request, runtime);
  }

  /**
   * Adds a third-party cloud account that is displayed on the Multi-cloud assets tab of the Feature Settings page to the threat analysis feature.
   * 
   * @param request - BindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindAccountResponse
   */
  async bindAccountWithOptions(request: $_model.BindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindAccount",
      version: "2022-06-16",
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
   * Adds a third-party cloud account that is displayed on the Multi-cloud assets tab of the Feature Settings page to the threat analysis feature.
   * 
   * @param request - BindAccountRequest
   * @returns BindAccountResponse
   */
  async bindAccount(request: $_model.BindAccountRequest): Promise<$_model.BindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  /**
   * Disables the log delivery feature for a cloud service.
   * 
   * @param request - CloseDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDeliveryResponse
   */
  async closeDeliveryWithOptions(request: $_model.CloseDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.CloseDeliveryResponse({}));
  }

  /**
   * Disables the log delivery feature for a cloud service.
   * 
   * @param request - CloseDeliveryRequest
   * @returns CloseDeliveryResponse
   */
  async closeDelivery(request: $_model.CloseDeliveryRequest): Promise<$_model.CloseDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeDeliveryWithOptions(request, runtime);
  }

  /**
   * Deletes the automated response rule with a specified ID.
   * 
   * @param request - DeleteAutomateResponseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAutomateResponseConfigResponse
   */
  async deleteAutomateResponseConfigWithOptions(request: $_model.DeleteAutomateResponseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAutomateResponseConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAutomateResponseConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAutomateResponseConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAutomateResponseConfigResponse({}));
  }

  /**
   * Deletes the automated response rule with a specified ID.
   * 
   * @param request - DeleteAutomateResponseConfigRequest
   * @returns DeleteAutomateResponseConfigResponse
   */
  async deleteAutomateResponseConfig(request: $_model.DeleteAutomateResponseConfigRequest): Promise<$_model.DeleteAutomateResponseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Removes a third-party cloud account that is added to the threat analysis feature by using its AccessKey ID. You can add another cloud account based on your business requirements.
   * 
   * @param request - DeleteBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBindAccountResponse
   */
  async deleteBindAccountWithOptions(request: $_model.DeleteBindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBindAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.bindId)) {
      body["BindId"] = request.bindId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBindAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBindAccountResponse({}));
  }

  /**
   * Removes a third-party cloud account that is added to the threat analysis feature by using its AccessKey ID. You can add another cloud account based on your business requirements.
   * 
   * @param request - DeleteBindAccountRequest
   * @returns DeleteBindAccountResponse
   */
  async deleteBindAccount(request: $_model.DeleteBindAccountRequest): Promise<$_model.DeleteBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBindAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a rule by rule ID.
   * 
   * @param request - DeleteCustomizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomizeRuleResponse
   */
  async deleteCustomizeRuleWithOptions(request: $_model.DeleteCustomizeRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomizeRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomizeRule",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomizeRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomizeRuleResponse({}));
  }

  /**
   * Deletes a rule by rule ID.
   * 
   * @param request - DeleteCustomizeRuleRequest
   * @returns DeleteCustomizeRuleResponse
   */
  async deleteCustomizeRule(request: $_model.DeleteCustomizeRuleRequest): Promise<$_model.DeleteCustomizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizeRuleWithOptions(request, runtime);
  }

  /**
   * Removes a data source that is no longer required.
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * Removes a data source that is no longer required.
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Removes a log.
   * 
   * @param request - DeleteDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceLogResponse
   */
  async deleteDataSourceLogWithOptions(request: $_model.DeleteDataSourceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.logInstanceId)) {
      body["LogInstanceId"] = request.logInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceLogResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceLogResponse({}));
  }

  /**
   * Removes a log.
   * 
   * @param request - DeleteDataSourceLogRequest
   * @returns DeleteDataSourceLogResponse
   */
  async deleteDataSourceLog(request: $_model.DeleteDataSourceLogRequest): Promise<$_model.DeleteDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Deletes an alert whitelist rule with a specified ID.
   * 
   * @param request - DeleteWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWhiteRuleListResponse
   */
  async deleteWhiteRuleListWithOptions(request: $_model.DeleteWhiteRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWhiteRuleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWhiteRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWhiteRuleListResponse({}));
  }

  /**
   * Deletes an alert whitelist rule with a specified ID.
   * 
   * @param request - DeleteWhiteRuleListRequest
   * @returns DeleteWhiteRuleListResponse
   */
  async deleteWhiteRuleList(request: $_model.DeleteWhiteRuleListRequest): Promise<$_model.DeleteWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Queries the aggregate functions that are supported for a custom rule.
   * 
   * @param request - DescribeAggregateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAggregateFunctionResponse
   */
  async describeAggregateFunctionWithOptions(request: $_model.DescribeAggregateFunctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAggregateFunctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAggregateFunction",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAggregateFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAggregateFunctionResponse({}));
  }

  /**
   * Queries the aggregate functions that are supported for a custom rule.
   * 
   * @param request - DescribeAggregateFunctionRequest
   * @returns DescribeAggregateFunctionResponse
   */
  async describeAggregateFunction(request: $_model.DescribeAggregateFunctionRequest): Promise<$_model.DescribeAggregateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAggregateFunctionWithOptions(request, runtime);
  }

  /**
   * Queries the scenarios in which an alert needs to be added to the whitelist.
   * 
   * @param request - DescribeAlertSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSceneResponse
   */
  async describeAlertSceneWithOptions(request: $_model.DescribeAlertSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertSceneResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertScene",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertSceneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertSceneResponse({}));
  }

  /**
   * Queries the scenarios in which an alert needs to be added to the whitelist.
   * 
   * @param request - DescribeAlertSceneRequest
   * @returns DescribeAlertSceneResponse
   */
  async describeAlertScene(request: $_model.DescribeAlertSceneRequest): Promise<$_model.DescribeAlertSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSceneWithOptions(request, runtime);
  }

  /**
   * Queries the scenarios and objects that can be added to an alert whitelist rule.
   * 
   * @param request - DescribeAlertSceneByEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSceneByEventResponse
   */
  async describeAlertSceneByEventWithOptions(request: $_model.DescribeAlertSceneByEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertSceneByEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertSceneByEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertSceneByEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertSceneByEventResponse({}));
  }

  /**
   * Queries the scenarios and objects that can be added to an alert whitelist rule.
   * 
   * @param request - DescribeAlertSceneByEventRequest
   * @returns DescribeAlertSceneByEventResponse
   */
  async describeAlertSceneByEvent(request: $_model.DescribeAlertSceneByEventRequest): Promise<$_model.DescribeAlertSceneByEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSceneByEventWithOptions(request, runtime);
  }

  /**
   * Queries alert data sources.
   * 
   * @param request - DescribeAlertSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSourceResponse
   */
  async describeAlertSourceWithOptions(request: $_model.DescribeAlertSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertSourceResponse({}));
  }

  /**
   * Queries alert data sources.
   * 
   * @param request - DescribeAlertSourceRequest
   * @returns DescribeAlertSourceResponse
   */
  async describeAlertSource(request: $_model.DescribeAlertSourceRequest): Promise<$_model.DescribeAlertSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSourceWithOptions(request, runtime);
  }

  /**
   * Queries the data sources of the alert that is associated with an event.
   * 
   * @param request - DescribeAlertSourceWithEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertSourceWithEventResponse
   */
  async describeAlertSourceWithEventWithOptions(request: $_model.DescribeAlertSourceWithEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertSourceWithEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertSourceWithEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertSourceWithEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertSourceWithEventResponse({}));
  }

  /**
   * Queries the data sources of the alert that is associated with an event.
   * 
   * @param request - DescribeAlertSourceWithEventRequest
   * @returns DescribeAlertSourceWithEventResponse
   */
  async describeAlertSourceWithEvent(request: $_model.DescribeAlertSourceWithEventRequest): Promise<$_model.DescribeAlertSourceWithEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSourceWithEventWithOptions(request, runtime);
  }

  /**
   * Queries the threat types that you can select when you create a custom rule.
   * 
   * @param request - DescribeAlertTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertTypeResponse
   */
  async describeAlertTypeWithOptions(request: $_model.DescribeAlertTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertType",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertTypeResponse({}));
  }

  /**
   * Queries the threat types that you can select when you create a custom rule.
   * 
   * @param request - DescribeAlertTypeRequest
   * @returns DescribeAlertTypeResponse
   */
  async describeAlertType(request: $_model.DescribeAlertTypeRequest): Promise<$_model.DescribeAlertTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertTypeWithOptions(request, runtime);
  }

  /**
   * Queries alerts within your account.
   * 
   * @param request - DescribeAlertsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsResponse
   */
  async describeAlertsWithOptions(request: $_model.DescribeAlertsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertTitle)) {
      body["AlertTitle"] = request.alertTitle;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.alertUuid)) {
      body["AlertUuid"] = request.alertUuid;
    }

    if (!$dara.isNull(request.assetId)) {
      body["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.assetName)) {
      body["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityName)) {
      body["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.isDefend)) {
      body["IsDefend"] = request.isDefend;
    }

    if (!$dara.isNull(request.labelType)) {
      body["LabelType"] = request.labelType;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlerts",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertsResponse({}));
  }

  /**
   * Queries alerts within your account.
   * 
   * @param request - DescribeAlertsRequest
   * @returns DescribeAlertsResponse
   */
  async describeAlerts(request: $_model.DescribeAlertsRequest): Promise<$_model.DescribeAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithOptions(request, runtime);
  }

  /**
   * Queries the number of alerts of different severities.
   * 
   * @param request - DescribeAlertsCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsCountResponse
   */
  async describeAlertsCountWithOptions(request: $_model.DescribeAlertsCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertsCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.queryType)) {
      body["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertsCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertsCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertsCountResponse({}));
  }

  /**
   * Queries the number of alerts of different severities.
   * 
   * @param request - DescribeAlertsCountRequest
   * @returns DescribeAlertsCountResponse
   */
  async describeAlertsCount(request: $_model.DescribeAlertsCountRequest): Promise<$_model.DescribeAlertsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsCountWithOptions(request, runtime);
  }

  /**
   * Queries the alerts that are associated with an entity.
   * 
   * @param request - DescribeAlertsWithEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsWithEntityResponse
   */
  async describeAlertsWithEntityWithOptions(request: $_model.DescribeAlertsWithEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertsWithEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityUuid)) {
      body["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertsWithEntity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertsWithEntityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertsWithEntityResponse({}));
  }

  /**
   * Queries the alerts that are associated with an entity.
   * 
   * @param request - DescribeAlertsWithEntityRequest
   * @returns DescribeAlertsWithEntityResponse
   */
  async describeAlertsWithEntity(request: $_model.DescribeAlertsWithEntityRequest): Promise<$_model.DescribeAlertsWithEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithEntityWithOptions(request, runtime);
  }

  /**
   * Queries the alerts that are associated with an event.
   * 
   * @param request - DescribeAlertsWithEventRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAlertsWithEventResponse
   */
  async describeAlertsWithEventWithOptions(request: $_model.DescribeAlertsWithEventRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAlertsWithEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertTitle)) {
      body["AlertTitle"] = request.alertTitle;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.assetId)) {
      body["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.assetName)) {
      body["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityName)) {
      body["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.isDefend)) {
      body["IsDefend"] = request.isDefend;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAlertsWithEvent",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAlertsWithEventResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAlertsWithEventResponse({}));
  }

  /**
   * Queries the alerts that are associated with an event.
   * 
   * @param request - DescribeAlertsWithEventRequest
   * @returns DescribeAlertsWithEventResponse
   */
  async describeAlertsWithEvent(request: $_model.DescribeAlertsWithEventRequest): Promise<$_model.DescribeAlertsWithEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithEventWithOptions(request, runtime);
  }

  /**
   * Checks whether the security information and event management (SIEM) system is granted the required permissions to access other cloud resources within your Alibaba Cloud account and whether the AliyunServiceRoleForSasCloudSiem service-linked role is created.
   * 
   * @param request - DescribeAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuthResponse
   */
  async describeAuthWithOptions(request: $_model.DescribeAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuthResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuth",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuthResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuthResponse({}));
  }

  /**
   * Checks whether the security information and event management (SIEM) system is granted the required permissions to access other cloud resources within your Alibaba Cloud account and whether the AliyunServiceRoleForSasCloudSiem service-linked role is created.
   * 
   * @param request - DescribeAuthRequest
   * @returns DescribeAuthResponse
   */
  async describeAuth(request: $_model.DescribeAuthRequest): Promise<$_model.DescribeAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuthWithOptions(request, runtime);
  }

  /**
   * Queries the number of automated response rules.
   * 
   * @param request - DescribeAutomateResponseConfigCounterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigCounterResponse
   */
  async describeAutomateResponseConfigCounterWithOptions(request: $_model.DescribeAutomateResponseConfigCounterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutomateResponseConfigCounterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutomateResponseConfigCounter",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutomateResponseConfigCounterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutomateResponseConfigCounterResponse({}));
  }

  /**
   * Queries the number of automated response rules.
   * 
   * @param request - DescribeAutomateResponseConfigCounterRequest
   * @returns DescribeAutomateResponseConfigCounterResponse
   */
  async describeAutomateResponseConfigCounter(request: $_model.DescribeAutomateResponseConfigCounterRequest): Promise<$_model.DescribeAutomateResponseConfigCounterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigCounterWithOptions(request, runtime);
  }

  /**
   * Queries the configurable fields and operators of an automated response rule.
   * 
   * @param request - DescribeAutomateResponseConfigFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigFeatureResponse
   */
  async describeAutomateResponseConfigFeatureWithOptions(request: $_model.DescribeAutomateResponseConfigFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutomateResponseConfigFeatureResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutomateResponseConfigFeature",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutomateResponseConfigFeatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutomateResponseConfigFeatureResponse({}));
  }

  /**
   * Queries the configurable fields and operators of an automated response rule.
   * 
   * @param request - DescribeAutomateResponseConfigFeatureRequest
   * @returns DescribeAutomateResponseConfigFeatureResponse
   */
  async describeAutomateResponseConfigFeature(request: $_model.DescribeAutomateResponseConfigFeatureRequest): Promise<$_model.DescribeAutomateResponseConfigFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigFeatureWithOptions(request, runtime);
  }

  /**
   * Queries user-defined playbooks.
   * 
   * @param request - DescribeAutomateResponseConfigPlayBooksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutomateResponseConfigPlayBooksResponse
   */
  async describeAutomateResponseConfigPlayBooksWithOptions(request: $_model.DescribeAutomateResponseConfigPlayBooksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutomateResponseConfigPlayBooksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!$dara.isNull(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutomateResponseConfigPlayBooks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutomateResponseConfigPlayBooksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutomateResponseConfigPlayBooksResponse({}));
  }

  /**
   * Queries user-defined playbooks.
   * 
   * @param request - DescribeAutomateResponseConfigPlayBooksRequest
   * @returns DescribeAutomateResponseConfigPlayBooksResponse
   */
  async describeAutomateResponseConfigPlayBooks(request: $_model.DescribeAutomateResponseConfigPlayBooksRequest): Promise<$_model.DescribeAutomateResponseConfigPlayBooksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigPlayBooksWithOptions(request, runtime);
  }

  /**
   * Queries the assets that are associated with an event.
   * 
   * @param request - DescribeCloudSiemAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemAssetsResponse
   */
  async describeCloudSiemAssetsWithOptions(request: $_model.DescribeCloudSiemAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudSiemAssetsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetName)) {
      body["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.assetType)) {
      body["AssetType"] = request.assetType;
    }

    if (!$dara.isNull(request.assetUuid)) {
      body["AssetUuid"] = request.assetUuid;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudSiemAssets",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudSiemAssetsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudSiemAssetsResponse({}));
  }

  /**
   * Queries the assets that are associated with an event.
   * 
   * @param request - DescribeCloudSiemAssetsRequest
   * @returns DescribeCloudSiemAssetsResponse
   */
  async describeCloudSiemAssets(request: $_model.DescribeCloudSiemAssetsRequest): Promise<$_model.DescribeCloudSiemAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets that are associated with an event by asset type.
   * 
   * @param request - DescribeCloudSiemAssetsCounterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemAssetsCounterResponse
   */
  async describeCloudSiemAssetsCounterWithOptions(request: $_model.DescribeCloudSiemAssetsCounterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudSiemAssetsCounterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudSiemAssetsCounter",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudSiemAssetsCounterResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudSiemAssetsCounterResponse({}));
  }

  /**
   * Queries the number of assets that are associated with an event by asset type.
   * 
   * @param request - DescribeCloudSiemAssetsCounterRequest
   * @returns DescribeCloudSiemAssetsCounterResponse
   */
  async describeCloudSiemAssetsCounter(request: $_model.DescribeCloudSiemAssetsCounterRequest): Promise<$_model.DescribeCloudSiemAssetsCounterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsCounterWithOptions(request, runtime);
  }

  /**
   * Queries the details of an event.
   * 
   * @param request - DescribeCloudSiemEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemEventDetailResponse
   */
  async describeCloudSiemEventDetailWithOptions(request: $_model.DescribeCloudSiemEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudSiemEventDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudSiemEventDetail",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudSiemEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudSiemEventDetailResponse({}));
  }

  /**
   * Queries the details of an event.
   * 
   * @param request - DescribeCloudSiemEventDetailRequest
   * @returns DescribeCloudSiemEventDetailResponse
   */
  async describeCloudSiemEventDetail(request: $_model.DescribeCloudSiemEventDetailRequest): Promise<$_model.DescribeCloudSiemEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries events in SIEM.
   * 
   * @param request - DescribeCloudSiemEventsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCloudSiemEventsResponse
   */
  async describeCloudSiemEventsWithOptions(request: $_model.DescribeCloudSiemEventsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCloudSiemEventsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetId)) {
      body["AssetId"] = request.assetId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityUuid)) {
      body["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.eventName)) {
      body["EventName"] = request.eventName;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.threadLevel)) {
      body["ThreadLevel"] = request.threadLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCloudSiemEvents",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCloudSiemEventsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCloudSiemEventsResponse({}));
  }

  /**
   * Queries events in SIEM.
   * 
   * @param request - DescribeCloudSiemEventsRequest
   * @returns DescribeCloudSiemEventsResponse
   */
  async describeCloudSiemEvents(request: $_model.DescribeCloudSiemEventsRequest): Promise<$_model.DescribeCloudSiemEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemEventsWithOptions(request, runtime);
  }

  /**
   * Queries the number of custom rules.
   * 
   * @param request - DescribeCustomizeRuleCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleCountResponse
   */
  async describeCustomizeRuleCountWithOptions(request: $_model.DescribeCustomizeRuleCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomizeRuleCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomizeRuleCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomizeRuleCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomizeRuleCountResponse({}));
  }

  /**
   * Queries the number of custom rules.
   * 
   * @param request - DescribeCustomizeRuleCountRequest
   * @returns DescribeCustomizeRuleCountResponse
   */
  async describeCustomizeRuleCount(request: $_model.DescribeCustomizeRuleCountRequest): Promise<$_model.DescribeCustomizeRuleCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizeRuleCountWithOptions(request, runtime);
  }

  /**
   * Queries the historical simulation data that is used in a simulation test scenario.
   * 
   * @param request - DescribeCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleTestResponse
   */
  async describeCustomizeRuleTestWithOptions(request: $_model.DescribeCustomizeRuleTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomizeRuleTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomizeRuleTestResponse({}));
  }

  /**
   * Queries the historical simulation data that is used in a simulation test scenario.
   * 
   * @param request - DescribeCustomizeRuleTestRequest
   * @returns DescribeCustomizeRuleTestResponse
   */
  async describeCustomizeRuleTest(request: $_model.DescribeCustomizeRuleTestRequest): Promise<$_model.DescribeCustomizeRuleTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Queries the chart that displays the test results of business data for a custom rule.
   * 
   * @param request - DescribeCustomizeRuleTestHistogramRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomizeRuleTestHistogramResponse
   */
  async describeCustomizeRuleTestHistogramWithOptions(request: $_model.DescribeCustomizeRuleTestHistogramRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomizeRuleTestHistogramResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomizeRuleTestHistogram",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomizeRuleTestHistogramResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomizeRuleTestHistogramResponse({}));
  }

  /**
   * Queries the chart that displays the test results of business data for a custom rule.
   * 
   * @param request - DescribeCustomizeRuleTestHistogramRequest
   * @returns DescribeCustomizeRuleTestHistogramResponse
   */
  async describeCustomizeRuleTestHistogram(request: $_model.DescribeCustomizeRuleTestHistogramRequest): Promise<$_model.DescribeCustomizeRuleTestHistogramResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestHistogramWithOptions(request, runtime);
  }

  /**
   * Queries the details of a data source.
   * 
   * @param request - DescribeDataSourceInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceInstanceResponse
   */
  async describeDataSourceInstanceWithOptions(request: $_model.DescribeDataSourceInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSourceInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSourceInstance",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSourceInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSourceInstanceResponse({}));
  }

  /**
   * Queries the details of a data source.
   * 
   * @param request - DescribeDataSourceInstanceRequest
   * @returns DescribeDataSourceInstanceResponse
   */
  async describeDataSourceInstance(request: $_model.DescribeDataSourceInstanceRequest): Promise<$_model.DescribeDataSourceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourceInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the parameters of a data source.
   * 
   * @param request - DescribeDataSourceParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDataSourceParametersResponse
   */
  async describeDataSourceParametersWithOptions(request: $_model.DescribeDataSourceParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDataSourceParametersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDataSourceParameters",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDataSourceParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDataSourceParametersResponse({}));
  }

  /**
   * Queries the parameters of a data source.
   * 
   * @param request - DescribeDataSourceParametersRequest
   * @returns DescribeDataSourceParametersResponse
   */
  async describeDataSourceParameters(request: $_model.DescribeDataSourceParametersRequest): Promise<$_model.DescribeDataSourceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourceParametersWithOptions(request, runtime);
  }

  /**
   * Queries the list of entities and playbooks that need to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybookWithOptions(request: $_model.DescribeDisposeAndPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisposeAndPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.entityUuid)) {
      body["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDisposeAndPlaybook",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDisposeAndPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDisposeAndPlaybookResponse({}));
  }

  /**
   * Queries the list of entities and playbooks that need to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybook(request: $_model.DescribeDisposeAndPlaybookRequest): Promise<$_model.DescribeDisposeAndPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisposeAndPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the list of playbooks that are used by a handling policy.
   * 
   * @param request - DescribeDisposeStrategyPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisposeStrategyPlaybookResponse
   */
  async describeDisposeStrategyPlaybookWithOptions(request: $_model.DescribeDisposeStrategyPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisposeStrategyPlaybookResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDisposeStrategyPlaybook",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDisposeStrategyPlaybookResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDisposeStrategyPlaybookResponse({}));
  }

  /**
   * Queries the list of playbooks that are used by a handling policy.
   * 
   * @param request - DescribeDisposeStrategyPlaybookRequest
   * @returns DescribeDisposeStrategyPlaybookResponse
   */
  async describeDisposeStrategyPlaybook(request: $_model.DescribeDisposeStrategyPlaybookRequest): Promise<$_model.DescribeDisposeStrategyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisposeStrategyPlaybookWithOptions(request, runtime);
  }

  /**
   * Queries the details of an entity.
   * 
   * @param request - DescribeEntityInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEntityInfoResponse
   */
  async describeEntityInfoWithOptions(request: $_model.DescribeEntityInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEntityInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.entityIdentity)) {
      body["EntityIdentity"] = request.entityIdentity;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEntityInfo",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEntityInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEntityInfoResponse({}));
  }

  /**
   * Queries the details of an entity.
   * 
   * @param request - DescribeEntityInfoRequest
   * @returns DescribeEntityInfoResponse
   */
  async describeEntityInfo(request: $_model.DescribeEntityInfoRequest): Promise<$_model.DescribeEntityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEntityInfoWithOptions(request, runtime);
  }

  /**
   * Queries the number of events by type.
   * 
   * @param request - DescribeEventCountByThreatLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventCountByThreatLevelResponse
   */
  async describeEventCountByThreatLevelWithOptions(request: $_model.DescribeEventCountByThreatLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventCountByThreatLevelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventCountByThreatLevel",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventCountByThreatLevelResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventCountByThreatLevelResponse({}));
  }

  /**
   * Queries the number of events by type.
   * 
   * @param request - DescribeEventCountByThreatLevelRequest
   * @returns DescribeEventCountByThreatLevelResponse
   */
  async describeEventCountByThreatLevel(request: $_model.DescribeEventCountByThreatLevelRequest): Promise<$_model.DescribeEventCountByThreatLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventCountByThreatLevelWithOptions(request, runtime);
  }

  /**
   * Queries the handling policies of a historical event.
   * 
   * @param request - DescribeEventDisposeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEventDisposeResponse
   */
  async describeEventDisposeWithOptions(request: $_model.DescribeEventDisposeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEventDisposeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEventDispose",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEventDisposeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEventDisposeResponse({}));
  }

  /**
   * Queries the handling policies of a historical event.
   * 
   * @param request - DescribeEventDisposeRequest
   * @returns DescribeEventDisposeResponse
   */
  async describeEventDispose(request: $_model.DescribeEventDisposeRequest): Promise<$_model.DescribeEventDisposeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventDisposeWithOptions(request, runtime);
  }

  /**
   * Queries the number of logs that are added to the threat analysis feature.
   * 
   * @param request - DescribeImportedLogCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImportedLogCountResponse
   */
  async describeImportedLogCountWithOptions(request: $_model.DescribeImportedLogCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImportedLogCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImportedLogCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImportedLogCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImportedLogCountResponse({}));
  }

  /**
   * Queries the number of logs that are added to the threat analysis feature.
   * 
   * @param request - DescribeImportedLogCountRequest
   * @returns DescribeImportedLogCountResponse
   */
  async describeImportedLogCount(request: $_model.DescribeImportedLogCountRequest): Promise<$_model.DescribeImportedLogCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportedLogCountWithOptions(request, runtime);
  }

  /**
   * Queries the fields that can be configured for a custom rule.
   * 
   * @param request - DescribeLogFieldsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogFieldsResponse
   */
  async describeLogFieldsWithOptions(request: $_model.DescribeLogFieldsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogFieldsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogFields",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogFieldsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogFieldsResponse({}));
  }

  /**
   * Queries the fields that can be configured for a custom rule.
   * 
   * @param request - DescribeLogFieldsRequest
   * @returns DescribeLogFieldsResponse
   */
  async describeLogFields(request: $_model.DescribeLogFieldsRequest): Promise<$_model.DescribeLogFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogFieldsWithOptions(request, runtime);
  }

  /**
   * Queries the log sources that can be configured for a custom rule.
   * 
   * @param request - DescribeLogSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogSourceResponse
   */
  async describeLogSourceWithOptions(request: $_model.DescribeLogSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogSourceResponse({}));
  }

  /**
   * Queries the log sources that can be configured for a custom rule.
   * 
   * @param request - DescribeLogSourceRequest
   * @returns DescribeLogSourceResponse
   */
  async describeLogSource(request: $_model.DescribeLogSourceRequest): Promise<$_model.DescribeLogSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogSourceWithOptions(request, runtime);
  }

  /**
   * Queries the log types that can be configured for a custom rule.
   * 
   * @param request - DescribeLogTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogTypeResponse
   */
  async describeLogTypeWithOptions(request: $_model.DescribeLogTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogType",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogTypeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogTypeResponse({}));
  }

  /**
   * Queries the log types that can be configured for a custom rule.
   * 
   * @param request - DescribeLogTypeRequest
   * @returns DescribeLogTypeResponse
   */
  async describeLogType(request: $_model.DescribeLogTypeRequest): Promise<$_model.DescribeLogTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogTypeWithOptions(request, runtime);
  }

  /**
   * Queries the operator of a custom rule.
   * 
   * @param request - DescribeOperatorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorsResponse
   */
  async describeOperatorsWithOptions(request: $_model.DescribeOperatorsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.sceneType)) {
      body["SceneType"] = request.sceneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperators",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorsResponse({}));
  }

  /**
   * Queries the operator of a custom rule.
   * 
   * @param request - DescribeOperatorsRequest
   * @returns DescribeOperatorsResponse
   */
  async describeOperators(request: $_model.DescribeOperatorsRequest): Promise<$_model.DescribeOperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorsWithOptions(request, runtime);
  }

  /**
   * Queries the number of services that can be added to the threat analysis feature in Alibaba Cloud, Tenant Cloud, and Huawei Cloud.
   * 
   * @param request - DescribeProdCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProdCountResponse
   */
  async describeProdCountWithOptions(request: $_model.DescribeProdCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProdCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProdCount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProdCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProdCountResponse({}));
  }

  /**
   * Queries the number of services that can be added to the threat analysis feature in Alibaba Cloud, Tenant Cloud, and Huawei Cloud.
   * 
   * @param request - DescribeProdCountRequest
   * @returns DescribeProdCountResponse
   */
  async describeProdCount(request: $_model.DescribeProdCountRequest): Promise<$_model.DescribeProdCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProdCountWithOptions(request, runtime);
  }

  /**
   * Queries the list of users in the playbook scope.
   * 
   * @param request - DescribeScopeUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScopeUsersResponse
   */
  async describeScopeUsersWithOptions(request: $_model.DescribeScopeUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScopeUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScopeUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScopeUsersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScopeUsersResponse({}));
  }

  /**
   * Queries the list of users in the playbook scope.
   * 
   * @param request - DescribeScopeUsersRequest
   * @returns DescribeScopeUsersResponse
   */
  async describeScopeUsers(request: $_model.DescribeScopeUsersRequest): Promise<$_model.DescribeScopeUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScopeUsersWithOptions(request, runtime);
  }

  /**
   * Checks whether the threat analysis feature is authorized to access a resource directory.
   * 
   * @param request - DescribeServiceStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceStatusResponse
   */
  async describeServiceStatusWithOptions(request: $_model.DescribeServiceStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceStatusResponse({}));
  }

  /**
   * Checks whether the threat analysis feature is authorized to access a resource directory.
   * 
   * @param request - DescribeServiceStatusRequest
   * @returns DescribeServiceStatusResponse
   */
  async describeServiceStatus(request: $_model.DescribeServiceStatusRequest): Promise<$_model.DescribeServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceStatusWithOptions(request, runtime);
  }

  /**
   * Queries the status of the Logstores for the threat analysis feature in Simple Log Service on the user side.
   * 
   * @param request - DescribeStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeStorageResponse
   */
  async describeStorageWithOptions(request: $_model.DescribeStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeStorageResponse>(await this.callApi(params, req, runtime), new $_model.DescribeStorageResponse({}));
  }

  /**
   * Queries the status of the Logstores for the threat analysis feature in Simple Log Service on the user side.
   * 
   * @param request - DescribeStorageRequest
   * @returns DescribeStorageResponse
   */
  async describeStorage(request: $_model.DescribeStorageRequest): Promise<$_model.DescribeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStorageWithOptions(request, runtime);
  }

  /**
   * Checks whether the current Alibaba Cloud account or the management account of a resource directory is used to purchase the threat analysis feature.
   * 
   * @param request - DescribeUserBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserBuyStatusResponse
   */
  async describeUserBuyStatusWithOptions(request: $_model.DescribeUserBuyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserBuyStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserBuyStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserBuyStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserBuyStatusResponse({}));
  }

  /**
   * Checks whether the current Alibaba Cloud account or the management account of a resource directory is used to purchase the threat analysis feature.
   * 
   * @param request - DescribeUserBuyStatusRequest
   * @returns DescribeUserBuyStatusResponse
   */
  async describeUserBuyStatus(request: $_model.DescribeUserBuyStatusRequest): Promise<$_model.DescribeUserBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * Queries the protected domain names of the WAF instance for a user to which an entity belongs.
   * 
   * @param request - DescribeWafScopeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWafScopeResponse
   */
  async describeWafScopeWithOptions(request: $_model.DescribeWafScopeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWafScopeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWafScope",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWafScopeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWafScopeResponse({}));
  }

  /**
   * Queries the protected domain names of the WAF instance for a user to which an entity belongs.
   * 
   * @param request - DescribeWafScopeRequest
   * @returns DescribeWafScopeResponse
   */
  async describeWafScope(request: $_model.DescribeWafScopeRequest): Promise<$_model.DescribeWafScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWafScopeWithOptions(request, runtime);
  }

  /**
   * Queries a list of whitelist rules for alerts.
   * 
   * @param request - DescribeWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWhiteRuleListResponse
   */
  async describeWhiteRuleListWithOptions(request: $_model.DescribeWhiteRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWhiteRuleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertName)) {
      body["AlertName"] = request.alertName;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWhiteRuleListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWhiteRuleListResponse({}));
  }

  /**
   * Queries a list of whitelist rules for alerts.
   * 
   * @param request - DescribeWhiteRuleListRequest
   * @returns DescribeWhiteRuleListResponse
   */
  async describeWhiteRuleList(request: $_model.DescribeWhiteRuleListRequest): Promise<$_model.DescribeWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role named AliyunServiceRoleForSasCloudSiem for the threat analysis feature. The feature can assume this role to access cloud services.
   * 
   * @param request - EnableAccessForCloudSiemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAccessForCloudSiemResponse
   */
  async enableAccessForCloudSiemWithOptions(request: $_model.EnableAccessForCloudSiemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAccessForCloudSiemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoSubmit)) {
      body["AutoSubmit"] = request.autoSubmit;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAccessForCloudSiem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAccessForCloudSiemResponse>(await this.callApi(params, req, runtime), new $_model.EnableAccessForCloudSiemResponse({}));
  }

  /**
   * Creates a service-linked role named AliyunServiceRoleForSasCloudSiem for the threat analysis feature. The feature can assume this role to access cloud services.
   * 
   * @param request - EnableAccessForCloudSiemRequest
   * @returns EnableAccessForCloudSiemResponse
   */
  async enableAccessForCloudSiem(request: $_model.EnableAccessForCloudSiemRequest): Promise<$_model.EnableAccessForCloudSiemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAccessForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Authorizes the threat analysis feature to access a resource directory. This operation must be called by the management account of the resource directory.
   * 
   * @param request - EnableServiceForCloudSiemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableServiceForCloudSiemResponse
   */
  async enableServiceForCloudSiemWithOptions(request: $_model.EnableServiceForCloudSiemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableServiceForCloudSiemResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableServiceForCloudSiem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableServiceForCloudSiemResponse>(await this.callApi(params, req, runtime), new $_model.EnableServiceForCloudSiemResponse({}));
  }

  /**
   * Authorizes the threat analysis feature to access a resource directory. This operation must be called by the management account of the resource directory.
   * 
   * @param request - EnableServiceForCloudSiemRequest
   * @returns EnableServiceForCloudSiemResponse
   */
  async enableServiceForCloudSiem(request: $_model.EnableServiceForCloudSiemRequest): Promise<$_model.EnableServiceForCloudSiemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServiceForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Queries the storage capacity usage of the threat analysis feature and the purchased storage capacity
   * 
   * @param request - GetCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCapacityResponse
   */
  async getCapacityWithOptions(request: $_model.GetCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCapacityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCapacity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCapacityResponse>(await this.callApi(params, req, runtime), new $_model.GetCapacityResponse({}));
  }

  /**
   * Queries the storage capacity usage of the threat analysis feature and the purchased storage capacity
   * 
   * @param request - GetCapacityRequest
   * @returns GetCapacityResponse
   */
  async getCapacity(request: $_model.GetCapacityRequest): Promise<$_model.GetCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

  /**
   * Queries the storage configurations for the threat analysis feature on the user side.
   * 
   * @param request - GetStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageResponse
   */
  async getStorageWithOptions(request: $_model.GetStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageResponse({}));
  }

  /**
   * Queries the storage configurations for the threat analysis feature on the user side.
   * 
   * @param request - GetStorageRequest
   * @returns GetStorageResponse
   */
  async getStorage(request: $_model.GetStorageRequest): Promise<$_model.GetStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageWithOptions(request, runtime);
  }

  /**
   * Queries a list of AccessKey IDs of third-party cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListAccountAccessIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountAccessIdResponse
   */
  async listAccountAccessIdWithOptions(request: $_model.ListAccountAccessIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountAccessIdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountAccessId",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountAccessIdResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountAccessIdResponse({}));
  }

  /**
   * Queries a list of AccessKey IDs of third-party cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListAccountAccessIdRequest
   * @returns ListAccountAccessIdResponse
   */
  async listAccountAccessId(request: $_model.ListAccountAccessIdRequest): Promise<$_model.ListAccountAccessIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountAccessIdWithOptions(request, runtime);
  }

  /**
   * Query accounts by log.
   * 
   * @param request - ListAccountsByLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAccountsByLogResponse
   */
  async listAccountsByLogWithOptions(request: $_model.ListAccountsByLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAccountsByLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.logCodes)) {
      body["LogCodes"] = request.logCodes;
    }

    if (!$dara.isNull(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAccountsByLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAccountsByLogResponse>(await this.callApi(params, req, runtime), new $_model.ListAccountsByLogResponse({}));
  }

  /**
   * Query accounts by log.
   * 
   * @param request - ListAccountsByLogRequest
   * @returns ListAccountsByLogResponse
   */
  async listAccountsByLog(request: $_model.ListAccountsByLogRequest): Promise<$_model.ListAccountsByLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsByLogWithOptions(request, runtime);
  }

  /**
   * Queries a list of cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListAllProdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllProdsResponse
   */
  async listAllProdsWithOptions(request: $_model.ListAllProdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllProdsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllProds",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllProdsResponse>(await this.callApi(params, req, runtime), new $_model.ListAllProdsResponse({}));
  }

  /**
   * Queries a list of cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListAllProdsRequest
   * @returns ListAllProdsResponse
   */
  async listAllProds(request: $_model.ListAllProdsRequest): Promise<$_model.ListAllProdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllProdsWithOptions(request, runtime);
  }

  /**
   * Queries automated response rules.
   * 
   * @param request - ListAutomateResponseConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAutomateResponseConfigsResponse
   */
  async listAutomateResponseConfigsWithOptions(request: $_model.ListAutomateResponseConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAutomateResponseConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionType)) {
      body["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.responseRuleType)) {
      body["ResponseRuleType"] = request.responseRuleType;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAutomateResponseConfigs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAutomateResponseConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAutomateResponseConfigsResponse({}));
  }

  /**
   * Queries automated response rules.
   * 
   * @param request - ListAutomateResponseConfigsRequest
   * @returns ListAutomateResponseConfigsResponse
   */
  async listAutomateResponseConfigs(request: $_model.ListAutomateResponseConfigsRequest): Promise<$_model.ListAutomateResponseConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutomateResponseConfigsWithOptions(request, runtime);
  }

  /**
   * Queries a list of cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindAccountResponse
   */
  async listBindAccountWithOptions(request: $_model.ListBindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindAccountResponse>(await this.callApi(params, req, runtime), new $_model.ListBindAccountResponse({}));
  }

  /**
   * Queries a list of cloud accounts that are added to the threat analysis feature.
   * 
   * @param request - ListBindAccountRequest
   * @returns ListBindAccountResponse
   */
  async listBindAccount(request: $_model.ListBindAccountRequest): Promise<$_model.ListBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindAccountWithOptions(request, runtime);
  }

  /**
   * Queries a list of data sources that are added to the threat analysis feature.
   * 
   * @param request - ListBindDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBindDataSourcesResponse
   */
  async listBindDataSourcesWithOptions(request: $_model.ListBindDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBindDataSourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBindDataSources",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBindDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListBindDataSourcesResponse({}));
  }

  /**
   * Queries a list of data sources that are added to the threat analysis feature.
   * 
   * @param request - ListBindDataSourcesRequest
   * @returns ListBindDataSourcesResponse
   */
  async listBindDataSources(request: $_model.ListBindDataSourcesRequest): Promise<$_model.ListBindDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries custom rules.
   * 
   * @param request - ListCloudSiemCustomizeRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudSiemCustomizeRulesResponse
   */
  async listCloudSiemCustomizeRulesWithOptions(request: $_model.ListCloudSiemCustomizeRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudSiemCustomizeRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudSiemCustomizeRules",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudSiemCustomizeRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudSiemCustomizeRulesResponse({}));
  }

  /**
   * Queries custom rules.
   * 
   * @param request - ListCloudSiemCustomizeRulesRequest
   * @returns ListCloudSiemCustomizeRulesResponse
   */
  async listCloudSiemCustomizeRules(request: $_model.ListCloudSiemCustomizeRulesRequest): Promise<$_model.ListCloudSiemCustomizeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudSiemCustomizeRulesWithOptions(request, runtime);
  }

  /**
   * Queries predefined rules.
   * 
   * @param request - ListCloudSiemPredefinedRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCloudSiemPredefinedRulesResponse
   */
  async listCloudSiemPredefinedRulesWithOptions(request: $_model.ListCloudSiemPredefinedRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCloudSiemPredefinedRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.attCk)) {
      body["AttCk"] = request.attCk;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventTransferType)) {
      body["EventTransferType"] = request.eventTransferType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCloudSiemPredefinedRules",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCloudSiemPredefinedRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListCloudSiemPredefinedRulesResponse({}));
  }

  /**
   * Queries predefined rules.
   * 
   * @param request - ListCloudSiemPredefinedRulesRequest
   * @returns ListCloudSiemPredefinedRulesResponse
   */
  async listCloudSiemPredefinedRules(request: $_model.ListCloudSiemPredefinedRulesRequest): Promise<$_model.ListCloudSiemPredefinedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudSiemPredefinedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the test results of a custom rule.
   * 
   * @param request - ListCustomizeRuleTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomizeRuleTestResultResponse
   */
  async listCustomizeRuleTestResultWithOptions(request: $_model.ListCustomizeRuleTestResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomizeRuleTestResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.detectionRuleId)) {
      body["DetectionRuleId"] = request.detectionRuleId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.verifyType)) {
      body["VerifyType"] = request.verifyType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomizeRuleTestResult",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomizeRuleTestResultResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomizeRuleTestResultResponse({}));
  }

  /**
   * Queries the test results of a custom rule.
   * 
   * @param request - ListCustomizeRuleTestResultRequest
   * @returns ListCustomizeRuleTestResultResponse
   */
  async listCustomizeRuleTestResult(request: $_model.ListCustomizeRuleTestResultRequest): Promise<$_model.ListCustomizeRuleTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCustomizeRuleTestResultWithOptions(request, runtime);
  }

  /**
   * Queries the logs of a data source.
   * 
   * @param request - ListDataSourceLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceLogsResponse
   */
  async listDataSourceLogsWithOptions(request: $_model.ListDataSourceLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceLogsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceLogs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceLogsResponse({}));
  }

  /**
   * Queries the logs of a data source.
   * 
   * @param request - ListDataSourceLogsRequest
   * @returns ListDataSourceLogsResponse
   */
  async listDataSourceLogs(request: $_model.ListDataSourceLogsRequest): Promise<$_model.ListDataSourceLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceLogsWithOptions(request, runtime);
  }

  /**
   * Queries a list of data source types in third-party cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListDataSourceTypesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTypesResponse
   */
  async listDataSourceTypesWithOptions(request: $_model.ListDataSourceTypesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceTypesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTypes",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceTypesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceTypesResponse({}));
  }

  /**
   * Queries a list of data source types in third-party cloud services that can be added to the threat analysis feature.
   * 
   * @param request - ListDataSourceTypesRequest
   * @returns ListDataSourceTypesResponse
   */
  async listDataSourceTypes(request: $_model.ListDataSourceTypesRequest): Promise<$_model.ListDataSourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the cloud services that are integrated with the threat analysis feature, the logs of the cloud services, and the delivery of the logs.
   * 
   * @param request - ListDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeliveryResponse
   */
  async listDeliveryWithOptions(request: $_model.ListDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.ListDeliveryResponse({}));
  }

  /**
   * Queries the information about the cloud services that are integrated with the threat analysis feature, the logs of the cloud services, and the delivery of the logs.
   * 
   * @param request - ListDeliveryRequest
   * @returns ListDeliveryResponse
   */
  async listDelivery(request: $_model.ListDeliveryRequest): Promise<$_model.ListDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeliveryWithOptions(request, runtime);
  }

  /**
   * Queries handling policies.
   * 
   * @param request - ListDisposeStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategyWithOptions(request: $_model.ListDisposeStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisposeStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.effectiveStatus)) {
      body["EffectiveStatus"] = request.effectiveStatus;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.entityIdentity)) {
      body["EntityIdentity"] = request.entityIdentity;
    }

    if (!$dara.isNull(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.playbookName)) {
      body["PlaybookName"] = request.playbookName;
    }

    if (!$dara.isNull(request.playbookTypes)) {
      body["PlaybookTypes"] = request.playbookTypes;
    }

    if (!$dara.isNull(request.playbookUuid)) {
      body["PlaybookUuid"] = request.playbookUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.sophonTaskId)) {
      body["SophonTaskId"] = request.sophonTaskId;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDisposeStrategy",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDisposeStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ListDisposeStrategyResponse({}));
  }

  /**
   * Queries handling policies.
   * 
   * @param request - ListDisposeStrategyRequest
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategy(request: $_model.ListDisposeStrategyRequest): Promise<$_model.ListDisposeStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDisposeStrategyWithOptions(request, runtime);
  }

  /**
   * 查询实体列表
   * 
   * @param request - ListEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesResponse
   */
  async listEntitiesWithOptions(request: $_model.ListEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEntitiesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.entityName)) {
      body["EntityName"] = request.entityName;
    }

    if (!$dara.isNull(request.entityType)) {
      body["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.entityUuid)) {
      body["EntityUuid"] = request.entityUuid;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.isMalwareEntity)) {
      body["IsMalwareEntity"] = request.isMalwareEntity;
    }

    if (!$dara.isNull(request.malwareType)) {
      body["MalwareType"] = request.malwareType;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEntities",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListEntitiesResponse({}));
  }

  /**
   * 查询实体列表
   * 
   * @param request - ListEntitiesRequest
   * @returns ListEntitiesResponse
   */
  async listEntities(request: $_model.ListEntitiesRequest): Promise<$_model.ListEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries the details of the logs in a cloud service that is added to the threat analysis feature.
   * 
   * @param request - ListImportedLogsByProdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImportedLogsByProdResponse
   */
  async listImportedLogsByProdWithOptions(request: $_model.ListImportedLogsByProdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImportedLogsByProdResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImportedLogsByProd",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImportedLogsByProdResponse>(await this.callApi(params, req, runtime), new $_model.ListImportedLogsByProdResponse({}));
  }

  /**
   * Queries the details of the logs in a cloud service that is added to the threat analysis feature.
   * 
   * @param request - ListImportedLogsByProdRequest
   * @returns ListImportedLogsByProdResponse
   */
  async listImportedLogsByProd(request: $_model.ListImportedLogsByProdRequest): Promise<$_model.ListImportedLogsByProdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImportedLogsByProdWithOptions(request, runtime);
  }

  /**
   * Queries the dedicated Simple Log Service project and Logstore for a cloud service based on the patterns of the project and Logstore names.
   * 
   * @param request - ListProjectLogStoresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectLogStoresResponse
   */
  async listProjectLogStoresWithOptions(request: $_model.ListProjectLogStoresRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectLogStoresResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceLogCode)) {
      body["SourceLogCode"] = request.sourceLogCode;
    }

    if (!$dara.isNull(request.sourceProdCode)) {
      body["SourceProdCode"] = request.sourceProdCode;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectLogStores",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectLogStoresResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectLogStoresResponse({}));
  }

  /**
   * Queries the dedicated Simple Log Service project and Logstore for a cloud service based on the patterns of the project and Logstore names.
   * 
   * @param request - ListProjectLogStoresRequest
   * @returns ListProjectLogStoresResponse
   */
  async listProjectLogStores(request: $_model.ListProjectLogStoresRequest): Promise<$_model.ListProjectLogStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectLogStoresWithOptions(request, runtime);
  }

  /**
   * Queries a list of Alibaba Cloud accounts that are added to the threat analysis feature for centralized management. These accounts can be used to perform operations supported by the threat analysis feature, such as adding logs and handling events.
   * 
   * @param request - ListRdUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRdUsersResponse
   */
  async listRdUsersWithOptions(request: $_model.ListRdUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRdUsersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRdUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRdUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListRdUsersResponse({}));
  }

  /**
   * Queries a list of Alibaba Cloud accounts that are added to the threat analysis feature for centralized management. These accounts can be used to perform operations supported by the threat analysis feature, such as adding logs and handling events.
   * 
   * @param request - ListRdUsersRequest
   * @returns ListRdUsersResponse
   */
  async listRdUsers(request: $_model.ListRdUsersRequest): Promise<$_model.ListRdUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRdUsersWithOptions(request, runtime);
  }

  /**
   * Modifies a third-party cloud account that is added to the threat analysis feature.
   * 
   * @param request - ModifyBindAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBindAccountResponse
   */
  async modifyBindAccountWithOptions(request: $_model.ModifyBindAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBindAccountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessId)) {
      body["AccessId"] = request.accessId;
    }

    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.bindId)) {
      body["BindId"] = request.bindId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBindAccount",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBindAccountResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBindAccountResponse({}));
  }

  /**
   * Modifies a third-party cloud account that is added to the threat analysis feature.
   * 
   * @param request - ModifyBindAccountRequest
   * @returns ModifyBindAccountResponse
   */
  async modifyBindAccount(request: $_model.ModifyBindAccountRequest): Promise<$_model.ModifyBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBindAccountWithOptions(request, runtime);
  }

  /**
   * Modifies a data source that is added to the threat analysis feature.
   * 
   * @param request - ModifyDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSourceWithOptions(request: $_model.ModifyDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.dataSourceInstanceName)) {
      body["DataSourceInstanceName"] = request.dataSourceInstanceName;
    }

    if (!$dara.isNull(request.dataSourceInstanceParams)) {
      body["DataSourceInstanceParams"] = request.dataSourceInstanceParams;
    }

    if (!$dara.isNull(request.dataSourceInstanceRemark)) {
      body["DataSourceInstanceRemark"] = request.dataSourceInstanceRemark;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataSource",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataSourceResponse({}));
  }

  /**
   * Modifies a data source that is added to the threat analysis feature.
   * 
   * @param request - ModifyDataSourceRequest
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSource(request: $_model.ModifyDataSourceRequest): Promise<$_model.ModifyDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataSourceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of the logs that are added to the threat analysis feature for a data source within a cloud account.
   * 
   * @param request - ModifyDataSourceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceLogResponse
   */
  async modifyDataSourceLogWithOptions(request: $_model.ModifyDataSourceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataSourceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountId)) {
      body["AccountId"] = request.accountId;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.dataSourceInstanceId)) {
      body["DataSourceInstanceId"] = request.dataSourceInstanceId;
    }

    if (!$dara.isNull(request.dataSourceInstanceLogs)) {
      body["DataSourceInstanceLogs"] = request.dataSourceInstanceLogs;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!$dara.isNull(request.logInstanceId)) {
      body["LogInstanceId"] = request.logInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataSourceLog",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataSourceLogResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataSourceLogResponse({}));
  }

  /**
   * Modifies the description of the logs that are added to the threat analysis feature for a data source within a cloud account.
   * 
   * @param request - ModifyDataSourceLogRequest
   * @returns ModifyDataSourceLogResponse
   */
  async modifyDataSourceLog(request: $_model.ModifyDataSourceLogRequest): Promise<$_model.ModifyDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Enables the log delivery feature for a cloud service that is integrated with Simple Log Service.
   * 
   * @param request - OpenDeliveryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDeliveryResponse
   */
  async openDeliveryWithOptions(request: $_model.OpenDeliveryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDeliveryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logCode)) {
      body["LogCode"] = request.logCode;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenDelivery",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDeliveryResponse>(await this.callApi(params, req, runtime), new $_model.OpenDeliveryResponse({}));
  }

  /**
   * Enables the log delivery feature for a cloud service that is integrated with Simple Log Service.
   * 
   * @param request - OpenDeliveryRequest
   * @returns OpenDeliveryResponse
   */
  async openDelivery(request: $_model.OpenDeliveryRequest): Promise<$_model.OpenDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openDeliveryWithOptions(request, runtime);
  }

  /**
   * Creates or updates an automatic response rule.
   * 
   * @param request - PostAutomateResponseConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostAutomateResponseConfigResponse
   */
  async postAutomateResponseConfigWithOptions(request: $_model.PostAutomateResponseConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostAutomateResponseConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionConfig)) {
      body["ActionConfig"] = request.actionConfig;
    }

    if (!$dara.isNull(request.actionType)) {
      body["ActionType"] = request.actionType;
    }

    if (!$dara.isNull(request.autoResponseType)) {
      body["AutoResponseType"] = request.autoResponseType;
    }

    if (!$dara.isNull(request.executionCondition)) {
      body["ExecutionCondition"] = request.executionCondition;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.subUserId)) {
      body["SubUserId"] = request.subUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostAutomateResponseConfig",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostAutomateResponseConfigResponse>(await this.callApi(params, req, runtime), new $_model.PostAutomateResponseConfigResponse({}));
  }

  /**
   * Creates or updates an automatic response rule.
   * 
   * @param request - PostAutomateResponseConfigRequest
   * @returns PostAutomateResponseConfigResponse
   */
  async postAutomateResponseConfig(request: $_model.PostAutomateResponseConfigRequest): Promise<$_model.PostAutomateResponseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Creates or updates a custom rule.
   * 
   * @param request - PostCustomizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostCustomizeRuleResponse
   */
  async postCustomizeRuleWithOptions(request: $_model.PostCustomizeRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostCustomizeRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.alertTypeMds)) {
      body["AlertTypeMds"] = request.alertTypeMds;
    }

    if (!$dara.isNull(request.attCk)) {
      body["AttCk"] = request.attCk;
    }

    if (!$dara.isNull(request.eventTransferExt)) {
      body["EventTransferExt"] = request.eventTransferExt;
    }

    if (!$dara.isNull(request.eventTransferSwitch)) {
      body["EventTransferSwitch"] = request.eventTransferSwitch;
    }

    if (!$dara.isNull(request.eventTransferType)) {
      body["EventTransferType"] = request.eventTransferType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.logSource)) {
      body["LogSource"] = request.logSource;
    }

    if (!$dara.isNull(request.logSourceMds)) {
      body["LogSourceMds"] = request.logSourceMds;
    }

    if (!$dara.isNull(request.logType)) {
      body["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.logTypeMds)) {
      body["LogTypeMds"] = request.logTypeMds;
    }

    if (!$dara.isNull(request.queryCycle)) {
      body["QueryCycle"] = request.queryCycle;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleCondition)) {
      body["RuleCondition"] = request.ruleCondition;
    }

    if (!$dara.isNull(request.ruleDesc)) {
      body["RuleDesc"] = request.ruleDesc;
    }

    if (!$dara.isNull(request.ruleGroup)) {
      body["RuleGroup"] = request.ruleGroup;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleThreshold)) {
      body["RuleThreshold"] = request.ruleThreshold;
    }

    if (!$dara.isNull(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostCustomizeRule",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostCustomizeRuleResponse>(await this.callApi(params, req, runtime), new $_model.PostCustomizeRuleResponse({}));
  }

  /**
   * Creates or updates a custom rule.
   * 
   * @param request - PostCustomizeRuleRequest
   * @returns PostCustomizeRuleResponse
   */
  async postCustomizeRule(request: $_model.PostCustomizeRuleRequest): Promise<$_model.PostCustomizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postCustomizeRuleWithOptions(request, runtime);
  }

  /**
   * Submits a custom rule for testing.
   * 
   * @param request - PostCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostCustomizeRuleTestResponse
   */
  async postCustomizeRuleTestWithOptions(request: $_model.PostCustomizeRuleTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostCustomizeRuleTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.simulatedData)) {
      body["SimulatedData"] = request.simulatedData;
    }

    if (!$dara.isNull(request.testType)) {
      body["TestType"] = request.testType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new $_model.PostCustomizeRuleTestResponse({}));
  }

  /**
   * Submits a custom rule for testing.
   * 
   * @param request - PostCustomizeRuleTestRequest
   * @returns PostCustomizeRuleTestResponse
   */
  async postCustomizeRuleTest(request: $_model.PostCustomizeRuleTestRequest): Promise<$_model.PostCustomizeRuleTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Submits event handling information.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleListWithOptions(request: $_model.PostEventDisposeAndWhiteruleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostEventDisposeAndWhiteruleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventDispose)) {
      body["EventDispose"] = request.eventDispose;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.receiverInfo)) {
      body["ReceiverInfo"] = request.receiverInfo;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.threatLevel)) {
      body["ThreatLevel"] = request.threatLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostEventDisposeAndWhiteruleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostEventDisposeAndWhiteruleListResponse>(await this.callApi(params, req, runtime), new $_model.PostEventDisposeAndWhiteruleListResponse({}));
  }

  /**
   * Submits event handling information.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleList(request: $_model.PostEventDisposeAndWhiteruleListRequest): Promise<$_model.PostEventDisposeAndWhiteruleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postEventDisposeAndWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Submits an alert whitelist rule.
   * 
   * @param request - PostEventWhiteruleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEventWhiteruleListResponse
   */
  async postEventWhiteruleListWithOptions(request: $_model.PostEventWhiteruleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostEventWhiteruleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.whiteruleList)) {
      body["WhiteruleList"] = request.whiteruleList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostEventWhiteruleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostEventWhiteruleListResponse>(await this.callApi(params, req, runtime), new $_model.PostEventWhiteruleListResponse({}));
  }

  /**
   * Submits an alert whitelist rule.
   * 
   * @param request - PostEventWhiteruleListRequest
   * @returns PostEventWhiteruleListResponse
   */
  async postEventWhiteruleList(request: $_model.PostEventWhiteruleListRequest): Promise<$_model.PostEventWhiteruleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postEventWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Ends the test of a custom rule.
   * 
   * @param request - PostFinishCustomizeRuleTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostFinishCustomizeRuleTestResponse
   */
  async postFinishCustomizeRuleTestWithOptions(request: $_model.PostFinishCustomizeRuleTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostFinishCustomizeRuleTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostFinishCustomizeRuleTest",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostFinishCustomizeRuleTestResponse>(await this.callApi(params, req, runtime), new $_model.PostFinishCustomizeRuleTestResponse({}));
  }

  /**
   * Ends the test of a custom rule.
   * 
   * @param request - PostFinishCustomizeRuleTestRequest
   * @returns PostFinishCustomizeRuleTestResponse
   */
  async postFinishCustomizeRuleTest(request: $_model.PostFinishCustomizeRuleTestRequest): Promise<$_model.PostFinishCustomizeRuleTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postFinishCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Updates the status of a custom rule.
   * 
   * @param request - PostRuleStatusChangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostRuleStatusChangeResponse
   */
  async postRuleStatusChangeWithOptions(request: $_model.PostRuleStatusChangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostRuleStatusChangeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.inUse)) {
      body["InUse"] = request.inUse;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostRuleStatusChange",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostRuleStatusChangeResponse>(await this.callApi(params, req, runtime), new $_model.PostRuleStatusChangeResponse({}));
  }

  /**
   * Updates the status of a custom rule.
   * 
   * @param request - PostRuleStatusChangeRequest
   * @returns PostRuleStatusChangeResponse
   */
  async postRuleStatusChange(request: $_model.PostRuleStatusChangeRequest): Promise<$_model.PostRuleStatusChangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postRuleStatusChangeWithOptions(request, runtime);
  }

  /**
   * Releases storage to reduce the storage usage. The release operation is irreversible and may cause data loss. Proceed with caution.
   * 
   * @param request - RestoreCapacityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreCapacityResponse
   */
  async restoreCapacityWithOptions(request: $_model.RestoreCapacityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreCapacityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreCapacity",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreCapacityResponse>(await this.callApi(params, req, runtime), new $_model.RestoreCapacityResponse({}));
  }

  /**
   * Releases storage to reduce the storage usage. The release operation is irreversible and may cause data loss. Proceed with caution.
   * 
   * @param request - RestoreCapacityRequest
   * @returns RestoreCapacityResponse
   */
  async restoreCapacity(request: $_model.RestoreCapacityRequest): Promise<$_model.RestoreCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreCapacityWithOptions(request, runtime);
  }

  /**
   * Configures the settings of log storage, such as the storage duration and storage region.
   * 
   * @param request - SetStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetStorageResponse
   */
  async setStorageWithOptions(request: $_model.SetStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.ttl)) {
      body["Ttl"] = request.ttl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetStorageResponse>(await this.callApi(params, req, runtime), new $_model.SetStorageResponse({}));
  }

  /**
   * Configures the settings of log storage, such as the storage duration and storage region.
   * 
   * @param request - SetStorageRequest
   * @returns SetStorageResponse
   */
  async setStorage(request: $_model.SetStorageRequest): Promise<$_model.SetStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setStorageWithOptions(request, runtime);
  }

  /**
   * Submits log collection tasks at a time.
   * 
   * @param request - SubmitImportLogTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImportLogTasksResponse
   */
  async submitImportLogTasksWithOptions(request: $_model.SubmitImportLogTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImportLogTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accounts)) {
      body["Accounts"] = request.accounts;
    }

    if (!$dara.isNull(request.autoImported)) {
      body["AutoImported"] = request.autoImported;
    }

    if (!$dara.isNull(request.cloudCode)) {
      body["CloudCode"] = request.cloudCode;
    }

    if (!$dara.isNull(request.logCodes)) {
      body["LogCodes"] = request.logCodes;
    }

    if (!$dara.isNull(request.prodCode)) {
      body["ProdCode"] = request.prodCode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImportLogTasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImportLogTasksResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImportLogTasksResponse({}));
  }

  /**
   * Submits log collection tasks at a time.
   * 
   * @param request - SubmitImportLogTasksRequest
   * @returns SubmitImportLogTasksResponse
   */
  async submitImportLogTasks(request: $_model.SubmitImportLogTasksRequest): Promise<$_model.SubmitImportLogTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitImportLogTasksWithOptions(request, runtime);
  }

  /**
   * Updates the status of an automatic response rule.
   * 
   * @param request - UpdateAutomateResponseConfigStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAutomateResponseConfigStatusResponse
   */
  async updateAutomateResponseConfigStatusWithOptions(request: $_model.UpdateAutomateResponseConfigStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAutomateResponseConfigStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.inUse)) {
      body["InUse"] = request.inUse;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAutomateResponseConfigStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAutomateResponseConfigStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAutomateResponseConfigStatusResponse({}));
  }

  /**
   * Updates the status of an automatic response rule.
   * 
   * @param request - UpdateAutomateResponseConfigStatusRequest
   * @returns UpdateAutomateResponseConfigStatusResponse
   */
  async updateAutomateResponseConfigStatus(request: $_model.UpdateAutomateResponseConfigStatusRequest): Promise<$_model.UpdateAutomateResponseConfigStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutomateResponseConfigStatusWithOptions(request, runtime);
  }

  /**
   * Creates or updates an alert whitelist rule.
   * 
   * @param request - UpdateWhiteRuleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWhiteRuleListResponse
   */
  async updateWhiteRuleListWithOptions(request: $_model.UpdateWhiteRuleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWhiteRuleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expression)) {
      body["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.whiteRuleId)) {
      body["WhiteRuleId"] = request.whiteRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWhiteRuleList",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWhiteRuleListResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWhiteRuleListResponse({}));
  }

  /**
   * Creates or updates an alert whitelist rule.
   * 
   * @param request - UpdateWhiteRuleListRequest
   * @returns UpdateWhiteRuleListResponse
   */
  async updateWhiteRuleList(request: $_model.UpdateWhiteRuleListRequest): Promise<$_model.UpdateWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWhiteRuleListWithOptions(request, runtime);
  }

}
