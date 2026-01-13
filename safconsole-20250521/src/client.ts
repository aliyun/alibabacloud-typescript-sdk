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

}
