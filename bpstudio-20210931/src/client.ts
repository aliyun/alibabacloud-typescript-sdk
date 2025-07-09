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
    this._endpoint = this.getEndpoint("bpstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Switches a disaster recovery application back to the primary zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application back to the primary zone.
   * 
   * @param request - AppFailBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppFailBackResponse
   */
  async appFailBackWithOptions(request: $_model.AppFailBackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AppFailBackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppFailBack",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppFailBackResponse>(await this.callApi(params, req, runtime), new $_model.AppFailBackResponse({}));
  }

  /**
   * Switches a disaster recovery application back to the primary zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application back to the primary zone.
   * 
   * @param request - AppFailBackRequest
   * @returns AppFailBackResponse
   */
  async appFailBack(request: $_model.AppFailBackRequest): Promise<$_model.AppFailBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.appFailBackWithOptions(request, runtime);
  }

  /**
   * Switches a disaster recovery application to another supported zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application to another supported zone.
   * 
   * @param request - AppFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppFailOverResponse
   */
  async appFailOverWithOptions(request: $_model.AppFailOverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AppFailOverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.failZone)) {
      body["FailZone"] = request.failZone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppFailOver",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppFailOverResponse>(await this.callApi(params, req, runtime), new $_model.AppFailOverResponse({}));
  }

  /**
   * Switches a disaster recovery application to another supported zone.
   * 
   * @remarks
   * You can call this operation to switch a disaster recovery application to another supported zone.
   * 
   * @param request - AppFailOverRequest
   * @returns AppFailOverResponse
   */
  async appFailOver(request: $_model.AppFailOverRequest): Promise<$_model.AppFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.appFailOverWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which an application or template belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which an application or template belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Creates an application based on an official template or private template in Cloud Architect Design Tool (CADT). Before you call this operation, make sure that you understand the billing methods and prices of Alibaba Cloud services to be used in the application.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    if (!$dara.isNull(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    if (!$dara.isNull(tmpReq.processVariables)) {
      request.processVariablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.processVariables, "ProcessVariables", "json");
    }

    if (!$dara.isNull(tmpReq.variables)) {
      request.variablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.variables, "Variables", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.areaId)) {
      body["AreaId"] = request.areaId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    if (!$dara.isNull(request.instancesShrink)) {
      body["Instances"] = request.instancesShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.processVariablesShrink)) {
      body["ProcessVariables"] = request.processVariablesShrink;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.variablesShrink)) {
      body["Variables"] = request.variablesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an application based on an official template or private template in Cloud Architect Design Tool (CADT). Before you call this operation, make sure that you understand the billing methods and prices of Alibaba Cloud services to be used in the application.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   * Before you call this operation to delete an application, make sure that the application is in the `Destroyed_Success` state. Otherwise, the application fails to be deleted.`` You can call the [GetApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-getapplication) operation to query the status of an application.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * Deletes an application.
   * 
   * @remarks
   * Before you call this operation to delete an application, make sure that the application is in the `Destroyed_Success` state. Otherwise, the application fails to be deleted.`` You can call the [GetApplication](https://www.alibabacloud.com/help/en/bp-studio/latest/api-bpstudio-2021-09-31-getapplication) operation to query the status of an application.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deploys an application after the payment.
   * 
   * @param request - DeployApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationResponse
   */
  async deployApplicationWithOptions(request: $_model.DeployApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeployApplicationResponse({}));
  }

  /**
   * Deploys an application after the payment.
   * 
   * @param request - DeployApplicationRequest
   * @returns DeployApplicationResponse
   */
  async deployApplication(request: $_model.DeployApplicationRequest): Promise<$_model.DeployApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployApplicationWithOptions(request, runtime);
  }

  /**
   * Asynchronous execution of product operation functions.
   * 
   * @param tmpReq - ExecuteOperationASyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteOperationASyncResponse
   */
  async executeOperationASyncWithOptions(tmpReq: $_model.ExecuteOperationASyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteOperationASyncResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteOperationASyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.attributesShrink)) {
      body["Attributes"] = request.attributesShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteOperationASync",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteOperationASyncResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteOperationASyncResponse({}));
  }

  /**
   * Asynchronous execution of product operation functions.
   * 
   * @param request - ExecuteOperationASyncRequest
   * @returns ExecuteOperationASyncResponse
   */
  async executeOperationASync(request: $_model.ExecuteOperationASyncRequest): Promise<$_model.ExecuteOperationASyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeOperationASyncWithOptions(request, runtime);
  }

  /**
   * 维护应用下资源API（同步操作）
   * 
   * @param tmpReq - ExecuteOperationSyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteOperationSyncResponse
   */
  async executeOperationSyncWithOptions(tmpReq: $_model.ExecuteOperationSyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteOperationSyncResponse> {
    tmpReq.validate();
    let request = new $_model.ExecuteOperationSyncShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.attributes)) {
      request.attributesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.attributes, "Attributes", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.attributesShrink)) {
      body["Attributes"] = request.attributesShrink;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.operation)) {
      body["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteOperationSync",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteOperationSyncResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteOperationSyncResponse({}));
  }

  /**
   * 维护应用下资源API（同步操作）
   * 
   * @param request - ExecuteOperationSyncRequest
   * @returns ExecuteOperationSyncResponse
   */
  async executeOperationSync(request: $_model.ExecuteOperationSyncRequest): Promise<$_model.ExecuteOperationSyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.executeOperationSyncWithOptions(request, runtime);
  }

  /**
   * The URL of the application topology image.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * The URL of the application topology image.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * 获取应用输入参数
   * 
   * @param request - GetApplicationVariablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationVariablesResponse
   */
  async getApplicationVariablesWithOptions(request: $_model.GetApplicationVariablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationVariablesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationVariables",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationVariablesResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationVariablesResponse({}));
  }

  /**
   * 获取应用输入参数
   * 
   * @param request - GetApplicationVariablesRequest
   * @returns GetApplicationVariablesResponse
   */
  async getApplicationVariables(request: $_model.GetApplicationVariablesRequest): Promise<$_model.GetApplicationVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationVariablesWithOptions(request, runtime);
  }

  /**
   * 获取需要重新配置的变量列表
   * 
   * @param request - GetApplicationVariables4FailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationVariables4FailResponse
   */
  async getApplicationVariables4FailWithOptions(request: $_model.GetApplicationVariables4FailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationVariables4FailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationVariables4Fail",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationVariables4FailResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationVariables4FailResponse({}));
  }

  /**
   * 获取需要重新配置的变量列表
   * 
   * @param request - GetApplicationVariables4FailRequest
   * @returns GetApplicationVariables4FailResponse
   */
  async getApplicationVariables4Fail(request: $_model.GetApplicationVariables4FailRequest): Promise<$_model.GetApplicationVariables4FailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationVariables4FailWithOptions(request, runtime);
  }

  /**
   * Asynchronously queries the result of an operation that is performed on a service instance.
   * 
   * @param request - GetExecuteOperationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteOperationResultResponse
   */
  async getExecuteOperationResultWithOptions(request: $_model.GetExecuteOperationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecuteOperationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operationId)) {
      body["OperationId"] = request.operationId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteOperationResult",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecuteOperationResultResponse>(await this.callApi(params, req, runtime), new $_model.GetExecuteOperationResultResponse({}));
  }

  /**
   * Asynchronously queries the result of an operation that is performed on a service instance.
   * 
   * @param request - GetExecuteOperationResultRequest
   * @returns GetExecuteOperationResultResponse
   */
  async getExecuteOperationResult(request: $_model.GetExecuteOperationResultRequest): Promise<$_model.GetExecuteOperationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecuteOperationResultWithOptions(request, runtime);
  }

  /**
   * Queries the status of a disaster recovery switchover task by task ID.
   * 
   * @remarks
   * You can call this operation to query the status of a disaster recovery switchover task by task ID.
   * 
   * @param request - GetFoTaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFoTaskStatusResponse
   */
  async getFoTaskStatusWithOptions(request: $_model.GetFoTaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFoTaskStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFoTaskStatus",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFoTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetFoTaskStatusResponse({}));
  }

  /**
   * Queries the status of a disaster recovery switchover task by task ID.
   * 
   * @remarks
   * You can call this operation to query the status of a disaster recovery switchover task by task ID.
   * 
   * @param request - GetFoTaskStatusRequest
   * @returns GetFoTaskStatusResponse
   */
  async getFoTaskStatus(request: $_model.GetFoTaskStatusRequest): Promise<$_model.GetFoTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFoTaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries the zones where the specified disaster recovery service can be switched.
   * 
   * @remarks
   * You can call this operation to query the zones where the specified disaster recovery service can be switched.
   * 
   * @param request - GetPotentialFailZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPotentialFailZonesResponse
   */
  async getPotentialFailZonesWithOptions(request: $_model.GetPotentialFailZonesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPotentialFailZonesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isPlanId)) {
      body["IsPlanId"] = request.isPlanId;
    }

    if (!$dara.isNull(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPotentialFailZones",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPotentialFailZonesResponse>(await this.callApi(params, req, runtime), new $_model.GetPotentialFailZonesResponse({}));
  }

  /**
   * Queries the zones where the specified disaster recovery service can be switched.
   * 
   * @remarks
   * You can call this operation to query the zones where the specified disaster recovery service can be switched.
   * 
   * @param request - GetPotentialFailZonesRequest
   * @returns GetPotentialFailZonesResponse
   */
  async getPotentialFailZones(request: $_model.GetPotentialFailZonesRequest): Promise<$_model.GetPotentialFailZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPotentialFailZonesWithOptions(request, runtime);
  }

  /**
   * 获取询价应用变配记录
   * 
   * @param request - GetResource4ModifyRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResource4ModifyRecordResponse
   */
  async getResource4ModifyRecordWithOptions(request: $_model.GetResource4ModifyRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResource4ModifyRecordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResource4ModifyRecord",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResource4ModifyRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetResource4ModifyRecordResponse({}));
  }

  /**
   * 获取询价应用变配记录
   * 
   * @param request - GetResource4ModifyRecordRequest
   * @returns GetResource4ModifyRecordResponse
   */
  async getResource4ModifyRecord(request: $_model.GetResource4ModifyRecordRequest): Promise<$_model.GetResource4ModifyRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResource4ModifyRecordWithOptions(request, runtime);
  }

  /**
   * 获取询价结果
   * 
   * @param request - GetResult4QueryInstancePrice4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResult4QueryInstancePrice4ModifyResponse
   */
  async getResult4QueryInstancePrice4ModifyWithOptions(request: $_model.GetResult4QueryInstancePrice4ModifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetResult4QueryInstancePrice4ModifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResult4QueryInstancePrice4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResult4QueryInstancePrice4ModifyResponse>(await this.callApi(params, req, runtime), new $_model.GetResult4QueryInstancePrice4ModifyResponse({}));
  }

  /**
   * 获取询价结果
   * 
   * @param request - GetResult4QueryInstancePrice4ModifyRequest
   * @returns GetResult4QueryInstancePrice4ModifyResponse
   */
  async getResult4QueryInstancePrice4Modify(request: $_model.GetResult4QueryInstancePrice4ModifyRequest): Promise<$_model.GetResult4QueryInstancePrice4ModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getResult4QueryInstancePrice4ModifyWithOptions(request, runtime);
  }

  /**
   * Gets template images and information about architecture diagrams.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.region)) {
      body["Region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Gets template images and information about architecture diagrams.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * Obtains a temporary token that is used to read the architecture diagram. The validity period of the token is 30 minutes.
   * 
   * @remarks
   * >Danger:  This API is no longer recommended, and the image related to the Application has included access authorization in the GetApplication property.
   * 
   * @deprecated OpenAPI GetToken is deprecated, please use BPStudio::2021-09-31::GetApplication instead.
   * 
   * @param request - GetTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  // Deprecated
  async getTokenWithOptions(request: $_model.GetTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * Obtains a temporary token that is used to read the architecture diagram. The validity period of the token is 30 minutes.
   * 
   * @remarks
   * >Danger:  This API is no longer recommended, and the image related to the Application has included access authorization in the GetApplication property.
   * 
   * @deprecated OpenAPI GetToken is deprecated, please use BPStudio::2021-09-31::GetApplication instead.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  // Deprecated
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTokenWithOptions(request, runtime);
  }

  /**
   * Prepares for application switchover and initiates a switchover task.
   * 
   * @remarks
   * You can call this operation to prepare for application switchover and initiate a switchover task.
   * 
   * @param request - InitAppFailOverRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitAppFailOverResponse
   */
  async initAppFailOverWithOptions(request: $_model.InitAppFailOverRequest, runtime: $dara.RuntimeOptions): Promise<$_model.InitAppFailOverResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitAppFailOver",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitAppFailOverResponse>(await this.callApi(params, req, runtime), new $_model.InitAppFailOverResponse({}));
  }

  /**
   * Prepares for application switchover and initiates a switchover task.
   * 
   * @remarks
   * You can call this operation to prepare for application switchover and initiate a switchover task.
   * 
   * @param request - InitAppFailOverRequest
   * @returns InitAppFailOverResponse
   */
  async initAppFailOver(request: $_model.InitAppFailOverRequest): Promise<$_model.InitAppFailOverResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initAppFailOverWithOptions(request, runtime);
  }

  /**
   * This API provides a list of all applications under the current user. The optional keyword parameter defines the keywords contained in the application name.
   * 
   * @param request - ListApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationResponse
   */
  async listApplicationWithOptions(request: $_model.ListApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.showHide)) {
      body["ShowHide"] = request.showHide;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationResponse({}));
  }

  /**
   * This API provides a list of all applications under the current user. The optional keyword parameter defines the keywords contained in the application name.
   * 
   * @param request - ListApplicationRequest
   * @returns ListApplicationResponse
   */
  async listApplication(request: $_model.ListApplicationRequest): Promise<$_model.ListApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about all disaster recovery plans of the current account.
   * 
   * @remarks
   * Queries the information about all disaster recovery plans of the current account.
   * 
   * @param request - ListFoCreatedAppsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoCreatedAppsResponse
   */
  async listFoCreatedAppsWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.ListFoCreatedAppsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "ListFoCreatedApps",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFoCreatedAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListFoCreatedAppsResponse({}));
  }

  /**
   * Queries the information about all disaster recovery plans of the current account.
   * 
   * @remarks
   * Queries the information about all disaster recovery plans of the current account.
   * @returns ListFoCreatedAppsResponse
   */
  async listFoCreatedApps(): Promise<$_model.ListFoCreatedAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoCreatedAppsWithOptions(runtime);
  }

  /**
   * Queries the tags of one or more applications or templates.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-09-31",
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
   * Queries the tags of one or more applications or templates.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries templates, including information such as the template name, architecture image URL, and URL of the serialized architecture image file.
   * 
   * @param tmpReq - ListTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateResponse
   */
  async listTemplateWithOptions(tmpReq: $_model.ListTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ListTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      body["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.tagList)) {
      body["TagList"] = request.tagList;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplate",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateResponse({}));
  }

  /**
   * Queries templates, including information such as the template name, architecture image URL, and URL of the serialized architecture image file.
   * 
   * @param request - ListTemplateRequest
   * @returns ListTemplateResponse
   */
  async listTemplate(request: $_model.ListTemplateRequest): Promise<$_model.ListTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateWithOptions(request, runtime);
  }

  /**
   * 提交应用变配
   * 
   * @param tmpReq - ModifyApplicationSpecRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyApplicationSpecResponse
   */
  async modifyApplicationSpecWithOptions(tmpReq: $_model.ModifyApplicationSpecRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyApplicationSpecResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyApplicationSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceSpec)) {
      request.instanceSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceSpec, "InstanceSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceSpecShrink)) {
      body["InstanceSpec"] = request.instanceSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyApplicationSpec",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyApplicationSpecResponse>(await this.callApi(params, req, runtime), new $_model.ModifyApplicationSpecResponse({}));
  }

  /**
   * 提交应用变配
   * 
   * @param request - ModifyApplicationSpecRequest
   * @returns ModifyApplicationSpecResponse
   */
  async modifyApplicationSpec(request: $_model.ModifyApplicationSpecRequest): Promise<$_model.ModifyApplicationSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyApplicationSpecWithOptions(request, runtime);
  }

  /**
   * 查询变配价格
   * 
   * @param tmpReq - QueryInstancePrice4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstancePrice4ModifyResponse
   */
  async queryInstancePrice4ModifyWithOptions(tmpReq: $_model.QueryInstancePrice4ModifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstancePrice4ModifyResponse> {
    tmpReq.validate();
    let request = new $_model.QueryInstancePrice4ModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configuration)) {
      request.configurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configuration, "Configuration", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.configurationShrink)) {
      body["Configuration"] = request.configurationShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstancePrice4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstancePrice4ModifyResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstancePrice4ModifyResponse({}));
  }

  /**
   * 查询变配价格
   * 
   * @param request - QueryInstancePrice4ModifyRequest
   * @returns QueryInstancePrice4ModifyResponse
   */
  async queryInstancePrice4Modify(request: $_model.QueryInstancePrice4ModifyRequest): Promise<$_model.QueryInstancePrice4ModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstancePrice4ModifyWithOptions(request, runtime);
  }

  /**
   * 查询变配规格列表
   * 
   * @param tmpReq - QueryInstanceSpec4ModifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryInstanceSpec4ModifyResponse
   */
  async queryInstanceSpec4ModifyWithOptions(tmpReq: $_model.QueryInstanceSpec4ModifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryInstanceSpec4ModifyResponse> {
    tmpReq.validate();
    let request = new $_model.QueryInstanceSpec4ModifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      body["Parameters"] = request.parametersShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryInstanceSpec4Modify",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryInstanceSpec4ModifyResponse>(await this.callApi(params, req, runtime), new $_model.QueryInstanceSpec4ModifyResponse({}));
  }

  /**
   * 查询变配规格列表
   * 
   * @param request - QueryInstanceSpec4ModifyRequest
   * @returns QueryInstanceSpec4ModifyResponse
   */
  async queryInstanceSpec4Modify(request: $_model.QueryInstanceSpec4ModifyRequest): Promise<$_model.QueryInstanceSpec4ModifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryInstanceSpec4ModifyWithOptions(request, runtime);
  }

  /**
   * 重新配置应用
   * 
   * @param request - ReConfigApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReConfigApplicationResponse
   */
  async reConfigApplicationWithOptions(request: $_model.ReConfigApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReConfigApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.variables)) {
      body["Variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReConfigApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReConfigApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ReConfigApplicationResponse({}));
  }

  /**
   * 重新配置应用
   * 
   * @param request - ReConfigApplicationRequest
   * @returns ReConfigApplicationResponse
   */
  async reConfigApplication(request: $_model.ReConfigApplicationRequest): Promise<$_model.ReConfigApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reConfigApplicationWithOptions(request, runtime);
  }

  /**
   * Releases the resources of an application.
   * 
   * @param request - ReleaseApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseApplicationResponse
   */
  async releaseApplicationWithOptions(request: $_model.ReleaseApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseApplicationResponse({}));
  }

  /**
   * Releases the resources of an application.
   * 
   * @param request - ReleaseApplicationRequest
   * @returns ReleaseApplicationResponse
   */
  async releaseApplication(request: $_model.ReleaseApplicationRequest): Promise<$_model.ReleaseApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseApplicationWithOptions(request, runtime);
  }

  /**
   * Verifies the resources of an application. ValidateApplication is an asynchronous operation. You can call the GetApplication operation to query the verification result.
   * 
   * @param request - ValidateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateApplicationResponse
   */
  async validateApplicationWithOptions(request: $_model.ValidateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ValidateApplicationResponse({}));
  }

  /**
   * Verifies the resources of an application. ValidateApplication is an asynchronous operation. You can call the GetApplication operation to query the verification result.
   * 
   * @param request - ValidateApplicationRequest
   * @returns ValidateApplicationResponse
   */
  async validateApplication(request: $_model.ValidateApplicationRequest): Promise<$_model.ValidateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the prices of resources of an application. You can call the GetApplication operation to obtain the query results.
   * 
   * @param request - ValuateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValuateApplicationResponse
   */
  async valuateApplicationWithOptions(request: $_model.ValuateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValuateApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValuateApplication",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValuateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.ValuateApplicationResponse({}));
  }

  /**
   * Queries the prices of resources of an application. You can call the GetApplication operation to obtain the query results.
   * 
   * @param request - ValuateApplicationRequest
   * @returns ValuateApplicationResponse
   */
  async valuateApplication(request: $_model.ValuateApplicationRequest): Promise<$_model.ValuateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.valuateApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the price of a template.
   * 
   * @param tmpReq - ValuateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValuateTemplateResponse
   */
  async valuateTemplateWithOptions(tmpReq: $_model.ValuateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValuateTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.ValuateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    if (!$dara.isNull(tmpReq.variables)) {
      request.variablesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.variables, "Variables", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.areaId)) {
      body["AreaId"] = request.areaId;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.instancesShrink)) {
      body["Instances"] = request.instancesShrink;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.variablesShrink)) {
      body["Variables"] = request.variablesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValuateTemplate",
      version: "2021-09-31",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValuateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.ValuateTemplateResponse({}));
  }

  /**
   * Queries the price of a template.
   * 
   * @param request - ValuateTemplateRequest
   * @returns ValuateTemplateResponse
   */
  async valuateTemplate(request: $_model.ValuateTemplateRequest): Promise<$_model.ValuateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.valuateTemplateWithOptions(request, runtime);
  }

}
