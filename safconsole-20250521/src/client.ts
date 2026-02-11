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
   * Apply for Bastion Host Account
   * 
   * @remarks
   * ## Request Description
   * - This interface is used for customers to create a modeling project for the first time.
   * - `projectName` is a required field, with a maximum length of 50 characters.
   * - `remark` and `instanceSpec` are optional, where `remark` has a maximum length of 200 characters.
   * - The available values for `instanceSpec` include `SECURE_ENV_LITE` and `SECURE_ENV_PRO`.
   * 
   * @param request - ApplyBastionAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyBastionAccountResponse
   */
  async applyBastionAccountWithOptions(request: $_model.ApplyBastionAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyBastionAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyBastionAccount",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyBastionAccountResponse>(await this.callApi(params, req, runtime), new $_model.ApplyBastionAccountResponse({}));
  }

  /**
   * Apply for Bastion Host Account
   * 
   * @remarks
   * ## Request Description
   * - This interface is used for customers to create a modeling project for the first time.
   * - `projectName` is a required field, with a maximum length of 50 characters.
   * - `remark` and `instanceSpec` are optional, where `remark` has a maximum length of 200 characters.
   * - The available values for `instanceSpec` include `SECURE_ENV_LITE` and `SECURE_ENV_PRO`.
   * 
   * @param request - ApplyBastionAccountRequest
   * @returns ApplyBastionAccountResponse
   */
  async applyBastionAccount(request: $_model.ApplyBastionAccountRequest): Promise<$_model.ApplyBastionAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyBastionAccountWithOptions(request, runtime);
  }

  /**
   * Associate Retrospective Task
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - AssociatePocTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociatePocTaskResponse
   */
  async associatePocTaskWithOptions(request: $_model.AssociatePocTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AssociatePocTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociatePocTask",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociatePocTaskResponse>(await this.callApi(params, req, runtime), new $_model.AssociatePocTaskResponse({}));
  }

  /**
   * Associate Retrospective Task
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - AssociatePocTaskRequest
   * @returns AssociatePocTaskResponse
   */
  async associatePocTask(request: $_model.AssociatePocTaskRequest): Promise<$_model.AssociatePocTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.associatePocTaskWithOptions(request, runtime);
  }

  /**
   * Complete project and release resources.
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - CompleteModelingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompleteModelingProjectResponse
   */
  async completeModelingProjectWithOptions(request: $_model.CompleteModelingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CompleteModelingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CompleteModelingProject",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CompleteModelingProjectResponse>(await this.callApi(params, req, runtime), new $_model.CompleteModelingProjectResponse({}));
  }

  /**
   * Complete project and release resources.
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - CompleteModelingProjectRequest
   * @returns CompleteModelingProjectResponse
   */
  async completeModelingProject(request: $_model.CompleteModelingProjectRequest): Promise<$_model.CompleteModelingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.completeModelingProjectWithOptions(request, runtime);
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
   * Initialize a modeling project.
   * 
   * @remarks
   * ## Request Description
   * - This interface is used for customers to create a modeling project for the first time.
   * - `projectName` is a required field, with a maximum length of 50 characters.
   * - `remark` and `instanceSpec` are optional, where `remark` has a maximum length of 200 characters.
   * - The available values for `instanceSpec` include `SECURE_ENV_LITE` and `SECURE_ENV_PRO`.
   * 
   * @param request - CreateModelingProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelingProjectResponse
   */
  async createModelingProjectWithOptions(request: $_model.CreateModelingProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelingProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceSpec)) {
      query["InstanceSpec"] = request.instanceSpec;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelingProject",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelingProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelingProjectResponse({}));
  }

  /**
   * Initialize a modeling project.
   * 
   * @remarks
   * ## Request Description
   * - This interface is used for customers to create a modeling project for the first time.
   * - `projectName` is a required field, with a maximum length of 50 characters.
   * - `remark` and `instanceSpec` are optional, where `remark` has a maximum length of 200 characters.
   * - The available values for `instanceSpec` include `SECURE_ENV_LITE` and `SECURE_ENV_PRO`.
   * 
   * @param request - CreateModelingProjectRequest
   * @returns CreateModelingProjectResponse
   */
  async createModelingProject(request: $_model.CreateModelingProjectRequest): Promise<$_model.CreateModelingProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createModelingProjectWithOptions(request, runtime);
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
   * Deploy Model File
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DeployModelFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployModelFileResponse
   */
  async deployModelFileWithOptions(request: $_model.DeployModelFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployModelFileResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployModelFile",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployModelFileResponse>(await this.callApi(params, req, runtime), new $_model.DeployModelFileResponse({}));
  }

  /**
   * Deploy Model File
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DeployModelFileRequest
   * @returns DeployModelFileResponse
   */
  async deployModelFile(request: $_model.DeployModelFileRequest): Promise<$_model.DeployModelFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployModelFileWithOptions(request, runtime);
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
   * Query model feature information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include, but are not limited to, "EDIT", "ONLINE", etc.
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
   * Query model feature information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include, but are not limited to, "EDIT", "ONLINE", etc.
   * 
   * @param request - DescribeCustomerModuleMetaInfoRequest
   * @returns DescribeCustomerModuleMetaInfoResponse
   */
  async describeCustomerModuleMetaInfo(request: $_model.DescribeCustomerModuleMetaInfoRequest): Promise<$_model.DescribeCustomerModuleMetaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomerModuleMetaInfoWithOptions(request, runtime);
  }

  /**
   * Query model output information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include but are not limited to "EDIT", "ONLINE", etc.
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
   * Query model output information based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include but are not limited to "EDIT", "ONLINE", etc.
   * 
   * @param request - DescribeCustomerModuleOutputInfoRequest
   * @returns DescribeCustomerModuleOutputInfoResponse
   */
  async describeCustomerModuleOutputInfo(request: $_model.DescribeCustomerModuleOutputInfoRequest): Promise<$_model.DescribeCustomerModuleOutputInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCustomerModuleOutputInfoWithOptions(request, runtime);
  }

  /**
   * Return specific feature options based on the feature template
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
   * Return specific feature options based on the feature template
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
   * 
   * @param request - DescribeFeatureOptionRequest
   * @returns DescribeFeatureOptionResponse
   */
  async describeFeatureOption(request: $_model.DescribeFeatureOptionRequest): Promise<$_model.DescribeFeatureOptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFeatureOptionWithOptions(request, runtime);
  }

  /**
   * Get the list of available feature templates for model configuration.
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which consists of a label (label) and a value (value).
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
   * Get the list of available feature templates for model configuration.
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which consists of a label (label) and a value (value).
   * @returns DescribeFeatureTemplateListResponse
   */
  async describeFeatureTemplateList(): Promise<$_model.DescribeFeatureTemplateListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFeatureTemplateListWithOptions(runtime);
  }

  /**
   * Get File Download Link
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DescribeFileDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileDownloadUrlResponse
   */
  async describeFileDownloadUrlWithOptions(request: $_model.DescribeFileDownloadUrlRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileDownloadUrlResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileDownloadUrl",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileDownloadUrlResponse({}));
  }

  /**
   * Get File Download Link
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DescribeFileDownloadUrlRequest
   * @returns DescribeFileDownloadUrlResponse
   */
  async describeFileDownloadUrl(request: $_model.DescribeFileDownloadUrlRequest): Promise<$_model.DescribeFileDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileDownloadUrlWithOptions(request, runtime);
  }

  /**
   * Render the feature configuration of the model
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each including a label (label) and value (value).
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
   * Render the feature configuration of the model
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each including a label (label) and value (value).
   * 
   * @param request - DescribeModelFeatureRequest
   * @returns DescribeModelFeatureResponse
   */
  async describeModelFeature(request: $_model.DescribeModelFeatureRequest): Promise<$_model.DescribeModelFeatureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelFeatureWithOptions(request, runtime);
  }

  /**
   * Obtain OSS Authentication Data for Upload
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
   * Obtain OSS Authentication Data for Upload
   * @returns DescribeModelOssTokenResponse
   */
  async describeModelOssToken(): Promise<$_model.DescribeModelOssTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelOssTokenWithOptions(runtime);
  }

  /**
   * Get detailed project data
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DescribeModelingProjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelingProjectDetailResponse
   */
  async describeModelingProjectDetailWithOptions(request: $_model.DescribeModelingProjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelingProjectDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelingProjectDetail",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelingProjectDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelingProjectDetailResponse({}));
  }

  /**
   * Get detailed project data
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - DescribeModelingProjectDetailRequest
   * @returns DescribeModelingProjectDetailResponse
   */
  async describeModelingProjectDetail(request: $_model.DescribeModelingProjectDetailRequest): Promise<$_model.DescribeModelingProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelingProjectDetailWithOptions(request, runtime);
  }

  /**
   * Paginated query for the list of modeling projects under the current user.
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定租户下的所有建模项目的概览信息。
   * - 支持通过`pageSize`和`currentPage`参数进行分页查询，默认每页显示10条记录。
   * - 可选地，使用`status`参数来过滤特定状态（如`active`, `released`等）的项目。
   * - 返回结果中包含每个项目的ID、名称、环境状态、建模状态、开始时间及结束时间（如果有的话），以及创建该项目的登录账号。
   * 
   * @param request - DescribeModelingProjectListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeModelingProjectListResponse
   */
  async describeModelingProjectListWithOptions(request: $_model.DescribeModelingProjectListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeModelingProjectListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeModelingProjectList",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeModelingProjectListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeModelingProjectListResponse({}));
  }

  /**
   * Paginated query for the list of modeling projects under the current user.
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定租户下的所有建模项目的概览信息。
   * - 支持通过`pageSize`和`currentPage`参数进行分页查询，默认每页显示10条记录。
   * - 可选地，使用`status`参数来过滤特定状态（如`active`, `released`等）的项目。
   * - 返回结果中包含每个项目的ID、名称、环境状态、建模状态、开始时间及结束时间（如果有的话），以及创建该项目的登录账号。
   * 
   * @param request - DescribeModelingProjectListRequest
   * @returns DescribeModelingProjectListResponse
   */
  async describeModelingProjectList(request: $_model.DescribeModelingProjectListRequest): Promise<$_model.DescribeModelingProjectListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModelingProjectListWithOptions(request, runtime);
  }

  /**
   * Query Whether the Service Corresponding to a Specific Model Exists Based on Customer Model ID
   * 
   * @remarks
   * ## Request Description
   * This interface is used to check whether a specific model service exists by providing the `customerModuleId`. If it exists, it returns `true`; otherwise, it returns `false`.
   * ### Notes
   * - `customerModuleId` is a required parameter and must be of string type.
   * - This API is mainly used for front-end page display or logical judgment to confirm whether the service corresponding to the user\\"s selected model has been created.
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
   * Query Whether the Service Corresponding to a Specific Model Exists Based on Customer Model ID
   * 
   * @remarks
   * ## Request Description
   * This interface is used to check whether a specific model service exists by providing the `customerModuleId`. If it exists, it returns `true`; otherwise, it returns `false`.
   * ### Notes
   * - `customerModuleId` is a required parameter and must be of string type.
   * - This API is mainly used for front-end page display or logical judgment to confirm whether the service corresponding to the user\\"s selected model has been created.
   * 
   * @param request - DescribeModuleServiceExistRequest
   * @returns DescribeModuleServiceExistResponse
   */
  async describeModuleServiceExist(request: $_model.DescribeModuleServiceExistRequest): Promise<$_model.DescribeModuleServiceExistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModuleServiceExistWithOptions(request, runtime);
  }

  /**
   * Query the current status of a model based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include, but are not limited to, "EDIT", "ONLINE", etc.
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
   * Query the current status of a model based on the customer model ID
   * 
   * @remarks
   * ## Request Description
   * By providing the `customerModuleId` parameter, you can query the current status of a specified customer model. The status values may include, but are not limited to, "EDIT", "ONLINE", etc.
   * 
   * @param request - DescribeModuleStatusRequest
   * @returns DescribeModuleStatusResponse
   */
  async describeModuleStatus(request: $_model.DescribeModuleStatusRequest): Promise<$_model.DescribeModuleStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeModuleStatusWithOptions(request, runtime);
  }

  /**
   * Query POC task list.
   * 
   * @param request - DescribePocTaskListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePocTaskListResponse
   */
  async describePocTaskListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribePocTaskListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribePocTaskList",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePocTaskListResponse>(await this.callApi(params, req, runtime), new $_model.DescribePocTaskListResponse({}));
  }

  /**
   * Query POC task list.
   * @returns DescribePocTaskListResponse
   */
  async describePocTaskList(): Promise<$_model.DescribePocTaskListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePocTaskListWithOptions(runtime);
  }

  /**
   * Query Model Hosting Orders
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
   * Query Model Hosting Orders
   * @returns DescribeSafRmmpOrderResponse
   */
  async describeSafRmmpOrder(): Promise<$_model.DescribeSafRmmpOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSafRmmpOrderWithOptions(runtime);
  }

  /**
   * Query Scene and Service
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
   * Query Scene and Service
   * 
   * @param request - DescribeServiceAndSceneRequest
   * @returns DescribeServiceAndSceneResponse
   */
  async describeServiceAndScene(request: $_model.DescribeServiceAndSceneRequest): Promise<$_model.DescribeServiceAndSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeServiceAndSceneWithOptions(request, runtime);
  }

  /**
   * Get all model information for a specified user, supporting pagination
   * 
   * @remarks
   * ## Request Description
   * This API is used to query all model information under a specific user and supports pagination through page parameters. Fuzzy search can be performed using the `name` parameter.
   * - `regId`: Region identifier, required.
   * - `pageSize`: Number of items per page, required.
   * - `currentPage`: Current page number, starting from 1, required.
   * - `userId`: User ID, required.
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
   * Get all model information for a specified user, supporting pagination
   * 
   * @remarks
   * ## Request Description
   * This API is used to query all model information under a specific user and supports pagination through page parameters. Fuzzy search can be performed using the `name` parameter.
   * - `regId`: Region identifier, required.
   * - `pageSize`: Number of items per page, required.
   * - `currentPage`: Current page number, starting from 1, required.
   * - `userId`: User ID, required.
   * 
   * @param request - DescribeUserModelListRequest
   * @returns DescribeUserModelListResponse
   */
  async describeUserModelList(request: $_model.DescribeUserModelListRequest): Promise<$_model.DescribeUserModelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserModelListWithOptions(request, runtime);
  }

  /**
   * Iterate Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
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
   * Iterate Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
   * 
   * @param request - DuplicateModelRequest
   * @returns DuplicateModelResponse
   */
  async duplicateModel(request: $_model.DuplicateModelRequest): Promise<$_model.DuplicateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.duplicateModelWithOptions(request, runtime);
  }

  /**
   * Edit Model
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
   * Edit Model
   * 
   * @param request - EditModelRequest
   * @returns EditModelResponse
   */
  async editModel(request: $_model.EditModelRequest): Promise<$_model.EditModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editModelWithOptions(request, runtime);
  }

  /**
   * View Bastion Host Initial Password
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - GetBastionHostCertificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBastionHostCertificationResponse
   */
  async getBastionHostCertificationWithOptions(request: $_model.GetBastionHostCertificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBastionHostCertificationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBastionHostCertification",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBastionHostCertificationResponse>(await this.callApi(params, req, runtime), new $_model.GetBastionHostCertificationResponse({}));
  }

  /**
   * View Bastion Host Initial Password
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - GetBastionHostCertificationRequest
   * @returns GetBastionHostCertificationResponse
   */
  async getBastionHostCertification(request: $_model.GetBastionHostCertificationRequest): Promise<$_model.GetBastionHostCertificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBastionHostCertificationWithOptions(request, runtime);
  }

  /**
   * Iterate Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
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
   * Iterate Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: The deletion operation is irreversible, please use with caution.
   * 
   * @param request - IterateModelRequest
   * @returns IterateModelResponse
   */
  async iterateModel(request: $_model.IterateModelRequest): Promise<$_model.IterateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.iterateModelWithOptions(request, runtime);
  }

  /**
   * Offline Model
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
   * Offline Model
   * 
   * @param request - OfflineModelRequest
   * @returns OfflineModelResponse
   */
  async offlineModel(request: $_model.OfflineModelRequest): Promise<$_model.OfflineModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineModelWithOptions(request, runtime);
  }

  /**
   * Online Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: Deletion is irreversible, please use with caution.
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
   * Online Model
   * 
   * @remarks
   * ## Request Description
   * This API is used to delete a specified customer model from the system. When calling, you must provide the `customerModuleId` parameter, which identifies the specific model to be deleted.
   * - **Note**: Deletion is irreversible, please use with caution.
   * 
   * @param request - OnlineModelRequest
   * @returns OnlineModelResponse
   */
  async onlineModel(request: $_model.OnlineModelRequest): Promise<$_model.OnlineModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.onlineModelWithOptions(request, runtime);
  }

  /**
   * Parse Expression Parameters
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
   * Parse Expression Parameters
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
   * 
   * @param request - ParseExpressionParametersRequest
   * @returns ParseExpressionParametersResponse
   */
  async parseExpressionParameters(request: $_model.ParseExpressionParametersRequest): Promise<$_model.ParseExpressionParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.parseExpressionParametersWithOptions(request, runtime);
  }

  /**
   * Pre-release Model
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
   * Pre-release Model
   * 
   * @param request - PrepublishModelRequest
   * @returns PrepublishModelResponse
   */
  async prepublishModel(request: $_model.PrepublishModelRequest): Promise<$_model.PrepublishModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.prepublishModelWithOptions(request, runtime);
  }

  /**
   * Request to Sync Model Files
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - RequestModelFileSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestModelFileSyncResponse
   */
  async requestModelFileSyncWithOptions(request: $_model.RequestModelFileSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequestModelFileSyncResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequestModelFileSync",
      version: "2025-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequestModelFileSyncResponse>(await this.callApi(params, req, runtime), new $_model.RequestModelFileSyncResponse({}));
  }

  /**
   * Request to Sync Model Files
   * 
   * @remarks
   * ## 请求说明
   * - 本接口用于客户首次创建建模项目。
   * - `projectName` 是必填项，长度不超过50个字符。
   * - `remark` 和 `instanceSpec` 为可选项，其中 `remark` 长度不超过200个字符。
   * - `instanceSpec` 可选值包括 `SECURE_ENV_LITE` 和 `SECURE_ENV_PRO`。
   * 
   * @param request - RequestModelFileSyncRequest
   * @returns RequestModelFileSyncResponse
   */
  async requestModelFileSync(request: $_model.RequestModelFileSyncRequest): Promise<$_model.RequestModelFileSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestModelFileSyncWithOptions(request, runtime);
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
   * Pre-release Model Testing
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
   * Pre-release Model Testing
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
   * 
   * @param request - TestModelRequest
   * @returns TestModelResponse
   */
  async testModel(request: $_model.TestModelRequest): Promise<$_model.TestModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testModelWithOptions(request, runtime);
  }

  /**
   * Pre-release Test Model
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
   * Pre-release Test Model
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
   * 
   * @param request - TestPreModelRequest
   * @returns TestPreModelResponse
   */
  async testPreModel(request: $_model.TestPreModelRequest): Promise<$_model.TestPreModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testPreModelWithOptions(request, runtime);
  }

  /**
   * Test Expression
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
   * Test Expression
   * 
   * @remarks
   * ## Request Description
   * - This interface is used to query all available feature templates in the system.
   * - The request method is GET, and no additional parameters are required.
   * - The returned result includes multiple feature template options, each of which includes a label (label) and a value (value).
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
