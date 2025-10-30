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
   * Receives and processes system event messages sent by DataWorks.
   * 
   * @remarks
   * This operation can be called only by the internal system and cannot be called by external users.
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
   * Receives and processes system event messages sent by DataWorks.
   * 
   * @remarks
   * This operation can be called only by the internal system and cannot be called by external users.
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
   * Adds tags to an image.
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
   * Adds tags to an image.
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
   * Adds a role to a member in a workspace. After you add a role to a member, the member is granted the permissions of the role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberRoleResponse
   */
  async addMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMemberRoleResponse> {
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
   * Adds a role to a member in a workspace. After you add a role to a member, the member is granted the permissions of the role.
   * @returns AddMemberRoleResponse
   */
  async addMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<$_model.AddMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs based on the ID.
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
   * Changes the resource group to which a resource belongs based on the ID.
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
   * Creates a code build in Platform for AI (PAI). You can configure Git branches and commit IDs. After the code build is created, you can reference the code build in a Deep Learning Containers (DLC) job.
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
   * Creates a code build in Platform for AI (PAI). You can configure Git branches and commit IDs. After the code build is created, you can reference the code build in a Deep Learning Containers (DLC) job.
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
   * Creates a connection. This API is used to connect Platform for AI (PAI) to customer models and databases in LangStudio and multimodal dataset search scenarios.
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
   * Creates a connection. This API is used to connect Platform for AI (PAI) to customer models and databases in LangStudio and multimodal dataset search scenarios.
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
   * Creates the metadata records of multiple files in a dataset at a time.
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
   * Creates the metadata records of multiple files in a dataset at a time.
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
   * Creates a job configuration for a dataset.
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
   * Creates a job configuration for a dataset.
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
   * Creates tags for a dataset.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The tag key and value are not empty strings and cannot exceed 128 characters in length.
   * *   The tag key cannot start with any of the following strings: "aliyun", "acs", "http://", and "https://".
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
   * Creates tags for a dataset.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The tag key and value are not empty strings and cannot exceed 128 characters in length.
   * *   The tag key cannot start with any of the following strings: "aliyun", "acs", "http://", and "https://".
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
   * Creates tags for a dataset version.
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
   * Creates tags for a dataset version.
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
   * Adds a user to a workspace as a member. You can add multiple users as members.
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
   * Adds a user to a workspace as a member. You can add multiple users as members.
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
   * Creates a model. A model is a collection of model versions. When you create a model, you must specify the model name and description.
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
   * Creates a model. A model is a collection of model versions. When you create a model, you must specify the model name and description.
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
   * Creates a tag for a model.
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
   * Creates a tag for a model.
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
   * Creates a new version for the specified model.
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
   * Creates a new version for the specified model.
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
   * Creates a tag for a model version.
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
   * Creates a tag for a model version.
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
   * Creates a pay-as-you-go order for DataWorks, OSS, PAI, or MaxCompute.
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
   * Creates a pay-as-you-go order for DataWorks, OSS, PAI, or MaxCompute.
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
   * Creates a run. A run is an experiment that can be associated with a specific workload or simply a code execution.
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
   * Creates a run. A run is an experiment that can be associated with a specific workload or simply a code execution.
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
   * Associates resources with a workspace.
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
   * Associates resources with a workspace.
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
   * Deletes a code source based on the provided ID.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCodeSourceResponse> {
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
   * Deletes a code source based on the provided ID.
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSource(CodeSourceId: string): Promise<$_model.DeleteCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * Deletes workspace configurations.
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
   * Deletes workspace configurations.
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(ConnectionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectionResponse> {
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
   * @returns DeleteConnectionResponse
   */
  async deleteConnection(ConnectionId: string): Promise<$_model.DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectionWithOptions(ConnectionId, headers, runtime);
  }

  /**
   * Deletes a dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetResponse> {
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
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(DatasetId: string): Promise<$_model.DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Deletes the metadata records of multiple files in a dataset at a time.
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
   * Deletes the metadata records of multiple files in a dataset at a time.
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
   * Deletes a dataset job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetJobResponse> {
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
   * Deletes a dataset job.
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJob(DatasetId: string, DatasetJobId: string): Promise<$_model.DeleteDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobWithOptions(DatasetId, DatasetJobId, headers, runtime);
  }

  /**
   * Deletes a job configuration for a dataset.
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
   * Deletes a job configuration for a dataset.
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
   * Deletes a dataset tag.
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
   * Deletes a dataset tag.
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
   * Deletes the information about a specified version of a dataset. Version v1 cannot be deleted by using this operation. When you call the DeleteDataset operation to delete a dataset, it can be deleted at the same time.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersionWithOptions(DatasetId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatasetVersionResponse> {
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
   * Deletes the information about a specified version of a dataset. Version v1 cannot be deleted by using this operation. When you call the DeleteDataset operation to delete a dataset, it can be deleted at the same time.
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersion(DatasetId: string, VersionName: string): Promise<$_model.DeleteDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * Deletes tags for a dataset version.
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
   * Deletes tags for a dataset version.
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentResponse> {
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
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string): Promise<$_model.DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * Deletes an experiment tag.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabelWithOptions(ExperimentId: string, Key: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperimentLabelResponse> {
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
   * Deletes an experiment tag.
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabel(ExperimentId: string, Key: string): Promise<$_model.DeleteExperimentLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentLabelWithOptions(ExperimentId, Key, headers, runtime);
  }

  /**
   * Deletes a member from a workspace.
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
   * Deletes a member from a workspace.
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
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
   * @returns DeleteModelResponse
   */
  async deleteModel(ModelId: string): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * Deletes the labels of a model.
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
   * Deletes the labels of a model.
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelVersionResponse> {
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
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersion(ModelId: string, VersionName: string): Promise<$_model.DeleteModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * Delete a model version tag.
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
   * Delete a model version tag.
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
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunResponse
   */
  async deleteRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRunResponse> {
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
   * @returns DeleteRunResponse
   */
  async deleteRun(RunId: string): Promise<$_model.DeleteRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, headers, runtime);
  }

  /**
   * Deletes a tag that is added to a run.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabelWithOptions(RunId: string, Key: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRunLabelResponse> {
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
   * Deletes a tag that is added to a run.
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabel(RunId: string, Key: string): Promise<$_model.DeleteRunLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunLabelWithOptions(RunId, Key, headers, runtime);
  }

  /**
   * Deletes user configurations.
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
   * Deletes user configurations.
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
   * Deletes a workspace. After you delete a workspace, the associated resources are not automatically released. You must manually release the resources.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
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
   * Deletes a workspace. After you delete a workspace, the associated resources are not automatically released. You must manually release the resources.
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(WorkspaceId: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * Deletes a resource from a workspace. The resource is not deleted at the underlying layer.
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
   * Deletes a resource from a workspace. The resource is not deleted at the underlying layer.
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
   * Obtains the details of a code source.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeSourceResponse
   */
  async getCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCodeSourceResponse> {
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
   * Obtains the details of a code source.
   * @returns GetCodeSourceResponse
   */
  async getCodeSource(CodeSourceId: string): Promise<$_model.GetCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * Obtains a workspace configuration item.
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
   * Obtains a workspace configuration item.
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
   * Obtains the connection details.
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
   * Obtains the connection details.
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
   * Obtains a dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResponse> {
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
   * Obtains a dataset.
   * @returns GetDatasetResponse
   */
  async getDataset(DatasetId: string): Promise<$_model.GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Queries the metadata records of specific files in a dataset.
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
   * Queries the metadata records of specific files in a dataset.
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
   * Obtains metadata statistics of a dataset.
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
   * Obtains metadata statistics of a dataset.
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
   * Obtains a dataset job.
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
   * Obtains a dataset job.
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
   * Obtains a job configuration for a dataset.
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
   * Obtains a job configuration for a dataset.
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
   * Obtains the information about a specified version of a dataset.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersionWithOptions(DatasetId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetVersionResponse> {
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
   * Obtains the information about a specified version of a dataset.
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersion(DatasetId: string, VersionName: string): Promise<$_model.GetDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * Queries information about the default workspace.
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
   * Queries information about the default workspace.
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
   * Obtains an experiment.
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
   * Obtains an experiment.
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
   * Obtains the information about an image.
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
   * Obtains the information about an image.
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
   * Obtains a member in a workspace.
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
   * Obtains a member in a workspace.
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
   * Obtains the details of a specified model.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelResponse> {
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
   * Obtains the details of a specified model.
   * @returns GetModelResponse
   */
  async getModel(ModelId: string): Promise<$_model.GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * Queries a model version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelVersionResponse
   */
  async getModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelVersionResponse> {
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
   * Queries a model version.
   * @returns GetModelVersionResponse
   */
  async getModelVersion(ModelId: string, VersionName: string): Promise<$_model.GetModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * Obtains permissions on a workspace.
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
   * Obtains permissions on a workspace.
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
   * Queries the run information.
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
   * Queries the run information.
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
   * Queries the details about a workspace.
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
   * Queries the details about a workspace.
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
   * Lists code sources. Pagination, sorting, and filtering by condition are supported.
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
   * Lists code sources. Pagination, sorting, and filtering by condition are supported.
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
   * Obtains a list of workspace configurations.
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
   * Obtains a list of workspace configurations.
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
   * Lists connections.
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
   * Lists connections.
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
   * Queries a list of dataset files.
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
   * Queries a list of dataset files.
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
   * Queries the dataset job configurations at a time.
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
   * Queries the dataset job configurations at a time.
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
   * Lists jobs in a dataset.
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
   * Lists jobs in a dataset.
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
   * Lists dataset versions.
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
   * Lists dataset versions.
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
   * Lists experiments.
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
   * Lists experiments.
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
   * 列举特性
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
   * 列举特性
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
   * Lists all tags of an image.
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
   * Lists all tags of an image.
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
   * Obtains the members in a workspace.
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
   * Obtains the members in a workspace.
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
   * Queries a list of model versions.
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
   * Queries a list of model versions.
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
   * Queries a list of models.
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
   * Queries a list of models.
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
   * Lists the permissions that a user has in a workspace.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPermissionsResponse> {
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
   * Lists the permissions that a user has in a workspace.
   * @returns ListPermissionsResponse
   */
  async listPermissions(WorkspaceId: string): Promise<$_model.ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * 列举产品
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
   * 列举产品
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
   * Obtains the list of quotas.
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
   * Obtains the list of quotas.
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
   * Queries the resources that are associated with a workspace.
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
   * Queries the resources that are associated with a workspace.
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
   * Lists the metrics for a run.
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
   * Lists the metrics for a run.
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
   * Queries a list of runs.
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
   * Queries a list of runs.
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
   * Queries user information.
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
   * Queries user information.
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
   * Lists the users who do not belong to a workspace. These users can be added to the workspace as members.
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
   * Lists the users who do not belong to a workspace. These users can be added to the workspace as members.
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
   * Lists all workspaces in a region.
   * 
   * @remarks
   * You can use the option parameter to specify query options, so as to obtain different information about the workspaces.
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
   * Lists all workspaces in a region.
   * 
   * @remarks
   * You can use the option parameter to specify query options, so as to obtain different information about the workspaces.
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
   * Logs multiple metrics for a run at a time.
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
   * Logs multiple metrics for a run at a time.
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
   * Publishes a private code source to a workspace to make the code source publicly accessible.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishCodeSourceResponse> {
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
   * Publishes a private code source to a workspace to make the code source publicly accessible.
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSource(CodeSourceId: string): Promise<$_model.PublishCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * Publishes a private dataset in a workspace.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDatasetResponse
   */
  async publishDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishDatasetResponse> {
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
   * @returns PublishDatasetResponse
   */
  async publishDataset(DatasetId: string): Promise<$_model.PublishDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Publishes an image. After the image is published, the visibility of the image is changed from PRIVATE to PUBLIC.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishImageResponse
   */
  async publishImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishImageResponse> {
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
   * Publishes an image. After the image is published, the visibility of the image is changed from PRIVATE to PUBLIC.
   * @returns PublishImageResponse
   */
  async publishImage(ImageId: string): Promise<$_model.PublishImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * Removes an image.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveImageResponse> {
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
   * Removes an image.
   * @returns RemoveImageResponse
   */
  async removeImage(ImageId: string): Promise<$_model.RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * Removes an image tag.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabelsWithOptions(ImageId: string, LabelKey: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveImageLabelsResponse> {
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
   * Removes an image tag.
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabels(ImageId: string, LabelKey: string): Promise<$_model.RemoveImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, headers, runtime);
  }

  /**
   * Removes a member role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveMemberRoleResponse> {
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
   * Removes a member role.
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<$_model.RemoveMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * Updates a experiment tag.
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
   * Updates a experiment tag.
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
   * Updates the user configurations.
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
   * Updates the user configurations.
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
   * Stops a dataset job.
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
   * Stops a dataset job.
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
   * Updates a code build.
   * 
   * @param request - UpdateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCodeSourceResponse
   */
  async updateCodeSourceWithOptions(CodeSourceId: string, request: $_model.UpdateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCodeSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Updates a code build.
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
   * Updates or adds a workspace configuration item.
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
   * Updates or adds a workspace configuration item.
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
   * Updates or adds workspace configurations in batches.
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
   * Updates or adds workspace configurations in batches.
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
   * Updates a connection.
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
   * Updates a connection.
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
   * Updates the name, description, and other information about a dataset.
   * 
   * @param request - UpdateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(DatasetId: string, request: $_model.UpdateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
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
   * Updates the name, description, and other information about a dataset.
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
   * Updates the metadata records of multiple files in a dataset at a time.
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
   * Updates the metadata records of multiple files in a dataset at a time.
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
   * Updates a job configuration for a dataset.
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
   * Updates a job configuration for a dataset.
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
   * Updates the information about a specified version of a dataset.
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
   * Updates the information about a specified version of a dataset.
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
   * Specifies a workspace as the default workspace.
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
   * Specifies a workspace as the default workspace.
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
   * Updates the basic configuration information about a model.
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
   * Updates the basic configuration information about a model.
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
   * Updates the run information.
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
   * Updates the run information.
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
   * Updates the resources of a workspace.
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
   * Updates the resources of a workspace.
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResource(WorkspaceId: string, request: $_model.UpdateWorkspaceResourceRequest): Promise<$_model.UpdateWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

}
