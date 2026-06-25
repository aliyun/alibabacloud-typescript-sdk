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
      'ap-northeast-2-pop': "aiworkspace.aliyuncs.com",
      'ap-southeast-2': "aiworkspace.aliyuncs.com",
      'ap-southeast-5': "aiworkspace-vpc.ap-southeast-5.aliyuncs.com",
      'cn-beijing-finance-1': "aiworkspace.aliyuncs.com",
      'cn-beijing-finance-pop': "aiworkspace.aliyuncs.com",
      'cn-beijing-gov-1': "aiworkspace.aliyuncs.com",
      'cn-beijing-nu16-b01': "aiworkspace.aliyuncs.com",
      'cn-edge-1': "aiworkspace.aliyuncs.com",
      'cn-fujian': "aiworkspace.aliyuncs.com",
      'cn-haidian-cm12-c01': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-bj-b01': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-finance': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "aiworkspace.aliyuncs.com",
      'cn-hangzhou-test-306': "aiworkspace.aliyuncs.com",
      'cn-hongkong-finance-pop': "aiworkspace.aliyuncs.com",
      'cn-huhehaote': "aiworkspace.aliyuncs.com",
      'cn-huhehaote-nebula-1': "aiworkspace.aliyuncs.com",
      'cn-qingdao': "aiworkspace.aliyuncs.com",
      'cn-qingdao-nebula': "aiworkspace.aliyuncs.com",
      'cn-shanghai-et15-b01': "aiworkspace.aliyuncs.com",
      'cn-shanghai-et2-b01': "aiworkspace.aliyuncs.com",
      'cn-shanghai-inner': "aiworkspace.aliyuncs.com",
      'cn-shanghai-internal-test-1': "aiworkspace.aliyuncs.com",
      'cn-shenzhen-finance-1': "aiworkspace.aliyuncs.com",
      'cn-shenzhen-inner': "aiworkspace.aliyuncs.com",
      'cn-shenzhen-st4-d01': "aiworkspace.aliyuncs.com",
      'cn-shenzhen-su18-b01': "aiworkspace.aliyuncs.com",
      'cn-wuhan': "aiworkspace.aliyuncs.com",
      'cn-yushanfang': "aiworkspace.aliyuncs.com",
      'cn-zhangbei': "aiworkspace.aliyuncs.com",
      'cn-zhangbei-na61-b01': "aiworkspace.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "aiworkspace.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "aiworkspace.aliyuncs.com",
      'eu-west-1': "aiworkspace.aliyuncs.com",
      'eu-west-1-oxs': "aiworkspace.aliyuncs.com",
      'me-east-1': "aiworkspace.aliyuncs.com",
      'rus-west-1-pop': "aiworkspace.aliyuncs.com",
      'us-west-1': "aiworkspace.us-west-1.aliyuncs.com",
      'us-southeast-1': "aiworkspace.us-southeast-1.aliyuncs.com",
      'us-east-1': "aiworkspace.us-east-1.aliyuncs.com",
      'na-south-1': "aiworkspace.na-south-1.aliyuncs.com",
      'eu-central-1': "aiworkspace.eu-central-1.aliyuncs.com",
      'cn-wulanchabu': "aiworkspace.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "aiworkspace.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "aiworkspace.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "aiworkspace.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "aiworkspace.cn-hongkong.aliyuncs.com",
      'cn-heyuan': "aiworkspace.cn-heyuan.aliyuncs.com",
      'cn-hangzhou': "aiworkspace.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "aiworkspace.cn-guangzhou.aliyuncs.com	",
      'cn-beijing': "aiworkspace.cn-beijing.aliyuncs.com",
      'ap-southeast-8': "aiworkspace.ap-southeast-8.aliyuncs.com",
      'ap-southeast-7': "aiworkspace.ap-southeast-7.aliyuncs.com",
      'ap-southeast-3': "aiworkspace.ap-southeast-3.aliyuncs.com",
      'ap-southeast-1': "aiworkspace.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "aiworkspace.ap-south-1.aliyuncs.com",
      'ap-northeast-2': "aiworkspace.ap-northeast-2.aliyuncs.com",
      'ap-northeast-1': "aiworkspace.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiworkspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * PAI accepts and processes system event messages from DataWorks.
   * 
   * @remarks
   * This API is for internal system calls only.
   * 
   * @param request - AcceptDataworksEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptDataworksEventResponse
   */
  async acceptDataworksEventWithOptions(request: $_model.AcceptDataworksEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptDataworksEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptDataworksEvent",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/action/acceptdataworksevent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptDataworksEventResponse>(await this.callApi(params, req, runtime), new $_model.AcceptDataworksEventResponse({}));
  }

  /**
   * PAI accepts and processes system event messages from DataWorks.
   * 
   * @remarks
   * This API is for internal system calls only.
   * 
   * @param request - AcceptDataworksEventRequest
   * @returns AcceptDataworksEventResponse
   */
  async acceptDataworksEvent(request: $_model.AcceptDataworksEventRequest): Promise<$_model.AcceptDataworksEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.acceptDataworksEventWithOptions(request, headers, runtime);
  }

  /**
   * Adds a custom image to a workspace.
   * 
   * @param request - AddImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(request: $_model.AddImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUri)) {
      body["ImageUri"] = request.imageUri;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageResponse>(await this.callApi(params, req, runtime), new $_model.AddImageResponse({}));
  }

  /**
   * Adds a custom image to a workspace.
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: $_model.AddImageRequest): Promise<$_model.AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(request, headers, runtime);
  }

  /**
   * Adds labels to a specified image.
   * 
   * @param request - AddImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLabelsResponse
   */
  async addImageLabelsWithOptions(ImageId: string, request: $_model.AddImageLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageLabelsResponse>(await this.callApi(params, req, runtime), new $_model.AddImageLabelsResponse({}));
  }

  /**
   * Adds labels to a specified image.
   * 
   * @param request - AddImageLabelsRequest
   * @returns AddImageLabelsResponse
   */
  async addImageLabels(ImageId: string, request: $_model.AddImageLabelsRequest): Promise<$_model.AddImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageLabelsWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * Assigns a role to a member in a workspace, granting that member the role\\"s permissions.
   * 
   * @param request - AddMemberRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberRoleResponse
   */
  async addMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, request: $_model.AddMemberRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemberRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members/${$dara.URL.percentEncode(MemberId)}/roles/${$dara.URL.percentEncode(RoleName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMemberRoleResponse>(await this.callApi(params, req, runtime), new $_model.AddMemberRoleResponse({}));
  }

  /**
   * Assigns a role to a member in a workspace, granting that member the role\\"s permissions.
   * 
   * @param request - AddMemberRoleRequest
   * @returns AddMemberRoleResponse
   */
  async addMemberRole(WorkspaceId: string, MemberId: string, RoleName: string, request: $_model.AddMemberRoleRequest): Promise<$_model.AddMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, request, headers, runtime);
  }

  /**
   * Changes the resource group of a specified resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
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
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/resourcegroups/action/changeresourcegroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group of a specified resource.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * Creates a code configuration in PAI using a code branch and commit ID from a Git repository. This configuration can then be referenced in DLC jobs.
   * 
   * @param request - CreateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCodeSourceResponse
   */
  async createCodeSourceWithOptions(request: $_model.CreateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCodeSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.cloneType)) {
      body["CloneType"] = request.cloneType;
    }

    if (!$dara.isNull(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!$dara.isNull(request.codeCommit)) {
      body["CodeCommit"] = request.codeCommit;
    }

    if (!$dara.isNull(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!$dara.isNull(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!$dara.isNull(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCodeSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateCodeSourceResponse({}));
  }

  /**
   * Creates a code configuration in PAI using a code branch and commit ID from a Git repository. This configuration can then be referenced in DLC jobs.
   * 
   * @param request - CreateCodeSourceRequest
   * @returns CreateCodeSourceResponse
   */
  async createCodeSource(request: $_model.CreateCodeSourceRequest): Promise<$_model.CreateCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeSourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a connection to link PAI cloud services with your models, databases, and other services. This is useful for scenarios such as LangStudio and multimodal dataset retrieval.
   * 
   * @param request - CreateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConnectionResponse
   */
  async createConnectionWithOptions(request: $_model.CreateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.connectionName)) {
      body["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.connectionType)) {
      body["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.models)) {
      body["Models"] = request.models;
    }

    if (!$dara.isNull(request.resourceMeta)) {
      body["ResourceMeta"] = request.resourceMeta;
    }

    if (!$dara.isNull(request.secrets)) {
      body["Secrets"] = request.secrets;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConnection",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.CreateConnectionResponse({}));
  }

  /**
   * Creates a connection to link PAI cloud services with your models, databases, and other services. This is useful for scenarios such as LangStudio and multimodal dataset retrieval.
   * 
   * @param request - CreateConnectionRequest
   * @returns CreateConnectionResponse
   */
  async createConnection(request: $_model.CreateConnectionRequest): Promise<$_model.CreateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConnectionWithOptions(request, headers, runtime);
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(request: $_model.CreateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.accessibleRoleIdList)) {
      body["AccessibleRoleIdList"] = request.accessibleRoleIdList;
    }

    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.edition)) {
      body["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.importInfo)) {
      body["ImportInfo"] = request.importInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.mountAccessReadWriteRoleIdList)) {
      body["MountAccessReadWriteRoleIdList"] = request.mountAccessReadWriteRoleIdList;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.provider)) {
      body["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!$dara.isNull(request.sourceDatasetId)) {
      body["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!$dara.isNull(request.sourceDatasetVersion)) {
      body["SourceDatasetVersion"] = request.sourceDatasetVersion;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!$dara.isNull(request.versionLabels)) {
      body["VersionLabels"] = request.versionLabels;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetResponse({}));
  }

  /**
   * Creates a dataset.
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: $_model.CreateDatasetRequest): Promise<$_model.CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetWithOptions(request, headers, runtime);
  }

  /**
   * Creates file metadata records for a dataset in a batch.
   * 
   * @param request - CreateDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetFileMetasResponse
   */
  async createDatasetFileMetasWithOptions(DatasetId: string, request: $_model.CreateDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetFileMetasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetas)) {
      body["DatasetFileMetas"] = request.datasetFileMetas;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetFileMetasResponse({}));
  }

  /**
   * Creates file metadata records for a dataset in a batch.
   * 
   * @param request - CreateDatasetFileMetasRequest
   * @returns CreateDatasetFileMetasResponse
   */
  async createDatasetFileMetas(DatasetId: string, request: $_model.CreateDatasetFileMetasRequest): Promise<$_model.CreateDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Creates a dataset job.
   * 
   * @param request - CreateDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetJobResponse
   */
  async createDatasetJobWithOptions(DatasetId: string, request: $_model.CreateDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.jobAction)) {
      body["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.jobMode)) {
      body["JobMode"] = request.jobMode;
    }

    if (!$dara.isNull(request.jobSpec)) {
      body["JobSpec"] = request.jobSpec;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetJobResponse({}));
  }

  /**
   * Creates a dataset job.
   * 
   * @param request - CreateDatasetJobRequest
   * @returns CreateDatasetJobResponse
   */
  async createDatasetJob(DatasetId: string, request: $_model.CreateDatasetJobRequest): Promise<$_model.CreateDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetJobWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Creates a dataset Job configuration.
   * 
   * @param request - CreateDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetJobConfigResponse
   */
  async createDatasetJobConfigWithOptions(DatasetId: string, request: $_model.CreateDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetJobConfigResponse({}));
  }

  /**
   * Creates a dataset Job configuration.
   * 
   * @param request - CreateDatasetJobConfigRequest
   * @returns CreateDatasetJobConfigResponse
   */
  async createDatasetJobConfig(DatasetId: string, request: $_model.CreateDatasetJobConfigRequest): Promise<$_model.CreateDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetJobConfigWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Adds labels to a dataset.
   * 
   * @remarks
   * When you call this operation, note the following:
   * - The key and value of a label must be a non-empty string with a maximum length of 128 characters.
   * - A label key cannot start with aliyun, acs, http\\://, or https\\://.
   * 
   * @param request - CreateDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabelsWithOptions(DatasetId: string, request: $_model.CreateDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetLabelsResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetLabelsResponse({}));
  }

  /**
   * Adds labels to a dataset.
   * 
   * @remarks
   * When you call this operation, note the following:
   * - The key and value of a label must be a non-empty string with a maximum length of 128 characters.
   * - A label key cannot start with aliyun, acs, http\\://, or https\\://.
   * 
   * @param request - CreateDatasetLabelsRequest
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabels(DatasetId: string, request: $_model.CreateDatasetLabelsRequest): Promise<$_model.CreateDatasetLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Creates a dataset version.
   * 
   * @param request - CreateDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetVersionResponse
   */
  async createDatasetVersionWithOptions(DatasetId: string, request: $_model.CreateDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.importInfo)) {
      body["ImportInfo"] = request.importInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetVersionResponse({}));
  }

  /**
   * Creates a dataset version.
   * 
   * @param request - CreateDatasetVersionRequest
   * @returns CreateDatasetVersionResponse
   */
  async createDatasetVersion(DatasetId: string, request: $_model.CreateDatasetVersionRequest): Promise<$_model.CreateDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetVersionWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Creates labels for a dataset version.
   * 
   * @param request - CreateDatasetVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetVersionLabelsResponse
   */
  async createDatasetVersionLabelsWithOptions(DatasetId: string, VersionName: string, request: $_model.CreateDatasetVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatasetVersionLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatasetVersionLabelsResponse({}));
  }

  /**
   * Creates labels for a dataset version.
   * 
   * @param request - CreateDatasetVersionLabelsRequest
   * @returns CreateDatasetVersionLabelsResponse
   */
  async createDatasetVersionLabels(DatasetId: string, VersionName: string, request: $_model.CreateDatasetVersionLabelsRequest): Promise<$_model.CreateDatasetVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetVersionLabelsWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentResponse
   */
  async createExperimentWithOptions(request: $_model.CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.artifactUri)) {
      body["ArtifactUri"] = request.artifactUri;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperimentResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperimentResponse({}));
  }

  /**
   * Creates an experiment.
   * 
   * @param request - CreateExperimentRequest
   * @returns CreateExperimentResponse
   */
  async createExperiment(request: $_model.CreateExperimentRequest): Promise<$_model.CreateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * Builds a custom image based on the specified configuration. After the image is successfully built, it is added to the list of custom images in the current workspace.
   * 
   * @remarks
   * ## Description
   * 
   * @param request - CreateImageBuildRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageBuildResponse
   */
  async createImageBuildWithOptions(request: $_model.CreateImageBuildRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageBuildResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.buildConfig)) {
      body["BuildConfig"] = request.buildConfig;
    }

    if (!$dara.isNull(request.image)) {
      body["Image"] = request.image;
    }

    if (!$dara.isNull(request.imageBuildJobName)) {
      body["ImageBuildJobName"] = request.imageBuildJobName;
    }

    if (!$dara.isNull(request.overwriteImageTag)) {
      body["OverwriteImageTag"] = request.overwriteImageTag;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resource)) {
      body["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.targetRegistry)) {
      body["TargetRegistry"] = request.targetRegistry;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageBuild",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/imagebuilds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageBuildResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageBuildResponse({}));
  }

  /**
   * Builds a custom image based on the specified configuration. After the image is successfully built, it is added to the list of custom images in the current workspace.
   * 
   * @remarks
   * ## Description
   * 
   * @param request - CreateImageBuildRequest
   * @returns CreateImageBuildResponse
   */
  async createImageBuild(request: $_model.CreateImageBuildRequest): Promise<$_model.CreateImageBuildResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageBuildWithOptions(request, headers, runtime);
  }

  /**
   * Adds one or more users to a workspace.
   * 
   * @param request - CreateMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberResponse
   */
  async createMemberWithOptions(WorkspaceId: string, request: $_model.CreateMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.members)) {
      body["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemberResponse({}));
  }

  /**
   * Adds one or more users to a workspace.
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(WorkspaceId: string, request: $_model.CreateMemberRequest): Promise<$_model.CreateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Creates a model, which is a collection of model versions. You must specify information such as the model name and description.
   * 
   * @param request - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(request: $_model.CreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!$dara.isNull(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!$dara.isNull(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!$dara.isNull(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.parameterSize)) {
      body["ParameterSize"] = request.parameterSize;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
  }

  /**
   * Creates a model, which is a collection of model versions. You must specify information such as the model name and description.
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(request, headers, runtime);
  }

  /**
   * Creates labels for a model.
   * 
   * @param request - CreateModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelLabelsResponse
   */
  async createModelLabelsWithOptions(ModelId: string, request: $_model.CreateModelLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelLabelsResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelLabelsResponse({}));
  }

  /**
   * Creates labels for a model.
   * 
   * @param request - CreateModelLabelsRequest
   * @returns CreateModelLabelsResponse
   */
  async createModelLabels(ModelId: string, request: $_model.CreateModelLabelsRequest): Promise<$_model.CreateModelLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Adds a new version to a specified model.
   * 
   * @param request - CreateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionResponse
   */
  async createModelVersionWithOptions(ModelId: string, request: $_model.CreateModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!$dara.isNull(request.distillationSpec)) {
      body["DistillationSpec"] = request.distillationSpec;
    }

    if (!$dara.isNull(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.frameworkType)) {
      body["FrameworkType"] = request.frameworkType;
    }

    if (!$dara.isNull(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!$dara.isNull(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelVersionResponse({}));
  }

  /**
   * Adds a new version to a specified model.
   * 
   * @param request - CreateModelVersionRequest
   * @returns CreateModelVersionResponse
   */
  async createModelVersion(ModelId: string, request: $_model.CreateModelVersionRequest): Promise<$_model.CreateModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Creates labels for a model version.
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: $_model.CreateModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelVersionLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelVersionLabelsResponse({}));
  }

  /**
   * Creates labels for a model version.
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabels(ModelId: string, VersionName: string, request: $_model.CreateModelVersionLabelsRequest): Promise<$_model.CreateModelVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * Purchases products. This operation supports pay-as-you-go purchases of DataWorks, OSS, PAI, and MaxCompute.
   * 
   * @param request - CreateProductOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductOrdersResponse
   */
  async createProductOrdersWithOptions(request: $_model.CreateProductOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProductOrdersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.products)) {
      body["Products"] = request.products;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProductOrders",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/productorders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProductOrdersResponse>(await this.callApi(params, req, runtime), new $_model.CreateProductOrdersResponse({}));
  }

  /**
   * Purchases products. This operation supports pay-as-you-go purchases of DataWorks, OSS, PAI, and MaxCompute.
   * 
   * @param request - CreateProductOrdersRequest
   * @returns CreateProductOrdersResponse
   */
  async createProductOrders(request: $_model.CreateProductOrdersRequest): Promise<$_model.CreateProductOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductOrdersWithOptions(request, headers, runtime);
  }

  /**
   * Creates a run for an experiment. The run can be associated with a specific workload or be a standalone code execution.
   * 
   * @param request - CreateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
  async createRunWithOptions(request: $_model.CreateRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRunResponse>(await this.callApi(params, req, runtime), new $_model.CreateRunResponse({}));
  }

  /**
   * Creates a run for an experiment. The run can be associated with a specific workload or be a standalone code execution.
   * 
   * @param request - CreateRunRequest
   * @returns CreateRunResponse
   */
  async createRun(request: $_model.CreateRunRequest): Promise<$_model.CreateRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRunWithOptions(request, headers, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.envTypes)) {
      body["EnvTypes"] = request.envTypes;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Add a resource reference to a workspace.
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResourceWithOptions(WorkspaceId: string, request: $_model.CreateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.option)) {
      body["Option"] = request.option;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResourceResponse({}));
  }

  /**
   * Add a resource reference to a workspace.
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResource(WorkspaceId: string, request: $_model.CreateWorkspaceResourceRequest): Promise<$_model.CreateWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Creates a workspace role.
   * 
   * @param request - CreateWorkspaceRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceRoleResponse
   */
  async createWorkspaceRoleWithOptions(WorkspaceId: string, request: $_model.CreateWorkspaceRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modulePermissions)) {
      body["ModulePermissions"] = request.modulePermissions;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.roleType)) {
      body["RoleType"] = request.roleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspaceRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/roles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceRoleResponse({}));
  }

  /**
   * Creates a workspace role.
   * 
   * @param request - CreateWorkspaceRoleRequest
   * @returns CreateWorkspaceRoleResponse
   */
  async createWorkspaceRole(WorkspaceId: string, request: $_model.CreateWorkspaceRoleRequest): Promise<$_model.CreateWorkspaceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceRoleWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Deletes a code source configuration by its ID.
   * 
   * @param request - DeleteCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSourceWithOptions(CodeSourceId: string, request: $_model.DeleteCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCodeSourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCodeSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCodeSourceResponse({}));
  }

  /**
   * Deletes a code source configuration by its ID.
   * 
   * @param request - DeleteCodeSourceRequest
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSource(CodeSourceId: string, request: $_model.DeleteCodeSourceRequest): Promise<$_model.DeleteCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, request, headers, runtime);
  }

  /**
   * Deletes a workspace configuration.
   * 
   * @param request - DeleteConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigResponse
   */
  async deleteConfigWithOptions(WorkspaceId: string, ConfigKey: string, request: $_model.DeleteConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs/${$dara.URL.percentEncode(ConfigKey)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigResponse({}));
  }

  /**
   * Deletes a workspace configuration.
   * 
   * @param request - DeleteConfigRequest
   * @returns DeleteConfigResponse
   */
  async deleteConfig(WorkspaceId: string, ConfigKey: string, request: $_model.DeleteConfigRequest): Promise<$_model.DeleteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(WorkspaceId, ConfigKey, request, headers, runtime);
  }

  /**
   * Deletes a connection.
   * 
   * @param request - DeleteConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(ConnectionId: string, request: $_model.DeleteConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnection",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections/${$dara.URL.percentEncode(ConnectionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectionResponse({}));
  }

  /**
   * Deletes a connection.
   * 
   * @param request - DeleteConnectionRequest
   * @returns DeleteConnectionResponse
   */
  async deleteConnection(ConnectionId: string, request: $_model.DeleteConnectionRequest): Promise<$_model.DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectionWithOptions(ConnectionId, request, headers, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @param request - DeleteDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(DatasetId: string, request: $_model.DeleteDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetResponse({}));
  }

  /**
   * Deletes a dataset.
   * 
   * @param request - DeleteDatasetRequest
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(DatasetId: string, request: $_model.DeleteDatasetRequest): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Deletes file metadata records from a dataset in batches.
   * 
   * @param request - DeleteDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetFileMetasResponse
   */
  async deleteDatasetFileMetasWithOptions(DatasetId: string, request: $_model.DeleteDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetFileMetasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetaIds)) {
      query["DatasetFileMetaIds"] = request.datasetFileMetaIds;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetFileMetasResponse({}));
  }

  /**
   * Deletes file metadata records from a dataset in batches.
   * 
   * @param request - DeleteDatasetFileMetasRequest
   * @returns DeleteDatasetFileMetasResponse
   */
  async deleteDatasetFileMetas(DatasetId: string, request: $_model.DeleteDatasetFileMetasRequest): Promise<$_model.DeleteDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Deletes a dataset Job.
   * 
   * @param request - DeleteDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: $_model.DeleteDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetJobResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetJobResponse({}));
  }

  /**
   * Deletes a dataset Job.
   * 
   * @param request - DeleteDatasetJobRequest
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJob(DatasetId: string, DatasetJobId: string, request: $_model.DeleteDatasetJobRequest): Promise<$_model.DeleteDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * Deletes a dataset job configuration.
   * 
   * @param request - DeleteDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetJobConfigResponse
   */
  async deleteDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: $_model.DeleteDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetJobConfigResponse({}));
  }

  /**
   * Deletes a dataset job configuration.
   * 
   * @param request - DeleteDatasetJobConfigRequest
   * @returns DeleteDatasetJobConfigResponse
   */
  async deleteDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: $_model.DeleteDatasetJobConfigRequest): Promise<$_model.DeleteDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * Deletes labels from a dataset.
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabelsWithOptions(DatasetId: string, request: $_model.DeleteDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetLabelsResponse({}));
  }

  /**
   * Deletes labels from a dataset.
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabels(DatasetId: string, request: $_model.DeleteDatasetLabelsRequest): Promise<$_model.DeleteDatasetLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Deletes a specified version of a dataset. This operation cannot be used to delete version v1. Version v1 is deleted with the dataset when you call the DeleteDataset operation.
   * 
   * @param request - DeleteDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersionWithOptions(DatasetId: string, VersionName: string, request: $_model.DeleteDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetVersionResponse({}));
  }

  /**
   * Deletes a specified version of a dataset. This operation cannot be used to delete version v1. Version v1 is deleted with the dataset when you call the DeleteDataset operation.
   * 
   * @param request - DeleteDatasetVersionRequest
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersion(DatasetId: string, VersionName: string, request: $_model.DeleteDatasetVersionRequest): Promise<$_model.DeleteDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * Deletes labels from a dataset version.
   * 
   * @param request - DeleteDatasetVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetVersionLabelsResponse
   */
  async deleteDatasetVersionLabelsWithOptions(DatasetId: string, VersionName: string, request: $_model.DeleteDatasetVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetVersionLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatasetVersionLabelsResponse({}));
  }

  /**
   * Deletes labels from a dataset version.
   * 
   * @param request - DeleteDatasetVersionLabelsRequest
   * @returns DeleteDatasetVersionLabelsResponse
   */
  async deleteDatasetVersionLabels(DatasetId: string, VersionName: string, request: $_model.DeleteDatasetVersionLabelsRequest): Promise<$_model.DeleteDatasetVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionLabelsWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * Deletes an experiment.
   * 
   * @param request - DeleteExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, request: $_model.DeleteExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentResponse({}));
  }

  /**
   * Deletes an experiment.
   * 
   * @param request - DeleteExperimentRequest
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string, request: $_model.DeleteExperimentRequest): Promise<$_model.DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Deletes a label from an experiment.
   * 
   * @param request - DeleteExperimentLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabelWithOptions(ExperimentId: string, Key: string, request: $_model.DeleteExperimentLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentLabelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/labels/${$dara.URL.percentEncode(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperimentLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperimentLabelResponse({}));
  }

  /**
   * Deletes a label from an experiment.
   * 
   * @param request - DeleteExperimentLabelRequest
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabel(ExperimentId: string, Key: string, request: $_model.DeleteExperimentLabelRequest): Promise<$_model.DeleteExperimentLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentLabelWithOptions(ExperimentId, Key, request, headers, runtime);
  }

  /**
   * Deletes members from a workspace.
   * 
   * @param request - DeleteMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMembersResponse
   */
  async deleteMembersWithOptions(WorkspaceId: string, request: $_model.DeleteMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberIds)) {
      query["MemberIds"] = request.memberIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMembersResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMembersResponse({}));
  }

  /**
   * Deletes members from a workspace.
   * 
   * @param request - DeleteMembersRequest
   * @returns DeleteMembersResponse
   */
  async deleteMembers(WorkspaceId: string, request: $_model.DeleteMembersRequest): Promise<$_model.DeleteMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Deletes a model.
   * 
   * @param request - DeleteModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(ModelId: string, request: $_model.DeleteModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
  }

  /**
   * Deletes a model.
   * 
   * @param request - DeleteModelRequest
   * @returns DeleteModelResponse
   */
  async deleteModel(ModelId: string, request: $_model.DeleteModelRequest): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Deletes model labels.
   * 
   * @param request - DeleteModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabelsWithOptions(ModelId: string, request: $_model.DeleteModelLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelLabelsResponse({}));
  }

  /**
   * Deletes model labels.
   * 
   * @param request - DeleteModelLabelsRequest
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabels(ModelId: string, request: $_model.DeleteModelLabelsRequest): Promise<$_model.DeleteModelLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Deletes a model version.
   * 
   * @param request - DeleteModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersionWithOptions(ModelId: string, VersionName: string, request: $_model.DeleteModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelVersionResponse({}));
  }

  /**
   * Deletes a model version.
   * 
   * @param request - DeleteModelVersionRequest
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersion(ModelId: string, VersionName: string, request: $_model.DeleteModelVersionRequest): Promise<$_model.DeleteModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * Deletes labels from a model version.
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: $_model.DeleteModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelVersionLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelVersionLabelsResponse({}));
  }

  /**
   * Deletes labels from a model version.
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabels(ModelId: string, VersionName: string, request: $_model.DeleteModelVersionLabelsRequest): Promise<$_model.DeleteModelVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * Deletes a run.
   * 
   * @param request - DeleteRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunResponse
   */
  async deleteRunWithOptions(RunId: string, request: $_model.DeleteRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRunResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRunResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRunResponse({}));
  }

  /**
   * Deletes a run.
   * 
   * @param request - DeleteRunRequest
   * @returns DeleteRunResponse
   */
  async deleteRun(RunId: string, request: $_model.DeleteRunRequest): Promise<$_model.DeleteRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * Deletes a label from a run.
   * 
   * @param request - DeleteRunLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabelWithOptions(RunId: string, Key: string, request: $_model.DeleteRunLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRunLabelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRunLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/labels/${$dara.URL.percentEncode(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRunLabelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRunLabelResponse({}));
  }

  /**
   * Deletes a label from a run.
   * 
   * @param request - DeleteRunLabelRequest
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabel(RunId: string, Key: string, request: $_model.DeleteRunLabelRequest): Promise<$_model.DeleteRunLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunLabelWithOptions(RunId, Key, request, headers, runtime);
  }

  /**
   * Deletes a user configuration.
   * 
   * @param request - DeleteUserConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserConfigResponse
   */
  async deleteUserConfigWithOptions(CategoryName: string, request: $_model.DeleteUserConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs/${$dara.URL.percentEncode(CategoryName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserConfigResponse({}));
  }

  /**
   * Deletes a user configuration.
   * 
   * @param request - DeleteUserConfigRequest
   * @returns DeleteUserConfigResponse
   */
  async deleteUserConfig(CategoryName: string, request: $_model.DeleteUserConfigRequest): Promise<$_model.DeleteUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserConfigWithOptions(CategoryName, request, headers, runtime);
  }

  /**
   * Deletes a workspace. This operation does not release associated resources. You must release them manually.
   * 
   * @param request - DeleteWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(WorkspaceId: string, request: $_model.DeleteWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes a workspace. This operation does not release associated resources. You must release them manually.
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(WorkspaceId: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Detaches a resource from a workspace. This operation does not delete the underlying resource.
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResourceWithOptions(WorkspaceId: string, request: $_model.DeleteWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResourceResponse({}));
  }

  /**
   * Detaches a resource from a workspace. This operation does not delete the underlying resource.
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResource(WorkspaceId: string, request: $_model.DeleteWorkspaceResourceRequest): Promise<$_model.DeleteWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Deletes one or more roles from a workspace.
   * 
   * @param request - DeleteWorkspaceRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceRolesResponse
   */
  async deleteWorkspaceRolesWithOptions(WorkspaceId: string, request: $_model.DeleteWorkspaceRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceRolesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleIds)) {
      body["RoleIds"] = request.roleIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceRoles",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/roles/action/delete`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceRolesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceRolesResponse({}));
  }

  /**
   * Deletes one or more roles from a workspace.
   * 
   * @param request - DeleteWorkspaceRolesRequest
   * @returns DeleteWorkspaceRolesResponse
   */
  async deleteWorkspaceRoles(WorkspaceId: string, request: $_model.DeleteWorkspaceRolesRequest): Promise<$_model.DeleteWorkspaceRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceRolesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Gets the details of a specified code source configuration.
   * 
   * @param request - GetCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeSourceResponse
   */
  async getCodeSourceWithOptions(CodeSourceId: string, request: $_model.GetCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCodeSourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCodeSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetCodeSourceResponse({}));
  }

  /**
   * Gets the details of a specified code source configuration.
   * 
   * @param request - GetCodeSourceRequest
   * @returns GetCodeSourceResponse
   */
  async getCodeSource(CodeSourceId: string, request: $_model.GetCodeSourceRequest): Promise<$_model.GetCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, request, headers, runtime);
  }

  /**
   * Retrieves the configurations of a workspace.
   * 
   * @param request - GetConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigResponse
   */
  async getConfigWithOptions(WorkspaceId: string, request: $_model.GetConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigResponse({}));
  }

  /**
   * Retrieves the configurations of a workspace.
   * 
   * @param request - GetConfigRequest
   * @returns GetConfigResponse
   */
  async getConfig(WorkspaceId: string, request: $_model.GetConfigRequest): Promise<$_model.GetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a connection.
   * 
   * @param request - GetConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConnectionResponse
   */
  async getConnectionWithOptions(ConnectionId: string, request: $_model.GetConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.encryptOption)) {
      query["EncryptOption"] = request.encryptOption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConnection",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections/${$dara.URL.percentEncode(ConnectionId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConnectionResponse>(await this.callApi(params, req, runtime), new $_model.GetConnectionResponse({}));
  }

  /**
   * Retrieves the details of a connection.
   * 
   * @param request - GetConnectionRequest
   * @returns GetConnectionResponse
   */
  async getConnection(ConnectionId: string, request: $_model.GetConnectionRequest): Promise<$_model.GetConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConnectionWithOptions(ConnectionId, request, headers, runtime);
  }

  /**
   * Retrieves a dataset.
   * 
   * @param request - GetDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(DatasetId: string, request: $_model.GetDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetResponse({}));
  }

  /**
   * Retrieves a dataset.
   * 
   * @param request - GetDatasetRequest
   * @returns GetDatasetResponse
   */
  async getDataset(DatasetId: string, request: $_model.GetDatasetRequest): Promise<$_model.GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Retrieves the metadata record of a specified file in a dataset.
   * 
   * @param request - GetDatasetFileMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetFileMetaResponse
   */
  async getDatasetFileMetaWithOptions(DatasetId: string, DatasetFileMetaId: string, request: $_model.GetDatasetFileMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetFileMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetFileMeta",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas/${$dara.URL.percentEncode(DatasetFileMetaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetFileMetaResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetFileMetaResponse({}));
  }

  /**
   * Retrieves the metadata record of a specified file in a dataset.
   * 
   * @param request - GetDatasetFileMetaRequest
   * @returns GetDatasetFileMetaResponse
   */
  async getDatasetFileMeta(DatasetId: string, DatasetFileMetaId: string, request: $_model.GetDatasetFileMetaRequest): Promise<$_model.GetDatasetFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetFileMetaWithOptions(DatasetId, DatasetFileMetaId, request, headers, runtime);
  }

  /**
   * Retrieves statistics for metadata in a dataset.
   * 
   * @param request - GetDatasetFileMetasStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetFileMetasStatisticsResponse
   */
  async getDatasetFileMetasStatisticsWithOptions(DatasetId: string, request: $_model.GetDatasetFileMetasStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetFileMetasStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregateBy)) {
      query["AggregateBy"] = request.aggregateBy;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetFileMetasStatistics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetFileMetasStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetFileMetasStatisticsResponse({}));
  }

  /**
   * Retrieves statistics for metadata in a dataset.
   * 
   * @param request - GetDatasetFileMetasStatisticsRequest
   * @returns GetDatasetFileMetasStatisticsResponse
   */
  async getDatasetFileMetasStatistics(DatasetId: string, request: $_model.GetDatasetFileMetasStatisticsRequest): Promise<$_model.GetDatasetFileMetasStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetFileMetasStatisticsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Retrieves a dataset job.
   * 
   * @param request - GetDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetJobResponse
   */
  async getDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: $_model.GetDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetJobResponse({}));
  }

  /**
   * Retrieves a dataset job.
   * 
   * @param request - GetDatasetJobRequest
   * @returns GetDatasetJobResponse
   */
  async getDatasetJob(DatasetId: string, DatasetJobId: string, request: $_model.GetDatasetJobRequest): Promise<$_model.GetDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * Retrieves the configuration of a dataset job.
   * 
   * @param request - GetDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetJobConfigResponse
   */
  async getDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: $_model.GetDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetJobConfigResponse({}));
  }

  /**
   * Retrieves the configuration of a dataset job.
   * 
   * @param request - GetDatasetJobConfigRequest
   * @returns GetDatasetJobConfigResponse
   */
  async getDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: $_model.GetDatasetJobConfigRequest): Promise<$_model.GetDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * Retrieves information about a specific dataset version.
   * 
   * @param request - GetDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersionWithOptions(DatasetId: string, VersionName: string, request: $_model.GetDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetVersionResponse({}));
  }

  /**
   * Retrieves information about a specific dataset version.
   * 
   * @param request - GetDatasetVersionRequest
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersion(DatasetId: string, VersionName: string, request: $_model.GetDatasetVersionRequest): Promise<$_model.GetDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetVersionWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * Retrieves the details of the default workspace.
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspaceWithOptions(request: $_model.GetDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDefaultWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetDefaultWorkspaceResponse({}));
  }

  /**
   * Retrieves the details of the default workspace.
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspace(request: $_model.GetDefaultWorkspaceRequest): Promise<$_model.GetDefaultWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves an experiment.
   * 
   * @param request - GetExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: $_model.GetExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperimentResponse>(await this.callApi(params, req, runtime), new $_model.GetExperimentResponse({}));
  }

  /**
   * Retrieves an experiment.
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: $_model.GetExperimentRequest): Promise<$_model.GetExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Retrieves the details of an image.
   * 
   * @param request - GetImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(ImageId: string, request: $_model.GetImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageResponse>(await this.callApi(params, req, runtime), new $_model.GetImageResponse({}));
  }

  /**
   * Retrieves the details of an image.
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(ImageId: string, request: $_model.GetImageRequest): Promise<$_model.GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * Gets the details of a job.
   * 
   * @param request - GetInstanceJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceJobResponse
   */
  async getInstanceJobWithOptions(InstanceJobId: string, request: $_model.GetInstanceJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceJobResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/instancejobs/${$dara.URL.percentEncode(InstanceJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceJobResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceJobResponse({}));
  }

  /**
   * Gets the details of a job.
   * 
   * @param request - GetInstanceJobRequest
   * @returns GetInstanceJobResponse
   */
  async getInstanceJob(InstanceJobId: string, request: $_model.GetInstanceJobRequest): Promise<$_model.GetInstanceJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceJobWithOptions(InstanceJobId, request, headers, runtime);
  }

  /**
   * Retrieves a member of a workspace.
   * 
   * @param request - GetMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemberResponse
   */
  async getMemberWithOptions(WorkspaceId: string, request: $_model.GetMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/member`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemberResponse>(await this.callApi(params, req, runtime), new $_model.GetMemberResponse({}));
  }

  /**
   * Retrieves a member of a workspace.
   * 
   * @param request - GetMemberRequest
   * @returns GetMemberResponse
   */
  async getMember(WorkspaceId: string, request: $_model.GetMemberRequest): Promise<$_model.GetMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Gets the details of a specified model.
   * 
   * @param request - GetModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(ModelId: string, request: $_model.GetModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelResponse>(await this.callApi(params, req, runtime), new $_model.GetModelResponse({}));
  }

  /**
   * Gets the details of a specified model.
   * 
   * @param request - GetModelRequest
   * @returns GetModelResponse
   */
  async getModel(ModelId: string, request: $_model.GetModelRequest): Promise<$_model.GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Retrieves a model version.
   * 
   * @param request - GetModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelVersionResponse
   */
  async getModelVersionWithOptions(ModelId: string, VersionName: string, request: $_model.GetModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetModelVersionResponse({}));
  }

  /**
   * Retrieves a model version.
   * 
   * @param request - GetModelVersionRequest
   * @returns GetModelVersionResponse
   */
  async getModelVersion(ModelId: string, VersionName: string, request: $_model.GetModelVersionRequest): Promise<$_model.GetModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelVersionWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * Retrieves the permissions of a workspace.
   * 
   * @param tmpReq - GetPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionResponse
   */
  async getPermissionWithOptions(WorkspaceId: string, PermissionCode: string, tmpReq: $_model.GetPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPermissionResponse> {
    tmpReq.validate();
    let request = new $_model.GetPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.callerType)) {
      query["CallerType"] = request.callerType;
    }

    if (!$dara.isNull(request.callerUid)) {
      query["CallerUid"] = request.callerUid;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermission",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/permissions/${$dara.URL.percentEncode(PermissionCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GetPermissionResponse({}));
  }

  /**
   * Retrieves the permissions of a workspace.
   * 
   * @param request - GetPermissionRequest
   * @returns GetPermissionResponse
   */
  async getPermission(WorkspaceId: string, PermissionCode: string, request: $_model.GetPermissionRequest): Promise<$_model.GetPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPermissionWithOptions(WorkspaceId, PermissionCode, request, headers, runtime);
  }

  /**
   * Retrieves run details.
   * 
   * @param request - GetRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunResponse
   */
  async getRunWithOptions(RunId: string, request: $_model.GetRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRunResponse>(await this.callApi(params, req, runtime), new $_model.GetRunResponse({}));
  }

  /**
   * Retrieves run details.
   * 
   * @param request - GetRunRequest
   * @returns GetRunResponse
   */
  async getRun(RunId: string, request: $_model.GetRunRequest): Promise<$_model.GetRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * Retrieves the details of a workspace.
   * 
   * @param request - GetWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(WorkspaceId: string, request: $_model.GetWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * Retrieves the details of a workspace.
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(WorkspaceId: string, request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Gets information about a specific role within a workspace.
   * 
   * @param request - GetWorkspaceRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceRoleResponse
   */
  async getWorkspaceRoleWithOptions(WorkspaceId: string, RoleId: string, request: $_model.GetWorkspaceRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspaceRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/roles/${$dara.URL.percentEncode(RoleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceRoleResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceRoleResponse({}));
  }

  /**
   * Gets information about a specific role within a workspace.
   * 
   * @param request - GetWorkspaceRoleRequest
   * @returns GetWorkspaceRoleResponse
   */
  async getWorkspaceRole(WorkspaceId: string, RoleId: string, request: $_model.GetWorkspaceRoleRequest): Promise<$_model.GetWorkspaceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceRoleWithOptions(WorkspaceId, RoleId, request, headers, runtime);
  }

  /**
   * Queries a list of code source configurations with support for paging, sorting, and filtering.
   * 
   * @param request - ListCodeSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCodeSourcesResponse
   */
  async listCodeSourcesWithOptions(request: $_model.ListCodeSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCodeSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCodeSources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCodeSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListCodeSourcesResponse({}));
  }

  /**
   * Queries a list of code source configurations with support for paging, sorting, and filtering.
   * 
   * @param request - ListCodeSourcesRequest
   * @returns ListCodeSourcesResponse
   */
  async listCodeSources(request: $_model.ListCodeSourcesRequest): Promise<$_model.ListCodeSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCodeSourcesWithOptions(request, headers, runtime);
  }

  /**
   * Lists the configurations for a workspace.
   * 
   * @param request - ListConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigsResponse
   */
  async listConfigsWithOptions(WorkspaceId: string, request: $_model.ListConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKeys)) {
      query["ConfigKeys"] = request.configKeys;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigsResponse({}));
  }

  /**
   * Lists the configurations for a workspace.
   * 
   * @param request - ListConfigsRequest
   * @returns ListConfigsResponse
   */
  async listConfigs(WorkspaceId: string, request: $_model.ListConfigsRequest): Promise<$_model.ListConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries a list of connections.
   * 
   * @param tmpReq - ListConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectionsResponse
   */
  async listConnectionsWithOptions(tmpReq: $_model.ListConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.connectionIds)) {
      request.connectionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.connectionIds, "ConnectionIds", "simple");
    }

    if (!$dara.isNull(tmpReq.connectionTypes)) {
      request.connectionTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.connectionTypes, "ConnectionTypes", "simple");
    }

    if (!$dara.isNull(tmpReq.modelTypes)) {
      request.modelTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.modelTypes, "ModelTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.connectionIdsShrink)) {
      query["ConnectionIds"] = request.connectionIdsShrink;
    }

    if (!$dara.isNull(request.connectionName)) {
      query["ConnectionName"] = request.connectionName;
    }

    if (!$dara.isNull(request.connectionTypesShrink)) {
      query["ConnectionTypes"] = request.connectionTypesShrink;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.encryptOption)) {
      query["EncryptOption"] = request.encryptOption;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.modelTypesShrink)) {
      query["ModelTypes"] = request.modelTypesShrink;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.toolCall)) {
      query["ToolCall"] = request.toolCall;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnections",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectionsResponse({}));
  }

  /**
   * Queries a list of connections.
   * 
   * @param request - ListConnectionsRequest
   * @returns ListConnectionsResponse
   */
  async listConnections(request: $_model.ListConnectionsRequest): Promise<$_model.ListConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the files in a dataset.
   * 
   * @param tmpReq - ListDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetFileMetasResponse
   */
  async listDatasetFileMetasWithOptions(DatasetId: string, tmpReq: $_model.ListDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetFileMetasResponse> {
    tmpReq.validate();
    let request = new $_model.ListDatasetFileMetasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.datasetFileMetaIds)) {
      request.datasetFileMetaIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.datasetFileMetaIds, "DatasetFileMetaIds", "simple");
    }

    if (!$dara.isNull(tmpReq.queryContentTypeIncludeAny)) {
      request.queryContentTypeIncludeAnyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryContentTypeIncludeAny, "QueryContentTypeIncludeAny", "simple");
    }

    if (!$dara.isNull(tmpReq.queryFileTypeIncludeAny)) {
      request.queryFileTypeIncludeAnyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryFileTypeIncludeAny, "QueryFileTypeIncludeAny", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsExclude)) {
      request.queryTagsExcludeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsExclude, "QueryTagsExclude", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsIncludeAll)) {
      request.queryTagsIncludeAllShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsIncludeAll, "QueryTagsIncludeAll", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsIncludeAny)) {
      request.queryTagsIncludeAnyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsIncludeAny, "QueryTagsIncludeAny", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetaIdsShrink)) {
      query["DatasetFileMetaIds"] = request.datasetFileMetaIdsShrink;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.endFileUpdateTime)) {
      query["EndFileUpdateTime"] = request.endFileUpdateTime;
    }

    if (!$dara.isNull(request.endTagUpdateTime)) {
      query["EndTagUpdateTime"] = request.endTagUpdateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryContentTypeIncludeAnyShrink)) {
      query["QueryContentTypeIncludeAny"] = request.queryContentTypeIncludeAnyShrink;
    }

    if (!$dara.isNull(request.queryExpression)) {
      query["QueryExpression"] = request.queryExpression;
    }

    if (!$dara.isNull(request.queryFileDir)) {
      query["QueryFileDir"] = request.queryFileDir;
    }

    if (!$dara.isNull(request.queryFileName)) {
      query["QueryFileName"] = request.queryFileName;
    }

    if (!$dara.isNull(request.queryFileTypeIncludeAnyShrink)) {
      query["QueryFileTypeIncludeAny"] = request.queryFileTypeIncludeAnyShrink;
    }

    if (!$dara.isNull(request.queryImage)) {
      query["QueryImage"] = request.queryImage;
    }

    if (!$dara.isNull(request.queryTagsExcludeShrink)) {
      query["QueryTagsExclude"] = request.queryTagsExcludeShrink;
    }

    if (!$dara.isNull(request.queryTagsIncludeAllShrink)) {
      query["QueryTagsIncludeAll"] = request.queryTagsIncludeAllShrink;
    }

    if (!$dara.isNull(request.queryTagsIncludeAnyShrink)) {
      query["QueryTagsIncludeAny"] = request.queryTagsIncludeAnyShrink;
    }

    if (!$dara.isNull(request.queryText)) {
      query["QueryText"] = request.queryText;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.queryVideo)) {
      query["QueryVideo"] = request.queryVideo;
    }

    if (!$dara.isNull(request.scoreThreshold)) {
      query["ScoreThreshold"] = request.scoreThreshold;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startFileUpdateTime)) {
      query["StartFileUpdateTime"] = request.startFileUpdateTime;
    }

    if (!$dara.isNull(request.startTagUpdateTime)) {
      query["StartTagUpdateTime"] = request.startTagUpdateTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.thumbnailMode)) {
      query["ThumbnailMode"] = request.thumbnailMode;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetFileMetasResponse({}));
  }

  /**
   * Queries the files in a dataset.
   * 
   * @param request - ListDatasetFileMetasRequest
   * @returns ListDatasetFileMetasResponse
   */
  async listDatasetFileMetas(DatasetId: string, request: $_model.ListDatasetFileMetasRequest): Promise<$_model.ListDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Lists dataset job configurations in batches.
   * 
   * @param request - ListDatasetJobConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetJobConfigsResponse
   */
  async listDatasetJobConfigsWithOptions(DatasetId: string, request: $_model.ListDatasetJobConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetJobConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetJobConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetJobConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetJobConfigsResponse({}));
  }

  /**
   * Lists dataset job configurations in batches.
   * 
   * @param request - ListDatasetJobConfigsRequest
   * @returns ListDatasetJobConfigsResponse
   */
  async listDatasetJobConfigs(DatasetId: string, request: $_model.ListDatasetJobConfigsRequest): Promise<$_model.ListDatasetJobConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetJobConfigsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Lists dataset jobs.
   * 
   * @param request - ListDatasetJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetJobsResponse
   */
  async listDatasetJobsWithOptions(DatasetId: string, request: $_model.ListDatasetJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.jobAction)) {
      query["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.withLogs)) {
      query["WithLogs"] = request.withLogs;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetJobs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetJobsResponse({}));
  }

  /**
   * Lists dataset jobs.
   * 
   * @param request - ListDatasetJobsRequest
   * @returns ListDatasetJobsResponse
   */
  async listDatasetJobs(DatasetId: string, request: $_model.ListDatasetJobsRequest): Promise<$_model.ListDatasetJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetJobsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Retrieves a list of dataset versions.
   * 
   * @param request - ListDatasetVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetVersionsResponse
   */
  async listDatasetVersionsWithOptions(DatasetId: string, request: $_model.ListDatasetVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    if (!$dara.isNull(request.labelValues)) {
      query["LabelValues"] = request.labelValues;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["SourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetVersions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetVersionsResponse({}));
  }

  /**
   * Retrieves a list of dataset versions.
   * 
   * @param request - ListDatasetVersionsRequest
   * @returns ListDatasetVersionsResponse
   */
  async listDatasetVersions(DatasetId: string, request: $_model.ListDatasetVersionsRequest): Promise<$_model.ListDatasetVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetVersionsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Lists the datasets in a workspace.
   * 
   * @param request - ListDatasetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: $_model.ListDatasetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatasetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.dataSourceTypes)) {
      query["DataSourceTypes"] = request.dataSourceTypes;
    }

    if (!$dara.isNull(request.dataTypes)) {
      query["DataTypes"] = request.dataTypes;
    }

    if (!$dara.isNull(request.datasetIds)) {
      query["DatasetIds"] = request.datasetIds;
    }

    if (!$dara.isNull(request.edition)) {
      query["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.shareScope)) {
      query["ShareScope"] = request.shareScope;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceDatasetId)) {
      query["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["SourceTypes"] = request.sourceTypes;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasets",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatasetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDatasetsResponse({}));
  }

  /**
   * Lists the datasets in a workspace.
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: $_model.ListDatasetsRequest): Promise<$_model.ListDatasetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of experiments.
   * 
   * @param tmpReq - ListExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentResponse
   */
  async listExperimentWithOptions(tmpReq: $_model.ListExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperimentResponse> {
    tmpReq.validate();
    let request = new $_model.ListExperimentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperimentResponse>(await this.callApi(params, req, runtime), new $_model.ListExperimentResponse({}));
  }

  /**
   * Retrieves a list of experiments.
   * 
   * @param request - ListExperimentRequest
   * @returns ListExperimentResponse
   */
  async listExperiment(request: $_model.ListExperimentRequest): Promise<$_model.ListExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of features.
   * 
   * @param request - ListFeaturesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFeaturesResponse
   */
  async listFeaturesWithOptions(request: $_model.ListFeaturesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFeaturesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFeatures",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/features`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFeaturesResponse>(await this.callApi(params, req, runtime), new $_model.ListFeaturesResponse({}));
  }

  /**
   * Retrieves a list of features.
   * 
   * @param request - ListFeaturesRequest
   * @returns ListFeaturesResponse
   */
  async listFeatures(request: $_model.ListFeaturesRequest): Promise<$_model.ListFeaturesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFeaturesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of image labels.
   * 
   * @param request - ListImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLabelsResponse
   */
  async listImageLabelsWithOptions(request: $_model.ListImageLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.labelFilter)) {
      query["LabelFilter"] = request.labelFilter;
    }

    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/image/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImageLabelsResponse>(await this.callApi(params, req, runtime), new $_model.ListImageLabelsResponse({}));
  }

  /**
   * Queries a list of image labels.
   * 
   * @param request - ListImageLabelsRequest
   * @returns ListImageLabelsResponse
   */
  async listImageLabels(request: $_model.ListImageLabelsRequest): Promise<$_model.ListImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImageLabelsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of images.
   * 
   * @param request - ListImagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: $_model.ListImagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.imageUri)) {
      query["ImageUri"] = request.imageUri;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesResponse({}));
  }

  /**
   * Queries a list of images.
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: $_model.ListImagesRequest): Promise<$_model.ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  /**
   * Lists members in a workspace.
   * 
   * @param request - ListMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(WorkspaceId: string, request: $_model.ListMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roles)) {
      query["Roles"] = request.roles;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListMembersResponse({}));
  }

  /**
   * Lists members in a workspace.
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(WorkspaceId: string, request: $_model.ListMembersRequest): Promise<$_model.ListMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves a list of model versions.
   * 
   * @param request - ListModelVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelVersionsResponse
   */
  async listModelVersionsWithOptions(ModelId: string, request: $_model.ListModelVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      query["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.frameworkType)) {
      query["FrameworkType"] = request.frameworkType;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelVersions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelVersionsResponse({}));
  }

  /**
   * Retrieves a list of model versions.
   * 
   * @param request - ListModelVersionsRequest
   * @returns ListModelVersionsResponse
   */
  async listModelVersions(ModelId: string, request: $_model.ListModelVersionsRequest): Promise<$_model.ListModelVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelVersionsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Retrieves a list of models.
   * 
   * @param tmpReq - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(tmpReq: $_model.ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse> {
    tmpReq.validate();
    let request = new $_model.ListModelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.conditions)) {
      request.conditionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.conditions, "Conditions", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collections)) {
      query["Collections"] = request.collections;
    }

    if (!$dara.isNull(request.conditionsShrink)) {
      query["Conditions"] = request.conditionsShrink;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.task)) {
      query["Task"] = request.task;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
  }

  /**
   * Retrieves a list of models.
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves a list of user permissions in a workspace.
   * 
   * @param request - ListPermissionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(WorkspaceId: string, request: $_model.ListPermissionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/permissions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPermissionsResponse>(await this.callApi(params, req, runtime), new $_model.ListPermissionsResponse({}));
  }

  /**
   * Retrieves a list of user permissions in a workspace.
   * 
   * @param request - ListPermissionsRequest
   * @returns ListPermissionsResponse
   */
  async listPermissions(WorkspaceId: string, request: $_model.ListPermissionsRequest): Promise<$_model.ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Lists products.
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productCodes)) {
      query["ProductCodes"] = request.productCodes;
    }

    if (!$dara.isNull(request.serviceCodes)) {
      query["ServiceCodes"] = request.serviceCodes;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * Lists products.
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
   * Retrieves a list of resource quotas.
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: $_model.ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQuotasResponse>(await this.callApi(params, req, runtime), new $_model.ListQuotasResponse({}));
  }

  /**
   * Retrieves a list of resource quotas.
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: $_model.ListQuotasRequest): Promise<$_model.ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * Lists resources associated with a workspace.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: $_model.ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productTypes)) {
      query["ProductTypes"] = request.productTypes;
    }

    if (!$dara.isNull(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.verboseFields)) {
      query["VerboseFields"] = request.verboseFields;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListResourcesResponse({}));
  }

  /**
   * Lists resources associated with a workspace.
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
   * Retrieves a list of metric records for a run.
   * 
   * @param request - ListRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunMetricsResponse
   */
  async listRunMetricsWithOptions(RunId: string, request: $_model.ListRunMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRunMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRunMetricsResponse>(await this.callApi(params, req, runtime), new $_model.ListRunMetricsResponse({}));
  }

  /**
   * Retrieves a list of metric records for a run.
   * 
   * @param request - ListRunMetricsRequest
   * @returns ListRunMetricsResponse
   */
  async listRunMetrics(RunId: string, request: $_model.ListRunMetricsRequest): Promise<$_model.ListRunMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * Retrieves a list of runs.
   * 
   * @param request - ListRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunsResponse
   */
  async listRunsWithOptions(request: $_model.ListRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.gmtCreateTime)) {
      query["GmtCreateTime"] = request.gmtCreateTime;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRuns",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListRunsResponse({}));
  }

  /**
   * Retrieves a list of runs.
   * 
   * @param request - ListRunsRequest
   * @returns ListRunsResponse
   */
  async listRuns(request: $_model.ListRunsRequest): Promise<$_model.ListRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves user configurations.
   * 
   * @param request - ListUserConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserConfigsResponse
   */
  async listUserConfigsWithOptions(request: $_model.ListUserConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryNames)) {
      query["CategoryNames"] = request.categoryNames;
    }

    if (!$dara.isNull(request.configKeys)) {
      query["ConfigKeys"] = request.configKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListUserConfigsResponse({}));
  }

  /**
   * Retrieves user configurations.
   * 
   * @param request - ListUserConfigsRequest
   * @returns ListUserConfigsResponse
   */
  async listUserConfigs(request: $_model.ListUserConfigsRequest): Promise<$_model.ListUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the roles in a specified workspace.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRolesWithOptions(WorkspaceId: string, request: $_model.ListWorkspaceRolesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceRolesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roleIds)) {
      query["RoleIds"] = request.roleIds;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.roleType)) {
      query["RoleType"] = request.roleType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.verboseFields)) {
      query["VerboseFields"] = request.verboseFields;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceRoles",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceRolesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceRolesResponse({}));
  }

  /**
   * Lists the roles in a specified workspace.
   * 
   * @param request - ListWorkspaceRolesRequest
   * @returns ListWorkspaceRolesResponse
   */
  async listWorkspaceRoles(WorkspaceId: string, request: $_model.ListWorkspaceRolesRequest): Promise<$_model.ListWorkspaceRolesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceRolesWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Lists users that can be added as members to a workspace.
   * 
   * @param request - ListWorkspaceUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsersWithOptions(WorkspaceId: string, request: $_model.ListWorkspaceUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceUsers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceUsersResponse({}));
  }

  /**
   * Lists users that can be added as members to a workspace.
   * 
   * @param request - ListWorkspaceUsersRequest
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsers(WorkspaceId: string, request: $_model.ListWorkspaceUsersRequest): Promise<$_model.ListWorkspaceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceUsersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Retrieves the list of workspaces in a specified region.
   * 
   * @remarks
   * You can specify different query options by using the option parameter to retrieve different workspace-related information.
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Retrieves the list of workspaces in a specified region.
   * 
   * @remarks
   * You can specify different query options by using the option parameter to retrieve different workspace-related information.
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: $_model.ListWorkspacesRequest): Promise<$_model.ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * Records the metrics of a run in a batch.
   * 
   * @param request - LogRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogRunMetricsResponse
   */
  async logRunMetricsWithOptions(RunId: string, request: $_model.LogRunMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.LogRunMetricsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LogRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/metrics/action/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LogRunMetricsResponse>(await this.callApi(params, req, runtime), new $_model.LogRunMetricsResponse({}));
  }

  /**
   * Records the metrics of a run in a batch.
   * 
   * @param request - LogRunMetricsRequest
   * @returns LogRunMetricsResponse
   */
  async logRunMetrics(RunId: string, request: $_model.LogRunMetricsRequest): Promise<$_model.LogRunMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * Publishes a private code source, making it public in a workspace.
   * 
   * @param request - PublishCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSourceWithOptions(CodeSourceId: string, request: $_model.PublishCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishCodeSourceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishCodeSourceResponse>(await this.callApi(params, req, runtime), new $_model.PublishCodeSourceResponse({}));
  }

  /**
   * Publishes a private code source, making it public in a workspace.
   * 
   * @param request - PublishCodeSourceRequest
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSource(CodeSourceId: string, request: $_model.PublishCodeSourceRequest): Promise<$_model.PublishCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishCodeSourceWithOptions(CodeSourceId, request, headers, runtime);
  }

  /**
   * Publishes a private dataset in a workspace.
   * 
   * @param request - PublishDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDatasetResponse
   */
  async publishDatasetWithOptions(DatasetId: string, request: $_model.PublishDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishDatasetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishDatasetResponse>(await this.callApi(params, req, runtime), new $_model.PublishDatasetResponse({}));
  }

  /**
   * Publishes a private dataset in a workspace.
   * 
   * @param request - PublishDatasetRequest
   * @returns PublishDatasetResponse
   */
  async publishDataset(DatasetId: string, request: $_model.PublishDatasetRequest): Promise<$_model.PublishDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Publishes an image and changes its visibility from PRIVATE to PUBLIC.
   * 
   * @param request - PublishImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishImageResponse
   */
  async publishImageWithOptions(ImageId: string, request: $_model.PublishImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishImageResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishImageResponse>(await this.callApi(params, req, runtime), new $_model.PublishImageResponse({}));
  }

  /**
   * Publishes an image and changes its visibility from PRIVATE to PUBLIC.
   * 
   * @param request - PublishImageRequest
   * @returns PublishImageResponse
   */
  async publishImage(ImageId: string, request: $_model.PublishImageRequest): Promise<$_model.PublishImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishImageWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * Deletes an image.
   * 
   * @param request - RemoveImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(ImageId: string, request: $_model.RemoveImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveImageResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveImageResponse>(await this.callApi(params, req, runtime), new $_model.RemoveImageResponse({}));
  }

  /**
   * Deletes an image.
   * 
   * @param request - RemoveImageRequest
   * @returns RemoveImageResponse
   */
  async removeImage(ImageId: string, request: $_model.RemoveImageRequest): Promise<$_model.RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * Removes a label from an image.
   * 
   * @param request - RemoveImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabelsWithOptions(ImageId: string, LabelKey: string, request: $_model.RemoveImageLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveImageLabelsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/labels/${$dara.URL.percentEncode(LabelKey)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveImageLabelsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveImageLabelsResponse({}));
  }

  /**
   * Removes a label from an image.
   * 
   * @param request - RemoveImageLabelsRequest
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabels(ImageId: string, LabelKey: string, request: $_model.RemoveImageLabelsRequest): Promise<$_model.RemoveImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, request, headers, runtime);
  }

  /**
   * Removes a role from a member.
   * 
   * @param request - RemoveMemberRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, request: $_model.RemoveMemberRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveMemberRoleResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members/${$dara.URL.percentEncode(MemberId)}/roles/${$dara.URL.percentEncode(RoleName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveMemberRoleResponse>(await this.callApi(params, req, runtime), new $_model.RemoveMemberRoleResponse({}));
  }

  /**
   * Removes a role from a member.
   * 
   * @param request - RemoveMemberRoleRequest
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRole(WorkspaceId: string, MemberId: string, RoleName: string, request: $_model.RemoveMemberRoleRequest): Promise<$_model.RemoveMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, request, headers, runtime);
  }

  /**
   * Updates the labels of an experiment.
   * 
   * @param request - SetExperimentLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabelsWithOptions(ExperimentId: string, request: $_model.SetExperimentLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SetExperimentLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetExperimentLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetExperimentLabelsResponse>(await this.callApi(params, req, runtime), new $_model.SetExperimentLabelsResponse({}));
  }

  /**
   * Updates the labels of an experiment.
   * 
   * @param request - SetExperimentLabelsRequest
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabels(ExperimentId: string, request: $_model.SetExperimentLabelsRequest): Promise<$_model.SetExperimentLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setExperimentLabelsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Updates user configurations.
   * 
   * @param request - SetUserConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserConfigsResponse
   */
  async setUserConfigsWithOptions(request: $_model.SetUserConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SetUserConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetUserConfigsResponse>(await this.callApi(params, req, runtime), new $_model.SetUserConfigsResponse({}));
  }

  /**
   * Updates user configurations.
   * 
   * @param request - SetUserConfigsRequest
   * @returns SetUserConfigsResponse
   */
  async setUserConfigs(request: $_model.SetUserConfigsRequest): Promise<$_model.SetUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setUserConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Stops a dataset Job.
   * 
   * @param request - StopDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDatasetJobResponse
   */
  async stopDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: $_model.StopDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}/action/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopDatasetJobResponse>(await this.callApi(params, req, runtime), new $_model.StopDatasetJobResponse({}));
  }

  /**
   * Stops a dataset Job.
   * 
   * @param request - StopDatasetJobRequest
   * @returns StopDatasetJobResponse
   */
  async stopDatasetJob(DatasetId: string, DatasetJobId: string, request: $_model.StopDatasetJobRequest): Promise<$_model.StopDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * Updates a code source.
   * 
   * @param request - UpdateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCodeSourceResponse
   */
  async updateCodeSourceWithOptions(CodeSourceId: string, request: $_model.UpdateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCodeSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cloneType)) {
      body["CloneType"] = request.cloneType;
    }

    if (!$dara.isNull(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!$dara.isNull(request.codeCommit)) {
      body["CodeCommit"] = request.codeCommit;
    }

    if (!$dara.isNull(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!$dara.isNull(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!$dara.isNull(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCodeSourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCodeSourceResponse({}));
  }

  /**
   * Updates a code source.
   * 
   * @param request - UpdateCodeSourceRequest
   * @returns UpdateCodeSourceResponse
   */
  async updateCodeSource(CodeSourceId: string, request: $_model.UpdateCodeSourceRequest): Promise<$_model.UpdateCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCodeSourceWithOptions(CodeSourceId, request, headers, runtime);
  }

  /**
   * Updates or creates workspace configurations.
   * 
   * @param request - UpdateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
   */
  async updateConfigWithOptions(WorkspaceId: string, request: $_model.UpdateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKey)) {
      body["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigResponse({}));
  }

  /**
   * Updates or creates workspace configurations.
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(WorkspaceId: string, request: $_model.UpdateConfigRequest): Promise<$_model.UpdateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates or creates workspace configurations in batches.
   * 
   * @param request - UpdateConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigsResponse
   */
  async updateConfigsWithOptions(WorkspaceId: string, request: $_model.UpdateConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigsResponse({}));
  }

  /**
   * Updates or creates workspace configurations in batches.
   * 
   * @param request - UpdateConfigsRequest
   * @returns UpdateConfigsResponse
   */
  async updateConfigs(WorkspaceId: string, request: $_model.UpdateConfigsRequest): Promise<$_model.UpdateConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates a connection configuration.
   * 
   * @param request - UpdateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConnectionResponse
   */
  async updateConnectionWithOptions(ConnectionId: string, request: $_model.UpdateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.models)) {
      body["Models"] = request.models;
    }

    if (!$dara.isNull(request.secrets)) {
      body["Secrets"] = request.secrets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConnection",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections/${$dara.URL.percentEncode(ConnectionId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConnectionResponse({}));
  }

  /**
   * Updates a connection configuration.
   * 
   * @param request - UpdateConnectionRequest
   * @returns UpdateConnectionResponse
   */
  async updateConnection(ConnectionId: string, request: $_model.UpdateConnectionRequest): Promise<$_model.UpdateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConnectionWithOptions(ConnectionId, request, headers, runtime);
  }

  /**
   * Updates the properties of a dataset, such as its name and description.
   * 
   * @param request - UpdateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(DatasetId: string, request: $_model.UpdateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.accessibleRoleIdList)) {
      body["AccessibleRoleIdList"] = request.accessibleRoleIdList;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.edition)) {
      body["Edition"] = request.edition;
    }

    if (!$dara.isNull(request.mountAccessReadWriteRoleIdList)) {
      body["MountAccessReadWriteRoleIdList"] = request.mountAccessReadWriteRoleIdList;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.sharingConfig)) {
      body["SharingConfig"] = request.sharingConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetResponse({}));
  }

  /**
   * Updates the properties of a dataset, such as its name and description.
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(DatasetId: string, request: $_model.UpdateDatasetRequest): Promise<$_model.UpdateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Updates multiple file metadata records in a dataset.
   * 
   * @param request - UpdateDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetFileMetasResponse
   */
  async updateDatasetFileMetasWithOptions(DatasetId: string, request: $_model.UpdateDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetFileMetasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetas)) {
      body["DatasetFileMetas"] = request.datasetFileMetas;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.tagJobId)) {
      body["TagJobId"] = request.tagJobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetFileMetasResponse({}));
  }

  /**
   * Updates multiple file metadata records in a dataset.
   * 
   * @param request - UpdateDatasetFileMetasRequest
   * @returns UpdateDatasetFileMetasResponse
   */
  async updateDatasetFileMetas(DatasetId: string, request: $_model.UpdateDatasetFileMetasRequest): Promise<$_model.UpdateDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Updates a dataset job.
   * 
   * @param request - UpdateDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetJobResponse
   */
  async updateDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: $_model.UpdateDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetJobResponse({}));
  }

  /**
   * Updates a dataset job.
   * 
   * @param request - UpdateDatasetJobRequest
   * @returns UpdateDatasetJobResponse
   */
  async updateDatasetJob(DatasetId: string, DatasetJobId: string, request: $_model.UpdateDatasetJobRequest): Promise<$_model.UpdateDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * Updates a dataset job configuration.
   * 
   * @param request - UpdateDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetJobConfigResponse
   */
  async updateDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: $_model.UpdateDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetJobConfigResponse({}));
  }

  /**
   * Updates a dataset job configuration.
   * 
   * @param request - UpdateDatasetJobConfigRequest
   * @returns UpdateDatasetJobConfigResponse
   */
  async updateDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: $_model.UpdateDatasetJobConfigRequest): Promise<$_model.UpdateDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * Updates the information for a specific version of a dataset.
   * 
   * @param request - UpdateDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetVersionResponse
   */
  async updateDatasetVersionWithOptions(DatasetId: string, VersionName: string, request: $_model.UpdateDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDatasetVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDatasetVersionResponse({}));
  }

  /**
   * Updates the information for a specific version of a dataset.
   * 
   * @param request - UpdateDatasetVersionRequest
   * @returns UpdateDatasetVersionResponse
   */
  async updateDatasetVersion(DatasetId: string, VersionName: string, request: $_model.UpdateDatasetVersionRequest): Promise<$_model.UpdateDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetVersionWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * Sets a workspace as the default.
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspaceWithOptions(request: $_model.UpdateDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDefaultWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDefaultWorkspaceResponse({}));
  }

  /**
   * Sets a workspace as the default.
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspace(request: $_model.UpdateDefaultWorkspaceRequest): Promise<$_model.UpdateDefaultWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Updates an experiment.
   * 
   * @param request - UpdateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: $_model.UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExperimentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExperimentResponse({}));
  }

  /**
   * Updates an experiment.
   * 
   * @param request - UpdateExperimentRequest
   * @returns UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: $_model.UpdateExperimentRequest): Promise<$_model.UpdateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * Updates the basic configuration of a model.
   * 
   * @param request - UpdateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelResponse
   */
  async updateModelWithOptions(ModelId: string, request: $_model.UpdateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!$dara.isNull(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!$dara.isNull(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!$dara.isNull(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.parameterSize)) {
      body["ParameterSize"] = request.parameterSize;
    }

    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelResponse({}));
  }

  /**
   * Updates the basic configuration of a model.
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(ModelId: string, request: $_model.UpdateModelRequest): Promise<$_model.UpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * Updates a model version.
   * 
   * @param request - UpdateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersionWithOptions(ModelId: string, VersionName: string, request: $_model.UpdateModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModelVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!$dara.isNull(request.distillationSpec)) {
      body["DistillationSpec"] = request.distillationSpec;
    }

    if (!$dara.isNull(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModelVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModelVersionResponse({}));
  }

  /**
   * Updates a model version.
   * 
   * @param request - UpdateModelVersionRequest
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersion(ModelId: string, VersionName: string, request: $_model.UpdateModelVersionRequest): Promise<$_model.UpdateModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelVersionWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * Updates the details of a run.
   * 
   * @param request - UpdateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRunResponse
   */
  async updateRunWithOptions(RunId: string, request: $_model.UpdateRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRunResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRunResponse({}));
  }

  /**
   * Updates the details of a run.
   * 
   * @param request - UpdateRunRequest
   * @returns UpdateRunResponse
   */
  async updateRun(RunId: string, request: $_model.UpdateRunRequest): Promise<$_model.UpdateRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * Updates the name and description of a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(WorkspaceId: string, request: $_model.UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Updates the name and description of a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(WorkspaceId: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates resources in a workspace.
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResourceWithOptions(WorkspaceId: string, request: $_model.UpdateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResourceResponse({}));
  }

  /**
   * Updates resources in a workspace.
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResource(WorkspaceId: string, request: $_model.UpdateWorkspaceResourceRequest): Promise<$_model.UpdateWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates a role in a workspace.
   * 
   * @param request - UpdateWorkspaceRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceRoleResponse
   */
  async updateWorkspaceRoleWithOptions(WorkspaceId: string, RoleId: string, request: $_model.UpdateWorkspaceRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceRoleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modulePermissions)) {
      body["ModulePermissions"] = request.modulePermissions;
    }

    if (!$dara.isNull(request.roleName)) {
      body["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/roles/${$dara.URL.percentEncode(RoleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceRoleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceRoleResponse({}));
  }

  /**
   * Updates a role in a workspace.
   * 
   * @param request - UpdateWorkspaceRoleRequest
   * @returns UpdateWorkspaceRoleResponse
   */
  async updateWorkspaceRole(WorkspaceId: string, RoleId: string, request: $_model.UpdateWorkspaceRoleRequest): Promise<$_model.UpdateWorkspaceRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceRoleWithOptions(WorkspaceId, RoleId, request, headers, runtime);
  }

  /**
   * Validates a connection.
   * 
   * @param request - ValidateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateConnectionResponse
   */
  async validateConnectionWithOptions(request: $_model.ValidateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    if (!$dara.isNull(request.connectionId)) {
      body["ConnectionId"] = request.connectionId;
    }

    if (!$dara.isNull(request.connectionType)) {
      body["ConnectionType"] = request.connectionType;
    }

    if (!$dara.isNull(request.secrets)) {
      body["Secrets"] = request.secrets;
    }

    if (!$dara.isNull(request.validateType)) {
      body["ValidateType"] = request.validateType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateConnection",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/connections/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ValidateConnectionResponse({}));
  }

  /**
   * Validates a connection.
   * 
   * @param request - ValidateConnectionRequest
   * @returns ValidateConnectionResponse
   */
  async validateConnection(request: $_model.ValidateConnectionRequest): Promise<$_model.ValidateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateConnectionWithOptions(request, headers, runtime);
  }

}
