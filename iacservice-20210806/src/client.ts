// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi, * as $OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-zhangjiakou': "iac.cn-zhangjiakou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("iacservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}, runtime: $dara.RuntimeOptions): Promise<{[key: string]: any}> {
    let _runtime: { [key: string]: any } = {
      key: runtime.key || this._key,
      cert: runtime.cert || this._cert,
      ca: runtime.ca || this._ca,
      readTimeout: runtime.readTimeout || this._readTimeout,
      connectTimeout: runtime.connectTimeout || this._connectTimeout,
      httpProxy: runtime.httpProxy || this._httpProxy,
      httpsProxy: runtime.httpsProxy || this._httpsProxy,
      noProxy: runtime.noProxy || this._noProxy,
      socks5Proxy: runtime.socks5Proxy || this._socks5Proxy,
      socks5NetWork: runtime.socks5NetWork || this._socks5NetWork,
      maxIdleConns: runtime.maxIdleConns || this._maxIdleConns,
      retryOptions: this._retryOptions,
      ignoreSSL: runtime.ignoreSSL || false,
      tlsMinVersion: this._tlsMinVersion,
    }

    let _retriesAttempted = 0;
    let _lastRequest = null, _lastResponse = null;
    let _context = new $dara.RetryPolicyContext({
      retriesAttempted: _retriesAttempted,
    });
    while ($dara.shouldRetry(_runtime['retryOptions'], _context)) {
      if (_retriesAttempted > 0) {
        let _backoffTime = $dara.getBackoffDelay(_runtime['retryOptions'], _context);
        if (_backoffTime > 0) {
          await $dara.sleep(_backoffTime);
        }
      }

      _retriesAttempted = _retriesAttempted + 1;
      try {
        let request_ = new $dara.Request();
        let boundary = $dara.Form.getBoundary();
        let tmp = String(form["host"]);
        let host = `${bucketName}.${tmp}`;
        request_.protocol = "HTTPS";
        request_.method = "POST";
        request_.pathname = `/`;
        request_.headers = {
          host: host,
          date: OpenApiUtil.getDateUTCString(),
          'user-agent': OpenApiUtil.getUserAgent(""),
        };
        request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
        request_.body = $dara.Form.toFileForm(form, boundary);
        _lastRequest = request_;
        let response_ = await $dara.doAction(request_, _runtime);
        _lastResponse = response_;

        let respMap : {[key: string]: any} = null;
        let bodyStr = await $dara.Stream.readAsString(response_.body);
        if ((response_.statusCode >= 400) && (response_.statusCode < 600)) {
          respMap = $dara.XML.parseXml(bodyStr, null);
          let err = respMap["Error"];
          throw new $OpenApi.ClientError({
            code: String(err["Code"]),
            message: String(err["Message"]),
            data: {
              httpCode: response_.statusCode,
              requestId: String(err["RequestId"]),
              hostId: String(err["HostId"]),
            },
          });
        }

        respMap = $dara.XML.parseXml(bodyStr, null);
        return {
          ...respMap,
        };
      } catch (ex) {
        _context = new $dara.RetryPolicyContext({
          retriesAttempted : _retriesAttempted,
          httpRequest : _lastRequest,
          httpResponse : _lastResponse,
          exception : ex,
        });
        continue;
      }
    }

    throw $dara.newUnretryableError(_context);
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
   * Adds shared accounts.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - AddSharedAccountsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSharedAccountsResponse
   */
  async addSharedAccountsWithOptions(request: $_model.AddSharedAccountsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddSharedAccountsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIds)) {
      body["accountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSharedAccounts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/sharedAccounts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.AddSharedAccountsResponse({}));
  }

  /**
   * Adds shared accounts.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - AddSharedAccountsRequest
   * @returns AddSharedAccountsResponse
   */
  async addSharedAccounts(request: $_model.AddSharedAccountsRequest): Promise<$_model.AddSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSharedAccountsWithOptions(request, headers, runtime);
  }

  /**
   * Associate drift detection configuration
   * 
   * @param request - AssociateDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateDetectConfigResponse
   */
  async associateDetectConfigWithOptions(request: $_model.AssociateDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateDetectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detectConfigId)) {
      body["detectConfigId"] = request.detectConfigId;
    }

    if (!$dara.isNull(request.targetId)) {
      body["targetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      body["targetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/operations/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.AssociateDetectConfigResponse({}));
  }

  /**
   * Associate drift detection configuration
   * 
   * @param request - AssociateDetectConfigRequest
   * @returns AssociateDetectConfigResponse
   */
  async associateDetectConfig(request: $_model.AssociateDetectConfigRequest): Promise<$_model.AssociateDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateDetectConfigWithOptions(request, headers, runtime);
  }

  /**
   * Associates resources with a group.
   * 
   * @param request - AssociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateGroupResponse
   */
  async associateGroupWithOptions(groupId: string, request: $_model.AssociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateGroupResponse>(await this.callApi(params, req, runtime), new $_model.AssociateGroupResponse({}));
  }

  /**
   * Associates resources with a group.
   * 
   * @param request - AssociateGroupRequest
   * @returns AssociateGroupResponse
   */
  async associateGroup(groupId: string, request: $_model.AssociateGroupRequest): Promise<$_model.AssociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Associates parameter sets.
   * 
   * @remarks
   * After creating a parameter set, you need to associate it with a resource. Valid values for the resource type:
   * - Module: template
   * - ModuleVersion: template version
   * - Task: node.
   * 
   * @param request - AssociateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateParameterSetResponse
   */
  async associateParameterSetWithOptions(request: $_model.AssociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateParameterSetResponse>(await this.callApi(params, req, runtime), new $_model.AssociateParameterSetResponse({}));
  }

  /**
   * Associates parameter sets.
   * 
   * @remarks
   * After creating a parameter set, you need to associate it with a resource. Valid values for the resource type:
   * - Module: template
   * - ModuleVersion: template version
   * - Task: node.
   * 
   * @param request - AssociateParameterSetRequest
   * @returns AssociateParameterSetResponse
   */
  async associateParameterSet(request: $_model.AssociateParameterSetRequest): Promise<$_model.AssociateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * Cancels a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CancelResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTaskWithOptions(exportTaskId: string, request: $_model.CancelResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/cancel/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelResourceExportTaskResponse({}));
  }

  /**
   * Cancels a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CancelResourceExportTaskRequest
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTask(exportTaskId: string, request: $_model.CancelResourceExportTaskRequest): Promise<$_model.CancelResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Creates a drift detection configuration that supports manual or scheduled triggering.
   * 
   * @remarks
   * ## Request Description  
   * - When `triggerType` is set to `Cron`, a valid `cronExpression` must be provided.  
   * - Each element in the `alarmConfigs` list must specify the alerting method `type` and the corresponding alerting address `address`.  
   * - If the `enabled` parameter is not explicitly set, its default value is `true`, meaning newly created detection configurations are enabled by default.  
   * - It is recommended to use a UUID as the value of `clientToken` to ensure request idempotence.
   * 
   * @param request - CreateDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDetectConfigResponse
   */
  async createDetectConfigWithOptions(request: $_model.CreateDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDetectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmConfigs)) {
      body["alarmConfigs"] = request.alarmConfigs;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cronExpression)) {
      body["cronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.detectConfigName)) {
      body["detectConfigName"] = request.detectConfigName;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.triggerType)) {
      body["triggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateDetectConfigResponse({}));
  }

  /**
   * Creates a drift detection configuration that supports manual or scheduled triggering.
   * 
   * @remarks
   * ## Request Description  
   * - When `triggerType` is set to `Cron`, a valid `cronExpression` must be provided.  
   * - Each element in the `alarmConfigs` list must specify the alerting method `type` and the corresponding alerting address `address`.  
   * - If the `enabled` parameter is not explicitly set, its default value is `true`, meaning newly created detection configurations are enabled by default.  
   * - It is recommended to use a UUID as the value of `clientToken` to ensure request idempotence.
   * 
   * @param request - CreateDetectConfigRequest
   * @returns CreateDetectConfigResponse
   */
  async createDetectConfig(request: $_model.CreateDetectConfigRequest): Promise<$_model.CreateDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDetectConfigWithOptions(request, headers, runtime);
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * Creates a group.
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a job and runs a task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(taskId: string, request: $_model.CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.subCommand)) {
      body["subCommand"] = request.subCommand;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * Creates a job and runs a task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(taskId: string, request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(taskId, request, headers, runtime);
  }

  /**
   * Creates a Terraform template. Multiple source methods are supported, such as OSS import, Registry import, file upload, and online editing.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleResponse
   */
  async createModuleWithOptions(request: $_model.CreateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateModuleResponse({}));
  }

  /**
   * Creates a Terraform template. Multiple source methods are supported, such as OSS import, Registry import, file upload, and online editing.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateModuleRequest
   * @returns CreateModuleResponse
   */
  async createModule(request: $_model.CreateModuleRequest): Promise<$_model.CreateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleWithOptions(request, headers, runtime);
  }

  /**
   * Publishes a new version for a specified template.
   * 
   * @remarks
   * ## Operation description
   * - Use the `clientToken` parameter to ensure idempotence of the request and prevent duplicate submissions caused by network retries.
   * - Use semantic versioning (such as `v1.0.0`).
   * 
   * @param request - CreateModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersionWithOptions(moduleId: string, request: $_model.CreateModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateModuleVersionResponse({}));
  }

  /**
   * Publishes a new version for a specified template.
   * 
   * @remarks
   * ## Operation description
   * - Use the `clientToken` parameter to ensure idempotence of the request and prevent duplicate submissions caused by network retries.
   * - Use semantic versioning (such as `v1.0.0`).
   * 
   * @param request - CreateModuleVersionRequest
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersion(moduleId: string, request: $_model.CreateModuleVersionRequest): Promise<$_model.CreateModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * Adds a new parameter set. You can set the name, description, and parameter list.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates a new parameter set.
   * - The `name` field is required and can be up to 128 characters in length.
   * - Each element in the `parameters` array must contain the `name` field. Other fields are optional.
   * - Use the `clientToken` field to ensure idempotence of the request.
   * - The request header must contain authentication information to ensure secure access.
   * 
   * @param request - CreateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterSetResponse
   */
  async createParameterSetWithOptions(request: $_model.CreateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateParameterSetResponse>(await this.callApi(params, req, runtime), new $_model.CreateParameterSetResponse({}));
  }

  /**
   * Adds a new parameter set. You can set the name, description, and parameter list.
   * 
   * @remarks
   * ## Operation description
   * - This operation creates a new parameter set.
   * - The `name` field is required and can be up to 128 characters in length.
   * - Each element in the `parameters` array must contain the `name` field. Other fields are optional.
   * - Use the `clientToken` field to ensure idempotence of the request.
   * - The request header must contain authentication information to ensure secure access.
   * 
   * @param request - CreateParameterSetRequest
   * @returns CreateParameterSetResponse
   */
  async createParameterSet(request: $_model.CreateParameterSetRequest): Promise<$_model.CreateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a project.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * Creates a Registry template.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - CreateRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistryModuleResponse
   */
  async createRegistryModuleWithOptions(request: $_model.CreateRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRegistryModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.provider)) {
      body["provider"] = request.provider;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRegistryModuleResponse({}));
  }

  /**
   * Creates a Registry template.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - CreateRegistryModuleRequest
   * @returns CreateRegistryModuleResponse
   */
  async createRegistryModule(request: $_model.CreateRegistryModuleRequest): Promise<$_model.CreateRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRegistryModuleWithOptions(request, headers, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateRegistryNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistryNamespaceResponse
   */
  async createRegistryNamespaceWithOptions(request: $_model.CreateRegistryNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRegistryNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.maintainer)) {
      body["maintainer"] = request.maintainer;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRegistryNamespaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateRegistryNamespaceRequest
   * @returns CreateRegistryNamespaceResponse
   */
  async createRegistryNamespace(request: $_model.CreateRegistryNamespaceRequest): Promise<$_model.CreateRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRegistryNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTaskWithOptions(request: $_model.CreateResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceExportTaskResponse({}));
  }

  /**
   * Creates a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateResourceExportTaskRequest
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTask(request: $_model.CreateResourceExportTaskRequest): Promise<$_model.CreateResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceExportTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a resource stack and triggers deployment.
   * 
   * @param request - CreateStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStackResponse
   */
  async createStackWithOptions(request: $_model.CreateStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.workingDirectory)) {
      body["workingDirectory"] = request.workingDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStack",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStackResponse>(await this.callApi(params, req, runtime), new $_model.CreateStackResponse({}));
  }

  /**
   * Creates a resource stack and triggers deployment.
   * 
   * @param request - CreateStackRequest
   * @returns CreateStackResponse
   */
  async createStack(request: $_model.CreateStackRequest): Promise<$_model.CreateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createStackWithOptions(request, headers, runtime);
  }

  /**
   * Creates a task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.skipRegionValidation)) {
      body["skipRegionValidation"] = request.skipRegionValidation;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taskBackend)) {
      body["taskBackend"] = request.taskBackend;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * Creates a task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * Delete drift detection configuration
   * 
   * @param request - DeleteDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDetectConfigResponse
   */
  async deleteDetectConfigWithOptions(detectConfigId: string, request: $_model.DeleteDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDetectConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/${$dara.URL.percentEncode(detectConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDetectConfigResponse({}));
  }

  /**
   * Delete drift detection configuration
   * 
   * @param request - DeleteDetectConfigRequest
   * @returns DeleteDetectConfigResponse
   */
  async deleteDetectConfig(detectConfigId: string, request: $_model.DeleteDetectConfigRequest): Promise<$_model.DeleteDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDetectConfigWithOptions(detectConfigId, request, headers, runtime);
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(groupId: string, request: $_model.DeleteGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * Deletes a group.
   * 
   * @param request - DeleteGroupRequest
   * @returns DeleteGroupResponse
   */
  async deleteGroup(groupId: string, request: $_model.DeleteGroupRequest): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Deletes a specified template and all its versions.
   * 
   * @remarks
   * ## Operation description
   * - This operation deletes a specified template.
   * - Deletion is irreversible. Proceed with caution.
   * 
   * @param request - DeleteModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModuleResponse
   */
  async deleteModuleWithOptions(moduleId: string, request: $_model.DeleteModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModuleResponse({}));
  }

  /**
   * Deletes a specified template and all its versions.
   * 
   * @remarks
   * ## Operation description
   * - This operation deletes a specified template.
   * - Deletion is irreversible. Proceed with caution.
   * 
   * @param request - DeleteModuleRequest
   * @returns DeleteModuleResponse
   */
  async deleteModule(moduleId: string, request: $_model.DeleteModuleRequest): Promise<$_model.DeleteModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModuleWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * Deletes a specified parameter set by parameter set ID.
   * 
   * @remarks
   * Deletes a specified parameter set.
   * 
   * @param request - DeleteParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterSetResponse
   */
  async deleteParameterSetWithOptions(parameterSetId: string, request: $_model.DeleteParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterSetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParameterSetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParameterSetResponse({}));
  }

  /**
   * Deletes a specified parameter set by parameter set ID.
   * 
   * @remarks
   * Deletes a specified parameter set.
   * 
   * @param request - DeleteParameterSetRequest
   * @returns DeleteParameterSetResponse
   */
  async deleteParameterSet(parameterSetId: string, request: $_model.DeleteParameterSetRequest): Promise<$_model.DeleteParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParameterSetWithOptions(parameterSetId, request, headers, runtime);
  }

  /**
   * Deletes a project.
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(projectId: string, request: $_model.DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * Deletes a project.
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(projectId: string, request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * Deletes a Registry template.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryModuleResponse
   */
  async deleteRegistryModuleWithOptions(namespaceName: string, moduleName: string, request: $_model.DeleteRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryModuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryModuleResponse({}));
  }

  /**
   * Deletes a Registry template.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryModuleRequest
   * @returns DeleteRegistryModuleResponse
   */
  async deleteRegistryModule(namespaceName: string, moduleName: string, request: $_model.DeleteRegistryModuleRequest): Promise<$_model.DeleteRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryModuleWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * Deletes a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryModuleVersionResponse
   */
  async deleteRegistryModuleVersionWithOptions(namespaceName: string, moduleName: string, version: string, request: $_model.DeleteRegistryModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryModuleVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/${$dara.URL.percentEncode(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryModuleVersionResponse({}));
  }

  /**
   * Deletes a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryModuleVersionRequest
   * @returns DeleteRegistryModuleVersionResponse
   */
  async deleteRegistryModuleVersion(namespaceName: string, moduleName: string, version: string, request: $_model.DeleteRegistryModuleVersionRequest): Promise<$_model.DeleteRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryModuleVersionWithOptions(namespaceName, moduleName, version, request, headers, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryNamespaceResponse
   */
  async deleteRegistryNamespaceWithOptions(namespaceName: string, request: $_model.DeleteRegistryNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryNamespaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryNamespaceResponse({}));
  }

  /**
   * Deletes a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteRegistryNamespaceRequest
   * @returns DeleteRegistryNamespaceResponse
   */
  async deleteRegistryNamespace(namespaceName: string, request: $_model.DeleteRegistryNamespaceRequest): Promise<$_model.DeleteRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryNamespaceWithOptions(namespaceName, request, headers, runtime);
  }

  /**
   * Deletes a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTaskWithOptions(exportTaskId: string, request: $_model.DeleteResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceExportTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceExportTaskResponse({}));
  }

  /**
   * Deletes a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - DeleteResourceExportTaskRequest
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTask(exportTaskId: string, request: $_model.DeleteResourceExportTaskRequest): Promise<$_model.DeleteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Deletes a stack.
   * 
   * @param request - DeleteStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStackResponse
   */
  async deleteStackWithOptions(stackId: string, request: $_model.DeleteStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStackResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cleanResources)) {
      query["cleanResources"] = request.cleanResources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStack",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/${$dara.URL.percentEncode(stackId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStackResponse({}));
  }

  /**
   * Deletes a stack.
   * 
   * @param request - DeleteStackRequest
   * @returns DeleteStackResponse
   */
  async deleteStack(stackId: string, request: $_model.DeleteStackRequest): Promise<$_model.DeleteStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteStackWithOptions(stackId, request, headers, runtime);
  }

  /**
   * Deletes a node.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * Deletes a node. If the node has resources that have not been destroyed, the node cannot be deleted.
   * 
   * @param request - DeleteTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(taskId: string, request: $_model.DeleteTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskResponse({}));
  }

  /**
   * Deletes a node.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * Deletes a node. If the node has resources that have not been destroyed, the node cannot be deleted.
   * 
   * @param request - DeleteTaskRequest
   * @returns DeleteTaskResponse
   */
  async deleteTask(taskId: string, request: $_model.DeleteTaskRequest): Promise<$_model.DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(taskId, request, headers, runtime);
  }

  /**
   * Initiates a state file consistency check.
   * 
   * @remarks
   * This API is used to perform drift detection on the state files of resource orchestration tasks and stack tasks in the automated service desk.
   * 
   * @param request - DetectTerraformStateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectTerraformStateResponse
   */
  async detectTerraformStateWithOptions(request: $_model.DetectTerraformStateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DetectTerraformStateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetectTerraformState",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detect`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetectTerraformStateResponse>(await this.callApi(params, req, runtime), new $_model.DetectTerraformStateResponse({}));
  }

  /**
   * Initiates a state file consistency check.
   * 
   * @remarks
   * This API is used to perform drift detection on the state files of resource orchestration tasks and stack tasks in the automated service desk.
   * 
   * @param request - DetectTerraformStateRequest
   * @returns DetectTerraformStateResponse
   */
  async detectTerraformState(request: $_model.DetectTerraformStateRequest): Promise<$_model.DetectTerraformStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detectTerraformStateWithOptions(request, headers, runtime);
  }

  /**
   * Disassociate drift detection configuration
   * 
   * @param request - DissociateDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateDetectConfigResponse
   */
  async dissociateDetectConfigWithOptions(request: $_model.DissociateDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateDetectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detectConfigId)) {
      body["detectConfigId"] = request.detectConfigId;
    }

    if (!$dara.isNull(request.targetId)) {
      body["targetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      body["targetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/operations/dissociate`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.DissociateDetectConfigResponse({}));
  }

  /**
   * Disassociate drift detection configuration
   * 
   * @param request - DissociateDetectConfigRequest
   * @returns DissociateDetectConfigResponse
   */
  async dissociateDetectConfig(request: $_model.DissociateDetectConfigRequest): Promise<$_model.DissociateDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateDetectConfigWithOptions(request, headers, runtime);
  }

  /**
   * Dissociates a resource group.
   * 
   * @param request - DissociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateGroupResponse
   */
  async dissociateGroupWithOptions(projectId: string, groupId: string, request: $_model.DissociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateGroupResponse>(await this.callApi(params, req, runtime), new $_model.DissociateGroupResponse({}));
  }

  /**
   * Dissociates a resource group.
   * 
   * @param request - DissociateGroupRequest
   * @returns DissociateGroupResponse
   */
  async dissociateGroup(projectId: string, groupId: string, request: $_model.DissociateGroupRequest): Promise<$_model.DissociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateGroupWithOptions(projectId, groupId, request, headers, runtime);
  }

  /**
   * Dissociates a parameter set from other resources.
   * 
   * @param request - DissociateParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateParameterSetResponse
   */
  async dissociateParameterSetWithOptions(request: $_model.DissociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateParameterSetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateParameterSetResponse>(await this.callApi(params, req, runtime), new $_model.DissociateParameterSetResponse({}));
  }

  /**
   * Dissociates a parameter set from other resources.
   * 
   * @param request - DissociateParameterSetRequest
   * @returns DissociateParameterSetResponse
   */
  async dissociateParameterSet(request: $_model.DissociateParameterSetRequest): Promise<$_model.DissociateParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateParameterSetWithOptions(request, headers, runtime);
  }

  /**
   * Executes a Module officially provided by Alibaba Cloud Terraform.
   * 
   * @remarks
   * This API operation is used to execute Terraform Module code to create or update cloud resources. Before using this API operation, make sure that all required authentication information is correctly configured and that the Terraform code corresponding to the Module meets the expected functional requirements.
   * 
   * @param request - ExecuteRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRegistryModuleResponse
   */
  async executeRegistryModuleWithOptions(namespaceName: string, moduleName: string, request: $_model.ExecuteRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteRegistryModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/execution`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteRegistryModuleResponse({}));
  }

  /**
   * Executes a Module officially provided by Alibaba Cloud Terraform.
   * 
   * @remarks
   * This API operation is used to execute Terraform Module code to create or update cloud resources. Before using this API operation, make sure that all required authentication information is correctly configured and that the Terraform code corresponding to the Module meets the expected functional requirements.
   * 
   * @param request - ExecuteRegistryModuleRequest
   * @returns ExecuteRegistryModuleResponse
   */
  async executeRegistryModule(namespaceName: string, moduleName: string, request: $_model.ExecuteRegistryModuleRequest): Promise<$_model.ExecuteRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeRegistryModuleWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * Runs a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTaskWithOptions(exportTaskId: string, request: $_model.ExecuteResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/execute/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteResourceExportTaskResponse({}));
  }

  /**
   * Runs a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTask(exportTaskId: string, request: $_model.ExecuteResourceExportTaskRequest): Promise<$_model.ExecuteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Executes TerraformApply.
   * 
   * @remarks
   * Executes the Terraform Apply command to create or update cloud resources based on the provided Terraform code. This API can handle complex scenarios such as operations that depend on a previous state.
   * Before calling this API, ensure that all required authentication information is properly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ExecuteTerraformApplyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformApplyResponse
   */
  async executeTerraformApplyWithOptions(request: $_model.ExecuteTerraformApplyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformApplyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformApply",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformApplyResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformApplyResponse({}));
  }

  /**
   * Executes TerraformApply.
   * 
   * @remarks
   * Executes the Terraform Apply command to create or update cloud resources based on the provided Terraform code. This API can handle complex scenarios such as operations that depend on a previous state.
   * Before calling this API, ensure that all required authentication information is properly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ExecuteTerraformApplyRequest
   * @returns ExecuteTerraformApplyResponse
   */
  async executeTerraformApply(request: $_model.ExecuteTerraformApplyRequest): Promise<$_model.ExecuteTerraformApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformApplyWithOptions(request, headers, runtime);
  }

  /**
   * Executes Terraform Destroy.
   * 
   * @remarks
   * Executes the Terraform Destroy command to destroy resources created by Terraform.
   * 
   * @param request - ExecuteTerraformDestroyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformDestroyResponse
   */
  async executeTerraformDestroyWithOptions(request: $_model.ExecuteTerraformDestroyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformDestroyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformDestroy",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/destroy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformDestroyResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformDestroyResponse({}));
  }

  /**
   * Executes Terraform Destroy.
   * 
   * @remarks
   * Executes the Terraform Destroy command to destroy resources created by Terraform.
   * 
   * @param request - ExecuteTerraformDestroyRequest
   * @returns ExecuteTerraformDestroyResponse
   */
  async executeTerraformDestroy(request: $_model.ExecuteTerraformDestroyRequest): Promise<$_model.ExecuteTerraformDestroyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformDestroyWithOptions(request, headers, runtime);
  }

  /**
   * Executes a Terraform plan.
   * 
   * @remarks
   * Executes a Terraform Plan command by using the provided Terraform code to create or update cloud resources. This API operation can handle complex scenarios such as operations that depend on a previous state.
   * Before calling this API operation, ensure that all required authentication information is properly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ExecuteTerraformPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformPlanResponse
   */
  async executeTerraformPlanWithOptions(request: $_model.ExecuteTerraformPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformPlan",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/plan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformPlanResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformPlanResponse({}));
  }

  /**
   * Executes a Terraform plan.
   * 
   * @remarks
   * Executes a Terraform Plan command by using the provided Terraform code to create or update cloud resources. This API operation can handle complex scenarios such as operations that depend on a previous state.
   * Before calling this API operation, ensure that all required authentication information is properly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ExecuteTerraformPlanRequest
   * @returns ExecuteTerraformPlanResponse
   */
  async executeTerraformPlan(request: $_model.ExecuteTerraformPlanRequest): Promise<$_model.ExecuteTerraformPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformPlanWithOptions(request, headers, runtime);
  }

  /**
   * Generates Terraform HCL template code.
   * 
   * @param request - GenerateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateModuleResponse
   */
  async generateModuleWithOptions(request: $_model.GenerateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generateSource)) {
      body["generateSource"] = request.generateSource;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.syntax)) {
      body["syntax"] = request.syntax;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformResourceType)) {
      body["terraformResourceType"] = request.terraformResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorer/generate/module`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateModuleResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateModuleResponse({}));
  }

  /**
   * Generates Terraform HCL template code.
   * 
   * @param request - GenerateModuleRequest
   * @returns GenerateModuleResponse
   */
  async generateModule(request: $_model.GenerateModuleRequest): Promise<$_model.GenerateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateModuleWithOptions(request, headers, runtime);
  }

  /**
   * Retrieve drift detection configuration
   * 
   * @param request - GetDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDetectConfigResponse
   */
  async getDetectConfigWithOptions(detectConfigId: string, request: $_model.GetDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDetectConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/${$dara.URL.percentEncode(detectConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDetectConfigResponse({}));
  }

  /**
   * Retrieve drift detection configuration
   * 
   * @param request - GetDetectConfigRequest
   * @returns GetDetectConfigResponse
   */
  async getDetectConfig(detectConfigId: string, request: $_model.GetDetectConfigRequest): Promise<$_model.GetDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDetectConfigWithOptions(detectConfigId, request, headers, runtime);
  }

  /**
   * Retrieves the encryption configuration.
   * 
   * @param request - GetEncryptionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEncryptionConfigResponse
   */
  async getEncryptionConfigWithOptions(request: $_model.GetEncryptionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEncryptionConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEncryptionConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/encryption/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEncryptionConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetEncryptionConfigResponse({}));
  }

  /**
   * Retrieves the encryption configuration.
   * 
   * @param request - GetEncryptionConfigRequest
   * @returns GetEncryptionConfigResponse
   */
  async getEncryptionConfig(request: $_model.GetEncryptionConfigRequest): Promise<$_model.GetEncryptionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEncryptionConfigWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the result of a Terraform run.
   * 
   * @remarks
   * Retrieves the result of a Terraform run.
   * 
   * @param request - GetExecuteStateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteStateResponse
   */
  async getExecuteStateWithOptions(stateId: string, request: $_model.GetExecuteStateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecuteStateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteState",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/${$dara.URL.percentEncode(stateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecuteStateResponse>(await this.callApi(params, req, runtime), new $_model.GetExecuteStateResponse({}));
  }

  /**
   * Retrieves the result of a Terraform run.
   * 
   * @remarks
   * Retrieves the result of a Terraform run.
   * 
   * @param request - GetExecuteStateRequest
   * @returns GetExecuteStateResponse
   */
  async getExecuteState(stateId: string, request: $_model.GetExecuteStateRequest): Promise<$_model.GetExecuteStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExecuteStateWithOptions(stateId, request, headers, runtime);
  }

  /**
   * Queries a group.
   * 
   * @param request - GetGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(groupId: string, request: $_model.GetGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * Queries a group.
   * 
   * @param request - GetGroupRequest
   * @returns GetGroupResponse
   */
  async getGroup(groupId: string, request: $_model.GetGroupRequest): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Retrieves job information.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(taskId: string, jobId: string, request: $_model.GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Retrieves job information.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(taskId: string, jobId: string, request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(taskId, jobId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified template.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the details of a specified template, including but not limited to the template name, description, source, status, and latest version. You must specify the template ID and include authentication information in the request.
   * 
   * @param request - GetModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleResponse
   */
  async getModuleWithOptions(moduleId: string, request: $_model.GetModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModuleResponse>(await this.callApi(params, req, runtime), new $_model.GetModuleResponse({}));
  }

  /**
   * Queries the details of a specified template.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the details of a specified template, including but not limited to the template name, description, source, status, and latest version. You must specify the template ID and include authentication information in the request.
   * 
   * @param request - GetModuleRequest
   * @returns GetModuleResponse
   */
  async getModule(moduleId: string, request: $_model.GetModuleRequest): Promise<$_model.GetModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * Queries the details of a specific version of a specified template.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the details of a specific version of a specified template, including the version number, description, and release time. Make sure that the template ID and version number are correct.
   * 
   * @param request - GetModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleVersionResponse
   */
  async getModuleVersionWithOptions(moduleId: string, moduleVersion: string, request: $_model.GetModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModuleVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions/${$dara.URL.percentEncode(moduleVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetModuleVersionResponse({}));
  }

  /**
   * Queries the details of a specific version of a specified template.
   * 
   * @remarks
   * ## Operation description
   * You can call this operation to query the details of a specific version of a specified template, including the version number, description, and release time. Make sure that the template ID and version number are correct.
   * 
   * @param request - GetModuleVersionRequest
   * @returns GetModuleVersionResponse
   */
  async getModuleVersion(moduleId: string, moduleVersion: string, request: $_model.GetModuleVersionRequest): Promise<$_model.GetModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleVersionWithOptions(moduleId, moduleVersion, request, headers, runtime);
  }

  /**
   * Retrieves the details of a parameter set by parameter set ID.
   * 
   * @remarks
   * ## Request description
   * - This operation retrieves detailed parameter set information by specifying a `parameterSetId`.
   * - Authentication is required to access this operation.
   * - If the request is successful, detailed data including the parameter set name, description, and parameter list is returned.
   * 
   * @param request - GetParameterSetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParameterSetResponse
   */
  async getParameterSetWithOptions(parameterSetId: string, request: $_model.GetParameterSetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetParameterSetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParameterSetResponse>(await this.callApi(params, req, runtime), new $_model.GetParameterSetResponse({}));
  }

  /**
   * Retrieves the details of a parameter set by parameter set ID.
   * 
   * @remarks
   * ## Request description
   * - This operation retrieves detailed parameter set information by specifying a `parameterSetId`.
   * - Authentication is required to access this operation.
   * - If the request is successful, detailed data including the parameter set name, description, and parameter list is returned.
   * 
   * @param request - GetParameterSetRequest
   * @returns GetParameterSetResponse
   */
  async getParameterSet(parameterSetId: string, request: $_model.GetParameterSetRequest): Promise<$_model.GetParameterSetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParameterSetWithOptions(parameterSetId, request, headers, runtime);
  }

  /**
   * Queries a project.
   * 
   * @param request - GetProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(projectId: string, request: $_model.GetProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries a project.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(projectId: string, request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * Retrieves the resource documentation of a Terraform provider.
   * 
   * @param request - GetProviderDocumentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProviderDocumentResponse
   */
  async getProviderDocumentWithOptions(request: $_model.GetProviderDocumentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProviderDocumentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.providerVersion)) {
      query["providerVersion"] = request.providerVersion;
    }

    if (!$dara.isNull(request.terraformResourceType)) {
      query["terraformResourceType"] = request.terraformResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProviderDocument",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/version/terraform/provider/document`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProviderDocumentResponse>(await this.callApi(params, req, runtime), new $_model.GetProviderDocumentResponse({}));
  }

  /**
   * Retrieves the resource documentation of a Terraform provider.
   * 
   * @param request - GetProviderDocumentRequest
   * @returns GetProviderDocumentResponse
   */
  async getProviderDocument(request: $_model.GetProviderDocumentRequest): Promise<$_model.GetProviderDocumentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProviderDocumentWithOptions(request, headers, runtime);
  }

  /**
   * Queries a Registry module.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryModuleResponse
   */
  async getRegistryModuleWithOptions(namespaceName: string, moduleName: string, request: $_model.GetRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryModuleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryModuleResponse({}));
  }

  /**
   * Queries a Registry module.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryModuleRequest
   * @returns GetRegistryModuleResponse
   */
  async getRegistryModule(namespaceName: string, moduleName: string, request: $_model.GetRegistryModuleRequest): Promise<$_model.GetRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryModuleWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * Queries a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryModuleVersionResponse
   */
  async getRegistryModuleVersionWithOptions(namespaceName: string, moduleName: string, version: string, request: $_model.GetRegistryModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryModuleVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/${$dara.URL.percentEncode(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryModuleVersionResponse({}));
  }

  /**
   * Queries a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryModuleVersionRequest
   * @returns GetRegistryModuleVersionResponse
   */
  async getRegistryModuleVersion(namespaceName: string, moduleName: string, version: string, request: $_model.GetRegistryModuleVersionRequest): Promise<$_model.GetRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryModuleVersionWithOptions(namespaceName, moduleName, version, request, headers, runtime);
  }

  /**
   * Queries a workspace.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryNamespaceResponse
   */
  async getRegistryNamespaceWithOptions(namespaceName: string, request: $_model.GetRegistryNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryNamespaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryNamespaceResponse({}));
  }

  /**
   * Queries a workspace.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - GetRegistryNamespaceRequest
   * @returns GetRegistryNamespaceResponse
   */
  async getRegistryNamespace(namespaceName: string, request: $_model.GetRegistryNamespaceRequest): Promise<$_model.GetRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryNamespaceWithOptions(namespaceName, request, headers, runtime);
  }

  /**
   * Queries the details of a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - GetResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTaskWithOptions(exportTaskId: string, request: $_model.GetResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceExportTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceExportTaskResponse({}));
  }

  /**
   * Queries the details of a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - GetResourceExportTaskRequest
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTask(exportTaskId: string, request: $_model.GetResourceExportTaskRequest): Promise<$_model.GetResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Retrieves resource type information.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - GetResourceTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(resourceType: string, request: $_model.GetResourceTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.filterReadOnly)) {
      query["filterReadOnly"] = request.filterReadOnly;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceType",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resourceType/${$dara.URL.percentEncode(resourceType)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypeResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetResourceTypeResponse({}));
  }

  /**
   * Retrieves resource type information.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - GetResourceTypeRequest
   * @returns GetResourceTypeResponse
   */
  async getResourceType(resourceType: string, request: $_model.GetResourceTypeRequest): Promise<$_model.GetResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceTypeWithOptions(resourceType, request, headers, runtime);
  }

  /**
   * Queries a stack.
   * 
   * @param request - GetStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackResponse
   */
  async getStackWithOptions(stackId: string, request: $_model.GetStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStack",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/${$dara.URL.percentEncode(stackId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackResponse>(await this.callApi(params, req, runtime), new $_model.GetStackResponse({}));
  }

  /**
   * Queries a stack.
   * 
   * @param request - GetStackRequest
   * @returns GetStackResponse
   */
  async getStack(stackId: string, request: $_model.GetStackRequest): Promise<$_model.GetStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStackWithOptions(stackId, request, headers, runtime);
  }

  /**
   * Queries the list of deployments for a stack.
   * 
   * @param request - GetStackDeploymentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackDeploymentsResponse
   */
  async getStackDeploymentsWithOptions(stackId: string, request: $_model.GetStackDeploymentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackDeploymentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configVersion)) {
      query["configVersion"] = request.configVersion;
    }

    if (!$dara.isNull(request.deploymentName)) {
      query["deploymentName"] = request.deploymentName;
    }

    if (!$dara.isNull(request.deploymentNo)) {
      query["deploymentNo"] = request.deploymentNo;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackDeployments",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/${$dara.URL.percentEncode(stackId)}/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackDeploymentsResponse>(await this.callApi(params, req, runtime), new $_model.GetStackDeploymentsResponse({}));
  }

  /**
   * Queries the list of deployments for a stack.
   * 
   * @param request - GetStackDeploymentsRequest
   * @returns GetStackDeploymentsResponse
   */
  async getStackDeployments(stackId: string, request: $_model.GetStackDeploymentsRequest): Promise<$_model.GetStackDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStackDeploymentsWithOptions(stackId, request, headers, runtime);
  }

  /**
   * Retrieves the trigger result of a Stack.
   * 
   * @param request - GetStackExecutionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStackExecutionResultResponse
   */
  async getStackExecutionResultWithOptions(triggerId: string, request: $_model.GetStackExecutionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetStackExecutionResultResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStackExecutionResult",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/trigger/${$dara.URL.percentEncode(triggerId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStackExecutionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetStackExecutionResultResponse({}));
  }

  /**
   * Retrieves the trigger result of a Stack.
   * 
   * @param request - GetStackExecutionResultRequest
   * @returns GetStackExecutionResultResponse
   */
  async getStackExecutionResult(triggerId: string, request: $_model.GetStackExecutionResultRequest): Promise<$_model.GetStackExecutionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStackExecutionResultWithOptions(triggerId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a task.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - GetTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(taskId: string, request: $_model.GetTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Retrieves the details of a task.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - GetTaskRequest
   * @returns GetTaskResponse
   */
  async getTask(taskId: string, request: $_model.GetTaskRequest): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, request, headers, runtime);
  }

  /**
   * Retrieves the detection result of a state file.
   * 
   * @remarks
   * This API is used to retrieve the detection results of state files for resource orchestration tasks and stack tasks on the automation service desk.
   * 
   * @param request - GetTerraformStateDetectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTerraformStateDetectionResponse
   */
  async getTerraformStateDetectionWithOptions(detectionId: string, request: $_model.GetTerraformStateDetectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTerraformStateDetectionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTerraformStateDetection",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detect/${$dara.URL.percentEncode(detectionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTerraformStateDetectionResponse>(await this.callApi(params, req, runtime), new $_model.GetTerraformStateDetectionResponse({}));
  }

  /**
   * Retrieves the detection result of a state file.
   * 
   * @remarks
   * This API is used to retrieve the detection results of state files for resource orchestration tasks and stack tasks on the automation service desk.
   * 
   * @param request - GetTerraformStateDetectionRequest
   * @returns GetTerraformStateDetectionResponse
   */
  async getTerraformStateDetection(detectionId: string, request: $_model.GetTerraformStateDetectionRequest): Promise<$_model.GetTerraformStateDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTerraformStateDetectionWithOptions(detectionId, request, headers, runtime);
  }

  /**
   * List drift detection associations
   * 
   * @param request - ListDetectConfigRelationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDetectConfigRelationsResponse
   */
  async listDetectConfigRelationsWithOptions(request: $_model.ListDetectConfigRelationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDetectConfigRelationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detectConfigId)) {
      query["detectConfigId"] = request.detectConfigId;
    }

    if (!$dara.isNull(request.targetId)) {
      query["targetId"] = request.targetId;
    }

    if (!$dara.isNull(request.targetType)) {
      query["targetType"] = request.targetType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDetectConfigRelations",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/operations/relation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDetectConfigRelationsResponse>(await this.callApi(params, req, runtime), new $_model.ListDetectConfigRelationsResponse({}));
  }

  /**
   * List drift detection associations
   * 
   * @param request - ListDetectConfigRelationsRequest
   * @returns ListDetectConfigRelationsResponse
   */
  async listDetectConfigRelations(request: $_model.ListDetectConfigRelationsRequest): Promise<$_model.ListDetectConfigRelationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDetectConfigRelationsWithOptions(request, headers, runtime);
  }

  /**
   * List drift detection configurations
   * 
   * @param request - ListDetectConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDetectConfigsResponse
   */
  async listDetectConfigsWithOptions(request: $_model.ListDetectConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDetectConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detectConfigName)) {
      query["detectConfigName"] = request.detectConfigName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDetectConfigs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDetectConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListDetectConfigsResponse({}));
  }

  /**
   * List drift detection configurations
   * 
   * @param request - ListDetectConfigsRequest
   * @returns ListDetectConfigsResponse
   */
  async listDetectConfigs(request: $_model.ListDetectConfigsRequest): Promise<$_model.ListDetectConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDetectConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of official Terraform Module examples.
   * 
   * @remarks
   * This operation queries the example information of Terraform Modules officially provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If `nextToken` is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModuleExamples operation to the `nextToken` value returned in the previous response. If the `NextToken` parameter is not specified, the first page of data is returned by default.
   * - You can use keyword, namespaceName, moduleName, moduleVersion, and exampleName as conditional filter settings to narrow down the search scope. Multiple filter conditions have a logical `AND` relationship, and only resources that meet all filter conditions are returned.
   *   - keyword: optional. Searches by keyword and supports fuzzy match on exampleName. For example, if keyword is set to ecs, module examples whose names contain ecs are returned.
   *   - namespaceName: optional. Filters module examples by a specific workspace. For example, if namespaceName is set to alibaba, module examples in the alibaba workspace are returned.
   *   - moduleName: optional. Filters module examples by a specific module name. For example, if moduleName is set to ecs, module examples whose module name is ecs are returned.
   *   - moduleVersion: optional. Filters module examples by a specific module version. For example, if moduleVersion is set to 1.0.0, module examples whose module version is 1.0.0 are returned.
   *   - exampleName: optional. Filters module examples by a specific example name. For example, if exampleName is set to ecs, module examples whose example name is ecs are returned.
   * The response contains the request ID, total number of entries, data of the current page, and pagination information, which facilitates processing of query results.
   * 
   * @param request - ListExplorerRegistryModuleExamplesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModuleExamplesResponse
   */
  async listExplorerRegistryModuleExamplesWithOptions(request: $_model.ListExplorerRegistryModuleExamplesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModuleExamplesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exampleName)) {
      query["exampleName"] = request.exampleName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      query["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModuleExamples",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule/example`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModuleExamplesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModuleExamplesResponse({}));
  }

  /**
   * Retrieves the list of official Terraform Module examples.
   * 
   * @remarks
   * This operation queries the example information of Terraform Modules officially provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If `nextToken` is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModuleExamples operation to the `nextToken` value returned in the previous response. If the `NextToken` parameter is not specified, the first page of data is returned by default.
   * - You can use keyword, namespaceName, moduleName, moduleVersion, and exampleName as conditional filter settings to narrow down the search scope. Multiple filter conditions have a logical `AND` relationship, and only resources that meet all filter conditions are returned.
   *   - keyword: optional. Searches by keyword and supports fuzzy match on exampleName. For example, if keyword is set to ecs, module examples whose names contain ecs are returned.
   *   - namespaceName: optional. Filters module examples by a specific workspace. For example, if namespaceName is set to alibaba, module examples in the alibaba workspace are returned.
   *   - moduleName: optional. Filters module examples by a specific module name. For example, if moduleName is set to ecs, module examples whose module name is ecs are returned.
   *   - moduleVersion: optional. Filters module examples by a specific module version. For example, if moduleVersion is set to 1.0.0, module examples whose module version is 1.0.0 are returned.
   *   - exampleName: optional. Filters module examples by a specific example name. For example, if exampleName is set to ecs, module examples whose example name is ecs are returned.
   * The response contains the request ID, total number of entries, data of the current page, and pagination information, which facilitates processing of query results.
   * 
   * @param request - ListExplorerRegistryModuleExamplesRequest
   * @returns ListExplorerRegistryModuleExamplesResponse
   */
  async listExplorerRegistryModuleExamples(request: $_model.ListExplorerRegistryModuleExamplesRequest): Promise<$_model.ListExplorerRegistryModuleExamplesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModuleExamplesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the version information of official Terraform modules provided by Alibaba Cloud.
   * 
   * @remarks
   * This operation queries the version information of official Terraform modules provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If `nextToken` is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModules operation to the `nextToken` value returned in the previous response. If the `NextToken` parameter is not specified, the first page of data is returned by default.
   * - You can use keyword, namespaceName, moduleName, and moduleVersion as conditional filter Settings to narrow the search scope. Multiple filter conditions have a logical `AND` relationship. Only resources that meet all filter conditions are returned.
   *   - keyword: optional. Performs a fuzzy match on the module name. For example, if keyword is set to ecs, modules whose names contain ecs are returned.
   *   - namespaceName: optional. Filters modules by a specific workspace. For example, if namespaceName is set to alibaba, modules whose workspace is alibaba are returned. When moduleName is specified, namespaceName must also be specified. You can call the ListExplorerRegistryModule operation to obtain the namespaceName information.
   *   - moduleName: optional. Filters modules by a specific name. For example, if moduleName is set to ecs, modules whose name is ecs are returned.
   *   - moduleVersion: optional. Filters modules by a specific version. For example, if moduleVersion is set to 1.0.0, modules whose version is 1.0.0 are returned.
   * The response contains the request ID, total number of entries, data on the current page, and pagination information, which facilitates the processing of query results.
   * 
   * @param request - ListExplorerRegistryModuleVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModuleVersionsResponse
   */
  async listExplorerRegistryModuleVersionsWithOptions(request: $_model.ListExplorerRegistryModuleVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModuleVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      query["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModuleVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule/version`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModuleVersionsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModuleVersionsResponse({}));
  }

  /**
   * Lists the version information of official Terraform modules provided by Alibaba Cloud.
   * 
   * @remarks
   * This operation queries the version information of official Terraform modules provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If `nextToken` is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModules operation to the `nextToken` value returned in the previous response. If the `NextToken` parameter is not specified, the first page of data is returned by default.
   * - You can use keyword, namespaceName, moduleName, and moduleVersion as conditional filter Settings to narrow the search scope. Multiple filter conditions have a logical `AND` relationship. Only resources that meet all filter conditions are returned.
   *   - keyword: optional. Performs a fuzzy match on the module name. For example, if keyword is set to ecs, modules whose names contain ecs are returned.
   *   - namespaceName: optional. Filters modules by a specific workspace. For example, if namespaceName is set to alibaba, modules whose workspace is alibaba are returned. When moduleName is specified, namespaceName must also be specified. You can call the ListExplorerRegistryModule operation to obtain the namespaceName information.
   *   - moduleName: optional. Filters modules by a specific name. For example, if moduleName is set to ecs, modules whose name is ecs are returned.
   *   - moduleVersion: optional. Filters modules by a specific version. For example, if moduleVersion is set to 1.0.0, modules whose version is 1.0.0 are returned.
   * The response contains the request ID, total number of entries, data on the current page, and pagination information, which facilitates the processing of query results.
   * 
   * @param request - ListExplorerRegistryModuleVersionsRequest
   * @returns ListExplorerRegistryModuleVersionsResponse
   */
  async listExplorerRegistryModuleVersions(request: $_model.ListExplorerRegistryModuleVersionsRequest): Promise<$_model.ListExplorerRegistryModuleVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModuleVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Lists information about official Terraform modules provided by Alibaba Cloud.
   * 
   * @remarks
   * This operation queries information about official Terraform modules provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If the `nextToken` parameter is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModules operation to the `nextToken` value returned in the previous response. If you do not specify the `NextToken` parameter, the first page of data is returned by default.
   * - You can use keyword and moduleName as filter conditions to narrow the search scope. Multiple filter conditions are evaluated by using a logical `AND`. Only resources that meet all filter conditions are returned.
   *   - keyword: optional. Searches by keyword through fuzzy matching against ModuleName. For example, if keyword is set to ecs, modules whose names contain ecs are returned.
   *   - moduleName: optional. Filters modules by a specific name. For example, if moduleName is set to ecs, only the module whose name is exactly ecs is returned.
   * The response contains the request ID, total number of entries, data of the current page, and pagination information, which facilitates the processing of query results.
   * 
   * @param request - ListExplorerRegistryModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModulesResponse
   */
  async listExplorerRegistryModulesWithOptions(request: $_model.ListExplorerRegistryModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModulesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModulesResponse({}));
  }

  /**
   * Lists information about official Terraform modules provided by Alibaba Cloud.
   * 
   * @remarks
   * This operation queries information about official Terraform modules provided by Alibaba Cloud.
   * You can use the `maxResults` parameter to adjust the maximum number of entries to return.
   * - If the `nextToken` parameter is not included in the response, no more data is available. Otherwise, more data is available. To query the next page, set the `nextToken` parameter of the ListExplorerRegistryModules operation to the `nextToken` value returned in the previous response. If you do not specify the `NextToken` parameter, the first page of data is returned by default.
   * - You can use keyword and moduleName as filter conditions to narrow the search scope. Multiple filter conditions are evaluated by using a logical `AND`. Only resources that meet all filter conditions are returned.
   *   - keyword: optional. Searches by keyword through fuzzy matching against ModuleName. For example, if keyword is set to ecs, modules whose names contain ecs are returned.
   *   - moduleName: optional. Filters modules by a specific name. For example, if moduleName is set to ecs, only the module whose name is exactly ecs is returned.
   * The response contains the request ID, total number of entries, data of the current page, and pagination information, which facilitates the processing of query results.
   * 
   * @param request - ListExplorerRegistryModulesRequest
   * @returns ListExplorerRegistryModulesResponse
   */
  async listExplorerRegistryModules(request: $_model.ListExplorerRegistryModulesRequest): Promise<$_model.ListExplorerRegistryModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModulesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of groups.
   * 
   * @param tmpReq - ListGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupResponse
   */
  async listGroupWithOptions(tmpReq: $_model.ListGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ListGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupResponse({}));
  }

  /**
   * Queries the list of groups.
   * 
   * @param request - ListGroupRequest
   * @returns ListGroupResponse
   */
  async listGroup(request: $_model.ListGroupRequest): Promise<$_model.ListGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of jobs.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(taskId: string, request: $_model.ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["jobType"] = request.jobType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Queries a list of jobs.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(taskId: string, request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(taskId, request, headers, runtime);
  }

  /**
   * Retrieves a list of template versions.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModuleVersionResponse
   */
  async listModuleVersionWithOptions(moduleId: string, request: $_model.ListModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModuleVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.ListModuleVersionResponse({}));
  }

  /**
   * Retrieves a list of template versions.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListModuleVersionRequest
   * @returns ListModuleVersionResponse
   */
  async listModuleVersion(moduleId: string, request: $_model.ListModuleVersionRequest): Promise<$_model.ListModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * Retrieves the list of templates under the current user, with support for pagination and conditional filtering.
   * 
   * @remarks
   * ## Operation description
   * This operation lists all Terraform templates under the current user. You can specify query parameters to implement pagination, fuzzy match template names, filter templates by source or status, and more. You can also filter templates by tags for more granular results.
   * ### Precautions
   * - The pagination parameters `pageNumber` and `pageSize` help control the number of returned results.
   * - Use the `name` parameter to perform a fuzzy match search on template names.
   * - Use the `source` parameter to filter templates by source (such as OSS import or file upload).
   * - Use the `status` parameter to filter templates by status (such as created or published).
   * - Tag filtering requires a JSON-formatted string, for example, `[{"key":"env","value":"prod"}]`.
   * 
   * @param tmpReq - ListModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModulesResponse
   */
  async listModulesWithOptions(tmpReq: $_model.ListModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListModulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModulesResponse>(await this.callApi(params, req, runtime), new $_model.ListModulesResponse({}));
  }

  /**
   * Retrieves the list of templates under the current user, with support for pagination and conditional filtering.
   * 
   * @remarks
   * ## Operation description
   * This operation lists all Terraform templates under the current user. You can specify query parameters to implement pagination, fuzzy match template names, filter templates by source or status, and more. You can also filter templates by tags for more granular results.
   * ### Precautions
   * - The pagination parameters `pageNumber` and `pageSize` help control the number of returned results.
   * - Use the `name` parameter to perform a fuzzy match search on template names.
   * - Use the `source` parameter to filter templates by source (such as OSS import or file upload).
   * - Use the `status` parameter to filter templates by status (such as created or published).
   * - Tag filtering requires a JSON-formatted string, for example, `[{"key":"env","value":"prod"}]`.
   * 
   * @param request - ListModulesRequest
   * @returns ListModulesResponse
   */
  async listModules(request: $_model.ListModulesRequest): Promise<$_model.ListModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModulesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the parameter sets associated with a resource.
   * 
   * @param request - ListParameterSetRelationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterSetRelationResponse
   */
  async listParameterSetRelationWithOptions(request: $_model.ListParameterSetRelationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListParameterSetRelationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameterSetRelation",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/relation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListParameterSetRelationResponse>(await this.callApi(params, req, runtime), new $_model.ListParameterSetRelationResponse({}));
  }

  /**
   * Lists the parameter sets associated with a resource.
   * 
   * @param request - ListParameterSetRelationRequest
   * @returns ListParameterSetRelationResponse
   */
  async listParameterSetRelation(request: $_model.ListParameterSetRelationRequest): Promise<$_model.ListParameterSetRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetRelationWithOptions(request, headers, runtime);
  }

  /**
   * Queries and retrieves a paginated list of parameter sets with keyword search support.
   * 
   * @remarks
   * ## Operation description
   * This operation queries all parameter sets in the system and supports filtering by keyword and paginated results. Authentication information is required in the request.
   * ### Notes
   * - The `keyword` parameter can be used to fuzzy match parameter sets by name or description.
   * - Pagination is controlled by `pageNumber` and `pageSize`. By default, results start from the first page. The page size is customizable but should be set to a reasonable value to avoid performance issues.
   * 
   * @param request - ListParameterSetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterSetsResponse
   */
  async listParameterSetsWithOptions(request: $_model.ListParameterSetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListParameterSetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["kmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameterSets",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListParameterSetsResponse>(await this.callApi(params, req, runtime), new $_model.ListParameterSetsResponse({}));
  }

  /**
   * Queries and retrieves a paginated list of parameter sets with keyword search support.
   * 
   * @remarks
   * ## Operation description
   * This operation queries all parameter sets in the system and supports filtering by keyword and paginated results. Authentication information is required in the request.
   * ### Notes
   * - The `keyword` parameter can be used to fuzzy match parameter sets by name or description.
   * - Pagination is controlled by `pageNumber` and `pageSize`. By default, results start from the first page. The page size is customizable but should be set to a reasonable value to avoid performance issues.
   * 
   * @param request - ListParameterSetsRequest
   * @returns ListParameterSetsResponse
   */
  async listParameterSets(request: $_model.ListParameterSetsRequest): Promise<$_model.ListParameterSetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of all products.
   * 
   * @remarks
   * ## Operation description
   * - **Keyword search**: Use the `keyword` parameter for fuzzy matching.
   * - **Paged query**: Use `nextToken` for pagination and `maxResults` to specify the maximum number of results per page (default: 100, maximum: 200).
   * - **Terraform Provider version**: The optional `terraformProviderVersion` parameter filters products associated with a specific Provider version.
   * - **Response structure**: The response contains the request ID, total number of entries, data of the current page, and pagination information for easy processing of query results.
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.supportTerraformer)) {
      query["supportTerraformer"] = request.supportTerraformer;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/products`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * Queries the list of all products.
   * 
   * @remarks
   * ## Operation description
   * - **Keyword search**: Use the `keyword` parameter for fuzzy matching.
   * - **Paged query**: Use `nextToken` for pagination and `maxResults` to specify the maximum number of results per page (default: 100, maximum: 200).
   * - **Terraform Provider version**: The optional `terraformProviderVersion` parameter filters products associated with a specific Provider version.
   * - **Response structure**: The response contains the request ID, total number of entries, data of the current page, and pagination information for easy processing of query results.
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of projects.
   * 
   * @param tmpReq - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(tmpReq: $_model.ListProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectResponse({}));
  }

  /**
   * Queries the list of projects.
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of Registry template versions.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryModuleVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryModuleVersionsResponse
   */
  async listRegistryModuleVersionsWithOptions(request: $_model.ListRegistryModuleVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryModuleVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistryModuleVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryModuleVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryModuleVersionsResponse({}));
  }

  /**
   * Queries the list of Registry template versions.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryModuleVersionsRequest
   * @returns ListRegistryModuleVersionsResponse
   */
  async listRegistryModuleVersions(request: $_model.ListRegistryModuleVersionsRequest): Promise<$_model.ListRegistryModuleVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryModuleVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of Registry modules.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryModulesResponse
   */
  async listRegistryModulesWithOptions(request: $_model.ListRegistryModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryModulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistryModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryModulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryModulesResponse({}));
  }

  /**
   * Queries the list of Registry modules.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryModulesRequest
   * @returns ListRegistryModulesResponse
   */
  async listRegistryModules(request: $_model.ListRegistryModulesRequest): Promise<$_model.ListRegistryModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryModulesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of workspaces.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryNamespacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryNamespacesResponse
   */
  async listRegistryNamespacesWithOptions(request: $_model.ListRegistryNamespacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryNamespacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistryNamespaces",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryNamespacesResponse({}));
  }

  /**
   * Queries the list of workspaces.
   * 
   * @remarks
   * Single-user call frequency: 200 calls per second.
   * 
   * @param request - ListRegistryNamespacesRequest
   * @returns ListRegistryNamespacesResponse
   */
  async listRegistryNamespaces(request: $_model.ListRegistryNamespacesRequest): Promise<$_model.ListRegistryNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryNamespacesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of versions for a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersionsWithOptions(exportTaskId: string, request: $_model.ListResourceExportTaskVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceExportTaskVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExportTaskVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}/exportVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceExportTaskVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceExportTaskVersionsResponse({}));
  }

  /**
   * Retrieves the list of versions for a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersions(exportTaskId: string, request: $_model.ListResourceExportTaskVersionsRequest): Promise<$_model.ListResourceExportTaskVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTaskVersionsWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Queries the list of resource export tasks.
   * 
   * @remarks
   * Rate limit per user: 100 calls per second.
   * 
   * @param request - ListResourceExportTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasksWithOptions(request: $_model.ListResourceExportTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceExportTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportTaskId)) {
      query["exportTaskId"] = request.exportTaskId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExportTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceExportTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceExportTasksResponse({}));
  }

  /**
   * Queries the list of resource export tasks.
   * 
   * @remarks
   * Rate limit per user: 100 calls per second.
   * 
   * @param request - ListResourceExportTasksRequest
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasks(request: $_model.ListResourceExportTasksRequest): Promise<$_model.ListResourceExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTasksWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of resource types by filter conditions with pagination support.
   * 
   * @remarks
   * ## Operation description
   * This API allows you to perform a conditional query for a list of resource types based on conditions such as product code, Terraform Provider version, child class, status, and keyword. The results contain detailed information about resources, including product code, status, status effective version, child class, Terraform Provider version, and resource type code. Paging is supported for handling large amounts of data.
   * 
   * @param tmpReq - ListResourceTypesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(tmpReq: $_model.ListResourceTypesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypesResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.terraformResourceTypes)) {
      request.terraformResourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.terraformResourceTypes, "terraformResourceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.subcategory)) {
      query["subcategory"] = request.subcategory;
    }

    if (!$dara.isNull(request.supportTerraformer)) {
      query["supportTerraformer"] = request.supportTerraformer;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformResourceTypesShrink)) {
      query["terraformResourceTypes"] = request.terraformResourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypes",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resourceTypes`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListResourceTypesResponse({}));
  }

  /**
   * Queries a list of resource types by filter conditions with pagination support.
   * 
   * @remarks
   * ## Operation description
   * This API allows you to perform a conditional query for a list of resource types based on conditions such as product code, Terraform Provider version, child class, status, and keyword. The results contain detailed information about resources, including product code, status, status effective version, child class, Terraform Provider version, and resource type code. Paging is supported for handling large amounts of data.
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: $_model.ListResourceTypesRequest): Promise<$_model.ListResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceTypesWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the resources of a node.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.sourceValue)) {
      query["sourceValue"] = request.sourceValue;
    }

    if (!$dara.isNull(request.specType)) {
      query["specType"] = request.specType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resources/stateparser`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * Retrieves the resources of a node.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: $_model.ListResourcesRequest): Promise<$_model.ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of stack configurations.
   * 
   * @param request - ListStackConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStackConfigsResponse
   */
  async listStackConfigsWithOptions(stackId: string, request: $_model.ListStackConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStackConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStackConfigs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/${$dara.URL.percentEncode(stackId)}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStackConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListStackConfigsResponse({}));
  }

  /**
   * Queries the list of stack configurations.
   * 
   * @param request - ListStackConfigsRequest
   * @returns ListStackConfigsResponse
   */
  async listStackConfigs(stackId: string, request: $_model.ListStackConfigsRequest): Promise<$_model.ListStackConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStackConfigsWithOptions(stackId, request, headers, runtime);
  }

  /**
   * Queries the list of stacks.
   * 
   * @param request - ListStacksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStacksResponse
   */
  async listStacksWithOptions(request: $_model.ListStacksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStacksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["kmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStacks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStacksResponse>(await this.callApi(params, req, runtime), new $_model.ListStacksResponse({}));
  }

  /**
   * Queries the list of stacks.
   * 
   * @param request - ListStacksRequest
   * @returns ListStacksResponse
   */
  async listStacks(request: $_model.ListStacksRequest): Promise<$_model.ListStacksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStacksWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of tasks.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      query["kmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * Retrieves a list of tasks.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the list of Terraform provider versions.
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersionsWithOptions(request: $_model.ListTerraformProviderVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerraformProviderVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.usage)) {
      query["usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerraformProviderVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/version/terraform/provider`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerraformProviderVersionsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListTerraformProviderVersionsResponse({}));
  }

  /**
   * Retrieves the list of Terraform provider versions.
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersions(request: $_model.ListTerraformProviderVersionsRequest): Promise<$_model.ListTerraformProviderVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTerraformProviderVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Supports resource import and removal for state files.
   * 
   * @remarks
   * This API is used to manage state files for resource orchestration tasks and stack tasks on the automated service desk.
   * Before using this API, make sure that all required authentication information is correctly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ManageTerraformStateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageTerraformStateResponse
   */
  async manageTerraformStateWithOptions(request: $_model.ManageTerraformStateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ManageTerraformStateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.identifier)) {
      body["identifier"] = request.identifier;
    }

    if (!$dara.isNull(request.importResourceId)) {
      body["importResourceId"] = request.importResourceId;
    }

    if (!$dara.isNull(request.resourceIdentifier)) {
      body["resourceIdentifier"] = request.resourceIdentifier;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageTerraformState",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/manage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManageTerraformStateResponse>(await this.callApi(params, req, runtime), new $_model.ManageTerraformStateResponse({}));
  }

  /**
   * Supports resource import and removal for state files.
   * 
   * @remarks
   * This API is used to manage state files for resource orchestration tasks and stack tasks on the automated service desk.
   * Before using this API, make sure that all required authentication information is correctly configured and that the Terraform code meets the expected functional requirements.
   * 
   * @param request - ManageTerraformStateRequest
   * @returns ManageTerraformStateResponse
   */
  async manageTerraformState(request: $_model.ManageTerraformStateRequest): Promise<$_model.ManageTerraformStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.manageTerraformStateWithOptions(request, headers, runtime);
  }

  /**
   * After a job is created, you can perform the **Cancel** operation to stop the job while it is running.
   * After a job reaches the pending confirmation state, you can perform the **Abolish** operation to stop the job, or perform the **Execute** operation to continue the job execution.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - OperateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateJobResponse
   */
  async operateJobWithOptions(taskId: string, jobId: string, operationType: string, request: $_model.OperateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OperateJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      query["comment"] = request.comment;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}/operation/${$dara.URL.percentEncode(operationType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateJobResponse>(await this.callApi(params, req, runtime), new $_model.OperateJobResponse({}));
  }

  /**
   * After a job is created, you can perform the **Cancel** operation to stop the job while it is running.
   * After a job reaches the pending confirmation state, you can perform the **Abolish** operation to stop the job, or perform the **Execute** operation to continue the job execution.
   * 
   * @remarks
   * Per-user call frequency: 100 calls per second.
   * 
   * @param request - OperateJobRequest
   * @returns OperateJobResponse
   */
  async operateJob(taskId: string, jobId: string, operationType: string, request: $_model.OperateJobRequest): Promise<$_model.OperateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateJobWithOptions(taskId, jobId, operationType, request, headers, runtime);
  }

  /**
   * Publishes a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - PublishRegistryModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRegistryModuleVersionResponse
   */
  async publishRegistryModuleVersionWithOptions(request: $_model.PublishRegistryModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRegistryModuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishRegistryModuleVersionResponse({}));
  }

  /**
   * Publishes a Registry template version.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - PublishRegistryModuleVersionRequest
   * @returns PublishRegistryModuleVersionResponse
   */
  async publishRegistryModuleVersion(request: $_model.PublishRegistryModuleVersionRequest): Promise<$_model.PublishRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRegistryModuleVersionWithOptions(request, headers, runtime);
  }

  /**
   * Removes a shared account.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param tmpReq - RemoveSharedAccountsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSharedAccountsResponse
   */
  async removeSharedAccountsWithOptions(tmpReq: $_model.RemoveSharedAccountsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSharedAccountsResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveSharedAccountsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "accountIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["accountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSharedAccounts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/sharedAccounts`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSharedAccountsResponse({}));
  }

  /**
   * Removes a shared account.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - RemoveSharedAccountsRequest
   * @returns RemoveSharedAccountsResponse
   */
  async removeSharedAccounts(request: $_model.RemoveSharedAccountsRequest): Promise<$_model.RemoveSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSharedAccountsWithOptions(request, headers, runtime);
  }

  /**
   * Sets the encryption configuration.
   * 
   * @param request - SetEncryptionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetEncryptionConfigResponse
   */
  async setEncryptionConfigWithOptions(request: $_model.SetEncryptionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SetEncryptionConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.kmsKeyId)) {
      body["kmsKeyId"] = request.kmsKeyId;
    }

    if (!$dara.isNull(request.kmsRegionId)) {
      body["kmsRegionId"] = request.kmsRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetEncryptionConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/encryption/config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetEncryptionConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetEncryptionConfigResponse({}));
  }

  /**
   * Sets the encryption configuration.
   * 
   * @param request - SetEncryptionConfigRequest
   * @returns SetEncryptionConfigResponse
   */
  async setEncryptionConfig(request: $_model.SetEncryptionConfigRequest): Promise<$_model.SetEncryptionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setEncryptionConfigWithOptions(request, headers, runtime);
  }

  /**
   * Triggers the execution of a stack.
   * 
   * @param request - TriggerStackExecutionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerStackExecutionResponse
   */
  async triggerStackExecutionWithOptions(request: $_model.TriggerStackExecutionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerStackExecutionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["action"] = request.action;
    }

    if (!$dara.isNull(request.changedFolders)) {
      body["changedFolders"] = request.changedFolders;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.codePackagePath)) {
      body["codePackagePath"] = request.codePackagePath;
    }

    if (!$dara.isNull(request.codeVersionId)) {
      body["codeVersionId"] = request.codeVersionId;
    }

    if (!$dara.isNull(request.sourceTriggerId)) {
      body["sourceTriggerId"] = request.sourceTriggerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerStackExecution",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/trigger`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerStackExecutionResponse>(await this.callApi(params, req, runtime), new $_model.TriggerStackExecutionResponse({}));
  }

  /**
   * Triggers the execution of a stack.
   * 
   * @param request - TriggerStackExecutionRequest
   * @returns TriggerStackExecutionResponse
   */
  async triggerStackExecution(request: $_model.TriggerStackExecutionRequest): Promise<$_model.TriggerStackExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerStackExecutionWithOptions(request, headers, runtime);
  }

  /**
   * Updates the drift detection configuration information for the specified ID.
   * 
   * @remarks
   * ## Request Description  
   * - `detectConfigId` is a required parameter used to identify the specific detection configuration to update.  
   * - When `triggerType` is set to `Cron`, a valid `cronExpression` must be provided.  
   * - Each element in the `alarmConfigs` list must include an alert type (`type`) and an address (`address`).  
   * - If you do not want to change certain properties (such as `name`, `description`, etc.), you can omit these fields from the request body.
   * 
   * @param request - UpdateDetectConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDetectConfigResponse
   */
  async updateDetectConfigWithOptions(detectConfigId: string, request: $_model.UpdateDetectConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDetectConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmConfigs)) {
      body["alarmConfigs"] = request.alarmConfigs;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cronExpression)) {
      body["cronExpression"] = request.cronExpression;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.detectConfigName)) {
      body["detectConfigName"] = request.detectConfigName;
    }

    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.triggerType)) {
      body["triggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDetectConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraformState/detectConfig/${$dara.URL.percentEncode(detectConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDetectConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDetectConfigResponse({}));
  }

  /**
   * Updates the drift detection configuration information for the specified ID.
   * 
   * @remarks
   * ## Request Description  
   * - `detectConfigId` is a required parameter used to identify the specific detection configuration to update.  
   * - When `triggerType` is set to `Cron`, a valid `cronExpression` must be provided.  
   * - Each element in the `alarmConfigs` list must include an alert type (`type`) and an address (`address`).  
   * - If you do not want to change certain properties (such as `name`, `description`, etc.), you can omit these fields from the request body.
   * 
   * @param request - UpdateDetectConfigRequest
   * @returns UpdateDetectConfigResponse
   */
  async updateDetectConfig(detectConfigId: string, request: $_model.UpdateDetectConfigRequest): Promise<$_model.UpdateDetectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDetectConfigWithOptions(detectConfigId, request, headers, runtime);
  }

  /**
   * Updates an Explorer template.
   * 
   * @remarks
   * Updates an Explorer template.
   * 
   * @param request - UpdateExplorerModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExplorerModuleAttributeResponse
   */
  async updateExplorerModuleAttributeWithOptions(explorerModuleId: string, request: $_model.UpdateExplorerModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExplorerModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExplorerModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerModule/${$dara.URL.percentEncode(explorerModuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExplorerModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExplorerModuleAttributeResponse({}));
  }

  /**
   * Updates an Explorer template.
   * 
   * @remarks
   * Updates an Explorer template.
   * 
   * @param request - UpdateExplorerModuleAttributeRequest
   * @returns UpdateExplorerModuleAttributeResponse
   */
  async updateExplorerModuleAttribute(explorerModuleId: string, request: $_model.UpdateExplorerModuleAttributeRequest): Promise<$_model.UpdateExplorerModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExplorerModuleAttributeWithOptions(explorerModuleId, request, headers, runtime);
  }

  /**
   * Modifies a group.
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(groupId: string, request: $_model.UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * Modifies a group.
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(groupId: string, request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * Updates the name, description, tags, and other information of a specified template.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the basic attributes of an existing template, including but not limited to the template name, description, and tags.
   * - The update operation does not affect the content or version information of the template.
   * - To enable or disable deletion protection, use the deletionProtection parameter.
   * - Use clientToken to ensure the idempotence of the request and avoid duplicate submissions caused by network issues.
   * 
   * @param request - UpdateModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttributeWithOptions(moduleId: string, request: $_model.UpdateModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModuleAttributeResponse({}));
  }

  /**
   * Updates the name, description, tags, and other information of a specified template.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the basic attributes of an existing template, including but not limited to the template name, description, and tags.
   * - The update operation does not affect the content or version information of the template.
   * - To enable or disable deletion protection, use the deletionProtection parameter.
   * - Use clientToken to ensure the idempotence of the request and avoid duplicate submissions caused by network issues.
   * 
   * @param request - UpdateModuleAttributeRequest
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttribute(moduleId: string, request: $_model.UpdateModuleAttributeRequest): Promise<$_model.UpdateModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModuleAttributeWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * Updates the attributes of a specified parameter set, such as the name and description.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the basic information of an existing parameter set, including the name and description.
   * - If the request includes the `parameters` field, the parameter list in the parameter set is updated.
   * - The `clientToken` field can be used to ensure the idempotence of the request.
   * - The update operation requires a valid `parameterSetId` as a path parameter.
   * - The request must include authentication information to pass identity verification.
   * 
   * @param request - UpdateParameterSetAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParameterSetAttributeResponse
   */
  async updateParameterSetAttributeWithOptions(parameterSetId: string, request: $_model.UpdateParameterSetAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateParameterSetAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateParameterSetAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${$dara.URL.percentEncode(parameterSetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateParameterSetAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateParameterSetAttributeResponse({}));
  }

  /**
   * Updates the attributes of a specified parameter set, such as the name and description.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to modify the basic information of an existing parameter set, including the name and description.
   * - If the request includes the `parameters` field, the parameter list in the parameter set is updated.
   * - The `clientToken` field can be used to ensure the idempotence of the request.
   * - The update operation requires a valid `parameterSetId` as a path parameter.
   * - The request must include authentication information to pass identity verification.
   * 
   * @param request - UpdateParameterSetAttributeRequest
   * @returns UpdateParameterSetAttributeResponse
   */
  async updateParameterSetAttribute(parameterSetId: string, request: $_model.UpdateParameterSetAttributeRequest): Promise<$_model.UpdateParameterSetAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParameterSetAttributeWithOptions(parameterSetId, request, headers, runtime);
  }

  /**
   * Updates project information.
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(projectId: string, request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * Updates project information.
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(projectId: string, request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * Updates a Registry template.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateRegistryModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistryModuleAttributeResponse
   */
  async updateRegistryModuleAttributeWithOptions(namespaceName: string, moduleName: string, request: $_model.UpdateRegistryModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRegistryModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistryModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRegistryModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRegistryModuleAttributeResponse({}));
  }

  /**
   * Updates a Registry template.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateRegistryModuleAttributeRequest
   * @returns UpdateRegistryModuleAttributeResponse
   */
  async updateRegistryModuleAttribute(namespaceName: string, moduleName: string, request: $_model.UpdateRegistryModuleAttributeRequest): Promise<$_model.UpdateRegistryModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRegistryModuleAttributeWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * Modifies a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateRegistryNamespaceAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistryNamespaceAttributeResponse
   */
  async updateRegistryNamespaceAttributeWithOptions(namespaceName: string, request: $_model.UpdateRegistryNamespaceAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRegistryNamespaceAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistryNamespaceAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRegistryNamespaceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRegistryNamespaceAttributeResponse({}));
  }

  /**
   * Modifies a workspace.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateRegistryNamespaceAttributeRequest
   * @returns UpdateRegistryNamespaceAttributeResponse
   */
  async updateRegistryNamespaceAttribute(namespaceName: string, request: $_model.UpdateRegistryNamespaceAttributeRequest): Promise<$_model.UpdateRegistryNamespaceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRegistryNamespaceAttributeWithOptions(namespaceName, request, headers, runtime);
  }

  /**
   * Modifies a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttributeWithOptions(exportTaskId: string, request: $_model.UpdateResourceExportTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceExportTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceExportTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceExportTaskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceExportTaskAttributeResponse({}));
  }

  /**
   * Modifies a resource export task.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttribute(exportTaskId: string, request: $_model.UpdateResourceExportTaskAttributeRequest): Promise<$_model.UpdateResourceExportTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceExportTaskAttributeWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * Modifies a stack. When the configuration changes, a stack deployment is triggered.
   * 
   * @param request - UpdateStackRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStackResponse
   */
  async updateStackWithOptions(stackId: string, request: $_model.UpdateStackRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.workingDirectory)) {
      body["workingDirectory"] = request.workingDirectory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStack",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/stacks/${$dara.URL.percentEncode(stackId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStackResponse({}));
  }

  /**
   * Modifies a stack. When the configuration changes, a stack deployment is triggered.
   * 
   * @param request - UpdateStackRequest
   * @returns UpdateStackResponse
   */
  async updateStack(stackId: string, request: $_model.UpdateStackRequest): Promise<$_model.UpdateStackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateStackWithOptions(stackId, request, headers, runtime);
  }

  /**
   * Updates the attributes of a node.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttributeWithOptions(taskId: string, request: $_model.UpdateTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.skipRegionValidation)) {
      body["skipRegionValidation"] = request.skipRegionValidation;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskAttributeResponse({}));
  }

  /**
   * Updates the attributes of a node.
   * 
   * @remarks
   * Single-user call frequency: 100 calls per second.
   * 
   * @param request - UpdateTaskAttributeRequest
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttribute(taskId: string, request: $_model.UpdateTaskAttributeRequest): Promise<$_model.UpdateTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskAttributeWithOptions(taskId, request, headers, runtime);
  }

  /**
   * Uploads a template.
   * 
   * @param request - UploadModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadModuleResponse
   */
  async uploadModuleWithOptions(resourceType: string, request: $_model.UploadModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadModuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.url)) {
      query["url"] = request.url;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/upload/${$dara.URL.percentEncode(resourceType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UploadModuleResponse>(await this.callApi(params, req, runtime), new $_model.UploadModuleResponse({}));
  }

  /**
   * Uploads a template.
   * 
   * @param request - UploadModuleRequest
   * @returns UploadModuleResponse
   */
  async uploadModule(resourceType: string, request: $_model.UploadModuleRequest): Promise<$_model.UploadModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadModuleWithOptions(resourceType, request, headers, runtime);
  }

  async uploadModuleAdvance(resourceType: string, request: $_model.UploadModuleAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UploadModuleResponse> {
    // Step 0: init client
    if ($dara.isNull(this._credential)) {
      throw new $OpenApi.ClientError({
        code: "InvalidCredentials",
        message: "Please set up the credentials correctly. If you are setting them through environment variables, please ensure that ALIBABA_CLOUD_ACCESS_KEY_ID and ALIBABA_CLOUD_ACCESS_KEY_SECRET are set correctly. See https://help.aliyun.com/zh/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems for more details.",
      });
    }

    let credentialModel = await this._credential.getCredential();
    let accessKeyId = credentialModel.accessKeyId;
    let accessKeySecret = credentialModel.accessKeySecret;
    let securityToken = credentialModel.securityToken;
    let credentialType = credentialModel.type;
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint) || openPlatformEndpoint == "") {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenApi(authConfig);
    let authRequest = {
      Product: "IaCService",
      RegionId: this._regionId,
    };
    let authReq = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(authRequest),
    });
    let authParams = new $OpenApiUtil.Params({
      action: "AuthorizeFileUpload",
      version: "2019-12-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let authResponse : {[key: string]: any} = { };
    let fileObj = new $dara.FileField({ });
    let ossHeader : {[key: string]: any} = { };
    let tmpBody : {[key: string]: any} = { };
    let useAccelerate : boolean = false;
    let authResponseBody : {[key: string ]: string} = { };
    let uploadModuleReq = new $_model.UploadModuleRequest({ });
    OpenApiUtil.convert(request, uploadModuleReq);
    if (!$dara.isNull(request.urlObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.urlObject,
        contentType: "",
      });
      ossHeader = {
        host: OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType),
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader, runtime);
      uploadModuleReq.url = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let uploadModuleResp = await this.uploadModuleWithOptions(resourceType, uploadModuleReq, headers, runtime);
    return uploadModuleResp;
  }

  /**
   * Performs a dry run on a template.
   * 
   * @remarks
   * Performs a dry run on the content of a Terraform configuration file.
   * 
   * @param request - ValidateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateModuleResponse
   */
  async *validateModuleWithSSE(request: $_model.ValidateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ValidateModuleResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.codeMap)) {
      body["codeMap"] = request.codeMap;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/module/validation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.ValidateModuleResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.ValidateModuleResponse({}));
      }

    }
  }

  /**
   * Performs a dry run on a template.
   * 
   * @remarks
   * Performs a dry run on the content of a Terraform configuration file.
   * 
   * @param request - ValidateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateModuleResponse
   */
  async validateModuleWithOptions(request: $_model.ValidateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.codeMap)) {
      body["codeMap"] = request.codeMap;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/module/validation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateModuleResponse>(await this.callApi(params, req, runtime), new $_model.ValidateModuleResponse({}));
  }

  /**
   * Performs a dry run on a template.
   * 
   * @remarks
   * Performs a dry run on the content of a Terraform configuration file.
   * 
   * @param request - ValidateModuleRequest
   * @returns ValidateModuleResponse
   */
  async validateModule(request: $_model.ValidateModuleRequest): Promise<$_model.ValidateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateModuleWithOptions(request, headers, runtime);
  }

}
