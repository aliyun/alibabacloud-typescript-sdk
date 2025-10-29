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
      'cn-qingdao': "adb.aliyuncs.com",
      'cn-beijing': "adb.aliyuncs.com",
      'cn-hangzhou': "adb.aliyuncs.com",
      'cn-shanghai': "adb.aliyuncs.com",
      'cn-shenzhen': "adb.aliyuncs.com",
      'cn-hongkong': "adb.aliyuncs.com",
      'ap-southeast-1': "adb.aliyuncs.com",
      'us-west-1': "adb.aliyuncs.com",
      'us-east-1': "adb.aliyuncs.com",
      'cn-hangzhou-finance': "adb.aliyuncs.com",
      'cn-north-2-gov-1': "adb.aliyuncs.com",
      'ap-northeast-2-pop': "adb.ap-northeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "adb.aliyuncs.com",
      'cn-beijing-finance-pop': "adb.aliyuncs.com",
      'cn-beijing-gov-1': "adb.aliyuncs.com",
      'cn-beijing-nu16-b01': "adb.aliyuncs.com",
      'cn-edge-1': "adb.aliyuncs.com",
      'cn-fujian': "adb.aliyuncs.com",
      'cn-haidian-cm12-c01': "adb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "adb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "adb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "adb.aliyuncs.com",
      'cn-hangzhou-test-306': "adb.aliyuncs.com",
      'cn-hongkong-finance-pop': "adb.aliyuncs.com",
      'cn-qingdao-nebula': "adb.aliyuncs.com",
      'cn-shanghai-et15-b01': "adb.aliyuncs.com",
      'cn-shanghai-et2-b01': "adb.aliyuncs.com",
      'cn-shanghai-finance-1': "adb.aliyuncs.com",
      'cn-shanghai-inner': "adb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "adb.aliyuncs.com",
      'cn-shenzhen-finance-1': "adb.aliyuncs.com",
      'cn-shenzhen-inner': "adb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "adb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "adb.aliyuncs.com",
      'cn-wuhan': "adb.aliyuncs.com",
      'cn-yushanfang': "adb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "adb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "adb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "adb.aliyuncs.com",
      'eu-west-1-oxs': "adb.ap-northeast-1.aliyuncs.com",
      'me-east-1': "adb.ap-northeast-1.aliyuncs.com",
      'rus-west-1-pop': "adb.ap-northeast-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("adb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Applies for a public endpoint for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnectionWithOptions(request: $_model.AllocateClusterPublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AllocateClusterPublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AllocateClusterPublicConnection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AllocateClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.AllocateClusterPublicConnectionResponse({}));
  }

  /**
   * Applies for a public endpoint for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - AllocateClusterPublicConnectionRequest
   * @returns AllocateClusterPublicConnectionResponse
   */
  async allocateClusterPublicConnection(request: $_model.AllocateClusterPublicConnectionRequest): Promise<$_model.AllocateClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.allocateClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * ApplyAdviceById
   * 
   * @param request - ApplyAdviceByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceByIdWithOptions(request: $_model.ApplyAdviceByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyAdviceByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceId)) {
      query["AdviceId"] = request.adviceId;
    }

    if (!$dara.isNull(request.applyType)) {
      query["ApplyType"] = request.applyType;
    }

    if (!$dara.isNull(request.buildImmediately)) {
      query["BuildImmediately"] = request.buildImmediately;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyAdviceById",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyAdviceByIdResponse>(await this.callApi(params, req, runtime), new $_model.ApplyAdviceByIdResponse({}));
  }

  /**
   * ApplyAdviceById
   * 
   * @param request - ApplyAdviceByIdRequest
   * @returns ApplyAdviceByIdResponse
   */
  async applyAdviceById(request: $_model.ApplyAdviceByIdRequest): Promise<$_model.ApplyAdviceByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.applyAdviceByIdWithOptions(request, runtime);
  }

  /**
   * 打通用户ENI
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - AttachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachUserENIResponse
   */
  async attachUserENIWithOptions(request: $_model.AttachUserENIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AttachUserENIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachUserENI",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AttachUserENIResponse>(await this.callApi(params, req, runtime), new $_model.AttachUserENIResponse({}));
  }

  /**
   * 打通用户ENI
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - AttachUserENIRequest
   * @returns AttachUserENIResponse
   */
  async attachUserENI(request: $_model.AttachUserENIRequest): Promise<$_model.AttachUserENIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.attachUserENIWithOptions(request, runtime);
  }

  /**
   * BatchApplyAdviceByIdList
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdListWithOptions(request: $_model.BatchApplyAdviceByIdListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchApplyAdviceByIdListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceIdList)) {
      query["AdviceIdList"] = request.adviceIdList;
    }

    if (!$dara.isNull(request.applyType)) {
      query["ApplyType"] = request.applyType;
    }

    if (!$dara.isNull(request.buildImmediately)) {
      query["BuildImmediately"] = request.buildImmediately;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchApplyAdviceByIdList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchApplyAdviceByIdListResponse>(await this.callApi(params, req, runtime), new $_model.BatchApplyAdviceByIdListResponse({}));
  }

  /**
   * BatchApplyAdviceByIdList
   * 
   * @param request - BatchApplyAdviceByIdListRequest
   * @returns BatchApplyAdviceByIdListResponse
   */
  async batchApplyAdviceByIdList(request: $_model.BatchApplyAdviceByIdListRequest): Promise<$_model.BatchApplyAdviceByIdListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchApplyAdviceByIdListWithOptions(request, runtime);
  }

  /**
   * Associates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster with a database account.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUserWithOptions(request: $_model.BindDBResourceGroupWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDBResourceGroupWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDBResourceGroupWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new $_model.BindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Associates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster with a database account.
   * 
   * @remarks
   * ## Precautions
   * *   This operation is applicable only for elastic clusters of 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourceGroupWithUserRequest
   * @returns BindDBResourceGroupWithUserResponse
   */
  async bindDBResourceGroupWithUser(request: $_model.BindDBResourceGroupWithUserRequest): Promise<$_model.BindDBResourceGroupWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * 绑定资源组用户
   * 
   * @remarks
   *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourcePoolWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BindDBResourcePoolWithUserResponse
   */
  async bindDBResourcePoolWithUserWithOptions(request: $_model.BindDBResourcePoolWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BindDBResourcePoolWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.poolUser)) {
      query["PoolUser"] = request.poolUser;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BindDBResourcePoolWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BindDBResourcePoolWithUserResponse>(await this.callApi(params, req, runtime), new $_model.BindDBResourcePoolWithUserResponse({}));
  }

  /**
   * 绑定资源组用户
   * 
   * @remarks
   *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be associated with a database account.
   * 
   * @param request - BindDBResourcePoolWithUserRequest
   * @returns BindDBResourcePoolWithUserResponse
   */
  async bindDBResourcePoolWithUser(request: $_model.BindDBResourcePoolWithUserRequest): Promise<$_model.BindDBResourcePoolWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  /**
   * Cancels O\\&M events.
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasksWithOptions(request: $_model.CancelActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelActiveOperationTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelActiveOperationTasks",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new $_model.CancelActiveOperationTasksResponse({}));
  }

  /**
   * Cancels O\\&M events.
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Checks whether a service-linked role is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRoleWithOptions(request: $_model.CheckServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckServiceLinkedRole",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CheckServiceLinkedRoleResponse({}));
  }

  /**
   * Checks whether a service-linked role is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param tmpReq - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(tmpReq: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAccountShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAccount",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAccountResponse>(await this.callApi(params, req, runtime), new $_model.CreateAccountResponse({}));
  }

  /**
   * Creates a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Creates an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @remarks
   * After you create a cluster, you are billed for the cluster specifications that you select. For more information about the billable items and pricing for Data Warehouse Edition  clusters, see [Billable items of Data Warehouse Edition](https://help.aliyun.com/document_detail/303131.html) and [Pricing for Data Warehouse Edition](https://help.aliyun.com/document_detail/135229.html).
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: $_model.CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupSetID)) {
      query["BackupSetID"] = request.backupSetID;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterCategory)) {
      query["DBClusterCategory"] = request.DBClusterCategory;
    }

    if (!$dara.isNull(request.DBClusterClass)) {
      query["DBClusterClass"] = request.DBClusterClass;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterNetworkType)) {
      query["DBClusterNetworkType"] = request.DBClusterNetworkType;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!$dara.isNull(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!$dara.isNull(request.diskEncryption)) {
      query["DiskEncryption"] = request.diskEncryption;
    }

    if (!$dara.isNull(request.elasticIOResource)) {
      query["ElasticIOResource"] = request.elasticIOResource;
    }

    if (!$dara.isNull(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!$dara.isNull(request.executorCount)) {
      query["ExecutorCount"] = request.executorCount;
    }

    if (!$dara.isNull(request.kmsId)) {
      query["KmsId"] = request.kmsId;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.restoreType)) {
      query["RestoreType"] = request.restoreType;
    }

    if (!$dara.isNull(request.sourceDBInstanceName)) {
      query["SourceDBInstanceName"] = request.sourceDBInstanceName;
    }

    if (!$dara.isNull(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBClusterResponse({}));
  }

  /**
   * Creates an AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * @remarks
   * After you create a cluster, you are billed for the cluster specifications that you select. For more information about the billable items and pricing for Data Warehouse Edition  clusters, see [Billable items of Data Warehouse Edition](https://help.aliyun.com/document_detail/303131.html) and [Pricing for Data Warehouse Edition](https://help.aliyun.com/document_detail/135229.html).
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: $_model.CreateDBClusterRequest): Promise<$_model.CreateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more.
   * 
   * @param tmpReq - CreateDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroupWithOptions(tmpReq: $_model.CreateDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.CreateDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.engineParams)) {
      request.engineParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.engineParams, "EngineParams", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.engineParamsShrink)) {
      query["EngineParams"] = request.engineParamsShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!$dara.isNull(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!$dara.isNull(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!$dara.isNull(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!$dara.isNull(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResourceGroupResponse({}));
  }

  /**
   * Creates a resource group for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more.
   * 
   * @param request - CreateDBResourceGroupRequest
   * @returns CreateDBResourceGroupResponse
   */
  async createDBResourceGroup(request: $_model.CreateDBResourceGroupRequest): Promise<$_model.CreateDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * 创建资源组
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBResourcePoolResponse
   */
  async createDBResourcePoolWithOptions(request: $_model.CreateDBResourcePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBResourcePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBResourcePoolResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBResourcePoolResponse({}));
  }

  /**
   * 创建资源组
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - CreateDBResourcePoolRequest
   * @returns CreateDBResourcePoolResponse
   */
  async createDBResourcePool(request: $_model.CreateDBResourcePoolRequest): Promise<$_model.CreateDBResourcePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Creates a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - CreateElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlanWithOptions(request: $_model.CreateElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!$dara.isNull(request.elasticPlanEndDay)) {
      query["ElasticPlanEndDay"] = request.elasticPlanEndDay;
    }

    if (!$dara.isNull(request.elasticPlanMonthlyRepeat)) {
      query["ElasticPlanMonthlyRepeat"] = request.elasticPlanMonthlyRepeat;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.elasticPlanNodeNum)) {
      query["ElasticPlanNodeNum"] = request.elasticPlanNodeNum;
    }

    if (!$dara.isNull(request.elasticPlanStartDay)) {
      query["ElasticPlanStartDay"] = request.elasticPlanStartDay;
    }

    if (!$dara.isNull(request.elasticPlanTimeEnd)) {
      query["ElasticPlanTimeEnd"] = request.elasticPlanTimeEnd;
    }

    if (!$dara.isNull(request.elasticPlanTimeStart)) {
      query["ElasticPlanTimeStart"] = request.elasticPlanTimeStart;
    }

    if (!$dara.isNull(request.elasticPlanType)) {
      query["ElasticPlanType"] = request.elasticPlanType;
    }

    if (!$dara.isNull(request.elasticPlanWeeklyRepeat)) {
      query["ElasticPlanWeeklyRepeat"] = request.elasticPlanWeeklyRepeat;
    }

    if (!$dara.isNull(request.elasticPlanWorkerSpec)) {
      query["ElasticPlanWorkerSpec"] = request.elasticPlanWorkerSpec;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateElasticPlanResponse({}));
  }

  /**
   * Creates a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - CreateElasticPlanRequest
   * @returns CreateElasticPlanResponse
   */
  async createElasticPlan(request: $_model.CreateElasticPlanRequest): Promise<$_model.CreateElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createElasticPlanWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRoleWithOptions(request: $_model.CreateServiceLinkedRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateServiceLinkedRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceLinkedRole",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateServiceLinkedRoleResponse>(await this.callApi(params, req, runtime), new $_model.CreateServiceLinkedRoleResponse({}));
  }

  /**
   * Creates a service-linked role.
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 删除高权限帐号
   * 
   * @param request - DeleteAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAccountResponse
   */
  async deleteAccountWithOptions(request: $_model.DeleteAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAccount",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAccountResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAccountResponse({}));
  }

  /**
   * 删除高权限帐号
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupsResponse
   */
  async deleteBackupsWithOptions(request: $_model.DeleteBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBackups",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupsResponse({}));
  }

  /**
   * Manually deletes backup sets.
   * 
   * @remarks
   *   Deleting backup sets is an asynchronous operation and may require 10 to 20 minutes to complete.
   * *   You can delete up to 100 backup sets at a time. If you want to delete more than 100 backup sets, call this operation twice.
   * *   To ensure data security, the system forcibly retains one valid backup set. If you want to delete the last backup set, the system prohibits your operation.
   * 
   * @param request - DeleteBackupsRequest
   * @returns DeleteBackupsResponse
   */
  async deleteBackups(request: $_model.DeleteBackupsRequest): Promise<$_model.DeleteBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupsWithOptions(request, runtime);
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   You cannot delete subscription clusters by calling API operations. After expiration, subscription clusters are automatically released. If you no longer need a cluster, you can unsubscribe from the cluster in the Expenses and Costs console. For information about cluster refunds, see [Refund policy](https://help.aliyun.com/document_detail/471477.html).
   * *   After you delete a cluster, resources of the cluster are immediately released, and data of the cluster is no longer retained and cannot be restored. Proceed with caution.
   * *   The cluster that you want to delete must be in the Running state.
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: $_model.DeleteDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBClusterResponse({}));
  }

  /**
   * Deletes an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   *   You cannot delete subscription clusters by calling API operations. After expiration, subscription clusters are automatically released. If you no longer need a cluster, you can unsubscribe from the cluster in the Expenses and Costs console. For information about cluster refunds, see [Refund policy](https://help.aliyun.com/document_detail/471477.html).
   * *   After you delete a cluster, resources of the cluster are immediately released, and data of the cluster is no longer retained and cannot be restored. Proceed with caution.
   * *   The cluster that you want to delete must be in the Running state.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ### Precautions
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroupWithOptions(request: $_model.DeleteDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResourceGroupResponse({}));
  }

  /**
   * Deletes a resource group from an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * ### Precautions
   * *   You can call this operation only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourceGroupRequest
   * @returns DeleteDBResourceGroupResponse
   */
  async deleteDBResourceGroup(request: $_model.DeleteDBResourceGroupRequest): Promise<$_model.DeleteDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * 删除资源组
   * 
   * @remarks
   * *Precautions**
   * *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBResourcePoolResponse
   */
  async deleteDBResourcePoolWithOptions(request: $_model.DeleteDBResourcePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBResourcePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBResourcePoolResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBResourcePoolResponse({}));
  }

  /**
   * 删除资源组
   * 
   * @remarks
   * *Precautions**
   * *   This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * *   The default resource group USER_DEFAULT cannot be deleted.
   * 
   * @param request - DeleteDBResourcePoolRequest
   * @returns DeleteDBResourcePoolResponse
   */
  async deleteDBResourcePool(request: $_model.DeleteDBResourcePoolRequest): Promise<$_model.DeleteDBResourcePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Deletes a scheduled scaling plan. You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DeleteElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlanWithOptions(request: $_model.DeleteElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteElasticPlanResponse({}));
  }

  /**
   * Deletes a scheduled scaling plan. You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DeleteElasticPlanRequest
   * @returns DeleteElasticPlanResponse
   */
  async deleteElasticPlan(request: $_model.DeleteElasticPlanRequest): Promise<$_model.DeleteElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteElasticPlanWithOptions(request, runtime);
  }

  /**
   * Queries abnormal SQL patterns within a time range.
   * 
   * @param request - DescribeAbnormalPatternDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAbnormalPatternDetectionResponse
   */
  async describeAbnormalPatternDetectionWithOptions(request: $_model.DescribeAbnormalPatternDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAbnormalPatternDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAbnormalPatternDetection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAbnormalPatternDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAbnormalPatternDetectionResponse({}));
  }

  /**
   * Queries abnormal SQL patterns within a time range.
   * 
   * @param request - DescribeAbnormalPatternDetectionRequest
   * @returns DescribeAbnormalPatternDetectionResponse
   */
  async describeAbnormalPatternDetection(request: $_model.DescribeAbnormalPatternDetectionRequest): Promise<$_model.DescribeAbnormalPatternDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAbnormalPatternDetectionWithOptions(request, runtime);
  }

  /**
   * Queries a list of database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAccountsResponse
   */
  async describeAccountsWithOptions(request: $_model.DescribeAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAccountsResponse({}));
  }

  /**
   * Queries a list of database accounts for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the configuration information about O\\&M tasks.
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConfWithOptions(request: $_model.DescribeActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationMaintainConf",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationMaintainConfResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationMaintainConfResponse({}));
  }

  /**
   * Queries the configuration information about O\\&M tasks.
   * 
   * @param request - DescribeActiveOperationMaintainConfRequest
   * @returns DescribeActiveOperationMaintainConfResponse
   */
  async describeActiveOperationMaintainConf(request: $_model.DescribeActiveOperationMaintainConfRequest): Promise<$_model.DescribeActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationMaintainConfWithOptions(request, runtime);
  }

  /**
   * Queries the information about O\\&M tasks.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasksWithOptions(request: $_model.DescribeActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActiveOperationTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowCancel)) {
      query["AllowCancel"] = request.allowCancel;
    }

    if (!$dara.isNull(request.allowChange)) {
      query["AllowChange"] = request.allowChange;
    }

    if (!$dara.isNull(request.changeLevel)) {
      query["ChangeLevel"] = request.changeLevel;
    }

    if (!$dara.isNull(request.dbType)) {
      query["DbType"] = request.dbType;
    }

    if (!$dara.isNull(request.insName)) {
      query["InsName"] = request.insName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActiveOperationTasks",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActiveOperationTasksResponse({}));
  }

  /**
   * Queries the information about O\\&M tasks.
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries whether the suggestion feature is enabled for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabledWithOptions(request: $_model.DescribeAdviceServiceEnabledRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAdviceServiceEnabledResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAdviceServiceEnabled",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAdviceServiceEnabledResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAdviceServiceEnabledResponse({}));
  }

  /**
   * Queries whether the suggestion feature is enabled for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAdviceServiceEnabledRequest
   * @returns DescribeAdviceServiceEnabledResponse
   */
  async describeAdviceServiceEnabled(request: $_model.DescribeAdviceServiceEnabledRequest): Promise<$_model.DescribeAdviceServiceEnabledResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAdviceServiceEnabledWithOptions(request, runtime);
  }

  /**
   * Queries the information about an account or the list of accounts of a specific database within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAllAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllAccountsResponse
   */
  async describeAllAccountsWithOptions(request: $_model.DescribeAllAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllAccounts",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllAccountsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllAccountsResponse({}));
  }

  /**
   * Queries the information about an account or the list of accounts of a specific database within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAllAccountsRequest
   * @returns DescribeAllAccountsResponse
   */
  async describeAllAccounts(request: $_model.DescribeAllAccountsRequest): Promise<$_model.DescribeAllAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllAccountsWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases, tables, and columns in a cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSourceWithOptions(request: $_model.DescribeAllDataSourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAllDataSourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAllDataSource",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAllDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAllDataSourceResponse({}));
  }

  /**
   * Queries a list of databases, tables, and columns in a cluster.
   * 
   * @param request - DescribeAllDataSourceRequest
   * @returns DescribeAllDataSourceResponse
   */
  async describeAllDataSource(request: $_model.DescribeAllDataSourceRequest): Promise<$_model.DescribeAllDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAllDataSourceWithOptions(request, runtime);
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvicesWithOptions(request: $_model.DescribeAppliedAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAppliedAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAppliedAdvices",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAppliedAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAppliedAdvicesResponse({}));
  }

  /**
   * Queries the applied optimization suggestions for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAppliedAdvicesRequest
   * @returns DescribeAppliedAdvicesResponse
   */
  async describeAppliedAdvices(request: $_model.DescribeAppliedAdvicesRequest): Promise<$_model.DescribeAppliedAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAppliedAdvicesWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfigWithOptions(request: $_model.DescribeAuditLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogConfigResponse({}));
  }

  /**
   * Queries the SQL audit settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAuditLogConfigRequest
   * @returns DescribeAuditLogConfigResponse
   */
  async describeAuditLogConfig(request: $_model.DescribeAuditLogConfigRequest): Promise<$_model.DescribeAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Before you call the DescribeAuditLogRecords operation to query the SQL audit logs of an AnalyticDB for MySQL cluster, you must enable SQL audit for the cluster. You can call the [DescribeAuditLogConfig](https://help.aliyun.com/document_detail/190628.html) operation to query the status of SQL audit. If SQL audit is disabled, you can call the [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/190629.html) operation to enable SQL audit.
   * SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecordsWithOptions(request: $_model.DescribeAuditLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAuditLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.hostAddress)) {
      query["HostAddress"] = request.hostAddress;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryKeyword)) {
      query["QueryKeyword"] = request.queryKeyword;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sqlType)) {
      query["SqlType"] = request.sqlType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.succeed)) {
      query["Succeed"] = request.succeed;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAuditLogRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAuditLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAuditLogRecordsResponse({}));
  }

  /**
   * Queries the SQL audit logs of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Before you call the DescribeAuditLogRecords operation to query the SQL audit logs of an AnalyticDB for MySQL cluster, you must enable SQL audit for the cluster. You can call the [DescribeAuditLogConfig](https://help.aliyun.com/document_detail/190628.html) operation to query the status of SQL audit. If SQL audit is disabled, you can call the [ModifyAuditLogConfig](https://help.aliyun.com/document_detail/190629.html) operation to enable SQL audit.
   * SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried. The following operations are not recorded in SQL audit logs: **INSERT INTO VALUES**, **REPLACE INTO VALUES**, and **UPSERT INTO VALUES**.
   * 
   * @param request - DescribeAuditLogRecordsRequest
   * @returns DescribeAuditLogRecordsResponse
   */
  async describeAuditLogRecords(request: $_model.DescribeAuditLogRecordsRequest): Promise<$_model.DescribeAuditLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAuditLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttributeWithOptions(request: $_model.DescribeAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAutoRenewAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAutoRenewAttributeResponse({}));
  }

  /**
   * Queries the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeAutoRenewAttributeRequest
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttribute(request: $_model.DescribeAutoRenewAttributeRequest): Promise<$_model.DescribeAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the available suggestions for cluster optimization.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvicesWithOptions(request: $_model.DescribeAvailableAdvicesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableAdvicesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.adviceDate)) {
      query["AdviceDate"] = request.adviceDate;
    }

    if (!$dara.isNull(request.adviceType)) {
      query["AdviceType"] = request.adviceType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.schemaTableName)) {
      query["SchemaTableName"] = request.schemaTableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableAdvices",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableAdvicesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableAdvicesResponse({}));
  }

  /**
   * Queries the available suggestions for cluster optimization.
   * 
   * @param request - DescribeAvailableAdvicesRequest
   * @returns DescribeAvailableAdvicesResponse
   */
  async describeAvailableAdvices(request: $_model.DescribeAvailableAdvicesRequest): Promise<$_model.DescribeAvailableAdvicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableAdvicesWithOptions(request, runtime);
  }

  /**
   * Queries the resources of clusters within zones of a region.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResourceWithOptions(request: $_model.DescribeAvailableResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAvailableResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAvailableResource",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAvailableResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAvailableResourceResponse({}));
  }

  /**
   * Queries the resources of clusters within zones of a region.
   * 
   * @param request - DescribeAvailableResourceRequest
   * @returns DescribeAvailableResourceResponse
   */
  async describeAvailableResource(request: $_model.DescribeAvailableResourceRequest): Promise<$_model.DescribeAvailableResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAvailableResourceWithOptions(request, runtime);
  }

  /**
   * 查看备份策略
   * 
   * @param request - DescribeBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicyWithOptions(request: $_model.DescribeBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackupPolicy",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupPolicyResponse({}));
  }

  /**
   * 查看备份策略
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries a list of backup sets for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupsResponse
   */
  async describeBackupsWithOptions(request: $_model.DescribeBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.crossRole)) {
      query["CrossRole"] = request.crossRole;
    }

    if (!$dara.isNull(request.crossUid)) {
      query["CrossUid"] = request.crossUid;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBackups",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupsResponse({}));
  }

  /**
   * Queries a list of backup sets for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries the bad SQL statements that affect cluster stability within a time range.
   * 
   * @param request - DescribeBadSqlDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBadSqlDetectionResponse
   */
  async describeBadSqlDetectionWithOptions(request: $_model.DescribeBadSqlDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBadSqlDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBadSqlDetection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBadSqlDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBadSqlDetectionResponse({}));
  }

  /**
   * Queries the bad SQL statements that affect cluster stability within a time range.
   * 
   * @param request - DescribeBadSqlDetectionRequest
   * @returns DescribeBadSqlDetectionResponse
   */
  async describeBadSqlDetection(request: $_model.DescribeBadSqlDetectionRequest): Promise<$_model.DescribeBadSqlDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBadSqlDetectionWithOptions(request, runtime);
  }

  /**
   * Queries a list of columns in a table within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeColumnsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeColumnsResponse
   */
  async describeColumnsWithOptions(request: $_model.DescribeColumnsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeColumnsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeColumns",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeColumnsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeColumnsResponse({}));
  }

  /**
   * Queries a list of columns in a table within an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeColumnsRequest
   * @returns DescribeColumnsResponse
   */
  async describeColumns(request: $_model.DescribeColumnsRequest): Promise<$_model.DescribeColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeColumnsWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of computing resources for AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @param request - DescribeComputeResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComputeResourceResponse
   */
  async describeComputeResourceWithOptions(request: $_model.DescribeComputeResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComputeResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.migrate)) {
      query["Migrate"] = request.migrate;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComputeResource",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComputeResourceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComputeResourceResponse({}));
  }

  /**
   * Queries the specifications of computing resources for AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @param request - DescribeComputeResourceRequest
   * @returns DescribeComputeResourceResponse
   */
  async describeComputeResource(request: $_model.DescribeComputeResourceRequest): Promise<$_model.DescribeComputeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeComputeResourceWithOptions(request, runtime);
  }

  /**
   * Queries the current number of connections to an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeConnectionCountRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConnectionCountRecordsResponse
   */
  async describeConnectionCountRecordsWithOptions(request: $_model.DescribeConnectionCountRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConnectionCountRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConnectionCountRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConnectionCountRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConnectionCountRecordsResponse({}));
  }

  /**
   * Queries the current number of connections to an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeConnectionCountRecordsRequest
   * @returns DescribeConnectionCountRecordsResponse
   */
  async describeConnectionCountRecords(request: $_model.DescribeConnectionCountRecordsRequest): Promise<$_model.DescribeConnectionCountRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeConnectionCountRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the access layer.
   * 
   * @param request - DescribeControllerDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeControllerDetectionResponse
   */
  async describeControllerDetectionWithOptions(request: $_model.DescribeControllerDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeControllerDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeControllerDetection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeControllerDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeControllerDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the access layer.
   * 
   * @param request - DescribeControllerDetectionRequest
   * @returns DescribeControllerDetectionResponse
   */
  async describeControllerDetection(request: $_model.DescribeControllerDetectionRequest): Promise<$_model.DescribeControllerDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeControllerDetectionWithOptions(request, runtime);
  }

  /**
   * Queries a list of IP address whitelists for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteListWithOptions(request: $_model.DescribeDBClusterAccessWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAccessWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterAccessWhiteList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAccessWhiteListResponse({}));
  }

  /**
   * Queries a list of IP address whitelists for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAccessWhiteListRequest
   * @returns DescribeDBClusterAccessWhiteListResponse
   */
  async describeDBClusterAccessWhiteList(request: $_model.DescribeDBClusterAccessWhiteListRequest): Promise<$_model.DescribeDBClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttributeWithOptions(request: $_model.DescribeDBClusterAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAttributeResponse({}));
  }

  /**
   * Queries the information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: $_model.DescribeDBClusterAttributeRequest): Promise<$_model.DescribeDBClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * 查询集群健康检查状态
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatusWithOptions(request: $_model.DescribeDBClusterHealthStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterHealthStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterHealthStatus",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterHealthStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterHealthStatusResponse({}));
  }

  /**
   * 查询集群健康检查状态
   * 
   * @param request - DescribeDBClusterHealthStatusRequest
   * @returns DescribeDBClusterHealthStatusResponse
   */
  async describeDBClusterHealthStatus(request: $_model.DescribeDBClusterHealthStatusRequest): Promise<$_model.DescribeDBClusterHealthStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterNetInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterNetInfoResponse
   */
  async describeDBClusterNetInfoWithOptions(request: $_model.DescribeDBClusterNetInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterNetInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterNetInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterNetInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterNetInfoResponse({}));
  }

  /**
   * Queries the network information about an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterNetInfoRequest
   * @returns DescribeDBClusterNetInfoResponse
   */
  async describeDBClusterNetInfo(request: $_model.DescribeDBClusterNetInfoRequest): Promise<$_model.DescribeDBClusterNetInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterNetInfoWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on its performance metrics. The data is collected every 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformanceWithOptions(request: $_model.DescribeDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterPerformanceResponse({}));
  }

  /**
   * Queries the performance data of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * You can call this operation to query the performance data of a cluster over a time range based on its performance metrics. The data is collected every 30 seconds. This operation allows you to query information about slow queries, such as the SQL query duration, number of scanned rows, and amount of scanned data.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about resource groups within an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * > You can also view the monitoring information about resource groups within an AnalyticDB for MySQL cluster in elastic mode for Cluster Edition in the form of graphs in the console. For more information, see [View monitoring information](https://help.aliyun.com/document_detail/188721.html).
   * 
   * @param request - DescribeDBClusterResourcePoolPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterResourcePoolPerformanceResponse
   */
  async describeDBClusterResourcePoolPerformanceWithOptions(request: $_model.DescribeDBClusterResourcePoolPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterResourcePoolPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePools)) {
      query["ResourcePools"] = request.resourcePools;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterResourcePoolPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterResourcePoolPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterResourcePoolPerformanceResponse({}));
  }

  /**
   * Queries the monitoring information about resource groups within an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * > You can also view the monitoring information about resource groups within an AnalyticDB for MySQL cluster in elastic mode for Cluster Edition in the form of graphs in the console. For more information, see [View monitoring information](https://help.aliyun.com/document_detail/188721.html).
   * 
   * @param request - DescribeDBClusterResourcePoolPerformanceRequest
   * @returns DescribeDBClusterResourcePoolPerformanceResponse
   */
  async describeDBClusterResourcePoolPerformance(request: $_model.DescribeDBClusterResourcePoolPerformanceRequest): Promise<$_model.DescribeDBClusterResourcePoolPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterResourcePoolPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeDBClusterSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSLWithOptions(request: $_model.DescribeDBClusterSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterSSL",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterSSLResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterSSLResponse({}));
  }

  /**
   * Queries the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeDBClusterSSLRequest
   * @returns DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSL(request: $_model.DescribeDBClusterSSLRequest): Promise<$_model.DescribeDBClusterSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * Queries the number of shards in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterShardNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterShardNumberResponse
   */
  async describeDBClusterShardNumberWithOptions(request: $_model.DescribeDBClusterShardNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterShardNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterShardNumber",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterShardNumberResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterShardNumberResponse({}));
  }

  /**
   * Queries the number of shards in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterShardNumberRequest
   * @returns DescribeDBClusterShardNumberResponse
   */
  async describeDBClusterShardNumber(request: $_model.DescribeDBClusterShardNumberRequest): Promise<$_model.DescribeDBClusterShardNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterShardNumberWithOptions(request, runtime);
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummaryWithOptions(request: $_model.DescribeDBClusterSpaceSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterSpaceSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterSpaceSummary",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterSpaceSummaryResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterSpaceSummaryResponse({}));
  }

  /**
   * Queries the storage overview information of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster, such as the total data size, hot data size, cold data size, and data growth.
   * 
   * @param request - DescribeDBClusterSpaceSummaryRequest
   * @returns DescribeDBClusterSpaceSummaryResponse
   */
  async describeDBClusterSpaceSummary(request: $_model.DescribeDBClusterSpaceSummaryRequest): Promise<$_model.DescribeDBClusterSpaceSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterSpaceSummaryWithOptions(request, runtime);
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatusWithOptions(request: $_model.DescribeDBClusterStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterStatus",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterStatusResponse({}));
  }

  /**
   * Queries the status of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * @param request - DescribeDBClusterStatusRequest
   * @returns DescribeDBClusterStatusResponse
   */
  async describeDBClusterStatus(request: $_model.DescribeDBClusterStatusRequest): Promise<$_model.DescribeDBClusterStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterStatusWithOptions(request, runtime);
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters within a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersResponse
   */
  async describeDBClustersWithOptions(request: $_model.DescribeDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!$dara.isNull(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusters",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClustersResponse({}));
  }

  /**
   * Queries a list of AnalyticDB for MySQL clusters within a region.
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: $_model.DescribeDBClustersRequest): Promise<$_model.DescribeDBClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries the information about a resource group for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroupWithOptions(request: $_model.DescribeDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBResourceGroupResponse({}));
  }

  /**
   * Queries the information about a resource group for an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more.
   * 
   * @param request - DescribeDBResourceGroupRequest
   * @returns DescribeDBResourceGroupResponse
   */
  async describeDBResourceGroup(request: $_model.DescribeDBResourceGroupRequest): Promise<$_model.DescribeDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * 查询资源组详情
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - DescribeDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBResourcePoolResponse
   */
  async describeDBResourcePoolWithOptions(request: $_model.DescribeDBResourcePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBResourcePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBResourcePoolResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBResourcePoolResponse({}));
  }

  /**
   * 查询资源组详情
   * 
   * @remarks
   * This operation is applicable only for elastic clusters of 32 cores or more.
   * 
   * @param request - DescribeDBResourcePoolRequest
   * @returns DescribeDBResourcePoolResponse
   */
  async describeDBResourcePool(request: $_model.DescribeDBResourcePoolRequest): Promise<$_model.DescribeDBResourcePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Queries the deduplicated statistics of SQL statements that meet a condition of the resource group, database, username, and source IP address in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensionsWithOptions(request: $_model.DescribeDiagnosisDimensionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisDimensions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisDimensionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisDimensionsResponse({}));
  }

  /**
   * Queries the deduplicated statistics of SQL statements that meet a condition of the resource group, database, username, and source IP address in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisDimensionsRequest
   * @returns DescribeDiagnosisDimensionsResponse
   */
  async describeDiagnosisDimensions(request: $_model.DescribeDiagnosisDimensionsRequest): Promise<$_model.DescribeDiagnosisDimensionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisDimensionsWithOptions(request, runtime);
  }

  /**
   * Queries the monitoring information about queries within a time range.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformanceWithOptions(request: $_model.DescribeDiagnosisMonitorPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisMonitorPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisMonitorPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisMonitorPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisMonitorPerformanceResponse({}));
  }

  /**
   * Queries the monitoring information about queries within a time range.
   * 
   * @param request - DescribeDiagnosisMonitorPerformanceRequest
   * @returns DescribeDiagnosisMonitorPerformanceResponse
   */
  async describeDiagnosisMonitorPerformance(request: $_model.DescribeDiagnosisMonitorPerformanceRequest): Promise<$_model.DescribeDiagnosisMonitorPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisMonitorPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a condition in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecordsWithOptions(request: $_model.DescribeDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!$dara.isNull(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!$dara.isNull(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!$dara.isNull(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
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

    if (!$dara.isNull(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisRecordsResponse({}));
  }

  /**
   * Queries the diagnostic information about SQL statements that meet a condition in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDiagnosisRecordsRequest
   * @returns DescribeDiagnosisRecordsResponse
   */
  async describeDiagnosisRecords(request: $_model.DescribeDiagnosisRecordsRequest): Promise<$_model.DescribeDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfoWithOptions(request: $_model.DescribeDiagnosisSQLInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisSQLInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisSQLInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisSQLInfoResponse({}));
  }

  /**
   * Queries the execution information about an SQL statement, including the execution plan, execution information, resource usage, and self-diagnostics results.
   * 
   * @param request - DescribeDiagnosisSQLInfoRequest
   * @returns DescribeDiagnosisSQLInfoResponse
   */
  async describeDiagnosisSQLInfo(request: $_model.DescribeDiagnosisSQLInfoRequest): Promise<$_model.DescribeDiagnosisSQLInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisSQLInfoWithOptions(request, runtime);
  }

  /**
   * Queries the execution information about distributed tasks in a stage of a query.
   * 
   * @param request - DescribeDiagnosisTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisTasksResponse
   */
  async describeDiagnosisTasksWithOptions(request: $_model.DescribeDiagnosisTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisTasksResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisTasks",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisTasksResponse({}));
  }

  /**
   * Queries the execution information about distributed tasks in a stage of a query.
   * 
   * @param request - DescribeDiagnosisTasksRequest
   * @returns DescribeDiagnosisTasksResponse
   */
  async describeDiagnosisTasks(request: $_model.DescribeDiagnosisTasksRequest): Promise<$_model.DescribeDiagnosisTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDiagnosisTasksWithOptions(request, runtime);
  }

  /**
   * Queries a list of download tasks for the last five SQL queries of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecordsWithOptions(request: $_model.DescribeDownloadRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDownloadRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDownloadRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDownloadRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDownloadRecordsResponse({}));
  }

  /**
   * Queries a list of download tasks for the last five SQL queries of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeDownloadRecordsRequest
   * @returns DescribeDownloadRecordsResponse
   */
  async describeDownloadRecords(request: $_model.DescribeDownloadRecordsRequest): Promise<$_model.DescribeDownloadRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDownloadRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the range for the number of elastic I/O units (EIUs) for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEIURangeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeEIURangeResponse
   */
  async describeEIURangeWithOptions(request: $_model.DescribeEIURangeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeEIURangeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBClusterVersion)) {
      query["DBClusterVersion"] = request.DBClusterVersion;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageSize)) {
      query["StorageSize"] = request.storageSize;
    }

    if (!$dara.isNull(request.subOperation)) {
      query["SubOperation"] = request.subOperation;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeEIURange",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeEIURangeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeEIURangeResponse({}));
  }

  /**
   * Queries the range for the number of elastic I/O units (EIUs) for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeEIURangeRequest
   * @returns DescribeEIURangeResponse
   */
  async describeEIURange(request: $_model.DescribeEIURangeRequest): Promise<$_model.DescribeEIURangeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeEIURangeWithOptions(request, runtime);
  }

  /**
   * 查看日资源弹性
   * 
   * @remarks
   * This operation is available only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticDailyPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticDailyPlanResponse
   */
  async describeElasticDailyPlanWithOptions(request: $_model.DescribeElasticDailyPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticDailyPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticDailyPlanDay)) {
      query["ElasticDailyPlanDay"] = request.elasticDailyPlanDay;
    }

    if (!$dara.isNull(request.elasticDailyPlanStatusList)) {
      query["ElasticDailyPlanStatusList"] = request.elasticDailyPlanStatusList;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticDailyPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticDailyPlanResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticDailyPlanResponse({}));
  }

  /**
   * 查看日资源弹性
   * 
   * @remarks
   * This operation is available only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticDailyPlanRequest
   * @returns DescribeElasticDailyPlanResponse
   */
  async describeElasticDailyPlan(request: $_model.DescribeElasticDailyPlanRequest): Promise<$_model.DescribeElasticDailyPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticDailyPlanWithOptions(request, runtime);
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticPlanResponse
   */
  async describeElasticPlanWithOptions(request: $_model.DescribeElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticPlanResponse({}));
  }

  /**
   * Queries scaling plans of an AnalyticDB for MySQL cluster. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - DescribeElasticPlanRequest
   * @returns DescribeElasticPlanResponse
   */
  async describeElasticPlan(request: $_model.DescribeElasticPlanRequest): Promise<$_model.DescribeElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeElasticPlanWithOptions(request, runtime);
  }

  /**
   * Queries the tables that have excessive primary key fields in an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeysWithOptions(request: $_model.DescribeExcessivePrimaryKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExcessivePrimaryKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExcessivePrimaryKeys",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExcessivePrimaryKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExcessivePrimaryKeysResponse({}));
  }

  /**
   * Queries the tables that have excessive primary key fields in an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - DescribeExcessivePrimaryKeysRequest
   * @returns DescribeExcessivePrimaryKeysResponse
   */
  async describeExcessivePrimaryKeys(request: $_model.DescribeExcessivePrimaryKeysRequest): Promise<$_model.DescribeExcessivePrimaryKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExcessivePrimaryKeysWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the compute layer.
   * 
   * @param request - DescribeExecutorDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeExecutorDetectionResponse
   */
  async describeExecutorDetectionWithOptions(request: $_model.DescribeExecutorDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeExecutorDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeExecutorDetection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeExecutorDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeExecutorDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the compute layer.
   * 
   * @param request - DescribeExecutorDetectionRequest
   * @returns DescribeExecutorDetectionResponse
   */
  async describeExecutorDetection(request: $_model.DescribeExecutorDetectionRequest): Promise<$_model.DescribeExecutorDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeExecutorDetectionWithOptions(request, runtime);
  }

  /**
   * Queries the information about historical events in the event center.
   * 
   * @param request - DescribeHistoryEventsStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryEventsStatResponse
   */
  async describeHistoryEventsStatWithOptions(request: $_model.DescribeHistoryEventsStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryEventsStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.archiveStatus)) {
      query["ArchiveStatus"] = request.archiveStatus;
    }

    if (!$dara.isNull(request.fromStartTime)) {
      query["FromStartTime"] = request.fromStartTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productId)) {
      query["ProductId"] = request.productId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.toStartTime)) {
      query["ToStartTime"] = request.toStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHistoryEventsStat",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryEventsStatResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryEventsStatResponse({}));
  }

  /**
   * Queries the information about historical events in the event center.
   * 
   * @param request - DescribeHistoryEventsStatRequest
   * @returns DescribeHistoryEventsStatResponse
   */
  async describeHistoryEventsStat(request: $_model.DescribeHistoryEventsStatRequest): Promise<$_model.DescribeHistoryEventsStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryEventsStatWithOptions(request, runtime);
  }

  /**
   * Queries the disk usage of all storage nodes.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeInclinedNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInclinedNodesResponse
   */
  async describeInclinedNodesWithOptions(request: $_model.DescribeInclinedNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInclinedNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInclinedNodes",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInclinedNodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInclinedNodesResponse({}));
  }

  /**
   * Queries the disk usage of all storage nodes.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - DescribeInclinedNodesRequest
   * @returns DescribeInclinedNodesResponse
   */
  async describeInclinedNodes(request: $_model.DescribeInclinedNodesRequest): Promise<$_model.DescribeInclinedNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInclinedNodesWithOptions(request, runtime);
  }

  /**
   * Queries the information about skewed tables for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTablesWithOptions(request: $_model.DescribeInclinedTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInclinedTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.tableType)) {
      query["TableType"] = request.tableType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInclinedTables",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInclinedTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInclinedTablesResponse({}));
  }

  /**
   * Queries the information about skewed tables for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeInclinedTablesRequest
   * @returns DescribeInclinedTablesResponse
   */
  async describeInclinedTables(request: $_model.DescribeInclinedTablesRequest): Promise<$_model.DescribeInclinedTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInclinedTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersionWithOptions(request: $_model.DescribeKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKernelVersion",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKernelVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKernelVersionResponse({}));
  }

  /**
   * Queries the information about the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeKernelVersionRequest
   * @returns DescribeKernelVersionResponse
   */
  async describeKernelVersion(request: $_model.DescribeKernelVersionRequest): Promise<$_model.DescribeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKernelVersionWithOptions(request, runtime);
  }

  /**
   * Queries a list of Key Management Service (KMS) keys.
   * 
   * @param request - DescribeKmsKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeysWithOptions(request: $_model.DescribeKmsKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKmsKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKmsKeys",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKmsKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKmsKeysResponse({}));
  }

  /**
   * Queries a list of Key Management Service (KMS) keys.
   * 
   * @param request - DescribeKmsKeysRequest
   * @returns DescribeKmsKeysResponse
   */
  async describeKmsKeys(request: $_model.DescribeKmsKeysRequest): Promise<$_model.DescribeKmsKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeKmsKeysWithOptions(request, runtime);
  }

  /**
   * Queries the information about asynchronous import and export tasks of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about how to asynchronously submit import and export tasks, see [Asynchronously submit an import or export task](https://help.aliyun.com/document_detail/160291.html).
   * 
   * @param request - DescribeLoadTasksRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoadTasksRecordsResponse
   */
  async describeLoadTasksRecordsWithOptions(request: $_model.DescribeLoadTasksRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoadTasksRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoadTasksRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoadTasksRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoadTasksRecordsResponse({}));
  }

  /**
   * Queries the information about asynchronous import and export tasks of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * For information about how to asynchronously submit import and export tasks, see [Asynchronously submit an import or export task](https://help.aliyun.com/document_detail/160291.html).
   * 
   * @param request - DescribeLoadTasksRecordsRequest
   * @returns DescribeLoadTasksRecordsResponse
   */
  async describeLoadTasksRecords(request: $_model.DescribeLoadTasksRecordsRequest): Promise<$_model.DescribeLoadTasksRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoadTasksRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a log shipping job.
   * 
   * @param request - DescribeLogHubAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogHubAttributeResponse
   */
  async describeLogHubAttributeWithOptions(request: $_model.DescribeLogHubAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogHubAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.deliverName)) {
      query["DeliverName"] = request.deliverName;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogHubAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogHubAttributeResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogHubAttributeResponse({}));
  }

  /**
   * Queries the information about a log shipping job.
   * 
   * @param request - DescribeLogHubAttributeRequest
   * @returns DescribeLogHubAttributeResponse
   */
  async describeLogHubAttribute(request: $_model.DescribeLogHubAttributeRequest): Promise<$_model.DescribeLogHubAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogHubAttributeWithOptions(request, runtime);
  }

  /**
   * Queries a list of log keywords in a Logstore.
   * 
   * @param request - DescribeLogStoreKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogStoreKeysResponse
   */
  async describeLogStoreKeysWithOptions(request: $_model.DescribeLogStoreKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogStoreKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogStoreKeys",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogStoreKeysResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogStoreKeysResponse({}));
  }

  /**
   * Queries a list of log keywords in a Logstore.
   * 
   * @param request - DescribeLogStoreKeysRequest
   * @returns DescribeLogStoreKeysResponse
   */
  async describeLogStoreKeys(request: $_model.DescribeLogStoreKeysRequest): Promise<$_model.DescribeLogStoreKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogStoreKeysWithOptions(request, runtime);
  }

  /**
   * Queries the log collection information.
   * 
   * @param request - DescribeLoghubDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLoghubDetailResponse
   */
  async describeLoghubDetailWithOptions(request: $_model.DescribeLoghubDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLoghubDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exportName)) {
      query["ExportName"] = request.exportName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLoghubDetail",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLoghubDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLoghubDetailResponse({}));
  }

  /**
   * Queries the log collection information.
   * 
   * @param request - DescribeLoghubDetailRequest
   * @returns DescribeLoghubDetailResponse
   */
  async describeLoghubDetail(request: $_model.DescribeLoghubDetailRequest): Promise<$_model.DescribeLoghubDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLoghubDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about O&M events.
   * 
   * @param request - DescribeMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMaintenanceActionResponse
   */
  async describeMaintenanceActionWithOptions(request: $_model.DescribeMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMaintenanceActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.isHistory)) {
      query["IsHistory"] = request.isHistory;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMaintenanceAction",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMaintenanceActionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMaintenanceActionResponse({}));
  }

  /**
   * Queries the information about O&M events.
   * 
   * @param request - DescribeMaintenanceActionRequest
   * @returns DescribeMaintenanceActionResponse
   */
  async describeMaintenanceAction(request: $_model.DescribeMaintenanceActionRequest): Promise<$_model.DescribeMaintenanceActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * Queries the details of the permissions granted to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermissionWithOptions(request: $_model.DescribeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOperatorPermissionResponse({}));
  }

  /**
   * Queries the details of the permissions granted to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOperatorPermissionRequest
   * @returns DescribeOperatorPermissionResponse
   */
  async describeOperatorPermission(request: $_model.DescribeOperatorPermissionRequest): Promise<$_model.DescribeOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Queries the information about oversized non-partitioned tables in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOversizeNonPartitionTableInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOversizeNonPartitionTableInfosResponse
   */
  async describeOversizeNonPartitionTableInfosWithOptions(request: $_model.DescribeOversizeNonPartitionTableInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOversizeNonPartitionTableInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOversizeNonPartitionTableInfos",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOversizeNonPartitionTableInfosResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOversizeNonPartitionTableInfosResponse({}));
  }

  /**
   * Queries the information about oversized non-partitioned tables in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeOversizeNonPartitionTableInfosRequest
   * @returns DescribeOversizeNonPartitionTableInfosResponse
   */
  async describeOversizeNonPartitionTableInfos(request: $_model.DescribeOversizeNonPartitionTableInfosRequest): Promise<$_model.DescribeOversizeNonPartitionTableInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOversizeNonPartitionTableInfosWithOptions(request, runtime);
  }

  /**
   * Queries the metrics of an SQL pattern such as the query duration and average memory usage within a period of time.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformanceWithOptions(request: $_model.DescribePatternPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePatternPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.patternId)) {
      query["PatternId"] = request.patternId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePatternPerformance",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePatternPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribePatternPerformanceResponse({}));
  }

  /**
   * Queries the metrics of an SQL pattern such as the query duration and average memory usage within a period of time.
   * 
   * @param request - DescribePatternPerformanceRequest
   * @returns DescribePatternPerformanceResponse
   */
  async describePatternPerformance(request: $_model.DescribePatternPerformanceRequest): Promise<$_model.DescribePatternPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePatternPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the queries that are being executed on a cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProcessListResponse
   */
  async describeProcessListWithOptions(request: $_model.DescribeProcessListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProcessListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.runningTime)) {
      query["RunningTime"] = request.runningTime;
    }

    if (!$dara.isNull(request.showFull)) {
      query["ShowFull"] = request.showFull;
    }

    if (!$dara.isNull(request.user)) {
      query["User"] = request.user;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProcessList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProcessListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProcessListResponse({}));
  }

  /**
   * Queries the queries that are being executed on a cluster.
   * 
   * @param request - DescribeProcessListRequest
   * @returns DescribeProcessListResponse
   */
  async describeProcessList(request: $_model.DescribeProcessListRequest): Promise<$_model.DescribeProcessListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProcessListWithOptions(request, runtime);
  }

  /**
   * Queries the information about specifications of MySQL analytic instances.
   * 
   * @param request - DescribeRdsAnalysisResourceQuotasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRdsAnalysisResourceQuotasResponse
   */
  async describeRdsAnalysisResourceQuotasWithOptions(request: $_model.DescribeRdsAnalysisResourceQuotasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRdsAnalysisResourceQuotasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.nodeClass)) {
      query["NodeClass"] = request.nodeClass;
    }

    if (!$dara.isNull(request.nodeCount)) {
      query["NodeCount"] = request.nodeCount;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.rdsInstanceId)) {
      query["RdsInstanceId"] = request.rdsInstanceId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRdsAnalysisResourceQuotas",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRdsAnalysisResourceQuotasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRdsAnalysisResourceQuotasResponse({}));
  }

  /**
   * Queries the information about specifications of MySQL analytic instances.
   * 
   * @param request - DescribeRdsAnalysisResourceQuotasRequest
   * @returns DescribeRdsAnalysisResourceQuotasResponse
   */
  async describeRdsAnalysisResourceQuotas(request: $_model.DescribeRdsAnalysisResourceQuotasRequest): Promise<$_model.DescribeRdsAnalysisResourceQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRdsAnalysisResourceQuotasWithOptions(request, runtime);
  }

  /**
   * Queries a list of available regions and zones for AnalyticDB for MySQL.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries a list of available regions and zones for AnalyticDB for MySQL.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries information about regions.
   * 
   * @param request - DescribeRegionsMixedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsMixedResponse
   */
  async describeRegionsMixedWithOptions(request: $_model.DescribeRegionsMixedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsMixedResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegionsMixed",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsMixedResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsMixedResponse({}));
  }

  /**
   * Queries information about regions.
   * 
   * @param request - DescribeRegionsMixedRequest
   * @returns DescribeRegionsMixedResponse
   */
  async describeRegionsMixed(request: $_model.DescribeRegionsMixedRequest): Promise<$_model.DescribeRegionsMixedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsMixedWithOptions(request, runtime);
  }

  /**
   * 查询Resubmit配置
   * 
   * @param request - DescribeResubmitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResubmitConfigResponse
   */
  async describeResubmitConfigWithOptions(request: $_model.DescribeResubmitConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeResubmitConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResubmitConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeResubmitConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeResubmitConfigResponse({}));
  }

  /**
   * 查询Resubmit配置
   * 
   * @param request - DescribeResubmitConfigRequest
   * @returns DescribeResubmitConfigResponse
   */
  async describeResubmitConfig(request: $_model.DescribeResubmitConfigRequest): Promise<$_model.DescribeResubmitConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeResubmitConfigWithOptions(request, runtime);
  }

  /**
   * 查询SQA状态
   * 
   * @param request - DescribeSQAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQAConfigResponse
   */
  async describeSQAConfigWithOptions(request: $_model.DescribeSQAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQAConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQAConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQAConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQAConfigResponse({}));
  }

  /**
   * 查询SQA状态
   * 
   * @param request - DescribeSQAConfigRequest
   * @returns DescribeSQAConfigResponse
   */
  async describeSQAConfig(request: $_model.DescribeSQAConfigRequest): Promise<$_model.DescribeSQAConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQAConfigWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a period of time.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatternsWithOptions(request: $_model.DescribeSQLPatternsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLPatternsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLPatterns",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLPatternsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLPatternsResponse({}));
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a period of time.
   * 
   * @param request - DescribeSQLPatternsRequest
   * @returns DescribeSQLPatternsResponse
   */
  async describeSQLPatterns(request: $_model.DescribeSQLPatternsRequest): Promise<$_model.DescribeSQLPatternsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLPatternsWithOptions(request, runtime);
  }

  /**
   * Queries the plan information about an SQL statement such as a query statement or an extract-transform-load (ETL) task statement.
   * 
   * @param request - DescribeSQLPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPlanResponse
   */
  async describeSQLPlanWithOptions(request: $_model.DescribeSQLPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLPlanResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLPlanResponse({}));
  }

  /**
   * Queries the plan information about an SQL statement such as a query statement or an extract-transform-load (ETL) task statement.
   * 
   * @param request - DescribeSQLPlanRequest
   * @returns DescribeSQLPlanResponse
   */
  async describeSQLPlan(request: $_model.DescribeSQLPlanRequest): Promise<$_model.DescribeSQLPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLPlanWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeSQLPlanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSQLPlanTaskResponse
   */
  async describeSQLPlanTaskWithOptions(request: $_model.DescribeSQLPlanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSQLPlanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.stageId)) {
      query["StageId"] = request.stageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSQLPlanTask",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSQLPlanTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSQLPlanTaskResponse({}));
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeSQLPlanTaskRequest
   * @returns DescribeSQLPlanTaskResponse
   */
  async describeSQLPlanTask(request: $_model.DescribeSQLPlanTaskRequest): Promise<$_model.DescribeSQLPlanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSQLPlanTaskWithOptions(request, runtime);
  }

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeSchemasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSchemasResponse
   */
  async describeSchemasWithOptions(request: $_model.DescribeSchemasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSchemasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSchemas",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSchemasResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSchemasResponse({}));
  }

  /**
   * Queries a list of databases in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeSchemasRequest
   * @returns DescribeSchemasResponse
   */
  async describeSchemas(request: $_model.DescribeSchemasRequest): Promise<$_model.DescribeSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSchemasWithOptions(request, runtime);
  }

  /**
   * 查看慢日志
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecordsWithOptions(request: $_model.DescribeSlowLogRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.processID)) {
      query["ProcessID"] = request.processID;
    }

    if (!$dara.isNull(request.range)) {
      query["Range"] = request.range;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.state)) {
      query["State"] = request.state;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogRecordsResponse({}));
  }

  /**
   * 查看慢日志
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @param request - DescribeSqlPatternRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPatternWithOptions(request: $_model.DescribeSqlPatternRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSqlPatternResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sqlPattern)) {
      query["SqlPattern"] = request.sqlPattern;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSqlPattern",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSqlPatternResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSqlPatternResponse({}));
  }

  /**
   * Queries a list of SQL patterns for an AnalyticDB for MySQL cluster within a time range.
   * 
   * @param request - DescribeSqlPatternRequest
   * @returns DescribeSqlPatternResponse
   */
  async describeSqlPattern(request: $_model.DescribeSqlPatternRequest): Promise<$_model.DescribeSqlPatternResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSqlPatternWithOptions(request, runtime);
  }

  /**
   * Queries a list of instances or clusters that are available for data synchronization.
   * 
   * @param request - DescribeSyncAvailableDBClusterListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncAvailableDBClusterListResponse
   */
  async describeSyncAvailableDBClusterListWithOptions(request: $_model.DescribeSyncAvailableDBClusterListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncAvailableDBClusterListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceDBCluster)) {
      query["SourceDBCluster"] = request.sourceDBCluster;
    }

    if (!$dara.isNull(request.syncPlatform)) {
      query["SyncPlatform"] = request.syncPlatform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncAvailableDBClusterList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncAvailableDBClusterListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncAvailableDBClusterListResponse({}));
  }

  /**
   * Queries a list of instances or clusters that are available for data synchronization.
   * 
   * @param request - DescribeSyncAvailableDBClusterListRequest
   * @returns DescribeSyncAvailableDBClusterListResponse
   */
  async describeSyncAvailableDBClusterList(request: $_model.DescribeSyncAvailableDBClusterListRequest): Promise<$_model.DescribeSyncAvailableDBClusterListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncAvailableDBClusterListWithOptions(request, runtime);
  }

  /**
   * Queries a list of synchronization jobs in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeSyncJobListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSyncJobListResponse
   */
  async describeSyncJobListWithOptions(request: $_model.DescribeSyncJobListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSyncJobListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.getSourceDetail)) {
      query["GetSourceDetail"] = request.getSourceDetail;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceDBClusterDescription)) {
      query["SourceDBClusterDescription"] = request.sourceDBClusterDescription;
    }

    if (!$dara.isNull(request.sourceDBClusterId)) {
      query["SourceDBClusterId"] = request.sourceDBClusterId;
    }

    if (!$dara.isNull(request.sourceDBType)) {
      query["SourceDBType"] = request.sourceDBType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSyncJobList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSyncJobListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSyncJobListResponse({}));
  }

  /**
   * Queries a list of synchronization jobs in an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeSyncJobListRequest
   * @returns DescribeSyncJobListResponse
   */
  async describeSyncJobList(request: $_model.DescribeSyncJobListRequest): Promise<$_model.DescribeSyncJobListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSyncJobListWithOptions(request, runtime);
  }

  /**
   * 查询表访问统计信息
   * 
   * @param request - DescribeTableAccessCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCountWithOptions(request: $_model.DescribeTableAccessCountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableAccessCountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
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

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableAccessCount",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableAccessCountResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableAccessCountResponse({}));
  }

  /**
   * 查询表访问统计信息
   * 
   * @param request - DescribeTableAccessCountRequest
   * @returns DescribeTableAccessCountResponse
   */
  async describeTableAccessCount(request: $_model.DescribeTableAccessCountRequest): Promise<$_model.DescribeTableAccessCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableAccessCountWithOptions(request, runtime);
  }

  /**
   * 查询表详情
   * 
   * @param request - DescribeTableDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetailWithOptions(request: $_model.DescribeTableDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableDetail",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableDetailResponse({}));
  }

  /**
   * 查询表详情
   * 
   * @param request - DescribeTableDetailRequest
   * @returns DescribeTableDetailResponse
   */
  async describeTableDetail(request: $_model.DescribeTableDetailRequest): Promise<$_model.DescribeTableDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableDetailWithOptions(request, runtime);
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnoseWithOptions(request: $_model.DescribeTablePartitionDiagnoseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablePartitionDiagnoseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTablePartitionDiagnose",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTablePartitionDiagnoseResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTablePartitionDiagnoseResponse({}));
  }

  /**
   * Queries the information about partition diagnostics.
   * 
   * @param request - DescribeTablePartitionDiagnoseRequest
   * @returns DescribeTablePartitionDiagnoseResponse
   */
  async describeTablePartitionDiagnose(request: $_model.DescribeTablePartitionDiagnoseRequest): Promise<$_model.DescribeTablePartitionDiagnoseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablePartitionDiagnoseWithOptions(request, runtime);
  }

  /**
   * Queries the information about table statistics for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTableStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatisticsWithOptions(request: $_model.DescribeTableStatisticsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTableStatisticsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTableStatistics",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTableStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTableStatisticsResponse({}));
  }

  /**
   * Queries the information about table statistics for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTableStatisticsRequest
   * @returns DescribeTableStatisticsResponse
   */
  async describeTableStatistics(request: $_model.DescribeTableStatisticsRequest): Promise<$_model.DescribeTableStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTableStatisticsWithOptions(request, runtime);
  }

  /**
   * Queries a list of tables in a database of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTablesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTablesResponse
   */
  async describeTablesWithOptions(request: $_model.DescribeTablesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTablesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTables",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTablesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTablesResponse({}));
  }

  /**
   * Queries a list of tables in a database of an AnalyticDB for MySQL cluster.
   * 
   * @param request - DescribeTablesRequest
   * @returns DescribeTablesResponse
   */
  async describeTables(request: $_model.DescribeTablesRequest): Promise<$_model.DescribeTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTablesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfoWithOptions(request: $_model.DescribeTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskInfo",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskInfoResponse({}));
  }

  /**
   * Queries the information about a task.
   * 
   * @param request - DescribeTaskInfoRequest
   * @returns DescribeTaskInfoResponse
   */
  async describeTaskInfo(request: $_model.DescribeTaskInfoRequest): Promise<$_model.DescribeTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTaskInfoWithOptions(request, runtime);
  }

  /**
   * Queries the vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswId)) {
      query["VswId"] = request.vswId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitches",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchesResponse({}));
  }

  /**
   * Queries the vSwitches.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * Queries a list of available vSwitches.
   * 
   * @param request - DescribeVSwitchsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchsResponse
   */
  async describeVSwitchsWithOptions(request: $_model.DescribeVSwitchsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVSwitchs",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVSwitchsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVSwitchsResponse({}));
  }

  /**
   * Queries a list of available vSwitches.
   * 
   * @param request - DescribeVSwitchsRequest
   * @returns DescribeVSwitchsResponse
   */
  async describeVSwitchs(request: $_model.DescribeVSwitchsRequest): Promise<$_model.DescribeVSwitchsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchsWithOptions(request, runtime);
  }

  /**
   * Queries a list of available virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVpcsResponse
   */
  async describeVpcsWithOptions(request: $_model.DescribeVpcsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVpcsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVpcs",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeVpcsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeVpcsResponse({}));
  }

  /**
   * Queries a list of available virtual private clouds (VPCs).
   * 
   * @param request - DescribeVpcsRequest
   * @returns DescribeVpcsResponse
   */
  async describeVpcs(request: $_model.DescribeVpcsRequest): Promise<$_model.DescribeVpcsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVpcsWithOptions(request, runtime);
  }

  /**
   * Queries the diagnostic results of the storage layer.
   * 
   * @param request - DescribeWorkerDetectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkerDetectionResponse
   */
  async describeWorkerDetectionWithOptions(request: $_model.DescribeWorkerDetectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkerDetectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkerDetection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkerDetectionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkerDetectionResponse({}));
  }

  /**
   * Queries the diagnostic results of the storage layer.
   * 
   * @param request - DescribeWorkerDetectionRequest
   * @returns DescribeWorkerDetectionResponse
   */
  async describeWorkerDetection(request: $_model.DescribeWorkerDetectionRequest): Promise<$_model.DescribeWorkerDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeWorkerDetectionWithOptions(request, runtime);
  }

  /**
   * 关闭用户ENI
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DetachUserENIRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachUserENIResponse
   */
  async detachUserENIWithOptions(request: $_model.DetachUserENIRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DetachUserENIResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachUserENI",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DetachUserENIResponse>(await this.callApi(params, req, runtime), new $_model.DetachUserENIResponse({}));
  }

  /**
   * 关闭用户ENI
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition.
   * 
   * @param request - DetachUserENIRequest
   * @returns DetachUserENIResponse
   */
  async detachUserENI(request: $_model.DetachUserENIRequest): Promise<$_model.DetachUserENIResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detachUserENIWithOptions(request, runtime);
  }

  /**
   * Disables the suggestion feature.
   * 
   * @param request - DisableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceServiceWithOptions(request: $_model.DisableAdviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableAdviceServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableAdviceService",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableAdviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.DisableAdviceServiceResponse({}));
  }

  /**
   * Disables the suggestion feature.
   * 
   * @param request - DisableAdviceServiceRequest
   * @returns DisableAdviceServiceResponse
   */
  async disableAdviceService(request: $_model.DisableAdviceServiceRequest): Promise<$_model.DisableAdviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a condition for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecordsWithOptions(request: $_model.DownloadDiagnosisRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientIp)) {
      query["ClientIp"] = request.clientIp;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.database)) {
      query["Database"] = request.database;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.maxPeakMemory)) {
      query["MaxPeakMemory"] = request.maxPeakMemory;
    }

    if (!$dara.isNull(request.maxScanSize)) {
      query["MaxScanSize"] = request.maxScanSize;
    }

    if (!$dara.isNull(request.minPeakMemory)) {
      query["MinPeakMemory"] = request.minPeakMemory;
    }

    if (!$dara.isNull(request.minScanSize)) {
      query["MinScanSize"] = request.minScanSize;
    }

    if (!$dara.isNull(request.queryCondition)) {
      query["QueryCondition"] = request.queryCondition;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroup)) {
      query["ResourceGroup"] = request.resourceGroup;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadDiagnosisRecords",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadDiagnosisRecordsResponse>(await this.callApi(params, req, runtime), new $_model.DownloadDiagnosisRecordsResponse({}));
  }

  /**
   * Downloads the diagnostic information about SQL statements that meet a condition for an AnalyticDB for MySQL cluster.
   * 
   * @param request - DownloadDiagnosisRecordsRequest
   * @returns DownloadDiagnosisRecordsResponse
   */
  async downloadDiagnosisRecords(request: $_model.DownloadDiagnosisRecordsRequest): Promise<$_model.DownloadDiagnosisRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.downloadDiagnosisRecordsWithOptions(request, runtime);
  }

  /**
   * 开通建议服务
   * 
   * @param request - EnableAdviceServiceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceServiceWithOptions(request: $_model.EnableAdviceServiceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableAdviceServiceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableAdviceService",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableAdviceServiceResponse>(await this.callApi(params, req, runtime), new $_model.EnableAdviceServiceResponse({}));
  }

  /**
   * 开通建议服务
   * 
   * @param request - EnableAdviceServiceRequest
   * @returns EnableAdviceServiceResponse
   */
  async enableAdviceService(request: $_model.EnableAdviceServiceRequest): Promise<$_model.EnableAdviceServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableAdviceServiceWithOptions(request, runtime);
  }

  /**
   * Queries the table creation statement for tables.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - GetCreateTableSQLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCreateTableSQLResponse
   */
  async getCreateTableSQLWithOptions(request: $_model.GetCreateTableSQLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCreateTableSQLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCreateTableSQL",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCreateTableSQLResponse>(await this.callApi(params, req, runtime), new $_model.GetCreateTableSQLResponse({}));
  }

  /**
   * Queries the table creation statement for tables.
   * 
   * @remarks
   * For information about the endpoints of AnalyticDB for MySQL, see [Endpoints](https://help.aliyun.com/document_detail/612373.html).
   * 
   * @param request - GetCreateTableSQLRequest
   * @returns GetCreateTableSQLResponse
   */
  async getCreateTableSQL(request: $_model.GetCreateTableSQLRequest): Promise<$_model.GetCreateTableSQLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCreateTableSQLWithOptions(request, runtime);
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ###
   * If you need Alibaba Cloud technical support to perform operations on your AnalyticDB for MySQL cluster, you must grant permissions to the service account of your cluster. When the validity period of the authorization ends, the granted permissions are automatically revoked.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermissionWithOptions(request: $_model.GrantOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.expiredTime)) {
      query["ExpiredTime"] = request.expiredTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privileges)) {
      query["Privileges"] = request.privileges;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.GrantOperatorPermissionResponse({}));
  }

  /**
   * Grants permissions to the service account of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * ###
   * If you need Alibaba Cloud technical support to perform operations on your AnalyticDB for MySQL cluster, you must grant permissions to the service account of your cluster. When the validity period of the authorization ends, the granted permissions are automatically revoked.
   * 
   * @param request - GrantOperatorPermissionRequest
   * @returns GrantOperatorPermissionResponse
   */
  async grantOperatorPermission(request: $_model.GrantOperatorPermissionRequest): Promise<$_model.GrantOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns KillProcessResponse
   */
  async killProcessWithOptions(request: $_model.KillProcessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.KillProcessResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.processId)) {
      query["ProcessId"] = request.processId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "KillProcess",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.KillProcessResponse>(await this.callApi(params, req, runtime), new $_model.KillProcessResponse({}));
  }

  /**
   * Terminates an ongoing query.
   * 
   * @param request - KillProcessRequest
   * @returns KillProcessResponse
   */
  async killProcess(request: $_model.KillProcessRequest): Promise<$_model.KillProcessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.killProcessWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-03-15",
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
   * Queries the tags that are added to AnalyticDB for MySQL clusters, or the AnalyticDB for MySQL clusters that have tags added.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Migrates data from a Data Warehouse Edition cluster to a Data Lakehouse Edition cluster in AnalyticDB for MySQL.
   * 
   * @param request - MigrateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateDBClusterResponse
   */
  async migrateDBClusterWithOptions(request: $_model.MigrateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.productForm)) {
      query["ProductForm"] = request.productForm;
    }

    if (!$dara.isNull(request.productVersion)) {
      query["ProductVersion"] = request.productVersion;
    }

    if (!$dara.isNull(request.reservedNodeCount)) {
      query["ReservedNodeCount"] = request.reservedNodeCount;
    }

    if (!$dara.isNull(request.reservedNodeSize)) {
      query["ReservedNodeSize"] = request.reservedNodeSize;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.secondaryVSwitchId)) {
      query["SecondaryVSwitchId"] = request.secondaryVSwitchId;
    }

    if (!$dara.isNull(request.secondaryZoneId)) {
      query["SecondaryZoneId"] = request.secondaryZoneId;
    }

    if (!$dara.isNull(request.shardNumber)) {
      query["ShardNumber"] = request.shardNumber;
    }

    if (!$dara.isNull(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    if (!$dara.isNull(request.storageResourceSize)) {
      query["StorageResourceSize"] = request.storageResourceSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.MigrateDBClusterResponse({}));
  }

  /**
   * Migrates data from a Data Warehouse Edition cluster to a Data Lakehouse Edition cluster in AnalyticDB for MySQL.
   * 
   * @param request - MigrateDBClusterRequest
   * @returns MigrateDBClusterResponse
   */
  async migrateDBCluster(request: $_model.MigrateDBClusterRequest): Promise<$_model.MigrateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.migrateDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescriptionWithOptions(request: $_model.ModifyAccountDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountDescription)) {
      query["AccountDescription"] = request.accountDescription;
    }

    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAccountDescription",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountDescriptionResponse({}));
  }

  /**
   * Modifies the description of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the time configuration of O\\&M events.
   * 
   * @param request - ModifyActiveOperationMaintainConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationMaintainConfResponse
   */
  async modifyActiveOperationMaintainConfWithOptions(request: $_model.ModifyActiveOperationMaintainConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationMaintainConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.cycleTime)) {
      query["CycleTime"] = request.cycleTime;
    }

    if (!$dara.isNull(request.cycleType)) {
      query["CycleType"] = request.cycleType;
    }

    if (!$dara.isNull(request.maintainEndTime)) {
      query["MaintainEndTime"] = request.maintainEndTime;
    }

    if (!$dara.isNull(request.maintainStartTime)) {
      query["MaintainStartTime"] = request.maintainStartTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyActiveOperationMaintainConf",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActiveOperationMaintainConfResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActiveOperationMaintainConfResponse({}));
  }

  /**
   * Changes the time configuration of O\\&M events.
   * 
   * @param request - ModifyActiveOperationMaintainConfRequest
   * @returns ModifyActiveOperationMaintainConfResponse
   */
  async modifyActiveOperationMaintainConf(request: $_model.ModifyActiveOperationMaintainConfRequest): Promise<$_model.ModifyActiveOperationMaintainConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationMaintainConfWithOptions(request, runtime);
  }

  /**
   * Changes the execution time of O&M events.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasksWithOptions(request: $_model.ModifyActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.immediateStart)) {
      query["ImmediateStart"] = request.immediateStart;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyActiveOperationTasks",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyActiveOperationTasksResponse>(await this.callApi(params, req, runtime), new $_model.ModifyActiveOperationTasksResponse({}));
  }

  /**
   * Changes the execution time of O&M events.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * 修改审计日志设置
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfigWithOptions(request: $_model.ModifyAuditLogConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAuditLogConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auditLogStatus)) {
      query["AuditLogStatus"] = request.auditLogStatus;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAuditLogConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAuditLogConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAuditLogConfigResponse({}));
  }

  /**
   * 修改审计日志设置
   * 
   * @param request - ModifyAuditLogConfigRequest
   * @returns ModifyAuditLogConfigResponse
   */
  async modifyAuditLogConfig(request: $_model.ModifyAuditLogConfigRequest): Promise<$_model.ModifyAuditLogConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAuditLogConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttributeWithOptions(request: $_model.ModifyAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.periodUnit)) {
      query["PeriodUnit"] = request.periodUnit;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.renewalStatus)) {
      query["RenewalStatus"] = request.renewalStatus;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAutoRenewAttribute",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAutoRenewAttributeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAutoRenewAttributeResponse({}));
  }

  /**
   * Modifies the auto-renewal status of a subscription AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttribute(request: $_model.ModifyAutoRenewAttributeRequest): Promise<$_model.ModifyAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * 修改全量备份策略
   * 
   * @param request - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(request: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPeriod)) {
      query["BackupRetentionPeriod"] = request.backupRetentionPeriod;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.preferredBackupPeriod)) {
      query["PreferredBackupPeriod"] = request.preferredBackupPeriod;
    }

    if (!$dara.isNull(request.preferredBackupTime)) {
      query["PreferredBackupTime"] = request.preferredBackupTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyBackupPolicy",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyBackupPolicyResponse({}));
  }

  /**
   * 修改全量备份策略
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionStringWithOptions(request: $_model.ModifyClusterConnectionStringRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterConnectionStringResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.currentConnectionString)) {
      query["CurrentConnectionString"] = request.currentConnectionString;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.port)) {
      query["Port"] = request.port;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterConnectionString",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterConnectionStringResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterConnectionStringResponse({}));
  }

  /**
   * Changes the endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyClusterConnectionStringRequest
   * @returns ModifyClusterConnectionStringResponse
   */
  async modifyClusterConnectionString(request: $_model.ModifyClusterConnectionStringRequest): Promise<$_model.ModifyClusterConnectionStringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyClusterConnectionStringWithOptions(request, runtime);
  }

  /**
   * Changes the specifications of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.computeResource)) {
      query["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.DBClusterCategory)) {
      query["DBClusterCategory"] = request.DBClusterCategory;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!$dara.isNull(request.DBNodeGroupCount)) {
      query["DBNodeGroupCount"] = request.DBNodeGroupCount;
    }

    if (!$dara.isNull(request.DBNodeStorage)) {
      query["DBNodeStorage"] = request.DBNodeStorage;
    }

    if (!$dara.isNull(request.diskPerformanceLevel)) {
      query["DiskPerformanceLevel"] = request.diskPerformanceLevel;
    }

    if (!$dara.isNull(request.elasticIOResource)) {
      query["ElasticIOResource"] = request.elasticIOResource;
    }

    if (!$dara.isNull(request.elasticIOResourceSize)) {
      query["ElasticIOResourceSize"] = request.elasticIOResourceSize;
    }

    if (!$dara.isNull(request.executorCount)) {
      query["ExecutorCount"] = request.executorCount;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageResource)) {
      query["StorageResource"] = request.storageResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBCluster",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterResponse({}));
  }

  /**
   * Changes the specifications of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the IP address whitelists of a cluster.
   * 
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteListWithOptions(request: $_model.ModifyDBClusterAccessWhiteListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAccessWhiteListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterIPArrayAttribute)) {
      query["DBClusterIPArrayAttribute"] = request.DBClusterIPArrayAttribute;
    }

    if (!$dara.isNull(request.DBClusterIPArrayName)) {
      query["DBClusterIPArrayName"] = request.DBClusterIPArrayName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["ModifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterAccessWhiteList",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterAccessWhiteListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterAccessWhiteListResponse({}));
  }

  /**
   * Modifies the IP address whitelists of a cluster.
   * 
   * @param request - ModifyDBClusterAccessWhiteListRequest
   * @returns ModifyDBClusterAccessWhiteListResponse
   */
  async modifyDBClusterAccessWhiteList(request: $_model.ModifyDBClusterAccessWhiteListRequest): Promise<$_model.ModifyDBClusterAccessWhiteListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhiteListWithOptions(request, runtime);
  }

  /**
   * 修改备注
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescriptionWithOptions(request: $_model.ModifyDBClusterDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterDescription",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterDescriptionResponse({}));
  }

  /**
   * 修改备注
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: $_model.ModifyDBClusterDescriptionRequest): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTimeWithOptions(request: $_model.ModifyDBClusterMaintainTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.maintainTime)) {
      query["MaintainTime"] = request.maintainTime;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterMaintainTime",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterMaintainTimeResponse({}));
  }

  /**
   * Changes the maintenance window of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: $_model.ModifyDBClusterMaintainTimeRequest): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterPayTypeResponse
   */
  async modifyDBClusterPayTypeWithOptions(request: $_model.ModifyDBClusterPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterPayTypeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dbClusterId)) {
      query["DbClusterId"] = request.dbClusterId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterPayType",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterPayTypeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterPayTypeResponse({}));
  }

  /**
   * Changes the billing method of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterPayTypeRequest
   * @returns ModifyDBClusterPayTypeResponse
   */
  async modifyDBClusterPayType(request: $_model.ModifyDBClusterPayTypeRequest): Promise<$_model.ModifyDBClusterPayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterPayTypeWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Resource Management enables you to build an organizational structure for resources based on your business needs. You can use a resource directory, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475#concept-zyn-3p1-dhb~~ "Resource Management provides a collection of resource management services that support enterprise IT administration. The services include Resource Directory, Resource Group, and Tag. Resource Directory allows you to build an organizational structure for resources based on your business requirements. Resource Group and Tag allow you to hierarchically manage the resources. Resource Sharing allows you to share the resources among your accounts.")
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroupWithOptions(request: $_model.ModifyDBClusterResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterResourceGroupResponse({}));
  }

  /**
   * Modifies the resource group of an AnalyticDB for MySQL cluster.
   * 
   * @remarks
   * Resource Management enables you to build an organizational structure for resources based on your business needs. You can use a resource directory, folders, accounts, and resource groups to hierarchically organize and manage resources. For more information, see [What is Resource Management?](~~94475#concept-zyn-3p1-dhb~~ "Resource Management provides a collection of resource management services that support enterprise IT administration. The services include Resource Directory, Resource Group, and Tag. Resource Directory allows you to build an organizational structure for resources based on your business requirements. Resource Group and Tag allow you to hierarchically manage the resources. Resource Sharing allows you to share the resources among your accounts.")
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroup(request: $_model.ModifyDBClusterResourceGroupRequest): Promise<$_model.ModifyDBClusterResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSLWithOptions(request: $_model.ModifyDBClusterSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableSSL)) {
      query["EnableSSL"] = request.enableSSL;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterSSL",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterSSLResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterSSLResponse({}));
  }

  /**
   * Modifies the SSL configurations of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSL(request: $_model.ModifyDBClusterSSLRequest): Promise<$_model.ModifyDBClusterSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * Changes the number of shards for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterShardNumberRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterShardNumberResponse
   */
  async modifyDBClusterShardNumberWithOptions(request: $_model.ModifyDBClusterShardNumberRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterShardNumberResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.newShardNumber)) {
      query["NewShardNumber"] = request.newShardNumber;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    if (!$dara.isNull(request.switchTimeMode)) {
      query["SwitchTimeMode"] = request.switchTimeMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterShardNumber",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterShardNumberResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterShardNumberResponse({}));
  }

  /**
   * Changes the number of shards for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterShardNumberRequest
   * @returns ModifyDBClusterShardNumberResponse
   */
  async modifyDBClusterShardNumber(request: $_model.ModifyDBClusterShardNumberRequest): Promise<$_model.ModifyDBClusterShardNumberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterShardNumberWithOptions(request, runtime);
  }

  /**
   * Changes the virtual IP address (VIP) that is used to connect to an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterVipRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterVipResponse
   */
  async modifyDBClusterVipWithOptions(request: $_model.ModifyDBClusterVipRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterVipResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterVip",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterVipResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterVipResponse({}));
  }

  /**
   * Changes the virtual IP address (VIP) that is used to connect to an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterVipRequest
   * @returns ModifyDBClusterVipResponse
   */
  async modifyDBClusterVip(request: $_model.ModifyDBClusterVipRequest): Promise<$_model.ModifyDBClusterVipResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterVipWithOptions(request, runtime);
  }

  /**
   * Modifies the number of nodes or the query execution mode for a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more. The number of nodes cannot be modified for the default resource group USER_DEFAULT.
   * 
   * @param tmpReq - ModifyDBResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroupWithOptions(tmpReq: $_model.ModifyDBResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBResourceGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyDBResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.engineParams)) {
      request.engineParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.engineParams, "EngineParams", "json");
    }

    if (!$dara.isNull(tmpReq.poolUserList)) {
      request.poolUserListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.poolUserList, "PoolUserList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!$dara.isNull(request.clusterSizeResource)) {
      query["ClusterSizeResource"] = request.clusterSizeResource;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.engineParamsShrink)) {
      query["EngineParams"] = request.engineParamsShrink;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupType)) {
      query["GroupType"] = request.groupType;
    }

    if (!$dara.isNull(request.maxClusterCount)) {
      query["MaxClusterCount"] = request.maxClusterCount;
    }

    if (!$dara.isNull(request.maxComputeResource)) {
      query["MaxComputeResource"] = request.maxComputeResource;
    }

    if (!$dara.isNull(request.minClusterCount)) {
      query["MinClusterCount"] = request.minClusterCount;
    }

    if (!$dara.isNull(request.minComputeResource)) {
      query["MinComputeResource"] = request.minComputeResource;
    }

    if (!$dara.isNull(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolUserListShrink)) {
      query["PoolUserList"] = request.poolUserListShrink;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBResourceGroup",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBResourceGroupResponse({}));
  }

  /**
   * Modifies the number of nodes or the query execution mode for a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * @remarks
   * This operation is suitable for the following editions:
   * *   **Enterprise Edition**.
   * *   **Basic Edition**.
   * *   **Data Lakehouse Edition**.
   * *   **Data Warehouse Edition in elastic mode**: 32 cores and 128 GB or more. The number of nodes cannot be modified for the default resource group USER_DEFAULT.
   * 
   * @param request - ModifyDBResourceGroupRequest
   * @returns ModifyDBResourceGroupResponse
   */
  async modifyDBResourceGroup(request: $_model.ModifyDBResourceGroupRequest): Promise<$_model.ModifyDBResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBResourceGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the resources of a resource group. This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * *   You can call this operation only for elastic clusters of 32 cores or more.
   * *   You cannot change the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param request - ModifyDBResourcePoolRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBResourcePoolResponse
   */
  async modifyDBResourcePoolWithOptions(request: $_model.ModifyDBResourcePoolRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBResourcePoolResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.nodeNum)) {
      query["NodeNum"] = request.nodeNum;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBResourcePool",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBResourcePoolResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBResourcePoolResponse({}));
  }

  /**
   * Modifies the resources of a resource group. This operation is available only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * ###
   * *   You can call this operation only for elastic clusters of 32 cores or more.
   * *   You cannot change the number of nodes for the USER_DEFAULT resource group.
   * 
   * @param request - ModifyDBResourcePoolRequest
   * @returns ModifyDBResourcePoolResponse
   */
  async modifyDBResourcePool(request: $_model.ModifyDBResourcePoolRequest): Promise<$_model.ModifyDBResourcePoolResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBResourcePoolWithOptions(request, runtime);
  }

  /**
   * Modifies a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - ModifyElasticPlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlanWithOptions(request: $_model.ModifyElasticPlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElasticPlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.elasticPlanEnable)) {
      query["ElasticPlanEnable"] = request.elasticPlanEnable;
    }

    if (!$dara.isNull(request.elasticPlanEndDay)) {
      query["ElasticPlanEndDay"] = request.elasticPlanEndDay;
    }

    if (!$dara.isNull(request.elasticPlanMonthlyRepeat)) {
      query["ElasticPlanMonthlyRepeat"] = request.elasticPlanMonthlyRepeat;
    }

    if (!$dara.isNull(request.elasticPlanName)) {
      query["ElasticPlanName"] = request.elasticPlanName;
    }

    if (!$dara.isNull(request.elasticPlanNodeNum)) {
      query["ElasticPlanNodeNum"] = request.elasticPlanNodeNum;
    }

    if (!$dara.isNull(request.elasticPlanStartDay)) {
      query["ElasticPlanStartDay"] = request.elasticPlanStartDay;
    }

    if (!$dara.isNull(request.elasticPlanTimeEnd)) {
      query["ElasticPlanTimeEnd"] = request.elasticPlanTimeEnd;
    }

    if (!$dara.isNull(request.elasticPlanTimeStart)) {
      query["ElasticPlanTimeStart"] = request.elasticPlanTimeStart;
    }

    if (!$dara.isNull(request.elasticPlanType)) {
      query["ElasticPlanType"] = request.elasticPlanType;
    }

    if (!$dara.isNull(request.elasticPlanWeeklyRepeat)) {
      query["ElasticPlanWeeklyRepeat"] = request.elasticPlanWeeklyRepeat;
    }

    if (!$dara.isNull(request.elasticPlanWorkerSpec)) {
      query["ElasticPlanWorkerSpec"] = request.elasticPlanWorkerSpec;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourcePoolName)) {
      query["ResourcePoolName"] = request.resourcePoolName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElasticPlan",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElasticPlanResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElasticPlanResponse({}));
  }

  /**
   * Modifies a scheduled scaling plan. This operation can be used only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @remarks
   * You can call this operation only for AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in elastic mode for Cluster Edition that have 32 cores or more.
   * 
   * @param request - ModifyElasticPlanRequest
   * @returns ModifyElasticPlanResponse
   */
  async modifyElasticPlan(request: $_model.ModifyElasticPlanRequest): Promise<$_model.ModifyElasticPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyElasticPlanWithOptions(request, runtime);
  }

  /**
   * Modifies the log backup settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLogBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicyWithOptions(request: $_model.ModifyLogBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLogBackupPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableBackupLog)) {
      query["EnableBackupLog"] = request.enableBackupLog;
    }

    if (!$dara.isNull(request.logBackupRetentionPeriod)) {
      query["LogBackupRetentionPeriod"] = request.logBackupRetentionPeriod;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLogBackupPolicy",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLogBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLogBackupPolicyResponse({}));
  }

  /**
   * Modifies the log backup settings of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifyLogBackupPolicyRequest
   * @returns ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicy(request: $_model.ModifyLogBackupPolicyRequest): Promise<$_model.ModifyLogBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Changes the status of a log shipping job.
   * 
   * @param request - ModifyLogHubStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyLogHubStatusResponse
   */
  async modifyLogHubStatusWithOptions(request: $_model.ModifyLogHubStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyLogHubStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.deliverName)) {
      query["DeliverName"] = request.deliverName;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyLogHubStatus",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyLogHubStatusResponse>(await this.callApi(params, req, runtime), new $_model.ModifyLogHubStatusResponse({}));
  }

  /**
   * Changes the status of a log shipping job.
   * 
   * @param request - ModifyLogHubStatusRequest
   * @returns ModifyLogHubStatusResponse
   */
  async modifyLogHubStatus(request: $_model.ModifyLogHubStatusRequest): Promise<$_model.ModifyLogHubStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLogHubStatusWithOptions(request, runtime);
  }

  /**
   * Changes the switchover time of O&M events.
   * 
   * @param request - ModifyMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaintenanceActionResponse
   */
  async modifyMaintenanceActionWithOptions(request: $_model.ModifyMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaintenanceActionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ids)) {
      query["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaintenanceAction",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaintenanceActionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaintenanceActionResponse({}));
  }

  /**
   * Changes the switchover time of O&M events.
   * 
   * @param request - ModifyMaintenanceActionRequest
   * @returns ModifyMaintenanceActionResponse
   */
  async modifyMaintenanceAction(request: $_model.ModifyMaintenanceActionRequest): Promise<$_model.ModifyMaintenanceActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * 修改Resubmit配置
   * 
   * @param tmpReq - ModifyResubmitConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyResubmitConfigResponse
   */
  async modifyResubmitConfigWithOptions(tmpReq: $_model.ModifyResubmitConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyResubmitConfigResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyResubmitConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.rules)) {
      request.rulesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rules, "Rules", "json");
    }

    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.rulesShrink)) {
      query["Rules"] = request.rulesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyResubmitConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyResubmitConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyResubmitConfigResponse({}));
  }

  /**
   * 修改Resubmit配置
   * 
   * @param request - ModifyResubmitConfigRequest
   * @returns ModifyResubmitConfigResponse
   */
  async modifyResubmitConfig(request: $_model.ModifyResubmitConfigRequest): Promise<$_model.ModifyResubmitConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyResubmitConfigWithOptions(request, runtime);
  }

  /**
   * 修改SQA配置
   * 
   * @param request - ModifySQAConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySQAConfigResponse
   */
  async modifySQAConfigWithOptions(request: $_model.ModifySQAConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySQAConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.SQAStatus)) {
      query["SQAStatus"] = request.SQAStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySQAConfig",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySQAConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifySQAConfigResponse({}));
  }

  /**
   * 修改SQA配置
   * 
   * @param request - ModifySQAConfigRequest
   * @returns ModifySQAConfigResponse
   */
  async modifySQAConfig(request: $_model.ModifySQAConfigRequest): Promise<$_model.ModifySQAConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySQAConfigWithOptions(request, runtime);
  }

  /**
   * Modifies the synchronization jobs for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifySyncJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySyncJobResponse
   */
  async modifySyncJobWithOptions(request: $_model.ModifySyncJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySyncJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sourceDBCluster)) {
      query["SourceDBCluster"] = request.sourceDBCluster;
    }

    if (!$dara.isNull(request.syncPlatform)) {
      query["SyncPlatform"] = request.syncPlatform;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySyncJob",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySyncJobResponse>(await this.callApi(params, req, runtime), new $_model.ModifySyncJobResponse({}));
  }

  /**
   * Modifies the synchronization jobs for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ModifySyncJobRequest
   * @returns ModifySyncJobResponse
   */
  async modifySyncJob(request: $_model.ModifySyncJobRequest): Promise<$_model.ModifySyncJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifySyncJobWithOptions(request, runtime);
  }

  /**
   * 修改LogHub投递规则
   * 
   * @param request - OperateLogHubRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateLogHubResponse
   */
  async operateLogHubWithOptions(request: $_model.OperateLogHubRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OperateLogHubResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.create)) {
      query["Create"] = request.create;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.deliverName)) {
      query["DeliverName"] = request.deliverName;
    }

    if (!$dara.isNull(request.deliverTime)) {
      query["DeliverTime"] = request.deliverTime;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.filterDirtyData)) {
      query["FilterDirtyData"] = request.filterDirtyData;
    }

    if (!$dara.isNull(request.logHubStores)) {
      query["LogHubStores"] = request.logHubStores;
    }

    if (!$dara.isNull(request.logStoreName)) {
      query["LogStoreName"] = request.logStoreName;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.schemaName)) {
      query["SchemaName"] = request.schemaName;
    }

    if (!$dara.isNull(request.tableName)) {
      query["TableName"] = request.tableName;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateLogHub",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateLogHubResponse>(await this.callApi(params, req, runtime), new $_model.OperateLogHubResponse({}));
  }

  /**
   * 修改LogHub投递规则
   * 
   * @param request - OperateLogHubRequest
   * @returns OperateLogHubResponse
   */
  async operateLogHub(request: $_model.OperateLogHubRequest): Promise<$_model.OperateLogHubResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.operateLogHubWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnectionWithOptions(request: $_model.ReleaseClusterPublicConnectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReleaseClusterPublicConnectionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseClusterPublicConnection",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReleaseClusterPublicConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ReleaseClusterPublicConnectionResponse({}));
  }

  /**
   * Releases the public endpoint of an AnalyticDB for MySQL cluster.
   * 
   * @param request - ReleaseClusterPublicConnectionRequest
   * @returns ReleaseClusterPublicConnectionResponse
   */
  async releaseClusterPublicConnection(request: $_model.ReleaseClusterPublicConnectionRequest): Promise<$_model.ReleaseClusterPublicConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.releaseClusterPublicConnectionWithOptions(request, runtime);
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPasswordWithOptions(request: $_model.ResetAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetAccountPassword",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountPasswordResponse({}));
  }

  /**
   * Resets the password of a database account for an AnalyticDB for MySQL cluster.
   * 
   * @param request - ResetAccountPasswordRequest
   * @returns ResetAccountPasswordResponse
   */
  async resetAccountPassword(request: $_model.ResetAccountPasswordRequest): Promise<$_model.ResetAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountPasswordWithOptions(request, runtime);
  }

  /**
   * 取消服务帐号授权
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermissionWithOptions(request: $_model.RevokeOperatorPermissionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeOperatorPermissionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RevokeOperatorPermission",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeOperatorPermissionResponse>(await this.callApi(params, req, runtime), new $_model.RevokeOperatorPermissionResponse({}));
  }

  /**
   * 取消服务帐号授权
   * 
   * @param request - RevokeOperatorPermissionRequest
   * @returns RevokeOperatorPermissionResponse
   */
  async revokeOperatorPermission(request: $_model.RevokeOperatorPermissionRequest): Promise<$_model.RevokeOperatorPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeOperatorPermissionWithOptions(request, runtime);
  }

  /**
   * Adds tags to an AnalyticDB for MySQL cluster.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to an AnalyticDB for MySQL cluster.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Disassociates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster from a database account.
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUserWithOptions(request: $_model.UnbindDBResourceGroupWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDBResourceGroupWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.groupUser)) {
      query["GroupUser"] = request.groupUser;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDBResourceGroupWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDBResourceGroupWithUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDBResourceGroupWithUserResponse({}));
  }

  /**
   * Disassociates a resource group of an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster from a database account.
   * 
   * @param request - UnbindDBResourceGroupWithUserRequest
   * @returns UnbindDBResourceGroupWithUserResponse
   */
  async unbindDBResourceGroupWithUser(request: $_model.UnbindDBResourceGroupWithUserRequest): Promise<$_model.UnbindDBResourceGroupWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDBResourceGroupWithUserWithOptions(request, runtime);
  }

  /**
   * Disassociates a database account from a resource group. This operation can be called only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - UnbindDBResourcePoolWithUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnbindDBResourcePoolWithUserResponse
   */
  async unbindDBResourcePoolWithUserWithOptions(request: $_model.UnbindDBResourcePoolWithUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UnbindDBResourcePoolWithUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.poolName)) {
      query["PoolName"] = request.poolName;
    }

    if (!$dara.isNull(request.poolUser)) {
      query["PoolUser"] = request.poolUser;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnbindDBResourcePoolWithUser",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnbindDBResourcePoolWithUserResponse>(await this.callApi(params, req, runtime), new $_model.UnbindDBResourcePoolWithUserResponse({}));
  }

  /**
   * Disassociates a database account from a resource group. This operation can be called only for AnalyticDB for MySQL clusters in elastic mode for Cluster Edition.
   * 
   * @param request - UnbindDBResourcePoolWithUserRequest
   * @returns UnbindDBResourcePoolWithUserResponse
   */
  async unbindDBResourcePoolWithUser(request: $_model.UnbindDBResourcePoolWithUserRequest): Promise<$_model.UnbindDBResourcePoolWithUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.unbindDBResourcePoolWithUserWithOptions(request, runtime);
  }

  /**
   * Removes all tags from AnalyticDB for MySQL clusters.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-03-15",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes all tags from AnalyticDB for MySQL clusters.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersionWithOptions(request: $_model.UpgradeKernelVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeKernelVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.switchMode)) {
      query["SwitchMode"] = request.switchMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeKernelVersion",
      version: "2019-03-15",
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
   * Updates the minor version of an AnalyticDB for MySQL cluster.
   * 
   * @param request - UpgradeKernelVersionRequest
   * @returns UpgradeKernelVersionResponse
   */
  async upgradeKernelVersion(request: $_model.UpgradeKernelVersionRequest): Promise<$_model.UpgradeKernelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeKernelVersionWithOptions(request, runtime);
  }

}
