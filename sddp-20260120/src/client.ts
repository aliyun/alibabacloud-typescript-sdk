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
   * 校验列加密实例权限
   * 
   * @remarks
   * 创建列加密前检查实例的权限、引擎及运行条件。应同时检查响应中的 ErrorCode 和 ErrorMessage；仅 ErrorCode=Success 表示检查通过，请求成功本身不表示实例满足全部加密条件。此检查不会创建列加密规则。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 校验列加密实例权限
   * 
   * @remarks
   * 创建列加密前检查实例的权限、引擎及运行条件。应同时检查响应中的 ErrorCode 和 ErrorMessage；仅 ErrorCode=Success 表示检查通过，请求成功本身不表示实例满足全部加密条件。此检查不会创建列加密规则。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - CheckDataMaskingInstanceRequest
   * @returns CheckDataMaskingInstanceResponse
   */
  async checkDataMaskingInstance(request: $_model.CheckDataMaskingInstanceRequest): Promise<$_model.CheckDataMaskingInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDataMaskingInstanceWithOptions(request, runtime);
  }

  /**
   * 创建列加密策略
   * 
   * @remarks
   * 为同一实例下指定数据库、表和列创建列加密规则。调用前检查实例状态、支持算法、密钥、目标列和账号。SubRuleList 为按表分组的目标列表，Columns 是以英文逗号分隔的列名字符串；UserList 中的账号被授予 fullAccess 明文权限。请求成功仅表示已受理，必须回读 ListDataMaskingColumns 和 ListDataAssetAccounts 确认列状态、账号权限及期限。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
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
   * 创建列加密策略
   * 
   * @remarks
   * 为同一实例下指定数据库、表和列创建列加密规则。调用前检查实例状态、支持算法、密钥、目标列和账号。SubRuleList 为按表分组的目标列表，Columns 是以英文逗号分隔的列名字符串；UserList 中的账号被授予 fullAccess 明文权限。请求成功仅表示已受理，必须回读 ListDataMaskingColumns 和 ListDataAssetAccounts 确认列状态、账号权限及期限。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
   * 
   * @param request - CreateDataMaskingRuleRequest
   * @returns CreateDataMaskingRuleResponse
   */
  async createDataMaskingRule(request: $_model.CreateDataMaskingRuleRequest): Promise<$_model.CreateDataMaskingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataMaskingRuleWithOptions(request, runtime);
  }

  /**
   * 删除列加密策略
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
   * 删除列加密策略
   * 
   * @param request - DeleteDataMaskingRuleRequest
   * @returns DeleteDataMaskingRuleResponse
   */
  async deleteDataMaskingRule(request: $_model.DeleteDataMaskingRuleRequest): Promise<$_model.DeleteDataMaskingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataMaskingRuleWithOptions(request, runtime);
  }

  /**
   * 检查实例列加密状态
   * 
   * @remarks
   * 按产品范围查询当前地域数据库账号的权限统计。明文账号对应 FullAccessCount；限制访问和禁止解密账号分别计入 RestrictedAccessCount、NoneAccessCount。未配置权限账号数可由 TotalCount 减去上述三类账号数得到。本接口不接受实例、库、表、列等筛选条件。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 检查实例列加密状态
   * 
   * @remarks
   * 按产品范围查询当前地域数据库账号的权限统计。明文账号对应 FullAccessCount；限制访问和禁止解密账号分别计入 RestrictedAccessCount、NoneAccessCount。未配置权限账号数可由 TotalCount 减去上述三类账号数得到。本接口不接受实例、库、表、列等筛选条件。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - GetDataMaskingAccountCountRequest
   * @returns GetDataMaskingAccountCountResponse
   */
  async getDataMaskingAccountCount(request: $_model.GetDataMaskingAccountCountRequest): Promise<$_model.GetDataMaskingAccountCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataMaskingAccountCountWithOptions(request, runtime);
  }

  /**
   * 获取列加密统计信息
   * 
   * @remarks
   * 按地域、产品和分类分级模板查询总列数、敏感列数、已加密列数和加密失败列数。本接口返回统计卡片数据，不跟随列列表中的实例、库名、表名、列名或模型筛选。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 获取列加密统计信息
   * 
   * @remarks
   * 按地域、产品和分类分级模板查询总列数、敏感列数、已加密列数和加密失败列数。本接口返回统计卡片数据，不跟随列列表中的实例、库名、表名、列名或模型筛选。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - GetDataMaskingColumnCountRequest
   * @returns GetDataMaskingColumnCountResponse
   */
  async getDataMaskingColumnCount(request: $_model.GetDataMaskingColumnCountRequest): Promise<$_model.GetDataMaskingColumnCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataMaskingColumnCountWithOptions(request, runtime);
  }

  /**
   * 获取实例属性
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
   * 获取实例属性
   * 
   * @param request - GetInstanceAttributeRequest
   * @returns GetInstanceAttributeResponse
   */
  async getInstanceAttribute(request: $_model.GetInstanceAttributeRequest): Promise<$_model.GetInstanceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceAttributeWithOptions(request, runtime);
  }

  /**
   * 查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据
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
   * 查询数据安全中心连接授权的MaxCompute、RDS等数据资产表中列的数据
   * 
   * @param request - ListColumnsRequest
   * @returns ListColumnsResponse
   */
  async listColumns(request: $_model.ListColumnsRequest): Promise<$_model.ListColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listColumnsWithOptions(request, runtime);
  }

  /**
   * 查询账号列表
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
   * 查询账号列表
   * 
   * @param request - ListDataAssetAccountsRequest
   * @returns ListDataAssetAccountsResponse
   */
  async listDataAssetAccounts(request: $_model.ListDataAssetAccountsRequest): Promise<$_model.ListDataAssetAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataAssetAccountsWithOptions(request, runtime);
  }

  /**
   * 获取列加密列列表
   * 
   * @remarks
   * 分页查询列及其加密状态、敏感等级和识别模型。支持模板、产品、实例、数据库、表、列名、模型和敏感等级组合筛选。创建或关闭规则后使用本接口回读；Processing、Deleting 为中间状态，Failed、DeleteFailed 表示操作失败。RiskLeveLId 的参数名大小写应原样保留。
   * 按产品查询时使用单个 ProductId 或对应 ProductCode。当前列查询不能依赖 ProductIds 实现多产品筛选；多产品应分别查询。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 获取列加密列列表
   * 
   * @remarks
   * 分页查询列及其加密状态、敏感等级和识别模型。支持模板、产品、实例、数据库、表、列名、模型和敏感等级组合筛选。创建或关闭规则后使用本接口回读；Processing、Deleting 为中间状态，Failed、DeleteFailed 表示操作失败。RiskLeveLId 的参数名大小写应原样保留。
   * 按产品查询时使用单个 ProductId 或对应 ProductCode。当前列查询不能依赖 ProductIds 实现多产品筛选；多产品应分别查询。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListDataMaskingColumnsRequest
   * @returns ListDataMaskingColumnsResponse
   */
  async listDataMaskingColumns(request: $_model.ListDataMaskingColumnsRequest): Promise<$_model.ListDataMaskingColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingColumnsWithOptions(request, runtime);
  }

  /**
   * 查询实例支持的列加密算法列表
   * 
   * @remarks
   * 查询指定实例可选的列加密算法及各算法的限制原因。选择算法前检查对应项的 ErrorCode 和 ErrorMessage；不要把所有实例都视为支持同一组算法。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 查询实例支持的列加密算法列表
   * 
   * @remarks
   * 查询指定实例可选的列加密算法及各算法的限制原因。选择算法前检查对应项的 ErrorCode 和 ErrorMessage；不要把所有实例都视为支持同一组算法。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListDataMaskingEncryptionAlgorithmsRequest
   * @returns ListDataMaskingEncryptionAlgorithmsResponse
   */
  async listDataMaskingEncryptionAlgorithms(request: $_model.ListDataMaskingEncryptionAlgorithmsRequest): Promise<$_model.ListDataMaskingEncryptionAlgorithmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingEncryptionAlgorithmsWithOptions(request, runtime);
  }

  /**
   * 获取列加密实例列表
   * 
   * @remarks
   * 分页查询列加密实例，并支持产品、识别模板及库表列等条件。实例级状态筛选与列级状态筛选范围不同：查找全部未加密敏感列时，先枚举目标产品的实例，再使用 ListDataMaskingColumns 按 NotEncrypted 筛选，避免遗漏已经部分加密的实例。
   * 需要按 EngineType 精确筛选时，应完整分页读取候选后按返回值过滤；部分查询路径不应用此参数。InstanceId 的匹配语义随查询组合变化，精确定位时应核对返回的完整实例标识。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 获取列加密实例列表
   * 
   * @remarks
   * 分页查询列加密实例，并支持产品、识别模板及库表列等条件。实例级状态筛选与列级状态筛选范围不同：查找全部未加密敏感列时，先枚举目标产品的实例，再使用 ListDataMaskingColumns 按 NotEncrypted 筛选，避免遗漏已经部分加密的实例。
   * 需要按 EngineType 精确筛选时，应完整分页读取候选后按返回值过滤；部分查询路径不应用此参数。InstanceId 的匹配语义随查询组合变化，精确定位时应核对返回的完整实例标识。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListDataMaskingInstancesRequest
   * @returns ListDataMaskingInstancesResponse
   */
  async listDataMaskingInstances(request: $_model.ListDataMaskingInstancesRequest): Promise<$_model.ListDataMaskingInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataMaskingInstancesWithOptions(request, runtime);
  }

  /**
   * 查询数据源列表
   * 
   * @remarks
   * 分页查询已纳管的数据源。关系型数据库场景通过 ProductCode、InstanceId 定位实例，从 Items[].DbName 选择数据库。本接口查询数据库库存，不使用分类分级模板筛选。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 查询数据源列表
   * 
   * @remarks
   * 分页查询已纳管的数据源。关系型数据库场景通过 ProductCode、InstanceId 定位实例，从 Items[].DbName 选择数据库。本接口查询数据库库存，不使用分类分级模板筛选。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * 查询模板的所有规则
   * 
   * @remarks
   * 查询指定模板内有效的识别模型，返回 RuleList。未指定 TemplateId 时使用当前启用模板。模型标识取 RuleList[].Id，可用于 TemplateRuleIds 筛选。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
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
   * 查询模板的所有规则
   * 
   * @remarks
   * 查询指定模板内有效的识别模型，返回 RuleList。未指定 TemplateId 时使用当前启用模板。模型标识取 RuleList[].Id，可用于 TemplateRuleIds 筛选。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 
   * @param request - ListIdentifyModelsRequest
   * @returns ListIdentifyModelsResponse
   */
  async listIdentifyModels(request: $_model.ListIdentifyModelsRequest): Promise<$_model.ListIdentifyModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listIdentifyModelsWithOptions(request, runtime);
  }

  /**
   * 查询可用的KMS主密钥
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
   * 查询可用的KMS主密钥
   * 
   * @param request - ListKmsKeysRequest
   * @returns ListKmsKeysResponse
   */
  async listKmsKeys(request: $_model.ListKmsKeysRequest): Promise<$_model.ListKmsKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKmsKeysWithOptions(request, runtime);
  }

  /**
   * 获取实例内核版本列表
   * 
   * @remarks
   * 查询实例可选择的内核版本。升级时从 KernelVersions[].KernelVersion 选择目标，不应手工构造版本号。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 获取实例内核版本列表
   * 
   * @remarks
   * 查询实例可选择的内核版本。升级时从 KernelVersions[].KernelVersion 选择目标，不应手工构造版本号。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListMiniEngineVersionsRequest
   * @returns ListMiniEngineVersionsResponse
   */
  async listMiniEngineVersions(request: $_model.ListMiniEngineVersionsRequest): Promise<$_model.ListMiniEngineVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMiniEngineVersionsWithOptions(request, runtime);
  }

  /**
   * 查询区域列表
   * 
   * @remarks
   * 查询当前账号拥有资产的地域列表，用于选择后续地域化接口的 RegionId。可按是否开启审计、是否开启识别筛选。返回的地域列表不等同于所有云产品支持地域清单。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
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
   * 查询区域列表
   * 
   * @remarks
   * 查询当前账号拥有资产的地域列表，用于选择后续地域化接口的 RegionId。可按是否开启审计、是否开启识别筛选。返回的地域列表不等同于所有云产品支持地域清单。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 
   * @param request - ListRegionsRequest
   * @returns ListRegionsResponse
   */
  async listRegions(request: $_model.ListRegionsRequest): Promise<$_model.ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  /**
   * 查询风险级别列表
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
   * 查询风险级别列表
   * 
   * @param request - ListRiskLevelsRequest
   * @returns ListRiskLevelsResponse
   */
  async listRiskLevels(request: $_model.ListRiskLevelsRequest): Promise<$_model.ListRiskLevelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRiskLevelsWithOptions(request, runtime);
  }

  /**
   * 查询表识别结果列表
   * 
   * @remarks
   * 分页查询数据库中的数据表及识别结果。关系型数据库场景传入 DataAssetSourceId=实例标识、DataSourceName=数据库名称。PostgreSQL 和 Oracle 的表名可能包含 schema 前缀，后续列查询应原样传递表名。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
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
   * 查询表识别结果列表
   * 
   * @remarks
   * 分页查询数据库中的数据表及识别结果。关系型数据库场景传入 DataAssetSourceId=实例标识、DataSourceName=数据库名称。PostgreSQL 和 Oracle 的表名可能包含 schema 前缀，后续列查询应原样传递表名。
   * 为兼容历史识别结果，指定模板无首屏结果且未按敏感等级或识别模型过滤时，结果可能回退到内置通用识别结果。要求严格模板归属时，请同时使用该模板内的等级或模型条件核验。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * 查询识别模版列表
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
   * 查询识别模版列表
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * 提供数据目录、总览页面的敏感数据汇总
   * 
   * @remarks
   * 查询总览、数据目录或按地域汇总的敏感数据统计。CountType=41 返回总览统计，42 返回指定产品的数据目录统计，43 返回按地域和模板聚合的数据。列加密控制台使用 CountType=43 与 ProductCodeList 获取地域和模板候选。统计数据可能来自已生成的汇总结果，不代表刚发起的同步或加密操作已经完成。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
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
   * 提供数据目录、总览页面的敏感数据汇总
   * 
   * @remarks
   * 查询总览、数据目录或按地域汇总的敏感数据统计。CountType=41 返回总览统计，42 返回指定产品的数据目录统计，43 返回按地域和模板聚合的数据。列加密控制台使用 CountType=43 与 ProductCodeList 获取地域和模板候选。统计数据可能来自已生成的汇总结果，不代表刚发起的同步或加密操作已经完成。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 
   * @param request - ListTotalSensitiveInfoRequest
   * @returns ListTotalSensitiveInfoResponse
   */
  async listTotalSensitiveInfo(request: $_model.ListTotalSensitiveInfoRequest): Promise<$_model.ListTotalSensitiveInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTotalSensitiveInfoWithOptions(request, runtime);
  }

  /**
   * 资产同步
   * 
   * @remarks
   * 触发当前地域内指定产品的资产同步，作用范围是产品和地域，不限于某个实例。请求成功仅表示已受理；随后通过实例、数据库、表和列列表核对资产变化。该接口不返回可供轮询的公开任务标识。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
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
   * 资产同步
   * 
   * @remarks
   * 触发当前地域内指定产品的资产同步，作用范围是产品和地域，不限于某个实例。请求成功仅表示已受理；随后通过实例、数据库、表和列列表核对资产变化。该接口不返回可供轮询的公开任务标识。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
   * 
   * @param request - SyncDataAssetsRequest
   * @returns SyncDataAssetsResponse
   */
  async syncDataAssets(request: $_model.SyncDataAssetsRequest): Promise<$_model.SyncDataAssetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.syncDataAssetsWithOptions(request, runtime);
  }

  /**
   * 更新列加密算法
   * 
   * @remarks
   * 修改实例级列加密算法及密钥配置，影响该实例的列加密配置。当前实现支持 RDS MySQL 和 PolarDB-X 2.0；先查询实例支持算法和密钥。该接口没有 EncryptionKeyMode 参数，应按 EncryptionKeyId 的使用条件配置。请求成功后回读实例加密配置和列状态，不能仅凭 RequestId 判断完成。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
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
   * 更新列加密算法
   * 
   * @remarks
   * 修改实例级列加密算法及密钥配置，影响该实例的列加密配置。当前实现支持 RDS MySQL 和 PolarDB-X 2.0；先查询实例支持算法和密钥。该接口没有 EncryptionKeyMode 参数，应按 EncryptionKeyId 的使用条件配置。请求成功后回读实例加密配置和列状态，不能仅凭 RequestId 判断完成。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
   * 
   * @param request - UpdateDataMaskingEncryptionAlgorithmRequest
   * @returns UpdateDataMaskingEncryptionAlgorithmResponse
   */
  async updateDataMaskingEncryptionAlgorithm(request: $_model.UpdateDataMaskingEncryptionAlgorithmRequest): Promise<$_model.UpdateDataMaskingEncryptionAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataMaskingEncryptionAlgorithmWithOptions(request, runtime);
  }

  /**
   * 批量修改账号权限
   * 
   * @remarks
   * 为一批数据库账号设置同一种列加密访问权限。UserList 可包含同一产品、同一地域下不同实例的账号，每项必须携带 InstanceId 和 AccountId。fullAccess 允许明文访问，restrictedAccess 允许受限访问，noneAccess 禁止解密且仅支持特定引擎和密钥模式。仅 fullAccess 可配置有效期。请求成功后使用 ListDataAssetAccounts 回读。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
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
   * 批量修改账号权限
   * 
   * @remarks
   * 为一批数据库账号设置同一种列加密访问权限。UserList 可包含同一产品、同一地域下不同实例的账号，每项必须携带 InstanceId 和 AccountId。fullAccess 允许明文访问，restrictedAccess 允许受限访问，noneAccess 禁止解密且仅支持特定引擎和密钥模式。仅 fullAccess 可配置有效期。请求成功后使用 ListDataAssetAccounts 回读。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
   * 
   * @param request - UpdateDataMaskingUsersRequest
   * @returns UpdateDataMaskingUsersResponse
   */
  async updateDataMaskingUsers(request: $_model.UpdateDataMaskingUsersRequest): Promise<$_model.UpdateDataMaskingUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataMaskingUsersWithOptions(request, runtime);
  }

  /**
   * 升级内核版本
   * 
   * @remarks
   * 按所选时间升级指定实例的数据库内核。先调用 ListMiniEngineVersions 选择版本，并检查实例当前状态和维护窗口。SpecifyTime 需要提供未来的 SwitchTime，PolarDB-X 2.0 不支持该时间选项。升级为异步操作，回读 GetInstanceAttribute 的 CurrentKernelVersion 核对结果。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
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
   * 升级内核版本
   * 
   * @remarks
   * 按所选时间升级指定实例的数据库内核。先调用 ListMiniEngineVersions 选择版本，并检查实例当前状态和维护窗口。SpecifyTime 需要提供未来的 SwitchTime，PolarDB-X 2.0 不支持该时间选项。升级为异步操作，回读 GetInstanceAttribute 的 CurrentKernelVersion 核对结果。
   * 参数示例仅用于说明格式。调用时请替换为当前账号查询得到的地域、资源标识和配置值。
   * 使用目标资产所在地域的服务接入点，并设置公共参数 RegionId，例如 cn-zhangjiakou。产品编码和实例标识必须与目标资产一致。
   * 本接口仅返回 RequestId。请求受理不等于业务操作完成，应按接口说明回读状态。
   * 
   * @param request - UpgradeKernelVersionRequest
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersion(request: $_model.UpgradeKernelVersionRequest): Promise<$_model.UpgradeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeKernelVersionWithOptions(request, runtime);
  }

}
