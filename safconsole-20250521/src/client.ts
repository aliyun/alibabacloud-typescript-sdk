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
    this._endpoint = this.getEndpoint("safconsole", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Create basic model information
   * 
   * @param request - CreateCustomerModuleBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomerModuleBasicInfoResponse
   */
  async createCustomerModuleBasicInfoWithOptions(request: $_model.CreateCustomerModuleBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomerModuleBasicInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleName)) {
      query["CustomerModuleName"] = request.customerModuleName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.storePath)) {
      query["StorePath"] = request.storePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomerModuleBasicInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomerModuleBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomerModuleBasicInfoResponse({}));
  }

  /**
   * Create basic model information
   * 
   * @param request - CreateCustomerModuleBasicInfoRequest
   * @returns CreateCustomerModuleBasicInfoResponse
   */
  async createCustomerModuleBasicInfo(request: $_model.CreateCustomerModuleBasicInfoRequest): Promise<$_model.CreateCustomerModuleBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomerModuleBasicInfoWithOptions(request, runtime);
  }

  /**
   * Save Model Feature Configuration
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each option including a label (label) and value (value).
   * 
   * @param request - CreateCustomerModuleMetaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomerModuleMetaInfoResponse
   */
  async createCustomerModuleMetaInfoWithOptions(request: $_model.CreateCustomerModuleMetaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomerModuleMetaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    if (!$dara.isNull(request.featureString)) {
      query["FeatureString"] = request.featureString;
    }

    if (!$dara.isNull(request.featureTemplate)) {
      query["FeatureTemplate"] = request.featureTemplate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomerModuleMetaInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomerModuleMetaInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomerModuleMetaInfoResponse({}));
  }

  /**
   * Save Model Feature Configuration
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each option including a label (label) and value (value).
   * 
   * @param request - CreateCustomerModuleMetaInfoRequest
   * @returns CreateCustomerModuleMetaInfoResponse
   */
  async createCustomerModuleMetaInfo(request: $_model.CreateCustomerModuleMetaInfoRequest): Promise<$_model.CreateCustomerModuleMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomerModuleMetaInfoWithOptions(request, runtime);
  }

  /**
   * Create Model Output Information
   * 
   * @param request - CreateCustomerModuleOutputInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomerModuleOutputInfoResponse
   */
  async createCustomerModuleOutputInfoWithOptions(request: $_model.CreateCustomerModuleOutputInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCustomerModuleOutputInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    if (!$dara.isNull(request.finalScoreFormat)) {
      query["FinalScoreFormat"] = request.finalScoreFormat;
    }

    if (!$dara.isNull(request.processExpression)) {
      query["ProcessExpression"] = request.processExpression;
    }

    if (!$dara.isNull(request.testFileUrl)) {
      query["TestFileUrl"] = request.testFileUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCustomerModuleOutputInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCustomerModuleOutputInfoResponse>(await this.callApi(params, req, runtime), new $_model.CreateCustomerModuleOutputInfoResponse({}));
  }

  /**
   * Create Model Output Information
   * 
   * @param request - CreateCustomerModuleOutputInfoRequest
   * @returns CreateCustomerModuleOutputInfoResponse
   */
  async createCustomerModuleOutputInfo(request: $_model.CreateCustomerModuleOutputInfoRequest): Promise<$_model.CreateCustomerModuleOutputInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCustomerModuleOutputInfoWithOptions(request, runtime);
  }

  /**
   * Deletes the specified customer model based on the provided customer model ID.
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: Deletion is irreversible, please use with caution.
   * 
   * @param request - DeleteModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(request: $_model.DeleteModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
  }

  /**
   * Deletes the specified customer model based on the provided customer model ID.
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: Deletion is irreversible, please use with caution.
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteModelWithOptions(request, runtime);
  }

  /**
   * Query basic model information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include but are not limited to "EDIT", "ONLINE", etc.
   * 
   * @param request - DescribeCustomerModuleBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomerModuleBasicInfoResponse
   */
  async describeCustomerModuleBasicInfoWithOptions(request: $_model.DescribeCustomerModuleBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomerModuleBasicInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomerModuleBasicInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomerModuleBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomerModuleBasicInfoResponse({}));
  }

  /**
   * Query basic model information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include but are not limited to "EDIT", "ONLINE", etc.
   * 
   * @param request - DescribeCustomerModuleBasicInfoRequest
   * @returns DescribeCustomerModuleBasicInfoResponse
   */
  async describeCustomerModuleBasicInfo(request: $_model.DescribeCustomerModuleBasicInfoRequest): Promise<$_model.DescribeCustomerModuleBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomerModuleBasicInfoWithOptions(request, runtime);
  }

  /**
   * 根据客户模型ID查询模型特征信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeCustomerModuleMetaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomerModuleMetaInfoResponse
   */
  async describeCustomerModuleMetaInfoWithOptions(request: $_model.DescribeCustomerModuleMetaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomerModuleMetaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomerModuleMetaInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomerModuleMetaInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomerModuleMetaInfoResponse({}));
  }

  /**
   * 根据客户模型ID查询模型特征信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeCustomerModuleMetaInfoRequest
   * @returns DescribeCustomerModuleMetaInfoResponse
   */
  async describeCustomerModuleMetaInfo(request: $_model.DescribeCustomerModuleMetaInfoRequest): Promise<$_model.DescribeCustomerModuleMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomerModuleMetaInfoWithOptions(request, runtime);
  }

  /**
   * 根据客户模型ID查询模型出参信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeCustomerModuleOutputInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCustomerModuleOutputInfoResponse
   */
  async describeCustomerModuleOutputInfoWithOptions(request: $_model.DescribeCustomerModuleOutputInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCustomerModuleOutputInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCustomerModuleOutputInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCustomerModuleOutputInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCustomerModuleOutputInfoResponse({}));
  }

  /**
   * 根据客户模型ID查询模型出参信息
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeCustomerModuleOutputInfoRequest
   * @returns DescribeCustomerModuleOutputInfoResponse
   */
  async describeCustomerModuleOutputInfo(request: $_model.DescribeCustomerModuleOutputInfoRequest): Promise<$_model.DescribeCustomerModuleOutputInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomerModuleOutputInfoWithOptions(request, runtime);
  }

  /**
   * 根据特征模板返回特征模板具体特征选项
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - DescribeFeatureOptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFeatureOptionResponse
   */
  async describeFeatureOptionWithOptions(request: $_model.DescribeFeatureOptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFeatureOptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.featureTemplate)) {
      query["FeatureTemplate"] = request.featureTemplate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFeatureOption",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFeatureOptionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFeatureOptionResponse({}));
  }

  /**
   * 根据特征模板返回特征模板具体特征选项
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - DescribeFeatureOptionRequest
   * @returns DescribeFeatureOptionResponse
   */
  async describeFeatureOption(request: $_model.DescribeFeatureOptionRequest): Promise<$_model.DescribeFeatureOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFeatureOptionWithOptions(request, runtime);
  }

  /**
   * 获取可用的特征模板列表，用于模型配置。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - DescribeFeatureTemplateListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFeatureTemplateListResponse
   */
  async describeFeatureTemplateListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFeatureTemplateListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFeatureTemplateList",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFeatureTemplateListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFeatureTemplateListResponse({}));
  }

  /**
   * 获取可用的特征模板列表，用于模型配置。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * @returns DescribeFeatureTemplateListResponse
   */
  async describeFeatureTemplateList(): Promise<$_model.DescribeFeatureTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFeatureTemplateListWithOptions(runtime);
  }

  /**
   * 渲染模型的特征配置
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - DescribeModelFeatureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelFeatureResponse
   */
  async describeModelFeatureWithOptions(request: $_model.DescribeModelFeatureRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelFeatureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    if (!$dara.isNull(request.featureTemplate)) {
      query["FeatureTemplate"] = request.featureTemplate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelFeature",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelFeatureResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelFeatureResponse({}));
  }

  /**
   * 渲染模型的特征配置
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - DescribeModelFeatureRequest
   * @returns DescribeModelFeatureResponse
   */
  async describeModelFeature(request: $_model.DescribeModelFeatureRequest): Promise<$_model.DescribeModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelFeatureWithOptions(request, runtime);
  }

  /**
   * 获取上传oss鉴权数据
   * 
   * @param request - DescribeModelOssTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelOssTokenResponse
   */
  async describeModelOssTokenWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelOssTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelOssToken",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelOssTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelOssTokenResponse({}));
  }

  /**
   * 获取上传oss鉴权数据
   * @returns DescribeModelOssTokenResponse
   */
  async describeModelOssToken(): Promise<$_model.DescribeModelOssTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelOssTokenWithOptions(runtime);
  }

  /**
   * 根据客户模型ID查询指定模型对应服务是否存在
   * 
   * @remarks
   * ## 请求说明
   * 该接口用于通过提供的`customerModuleId`来检查特定的模型服务是否已经存在。如果存在，则返回`true`；反之则返回`false`。
   * ### 注意事项
   * - `customerModuleId`是必须提供的参数，且为字符串类型。
   * - 此API主要用于前端页面展示或逻辑判断时使用，以确认用户所选模型是否有对应的服务被创建。
   * 
   * @param request - DescribeModuleServiceExistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModuleServiceExistResponse
   */
  async describeModuleServiceExistWithOptions(request: $_model.DescribeModuleServiceExistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModuleServiceExistResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModuleServiceExist",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModuleServiceExistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModuleServiceExistResponse({}));
  }

  /**
   * 根据客户模型ID查询指定模型对应服务是否存在
   * 
   * @remarks
   * ## 请求说明
   * 该接口用于通过提供的`customerModuleId`来检查特定的模型服务是否已经存在。如果存在，则返回`true`；反之则返回`false`。
   * ### 注意事项
   * - `customerModuleId`是必须提供的参数，且为字符串类型。
   * - 此API主要用于前端页面展示或逻辑判断时使用，以确认用户所选模型是否有对应的服务被创建。
   * 
   * @param request - DescribeModuleServiceExistRequest
   * @returns DescribeModuleServiceExistResponse
   */
  async describeModuleServiceExist(request: $_model.DescribeModuleServiceExistRequest): Promise<$_model.DescribeModuleServiceExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModuleServiceExistWithOptions(request, runtime);
  }

  /**
   * 根据客户模型ID查询模型当前状态
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeModuleStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModuleStatusResponse
   */
  async describeModuleStatusWithOptions(request: $_model.DescribeModuleStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModuleStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModuleStatus",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModuleStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModuleStatusResponse({}));
  }

  /**
   * 根据客户模型ID查询模型当前状态
   * 
   * @remarks
   * ## 请求说明
   * 通过提供`customerModuleId`参数，可以查询指定客户模型的当前状态。状态值可能包括但不限于"EDIT"、"ONLINE"等。
   * 
   * @param request - DescribeModuleStatusRequest
   * @returns DescribeModuleStatusResponse
   */
  async describeModuleStatus(request: $_model.DescribeModuleStatusRequest): Promise<$_model.DescribeModuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModuleStatusWithOptions(request, runtime);
  }

  /**
   * 查询模型托管订单
   * 
   * @param request - DescribeSafRmmpOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSafRmmpOrderResponse
   */
  async describeSafRmmpOrderWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSafRmmpOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSafRmmpOrder",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSafRmmpOrderResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSafRmmpOrderResponse({}));
  }

  /**
   * 查询模型托管订单
   * @returns DescribeSafRmmpOrderResponse
   */
  async describeSafRmmpOrder(): Promise<$_model.DescribeSafRmmpOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafRmmpOrderWithOptions(runtime);
  }

  /**
   * 查询场景和服务
   * 
   * @param request - DescribeServiceAndSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceAndSceneResponse
   */
  async describeServiceAndSceneWithOptions(request: $_model.DescribeServiceAndSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeServiceAndSceneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceAndScene",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeServiceAndSceneResponse>(await this.callApi(params, req, runtime), new $_model.DescribeServiceAndSceneResponse({}));
  }

  /**
   * 查询场景和服务
   * 
   * @param request - DescribeServiceAndSceneRequest
   * @returns DescribeServiceAndSceneResponse
   */
  async describeServiceAndScene(request: $_model.DescribeServiceAndSceneRequest): Promise<$_model.DescribeServiceAndSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceAndSceneWithOptions(request, runtime);
  }

  /**
   * 获取指定用户下的所有模型信息，支持分页查询
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于查询特定用户下的所有模型信息，并支持通过分页参数进行分页查询。可以通过 `name` 参数进行模糊搜索。
   * - `regId`: 地域标识，必填。
   * - `pageSize`: 每页显示的条目数，必填。
   * - `currentPage`: 当前页码，从1开始计数，必填。
   * - `userId`: 用户ID，必填。
   * 
   * @param request - DescribeUserModelListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserModelListResponse
   */
  async describeUserModelListWithOptions(request: $_model.DescribeUserModelListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserModelListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authType)) {
      query["AuthType"] = request.authType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserModelList",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserModelListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserModelListResponse({}));
  }

  /**
   * 获取指定用户下的所有模型信息，支持分页查询
   * 
   * @remarks
   * ## 请求说明
   * 该 API 用于查询特定用户下的所有模型信息，并支持通过分页参数进行分页查询。可以通过 `name` 参数进行模糊搜索。
   * - `regId`: 地域标识，必填。
   * - `pageSize`: 每页显示的条目数，必填。
   * - `currentPage`: 当前页码，从1开始计数，必填。
   * - `userId`: 用户ID，必填。
   * 
   * @param request - DescribeUserModelListRequest
   * @returns DescribeUserModelListResponse
   */
  async describeUserModelList(request: $_model.DescribeUserModelListRequest): Promise<$_model.DescribeUserModelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserModelListWithOptions(request, runtime);
  }

  /**
   * 迭代模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - DuplicateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DuplicateModelResponse
   */
  async duplicateModelWithOptions(request: $_model.DuplicateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DuplicateModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DuplicateModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DuplicateModelResponse>(await this.callApi(params, req, runtime), new $_model.DuplicateModelResponse({}));
  }

  /**
   * 迭代模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - DuplicateModelRequest
   * @returns DuplicateModelResponse
   */
  async duplicateModel(request: $_model.DuplicateModelRequest): Promise<$_model.DuplicateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.duplicateModelWithOptions(request, runtime);
  }

  /**
   * 编辑模型
   * 
   * @param request - EditModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditModelResponse
   */
  async editModelWithOptions(request: $_model.EditModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditModelResponse>(await this.callApi(params, req, runtime), new $_model.EditModelResponse({}));
  }

  /**
   * 编辑模型
   * 
   * @param request - EditModelRequest
   * @returns EditModelResponse
   */
  async editModel(request: $_model.EditModelRequest): Promise<$_model.EditModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editModelWithOptions(request, runtime);
  }

  /**
   * 迭代模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - IterateModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns IterateModelResponse
   */
  async iterateModelWithOptions(request: $_model.IterateModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.IterateModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "IterateModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.IterateModelResponse>(await this.callApi(params, req, runtime), new $_model.IterateModelResponse({}));
  }

  /**
   * 迭代模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - IterateModelRequest
   * @returns IterateModelResponse
   */
  async iterateModel(request: $_model.IterateModelRequest): Promise<$_model.IterateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.iterateModelWithOptions(request, runtime);
  }

  /**
   * 下线模型
   * 
   * @param request - OfflineModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineModelResponse
   */
  async offlineModelWithOptions(request: $_model.OfflineModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineModelResponse>(await this.callApi(params, req, runtime), new $_model.OfflineModelResponse({}));
  }

  /**
   * 下线模型
   * 
   * @param request - OfflineModelRequest
   * @returns OfflineModelResponse
   */
  async offlineModel(request: $_model.OfflineModelRequest): Promise<$_model.OfflineModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineModelWithOptions(request, runtime);
  }

  /**
   * 上线模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - OnlineModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OnlineModelResponse
   */
  async onlineModelWithOptions(request: $_model.OnlineModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OnlineModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OnlineModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OnlineModelResponse>(await this.callApi(params, req, runtime), new $_model.OnlineModelResponse({}));
  }

  /**
   * 上线模型
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从系统中删除指定的客户模型。调用时必须提供`customerModuleId`参数，该参数标识了要删除的具体模型。
   * - **注意**：删除操作不可逆，请谨慎使用。
   * 
   * @param request - OnlineModelRequest
   * @returns OnlineModelResponse
   */
  async onlineModel(request: $_model.OnlineModelRequest): Promise<$_model.OnlineModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineModelWithOptions(request, runtime);
  }

  /**
   * 解析表达式参数
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - ParseExpressionParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ParseExpressionParametersResponse
   */
  async parseExpressionParametersWithOptions(request: $_model.ParseExpressionParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ParseExpressionParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ParseExpressionParameters",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ParseExpressionParametersResponse>(await this.callApi(params, req, runtime), new $_model.ParseExpressionParametersResponse({}));
  }

  /**
   * 解析表达式参数
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - ParseExpressionParametersRequest
   * @returns ParseExpressionParametersResponse
   */
  async parseExpressionParameters(request: $_model.ParseExpressionParametersRequest): Promise<$_model.ParseExpressionParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.parseExpressionParametersWithOptions(request, runtime);
  }

  /**
   * 预发布模型
   * 
   * @param request - PrepublishModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrepublishModelResponse
   */
  async prepublishModelWithOptions(request: $_model.PrepublishModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrepublishModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrepublishModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrepublishModelResponse>(await this.callApi(params, req, runtime), new $_model.PrepublishModelResponse({}));
  }

  /**
   * 预发布模型
   * 
   * @param request - PrepublishModelRequest
   * @returns PrepublishModelResponse
   */
  async prepublishModel(request: $_model.PrepublishModelRequest): Promise<$_model.PrepublishModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.prepublishModelWithOptions(request, runtime);
  }

  /**
   * Roll back the specified customer model based on the provided customer model ID.
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
   * 
   * @param request - RollbackModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackModelResponse
   */
  async rollbackModelWithOptions(request: $_model.RollbackModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RollbackModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RollbackModelResponse>(await this.callApi(params, req, runtime), new $_model.RollbackModelResponse({}));
  }

  /**
   * Roll back the specified customer model based on the provided customer model ID.
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
   * 
   * @param request - RollbackModelRequest
   * @returns RollbackModelResponse
   */
  async rollbackModel(request: $_model.RollbackModelRequest): Promise<$_model.RollbackModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackModelWithOptions(request, runtime);
  }

  /**
   * 预发布测试模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestModelResponse
   */
  async testModelWithOptions(request: $_model.TestModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestModelResponse>(await this.callApi(params, req, runtime), new $_model.TestModelResponse({}));
  }

  /**
   * 预发布测试模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestModelRequest
   * @returns TestModelResponse
   */
  async testModel(request: $_model.TestModelRequest): Promise<$_model.TestModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testModelWithOptions(request, runtime);
  }

  /**
   * 预发布测试模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestPreModelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestPreModelResponse
   */
  async testPreModelWithOptions(request: $_model.TestPreModelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestPreModelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestPreModel",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestPreModelResponse>(await this.callApi(params, req, runtime), new $_model.TestPreModelResponse({}));
  }

  /**
   * 预发布测试模型
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestPreModelRequest
   * @returns TestPreModelResponse
   */
  async testPreModel(request: $_model.TestPreModelRequest): Promise<$_model.TestPreModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testPreModelWithOptions(request, runtime);
  }

  /**
   * 测试表达式
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestProcessExpressionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestProcessExpressionResponse
   */
  async testProcessExpressionWithOptions(request: $_model.TestProcessExpressionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestProcessExpressionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.expression)) {
      query["Expression"] = request.expression;
    }

    if (!$dara.isNull(request.params)) {
      query["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestProcessExpression",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestProcessExpressionResponse>(await this.callApi(params, req, runtime), new $_model.TestProcessExpressionResponse({}));
  }

  /**
   * 测试表达式
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于查询系统中所有可用的特征模板。
   * - 请求方式为 GET，无需提供额外参数。
   * - 返回结果包含多个特征模板选项，每个选项包括标签（label）和值（value）。
   * 
   * @param request - TestProcessExpressionRequest
   * @returns TestProcessExpressionResponse
   */
  async testProcessExpression(request: $_model.TestProcessExpressionRequest): Promise<$_model.TestProcessExpressionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testProcessExpressionWithOptions(request, runtime);
  }

  /**
   * Update basic model information
   * 
   * @param request - UpdateModuleBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModuleBasicInfoResponse
   */
  async updateModuleBasicInfoWithOptions(request: $_model.UpdateModuleBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModuleBasicInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    if (!$dara.isNull(request.customerModuleName)) {
      query["CustomerModuleName"] = request.customerModuleName;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.moduleType)) {
      query["ModuleType"] = request.moduleType;
    }

    if (!$dara.isNull(request.storePath)) {
      query["StorePath"] = request.storePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModuleBasicInfo",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModuleBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModuleBasicInfoResponse({}));
  }

  /**
   * Update basic model information
   * 
   * @param request - UpdateModuleBasicInfoRequest
   * @returns UpdateModuleBasicInfoResponse
   */
  async updateModuleBasicInfo(request: $_model.UpdateModuleBasicInfoRequest): Promise<$_model.UpdateModuleBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateModuleBasicInfoWithOptions(request, runtime);
  }

  /**
   * Validate model file
   * 
   * @param request - ValidateModelFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateModelFileResponse
   */
  async validateModelFileWithOptions(request: $_model.ValidateModelFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateModelFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateModelFile",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateModelFileResponse>(await this.callApi(params, req, runtime), new $_model.ValidateModelFileResponse({}));
  }

  /**
   * Validate model file
   * 
   * @param request - ValidateModelFileRequest
   * @returns ValidateModelFileResponse
   */
  async validateModelFile(request: $_model.ValidateModelFileRequest): Promise<$_model.ValidateModelFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateModelFileWithOptions(request, runtime);
  }

  /**
   * Validate Test File
   * 
   * @param request - ValidateTestFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTestFileResponse
   */
  async validateTestFileWithOptions(request: $_model.ValidateTestFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateTestFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerModuleId)) {
      query["CustomerModuleId"] = request.customerModuleId;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateTestFile",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateTestFileResponse>(await this.callApi(params, req, runtime), new $_model.ValidateTestFileResponse({}));
  }

  /**
   * Validate Test File
   * 
   * @param request - ValidateTestFileRequest
   * @returns ValidateTestFileResponse
   */
  async validateTestFile(request: $_model.ValidateTestFileRequest): Promise<$_model.ValidateTestFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateTestFileWithOptions(request, runtime);
  }

}
