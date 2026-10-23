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
      'cn-hongkong': "sddp-api.cn-hongkong.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sddp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Checks the prerequisites for column encryption on an instance.
   * 
   * @remarks
   * Checks the permissions, engine, and runtime conditions of an instance before creating column encryption rules. Check both ErrorCode and ErrorMessage in the response. Only ErrorCode=Success indicates that the check passed. A successful request alone does not mean the instance meets all encryption conditions. This check does not create column encryption rules.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your account.
   * Use the service registration endpoint of the region where the target asset resides, and configure the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - CheckDataMaskingInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDataMaskingInstanceResponse
   */
  async checkDataMaskingInstanceWithOptions(request: $_model.CheckDataMaskingInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDataMaskingInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDataMaskingInstance",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDataMaskingInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CheckDataMaskingInstanceResponse({}));
  }

  /**
   * Checks the prerequisites for column encryption on an instance.
   * 
   * @remarks
   * Checks the permissions, engine, and runtime conditions of an instance before creating column encryption rules. Check both ErrorCode and ErrorMessage in the response. Only ErrorCode=Success indicates that the check passed. A successful request alone does not mean the instance meets all encryption conditions. This check does not create column encryption rules.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your account.
   * Use the service registration endpoint of the region where the target asset resides, and configure the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - CheckDataMaskingInstanceRequest
   * @returns CheckDataMaskingInstanceResponse
   */
  async checkDataMaskingInstance(request: $_model.CheckDataMaskingInstanceRequest): Promise<$_model.CheckDataMaskingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDataMaskingInstanceWithOptions(request, runtime);
  }

  /**
   * Creates a column encryption rule.
   * 
   * @remarks
   * Creates a column encryption rule for a specified database, table, and columns under the same instance. Before invoking this operation, verify the instance status, supported algorithms, key, target columns, and accounts. SubRuleList is a list of target columns grouped by table. Columns is a comma-separated string of column names. Accounts in UserList are granted fullAccess plaintext access permissions. A successful request indicates only that the request has been accepted. You must invoke [ListDataMaskingColumns](https://help.aliyun.com/document_detail/2859325.html) and [ListDataAssetAccounts](https://help.aliyun.com/document_detail/2859330.html) to confirm the column status, account access permissions, and expiration time.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. A successful request does not mean that the operation is complete. Read back the status as described in the operation description.
   * 
   * @param tmpReq - CreateDataMaskingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataMaskingRuleResponse
   */
  async createDataMaskingRuleWithOptions(tmpReq: $_model.CreateDataMaskingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataMaskingRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDataMaskingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subRuleList)) {
      request.subRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subRuleList, "SubRuleList", "json");
    }

    if (!$dara.isNull(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "UserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.encAlgorithm)) {
      query["EncAlgorithm"] = request.encAlgorithm;
    }

    if (!$dara.isNull(request.encryptionKeyId)) {
      query["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!$dara.isNull(request.encryptionKeyMode)) {
      query["EncryptionKeyMode"] = request.encryptionKeyMode;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.expireTimeOperation)) {
      query["ExpireTimeOperation"] = request.expireTimeOperation;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskHandleId)) {
      query["RiskHandleId"] = request.riskHandleId;
    }

    if (!$dara.isNull(request.subRuleListShrink)) {
      query["SubRuleList"] = request.subRuleListShrink;
    }

    if (!$dara.isNull(request.userListShrink)) {
      query["UserList"] = request.userListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataMaskingRule",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataMaskingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataMaskingRuleResponse({}));
  }

  /**
   * Creates a column encryption rule.
   * 
   * @remarks
   * Creates a column encryption rule for a specified database, table, and columns under the same instance. Before invoking this operation, verify the instance status, supported algorithms, key, target columns, and accounts. SubRuleList is a list of target columns grouped by table. Columns is a comma-separated string of column names. Accounts in UserList are granted fullAccess plaintext access permissions. A successful request indicates only that the request has been accepted. You must invoke [ListDataMaskingColumns](https://help.aliyun.com/document_detail/2859325.html) and [ListDataAssetAccounts](https://help.aliyun.com/document_detail/2859330.html) to confirm the column status, account access permissions, and expiration time.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. A successful request does not mean that the operation is complete. Read back the status as described in the operation description.
   * 
   * @param request - CreateDataMaskingRuleRequest
   * @returns CreateDataMaskingRuleResponse
   */
  async createDataMaskingRule(request: $_model.CreateDataMaskingRuleRequest): Promise<$_model.CreateDataMaskingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataMaskingRuleWithOptions(request, runtime);
  }

  /**
   * Disables encryption for specified columns.
   * 
   * @remarks
   * Disables column encryption rules for specified columns within the same instance. SubRuleList precisely specifies the database, table, and columns. If no matching rule is found, no new operation object is created. The disable request is processed asynchronously. Use ListDataMaskingColumns to verify that the column has recovered to NotEncrypted or that the target rule has been removed. DeleteFailed indicates that the shutdown failed.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained by querying your current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. Request acceptance does not indicate that the business operation is complete. Poll the status as described in the operation description.
   * 
   * @param tmpReq - DeleteDataMaskingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataMaskingRuleResponse
   */
  async deleteDataMaskingRuleWithOptions(tmpReq: $_model.DeleteDataMaskingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataMaskingRuleResponse> {
    tmpReq.validate();
    let request = new $_model.DeleteDataMaskingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.subRuleList)) {
      request.subRuleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.subRuleList, "SubRuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.subRuleListShrink)) {
      query["SubRuleList"] = request.subRuleListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataMaskingRule",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataMaskingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataMaskingRuleResponse({}));
  }

  /**
   * Disables encryption for specified columns.
   * 
   * @remarks
   * Disables column encryption rules for specified columns within the same instance. SubRuleList precisely specifies the database, table, and columns. If no matching rule is found, no new operation object is created. The disable request is processed asynchronously. Use ListDataMaskingColumns to verify that the column has recovered to NotEncrypted or that the target rule has been removed. DeleteFailed indicates that the shutdown failed.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained by querying your current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. Request acceptance does not indicate that the business operation is complete. Poll the status as described in the operation description.
   * 
   * @param request - DeleteDataMaskingRuleRequest
   * @returns DeleteDataMaskingRuleResponse
   */
  async deleteDataMaskingRule(request: $_model.DeleteDataMaskingRuleRequest): Promise<$_model.DeleteDataMaskingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataMaskingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the permission statistics of column encryption accounts.
   * 
   * @remarks
   * Queries the permission statistics of database accounts in the current region by product scope. Plaintext accounts correspond to FullAccessCount. Restricted access and decryption-prohibited accounts are counted in RestrictedAccessCount and NoneAccessCount, respectively. The number of accounts without configured permissions can be obtained by subtracting the preceding three account types from TotalCount. This operation does not accept filter conditions such as instance, database, table, or column.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained by querying the current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetDataMaskingAccountCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataMaskingAccountCountResponse
   */
  async getDataMaskingAccountCountWithOptions(request: $_model.GetDataMaskingAccountCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataMaskingAccountCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataMaskingAccountCount",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataMaskingAccountCountResponse>(await this.callApi(params, req, runtime), new $_model.GetDataMaskingAccountCountResponse({}));
  }

  /**
   * Queries the permission statistics of column encryption accounts.
   * 
   * @remarks
   * Queries the permission statistics of database accounts in the current region by product scope. Plaintext accounts correspond to FullAccessCount. Restricted access and decryption-prohibited accounts are counted in RestrictedAccessCount and NoneAccessCount, respectively. The number of accounts without configured permissions can be obtained by subtracting the preceding three account types from TotalCount. This operation does not accept filter conditions such as instance, database, table, or column.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained by querying the current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId to the corresponding value, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetDataMaskingAccountCountRequest
   * @returns GetDataMaskingAccountCountResponse
   */
  async getDataMaskingAccountCount(request: $_model.GetDataMaskingAccountCountRequest): Promise<$_model.GetDataMaskingAccountCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataMaskingAccountCountWithOptions(request, runtime);
  }

  /**
   * Queries column encryption statistics.
   * 
   * @remarks
   * Queries the total number of columns, the number of sensitive columns, the number of encrypted columns, and the number of columns that failed to be encrypted by region, product, and categorization template. This operation returns statistics card data and does not follow the instance, database name, table name, column name, or model filters in the column list.
   * For compatible with historical detection results, if no initial results are found for the specified template and no filtering by sensitivity level or detection model is applied, the results may backoff to built-in general detection results. To enforce strict template ownership, verify the results by using the sensitivity level or model conditions within the template.
   * The parameter examples are provided only to illustrate the format. Replace the values with the regions, resource identifiers, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetDataMaskingColumnCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataMaskingColumnCountResponse
   */
  async getDataMaskingColumnCountWithOptions(request: $_model.GetDataMaskingColumnCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataMaskingColumnCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataMaskingColumnCount",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataMaskingColumnCountResponse>(await this.callApi(params, req, runtime), new $_model.GetDataMaskingColumnCountResponse({}));
  }

  /**
   * Queries column encryption statistics.
   * 
   * @remarks
   * Queries the total number of columns, the number of sensitive columns, the number of encrypted columns, and the number of columns that failed to be encrypted by region, product, and categorization template. This operation returns statistics card data and does not follow the instance, database name, table name, column name, or model filters in the column list.
   * For compatible with historical detection results, if no initial results are found for the specified template and no filtering by sensitivity level or detection model is applied, the results may backoff to built-in general detection results. To enforce strict template ownership, verify the results by using the sensitivity level or model conditions within the template.
   * The parameter examples are provided only to illustrate the format. Replace the values with the regions, resource identifiers, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetDataMaskingColumnCountRequest
   * @returns GetDataMaskingColumnCountResponse
   */
  async getDataMaskingColumnCount(request: $_model.GetDataMaskingColumnCountRequest): Promise<$_model.GetDataMaskingColumnCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataMaskingColumnCountWithOptions(request, runtime);
  }

  /**
   * Queries the engine and kernel properties of an instance.
   * 
   * @remarks
   * Queries the DPI engine, current kernel version, O&M window, and KMS encryption support of an instance. After a kernel upgrade, you can read back CurrentKernelVersion to verify the target version. If ErrorCode or ErrorMessage is present, handle the property query exception first.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides, and configure the common parameter RegionId in Settings, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetInstanceAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceAttributeResponse
   */
  async getInstanceAttributeWithOptions(request: $_model.GetInstanceAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceAttribute",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceAttributeResponse({}));
  }

  /**
   * Queries the engine and kernel properties of an instance.
   * 
   * @remarks
   * Queries the DPI engine, current kernel version, O&M window, and KMS encryption support of an instance. After a kernel upgrade, you can read back CurrentKernelVersion to verify the target version. If ErrorCode or ErrorMessage is present, handle the property query exception first.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides, and configure the common parameter RegionId in Settings, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - GetInstanceAttributeRequest
   * @returns GetInstanceAttributeResponse
   */
  async getInstanceAttribute(request: $_model.GetInstanceAttributeRequest): Promise<$_model.GetInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * Queries columns and detection results of a data table.
   * 
   * @remarks
   * Queries columns and detection results of a data table with paging. When both DataAssetSourceId and InstanceName are specified, DataAssetSourceId takes precedence. For PostgreSQL and Oracle scenarios, you can use the schema.table format for TableName and pass in the corresponding EngineType. To query the execute status of column encryption, invoke ListDataMaskingColumns.
   * For compatible with historical detection results, if the specified template has no initial results and no filtering by sensitivity level or detection model is applied, the results may fall back to built-in general detection results. To strictly verify template ownership, use the sensitivity level or model conditions within the template for verification.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target asset.
   * 
   * @param request - ListColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListColumnsResponse
   */
  async listColumnsWithOptions(request: $_model.ListColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataAssetSourceId)) {
      query["DataAssetSourceId"] = request.dataAssetSourceId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListColumns",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListColumnsResponse({}));
  }

  /**
   * Queries columns and detection results of a data table.
   * 
   * @remarks
   * Queries columns and detection results of a data table with paging. When both DataAssetSourceId and InstanceName are specified, DataAssetSourceId takes precedence. For PostgreSQL and Oracle scenarios, you can use the schema.table format for TableName and pass in the corresponding EngineType. To query the execute status of column encryption, invoke ListDataMaskingColumns.
   * For compatible with historical detection results, if the specified template has no initial results and no filtering by sensitivity level or detection model is applied, the results may fall back to built-in general detection results. To strictly verify template ownership, use the sensitivity level or model conditions within the template for verification.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target asset.
   * 
   * @param request - ListColumnsRequest
   * @returns ListColumnsResponse
   */
  async listColumns(request: $_model.ListColumnsRequest): Promise<$_model.ListColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  /**
   * Queries database accounts and column encryption permissions.
   * 
   * @remarks
   * Queries database accounts and their column encryption access permissions with paging. Use this operation to select plaintext accounts when creating rules, and to verify AuthRole, EncryptionKeyMode, and ExpireTime before and after modifying account permissions. AccountName filters by exact account name. The account identity is obtained from Items[].Id.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your current account query.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataAssetAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataAssetAccountsResponse
   */
  async listDataAssetAccountsWithOptions(request: $_model.ListDataAssetAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataAssetAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.authRole)) {
      query["AuthRole"] = request.authRole;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataAssetAccounts",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataAssetAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataAssetAccountsResponse({}));
  }

  /**
   * Queries database accounts and column encryption permissions.
   * 
   * @remarks
   * Queries database accounts and their column encryption access permissions with paging. Use this operation to select plaintext accounts when creating rules, and to verify AuthRole, EncryptionKeyMode, and ExpireTime before and after modifying account permissions. AccountName filters by exact account name. The account identity is obtained from Items[].Id.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your current account query.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataAssetAccountsRequest
   * @returns ListDataAssetAccountsResponse
   */
  async listDataAssetAccounts(request: $_model.ListDataAssetAccountsRequest): Promise<$_model.ListDataAssetAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAssetAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the encryption status and detection results of columns.
   * 
   * @remarks
   * Performs a paging query on columns and their encryption status, sensitivity levels, and detection models. You can filter results by combining template, product, instance, database, table, column name, model, and sensitivity level. Use this operation to read back results after creating or shutting down a rule. Processing and Deleting are intermediate states. Failed and DeleteFailed indicate operation failures. The casing of the parameter name RiskLeveLId must be preserved as-is.
   * When querying by product, use a single ProductId or the corresponding ProductCode. Column queries do not support multi-product filtering through ProductIds. Query each product separately for multi-product scenarios.
   * For compatibility with historical detection results, if no first-page results are found for the specified template and no sensitivity level or detection model filter is applied, the results may fall back to built-in general detection results. To enforce strict template ownership, also use a level or model condition from that template for verification.
   * Parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, for example, cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - ListDataMaskingColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataMaskingColumnsResponse
   */
  async listDataMaskingColumnsWithOptions(request: $_model.ListDataMaskingColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataMaskingColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maskingStatus)) {
      query["MaskingStatus"] = request.maskingStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!$dara.isNull(request.riskLeveLId)) {
      query["RiskLeveLId"] = request.riskLeveLId;
    }

    if (!$dara.isNull(request.riskLevelIds)) {
      query["RiskLevelIds"] = request.riskLevelIds;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateRuleIds)) {
      query["TemplateRuleIds"] = request.templateRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataMaskingColumns",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataMaskingColumnsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataMaskingColumnsResponse({}));
  }

  /**
   * Queries the encryption status and detection results of columns.
   * 
   * @remarks
   * Performs a paging query on columns and their encryption status, sensitivity levels, and detection models. You can filter results by combining template, product, instance, database, table, column name, model, and sensitivity level. Use this operation to read back results after creating or shutting down a rule. Processing and Deleting are intermediate states. Failed and DeleteFailed indicate operation failures. The casing of the parameter name RiskLeveLId must be preserved as-is.
   * When querying by product, use a single ProductId or the corresponding ProductCode. Column queries do not support multi-product filtering through ProductIds. Query each product separately for multi-product scenarios.
   * For compatibility with historical detection results, if no first-page results are found for the specified template and no sensitivity level or detection model filter is applied, the results may fall back to built-in general detection results. To enforce strict template ownership, also use a level or model condition from that template for verification.
   * Parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, for example, cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - ListDataMaskingColumnsRequest
   * @returns ListDataMaskingColumnsResponse
   */
  async listDataMaskingColumns(request: $_model.ListDataMaskingColumnsRequest): Promise<$_model.ListDataMaskingColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the column encryption algorithms supported by an instance.
   * 
   * @remarks
   * Queries the available column encryption algorithms for a specified instance and the restriction reasons for each algorithm. Before selecting an algorithm, check the ErrorCode and ErrorMessage of the corresponding entry. Do not assume that all instances support the same set of algorithms.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your current account.
   * Use the service registration endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - ListDataMaskingEncryptionAlgorithmsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataMaskingEncryptionAlgorithmsResponse
   */
  async listDataMaskingEncryptionAlgorithmsWithOptions(request: $_model.ListDataMaskingEncryptionAlgorithmsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataMaskingEncryptionAlgorithmsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataMaskingEncryptionAlgorithms",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataMaskingEncryptionAlgorithmsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataMaskingEncryptionAlgorithmsResponse({}));
  }

  /**
   * Queries the column encryption algorithms supported by an instance.
   * 
   * @remarks
   * Queries the available column encryption algorithms for a specified instance and the restriction reasons for each algorithm. Before selecting an algorithm, check the ErrorCode and ErrorMessage of the corresponding entry. Do not assume that all instances support the same set of algorithms.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your current account.
   * Use the service registration endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identifier must match the target asset.
   * 
   * @param request - ListDataMaskingEncryptionAlgorithmsRequest
   * @returns ListDataMaskingEncryptionAlgorithmsResponse
   */
  async listDataMaskingEncryptionAlgorithms(request: $_model.ListDataMaskingEncryptionAlgorithmsRequest): Promise<$_model.ListDataMaskingEncryptionAlgorithmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingEncryptionAlgorithmsWithOptions(request, runtime);
  }

  /**
   * Queries column encryption instances.
   * 
   * @remarks
   * Queries column encryption instances by paging and supports filtering by product, detection template, and database/table/column. Instance-level status filtering differs from column-level status filtering in scope. To find all unencrypted sensitive columns, first enumerate the instances of the target product, and then use ListDataMaskingColumns to filter by NotEncrypted. This prevents you from missing instances that are partially encrypted.
   * To filter precisely by EngineType, read all candidate pages and then filter by the returned values. Some query paths do not apply this parameter. The matching semantics of InstanceId vary depending on the query combination. To precisely locate an instance, verify the complete instance identity in the response.
   * The parameter examples are provided only to illustrate the format. Replace the values with the region IDs, resource identities, and configuration values that you obtain from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataMaskingInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataMaskingInstancesResponse
   */
  async listDataMaskingInstancesWithOptions(request: $_model.ListDataMaskingInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataMaskingInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maskingStatus)) {
      query["MaskingStatus"] = request.maskingStatus;
    }

    if (!$dara.isNull(request.modelTagId)) {
      query["ModelTagId"] = request.modelTagId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.productIds)) {
      query["ProductIds"] = request.productIds;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.riskLevelIds)) {
      query["RiskLevelIds"] = request.riskLevelIds;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.templateRuleIds)) {
      query["TemplateRuleIds"] = request.templateRuleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataMaskingInstances",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataMaskingInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataMaskingInstancesResponse({}));
  }

  /**
   * Queries column encryption instances.
   * 
   * @remarks
   * Queries column encryption instances by paging and supports filtering by product, detection template, and database/table/column. Instance-level status filtering differs from column-level status filtering in scope. To find all unencrypted sensitive columns, first enumerate the instances of the target product, and then use ListDataMaskingColumns to filter by NotEncrypted. This prevents you from missing instances that are partially encrypted.
   * To filter precisely by EngineType, read all candidate pages and then filter by the returned values. Some query paths do not apply this parameter. The matching semantics of InstanceId vary depending on the query combination. To precisely locate an instance, verify the complete instance identity in the response.
   * The parameter examples are provided only to illustrate the format. Replace the values with the region IDs, resource identities, and configuration values that you obtain from your account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataMaskingInstancesRequest
   * @returns ListDataMaskingInstancesResponse
   */
  async listDataMaskingInstances(request: $_model.ListDataMaskingInstancesRequest): Promise<$_model.ListDataMaskingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the databases of an instance.
   * 
   * @remarks
   * Performs a paged query on managed data sources by using paging. In relational database scenarios, locate the instance by using ProductCode and InstanceId, and select a database from Items[].DbName. This operation queries the database inventory and does not filter by data categorization and classification templates.
   * Parameter examples are for format illustration only. Replace them with the region, resource identity, and configuration values obtained from the current account when you invoke this operation.
   * Use the service registration endpoint of the region where the target asset resides and configure the settings of the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(request: $_model.ListDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectStatus)) {
      query["ConnectStatus"] = request.connectStatus;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataAssetId)) {
      query["DataAssetId"] = request.dataAssetId;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.identifyStatus)) {
      query["IdentifyStatus"] = request.identifyStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * Queries the databases of an instance.
   * 
   * @remarks
   * Performs a paged query on managed data sources by using paging. In relational database scenarios, locate the instance by using ProductCode and InstanceId, and select a database from Items[].DbName. This operation queries the database inventory and does not filter by data categorization and classification templates.
   * Parameter examples are for format illustration only. Replace them with the region, resource identity, and configuration values obtained from the current account when you invoke this operation.
   * Use the service registration endpoint of the region where the target asset resides and configure the settings of the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries the sensitive data detection models of a template.
   * 
   * @remarks
   * Queries the valid sensitive data detection models within a specified template and returns RuleList. If TemplateId is not specified, the currently enabled template is used. Use RuleList[].Id to obtain model identifiers, which can be used for filtering with TemplateRuleIds.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * 
   * @param request - ListIdentifyModelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIdentifyModelsResponse
   */
  async listIdentifyModelsWithOptions(request: $_model.ListIdentifyModelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListIdentifyModelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.filterAuditModel)) {
      query["FilterAuditModel"] = request.filterAuditModel;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIdentifyModels",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIdentifyModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListIdentifyModelsResponse({}));
  }

  /**
   * Queries the sensitive data detection models of a template.
   * 
   * @remarks
   * Queries the valid sensitive data detection models within a specified template and returns RuleList. If TemplateId is not specified, the currently enabled template is used. Use RuleList[].Id to obtain model identifiers, which can be used for filtering with TemplateRuleIds.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your account.
   * 
   * @param request - ListIdentifyModelsRequest
   * @returns ListIdentifyModelsResponse
   */
  async listIdentifyModels(request: $_model.ListIdentifyModelsRequest): Promise<$_model.ListIdentifyModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentifyModelsWithOptions(request, runtime);
  }

  /**
   * Queries the available KMS keys for column encryption.
   * 
   * @remarks
   * Queries the available KMS key identities and aliases for column encryption configuration of a specified instance. Before using a KMS key, verify the key status and usage conditions by invoking the DescribeKey operation of KMS. This operation does not return key plaintext.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identities, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListKmsKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKmsKeysResponse
   */
  async listKmsKeysWithOptions(request: $_model.ListKmsKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKmsKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKmsKeys",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKmsKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListKmsKeysResponse({}));
  }

  /**
   * Queries the available KMS keys for column encryption.
   * 
   * @remarks
   * Queries the available KMS key identities and aliases for column encryption configuration of a specified instance. Before using a KMS key, verify the key status and usage conditions by invoking the DescribeKey operation of KMS. This operation does not return key plaintext.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identities, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListKmsKeysRequest
   * @returns ListKmsKeysResponse
   */
  async listKmsKeys(request: $_model.ListKmsKeysRequest): Promise<$_model.ListKmsKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKmsKeysWithOptions(request, runtime);
  }

  /**
   * Queries the available kernel versions for upgrade.
   * 
   * @remarks
   * Queries the kernel versions available for an instance. When upgrading, select the target version from KernelVersions[].KernelVersion. Do not manually construct version numbers.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListMiniEngineVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMiniEngineVersionsResponse
   */
  async listMiniEngineVersionsWithOptions(request: $_model.ListMiniEngineVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMiniEngineVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMiniEngineVersions",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMiniEngineVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMiniEngineVersionsResponse({}));
  }

  /**
   * Queries the available kernel versions for upgrade.
   * 
   * @remarks
   * Queries the kernel versions available for an instance. When upgrading, select the target version from KernelVersions[].KernelVersion. Do not manually construct version numbers.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides, and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * 
   * @param request - ListMiniEngineVersionsRequest
   * @returns ListMiniEngineVersionsResponse
   */
  async listMiniEngineVersions(request: $_model.ListMiniEngineVersionsRequest): Promise<$_model.ListMiniEngineVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMiniEngineVersionsWithOptions(request, runtime);
  }

  /**
   * Queries the regions where assets are located.
   * 
   * @remarks
   * Queries the list of regions where the assets owned by the current account are located. You can use this list to select the RegionId for subsequent region-specific API operations. You can filter the regions based on whether auditing or detection is enabled. The returned region list is not the same as the list of all regions supported by Alibaba Cloud services.
   * The parameter examples are for format illustration only. When you call this operation, replace them with the regions, resource identifiers, and configuration values queried from the current account.
   * 
   * @param request - ListRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(request: $_model.ListRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.audited)) {
      query["Audited"] = request.audited;
    }

    if (!$dara.isNull(request.identified)) {
      query["Identified"] = request.identified;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.loadAll)) {
      query["LoadAll"] = request.loadAll;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegionsResponse({}));
  }

  /**
   * Queries the regions where assets are located.
   * 
   * @remarks
   * Queries the list of regions where the assets owned by the current account are located. You can use this list to select the RegionId for subsequent region-specific API operations. You can filter the regions based on whether auditing or detection is enabled. The returned region list is not the same as the list of all regions supported by Alibaba Cloud services.
   * The parameter examples are for format illustration only. When you call this operation, replace them with the regions, resource identifiers, and configuration values queried from the current account.
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the sensitivity levels of a template.
   * 
   * @remarks
   * Queries the sensitivity levels in a data classification template. Use the returned level ID for subsequent queries. Do not use level names such as S1 or S2 directly as the RiskLevelId.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identifiers, and configuration values obtained from your account.
   * 
   * @param request - ListRiskLevelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRiskLevelsResponse
   */
  async listRiskLevelsWithOptions(request: $_model.ListRiskLevelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRiskLevelsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRiskLevels",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRiskLevelsResponse>(await this.callApi(params, req, runtime), new $_model.ListRiskLevelsResponse({}));
  }

  /**
   * Queries the sensitivity levels of a template.
   * 
   * @remarks
   * Queries the sensitivity levels in a data classification template. Use the returned level ID for subsequent queries. Do not use level names such as S1 or S2 directly as the RiskLevelId.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identifiers, and configuration values obtained from your account.
   * 
   * @param request - ListRiskLevelsRequest
   * @returns ListRiskLevelsResponse
   */
  async listRiskLevels(request: $_model.ListRiskLevelsRequest): Promise<$_model.ListRiskLevelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRiskLevelsWithOptions(request, runtime);
  }

  /**
   * Queries database tables.
   * 
   * @remarks
   * Performs a paging query on data tables and detection results in a database. For relational database scenarios, set DataAssetSourceId to the instance identity and DataSourceName to the database name. Table names in PostgreSQL and Oracle may include a schema prefix. Pass the table name as-is in subsequent column queries.
   * For compatibility with historical detection results, if no results are found on the first page for the specified template and no filtering by sensitivity level or detection model is applied, the results may backoff to built-in general detection results. To strictly verify template ownership, also use the sensitivity level or model conditions within the template.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target asset.
   * 
   * @param request - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(request: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dataAssetSourceId)) {
      query["DataAssetSourceId"] = request.dataAssetSourceId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["DataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.marker)) {
      query["Marker"] = request.marker;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.riskLevelId)) {
      query["RiskLevelId"] = request.riskLevelId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * Queries database tables.
   * 
   * @remarks
   * Performs a paging query on data tables and detection results in a database. For relational database scenarios, set DataAssetSourceId to the instance identity and DataSourceName to the database name. Table names in PostgreSQL and Oracle may include a schema prefix. Pass the table name as-is in subsequent column queries.
   * For compatibility with historical detection results, if no results are found on the first page for the specified template and no filtering by sensitivity level or detection model is applied, the results may backoff to built-in general detection results. To strictly verify template ownership, also use the sensitivity level or model conditions within the template.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained from your current account.
   * Use the endpoint of the region where the target asset resides and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target asset.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Queries classification and grading templates.
   * 
   * @remarks
   * Queries the classification and grading templates available to the current account. Use Items[].Id as the TemplateId for subsequent API calls. Detection models and sensitivity levels must come from the same template.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your current account.
   * 
   * @param request - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(request: $_model.ListTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.featureType)) {
      query["FeatureType"] = request.featureType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.usageScenario)) {
      query["UsageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * Queries classification and grading templates.
   * 
   * @remarks
   * Queries the classification and grading templates available to the current account. Use Items[].Id as the TemplateId for subsequent API calls. Detection models and sensitivity levels must come from the same template.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identifiers, and configuration values obtained from your current account.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the summary of sensitive data.
   * 
   * @remarks
   * Queries the statistics of sensitive data from the overview, data catalog, or aggregated by region. CountType=41 returns overview statistics, 42 returns data catalog statistics for a specified product, and 43 returns data aggregated by region and template. The column encryption console uses CountType=43 with ProductCodeList to obtain region and template candidates. The statistics may come from pre-generated summary results and do not indicate that a recently initiated synchronization or encryption operation has completed.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identifiers, and configuration values obtained by querying your current account.
   * 
   * @param request - ListTotalSensitiveInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTotalSensitiveInfoResponse
   */
  async listTotalSensitiveInfoWithOptions(request: $_model.ListTotalSensitiveInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTotalSensitiveInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.countType)) {
      query["CountType"] = request.countType;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productCodeList)) {
      query["ProductCodeList"] = request.productCodeList;
    }

    if (!$dara.isNull(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTotalSensitiveInfo",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTotalSensitiveInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListTotalSensitiveInfoResponse({}));
  }

  /**
   * Queries the summary of sensitive data.
   * 
   * @remarks
   * Queries the statistics of sensitive data from the overview, data catalog, or aggregated by region. CountType=41 returns overview statistics, 42 returns data catalog statistics for a specified product, and 43 returns data aggregated by region and template. The column encryption console uses CountType=43 with ProductCodeList to obtain region and template candidates. The statistics may come from pre-generated summary results and do not indicate that a recently initiated synchronization or encryption operation has completed.
   * The parameter examples are provided only to illustrate the format. Replace them with the regions, resource identifiers, and configuration values obtained by querying your current account.
   * 
   * @param request - ListTotalSensitiveInfoRequest
   * @returns ListTotalSensitiveInfoResponse
   */
  async listTotalSensitiveInfo(request: $_model.ListTotalSensitiveInfoRequest): Promise<$_model.ListTotalSensitiveInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTotalSensitiveInfoWithOptions(request, runtime);
  }

  /**
   * Synchronizes the assets of a specified product in a region.
   * 
   * @remarks
   * Triggers asset synchronization for a specified product in the current region. The scope applies to the product and region, and is not limited to a specific instance. A successful request only indicates that the request is accepted. You can then verify asset changes by checking the lists of instances, databases, tables, and columns. This operation does not return a public node identifier for polling.
   * Parameter examples are for format illustration only. When you invoke this operation, replace them with the region, resource identifiers, and configuration values obtained from the current account.
   * Use the endpoint of the region where the target assets reside, and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target assets.
   * This operation returns only RequestId. Request acceptance does not mean that the business operation is complete. You should check the status as described in the operation description.
   * 
   * @param request - SyncDataAssetsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SyncDataAssetsResponse
   */
  async syncDataAssetsWithOptions(request: $_model.SyncDataAssetsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SyncDataAssetsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SyncDataAssets",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SyncDataAssetsResponse>(await this.callApi(params, req, runtime), new $_model.SyncDataAssetsResponse({}));
  }

  /**
   * Synchronizes the assets of a specified product in a region.
   * 
   * @remarks
   * Triggers asset synchronization for a specified product in the current region. The scope applies to the product and region, and is not limited to a specific instance. A successful request only indicates that the request is accepted. You can then verify asset changes by checking the lists of instances, databases, tables, and columns. This operation does not return a public node identifier for polling.
   * Parameter examples are for format illustration only. When you invoke this operation, replace them with the region, resource identifiers, and configuration values obtained from the current account.
   * Use the endpoint of the region where the target assets reside, and set the common parameter RegionId, such as cn-zhangjiakou. The product code and instance identity must match the target assets.
   * This operation returns only RequestId. Request acceptance does not mean that the business operation is complete. You should check the status as described in the operation description.
   * 
   * @param request - SyncDataAssetsRequest
   * @returns SyncDataAssetsResponse
   */
  async syncDataAssets(request: $_model.SyncDataAssetsRequest): Promise<$_model.SyncDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDataAssetsWithOptions(request, runtime);
  }

  /**
   * Modifies the column encryption algorithm and key for an instance.
   * 
   * @remarks
   * Modifies the instance-level column encryption algorithm and key configuration, which affects the column encryption configuration of the instance. The current implementation supports ApsaraDB RDS for MySQL and PolarDB-X 2.0. Query the algorithms and keys supported by the instance before invoking this operation. This operation does not have an EncryptionKeyMode parameter. Configure the parameter based on the usage conditions of EncryptionKeyId. After a successful request, read back the instance encryption configuration and column status. Do not determine completion based solely on the RequestId.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained by querying your current account.
   * Use the service registration endpoint of the region where the target asset resides, and set the common parameter RegionId, for example, cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only the RequestId. A successful request does not indicate that the business operation is complete. Read back the status as described in the operation description.
   * 
   * @param request - UpdateDataMaskingEncryptionAlgorithmRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataMaskingEncryptionAlgorithmResponse
   */
  async updateDataMaskingEncryptionAlgorithmWithOptions(request: $_model.UpdateDataMaskingEncryptionAlgorithmRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataMaskingEncryptionAlgorithmResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.encryptionAlgorithm)) {
      query["EncryptionAlgorithm"] = request.encryptionAlgorithm;
    }

    if (!$dara.isNull(request.encryptionKeyId)) {
      query["EncryptionKeyId"] = request.encryptionKeyId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataMaskingEncryptionAlgorithm",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataMaskingEncryptionAlgorithmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataMaskingEncryptionAlgorithmResponse({}));
  }

  /**
   * Modifies the column encryption algorithm and key for an instance.
   * 
   * @remarks
   * Modifies the instance-level column encryption algorithm and key configuration, which affects the column encryption configuration of the instance. The current implementation supports ApsaraDB RDS for MySQL and PolarDB-X 2.0. Query the algorithms and keys supported by the instance before invoking this operation. This operation does not have an EncryptionKeyMode parameter. Configure the parameter based on the usage conditions of EncryptionKeyId. After a successful request, read back the instance encryption configuration and column status. Do not determine completion based solely on the RequestId.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identities, and configuration values obtained by querying your current account.
   * Use the service registration endpoint of the region where the target asset resides, and set the common parameter RegionId, for example, cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only the RequestId. A successful request does not indicate that the business operation is complete. Read back the status as described in the operation description.
   * 
   * @param request - UpdateDataMaskingEncryptionAlgorithmRequest
   * @returns UpdateDataMaskingEncryptionAlgorithmResponse
   */
  async updateDataMaskingEncryptionAlgorithm(request: $_model.UpdateDataMaskingEncryptionAlgorithmRequest): Promise<$_model.UpdateDataMaskingEncryptionAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataMaskingEncryptionAlgorithmWithOptions(request, runtime);
  }

  /**
   * Sets the column encryption permissions for multiple database accounts.
   * 
   * @remarks
   * Sets the same column encryption access permissions Settings for a batch of database accounts. UserList can contain accounts from different instances under the same product and region. Each item must include InstanceId and AccountId. fullAccess allows plaintext access, restrictedAccess allows restricted access, and noneAccess prohibits decryption and is supported only by specific DPI engines and key patterns. Only fullAccess supports configuring an expiration time. After a successful request, invoke ListDataAssetAccounts to read back the results.
   * The parameter examples are for format illustration only. When invoking this operation, replace them with the region, resource identity, and configuration values obtained from the current account.
   * Use the service registration endpoint of the region where the target asset is located and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. Request acceptance does not mean the business operation is complete. You must read back the status as described in the operation description.
   * 
   * @param tmpReq - UpdateDataMaskingUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataMaskingUsersResponse
   */
  async updateDataMaskingUsersWithOptions(tmpReq: $_model.UpdateDataMaskingUsersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataMaskingUsersResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDataMaskingUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userList)) {
      request.userListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userList, "UserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.authRole)) {
      query["AuthRole"] = request.authRole;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.expireTimeOperation)) {
      query["ExpireTimeOperation"] = request.expireTimeOperation;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.userListShrink)) {
      query["UserList"] = request.userListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataMaskingUsers",
      version: "2026-01-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataMaskingUsersResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataMaskingUsersResponse({}));
  }

  /**
   * Sets the column encryption permissions for multiple database accounts.
   * 
   * @remarks
   * Sets the same column encryption access permissions Settings for a batch of database accounts. UserList can contain accounts from different instances under the same product and region. Each item must include InstanceId and AccountId. fullAccess allows plaintext access, restrictedAccess allows restricted access, and noneAccess prohibits decryption and is supported only by specific DPI engines and key patterns. Only fullAccess supports configuring an expiration time. After a successful request, invoke ListDataAssetAccounts to read back the results.
   * The parameter examples are for format illustration only. When invoking this operation, replace them with the region, resource identity, and configuration values obtained from the current account.
   * Use the service registration endpoint of the region where the target asset is located and set the common parameter RegionId, such as cn-zhangjiakou. The product encoding and instance identity must match the target asset.
   * This operation returns only RequestId. Request acceptance does not mean the business operation is complete. You must read back the status as described in the operation description.
   * 
   * @param request - UpdateDataMaskingUsersRequest
   * @returns UpdateDataMaskingUsersResponse
   */
  async updateDataMaskingUsers(request: $_model.UpdateDataMaskingUsersRequest): Promise<$_model.UpdateDataMaskingUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataMaskingUsersWithOptions(request, runtime);
  }

  /**
   * Upgrades the database kernel of an instance.
   * 
   * @remarks
   * Upgrades the database kernel of a specified instance at the selected time. Invoke ListMiniEngineVersions first to select a version, and check the current instance status and maintenance window. SpecifyTime requires a future SwitchTime value. PolarDB-X 2.0 does not support this time option. The upgrade is an asynchronous operation. Read back the CurrentKernelVersion field from GetInstanceAttribute to verify the result.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the service registration endpoint of the region where the target asset resides, and configure the common parameter RegionId to the corresponding value, for example, cn-zhangjiakou. The product code and instance identity must match the target asset.
   * This operation returns only a RequestId. A successful request does not mean the operation is complete. Read back the status as described in the operation description.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersionWithOptions(request: $_model.UpgradeKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.kernelVersion)) {
      query["KernelVersion"] = request.kernelVersion;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.upgradeTime)) {
      query["UpgradeTime"] = request.upgradeTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeKernelVersion",
      version: "2026-01-20",
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
   * Upgrades the database kernel of an instance.
   * 
   * @remarks
   * Upgrades the database kernel of a specified instance at the selected time. Invoke ListMiniEngineVersions first to select a version, and check the current instance status and maintenance window. SpecifyTime requires a future SwitchTime value. PolarDB-X 2.0 does not support this time option. The upgrade is an asynchronous operation. Read back the CurrentKernelVersion field from GetInstanceAttribute to verify the result.
   * The parameter examples are provided only to illustrate the format. Replace them with the region, resource identity, and configuration values obtained from your current account.
   * Use the service registration endpoint of the region where the target asset resides, and configure the common parameter RegionId to the corresponding value, for example, cn-zhangjiakou. The product code and instance identity must match the target asset.
   * This operation returns only a RequestId. A successful request does not mean the operation is complete. Read back the status as described in the operation description.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersion(request: $_model.UpgradeKernelVersionRequest): Promise<$_model.UpgradeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeKernelVersionWithOptions(request, runtime);
  }

}
