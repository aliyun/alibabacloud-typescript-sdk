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
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }

  async _postOSSObject(bucketName: string, form: {[key: string]: any}): Promise<{[key: string]: any}> {
    let request_ = new $dara.Request();
    let boundary = $dara.Form.getBoundary();
    request_.protocol = "HTTPS";
    request_.method = "POST";
    request_.pathname = `/`;
    request_.headers = {
      host: String(form["host"]),
      date: OpenApiUtil.getDateUTCString(),
      'user-agent': OpenApiUtil.getUserAgent(""),
    };
    request_.headers["content-type"] = `multipart/form-data; boundary=${boundary}`;
    request_.body = $dara.Form.toFileForm(form, boundary);
    let response_ = await $dara.doAction(request_);

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
   * Unpublishes a DataService Studio API.
   * 
   * @param request - AbolishDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishDataServiceApiResponse
   */
  async abolishDataServiceApiWithOptions(request: $_model.AbolishDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AbolishDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AbolishDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AbolishDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.AbolishDataServiceApiResponse({}));
  }

  /**
   * Unpublishes a DataService Studio API.
   * 
   * @param request - AbolishDataServiceApiRequest
   * @returns AbolishDataServiceApiResponse
   */
  async abolishDataServiceApi(request: $_model.AbolishDataServiceApiRequest): Promise<$_model.AbolishDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.abolishDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Adds an entity to a collection.
   * 
   * @param request - AddMetaCollectionEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMetaCollectionEntityResponse
   */
  async addMetaCollectionEntityWithOptions(request: $_model.AddMetaCollectionEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddMetaCollectionEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collectionQualifiedName)) {
      query["CollectionQualifiedName"] = request.collectionQualifiedName;
    }

    if (!$dara.isNull(request.entityQualifiedName)) {
      query["EntityQualifiedName"] = request.entityQualifiedName;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMetaCollectionEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMetaCollectionEntityResponse>(await this.callApi(params, req, runtime), new $_model.AddMetaCollectionEntityResponse({}));
  }

  /**
   * Adds an entity to a collection.
   * 
   * @param request - AddMetaCollectionEntityRequest
   * @returns AddMetaCollectionEntityResponse
   */
  async addMetaCollectionEntity(request: $_model.AddMetaCollectionEntityRequest): Promise<$_model.AddMetaCollectionEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addMetaCollectionEntityWithOptions(request, runtime);
  }

  /**
   * Assigns a role to a member of a DataWorks workspace. Before you call this operation, you must add your account to a DataWorks workspace as a member.
   * 
   * @remarks
   *   For information about how to add an account to a DataWorks workspace as a member, see [Add workspace members and assign roles to them](https://help.aliyun.com/document_detail/136941.html).
   * *   If you assign a built-in workspace-level role to a member of a DataWorks workspace, the member is automatically granted the permissions of the mapped role of the MaxCompute compute engine in the development environment. For more information, see [Appendix: Mappings between the built-in workspace-level roles of DataWorks and the roles of MaxCompute](https://help.aliyun.com/document_detail/449397.html).
   * 
   * @param request - AddProjectMemberToRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddProjectMemberToRoleResponse
   */
  async addProjectMemberToRoleWithOptions(request: $_model.AddProjectMemberToRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddProjectMemberToRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddProjectMemberToRole",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddProjectMemberToRoleResponse>(await this.callApi(params, req, runtime), new $_model.AddProjectMemberToRoleResponse({}));
  }

  /**
   * Assigns a role to a member of a DataWorks workspace. Before you call this operation, you must add your account to a DataWorks workspace as a member.
   * 
   * @remarks
   *   For information about how to add an account to a DataWorks workspace as a member, see [Add workspace members and assign roles to them](https://help.aliyun.com/document_detail/136941.html).
   * *   If you assign a built-in workspace-level role to a member of a DataWorks workspace, the member is automatically granted the permissions of the mapped role of the MaxCompute compute engine in the development environment. For more information, see [Appendix: Mappings between the built-in workspace-level roles of DataWorks and the roles of MaxCompute](https://help.aliyun.com/document_detail/449397.html).
   * 
   * @param request - AddProjectMemberToRoleRequest
   * @returns AddProjectMemberToRoleResponse
   */
  async addProjectMemberToRole(request: $_model.AddProjectMemberToRoleRequest): Promise<$_model.AddProjectMemberToRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addProjectMemberToRoleWithOptions(request, runtime);
  }

  /**
   * Adds a sensitive field that is defined based on the category and sensitivity level of data in Data Security Guard.
   * 
   * @param request - AddRecognizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddRecognizeRuleResponse
   */
  async addRecognizeRuleWithOptions(request: $_model.AddRecognizeRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddRecognizeRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.colExclude)) {
      body["ColExclude"] = request.colExclude;
    }

    if (!$dara.isNull(request.colScan)) {
      body["ColScan"] = request.colScan;
    }

    if (!$dara.isNull(request.commentScan)) {
      body["CommentScan"] = request.commentScan;
    }

    if (!$dara.isNull(request.contentScan)) {
      body["ContentScan"] = request.contentScan;
    }

    if (!$dara.isNull(request.hitThreshold)) {
      body["HitThreshold"] = request.hitThreshold;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.levelName)) {
      body["LevelName"] = request.levelName;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeParent)) {
      body["NodeParent"] = request.nodeParent;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.recognizeRules)) {
      body["RecognizeRules"] = request.recognizeRules;
    }

    if (!$dara.isNull(request.recognizeRulesType)) {
      body["RecognizeRulesType"] = request.recognizeRulesType;
    }

    if (!$dara.isNull(request.sensitiveDescription)) {
      body["SensitiveDescription"] = request.sensitiveDescription;
    }

    if (!$dara.isNull(request.sensitiveName)) {
      body["SensitiveName"] = request.sensitiveName;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddRecognizeRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddRecognizeRuleResponse>(await this.callApi(params, req, runtime), new $_model.AddRecognizeRuleResponse({}));
  }

  /**
   * Adds a sensitive field that is defined based on the category and sensitivity level of data in Data Security Guard.
   * 
   * @param request - AddRecognizeRuleRequest
   * @returns AddRecognizeRuleResponse
   */
  async addRecognizeRule(request: $_model.AddRecognizeRuleRequest): Promise<$_model.AddRecognizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addRecognizeRuleWithOptions(request, runtime);
  }

  /**
   * Adds a metatable to a specified category.
   * 
   * @param request - AddToMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddToMetaCategoryResponse
   */
  async addToMetaCategoryWithOptions(request: $_model.AddToMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddToMetaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddToMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddToMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.AddToMetaCategoryResponse({}));
  }

  /**
   * Adds a metatable to a specified category.
   * 
   * @param request - AddToMetaCategoryRequest
   * @returns AddToMetaCategoryResponse
   */
  async addToMetaCategory(request: $_model.AddToMetaCategoryRequest): Promise<$_model.AddToMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addToMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Processes a permission request order.
   * 
   * @param request - ApprovePermissionApplyOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApprovePermissionApplyOrderResponse
   */
  async approvePermissionApplyOrderWithOptions(request: $_model.ApprovePermissionApplyOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApprovePermissionApplyOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.approveAction)) {
      query["ApproveAction"] = request.approveAction;
    }

    if (!$dara.isNull(request.approveComment)) {
      query["ApproveComment"] = request.approveComment;
    }

    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApprovePermissionApplyOrder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApprovePermissionApplyOrderResponse>(await this.callApi(params, req, runtime), new $_model.ApprovePermissionApplyOrderResponse({}));
  }

  /**
   * Processes a permission request order.
   * 
   * @param request - ApprovePermissionApplyOrderRequest
   * @returns ApprovePermissionApplyOrderResponse
   */
  async approvePermissionApplyOrder(request: $_model.ApprovePermissionApplyOrderRequest): Promise<$_model.ApprovePermissionApplyOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.approvePermissionApplyOrderWithOptions(request, runtime);
  }

  /**
   * Sends the processing result of an extension point event by an extension to DataWorks.
   * 
   * @param request - CallbackExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CallbackExtensionResponse
   */
  async callbackExtensionWithOptions(request: $_model.CallbackExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CallbackExtensionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkMessage)) {
      body["CheckMessage"] = request.checkMessage;
    }

    if (!$dara.isNull(request.checkResult)) {
      body["CheckResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.extensionCode)) {
      body["ExtensionCode"] = request.extensionCode;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CallbackExtension",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CallbackExtensionResponse>(await this.callApi(params, req, runtime), new $_model.CallbackExtensionResponse({}));
  }

  /**
   * Sends the processing result of an extension point event by an extension to DataWorks.
   * 
   * @param request - CallbackExtensionRequest
   * @returns CallbackExtensionResponse
   */
  async callbackExtension(request: $_model.CallbackExtensionRequest): Promise<$_model.CallbackExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.callbackExtensionWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceManagerResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceManagerResourceGroupResponse
   */
  async changeResourceManagerResourceGroupWithOptions(request: $_model.ChangeResourceManagerResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceManagerResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceManagerResourceGroup",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceManagerResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceManagerResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceManagerResourceGroupRequest
   * @returns ChangeResourceManagerResourceGroupResponse
   */
  async changeResourceManagerResourceGroup(request: $_model.ChangeResourceManagerResourceGroupRequest): Promise<$_model.ChangeResourceManagerResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceManagerResourceGroupWithOptions(request, runtime);
  }

  /**
   * Returns the check events of a file. After you commit your file that is created on the DataStudio page, the system checks the file and returns check events before the system deploys the file. You must determine whether the check can be continued based on the events. You can call this operation to return the check events for the file that you want to deploy to DataWorks.
   * 
   * @param request - CheckFileDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckFileDeploymentResponse
   */
  async checkFileDeploymentWithOptions(request: $_model.CheckFileDeploymentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckFileDeploymentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkDetailUrl)) {
      body["CheckDetailUrl"] = request.checkDetailUrl;
    }

    if (!$dara.isNull(request.checkerInstanceId)) {
      body["CheckerInstanceId"] = request.checkerInstanceId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckFileDeployment",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckFileDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.CheckFileDeploymentResponse({}));
  }

  /**
   * Returns the check events of a file. After you commit your file that is created on the DataStudio page, the system checks the file and returns check events before the system deploys the file. You must determine whether the check can be continued based on the events. You can call this operation to return the check events for the file that you want to deploy to DataWorks.
   * 
   * @param request - CheckFileDeploymentRequest
   * @returns CheckFileDeploymentResponse
   */
  async checkFileDeployment(request: $_model.CheckFileDeploymentRequest): Promise<$_model.CheckFileDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkFileDeploymentWithOptions(request, runtime);
  }

  /**
   * Checks whether a partition in a MaxCompute metatable exists.
   * 
   * @param request - CheckMetaPartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMetaPartitionResponse
   */
  async checkMetaPartitionWithOptions(request: $_model.CheckMetaPartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckMetaPartitionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.partition)) {
      query["Partition"] = request.partition;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckMetaPartition",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMetaPartitionResponse>(await this.callApi(params, req, runtime), new $_model.CheckMetaPartitionResponse({}));
  }

  /**
   * Checks whether a partition in a MaxCompute metatable exists.
   * 
   * @param request - CheckMetaPartitionRequest
   * @returns CheckMetaPartitionResponse
   */
  async checkMetaPartition(request: $_model.CheckMetaPartitionRequest): Promise<$_model.CheckMetaPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMetaPartitionWithOptions(request, runtime);
  }

  /**
   * Checks whether a metatable exists.
   * 
   * @param request - CheckMetaTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckMetaTableResponse
   */
  async checkMetaTableWithOptions(request: $_model.CheckMetaTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckMetaTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckMetaTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckMetaTableResponse>(await this.callApi(params, req, runtime), new $_model.CheckMetaTableResponse({}));
  }

  /**
   * Checks whether a metatable exists.
   * 
   * @param request - CheckMetaTableRequest
   * @returns CheckMetaTableResponse
   */
  async checkMetaTable(request: $_model.CheckMetaTableRequest): Promise<$_model.CheckMetaTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkMetaTableWithOptions(request, runtime);
  }

  /**
   * Creates a baseline.
   * 
   * @param request - CreateBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBaselineResponse
   */
  async createBaselineWithOptions(request: $_model.CreateBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBaselineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertMarginThreshold)) {
      body["AlertMarginThreshold"] = request.alertMarginThreshold;
    }

    if (!$dara.isNull(request.baselineName)) {
      body["BaselineName"] = request.baselineName;
    }

    if (!$dara.isNull(request.baselineType)) {
      body["BaselineType"] = request.baselineType;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.overtimeSettings)) {
      body["OvertimeSettings"] = request.overtimeSettings;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBaselineResponse>(await this.callApi(params, req, runtime), new $_model.CreateBaselineResponse({}));
  }

  /**
   * Creates a baseline.
   * 
   * @param request - CreateBaselineRequest
   * @returns CreateBaselineResponse
   */
  async createBaseline(request: $_model.CreateBaselineRequest): Promise<$_model.CreateBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBaselineWithOptions(request, runtime);
  }

  /**
   * Creates a workflow in DataStudio.
   * 
   * @param request - CreateBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBusinessResponse
   */
  async createBusinessWithOptions(request: $_model.CreateBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBusinessResponse>(await this.callApi(params, req, runtime), new $_model.CreateBusinessResponse({}));
  }

  /**
   * Creates a workflow in DataStudio.
   * 
   * @param request - CreateBusinessRequest
   * @returns CreateBusinessResponse
   */
  async createBusiness(request: $_model.CreateBusinessRequest): Promise<$_model.CreateBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBusinessWithOptions(request, runtime);
  }

  /**
   * Adds a data source.
   * 
   * @deprecated OpenAPI CreateConnection is deprecated, please use dataworks-public::2020-05-18::CreateDataSource instead.
   * 
   * @param request - CreateConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConnectionResponse
   */
  async createConnectionWithOptions(request: $_model.CreateConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionType)) {
      query["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateConnectionResponse({}));
  }

  /**
   * Adds a data source.
   * 
   * @deprecated OpenAPI CreateConnection is deprecated, please use dataworks-public::2020-05-18::CreateDataSource instead.
   * 
   * @param request - CreateConnectionRequest
   * @returns CreateConnectionResponse
   */
  // Deprecated
  async createConnection(request: $_model.CreateConnectionRequest): Promise<$_model.CreateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createConnectionWithOptions(request, runtime);
  }

  /**
   * Creates an alert rule for a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param tmpReq - CreateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRuleWithOptions(tmpReq: $_model.CreateDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDIAlarmRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.notificationSettingsShrink)) {
      body["NotificationSettings"] = request.notificationSettingsShrink;
    }

    if (!$dara.isNull(request.triggerConditionsShrink)) {
      body["TriggerConditions"] = request.triggerConditionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDIAlarmRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateDIAlarmRuleResponse({}));
  }

  /**
   * Creates an alert rule for a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param request - CreateDIAlarmRuleRequest
   * @returns CreateDIAlarmRuleResponse
   */
  async createDIAlarmRule(request: $_model.CreateDIAlarmRuleRequest): Promise<$_model.CreateDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Creates a new-version synchronization task. The following types of synchronization tasks are supported: real-time synchronization of all data in a MySQL database to Hologres and batch synchronization of all data in a MySQL database to Hive.
   * 
   * @param tmpReq - CreateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDIJobResponse
   */
  async createDIJobWithOptions(tmpReq: $_model.CreateDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.destinationDataSourceSettings)) {
      request.destinationDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.destinationDataSourceSettings, "DestinationDataSourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.sourceDataSourceSettings)) {
      request.sourceDataSourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceDataSourceSettings, "SourceDataSourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!$dara.isNull(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.systemDebug)) {
      query["SystemDebug"] = request.systemDebug;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationDataSourceSettingsShrink)) {
      body["DestinationDataSourceSettings"] = request.destinationDataSourceSettingsShrink;
    }

    if (!$dara.isNull(request.destinationDataSourceType)) {
      body["DestinationDataSourceType"] = request.destinationDataSourceType;
    }

    if (!$dara.isNull(request.jobName)) {
      body["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.jobSettingsShrink)) {
      body["JobSettings"] = request.jobSettingsShrink;
    }

    if (!$dara.isNull(request.migrationType)) {
      body["MigrationType"] = request.migrationType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceSettingsShrink)) {
      body["ResourceSettings"] = request.resourceSettingsShrink;
    }

    if (!$dara.isNull(request.sourceDataSourceSettingsShrink)) {
      body["SourceDataSourceSettings"] = request.sourceDataSourceSettingsShrink;
    }

    if (!$dara.isNull(request.sourceDataSourceType)) {
      body["SourceDataSourceType"] = request.sourceDataSourceType;
    }

    if (!$dara.isNull(request.tableMappingsShrink)) {
      body["TableMappings"] = request.tableMappingsShrink;
    }

    if (!$dara.isNull(request.transformationRulesShrink)) {
      body["TransformationRules"] = request.transformationRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDIJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDIJobResponse({}));
  }

  /**
   * Creates a new-version synchronization task. The following types of synchronization tasks are supported: real-time synchronization of all data in a MySQL database to Hologres and batch synchronization of all data in a MySQL database to Hive.
   * 
   * @param request - CreateDIJobRequest
   * @returns CreateDIJobResponse
   */
  async createDIJob(request: $_model.CreateDIJobRequest): Promise<$_model.CreateDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDIJobWithOptions(request, runtime);
  }

  /**
   * Creates a data synchronization task.
   * 
   * @remarks
   * You cannot configure scheduling properties for a task by calling this operation. If you want to configure scheduling properties for a task, you can call the UpdateFile operation.[](~~2780137~~)
   * 
   * @param request - CreateDISyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDISyncTaskResponse
   */
  async createDISyncTaskWithOptions(request: $_model.CreateDISyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDISyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskContent)) {
      body["TaskContent"] = request.taskContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDISyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateDISyncTaskResponse({}));
  }

  /**
   * Creates a data synchronization task.
   * 
   * @remarks
   * You cannot configure scheduling properties for a task by calling this operation. If you want to configure scheduling properties for a task, you can call the UpdateFile operation.[](~~2780137~~)
   * 
   * @param request - CreateDISyncTaskRequest
   * @returns CreateDISyncTaskResponse
   */
  async createDISyncTask(request: $_model.CreateDISyncTaskRequest): Promise<$_model.CreateDISyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDISyncTaskWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateDagComplement is deprecated
   * 
   * @param request - CreateDagComplementRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDagComplementResponse
   */
  async createDagComplementWithOptions(request: $_model.CreateDagComplementRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDagComplementResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizBeginTime)) {
      body["BizBeginTime"] = request.bizBeginTime;
    }

    if (!$dara.isNull(request.bizEndTime)) {
      body["BizEndTime"] = request.bizEndTime;
    }

    if (!$dara.isNull(request.endBizDate)) {
      body["EndBizDate"] = request.endBizDate;
    }

    if (!$dara.isNull(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!$dara.isNull(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!$dara.isNull(request.parallelism)) {
      body["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.rootNodeId)) {
      body["RootNodeId"] = request.rootNodeId;
    }

    if (!$dara.isNull(request.startBizDate)) {
      body["StartBizDate"] = request.startBizDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDagComplement",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDagComplementResponse>(await this.callApi(params, req, runtime), new $_model.CreateDagComplementResponse({}));
  }

  /**
   * @deprecated OpenAPI CreateDagComplement is deprecated
   * 
   * @param request - CreateDagComplementRequest
   * @returns CreateDagComplementResponse
   */
  // Deprecated
  async createDagComplement(request: $_model.CreateDagComplementRequest): Promise<$_model.CreateDagComplementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDagComplementWithOptions(request, runtime);
  }

  /**
   * @deprecated OpenAPI CreateDagTest is deprecated
   * 
   * @param request - CreateDagTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDagTestResponse
   */
  async createDagTestWithOptions(request: $_model.CreateDagTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDagTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDagTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDagTestResponse>(await this.callApi(params, req, runtime), new $_model.CreateDagTestResponse({}));
  }

  /**
   * @deprecated OpenAPI CreateDagTest is deprecated
   * 
   * @param request - CreateDagTestRequest
   * @returns CreateDagTestResponse
   */
  // Deprecated
  async createDagTest(request: $_model.CreateDagTestRequest): Promise<$_model.CreateDagTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDagTestWithOptions(request, runtime);
  }

  /**
   * Creates an API.
   * 
   * @param request - CreateDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataServiceApiResponse
   */
  async createDataServiceApiWithOptions(request: $_model.CreateDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiDescription)) {
      body["ApiDescription"] = request.apiDescription;
    }

    if (!$dara.isNull(request.apiMode)) {
      body["ApiMode"] = request.apiMode;
    }

    if (!$dara.isNull(request.apiName)) {
      body["ApiName"] = request.apiName;
    }

    if (!$dara.isNull(request.apiPath)) {
      body["ApiPath"] = request.apiPath;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.protocols)) {
      body["Protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.registrationDetails)) {
      body["RegistrationDetails"] = request.registrationDetails;
    }

    if (!$dara.isNull(request.requestContentType)) {
      body["RequestContentType"] = request.requestContentType;
    }

    if (!$dara.isNull(request.requestMethod)) {
      body["RequestMethod"] = request.requestMethod;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.responseContentType)) {
      body["ResponseContentType"] = request.responseContentType;
    }

    if (!$dara.isNull(request.scriptDetails)) {
      body["ScriptDetails"] = request.scriptDetails;
    }

    if (!$dara.isNull(request.sqlMode)) {
      body["SqlMode"] = request.sqlMode;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.visibleRange)) {
      body["VisibleRange"] = request.visibleRange;
    }

    if (!$dara.isNull(request.wizardDetails)) {
      body["WizardDetails"] = request.wizardDetails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataServiceApiResponse({}));
  }

  /**
   * Creates an API.
   * 
   * @param request - CreateDataServiceApiRequest
   * @returns CreateDataServiceApiResponse
   */
  async createDataServiceApi(request: $_model.CreateDataServiceApiRequest): Promise<$_model.CreateDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Grants the access permissions on an API in DataService Studio.
   * 
   * @param request - CreateDataServiceApiAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataServiceApiAuthorityResponse
   */
  async createDataServiceApiAuthorityWithOptions(request: $_model.CreateDataServiceApiAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataServiceApiAuthorityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.authorizedProjectId)) {
      body["AuthorizedProjectId"] = request.authorizedProjectId;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataServiceApiAuthority",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataServiceApiAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataServiceApiAuthorityResponse({}));
  }

  /**
   * Grants the access permissions on an API in DataService Studio.
   * 
   * @param request - CreateDataServiceApiAuthorityRequest
   * @returns CreateDataServiceApiAuthorityResponse
   */
  async createDataServiceApiAuthority(request: $_model.CreateDataServiceApiAuthorityRequest): Promise<$_model.CreateDataServiceApiAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataServiceApiAuthorityWithOptions(request, runtime);
  }

  /**
   * Creates a folder in DataService Studio.
   * 
   * @param request - CreateDataServiceFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataServiceFolderResponse
   */
  async createDataServiceFolderWithOptions(request: $_model.CreateDataServiceFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataServiceFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderName)) {
      body["FolderName"] = request.folderName;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataServiceFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataServiceFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataServiceFolderResponse({}));
  }

  /**
   * Creates a folder in DataService Studio.
   * 
   * @param request - CreateDataServiceFolderRequest
   * @returns CreateDataServiceFolderResponse
   */
  async createDataServiceFolder(request: $_model.CreateDataServiceFolderRequest): Promise<$_model.CreateDataServiceFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataServiceFolderWithOptions(request, runtime);
  }

  /**
   * Creates a business process.
   * 
   * @param request - CreateDataServiceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataServiceGroupResponse
   */
  async createDataServiceGroupWithOptions(request: $_model.CreateDataServiceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataServiceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiGatewayGroupId)) {
      body["ApiGatewayGroupId"] = request.apiGatewayGroupId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataServiceGroup",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataServiceGroupResponse({}));
  }

  /**
   * Creates a business process.
   * 
   * @param request - CreateDataServiceGroupRequest
   * @returns CreateDataServiceGroupResponse
   */
  async createDataServiceGroup(request: $_model.CreateDataServiceGroupRequest): Promise<$_model.CreateDataServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataServiceGroupWithOptions(request, runtime);
  }

  /**
   * Adds a data source to DataWorks.
   * 
   * @param request - CreateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(request: $_model.CreateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.subType)) {
      query["SubType"] = request.subType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceResponse({}));
  }

  /**
   * Adds a data source to DataWorks.
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDataSourceWithOptions(request, runtime);
  }

  /**
   * Creates an export task. You can use this operation to create an export task but cannot use this operation to start the created export task.
   * 
   * @param request - CreateExportMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExportMigrationResponse
   */
  async createExportMigrationWithOptions(request: $_model.CreateExportMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExportMigrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.exportMode)) {
      body["ExportMode"] = request.exportMode;
    }

    if (!$dara.isNull(request.exportObjectStatus)) {
      body["ExportObjectStatus"] = request.exportObjectStatus;
    }

    if (!$dara.isNull(request.incrementalSince)) {
      body["IncrementalSince"] = request.incrementalSince;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExportMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExportMigrationResponse>(await this.callApi(params, req, runtime), new $_model.CreateExportMigrationResponse({}));
  }

  /**
   * Creates an export task. You can use this operation to create an export task but cannot use this operation to start the created export task.
   * 
   * @param request - CreateExportMigrationRequest
   * @returns CreateExportMigrationResponse
   */
  async createExportMigration(request: $_model.CreateExportMigrationRequest): Promise<$_model.CreateExportMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createExportMigrationWithOptions(request, runtime);
  }

  /**
   * Creates a file in DataStudio. You cannot call this operation to create files for Data Integration nodes.
   * 
   * @param request - CreateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFileResponse
   */
  async createFileWithOptions(request: $_model.CreateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!$dara.isNull(request.applyScheduleImmediately)) {
      body["ApplyScheduleImmediately"] = request.applyScheduleImmediately;
    }

    if (!$dara.isNull(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!$dara.isNull(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!$dara.isNull(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.createFolderIfNotExists)) {
      body["CreateFolderIfNotExists"] = request.createFolderIfNotExists;
    }

    if (!$dara.isNull(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!$dara.isNull(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!$dara.isNull(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.ignoreParentSkipRunningProperty)) {
      body["IgnoreParentSkipRunningProperty"] = request.ignoreParentSkipRunningProperty;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!$dara.isNull(request.inputParameters)) {
      body["InputParameters"] = request.inputParameters;
    }

    if (!$dara.isNull(request.outputParameters)) {
      body["OutputParameters"] = request.outputParameters;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!$dara.isNull(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!$dara.isNull(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!$dara.isNull(request.stop)) {
      body["Stop"] = request.stop;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateFileResponse({}));
  }

  /**
   * Creates a file in DataStudio. You cannot call this operation to create files for Data Integration nodes.
   * 
   * @param request - CreateFileRequest
   * @returns CreateFileResponse
   */
  async createFile(request: $_model.CreateFileRequest): Promise<$_model.CreateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFileWithOptions(request, runtime);
  }

  /**
   * The operation that you want to perform. Set the value to \\*\\*CreateFolder\\*\\*.
   * 
   * @param request - CreateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(request: $_model.CreateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFolderResponse({}));
  }

  /**
   * The operation that you want to perform. Set the value to \\*\\*CreateFolder\\*\\*.
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFolderWithOptions(request, runtime);
  }

  /**
   * Creates an import task. The import task contains the import packages of data sources, nodes, and tables.
   * 
   * @remarks
   * The import package must be uploaded. Example of the upload method:
   *         Config config = new Config();
   *         config.setAccessKeyId(accessId);
   *         config.setAccessKeySecret(accessKey);
   *         config.setEndpoint(popEndpoint);
   *         config.setRegionId(regionId);
   *         
   *         Client client = new Client(config);
   *         CreateImportMigrationAdvanceRequest request = new CreateImportMigrationAdvanceRequest();
   *         request.setName("test_migration_api_" + System.currentTimeMillis());
   *         request.setProjectId(123456L); 
   *         request.setPackageType("DATAWORKS_MODEL");
   *         request.setPackageFileObject(new FileInputStream("/home/admin/Downloads/test.zip"));
   *         RuntimeOptions runtime = new RuntimeOptions();
   *         CreateImportMigrationResponse response = client.createImportMigrationAdvance(request, runtime);
   *         ...
   * 
   * @param request - CreateImportMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImportMigrationResponse
   */
  async createImportMigrationWithOptions(request: $_model.CreateImportMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImportMigrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.calculateEngineMap)) {
      body["CalculateEngineMap"] = request.calculateEngineMap;
    }

    if (!$dara.isNull(request.commitRule)) {
      body["CommitRule"] = request.commitRule;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.packageFile)) {
      body["PackageFile"] = request.packageFile;
    }

    if (!$dara.isNull(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceGroupMap)) {
      body["ResourceGroupMap"] = request.resourceGroupMap;
    }

    if (!$dara.isNull(request.workspaceMap)) {
      body["WorkspaceMap"] = request.workspaceMap;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImportMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImportMigrationResponse>(await this.callApi(params, req, runtime), new $_model.CreateImportMigrationResponse({}));
  }

  /**
   * Creates an import task. The import task contains the import packages of data sources, nodes, and tables.
   * 
   * @remarks
   * The import package must be uploaded. Example of the upload method:
   *         Config config = new Config();
   *         config.setAccessKeyId(accessId);
   *         config.setAccessKeySecret(accessKey);
   *         config.setEndpoint(popEndpoint);
   *         config.setRegionId(regionId);
   *         
   *         Client client = new Client(config);
   *         CreateImportMigrationAdvanceRequest request = new CreateImportMigrationAdvanceRequest();
   *         request.setName("test_migration_api_" + System.currentTimeMillis());
   *         request.setProjectId(123456L); 
   *         request.setPackageType("DATAWORKS_MODEL");
   *         request.setPackageFileObject(new FileInputStream("/home/admin/Downloads/test.zip"));
   *         RuntimeOptions runtime = new RuntimeOptions();
   *         CreateImportMigrationResponse response = client.createImportMigrationAdvance(request, runtime);
   *         ...
   * 
   * @param request - CreateImportMigrationRequest
   * @returns CreateImportMigrationResponse
   */
  async createImportMigration(request: $_model.CreateImportMigrationRequest): Promise<$_model.CreateImportMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImportMigrationWithOptions(request, runtime);
  }

  async createImportMigrationAdvance(request: $_model.CreateImportMigrationAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImportMigrationResponse> {
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
      Product: "dataworks-public",
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
    let createImportMigrationReq = new $_model.CreateImportMigrationRequest({ });
    OpenApiUtil.convert(request, createImportMigrationReq);
    if (!$dara.isNull(request.packageFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.packageFileObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      createImportMigrationReq.packageFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let createImportMigrationResp = await this.createImportMigrationWithOptions(createImportMigrationReq, runtime);
    return createImportMigrationResp;
  }

  /**
   * Triggers a manually triggered workflow to run. Before you call this operation, make sure that the manually triggered workflow is committed and deployed. You can find the manually triggered workflow on the Operation Center page only after the manually triggered workflow is committed and deployed.
   * 
   * @deprecated OpenAPI CreateManualDag is deprecated
   * 
   * @param request - CreateManualDagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateManualDagResponse
   */
  async createManualDagWithOptions(request: $_model.CreateManualDagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateManualDagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.dagParameters)) {
      body["DagParameters"] = request.dagParameters;
    }

    if (!$dara.isNull(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!$dara.isNull(request.nodeParameters)) {
      body["NodeParameters"] = request.nodeParameters;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateManualDag",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateManualDagResponse>(await this.callApi(params, req, runtime), new $_model.CreateManualDagResponse({}));
  }

  /**
   * Triggers a manually triggered workflow to run. Before you call this operation, make sure that the manually triggered workflow is committed and deployed. You can find the manually triggered workflow on the Operation Center page only after the manually triggered workflow is committed and deployed.
   * 
   * @deprecated OpenAPI CreateManualDag is deprecated
   * 
   * @param request - CreateManualDagRequest
   * @returns CreateManualDagResponse
   */
  // Deprecated
  async createManualDag(request: $_model.CreateManualDagRequest): Promise<$_model.CreateManualDagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createManualDagWithOptions(request, runtime);
  }

  /**
   * Creates a category.
   * 
   * @param request - CreateMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetaCategoryResponse
   */
  async createMetaCategoryWithOptions(request: $_model.CreateMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetaCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetaCategoryResponse({}));
  }

  /**
   * Creates a category.
   * 
   * @param request - CreateMetaCategoryRequest
   * @returns CreateMetaCategoryResponse
   */
  async createMetaCategory(request: $_model.CreateMetaCategoryRequest): Promise<$_model.CreateMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Creates a collection.
   * 
   * @remarks
   * Collections are classified into various types. The names of collections of the same type must be different.
   * 
   * @param request - CreateMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMetaCollectionResponse
   */
  async createMetaCollectionWithOptions(request: $_model.CreateMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collectionType)) {
      query["CollectionType"] = request.collectionType;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentQualifiedName)) {
      query["ParentQualifiedName"] = request.parentQualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMetaCollection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateMetaCollectionResponse({}));
  }

  /**
   * Creates a collection.
   * 
   * @remarks
   * Collections are classified into various types. The names of collections of the same type must be different.
   * 
   * @param request - CreateMetaCollectionRequest
   * @returns CreateMetaCollectionResponse
   */
  async createMetaCollection(request: $_model.CreateMetaCollectionRequest): Promise<$_model.CreateMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Creates a permission request order.
   * 
   * @param request - CreatePermissionApplyOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePermissionApplyOrderResponse
   */
  async createPermissionApplyOrderWithOptions(request: $_model.CreatePermissionApplyOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePermissionApplyOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyObject)) {
      query["ApplyObject"] = request.applyObject;
    }

    if (!$dara.isNull(request.applyReason)) {
      query["ApplyReason"] = request.applyReason;
    }

    if (!$dara.isNull(request.applyType)) {
      query["ApplyType"] = request.applyType;
    }

    if (!$dara.isNull(request.applyUserIds)) {
      query["ApplyUserIds"] = request.applyUserIds;
    }

    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.deadline)) {
      query["Deadline"] = request.deadline;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePermissionApplyOrder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePermissionApplyOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreatePermissionApplyOrderResponse({}));
  }

  /**
   * Creates a permission request order.
   * 
   * @param request - CreatePermissionApplyOrderRequest
   * @returns CreatePermissionApplyOrderResponse
   */
  async createPermissionApplyOrder(request: $_model.CreatePermissionApplyOrderRequest): Promise<$_model.CreatePermissionApplyOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPermissionApplyOrderWithOptions(request, runtime);
  }

  /**
   * Creates a DataWorks workspace.
   * 
   * @param tmpReq - CreateProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(tmpReq: $_model.CreateProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.disableDevelopment)) {
      query["DisableDevelopment"] = request.disableDevelopment;
    }

    if (!$dara.isNull(request.isAllowDownload)) {
      query["IsAllowDownload"] = request.isAllowDownload;
    }

    if (!$dara.isNull(request.projectDescription)) {
      query["ProjectDescription"] = request.projectDescription;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      query["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.projectMode)) {
      query["ProjectMode"] = request.projectMode;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * Creates a DataWorks workspace.
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  /**
   * Adds a user to a DataWorks workspace.
   * 
   * @param request - CreateProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectMemberResponse
   */
  async createProjectMemberWithOptions(request: $_model.CreateProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProjectMember",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectMemberResponse({}));
  }

  /**
   * Adds a user to a DataWorks workspace.
   * 
   * @param request - CreateProjectMemberRequest
   * @returns CreateProjectMemberResponse
   */
  async createProjectMember(request: $_model.CreateProjectMemberRequest): Promise<$_model.CreateProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createProjectMemberWithOptions(request, runtime);
  }

  /**
   * Creates a partition filter expression.
   * 
   * @param request - CreateQualityEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityEntityResponse
   */
  async createQualityEntityWithOptions(request: $_model.CreateQualityEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityLevel)) {
      body["EntityLevel"] = request.entityLevel;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityEntityResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityEntityResponse({}));
  }

  /**
   * Creates a partition filter expression.
   * 
   * @param request - CreateQualityEntityRequest
   * @returns CreateQualityEntityResponse
   */
  async createQualityEntity(request: $_model.CreateQualityEntityRequest): Promise<$_model.CreateQualityEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityEntityWithOptions(request, runtime);
  }

  /**
   * Creates a subscriber for a partition filter expression.
   * 
   * @param request - CreateQualityFollowerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityFollowerResponse
   */
  async createQualityFollowerWithOptions(request: $_model.CreateQualityFollowerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityFollowerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmMode)) {
      body["AlarmMode"] = request.alarmMode;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityFollowerResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityFollowerResponse({}));
  }

  /**
   * Creates a subscriber for a partition filter expression.
   * 
   * @param request - CreateQualityFollowerRequest
   * @returns CreateQualityFollowerResponse
   */
  async createQualityFollower(request: $_model.CreateQualityFollowerRequest): Promise<$_model.CreateQualityFollowerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityFollowerWithOptions(request, runtime);
  }

  /**
   * Associates a node with a partition filter expression.
   * 
   * @param request - CreateQualityRelativeNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityRelativeNodeResponse
   */
  async createQualityRelativeNodeWithOptions(request: $_model.CreateQualityRelativeNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityRelativeNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.targetNodeProjectId)) {
      body["TargetNodeProjectId"] = request.targetNodeProjectId;
    }

    if (!$dara.isNull(request.targetNodeProjectName)) {
      body["TargetNodeProjectName"] = request.targetNodeProjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityRelativeNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityRelativeNodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityRelativeNodeResponse({}));
  }

  /**
   * Associates a node with a partition filter expression.
   * 
   * @param request - CreateQualityRelativeNodeRequest
   * @returns CreateQualityRelativeNodeResponse
   */
  async createQualityRelativeNode(request: $_model.CreateQualityRelativeNodeRequest): Promise<$_model.CreateQualityRelativeNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityRelativeNodeWithOptions(request, runtime);
  }

  /**
   * Creates a monitoring rule.
   * 
   * @param request - CreateQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQualityRuleResponse
   */
  async createQualityRuleWithOptions(request: $_model.CreateQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.checker)) {
      body["Checker"] = request.checker;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.criticalThreshold)) {
      body["CriticalThreshold"] = request.criticalThreshold;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.expectValue)) {
      body["ExpectValue"] = request.expectValue;
    }

    if (!$dara.isNull(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.predictType)) {
      body["PredictType"] = request.predictType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.propertyType)) {
      body["PropertyType"] = request.propertyType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.taskSetting)) {
      body["TaskSetting"] = request.taskSetting;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.trend)) {
      body["Trend"] = request.trend;
    }

    if (!$dara.isNull(request.warningThreshold)) {
      body["WarningThreshold"] = request.warningThreshold;
    }

    if (!$dara.isNull(request.whereCondition)) {
      body["WhereCondition"] = request.whereCondition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateQualityRuleResponse({}));
  }

  /**
   * Creates a monitoring rule.
   * 
   * @param request - CreateQualityRuleRequest
   * @returns CreateQualityRuleResponse
   */
  async createQualityRule(request: $_model.CreateQualityRuleRequest): Promise<$_model.CreateQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createQualityRuleWithOptions(request, runtime);
  }

  /**
   * Creates a custom alert rule.
   * 
   * @param request - CreateRemindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRemindResponse
   */
  async createRemindWithOptions(request: $_model.CreateRemindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRemindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertInterval)) {
      body["AlertInterval"] = request.alertInterval;
    }

    if (!$dara.isNull(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!$dara.isNull(request.alertTargets)) {
      body["AlertTargets"] = request.alertTargets;
    }

    if (!$dara.isNull(request.alertUnit)) {
      body["AlertUnit"] = request.alertUnit;
    }

    if (!$dara.isNull(request.baselineIds)) {
      body["BaselineIds"] = request.baselineIds;
    }

    if (!$dara.isNull(request.bizProcessIds)) {
      body["BizProcessIds"] = request.bizProcessIds;
    }

    if (!$dara.isNull(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.dndEnd)) {
      body["DndEnd"] = request.dndEnd;
    }

    if (!$dara.isNull(request.maxAlertTimes)) {
      body["MaxAlertTimes"] = request.maxAlertTimes;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.remindName)) {
      body["RemindName"] = request.remindName;
    }

    if (!$dara.isNull(request.remindType)) {
      body["RemindType"] = request.remindType;
    }

    if (!$dara.isNull(request.remindUnit)) {
      body["RemindUnit"] = request.remindUnit;
    }

    if (!$dara.isNull(request.robotUrls)) {
      body["RobotUrls"] = request.robotUrls;
    }

    if (!$dara.isNull(request.webhooks)) {
      body["Webhooks"] = request.webhooks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRemindResponse>(await this.callApi(params, req, runtime), new $_model.CreateRemindResponse({}));
  }

  /**
   * Creates a custom alert rule.
   * 
   * @param request - CreateRemindRequest
   * @returns CreateRemindResponse
   */
  async createRemind(request: $_model.CreateRemindRequest): Promise<$_model.CreateRemindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRemindWithOptions(request, runtime);
  }

  /**
   * Creates or uploads a resource file in DataStudio. The feature that is implemented by calling this operation is the same as the resource creation feature provided in the integrated development environment (IDE).
   * 
   * @param request - CreateResourceFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceFileResponse
   */
  async createResourceFileWithOptions(request: $_model.CreateResourceFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.originResourceName)) {
      body["OriginResourceName"] = request.originResourceName;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.registerToCalcEngine)) {
      body["RegisterToCalcEngine"] = request.registerToCalcEngine;
    }

    if (!$dara.isNull(request.resourceFile)) {
      body["ResourceFile"] = request.resourceFile;
    }

    if (!$dara.isNull(request.storageURL)) {
      body["StorageURL"] = request.storageURL;
    }

    if (!$dara.isNull(request.uploadMode)) {
      body["UploadMode"] = request.uploadMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceFileResponse({}));
  }

  /**
   * Creates or uploads a resource file in DataStudio. The feature that is implemented by calling this operation is the same as the resource creation feature provided in the integrated development environment (IDE).
   * 
   * @param request - CreateResourceFileRequest
   * @returns CreateResourceFileResponse
   */
  async createResourceFile(request: $_model.CreateResourceFileRequest): Promise<$_model.CreateResourceFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createResourceFileWithOptions(request, runtime);
  }

  async createResourceFileAdvance(request: $_model.CreateResourceFileAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceFileResponse> {
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
      Product: "dataworks-public",
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
    let createResourceFileReq = new $_model.CreateResourceFileRequest({ });
    OpenApiUtil.convert(request, createResourceFileReq);
    if (!$dara.isNull(request.resourceFileObject)) {
      authResponse = await authClient.callApi(authParams, authReq, runtime);
      tmpBody = authResponse["body"];
      useAccelerate = Boolean(tmpBody["UseAccelerate"]);
      authResponseBody = OpenApiUtil.stringifyMapValue(tmpBody);
      fileObj = new $dara.FileField({
        filename: authResponseBody["ObjectKey"],
        content: request.resourceFileObject,
        contentType: "",
      });
      ossHeader = {
        host: `${authResponseBody["Bucket"]}.${OpenApiUtil.getEndpoint(authResponseBody["Endpoint"], useAccelerate, this._endpointType)}`,
        OSSAccessKeyId: authResponseBody["AccessKeyId"],
        policy: authResponseBody["EncodedPolicy"],
        Signature: authResponseBody["Signature"],
        key: authResponseBody["ObjectKey"],
        file: fileObj,
        success_action_status: "201",
      };
      await this._postOSSObject(authResponseBody["Bucket"], ossHeader);
      createResourceFileReq.resourceFile = `http://${authResponseBody["Bucket"]}.${authResponseBody["Endpoint"]}/${authResponseBody["ObjectKey"]}`;
    }

    let createResourceFileResp = await this.createResourceFileWithOptions(createResourceFileReq, runtime);
    return createResourceFileResp;
  }

  /**
   * Creates a MaxCompute table or view.
   * 
   * @param request - CreateTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableResponse
   */
  async createTableWithOptions(request: $_model.CreateTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.externalTableType)) {
      query["ExternalTableType"] = request.externalTableType;
    }

    if (!$dara.isNull(request.hasPart)) {
      query["HasPart"] = request.hasPart;
    }

    if (!$dara.isNull(request.isView)) {
      query["IsView"] = request.isView;
    }

    if (!$dara.isNull(request.lifeCycle)) {
      query["LifeCycle"] = request.lifeCycle;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.logicalLevelId)) {
      query["LogicalLevelId"] = request.logicalLevelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.physicsLevelId)) {
      query["PhysicsLevelId"] = request.physicsLevelId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columns)) {
      body["Columns"] = request.columns;
    }

    if (!$dara.isNull(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.themes)) {
      body["Themes"] = request.themes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableResponse({}));
  }

  /**
   * Creates a MaxCompute table or view.
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(request: $_model.CreateTableRequest): Promise<$_model.CreateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTableWithOptions(request, runtime);
  }

  /**
   * Creates a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - CreateTableLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableLevelResponse
   */
  async createTableLevelWithOptions(request: $_model.CreateTableLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableLevelResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableLevelResponse({}));
  }

  /**
   * Creates a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - CreateTableLevelRequest
   * @returns CreateTableLevelResponse
   */
  async createTableLevel(request: $_model.CreateTableLevelRequest): Promise<$_model.CreateTableLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTableLevelWithOptions(request, runtime);
  }

  /**
   * Creates a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - CreateTableThemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableThemeResponse
   */
  async createTableThemeWithOptions(request: $_model.CreateTableThemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableThemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableThemeResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableThemeResponse({}));
  }

  /**
   * Creates a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - CreateTableThemeRequest
   * @returns CreateTableThemeResponse
   */
  async createTableTheme(request: $_model.CreateTableThemeRequest): Promise<$_model.CreateTableThemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTableThemeWithOptions(request, runtime);
  }

  /**
   * Creates a file for a function in DataStudio.
   * 
   * @param request - CreateUdfFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfFileResponse
   */
  async createUdfFileWithOptions(request: $_model.CreateUdfFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUdfFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!$dara.isNull(request.createFolderIfNotExists)) {
      body["CreateFolderIfNotExists"] = request.createFolderIfNotExists;
    }

    if (!$dara.isNull(request.example)) {
      body["Example"] = request.example;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!$dara.isNull(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUdfFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUdfFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateUdfFileResponse({}));
  }

  /**
   * Creates a file for a function in DataStudio.
   * 
   * @param request - CreateUdfFileRequest
   * @returns CreateUdfFileResponse
   */
  async createUdfFile(request: $_model.CreateUdfFileRequest): Promise<$_model.CreateUdfFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createUdfFileWithOptions(request, runtime);
  }

  /**
   * Deletes a baseline based on its ID. You can delete a baseline only if the nodes in the baseline does not have ancestor nodes. You can call the UpdateBaseline operation to delete the relationships between the nodes and their ancestor nodes.
   * 
   * @param request - DeleteBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBaselineResponse
   */
  async deleteBaselineWithOptions(request: $_model.DeleteBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBaselineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBaselineResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBaselineResponse({}));
  }

  /**
   * Deletes a baseline based on its ID. You can delete a baseline only if the nodes in the baseline does not have ancestor nodes. You can call the UpdateBaseline operation to delete the relationships between the nodes and their ancestor nodes.
   * 
   * @param request - DeleteBaselineRequest
   * @returns DeleteBaselineResponse
   */
  async deleteBaseline(request: $_model.DeleteBaselineRequest): Promise<$_model.DeleteBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBaselineWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBusinessResponse
   */
  async deleteBusinessWithOptions(request: $_model.DeleteBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBusinessResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBusinessResponse({}));
  }

  /**
   * @param request - DeleteBusinessRequest
   * @returns DeleteBusinessResponse
   */
  async deleteBusiness(request: $_model.DeleteBusinessRequest): Promise<$_model.DeleteBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBusinessWithOptions(request, runtime);
  }

  /**
   * Removes a data source.
   * 
   * @deprecated OpenAPI DeleteConnection is deprecated
   * 
   * @param request - DeleteConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(request: $_model.DeleteConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectionResponse({}));
  }

  /**
   * Removes a data source.
   * 
   * @deprecated OpenAPI DeleteConnection is deprecated
   * 
   * @param request - DeleteConnectionRequest
   * @returns DeleteConnectionResponse
   */
  // Deprecated
  async deleteConnection(request: $_model.DeleteConnectionRequest): Promise<$_model.DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteConnectionWithOptions(request, runtime);
  }

  /**
   * Deletes an alert rule for a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks whose MigrationType is set to RealtimeIncremental.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRuleWithOptions(request: $_model.DeleteDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDIAlarmRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIAlarmRuleId)) {
      body["DIAlarmRuleId"] = request.DIAlarmRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDIAlarmRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDIAlarmRuleResponse({}));
  }

  /**
   * Deletes an alert rule for a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks whose MigrationType is set to RealtimeIncremental.
   * 
   * @param request - DeleteDIAlarmRuleRequest
   * @returns DeleteDIAlarmRuleResponse
   */
  async deleteDIAlarmRule(request: $_model.DeleteDIAlarmRuleRequest): Promise<$_model.DeleteDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @param request - DeleteDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDIJobResponse
   */
  async deleteDIJobWithOptions(request: $_model.DeleteDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDIJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDIJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDIJobResponse({}));
  }

  /**
   * Deletes a Data Integration task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @param request - DeleteDIJobRequest
   * @returns DeleteDIJobResponse
   */
  async deleteDIJob(request: $_model.DeleteDIJobRequest): Promise<$_model.DeleteDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDIJobWithOptions(request, runtime);
  }

  /**
   * Deletes a synchronization task. You can call this operation to delete only a real-time synchronization task.
   * 
   * @remarks
   * If you want to delete a batch synchronization task, call the DeleteFile operation. For more information, see [Delete a synchronization task](https://help.aliyun.com/document_detail/321443.html).
   * 
   * @param request - DeleteDISyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDISyncTaskResponse
   */
  async deleteDISyncTaskWithOptions(request: $_model.DeleteDISyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDISyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDISyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDISyncTaskResponse({}));
  }

  /**
   * Deletes a synchronization task. You can call this operation to delete only a real-time synchronization task.
   * 
   * @remarks
   * If you want to delete a batch synchronization task, call the DeleteFile operation. For more information, see [Delete a synchronization task](https://help.aliyun.com/document_detail/321443.html).
   * 
   * @param request - DeleteDISyncTaskRequest
   * @returns DeleteDISyncTaskResponse
   */
  async deleteDISyncTask(request: $_model.DeleteDISyncTaskRequest): Promise<$_model.DeleteDISyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDISyncTaskWithOptions(request, runtime);
  }

  /**
   * Deletes an API in DataService Studio.
   * 
   * @param request - DeleteDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataServiceApiResponse
   */
  async deleteDataServiceApiWithOptions(request: $_model.DeleteDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataServiceApiResponse({}));
  }

  /**
   * Deletes an API in DataService Studio.
   * 
   * @param request - DeleteDataServiceApiRequest
   * @returns DeleteDataServiceApiResponse
   */
  async deleteDataServiceApi(request: $_model.DeleteDataServiceApiRequest): Promise<$_model.DeleteDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Revokes the access permissions on an API.
   * 
   * @param request - DeleteDataServiceApiAuthorityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataServiceApiAuthorityResponse
   */
  async deleteDataServiceApiAuthorityWithOptions(request: $_model.DeleteDataServiceApiAuthorityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataServiceApiAuthorityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.authorizedProjectId)) {
      body["AuthorizedProjectId"] = request.authorizedProjectId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataServiceApiAuthority",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataServiceApiAuthorityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataServiceApiAuthorityResponse({}));
  }

  /**
   * Revokes the access permissions on an API.
   * 
   * @param request - DeleteDataServiceApiAuthorityRequest
   * @returns DeleteDataServiceApiAuthorityResponse
   */
  async deleteDataServiceApiAuthority(request: $_model.DeleteDataServiceApiAuthorityRequest): Promise<$_model.DeleteDataServiceApiAuthorityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataServiceApiAuthorityWithOptions(request, runtime);
  }

  /**
   * Removes a data source.
   * 
   * @param request - DeleteDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(request: $_model.DeleteDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2020-05-18",
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
   * Removes a data source.
   * 
   * @param request - DeleteDataSourceRequest
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(request: $_model.DeleteDataSourceRequest): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDataSourceWithOptions(request, runtime);
  }

  /**
   * Deletes a file from DataStudio. If the file has been committed, an asynchronous process is triggered to delete the file in the scheduling system. The value of the DeploymentId parameter returned is used to call the GetDeployment operation to poll the status of the asynchronous process.
   * 
   * @param request - DeleteFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFileResponse
   */
  async deleteFileWithOptions(request: $_model.DeleteFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFileResponse({}));
  }

  /**
   * Deletes a file from DataStudio. If the file has been committed, an asynchronous process is triggered to delete the file in the scheduling system. The value of the DeploymentId parameter returned is used to call the GetDeployment operation to poll the status of the asynchronous process.
   * 
   * @param request - DeleteFileRequest
   * @returns DeleteFileResponse
   */
  async deleteFile(request: $_model.DeleteFileRequest): Promise<$_model.DeleteFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFileWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(request: $_model.DeleteFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFolderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFolderResponse({}));
  }

  /**
   * @param request - DeleteFolderRequest
   * @returns DeleteFolderResponse
   */
  async deleteFolder(request: $_model.DeleteFolderRequest): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFolderWithOptions(request, runtime);
  }

  /**
   * Removes a table from a specified category.
   * 
   * @param request - DeleteFromMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFromMetaCategoryResponse
   */
  async deleteFromMetaCategoryWithOptions(request: $_model.DeleteFromMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFromMetaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFromMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFromMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFromMetaCategoryResponse({}));
  }

  /**
   * Removes a table from a specified category.
   * 
   * @param request - DeleteFromMetaCategoryRequest
   * @returns DeleteFromMetaCategoryResponse
   */
  async deleteFromMetaCategory(request: $_model.DeleteFromMetaCategoryRequest): Promise<$_model.DeleteFromMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFromMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Delete lineage, supports deleting user-defined lineage relationships
   * 
   * @remarks
   * This API is currently in the trial phase. Users who wish to experience it can apply, and after the administrator adds them to the trial list, they can call this API.
   * 
   * @param request - DeleteLineageRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLineageRelationResponse
   */
  async deleteLineageRelationWithOptions(request: $_model.DeleteLineageRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLineageRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destEntityQualifiedName)) {
      query["DestEntityQualifiedName"] = request.destEntityQualifiedName;
    }

    if (!$dara.isNull(request.relationshipGuid)) {
      query["RelationshipGuid"] = request.relationshipGuid;
    }

    if (!$dara.isNull(request.relationshipType)) {
      query["RelationshipType"] = request.relationshipType;
    }

    if (!$dara.isNull(request.srcEntityQualifiedName)) {
      query["SrcEntityQualifiedName"] = request.srcEntityQualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLineageRelation",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLineageRelationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLineageRelationResponse({}));
  }

  /**
   * Delete lineage, supports deleting user-defined lineage relationships
   * 
   * @remarks
   * This API is currently in the trial phase. Users who wish to experience it can apply, and after the administrator adds them to the trial list, they can call this API.
   * 
   * @param request - DeleteLineageRelationRequest
   * @returns DeleteLineageRelationResponse
   */
  async deleteLineageRelation(request: $_model.DeleteLineageRelationRequest): Promise<$_model.DeleteLineageRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteLineageRelationWithOptions(request, runtime);
  }

  /**
   * Deletes a category.
   * 
   * @param request - DeleteMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetaCategoryResponse
   */
  async deleteMetaCategoryWithOptions(request: $_model.DeleteMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetaCategoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetaCategoryResponse({}));
  }

  /**
   * Deletes a category.
   * 
   * @param request - DeleteMetaCategoryRequest
   * @returns DeleteMetaCategoryResponse
   */
  async deleteMetaCategory(request: $_model.DeleteMetaCategoryRequest): Promise<$_model.DeleteMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Deletes a collection.
   * 
   * @param request - DeleteMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetaCollectionResponse
   */
  async deleteMetaCollectionWithOptions(request: $_model.DeleteMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.qualifiedName)) {
      query["QualifiedName"] = request.qualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetaCollection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetaCollectionResponse({}));
  }

  /**
   * Deletes a collection.
   * 
   * @param request - DeleteMetaCollectionRequest
   * @returns DeleteMetaCollectionResponse
   */
  async deleteMetaCollection(request: $_model.DeleteMetaCollectionRequest): Promise<$_model.DeleteMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Deletes an entity from a collection.
   * 
   * @param request - DeleteMetaCollectionEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMetaCollectionEntityResponse
   */
  async deleteMetaCollectionEntityWithOptions(request: $_model.DeleteMetaCollectionEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMetaCollectionEntityResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collectionQualifiedName)) {
      query["CollectionQualifiedName"] = request.collectionQualifiedName;
    }

    if (!$dara.isNull(request.entityQualifiedName)) {
      query["EntityQualifiedName"] = request.entityQualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMetaCollectionEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMetaCollectionEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMetaCollectionEntityResponse({}));
  }

  /**
   * Deletes an entity from a collection.
   * 
   * @param request - DeleteMetaCollectionEntityRequest
   * @returns DeleteMetaCollectionEntityResponse
   */
  async deleteMetaCollectionEntity(request: $_model.DeleteMetaCollectionEntityRequest): Promise<$_model.DeleteMetaCollectionEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMetaCollectionEntityWithOptions(request, runtime);
  }

  /**
   * Removes a user from a DataWorks workspace.
   * 
   * @param request - DeleteProjectMemberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMemberWithOptions(request: $_model.DeleteProjectMemberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectMemberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProjectMember",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectMemberResponse({}));
  }

  /**
   * Removes a user from a DataWorks workspace.
   * 
   * @param request - DeleteProjectMemberRequest
   * @returns DeleteProjectMemberResponse
   */
  async deleteProjectMember(request: $_model.DeleteProjectMemberRequest): Promise<$_model.DeleteProjectMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteProjectMemberWithOptions(request, runtime);
  }

  /**
   * Deletes a partition filter expression.
   * 
   * @param request - DeleteQualityEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityEntityResponse
   */
  async deleteQualityEntityWithOptions(request: $_model.DeleteQualityEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityEntityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityEntityResponse({}));
  }

  /**
   * Deletes a partition filter expression.
   * 
   * @param request - DeleteQualityEntityRequest
   * @returns DeleteQualityEntityResponse
   */
  async deleteQualityEntity(request: $_model.DeleteQualityEntityRequest): Promise<$_model.DeleteQualityEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityEntityWithOptions(request, runtime);
  }

  /**
   * Deletes a subscriber of a partition filter expression.
   * 
   * @remarks
   * In Data Quality, you must configure monitoring rules based on a partition filter expression. Data Quality uses these rules to detect changes in source data and dirty data generated during the process of extract, transform, and load (ETL). This way, you can prevent tasks from producing unexpected dirty data that affects the smooth running of tasks and business decision-making. You can go to the Manage Subscriptions page to add subscribers for a partition filter expression. When the monitoring rule that is created based on the partition filter expression is triggered, the subscribers can receive notifications and troubleshoot errors at the earliest opportunity. For more information, see [Configure monitoring rules](https://help.aliyun.com/document_detail/73690.html).
   * 
   * @param request - DeleteQualityFollowerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityFollowerResponse
   */
  async deleteQualityFollowerWithOptions(request: $_model.DeleteQualityFollowerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityFollowerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.followerId)) {
      body["FollowerId"] = request.followerId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityFollowerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityFollowerResponse({}));
  }

  /**
   * Deletes a subscriber of a partition filter expression.
   * 
   * @remarks
   * In Data Quality, you must configure monitoring rules based on a partition filter expression. Data Quality uses these rules to detect changes in source data and dirty data generated during the process of extract, transform, and load (ETL). This way, you can prevent tasks from producing unexpected dirty data that affects the smooth running of tasks and business decision-making. You can go to the Manage Subscriptions page to add subscribers for a partition filter expression. When the monitoring rule that is created based on the partition filter expression is triggered, the subscribers can receive notifications and troubleshoot errors at the earliest opportunity. For more information, see [Configure monitoring rules](https://help.aliyun.com/document_detail/73690.html).
   * 
   * @param request - DeleteQualityFollowerRequest
   * @returns DeleteQualityFollowerResponse
   */
  async deleteQualityFollower(request: $_model.DeleteQualityFollowerRequest): Promise<$_model.DeleteQualityFollowerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityFollowerWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteQualityRelativeNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityRelativeNodeResponse
   */
  async deleteQualityRelativeNodeWithOptions(request: $_model.DeleteQualityRelativeNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityRelativeNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.targetNodeProjectId)) {
      body["TargetNodeProjectId"] = request.targetNodeProjectId;
    }

    if (!$dara.isNull(request.targetNodeProjectName)) {
      body["TargetNodeProjectName"] = request.targetNodeProjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityRelativeNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityRelativeNodeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityRelativeNodeResponse({}));
  }

  /**
   * @param request - DeleteQualityRelativeNodeRequest
   * @returns DeleteQualityRelativeNodeResponse
   */
  async deleteQualityRelativeNode(request: $_model.DeleteQualityRelativeNodeRequest): Promise<$_model.DeleteQualityRelativeNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityRelativeNodeWithOptions(request, runtime);
  }

  /**
   * Deletes a monitoring rule.
   * 
   * @param request - DeleteQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRuleWithOptions(request: $_model.DeleteQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteQualityRuleResponse({}));
  }

  /**
   * Deletes a monitoring rule.
   * 
   * @param request - DeleteQualityRuleRequest
   * @returns DeleteQualityRuleResponse
   */
  async deleteQualityRule(request: $_model.DeleteQualityRuleRequest): Promise<$_model.DeleteQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteQualityRuleWithOptions(request, runtime);
  }

  /**
   * Deletes sensitive field types.
   * 
   * @param request - DeleteRecognizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRecognizeRuleResponse
   */
  async deleteRecognizeRuleWithOptions(request: $_model.DeleteRecognizeRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRecognizeRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sensitiveId)) {
      body["SensitiveId"] = request.sensitiveId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRecognizeRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRecognizeRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRecognizeRuleResponse({}));
  }

  /**
   * Deletes sensitive field types.
   * 
   * @param request - DeleteRecognizeRuleRequest
   * @returns DeleteRecognizeRuleResponse
   */
  async deleteRecognizeRule(request: $_model.DeleteRecognizeRuleRequest): Promise<$_model.DeleteRecognizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRecognizeRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a custom alert rule.
   * 
   * @param request - DeleteRemindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRemindResponse
   */
  async deleteRemindWithOptions(request: $_model.DeleteRemindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRemindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRemindResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRemindResponse({}));
  }

  /**
   * Deletes a custom alert rule.
   * 
   * @param request - DeleteRemindRequest
   * @returns DeleteRemindResponse
   */
  async deleteRemind(request: $_model.DeleteRemindRequest): Promise<$_model.DeleteRemindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRemindWithOptions(request, runtime);
  }

  /**
   * @param request - DeleteTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableResponse
   */
  async deleteTableWithOptions(request: $_model.DeleteTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableResponse({}));
  }

  /**
   * @param request - DeleteTableRequest
   * @returns DeleteTableResponse
   */
  async deleteTable(request: $_model.DeleteTableRequest): Promise<$_model.DeleteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTableWithOptions(request, runtime);
  }

  /**
   * Deletes a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - DeleteTableLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableLevelResponse
   */
  async deleteTableLevelWithOptions(request: $_model.DeleteTableLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableLevelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableLevelResponse({}));
  }

  /**
   * Deletes a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - DeleteTableLevelRequest
   * @returns DeleteTableLevelResponse
   */
  async deleteTableLevel(request: $_model.DeleteTableLevelRequest): Promise<$_model.DeleteTableLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTableLevelWithOptions(request, runtime);
  }

  /**
   * Deletes a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - DeleteTableThemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableThemeResponse
   */
  async deleteTableThemeWithOptions(request: $_model.DeleteTableThemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableThemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.themeId)) {
      query["ThemeId"] = request.themeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableThemeResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableThemeResponse({}));
  }

  /**
   * Deletes a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - DeleteTableThemeRequest
   * @returns DeleteTableThemeResponse
   */
  async deleteTableTheme(request: $_model.DeleteTableThemeRequest): Promise<$_model.DeleteTableThemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTableThemeWithOptions(request, runtime);
  }

  /**
   * Deploys a real-time synchronization task.
   * 
   * @param request - DeployDISyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployDISyncTaskResponse
   */
  async deployDISyncTaskWithOptions(request: $_model.DeployDISyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployDISyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployDISyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeployDISyncTaskResponse({}));
  }

  /**
   * Deploys a real-time synchronization task.
   * 
   * @param request - DeployDISyncTaskRequest
   * @returns DeployDISyncTaskResponse
   */
  async deployDISyncTask(request: $_model.DeployDISyncTaskRequest): Promise<$_model.DeployDISyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployDISyncTaskWithOptions(request, runtime);
  }

  /**
   * Deploys a file to the production environment.
   * 
   * @param request - DeployFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployFileResponse
   */
  async deployFileWithOptions(request: $_model.DeployFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployFileResponse>(await this.callApi(params, req, runtime), new $_model.DeployFileResponse({}));
  }

  /**
   * Deploys a file to the production environment.
   * 
   * @param request - DeployFileRequest
   * @returns DeployFileResponse
   */
  async deployFile(request: $_model.DeployFileRequest): Promise<$_model.DeployFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployFileWithOptions(request, runtime);
  }

  /**
   * Masks data.
   * 
   * @param request - DesensitizeDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DesensitizeDataResponse
   */
  async desensitizeDataWithOptions(request: $_model.DesensitizeDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DesensitizeDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DesensitizeData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DesensitizeDataResponse>(await this.callApi(params, req, runtime), new $_model.DesensitizeDataResponse({}));
  }

  /**
   * Masks data.
   * 
   * @param request - DesensitizeDataRequest
   * @returns DesensitizeDataResponse
   */
  async desensitizeData(request: $_model.DesensitizeDataRequest): Promise<$_model.DesensitizeDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.desensitizeDataWithOptions(request, runtime);
  }

  /**
   * Adds or modifies a data masking rule.
   * 
   * @param tmpReq - DsgDesensPlanAddOrUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgDesensPlanAddOrUpdateResponse
   */
  async dsgDesensPlanAddOrUpdateWithOptions(tmpReq: $_model.DsgDesensPlanAddOrUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgDesensPlanAddOrUpdateResponse> {
    tmpReq.validate();
    let request = new $_model.DsgDesensPlanAddOrUpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.desensRules)) {
      request.desensRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.desensRules, "DesensRules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.desensRulesShrink)) {
      query["DesensRules"] = request.desensRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgDesensPlanAddOrUpdate",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgDesensPlanAddOrUpdateResponse>(await this.callApi(params, req, runtime), new $_model.DsgDesensPlanAddOrUpdateResponse({}));
  }

  /**
   * Adds or modifies a data masking rule.
   * 
   * @param request - DsgDesensPlanAddOrUpdateRequest
   * @returns DsgDesensPlanAddOrUpdateResponse
   */
  async dsgDesensPlanAddOrUpdate(request: $_model.DsgDesensPlanAddOrUpdateRequest): Promise<$_model.DsgDesensPlanAddOrUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgDesensPlanAddOrUpdateWithOptions(request, runtime);
  }

  /**
   * Deletes a data masking rule created in Data Security Guard.
   * 
   * @param tmpReq - DsgDesensPlanDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgDesensPlanDeleteResponse
   */
  async dsgDesensPlanDeleteWithOptions(tmpReq: $_model.DsgDesensPlanDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgDesensPlanDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.DsgDesensPlanDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgDesensPlanDelete",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgDesensPlanDeleteResponse>(await this.callApi(params, req, runtime), new $_model.DsgDesensPlanDeleteResponse({}));
  }

  /**
   * Deletes a data masking rule created in Data Security Guard.
   * 
   * @param request - DsgDesensPlanDeleteRequest
   * @returns DsgDesensPlanDeleteResponse
   */
  async dsgDesensPlanDelete(request: $_model.DsgDesensPlanDeleteRequest): Promise<$_model.DsgDesensPlanDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgDesensPlanDeleteWithOptions(request, runtime);
  }

  /**
   * Queries a list of data masking rules.
   * 
   * @param request - DsgDesensPlanQueryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgDesensPlanQueryListResponse
   */
  async dsgDesensPlanQueryListWithOptions(request: $_model.DsgDesensPlanQueryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgDesensPlanQueryListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgDesensPlanQueryList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgDesensPlanQueryListResponse>(await this.callApi(params, req, runtime), new $_model.DsgDesensPlanQueryListResponse({}));
  }

  /**
   * Queries a list of data masking rules.
   * 
   * @param request - DsgDesensPlanQueryListRequest
   * @returns DsgDesensPlanQueryListResponse
   */
  async dsgDesensPlanQueryList(request: $_model.DsgDesensPlanQueryListRequest): Promise<$_model.DsgDesensPlanQueryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgDesensPlanQueryListWithOptions(request, runtime);
  }

  /**
   * Modifies the status of a data masking rule.
   * 
   * @param tmpReq - DsgDesensPlanUpdateStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgDesensPlanUpdateStatusResponse
   */
  async dsgDesensPlanUpdateStatusWithOptions(tmpReq: $_model.DsgDesensPlanUpdateStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgDesensPlanUpdateStatusResponse> {
    tmpReq.validate();
    let request = new $_model.DsgDesensPlanUpdateStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.sceneCode)) {
      query["SceneCode"] = request.sceneCode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgDesensPlanUpdateStatus",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgDesensPlanUpdateStatusResponse>(await this.callApi(params, req, runtime), new $_model.DsgDesensPlanUpdateStatusResponse({}));
  }

  /**
   * Modifies the status of a data masking rule.
   * 
   * @param request - DsgDesensPlanUpdateStatusRequest
   * @returns DsgDesensPlanUpdateStatusResponse
   */
  async dsgDesensPlanUpdateStatus(request: $_model.DsgDesensPlanUpdateStatusRequest): Promise<$_model.DsgDesensPlanUpdateStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgDesensPlanUpdateStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of compute engines of different types in the current tenant.
   * 
   * @param request - DsgPlatformQueryProjectsAndSchemaFromMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgPlatformQueryProjectsAndSchemaFromMetaResponse
   */
  async dsgPlatformQueryProjectsAndSchemaFromMetaWithOptions(request: $_model.DsgPlatformQueryProjectsAndSchemaFromMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgPlatformQueryProjectsAndSchemaFromMetaResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgPlatformQueryProjectsAndSchemaFromMeta",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgPlatformQueryProjectsAndSchemaFromMetaResponse>(await this.callApi(params, req, runtime), new $_model.DsgPlatformQueryProjectsAndSchemaFromMetaResponse({}));
  }

  /**
   * Queries a list of compute engines of different types in the current tenant.
   * 
   * @param request - DsgPlatformQueryProjectsAndSchemaFromMetaRequest
   * @returns DsgPlatformQueryProjectsAndSchemaFromMetaResponse
   */
  async dsgPlatformQueryProjectsAndSchemaFromMeta(request: $_model.DsgPlatformQueryProjectsAndSchemaFromMetaRequest): Promise<$_model.DsgPlatformQueryProjectsAndSchemaFromMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgPlatformQueryProjectsAndSchemaFromMetaWithOptions(request, runtime);
  }

  /**
   * Queries a list of available sensitive field type templates and the data masking rules supported by the templates. You can refer to the response parameters of this operation to configure a data masking rule.
   * 
   * @param request - DsgQueryDefaultTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgQueryDefaultTemplatesResponse
   */
  async dsgQueryDefaultTemplatesWithOptions(request: $_model.DsgQueryDefaultTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgQueryDefaultTemplatesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgQueryDefaultTemplates",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgQueryDefaultTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DsgQueryDefaultTemplatesResponse({}));
  }

  /**
   * Queries a list of available sensitive field type templates and the data masking rules supported by the templates. You can refer to the response parameters of this operation to configure a data masking rule.
   * 
   * @param request - DsgQueryDefaultTemplatesRequest
   * @returns DsgQueryDefaultTemplatesResponse
   */
  async dsgQueryDefaultTemplates(request: $_model.DsgQueryDefaultTemplatesRequest): Promise<$_model.DsgQueryDefaultTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgQueryDefaultTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the identification results of sensitive data.
   * 
   * @remarks
   * The query capability of the API operation is similar to the query feature in Data Security Guard in the DataWorks console. The API operation can be used to query the identification results of sensitive data of a tenant based on the association with the tenant ID.
   * *   You can search for a specific identification result based on filter conditions such as data source type and workspace.
   * *   You can sort the identification results of sensitive data of a tenant based on the values of a field in ascending or descending order.
   * *   This operation supports paged query.
   * 
   * @param request - DsgQuerySensResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgQuerySensResultResponse
   */
  async dsgQuerySensResultWithOptions(request: $_model.DsgQuerySensResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgQuerySensResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.col)) {
      body["Col"] = request.col;
    }

    if (!$dara.isNull(request.dbType)) {
      body["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.level)) {
      body["Level"] = request.level;
    }

    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.order)) {
      body["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderField)) {
      body["OrderField"] = request.orderField;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.schemaName)) {
      body["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.sensStatus)) {
      body["SensStatus"] = request.sensStatus;
    }

    if (!$dara.isNull(request.sensitiveId)) {
      body["SensitiveId"] = request.sensitiveId;
    }

    if (!$dara.isNull(request.sensitiveName)) {
      body["SensitiveName"] = request.sensitiveName;
    }

    if (!$dara.isNull(request.table)) {
      body["Table"] = request.table;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgQuerySensResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgQuerySensResultResponse>(await this.callApi(params, req, runtime), new $_model.DsgQuerySensResultResponse({}));
  }

  /**
   * Queries the identification results of sensitive data.
   * 
   * @remarks
   * The query capability of the API operation is similar to the query feature in Data Security Guard in the DataWorks console. The API operation can be used to query the identification results of sensitive data of a tenant based on the association with the tenant ID.
   * *   You can search for a specific identification result based on filter conditions such as data source type and workspace.
   * *   You can sort the identification results of sensitive data of a tenant based on the values of a field in ascending or descending order.
   * *   This operation supports paged query.
   * 
   * @param request - DsgQuerySensResultRequest
   * @returns DsgQuerySensResultResponse
   */
  async dsgQuerySensResult(request: $_model.DsgQuerySensResultRequest): Promise<$_model.DsgQuerySensResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgQuerySensResultWithOptions(request, runtime);
  }

  /**
   * Starts a sensitive data identification task in Data Security Guard.
   * 
   * @param tmpReq - DsgRunSensIdentifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgRunSensIdentifyResponse
   */
  async dsgRunSensIdentifyWithOptions(tmpReq: $_model.DsgRunSensIdentifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgRunSensIdentifyResponse> {
    tmpReq.validate();
    let request = new $_model.DsgRunSensIdentifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.esMetaParams)) {
      request.esMetaParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.esMetaParams, "EsMetaParams", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.esMetaParamsShrink)) {
      body["EsMetaParams"] = request.esMetaParamsShrink;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgRunSensIdentify",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgRunSensIdentifyResponse>(await this.callApi(params, req, runtime), new $_model.DsgRunSensIdentifyResponse({}));
  }

  /**
   * Starts a sensitive data identification task in Data Security Guard.
   * 
   * @param request - DsgRunSensIdentifyRequest
   * @returns DsgRunSensIdentifyResponse
   */
  async dsgRunSensIdentify(request: $_model.DsgRunSensIdentifyRequest): Promise<$_model.DsgRunSensIdentifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgRunSensIdentifyWithOptions(request, runtime);
  }

  /**
   * Adds or modifies a level-2 data masking scenario.
   * 
   * @param tmpReq - DsgSceneAddOrUpdateSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgSceneAddOrUpdateSceneResponse
   */
  async dsgSceneAddOrUpdateSceneWithOptions(tmpReq: $_model.DsgSceneAddOrUpdateSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgSceneAddOrUpdateSceneResponse> {
    tmpReq.validate();
    let request = new $_model.DsgSceneAddOrUpdateSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.scenes)) {
      request.scenesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scenes, "scenes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.scenesShrink)) {
      query["scenes"] = request.scenesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgSceneAddOrUpdateScene",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgSceneAddOrUpdateSceneResponse>(await this.callApi(params, req, runtime), new $_model.DsgSceneAddOrUpdateSceneResponse({}));
  }

  /**
   * Adds or modifies a level-2 data masking scenario.
   * 
   * @param request - DsgSceneAddOrUpdateSceneRequest
   * @returns DsgSceneAddOrUpdateSceneResponse
   */
  async dsgSceneAddOrUpdateScene(request: $_model.DsgSceneAddOrUpdateSceneRequest): Promise<$_model.DsgSceneAddOrUpdateSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgSceneAddOrUpdateSceneWithOptions(request, runtime);
  }

  /**
   * Queries a list of data masking scenarios.
   * 
   * @param request - DsgSceneQuerySceneListByNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgSceneQuerySceneListByNameResponse
   */
  async dsgSceneQuerySceneListByNameWithOptions(request: $_model.DsgSceneQuerySceneListByNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgSceneQuerySceneListByNameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgSceneQuerySceneListByName",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgSceneQuerySceneListByNameResponse>(await this.callApi(params, req, runtime), new $_model.DsgSceneQuerySceneListByNameResponse({}));
  }

  /**
   * Queries a list of data masking scenarios.
   * 
   * @param request - DsgSceneQuerySceneListByNameRequest
   * @returns DsgSceneQuerySceneListByNameResponse
   */
  async dsgSceneQuerySceneListByName(request: $_model.DsgSceneQuerySceneListByNameRequest): Promise<$_model.DsgSceneQuerySceneListByNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgSceneQuerySceneListByNameWithOptions(request, runtime);
  }

  /**
   * Deletes a level-2 data masking scenario created in Data Security Guard.
   * 
   * @param tmpReq - DsgScenedDeleteSceneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgScenedDeleteSceneResponse
   */
  async dsgScenedDeleteSceneWithOptions(tmpReq: $_model.DsgScenedDeleteSceneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgScenedDeleteSceneResponse> {
    tmpReq.validate();
    let request = new $_model.DsgScenedDeleteSceneShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgScenedDeleteScene",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgScenedDeleteSceneResponse>(await this.callApi(params, req, runtime), new $_model.DsgScenedDeleteSceneResponse({}));
  }

  /**
   * Deletes a level-2 data masking scenario created in Data Security Guard.
   * 
   * @param request - DsgScenedDeleteSceneRequest
   * @returns DsgScenedDeleteSceneResponse
   */
  async dsgScenedDeleteScene(request: $_model.DsgScenedDeleteSceneRequest): Promise<$_model.DsgScenedDeleteSceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgScenedDeleteSceneWithOptions(request, runtime);
  }

  /**
   * Stops a sensitive data identification task.
   * 
   * @param request - DsgStopSensIdentifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgStopSensIdentifyResponse
   */
  async dsgStopSensIdentifyWithOptions(request: $_model.DsgStopSensIdentifyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgStopSensIdentifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgStopSensIdentify",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgStopSensIdentifyResponse>(await this.callApi(params, req, runtime), new $_model.DsgStopSensIdentifyResponse({}));
  }

  /**
   * Stops a sensitive data identification task.
   * 
   * @param request - DsgStopSensIdentifyRequest
   * @returns DsgStopSensIdentifyResponse
   */
  async dsgStopSensIdentify(request: $_model.DsgStopSensIdentifyRequest): Promise<$_model.DsgStopSensIdentifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgStopSensIdentifyWithOptions(request, runtime);
  }

  /**
   * Adds or modifies a user group.
   * 
   * @param tmpReq - DsgUserGroupAddOrUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgUserGroupAddOrUpdateResponse
   */
  async dsgUserGroupAddOrUpdateWithOptions(tmpReq: $_model.DsgUserGroupAddOrUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgUserGroupAddOrUpdateResponse> {
    tmpReq.validate();
    let request = new $_model.DsgUserGroupAddOrUpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.userGroups)) {
      request.userGroupsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.userGroups, "UserGroups", "json");
    }

    let query = { };
    if (!$dara.isNull(request.userGroupsShrink)) {
      query["UserGroups"] = request.userGroupsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgUserGroupAddOrUpdate",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgUserGroupAddOrUpdateResponse>(await this.callApi(params, req, runtime), new $_model.DsgUserGroupAddOrUpdateResponse({}));
  }

  /**
   * Adds or modifies a user group.
   * 
   * @param request - DsgUserGroupAddOrUpdateRequest
   * @returns DsgUserGroupAddOrUpdateResponse
   */
  async dsgUserGroupAddOrUpdate(request: $_model.DsgUserGroupAddOrUpdateRequest): Promise<$_model.DsgUserGroupAddOrUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgUserGroupAddOrUpdateWithOptions(request, runtime);
  }

  /**
   * Deletes a user group configured in Data Security Guard.
   * 
   * @param tmpReq - DsgUserGroupDeleteRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgUserGroupDeleteResponse
   */
  async dsgUserGroupDeleteWithOptions(tmpReq: $_model.DsgUserGroupDeleteRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgUserGroupDeleteResponse> {
    tmpReq.validate();
    let request = new $_model.DsgUserGroupDeleteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgUserGroupDelete",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgUserGroupDeleteResponse>(await this.callApi(params, req, runtime), new $_model.DsgUserGroupDeleteResponse({}));
  }

  /**
   * Deletes a user group configured in Data Security Guard.
   * 
   * @param request - DsgUserGroupDeleteRequest
   * @returns DsgUserGroupDeleteResponse
   */
  async dsgUserGroupDelete(request: $_model.DsgUserGroupDeleteRequest): Promise<$_model.DsgUserGroupDeleteResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgUserGroupDeleteWithOptions(request, runtime);
  }

  /**
   * Queries a list of MaxCompute roles that can be selected by the members of a user group when the user group is created or modified by the tenant in Data Security Guard.
   * 
   * @param request - DsgUserGroupGetOdpsRoleGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgUserGroupGetOdpsRoleGroupsResponse
   */
  async dsgUserGroupGetOdpsRoleGroupsWithOptions(request: $_model.DsgUserGroupGetOdpsRoleGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgUserGroupGetOdpsRoleGroupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgUserGroupGetOdpsRoleGroups",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgUserGroupGetOdpsRoleGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DsgUserGroupGetOdpsRoleGroupsResponse({}));
  }

  /**
   * Queries a list of MaxCompute roles that can be selected by the members of a user group when the user group is created or modified by the tenant in Data Security Guard.
   * 
   * @param request - DsgUserGroupGetOdpsRoleGroupsRequest
   * @returns DsgUserGroupGetOdpsRoleGroupsResponse
   */
  async dsgUserGroupGetOdpsRoleGroups(request: $_model.DsgUserGroupGetOdpsRoleGroupsRequest): Promise<$_model.DsgUserGroupGetOdpsRoleGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgUserGroupGetOdpsRoleGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of user groups in Data Security Guard.
   * 
   * @param request - DsgUserGroupQueryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgUserGroupQueryListResponse
   */
  async dsgUserGroupQueryListWithOptions(request: $_model.DsgUserGroupQueryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgUserGroupQueryListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgUserGroupQueryList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgUserGroupQueryListResponse>(await this.callApi(params, req, runtime), new $_model.DsgUserGroupQueryListResponse({}));
  }

  /**
   * Queries a list of user groups in Data Security Guard.
   * 
   * @param request - DsgUserGroupQueryListRequest
   * @returns DsgUserGroupQueryListResponse
   */
  async dsgUserGroupQueryList(request: $_model.DsgUserGroupQueryListRequest): Promise<$_model.DsgUserGroupQueryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgUserGroupQueryListWithOptions(request, runtime);
  }

  /**
   * Queries a list of users or roles of the current tenant.
   * 
   * @param request - DsgUserGroupQueryUserListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgUserGroupQueryUserListResponse
   */
  async dsgUserGroupQueryUserListWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DsgUserGroupQueryUserListResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DsgUserGroupQueryUserList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgUserGroupQueryUserListResponse>(await this.callApi(params, req, runtime), new $_model.DsgUserGroupQueryUserListResponse({}));
  }

  /**
   * Queries a list of users or roles of the current tenant.
   * @returns DsgUserGroupQueryUserListResponse
   */
  async dsgUserGroupQueryUserList(): Promise<$_model.DsgUserGroupQueryUserListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgUserGroupQueryUserListWithOptions(runtime);
  }

  /**
   * Adds or modifies a data masking whitelist.
   * 
   * @param tmpReq - DsgWhiteListAddOrUpdateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgWhiteListAddOrUpdateResponse
   */
  async dsgWhiteListAddOrUpdateWithOptions(tmpReq: $_model.DsgWhiteListAddOrUpdateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgWhiteListAddOrUpdateResponse> {
    tmpReq.validate();
    let request = new $_model.DsgWhiteListAddOrUpdateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.whiteLists)) {
      request.whiteListsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.whiteLists, "WhiteLists", "json");
    }

    let query = { };
    if (!$dara.isNull(request.whiteListsShrink)) {
      query["WhiteLists"] = request.whiteListsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgWhiteListAddOrUpdate",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgWhiteListAddOrUpdateResponse>(await this.callApi(params, req, runtime), new $_model.DsgWhiteListAddOrUpdateResponse({}));
  }

  /**
   * Adds or modifies a data masking whitelist.
   * 
   * @param request - DsgWhiteListAddOrUpdateRequest
   * @returns DsgWhiteListAddOrUpdateResponse
   */
  async dsgWhiteListAddOrUpdate(request: $_model.DsgWhiteListAddOrUpdateRequest): Promise<$_model.DsgWhiteListAddOrUpdateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgWhiteListAddOrUpdateWithOptions(request, runtime);
  }

  /**
   * Deletes a data masking whitelist configured in Data Security Guard.
   * 
   * @param tmpReq - DsgWhiteListDeleteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgWhiteListDeleteListResponse
   */
  async dsgWhiteListDeleteListWithOptions(tmpReq: $_model.DsgWhiteListDeleteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgWhiteListDeleteListResponse> {
    tmpReq.validate();
    let request = new $_model.DsgWhiteListDeleteListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgWhiteListDeleteList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgWhiteListDeleteListResponse>(await this.callApi(params, req, runtime), new $_model.DsgWhiteListDeleteListResponse({}));
  }

  /**
   * Deletes a data masking whitelist configured in Data Security Guard.
   * 
   * @param request - DsgWhiteListDeleteListRequest
   * @returns DsgWhiteListDeleteListResponse
   */
  async dsgWhiteListDeleteList(request: $_model.DsgWhiteListDeleteListRequest): Promise<$_model.DsgWhiteListDeleteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgWhiteListDeleteListWithOptions(request, runtime);
  }

  /**
   * Queries a data masking whitelist.
   * 
   * @param request - DsgWhiteListQueryListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DsgWhiteListQueryListResponse
   */
  async dsgWhiteListQueryListWithOptions(request: $_model.DsgWhiteListQueryListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DsgWhiteListQueryListResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DsgWhiteListQueryList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DsgWhiteListQueryListResponse>(await this.callApi(params, req, runtime), new $_model.DsgWhiteListQueryListResponse({}));
  }

  /**
   * Queries a data masking whitelist.
   * 
   * @param request - DsgWhiteListQueryListRequest
   * @returns DsgWhiteListQueryListResponse
   */
  async dsgWhiteListQueryList(request: $_model.DsgWhiteListQueryListRequest): Promise<$_model.DsgWhiteListQueryListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.dsgWhiteListQueryListWithOptions(request, runtime);
  }

  /**
   * Edits a sensitive field that is defined based on the category and sensitivity level of data in Data Security Guard.
   * 
   * @param request - EditRecognizeRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditRecognizeRuleResponse
   */
  async editRecognizeRuleWithOptions(request: $_model.EditRecognizeRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EditRecognizeRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountName)) {
      body["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.colExclude)) {
      body["ColExclude"] = request.colExclude;
    }

    if (!$dara.isNull(request.colScan)) {
      body["ColScan"] = request.colScan;
    }

    if (!$dara.isNull(request.commentScan)) {
      body["CommentScan"] = request.commentScan;
    }

    if (!$dara.isNull(request.contentScan)) {
      body["ContentScan"] = request.contentScan;
    }

    if (!$dara.isNull(request.hitThreshold)) {
      body["HitThreshold"] = request.hitThreshold;
    }

    if (!$dara.isNull(request.levelName)) {
      body["LevelName"] = request.levelName;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeParent)) {
      body["NodeParent"] = request.nodeParent;
    }

    if (!$dara.isNull(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!$dara.isNull(request.recognizeRules)) {
      body["RecognizeRules"] = request.recognizeRules;
    }

    if (!$dara.isNull(request.recognizeRulesType)) {
      body["RecognizeRulesType"] = request.recognizeRulesType;
    }

    if (!$dara.isNull(request.sensitiveDescription)) {
      body["SensitiveDescription"] = request.sensitiveDescription;
    }

    if (!$dara.isNull(request.sensitiveId)) {
      body["SensitiveId"] = request.sensitiveId;
    }

    if (!$dara.isNull(request.sensitiveName)) {
      body["SensitiveName"] = request.sensitiveName;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.level)) {
      body["level"] = request.level;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditRecognizeRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditRecognizeRuleResponse>(await this.callApi(params, req, runtime), new $_model.EditRecognizeRuleResponse({}));
  }

  /**
   * Edits a sensitive field that is defined based on the category and sensitivity level of data in Data Security Guard.
   * 
   * @param request - EditRecognizeRuleRequest
   * @returns EditRecognizeRuleResponse
   */
  async editRecognizeRule(request: $_model.EditRecognizeRuleRequest): Promise<$_model.EditRecognizeRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.editRecognizeRuleWithOptions(request, runtime);
  }

  /**
   * @param request - EstablishRelationTableToBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EstablishRelationTableToBusinessResponse
   */
  async establishRelationTableToBusinessWithOptions(request: $_model.EstablishRelationTableToBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EstablishRelationTableToBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.tableGuid)) {
      body["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EstablishRelationTableToBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EstablishRelationTableToBusinessResponse>(await this.callApi(params, req, runtime), new $_model.EstablishRelationTableToBusinessResponse({}));
  }

  /**
   * @param request - EstablishRelationTableToBusinessRequest
   * @returns EstablishRelationTableToBusinessResponse
   */
  async establishRelationTableToBusiness(request: $_model.EstablishRelationTableToBusinessRequest): Promise<$_model.EstablishRelationTableToBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.establishRelationTableToBusinessWithOptions(request, runtime);
  }

  /**
   * Exports a list of data sources.
   * 
   * @param request - ExportDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportDataSourcesResponse
   */
  async exportDataSourcesWithOptions(request: $_model.ExportDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportDataSourcesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ExportDataSourcesResponse({}));
  }

  /**
   * Exports a list of data sources.
   * 
   * @param request - ExportDataSourcesRequest
   * @returns ExportDataSourcesResponse
   */
  async exportDataSources(request: $_model.ExportDataSourcesRequest): Promise<$_model.ExportDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportDataSourcesWithOptions(request, runtime);
  }

  /**
   * Generates an ID for an asynchronous thread that is used to create a synchronization task in Data Integration.
   * 
   * @remarks
   * DataWorks allows you to use the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to directly create a batch synchronization task in Data Integration. To create a real-time synchronization task or another type of synchronization task, you must first call the [GenerateDISyncTaskConfigForCreating](https://help.aliyun.com/document_detail/383463.html) operation to generate the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can use the parameters as request parameters of [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) and call the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to create a real-time synchronization task or another type of synchronization task. DataWorks allows you to create real-time synchronization tasks and other types of synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - GenerateDISyncTaskConfigForCreatingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDISyncTaskConfigForCreatingResponse
   */
  async generateDISyncTaskConfigForCreatingWithOptions(request: $_model.GenerateDISyncTaskConfigForCreatingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDISyncTaskConfigForCreatingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateDISyncTaskConfigForCreating",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDISyncTaskConfigForCreatingResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDISyncTaskConfigForCreatingResponse({}));
  }

  /**
   * Generates an ID for an asynchronous thread that is used to create a synchronization task in Data Integration.
   * 
   * @remarks
   * DataWorks allows you to use the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to directly create a batch synchronization task in Data Integration. To create a real-time synchronization task or another type of synchronization task, you must first call the [GenerateDISyncTaskConfigForCreating](https://help.aliyun.com/document_detail/383463.html) operation to generate the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can use the parameters as request parameters of [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) and call the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to create a real-time synchronization task or another type of synchronization task. DataWorks allows you to create real-time synchronization tasks and other types of synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - GenerateDISyncTaskConfigForCreatingRequest
   * @returns GenerateDISyncTaskConfigForCreatingResponse
   */
  async generateDISyncTaskConfigForCreating(request: $_model.GenerateDISyncTaskConfigForCreatingRequest): Promise<$_model.GenerateDISyncTaskConfigForCreatingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDISyncTaskConfigForCreatingWithOptions(request, runtime);
  }

  /**
   * Generates the JSON for an asynchronous thread that is used to update a real-time synchronization task in Data Integration.
   * 
   * @remarks
   * DataWorks allows you to use only the [UpdateDISyncTask](https://help.aliyun.com/document_detail/289109.html) operation to update a batch synchronization task in Data Integration. To update a real-time synchronization task, you must first call the GenerateDISyncTaskConfigForUpdating operation to generate the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can call the UpdateDISyncTask operation and use the parameters as request parameters to update a real-time synchronization task in Data Integration. DataWorks allows you to create or update real-time synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - GenerateDISyncTaskConfigForUpdatingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateDISyncTaskConfigForUpdatingResponse
   */
  async generateDISyncTaskConfigForUpdatingWithOptions(request: $_model.GenerateDISyncTaskConfigForUpdatingRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateDISyncTaskConfigForUpdatingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateDISyncTaskConfigForUpdating",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateDISyncTaskConfigForUpdatingResponse>(await this.callApi(params, req, runtime), new $_model.GenerateDISyncTaskConfigForUpdatingResponse({}));
  }

  /**
   * Generates the JSON for an asynchronous thread that is used to update a real-time synchronization task in Data Integration.
   * 
   * @remarks
   * DataWorks allows you to use only the [UpdateDISyncTask](https://help.aliyun.com/document_detail/289109.html) operation to update a batch synchronization task in Data Integration. To update a real-time synchronization task, you must first call the GenerateDISyncTaskConfigForUpdating operation to generate the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can call the UpdateDISyncTask operation and use the parameters as request parameters to update a real-time synchronization task in Data Integration. DataWorks allows you to create or update real-time synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - GenerateDISyncTaskConfigForUpdatingRequest
   * @returns GenerateDISyncTaskConfigForUpdatingResponse
   */
  async generateDISyncTaskConfigForUpdating(request: $_model.GenerateDISyncTaskConfigForUpdatingRequest): Promise<$_model.GenerateDISyncTaskConfigForUpdatingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateDISyncTaskConfigForUpdatingWithOptions(request, runtime);
  }

  /**
   * Queries alert information based on the alert ID that is specified by the AlertId parameter.
   * 
   * @param request - GetAlertMessageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlertMessageResponse
   */
  async getAlertMessageWithOptions(request: $_model.GetAlertMessageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAlertMessageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertId)) {
      body["AlertId"] = request.alertId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlertMessage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAlertMessageResponse>(await this.callApi(params, req, runtime), new $_model.GetAlertMessageResponse({}));
  }

  /**
   * Queries alert information based on the alert ID that is specified by the AlertId parameter.
   * 
   * @param request - GetAlertMessageRequest
   * @returns GetAlertMessageResponse
   */
  async getAlertMessage(request: $_model.GetAlertMessageRequest): Promise<$_model.GetAlertMessageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAlertMessageWithOptions(request, runtime);
  }

  /**
   * Queries the information about a baseline based on its ID.
   * 
   * @param request - GetBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineResponse
   */
  async getBaselineWithOptions(request: $_model.GetBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaselineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaselineResponse>(await this.callApi(params, req, runtime), new $_model.GetBaselineResponse({}));
  }

  /**
   * Queries the information about a baseline based on its ID.
   * 
   * @param request - GetBaselineRequest
   * @returns GetBaselineResponse
   */
  async getBaseline(request: $_model.GetBaselineRequest): Promise<$_model.GetBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a baseline.
   * 
   * @param request - GetBaselineConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineConfigResponse
   */
  async getBaselineConfigWithOptions(request: $_model.GetBaselineConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaselineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaselineConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaselineConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetBaselineConfigResponse({}));
  }

  /**
   * Queries the configurations of a baseline.
   * 
   * @param request - GetBaselineConfigRequest
   * @returns GetBaselineConfigResponse
   */
  async getBaselineConfig(request: $_model.GetBaselineConfigRequest): Promise<$_model.GetBaselineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineConfigWithOptions(request, runtime);
  }

  /**
   * The information about the events that are associated with the instance.
   * 
   * @param request - GetBaselineKeyPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineKeyPathResponse
   */
  async getBaselineKeyPathWithOptions(request: $_model.GetBaselineKeyPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaselineKeyPathResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.inGroupId)) {
      body["InGroupId"] = request.inGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaselineKeyPath",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaselineKeyPathResponse>(await this.callApi(params, req, runtime), new $_model.GetBaselineKeyPathResponse({}));
  }

  /**
   * The information about the events that are associated with the instance.
   * 
   * @param request - GetBaselineKeyPathRequest
   * @returns GetBaselineKeyPathResponse
   */
  async getBaselineKeyPath(request: $_model.GetBaselineKeyPathRequest): Promise<$_model.GetBaselineKeyPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineKeyPathWithOptions(request, runtime);
  }

  /**
   * Queries the details of a baseline instance.
   * 
   * @param request - GetBaselineStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBaselineStatusResponse
   */
  async getBaselineStatusWithOptions(request: $_model.GetBaselineStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBaselineStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.inGroupId)) {
      body["InGroupId"] = request.inGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBaselineStatus",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBaselineStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetBaselineStatusResponse({}));
  }

  /**
   * Queries the details of a baseline instance.
   * 
   * @param request - GetBaselineStatusRequest
   * @returns GetBaselineStatusResponse
   */
  async getBaselineStatus(request: $_model.GetBaselineStatusRequest): Promise<$_model.GetBaselineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBaselineStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about a workflow.
   * 
   * @param request - GetBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBusinessResponse
   */
  async getBusinessWithOptions(request: $_model.GetBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBusinessResponse>(await this.callApi(params, req, runtime), new $_model.GetBusinessResponse({}));
  }

  /**
   * Queries the information about a workflow.
   * 
   * @param request - GetBusinessRequest
   * @returns GetBusinessResponse
   */
  async getBusiness(request: $_model.GetBusinessRequest): Promise<$_model.GetBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBusinessWithOptions(request, runtime);
  }

  /**
   * Queries the status of a table creation, update, or deletion task.
   * 
   * @param request - GetDDLJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDDLJobStatusResponse
   */
  async getDDLJobStatusWithOptions(request: $_model.GetDDLJobStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDDLJobStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDDLJobStatus",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDDLJobStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetDDLJobStatusResponse({}));
  }

  /**
   * Queries the status of a table creation, update, or deletion task.
   * 
   * @param request - GetDDLJobStatusRequest
   * @returns GetDDLJobStatusResponse
   */
  async getDDLJobStatus(request: $_model.GetDDLJobStatusRequest): Promise<$_model.GetDDLJobStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDDLJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an alert rule configured for a new-version synchronization task. Only the following types of tasks are supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param request - GetDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIAlarmRuleResponse
   */
  async getDIAlarmRuleWithOptions(request: $_model.GetDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDIAlarmRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIAlarmRuleId)) {
      body["DIAlarmRuleId"] = request.DIAlarmRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDIAlarmRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetDIAlarmRuleResponse({}));
  }

  /**
   * Queries the details of an alert rule configured for a new-version synchronization task. Only the following types of tasks are supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param request - GetDIAlarmRuleRequest
   * @returns GetDIAlarmRuleResponse
   */
  async getDIAlarmRule(request: $_model.GetDIAlarmRuleRequest): Promise<$_model.GetDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about a new-version synchronization task created in Data Integration. The following types of synchronization tasks are supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param request - GetDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDIJobResponse
   */
  async getDIJobWithOptions(request: $_model.GetDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDIJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    if (!$dara.isNull(request.withDetails)) {
      body["WithDetails"] = request.withDetails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDIJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDIJobResponse({}));
  }

  /**
   * Queries the information about a new-version synchronization task created in Data Integration. The following types of synchronization tasks are supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param request - GetDIJobRequest
   * @returns GetDIJobResponse
   */
  async getDIJob(request: $_model.GetDIJobRequest): Promise<$_model.GetDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDIJobWithOptions(request, runtime);
  }

  /**
   * Queries the status of a real-time synchronization task or a data synchronization solution.
   * 
   * @param request - GetDISyncInstanceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDISyncInstanceInfoResponse
   */
  async getDISyncInstanceInfoWithOptions(request: $_model.GetDISyncInstanceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDISyncInstanceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDISyncInstanceInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDISyncInstanceInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetDISyncInstanceInfoResponse({}));
  }

  /**
   * Queries the status of a real-time synchronization task or a data synchronization solution.
   * 
   * @param request - GetDISyncInstanceInfoRequest
   * @returns GetDISyncInstanceInfoResponse
   */
  async getDISyncInstanceInfo(request: $_model.GetDISyncInstanceInfoRequest): Promise<$_model.GetDISyncInstanceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDISyncInstanceInfoWithOptions(request, runtime);
  }

  /**
   * Queries the details of a real-time synchronization task or a data synchronization solution.
   * 
   * @param request - GetDISyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDISyncTaskResponse
   */
  async getDISyncTaskWithOptions(request: $_model.GetDISyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDISyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDISyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetDISyncTaskResponse({}));
  }

  /**
   * Queries the details of a real-time synchronization task or a data synchronization solution.
   * 
   * @param request - GetDISyncTaskRequest
   * @returns GetDISyncTaskResponse
   */
  async getDISyncTask(request: $_model.GetDISyncTaskRequest): Promise<$_model.GetDISyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDISyncTaskWithOptions(request, runtime);
  }

  /**
   * Queries the information about a directed acyclic graph (DAG). You can call the GetDag operation to query the information about the DAG for a manually triggered workflow, a manually triggered node, or a data backfill instance. However, you cannot query the information about the DAG for an auto triggered node or an auto triggered workflow.
   * 
   * @remarks
   * Supported DAG types:
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
   * Supported DAG states:
   * *   CREATED
   * *   RUNNING
   * *   FAILURE
   * *   SUCCESS
   * 
   * @param request - GetDagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDagResponse
   */
  async getDagWithOptions(request: $_model.GetDagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDagResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDag",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDagResponse>(await this.callApi(params, req, runtime), new $_model.GetDagResponse({}));
  }

  /**
   * Queries the information about a directed acyclic graph (DAG). You can call the GetDag operation to query the information about the DAG for a manually triggered workflow, a manually triggered node, or a data backfill instance. However, you cannot query the information about the DAG for an auto triggered node or an auto triggered workflow.
   * 
   * @remarks
   * Supported DAG types:
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
   * Supported DAG states:
   * *   CREATED
   * *   RUNNING
   * *   FAILURE
   * *   SUCCESS
   * 
   * @param request - GetDagRequest
   * @returns GetDagResponse
   */
  async getDag(request: $_model.GetDagRequest): Promise<$_model.GetDagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDagWithOptions(request, runtime);
  }

  /**
   * Queries the details of a DataService Studio API in the development state.
   * 
   * @param request - GetDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiResponse
   */
  async getDataServiceApiWithOptions(request: $_model.GetDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiResponse({}));
  }

  /**
   * Queries the details of a DataService Studio API in the development state.
   * 
   * @param request - GetDataServiceApiRequest
   * @returns GetDataServiceApiResponse
   */
  async getDataServiceApi(request: $_model.GetDataServiceApiRequest): Promise<$_model.GetDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Queries the test results of an API in DataService Studio.
   * 
   * @param request - GetDataServiceApiTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApiTestResponse
   */
  async getDataServiceApiTestWithOptions(request: $_model.GetDataServiceApiTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApiTestResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApiTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApiTestResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApiTestResponse({}));
  }

  /**
   * Queries the test results of an API in DataService Studio.
   * 
   * @param request - GetDataServiceApiTestRequest
   * @returns GetDataServiceApiTestResponse
   */
  async getDataServiceApiTest(request: $_model.GetDataServiceApiTestRequest): Promise<$_model.GetDataServiceApiTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApiTestWithOptions(request, runtime);
  }

  /**
   * Queries the details of an application.
   * 
   * @param request - GetDataServiceApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceApplicationResponse
   */
  async getDataServiceApplicationWithOptions(request: $_model.GetDataServiceApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceApplicationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      body["ApplicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceApplication",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceApplicationResponse({}));
  }

  /**
   * Queries the details of an application.
   * 
   * @param request - GetDataServiceApplicationRequest
   * @returns GetDataServiceApplicationResponse
   */
  async getDataServiceApplication(request: $_model.GetDataServiceApplicationRequest): Promise<$_model.GetDataServiceApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceApplicationWithOptions(request, runtime);
  }

  /**
   * Queries a folder.
   * 
   * @param request - GetDataServiceFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceFolderResponse
   */
  async getDataServiceFolderWithOptions(request: $_model.GetDataServiceFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceFolderResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceFolderResponse({}));
  }

  /**
   * Queries a folder.
   * 
   * @param request - GetDataServiceFolderRequest
   * @returns GetDataServiceFolderResponse
   */
  async getDataServiceFolder(request: $_model.GetDataServiceFolderRequest): Promise<$_model.GetDataServiceFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceFolderWithOptions(request, runtime);
  }

  /**
   * Queries a business process.
   * 
   * @param request - GetDataServiceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServiceGroupResponse
   */
  async getDataServiceGroupWithOptions(request: $_model.GetDataServiceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServiceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServiceGroup",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServiceGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServiceGroupResponse({}));
  }

  /**
   * Queries a business process.
   * 
   * @param request - GetDataServiceGroupRequest
   * @returns GetDataServiceGroupResponse
   */
  async getDataServiceGroup(request: $_model.GetDataServiceGroupRequest): Promise<$_model.GetDataServiceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServiceGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about a DataService Studio API in the published state.
   * 
   * @param request - GetDataServicePublishedApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataServicePublishedApiResponse
   */
  async getDataServicePublishedApiWithOptions(request: $_model.GetDataServicePublishedApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataServicePublishedApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataServicePublishedApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataServicePublishedApiResponse>(await this.callApi(params, req, runtime), new $_model.GetDataServicePublishedApiResponse({}));
  }

  /**
   * Queries the information about a DataService Studio API in the published state.
   * 
   * @param request - GetDataServicePublishedApiRequest
   * @returns GetDataServicePublishedApiResponse
   */
  async getDataServicePublishedApi(request: $_model.GetDataServicePublishedApiRequest): Promise<$_model.GetDataServicePublishedApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataServicePublishedApiWithOptions(request, runtime);
  }

  /**
   * Queries the metadata of a specified data source.
   * 
   * @param request - GetDataSourceMetaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceMetaResponse
   */
  async getDataSourceMetaWithOptions(request: $_model.GetDataSourceMetaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceMetaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceMeta",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceMetaResponse({}));
  }

  /**
   * Queries the metadata of a specified data source.
   * 
   * @param request - GetDataSourceMetaRequest
   * @returns GetDataSourceMetaResponse
   */
  async getDataSourceMeta(request: $_model.GetDataSourceMetaRequest): Promise<$_model.GetDataSourceMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDataSourceMetaWithOptions(request, runtime);
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(request: $_model.GetDeploymentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      body["DeploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployment",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentResponse({}));
  }

  /**
   * Queries the information about a deployment package.
   * 
   * @param request - GetDeploymentRequest
   * @returns GetDeploymentResponse
   */
  async getDeployment(request: $_model.GetDeploymentRequest): Promise<$_model.GetDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  /**
   * Queries the details of an extension.
   * 
   * @param request - GetExtensionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExtensionResponse
   */
  async getExtensionWithOptions(request: $_model.GetExtensionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExtensionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.extensionCode)) {
      query["ExtensionCode"] = request.extensionCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExtension",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExtensionResponse>(await this.callApi(params, req, runtime), new $_model.GetExtensionResponse({}));
  }

  /**
   * Queries the details of an extension.
   * 
   * @param request - GetExtensionRequest
   * @returns GetExtensionResponse
   */
  async getExtension(request: $_model.GetExtensionRequest): Promise<$_model.GetExtensionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExtensionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(request: $_model.GetFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileResponse>(await this.callApi(params, req, runtime), new $_model.GetFileResponse({}));
  }

  /**
   * Queries the information about a file.
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(request: $_model.GetFileRequest): Promise<$_model.GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of node types.
   * 
   * @param request - GetFileTypeStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileTypeStatisticResponse
   */
  async getFileTypeStatisticWithOptions(request: $_model.GetFileTypeStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileTypeStatisticResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileTypeStatistic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileTypeStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetFileTypeStatisticResponse({}));
  }

  /**
   * Queries the distribution of node types.
   * 
   * @param request - GetFileTypeStatisticRequest
   * @returns GetFileTypeStatisticResponse
   */
  async getFileTypeStatistic(request: $_model.GetFileTypeStatisticRequest): Promise<$_model.GetFileTypeStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileTypeStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the information about a file version.
   * 
   * @param request - GetFileVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileVersionResponse
   */
  async getFileVersionWithOptions(request: $_model.GetFileVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileVersion)) {
      body["FileVersion"] = request.fileVersion;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileVersion",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetFileVersionResponse({}));
  }

  /**
   * Queries the information about a file version.
   * 
   * @param request - GetFileVersionRequest
   * @returns GetFileVersionResponse
   */
  async getFileVersion(request: $_model.GetFileVersionRequest): Promise<$_model.GetFileVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileVersionWithOptions(request, runtime);
  }

  /**
   * Queries the information about a folder.
   * 
   * @param request - GetFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(request: $_model.GetFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.folderPath)) {
      body["FolderPath"] = request.folderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFolderResponse>(await this.callApi(params, req, runtime), new $_model.GetFolderResponse({}));
  }

  /**
   * Queries the information about a folder.
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(request: $_model.GetFolderRequest): Promise<$_model.GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFolderWithOptions(request, runtime);
  }

  /**
   * Queries the data snapshot of an extension point based on the ID of a message in DataWorks OpenEvent when the related extension point event is triggered.
   * 
   * @param request - GetIDEEventDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIDEEventDetailResponse
   */
  async getIDEEventDetailWithOptions(request: $_model.GetIDEEventDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetIDEEventDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIDEEventDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIDEEventDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetIDEEventDetailResponse({}));
  }

  /**
   * Queries the data snapshot of an extension point based on the ID of a message in DataWorks OpenEvent when the related extension point event is triggered.
   * 
   * @param request - GetIDEEventDetailRequest
   * @returns GetIDEEventDetailResponse
   */
  async getIDEEventDetail(request: $_model.GetIDEEventDetailRequest): Promise<$_model.GetIDEEventDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIDEEventDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about an instance.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the information about an instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the ranking of the running durations of instances.
   * 
   * @deprecated OpenAPI GetInstanceConsumeTimeRank is deprecated
   * 
   * @param request - GetInstanceConsumeTimeRankRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceConsumeTimeRankResponse
   */
  async getInstanceConsumeTimeRankWithOptions(request: $_model.GetInstanceConsumeTimeRankRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceConsumeTimeRankResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceConsumeTimeRank",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceConsumeTimeRankResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceConsumeTimeRankResponse({}));
  }

  /**
   * Queries the ranking of the running durations of instances.
   * 
   * @deprecated OpenAPI GetInstanceConsumeTimeRank is deprecated
   * 
   * @param request - GetInstanceConsumeTimeRankRequest
   * @returns GetInstanceConsumeTimeRankResponse
   */
  // Deprecated
  async getInstanceConsumeTimeRank(request: $_model.GetInstanceConsumeTimeRankRequest): Promise<$_model.GetInstanceConsumeTimeRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceConsumeTimeRankWithOptions(request, runtime);
  }

  /**
   * Queries the quantity trend of auto triggered instances.
   * 
   * @deprecated OpenAPI GetInstanceCountTrend is deprecated
   * 
   * @param request - GetInstanceCountTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceCountTrendResponse
   */
  async getInstanceCountTrendWithOptions(request: $_model.GetInstanceCountTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceCountTrendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceCountTrend",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceCountTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceCountTrendResponse({}));
  }

  /**
   * Queries the quantity trend of auto triggered instances.
   * 
   * @deprecated OpenAPI GetInstanceCountTrend is deprecated
   * 
   * @param request - GetInstanceCountTrendRequest
   * @returns GetInstanceCountTrendResponse
   */
  // Deprecated
  async getInstanceCountTrend(request: $_model.GetInstanceCountTrendRequest): Promise<$_model.GetInstanceCountTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceCountTrendWithOptions(request, runtime);
  }

  /**
   * Queries the ranking of nodes on which errors occur within the last month.
   * 
   * @deprecated OpenAPI GetInstanceErrorRank is deprecated
   * 
   * @param request - GetInstanceErrorRankRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceErrorRankResponse
   */
  async getInstanceErrorRankWithOptions(request: $_model.GetInstanceErrorRankRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceErrorRankResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceErrorRank",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceErrorRankResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceErrorRankResponse({}));
  }

  /**
   * Queries the ranking of nodes on which errors occur within the last month.
   * 
   * @deprecated OpenAPI GetInstanceErrorRank is deprecated
   * 
   * @param request - GetInstanceErrorRankRequest
   * @returns GetInstanceErrorRankResponse
   */
  // Deprecated
  async getInstanceErrorRank(request: $_model.GetInstanceErrorRankRequest): Promise<$_model.GetInstanceErrorRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceErrorRankWithOptions(request, runtime);
  }

  /**
   * Queries the logs of an instance.
   * 
   * @remarks
   * You may not obtain the instance logs that were generated more than seven days ago.
   * 
   * @param request - GetInstanceLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLogResponse
   */
  async getInstanceLogWithOptions(request: $_model.GetInstanceLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceHistoryId)) {
      body["InstanceHistoryId"] = request.instanceHistoryId;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLog",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceLogResponse({}));
  }

  /**
   * Queries the logs of an instance.
   * 
   * @remarks
   * You may not obtain the instance logs that were generated more than seven days ago.
   * 
   * @param request - GetInstanceLogRequest
   * @returns GetInstanceLogResponse
   */
  async getInstanceLog(request: $_model.GetInstanceLogRequest): Promise<$_model.GetInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceLogWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of instances in different states.
   * 
   * @deprecated OpenAPI GetInstanceStatusCount is deprecated
   * 
   * @param request - GetInstanceStatusCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceStatusCountResponse
   */
  async getInstanceStatusCountWithOptions(request: $_model.GetInstanceStatusCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceStatusCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceStatusCount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceStatusCountResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceStatusCountResponse({}));
  }

  /**
   * Queries the statistics of instances in different states.
   * 
   * @deprecated OpenAPI GetInstanceStatusCount is deprecated
   * 
   * @param request - GetInstanceStatusCountRequest
   * @returns GetInstanceStatusCountResponse
   */
  // Deprecated
  async getInstanceStatusCount(request: $_model.GetInstanceStatusCountRequest): Promise<$_model.GetInstanceStatusCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceStatusCountWithOptions(request, runtime);
  }

  /**
   * Queries the number of instances that are in each state.
   * 
   * @param request - GetInstanceStatusStatisticRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceStatusStatisticResponse
   */
  async getInstanceStatusStatisticWithOptions(request: $_model.GetInstanceStatusStatisticRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceStatusStatisticResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.dagType)) {
      body["DagType"] = request.dagType;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schedulerPeriod)) {
      body["SchedulerPeriod"] = request.schedulerPeriod;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceStatusStatistic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceStatusStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceStatusStatisticResponse({}));
  }

  /**
   * Queries the number of instances that are in each state.
   * 
   * @param request - GetInstanceStatusStatisticRequest
   * @returns GetInstanceStatusStatisticResponse
   */
  async getInstanceStatusStatistic(request: $_model.GetInstanceStatusStatisticRequest): Promise<$_model.GetInstanceStatusStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceStatusStatisticWithOptions(request, runtime);
  }

  /**
   * Queries the information about instances in a manually triggered workflow.
   * 
   * @deprecated OpenAPI GetManualDagInstances is deprecated
   * 
   * @param request - GetManualDagInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetManualDagInstancesResponse
   */
  async getManualDagInstancesWithOptions(request: $_model.GetManualDagInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetManualDagInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetManualDagInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetManualDagInstancesResponse>(await this.callApi(params, req, runtime), new $_model.GetManualDagInstancesResponse({}));
  }

  /**
   * Queries the information about instances in a manually triggered workflow.
   * 
   * @deprecated OpenAPI GetManualDagInstances is deprecated
   * 
   * @param request - GetManualDagInstancesRequest
   * @returns GetManualDagInstancesResponse
   */
  // Deprecated
  async getManualDagInstances(request: $_model.GetManualDagInstancesRequest): Promise<$_model.GetManualDagInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getManualDagInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a category tree.
   * 
   * @param request - GetMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaCategoryResponse
   */
  async getMetaCategoryWithOptions(request: $_model.GetMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentCategoryId)) {
      query["ParentCategoryId"] = request.parentCategoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaCategoryResponse({}));
  }

  /**
   * Queries the information about a category tree.
   * 
   * @param request - GetMetaCategoryRequest
   * @returns GetMetaCategoryResponse
   */
  async getMetaCategory(request: $_model.GetMetaCategoryRequest): Promise<$_model.GetMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Queries the information about a collection.
   * 
   * @param request - GetMetaCollectionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaCollectionDetailResponse
   */
  async getMetaCollectionDetailWithOptions(request: $_model.GetMetaCollectionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaCollectionDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.qualifiedName)) {
      query["QualifiedName"] = request.qualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaCollectionDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaCollectionDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaCollectionDetailResponse({}));
  }

  /**
   * Queries the information about a collection.
   * 
   * @param request - GetMetaCollectionDetailRequest
   * @returns GetMetaCollectionDetailResponse
   */
  async getMetaCollectionDetail(request: $_model.GetMetaCollectionDetailRequest): Promise<$_model.GetMetaCollectionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaCollectionDetailWithOptions(request, runtime);
  }

  /**
   * Queries the lineage of a field in a metatable.
   * 
   * @param request - GetMetaColumnLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaColumnLineageResponse
   */
  async getMetaColumnLineageWithOptions(request: $_model.GetMetaColumnLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaColumnLineageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.columnGuid)) {
      query["ColumnGuid"] = request.columnGuid;
    }

    if (!$dara.isNull(request.columnName)) {
      query["ColumnName"] = request.columnName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaColumnLineage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaColumnLineageResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaColumnLineageResponse({}));
  }

  /**
   * Queries the lineage of a field in a metatable.
   * 
   * @param request - GetMetaColumnLineageRequest
   * @returns GetMetaColumnLineageResponse
   */
  async getMetaColumnLineage(request: $_model.GetMetaColumnLineageRequest): Promise<$_model.GetMetaColumnLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaColumnLineageWithOptions(request, runtime);
  }

  /**
   * Queries the basic metadata information about a compute engine instance.
   * 
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to obtain the ID of the EMR cluster.
   * 
   * @param request - GetMetaDBInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaDBInfoResponse
   */
  async getMetaDBInfoWithOptions(request: $_model.GetMetaDBInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaDBInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaDBInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaDBInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaDBInfoResponse({}));
  }

  /**
   * Queries the basic metadata information about a compute engine instance.
   * 
   * @remarks
   * The ID of the EMR cluster. This parameter is required only if you set the DataSourceType parameter to emr.
   * You can log on to the [EMR console](https://emr.console.aliyun.com/?spm=a2c4g.11186623.0.0.965cc5c2GeiHet#/cn-hangzhou) to obtain the ID of the EMR cluster.
   * 
   * @param request - GetMetaDBInfoRequest
   * @returns GetMetaDBInfoResponse
   */
  async getMetaDBInfo(request: $_model.GetMetaDBInfoRequest): Promise<$_model.GetMetaDBInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaDBInfoWithOptions(request, runtime);
  }

  /**
   * Queries metatables in a compute engine instance.
   * 
   * @param request - GetMetaDBTableListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaDBTableListResponse
   */
  async getMetaDBTableListWithOptions(request: $_model.GetMetaDBTableListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaDBTableListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
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
      action: "GetMetaDBTableList",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaDBTableListResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaDBTableListResponse({}));
  }

  /**
   * Queries metatables in a compute engine instance.
   * 
   * @param request - GetMetaDBTableListRequest
   * @returns GetMetaDBTableListResponse
   */
  async getMetaDBTableList(request: $_model.GetMetaDBTableListRequest): Promise<$_model.GetMetaDBTableListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaDBTableListWithOptions(request, runtime);
  }

  /**
   * Queries the basic information about a metatable.
   * 
   * @param request - GetMetaTableBasicInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableBasicInfoResponse
   */
  async getMetaTableBasicInfoWithOptions(request: $_model.GetMetaTableBasicInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableBasicInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableBasicInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableBasicInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableBasicInfoResponse({}));
  }

  /**
   * Queries the basic information about a metatable.
   * 
   * @param request - GetMetaTableBasicInfoRequest
   * @returns GetMetaTableBasicInfoResponse
   */
  async getMetaTableBasicInfo(request: $_model.GetMetaTableBasicInfoRequest): Promise<$_model.GetMetaTableBasicInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableBasicInfoWithOptions(request, runtime);
  }

  /**
   * Queries the change logs of a metatable.
   * 
   * @remarks
   * > This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - GetMetaTableChangeLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableChangeLogResponse
   */
  async getMetaTableChangeLogWithOptions(request: $_model.GetMetaTableChangeLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableChangeLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeType)) {
      body["ChangeType"] = request.changeType;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.objectType)) {
      body["ObjectType"] = request.objectType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tableGuid)) {
      body["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableChangeLog",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableChangeLogResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableChangeLogResponse({}));
  }

  /**
   * Queries the change logs of a metatable.
   * 
   * @remarks
   * > This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - GetMetaTableChangeLogRequest
   * @returns GetMetaTableChangeLogResponse
   */
  async getMetaTableChangeLog(request: $_model.GetMetaTableChangeLogRequest): Promise<$_model.GetMetaTableChangeLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableChangeLogWithOptions(request, runtime);
  }

  /**
   * Queries the field information of a metatable.
   * 
   * @param request - GetMetaTableColumnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableColumnResponse
   */
  async getMetaTableColumnWithOptions(request: $_model.GetMetaTableColumnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableColumnResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableColumn",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableColumnResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableColumnResponse({}));
  }

  /**
   * Queries the field information of a metatable.
   * 
   * @param request - GetMetaTableColumnRequest
   * @returns GetMetaTableColumnResponse
   */
  async getMetaTableColumn(request: $_model.GetMetaTableColumnRequest): Promise<$_model.GetMetaTableColumnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableColumnWithOptions(request, runtime);
  }

  /**
   * Queries the complete information about a table, including information about fields in the table.
   * 
   * @remarks
   * You can call this operation to query only the information about a table of the E-MapReduce (EMR) compute engine type.
   * 
   * @param request - GetMetaTableFullInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableFullInfoResponse
   */
  async getMetaTableFullInfoWithOptions(request: $_model.GetMetaTableFullInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableFullInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableFullInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableFullInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableFullInfoResponse({}));
  }

  /**
   * Queries the complete information about a table, including information about fields in the table.
   * 
   * @remarks
   * You can call this operation to query only the information about a table of the E-MapReduce (EMR) compute engine type.
   * 
   * @param request - GetMetaTableFullInfoRequest
   * @returns GetMetaTableFullInfoResponse
   */
  async getMetaTableFullInfo(request: $_model.GetMetaTableFullInfoRequest): Promise<$_model.GetMetaTableFullInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableFullInfoWithOptions(request, runtime);
  }

  /**
   * Queries the instructions on how to use a table.
   * 
   * @param request - GetMetaTableIntroWikiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableIntroWikiResponse
   */
  async getMetaTableIntroWikiWithOptions(request: $_model.GetMetaTableIntroWikiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableIntroWikiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.wikiVersion)) {
      query["WikiVersion"] = request.wikiVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableIntroWiki",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableIntroWikiResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableIntroWikiResponse({}));
  }

  /**
   * Queries the instructions on how to use a table.
   * 
   * @param request - GetMetaTableIntroWikiRequest
   * @returns GetMetaTableIntroWikiResponse
   */
  async getMetaTableIntroWiki(request: $_model.GetMetaTableIntroWikiRequest): Promise<$_model.GetMetaTableIntroWikiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableIntroWikiWithOptions(request, runtime);
  }

  /**
   * Queries the lineage of a metatable.
   * 
   * @param request - GetMetaTableLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableLineageResponse
   */
  async getMetaTableLineageWithOptions(request: $_model.GetMetaTableLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableLineageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.nextPrimaryKey)) {
      query["NextPrimaryKey"] = request.nextPrimaryKey;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableLineage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableLineageResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableLineageResponse({}));
  }

  /**
   * Queries the lineage of a metatable.
   * 
   * @param request - GetMetaTableLineageRequest
   * @returns GetMetaTableLineageResponse
   */
  async getMetaTableLineage(request: $_model.GetMetaTableLineageRequest): Promise<$_model.GetMetaTableLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableLineageWithOptions(request, runtime);
  }

  /**
   * Queries metatables in a specified category.
   * 
   * @param request - GetMetaTableListByCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableListByCategoryResponse
   */
  async getMetaTableListByCategoryWithOptions(request: $_model.GetMetaTableListByCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableListByCategoryResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableListByCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableListByCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableListByCategoryResponse({}));
  }

  /**
   * Queries metatables in a specified category.
   * 
   * @param request - GetMetaTableListByCategoryRequest
   * @returns GetMetaTableListByCategoryResponse
   */
  async getMetaTableListByCategory(request: $_model.GetMetaTableListByCategoryRequest): Promise<$_model.GetMetaTableListByCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableListByCategoryWithOptions(request, runtime);
  }

  /**
   * Queries the output information of a metatable.
   * 
   * @param request - GetMetaTableOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableOutputResponse
   */
  async getMetaTableOutputWithOptions(request: $_model.GetMetaTableOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableOutputResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableOutputResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableOutputResponse({}));
  }

  /**
   * Queries the output information of a metatable.
   * 
   * @param request - GetMetaTableOutputRequest
   * @returns GetMetaTableOutputResponse
   */
  async getMetaTableOutput(request: $_model.GetMetaTableOutputRequest): Promise<$_model.GetMetaTableOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableOutputWithOptions(request, runtime);
  }

  /**
   * Obtains a list of partitions in a metatable.
   * 
   * @remarks
   * You can call this operation to query only the partitions of a metatable in a MaxCompute or E-MapReduce (EMR) compute engine. If you query partitions of a metatable in an EMR compute engine, only DataLake clusters that use Data Lake Formation (DLF) to manage metadata and Hadoop clusters whose cluster version is earlier than 3.41.0 or 5.7.0 are supported.
   * 
   * @param tmpReq - GetMetaTablePartitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTablePartitionResponse
   */
  async getMetaTablePartitionWithOptions(tmpReq: $_model.GetMetaTablePartitionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTablePartitionResponse> {
    tmpReq.validate();
    let request = new $_model.GetMetaTablePartitionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sortCriterion)) {
      request.sortCriterionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sortCriterion, "SortCriterion", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.databaseName)) {
      query["DatabaseName"] = request.databaseName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortCriterionShrink)) {
      query["SortCriterion"] = request.sortCriterionShrink;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTablePartition",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTablePartitionResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTablePartitionResponse({}));
  }

  /**
   * Obtains a list of partitions in a metatable.
   * 
   * @remarks
   * You can call this operation to query only the partitions of a metatable in a MaxCompute or E-MapReduce (EMR) compute engine. If you query partitions of a metatable in an EMR compute engine, only DataLake clusters that use Data Lake Formation (DLF) to manage metadata and Hadoop clusters whose cluster version is earlier than 3.41.0 or 5.7.0 are supported.
   * 
   * @param request - GetMetaTablePartitionRequest
   * @returns GetMetaTablePartitionResponse
   */
  async getMetaTablePartition(request: $_model.GetMetaTablePartitionRequest): Promise<$_model.GetMetaTablePartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTablePartitionWithOptions(request, runtime);
  }

  /**
   * Queries the output tasks of a metatable.
   * 
   * @param request - GetMetaTableProducingTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableProducingTasksResponse
   */
  async getMetaTableProducingTasksWithOptions(request: $_model.GetMetaTableProducingTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableProducingTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dbName)) {
      query["DbName"] = request.dbName;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableProducingTasks",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableProducingTasksResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableProducingTasksResponse({}));
  }

  /**
   * Queries the output tasks of a metatable.
   * 
   * @param request - GetMetaTableProducingTasksRequest
   * @returns GetMetaTableProducingTasksResponse
   */
  async getMetaTableProducingTasks(request: $_model.GetMetaTableProducingTasksRequest): Promise<$_model.GetMetaTableProducingTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableProducingTasksWithOptions(request, runtime);
  }

  /**
   * Queries the information about the themes and levels of a metatable.
   * 
   * @param request - GetMetaTableThemeLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetaTableThemeLevelResponse
   */
  async getMetaTableThemeLevelWithOptions(request: $_model.GetMetaTableThemeLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetaTableThemeLevelResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetaTableThemeLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetaTableThemeLevelResponse>(await this.callApi(params, req, runtime), new $_model.GetMetaTableThemeLevelResponse({}));
  }

  /**
   * Queries the information about the themes and levels of a metatable.
   * 
   * @param request - GetMetaTableThemeLevelRequest
   * @returns GetMetaTableThemeLevelResponse
   */
  async getMetaTableThemeLevel(request: $_model.GetMetaTableThemeLevelRequest): Promise<$_model.GetMetaTableThemeLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMetaTableThemeLevelWithOptions(request, runtime);
  }

  /**
   * Queries the progress of a migration task.
   * 
   * @param request - GetMigrationProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMigrationProcessResponse
   */
  async getMigrationProcessWithOptions(request: $_model.GetMigrationProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMigrationProcessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMigrationProcess",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMigrationProcessResponse>(await this.callApi(params, req, runtime), new $_model.GetMigrationProcessResponse({}));
  }

  /**
   * Queries the progress of a migration task.
   * 
   * @param request - GetMigrationProcessRequest
   * @returns GetMigrationProcessResponse
   */
  async getMigrationProcess(request: $_model.GetMigrationProcessRequest): Promise<$_model.GetMigrationProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMigrationProcessWithOptions(request, runtime);
  }

  /**
   * Queries the information about a migration task.
   * 
   * @param request - GetMigrationSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMigrationSummaryResponse
   */
  async getMigrationSummaryWithOptions(request: $_model.GetMigrationSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMigrationSummaryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMigrationSummary",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMigrationSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetMigrationSummaryResponse({}));
  }

  /**
   * Queries the information about a migration task.
   * 
   * @param request - GetMigrationSummaryRequest
   * @returns GetMigrationSummaryResponse
   */
  async getMigrationSummary(request: $_model.GetMigrationSummaryRequest): Promise<$_model.GetMigrationSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMigrationSummaryWithOptions(request, runtime);
  }

  /**
   * Indicates whether the request is successful.
   * 
   * @param request - GetNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(request: $_model.GetNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeResponse({}));
  }

  /**
   * Indicates whether the request is successful.
   * 
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: $_model.GetNodeRequest): Promise<$_model.GetNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - GetNodeChildrenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeChildrenResponse
   */
  async getNodeChildrenWithOptions(request: $_model.GetNodeChildrenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeChildrenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeChildren",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeChildrenResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeChildrenResponse({}));
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - GetNodeChildrenRequest
   * @returns GetNodeChildrenResponse
   */
  async getNodeChildren(request: $_model.GetNodeChildrenRequest): Promise<$_model.GetNodeChildrenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeChildrenWithOptions(request, runtime);
  }

  /**
   * Queries the code of a node.
   * 
   * @param request - GetNodeCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeCodeResponse
   */
  async getNodeCodeWithOptions(request: $_model.GetNodeCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeCodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeCode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeCodeResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeCodeResponse({}));
  }

  /**
   * Queries the code of a node.
   * 
   * @param request - GetNodeCodeRequest
   * @returns GetNodeCodeResponse
   */
  async getNodeCode(request: $_model.GetNodeCodeRequest): Promise<$_model.GetNodeCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeCodeWithOptions(request, runtime);
  }

  /**
   * Queries the nodes associated with a baseline.
   * 
   * @deprecated OpenAPI GetNodeOnBaseline is deprecated
   * 
   * @param request - GetNodeOnBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeOnBaselineResponse
   */
  async getNodeOnBaselineWithOptions(request: $_model.GetNodeOnBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeOnBaselineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeOnBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeOnBaselineResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeOnBaselineResponse({}));
  }

  /**
   * Queries the nodes associated with a baseline.
   * 
   * @deprecated OpenAPI GetNodeOnBaseline is deprecated
   * 
   * @param request - GetNodeOnBaselineRequest
   * @returns GetNodeOnBaselineResponse
   */
  // Deprecated
  async getNodeOnBaseline(request: $_model.GetNodeOnBaselineRequest): Promise<$_model.GetNodeOnBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeOnBaselineWithOptions(request, runtime);
  }

  /**
   * Queries a list of ancestor nodes of a node.
   * 
   * @param request - GetNodeParentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeParentsResponse
   */
  async getNodeParentsWithOptions(request: $_model.GetNodeParentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeParentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeParents",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeParentsResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeParentsResponse({}));
  }

  /**
   * Queries a list of ancestor nodes of a node.
   * 
   * @param request - GetNodeParentsRequest
   * @returns GetNodeParentsResponse
   */
  async getNodeParents(request: $_model.GetNodeParentsRequest): Promise<$_model.GetNodeParentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeParentsWithOptions(request, runtime);
  }

  /**
   * Queries the information about node types, including the code and name of a node type.
   * 
   * @deprecated OpenAPI GetNodeTypeListInfo is deprecated
   * 
   * @param request - GetNodeTypeListInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeTypeListInfoResponse
   */
  async getNodeTypeListInfoWithOptions(request: $_model.GetNodeTypeListInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeTypeListInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.locale)) {
      body["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeTypeListInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeTypeListInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeTypeListInfoResponse({}));
  }

  /**
   * Queries the information about node types, including the code and name of a node type.
   * 
   * @deprecated OpenAPI GetNodeTypeListInfo is deprecated
   * 
   * @param request - GetNodeTypeListInfoRequest
   * @returns GetNodeTypeListInfoResponse
   */
  // Deprecated
  async getNodeTypeListInfo(request: $_model.GetNodeTypeListInfoRequest): Promise<$_model.GetNodeTypeListInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNodeTypeListInfoWithOptions(request, runtime);
  }

  /**
   * Queries the records that are generated on a specified date for access to the high-risk sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetOpRiskDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpRiskDataResponse
   */
  async getOpRiskDataWithOptions(request: $_model.GetOpRiskDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpRiskDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpRiskData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpRiskDataResponse>(await this.callApi(params, req, runtime), new $_model.GetOpRiskDataResponse({}));
  }

  /**
   * Queries the records that are generated on a specified date for access to the high-risk sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetOpRiskDataRequest
   * @returns GetOpRiskDataResponse
   */
  async getOpRiskData(request: $_model.GetOpRiskDataRequest): Promise<$_model.GetOpRiskDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpRiskDataWithOptions(request, runtime);
  }

  /**
   * Queries the records that are generated on a specified date for access to sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetOpSensitiveDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpSensitiveDataResponse
   */
  async getOpSensitiveDataWithOptions(request: $_model.GetOpSensitiveDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpSensitiveDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpSensitiveDataResponse>(await this.callApi(params, req, runtime), new $_model.GetOpSensitiveDataResponse({}));
  }

  /**
   * Queries the records that are generated on a specified date for access to sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetOpSensitiveDataRequest
   * @returns GetOpSensitiveDataResponse
   */
  async getOpSensitiveData(request: $_model.GetOpSensitiveDataRequest): Promise<$_model.GetOpSensitiveDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpSensitiveDataWithOptions(request, runtime);
  }

  /**
   * Queries the option settings of an extension in a workspace.
   * 
   * @param request - GetOptionValueForProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOptionValueForProjectResponse
   */
  async getOptionValueForProjectWithOptions(request: $_model.GetOptionValueForProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOptionValueForProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extensionCode)) {
      body["ExtensionCode"] = request.extensionCode;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOptionValueForProject",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOptionValueForProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetOptionValueForProjectResponse({}));
  }

  /**
   * Queries the option settings of an extension in a workspace.
   * 
   * @param request - GetOptionValueForProjectRequest
   * @returns GetOptionValueForProjectResponse
   */
  async getOptionValueForProject(request: $_model.GetOptionValueForProjectRequest): Promise<$_model.GetOptionValueForProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOptionValueForProjectWithOptions(request, runtime);
  }

  /**
   * Queries the details of a permission request order.
   * 
   * @param request - GetPermissionApplyOrderDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionApplyOrderDetailResponse
   */
  async getPermissionApplyOrderDetailWithOptions(request: $_model.GetPermissionApplyOrderDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPermissionApplyOrderDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.flowId)) {
      query["FlowId"] = request.flowId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermissionApplyOrderDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPermissionApplyOrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetPermissionApplyOrderDetailResponse({}));
  }

  /**
   * Queries the details of a permission request order.
   * 
   * @param request - GetPermissionApplyOrderDetailRequest
   * @returns GetPermissionApplyOrderDetailResponse
   */
  async getPermissionApplyOrderDetail(request: $_model.GetPermissionApplyOrderDetailRequest): Promise<$_model.GetPermissionApplyOrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPermissionApplyOrderDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @param request - GetProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(request: $_model.GetProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      query["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @param request - GetProjectRequest
   * @returns GetProjectResponse
   */
  async getProject(request: $_model.GetProjectRequest): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @deprecated OpenAPI GetProjectDetail is deprecated
   * 
   * @param request - GetProjectDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectDetailResponse
   */
  async getProjectDetailWithOptions(request: $_model.GetProjectDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProjectDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectDetailResponse({}));
  }

  /**
   * Queries the information about a DataWorks workspace.
   * 
   * @deprecated OpenAPI GetProjectDetail is deprecated
   * 
   * @param request - GetProjectDetailRequest
   * @returns GetProjectDetailResponse
   */
  // Deprecated
  async getProjectDetail(request: $_model.GetProjectDetailRequest): Promise<$_model.GetProjectDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getProjectDetailWithOptions(request, runtime);
  }

  /**
   * @param request - GetQualityEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityEntityResponse
   */
  async getQualityEntityWithOptions(request: $_model.GetQualityEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.matchExpression)) {
      body["MatchExpression"] = request.matchExpression;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.tableName)) {
      body["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityEntityResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityEntityResponse({}));
  }

  /**
   * @param request - GetQualityEntityRequest
   * @returns GetQualityEntityResponse
   */
  async getQualityEntity(request: $_model.GetQualityEntityRequest): Promise<$_model.GetQualityEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityEntityWithOptions(request, runtime);
  }

  /**
   * Queries the subscribers of a partition filter expression.
   * 
   * @param request - GetQualityFollowerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityFollowerResponse
   */
  async getQualityFollowerWithOptions(request: $_model.GetQualityFollowerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityFollowerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityFollowerResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityFollowerResponse({}));
  }

  /**
   * Queries the subscribers of a partition filter expression.
   * 
   * @param request - GetQualityFollowerRequest
   * @returns GetQualityFollowerResponse
   */
  async getQualityFollower(request: $_model.GetQualityFollowerRequest): Promise<$_model.GetQualityFollowerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityFollowerWithOptions(request, runtime);
  }

  /**
   * Queries the information about a monitoring rule.
   * 
   * @param request - GetQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQualityRuleResponse
   */
  async getQualityRuleWithOptions(request: $_model.GetQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetQualityRuleResponse({}));
  }

  /**
   * Queries the information about a monitoring rule.
   * 
   * @param request - GetQualityRuleRequest
   * @returns GetQualityRuleResponse
   */
  async getQualityRule(request: $_model.GetQualityRuleRequest): Promise<$_model.GetQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getQualityRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about a custom alert rule.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=GetRemind\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - GetRemindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRemindResponse
   */
  async getRemindWithOptions(request: $_model.GetRemindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRemindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRemindResponse>(await this.callApi(params, req, runtime), new $_model.GetRemindResponse({}));
  }

  /**
   * Queries the information about a custom alert rule.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=GetRemind\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - GetRemindRequest
   * @returns GetRemindResponse
   */
  async getRemind(request: $_model.GetRemindRequest): Promise<$_model.GetRemindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRemindWithOptions(request, runtime);
  }

  /**
   * Queries the latest sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetSensitiveDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSensitiveDataResponse
   */
  async getSensitiveDataWithOptions(request: $_model.GetSensitiveDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSensitiveDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSensitiveDataResponse>(await this.callApi(params, req, runtime), new $_model.GetSensitiveDataResponse({}));
  }

  /**
   * Queries the latest sensitive data in all the DataWorks workspaces of a tenant.
   * 
   * @param request - GetSensitiveDataRequest
   * @returns GetSensitiveDataResponse
   */
  async getSensitiveData(request: $_model.GetSensitiveDataRequest): Promise<$_model.GetSensitiveDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSensitiveDataWithOptions(request, runtime);
  }

  /**
   * Queries the statistics of instances in different periods of a day.
   * 
   * @deprecated OpenAPI GetSuccessInstanceTrend is deprecated
   * 
   * @param request - GetSuccessInstanceTrendRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuccessInstanceTrendResponse
   */
  async getSuccessInstanceTrendWithOptions(request: $_model.GetSuccessInstanceTrendRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSuccessInstanceTrendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuccessInstanceTrend",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuccessInstanceTrendResponse>(await this.callApi(params, req, runtime), new $_model.GetSuccessInstanceTrendResponse({}));
  }

  /**
   * Queries the statistics of instances in different periods of a day.
   * 
   * @deprecated OpenAPI GetSuccessInstanceTrend is deprecated
   * 
   * @param request - GetSuccessInstanceTrendRequest
   * @returns GetSuccessInstanceTrendResponse
   */
  // Deprecated
  async getSuccessInstanceTrend(request: $_model.GetSuccessInstanceTrendRequest): Promise<$_model.GetSuccessInstanceTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSuccessInstanceTrendWithOptions(request, runtime);
  }

  /**
   * Queries the information about an event.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetTopicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicResponse
   */
  async getTopicWithOptions(request: $_model.GetTopicRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopic",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicResponse({}));
  }

  /**
   * Queries the information about an event.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetTopicRequest
   * @returns GetTopicResponse
   */
  async getTopic(request: $_model.GetTopicRequest): Promise<$_model.GetTopicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicWithOptions(request, runtime);
  }

  /**
   * Queries baseline instances affected by an event.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=GetTopicInfluence\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - GetTopicInfluenceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTopicInfluenceResponse
   */
  async getTopicInfluenceWithOptions(request: $_model.GetTopicInfluenceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTopicInfluenceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTopicInfluence",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTopicInfluenceResponse>(await this.callApi(params, req, runtime), new $_model.GetTopicInfluenceResponse({}));
  }

  /**
   * Queries baseline instances affected by an event.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=GetTopicInfluence\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - GetTopicInfluenceRequest
   * @returns GetTopicInfluenceResponse
   */
  async getTopicInfluence(request: $_model.GetTopicInfluenceRequest): Promise<$_model.GetTopicInfluenceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTopicInfluenceWithOptions(request, runtime);
  }

  /**
   * Imports data sources from your on-premises machine to a specific DataWorks workspace.
   * 
   * @remarks
   * You can import self-managed data sources or data sources that are exported from other DataWorks workspaces to a specific DataWorks workspace.
   * *   To import a self-managed data source to a DataWorks workspace, the data source type must be supported by DataWorks. For more information about the types of data sources supported by DataWorks, see [Supported data stores](https://help.aliyun.com/document_detail/181656.html).
   * *   For more information about how to export data sources from DataWorks workspaces to your on-premises machine, see [ExportDataSources](https://help.aliyun.com/document_detail/279570.html).
   * 
   * @param request - ImportDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportDataSourcesResponse
   */
  async importDataSourcesWithOptions(request: $_model.ImportDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportDataSourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSources)) {
      query["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ImportDataSourcesResponse({}));
  }

  /**
   * Imports data sources from your on-premises machine to a specific DataWorks workspace.
   * 
   * @remarks
   * You can import self-managed data sources or data sources that are exported from other DataWorks workspaces to a specific DataWorks workspace.
   * *   To import a self-managed data source to a DataWorks workspace, the data source type must be supported by DataWorks. For more information about the types of data sources supported by DataWorks, see [Supported data stores](https://help.aliyun.com/document_detail/181656.html).
   * *   For more information about how to export data sources from DataWorks workspaces to your on-premises machine, see [ExportDataSources](https://help.aliyun.com/document_detail/279570.html).
   * 
   * @param request - ImportDataSourcesRequest
   * @returns ImportDataSourcesResponse
   */
  async importDataSources(request: $_model.ImportDataSourcesRequest): Promise<$_model.ImportDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of alerts.
   * 
   * @param request - ListAlertMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertMessagesResponse
   */
  async listAlertMessagesWithOptions(request: $_model.ListAlertMessagesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertMessagesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!$dara.isNull(request.alertRuleTypes)) {
      body["AlertRuleTypes"] = request.alertRuleTypes;
    }

    if (!$dara.isNull(request.alertUser)) {
      body["AlertUser"] = request.alertUser;
    }

    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertMessages",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertMessagesResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertMessagesResponse({}));
  }

  /**
   * Queries a list of alerts.
   * 
   * @param request - ListAlertMessagesRequest
   * @returns ListAlertMessagesResponse
   */
  async listAlertMessages(request: $_model.ListAlertMessagesRequest): Promise<$_model.ListAlertMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAlertMessagesWithOptions(request, runtime);
  }

  /**
   * Queries a list of baselines.
   * 
   * @param request - ListBaselineConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaselineConfigsResponse
   */
  async listBaselineConfigsWithOptions(request: $_model.ListBaselineConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaselineConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineTypes)) {
      body["BaselineTypes"] = request.baselineTypes;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!$dara.isNull(request.useflag)) {
      body["Useflag"] = request.useflag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaselineConfigs",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaselineConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListBaselineConfigsResponse({}));
  }

  /**
   * Queries a list of baselines.
   * 
   * @param request - ListBaselineConfigsRequest
   * @returns ListBaselineConfigsResponse
   */
  async listBaselineConfigs(request: $_model.ListBaselineConfigsRequest): Promise<$_model.ListBaselineConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaselineConfigsWithOptions(request, runtime);
  }

  /**
   * Queries a list of baseline instances.
   * 
   * @param request - ListBaselineStatusesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaselineStatusesResponse
   */
  async listBaselineStatusesWithOptions(request: $_model.ListBaselineStatusesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaselineStatusesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineTypes)) {
      body["BaselineTypes"] = request.baselineTypes;
    }

    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.finishStatus)) {
      body["FinishStatus"] = request.finishStatus;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.topicId)) {
      body["TopicId"] = request.topicId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaselineStatuses",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaselineStatusesResponse>(await this.callApi(params, req, runtime), new $_model.ListBaselineStatusesResponse({}));
  }

  /**
   * Queries a list of baseline instances.
   * 
   * @param request - ListBaselineStatusesRequest
   * @returns ListBaselineStatusesResponse
   */
  async listBaselineStatuses(request: $_model.ListBaselineStatusesRequest): Promise<$_model.ListBaselineStatusesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaselineStatusesWithOptions(request, runtime);
  }

  /**
   * Obtains a list of baselines.
   * 
   * @param request - ListBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBaselinesResponse
   */
  async listBaselinesWithOptions(request: $_model.ListBaselinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBaselinesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineTypes)) {
      body["BaselineTypes"] = request.baselineTypes;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBaselines",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBaselinesResponse>(await this.callApi(params, req, runtime), new $_model.ListBaselinesResponse({}));
  }

  /**
   * Obtains a list of baselines.
   * 
   * @param request - ListBaselinesRequest
   * @returns ListBaselinesResponse
   */
  async listBaselines(request: $_model.ListBaselinesRequest): Promise<$_model.ListBaselinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBaselinesWithOptions(request, runtime);
  }

  /**
   * Queries a list of workflows.
   * 
   * @param request - ListBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBusinessResponse
   */
  async listBusinessWithOptions(request: $_model.ListBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListBusinessResponse>(await this.callApi(params, req, runtime), new $_model.ListBusinessResponse({}));
  }

  /**
   * Queries a list of workflows.
   * 
   * @param request - ListBusinessRequest
   * @returns ListBusinessResponse
   */
  async listBusiness(request: $_model.ListBusinessRequest): Promise<$_model.ListBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listBusinessWithOptions(request, runtime);
  }

  /**
   * Queries a list of compute engines that are associated with a DataWorks workspace.
   * 
   * @param request - ListCalcEnginesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCalcEnginesResponse
   */
  async listCalcEnginesWithOptions(request: $_model.ListCalcEnginesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCalcEnginesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.calcEngineType)) {
      query["CalcEngineType"] = request.calcEngineType;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCalcEngines",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCalcEnginesResponse>(await this.callApi(params, req, runtime), new $_model.ListCalcEnginesResponse({}));
  }

  /**
   * Queries a list of compute engines that are associated with a DataWorks workspace.
   * 
   * @param request - ListCalcEnginesRequest
   * @returns ListCalcEnginesResponse
   */
  async listCalcEngines(request: $_model.ListCalcEnginesRequest): Promise<$_model.ListCalcEnginesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCalcEnginesWithOptions(request, runtime);
  }

  /**
   * Queries the check results of extension point events.
   * 
   * @param request - ListCheckProcessesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCheckProcessesResponse
   */
  async listCheckProcessesWithOptions(request: $_model.ListCheckProcessesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCheckProcessesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventCode)) {
      body["EventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCheckProcesses",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCheckProcessesResponse>(await this.callApi(params, req, runtime), new $_model.ListCheckProcessesResponse({}));
  }

  /**
   * Queries the check results of extension point events.
   * 
   * @param request - ListCheckProcessesRequest
   * @returns ListCheckProcessesResponse
   */
  async listCheckProcesses(request: $_model.ListCheckProcessesRequest): Promise<$_model.ListCheckProcessesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCheckProcessesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of submodules in a workspace. You can query information about SPARK parameters.
   * 
   * @param request - ListClusterConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterConfigsResponse
   */
  async listClusterConfigsWithOptions(request: $_model.ListClusterConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterConfigsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterConfigs",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterConfigsResponse({}));
  }

  /**
   * Queries the configurations of submodules in a workspace. You can query information about SPARK parameters.
   * 
   * @param request - ListClusterConfigsRequest
   * @returns ListClusterConfigsResponse
   */
  async listClusterConfigs(request: $_model.ListClusterConfigsRequest): Promise<$_model.ListClusterConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClusterConfigsWithOptions(request, runtime);
  }

  /**
   * Queries clusters that are registered in DataWorks. E-MapReduce (EMR) clusters and Cloudera\\"s Distribution Including Apache Hadoop (CDH) clusters are supported.
   * 
   * @param request - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: $_model.ListClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries clusters that are registered in DataWorks. E-MapReduce (EMR) clusters and Cloudera\\"s Distribution Including Apache Hadoop (CDH) clusters are supported.
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: $_model.ListClustersRequest): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * Queries a list of data sources.
   * 
   * @deprecated OpenAPI ListConnections is deprecated
   * 
   * @param request - ListConnectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectionsResponse
   */
  async listConnectionsWithOptions(request: $_model.ListConnectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectionsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnections",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectionsResponse({}));
  }

  /**
   * Queries a list of data sources.
   * 
   * @deprecated OpenAPI ListConnections is deprecated
   * 
   * @param request - ListConnectionsRequest
   * @returns ListConnectionsResponse
   */
  // Deprecated
  async listConnections(request: $_model.ListConnectionsRequest): Promise<$_model.ListConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listConnectionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of alert rules configured for a new-version synchronization task. The following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param request - ListDIAlarmRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRulesWithOptions(request: $_model.ListDIAlarmRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIAlarmRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIAlarmRules",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIAlarmRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListDIAlarmRulesResponse({}));
  }

  /**
   * Queries a list of alert rules configured for a new-version synchronization task. The following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization.
   * 
   * @param request - ListDIAlarmRulesRequest
   * @returns ListDIAlarmRulesResponse
   */
  async listDIAlarmRules(request: $_model.ListDIAlarmRulesRequest): Promise<$_model.ListDIAlarmRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIAlarmRulesWithOptions(request, runtime);
  }

  /**
   * Queries a list of new-version synchronization tasks. The following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can call this operation to obtain only the basic information about the tasks. If you want to obtain the details of a task, call the GetDIJob operation.
   * 
   * @param request - ListDIJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIJobsResponse
   */
  async listDIJobsWithOptions(request: $_model.ListDIJobsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIJobsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationDataSourceType)) {
      body["DestinationDataSourceType"] = request.destinationDataSourceType;
    }

    if (!$dara.isNull(request.jobName)) {
      body["JobName"] = request.jobName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sourceDataSourceType)) {
      body["SourceDataSourceType"] = request.sourceDataSourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIJobs",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDIJobsResponse({}));
  }

  /**
   * Queries a list of new-version synchronization tasks. The following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @remarks
   * You can call this operation to obtain only the basic information about the tasks. If you want to obtain the details of a task, call the GetDIJob operation.
   * 
   * @param request - ListDIJobsRequest
   * @returns ListDIJobsResponse
   */
  async listDIJobs(request: $_model.ListDIJobsRequest): Promise<$_model.ListDIJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIJobsWithOptions(request, runtime);
  }

  /**
   * Queries the default global configurations of synchronization solutions in a specified DataWorks workspace.
   * 
   * @remarks
   * DataWorks allows you to specify a default global configuration only for the processing rules of DDL messages in synchronization solutions. After you configure the **processing rules of DDL messages** in synchronization solutions, the configuration is used as the default global configuration and applies to all real-time synchronization tasks in the solutions. You can modify the **processing rules of DDL messages** based on your business requirements. For more information about how to configure a synchronization solution, see [Synchronization solutions](https://help.aliyun.com/document_detail/199008.html).
   * 
   * @param request - ListDIProjectConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDIProjectConfigResponse
   */
  async listDIProjectConfigWithOptions(request: $_model.ListDIProjectConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDIProjectConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDIProjectConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDIProjectConfigResponse>(await this.callApi(params, req, runtime), new $_model.ListDIProjectConfigResponse({}));
  }

  /**
   * Queries the default global configurations of synchronization solutions in a specified DataWorks workspace.
   * 
   * @remarks
   * DataWorks allows you to specify a default global configuration only for the processing rules of DDL messages in synchronization solutions. After you configure the **processing rules of DDL messages** in synchronization solutions, the configuration is used as the default global configuration and applies to all real-time synchronization tasks in the solutions. You can modify the **processing rules of DDL messages** based on your business requirements. For more information about how to configure a synchronization solution, see [Synchronization solutions](https://help.aliyun.com/document_detail/199008.html).
   * 
   * @param request - ListDIProjectConfigRequest
   * @returns ListDIProjectConfigResponse
   */
  async listDIProjectConfig(request: $_model.ListDIProjectConfigRequest): Promise<$_model.ListDIProjectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDIProjectConfigWithOptions(request, runtime);
  }

  /**
   * Queries the details of directed acyclic graphs (DAGs) for a single data backfill instance based on OpSeq.
   * 
   * @remarks
   * Supported DAG types:
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
   * Supported DAG states:
   * *   CREATED: The DAG is created.
   * *   RUNNING: The DAG is running.
   * *   FAILURE: The DAG fails to run.
   * *   SUCCESS: The DAG is successfully run.
   * 
   * @param request - ListDagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDagsResponse
   */
  async listDagsWithOptions(request: $_model.ListDagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDagsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.opSeq)) {
      body["OpSeq"] = request.opSeq;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDagsResponse>(await this.callApi(params, req, runtime), new $_model.ListDagsResponse({}));
  }

  /**
   * Queries the details of directed acyclic graphs (DAGs) for a single data backfill instance based on OpSeq.
   * 
   * @remarks
   * Supported DAG types:
   * *   MANUAL: DAG for a manually triggered workflow
   * *   SMOKE_TEST: DAG for a smoke testing workflow
   * *   SUPPLY_DATA: DAG for a data backfill instance
   * *   BUSINESS_PROCESS_DAG: DAG for a one-time workflow
   * Supported DAG states:
   * *   CREATED: The DAG is created.
   * *   RUNNING: The DAG is running.
   * *   FAILURE: The DAG fails to run.
   * *   SUCCESS: The DAG is successfully run.
   * 
   * @param request - ListDagsRequest
   * @returns ListDagsResponse
   */
  async listDags(request: $_model.ListDagsRequest): Promise<$_model.ListDagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDagsWithOptions(request, runtime);
  }

  /**
   * Queries the APIs on which other users are granted the access permissions.
   * 
   * @param request - ListDataServiceApiAuthoritiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApiAuthoritiesResponse
   */
  async listDataServiceApiAuthoritiesWithOptions(request: $_model.ListDataServiceApiAuthoritiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApiAuthoritiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApiAuthorities",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApiAuthoritiesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApiAuthoritiesResponse({}));
  }

  /**
   * Queries the APIs on which other users are granted the access permissions.
   * 
   * @param request - ListDataServiceApiAuthoritiesRequest
   * @returns ListDataServiceApiAuthoritiesResponse
   */
  async listDataServiceApiAuthorities(request: $_model.ListDataServiceApiAuthoritiesRequest): Promise<$_model.ListDataServiceApiAuthoritiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApiAuthoritiesWithOptions(request, runtime);
  }

  /**
   * Queries the test records of a DataService Studio API. This API operation allows you to query only the test records that are generated within the previous month.
   * 
   * @param request - ListDataServiceApiTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApiTestResponse
   */
  async listDataServiceApiTestWithOptions(request: $_model.ListDataServiceApiTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApiTestResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApiTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApiTestResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApiTestResponse({}));
  }

  /**
   * Queries the test records of a DataService Studio API. This API operation allows you to query only the test records that are generated within the previous month.
   * 
   * @param request - ListDataServiceApiTestRequest
   * @returns ListDataServiceApiTestResponse
   */
  async listDataServiceApiTest(request: $_model.ListDataServiceApiTestRequest): Promise<$_model.ListDataServiceApiTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApiTestWithOptions(request, runtime);
  }

  /**
   * Queries a list of APIs in the development state.
   * 
   * @param request - ListDataServiceApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApisResponse
   */
  async listDataServiceApisWithOptions(request: $_model.ListDataServiceApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!$dara.isNull(request.apiPathKeyword)) {
      body["ApiPathKeyword"] = request.apiPathKeyword;
    }

    if (!$dara.isNull(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApisResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApisResponse({}));
  }

  /**
   * Queries a list of APIs in the development state.
   * 
   * @param request - ListDataServiceApisRequest
   * @returns ListDataServiceApisResponse
   */
  async listDataServiceApis(request: $_model.ListDataServiceApisRequest): Promise<$_model.ListDataServiceApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApisWithOptions(request, runtime);
  }

  /**
   * Queries the basic information of applications.
   * 
   * @param request - ListDataServiceApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceApplicationsResponse
   */
  async listDataServiceApplicationsWithOptions(request: $_model.ListDataServiceApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceApplicationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectIdList)) {
      body["ProjectIdList"] = request.projectIdList;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceApplications",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceApplicationsResponse({}));
  }

  /**
   * Queries the basic information of applications.
   * 
   * @param request - ListDataServiceApplicationsRequest
   * @returns ListDataServiceApplicationsResponse
   */
  async listDataServiceApplications(request: $_model.ListDataServiceApplicationsRequest): Promise<$_model.ListDataServiceApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the APIs that you are authorized to access.
   * 
   * @param request - ListDataServiceAuthorizedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceAuthorizedApisResponse
   */
  async listDataServiceAuthorizedApisWithOptions(request: $_model.ListDataServiceAuthorizedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceAuthorizedApisResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceAuthorizedApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceAuthorizedApisResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceAuthorizedApisResponse({}));
  }

  /**
   * Queries the APIs that you are authorized to access.
   * 
   * @param request - ListDataServiceAuthorizedApisRequest
   * @returns ListDataServiceAuthorizedApisResponse
   */
  async listDataServiceAuthorizedApis(request: $_model.ListDataServiceAuthorizedApisRequest): Promise<$_model.ListDataServiceAuthorizedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceAuthorizedApisWithOptions(request, runtime);
  }

  /**
   * Queries folders.
   * 
   * @param request - ListDataServiceFoldersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceFoldersResponse
   */
  async listDataServiceFoldersWithOptions(request: $_model.ListDataServiceFoldersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceFoldersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderNameKeyword)) {
      body["FolderNameKeyword"] = request.folderNameKeyword;
    }

    if (!$dara.isNull(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceFolders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceFoldersResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceFoldersResponse({}));
  }

  /**
   * Queries folders.
   * 
   * @param request - ListDataServiceFoldersRequest
   * @returns ListDataServiceFoldersResponse
   */
  async listDataServiceFolders(request: $_model.ListDataServiceFoldersRequest): Promise<$_model.ListDataServiceFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceFoldersWithOptions(request, runtime);
  }

  /**
   * Queries business processes.
   * 
   * @param request - ListDataServiceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServiceGroupsResponse
   */
  async listDataServiceGroupsWithOptions(request: $_model.ListDataServiceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServiceGroupsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupNameKeyword)) {
      body["GroupNameKeyword"] = request.groupNameKeyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServiceGroups",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServiceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServiceGroupsResponse({}));
  }

  /**
   * Queries business processes.
   * 
   * @param request - ListDataServiceGroupsRequest
   * @returns ListDataServiceGroupsResponse
   */
  async listDataServiceGroups(request: $_model.ListDataServiceGroupsRequest): Promise<$_model.ListDataServiceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServiceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of APIs in the published state.
   * 
   * @param request - ListDataServicePublishedApisRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataServicePublishedApisResponse
   */
  async listDataServicePublishedApisWithOptions(request: $_model.ListDataServicePublishedApisRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataServicePublishedApisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiNameKeyword)) {
      body["ApiNameKeyword"] = request.apiNameKeyword;
    }

    if (!$dara.isNull(request.apiPathKeyword)) {
      body["ApiPathKeyword"] = request.apiPathKeyword;
    }

    if (!$dara.isNull(request.creatorId)) {
      body["CreatorId"] = request.creatorId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataServicePublishedApis",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataServicePublishedApisResponse>(await this.callApi(params, req, runtime), new $_model.ListDataServicePublishedApisResponse({}));
  }

  /**
   * Queries a list of APIs in the published state.
   * 
   * @param request - ListDataServicePublishedApisRequest
   * @returns ListDataServicePublishedApisResponse
   */
  async listDataServicePublishedApis(request: $_model.ListDataServicePublishedApisRequest): Promise<$_model.ListDataServicePublishedApisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataServicePublishedApisWithOptions(request, runtime);
  }

  /**
   * Queries the data sources added to a DataWorks workspace.
   * 
   * @param request - ListDataSourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(request: $_model.ListDataSourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * Queries the data sources added to a DataWorks workspace.
   * 
   * @param request - ListDataSourcesRequest
   * @returns ListDataSourcesResponse
   */
  async listDataSources(request: $_model.ListDataSourcesRequest): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDataSourcesWithOptions(request, runtime);
  }

  /**
   * Queries a list of deployment packages. This operation is equivalent to viewing a list of deployment packages on the Deployment Packages page of the DataWorks console.
   * 
   * @param request - ListDeploymentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(request: $_model.ListDeploymentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.endCreateTime)) {
      body["EndCreateTime"] = request.endCreateTime;
    }

    if (!$dara.isNull(request.endExecuteTime)) {
      body["EndExecuteTime"] = request.endExecuteTime;
    }

    if (!$dara.isNull(request.executor)) {
      body["Executor"] = request.executor;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeployments",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentsResponse({}));
  }

  /**
   * Queries a list of deployment packages. This operation is equivalent to viewing a list of deployment packages on the Deployment Packages page of the DataWorks console.
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(request: $_model.ListDeploymentsRequest): Promise<$_model.ListDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listDeploymentsWithOptions(request, runtime);
  }

  /**
   * Queries a list of built-in and custom extensions that are enabled in a workspace.
   * 
   * @remarks
   * For information about codes of extension point events, see [Development references: Extension point event codes](https://help.aliyun.com/document_detail/463357.html).
   * 
   * @param request - ListEnabledExtensionsForProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnabledExtensionsForProjectResponse
   */
  async listEnabledExtensionsForProjectWithOptions(request: $_model.ListEnabledExtensionsForProjectRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnabledExtensionsForProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventCode)) {
      body["EventCode"] = request.eventCode;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnabledExtensionsForProject",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnabledExtensionsForProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListEnabledExtensionsForProjectResponse({}));
  }

  /**
   * Queries a list of built-in and custom extensions that are enabled in a workspace.
   * 
   * @remarks
   * For information about codes of extension point events, see [Development references: Extension point event codes](https://help.aliyun.com/document_detail/463357.html).
   * 
   * @param request - ListEnabledExtensionsForProjectRequest
   * @returns ListEnabledExtensionsForProjectResponse
   */
  async listEnabledExtensionsForProject(request: $_model.ListEnabledExtensionsForProjectRequest): Promise<$_model.ListEnabledExtensionsForProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEnabledExtensionsForProjectWithOptions(request, runtime);
  }

  /**
   * Queries a list of entities by tag. Only entities of the maxcompute-table type are supported.
   * 
   * @param tmpReq - ListEntitiesByTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntitiesByTagsResponse
   */
  async listEntitiesByTagsWithOptions(tmpReq: $_model.ListEntitiesByTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEntitiesByTagsResponse> {
    tmpReq.validate();
    let request = new $_model.ListEntitiesByTagsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEntitiesByTags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEntitiesByTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListEntitiesByTagsResponse({}));
  }

  /**
   * Queries a list of entities by tag. Only entities of the maxcompute-table type are supported.
   * 
   * @param request - ListEntitiesByTagsRequest
   * @returns ListEntitiesByTagsResponse
   */
  async listEntitiesByTags(request: $_model.ListEntitiesByTagsRequest): Promise<$_model.ListEntitiesByTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntitiesByTagsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tags of an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param request - ListEntityTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEntityTagsResponse
   */
  async listEntityTagsWithOptions(request: $_model.ListEntityTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEntityTagsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEntityTags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEntityTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListEntityTagsResponse({}));
  }

  /**
   * Queries a list of tags of an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param request - ListEntityTagsRequest
   * @returns ListEntityTagsResponse
   */
  async listEntityTags(request: $_model.ListEntityTagsRequest): Promise<$_model.ListEntityTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEntityTagsWithOptions(request, runtime);
  }

  /**
   * Queries a list of extensions.
   * 
   * @param request - ListExtensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExtensionsResponse
   */
  async listExtensionsWithOptions(request: $_model.ListExtensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExtensionsResponse> {
    request.validate();
    let query = { };
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
      action: "ListExtensions",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExtensionsResponse>(await this.callApi(params, req, runtime), new $_model.ListExtensionsResponse({}));
  }

  /**
   * Queries a list of extensions.
   * 
   * @param request - ListExtensionsRequest
   * @returns ListExtensionsResponse
   */
  async listExtensions(request: $_model.ListExtensionsRequest): Promise<$_model.ListExtensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExtensionsWithOptions(request, runtime);
  }

  /**
   * Queries the information about node types, such as the code and name.
   * 
   * @param request - ListFileTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileTypeResponse
   */
  async listFileTypeWithOptions(request: $_model.ListFileTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.locale)) {
      body["Locale"] = request.locale;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileType",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileTypeResponse>(await this.callApi(params, req, runtime), new $_model.ListFileTypeResponse({}));
  }

  /**
   * Queries the information about node types, such as the code and name.
   * 
   * @param request - ListFileTypeRequest
   * @returns ListFileTypeResponse
   */
  async listFileType(request: $_model.ListFileTypeRequest): Promise<$_model.ListFileTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileTypeWithOptions(request, runtime);
  }

  /**
   * Queries a list of file versions.
   * 
   * @param request - ListFileVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFileVersionsResponse
   */
  async listFileVersionsWithOptions(request: $_model.ListFileVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFileVersionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFileVersions",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFileVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFileVersionsResponse({}));
  }

  /**
   * Queries a list of file versions.
   * 
   * @param request - ListFileVersionsRequest
   * @returns ListFileVersionsResponse
   */
  async listFileVersions(request: $_model.ListFileVersionsRequest): Promise<$_model.ListFileVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFileVersionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of files.
   * 
   * @param request - ListFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFilesResponse
   */
  async listFilesWithOptions(request: $_model.ListFilesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exactFileName)) {
      body["ExactFileName"] = request.exactFileName;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileIdIn)) {
      body["FileIdIn"] = request.fileIdIn;
    }

    if (!$dara.isNull(request.fileTypes)) {
      body["FileTypes"] = request.fileTypes;
    }

    if (!$dara.isNull(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lastEditUser)) {
      body["LastEditUser"] = request.lastEditUser;
    }

    if (!$dara.isNull(request.needAbsoluteFolderPath)) {
      body["NeedAbsoluteFolderPath"] = request.needAbsoluteFolderPath;
    }

    if (!$dara.isNull(request.needContent)) {
      body["NeedContent"] = request.needContent;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.useType)) {
      body["UseType"] = request.useType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFiles",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListFilesResponse({}));
  }

  /**
   * Queries a list of files.
   * 
   * @param request - ListFilesRequest
   * @returns ListFilesResponse
   */
  async listFiles(request: $_model.ListFilesRequest): Promise<$_model.ListFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFilesWithOptions(request, runtime);
  }

  /**
   * Queries a list of folders.
   * 
   * @param request - ListFoldersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFoldersResponse
   */
  async listFoldersWithOptions(request: $_model.ListFoldersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListFoldersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentFolderPath)) {
      body["ParentFolderPath"] = request.parentFolderPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFolders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFoldersResponse>(await this.callApi(params, req, runtime), new $_model.ListFoldersResponse({}));
  }

  /**
   * Queries a list of folders.
   * 
   * @param request - ListFoldersRequest
   * @returns ListFoldersResponse
   */
  async listFolders(request: $_model.ListFoldersRequest): Promise<$_model.ListFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listFoldersWithOptions(request, runtime);
  }

  /**
   * Queries information about inner nodes. For example, you can call this operation to query the inner nodes of a node group or a do-while node. You cannot call this operation to query the inner nodes of a PAI node.
   * 
   * @param request - ListInnerNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInnerNodesResponse
   */
  async listInnerNodesWithOptions(request: $_model.ListInnerNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInnerNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.outerNodeId)) {
      body["OuterNodeId"] = request.outerNodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.programType)) {
      body["ProgramType"] = request.programType;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInnerNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInnerNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListInnerNodesResponse({}));
  }

  /**
   * Queries information about inner nodes. For example, you can call this operation to query the inner nodes of a node group or a do-while node. You cannot call this operation to query the inner nodes of a PAI node.
   * 
   * @param request - ListInnerNodesRequest
   * @returns ListInnerNodesResponse
   */
  async listInnerNodes(request: $_model.ListInnerNodesRequest): Promise<$_model.ListInnerNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInnerNodesWithOptions(request, runtime);
  }

  /**
   * Queries the trend of the number of auto triggered node instances within a specified period of time.
   * 
   * @param request - ListInstanceAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceAmountResponse
   */
  async listInstanceAmountWithOptions(request: $_model.ListInstanceAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginDate)) {
      body["BeginDate"] = request.beginDate;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceAmount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceAmountResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceAmountResponse({}));
  }

  /**
   * Queries the trend of the number of auto triggered node instances within a specified period of time.
   * 
   * @param request - ListInstanceAmountRequest
   * @returns ListInstanceAmountResponse
   */
  async listInstanceAmount(request: $_model.ListInstanceAmountRequest): Promise<$_model.ListInstanceAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceAmountWithOptions(request, runtime);
  }

  /**
   * Queries information about the historical records of all instances. One historical record is generated if an instance is rerun once.
   * 
   * @param request - ListInstanceHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceHistoryResponse
   */
  async listInstanceHistoryWithOptions(request: $_model.ListInstanceHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceHistory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceHistoryResponse({}));
  }

  /**
   * Queries information about the historical records of all instances. One historical record is generated if an instance is rerun once.
   * 
   * @param request - ListInstanceHistoryRequest
   * @returns ListInstanceHistoryResponse
   */
  async listInstanceHistory(request: $_model.ListInstanceHistoryRequest): Promise<$_model.ListInstanceHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceHistoryWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: $_model.ListInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginBizdate)) {
      body["BeginBizdate"] = request.beginBizdate;
    }

    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.endBizdate)) {
      body["EndBizdate"] = request.endBizdate;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.programType)) {
      body["ProgramType"] = request.programType;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries a list of instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the ancestor or descendant lineage of an entity.
   * 
   * @param request - ListLineageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLineageResponse
   */
  async listLineageWithOptions(request: $_model.ListLineageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListLineageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!$dara.isNull(request.entityQualifiedName)) {
      query["EntityQualifiedName"] = request.entityQualifiedName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLineage",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLineageResponse>(await this.callApi(params, req, runtime), new $_model.ListLineageResponse({}));
  }

  /**
   * Queries the ancestor or descendant lineage of an entity.
   * 
   * @param request - ListLineageRequest
   * @returns ListLineageResponse
   */
  async listLineage(request: $_model.ListLineageRequest): Promise<$_model.ListLineageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listLineageWithOptions(request, runtime);
  }

  /**
   * Queries the information about instances in a manually triggered workflow.
   * 
   * @param request - ListManualDagInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManualDagInstancesResponse
   */
  async listManualDagInstancesWithOptions(request: $_model.ListManualDagInstancesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListManualDagInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dagId)) {
      body["DagId"] = request.dagId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListManualDagInstances",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListManualDagInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListManualDagInstancesResponse({}));
  }

  /**
   * Queries the information about instances in a manually triggered workflow.
   * 
   * @param request - ListManualDagInstancesRequest
   * @returns ListManualDagInstancesResponse
   */
  async listManualDagInstances(request: $_model.ListManualDagInstancesRequest): Promise<$_model.ListManualDagInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listManualDagInstancesWithOptions(request, runtime);
  }

  /**
   * Queries the statistics on the number of phone call-based alerts or text message-based alerts reported within the tenant to which your account belongs during the previous 30 days.
   * 
   * @param request - ListMeasureDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMeasureDataResponse
   */
  async listMeasureDataWithOptions(request: $_model.ListMeasureDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMeasureDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.componentCode)) {
      query["ComponentCode"] = request.componentCode;
    }

    if (!$dara.isNull(request.domainCode)) {
      query["DomainCode"] = request.domainCode;
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
      action: "ListMeasureData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMeasureDataResponse>(await this.callApi(params, req, runtime), new $_model.ListMeasureDataResponse({}));
  }

  /**
   * Queries the statistics on the number of phone call-based alerts or text message-based alerts reported within the tenant to which your account belongs during the previous 30 days.
   * 
   * @param request - ListMeasureDataRequest
   * @returns ListMeasureDataResponse
   */
  async listMeasureData(request: $_model.ListMeasureDataRequest): Promise<$_model.ListMeasureDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMeasureDataWithOptions(request, runtime);
  }

  /**
   * Queries the entities in a collection.
   * 
   * @param request - ListMetaCollectionEntitiesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaCollectionEntitiesResponse
   */
  async listMetaCollectionEntitiesWithOptions(request: $_model.ListMetaCollectionEntitiesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaCollectionEntitiesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collectionQualifiedName)) {
      query["CollectionQualifiedName"] = request.collectionQualifiedName;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaCollectionEntities",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaCollectionEntitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaCollectionEntitiesResponse({}));
  }

  /**
   * Queries the entities in a collection.
   * 
   * @param request - ListMetaCollectionEntitiesRequest
   * @returns ListMetaCollectionEntitiesResponse
   */
  async listMetaCollectionEntities(request: $_model.ListMetaCollectionEntitiesRequest): Promise<$_model.ListMetaCollectionEntitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMetaCollectionEntitiesWithOptions(request, runtime);
  }

  /**
   * Queries information about collections. Collections include data albums that are displayed on the Data Map page and categories that are created in the data albums. You can call this API operation to query collections by type.
   * 
   * @remarks
   * The type can be ALBUM or ALBUM_CATEGORY. ALBUM indicates data albums. ALBUM_CATEGORY indicates categories.
   * 
   * @param request - ListMetaCollectionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaCollectionsResponse
   */
  async listMetaCollectionsWithOptions(request: $_model.ListMetaCollectionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaCollectionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.administrator)) {
      query["Administrator"] = request.administrator;
    }

    if (!$dara.isNull(request.collectionType)) {
      query["CollectionType"] = request.collectionType;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.follower)) {
      query["Follower"] = request.follower;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentQualifiedName)) {
      query["ParentQualifiedName"] = request.parentQualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaCollections",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaCollectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaCollectionsResponse({}));
  }

  /**
   * Queries information about collections. Collections include data albums that are displayed on the Data Map page and categories that are created in the data albums. You can call this API operation to query collections by type.
   * 
   * @remarks
   * The type can be ALBUM or ALBUM_CATEGORY. ALBUM indicates data albums. ALBUM_CATEGORY indicates categories.
   * 
   * @param request - ListMetaCollectionsRequest
   * @returns ListMetaCollectionsResponse
   */
  async listMetaCollections(request: $_model.ListMetaCollectionsRequest): Promise<$_model.ListMetaCollectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMetaCollectionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of metadatabases.
   * 
   * @param request - ListMetaDBRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMetaDBResponse
   */
  async listMetaDBWithOptions(request: $_model.ListMetaDBRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMetaDBResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMetaDB",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMetaDBResponse>(await this.callApi(params, req, runtime), new $_model.ListMetaDBResponse({}));
  }

  /**
   * Queries a list of metadatabases.
   * 
   * @param request - ListMetaDBRequest
   * @returns ListMetaDBResponse
   */
  async listMetaDB(request: $_model.ListMetaDBRequest): Promise<$_model.ListMetaDBResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMetaDBWithOptions(request, runtime);
  }

  /**
   * Queries a list of migration tasks.
   * 
   * @param request - ListMigrationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMigrationsResponse
   */
  async listMigrationsWithOptions(request: $_model.ListMigrationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListMigrationsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationType)) {
      body["MigrationType"] = request.migrationType;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMigrations",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMigrationsResponse>(await this.callApi(params, req, runtime), new $_model.ListMigrationsResponse({}));
  }

  /**
   * Queries a list of migration tasks.
   * 
   * @param request - ListMigrationsRequest
   * @returns ListMigrationsResponse
   */
  async listMigrations(request: $_model.ListMigrationsRequest): Promise<$_model.ListMigrationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listMigrationsWithOptions(request, runtime);
  }

  /**
   * Queries the information about one level of ancestor or descendant nodes of a node.
   * 
   * @deprecated OpenAPI ListNodeIO is deprecated
   * 
   * @param request - ListNodeIORequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeIOResponse
   */
  async listNodeIOWithOptions(request: $_model.ListNodeIORequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeIOResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ioType)) {
      body["IoType"] = request.ioType;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeIO",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeIOResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeIOResponse({}));
  }

  /**
   * Queries the information about one level of ancestor or descendant nodes of a node.
   * 
   * @deprecated OpenAPI ListNodeIO is deprecated
   * 
   * @param request - ListNodeIORequest
   * @returns ListNodeIOResponse
   */
  // Deprecated
  async listNodeIO(request: $_model.ListNodeIORequest): Promise<$_model.ListNodeIOResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeIOWithOptions(request, runtime);
  }

  /**
   * Queries the input and output information about a node. Only the ancestor or descendant nodes at the nearest level can be queried each time.
   * 
   * @param request - ListNodeInputOrOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeInputOrOutputResponse
   */
  async listNodeInputOrOutputWithOptions(request: $_model.ListNodeInputOrOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodeInputOrOutputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ioType)) {
      body["IoType"] = request.ioType;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodeInputOrOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodeInputOrOutputResponse>(await this.callApi(params, req, runtime), new $_model.ListNodeInputOrOutputResponse({}));
  }

  /**
   * Queries the input and output information about a node. Only the ancestor or descendant nodes at the nearest level can be queried each time.
   * 
   * @param request - ListNodeInputOrOutputRequest
   * @returns ListNodeInputOrOutputResponse
   */
  async listNodeInputOrOutput(request: $_model.ListNodeInputOrOutputRequest): Promise<$_model.ListNodeInputOrOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodeInputOrOutputWithOptions(request, runtime);
  }

  /**
   * The ID of the workspace.
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: $_model.ListNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizName)) {
      body["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.nodeName)) {
      body["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.programType)) {
      body["ProgramType"] = request.programType;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * The ID of the workspace.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * Queries nodes in a baseline.
   * 
   * @param request - ListNodesByBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesByBaselineResponse
   */
  async listNodesByBaselineWithOptions(request: $_model.ListNodesByBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesByBaselineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodesByBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesByBaselineResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesByBaselineResponse({}));
  }

  /**
   * Queries nodes in a baseline.
   * 
   * @param request - ListNodesByBaselineRequest
   * @returns ListNodesByBaselineResponse
   */
  async listNodesByBaseline(request: $_model.ListNodesByBaselineRequest): Promise<$_model.ListNodesByBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesByBaselineWithOptions(request, runtime);
  }

  /**
   * Queries nodes based on the output of the nodes.
   * 
   * @param request - ListNodesByOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesByOutputResponse
   */
  async listNodesByOutputWithOptions(request: $_model.ListNodesByOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesByOutputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outputs)) {
      body["Outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodesByOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesByOutputResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesByOutputResponse({}));
  }

  /**
   * Queries nodes based on the output of the nodes.
   * 
   * @param request - ListNodesByOutputRequest
   * @returns ListNodesByOutputResponse
   */
  async listNodesByOutput(request: $_model.ListNodesByOutputRequest): Promise<$_model.ListNodesByOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNodesByOutputWithOptions(request, runtime);
  }

  /**
   * Views permission requests.
   * 
   * @param request - ListPermissionApplyOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionApplyOrdersResponse
   */
  async listPermissionApplyOrdersWithOptions(request: $_model.ListPermissionApplyOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionApplyOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applyType)) {
      query["ApplyType"] = request.applyType;
    }

    if (!$dara.isNull(request.catalogName)) {
      query["CatalogName"] = request.catalogName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.engineType)) {
      query["EngineType"] = request.engineType;
    }

    if (!$dara.isNull(request.flowStatus)) {
      query["FlowStatus"] = request.flowStatus;
    }

    if (!$dara.isNull(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissionApplyOrders",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionApplyOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionApplyOrdersResponse({}));
  }

  /**
   * Views permission requests.
   * 
   * @param request - ListPermissionApplyOrdersRequest
   * @returns ListPermissionApplyOrdersResponse
   */
  async listPermissionApplyOrders(request: $_model.ListPermissionApplyOrdersRequest): Promise<$_model.ListPermissionApplyOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPermissionApplyOrdersWithOptions(request, runtime);
  }

  /**
   * Queries the distribution of different types of nodes.
   * 
   * @deprecated OpenAPI ListProgramTypeCount is deprecated
   * 
   * @param request - ListProgramTypeCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProgramTypeCountResponse
   */
  async listProgramTypeCountWithOptions(request: $_model.ListProgramTypeCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProgramTypeCountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProgramTypeCount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProgramTypeCountResponse>(await this.callApi(params, req, runtime), new $_model.ListProgramTypeCountResponse({}));
  }

  /**
   * Queries the distribution of different types of nodes.
   * 
   * @deprecated OpenAPI ListProgramTypeCount is deprecated
   * 
   * @param request - ListProgramTypeCountRequest
   * @returns ListProgramTypeCountResponse
   */
  // Deprecated
  async listProgramTypeCount(request: $_model.ListProgramTypeCountRequest): Promise<$_model.ListProgramTypeCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProgramTypeCountWithOptions(request, runtime);
  }

  /**
   * Queries the IDs of the workspaces on which a specific Alibaba Cloud account or RAM user has permissions in a specific region.
   * 
   * @remarks
   * An Alibaba Cloud account can assume a role such as the developer, O\\&M engineer, or workspace administrator role in a workspace. For more information, see [Manage members and roles](https://help.aliyun.com/document_detail/136941.html).
   * 
   * @param request - ListProjectIdsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectIdsResponse
   */
  async listProjectIdsWithOptions(request: $_model.ListProjectIdsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectIdsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectIds",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectIdsResponse({}));
  }

  /**
   * Queries the IDs of the workspaces on which a specific Alibaba Cloud account or RAM user has permissions in a specific region.
   * 
   * @remarks
   * An Alibaba Cloud account can assume a role such as the developer, O\\&M engineer, or workspace administrator role in a workspace. For more information, see [Manage members and roles](https://help.aliyun.com/document_detail/136941.html).
   * 
   * @param request - ListProjectIdsRequest
   * @returns ListProjectIdsResponse
   */
  async listProjectIds(request: $_model.ListProjectIdsRequest): Promise<$_model.ListProjectIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectIdsWithOptions(request, runtime);
  }

  /**
   * Queries a list of existing members in a DataWorks workspace.
   * 
   * @param request - ListProjectMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectMembersResponse
   */
  async listProjectMembersWithOptions(request: $_model.ListProjectMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectMembers",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectMembersResponse({}));
  }

  /**
   * Queries a list of existing members in a DataWorks workspace.
   * 
   * @param request - ListProjectMembersRequest
   * @returns ListProjectMembersResponse
   */
  async listProjectMembers(request: $_model.ListProjectMembersRequest): Promise<$_model.ListProjectMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectMembersWithOptions(request, runtime);
  }

  /**
   * Queries a list of roles in a DataWorks workspace.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=ListProjectRoles\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - ListProjectRolesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectRolesResponse
   */
  async listProjectRolesWithOptions(request: $_model.ListProjectRolesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectRolesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjectRoles",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectRolesResponse({}));
  }

  /**
   * Queries a list of roles in a DataWorks workspace.
   * 
   * @remarks
   * ## Debugging
   * [OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=dataworks-public\\&api=ListProjectRoles\\&type=RPC\\&version=2020-05-18)
   * 
   * @param request - ListProjectRolesRequest
   * @returns ListProjectRolesResponse
   */
  async listProjectRoles(request: $_model.ListProjectRolesRequest): Promise<$_model.ListProjectRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectRolesWithOptions(request, runtime);
  }

  /**
   * Queries a list of DataWorks workspaces of the tenant to which a user belongs.
   * 
   * @param tmpReq - ListProjectsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * Queries a list of DataWorks workspaces of the tenant to which a user belongs.
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  /**
   * Queries a list of historical check results based on a partition filter expression.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListQualityResultsByEntityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityResultsByEntityResponse
   */
  async listQualityResultsByEntityWithOptions(request: $_model.ListQualityResultsByEntityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityResultsByEntityResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityResultsByEntity",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityResultsByEntityResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityResultsByEntityResponse({}));
  }

  /**
   * Queries a list of historical check results based on a partition filter expression.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListQualityResultsByEntityRequest
   * @returns ListQualityResultsByEntityResponse
   */
  async listQualityResultsByEntity(request: $_model.ListQualityResultsByEntityRequest): Promise<$_model.ListQualityResultsByEntityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityResultsByEntityWithOptions(request, runtime);
  }

  /**
   * Queries monitoring results after the data quality of a data source or a compute engine is monitored based on monitoring rules.
   * 
   * @param request - ListQualityResultsByRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityResultsByRuleResponse
   */
  async listQualityResultsByRuleWithOptions(request: $_model.ListQualityResultsByRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityResultsByRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.ruleId)) {
      body["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityResultsByRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityResultsByRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityResultsByRuleResponse({}));
  }

  /**
   * Queries monitoring results after the data quality of a data source or a compute engine is monitored based on monitoring rules.
   * 
   * @param request - ListQualityResultsByRuleRequest
   * @returns ListQualityResultsByRuleResponse
   */
  async listQualityResultsByRule(request: $_model.ListQualityResultsByRuleRequest): Promise<$_model.ListQualityResultsByRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityResultsByRuleWithOptions(request, runtime);
  }

  /**
   * Queries monitoring rules based on a partition filter expression.
   * 
   * @param request - ListQualityRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQualityRulesResponse
   */
  async listQualityRulesWithOptions(request: $_model.ListQualityRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListQualityRulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQualityRules",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQualityRulesResponse>(await this.callApi(params, req, runtime), new $_model.ListQualityRulesResponse({}));
  }

  /**
   * Queries monitoring rules based on a partition filter expression.
   * 
   * @param request - ListQualityRulesRequest
   * @returns ListQualityRulesResponse
   */
  async listQualityRules(request: $_model.ListQualityRulesRequest): Promise<$_model.ListQualityRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listQualityRulesWithOptions(request, runtime);
  }

  /**
   * Queries synchronization tasks in Data Integration that use a specific data source.
   * 
   * @param request - ListRefDISyncTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRefDISyncTasksResponse
   */
  async listRefDISyncTasksWithOptions(request: $_model.ListRefDISyncTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRefDISyncTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.refType)) {
      query["RefType"] = request.refType;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRefDISyncTasks",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRefDISyncTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListRefDISyncTasksResponse({}));
  }

  /**
   * Queries synchronization tasks in Data Integration that use a specific data source.
   * 
   * @param request - ListRefDISyncTasksRequest
   * @returns ListRefDISyncTasksResponse
   */
  async listRefDISyncTasks(request: $_model.ListRefDISyncTasksRequest): Promise<$_model.ListRefDISyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRefDISyncTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of custom alert rules.
   * 
   * @param request - ListRemindsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRemindsResponse
   */
  async listRemindsWithOptions(request: $_model.ListRemindsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRemindsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertTarget)) {
      body["AlertTarget"] = request.alertTarget;
    }

    if (!$dara.isNull(request.founder)) {
      body["Founder"] = request.founder;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remindTypes)) {
      body["RemindTypes"] = request.remindTypes;
    }

    if (!$dara.isNull(request.searchText)) {
      body["SearchText"] = request.searchText;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReminds",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRemindsResponse>(await this.callApi(params, req, runtime), new $_model.ListRemindsResponse({}));
  }

  /**
   * Queries a list of custom alert rules.
   * 
   * @param request - ListRemindsRequest
   * @returns ListRemindsResponse
   */
  async listReminds(request: $_model.ListRemindsRequest): Promise<$_model.ListRemindsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRemindsWithOptions(request, runtime);
  }

  /**
   * Queries a list of resource groups of a specific type.
   * 
   * @param tmpReq - ListResourceGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(tmpReq: $_model.ListResourceGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceGroupsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.bizExtKey)) {
      query["BizExtKey"] = request.bizExtKey;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.resourceGroupType)) {
      query["ResourceGroupType"] = request.resourceGroupType;
    }

    if (!$dara.isNull(request.resourceManagerResourceGroupId)) {
      query["ResourceManagerResourceGroupId"] = request.resourceManagerResourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsResponse({}));
  }

  /**
   * Queries a list of resource groups of a specific type.
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of on-duty engineers in a shift schedule.
   * 
   * @param request - ListShiftPersonnelsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShiftPersonnelsResponse
   */
  async listShiftPersonnelsWithOptions(request: $_model.ListShiftPersonnelsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListShiftPersonnelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.shiftPersonUID)) {
      body["ShiftPersonUID"] = request.shiftPersonUID;
    }

    if (!$dara.isNull(request.shiftScheduleIdentifier)) {
      body["ShiftScheduleIdentifier"] = request.shiftScheduleIdentifier;
    }

    if (!$dara.isNull(request.userType)) {
      body["UserType"] = request.userType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShiftPersonnels",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShiftPersonnelsResponse>(await this.callApi(params, req, runtime), new $_model.ListShiftPersonnelsResponse({}));
  }

  /**
   * Queries a list of on-duty engineers in a shift schedule.
   * 
   * @param request - ListShiftPersonnelsRequest
   * @returns ListShiftPersonnelsResponse
   */
  async listShiftPersonnels(request: $_model.ListShiftPersonnelsRequest): Promise<$_model.ListShiftPersonnelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listShiftPersonnelsWithOptions(request, runtime);
  }

  /**
   * Queries a list of shift schedules in Operation Center.
   * 
   * @param request - ListShiftSchedulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShiftSchedulesResponse
   */
  async listShiftSchedulesWithOptions(request: $_model.ListShiftSchedulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListShiftSchedulesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.shiftScheduleName)) {
      body["ShiftScheduleName"] = request.shiftScheduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShiftSchedules",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShiftSchedulesResponse>(await this.callApi(params, req, runtime), new $_model.ListShiftSchedulesResponse({}));
  }

  /**
   * Queries a list of shift schedules in Operation Center.
   * 
   * @param request - ListShiftSchedulesRequest
   * @returns ListShiftSchedulesResponse
   */
  async listShiftSchedules(request: $_model.ListShiftSchedulesRequest): Promise<$_model.ListShiftSchedulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listShiftSchedulesWithOptions(request, runtime);
  }

  /**
   * Queries the trend of the number of auto triggered node instances that are successfully run every hour on the hour of the current day.
   * 
   * @param request - ListSuccessInstanceAmountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSuccessInstanceAmountResponse
   */
  async listSuccessInstanceAmountWithOptions(request: $_model.ListSuccessInstanceAmountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSuccessInstanceAmountResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSuccessInstanceAmount",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSuccessInstanceAmountResponse>(await this.callApi(params, req, runtime), new $_model.ListSuccessInstanceAmountResponse({}));
  }

  /**
   * Queries the trend of the number of auto triggered node instances that are successfully run every hour on the hour of the current day.
   * 
   * @param request - ListSuccessInstanceAmountRequest
   * @returns ListSuccessInstanceAmountResponse
   */
  async listSuccessInstanceAmount(request: $_model.ListSuccessInstanceAmountRequest): Promise<$_model.ListSuccessInstanceAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSuccessInstanceAmountWithOptions(request, runtime);
  }

  /**
   * Queries a list of table levels. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - ListTableLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableLevelResponse
   */
  async listTableLevelWithOptions(request: $_model.ListTableLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableLevelResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableLevelResponse>(await this.callApi(params, req, runtime), new $_model.ListTableLevelResponse({}));
  }

  /**
   * Queries a list of table levels. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - ListTableLevelRequest
   * @returns ListTableLevelResponse
   */
  async listTableLevel(request: $_model.ListTableLevelRequest): Promise<$_model.ListTableLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTableLevelWithOptions(request, runtime);
  }

  /**
   * Queries a list of table themes. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - ListTableThemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableThemeResponse
   */
  async listTableThemeWithOptions(request: $_model.ListTableThemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableThemeResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableThemeResponse>(await this.callApi(params, req, runtime), new $_model.ListTableThemeResponse({}));
  }

  /**
   * Queries a list of table themes. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - ListTableThemeRequest
   * @returns ListTableThemeResponse
   */
  async listTableTheme(request: $_model.ListTableThemeRequest): Promise<$_model.ListTableThemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTableThemeWithOptions(request, runtime);
  }

  /**
   * Obtains tables of different data source types within a tenant by page.
   * 
   * @param request - ListTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(request: $_model.ListTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2020-05-18",
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
   * Obtains tables of different data source types within a tenant by page.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTablesWithOptions(request, runtime);
  }

  /**
   * Queries events.
   * 
   * @param request - ListTopicsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTopicsResponse
   */
  async listTopicsWithOptions(request: $_model.ListTopicsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTopicsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginTime)) {
      body["BeginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.topicStatuses)) {
      body["TopicStatuses"] = request.topicStatuses;
    }

    if (!$dara.isNull(request.topicTypes)) {
      body["TopicTypes"] = request.topicTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTopics",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTopicsResponse>(await this.callApi(params, req, runtime), new $_model.ListTopicsResponse({}));
  }

  /**
   * Queries events.
   * 
   * @param request - ListTopicsRequest
   * @returns ListTopicsResponse
   */
  async listTopics(request: $_model.ListTopicsRequest): Promise<$_model.ListTopicsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTopicsWithOptions(request, runtime);
  }

  /**
   * Undeploys a node.
   * 
   * @param request - OfflineNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OfflineNodeResponse
   */
  async offlineNodeWithOptions(request: $_model.OfflineNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OfflineNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OfflineNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OfflineNodeResponse>(await this.callApi(params, req, runtime), new $_model.OfflineNodeResponse({}));
  }

  /**
   * Undeploys a node.
   * 
   * @param request - OfflineNodeRequest
   * @returns OfflineNodeResponse
   */
  async offlineNode(request: $_model.OfflineNodeRequest): Promise<$_model.OfflineNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.offlineNodeWithOptions(request, runtime);
  }

  /**
   * Publishes an API.
   * 
   * @param request - PublishDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDataServiceApiResponse
   */
  async publishDataServiceApiWithOptions(request: $_model.PublishDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.PublishDataServiceApiResponse({}));
  }

  /**
   * Publishes an API.
   * 
   * @param request - PublishDataServiceApiRequest
   * @returns PublishDataServiceApiResponse
   */
  async publishDataServiceApi(request: $_model.PublishDataServiceApiRequest): Promise<$_model.PublishDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Queries the execution results of an asynchronous task.
   * 
   * @remarks
   * DataWorks allows you to call only the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to create a batch synchronization task or the [UpdateDISyncTask](https://help.aliyun.com/document_detail/289109.html) operation to update a batch synchronization task in Data Integration. To create or update a real-time synchronization task, you must first call the [GenerateDISyncTaskConfigForCreating](https://help.aliyun.com/document_detail/383463.html) or [GenerateDISyncTaskConfigForUpdating](https://help.aliyun.com/document_detail/383464.html) operation to obtain the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can call the CreateDISyncTask or UpdateDISyncTask operation and use the parameters as request parameters to create or update a real-time synchronization task. DataWorks allows you to create or update real-time synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - QueryDISyncTaskConfigProcessResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDISyncTaskConfigProcessResultResponse
   */
  async queryDISyncTaskConfigProcessResultWithOptions(request: $_model.QueryDISyncTaskConfigProcessResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDISyncTaskConfigProcessResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.asyncProcessId)) {
      query["AsyncProcessId"] = request.asyncProcessId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDISyncTaskConfigProcessResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDISyncTaskConfigProcessResultResponse>(await this.callApi(params, req, runtime), new $_model.QueryDISyncTaskConfigProcessResultResponse({}));
  }

  /**
   * Queries the execution results of an asynchronous task.
   * 
   * @remarks
   * DataWorks allows you to call only the [CreateDISyncTask](https://help.aliyun.com/document_detail/278725.html) operation to create a batch synchronization task or the [UpdateDISyncTask](https://help.aliyun.com/document_detail/289109.html) operation to update a batch synchronization task in Data Integration. To create or update a real-time synchronization task, you must first call the [GenerateDISyncTaskConfigForCreating](https://help.aliyun.com/document_detail/383463.html) or [GenerateDISyncTaskConfigForUpdating](https://help.aliyun.com/document_detail/383464.html) operation to obtain the ID of an asynchronous thread and call the [QueryDISyncTaskConfigProcessResult](https://help.aliyun.com/document_detail/383465.html) operation to obtain the asynchronously generated parameters based on the ID. Then, you can call the CreateDISyncTask or UpdateDISyncTask operation and use the parameters as request parameters to create or update a real-time synchronization task. DataWorks allows you to create or update real-time synchronization tasks in Data Integration only in asynchronous mode.
   * 
   * @param request - QueryDISyncTaskConfigProcessResultRequest
   * @returns QueryDISyncTaskConfigProcessResultResponse
   */
  async queryDISyncTaskConfigProcessResult(request: $_model.QueryDISyncTaskConfigProcessResultRequest): Promise<$_model.QueryDISyncTaskConfigProcessResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDISyncTaskConfigProcessResultWithOptions(request, runtime);
  }

  /**
   * Queries the default data category and data sensitivity level template defined by Data Security Guard.
   * 
   * @param request - QueryDefaultTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDefaultTemplateResponse
   */
  async queryDefaultTemplateWithOptions(request: $_model.QueryDefaultTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDefaultTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDefaultTemplate",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDefaultTemplateResponse>(await this.callApi(params, req, runtime), new $_model.QueryDefaultTemplateResponse({}));
  }

  /**
   * Queries the default data category and data sensitivity level template defined by Data Security Guard.
   * 
   * @param request - QueryDefaultTemplateRequest
   * @returns QueryDefaultTemplateResponse
   */
  async queryDefaultTemplate(request: $_model.QueryDefaultTemplateRequest): Promise<$_model.QueryDefaultTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDefaultTemplateWithOptions(request, runtime);
  }

  /**
   * Queries information about objects that are created in Data Modeling by using fast modeling language (FML) statements.
   * 
   * @remarks
   *   Each time you call this API operation, you must use FML statements to query information about objects that are created in Data Modeling.
   * *   The information about the objects can be queried by page, except for data layers, business processes, and data domains. You can add an offset to the end of an FML statement. The num LIMIT num statement specifies the offset when the information about the objects is queried, and the number of pages to return each time. The offset value must be a multiple of the number of pages.
   * *   A maximum of 1,000 entries can be returned each time you call this API operation.
   * 
   * @param request - QueryPublicModelEngineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPublicModelEngineResponse
   */
  async queryPublicModelEngineWithOptions(request: $_model.QueryPublicModelEngineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPublicModelEngineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.text)) {
      body["Text"] = request.text;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPublicModelEngine",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPublicModelEngineResponse>(await this.callApi(params, req, runtime), new $_model.QueryPublicModelEngineResponse({}));
  }

  /**
   * Queries information about objects that are created in Data Modeling by using fast modeling language (FML) statements.
   * 
   * @remarks
   *   Each time you call this API operation, you must use FML statements to query information about objects that are created in Data Modeling.
   * *   The information about the objects can be queried by page, except for data layers, business processes, and data domains. You can add an offset to the end of an FML statement. The num LIMIT num statement specifies the offset when the information about the objects is queried, and the number of pages to return each time. The offset value must be a multiple of the number of pages.
   * *   A maximum of 1,000 entries can be returned each time you call this API operation.
   * 
   * @param request - QueryPublicModelEngineRequest
   * @returns QueryPublicModelEngineResponse
   */
  async queryPublicModelEngine(request: $_model.QueryPublicModelEngineRequest): Promise<$_model.QueryPublicModelEngineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPublicModelEngineWithOptions(request, runtime);
  }

  /**
   * Queries the type of a sensitive data identification rule.
   * 
   * @param request - QueryRecognizeDataByRuleTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecognizeDataByRuleTypeResponse
   */
  async queryRecognizeDataByRuleTypeWithOptions(request: $_model.QueryRecognizeDataByRuleTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecognizeDataByRuleTypeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.recognizeRulesType)) {
      body["RecognizeRulesType"] = request.recognizeRulesType;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecognizeDataByRuleType",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecognizeDataByRuleTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecognizeDataByRuleTypeResponse({}));
  }

  /**
   * Queries the type of a sensitive data identification rule.
   * 
   * @param request - QueryRecognizeDataByRuleTypeRequest
   * @returns QueryRecognizeDataByRuleTypeResponse
   */
  async queryRecognizeDataByRuleType(request: $_model.QueryRecognizeDataByRuleTypeRequest): Promise<$_model.QueryRecognizeDataByRuleTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecognizeDataByRuleTypeWithOptions(request, runtime);
  }

  /**
   * Queries the details of a specified sensitive field in Data Security Guard.
   * 
   * @param request - QueryRecognizeRuleDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecognizeRuleDetailResponse
   */
  async queryRecognizeRuleDetailWithOptions(request: $_model.QueryRecognizeRuleDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecognizeRuleDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sensitiveName)) {
      body["SensitiveName"] = request.sensitiveName;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecognizeRuleDetail",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecognizeRuleDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecognizeRuleDetailResponse({}));
  }

  /**
   * Queries the details of a specified sensitive field in Data Security Guard.
   * 
   * @param request - QueryRecognizeRuleDetailRequest
   * @returns QueryRecognizeRuleDetailResponse
   */
  async queryRecognizeRuleDetail(request: $_model.QueryRecognizeRuleDetailRequest): Promise<$_model.QueryRecognizeRuleDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecognizeRuleDetailWithOptions(request, runtime);
  }

  /**
   * Queries the built-in sensitive data identification rule that is used to configure a sensitive field.
   * 
   * @param request - QueryRecognizeRulesTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRecognizeRulesTypeResponse
   */
  async queryRecognizeRulesTypeWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.QueryRecognizeRulesTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "QueryRecognizeRulesType",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryRecognizeRulesTypeResponse>(await this.callApi(params, req, runtime), new $_model.QueryRecognizeRulesTypeResponse({}));
  }

  /**
   * Queries the built-in sensitive data identification rule that is used to configure a sensitive field.
   * @returns QueryRecognizeRulesTypeResponse
   */
  async queryRecognizeRulesType(): Promise<$_model.QueryRecognizeRulesTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryRecognizeRulesTypeWithOptions(runtime);
  }

  /**
   * Queries data categories.
   * 
   * @param request - QuerySensClassificationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySensClassificationResponse
   */
  async querySensClassificationWithOptions(request: $_model.QuerySensClassificationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySensClassificationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySensClassification",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySensClassificationResponse>(await this.callApi(params, req, runtime), new $_model.QuerySensClassificationResponse({}));
  }

  /**
   * Queries data categories.
   * 
   * @param request - QuerySensClassificationRequest
   * @returns QuerySensClassificationResponse
   */
  async querySensClassification(request: $_model.QuerySensClassificationRequest): Promise<$_model.QuerySensClassificationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySensClassificationWithOptions(request, runtime);
  }

  /**
   * Queries data sensitivity levels in Data Security Guard.
   * 
   * @param request - QuerySensLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySensLevelResponse
   */
  async querySensLevelWithOptions(request: $_model.QuerySensLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySensLevelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["tenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySensLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySensLevelResponse>(await this.callApi(params, req, runtime), new $_model.QuerySensLevelResponse({}));
  }

  /**
   * Queries data sensitivity levels in Data Security Guard.
   * 
   * @param request - QuerySensLevelRequest
   * @returns QuerySensLevelResponse
   */
  async querySensLevel(request: $_model.QuerySensLevelRequest): Promise<$_model.QuerySensLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySensLevelWithOptions(request, runtime);
  }

  /**
   * Queries sensitive data identification rules.
   * 
   * @param request - QuerySensNodeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QuerySensNodeInfoResponse
   */
  async querySensNodeInfoWithOptions(request: $_model.QuerySensNodeInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QuerySensNodeInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sensitiveName)) {
      body["SensitiveName"] = request.sensitiveName;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QuerySensNodeInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QuerySensNodeInfoResponse>(await this.callApi(params, req, runtime), new $_model.QuerySensNodeInfoResponse({}));
  }

  /**
   * Queries sensitive data identification rules.
   * 
   * @param request - QuerySensNodeInfoRequest
   * @returns QuerySensNodeInfoResponse
   */
  async querySensNodeInfo(request: $_model.QuerySensNodeInfoRequest): Promise<$_model.QuerySensNodeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.querySensNodeInfoWithOptions(request, runtime);
  }

  /**
   * Registers the lineage between self-managed entities to DataWorks.
   * 
   * @remarks
   * This operation is in the trial phase. Users who need to call this operation can apply for it. The users can call this operation after the administrator adds the users to the trial list.
   * 
   * @param tmpReq - RegisterLineageRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterLineageRelationResponse
   */
  async registerLineageRelationWithOptions(tmpReq: $_model.RegisterLineageRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterLineageRelationResponse> {
    tmpReq.validate();
    let request = new $_model.RegisterLineageRelationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lineageRelationRegisterVO)) {
      request.lineageRelationRegisterVOShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lineageRelationRegisterVO, "LineageRelationRegisterVO", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lineageRelationRegisterVOShrink)) {
      body["LineageRelationRegisterVO"] = request.lineageRelationRegisterVOShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterLineageRelation",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterLineageRelationResponse>(await this.callApi(params, req, runtime), new $_model.RegisterLineageRelationResponse({}));
  }

  /**
   * Registers the lineage between self-managed entities to DataWorks.
   * 
   * @remarks
   * This operation is in the trial phase. Users who need to call this operation can apply for it. The users can call this operation after the administrator adds the users to the trial list.
   * 
   * @param request - RegisterLineageRelationRequest
   * @returns RegisterLineageRelationResponse
   */
  async registerLineageRelation(request: $_model.RegisterLineageRelationRequest): Promise<$_model.RegisterLineageRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerLineageRelationWithOptions(request, runtime);
  }

  /**
   * Removes tags from an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param tmpReq - RemoveEntityTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveEntityTagsResponse
   */
  async removeEntityTagsWithOptions(tmpReq: $_model.RemoveEntityTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveEntityTagsResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveEntityTagsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.qualifiedName)) {
      query["QualifiedName"] = request.qualifiedName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagKeysShrink)) {
      body["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveEntityTags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveEntityTagsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveEntityTagsResponse({}));
  }

  /**
   * Removes tags from an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param request - RemoveEntityTagsRequest
   * @returns RemoveEntityTagsResponse
   */
  async removeEntityTags(request: $_model.RemoveEntityTagsRequest): Promise<$_model.RemoveEntityTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeEntityTagsWithOptions(request, runtime);
  }

  /**
   * Removes a role from a user in a DataWorks workspace.
   * 
   * @param request - RemoveProjectMemberFromRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveProjectMemberFromRoleResponse
   */
  async removeProjectMemberFromRoleWithOptions(request: $_model.RemoveProjectMemberFromRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveProjectMemberFromRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.roleCode)) {
      query["RoleCode"] = request.roleCode;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveProjectMemberFromRole",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveProjectMemberFromRoleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveProjectMemberFromRoleResponse({}));
  }

  /**
   * Removes a role from a user in a DataWorks workspace.
   * 
   * @param request - RemoveProjectMemberFromRoleRequest
   * @returns RemoveProjectMemberFromRoleResponse
   */
  async removeProjectMemberFromRole(request: $_model.RemoveProjectMemberFromRoleRequest): Promise<$_model.RemoveProjectMemberFromRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeProjectMemberFromRoleWithOptions(request, runtime);
  }

  /**
   * Restarts an instance.
   * 
   * @param request - RestartInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(request: $_model.RestartInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * Restarts an instance.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartInstanceWithOptions(request, runtime);
  }

  /**
   * Resumes a suspended instance.
   * 
   * @param request - ResumeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeInstanceResponse
   */
  async resumeInstanceWithOptions(request: $_model.ResumeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeInstanceResponse({}));
  }

  /**
   * Resumes a suspended instance.
   * 
   * @param request - ResumeInstanceRequest
   * @returns ResumeInstanceResponse
   */
  async resumeInstance(request: $_model.ResumeInstanceRequest): Promise<$_model.ResumeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeInstanceWithOptions(request, runtime);
  }

  /**
   * Revokes permissions on a table from a user.
   * 
   * @param request - RevokeTablePermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeTablePermissionResponse
   */
  async revokeTablePermissionWithOptions(request: $_model.RevokeTablePermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeTablePermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.actions)) {
      query["Actions"] = request.actions;
    }

    if (!$dara.isNull(request.maxComputeProjectName)) {
      query["MaxComputeProjectName"] = request.maxComputeProjectName;
    }

    if (!$dara.isNull(request.revokeUserId)) {
      query["RevokeUserId"] = request.revokeUserId;
    }

    if (!$dara.isNull(request.revokeUserName)) {
      query["RevokeUserName"] = request.revokeUserName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeTablePermission",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeTablePermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeTablePermissionResponse({}));
  }

  /**
   * Revokes permissions on a table from a user.
   * 
   * @param request - RevokeTablePermissionRequest
   * @returns RevokeTablePermissionResponse
   */
  async revokeTablePermission(request: $_model.RevokeTablePermissionRequest): Promise<$_model.RevokeTablePermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeTablePermissionWithOptions(request, runtime);
  }

  /**
   * Creates a workflow to backfill data.
   * 
   * @remarks
   * For more information about data backfill, see [Backfill data](https://help.aliyun.com/document_detail/137937.html).
   * 
   * @param request - RunCycleDagNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunCycleDagNodesResponse
   */
  async runCycleDagNodesWithOptions(request: $_model.RunCycleDagNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunCycleDagNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertNoticeType)) {
      body["AlertNoticeType"] = request.alertNoticeType;
    }

    if (!$dara.isNull(request.alertType)) {
      body["AlertType"] = request.alertType;
    }

    if (!$dara.isNull(request.bizBeginTime)) {
      body["BizBeginTime"] = request.bizBeginTime;
    }

    if (!$dara.isNull(request.bizEndTime)) {
      body["BizEndTime"] = request.bizEndTime;
    }

    if (!$dara.isNull(request.concurrentRuns)) {
      body["ConcurrentRuns"] = request.concurrentRuns;
    }

    if (!$dara.isNull(request.endBizDate)) {
      body["EndBizDate"] = request.endBizDate;
    }

    if (!$dara.isNull(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!$dara.isNull(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!$dara.isNull(request.parallelism)) {
      body["Parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.rootNodeId)) {
      body["RootNodeId"] = request.rootNodeId;
    }

    if (!$dara.isNull(request.startBizDate)) {
      body["StartBizDate"] = request.startBizDate;
    }

    if (!$dara.isNull(request.startFutureInstanceImmediately)) {
      body["StartFutureInstanceImmediately"] = request.startFutureInstanceImmediately;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunCycleDagNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunCycleDagNodesResponse>(await this.callApi(params, req, runtime), new $_model.RunCycleDagNodesResponse({}));
  }

  /**
   * Creates a workflow to backfill data.
   * 
   * @remarks
   * For more information about data backfill, see [Backfill data](https://help.aliyun.com/document_detail/137937.html).
   * 
   * @param request - RunCycleDagNodesRequest
   * @returns RunCycleDagNodesResponse
   */
  async runCycleDagNodes(request: $_model.RunCycleDagNodesRequest): Promise<$_model.RunCycleDagNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runCycleDagNodesWithOptions(request, runtime);
  }

  /**
   * Runs nodes in a manually triggered workflow. Before you call this operation, make sure that the manually triggered workflow is committed and deployed. You can find a manually triggered workflow in Operation Center only after the manually triggered workflow is committed and deployed.
   * 
   * @param request - RunManualDagNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunManualDagNodesResponse
   */
  async runManualDagNodesWithOptions(request: $_model.RunManualDagNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunManualDagNodesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.dagParameters)) {
      body["DagParameters"] = request.dagParameters;
    }

    if (!$dara.isNull(request.endBizDate)) {
      body["EndBizDate"] = request.endBizDate;
    }

    if (!$dara.isNull(request.excludeNodeIds)) {
      body["ExcludeNodeIds"] = request.excludeNodeIds;
    }

    if (!$dara.isNull(request.flowName)) {
      body["FlowName"] = request.flowName;
    }

    if (!$dara.isNull(request.includeNodeIds)) {
      body["IncludeNodeIds"] = request.includeNodeIds;
    }

    if (!$dara.isNull(request.nodeParameters)) {
      body["NodeParameters"] = request.nodeParameters;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.startBizDate)) {
      body["StartBizDate"] = request.startBizDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunManualDagNodes",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunManualDagNodesResponse>(await this.callApi(params, req, runtime), new $_model.RunManualDagNodesResponse({}));
  }

  /**
   * Runs nodes in a manually triggered workflow. Before you call this operation, make sure that the manually triggered workflow is committed and deployed. You can find a manually triggered workflow in Operation Center only after the manually triggered workflow is committed and deployed.
   * 
   * @param request - RunManualDagNodesRequest
   * @returns RunManualDagNodesResponse
   */
  async runManualDagNodes(request: $_model.RunManualDagNodesRequest): Promise<$_model.RunManualDagNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runManualDagNodesWithOptions(request, runtime);
  }

  /**
   * Creates a workflow to perform smoke testing.
   * 
   * @param request - RunSmokeTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunSmokeTestResponse
   */
  async runSmokeTestWithOptions(request: $_model.RunSmokeTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunSmokeTestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizdate)) {
      body["Bizdate"] = request.bizdate;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.nodeParams)) {
      body["NodeParams"] = request.nodeParams;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunSmokeTest",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunSmokeTestResponse>(await this.callApi(params, req, runtime), new $_model.RunSmokeTestResponse({}));
  }

  /**
   * Creates a workflow to perform smoke testing.
   * 
   * @param request - RunSmokeTestRequest
   * @returns RunSmokeTestResponse
   */
  async runSmokeTest(request: $_model.RunSmokeTestRequest): Promise<$_model.RunSmokeTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runSmokeTestWithOptions(request, runtime);
  }

  /**
   * Runs a manually triggered node.
   * 
   * @param request - RunTriggerNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTriggerNodeResponse
   */
  async runTriggerNodeWithOptions(request: $_model.RunTriggerNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RunTriggerNodeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.bizDate)) {
      body["BizDate"] = request.bizDate;
    }

    if (!$dara.isNull(request.cycleTime)) {
      body["CycleTime"] = request.cycleTime;
    }

    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTriggerNode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunTriggerNodeResponse>(await this.callApi(params, req, runtime), new $_model.RunTriggerNodeResponse({}));
  }

  /**
   * Runs a manually triggered node.
   * 
   * @param request - RunTriggerNodeRequest
   * @returns RunTriggerNodeResponse
   */
  async runTriggerNode(request: $_model.RunTriggerNodeRequest): Promise<$_model.RunTriggerNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.runTriggerNodeWithOptions(request, runtime);
  }

  /**
   * Saves the test results of an API.
   * 
   * @param request - SaveDataServiceApiTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SaveDataServiceApiTestResultResponse
   */
  async saveDataServiceApiTestResultWithOptions(request: $_model.SaveDataServiceApiTestResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SaveDataServiceApiTestResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.autoGenerate)) {
      body["AutoGenerate"] = request.autoGenerate;
    }

    if (!$dara.isNull(request.failResultSample)) {
      body["FailResultSample"] = request.failResultSample;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resultSample)) {
      body["ResultSample"] = request.resultSample;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SaveDataServiceApiTestResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SaveDataServiceApiTestResultResponse>(await this.callApi(params, req, runtime), new $_model.SaveDataServiceApiTestResultResponse({}));
  }

  /**
   * Saves the test results of an API.
   * 
   * @param request - SaveDataServiceApiTestResultRequest
   * @returns SaveDataServiceApiTestResultResponse
   */
  async saveDataServiceApiTestResult(request: $_model.SaveDataServiceApiTestResultRequest): Promise<$_model.SaveDataServiceApiTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.saveDataServiceApiTestResultWithOptions(request, runtime);
  }

  /**
   * Checks whether input data contains sensitive data.
   * 
   * @param request - ScanSensitiveDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScanSensitiveDataResponse
   */
  async scanSensitiveDataWithOptions(request: $_model.ScanSensitiveDataRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ScanSensitiveDataResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScanSensitiveData",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ScanSensitiveDataResponse>(await this.callApi(params, req, runtime), new $_model.ScanSensitiveDataResponse({}));
  }

  /**
   * Checks whether input data contains sensitive data.
   * 
   * @param request - ScanSensitiveDataRequest
   * @returns ScanSensitiveDataResponse
   */
  async scanSensitiveData(request: $_model.ScanSensitiveDataRequest): Promise<$_model.ScanSensitiveDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.scanSensitiveDataWithOptions(request, runtime);
  }

  /**
   * Queries metatables based on specific conditions.
   * 
   * @remarks
   * You can call this operation to query only metatables in a MaxCompute or E-MapReduce (EMR) compute engine.
   * 
   * @param request - SearchMetaTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMetaTablesResponse
   */
  async searchMetaTablesWithOptions(request: $_model.SearchMetaTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMetaTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.entityType)) {
      query["EntityType"] = request.entityType;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMetaTables",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMetaTablesResponse>(await this.callApi(params, req, runtime), new $_model.SearchMetaTablesResponse({}));
  }

  /**
   * Queries metatables based on specific conditions.
   * 
   * @remarks
   * You can call this operation to query only metatables in a MaxCompute or E-MapReduce (EMR) compute engine.
   * 
   * @param request - SearchMetaTablesRequest
   * @returns SearchMetaTablesResponse
   */
  async searchMetaTables(request: $_model.SearchMetaTablesRequest): Promise<$_model.SearchMetaTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMetaTablesWithOptions(request, runtime);
  }

  /**
   * Queries a node based on the output.
   * 
   * @deprecated OpenAPI SearchNodesByOutput is deprecated
   * 
   * @param request - SearchNodesByOutputRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchNodesByOutputResponse
   */
  async searchNodesByOutputWithOptions(request: $_model.SearchNodesByOutputRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchNodesByOutputResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.outputs)) {
      body["Outputs"] = request.outputs;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchNodesByOutput",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchNodesByOutputResponse>(await this.callApi(params, req, runtime), new $_model.SearchNodesByOutputResponse({}));
  }

  /**
   * Queries a node based on the output.
   * 
   * @deprecated OpenAPI SearchNodesByOutput is deprecated
   * 
   * @param request - SearchNodesByOutputRequest
   * @returns SearchNodesByOutputResponse
   */
  // Deprecated
  async searchNodesByOutput(request: $_model.SearchNodesByOutputRequest): Promise<$_model.SearchNodesByOutputResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchNodesByOutputWithOptions(request, runtime);
  }

  /**
   * Shares a data source to a specific DataWorks workspace or a specific user.
   * 
   * @deprecated OpenAPI SetDataSourceShare is deprecated
   * 
   * @param request - SetDataSourceShareRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetDataSourceShareResponse
   */
  async setDataSourceShareWithOptions(request: $_model.SetDataSourceShareRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetDataSourceShareResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectPermissions)) {
      query["ProjectPermissions"] = request.projectPermissions;
    }

    if (!$dara.isNull(request.userPermissions)) {
      query["UserPermissions"] = request.userPermissions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetDataSourceShare",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetDataSourceShareResponse>(await this.callApi(params, req, runtime), new $_model.SetDataSourceShareResponse({}));
  }

  /**
   * Shares a data source to a specific DataWorks workspace or a specific user.
   * 
   * @deprecated OpenAPI SetDataSourceShare is deprecated
   * 
   * @param request - SetDataSourceShareRequest
   * @returns SetDataSourceShareResponse
   */
  // Deprecated
  async setDataSourceShare(request: $_model.SetDataSourceShareRequest): Promise<$_model.SetDataSourceShareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setDataSourceShareWithOptions(request, runtime);
  }

  /**
   * Configures tags for an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param tmpReq - SetEntityTagsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetEntityTagsResponse
   */
  async setEntityTagsWithOptions(tmpReq: $_model.SetEntityTagsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetEntityTagsResponse> {
    tmpReq.validate();
    let request = new $_model.SetEntityTagsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.qualifiedName)) {
      query["QualifiedName"] = request.qualifiedName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetEntityTags",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetEntityTagsResponse>(await this.callApi(params, req, runtime), new $_model.SetEntityTagsResponse({}));
  }

  /**
   * Configures tags for an entity. Only entities of the maxcompute-table type are supported.
   * 
   * @param request - SetEntityTagsRequest
   * @returns SetEntityTagsResponse
   */
  async setEntityTags(request: $_model.SetEntityTagsRequest): Promise<$_model.SetEntityTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setEntityTagsWithOptions(request, runtime);
  }

  /**
   * Sets the state of a failed instance to successful.
   * 
   * @param request - SetSuccessInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetSuccessInstanceResponse
   */
  async setSuccessInstanceWithOptions(request: $_model.SetSuccessInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetSuccessInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetSuccessInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetSuccessInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SetSuccessInstanceResponse({}));
  }

  /**
   * Sets the state of a failed instance to successful.
   * 
   * @param request - SetSuccessInstanceRequest
   * @returns SetSuccessInstanceResponse
   */
  async setSuccessInstance(request: $_model.SetSuccessInstanceRequest): Promise<$_model.SetSuccessInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setSuccessInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a synchronization task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @param tmpReq - StartDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDIJobResponse
   */
  async startDIJobWithOptions(tmpReq: $_model.StartDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.StartDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.realtimeStartSettings)) {
      request.realtimeStartSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.realtimeStartSettings, "RealtimeStartSettings", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    if (!$dara.isNull(request.forceToRerun)) {
      body["ForceToRerun"] = request.forceToRerun;
    }

    if (!$dara.isNull(request.realtimeStartSettingsShrink)) {
      body["RealtimeStartSettings"] = request.realtimeStartSettingsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDIJobResponse>(await this.callApi(params, req, runtime), new $_model.StartDIJobResponse({}));
  }

  /**
   * Starts a synchronization task of a new version. Only the following type of task is supported: real-time data synchronization from a MySQL database to Hologres.
   * 
   * @param request - StartDIJobRequest
   * @returns StartDIJobResponse
   */
  async startDIJob(request: $_model.StartDIJobRequest): Promise<$_model.StartDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDIJobWithOptions(request, runtime);
  }

  /**
   * Starts a real-time synchronization task or a synchronization solution.
   * 
   * @param request - StartDISyncInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDISyncInstanceResponse
   */
  async startDISyncInstanceWithOptions(request: $_model.StartDISyncInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDISyncInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.startParam)) {
      query["StartParam"] = request.startParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDISyncInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartDISyncInstanceResponse({}));
  }

  /**
   * Starts a real-time synchronization task or a synchronization solution.
   * 
   * @param request - StartDISyncInstanceRequest
   * @returns StartDISyncInstanceResponse
   */
  async startDISyncInstance(request: $_model.StartDISyncInstanceRequest): Promise<$_model.StartDISyncInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDISyncInstanceWithOptions(request, runtime);
  }

  /**
   * Starts a migration task.
   * 
   * @param request - StartMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartMigrationResponse
   */
  async startMigrationWithOptions(request: $_model.StartMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartMigrationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.migrationId)) {
      body["MigrationId"] = request.migrationId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartMigration",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartMigrationResponse>(await this.callApi(params, req, runtime), new $_model.StartMigrationResponse({}));
  }

  /**
   * Starts a migration task.
   * 
   * @param request - StartMigrationRequest
   * @returns StartMigrationResponse
   */
  async startMigration(request: $_model.StartMigrationRequest): Promise<$_model.StartMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startMigrationWithOptions(request, runtime);
  }

  /**
   * Stops a new-version synchronization task. The following type of synchronization task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param request - StopDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDIJobResponse
   */
  async stopDIJobWithOptions(request: $_model.StopDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDIJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDIJobResponse>(await this.callApi(params, req, runtime), new $_model.StopDIJobResponse({}));
  }

  /**
   * Stops a new-version synchronization task. The following type of synchronization task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param request - StopDIJobRequest
   * @returns StopDIJobResponse
   */
  async stopDIJob(request: $_model.StopDIJobRequest): Promise<$_model.StopDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDIJobWithOptions(request, runtime);
  }

  /**
   * Stops a real-time synchronization task.
   * 
   * @param request - StopDISyncInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDISyncInstanceResponse
   */
  async stopDISyncInstanceWithOptions(request: $_model.StopDISyncInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopDISyncInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDISyncInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopDISyncInstanceResponse({}));
  }

  /**
   * Stops a real-time synchronization task.
   * 
   * @param request - StopDISyncInstanceRequest
   * @returns StopDISyncInstanceResponse
   */
  async stopDISyncInstance(request: $_model.StopDISyncInstanceRequest): Promise<$_model.StopDISyncInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopDISyncInstanceWithOptions(request, runtime);
  }

  /**
   * Terminates an instance.
   * 
   * @param request - StopInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(request: $_model.StopInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * Terminates an instance.
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopInstanceWithOptions(request, runtime);
  }

  /**
   * Submits an API in DataService Studio.
   * 
   * @param request - SubmitDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitDataServiceApiResponse
   */
  async submitDataServiceApiWithOptions(request: $_model.SubmitDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.SubmitDataServiceApiResponse({}));
  }

  /**
   * Submits an API in DataService Studio.
   * 
   * @param request - SubmitDataServiceApiRequest
   * @returns SubmitDataServiceApiResponse
   */
  async submitDataServiceApi(request: $_model.SubmitDataServiceApiRequest): Promise<$_model.SubmitDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Commits a file to the development environment of the scheduling system to generate a task.
   * 
   * @param request - SubmitFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitFileResponse
   */
  async submitFileWithOptions(request: $_model.SubmitFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.skipAllDeployFileExtensions)) {
      body["SkipAllDeployFileExtensions"] = request.skipAllDeployFileExtensions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitFileResponse>(await this.callApi(params, req, runtime), new $_model.SubmitFileResponse({}));
  }

  /**
   * Commits a file to the development environment of the scheduling system to generate a task.
   * 
   * @param request - SubmitFileRequest
   * @returns SubmitFileResponse
   */
  async submitFile(request: $_model.SubmitFileRequest): Promise<$_model.SubmitFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitFileWithOptions(request, runtime);
  }

  /**
   * Suspends an instance.
   * 
   * @param request - SuspendInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SuspendInstanceResponse
   */
  async suspendInstanceWithOptions(request: $_model.SuspendInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SuspendInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SuspendInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SuspendInstanceResponse>(await this.callApi(params, req, runtime), new $_model.SuspendInstanceResponse({}));
  }

  /**
   * Suspends an instance.
   * 
   * @param request - SuspendInstanceRequest
   * @returns SuspendInstanceResponse
   */
  async suspendInstance(request: $_model.SuspendInstanceRequest): Promise<$_model.SuspendInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.suspendInstanceWithOptions(request, runtime);
  }

  /**
   * Undeploys a real-time synchronization task.
   * 
   * @param request - TerminateDISyncInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateDISyncInstanceResponse
   */
  async terminateDISyncInstanceWithOptions(request: $_model.TerminateDISyncInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateDISyncInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TerminateDISyncInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateDISyncInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TerminateDISyncInstanceResponse({}));
  }

  /**
   * Undeploys a real-time synchronization task.
   * 
   * @param request - TerminateDISyncInstanceRequest
   * @returns TerminateDISyncInstanceResponse
   */
  async terminateDISyncInstance(request: $_model.TerminateDISyncInstanceRequest): Promise<$_model.TerminateDISyncInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.terminateDISyncInstanceWithOptions(request, runtime);
  }

  /**
   * Tests a DataService Studio API in asynchronous mode. You can call the GetDataServiceApiTest operation to query the test result.
   * 
   * @param request - TestDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestDataServiceApiResponse
   */
  async testDataServiceApiWithOptions(request: $_model.TestDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestDataServiceApiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.apiId)) {
      query["ApiId"] = request.apiId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyContent)) {
      body["BodyContent"] = request.bodyContent;
    }

    if (!$dara.isNull(request.bodyParams)) {
      body["BodyParams"] = request.bodyParams;
    }

    if (!$dara.isNull(request.headParams)) {
      body["HeadParams"] = request.headParams;
    }

    if (!$dara.isNull(request.pathParams)) {
      body["PathParams"] = request.pathParams;
    }

    if (!$dara.isNull(request.queryParam)) {
      body["QueryParam"] = request.queryParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.TestDataServiceApiResponse({}));
  }

  /**
   * Tests a DataService Studio API in asynchronous mode. You can call the GetDataServiceApiTest operation to query the test result.
   * 
   * @param request - TestDataServiceApiRequest
   * @returns TestDataServiceApiResponse
   */
  async testDataServiceApi(request: $_model.TestDataServiceApiRequest): Promise<$_model.TestDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Tests the network connectivity between a data source and a resource group.
   * 
   * @param request - TestNetworkConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TestNetworkConnectionResponse
   */
  async testNetworkConnectionWithOptions(request: $_model.TestNetworkConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TestNetworkConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.datasourceName)) {
      query["DatasourceName"] = request.datasourceName;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TestNetworkConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TestNetworkConnectionResponse>(await this.callApi(params, req, runtime), new $_model.TestNetworkConnectionResponse({}));
  }

  /**
   * Tests the network connectivity between a data source and a resource group.
   * 
   * @param request - TestNetworkConnectionRequest
   * @returns TestNetworkConnectionResponse
   */
  async testNetworkConnection(request: $_model.TestNetworkConnectionRequest): Promise<$_model.TestNetworkConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.testNetworkConnectionWithOptions(request, runtime);
  }

  /**
   * Queries the ranking of the running durations of instances.
   * 
   * @param request - TopTenElapsedTimeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TopTenElapsedTimeInstanceResponse
   */
  async topTenElapsedTimeInstanceWithOptions(request: $_model.TopTenElapsedTimeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TopTenElapsedTimeInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TopTenElapsedTimeInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TopTenElapsedTimeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TopTenElapsedTimeInstanceResponse({}));
  }

  /**
   * Queries the ranking of the running durations of instances.
   * 
   * @param request - TopTenElapsedTimeInstanceRequest
   * @returns TopTenElapsedTimeInstanceResponse
   */
  async topTenElapsedTimeInstance(request: $_model.TopTenElapsedTimeInstanceRequest): Promise<$_model.TopTenElapsedTimeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.topTenElapsedTimeInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the ranking of nodes on which errors occur within the previous month.
   * 
   * @param request - TopTenErrorTimesInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TopTenErrorTimesInstanceResponse
   */
  async topTenErrorTimesInstanceWithOptions(request: $_model.TopTenErrorTimesInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TopTenErrorTimesInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TopTenErrorTimesInstance",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TopTenErrorTimesInstanceResponse>(await this.callApi(params, req, runtime), new $_model.TopTenErrorTimesInstanceResponse({}));
  }

  /**
   * Queries the ranking of nodes on which errors occur within the previous month.
   * 
   * @param request - TopTenErrorTimesInstanceRequest
   * @returns TopTenErrorTimesInstanceResponse
   */
  async topTenErrorTimesInstance(request: $_model.TopTenErrorTimesInstanceRequest): Promise<$_model.TopTenErrorTimesInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.topTenErrorTimesInstanceWithOptions(request, runtime);
  }

  /**
   * Updates a baseline.
   * 
   * @param tmpReq - UpdateBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBaselineResponse
   */
  async updateBaselineWithOptions(tmpReq: $_model.UpdateBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBaselineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertSettings)) {
      request.alertSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertSettings, "AlertSettings", "json");
    }

    if (!$dara.isNull(tmpReq.overtimeSettings)) {
      request.overtimeSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.overtimeSettings, "OvertimeSettings", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertEnabled)) {
      body["AlertEnabled"] = request.alertEnabled;
    }

    if (!$dara.isNull(request.alertMarginThreshold)) {
      body["AlertMarginThreshold"] = request.alertMarginThreshold;
    }

    if (!$dara.isNull(request.alertSettingsShrink)) {
      body["AlertSettings"] = request.alertSettingsShrink;
    }

    if (!$dara.isNull(request.baselineId)) {
      body["BaselineId"] = request.baselineId;
    }

    if (!$dara.isNull(request.baselineName)) {
      body["BaselineName"] = request.baselineName;
    }

    if (!$dara.isNull(request.baselineType)) {
      body["BaselineType"] = request.baselineType;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.overtimeSettingsShrink)) {
      body["OvertimeSettings"] = request.overtimeSettingsShrink;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.removeNodeIds)) {
      body["RemoveNodeIds"] = request.removeNodeIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBaseline",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBaselineResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBaselineResponse({}));
  }

  /**
   * Updates a baseline.
   * 
   * @param request - UpdateBaselineRequest
   * @returns UpdateBaselineResponse
   */
  async updateBaseline(request: $_model.UpdateBaselineRequest): Promise<$_model.UpdateBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBaselineWithOptions(request, runtime);
  }

  /**
   * Updates a workflow.
   * 
   * @param request - UpdateBusinessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBusinessResponse
   */
  async updateBusinessWithOptions(request: $_model.UpdateBusinessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBusinessResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessId)) {
      body["BusinessId"] = request.businessId;
    }

    if (!$dara.isNull(request.businessName)) {
      body["BusinessName"] = request.businessName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBusiness",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBusinessResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBusinessResponse({}));
  }

  /**
   * Updates a workflow.
   * 
   * @param request - UpdateBusinessRequest
   * @returns UpdateBusinessResponse
   */
  async updateBusiness(request: $_model.UpdateBusinessRequest): Promise<$_model.UpdateBusinessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBusinessWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of submodules in a workspace. You can configure SPARK parameters.
   * 
   * @param tmpReq - UpdateClusterConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterConfigsResponse
   */
  async updateClusterConfigsWithOptions(tmpReq: $_model.UpdateClusterConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateClusterConfigsResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateClusterConfigsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.configValues)) {
      request.configValuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.configValues, "ConfigValues", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configValuesShrink)) {
      body["ConfigValues"] = request.configValuesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateClusterConfigs",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateClusterConfigsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateClusterConfigsResponse({}));
  }

  /**
   * Updates the configurations of submodules in a workspace. You can configure SPARK parameters.
   * 
   * @param request - UpdateClusterConfigsRequest
   * @returns UpdateClusterConfigsResponse
   */
  async updateClusterConfigs(request: $_model.UpdateClusterConfigsRequest): Promise<$_model.UpdateClusterConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateClusterConfigsWithOptions(request, runtime);
  }

  /**
   * Updates a data source.
   * 
   * @deprecated OpenAPI UpdateConnection is deprecated, please use dataworks-public::2020-05-18::UpdateDataSource instead.
   * 
   * @param request - UpdateConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnectionResponse
   */
  async updateConnectionWithOptions(request: $_model.UpdateConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionId)) {
      query["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnectionResponse({}));
  }

  /**
   * Updates a data source.
   * 
   * @deprecated OpenAPI UpdateConnection is deprecated, please use dataworks-public::2020-05-18::UpdateDataSource instead.
   * 
   * @param request - UpdateConnectionRequest
   * @returns UpdateConnectionResponse
   */
  // Deprecated
  async updateConnection(request: $_model.UpdateConnectionRequest): Promise<$_model.UpdateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateConnectionWithOptions(request, runtime);
  }

  /**
   * Updates an alert rule for a new-version synchronization task. The following type of task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization. You must update all fields in the alert rule.
   * 
   * @param tmpReq - UpdateDIAlarmRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRuleWithOptions(tmpReq: $_model.UpdateDIAlarmRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDIAlarmRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDIAlarmRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.notificationSettings)) {
      request.notificationSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notificationSettings, "NotificationSettings", "json");
    }

    if (!$dara.isNull(tmpReq.triggerConditions)) {
      request.triggerConditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.triggerConditions, "TriggerConditions", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIAlarmRuleId)) {
      body["DIAlarmRuleId"] = request.DIAlarmRuleId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.enabled)) {
      body["Enabled"] = request.enabled;
    }

    if (!$dara.isNull(request.metricType)) {
      body["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.notificationSettingsShrink)) {
      body["NotificationSettings"] = request.notificationSettingsShrink;
    }

    if (!$dara.isNull(request.triggerConditionsShrink)) {
      body["TriggerConditions"] = request.triggerConditionsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDIAlarmRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDIAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDIAlarmRuleResponse({}));
  }

  /**
   * Updates an alert rule for a new-version synchronization task. The following type of task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @remarks
   * You can configure alert rules only for tasks that can be used for real-time data synchronization. You must update all fields in the alert rule.
   * 
   * @param request - UpdateDIAlarmRuleRequest
   * @returns UpdateDIAlarmRuleResponse
   */
  async updateDIAlarmRule(request: $_model.UpdateDIAlarmRuleRequest): Promise<$_model.UpdateDIAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDIAlarmRuleWithOptions(request, runtime);
  }

  /**
   * Updates a new-version synchronization task. The following type of task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param tmpReq - UpdateDIJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIJobResponse
   */
  async updateDIJobWithOptions(tmpReq: $_model.UpdateDIJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDIJobResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateDIJobShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.jobSettings)) {
      request.jobSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSettings, "JobSettings", "json");
    }

    if (!$dara.isNull(tmpReq.resourceSettings)) {
      request.resourceSettingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceSettings, "ResourceSettings", "json");
    }

    if (!$dara.isNull(tmpReq.tableMappings)) {
      request.tableMappingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tableMappings, "TableMappings", "json");
    }

    if (!$dara.isNull(tmpReq.transformationRules)) {
      request.transformationRulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.transformationRules, "TransformationRules", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.DIJobId)) {
      body["DIJobId"] = request.DIJobId;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.jobSettingsShrink)) {
      body["JobSettings"] = request.jobSettingsShrink;
    }

    if (!$dara.isNull(request.resourceSettingsShrink)) {
      body["ResourceSettings"] = request.resourceSettingsShrink;
    }

    if (!$dara.isNull(request.tableMappingsShrink)) {
      body["TableMappings"] = request.tableMappingsShrink;
    }

    if (!$dara.isNull(request.transformationRulesShrink)) {
      body["TransformationRules"] = request.transformationRulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDIJob",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDIJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDIJobResponse({}));
  }

  /**
   * Updates a new-version synchronization task. The following type of task is supported: real-time synchronization of all data in a MySQL database to Hologres.
   * 
   * @param request - UpdateDIJobRequest
   * @returns UpdateDIJobResponse
   */
  async updateDIJob(request: $_model.UpdateDIJobRequest): Promise<$_model.UpdateDIJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDIJobWithOptions(request, runtime);
  }

  /**
   * Modifies the default global configuration of synchronization solutions in a DataWorks workspace.
   * 
   * @remarks
   * DataWorks allows you to specify a default global configuration only for the processing rules of DDL messages in synchronization solutions. After you configure the **processing rules of DDL messages** in synchronization solutions, the configuration is used as the default global configuration and applies to all real-time synchronization tasks in the solutions. You can modify the **processing rules of DDL messages** based on your business requirements. For more information about how to configure a synchronization solution, see [Synchronization solutions](https://help.aliyun.com/document_detail/199008.html).
   * 
   * @param request - UpdateDIProjectConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDIProjectConfigResponse
   */
  async updateDIProjectConfigWithOptions(request: $_model.UpdateDIProjectConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDIProjectConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.projectConfig)) {
      query["ProjectConfig"] = request.projectConfig;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDIProjectConfig",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDIProjectConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDIProjectConfigResponse({}));
  }

  /**
   * Modifies the default global configuration of synchronization solutions in a DataWorks workspace.
   * 
   * @remarks
   * DataWorks allows you to specify a default global configuration only for the processing rules of DDL messages in synchronization solutions. After you configure the **processing rules of DDL messages** in synchronization solutions, the configuration is used as the default global configuration and applies to all real-time synchronization tasks in the solutions. You can modify the **processing rules of DDL messages** based on your business requirements. For more information about how to configure a synchronization solution, see [Synchronization solutions](https://help.aliyun.com/document_detail/199008.html).
   * 
   * @param request - UpdateDIProjectConfigRequest
   * @returns UpdateDIProjectConfigResponse
   */
  async updateDIProjectConfig(request: $_model.UpdateDIProjectConfigRequest): Promise<$_model.UpdateDIProjectConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDIProjectConfigWithOptions(request, runtime);
  }

  /**
   * Updates a data synchronization task.
   * 
   * @param request - UpdateDISyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDISyncTaskResponse
   */
  async updateDISyncTaskWithOptions(request: $_model.UpdateDISyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDISyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.taskContent)) {
      query["TaskContent"] = request.taskContent;
    }

    if (!$dara.isNull(request.taskParam)) {
      query["TaskParam"] = request.taskParam;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDISyncTask",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDISyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDISyncTaskResponse({}));
  }

  /**
   * Updates a data synchronization task.
   * 
   * @param request - UpdateDISyncTaskRequest
   * @returns UpdateDISyncTaskResponse
   */
  async updateDISyncTask(request: $_model.UpdateDISyncTaskRequest): Promise<$_model.UpdateDISyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDISyncTaskWithOptions(request, runtime);
  }

  /**
   * Updates the information about an API in the development state in DataService Studio.
   * 
   * @param request - UpdateDataServiceApiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataServiceApiResponse
   */
  async updateDataServiceApiWithOptions(request: $_model.UpdateDataServiceApiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataServiceApiResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiDescription)) {
      body["ApiDescription"] = request.apiDescription;
    }

    if (!$dara.isNull(request.apiId)) {
      body["ApiId"] = request.apiId;
    }

    if (!$dara.isNull(request.apiPath)) {
      body["ApiPath"] = request.apiPath;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.protocols)) {
      body["Protocols"] = request.protocols;
    }

    if (!$dara.isNull(request.registrationDetails)) {
      body["RegistrationDetails"] = request.registrationDetails;
    }

    if (!$dara.isNull(request.requestMethod)) {
      body["RequestMethod"] = request.requestMethod;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.responseContentType)) {
      body["ResponseContentType"] = request.responseContentType;
    }

    if (!$dara.isNull(request.scriptDetails)) {
      body["ScriptDetails"] = request.scriptDetails;
    }

    if (!$dara.isNull(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.visibleRange)) {
      body["VisibleRange"] = request.visibleRange;
    }

    if (!$dara.isNull(request.wizardDetails)) {
      body["WizardDetails"] = request.wizardDetails;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataServiceApi",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataServiceApiResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataServiceApiResponse({}));
  }

  /**
   * Updates the information about an API in the development state in DataService Studio.
   * 
   * @param request - UpdateDataServiceApiRequest
   * @returns UpdateDataServiceApiResponse
   */
  async updateDataServiceApi(request: $_model.UpdateDataServiceApiRequest): Promise<$_model.UpdateDataServiceApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataServiceApiWithOptions(request, runtime);
  }

  /**
   * Updates a data source.
   * 
   * @param request - UpdateDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDataSourceResponse
   */
  async updateDataSourceWithOptions(request: $_model.UpdateDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["DataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataSource",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "PUT",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDataSourceResponse({}));
  }

  /**
   * Updates a data source.
   * 
   * @param request - UpdateDataSourceRequest
   * @returns UpdateDataSourceResponse
   */
  async updateDataSource(request: $_model.UpdateDataSourceRequest): Promise<$_model.UpdateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateDataSourceWithOptions(request, runtime);
  }

  /**
   * Updates a file.
   * 
   * @remarks
   * When you debug or call this operation, you must specify new values for the specified parameters to ensure that the values are different from the original configurations of the file. For example, if the original value of a parameter is A, you must change the value of this parameter to B before you commit the node. If you set the parameter to A, an exception that indicates invalid data occurs.
   * 
   * @param request - UpdateFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFileResponse
   */
  async updateFileWithOptions(request: $_model.UpdateFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedSettings)) {
      body["AdvancedSettings"] = request.advancedSettings;
    }

    if (!$dara.isNull(request.applyScheduleImmediately)) {
      body["ApplyScheduleImmediately"] = request.applyScheduleImmediately;
    }

    if (!$dara.isNull(request.autoParsing)) {
      body["AutoParsing"] = request.autoParsing;
    }

    if (!$dara.isNull(request.autoRerunIntervalMillis)) {
      body["AutoRerunIntervalMillis"] = request.autoRerunIntervalMillis;
    }

    if (!$dara.isNull(request.autoRerunTimes)) {
      body["AutoRerunTimes"] = request.autoRerunTimes;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    if (!$dara.isNull(request.cronExpress)) {
      body["CronExpress"] = request.cronExpress;
    }

    if (!$dara.isNull(request.cycleType)) {
      body["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.dependentNodeIdList)) {
      body["DependentNodeIdList"] = request.dependentNodeIdList;
    }

    if (!$dara.isNull(request.dependentType)) {
      body["DependentType"] = request.dependentType;
    }

    if (!$dara.isNull(request.endEffectDate)) {
      body["EndEffectDate"] = request.endEffectDate;
    }

    if (!$dara.isNull(request.fileDescription)) {
      body["FileDescription"] = request.fileDescription;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ignoreParentSkipRunningProperty)) {
      body["IgnoreParentSkipRunningProperty"] = request.ignoreParentSkipRunningProperty;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.inputList)) {
      body["InputList"] = request.inputList;
    }

    if (!$dara.isNull(request.inputParameters)) {
      body["InputParameters"] = request.inputParameters;
    }

    if (!$dara.isNull(request.outputList)) {
      body["OutputList"] = request.outputList;
    }

    if (!$dara.isNull(request.outputParameters)) {
      body["OutputParameters"] = request.outputParameters;
    }

    if (!$dara.isNull(request.owner)) {
      body["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.paraValue)) {
      body["ParaValue"] = request.paraValue;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.rerunMode)) {
      body["RerunMode"] = request.rerunMode;
    }

    if (!$dara.isNull(request.resourceGroupIdentifier)) {
      body["ResourceGroupIdentifier"] = request.resourceGroupIdentifier;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    if (!$dara.isNull(request.startEffectDate)) {
      body["StartEffectDate"] = request.startEffectDate;
    }

    if (!$dara.isNull(request.startImmediately)) {
      body["StartImmediately"] = request.startImmediately;
    }

    if (!$dara.isNull(request.stop)) {
      body["Stop"] = request.stop;
    }

    if (!$dara.isNull(request.timeout)) {
      body["Timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFileResponse({}));
  }

  /**
   * Updates a file.
   * 
   * @remarks
   * When you debug or call this operation, you must specify new values for the specified parameters to ensure that the values are different from the original configurations of the file. For example, if the original value of a parameter is A, you must change the value of this parameter to B before you commit the node. If you set the parameter to A, an exception that indicates invalid data occurs.
   * 
   * @param request - UpdateFileRequest
   * @returns UpdateFileResponse
   */
  async updateFile(request: $_model.UpdateFileRequest): Promise<$_model.UpdateFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFileWithOptions(request, runtime);
  }

  /**
   * Updates a folder.
   * 
   * @param request - UpdateFolderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(request: $_model.UpdateFolderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.folderName)) {
      body["FolderName"] = request.folderName;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFolderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFolderResponse({}));
  }

  /**
   * Updates a folder.
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateFolderWithOptions(request, runtime);
  }

  /**
   * Returns the check result of an extension point event to DataStudio after the extension point event is triggered during data development and checked by an extension.
   * 
   * @param request - UpdateIDEEventResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIDEEventResultResponse
   */
  async updateIDEEventResultWithOptions(request: $_model.UpdateIDEEventResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIDEEventResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkResult)) {
      body["CheckResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.checkResultTip)) {
      body["CheckResultTip"] = request.checkResultTip;
    }

    if (!$dara.isNull(request.extensionCode)) {
      body["ExtensionCode"] = request.extensionCode;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIDEEventResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIDEEventResultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIDEEventResultResponse({}));
  }

  /**
   * Returns the check result of an extension point event to DataStudio after the extension point event is triggered during data development and checked by an extension.
   * 
   * @param request - UpdateIDEEventResultRequest
   * @returns UpdateIDEEventResultResponse
   */
  async updateIDEEventResult(request: $_model.UpdateIDEEventResultRequest): Promise<$_model.UpdateIDEEventResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateIDEEventResultWithOptions(request, runtime);
  }

  /**
   * Updates a category.
   * 
   * @param request - UpdateMetaCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaCategoryResponse
   */
  async updateMetaCategoryWithOptions(request: $_model.UpdateMetaCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaCategoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryId)) {
      body["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetaCategory",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaCategoryResponse({}));
  }

  /**
   * Updates a category.
   * 
   * @param request - UpdateMetaCategoryRequest
   * @returns UpdateMetaCategoryResponse
   */
  async updateMetaCategory(request: $_model.UpdateMetaCategoryRequest): Promise<$_model.UpdateMetaCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaCategoryWithOptions(request, runtime);
  }

  /**
   * Updates the name and comment of a collection.
   * 
   * @remarks
   * Only the name and comment of a collection can be updated.
   * 
   * @param request - UpdateMetaCollectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaCollectionResponse
   */
  async updateMetaCollectionWithOptions(request: $_model.UpdateMetaCollectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaCollectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.qualifiedName)) {
      query["QualifiedName"] = request.qualifiedName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetaCollection",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaCollectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaCollectionResponse({}));
  }

  /**
   * Updates the name and comment of a collection.
   * 
   * @remarks
   * Only the name and comment of a collection can be updated.
   * 
   * @param request - UpdateMetaCollectionRequest
   * @returns UpdateMetaCollectionResponse
   */
  async updateMetaCollection(request: $_model.UpdateMetaCollectionRequest): Promise<$_model.UpdateMetaCollectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaCollectionWithOptions(request, runtime);
  }

  /**
   * Updates the metadata information about a table. Only MaxCompute tables are supported.
   * 
   * @param request - UpdateMetaTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaTableResponse
   */
  async updateMetaTableWithOptions(request: $_model.UpdateMetaTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.caption)) {
      query["Caption"] = request.caption;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.envType)) {
      query["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.newOwnerId)) {
      query["NewOwnerId"] = request.newOwnerId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.addedLabels)) {
      body["AddedLabels"] = request.addedLabels;
    }

    if (!$dara.isNull(request.removedLabels)) {
      body["RemovedLabels"] = request.removedLabels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetaTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaTableResponse({}));
  }

  /**
   * Updates the metadata information about a table. Only MaxCompute tables are supported.
   * 
   * @param request - UpdateMetaTableRequest
   * @returns UpdateMetaTableResponse
   */
  async updateMetaTable(request: $_model.UpdateMetaTableRequest): Promise<$_model.UpdateMetaTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaTableWithOptions(request, runtime);
  }

  /**
   * Updates the instructions on how to use a table. If no instruction on how to use the table is available, the instructions that are configured by calling this operation are added.
   * 
   * @param request - UpdateMetaTableIntroWikiRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMetaTableIntroWikiResponse
   */
  async updateMetaTableIntroWikiWithOptions(request: $_model.UpdateMetaTableIntroWikiRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMetaTableIntroWikiResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["Content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMetaTableIntroWiki",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMetaTableIntroWikiResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMetaTableIntroWikiResponse({}));
  }

  /**
   * Updates the instructions on how to use a table. If no instruction on how to use the table is available, the instructions that are configured by calling this operation are added.
   * 
   * @param request - UpdateMetaTableIntroWikiRequest
   * @returns UpdateMetaTableIntroWikiResponse
   */
  async updateMetaTableIntroWiki(request: $_model.UpdateMetaTableIntroWikiRequest): Promise<$_model.UpdateMetaTableIntroWikiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMetaTableIntroWikiWithOptions(request, runtime);
  }

  /**
   * Changes the owner of a node.
   * 
   * @param request - UpdateNodeOwnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeOwnerResponse
   */
  async updateNodeOwnerWithOptions(request: $_model.UpdateNodeOwnerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodeOwnerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodeOwner",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodeOwnerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodeOwnerResponse({}));
  }

  /**
   * Changes the owner of a node.
   * 
   * @param request - UpdateNodeOwnerRequest
   * @returns UpdateNodeOwnerResponse
   */
  async updateNodeOwner(request: $_model.UpdateNodeOwnerRequest): Promise<$_model.UpdateNodeOwnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodeOwnerWithOptions(request, runtime);
  }

  /**
   * Freezes or unfreezes a node.
   * 
   * @param request - UpdateNodeRunModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeRunModeResponse
   */
  async updateNodeRunModeWithOptions(request: $_model.UpdateNodeRunModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNodeRunModeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.projectEnv)) {
      body["ProjectEnv"] = request.projectEnv;
    }

    if (!$dara.isNull(request.schedulerType)) {
      body["SchedulerType"] = request.schedulerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNodeRunMode",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNodeRunModeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNodeRunModeResponse({}));
  }

  /**
   * Freezes or unfreezes a node.
   * 
   * @param request - UpdateNodeRunModeRequest
   * @returns UpdateNodeRunModeResponse
   */
  async updateNodeRunMode(request: $_model.UpdateNodeRunModeRequest): Promise<$_model.UpdateNodeRunModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNodeRunModeWithOptions(request, runtime);
  }

  /**
   * Updates a subscription relationship.
   * 
   * @param request - UpdateQualityFollowerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityFollowerResponse
   */
  async updateQualityFollowerWithOptions(request: $_model.UpdateQualityFollowerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityFollowerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alarmMode)) {
      body["AlarmMode"] = request.alarmMode;
    }

    if (!$dara.isNull(request.follower)) {
      body["Follower"] = request.follower;
    }

    if (!$dara.isNull(request.followerId)) {
      body["FollowerId"] = request.followerId;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityFollower",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityFollowerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityFollowerResponse({}));
  }

  /**
   * Updates a subscription relationship.
   * 
   * @param request - UpdateQualityFollowerRequest
   * @returns UpdateQualityFollowerResponse
   */
  async updateQualityFollower(request: $_model.UpdateQualityFollowerRequest): Promise<$_model.UpdateQualityFollowerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityFollowerWithOptions(request, runtime);
  }

  /**
   * Updates a monitoring rule.
   * 
   * @param request - UpdateQualityRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQualityRuleResponse
   */
  async updateQualityRuleWithOptions(request: $_model.UpdateQualityRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateQualityRuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.blockType)) {
      body["BlockType"] = request.blockType;
    }

    if (!$dara.isNull(request.checker)) {
      body["Checker"] = request.checker;
    }

    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.criticalThreshold)) {
      body["CriticalThreshold"] = request.criticalThreshold;
    }

    if (!$dara.isNull(request.entityId)) {
      body["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.expectValue)) {
      body["ExpectValue"] = request.expectValue;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.methodName)) {
      body["MethodName"] = request.methodName;
    }

    if (!$dara.isNull(request.openSwitch)) {
      body["OpenSwitch"] = request.openSwitch;
    }

    if (!$dara.isNull(request.operator)) {
      body["Operator"] = request.operator;
    }

    if (!$dara.isNull(request.predictType)) {
      body["PredictType"] = request.predictType;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.propertyType)) {
      body["PropertyType"] = request.propertyType;
    }

    if (!$dara.isNull(request.ruleName)) {
      body["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleType)) {
      body["RuleType"] = request.ruleType;
    }

    if (!$dara.isNull(request.taskSetting)) {
      body["TaskSetting"] = request.taskSetting;
    }

    if (!$dara.isNull(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!$dara.isNull(request.trend)) {
      body["Trend"] = request.trend;
    }

    if (!$dara.isNull(request.warningThreshold)) {
      body["WarningThreshold"] = request.warningThreshold;
    }

    if (!$dara.isNull(request.whereCondition)) {
      body["WhereCondition"] = request.whereCondition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQualityRule",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateQualityRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateQualityRuleResponse({}));
  }

  /**
   * Updates a monitoring rule.
   * 
   * @param request - UpdateQualityRuleRequest
   * @returns UpdateQualityRuleResponse
   */
  async updateQualityRule(request: $_model.UpdateQualityRuleRequest): Promise<$_model.UpdateQualityRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateQualityRuleWithOptions(request, runtime);
  }

  /**
   * Modifies a custom alert rule.
   * 
   * @param request - UpdateRemindRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRemindResponse
   */
  async updateRemindWithOptions(request: $_model.UpdateRemindRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRemindResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertInterval)) {
      body["AlertInterval"] = request.alertInterval;
    }

    if (!$dara.isNull(request.alertMethods)) {
      body["AlertMethods"] = request.alertMethods;
    }

    if (!$dara.isNull(request.alertTargets)) {
      body["AlertTargets"] = request.alertTargets;
    }

    if (!$dara.isNull(request.alertUnit)) {
      body["AlertUnit"] = request.alertUnit;
    }

    if (!$dara.isNull(request.baselineIds)) {
      body["BaselineIds"] = request.baselineIds;
    }

    if (!$dara.isNull(request.bizProcessIds)) {
      body["BizProcessIds"] = request.bizProcessIds;
    }

    if (!$dara.isNull(request.detail)) {
      body["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.dndEnd)) {
      body["DndEnd"] = request.dndEnd;
    }

    if (!$dara.isNull(request.maxAlertTimes)) {
      body["MaxAlertTimes"] = request.maxAlertTimes;
    }

    if (!$dara.isNull(request.nodeIds)) {
      body["NodeIds"] = request.nodeIds;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.remindId)) {
      body["RemindId"] = request.remindId;
    }

    if (!$dara.isNull(request.remindName)) {
      body["RemindName"] = request.remindName;
    }

    if (!$dara.isNull(request.remindType)) {
      body["RemindType"] = request.remindType;
    }

    if (!$dara.isNull(request.remindUnit)) {
      body["RemindUnit"] = request.remindUnit;
    }

    if (!$dara.isNull(request.robotUrls)) {
      body["RobotUrls"] = request.robotUrls;
    }

    if (!$dara.isNull(request.useFlag)) {
      body["UseFlag"] = request.useFlag;
    }

    if (!$dara.isNull(request.webhooks)) {
      body["Webhooks"] = request.webhooks;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRemind",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRemindResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRemindResponse({}));
  }

  /**
   * Modifies a custom alert rule.
   * 
   * @param request - UpdateRemindRequest
   * @returns UpdateRemindResponse
   */
  async updateRemind(request: $_model.UpdateRemindRequest): Promise<$_model.UpdateRemindResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRemindWithOptions(request, runtime);
  }

  /**
   * Updates a MaxCompute table.
   * 
   * @param request - UpdateTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableResponse
   */
  async updateTableWithOptions(request: $_model.UpdateTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appGuid)) {
      query["AppGuid"] = request.appGuid;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.createIfNotExists)) {
      query["CreateIfNotExists"] = request.createIfNotExists;
    }

    if (!$dara.isNull(request.externalTableType)) {
      query["ExternalTableType"] = request.externalTableType;
    }

    if (!$dara.isNull(request.hasPart)) {
      query["HasPart"] = request.hasPart;
    }

    if (!$dara.isNull(request.isView)) {
      query["IsView"] = request.isView;
    }

    if (!$dara.isNull(request.lifeCycle)) {
      query["LifeCycle"] = request.lifeCycle;
    }

    if (!$dara.isNull(request.location)) {
      query["Location"] = request.location;
    }

    if (!$dara.isNull(request.logicalLevelId)) {
      query["LogicalLevelId"] = request.logicalLevelId;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.physicsLevelId)) {
      query["PhysicsLevelId"] = request.physicsLevelId;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.schema)) {
      query["Schema"] = request.schema;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.visibility)) {
      query["Visibility"] = request.visibility;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.columns)) {
      body["Columns"] = request.columns;
    }

    if (!$dara.isNull(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.envType)) {
      body["EnvType"] = request.envType;
    }

    if (!$dara.isNull(request.themes)) {
      body["Themes"] = request.themes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTable",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableResponse({}));
  }

  /**
   * Updates a MaxCompute table.
   * 
   * @param request - UpdateTableRequest
   * @returns UpdateTableResponse
   */
  async updateTable(request: $_model.UpdateTableRequest): Promise<$_model.UpdateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableWithOptions(request, runtime);
  }

  /**
   * Updates the fields in a MaxCompute table.
   * 
   * @param request - UpdateTableAddColumnRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableAddColumnResponse
   */
  async updateTableAddColumnWithOptions(request: $_model.UpdateTableAddColumnRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableAddColumnResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.column)) {
      body["Column"] = request.column;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableAddColumn",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableAddColumnResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableAddColumnResponse({}));
  }

  /**
   * Updates the fields in a MaxCompute table.
   * 
   * @param request - UpdateTableAddColumnRequest
   * @returns UpdateTableAddColumnResponse
   */
  async updateTableAddColumn(request: $_model.UpdateTableAddColumnRequest): Promise<$_model.UpdateTableAddColumnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableAddColumnWithOptions(request, runtime);
  }

  /**
   * Updates a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - UpdateTableLevelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableLevelResponse
   */
  async updateTableLevelWithOptions(request: $_model.UpdateTableLevelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableLevelResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!$dara.isNull(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableLevel",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableLevelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableLevelResponse({}));
  }

  /**
   * Updates a table level. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - UpdateTableLevelRequest
   * @returns UpdateTableLevelResponse
   */
  async updateTableLevel(request: $_model.UpdateTableLevelRequest): Promise<$_model.UpdateTableLevelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableLevelWithOptions(request, runtime);
  }

  /**
   * Modifies the information about a table, such as the table folder, level, and category.
   * 
   * @param request - UpdateTableModelInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableModelInfoResponse
   */
  async updateTableModelInfoWithOptions(request: $_model.UpdateTableModelInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableModelInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.firstLevelThemeId)) {
      query["FirstLevelThemeId"] = request.firstLevelThemeId;
    }

    if (!$dara.isNull(request.levelId)) {
      query["LevelId"] = request.levelId;
    }

    if (!$dara.isNull(request.levelType)) {
      query["LevelType"] = request.levelType;
    }

    if (!$dara.isNull(request.secondLevelThemeId)) {
      query["SecondLevelThemeId"] = request.secondLevelThemeId;
    }

    if (!$dara.isNull(request.tableGuid)) {
      query["TableGuid"] = request.tableGuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableModelInfo",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableModelInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableModelInfoResponse({}));
  }

  /**
   * Modifies the information about a table, such as the table folder, level, and category.
   * 
   * @param request - UpdateTableModelInfoRequest
   * @returns UpdateTableModelInfoResponse
   */
  async updateTableModelInfo(request: $_model.UpdateTableModelInfoRequest): Promise<$_model.UpdateTableModelInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableModelInfoWithOptions(request, runtime);
  }

  /**
   * Updates a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - UpdateTableThemeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTableThemeResponse
   */
  async updateTableThemeWithOptions(request: $_model.UpdateTableThemeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTableThemeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.themeId)) {
      query["ThemeId"] = request.themeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTableTheme",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTableThemeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTableThemeResponse({}));
  }

  /**
   * Updates a table theme. This operation will be replaced soon. We recommend that you do not call this operation.
   * 
   * @param request - UpdateTableThemeRequest
   * @returns UpdateTableThemeResponse
   */
  async updateTableTheme(request: $_model.UpdateTableThemeRequest): Promise<$_model.UpdateTableThemeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTableThemeWithOptions(request, runtime);
  }

  /**
   * Updates the file information about a function.
   * 
   * @param request - UpdateUdfFileRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfFileResponse
   */
  async updateUdfFileWithOptions(request: $_model.UpdateUdfFileRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUdfFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      body["ClassName"] = request.className;
    }

    if (!$dara.isNull(request.cmdDescription)) {
      body["CmdDescription"] = request.cmdDescription;
    }

    if (!$dara.isNull(request.example)) {
      body["Example"] = request.example;
    }

    if (!$dara.isNull(request.fileFolderPath)) {
      body["FileFolderPath"] = request.fileFolderPath;
    }

    if (!$dara.isNull(request.fileId)) {
      body["FileId"] = request.fileId;
    }

    if (!$dara.isNull(request.functionType)) {
      body["FunctionType"] = request.functionType;
    }

    if (!$dara.isNull(request.parameterDescription)) {
      body["ParameterDescription"] = request.parameterDescription;
    }

    if (!$dara.isNull(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.projectIdentifier)) {
      body["ProjectIdentifier"] = request.projectIdentifier;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.returnValue)) {
      body["ReturnValue"] = request.returnValue;
    }

    if (!$dara.isNull(request.udfDescription)) {
      body["UdfDescription"] = request.udfDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUdfFile",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUdfFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUdfFileResponse({}));
  }

  /**
   * Updates the file information about a function.
   * 
   * @param request - UpdateUdfFileRequest
   * @returns UpdateUdfFileResponse
   */
  async updateUdfFile(request: $_model.UpdateUdfFileRequest): Promise<$_model.UpdateUdfFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateUdfFileWithOptions(request, runtime);
  }

  /**
   * Returns the processing result sent by an extension after a process in Operation Center is blocked by the extension.
   * 
   * @param request - UpdateWorkbenchEventResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkbenchEventResultResponse
   */
  async updateWorkbenchEventResultWithOptions(request: $_model.UpdateWorkbenchEventResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkbenchEventResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.checkResult)) {
      query["CheckResult"] = request.checkResult;
    }

    if (!$dara.isNull(request.checkResultTip)) {
      query["CheckResultTip"] = request.checkResultTip;
    }

    if (!$dara.isNull(request.extensionCode)) {
      query["ExtensionCode"] = request.extensionCode;
    }

    if (!$dara.isNull(request.messageId)) {
      query["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkbenchEventResult",
      version: "2020-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkbenchEventResultResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkbenchEventResultResponse({}));
  }

  /**
   * Returns the processing result sent by an extension after a process in Operation Center is blocked by the extension.
   * 
   * @param request - UpdateWorkbenchEventResultRequest
   * @returns UpdateWorkbenchEventResultResponse
   */
  async updateWorkbenchEventResult(request: $_model.UpdateWorkbenchEventResultRequest): Promise<$_model.UpdateWorkbenchEventResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateWorkbenchEventResultWithOptions(request, runtime);
  }

}
