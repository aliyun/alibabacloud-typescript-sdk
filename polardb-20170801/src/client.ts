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
      'cn-qingdao': "polardb.aliyuncs.com",
      'cn-beijing': "polardb.aliyuncs.com",
      'cn-wulanchabu': "polardb.aliyuncs.com",
      'cn-hangzhou': "polardb.aliyuncs.com",
      'cn-shanghai': "polardb.aliyuncs.com",
      'cn-shenzhen': "polardb.aliyuncs.com",
      'cn-guangzhou': "polardb.aliyuncs.com",
      'cn-hongkong': "polardb.aliyuncs.com",
      'cn-hangzhou-finance': "polardb.aliyuncs.com",
      'cn-shanghai-finance-1': "polardb.aliyuncs.com",
      'cn-shenzhen-finance-1': "polardb.aliyuncs.com",
      'cn-north-2-gov-1': "polardb.aliyuncs.com",
      'ap-northeast-2-pop': "polardb.aliyuncs.com",
      'cn-beijing-finance-1': "polardb.aliyuncs.com",
      'cn-beijing-finance-pop': "polardb.aliyuncs.com",
      'cn-beijing-gov-1': "polardb.aliyuncs.com",
      'cn-beijing-nu16-b01': "polardb.aliyuncs.com",
      'cn-edge-1': "polardb.aliyuncs.com",
      'cn-fujian': "polardb.aliyuncs.com",
      'cn-haidian-cm12-c01': "polardb.aliyuncs.com",
      'cn-hangzhou-bj-b01': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "polardb.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "polardb.aliyuncs.com",
      'cn-hangzhou-test-306': "polardb.aliyuncs.com",
      'cn-hongkong-finance-pop': "polardb.aliyuncs.com",
      'cn-huhehaote-nebula-1': "polardb.aliyuncs.com",
      'cn-qingdao-nebula': "polardb.aliyuncs.com",
      'cn-shanghai-et15-b01': "polardb.aliyuncs.com",
      'cn-shanghai-et2-b01': "polardb.aliyuncs.com",
      'cn-shanghai-inner': "polardb.aliyuncs.com",
      'cn-shanghai-internal-test-1': "polardb.aliyuncs.com",
      'cn-shenzhen-inner': "polardb.aliyuncs.com",
      'cn-shenzhen-st4-d01': "polardb.aliyuncs.com",
      'cn-shenzhen-su18-b01': "polardb.aliyuncs.com",
      'cn-wuhan': "polardb.aliyuncs.com",
      'cn-yushanfang': "polardb.aliyuncs.com",
      'cn-zhangbei': "polardb.aliyuncs.com",
      'cn-zhangbei-na61-b01': "polardb.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "polardb.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "polardb.aliyuncs.com",
      'eu-west-1-oxs': "polardb.aliyuncs.com",
      'rus-west-1-pop': "polardb.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("polardb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels O\\&M events at a time.
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasksWithOptions(request: $_model.CancelActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelActiveOperationTasksResponse> {
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

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelActiveOperationTasks",
      version: "2017-08-01",
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
   * Cancels O\\&M events at a time.
   * 
   * @param request - CancelActiveOperationTasksRequest
   * @returns CancelActiveOperationTasksResponse
   */
  async cancelActiveOperationTasks(request: $_model.CancelActiveOperationTasksRequest): Promise<$_model.CancelActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Cancels scheduled tasks that are not yet started.
   * 
   * @param request - CancelScheduleTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelScheduleTasksResponse
   */
  async cancelScheduleTasksWithOptions(request: $_model.CancelScheduleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelScheduleTasksResponse> {
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

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
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
      action: "CancelScheduleTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelScheduleTasksResponse>(await this.callApi(params, req, runtime), new $_model.CancelScheduleTasksResponse({}));
  }

  /**
   * Cancels scheduled tasks that are not yet started.
   * 
   * @param request - CancelScheduleTasksRequest
   * @returns CancelScheduleTasksResponse
   */
  async cancelScheduleTasks(request: $_model.CancelScheduleTasksRequest): Promise<$_model.CancelScheduleTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelScheduleTasksWithOptions(request, runtime);
  }

  /**
   * Checks whether an account name is valid or unique in a cluster.
   * 
   * @param request - CheckAccountNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountNameResponse
   */
  async checkAccountNameWithOptions(request: $_model.CheckAccountNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountNameResponse> {
    request.validate();
    let query = { };
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
      action: "CheckAccountName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountNameResponse({}));
  }

  /**
   * Checks whether an account name is valid or unique in a cluster.
   * 
   * @param request - CheckAccountNameRequest
   * @returns CheckAccountNameResponse
   */
  async checkAccountName(request: $_model.CheckAccountNameRequest): Promise<$_model.CheckAccountNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkAccountNameWithOptions(request, runtime);
  }

  /**
   * Checks whether a database name is valid or whether the name is already used by another database in the current cluster.
   * 
   * @param request - CheckDBNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDBNameResponse
   */
  async checkDBNameWithOptions(request: $_model.CheckDBNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDBNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "CheckDBName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDBNameResponse>(await this.callApi(params, req, runtime), new $_model.CheckDBNameResponse({}));
  }

  /**
   * Checks whether a database name is valid or whether the name is already used by another database in the current cluster.
   * 
   * @param request - CheckDBNameRequest
   * @returns CheckDBNameResponse
   */
  async checkDBName(request: $_model.CheckDBNameRequest): Promise<$_model.CheckDBNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDBNameWithOptions(request, runtime);
  }

  /**
   * Queries whether the cluster is authorized to use Key Management Service (KMS).
   * 
   * @param request - CheckKMSAuthorizedRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckKMSAuthorizedResponse
   */
  async checkKMSAuthorizedWithOptions(request: $_model.CheckKMSAuthorizedRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckKMSAuthorizedResponse> {
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

    if (!$dara.isNull(request.TDERegion)) {
      query["TDERegion"] = request.TDERegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckKMSAuthorized",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckKMSAuthorizedResponse>(await this.callApi(params, req, runtime), new $_model.CheckKMSAuthorizedResponse({}));
  }

  /**
   * Queries whether the cluster is authorized to use Key Management Service (KMS).
   * 
   * @param request - CheckKMSAuthorizedRequest
   * @returns CheckKMSAuthorizedResponse
   */
  async checkKMSAuthorized(request: $_model.CheckKMSAuthorizedRequest): Promise<$_model.CheckKMSAuthorizedResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkKMSAuthorizedWithOptions(request, runtime);
  }

  /**
   * Checks whether a service-linked role (SLR) is created.
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
      action: "CheckServiceLinkedRole",
      version: "2017-08-01",
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
   * Checks whether a service-linked role (SLR) is created.
   * 
   * @param request - CheckServiceLinkedRoleRequest
   * @returns CheckServiceLinkedRoleResponse
   */
  async checkServiceLinkedRole(request: $_model.CheckServiceLinkedRoleRequest): Promise<$_model.CheckServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * 关闭DB4AI
   * 
   * @param request - CloseAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseAITaskResponse
   */
  async closeAITaskWithOptions(request: $_model.CloseAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseAITaskResponse> {
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
      action: "CloseAITask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseAITaskResponse>(await this.callApi(params, req, runtime), new $_model.CloseAITaskResponse({}));
  }

  /**
   * 关闭DB4AI
   * 
   * @param request - CloseAITaskRequest
   * @returns CloseAITaskResponse
   */
  async closeAITask(request: $_model.CloseAITaskRequest): Promise<$_model.CloseAITaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeAITaskWithOptions(request, runtime);
  }

  /**
   * Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
   * 
   * @remarks
   *   You can call this operation to cancel the migration task before data migration.
   * *   You can call this operation to perform the migration task after data migration.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   * 
   * @param request - CloseDBClusterMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDBClusterMigrationResponse
   */
  async closeDBClusterMigrationWithOptions(request: $_model.CloseDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CloseDBClusterMigrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.continueEnableBinlog)) {
      query["ContinueEnableBinlog"] = request.continueEnableBinlog;
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
      action: "CloseDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new $_model.CloseDBClusterMigrationResponse({}));
  }

  /**
   * Cancels or completes the migration task that upgrades an RDS cluster to a PolarDB cluster.
   * 
   * @remarks
   *   You can call this operation to cancel the migration task before data migration.
   * *   You can call this operation to perform the migration task after data migration.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   * 
   * @param request - CloseDBClusterMigrationRequest
   * @returns CloseDBClusterMigrationResponse
   */
  async closeDBClusterMigration(request: $_model.CloseDBClusterMigrationRequest): Promise<$_model.CloseDBClusterMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.closeDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * Creates a database account for a PolarDB cluster.
   * 
   * @param request - CreateAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAccountResponse
   */
  async createAccountWithOptions(request: $_model.CreateAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAccountResponse> {
    request.validate();
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

    if (!$dara.isNull(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!$dara.isNull(request.accountType)) {
      query["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.privForAllDB)) {
      query["PrivForAllDB"] = request.privForAllDB;
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
      action: "CreateAccount",
      version: "2017-08-01",
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
   * Creates a database account for a PolarDB cluster.
   * 
   * @param request - CreateAccountRequest
   * @returns CreateAccountResponse
   */
  async createAccount(request: $_model.CreateAccountRequest): Promise<$_model.CreateAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAccountWithOptions(request, runtime);
  }

  /**
   * Generates a lightweight license activation code.
   * 
   * @param request - CreateActivationCodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateActivationCodeResponse
   */
  async createActivationCodeWithOptions(request: $_model.CreateActivationCodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateActivationCodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.macAddress)) {
      query["MacAddress"] = request.macAddress;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.systemIdentifier)) {
      query["SystemIdentifier"] = request.systemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateActivationCode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateActivationCodeResponse>(await this.callApi(params, req, runtime), new $_model.CreateActivationCodeResponse({}));
  }

  /**
   * Generates a lightweight license activation code.
   * 
   * @param request - CreateActivationCodeRequest
   * @returns CreateActivationCodeResponse
   */
  async createActivationCode(request: $_model.CreateActivationCodeRequest): Promise<$_model.CreateActivationCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createActivationCodeWithOptions(request, runtime);
  }

  /**
   * Creates a full snapshot backup for a PolarDB cluster.
   * 
   * @remarks
   * > 
   * *   You can manually create up to three backups for each cluster.
   * *   The `Exceeding the daily backup times of this DB cluster` error message indicates that three manual backups already exist in your cluster. You must delete existing backups before you call this operation to manually create backups. For more information about how to delete backups, see [Delete backups](https://help.aliyun.com/document_detail/98101.html).
   * *   After you call this operation, a backup task is created in the backend. The task may be time-consuming if you want to back up large amounts of data.
   * 
   * @param request - CreateBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBackupResponse
   */
  async createBackupWithOptions(request: $_model.CreateBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBackupResponse> {
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
      action: "CreateBackup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBackupResponse>(await this.callApi(params, req, runtime), new $_model.CreateBackupResponse({}));
  }

  /**
   * Creates a full snapshot backup for a PolarDB cluster.
   * 
   * @remarks
   * > 
   * *   You can manually create up to three backups for each cluster.
   * *   The `Exceeding the daily backup times of this DB cluster` error message indicates that three manual backups already exist in your cluster. You must delete existing backups before you call this operation to manually create backups. For more information about how to delete backups, see [Delete backups](https://help.aliyun.com/document_detail/98101.html).
   * *   After you call this operation, a backup task is created in the backend. The task may be time-consuming if you want to back up large amounts of data.
   * 
   * @param request - CreateBackupRequest
   * @returns CreateBackupResponse
   */
  async createBackup(request: $_model.CreateBackupRequest): Promise<$_model.CreateBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBackupWithOptions(request, runtime);
  }

  /**
   * Creates a cluster that is used to store cold data.
   * 
   * @param request - CreateColdStorageInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateColdStorageInstanceResponse
   */
  async createColdStorageInstanceWithOptions(request: $_model.CreateColdStorageInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateColdStorageInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.coldStorageInstanceDescription)) {
      query["ColdStorageInstanceDescription"] = request.coldStorageInstanceDescription;
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
      action: "CreateColdStorageInstance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateColdStorageInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateColdStorageInstanceResponse({}));
  }

  /**
   * Creates a cluster that is used to store cold data.
   * 
   * @param request - CreateColdStorageInstanceRequest
   * @returns CreateColdStorageInstanceResponse
   */
  async createColdStorageInstance(request: $_model.CreateColdStorageInstanceRequest): Promise<$_model.CreateColdStorageInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createColdStorageInstanceWithOptions(request, runtime);
  }

  /**
   * CreateDBCluster.
   * 
   * @param request - CreateDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterResponse
   */
  async createDBClusterWithOptions(request: $_model.CreateDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowShutDown)) {
      query["AllowShutDown"] = request.allowShutDown;
    }

    if (!$dara.isNull(request.architecture)) {
      query["Architecture"] = request.architecture;
    }

    if (!$dara.isNull(request.autoRenew)) {
      query["AutoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cloneDataPoint)) {
      query["CloneDataPoint"] = request.cloneDataPoint;
    }

    if (!$dara.isNull(request.clusterNetworkType)) {
      query["ClusterNetworkType"] = request.clusterNetworkType;
    }

    if (!$dara.isNull(request.creationCategory)) {
      query["CreationCategory"] = request.creationCategory;
    }

    if (!$dara.isNull(request.creationOption)) {
      query["CreationOption"] = request.creationOption;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBMinorVersion)) {
      query["DBMinorVersion"] = request.DBMinorVersion;
    }

    if (!$dara.isNull(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!$dara.isNull(request.DBNodeNum)) {
      query["DBNodeNum"] = request.DBNodeNum;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.defaultTimeZone)) {
      query["DefaultTimeZone"] = request.defaultTimeZone;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
    }

    if (!$dara.isNull(request.hotStandbyCluster)) {
      query["HotStandbyCluster"] = request.hotStandbyCluster;
    }

    if (!$dara.isNull(request.loosePolarLogBin)) {
      query["LoosePolarLogBin"] = request.loosePolarLogBin;
    }

    if (!$dara.isNull(request.looseXEngine)) {
      query["LooseXEngine"] = request.looseXEngine;
    }

    if (!$dara.isNull(request.looseXEngineUseMemoryPct)) {
      query["LooseXEngineUseMemoryPct"] = request.looseXEngineUseMemoryPct;
    }

    if (!$dara.isNull(request.lowerCaseTableNames)) {
      query["LowerCaseTableNames"] = request.lowerCaseTableNames;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
    }

    if (!$dara.isNull(request.proxyClass)) {
      query["ProxyClass"] = request.proxyClass;
    }

    if (!$dara.isNull(request.proxyType)) {
      query["ProxyType"] = request.proxyType;
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

    if (!$dara.isNull(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!$dara.isNull(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!$dara.isNull(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!$dara.isNull(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    if (!$dara.isNull(request.securityIPList)) {
      query["SecurityIPList"] = request.securityIPList;
    }

    if (!$dara.isNull(request.serverlessType)) {
      query["ServerlessType"] = request.serverlessType;
    }

    if (!$dara.isNull(request.sourceResourceId)) {
      query["SourceResourceId"] = request.sourceResourceId;
    }

    if (!$dara.isNull(request.sourceUid)) {
      query["SourceUid"] = request.sourceUid;
    }

    if (!$dara.isNull(request.standbyAZ)) {
      query["StandbyAZ"] = request.standbyAZ;
    }

    if (!$dara.isNull(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!$dara.isNull(request.storageEncryption)) {
      query["StorageEncryption"] = request.storageEncryption;
    }

    if (!$dara.isNull(request.storageEncryptionKey)) {
      query["StorageEncryptionKey"] = request.storageEncryptionKey;
    }

    if (!$dara.isNull(request.storagePayType)) {
      query["StoragePayType"] = request.storagePayType;
    }

    if (!$dara.isNull(request.storageSpace)) {
      query["StorageSpace"] = request.storageSpace;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    if (!$dara.isNull(request.strictConsistency)) {
      query["StrictConsistency"] = request.strictConsistency;
    }

    if (!$dara.isNull(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetMinorVersion)) {
      query["TargetMinorVersion"] = request.targetMinorVersion;
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
      version: "2017-08-01",
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
   * CreateDBCluster.
   * 
   * @param request - CreateDBClusterRequest
   * @returns CreateDBClusterResponse
   */
  async createDBCluster(request: $_model.CreateDBClusterRequest): Promise<$_model.CreateDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates a custom cluster endpoint for a PolarDB cluster.
   * 
   * @param request - CreateDBClusterEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBClusterEndpointResponse
   */
  async createDBClusterEndpointWithOptions(request: $_model.CreateDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBClusterEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoAddNewNodes)) {
      query["AutoAddNewNodes"] = request.autoAddNewNodes;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointDescription)) {
      query["DBEndpointDescription"] = request.DBEndpointDescription;
    }

    if (!$dara.isNull(request.endpointConfig)) {
      query["EndpointConfig"] = request.endpointConfig;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.polarSccTimeoutAction)) {
      query["PolarSccTimeoutAction"] = request.polarSccTimeoutAction;
    }

    if (!$dara.isNull(request.polarSccWaitTimeout)) {
      query["PolarSccWaitTimeout"] = request.polarSccWaitTimeout;
    }

    if (!$dara.isNull(request.readWriteMode)) {
      query["ReadWriteMode"] = request.readWriteMode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sccMode)) {
      query["SccMode"] = request.sccMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBClusterEndpointResponse({}));
  }

  /**
   * Creates a custom cluster endpoint for a PolarDB cluster.
   * 
   * @param request - CreateDBClusterEndpointRequest
   * @returns CreateDBClusterEndpointResponse
   */
  async createDBClusterEndpoint(request: $_model.CreateDBClusterEndpointRequest): Promise<$_model.CreateDBClusterEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * 
   * @remarks
   * > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * 
   * @param request - CreateDBEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBEndpointAddressResponse
   */
  async createDBEndpointAddressWithOptions(request: $_model.CreateDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
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

    if (!$dara.isNull(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.VPCId)) {
      query["VPCId"] = request.VPCId;
    }

    if (!$dara.isNull(request.zoneInfo)) {
      query["ZoneInfo"] = request.zoneInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBEndpointAddressResponse({}));
  }

  /**
   * Creates a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * 
   * @remarks
   * > You can create a public endpoint for the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * 
   * @param request - CreateDBEndpointAddressRequest
   * @returns CreateDBEndpointAddressResponse
   */
  async createDBEndpointAddress(request: $_model.CreateDBEndpointAddressRequest): Promise<$_model.CreateDBEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * Creates a database link.
   * 
   * @remarks
   * A database link can be used to connect two PolarDB for PostgreSQL(Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL(Compatible with Oracle) cluster to a user-created PostgreSQL database that is hosted on an Elastic Compute Service (ECS) instance. You can use database links to query data across clusters.
   * > *   You can create up to 10 database links for a cluster.
   * > *   Each database link connects a source cluster and a destination cluster.
   * > *   The source cluster and the destination cluster or the destination ECS instance must be located in the same region.
   * 
   * @param request - CreateDBLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBLinkResponse
   */
  async createDBLinkWithOptions(request: $_model.CreateDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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

    if (!$dara.isNull(request.sourceDBName)) {
      query["SourceDBName"] = request.sourceDBName;
    }

    if (!$dara.isNull(request.targetDBAccount)) {
      query["TargetDBAccount"] = request.targetDBAccount;
    }

    if (!$dara.isNull(request.targetDBInstanceName)) {
      query["TargetDBInstanceName"] = request.targetDBInstanceName;
    }

    if (!$dara.isNull(request.targetDBName)) {
      query["TargetDBName"] = request.targetDBName;
    }

    if (!$dara.isNull(request.targetDBPasswd)) {
      query["TargetDBPasswd"] = request.targetDBPasswd;
    }

    if (!$dara.isNull(request.targetIp)) {
      query["TargetIp"] = request.targetIp;
    }

    if (!$dara.isNull(request.targetPort)) {
      query["TargetPort"] = request.targetPort;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBLinkResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBLinkResponse({}));
  }

  /**
   * Creates a database link.
   * 
   * @remarks
   * A database link can be used to connect two PolarDB for PostgreSQL(Compatible with Oracle) clusters, or connect a PolarDB for PostgreSQL(Compatible with Oracle) cluster to a user-created PostgreSQL database that is hosted on an Elastic Compute Service (ECS) instance. You can use database links to query data across clusters.
   * > *   You can create up to 10 database links for a cluster.
   * > *   Each database link connects a source cluster and a destination cluster.
   * > *   The source cluster and the destination cluster or the destination ECS instance must be located in the same region.
   * 
   * @param request - CreateDBLinkRequest
   * @returns CreateDBLinkResponse
   */
  async createDBLink(request: $_model.CreateDBLinkRequest): Promise<$_model.CreateDBLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBLinkWithOptions(request, runtime);
  }

  /**
   * Adds a read-only node to a PolarDB cluster.
   * 
   * @param request - CreateDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDBNodesResponse
   */
  async createDBNodesWithOptions(request: $_model.CreateDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDBNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNode)) {
      query["DBNode"] = request.DBNode;
    }

    if (!$dara.isNull(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
    }

    if (!$dara.isNull(request.endpointBindList)) {
      query["EndpointBindList"] = request.endpointBindList;
    }

    if (!$dara.isNull(request.imciSwitch)) {
      query["ImciSwitch"] = request.imciSwitch;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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
      action: "CreateDBNodes",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.CreateDBNodesResponse({}));
  }

  /**
   * Adds a read-only node to a PolarDB cluster.
   * 
   * @param request - CreateDBNodesRequest
   * @returns CreateDBNodesResponse
   */
  async createDBNodes(request: $_model.CreateDBNodesRequest): Promise<$_model.CreateDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDBNodesWithOptions(request, runtime);
  }

  /**
   * Creates a database for a PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The cluster is in the Running state.
   * *   The cluster is unlocked.
   * 
   * @param request - CreateDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatabaseResponse
   */
  async createDatabaseWithOptions(request: $_model.CreateDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!$dara.isNull(request.characterSetName)) {
      query["CharacterSetName"] = request.characterSetName;
    }

    if (!$dara.isNull(request.collate)) {
      query["Collate"] = request.collate;
    }

    if (!$dara.isNull(request.ctype)) {
      query["Ctype"] = request.ctype;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "CreateDatabase",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateDatabaseResponse({}));
  }

  /**
   * Creates a database for a PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the following requirements are met:
   * *   The cluster is in the Running state.
   * *   The cluster is unlocked.
   * 
   * @param request - CreateDatabaseRequest
   * @returns CreateDatabaseResponse
   */
  async createDatabase(request: $_model.CreateDatabaseRequest): Promise<$_model.CreateDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createDatabaseWithOptions(request, runtime);
  }

  /**
   * 创建全球数据网络
   * 
   * @param request - CreateGlobalDataNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalDataNetworkResponse
   */
  async createGlobalDataNetworkWithOptions(request: $_model.CreateGlobalDataNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalDataNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.destinationFileSystemPath)) {
      query["DestinationFileSystemPath"] = request.destinationFileSystemPath;
    }

    if (!$dara.isNull(request.destinationId)) {
      query["DestinationId"] = request.destinationId;
    }

    if (!$dara.isNull(request.destinationRegion)) {
      query["DestinationRegion"] = request.destinationRegion;
    }

    if (!$dara.isNull(request.destinationType)) {
      query["DestinationType"] = request.destinationType;
    }

    if (!$dara.isNull(request.freezeSourceDuringSync)) {
      query["FreezeSourceDuringSync"] = request.freezeSourceDuringSync;
    }

    if (!$dara.isNull(request.sourceFileSystemPath)) {
      query["SourceFileSystemPath"] = request.sourceFileSystemPath;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceRegion)) {
      query["SourceRegion"] = request.sourceRegion;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalDataNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalDataNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalDataNetworkResponse({}));
  }

  /**
   * 创建全球数据网络
   * 
   * @param request - CreateGlobalDataNetworkRequest
   * @returns CreateGlobalDataNetworkResponse
   */
  async createGlobalDataNetwork(request: $_model.CreateGlobalDataNetworkRequest): Promise<$_model.CreateGlobalDataNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalDataNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a global database network (GDN).
   * 
   * @remarks
   * >  A cluster belongs to only one GDN.
   * 
   * @param request - CreateGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalDatabaseNetworkResponse
   */
  async createGlobalDatabaseNetworkWithOptions(request: $_model.CreateGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableGlobalDomainName)) {
      query["EnableGlobalDomainName"] = request.enableGlobalDomainName;
    }

    if (!$dara.isNull(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!$dara.isNull(request.GDNVersion)) {
      query["GDNVersion"] = request.GDNVersion;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalDatabaseNetworkResponse({}));
  }

  /**
   * Creates a global database network (GDN).
   * 
   * @remarks
   * >  A cluster belongs to only one GDN.
   * 
   * @param request - CreateGlobalDatabaseNetworkRequest
   * @returns CreateGlobalDatabaseNetworkResponse
   */
  async createGlobalDatabaseNetwork(request: $_model.CreateGlobalDatabaseNetworkRequest): Promise<$_model.CreateGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Creates a global IP whitelist template.
   * 
   * @param request - CreateGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroupWithOptions(request: $_model.CreateGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGlobalSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
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
      action: "CreateGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Creates a global IP whitelist template.
   * 
   * @param request - CreateGlobalSecurityIPGroupRequest
   * @returns CreateGlobalSecurityIPGroupResponse
   */
  async createGlobalSecurityIPGroup(request: $_model.CreateGlobalSecurityIPGroupRequest): Promise<$_model.CreateGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Creates or obtains a virtual license order.
   * 
   * @param request - CreateOrGetVirtualLicenseOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrGetVirtualLicenseOrderResponse
   */
  async createOrGetVirtualLicenseOrderWithOptions(request: $_model.CreateOrGetVirtualLicenseOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrGetVirtualLicenseOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.engine)) {
      query["Engine"] = request.engine;
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
      action: "CreateOrGetVirtualLicenseOrder",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrGetVirtualLicenseOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrGetVirtualLicenseOrderResponse({}));
  }

  /**
   * Creates or obtains a virtual license order.
   * 
   * @param request - CreateOrGetVirtualLicenseOrderRequest
   * @returns CreateOrGetVirtualLicenseOrderResponse
   */
  async createOrGetVirtualLicenseOrder(request: $_model.CreateOrGetVirtualLicenseOrderRequest): Promise<$_model.CreateOrGetVirtualLicenseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrGetVirtualLicenseOrderWithOptions(request, runtime);
  }

  /**
   * Creates a parameter template.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > You can call this operation only on a PolarDB for MySQL cluster.
   * 
   * @param request - CreateParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroupWithOptions(request: $_model.CreateParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
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

    if (!$dara.isNull(request.parameterGroupDesc)) {
      query["ParameterGroupDesc"] = request.parameterGroupDesc;
    }

    if (!$dara.isNull(request.parameterGroupName)) {
      query["ParameterGroupName"] = request.parameterGroupName;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
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
      action: "CreateParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateParameterGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateParameterGroupResponse({}));
  }

  /**
   * Creates a parameter template.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > You can call this operation only on a PolarDB for MySQL cluster.
   * 
   * @param request - CreateParameterGroupRequest
   * @returns CreateParameterGroupResponse
   */
  async createParameterGroup(request: $_model.CreateParameterGroupRequest): Promise<$_model.CreateParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParameterGroupWithOptions(request, runtime);
  }

  /**
   * Creates a service-linked role (SLR).
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
      action: "CreateServiceLinkedRole",
      version: "2017-08-01",
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
   * Creates a service-linked role (SLR).
   * 
   * @param request - CreateServiceLinkedRoleRequest
   * @returns CreateServiceLinkedRoleResponse
   */
  async createServiceLinkedRole(request: $_model.CreateServiceLinkedRoleRequest): Promise<$_model.CreateServiceLinkedRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createServiceLinkedRoleWithOptions(request, runtime);
  }

  /**
   * Purchases a storage plan.
   * 
   * @param request - CreateStoragePlanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStoragePlanResponse
   */
  async createStoragePlanWithOptions(request: $_model.CreateStoragePlanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStoragePlanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageClass)) {
      query["StorageClass"] = request.storageClass;
    }

    if (!$dara.isNull(request.storageType)) {
      query["StorageType"] = request.storageType;
    }

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStoragePlan",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStoragePlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateStoragePlanResponse({}));
  }

  /**
   * Purchases a storage plan.
   * 
   * @param request - CreateStoragePlanRequest
   * @returns CreateStoragePlanResponse
   */
  async createStoragePlan(request: $_model.CreateStoragePlanRequest): Promise<$_model.CreateStoragePlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStoragePlanWithOptions(request, runtime);
  }

  /**
   * Deletes a database account for a PolarDB cluster.
   * 
   * @remarks
   * > Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
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
      version: "2017-08-01",
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
   * Deletes a database account for a PolarDB cluster.
   * 
   * @remarks
   * > Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   * 
   * @param request - DeleteAccountRequest
   * @returns DeleteAccountResponse
   */
  async deleteAccount(request: $_model.DeleteAccountRequest): Promise<$_model.DeleteAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAccountWithOptions(request, runtime);
  }

  /**
   * 删除PolarDB应用
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationId)) {
      query["ApplicationId"] = request.applicationId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2017-08-01",
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
   * 删除PolarDB应用
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes the backup sets of a PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the cluster meets the following requirements:
   * *   The cluster is in the Running state.
   * *   The backup sets are in the Success state.
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
   * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
   * 
   * @param request - DeleteBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBackupResponse
   */
  async deleteBackupWithOptions(request: $_model.DeleteBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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
      action: "DeleteBackup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteBackupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteBackupResponse({}));
  }

  /**
   * Deletes the backup sets of a PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the cluster meets the following requirements:
   * *   The cluster is in the Running state.
   * *   The backup sets are in the Success state.
   * > *   You can call the [DescribeBackups](https://help.aliyun.com/document_detail/98102.html) operation to query the status of backup sets.
   * >*   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks
   * 
   * @param request - DeleteBackupRequest
   * @returns DeleteBackupResponse
   */
  async deleteBackup(request: $_model.DeleteBackupRequest): Promise<$_model.DeleteBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteBackupWithOptions(request, runtime);
  }

  /**
   * Releases a pay-as-you-go PolarDB cluster.
   * 
   * @param request - DeleteDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterResponse
   */
  async deleteDBClusterWithOptions(request: $_model.DeleteDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
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
      action: "DeleteDBCluster",
      version: "2017-08-01",
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
   * Releases a pay-as-you-go PolarDB cluster.
   * 
   * @param request - DeleteDBClusterRequest
   * @returns DeleteDBClusterResponse
   */
  async deleteDBCluster(request: $_model.DeleteDBClusterRequest): Promise<$_model.DeleteDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterWithOptions(request, runtime);
  }

  /**
   * Releases a custom cluster endpoint of a PolarDB cluster.
   * 
   * @param request - DeleteDBClusterEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBClusterEndpointResponse
   */
  async deleteDBClusterEndpointWithOptions(request: $_model.DeleteDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBClusterEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
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
      action: "DeleteDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBClusterEndpointResponse({}));
  }

  /**
   * Releases a custom cluster endpoint of a PolarDB cluster.
   * 
   * @param request - DeleteDBClusterEndpointRequest
   * @returns DeleteDBClusterEndpointResponse
   */
  async deleteDBClusterEndpoint(request: $_model.DeleteDBClusterEndpointRequest): Promise<$_model.DeleteDBClusterEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
   * 
   * @remarks
   * > *   You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * > *   Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
   * 
   * @param request - DeleteDBEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBEndpointAddressResponse
   */
  async deleteDBEndpointAddressWithOptions(request: $_model.DeleteDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
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
      action: "DeleteDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBEndpointAddressResponse({}));
  }

  /**
   * Releases the public endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, and custom cluster endpoint.
   * 
   * @remarks
   * > *   You can delete a public-facing or classic network endpoint of the primary endpoint, the default cluster endpoint, or a custom cluster endpoint.
   * > *   Classic network endpoints are supported only on the China site (aliyun.com). Therefore, you do not need to delete classic network endpoints on the International site (alibabacloud.com).
   * 
   * @param request - DeleteDBEndpointAddressRequest
   * @returns DeleteDBEndpointAddressResponse
   */
  async deleteDBEndpointAddress(request: $_model.DeleteDBEndpointAddressRequest): Promise<$_model.DeleteDBEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * Deletes a database link from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @param request - DeleteDBLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBLinkResponse
   */
  async deleteDBLinkWithOptions(request: $_model.DeleteDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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
      action: "DeleteDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBLinkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBLinkResponse({}));
  }

  /**
   * Deletes a database link from a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @param request - DeleteDBLinkRequest
   * @returns DeleteDBLinkResponse
   */
  async deleteDBLink(request: $_model.DeleteDBLinkRequest): Promise<$_model.DeleteDBLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBLinkWithOptions(request, runtime);
  }

  /**
   * Deletes a read-only node from a PolarDB cluster.
   * 
   * @param request - DeleteDBNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDBNodesResponse
   */
  async deleteDBNodesWithOptions(request: $_model.DeleteDBNodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDBNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!$dara.isNull(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
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
      action: "DeleteDBNodes",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDBNodesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDBNodesResponse({}));
  }

  /**
   * Deletes a read-only node from a PolarDB cluster.
   * 
   * @param request - DeleteDBNodesRequest
   * @returns DeleteDBNodesResponse
   */
  async deleteDBNodes(request: $_model.DeleteDBNodesRequest): Promise<$_model.DeleteDBNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDBNodesWithOptions(request, runtime);
  }

  /**
   * Deletes a database from a PolarDB cluster.
   * 
   * @remarks
   * >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
   * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
   * 
   * @param request - DeleteDatabaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabaseWithOptions(request: $_model.DeleteDatabaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDatabaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "DeleteDatabase",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDatabaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDatabaseResponse({}));
  }

  /**
   * Deletes a database from a PolarDB cluster.
   * 
   * @remarks
   * >- The cluster must be in the Running state and unlocked. Otherwise, the specified database cannot be deleted.
   * >- The delete operation is performed in an asynchronous manner. A long period of time may be required to delete a large database. A success response for this operation only indicates that the request to delete the database is sent. You must query the database to check whether the database is deleted.
   * 
   * @param request - DeleteDatabaseRequest
   * @returns DeleteDatabaseResponse
   */
  async deleteDatabase(request: $_model.DeleteDatabaseRequest): Promise<$_model.DeleteDatabaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteDatabaseWithOptions(request, runtime);
  }

  /**
   * DeleteGlobalDataNetwork
   * 
   * @param request - DeleteGlobalDataNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalDataNetworkResponse
   */
  async deleteGlobalDataNetworkWithOptions(request: $_model.DeleteGlobalDataNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalDataNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.networkId)) {
      query["NetworkId"] = request.networkId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGlobalDataNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGlobalDataNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGlobalDataNetworkResponse({}));
  }

  /**
   * DeleteGlobalDataNetwork
   * 
   * @param request - DeleteGlobalDataNetworkRequest
   * @returns DeleteGlobalDataNetworkResponse
   */
  async deleteGlobalDataNetwork(request: $_model.DeleteGlobalDataNetworkRequest): Promise<$_model.DeleteGlobalDataNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalDataNetworkWithOptions(request, runtime);
  }

  /**
   * Deletes a global database network (GDN).
   * 
   * @remarks
   * >  You can delete a GDN only when the GDN includes only a primary cluster.
   * 
   * @param request - DeleteGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalDatabaseNetworkResponse
   */
  async deleteGlobalDatabaseNetworkWithOptions(request: $_model.DeleteGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGlobalDatabaseNetworkResponse({}));
  }

  /**
   * Deletes a global database network (GDN).
   * 
   * @remarks
   * >  You can delete a GDN only when the GDN includes only a primary cluster.
   * 
   * @param request - DeleteGlobalDatabaseNetworkRequest
   * @returns DeleteGlobalDatabaseNetworkResponse
   */
  async deleteGlobalDatabaseNetwork(request: $_model.DeleteGlobalDatabaseNetworkRequest): Promise<$_model.DeleteGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Deletes a global IP whitelist template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroupWithOptions(request: $_model.DeleteGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGlobalSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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
      action: "DeleteGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Deletes a global IP whitelist template.
   * 
   * @param request - DeleteGlobalSecurityIPGroupRequest
   * @returns DeleteGlobalSecurityIPGroupResponse
   */
  async deleteGlobalSecurityIPGroup(request: $_model.DeleteGlobalSecurityIPGroupRequest): Promise<$_model.DeleteGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Deletes a data masking rule.
   * 
   * @param request - DeleteMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMaskingRulesResponse
   */
  async deleteMaskingRulesWithOptions(request: $_model.DeleteMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMaskingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.interfaceVersion)) {
      query["InterfaceVersion"] = request.interfaceVersion;
    }

    if (!$dara.isNull(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMaskingRulesResponse({}));
  }

  /**
   * Deletes a data masking rule.
   * 
   * @param request - DeleteMaskingRulesRequest
   * @returns DeleteMaskingRulesResponse
   */
  async deleteMaskingRules(request: $_model.DeleteMaskingRulesRequest): Promise<$_model.DeleteMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMaskingRulesWithOptions(request, runtime);
  }

  /**
   * Deletes a parameter template of a PolarDB cluster.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and quickly apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * >  When you delete a parameter template, the parameter settings that are applied to PolarDB clusters are not affected.
   * 
   * @param request - DeleteParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterGroupResponse
   */
  async deleteParameterGroupWithOptions(request: $_model.DeleteParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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
      action: "DeleteParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParameterGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParameterGroupResponse({}));
  }

  /**
   * Deletes a parameter template of a PolarDB cluster.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and quickly apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * >  When you delete a parameter template, the parameter settings that are applied to PolarDB clusters are not affected.
   * 
   * @param request - DeleteParameterGroupRequest
   * @returns DeleteParameterGroupResponse
   */
  async deleteParameterGroup(request: $_model.DeleteParameterGroupRequest): Promise<$_model.DeleteParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParameterGroupWithOptions(request, runtime);
  }

  /**
   * 获取ai容器性能指标
   * 
   * @param request - DescribeAIDBClusterPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAIDBClusterPerformanceResponse
   */
  async describeAIDBClusterPerformanceWithOptions(request: $_model.DescribeAIDBClusterPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAIDBClusterPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAIDBClusterPerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAIDBClusterPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAIDBClusterPerformanceResponse({}));
  }

  /**
   * 获取ai容器性能指标
   * 
   * @param request - DescribeAIDBClusterPerformanceRequest
   * @returns DescribeAIDBClusterPerformanceResponse
   */
  async describeAIDBClusterPerformance(request: $_model.DescribeAIDBClusterPerformanceRequest): Promise<$_model.DescribeAIDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAIDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the status of the PolarDB for AI feature.
   * 
   * @param request - DescribeAITaskStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAITaskStatusResponse
   */
  async describeAITaskStatusWithOptions(request: $_model.DescribeAITaskStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAITaskStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAITaskStatus",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAITaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAITaskStatusResponse({}));
  }

  /**
   * Queries the status of the PolarDB for AI feature.
   * 
   * @param request - DescribeAITaskStatusRequest
   * @returns DescribeAITaskStatusResponse
   */
  async describeAITaskStatus(request: $_model.DescribeAITaskStatusRequest): Promise<$_model.DescribeAITaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAITaskStatusWithOptions(request, runtime);
  }

  /**
   * Queries information about a database account of a PolarDB cluster.
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

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAccounts",
      version: "2017-08-01",
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
   * Queries information about a database account of a PolarDB cluster.
   * 
   * @param request - DescribeAccountsRequest
   * @returns DescribeAccountsResponse
   */
  async describeAccounts(request: $_model.DescribeAccountsRequest): Promise<$_model.DescribeAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAccountsWithOptions(request, runtime);
  }

  /**
   * Queries the details of an activation code.
   * 
   * @param request - DescribeActivationCodeDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActivationCodeDetailsResponse
   */
  async describeActivationCodeDetailsWithOptions(request: $_model.DescribeActivationCodeDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActivationCodeDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.activationCodeId)) {
      query["ActivationCodeId"] = request.activationCodeId;
    }

    if (!$dara.isNull(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
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
      action: "DescribeActivationCodeDetails",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActivationCodeDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActivationCodeDetailsResponse({}));
  }

  /**
   * Queries the details of an activation code.
   * 
   * @param request - DescribeActivationCodeDetailsRequest
   * @returns DescribeActivationCodeDetailsResponse
   */
  async describeActivationCodeDetails(request: $_model.DescribeActivationCodeDetailsRequest): Promise<$_model.DescribeActivationCodeDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActivationCodeDetailsWithOptions(request, runtime);
  }

  /**
   * Queries a list of activation codes.
   * 
   * @param request - DescribeActivationCodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeActivationCodesResponse
   */
  async describeActivationCodesWithOptions(request: $_model.DescribeActivationCodesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeActivationCodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!$dara.isNull(request.macAddress)) {
      query["MacAddress"] = request.macAddress;
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

    if (!$dara.isNull(request.systemIdentifier)) {
      query["SystemIdentifier"] = request.systemIdentifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeActivationCodes",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeActivationCodesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeActivationCodesResponse({}));
  }

  /**
   * Queries a list of activation codes.
   * 
   * @param request - DescribeActivationCodesRequest
   * @returns DescribeActivationCodesResponse
   */
  async describeActivationCodes(request: $_model.DescribeActivationCodesRequest): Promise<$_model.DescribeActivationCodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActivationCodesWithOptions(request, runtime);
  }

  /**
   * 用户侧查询运维任务
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

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
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
      version: "2017-08-01",
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
   * 用户侧查询运维任务
   * 
   * @param request - DescribeActiveOperationTasksRequest
   * @returns DescribeActiveOperationTasksResponse
   */
  async describeActiveOperationTasks(request: $_model.DescribeActiveOperationTasksRequest): Promise<$_model.DescribeActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Queries the auto-renewal attributes of a subscription PolarDB cluster.
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
      version: "2017-08-01",
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
   * Queries the auto-renewal attributes of a subscription PolarDB cluster.
   * 
   * @param request - DescribeAutoRenewAttributeRequest
   * @returns DescribeAutoRenewAttributeResponse
   */
  async describeAutoRenewAttribute(request: $_model.DescribeAutoRenewAttributeRequest): Promise<$_model.DescribeAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Queries backup logs and the URLs to download the backup logs.
   * 
   * @param request - DescribeBackupLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupLogsResponse
   */
  async describeBackupLogsWithOptions(request: $_model.DescribeBackupLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
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
      action: "DescribeBackupLogs",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupLogsResponse({}));
  }

  /**
   * Queries backup logs and the URLs to download the backup logs.
   * 
   * @param request - DescribeBackupLogsRequest
   * @returns DescribeBackupLogsResponse
   */
  async describeBackupLogs(request: $_model.DescribeBackupLogsRequest): Promise<$_model.DescribeBackupLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupLogsWithOptions(request, runtime);
  }

  /**
   * Queries the automatic backup policy of a PolarDB cluster.
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
      version: "2017-08-01",
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
   * Queries the automatic backup policy of a PolarDB cluster.
   * 
   * @param request - DescribeBackupPolicyRequest
   * @returns DescribeBackupPolicyResponse
   */
  async describeBackupPolicy(request: $_model.DescribeBackupPolicyRequest): Promise<$_model.DescribeBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupPolicyWithOptions(request, runtime);
  }

  /**
   * 查询备份集所在地域信息
   * 
   * @param request - DescribeBackupRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupRegionsResponse
   */
  async describeBackupRegionsWithOptions(request: $_model.DescribeBackupRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupRegionsResponse> {
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
      action: "DescribeBackupRegions",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupRegionsResponse({}));
  }

  /**
   * 查询备份集所在地域信息
   * 
   * @param request - DescribeBackupRegionsRequest
   * @returns DescribeBackupRegionsResponse
   */
  async describeBackupRegions(request: $_model.DescribeBackupRegionsRequest): Promise<$_model.DescribeBackupRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the backup tasks of a PolarDB cluster.
   * 
   * @param request - DescribeBackupTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasksWithOptions(request: $_model.DescribeBackupTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeBackupTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupJobId)) {
      query["BackupJobId"] = request.backupJobId;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
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
      action: "DescribeBackupTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeBackupTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeBackupTasksResponse({}));
  }

  /**
   * Queries the backup tasks of a PolarDB cluster.
   * 
   * @param request - DescribeBackupTasksRequest
   * @returns DescribeBackupTasksResponse
   */
  async describeBackupTasks(request: $_model.DescribeBackupTasksRequest): Promise<$_model.DescribeBackupTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupTasksWithOptions(request, runtime);
  }

  /**
   * Queries the backup details of a PolarDB cluster.
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

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
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
      version: "2017-08-01",
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
   * Queries the backup details of a PolarDB cluster.
   * 
   * @param request - DescribeBackupsRequest
   * @returns DescribeBackupsResponse
   */
  async describeBackups(request: $_model.DescribeBackupsRequest): Promise<$_model.DescribeBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeBackupsWithOptions(request, runtime);
  }

  /**
   * Queries character sets that are supported by a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeCharacterSetNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCharacterSetNameResponse
   */
  async describeCharacterSetNameWithOptions(request: $_model.DescribeCharacterSetNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCharacterSetNameResponse> {
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
      action: "DescribeCharacterSetName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCharacterSetNameResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCharacterSetNameResponse({}));
  }

  /**
   * Queries character sets that are supported by a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeCharacterSetNameRequest
   * @returns DescribeCharacterSetNameResponse
   */
  async describeCharacterSetName(request: $_model.DescribeCharacterSetNameRequest): Promise<$_model.DescribeCharacterSetNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCharacterSetNameWithOptions(request, runtime);
  }

  /**
   * Queries the specifications of a cluster.
   * 
   * @param request - DescribeClassListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeClassListResponse
   */
  async describeClassListWithOptions(request: $_model.DescribeClassListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeClassListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.masterHa)) {
      query["MasterHa"] = request.masterHa;
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
      action: "DescribeClassList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeClassListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeClassListResponse({}));
  }

  /**
   * Queries the specifications of a cluster.
   * 
   * @param request - DescribeClassListRequest
   * @returns DescribeClassListResponse
   */
  async describeClassList(request: $_model.DescribeClassListRequest): Promise<$_model.DescribeClassListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeClassListWithOptions(request, runtime);
  }

  /**
   * Queries the IP address whitelists and security groups of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterAccessWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAccessWhitelistResponse
   */
  async describeDBClusterAccessWhitelistWithOptions(request: $_model.DescribeDBClusterAccessWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAccessWhitelistResponse> {
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
      action: "DescribeDBClusterAccessWhitelist",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAccessWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAccessWhitelistResponse({}));
  }

  /**
   * Queries the IP address whitelists and security groups of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterAccessWhitelistRequest
   * @returns DescribeDBClusterAccessWhitelistResponse
   */
  async describeDBClusterAccessWhitelist(request: $_model.DescribeDBClusterAccessWhitelistRequest): Promise<$_model.DescribeDBClusterAccessWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  /**
   * Queries information about a PolarDB cluster.
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

    if (!$dara.isNull(request.describeType)) {
      query["DescribeType"] = request.describeType;
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
      action: "DescribeDBClusterAttribute",
      version: "2017-08-01",
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
   * Queries information about a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterAttributeRequest
   * @returns DescribeDBClusterAttributeResponse
   */
  async describeDBClusterAttribute(request: $_model.DescribeDBClusterAttributeRequest): Promise<$_model.DescribeDBClusterAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAttributeWithOptions(request, runtime);
  }

  /**
   * Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
   * 
   * @param request - DescribeDBClusterAuditLogCollectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAuditLogCollectorResponse
   */
  async describeDBClusterAuditLogCollectorWithOptions(request: $_model.DescribeDBClusterAuditLogCollectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAuditLogCollectorResponse> {
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
      action: "DescribeDBClusterAuditLogCollector",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAuditLogCollectorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAuditLogCollectorResponse({}));
  }

  /**
   * Describe SQL collector for a PolarDB cluster. Features related to SQL collector include audit log and SQL Explorer.
   * 
   * @param request - DescribeDBClusterAuditLogCollectorRequest
   * @returns DescribeDBClusterAuditLogCollectorResponse
   */
  async describeDBClusterAuditLogCollector(request: $_model.DescribeDBClusterAuditLogCollectorRequest): Promise<$_model.DescribeDBClusterAuditLogCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  /**
   * Queries available resources in a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterAvailableResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterAvailableResourcesResponse
   */
  async describeDBClusterAvailableResourcesWithOptions(request: $_model.DescribeDBClusterAvailableResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterAvailableResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
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
      action: "DescribeDBClusterAvailableResources",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterAvailableResourcesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterAvailableResourcesResponse({}));
  }

  /**
   * Queries available resources in a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterAvailableResourcesRequest
   * @returns DescribeDBClusterAvailableResourcesResponse
   */
  async describeDBClusterAvailableResources(request: $_model.DescribeDBClusterAvailableResourcesRequest): Promise<$_model.DescribeDBClusterAvailableResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterAvailableResourcesWithOptions(request, runtime);
  }

  /**
   * Queries whether the source IP address can access a cluster.
   * 
   * @param request - DescribeDBClusterConnectivityRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterConnectivityResponse
   */
  async describeDBClusterConnectivityWithOptions(request: $_model.DescribeDBClusterConnectivityRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterConnectivityResponse> {
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

    if (!$dara.isNull(request.sourceIpAddress)) {
      query["SourceIpAddress"] = request.sourceIpAddress;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterConnectivity",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterConnectivityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterConnectivityResponse({}));
  }

  /**
   * Queries whether the source IP address can access a cluster.
   * 
   * @param request - DescribeDBClusterConnectivityRequest
   * @returns DescribeDBClusterConnectivityResponse
   */
  async describeDBClusterConnectivity(request: $_model.DescribeDBClusterConnectivityRequest): Promise<$_model.DescribeDBClusterConnectivityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterConnectivityWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterEndpointsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterEndpointsResponse
   */
  async describeDBClusterEndpointsWithOptions(request: $_model.DescribeDBClusterEndpointsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterEndpointsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.describeType)) {
      query["DescribeType"] = request.describeType;
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
      action: "DescribeDBClusterEndpoints",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterEndpointsResponse({}));
  }

  /**
   * Queries the endpoints of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterEndpointsRequest
   * @returns DescribeDBClusterEndpointsResponse
   */
  async describeDBClusterEndpoints(request: $_model.DescribeDBClusterEndpointsRequest): Promise<$_model.DescribeDBClusterEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterEndpointsWithOptions(request, runtime);
  }

  /**
   * The ID of the synchronous task.
   * 
   * @remarks
   * The ID of the request.
   * 
   * @param request - DescribeDBClusterMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterMigrationResponse
   */
  async describeDBClusterMigrationWithOptions(request: $_model.DescribeDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterMigrationResponse> {
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
      action: "DescribeDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterMigrationResponse({}));
  }

  /**
   * The ID of the synchronous task.
   * 
   * @remarks
   * The ID of the request.
   * 
   * @param request - DescribeDBClusterMigrationRequest
   * @returns DescribeDBClusterMigrationResponse
   */
  async describeDBClusterMigration(request: $_model.DescribeDBClusterMigrationRequest): Promise<$_model.DescribeDBClusterMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * Queries the interval at which the monitoring data of a PolarDB cluster is collected.
   * 
   * @param request - DescribeDBClusterMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterMonitorResponse
   */
  async describeDBClusterMonitorWithOptions(request: $_model.DescribeDBClusterMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterMonitorResponse> {
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
      action: "DescribeDBClusterMonitor",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterMonitorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterMonitorResponse({}));
  }

  /**
   * Queries the interval at which the monitoring data of a PolarDB cluster is collected.
   * 
   * @param request - DescribeDBClusterMonitorRequest
   * @returns DescribeDBClusterMonitorResponse
   */
  async describeDBClusterMonitor(request: $_model.DescribeDBClusterMonitorRequest): Promise<$_model.DescribeDBClusterMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterMonitorWithOptions(request, runtime);
  }

  /**
   * Queries the parameters of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterParametersResponse
   */
  async describeDBClusterParametersWithOptions(request: $_model.DescribeDBClusterParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.describeType)) {
      query["DescribeType"] = request.describeType;
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
      action: "DescribeDBClusterParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterParametersResponse({}));
  }

  /**
   * Queries the parameters of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterParametersRequest
   * @returns DescribeDBClusterParametersResponse
   */
  async describeDBClusterParameters(request: $_model.DescribeDBClusterParametersRequest): Promise<$_model.DescribeDBClusterParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterParametersWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of a PolarDB cluster.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
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

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subGroupName)) {
      query["SubGroupName"] = request.subGroupName;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDBClusterPerformance",
      version: "2017-08-01",
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
   * Queries the performance data of a PolarDB cluster.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   * 
   * @param request - DescribeDBClusterPerformanceRequest
   * @returns DescribeDBClusterPerformanceResponse
   */
  async describeDBClusterPerformance(request: $_model.DescribeDBClusterPerformanceRequest): Promise<$_model.DescribeDBClusterPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the Secure Sockets Layer (SSL) settings of a PolarDB cluster.
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
      version: "2017-08-01",
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
   * Queries the Secure Sockets Layer (SSL) settings of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterSSLRequest
   * @returns DescribeDBClusterSSLResponse
   */
  async describeDBClusterSSL(request: $_model.DescribeDBClusterSSLRequest): Promise<$_model.DescribeDBClusterSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * Queries the serverless configurations of a serverless cluster.
   * 
   * @param request - DescribeDBClusterServerlessConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterServerlessConfResponse
   */
  async describeDBClusterServerlessConfWithOptions(request: $_model.DescribeDBClusterServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterServerlessConfResponse> {
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
      action: "DescribeDBClusterServerlessConf",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterServerlessConfResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterServerlessConfResponse({}));
  }

  /**
   * Queries the serverless configurations of a serverless cluster.
   * 
   * @param request - DescribeDBClusterServerlessConfRequest
   * @returns DescribeDBClusterServerlessConfResponse
   */
  async describeDBClusterServerlessConf(request: $_model.DescribeDBClusterServerlessConfRequest): Promise<$_model.DescribeDBClusterServerlessConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterServerlessConfWithOptions(request, runtime);
  }

  /**
   * Queries the transparent data encryption (TDE) settings of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterTDEResponse
   */
  async describeDBClusterTDEWithOptions(request: $_model.DescribeDBClusterTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterTDEResponse> {
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
      action: "DescribeDBClusterTDE",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterTDEResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterTDEResponse({}));
  }

  /**
   * Queries the transparent data encryption (TDE) settings of a PolarDB cluster.
   * 
   * @param request - DescribeDBClusterTDERequest
   * @returns DescribeDBClusterTDEResponse
   */
  async describeDBClusterTDE(request: $_model.DescribeDBClusterTDERequest): Promise<$_model.DescribeDBClusterTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterTDEWithOptions(request, runtime);
  }

  /**
   * Queries the information about the database engine version of a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClusterVersionResponse
   */
  async describeDBClusterVersionWithOptions(request: $_model.DescribeDBClusterVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClusterVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.describeType)) {
      query["DescribeType"] = request.describeType;
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
      action: "DescribeDBClusterVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClusterVersionResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClusterVersionResponse({}));
  }

  /**
   * Queries the information about the database engine version of a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeDBClusterVersionRequest
   * @returns DescribeDBClusterVersionResponse
   */
  async describeDBClusterVersion(request: $_model.DescribeDBClusterVersionRequest): Promise<$_model.DescribeDBClusterVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClusterVersionWithOptions(request, runtime);
  }

  /**
   * Queries PolarDB clusters or the clusters that can be accessed by an authorized RAM user.
   * 
   * @param request - DescribeDBClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersResponse
   */
  async describeDBClustersWithOptions(request: $_model.DescribeDBClustersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionString)) {
      query["ConnectionString"] = request.connectionString;
    }

    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!$dara.isNull(request.DBClusterStatus)) {
      query["DBClusterStatus"] = request.DBClusterStatus;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.describeType)) {
      query["DescribeType"] = request.describeType;
    }

    if (!$dara.isNull(request.expired)) {
      query["Expired"] = request.expired;
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

    if (!$dara.isNull(request.payType)) {
      query["PayType"] = request.payType;
    }

    if (!$dara.isNull(request.recentCreationInterval)) {
      query["RecentCreationInterval"] = request.recentCreationInterval;
    }

    if (!$dara.isNull(request.recentExpirationInterval)) {
      query["RecentExpirationInterval"] = request.recentExpirationInterval;
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
      version: "2017-08-01",
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
   * Queries PolarDB clusters or the clusters that can be accessed by an authorized RAM user.
   * 
   * @param request - DescribeDBClustersRequest
   * @returns DescribeDBClustersResponse
   */
  async describeDBClusters(request: $_model.DescribeDBClustersRequest): Promise<$_model.DescribeDBClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClustersWithOptions(request, runtime);
  }

  /**
   * Queries the information about PolarDB clusters that contain backup sets in a region.
   * 
   * @param request - DescribeDBClustersWithBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBClustersWithBackupsResponse
   */
  async describeDBClustersWithBackupsWithOptions(request: $_model.DescribeDBClustersWithBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBClustersWithBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.isDeleted)) {
      query["IsDeleted"] = request.isDeleted;
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
      action: "DescribeDBClustersWithBackups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBClustersWithBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBClustersWithBackupsResponse({}));
  }

  /**
   * Queries the information about PolarDB clusters that contain backup sets in a region.
   * 
   * @param request - DescribeDBClustersWithBackupsRequest
   * @returns DescribeDBClustersWithBackupsResponse
   */
  async describeDBClustersWithBackups(request: $_model.DescribeDBClustersWithBackupsRequest): Promise<$_model.DescribeDBClustersWithBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBClustersWithBackupsWithOptions(request, runtime);
  }

  /**
   * Queries attributes such as character sets and collations supported by a database in a PolarDB cluster.
   * 
   * @param request - DescribeDBInitializeVariableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBInitializeVariableResponse
   */
  async describeDBInitializeVariableWithOptions(request: $_model.DescribeDBInitializeVariableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBInitializeVariableResponse> {
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
      action: "DescribeDBInitializeVariable",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBInitializeVariableResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBInitializeVariableResponse({}));
  }

  /**
   * Queries attributes such as character sets and collations supported by a database in a PolarDB cluster.
   * 
   * @param request - DescribeDBInitializeVariableRequest
   * @returns DescribeDBInitializeVariableResponse
   */
  async describeDBInitializeVariable(request: $_model.DescribeDBInitializeVariableRequest): Promise<$_model.DescribeDBInitializeVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBInitializeVariableWithOptions(request, runtime);
  }

  /**
   * Queries the database links of a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @remarks
   * > You can query only the database links that use a PolarDB for Oracle cluster as the source.
   * 
   * @param request - DescribeDBLinksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBLinksResponse
   */
  async describeDBLinksWithOptions(request: $_model.DescribeDBLinksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBLinksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBLinkName)) {
      query["DBLinkName"] = request.DBLinkName;
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
      action: "DescribeDBLinks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBLinksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBLinksResponse({}));
  }

  /**
   * Queries the database links of a PolarDB for PostgreSQL (Compatible with Oracle) cluster.
   * 
   * @remarks
   * > You can query only the database links that use a PolarDB for Oracle cluster as the source.
   * 
   * @param request - DescribeDBLinksRequest
   * @returns DescribeDBLinksResponse
   */
  async describeDBLinks(request: $_model.DescribeDBLinksRequest): Promise<$_model.DescribeDBLinksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBLinksWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of a node in a PolarDB cluster.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   * 
   * @param request - DescribeDBNodePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformanceWithOptions(request: $_model.DescribeDBNodePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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
      action: "DescribeDBNodePerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBNodePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBNodePerformanceResponse({}));
  }

  /**
   * Queries the performance data of a node in a PolarDB cluster.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * >  By default, the monitoring data is collected once every 60 seconds. You can call the [ModifyDBClusterMonitor](https://help.aliyun.com/document_detail/159557.html) operation to set the data collection interval to every 5 seconds.
   * 
   * @param request - DescribeDBNodePerformanceRequest
   * @returns DescribeDBNodePerformanceResponse
   */
  async describeDBNodePerformance(request: $_model.DescribeDBNodePerformanceRequest): Promise<$_model.DescribeDBNodePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBNodePerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the parameters of a specified node in a cluster.
   * 
   * @param request - DescribeDBNodesParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBNodesParametersResponse
   */
  async describeDBNodesParametersWithOptions(request: $_model.DescribeDBNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBNodesParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
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
      action: "DescribeDBNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBNodesParametersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBNodesParametersResponse({}));
  }

  /**
   * Queries the parameters of a specified node in a cluster.
   * 
   * @param request - DescribeDBNodesParametersRequest
   * @returns DescribeDBNodesParametersResponse
   */
  async describeDBNodesParameters(request: $_model.DescribeDBNodesParametersRequest): Promise<$_model.DescribeDBNodesParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBNodesParametersWithOptions(request, runtime);
  }

  /**
   * Queries the performance data of PolarProxy.
   * 
   * @remarks
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeDBProxyPerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformanceWithOptions(request: $_model.DescribeDBProxyPerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDBProxyPerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
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
      action: "DescribeDBProxyPerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDBProxyPerformanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDBProxyPerformanceResponse({}));
  }

  /**
   * Queries the performance data of PolarProxy.
   * 
   * @remarks
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeDBProxyPerformanceRequest
   * @returns DescribeDBProxyPerformanceResponse
   */
  async describeDBProxyPerformance(request: $_model.DescribeDBProxyPerformanceRequest): Promise<$_model.DescribeDBProxyPerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDBProxyPerformanceWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of a cluster in Database Autonomy Service (DAS).
   * 
   * @param request - DescribeDasConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDasConfigResponse
   */
  async describeDasConfigWithOptions(request: $_model.DescribeDasConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDasConfigResponse> {
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
      action: "DescribeDasConfig",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDasConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDasConfigResponse({}));
  }

  /**
   * Queries the configurations of a cluster in Database Autonomy Service (DAS).
   * 
   * @param request - DescribeDasConfigRequest
   * @returns DescribeDasConfigResponse
   */
  async describeDasConfig(request: $_model.DescribeDasConfigRequest): Promise<$_model.DescribeDasConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDasConfigWithOptions(request, runtime);
  }

  /**
   * Queries the information about databases in a PolarDB cluster.
   * 
   * @param request - DescribeDatabasesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDatabasesResponse
   */
  async describeDatabasesWithOptions(request: $_model.DescribeDatabasesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDatabasesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDatabases",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDatabasesResponse({}));
  }

  /**
   * Queries the information about databases in a PolarDB cluster.
   * 
   * @param request - DescribeDatabasesRequest
   * @returns DescribeDatabasesResponse
   */
  async describeDatabases(request: $_model.DescribeDatabasesRequest): Promise<$_model.DescribeDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDatabasesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the backup sets in a released PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the PolarDB cluster is in the **Released** state. You must also confirm that the **Retain All Backups Permanently** or **Retain Last Automatic Backup Permanently** backup retention policy takes effect after you release the cluster. If you delete all backup sets after the cluster is released, you cannot use this API operation to query the cluster.
   * >  You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
   * 
   * @param request - DescribeDetachedBackupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDetachedBackupsResponse
   */
  async describeDetachedBackupsWithOptions(request: $_model.DescribeDetachedBackupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDetachedBackupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.backupMode)) {
      query["BackupMode"] = request.backupMode;
    }

    if (!$dara.isNull(request.backupRegion)) {
      query["BackupRegion"] = request.backupRegion;
    }

    if (!$dara.isNull(request.backupStatus)) {
      query["BackupStatus"] = request.backupStatus;
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
      action: "DescribeDetachedBackups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDetachedBackupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDetachedBackupsResponse({}));
  }

  /**
   * Queries the information about the backup sets in a released PolarDB cluster.
   * 
   * @remarks
   * Before you call this operation, make sure that the PolarDB cluster is in the **Released** state. You must also confirm that the **Retain All Backups Permanently** or **Retain Last Automatic Backup Permanently** backup retention policy takes effect after you release the cluster. If you delete all backup sets after the cluster is released, you cannot use this API operation to query the cluster.
   * >  You can call the [DescribeDBClusterAttribute](https://help.aliyun.com/document_detail/98181.html) operation to query the cluster status.
   * 
   * @param request - DescribeDetachedBackupsRequest
   * @returns DescribeDetachedBackupsResponse
   */
  async describeDetachedBackups(request: $_model.DescribeDetachedBackupsRequest): Promise<$_model.DescribeDetachedBackupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDetachedBackupsWithOptions(request, runtime);
  }

  /**
   * DescribeGlobalDataNetworkList
   * 
   * @param request - DescribeGlobalDataNetworkListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDataNetworkListResponse
   */
  async describeGlobalDataNetworkListWithOptions(request: $_model.DescribeGlobalDataNetworkListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDataNetworkListResponse> {
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
      action: "DescribeGlobalDataNetworkList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDataNetworkListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalDataNetworkListResponse({}));
  }

  /**
   * DescribeGlobalDataNetworkList
   * 
   * @param request - DescribeGlobalDataNetworkListRequest
   * @returns DescribeGlobalDataNetworkListResponse
   */
  async describeGlobalDataNetworkList(request: $_model.DescribeGlobalDataNetworkListRequest): Promise<$_model.DescribeGlobalDataNetworkListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDataNetworkListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a Global Database Network (GDN).
   * 
   * @param request - DescribeGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDatabaseNetworkResponse
   */
  async describeGlobalDatabaseNetworkWithOptions(request: $_model.DescribeGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalDatabaseNetworkResponse({}));
  }

  /**
   * Queries the information about a Global Database Network (GDN).
   * 
   * @param request - DescribeGlobalDatabaseNetworkRequest
   * @returns DescribeGlobalDatabaseNetworkResponse
   */
  async describeGlobalDatabaseNetwork(request: $_model.DescribeGlobalDatabaseNetworkRequest): Promise<$_model.DescribeGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Queries the information about all Global Database Networks (GDNs) that belong to an account.
   * 
   * @param request - DescribeGlobalDatabaseNetworksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalDatabaseNetworksResponse
   */
  async describeGlobalDatabaseNetworksWithOptions(request: $_model.DescribeGlobalDatabaseNetworksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalDatabaseNetworksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.filterRegion)) {
      query["FilterRegion"] = request.filterRegion;
    }

    if (!$dara.isNull(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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
      action: "DescribeGlobalDatabaseNetworks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalDatabaseNetworksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalDatabaseNetworksResponse({}));
  }

  /**
   * Queries the information about all Global Database Networks (GDNs) that belong to an account.
   * 
   * @param request - DescribeGlobalDatabaseNetworksRequest
   * @returns DescribeGlobalDatabaseNetworksResponse
   */
  async describeGlobalDatabaseNetworks(request: $_model.DescribeGlobalDatabaseNetworksRequest): Promise<$_model.DescribeGlobalDatabaseNetworksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalDatabaseNetworksWithOptions(request, runtime);
  }

  /**
   * Queries global IP whitelist templates.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroupWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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
      action: "DescribeGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Queries global IP whitelist templates.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRequest
   * @returns DescribeGlobalSecurityIPGroupResponse
   */
  async describeGlobalSecurityIPGroup(request: $_model.DescribeGlobalSecurityIPGroupRequest): Promise<$_model.DescribeGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Queries the relationship between a cluster and a global IP whitelist template.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelationWithOptions(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
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
      action: "DescribeGlobalSecurityIPGroupRelation",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.DescribeGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * Queries the relationship between a cluster and a global IP whitelist template.
   * 
   * @param request - DescribeGlobalSecurityIPGroupRelationRequest
   * @returns DescribeGlobalSecurityIPGroupRelationResponse
   */
  async describeGlobalSecurityIPGroupRelation(request: $_model.DescribeGlobalSecurityIPGroupRelationRequest): Promise<$_model.DescribeGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * 查询实例高可用相关日志
   * 
   * @param request - DescribeHALogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHALogsResponse
   */
  async describeHALogsWithOptions(request: $_model.DescribeHALogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHALogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHALogs",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHALogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHALogsResponse({}));
  }

  /**
   * 查询实例高可用相关日志
   * 
   * @param request - DescribeHALogsRequest
   * @returns DescribeHALogsResponse
   */
  async describeHALogs(request: $_model.DescribeHALogsRequest): Promise<$_model.DescribeHALogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHALogsWithOptions(request, runtime);
  }

  /**
   * 任务中心任务列表
   * 
   * @param request - DescribeHistoryTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasksWithOptions(request: $_model.DescribeHistoryTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeHistoryTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromExecTime)) {
      query["FromExecTime"] = request.fromExecTime;
    }

    if (!$dara.isNull(request.fromStartTime)) {
      query["FromStartTime"] = request.fromStartTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    if (!$dara.isNull(request.toExecTime)) {
      query["ToExecTime"] = request.toExecTime;
    }

    if (!$dara.isNull(request.toStartTime)) {
      query["ToStartTime"] = request.toStartTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeHistoryTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeHistoryTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeHistoryTasksResponse({}));
  }

  /**
   * 任务中心任务列表
   * 
   * @param request - DescribeHistoryTasksRequest
   * @returns DescribeHistoryTasksResponse
   */
  async describeHistoryTasks(request: $_model.DescribeHistoryTasksRequest): Promise<$_model.DescribeHistoryTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeHistoryTasksWithOptions(request, runtime);
  }

  /**
   * Queries the information of a license order.
   * 
   * @param request - DescribeLicenseOrderDetailsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLicenseOrderDetailsResponse
   */
  async describeLicenseOrderDetailsWithOptions(request: $_model.DescribeLicenseOrderDetailsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLicenseOrderDetailsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
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
      action: "DescribeLicenseOrderDetails",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLicenseOrderDetailsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLicenseOrderDetailsResponse({}));
  }

  /**
   * Queries the information of a license order.
   * 
   * @param request - DescribeLicenseOrderDetailsRequest
   * @returns DescribeLicenseOrderDetailsResponse
   */
  async describeLicenseOrderDetails(request: $_model.DescribeLicenseOrderDetailsRequest): Promise<$_model.DescribeLicenseOrderDetailsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLicenseOrderDetailsWithOptions(request, runtime);
  }

  /**
   * Queries a list of license orders.
   * 
   * @param request - DescribeLicenseOrdersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLicenseOrdersResponse
   */
  async describeLicenseOrdersWithOptions(request: $_model.DescribeLicenseOrdersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLicenseOrdersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliyunOrderId)) {
      query["AliyunOrderId"] = request.aliyunOrderId;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.packageType)) {
      query["PackageType"] = request.packageType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.purchaseChannel)) {
      query["PurchaseChannel"] = request.purchaseChannel;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.virtualOrder)) {
      query["VirtualOrder"] = request.virtualOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLicenseOrders",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLicenseOrdersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLicenseOrdersResponse({}));
  }

  /**
   * Queries a list of license orders.
   * 
   * @param request - DescribeLicenseOrdersRequest
   * @returns DescribeLicenseOrdersResponse
   */
  async describeLicenseOrders(request: $_model.DescribeLicenseOrdersRequest): Promise<$_model.DescribeLicenseOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLicenseOrdersWithOptions(request, runtime);
  }

  /**
   * Queries the retention policy of log backups in a PolarDB cluster.
   * 
   * @param request - DescribeLogBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogBackupPolicyResponse
   */
  async describeLogBackupPolicyWithOptions(request: $_model.DescribeLogBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogBackupPolicyResponse> {
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
      action: "DescribeLogBackupPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogBackupPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogBackupPolicyResponse({}));
  }

  /**
   * Queries the retention policy of log backups in a PolarDB cluster.
   * 
   * @param request - DescribeLogBackupPolicyRequest
   * @returns DescribeLogBackupPolicyResponse
   */
  async describeLogBackupPolicy(request: $_model.DescribeLogBackupPolicyRequest): Promise<$_model.DescribeLogBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
   * 
   * @param request - DescribeMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMaskingRulesResponse
   */
  async describeMaskingRulesWithOptions(request: $_model.DescribeMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMaskingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.interfaceVersion)) {
      query["InterfaceVersion"] = request.interfaceVersion;
    }

    if (!$dara.isNull(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMaskingRulesResponse({}));
  }

  /**
   * Queries the data masking rules of a PolarDB cluster or the information about a specified masking rule.
   * 
   * @param request - DescribeMaskingRulesRequest
   * @returns DescribeMaskingRulesResponse
   */
  async describeMaskingRules(request: $_model.DescribeMaskingRulesRequest): Promise<$_model.DescribeMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMaskingRulesWithOptions(request, runtime);
  }

  /**
   * Queries the details of the databases or tables that can be restored.
   * 
   * @param request - DescribeMetaListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMetaListResponse
   */
  async describeMetaListWithOptions(request: $_model.DescribeMetaListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMetaListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.getDbName)) {
      query["GetDbName"] = request.getDbName;
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

    if (!$dara.isNull(request.regionCode)) {
      query["RegionCode"] = request.regionCode;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMetaList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMetaListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMetaListResponse({}));
  }

  /**
   * Queries the details of the databases or tables that can be restored.
   * 
   * @param request - DescribeMetaListRequest
   * @returns DescribeMetaListResponse
   */
  async describeMetaList(request: $_model.DescribeMetaListRequest): Promise<$_model.DescribeMetaListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMetaListWithOptions(request, runtime);
  }

  /**
   * Queries the information about a parameter template.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This parameter is valid only for a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeParameterGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroupWithOptions(request: $_model.DescribeParameterGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
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
      action: "DescribeParameterGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterGroupResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterGroupResponse({}));
  }

  /**
   * Queries the information about a parameter template.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This parameter is valid only for a PolarDB for MySQL cluster.
   * 
   * @param request - DescribeParameterGroupRequest
   * @returns DescribeParameterGroupResponse
   */
  async describeParameterGroup(request: $_model.DescribeParameterGroupRequest): Promise<$_model.DescribeParameterGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupWithOptions(request, runtime);
  }

  /**
   * Queries parameter templates that are available in a specified region.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeParameterGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroupsWithOptions(request: $_model.DescribeParameterGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
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
      action: "DescribeParameterGroups",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterGroupsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterGroupsResponse({}));
  }

  /**
   * Queries parameter templates that are available in a specified region.
   * 
   * @remarks
   * You can use parameter templates to manage multiple parameters at a time and apply existing parameters to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeParameterGroupsRequest
   * @returns DescribeParameterGroupsResponse
   */
  async describeParameterGroups(request: $_model.DescribeParameterGroupsRequest): Promise<$_model.DescribeParameterGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the default parameters in a cluster.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplatesWithOptions(request: $_model.DescribeParameterTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeParameterTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
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
      action: "DescribeParameterTemplates",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeParameterTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeParameterTemplatesResponse({}));
  }

  /**
   * Queries the default parameters in a cluster.
   * 
   * @param request - DescribeParameterTemplatesRequest
   * @returns DescribeParameterTemplatesResponse
   */
  async describeParameterTemplates(request: $_model.DescribeParameterTemplatesRequest): Promise<$_model.DescribeParameterTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeParameterTemplatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a pending event.
   * 
   * @param request - DescribePendingMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePendingMaintenanceActionResponse
   */
  async describePendingMaintenanceActionWithOptions(request: $_model.DescribePendingMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePendingMaintenanceActionResponse> {
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

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePendingMaintenanceAction",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePendingMaintenanceActionResponse>(await this.callApi(params, req, runtime), new $_model.DescribePendingMaintenanceActionResponse({}));
  }

  /**
   * Queries the information about a pending event.
   * 
   * @param request - DescribePendingMaintenanceActionRequest
   * @returns DescribePendingMaintenanceActionResponse
   */
  async describePendingMaintenanceAction(request: $_model.DescribePendingMaintenanceActionRequest): Promise<$_model.DescribePendingMaintenanceActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * Queries the numbers of scheduled events for different types of tasks.
   * 
   * @param request - DescribePendingMaintenanceActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePendingMaintenanceActionsResponse
   */
  async describePendingMaintenanceActionsWithOptions(request: $_model.DescribePendingMaintenanceActionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePendingMaintenanceActionsResponse> {
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
      action: "DescribePendingMaintenanceActions",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePendingMaintenanceActionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribePendingMaintenanceActionsResponse({}));
  }

  /**
   * Queries the numbers of scheduled events for different types of tasks.
   * 
   * @param request - DescribePendingMaintenanceActionsRequest
   * @returns DescribePendingMaintenanceActionsResponse
   */
  async describePendingMaintenanceActions(request: $_model.DescribePendingMaintenanceActionsRequest): Promise<$_model.DescribePendingMaintenanceActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePendingMaintenanceActionsWithOptions(request, runtime);
  }

  /**
   * Queries whether the SQL Explorer feature is enabled for the cluster.
   * 
   * @param request - DescribePolarSQLCollectorPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePolarSQLCollectorPolicyResponse
   */
  async describePolarSQLCollectorPolicyWithOptions(request: $_model.DescribePolarSQLCollectorPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePolarSQLCollectorPolicyResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePolarSQLCollectorPolicy",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePolarSQLCollectorPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribePolarSQLCollectorPolicyResponse({}));
  }

  /**
   * Queries whether the SQL Explorer feature is enabled for the cluster.
   * 
   * @param request - DescribePolarSQLCollectorPolicyRequest
   * @returns DescribePolarSQLCollectorPolicyResponse
   */
  async describePolarSQLCollectorPolicy(request: $_model.DescribePolarSQLCollectorPolicyRequest): Promise<$_model.DescribePolarSQLCollectorPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePolarSQLCollectorPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the regions and zones available for PolarDB.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
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
      action: "DescribeRegions",
      version: "2017-08-01",
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
   * Queries the regions and zones available for PolarDB.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the details of all scheduled tasks.
   * 
   * @param request - DescribeScheduleTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScheduleTasksResponse
   */
  async describeScheduleTasksWithOptions(request: $_model.DescribeScheduleTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeScheduleTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterDescription)) {
      query["DBClusterDescription"] = request.DBClusterDescription;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
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

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScheduleTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeScheduleTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeScheduleTasksResponse({}));
  }

  /**
   * Queries the details of all scheduled tasks.
   * 
   * @param request - DescribeScheduleTasksRequest
   * @returns DescribeScheduleTasksResponse
   */
  async describeScheduleTasks(request: $_model.DescribeScheduleTasksRequest): Promise<$_model.DescribeScheduleTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScheduleTasksWithOptions(request, runtime);
  }

  /**
   * Slow Log Details
   * 
   * @remarks
   * >- Only PolarDB MySQL Edition clusters support calling this interface.
   * >- Starting from September 1, 2024, due to the optimization of the SQL template algorithm, when calling this interface, the value of the SQLHash field will change. For more details, please refer to [Notice] Optimization of Slow SQL Template Algorithm (~~2845725~~).
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

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
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

    if (!$dara.isNull(request.SQLHASH)) {
      query["SQLHASH"] = request.SQLHASH;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSlowLogRecords",
      version: "2017-08-01",
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
   * Slow Log Details
   * 
   * @remarks
   * >- Only PolarDB MySQL Edition clusters support calling this interface.
   * >- Starting from September 1, 2024, due to the optimization of the SQL template algorithm, when calling this interface, the value of the SQLHash field will change. For more details, please refer to [Notice] Optimization of Slow SQL Template Algorithm (~~2845725~~).
   * 
   * @param request - DescribeSlowLogRecordsRequest
   * @returns DescribeSlowLogRecordsResponse
   */
  async describeSlowLogRecords(request: $_model.DescribeSlowLogRecordsRequest): Promise<$_model.DescribeSlowLogRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogRecordsWithOptions(request, runtime);
  }

  /**
   * Queries the statistics about the slow query logs of a PolarDB cluster.
   * 
   * @remarks
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeSlowLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSlowLogsResponse
   */
  async describeSlowLogsWithOptions(request: $_model.DescribeSlowLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSlowLogsResponse> {
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
      action: "DescribeSlowLogs",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSlowLogsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSlowLogsResponse({}));
  }

  /**
   * Queries the statistics about the slow query logs of a PolarDB cluster.
   * 
   * @remarks
   * > This operation is applicable only to PolarDB for MySQL clusters.
   * 
   * @param request - DescribeSlowLogsRequest
   * @returns DescribeSlowLogsResponse
   */
  async describeSlowLogs(request: $_model.DescribeSlowLogsRequest): Promise<$_model.DescribeSlowLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSlowLogsWithOptions(request, runtime);
  }

  /**
   * Queries the status of the tasks that are generated based on API operations, such as the status of instance creation tasks.
   * 
   * @remarks
   *   You can call this operation to view the details of a task that is generated by a specific API operation or in the PolarDB console. The system calls the specific API operation when you perform an operation in the PolarDB console. For example, you can view the details of the task when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation or [create a cluster](https://help.aliyun.com/document_detail/58769.html) in the PolarDB console.
   * *   You can view the details of tasks that are generated only when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create a cluster and `CreationOption` is not set to `CreateGdnStandby`.
   * 
   * @param request - DescribeTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTasksResponse
   */
  async describeTasksWithOptions(request: $_model.DescribeTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTasks",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTasksResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTasksResponse({}));
  }

  /**
   * Queries the status of the tasks that are generated based on API operations, such as the status of instance creation tasks.
   * 
   * @remarks
   *   You can call this operation to view the details of a task that is generated by a specific API operation or in the PolarDB console. The system calls the specific API operation when you perform an operation in the PolarDB console. For example, you can view the details of the task when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation or [create a cluster](https://help.aliyun.com/document_detail/58769.html) in the PolarDB console.
   * *   You can view the details of tasks that are generated only when you call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create a cluster and `CreationOption` is not set to `CreateGdnStandby`.
   * 
   * @param request - DescribeTasksRequest
   * @returns DescribeTasksResponse
   */
  async describeTasks(request: $_model.DescribeTasksRequest): Promise<$_model.DescribeTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeTasksWithOptions(request, runtime);
  }

  /**
   * Queries the Key Management Service (KMS)-managed customer master keys (CMKs) that are used to encrypt data in a PolarDB cluster.
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyListWithOptions(request: $_model.DescribeUserEncryptionKeyListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
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

    if (!$dara.isNull(request.TDERegion)) {
      query["TDERegion"] = request.TDERegion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUserEncryptionKeyList",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUserEncryptionKeyListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUserEncryptionKeyListResponse({}));
  }

  /**
   * Queries the Key Management Service (KMS)-managed customer master keys (CMKs) that are used to encrypt data in a PolarDB cluster.
   * 
   * @param request - DescribeUserEncryptionKeyListRequest
   * @returns DescribeUserEncryptionKeyListResponse
   */
  async describeUserEncryptionKeyList(request: $_model.DescribeUserEncryptionKeyListRequest): Promise<$_model.DescribeUserEncryptionKeyListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUserEncryptionKeyListWithOptions(request, runtime);
  }

  /**
   * Queries a vSwitch.
   * 
   * @param request - DescribeVSwitchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitchesWithOptions(request: $_model.DescribeVSwitchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeVSwitchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dedicatedHostGroupId)) {
      query["DedicatedHostGroupId"] = request.dedicatedHostGroupId;
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
      action: "DescribeVSwitches",
      version: "2017-08-01",
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
   * Queries a vSwitch.
   * 
   * @param request - DescribeVSwitchesRequest
   * @returns DescribeVSwitchesResponse
   */
  async describeVSwitches(request: $_model.DescribeVSwitchesRequest): Promise<$_model.DescribeVSwitchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVSwitchesWithOptions(request, runtime);
  }

  /**
   * Disables a stable serverless cluster.
   * 
   * @param request - DisableDBClusterServerlessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableDBClusterServerlessResponse
   */
  async disableDBClusterServerlessWithOptions(request: $_model.DisableDBClusterServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DisableDBClusterServerlessResponse> {
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
      action: "DisableDBClusterServerless",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableDBClusterServerlessResponse>(await this.callApi(params, req, runtime), new $_model.DisableDBClusterServerlessResponse({}));
  }

  /**
   * Disables a stable serverless cluster.
   * 
   * @param request - DisableDBClusterServerlessRequest
   * @returns DisableDBClusterServerlessResponse
   */
  async disableDBClusterServerless(request: $_model.DisableDBClusterServerlessRequest): Promise<$_model.DisableDBClusterServerlessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.disableDBClusterServerlessWithOptions(request, runtime);
  }

  /**
   * Enables a stable serverless cluster.
   * 
   * @param request - EnableDBClusterServerlessRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableDBClusterServerlessResponse
   */
  async enableDBClusterServerlessWithOptions(request: $_model.EnableDBClusterServerlessRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableDBClusterServerlessResponse> {
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

    if (!$dara.isNull(request.scaleApRoNumMax)) {
      query["ScaleApRoNumMax"] = request.scaleApRoNumMax;
    }

    if (!$dara.isNull(request.scaleApRoNumMin)) {
      query["ScaleApRoNumMin"] = request.scaleApRoNumMin;
    }

    if (!$dara.isNull(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!$dara.isNull(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!$dara.isNull(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!$dara.isNull(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableDBClusterServerless",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableDBClusterServerlessResponse>(await this.callApi(params, req, runtime), new $_model.EnableDBClusterServerlessResponse({}));
  }

  /**
   * Enables a stable serverless cluster.
   * 
   * @param request - EnableDBClusterServerlessRequest
   * @returns EnableDBClusterServerlessResponse
   */
  async enableDBClusterServerless(request: $_model.EnableDBClusterServerlessRequest): Promise<$_model.EnableDBClusterServerlessResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableDBClusterServerlessWithOptions(request, runtime);
  }

  /**
   * Modifies the status of SQL firewall rules for a cluster.
   * 
   * @param request - EnableFirewallRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableFirewallRulesResponse
   */
  async enableFirewallRulesWithOptions(request: $_model.EnableFirewallRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EnableFirewallRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
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

    if (!$dara.isNull(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableFirewallRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableFirewallRulesResponse>(await this.callApi(params, req, runtime), new $_model.EnableFirewallRulesResponse({}));
  }

  /**
   * Modifies the status of SQL firewall rules for a cluster.
   * 
   * @param request - EnableFirewallRulesRequest
   * @returns EnableFirewallRulesResponse
   */
  async enableFirewallRules(request: $_model.EnableFirewallRulesRequest): Promise<$_model.EnableFirewallRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.enableFirewallRulesWithOptions(request, runtime);
  }

  /**
   * Evaluates available resources.
   * 
   * @param request - EvaluateRegionResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateRegionResourceResponse
   */
  async evaluateRegionResourceWithOptions(request: $_model.EvaluateRegionResourceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.EvaluateRegionResourceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBInstanceConnType)) {
      query["DBInstanceConnType"] = request.DBInstanceConnType;
    }

    if (!$dara.isNull(request.DBNodeClass)) {
      query["DBNodeClass"] = request.DBNodeClass;
    }

    if (!$dara.isNull(request.DBType)) {
      query["DBType"] = request.DBType;
    }

    if (!$dara.isNull(request.DBVersion)) {
      query["DBVersion"] = request.DBVersion;
    }

    if (!$dara.isNull(request.dispenseMode)) {
      query["DispenseMode"] = request.dispenseMode;
    }

    if (!$dara.isNull(request.needMaxScaleLink)) {
      query["NeedMaxScaleLink"] = request.needMaxScaleLink;
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

    if (!$dara.isNull(request.subDomain)) {
      query["SubDomain"] = request.subDomain;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateRegionResource",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EvaluateRegionResourceResponse>(await this.callApi(params, req, runtime), new $_model.EvaluateRegionResourceResponse({}));
  }

  /**
   * Evaluates available resources.
   * 
   * @param request - EvaluateRegionResourceRequest
   * @returns EvaluateRegionResourceResponse
   */
  async evaluateRegionResource(request: $_model.EvaluateRegionResourceRequest): Promise<$_model.EvaluateRegionResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.evaluateRegionResourceWithOptions(request, runtime);
  }

  /**
   * Performs a manual failover to promote a read-only node to the primary node in a PolarDB cluster.
   * 
   * @param request - FailoverDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailoverDBClusterResponse
   */
  async failoverDBClusterWithOptions(request: $_model.FailoverDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailoverDBClusterResponse> {
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

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.rollBackForDisaster)) {
      query["RollBackForDisaster"] = request.rollBackForDisaster;
    }

    if (!$dara.isNull(request.targetDBNodeId)) {
      query["TargetDBNodeId"] = request.targetDBNodeId;
    }

    if (!$dara.isNull(request.targetZoneType)) {
      query["TargetZoneType"] = request.targetZoneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailoverDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FailoverDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.FailoverDBClusterResponse({}));
  }

  /**
   * Performs a manual failover to promote a read-only node to the primary node in a PolarDB cluster.
   * 
   * @param request - FailoverDBClusterRequest
   * @returns FailoverDBClusterResponse
   */
  async failoverDBCluster(request: $_model.FailoverDBClusterRequest): Promise<$_model.FailoverDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failoverDBClusterWithOptions(request, runtime);
  }

  /**
   * Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
   * 
   * @remarks
   * > *   An account can be authorized to access one or more databases.
   * > *   If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
   * > *   Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   * > *   You can call this operation only on a PolarDB for MySQL cluster.
   * > *   By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
   * 
   * @param request - GrantAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilegeWithOptions(request: $_model.GrantAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GrantAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPrivilege)) {
      query["AccountPrivilege"] = request.accountPrivilege;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "GrantAccountPrivilege",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.GrantAccountPrivilegeResponse({}));
  }

  /**
   * Grants a standard account the permissions to access one or more databases in a specified PolarDB cluster.
   * 
   * @remarks
   * > *   An account can be authorized to access one or more databases.
   * > *   If the specified account already has the access permissions on the specified databases, the operation returns a successful response.
   * > *   Before you call this operation, make sure that the cluster is in the Running state. Otherwise, the operation fails.
   * > *   You can call this operation only on a PolarDB for MySQL cluster.
   * > *   By default, a privileged account for a cluster has all the permissions on the databases in the cluster.
   * 
   * @param request - GrantAccountPrivilegeRequest
   * @returns GrantAccountPrivilegeResponse
   */
  async grantAccountPrivilege(request: $_model.GrantAccountPrivilegeRequest): Promise<$_model.GrantAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.grantAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more PolarDB clusters, or the PolarDB clusters to which one or more tags are added.
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
      version: "2017-08-01",
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
   * Queries the tags that are added to one or more PolarDB clusters, or the PolarDB clusters to which one or more tags are added.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Manually starts a cluster.
   * 
   * @param request - ManuallyStartDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManuallyStartDBClusterResponse
   */
  async manuallyStartDBClusterWithOptions(request: $_model.ManuallyStartDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManuallyStartDBClusterResponse> {
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
      action: "ManuallyStartDBCluster",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManuallyStartDBClusterResponse>(await this.callApi(params, req, runtime), new $_model.ManuallyStartDBClusterResponse({}));
  }

  /**
   * Manually starts a cluster.
   * 
   * @param request - ManuallyStartDBClusterRequest
   * @returns ManuallyStartDBClusterResponse
   */
  async manuallyStartDBCluster(request: $_model.ManuallyStartDBClusterRequest): Promise<$_model.ManuallyStartDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manuallyStartDBClusterWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database account of a PolarDB cluster.
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
      version: "2017-08-01",
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
   * Modifies the description of a database account of a PolarDB cluster.
   * 
   * @param request - ModifyAccountDescriptionRequest
   * @returns ModifyAccountDescriptionResponse
   */
  async modifyAccountDescription(request: $_model.ModifyAccountDescriptionRequest): Promise<$_model.ModifyAccountDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountDescriptionWithOptions(request, runtime);
  }

  /**
   * Changes the password of a database account for a specified PolarDB cluster.
   * 
   * @param request - ModifyAccountPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPasswordWithOptions(request: $_model.ModifyAccountPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAccountPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.newAccountPassword)) {
      query["NewAccountPassword"] = request.newAccountPassword;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.passwordType)) {
      query["PasswordType"] = request.passwordType;
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
      action: "ModifyAccountPassword",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAccountPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAccountPasswordResponse({}));
  }

  /**
   * Changes the password of a database account for a specified PolarDB cluster.
   * 
   * @param request - ModifyAccountPasswordRequest
   * @returns ModifyAccountPasswordResponse
   */
  async modifyAccountPassword(request: $_model.ModifyAccountPasswordRequest): Promise<$_model.ModifyAccountPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAccountPasswordWithOptions(request, runtime);
  }

  /**
   * Modifies the switching time of scheduled O\\&M events for an instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasksWithOptions(request: $_model.ModifyActiveOperationTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyActiveOperationTasksResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.taskIds)) {
      query["TaskIds"] = request.taskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyActiveOperationTasks",
      version: "2017-08-01",
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
   * Modifies the switching time of scheduled O\\&M events for an instance.
   * 
   * @param request - ModifyActiveOperationTasksRequest
   * @returns ModifyActiveOperationTasksResponse
   */
  async modifyActiveOperationTasks(request: $_model.ModifyActiveOperationTasksRequest): Promise<$_model.ModifyActiveOperationTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyActiveOperationTasksWithOptions(request, runtime);
  }

  /**
   * Modifies the auto-renewal attributes of a subscription PolarDB cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttributeWithOptions(request: $_model.ModifyAutoRenewAttributeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAutoRenewAttributeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterIds)) {
      query["DBClusterIds"] = request.DBClusterIds;
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
      action: "ModifyAutoRenewAttribute",
      version: "2017-08-01",
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
   * Modifies the auto-renewal attributes of a subscription PolarDB cluster.
   * 
   * @param request - ModifyAutoRenewAttributeRequest
   * @returns ModifyAutoRenewAttributeResponse
   */
  async modifyAutoRenewAttribute(request: $_model.ModifyAutoRenewAttributeRequest): Promise<$_model.ModifyAutoRenewAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAutoRenewAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the automatic backup policy of a PolarDB cluster.
   * 
   * @remarks
   * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
   * 
   * @param tmpReq - ModifyBackupPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicyWithOptions(tmpReq: $_model.ModifyBackupPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyBackupPolicyResponse> {
    tmpReq.validate();
    let request = new $_model.ModifyBackupPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedDataPolicies)) {
      request.advancedDataPoliciesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedDataPolicies, "AdvancedDataPolicies", "json");
    }

    let query = { };
    if (!$dara.isNull(request.advancedDataPoliciesShrink)) {
      query["AdvancedDataPolicies"] = request.advancedDataPoliciesShrink;
    }

    if (!$dara.isNull(request.backupFrequency)) {
      query["BackupFrequency"] = request.backupFrequency;
    }

    if (!$dara.isNull(request.backupPolicyLevel)) {
      query["BackupPolicyLevel"] = request.backupPolicyLevel;
    }

    if (!$dara.isNull(request.backupRetentionPolicyOnClusterDeletion)) {
      query["BackupRetentionPolicyOnClusterDeletion"] = request.backupRetentionPolicyOnClusterDeletion;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.dataLevel1BackupFrequency)) {
      query["DataLevel1BackupFrequency"] = request.dataLevel1BackupFrequency;
    }

    if (!$dara.isNull(request.dataLevel1BackupPeriod)) {
      query["DataLevel1BackupPeriod"] = request.dataLevel1BackupPeriod;
    }

    if (!$dara.isNull(request.dataLevel1BackupRetentionPeriod)) {
      query["DataLevel1BackupRetentionPeriod"] = request.dataLevel1BackupRetentionPeriod;
    }

    if (!$dara.isNull(request.dataLevel1BackupTime)) {
      query["DataLevel1BackupTime"] = request.dataLevel1BackupTime;
    }

    if (!$dara.isNull(request.dataLevel2BackupAnotherRegionRegion)) {
      query["DataLevel2BackupAnotherRegionRegion"] = request.dataLevel2BackupAnotherRegionRegion;
    }

    if (!$dara.isNull(request.dataLevel2BackupAnotherRegionRetentionPeriod)) {
      query["DataLevel2BackupAnotherRegionRetentionPeriod"] = request.dataLevel2BackupAnotherRegionRetentionPeriod;
    }

    if (!$dara.isNull(request.dataLevel2BackupPeriod)) {
      query["DataLevel2BackupPeriod"] = request.dataLevel2BackupPeriod;
    }

    if (!$dara.isNull(request.dataLevel2BackupRetentionPeriod)) {
      query["DataLevel2BackupRetentionPeriod"] = request.dataLevel2BackupRetentionPeriod;
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
      version: "2017-08-01",
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
   * Modifies the automatic backup policy of a PolarDB cluster.
   * 
   * @remarks
   * > You can also modify the automatic backup policy of a PolarDB cluster in the console. For more information, see [Backup settings](https://help.aliyun.com/document_detail/280422.html).
   * 
   * @param request - ModifyBackupPolicyRequest
   * @returns ModifyBackupPolicyResponse
   */
  async modifyBackupPolicy(request: $_model.ModifyBackupPolicyRequest): Promise<$_model.ModifyBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a PolarDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterResponse
   */
  async modifyDBClusterWithOptions(request: $_model.ModifyDBClusterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.compressStorage)) {
      query["CompressStorage"] = request.compressStorage;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeCrashList)) {
      query["DBNodeCrashList"] = request.DBNodeCrashList;
    }

    if (!$dara.isNull(request.dataSyncMode)) {
      query["DataSyncMode"] = request.dataSyncMode;
    }

    if (!$dara.isNull(request.faultInjectionType)) {
      query["FaultInjectionType"] = request.faultInjectionType;
    }

    if (!$dara.isNull(request.faultSimulateMode)) {
      query["FaultSimulateMode"] = request.faultSimulateMode;
    }

    if (!$dara.isNull(request.imciAutoIndex)) {
      query["ImciAutoIndex"] = request.imciAutoIndex;
    }

    if (!$dara.isNull(request.modifyRowCompression)) {
      query["ModifyRowCompression"] = request.modifyRowCompression;
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

    if (!$dara.isNull(request.standbyHAMode)) {
      query["StandbyHAMode"] = request.standbyHAMode;
    }

    if (!$dara.isNull(request.storageAutoScale)) {
      query["StorageAutoScale"] = request.storageAutoScale;
    }

    if (!$dara.isNull(request.storageUpperBound)) {
      query["StorageUpperBound"] = request.storageUpperBound;
    }

    if (!$dara.isNull(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBCluster",
      version: "2017-08-01",
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
   * Modifies the configurations of a PolarDB for MySQL cluster.
   * 
   * @param request - ModifyDBClusterRequest
   * @returns ModifyDBClusterResponse
   */
  async modifyDBCluster(request: $_model.ModifyDBClusterRequest): Promise<$_model.ModifyDBClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterWithOptions(request, runtime);
  }

  /**
   * Creates or modifies the whitelists (IP whitelists and security groups) of a specified cluster.
   * 
   * @param request - ModifyDBClusterAccessWhitelistRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterAccessWhitelistResponse
   */
  async modifyDBClusterAccessWhitelistWithOptions(request: $_model.ModifyDBClusterAccessWhitelistRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAccessWhitelistResponse> {
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

    if (!$dara.isNull(request.securityGroupIds)) {
      query["SecurityGroupIds"] = request.securityGroupIds;
    }

    if (!$dara.isNull(request.securityIps)) {
      query["SecurityIps"] = request.securityIps;
    }

    if (!$dara.isNull(request.whiteListType)) {
      query["WhiteListType"] = request.whiteListType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterAccessWhitelist",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterAccessWhitelistResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterAccessWhitelistResponse({}));
  }

  /**
   * Creates or modifies the whitelists (IP whitelists and security groups) of a specified cluster.
   * 
   * @param request - ModifyDBClusterAccessWhitelistRequest
   * @returns ModifyDBClusterAccessWhitelistResponse
   */
  async modifyDBClusterAccessWhitelist(request: $_model.ModifyDBClusterAccessWhitelistRequest): Promise<$_model.ModifyDBClusterAccessWhitelistResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterAccessWhitelistWithOptions(request, runtime);
  }

  /**
   * Modifies cluster parameters and applies them to specified nodes.
   * 
   * @param request - ModifyDBClusterAndNodesParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterAndNodesParametersResponse
   */
  async modifyDBClusterAndNodesParametersWithOptions(request: $_model.ModifyDBClusterAndNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAndNodesParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.standbyClusterIdListNeedToSync)) {
      query["StandbyClusterIdListNeedToSync"] = request.standbyClusterIdListNeedToSync;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterAndNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterAndNodesParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterAndNodesParametersResponse({}));
  }

  /**
   * Modifies cluster parameters and applies them to specified nodes.
   * 
   * @param request - ModifyDBClusterAndNodesParametersRequest
   * @returns ModifyDBClusterAndNodesParametersResponse
   */
  async modifyDBClusterAndNodesParameters(request: $_model.ModifyDBClusterAndNodesParametersRequest): Promise<$_model.ModifyDBClusterAndNodesParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterAndNodesParametersWithOptions(request, runtime);
  }

  /**
   * Changes the high availability mode of the cluster.
   * 
   * @param request - ModifyDBClusterArchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterArchResponse
   */
  async modifyDBClusterArchWithOptions(request: $_model.ModifyDBClusterArchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterArchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.hotStandbyCluster)) {
      query["HotStandbyCluster"] = request.hotStandbyCluster;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.standbyAZ)) {
      query["StandbyAZ"] = request.standbyAZ;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterArch",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterArchResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterArchResponse({}));
  }

  /**
   * Changes the high availability mode of the cluster.
   * 
   * @param request - ModifyDBClusterArchRequest
   * @returns ModifyDBClusterArchResponse
   */
  async modifyDBClusterArch(request: $_model.ModifyDBClusterArchRequest): Promise<$_model.ModifyDBClusterArchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterArchWithOptions(request, runtime);
  }

  /**
   * Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
   * 
   * @param request - ModifyDBClusterAuditLogCollectorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterAuditLogCollectorResponse
   */
  async modifyDBClusterAuditLogCollectorWithOptions(request: $_model.ModifyDBClusterAuditLogCollectorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterAuditLogCollectorResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.collectorStatus)) {
      query["CollectorStatus"] = request.collectorStatus;
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
      action: "ModifyDBClusterAuditLogCollector",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterAuditLogCollectorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterAuditLogCollectorResponse({}));
  }

  /**
   * Enables or disables SQL collector for a PolarDB cluster. The features related to SQL collector include Audit Logs and SQL Explorer.
   * 
   * @param request - ModifyDBClusterAuditLogCollectorRequest
   * @returns ModifyDBClusterAuditLogCollectorResponse
   */
  async modifyDBClusterAuditLogCollector(request: $_model.ModifyDBClusterAuditLogCollectorRequest): Promise<$_model.ModifyDBClusterAuditLogCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterAuditLogCollectorWithOptions(request, runtime);
  }

  /**
   * Enables or disables the cluster lock feature for a PolarDB cluster.
   * 
   * @param request - ModifyDBClusterDeletionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterDeletionResponse
   */
  async modifyDBClusterDeletionWithOptions(request: $_model.ModifyDBClusterDeletionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterDeletionResponse> {
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

    if (!$dara.isNull(request.protection)) {
      query["Protection"] = request.protection;
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
      action: "ModifyDBClusterDeletion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterDeletionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterDeletionResponse({}));
  }

  /**
   * Enables or disables the cluster lock feature for a PolarDB cluster.
   * 
   * @param request - ModifyDBClusterDeletionRequest
   * @returns ModifyDBClusterDeletionResponse
   */
  async modifyDBClusterDeletion(request: $_model.ModifyDBClusterDeletionRequest): Promise<$_model.ModifyDBClusterDeletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterDeletionWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a PolarDB cluster.
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
      version: "2017-08-01",
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
   * Modifies the name of a PolarDB cluster.
   * 
   * @param request - ModifyDBClusterDescriptionRequest
   * @returns ModifyDBClusterDescriptionResponse
   */
  async modifyDBClusterDescription(request: $_model.ModifyDBClusterDescriptionRequest): Promise<$_model.ModifyDBClusterDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the attributes of a specified PolarDB cluster endpoint. For example, you can modify the following attributes for the specified cluster endpoint: read/write mode, consistency level, transaction splitting, primary node accepts read requests, and connection pool. You can also call the operation to specify whether newly added nodes are automatically associated with the specified cluster endpoint.
   * 
   * @param request - ModifyDBClusterEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterEndpointResponse
   */
  async modifyDBClusterEndpointWithOptions(request: $_model.ModifyDBClusterEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoAddNewNodes)) {
      query["AutoAddNewNodes"] = request.autoAddNewNodes;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointDescription)) {
      query["DBEndpointDescription"] = request.DBEndpointDescription;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.endpointConfig)) {
      query["EndpointConfig"] = request.endpointConfig;
    }

    if (!$dara.isNull(request.nodes)) {
      query["Nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.polarSccTimeoutAction)) {
      query["PolarSccTimeoutAction"] = request.polarSccTimeoutAction;
    }

    if (!$dara.isNull(request.polarSccWaitTimeout)) {
      query["PolarSccWaitTimeout"] = request.polarSccWaitTimeout;
    }

    if (!$dara.isNull(request.readWriteMode)) {
      query["ReadWriteMode"] = request.readWriteMode;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.sccMode)) {
      query["SccMode"] = request.sccMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterEndpoint",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterEndpointResponse({}));
  }

  /**
   * Modifies the attributes of a specified PolarDB cluster endpoint. For example, you can modify the following attributes for the specified cluster endpoint: read/write mode, consistency level, transaction splitting, primary node accepts read requests, and connection pool. You can also call the operation to specify whether newly added nodes are automatically associated with the specified cluster endpoint.
   * 
   * @param request - ModifyDBClusterEndpointRequest
   * @returns ModifyDBClusterEndpointResponse
   */
  async modifyDBClusterEndpoint(request: $_model.ModifyDBClusterEndpointRequest): Promise<$_model.ModifyDBClusterEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterEndpointWithOptions(request, runtime);
  }

  /**
   * Modifies the maintenance window of a PolarDB cluster.
   * 
   * @remarks
   * >  We recommend that you set the routine maintenance window to off-peak hours. Alibaba Cloud maintains your cluster within the specified maintenance window to minimize the negative impacts on your business.
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
      version: "2017-08-01",
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
   * Modifies the maintenance window of a PolarDB cluster.
   * 
   * @remarks
   * >  We recommend that you set the routine maintenance window to off-peak hours. Alibaba Cloud maintains your cluster within the specified maintenance window to minimize the negative impacts on your business.
   * 
   * @param request - ModifyDBClusterMaintainTimeRequest
   * @returns ModifyDBClusterMaintainTimeResponse
   */
  async modifyDBClusterMaintainTime(request: $_model.ModifyDBClusterMaintainTimeRequest): Promise<$_model.ModifyDBClusterMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMaintainTimeWithOptions(request, runtime);
  }

  /**
   * Switches or rolls back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * 
   * @remarks
   *   You can call this operation to switch the task that migrates data from ApsaraDB for RDS to PolarDB.
   * *   You can call this operation to roll back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   * 
   * @param request - ModifyDBClusterMigrationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMigrationResponse
   */
  async modifyDBClusterMigrationWithOptions(request: $_model.ModifyDBClusterMigrationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMigrationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStrings)) {
      query["ConnectionStrings"] = request.connectionStrings;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.newMasterInstanceId)) {
      query["NewMasterInstanceId"] = request.newMasterInstanceId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.sourceRDSDBInstanceId)) {
      query["SourceRDSDBInstanceId"] = request.sourceRDSDBInstanceId;
    }

    if (!$dara.isNull(request.swapConnectionString)) {
      query["SwapConnectionString"] = request.swapConnectionString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterMigration",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterMigrationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterMigrationResponse({}));
  }

  /**
   * Switches or rolls back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * 
   * @remarks
   *   You can call this operation to switch the task that migrates data from ApsaraDB for RDS to PolarDB.
   * *   You can call this operation to roll back the task that migrates data from ApsaraDB for RDS to PolarDB.
   * > Before you call this operation, ensure that a one-click upgrade task has been created for the cluster. You can call the [CreateDBCluster](https://help.aliyun.com/document_detail/98169.html) operation to create an upgrade task. Set the **CreationOption** parameter to **MigrationFromRDS**. For more information, see [Create a PolarDB for MySQL cluster by using the Migration from RDS method](https://help.aliyun.com/document_detail/121582.html).
   * 
   * @param request - ModifyDBClusterMigrationRequest
   * @returns ModifyDBClusterMigrationResponse
   */
  async modifyDBClusterMigration(request: $_model.ModifyDBClusterMigrationRequest): Promise<$_model.ModifyDBClusterMigrationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMigrationWithOptions(request, runtime);
  }

  /**
   * Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * 
   * @param request - ModifyDBClusterMonitorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterMonitorResponse
   */
  async modifyDBClusterMonitorWithOptions(request: $_model.ModifyDBClusterMonitorRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterMonitorResponse> {
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

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
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
      action: "ModifyDBClusterMonitor",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterMonitorResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterMonitorResponse({}));
  }

  /**
   * Modifies the interval at which the monitoring data of a PolarDB cluster is collected.
   * 
   * @remarks
   *   When the monitoring data is collected every 5 seconds:
   *     *   If the query time range is less than or equal to 1 hour, the data is displayed at intervals of 5 seconds.
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * *   When the monitoring data is collected every 60 seconds:
   *     *   If the query time range is less than or equal to one day, the data is displayed at intervals of 1 minute.
   *     *   If the query time range is less than or equal to seven days, the data is displayed at intervals of 10 minutes.
   *     *   If the query time range is less than or equal to 30 days, the data is displayed at intervals of 1 hour.
   *     *   When the query time range is greater than 30 days, the data is displayed at intervals of 1 day.
   * 
   * @param request - ModifyDBClusterMonitorRequest
   * @returns ModifyDBClusterMonitorResponse
   */
  async modifyDBClusterMonitor(request: $_model.ModifyDBClusterMonitorRequest): Promise<$_model.ModifyDBClusterMonitorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterMonitorWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of a specified PolarDB cluster or applies existing parameter templates to a specified cluster.
   * 
   * @remarks
   * PolarDB supports the parameter template feature to centrally manage clusters. You can configure a number of parameters at a time by using a parameter template and apply the template to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * **
   * **Only PolarDB for MySQL clusters support parameter templates.
   * 
   * @param request - ModifyDBClusterParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterParametersResponse
   */
  async modifyDBClusterParametersWithOptions(request: $_model.ModifyDBClusterParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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
      action: "ModifyDBClusterParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterParametersResponse({}));
  }

  /**
   * Modifies the parameters of a specified PolarDB cluster or applies existing parameter templates to a specified cluster.
   * 
   * @remarks
   * PolarDB supports the parameter template feature to centrally manage clusters. You can configure a number of parameters at a time by using a parameter template and apply the template to a PolarDB cluster. For more information, see [Use a parameter template](https://help.aliyun.com/document_detail/207009.html).
   * **
   * **Only PolarDB for MySQL clusters support parameter templates.
   * 
   * @param request - ModifyDBClusterParametersRequest
   * @returns ModifyDBClusterParametersResponse
   */
  async modifyDBClusterParameters(request: $_model.ModifyDBClusterParametersRequest): Promise<$_model.ModifyDBClusterParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterParametersWithOptions(request, runtime);
  }

  /**
   * Changes the primary zone of a PolarDB cluster.
   * 
   * @param request - ModifyDBClusterPrimaryZoneRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterPrimaryZoneResponse
   */
  async modifyDBClusterPrimaryZoneWithOptions(request: $_model.ModifyDBClusterPrimaryZoneRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterPrimaryZoneResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.isSwitchOverForDisaster)) {
      query["IsSwitchOverForDisaster"] = request.isSwitchOverForDisaster;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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

    if (!$dara.isNull(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    if (!$dara.isNull(request.zoneType)) {
      query["ZoneType"] = request.zoneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterPrimaryZone",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterPrimaryZoneResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterPrimaryZoneResponse({}));
  }

  /**
   * Changes the primary zone of a PolarDB cluster.
   * 
   * @param request - ModifyDBClusterPrimaryZoneRequest
   * @returns ModifyDBClusterPrimaryZoneResponse
   */
  async modifyDBClusterPrimaryZone(request: $_model.ModifyDBClusterPrimaryZoneRequest): Promise<$_model.ModifyDBClusterPrimaryZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterPrimaryZoneWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a resource group for a database cluster.
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
      action: "ModifyDBClusterResourceGroup",
      version: "2017-08-01",
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
   * Modifies the configurations of a resource group for a database cluster.
   * 
   * @param request - ModifyDBClusterResourceGroupRequest
   * @returns ModifyDBClusterResourceGroupResponse
   */
  async modifyDBClusterResourceGroup(request: $_model.ModifyDBClusterResourceGroupRequest): Promise<$_model.ModifyDBClusterResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterResourceGroupWithOptions(request, runtime);
  }

  /**
   * Enables or disables the SSL encryption feature for a PolarDB cluster, or updates the CA certificate of the cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSLWithOptions(request: $_model.ModifyDBClusterSSLRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterSSLResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
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

    if (!$dara.isNull(request.SSLAutoRotate)) {
      query["SSLAutoRotate"] = request.SSLAutoRotate;
    }

    if (!$dara.isNull(request.SSLEnabled)) {
      query["SSLEnabled"] = request.SSLEnabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterSSL",
      version: "2017-08-01",
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
   * Enables or disables the SSL encryption feature for a PolarDB cluster, or updates the CA certificate of the cluster.
   * 
   * @param request - ModifyDBClusterSSLRequest
   * @returns ModifyDBClusterSSLResponse
   */
  async modifyDBClusterSSL(request: $_model.ModifyDBClusterSSLRequest): Promise<$_model.ModifyDBClusterSSLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterSSLWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a serverless cluster.
   * 
   * @param request - ModifyDBClusterServerlessConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterServerlessConfResponse
   */
  async modifyDBClusterServerlessConfWithOptions(request: $_model.ModifyDBClusterServerlessConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterServerlessConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.allowShutDown)) {
      query["AllowShutDown"] = request.allowShutDown;
    }

    if (!$dara.isNull(request.crontabJobId)) {
      query["CrontabJobId"] = request.crontabJobId;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.scaleApRoNumMax)) {
      query["ScaleApRoNumMax"] = request.scaleApRoNumMax;
    }

    if (!$dara.isNull(request.scaleApRoNumMin)) {
      query["ScaleApRoNumMin"] = request.scaleApRoNumMin;
    }

    if (!$dara.isNull(request.scaleMax)) {
      query["ScaleMax"] = request.scaleMax;
    }

    if (!$dara.isNull(request.scaleMin)) {
      query["ScaleMin"] = request.scaleMin;
    }

    if (!$dara.isNull(request.scaleRoNumMax)) {
      query["ScaleRoNumMax"] = request.scaleRoNumMax;
    }

    if (!$dara.isNull(request.scaleRoNumMin)) {
      query["ScaleRoNumMin"] = request.scaleRoNumMin;
    }

    if (!$dara.isNull(request.secondsUntilAutoPause)) {
      query["SecondsUntilAutoPause"] = request.secondsUntilAutoPause;
    }

    if (!$dara.isNull(request.serverlessRuleCpuEnlargeThreshold)) {
      query["ServerlessRuleCpuEnlargeThreshold"] = request.serverlessRuleCpuEnlargeThreshold;
    }

    if (!$dara.isNull(request.serverlessRuleCpuShrinkThreshold)) {
      query["ServerlessRuleCpuShrinkThreshold"] = request.serverlessRuleCpuShrinkThreshold;
    }

    if (!$dara.isNull(request.serverlessRuleMode)) {
      query["ServerlessRuleMode"] = request.serverlessRuleMode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterServerlessConf",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterServerlessConfResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterServerlessConfResponse({}));
  }

  /**
   * Modifies the configurations of a serverless cluster.
   * 
   * @param request - ModifyDBClusterServerlessConfRequest
   * @returns ModifyDBClusterServerlessConfResponse
   */
  async modifyDBClusterServerlessConf(request: $_model.ModifyDBClusterServerlessConfRequest): Promise<$_model.ModifyDBClusterServerlessConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterServerlessConfWithOptions(request, runtime);
  }

  /**
   * 修改存储性能
   * 
   * @param request - ModifyDBClusterStoragePerformanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterStoragePerformanceResponse
   */
  async modifyDBClusterStoragePerformanceWithOptions(request: $_model.ModifyDBClusterStoragePerformanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterStoragePerformanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.burstingEnabled)) {
      query["BurstingEnabled"] = request.burstingEnabled;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.provisionedIops)) {
      query["ProvisionedIops"] = request.provisionedIops;
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
      action: "ModifyDBClusterStoragePerformance",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterStoragePerformanceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterStoragePerformanceResponse({}));
  }

  /**
   * 修改存储性能
   * 
   * @param request - ModifyDBClusterStoragePerformanceRequest
   * @returns ModifyDBClusterStoragePerformanceResponse
   */
  async modifyDBClusterStoragePerformance(request: $_model.ModifyDBClusterStoragePerformanceRequest): Promise<$_model.ModifyDBClusterStoragePerformanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterStoragePerformanceWithOptions(request, runtime);
  }

  /**
   * Changes the storage capacity of a pay-as-you-go cluster of Enterprise Edition or a cluster of Standard Edition.
   * 
   * @param request - ModifyDBClusterStorageSpaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterStorageSpaceResponse
   */
  async modifyDBClusterStorageSpaceWithOptions(request: $_model.ModifyDBClusterStorageSpaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterStorageSpaceResponse> {
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

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.storageSpace)) {
      query["StorageSpace"] = request.storageSpace;
    }

    if (!$dara.isNull(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterStorageSpace",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterStorageSpaceResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterStorageSpaceResponse({}));
  }

  /**
   * Changes the storage capacity of a pay-as-you-go cluster of Enterprise Edition or a cluster of Standard Edition.
   * 
   * @param request - ModifyDBClusterStorageSpaceRequest
   * @returns ModifyDBClusterStorageSpaceResponse
   */
  async modifyDBClusterStorageSpace(request: $_model.ModifyDBClusterStorageSpaceRequest): Promise<$_model.ModifyDBClusterStorageSpaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterStorageSpaceWithOptions(request, runtime);
  }

  /**
   * Enables the transparent data encryption (TDE) feature for a PolarDB cluster.
   * 
   * @remarks
   * > *   To perform this operation, you must activate KMS first. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
   * > *   After TDE is enabled, you cannot disable TDE.
   * 
   * @param request - ModifyDBClusterTDERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBClusterTDEResponse
   */
  async modifyDBClusterTDEWithOptions(request: $_model.ModifyDBClusterTDERequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBClusterTDEResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.enableAutomaticRotation)) {
      query["EnableAutomaticRotation"] = request.enableAutomaticRotation;
    }

    if (!$dara.isNull(request.encryptNewTables)) {
      query["EncryptNewTables"] = request.encryptNewTables;
    }

    if (!$dara.isNull(request.encryptionKey)) {
      query["EncryptionKey"] = request.encryptionKey;
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

    if (!$dara.isNull(request.roleArn)) {
      query["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.TDEStatus)) {
      query["TDEStatus"] = request.TDEStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBClusterTDE",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBClusterTDEResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBClusterTDEResponse({}));
  }

  /**
   * Enables the transparent data encryption (TDE) feature for a PolarDB cluster.
   * 
   * @remarks
   * > *   To perform this operation, you must activate KMS first. For more information, see [Purchase a dedicated KMS instance](https://help.aliyun.com/document_detail/153781.html).
   * > *   After TDE is enabled, you cannot disable TDE.
   * 
   * @param request - ModifyDBClusterTDERequest
   * @returns ModifyDBClusterTDEResponse
   */
  async modifyDBClusterTDE(request: $_model.ModifyDBClusterTDERequest): Promise<$_model.ModifyDBClusterTDEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBClusterTDEWithOptions(request, runtime);
  }

  /**
   * Modifies the description of a database in a PolarDB for MySQL cluster.
   * 
   * @param request - ModifyDBDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBDescriptionResponse
   */
  async modifyDBDescriptionWithOptions(request: $_model.ModifyDBDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBDescription)) {
      query["DBDescription"] = request.DBDescription;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "ModifyDBDescription",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBDescriptionResponse({}));
  }

  /**
   * Modifies the description of a database in a PolarDB for MySQL cluster.
   * 
   * @param request - ModifyDBDescriptionRequest
   * @returns ModifyDBDescriptionResponse
   */
  async modifyDBDescription(request: $_model.ModifyDBDescriptionRequest): Promise<$_model.ModifyDBDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBDescriptionWithOptions(request, runtime);
  }

  /**
   * Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
   * 
   * @param request - ModifyDBEndpointAddressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBEndpointAddressResponse
   */
  async modifyDBEndpointAddressWithOptions(request: $_model.ModifyDBEndpointAddressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBEndpointAddressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.connectionStringPrefix)) {
      query["ConnectionStringPrefix"] = request.connectionStringPrefix;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBEndpointId)) {
      query["DBEndpointId"] = request.DBEndpointId;
    }

    if (!$dara.isNull(request.netType)) {
      query["NetType"] = request.netType;
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

    if (!$dara.isNull(request.privateZoneAddressPrefix)) {
      query["PrivateZoneAddressPrefix"] = request.privateZoneAddressPrefix;
    }

    if (!$dara.isNull(request.privateZoneName)) {
      query["PrivateZoneName"] = request.privateZoneName;
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
      action: "ModifyDBEndpointAddress",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBEndpointAddressResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBEndpointAddressResponse({}));
  }

  /**
   * Modifies the endpoints of a PolarDB cluster, including the primary endpoint, default cluster endpoint, custom cluster endpoint, and private domain name.
   * 
   * @param request - ModifyDBEndpointAddressRequest
   * @returns ModifyDBEndpointAddressResponse
   */
  async modifyDBEndpointAddress(request: $_model.ModifyDBEndpointAddressRequest): Promise<$_model.ModifyDBEndpointAddressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBEndpointAddressWithOptions(request, runtime);
  }

  /**
   * Changes the node specifications of a PolarDB cluster.
   * 
   * @param request - ModifyDBNodeClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodeClassResponse
   */
  async modifyDBNodeClassWithOptions(request: $_model.ModifyDBNodeClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeTargetClass)) {
      query["DBNodeTargetClass"] = request.DBNodeTargetClass;
    }

    if (!$dara.isNull(request.DBNodeType)) {
      query["DBNodeType"] = request.DBNodeType;
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

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedFlashingOffTime)) {
      query["PlannedFlashingOffTime"] = request.plannedFlashingOffTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBNodeClass",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodeClassResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodeClassResponse({}));
  }

  /**
   * Changes the node specifications of a PolarDB cluster.
   * 
   * @param request - ModifyDBNodeClassRequest
   * @returns ModifyDBNodeClassResponse
   */
  async modifyDBNodeClass(request: $_model.ModifyDBNodeClassRequest): Promise<$_model.ModifyDBNodeClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodeClassWithOptions(request, runtime);
  }

  /**
   * 修改物理节点描述
   * 
   * @param request - ModifyDBNodeDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodeDescriptionResponse
   */
  async modifyDBNodeDescriptionWithOptions(request: $_model.ModifyDBNodeDescriptionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeDescriptionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeDescription)) {
      query["DBNodeDescription"] = request.DBNodeDescription;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
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
      action: "ModifyDBNodeDescription",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodeDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodeDescriptionResponse({}));
  }

  /**
   * 修改物理节点描述
   * 
   * @param request - ModifyDBNodeDescriptionRequest
   * @returns ModifyDBNodeDescriptionResponse
   */
  async modifyDBNodeDescription(request: $_model.ModifyDBNodeDescriptionRequest): Promise<$_model.ModifyDBNodeDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodeDescriptionWithOptions(request, runtime);
  }

  /**
   * Enables or disables the failover with hot replica feature for a node in a cluster.
   * 
   * @param request - ModifyDBNodeHotReplicaModeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodeHotReplicaModeResponse
   */
  async modifyDBNodeHotReplicaModeWithOptions(request: $_model.ModifyDBNodeHotReplicaModeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodeHotReplicaModeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
    }

    if (!$dara.isNull(request.hotReplicaMode)) {
      query["HotReplicaMode"] = request.hotReplicaMode;
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
      action: "ModifyDBNodeHotReplicaMode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodeHotReplicaModeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodeHotReplicaModeResponse({}));
  }

  /**
   * Enables or disables the failover with hot replica feature for a node in a cluster.
   * 
   * @param request - ModifyDBNodeHotReplicaModeRequest
   * @returns ModifyDBNodeHotReplicaModeResponse
   */
  async modifyDBNodeHotReplicaMode(request: $_model.ModifyDBNodeHotReplicaModeRequest): Promise<$_model.ModifyDBNodeHotReplicaModeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodeHotReplicaModeWithOptions(request, runtime);
  }

  /**
   * Changes the specifications of a node in a PolarDB cluster.
   * 
   * @param request - ModifyDBNodesClassRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodesClassResponse
   */
  async modifyDBNodesClassWithOptions(request: $_model.ModifyDBNodesClassRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodesClassResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNode)) {
      query["DBNode"] = request.DBNode;
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

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedFlashingOffTime)) {
      query["PlannedFlashingOffTime"] = request.plannedFlashingOffTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.subCategory)) {
      query["SubCategory"] = request.subCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDBNodesClass",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodesClassResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodesClassResponse({}));
  }

  /**
   * Changes the specifications of a node in a PolarDB cluster.
   * 
   * @param request - ModifyDBNodesClassRequest
   * @returns ModifyDBNodesClassResponse
   */
  async modifyDBNodesClass(request: $_model.ModifyDBNodesClassRequest): Promise<$_model.ModifyDBNodesClassResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodesClassWithOptions(request, runtime);
  }

  /**
   * Modifies the parameters of a node and applies them to specified nodes.
   * 
   * @param request - ModifyDBNodesParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDBNodesParametersResponse
   */
  async modifyDBNodesParametersWithOptions(request: $_model.ModifyDBNodesParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDBNodesParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNodeIds)) {
      query["DBNodeIds"] = request.DBNodeIds;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.parameterGroupId)) {
      query["ParameterGroupId"] = request.parameterGroupId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
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
      action: "ModifyDBNodesParameters",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDBNodesParametersResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDBNodesParametersResponse({}));
  }

  /**
   * Modifies the parameters of a node and applies them to specified nodes.
   * 
   * @param request - ModifyDBNodesParametersRequest
   * @returns ModifyDBNodesParametersResponse
   */
  async modifyDBNodesParameters(request: $_model.ModifyDBNodesParametersRequest): Promise<$_model.ModifyDBNodesParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDBNodesParametersWithOptions(request, runtime);
  }

  /**
   * Modifies a global database network (GDN).
   * 
   * @param request - ModifyGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalDatabaseNetworkResponse
   */
  async modifyGlobalDatabaseNetworkWithOptions(request: $_model.ModifyGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableGlobalDomainName)) {
      query["EnableGlobalDomainName"] = request.enableGlobalDomainName;
    }

    if (!$dara.isNull(request.GDNDescription)) {
      query["GDNDescription"] = request.GDNDescription;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGlobalDatabaseNetworkResponse({}));
  }

  /**
   * Modifies a global database network (GDN).
   * 
   * @param request - ModifyGlobalDatabaseNetworkRequest
   * @returns ModifyGlobalDatabaseNetworkResponse
   */
  async modifyGlobalDatabaseNetwork(request: $_model.ModifyGlobalDatabaseNetworkRequest): Promise<$_model.ModifyGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Modifies an IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroupWithOptions(request: $_model.ModifyGlobalSecurityIPGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.GIpList)) {
      query["GIpList"] = request.GIpList;
    }

    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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
      action: "ModifyGlobalSecurityIPGroup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGlobalSecurityIPGroupResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGlobalSecurityIPGroupResponse({}));
  }

  /**
   * Modifies an IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRequest
   * @returns ModifyGlobalSecurityIPGroupResponse
   */
  async modifyGlobalSecurityIPGroup(request: $_model.ModifyGlobalSecurityIPGroupRequest): Promise<$_model.ModifyGlobalSecurityIPGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupWithOptions(request, runtime);
  }

  /**
   * Modifies the name of a global IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupNameWithOptions(request: $_model.ModifyGlobalSecurityIPGroupNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.globalIgName)) {
      query["GlobalIgName"] = request.globalIgName;
    }

    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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
      action: "ModifyGlobalSecurityIPGroupName",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGlobalSecurityIPGroupNameResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGlobalSecurityIPGroupNameResponse({}));
  }

  /**
   * Modifies the name of a global IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupNameRequest
   * @returns ModifyGlobalSecurityIPGroupNameResponse
   */
  async modifyGlobalSecurityIPGroupName(request: $_model.ModifyGlobalSecurityIPGroupNameRequest): Promise<$_model.ModifyGlobalSecurityIPGroupNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupNameWithOptions(request, runtime);
  }

  /**
   * Modifies the relationship between a cluster and a global IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelationWithOptions(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.globalSecurityGroupId)) {
      query["GlobalSecurityGroupId"] = request.globalSecurityGroupId;
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
      action: "ModifyGlobalSecurityIPGroupRelation",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyGlobalSecurityIPGroupRelationResponse>(await this.callApi(params, req, runtime), new $_model.ModifyGlobalSecurityIPGroupRelationResponse({}));
  }

  /**
   * Modifies the relationship between a cluster and a global IP whitelist template.
   * 
   * @param request - ModifyGlobalSecurityIPGroupRelationRequest
   * @returns ModifyGlobalSecurityIPGroupRelationResponse
   */
  async modifyGlobalSecurityIPGroupRelation(request: $_model.ModifyGlobalSecurityIPGroupRelationRequest): Promise<$_model.ModifyGlobalSecurityIPGroupRelationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyGlobalSecurityIPGroupRelationWithOptions(request, runtime);
  }

  /**
   * Modifies the retention policy of the log backups in a PolarDB cluster.
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

    if (!$dara.isNull(request.logBackupAnotherRegionRegion)) {
      query["LogBackupAnotherRegionRegion"] = request.logBackupAnotherRegionRegion;
    }

    if (!$dara.isNull(request.logBackupAnotherRegionRetentionPeriod)) {
      query["LogBackupAnotherRegionRetentionPeriod"] = request.logBackupAnotherRegionRetentionPeriod;
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
      version: "2017-08-01",
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
   * Modifies the retention policy of the log backups in a PolarDB cluster.
   * 
   * @param request - ModifyLogBackupPolicyRequest
   * @returns ModifyLogBackupPolicyResponse
   */
  async modifyLogBackupPolicy(request: $_model.ModifyLogBackupPolicyRequest): Promise<$_model.ModifyLogBackupPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyLogBackupPolicyWithOptions(request, runtime);
  }

  /**
   * Modifies or adds a data masking rule.
   * 
   * @param request - ModifyMaskingRulesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyMaskingRulesResponse
   */
  async modifyMaskingRulesWithOptions(request: $_model.ModifyMaskingRulesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyMaskingRulesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.defaultAlgo)) {
      query["DefaultAlgo"] = request.defaultAlgo;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.interfaceVersion)) {
      query["InterfaceVersion"] = request.interfaceVersion;
    }

    if (!$dara.isNull(request.maskingAlgo)) {
      query["MaskingAlgo"] = request.maskingAlgo;
    }

    if (!$dara.isNull(request.ruleConfig)) {
      query["RuleConfig"] = request.ruleConfig;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.ruleNameList)) {
      query["RuleNameList"] = request.ruleNameList;
    }

    if (!$dara.isNull(request.ruleVersion)) {
      query["RuleVersion"] = request.ruleVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyMaskingRules",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyMaskingRulesResponse>(await this.callApi(params, req, runtime), new $_model.ModifyMaskingRulesResponse({}));
  }

  /**
   * Modifies or adds a data masking rule.
   * 
   * @param request - ModifyMaskingRulesRequest
   * @returns ModifyMaskingRulesResponse
   */
  async modifyMaskingRules(request: $_model.ModifyMaskingRulesRequest): Promise<$_model.ModifyMaskingRulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyMaskingRulesWithOptions(request, runtime);
  }

  /**
   * Modifies the switching time of a pending event.
   * 
   * @param request - ModifyPendingMaintenanceActionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPendingMaintenanceActionResponse
   */
  async modifyPendingMaintenanceActionWithOptions(request: $_model.ModifyPendingMaintenanceActionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPendingMaintenanceActionResponse> {
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

    if (!$dara.isNull(request.switchTime)) {
      query["SwitchTime"] = request.switchTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPendingMaintenanceAction",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPendingMaintenanceActionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPendingMaintenanceActionResponse({}));
  }

  /**
   * Modifies the switching time of a pending event.
   * 
   * @param request - ModifyPendingMaintenanceActionRequest
   * @returns ModifyPendingMaintenanceActionResponse
   */
  async modifyPendingMaintenanceAction(request: $_model.ModifyPendingMaintenanceActionRequest): Promise<$_model.ModifyPendingMaintenanceActionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyPendingMaintenanceActionWithOptions(request, runtime);
  }

  /**
   * Enables the PolarDB for AI feature for a cluster.
   * 
   * @param request - OpenAITaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenAITaskResponse
   */
  async openAITaskWithOptions(request: $_model.OpenAITaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenAITaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["NodeType"] = request.nodeType;
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

    if (!$dara.isNull(request.username)) {
      query["Username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenAITask",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenAITaskResponse>(await this.callApi(params, req, runtime), new $_model.OpenAITaskResponse({}));
  }

  /**
   * Enables the PolarDB for AI feature for a cluster.
   * 
   * @param request - OpenAITaskRequest
   * @returns OpenAITaskResponse
   */
  async openAITask(request: $_model.OpenAITaskRequest): Promise<$_model.OpenAITaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openAITaskWithOptions(request, runtime);
  }

  /**
   * Reactivates the backup feature.
   * 
   * @param request - ReactivateDBClusterBackupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReactivateDBClusterBackupResponse
   */
  async reactivateDBClusterBackupWithOptions(request: $_model.ReactivateDBClusterBackupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReactivateDBClusterBackupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReactivateDBClusterBackup",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReactivateDBClusterBackupResponse>(await this.callApi(params, req, runtime), new $_model.ReactivateDBClusterBackupResponse({}));
  }

  /**
   * Reactivates the backup feature.
   * 
   * @param request - ReactivateDBClusterBackupRequest
   * @returns ReactivateDBClusterBackupResponse
   */
  async reactivateDBClusterBackup(request: $_model.ReactivateDBClusterBackupRequest): Promise<$_model.ReactivateDBClusterBackupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reactivateDBClusterBackupWithOptions(request, runtime);
  }

  /**
   * Updates the storage usage of a cluster.
   * 
   * @param request - RefreshDBClusterStorageUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefreshDBClusterStorageUsageResponse
   */
  async refreshDBClusterStorageUsageWithOptions(request: $_model.RefreshDBClusterStorageUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefreshDBClusterStorageUsageResponse> {
    request.validate();
    let query = { };
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

    if (!$dara.isNull(request.syncRealTime)) {
      query["SyncRealTime"] = request.syncRealTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefreshDBClusterStorageUsage",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefreshDBClusterStorageUsageResponse>(await this.callApi(params, req, runtime), new $_model.RefreshDBClusterStorageUsageResponse({}));
  }

  /**
   * Updates the storage usage of a cluster.
   * 
   * @param request - RefreshDBClusterStorageUsageRequest
   * @returns RefreshDBClusterStorageUsageResponse
   */
  async refreshDBClusterStorageUsage(request: $_model.RefreshDBClusterStorageUsageRequest): Promise<$_model.RefreshDBClusterStorageUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refreshDBClusterStorageUsageWithOptions(request, runtime);
  }

  /**
   * Removes a secondary cluster from a GDN.
   * 
   * @remarks
   * >  You cannot remove the primary cluster from a GDN.
   * 
   * @param request - RemoveDBClusterFromGDNRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveDBClusterFromGDNResponse
   */
  async removeDBClusterFromGDNWithOptions(request: $_model.RemoveDBClusterFromGDNRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveDBClusterFromGDNResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveDBClusterFromGDN",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveDBClusterFromGDNResponse>(await this.callApi(params, req, runtime), new $_model.RemoveDBClusterFromGDNResponse({}));
  }

  /**
   * Removes a secondary cluster from a GDN.
   * 
   * @remarks
   * >  You cannot remove the primary cluster from a GDN.
   * 
   * @param request - RemoveDBClusterFromGDNRequest
   * @returns RemoveDBClusterFromGDNResponse
   */
  async removeDBClusterFromGDN(request: $_model.RemoveDBClusterFromGDNRequest): Promise<$_model.RemoveDBClusterFromGDNResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeDBClusterFromGDNWithOptions(request, runtime);
  }

  /**
   * Resets the permissions of a privileged account for a PolarDB cluster.
   * 
   * @remarks
   * >- Only PolarDB for MySQL clusters support this operation.
   * >- If the privileged account of your cluster encounters exceptions, you can call this operation to reset the permissions. For example, the permissions are accidentally revoked.
   * 
   * @param request - ResetAccountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetAccountResponse
   */
  async resetAccountWithOptions(request: $_model.ResetAccountRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetAccountResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.accountPassword)) {
      query["AccountPassword"] = request.accountPassword;
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
      action: "ResetAccount",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetAccountResponse>(await this.callApi(params, req, runtime), new $_model.ResetAccountResponse({}));
  }

  /**
   * Resets the permissions of a privileged account for a PolarDB cluster.
   * 
   * @remarks
   * >- Only PolarDB for MySQL clusters support this operation.
   * >- If the privileged account of your cluster encounters exceptions, you can call this operation to reset the permissions. For example, the permissions are accidentally revoked.
   * 
   * @param request - ResetAccountRequest
   * @returns ResetAccountResponse
   */
  async resetAccount(request: $_model.ResetAccountRequest): Promise<$_model.ResetAccountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetAccountWithOptions(request, runtime);
  }

  /**
   * Rebuilds a secondary cluster in a Global Database Network (GDN).
   * 
   * @param request - ResetGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetGlobalDatabaseNetworkResponse
   */
  async resetGlobalDatabaseNetworkWithOptions(request: $_model.ResetGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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
      action: "ResetGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.ResetGlobalDatabaseNetworkResponse({}));
  }

  /**
   * Rebuilds a secondary cluster in a Global Database Network (GDN).
   * 
   * @param request - ResetGlobalDatabaseNetworkRequest
   * @returns ResetGlobalDatabaseNetworkResponse
   */
  async resetGlobalDatabaseNetwork(request: $_model.ResetGlobalDatabaseNetworkRequest): Promise<$_model.ResetGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Restarts database links.
   * 
   * @param request - RestartDBLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBLinkResponse
   */
  async restartDBLinkWithOptions(request: $_model.RestartDBLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBLinkResponse> {
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

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartDBLink",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBLinkResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBLinkResponse({}));
  }

  /**
   * Restarts database links.
   * 
   * @param request - RestartDBLinkRequest
   * @returns RestartDBLinkResponse
   */
  async restartDBLink(request: $_model.RestartDBLinkRequest): Promise<$_model.RestartDBLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBLinkWithOptions(request, runtime);
  }

  /**
   * Restarts a node in a PolarDB cluster.
   * 
   * @param request - RestartDBNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartDBNodeResponse
   */
  async restartDBNodeWithOptions(request: $_model.RestartDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestartDBNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBNodeId)) {
      query["DBNodeId"] = request.DBNodeId;
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
      action: "RestartDBNode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartDBNodeResponse>(await this.callApi(params, req, runtime), new $_model.RestartDBNodeResponse({}));
  }

  /**
   * Restarts a node in a PolarDB cluster.
   * 
   * @param request - RestartDBNodeRequest
   * @returns RestartDBNodeResponse
   */
  async restartDBNode(request: $_model.RestartDBNodeRequest): Promise<$_model.RestartDBNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restartDBNodeWithOptions(request, runtime);
  }

  /**
   * Restores PolarDB databases and tables.
   * 
   * @param request - RestoreTableRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestoreTableResponse
   */
  async restoreTableWithOptions(request: $_model.RestoreTableRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RestoreTableResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupId)) {
      query["BackupId"] = request.backupId;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    if (!$dara.isNull(request.securityToken)) {
      query["SecurityToken"] = request.securityToken;
    }

    if (!$dara.isNull(request.tableMeta)) {
      query["TableMeta"] = request.tableMeta;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestoreTable",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestoreTableResponse>(await this.callApi(params, req, runtime), new $_model.RestoreTableResponse({}));
  }

  /**
   * Restores PolarDB databases and tables.
   * 
   * @param request - RestoreTableRequest
   * @returns RestoreTableResponse
   */
  async restoreTable(request: $_model.RestoreTableRequest): Promise<$_model.RestoreTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.restoreTableWithOptions(request, runtime);
  }

  /**
   * Revokes the access permissions on one or more databases from a specified PolarDB standard account.
   * 
   * @param request - RevokeAccountPrivilegeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilegeWithOptions(request: $_model.RevokeAccountPrivilegeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RevokeAccountPrivilegeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accountName)) {
      query["AccountName"] = request.accountName;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBName)) {
      query["DBName"] = request.DBName;
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
      action: "RevokeAccountPrivilege",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RevokeAccountPrivilegeResponse>(await this.callApi(params, req, runtime), new $_model.RevokeAccountPrivilegeResponse({}));
  }

  /**
   * Revokes the access permissions on one or more databases from a specified PolarDB standard account.
   * 
   * @param request - RevokeAccountPrivilegeRequest
   * @returns RevokeAccountPrivilegeResponse
   */
  async revokeAccountPrivilege(request: $_model.RevokeAccountPrivilegeRequest): Promise<$_model.RevokeAccountPrivilegeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.revokeAccountPrivilegeWithOptions(request, runtime);
  }

  /**
   * @param request - SwitchOverGlobalDatabaseNetworkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SwitchOverGlobalDatabaseNetworkResponse
   */
  async switchOverGlobalDatabaseNetworkWithOptions(request: $_model.SwitchOverGlobalDatabaseNetworkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SwitchOverGlobalDatabaseNetworkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.forced)) {
      query["Forced"] = request.forced;
    }

    if (!$dara.isNull(request.GDNId)) {
      query["GDNId"] = request.GDNId;
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
      action: "SwitchOverGlobalDatabaseNetwork",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SwitchOverGlobalDatabaseNetworkResponse>(await this.callApi(params, req, runtime), new $_model.SwitchOverGlobalDatabaseNetworkResponse({}));
  }

  /**
   * @param request - SwitchOverGlobalDatabaseNetworkRequest
   * @returns SwitchOverGlobalDatabaseNetworkResponse
   */
  async switchOverGlobalDatabaseNetwork(request: $_model.SwitchOverGlobalDatabaseNetworkRequest): Promise<$_model.SwitchOverGlobalDatabaseNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.switchOverGlobalDatabaseNetworkWithOptions(request, runtime);
  }

  /**
   * Creates tags for a PolarDB cluster.
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
      version: "2017-08-01",
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
   * Creates tags for a PolarDB cluster.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Temporarily changes the node configurations.
   * 
   * @param request - TempModifyDBNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TempModifyDBNodeResponse
   */
  async tempModifyDBNodeWithOptions(request: $_model.TempModifyDBNodeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TempModifyDBNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.DBNode)) {
      query["DBNode"] = request.DBNode;
    }

    if (!$dara.isNull(request.modifyType)) {
      query["ModifyType"] = request.modifyType;
    }

    if (!$dara.isNull(request.operationType)) {
      query["OperationType"] = request.operationType;
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

    if (!$dara.isNull(request.restoreTime)) {
      query["RestoreTime"] = request.restoreTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TempModifyDBNode",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TempModifyDBNodeResponse>(await this.callApi(params, req, runtime), new $_model.TempModifyDBNodeResponse({}));
  }

  /**
   * Temporarily changes the node configurations.
   * 
   * @param request - TempModifyDBNodeRequest
   * @returns TempModifyDBNodeResponse
   */
  async tempModifyDBNode(request: $_model.TempModifyDBNodeRequest): Promise<$_model.TempModifyDBNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tempModifyDBNodeWithOptions(request, runtime);
  }

  /**
   * Changes the billing method of a PolarDB cluster.
   * 
   * @remarks
   * > 
   * *   PolarDB clusters support the subscription and pay-as-you-go billing methods. You can change the billing method from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Change the billing method from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Change the billing method from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
   * *   You cannot change the billing method from pay-as-you-go to subscription if your account balance is insufficient.
   * *   If you change the billing method from subscription to pay-as-you-go, the system automatically refunds the balance of the prepaid subscription fees.
   * 
   * @param request - TransformDBClusterPayTypeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransformDBClusterPayTypeResponse
   */
  async transformDBClusterPayTypeWithOptions(request: $_model.TransformDBClusterPayTypeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TransformDBClusterPayTypeResponse> {
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

    if (!$dara.isNull(request.usedTime)) {
      query["UsedTime"] = request.usedTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransformDBClusterPayType",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransformDBClusterPayTypeResponse>(await this.callApi(params, req, runtime), new $_model.TransformDBClusterPayTypeResponse({}));
  }

  /**
   * Changes the billing method of a PolarDB cluster.
   * 
   * @remarks
   * > 
   * *   PolarDB clusters support the subscription and pay-as-you-go billing methods. You can change the billing method from subscription to pay-as-you-go or from pay-as-you-go to subscription based on your business requirements. For more information, see [Change the billing method from subscription to pay-as-you-go](https://help.aliyun.com/document_detail/172886.html) and [Change the billing method from pay-as-you-go to subscription](https://help.aliyun.com/document_detail/84076.html).
   * *   You cannot change the billing method from pay-as-you-go to subscription if your account balance is insufficient.
   * *   If you change the billing method from subscription to pay-as-you-go, the system automatically refunds the balance of the prepaid subscription fees.
   * 
   * @param request - TransformDBClusterPayTypeRequest
   * @returns TransformDBClusterPayTypeResponse
   */
  async transformDBClusterPayType(request: $_model.TransformDBClusterPayTypeRequest): Promise<$_model.TransformDBClusterPayTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.transformDBClusterPayTypeWithOptions(request, runtime);
  }

  /**
   * Unbinds tags from PolarDB clusters.
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
      version: "2017-08-01",
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
   * Unbinds tags from PolarDB clusters.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Upgrades the kernel version of a PolarDB for MySQL cluster.
   * 
   * @remarks
   * > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
   * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
   * 
   * @param request - UpgradeDBClusterVersionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeDBClusterVersionResponse
   */
  async upgradeDBClusterVersionWithOptions(request: $_model.UpgradeDBClusterVersionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeDBClusterVersionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.DBClusterId)) {
      query["DBClusterId"] = request.DBClusterId;
    }

    if (!$dara.isNull(request.fromTimeService)) {
      query["FromTimeService"] = request.fromTimeService;
    }

    if (!$dara.isNull(request.ownerAccount)) {
      query["OwnerAccount"] = request.ownerAccount;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.plannedEndTime)) {
      query["PlannedEndTime"] = request.plannedEndTime;
    }

    if (!$dara.isNull(request.plannedStartTime)) {
      query["PlannedStartTime"] = request.plannedStartTime;
    }

    if (!$dara.isNull(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!$dara.isNull(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!$dara.isNull(request.targetDBRevisionVersionCode)) {
      query["TargetDBRevisionVersionCode"] = request.targetDBRevisionVersionCode;
    }

    if (!$dara.isNull(request.targetProxyRevisionVersionCode)) {
      query["TargetProxyRevisionVersionCode"] = request.targetProxyRevisionVersionCode;
    }

    if (!$dara.isNull(request.upgradeLabel)) {
      query["UpgradeLabel"] = request.upgradeLabel;
    }

    if (!$dara.isNull(request.upgradePolicy)) {
      query["UpgradePolicy"] = request.upgradePolicy;
    }

    if (!$dara.isNull(request.upgradeType)) {
      query["UpgradeType"] = request.upgradeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeDBClusterVersion",
      version: "2017-08-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeDBClusterVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeDBClusterVersionResponse({}));
  }

  /**
   * Upgrades the kernel version of a PolarDB for MySQL cluster.
   * 
   * @remarks
   * > *  You can update only the revision version of a PolarDB for MySQL cluster, for example, from 8.0.1.1.3 to 8.0.1.1.4.
   * >*   You can use only your Alibaba Cloud account to create scheduled tasks that update the kernel version of a PolarDB for MySQL cluster. RAM users are not authorized to update the kernel version of a PolarDB for MySQL cluster.
   * 
   * @param request - UpgradeDBClusterVersionRequest
   * @returns UpgradeDBClusterVersionResponse
   */
  async upgradeDBClusterVersion(request: $_model.UpgradeDBClusterVersionRequest): Promise<$_model.UpgradeDBClusterVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.upgradeDBClusterVersionWithOptions(request, runtime);
  }

}
