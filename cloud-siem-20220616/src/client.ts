// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "cloud-siem";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Adds a data source under the bound multi-cloud account.
   * 
   * @remarks
   * Before calling this operation to add a data source, complete the following prerequisites in sequence:
   * 1. Call the AddCloudVendorAccountAK operation of Security Center (Sas) to add the AccessKey pair configuration for the multi-cloud account.
   * 2. Call the BindAccount operation to bind the multi-cloud account.
   * 3. Call this operation (AddDataSource) to add a data source under the bound multi-cloud account.
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
   * Adds a data source under the bound multi-cloud account.
   * 
   * @remarks
   * Before calling this operation to add a data source, complete the following prerequisites in sequence:
   * 1. Call the AddCloudVendorAccountAK operation of Security Center (Sas) to add the AccessKey pair configuration for the multi-cloud account.
   * 2. Call the BindAccount operation to bind the multi-cloud account.
   * 3. Call this operation (AddDataSource) to add a data source under the bound multi-cloud account.
   * 
   * @param request - AddDataSourceRequest
   * @returns AddDataSourceResponse
   */
  async addDataSource(request: $_model.AddDataSourceRequest): Promise<$_model.AddDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataSourceWithOptions(request, runtime);
  }

  /**
   * Adds logs.
   * 
   * @remarks
   * Before calling this operation to add logs for a data source, complete the following prerequisites in sequence:
   * 1. Call the EnableAccessForCloudSiem operation to enable the SIEM service role.
   * 2. Call the BindAccount operation to bind a multi-cloud account. You must provide the AccessKey of the third-party cloud provider.
   * 3. Call the AddDataSource operation to create a data source instance and obtain the DataSourceInstanceId.
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
   * Adds logs.
   * 
   * @remarks
   * Before calling this operation to add logs for a data source, complete the following prerequisites in sequence:
   * 1. Call the EnableAccessForCloudSiem operation to enable the SIEM service role.
   * 2. Call the BindAccount operation to bind a multi-cloud account. You must provide the AccessKey of the third-party cloud provider.
   * 3. Call the AddDataSource operation to create a data source instance and obtain the DataSourceInstanceId.
   * 
   * @param request - AddDataSourceLogRequest
   * @returns AddDataSourceLogResponse
   */
  async addDataSourceLog(request: $_model.AddDataSourceLogRequest): Promise<$_model.AddDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Adds a log ingestion task to ingest the corresponding log data into Threat Analysis for subsequent alerting and event analysis.
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
   * Adds a log ingestion task to ingest the corresponding log data into Threat Analysis for subsequent alerting and event analysis.
   * 
   * @param request - AddUserSourceLogConfigRequest
   * @returns AddUserSourceLogConfigResponse
   */
  async addUserSourceLogConfig(request: $_model.AddUserSourceLogConfigRequest): Promise<$_model.AddUserSourceLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addUserSourceLogConfigWithOptions(request, runtime);
  }

  /**
   * Binds a multi-cloud account configured in the multi-cloud assets of Security Center to Threat Analysis.
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
   * Binds a multi-cloud account configured in the multi-cloud assets of Security Center to Threat Analysis.
   * 
   * @param request - BindAccountRequest
   * @returns BindAccountResponse
   */
  async bindAccount(request: $_model.BindAccountRequest): Promise<$_model.BindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindAccountWithOptions(request, runtime);
  }

  /**
   * Disables log delivery for an integrated cloud service. After the delivery is disabled, no new logs of the corresponding type are written to the user\\"s Logstore.
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
   * Disables log delivery for an integrated cloud service. After the delivery is disabled, no new logs of the corresponding type are written to the user\\"s Logstore.
   * 
   * @param request - CloseDeliveryRequest
   * @returns CloseDeliveryResponse
   */
  async closeDelivery(request: $_model.CloseDeliveryRequest): Promise<$_model.CloseDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeDeliveryWithOptions(request, runtime);
  }

  /**
   * Deletes the automated response rule with the specified ID.
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
   * Deletes the automated response rule with the specified ID.
   * 
   * @param request - DeleteAutomateResponseConfigRequest
   * @returns DeleteAutomateResponseConfigResponse
   */
  async deleteAutomateResponseConfig(request: $_model.DeleteAutomateResponseConfigRequest): Promise<$_model.DeleteAutomateResponseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Dissociates the AccessKey of a multi-cloud sub-account from the threat analysis data source module. After the dissociation, you can bind a different account.
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
   * Dissociates the AccessKey of a multi-cloud sub-account from the threat analysis data source module. After the dissociation, you can bind a different account.
   * 
   * @param request - DeleteBindAccountRequest
   * @returns DeleteBindAccountResponse
   */
  async deleteBindAccount(request: $_model.DeleteBindAccountRequest): Promise<$_model.DeleteBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBindAccountWithOptions(request, runtime);
  }

  /**
   * Deletes a custom rule by the specified ID.
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
   * Deletes a custom rule by the specified ID.
   * 
   * @param request - DeleteCustomizeRuleRequest
   * @returns DeleteCustomizeRuleResponse
   */
  async deleteCustomizeRule(request: $_model.DeleteCustomizeRuleRequest): Promise<$_model.DeleteCustomizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCustomizeRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a data source that is no longer in use.
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
   * Deletes a data source that is no longer in use.
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a log.
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
   * Deletes a log.
   * 
   * @param request - DeleteDataSourceLogRequest
   * @returns DeleteDataSourceLogResponse
   */
  async deleteDataSourceLog(request: $_model.DeleteDataSourceLogRequest): Promise<$_model.DeleteDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Deletes the alert whitelist rule with the specified ID.
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
   * Deletes the alert whitelist rule with the specified ID.
   * 
   * @param request - DeleteWhiteRuleListRequest
   * @returns DeleteWhiteRuleListResponse
   */
  async deleteWhiteRuleList(request: $_model.DeleteWhiteRuleListRequest): Promise<$_model.DeleteWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of aggregate functions supported by custom rules.
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
   * Retrieves the list of aggregate functions supported by custom rules.
   * 
   * @param request - DescribeAggregateFunctionRequest
   * @returns DescribeAggregateFunctionResponse
   */
  async describeAggregateFunction(request: $_model.DescribeAggregateFunctionRequest): Promise<$_model.DescribeAggregateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAggregateFunctionWithOptions(request, runtime);
  }

  /**
   * Retrieves alert allowlist scenarios.
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
   * Retrieves alert allowlist scenarios.
   * 
   * @param request - DescribeAlertSceneRequest
   * @returns DescribeAlertSceneResponse
   */
  async describeAlertScene(request: $_model.DescribeAlertSceneRequest): Promise<$_model.DescribeAlertSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSceneWithOptions(request, runtime);
  }

  /**
   * Retrieves the alert whitelist scenarios and whitelist targets.
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
   * Retrieves the alert whitelist scenarios and whitelist targets.
   * 
   * @param request - DescribeAlertSceneByEventRequest
   * @returns DescribeAlertSceneByEventResponse
   */
  async describeAlertSceneByEvent(request: $_model.DescribeAlertSceneByEventRequest): Promise<$_model.DescribeAlertSceneByEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSceneByEventWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of alert data sources.
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
   * Retrieves a list of alert data sources.
   * 
   * @param request - DescribeAlertSourceRequest
   * @returns DescribeAlertSourceResponse
   */
  async describeAlertSource(request: $_model.DescribeAlertSourceRequest): Promise<$_model.DescribeAlertSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSourceWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of alert data sources associated with an incident.
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
   * Retrieves the list of alert data sources associated with an incident.
   * 
   * @param request - DescribeAlertSourceWithEventRequest
   * @returns DescribeAlertSourceWithEventResponse
   */
  async describeAlertSourceWithEvent(request: $_model.DescribeAlertSourceWithEventRequest): Promise<$_model.DescribeAlertSourceWithEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertSourceWithEventWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of available threat types for custom rules.
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
   * Retrieves the list of available threat types for custom rules.
   * 
   * @param request - DescribeAlertTypeRequest
   * @returns DescribeAlertTypeResponse
   */
  async describeAlertType(request: $_model.DescribeAlertTypeRequest): Promise<$_model.DescribeAlertTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertTypeWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of alerts for the user.
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

    if (!$dara.isNull(request.alertStatus)) {
      body["AlertStatus"] = request.alertStatus;
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
   * Retrieves the list of alerts for the user.
   * 
   * @param request - DescribeAlertsRequest
   * @returns DescribeAlertsResponse
   */
  async describeAlerts(request: $_model.DescribeAlertsRequest): Promise<$_model.DescribeAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithOptions(request, runtime);
  }

  /**
   * Retrieves the counts of alerts by severity level.
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
   * Retrieves the counts of alerts by severity level.
   * 
   * @param request - DescribeAlertsCountRequest
   * @returns DescribeAlertsCountResponse
   */
  async describeAlertsCount(request: $_model.DescribeAlertsCountRequest): Promise<$_model.DescribeAlertsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsCountWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of alerts associated with an entity.
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
   * Retrieves the list of alerts associated with an entity.
   * 
   * @param request - DescribeAlertsWithEntityRequest
   * @returns DescribeAlertsWithEntityResponse
   */
  async describeAlertsWithEntity(request: $_model.DescribeAlertsWithEntityRequest): Promise<$_model.DescribeAlertsWithEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithEntityWithOptions(request, runtime);
  }

  /**
   * Queries the list of alerts associated with an incident.
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
   * Queries the list of alerts associated with an incident.
   * 
   * @param request - DescribeAlertsWithEventRequest
   * @returns DescribeAlertsWithEventResponse
   */
  async describeAlertsWithEvent(request: $_model.DescribeAlertsWithEventRequest): Promise<$_model.DescribeAlertsWithEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAlertsWithEventWithOptions(request, runtime);
  }

  /**
   * Checks whether the Alibaba Cloud account has authorized SIEM and created the AliyunServiceRoleForSasCloudSiem role.
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
   * Checks whether the Alibaba Cloud account has authorized SIEM and created the AliyunServiceRoleForSasCloudSiem role.
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
   * Retrieves the configurable fields and operators for automated rule policies.
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
   * Retrieves the configurable fields and operators for automated rule policies.
   * 
   * @param request - DescribeAutomateResponseConfigFeatureRequest
   * @returns DescribeAutomateResponseConfigFeatureResponse
   */
  async describeAutomateResponseConfigFeature(request: $_model.DescribeAutomateResponseConfigFeatureRequest): Promise<$_model.DescribeAutomateResponseConfigFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutomateResponseConfigFeatureWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of assets associated with an incident.
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
   * Retrieves the list of assets associated with an incident.
   * 
   * @param request - DescribeCloudSiemAssetsRequest
   * @returns DescribeCloudSiemAssetsResponse
   */
  async describeCloudSiemAssets(request: $_model.DescribeCloudSiemAssetsRequest): Promise<$_model.DescribeCloudSiemAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsWithOptions(request, runtime);
  }

  /**
   * Queries the number of assets of each type that are associated with an event.
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
   * Queries the number of assets of each type that are associated with an event.
   * 
   * @param request - DescribeCloudSiemAssetsCounterRequest
   * @returns DescribeCloudSiemAssetsCounterResponse
   */
  async describeCloudSiemAssetsCounter(request: $_model.DescribeCloudSiemAssetsCounterRequest): Promise<$_model.DescribeCloudSiemAssetsCounterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemAssetsCounterWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an event.
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
   * Retrieves the details of an event.
   * 
   * @param request - DescribeCloudSiemEventDetailRequest
   * @returns DescribeCloudSiemEventDetailResponse
   */
  async describeCloudSiemEventDetail(request: $_model.DescribeCloudSiemEventDetailRequest): Promise<$_model.DescribeCloudSiemEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemEventDetailWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of Cloud Threat Detection and Response (CTDR) events.
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
   * Retrieves a list of Cloud Threat Detection and Response (CTDR) events.
   * 
   * @param request - DescribeCloudSiemEventsRequest
   * @returns DescribeCloudSiemEventsResponse
   */
  async describeCloudSiemEvents(request: $_model.DescribeCloudSiemEventsRequest): Promise<$_model.DescribeCloudSiemEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCloudSiemEventsWithOptions(request, runtime);
  }

  /**
   * Retrieves the count of custom rules.
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
   * Retrieves the count of custom rules.
   * 
   * @param request - DescribeCustomizeRuleCountRequest
   * @returns DescribeCustomizeRuleCountResponse
   */
  async describeCustomizeRuleCount(request: $_model.DescribeCustomizeRuleCountRequest): Promise<$_model.DescribeCustomizeRuleCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizeRuleCountWithOptions(request, runtime);
  }

  /**
   * Retrieves historical simulated data from a test scenario.
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
   * Retrieves historical simulated data from a test scenario.
   * 
   * @param request - DescribeCustomizeRuleTestRequest
   * @returns DescribeCustomizeRuleTestResponse
   */
  async describeCustomizeRuleTest(request: $_model.DescribeCustomizeRuleTestRequest): Promise<$_model.DescribeCustomizeRuleTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomizeRuleTestWithOptions(request, runtime);
  }

  /**
   * Retrieves the chart of test results for a custom rule.
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
   * Retrieves the chart of test results for a custom rule.
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
   * Retrieves the details of data source parameters.
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
   * Retrieves the details of data source parameters.
   * 
   * @param request - DescribeDataSourceParametersRequest
   * @returns DescribeDataSourceParametersResponse
   */
  async describeDataSourceParameters(request: $_model.DescribeDataSourceParametersRequest): Promise<$_model.DescribeDataSourceParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDataSourceParametersWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of entities and playbooks to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybookWithOptions(request: $_model.DescribeDisposeAndPlaybookRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDisposeAndPlaybookResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.availableOnly)) {
      query["AvailableOnly"] = request.availableOnly;
    }

    if (!$dara.isNull(request.entityUuidList)) {
      query["EntityUuidList"] = request.entityUuidList;
    }

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
      query: OpenApiUtil.query(query),
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
   * Retrieves the list of entities and playbooks to be handled.
   * 
   * @param request - DescribeDisposeAndPlaybookRequest
   * @returns DescribeDisposeAndPlaybookResponse
   */
  async describeDisposeAndPlaybook(request: $_model.DescribeDisposeAndPlaybookRequest): Promise<$_model.DescribeDisposeAndPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisposeAndPlaybookWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of playbooks used by a disposal policy.
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
   * Retrieves the list of playbooks used by a disposal policy.
   * 
   * @param request - DescribeDisposeStrategyPlaybookRequest
   * @returns DescribeDisposeStrategyPlaybookResponse
   */
  async describeDisposeStrategyPlaybook(request: $_model.DescribeDisposeStrategyPlaybookRequest): Promise<$_model.DescribeDisposeStrategyPlaybookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDisposeStrategyPlaybookWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an entity.
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
   * Retrieves the details of an entity.
   * 
   * @param request - DescribeEntityInfoRequest
   * @returns DescribeEntityInfoResponse
   */
  async describeEntityInfo(request: $_model.DescribeEntityInfoRequest): Promise<$_model.DescribeEntityInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEntityInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the count of events by type.
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
   * Retrieves the count of events by type.
   * 
   * @param request - DescribeEventCountByThreatLevelRequest
   * @returns DescribeEventCountByThreatLevelResponse
   */
  async describeEventCountByThreatLevel(request: $_model.DescribeEventCountByThreatLevelRequest): Promise<$_model.DescribeEventCountByThreatLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventCountByThreatLevelWithOptions(request, runtime);
  }

  /**
   * Queries the policy handling history for an event.
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
   * Queries the policy handling history for an event.
   * 
   * @param request - DescribeEventDisposeRequest
   * @returns DescribeEventDisposeResponse
   */
  async describeEventDispose(request: $_model.DescribeEventDisposeRequest): Promise<$_model.DescribeEventDisposeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEventDisposeWithOptions(request, runtime);
  }

  /**
   * Queries the number of imported logs.
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
   * Queries the number of imported logs.
   * 
   * @param request - DescribeImportedLogCountRequest
   * @returns DescribeImportedLogCountResponse
   */
  async describeImportedLogCount(request: $_model.DescribeImportedLogCountRequest): Promise<$_model.DescribeImportedLogCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImportedLogCountWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of configurable fields for custom rules.
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
   * Retrieves the list of configurable fields for custom rules.
   * 
   * @param request - DescribeLogFieldsRequest
   * @returns DescribeLogFieldsResponse
   */
  async describeLogFields(request: $_model.DescribeLogFieldsRequest): Promise<$_model.DescribeLogFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogFieldsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of configurable log sources for custom rules.
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
   * Retrieves a list of configurable log sources for custom rules.
   * 
   * @param request - DescribeLogSourceRequest
   * @returns DescribeLogSourceResponse
   */
  async describeLogSource(request: $_model.DescribeLogSourceRequest): Promise<$_model.DescribeLogSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogSourceWithOptions(request, runtime);
  }

  /**
   * Retrieves the log types that can be configured for custom rules.
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
   * Retrieves the log types that can be configured for custom rules.
   * 
   * @param request - DescribeLogTypeRequest
   * @returns DescribeLogTypeResponse
   */
  async describeLogType(request: $_model.DescribeLogTypeRequest): Promise<$_model.DescribeLogTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogTypeWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of operators for custom rules.
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
   * Retrieves the list of operators for custom rules.
   * 
   * @param request - DescribeOperatorsRequest
   * @returns DescribeOperatorsResponse
   */
  async describeOperators(request: $_model.DescribeOperatorsRequest): Promise<$_model.DescribeOperatorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorsWithOptions(request, runtime);
  }

  /**
   * Queries the number of Alibaba Cloud, Tencent Cloud, and Huawei Cloud products that can be integrated with Threat Analysis.
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
   * Queries the number of Alibaba Cloud, Tencent Cloud, and Huawei Cloud products that can be integrated with Threat Analysis.
   * 
   * @param request - DescribeProdCountRequest
   * @returns DescribeProdCountResponse
   */
  async describeProdCount(request: $_model.DescribeProdCountRequest): Promise<$_model.DescribeProdCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProdCountWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of users in the playbook scope.
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
   * Retrieves the list of users in the playbook scope.
   * 
   * @param request - DescribeScopeUsersRequest
   * @returns DescribeScopeUsersResponse
   */
  async describeScopeUsers(request: $_model.DescribeScopeUsersRequest): Promise<$_model.DescribeScopeUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScopeUsersWithOptions(request, runtime);
  }

  /**
   * Checks whether a resource directory is authorized for threat analysis.
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
   * Checks whether a resource directory is authorized for threat analysis.
   * 
   * @param request - DescribeServiceStatusRequest
   * @returns DescribeServiceStatusResponse
   */
  async describeServiceStatus(request: $_model.DescribeServiceStatusRequest): Promise<$_model.DescribeServiceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceStatusWithOptions(request, runtime);
  }

  /**
   * Checks the status of the storage for the threat analysis feature. The storage is a Logstore in Simple Log Service.
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
   * Checks the status of the storage for the threat analysis feature. The storage is a Logstore in Simple Log Service.
   * 
   * @param request - DescribeStorageRequest
   * @returns DescribeStorageResponse
   */
  async describeStorage(request: $_model.DescribeStorageRequest): Promise<$_model.DescribeStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeStorageWithOptions(request, runtime);
  }

  /**
   * Checks whether the current Alibaba Cloud account or its associated enterprise organization has purchased threat analysis.
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
   * Checks whether the current Alibaba Cloud account or its associated enterprise organization has purchased threat analysis.
   * 
   * @param request - DescribeUserBuyStatusRequest
   * @returns DescribeUserBuyStatusResponse
   */
  async describeUserBuyStatus(request: $_model.DescribeUserBuyStatusRequest): Promise<$_model.DescribeUserBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * Queries the purchase status of the user\\"s SIEM.
   * 
   * @param request - DescribeUserSiemOrderStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserSiemOrderStatusResponse
   */
  async describeUserSiemOrderStatusWithOptions(request: $_model.DescribeUserSiemOrderStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserSiemOrderStatusResponse> {
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
      action: "DescribeUserSiemOrderStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserSiemOrderStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserSiemOrderStatusResponse({}));
  }

  /**
   * Queries the purchase status of the user\\"s SIEM.
   * 
   * @param request - DescribeUserSiemOrderStatusRequest
   * @returns DescribeUserSiemOrderStatusResponse
   */
  async describeUserSiemOrderStatus(request: $_model.DescribeUserSiemOrderStatusRequest): Promise<$_model.DescribeUserSiemOrderStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserSiemOrderStatusWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of domain names protected by Web Application Firewall (WAF) instances.
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
   * Retrieves the list of domain names protected by Web Application Firewall (WAF) instances.
   * 
   * @param request - DescribeWafScopeRequest
   * @returns DescribeWafScopeResponse
   */
  async describeWafScope(request: $_model.DescribeWafScopeRequest): Promise<$_model.DescribeWafScopeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWafScopeWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of alert allowlist rules.
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
   * Retrieves a list of alert allowlist rules.
   * 
   * @param request - DescribeWhiteRuleListRequest
   * @returns DescribeWhiteRuleListResponse
   */
  async describeWhiteRuleList(request: $_model.DescribeWhiteRuleListRequest): Promise<$_model.DescribeWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWhiteRuleListWithOptions(request, runtime);
  }

  /**
   * Authorizes the user and creates the threat detection and response service-linked role AliyunServiceRoleForSasCloudSiem.
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

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
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
   * Authorizes the user and creates the threat detection and response service-linked role AliyunServiceRoleForSasCloudSiem.
   * 
   * @param request - EnableAccessForCloudSiemRequest
   * @returns EnableAccessForCloudSiemResponse
   */
  async enableAccessForCloudSiem(request: $_model.EnableAccessForCloudSiemRequest): Promise<$_model.EnableAccessForCloudSiemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAccessForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Enables resource directory authorization for threat analysis. This operation can be called only by a resource directory administrator.
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
   * Enables resource directory authorization for threat analysis. This operation can be called only by a resource directory administrator.
   * 
   * @param request - EnableServiceForCloudSiemRequest
   * @returns EnableServiceForCloudSiemResponse
   */
  async enableServiceForCloudSiem(request: $_model.EnableServiceForCloudSiemRequest): Promise<$_model.EnableServiceForCloudSiemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableServiceForCloudSiemWithOptions(request, runtime);
  }

  /**
   * Retrieves the current billable storage usage and subscription purchase volume for threat analysis. Units are in GB.
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
   * Retrieves the current billable storage usage and subscription purchase volume for threat analysis. Units are in GB.
   * 
   * @param request - GetCapacityRequest
   * @returns GetCapacityResponse
   */
  async getCapacity(request: $_model.GetCapacityRequest): Promise<$_model.GetCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCapacityWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of user data storage on the Log Management page.
   * 
   * @remarks
   * The input parameter JsonConfig is a complex JSON configuration. A utility class is provided to help with specific configuration examples. For more information, see [Demo](https://github.com/aliyun/cloud-siem-client/blob/master/src/main/java/com/aliyun/security/cloudsiem/client/sample/JobBuilderSample.java).
   * 
   * @param request - GetDataStorageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataStorageResponse
   */
  async getDataStorageWithOptions(request: $_model.GetDataStorageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataStorageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      body["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleFor)) {
      body["RoleFor"] = request.roleFor;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataStorage",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataStorageResponse>(await this.callApi(params, req, runtime), new $_model.GetDataStorageResponse({}));
  }

  /**
   * Retrieves the details of user data storage on the Log Management page.
   * 
   * @remarks
   * The input parameter JsonConfig is a complex JSON configuration. A utility class is provided to help with specific configuration examples. For more information, see [Demo](https://github.com/aliyun/cloud-siem-client/blob/master/src/main/java/com/aliyun/security/cloudsiem/client/sample/JobBuilderSample.java).
   * 
   * @param request - GetDataStorageRequest
   * @returns GetDataStorageResponse
   */
  async getDataStorage(request: $_model.GetDataStorageRequest): Promise<$_model.GetDataStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataStorageWithOptions(request, runtime);
  }

  /**
   * Queries the entity count.
   * 
   * @remarks
   * The JsonConfig request parameter is a complex JSON configuration. A supporting utility class is provided with specific configuration examples. For more information, see [Demo](https://github.com/aliyun/cloud-siem-client/blob/master/src/main/java/com/aliyun/security/cloudsiem/client/sample/JobBuilderSample.java).
   * 
   * @param request - GetEntitiyStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntitiyStatResponse
   */
  async getEntitiyStatWithOptions(request: $_model.GetEntitiyStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntitiyStatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.assetName)) {
      body["AssetName"] = request.assetName;
    }

    if (!$dara.isNull(request.assetUuid)) {
      body["AssetUuid"] = request.assetUuid;
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

    if (!$dara.isNull(request.entityUuids)) {
      body["EntityUuids"] = request.entityUuids;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.isAsset)) {
      body["IsAsset"] = request.isAsset;
    }

    if (!$dara.isNull(request.isMalwareEntity)) {
      body["IsMalwareEntity"] = request.isMalwareEntity;
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

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntitiyStat",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntitiyStatResponse>(await this.callApi(params, req, runtime), new $_model.GetEntitiyStatResponse({}));
  }

  /**
   * Queries the entity count.
   * 
   * @remarks
   * The JsonConfig request parameter is a complex JSON configuration. A supporting utility class is provided with specific configuration examples. For more information, see [Demo](https://github.com/aliyun/cloud-siem-client/blob/master/src/main/java/com/aliyun/security/cloudsiem/client/sample/JobBuilderSample.java).
   * 
   * @param request - GetEntitiyStatRequest
   * @returns GetEntitiyStatResponse
   */
  async getEntitiyStat(request: $_model.GetEntitiyStatRequest): Promise<$_model.GetEntitiyStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getEntitiyStatWithOptions(request, runtime);
  }

  /**
   * Retrieves the storage settings created by the Threat Analysis and Response product in your Simple Log Service (SLS). These settings include the storage duration and storage region.
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
   * Retrieves the storage settings created by the Threat Analysis and Response product in your Simple Log Service (SLS). These settings include the storage duration and storage region.
   * 
   * @param request - GetStorageRequest
   * @returns GetStorageResponse
   */
  async getStorage(request: $_model.GetStorageRequest): Promise<$_model.GetStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageWithOptions(request, runtime);
  }

  /**
   * Queries the list of multi-cloud AccessKeyIds that are already bound.
   * 
   * @remarks
   * Before calling this operation to view the list of bound multi-cloud AccessKeys, complete the following preparations:
   * 1. Activate the Cloud Threat Detection and Response (CTDR) service in Security Center.
   * 2. Configure the SIEM AccessKey for threat detection and response.
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
   * Queries the list of multi-cloud AccessKeyIds that are already bound.
   * 
   * @remarks
   * Before calling this operation to view the list of bound multi-cloud AccessKeys, complete the following preparations:
   * 1. Activate the Cloud Threat Detection and Response (CTDR) service in Security Center.
   * 2. Configure the SIEM AccessKey for threat detection and response.
   * 
   * @param request - ListAccountAccessIdRequest
   * @returns ListAccountAccessIdResponse
   */
  async listAccountAccessId(request: $_model.ListAccountAccessIdRequest): Promise<$_model.ListAccountAccessIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountAccessIdWithOptions(request, runtime);
  }

  /**
   * Queries the list of accounts by log.
   * 
   * @remarks
   * Before calling this operation to query the list of accounts by log, you must activate the Cloud Threat Detection and Response (CTDR) service. You can activate the service by calling the EnableServiceForCloudSiem operation or through the threat analysis console in Security Center. This operation is unavailable if the service is not activated.
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
   * Queries the list of accounts by log.
   * 
   * @remarks
   * Before calling this operation to query the list of accounts by log, you must activate the Cloud Threat Detection and Response (CTDR) service. You can activate the service by calling the EnableServiceForCloudSiem operation or through the threat analysis console in Security Center. This operation is unavailable if the service is not activated.
   * 
   * @param request - ListAccountsByLogRequest
   * @returns ListAccountsByLogResponse
   */
  async listAccountsByLog(request: $_model.ListAccountsByLogRequest): Promise<$_model.ListAccountsByLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAccountsByLogWithOptions(request, runtime);
  }

  /**
   * Queries the list of cloud services that are supported for data ingestion by threat detection and response.
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
   * Queries the list of cloud services that are supported for data ingestion by threat detection and response.
   * 
   * @param request - ListAllProdsRequest
   * @returns ListAllProdsResponse
   */
  async listAllProds(request: $_model.ListAllProdsRequest): Promise<$_model.ListAllProdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAllProdsWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of automated response rules.
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
   * Retrieves a list of automated response rules.
   * 
   * @param request - ListAutomateResponseConfigsRequest
   * @returns ListAutomateResponseConfigsResponse
   */
  async listAutomateResponseConfigs(request: $_model.ListAutomateResponseConfigsRequest): Promise<$_model.ListAutomateResponseConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAutomateResponseConfigsWithOptions(request, runtime);
  }

  /**
   * Lists the multi-cloud accounts that are bound to threat detection and response.
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
   * Lists the multi-cloud accounts that are bound to threat detection and response.
   * 
   * @param request - ListBindAccountRequest
   * @returns ListBindAccountResponse
   */
  async listBindAccount(request: $_model.ListBindAccountRequest): Promise<$_model.ListBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindAccountWithOptions(request, runtime);
  }

  /**
   * Enumerates all data sources.
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
   * Enumerates all data sources.
   * 
   * @param request - ListBindDataSourcesRequest
   * @returns ListBindDataSourcesResponse
   */
  async listBindDataSources(request: $_model.ListBindDataSourcesRequest): Promise<$_model.ListBindDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBindDataSourcesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of custom rules.
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
   * Retrieves a list of custom rules.
   * 
   * @param request - ListCloudSiemCustomizeRulesRequest
   * @returns ListCloudSiemCustomizeRulesResponse
   */
  async listCloudSiemCustomizeRules(request: $_model.ListCloudSiemCustomizeRulesRequest): Promise<$_model.ListCloudSiemCustomizeRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudSiemCustomizeRulesWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of predefined rules.
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
   * Retrieves a list of predefined rules.
   * 
   * @param request - ListCloudSiemPredefinedRulesRequest
   * @returns ListCloudSiemPredefinedRulesResponse
   */
  async listCloudSiemPredefinedRules(request: $_model.ListCloudSiemPredefinedRulesRequest): Promise<$_model.ListCloudSiemPredefinedRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCloudSiemPredefinedRulesWithOptions(request, runtime);
  }

  /**
   * Queries the list of test results for custom rules.
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
   * Queries the list of test results for custom rules.
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
   * Enumerates the multi-cloud data source types that are supported by threat analysis.
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
   * Enumerates the multi-cloud data source types that are supported by threat analysis.
   * 
   * @param request - ListDataSourceTypesRequest
   * @returns ListDataSourceTypesResponse
   */
  async listDataSourceTypes(request: $_model.ListDataSourceTypesRequest): Promise<$_model.ListDataSourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourceTypesWithOptions(request, runtime);
  }

  /**
   * Queries the products and logs integrated with Threat Analysis for the entire enterprise or regular members, along with the data delivery status of these logs.
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
   * Queries the products and logs integrated with Threat Analysis for the entire enterprise or regular members, along with the data delivery status of these logs.
   * 
   * @param request - ListDeliveryRequest
   * @returns ListDeliveryResponse
   */
  async listDelivery(request: $_model.ListDeliveryRequest): Promise<$_model.ListDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeliveryWithOptions(request, runtime);
  }

  /**
   * Queries the list of system-recommended response policies.
   * 
   * @param tmpReq - ListDisposeStrategyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategyWithOptions(tmpReq: $_model.ListDisposeStrategyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDisposeStrategyResponse> {
    tmpReq.validate();
    let request = new $_model.ListDisposeStrategyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.entityUuidList)) {
      request.entityUuidListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.entityUuidList, "EntityUuidList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertUuid)) {
      body["AlertUuid"] = request.alertUuid;
    }

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

    if (!$dara.isNull(request.entityUuidListShrink)) {
      body["EntityUuidList"] = request.entityUuidListShrink;
    }

    if (!$dara.isNull(request.groupBy)) {
      body["GroupBy"] = request.groupBy;
    }

    if (!$dara.isNull(request.groupKey)) {
      body["GroupKey"] = request.groupKey;
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

    if (!$dara.isNull(request.queryMode)) {
      body["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.responseRuleId)) {
      body["ResponseRuleId"] = request.responseRuleId;
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

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.strategyId)) {
      body["StrategyId"] = request.strategyId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
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
   * Queries the list of system-recommended response policies.
   * 
   * @param request - ListDisposeStrategyRequest
   * @returns ListDisposeStrategyResponse
   */
  async listDisposeStrategy(request: $_model.ListDisposeStrategyRequest): Promise<$_model.ListDisposeStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDisposeStrategyWithOptions(request, runtime);
  }

  /**
   * Queries a list of entities.
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

    if (!$dara.isNull(request.entityUuids)) {
      body["EntityUuids"] = request.entityUuids;
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

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
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
   * Queries a list of entities.
   * 
   * @param request - ListEntitiesRequest
   * @returns ListEntitiesResponse
   */
  async listEntities(request: $_model.ListEntitiesRequest): Promise<$_model.ListEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries the log onboarding details for the product.
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
   * Queries the log onboarding details for the product.
   * 
   * @param request - ListImportedLogsByProdRequest
   * @returns ListImportedLogsByProdResponse
   */
  async listImportedLogsByProd(request: $_model.ListImportedLogsByProdRequest): Promise<$_model.ListImportedLogsByProdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImportedLogsByProdWithOptions(request, runtime);
  }

  /**
   * Queries projects and Logstores based on the name patterns of the default SLS project and Logstore for an Alibaba Cloud service.
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
   * Queries projects and Logstores based on the name patterns of the default SLS project and Logstore for an Alibaba Cloud service.
   * 
   * @param request - ListProjectLogStoresRequest
   * @returns ListProjectLogStoresResponse
   */
  async listProjectLogStores(request: $_model.ListProjectLogStoresRequest): Promise<$_model.ListProjectLogStoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectLogStoresWithOptions(request, runtime);
  }

  /**
   * Lists the Alibaba Cloud accounts that are managed by the multi-account management feature of Threat Analysis. Only managed accounts can use features such as log ingestion and event handling in Threat Analysis.
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
   * Lists the Alibaba Cloud accounts that are managed by the multi-account management feature of Threat Analysis. Only managed accounts can use features such as log ingestion and event handling in Threat Analysis.
   * 
   * @param request - ListRdUsersRequest
   * @returns ListRdUsersResponse
   */
  async listRdUsers(request: $_model.ListRdUsersRequest): Promise<$_model.ListRdUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRdUsersWithOptions(request, runtime);
  }

  /**
   * Modifies a bound cloud account.
   * 
   * @remarks
   * Before calling this operation to modify a bound cloud account, complete the following steps in order:
   * 1. Configure the AccessKey credentials of a third-party cloud provider (Tencent Cloud or Huawei Cloud) in Security Center (SAS).
   * 2. Call the BindAccount operation to create a binding record and obtain the BindId.
   * 3. Call this operation (ModifyBindAccount) with the BindId to modify the bound account.
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
   * Modifies a bound cloud account.
   * 
   * @remarks
   * Before calling this operation to modify a bound cloud account, complete the following steps in order:
   * 1. Configure the AccessKey credentials of a third-party cloud provider (Tencent Cloud or Huawei Cloud) in Security Center (SAS).
   * 2. Call the BindAccount operation to create a binding record and obtain the BindId.
   * 3. Call this operation (ModifyBindAccount) with the BindId to modify the bound account.
   * 
   * @param request - ModifyBindAccountRequest
   * @returns ModifyBindAccountResponse
   */
  async modifyBindAccount(request: $_model.ModifyBindAccountRequest): Promise<$_model.ModifyBindAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBindAccountWithOptions(request, runtime);
  }

  /**
   * Modifies the description of an existing data source.
   * 
   * @remarks
   * Before you call this operation to modify a data source, you must complete the following prerequisites in sequence:
   * 1. Purchase the Cloud SIEM service.
   * 2. Call the BindAccount operation to bind a third-party cloud account.
   * 3. Call the AddDataSource operation to create a data source instance and obtain the data source ID (DataSourceInstanceId).
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
   * Modifies the description of an existing data source.
   * 
   * @remarks
   * Before you call this operation to modify a data source, you must complete the following prerequisites in sequence:
   * 1. Purchase the Cloud SIEM service.
   * 2. Call the BindAccount operation to bind a third-party cloud account.
   * 3. Call the AddDataSource operation to create a data source instance and obtain the data source ID (DataSourceInstanceId).
   * 
   * @param request - ModifyDataSourceRequest
   * @returns ModifyDataSourceResponse
   */
  async modifyDataSource(request: $_model.ModifyDataSourceRequest): Promise<$_model.ModifyDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataSourceWithOptions(request, runtime);
  }

  /**
   * Modifies the description of logs added to a data source.
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
   * Modifies the description of logs added to a data source.
   * 
   * @param request - ModifyDataSourceLogRequest
   * @returns ModifyDataSourceLogResponse
   */
  async modifyDataSourceLog(request: $_model.ModifyDataSourceLogRequest): Promise<$_model.ModifyDataSourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDataSourceLogWithOptions(request, runtime);
  }

  /**
   * Enables log delivery for onboarded cloud services.
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
   * Enables log delivery for onboarded cloud services.
   * 
   * @param request - OpenDeliveryRequest
   * @returns OpenDeliveryResponse
   */
  async openDelivery(request: $_model.OpenDeliveryRequest): Promise<$_model.OpenDeliveryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openDeliveryWithOptions(request, runtime);
  }

  /**
   * Adds or updates an automated response rule.
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
   * Adds or updates an automated response rule.
   * 
   * @param request - PostAutomateResponseConfigRequest
   * @returns PostAutomateResponseConfigResponse
   */
  async postAutomateResponseConfig(request: $_model.PostAutomateResponseConfigRequest): Promise<$_model.PostAutomateResponseConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postAutomateResponseConfigWithOptions(request, runtime);
  }

  /**
   * Adds or updates a custom rule.
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
   * Adds or updates a custom rule.
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
   * Submits incident handling information, updates the incident status, and updates the incident severity level.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleListWithOptions(request: $_model.PostEventDisposeAndWhiteruleListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PostEventDisposeAndWhiteruleListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disposeStrategyIds)) {
      body["DisposeStrategyIds"] = request.disposeStrategyIds;
    }

    if (!$dara.isNull(request.eventDispose)) {
      body["EventDispose"] = request.eventDispose;
    }

    if (!$dara.isNull(request.incidentUuid)) {
      body["IncidentUuid"] = request.incidentUuid;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
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

    if (!$dara.isNull(request.responseSource)) {
      body["ResponseSource"] = request.responseSource;
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

    if (!$dara.isNull(request.syncAlertStatus)) {
      body["SyncAlertStatus"] = request.syncAlertStatus;
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
   * Submits incident handling information, updates the incident status, and updates the incident severity level.
   * 
   * @param request - PostEventDisposeAndWhiteruleListRequest
   * @returns PostEventDisposeAndWhiteruleListResponse
   */
  async postEventDisposeAndWhiteruleList(request: $_model.PostEventDisposeAndWhiteruleListRequest): Promise<$_model.PostEventDisposeAndWhiteruleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postEventDisposeAndWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Submits alert whitelisting rules.
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
   * Submits alert whitelisting rules.
   * 
   * @param request - PostEventWhiteruleListRequest
   * @returns PostEventWhiteruleListResponse
   */
  async postEventWhiteruleList(request: $_model.PostEventWhiteruleListRequest): Promise<$_model.PostEventWhiteruleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.postEventWhiteruleListWithOptions(request, runtime);
  }

  /**
   * Ends the custom rule test.
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
   * Ends the custom rule test.
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
   * Releases storage space. This operation is irreversible and causes data loss. Use with caution.
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
   * Releases storage space. This operation is irreversible and causes data loss. Use with caution.
   * 
   * @param request - RestoreCapacityRequest
   * @returns RestoreCapacityResponse
   */
  async restoreCapacity(request: $_model.RestoreCapacityRequest): Promise<$_model.RestoreCapacityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreCapacityWithOptions(request, runtime);
  }

  /**
   * Saves user-configured storage information such as the retention period and storage region.
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
   * Saves user-configured storage information such as the retention period and storage region.
   * 
   * @param request - SetStorageRequest
   * @returns SetStorageResponse
   */
  async setStorage(request: $_model.SetStorageRequest): Promise<$_model.SetStorageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setStorageWithOptions(request, runtime);
  }

  /**
   * Submits multiple onboarding tasks.
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
   * Submits multiple onboarding tasks.
   * 
   * @param request - SubmitImportLogTasksRequest
   * @returns SubmitImportLogTasksResponse
   */
  async submitImportLogTasks(request: $_model.SubmitImportLogTasksRequest): Promise<$_model.SubmitImportLogTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitImportLogTasksWithOptions(request, runtime);
  }

  /**
   * Updates the status of automated response rules.
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
   * Updates the status of automated response rules.
   * 
   * @param request - UpdateAutomateResponseConfigStatusRequest
   * @returns UpdateAutomateResponseConfigStatusResponse
   */
  async updateAutomateResponseConfigStatus(request: $_model.UpdateAutomateResponseConfigStatusRequest): Promise<$_model.UpdateAutomateResponseConfigStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAutomateResponseConfigStatusWithOptions(request, runtime);
  }

  /**
   * Adds or updates alert whitelist rules.
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
   * Adds or updates alert whitelist rules.
   * 
   * @param request - UpdateWhiteRuleListRequest
   * @returns UpdateWhiteRuleListResponse
   */
  async updateWhiteRuleList(request: $_model.UpdateWhiteRuleListRequest): Promise<$_model.UpdateWhiteRuleListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWhiteRuleListWithOptions(request, runtime);
  }

}
